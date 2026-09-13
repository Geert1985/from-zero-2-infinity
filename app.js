const ADMIN_USER = "admin";
const ADMIN_PASS = "infinity";

function progress() {
  return store.getState();
}

function isAdmin() {
  return Boolean(progress().admin);
}

function milestonesFor(phaseId) {
  return filterMilestonesByPhase(MILESTONES, phaseId);
}

function milestonePassed(id) {
  return Boolean(progress().milestones[id]?.passed);
}

function allMilestonesPassed(phaseId) {
  if (isAdmin()) return true;
  const list = milestonesFor(phaseId);
  return list.length > 0 && list.every((m) => milestonePassed(m.id));
}

function leerstofCollected(id) {
  return Boolean(progress().leerstof && progress().leerstof[id]);
}

function leerstofScore() {
  return Object.keys(progress().leerstof || {}).length;
}

function toetsScore() {
  return Object.values(progress().milestones || {}).filter((m) => m && m.passed).length;
}

function leerstofInPhase(phaseId) {
  const list = milestonesFor(phaseId);
  const got = list.filter((m) => leerstofCollected(m.id)).length;
  return { got: got, total: list.length };
}

function allLessonsCollected(phaseId) {
  const t = leerstofInPhase(phaseId);
  return t.total > 0 && t.got === t.total;
}

function testsPassedInPhase(phaseId) {
  return milestonesFor(phaseId).filter((m) => milestonePassed(m.id)).length;
}

function testsNeededForExam(phaseId) {
  const n = milestonesFor(phaseId).length;
  return Math.min(2, n);
}

function phaseExamUnlocked(phaseId) {
  if (isAdmin()) return true;
  return allLessonsCollected(phaseId) && testsPassedInPhase(phaseId) >= testsNeededForExam(phaseId);
}

function phasePassed(n) {
  return allLessonsCollected(n);
}

function phaseCost(n) {
  const c = (COURSE.phaseCost || {})[Number(n)];
  return c || { les: 0, toets: 0 };
}

function phaseUnlocked(n) {
  n = Number(n);
  if (isAdmin() || n === 1) return true;
  const c = phaseCost(n);
  return leerstofScore() >= c.les && toetsScore() >= c.toets;
}

function phasePlayable(n) {
  return PLAYABLE_PHASES.includes(Number(n));
}

function milestoneUnlocked(id) {
  if (isAdmin()) return true;
  return phaseUnlocked(phaseOfMilestone(id));
}

function normalize(s) {
  return String(s ?? "")
    .trim()
    .toLowerCase()
    .replace(/°/g, "")
    .replace(/\s+/g, "")
    .replace(/×/g, "*")
    .replace(/·/g, "*")
    .replace(/÷/g, "/")
    .replace(/−/g, "-")
    .replace(/,/g, ".")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")
    .replace(/⁴/g, "^4")
    .replace(/⁵/g, "^5")
    .replace(/⁶/g, "^6")
    .replace(/⁷/g, "^7")
    .replace(/⁸/g, "^8")
    .replace(/π/g, "pi")
    .replace(/rest/g, "r");
}

function parseMixedNumber(raw) {
  const s = String(raw ?? "").trim().replace(/,/g, ".");
  const m = s.match(/^(-?\d+)\s+(\d+)\s*\/\s*(\d+)\s*$/);
  if (!m) return null;
  const whole = Number(m[1]);
  const num = Number(m[2]);
  const den = Number(m[3]);
  if (!den) return null;
  const sign = whole < 0 ? -1 : 1;
  return [sign * (Math.abs(whole) * den + num), den];
}

function parseFraction(raw) {
  const mixed = parseMixedNumber(raw);
  if (mixed) return mixed;
  const s = normalize(raw).replace(/cm\^?[23]?/g, "");
  if (s.includes("/")) {
    const [a, b] = s.split("/");
    if (a && b && !/[a-z]/.test(a + b)) return [Number(a), Number(b)];
  }
  if (s !== "" && !Number.isNaN(Number(s))) return [Number(s), 1];
  return null;
}

