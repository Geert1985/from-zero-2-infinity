/* Interactive answer widgets for formal exams. No free-text answers. */
const EXAM_WIDGET_STATE = {};

function examEscape(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function examKeypadHTML(qid, extraKeys) {
  const id = examEscape(qid);
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const extra = extraKeys || [];
  return (
    '<div class="exam-keypad">' +
    keys.map(function (n) {
      return '<button type="button" class="exam-key" data-exam-key="' + n + '" data-qid="' + id + '">' + n + "</button>";
    }).join("") +
    extra.join("") +
    '<button type="button" class="exam-key" data-exam-key="-" data-qid="' + id + '">−</button>' +
    '<button type="button" class="exam-key" data-exam-key="0" data-qid="' + id + '">0</button>' +
    '<button type="button" class="exam-key" data-exam-key="back" data-qid="' + id + '">⌫</button>' +
    '<button type="button" class="exam-key wide" data-exam-key="clear" data-qid="' + id + '">Wissen</button>' +
    "</div>"
  );
}

function examFracKeypadHTML(qid) {
  const id = examEscape(qid);
  return (
    '<div class="exam-keypad">' +
    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (n) {
      return '<button type="button" class="exam-key" data-exam-frac-key="' + n + '" data-qid="' + id + '">' + n + "</button>";
    }).join("") +
    '<button type="button" class="exam-key" data-exam-frac-key="back" data-qid="' + id + '">⌫</button>' +
    '<button type="button" class="exam-key" data-exam-frac-key="0" data-qid="' + id + '">0</button>' +
    '<button type="button" class="exam-key" data-exam-frac-key="clear" data-qid="' + id + '">Wissen</button>' +
    "</div>"
  );
}

function ensureExamWidgetStyles() {
  if (document.getElementById("exam-widget-styles")) return;
  const style = document.createElement("style");
  style.id = "exam-widget-styles";
  style.textContent = `
    .exam-question{margin:0 auto 28px;padding:22px 22px 18px;max-width:42rem;border:1px solid rgba(230,199,122,.28);border-radius:16px;background:rgba(12,10,8,.94)}
    .exam-question.correct{border-color:#5fbf83}
    .exam-question.incorrect{border-color:#c96b6b}
    .exam-q-title{font-weight:700;font-size:1.08rem;margin:0 0 16px}
    .exam-topic{opacity:.65;font-size:.82rem;margin-bottom:7px}
    .exam-tablet{margin:0 auto;max-width:26rem;padding:16px 16px 14px;background:rgba(12,10,8,.96);border:1px solid var(--gold,#e6c77a);border-radius:16px;box-shadow:0 0 0 1px rgba(230,199,122,.12),0 16px 40px rgba(0,0,0,.35)}
    .exam-number-display{display:flex;align-items:center;justify-content:flex-end;min-height:64px;padding:12px 16px;margin:0 0 12px;border-radius:12px;background:linear-gradient(180deg,#3a2e1c,#1c1610);border:1px solid rgba(230,199,122,.55);box-shadow:inset 0 1px 0 rgba(244,234,211,.12);font-family:Cinzel,serif;font-size:1.7rem;line-height:1.2;color:#fff6df;letter-spacing:.04em}
    .exam-number-display.is-empty{color:#cbb98a;font-size:1.05rem;font-family:"Source Sans 3",system-ui,sans-serif;letter-spacing:.06em}
    .exam-number-display.has-value{color:#fff6df}
    .exam-keypad{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
    .exam-key,.exam-choice-btn,.exam-symbol-btn,.exam-select-btn,.exam-order-item,.exam-order-slot,.exam-factor-btn{border:1px solid rgba(230,199,122,.4);background:rgba(20,16,10,.7);color:#f4ead3;border-radius:12px;padding:12px 10px;cursor:pointer;font:inherit;min-height:48px}
    .exam-key:hover,.exam-choice-btn:hover,.exam-symbol-btn:hover,.exam-select-btn:hover{border-color:#e6c77a;color:#e6c77a}
    .exam-choice-btn.selected,.exam-symbol-btn.selected,.exam-select-btn.selected,.exam-order-item.selected{background:rgba(230,199,122,.2);border-color:#e6c77a}
    .exam-choice-btn:disabled,.exam-symbol-btn:disabled,.exam-select-btn:disabled,.exam-order-item:disabled,.exam-key:disabled,.exam-factor-btn:disabled{opacity:.55;cursor:default}
    .exam-key.wide{grid-column:1 / -1}
    .exam-actions{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:4px}
    .exam-frac-editor{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:12px}
    .exam-frac-line{width:88px;border-top:2px solid #e6c77a}
    .exam-frac-side{display:flex;flex-direction:column;gap:8px;align-items:center}
    .exam-frac-part{min-width:88px;min-height:48px;padding:8px 12px;border-radius:12px;background:linear-gradient(180deg,#3a2e1c,#1c1610);border:1px solid rgba(230,199,122,.45);font-family:Cinzel,serif;font-size:1.35rem;text-align:center;color:#fff6df}
    .exam-frac-active{border-color:#e6c77a;box-shadow:0 0 0 2px rgba(230,199,122,.18)}
    .exam-numberline{max-width:26rem;margin:0 auto}
    .exam-numberline-track{position:relative;height:18px;margin:24px 10px 8px;background:rgba(255,255,255,.15);border-radius:10px}
    .exam-numberline-ticks{display:flex;justify-content:space-between;font-size:.78rem;opacity:.75}
    .exam-range{width:100%;accent-color:#e6c77a}
    .exam-nl-value{text-align:center;font-family:Cinzel,serif;font-size:1.45rem;font-weight:700;margin-top:8px;color:#fff6df}
    .exam-order{display:grid;grid-template-columns:1fr;gap:8px}
    .exam-order-slots{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;justify-content:center}
    .exam-order-slot{min-width:70px;min-height:42px}
    .exam-order-slot.filled{border-color:#e6c77a}
    .exam-order-items{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
    .exam-order-item.used{opacity:.35}
    .exam-factor-row{display:flex;align-items:center;justify-content:center;gap:8px;margin:8px 0}
    .exam-factor-count{min-width:36px;text-align:center;font-weight:700;color:#e6c77a}
    .exam-hint{margin:10px 0 0;text-align:center;font-size:.9rem;color:#cbb98a}
    .exam-feedback{margin-top:12px;font-weight:700;text-align:center;min-height:1.2em}
    .exam-feedback.good{color:#76d39b}
    .exam-feedback.bad{color:#ef9292}
    @media(max-width:650px){
      .exam-question{padding:16px}
      .exam-tablet{max-width:100%}
      .exam-key{min-height:46px}
    }
  `;
  document.head.appendChild(style);
}

