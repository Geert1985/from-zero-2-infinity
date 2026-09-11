# Cursus Fase 1 — Rekenkunde & Basisgetallen

**Leerpad:** van nul kennis van getallen tot de poort van algebra  
**Doel van deze fase:** je kunt vlot en zonder twijfel rekenen met natuurlijke, gehele en rationale getallen, je begrijpt de structuur van getallen en je kunt machten, wortels en schattingen gebruiken. Je hebt bovendien gezien waarom de rationale getallen niet voldoende zijn en hoe de reële getallen ontstaan.

**Volgende stap:** Fase 2 — Algebra & Geometrie

---

## Hoe je deze cursus gebruikt

1. Lees de uitleg en probeer de voorbeelden eerst zelf te begrijpen.
2. Werk elk voorbeeld met de hand na, zonder vooruit te kijken.
3. Maak de oefeningen schriftelijk.
4. Controleer met de antwoorden.
5. Als iets fout is: zoek **waar** je redenering knakte, niet alleen welk getal fout was.
6. Ga pas verder wanneer je de kernvaardigheden van de milestone beheerst.
7. Gebruik de eindtoets als echte toets: geen rekenmachine en geen naslagwerk.

**Gereedschap:** papier, potlood en eventueel een zelfgetekende getallenlijn.

**Rekenmachine:** in deze fase alleen gebruiken om een zelfgemaakt antwoord te controleren.

> **Belangrijk:** deze versie gebruikt bewust geen LaTeX-markeringen zoals `\( ... \)` of `$$ ... $$`. Formules worden geschreven met gewone Markdown en Unicode-symbolen, zodat ze ook in eenvoudige Markdown-readers leesbaar blijven.

---

# Overzicht van de vijf milestones

| Milestone | Thema | Belangrijkste unlock |
|---|---|---|
| 1.1 | Getalbegrip en positiestelsel | Natuurlijke getallen |
| 1.2 | De vier hoofdbewerkingen | Rekenwetten |
| 1.3 | Het getallensysteem uitbreiden | Gehele en rationale getallen |
| 1.4 | Getaltheorie en structuur | Priemfactoren, GGD en KGV |
| 1.5 | Machten, wortels en schatten | Machten, wortels en reële getallen |

De vijf milestones vormen geen verzameling losse onderwerpen. Ze vertellen één verhaal:

**Hoeveelheden → getallen → bewerkingen → nieuwe soorten getallen → structuur → machten en wortels → reële getallen → algebra.**

---

# Milestone 1.1 — Getalbegrip en het positiestelsel

**Doel:** begrijpen wat een hoeveelheid is, hoe we die met symbolen vastleggen, hoe het tientallig stelsel werkt en hoe getallen op een getallenlijn geordend worden.

## 1.1.1 Hoeveelheid en aantal

Een verzameling objecten heeft een **aantal**. Dat aantal hangt niet af van wat de objecten zijn.

- Drie appels, drie stenen en drie stoelen hebben allemaal het aantal **drie**.
- Het getal is de abstracte naam waarmee we die hoeveelheid aanduiden.

Wiskunde begint wanneer we de hoeveelheid loskoppelen van de concrete dingen.

We schrijven hoeveelheden met **cijfers**:

**0, 1, 2, 3, 4, 5, 6, 7, 8, 9**

Dit zijn tien symbolen. Met alleen deze tien cijfers kunnen we elk natuurlijk getal schrijven.

Dat is mogelijk door het **positionele talstelsel**.

---

## 1.1.2 Natuurlijke getallen

De natuurlijke getallen zijn de telgetallen.

**ℕ = {0, 1, 2, 3, 4, …}**

In deze cursus nemen we 0 mee in ℕ. Sommige boeken beginnen ℕ bij 1. Dat is een conventie.

Eigenschappen:

- Elk natuurlijk getal heeft een opvolger: na n komt n + 1.
- Er is een kleinste natuurlijk getal: 0.
- Er is geen grootste natuurlijk getal.

### Nieuwe ontdekking

De natuurlijke getallen zijn voldoende om te tellen.

Maar ze zijn nog niet voldoende om alle eenvoudige rekenproblemen op te lossen.

Bijvoorbeeld:

**3 − 5**

heeft geen natuurlijk antwoord.

Dat probleem zal ons naar een groter getallensysteem leiden.

---

## 1.1.3 Het tientallig positiestelsel

De plaats van een cijfer bepaalt zijn waarde.

Voorbeeld:

**134 = 1 × 100 + 3 × 10 + 4 × 1**

Of:

**134 = 1 × 10² + 3 × 10¹ + 4 × 10⁰**

| Positie | Naam | Waarde | Voorbeeld in 4 705 |
|---|---|---:|---:|
| 1e van rechts | eenheden | 10⁰ = 1 | 5 |
| 2e | tientallen | 10¹ = 10 | 0 |
| 3e | honderdtallen | 10² = 100 | 7 |
| 4e | duizendtallen | 10³ = 1 000 | 4 |

### De dubbele rol van nul

Nul heeft minstens twee belangrijke rollen.

**1. Niets**

0 appels betekent: geen appels.

**2. Plaatshouder**

In 405 betekent de 0 dat er geen tientallen zijn.

