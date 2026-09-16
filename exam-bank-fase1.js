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
"1.1":()=>{const n=examRnd(100,9999),b=examRnd(10,90);return[
exChoice("F1-1.1-01","1.1 Cijfers en Getallen","Wat is een cijfer?",["Een teken waarmee we getallen schrijven","Een hoeveelheid","Een getallenlijn","Een bewerking"],"Een teken waarmee we getallen schrijven"),
exNum("F1-1.1-02","1.1 Cijfers en Getallen","Wat is de opvolger van "+n+"?",n+1),
exNum("F1-1.1-03","1.1 Cijfers en Getallen","Welke plaatswaarde heeft het cijfer 7 in 4 728?",700,2,2),
exSymbol("F1-1.1-04","1.1 Cijfers en Getallen","Vergelijk: "+(n-37)+" □ "+n,"<"),
exOrder("F1-1.1-05","1.1 Cijfers en Getallen","Zet van klein naar groot.",[String(n),String(n-8),String(n+2),String(n-40)],[String(n-40),String(n-8),String(n),String(n+2)]),
exLine("F1-1.1-06","1.1 Cijfers en Getallen","Plaats "+ b +" op de getallenlijn.",b,0,100),
exSelect("F1-1.1-07","1.1 Cijfers en Getallen","Selecteer de getallen waarin het cijfer 5 op de plaats van de honderdtallen staat.",["503","451","2589","150","95"],["503","2589"]),
exNum("F1-1.1-08","1.1 Cijfers en Getallen","Welk getal hoort bij 6 × 1000 + 0 × 100 + 4 × 10 + 9 × 1?",6049,2,2),
exChoice("F1-1.1-09","1.1 Cijfers en Getallen","Een leerling zegt: 'In 4 082 is de 8 het cijfer van de tientallen, dus de plaatswaarde is 8.' Wat is correct?",["De plaatswaarde is 8","De plaatswaarde is 80","De plaatswaarde is 800","De 8 heeft geen plaatswaarde"],"De plaatswaarde is 80",3,3),
exNum("F1-1.1-10","1.1 Cijfers en Getallen","Welk getal krijg je als je het honderdtal van "+n+" met 3 verhoogt, terwijl alle andere cijfers gelijk blijven?",n+300,3,3)

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
exChoice("F1-1.2-09","1.2 De vier hoofdbewerkingen","Welke eigenschap wordt gebruikt in 7 × (10 + 3) = 7 × 10 + 7 × 3?",["Commutatieve eigenschap","Associatieve eigenschap","Distributieve eigenschap","Identiteit"],"Distributieve eigenschap",2,3),
exNum("F1-1.2-10","1.2 De vier hoofdbewerkingen","Bereken zonder rekenmachine: 99 × 7.",693,3,3),
exChoice("F1-1.2-11","1.2 De vier hoofdbewerkingen","Welke berekening is gelijk aan 48 × 19?",["48 × 20 + 48","48 × 20 − 48","50 × 20 − 48","48 × 10 − 48 × 9"],"48 × 20 − 48",3,3),
exNum("F1-1.2-12","1.2 De vier hoofdbewerkingen","Een getal wordt eerst met 4 vermenigvuldigd en daarna wordt 7 afgetrokken. Het resultaat is 29. Welk getal was het oorspronkelijke getal?",9,3,3)
];},


