function costLabel(c) {
  return (
    "Kost " + c.les +
    ' <img class="cost-ico" src="assets/book-open.png" alt="lesstof"> ' +
    c.toets +
    ' <img class="cost-ico" src="assets/toets.png" alt="toets">'
  );
}

function worldName(mid) {
  if (typeof worldFor !== "function") return "";
  const w = worldFor(mid);
  if (!w || !w.name || w.name === "Gebied") return "";
  return w.name;
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
    '<div class="screen" style="background-image:url(\'assets/home.png\')">' +
    topbar() +
    '<div class="layout"><div class="panel hero"><h1>' + COURSE.title + "</h1><p>" + COURSE.tagline + "</p></div>" +
    '<div class="phase-grid">' + cards + "</div></div></div>"
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
      " is nog vergrendeld</h1><p>" + costLabel(c) +
      ". Je hebt " + leerstofScore() + ' <img class="cost-ico" src="assets/book-open.png" alt=""> en ' +
      toetsScore() + ' <img class="cost-ico" src="assets/toets.png" alt="">.</p>' +
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
    const place = worldName(m.id);
    const head = place || m.title;
    const topic = place ? m.title : "";
    return (
      '<article class="stone ' + st + '">' +
      '<img class="stone-art" src="assets/mile-' + art + '.png" alt="">' +
      "<h3>" + head + "</h3>" +
      (topic ? '<p class="stone-topic">' + topic + "</p>" : "") +
      "<p>" + m.goal + "</p>" +
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
    (nextCost ? "<p>Volgende fase vanaf " + costLabel(nextCost) + " (nu " + leerstofScore() + " / " + toetsScore() + ").</p>" : "") +
    '<div class="progress-bar"><span style="width:' + pctDone(phaseId) + '%"></span></div></div>' +
    '<div class="stone-grid">' + stones + "</div></div></div>"
  );
}
