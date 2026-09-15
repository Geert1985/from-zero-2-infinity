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
/*
function allMilestonesPassed(phaseId) {
  if (isAdmin()) return true;
  const list = milestonesFor(phaseId);
  return list.length > 0 && list.every((m) => milestonePassed(m.id));
}
*/
function leerstofCollected(id) {
  return Boolean(progress().leerstof && progress().leerstof[id]);
}

function inzichtCollected(id) {
  return Boolean(id && progress().inzichtKeys && progress().inzichtKeys[id]);
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
/*
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
*/
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
        '</div>' +
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
      (open ? "" : '<span class="lock-badge" aria-hidden="true">\ud83d\udd12</span>') +
      (done ? '<span class="done-badge" aria-hidden="true">\u2713</span>' : "") +
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

function renderExam(kind, phaseId, mid) {
  if (String(phaseId) === "1" && kind !== "phase" && typeof renderChallengeView === "function") {
    return renderChallengeView(phaseId, mid);
  }
  const isPhase = kind === "phase";
  const m = isPhase ? null : getMilestone(mid);
  const questions = startExamSession(isPhase ? "phase" : "mile", phaseId, mid);
  const title = isPhase ? "Eindtoets Fase " + phaseId : "Toets " + m.id + " \u2014 " + m.title;
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
    if (app.querySelector("[data-widget]")) mountWidgets(app, parts[3]);
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
  const collectInzicht = e.target.closest(".collect-inzicht");
  if (collectInzicht) {
    const key = collectInzicht.getAttribute("data-ikey");
    const already = typeof inzichtCollected === "function" && inzichtCollected(key);
    store.dispatch({ type: "COLLECT_INZICHT", payload: key });
    if (!already && typeof burstInzicht === "function") burstInzicht(collectInzicht);
    collectInzicht.outerHTML = '<span class="inzicht-done"><img class="book-ico" src="assets/inzicht.png" alt=""> Inzicht verzameld</span>';
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
      '<p class="score-banner">' + res.correct + " / " + res.total + " \u2014 " + (passed ? "Geslaagd" : "Niet gehaald") + "</p>" + next;
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
