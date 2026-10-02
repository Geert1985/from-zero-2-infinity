/* Lesstof Fase 0 — Taal van de wiskunde. Zelfde 14 milestones als GPT---F0; theory uitgebreid, geen nieuwe ids. */
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
  <li>Wat is het verschil tussen een uitspraak, een vraag, een berekening en een definitie?</li>
  <li>Wat is een open zin?</li>
  <li>Wanneer is een uitspraak waar of onwaar?</li>
  <li>Waarom is een voorbeeld geen bewijs?</li>
  <li>Hoe kan één tegenvoorbeeld een algemene uitspraak weerleggen?</li>
</ul>


<h3>Wat is een uitspraak?</h3>

<p>
  In de wiskunde komen we voortdurend zinnen tegen die iets beweren.
  Bijvoorbeeld:
</p>

<p class="formula">2 + 3 = 5</p>

<p>
  Deze zin beweert dat 2 + 3 gelijk is aan 5.
  We kunnen nagaan of dat klopt.
</p>

<p>
  Een zin waarvan we in principe kunnen bepalen of hij
  <strong>waar</strong> of <strong>onwaar</strong> is, noemen we een
  <strong>uitspraak</strong>.
</p>

<div class="callout">
  <strong>Definitie</strong>
  <p>
    Een <strong>wiskundige uitspraak</strong> is een bewering waaraan
    precies één waarheidswaarde kan worden toegekend:
    <strong>waar</strong> of <strong>onwaar</strong>.
  </p>
</div>

<p>
  Een uitspraak hoeft dus niet waar te zijn.
  Ook een onware bewering is een uitspraak.
</p>

<p>
  Bijvoorbeeld: <span class="formula-inline">7</span> is een even getal.
</p>

<p>
  Deze uitspraak is <strong>onwaar</strong>, maar het blijft een uitspraak:
  we kunnen namelijk bepalen dat ze onwaar is.
</p>


<h3>Uitspraak of berekening?</h3>

<p>
  Niet alles wat we in de wiskunde opschrijven, is een uitspraak.
  Kijk bijvoorbeeld naar:
</p>

<p class="formula">7 + 5</p>

<p>
  Dit is een <strong>berekening</strong> of een wiskundige
  <strong>uitdrukking</strong>. Er wordt nog niets beweerd.
  We kunnen de berekening uitvoeren:
</p>

<p class="formula">7 + 5 = 12</p>

<p>
  Nu staat er wél een bewering.
  We kunnen bepalen dat deze waar is.
  Daarom is dit een <strong>uitspraak</strong>.
</p>

<div class="callout">
  <p>
    <strong>Belangrijk verschil:</strong>
  </p>

  <p class="formula">7 + 5</p>

  <p>
    is een uitdrukking/berekening.
  </p>

  <p class="formula">7 + 5 = 12</p>

  <p>
    is een uitspraak.
  </p>
</div>


<h3>Uitspraak of vraag?</h3>

<p>
  Een vraag probeert geen bewering te doen. Ze vraagt om informatie.
</p>

<p>
  Bijvoorbeeld:
</p>

<p>
  <em>“Is 7 een priemgetal?”</em>
</p>

<p>
  Dit is <strong>geen uitspraak</strong>.
  Het is een vraag.
</p>

<p>
  De vraag kan wel leiden tot een uitspraak:
</p>

<p>
  <span class="formula-inline">7</span> is een priemgetal.
</p>

<p>
  Deze zin beweert iets en we kunnen bepalen dat hij waar is.
  Het is dus wel een uitspraak.
</p>


<h3>Uitspraak of definitie?</h3>

<p>
  Een <strong>definitie</strong> legt vast wat we met een begrip bedoelen.
  Een definitie heeft dus een andere functie dan een uitspraak die we
  als waar of onwaar beoordelen.
</p>

<p>
  Bijvoorbeeld:
</p>

<div class="callout">
  <p>
    Een <strong>priemgetal</strong> is een natuurlijk getal groter dan 1
    dat precies twee positieve delers heeft.
  </p>
</div>

<p>
  Hiermee leggen we vast wat we onder het begrip
  <em>priemgetal</em> verstaan.
  We gebruiken deze definitie vervolgens om te bepalen welke getallen
  priemgetallen zijn.
</p>

<p>
  Een definitie is dus niet hetzelfde als een gewone bewering.
</p>


<h3>Uitdrukking, open zin en uitspraak</h3>

<p>
  Nu bekijken we een voorbeeld waarin een letter voorkomt:
</p>

<p class="formula">x + 1</p>

<p>
  Dit is een <strong>uitdrukking</strong>.
  Er wordt niets beweerd.
</p>

<p>
  Kijk nu naar:
</p>

<p class="formula">x + 1 = 4</p>

<p>
  Hier wordt wél iets beweerd.
  Maar we weten nog niet welke waarde <span class="formula-inline">x</span>
  heeft.
</p>

<p>
  Daarom kunnen we nog niet bepalen of de bewering waar of onwaar is.
  Dit noemen we een <strong>open zin</strong>.
</p>

<p>
  Geven we <span class="formula-inline">x</span> de waarde 3, dan krijgen we:
</p>

<p class="formula">3 + 1 = 4</p>

<p>
  Deze uitspraak is waar.
</p>

