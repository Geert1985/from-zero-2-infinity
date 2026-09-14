
function widgetShell(title, hint, body) {
  return `<section class="widget">
    <header><strong>${title}</strong><span>${hint}</span></header>
    ${body}
  </section>`;
}

function prepCanvas(canvas) {
  canvas.style.width = "100%";
  canvas.style.maxWidth = "100%";
  const h = Number(canvas.dataset.h || 220);
  canvas.style.height = h + "px";
  const w = Math.max(200, Math.floor(canvas.clientWidth || 0));
  const r = window.devicePixelRatio || 1;
  if (canvas.width !== Math.round(w * r) || canvas.height !== Math.round(h * r)) {
    canvas.width = Math.round(w * r);
    canvas.height = Math.round(h * r);
  }
  const ctx = canvas.getContext("2d");
  ctx.setTransform(r, 0, 0, r, 0, 0);
  return { ctx, w, h };
}

function axes(ctx, w, h, world, opts) {
  const pad = 28;
  const xMin = world.xMin, xMax = world.xMax, yMin = world.yMin, yMax = world.yMax;
  const sx = (x) => pad + (x - xMin) / (xMax - xMin) * (w - 2 * pad);
  const sy = (y) => h - pad - (y - yMin) / (yMax - yMin) * (h - 2 * pad);
  ctx.fillStyle = "#0d0b08";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(230,199,122,0.22)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, sy(0)); ctx.lineTo(w - pad, sy(0));
  ctx.moveTo(sx(0), pad); ctx.lineTo(sx(0), h - pad);
  ctx.stroke();
  ctx.fillStyle = "#cbb98a";
  ctx.font = "11px 'Source Sans 3', sans-serif";
  ctx.fillText(String(xMin), pad, sy(0) + 14);
  ctx.fillText(String(xMax), w - pad - 14, sy(0) + 14);
  if (!opts || !opts.noY) {
    ctx.fillText(String(yMax), sx(0) + 4, pad + 10);
    ctx.fillText(String(yMin), sx(0) + 4, h - pad);
  }
  return { sx, sy, pad };
}

function mountNumberline(root, options = {}) {
  const {
    min = 0,
    max = 20,
    step = 1,
    value = 3
  } = options;

  root.innerHTML = widgetShell(
    "Getallenlijn: ",
    "Sleep om te zien waar een getal ligt.",
    `<canvas data-h="140"></canvas>
     <div class="widget-controls">
       <label>
         Getal
         <input
           type="range"
           min="${min}"
           max="${max}"
           step="${step}"
           value="${value}"
           data-k="v"
         >
         <output>${value}</output>
       </label>
     </div>`
  );

  const canvas = root.querySelector("canvas");
  const range = root.querySelector("[data-k=v]");
  const out = root.querySelector("output");

  const draw = () => {
    const v = Number(range.value);
    out.textContent = v;

    const { ctx, w, h } = prepCanvas(canvas);

    // Alleen een horizontale getallenlijn.
    const pad = 32;
    const y = h / 2;

    const sx = (x) =>
      pad + (x - min) / (max - min) * (w - 2 * pad);

    // Achtergrond
    ctx.fillStyle = "#0d0b08";
    ctx.fillRect(0, 0, w, h);

    // Hoofdas
    ctx.strokeStyle = "rgba(230,199,122,0.75)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(w - pad, y);
    ctx.stroke();

    // Pijlen aan beide kanten
    ctx.fillStyle = "rgba(230,199,122,0.9)";

    ctx.beginPath();
    ctx.moveTo(pad - 2, y);
    ctx.lineTo(pad + 8, y - 5);
    ctx.lineTo(pad + 8, y + 5);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(w - pad + 2, y);
    ctx.lineTo(w - pad - 8, y - 5);
    ctx.lineTo(w - pad - 8, y + 5);
    ctx.closePath();
    ctx.fill();

    // Verdeling en getallen
    ctx.font = "11px 'Source Sans 3', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    for (let x = min; x <= max; x += step) {
      const X = sx(x);

      // Zorg dat afrondingsfouten geen vreemde laatste tick geven.
      if (X < pad || X > w - pad) continue;

      // Tickmark
      ctx.strokeStyle = "rgba(230,199,122,0.75)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(X, y - 7);
      ctx.lineTo(X, y + 7);
      ctx.stroke();

      // Getal onder de as
      ctx.fillStyle = "#cbb98a";
      ctx.fillText(String(x), X, y + 11);
    }

    // Huidige waarde
    const X = sx(v);

    ctx.fillStyle = "#e6c77a";
    ctx.beginPath();
    ctx.arc(X, y, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#fff6df";
    ctx.font = "13px Cinzel, serif";
    ctx.textBaseline = "bottom";
    ctx.fillText(String(v), X, y - 12);
  };

  range.addEventListener("input", draw);
  draw();
}

//instellingen voor getallenlijn positieve natuurlijke getallen
function mountNats(root) {
  mountNumberline(root, {
    min: 0,
    max: 20,
    step: 1,
    value: 3
  });
}

//instellingen getallenlijn voor negatieve en positieve getallen
function mountInts(root) {
  mountNumberline(root, {
    min: -10,
    max: 10,
    step: 1,
    value: 3
  });
}

function mountGroups(root) {
  root.innerHTML = widgetShell("Vermenigvuldigen als groepjes", "Kies hoeveel groepjes je hebt en hoeveel dingen er in elk groepje zitten.",
    `<div class="groups-visual" aria-live="polite"></div>
     <div class="widget-controls">
       <label>groepjes <input type="range" min="1" max="8" step="1" value="4" data-k="groups"> <output data-o="groups">4</output></label>
       <label>per groepje <input type="range" min="1" max="8" step="1" value="3" data-k="items"> <output data-o="items">3</output></label>
     </div>
     <p class="widget-readout"></p>`);

  const visual = root.querySelector(".groups-visual");
  const groupsEl = root.querySelector("[data-k=groups]");
  const itemsEl = root.querySelector("[data-k=items]");
  const note = root.querySelector(".widget-readout");

  const draw = () => {
    const groups = Number(groupsEl.value);
    const items = Number(itemsEl.value);
    root.querySelector("[data-o=groups]").textContent = String(groups);
    root.querySelector("[data-o=items]").textContent = String(items);

    visual.innerHTML = "";
    visual.style.display = "grid";
    visual.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
    visual.style.gap = "10px";
    visual.style.margin = "14px 0";
    visual.setAttribute("role", "img");
    visual.setAttribute("aria-label", `${groups} groepjes van ${items} voorwerpen`);

    for (let g = 0; g < groups; g++) {
      const group = document.createElement("div");
      group.className = "group-cluster";
      group.style.display = "grid";
      group.style.gridTemplateColumns = `repeat(${Math.min(items, 8)}, minmax(24px, 1fr))`;
      group.style.gap = "8px";
      group.style.padding = "8px 10px";
      group.style.border = "1px solid rgba(230,199,122,0.28)";
      group.style.borderRadius = "12px";
      group.style.background = "rgba(230,199,122,0.06)";
      group.setAttribute("aria-hidden", "true");
      for (let i = 0; i < items; i++) {
        const dot = document.createElement("span");
        dot.className = "group-dot";
        dot.style.width = "20px";
        dot.style.height = "20px";
        dot.style.borderRadius = "50%";
        dot.style.background = "#e6c77a";
        dot.style.boxShadow = "0 0 0 2px rgba(230,199,122,0.12)";
        dot.style.justifySelf = "center";
        group.appendChild(dot);
      }
      visual.appendChild(group);
    }

    const total = groups * items;
    const addition = Array(groups).fill(items).join(" + ");
    note.textContent = `${groups} groepjes van ${items} = ${addition} = ${groups} × ${items} = ${total}`;
  };

  [groupsEl, itemsEl].forEach((el) => el.addEventListener("input", draw));
  draw();
}

