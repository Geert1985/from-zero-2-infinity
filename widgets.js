
function widgetShell(title, hint, body) {
  return `<section class="widget">
    <header class="widget-header"><strong>${title}</strong><span>${hint}</span></header>
    ${body}
  </section>`;
}

function paintRangeFill(el) {
  if (!el || el.type !== "range") return;
  const min = Number(el.min === "" ? 0 : el.min);
  const max = Number(el.max === "" ? 100 : el.max);
  const val = Number(el.value);
  const pct = max === min ? 0 : ((val - min) / (max - min)) * 100;
  el.style.setProperty("--fill", pct + "%");
}

function bindWidgetRanges(scope) {
  if (!scope) return;
  scope.querySelectorAll("input[type=range]").forEach((el) => {
    if (el.dataset.goldBound === "1") return;
    el.dataset.goldBound = "1";
    paintRangeFill(el);
    el.addEventListener("input", () => paintRangeFill(el));
  });
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

function mountFractionWhole(root) {
  root.innerHTML = widgetShell(
    "Verdeel het geheel",
    "Verdeel een geheel in gelijke delen en neem er een aantal.",
    `
      <div class="fraction-whole-widget">

        <div class="fraction-controls">

          <div class="fraction-control">
            <label>
              <span>Aantal gelijke delen</span>
              <strong class="fraction-denominator-value">5</strong>
            </label>

            <input
              type="range"
              class="fraction-denominator"
              min="2"
              max="12"
              value="5"
            >
          </div>

          <div class="fraction-control">
            <label>
              <span>Aantal genomen delen</span>
              <strong class="fraction-numerator-value">2</strong>
            </label>

            <input
              type="range"
              class="fraction-numerator"
              min="1"
              max="5"
              value="2"
            >
          </div>

        </div>

        <div class="fraction-canvas-container">
          <canvas
            class="fraction-whole-canvas"
            width="760"
            height="150"
          ></canvas>
        </div>

        <div class="fraction-result">

          <div class="fraction-large">
            <span class="fraction-num">2</span>
            <span class="fraction-line"></span>
            <span class="fraction-den">5</span>
          </div>

          <div class="fraction-explanation">
            2 van de 5 gelijke delen
          </div>

        </div>

      </div>
    `
  );

  /*
   * Geef de widget een eigen class zodat we
   * ook de header van widgetShell specifiek
   * kunnen aanpassen.
   */
  const widget =
    root.querySelector(".widget");

  if (widget) {
    widget.classList.add("fraction-whole-widget-shell");
  }


  const denominatorSlider =
    root.querySelector(".fraction-denominator");

  const numeratorSlider =
    root.querySelector(".fraction-numerator");

  const denominatorValue =
    root.querySelector(".fraction-denominator-value");

  const numeratorValue =
    root.querySelector(".fraction-numerator-value");

  const canvas =
    root.querySelector(".fraction-whole-canvas");

  const container =
    root.querySelector(".fraction-canvas-container");

  const fractionNum =
    root.querySelector(".fraction-num");

  const fractionDen =
    root.querySelector(".fraction-den");

  const explanation =
    root.querySelector(".fraction-explanation");

  const ctx =
    canvas.getContext("2d");


  /*
   * Canvas voorbereiden.
   *
   * We gebruiken een vaste tekenhoogte en
   * passen alleen de resolutie aan wanneer
   * de beschikbare breedte verandert.
   */
  function resizeCanvas() {

    const width =
      Math.max(
        300,
        Math.floor(container.clientWidth)
      );

    const height = 150;

    const dpr =
      window.devicePixelRatio || 1;

    canvas.width =
      Math.round(width * dpr);

    canvas.height =
      Math.round(height * dpr);

    canvas.style.width =
      width + "px";

    canvas.style.height =
      height + "px";

    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );

    draw();
  }


  /*
   * Teken de breuk.
   */
  function draw() {

    const denominator =
      Number(denominatorSlider.value);

    let numerator =
      Number(numeratorSlider.value);

    if (numerator > denominator) {
      numerator = denominator;
      numeratorSlider.value = denominator;
    }

    numeratorSlider.max = denominator;


    /*
     * Waarden bij de sliders
     */
    denominatorValue.textContent =
      denominator;

    numeratorValue.textContent =
      numerator;


    /*
     * Resultaat
     */
    fractionNum.textContent =
      numerator;

    fractionDen.textContent =
      denominator;

    explanation.textContent =
      `${numerator} van de ${denominator} gelijke delen`;


    /*
     * Canvas leegmaken
     */
    const width =
      canvas.clientWidth;

    const height = 150;

    ctx.clearRect(
      0,
      0,
      width,
      height
    );


    /*
     * Breukbalk.
     *
     * Maximaal 700 px breed zodat hij
     * nooit overdreven groot wordt.
     */
    const barWidth =
      Math.min(width - 30, 700);

    const barHeight = 58;

    const barX =
      (width - barWidth) / 2;

    const barY = 25;

    const partWidth =
      barWidth / denominator;


    /*
     * Achtergrond van het geheel
     */
    ctx.fillStyle =
      "rgba(235, 240, 246, 0.92)";

    ctx.fillRect(
      barX,
      barY,
      barWidth,
      barHeight
    );


    /*
     * Gekozen delen
     */
    ctx.fillStyle =
      "#4f7cff";

    ctx.fillRect(
      barX,
      barY,
      partWidth * numerator,
      barHeight
    );


    /*
     * Buitenrand
     */
    ctx.strokeStyle =
      "rgba(255,255,255,0.9)";

    ctx.lineWidth = 2;

    ctx.strokeRect(
      barX,
      barY,
      barWidth,
      barHeight
    );


    /*
     * Verdelingslijnen
     */
    for (let i = 1; i < denominator; i++) {

      const x =
        barX + i * partWidth;

      ctx.beginPath();

      ctx.moveTo(
        x,
        barY
      );

      ctx.lineTo(
        x,
        barY + barHeight
      );

      ctx.strokeStyle =
        "rgba(255,255,255,0.95)";

      ctx.lineWidth = 2;

      ctx.stroke();
    }


    /*
     * Nummering
     */
    ctx.font =
      "14px sans-serif";

    ctx.textAlign =
      "center";

    ctx.textBaseline =
      "top";

    for (let i = 0; i < denominator; i++) {

      const x =
        barX +
        i * partWidth +
        partWidth / 2;

      ctx.fillStyle =
        "rgba(255,255,255,0.75)";

      ctx.fillText(
        String(i + 1),
        x,
        barY + barHeight + 7
      );
    }
  }


  /*
   * Alleen tekenen bij sliderbeweging.
   * Geen resize → geen verspringen/zoomen.
   */
  denominatorSlider.addEventListener(
    "input",
    draw
  );

  numeratorSlider.addEventListener(
    "input",
    draw
  );


  /*
   * ResizeObserver uitsluitend voor echte
   * wijzigingen in de beschikbare ruimte.
   */
  if (typeof ResizeObserver !== "undefined") {

    const observer =
      new ResizeObserver(() => {
        resizeCanvas();
      });

    observer.observe(container);

  } else {

    window.addEventListener(
      "resize",
      resizeCanvas
    );
  }


  resizeCanvas();
}

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

