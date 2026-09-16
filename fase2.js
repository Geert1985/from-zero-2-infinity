/* Lesstof Fase 2 — Algebra & geometrie. */
const MILESTONES_2 = [
  {
    id: "2.1",
    title: "Variabelen & algebraïsche uitdrukkingen",
    goal: "Hoe kan een getal een onbekende worden?",
    theory: /* html */`
      <h2>Variabelen & algebraïsche uitdrukkingen</h2>
      <p><strong>Doel:</strong></p>
      <ul>
        <li>begrijpen waarom we letters gebruiken in plaats van alleen bekende getallen</li>
        <li>een algebraïsche uitdrukking lezen: termen, coëfficiënten en constanten</li>
        <li>een uitdrukking berekenen door een waarde in te vullen</li>
        <li>gelijksoortige termen herkennen en samennemen</li>
      </ul>

      <h3>1. Van een bekend getal naar een letter</h3>
      <p>In Fase 1 rekenden we met concrete getallen. Een tas kost 12 euro. Twee tassen kosten:</p>
      <p class="formula">2 · 12 = 24</p>
      <p>Maar wat als de prijs nog niet bekend is, of als die kan veranderen? Dan willen we het <em>patroon</em> opschrijven, niet één specifiek geval.</p>
      <p>Noem de prijs van één tas <strong>p</strong>. Twee tassen kosten dan:</p>
      <p class="formula">2p</p>
      <p>Als later blijkt dat p = 12, vullen we in en krijgen we opnieuw 24. Als p = 15, krijgen we 30. Dezelfde uitdrukking beschrijft alle mogelijke prijzen.</p>
      <div class="callout"><strong>Een variabele is een letter die een getal voorstelt.</strong> Dat getal kan nog onbekend zijn, of het kan verschillende waarden aannemen.</div>

      <h3>2. Onbekende of veranderlijke?</h3>
      <p>Het woord “variabele” dekt twee situaties die je moet onderscheiden.</p>
      <h4>Een onbekende</h4>
      <p>In <span class="formula">x + 3 = 7</span> zoeken we één waarde van x die de gelijkheid waar maakt. Hier is x een <strong>onbekende</strong>.</p>
      <h4>Een veranderlijke</h4>
      <p>In <span class="formula">y = 2x + 1</span> mag x verschillende waarden aannemen. Bij elke keuze van x hoort een y. Hier is x een <strong>veranderlijke</strong>.</p>
      <p>In beide gevallen gebruiken we dezelfde letters. Het verschil zit in de vraag die we stellen: zoeken we één waarde, of beschrijven we een verband?</p>

      <h3>3. 3x betekent 3 keer x</h3>
      <p>In de algebra laten we het vermenigvuldigingsteken vaak weg:</p>
      <ul>
        <li><span class="formula">3x</span> betekent <span class="formula">3 · x</span></li>
        <li><span class="formula">ab</span> betekent <span class="formula">a · b</span></li>
        <li><span class="formula">2(x + 1)</span> betekent <span class="formula">2 · (x + 1)</span></li>
      </ul>
      <p>Dat is de meest gemaakte eerste fout: <strong>3x is niet 3 + x</strong>.</p>
      <p>Staat er geen getal vóór de letter, dan is de onzichtbare factor 1:</p>
      <p class="formula">x = 1x</p>
      <p class="formula">-x = -1x</p>

      <h3>4. De onderdelen van een uitdrukking</h3>
      <p>Een <strong>algebraïsche uitdrukking</strong> bestaat uit getallen, letters en bewerkingen. Ze bevat <em>geen</em> gelijkheidsteken. Zodra er een <span class="formula">=</span> staat, is het een vergelijking (les 2.3).</p>
      <p>Kijk naar:</p>
      <p class="formula">3x + 5</p>
      <ul>
        <li><strong>3</strong> is de <strong>coëfficiënt</strong> van x: de factor waarmee x wordt vermenigvuldigd</li>
        <li><strong>x</strong> is de variabele</li>
        <li><strong>5</strong> is de <strong>constante term</strong>: een term zonder variabele</li>
      </ul>
      <p>De stukken die door een plus- of minteken van elkaar gescheiden worden, heten <strong>termen</strong>. In <span class="formula">4x + 3y − 8</span> zijn er drie termen: <span class="formula">4x</span>, <span class="formula">3y</span> en <span class="formula">−8</span>.</p>
      <p>Het minteken hoort bij de term die erna komt. Daarom schrijven we de derde term als −8, niet als “8 met een min ervoor in de lucht”.</p>

      <h3>5. Invullen: van patroon naar getal</h3>
      <p>Als de waarde van de variabele bekend is, vervang je de letter door dat getal. Dat heet <strong>invullen</strong> of <strong>substitueren</strong>.</p>
      <p>Neem <span class="formula">3x + 5</span> en x = 4:</p>
      <p class="formula">3 · 4 + 5 = 12 + 5 = 17</p>
      <p>De waarde van de uitdrukking is 17.</p>
      <p>Vul je een negatief getal in, zet dan haakjes. Voor x = −2:</p>
      <p class="formula">3 · (−2) + 5 = −6 + 5 = −1</p>
      <p>Zonder haakjes is <span class="formula">3 · −2</span> lastig leesbaar en makkelijk fout.</p>
      <p>Bij twee letters vul je beide in. Voor <span class="formula">2a + 5b</span> met a = 3 en b = 1:</p>
      <p class="formula">2 · 3 + 5 · 1 = 6 + 5 = 11</p>

      <h3>6. Gelijksoortige termen</h3>
      <p>Termen zijn <strong>gelijksoortig</strong> als ze precies dezelfde letter(s) met precies dezelfde exponent(en) hebben.</p>
      <ul>
        <li><span class="formula">3x</span> en <span class="formula">7x</span> zijn gelijksoortig</li>
        <li><span class="formula">3x</span> en <span class="formula">3x<sup>2</sup></span> zijn het niet: x en x² zijn verschillende soorten</li>
        <li><span class="formula">3x</span> en <span class="formula">3y</span> zijn het niet: andere letter</li>
        <li><span class="formula">4</span> en <span class="formula">−9</span> zijn gelijksoortig: beide constante termen</li>
      </ul>
      <p>Gelijksoortige termen mag je samennemen door de coëfficiënten op te tellen:</p>
      <p class="formula">3x + 5x = (3 + 5)x = 8x</p>
      <p>Dat mag omdat beide termen “een aantal keren x” zijn. Drie keer x plus vijf keer x is acht keer x.</p>
      <p>Maar <span class="formula">3x + 5</span> blijft <span class="formula">3x + 5</span>. Je mag de 3 en de 5 niet tot 8x maken: de 5 is geen aantal keren x.</p>
      <p>Een langer voorbeeld:</p>
      <p class="formula">4x + 7 − x + 2 = 3x + 9</p>
      <p>Eerst de x-termen: 4x en −x geven 3x. Daarna de constanten: 7 + 2 = 9.</p>

      <div class="callout"><strong>Kernidee:</strong> algebra gebruikt letters om een hele familie berekeningen in één keer te schrijven. <span class="formula">3 + 5 = 8</span> is één som. <span class="formula">3x + 5x = 8x</span> geldt voor elk getal dat je voor x kiest.</div>
    `
  }
]
