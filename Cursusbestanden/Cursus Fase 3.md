# Cursus Fase 3 — Calculus (Analyse)

**Leerpad:** van functies naar verandering, limieten, afgeleiden, integralen en multivariabele calculus  
**Doel van deze fase:** begrijpen hoe wiskunde verandering en accumulatie beschrijft. Je leert limieten en continuïteit begrijpen, afgeleiden berekenen en interpreteren, integralen gebruiken voor oppervlakte en opgetelde hoeveelheden, en de eerste stappen zetten naar calculus in meerdere variabelen.

**Vorige stap:** Fase 2 — Algebra & Geometrie  
**Volgende stap:** Fase 4 — Lineaire Algebra

---

# Plaats van Fase 3 in het leerpad

In Fase 1 leerden we rekenen met getallen.

In Fase 2 leerden we getallen vervangen door variabelen en relaties beschrijven met functies en grafieken.

Fase 3 stelt een nieuwe vraag:

> **Hoe verandert een grootheid?**

Een functie zoals:

**f(x) = x²**

vertelt ons welke waarde bij iedere x hoort. Maar we willen nu meer weten:

- Hoe snel verandert f(x)?
- Wat gebeurt er wanneer x steeds dichter bij een bepaalde waarde komt?
- Hoe bepalen we de oppervlakte onder een grafiek?
- Hoe berekenen we een totale hoeveelheid die voortdurend verandert?

De structuur van het leerpad noemt vier onderdelen: **Limieten & Continuïteit**, **Differentiaalrekening**, **Integraalrekening** en **Multivariabele Calculus**. fileciteturn3file0L32-L36

---

# Hoe je deze cursus gebruikt

Calculus is abstracter dan de vorige fases. Probeer daarom voortdurend drie niveaus tegelijk te zien:

**intuïtie → grafiek → formule**

Bijvoorbeeld:

- intuïtief: "de functie verandert steeds sneller";
- grafisch: "de helling van de grafiek wordt groter";
- analytisch: "de afgeleide neemt toe".

Werk voorbeelden stap voor stap uit.

> **Markdown-compatibiliteit:** deze cursus gebruikt geen `\\( ... \\)` of `$$ ... $$`. Formules staan in gewone tekst en Unicode, zodat ook eenvoudige Markdown-readers ze correct tonen.

---

# De grote lijn van Fase 3

```text
Functie
   │
   ↓
Wat gebeurt er dicht bij een punt?
   │
   ↓
Limiet
   │
   ↓
Veranderingssnelheid
   │
   ↓
Afgeleide
   │
   ↓
Opgetelde verandering
   │
   ↓
Integraal
   │
   ↓
Functies van meerdere variabelen
   │
   ↓
Multivariabele calculus
```

**limiet → lokale verandering → globale accumulatie**

---

# Milestone 3.1 — Limieten & continuïteit

**Doel:** begrijpen wat het betekent dat een functie een bepaalde waarde nadert en hoe dit leidt tot het formele begrip limiet en continuïteit.

## 3.1.1 Steeds dichterbij

Neem **f(x) = x²**.

Als x = 2,1, dan f(x) = 4,41.  
Als x = 2,01, dan f(x) = 4,0401.  
Als x = 2,001, dan f(x) = 4,004001.

De functiewaarden komen steeds dichter bij 4.

We schrijven:

**lim x→2 f(x) = 4**

In gewone taal:

> Als x steeds dichter bij 2 komt, komt f(x) steeds dichter bij 4.

---

## 3.1.2 Limiet en functiewaarde zijn niet hetzelfde

Beschouw:

**f(x) = (x² − 1)/(x − 1)**

Voor x ≠ 1:

**f(x) = (x − 1)(x + 1)/(x − 1) = x + 1**

Dus:

**lim x→1 f(x) = 2**

zelfs als de oorspronkelijke functie bij x = 1 niet gedefinieerd is.

De limiet beschrijft het gedrag **in de buurt van een punt**.

---

## 3.1.3 Links en rechts

De linkerlimiet is:

**lim x→a⁻ f(x)**

De rechterlimiet is:

**lim x→a⁺ f(x)**

De gewone limiet bestaat wanneer beide gelijk zijn:

**lim x→a⁻ f(x) = lim x→a⁺ f(x)**

