/* Formal exam content — Phase 1 topics 1.1–1.7. */
function examRnd(min,max){return min+Math.floor(Math.random()*(max-min+1));}
function examShuffle(a){const x=a.slice();for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
function exNum(id,topic,prompt,value,difficulty=1,cognitiveLevel=2,constraints={integer:true}){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"number",prompt,data:{},response:{type:"number",constraints},answer:{type:"number",value},feedback:{correct:"Juist!",incorrect:"Controleer je tussenstappen en de plaats van de bewerking."}};}
function exChoice(id,topic,prompt,options,correct,difficulty=1,cognitiveLevel=1){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"choice",prompt,data:{},response:{type:"choice",options},answer:{type:"choice",value:correct},feedback:{correct:"Juist!",incorrect:"Kijk opnieuw naar de eigenschap of redenering."}};}
function exSymbol(id,topic,prompt,correct,difficulty=1,cognitiveLevel=2){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"symbol",prompt,data:{},response:{type:"symbol",symbols:["<","=",">"]},answer:{type:"symbol",value:correct},feedback:{correct:"Juist!",incorrect:"Vergelijk de twee waarden opnieuw."}};}
function exFraction(id,topic,prompt,num,den,difficulty=2,cognitiveLevel=2){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"fraction",prompt,data:{},response:{type:"fraction"},answer:{type:"fraction",value:{numerator:num,denominator:den}},feedback:{correct:"Juist!",incorrect:"Controleer teller, noemer en vereenvoudiging."}};}
function exLine(id,topic,prompt,value,min,max,step=1,difficulty=2,cognitiveLevel=2){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"numberline",prompt,data:{min,max,step,startValue:min},response:{type:"numberline",constraints:{integer:step===1}},answer:{type:"number",value},feedback:{correct:"Juist!",incorrect:"Kijk goed naar de positie op de getallenlijn."}};}
function exOrder(id,topic,prompt,items,answer,difficulty=2,cognitiveLevel=2){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"ordering",prompt,data:{items},response:{type:"ordering",options:items},answer:{type:"ordering",value:answer},feedback:{correct:"Juist!",incorrect:"Vergelijk de waarden één voor één."}};}
function exSelect(id,topic,prompt,options,answer,difficulty=2,cognitiveLevel=2){return{id,phase:1,topic,difficulty,cognitiveLevel,type:"select",prompt,data:{options},response:{type:"select",options},answer:{type:"select",value:answer},feedback:{correct:"Juist!",incorrect:"Controleer alle opties opnieuw."}};}

const EXAM_BANKS_1={
"1.1":()=>{const n=examRnd(100,9999);return[
exChoice("F1-1.1-01","1.1 Cijfers en Getallen","Wat is een cijfer?",["Een teken waarmee we getallen schrijven","Een hoeveelheid","Een getallenlijn","Een bewerking"],"Een teken waarmee we getallen schrijven"),
exNum("F1-1.1-02","1.1 Cijfers en Getallen","Wat is de opvolger van "+n+"?",n+1),
exNum("F1-1.1-03","1.1 Cijfers en Getallen","Welke plaatswaarde heeft het cijfer 7 in 4 728?",700,2,2),
exSymbol("F1-1.1-04","1.1 Cijfers en Getallen","Vergelijk: "+(n-37)+" □ "+n,"<"),
exOrder("F1-1.1-05","1.1 Cijfers en Getallen","Zet van klein naar groot.",[String(n),String(n-8),String(n+2),String(n-40)],[String(n-40),String(n-8),String(n),String(n+2)]),
exLine("F1-1.1-06","1.1 Cijfers en Getallen","Plaats 73 op de getallenlijn.",73,0,100),
exSelect("F1-1.1-07","1.1 Cijfers en Getallen","Selecteer de getallen waarin het cijfer 5 op de plaats van de honderdtallen staat.",["503","2501","451","150","95"],["503","451","150"]),
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
exLine("F1-1.3-01","1.3 Negatieve en gehele getallen","Plaats −"+x+" op de getallenlijn.",-x,-10,10),
exSymbol("F1-1.3-02","1.3 Negatieve en gehele getallen","Vergelijk: −"+x+" □ −"+y,x>y?"<":x<y?">":"=",2,2),
exOrder("F1-1.3-03","1.3 Negatieve en gehele getallen","Zet van klein naar groot.",["-3","5","-8","0","2"],["-8","-3","0","2","5"]),
exNum("F1-1.3-04","1.3 Negatieve en gehele getallen","Wat is het tegenovergestelde van −"+x+"?",x),
exNum("F1-1.3-05","1.3 Negatieve en gehele getallen","Bereken: −"+x+" + (−"+y+").",-(x+y),2,2),
exNum("F1-1.3-06","1.3 Negatieve en gehele getallen","Bereken: 5 − (−"+x+").",5+x,2,2),
exNum("F1-1.3-07","1.3 Negatieve en gehele getallen","Bereken: (−"+x+") × "+y+".",-x*y,2,2),
exSelect("F1-1.3-08","1.3 Negatieve en gehele getallen","Selecteer alle uitkomsten die negatief zijn.",["(−3) × 4","8 − 12","(−4) × (−2)","3 − 7","(−2) + 5"],["(−3) × 4","8 − 12","3 − 7"],2,3),
exNum("F1-1.3-09","1.3 Negatieve en gehele getallen","Bereken: −8 × (4 − 7).",24,3,3)
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
