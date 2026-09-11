# Cursus Fase 5 --- Differentiaalvergelijkingen & Complexe Analyse

**Leerpad:** van lineaire algebra naar complexe getallen, dynamische
systemen en Fourier-analyse\
**Doel van deze fase:** je leert werken met complexe getallen,
differentiaalvergelijkingen begrijpen en oplossen, en complexe signalen
en functies ontleden met Fourier-analyse.\
**Vorige fase:** Fase 4 --- Lineaire Algebra\
**Volgende fase:** Fase 6 --- Abstracte Algebra & Topologie

Fase 5 vormt een belangrijke overgang in het leerpad.

In Fase 3 leerde je **verandering** beschrijven met afgeleiden en
integralen. In Fase 4 leerde je **vectoren, matrices en transformaties**
gebruiken. In deze fase komen die twee ideeën samen:

-   complexe getallen breiden het getallensysteem uit;
-   differentiaalvergelijkingen beschrijven systemen waarvan de toestand
    verandert;
-   lineaire algebra helpt om gekoppelde differentiaalvergelijkingen te
    begrijpen;
-   Fourier-analyse laat zien dat ingewikkelde bewegingen en signalen
    kunnen worden opgebouwd uit eenvoudige golven.

De uiteindelijke bestemming van het leerpad ligt bij
differentiaalmeetkunde en kwantumveldentheorie. Fase 5 levert daarvoor
belangrijke bouwstenen: complexe vectorruimten, dynamische
vergelijkingen, golven en de wiskundige structuur achter de
Schrödingervergelijking. Het leerpad specificeert voor Fase 5 drie
onderdelen: **Complexe Getallen**, **Differentiaalvergelijkingen** en
**Fourier-analyse**. fileciteturn6file0L45-L48

------------------------------------------------------------------------

## Hoe je deze cursus gebruikt

1.  Lees eerst de intuïtieve uitleg.
2.  Probeer daarna de formele definitie zelf te formuleren.
3.  Werk elk voorbeeld volledig uit.
4.  Maak de oefeningen zonder naar de antwoorden te kijken.
5.  Teken grafieken wanneer een differentiaalvergelijking een
    verandering in de tijd beschrijft.
6.  Gebruik complexe getallen niet alleen als rekenregels: denk aan het
    complexe vlak.
7.  Zie Fourier-analyse niet als een truc om integralen te berekenen,
    maar als een manier om functies op te bouwen uit eenvoudige
    basisgolven.
8.  Herhaal een onderdeel wanneer je de formule wel kunt gebruiken maar
    niet kunt uitleggen wat ze betekent.

**Gereedschap:** papier, potlood en grafiekpapier. Een rekenmachine of
computer mag worden gebruikt om oplossingen en grafieken te controleren,
maar probeer de redenering eerst zelf te beheersen.

------------------------------------------------------------------------

# 5.0 --- De grote overgang naar dynamische wiskunde

Een van de belangrijkste vragen in de wiskunde en natuurkunde is:

> **Hoe verandert een systeem in de tijd?**

In Fase 3 leerden we dat de afgeleide:

df/dt

de veranderingssnelheid van een functie beschrijft.

In Fase 5 maken we daar een vergelijking van.

Bijvoorbeeld:

dy/dt = 2y

Deze vergelijking zegt niet meteen wat y is.

Ze zegt:

> De snelheid waarmee y verandert is gelijk aan tweemaal de huidige
> waarde van y.

We zoeken dus een functie die aan een bepaalde veranderingswet voldoet.

Dat is een **differentiaalvergelijking**.

------------------------------------------------------------------------

## 5.0.1 Van algebraïsche vergelijking naar differentiaalvergelijking

Een gewone vergelijking:

2x + 3 = 7

vraagt naar een getal x.

Een differentiaalvergelijking:

dy/dt = 2y

vraagt naar een functie y(t).

Dat is een fundamenteel verschil.

De onbekende is nu geen getal maar een **functie**.

------------------------------------------------------------------------

## 5.0.2 Waarom complexe getallen?

In Fase 1 en 2 werkten we vooral met reële getallen.

Maar de vergelijking:

x² = -1

heeft geen reële oplossing.

Daarom breiden we het getallensysteem uit.

We introduceren een getal i waarvoor:

i² = -1

Dan wordt:

√(-1) = i

Complexe getallen blijken niet alleen een handige uitbreiding van de
reële getallen te zijn. Ze worden essentieel bij:

-   oscillaties;
-   golven;
-   Fourier-analyse;
-   differentiaalvergelijkingen;
-   kwantummechanica.

------------------------------------------------------------------------

## 5.0.3 Waarom Fourier-analyse?

Stel dat een muzieksignaal ingewikkeld is.

Je ziet één complexe golfvorm, maar die kan bestaan uit veel eenvoudige
frequenties.

Fourier-analyse stelt de vraag:

> Uit welke eenvoudige sinus- en cosinusgolven bestaat deze functie?

Dat idee is verbazingwekkend algemeen.

Het verschijnt bij:

-   geluid;
-   licht;
-   trillingen;
-   warmtegeleiding;
-   elektromagnetisme;
-   quantummechanica.

------------------------------------------------------------------------

# Milestone 5.1 --- Complexe Getallen

**Doel:** rekenen met complexe getallen, ze geometrisch interpreteren in
het complexe vlak en de poolvorm en Euler-formule begrijpen.

------------------------------------------------------------------------

## 5.1.1 Waarom hebben we complexe getallen nodig?

In de reële getallen bestaat geen getal x waarvoor:

x² = -1

We definiëren daarom:

i² = -1

Het getal i noemen we de **imaginaire eenheid**.

Daaruit volgt:

i = √(-1)

en:

i³ = i² × i = -i

i⁴ = 1

Daarna herhaalt de cyclus zich:

i, -1, -i, 1, i, ...

Dus:

iⁿ

heeft een patroon met periode 4.

------------------------------------------------------------------------

## 5.1.2 Complexe getallen

Een complex getal heeft de vorm:

z = a + bi

waarbij:

a en b reële getallen zijn.

We noemen:

-   a het **reële deel**;
-   b het **imaginaire deel**.

Notatie:

Re(z) = a

Im(z) = b

Voor:

z = 3 + 2i

is:

Re(z) = 3

Im(z) = 2

------------------------------------------------------------------------

## 5.1.3 Gelijke complexe getallen

Twee complexe getallen zijn gelijk wanneer zowel hun reële als
imaginaire delen gelijk zijn.

Dus:

a + bi = c + di

precies wanneer:

a = c

en:

b = d

Bijvoorbeeld:

x + 4i = 3 + yi

geeft:

x = 3

y = 4

------------------------------------------------------------------------

