/* Challenge worlds and missions. Kept separate from the milestone-test engine. */
const WORLDS_1 = {
  "1.1": { name: "Vallei van de Getallen", blurb: "Sensoren, plaatsen en de eerste telling." },
  "1.2": { name: "De Werkplaats", blurb: "Generatoren, muren en ontbrekende onderdelen." },
  "1.3": { name: "De Handelsstad", blurb: "Voorraden, breuken van ladingen, tekens op de schaal." },
  "1.4": { name: "Bibliotheek van Patronen", blurb: "Sloten die alleen openen voor de juiste structuur." },
  "1.5": { name: "Toren van de Reële Getallen", blurb: "Schalen, wortels en de lift naar hogere verdiepingen." }
};

const CHALLENGES_1 = {
  "1.1": [
    { id:"c11-1", type:"target", concept:"getallenlijn", effect:"door", title:"De eerste sensor", scene:"Een sensor in de vallei moet op een natuurlijke plaats staan. Geen minteken, geen komma.", prompt:"Zet de sensor op 7.", min:0, max:20, step:1, target:7, tol:0.01, hint:"Zeven stappen vanaf 0 naar rechts." },
    { id:"c11-2", type:"input", concept:"plaatswaarde", effect:"mech", title:"Het stenen register", scene:"Op een zuil staat 6 204. Alleen de juiste plaatswaarde activeert de poort.", prompt:"Wat is de plaatswaarde van de 6?", accept:["6000","6 000","6.000"], hint:"De 6 staat bij de duizendtallen." },
    { id:"c11-3", type:"input", concept:"positiestelsel", effect:"bridge", title:"De brugcode", scene:"De brug bouwt zich als je de code 3×10³ + 0×10² + 2×10¹ + 8×10⁰ omzet.", prompt:"Welk getal is dat?", accept:["3028"], hint:"3 duizend, geen honderd, 2 tientallen, 8 eenheden." },
    { id:"c11-4", type:"choice", concept:"vergelijken", effect:"door", title:"Welke zuil is hoger?", scene:"Twee zuilen: 2 005 en 1 999. Alleen de grotere opent het pad.", prompt:"Welke is groter?", choices:["2005","1999","even groot"], accept:["2005"], hint:"Meer duizendtallen wint." },
    { id:"c11-5", type:"input", concept:"afronden", effect:"energy", title:"Afronden van de voorraad", scene:"De voorraad 1 249 moet op honderdtallen naar het magazijn.", prompt:"Rond af op het dichtstbijzijnde honderdtal.", accept:["1200","1 200"], hint:"49 is minder dan 50, dus naar beneden." },
    { id:"c11-6", type:"input", concept:"afstand", effect:"bridge", title:"Stappen op het pad", scene:"Tussen markering 14 en 20 moet een loopbrug evenveel schakels hebben als stappen.", prompt:"Hoeveel stappen liggen er tussen 14 en 20?", accept:["6"], hint:"20 − 14." }
  ],
  "1.2": [
    { id:"c12-1", type:"machine", concept:"optellen", effect:"energy", title:"Twee generatoren", scene:"Generator A levert 738. Generator B levert 496. Het net moet de som ontvangen.", prompt:"Hoeveel energie is beschikbaar?", accept:["1234","1 234"], hint:"738 + 496." },
    { id:"c12-2", type:"machine", concept:"aftrekken", effect:"energy", title:"Lek in de leiding", scene:"Er was 1002 eenheden. 587 lekte weg. De machine start alleen met de rest.", prompt:"Hoeveel blijft over?", accept:["415"], hint:"1002 − 587." },
    { id:"c12-3", type:"build", concept:"vermenigvuldigen", effect:"wall", title:"De werkplaatsmuur", scene:"37 rijen van 24 stenen. Voer het juiste aantal in; de muur verschijnt.", prompt:"Hoeveel stenen zijn nodig?", accept:["888"], hint:"37 × 24." },
    { id:"c12-4", type:"input", concept:"delen", effect:"mech", title:"Verdelen van tandwielen", scene:"157 tandwielen in dozen van 12. Het slot vraagt quotiënt en rest.", prompt:"157 ÷ 12. Schrijf als: 13 rest 1", accept:["13 rest 1","13 r 1","13r1"], hint:"12×13 = 156, rest 1." },
    { id:"c12-5", type:"machine", concept:"ontbreken", effect:"energy", title:"Ontbrekende energie", scene:"De machine heeft 120 nodig. Er zijn 37 aanwezig.", prompt:"Hoeveel ontbreken?", accept:["83"], hint:"120 − 37." },
    { id:"c12-6", type:"input", concept:"controle", effect:"door", title:"Controle van de deling", scene:"Iemand beweert: 157 = 13×12 + 1. Bevestig het product dat de poort sluit.", prompt:"Wat is 13×12+1?", accept:["157"], hint:"Eerst 13×12, dan +1." }
  ],
  "1.3": [
    { id:"c13-1", type:"target", concept:"gehele-getallenlijn", effect:"door", title:"De weegschaal", scene:"In de handelsstad moet een gewicht op −3.", prompt:"Zet de marker op −3.", min:-10, max:10, step:1, target:-3, tol:0.01, hint:"Drie stappen links van 0." },
    { id:"c13-2", type:"input", concept:"tekens", effect:"mech", title:"Koelcircuit", scene:"Temperatuurverschil: −8 × (4 − 7). Alleen de juiste waarde start de pomp.", prompt:"Bereken −8 × (4 − 7).", accept:["24"], hint:"Eerst 4−7 = −3, daarna −8×−3." },
    { id:"c13-3", type:"input", concept:"absoluut", effect:"energy", title:"Afstand tot evenwicht", scene:"Een wijzer staat op −9. De stad telt alleen de afstand tot 0.", prompt:"Wat is |−9|?", accept:["9"], hint:"Absolute waarde is de afstand tot 0." },
    { id:"c13-4", type:"input", concept:"breuken", effect:"bridge", title:"Twee ladingen", scene:"Een kar is 1/2 vol, een tweede voegt 1/3 toe. De brug eist de totale vulling.", prompt:"Bereken 1/2 + 1/3.", accept:["5/6"], hint:"Noemers 6: 3/6 + 2/6." },
    { id:"c13-5", type:"input", concept:"procent", effect:"energy", title:"Belasting op de markt", scene:"17,5% van 80 munten gaat naar het stadsnet.", prompt:"Hoeveel is 17,5% van 80?", accept:["14"], hint:"10% is 8, 5% is 4, 2,5% is 2." },
    { id:"c13-6", type:"input", concept:"decimaal", effect:"door", title:"De decimale sleutel", scene:"Het slot accepteert 0,375 als vereenvoudigde breuk.", prompt:"Schrijf 0,375 als vereenvoudigde breuk.", accept:["3/8"], hint:"375/1000 vereenvoudigen." }
  ],
  "1.4": [
    { id:"c14-1", type:"choice", concept:"priem", effect:"door", title:"De priempoort", scene:"Alleen een priemgetal opent de bibliotheekdeur. Staat 97 op de steen?", prompt:"Is 97 priem?", choices:["ja","nee"], accept:["ja"], hint:"Geen delers behalve 1 en zichzelf." },
    { id:"c14-2", type:"input", concept:"factorisatie", effect:"mech", title:"Het factorenslot", scene:"Het slot ontbindt 90. Alleen de priemfactoren klikken.", prompt:"Ontbind 90 in priemfactoren.", accept:["2×3²×5","2*3^2*5","2×3×3×5","2*3*3*5"], hint:"90 = 2×45 = 2×3×15 = 2×3×3×5." },
    { id:"c14-3", type:"input", concept:"ggd", effect:"bridge", title:"Gemeenschappelijke balk", scene:"Twee planklengtes 48 en 18. De verbindende balk is de GGD.", prompt:"GGD(48, 18)", accept:["6"], hint:"18=2×3², 48=2⁴×3, gemeenschappelijk 2×3." },
    { id:"c14-4", type:"input", concept:"kgv", effect:"wall", title:"Gelijke cyclus", scene:"Twee raderen 48 en 18 tanden. Ze vallen samen na het KGV aantal stappen.", prompt:"KGV(48, 18)", accept:["144"], hint:"KGV = product / GGD = 864 / 6." },
    { id:"c14-5", type:"choice", concept:"deelbaarheid", effect:"door", title:"De deelbaarheidsregel", scene:"Een kist opent als 126 deelbaar is door 9.", prompt:"Is 126 deelbaar door 9?", choices:["ja","nee"], accept:["ja"], hint:"1+2+6=9, deelbaar door 9." },
    { id:"c14-6", type:"input", concept:"veelvoud", effect:"energy", title:"Evenwicht van veelvouden", scene:"Het kleinste gemeenschappelijke veelvoud van 6 en 8 voedt de lamp.", prompt:"KGV(6, 8)", accept:["24"], hint:"6=2×3, 8=2³ → 2³×3=24." }
  ],
  "1.5": [
    { id:"c15-1", type:"machine", concept:"machten", effect:"energy", title:"Vermenigvuldigde schalen", scene:"Twee relais: 2³ en 2⁴. Samen op dezelfde basis.", prompt:"Bereken 2³ × 2⁴.", accept:["128"], hint:"Gelijke basis: exponenten optellen, 2⁷." },
    { id:"c15-2", type:"input", concept:"macht-macht", effect:"mech", title:"De driedubbele toren", scene:"Een verdieping (3²) wordt zelf tot de derde gebracht.", prompt:"Bereken (3²)³.", accept:["729"], hint:"Exponenten vermenigvuldigen: 3⁶." },
    { id:"c15-3", type:"input", concept:"neg-exponent", effect:"door", title:"De omgekeerde lift", scene:"De lift daalt met 2⁻³. Alleen de breuk opent de kooi.", prompt:"Bereken 2⁻³.", accept:["1/8","0.125","0,125"], hint:"2⁻³ = 1/2³ = 1/8." },
    { id:"c15-4", type:"input", concept:"wortel", effect:"bridge", title:"De vierkante overspanning", scene:"Een ligger van 81 eenheden vraagt de zijde van het vierkant.", prompt:"Bereken √81.", accept:["9"], hint:"9×9=81." },
    { id:"c15-5", type:"input", concept:"wet-notatie", effect:"energy", title:"Het meetregister", scene:"4500 eenheden moeten compact in het register.", prompt:"Schrijf 4500 in wetenschappelijke notatie.", accept:["4,5×10³","4.5×10^3","4,5*10^3","4.5e3"], hint:"4,5 keer 10 tot de derde." },
    { id:"c15-6", type:"input", concept:"wortel-macht", effect:"door", title:"De laatste verdieping", scene:"De top van de toren eist 8^{2/3}.", prompt:"Bereken 8^{2/3}.", accept:["4"], hint:"Eerst derdemachtswortel van 8 is 2, daarna 2²." }
  ]
};

