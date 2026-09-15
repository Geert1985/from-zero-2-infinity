/* Small compatibility layer for exam-widgets.js. */
(function(){
  const baseQuestionHTML=examQuestionHTML;
  examQuestionHTML=function(q,i){
    /* 1.4 includes a fractional point (5/4 = 1.25), so the numberline
       must allow quarter-unit positions instead of integer-only steps. */
    if(q.id==="F1-1.4-07"){
      q.data=Object.assign({},q.data,{min:0,max:2,step:0.25,startValue:0});
      q.response=Object.assign({},q.response,{constraints:{integer:false}});
    }
    let html=baseQuestionHTML(q,i);

    /* The generic numberline has three labels. For ranges where the
       midpoint is not zero, show the actual midpoint instead of 0. */
    if(q.response && q.response.type==="numberline"){
      const d=q.data||{};
      const min=Number(d.min), max=Number(d.max);
      if(Number.isFinite(min)&&Number.isFinite(max)){
        const mid=(min+max)/2;
        html=html.replace(
          '<div class="exam-numberline-ticks"><span>'+min+'</span><span>0</span><span>'+max+'</span></div>',
          '<div class="exam-numberline-ticks"><span>'+min+'</span><span>'+mid+'</span><span>'+max+'</span></div>'
        );
      }
    }

    /* Add a decimal key to decimal number questions. */
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