## 5.1.4 Optellen en aftrekken

Werk component per component.

(3 + 2i) + (4 - 5i)

= 3 + 4 + 2i - 5i

= 7 - 3i

En:

(5 + 4i) - (2 + i)

= 3 + 3i

Dit lijkt sterk op vectorrekenen uit Fase 4.

Inderdaad: algebraïsch kun je a + bi behandelen als het paar:

(a,b)

Dat is de eerste belangrijke verbinding tussen complexe getallen en
vectoren.

------------------------------------------------------------------------

## 5.1.5 Vermenigvuldigen

Gebruik distributiviteit.

(2 + 3i)(4 + i)

= 8 + 2i + 12i + 3i²

Omdat:

i² = -1

krijgen we:

= 8 + 14i - 3

= 5 + 14i

De belangrijkste regel blijft dus dezelfde distributieve eigenschap die
je in Fase 1 en Fase 2 leerde.

------------------------------------------------------------------------

## 5.1.6 Complex geconjugeerde

Van:

z = a + bi

is het **complex geconjugeerde**:

z\* = a - bi

Bijvoorbeeld:

z = 3 + 4i

dan:

z\* = 3 - 4i

Vermenigvuldig:

zz\* = (a+bi)(a-bi)

= a² - abi + abi - b²i²

Omdat i²=-1:

zz\* = a² + b²

Het resultaat is reëel en niet-negatief.

Dit leidt rechtstreeks naar de modulus.

------------------------------------------------------------------------

## 5.1.7 Modulus

De modulus van:

z = a + bi

is:

\|z\| = √(a² + b²)

Dit is opnieuw de stelling van Pythagoras.

Voor:

z = 3 + 4i

geldt:

\|z\| = √(9+16) = 5

Je kunt een complex getal dus voorstellen als een vector in het vlak.

------------------------------------------------------------------------

## 5.1.8 Het complexe vlak

Het complexe vlak heeft:

-   de horizontale as = reële as;
-   de verticale as = imaginaire as.

Het getal:

z = 3 + 2i

komt overeen met het punt:

(3,2)

``` text
Im
↑
|          • 3+2i
|          |
|          |
+----------+----------→ Re
           3
```

Dit maakt complexe getallen geometrisch zichtbaar.

------------------------------------------------------------------------

## 5.1.9 Complexe getallen en rotaties

Vermenigvuldigen met i heeft een bijzondere geometrische betekenis.

Neem:

z = 1

Dan:

i × 1 = i

De vector (1,0) wordt (0,1): een rotatie van 90° tegenwijzerzin.

Nogmaals:

i × i = -1

Dus:

(0,1) → (-1,0)

Nogmaals:

-i

en daarna:

1

Vermenigvuldiging met i is dus een rotatie van 90°.

Dit sluit rechtstreeks aan bij de rotatiematrices uit Fase 4.

------------------------------------------------------------------------

## 5.1.10 Delen van complexe getallen

We willen bijvoorbeeld:

(3 + 2i)/(1 + i)

berekenen.

Vermenigvuldig teller en noemer met het geconjugeerde van de noemer:

(3+2i)/(1+i) × (1-i)/(1-i)

De noemer wordt:

(1+i)(1-i) = 1-i² = 2

De teller:

(3+2i)(1-i) = 3 - 3i + 2i - 2i² = 5 - i

Dus:

(3+2i)/(1+i) = (5-i)/2 = 5/2 - 1/2 i

------------------------------------------------------------------------

## 5.1.11 Poolvorm

Een complex getal kan ook worden beschreven met:

-   de afstand r tot de oorsprong;
-   de hoek θ.

Omdat:

a = r cos(θ)

en:

b = r sin(θ)

kunnen we schrijven:

z = r(cos θ + i sin θ)

Dit noemen we de **poolvorm**.

Hier komt de trigonometrie uit Fase 2 rechtstreeks terug.

------------------------------------------------------------------------

## 5.1.12 Euler-formule

Een van de belangrijkste formules uit de complexe analyse is:

e\^(iθ) = cos θ + i sin θ

Daarmee wordt de poolvorm:

z = re\^(iθ)

Dit verbindt drie gebieden:

-   exponentiële functies;
-   trigonometrie;
-   complexe getallen.

Dit is geen toevallige formule. Ze vormt de basis van een groot deel van
de moderne analyse van oscillaties en golven.

------------------------------------------------------------------------

## 5.1.13 Euler-identiteit

Voor θ = π:

e\^(iπ) = cos π + i sin π

Dus:

e\^(iπ) = -1

of:

e\^(iπ) + 1 = 0

De formule verbindt vijf fundamentele constanten:

e, i, π, 1 en 0.

------------------------------------------------------------------------

## 5.1.14 Vermenigvuldigen in poolvorm

Als:

z₁ = r₁e\^(iθ₁)

en:

z₂ = r₂e\^(iθ₂)

dan:

z₁z₂ = r₁r₂ e\^(i(θ₁+θ₂))

Dus:

-   de lengtes worden vermenigvuldigd;
-   de hoeken worden opgeteld.

Dit maakt complexe exponenten bijzonder krachtig.

------------------------------------------------------------------------

## 5.1.15 Complexe machten en de formule van De Moivre

Uit Euler volgt:

(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)

Dit is de formule van **De Moivre**.

Ze laat zien dat machten van complexe getallen geometrisch kunnen worden
geïnterpreteerd als rotaties en schaalveranderingen.

------------------------------------------------------------------------

## 5.1.16 N-de machtswortels

De vergelijking:

zⁿ = w

kan meerdere complexe oplossingen hebben.

Bijvoorbeeld:

z² = 1

heeft:

z = 1

en:

z = -1

Maar:

z³ = 1

heeft drie oplossingen in het complexe vlak.

Dit laat zien dat het complexe getallensysteem algebraïsch veel rijker
is dan het reële getallensysteem.

------------------------------------------------------------------------

## Oefeningen 5.1

1.  Bereken i², i³ en i⁴.

2.  Vereenvoudig i⁷.

3.  Bereken (3+2i)+(4-5i).

4.  Bereken (5+4i)-(2+i).

5.  Bereken (2+3i)(4+i).

6.  Bereken het geconjugeerde van 7-3i.

7.  Bereken \|3+4i\|.

8.  Bereken:

    (3+2i)/(1+i)

9.  Welk punt in het complexe vlak stelt -2+5i voor?

10. Wat gebeurt er geometrisch wanneer je een complex getal met i
    vermenigvuldigt?

11. Schrijf 1+i in poolvorm.

12. Gebruik Euler om e\^(iπ/2) te berekenen.

13. Bereken e\^(iπ).

14. Wat is de modulus van re\^(iθ)?

