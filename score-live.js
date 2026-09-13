function paintScores() {
  const items = document.querySelectorAll(".lesstof-score .score-item");
  if (items[0]) {
    items[0].id = "score-lesstof-item";
    const s = items[0].querySelector("span");
    if (s) s.textContent = String(leerstofScore());
  }
  if (items[1]) {
    items[1].id = "score-toets";
    const s = items[1].querySelector("span");
    if (s) s.textContent = String(toetsScore());
  }
  if (items[2]) {
    items[2].id = "score-inzicht";
    const s = items[2].querySelector("span");
    if (s) s.textContent = String(inzichtScore());
  }
  const step = document.querySelector(".ch-step");
  if (step) {
    step.textContent = step.textContent.replace(/Inzicht\s+\d+/, "Inzicht " + inzichtScore());
  }
}

if (typeof store !== "undefined" && store.subscribe) {
  store.subscribe(paintScores);
}