function toMathExpr(raw) {
  return normalize(raw)
    .replace(/\^/g, "^")
    .replace(/(\d)([a-z])/g, "$1*$2")
    .replace(/([a-z])(\d)/g, "$1^$2")
    .replace(/\)\(/g, ")*(")
    .replace(/pi/g, "pi");
}

function symbolicEqual(a, b) {
  if (typeof math === "undefined" || !math.parse) return false;
  try {
    const ea = math.parse(toMathExpr(a));
    const eb = math.parse(toMathExpr(b));
    if (math.simplify(ea).toString() === math.simplify(eb).toString()) return true;
    const names = {};
    ea.traverse(function (n) { if (n.isSymbolNode) names[n.name] = true; });
    eb.traverse(function (n) { if (n.isSymbolNode) names[n.name] = true; });
    const vars = Object.keys(names).filter((n) => n !== "pi" && n !== "e");
    if (!vars.length) {
      return Math.abs(Number(ea.evaluate()) - Number(eb.evaluate())) < 1e-8;
    }
    const samples = [0, 1, 2, -1, 0.5, 3, -2];
    return samples.every((x) => {
      const scope = {};
      vars.forEach((v) => { scope[v] = x; });
      const va = Number(ea.evaluate(scope));
      const vb = Number(eb.evaluate(scope));
      if (!Number.isFinite(va) || !Number.isFinite(vb)) return true;
      return Math.abs(va - vb) < 1e-6;
    });
  } catch (e) {
    return false;
  }
}

function variants(raw) {
  const n = normalize(raw);
  const out = new Set([n]);
  out.add(n.replace(/[()[\]]/g, ""));
  out.add(n.replace(/;/g, ","));
  return out;
}

function sameAnswer(given, accepted) {
  if (given == null || given === "") return false;
  const gMix = parseMixedNumber(given);
  for (const a of accepted) {
    const aMix = parseMixedNumber(a);
    if (gMix && aMix && gMix[0] * aMix[1] === aMix[0] * gMix[1]) return true;
    if (gMix && parseFraction(a)) {
      const af = parseFraction(a);
      if (gMix[0] * af[1] === af[0] * gMix[1]) return true;
    }
    if (aMix && parseFraction(given)) {
      const gf = parseFraction(given);
      if (aMix[0] * gf[1] === gf[0] * aMix[1]) return true;
    }
  }
  const gSet = variants(given);
  for (const a of accepted) {
    const aSet = variants(a);
    for (const g of gSet) {
      if (aSet.has(g)) return true;
      const gf = parseFraction(g);
      const af = parseFraction(a);
      if (gf && af && gf[1] !== 0 && af[1] !== 0 && gf[0] * af[1] === af[0] * gf[1]) return true;
      if (symbolicEqual(g, a)) return true;
    }
    if (symbolicEqual(given, a)) return true;
  }
  return false;
}

function parseHash() {
  return location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
}

function go(path) {
  location.hash = path.startsWith("/") ? path : "/" + path;
}

function bgFor(phaseId) {
  const n = Number(phaseId);
  if (n >= 1 && n <= 7) return "assets/fase" + n + ".png";
  return "assets/home.png";
}

function getMilestone(id) {
  return MILESTONES.find((m) => m.id === id);
}

function pctDone(phaseId) {
  const list = milestonesFor(phaseId);
  if (!list.length) return 0;
  const n = list.filter((m) => milestonePassed(m.id) || leerstofCollected(m.id)).length;
  return Math.round((n / list.length) * 100);
}

