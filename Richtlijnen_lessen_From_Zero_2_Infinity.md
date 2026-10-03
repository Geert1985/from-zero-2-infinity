# Richtlijnen voor het uitschrijven van lessen — From Zero 2 Infinity

## 1. Didactisch doel

Elke milestone bouwt **één duidelijk wiskundig idee** op.

De algemene didactische volgorde is:

**concreet voorbeeld → intuïtief begrip → voorstelling/notatie → formele regel → toepassing → transfer**

Basisprincipe:

> **Begrijpen vóór automatiseren.**

Een regel wordt dus niet alleen gegeven. Leg ook uit:
- wat de regel betekent;
- waarom hij werkt;
- wanneer hij gebruikt wordt;
- welke fouten vaak voorkomen.

Formaliseer pas nadat de leerling begrijpt wat er geformaliseerd wordt.

---

## 2. Vaste structuur van een milestone

Gebruik bij voorkeur:

```javascript
{
  id: "3.x",
  title: "Titel van de milestone",
  goal: "Centrale vraag van de milestone?",
  theory: /* html */`
    <h2>Titel van de milestone</h2>

    <p><strong>Wat gaan we ontdekken?</strong></p>
    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ul>

    ...

    <div class="callout">
      <p><strong>Kernidee:</strong></p>
      <p>...</p>
    </div>
  `
}
```

De lengte mag variëren. Niet elke milestone hoeft even lang te zijn.

### Titel

Kort en inhoudelijk.

### Goal

De `goal` is bij voorkeur een **onderzoeksvraag**, geen opsomming van leerdoelen.

---

## 3. "Wat gaan we ontdekken?"

Na de `<h2>` staat:

```html
<p><strong>Wat gaan we ontdekken?</strong></p>
<ul>
  <li>...</li>
</ul>
```

Gebruik meestal **4–8 bullets**.

Dit is een routekaart voor de leerling, geen examenlijst.

---

## 4. Opbouw van de theorie

### 4.1 Aansluiten bij voorkennis

Maak duidelijk hoe de nieuwe les voortbouwt op eerdere leerstof.

### 4.2 Concreet voorbeeld

Begin indien mogelijk met iets voorstelbaars, zoals trein, afstand, temperatuur, oppervlakte, snelheid, geld, geometrische figuur of eenvoudige grafiek.

Het voorbeeld moet een wiskundig idee zichtbaar maken.

### 4.3 Intuïtief begrip

Leg eerst in gewone taal uit wat er gebeurt. Pas daarna komt de formele notatie.

### 4.4 Notatie

Nieuwe symbolen worden expliciet geïntroduceerd. De technische regels voor wiskundige notatie staan uitsluitend in `Richtlijnen_wiskundige_notatie_From_Zero_2_Infinity.md`.

### 4.5 Formele regel

Geef de algemene formule pas nadat de betekenis duidelijk is.

### 4.6 Toepassing

Laat de regel werken in een concreet voorbeeld.

### 4.7 Transfer

Laat zien dat hetzelfde idee in andere contexten voorkomt.

---

## 5. Secties: `<h3>` en `<h4>`

Gebruik `<h3>` voor grote inhoudelijke stappen. Elke `<h3>` behandelt bij voorkeur één duidelijke gedachte.

Vermijd tientallen zeer kleine `<h3>`-secties. Omdat de interface op `<h3>`-secties pagineert, moet iedere sectie voldoende inhoud bevatten.

Gebruik `<h4>` alleen wanneer er werkelijk een tweede inhoudelijk niveau nodig is.

---

## 6. Callouts

Een callout markeert een belangrijk inzicht.

Gebruik onder andere:

- **Kernidee**
- **Belangrijk onderscheid**
- **Vaste werkwijze**
- **Waarschuwing**

```html
<div class="callout">
  <p><strong>Kernidee:</strong></p>
  <p>...</p>
</div>
```

Gebruik callouts spaarzaam. Als alles benadrukt wordt, valt niets meer op.

Technische regels voor verzamelbare inzichten (`inzichtKeys`, store-state enz.) vallen onder `Projectcontext_AI.md`.

---

## 7. Wiskundige notatie

De inhoudelijke en technische regels voor wiskundige notatie, LaTeX, KaTeX, JavaScript-escaping, formuleblokken en inline formules staan uitsluitend in:

`Richtlijnen_wiskundige_notatie_From_Zero_2_Infinity.md`

Deze richtlijnen worden hier niet opnieuw beschreven.

---

## 8. Voorbeelden

Een voorbeeld toont niet alleen het antwoord.

Gebruik bij voorkeur:

**situatie → vraag → formule → invullen → uitwerken → interpretatie**

De interpretatie van het resultaat is belangrijk.

---

## 9. Geen verborgen voorkennis

Nieuwe begrippen worden eerst geïntroduceerd. Gebruik een begrip niet alsof de leerling het al kent wanneer het nog niet is uitgelegd.

---

## 10. Herhaling en overlap