---

## 3.1.4 Een sprong

Als links van x = 1 de functie naar 2 gaat en rechts naar 5, dan:

**lim x→1⁻ f(x) = 2**

**lim x→1⁺ f(x) = 5**

De gewone limiet bestaat dan niet. Dit is een **sprongdiscontinuïteit**.

---

## 3.1.5 Oneindigheid

**x → ∞** betekent niet dat x aankomt bij een getal ∞. Het betekent dat x zonder bovengrens groeit.

Bijvoorbeeld:

**1/x → 0** als x → ∞.

---

## 3.1.6 Continuïteit

Intuïtief is een functie continu wanneer je haar grafiek kunt tekenen zonder je potlood op te tillen.

Formeel is f continu in x = a wanneer:

1. f(a) bestaat;
2. lim x→a f(x) bestaat;
3. lim x→a f(x) = f(a).

Polynomiale functies zoals **f(x) = x²** zijn overal continu.

---

## 3.1.7 Limieten door invullen

Bij veel eenvoudige functies kunnen we rechtstreeks invullen.

**lim x→2 (x² + 3x) = 2² + 3 × 2 = 10**

---

## 3.1.8 Onbepaalde vorm 0/0

Soms geeft invullen **0/0**. Dat is geen antwoord. Het is een **onbepaalde vorm**.

Voor:

**lim x→1 (x² − 1)/(x − 1)**

geeft rechtstreeks invullen 0/0.

Factoriseer:

**x² − 1 = (x − 1)(x + 1)**

Daarna:

**lim x→1 (x + 1) = 2**

---

## 3.1.9 Formele definitie — eerste kennismaking

We zeggen **lim x→a f(x) = L** als voor iedere ε > 0 een δ > 0 bestaat zodat:

**0 < |x − a| < δ**

impliceert:

**|f(x) − L| < ε**

De kern is:

> Je kunt f(x) zo dicht bij L krijgen als je wilt, zolang je x maar voldoende dicht bij a neemt.

---

## Oefeningen 3.1

1. Bereken lim x→3 x².
2. Bereken lim x→2 (3x + 5).
3. Bereken lim x→1 (x² − 1)/(x − 1).
4. Leg uit waarom 0/0 geen geldig antwoord is voor een limiet.
5. Geef de linker- en rechterlimiet als links de functie naar 3 gaat en rechts naar 7.
6. Bestaat de gewone limiet in oefening 5?
7. Is f(x) = x³ continu in x = 2?
8. Is f(x) = 1/x continu in x = 0?
9. Wat betekent x → ∞?
10. Leg in woorden uit wat een limiet betekent.
11. Waarom kan een limiet bestaan als de functiewaarde op dat punt niet bestaat?
12. Wat is de betekenis van de ε-δ-definitie?

### Antwoorden 3.1

1. 9
2. 11
3. 2
4. 0/0 is een onbepaalde vorm.
5. Links = 3; rechts = 7.
6. Nee.
7. Ja.
8. Nee, want f(0) is niet gedefinieerd.
9. x groeit zonder bovengrens.
10. De waarde waarnaar f(x) nadert wanneer x een bepaalde waarde nadert.
11. Omdat de limiet het gedrag in de omgeving beschrijft.
12. Dat f(x) willekeurig dicht bij L kan komen door x voldoende dicht bij a te nemen.

---

# Milestone 3.2 — Differentiaalrekening

**Doel:** veranderingssnelheden begrijpen, afgeleiden berekenen en afgeleiden interpreteren als helling en lokale verandering.

## 3.2.1 Gemiddelde verandering

Voor **f(x) = x²** tussen x = 2 en x = 3:

**(9 − 4)/(3 − 2) = 5**

Algemeen:

**gemiddelde verandering = (f(b) − f(a))/(b − a)**

Dit is de helling van de secant door twee punten.

---

## 3.2.2 Van gemiddelde naar ogenblikkelijke verandering

Voor f(x) = x² rond x = 2:

**[f(2 + h) − f(2)]/h**

= **[(2 + h)² − 4]/h**

= **4 + h**

Als h → 0:

**4 + h → 4**

Dus de afgeleide van x² bij x = 2 is 4.

---

## 3.2.3 Definitie van de afgeleide