function mountSmartMultiplication(root) {
  root.innerHTML = widgetShell(
    "Slim rekenen met vermenigvuldigen",
    "Splits een vermenigvuldiging op in twee eenvoudigere vermenigvuldigingen.",
    `<canvas data-h="300"></canvas>
     <div class="widget-controls">
       <label>
         Groepjes
         <input
           type="range"
           min="2"
           max="10"
           step="1"
           value="6"
           data-k="groups"
         >
         <output data-o="groups">6</output>
       </label>

       <label>
         Aantal per groep
         <input
           type="range"
           min="2"
           max="12"
           step="1"
           value="7"
           data-k="total"
         >
         <output data-o="total">7</output>
       </label>

       <label>
         Splits
         <input
           type="range"
           min="1"
           max="6"
           step="1"
           value="5"
           data-k="split"
         >
         <output data-o="split">5 + 2</output>
       </label>
     </div>
     <p class="widget-readout"></p>`
  );

  const canvas = root.querySelector("canvas");
  const groupsEl = root.querySelector("[data-k=groups]");
  const totalEl = root.querySelector("[data-k=total]");
  const splitEl = root.querySelector("[data-k=split]");

  const groupsOut = root.querySelector("[data-o=groups]");
  const totalOut = root.querySelector("[data-o=total]");
  const splitOut = root.querySelector("[data-o=split]");
  const readout = root.querySelector(".widget-readout");

  const draw = () => {
    const groups = Number(groupsEl.value);
    const total = Number(totalEl.value);

    // De splitslider mag nooit groter zijn dan total - 1.
    const splitMax = Math.max(1, total - 1);
    splitEl.max = splitMax;

    if (Number(splitEl.value) > splitMax) {
      splitEl.value = splitMax;
    }

    const split = Number(splitEl.value);
    const remainder = total - split;

    groupsOut.textContent = groups;
    totalOut.textContent = total;
    splitOut.textContent = `${split} + ${remainder}`;

    const { ctx, w, h } = prepCanvas(canvas);

    ctx.fillStyle = "#0d0b08";
    ctx.fillRect(0, 0, w, h);

    // ------------------------------------------------------------
    // Instellingen voor de visuele groepjes
    // ------------------------------------------------------------

    const top = 58;
    const bottom = 48;

    // Ruimte tussen de twee delen van iedere rij.
    const gap = 22;

    const availableWidth = w - 50;
    const availableHeight = h - top - bottom;

    const maxColumns = total;

    const cellWidth = Math.min(
      34,
      (availableWidth - gap) / maxColumns
    );

    const cellHeight = Math.min(
      34,
      availableHeight / groups
    );

    const radius = Math.min(
      10,
      cellWidth * 0.30,
      cellHeight * 0.30
    );

    const leftWidth = split * cellWidth;
    const rightWidth = remainder * cellWidth;

    const wholeWidth =
      leftWidth +
      (remainder > 0 ? gap : 0) +
      rightWidth;

    const startX = (w - wholeWidth) / 2;

    // ------------------------------------------------------------
    // Titel van de visualisatie
    // ------------------------------------------------------------

    ctx.fillStyle = "#fff6df";
    ctx.font = "22px Cinzel, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
      `${groups} × ${total} = ${groups} × ${split} + ${groups} × ${remainder}`,
      w / 2,
      25
    );

    // ------------------------------------------------------------
    // Objecten tekenen
    // ------------------------------------------------------------

    const startY =
      top +
      (availableHeight - groups * cellHeight) / 2 +
      cellHeight / 2;

    for (let row = 0; row < groups; row++) {
      const y = startY + row * cellHeight;

      // Eerste deel
      for (let col = 0; col < split; col++) {
        const x =
          startX +
          col * cellWidth +
          cellWidth / 2;

        ctx.fillStyle = "#7dcea0";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Tweede deel
      for (let col = 0; col < remainder; col++) {
        const x =
          startX +
          leftWidth +
          gap +
          col * cellWidth +
          cellWidth / 2;

        ctx.fillStyle = "#6ab0e0";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // ------------------------------------------------------------
    // Scheidingslijn tussen de twee delen
    // ------------------------------------------------------------

    if (remainder > 0) {
      const separatorX =
        startX +
        leftWidth +
        gap / 2;

      ctx.strokeStyle = "rgba(230,199,122,0.55)";
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 5]);

      ctx.beginPath();
      ctx.moveTo(separatorX, top - 8);
      ctx.lineTo(separatorX, h - bottom + 8);
      ctx.stroke();

      ctx.setLineDash([]);
    }

    // ------------------------------------------------------------
    // Uitleg onder de groepjes
    // ------------------------------------------------------------

    ctx.font = "16px 'Source Sans 3', sans-serif";

    const equationY = h - 22;

    ctx.fillStyle = "#7dcea0";
    ctx.textAlign = "right";

    ctx.fillText(
      `${groups} × ${split} = ${groups * split}`,
      w / 2 - 10,
      equationY
    );

    ctx.fillStyle = "#fff6df";
    ctx.textAlign = "center";

    ctx.fillText(
      "+",
      w / 2,
      equationY
    );

    ctx.fillStyle = "#6ab0e0";
    ctx.textAlign = "left";

    ctx.fillText(
      `${groups} × ${remainder} = ${groups * remainder}`,
      w / 2 + 10,
      equationY
    );

    // ------------------------------------------------------------
    // Tekstuele uitleg
    // ------------------------------------------------------------

    readout.textContent =
      `${groups} × ${total} = ${groups * total}  →  ` +
      `${groups * split} + ${groups * remainder} = ${groups * total}`;
  };

  groupsEl.addEventListener("input", draw);
  totalEl.addEventListener("input", draw);
  splitEl.addEventListener("input", draw);

  draw();
}

