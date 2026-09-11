function lessonPages(html) {
  const raw = String(html || "").trim();
  if (!raw) return [""];
  const parts = raw.split(/(?=<h2\b)/i).map(function (s) { return s.trim(); }).filter(Boolean);
  return parts.length ? parts : [raw];
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
  const widget = String(body).indexOf("data-widget") >= 0 ? "" : "";
  return (
    '<div class="screen" style="background-image:url(\'' + bgFor(phaseId) + "')\">" +
    topbar('<button class="btn" data-go="/fase/' + phaseId + '">Fase ' + phaseId + "</button>") +
    '<div class="layout"><div class="panel lesson">' + body + widget +
    '<div class="lesson-pager" style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:20px">' +
    prev + '<span>' + (i + 1) + " / " + pages.length + "</span>" + nxt + "</div>" +
    '<div class="lesson-actions">' +
    '<button class="btn" data-go="/fase/' + phaseId + '">Terug naar fase ' + phaseId + "</button>" +
    '<button class="btn" data-go="/fase/' + phaseId + "/m/" + m.id + '/toets"><img class="book-ico lg" src="assets/' + (milestonePassed(m.id) ? "medaille.png" : "toets.png") + '" alt=""> Toets</button>' +
    collect +
    "</div></div></div></div>"
  );
}

const _render0 = render;
function render() {
  const parts = parseHash();
  const app = document.getElementById("app");
  if (app && parts[0] === "fase" && parts[2] === "m" && parts[4] === "les") {
    app.innerHTML = renderLesson(parts[1], parts[3], parts[5]);
    if (typeof typesetMath === "function") typesetMath(app);
    if (typeof mountWidgets === "function") {
      const host = app.querySelector(".widget-host") || app.querySelector(".panel.lesson") || app;
      if (host && parts[3]) mountWidgets(host, parts[3]);
    }
    return;
  }
  return _render0();
}
window.removeEventListener("hashchange", _render0);
window.addEventListener("hashchange", render);

document.addEventListener("keydown", function (e) {
  const parts = parseHash();
  if (parts[4] !== "les") return;
  const buttons = document.querySelectorAll(".lesson-pager [data-go]");
  if (e.key === "ArrowLeft" && buttons[0]) go(buttons[0].getAttribute("data-go"));
  if (e.key === "ArrowRight" && buttons[1]) go(buttons[1].getAttribute("data-go"));
});