15. Leg uit waarom complexe getallen nuttig zijn bij golfbewegingen.

### Antwoorden 5.1

1.  i²=-1, i³=-i, i⁴=1.
2.  i⁷=i³=-i.
3.  7-3i.
4.  3+3i.
5.  5+14i.
6.  7+3i.
7.  5.  
8.  5/2 - 1/2 i.
9.  (-2,5).
10. Rotatie van 90° tegenwijzerzin.
11. Modulus √2 en hoek π/4: √2 e\^(iπ/4).
12. i.  
13. -1.
14. r, wanneer r≥0.
15. Complexe exponenten kunnen oscillaties compact beschrijven; e\^(iωt)
    bevat tegelijk sinus- en cosinusgedrag.

------------------------------------------------------------------------

# Milestone 5.2 --- Differentiaalvergelijkingen

**Doel:** begrijpen wat differentiaalvergelijkingen zijn, eerste- en
tweede-orde vergelijkingen oplossen en de verbinding leggen met
dynamische systemen, oscillaties en de Schrödingervergelijking.

------------------------------------------------------------------------

## 5.2.1 Wat is een differentiaalvergelijking?

Een differentiaalvergelijking is een vergelijking waarin een onbekende
functie en één of meer afgeleiden voorkomen.

Voorbeeld:

dy/dx = 3x²

De onbekende is y(x).

We zoeken een functie waarvan de afgeleide 3x² is.

Uit Fase 3 weten we:

d/dx (x³) = 3x²

dus:

y = x³ + C

waarbij C een willekeurige constante is.

Een differentiaalvergelijking heeft dus vaak niet één oplossing, maar
een **familie van oplossingen**.

------------------------------------------------------------------------

## 5.2.2 Waarom verschijnt een constante?

Als:

y = x³

dan:

y' = 3x²

Maar ook:

y = x³ + 7

heeft dezelfde afgeleide.

En:

y = x³ - 100

ook.

De afgeleide kan dus de constante informatie niet zien.

Daarom ontstaat:

y = x³ + C

------------------------------------------------------------------------

## 5.2.3 Orde van een differentiaalvergelijking

De hoogste afgeleide bepaalt de orde.

Voorbeeld:

dy/dx = 2x

is eerste orde.

d²y/dx² + y = 0

is tweede orde.

Een derde-orde vergelijking bevat bijvoorbeeld:

d³y/dx³

De orde vertelt hoeveel niveaus van verandering in de vergelijking
voorkomen.

------------------------------------------------------------------------

## 5.2.4 Algemene oplossing en beginvoorwaarde

Neem:

dy/dx = 2x

Algemene oplossing:

y = x² + C

Maar stel:

y(0) = 5

Dan:

5 = 0² + C

dus:

C = 5

en:

y = x² + 5

Een **beginvoorwaarde** selecteert één specifieke oplossing uit de
familie.

Dit is fundamenteel bij natuurkundige problemen.

------------------------------------------------------------------------

## 5.2.5 Scheidbare differentiaalvergelijkingen

Een vergelijking is scheidbaar wanneer we de variabelen kunnen scheiden.

Bijvoorbeeld:

dy/dx = ky

Schrijf:

dy/y = k dx

Integreer:

∫(1/y)dy = ∫k dx

Dus:

ln\|y\| = kx + C

Exponentiëren geeft:

y = Ae\^(kx)

waarbij A een constante is.

------------------------------------------------------------------------

## 5.2.6 Exponentiële groei en verval

De vergelijking:

dy/dt = ky

beschrijft een systeem waarvan de veranderingssnelheid evenredig is met
de huidige hoeveelheid.

Voor:

k \> 0

krijgen we groei.

Voor:

k \< 0

krijgen we verval.

De oplossing:

y(t) = Ae\^(kt)

is een van de belangrijkste oplossingen van differentiaalvergelijkingen.

Voorbeeld:

dy/dt = 0,1y

geeft:

y(t)=Ae\^(0,1t)

------------------------------------------------------------------------

## 5.2.7 Halveringstijd

Bij verval:

y(t)=y₀e\^(-kt)

zoeken we t waarvoor:

y(t)=y₀/2

Dan:

e\^(-kt)=1/2

Neem ln:

-kt = ln(1/2) = -ln 2

dus:

t = ln 2/k

Dezelfde wiskundige structuur verschijnt bij radioactief verval en
andere exponentiële processen.

------------------------------------------------------------------------

## 5.2.8 Lineaire eerste-orde vergelijking

Een belangrijke vorm is:

y' + p(x)y = q(x)

Een algemene methode gebruikt een **integrerende factor**.

Voor:

y' + p(x)y = q(x)

definiëren we:

μ(x) = e\^(∫p(x)dx)

Vermenigvuldig de vergelijking met μ.

Dan wordt de linkerkant:

d/dx \[μ(x)y\]

waardoor de vergelijking integreerbaar wordt.

Deze methode hoef je niet alleen als algoritme te onthouden: de kracht
zit in het herkennen van een productregel achter de methode.

------------------------------------------------------------------------

## 5.2.9 Tweede orde: harmonische oscillator

Een fundamentele vergelijking is:

y'' + ω²y = 0

Een oplossing is:

y(t)=A cos(ωt)+B sin(ωt)

Controle:

y''(t) = -ω²A cos(ωt) - ω²B sin(ωt)

dus:

y'' + ω²y = 0

Dit beschrijft een harmonische oscillator.

Voorbeelden:

-   massa aan een veer;
-   kleine trillingen;
-   elektrische oscillaties;
-   veel benaderingen van fysische systemen.

------------------------------------------------------------------------

## 5.2.10 Complexe oplossing van de oscillator

Gebruik:

e\^(iωt)

Volgens Euler:

e\^(iωt)=cos(ωt)+i sin(ωt)

Differentieer:

d/dt e^(iωt)=iωe^(iωt)

nogmaals:

d²/dt² e^(iωt)=(iω)²e^(iωt)

Omdat i²=-1:

d²/dt² e^(iωt)=-ω²e^(iωt)

Dus:

y''+ω²y=0

De complexe exponentiële vorm is een compacte manier om sinus- en
cosinusoplossingen te behandelen.

------------------------------------------------------------------------

## 5.2.11 Lineaire systemen en Fase 4

In Fase 4 leerden we matrices.

Een systeem van differentiaalvergelijkingen kan worden geschreven als:

d𝐯/dt = A𝐯

waarbij 𝐯(t) een vector is en A een matrix.

Dit verbindt Fase 4 rechtstreeks met Fase 5.

Eigenwaarden van A bepalen vaak belangrijke groeisnelheden,
vervalsnelheden en oscillatiefrequenties.