function mountDivisionGroups(root) {
  root.innerHTML = widgetShell(
    "Delen als gelijke groepen",
    "Verdeel de voorwerpen in even grote groepen.",
    `<canvas data-h="300"></canvas>
     <div class="widget-controls">
       <label>
         Totaal
         <input
           type="range"
           min="4"
           max="30"
           step="1"
           value="12"
           data-k="total"
         >
         <output data-o="total">12</output>
       </label>

       <label>
         Aantal groepen
         <input
           type="range"
           min="1"
           max="10"
           step="1"
           value="3"
           data-k="groups"
         >
         <output data-o="groups">3</output>
       </label>
     </div>
     <p class="widget-readout"></p>`
  );

  const canvas = root.querySelector("canvas");
  const totalEl = root.querySelector("[data-k=total]");
  const groupsEl = root.querySelector("[data-k=groups]");

  const totalOut = root.querySelector("[data-o=total]");
  const groupsOut = root.querySelector("[data-o=groups]");
  const readout = root.querySelector(".widget-readout");

  const draw = () => {
    const total = Number(totalEl.value);
    const groups = Number(groupsEl.value);

    totalOut.textContent = total;
    groupsOut.textContent = groups;

    const quotient = Math.floor(total / groups);
    const remainder = total % groups;

    const { ctx, w, h } = prepCanvas(canvas);

    ctx.fillStyle = "#0d0b08";
    ctx.fillRect(0, 0, w, h);

    /*
     * We tekenen de groepen als kolommen.
     * Elk voorwerp is een cirkel.
     */
    const top = 55;
    const bottom = 45;
    const side = 30;

    const availableWidth = w - 2 * side;
    const availableHeight = h - top - bottom;

    const gapX = 16;
    const gapY = 10;

    const cellWidth =
      Math.min(
        34,
        (availableWidth - (groups - 1) * gapX) / groups
      );

    const cellHeight =
      Math.min(
        34,
        (availableHeight - (quotient - 1) * gapY) /
          Math.max(quotient, 1)
      );

    const radius =
      Math.min(
        11,
        cellWidth * 0.32,
        cellHeight * 0.32
      );

    const totalWidth =
      groups * cellWidth +
      (groups - 1) * gapX;

    const startX = (w - totalWidth) / 2;

    /*
     * Titel boven de visualisatie
     */
    ctx.fillStyle = "#fff6df";
    ctx.font = "22px Cinzel, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
      `${total} ÷ ${groups} = ${quotient}`,
      w / 2,
      25
    );

    /*
     * Voorwerpen tekenen.
     *
     * We vullen de groepen rij per rij.
     * Daardoor krijgt iedere groep precies
     * hetzelfde aantal voorwerpen.
     */
    for (let group = 0; group < groups; group++) {
      const x =
        startX +
        group * (cellWidth + gapX) +
        cellWidth / 2;

      for (let item = 0; item < quotient; item++) {
        const y =
          top +
          item * (cellHeight + gapY) +
          cellHeight / 2;

        ctx.fillStyle = "#7dcea0";

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    /*
     * Labels onder de groepen.
     */
    ctx.font = "14px 'Source Sans 3', sans-serif";
    ctx.textAlign = "center";

    for (let group = 0; group < groups; group++) {
      const x =
        startX +
        group * (cellWidth + gapX) +
        cellWidth / 2;

      ctx.fillStyle = "#cbb98a";

      ctx.fillText(
        `${quotient}`,
        x,
        h - 20
      );
    }

    /*
     * Uitleg onderaan.
     */
    readout.textContent =
      `${total} voorwerpen verdeeld over ${groups} groepen ` +
      `= ${quotient} per groep`;
  };

  totalEl.addEventListener("input", draw);
  groupsEl.addEventListener("input", draw);

  draw();
}

function mountDivisionRemainder(root) {
  root.innerHTML = widgetShell(
    "Delen met rest",
    "Maak zoveel mogelijk volledige groepen.",
    `<canvas data-h="320"></canvas>
     <div class="widget-controls">
       <label>
         Totaal
         <input
           type="range"
           min="4"
           max="30"
           step="1"
           value="14"
           data-k="total"
         >
         <output data-o="total">14</output>
       </label>

       <label>
         Grootte van de groep
         <input
           type="range"
           min="2"
           max="8"
           step="1"
           value="4"
           data-k="divisor"
         >
         <output data-o="divisor">4</output>
       </label>
     </div>
     <p class="widget-readout"></p>`
  );

  const canvas = root.querySelector("canvas");
  const totalEl = root.querySelector("[data-k=total]");
  const divisorEl = root.querySelector("[data-k=divisor]");

  const totalOut = root.querySelector("[data-o=total]");
  const divisorOut = root.querySelector("[data-o=divisor]");
  const readout = root.querySelector(".widget-readout");

  const draw = () => {
    const total = Number(totalEl.value);
    const divisor = Number(divisorEl.value);

    const quotient = Math.floor(total / divisor);
    const remainder = total % divisor;

    totalOut.textContent = total;
    divisorOut.textContent = divisor;

    const { ctx, w, h } = prepCanvas(canvas);

    ctx.fillStyle = "#0d0b08";
    ctx.fillRect(0, 0, w, h);

    /*
     * Titel
     */
    ctx.fillStyle = "#fff6df";
    ctx.font = "22px Cinzel, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
      `${total} ÷ ${divisor} = ${quotient} rest ${remainder}`,
      w / 2,
      25
    );

    /*
     * Afmetingen van de volledige groepen.
     */
    const groupGap = 22;
    const itemGap = 8;

    const side = 25;
    const top = 55;

    const groupWidth = Math.min(
      150,
      (w - 2 * side - Math.max(quotient - 1, 0) * groupGap) /
        Math.max(quotient, 1)
    );

    const itemSize = Math.min(
      28,
      (groupWidth - (divisor - 1) * itemGap) / divisor
    );

    const groupActualWidth =
      divisor * itemSize +
      (divisor - 1) * itemGap;

    const totalGroupsWidth =
      quotient * groupActualWidth +
      Math.max(quotient - 1, 0) * groupGap;

    const startX = (w - totalGroupsWidth) / 2;

    /*
     * Volledige groepen tekenen.
     */
    for (let group = 0; group < quotient; group++) {
      const groupX =
        startX +
        group * (groupActualWidth + groupGap);

      for (let item = 0; item < divisor; item++) {
        const x =
          groupX +
          item * (itemSize + itemGap) +
          itemSize / 2;

        const y = top + 80;

        ctx.fillStyle = "#7dcea0";

        ctx.beginPath();
        ctx.arc(
          x,
          y,
          Math.min(10, itemSize * 0.35),
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      /*
       * Label onder iedere groep.
       */
      ctx.fillStyle = "#cbb98a";
      ctx.font = "14px 'Source Sans 3', sans-serif";
      ctx.textAlign = "center";

      ctx.fillText(
        `groep ${group + 1}`,
        groupX + groupActualWidth / 2,
        top + 125
      );
    }

    /*
     * Rest tekenen.
     */
    if (remainder > 0) {
      const remainderStartX =
        startX +
        quotient * (groupActualWidth + groupGap);

      for (let item = 0; item < remainder; item++) {
        const x =
          remainderStartX +
          item * (itemSize + itemGap) +
          itemSize / 2;

        const y = top + 80;

        ctx.fillStyle = "#6ab0e0";

        ctx.beginPath();
        ctx.arc(
          x,
          y,
          Math.min(10, itemSize * 0.35),
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      ctx.fillStyle = "#6ab0e0";
      ctx.font = "14px 'Source Sans 3', sans-serif";
      ctx.textAlign = "center";

      const remainderWidth =
        remainder * itemSize +
        Math.max(remainder - 1, 0) * itemGap;

      ctx.fillText(
        "rest",
        remainderStartX + remainderWidth / 2,
        top + 125
      );
    }

    /*
     * Rekenkundige controle onderaan.
     */
    ctx.font = "16px 'Source Sans 3', sans-serif";
    ctx.textAlign = "center";

    ctx.fillStyle = "#fff6df";

    ctx.fillText(
      `${quotient} × ${divisor} + ${remainder} = ${total}`,
      w / 2,
      h - 42
    );

    readout.textContent =
      `${total} ÷ ${divisor} = ${quotient} rest ${remainder}`;
  };

  totalEl.addEventListener("input", draw);
  divisorEl.addEventListener("input", draw);

  draw();
}

function mountSmartDivision(root) {
  root.innerHTML = widgetShell(
    "Slim delen",
    "Splits een getal op in twee delen die zonder rest deelbaar zijn.",
    `<canvas data-h="320"></canvas>
     <div class="widget-controls">
       <label>
         Getal
         <input
           type="range"
           min="20"
           max="150"
           step="1"
           value="84"
           data-k="total"
         >
         <output data-o="total">84</output>
       </label>

       <label>
         Deler
         <input
           type="range"
           min="2"
           max="10"
           step="1"
           value="4"
           data-k="divisor"
         >
         <output data-o="divisor">4</output>
       </label>

       <label>
         Splitsing
         <input
           type="range"
           min="1"
           max="1"
           step="1"
           value="1"
           data-k="split"
         >
         <output data-o="split">80 + 4</output>
       </label>
     </div>
     <p class="widget-readout"></p>`
  );

  const canvas = root.querySelector("canvas");
  const totalEl = root.querySelector("[data-k=total]");
  const divisorEl = root.querySelector("[data-k=divisor]");
  const splitEl = root.querySelector("[data-k=split]");

  const totalOut = root.querySelector("[data-o=total]");
  const divisorOut = root.querySelector("[data-o=divisor]");
  const splitOut = root.querySelector("[data-o=split]");
  const readout = root.querySelector(".widget-readout");

  /*
   * Bepaal alle splitsingen waarbij beide delen
   * zonder rest deelbaar zijn door de deler.
   */
  const getValidSplits = (total, divisor) => {
    const splits = [];

    for (let split = 1; split < total; split++) {
      const remainder = total - split;

      if (
        split % divisor === 0 &&
        remainder % divisor === 0
      ) {
        splits.push(split);
      }
    }

    return splits;
  };

  const draw = () => {
    const total = Number(totalEl.value);
    const divisor = Number(divisorEl.value);

    const validSplits = getValidSplits(total, divisor);

    /*
     * Als het totaal zelf niet deelbaar is door de deler,
     * bestaat er geen splitsing waarbij beide delen zonder
     * rest deelbaar zijn.
     */
    if (validSplits.length === 0) {
      totalOut.textContent = total;
      divisorOut.textContent = divisor;
      splitOut.textContent = "geen geldige splitsing";

      splitEl.disabled = true;

      const { ctx, w, h } = prepCanvas(canvas);

      ctx.fillStyle = "#fff6df";
      ctx.font = "22px Cinzel, serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(
        `${total} ÷ ${divisor}`,
        w / 2,
        80
      );

      ctx.font = "18px 'Source Sans 3', sans-serif";

      ctx.fillText(
        "Geen splitsing waarbij beide delen",
        w / 2,
        145
      );

      ctx.fillText(
        "zonder rest deelbaar zijn.",
        w / 2,
        175
      );

      readout.textContent =
        `${total} ÷ ${divisor} kan hier niet met deze methode worden opgesplitst.`;

      return;
    }

    splitEl.disabled = false;

    /*
     * De slider gebruikt een index in de lijst met geldige
     * splitsingen.
     */
    splitEl.min = 0;
    splitEl.max = validSplits.length - 1;
    splitEl.step = 1;

    let splitIndex = Number(splitEl.value);

    if (
      !Number.isInteger(splitIndex) ||
      splitIndex < 0 ||
      splitIndex >= validSplits.length
    ) {
      splitIndex = 0;
      splitEl.value = 0;
    }

    const split = validSplits[splitIndex];
    const remainder = total - split;

    const leftQuotient = split / divisor;
    const rightQuotient = remainder / divisor;
    const result = total / divisor;

    totalOut.textContent = total;
    divisorOut.textContent = divisor;
    splitOut.textContent = `${split} + ${remainder}`;

    const { ctx, w, h } = prepCanvas(canvas);

    ctx.fillStyle = "#0d0b08";
    ctx.fillRect(0, 0, w, h);

    /*
     * Hoofdequatie
     */
    ctx.fillStyle = "#fff6df";
    ctx.font = "22px Cinzel, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
      `${total} ÷ ${divisor} = ${result}`,
      w / 2,
      28
    );

    /*
     * De twee delen.
     */
    const centerY = 125;

    const leftX = w * 0.28;
    const rightX = w * 0.72;

    /*
     * Eerste deel
     */
    ctx.fillStyle = "#7dcea0";
    ctx.font = "26px Cinzel, serif";

    ctx.fillText(
      `${split} ÷ ${divisor}`,
      leftX,
      centerY
    );

    /*
     * Tweede deel
     */
    ctx.fillStyle = "#6ab0e0";

    ctx.fillText(
      `${remainder} ÷ ${divisor}`,
      rightX,
      centerY
    );

    /*
     * Verbindingslijnen
     */
    ctx.strokeStyle = "rgba(230,199,122,0.55)";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(leftX, centerY + 30);
    ctx.lineTo(leftX, centerY + 55);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(rightX, centerY + 30);
    ctx.lineTo(rightX, centerY + 55);
    ctx.stroke();

    /*
     * Resultaten van beide eenvoudige delingen.
     */
    ctx.font = "20px 'Source Sans 3', sans-serif";

    ctx.fillStyle = "#7dcea0";

    ctx.fillText(
      `= ${leftQuotient}`,
      leftX,
      centerY + 85
    );

    ctx.fillStyle = "#6ab0e0";

    ctx.fillText(
      `= ${rightQuotient}`,
      rightX,
      centerY + 85
    );

    /*
     * Eindresultaat.
     */
    ctx.fillStyle = "#fff6df";
    ctx.font = "18px 'Source Sans 3', sans-serif";

    ctx.fillText(
      `${split} ÷ ${divisor} + ${remainder} ÷ ${divisor} = ${result}`,
      w / 2,
      h - 40
    );

    readout.textContent =
      `${total} ÷ ${divisor} = ` +
      `${split} ÷ ${divisor} + ${remainder} ÷ ${divisor}`;
  };

  totalEl.addEventListener("input", draw);
  divisorEl.addEventListener("input", draw);
  splitEl.addEventListener("input", draw);

  draw();
}

function mountCommutative(root) {
  root.innerHTML = widgetShell(
    "De commutatieve eigenschap",
    "Draai de groepen om en het totaal blijft hetzelfde.",
    `<canvas data-h="320"></canvas>
     <div class="widget-controls">
       <label>
         Eerste getal
         <input
           type="range"
           min="2"
           max="8"
           step="1"
           value="3"
           data-k="a"
         >
         <output data-o="a">3</output>
       </label>

       <label>
         Tweede getal
         <input
           type="range"
           min="2"
           max="8"
           step="1"
           value="4"
           data-k="b"
         >
         <output data-o="b">4</output>
       </label>
     </div>
     <p class="widget-readout"></p>`
  );

  const canvas = root.querySelector("canvas");
  const aEl = root.querySelector("[data-k=a]");
  const bEl = root.querySelector("[data-k=b]");

  const aOut = root.querySelector("[data-o=a]");
  const bOut = root.querySelector("[data-o=b]");
  const readout = root.querySelector(".widget-readout");

  const drawArray = (
    ctx,
    rows,
    columns,
    centerX,
    centerY,
    label
  ) => {
    const cell = 24;
    const gap = 6;

    const width =
      columns * cell +
      (columns - 1) * gap;

    const height =
      rows * cell +
      (rows - 1) * gap;

    const startX = centerX - width / 2;
    const startY = centerY - height / 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const x =
          startX +
          col * (cell + gap) +
          cell / 2;

        const y =
          startY +
          row * (cell + gap) +
          cell / 2;

        ctx.fillStyle = "#7dcea0";

        ctx.beginPath();
        ctx.arc(
          x,
          y,
          8,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }

    ctx.fillStyle = "#cbb98a";
    ctx.font = "16px 'Source Sans 3', sans-serif";
    ctx.textAlign = "center";

    ctx.fillText(
      label,
      centerX,
      startY + height + 30
    );
  };

  const draw = () => {
    const a = Number(aEl.value);
    const b = Number(bEl.value);

    const total = a * b;

    aOut.textContent = a;
    bOut.textContent = b;

    const { ctx, w, h } = prepCanvas(canvas);

    ctx.fillStyle = "#0d0b08";
    ctx.fillRect(0, 0, w, h);

    /*
     * Links: a rijen van b.
     */
    drawArray(
      ctx,
      a,
      b,
      w * 0.27,
      135,
      `${a} × ${b} = ${total}`
    );

    /*
     * Rechts: b rijen van a.
     */
    drawArray(
      ctx,
      b,
      a,
      w * 0.73,
      135,
      `${b} × ${a} = ${total}`
    );

    /*
     * Pijl / gelijkheid in het midden.
     */
    ctx.fillStyle = "#e6c77a";
    ctx.font = "24px Cinzel, serif";
    ctx.textAlign = "center";

    ctx.fillText(
      "=",
      w / 2,
      135
    );

    /*
     * Algemene conclusie.
     */
    ctx.fillStyle = "#fff6df";
    ctx.font = "18px 'Source Sans 3', sans-serif";

    ctx.fillText(
      `${a} × ${b} = ${b} × ${a} = ${total}`,
      w / 2,
      h - 25
    );

    readout.textContent =
      `De volgorde verandert het aantal niet: ` +
      `${a} × ${b} = ${b} × ${a} = ${total}`;
  };

  aEl.addEventListener("input", draw);
  bEl.addEventListener("input", draw);

  draw();
}

function mountAssociative(root) {
  root.innerHTML = widgetShell(
    "De associatieve eigenschap",
    "Verander de groepering en ontdek dat het antwoord hetzelfde blijft.",
    `<canvas data-h="320"></canvas>
     <div class="widget-controls">
       <label>
         Eerste getal
         <input
           type="range"
           min="1"
           max="9"
           step="1"
           value="2"
           data-k="a"
         >
         <output data-o="a">2</output>
       </label>

       <label>
         Tweede getal
         <input
           type="range"
           min="1"
           max="9"
           step="1"
           value="3"
           data-k="b"
         >
         <output data-o="b">3</output>
       </label>

       <label>
         Derde getal
         <input
           type="range"
           min="1"
           max="9"
           step="1"
           value="4"
           data-k="c"
         >
         <output data-o="c">4</output>
       </label>
     </div>
     <p class="widget-readout"></p>`
  );

  const canvas = root.querySelector("canvas");

  const aEl = root.querySelector("[data-k=a]");
  const bEl = root.querySelector("[data-k=b]");
  const cEl = root.querySelector("[data-k=c]");

  const aOut = root.querySelector("[data-o=a]");
  const bOut = root.querySelector("[data-o=b]");
  const cOut = root.querySelector("[data-o=c]");

  const readout = root.querySelector(".widget-readout");

  const draw = () => {
    const a = Number(aEl.value);
    const b = Number(bEl.value);
    const c = Number(cEl.value);

    const left = (a + b) + c;
    const right = a + (b + c);

    aOut.textContent = a;
    bOut.textContent = b;
    cOut.textContent = c;

    const { ctx, w, h } = prepCanvas(canvas);

    ctx.fillStyle = "#0d0b08";
    ctx.fillRect(0, 0, w, h);

    /*
     * Linkerkant
     */
    ctx.fillStyle = "#fff6df";
    ctx.font = "22px Cinzel, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
      `(${a} + ${b}) + ${c}`,
      w * 0.27,
      65
    );

    ctx.fillStyle = "#7dcea0";
    ctx.font = "20px 'Source Sans 3', sans-serif";

    ctx.fillText(
      `${a + b} + ${c}`,
      w * 0.27,
      125
    );

    ctx.fillText(
      `= ${left}`,
      w * 0.27,
      175
    );

    /*
     * Gelijkheid
     */
    ctx.fillStyle = "#e6c77a";
    ctx.font = "28px Cinzel, serif";

    ctx.fillText(
      "=",
      w / 2,
      125
    );

    /*
     * Rechterkant
     */
    ctx.fillStyle = "#fff6df";
    ctx.font = "22px Cinzel, serif";

    ctx.fillText(
      `${a} + (${b} + ${c})`,
      w * 0.73,
      65
    );

    ctx.fillStyle = "#6ab0e0";
    ctx.font = "20px 'Source Sans 3', sans-serif";

    ctx.fillText(
      `${a} + ${b + c}`,
      w * 0.73,
      125
    );

    ctx.fillText(
      `= ${right}`,
      w * 0.73,
      175
    );

    /*
     * Conclusie
     */
    ctx.fillStyle = "#fff6df";
    ctx.font = "18px 'Source Sans 3', sans-serif";

    ctx.fillText(
      `Beide manieren geven ${left}`,
      w / 2,
      h - 30
    );

    readout.textContent =
      `(${a} + ${b}) + ${c} = ` +
      `${a} + (${b} + ${c}) = ${left}`;
  };

  aEl.addEventListener("input", draw);
  bEl.addEventListener("input", draw);
  cEl.addEventListener("input", draw);

  draw();
}
// ============================================================
// FRACTION VISUAL
// ============================================================

function mountFractionVisual(root) {
  if (!root) return;

  root.innerHTML = `
    <div class="widget fraction-visual-widget">
      <h4>Breuken zichtbaar maken</h4>

      <div class="fraction-visual-controls">
        <label>
          Noemer:
          <input
            type="range"
            class="fraction-denominator"
            min="2"
            max="12"
            value="5"
          >
          <span class="fraction-denominator-value">5</span>
        </label>

        <label>
          Teller:
          <input
            type="range"
            class="fraction-numerator"
            min="1"
            max="5"
            value="3"
          >
          <span class="fraction-numerator-value">3</span>
        </label>
      </div>

      <canvas class="fraction-visual-canvas"></canvas>

      <div class="fraction-visual-readout"></div>
    </div>
  `;

  const denominatorSlider =
    root.querySelector(".fraction-denominator");

  const numeratorSlider =
    root.querySelector(".fraction-numerator");

  const denominatorValue =
    root.querySelector(".fraction-denominator-value");

  const numeratorValue =
    root.querySelector(".fraction-numerator-value");

  const canvas =
    root.querySelector(".fraction-visual-canvas");

  const readout =
    root.querySelector(".fraction-visual-readout");

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    draw();
  }

  function draw() {
    const denominator = Number(denominatorSlider.value);
    const numerator = Number(numeratorSlider.value);

    denominatorValue.textContent = denominator;
    numeratorValue.textContent = numerator;

    canvas.width = canvas.clientWidth * (window.devicePixelRatio || 1);
    canvas.height = canvas.clientHeight * (window.devicePixelRatio || 1);

    const dpr = window.devicePixelRatio || 1;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.32;

    // Teken de gelijke delen
    for (let i = 0; i < denominator; i++) {
      const startAngle =
        -Math.PI / 2 + i * (2 * Math.PI / denominator);

      const endAngle =
        -Math.PI / 2 + (i + 1) * (2 * Math.PI / denominator);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(
        centerX,
        centerY,
        radius,
        startAngle,
        endAngle
      );
      ctx.closePath();

      if (i < numerator) {
        ctx.fillStyle = "#4caf50";
      } else {
        ctx.fillStyle = "#e8e8e8";
      }

      ctx.fill();
      ctx.stroke();
    }

    readout.innerHTML = `
      <strong>${numerator}/${denominator}</strong>
      =
      ${numerator} van de ${denominator} gelijke delen
    `;
  }

  denominatorSlider.addEventListener("input", () => {
    const denominator = Number(denominatorSlider.value);

    numeratorSlider.max = denominator;

    if (Number(numeratorSlider.value) > denominator) {
      numeratorSlider.value = denominator;
    }

    draw();
  });

  numeratorSlider.addEventListener("input", draw);

  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();
}
// ============================================================
// PERCENTAGE BAR
// ============================================================