function topbar(extra) {
  extra = extra || "";
  const n = leerstofScore();
  const t = toetsScore();
  const i = inzichtScore();
  return (
    '<div class="topbar">' +
      '<div class="brand">From Zero 2 Infinity</div>' +
        '<div class="score-row">' +
          '<div class="lesstof-score" id="score-lesstof">' +

            '<div class="score-item">' +
              '<img src="assets/book-open.png" title="Verzamelde lesstof">' +
              "<span>" + n + "</span>" +
            '</div>' +
                  
            '<div class="score-item">' +
              '<img src="assets/medaille.png" title="Gehaalde toetsen">' +
              "<span>" + t + "</span>" +
            '</div>' +
            '<div class="score-item">' +
              '<img src="assets/inzicht.png" title="Inzichtpunten">' +
              "<span>" + i + "</span>" + 
            '</div>' + 
          '</div>' +  
        '</div>'+
    
      '<div class="nav-actions">' +
       extra +
      '<button class="btn ghost" data-go="/">Kaart</button>' +
      '<button class="btn ghost" data-go="/admin">' + (isAdmin() ? "Admin aan" : "Admin") + "</button>" +
      '<button class="btn ghost" id="reset-btn">Reset</button>' + 
      '</div>' + 
    '</div>'
  );
}

function renderHome() {
  const cards = COURSE.phases.map((p) => {
    const open = phaseUnlocked(p.id);
    const done = phasePassed(p.id);
    let status = "Vergrendeld";
    if (done) status = "Voltooid";
    else if (open && phasePlayable(p.id)) status = pctDone(p.id) + "% in deze fase";
    else if (open) status = "Binnenkort";
    else {
      const c = phaseCost(p.id);
      status = "Kost " + c.les + " lesstof, " + c.toets + " toets";
    }
    const state = done ? "done" : open ? "open" : "locked";
    return (
      '<article class="phase-card ' + state + '" data-phase="' + p.id + '">' +
      '<div class="phase-icon">' +
      '<img src="assets/icon-fase' + p.id + '.png" alt="">' +
      (open ? "" : '<span class="lock-badge" aria-hidden="true">🔒</span>') +
      (done ? '<span class="done-badge" aria-hidden="true">✓</span>' : "") +
      "</div>" +
      '<div class="caption">' +
      '<div class="num">Fase ' + p.id + "</div>" +
      "<h2>" + p.title + "</h2>" +
      "<p>" + p.short + "</p>" +
      '<div class="status ' + state + '">' + status + "</div>" +
      "</div></article>"
    );
  }).join("");
  return (
    '<div class="screen" style="background-image:url(\'assets/home.png\')">' +
    topbar() +
    '<div class="layout"><div class="panel hero"><h1>' + COURSE.title + "</h1><p>" + COURSE.tagline + "</p></div>" +
    '<div class="phase-grid">' + cards + "</div></div></div>"
  );
}

function renderAdmin() {
  if (isAdmin()) {
    return (
      '<div class="screen" style="background-image:url(\'assets/home.png\')">' + topbar() +
      '<div class="layout"><div class="panel"><h1>Admin</h1>' +
      "<p>Alle fases, lessen, oefeningen en toetsen zijn open.</p>" +
      '<button class="btn" id="admin-logout">Uitloggen</button></div></div></div>'
    );
  }
  return (
    '<div class="screen" style="background-image:url(\'assets/home.png\')">' + topbar() +
    '<div class="layout"><div class="panel"><h1>Admin</h1>' +
    "<p>Log in om het hele leerpad te bekijken zonder toetsen te halen.</p>" +
    '<form id="admin-form">' +
    '<p><label>Gebruiker <input type="text" name="user" autocomplete="username"></label></p>' +
    '<p><label>Wachtwoord <input type="password" name="pass" autocomplete="current-password"></label></p>' +
    '<button class="btn primary" type="submit">Inloggen</button>' +
    '<p id="admin-err" class="status locked" hidden>Onjuiste gegevens</p></form></div></div></div>'
  );
}