function mountFractionNumberLine(root) {
  root.innerHTML = widgetShell(
    "Breuk op de getallenlijn",
    "Verander de teller en noemer en bekijk waar de breuk ligt.",
    `
      <div class="fraction-nl-widget">

        <div class="fraction-controls">

          <div class="fraction-control">
            <label>
              <span>Noemer</span>
              <strong class="fnl-den-value">4</strong>
            </label>
            <input
              type="range"
              class="fnl-den"
              min="2"
              max="12"
              value="4"
            >
          </div>

          <div class="fraction-control">
            <label>
              <span>Teller</span>
              <strong class="fnl-num-value">3</strong>
            </label>
            <input
              type="range"
              class="fnl-num"
              min="0"
              max="4"
              value="3"
            >
          </div>

        </div>

        <div class="fraction-canvas-container">
          <canvas
            class="fraction-numberline-canvas"
            width="760"
            height="170"
          ></canvas>
        </div>

        <div class="fraction-nl-result">
          <strong class="fnl-result-fraction">3/4</strong>
          <span class="fnl-result-text">
            ligt tussen 0 en 1
          </span>
        </div>

      </div>
    `
  );

  const denSlider = root.querySelector(".fnl-den");
  const numSlider = root.querySelector(".fnl-num");

  const denValue = root.querySelector(".fnl-den-value");
  const numValue = root.querySelector(".fnl-num-value");

  const canvas = root.querySelector(".fraction-numberline-canvas");
  const container = root.querySelector(".fraction-canvas-container");

  const resultFraction =
    root.querySelector(".fnl-result-fraction");

  const resultText =
    root.querySelector(".fnl-result-text");

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const width = Math.max(300, Math.floor(container.clientWidth));
    const height = 170;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    draw();
  }

  function draw() {
    const denominator = Number(denSlider.value);
    let numerator = Number(numSlider.value);

    if (numerator > denominator) {
      numerator = denominator;
      numSlider.value = denominator;
    }

    numSlider.max = denominator;

    denValue.textContent = denominator;
    numValue.textContent = numerator;

    resultFraction.textContent =
      `${numerator}/${denominator}`;

    const value = numerator / denominator;

    if (value === 0) {
      resultText.textContent = "ligt op 0";
    } else if (value === 1) {
      resultText.textContent = "ligt op 1";
    } else {
      resultText.textContent =
        "ligt tussen 0 en 1";
    }

    const width = canvas.clientWidth;
    const height = 170;

    ctx.clearRect(0, 0, width, height);

    const left = 35;
    const right = width - 35;
    const y = 85;
    const lineWidth = right - left;

    /*
     * Getallenlijn
     */
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(right, y);

    ctx.strokeStyle = "rgba(255,255,255,0.8)";
    ctx.lineWidth = 2;
    ctx.stroke();

    /*
     * Pijlen
     */
    ctx.beginPath();
    ctx.moveTo(right, y);
    ctx.lineTo(right - 8, y - 5);
    ctx.lineTo(right - 8, y + 5);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.fill();

    /*
     * Verdeel 0 tot 1 in gelijke delen.
     */
    for (let i = 0; i <= denominator; i++) {
      const x =
        left + (lineWidth * i / denominator);

      ctx.beginPath();
      ctx.moveTo(x, y - 9);
      ctx.lineTo(x, y + 9);

      ctx.strokeStyle =
        "rgba(255,255,255,0.8)";

      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.font = "13px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";

      ctx.fillStyle =
        "rgba(255,255,255,0.8)";

      if (i === 0) {
        ctx.fillText("0", x, y + 16);
      } else if (i === denominator) {
        ctx.fillText("1", x, y + 16);
      }
    }

    /*
     * Breukpositie
     */
    const fractionX =
      left + lineWidth * value;

    ctx.beginPath();
    ctx.arc(
      fractionX,
      y,
      9,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = "#4f7cff";
    ctx.fill();

    /*
     * Breuklabel
     */
    ctx.font = "bold 16px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";

    ctx.fillStyle = "#ffffff";

    ctx.fillText(
      `${numerator}/${denominator}`,
      fractionX,
      y - 15
    );
  }

  denSlider.addEventListener("input", draw);
  numSlider.addEventListener("input", draw);

  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(() => {
      resizeCanvas();
    });

    observer.observe(container);
  } else {
    window.addEventListener("resize", resizeCanvas);
  }

  resizeCanvas();
}