function mountPercentageBar(root) {
  if (!root) return;

  root.innerHTML = `
    <div class="widget percentage-bar-widget">
      <h4>Een percentage zichtbaar maken</h4>

      <label>
        Percentage:
        <input
          type="range"
          class="percentage-slider"
          min="0"
          max="100"
          value="25"
        >
        <span class="percentage-value">25%</span>
      </label>

      <canvas class="percentage-bar-canvas"></canvas>

      <div class="percentage-bar-readout"></div>
    </div>
  `;

  const slider =
    root.querySelector(".percentage-slider");

  const value =
    root.querySelector(".percentage-value");

  const canvas =
    root.querySelector(".percentage-bar-canvas");

  const readout =
    root.querySelector(".percentage-bar-readout");

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    draw();
  }

  function draw() {
    const percentage = Number(slider.value);

    value.textContent = `${percentage}%`;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    ctx.clearRect(0, 0, width, height);

    const barX = width * 0.1;
    const barY = height * 0.35;
    const barWidth = width * 0.8;
    const barHeight = height * 0.3;

    // Volledige balk
    ctx.fillStyle = "#e8e8e8";
    ctx.fillRect(
      barX,
      barY,
      barWidth,
      barHeight
    );

    // Percentage
    ctx.fillStyle = "#4caf50";
    ctx.fillRect(
      barX,
      barY,
      barWidth * percentage / 100,
      barHeight
    );

    // Rand
    ctx.strokeRect(
      barX,
      barY,
      barWidth,
      barHeight
    );

    readout.innerHTML = `
      <strong>${percentage}%</strong>
      =
      ${percentage}/100
      =
      ${(percentage / 100).toLocaleString("nl-BE")}
    `;
  }

  slider.addEventListener("input", draw);

  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();
}