Zonder die nul zou 405 gemakkelijk met 45 verward kunnen worden.

Voorbeeld:

**2 086 = 2 × 1 000 + 0 × 100 + 8 × 10 + 6 × 1**

De nul is dus geen versiering. Hij bewaart een positie.

---

## 1.1.4 Getallenlijn en ordening

Een getallenlijn geeft de volgorde van getallen weer.

```text
←────|────|────|────|────|────|────→
     0    1    2    3    4    5    6
```

Voor natuurlijke getallen betekent naar rechts:

**groter**

en naar links:

**kleiner**

De belangrijkste vergelijkingssymbolen:

- **a = b** betekent: a en b zijn gelijk.
- **a > b** betekent: a is groter dan b.
- **a < b** betekent: a is kleiner dan b.

Voorbeelden:

- 7 > 3
- 0 < 12
- 15 = 15
- 99 < 100

Als a > b, dan is automatisch b < a.

Voor gewone getallen geldt bovendien precies één van:

**a < b**, **a = b** of **a > b**

---

## Oefeningen 1.1

### A. Positiestelsel

1. Schrijf 572 uit in honderdtallen, tientallen en eenheden.
2. Welk getal is 6 × 1 000 + 0 × 100 + 4 × 10 + 9?
3. Wat verandert er als je in 308 de 0 weglaat?
4. Hoeveel honderdtallen, tientallen en eenheden heeft 1 040?
5. Schrijf 7 305 uit met machten van 10.

### B. Ordening

6. Zet van klein naar groot: 12, 3, 30, 21, 0, 8.
7. Klopt 107 > 98? Leg uit met behulp van posities.
8. Vul in met <, > of =:
   - 45 □ 54
   - 200 □ 199
   - 070 □ 70
9. Welk getal ligt precies tussen 19 en 21?

### C. Begrip

10. Waarom is 0 belangrijk in 405?
11. Waarom kun je met tien cijfers oneindig veel verschillende getallen schrijven?

### Antwoorden 1.1

1. 5 × 100 + 7 × 10 + 2 × 1
2. 6 049
3. Je krijgt 38. De plaats van de 3 verandert.
4. 10 honderdtallen, 4 tientallen en 0 eenheden.
5. 7 × 10³ + 3 × 10² + 0 × 10¹ + 5 × 10⁰
6. 0, 3, 8, 12, 21, 30
7. Ja. 107 heeft een honderdtal; 98 heeft er geen.
8. 45 < 54; 200 > 199; 070 = 70
9. 20
10. De 0 bewaart de tientallenpositie.
11. Omdat de positie van elk cijfer extra informatie geeft. Door steeds nieuwe posities toe te voegen kunnen we grotere getallen schrijven.

---

# Milestone 1.2 — De vier hoofdbewerkingen

**Doel:** optellen, aftrekken, vermenigvuldigen en delen begrijpen en uitvoeren, inclusief rest, rekenwetten en bewerkingsvolgorde.

## 1.2.1 Optellen

Optellen combineert hoeveelheden.

**3 + 5 = 8**

Op de getallenlijn:

- start bij 3;
- beweeg 5 plaatsen naar rechts;
- eindig bij 8.

Belangrijke eigenschap:

**a + 0 = a**

Nul is het **neutrale element** van de optelling.

---

## 1.2.2 Aftrekken

Aftrekken is het omgekeerde van optellen.

**8 − 5 = 3**

want:

**3 + 5 = 8**

Op de getallenlijn beweeg je bij aftrekken naar links.

In ℕ kunnen we voorlopig alleen aftrekken wanneer het resultaat niet negatief wordt.

**8 − 5 = 3**

maar:

**3 − 5**

is geen natuurlijk getal.

In de volgende milestone lossen we dit probleem op door het getallensysteem uit te breiden.

### Controle

Elke aftrekking kun je controleren met een optelling.

Als:

**17 − 9 = 8**

dan moet:

**8 + 9 = 17**

---

## 1.2.3 Vermenigvuldigen

Vermenigvuldigen kan je zien als herhaald optellen.

**4 × 3 = 3 + 3 + 3 + 3 = 12**

Dit betekent: vier groepen van drie.

Belangrijke eigenschappen:

- n × 0 = 0
- n × 1 = n
- n × 10 = 10n

### Tafels

De tafels 1 tot en met 10 horen uiteindelijk in het langetermijngeheugen.

Nuttige ankers:

- 5 × 6 = 30
- 7 × 8 = 56
- 9 × 9 = 81
- 12 × 12 = 144

---

## 1.2.4 Delen en rest

Delen is verdelen in gelijke groepen.

**12 ÷ 3 = 4**

want:

**4 × 3 = 12**

Soms blijft er een rest over.

**7 ÷ 3 = 2 rest 1**

want:

**2 × 3 + 1 = 7**

Algemene vorm:

**a = q × d + r**

waarbij:

- a = deeltal
- d = deler
- q = quotiënt
- r = rest
- 0 ≤ r < d

Voorbeeld:

**23 ÷ 5**

Het grootste veelvoud van 5 dat niet groter is dan 23 is 20.

Dus:

**23 = 4 × 5 + 3**

Het quotiënt is 4 en de rest is 3.

---

## 1.2.5 De fundamentele rekenwetten