**f'(x) = lim h→0 [f(x + h) − f(x)]/h**

De afgeleide meet de **ogenblikkelijke veranderingssnelheid**.

---

## 3.2.4 Geometrische betekenis

De afgeleide is de helling van de **raaklijn** aan de grafiek.

Een secant gebruikt twee punten; een raaklijn beschrijft de lokale richting in één punt.

---

## 3.2.5 Fysische betekenis

Als **s(t)** de positie van een object is, dan:

**v(t) = s'(t)**

is de snelheid en:

**a(t) = v'(t) = s''(t)**

is de versnelling.

---

## 3.2.6 Basisafgeleiden

**d/dx(c) = 0**

**d/dx(x) = 1**

**d/dx(x²) = 2x**

**d/dx(x³) = 3x²**

Algemeen:

**d/dx(xⁿ) = nxⁿ⁻¹**

---

## 3.2.7 Somregel en constante factor

**(f + g)' = f' + g'**

**(cf)' = cf'**

Voorbeeld:

**f(x) = x² + 3x + 5**

geeft:

**f'(x) = 2x + 3**

---

## 3.2.8 Productregel

**(fg)' = f'g + fg'**

Voor **f(x) = x²(x + 1)**:

**f'(x) = 2x(x + 1) + x² = 3x² + 2x**

---

## 3.2.9 Kettingregel

Voor **f(x) = g(h(x))**:

**f'(x) = g'(h(x)) × h'(x)**

Voor:

**f(x) = (3x + 1)²**

is:

**f'(x) = 2(3x + 1) × 3 = 18x + 6**

---

## 3.2.10 Tweede afgeleide

**f''(x)** is de afgeleide van f'(x).

Voor **f(x) = x³**:

**f'(x) = 3x²**

**f''(x) = 6x**

---

## 3.2.11 Kritieke punten en optimalisatie

Een punt waarvoor **f'(x) = 0** is een kandidaat voor een maximum of minimum.

Voor **f(x) = x²**:

**f'(x) = 2x**

dus het kritieke punt ligt bij x = 0.

Let op: f'(x) = 0 garandeert niet automatisch een maximum of minimum.

Voorbeeld optimalisatie:

**A = x(10 − x) = 10x − x²**

**A' = 10 − 2x**

A' = 0 geeft x = 5, de kandidaat voor maximale oppervlakte.

---

## Oefeningen 3.2

1. Bereken de gemiddelde verandering van x² tussen x = 1 en x = 4.
2. Wat is de afgeleide van x²?
3. Wat is de afgeleide van x³?
4. Wat is de afgeleide van 5x⁴?
5. Wat is de afgeleide van x² + 3x + 7?
6. Bereken f'(2) voor f(x) = x².
7. Bereken f'(3) voor f(x) = 2x³.
8. Bereken de afgeleide van x²(x + 1).
9. Bereken de afgeleide van (2x + 1)³.
10. Als s(t) = t², wat zijn v(t) en a(t)?
11. Waarom is de afgeleide van een constante nul?
12. Wat is het verschil tussen een secant en een raaklijn?
13. Waarom is f'(x) = 0 slechts een kandidaat voor een maximum of minimum?
14. Zoek het kritieke punt van f(x) = x² − 6x + 5.

### Antwoorden 3.2

1. 5
2. 2x
3. 3x²
4. 20x³
5. 2x + 3
6. 4
7. 54
8. 3x² + 2x
9. 6(2x + 1)²
10. v(t) = 2t en a(t) = 2
11. Een constante verandert niet.
12. Een secant verbindt twee punten; een raaklijn beschrijft de lokale richting in één punt.
13. Een horizontale raaklijn kan ook voorkomen zonder lokaal maximum of minimum.
14. f'(x) = 2x − 6 = 0, dus x = 3.

---

# Milestone 3.3 — Integraalrekening

**Doel:** integralen begrijpen als accumulatie en oppervlakte, elementaire integralen berekenen en de verbinding tussen integreren en differentiëren begrijpen.

## 3.3.1 Het oppervlakteprobleem

Voor een rechthoek is oppervlakte eenvoudig. Voor een kromme kunnen we de oppervlakte benaderen met veel smalle rechthoeken.