function mountPlot(root) {
  root.innerHTML = widgetShell("Functieplot", "Sleep a en b. Zet de parabool aan voor x².",
    `<canvas></canvas>
     <div class="widget-controls">
       <label>a <input type="range" min="-3" max="3" step="0.1" value="1" data-k="a"> <output data-o="a">1</output></label>
       <label>b <input type="range" min="-5" max="5" step="0.1" value="0" data-k="b"> <output data-o="b">0</output></label>
       <label class="chk"><input type="checkbox" data-k="quad"> parabool ax² + b</label>
     </div>`);
  const canvas = root.querySelector("canvas");
  const aEl = root.querySelector("[data-k=a]");
  const bEl = root.querySelector("[data-k=b]");
  const qEl = root.querySelector("[data-k=quad]");
  const draw = () => {
    const a = Number(aEl.value), b = Number(bEl.value), quad = qEl.checked;
    root.querySelector("[data-o=a]").textContent = a;
    root.querySelector("[data-o=b]").textContent = b;
    const { ctx, w, h } = prepCanvas(canvas);
    const { sx, sy } = axes(ctx, w, h, { xMin: -6, xMax: 6, yMin: -8, yMax: 8 });
    ctx.strokeStyle = "#e6c77a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= 200; i++) {
      const x = -6 + i * 12 / 200;
      const y = quad ? a * x * x + b : a * x + b;
      const X = sx(x), Y = sy(y);
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
  };
  [aEl, bEl, qEl].forEach((el) => el.addEventListener("input", draw));
  draw();
}

