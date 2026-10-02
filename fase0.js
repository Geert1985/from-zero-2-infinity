/* Lesstof Fase 0 — Taal van de wiskunde. Breid theory/practice/exam hier uit. */
const MILESTONES_0 = [
  {
    id: "0.1",
    title: "Wiskundige uitspraken",
    goal: "Herken wiskundige uitspraken en onderscheid een uitspraak van een vraag, definitie of berekening.",
    theory: /* html */`
<h2>Wiskundige uitspraken</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Wat is een wiskundige uitspraak?</li>
  <li>Wanneer is een uitspraak waar of onwaar?</li>
  <li>Waarom is een voorbeeld geen bewijs?</li>
</ul>
<h3>Wat is een uitspraak?</h3>
<p>Een <strong>uitspraak</strong> is een zin waarvan we in principe kunnen bepalen of hij <strong>waar</strong> of <strong>onwaar</strong> is.</p>
<p class="formula">2 + 3 = 5</p>
<p>Dit is een ware uitspraak. Ook</p>
<p class="formula">7 is een even getal</p>
<p>is een uitspraak, maar deze is onwaar.</p>
<div class="callout"><strong>Definitie</strong><p>Een wiskundige uitspraak is een bewering waaraan precies één waarheidswaarde kan worden toegekend: waar of onwaar.</p></div>
<h3>Geen uitspraken</h3>
<p>Een vraag zoals <em>"Is 7 een priemgetal?"</em> is geen uitspraak. Een bevel of een uitdrukking zonder bewering is dat evenmin.</p>
<h3>Stelling</h3>
<p>Een uitspraak en haar ontkenning kunnen niet tegelijk waar zijn.</p>
<p><strong>Waarom klopt dit?</strong> Als een uitspraak waar is, beschrijft haar ontkenning precies het tegenovergestelde. De twee kunnen dus niet tegelijkertijd dezelfde situatie beschrijven.</p>
<h3>Tegenvoorbeeld</h3>
<p>De zin <em>"Alle natuurlijke getallen zijn even"</em> is geen bewijsbaar feit. Het getal 3 is een tegenvoorbeeld.</p>
<h3>Zelfstandig</h3>
<p>Bepaal welke zinnen uitspraken zijn en geef voor de uitspraken de waarheidswaarde: <span class="formula-inline">3 &lt; 8</span>, <span class="formula-inline">x+1=4</span>, <span class="formula-inline">Is 12 deelbaar door 3?</span>.</p>
    `
  },
  {
    id: "0.2",
    title: "Logische operatoren",
    goal: "Werk met niet, en, of en de logische structuur van samengestelde uitspraken.",
    theory: /* html */`
<h2>Logische operatoren</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul><li>Hoe combineren we uitspraken?</li><li>Wat betekent "en" precies?</li><li>Wat is het verschil tussen inclusief en exclusief "of"?</li></ul>
<h3>Niet, en, of</h3>
<p>Voor uitspraken <span class="formula-inline">P</span> en <span class="formula-inline">Q</span> gebruiken we logische operatoren:</p>
<ul><li><strong>niet P</strong>: <span class="formula-inline">¬P</span></li><li><strong>P en Q</strong>: <span class="formula-inline">P ∧ Q</span></li><li><strong>P of Q</strong>: <span class="formula-inline">P ∨ Q</span></li></ul>
<div class="callout"><strong>Definitie</strong><p><span class="formula-inline">P ∧ Q</span> is waar precies wanneer beide uitspraken waar zijn. <span class="formula-inline">P ∨ Q</span> is waar wanneer minstens één van beide waar is.</p></div>
<h3>De wetten van De Morgan</h3>
<p class="formula">¬(P ∧ Q) ⇔ (¬P ∨ ¬Q)</p>
<p class="formula">¬(P ∨ Q) ⇔ (¬P ∧ ¬Q)</p>
<p><strong>Waarom klopt dit?</strong> De eerste uitspraak zegt dat het onmogelijk is dat beide tegelijk waar zijn. Dat is precies hetzelfde als zeggen dat minstens één ervan niet waar is.</p>
<h3>Tegenvoorbeeld</h3>
<p>"Of" betekent in de wiskunde normaal gesproken <strong>minstens één</strong>, niet noodzakelijk precies één. Bij <span class="formula-inline">P ∨ Q</span> mogen P en Q dus allebei waar zijn.</p>
<h3>Zelfstandig</h3><p>Maak de waarheidstabel voor <span class="formula-inline">P ∧ ¬Q</span>.</p>
    `
  },
  {
    id: "0.3",
    title: "Implicatie en equivalentie",
    goal: "Lees implicaties correct, onderscheid de omkering en contrapositie en herken logische equivalentie.",
    theory: /* html */`
<h2>Implicatie en equivalentie</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul><li>Wat betekent "als ..., dan ..."?</li><li>Waarom is de omkering niet automatisch geldig?</li><li>Wanneer zijn twee uitspraken equivalent?</li></ul>
<h3>Implicatie</h3>
<p>De uitspraak <span class="formula-inline">P ⇒ Q</span> betekent: als P waar is, dan moet Q waar zijn.</p>
<div class="callout"><strong>Definitie</strong><p>Een implicatie is alleen onwaar wanneer P waar is en Q onwaar.</p></div>
<p>Uit <span class="formula-inline">P ⇒ Q</span> volgt altijd de contrapositie <span class="formula-inline">¬Q ⇒ ¬P</span>.</p>
<h3>Omkering</h3>
<p>De omkering <span class="formula-inline">Q ⇒ P</span> is een andere uitspraak. Zij volgt niet automatisch uit de oorspronkelijke implicatie.</p>
<h3>Equivalentie</h3>
<p><span class="formula-inline">P ⇔ Q</span> betekent dat beide richtingen gelden: <span class="formula-inline">P ⇒ Q</span> én <span class="formula-inline">Q ⇒ P</span>.</p>
<h3>Stelling</h3><p><span class="formula-inline">P ⇒ Q</span> is logisch equivalent aan <span class="formula-inline">¬Q ⇒ ¬P</span>.</p>
<p><strong>Waarom klopt dit?</strong> De enige situatie waarin de implicatie faalt is P waar en Q onwaar. De contrapositie faalt precies in dezelfde situatie.</p>
<h3>Tegenvoorbeeld</h3><p>Als een getal deelbaar is door 4, dan is het even. Maar uit "even" volgt niet dat het getal deelbaar is door 4: 6 is even maar niet deelbaar door 4.</p>
<h3>Zelfstandig</h3><p>Schrijf de omkering en contrapositie van: "Als n deelbaar is door 6, dan is n even." Bepaal welke bewering altijd geldig is.</p>
    `
  },
  {
    id: "0.4",
    title: "Kwantoren",
    goal: "Gebruik de kwantoren voor alle en er bestaat en ontken uitspraken met kwantoren correct.",
    theory: /* html */`
<h2>Kwantoren</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul><li>Hoe drukken we "voor elk" en "er bestaat" formeel uit?</li><li>Hoe ontken je een uitspraak met een kwantor?</li><li>Waarom is de volgorde van kwantoren belangrijk?</li></ul>
<h3>Universele en existentiële kwantor</h3>
<p><span class="formula">∀x</span> betekent "voor alle x" en <span class="formula">∃x</span> betekent "er bestaat een x".</p>
<div class="callout"><strong>Definitie</strong><p><span class="formula-inline">∀x P(x)</span> zegt dat P voor elk toegelaten x waar is. <span class="formula-inline">∃x P(x)</span> zegt dat er minstens één toegelaten x bestaat waarvoor P waar is.</p></div>
<h3>Negatie</h3>
<p>Belangrijk zijn:</p><p class="formula">¬(∀x P(x)) ⇔ ∃x ¬P(x)</p><p class="formula">¬(∃x P(x)) ⇔ ∀x ¬P(x)</p>
<p><strong>Waarom klopt dit?</strong> "Niet iedereen" betekent dat er minstens één uitzondering is. "Niemand" betekent dat voor iedereen de eigenschap ontbreekt.</p>
<h3>Tegenvoorbeeld</h3><p>De bewering "voor alle natuurlijke n geldt n² ≥ n+1" is fout; neem n=1.</p>
<h3>Zelfstandig</h3><p>Ontken: "Voor elk natuurlijk getal n bestaat een natuurlijk getal m zodat m&gt;n."</p>
    `
  },
  {
    id: "0.5",
    title: "Directe bewijzen",
    goal: "Bouw een direct bewijs op vanuit definities en bekende feiten.",
    theory: /* html */`
<h2>Directe bewijzen</h2>
<p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Hoe verschilt een bewijs van een voorbeeld?</li><li>Hoe begin je met de hypothese?</li><li>Hoe eindig je met precies de gewenste conclusie?</li></ul>
<h3>De structuur</h3>
<p>Bij een directe bewijsvoering neem je de hypothese aan en leid je stap voor stap de conclusie af.</p>
<div class="callout"><strong>Bewijsschema</strong><p>Neem aan dat P waar is. Gebruik definities en eerder bewezen resultaten. Leid Q af. Dus P ⇒ Q.</p></div>
<h3>Voorbeeld</h3><p>Bewijs: de som van twee even gehele getallen is even. Schrijf de getallen als <span class="formula-inline">2a</span> en <span class="formula-inline">2b</span>. Dan is <span class="formula-inline">2a+2b=2(a+b)</span>, dus de som is even.</p>
<h3>Stelling</h3><p>Een bewijs moet voor <strong>alle</strong> toegelaten gevallen werken; één berekening voor één getal bewijst geen universele uitspraak.</p>
<h3>Tegenvoorbeeld</h3><p>Uit 2, 4 en 6 kun je niet concluderen dat alle even getallen een bepaalde eigenschap hebben. Een bewijs moet het willekeurige geval behandelen.</p>
<h3>Zelfstandig</h3><p>Bewijs rechtstreeks dat de som van twee oneven gehele getallen even is.</p>
    `
  },
  {
    id: "0.6",
    title: "Bewijs door contrapositie",
    goal: "Gebruik contrapositie wanneer de ontkenning van de conclusie eenvoudiger te hanteren is.",
    theory: /* html */`
<h2>Bewijs door contrapositie</h2>
<p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat is contrapositie?</li><li>Waarom mag je ermee bewijzen?</li><li>Wanneer is deze methode handig?</li></ul>
<h3>De methode</h3>
<p>Om <span class="formula-inline">P ⇒ Q</span> te bewijzen, mag je de equivalente uitspraak <span class="formula-inline">¬Q ⇒ ¬P</span> bewijzen.</p>
<div class="callout"><strong>Stelling</strong><p><span class="formula-inline">P ⇒ Q</span> en <span class="formula-inline">¬Q ⇒ ¬P</span> zijn logisch equivalent.</p></div>
<h3>Voorbeeld</h3><p>Bewijs: als n² even is, dan is n even. Contrapositie: als n niet even is, dus n oneven, dan is n² oneven. Schrijf <span class="formula-inline">n=2k+1</span>; dan <span class="formula-inline">n²=4k²+4k+1=2(2k²+2k)+1</span>.</p>
<h3>Tegenvoorbeeld</h3><p>De omkering "als n even is, dan is n² even" is wel waar in dit voorbeeld, maar dat komt door een afzonderlijk argument. In het algemeen mag je een omkering nooit verwarren met contrapositie.</p>
<h3>Zelfstandig</h3><p>Gebruik contrapositie om te bewijzen: als n² oneven is, dan is n oneven.</p>
    `
  },
  {
    id: "0.7",
    title: "Bewijs uit het ongerijmde",
    goal: "Bewijs een uitspraak door tijdelijk de ontkenning aan te nemen en daaruit een tegenspraak af te leiden.",
    theory: /* html */`
<h2>Bewijs uit het ongerijmde</h2>
<p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Hoe kan een onmogelijke aanname een bewijs opleveren?</li><li>Wat is een tegenspraak?</li><li>Wanneer is reductio ad absurdum nuttig?</li></ul>
<h3>De methode</h3>
<p>Wil je P bewijzen, neem dan tijdelijk ¬P aan. Leid daaruit een tegenspraak af. Dan kan ¬P niet waar zijn en volgt P.</p>
<div class="callout"><strong>Bewijsschema</strong><p>Aanname: ¬P. Leid Q en ¬Q af. Dat is onmogelijk. Dus ¬P is fout en P is waar.</p></div>
<h3>Voorbeeld</h3><p>Een klassiek voorbeeld is het bewijs dat <span class="formula-inline">√2</span> irrationaal is. Veronderstel dat <span class="formula-inline">√2=a/b</span> in volledig vereenvoudigde vorm. Dan volgt dat zowel a als b even moeten zijn, in tegenspraak met de vereenvoudigde vorm.</p>
<h3>Tegenvoorbeeld</h3><p>Een losse onwaarschijnlijke uitkomst is geen tegenspraak. Er moet een echte logische onverenigbaarheid ontstaan.</p>
<h3>Zelfstandig</h3><p>Maak een bewijsschema voor de uitspraak dat er geen grootste natuurlijk getal bestaat.</p>
    `
  },
  {
    id: "0.8",
    title: "Wiskundige inductie",
    goal: "Bewijs uitspraken over alle natuurlijke getallen met een basisstap en een inductiestap.",
    theory: /* html */`
<h2>Wiskundige inductie</h2>
<p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Waarom zijn twee stappen voldoende?</li><li>Wat is de inductiehypothese?</li><li>Wat bewijst de methode precies?</li></ul>
<h3>Het principe</h3>
<div class="callout"><strong>Stelling</strong><p>Als P(0) waar is en uit P(k) volgt dat P(k+1) waar is voor elk natuurlijk k, dan is P(n) waar voor alle natuurlijke n.</p></div>
<h3>Waarom klopt dit?</h3><p>De basisstap zet de eerste dominosteen vast. De inductiestap zegt dat elke geldige steen de volgende geldig maakt. Daardoor volgt de uitspraak voor alle natuurlijke getallen.</p>
<h3>Voorbeeld</h3><p>Voor <span class="formula-inline">1+2+…+n=n(n+1)/2</span>: controleer n=1. Neem de formule aan voor k en tel k+1 erbij op. Dan ontstaat <span class="formula-inline">k(k+1)/2+(k+1)=(k+1)(k+2)/2</span>.</p>
<h3>Tegenvoorbeeld</h3><p>Alleen veel eerste gevallen controleren is geen inductiebewijs. Een patroon kan later breken.</p>
<h3>Zelfstandig</h3><p>Bewijs met inductie dat <span class="formula-inline">1+3+5+…+(2n−1)=n²</span>.</p>
    `
  },
  {
    id: "0.9",
    title: "Verzamelingen",
    goal: "Werk met verzamelingen, elementen, deelverzamelingen en de basisbewerkingen op verzamelingen.",
    theory: /* html */`
<h2>Verzamelingen</h2>
<p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat is een verzameling?</li><li>Wat betekent lidmaatschap?</li><li>Hoe combineren we verzamelingen?</li></ul>
<h3>Elementen en deelverzamelingen</h3><p>Een verzameling is een collectie objecten die we als geheel beschouwen. We schrijven <span class="formula-inline">x∈A</span> wanneer x een element van A is en <span class="formula-inline">A⊆B</span> wanneer elk element van A ook in B zit.</p>
<h3>Bewerkingen</h3><ul><li>unie: <span class="formula-inline">A∪B</span></li><li>doorsnede: <span class="formula-inline">A∩B</span></li><li>verschil: <span class="formula-inline">A\\B</span></li><li>complement: elementen buiten A binnen een afgesproken universum</li></ul>
<div class="callout"><strong>Stelling</strong><p>De doorsnede is commutatief: <span class="formula-inline">A∩B=B∩A</span>.</p></div>
<p><strong>Waarom klopt dit?</strong> Een element zit in A∩B precies wanneer het in A én in B zit. "A én B" is hetzelfde als "B én A".</p>
<h3>Tegenvoorbeeld</h3><p><span class="formula-inline">A∈B</span> betekent niet hetzelfde als <span class="formula-inline">A⊆B</span>. Een element en een verzameling zijn verschillende rollen.</p>
<h3>Zelfstandig</h3><p>Neem A={1,2,3} en B={3,4}. Bepaal A∪B, A∩B en A\\B.</p>
    `
  },
  {
    id: "0.10",
    title: "Relaties en equivalentieklassen",
    goal: "Begrijp relaties en herken wanneer een relatie een equivalentierelatie vormt.",
    theory: /* html */`
<h2>Relaties en equivalentieklassen</h2>
<p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Hoe kunnen we zeggen dat twee objecten bij elkaar horen?</li><li>Wat betekenen reflexief, symmetrisch en transitief?</li><li>Hoe ontstaan equivalentieklassen?</li></ul>
<h3>Relatie</h3><p>Een relatie R op een verzameling A koppelt elementen van A volgens een bepaalde regel. We schrijven <span class="formula-inline">aRb</span>.</p>
<div class="callout"><strong>Definitie</strong><p>Een equivalentierelatie is reflexief, symmetrisch en transitief.</p></div>
<ul><li>reflexief: <span class="formula-inline">aRa</span>;</li><li>symmetrisch: uit <span class="formula-inline">aRb</span> volgt <span class="formula-inline">bRa</span>;</li><li>transitief: uit <span class="formula-inline">aRb</span> en <span class="formula-inline">bRc</span> volgt <span class="formula-inline">aRc</span>.</li></ul>
<h3>Equivalentieklassen</h3><p>Bij een equivalentierelatie bestaat de klasse van a uit alle elementen die equivalent zijn aan a.</p>
<h3>Stelling</h3><p>Equivalentieklassen van dezelfde equivalentierelatie zijn gelijk of disjunct.</p>
<p><strong>Waarom klopt dit?</strong> Als twee klassen een gemeenschappelijk element hebben, verbindt transitiviteit en symmetrie hun vertegenwoordigers met elkaar. Daardoor bevat elke klasse de andere.</p>
<h3>Tegenvoorbeeld</h3><p>De relatie "kleiner dan" is niet reflexief en dus geen equivalentierelatie.</p>
<h3>Zelfstandig</h3><p>Onderzoek of "heeft dezelfde rest bij deling door 3" een equivalentierelatie op de gehele getallen is.</p>
    `
  },
  {
    id: "0.11",
    title: "Ordeningen",
    goal: "Onderscheid partiële en totale ordeningen en gebruik de eigenschappen van ordeningsrelaties.",
    theory: /* html */`
<h2>Ordeningen</h2>
<p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat maakt een relatie tot een ordening?</li><li>Wat is het verschil tussen partieel en totaal ordenen?</li><li>Waarom zijn ordeningen nuttig?</li></ul>
<h3>Partiële ordening</h3><p>Een relatie ≤ is een partiële ordening als ze reflexief, antisymmetrisch en transitief is.</p>
<div class="callout"><strong>Definitie</strong><p>Antisymmetrisch betekent: uit <span class="formula-inline">a≤b</span> en <span class="formula-inline">b≤a</span> volgt <span class="formula-inline">a=b</span>.</p></div>
<h3>Totale ordening</h3><p>Een partiële ordening is totaal als voor elk paar a,b geldt: <span class="formula-inline">a≤b</span> of <span class="formula-inline">b≤a</span>.</p>
<h3>Voorbeeld</h3><p>De gewone ≤ op de reële getallen is totaal. De deelbaarheidsrelatie op positieve gehele getallen is een partiële ordening, maar niet totaal: 2 deelt 3 niet en 3 deelt 2 niet.</p>
<h3>Tegenvoorbeeld</h3><p>Symmetrie hoort niet bij een ordening. Als zowel a≤b als b≤a voor verschillende elementen zou kunnen gelden, faalt antisymmetrie.</p>
<h3>Zelfstandig</h3><p>Onderzoek of de inclusierelatie ⊆ op verzamelingen een partiële ordening is.</p>
    `
  },
  {
    id: "0.12",
    title: "Functies als afbeeldingen",
    goal: "Begrijp een functie als afbeelding die elk element van het domein precies één beeld geeft.",
    theory: /* html */`
<h2>Functies als afbeeldingen</h2>
<p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wat zijn domein, codomein en beeld?</li><li>Waarom mag één invoer niet twee verschillende uitkomsten hebben?</li><li>Hoe verschillen een formule en de functie zelf?</li></ul>
<div class="callout"><strong>Definitie</strong><p>Een functie <span class="formula-inline">f:A→B</span> kent aan elk element van A precies één element van B toe.</p></div>
<h3>Afbeelding</h3><p>Het element <span class="formula-inline">f(a)</span> is het beeld van a. Het <strong>beeld</strong> van de hele functie kan kleiner zijn dan het codomein.</p>
<h3>Voorbeeld</h3><p>De functie <span class="formula-inline">f(x)=x²</span> van ℝ naar ℝ kent aan elk reëel getal precies één kwadraat toe. De waarden f(2) en f(-2) zijn gelijk.</p>
<h3>Stelling</h3><p>Een functie wordt bepaald door haar domein, codomein en toewijzingsregel; dezelfde regel met een ander codomein kan dus een andere functie opleveren.</p>
<h3>Tegenvoorbeeld</h3><p>De relatie <span class="formula-inline">y²=x</span> is geen functie van x naar y over de reële getallen: bij x=4 horen y=2 en y=-2.</p>
<h3>Zelfstandig</h3><p>Bepaal domein, codomein en beeld van <span class="formula-inline">f:{1,2,3}→ℕ</span> met f(1)=2, f(2)=4 en f(3)=4.</p>
    `
  },
  {
    id: "0.13",
    title: "Injectief, surjectief en bijectief",
    goal: "Bepaal of een functie injectief, surjectief of bijectief is en begrijp waarom een inverse functie daarvan afhangt.",
    theory: /* html */`
<h2>Injectief, surjectief en bijectief</h2>
<p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Wanneer hebben twee invoeren nooit hetzelfde beeld?</li><li>Wanneer wordt het hele codomein geraakt?</li><li>Wanneer bestaat een inverse functie?</li></ul>
<h3>Drie eigenschappen</h3>
<ul><li><strong>Injectief:</strong> <span class="formula-inline">f(a)=f(b)⇒a=b</span>.</li><li><strong>Surjectief:</strong> voor elk b in het codomein bestaat minstens één a met f(a)=b.</li><li><strong>Bijectief:</strong> zowel injectief als surjectief.</li></ul>
<div class="callout"><strong>Stelling</strong><p>Een functie heeft een inverse functie die links en rechts inverse is precies wanneer zij bijectief is.</p></div>
<p><strong>Waarom klopt dit?</strong> Surjectiviteit zorgt ervoor dat elk doelpunt bereikt wordt; injectiviteit zorgt ervoor dat het omgekeerde beeld uniek is.</p>
<h3>Voorbeeld</h3><p><span class="formula-inline">f(x)=2x+1</span> van ℝ naar ℝ is bijectief. Uit f(a)=f(b) volgt a=b en voor elk y bestaat x=(y−1)/2.</p>
<h3>Tegenvoorbeeld</h3><p><span class="formula-inline">f(x)=x²</span> van ℝ naar ℝ is niet injectief: f(2)=f(-2).</p>
<h3>Zelfstandig</h3><p>Onderzoek de functie <span class="formula-inline">f:{1,2,3}→{a,b,c}</span> met 1↦a, 2↦b, 3↦b. Is zij injectief, surjectief of bijectief?</p>
    `
  },
  {
    id: "0.14",
    title: "Oneindigheid en cardinaliteit",
    goal: "Begrijp dat oneindige verzamelingen verschillende groottes kunnen hebben en maak kennis met de diagonaalredenering van Cantor.",
    theory: /* html */`
<h2>Oneindigheid en cardinaliteit</h2>
<p><strong>Wat gaan we ontdekken?</strong></p><ul><li>Hoe vergelijken we de grootte van oneindige verzamelingen?</li><li>Waarom zijn de natuurlijke getallen en gehele getallen even groot in cardinaliteit?</li><li>Waarom zijn de reële getallen niet aftelbaar?</li></ul>
<h3>Cardinaliteit</h3><p>Twee verzamelingen hebben dezelfde cardinaliteit als er een <strong>bijectie</strong> tussen bestaat.</p>
<p>Een verzameling is <strong>aftelbaar</strong> als haar elementen in een rij kunnen worden gezet, dus gekoppeld kunnen worden aan de natuurlijke getallen.</p>
<h3>Een verrassend feit</h3><p>De verzameling van de gehele getallen is oneindig, maar wel aftelbaar. Je kunt bijvoorbeeld 0, 1, -1, 2, -2, 3, -3, ... opsommen.</p>
<div class="callout"><strong>Stelling van Cantor</strong><p>De reële getallen zijn niet aftelbaar. Er bestaat dus geen lijst waarin alle reële getallen tussen 0 en 1 voorkomen.</p></div>
<h3>Waarom klopt dit? — diagonaalargument</h3><p>Stel dat alle decimalen tussen 0 en 1 in een lijst staan. Bouw een nieuw getal door het eerste cijfer van het eerste getal, het tweede cijfer van het tweede getal enzovoort te veranderen. Het nieuwe getal verschilt van elk getal in minstens één cijfer op de diagonaal. Het stond dus niet in de lijst. Dat is een tegenspraak.</p>
<h3>Tegenvoorbeeld</h3><p>"Oneindig" betekent niet automatisch "groter dan elke andere oneindige verzameling". De natuurlijke en gehele getallen hebben dezelfde cardinaliteit.</p>
<h3>Zelfstandig</h3><p>Leg in eigen woorden uit waarom een veronderstelde volledige lijst van reële getallen tussen 0 en 1 altijd een nieuw getal kan opleveren dat niet op de lijst staat.</p>
    `
  }
];
