/* UI for individual milestone tests. */
function questionHTML(q, i) {
  if (q && q.answer && q.response && typeof examQuestionHTML === "function") return examQuestionHTML(q, i);
  if (q && q.type === "choice") {
    const opts = (q.choices || []).map((c) =>
      '<label class="choice"><input type="radio" name="' + q.id + '" value="' + encodeURIComponent(c) + '"> <span>' + c + '</span></label>'
    ).join("");
    return '<div class="question" data-qid="' + q.id + '"><div class="q-title">' + (i + 1) + '. ' + q.prompt + '</div><div class="choices">' + opts + '</div><div class="feedback"></div></div>';
  }
  return '<div class="question" data-qid="' + q.id + '"><div class="q-title">' + (i + 1) + '. ' + q.prompt + '</div><input type="text" name="' + q.id + '" autocomplete="off"><div class="feedback"></div></div>';
}

function readAnswer(root, q) {
  if (q && q.answer && q.response && typeof examReadResponse === "function") return examReadResponse(root, q);
  if (q && q.type === "choice") {
    const p = root.querySelector('input[name="' + q.id + '"]:checked');
    return p ? decodeURIComponent(p.value) : "";
  }
  const input = root.querySelector('[name="' + q.id + '"]');
  return input ? input.value : "";
}

function gradeList(questions, root) {
  if (questions && questions.length && questions[0].answer && typeof examGradeList === "function") return examGradeList(questions, root);
  let correct = 0;
  questions.forEach((q) => {
    const ok = typeof sameAnswer === "function" ? sameAnswer(readAnswer(root, q), q.accept || []) : false;
    if (ok) correct++;
    const box = root.querySelector('[data-qid="' + q.id + '"] .feedback');
    if (box) {
      box.textContent = ok ? "Goed" : "Antwoord: " + (q.accept || [])[0];
      box.className = "feedback " + (ok ? "good" : "bad");
    }
  });
  return { correct, total: questions.length, ratio: questions.length ? correct / questions.length : 0 };
}

function renderExam(kind, phaseId, mid) {
  if (kind !== "mile") return renderPhase(phaseId);
  const m = getMilestone(mid);
  const locked = !milestoneUnlocked(mid);
  const screen = '<div class="screen" style="background-image:url(\'' + bgFor(phaseId) + "')\">";
  const bar = topbar('<button class="btn" data-go="/fase/' + phaseId + '">Fase ' + phaseId + "</button>");
  if (locked || !m) {
    return screen + bar + '<div class="layout"><div class="panel"><h1>Deze toets is nog vergrendeld</h1><p>Voltooi eerst de vereiste leerstof en toetsen.</p></div></div></div>';
  }
  const questions = startExamSession("mile", phaseId, mid);
  return screen + bar + '<div class="layout"><div class="panel"><h1>Toets ' + m.id + ' — ' + m.title + '</h1><p>Drempel: ' + Math.round(COURSE.passRatio * 100) + '%. Alle antwoorden zijn interactief; je hoeft niets te typen.</p><div id="quiz">' + questions.map(questionHTML).join("") + '</div><p><button class="btn primary" id="submit-exam" data-kind="mile" data-phase="' + phaseId + '" data-mid="' + mid + '">Indienen</button></p><div id="score"></div><div class="lesson-actions"><button class="btn" data-go="/fase/' + phaseId + '">Terug naar fase ' + phaseId + '</button></div></div></div></div>';
}
