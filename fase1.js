/* Lesstof Fase 1 — Getallen. De leerstof is opgebouwd als één doorlopend traject. */
const MILESTONES_1 = [
  { id:"1.1", title:"Tellen, cijfers en getallen", goal:"Hoe kunnen we met een klein aantal cijfers oneindig veel getallen schrijven, en hoe lezen we hun plaatswaarde?", theory:/* html */`
<h2>Tellen, cijfers en getallen</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat is het verschil tussen een hoeveelheid, een getal en een cijfer?</li><li>Hoe kunnen tien cijfers oneindig veel getallen voorstellen?</li><li>Waarom verandert de waarde van een cijfer wanneer zijn plaats verandert?</li><li>Wat bedoelen we met de natuurlijke getallen?</li></ul>
<h3>Van hoeveelheden naar getallen</h3><p>Als er vijf appels op tafel liggen, hebben we een hoeveelheid. Het <strong>getal 5</strong> beschrijft die hoeveelheid. Een <strong>cijfer</strong> is een symbool waarmee we getallen schrijven. In ons tientallig stelsel gebruiken we 0, 1, 2, 3, 4, 5, 6, 7, 8 en 9.</p><div class="callout"><strong>Definitie</strong><p>Een cijfer is een symbool. Een getal is een wiskundig object waarmee we onder meer hoeveelheden en posities kunnen beschrijven.</p></div>
<h3>Plaatswaarde</h3><p>In 472 betekent de 4 niet zomaar vier:</p><p class="formula">472 = 4 \\times 100 + 7 \\times 10 + 2 \\times 1</p><p>De plaatsen zijn opeenvolgende machten van 10. Daarom heet dit het <strong>tientallig</strong> of <strong>decimale</strong> stelsel.</p>
<h3>De natuurlijke getallen</h3><p>In deze cursus hoort 0 bij de natuurlijke getallen:</p><p class="formula">\\mathbb{N} = \\{0,1,2,3,4,5,\\ldots\\}</p><p>Er is geen grootste natuurlijk getal: bij ieder n hoort ook n+1.</p><h3>De getallenlijn</h3><div data-widget="nats"></div><p>Grotere getallen liggen naar rechts en kleinere naar links.</p>

<h3>Veelgemaakte fouten</h3>
<ul>
  <li>Het cijfer 5 heeft niet altijd plaatswaarde 5: in 52 betekent het 50, terwijl het in 205 de waarde 5 heeft.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Bepaal eerst welke cijfers in het getal staan.</li>
    <li>Lees de plaats van elk cijfer van rechts naar links.</li>
    <li>Bepaal de plaatswaarde met de overeenkomstige macht van 10.</li>
    <li>Gebruik de getallenlijn of plaatswaarden om getallen te vergelijken.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Getallen worden met cijfers geschreven; plaatswaarde maakt duidelijk welke waarde ieder cijfer in een getal heeft.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.1 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.2</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.2", title:"Het getallensysteem en de getallenlijn", goal:"Hoe helpen plaatswaarde en de getallenlijn ons om natuurlijke getallen te ordenen en te vergelijken?", theory:/* html */`
<h2>Het getallensysteem en de getallenlijn</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Hoe werkt plaatswaarde systematisch?</li><li>Waarom kun je natuurlijke getallen ordenen?</li><li>Hoe gebruiken we opvolgers en voorgangers?</li></ul><h3>Positiewaarde</h3><p>Voor 5 082 geldt:</p><p class="formula">5\\,082 = 5 \\times 10^3 + 0 \\times 10^2 + 8 \\times 10 + 2</p><p>Een nul op een bepaalde positie bewaart dus de structuur van het getal.</p><h3>Ordenen</h3><p>Bij evenveel cijfers vergelijk je van links naar rechts het eerste cijfer dat verschilt.</p><p class="formula">5\\,814 &gt; 5\\,702</p><h3>Opvolger en voorganger</h3><p>De opvolger van n is n+1. Voor n&gt;0 is de voorganger n−1.</p><div class="callout"><strong>Stelling</strong><p>Voor natuurlijke getallen met evenveel cijfers bepaalt het eerste verschillende cijfer van links de ordening.</p><p><strong>Bewijsschema:</strong> de overeenkomstige macht van 10 is groter dan de som van alle lagere plaatswaarden samen.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>Meer cijfers na de komma betekent niet automatisch een groter getal: <span class="formula-inline">0{,}9 &gt; 0{,}12345</span>.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Vergelijk eerst het aantal cijfers.</li>
    <li>Zijn de aantallen gelijk, vergelijk dan van links naar rechts.</li>
    <li>Gebruik bij het eerste verschil de plaatswaarde om de ordening te bepalen.</li>
    <li>Controleer de uitkomst eventueel op de getallenlijn.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Plaatswaarde en de getallenlijn geven een systematische manier om natuurlijke getallen te ordenen.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.2 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.3</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.3", title:"Optellen en aftrekken", goal:"Waarom hebben optellen en aftrekken verschillende eigenschappen, en hoe hangen beide bewerkingen samen?", theory:/* html */`
<h2>Optellen en aftrekken</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat betekent optellen en aftrekken?</li><li>Waarom is optellen commutatief maar aftrekken niet?</li><li>Hoe controleren we een aftrekking?</li></ul><h3>Optellen</h3><p>In <span class="formula-inline">7+5=12</span> zijn 7 en 5 termen en 12 de som. We kunnen de termen omwisselen:</p><p class="formula">a+b=b+a</p><p>Dit heet de <strong>commutatieve eigenschap</strong>.</p><h3>Aftrekken</h3><p>Aftrekken maakt een verschil:</p><p class="formula">12-5=7</p><p>en is de inverse van optellen:</p><p class="formula">a-b=c \\iff c+b=a</p><div class="callout"><strong>Stelling</strong><p>Optellen is commutatief.</p><p><strong>Bewijsschema:</strong> bij het samenvoegen van twee eindige hoeveelheden verandert de totale hoeveelheid niet wanneer de groepen van volgorde wisselen.</p></div><p>0 is het neutrale element: <span class="formula-inline">a+0=a</span>.</p>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>Aftrekken is niet commutatief: <span class="formula-inline">12-5 \\neq 5-12</span>.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Vertaal de situatie naar een optelling of aftrekking.</li>
    <li>Voer de bewerking uit.</li>
    <li>Controleer een aftrekking met de omgekeerde optelling.</li>
    <li>Let erop dat omwisselen bij aftrekken het antwoord verandert.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Optellen en aftrekken zijn inverse bewerkingen, maar hebben niet dezelfde rekenwetten.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.3 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.4</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.4", title:"Vermenigvuldigen en delen", goal:"Hoe hangen vermenigvuldigen, delen en delen met rest samen, en waarom is delen door nul onmogelijk?", theory:/* html */`
<h2>Vermenigvuldigen en delen</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Hoe is vermenigvuldigen verbonden met herhaald optellen?</li><li>Waarom zijn vermenigvuldigen en delen inverse bewerkingen?</li><li>Wat betekent een rest?</li><li>Waarom mag je niet delen door nul?</li></ul><h3>Vermenigvuldigen</h3><p class="formula">4\\times3=3+3+3+3=12</p><p>4 en 3 zijn factoren; 12 is het product. Vermenigvuldigen is commutatief en heeft 1 als neutraal element.</p><h3>Delen</h3><p class="formula">12\\div3=4 \\iff 3\\times4=12</p><h3>Delen met rest</h3><p class="formula">14=3\\times4+2</p><p>Algemeen: <span class="formula-inline">a=qd+r</span> met <span class="formula-inline">0\\le r&lt;d</span>.</p><h3>Delen door nul</h3><div data-widget="divisionZero"></div><p><span class="formula-inline">6\\div0</span> bestaat niet. Bij <span class="formula-inline">0\\div0</span> is er geen uniek antwoord.</p><div class="callout"><strong>Stelling</strong><p>De rest bij een gehele deling is altijd kleiner dan de deler.</p><p><strong>Bewijs:</strong> als <span class="formula-inline">r\\ge d</span>, kan nog een volledige groep van grootte d worden gevormd.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>Delen is niet commutatief: <span class="formula-inline">12\\div3=4</span> maar <span class="formula-inline">3\\div12=0{,}25</span>.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Bepaal of je moet groeperen, vermenigvuldigen of verdelen.</li>
    <li>Bij een deling met rest bepaal je eerst het grootste volledige quotiënt.</li>
    <li>Schrijf de rest kleiner dan de deler.</li>
    <li>Controleer met deler × quotiënt + rest = deeltal.</li>
    <li>Deel nooit door nul.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Vermenigvuldigen en delen zijn inverse bewerkingen; bij een gehele deling beschrijft de rest wat overblijft.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.4 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.5</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.5", title:"Negatieve getallen en gehele getallen", goal:"Waarom moeten we de natuurlijke getallen uitbreiden, en hoe helpen tegengestelde getallen en absolute waarde ons rekenen?", theory:/* html */`
<h2>Negatieve getallen en gehele getallen</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Waarom is de verzameling van natuurlijke getallen niet gesloten onder aftrekken?</li><li>Hoe breiden negatieve getallen de getallenlijn uit?</li><li>Hoe werken absolute waarde en tekens?</li></ul><h3>Waarom een uitbreiding?</h3><p><span class="formula-inline">3-5</span> heeft geen antwoord in de natuurlijke getallen. We voegen negatieve gehele getallen toe:</p><p class="formula">\\mathbb{Z}=\\{\\ldots,-3,-2,-1,0,1,2,3,\\ldots\\}</p><div data-widget="ints"></div><h3>Tegengestelde getallen</h3><p class="formula">a+(-a)=0</p><h3>Absolute waarde</h3><p>De absolute waarde is de afstand tot nul:</p><p class="formula">|5|=5 \\; |-5|=5</p><h3>Rekenen met tekens</h3><p>Aftrekken is optellen van het tegenovergestelde:</p><p class="formula">a-b=a+(-b)</p><p>Bij vermenigvuldigen en delen geven gelijke tekens een positief resultaat en verschillende tekens een negatief resultaat.</p><div class="callout"><strong>Stelling</strong><p>Voor ieder geheel getal a geldt <span class="formula-inline">a+(-a)=0</span>.</p><p><strong>Bewijs:</strong> −a is per definitie het additieve inverse van a.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li><span class="formula-inline">|-8|=8</span>, dus absolute waarde is niet hetzelfde als het oorspronkelijke getal.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Plaats de getallen op de getallenlijn.</li>
    <li>Gebruik het tegenovergestelde om aftrekken als optellen te schrijven.</li>
    <li>Gebruik absolute waarde als afstand tot nul.</li>
    <li>Bepaal bij vermenigvuldigen en delen eerst het teken en daarna de absolute waarden.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>De gehele getallen breiden de natuurlijke getallen uit zodat aftrekkingen zoals 3 − 5 een plaats krijgen.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.5 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.6</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.6", title:"Breuken: een geheel verdelen", goal:"Hoe beschrijft een breuk een geheel dat in gelijke delen is verdeeld, en waarom is een breuk ook een getal?", theory:/* html */`
<h2>Breuken: een geheel verdelen</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Waarom moeten breuken uit gelijke delen bestaan?</li><li>Wat vertellen teller en noemer?</li><li>Waarom is een breuk ook een getal?</li></ul><h3>Een geheel verdelen</h3><p>Een geheel verdeeld in vier gelijke delen geeft stukken van <span class="formula-inline">\\frac{1}{4}</span>. Drie stukken vormen <span class="formula-inline">\\frac{3}{4}</span>.</p><div data-widget="fractionWhole"></div><div class="callout"><strong>Definitie</strong><p>Voor gehele <span class="formula-inline">a</span> en <span class="formula-inline">b\\neq0</span> stelt <span class="formula-inline">\\frac{a}{b}</span> het quotiënt van a en b voor.</p></div><h3>Teller en noemer</h3><p>In <span class="formula-inline">\\frac{3}{5}</span> is 3 de teller en 5 de noemer. De noemer bepaalt de grootte van de gelijke delen; de teller hoeveel delen we nemen.</p><h3>Breuken op de getallenlijn</h3><div data-widget="fractionNumberLine"></div><p><span class="formula-inline">\\frac{1}{2}</span> ligt tussen 0 en 1; <span class="formula-inline">\\frac{5}{4}</span> ligt rechts van 1.</p><h3>Gelijkwaardige breuken</h3><div data-widget="equivalentFractions"></div><p class="formula">\\frac{a}{b}=\\frac{ac}{bc}</p><div class="callout"><strong>Stelling</strong><p>Voor <span class="formula-inline">b\\neq0</span> en <span class="formula-inline">c\\neq0</span> geldt <span class="formula-inline">\\frac{a}{b}=\\frac{ac}{bc}</span>.</p><p><strong>Bewijs:</strong> <span class="formula-inline">\\frac{c}{c}=1</span>, dus vermenigvuldigen met <span class="formula-inline">\\frac{c}{c}</span> verandert de waarde niet.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li><span class="formula-inline">\\frac{1}{2}\\neq\\frac{2}{2}</span>. Alleen teller én noemer met dezelfde factor veranderen is geldig.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Bepaal eerst in hoeveel gelijke delen het geheel wordt verdeeld.</li>
    <li>Bepaal daarna hoeveel delen worden genomen.</li>
    <li>Plaats de breuk eventueel op de getallenlijn.</li>
    <li>Controleer of teller en noemer de bedoelde rollen hebben.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Een breuk beschrijft een aantal gelijke delen en stelt tegelijk een getal met een vaste plaats op de getallenlijn voor.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.6 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.7</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.7", title:"Rekenen met breuken", goal:"Waarom werken de rekenregels voor breuken zoals ze doen, en hoe kunnen we ermee rekenen zonder hun betekenis te verliezen?", theory:/* html */`
<h2>Rekenen met breuken</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Hoe vereenvoudigen we breuken?</li><li>Waarom moeten noemers gelijk zijn bij optellen en aftrekken?</li><li>Waarom vermenigvuldigen we teller met teller?</li><li>Waarom is delen door een breuk vermenigvuldigen met het omgekeerde?</li></ul><h3>Vereenvoudigen</h3><p class="formula">\\frac{18}{24}=\\frac{3}{4}</p><p>Een breuk is volledig vereenvoudigd wanneer teller en noemer geen gemeenschappelijke deler groter dan 1 hebben.</p><h3>Vergelijken</h3><div data-widget="compareFractions"></div><p>Bij gelijke noemers vergelijk je tellers; bij verschillende noemers maak je ze gelijknamig of gebruik je de getallenlijn.</p><h3>Optellen en aftrekken</h3><p class="formula">\\frac{2}{7}+\\frac{3}{7}=\\frac{5}{7}</p><p class="formula">\\frac{1}{2}+\\frac{1}{3}=\\frac{3}{6}+\\frac{2}{6}=\\frac{5}{6}</p><h3>Vermenigvuldigen</h3><p class="formula">\\frac{a}{b}\\times\\frac{c}{d}=\\frac{ac}{bd}</p><p>Bijvoorbeeld <span class="formula-inline">\\frac{1}{2}\\times\\frac{3}{4}=\\frac{3}{8}</span>.</p><h3>Delen</h3><p class="formula">\\frac{a}{b}\\div\\frac{c}{d}=\\frac{a}{b}\\times\\frac{d}{c}</p><div class="callout"><strong>Stelling</strong><p>Delen door een niet-nulbreuk is vermenigvuldigen met het omgekeerde.</p><p><strong>Bewijsschema:</strong> vermenigvuldigen met de inverse is precies de bewerking die de deler terug naar 1 brengt.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li><span class="formula-inline">\\frac{1}{2}+\\frac{1}{3}\\neq\\frac{2}{5}</span>: noemers beschrijven de grootte van de stukken.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Vereenvoudig eerst wanneer dat mogelijk is.</li>
    <li>Maak bij optellen en aftrekken de noemers gelijk.</li>
    <li>Vermenigvuldig bij breuken teller met teller en noemer met noemer.</li>
    <li>Vervang delen door een breuk door vermenigvuldigen met het omgekeerde.</li>
    <li>Vereenvoudig het eindresultaat.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>De rekenregels voor breuken volgen uit de betekenis van teller, noemer en gelijkwaardige breuken.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.7 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.8</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.8", title:"Gemengde getallen, decimalen en percentages", goal:"Hoe kunnen we hetzelfde getal schrijven als gemengd getal, decimaal en percentage, en wat zegt dat over procentuele verandering?", theory:/* html */`
<h2>Gemengde getallen, decimalen en percentages</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Hoe schrijven we een onechte breuk als gemengd getal?</li><li>Hoe zijn breuken en decimalen verbonden?</li><li>Wat betekent procent letterlijk?</li></ul><h3>Gemengde getallen</h3><p class="formula">\\frac{7}{4}=1\\frac{3}{4}</p><p class="formula">2\\frac{1}{3}=\\frac{7}{3}</p><h3>Decimalen als breuken</h3><p class="formula">0{,}75=\\frac{75}{100}=\\frac{3}{4}</p><p class="formula">2{,}35=\\frac{235}{100}=\\frac{47}{20}</p><h3>Repeterende decimalen</h3><p class="formula">\\frac{1}{3}=0{,}333\\ldots</p><p>Een oneindige decimaal is dus niet automatisch irrationaal.</p><h3>Percentages</h3><p>Procent betekent per honderd:</p><p class="formula">25\\%=\\frac{25}{100}=0{,}25=\\frac{1}{4}</p><p>100% stelt het geheel voor; 125% is 1,25 keer het geheel.</p><h3>Procentuele verandering</h3><p>20% stijging betekent vermenigvuldigen met 1,20; 20% daling betekent vermenigvuldigen met 0,80.</p><div class="callout"><strong>Stelling</strong><p>Elke eindige decimale schrijfwijze stelt een rationaal getal voor.</p><p><strong>Bewijs:</strong> met n cijfers na de komma is het getal een geheel getal gedeeld door <span class="formula-inline">10^n</span>.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li><span class="formula-inline">\\frac{1}{3}=0{,}333\\ldots</span> heeft oneindig veel decimalen en is toch rationaal.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Kies de schrijfwijze die de situatie het duidelijkst maakt.</li>
    <li>Zet een breuk om via een passende noemer of deling.</li>
    <li>Gebruik per honderd om een percentage te interpreteren.</li>
    <li>Bij procentuele verandering vergelijk je met de oorspronkelijke waarde.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Breuk, decimaal en percentage zijn verschillende schrijfwijzen van dezelfde waarde.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.8 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.9</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.9", title:"Rationale getallen", goal:"Wat maakt een getal rationaal, en hoe zien we rationale getallen op de getallenlijn?", theory:/* html */`
<h2>Rationale getallen</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat maakt een getal rationaal?</li><li>Waarom zijn alle gehele getallen rationaal?</li><li>Hoe gedragen rationale getallen zich op de getallenlijn?</li></ul><h3>De rationale getallen</h3><p>Een getal is rationaal als het geschreven kan worden als:</p><p class="formula">\\frac{a}{b},\\; a,b\\in\\mathbb{Z},\\; b\\neq0</p><p>Elk geheel getal is rationaal: <span class="formula-inline">-7=\\frac{-7}{1}</span>. Dus <span class="formula-inline">\\mathbb{Z}\\subset\\mathbb{Q}</span>.</p><h3>Dezelfde waarde, verschillende breuken</h3><p><span class="formula-inline">\\frac{1}{2}</span>, <span class="formula-inline">\\frac{2}{4}</span> en <span class="formula-inline">\\frac{50}{100}</span> zijn verschillende schrijfwijzen van hetzelfde rationale getal.</p><h3>Dichtheid</h3><p>Tussen <span class="formula-inline">\\frac{1}{2}</span> en <span class="formula-inline">\\frac{3}{4}</span> ligt bijvoorbeeld het gemiddelde <span class="formula-inline">\\frac{5}{8}</span>.</p><div class="callout"><strong>Stelling</strong><p>Tussen twee verschillende rationale getallen ligt altijd een rationaal getal.</p><p><strong>Bewijs:</strong> voor <span class="formula-inline">a&lt;b</span> is <span class="formula-inline">\\frac{a+b}{2}</span> rationaal en strikt groter dan a en kleiner dan b.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>Er bestaat geen volgende rationaal getal: tussen twee rationale getallen liggen altijd weer andere rationale getallen.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Schrijf het getal als a/b met gehele a en b ≠ 0.</li>
    <li>Vereenvoudig de breuk indien nodig.</li>
    <li>Gebruik de getallenlijn om de positie te interpreteren.</li>
    <li>Controleer of verschillende breuken dezelfde waarde voorstellen.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Een rationaal getal is een quotiënt van twee gehele getallen met een niet-nul noemer.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.9 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.10</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.10", title:"Verhoudingen, evenredigheid en schaal", goal:"Wanneer blijven twee grootheden in dezelfde verhouding, en hoe herkennen we directe evenredigheid?", theory:/* html */`
<h2>Verhoudingen, evenredigheid en schaal</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat is een verhouding?</li><li>Wanneer blijven hoeveelheden in dezelfde verhouding?</li><li>Wat betekent recht evenredig?</li><li>Hoe werkt schaal?</li></ul><h3>Verhouding</h3><p>Bij 2 rode en 3 blauwe ballen is rood:blauw 2:3. De volgorde is belangrijk.</p><h3>Gelijkwaardige verhoudingen</h3><p class="formula">2:3=4:6=10:15</p><h3>Directe evenredigheid</h3><p>Als één broodje €2 kost:</p><p class="formula">\\mathrm{prijs}=2\\times\\mathrm{aantal}</p><p>Algemeen:</p><p class="formula">y=kx</p><p>De constante k is de evenredigheidsconstante.</p><div class="callout"><strong>Stelling</strong><p>Als <span class="formula-inline">y=kx</span>, dan zijn x en y recht evenredig.</p><p><strong>Bewijs:</strong> vermenigvuldiging van x met factor c vermenigvuldigt y automatisch met dezelfde factor.</p></div><h3>Schaal</h3><p>Schaal 1:100 betekent dat 1 cm op het plan 100 cm in werkelijkheid is.</p>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>Bij <span class="formula-inline">y=5+2x</span> is <span class="formula-inline">\\frac{y}{x}</span> niet constant; een vaste startkost maakt het verband niet recht evenredig.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Bepaal welke twee grootheden worden vergeleken.</li>
    <li>Controleer of dezelfde vermenigvuldigingsfactor op beide grootheden werkt.</li>
    <li>Bepaal bij y = kx de constante k.</li>
    <li>Controleer bij praktische problemen de eenheden en schaal.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Bij directe evenredigheid verandert de ene grootheid met dezelfde factor als de andere.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.10 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.11</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.11", title:"Delers en deelbaarheid", goal:"Hoe kunnen we met delers, veelvouden en deelbaarheidsregels de structuur van gehele getallen snel herkennen?", theory:/* html */`
<h2>Delers en deelbaarheid</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat is een deler en wat is een veelvoud?</li><li>Hoe herkennen we deelbaarheid?</li><li>Waarom werken deelbaarheidsregels?</li></ul><h3>Delers en veelvouden</h3><p>3 is een deler van 12 omdat <span class="formula-inline">12=3\\times4</span>. 12 is een veelvoud van 3.</p><h3>Deelbaarheidsregels</h3><ul><li>2: laatste cijfer even;</li><li>5: laatste cijfer 0 of 5;</li><li>10: laatste cijfer 0;</li><li>3 en 9: cijfersom deelbaar;</li><li>4: laatste twee cijfers deelbaar door 4.</li></ul><div class="callout"><strong>Stelling</strong><p>Een geheel getal is deelbaar door 3 als en slechts als zijn cijfersom deelbaar is door 3.</p><p><strong>Bewijsschema:</strong> <span class="formula-inline">10\\equiv1\\pmod{3}</span>, dus ook iedere macht van 10 is congruent met 1. Het getal en zijn cijfersom hebben dezelfde rest modulo 3.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>Een getal met meer cijfers is niet daarom minder of meer deelbaar; 1 002 is deelbaar door 3 en 100 niet.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Zoek eerst naar eenvoudige delers of veelvouden.</li>
    <li>Gebruik de passende deelbaarheidsregel.</li>
    <li>Combineer regels wanneer een getal door een samengesteld getal moet delen.</li>
    <li>Controleer een gevonden deler eventueel met een vermenigvuldiging.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Delers en veelvouden maken deelbaarheid zichtbaar en deelbaarheidsregels versnellen het onderzoek.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.11 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.12</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.12", title:"Priemgetallen en unieke factorisatie", goal:"Waarom zijn priemgetallen de bouwstenen van natuurlijke getallen, en waarom is de priemfactorisatie uniek?", theory:/* html */`
<h2>Priemgetallen en unieke factorisatie</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat is een priemgetal?</li><li>Waarom is 1 geen priemgetal?</li><li>Hoe ontbinden we een getal in priemfactoren?</li><li>Waarom is die ontbinding uniek?</li></ul><h3>Priemgetallen</h3><p>Een priemgetal is een natuurlijk getal groter dan 1 met precies twee positieve delers: 1 en zichzelf. 1 is dus noch priem, noch samengesteld.</p><h3>Factorisatie</h3><p class="formula">60=2^2\\times3\\times5</p><h3>Fundamentele stelling van de rekenkunde</h3><div class="callout"><strong>Stelling</strong><p>Elk natuurlijk getal groter dan 1 heeft een unieke priemfactorisatie, afgezien van de volgorde.</p><p><strong>Bewijsschema:</strong> herhaalde ontbinding stopt omdat positieve factoren kleiner worden. Uniciteit volgt doordat een priem die een product deelt, één van de factoren deelt; herhaald toepassen dwingt dezelfde priemfactoren af.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>1 is geen priemgetal: het heeft slechts één positieve deler.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Controleer of het getal groter is dan 1.</li>
    <li>Zoek een geschikte deler.</li>
    <li>Ontbind verder totdat alle factoren priem zijn.</li>
    <li>Schrijf de priemfactoren systematisch en controleer door terug te vermenigvuldigen.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Priemgetallen zijn de bouwstenen van natuurlijke getallen groter dan 1 en hun factorisatie is uniek.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.12 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.13</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.13", title:"GGD, KGV en Euclides", goal:"Hoe kunnen we gemeenschappelijke delers en veelvouden systematisch vinden, en waarom werkt het algoritme van Euclides?", theory:/* html */`
<h2>GGD, KGV en Euclides</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat zijn GGD en KGV?</li><li>Hoe leiden we ze af uit priemfactorisatie?</li><li>Waarom werkt Euclides?</li></ul><h3>GGD</h3><p class="formula">24=2^3\\times3 \\; 36=2^2\\times3^2</p><p>Dus <span class="formula-inline">\\operatorname{GGD}(24,36)=2^2\\times3=12</span>.</p><h3>KGV</h3><p>Voor het KGV nemen we de grootste exponent van iedere priemfactor:</p><p class="formula">\\operatorname{KGV}(24,36)=2^3\\times3^2=72</p><h3>Algoritme van Euclides</h3><p class="formula">48=2\\times18+12</p><p class="formula">18=1\\times12+6</p><p class="formula">12=2\\times6+0</p><p>De laatste niet-nul rest is de GGD: 6.</p><div class="callout"><strong>Stelling</strong><p>Voor <span class="formula-inline">a&gt;b&gt;0</span> geldt <span class="formula-inline">\\operatorname{GGD}(a,b)=\\operatorname{GGD}(b,a\\bmod b)</span>.</p><p><strong>Bewijs:</strong> de gemeenschappelijke delers van a en b zijn precies de gemeenschappelijke delers van b en <span class="formula-inline">a-qb</span>. In de tweede GGD is de rest dus <span class="formula-inline">a\\bmod b</span>.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>GGD en KGV zijn niet hetzelfde begrip: voor 12 en 18 zijn ze respectievelijk 6 en 36.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Kies voor kleine getallen delers of veelvouden.</li>
    <li>Gebruik priemfactorisatie wanneer dat overzichtelijker is.</li>
    <li>Bij de GGD neem je de gemeenschappelijke factoren.</li>
    <li>Bij het KGV neem je alle benodigde factoren.</li>
    <li>Bij Euclides herhaal je delen met rest totdat de rest nul is.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>GGD en KGV beantwoorden verschillende gemeenschappelijke-vragen; Euclides maakt de GGD systematisch berekenbaar.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.13 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.14</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.14", title:"Machten en machtswetten", goal:"Hoe kunnen we herhaalde vermenigvuldiging compact schrijven, en waarom werken de machtswetten?", theory:/* html */`
<h2>Machten en machtswetten</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat betekenen grondtal en exponent?</li><li>Waarom tellen exponenten op bij vermenigvuldigen?</li><li>Waarom trekken we exponenten af bij delen?</li><li>Waarom is een niet-nul getal tot de macht nul gelijk aan 1?</li></ul><h3>Herhaalde vermenigvuldiging</h3><p class="formula">2\\times2\\times2\\times2=2^4=16</p><h3>Productregel</h3><p class="formula">a^m\\times a^n=a^{m+n}</p><p>De factoren uit beide machten worden samengevoegd.</p><h3>Quotiëntregel</h3><p class="formula">a^m\\div a^n=a^{m-n},\\; a\\neq0</p><h3>Macht van een macht</h3><p class="formula">(a^m)^n=a^{mn}</p><h3>Exponent nul</h3><p class="formula">a^0=1,\\; a\\neq0</p><p>Want <span class="formula-inline">a^n\\div a^n=1</span> en volgens de quotiëntregel is dat <span class="formula-inline">a^0</span>.</p><div class="callout"><strong>Stelling</strong><p><span class="formula-inline">a^m\\times a^n=a^{m+n}</span> voor een vast grondtal.</p><p><strong>Bewijs:</strong> schrijf beide machten als producten; samen zijn er m+n factoren.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>Bij verschillende grondtallen mag je exponenten niet optellen: <span class="formula-inline">2^2\\times3^2\\neq5^4</span>.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Identificeer grondtal en exponent.</li>
    <li>Schrijf de macht desnoods als herhaalde vermenigvuldiging.</li>
    <li>Gebruik bij hetzelfde grondtal de passende machtsregel.</li>
    <li>Controleer bij exponent nul dat het grondtal niet nul is.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Machten comprimeren herhaalde vermenigvuldiging en hun rekenregels volgen uit het tellen van factoren.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.14 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.15</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.15", title:"Wortels en omgekeerde bewerkingen", goal:"Hoe draait worteltrekken het kwadrateren om, en hoe kunnen we wortels schatten en vereenvoudigen?", theory:/* html */`
<h2>Wortels en omgekeerde bewerkingen</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat vraagt een vierkantswortel?</li><li>Waarom is de vierkantswortel van 25 gelijk aan 5 en niet aan plus of min 5?</li><li>Hoe schatten en vereenvoudigen we wortels?</li></ul><h3>De omgekeerde vraag</h3><p class="formula">5^2=25\\Rightarrow\\sqrt{25}=5</p><p>Het wortelteken betekent de niet-negatieve vierkantswortel. Als vergelijking heeft <span class="formula-inline">x^2=25</span> wel twee oplossingen: <span class="formula-inline">x=5</span> of <span class="formula-inline">x=-5</span>.</p><h3>Wortels schatten</h3><p class="formula">4^2&lt;20&lt;5^2\\Rightarrow4&lt;\\sqrt{20}&lt;5</p><h3>Vereenvoudigen</h3><p class="formula">\\sqrt{72}=\\sqrt{36\\times2}=6\\sqrt{2}</p><div class="callout"><strong>Stelling</strong><p>Voor niet-negatieve a en b geldt <span class="formula-inline">\\sqrt{ab}=\\sqrt{a}\\,\\sqrt{b}</span>.</p><p><strong>Bewijsschema:</strong> beide zijden zijn niet-negatief en hebben hetzelfde kwadraat ab; de niet-negatieve wortel is uniek.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li><span class="formula-inline">\\sqrt{a+b}=\\sqrt{a}+\\sqrt{b}</span> is in het algemeen fout.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Zoek eerst twee naburige kwadraten.</li>
    <li>Plaats de wortel tussen de bijbehorende gehele getallen.</li>
    <li>Controleer een benadering door te kwadrateren.</li>
    <li>Zoek bij vereenvoudigen een volmaakt kwadraat als factor.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>De vierkantswortel is de niet-negatieve omgekeerde bewerking van kwadrateren.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.15 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.16</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.16", title:"Irrationale getallen", goal:"Waarom kan wortel 2 niet als breuk worden geschreven, en hoe herkennen we irrationale getallen?", theory:/* html */`
<h2>Irrationale getallen</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Waarom is wortel 2 geen rationaal getal?</li><li>Wat vertelt een oneindige decimale ontwikkeling?</li><li>Waarom is oneindig niet hetzelfde als irrationaal?</li></ul><h3>Wortel 2 is irrationaal</h3><p>Stel <span class="formula-inline">\\sqrt{2}=\\frac{p}{q}</span> in vereenvoudigde vorm. Dan geeft kwadrateren <span class="formula-inline">2q^2=p^2</span>. Dus p is even, <span class="formula-inline">p=2k</span>. Dan <span class="formula-inline">q^2=2k^2</span> en dus is q ook even. Dat spreekt de vereenvoudigde vorm tegen.</p><div class="callout"><strong>Conclusie</strong><p><span class="formula-inline">\\sqrt{2}</span> is irrationaal.</p></div><h3>Decimalen</h3><p class="formula">\\sqrt{2}\\approx1{,}41421356\\ldots</p><p>Rationale getallen hebben een eindige of repeterende decimale ontwikkeling; irrationale getallen een oneindige niet-repeterende ontwikkeling.</p><div class="callout"><strong>Stelling</strong><p><span class="formula-inline">\\sqrt{2}</span> is irrationaal.</p><p><strong>Bewijs:</strong> het tegenspraakargument hierboven dwingt p en q beide even te zijn.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li><span class="formula-inline">\\frac{1}{3}=0{,}333\\ldots</span> heeft oneindig veel decimalen en is toch rationaal.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Schrijf het getal als breuk als je wilt testen of het rationaal is.</li>
    <li>Onderzoek bij een wortel of een rationele representatie mogelijk is.</li>
    <li>Let bij decimalen op eindigheid of herhaling.</li>
    <li>Verwar oneindig veel decimalen niet met irrationaliteit.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Irrationale getallen kunnen niet als breuk van gehele getallen worden geschreven; wortel 2 is een fundamenteel voorbeeld.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.16 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.17</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.17", title:"De reële getallen", goal:"Hoe hangen natuurlijke, gehele, rationale en reële getallen samen, en waarom is de getallenlijn dicht?", theory:/* html */`
<h2>De reële getallen</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Welke getallen hebben we opgebouwd?</li><li>Hoe passen rationale en irrationale getallen samen?</li><li>Waarom noemen we deze verzameling reëel?</li></ul><h3>De keten</h3><p class="formula">\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}</p><p>We breidden de natuurlijke getallen uit om aftrekkingen op te lossen, de gehele getallen om breuken als getallen te behandelen, en de rationale getallen om irrationale waarden zoals <span class="formula-inline">\\sqrt{2}</span> toe te voegen aan de getallenlijn.</p><h3>Dichtheid</h3><p>Tussen twee verschillende reële getallen ligt altijd hun gemiddelde.</p><div class="callout"><strong>Stelling</strong><p>Als <span class="formula-inline">a&lt;b</span>, dan geldt <span class="formula-inline">a&lt;\\frac{a+b}{2}&lt;b</span>.</p><p><strong>Bewijs:</strong> uit <span class="formula-inline">a&lt;b</span> volgt <span class="formula-inline">2a&lt;a+b&lt;2b</span>; delen door 2 behoudt de ongelijkheid.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>Er is geen volgende reële waarde na 1; tussen 1 en elk groter getal ligt alweer een reëel getal.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Bepaal eerst tot welke getallenverzameling een getal behoort.</li>
    <li>Gebruik de inclusieketen om verzamelingen te vergelijken.</li>
    <li>Gebruik gemiddelden om een getal tussen twee reële getallen te vinden.</li>
    <li>Plaats de waarden op de getallenlijn.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>De reële getallen omvatten rationale en irrationale getallen en vormen een dichte getallenlijn.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.17 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.18</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.18", title:"Andere talstelsels en getalrepresentatie", goal:"Hoe kan hetzelfde getal verschillende schrijfwijzen hebben, en hoe werkt plaatswaarde in andere talstelsels?", theory:/* html */`
<h2>Andere talstelsels en getalrepresentatie</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Is een getal hetzelfde als zijn schrijfwijze?</li><li>Hoe werkt een talstelsel met een andere basis?</li><li>Waarom is binair belangrijk in computers?</li></ul><h3>Basis</h3><p>In basis 10 zijn posities machten van 10; in basis 2 machten van 2.</p><p class="formula">(1011)_2=1\\times2^3+0\\times2^2+1\\times2+1=11_{10}</p><p>Het getal verandert niet door de representatie.</p><h3>Algemene plaatswaarde</h3><p class="formula">(a_2a_1a_0)_b=a_2b^2+a_1b+a_0</p><div class="callout"><strong>Stelling</strong><p>Een eindige positierepresentatie in basis b is de som van de cijfers maal de overeenkomstige machten van b.</p><p><strong>Bewijs:</strong> dit is de definitie van plaatswaarde in een positiestelsel.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li><span class="formula-inline">(10)_2</span> betekent niet tien: <span class="formula-inline">(10)_2=(2)_{10}</span>.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Bepaal de basis van het talstelsel.</li>
    <li>Koppel ieder cijfer aan zijn macht van de basis.</li>
    <li>Tel de plaatswaarden op.</li>
    <li>Controleer de representatie door terug te converteren.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Een getal is onafhankelijk van zijn representatie; in een positiestelsel bepaalt de basis de plaatswaarden.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.18 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.19</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.19", title:"Modulo en rekenen met resten", goal:"Hoe kunnen we resten als wiskundig object beschrijven, en hoe helpt modulo ons om patronen te herkennen?", theory:/* html */`
<h2>Modulo en rekenen met resten</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Hoe behandelen we een rest als wiskundig object?</li><li>Wat betekent congruent modulo n?</li><li>Hoe helpt modulo bij patronen en deelbaarheid?</li></ul><h3>Resten</h3><p class="formula">17=3\\times5+2</p><p>Daarom:</p><p class="formula">17\\equiv2\\pmod{5}</p><h3>Congruentie</h3><p class="formula">a\\equiv b\\pmod{n}\\iff n\\mid(a-b)</p><p>Bijvoorbeeld <span class="formula-inline">23\\equiv3\\pmod{10}</span>.</p><h3>Rekenen met modulo</h3><p>Congruenties mogen worden opgeteld en vermenigvuldigd.</p><div class="callout"><strong>Stelling</strong><p>Als <span class="formula-inline">a\\equiv b\\pmod{n}</span> en <span class="formula-inline">c\\equiv d\\pmod{n}</span>, dan <span class="formula-inline">a+c\\equiv b+d\\pmod{n}</span>.</p><p><strong>Bewijs:</strong> n deelt a−b en c−d, dus ook hun som.</p></div><h3>Klokrekenen</h3><p class="formula">10+5\\equiv3\\pmod{12}</p><p>Modulo beschrijft periodieke situaties.</p>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>14 en 2 zijn niet gewoon gelijk; ze zijn congruent modulo 12.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Bepaal de rest bij deling.</li>
    <li>Schrijf de congruentie modulo n.</li>
    <li>Gebruik optellen en vermenigvuldigen binnen dezelfde modulus.</li>
    <li>Controleer periodieke patronen via een passende modulus.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Modulo beschrijft resten en maakt periodieke patronen en deelbaarheid formeel hanteerbaar.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>In deze les hebben we 1.19 opgebouwd rond één centrale vraag. De volgende stap is <strong>1.20</strong>, waar we voortbouwen op deze kennis.</p>
</div>
` },
  { id:"1.20", title:"Afronden, schatten en wetenschappelijke notatie", goal:"Hoe kiezen we een passende nauwkeurigheid, schatten we uitkomsten en schrijven we grote en kleine getallen compact?", theory:/* html */`
<h2>Afronden, schatten en wetenschappelijke notatie</h2><p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat betekent een benadering?</li><li>Hoe kies je zinvolle nauwkeurigheid?</li><li>Hoe schrijven we grote en kleine getallen compact?</li></ul><h3>Afronden</h3><p>Kies eerst de plaats die je wilt behouden en kijk naar het eerste cijfer dat je weglaat.</p><p class="formula">7{,}386\\approx7{,}39</p><h3>Schatten</h3><p class="formula">198\\times49\\approx200\\times50=10\\,000</p><p>Een schatting helpt beoordelen of een antwoord redelijk is.</p><h3>Afrondingsfout</h3><p class="formula">|12{,}5-12{,}48|=0{,}02</p><h3>Wetenschappelijke notatie</h3><p class="formula">a\\times10^n,\\;1\\le a&lt;10</p><p class="formula">300\\,000\\,000=3\\times10^8</p><p class="formula">0{,}00045=4{,}5\\times10^{-4}</p><div class="callout"><strong>Stelling</strong><p>Elk positief reëel getal kan uniek worden geschreven als <span class="formula-inline">a\\times10^n</span> met <span class="formula-inline">1\\le a&lt;10</span> en geheel n.</p><p><strong>Bewijsschema:</strong> verplaats de komma tot precies één niet-nul cijfer vóór de komma staat; het aantal verplaatsingen bepaalt n en de beperking op a maakt de vorm uniek.</p></div><div class="callout insight"><strong>Fase 1 afgerond</strong><p>We gingen van tellen en plaatswaarde naar de gehele, rationale en reële getallen en onderzochten tegelijk de structuur van natuurlijke getallen via delers, priemfactorisatie, GGD, KGV en modulo.</p></div>
<h3>Veelgemaakte fouten</h3>
<ul>
  <li><span class="formula-inline">45\\times10^3</span> is niet genormaliseerd; wetenschappelijke notatie is <span class="formula-inline">4{,}5\\times10^4</span>.</li>
</ul>

<h3>Vaste werkwijze</h3>
<div class="callout">
  <p><strong>Vaste werkwijze</strong></p>
  <ol>
    <li>Bepaal eerst welke nauwkeurigheid nodig is.</li>
    <li>Kijk naar het eerste cijfer dat je weglaat.</li>
    <li>Gebruik afronding voor een snelle schatting.</li>
    <li>Schrijf grote of kleine waarden in genormaliseerde wetenschappelijke notatie.</li>
    <li>Controleer of de orde van grootte klopt.</li>
  </ol>
</div>

<h3>Samenvatting en verbinding</h3>
<p>Afronden en wetenschappelijke notatie maken nauwkeurigheid en orde van grootte expliciet.</p>
<div class="callout">
  <p><strong>Kernidee</strong></p>
  <p>Met deze les ronden we Fase 1 af. De opgebouwde getallenkennis vormt de basis voor Fase 2: algebra en geometrie.</p>
</div>
` }
];