Herhaal eerdere leerstof alleen wanneer dit nodig is voor het nieuwe concept.

Maak expliciet verbinding met eerdere milestones. Vermijd een tweede volledige cursus over hetzelfde onderwerp.

Elke milestone moet een eigen didactische rol hebben.

---

## 11. Figuren

Een figuur moet een wiskundig inzicht toevoegen.

Gebruik:

```html
<div class="theory-image">
  <img
    src="assets/naam.svg"
    alt="Korte beschrijving van wat de leerling moet zien."
  >
</div>
```

Plaats de afbeelding in precies de `<h3>`-sectie waarin ze het inzicht ondersteunt.

Nieuwe didactische figuren zijn bij voorkeur **SVG**. Geen decoratieve afbeeldingen. De `alt`-tekst beschrijft wat de leerling uit de figuur moet leren.

Technische assetregels staan in `Projectcontext_AI.md`.

---

## 12. Widgets

Een widget wordt alleen gebruikt wanneer interactie een wiskundig inzicht toevoegt.

Stel eerst de vraag:

> **Wat leert de leerling door ermee te spelen?**

Als het antwoord alleen "het ziet er leuk uit" is, gebruik geen widget.

Widgets worden via de bestaande widgetarchitectuur en registry toegevoegd. Voeg niet automatisch een widget toe omdat het onderwerp technisch geschikt lijkt.

Technische widgetarchitectuur staat in `Projectcontext_AI.md`.

---

## 13. Lengte en compactheid

Een les mag uitgebreid zijn als het concept dat nodig heeft.

Vermijd echter:
- herhaling van dezelfde uitleg;
- veel korte `<h3>`-secties;
- lange reeksen bijna identieke voorbeelden;
- definities zonder toepassing;
- toepassingen zonder conceptuele uitleg.

De gewenste lijn is:

**uitleg → voorbeeld → betekenis → toepassing**

niet:

**definitie → definitie → definitie → formule → formule → formule**

---

## 14. Veelgemaakte fouten

Benoem belangrijke voorspelbare fouten, vooral bij procedures en begrippen die gemakkelijk verkeerd worden toegepast.

```html
<h3>Veelgemaakte fouten</h3>
<ul>
  <li>
    <strong>...</strong>
    ...
  </li>
</ul>
```

---

## 15. Vaste werkwijze

Wanneer een onderwerp een procedure bevat, eindig dan bij voorkeur met een compacte werkwijze.

```html
<div class="callout">
  <p><strong>Vaste werkwijze:</strong></p>
  <p>stap 1 → stap 2 → stap 3 → controle.</p>
</div>
```

Zo wordt begrip omgezet in zelfstandig handelen.

---

## 16. Afsluiting van een milestone

Eindig bij voorkeur met:

1. terugkoppeling naar het centrale idee;
2. verbinding met eerdere leerstof;
3. brug naar de volgende milestone.

De laatste callout bevat bij voorkeur het kernidee.

---

## 17. Conceptuele ruggengraat

De leerling moet ervaren dat het volgende idee uit het vorige voortkomt. Elke milestone moet vooral zijn eigen stap in de conceptuele keten verklaren.

---

## 18. Controle vóór oplevering

### Inhoud

- [ ] Eén duidelijk centraal idee.
- [ ] Aansluiting op vorige milestone.
- [ ] Duidelijke brug naar volgende milestone.
- [ ] Nieuwe begrippen eerst uitgelegd.
- [ ] Concrete voorbeelden.
- [ ] Minstens één toepassing of transfer.
- [ ] Belangrijke voorspelbare fouten benoemd.

### Didactiek

- [ ] Concreet → intuïtief → formeel.
- [ ] Begrip vóór automatisering.
- [ ] Geen onnodige herhaling.
- [ ] `<h3>`-secties zijn inhoudelijk groot genoeg.
- [ ] Voorkennis wordt gebruikt zonder volledig opnieuw uitgelegd te worden.

### Opmaak

- [ ] `<h2>` aan het begin.
- [ ] "Wat gaan we ontdekken?" aanwezig.
- [ ] Formules volgen `Richtlijnen_wiskundige_notatie_From_Zero_2_Infinity.md`.
- [ ] Callouts correct opgebouwd.
- [ ] Figuren in de juiste `<h3>`.
- [ ] Zinvolle `alt`-tekst.

### Techniek

- [ ] Geen verwijzingen naar niet-bestaande assets.
- [ ] Geen nieuwe widget zonder didactische noodzaak.
- [ ] Geen nieuwe CSS per milestone wanneer bestaande styling volstaat.
- [ ] De uiteindelijke browserweergave is gecontroleerd.

---

## 19. Kernregel

> **De leerling moet niet alleen kunnen reproduceren wat een formule zegt, maar begrijpen welk probleem de formule oplost en waarom die formule precies de juiste beschrijving van dat probleem is.**

Daarom heeft iedere les de beweging:

**ervaring → vraag → inzicht → notatie → regel → toepassing → verbinding**
