/* Phase 1 exam quality corrections — laden ná exam-bank-fase1.js */
(function(){
  function wrap(topic, transform){
    const base=EXAM_BANKS_1[topic];
    if(typeof base!=="function")return;
    EXAM_BANKS_1[topic]=function(){ return transform(base()); };
  }
  wrap("1.1", questions => questions.map(q =>
    q.id==="F1-1.1-08"
      ? {...q,prompt:"Welk getal hoort bij 6 × 1000 + 0 × 100 + 4 × 10 + 9 × 1?"}
      : q
  ));
  wrap("1.4", questions => {
    const fixed=questions.map(q=>{
      if(q.id==="F1-1.4-07"){
        return {
          ...q,
          data:{...q.data,min:0,max:2,step:0.25,startValue:0},
          response:{...q.response,constraints:{integer:false}},
          answer:{type:"number",value:1.25}
        };
      }
      if(q.id==="F1-1.4-01"||q.id==="F1-1.4-09"){
        return {...q,response:{...q.response,constraints:{requireSimplified:true}}};
      }
      return q;
    });
    fixed.push(exChoice(
      "F1-1.4-10","1.4 Breuken en rationale getallen",
      "Welke breuk is gelijk aan het gemengde getal 2 1/3?",
      ["5/3","7/3","8/3","3/7"],"7/3",2,3
    ));
    return fixed;
  });
  wrap("1.6", questions => questions.concat([
    exNum("F1-1.6-08","1.6 Verhoudingen en evenredigheid","Een kaart heeft schaal 1 : 50 000. Een afstand is 3 cm op de kaart. Hoeveel kilometer is dat in werkelijkheid?",1.5,3,3,{integer:false})
  ]));
  wrap("1.7", questions => questions.concat([
    exChoice("F1-1.7-08","1.7 Delers en deelbaarheid","Welke uitspraak is altijd waar?",["even + even = even","oneven + oneven = oneven","even + oneven = even","een oneven getal is deelbaar door 2"],"even + even = even",2,3),
    exSelect("F1-1.7-09","1.7 Delers en deelbaarheid","Selecteer alle getallen die deelbaar zijn door 6.",["18","24","27","30","42","45"],["18","24","30","42"],2,3)
  ]));
  wrap("1.8", questions => questions.concat([
    exChoice("F1-1.8-07","1.8 Priemgetallen en factorisatie","Welke uitspraak over het getal 1 is juist?",["1 is priem","1 is samengesteld","1 is noch priem noch samengesteld","1 heeft precies twee positieve delers"],"1 is noch priem noch samengesteld",2,2),
    exFactors("F1-1.8-08","1.8 Priemgetallen en factorisatie","Ontbind 210 in priemfactoren.",{2:1,3:1,5:1,7:1},3,3)
  ]));
  wrap("1.9", questions => questions.concat([
    exChoice("F1-1.9-07","1.9 GGD en KGV","Bij het algoritme van Euclides voor GGD(105, 28) geldt eerst 105 = 3 × 28 + 21. Welke stap volgt?",["28 = 1 × 21 + 7","28 = 2 × 21 + 14","21 = 1 × 28 − 7","105 = 5 × 21"],"28 = 1 × 21 + 7",3,3),
    exNum("F1-1.9-08","1.9 GGD en KGV","Voor positieve gehele getallen geldt GGD(a,b) × KGV(a,b) = a × b. Als a × b = 216 en de GGD 6 is, wat is dan het KGV?",36,3,3)
  ]));
  wrap("1.10", questions => questions.concat([
    exNum("F1-1.10-08","1.10 Machten","Bereken 7⁰.",1,2,2),
    exNum("F1-1.10-09","1.10 Machten","Bereken 2³ × 2⁴.",128,3,3),
    exNum("F1-1.10-10","1.10 Machten","Bereken (3²)³.",729,3,3),
    exNum("F1-1.10-11","1.10 Machten","Bereken 2⁵ ÷ 2².",8,3,3)
  ]));
  wrap("1.11", questions => questions.concat([
    exNum("F1-1.11-07","1.11 Wortels","Bereken √(4 × 36).",12,2,3),
    exChoice("F1-1.11-08","1.11 Wortels","Welke uitspraak is fout?",["√25 = 5","√(4 × 9) = √4 × √9","√(9 + 16) = √9 + √16","√49 = 7"],"√(9 + 16) = √9 + √16",3,3),
    exChoice("F1-1.11-09","1.11 Wortels","Welke uitspraak is juist?",["√36 = 18","Worteltrekken is hetzelfde als delen door 2","√36 = 6 omdat 6 × 6 = 36","√25 = −5"],"√36 = 6 omdat 6 × 6 = 36",2,2),
    exNum("F1-1.11-10","1.11 Wortels","Bereken 2³ × √16.",32,3,3)
  ]));
  wrap("1.12", questions => questions.concat([
    exSelect("F1-1.12-07","1.12 Irrationale en reële getallen","Selecteer alle irrationale getallen.",["√2","0,75","π","-4","√9","√5"],["√2","π","√5"],3,3),
    exOrder("F1-1.12-08","1.12 Irrationale en reële getallen","Zet van klein naar groot.",["1,4","√2","1,5","π"],["1,4","√2","1,5","π"],3,3)
  ]));
  wrap("1.13", questions => questions.concat([
    exChoice("F1-1.13-07","1.13 Afronden en wetenschappelijke notatie","Welke wetenschappelijke notatie hoort bij 0,0032?",["3,2 × 10⁻³","3,2 × 10³","0,32 × 10⁻²","32 × 10⁻⁴"],"3,2 × 10⁻³",2,3),
    exNum("F1-1.13-08","1.13 Afronden en wetenschappelijke notatie","Schrijf 4,7 × 10⁻² als decimaal getal.",0.047,3,3,{integer:false})
  ]));
  function setIncorrect(questions, id, msg){
    return questions.map(q => q.id===id ? {...q, feedback:{...q.feedback, incorrect: msg}} : q);
  }
  wrap("1.2", questions => {
    let q = questions;
    q = setIncorrect(q,"F1-1.2-07","Vermenigvuldigen gaat voor optellen: eerst 6 × 2, daarna + 3.");
    q = setIncorrect(q,"F1-1.2-08","Van links naar rechts na × en ÷: 24 ÷ 3 = 8, 8 × 2 = 16, 16 + 5 = 21.");
    q = setIncorrect(q,"F1-1.2-09","De factor 7 wordt over de som verdeeld: dat is de distributieve eigenschap.");
    return q;
  });
  wrap("1.4", questions => {
    let q = questions;
    q = setIncorrect(q,"F1-1.4-03","Maak gelijke noemers: 1/2 = 3/6 en 1/3 = 2/6, dus 5/6.");
    q = setIncorrect(q,"F1-1.4-05","Delen door een breuk is vermenigvuldigen met het omgekeerde: 3/8 × 4/9 = 12/72 = 1/6.");
    return q;
  });
  wrap("1.11", questions => {
    let q = questions;
    q = setIncorrect(q,"F1-1.11-08","√(9+16)=√25=5, maar √9+√16=3+4=7. Een som mag je niet onder het wortelteken splitsen.");
    q = setIncorrect(q,"F1-1.11-03","De vierkantswortel is de niet-negatieve oplossing van x² = 25, dus 5 en niet −5.");
    return q;
  });
  wrap("1.12", questions => {
    let q = questions;
    q = setIncorrect(q,"F1-1.12-01","√2 kan niet als quotiënt van twee gehele getallen worden geschreven; 0,5 = 1/2 en −7 = −7/1 wel.");
    return q;
  });
})();
