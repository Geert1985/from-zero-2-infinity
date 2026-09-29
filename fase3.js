/* Lesstof Fase 3 — Calculus. Breid theory/practice/exam hier uit. */
const MILESTONES_3 = [
// Fase 3 — Calculus & Analyse
// Van verandering naar afgeleiden, integralen en multivariabele calculus.
  {
    id: "3.1",
    title: "Verandering & gemiddelde snelheid",
    goal: "Hoe meten we verandering?",
    theory: /*html*/ `
    <h2>Verandering & gemiddelde snelheid</h2>

    <p>
      In Fase 2 leerden we hoe we situaties kunnen beschrijven met getallen,
      formules en functies. In Fase 3 stellen we een nieuwe vraag:
    </p>

    <div class="callout">
      <p><strong>Hoe kunnen we precies beschrijven hoe iets verandert?</strong></p>
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
      <p><strong>
        Gemiddelde snelheid = verandering in positie gedeeld door verandering in tijd.
      </strong></p>
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
      Stel dat de temperatuur stijgt van 10 ° C naar 25 ° C
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
      <p><strong>
        De gemiddelde veranderingssnelheid vertelt hoeveel een grootheid
        gemiddeld verandert per eenheid van de onafhankelijke variabele.
      </strong></p>
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
      <p><strong>
        Onthoud vooral de structuur:
        <br><br>
        verandering gedeeld door verandering.
      </strong></p>
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
      <p><strong>
        Hoeveel verandert de ene grootheid wanneer de andere grootheid
        met een bepaalde hoeveelheid verandert?
      </strong></p>
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
      <p><strong>
        verandering → verhouding van veranderingen → helling
      </strong></p>
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
      <p><strong>
        De gemiddelde veranderingssnelheid kijkt naar een interval.
        <br><br>
        De volgende stap is ontdekken hoe we de verandering op één punt
        kunnen bepalen.
      </strong></p>
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
      <p><strong>
        Van gemiddelde verandering naar ogenblikkelijke verandering:
        we maken het interval steeds kleiner.
      </strong></p>
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
      <p><strong>
        Welke waarde nadert de gemiddelde veranderingssnelheid
        wanneer het interval naar nul gaat?
      </strong></p>
    </div>

    <p>
      Dat is precies de vraag die we in de volgende milestone zullen onderzoeken.
    </p>

  
  `
  },

    {
    id: "3.2",
    title: "Het idee van de limiet",
    goal: "Wat gebeurt er als we steeds dichterbij komen?",
    theory: /*html*/ `
    <h2>Het idee van de limiet</h2>

    <p>
      In de vorige milestone leerden we hoe we een
      <strong>gemiddelde veranderingssnelheid</strong> berekenen.
      We zagen ook een belangrijke nieuwe vraag ontstaan:
    </p>

    <div class="callout">
      <p><strong>
        Wat gebeurt er met de gemiddelde verandering wanneer we het interval
        steeds kleiner maken?
      </strong></p>
    </div>

    <p>
      Om die vraag te beantwoorden hebben we een nieuw wiskundig idee nodig:
      <strong>de limiet</strong>.
    </p>


    <h3>Van een interval naar één punt</h3>

    <p>
      Stel dat we de functie
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      bekijken.
    </p>

    <p>
      In de vorige milestone konden we de gemiddelde veranderingssnelheid
      berekenen tussen twee waarden van <span class="math">x</span>.
      Bijvoorbeeld tussen <strong>x=2</strong> en <strong>x=3</strong>:
    </p>

    <p class="formula">
      \\\\frac{f(3)-f(2)}{3-2}
      =
      \\\\frac{9-4}{1}
      =
      5
    </p>

    <p>
      Maar wat als we willen weten wat er gebeurt
      <strong>vlak bij x=2</strong>?
    </p>

    <p>
      Dan kunnen we het tweede punt steeds dichter bij 2 plaatsen.
    </p>

    <p class="formula">
      x=3
    </p>

    <p class="formula">
      x=2{,}5
    </p>

    <p class="formula">
      x=2{,}1
    </p>

    <p class="formula">
      x=2{,}01
    </p>

    <p class="formula">
      x=2{,}001
    </p>

    <p>
      We nemen dus steeds kleinere intervallen rond <span class="math">x=2</span>.
    </p>

    <div class="callout">
      <p><strong>
        We proberen niet meteen op het punt uit te komen.
        We onderzoeken wat er gebeurt wanneer we het punt steeds dichter naderen.
      </strong></p>
    </div>


    <h3>Wat betekent "naderen"?</h3>

    <p>
      In het dagelijks taalgebruik betekent "naderen" dat iets steeds dichter
      bij iets anders komt.
    </p>

    <p>
      Stel dat een trein naar een station rijdt.
      De afstand tot het station kan achtereenvolgens zijn:
    </p>

    <p class="formula">
      10\\\\text{ km},\quad
      5\\\\text{ km},\quad
      1\\\\text{ km},\quad
      0{,}1\\\\text{ km},\quad
      0{,}01\\\\text{ km}
    </p>

    <p>
      De trein komt steeds dichter bij het station.
    </p>

    <p>
      Hetzelfde idee gebruiken we in de wiskunde.
      We kunnen zeggen dat een waarde <strong>naar een bepaalde waarde nadert</strong>.
    </p>

    <p>
      Belangrijk is dat "naderen" niet hetzelfde is als "bereiken".
    </p>

    <div class="callout">
      <p><strong>
        Een limiet beschrijft waar een waarde naartoe gaat,
        niet noodzakelijk de waarde die uiteindelijk wordt bereikt.
      </strong></p>
    </div>


    <h3>Een eerste voorbeeld van een limiet</h3>

    <p>
      Neem opnieuw:
    </p>

    <p class="formula">
      f(x)=x^2
    </p>

    <p>
      We willen weten wat er gebeurt wanneer <span class="math">x</span>
      steeds dichter bij 2 komt.
    </p>

    <p>
      We bekijken enkele waarden:
    </p>

    <p class="formula">
      x=2{,}1
      \\\\quad\\\\Rightarrow\\\\quad
      f(x)=2{,}1^2=4{,}41
    </p>

    <p class="formula">
      x=2{,}01
      \\\\quad\\\\Rightarrow\\\\quad
      f(x)=2{,}01^2=4{,}0401
    </p>

    <p class="formula">
      x=2{,}001
      \\\\quad\\\\Rightarrow\\\\quad
      f(x)=2{,}001^2=4{,}004001
    </p>

    <p>
      De functiewaarde komt steeds dichter bij 4.
    </p>

    <p>
      We schrijven daarom:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to2}x^2=4
    </p>

    <p>
      Dit lezen we als:
    </p>

    <div class="callout">
      <p><strong>
        De limiet van <span class="math">x^2</span> voor
        <span class="math">x</span> naar 2 is 4.
      </strong></p>
    </div>


    <h3>De betekenis van de notatie</h3>

    <p>
      De notatie
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to a}f(x)=L
    </p>

    <p>
      bevat drie belangrijke onderdelen.
    </p>

    <ul>
      <li>
        <strong>x → a</strong>:
        we laten <span class="math">x</span> steeds dichter bij
        <span class="math">a</span> komen;
      </li>
      <li>
        <strong>f(x)</strong>:
        we kijken naar de overeenkomstige functiewaarden;
      </li>
      <li>
        <strong>L</strong>:
        de waarde waartoe de functiewaarden naderen.
      </li>
    </ul>

    <p>
      De volledige uitspraak betekent dus:
    </p>

    <div class="callout">
      <p>
        Wanneer <span class="math">x</span> steeds dichter bij
        <span class="math">a</span> komt, nadert
        <span class="math">f(x)</span> steeds dichter bij
        <span class="math">L</span>.
      </p>
    </div>


    <h3>De waarde van de functie is niet altijd de limiet</h3>

    <p>
      Dit is één van de belangrijkste ideeën van deze milestone.
    </p>

    <p>
      Bekijk de functie:
    </p>

    <p class="formula">
      f(x)=\\\\frac{x^2-4}{x-2}
    </p>

    <p>
      Wanneer <span class="math">x=2</span>, krijgen we:
    </p>

    <p class="formula">
      \\\\frac{2^2-4}{2-2}
      =
      \\\\frac{0}{0}
    </p>

    <p>
      Dat is niet gedefinieerd.
      De functie heeft dus <strong>geen functiewaarde bij x=2</strong>.
    </p>

    <p>
      Maar we kunnen de uitdrukking voor andere waarden van
      <span class="math">x</span> vereenvoudigen:
    </p>

    <p class="formula">
      \\\\frac{x^2-4}{x-2}
      =
      \\\\frac{(x-2)(x+2)}{x-2}
      =
      x+2
    </p>

    <p>
      zolang <span class="math">x\\\\neq2</span>.
    </p>

    <p>
      Wanneer <span class="math">x</span> dicht bij 2 komt,
      komt <span class="math">x+2</span> dicht bij 4.
    </p>

    <p>
      Daarom geldt:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to2}
      \\\\frac{x^2-4}{x-2}
      =
      4
    </p>

    <div class="callout">
      <p><strong>
        De functie is bij x=2 niet gedefinieerd,
        maar de limiet voor x naar 2 bestaat wel en is gelijk aan 4.
      </strong></p>
    </div>

    <p>
      Dit maakt het onderscheid duidelijk tussen:
    </p>

    <ul>
      <li>de waarde van een functie op een punt;</li>
      <li>het gedrag van de functie in de buurt van dat punt.</li>
    </ul>

    <p>
      De limiet gaat over dat tweede:
      <strong>het gedrag in de buurt</strong>.
    </p>


    <h3>Waarom mogen we x niet gewoon gelijk aan a maken?</h3>

    <p>
      Bij een limiet onderzoeken we wat er gebeurt wanneer
      <span class="math">x</span> <strong>naar</strong> een waarde
      <span class="math">a</span> gaat.
    </p>

    <p>
      Dat betekent niet automatisch dat we
      <span class="math">x=a</span> moeten invullen.
    </p>

    <p>
      Bij
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to2}
      \\\\frac{x^2-4}{x-2}
    </p>

    <p>
      is de oorspronkelijke functie precies bij
      <span class="math">x=2</span> niet gedefinieerd.
      Toch kunnen we perfect onderzoeken wat er gebeurt
      voor waarden die heel dicht bij 2 liggen.
    </p>

    <div class="callout">
      <p><strong>
        Een limiet kijkt naar de omgeving van een punt,
        niet noodzakelijk naar het punt zelf.
      </strong></p>
    </div>


    <h3>Van links en van rechts</h3>

    <p>
      Wanneer we zeggen dat <span class="math">x</span> naar 2 gaat,
      kunnen we 2 langs twee kanten naderen.
    </p>

    <p>
      Vanuit kleinere waarden:
    </p>

    <p class="formula">
      x\\\\to2^-
    </p>

    <p>
      Dit noemen we de <strong>linkerlimiet</strong>.
    </p>

    <p>
      Vanuit grotere waarden:
    </p>

    <p class="formula">
      x\\\\to2^+
    </p>

    <p>
      Dit noemen we de <strong>rechterlimiet</strong>.
    </p>

    <p>
      Voor een gewone tweezijdige limiet moeten beide richtingen
      naar dezelfde waarde gaan.
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to a}f(x)=L
    </p>

    <p>
      wanneer zowel
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to a^-}f(x)=L
    </p>

    <p>
      als
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to a^+}f(x)=L
    </p>

    <p>
      gelden.
    </p>

    <div class="callout">
      <p><strong>
        Links en rechts moeten naar dezelfde waarde naderen
        voordat de gewone limiet bestaat.
      </strong></p>
    </div>


    <h3>Een voorbeeld waarbij de limiet niet bestaat</h3>

    <p>
      Stel dat een functie links van <span class="math">x=0</span>
      naar 1 nadert, maar rechts van <span class="math">x=0</span>
      naar 3.
    </p>

    <p>
      Dan geldt:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to0^-}f(x)=1
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to0^+}f(x)=3
    </p>

    <p>
      Omdat 1 en 3 verschillend zijn, bestaat de tweezijdige limiet niet.
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to0}f(x)
      \\\\text{ bestaat niet}
    </p>

    <p>
      Dit is belangrijk:
      <strong>niet elke limiet bestaat</strong>.
    </p>


    <h3>De limiet als voorspelling van gedrag</h3>

    <p>
      Een handige manier om over limieten te denken is als volgt.
    </p>

    <p>
      We vragen niet:
    </p>

    <div class="callout">
      <p>
        "Welke waarde heeft de functie precies op dit punt?"
      </p>
    </div>

    <p>
      maar:
    </p>

    <div class="callout">
      <p><strong>
        "Welke waarde begint de functie te benaderen wanneer we
        steeds dichter bij dit punt komen?"
      </strong></p>
    </div>

    <p>
      De limiet is dus een uitspraak over
      <strong>gedrag</strong>.
    </p>


    <h3>Rekenregels voor limieten</h3>

    <p>
      Wanneer de afzonderlijke limieten bestaan, kunnen we limieten
      vaak op dezelfde manier behandelen als gewone algebraïsche uitdrukkingen.
    </p>

    <p>
      Voor functies <span class="math">f(x)</span> en
      <span class="math">g(x)</span> geldt:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to a}(f(x)+g(x))
      =
      \\\\lim_{x\\\\to a}f(x)
      +
      \\\\lim_{x\\\\to a}g(x)
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to a}(f(x)-g(x))
      =
      \\\\lim_{x\\\\to a}f(x)
      -
      \\\\lim_{x\\\\to a}g(x)
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to a}(f(x)g(x))
      =
      \\\\left(\\\\lim_{x\\\\to a}f(x)\\\\right)
      \\\\left(\\\\lim_{x\\\\to a}g(x)\\\\right)
    </p>

    <p>
      Voor een quotiënt geldt:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to a}
      \\\\frac{f(x)}{g(x)}
      =
      \\\\frac{\\\\lim_{x\\\\to a}f(x)}
      {\\\\lim_{x\\\\to a}g(x)}
    </p>

    <p>
      op voorwaarde dat de noemerlimiet niet nul is.
    </p>

    <p>
      Deze regels geven ons een praktische manier om veel limieten
      te berekenen zonder telkens een tabel met waarden te maken.
    </p>


    <h3>Direct invullen</h3>

    <p>
      Bekijk:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to3}(x^2+2x)
    </p>

    <p>
      De functie is hier netjes gedefinieerd.
      We kunnen daarom rechtstreeks invullen:
    </p>

    <p class="formula">
      3^2+2(3)
      =
      9+6
      =
      15
    </p>

    <p>
      Dus:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to3}(x^2+2x)=15
    </p>

    <p>
      Bij veel eenvoudige functies komt de limiet dus overeen
      met de gewone functiewaarde.
    </p>

    <p>
      Maar het vorige voorbeeld liet zien dat dit niet altijd zo hoeft te zijn.
    </p>


    <h3>De vorm 0/0</h3>

    <p>
      Soms krijgen we bij rechtstreeks invullen:
    </p>

    <p class="formula">
      \\\\frac{0}{0}
    </p>

    <p>
      Dit betekent <strong>niet</strong> dat de limiet gelijk is aan nul.
    </p>

    <p>
      De vorm <span class="math">0/0</span> vertelt ons dat
      rechtstreeks invullen onvoldoende informatie geeft.
    </p>

    <p>
      We moeten de uitdrukking verder onderzoeken.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to2}
      \\\\frac{x^2-4}{x-2}
    </p>

    <p>
      geeft bij rechtstreeks invullen de vorm
      <span class="math">0/0</span>.
      Door te ontbinden in factoren vinden we:
    </p>

    <p class="formula">
      \\\\frac{x^2-4}{x-2}
      =
      \\\\frac{(x-2)(x+2)}{x-2}
      =
      x+2
    </p>

    <p>
      voor <span class="math">x\\\\neq2</span>.
      Daardoor kunnen we de limiet wel bepalen:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to2}(x+2)=4
    </p>

    <div class="callout">
      <p><strong>
        0/0 is geen antwoord.
        Het is een signaal dat we verder moeten onderzoeken.
      </strong></p>
    </div>


    <h3>Limieten naar oneindig</h3>

    <p>
      Tot nu toe lieten we <span class="math">x</span> naar een bepaalde
      eindige waarde naderen.
      We kunnen ook vragen wat er gebeurt wanneer
      <span class="math">x</span> steeds groter wordt.
    </p>

    <p>
      Bijvoorbeeld bij:
    </p>

    <p class="formula">
      f(x)=\\\\frac{1}{x}
    </p>

    <p>
      Voor steeds grotere waarden van <span class="math">x</span> krijgen we:
    </p>

    <p class="formula">
      \\\\frac{1}{10}=0{,}1
    </p>

    <p class="formula">
      \\\\frac{1}{100}=0{,}01
    </p>

    <p class="formula">
      \\\\frac{1}{1000}=0{,}001
    </p>

    <p>
      De waarden komen steeds dichter bij 0.
    </p>

    <p>
      We schrijven:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to\\\\infty}\\\\frac{1}{x}=0
    </p>

    <p>
      Dit betekent niet dat <span class="math">x=\\\\infty</span>.
      <strong>Oneindig is geen gewoon getal</strong> dat we kunnen invullen.
    </p>

    <p>
      De notatie beschrijft wat er gebeurt wanneer
      <span class="math">x</span> zonder bovengrens blijft toenemen.
    </p>


    <h3>Een limiet kan ook oneindig zijn</h3>

    <p>
      We kunnen ook een situatie krijgen waarin functiewaarden
      steeds groter worden zonder een eindige grenswaarde te naderen.
    </p>

    <p>
      Bijvoorbeeld:
    </p>

    <p class="formula">
      f(x)=\\\\frac{1}{x^2}
    </p>

    <p>
      Wanneer <span class="math">x</span> steeds dichter bij 0 komt,
      worden de functiewaarden steeds groter:
    </p>

    <p class="formula">
      \\\\frac{1}{0{,}1^2}=100
    </p>

    <p class="formula">
      \\\\frac{1}{0{,}01^2}=10\,000
    </p>

    <p class="formula">
      \\\\frac{1}{0{,}001^2}=1\,000\,000
    </p>

    <p>
      We schrijven:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to0}\\\\frac{1}{x^2}=\\\\infty
    </p>

    <p>
      Ook hier betekent dit niet dat de functie op
      <span class="math">x=0</span> de waarde "oneindig" heeft.
      De functie is daar zelfs niet gedefinieerd.
    </p>

    <p>
      De notatie beschrijft alleen dat de functiewaarden
      onbeperkt groot worden wanneer <span class="math">x</span>
      naar 0 nadert.
    </p>


    <h3>Limieten en grafieken</h3>

    <p>
      De grafische betekenis van een limiet is bijzonder nuttig.
    </p>

    <p>
      Wanneer we schrijven:
    </p>

    <p class="formula">
      \\\\lim_{x\\\\to a}f(x)=L
    </p>

    <p>
      betekent dit dat de punten van de grafiek steeds dichter bij
      de hoogte <span class="math">L</span> komen wanneer
      <span class="math">x</span> steeds dichter bij
      <span class="math">a</span> komt.
    </p>

    <p>
      De grafiek hoeft het punt
      <span class="math">(a,L)</span> daarbij niet noodzakelijk te bevatten.
    </p>

    <div class="callout">
      <p><strong>
        Een limiet beschrijft het gedrag van de grafiek vlak bij een punt.
      </strong></p>
    </div>


    <h3>Waarom hebben we limieten nodig?</h3>

    <p>
      De limiet is geen losstaand rekenkunstje.
      Ze lost een fundamenteel probleem op.
    </p>

    <p>
      In de vorige milestone konden we de gemiddelde verandering
      tussen twee punten berekenen:
    </p>

    <p class="formula">
      \\\\frac{f(x_2)-f(x_1)}{x_2-x_1}
    </p>

    <p>
      Maar we wilden uiteindelijk weten wat de verandering
      <strong>op één punt</strong> is.
    </p>

    <p>
      Een interval tussen twee verschillende punten heeft altijd
      een niet-nul lengte.
      We kunnen daarom niet zomaar twee identieke punten invullen.
    </p>

    <p>
      De limiet geeft ons een andere mogelijkheid:
    </p>

    <div class="callout">
      <p><strong>
        We laten het tweede punt steeds dichter bij het eerste punt komen
        en onderzoeken naar welke waarde de gemiddelde verandering nadert.
      </strong></p>
    </div>

    <p>
      Daarmee krijgen we de brug van
      <strong>gemiddelde verandering</strong>
      naar
      <strong>ogenblikkelijke verandering</strong>.
    </p>


    <h3>De limiet van de gemiddelde veranderingssnelheid</h3>

    <p>
      Stel dat we de gemiddelde veranderingssnelheid willen berekenen
      tussen <span class="math">x</span> en
      <span class="math">x+h</span>.
    </p>

    <p>
      De verandering in <span class="math">x</span> is dan:
    </p>

    <p class="formula">
      \\\\Delta x=h
    </p>

    <p>
      De gemiddelde veranderingssnelheid wordt:
    </p>

    <p class="formula">
      \\\\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Nu laten we <span class="math">h</span> steeds kleiner worden:
    </p>

    <p class="formula">
      h=1
    </p>

    <p class="formula">
      h=0{,}1
    </p>

    <p class="formula">
      h=0{,}01
    </p>

    <p class="formula">
      h=0{,}001
    </p>

    <p>
      We onderzoeken dus wat er gebeurt wanneer
      <span class="math">h</span> naar nul nadert.
    </p>

    <p class="formula">
      \\\\lim_{h\\\\to0}
      \\\\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      Deze uitdrukking vormt de basis voor de volgende stap in calculus:
      de <strong>afgeleide</strong>.
    </p>

    <div class="callout">
      <p><strong>
        De limiet maakt het mogelijk om een proces van steeds kleiner wordende
        intervallen wiskundig te beschrijven.
      </strong></p>
    </div>


    <h3>De centrale gedachte van deze milestone</h3>

    <p>
      We hebben nu een tweede fundamentele beweging in de wiskunde geleerd:
    </p>

    <p class="formula">
      \\\\text{afstand}
      \\\\rightarrow
      \\\\text{dichterbij}
      \\\\rightarrow
      \\\\text{naderen}
      \\\\rightarrow
      \\\\text{limiet}
    </p>

    <p>
      De limiet stelt ons in staat om processen te bestuderen
      waarbij een grootheid steeds dichter bij een bepaalde waarde komt.
    </p>

    <p>
      Daarbij kunnen we onderscheid maken tussen:
    </p>

    <ul>
      <li>een functiewaarde op een punt;</li>
      <li>het gedrag van een functie in de buurt van dat punt;</li>
      <li>een linker- en rechterbenadering;</li>
      <li>een eindige limiet;</li>
      <li>gedrag waarbij waarden onbeperkt groot of klein worden.</li>
    </ul>


    <h3>Van limiet naar continuïteit</h3>

    <p>
      We hebben gezien dat een functie een limiet kan hebben
      op een punt waar de functie zelf niet gedefinieerd is.
    </p>

    <p>
      Dat roept een nieuwe vraag op:
    </p>

    <div class="callout">
      <p><strong>
        Wanneer gedraagt een functie zich op een punt zonder onderbreking?
      </strong></p>
    </div>

    <p>
      Daarvoor moeten we de limiet vergelijken met de werkelijke
      functiewaarde op dat punt.
    </p>

    <p>
      Dat leidt rechtstreeks naar het volgende begrip:
      <strong>continuïteit</strong>.
    </p>


    <h3>Van limiet naar de afgeleide</h3>

    <p>
      Er is nog een tweede belangrijke toepassing.
    </p>

    <p>
      In milestone 3.1 zagen we:
    </p>

    <p class="formula">
      \\\\frac{f(x_2)-f(x_1)}{x_2-x_1}
    </p>

    <p>
      Dit is de gemiddelde veranderingssnelheid over een interval.
    </p>

    <p>
      In deze milestone hebben we geleerd hoe we dat interval
      steeds kleiner kunnen maken.
    </p>

    <p>
      Daardoor ontstaat:
    </p>

    <p class="formula">
      \\\\lim_{h\\\\to0}
      \\\\frac{f(x+h)-f(x)}{h}
    </p>

    <p>
      In de volgende milestones zullen we onderzoeken
      wat deze limiet betekent en hoe we ze kunnen gebruiken
      om de <strong>ogenblikkelijke veranderingssnelheid</strong>
      van een functie te bepalen.
    </p>

    <div class="callout">
      <p><strong>
        De rode draad tot nu toe:
        <br><br>
        verandering
        →
        gemiddelde verandering
        →
        steeds kleiner interval
        →
        limiet
        →
        ogenblikkelijke verandering.
      </strong></p>
    </div>

  `
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