function mountEquivalentFractions(root) {
  root.innerHTML = widgetShell(
    "Gelijkwaardige breuken",
    "Zie hoe dezelfde hoeveelheid op verschillende manieren kan worden verdeeld.",
    `
      <div class="equivalent-fractions-widget">

        <div class="fraction-controls">

          <div class="fraction-control">
            <label>
              <span>Breuk</span>
              <strong class="ef-num-value">1</strong>
              /
              <strong class="ef-den-value">2</strong>
            </label>

            <input
              type="range"
              class="ef-den"
              min="2"
              max="10"
              value="2"
            >
          </div>

          <div class="fraction-control">
            <label>
              <span>Aantal gelijke breuken</span>
              <strong class="ef-mult-value">1</strong>
            </label>

            <input
              type="range"
              class="ef-mult"
              min="1"
              max="5"
              value="1"
            >
          </div>

        </div>

        <div class="fraction-canvas-container">
          <canvas
            class="equivalent-fractions-canvas"
            width="760"
            height="220"
          ></canvas>
        </div>

        <div class="ef-result">
          <strong class="ef-result-text">
            1/2 = 2/4 = 3/6
          </strong>
        </div>

      </div>
    `
  );

  const denSlider = root.querySelector(".ef-den");
  const multSlider = root.querySelector(".ef-mult");

  const denValue = root.querySelector(".ef-den-value");
  const multValue = root.querySelector(".ef-mult-value");

  const canvas =
    root.querySelector(".equivalent-fractions-canvas");

  const container =
    root.querySelector(".fraction-canvas-container");

  const result =
    root.querySelector(".ef-result-text");

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const width = Math.max(300, Math.floor(container.clientWidth));
    const height = 220;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    draw();
  }

  function draw() {
    const denominator = Number(denSlider.value);
    const multiplier = Number(multSlider.value);

    const numerator = 1;

    denValue.textContent = denominator;
    multValue.textContent = multiplier;

    const equivalentNumerator =
      numerator * multiplier;

    const equivalentDenominator =
      denominator * multiplier;

    result.textContent =
      `1/${denominator} = ` +
      `${equivalentNumerator}/${equivalentDenominator}`;

    const width = canvas.clientWidth;
    const height = 220;

    ctx.clearRect(0, 0, width, height);

    const barWidth =
      Math.min(width - 40, 680);

    const barHeight = 45;
    const x = (width - barWidth) / 2;

    /*
     * Eerste balk
     */
    drawBar(
      x,
      25,
      barWidth,
      barHeight,
      denominator,
      numerator,
      `1/${denominator}`
    );

    /*
     * Tweede balk
     */
    drawBar(
      x,
      110,
      barWidth,
      barHeight,
      equivalentDenominator,
      equivalentNumerator,
      `${equivalentNumerator}/${equivalentDenominator}`
    );
  }

  function drawBar(
    x,
    y,
    width,
    height,
    parts,
    selected,
    label
  ) {
    const partWidth = width / parts;

    ctx.fillStyle =
      "rgba(235,240,246,0.9)";

    ctx.fillRect(
      x,
      y,
      width,
      height
    );

    ctx.fillStyle = "#4f7cff";

    ctx.fillRect(
      x,
      y,
      partWidth * selected,
      height
    );

    ctx.strokeStyle =
      "rgba(255,255,255,0.9)";

    ctx.lineWidth = 2;

    ctx.strokeRect(
      x,
      y,
      width,
      height
    );

    for (let i = 1; i < parts; i++) {
      const px = x + i * partWidth;

      ctx.beginPath();
      ctx.moveTo(px, y);
      ctx.lineTo(px, y + height);

      ctx.stroke();
    }

    ctx.font = "bold 16px sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "#ffffff";

    ctx.fillText(
      label,
      x,
      y - 7
    );
  }

  denSlider.addEventListener("input", draw);
  multSlider.addEventListener("input", draw);

  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(() => {
      resizeCanvas();
    });

    observer.observe(container);
  } else {
    window.addEventListener("resize", resizeCanvas);
  }

  resizeCanvas();
}