Hoe smaller de rechthoeken worden, hoe beter de benadering. In de limiet ontstaat de integraal.

---

## 3.3.2 Riemannsommen

Voor ieder klein interval nemen we ongeveer:

**oppervlakte ≈ breedte × hoogte**

Alle bijdragen worden opgeteld. De limiet van deze sommen vormt de bepaalde integraal.

We schrijven:

**∫ₐᵇ f(x) dx**

---

## 3.3.3 Bepaalde integraal

Voor:

**f(x) = x**

op [0, 2] is de oppervlakte een driehoek:

**A = 1/2 × 2 × 2 = 2**

Dus:

**∫₀² x dx = 2**

---

## 3.3.4 Primitieve en onbepaalde integraal

Een primitieve van f is een functie F waarvoor:

**F'(x) = f(x)**

We schrijven:

**∫ f(x) dx = F(x) + C**

C is een willekeurige constante, omdat de afgeleide van een constante nul is.

---

## 3.3.5 Basisregel

Voor n ≠ −1:

**∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C**

Voorbeeld:

**∫ x² dx = x³/3 + C**

Controle:

**d/dx(x³/3) = x²**

---

## 3.3.6 Hoofdstelling van de Calculus

Als F een primitieve van f is:

**∫ₐᵇ f(x) dx = F(b) − F(a)**

Dit vormt de fundamentele verbinding tussen differentiëren en integreren.

---

## 3.3.7 Integreren als accumulatie

Differentiaalrekening:

**functie → veranderingssnelheid**

Integraalrekening:

**veranderingssnelheid → totale verandering**

Als v(t) de snelheid is:

**Δs = ∫ₐᵇ v(t) dt**

---

## 3.3.8 Getekende oppervlakte

Een bepaalde integraal geeft **getekende oppervlakte**.

Gebied boven de x-as telt positief; gebied onder de x-as telt negatief.

De geometrische oppervlakte kan dus verschillen van de integraal.

---

## 3.3.9 Gemiddelde waarde

De gemiddelde waarde van f op [a, b] is:

**fgem = 1/(b − a) × ∫ₐᵇ f(x) dx**

---

## Oefeningen 3.3

1. Bereken ∫₀² x dx.
2. Geef een primitieve van x³.
3. Geef een primitieve van 5x².
4. Bereken ∫₀¹ 3x² dx.
5. Bereken ∫₁³ 2x dx.
6. Waarom staat + C bij een onbepaalde integraal?
7. Wat betekent een bepaalde integraal geometrisch?
8. Waarom kan een integraal negatief zijn?
9. Als v(t) de snelheid is, wat stelt ∫ₐᵇ v(t) dt voor?
10. Wat is de gemiddelde waarde van f(x) = x op [0, 4]?
11. Controleer door differentiatie dat x⁴/4 een primitieve van x³ is.
12. Leg in eigen woorden uit waarom differentiatie en integratie verbonden zijn.

### Antwoorden 3.3

1. 2
2. x⁴/4 + C
3. 5x³/3 + C
4. 1
5. 8
6. Omdat alle primitieve functies van elkaar verschillen door een constante.
7. De getekende oppervlakte tussen de grafiek en de x-as.
8. Omdat gebieden onder de x-as negatief bijdragen.
9. De verandering in positie tussen a en b.
10. 2
11. d/dx(x⁴/4) = x³.
12. Integreren en differentiëren zijn gekoppeld als inverse processen via de Hoofdstelling van de Calculus.

---

# Milestone 3.4 — Multivariabele calculus

**Doel:** calculus uitbreiden naar functies van meerdere variabelen en kennismaken met partiële afgeleiden, gradiënten en meervoudige integralen.

## 3.4.1 Van één naar meerdere variabelen

Tot nu toe hadden we:

**z = f(x)**

Nu:

**z = f(x, y)**

De waarde van z hangt af van twee onafhankelijke variabelen.

Voorbeeld:

**f(x, y) = x² + y²**

---

## 3.4.2 Oppervlakken

Bij één variabele geeft **y = f(x)** een kromme in het vlak.

Bij twee variabelen geeft **z = f(x, y)** een oppervlak in de driedimensionale ruimte.

---

## 3.4.3 Partiële afgeleiden

Voor:

**f(x, y) = x² + 3xy + y²**