function mountTangent(root) {
  root.innerHTML = widgetShell("Secant → raaklijn", "f(x)=x². Maak h klein en zie de secant de raaklijn naderen.",
    `<canvas></canvas>
     <div class="widget-controls">
       <label>x₀ <input type="range" min="-2" max="2" step="0.05" value="1" data-k="x0"> <output data-o="x0">1</output></label>
       <label>h <input type="range" min="0.05" max="2" step="0.05" value="1" data-k="h"> <output data-o="h">1</output></label>
     </div>
     <p class="widget-readout"></p>`);
  const canvas = root.querySelector("canvas");
  const xEl = root.querySelector("[data-k=x0]");
  const hEl = root.querySelector("[data-k=h]");
  const note = root.querySelector(".widget-readout");
  const f = (x) => x * x;
  const draw = () => {
    const x0 = Number(xEl.value), h = Number(hEl.value);
    root.querySelector("[data-o=x0]").textContent = x0.toFixed(2);
    root.querySelector("[data-o=h]").textContent = h.toFixed(2);
    const sec = (f(x0 + h) - f(x0)) / h;
    const tan = 2 * x0;
    let msg = "Maak h kleiner. Secant = " + sec.toFixed(2) + " · raaklijn f'(" + x0.toFixed(2) + ") = " + tan.toFixed(2);
    if (h <= 0.15 && Math.abs(sec - tan) < 0.08) {
      msg += " · Ontdekking ontgrendeld: de afgeleide is de limiet van de secanthelling.";
    }
    note.textContent = msg;
    const { ctx, w, h: H } = prepCanvas(canvas);
    const world = { xMin: -3, xMax: 3, yMin: -1, yMax: 9 };
    const { sx, sy } = axes(ctx, w, H, world);
    ctx.strokeStyle = "#e6c77a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= 200; i++) {
      const x = -3 + i * 6 / 200;
      const X = sx(x), Y = sy(f(x));
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    const line = (slope, color, width) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(sx(-3), sy(f(x0) + slope * (-3 - x0)));
      ctx.lineTo(sx(3), sy(f(x0) + slope * (3 - x0)));
      ctx.stroke();
    };
    line(sec, "#7dcea0", 2);
    line(tan, "#e07a6a", 1.5);
    ctx.fillStyle = "#fff6df";
    ctx.beginPath(); ctx.arc(sx(x0), sy(f(x0)), 5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(sx(x0 + h), sy(f(x0 + h)), 5, 0, Math.PI * 2); ctx.fill();
  };
  [xEl, hEl].forEach((el) => el.addEventListener("input", draw));
  draw();
}