<p>
  Geven we <span class="formula-inline">x</span> de waarde 5, dan krijgen we:
</p>

<p class="formula">5 + 1 = 4</p>

<p>
  Deze uitspraak is onwaar.
</p>

<div class="callout">
  <p><strong>Onthoud:</strong></p>

  <p class="formula">x + 1</p>

  <p>
    is een uitdrukking.
  </p>

  <p class="formula">x + 1 = 4</p>

  <p>
    is een open zin.
  </p>

  <p class="formula">3 + 1 = 4</p>

  <p>
    is een uitspraak.
  </p>
</div>

<p>
  Later leren we hoe woorden zoals <em>“voor elke”</em> en
  <em>“er bestaat”</em> ervoor kunnen zorgen dat een open zin zelf
  een uitspraak wordt.
</p>


<h3>Waar of onwaar?</h3>

<p>
  Een uitspraak heeft precies één waarheidswaarde:
  <strong>waar</strong> of <strong>onwaar</strong>.
</p>

<p>
  Bekijk bijvoorbeeld:
</p>

<p class="formula">8 + 4 = 12</p>

<p>
  Dit is waar.
</p>

<p class="formula">8 + 4 = 13</p>

<p>
  Dit is onwaar.
</p>

<p>
  Beide zijn uitspraken, omdat we voor beide kunnen bepalen
  welke waarheidswaarde ze hebben.
</p>

<div class="callout">
  <p>
    <strong>Let op:</strong> “onwaar” betekent niet “geen uitspraak”.
    Een onware bewering is nog steeds een uitspraak.
  </p>
</div>


<h3>Een voorbeeld is geen bewijs</h3>

<p>
  In de wiskunde willen we vaak weten of een bewering
  <strong>voor alle gevallen</strong> geldt.
</p>

<p>
  Stel dat iemand zegt:
</p>

<div class="callout">
  <p>
    <strong>“Alle natuurlijke getallen groter dan 1 zijn priemgetallen.”</strong>
  </p>
</div>

<p>
  We kunnen verschillende voorbeelden controleren:
</p>

<p class="formula">2, 3, 5, 7</p>

<p>
  Deze getallen zijn inderdaad allemaal priemgetallen.
  Maar daarmee hebben we nog niet bewezen dat de bewering
  voor <em>alle</em> natuurlijke getallen groter dan 1 geldt.
</p>

<p>
  We moeten verder zoeken.
</p>


<h3>Een tegenvoorbeeld</h3>

<p>
  Een <strong>tegenvoorbeeld</strong> is één geval dat een algemene
  bewering weerlegt.
</p>

<p>
  In de vorige bewering is:
</p>

<p class="formula">9</p>

<p>
  een tegenvoorbeeld.
  9 is groter dan 1, maar 9 is geen priemgetal.
</p>

<p>
  Daarom is de bewering
  <em>“Alle natuurlijke getallen groter dan 1 zijn priemgetallen”</em>
  onwaar.
</p>

<div class="callout">
  <p>
    <strong>Een tegenvoorbeeld is genoeg.</strong>
  </p>

  <p>
    Om een algemene bewering te weerleggen, heb je geen honderd of
    duizend tegenvoorbeelden nodig. Eén enkel tegenvoorbeeld volstaat.
  </p>
</div>

<p>
  Omgekeerd geldt het volgende:
</p>

<div class="callout">
  <p>
    <strong>Veel voorbeelden bewijzen een algemene bewering nog niet.</strong>
  </p>

  <p>
    Duizend gevallen waarin een bewering klopt, laten zien dat ze
    in die gevallen klopt. Ze bewijzen nog niet automatisch dat ze
    voor alle gevallen klopt.
  </p>
</div>


<h3>Samenvatting</h3>

<p>
  We hebben verschillende soorten wiskundige zinnen leren onderscheiden:
</p>

<ul>
  <li>
    Een <strong>uitspraak</strong> beweert iets dat waar of onwaar kan zijn.
  </li>
  <li>
    Een <strong>berekening of uitdrukking</strong> beweert op zichzelf niets.
  </li>
  <li>
    Een <strong>vraag</strong> vraagt om informatie en is geen uitspraak.
  </li>
  <li>
    Een <strong>definitie</strong> legt vast wat een begrip betekent.
  </li>
  <li>
    Een <strong>open zin</strong> bevat bijvoorbeeld een variabele en is
    zonder verdere informatie nog niet waar of onwaar.
  </li>
  <li>
    Een <strong>tegenvoorbeeld</strong> kan een algemene bewering weerleggen.
  </li>
</ul>

<div class="callout">
  <strong>Kernidee</strong>
  <p>
    Wiskunde gaat niet alleen over rekenen.
    We moeten ook precies kunnen aangeven
    <strong>wat we beweren</strong>, wanneer een bewering
    <strong>waar of onwaar</strong> is en hoe we dat kunnen aantonen.
  </p>
</div>

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
  <li>Wat betekent “en” precies?</li>
  <li>Wat is het verschil tussen inclusief en exclusief “of”?</li>