function renderPhase(phaseId) {
  phaseId = Number(phaseId);
  const phase = COURSE.phases.find((p) => p.id === phaseId);
  if (!phase) return renderHome();
  const screen = '<div class="screen" style="background-image:url(\'' + bgFor(phaseId) + "')\">";
  if (!phaseUnlocked(phaseId)) {
    const c = phaseCost(phaseId);
    return screen + topbar() + '<div class="layout"><div class="panel"><h1>Fase ' + phaseId +
      " is nog vergrendeld</h1><p>Kost " + c.les + " lesstof en " + c.toets +
      " toetsen. Je hebt er " + leerstofScore() + " en " + toetsScore() +
      ". Punten blijven staan.</p>" +
      '<button class="btn primary" data-go="/">Naar de kaart</button></div></div></div>';
  }
  if (!phasePlayable(phaseId)) {
    return screen + topbar('<button class="btn" data-go="/">Alle fases</button>') +
      '<div class="layout"><div class="panel"><h1>Fase ' + phaseId + ": " + phase.title +
      "</h1><p>Deze fase volgt later.</p></div></div></div>";
  }
  const list = milestonesFor(phaseId);
  const stones = list.map((m) => {
    const done = milestonePassed(m.id);
    const st = done ? "done" : "";
    const art = (list.indexOf(m) % 5) + 1;
    const testIco = done ? "assets/medaille.png" : "assets/toets.png";
    return (
      '<article class="stone ' + st + '">' +
      '<img class="stone-art" src="assets/mile-' + art + '.png" alt="">' +
      (phaseId == 1 && worldFor(m.id) ? '<p class="ch-world">' + worldFor(m.id).name + "</p>" : "") +
      "<h3>" + m.title + "</h3><p>" + m.goal + "</p>" +
      (done ? '<div class="status done">Behaald</div>' : "") +
      '<div class="stone-actions">' +
      '<button class="btn lesstof-btn" data-go="/fase/' + phaseId + "/m/" + m.id + '/les">' +
      '<img class="book-ico" src="assets/' + (leerstofCollected(m.id) ? "book-open.png" : "book-closed.png") + '" alt=""> Lesstof</button>' +
      '<button class="btn" data-go="/fase/' + phaseId + "/m/" + m.id + '/toets"><img class="book-ico" src="' + testIco + '" alt=""> Toets</button></div></article>'
    );
  }).join("");
  const next = COURSE.phases.find((p) => p.id === phaseId + 1);
  const nextCost = next ? phaseCost(next.id) : null;
  return (
    screen + topbar() + '<div class="layout"><div class="panel"><h1>Fase ' + phaseId + " — " + phase.title +
    "</h1><p>" + (PHASE_BLURB[phaseId] || phase.short) + "</p>" +
    (nextCost
      ? "<p>Volgende fase vanaf " + nextCost.les + " lesstof en " + nextCost.toets + " toetsen (nu " + leerstofScore() + " / " + toetsScore() + ").</p>"
      : "") +
    '<div class="progress-bar"><span style="width:' + pctDone(phaseId) + '%"></span></div></div>' +
    '<div class="stone-grid">' + stones + "</div></div></div>"
  );
}

function renderLesson(phaseId, id) {
  const m = getMilestone(id);
  if (!m) return renderPhase(phaseId);
  return (
    '<div class="screen" style="background-image:url(\'' + bgFor(phaseId) + "')\">" +
    topbar('<button class="btn" data-go="/fase/' + phaseId + '">Fase ' + phaseId + "</button>") +
    '<div class="layout"><div class="panel lesson">' + m.theory +
    (String(m.theory).indexOf("data-widget") >= 0 ? "" : '<div class="widget-host" data-mid="' + m.id + '"></div>') +
    '<div class="lesson-actions">' +
    '<button class="btn" data-go="/fase/' + phaseId + '">Terug naar fase ' + phaseId + "</button>" +
    '<button class="btn" data-go="/fase/' + phaseId + "/m/" + m.id + '/toets"><img class="book-ico lg" src="assets/' + (milestonePassed(m.id) ? "medaille.png" : "toets.png") + '" alt=""> Toets</button>' +
    (leerstofCollected(m.id)
      ? '<span class="lesstof-done"><img class="book-ico lg" src="assets/book-open.png" alt=""> Lesstof verzameld</span>'
      : '<button class="btn primary" id="collect-leerstof" data-mid="' + m.id + '"><img class="book-ico lg" src="assets/book-open.png" alt=""> Verzamel lesstof</button>') +
    "</div></div></div></div>"
  );
}