function mountCompareFractions(root) {
  root.innerHTML = widgetShell(
    "Vergelijk twee breuken",
    "Stel twee breuken in en ontdek welke groter is.",
    `
      <div class="compare-fractions-widget">

        <div class="compare-controls">

          <div class="compare-fraction-control">

            <strong>Breuk A</strong>

            <label>
              Teller
              <input
                type="range"
                class="cf-a-num"
                min="1"
                max="10"
                value="2"
              >
              <span class="cf-a-num-value">2</span>
            </label>

            <label>
              Noemer
              <input
                type="range"
                class="cf-a-den"
                min="2"
                max="10"
                value="3"
              >
              <span class="cf-a-den-value">3</span>
            </label>

          </div>


          <div class="compare-fraction-control">

            <strong>Breuk B</strong>

            <label>
              Teller
              <input
                type="range"
                class="cf-b-num"
                min="1"
                max="10"
                value="3"
              >
              <span class="cf-b-num-value">3</span>
            </label>

            <label>
              Noemer
              <input
                type="range"
                class="cf-b-den"
                min="2"
                max="10"
                value="5"
              >
              <span class="cf-b-den-value">5</span>
            </label>

          </div>

        </div>

        <div class="fraction-canvas-container">
          <canvas
            class="compare-fractions-canvas"
            width="760"
            height="250"
          ></canvas>
        </div>

        <div class="cf-result">
          <strong class="cf-result-text">2/3 &gt; 3/5</strong>
        </div>

      </div>
    `
  );

  const aNum = root.querySelector(".cf-a-num");
  const aDen = root.querySelector(".cf-a-den");
  const bNum = root.querySelector(".cf-b-num");
  const bDen = root.querySelector(".cf-b-den");

  const aNumValue = root.querySelector(".cf-a-num-value");
  const aDenValue = root.querySelector(".cf-a-den-value");
  const bNumValue = root.querySelector(".cf-b-num-value");
  const bDenValue = root.querySelector(".cf-b-den-value");

  const canvas =
    root.querySelector(".compare-fractions-canvas");

  const container =
    root.querySelector(".fraction-canvas-container");

  const result =
    root.querySelector(".cf-result-text");

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const width = Math.max(300, Math.floor(container.clientWidth));
    const height = 250;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    draw();
  }

  function draw() {
    let an = Number(aNum.value);
    const ad = Number(aDen.value);

    let bn = Number(bNum.value);
    const bd = Number(bDen.value);

    if (an > ad) {
      an = ad;
      aNum.value = ad;
    }

    if (bn > bd) {
      bn = bd;
      bNum.value = bd;
    }

    aNum.max = ad;
    bNum.max = bd;

    aNumValue.textContent = an;
    aDenValue.textContent = ad;

    bNumValue.textContent = bn;
    bDenValue.textContent = bd;

    const a = an / ad;
    const b = bn / bd;

    let symbol = "=";

    if (a > b) symbol = ">";
    if (a < b) symbol = "<";

    result.textContent =
      `${an}/${ad} ${symbol} ${bn}/${bd}`;

    const width = canvas.clientWidth;

    ctx.clearRect(
      0,
      0,
      width,
      250
    );

    const barWidth =
      Math.min(width - 40, 680);

    const barHeight = 45;
    const x = (width - barWidth) / 2;

    drawBar(
      x,
      25,
      barWidth,
      barHeight,
      ad,
      an,
      `${an}/${ad}`
    );

    drawBar(
      x,
      105,
      barWidth,
      barHeight,
      bd,
      bn,
      `${bn}/${bd}`
    );

    /*
     * Getallenlijn
     */
    const y = 190;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + barWidth, y);

    ctx.strokeStyle =
      "rgba(255,255,255,0.8)";

    ctx.lineWidth = 2;
    ctx.stroke();

    /*
     * Positie A
     */
    drawPoint(
      x + barWidth * a,
      y,
      "#4f7cff"
    );

    /*
     * Positie B
     */
    drawPoint(
      x + barWidth * b,
      y,
      "#f2a65a"
    );

    ctx.font = "13px sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#ffffff";

    ctx.fillText("0", x, y + 8);
    ctx.fillText("1", x + barWidth, y + 8);
  }

  function drawBar(
    x,
    y,
    width,
    height,
    denominator,
    numerator,
    label
  ) {
    const partWidth = width / denominator;

    ctx.fillStyle =
      "rgba(235,240,246,0.9)";

    ctx.fillRect(
      x,
      y,
      width,
      height
    );

    ctx.fillStyle = "#4f7cff";

    ctx.fillRect(
      x,
      y,
      partWidth * numerator,
      height
    );

    ctx.strokeStyle =
      "rgba(255,255,255,0.9)";

    ctx.lineWidth = 2;

    ctx.strokeRect(
      x,
      y,
      width,
      height
    );

    for (let i = 1; i < denominator; i++) {
      const px =
        x + i * partWidth;

      ctx.beginPath();
      ctx.moveTo(px, y);
      ctx.lineTo(px, y + height);
      ctx.stroke();
    }

    ctx.font = "bold 15px sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "#ffffff";

    ctx.fillText(
      label,
      x,
      y - 6
    );
  }

  function drawPoint(x, y, color) {
    ctx.beginPath();

    ctx.arc(
      x,
      y,
      7,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = color;
    ctx.fill();
  }

  [aNum, aDen, bNum, bDen].forEach(
    slider => slider.addEventListener("input", draw)
  );

  if (typeof ResizeObserver !== "undefined") {
    const observer = new ResizeObserver(() => {
      resizeCanvas();
    });

    observer.observe(container);
  } else {
    window.addEventListener("resize", resizeCanvas);
  }

  resizeCanvas();
}

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


