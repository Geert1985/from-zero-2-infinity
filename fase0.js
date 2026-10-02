/* Lesstof Fase 0 — Taal van de wiskunde. 14 milestones: van uitspraken naar oneindigheid. */
const MILESTONES_0 = [
  {
    id: "0.1",
    title: "Wiskundige uitspraken",
    goal: "Herken wiskundige uitspraken en onderscheid een uitspraak van een vraag, definitie, berekening of open zin.",
    theory: /* html */`
<h2>Wiskundige uitspraken</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Wat is een wiskundige uitspraak?</li>
  <li>Wat is het verschil tussen een uitspraak, vraag, berekening en definitie?</li>
  <li>Wat is een open zin?</li>
  <li>Wanneer is een uitspraak waar of onwaar?</li>
  <li>Waarom bewijst een voorbeeld geen algemene uitspraak?</li>
  <li>Hoe weerlegt één tegenvoorbeeld een algemene bewering?</li>
</ul>
<h3>Wat is een uitspraak?</h3>
<p>Een <strong>uitspraak</strong> is een bewering waarvan we in principe kunnen bepalen of ze <strong>waar</strong> of <strong>onwaar</strong> is.</p>
<p class="formula">2 + 3 = 5</p>
<p>Deze bewering is waar. Ook de volgende zin is een uitspraak:</p>
<p><span class="formula-inline">7</span> is een even getal.</p>
<p>Deze uitspraak is onwaar. <strong>Onwaar</strong> betekent dus niet “geen uitspraak”.</p>
<div class="callout"><strong>Definitie</strong><p>Een wiskundige uitspraak is een bewering waaraan precies één waarheidswaarde kan worden toegekend: waar of onwaar.</p></div>
<h3>Uitspraak of berekening?</h3>
<p class="formula">7 + 5</p>
<p>Dit is een <strong>uitdrukking</strong> of berekening. Er wordt niets beweerd.</p>
<p class="formula">7 + 5 = 12</p>
<p>Nu staat er wel een bewering. We kunnen bepalen dat ze waar is, dus dit is een uitspraak.</p>
<div class="callout"><strong>Onthoud</strong><p><span class="formula-inline">7 + 5</span> is een uitdrukking; <span class="formula-inline">7 + 5 = 12</span> is een uitspraak.</p></div>
<h3>Uitspraak of vraag?</h3>
<p><em>“Is 7 een priemgetal?”</em> is een vraag en dus geen uitspraak. De bijbehorende bewering <span class="formula-inline">7</span> is een priemgetal is wel een uitspraak.</p>
<h3>Uitspraak of definitie?</h3>
<p>Een <strong>definitie</strong> legt vast wat we met een begrip bedoelen. Bijvoorbeeld:</p>
<div class="callout"><p>Een <strong>priemgetal</strong> is een natuurlijk getal groter dan 1 dat precies twee positieve delers heeft.</p></div>
<p>Een definitie gebruiken we vervolgens om te bepalen of een getal aan het begrip voldoet. In deze cursus behandelen we een definitie daarom anders dan een bewering die we als waar of onwaar beoordelen.</p>
<h3>Uitdrukking, open zin en uitspraak</h3>
<p class="formula">x + 1</p>
<p>Dit is een uitdrukking. Er wordt niets beweerd.</p>
<p class="formula">x + 1 = 4</p>
<p>Dit is een <strong>open zin</strong>: de waarheid hangt af van de waarde van <span class="formula-inline">x</span>.</p>
<p>Voor <span class="formula-inline">x = 3</span> krijgen we:</p>
<p class="formula">3 + 1 = 4</p>
<p>Dit is waar. Voor <span class="formula-inline">x = 5</span> krijgen we:</p>
<p class="formula">5 + 1 = 4</p>
<p>Dit is onwaar.</p>
<div class="callout"><strong>Schema</strong><p>
<p><span class="formula-inline">x + 1</span> → uitdrukking;</p> 
<p><span class="formula-inline">x + 1 = 4</span> → open zin;</p> 
</p><span class="formula-inline">3 + 1 = 4</span> → uitspraak.</p>
</div>
<p>Later maken we open zinnen met woorden als <em>“voor elke”</em> en <em>“er bestaat”</em> tot uitspraken. Dat behandelen we in 0.4.</p>
<h3>Voorbeeld en tegenvoorbeeld</h3>
<p>Een voorbeeld toont dat een bewering in één geval klopt. Dat is niet genoeg om een uitspraak over <strong>alle</strong> gevallen te bewijzen.</p>
<p>Neem de bewering: “Alle natuurlijke getallen groter dan 1 zijn priemgetallen.” De getallen 2, 3, 5 en 7 voldoen eraan, maar dat bewijst de algemene bewering niet.</p>
<p>Het getal 9 is een <strong>tegenvoorbeeld</strong>: het is groter dan 1, maar geen priemgetal. Eén tegenvoorbeeld volstaat om een algemene bewering van de vorm “alle” te weerleggen.</p>
 `
  },
  {
    id: "0.2",
    title: "Logische operatoren",
    goal: "Werk met niet, en, of en de logische structuur van samengestelde uitspraken.",
    theory: /* html */`
<h2>Logische operatoren</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Hoe combineren we uitspraken?</li>
  <li>Wat betekenen niet, en en of?</li>
  <li>Waarom is “of” in de wiskunde meestal inclusief?</li>
  <li>Hoe gebruiken we waarheidstabellen?</li>
</ul>
<h3>Niet, en, of</h3>
<p>Voor uitspraken <span class="formula-inline">P</span> en <span class="formula-inline">Q</span> gebruiken we logische operatoren.</p>
<ul>
  <li><strong>niet P:</strong> <span class="formula-inline">¬P</span>. Deze uitspraak is waar precies wanneer <span class="formula-inline">P</span> onwaar is.</li>
  <li><strong>P en Q:</strong> <span class="formula-inline">P ∧ Q</span>. Deze uitspraak is waar precies wanneer beide uitspraken waar zijn.</li>
  <li><strong>P of Q:</strong> <span class="formula-inline">P ∨ Q</span>. Deze uitspraak is waar wanneer minstens één van beide waar is.</li>
</ul>
<div class="callout"><strong>Let op</strong><p>Het wiskundige “of” is <strong>inclusief</strong>. Bij <span class="formula-inline">P ∨ Q</span> mogen P en Q dus allebei waar zijn.</p></div>
<p>Bijvoorbeeld: “<span class="formula-inline">n</span> is even of <span class="formula-inline">n</span> is deelbaar door 3” is waar voor <span class="formula-inline">n = 6</span>, want beide delen zijn waar.</p>
<h3>Waarheidstabel</h3>
<p>Een samengestelde uitspraak heeft een waarheidswaarde die afhangt van de waarheidswaarden van haar onderdelen. Voor <span class="formula-inline">P ∧ ¬Q</span> geldt:</p>
<ul>
  <li>P waar, Q waar → onwaar.</li>
  <li>P waar, Q onwaar → waar.</li>
  <li>P onwaar, Q waar → onwaar.</li>
  <li>P onwaar, Q onwaar → onwaar.</li>
</ul>
<p>Een waarheidstabel is een systematische manier om alle mogelijkheden te controleren.</p>
<h3>De wetten van De Morgan</h3>
<p class="formula">¬(P ∧ Q) ⇔ (¬P ∨ ¬Q)</p>
<p class="formula">¬(P ∨ Q) ⇔ (¬P ∧ ¬Q)</p>
<p>De eerste zegt: “niet allebei” betekent “minstens één niet”. De tweede zegt: “niet minstens één” betekent “geen van beide”.</p>
<h3>Veelgemaakte fout</h3>
<p>“Of” verwarren met “precies één van de twee” verandert de betekenis. Exclusief of is een andere logische bewerking.</p>
    `
  },
  {
    id: "0.3",
    title: "Implicatie en equivalentie",
    goal: "Lees implicaties correct, onderscheid omkering en contrapositie en herken logische equivalentie.",
    theory: /* html */`
<h2>Implicatie en equivalentie</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Wat betekent “als …, dan …”?</li>
  <li>Waarom is de omkering niet automatisch geldig?</li>
  <li>Wat is de contrapositie?</li>
  <li>Wanneer zijn twee uitspraken equivalent?</li>
</ul>
<h3>Implicatie</h3>
<p>De uitspraak <span class="formula-inline">P ⇒ Q</span> betekent: als <span class="formula-inline">P</span> waar is, dan is <span class="formula-inline">Q</span> waar. P heet de <strong>hypothese</strong> en Q de <strong>conclusie</strong>.</p>
<div class="callout"><strong>Definitie</strong><p><span class="formula-inline">P ⇒ Q</span> is alleen onwaar wanneer P waar is en Q onwaar.</p></div>
<p>Dit betekent dat een onware hypothese de implicatie niet ongeldig maakt. Dat is een formele eigenschap van de logische operator.</p>
<h3>Omkering en contrapositie</h3>
<p>De <strong>omkering</strong> van <span class="formula-inline">P ⇒ Q</span> is <span class="formula-inline">Q ⇒ P</span>. Die volgt niet automatisch.</p>
<p>De <strong>contrapositie</strong> is <span class="formula-inline">¬Q ⇒ ¬P</span>. Die is wel logisch equivalent met de oorspronkelijke implicatie.</p>
<p class="formula">P ⇒ Q ⇔ ¬Q ⇒ ¬P</p>
<p>Voorbeeld: als een getal deelbaar is door 4, dan is het even. De omkering is fout: 6 is even maar niet deelbaar door 4.</p>
<h3>Equivalentie</h3>
<p><span class="formula-inline">P ⇔ Q</span> betekent dat beide richtingen gelden:</p>
<p class="formula">(P ⇒ Q) ∧ (Q ⇒ P)</p>
<p>Een equivalentie zegt dus dat P en Q in precies dezelfde situaties waar zijn.</p>
<h3>Zelfstandig</h3>
<p>Schrijf de omkering en contrapositie van: “Als <span class="formula-inline">n</span> deelbaar is door 6, dan is <span class="formula-inline">n</span> even.”</p>
<p><strong>Antwoordrichting:</strong> omkering: “als <span class="formula-inline">n</span> even is, dan is <span class="formula-inline">n</span> deelbaar door 6”; contrapositie: “als <span class="formula-inline">n</span> niet even is, dan is <span class="formula-inline">n</span> niet deelbaar door 6”.</p>
    `
  },
  {
    id: "0.4",
    title: "Kwantoren",
    goal: "Gebruik de kwantoren voor alle en er bestaat en ontken uitspraken met kwantoren correct.",
    theory: /* html */`
<h2>Kwantoren</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Hoe drukken we “voor alle” en “er bestaat” formeel uit?</li>
  <li>Waarom hoort het domein bij een kwantor?</li>
  <li>Hoe ontken je een uitspraak met een kwantor?</li>
  <li>Waarom kan de volgorde van kwantoren de betekenis veranderen?</li>
</ul>
<h3>Universele en existentiële kwantor</h3>
<p><span class="formula-inline">∀x</span> betekent “voor alle <span class="formula-inline">x</span>” en <span class="formula-inline">∃x</span> betekent “er bestaat minstens één <span class="formula-inline">x</span>”.</p>
<div class="callout"><strong>Definitie</strong><p><span class="formula-inline">∀x P(x)</span> zegt dat P voor elk toegelaten <span class="formula-inline">x</span> waar is. <span class="formula-inline">∃x P(x)</span> zegt dat er minstens één toegelaten <span class="formula-inline">x</span> bestaat waarvoor P waar is.</p></div>
<p>Het domein moet duidelijk zijn. “Er bestaat een natuurlijk getal kleiner dan 0” is onwaar, terwijl “er bestaat een geheel getal kleiner dan 0” waar is.</p>
<h3>Volgorde van kwantoren</h3>
<p class="formula">∀n ∃m (m &gt; n)</p>
<p>Op <span class="formula-inline">ℕ</span> is dit waar: voor elk <span class="formula-inline">n</span> kunnen we bijvoorbeeld <span class="formula-inline">m = n + 1</span> kiezen.</p>
<p class="formula">∃m ∀n (m &gt; n)</p>
<p>Dit is onwaar: één vast <span class="formula-inline">m</span> kan niet groter zijn dan elk natuurlijk getal.</p>
<h3>Negatie</h3>
<p class="formula">¬(∀x P(x)) ⇔ ∃x ¬P(x)</p>
<p class="formula">¬(∃x P(x)) ⇔ ∀x ¬P(x)</p>
<p>“Niet iedereen heeft eigenschap P” betekent dus “er is minstens één uitzondering”. “Niemand heeft P” betekent “iedereen heeft niet-P”.</p>
<h3>Tegenvoorbeeld</h3>
<p>Een universele bewering <span class="formula-inline">∀x P(x)</span> wordt weerlegd door één toegelaten <span class="formula-inline">x</span> waarvoor <span class="formula-inline">P(x)</span> onwaar is.</p>
<h3>Zelfstandig</h3>
<p>Ontken: “Voor elk natuurlijk getal <span class="formula-inline">n</span> bestaat een natuurlijk getal <span class="formula-inline">m</span> met <span class="formula-inline">m &gt; n</span>.”</p>
<p><strong>Antwoordrichting:</strong> er bestaat een natuurlijk <span class="formula-inline">n</span> zodat voor elk natuurlijk <span class="formula-inline">m</span> geldt dat <span class="formula-inline">m ≤ n</span>.</p>
    `
  },
  {
    id: "0.5",
    title: "Directe bewijzen",
    goal: "Bouw een direct bewijs op vanuit definities en bekende feiten.",
    theory: /* html */`
<h2>Directe bewijzen</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Hoe verschilt een bewijs van een voorbeeld?</li>
  <li>Hoe begin je bij de hypothese?</li>
  <li>Hoe eindig je met precies de gewenste conclusie?</li>
</ul>
<h3>De structuur</h3>
<p>Bij een direct bewijs neem je de hypothese aan en leid je daaruit stap voor stap de conclusie af. Elke stap steunt op een definitie, een eerder bewezen resultaat of een geldige rekenregel.</p>
<div class="callout"><strong>Bewijsschema</strong><p>Neem aan dat P waar is. Gebruik definities en bekende resultaten. Leid Q af. Dus <span class="formula-inline">P ⇒ Q</span>.</p></div>
<h3>Voorbeeld</h3>
<p>Bewijs dat de som van twee even gehele getallen even is.</p>
<p>Neem twee willekeurige even gehele getallen. Volgens de definitie bestaan er gehele getallen <span class="formula-inline">a</span> en <span class="formula-inline">b</span> zodat de twee getallen <span class="formula-inline">2a</span> en <span class="formula-inline">2b</span> zijn.</p>
<p class="formula">2a + 2b = 2(a + b)</p>
<p>Omdat <span class="formula-inline">a + b</span> een geheel getal is, is de som even.</p>
<p>Het woord <strong>willekeurig</strong> is belangrijk: het bewijs geldt niet alleen voor 2 en 4, maar voor elk toegelaten paar.</p>
<h3>Veelgemaakte fout</h3>
<p>Een berekening met één concreet getal kan een controle zijn, maar geen bewijs van een uitspraak voor alle getallen.</p>
<h3>Zelfstandig</h3>
<p>Bewijs rechtstreeks dat de som van twee oneven gehele getallen even is.</p>
<p><strong>Antwoordrichting:</strong> schrijf de getallen als <span class="formula-inline">2a + 1</span> en <span class="formula-inline">2b + 1</span> en factoriseer de som.</p>
    `
  },
  {
    id: "0.6",
    title: "Bewijs door contrapositie",
    goal: "Gebruik contrapositie wanneer de ontkenning van de conclusie eenvoudiger te hanteren is.",
    theory: /* html */`
<h2>Bewijs door contrapositie</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Wat is contrapositie?</li>
  <li>Waarom mag je ermee bewijzen?</li>
  <li>Wanneer is deze methode handig?</li>
</ul>
<h3>De methode</h3>
<p>Om <span class="formula-inline">P ⇒ Q</span> te bewijzen, mogen we de equivalente uitspraak <span class="formula-inline">¬Q ⇒ ¬P</span> bewijzen.</p>
<div class="callout"><strong>Stelling</strong><p><span class="formula-inline">P ⇒ Q</span> en <span class="formula-inline">¬Q ⇒ ¬P</span> zijn logisch equivalent.</p></div>
<h3>Voorbeeld</h3>
<p>Bewijs: als <span class="formula-inline">n²</span> even is, dan is <span class="formula-inline">n</span> even.</p>
<p>De contrapositie luidt: als <span class="formula-inline">n</span> niet even is, dan is <span class="formula-inline">n²</span> niet even. Een geheel getal dat niet even is, is oneven, dus schrijf <span class="formula-inline">n = 2k + 1</span>.</p>
<p class="formula">n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1</p>
<p>Dus <span class="formula-inline">n²</span> is oneven. Daarmee is de contrapositie bewezen en dus ook de oorspronkelijke implicatie.</p>
<h3>Omkering is iets anders</h3>
<p>De omkering van <span class="formula-inline">P ⇒ Q</span> is <span class="formula-inline">Q ⇒ P</span>. Daarvoor bestaat geen algemene logische equivalentie.</p>
<h3>Zelfstandig</h3>
<p>Gebruik contrapositie om te bewijzen: als <span class="formula-inline">n²</span> oneven is, dan is <span class="formula-inline">n</span> oneven.</p>
<p><strong>Antwoordrichting:</strong> bewijs de contrapositie “als <span class="formula-inline">n</span> even is, dan is <span class="formula-inline">n²</span> even”.</p>
    `
  },
  {
    id: "0.7",
    title: "Bewijs uit het ongerijmde",
    goal: "Bewijs een uitspraak door tijdelijk de ontkenning aan te nemen en daaruit een tegenspraak af te leiden.",
    theory: /* html */`
<h2>Bewijs uit het ongerijmde</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Hoe kan een onmogelijke aanname een bewijs opleveren?</li>
  <li>Wat is een tegenspraak?</li>
  <li>Wanneer is reductio ad absurdum nuttig?</li>
</ul>
<h3>De methode</h3>
<p>Wil je P bewijzen, neem dan tijdelijk <span class="formula-inline">¬P</span> aan. Leid daaruit een tegenspraak af. Dan kan <span class="formula-inline">¬P</span> niet waar zijn en volgt P.</p>
<div class="callout"><strong>Bewijsschema</strong><p>Aanname: <span class="formula-inline">¬P</span>. Leid <span class="formula-inline">Q</span> en <span class="formula-inline">¬Q</span> af. Dat is onmogelijk. Dus <span class="formula-inline">P</span> is waar.</p></div>
<h3>Voorbeeld: √2 is niet rationaal</h3>
<p>We bewijzen dat er geen rationaal getal <span class="formula-inline">q</span> bestaat waarvoor <span class="formula-inline">q² = 2</span>.</p>
<p>Stel het tegendeel. Schrijf dan <span class="formula-inline">q = a / b</span> in volledig vereenvoudigde vorm, met gehele <span class="formula-inline">a</span> en <span class="formula-inline">b ≠ 0</span>. Dan:</p>
<p class="formula">a² = 2b²</p>
<p>Dus <span class="formula-inline">a²</span> is even en daarmee is <span class="formula-inline">a</span> even. Schrijf <span class="formula-inline">a = 2k</span>. Dan volgt:</p>
<p class="formula">b² = 2k²</p>
<p>Dus ook <span class="formula-inline">b</span> is even. Dan hebben <span class="formula-inline">a</span> en <span class="formula-inline">b</span> een gemeenschappelijke factor 2. Dat strijdt met de keuze van de breuk in volledig vereenvoudigde vorm. De aanname was dus onmogelijk.</p>
<h3>Wat is geen tegenspraak?</h3>
<p>Een verrassend of groot getal is geen tegenspraak. Er moet een echte logische onverenigbaarheid ontstaan, bijvoorbeeld een uitspraak én haar ontkenning.</p>
<h3>Zelfstandig</h3>
<p>Maak een bewijs uit het ongerijmde voor de uitspraak dat er geen grootste natuurlijk getal bestaat.</p>
<p><strong>Antwoordrichting:</strong> neem aan dat <span class="formula-inline">N</span> het grootste natuurlijke getal is. Dan is <span class="formula-inline">N + 1</span> natuurlijk en groter dan <span class="formula-inline">N</span>.</p>
    `
  },
  {
    id: "0.8",
    title: "Wiskundige inductie",
    goal: "Bewijs uitspraken over alle natuurlijke getallen met een basisstap en een inductiestap.",
    theory: /* html */`
<h2>Wiskundige inductie</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Waarom zijn een basisstap en inductiestap voldoende?</li>
  <li>Wat is de inductiehypothese?</li>
  <li>Wat bewijst inductie precies?</li>
</ul>
<h3>Het principe</h3>
<p>In deze cursus nemen we <span class="formula-inline">ℕ = {0, 1, 2, …}</span>. Als een uitspraak <span class="formula-inline">P(n)</span> waar is voor 0 en we voor elk natuurlijk <span class="formula-inline">k</span> kunnen aantonen dat <span class="formula-inline">P(k) ⇒ P(k + 1)</span>, dan is <span class="formula-inline">P(n)</span> waar voor elk natuurlijk <span class="formula-inline">n</span>.</p>
<div class="callout"><strong>Bewijsschema</strong><p>1. Basis: bewijs <span class="formula-inline">P(0)</span>. 2. Inductiestap: neem een willekeurig <span class="formula-inline">k</span> en neem <span class="formula-inline">P(k)</span> aan. Bewijs <span class="formula-inline">P(k + 1)</span>. 3. Conclusie: <span class="formula-inline">P(n)</span> geldt voor alle <span class="formula-inline">n ∈ ℕ</span>.</p></div>
<h3>Voorbeeld</h3>
<p>Bewijs:</p>
<p class="formula">0 + 1 + … + n = n(n + 1) / 2</p>
<p><strong>Basis:</strong> voor <span class="formula-inline">n = 0</span> zijn beide kanten 0.</p>
<p><strong>Inductiestap:</strong> neem aan dat de formule voor <span class="formula-inline">k</span> geldt. Dan:</p>
<p class="formula">0 + 1 + … + k + (k + 1) = k(k + 1) / 2 + (k + 1) = (k + 1)(k + 2) / 2</p>
<p>Dat is precies de formule voor <span class="formula-inline">k + 1</span>.</p>
<h3>Wat geen inductiebewijs is</h3>
<p>Alleen de eerste gevallen controleren is geen inductiebewijs. Ook een inductiestap zonder basisstap is onvoldoende. De stap moet bovendien voor een <strong>willekeurig</strong> natuurlijk <span class="formula-inline">k</span> gelden.</p>
<h3>Zelfstandig</h3>
<p>Bewijs met inductie dat voor <span class="formula-inline">n ≥ 1</span> geldt:</p>
<p class="formula">1 + 3 + 5 + … + (2n − 1) = n²</p>
<p><strong>Antwoordrichting:</strong> basis <span class="formula-inline">n = 1</span>. Neem de formule aan voor <span class="formula-inline">k</span> en voeg de volgende oneven term <span class="formula-inline">2k + 1</span> toe.</p>
    `
  },
  {
    id: "0.9",
    title: "Verzamelingen",
    goal: "Werk met verzamelingen, elementen, deelverzamelingen en de basisbewerkingen op verzamelingen.",
    theory: /* html */`
<h2>Verzamelingen</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Wat is een verzameling?</li>
  <li>Wat betekenen element en deelverzameling?</li>
  <li>Hoe werken unie, doorsnede en verschil?</li>
  <li>Waarom is de lege verzameling belangrijk?</li>
</ul>
<h3>Elementen en deelverzamelingen</h3>
<p>Een verzameling is een collectie objecten die we als geheel beschouwen. Volgorde en herhaling bepalen de verzameling niet:</p>
<p class="formula">{1, 2, 2} = {2, 1}</p>
<p>We schrijven <span class="formula-inline">x ∈ A</span> wanneer <span class="formula-inline">x</span> een element van <span class="formula-inline">A</span> is. We schrijven <span class="formula-inline">A ⊆ B</span> wanneer elk element van <span class="formula-inline">A</span> ook element van <span class="formula-inline">B</span> is.</p>
<div class="callout"><strong>Definitie</strong><p>De lege verzameling <span class="formula-inline">∅</span> heeft geen elementen. Ze is een deelverzameling van elke verzameling.</p></div>
<p><span class="formula-inline">{∅}</span> is niet leeg: de lege verzameling is daar het enige element. Dus <span class="formula-inline">∅ ∈ {∅}</span>, terwijl <span class="formula-inline">∅ ≠ {∅}</span>.</p>
<h3>Bewerkingen</h3>
<ul>
  <li>unie: <span class="formula-inline">A ∪ B</span> bevat de elementen die in A of in B zitten;</li>
  <li>doorsnede: <span class="formula-inline">A ∩ B</span> bevat de elementen die in A én in B zitten;</li>
  <li>verschil: <span class="formula-inline">A ∖ B</span> bevat de elementen van A die niet in B zitten.</li>
</ul>
<div class="callout"><strong>Stelling</strong><p><span class="formula-inline">A ⊆ B</span> precies wanneer <span class="formula-inline">A ∪ B = B</span>.</p></div>
<p>Let goed op het verschil tussen lidmaatschap <span class="formula-inline">∈</span> en deelverzameling <span class="formula-inline">⊆</span>. Het zijn verschillende relaties.</p>
<h3>Zelfstandig</h3>
<p>Neem <span class="formula-inline">A = {1, 2, 3}</span> en <span class="formula-inline">B = {3, 4}</span>. Bepaal <span class="formula-inline">A ∪ B</span>, <span class="formula-inline">A ∩ B</span> en <span class="formula-inline">A ∖ B</span>.</p>
<p><strong>Antwoord:</strong> <span class="formula-inline">{1, 2, 3, 4}</span>, <span class="formula-inline">{3}</span> en <span class="formula-inline">{1, 2}</span>.</p>
    `
  },
  {
    id: "0.10",
    title: "Relaties en equivalentieklassen",
    goal: "Begrijp relaties en herken wanneer een relatie een equivalentierelatie vormt.",
    theory: /* html */`
<h2>Relaties en equivalentieklassen</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Wat is een relatie?</li>
  <li>Wat betekenen reflexief, symmetrisch en transitief?</li>
  <li>Hoe ontstaan equivalentieklassen?</li>
</ul>
<h3>Relaties</h3>
<p>Het cartesisch product <span class="formula-inline">A × B</span> bestaat uit alle geordende koppels <span class="formula-inline">(a, b)</span> met <span class="formula-inline">a ∈ A</span> en <span class="formula-inline">b ∈ B</span>. Een relatie van A naar B is een deelverzameling van <span class="formula-inline">A × B</span>.</p>
<p>Op één verzameling schrijven we <span class="formula-inline">a R b</span> wanneer <span class="formula-inline">(a, b)</span> tot de relatie behoort. De volgorde van een koppel telt: <span class="formula-inline">(1, 2) ≠ (2, 1)</span>.</p>
<h3>Drie eigenschappen</h3>
<ul>
  <li><strong>Reflexief:</strong> voor elke <span class="formula-inline">a</span> geldt <span class="formula-inline">a R a</span>.</li>
  <li><strong>Symmetrisch:</strong> uit <span class="formula-inline">a R b</span> volgt <span class="formula-inline">b R a</span>.</li>
  <li><strong>Transitief:</strong> uit <span class="formula-inline">a R b</span> en <span class="formula-inline">b R c</span> volgt <span class="formula-inline">a R c</span>.</li>
</ul>
<div class="callout"><strong>Definitie</strong><p>Een <strong>equivalentierelatie</strong> is reflexief, symmetrisch en transitief.</p></div>
<h3>Voorbeeld</h3>
<p>Op de gehele getallen zeggen we dat twee getallen equivalent zijn wanneer ze bij deling door 3 dezelfde rest hebben. Formeel kunnen we schrijven <span class="formula-inline">a ≡ b (mod 3)</span>. De equivalentieklassen zijn de getallen met rest 0, rest 1 en rest 2.</p>
<p>Een equivalentieklasse verzamelt dus precies de objecten die volgens de relatie “bij elkaar horen”.</p>
<h3>Partitie</h3>
<p>De equivalentieklassen vormen een <strong>partitie</strong>: ze bedekken de hele verzameling en twee verschillende klassen hebben geen gemeenschappelijke elementen.</p>
<h3>Zelfstandig</h3>
<p>Ga na of “heeft dezelfde absolute waarde” op <span class="formula-inline">ℤ</span> reflexief, symmetrisch en transitief is.</p>
<p><strong>Antwoord:</strong> alle drie. De klasse van 0 is <span class="formula-inline">{0}</span>; voor <span class="formula-inline">n &gt; 0</span> is de klasse <span class="formula-inline">{n, −n}</span>.</p>
    `
  },
  {
    id: "0.11",
    title: "Ordeningen",
    goal: "Herken partiële en totale ordeningen en lees kleinste en grootste elementen correct.",
    theory: /* html */`
<h2>Ordeningen</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Wanneer is een relatie een partiële ordening?</li>
  <li>Wat is het verschil tussen partieel en totaal?</li>
  <li>Wat betekenen kleinste, minimaal, grootste en maximaal?</li>
</ul>
<h3>Partiële orde</h3>
<p>Een relatie <span class="formula-inline">≤</span> op een verzameling A is een <strong>partiële orde</strong> als ze reflexief, antisymmetrisch en transitief is.</p>
<p><strong>Antisymmetrisch</strong> betekent: als <span class="formula-inline">a ≤ b</span> en <span class="formula-inline">b ≤ a</span>, dan <span class="formula-inline">a = b</span>. Antisymmetrisch betekent dus niet “niet symmetrisch”.</p>
<div class="callout"><strong>Definitie</strong><p>Een <strong>totale orde</strong> is een partiële orde waarin voor elk paar <span class="formula-inline">a, b</span> geldt: <span class="formula-inline">a ≤ b</span> of <span class="formula-inline">b ≤ a</span>.</p></div>
<h3>Voorbeeld</h3>
<p>De gewone <span class="formula-inline">≤</span> op <span class="formula-inline">ℤ</span> is een totale orde. De inclusierelatie <span class="formula-inline">⊆</span> op de deelverzamelingen van <span class="formula-inline">{1, 2}</span> is partieel: <span class="formula-inline">{1}</span> en <span class="formula-inline">{2}</span> zijn niet vergelijkbaar.</p>
<h3>Kleinste en minimaal</h3>
<p>Een <strong>kleinste</strong> element <span class="formula-inline">m</span> voldoet aan <span class="formula-inline">m ≤ a</span> voor elk element <span class="formula-inline">a</span>. Er kan hoogstens één kleinste element zijn.</p>
<p>Een <strong>minimaal</strong> element heeft geen ander element dat er strikt onder ligt. Er kunnen meerdere minimale elementen zijn.</p>
<p>Grootste en maximaal zijn de overeenkomstige begrippen aan de andere kant van de orde.</p>
<h3>Zelfstandig</h3>
<p>Is <span class="formula-inline">≤</span> op <span class="formula-inline">ℕ</span> een totale orde? Bestaat er een kleinste natuurlijk getal?</p>
<p><strong>Antwoord:</strong> ja op beide vragen. Met onze afspraak <span class="formula-inline">ℕ = {0, 1, 2, …}</span> is het kleinste element 0.</p>
    `
  },
  {
    id: "0.12",
    title: "Functies als afbeeldingen",
    goal: "Zie een functie als een regel die aan elk element van het domein precies één beeld koppelt.",
    theory: /* html */`
<h2>Functies als afbeeldingen</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Wat zijn domein, codomein en beeld?</li>
  <li>Wanneer is een relatie een functie?</li>
  <li>Waarom horen domein en codomein bij de definitie van een functie?</li>
  <li>Hoe werkt samenstellen?</li>
</ul>
<h3>Definitie</h3>
<p>Een functie <span class="formula-inline">f: A → B</span> koppelt aan elk element <span class="formula-inline">a ∈ A</span> precies één element <span class="formula-inline">b ∈ B</span>. We schrijven <span class="formula-inline">f(a) = b</span>.</p>
<div class="callout"><strong>Drie begrippen</strong><p>A is het <strong>domein</strong>, B het <strong>codomein</strong> en <span class="formula-inline">f(A)</span> het <strong>beeld</strong>: de verzameling waarden die daadwerkelijk worden bereikt.</p></div>
<p>Een formule alleen bepaalt nog niet altijd één specifieke functie. Dezelfde regel <span class="formula-inline">n ↦ n</span> kan bijvoorbeeld een functie van <span class="formula-inline">ℕ</span> naar <span class="formula-inline">ℕ</span> zijn of van <span class="formula-inline">ℕ</span> naar <span class="formula-inline">ℤ</span>.</p>
<h3>Geen functie</h3>
<p>Een relatie is geen functie wanneer een domeinelement geen beeld heeft of meer dan één beeld heeft. De relatie <span class="formula-inline">x² + y² = 1</span> is bijvoorbeeld geen functie van <span class="formula-inline">x</span> naar <span class="formula-inline">y</span>, want bij <span class="formula-inline">x = 0</span> horen zowel <span class="formula-inline">y = 1</span> als <span class="formula-inline">y = −1</span>.</p>
<h3>Samenstellen</h3>
<p>Als het beeld van <span class="formula-inline">f</span> in het domein van <span class="formula-inline">g</span> ligt, kunnen we samenstellen:</p>
<p class="formula">(g ∘ f)(a) = g(f(a))</p>
<p>De volgorde is belangrijk. Voor <span class="formula-inline">f(x) = x + 1</span> en <span class="formula-inline">g(x) = 2x</span> zijn <span class="formula-inline">g(f(x)) = 2x + 2</span> en <span class="formula-inline">f(g(x)) = 2x + 1</span> verschillend.</p>
<h3>Zelfstandig</h3>
<p>Is “aan elke breuk haar teller koppelen” een functie van de rationale getallen naar de gehele getallen?</p>
<p><strong>Antwoord:</strong> niet zonder extra afspraak. Hetzelfde rationale getal kan bijvoorbeeld als <span class="formula-inline">1/2</span> of <span class="formula-inline">2/4</span> worden geschreven. Met een vaste schrijfwijze in laagste termen kan men wel een functie definiëren.</p>
    `
  },
  {
    id: "0.13",
    title: "Injectief, surjectief en bijectief",
    goal: "Onderscheid injectieve, surjectieve en bijectieve functies en ken de band met de inverse.",
    theory: /* html */`
<h2>Injectief, surjectief en bijectief</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Wanneer hebben verschillende inputs verschillende outputs?</li>
  <li>Wanneer wordt elk element van het codomein geraakt?</li>
  <li>Wanneer bestaat een inverse functie?</li>
</ul>
<h3>Drie eigenschappen</h3>
<ul>
  <li><strong>Injectief:</strong> <span class="formula-inline">f(a) = f(a′)</span> impliceert <span class="formula-inline">a = a′</span>.</li>
  <li><strong>Surjectief:</strong> voor elk <span class="formula-inline">b</span> in het codomein bestaat een <span class="formula-inline">a</span> met <span class="formula-inline">f(a) = b</span>.</li>
  <li><strong>Bijectief:</strong> injectief én surjectief.</li>
</ul>
<div class="callout"><strong>Stelling</strong><p>Een functie heeft een inverse functie precies wanneer ze bijectief is.</p></div>
<h3>Voorbeelden</h3>
<p><span class="formula-inline">f: ℤ → ℤ</span> met <span class="formula-inline">f(n) = 2n</span> is injectief maar niet surjectief, want 1 wordt niet bereikt.</p>
<p><span class="formula-inline">f: {1, 2, 3} → {a, b}</span> met <span class="formula-inline">f(1) = a</span>, <span class="formula-inline">f(2) = a</span> en <span class="formula-inline">f(3) = b</span> is surjectief maar niet injectief.</p>
<p>Het codomein doet ertoe: de regel <span class="formula-inline">f(n) = n</span> is surjectief van <span class="formula-inline">ℕ</span> naar <span class="formula-inline">ℕ</span>, maar niet van <span class="formula-inline">ℕ</span> naar <span class="formula-inline">ℤ</span>.</p>
<h3>Inverse</h3>
<p>Als <span class="formula-inline">f</span> bijectief is, heeft elk element van het codomein precies één oorsprong. Die oorsprong definiëren we als <span class="formula-inline">f⁻¹(b)</span>.</p>
<h3>Zelfstandig</h3>
<p>Is <span class="formula-inline">f: ℤ → ℤ</span> met <span class="formula-inline">f(n) = n + 1</span> bijectief? Geef de inverse als dat zo is.</p>
<p><strong>Antwoord:</strong> ja. <span class="formula-inline">f⁻¹(m) = m − 1</span>.</p>
    `
  },
  {
    id: "0.14",
    title: "Oneindigheid en cardinaliteit",
    goal: "Vergelijk verzamelingen via bijecties en onderscheid eindig, aftelbaar oneindig en overaftelbaar.",
    theory: /* html */`
<h2>Oneindigheid en cardinaliteit</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Wanneer hebben twee verzamelingen evenveel elementen?</li>
  <li>Wat betekent aftelbaar oneindig?</li>
  <li>Waarom kan een oneindige verzameling even groot zijn als een echte deelverzameling?</li>
  <li>Waarom zijn de reële getallen niet aftelbaar?</li>
</ul>
<h3>Even groot</h3>
<p>Twee verzamelingen zijn <strong>even groot</strong> wanneer er een bijectie tussen bestaat. Voor eindige verzamelingen komt dit overeen met hetzelfde aantal elementen.</p>
<div class="callout"><strong>Stelling</strong><p>Een eindige verzameling is niet in bijectie met een echte deelverzameling van zichzelf. Een oneindige verzameling kan dat wel.</p></div>
<p>Als <span class="formula-inline">ℕ = {0, 1, 2, …}</span>, dan is <span class="formula-inline">n ↦ n + 1</span> een bijectie van <span class="formula-inline">ℕ</span> naar <span class="formula-inline">{1, 2, 3, …}</span>. De tweede verzameling is een echte deelverzameling van de eerste.</p>
<p>Dit betekent niet dat “oneindig + 1” een gewone rekensom is. We vergelijken hier verzamelingen via bijecties.</p>
<h3>Aftelbaar oneindig</h3>
<p>Een verzameling is <strong>aftelbaar oneindig</strong> als ze in bijectie is met <span class="formula-inline">ℕ</span>. De gehele getallen zijn aftelbaar, bijvoorbeeld via de volgorde <span class="formula-inline">0, 1, −1, 2, −2, 3, −3, …</span>.</p>
<p>Ook de even natuurlijke getallen zijn aftelbaar: <span class="formula-inline">n ↦ 2n</span> is een bijectie van <span class="formula-inline">ℕ</span> naar de even natuurlijke getallen.</p>
<h3>Overaftelbaar</h3>
<p>De getallen in het interval <span class="formula-inline">(0, 1)</span> zijn niet aftelbaar. Stel dat ze wel op een rij stonden als <span class="formula-inline">r₀, r₁, r₂, …</span>. Kies voor elk n het n-de decimaal van <span class="formula-inline">rₙ</span> zo dat het nieuwe getal op die positie een ander cijfer heeft, bijvoorbeeld 4 als het cijfer van <span class="formula-inline">rₙ</span> niet 4 is en 5 als het wel 4 is.</p>
<p>Het nieuwe getal ligt in <span class="formula-inline">(0, 1)</span> en verschilt van <span class="formula-inline">rₙ</span> op de n-de positie. Het staat dus niet in de vermeende volledige lijst. Dat is een tegenspraak. Dit is Cantors diagonale argument.</p>
<p>De keuze van 4 en 5 vermijdt de gebruikelijke dubbelzinnigheid van decimale schrijfwijzen met oneindig veel negens.</p>
<h3>Wat volgt hieruit?</h3>
<p>Er is geen bijectie tussen <span class="formula-inline">ℕ</span> en <span class="formula-inline">ℝ</span>. De reële getallen vormen dus een grotere oneindigheid dan de natuurlijke getallen.</p>
<h3>Zelfstandig</h3>
<p>Geef een bijectie van <span class="formula-inline">ℕ</span> naar de even natuurlijke getallen. Leg daarna in eigen woorden uit waarom Cantors diagonaalargument een aftelling van <span class="formula-inline">(0, 1)</span> onmogelijk maakt.</p>
<p><strong>Antwoord:</strong> <span class="formula-inline">n ↦ 2n</span>. Bij een vermeende volledige lijst kan het diagonale getal worden geconstrueerd zodat het van elk element van de lijst minstens één decimaal verschilt.</p>
    `
  }
];
