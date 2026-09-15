/* Small compatibility layer for exam-widgets.js. */
(function(){
  const baseQuestionHTML=examQuestionHTML;
  examQuestionHTML=function(q,i){
    let html=baseQuestionHTML(q,i);
    const r=q.response||{};
    if(r.type==="number"&&r.constraints&&r.constraints.integer===false){
      const marker=`<button type="button" class="exam-key" data-exam-key="-" data-qid="${examEscape(q.id)}">−</button>`;
      const decimal=`<button type="button" class="exam-key" data-exam-key="decimal" data-qid="${examEscape(q.id)}">,</button>`;
      html=html.replace(marker,decimal+marker);
    }
    return html;
  };
  const baseReadResponse=examReadResponse;
  examReadResponse=function(root,q){
    const type=(q.response||{type:q.type}).type;
    if(type==="numberline"){
      const el=root&&root.querySelector?root.querySelector('[data-exam-numberline]'):null;
      return el?Number(el.value):null;
    }
    return baseReadResponse(root,q);
  };
  document.addEventListener("click",function(e){
    const b=e.target.closest('[data-exam-key="decimal"]');
    if(!b)return;
    const qid=b.dataset.qid,s=EXAM_WIDGET_STATE[qid];
    if(!s)return;
    s.value=(s.value||"").replace(/decimal/g,"").replace(/,/g,".");
    if(!s.value)s.value="0";
    if(!s.value.includes("."))s.value+=".";
    examUpdateQuestionUI(qid);
  });
})();