function examResetWidgetState(questions) {
  Object.keys(EXAM_WIDGET_STATE).forEach(function (k) { delete EXAM_WIDGET_STATE[k]; });
  (questions || []).forEach(function (q) {
    if (q.response && q.response.type === "ordering") EXAM_WIDGET_STATE[q.id] = { order: [] };
    else if (q.response && q.response.type === "select") EXAM_WIDGET_STATE[q.id] = { selected: [] };
    else if (q.response && q.response.type === "factorization") EXAM_WIDGET_STATE[q.id] = { factors: {} };
    else if (q.response && q.response.type === "fraction") EXAM_WIDGET_STATE[q.id] = { part: "numerator", numerator: "", denominator: "" };
    else EXAM_WIDGET_STATE[q.id] = { value: "" };
  });
}

function examQuestionHTML(q, i) {
  const r = q.response || { type: q.type || "number" };
  const type = r.type;
  const id = examEscape(q.id);
  let body = "";
  if (type === "number") {
    body =
      '<div class="widget exam-tablet">' +
      '<div class="exam-number-display is-empty" data-number-display="' + id + '">antwoord</div>' +
      examKeypadHTML(q.id) +
      "</div>";
  } else if (type === "choice") {
    body = '<div class="widget exam-tablet"><div class="exam-actions">' +
      (r.options || q.choices || []).map(function (o, idx) {
        return '<button type="button" class="exam-choice-btn" data-exam-choice="' + idx + '" data-qid="' + id + '">' + examEscape(o) + "</button>";
      }).join("") +
      "</div></div>";
  } else if (type === "symbol") {
    const symbols = r.symbols || ["<", "=", ">"];
    body = '<div class="widget exam-tablet"><div class="exam-actions">' +
      symbols.map(function (o, idx) {
        return '<button type="button" class="exam-symbol-btn" data-exam-symbol="' + idx + '" data-qid="' + id + '">' + examEscape(o) + "</button>";
      }).join("") +
      "</div></div>";
  } else if (type === "fraction") {
    body =
      '<div class="widget exam-tablet">' +
      '<div class="exam-frac-editor"><div class="exam-frac-side">' +
      '<div class="exam-frac-part exam-frac-active" data-frac-part="numerator" data-qid="' + id + '">0</div>' +
      '<div class="exam-frac-line"></div>' +
      '<div class="exam-frac-part" data-frac-part="denominator" data-qid="' + id + '">0</div>' +
      "</div></div>" +
      examFracKeypadHTML(q.id) +
      '<p class="exam-hint">Tik boven of onder de streep.</p></div>';
  } else if (type === "numberline") {
    const d = q.data || {};
    const min = Number.isFinite(d.min) ? d.min : -10;
    const max = Number.isFinite(d.max) ? d.max : 10;
    const step = d.step || 1;
    const start = d.startValue != null ? d.startValue : min;
    body =
      '<div class="widget exam-tablet exam-numberline">' +
      '<input class="exam-range" type="range" min="' + min + '" max="' + max + '" step="' + step + '" value="' + start + '" data-exam-numberline data-qid="' + id + '">' +
      '<div class="exam-numberline-ticks"><span>' + min + "</span><span>0</span><span>" + max + "</span></div>" +
      '<div class="exam-nl-value" data-nl-value="' + id + '">' + start + "</div></div>";
  } else if (type === "ordering") {
    const options = (r.options || (q.data && q.data.items) || []).map(String);
    body =
      '<div class="widget exam-tablet exam-order">' +
      '<div class="exam-order-slots" data-order-slots="' + id + '">' +
      options.map(function (_, idx) {
        return '<button type="button" class="exam-order-slot" data-order-slot="' + idx + '" data-qid="' + id + '">' + (idx + 1) + "</button>";
      }).join("") +
      '</div><div class="exam-order-items">' +
      options.map(function (o, idx) {
        return '<button type="button" class="exam-order-item" data-order-item="' + idx + '" data-qid="' + id + '">' + examEscape(o) + "</button>";
      }).join("") +
      '</div><p class="exam-hint">Tik de getallen in de gewenste volgorde.</p></div>';
  } else if (type === "select") {
    body = '<div class="widget exam-tablet"><div class="exam-actions">' +
      (r.options || (q.data && q.data.options) || []).map(function (o, idx) {
        return '<button type="button" class="exam-select-btn" data-exam-select="' + idx + '" data-qid="' + id + '">' + examEscape(o) + "</button>";
      }).join("") +
      "</div></div>";
  } else if (type === "factorization") {
    const primes = r.primes || [2, 3, 5, 7, 11, 13];
    body = '<div class="widget exam-tablet">' + primes.map(function (p) {
      return '<div class="exam-factor-row"><strong>' + p + '</strong>' +
        '<button type="button" class="exam-factor-btn" data-factor="' + p + '" data-delta="-1" data-qid="' + id + '">−</button>' +
        '<span class="exam-factor-count" data-factor-count="' + p + '" data-qid="' + id + '">0</span>' +
        '<button type="button" class="exam-factor-btn" data-factor="' + p + '" data-delta="1" data-qid="' + id + '">+</button></div>';
    }).join("") + "</div>";
  } else {
    body = '<div class="widget exam-tablet"><div class="exam-number-display">?</div></div>';
  }
  return (
    '<div class="exam-question" data-qid="' + id + '">' +
    '<div class="exam-topic">' + examEscape(q.topic || "") + "</div>" +
    '<div class="exam-q-title">' + (i + 1) + ". " + (q.prompt || "") + "</div>" +
    body +
    '<div class="exam-feedback"></div></div>'
  );
}