</ul>
<h3>Niet, en, of</h3>
<p>Voor uitspraken <span class="formula-inline">P</span> en <span class="formula-inline">Q</span> gebruiken we logische operatoren:</p>
<ul>
  <li><strong>niet P</strong>: <span class="formula-inline">¬P</span>, waar precies als P onwaar is.</li>
  <li><strong>P en Q</strong>: <span class="formula-inline">P ∧ Q</span>, waar precies als beide waar zijn.</li>
  <li><strong>P of Q</strong>: <span class="formula-inline">P ∨ Q</span>, waar als minstens één van beide waar is.</li>
</ul>
<div class="callout"><strong>Definitie</strong><p><span class="formula-inline">P ∧ Q</span> is waar precies wanneer beide uitspraken waar zijn. <span class="formula-inline">P ∨ Q</span> is waar wanneer minstens één van beide waar is.</p></div>
<p>In de wiskunde is “of” <strong>inclusief</strong>. “n is even of n is een veelvoud van 3” is waar voor 6, want 6 is allebei. Exclusief “of” (“precies één van de twee”) is een andere operator en schrijven we niet als ∨.</p>
<h3>Waarheidstabel</h3>
<p>Elke combinatie van waar en onwaar heeft één uitkomst. Voor <span class="formula-inline">P ∧ ¬Q</span>:</p>
<ul>
  <li>P waar, Q waar: ¬Q onwaar, dus de samenstelling onwaar.</li>
  <li>P waar, Q onwaar: ¬Q waar, dus de samenstelling waar.</li>
  <li>P onwaar, Q waar: onwaar.</li>
  <li>P onwaar, Q onwaar: onwaar.</li>
</ul>
<p>De tabel beslist de uitspraak. Een verhaal eromheen niet.</p>
<h3>De wetten van De Morgan</h3>
<p class="formula">¬(P ∧ Q) ⇔ (¬P ∨ ¬Q)</p>
<p class="formula">¬(P ∨ Q) ⇔ (¬P ∧ ¬Q)</p>
<p><strong>Waarom klopt dit?</strong> De eerste uitspraak zegt dat het onmogelijk is dat beide tegelijk waar zijn. Dat is precies hetzelfde als zeggen dat minstens één ervan niet waar is. “Niet (regen en wind)” is “geen regen, of geen wind, of geen van beide”.</p>
<h3>Tegenvoorbeeld</h3>
<p>“Of” betekent in de wiskunde normaal gesproken <strong>minstens één</strong>, niet noodzakelijk precies één. Bij <span class="formula-inline">P ∨ Q</span> mogen P en Q dus allebei waar zijn. Wie “of” leest als “precies één”, leest een andere uitspraak.</p>
<h3>Zelfstandig</h3>
<p>Maak de waarheidstabel voor <span class="formula-inline">P ∧ ¬Q</span>.</p>
    `
  },
  {
    id: "0.3",
    title: "Implicatie en equivalentie",
    goal: "Lees implicaties correct, onderscheid de omkering en contrapositie en herken logische equivalentie.",
    theory: /* html */`
<h2>Implicatie en equivalentie</h2>
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>Wat betekent “als …, dan …”?</li>
  <li>Waarom is de omkering niet automatisch geldig?</li>
  <li>Wanneer zijn twee uitspraken equivalent?</li>
</ul>
<h3>Implicatie</h3>
<p>De uitspraak <span class="formula-inline">P ⇒ Q</span> betekent: als P waar is, dan moet Q waar zijn. P is de hypothese, Q de conclusie.</p>
<div class="callout"><strong>Definitie</strong><p>Een implicatie is alleen onwaar wanneer P waar is en Q onwaar.</p></div>
<p>Is P onwaar, dan is de implicatie waar, wat Q ook is. “Als 0 = 1, dan is 2 = 3” is dus geen tegenvoorbeeld van een implicatie. Dat voelt vreemd, en het is een afspraak: alleen een ware hypothese met een onware conclusie telt als falen.</p>
<p>Uit <span class="formula-inline">P ⇒ Q</span> volgt altijd de contrapositie <span class="formula-inline">¬Q ⇒ ¬P</span>.</p>
<h3>Omkering</h3>
<p>De omkering <span class="formula-inline">Q ⇒ P</span> is een andere uitspraak. Zij volgt niet automatisch uit de oorspronkelijke implicatie. “Als het regent, is de straat nat” zegt niets over een natte straat zonder regen.</p>
<h3>Equivalentie</h3>
<p><span class="formula-inline">P ⇔ Q</span> betekent dat beide richtingen gelden: <span class="formula-inline">P ⇒ Q</span> én <span class="formula-inline">Q ⇒ P</span>. Dan zijn P en Q waar in precies dezelfde situaties. Een bewijs van een equivalentie heeft daarom twee richtingen, tenzij je een al bekende equivalentie gebruikt.</p>
<h3>Stelling</h3>
<p><span class="formula-inline">P ⇒ Q</span> is logisch equivalent aan <span class="formula-inline">¬Q ⇒ ¬P</span>.</p>
<p><strong>Waarom klopt dit?</strong> De enige situatie waarin de implicatie faalt is P waar en Q onwaar. De contrapositie faalt precies in dezelfde situatie: ¬Q waar en ¬P onwaar. Dezelfde faalgevallen, dus dezelfde uitspraak.</p>
<h3>Tegenvoorbeeld</h3>
<p>Als een getal deelbaar is door 4, dan is het even. Maar uit “even” volgt niet dat het getal deelbaar is door 4: 6 is even maar niet deelbaar door 4. De omkering is een andere bewering, en hier is ze onwaar.</p>
<h3>Zelfstandig</h3>
<p>Schrijf de omkering en contrapositie van: “Als n deelbaar is door 6, dan is n even.” Bepaal welke bewering altijd geldig is.</p>
<p>Antwoordrichting: omkering “als n even is, dan is n deelbaar door 6” (niet altijd; 2). Contrapositie “als n niet even is, dan is n niet deelbaar door 6” (wel altijd, samen met de oorspronkelijke implicatie).</p>
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
  <li>Hoe drukken we “voor elk” en “er bestaat” formeel uit?</li>
  <li>Hoe ontken je een uitspraak met een kwantor?</li>
  <li>Waarom is de volgorde van kwantoren belangrijk?</li>
