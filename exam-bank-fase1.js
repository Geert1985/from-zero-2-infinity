/* Formal exam content — Phase 1 topics 1.1–1.7. */
function examRnd(min,max){return min+Math.floor(Math.random()*(max-min+1));}
function examShuffle(a){const x=a.slice();for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
function exNum(id,topic,prompt,value,difficulty=1,cognitiveLevel=2,constraints={integer:true}){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"number",prompt,data:{},response:{type:"number",constraints},answer:{type:"number",value},feedback:{correct:"Juist!",incorrect:"Controleer je tussenstappen en de plaats van de bewerking."}};}
function exChoice(id,topic,prompt,options,correct,difficulty=1,cognitiveLevel=1){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"choice",prompt,data:{},response:{type:"choice",options},answer:{type:"choice",value:correct},feedback:{correct:"Juist!",incorrect:"Kijk opnieuw naar de eigenschap of redenering."}};}
function exSymbol(id,topic,prompt,correct,difficulty=1,cognitiveLevel=2){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"symbol",prompt,data:{},response:{type:"symbol",symbols:["<","=",">"]},answer:{type:"symbol",value:correct},feedback:{correct:"Juist!",incorrect:"Vergelijk de twee waarden opnieuw."}};}
function exFraction(id,topic,prompt,num,den,difficulty=2,cognitiveLevel=2){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"fraction",prompt,data:{},response:{type:"fraction"},answer:{type:"fraction",value:{numerator:num,denominator:den}},feedback:{correct:"Juist!",incorrect:"Controleer teller, noemer en vereenvoudiging."}};}
function exLine(id,topic,prompt,value,min,max,step=1,difficulty=2,cognitiveLevel=2){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"numberline",prompt,data:{min,max,step,startValue:min},response:{type:"numberline",constraints:{integer:step===1}},answer:{type:"number",value},feedback:{correct:"Juist!",incorrect:"Kijk goed naar de positie op de getallenlijn."}};}
function exOrder(id,topic,prompt,items,answer,difficulty=2,cognitiveLevel=2){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"ordering",prompt,data:{items},response:{type:"ordering",options:items},answer:{type:"ordering",value:answer},feedback:{correct:"Juist!",incorrect:"Vergelijk de waarden één voor één."}};}
function exSelect(id,topic,prompt,options,answer,difficulty=2,cognitiveLevel=2){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"select",prompt,data:{},response:{type:"select",options},answer:{type:"select",value:answer},feedback:{correct:"Juist!",incorrect:"Controleer alle opties opnieuw."}};}

