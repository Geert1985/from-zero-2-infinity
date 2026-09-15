/* Formal milestone-test engine. Test content lives in exam-bank-fase1.js. */
const EXAM_SESSION = {};
const MILESTONE_EXAM_SIZE = 12;
const EXAM_RECENT_KEY = "fz2i_exam_recent_v1";

function examSessionKey(kind, phaseId, mid) {
  return kind + ":" + phaseId + ":" + (mid || "");
}

function examInstantiate(bank) {
  const raw = typeof bank === "function" ? bank() : bank || [];
  return raw.map((q) => JSON.parse(JSON.stringify(q)));
}

function examBankFor(phaseId, mid) {
  if (Number(phaseId) === 1 && typeof EXAM_BANKS_1 !== "undefined" && EXAM_BANKS_1[mid]) {
    return EXAM_BANKS_1[mid]();
  }
  const m = typeof getMilestone === "function" ? getMilestone(mid) : null;
  return m ? (m.exam || []) : [];
}

function examRecentMap() {
  try { return JSON.parse(localStorage.getItem(EXAM_RECENT_KEY) || "{}"); }
  catch (e) { return {}; }
}

function examRecentIds(phaseId, mid) {
  const ids = examRecentMap()[examSessionKey("mile", phaseId, mid)];
  return new Set(Array.isArray(ids) ? ids : []);
}

function examRememberRecent(phaseId, mid, questions) {
  try {
    const map = examRecentMap();
    map[examSessionKey("mile", phaseId, mid)] = questions.map((q) => q.id).filter(Boolean);
    localStorage.setItem(EXAM_RECENT_KEY, JSON.stringify(map));
  } catch (e) {}
}

function examPickMilestone(bank, phaseId, mid) {
  const recent = examRecentIds(phaseId, mid);
  const fresh = examShuffle(bank.filter((q) => !recent.has(q.id)));
  const old = examShuffle(bank.filter((q) => recent.has(q.id)));
  return fresh.concat(old).slice(0, MILESTONE_EXAM_SIZE);
}

function startExamSession(kind, phaseId, mid) {
  if (kind !== "mile") return [];
  const key = examSessionKey(kind, phaseId, mid);
  if (EXAM_SESSION[key]) return EXAM_SESSION[key];
  const questions = examPickMilestone(examInstantiate(examBankFor(phaseId, mid)), phaseId, mid);
  EXAM_SESSION[key] = questions;
  examRememberRecent(phaseId, mid, questions);
  return questions;
}

function currentExamQuestions(kind, phaseId, mid) {
  return EXAM_SESSION[examSessionKey(kind, phaseId, mid)] || startExamSession(kind, phaseId, mid);
}

function examGcd(a, b) {
  a = Math.abs(Math.trunc(a)); b = Math.abs(Math.trunc(b));
  while (b) { const r = a % b; a = b; b = r; }
  return a;
}

function examFractionEqual(a, b) {
  if (!a || !b || !Number.isFinite(a.numerator) || !Number.isFinite(a.denominator) ||
      !Number.isFinite(b.numerator) || !Number.isFinite(b.denominator) ||
      a.denominator === 0 || b.denominator === 0) return false;
  return a.numerator * b.denominator === b.numerator * a.denominator;
}

function examFractionSimplified(a) {
  if (!a || !Number.isInteger(a.numerator) || !Number.isInteger(a.denominator) || a.denominator === 0) return false;
  return examGcd(a.numerator, a.denominator) === 1;
}

function examArrayEqual(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((v, i) => String(v) === String(b[i]));
}

function examSetEqual(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.map(String).sort().join("\u0001") === b.map(String).sort().join("\u0001");
}

function examFactorsEqual(a, b) {
  const ka = Object.keys(a || {}).filter((k) => Number(a[k]) > 0).sort((x, y) => Number(x) - Number(y));
  const kb = Object.keys(b || {}).filter((k) => Number(b[k]) > 0).sort((x, y) => Number(x) - Number(y));
  return ka.length === kb.length && ka.every((k, i) => k === kb[i] && Number(a[k]) === Number(b[k]));
}

function examSameAnswer(given, q) {
  if (given == null) return false;
  const a = q.answer || {};
  if (a.type === "number") {
    const g = Number(given), target = Number(a.value);
    if (!Number.isFinite(g) || !Number.isFinite(target)) return false;
    const c = (q.response && q.response.constraints) || {};
    if (c.integer && !Number.isInteger(g)) return false;
    const tol = c.tolerance != null ? Number(c.tolerance) : 1e-9;
    return Math.abs(g - target) <= tol * Math.max(1, Math.abs(target));
  }
  if (a.type === "fraction") {
    if (!examFractionEqual(given, a.value)) return false;
    const c = (q.response && q.response.constraints) || {};
    return !c.requireSimplified || examFractionSimplified(given);
  }
  if (a.type === "choice" || a.type === "symbol") return String(given) === String(a.value);
  if (a.type === "ordering") return examArrayEqual(given, a.value);
  if (a.type === "select") return examSetEqual(given, a.value);
  if (a.type === "factorization") return examFactorsEqual(given, a.value);
  return false;
}

function examGradeList(questions, root) {
  let correct = 0;
  questions.forEach((q) => {
    const given = typeof examReadResponse === "function" ? examReadResponse(root, q) : null;
    const ok = examSameAnswer(given, q);
    if (ok) correct++;
    const box = root && root.querySelector ? root.querySelector(`.exam-question[data-qid="${CSS.escape(q.id)}"] .exam-feedback`) : null;
    if (box) {
      box.textContent = ok ? ((q.feedback && q.feedback.correct) || "Juist!") : ((q.feedback && q.feedback.incorrect) || "Niet juist.");
      box.className = "exam-feedback " + (ok ? "good" : "bad");
    }
    const card = root && root.querySelector ? root.querySelector(`.exam-question[data-qid="${CSS.escape(q.id)}"]`) : null;
    if (card) {
      card.classList.toggle("correct", ok);
      card.classList.toggle("incorrect", !ok);
    }
  });
  return { correct, total: questions.length, ratio: questions.length ? correct / questions.length : 0 };
}