function questionHTML(q, i) {
  if (q.type === "choice") {
    const opts = q.choices.map((c) =>
      '<label class="choice"><input type="radio" name="' + q.id + '" value="' + encodeURIComponent(c) +
      '"> <span>' + c + "</span></label>"
    ).join("");
    return '<div class="question" data-qid="' + q.id + '"><div class="q-title">' + (i + 1) + ". " +
      q.prompt + '</div><div class="choices">' + opts + '</div><div class="feedback"></div></div>';
  }
  return '<div class="question" data-qid="' + q.id + '"><div class="q-title">' + (i + 1) + ". " +
    q.prompt + '</div><input type="text" name="' + q.id + '" autocomplete="off"><div class="feedback"></div></div>';
}

function readAnswer(root, q) {
  if (q.type === "choice") {
    const picked = root.querySelector('input[name="' + q.id + '"]:checked');
    return picked ? decodeURIComponent(picked.value) : "";
  }
  const input = root.querySelector('[name="' + q.id + '"]');
  return input ? input.value : "";
}

function gradeList(questions, root) {
  let correct = 0;
  questions.forEach((q) => {
    const ok = sameAnswer(readAnswer(root, q), q.accept);
    if (ok) correct += 1;
    const box = root.querySelector('[data-qid="' + q.id + '"] .feedback');
    if (box) {
      box.textContent = ok ? "Goed" : "Antwoord: " + q.accept[0];
      box.className = "feedback " + (ok ? "good" : "bad");
    }
  });
  return { correct: correct, total: questions.length, ratio: questions.length ? correct / questions.length : 0 };
}

function renderPractice(phaseId, id) {
  const m = getMilestone(id);
  if (!m) return renderPhase(phaseId);
  return (
    '<div class="screen" style="background-image:url(\'' + bgFor(phaseId) + "')\">" +
    topbar('<button class="btn" data-go="/fase/' + phaseId + '">Fase ' + phaseId + "</button>") +
    '<div class="layout"><div class="panel"><h1>Oefenen — ' + m.id + " " + m.title + "</h1>" +
    "<p>Dit telt niet mee voor ontgrendelen.</p><div id=\"quiz\">" + m.practice.map(questionHTML).join("") +
    '</div><p><button class="btn primary" id="check-btn">Controleren</button></p><div id="score"></div>' +
    '<div class="lesson-actions"><button class="btn" data-go="/fase/' + phaseId + '">Terug naar fase ' + phaseId + "</button></div></div></div></div>"
  );
}

