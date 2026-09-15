/* Phase 1 exam quality layer + lightweight structural validation. */
(function(){
  function wrap(topic, extra){
    if(typeof EXAM_BANKS_1 === "undefined" || typeof EXAM_BANKS_1[topic] !== "function") return;
    const base=EXAM_BANKS_1[topic];
    EXAM_BANKS_1[topic]=function(){ return base().concat(extra()); };
  }
  wrap("1.1",function(){const n=examRnd(300,900);return [
    exChoice("F1Q-1.1-01","1.1 Cijfers en Getallen","Een leerling zegt: 'In 4 082 is de 8 het cijfer van de tientallen, dus de plaatswaarde is 8.' Wat is correct?",["De plaatswaarde is 8","De plaatswaarde is 80","De plaatswaarde is 800","De 8 heeft geen plaatswaarde"],"De plaatswaarde is 80",3,3),
    exNum("F1Q-1.1-02","1.1 Cijfers en Getallen","Welk getal krijg je als je het honderdtal van "+n+" met 3 verhoogt, terwijl alle andere cijfers gelijk blijven?",n+300,3,3),
    exOrder("F1Q-1.1-03","1.1 Cijfers en Getallen","Zet van klein naar groot.",["9","10","99","100","101"],["9","10","99","100","101"],3,3)
  ];});
  wrap("1.2",function(){return [
    exNum("F1Q-1.2-01","1.2 De vier hoofdbewerkingen","Bereken zonder rekenmachine: 99 × 7.",693,3,3),
    exChoice("F1Q-1.2-02","1.2 De vier hoofdbewerkingen","Welke berekening is gelijk aan 48 × 19?",["48 × 20 + 48","48 × 20 − 48","50 × 20 − 48","48 × 10 − 48 × 9"],"48 × 20 − 48",3,3),
    exNum("F1Q-1.2-03","1.2 De vier hoofdbewerkingen","Een getal wordt eerst met 4 vermenigvuldigd en daarna wordt 7 afgetrokken. Het resultaat is 29. Welk getal was het oorspronkelijke getal?",9,3,3)
  ];});
  wrap("1.3",function(){return [
    exChoice("F1Q-1.3-01","1.3 Negatieve en gehele getallen","Welke berekening geeft de grootste uitkomst?",["−8 + 3","−8 − 3","3 − (−8)","−3 − 8"],"3 − (−8)",3,3),
    exFraction("F1Q-1.3-02","1.3 Negatieve en gehele getallen","Bereken en vereenvoudig: 3/4 − 5/8.",1,8,3,3),
    exChoice("F1Q-1.3-03","1.3 Negatieve en gehele getallen","Een temperatuur stijgt van −4 °C naar 7 °C. Met hoeveel graden stijgt de temperatuur?",["3 °C","7 °C","11 °C","−11 °C"],"11 °C",3,3)
  ];});
  wrap("1.4",function(){return [
    exFraction("F1Q-1.4-11","1.4 Breuken en rationale getallen","Bereken en geef vereenvoudigd: 5/6 + 7/12.",17,12,3,3),
    exFraction("F1Q-1.4-12","1.4 Breuken en rationale getallen","Bereken en vereenvoudig: 4/9 × 3/8.",1,6,3,3),
    exChoice("F1Q-1.4-13","1.4 Breuken en rationale getallen","Welke breuk is het grootst?",["5/8","2/3","7/12","3/5"],"2/3",3,3),
    exChoice("F1Q-1.4-14","1.4 Breuken en rationale getallen","Een leerling beweert: 2/3 + 1/4 = 3/7. Waarom is dat fout?",["Tellers mag je nooit optellen","De noemers moeten eerst gelijknamig worden gemaakt","Breuken kunnen niet worden opgeteld","De grootste noemer moet worden gekozen"],"De noemers moeten eerst gelijknamig worden gemaakt",3,3)
  ];});
  wrap("1.5",function(){return [
    exFraction("F1Q-1.5-01","1.5 Decimalen en percentages","Schrijf 0,72 als vereenvoudigde breuk.",18,25,3,3),
    exNum("F1Q-1.5-02","1.5 Decimalen en percentages","Een bedrag van €120 wordt eerst met 15% verhoogd. Wat is het nieuwe bedrag?",138,3,3),
    exNum("F1Q-1.5-03","1.5 Decimalen en percentages","Een bedrag van €200 wordt met 20% verlaagd en daarna nog eens met 10%. Wat is het eindbedrag?",144,3,3),
    exChoice("F1Q-1.5-04","1.5 Decimalen en percentages","Welke uitspraak is juist?",["0,4 = 4%","0,04 = 4%","4% = 0,4","40% = 0,04"],"0,04 = 4%",3,3)
  ];});
  wrap("1.6",function(){return [
    exNum("F1Q-1.6-01","1.6 Verhoudingen en evenredigheid","Een verhouding is 2 : 3. Als het eerste deel 18 is, hoe groot is het tweede deel?",27,3,3),
    exNum("F1Q-1.6-02","1.6 Verhoudingen en evenredigheid","Een kaart gebruikt schaal 1 : 25 000. Een afstand van 4 cm op de kaart komt overeen met hoeveel kilometer in werkelijkheid?",1,3,3,{integer:false}),
    exChoice("F1Q-1.6-03","1.6 Verhoudingen en evenredigheid","Een leerling verdubbelt alle ingrediënten van een recept behalve het aantal personen. Wat gaat er mis?",["Niets, een recept blijft altijd evenredig","De verhouding tussen ingrediënten en personen verandert","Alleen het gewicht verandert, niet de verhouding","De prijs verandert maar de hoeveelheden niet"],"De verhouding tussen ingrediënten en personen verandert",3,3)
  ];});
  wrap("1.7",function(){return [
    exSelect("F1Q-1.7-01","1.7 Delers en deelbaarheid","Selecteer alle getallen die deelbaar zijn door 3 én door 4.",["12","18","24","30","36","42"],["12","24","36"],3,3),
    exNum("F1Q-1.7-02","1.7 Delers en deelbaarheid","Wat is de grootste deler van 84 die kleiner is dan 20?",14,3,3),
    exChoice("F1Q-1.7-03","1.7 Delers en deelbaarheid","Een getal is deelbaar door 2 en door 3. Wat weet je zeker?",["Het is deelbaar door 5","Het is deelbaar door 6","Het is priem","Het is oneven"],"Het is deelbaar door 6",3,3)
  ];});
  wrap("1.8",function(){return [
    exFactors("F1Q-1.8-01","1.8 Priemgetallen en factorisatie","Ontbind 360 in priemfactoren.",{2:3,3:2,5:1},3,3),
    exChoice("F1Q-1.8-02","1.8 Priemgetallen en factorisatie","Welke uitspraak volgt uit de hoofdstelling van de rekenkunde?",["Elk getal heeft precies twee delers","Elke factorisatie van een getal is uniek als je alleen priemfactoren gebruikt","Elk samengesteld getal heeft maar één deler","Elk priemgetal is even"],"Elke factorisatie van een getal is uniek als je alleen priemfactoren gebruikt",3,3),
    exNum("F1Q-1.8-03","1.8 Priemgetallen en factorisatie","Hoeveel priemfactoren telt 72 wanneer je herhalingen meetelt?",5,3,3)
  ];});
  wrap("1.9",function(){return [
    exNum("F1Q-1.9-01","1.9 GGD en KGV","Bepaal de GGD van 84 en 126.",42,3,3),
    exNum("F1Q-1.9-02","1.9 GGD en KGV","Bepaal het KGV van 18 en 30.",90,3,3),
    exChoice("F1Q-1.9-03","1.9 GGD en KGV","Twee lampen knipperen elke 6 en 8 seconden. Na hoeveel seconden knipperen ze opnieuw tegelijk?",["2","12","24","48"],"24",3,3),
    exChoice("F1Q-1.9-04","1.9 GGD en KGV","Je wilt 48 rode en 60 blauwe knikkers verdelen in zo groot mogelijke identieke zakjes zonder rest. Welke grootheid heb je nodig?",["KGV","GGD","Priemgetal","Cijfersom"],"GGD",3,3)
  ];});
  wrap("1.10",function(){return [
    exNum("F1Q-1.10-08","1.10 Machten","Bereken: 2⁵ × 2³.",256,3,3),
    exNum("F1Q-1.10-09","1.10 Machten","Bereken: (2³)².",64,3,3),
    exChoice("F1Q-1.10-10","1.10 Machten","Welke uitspraak is gelijkwaardig aan 3² × 3⁴?",["3⁶","3⁸","6⁶","9⁴"],"3⁶",3,3),
    exChoice("F1Q-1.10-11","1.10 Machten","Welke uitspraak is fout?",["5² = 25","5³ = 125","5⁰ = 0","5¹ = 5"],"5⁰ = 0",3,3)
  ];});
  wrap("1.11",function(){return [
    exNum("F1Q-1.11-07","1.11 Wortels","Bereken: √(25 × 16).",20,3,3),
    exChoice("F1Q-1.11-08","1.11 Wortels","Welke uitspraak is juist?",["√(9+16)=√9+√16","√(9×16)=√9×√16","√25=±5","√49=−7"],"√(9×16)=√9×√16",3,3),
    exNum("F1Q-1.11-09","1.11 Wortels","Bereken 2³ × √16.",32,3,3),
    exChoice("F1Q-1.11-10","1.11 Wortels","Welke berekening gebruikt correct de wortelregel √(a×b)=√a×√b?",["√(36×25)=6×5","√(36+25)=6+5","√(36×25)=36×25","√(36×25)=6+5"],"√(36×25)=6×5",3,3)
  ];});
  wrap("1.12",function(){return [
    exChoice("F1Q-1.12-07","1.12 Irrationale en reële getallen","Welke uitspraak is altijd waar?",["Elk reëel getal is rationaal","Elk rationaal getal is reëel","Elk irrationaal getal is geheel","Geen enkel natuurlijk getal is reëel"],"Elk rationaal getal is reëel",3,3),
    exSymbol("F1Q-1.12-08","1.12 Irrationale en reële getallen","Vergelijk: √2 □ 1,41.",">",3,3),
    exOrder("F1Q-1.12-09","1.12 Irrationale en reële getallen","Zet van klein naar groot.",["1,4","√2","1,5","π"],["1,4","√2","1,5","π"],3,3),
    exSelect("F1Q-1.12-10","1.12 Irrationale en reële getallen","Selecteer alle rationale getallen.",["0,25","√2","−7","π","3/8","√9"],["0,25","−7","3/8","√9"],3,3)
  ];});
  wrap("1.13",function(){return [
    exChoice("F1Q-1.13-07","1.13 Afronden en wetenschappelijke notatie","Welke wetenschappelijke notatie is correct voor 0,00056?",["5,6 × 10⁻⁴","56 × 10⁻⁵","0,56 × 10⁻³","5,6 × 10⁴"],"5,6 × 10⁻⁴",3,3),
    exNum("F1Q-1.13-08","1.13 Afronden en wetenschappelijke notatie","Rond 48 650 af op duizenden.",49000,3,3),
    exChoice("F1Q-1.13-09","1.13 Afronden en wetenschappelijke notatie","Welke waarde is het grootst?",["4,9 × 10³","5,1 × 10³","49 × 10²","4,09 × 10³"],"5,1 × 10³",3,3),
    exNum("F1Q-1.13-10","1.13 Afronden en wetenschappelijke notatie","Schrijf 7,2 × 10⁵ als gewoon getal.",720000,3,3)
  ];});
})();

