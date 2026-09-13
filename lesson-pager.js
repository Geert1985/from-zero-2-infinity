function lessonPages(html) {
  const raw = String(html || "").trim();
  if (!raw) return [""];
  let parts = raw.split(/(?=<h3\b)/i).map(function (s) { return s.trim(); }).filter(Boolean);
  if (parts.length <= 1) {
    parts = raw.split(/(?=<h2\b)/i).map(function (s) { return s.trim(); }).filter(Boolean);
    return parts.length ? parts : [raw];
  }
  if (!/^<h3/i.test(parts[0]) && parts.length > 1) {
    parts[1] = parts[0] + parts[1];
    parts.shift();
  }
  return parts;
}

function renderLesson(phaseId, id, page) {
  const m = getMilestone(id);
  if (!m) return renderPhase(phaseId);
  const pages = lessonPages(m.theory);
  const last = pages.length - 1;
  let i = Number(page);
  if (!Number.isFinite(i) || i < 0) i = 0;
  if (i > last) i = last;
  const body = pages[i];
  const prev = i > 0
    ? '<button class="btn pager-btn" data-go="/fase/' + phaseId + "/m/" + m.id + "/les/" + (i - 1) + '">←</button>'
    : '<button class="btn pager-btn" disabled>←</button>';
  const nxt = i < last
    ? '<button class="btn pager-btn" data-go="/fase/' + phaseId + "/m/" + m.id + "/les/" + (i + 1) + '">→</button>'
    : '<button class="btn pager-btn" disabled>→</button>';
  const collect = i !== last ? "" : (leerstofCollected(m.id)
    ? '<span class="lesstof-done"><img class="book-ico lg" src="assets/book-open.png" alt=""> Lesstof verzameld</span>'
    : '<button class="btn primary" id="collect-leerstof" data-mid="' + m.id + '"><img class="book-ico lg" src="assets/book-open.png" alt=""> Verzamel lesstof</button>');
  return (
    '<div class="screen" style="background-image:url(\'' + bgFor(phaseId) + "')\">" +
    topbar('<button class="btn" data-go="/fase/' + phaseId + '">Fase ' + phaseId + "</button>") +
    '<div class="layout"><div class="panel lesson">' + body +
    '<div class="lesson-pager" style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:20px">' +
    prev + '<span>' + (i + 1) + " / " + pages.length + "</span>" + nxt + "</div>" +
    '<div class="lesson-actions">' +
    '<button class="btn" data-go="/fase/' + phaseId + '">Terug naar fase ' + phaseId + "</button>" +
    '<button class="btn" data-go="/fase/' + phaseId + "/m/" + m.id + '/toets"><img class="book-ico lg" src="assets/' + (milestonePassed(m.id) ? "medaille.png" : "toets.png") + '" alt=""> Toets</button>' +
    collect +
    "</div></div></div></div>"
  );
}

window.__appRender = window.render;
window.render = function renderPaged() {
  const parts = parseHash();
  const app = document.getElementById("app");
  if (app && parts[0] === "fase" && parts[2] === "m" && parts[4] === "les") {
    app.innerHTML = renderLesson(parts[1], parts[3], parts[5]);
    if (typeof typesetMath === "function") typesetMath(app);
    const slot = app.querySelector("[data-widget]");
    if (slot && typeof mountWidgets === "function") mountWidgets(app, parts[3]);
    return;
  }
  return window.__appRender();
};
window.addEventListener("hashchange", window.render);
