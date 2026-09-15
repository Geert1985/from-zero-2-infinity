/* Formal exam hints: pedagogical, question-sensitive, cost 5 inzichtpunten. */
(function(){
  const HINT_COST=5;
  const HINT_USED={};
  const baseQuestionHTML=window.examQuestionHTML;
  const baseRenderExam=window.renderExam;
  let examSubmissionActive=false;

  function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#39;");}

  function specificHint(q){
    const p=String(q.prompt||""),t=String(q.topic||""),type=(q.response||{}).type;
    if(/cijfer|plaatswaarde|getalbegrip/i.test(p+t)) return "Bepaal eerst wat er precies gevraagd wordt: het cijfer zelf, zijn plaatswaarde of het volledige getal. Gebruik de posities eenheden, tientallen, honderdtallen, enzovoort.";
    if(/opvolger/i.test(p)) return "De opvolger is precies 1 groter dan het gegeven getal.";
    if(/klein naar groot|groot naar klein|rangschik/i.test(p)) return "Vergelijk de getallen systematisch. Kijk eerst naar het grootste verschil in plaatswaarde en controleer daarna de volledige volgorde.";
    if(/getallenlijn/i.test(p)||type==="numberline") return "Lees min, max en stapgrootte af. Bepaal vervolgens op welke positie de gevraagde waarde hoort.";
    if(type==="symbol") return "Vergelijk beide waarden rechtstreeks. Denk eraan: verder naar rechts op de getallenlijn betekent groter.";

    if(/bewerkingen|bereken|bewerking/i.test(p)&&/haakjes|eerst/i.test(p)) return "Gebruik de bewerkingsvolgorde: haakjes, machten, vermenigvuldigen/delen en daarna optellen/aftrekken.";
    if(/rest/i.test(p)) return "Bij een deling geldt: deeltal = deler × quotiënt + rest. De rest is altijd kleiner dan de deler.";
    if(/vermenigvuldig/i.test(p)||/×/.test(p)) return "Splits een lastige vermenigvuldiging eventueel op in tientallen en eenheden en controleer het product achteraf.";
    if(/deel|÷/.test(p)) return "Controleer de deling door het quotiënt met de deler te vermenigvuldigen; bij een rest tel je die er opnieuw bij.";

    if(/vereenvoudig|vereenvoudigde vorm/i.test(p)) return "Zoek een gemeenschappelijke deler van teller en noemer en deel beide door dezelfde waarde. Controleer daarna of verder vereenvoudigen nog kan.";
    if(/breuk|noemer|teller/i.test(p)&&/\+|−/.test(p)) return "Maak eerst de noemers gelijk. Bewerk daarna de tellers en vereenvoudig het resultaat.";
    if(/breuk|noemer|teller/i.test(p)&&/×/.test(p)) return "Vermenigvuldig teller met teller en noemer met noemer. Vereenvoudig daarna.";
    if(/breuk|noemer|teller/i.test(p)&&/÷/.test(p)) return "Keer de tweede breuk om en vermenigvuldig vervolgens.";
    if(/noemer/i.test(p)) return "De noemer geeft aan in hoeveel gelijke delen het geheel is verdeeld; de teller geeft aan hoeveel delen je neemt.";
    if(type==="fraction") return "Werk zorgvuldig met teller en noemer. Vereenvoudig de breuk volledig als dat gevraagd wordt.";

    if(/percentage|procent|%/.test(p)) return "Een percentage is een deel per 100. Zet het percentage indien nodig om naar een decimaal door door 100 te delen.";
    if(/prijs|stijg|daal/i.test(p)&&/%/.test(p)) return "Bereken eerst de verandering als percentage van de oorspronkelijke waarde. Tel een stijging erbij op en trek een daling ervan af.";
    if(/afrond/i.test(p)) return "Kijk naar het eerste cijfer rechts van de plaats waarop je afrondt: 0–4 blijft, 5–9 verhoogt het afgeronde cijfer.";
    if(/wetenschappelijke notatie/i.test(p+t)) return "Schrijf het getal als a × 10^n met 1 ≤ a < 10. De exponent is het aantal plaatsen waarmee de komma verschuift.";

    if(/verhouding|evenredig|recept|schaal|personen/i.test(p+t)) return "Zoek eerst de vermenigvuldigingsfactor tussen de bekende waarden. Pas exact dezelfde factor toe op de andere grootheid.";
    if(/recht evenredig/i.test(p)) return "Bij recht evenredigheid blijft de verhouding constant: dezelfde factor werkt op beide grootheden.";

    if(/deler|deelbaar/i.test(p)) return "Een deler deelt het getal zonder rest. Gebruik bij deelbaarheid de passende regel, bijvoorbeeld de cijfersom of het laatste cijfer.";
    if(/priem|factorisatie|priemfactor/i.test(p)||type==="factorization") return "Begin met de kleinste priemgetallen. Deel telkens zolang dat kan en noteer hoeveel keer elke priemfactor voorkomt.";
    if(/GGD/i.test(p)) return "De GGD is de grootste positieve deler die beide getallen gemeen hebben. Bij priemfactorisatie neem je de kleinste exponenten.";
    if(/KGV/i.test(p)) return "Het KGV is het kleinste positieve gemeenschappelijke veelvoud. Bij priemfactorisatie neem je de grootste exponenten.";

    if(/macht|exponent|²|³|⁴/.test(p)) return "Een exponent geeft aan hoe vaak het grondtal als factor voorkomt. Schrijf de macht eventueel eerst als herhaalde vermenigvuldiging.";
    if(/wortel|√/.test(p)) return "Zoek het getal waarvan het kwadraat de waarde onder de wortel is. Zoek bij benadering eerst twee opeenvolgende kwadraten waartussen de waarde ligt.";
    if(/irrationaal/i.test(p)) return "Een rationaal getal kan als breuk van twee gehele getallen worden geschreven. Een eindige of repeterende decimaal is dus rationaal.";
    if(/rationaal/i.test(p)) return "Elk geheel getal is rationaal, want n = n/1. Ook eindige en repeterende decimalen zijn rationaal.";

    if(type==="ordering") return "Vergelijk de opties paarsgewijs en plaats ze één voor één in de gevraagde volgorde. Controleer de volledige reeks nogmaals.";
    if(type==="select") return "Beoordeel elke optie afzonderlijk aan de hand van de eigenschap in de vraag. Selecteer alleen wat zeker voldoet.";
    if(type==="choice") return "Elimineer antwoordmogelijkheden die strijdig zijn met de definitie of rekenregel en controleer daarna de overblijvende opties.";
    return "Bepaal eerst welk wiskundig principe de vraag test. Werk daarna stap voor stap en controleer je antwoord.";
  }

  window.examQuestionHTML=function(q,i){
    const html=baseQuestionHTML(q,i);
    if(!q||!q.answer||!q.response)return html;
    return html.replace('<div class="exam-feedback"></div>','<div class="exam-hint-actions"><button type="button" class="btn exam-hint-btn" data-exam-hint="'+esc(q.id)+'">Hint (5 inzicht)</button><span class="exam-hint-text" data-exam-hint-text="'+esc(q.id)+'"></span></div><div class="exam-feedback"></div>');
  };

  window.renderExam=function(kind,phaseId,mid){
    Object.keys(HINT_USED).forEach(k=>delete HINT_USED[k]);
    return baseRenderExam(kind,phaseId,mid);
  };

  /* A passed milestone exam must never automatically award its lesson-score point.
     Lesson material is collected only through the explicit "Verzamel lesstof" action.
     The capture flag is set before app.js's submit handler runs, so its legacy
     COLLECT_LEERSTOF dispatch can be ignored without affecting explicit collection. */
  if(typeof store!=="undefined"&&store&&typeof store.dispatch==="function"){
    const baseDispatch=store.dispatch.bind(store);
    store.dispatch=function(action){
      if(examSubmissionActive&&action&&action.type==="COLLECT_LEERSTOF")return action;
      return baseDispatch(action);
    };
  }
  document.addEventListener("click",function(e){
    if(e.target.closest("#submit-exam"))examSubmissionActive=true;
  },true);
  document.addEventListener("click",function(){
    if(examSubmissionActive)setTimeout(function(){examSubmissionActive=false;},0);
  });

  const style=document.createElement('style');
  style.textContent='.exam-hint-actions{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px}.exam-hint-btn{font-size:.9rem;padding:7px 11px}.exam-hint-btn:disabled{opacity:.55}.exam-hint-text{font-size:.92rem;line-height:1.45;opacity:.9}';
  document.head.appendChild(style);

  document.addEventListener('click',function(e){
    const btn=e.target.closest('[data-exam-hint]');
    if(!btn)return;
    const qid=btn.getAttribute('data-exam-hint');
    if(HINT_USED[qid])return;
    const text=btn.parentElement.querySelector('[data-exam-hint-text]');
    if(typeof inzichtScore!=='function'||inzichtScore()<HINT_COST){
      if(text)text.textContent='Niet genoeg inzichtpunten.';
      return;
    }
    let q=null;
    if(typeof currentExamQuestions==='function'){
      const phase=typeof parseHash==='function'?(parseHash()[1]||1):1;
      const mid=typeof parseHash==='function'?(parseHash()[3]||''):'';
      q=currentExamQuestions('mile',phase,mid).find(x=>x.id===qid)||currentExamQuestions('phase',phase,'').find(x=>x.id===qid);
    }
    if(!q)return;
    HINT_USED[qid]=true;
    if(typeof store!=='undefined'&&store&&typeof store.dispatch==='function'&&typeof inzichtScore==='function'){
      store.dispatch({type:'INZICHT_ADD',payload:-HINT_COST});
    }else if(typeof dispatch==='function'){
      dispatch({type:'INZICHT_ADD',payload:-HINT_COST});
    }
    if(text)text.textContent=specificHint(q);
    btn.disabled=true;
    btn.textContent='Hint gebruikt';
  });
})();
