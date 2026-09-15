/* Lightweight structural validation for the Phase 1 formal exam bank. */
(function(){
  if(typeof EXAM_BANKS_1==="undefined")return;

  const errors=[];
  const warnings=[];
  const seen=new Set();
  let total=0;

  function error(topic,id,msg){errors.push(`${topic} / ${id}: ${msg}`);}
  function warn(topic,id,msg){warnings.push(`${topic} / ${id}: ${msg}`);}
  function approxInteger(x){return Math.abs(x-Math.round(x))<1e-9;}

  Object.keys(EXAM_BANKS_1).sort().forEach(topic=>{
    const bank=typeof EXAM_BANKS_1[topic]==="function"?EXAM_BANKS_1[topic]():[];
    if(bank.length<8)warn(topic,"bank",`slechts ${bank.length} vragen; streefwaarde is minstens 8`);
    bank.forEach(q=>{
      total++;
      if(!q||!q.id){error(topic,"?","vraag zonder id");return;}
      if(seen.has(q.id))error(topic,q.id,"dubbel vraag-id");
      seen.add(q.id);
      if(!q.prompt)error(topic,q.id,"prompt ontbreekt");
      if(!q.response||!q.response.type)error(topic,q.id,"response.type ontbreekt");
      if(!q.answer||!q.answer.type)error(topic,q.id,"answer.type ontbreekt");

      const rt=q.response&&q.response.type;
      const at=q.answer&&q.answer.type;
      if(rt!==at&&!(rt==="numberline"&&at==="number"))error(topic,q.id,`response.type ${rt} past niet bij answer.type ${at}`);

      if(rt==="choice"){
        const options=q.response.options||[];
        if(!options.includes(q.answer.value))error(topic,q.id,"juiste keuze staat niet tussen de opties");
      }
      if(rt==="select"){
        const options=(q.response.options||q.data&&q.data.options||[]).map(String);
        const answers=(q.answer.value||[]).map(String);
        answers.forEach(v=>{if(!options.includes(v))error(topic,q.id,`select-antwoord '${v}' staat niet tussen de opties`);});
        if(new Set(answers).size!==answers.length)error(topic,q.id,"select-antwoord bevat duplicaten");
      }
      if(rt==="ordering"){
        const options=(q.response.options||q.data&&q.data.items||[]).map(String).sort();
        const answer=(q.answer.value||[]).map(String).sort();
        if(options.join("\u0001")!==answer.join("\u0001"))error(topic,q.id,"ordering-antwoord is geen permutatie van de opties");
      }
      if(rt==="number"||rt==="numberline"){
        if(!Number.isFinite(Number(q.answer.value)))error(topic,q.id,"numeriek antwoord is niet eindig");
      }
      if(rt==="fraction"){
        const f=q.answer.value||{};
        if(!Number.isFinite(Number(f.numerator))||!Number.isFinite(Number(f.denominator))||Number(f.denominator)===0)error(topic,q.id,"ongeldige breuk in antwoordsleutel");
      }
      if(rt==="numberline"){
        const d=q.data||{};
        const min=Number(d.min),max=Number(d.max),step=Number(d.step||1),value=Number(q.answer.value);
        if(!(min<=value&&value<=max))error(topic,q.id,"doelwaarde ligt buiten de getallenlijn");
        if(!(step>0))error(topic,q.id,"step moet positief zijn");
        else if(!approxInteger((value-min)/step))error(topic,q.id,"doelwaarde is niet bereikbaar met de ingestelde step");
      }
      if(rt==="factorization"){
        const primes=(q.response.primes||[]).map(String);
        Object.keys(q.answer.value||{}).forEach(p=>{
          if(!primes.includes(String(p)))error(topic,q.id,`priemfactor ${p} ontbreekt in de widget`);
          const n=Number(q.answer.value[p]);
          if(!Number.isInteger(n)||n<=0)error(topic,q.id,`ongeldige exponent voor priemfactor ${p}`);
        });
      }
    });
  });

  window.EXAM_VALIDATION_REPORT={total,errors,warnings,ok:errors.length===0};
  if(errors.length)console.error("Phase 1 exam validation errors:",errors);
  if(warnings.length)console.warn("Phase 1 exam validation warnings:",warnings);
})();