</ul>
<h3>Universele en existentiële kwantor</h3>
<p><span class="formula">∀x</span> betekent “voor alle x” en <span class="formula">∃x</span> betekent “er bestaat een x”.</p>
<div class="callout"><strong>Definitie</strong><p><span class="formula-inline">∀x P(x)</span> zegt dat P voor elk toegelaten x waar is. <span class="formula-inline">∃x P(x)</span> zegt dat er minstens één toegelaten x bestaat waarvoor P waar is.</p></div>
<p>Het domein hoort erbij. “Voor alle n” op de natuurlijke getallen is een andere uitspraak dan “voor alle n” op de gehele getallen. Bestaat er een natuurlijk getal kleiner dan 0? Nee. Bestaat er een geheel getal kleiner dan 0? Ja.</p>
<h3>Volgorde</h3>
<p><span class="formula-inline">∀n ∃m (m > n)</span> op de natuurlijke getallen is waar: bij elke n past een grotere m, bijvoorbeeld n + 1. Die m mag van n afhangen.</p>
<p><span class="formula-inline">∃m ∀n (m > n)</span> is onwaar: geen enkel getal is groter dan alle getallen. Eerst een m kiezen, en die daarna tegen elke n moeten laten winnen, is een sterkere eis.</p>
<h3>Negatie</h3>
<p>Belangrijk zijn:</p>
<p class="formula">¬(∀x P(x)) ⇔ ∃x ¬P(x)</p>
<p class="formula">¬(∃x P(x)) ⇔ ∀x ¬P(x)</p>
<p><strong>Waarom klopt dit?</strong> “Niet iedereen” betekent dat er minstens één uitzondering is. “Niemand” betekent dat voor iedereen de eigenschap ontbreekt. De ontkenning van “elk priemgetal is oneven” is niet “elk priemgetal is even”, maar “er is een priemgetal dat niet oneven is”: 2.</p>
<h3>Tegenvoorbeeld</h3>
<p>De bewering “voor alle natuurlijke n geldt n² ≥ n + 1” is fout; neem n = 1, want 1 ≥ 2 is onwaar. Eén uitzondering ontkent een ∀.</p>
<h3>Zelfstandig</h3>
<p>Ontken: “Voor elk natuurlijk getal n bestaat een natuurlijk getal m zodat m > n.”</p>
<p>Antwoordrichting: er bestaat een natuurlijk getal n zodat voor elk natuurlijk getal m geldt dat m ≤ n. Die ontkenning is onwaar, want de oorspronkelijke uitspraak is waar. Ontkennen verandert de vorm; het maakt een ware uitspraak niet ineens waar in ontkende vorm.</p>
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
  <li>Hoe begin je met de hypothese?</li>
  <li>Hoe eindig je met precies de gewenste conclusie?</li>