(function(){
  if(typeof EXAM_BANKS_1==="undefined")return;
  const errors=[];const warnings=[];const seen=new Set();let total=0;
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
      const rt=q.response&&q.response.type;const at=q.answer&&q.answer.type;
      if(rt!==at&&!(rt==="numberline"&&at==="number"))error(topic,q.id,`response.type ${rt} past niet bij answer.type ${at}`);
      if(rt==="choice"){const options=q.response.options||[];if(!options.includes(q.answer.value))error(topic,q.id,"juiste keuze staat niet tussen de opties");}
      if(rt==="select"){const options=(q.response.options||q.data&&q.data.options||[]).map(String);const answers=(q.answer.value||[]).map(String);answers.forEach(v=>{if(!options.includes(v))error(topic,q.id,`select-antwoord '${v}' staat niet tussen de opties`);});if(new Set(answers).size!==answers.length)error(topic,q.id,"select-antwoord bevat duplicaten");}
      if(rt==="ordering"){const options=(q.response.options||q.data&&q.data.items||[]).map(String).sort();const answer=(q.answer.value||[]).map(String).sort();if(options.join("\u0001")!==answer.join("\u0001"))error(topic,q.id,"ordering-antwoord is geen permutatie van de opties");}
      if(rt==="number"||rt==="numberline"){if(!Number.isFinite(Number(q.answer.value)))error(topic,q.id,"numeriek antwoord is niet eindig");}
      if(rt==="fraction"){const f=q.answer.value||{};if(!Number.isFinite(Number(f.numerator))||!Number.isFinite(Number(f.denominator))||Number(f.denominator)===0)error(topic,q.id,"ongeldige breuk in antwoordsleutel");}
      if(rt==="numberline"){const d=q.data||{};const min=Number(d.min),max=Number(d.max),step=Number(d.step||1),value=Number(q.answer.value);if(!(min<=value&&value<=max))error(topic,q.id,"doelwaarde ligt buiten de getallenlijn");if(!(step>0))error(topic,q.id,"step moet positief zijn");else if(!approxInteger((value-min)/step))error(topic,q.id,"doelwaarde is niet bereikbaar met de ingestelde step");}
      if(rt==="factorization"){const primes=(q.response.primes||[]).map(String);Object.keys(q.answer.value||{}).forEach(p=>{if(!primes.includes(String(p)))error(topic,q.id,`priemfactor ${p} ontbreekt in de widget`);const n=Number(q.answer.value[p]);if(!Number.isInteger(n)||n<=0)error(topic,q.id,`ongeldige exponent voor priemfactor ${p}`);});}
    });
  });
  window.EXAM_VALIDATION_REPORT={total,errors,warnings,ok:errors.length===0};
  if(errors.length)console.error("Phase 1 exam validation errors:",errors);
  if(warnings.length)console.warn("Phase 1 exam validation warnings:",warnings);
})();
