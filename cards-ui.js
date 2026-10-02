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

function renderPhase(phaseId) {
  phaseId = Number(phaseId);
  const phase = COURSE.phases.find((p) => p.id === phaseId);
  if (!phase) return renderHome();
  const screen = '<div class="screen phase-screen" style="background-image:url(\'' + bgFor(phaseId) + "')\">";
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
  const milestones = list.map((m) => {
    const lesDone = leerstofCollected(m.id);
    const testDone = milestonePassed(m.id);
    const state = lesDone && testDone ? " done" : "";
    const lesIco = lesDone ? "book-open.png" : "book-closed.png";
    const testIco = testDone ? "medaille.png" : "toets.png";
    return (
      '<article class="milestone' + state + '" data-mid="' + escText(m.id) + '" data-phase="' + phaseId + '" tabindex="0" role="button" aria-label="' + escText(m.id + " " + (m.title || "")) + '">' +
        '<div class="milestone-number">' + escText(m.id) + '</div>' +
        '<div class="milestone-title">' + escText(m.title || "") + '</div>' +
        '<div class="milestone-status" aria-label="Voortgang">' +
          '<button type="button" class="milestone-status-btn" data-go="/fase/' + phaseId + '/m/' + escText(m.id) + '/les" title="' + (lesDone ? 'Lesstof bekeken' : 'Lesstof bekijken') + '" aria-label="' + (lesDone ? 'Lesstof bekeken' : 'Lesstof bekijken') + '">' +
            '<img src="assets/' + lesIco + '" alt="">' +
          '</button>' +
          '<button type="button" class="milestone-status-btn" data-go="/fase/' + phaseId + '/m/' + escText(m.id) + '/toets" title="' + (testDone ? 'Toets gehaald' : 'Toets maken') + '" aria-label="' + (testDone ? 'Toets gehaald' : 'Toets maken') + '">' +
            '<img src="assets/' + testIco + '" alt="">' +
          '</button>' +
        '</div>' +
      '</article>'
    );
  }).join("");

  return (
    screen + topbar() +
    '<div class="layout"><div class="panel"><h1>Fase ' + phaseId + " — " + phase.title +
    "</h1><p>" + (PHASE_BLURB[phaseId] || phase.short) + "</p></div>" +
    '<div class="milestone-grid">' + milestones + '</div></div></div>' +
    '<div id="milestone-info" class="milestone-info" hidden></div>'
  );
}

function closeMilestoneInfo() {
  const info = document.getElementById("milestone-info");
  if (info) { info.hidden = true; info.innerHTML = ""; }
  document.querySelectorAll(".milestone.is-open").forEach((el) => el.classList.remove("is-open"));
}

function openMilestoneInfo(card) {
  const info = document.getElementById("milestone-info");
  if (!info) return;
  const m = typeof getMilestone === "function" ? getMilestone(card.dataset.mid) : null;
  if (!m) return;
  document.querySelectorAll(".milestone.is-open").forEach((el) => el.classList.remove("is-open"));
  card.classList.add("is-open");
  info.hidden = false;
  info.innerHTML =
    '<button type="button" class="milestone-info-close" aria-label="Sluiten">×</button>' +
    '<div class="milestone-info-number">' + escText(m.id) + '</div>' +
    '<h2>' + escText(m.title || "") + '</h2>' +
    (m.goal ? '<p>' + escText(m.goal) + '</p>' : '');
  const r = card.getBoundingClientRect();
  const w = 320;
  let left = r.left;
  let top = r.bottom + 8;
  if (left + w > window.innerWidth - 12) left = window.innerWidth - w - 12;
  if (left < 12) left = 12;
  if (top + info.offsetHeight > window.innerHeight - 12) top = Math.max(12, r.top - info.offsetHeight - 8);
  info.style.left = left + "px";
  info.style.top = top + "px";
}

if (!window.__milestoneInfoBound) {
  window.__milestoneInfoBound = true;
  document.addEventListener("click", function (e) {
    const close = e.target.closest(".milestone-info-close");
    if (close) { closeMilestoneInfo(); return; }
    const card = e.target.closest(".milestone");
    if (card && !e.target.closest(".milestone-status-btn")) {
      e.preventDefault();
      if (card.classList.contains("is-open")) closeMilestoneInfo();
      else openMilestoneInfo(card);
      return;
    }
    if (!e.target.closest("#milestone-info")) closeMilestoneInfo();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMilestoneInfo();
  });
  window.addEventListener("resize", function () {
    const card = document.querySelector(".milestone.is-open");
    if (card) openMilestoneInfo(card);
  });
}