function renderExam(kind, phaseId, mid) {
  if (String(phaseId) === "1" && kind !== "phase" && typeof renderChallengeView === "function") {
    return renderChallengeView(phaseId, mid);
  }
  const isPhase = kind === "phase";
  const m = isPhase ? null : getMilestone(mid);
  const questions = startExamSession(isPhase ? "phase" : "mile", phaseId, mid);
  const title = isPhase ? "Eindtoets Fase " + phaseId : "Toets " + m.id + " — " + m.title;
  const locked = isPhase ? !phaseExamUnlocked(phaseId) : !milestoneUnlocked(mid);
  const screen = '<div class="screen" style="background-image:url(\'' + bgFor(phaseId) + "')\">";
  const bar = topbar('<button class="btn" data-go="/fase/' + phaseId + '">Fase ' + phaseId + "</button>");
  if (locked) {
    return screen + bar + '<div class="layout"><div class="panel"><h1>Deze toets is nog vergrendeld</h1></div></div></div>';
  }
  return (
    screen + bar + '<div class="layout"><div class="panel"><h1>' + title + "</h1>" +
    "<p>Drempel: " + Math.round(COURSE.passRatio * 100) + "%.</p><div id=\"quiz\">" +
    questions.map(questionHTML).join("") +
    '</div><p><button class="btn primary" id="submit-exam" data-kind="' + kind +
    '" data-phase="' + phaseId + '" data-mid="' + (mid || "") +
    '">Indienen</button></p><div id="score"></div>' +
    '<div class="lesson-actions"><button class="btn" data-go="/fase/' + phaseId + '">Terug naar fase ' + phaseId + "</button></div></div></div></div>"
  );
}

function render() {
  const parts = parseHash();
  const app = document.getElementById("app");
  if (!app) return;
  if (!parts.length) app.innerHTML = renderHome();
  else if (parts[0] === "admin") app.innerHTML = renderAdmin();
  else if (parts[0] === "fase" && parts[2] === "m" && parts[4] === "les") app.innerHTML = renderLesson(parts[1], parts[3]);
  else if (parts[0] === "fase" && parts[2] === "m" && parts[4] === "oefen") app.innerHTML = renderLesson(parts[1], parts[3]);
  else if (parts[0] === "fase" && parts[2] === "m" && parts[4] === "toets") app.innerHTML = renderExam("mile", parts[1], parts[3]);
  else if (parts[0] === "fase" && parts[2] === "examen") app.innerHTML = renderPhase(parts[1]);
  else if (parts[0] === "fase") app.innerHTML = renderPhase(parts[1]);
  else app.innerHTML = renderHome();
  if (typeof bindChallengeUi === "function") bindChallengeUi();
  if (typeof typesetMath === "function") typesetMath(app);
  if (typeof mountWidgets === "function" && parts[0] === "fase" && parts[2] === "m" && parts[4] === "les") {
    const host = app.querySelector(".widget-host") || app.querySelector(".panel.lesson") || app;
    const mid = parts[3];
    if (host && mid) mountWidgets(host, mid);
  }
}