</ul>
<h3>De structuur</h3>
<p>Bij een directe bewijsvoering neem je de hypothese aan en leid je stap voor stap de conclusie af. Elke stap gebruikt een definitie, een al bewezen feit, of een rekenregel. “Het is duidelijk” is geen stap.</p>
<div class="callout"><strong>Bewijsschema</strong><p>Neem aan dat P waar is. Gebruik definities en eerder bewezen resultaten. Leid Q af. Dus P ⇒ Q.</p></div>
<h3>Voorbeeld</h3>
<p>Bewijs: de som van twee even gehele getallen is even. Een geheel getal is even als het 2 keer een geheel getal is. Neem even getallen <span class="formula-inline">2a</span> en <span class="formula-inline">2b</span>. Dan is <span class="formula-inline">2a + 2b = 2(a + b)</span>, dus de som is even.</p>
<p>a en b zijn willekeurig. Het bewijs gaat niet over 4 en 6. Die mogen als controle dienen, niet als bewijs.</p>
<h3>Stelling</h3>
<p>Een bewijs moet voor <strong>alle</strong> toegelaten gevallen werken; één berekening voor één getal bewijst geen universele uitspraak.</p>
<h3>Tegenvoorbeeld</h3>
<p>Uit 2, 4 en 6 kun je niet concluderen dat alle even getallen een bepaalde eigenschap hebben. Een bewijs moet het willekeurige geval behandelen. Ook een tekening is geen bewijs, tenzij elke stap in de tekening is verantwoord.</p>
<h3>Zelfstandig</h3>
<p>Bewijs rechtstreeks dat de som van twee oneven gehele getallen even is.</p>
<p>Antwoordrichting: oneven getallen zijn <span class="formula-inline">2a + 1</span> en <span class="formula-inline">2b + 1</span>. Som: <span class="formula-inline">2a + 2b + 2 = 2(a + b + 1)</span>, dus even.</p>
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
<p>Om <span class="formula-inline">P ⇒ Q</span> te bewijzen, mag je de equivalente uitspraak <span class="formula-inline">¬Q ⇒ ¬P</span> bewijzen. Je bewijst dus een andere zin, waarvan in 0.3 al vaststond dat ze hetzelfde betekent.</p>
<div class="callout"><strong>Stelling</strong><p><span class="formula-inline">P ⇒ Q</span> en <span class="formula-inline">¬Q ⇒ ¬P</span> zijn logisch equivalent.</p></div>
<p>Handig als ¬Q een vorm heeft waarmee je kunt rekenen, en P niet. “n² even” begint bij een kwadraat; “n oneven” begint bij n zelf en is daarom makkelijker om mee te starten.</p>
<h3>Voorbeeld</h3>
<p>Bewijs: als n² even is, dan is n even. Contrapositie: als n niet even is, dus n oneven, dan is n² oneven. Schrijf <span class="formula-inline">n = 2k + 1</span>; dan <span class="formula-inline">n² = 4k² + 4k + 1 = 2(2k² + 2k) + 1</span>, een oneven getal. Dus als n² even is, kan n niet oneven zijn.</p>
<h3>Tegenvoorbeeld</h3>
<p>De omkering “als n even is, dan is n² even” is wel waar in dit voorbeeld, maar dat komt door een afzonderlijk argument. In het algemeen mag je een omkering nooit verwarren met contrapositie. Contrapositie draait én ontkent. Omkering draait alleen.</p>
<h3>Zelfstandig</h3>
<p>Gebruik contrapositie om te bewijzen: als n² oneven is, dan is n oneven.</p>
<p>Antwoordrichting: contrapositie is “als n even is, dan is n² even”. n = 2k geeft n² = 4k², even.</p>
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
<p>Wil je P bewijzen, neem dan tijdelijk ¬P aan. Leid daaruit een tegenspraak af: een uitspraak Q én haar ontkenning, of een botsing met een al bewezen feit. Dan kan ¬P niet waar zijn, en volgt P. De aanname wordt aan het eind weggegooid; ze was een werktuig, geen resultaat.</p>
<div class="callout"><strong>Bewijsschema</strong><p>Aanname: ¬P. Leid Q en ¬Q af. Dat is onmogelijk. Dus ¬P is fout en P is waar.</p></div>
<h3>Voorbeeld</h3>
<p>Er is geen rationaal getal waarvan het kwadraat 2 is. Stel van wel: <span class="formula-inline">√2 = a/b</span> in volledig vereenvoudigde vorm, a en b geheel, b ≠ 0, zonder gemeenschappelijke factor groter dan 1. Dan a² = 2b², dus a² even, dus a even (0.6). Schrijf a = 2k. Dan 4k² = 2b², dus b² = 2k², dus b even. Dan hebben a en b een factor 2 gemeen, in strijd met de vereenvoudigde vorm.</p>
<p>Dit gebruikt alleen even en oneven, en dat een breuk een schrijfwijze in laagste termen heeft. De bouw van de reële getallen komt later.</p>
<h3>Tegenvoorbeeld</h3>
<p>Een losse onwaarschijnlijke uitkomst is geen tegenspraak. Er moet een echte logische onverenigbaarheid ontstaan: twee uitspraken die niet tegelijk waar kunnen zijn. “Dan wordt het getal erg groot” is geen tegenspraak.</p>
<h3>Zelfstandig</h3>
<p>Maak een bewijsschema voor de uitspraak dat er geen grootste natuurlijk getal bestaat.</p>
<p>Antwoordrichting: stel dat N het grootste is. Dan is N + 1 een natuurlijk getal groter dan N. Tegenspraak. Dus zo’n N bestaat niet.</p>
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
  <li>Waarom zijn twee stappen voldoende?</li>
  <li>Wat is de inductiehypothese?</li>
  <li>Wat bewijst de methode precies?</li>