function mountAlgebraMachine(root) {
  root.innerHTML = widgetShell(
    "Invullen — 3x + 5",
    "Kies een waarde voor x en volg hoe de uitdrukking verandert.",
    `<div class="algebra-flow" aria-live="polite">
       <div class="widget-plate">
         <span class="widget-plate__label">x</span>
         <span class="widget-plate__value" data-k="xval">2</span>
       </div>
       <span class="widget-arrow" aria-hidden="true">→</span>
       <div class="widget-plate widget-plate--wide">
         <span class="widget-plate__value" data-k="substitution">3 · 2 + 5</span>
         <span class="widget-plate__label">regel</span>
       </div>
       <span class="widget-arrow" aria-hidden="true">→</span>
       <div class="widget-plate">
         <span class="widget-plate__value" data-k="result">= 11</span>
       </div>
     </div>
     <div class="widget-controls">
       <label>
         Kies x
         <input type="range" min="-5" max="10" step="1" value="2" data-k="x" aria-label="Waarde van x">
         <output data-o="x">2</output>
       </label>
     </div>
     <p class="widget-readout" data-k="readout">Voor x = 2 is 3x + 5 = 11.</p>`
  );

  const xEl = root.querySelector("[data-k=x]");
  const xOut = root.querySelector("[data-o=x]");
  const substitution = root.querySelector("[data-k=substitution]");
  const result = root.querySelector("[data-k=result]");
  const readout = root.querySelector("[data-k=readout]");

  const draw = function () {
    const x = Number(xEl.value);
    const product = 3 * x;
    const value = product + 5;
    const xText = x < 0 ? "(" + x + ")" : String(x);
    xOut.textContent = String(x);
    const xVal = root.querySelector("[data-k=xval]");
    if (xVal) xVal.textContent = String(x);
    substitution.textContent = "3 · " + xText + " + 5";
    result.textContent = "= " + value;
    readout.textContent = "Voor x = " + x + " is 3x + 5 = " + value + ".";
  };

  xEl.addEventListener("input", draw);
  draw();
}