const EXAM_BANKS_1={
"1.1":()=>{const n=examRnd(100,9999);return[
exChoice("F1-1.1-01","1.1 Cijfers en Getallen","Wat is een cijfer?",["Een teken waarmee we getallen schrijven","Een hoeveelheid","Een getallenlijn","Een bewerking"],"Een teken waarmee we getallen schrijven"),
exNum("F1-1.1-02","1.1 Cijfers en Getallen","Wat is de opvolger van "+n+"?",n+1),
exNum("F1-1.1-03","1.1 Cijfers en Getallen","Welke plaatswaarde heeft het cijfer 7 in 4 728?",700,2,2),
exSymbol("F1-1.1-04","1.1 Cijfers en Getallen","Vergelijk: "+(n-37)+" □ "+n,"<"),
exOrder("F1-1.1-05","1.1 Cijfers en Getallen","Zet van klein naar groot.",[String(n),String(n-8),String(n+2),String(n-40)],[String(n-40),String(n-8),String(n),String(n+2)]),
exLine("F1-1.1-06","1.1 Cijfers en Getallen","Plaats 73 op de getallenlijn.",73,0,100),
exSelect("F1-1.1-07","1.1 Cijfers en Getallen","Selecteer de getallen waarin het cijfer 5 op de plaats van de honderdtallen staat.",["503","2501","451","150","95"],["503","2501"]),
exNum("F1-1.1-08","1.1 Cijfers en Getallen","Bereken de plaatswaarde-ontbinding van 6 049.",6049,2,2)
];},
"1.2":()=>{const a=examRnd(120,480),b=examRnd(20,90),d=examRnd(4,8),q=examRnd(4,12),r=examRnd(1,3);return[
exNum("F1-1.2-01","1.2 De vier hoofdbewerkingen","Bereken: "+a+" + "+b,a+b),
exNum("F1-1.2-02","1.2 De vier hoofdbewerkingen","Bereken: "+(a+b+100)+" − "+a,b+100,2,2),
exNum("F1-1.2-03","1.2 De vier hoofdbewerkingen","Bereken: 7 × "+b,7*b,2,2),
exNum("F1-1.2-04","1.2 De vier hoofdbewerkingen","Bereken: "+(d*q+r)+" ÷ "+d+". Geef het quotiënt.",q,2,2),
exNum("F1-1.2-05","1.2 De vier hoofdbewerkingen","Hoe groot is de rest bij "+(d*q+r)+" ÷ "+d+"?",r,2,2),
exNum("F1-1.2-06","1.2 De vier hoofdbewerkingen","Vul aan: 7 × □ = 56.",8,2,2),
exChoice("F1-1.2-07","1.2 De vier hoofdbewerkingen","Welke bewerking voer je eerst uit in 3 + 6 × 2?",["3 + 6","6 × 2","Alles tegelijk","3 + 6 × 2"],"6 × 2",2,3),
exNum("F1-1.2-08","1.2 De vier hoofdbewerkingen","Bereken: 24 ÷ 3 × 2 + 5.",21,3,3),
exChoice("F1-1.2-09","1.2 De vier hoofdbewerkingen","Welke eigenschap wordt gebruikt in 7 × (10 + 3) = 7 × 10 + 7 × 3?",["Commutatieve eigenschap","Associatieve eigenschap","Distributieve eigenschap","Identiteit"],"Distributieve eigenschap",2,3)
];},
"1.3":()=>{const x=examRnd(2,9),y=examRnd(3,8);return[
exLine("F1-1.3-01","1.3 Het getallensysteem uitbreiden","Plaats −"+x+" op de getallenlijn.",-x,-10,10),
exSymbol("F1-1.3-02","1.3 Het getallensysteem uitbreiden","Vergelijk: −"+x+" □ −"+y,x>y?"<":x<y?">":"=",2,3),
exOrder("F1-1.3-03","1.3 Het getallensysteem uitbreiden","Zet van klein naar groot.",["-3","5","-8","0","2"],["-8","-3","0","2","5"]),
exNum("F1-1.3-04","1.3 Het getallensysteem uitbreiden","Wat is het tegenovergestelde van −"+x+"?",x),
exNum("F1-1.3-05","1.3 Het getallensysteem uitbreiden","Bereken: −"+x+" + (−"+y+").",-(x+y),2,2),
exNum("F1-1.3-06","1.3 Het getallensysteem uitbreiden","Bereken: 5 − (−"+x+").",5+x,2,2),
exNum("F1-1.3-07","1.3 Het getallensysteem uitbreiden","Bereken: (−"+x+") × "+y+".",-x*y,2,2),
exSelect("F1-1.3-08","1.3 Het getallensysteem uitbreiden","Selecteer alle uitkomsten die negatief zijn.",["(−3) × 4","8 − 12","(−4) × (−2)","3 − 7","(−2) + 5"],["(−3) × 4","8 − 12","3 − 7"],2,3),
exNum("F1-1.3-09","1.3 Het getallensysteem uitbreiden","Bereken: −8 × (4 − 7).",24,3,3)
];},
"1.4":()=>[
exFraction("F1-1.4-01","1.4 Breuken en rationale getallen","Vereenvoudig: 6/8.",3,4),
exFraction("F1-1.4-02","1.4 Breuken en rationale getallen","Bereken: 2/7 + 3/7.",5,7,1,2),
exFraction("F1-1.4-03","1.4 Breuken en rationale getallen","Bereken: 1/2 + 1/3.",5,6,3,3),
exFraction("F1-1.4-04","1.4 Breuken en rationale getallen","Bereken: 2/3 × 5/7.",10,21),
exFraction("F1-1.4-05","1.4 Breuken en rationale getallen","Bereken: 3/8 ÷ 9/4.",1,6,3,3),
exSymbol("F1-1.4-06","1.4 Breuken en rationale getallen","Vergelijk: 2/3 □ 3/5.",">",2,3),
exLine("F1-1.4-07","1.4 Breuken en rationale getallen","Plaats 5/4 op de getallenlijn.",1,0,2,1,3),
exChoice("F1-1.4-08","1.4 Breuken en rationale getallen","Wat vertelt de noemer?",["Hoeveel delen we nemen","In hoeveel gelijke delen het geheel is verdeeld","De totale waarde van de breuk","De uitkomst van de deling"],"In hoeveel gelijke delen het geheel is verdeeld"),
exFraction("F1-1.4-09","1.4 Breuken en rationale getallen","Schrijf 18/24 in vereenvoudigde vorm.",3,4)
],
"1.5":()=>[
exFraction("F1-1.5-01","1.5 Decimalen en percentages","Schrijf 0,375 als vereenvoudigde breuk.",3,8),
exNum("F1-1.5-02","1.5 Decimalen en percentages","Zet 0,25 om naar procent.",25),
exNum("F1-1.5-03","1.5 Decimalen en percentages","Bereken 20% van 150.",30),
exSymbol("F1-1.5-04","1.5 Decimalen en percentages","Vergelijk: 0,7 □ 0,65.",">"),
exNum("F1-1.5-05","1.5 Decimalen en percentages","Bereken: 3,75 + 2,8.",6.55,2,2,{integer:false}),
exNum("F1-1.5-06","1.5 Decimalen en percentages","Bereken: 4,2 × 10.",42),
exChoice("F1-1.5-07","1.5 Decimalen en percentages","Welke schrijfwijze is gelijk aan 35%?",["0,035","0,35","3,5","35"],"0,35"),
exNum("F1-1.5-08","1.5 Decimalen en percentages","Een prijs van €80 stijgt met 25%. Wat is de nieuwe prijs?",100,2,3)
],
"1.6":()=>[
exNum("F1-1.6-01","1.6 Verhoudingen en evenredigheid","Een recept voor 4 personen gebruikt 300 g bloem. Hoeveel gram voor 6 personen?",450,2,3),
exNum("F1-1.6-02","1.6 Verhoudingen en evenredigheid","Op een kaart is 1 cm gelijk aan 5 km. Hoeveel km is 7 cm?",35),
exChoice("F1-1.6-03","1.6 Verhoudingen en evenredigheid","Welke verhouding is gelijkwaardig aan 3 : 5?",["6 : 10","6 : 15","9 : 10","3 : 8"],"6 : 10"),
exNum("F1-1.6-04","1.6 Verhoudingen en evenredigheid","5 kg appels kost €12,50. Wat kost 8 kg bij dezelfde verhouding?",20,2,3,{integer:false}),
exSymbol("F1-1.6-05","1.6 Verhoudingen en evenredigheid","Is 4/6 □ 6/9?","=",2,3),
exNum("F1-1.6-06","1.6 Verhoudingen en evenredigheid","Een auto rijdt 180 km in 3 uur. Hoeveel km in 5 uur bij dezelfde snelheid?",300,2,3),
exChoice("F1-1.6-07","1.6 Verhoudingen en evenredigheid","Welke situatie is recht evenredig?",["Vaste instapkost plus prijs per uur","Aantal producten en totale prijs bij vaste prijs per product","Leeftijd en schoenmaat","Temperatuur en tijd"],"Aantal producten en totale prijs bij vaste prijs per product",2,3)
],
"1.7":()=>[
exSelect("F1-1.7-01","1.7 Delers en deelbaarheid","Selecteer alle delers van 24.",["1","2","3","4","5","6","8","12","24","25"],["1","2","3","4","6","8","12","24"]),
exChoice("F1-1.7-02","1.7 Delers en deelbaarheid","Welke uitspraak is waar?",["15 is deelbaar door 4","36 is deelbaar door 6","27 is deelbaar door 5","42 is deelbaar door 8"],"36 is deelbaar door 6"),
exNum("F1-1.7-03","1.7 Delers en deelbaarheid","Hoeveel delers heeft 12?",6,2,3),
exChoice("F1-1.7-04","1.7 Delers en deelbaarheid","Welke regel hoort bij deelbaarheid door 5?",["Laatste cijfer is 0 of 5","Cijfersom is deelbaar door 3","Laatste twee cijfers zijn deelbaar door 4","Getal is even"],"Laatste cijfer is 0 of 5"),
exSelect("F1-1.7-05","1.7 Delers en deelbaarheid","Welke getallen zijn deelbaar door 3?",["21","22","36","41","54"],["21","36","54"]),
exNum("F1-1.7-06","1.7 Delers en deelbaarheid","Wat is de rest van 47 ÷ 6?",5),
exChoice("F1-1.7-07","1.7 Delers en deelbaarheid","Welke uitspraak is correct?",["Een rest kan groter zijn dan de deler","Een rest is altijd kleiner dan de deler","Een rest is altijd 1","Een deling heeft nooit een rest"],"Een rest is altijd kleiner dan de deler")
]
};
/* Formal exam content — Phase 1 topics 1.8–1.13. */
function exFactors(id,topic,prompt,value,difficulty=2,cognitiveLevel=2){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"factorization",prompt,data:{},response:{type:"factorization",primes:[2,3,5,7,11,13]},answer:{type:"factorization",value},feedback:{correct:"Juist!",incorrect:"Controleer of alle factoren priem zijn en of hun product het oorspronkelijke getal geeft."}};}
const EXAM_BANKS_1B={
"1.8":()=>[
 {id:"F1-1.8-01",phase:1,topic:"1.8 Priemgetallen en factorisatie",difficulty:1,cognitiveLevel:2,type:"choice",prompt:"Welke van deze getallen is priem?",data:{},response:{type:"choice",options:["21","29","35","39"]},answer:{type:"choice",value:"29"},feedback:{correct:"Juist!",incorrect:"Een priemgetal heeft precies twee positieve delers."}},
 exFactors("F1-1.8-02","1.8 Priemgetallen en factorisatie","Ontbind 60 in priemfactoren.",{2:2,3:1,5:1},2,3),
 exFactors("F1-1.8-03","1.8 Priemgetallen en factorisatie","Ontbind 84 in priemfactoren.",{2:2,3:1,7:1},2,3),
 {id:"F1-1.8-04",phase:1,topic:"1.8 Priemgetallen en factorisatie",difficulty:3,cognitiveLevel:3,type:"choice",prompt:"Welke factorisatie is correct voor 72?",data:{},response:{type:"choice",options:["2³ × 3²","2² × 3³","2 × 36","8 × 9"]},answer:{type:"choice",value:"2³ × 3²"},feedback:{correct:"Juist!",incorrect:"Vermenigvuldig de priemfactoren om 72 te controleren."}},
 {id:"F1-1.8-05",phase:1,topic:"1.8 Priemgetallen en factorisatie",difficulty:1,cognitiveLevel:2,type:"select",prompt:"Selecteer de priemgetallen.",data:{options:["2","9","11","15","17","21"]},response:{type:"select",options:["2","9","11","15","17","21"]},answer:{type:"select",value:["2","11","17"]},feedback:{correct:"Juist!",incorrect:"Controleer welke getallen alleen door 1 en zichzelf deelbaar zijn."}},
 {id:"F1-1.8-06",phase:1,topic:"1.8 Priemgetallen en factorisatie",difficulty:2,cognitiveLevel:3,type:"number",prompt:"Hoeveel verschillende priemfactoren heeft 180?",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:3},feedback:{correct:"Juist!",incorrect:"Ontbind 180 eerst in priemfactoren."}}
],
"1.9":()=>[
 {id:"F1-1.9-01",phase:1,topic:"1.9 GGD en KGV",difficulty:2,cognitiveLevel:3,type:"number",prompt:"Bepaal de GGD van 48 en 18.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:6},feedback:{correct:"Juist!",incorrect:"Vergelijk de gemeenschappelijke delers of gebruik de priemfactorisaties."}},
 {id:"F1-1.9-02",phase:1,topic:"1.9 GGD en KGV",difficulty:2,cognitiveLevel:3,type:"number",prompt:"Bepaal het KGV van 48 en 18.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:144},feedback:{correct:"Juist!",incorrect:"Zoek het kleinste positieve veelvoud dat beide getallen delen."}},
 {id:"F1-1.9-03",phase:1,topic:"1.9 GGD en KGV",difficulty:2,cognitiveLevel:3,type:"number",prompt:"Bepaal de GGD van 36 en 60.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:12},feedback:{correct:"Juist!",incorrect:"Controleer de gemeenschappelijke delers."}},
 {id:"F1-1.9-04",phase:1,topic:"1.9 GGD en KGV",difficulty:2,cognitiveLevel:3,type:"number",prompt:"Bepaal het KGV van 12 en 18.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:36},feedback:{correct:"Juist!",incorrect:"Controleer de veelvouden van beide getallen."}},
 {id:"F1-1.9-05",phase:1,topic:"1.9 GGD en KGV",difficulty:2,cognitiveLevel:2,type:"choice",prompt:"Waarvoor gebruik je de GGD bij breuken?",data:{},response:{type:"choice",options:["Om een breuk te vereenvoudigen","Om een breuk groter te maken","Om decimalen af te ronden","Om een priemgetal te vinden"]},answer:{type:"choice",value:"Om een breuk te vereenvoudigen"},feedback:{correct:"Juist!",incorrect:"De GGD helpt teller en noemer door dezelfde grootste gemeenschappelijke deler te delen."}},
 {id:"F1-1.9-06",phase:1,topic:"1.9 GGD en KGV",difficulty:2,cognitiveLevel:3,type:"choice",prompt:"Waarvoor is het KGV vaak nuttig bij breuken?",data:{},response:{type:"choice",options:["Een gemeenschappelijke noemer vinden","Een teller schrappen","Een getal afronden","Een getal negatief maken"]},answer:{type:"choice",value:"Een gemeenschappelijke noemer vinden"},feedback:{correct:"Juist!",incorrect:"Het KGV kan als gemeenschappelijke noemer dienen."}}
],
"1.10":()=>[
 {id:"F1-1.10-01",phase:1,topic:"1.10 Machten",difficulty:1,cognitiveLevel:2,type:"number",prompt:"Bereken 2³.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:8},feedback:{correct:"Juist!",incorrect:"2³ betekent 2 × 2 × 2."}},
 {id:"F1-1.10-02",phase:1,topic:"1.10 Machten",difficulty:1,cognitiveLevel:2,type:"number",prompt:"Bereken 5².",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:25},feedback:{correct:"Juist!",incorrect:"5² betekent 5 × 5."}},
 {id:"F1-1.10-03",phase:1,topic:"1.10 Machten",difficulty:1,cognitiveLevel:2,type:"choice",prompt:"Wat betekent 4³?",data:{},response:{type:"choice",options:["4 + 4 + 4","4 × 3","4 × 4 × 4","3 × 3 × 3 × 3"]},answer:{type:"choice",value:"4 × 4 × 4"},feedback:{correct:"Juist!",incorrect:"De exponent geeft aan hoe vaak het grondtal als factor voorkomt."}},
 {id:"F1-1.10-04",phase:1,topic:"1.10 Machten",difficulty:1,cognitiveLevel:2,type:"number",prompt:"Bereken 10⁴.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:10000},feedback:{correct:"Juist!",incorrect:"Denk aan de plaatswaarden bij machten van 10."}},
 {id:"F1-1.10-05",phase:1,topic:"1.10 Machten",difficulty:2,cognitiveLevel:3,type:"number",prompt:"Bereken (−2)³.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:-8},feedback:{correct:"Juist!",incorrect:"Een oneven exponent behoudt hier het negatieve teken."}},
 {id:"F1-1.10-06",phase:1,topic:"1.10 Machten",difficulty:1,cognitiveLevel:2,type:"choice",prompt:"Welke uitspraak is juist?",data:{},response:{type:"choice",options:["2⁴ = 8","2⁴ = 16","4² = 6","3³ = 9"]},answer:{type:"choice",value:"2⁴ = 16"},feedback:{correct:"Juist!",incorrect:"Schrijf de macht uit als herhaalde vermenigvuldiging."}},
 {id:"F1-1.10-07",phase:1,topic:"1.10 Machten",difficulty:2,cognitiveLevel:3,type:"number",prompt:"Bereken 3² + 4².",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:25},feedback:{correct:"Juist!",incorrect:"Bereken eerst beide machten."}}
],
"1.11":()=>[
 {id:"F1-1.11-01",phase:1,topic:"1.11 Wortels",difficulty:1,cognitiveLevel:2,type:"number",prompt:"Bereken √16.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:4},feedback:{correct:"Juist!",incorrect:"Welke positieve factor maal zichzelf geeft 16?"}},
 {id:"F1-1.11-02",phase:1,topic:"1.11 Wortels",difficulty:1,cognitiveLevel:2,type:"number",prompt:"Bereken √81.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:9},feedback:{correct:"Juist!",incorrect:"9 × 9 = 81."}},
 {id:"F1-1.11-03",phase:1,topic:"1.11 Wortels",difficulty:1,cognitiveLevel:2,type:"choice",prompt:"Welke uitspraak is juist?",data:{},response:{type:"choice",options:["√25 = 4","√25 = 5","√25 = 10","√25 = −5"]},answer:{type:"choice",value:"√25 = 5"},feedback:{correct:"Juist!",incorrect:"De vierkantswortel is de niet-negatieve waarde waarvan het kwadraat het getal geeft."}},
 {id:"F1-1.11-04",phase:1,topic:"1.11 Wortels",difficulty:1,cognitiveLevel:2,type:"number",prompt:"Bereken √144.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:12},feedback:{correct:"Juist!",incorrect:"12 × 12 = 144."}},
 {id:"F1-1.11-05",phase:1,topic:"1.11 Wortels",difficulty:2,cognitiveLevel:2,type:"number",prompt:"Bereken √49 + √9.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:10},feedback:{correct:"Juist!",incorrect:"Bereken beide wortels afzonderlijk."}},
 {id:"F1-1.11-06",phase:1,topic:"1.11 Wortels",difficulty:2,cognitiveLevel:3,type:"choice",prompt:"Tussen welke twee gehele getallen ligt √20?",data:{},response:{type:"choice",options:["1 en 2","2 en 3","4 en 5","5 en 6"]},answer:{type:"choice",value:"4 en 5"},feedback:{correct:"Juist!",incorrect:"Omdat 16 < 20 < 25 geldt 4 < √20 < 5."}}
],
"1.12":()=>[
 {id:"F1-1.12-01",phase:1,topic:"1.12 Irrationale en reële getallen",difficulty:2,cognitiveLevel:2,type:"choice",prompt:"Welk getal is irrationaal?",data:{},response:{type:"choice",options:["0,5","3/4","√2","−7"]},answer:{type:"choice",value:"√2"},feedback:{correct:"Juist!",incorrect:"√2 kan niet als verhouding van twee gehele getallen worden geschreven."}},
 {id:"F1-1.12-02",phase:1,topic:"1.12 Irrationale en reële getallen",difficulty:1,cognitiveLevel:2,type:"choice",prompt:"Welk getal is rationaal?",data:{},response:{type:"choice",options:["√2","π","0,125","√3"]},answer:{type:"choice",value:"0,125"},feedback:{correct:"Juist!",incorrect:"Een eindige decimale ontwikkeling is rationaal."}},
 {id:"F1-1.12-03",phase:1,topic:"1.12 Irrationale en reële getallen",difficulty:2,cognitiveLevel:3,type:"symbol",prompt:"Vergelijk: √2 □ 1,4.",data:{},response:{type:"symbol",symbols:["<","=",">"]},answer:{type:"symbol",value:">"},feedback:{correct:"Juist!",incorrect:"√2 is ongeveer 1,414."}},
 {id:"F1-1.12-04",phase:1,topic:"1.12 Irrationale en reële getallen",difficulty:2,cognitiveLevel:3,type:"choice",prompt:"Welke uitspraak is juist?",data:{},response:{type:"choice",options:["Elk rationaal getal is natuurlijk","Elk natuurlijk getal is rationaal","Elk irrationaal getal is geheel","Geen enkel geheel getal is reëel"]},answer:{type:"choice",value:"Elk natuurlijk getal is rationaal"},feedback:{correct:"Juist!",incorrect:"Een natuurlijk getal n kan worden geschreven als n/1."}},
 {id:"F1-1.12-05",phase:1,topic:"1.12 Irrationale en reële getallen",difficulty:1,cognitiveLevel:2,type:"choice",prompt:"Welke verzameling bevat zowel rationale als irrationale getallen?",data:{},response:{type:"choice",options:["ℕ","ℤ","ℚ","ℝ"]},answer:{type:"choice",value:"ℝ"},feedback:{correct:"Juist!",incorrect:"De reële getallen omvatten zowel rationale als irrationale getallen."}},
 {id:"F1-1.12-06",phase:1,topic:"1.12 Irrationale en reële getallen",difficulty:2,cognitiveLevel:2,type:"numberline",prompt:"Plaats −1,5 op de getallenlijn.",data:{min:-3,max:3,step:0.5,startValue:-3},response:{type:"numberline",constraints:{integer:false}},answer:{type:"number",value:-1.5},feedback:{correct:"Juist!",incorrect:"−1,5 ligt precies halverwege −2 en −1."}}
],
"1.13":()=>[
 {id:"F1-1.13-01",phase:1,topic:"1.13 Afronden en wetenschappelijke notatie",difficulty:1,cognitiveLevel:2,type:"number",prompt:"Rond 4 678 af op honderden.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:4700},feedback:{correct:"Juist!",incorrect:"Kijk naar het tiental bij het afronden op honderden."}},
 {id:"F1-1.13-02",phase:1,topic:"1.13 Afronden en wetenschappelijke notatie",difficulty:1,cognitiveLevel:2,type:"number",prompt:"Rond 3,746 af op twee decimalen.",data:{},response:{type:"number",constraints:{integer:false}},answer:{type:"number",value:3.75},feedback:{correct:"Juist!",incorrect:"Kijk naar het derde cijfer na de komma."}},
 {id:"F1-1.13-03",phase:1,topic:"1.13 Afronden en wetenschappelijke notatie",difficulty:2,cognitiveLevel:3,type:"choice",prompt:"Welke wetenschappelijke notatie hoort bij 45 000?",data:{},response:{type:"choice",options:["4,5 × 10⁴","45 × 10³","0,45 × 10⁵","4,5 × 10³"]},answer:{type:"choice",value:"4,5 × 10⁴"},feedback:{correct:"Juist!",incorrect:"De mantisse ligt bij wetenschappelijke notatie tussen 1 en 10."}},
 {id:"F1-1.13-04",phase:1,topic:"1.13 Afronden en wetenschappelijke notatie",difficulty:1,cognitiveLevel:2,type:"number",prompt:"Schrijf 6,2 × 10³ als gewoon getal.",data:{},response:{type:"number",constraints:{integer:true}},answer:{type:"number",value:6200},feedback:{correct:"Juist!",incorrect:"Verschuif de komma drie plaatsen naar rechts."}},
 {id:"F1-1.13-05",phase:1,topic:"1.13 Afronden en wetenschappelijke notatie",difficulty:2,cognitiveLevel:2,type:"number",prompt:"Rond 0,0387 af op drie decimalen.",data:{},response:{type:"number",constraints:{integer:false}},answer:{type:"number",value:0.039},feedback:{correct:"Juist!",incorrect:"Kijk naar het vierde cijfer na de komma."}},
 {id:"F1-1.13-06",phase:1,topic:"1.13 Afronden en wetenschappelijke notatie",difficulty:2,cognitiveLevel:3,type:"choice",prompt:"Welke is de beste schatting voor 398 × 21?",data:{},response:{type:"choice",options:["80","800","8 000","80 000"]},answer:{type:"choice",value:"8 000"},feedback:{correct:"Juist!",incorrect:"Gebruik afgeronde getallen: ongeveer 400 × 20."}}
]
};
Object.keys(EXAM_BANKS_1B).forEach(k=>{EXAM_BANKS_1[k]=EXAM_BANKS_1B[k];});
