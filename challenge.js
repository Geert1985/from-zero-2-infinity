const CHALLENGE_PASS = 0.8;
const HINT_COST = 5;
const WIN_INZICHT = 2;

function challengesFor(mid) {
  return (typeof CHALLENGES_1 !== "undefined" && CHALLENGES_1[mid]) || [];
}

function worldFor(mid) {
  return (typeof WORLDS_1 !== "undefined" && WORLDS_1[mid]) || { name: "Gebied", blurb: "" };
}

function inzichtScore() {
  return Number((progress() && progress().inzicht) || 0);
}

function startChallengeRun(mid) {
  const src = challengesFor(mid).slice();
  window._chRun = { mid: mid, list: src, i: 0, correct: 0, tried: 0 };
  return window._chRun;
}

function currentChallenge() {
  const run = window._chRun;
  if (!run) return null;
  return run.list[run.i] || null;
}

function challengeValue(ch) {
  const box = document.getElementById("ch-input");
  if (ch.type === "target") {
    const sl = document.getElementById("ch-slider");
    return sl ? sl.value : "";
  }
  if (box) return box.value;
  const picked = document.querySelector("#ch-stage input[type=radio]:checked");
  return picked ? decodeURIComponent(picked.value) : "";
}

function challengeOk(ch, raw) {
  if (ch.type === "target") {
    const v = Number(String(raw).replace(",", "."));
    const t = Number(ch.target);
    const tol = ch.tol != null ? ch.tol : 0.15;
    return Math.abs(v - t) <= tol;
  }
  if (typeof sameAnswer === "function") return sameAnswer(raw, ch.accept || []);
  return (ch.accept || []).some((a) => String(a) === String(raw).trim());
}

function paintEffect(kind, ok) {
  const fx = document.getElementById("ch-fx");
  if (!fx) return;
  if (!ok) {
    fx.innerHTML = '<div class="fx-bad">Geen verandering in de wereld.</div>';
    return;
  }
  if (kind === "door") fx.innerHTML = '<div class="fx-ok">De poort schuift open.</div>';
  else if (kind === "wall") fx.innerHTML = '<div class="fx-ok fx-wall"></div>';
  else if (kind === "energy") fx.innerHTML = '<div class="fx-ok"><div class="fx-bar"><span></span></div>Energiekring gesloten.</div>';
  else if (kind === "bridge") fx.innerHTML = '<div class="fx-ok">De brug klikt vast.</div>';
  else fx.innerHTML = '<div class="fx-ok">Het mechanisme reageert.</div>';
}

function renderChallengeStage(ch) {
  if (ch.type === "target") {
    const min = ch.min != null ? ch.min : 0;
    const max = ch.max != null ? ch.max : 20;
    const step = ch.step != null ? ch.step : 1;
    return (
      '<div class="ch-line"><span>' + min + '</span><input id="ch-slider" type="range" min="' +
      min + '" max="' + max + '" step="' + step + '" value="' + min +
      '"><span>' + max + '</span></div><p class="ch-readout">Positie: <strong id="ch-pos">' + min + "</strong></p>"
    );
  }
  if (ch.type === "choice") {
    return (ch.choices || []).map((c) =>
      '<label class="choice"><input type="radio" name="ch" value="' + encodeURIComponent(c) + '"> <span>' + c + "</span></label>"
    ).join("");
  }
  if (ch.type === "build") {
    return '<div id="ch-build" class="ch-build"></div><p><input id="ch-input" inputmode="decimal" placeholder="Aantal"></p>';
  }
  if (ch.type === "machine") {
    return '<div class="fx-bar empty" id="ch-energy"><span></span></div><p><input id="ch-input" inputmode="decimal" placeholder="Waarde"></p>';
  }
  return '<p><input id="ch-input" inputmode="text" placeholder="Antwoord"></p>';
}