</ul>
<h3>Het principe</h3>
<p>De natuurlijke getallen nemen we hier als 0, 1, 2, … Fase 1 bouwt ze verder uit. Het principe werkt ook als je bij 1 begint; dan is de basis P(1).</p>
<div class="callout"><strong>Stelling</strong><p>Als P(0) waar is en uit P(k) volgt dat P(k+1) waar is voor elk natuurlijk k, dan is P(n) waar voor alle natuurlijke n.</p></div>
<h3>Waarom klopt dit?</h3>
<p>De basisstap zet de eerste dominosteen vast. De inductiestap zegt dat elke geldige steen de volgende geldig maakt. Daardoor volgt de uitspraak voor alle natuurlijke getallen. De stap moet voor een willekeurige k gelden, niet voor één voorbeeld. P(k) in die stap heet de <strong>inductiehypothese</strong>: je mag haar gebruiken, maar alleen om P(k+1) te halen.</p>
<h3>Voorbeeld</h3>
<p>Voor <span class="formula-inline">0 + 1 + … + n = n(n+1)/2</span>: basis n = 0, beide kanten 0. Neem de formule aan voor k en tel k + 1 erbij op. Dan ontstaat <span class="formula-inline">k(k+1)/2 + (k+1) = (k+1)(k+2)/2</span>. Dat is de formule voor k + 1.</p>
<p>Wie bij 1 begint, zoals in de opgave hieronder, controleert n = 1 en laat de stap vanaf daar lopen. Dat dekt 1, 2, 3, … en niet 0. Zeg dat erbij.</p>
<h3>Wat geen inductie is</h3>
<p>Alleen de eerste gevallen controleren is geen inductiebewijs. Een patroon kan later breken. Een stap zonder basis bewijst niets: de stenen kunnen allemaal omliggen. Een basis zonder stap bewijst één geval.</p>
<p>Het “bewijs” dat alle paarden dezelfde kleur hebben faalt in de stap van 1 naar 2. Twee groepen van één paard hebben geen gemeenschappelijk paard, dus de kleur wordt niet doorgegeven. De stap geldt niet voor elke k.</p>
<h3>Tegenvoorbeeld</h3>
<p>Alleen veel eerste gevallen controleren is geen inductiebewijs. Een patroon kan later breken.</p>
<h3>Zelfstandig</h3>
<p>Bewijs met inductie dat <span class="formula-inline">1 + 3 + 5 + … + (2n − 1) = n²</span>.</p>
<p>Antwoordrichting: basis n = 1, som 1 = 1². Stap: som tot k is k², plus de volgende oneven term 2(k+1) − 1 = 2k + 1, geeft k² + 2k + 1 = (k+1)².</p>
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
  <li>Wat betekent lidmaatschap?</li>
  <li>Hoe combineren we verzamelingen?</li>
</ul>
<h3>Elementen en deelverzamelingen</h3>
<p>Een verzameling is een collectie objecten die we als geheel beschouwen. Twee verzamelingen zijn gelijk als ze precies dezelfde elementen hebben. Volgorde en herhaling tellen niet: <span class="formula-inline">{1, 2, 2} = {2, 1}</span>. Een verzameling is geen lijst.</p>
<p>We schrijven <span class="formula-inline">x ∈ A</span> wanneer x een element van A is en <span class="formula-inline">A ⊆ B</span> wanneer elk element van A ook in B zit. Elke verzameling is deelverzameling van zichzelf.</p>
<div class="callout"><strong>Definitie</strong><p>De lege verzameling ∅ heeft geen elementen. Er is er één. ∅ is deelverzameling van elke verzameling: de eis “elk element van ∅ zit in A” gaat over geen enkel element en is dus waar.</p></div>
<p><span class="formula-inline">{∅}</span> is niet leeg. Haar enige element is ∅. Dus <span class="formula-inline">∅ ∈ {∅}</span>, maar <span class="formula-inline">∅ ≠ {∅}</span>.</p>
<h3>Bewerkingen</h3>
<ul>
  <li>unie: <span class="formula-inline">A ∪ B</span>, elementen die in A of in B zitten (of in allebei).</li>
  <li>doorsnede: <span class="formula-inline">A ∩ B</span>, elementen die in allebei zitten.</li>
  <li>verschil: <span class="formula-inline">A \\ B</span>, elementen van A die niet in B zitten.</li>
  <li>complement: elementen buiten A, alleen binnen een afgesproken universum.</li>
</ul>
<div class="callout"><strong>Stelling</strong><p>De doorsnede is commutatief: <span class="formula-inline">A ∩ B = B ∩ A</span>. Ook: <span class="formula-inline">A ⊆ B</span> precies als <span class="formula-inline">A ∪ B = B</span>.</p></div>
<p><strong>Waarom klopt dit?</strong> Een element zit in A ∩ B precies wanneer het in A én in B zit. “A én B” is hetzelfde als “B én A”. En A ∪ B = B betekent dat elk element van A al in B zat.</p>
<h3>Tegenvoorbeeld</h3>
<p><span class="formula-inline">A ∈ B</span> betekent niet hetzelfde als <span class="formula-inline">A ⊆ B</span>. Een element en een verzameling zijn verschillende rollen. 1 ∈ {1}, maar “1 ⊆ {1}” is hier onzin als 1 geen verzameling is waarvan we de elementen natrekken.</p>
<h3>Zelfstandig</h3>
<p>Neem A = {1, 2, 3} en B = {3, 4}. Bepaal A ∪ B, A ∩ B en A \\ B.</p>
<p>Antwoord: {1, 2, 3, 4}, {3}, {1, 2}.</p>
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
  <li>Hoe kunnen we zeggen dat twee objecten bij elkaar horen?</li>
  <li>Wat betekenen reflexief, symmetrisch en transitief?</li>
  <li>Hoe ontstaan equivalentieklassen?</li>
</ul>
<h3>Koppels</h3>
<p>Een relatie koppelt dingen. Het <strong>cartesisch product</strong> A × B is de verzameling koppels (a, b) met a ∈ A en b ∈ B. (1, 2) ≠ (2, 1). Een koppel is geen verzameling van twee elementen: {1, 2} = {2, 1}.</p>
<p>Een <strong>relatie</strong> van A naar B is een deelverzameling van A × B. Op één verzameling A schrijven we aRb als (a, b) in de relatie zit.</p>
<h3>Drie eigenschappen</h3>
<ul>
  <li><strong>Reflexief:</strong> voor elke a geldt aRa.</li>
  <li><strong>Symmetrisch:</strong> als aRb, dan bRa.</li>
  <li><strong>Transitief:</strong> als aRb en bRc, dan aRc.</li>