function mountLineGraph(root) {
  if (!root || root.dataset.mounted === "1") return;
  root.dataset.mounted = "1";
  root.innerHTML =
    '<div class="widget-panel" style="max-width:640px">' +
    '<p class="formula" style="margin:0 0 10px">f(x) = <span data-k="eq"></span></p>' +
    '<div style="display:flex;flex-direction:column;gap:8px;margin:0 0 12px;font-size:15px">' +
    '<label style="display:flex;align-items:center;gap:10px"><span style="width:72px">m = <span data-o="m">2</span></span><input type="range" min="-3" max="3" step="0.5" value="2" data-k="m" style="flex:1"></label>' +
    '<label style="display:flex;align-items:center;gap:10px"><span style="width:72px">b = <span data-o="b">1</span></span><input type="range" min="-4" max="4" step="0.5" value="1" data-k="b" style="flex:1"></label>' +
    '</div>' +
    '<svg viewBox="0 0 320 220" width="100%" aria-label="Grafiek van een rechte">' +
    '<rect width="320" height="220" fill="#161410"/>' +
    '<clipPath id="clip-line"><rect x="20" y="16" width="284" height="188"/></clipPath>' +
    '<line x1="24" y1="110" x2="300" y2="110" stroke="#e6c77a" stroke-width="1.4"/>' +
    '<line x1="160" y1="200" x2="160" y2="20" stroke="#e6c77a" stroke-width="1.4"/>' +
    '<polygon points="300,106 310,110 300,114" fill="#e6c77a"/>' +
    '<polygon points="156,20 160,11 164,20" fill="#e6c77a"/>' +
    '<text x="304" y="102" fill="#e6c77a" font-size="11" font-family="Georgia,serif">x</text>' +
    '<text x="166" y="18" fill="#e6c77a" font-size="11" font-family="Georgia,serif">y</text>' +
    '<line data-k="graph" clip-path="url(#clip-line)" x1="20" y1="110" x2="300" y2="110" stroke="#f3e2b0" stroke-width="1.6"/>' +
    '</svg>' +
    '<p data-k="readout" style="margin:8px 0 0;font-size:14px"></p>' +
    "</div>";

  const mEl = root.querySelector("[data-k=m]");
  const bEl = root.querySelector("[data-k=b]");
  const line = root.querySelector("[data-k=graph]");
  const eq = root.querySelector("[data-k=eq]");
  const readout = root.querySelector("[data-k=readout]");
  const ox = 160, oy = 110, s = 22;
  const fmt = function (n) { return String(n).replace(".", ","); };

  const draw = function () {
    const m = Number(mEl.value);
    const b = Number(bEl.value);
    root.querySelector("[data-o=m]").textContent = fmt(m);
    root.querySelector("[data-o=b]").textContent = fmt(b);
    const x1 = -7, x2 = 7;
    line.setAttribute("x1", ox + s * x1);
    line.setAttribute("y1", oy - s * (m * x1 + b));
    line.setAttribute("x2", ox + s * x2);
    line.setAttribute("y2", oy - s * (m * x2 + b));
    const bTxt = b < 0 ? " − " + fmt(-b) : " + " + fmt(b);
    eq.textContent = fmt(m) + "x" + bTxt;
    readout.textContent = "Helling " + fmt(m) + ", snijpunt met de y-as (0, " + fmt(b) + ").";
  };
  mEl.addEventListener("input", draw);
  bEl.addEventListener("input", draw);
  draw();
}