Deze regels zijn geen trucjes. Het zijn eigenschappen van de bewerkingen.

### Commutativiteit

De volgorde mag bij optellen en vermenigvuldigen worden verwisseld.

**a + b = b + a**

**a × b = b × a**

Maar niet bij aftrekken en delen:

**7 − 2 ≠ 2 − 7**

**8 ÷ 2 ≠ 2 ÷ 8**

### Associativiteit

De groepering mag bij optellen en vermenigvuldigen veranderen.

**(a + b) + c = a + (b + c)**

**(a × b) × c = a × (b × c)**

Niet bij aftrekken:

**(8 − 3) − 2 = 3**

maar:

**8 − (3 − 2) = 7**

### Distributiviteit

Vermenigvuldiging verdeelt zich over optelling.

**a × (b + c) = a × b + a × c**

Voorbeeld:

**4 × (10 + 3) = 4 × 10 + 4 × 3 = 40 + 12 = 52**

Deze regel is later cruciaal voor algebra:

**4(x + 3) = 4x + 12**

---

## 1.2.6 Bewerkingsvolgorde

Gebruik deze volgorde:

1. Haakjes
2. Machten en wortels
3. Vermenigvuldigen en delen, van links naar rechts
4. Optellen en aftrekken, van links naar rechts

Voorbeelden:

**2 + 3 × 4 = 2 + 12 = 14**

niet 20.

**(2 + 3) × 4 = 5 × 4 = 20**

En:

**20 ÷ 4 × 5 = 5 × 5 = 25**

Delen en vermenigvuldigen zijn gelijkwaardig; je werkt van links naar rechts.

---

## Oefeningen 1.2

### A. Basis

1. 47 + 38
2. 91 − 57
3. 12 × 8
4. 144 ÷ 12
5. 29 ÷ 6: geef quotiënt en rest.
6. Controleer 83 − 47 met een optelling.

### B. Eigenschappen

7. Maak 7 × 19 eenvoudig met distributiviteit.
8. Is 15 − 6 − 3 gelijk aan 15 − (6 − 3)?
9. Welke bewerking is commutatief: a − b of a + b?
10. Gebruik distributiviteit om 19 × 6 uit te rekenen.

### C. Volgorde

11. 3 + 6 × 2 − 4
12. 24 ÷ 3 × 2 + 5
13. 5 × (8 − 3) + 2 × 4
14. 100 − 4 × (6 + 7)
15. 18 − 6 − 4

### D. Begrip

16. Waarom is 20 ÷ 4 × 5 niet hetzelfde als 20 ÷ (4 × 5)?
17. Leg in eigen woorden uit waarom distributiviteit belangrijk wordt in algebra.

### Antwoorden 1.2

1. 85
2. 34
3. 96
4. 12
5. 4 rest 5
6. 36 + 47 = 83
7. 7 × (20 − 1) = 140 − 7 = 133
8. Nee. Links = 6; rechts = 12.
9. a + b
10. 19 × 6 = (20 − 1) × 6 = 120 − 6 = 114
11. 11
12. 21
13. 33
14. 48
15. 8
16. Omdat delen en vermenigvuldigen van links naar rechts worden uitgevoerd.
17. Omdat dezelfde rekenwet met letters blijft gelden: a(b + c) = ab + ac.

---

# Milestone 1.3 — Het getallensysteem uitbreiden

**Doel:** begrijpen waarom nieuwe soorten getallen nodig zijn en leren rekenen met gehele en rationale getallen, decimalen, procenten en verhoudingen.

---

## 1.3.1 Gehele getallen

We hadden een probleem:

**3 − 5**

heeft geen antwoord in ℕ.

Breid daarom de getallenlijn naar links uit.

```text
←────|────|────|────|────|────|────|────→
    -4   -3   -2   -1    0    1    2    3
```

De gehele getallen zijn:

**ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}**

Elk positief getal n heeft een tegengestelde −n:

**n + (−n) = 0**

Voorbeelden uit de werkelijkheid:

- schuld
- temperatuur onder nul
- hoogte onder zeeniveau
- beweging in tegengestelde richting

### Optellen met tekens

Zelfde teken:

**(−3) + (−5) = −8**

Verschillend teken:

**7 + (−3) = 4**

**(−7) + 3 = −4**

Bij verschillende tekens trek je de absolute waarden van elkaar af en behoud je het teken van de grootste absolute waarde.

### Aftrekken

Aftrekken is optellen van het tegenovergestelde:

**a − b = a + (−b)**

Daarom:

**5 − (−3) = 5 + 3 = 8**

"Min min wordt plus" is dus geen magische regel. Het volgt uit de definitie van aftrekken.

### Vermenigvuldigen en delen

Gelijke tekens geven een positief resultaat.

**(−3) × (−4) = 12**

**(−12) ÷ (−3) = 4**

Ongelijke tekens geven een negatief resultaat.

**(−3) × 4 = −12**

**12 ÷ (−3) = −4**

### Waarom is min × min positief?

Dit volgt uit distributiviteit.

Omdat:

**3 × 0 = 0**

en:

**0 = 4 + (−4)**

geldt:

**3 × (4 + (−4)) = 0**

Dus:

**12 + 3 × (−4) = 0**