const CHALLENGE_PASS = 0.8;
const HINT_COST = 5;
const WIN_INZICHT = 2;

function challengesFor(mid) {
  return CHALLENGES_1[mid] || [];
}

function worldFor(mid) {
  return WORLDS_1[mid] || { name: "Gebied", blurb: "" };
}

function inzichtScore() {
  return Number((progress() && progress().inzicht) || 0);
}

function startChallengeRun(mid) {
  const src = challengesFor(mid).slice();
  window._chRun = { mid, list: src, i: 0, correct: 0, tried: 0 };
  return window._chRun;
}

function currentChallenge() {
  const run = window._chRun;
  if (!run) return null;
  return run.list[run.i] || null;
}

function challengeValue(ch) {
  const box = document.getElementById("ch-input");
  if (ch.type === "target") {
    const sl = document.getElementById("ch-slider");
    return sl ? sl.value : "";
  }
  if (box) return box.value;
  const picked = document.querySelector("#ch-stage input[type=radio]:checked");
  return picked ? decodeURIComponent(picked.value) : "";
}

function challengeOk(ch, raw) {
  if (ch.type === "target") {
    const value = Number(raw);
    return Number.isFinite(value) && Math.abs(value - Number(ch.target)) <= Number(ch.tol || 0);
  }
  const value = String(raw == null ? "" : raw).trim().replace(/,/g, ".");
  return (ch.accept || []).some((answer) => String(answer).trim().replace(/,/g, ".") === value);
}