Dat is precies waarom eigenwaarden in Fase 4 belangrijk waren.

------------------------------------------------------------------------

## 5.2.12 Matrix-exponentiële

Voor:

d𝐯/dt = A𝐯

is de formele oplossing:

𝐯(t)=e\^(At)𝐯(0)

Hierin is e\^(At) geen gewone exponentiële van één getal, maar een
matrix-exponentiële.

Die kan worden gedefinieerd via de machtreeks:

e\^(At) = I + At + (At)²/2! + (At)³/3! + ...

Dit is de matrixversie van:

e\^x = 1 + x + x²/2! + x³/3! + ...

Diagonalisatie uit Fase 4 kan deze berekening sterk vereenvoudigen.

------------------------------------------------------------------------

## 5.2.13 Stabiliteit

Bij een dynamisch systeem:

𝐯' = A𝐯

geven de eigenwaarden informatie over de stabiliteit.

Grofweg:

-   negatieve reële delen → verval;
-   positieve reële delen → groei;
-   zuiver imaginaire eigenwaarden → oscillatie zonder exponentiële
    groei of verval.

Dit is een krachtige verbinding:

**eigenwaarden → dynamiek → stabiliteit**

------------------------------------------------------------------------

## 5.2.14 Partiële differentiaalvergelijkingen

Tot nu toe hadden we functies van één variabele:

y(t)

Maar fysische grootheden kunnen afhangen van meerdere variabelen:

u(x,t)

Dan verschijnen partiële afgeleiden:

∂u/∂t

en:

∂²u/∂x²

Een voorbeeld is de golfvergelijking:

∂²u/∂t² = c² ∂²u/∂x²

Deze beschrijft golfvoortplanting.

Een ander belangrijk voorbeeld is de warmtevergelijking:

∂u/∂t = α ∂²u/∂x²

De volgende stap naar Fourier-analyse ligt hier al klaar.

------------------------------------------------------------------------

## 5.2.15 De Schrödingervergelijking

Een fundamentele vergelijking uit de kwantummechanica is de
tijdsafhankelijke Schrödingervergelijking:

iℏ ∂ψ/∂t = Ĥψ

Hierin:

-   i is de imaginaire eenheid;
-   ℏ is de gereduceerde Planckconstante;
-   ψ is de kwantumtoestand;
-   Ĥ is de Hamilton-operator.

De vergelijking is een differentiaalvergelijking én een lineaire
vergelijking in een vectorruimte.

Hier komen dus meerdere eerdere fasen samen:

**complexe getallen + differentiaalrekening + vectorruimten +
operatoren**

Voor een tijdsonafhankelijke situatie verschijnt de
eigenwaarde-vergelijking:

Ĥψ = Eψ

Die heeft exact de structuur die je in Fase 4 hebt geleerd:

Av = λv

De energie E speelt de rol van een eigenwaarde.

------------------------------------------------------------------------

## Oefeningen 5.2

1.  Los dy/dx = 6x op.
2.  Los dy/dx = 3y op.
3.  Bepaal de specifieke oplossing van y'=2x met y(0)=4.
4.  Los y'=-0,5y op.
5.  Wat is de orde van y''+4y=0?
6.  Controleer of y=cos(2x) een oplossing is van y''+4y=0.
7.  Los y''+9y=0 algemeen op.
8.  Wat is het verschil tussen een algemene oplossing en een
    beginwaardeprobleem?
9.  Schrijf y''+ω²y=0 als een eerste-ordesysteem met twee variabelen.
10. Wat vertelt een negatieve reële eigenwaarde over een eenvoudig
    lineair dynamisch systeem?
11. Waarom zijn complexe exponenten handig bij oscillaties?
12. Wat is het verschil tussen een gewone differentiaalvergelijking en
    een partiële differentiaalvergelijking?
13. Welke grootheden komen voor in de Schrödingervergelijking
    iℏ∂ψ/∂t=Ĥψ?
14. Welke vergelijking heeft dezelfde wiskundige structuur als de
    kwantummechanische eigenwaarde-vergelijking?
15. Waarom is Fase 4 belangrijk voor het oplossen van gekoppelde
    differentiaalvergelijkingen?

### Antwoorden 5.2

1.  y=3x²+C.
2.  y=Ae\^(3x).
3.  y=x²+4.
4.  y=Ae\^(-0,5x).
5.  Tweede orde.
6.  Ja: y''=-4cos(2x), dus y''+4y=0.
7.  y=A cos(3x)+B sin(3x).
8.  De algemene oplossing bevat vrije constanten; beginvoorwaarden
    bepalen die constanten.
9.  Neem x₁=y en x₂=y'. Dan x₁'=x₂ en x₂'=-ω²x₁.
10. De bijbehorende component vervalt exponentieel.
11. Eén complexe exponentiële functie bevat tegelijk sinus- en
    cosinusgedrag en differentieert zeer eenvoudig.
12. Een gewone differentiaalvergelijking gebruikt afgeleiden naar één
    onafhankelijke variabele; een partiële differentiaalvergelijking
    gebruikt partiële afgeleiden naar meerdere variabelen.
13. i, ℏ, ψ, de tijdsafgeleide en de Hamilton-operator Ĥ.
14. Ĥψ=Eψ heeft dezelfde vorm als Av=λv.
15. Een systeem kan als vectorvergelijking v'=Av worden geschreven;
    matrixmethoden en eigenwaarden geven informatie over oplossingen en
    stabiliteit.

------------------------------------------------------------------------

# Milestone 5.3 --- Fourier-analyse

**Doel:** begrijpen hoe periodieke en algemene functies kunnen worden
opgebouwd uit sinus- en cosinusgolven, en leren hoe
frequentie-informatie uit een signaal wordt gehaald.

------------------------------------------------------------------------

## 5.3.1 Het basisidee

Een ingewikkelde periodieke functie kan worden opgebouwd uit eenvoudige
golven.

Bijvoorbeeld:

f(t) = sin(t) + 0,5 sin(2t)

bestaat uit twee frequenties:

-   een fundamentele frequentie;
-   een tweede harmonische.

Fourier-analyse draait het probleem om.

In plaats van:

> Welke golfvorm krijg ik uit deze frequenties?

vragen we:

> Welke frequenties zitten in deze golfvorm?

------------------------------------------------------------------------

## 5.3.2 Sinus en cosinus als bouwstenen

De functies:

sin(x)

en:

cos(x)

zijn periodiek.

Ze voldoen aan:

sin(x+2π)=sin(x)

cos(x+2π)=cos(x)

Een Fourier-reeks gebruikt combinaties van:

cos(nx)

en:

sin(nx)

voor gehele n.

------------------------------------------------------------------------