function mountParabolaGraph(root) {
  if (!root || root.dataset.mounted === "1") return;
  root.dataset.mounted = "1";
  const clipId = "clip-par-" + Math.random().toString(36).slice(2, 7);
  root.innerHTML =
    '<div class="widget-panel" style="max-width:640px;margin:0 auto">' +
    '<p class="formula" style="margin:0 0 10px">f(x) = <span data-k="eq"></span></p>' +
    '<div style="display:flex;flex-direction:column;gap:8px;margin:0 0 12px;font-size:15px">' +
    '<label style="display:flex;align-items:center;gap:10px"><span style="width:80px">a = <span data-o="a">1</span></span><input type="range" min="-2" max="2" step="0.25" value="1" data-k="a" style="flex:1"></label>' +
    '<label style="display:flex;align-items:center;gap:10px"><span style="width:80px">b = <span data-o="b">-4</span></span><input type="range" min="-6" max="6" step="0.5" value="-4" data-k="b" style="flex:1"></label>' +
    '<label style="display:flex;align-items:center;gap:10px"><span style="width:80px">c = <span data-o="c">3</span></span><input type="range" min="-4" max="6" step="0.5" value="3" data-k="c" style="flex:1"></label>' +
    '</div>' +
    '<svg viewBox="0 0 320 220" width="100%" aria-label="Grafiek van een parabool">' +
    '<rect width="320" height="220" fill="#161410"/>' +
    '<clipPath id="' + clipId + '"><rect x="20" y="16" width="284" height="188"/></clipPath>' +
    '<line x1="24" y1="110" x2="300" y2="110" stroke="#e6c77a" stroke-width="1.4"/>' +
    '<line x1="160" y1="200" x2="160" y2="20" stroke="#e6c77a" stroke-width="1.4"/>' +
    '<polygon points="300,106 310,110 300,114" fill="#e6c77a"/>' +
    '<polygon points="156,20 160,11 164,20" fill="#e6c77a"/>' +
    '<text x="304" y="102" fill="#e6c77a" font-size="11" font-family="Georgia,serif">x</text>' +
    '<text x="166" y="18" fill="#e6c77a" font-size="11" font-family="Georgia,serif">y</text>' +
    '<path data-k="graph" clip-path="url(#' + clipId + ')" d="" fill="none" stroke="#f3e2b0" stroke-width="1.6"/>' +
    '</svg>' +
    '<p data-k="readout" style="margin:8px 0 0;font-size:14px"></p>' +
    "</div>";

  const aEl = root.querySelector("[data-k=a]");
  const bEl = root.querySelector("[data-k=b]");
  const cEl = root.querySelector("[data-k=c]");
  const path = root.querySelector("[data-k=graph]");
  const eq = root.querySelector("[data-k=eq]");
  const readout = root.querySelector("[data-k=readout]");
  const ox = 160, oy = 110, s = 22;
  const fmt = function (n) { return String(n).replace(".", ","); };
  const term = function (n, letter) {
    if (n === 0) return "";
    const sign = n < 0 ? " − " : " + ";
    const abs = Math.abs(n);
    const coef = abs === 1 && letter ? "" : fmt(abs);
    return sign + coef + letter;
  };

  const draw = function () {
    const a = Number(aEl.value);
    const b = Number(bEl.value);
    const c = Number(cEl.value);
    root.querySelector("[data-o=a]").textContent = fmt(a);
    root.querySelector("[data-o=b]").textContent = fmt(b);
    root.querySelector("[data-o=c]").textContent = fmt(c);
    const pts = [];
    for (let i = 0; i <= 60; i++) {
      const x = -7 + i * (14 / 60);
      const y = a * x * x + b * x + c;
      pts.push((ox + s * x).toFixed(1) + "," + (oy - s * y).toFixed(1));
    }
    path.setAttribute("d", "M " + pts.join(" L "));
    let eqTxt = (a === -1 ? "−x²" : a === 1 ? "x²" : fmt(a) + "x²");
    eqTxt += term(b, "x") + term(c, "");
    eq.textContent = eqTxt;
    const D = b * b - 4 * a * c;
    let msg;
    if (a === 0) {
      msg = "a = 0: dit is geen parabool meer, maar een rechte.";
    } else {
      msg = "D = " + fmt(D) + ". ";
      if (D > 0) msg += "Twee snijpunten met de x-as.";
      else if (D === 0) msg += "Eén raakpunt met de x-as.";
      else msg += "Geen reële nulpunten.";
      msg += " Top bij x = " + fmt(Number((-b / (2 * a)).toFixed(2))) + ".";
    }
    readout.textContent = msg;
  };
  aEl.addEventListener("input", draw);
  bEl.addEventListener("input", draw);
  cEl.addEventListener("input", draw);
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
  commutative: mountCommutative,
  associative: mountAssociative,
  fractionWhole: mountFractionWhole,
  fractionVisual: mountFractionVisual,
  percentageBar: mountPercentageBar,
  plot: mountPlot,
  tangent: mountTangent,
  riemann: mountRiemann,
  vectors: mountVectors,
  complex: mountComplex,
  unitcircle: mountUnitcircle,
  fractionNumberLine: mountFractionNumberLine,
  equivalentFractions: mountEquivalentFractions,
  compareFractions: mountCompareFractions,
  algebraMachine: mountAlgebraMachine,
  sine: mountSine,
  lineGraph:mountLineGraph,
  parabolaGraph:mountParabolaGraph
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
    bindWidgetRanges(page);
    return;
  }


}

/* Integrated fractionVisual widget fix from fraction-widget-fix.js */
/*
 * Verbeterde breukwidget voor Fase 1.4.
 *
 * Deze override vervangt alleen fractionVisual uit widgets.js.
 * De canvas wordt alleen opnieuw gedimensioneerd wanneer de layout
 * werkelijk verandert; tijdens het bewegen van de sliders wordt
 * uitsluitend de inhoud opnieuw getekend.
 */