function examFormatNumberDisplay(value) {
  if (value == null || value === "") return "antwoord";
  return String(value).replace(".", ",");
}

function examUpdateQuestionUI(qid) {
  const root = document.querySelector('.exam-question[data-qid="' + CSS.escape(qid) + '"]');
  if (!root) return;
  const s = EXAM_WIDGET_STATE[qid] || {};
  const display = root.querySelector("[data-number-display]");
  if (display) {
    const empty = !s.value;
    display.textContent = examFormatNumberDisplay(s.value);
    display.classList.toggle("is-empty", empty);
    display.classList.toggle("has-value", !empty);
  }
  root.querySelectorAll(".exam-choice-btn,.exam-symbol-btn").forEach(function (b) { b.classList.remove("selected"); });
  if (s.choice != null) root.querySelector('.exam-choice-btn[data-exam-choice="' + s.choice + '"]')?.classList.add("selected");
  if (s.symbol != null) root.querySelector('.exam-symbol-btn[data-exam-symbol="' + s.symbol + '"]')?.classList.add("selected");
  root.querySelectorAll("[data-frac-part]").forEach(function (el) {
    const part = el.dataset.fracPart;
    el.textContent = s[part] || "0";
    el.classList.toggle("exam-frac-active", s.part === part);
  });
  const nl = root.querySelector("[data-exam-numberline]");
  if (nl) {
    nl.value = s.value;
    const out = root.querySelector("[data-nl-value]");
    if (out) out.textContent = s.value;
  }
  root.querySelectorAll(".exam-select-btn").forEach(function (b) {
    b.classList.toggle("selected", (s.selected || []).includes(Number(b.dataset.examSelect)));
  });
  root.querySelectorAll(".exam-order-item").forEach(function (b) {
    b.classList.toggle("used", (s.order || []).includes(Number(b.dataset.orderItem)));
  });
  root.querySelectorAll(".exam-order-slot").forEach(function (b, i) {
    const idx = (s.order || [])[i];
    const item = idx == null ? null : root.querySelector('.exam-order-item[data-order-item="' + idx + '"]');
    b.textContent = item ? item.textContent : String(i + 1);
    b.classList.toggle("filled", !!item);
  });
  root.querySelectorAll("[data-factor-count]").forEach(function (el) {
    el.textContent = String((s.factors || {})[el.dataset.factorCount] || 0);
  });
}