## 5.3.3 Fourier-reeks

Voor een geschikte periodieke functie kunnen we schrijven:

f(x) = a₀/2 + Σ \[aₙ cos(nx) + bₙ sin(nx)\]

waar de som loopt over:

n = 1, 2, 3, ...

De coëfficiënten vertellen hoeveel van elke frequentie aanwezig is.

------------------------------------------------------------------------

## 5.3.4 Waarom werken sinus en cosinus zo goed?

Een cruciale eigenschap is **orthogonaliteit**.

Over een volledig aantal perioden geldt bijvoorbeeld:

∫₀\^(2π) cos(nx) cos(mx) dx = 0

voor verschillende n en m.

Ook:

∫₀\^(2π) sin(nx) sin(mx) dx = 0

voor n ≠ m.

En sinus en cosinus zijn onderling orthogonaal:

∫₀\^(2π) sin(nx) cos(mx) dx = 0

Hier verschijnt opnieuw een idee uit Fase 4: orthogonaliteit.

Fourier-basisfuncties gedragen zich als loodrechte richtingen in een
veel grotere vectorruimte.

------------------------------------------------------------------------

## 5.3.5 De Fourier-coëfficiënten

Voor een 2π-periodieke functie:

a₀ = (1/π) ∫₀\^(2π) f(x) dx

Voor n ≥ 1:

aₙ = (1/π) ∫₀\^(2π) f(x) cos(nx) dx

en:

bₙ = (1/π) ∫₀\^(2π) f(x) sin(nx) dx

Deze integralen meten als het ware hoeveel van elke basisgolf in f zit.

Dit is conceptueel vergelijkbaar met het bepalen van coördinaten van een
vector langs orthogonale basisrichtingen.

------------------------------------------------------------------------

## 5.3.6 Een eenvoudig voorbeeld

Neem:

f(x)=cos(x)

Dan is duidelijk:

a₁=1

en alle andere Fourier-coëfficiënten zijn nul.

Dus de Fourier-reeks is gewoon:

f(x)=cos(x)

Neem nu:

f(x)=3+2cos(x)-sin(2x)

Dan zijn de aanwezige componenten:

-   constante component 3;
-   cosinus met frequentie 1 en amplitude 2;
-   sinus met frequentie 2 en amplitude -1.

Fourier-analyse onthult deze structuur.

------------------------------------------------------------------------

## 5.3.7 Blokgolf

Een beroemd voorbeeld is de blokgolf.

Een ideale blokgolf kan worden opgebouwd uit oneven harmonischen:

sin(x) + (1/3)sin(3x) + (1/5)sin(5x) + ...

Met de juiste schaalfactor ontstaat:

een scherpe periodieke blokgolf.

Dit is verrassend:

> Een scherpe, hoekige functie kan worden opgebouwd uit uitsluitend
> gladde sinusgolven.

Hoe meer harmonischen je toevoegt, hoe beter de benadering wordt.

------------------------------------------------------------------------

## 5.3.8 Gibbsverschijnsel

Bij functies met sprongen ontstaat bij eindige Fourier-benaderingen een
karakteristieke overshoot nabij de sprong.

Dit heet het **Gibbsverschijnsel**.

Belangrijk:

-   meer termen verbeteren de benadering;
-   vlak bij de sprong blijft een overshoot bestaan;
-   de breedte van de regio waarin het verschijnsel zichtbaar is wordt
    kleiner.

Dit is een eerste kennismaking met een belangrijk thema in analyse:
convergentie kan subtiel zijn.

------------------------------------------------------------------------

## 5.3.9 Fourier-transform

Een Fourier-reeks is vooral geschikt voor periodieke functies.

Voor niet-periodieke signalen gebruiken we de **Fourier-transform**.

In continue vorm:

F(ω) = ∫₋∞\^∞ f(t)e\^(-iωt) dt

De inverse transform is:

f(t) = (1/2π) ∫₋∞\^∞ F(ω)e\^(iωt) dω

De exacte conventie voor factoren 2π kan per boek verschillen. De
onderliggende gedachte blijft dezelfde.

De transformeertijd:

tijd → frequentie

------------------------------------------------------------------------

## 5.3.10 Waarom de complexe exponentiële vorm?

Volgens Euler:

e\^(iωt)=cos(ωt)+i sin(ωt)

Daarom bevat:

e\^(iωt)

zowel sinus- als cosinusinformatie.

Dat maakt de complexe vorm veel compacter.

Fourier-analyse en complexe getallen zijn dus geen twee losse
onderwerpen.

Ze zijn diep met elkaar verbonden.

------------------------------------------------------------------------

## 5.3.11 Frequentiedomein

Een signaal kan op twee manieren worden bekeken.

### Tijdsdomein

Hoe verandert het signaal in de tijd?

### Frequentiedomein

Welke frequenties bevat het signaal?

Een toon van één zuivere frequentie geeft een sterk geconcentreerde
frequentiecomponent.

Een ingewikkeld geluid bevat veel frequenties.

------------------------------------------------------------------------

## 5.3.12 Voorbeeld: geluid

Een zuivere toon kan worden beschreven als:

f(t)=A cos(2πft)

Een muziekinstrument produceert een veel complexere golf.

Fourier-analyse ontleedt die golf in:

-   grondtoon;
-   harmonischen;
-   eventueel ruiscomponenten.

Daarom is frequentieanalyse zo belangrijk in audio.

------------------------------------------------------------------------

## 5.3.13 Fourier en differentiaalvergelijkingen

Een van de krachtigste toepassingen van Fourier-analyse is het oplossen
van partiële differentiaalvergelijkingen.

Neem de warmtevergelijking:

∂u/∂t = α ∂²u/∂x²

Als we de ruimtelijke afhankelijkheid ontleden in sinusfuncties,
verandert de partiële differentiaalvergelijking in een verzameling
gewone differentiaalvergelijkingen.

Elke Fourier-modus evolueert afzonderlijk.

Dat is een zeer belangrijk patroon:

> **Een ingewikkeld probleem wordt ontleed in eenvoudige onafhankelijke
> componenten.**

Dit idee is fundamenteel voor de moderne theoretische fysica.

------------------------------------------------------------------------

## 5.3.14 Fourier en kwantummechanica

In de kwantummechanica zijn positie en impuls verbonden via
Fourier-transformaties.

Een toestand kan in positie worden beschreven als:

ψ(x)

of in impulsruimte als:

φ(p)

Deze twee beschrijvingen zijn via een Fourier-transform met elkaar
verbonden.

Dit helpt verklaren waarom positie en impuls verschillende maar nauw
verbonden representaties van dezelfde kwantumtoestand zijn.

------------------------------------------------------------------------