function mountRiemann(root) {
  root.innerHTML = widgetShell("Riemannsommen", "Oppervlakte onder y=x op [0,2]. Meer stroken → dichter bij 2.",
    `<canvas></canvas>
     <div class="widget-controls">
       <label>stroken <input type="range" min="2" max="40" step="1" value="4" data-k="n"> <output data-o="n">4</output></label>
     </div>
     <p class="widget-readout"></p>`);
  const canvas = root.querySelector("canvas");
  const nEl = root.querySelector("[data-k=n]");
  const note = root.querySelector(".widget-readout");
  const draw = () => {
    const n = Number(nEl.value);
    root.querySelector("[data-o=n]").textContent = n;
    const a = 0, b = 2, dx = (b - a) / n;
    let sum = 0;
    const { ctx, w, h } = prepCanvas(canvas);
    const { sx, sy } = axes(ctx, w, h, { xMin: -0.3, xMax: 2.4, yMin: -0.2, yMax: 2.4 });
    ctx.fillStyle = "rgba(230,199,122,0.28)";
    ctx.strokeStyle = "#e6c77a";
    for (let i = 0; i < n; i++) {
      const x = a + i * dx;
      const y = x;
      sum += y * dx;
      ctx.fillRect(sx(x), sy(y), sx(x + dx) - sx(x), sy(0) - sy(y));
      ctx.strokeRect(sx(x), sy(y), sx(x + dx) - sx(x), sy(0) - sy(y));
    }
    ctx.strokeStyle = "#fff6df";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(0));
    ctx.lineTo(sx(2), sy(2));
    ctx.stroke();
    note.textContent = `som ≈ ${sum.toFixed(3)} · exact ∫₀² x dx = 2`;
  };
  nEl.addEventListener("input", draw);
  draw();
}