</ul>
<div class="callout"><strong>Definitie</strong><p>Een equivalentierelatie is reflexief, symmetrisch en transitief.</p></div>
<p>“Evenveel rest bij deling door 3” op de gehele getallen is een equivalentierelatie. 5 en 8 horen bij elkaar, want beide rest 2. “Kleiner dan” is transitief, niet reflexief en niet symmetrisch, dus geen equivalentie.</p>
<h3>Klassen</h3>
<p>De <strong>equivalentieklasse</strong> van a is de verzameling van alles dat met a in relatie staat. Bij rest bij deling door 3 zijn er drie klassen: rest 0, rest 1 en rest 2. Elke gehele zit in precies één klasse. De klassen vormen een <strong>partitie</strong>: ze bedekken de verzameling, en twee klassen zijn gelijk of hebben lege doorsnede.</p>
<p>Omgekeerd geeft elke partitie een equivalentierelatie: aRb precies als a en b in hetzelfde blok zitten.</p>
<h3>Tegenvoorbeeld</h3>
<p>“Is kind van” is niet reflexief, niet symmetrisch en niet transitief. Een klasse zou hier niet netjes de mensen verdelen.</p>
<h3>Zelfstandig</h3>
<p>Ga na of “heeft dezelfde absolute waarde” op de gehele getallen reflexief, symmetrisch en transitief is.</p>
<p>Antwoord: alle drie ja. Klassen zijn {0} en, voor n > 0, {n, −n}.</p>
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
  <li>Wanneer is een relatie een ordening?</li>
  <li>Wat is het verschil tussen partieel en totaal?</li>
  <li>Wanneer bestaat een kleinste element?</li>
</ul>
<h3>Partiële orde</h3>
<p>Een relatie ≤ op A is een <strong>partiële orde</strong> als ze reflexief, antisymmetrisch en transitief is. Antisymmetrisch: als a ≤ b en b ≤ a, dan a = b. Dat is niet hetzelfde als “niet symmetrisch”.</p>
<div class="callout"><strong>Definitie</strong><p>Een totale orde is een partiële orde waarin elke twee elementen vergelijkbaar zijn: a ≤ b of b ≤ a.</p></div>
<p>De gewone ≤ op de gehele getallen is totaal. “A is deelverzameling van B” op de deelverzamelingen van {1, 2} is partieel: {1} en {2} zijn niet vergelijkbaar. Allebei zijn dat ordeningen.</p>
<h3>Kleinste en minimaal</h3>
<p>Een <strong>kleinste</strong> element m voldoet aan m ≤ a voor elke a. Er is er hoogstens één. Een <strong>minimaal</strong> element heeft niets strikt eronder; er kunnen er meerdere zijn. In de deelverzamelingen van {1, 2} zonder de volle verzameling te eisen, is ∅ het kleinste. In de niet-lege deelverzamelingen zijn {1} en {2} minimaal, en er is geen kleinste.</p>
<p>Grootste en maximaal zijn de omgekeerde begrippen.</p>
<h3>Tegenvoorbeeld</h3>
<p>“Deelbaar door” op de natuurlijke getallen groter dan 1 is een partiële orde als we “deelt” als ≤ lezen, maar niet totaal: 2 deelt 3 niet en 3 deelt 2 niet.</p>
<h3>Zelfstandig</h3>
<p>Is “≤” op de natuurlijke getallen een totale orde? Bestaat er een kleinste natuurlijk getal?</p>
<p>Antwoord: ja, en ja: 0, als de natuurlijke getallen bij 0 beginnen; anders 1. Zeg welke afspraak je gebruikt.</p>
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
  <li>Wat hoort er bij een functie, naast de rekenregel?</li>
  <li>Wat zijn domein, codomein en beeld?</li>
  <li>Wanneer is een relatie geen functie?</li>
</ul>
<h3>Definitie</h3>
<p>Een <strong>functie</strong> f: A → B is een relatie van A naar B waarin bij elke a ∈ A precies één b ∈ B hoort. A is het <strong>domein</strong>, B het <strong>codomein</strong>. We schrijven f(a) = b.</p>
<div class="callout"><strong>Definitie</strong><p>Het beeld f(A) is { f(a) | a ∈ A }. Dat hoeft niet heel B te zijn.</p></div>
<p>Zonder domein en codomein is een formule nog geen functie. Dezelfde regel n ↦ n kan van ℕ naar ℕ gaan, of van ℕ naar ℤ. Dat zijn verschillende functies. Het codomein hoort bij de functie, niet alleen de pijl.</p>
<h3>Geen functie</h3>
<p>“Is kind van”, gelezen als één ouder, faalt: een mens kan twee ouders hebben, dus niet precies één beeld. De lege relatie op een niet-leeg domein faalt ook: sommige elementen hebben géén beeld.</p>
<p>Samenstellen: (g ∘ f)(a) = g(f(a)), alleen als het beeld van f in het domein van g past. Samenstellen is niet altijd commutatief. f(x) = x + 1 en g(x) = 2x geven g(f(x)) = 2x + 2 en f(g(x)) = 2x + 1.</p>
<h3>Tegenvoorbeeld</h3>
<p>De relatie op ℝ gegeven door x² + y² = 1 is geen functie van x naar y: bij x = 0 horen y = 1 en y = −1.</p>
<h3>Zelfstandig</h3>
<p>Is “aan elke breuk haar teller koppelen” een functie van de rationale getallen naar de gehele getallen? Let op schrijfwijze.</p>
<p>Antwoord: nee, niet zonder afspraak. 1/2 en 2/4 zijn hetzelfde rationale getal en hebben andere tellers. Met een vaste schrijfwijze in laagste termen wordt het wel een functie.</p>
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
  <li><strong>Injectief:</strong> f(a) = f(a′) impliceert a = a′. Verschillende inputs, verschillende outputs.</li>
  <li><strong>Surjectief:</strong> voor elke b in het codomein is er een a met f(a) = b. Het beeld is het hele codomein.</li>
  <li><strong>Bijectief:</strong> injectief en surjectief.</li>