is:

**∂f/∂x = 2x + 3y**

en:

**∂f/∂y = 3x + 2y**

Bij ∂/∂x behandelen we y als constant. Bij ∂/∂y behandelen we x als constant.

---

## 3.4.4 Waarom partiële afgeleiden?

Een functie van meerdere variabelen kan in verschillende richtingen veranderen.

Partiële afgeleiden meten de verandering wanneer één variabele wordt gewijzigd en de andere variabelen constant worden gehouden.

---

## 3.4.5 De gradiënt

De partiële afgeleiden vormen samen de gradiënt:

**∇f = (∂f/∂x, ∂f/∂y)**

Voor:

**f(x, y) = x² + y²**

is:

**∇f = (2x, 2y)**

De gradiënt wijst in de richting waarin f het snelst toeneemt.

Dit is een eerste ontmoeting met vectoren; een volledige behandeling volgt in Fase 4.

---

## 3.4.6 Richtingsafgeleide

Als u een eenheidsvector is, dan:

**Dᵤf = ∇f · u**

Dit geeft de veranderingssnelheid in een gekozen richting.

---

## 3.4.7 Kritieke punten

Voor een functie van twee variabelen zoeken we kandidaten voor maxima, minima en zadelpunten door tegelijk op te lossen:

**∂f/∂x = 0**

**∂f/∂y = 0**

Voor **f(x, y) = x² + y²** volgt:

**x = 0, y = 0**

Dus het kritieke punt is **(0, 0)** en dit is een minimum.

---

## 3.4.8 Dubbele integralen

Een dubbele integraal telt bijdragen op over een gebied:

**∫∫ᴰ f(x, y) dA**

Als f(x, y) ≥ 0, kan dit het volume onder een oppervlak boven gebied D bepalen.

---

## 3.4.9 Driedubbele integralen

Voor een functie van drie variabelen kunnen we integreren over een volume:

**∭ᴱ f(x, y, z) dV**

Dit wordt later belangrijk bij massaverdelingen, ladingsverdelingen en andere continue grootheden in de ruimte.

---

## Oefeningen 3.4

1. Bereken ∂f/∂x voor f(x, y) = x² + 3xy + y².
2. Bereken ∂f/∂y voor dezelfde functie.
3. Bereken de gradiënt van f(x, y) = x² + y².
4. Bereken de gradiënt in (1, 2) voor f(x, y) = x² + y².
5. Vind het kritieke punt van f(x, y) = x² + y².
6. Wat betekent het dat y constant wordt gehouden bij ∂f/∂x?
7. Wat is het verschil tussen f'(x) en ∂f/∂x?
8. Wat stelt een dubbele integraal intuïtief voor?
9. Waarom zijn vectoren relevant voor multivariabele calculus?
10. Wat is het doel van een richtingsafgeleide?

### Antwoorden 3.4

1. 2x + 3y
2. 3x + 2y
3. (2x, 2y)
4. (2, 4)
5. (0, 0)
6. Veranderingen in y worden tijdens het differentiëren genegeerd.
7. f'(x) betreft een functie van één variabele; ∂f/∂x meet verandering in één variabele terwijl andere variabelen constant blijven.
8. Een continue som over een tweedimensionaal gebied.
9. Omdat verandering meerdere richtingen kan hebben.
10. De veranderingssnelheid in een gekozen richting.

---

# De verbinding tussen de vier milestones

## Limieten → afgeleiden

De afgeleide is gedefinieerd met een limiet:

**f'(x) = lim h→0 [f(x + h) − f(x)]/h**

Dus het formele afgeleidebegrip rust op limieten.

## Afgeleiden → integralen

De afgeleide beschrijft lokale verandering. De integraal verzamelt verandering.

**snelheid → positie**

als:

**s(t) = ∫ v(t) dt**

## Integralen → limieten

Een integraal kan worden opgebouwd als een limiet van steeds fijnere Riemannsommen.

## Eén centrale gedachte

> **Limieten maken het oneindig kleine mathematisch hanteerbaar. Afgeleiden gebruiken dit om lokale verandering te meten. Integralen gebruiken het om oneindig veel kleine bijdragen op te tellen.**

---

# Veelgemaakte fouten

## Fout 1 — Een limiet is altijd de functiewaarde