function examReadResponse(root, q) {
  const type = (q.response || { type: q.type }).type;
  const s = EXAM_WIDGET_STATE[q.id] || {};
  if (type === "number" || type === "numberline") return s.value === "" ? null : Number(s.value);
  if (type === "choice") return s.choice == null ? null : (q.response.options || q.choices || [])[s.choice];
  if (type === "symbol") return s.symbol == null ? null : (q.response.symbols || ["<", "=", ">"])[s.symbol];
  if (type === "fraction") return { numerator: Number(s.numerator || 0), denominator: Number(s.denominator || 0) };
  if (type === "ordering") return (s.order || []).map(function (i) { return String((q.response.options || (q.data && q.data.items) || [])[i]); });
  if (type === "select") return (s.selected || []).map(function (i) { return String((q.response.options || (q.data && q.data.options) || [])[i]); });
  if (type === "factorization") return Object.assign({}, s.factors || {});
  return null;
}

function examBindWidgets() {
  ensureExamWidgetStyles();
  document.addEventListener("click", function (e) {
    const qidEl = e.target.closest("[data-qid]");
    if (!qidEl) return;
    const qid = qidEl.dataset.qid;
    const s = EXAM_WIDGET_STATE[qid];
    if (!s) return;
    const root = qidEl.closest(".exam-question");
    const key = e.target.closest("[data-exam-key]");
    if (key) {
      const v = key.dataset.examKey;
      if (v === "clear") s.value = "";
      else if (v === "back") s.value = String(s.value || "").slice(0, -1);
      else if (v === "-" && !s.value) s.value = "-";
      else if (v !== "-" || String(s.value || "").indexOf("-") < 0) s.value = String(s.value || "") + v;
      examUpdateQuestionUI(qid);
      return;
    }
    const choice = e.target.closest("[data-exam-choice]");
    if (choice) { s.choice = Number(choice.dataset.examChoice); examUpdateQuestionUI(qid); return; }
    const sym = e.target.closest("[data-exam-symbol]");
    if (sym) { s.symbol = Number(sym.dataset.examSymbol); examUpdateQuestionUI(qid); return; }
    const fracPart = e.target.closest("[data-frac-part]");
    if (fracPart) { s.part = fracPart.dataset.fracPart; examUpdateQuestionUI(qid); return; }
    const fracKey = e.target.closest("[data-exam-frac-key]");
    if (fracKey) {
      const v = fracKey.dataset.examFracKey;
      const p = s.part || "numerator";
      if (v === "clear") s[p] = "";
      else if (v === "back") s[p] = String(s[p] || "").slice(0, -1);
      else s[p] = String(s[p] || "") + v;
      examUpdateQuestionUI(qid);
      return;
    }
    const sel = e.target.closest("[data-exam-select]");
    if (sel) {
      const idx = Number(sel.dataset.examSelect);
      const a = s.selected || [];
      s.selected = a.includes(idx) ? a.filter(function (x) { return x !== idx; }) : a.concat(idx);
      examUpdateQuestionUI(qid);
      return;
    }
    const oi = e.target.closest("[data-order-item]");
    if (oi) {
      const idx = Number(oi.dataset.orderItem);
      const a = s.order || [];
      if (a.includes(idx)) s.order = a.filter(function (x) { return x !== idx; });
      else if (a.length < qRootOptionCount(root)) s.order = a.concat(idx);
      examUpdateQuestionUI(qid);
      return;
    }
    const os = e.target.closest("[data-order-slot]");
    if (os) {
      const pos = Number(os.dataset.orderSlot);
      if (s.order && s.order[pos] != null) s.order = s.order.filter(function (_, i) { return i !== pos; });
      examUpdateQuestionUI(qid);
      return;
    }
    const factor = e.target.closest("[data-factor]");
    if (factor) {
      const p = factor.dataset.factor;
      const n = (s.factors[p] || 0) + Number(factor.dataset.delta);
      if (n <= 0) delete s.factors[p];
      else s.factors[p] = n;
      examUpdateQuestionUI(qid);
    }
  });
  document.addEventListener("input", function (e) {
    const el = e.target.closest("[data-exam-numberline]");
    if (!el) return;
    const qid = el.dataset.qid;
    if (EXAM_WIDGET_STATE[qid]) {
      EXAM_WIDGET_STATE[qid].value = el.value;
      examUpdateQuestionUI(qid);
    }
  });
}
function qRootOptionCount(root) {
  return root ? root.querySelectorAll(".exam-order-slot").length : 0;
}

