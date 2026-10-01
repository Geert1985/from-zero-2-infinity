function costLabel(c) {
  return (
    c.les +
    ' <img class="cost-ico" src="assets/book-open.png" alt="lesstof"> ' +
    " en " + c.toets +
    ' <img class="cost-ico" src="assets/medaille.png" alt="toets">'
  );
}

function worldName(mid) {
  if (typeof worldFor !== "function") return "";
  const w = worldFor(mid);
  if (!w || !w.name || w.name === "Gebied") return "";
  return w.name;
}

function escText(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderHome() {
  const cards = COURSE.phases.map((p) => {
    const open = phaseUnlocked(p.id);
    const done = phasePassed(p.id);
    let status = "Vergrendeld";
    if (done) status = "Voltooid";
    else if (open && phasePlayable(p.id)) status = pctDone(p.id) + "% in deze fase";
    else if (open) status = "Binnenkort";
    else status = costLabel(phaseCost(p.id));
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
    '<div class="screen" style="background-image:url(\'' + bgFor() + "')\">" +
    topbar() +
    '<div class="hero"><div class="hero-plate">' +
    "<h1>" + COURSE.title + "</h1>" +
    "<p>" + COURSE.tagline + "</p>" +
    "</div></div>" +
    '<div class="phase-grid">' + cards + "</div></div>"
  );
}

function stoneArtId(mid) {
  const phase4Map = {
    "4.3": "4.1",
    "4.4": "4.3",
    "4.5": "4.4",
    "4.6": "4.5",
    "4.7": "4.6",
    "4.8": "4.7",
    "4.9": "4.8",
    "4.10": "4.9",
    "4.11": "4.10",
    "4.12": "4.11",
    "4.13": "4.12",
    "4.14": "4.13"
  };
  return phase4Map[mid] || mid;
}

function renderPhase(phaseId) {
  phaseId = Number(phaseId);
  const phase = COURSE.phases.find((p) => p.id === phaseId);
  if (!phase) return renderHome();
  const screen = '<div class="screen" style="background-image:url(\'' + bgFor(phaseId) + "')\">";
  if (!phaseUnlocked(phaseId)) {
    const c = phaseCost(phaseId);
    return screen + topbar() +
      '<div class="layout"><div class="panel"><h1>Fase ' + phaseId + " is nog vergrendeld</h1>" +
      "Nodig om te ontgrendelen: " + costLabel(c) + '.</p>' +
      '<button class="btn primary" data-go="/">Naar de kaart</button></div></div></div>';
  }
  if (!phasePlayable(phaseId)) {
    return screen + topbar('<button class="btn" data-go="/">Alle fases</button>') +
      '<div class="layout"><div class="panel"><h1>Fase ' + phaseId + ": " + phase.title +
      "</h1><p>Deze fase volgt later.</p></div></div></div>";
  }
  const list = milestonesFor(phaseId);
  const stones = list.map((m) => {
    const done = milestonePassed(m.id) && leerstofCollected(m.id);
    const st = done ? "done" : "";
    return (
      '<article class="stone ' + st + '" data-mid="' + m.id + '" data-phase="' + phaseId + '" tabindex="0" role="button" aria-label="' + escText(m.id + " " + (m.title || "")) + '">' +
      '<span class="stone-num">' + escText(m.id) + "</span>" +
      '<img class="stone-art" src="assets/milestones/mile-' + stoneArtId(m.id) + '.png?v=4" alt="">' +
      "</article>"
    );
  }).join("");
  const next = COURSE.phases.find((p) => p.id === phaseId + 1);
  const nextCost = next ? phaseCost(next.id) : null;
  return (
    screen + topbar() + '<div class="layout"><div class="panel"><h1>Fase ' + phaseId + " — " + phase.title +
    "</h1><p>" + (PHASE_BLURB[phaseId] || phase.short) + "</p>" +
    '</div>' +
    '<div class="stone-stage">' +
    '<div class="stone-veil" id="stone-veil" hidden></div>' +
    '<div class="stone-grid">' + stones + "</div>" +
    '<div id="stone-float" class="stone-float" hidden></div>' +
    "</div></div></div>"
  );
}

function closeStoneFloat() {
  const host = document.getElementById("stone-float");
  const veil = document.getElementById("stone-veil");
  const stage = document.querySelector(".stone-stage");
  if (host) {
    host.hidden = true;
    host.innerHTML = "";
  }
  if (veil) veil.hidden = true;
  if (stage) stage.classList.remove("is-dimmed");
  document.querySelectorAll(".stone.is-open").forEach(function (el) {
    el.classList.remove("is-open");
  });
}

function placeStoneFloat(stoneEl) {
  const host = document.getElementById("stone-float");
  if (!host || !stoneEl) return;
  const r = stoneEl.getBoundingClientRect();
  const w = host.offsetWidth || 280;
  const h = host.offsetHeight || 220;
  const gap = 12;
  let left = r.right + gap;
  if (left + w > window.innerWidth - 12) left = r.left - w - gap;
  if (left < 12) left = 12;
  let top = r.top;
  if (top + h > window.innerHeight - 12) top = Math.max(12, window.innerHeight - h - 12);
  host.style.left = left + "px";
  host.style.top = top + "px";
}

function openStoneFloat(stoneEl) {
  const host = document.getElementById("stone-float");
  if (!host || !stoneEl) return;
  const mid = stoneEl.getAttribute("data-mid");
  const phaseId = stoneEl.getAttribute("data-phase");
  const m = typeof getMilestone === "function" ? getMilestone(mid) : null;
  if (!m) return;

  document.querySelectorAll(".stone.is-open").forEach(function (el) {
    el.classList.remove("is-open");
  });
  stoneEl.classList.add("is-open");

  const lesDone = leerstofCollected(m.id);
  const testDone = milestonePassed(m.id);
  const lesIco = lesDone ? "book-open.png" : "book-closed.png";
  const testIco = testDone ? "medaille.png" : "toets.png";

  const veil = document.getElementById("stone-veil");
  const stage = document.querySelector(".stone-stage");
  if (veil) veil.hidden = false;
  if (stage) stage.classList.add("is-dimmed");

  host.hidden = false;
  host.innerHTML =
    '<button type="button" class="stone-float-close" data-stone-close="1" aria-label="Sluiten">×</button>' +
    '<div class="stone-float-id">' + escText(m.id) + "</div>" +
    "<h2>" + escText(m.title || "") + "</h2>" +
    (m.goal ? '<p class="stone-float-goal">' + escText(m.goal) + "</p>" : "") +
    '<div class="stone-float-actions">' +
    '<button class="stone-ico-btn" data-go="/fase/' + phaseId + "/m/" + m.id + '/les" title="' + (lesDone ? "Lesstof verzameld" : "Lesstof bekijken") + '" aria-label="' + (lesDone ? "Lesstof verzameld" : "Lesstof bekijken") + '">' +
    '<img src="assets/' + lesIco + '" alt=""></button>' +
    '<button class="stone-ico-btn" data-go="/fase/' + phaseId + "/m/" + m.id + '/toets" title="' + (testDone ? "Toets gehaald" : "Toets maken") + '" aria-label="' + (testDone ? "Toets gehaald" : "Toets maken") + '">' +
    '<img src="assets/' + testIco + '" alt=""></button>' +
    "</div>";
  placeStoneFloat(stoneEl);
}

if (!window.__stoneFloatBound) {
  window.__stoneFloatBound = true;
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-stone-close]")) {
      e.preventDefault();
      closeStoneFloat();
      return;
    }
    const stone = e.target.closest(".stone");
    if (stone && stone.closest(".stone-grid")) {
      e.preventDefault();
      e.stopPropagation();
      if (stone.classList.contains("is-open")) closeStoneFloat();
      else openStoneFloat(stone);
      return;
    }
    if (e.target.closest("#stone-veil")) {
      closeStoneFloat();
      return;
    }
    if (!e.target.closest("#stone-float")) closeStoneFloat();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeStoneFloat();
  });
  window.addEventListener("resize", function () {
    const open = document.querySelector(".stone.is-open");
    if (open) placeStoneFloat(open);
  });
}