## 5.3.15 Fourier als vectorruimte-idee

Hier komt een diepe verbinding met Fase 4.

In Fase 4 schreef je een vector als:

v = a₁e₁ + a₂e₂ + ...

Bij Fourier-analyse schrijven we een functie als:

f = Σ \[aₙ cos(nx) + bₙ sin(nx)\]

De sinus- en cosinusfuncties spelen de rol van basisvectoren.

De ruimte waarin we werken is nu geen gewone R² of R³, maar een
**functieruimte**.

Dit is een belangrijke abstractiesprong richting Fase 6.

------------------------------------------------------------------------

## Oefeningen 5.3

1.  Wat is het basisidee van Fourier-analyse?
2.  Welke twee soorten functies vormen de basis van een gewone
    Fourier-reeks?
3.  Wat betekent een hoge harmonische frequentie?
4.  Waarom zijn orthogonaliteit en Fourier-analyse met elkaar verbonden?
5.  Welke Fourier-componenten zitten in f(x)=4+3cos(x)-2sin(3x)?
6.  Wat is het verschil tussen een Fourier-reeks en een
    Fourier-transform?
7.  Wat gebeurt er met een blokgolf wanneer je steeds meer
    Fourier-termen toevoegt?
8.  Wat is het Gibbsverschijnsel?
9.  Waarom zijn complexe exponenten handig in Fourier-analyse?
10. Wat is het verschil tussen tijdsdomein en frequentiedomein?
11. Waarom kan Fourier-analyse een differentiaalvergelijking eenvoudiger
    maken?
12. Welke rol speelt Fourier-analyse in de kwantummechanica?
13. Hoe lijkt een Fourier-reeks op een vector in een basis?
14. Wat is een Fourier-modus?
15. Waarom is Fourier-analyse een brug tussen Fase 5 en de latere
    natuurkunde?

### Antwoorden 5.3

1.  Een complexe functie of een complex signaal ontleden in eenvoudige
    sinus- en cosinuscomponenten.
2.  Sinus en cosinus met gehele veelvouden van de fundamentele
    frequentie.
3.  Het correspondeert met een snellere oscillatie en een hogere
    frequentie.
4.  Verschillende sinus- en cosinusfuncties zijn orthogonaal over
    geschikte intervallen, waardoor hun bijdragen afzonderlijk kunnen
    worden bepaald.
5.  Constante component 4, cosinuscomponent 3 bij n=1, sinuscomponent -2
    bij n=3.
6.  Een Fourier-reeks beschrijft vooral periodieke functies als discrete
    som van frequenties; een Fourier-transform geeft voor algemene
    signalen een continue frequentiebeschrijving.
7.  De benadering wordt steeds nauwkeuriger, hoewel bij sprongen het
    Gibbsverschijnsel blijft optreden.
8.  De karakteristieke overshoot nabij een sprong bij Fourier-benadering
    van een discontinue functie.
9.  e\^(iωt) combineert sinus en cosinus in één uitdrukking en
    differentieert zeer eenvoudig.
10. Tijdsdomein beschrijft hoe iets in de tijd verandert;
    frequentiedomein beschrijft welke frequenties aanwezig zijn.
11. Door een functie in Fourier-modi te ontleden, kan een partiële
    differentiaalvergelijking worden omgezet in afzonderlijke
    eenvoudiger vergelijkingen.
12. Positie- en impulsrepresentaties van een kwantumtoestand zijn via
    Fourier-transformaties verbonden.
13. Beide schrijven een object als een lineaire combinatie van
    basisobjecten.
14. Eén afzonderlijke sinus- of cosinuscomponent met een bepaalde
    frequentie.
15. Fourier-analyse vormt een gemeenschappelijke taal voor golven,
    PDE's, signalen en kwantummechanica.

------------------------------------------------------------------------

# Verbinding tussen de drie milestones

De drie onderdelen van Fase 5 zijn nauw verbonden.

## 1. Complexe getallen geven een nieuw getallensysteem

We breiden:

R

uit naar:

C

met:

i²=-1

Daarmee kunnen rotaties en oscillaties elegant worden beschreven.

## 2. Differentiaalvergelijkingen beschrijven verandering

Een differentiaalvergelijking schrijft een veranderingswet voor:

y' = f(y,t)

of:

𝐯' = A𝐯

Hier komt lineaire algebra uit Fase 4 terug.

## 3. Fourier-analyse ontleedt verandering in frequenties

Een ingewikkelde functie wordt opgebouwd uit eenvoudige basisgolven:

f = Σ componenten

Daarmee kunnen we ingewikkelde dynamiek vaak opsplitsen in eenvoudige
modi.

De kernketen is:

**complexe getallen → oscillaties → differentiaalvergelijkingen →
Fourier-modi → golven**

------------------------------------------------------------------------

# De diepe verbinding met Fase 4

Fase 4 en Fase 5 zijn sterker verbonden dan op het eerste gezicht lijkt.

In Fase 4 leerden we:

Av = λv

In Fase 5 verschijnt:

Ĥψ = Eψ

Dit heeft exact dezelfde algebraïsche structuur.

In Fase 4 leerden we:

v' = Av

In Fase 5 gebruiken we:

v(t)=e\^(At)v(0)

In Fase 4 leerden we orthogonaliteit van vectoren.

In Fase 5 zien we orthogonaliteit van functies:

∫ f(x)g(x) dx = 0

De taal verandert, maar het onderliggende idee blijft:

> **Complexe objecten kunnen worden beschreven met geschikte
> basisobjecten en hun coördinaten.**

------------------------------------------------------------------------

# Veelgemaakte fouten in Fase 5

## Fout 1 --- Denken dat i "een gewoon negatief getal" is

i is geen reëel getal.

Het voldoet aan:

i²=-1

en breidt het getallensysteem uit.

## Fout 2 --- Vergeten dat i²=-1

Bij:

(2+i)²

moet je de term i² vervangen door -1.

## Fout 3 --- Complexe getallen alleen als algebra zien

Het complexe vlak is essentieel.

a+bi kan worden gezien als het punt:

(a,b)

en als vector.

## Fout 4 --- Een differentiaalvergelijking verwarren met een gewone vergelijking

x²=4 zoekt getallen.

y'=2y zoekt functies.

## Fout 5 --- De integratieconstante vergeten

Uit:

y'=2x

volgt:

y=x²+C

niet alleen:

y=x²

## Fout 6 --- Beginvoorwaarden negeren

De algemene oplossing bevat meestal vrije constanten.

Beginvoorwaarden bepalen welke specifieke oplossing geldt.

## Fout 7 --- Een tweede-orde vergelijking behandelen alsof ze eerste orde is

