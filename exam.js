const EXAM_SESSION = {};
const MILESTONE_EXAM_SIZE = 12;
const PHASE_EXAM_SIZE = 20;

function rnd(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function q(id, prompt, accept, extra) {
  return Object.assign({ id: id, prompt: prompt, accept: accept.map(String) }, extra || {});
}

function parametricBank(phaseId) {
  const out = [];
  const p = Number(phaseId);
  if (p === 1) {
    for (let i = 0; i < 6; i++) {
      const a = rnd(12, 80), b = rnd(8, 70);
      out.push(q("g1a" + i, a + " + " + b + " = ?", [a + b]));
      out.push(q("g1s" + i, a + " − " + b + " = ?", [a - b]));
    }
    for (let i = 0; i < 4; i++) {
      const a = rnd(3, 12), b = rnd(3, 12);
      out.push(q("g1m" + i, a + " × " + b + " = ?", [a * b]));
    }
    for (let i = 0; i < 4; i++) {
      const b = rnd(3, 9), qot = rnd(4, 12), r = rnd(0, b - 1);
      const a = b * qot + r;
      out.push(q("g1d" + i, a + " ÷ " + b + " = ? (als er rest is: q r r)", r === 0 ? [String(qot)] : [qot + " r " + r, qot + "r" + r]));
    }
  }
  if (p === 2) {
    for (let i = 0; i < 4; i++) {
      const a = rnd(20, 80), b = rnd(20, 90 - a);
      out.push(q("g2ang" + i, "Twee hoeken van een driehoek zijn " + a + "° en " + b + "°. Derde hoek?", [180 - a - b, (180 - a - b) + "°"]));
    }
    for (let i = 0; i < 3; i++) {
      const l = rnd(4, 12), w = rnd(3, 10);
      out.push(q("g2ar" + i, "Oppervlakte rechthoek " + l + " × " + w, [l * w]));
      out.push(q("g2om" + i, "Omtrek rechthoek " + l + " × " + w, [2 * (l + w)]));
    }
    const triples = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [9, 12, 15], [8, 15, 17]];
    triples.forEach((t, i) => {
      out.push(q("g2py" + i, "Rechthoekszijden " + t[0] + " en " + t[1] + ". Hypotenusa?", [t[2]]));
    });
    for (let i = 0; i < 4; i++) {
      const a = rnd(2, 6), b = rnd(-8, 8), x = rnd(-4, 6);
      out.push(q("g2f" + i, "f(" + x + ") voor f(x) = " + a + "x + (" + b + ")", [a * x + b]));
    }
  }
  if (p === 3) {
    for (let i = 0; i < 4; i++) {
      const n = rnd(2, 7);
      out.push(q("g3p" + i, "Afgeleide van x^" + n, [n + "x^" + (n - 1), n + "x" + (n - 1)]));
    }
    for (let i = 0; i < 3; i++) {
      const a = rnd(2, 6);
      out.push(q("g3lin" + i, "d/dx van " + a + "x", [String(a)]));
    }
  }
  if (p === 4) {
    for (let i = 0; i < 4; i++) {
      const a = rnd(-5, 5), b = rnd(-5, 5), c = rnd(-5, 5), d = rnd(-5, 5);
      out.push(q("g4dot" + i, "Inproduct (" + a + "," + b + ") · (" + c + "," + d + ")", [a * c + b * d]));
    }
  }
  if (p === 5) {
    for (let i = 0; i < 3; i++) {
      const a = rnd(1, 5), b = rnd(1, 5);
      out.push(q("g5mod" + i, "| " + a + " + " + b + "i | (exact of 1 decimaal)", [String(Math.hypot(a, b)), Math.hypot(a, b).toFixed(2), "sqrt(" + (a * a + b * b) + ")"]));
    }
  }
  return out;
}

function examKey(kind, phaseId, mid) {
  return kind + ":" + phaseId + ":" + (mid || "");
}

function uniqueQuestions(list) {
  const seen = new Set();
  const out = [];
  list.forEach((item, i) => {
    if (!item || !item.prompt) return;
    const key = item.prompt + "|" + (item.accept || []).join(",");
    if (seen.has(key)) return;
    seen.add(key);
    out.push(Object.assign({}, item, { id: (item.id || "q") + "-x" + i }));
  });
  return out;
}

function buildExamQuestions(kind, phaseId, mid) {
  const bank = [];
  if (kind === "phase") {
    bank.push.apply(bank, PHASE_EXAMS[Number(phaseId)] || []);
    (typeof milestonesFor === "function" ? milestonesFor(phaseId) : []).forEach((m) => {
      bank.push.apply(bank, m.exam || []);
      bank.push.apply(bank, m.practice || []);
    });
  } else {
    const m = typeof getMilestone === "function" ? getMilestone(mid) : null;
    if (m) {
      bank.push.apply(bank, m.exam || []);
      bank.push.apply(bank, m.practice || []);
    }
  }
  bank.push.apply(bank, parametricBank(phaseId));
  const unique = uniqueQuestions(bank);
  const size = kind === "phase" ? PHASE_EXAM_SIZE : MILESTONE_EXAM_SIZE;
  return shuffle(unique).slice(0, Math.min(size, unique.length));
}

function startExamSession(kind, phaseId, mid) {
  const key = examKey(kind, phaseId, mid);
  const questions = buildExamQuestions(kind, phaseId, mid);
  EXAM_SESSION[key] = questions;
  return questions;
}

function currentExamQuestions(kind, phaseId, mid) {
  const key = examKey(kind, phaseId, mid);
  return EXAM_SESSION[key] || startExamSession(kind, phaseId, mid);
}