Daarom:

**3 × (−4) = −12**

Dezelfde soort redenering leidt uiteindelijk tot:

**(−3) × (−4) = 12**

---

## 1.3.2 Breuken en rationale getallen

De gehele getallen zijn nog steeds niet voldoende.

Bijvoorbeeld:

**1 ÷ 2**

is geen geheel getal.

We voeren daarom breuken in.

Een breuk:

**a/b**

met b ≠ 0 betekent:

- a stukken van grootte 1/b, of
- a gedeeld door b.

a heet de **teller** en b de **noemer**.

De rationale getallen zijn:

**ℚ = {a/b | a en b zijn gehele getallen, b ≠ 0}**

We hebben nu:

**ℕ ⊂ ℤ ⊂ ℚ**

Elk natuurlijk getal is dus ook een geheel getal en elk geheel getal kan als rationale breuk worden geschreven.

Voorbeeld:

**5 = 5/1**

### Gelijkwaardige breuken

**1/2 = 2/4 = 3/6**

De schrijfwijze verandert, maar de positie op de getallenlijn niet.

Een gelijkwaardige breuk ontstaat wanneer teller en noemer met hetzelfde niet-nul getal worden vermenigvuldigd of gedeeld.

### Vereenvoudigen

**12/18 = 2/3**

We delen teller en noemer door hun GGD:

**12 ÷ 6 = 2**

**18 ÷ 6 = 3**

---

## 1.3.3 Breuken optellen en aftrekken

Met dezelfde noemer:

**2/7 + 3/7 = 5/7**

Met verschillende noemers moeten we dezelfde onderverdeling maken.

Voorbeeld:

**2/3 + 3/5**

Een gemeenschappelijke noemer is 15.

**2/3 = 10/15**

**3/5 = 9/15**

Dus:

**2/3 + 3/5 = 10/15 + 9/15 = 19/15**

---

## 1.3.4 Breuken vermenigvuldigen

Teller × teller en noemer × noemer:

**2/3 × 5/7 = 10/21**

Je kunt soms eerst kruislings vereenvoudigen.

---

## 1.3.5 Breuken delen

Delen door een breuk betekent vermenigvuldigen met het omgekeerde.

**a/b ÷ c/d = a/b × d/c**

Voorbeeld:

**2/3 ÷ 4/5**

= **2/3 × 5/4**

= **10/12**

= **5/6**

Waarom werkt dit?

Omdat een getal maal zijn omgekeerde 1 geeft:

**4/5 × 5/4 = 1**

Het omgekeerde is dus het getal dat nodig is om de oorspronkelijke breuk tot 1 te maken.

---

## 1.3.6 Gemengde getallen

Een gemengd getal combineert een geheel getal met een breuk.

**2 1/3 = 7/3**

Voor rekenwerk is de onechte breuk meestal het handigst.

---

## 1.3.7 Decimale getallen

Decimalen zijn breuken met een macht van 10 als noemer.

Voorbeelden:

**1/2 = 0,5**

**1/4 = 0,25**

**3/10 = 0,3**

**7/100 = 0,07**

| Plaats na de komma | Naam | Voorbeeld in 3,142 |
|---|---|---:|
| 1e | tienden | 1 |
| 2e | honderdsten | 4 |
| 3e | duizendsten | 2 |

Sommige breuken hebben een eindige decimale vorm:

**1/4 = 0,25**

Andere hebben een oneindig herhalende vorm:

**1/3 = 0,333…**

### Optellen en aftrekken

Zet de komma's onder elkaar.

### Vermenigvuldigen

Vermenigvuldig eerst alsof er geen komma staat en plaats daarna de komma correct.

**1,2 × 0,4 = 12 × 4 = 48 → 0,48**

Er staan in totaal twee cijfers na de komma.

---

## 1.3.8 Procenten

Procent betekent **per honderd**.

**25% = 25/100 = 1/4 = 0,25**

Omrekenen:

- percentage → decimaal: deel door 100
- decimaal → percentage: vermenigvuldig met 100
- p% van n = p/100 × n

Voorbeeld:

**20% van 45 = 0,20 × 45 = 9**

### Veranderingen

40 verhogen met 10%:

**40 × 1,10 = 44**

40 verlagen met 10%:

**40 × 0,90 = 36**

Een stijging van 10% gevolgd door een daling van 10% brengt je dus niet terug naar het begin.

**44 × 0,90 = 39,6**

---

## 1.3.9 Verhoudingen

Een verhouding:

**a : b**

beschrijft dezelfde relatie als:

**a/b**

Voorbeeld:

Een schaal van 1 : 200 betekent dat 1 cm op de kaart overeenkomt met 200 cm in werkelijkheid.

Als:

**2 : 5 = x : 20**

dan:

**2/5 = x/20**

dus:

**x = 8**

---

## Oefeningen 1.3

### A. Gehele getallen

1. (−6) + 11
2. 4 − (−9)
3. (−3) × (−7)
4. (−48) ÷ 6
5. −8 × (4 − 7)
6. Bereken: −12 + 7 − (−4)

### B. Breuken

7. Vereenvoudig 18/24.
8. 2/3 + 3/5
9. 5/6 − 1/4
10. 3/4 × 8/9
11. 5/6 ÷ 2/3
12. Leg uit waarom 1/2 + 1/3 niet gelijk is aan 2/5.