function mountFractionVisual(root) {
  if (!root) return;

  root.innerHTML = `
    <section class="widget fraction-visual-widget">
      <header>
        <strong>Breuken zichtbaar maken</strong>
        <span>De noemer verdeelt het geheel, de teller kiest delen.</span>
      </header>

      <div class="fraction-visual-controls">
        <label>
          Noemer
          <input
            type="range"
            class="fraction-denominator"
            min="2"
            max="12"
            step="1"
            value="5"
          >
          <output class="fraction-denominator-value">5</output>
        </label>

        <label>
          Teller
          <input
            type="range"
            class="fraction-numerator"
            min="1"
            max="5"
            step="1"
            value="3"
          >
          <output class="fraction-numerator-value">3</output>
        </label>
      </div>

      <canvas
        class="fraction-visual-canvas"
        aria-label="Visuele voorstelling van een breuk"
      ></canvas>

      <div class="fraction-visual-readout"></div>
    </section>
  `;

  const denominatorSlider = root.querySelector(".fraction-denominator");
  const numeratorSlider = root.querySelector(".fraction-numerator");
  const denominatorValue = root.querySelector(".fraction-denominator-value");
  const numeratorValue = root.querySelector(".fraction-numerator-value");
  const canvas = root.querySelector(".fraction-visual-canvas");
  const readout = root.querySelector(".fraction-visual-readout");
  const ctx = canvas.getContext("2d");

  // Houd de tekenruimte stabiel. De canvashoogte verandert niet tijdens
  // sliderbewegingen, zodat de pagina niet opnieuw gaat schalen.
  canvas.style.display = "block";
  canvas.style.width = "100%";
  canvas.style.height = "250px";
  canvas.style.maxWidth = "100%";
  canvas.style.boxSizing = "border-box";

  let cssWidth = 0;
  let cssHeight = 250;
  let dpr = window.devicePixelRatio || 1;

  function resizeCanvas() {
    const width = Math.max(240, Math.floor(canvas.clientWidth || canvas.parentElement.clientWidth || 240));
    const height = 250;
    const nextDpr = window.devicePixelRatio || 1;

    if (width === cssWidth && height === cssHeight && nextDpr === dpr) {
      return;
    }

    cssWidth = width;
    cssHeight = height;
    dpr = nextDpr;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    draw();
  }

  function draw() {
    const denominator = Number(denominatorSlider.value);
    const numerator = Math.min(Number(numeratorSlider.value), denominator);

    denominatorValue.textContent = String(denominator);
    numeratorValue.textContent = String(numerator);

    if (Number(numeratorSlider.value) !== numerator) {
      numeratorSlider.value = String(numerator);
    }

    // De bestaande canvasgrootte blijft behouden.
    const width = cssWidth || Math.max(240, canvas.clientWidth || 240);
    const height = cssHeight;

    ctx.clearRect(0, 0, width, height);

    const barX = Math.max(20, width * 0.08);
    const barWidth = width - barX * 2;
    const barY = 78;
    const barHeight = 82;
    const radius = 10;

    // Achtergrond van de volledige balk.
    ctx.fillStyle = "rgba(255,255,255,0.055)";
    ctx.strokeStyle = "rgba(230,199,122,0.65)";
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.roundRect(barX, barY, barWidth, barHeight, radius);
    ctx.fill();
    ctx.stroke();

    // De gelijke delen.
    const partWidth = barWidth / denominator;

    for (let i = 0; i < denominator; i++) {
      const x = barX + i * partWidth;
      const selected = i < numerator;

      ctx.fillStyle = selected ? "#6ab0e0" : "rgba(255,246,223,0.08)";
      ctx.fillRect(x + 1, barY + 1, Math.max(0, partWidth - 2), barHeight - 2);

      if (i > 0) {
        ctx.strokeStyle = "rgba(230,199,122,0.5)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, barY);
        ctx.lineTo(x, barY + barHeight);
        ctx.stroke();
      }
    }

    // Teller/noemer groot en centraal boven de balk.
    const fractionCenterX = width / 2;
    const fractionTop = 18;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff6df";
    ctx.font = "700 28px Cinzel, serif";
    ctx.fillText(String(numerator), fractionCenterX, fractionTop + 10);

    ctx.strokeStyle = "#e6c77a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(fractionCenterX - 22, fractionTop + 28);
    ctx.lineTo(fractionCenterX + 22, fractionTop + 28);
    ctx.stroke();

    ctx.fillStyle = "#fff6df";
    ctx.font = "700 28px Cinzel, serif";
    ctx.fillText(String(denominator), fractionCenterX, fractionTop + 50);

    // Nummering onder de delen maakt de koppeling met de noemer expliciet.
    ctx.fillStyle = "#cbb98a";
    ctx.font = "14px 'Source Sans 3', sans-serif";
    ctx.textAlign = "center";

    for (let i = 0; i < denominator; i++) {
      const center = barX + (i + 0.5) * partWidth;
      ctx.fillText(String(i + 1), center, barY + barHeight + 24);
    }

    readout.innerHTML =
      `<strong>${numerator}/${denominator}</strong> = ` +
      `${numerator} van de ${denominator} gelijke delen`;
  }

  denominatorSlider.addEventListener("input", () => {
    const denominator = Number(denominatorSlider.value);
    numeratorSlider.max = String(denominator);

    if (Number(numeratorSlider.value) > denominator) {
      numeratorSlider.value = String(denominator);
    }

    draw();
  });

  numeratorSlider.addEventListener("input", draw);

  // Alleen layoutwijzigingen mogen de canvas opnieuw dimensioneren.
  if (typeof ResizeObserver === "function") {
    const observer = new ResizeObserver(() => resizeCanvas());
    observer.observe(canvas);
  } else {
    window.addEventListener("resize", resizeCanvas);
  }

  // De builder bestaat al in widgets.js; alleen deze implementatie vervangen.
  if (typeof WIDGET_BUILDERS === "object" && WIDGET_BUILDERS) {
    WIDGET_BUILDERS.fractionVisual = mountFractionVisual;
  }

  resizeCanvas();
}

// Vervang de oorspronkelijke builder vóór de widgets worden gemount.
if (typeof WIDGET_BUILDERS === "object" && WIDGET_BUILDERS) {
  WIDGET_BUILDERS.fractionVisual = mountFractionVisual;
}
