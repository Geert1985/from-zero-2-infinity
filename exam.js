/* General formal exam engine. Content lives in exam-fase*.js; UI lives in exam-widgets.js. */
const EXAM_SESSION = {};
const MILESTONE_EXAM_SIZE = 12;
const PHASE_EXAM_SIZE = 20;

function examSessionKey(kind,phaseId,mid){return kind+":"+phaseId+":"+(mid||"");}
function examInstantiate(bank){const raw=typeof bank==="function"?bank():bank||[];return raw.map(q=>JSON.parse(JSON.stringify(q)));}
function examBankFor(kind,phaseId,mid){
  if(Number(phaseId)===1){
    if(kind==="phase")return typeof PHASE_EXAM_BANK_1==="function"?PHASE_EXAM_BANK_1():[];
    if(typeof EXAM_BANKS_1!=="undefined"&&EXAM_BANKS_1[mid])return EXAM_BANKS_1[mid]();
  }
  if(kind==="phase"&&typeof PHASE_EXAMS!=="undefined")return PHASE_EXAMS[Number(phaseId)]||[];
  const m=typeof getMilestone==="function"?getMilestone(mid):null;
  return m?(m.exam||[]):[];
}
function startExamSession(kind,phaseId,mid){
  const key=examSessionKey(kind,phaseId,mid);
  if(EXAM_SESSION[key])return EXAM_SESSION[key];
  let questions=examInstantiate(examBankFor(kind,phaseId,mid));
  if(kind==="phase")questions=questions.slice(0,PHASE_EXAM_SIZE);
  else questions=questions.slice(0,MILESTONE_EXAM_SIZE);
  EXAM_SESSION[key]=questions;
  return questions;
}
function currentExamQuestions(kind,phaseId,mid){return EXAM_SESSION[examSessionKey(kind,phaseId,mid)]||startExamSession(kind,phaseId,mid);}

function examFractionEqual(a,b){
  if(!a||!b||!Number.isFinite(a.numerator)||!Number.isFinite(a.denominator)||!Number.isFinite(b.numerator)||!Number.isFinite(b.denominator)||a.denominator===0||b.denominator===0)return false;
  return a.numerator*b.denominator===b.numerator*a.denominator;
}
function examArrayEqual(a,b){return Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&a.every((v,i)=>String(v)===String(b[i]));}
function examSetEqual(a,b){return Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&a.map(String).sort().join("\u0001")===b.map(String).sort().join("\u0001");}
function examFactorsEqual(a,b){
  const ka=Object.keys(a||{}).filter(k=>Number(a[k])>0).sort((x,y)=>Number(x)-Number(y));
  const kb=Object.keys(b||{}).filter(k=>Number(b[k])>0).sort((x,y)=>Number(x)-Number(y));
  return ka.length===kb.length&&ka.every((k,i)=>k===kb[i]&&Number(a[k])===Number(b[k]));
}
function examSameAnswer(given,q){
  if(given==null)return false;
  const a=q.answer||{};
  if(a.type==="number"){
    const g=Number(given), target=Number(a.value);
    if(!Number.isFinite(g)||!Number.isFinite(target))return false;
    const c=(q.response&&q.response.constraints)||{};
    if(c.integer&&!Number.isInteger(g))return false;
    const tol=c.tolerance!=null?Number(c.tolerance):1e-9;
    return Math.abs(g-target)<=tol*Math.max(1,Math.abs(target));
  }
  if(a.type==="fraction")return examFractionEqual(given,a.value);
  if(a.type==="choice"||a.type==="symbol")return String(given)===String(a.value);
  if(a.type==="ordering")return examArrayEqual(given,a.value);
  if(a.type==="select")return examSetEqual(given,a.value);
  if(a.type==="factorization")return examFactorsEqual(given,a.value);
  return false;
}
function examGradeList(questions,root){
  let correct=0;
  questions.forEach(q=>{
    const given=typeof examReadResponse==="function"?examReadResponse(root,q):null;
    const ok=examSameAnswer(given,q); if(ok)correct++;
    const box=root&&root.querySelector?root.querySelector(`.exam-question[data-qid="${CSS.escape(q.id)}"] .exam-feedback`):null;
    if(box){box.textContent=ok?(q.feedback&&q.feedback.correct||"Juist!"):(q.feedback&&q.feedback.incorrect||"Niet juist.");box.className="exam-feedback "+(ok?"good":"bad");}
    const card=root&&root.querySelector?root.querySelector(`.exam-question[data-qid="${CSS.escape(q.id)}"]`):null;
    if(card)card.classList.toggle("correct",ok),card.classList.toggle("incorrect",!ok);
  });
  return {correct,total:questions.length,ratio:questions.length?correct/questions.length:0};
}

function PHASE_EXAM_BANK_1(){
  const out=[]; const topics=Object.keys(EXAM_BANKS_1||{});
  topics.forEach(t=>{const b=EXAM_BANKS_1[t]();if(b[0])out.push(b[0]);});
  ["1.2","1.3","1.4","1.5","1.6","1.7","1.8"].forEach(t=>{const b=EXAM_BANKS_1[t]();if(b[1])out.push(b[1]);});
  return out.slice(0,PHASE_EXAM_SIZE);
}