function paintEffect(kind, ok) {
  const fx = document.getElementById("ch-fx");
  if (!fx) return;
  if (!ok) { fx.innerHTML = '<div class="fx-bad">Geen verandering in de wereld.</div>'; return; }
  if (kind === "door") fx.innerHTML = '<div class="fx-ok">De poort schuift open.</div>';
  else if (kind === "wall") fx.innerHTML = '<div class="fx-ok fx-wall"></div>';
  else if (kind === "energy") fx.innerHTML = '<div class="fx-ok"><div class="fx-bar"><span></span></div>Energiekring gesloten.</div>';
  else if (kind === "bridge") fx.innerHTML = '<div class="fx-ok">De brug klikt vast.</div>';
  else fx.innerHTML = '<div class="fx-ok">Het mechanisme reageert.</div>';
}

function renderChallengeStage(ch) {
  if (ch.type === "target") {
    const min = ch.min != null ? ch.min : 0;
    const max = ch.max != null ? ch.max : 20;
    const step = ch.step != null ? ch.step : 1;
    return '<div class="ch-line"><span>' + min + '</span><input id="ch-slider" type="range" min="' + min + '" max="' + max + '" step="' + step + '" value="' + min + '"><span>' + max + '</span></div><p class="ch-readout">Positie: <strong id="ch-pos">' + min + '</strong></p>';
  }
  if (ch.type === "choice") return (ch.choices || []).map((c) => '<label class="choice"><input type="radio" name="ch" value="' + encodeURIComponent(c) + '"> <span>' + c + '</span></label>').join("");
  if (ch.type === "build") return '<div id="ch-build" class="ch-build"></div><p><input id="ch-input" inputmode="decimal" placeholder="Aantal"></p>';
  if (ch.type === "machine") return '<div class="fx-bar empty" id="ch-energy"><span></span></div><p><input id="ch-input" inputmode="decimal" placeholder="Waarde"></p>';
  return '<p><input id="ch-input" inputmode="text" placeholder="Antwoord"></p>';
}