if (typeof document !== "undefined") examBindWidgets();

/* Integrated compatibility fixes from exam-widget-fix.js */
(function () {
  const baseQuestionHTML = examQuestionHTML;
  examQuestionHTML = function (q, i) {
    if (q.id === "F1-1.4-07") {
      q.data = Object.assign({}, q.data, { min: 0, max: 2, step: 0.25, startValue: 0 });
      q.response = Object.assign({}, q.response, { constraints: { integer: false } });
    }
    let html = baseQuestionHTML(q, i);

    if (q.response && q.response.type === "numberline") {
      const d = q.data || {};
      const min = Number(d.min), max = Number(d.max);
      if (Number.isFinite(min) && Number.isFinite(max)) {
        const mid = (min + max) / 2;
        html = html.replace(
          '<div class="exam-numberline-ticks"><span>' + min + "</span><span>0</span><span>" + max + "</span></div>",
          '<div class="exam-numberline-ticks"><span>' + min + "</span><span>" + mid + "</span><span>" + max + "</span></div>"
        );
      }
    }

    const r = q.response || {};
    if (r.type === "number" && r.constraints && r.constraints.integer === false) {
      const marker = '<button type="button" class="exam-key" data-exam-key="-" data-qid="' + examEscape(q.id) + '">−</button>';
      const decimal = '<button type="button" class="exam-key" data-exam-key="decimal" data-qid="' + examEscape(q.id) + '">,</button>';
      html = html.replace(marker, decimal);
    }
    return html;
  };

  const baseReadResponse = examReadResponse;
  examReadResponse = function (root, q) {
    const type = (q.response || { type: q.type }).type;
    if (type === "numberline") {
      const el = root && root.querySelector ? root.querySelector("[data-exam-numberline]") : null;
      return el ? Number(el.value) : null;
    }
    return baseReadResponse(root, q);
  };

  document.addEventListener("click", function (e) {
    const b = e.target.closest('[data-exam-key="decimal"]');
    if (!b) return;
    const qid = b.dataset.qid, s = EXAM_WIDGET_STATE[qid];
    if (!s) return;
    s.value = String(s.value || "").replace(/decimal/g, "").replace(/,/g, ".");
    if (!s.value) s.value = "0";
    if (s.value.indexOf(".") < 0) s.value += ".";
    examUpdateQuestionUI(qid);
  });
})();