</ul>
<div class="callout"><strong>Stelling</strong><p>Een functie heeft een inverse functie precies als ze bijectief is.</p></div>
<p><strong>Waarom klopt dit?</strong> Is f bijectief, dan hoort bij elke b precies één a met f(a) = b. Noem dat a = f⁻¹(b). De twee samenstellingen zijn de identiteit. Bestaat f⁻¹, dan is f injectief, want gelijke beelden geven via de inverse gelijke originelen, en surjectief, want b = f(f⁻¹(b)).</p>
<p>f: ℤ → ℤ met f(n) = 2n is injectief en niet surjectief: 1 wordt niet geraakt. f: {1, 2, 3} → {a, b} met f(1) = f(2) = a en f(3) = b is surjectief en niet injectief. “Elke functie heeft een inverse” is dus onwaar.</p>
<h3>Tegenvoorbeeld</h3>
<p>f: ℕ → ℕ, f(n) = n, is surjectief. Dezelfde regel f: ℕ → ℤ, f(n) = n, is niet surjectief, want −1 wordt niet geraakt. Het codomein beslist mee.</p>
<h3>Zelfstandig</h3>
<p>Is f: ℤ → ℤ, f(n) = n + 1, bijectief? Geef de inverse als dat zo is.</p>
<p>Antwoord: ja. Inverse: g(m) = m − 1.</p>
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
  <li>Wat is aftelbaar oneindig?</li>
  <li>Waarom zijn er meer reële getallen dan natuurlijke getallen?</li>
</ul>
<h3>Even groot</h3>
<p>Twee verzamelingen zijn <strong>even groot</strong> als er een bijectie tussen bestaat. Voor eindige verzamelingen is dat het gewone aantal. Een verzameling is eindig als ze leeg is of in bijectie met {1, …, n} voor een n. Dat n ligt vast.</p>
<div class="callout"><strong>Stelling</strong><p>Een eindige verzameling is niet in bijectie met een echte deelverzameling van zichzelf. Oneindige verzamelingen kunnen dat wel.</p></div>
<p>n ↦ n + 1 is een bijectie van ℕ naar {1, 2, 3, …}, een echte deelverzameling als 0 ∈ ℕ. “Oneindig + 1 = oneindig” is hier geen rekensom. We hebben geen getal oneindig ingevoerd, alleen bijecties.</p>
<h3>Aftelbaar</h3>
<p>Aftelbaar oneindig betekent: in bijectie met ℕ. De elementen staan dan op een rij a₀, a₁, a₂, … waarin elk element precies één keer voorkomt. ℤ is aftelbaar: 0, 1, −1, 2, −2, … De even natuurlijke getallen ook, via n ↦ 2n.</p>
<h3>Overaftelbaar</h3>
<p>Cantor: (0, 1) is niet aftelbaar. Stel van wel, en zet alle getallen in een rij r₀, r₁, r₂, … als decimale ontwikkelingen. Kies een getal 0,c₀c₁c₂… met cₙ = 4 als het n-de cijfer van rₙ niet 4 is, en cₙ = 5 als dat cijfer wel 4 is. Dit getal zit in (0, 1) en verschilt van rₙ op plek n, voor elke n. Het staat niet in de rij. Tegenspraak.</p>
<p>De keuze 4 en 5 ontwijkt 0,1999… = 0,2000…. Er is dus geen bijectie van ℕ naar ℝ. Dat er precies één grootte tussen ℕ en ℝ zit, bewijzen we hier niet; dat ligt buiten de gewone axiomatiek.</p>
<p>Hetzelfde idee, zonder decimalen: er is geen surjectie van A naar de verzameling van alle deelverzamelingen van A. De verzameling { a ∈ A | a ∉ f(a) } zit niet in het beeld van f.</p>
<h3>Tegenvoorbeeld</h3>
<p>{1, …, 10} is niet in bijectie met een echte deelverzameling van zichzelf. Het oneindige voorbeeld hierboven gaat daar niet op.</p>
<h3>Zelfstandig</h3>
<p>Geef een bijectie van ℕ naar de even natuurlijke getallen, en zeg waarom (0, 1) niet op zo’n rij past.</p>
<p>Antwoord: n ↦ 2n. (0, 1) past niet, want elke vermeende rij mist het diagonaalgetal uit het bewijs.</p>
    `
  }
];