Nee. Een limiet beschrijft het gedrag in de buurt van een punt.

## Fout 2 — 0/0 = 0

Nee. 0/0 is een onbepaalde vorm.

## Fout 3 — Een afgeleide is alleen een formule

Nee. De afgeleide heeft een geometrische en fysieke betekenis: helling en lokale veranderingssnelheid.

## Fout 4 — f'(x) = 0 betekent automatisch maximum

Nee. Het is alleen een kandidaat voor een lokaal extremum.

## Fout 5 — Een integraal is altijd oppervlakte

Niet precies. Een bepaalde integraal geeft getekende oppervlakte.

## Fout 6 — ∫f(x)dx is één getal

Een onbepaalde integraal geeft een familie van primitieve functies: **F(x) + C**.

## Fout 7 — Partiële afgeleiden zijn gewone afgeleiden met een ander symbool

Bij partiële afgeleiden houden we de overige variabelen constant.

---

# Eindtoets Fase 3

**Aanbevolen beheersingsniveau:** minstens 80% correct én geen fundamentele begripsfouten.

## Deel A — Limieten

1. Bereken lim x→2 (x² + 1).
2. Bereken lim x→3 (2x − 5).
3. Bereken lim x→1 (x² − 1)/(x − 1).
4. Wat betekent het als linker- en rechterlimiet verschillend zijn?
5. Leg uit waarom 0/0 geen antwoord is.
6. Is f(x) = x² continu bij x = 3? Leg uit.
7. Leg in woorden uit wat lim x→∞ 1/x = 0 betekent.

## Deel B — Afgeleiden

8. Bereken de afgeleide van x⁴.
9. Bereken de afgeleide van 3x³ − 2x + 7.
10. Bereken f'(2) voor f(x) = x² + 3x.
11. Bereken de afgeleide van x²(x + 1).
12. Bereken de afgeleide van (2x + 1)³.
13. Wat betekent een afgeleide geometrisch?
14. Wat betekent een afgeleide fysisch als f een positie-functie is?
15. Vind de kritieke punten van f(x) = x² − 4x + 1.

## Deel C — Integralen

16. Geef een primitieve van x³.
17. Geef een primitieve van 6x² + 4.
18. Bereken ∫₀² x dx.
19. Bereken ∫₁³ 2x dx.
20. Waarom staat + C bij een onbepaalde integraal?
21. Wat betekent een bepaalde integraal geometrisch?
22. Leg de Hoofdstelling van de Calculus uit in woorden.
23. Als v(t) de snelheid is, wat stelt ∫ₐᵇ v(t) dt voor?

## Deel D — Multivariabele calculus

24. Bereken ∂f/∂x voor f(x, y) = x² + 4xy + y².
25. Bereken ∂f/∂y voor dezelfde functie.
26. Bereken de gradiënt van f(x, y) = x² + y².
27. Wat betekent de gradiënt intuïtief?
28. Wat is het verschil tussen een gewone en een partiële afgeleide?
29. Wat stelt een dubbele integraal intuïtief voor?
30. Waarom zijn partiële afgeleiden nuttig voor functies van meerdere variabelen?

---

# Antwoorden eindtoets

## Deel A

1. 5
2. 1
3. 2
4. De gewone limiet bestaat niet.
5. 0/0 is een onbepaalde vorm.
6. Ja. Polynomiale functies zijn continu.
7. Als x onbeperkt groeit, wordt 1/x willekeurig dicht bij 0.

## Deel B

8. 4x³
9. 9x² − 2
10. 7
11. 3x² + 2x
12. 6(2x + 1)²
13. De helling van de raaklijn.
14. De ogenblikkelijke snelheid.
15. f'(x) = 2x − 4, dus x = 2.

## Deel C

16. x⁴/4 + C
17. 2x³ + 4x + C
18. 2
19. 8
20. Omdat alle primitieve functies van elkaar verschillen door een constante.
21. De getekende oppervlakte tussen grafiek en x-as.
22. Integreren en differentiëren zijn gekoppeld: de integraal van een afgeleide over een interval geeft de totale verandering.
23. De verandering in positie tussen a en b.

## Deel D