function renderChallengeView(phaseId, mid) {
  const run = window._chRun && window._chRun.mid === mid ? window._chRun : startChallengeRun(mid);
  const ch = currentChallenge();
  const world = worldFor(mid);
  const m = getMilestone(mid);
  const screen = '<div class="screen" style="background-image:url(\'' + bgFor(phaseId) + "')\">";
  const bar = topbar('<button class="btn" data-go="/fase/' + phaseId + '">Fase ' + phaseId + "</button>");
  if (!ch) {
    const ratio = run.list.length ? run.correct / run.list.length : 0;
    const passed = ratio >= CHALLENGE_PASS;
    return screen + bar + '<div class="layout"><div class="panel challenge-panel">' +
      "<h1>" + world.name + "</h1><p>Missie afgerond: " + run.correct + " / " + run.list.length + ".</p>" +
      '<p class="status ' + (passed ? "done" : "locked") + '">' + (passed ? "Gebied gestabiliseerd" : "Nog niet genoeg — probeer opnieuw") + "</p>" +
      '<div class="lesson-actions"><button class="btn" data-go="/fase/' + phaseId + '">Terug naar fase</button>' +
      (passed ? "" : '<button class="btn" id="ch-retry" data-mid="' + mid + '">Opnieuw</button>') +
      "</div></div></div></div>";
  }
  return screen + bar + '<div class="layout"><div class="panel challenge-panel">' +
    '<p class="ch-world">' + world.name + " — " + (m ? m.title : mid) + "</p>" +
    '<p class="ch-step">Opdracht ' + (run.i + 1) + " / " + run.list.length + " · Inzicht " + inzichtScore() + "</p>" +
    '<h1>' + (ch.title || "Uitdaging") + "</h1>" +
    '<p class="ch-scene">' + (ch.scene || "") + "</p>" +
    '<p class="ch-prompt">' + ch.prompt + "</p>" +
    '<div id="ch-stage">' + renderChallengeStage(ch) + "</div>" +
    '<div id="ch-fx"></div><div id="ch-hintbox"></div>' +
    '<div class="lesson-actions">' +
    '<button class="btn" data-go="/fase/' + phaseId + '">Terug</button>' +
    '<button class="btn" id="ch-hint">Hint (' + HINT_COST + " inzicht)</button>" +
    '<button class="btn primary" id="ch-check">Activeren</button>' +
    "</div></div></div></div>";
}

function bindChallengeUi() {
  const sl = document.getElementById("ch-slider");
  if (sl) {
    sl.addEventListener("input", function () {
      const el = document.getElementById("ch-pos");
      if (el) el.textContent = sl.value;
    });
  }
}

function applyChallengeCheck() {
  const ch = currentChallenge();
  const run = window._chRun;
  if (!ch || !run) return;
  const raw = challengeValue(ch);
  const ok = challengeOk(ch, raw);
  run.tried += 1;
  paintEffect(ch.effect || "mech", ok);
  const fb = document.getElementById("ch-fx");
  if (ok) {
    run.correct += 1;
    store.dispatch({ type: "INZICHT_ADD", payload: WIN_INZICHT });
    if (typeof burstInzicht === "function") burstInzicht(document.getElementById("ch-check"));
    if (ch.type === "build") {
      const n = Math.max(0, Math.min(40, Number(raw) || 0));
      const box = document.getElementById("ch-build");
      if (box) box.innerHTML = Array.from({ length: n }, () => "<i></i>").join("");
    }
    if (ch.type === "machine") {
      const bar = document.getElementById("ch-energy");
      if (bar) bar.classList.remove("empty");
    }
    setTimeout(function () {
      run.i += 1;
      if (!currentChallenge()) {
        const ratio = run.list.length ? run.correct / run.list.length : 0;
        const already = milestonePassed(run.mid);
        store.dispatch({
          type: "MILESTONE_RESULT",
          payload: { id: run.mid, score: run.correct, total: run.list.length, passed: ratio >= CHALLENGE_PASS }
        });
        if (ratio >= CHALLENGE_PASS && !already && typeof burstToets === "function") {
          burstToets(document.getElementById("ch-check"));
        }
        if (ratio >= CHALLENGE_PASS && !leerstofCollected(run.mid)) {
          store.dispatch({ type: "COLLECT_LEERSTOF", payload: run.mid });
        }
      }
      render();
    }, 700);
  } else {
    store.dispatch({ type: "MISS_CONCEPT", payload: ch.concept || run.mid });
    const need = ch.accept ? ch.accept[0] : ch.target;
    if (fb) {
      fb.innerHTML += '<p class="fx-bad">Het systeem reageert niet. Doelwaarde: iets anders dan ' +
        String(raw || "leeg") + ". Hint beschikbaar.</p>";
    }
  }
}

function applyChallengeHint() {
  const ch = currentChallenge();
  if (!ch) return;
  if (inzichtScore() < HINT_COST) {
    const box = document.getElementById("ch-hintbox");
    if (box) box.textContent = "Niet genoeg inzicht. Los eerst een opdracht op.";
    return;
  }
  store.dispatch({ type: "INZICHT_ADD", payload: -HINT_COST });
  const box = document.getElementById("ch-hintbox");
  if (box) box.textContent = ch.hint || ("Richting: " + (ch.accept ? ch.accept[0] : ch.target));
}