Een tweede-orde vergelijking heeft doorgaans twee onafhankelijke
constanten in haar algemene oplossing.

Bijvoorbeeld:

y''+9y=0

geeft:

y=A cos(3x)+B sin(3x)

## Fout 8 --- Denken dat Fourier-analyse alleen over geluid gaat

Hetzelfde principe verschijnt bij:

-   warmte;
-   golven;
-   elektromagnetisme;
-   trillingen;
-   quantummechanica;
-   beeldverwerking.

## Fout 9 --- Denken dat een Fourier-reeks "magisch" werkt

De basisfuncties zijn gekozen vanwege hun orthogonaliteit en hun gedrag
onder differentiëren en integreren.

------------------------------------------------------------------------

# Eindtoets Fase 5

Maak de toets eerst zonder cursus.

## Deel A --- Complexe getallen

1.  Bereken i⁶.

2.  Vereenvoudig:

    (2+3i)+(5-4i)

3.  Bereken:

    (1+2i)(3-i)

4.  Bereken \|6+8i\|.

5.  Geef het geconjugeerde van 4-7i.

6.  Schrijf het punt (0,-3) als complex getal.

7.  Wat doet vermenigvuldiging met i geometrisch?

8.  Schrijf e\^(iπ) als reëel getal.

9.  Schrijf z=1+i in poolvorm.

10. Waarom is Euler-formule belangrijk?

## Deel B --- Differentiaalvergelijkingen

11. Wat is een differentiaalvergelijking?
12. Los y'=4x op.
13. Los y'=2y op.
14. Los y'=3x² op met y(0)=5.
15. Wat is de orde van y''-5y'+6y=0?
16. Controleer of y=sin(2x) voldoet aan y''+4y=0.
17. Geef de algemene oplossing van y''+ω²y=0.
18. Wat doet een beginvoorwaarde?
19. Wat is de oplossing van v'=Av formeel?
20. Wat vertelt een negatieve reële eigenwaarde over dynamiek?
21. Waarom verschijnt i in de Schrödingervergelijking?
22. Wat is de structuur van de tijdsonafhankelijke
    Schrödingervergelijking?

## Deel C --- Fourier

23. Wat is het centrale idee van Fourier-analyse?
24. Welke functies worden gebruikt in een Fourier-reeks?
25. Wat betekent orthogonaliteit in deze context?
26. Welke componenten bevat:

f(x)=2+5cos(x)-3sin(2x)?

27. Wat is het verschil tussen Fourier-reeks en Fourier-transform?
28. Waarom zijn complexe exponenten handig?
29. Wat is het Gibbsverschijnsel?
30. Hoe kan Fourier-analyse helpen bij een partiële
    differentiaalvergelijking?

------------------------------------------------------------------------

## Antwoorden eindtoets

1.  i⁶=i²=-1.
2.  7-i.
3.  (1+2i)(3-i)=3-i+6i-2i²=5+5i.
4.  10. 
5.  4+7i.
6.  -3i.
7.  Rotatie over 90° tegenwijzerzin.
8.  -1.
9.  √2 e\^(iπ/4).
10. Ze verbindt exponentiële functies met sinus en cosinus en maakt
    complexe beschrijvingen van oscillaties mogelijk.
11. Een vergelijking waarin een onbekende functie en één of meer
    afgeleiden voorkomen.
12. y=2x²+C.
13. y=Ae\^(2x).
14. y=x³+5.
15. Tweede orde.
16. Ja. y''=-4sin(2x), dus y''+4y=0.
17. y=Acos(ωx)+Bsin(ωx).
18. Ze selecteert een specifieke oplossing uit de algemene familie.
19. v(t)=e\^(At)v(0).
20. De overeenkomstige dynamische component vervalt exponentieel.
21. Omdat complexe getallen oscillaties en de tijdsevolutie van
    quantumtoestanden natuurlijk beschrijven.
22. Ĥψ=Eψ.
23. Een functie of signaal ontleden in eenvoudige frequentiecomponenten.
24. Sinus en cosinus van gehele veelvouden van de basisfrequentie.
25. Verschillende basisfuncties hebben nul inwendig product over het
    geschikte interval.
26. Constante 2, cosinus n=1 met coëfficiënt 5, sinus n=2 met
    coëfficiënt -3.
27. Een reeks gebruikt discrete harmonischen voor periodieke functies;
    een transform geeft een frequentiespectrum voor algemene signalen.
28. Ze combineert sinus en cosinus en maakt differentiëren eenvoudig.
29. Overshoot nabij sprongen bij eindige Fourier-benaderingen.
30. Door de oplossing in Fourier-modi te ontleden, kan een PDE worden
    gereduceerd tot eenvoudigere vergelijkingen per modus.

------------------------------------------------------------------------

# Eindcheck --- Begrijp je Fase 5 echt?

Probeer deze vragen in eigen woorden te beantwoorden.

### Concept 1

Waarom moesten we het getallensysteem uitbreiden van R naar C?

### Concept 2

Waarom kun je een complex getal zien als een vector in een vlak?

### Concept 3

Waarom verandert vermenigvuldiging met i een vector van richting?

### Concept 4

Waarom heeft een differentiaalvergelijking meestal een familie van
oplossingen?

### Concept 5

Waarom zijn eigenwaarden uit Fase 4 relevant voor
differentiaalvergelijkingen?

### Concept 6

Waarom zijn e\^(iωt), sin(ωt) en cos(ωt) zo nauw met elkaar verbonden?

### Concept 7

Wat betekent het fysisch wanneer een differentiaalvergelijking een
oscillatie beschrijft?

### Concept 8

Wat betekent het om een functie te ontleden in Fourier-componenten?

### Concept 9

Waarom is orthogonaliteit belangrijk bij Fourier-analyse?

### Concept 10

Waarom is de vergelijking:

Ĥψ=Eψ

zo belangrijk voor het verdere leerpad?

Als je deze tien vragen helder kunt beantwoorden, begrijp je de
conceptuele ruggengraat van Fase 5.

------------------------------------------------------------------------

# Poort naar Fase 6 --- Abstracte Algebra & Topologie

Het leerpad beschrijft Fase 6 als:

-   groepentheorie & symmetrie;
-   topologie;
-   tensorrekening. fileciteturn6file0L51-L54

Fase 5 heeft daarvoor belangrijke voorbereidingen gelegd.

## Van complexe getallen naar symmetrie

Vermenigvuldiging met:

e\^(iθ)

beschrijft een rotatie.

Rotaties vormen een voorbeeld van een verzameling transformaties met een
algebraïsche structuur.

Dat leidt rechtstreeks naar groepentheorie.

## Van vectorruimten naar abstracte structuren