24. 2x + 4y
25. 4x + 2y
26. (2x, 2y)
27. De richting van de sterkste lokale toename en de grootte daarvan.
28. Een gewone afgeleide betreft een functie van één variabele; een partiële afgeleide meet verandering in één variabele terwijl de overige variabelen constant blijven.
29. Een continue som over een tweedimensionaal gebied, bijvoorbeeld volume onder een oppervlak.
30. Omdat een functie van meerdere variabelen in verschillende richtingen kan veranderen.

---

# Poort naar Fase 4 — Lineaire Algebra

Fase 2 leerde ons punten in het cartesisch vlak beschrijven. Fase 3 bracht functies van meerdere variabelen en de gradiënt:

**∇f = (∂f/∂x, ∂f/∂y)**

Daarmee ontstaat een nieuwe vraag:

> **Hoe beschrijven en manipuleren we systematisch objecten met meerdere componenten en richtingen?**

Daarvoor hebben we vectoren en matrices nodig.

Fase 4 bouwt dus voort op:

**coördinaten → functies → meerdere variabelen → vectoren**

Daarna volgen vectorruimten, lineaire transformaties, eigenwaarden en eigenvectoren.

---

# Beheersingscheck Fase 3

Je bent klaar voor Fase 4 wanneer je:

- intuïtief begrijpt wat een limiet betekent;
- linker- en rechterlimieten kunt onderscheiden;
- continuïteit kunt uitleggen;
- eenvoudige limieten kunt berekenen;
- begrijpt waarom 0/0 een onbepaalde vorm is;
- de afgeleide kunt interpreteren als lokale veranderingssnelheid;
- de afgeleide kunt interpreteren als helling van een raaklijn;
- basisafgeleiden kunt berekenen;
- somregel, productregel en kettingregel kunt gebruiken;
- eerste en tweede afgeleiden kunt interpreteren;
- eenvoudige optimalisatieproblemen kunt oplossen;
- integralen als accumulatie begrijpt;
- eenvoudige primitieve functies kunt bepalen;
- bepaalde integralen kunt berekenen;
- de Hoofdstelling van de Calculus kunt uitleggen;
- begrijpt waarom snelheid integreren een verandering in positie geeft;
- partiële afgeleiden kunt berekenen;
- de gradiënt op conceptueel niveau begrijpt;
- het idee van dubbele en driedubbele integralen begrijpt;
- de samenhang tussen limieten, afgeleiden en integralen kunt uitleggen.

> **Fase 3 is niet geslaagd wanneer je alleen afgeleiden en integralen volgens recepten kunt berekenen. Fase 3 is geslaagd wanneer je kunt uitleggen wat een limiet, afgeleide en integraal betekenen en wanneer je weet welk concept je in een nieuw probleem nodig hebt.**

---

# Skilltree van Fase 3

```text
                         FUNCTIES
                            │
                            ↓
                     "Wat gebeurt er
                      dichtbij een punt?"
                            │
                            ↓
                         LIMIET
                            │
                 ┌──────────┴──────────┐
                 ↓                     ↓
          CONTINUÏTEIT            DEFINITIE
                                       │
                                       ↓
                                  AFGELEIDE
                                       │
                     ┌─────────────────┼─────────────────┐
                     ↓                 ↓                 ↓
                   Helling       Verandering        Optimalisatie
                     │                 │
                     ↓                 ↓
                  Raaklijn      snelheid → versnelling
                                       │
                                       ↓
                                   INTEGRAAL
                                       │
                         ┌─────────────┴─────────────┐
                         ↓                           ↓
                     Oppervlakte               Accumulatie
                         │                           │
                         └─────────────┬─────────────┘
                                       ↓
                           HOOFDSTELLING CALCULUS
                                       │
                                       ↓
                            MEERDERE VARIABELEN
                                       │
                    ┌──────────────────┴──────────────────┐
                    ↓                                     ↓
             Partiële afgeleiden                    Meervoudige
                    │                                 integralen
                    ↓                                     │
                Gradiënt                                  ↓
                    │                              Volume / massa
                    └──────────────────┬──────────────────┘
                                       ↓
                              ⚙ POORT NAAR
                              LINEAIRE ALGEBRA
```

**Kern van Fase 3:**

**limiet → lokale verandering → afgeleide → accumulatie → integraal → meerdere variabelen**
