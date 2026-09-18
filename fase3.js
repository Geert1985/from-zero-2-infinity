/* Lesstof Fase 3 — Calculus. Breid theory/practice/exam hier uit. */
const MILESTONES_3 = [
// Fase 3 — Calculus & Analyse
// Van verandering naar afgeleiden, integralen en multivariabele calculus.
  {
    id: "3.1",
    title: "Verandering & gemiddelde snelheid",
    goal: "Hoe meten we verandering?",
    theory: /*html*/
    `
    <h2>Verandering & gemiddelde snelheid</h2>

    <p>
      In Fase 2 leerden we hoe we situaties kunnen beschrijven met getallen,
      formules en functies. In Fase 3 stellen we een nieuwe vraag:
    </p>

    <div class="callout">
      <strong>Hoe kunnen we precies beschrijven hoe iets verandert?</strong>
    </div>

    <p>
      Denk bijvoorbeeld aan een trein. De positie van de trein verandert voortdurend.
      Soms rijdt hij sneller, soms langzamer en soms staat hij stil.
      Om zulke processen wiskundig te beschrijven, moeten we leren meten
      <strong>hoeveel iets verandert</strong>.
    </p>


    <h3>Van plaats naar verandering</h3>

    <p>
      Stel dat een trein vertrekt uit een station.
      Na 1 uur bevindt hij zich 80 km verderop.
      Na 2 uur bevindt hij zich 160 km verderop.
    </p>

    <p>
      We kunnen dan zeggen dat de trein in die twee uur
      <strong>160 km van positie is veranderd</strong>.
    </p>

    <p class="formula">
      \\Delta s = 160 - 0 = 160\\ \\text{km}
    </p>

    <p>
      Het symbool <strong>Δ</strong> (delta) betekent:
      <strong>verandering in</strong>.
    </p>

    <p>
      We kunnen dus schrijven:
    </p>

    <p class="formula">
      \\Delta s = s_2 - s_1
    </p>

    <p>
      waarbij:
    </p>

    <ul>
      <li><strong>s₁</strong> de beginpositie is;</li>
      <li><strong>s₂</strong> de eindpositie is;</li>
      <li><strong>Δs</strong> de verandering in positie is.</li>
    </ul>


    <h3>Verandering per tijdseenheid</h3>

    <p>
      Alleen weten dat een trein 160 km heeft afgelegd, vertelt ons nog niet
      hoe snel dat gebeurde.
    </p>

    <p>
      Daarvoor moeten we ook weten <strong>hoeveel tijd</strong> daarvoor nodig was.
    </p>

    <p>
      In ons voorbeeld duurt de rit 2 uur:
    </p>

    <p class="formula">
      \\Delta t = 2 - 0 = 2\\ \\text{uur}
    </p>

    <p>
      De trein verandert dus 160 km van positie in 2 uur.
      Per uur is dat gemiddeld:
    </p>

    <p class="formula">
      \\frac{160\\ \\text{km}}{2\\ \\text{uur}}
      =
      80\\ \\text{km/u}
    </p>

    <div class="callout">
      <strong>
        Gemiddelde snelheid = verandering in positie gedeeld door verandering in tijd.
      </strong>
    </div>

    <p>
      Dit is het eerste belangrijke idee van calculus:
      we kijken niet alleen naar een waarde, maar naar
      <strong>hoe die waarde verandert</strong>.
    </p>


    <h3>Een algemener voorbeeld</h3>

    <p>
      Stel dat een auto op tijdstip 2 uur een positie van 50 km heeft
      en op tijdstip 4 uur een positie van 170 km.
    </p>

    <p>
      De verandering in positie is:
    </p>

    <p class="formula">
      \\Delta s = 170 - 50 = 120\\ \\text{km}
    </p>

    <p>
      De verandering in tijd is:
    </p>

    <p class="formula">
      \\Delta t = 4 - 2 = 2\\ \\text{uur}
    </p>

    <p>
      De gemiddelde snelheid is dus:
    </p>

    <p class="formula">
      v_{\\text{gem}}
      =
      \\frac{\\Delta s}{\\Delta t}
      =
      \\frac{120}{2}
      =
      60\\ \\text{km/u}
    </p>

    <p>
      Let op: dit betekent niet noodzakelijk dat de auto voortdurend 60 km/u reed.
      Misschien reed hij eerst 40 km/u, daarna 80 km/u en later 60 km/u.
      <strong>60 km/u is de gemiddelde snelheid over het hele interval.</strong>
    </p>


    <h3>Van gemiddelde snelheid naar gemiddelde verandering</h3>

    <p>
      Hetzelfde idee werkt ook buiten beweging.
      We kunnen bijvoorbeeld kijken naar temperatuur, afstand, massa,
      energie, kosten of een algemene wiskundige functie.
    </p>

    <p>
      Stel dat de temperatuur stijgt van 10 °C naar 25 °C
      gedurende 3 uur.
    </p>

    <p class="formula">
      \\Delta T = 25 - 10 = 15\\ ^\\circ\\text{C}
    </p>

    <p class="formula">
      \\Delta t = 3\\ \\text{uur}
    </p>

    <p>
      De gemiddelde verandering per uur is:
    </p>

    <p class="formula">
      \\frac{\\Delta T}{\\Delta t}
      =
      \\frac{15}{3}
      =
      5\\ ^\\circ\\text{C/u}
    </p>

    <p>
      We spreken daarom niet alleen over gemiddelde snelheid,
      maar algemener over <strong>gemiddelde veranderingssnelheid</strong>.
    </p>

    <div class="callout">
      <strong>
        De gemiddelde veranderingssnelheid vertelt hoeveel een grootheid
        gemiddeld verandert per eenheid van de onafhankelijke variabele.
      </strong>
    </div>


    <h3>Verandering bij een functie</h3>

    <p>
      Nu maken we de stap van concrete situaties naar functies.
    </p>

    <p>
      Stel dat:
    </p>

    <p class="formula">
      f(x) = x^2
    </p>

    <p>
      We willen weten hoe sterk de functie gemiddeld verandert
      tussen <strong>x = 1</strong> en <strong>x = 4</strong>.
    </p>

    <p>
      Eerst bepalen we de twee functiewaarden:
    </p>

    <p class="formula">
      f(1)=1
    </p>

    <p class="formula">
      f(4)=16
    </p>

    <p>
      De verandering in de functiewaarde is:
    </p>

    <p class="formula">
      \\Delta f = 16-1=15
    </p>

    <p>
      De verandering in x is:
    </p>

    <p class="formula">
      \\Delta x = 4-1=3
    </p>

    <p>
      De gemiddelde veranderingssnelheid is daarom:
    </p>

    <p class="formula">
      \\frac{\\Delta f}{\\Delta x}
      =
      \\frac{15}{3}
      =
      5
    </p>


    <h3>De algemene regel</h3>

    <p>
      Voor een functie <span class="math">f(x)</span> tussen
      twee waarden <span class="math">x_1</span> en
      <span class="math">x_2</span> berekenen we de gemiddelde
      veranderingssnelheid met:
    </p>

    <p class="formula">
      \\frac{f(x_2)-f(x_1)}{x_2-x_1}
    </p>

    <p>
      Dit is gewoon:
    </p>

    <p class="formula">
      \\frac{\\text{verandering in }f}{\\text{verandering in }x}
    </p>

    <p>
      Met delta-notatie kunnen we dit korter schrijven als:
    </p>

    <p class="formula">
      \\frac{\\Delta f}{\\Delta x}
    </p>

    <div class="callout">
      <strong>
        Onthoud vooral de structuur:
        <br><br>
        verandering gedeeld door verandering.
      </strong>
    </div>


    <h3>Dezelfde gedachte in verschillende situaties</h3>

    <p>
      De formule verandert niet wanneer de context verandert.
    </p>

    <p>
      Bij beweging:
    </p>

    <p class="formula">
      v_{\\text{gem}}=\\frac{\\Delta s}{\\Delta t}
    </p>

    <p>
      Bij temperatuur:
    </p>

    <p class="formula">
      \\frac{\\Delta T}{\\Delta t}
    </p>

    <p>
      Bij een algemene functie:
    </p>

    <p class="formula">
      \\frac{\\Delta f}{\\Delta x}
    </p>

    <p>
      Het onderliggende idee is steeds hetzelfde:
    </p>

    <div class="callout">
      <strong>
        Hoeveel verandert de ene grootheid wanneer de andere grootheid
        met een bepaalde hoeveelheid verandert?
      </strong>
    </div>


    <h3>De grafiek: verandering wordt helling</h3>

    <p>
      We kunnen hetzelfde idee ook geometrisch bekijken.
    </p>

    <p>
      Een functie geeft punten in een coördinatenstelsel.
      Neem twee punten op de grafiek:
    </p>

    <p class="formula">
      P=(x_1,f(x_1))
    </p>

    <p class="formula">
      Q=(x_2,f(x_2))
    </p>

    <p>
      De verticale verandering tussen deze punten is:
    </p>

    <p class="formula">
      \\Delta y=f(x_2)-f(x_1)
    </p>

    <p>
      De horizontale verandering is:
    </p>

    <p class="formula">
      \\Delta x=x_2-x_1
    </p>

    <p>
      Daarom is:
    </p>

    <p class="formula">
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      precies de <strong>helling van de rechte door de twee punten</strong>.
    </p>

    <p>
      Zo ontstaat een belangrijke verbinding:
    </p>

    <div class="callout">
      <strong>
        verandering → verhouding van veranderingen → helling
      </strong>
    </div>


    <h3>Een positieve, negatieve of nulverandering</h3>

    <p>
      De gemiddelde veranderingssnelheid kan positief, negatief of nul zijn.
    </p>

    <p>
      Als een waarde toeneemt:
    </p>

    <p class="formula">
      \\Delta y > 0
    </p>

    <p>
      en de veranderingssnelheid is positief.
    </p>

    <p>
      Als een waarde afneemt:
    </p>

    <p class="formula">
      \\Delta y < 0
    </p>

    <p>
      en de veranderingssnelheid is negatief.
    </p>

    <p>
      Als de waarde niet verandert:
    </p>

    <p class="formula">
      \\Delta y = 0
    </p>

    <p>
      en de gemiddelde veranderingssnelheid is nul,
      zolang <span class="math">\\Delta x \\neq 0</span>.
    </p>


    <h3>Een belangrijk onderscheid</h3>

    <p>
      Er zijn twee verschillende vragen die gemakkelijk door elkaar gehaald worden.
    </p>

    <p>
      <strong>Vraag 1:</strong>
      Hoe snel verandert iets gemiddeld tussen twee momenten?
    </p>

    <p class="formula">
      \\frac{\\Delta y}{\\Delta x}
    </p>

    <p>
      <strong>Vraag 2:</strong>
      Hoe snel verandert iets precies op één bepaald moment?
    </p>

    <p>
      De eerste vraag kunnen we met de kennis van deze milestone beantwoorden.
      Voor de tweede hebben we een nieuw idee nodig.
    </p>

    <div class="callout">
      <strong>
        De gemiddelde veranderingssnelheid kijkt naar een interval.
        <br><br>
        De volgende stap is ontdekken hoe we de verandering op één punt
        kunnen bepalen.
      </strong>
    </div>


    <h3>Het interval steeds kleiner maken</h3>

    <p>
      Stel dat we willen weten hoe snel een auto precies op tijdstip
      <strong>2 uur</strong> rijdt.
    </p>

    <p>
      We kunnen eerst kijken naar de gemiddelde snelheid tussen 2 en 3 uur.
      Maar dat is een heel groot interval.
    </p>

    <p>
      We kunnen het interval kleiner maken:
    </p>

    <p class="formula">
      [2,3]
    </p>

    <p class="formula">
      [2,2{,}5]
    </p>

    <p class="formula">
      [2,2{,}1]
    </p>

    <p class="formula">
      [2,2{,}01]
    </p>

    <p>
      Telkens berekenen we opnieuw de gemiddelde veranderingssnelheid.
      We bekijken vervolgens wat er gebeurt wanneer het tweede punt
      steeds dichter bij het eerste punt komt.
    </p>

    <p>
      Daarmee staan we aan de grens van een nieuw wiskundig begrip:
      <strong>de limiet</strong>.
    </p>

    <div class="callout">
      <strong>
        Van gemiddelde verandering naar ogenblikkelijke verandering:
        we maken het interval steeds kleiner.
      </strong>
    </div>


    <h3>De brug naar de afgeleide</h3>

    <p>
      De centrale gedachte van Fase 3 begint nu zichtbaar te worden:
    </p>

    <p class="formula">
      \\text{gemiddelde verandering}
      =
      \\frac{\\text{verandering}}{\\text{interval}}
    </p>

    <p>
      Als we het interval steeds kleiner maken, ontstaat de vraag:
    </p>

    <div class="callout">
      <strong>
        Welke waarde nadert de gemiddelde veranderingssnelheid
        wanneer het interval naar nul gaat?
      </strong>
    </div>

    <p>
      Dat is precies de vraag die we in de volgende milestone zullen onderzoeken.
    </p>

    <p>
      Daar ontstaat de overgang:
    </p>

    <p class="formula">
      \\text{gemiddelde veranderingssnelheid}
      \\rightarrow
      \\text{limiet}
      \\rightarrow
      \\text{ogenblikkelijke veranderingssnelheid}
    </p>

    <p>
      En die ogenblikkelijke veranderingssnelheid noemen we
      <strong>de afgeleide</strong>.
    </p>


    <h3>Samenvatting</h3>

    <p>
      In deze milestone hebben we geleerd dat verandering meetbaar is.
    </p>

    <ul>
      <li>
        <strong>Verandering:</strong>
        \\(\\Delta y=y_2-y_1\\)
      </li>
      <li>
        <strong>Verandering in de onafhankelijke variabele:</strong>
        \\(\\Delta x=x_2-x_1\\)
      </li>
      <li>
        <strong>Gemiddelde veranderingssnelheid:</strong>
        verandering gedeeld door verandering
      </li>
      <li>
        <strong>Geometrisch:</strong>
        de gemiddelde veranderingssnelheid is de helling van de secant.
      </li>
      <li>
        <strong>Belangrijke volgende vraag:</strong>
        wat gebeurt er wanneer het interval steeds kleiner wordt?
      </li>
    </ul>

    <div class="callout">
      <strong>De rode draad:</strong>
      <br><br>
      verandering → gemiddelde veranderingssnelheid → helling
      → steeds kleiner interval → limiet → afgeleide
    </div>
  `
  },

  {
    id: "3.2",
    title: "Het idee van de limiet",
    goal: "Wat gebeurt er als we steeds dichterbij komen?",
    theory: ``
  },

  {
    id: "3.3",
    title: "Continuïteit",
    goal: "Wanneer vormt een functie één ononderbroken geheel?",
    theory: ``
  },

  {
    id: "3.4",
    title: "De afgeleide",
    goal: "Hoe snel verandert iets precies op één moment?",
    theory: ``
  },

  {
    id: "3.5",
    title: "Afgeleiden van basisfuncties",
    goal: "Kunnen we veranderingssnelheden berekenen?",
    theory: ``
  },

  {
    id: "3.6",
    title: "Product-, quotiënt- & kettingregel",
    goal: "Wat gebeurt er wanneer functies worden gecombineerd?",
    theory: ``
  },

  {
    id: "3.7",
    title: "Afgeleiden van belangrijke functies",
    goal: "Hoe laten we exponentiële, logaritmische en goniometrische functies veranderen?",
    theory: ``
  },

  {
    id: "3.8",
    title: "Toepassingen van afgeleiden",
    goal: "Wat kunnen we met veranderingssnelheden?",
    theory: ``
  },

  {
    id: "3.9",
    title: "De integraal als omgekeerde verandering",
    goal: "Kunnen we verandering weer optellen?",
    theory: ``
  },

  {
    id: "3.10",
    title: "De fundamentele stelling van de calculus",
    goal: "Waarom zijn afgeleiden en integralen verbonden?",
    theory: ``
  },

  {
    id: "3.11",
    title: "Integraalrekenen",
    goal: "Hoe berekenen we integralen?",
    theory: ``
  },

  {
    id: "3.12",
    title: "Toepassingen van integralen",
    goal: "Hoe tellen we oneindig veel kleine bijdragen op?",
    theory: ``
  },

  {
    id: "3.13",
    title: "Functies van meerdere variabelen",
    goal: "Wat verandert er als meerdere grootheden tegelijk veranderen?",
    theory: ``
  },

  {
    id: "3.14",
    title: "Multivariabele calculus & vectorvelden",
    goal: "Hoe beschrijven we verandering in een ruimte?",
    theory: ``
  }
];