function renderChallengeView(phaseId, mid) {
  const run = window._chRun && window._chRun.mid === mid ? window._chRun : startChallengeRun(mid);
  const ch = currentChallenge();
  const world = worldFor(mid);
  const m = getMilestone(mid);
  const screen = '<div class="screen" style="background-image:url(\'' + bgFor(phaseId) + "')\">";
  const bar = topbar('<button class="btn" data-go="/fase/' + phaseId + '">Fase ' + phaseId + "</button>");
  if (!ch) {
    const ratio = run.list.length ? run.correct / run.list.length : 0;
    const passed = ratio >= CHALLENGE_PASS;
    return screen + bar + '<div class="layout"><div class="panel challenge-panel"><h1>' + world.name + '</h1><p>Missie afgerond: ' + run.correct + ' / ' + run.list.length + '.</p><p class="status ' + (passed ? 'done' : 'locked') + '">' + (passed ? 'Gebied gestabiliseerd' : 'Nog niet genoeg — probeer opnieuw') + '</p><div class="lesson-actions"><button class="btn" data-go="/fase/' + phaseId + '">Terug naar fase</button>' + (passed ? '' : '<button class="btn" id="ch-retry" data-mid="' + mid + '">Opnieuw</button>') + '</div></div></div></div>';
  }
  return screen + bar + '<div class="layout"><div class="panel challenge-panel"><p class="ch-world">' + world.name + ' — ' + (m ? m.title : mid) + '</p><p class="ch-step">Opdracht ' + (run.i + 1) + ' / ' + run.list.length + ' · Inzicht ' + inzichtScore() + '</p><h1>' + (ch.title || 'Uitdaging') + '</h1><p class="ch-scene">' + (ch.scene || '') + '</p><p class="ch-prompt">' + ch.prompt + '</p><div id="ch-stage">' + renderChallengeStage(ch) + '</div><div id="ch-fx"></div><div id="ch-hintbox"></div><div class="lesson-actions"><button class="btn" data-go="/fase/' + phaseId + '">Terug</button><button class="btn" id="ch-hint">Hint (' + HINT_COST + ' inzicht)</button><button class="btn primary" id="ch-check">Activeren</button></div></div></div></div>';
}

function bindChallengeUi() {
  const sl = document.getElementById("ch-slider");
  if (sl) sl.addEventListener("input", function () {
    const el = document.getElementById("ch-pos");
    if (el) el.textContent = sl.value;
  });
}

function applyChallengeCheck() {
  const ch = currentChallenge();
  const run = window._chRun;
  if (!ch || !run) return;
  const raw = challengeValue(ch);
  const ok = challengeOk(ch, raw);
  run.tried += 1;
  paintEffect(ch.effect || "mech", ok);
  const fb = document.getElementById("ch-fx");
  if (ok) {
    run.correct += 1;
    store.dispatch({ type: "INZICHT_ADD", payload: WIN_INZICHT });
    if (typeof burstInzicht === "function") burstInzicht(document.getElementById("ch-check"));
    if (ch.type === "build") {
      const n = Math.max(0, Math.min(40, Number(raw) || 0));
      const box = document.getElementById("ch-build");
      if (box) box.innerHTML = Array.from({ length: n }, () => "<i></i>").join("");
    }
    if (ch.type === "machine") {
      const bar = document.getElementById("ch-energy");
      if (bar) bar.classList.remove("empty");
    }
    setTimeout(function () {
      run.i += 1;
      if (!currentChallenge()) {
        const ratio = run.list.length ? run.correct / run.list.length : 0;
        const already = milestonePassed(run.mid);
        store.dispatch({ type:"MILESTONE_RESULT", payload:{ id:run.mid, score:run.correct, total:run.list.length, passed:ratio >= CHALLENGE_PASS } });
        if (ratio >= CHALLENGE_PASS && !already && typeof burstToets === "function") burstToets(document.getElementById("ch-check"));
        if (ratio >= CHALLENGE_PASS && !leerstofCollected(run.mid)) store.dispatch({ type:"COLLECT_LEERSTOF", payload:run.mid });
      }
      render();
    }, 700);
  } else {
    store.dispatch({ type:"MISS_CONCEPT", payload:ch.concept || run.mid });
    const need = ch.accept ? ch.accept[0] : ch.target;
    if (fb) fb.innerHTML += '<p class="fx-bad">Het systeem reageert niet. Doelwaarde: iets anders dan ' + String(raw || "leeg") + '. Hint beschikbaar.</p>';
  }
}
