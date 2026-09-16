/* Didactische correcties Fase 1 — laden ná fase1.js */
(function () {
  if (typeof MILESTONES_1 === "undefined") return;
  const goals = {
    "1.1": "Onderscheid cijfer en getal, gebruik het tientallig positiestelsel en orden natuurlijke getallen.",
    "1.2": "Voer de vier hoofdbewerkingen in ℕ uit en gebruik volgorde, rest en de rekenwetten.",
    "1.3": "Breid ℕ uit tot ℤ: tegenovergestelde, absolute waarde en rekenen met tekens.",
    "1.4": "Zie een breuk als getal op de lijn en reken met gelijkwaardige, vereenvoudigde en gemengde breuken.",
    "1.5": "Zet breuk, decimaal en percentage in elkaar om en reken met procentuele verandering.",
    "1.6": "Vereenvoudig verhoudingen en reken met recht evenredige verbanden, schaal en recepten.",
    "1.7": "Vind delers en veelvouden en herken deelbaarheid met de regels voor 2, 3, 4, 5, 6, 9, 10 en 12.",
    "1.8": "Herken priemgetallen en ontbind een getal eenduidig in priemfactoren.",
    "1.9": "Bereken GGD en KGV, ook met het algoritme van Euclides, en gebruik ze bij breuken.",
    "1.10": "Lees en bereken machten met gehele niet-negatieve exponent, inclusief de rekenregels voor hetzelfde grondtal.",
    "1.11": "Gebruik de (niet-negatieve) vierkantswortel als omgekeerde van kwadrateren en vereenvoudig eenvoudige wortels.",
    "1.12": "Onderscheid rationaal en irrationaal en plaats ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ op de getallenlijn.",
    "1.13": "Rond doelgericht af, schat een uitkomst en schrijf grote en kleine getallen in wetenschappelijke notatie."
  };
  const road12 = '<div class="callout"><strong>In deze les.</strong> Eerst de vier bewerkingen zelf (inclusief schriftelijk rekenen en rest), daarna de rekenwetten en de volgorde. Het is een lange les: behandel de bewerkingen en de wetten als twee stappen.</div>';
  const road14 = '<div class="callout"><strong>In deze les.</strong> Eerst wat een breuk <em>is</em> (deel van een geheel én punt op de lijn), daarna rekenen: gelijkwaardig maken, +/−, × en ÷, tot slot gemengde getallen.</div>';
  const primeOldStart = "<h3>15. Priemgetallen en samengestelde getallen</h3>";
  const primeNew = '<h3>15. Van delers naar de volgende les</h3><p>Sommige getallen hebben heel weinig delers, andere juist veel. Hoe we getallen met precies twee positieve delers noemen — en hoe we een getal volledig ontbinden — volgt in <strong>1.8 Priemgetallen en factorisatie</strong>.</p><div class="callout"><strong>Vooruitblik.</strong> De deelbaarheidregels uit deze les zijn het gereedschap voor priemfactoren. Die behandelen we bewust pas in de volgende milestone.</div><h3>16. Delers in een ander jasje</h3><p>Hetzelfde idee keert terug bij breuken: een gemeenschappelijke deler van teller en noemer maakt een breuk eenvoudiger. Dat oefenen we hieronder; de systematische GGD volgt in 1.9.</p>';
  MILESTONES_1.forEach(function (m) {
    if (goals[m.id]) m.goal = goals[m.id];
    if (typeof m.theory !== "string") return;
    if (m.id === "1.2" && m.theory.indexOf("In deze les.") === -1) {
      m.theory = m.theory.replace("</ul>", "</ul>" + road12);
    }
    if (m.id === "1.4" && m.theory.indexOf("In deze les.") === -1) {
      m.theory = m.theory.replace("</ul>", "</ul>" + road14);
      m.theory = m.theory.replace("<h3>Hoe maak je een gelijkwaardige breuk?</h3>", "<h4>Hoe maak je een gelijkwaardige breuk?</h4>");
    }
    if (m.id === "1.3") {
      m.theory = m.theory.replace("<h3>7. Tegenovergestelde getallen</h3>", "<h3>6. Tegenovergestelde getallen</h3>");
    }
    if (m.id === "1.5") {
      m.theory = m.theory.replace("<h3>2. Decimalen en breuken</h3>", "<h3>3. Decimalen en breuken</h3>");
      for (var n = 18; n >= 3; n--) {
        if (n === 3) continue;
        m.theory = m.theory.replace("<h3>" + n + ". ", "<h3>" + (n + 1) + ". ");
      }
      m.theory = m.theory.replace("<h3>3. Eindige", "<h3>4. Eindige");
    }
    if (m.id === "1.7" && m.theory.indexOf(primeOldStart) !== -1) {
      var i = m.theory.indexOf(primeOldStart);
      var j = m.theory.indexOf("<h3>17. Delers gebruiken bij vereenvoudigen</h3>");
      if (i !== -1 && j !== -1) m.theory = m.theory.slice(0, i) + primeNew + m.theory.slice(j);
      m.theory = m.theory.replace(
        "<li>Een priemgetal groter dan 1 heeft precies twee positieve delers: 1 en zichzelf.</li>",
        "<li>Priemgetallen en ontbinden in factoren volgen in 1.8.</li>"
      );
    }
    if (m.id === "1.10") {
      m.theory = m.theory.replace(
        '<div class="callout"><strong>Onthoud:De exponent vertelt hoeveel keer het grondtal als factor voorkomt.</div>',
        '<h3>2. Grondtal en exponent</h3><div class="callout"><strong>Onthoud:</strong> de exponent vertelt hoeveel keer het grondtal als factor voorkomt.</div>'
      );
      if (m.theory.indexOf("a^0 = 1") === -1) {
        m.theory = m.theory.replace(
          "<h3>13. Samenvatting</h3>",
          '<div class="callout insight"><strong>Inzicht.</strong> Een macht is een korte schrijfwijze voor herhaald vermenigvuldigen. Daarom is <span class="formula-inline">a^0 = 1</span> (voor a ≠ 0) een afspraak die de rekenregels consistent houdt.</div><h3>13. Samenvatting</h3>'
        );
      }
    }
    if (m.id === "1.11" && m.theory.indexOf("Worteltrekken is terugrekenen") === -1) {
      m.theory = m.theory.replace(
        "<li>√36 is 6, niet 18.</li>",
        '</ul><div class="callout insight"><strong>Inzicht.</strong> Worteltrekken is terugrekenen uit een kwadraat, niet “halveren”. <span class="formula-inline">√(a+b)</span> is in het algemeen niet <span class="formula-inline">√a + √b</span>.</div><ul><li>√36 is 6, niet 18.</li>'
      );
    }
    if (m.id === "1.12" && m.theory.indexOf("exact punt op de lijn") === -1) {
      m.theory = m.theory.replace(
        "<li><strong>Fout:</strong> denken dat irrationale getallen niet op de getallenlijn passen. <strong>Correct:</strong> ze zijn reële getallen en hebben dus een plaats op de getallenlijn.</li>",
        '<li><strong>Fout:</strong> denken dat irrationale getallen niet op de getallenlijn passen. <strong>Correct:</strong> ze zijn reële getallen en hebben dus een plaats op de getallenlijn.</li></ul><div class="callout insight"><strong>Inzicht.</strong> <span class="formula-inline">√2</span> is een exact punt op de lijn. Elke decimale schrijfwijze ervan is een benadering. Een oneindige decimaal die wél herhaalt, zoals 0,333…, is wél rationaal.</div><ul hidden></ul>'
      );
    }
  });
})();