In Fase 5 hebben we gezien dat functies zelf vectoren kunnen vormen.

Dat betekent dat "vectorruimte" veel abstracter is dan een verzameling
pijlen.

Fase 6 gaat deze abstractie verder uitbreiden.

## Van Fourier naar functieruimten

Fourier-analyse behandelt functies als vectoren in een functieruimte.

De Fourier-componenten spelen de rol van basisrichtingen.

Dit vormt een belangrijke voorbereiding op meer abstracte vectorruimten
en uiteindelijk Hilbertruimten.

## Van complexe getallen naar quantummechanica

De combinatie:

-   complexe getallen;
-   vectorruimten;
-   lineaire operatoren;
-   eigenwaarden;
-   differentiaalvergelijkingen

is precies de mathematische omgeving waarin de basis van de
kwantummechanica wordt geformuleerd.

------------------------------------------------------------------------

# Mastery check --- Fase 5

Je beheerst Fase 5 wanneer je:

-   de betekenis van i begrijpt;
-   met complexe getallen kunt rekenen;
-   complexe getallen in het complexe vlak kunt plaatsen;
-   het geconjugeerde kunt gebruiken;
-   de modulus kunt berekenen;
-   tussen cartesische en poolvorm kunt wisselen;
-   Euler-formule begrijpt;
-   complexe vermenigvuldiging als rotatie en schaling kunt
    interpreteren;
-   begrijpt wat een differentiaalvergelijking is;
-   eerste-orde differentiaalvergelijkingen kunt oplossen;
-   beginvoorwaarden kunt toepassen;
-   exponentiële groei en verval begrijpt;
-   tweede-orde lineaire differentiaalvergelijkingen met constante
    coëfficiënten kunt herkennen;
-   harmonische oscillaties begrijpt;
-   de verbinding tussen matrices en differentiaalvergelijkingen
    begrijpt;
-   begrijpt wat v'=Av betekent;
-   de rol van eigenwaarden bij stabiliteit begrijpt;
-   begrijpt wat een partiële differentiaalvergelijking is;
-   de structuur van de Schrödingervergelijking begrijpt;
-   het basisidee van Fourier-analyse begrijpt;
-   Fourier-coëfficiënten conceptueel kunt interpreteren;
-   orthogonaliteit kunt verbinden met Fourier-basisfuncties;
-   het verschil tussen Fourier-reeks en Fourier-transform begrijpt;
-   het Gibbsverschijnsel kent;
-   begrijpt waarom complexe exponenten in Fourier-analyse worden
    gebruikt;
-   Fourier-analyse kunt verbinden met golven en kwantummechanica.

------------------------------------------------------------------------

# Skilltree --- Fase 5

``` text
                         ┌────────────────────────────┐
                         │ FASE 5                     │
                         │ DIFFERENTIAALVERGELIJKINGEN│
                         │ & COMPLEXE ANALYSE         │
                         └──────────────┬─────────────┘
                                        │
                ┌───────────────────────┼───────────────────────┐
                │                       │                       │
        ┌───────▼────────┐      ┌───────▼──────────┐    ┌───────▼────────┐
        │ 5.1 Complexe   │      │ 5.2 Differentiaal│    │ 5.3 Fourier    │
        │ getallen       │      │ vergelijkingen   │    │ analyse        │
        └───────┬────────┘      └────────┬─────────┘    └───────┬────────┘
                │                        │                      │
        ┌───────▼────────┐      ┌────────▼────────┐    ┌────────▼────────┐
        │ i              │      │ eerste orde     │    │ sinus/cosinus   │
        │ complex vlak  │      │ groei/verval    │    │ harmonischen     │
        │ modulus        │      │ beginwaarden    │    │ orthogonaliteit  │
        └───────┬────────┘      └────────┬────────┘    └────────┬────────┘
                │                        │                      │
        ┌───────▼────────┐      ┌────────▼────────┐    ┌────────▼────────┐
        │ poolvorm       │      │ tweede orde     │    │ Fourier-reeks   │
        │ Euler-formule  │      │ oscillaties     │    │ Fourier-transform│
        │ rotaties       │      │ systemen v'=Av  │    │ frequentiedomein│
        └───────┬────────┘      └────────┬────────┘    └────────┬────────┘
                │                        │                      │
                └────────────────────────┼──────────────────────┘
                                         │
                               ┌─────────▼─────────┐
                               │ GOLVEN & DYNAMICA │
                               └─────────┬─────────┘
                                         │
                         ┌───────────────┼────────────────┐
                         │               │                │
                  ┌──────▼─────┐ ┌─────▼────────┐ ┌──────▼────────┐
                  │ complexe   │ │ PDE's        │ │ quantum-       │
                  │ oscillaties│ │ en golven    │ │ mechanica      │
                  └──────┬─────┘ └─────┬────────┘ └──────┬────────┘
                         │             │                 │
                         └─────────────┼─────────────────┘
                                       │
                              ┌────────▼─────────┐
                              │ POORT FASE 6     │
                              │ groepen          │
                              │ topologie        │
                              │ tensorrekening   │
                              └──────────────────┘
```

------------------------------------------------------------------------

# Samenvatting van Fase 5

Fase 5 brengt drie grote ideeën samen.

## 1. Complexe getallen

We breiden de reële getallen uit:

R → C

met:

i²=-1

Hierdoor krijgen we een natuurlijke taal voor rotaties en oscillaties.

## 2. Differentiaalvergelijkingen

We gaan van:

"wat is de waarde?"

naar:

"hoe verandert het systeem?"

Een differentiaalvergelijking beschrijft een veranderingswet.

De basisvorm:

y'=f(y,t)

kan veel verschillende dynamische systemen beschrijven.

## 3. Fourier-analyse

We gaan vervolgens van een ingewikkelde golf naar haar fundamentele
frequenties.

Een functie wordt ontleed als:

**functie → basisgolven → frequenties**

De diepe conceptuele lijn van de fase is:

**complexe getallen → rotaties → oscillaties →
differentiaalvergelijkingen → golven → Fourier-analyse**

En de verbinding met Fase 4:

**vectorruimten → operatoren → eigenwaarden → dynamische systemen →
quantumtoestanden**

De vergelijking:

Ĥψ=Eψ

is daarbij een belangrijk herkenningspunt.

Je hebt nu de wiskundige taal geleerd waarin een groot deel van de
klassieke golfleer en de basisstructuur van de kwantummechanica kan
worden beschreven.

De volgende fase maakt opnieuw een abstractiesprong: van vectorruimten
en functies naar **symmetrie, groepen, topologische structuren en
tensoren**. Daarmee begint de wiskundige taal die uiteindelijk nodig is
voor differentiaalmeetkunde en Yang-Mills-theorie.
