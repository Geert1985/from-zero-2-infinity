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

function enhanceCallouts(root, mid, page) {
  if (!root) return;
  const boxes = root.querySelectorAll(".callout");
  boxes.forEach(function (box, idx) {
    if (box.querySelector(".callout-collect")) return;
    const key = String(mid) + ":p" + String(page) + ":c" + idx;
    const taken = typeof inzichtCollected === "function" && inzichtCollected(key);
    const wrap = document.createElement("div");
    wrap.className = "callout-collect";
    wrap.innerHTML = taken
      ? '<span class="inzicht-done"><img class="book-ico" src="assets/inzicht.png" alt=""> Inzicht verzameld</span>'
      : '<button type="button" class="btn collect-inzicht" data-ikey="' + key + '"><img class="book-ico" src="assets/inzicht.png" alt=""> Verzamel Inzicht</button>';
    box.appendChild(wrap);
  });
  const dock = root.querySelector(".lesson-dock-inzicht");
  if (dock) {
    const live = root.querySelector(".callout .collect-inzicht");
    dock.innerHTML = live ? live.outerHTML : "";
  }
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
    '<div class="lesson-dock">' +
    '<div class="lesson-pager">' +
    prev + '<span>' + (i + 1) + " / " + pages.length + "</span>" + nxt +
    "</div>" +
    '<div class="lesson-dock-inzicht"></div>' +
    "</div>" +
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
    enhanceCallouts(app, parts[3], parts[5] || 0);
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const screen = app.querySelector(".screen");
    if (screen) screen.scrollTop = 0;
    return;
  }
  return window.__appRender();
};
window.addEventListener("hashchange", window.render);
window.addEventListener("load", window.render);
if (document.readyState !== "loading") window.render();

function isLessonPage() {
  const parts = parseHash();
  return parts[0] === "fase" && parts[2] === "m" && parts[4] === "les";
}

function goLessonPage(dir) {
  const btn = document.querySelector(
    dir < 0
      ? ".lesson-pager .pager-btn:first-child"
      : ".lesson-pager .pager-btn:last-child"
  );
  const href = btn && btn.getAttribute("data-go");
  if (!href || btn.disabled) return false;
  go(href);
  return true;
}

document.addEventListener("keydown", function (e) {
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
  if (e.target && e.target.closest("input, textarea, select, [contenteditable='true']")) return;
  if (!isLessonPage()) return;
  e.preventDefault();
  goLessonPage(e.key === "ArrowLeft" ? -1 : 1);
});

if (!window.__lessonSwipeBound) {
  window.__lessonSwipeBound = true;
  var swipe = { x: 0, y: 0, t: 0, on: false };

  document.addEventListener("touchstart", function (e) {
    if (!isLessonPage() || e.touches.length !== 1) {
      swipe.on = false;
      return;
    }
    const t = e.target;
    if (t.closest("input, textarea, select, button, a, canvas, .widget, [data-widget], .lesson-dock, .topbar")) {
      swipe.on = false;
      return;
    }
    swipe.x = e.touches[0].clientX;
    swipe.y = e.touches[0].clientY;
    swipe.t = Date.now();
    swipe.on = true;
  }, { passive: true });

  document.addEventListener("touchend", function (e) {
    if (!swipe.on || !isLessonPage()) return;
    swipe.on = false;
    const p = e.changedTouches[0];
    if (!p) return;
    const dx = p.clientX - swipe.x;
    const dy = p.clientY - swipe.y;
    if (Date.now() - swipe.t > 700) return;
    if (Math.abs(dx) < 56) return;
    if (Math.abs(dx) < Math.abs(dy) * 1.25) return;
    goLessonPage(dx < 0 ? 1 : -1);
  }, { passive: true });
}