### C. Decimalen, procenten en verhoudingen

13. 1,5 + 0,75
14. 0,6 × 0,05
15. Wat is 20% van 45?
16. Schrijf 0,125 als vereenvoudigde breuk.
17. 3 : 8 = x : 24. Vind x.
18. Een prijs van 80 euro stijgt met 15%. Wat is de nieuwe prijs?

### D. Foutenanalyse

19. Iemand beweert: 30% + 20% = 50% en daarom is een stijging van 30% gevolgd door een stijging van 20% altijd een totale stijging van 50%. Klopt dat? Leg uit.

### Antwoorden 1.3

1. 5
2. 13
3. 21
4. −8
5. 24
6. −1
7. 3/4
8. 19/15
9. 7/12
10. 2/3
11. 5/4
12. Omdat de noemers niet dezelfde eenheid voorstellen. 1/2 + 1/3 = 3/6 + 2/6 = 5/6.
13. 2,25
14. 0,03
15. 9
16. 1/8
17. 9
18. 92 euro
19. Nee. De tweede stijging wordt toegepast op het al verhoogde bedrag. De totale factor is 1,30 × 1,20 = 1,56, dus 56%.

---

# Milestone 1.4 — Getaltheorie en structuur

**Doel:** de interne structuur van natuurlijke getallen begrijpen: even/oneven, deelbaarheid, factoren, priemgetallen, priemfactorisatie, GGD en KGV.

---

## 1.4.1 Even en oneven

Een getal is **even** als het deelbaar is door 2.

Een getal is **oneven** als het bij deling door 2 rest 1 geeft.

Even getallen eindigen op:

**0, 2, 4, 6, 8**

Oneven getallen eindigen op:

**1, 3, 5, 7, 9**

### Somregels

- even + even = even
- oneven + oneven = even
- even + oneven = oneven

Bij een product is één even factor voldoende om het product even te maken.

---

## 1.4.2 Deelbaarheid en factoren

d is een **deler** van n als n ÷ d een geheel getal is.

Voorbeeld:

De delers van 12 zijn:

**1, 2, 3, 4, 6, 12**

Handige deelbaarheidsregels:

| Deler | Regel |
|---|---|
| 2 | laatste cijfer is even |
| 3 | cijfersom is deelbaar door 3 |
| 4 | laatste twee cijfers zijn deelbaar door 4 |
| 5 | laatste cijfer is 0 of 5 |
| 6 | deelbaar door 2 én 3 |
| 9 | cijfersom is deelbaar door 9 |
| 10 | laatste cijfer is 0 |

Voorbeeld: 147

Cijfersom:

**1 + 4 + 7 = 12**

Dus 147 is deelbaar door 3, maar niet door 9.

147 is oneven en dus niet deelbaar door 2.

---

## 1.4.3 Priemgetallen

Een priemgetal is een natuurlijk getal groter dan 1 met precies twee positieve delers:

**1 en zichzelf**

Voorbeelden:

**2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, …**

2 is het enige even priemgetal.

Getallen groter dan 1 die niet priem zijn, heten **samengesteld**.

Voorbeelden:

**4, 6, 8, 9, 10, 12, …**

1 is noch priem, noch samengesteld.

### Zeef van Eratosthenes

Een eenvoudige manier om priemgetallen te vinden:

1. Schrijf de getallen vanaf 2 op.
2. Neem het eerste nog niet doorgestreepte getal.
3. Het is priem.
4. Streep alle veelvouden ervan weg.
5. Herhaal.

Dit is de **zeef van Eratosthenes**.

---

## 1.4.4 Hoofdstelling van de rekenkunde

Elk natuurlijk getal groter dan 1 kan op precies één manier als product van priemgetallen worden geschreven, afgezien van de volgorde.

Voorbeeld:

**60 = 2 × 2 × 3 × 5**

of:

**60 = 2² × 3 × 5**

Andere voorbeelden:

**12 = 2² × 3**

**100 = 2² × 5²**

**17 = 17**

Priemfactorisatie is als een soort "DNA-analyse" van een natuurlijk getal.

---

## 1.4.5 GGD en KGV

**GGD** = grootste gemene deler.

De GGD van a en b is het grootste natuurlijke getal dat beide getallen deelt.

**KGV** = kleinste gemene veelvoud.

Het KGV is het kleinste positieve getal dat een veelvoud is van beide getallen.

### Via priemfactoren

Voor de GGD neem je van gemeenschappelijke priemfactoren de **laagste exponent**.

Voor het KGV neem je van alle aanwezige priemfactoren de **hoogste exponent**.

Voorbeeld:

**12 = 2² × 3**

**18 = 2 × 3²**

Dus:

**GGD(12, 18) = 2 × 3 = 6**

**KGV(12, 18) = 2² × 3² = 36**

Voor positieve gehele getallen geldt:

**GGD(a, b) × KGV(a, b) = a × b**

Controle:

**6 × 36 = 216**

en:

**12 × 18 = 216**

---

## 1.4.6 Algoritme van Euclides

Voor grote getallen is herhaald delen efficiënter dan alle factoren opsommen.

Voorbeeld:

GGD(48, 18)

**48 = 2 × 18 + 12**

**18 = 1 × 12 + 6**

**12 = 2 × 6 + 0**

De laatste niet-nul rest is 6.

Dus:

**GGD(48, 18) = 6**

Het onderliggende principe is:

**GGD(a, b) = GGD(b, rest van a ÷ b)**

---

## Oefeningen 1.4

1. Is 91 priem? Zo niet, ontbind.
2. Geef de priemfactorisatie van 60.
3. Geef de priemfactorisatie van 84.
4. Bereken GGD(24, 36) en KGV(24, 36).
5. Vereenvoudig 42/56 via de GGD.
6. Welke positieve delers heeft 45?
7. Is 234 deelbaar door 3, 9 en 2?
8. Bereken GGD(105, 28) met Euclides.
9. Waarom is 1 geen priemgetal?
10. Gebruik priemfactorisatie om GGD(72, 90) te bepalen.
11. Gebruik priemfactorisatie om KGV(72, 90) te bepalen.
12. Waarom is priemfactorisatie nuttig bij breuken?

### Antwoorden 1.4

1. Nee. 91 = 7 × 13.
2. 2² × 3 × 5.
3. 2² × 3 × 7.
4. GGD = 12; KGV = 72.
5. 3/4.
6. 1, 3, 5, 9, 15, 45.
7. Cijfersom = 9, dus deelbaar door 3 en 9. Het getal is even, dus deelbaar door 2.
8. GGD = 7.
9. Een priemgetal moet precies twee positieve delers hebben. 1 heeft er maar één.
10. 72 = 2³ × 3²; 90 = 2 × 3² × 5. Dus GGD = 2 × 3² = 18.
11. KGV = 2³ × 3² × 5 = 360.
12. De GGD van teller en noemer geeft direct een manier om een breuk te vereenvoudigen.

---

# Milestone 1.5 — Machten, wortels, schatten en de reële getallen

**Doel:** herhaald vermenigvuldigen compact schrijven, machtswetten gebruiken, wortels begrijpen, schatten en ontdekken waarom ℚ niet het einde van het getallensysteem is.

---

## 1.5.1 Machten

Een macht is herhaald vermenigvuldigen.

**aⁿ = a × a × … × a**

waarbij a n keer voorkomt.

a is het **grondtal** en n de **exponent**.

Voorbeelden:

**3⁴ = 3 × 3 × 3 × 3 = 81**

**2³ = 8**

**5² = 25**

**10³ = 1 000**

### Speciale gevallen

**a¹ = a**

**a⁰ = 1** voor a ≠ 0

**0ⁿ = 0** voor n > 0

In deze fase laten we **0⁰ ongedefinieerd**.

---

## 1.5.2 Waarom is a⁰ = 1?

Kijk naar de rij:

**2³ = 8**

**2² = 4**

**2¹ = 2**

Elke stap naar beneden deelt door 2:

**2⁰ = 1**

Dit is ook nodig om de machtswetten consistent te houden.

Omdat:

**a³ ÷ a³ = 1**

en volgens de machtsregel:

**a³ ÷ a³ = a³⁻³ = a⁰**

moet gelden:

**a⁰ = 1**

voor a ≠ 0.

---

## 1.5.3 Rekenregels voor machten

Bij hetzelfde grondtal:

**aᵐ × aⁿ = aᵐ⁺ⁿ**

**aᵐ ÷ aⁿ = aᵐ⁻ⁿ**

**(aᵐ)ⁿ = aᵐⁿ**

Bij een product in het grondtal:

**(ab)ⁿ = aⁿbⁿ**

Bij een breuk:

**(a/b)ⁿ = aⁿ/bⁿ**

### Voorbeelden

**2³ × 2⁴ = 2⁷ = 128**

**(2³)² = 2⁶ = 64**

**(2 × 5)² = 2² × 5² = 100**

Let op:

**2³ × 5³ = (2 × 5)³ = 10³**

maar:

**2³ × 5²**

kan niet tot één macht worden samengevoegd met deze regel.

---

## 1.5.4 Machten van 10

**10⁰ = 1**

**10¹ = 10**

**10² = 100**

**10³ = 1 000**

**10⁶ = 1 000 000**

Een exponent vertelt hoeveel factoren 10 er zijn.

---

## 1.5.5 Wetenschappelijke notatie

Wetenschappelijke notatie heeft de vorm:

**a × 10ⁿ**

waarbij:

**1 ≤ |a| < 10**

Voorbeelden:

**4 500 = 4,5 × 10³**

**0,0032 = 3,2 × 10⁻³**

Dit is later bijzonder nuttig in natuurkunde en scheikunde.

---

## 1.5.6 Wortels

De vierkantswortel √n is het niet-negatieve getal waarvan het kwadraat n is.

Voorbeeld:

**√25 = 5**

want:

**5² = 25**

Verder:

**√0 = 0**

**√1 = 1**

**√144 = 12**

Volkomen kwadraten zijn bijvoorbeeld:

**1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, …**

Ook derde machtswortels bestaan:

**∛8 = 2**

want:

**2³ = 8**

### Wortelregels

Voor niet-negatieve a en b:

**√(ab) = √a × √b**

Voor a ≥ 0 en b > 0:

**√(a/b) = √a / √b**

Maar:

**√(a + b) ≠ √a + √b**

Tegenvoorbeeld:

**√(9 + 16) = √25 = 5**

maar:

**√9 + √16 = 3 + 4 = 7**

---

# 1.5.7 De ontdekking van irrationale getallen

Tot nu toe hebben we:

**ℕ ⊂ ℤ ⊂ ℚ**

Maar zijn de rationale getallen voldoende voor elke wortel?

Bekijk:

**√2**

We weten:

**1² = 1**

en:

**2² = 4**

dus:

**1 < √2 < 2**

Met decimalen vinden we:

**√2 ≈ 1,4**

**√2 ≈ 1,41**

**√2 ≈ 1,414**

**√2 ≈ 1,4142**

Maar √2 kan niet als een breuk van twee gehele getallen worden geschreven.

Dus:

**√2 ∉ ℚ**

√2 is een **irrationaal getal**.

### Waarom is dit belangrijk?

We hebben een nieuwe ontdekking gedaan:

> De rationale getallen vormen niet de volledige getallenlijn.

We hebben een groter getallensysteem nodig: de **reële getallen**.

We schrijven:

**ℝ = de verzameling van alle reële getallen**

Daarin zitten zowel rationale als irrationale getallen.

De structuur is:

**ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ**

Voorbeelden:

- 5 ∈ ℕ
- −3 ∈ ℤ
- 2/7 ∈ ℚ
- √2 ∈ ℝ maar √2 ∉ ℚ

De reële getallen vormen de getallenlijn die we in latere fases voortdurend zullen gebruiken.

---

## 1.5.8 Afronden en schatten

Afronden:

- kijk naar het volgende cijfer;
- 0, 1, 2, 3, 4 → laat het vorige cijfer staan;
- 5, 6, 7, 8, 9 → verhoog het vorige cijfer met 1.

Voorbeeld:

**3,14159** afgerond op twee decimalen = **3,14**

**2,75** afgerond op één decimaal = **2,8**

### Schatten

Schatten betekent dat je vóór het exacte rekenen bepaalt in welke buurt het antwoord hoort.

Voorbeeld:

**19 × 21**

Schat:

**20 × 20 = 400**

Exact:

**19 × 21 = 399**

De schatting helpt een fout zoals 4 000 onmiddellijk te herkennen.

### Orde van grootte

Bijvoorbeeld:

**4 872 × 32**

ongeveer:

**5 × 10³ × 3 × 10¹**

= **15 × 10⁴**

= **1,5 × 10⁵**

= **150 000**

Het exacte antwoord is 155 904, dus de schatting zit in de juiste grootteorde.

Schatten is een **alarmbel**, geen vervanging voor exact rekenen.

---

## Oefeningen 1.5

1. 5³
2. 2⁵ × 2³
3. (3²)³
4. 10⁴
5. Schrijf 63 000 in wetenschappelijke notatie.
6. √81
7. 2³ × √16
8. √(4 × 36)
9. Rond 7,458 af op twee decimalen en op één decimaal.
10. Schat 48 × 21 en bereken daarna exact.
11. Vul aan: 2³, 2², 2¹, 2⁰, 2⁻¹. Wat moet 2⁻¹ zijn om het patroon voort te zetten?
12. Leg uit waarom √(9 + 16) niet gelijk is aan √9 + √16.
13. Tussen welke twee gehele getallen ligt √20?
14. Is √49 rationaal? Waarom?
15. Is √2 rationaal? Wat betekent dat voor de verzameling ℚ?

### Antwoorden 1.5

1. 125
2. 2⁸ = 256
3. 3⁶ = 729
4. 10 000
5. 6,3 × 10⁴
6. 9
7. 32
8. 12
9. 7,46 en 7,5
10. Schatting ≈ 1 000; exact = 1 008
11. 2⁻¹ = 1/2. De machten worden telkens door 2 gedeeld.
12. Links = 5; rechts = 7. De wortel verdeelt zich niet over een optelling.
13. 4 < √20 < 5, want 4² < 20 < 5².
14. Ja. √49 = 7 en 7 is rationaal.
15. Nee. √2 kan niet als verhouding van twee gehele getallen worden geschreven. ℚ bevat dus niet alle reële getallen.

---

# De grote structuur van Fase 1

Aan het einde van Fase 1 moet je niet alleen afzonderlijke regels kennen. Je moet de ontwikkeling van het getallensysteem kunnen volgen.

```text
Natuurlijke getallen
ℕ
│
│  3 − 5 heeft geen antwoord in ℕ
↓
Gehele getallen
ℤ
│
│  1 ÷ 2 heeft geen antwoord in ℤ
↓
Rationale getallen
ℚ
│
│  √2 heeft geen antwoord in ℚ
↓
Reële getallen
ℝ
```

Dit is één van de belangrijkste ideeën uit deze fase:

> **Wanneer een bestaand getallensysteem een probleem niet kan oplossen, breiden we het systeem uit.**

Die gedachte komt later opnieuw terug.

---

# Eindtoets Fase 1

## Instructies

Maak de toets zonder:

- rekenmachine;
- cursus;
- antwoorden;
- hulp van iemand anders.

