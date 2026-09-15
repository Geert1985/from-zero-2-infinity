/* Interactive answer widgets for formal exams. No free-text answers. */
const EXAM_WIDGET_STATE = {};

function examEscape(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function ensureExamWidgetStyles() {
  if (document.getElementById("exam-widget-styles")) return;
  const style = document.createElement("style");
  style.id = "exam-widget-styles";
  style.textContent = `
    .exam-question{margin:0 0 28px;padding:22px;border:1px solid rgba(230,199,122,.22);border-radius:16px;background:rgba(0,0,0,.16)}
    .exam-question.correct{border-color:#5fbf83}.exam-question.incorrect{border-color:#c96b6b}
    .exam-q-title{font-weight:700;font-size:1.08rem;margin-bottom:16px}.exam-topic{opacity:.65;font-size:.82rem;margin-bottom:7px}
    .exam-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.exam-choice-btn,.exam-key,.exam-symbol-btn,.exam-select-btn,.exam-order-item,.exam-order-slot,.exam-factor-btn{border:1px solid rgba(230,199,122,.35);background:rgba(255,255,255,.05);color:inherit;border-radius:10px;padding:10px 14px;cursor:pointer;font:inherit}.exam-choice-btn.selected,.exam-symbol-btn.selected,.exam-select-btn.selected,.exam-order-item.selected{background:rgba(230,199,122,.2);border-color:#e6c77a}.exam-choice-btn:disabled,.exam-symbol-btn:disabled,.exam-select-btn:disabled,.exam-order-item:disabled,.exam-key:disabled,.exam-factor-btn:disabled{opacity:.55;cursor:default}
    .exam-number-display,.exam-frac-part{min-width:150px;min-height:48px;padding:10px 14px;border-radius:10px;background:#111;border:1px solid rgba(230,199,122,.35);font-size:1.35rem;text-align:right}.exam-keypad{display:grid;grid-template-columns:repeat(4,minmax(52px,1fr));gap:7px;max-width:360px;margin-top:10px}.exam-key.wide{grid-column:span 2}.exam-frac-editor{display:flex;align-items:center;gap:12px;max-width:360px}.exam-frac-line{width:150px;border-top:2px solid currentColor}.exam-frac-side{display:flex;flex-direction:column;gap:8px;align-items:center}.exam-frac-active{border-color:#e6c77a;box-shadow:0 0 0 2px rgba(230,199,122,.12)}
    .exam-numberline{max-width:720px}.exam-numberline-track{position:relative;height:18px;margin:24px 10px 8px;background:rgba(255,255,255,.15);border-radius:10px}.exam-numberline-ticks{display:flex;justify-content:space-between;font-size:.78rem;opacity:.75}.exam-range{width:100%;accent-color:#e6c77a}.exam-nl-value{text-align:center;font-size:1.35rem;font-weight:700;margin-top:8px}
    .exam-order{display:grid;grid-template-columns:1fr;gap:8px;max-width:620px}.exam-order-slots{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}.exam-order-slot{min-width:70px;min-height:42px}.exam-order-slot.filled{border-color:#e6c77a}.exam-order-items{display:flex;flex-wrap:wrap;gap:8px}.exam-order-item.used{opacity:.35}
    .exam-factor-row{display:flex;align-items:center;gap:8px;margin:8px 0}.exam-factor-count{min-width:36px;text-align:center;font-weight:700}.exam-feedback{margin-top:12px;font-weight:700}.exam-feedback.good{color:#76d39b}.exam-feedback.bad{color:#ef9292}
    @media(max-width:650px){.exam-question{padding:16px}.exam-keypad{max-width:100%}.exam-number-display,.exam-frac-part{min-width:120px}}
  `;
  document.head.appendChild(style);
}

function examResetWidgetState(questions) {
  Object.keys(EXAM_WIDGET_STATE).forEach(k => delete EXAM_WIDGET_STATE[k]);
  (questions || []).forEach(q => {
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
  let body = "";
  if (type === "number") {
    body = `<div class="exam-number-display" data-number-display="${examEscape(q.id)}">&nbsp;</div><div class="exam-keypad">${[1,2,3,4,5,6,7,8,9,0].map(n => `<button type="button" class="exam-key" data-exam-key="${n}" data-qid="${examEscape(q.id)}">${n}</button>`).join("")}<button type="button" class="exam-key" data-exam-key="-" data-qid="${examEscape(q.id)}">−</button><button type="button" class="exam-key" data-exam-key="back" data-qid="${examEscape(q.id)}">⌫</button><button type="button" class="exam-key wide" data-exam-key="clear" data-qid="${examEscape(q.id)}">Wissen</button></div>`;
  } else if (type === "choice") {
    body = `<div class="exam-actions">${(r.options || q.choices || []).map((o,idx) => `<button type="button" class="exam-choice-btn" data-exam-choice="${idx}" data-qid="${examEscape(q.id)}">${examEscape(o)}</button>`).join("")}</div>`;
  } else if (type === "symbol") {
    const symbols = r.symbols || ["<", "=", ">"];
    body = `<div class="exam-actions">${symbols.map((o,idx) => `<button type="button" class="exam-symbol-btn" data-exam-symbol="${idx}" data-qid="${examEscape(q.id)}">${examEscape(o)}</button>`).join("")}</div>`;
  } else if (type === "fraction") {
    body = `<div class="exam-frac-editor"><div class="exam-frac-side"><div class="exam-frac-part exam-frac-active" data-frac-part="numerator" data-qid="${examEscape(q.id)}">&nbsp;</div><div class="exam-frac-line"></div><div class="exam-frac-part" data-frac-part="denominator" data-qid="${examEscape(q.id)}">&nbsp;</div></div></div><div class="exam-keypad">${[1,2,3,4,5,6,7,8,9,0].map(n => `<button type="button" class="exam-key" data-exam-frac-key="${n}" data-qid="${examEscape(q.id)}">${n}</button>`).join("")}<button type="button" class="exam-key" data-exam-frac-key="back" data-qid="${examEscape(q.id)}">⌫</button><button type="button" class="exam-key wide" data-exam-frac-key="clear" data-qid="${examEscape(q.id)}">Wissen</button></div><p class="exam-hint">Klik boven of onder de breukstreep om dat deel te kiezen.</p>`;
  } else if (type === "numberline") {
    const d = q.data || {}; const min = Number.isFinite(d.min) ? d.min : -10; const max = Number.isFinite(d.max) ? d.max : 10; const step = d.step || 1;
    body = `<div class="exam-numberline"><input class="exam-range" type="range" min="${min}" max="${max}" step="${step}" value="${d.startValue != null ? d.startValue : min}" data-exam-numberline data-qid="${examEscape(q.id)}"><div class="exam-numberline-ticks"><span>${min}</span><span>0</span><span>${max}</span></div><div class="exam-nl-value" data-nl-value="${examEscape(q.id)}">${d.startValue != null ? d.startValue : min}</div></div>`;
  } else if (type === "ordering") {
    const options = (r.options || q.data?.items || []).map(String);
    body = `<div class="exam-order"><div class="exam-order-slots" data-order-slots="${examEscape(q.id)}">${options.map((_,idx) => `<button type="button" class="exam-order-slot" data-order-slot="${idx}" data-qid="${examEscape(q.id)}">${idx+1}</button>`).join("")}</div><div class="exam-order-items">${options.map((o,idx) => `<button type="button" class="exam-order-item" data-order-item="${idx}" data-qid="${examEscape(q.id)}">${examEscape(o)}</button>`).join("")}</div><p class="exam-hint">Klik de getallen in de gewenste volgorde.</p></div>`;
  } else if (type === "select") {
    body = `<div class="exam-actions">${(r.options || q.data?.options || []).map((o,idx) => `<button type="button" class="exam-select-btn" data-exam-select="${idx}" data-qid="${examEscape(q.id)}">${examEscape(o)}</button>`).join("")}</div>`;
  } else if (type === "factorization") {
    const primes = r.primes || [2,3,5,7,11,13];
    body = primes.map(p => `<div class="exam-factor-row"><strong>${p}</strong><button type="button" class="exam-factor-btn" data-factor="${p}" data-delta="-1" data-qid="${examEscape(q.id)}">−</button><span class="exam-factor-count" data-factor-count="${p}" data-qid="${examEscape(q.id)}">0</span><button type="button" class="exam-factor-btn" data-factor="${p}" data-delta="1" data-qid="${examEscape(q.id)}">+</button></div>`).join("");
  } else {
    body = `<div class="exam-number-display">?</div>`;
  }
  return `<div class="exam-question" data-qid="${examEscape(q.id)}"><div class="exam-topic">${examEscape(q.topic || "")}</div><div class="exam-q-title">${i + 1}. ${q.prompt || ""}</div>${body}<div class="exam-feedback"></div></div>`;
}

function examUpdateQuestionUI(qid) {
  const root = document.querySelector(`.exam-question[data-qid="${CSS.escape(qid)}"]`); if (!root) return;
  const s = EXAM_WIDGET_STATE[qid] || {};
  const display = root.querySelector("[data-number-display]"); if (display) display.textContent = s.value || "0";
  root.querySelectorAll(".exam-choice-btn,.exam-symbol-btn").forEach(b => b.classList.remove("selected"));
  if (s.choice != null) root.querySelector(`.exam-choice-btn[data-exam-choice="${s.choice}"]`)?.classList.add("selected");
  if (s.symbol != null) root.querySelector(`.exam-symbol-btn[data-exam-symbol="${s.symbol}"]`)?.classList.add("selected");
  root.querySelectorAll("[data-frac-part]").forEach(el => { const part = el.dataset.fracPart; el.textContent = s[part] || "0"; el.classList.toggle("exam-frac-active", s.part === part); });
  const nl = root.querySelector("[data-exam-numberline]"); if (nl) { nl.value = s.value; const out = root.querySelector("[data-nl-value]"); if (out) out.textContent = s.value; }
  root.querySelectorAll(".exam-select-btn").forEach(b => b.classList.toggle("selected", (s.selected || []).includes(Number(b.dataset.examSelect))));
  root.querySelectorAll(".exam-order-item").forEach(b => b.classList.toggle("used", (s.order || []).includes(Number(b.dataset.orderItem))));
  root.querySelectorAll(".exam-order-slot").forEach((b,i) => { const idx = (s.order || [])[i]; const item = idx == null ? null : root.querySelector(`.exam-order-item[data-order-item="${idx}"]`); b.textContent = item ? item.textContent : String(i+1); b.classList.toggle("filled", !!item); });
  root.querySelectorAll("[data-factor-count]").forEach(el => el.textContent = String((s.factors || {})[el.dataset.factorCount] || 0));
}

function examReadResponse(root, q) {
  const type = (q.response || { type: q.type }).type;
  const s = EXAM_WIDGET_STATE[q.id] || {};
  if (type === "number" || type === "numberline") return s.value === "" ? null : Number(s.value);
  if (type === "choice") return s.choice == null ? null : (q.response.options || q.choices || [])[s.choice];
  if (type === "symbol") return s.symbol == null ? null : (q.response.symbols || ["<","=",">"])[s.symbol];
  if (type === "fraction") return { numerator: Number(s.numerator || 0), denominator: Number(s.denominator || 0) };
  if (type === "ordering") return (s.order || []).map(i => String((q.response.options || q.data?.items || [])[i]));
  if (type === "select") return (s.selected || []).map(i => String((q.response.options || q.data?.options || [])[i]));
  if (type === "factorization") return { ...(s.factors || {}) };
  return null;
}

function examBindWidgets() {
  ensureExamWidgetStyles();
  document.addEventListener("click", function(e) {
    const qidEl = e.target.closest("[data-qid]"); if (!qidEl) return;
    const qid = qidEl.dataset.qid; const s = EXAM_WIDGET_STATE[qid]; if (!s) return;
    const root = qidEl.closest(".exam-question");
    const key = e.target.closest("[data-exam-key]");
    if (key) { const v = key.dataset.examKey; if (v === "clear") s.value = ""; else if (v === "back") s.value = s.value.slice(0,-1); else if (v === "-" && !s.value) s.value = "-"; else if (v !== "-" || !s.value.includes("-")) s.value += v; examUpdateQuestionUI(qid); return; }
    const choice = e.target.closest("[data-exam-choice]"); if (choice) { s.choice = Number(choice.dataset.examChoice); examUpdateQuestionUI(qid); return; }
    const sym = e.target.closest("[data-exam-symbol]"); if (sym) { s.symbol = Number(sym.dataset.examSymbol); examUpdateQuestionUI(qid); return; }
    const fracPart = e.target.closest("[data-frac-part]"); if (fracPart) { s.part = fracPart.dataset.fracPart; examUpdateQuestionUI(qid); return; }
    const fracKey = e.target.closest("[data-exam-frac-key]"); if (fracKey) { const v = fracKey.dataset.examFracKey; const p=s.part||"numerator"; if(v==="clear")s[p]="";else if(v==="back")s[p]=s[p].slice(0,-1);else s[p]+=v; examUpdateQuestionUI(qid); return; }
    const sel = e.target.closest("[data-exam-select]"); if (sel) { const idx=Number(sel.dataset.examSelect); const a=s.selected||[]; s.selected=a.includes(idx)?a.filter(x=>x!==idx):a.concat(idx); examUpdateQuestionUI(qid); return; }
    const oi = e.target.closest("[data-order-item]"); if (oi) { const idx=Number(oi.dataset.orderItem); const a=s.order||[]; if(a.includes(idx)) s.order=a.filter(x=>x!==idx); else if(a.length < (qRootOptionCount(root))) s.order=a.concat(idx); examUpdateQuestionUI(qid); return; }
    const os = e.target.closest("[data-order-slot]"); if (os) { const pos=Number(os.dataset.orderSlot); if(s.order && s.order[pos]!=null)s.order=s.order.filter((_,i)=>i!==pos); examUpdateQuestionUI(qid); return; }
    const factor = e.target.closest("[data-factor]"); if (factor) { const p=factor.dataset.factor; const n=(s.factors[p]||0)+Number(factor.dataset.delta); if(n<=0)delete s.factors[p];else s.factors[p]=n; examUpdateQuestionUI(qid); return; }
  });
  document.addEventListener("input", function(e){ const el=e.target.closest("[data-exam-numberline]"); if(!el)return; const qid=el.dataset.qid; if(EXAM_WIDGET_STATE[qid]){EXAM_WIDGET_STATE[qid].value=el.value;examUpdateQuestionUI(qid);} });
}
function qRootOptionCount(root){ return root ? root.querySelectorAll(".exam-order-slot").length : 0; }

if (typeof document !== "undefined") examBindWidgets();