function mountVectors(root) {
  root.innerHTML = widgetShell("Vectoren", "Twee pijlen en hun som. Sleep de schaal van de x-as.",
    `<canvas></canvas>
     <div class="widget-controls">
       <label>uₓ <input type="range" min="-3" max="3" step="0.1" value="2" data-k="ux"> <output data-o="ux">2</output></label>
       <label>uᵧ <input type="range" min="-3" max="3" step="0.1" value="1" data-k="uy"> <output data-o="uy">1</output></label>
       <label>vₓ <input type="range" min="-3" max="3" step="0.1" value="-1" data-k="vx"> <output data-o="vx">-1</output></label>
       <label>vᵧ <input type="range" min="-3" max="3" step="0.1" value="2" data-k="vy"> <output data-o="vy">2</output></label>
     </div>
     <p class="widget-readout"></p>`);
  const canvas = root.querySelector("canvas");
  const keys = ["ux", "uy", "vx", "vy"];
  const els = Object.fromEntries(keys.map((k) => [k, root.querySelector(`[data-k=${k}]`)]));
  const note = root.querySelector(".widget-readout");
  const arrow = (ctx, sx, sy, x, y, color) => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(0));
    ctx.lineTo(sx(x), sy(y));
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(sx(x), sy(y), 4, 0, Math.PI * 2);
    ctx.fill();
  };
  const draw = () => {
    const ux = Number(els.ux.value), uy = Number(els.uy.value);
    const vx = Number(els.vx.value), vy = Number(els.vy.value);
    keys.forEach((k) => { root.querySelector(`[data-o=${k}]`).textContent = Number(els[k].value); });
    const { ctx, w, h } = prepCanvas(canvas);
    const { sx, sy } = axes(ctx, w, h, { xMin: -4, xMax: 4, yMin: -4, yMax: 4 });
    arrow(ctx, sx, sy, ux, uy, "#7dcea0");
    arrow(ctx, sx, sy, vx, vy, "#6ab0e0");
    arrow(ctx, sx, sy, ux + vx, uy + vy, "#e6c77a");
    note.textContent = `u+v = (${(ux + vx).toFixed(1)}, ${(uy + vy).toFixed(1)})`;
  };
  keys.forEach((k) => els[k].addEventListener("input", draw));
  draw();
}

function mountComplex(root) {
  root.innerHTML = widgetShell("Complex vlak", "Van a+bi naar een punt in het vlak.",
    `<canvas></canvas>
     <div class="widget-controls">
       <label>a <input type="range" min="-4" max="4" step="0.1" value="2" data-k="a"> <output data-o="a">2</output></label>
       <label>b <input type="range" min="-4" max="4" step="0.1" value="1" data-k="b"> <output data-o="b">1</output></label>
     </div>
     <p class="widget-readout"></p>`);
  const canvas = root.querySelector("canvas");
  const aEl = root.querySelector("[data-k=a]"), bEl = root.querySelector("[data-k=b]");
  const note = root.querySelector(".widget-readout");
  const draw = () => {
    const a = Number(aEl.value), b = Number(bEl.value);
    root.querySelector("[data-o=a]").textContent = a;
    root.querySelector("[data-o=b]").textContent = b;
    const { ctx, w, h } = prepCanvas(canvas);
    const { sx, sy } = axes(ctx, w, h, { xMin: -5, xMax: 5, yMin: -5, yMax: 5 });
    ctx.fillStyle = "#e6c77a";
    ctx.beginPath(); ctx.arc(sx(a), sy(b), 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#fff6df";
    ctx.font = "13px Cinzel, serif";
    ctx.fillText(`${a} + ${b}i`, sx(a) + 8, sy(b) - 8);
    note.textContent = `|z| = √(${a}² + ${b}²) ≈ ${Math.hypot(a, b).toFixed(2)}`;
  };
  [aEl, bEl].forEach((el) => el.addEventListener("input", draw));
  draw();
}

function mountUnitcircle(root) {
  root.innerHTML = widgetShell("Eenheidscirkel", "Kies een hoek en zie cosinus en sinus.",
    `<canvas data-h="220"></canvas>
     <div class="widget-controls">
       <label>hoek ° <input type="range" min="0" max="360" step="1" value="45" data-k="deg"> <output data-o="deg">45</output></label>
     </div>
     <p class="widget-readout"></p>`);
  const canvas = root.querySelector("canvas"), degEl = root.querySelector("[data-k=deg]"), note = root.querySelector(".widget-readout");
  const draw = () => {
    const deg = Number(degEl.value), a = deg * Math.PI / 180;
    root.querySelector("[data-o=deg]").textContent = deg;
    const { ctx, w, h } = prepCanvas(canvas);
    const r = Math.min(w, h) * 0.35, cx = w / 2, cy = h / 2;
    ctx.fillStyle = "#0d0b08"; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(230,199,122,0.35)"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - r - 12, cy); ctx.lineTo(cx + r + 12, cy); ctx.moveTo(cx, cy - r - 12); ctx.lineTo(cx, cy + r + 12); ctx.stroke();
    const x = cx + r * Math.cos(a), y = cy - r * Math.sin(a);
    ctx.strokeStyle = "#e6c77a"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y); ctx.stroke();
    ctx.fillStyle = "#e6c77a"; ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill();
    note.textContent = `cos(${deg}°) ≈ ${Math.cos(a).toFixed(3)} · sin(${deg}°) ≈ ${Math.sin(a).toFixed(3)}`;
  };
  degEl.addEventListener("input", draw);
  draw();
}

function mountSine(root) {
  root.innerHTML = widgetShell("Sinusgolf", "Amplitude A. De golf herhaalt zich.",
    `<canvas data-h="180"></canvas>
     <div class="widget-controls">
       <label>A <input type="range" min="0.2" max="2" step="0.1" value="1" data-k="A"> <output data-o="A">1</output></label>
     </div>`);
  const canvas = root.querySelector("canvas");
  const aEl = root.querySelector("[data-k=A]");
  const draw = () => {
    const A = Number(aEl.value);
    root.querySelector("[data-o=A]").textContent = String(A);
    const { ctx, w, h } = prepCanvas(canvas);
    const { sx, sy } = axes(ctx, w, h, { xMin: 0, xMax: 4 * Math.PI, yMin: -2.2, yMax: 2.2 });
    ctx.strokeStyle = "#e6c77a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= 200; i++) {
      const x = i / 200 * 4 * Math.PI;
      const X = sx(x), Y = sy(A * Math.sin(x));
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
  };
  aEl.addEventListener("input", draw);
  draw();
}

const WIDGET_BUILDERS = {
  numberline: mountNumberline,
  nats: mountNats,
  ints: mountInts,
  groups: mountGroups,
  smartmult: mountSmartMultiplication,
  divisionGroups: mountDivisionGroups,
  divisionRemainder: mountDivisionRemainder,
  smartdivision: mountSmartDivision,
  commutative: mountCommutative,
  associative: mountAssociative,
  fractionVisual: mountFractionVisual,
  percentageBar: mountPercentageBar,
  plot: mountPlot,
  tangent: mountTangent,
  riemann: mountRiemann,
  vectors: mountVectors,
  complex: mountComplex,
  unitcircle: mountUnitcircle,
  sine: mountSine
};

function mountWidgets(root, milestoneId) {
  const page = document.getElementById("app") || root;
  if (!root || !page) return;

  // Preferred API: the lesson itself decides where an interactive widget belongs.
  // Example: <div data-widget="groups"></div>
  const slots = Array.from(page.querySelectorAll("[data-widget]"));
  if (slots.length) {
    slots.forEach((slot) => {
      const kind = slot.getAttribute("data-widget");
      const builder = WIDGET_BUILDERS[kind];
      if (builder) builder(slot);
    });
    return;
  }


}