Neem de tijd om niet alleen correcte antwoorden te geven, maar ook helder te redeneren.

**Aanbevolen beheersingsniveau:** minstens 80% correct én geen fundamentele begripsfouten.

---

## Deel A — Rekenen

1. 738 + 496
2. 1 002 − 587
3. 37 × 24
4. 157 ÷ 12. Geef quotiënt en rest.
5. 3 + 7 × 4 − 5
6. 18 ÷ 3 × 4 + 2

---

## Deel B — Gehele en rationale getallen

7. −8 × (4 − 7)
8. −15 + 8 − (−6)
9. 2/3 + 3/5
10. 5/6 − 1/4
11. 3/4 × 8/9
12. 3/8 ÷ 9/4
13. Schrijf 0,375 als vereenvoudigde breuk.
14. Wat is 17,5% van 80?

---

## Deel C — Getaltheorie

15. Ontbind 60 in priemfactoren.
16. Bereken GGD(48, 18).
17. Bereken KGV(48, 18).
18. Is 97 priem? Leg uit hoe je dat weet.
19. Geef alle positieve delers van 36.

---

## Deel D — Machten en wortels

20. 2³ × 2⁴
21. (3²)³
22. 4 500 in wetenschappelijke notatie.
23. √144
24. Waarom is (3 + 4)² niet gelijk aan 3² + 4²?
25. Tussen welke gehele getallen ligt √30?

---

## Deel E — Begrip en redeneren

26. Waarom is 0 geen priemgetal?
27. Waarom is delen door 0 niet gedefinieerd?
28. Waarom is 1/2 = 2/4?
29. Waarom is √2 geen rationaal getal?
30. Leg uit hoe de distributieve eigenschap later in algebra wordt gebruikt.

---

# Antwoorden eindtoets

## Deel A

1. 1 234
2. 415
3. 888
4. 13 rest 1
5. 26
6. 26

## Deel B

7. 24
8. −1
9. 19/15
10. 7/12
11. 2/3
12. 1/6
13. 3/8
14. 14

## Deel C

15. 2² × 3 × 5
16. 6
17. 144
18. Ja. Je hoeft alleen priemdelers tot en met √97 te controleren. Geen daarvan deelt 97.
19. 1, 2, 3, 4, 6, 9, 12, 18, 36

## Deel D

20. 2⁷ = 128
21. 3⁶ = 729
22. 4,5 × 10³
23. 12
24. 3² + 4² = 25, terwijl (3 + 4)² = 49. In het algemeen geldt: (a + b)² = a² + 2ab + b².
25. 5 < √30 < 6

## Deel E

26. 0 heeft niet precies twee positieve delers; bovendien is de priemgetaldefinitie alleen voor natuurlijke getallen groter dan 1.
27. Als a/0 = b zou bestaan, dan zou 0 × b = a moeten gelden. Maar 0 × b = 0. Voor a ≠ 0 is dat onmogelijk.
28. Omdat teller en noemer van 1/2 met hetzelfde niet-nul getal zijn vermenigvuldigd: 1 × 2 / (2 × 2) = 2/4.
29. √2 kan niet worden geschreven als verhouding van twee gehele getallen. Daarom is √2 irrationaal.
30. Dezelfde rekenwet werkt met letters: a(b + c) = ab + ac. Bijvoorbeeld x(x + 3) = x² + 3x.

---

# Poort naar Fase 2 — Algebra

Je hebt in Fase 1 voortdurend met concrete getallen gewerkt.

Nu verandert één ding:

**getallen kunnen door letters worden vervangen.**

De rekenwetten veranderen niet.

Je kent:

**3(4 + 5) = 3 × 4 + 3 × 5**

Nu vervangen we 4 door x:

**3(x + 5) = 3x + 15**

En uiteindelijk vervangen we ook 3:

**a(x + 5) = ax + 5a**

Dezelfde wet blijft gelden.

> **Algebra is geen nieuwe rekenkunde. Het is rekenkunde waarbij sommige getallen nog onbekend of algemeen zijn.**

Dat is de poort naar Fase 2.

---

# Beheersingscheck

Je bent klaar voor Fase 2 wanneer je:

- het positiestelsel zonder moeite kunt gebruiken;
- de vier hoofdbewerkingen beheerst;
- de rekenwetten begrijpt;
- de bewerkingsvolgorde correct toepast;
- met positieve en negatieve gehele getallen kunt rekenen;
- breuken kunt vereenvoudigen en bewerken;
- decimalen, procenten en verhoudingen kunt omrekenen;
- priemfactorisaties kunt maken;
- GGD en KGV kunt bepalen;
- machten en wortels kunt gebruiken;
- antwoorden kunt schatten en controleren;
- het onderscheid tussen ℕ, ℤ, ℚ en ℝ kunt uitleggen;
- kunt uitleggen waarom √2 niet rationaal is;
- de distributieve eigenschap kunt herkennen als basis voor algebra.

Als één van deze onderdelen nog onzeker is, herhaal dan de betreffende milestone en maak nieuwe oefeningen.

**Fase 1 is niet geslaagd wanneer je alleen de regels kunt reproduceren. Fase 1 is geslaagd wanneer je de regels kunt gebruiken, verklaren en herkennen in een nieuw probleem.**