"1.3":()=>{const x=examRnd(10,40),y=examRnd(3,8);return[
exLine("F1-1.3-01","1.3 Het getallensysteem uitbreiden","Plaats −"+x+" op de getallenlijn.",-x,-50,10),
exSymbol("F1-1.3-02","1.3 Het getallensysteem uitbreiden","Vergelijk: −"+x+" □ −"+y,x>y?"<":x<y?">":"=",2,3),
exOrder("F1-1.3-03","1.3 Het getallensysteem uitbreiden","Zet van klein naar groot.",["-3","5","-8","0","2"],["-8","-3","0","2","5"]),
exNum("F1-1.3-04","1.3 Het getallensysteem uitbreiden","Wat is het tegenovergestelde van −"+x+"?",x),
exNum("F1-1.3-05","1.3 Het getallensysteem uitbreiden","Bereken: −"+x+" + (−"+y+").",-(x+y),2,2),
exNum("F1-1.3-06","1.3 Het getallensysteem uitbreiden","Bereken: 5 − (−"+x+").",5+x,2,2),
exNum("F1-1.3-07","1.3 Het getallensysteem uitbreiden","Bereken: (−"+x+") × "+y+".",-x*y,2,2),
exSelect("F1-1.3-08","1.3 Het getallensysteem uitbreiden","Selecteer alle uitkomsten die negatief zijn.",["(−3) × 4","8 − 12","(−4) × (−2)","3 − 7","(−2) + 5"],["(−3) × 4","8 − 12","3 − 7"],2,3),
exNum("F1-1.3-09","1.3 Het getallensysteem uitbreiden","Bereken: −8 × (4 − 7).",24,3,3),
exChoice("F1-1.3-10","1.3 Negatieve en gehele getallen","Welke berekening geeft de grootste uitkomst?",["−8 + 3","−8 − 3","3 − (−8)","−3 − 8"],"3 − (−8)",3,3),
exChoice("F1-1.3-12","1.3 Negatieve en gehele getallen","Een temperatuur stijgt van −4 °C naar 7 °C. Met hoeveel graden stijgt de temperatuur?",["3 °C","7 °C","11 °C","−11 °C"],"11 °C",3,3)
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
exFraction("F1-1.4-09","1.4 Breuken en rationale getallen","Schrijf 18/24 in vereenvoudigde vorm.",3,4),
exChoice("F1-1.4-10","1.4 Breuken en rationale getallen","Welke breuk is gelijk aan het gemengde getal 2 1/3?",["5/3","7/3","8/3","3/7"],"7/3",2,3),
exFraction("F1-1.4-11","1.4 Breuken en rationale getallen","Bereken en geef vereenvoudigd: 5/6 + 7/12.",17,12,3,3),
exFraction("F1-1.4-12","1.4 Breuken en rationale getallen","Bereken en vereenvoudig: 4/9 × 3/8.",1,6,3,3),
exChoice("F1-1.4-13","1.4 Breuken en rationale getallen","Welke breuk is het grootst?",["5/8","2/3","7/12","3/5"],"2/3",3,3),
exChoice("F1-1.4-14","1.4 Breuken en rationale getallen","Een leerling beweert: 2/3 + 1/4 = 3/7. Waarom is dat fout?",["Tellers mag je nooit optellen","De noemers moeten eerst gelijknamig worden gemaakt","Breuken kunnen niet worden opgeteld","De grootste noemer moet worden gekozen"],"De noemers moeten eerst gelijknamig worden gemaakt",3,3),
exFraction("F1-1.4-15","1.3 Negatieve en gehele getallen","Bereken en vereenvoudig: 3/4 − 5/8.",1,8,3,3),

],


"1.5":()=>[
exFraction("F1-1.5-01","1.5 Decimalen en percentages","Schrijf 0,375 als vereenvoudigde breuk.",3,8),
exNum("F1-1.5-02","1.5 Decimalen en percentages","Zet 0,25 om naar procent.",25),
exNum("F1-1.5-03","1.5 Decimalen en percentages","Bereken 20% van 150.",30),
exSymbol("F1-1.5-04","1.5 Decimalen en percentages","Vergelijk: 0,7 □ 0,65.",">"),
exNum("F1-1.5-05","1.5 Decimalen en percentages","Bereken: 3,75 + 2,8.",6.55,2,2,{integer:false}),
exNum("F1-1.5-06","1.5 Decimalen en percentages","Bereken: 4,2 × 10.",42),
exChoice("F1-1.5-07","1.5 Decimalen en percentages","Welke schrijfwijze is gelijk aan 35%?",["0,035","0,35","3,5","35"],"0,35"),
exNum("F1-1.5-08","1.5 Decimalen en percentages","Een prijs van €80 stijgt met 25%. Wat is de nieuwe prijs?",100,2,3),
exFraction("F1-1.5-09","1.5 Decimalen en percentages","Schrijf 0,72 als vereenvoudigde breuk.",18,25,3,3),
exNum("F1-1.5-10","1.5 Decimalen en percentages","Een bedrag van €120 wordt eerst met 15% verhoogd. Wat is het nieuwe bedrag?",138,3,3),
exNum("F1-1.5-11","1.5 Decimalen en percentages","Een bedrag van €200 wordt met 20% verlaagd en daarna nog eens met 10%. Wat is het eindbedrag?",144,3,3),
exChoice("F1-1.5-12","1.5 Decimalen en percentages","Welke uitspraak is juist?",["0,4 = 4%","0,04 = 4%","4% = 0,4","40% = 0,04"],"0,04 = 4%",3,3)
],


"1.6":()=>[
exNum("F1-1.6-01","1.6 Verhoudingen en evenredigheid","Een recept voor 4 personen gebruikt 300 g bloem. Hoeveel gram voor 6 personen?",450,2,3),
exNum("F1-1.6-02","1.6 Verhoudingen en evenredigheid","Op een kaart is 1 cm gelijk aan 5 km. Hoeveel km is 7 cm?",35),
exChoice("F1-1.6-03","1.6 Verhoudingen en evenredigheid","Welke verhouding is gelijkwaardig aan 3 : 5?",["6 : 10","6 : 15","9 : 10","3 : 8"],"6 : 10"),
exNum("F1-1.6-04","1.6 Verhoudingen en evenredigheid","5 kg appels kost €12,50. Wat kost 8 kg bij dezelfde verhouding?",20,2,3,{integer:false}),
exSymbol("F1-1.6-05","1.6 Verhoudingen en evenredigheid","Is 4/6 □ 6/9?","=",2,3),
exNum("F1-1.6-06","1.6 Verhoudingen en evenredigheid","Een auto rijdt 180 km in 3 uur. Hoeveel km in 5 uur bij dezelfde snelheid?",300,2,3),
exChoice("F1-1.6-07","1.6 Verhoudingen en evenredigheid","Welke situatie is recht evenredig?",["Vaste instapkost plus prijs per uur","Aantal producten en totale prijs bij vaste prijs per product","Leeftijd en schoenmaat","Temperatuur en tijd"],"Aantal producten en totale prijs bij vaste prijs per product",2,3),
exNum("F1-1.6-08","1.6 Verhoudingen en evenredigheid","Een kaart heeft schaal 1 : 50 000. Een afstand is 3 cm op de kaart. Hoeveel kilometer is dat in werkelijkheid?",1.5,3,3,{integer:false}),
exNum("F1-1.6-09","1.6 Verhoudingen en evenredigheid","Een verhouding is 2 : 3. Als het eerste deel 18 is, hoe groot is het tweede deel?",27,3,3),
exNum("F1-1.6-10","1.6 Verhoudingen en evenredigheid","Een kaart gebruikt schaal 1 : 25 000. Een afstand van 4 cm op de kaart komt overeen met hoeveel kilometer in werkelijkheid?",1,3,3,{integer:false}),
exChoice("F1-1.6-11","1.6 Verhoudingen en evenredigheid","Een leerling verdubbelt alle ingrediënten van een recept behalve het aantal personen. Wat gaat er mis?",["Niets, een recept blijft altijd evenredig","De verhouding tussen ingrediënten en personen verandert","Alleen het gewicht verandert, niet de verhouding","De prijs verandert maar de hoeveelheden niet"],"De verhouding tussen ingrediënten en personen verandert",3,3)
],


"1.7":()=>[
exSelect("F1-1.7-01","1.7 Delers en deelbaarheid","Selecteer alle delers van 24.",["1","2","3","4","5","6","8","12","24","25"],["1","2","3","4","6","8","12","24"]),
exChoice("F1-1.7-02","1.7 Delers en deelbaarheid","Welke uitspraak is waar?",["15 is deelbaar door 4","36 is deelbaar door 6","27 is deelbaar door 5","42 is deelbaar door 8"],"36 is deelbaar door 6"),
exNum("F1-1.7-03","1.7 Delers en deelbaarheid","Hoeveel delers heeft 12?",6,2,3),
exChoice("F1-1.7-04","1.7 Delers en deelbaarheid","Welke regel hoort bij deelbaarheid door 5?",["Laatste cijfer is 0 of 5","Cijfersom is deelbaar door 3","Laatste twee cijfers zijn deelbaar door 4","Getal is even"],"Laatste cijfer is 0 of 5"),
exSelect("F1-1.7-05","1.7 Delers en deelbaarheid","Welke getallen zijn deelbaar door 3?",["21","22","36","41","54"],["21","36","54"]),
exNum("F1-1.7-06","1.7 Delers en deelbaarheid","Wat is de rest van 47 ÷ 6?",5),
exChoice("F1-1.7-07","1.7 Delers en deelbaarheid","Welke uitspraak is correct?",["Een rest kan groter zijn dan de deler","Een rest is altijd kleiner dan de deler","Een rest is altijd 1","Een deling heeft nooit een rest"],"Een rest is altijd kleiner dan de deler"),
exChoice("F1-1.7-08","1.7 Delers en deelbaarheid","Welke uitspraak is altijd waar?",["even + even = even","oneven + oneven = oneven","even + oneven = even","een oneven getal is deelbaar door 2"],"even + even = even",2,3),
exSelect("F1-1.7-09","1.7 Delers en deelbaarheid","Selecteer alle getallen die deelbaar zijn door 6.",["18","24","27","30","42","45"],["18","24","30","42"],2,3),
exSelect("F1-1.7-10","1.7 Delers en deelbaarheid","Selecteer alle getallen die deelbaar zijn door 3 én door 4.",["12","18","24","30","36","42"],["12","24","36"],3,3),
exNum("F1-1.7-11","1.7 Delers en deelbaarheid","Wat is de grootste deler van 84 die kleiner is dan 20?",14,3,3),
exChoice("F1-1.7-12","1.7 Delers en deelbaarheid","Een getal is deelbaar door 2 en door 3. Wat weet je zeker?",["Het is deelbaar door 5","Het is deelbaar door 6","Het is priem","Het is oneven"],"Het is deelbaar door 6",3,3)
],

"1.8":()=>[
exChoice("F1-1.8-01","1.8 Priemgetallen en factorisatie","Welke van deze getallen is priem?",["21","29","35","39"],"29"),
{id:"F1-1.8-02",phase:1,topic:"1.8 Priemgetallen en factorisatie",difficulty:2,cognitiveLevel:3,type:"factorization",prompt:"Ontbind 60 in priemfactoren.",data:{},response:{type:"factorization",primes:[2,3,5,7,11,13]},answer:{type:"factorization",value:{2:2,3:1,5:1}},feedback:{correct:"Juist!",incorrect:"60 = 2 × 2 × 3 × 5."}},
{id:"F1-1.8-03",phase:1,topic:"1.8 Priemgetallen en factorisatie",difficulty:2,cognitiveLevel:3,type:"factorization",prompt:"Ontbind 84 in priemfactoren.",data:{},response:{type:"factorization",primes:[2,3,5,7,11,13]},answer:{type:"factorization",value:{2:2,3:1,7:1}},feedback:{correct:"Juist!",incorrect:"84 = 2 × 2 × 3 × 7."}},
exChoice("F1-1.8-04","1.8 Priemgetallen en factorisatie","Welke factorisatie is correct voor 72?",["2³ × 3²","2² × 3³","2 × 36","8 × 9"],"2³ × 3²",3,3),
exSelect("F1-1.8-05","1.8 Priemgetallen en factorisatie","Selecteer de priemgetallen.",["2","9","11","15","17","21"],["2","11","17"]),
exNum("F1-1.8-06","1.8 Priemgetallen en factorisatie","Hoeveel verschillende priemfactoren heeft 180?",3,2,3),
exChoice("F1-1.8-07","1.8 Priemgetallen en factorisatie","Welke uitspraak over het getal 1 is juist?",["1 is priem","1 is samengesteld","1 is noch priem noch samengesteld","1 heeft precies twee positieve delers"],"1 is noch priem noch samengesteld",2,2)
],

"1.9":()=>[
exNum("F1-1.9-01","1.9 GGD en KGV","Bepaal de GGD van 48 en 18.",6,2,3),
exNum("F1-1.9-02","1.9 GGD en KGV","Bepaal het KGV van 48 en 18.",144,2,3),
exNum("F1-1.9-03","1.9 GGD en KGV","Bepaal de GGD van 36 en 60.",12,2,3),
exNum("F1-1.9-04","1.9 GGD en KGV","Bepaal het KGV van 12 en 18.",36,2,3),
exChoice("F1-1.9-05","1.9 GGD en KGV","Waarvoor gebruik je de GGD bij breuken?",["Om een breuk te vereenvoudigen","Om een breuk groter te maken","Om decimalen af te ronden","Om een priemgetal te vinden"],"Om een breuk te vereenvoudigen",2,2),
exChoice("F1-1.9-06","1.9 GGD en KGV","Waarvoor is het KGV vaak nuttig bij breuken?",["Een gemeenschappelijke noemer vinden","Een teller schrappen","Een getal afronden","Een getal negatief maken"],"Een gemeenschappelijke noemer vinden",2,3),
exChoice("F1-1.9-07","1.9 GGD en KGV","Bij het algoritme van Euclides voor GGD(105, 28) geldt eerst 105 = 3 × 28 + 21. Welke stap volgt?",["28 = 1 × 21 + 7","28 = 2 × 21 + 14","21 = 1 × 28 − 7","105 = 5 × 21"],"28 = 1 × 21 + 7",3,3),
exNum("F1-1.9-08","1.9 GGD en KGV","Voor positieve gehele getallen geldt GGD(a,b) × KGV(a,b) = a × b. Als a × b = 216 en de GGD 6 is, wat is dan het KGV?",36,3,3),
exChoice("F1-1.9-09","1.9 GGD en KGV","Bij het algoritme van Euclides voor GGD(105, 28) geldt eerst 105 = 3 × 28 + 21. Welke stap volgt?",["28 = 1 × 21 + 7","28 = 2 × 21 + 14","21 = 1 × 28 − 7","105 = 5 × 21"],"28 = 1 × 21 + 7",3,3),
exNum("F1-1.9-10","1.9 GGD en KGV","Voor positieve gehele getallen geldt GGD(a,b) × KGV(a,b) = a × b. Als a × b = 216 en de GGD 6 is, wat is dan het KGV?",36,3,3),
exNum("F1-1.9-11","1.9 GGD en KGV","Bepaal de GGD van 84 en 126.",42,3,3),
exNum("F1-1.9-12","1.9 GGD en KGV","Bepaal het KGV van 18 en 30.",90,3,3),
exChoice("F1-1.9-13","1.9 GGD en KGV","Twee lampen knipperen elke 6 en 8 seconden. Na hoeveel seconden knipperen ze opnieuw tegelijk?",["2","12","24","48"],"24",3,3),
exChoice("F1-1.9-14","1.9 GGD en KGV","Je wilt 48 rode en 60 blauwe knikkers verdelen in zo groot mogelijke identieke zakjes zonder rest. Welke grootheid heb je nodig?",["KGV","GGD","Priemgetal","Cijfersom"],"GGD",3,3)
  
],

"1.10":()=>[
exChoice("F1-1.10-01","1.10 Machten","Wat betekent 4³?",["4 + 4 + 4","4 × 3","4 × 4 × 4","3 × 3 × 3 × 3"],"4 × 4 × 4"),
exNum("F1-1.10-02","1.10 Machten","Bereken 2³.",8),
exNum("F1-1.10-03","1.10 Machten","Bereken 10⁴.",10000),
exNum("F1-1.10-04","1.10 Machten","Bereken (−2)³.",-8,2,3),
exChoice("F1-1.10-05","1.10 Machten","Welke uitspraak is fout?",["5² = 25","5³ = 125","5⁰ = 0","5¹ = 5"],"5⁰ = 0",2,3),
exChoice("F1-1.10-06","1.10 Machten","Welke uitspraak is gelijkwaardig aan 3² × 3⁴?",["3⁶","3⁸","6⁶","9⁴"],"3⁶",3,3),
exNum("F1-1.10-07","1.10 Machten","Bereken (2³)².",64,3,3),
exNum("F1-1.10-08","1.10 Machten","Bereken 2⁵ ÷ 2².",8,3,3)

],

"1.11":()=>[
exNum("F1-1.11-01","1.11 Wortels","Bereken √16.",4),
exNum("F1-1.11-02","1.11 Wortels","Bereken √81.",9),
exChoice("F1-1.11-03","1.11 Wortels","Welke uitspraak is juist?",["√25 = 4","√25 = 5","√25 = 10","√25 = −5"],"√25 = 5"),
exNum("F1-1.11-04","1.11 Wortels","Bereken √144.",12),
exNum("F1-1.11-05","1.11 Wortels","Bereken √49 + √9.",10,2,2),
exChoice("F1-1.11-06","1.11 Wortels","Tussen welke twee gehele getallen ligt √20?",["1 en 2","2 en 3","4 en 5","5 en 6"],"4 en 5",2,3),
exNum("F1-1.11-07","1.11 Wortels","Bereken √(4 × 36).",12,2,3),
exChoice("F1-1.11-08","1.11 Wortels","Welke uitspraak is fout?",["√25 = 5","√(4 × 9) = √4 × √9","√(9 + 16) = √9 + √16","√49 = 7"],"√(9 + 16) = √9 + √16",3,3),
exChoice("F1-1.11-09","1.11 Wortels","Welke uitspraak is juist?",["√36 = 18","Worteltrekken is hetzelfde als delen door 2","√36 = 6 omdat 6 × 6 = 36","√25 = −5"],"√36 = 6 omdat 6 × 6 = 36",2,2),
exNum("F1-1.11-10","1.11 Wortels","Bereken 2³ × √16.",32,3,3),
],

"1.12":()=>[
exChoice("F1-1.12-01","1.12 Irrationale en reële getallen","Welk getal is irrationaal?",["0,5","3/4","√2","−7"],"√2",2,2),
exChoice("F1-1.12-02","1.12 Irrationale en reële getallen","Welk getal is rationaal?",["√2","π","0,125","√3"],"0,125"),
exSymbol("F1-1.12-03","1.12 Irrationale en reële getallen","Vergelijk: √2 □ 1,4.",">",2,3),
exChoice("F1-1.12-04","1.12 Irrationale en reële getallen","Welke uitspraak is juist?",["Elk rationaal getal is natuurlijk","Elk natuurlijk getal is rationaal","Elk irrationaal getal is geheel","Geen enkel geheel getal is reëel"],"Elk natuurlijk getal is rationaal",2,3),
exChoice("F1-1.12-05","1.12 Irrationale en reële getallen","Welke verzameling bevat zowel rationale als irrationale getallen?",["ℕ","ℤ","ℚ","ℝ"],"ℝ"),
exLine("F1-1.12-06","1.12 Irrationale en reële getallen","Plaats −1,5 op de getallenlijn.",-1.5,-3,3,0.5,2,2),
exSelect("F1-1.12-07","1.12 Irrationale en reële getallen","Selecteer alle irrationale getallen.",["√2","0,75","π","-4","√9","√5"],["√2","π","√5"],3,3),
exOrder("F1-1.12-08","1.12 Irrationale en reële getallen","Zet van klein naar groot.",["1,4","√2","1,5","π"],["1,4","√2","1,5","π"],3,3)
],

"1.13":()=>[
exNum("F1-1.13-01","1.13 Afronden en wetenschappelijke notatie","Rond 4 678 af op honderden.",4700),
exNum("F1-1.13-02","1.13 Afronden en wetenschappelijke notatie","Rond 3,746 af op twee decimalen.",3.75,1,2,{integer:false}),
exChoice("F1-1.13-03","1.13 Afronden en wetenschappelijke notatie","Welke wetenschappelijke notatie hoort bij 45 000?",["4,5 × 10⁴","45 × 10³","0,45 × 10⁵","4,5 × 10³"],"4,5 × 10⁴",2,3),
exNum("F1-1.13-04","1.13 Afronden en wetenschappelijke notatie","Schrijf 6,2 × 10³ als gewoon getal.",6200),
exNum("F1-1.13-05","1.13 Afronden en wetenschappelijke notatie","Rond 0,0387 af op drie decimalen.",0.039,2,2,{integer:false}),
exChoice("F1-1.13-06","1.13 Afronden en wetenschappelijke notatie","Welke is de beste schatting voor 398 × 21?",["80","800","8 000","80 000"],"8 000",2,3),
exChoice("F1-1.13-07","1.13 Afronden en wetenschappelijke notatie","Welke wetenschappelijke notatie hoort bij 0,0032?",["3,2 × 10⁻³","3,2 × 10³","0,32 × 10⁻²","32 × 10⁻⁴"],"3,2 × 10⁻³",2,3),
exNum("F1-1.13-08","1.13 Afronden en wetenschappelijke notatie","Schrijf 4,7 × 10⁻² als decimaal getal.",0.047,3,3,{integer:false})
]
};