document.addEventListener("click", function (e) {
  const goBtn = e.target.closest("[data-go]");
  if (goBtn) {
    e.preventDefault();
    go(goBtn.getAttribute("data-go"));
    return;
  }
  const card = e.target.closest(".phase-card");
  if (card) {
    go("/fase/" + card.getAttribute("data-phase"));
    return;
  }
  if (e.target.closest("#ch-check")) { applyChallengeCheck(); return; }
  if (e.target.closest("#ch-hint")) { applyChallengeHint(); return; }
  const retry = e.target.closest("#ch-retry");
  if (retry) {
    startChallengeRun(retry.getAttribute("data-mid"));
    render();
    return;
  }
  const collect = e.target.closest("#collect-leerstof");
  if (collect) {
    const mid = collect.getAttribute("data-mid");
    const already = leerstofCollected(mid);
    store.dispatch({ type: "COLLECT_LEERSTOF", payload: mid });
    if (!already) burstLesstof(collect);
    setTimeout(render, already ? 0 : 700);
    return;
  }
  if (e.target.id === "reset-btn") {
    if (confirm("Voortgang wissen?")) {
      store.dispatch({ type: "RESET_PROGRESS" });
      render();
    }
    return;
  }
  if (e.target.id === "admin-logout") {
    store.dispatch({ type: "ADMIN_LOGOUT" });
    render();
    return;
  }
  if (e.target.id === "check-btn") {
    const parts = parseHash();
    const m = getMilestone(parts[3]);
    const res = gradeList(m.practice, document.getElementById("quiz"));
    document.getElementById("score").innerHTML = '<p class="score-banner">' + res.correct + " / " + res.total + " goed</p>";
    return;
  }
  if (e.target.id === "submit-exam") {
    const kind = e.target.getAttribute("data-kind");
    const phaseId = e.target.getAttribute("data-phase");
    const mid = e.target.getAttribute("data-mid");
    const questions = currentExamQuestions(kind, phaseId, mid);
    const res = gradeList(questions, document.getElementById("quiz"));
    const passed = res.ratio >= COURSE.passRatio;
    if (kind === "phase") {
      store.dispatch({ type: "PHASE_EXAM_RESULT", payload: { phaseId: phaseId, score: res.correct, total: res.total, passed: passed } });
    } else {
      const was = milestonePassed(mid);
      store.dispatch({ type: "MILESTONE_RESULT", payload: { id: mid, score: res.correct, total: res.total, passed: passed } });
      if (passed && !was) burstToets(e.target);
      if (passed && !leerstofCollected(mid)) {
        store.dispatch({ type: "COLLECT_LEERSTOF", payload: mid });
        burstLesstof(e.target);
      }
    }
    const next = passed
      ? (kind === "phase"
        ? '<p>Fase voltooid.</p><button class="btn primary" data-go="/">Naar de kaart</button>'
        : '<p>Milestone behaald.</p><button class="btn primary" data-go="/fase/' + phaseId + '">Terug</button>')
      : '<p>Nog niet gehaald.</p><button class="btn" data-go="/fase/' + phaseId + '">Terug</button>';
    document.getElementById("score").innerHTML =
      '<p class="score-banner">' + res.correct + " / " + res.total + " — " + (passed ? "Geslaagd" : "Niet gehaald") + "</p>" + next;
  }
});

document.addEventListener("submit", function (e) {
  if (e.target.id !== "admin-form") return;
  e.preventDefault();
  const user = (e.target.user.value || "").trim();
  const pass = e.target.pass.value || "";
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    store.dispatch({ type: "ADMIN_LOGIN" });
    go("/");
  } else {
    const err = document.getElementById("admin-err");
    if (err) err.hidden = false;
  }
});

function burstIcons(fromEl, src, destSel) {
  const score = document.querySelector(destSel || "#score-lesstof");
  const origin = fromEl && fromEl.getBoundingClientRect
    ? fromEl.getBoundingClientRect()
    : { left: window.innerWidth / 2, top: window.innerHeight * 0.7, width: 40, height: 40 };
  const dest = score
    ? score.getBoundingClientRect()
    : { left: window.innerWidth / 2, top: 24, width: 40, height: 40 };
  const x0 = origin.left + origin.width / 2;
  const y0 = origin.top + origin.height / 2;
  const x1 = dest.left + dest.width / 2;
  const y1 = dest.top + dest.height / 2;
  for (let i = 0; i < 12; i++) {
    const img = document.createElement("img");
    img.src = src;
    img.className = "lesstof-burst";
    img.alt = "";
    const angle = (Math.PI * 2 * i) / 12;
    const spread = 70 + Math.random() * 50;
    img.style.left = x0 + "px";
    img.style.top = y0 + "px";
    img.style.setProperty("--dx", (Math.cos(angle) * spread) + "px");
    img.style.setProperty("--dy", (Math.sin(angle) * spread) + "px");
    img.style.setProperty("--tx", (x1 - x0) + "px");
    img.style.setProperty("--ty", (y1 - y0) + "px");
    img.style.animationDelay = (i * 0.02) + "s";
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 900);
  }
}
function burstLesstof(fromEl) { burstIcons(fromEl, "assets/book-open.png", "#score-lesstof"); }
function burstInzicht(fromEl) { burstIcons(fromEl, "assets/inzicht.png", "#score-inzicht"); }
function burstToets(fromEl) { burstIcons(fromEl, "assets/medaille.png", "#score-toets"); }

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
if (document.readyState !== "loading") render();
