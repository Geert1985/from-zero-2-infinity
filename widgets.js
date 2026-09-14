const WIDGET_MAP = {
  "1.1": ["nats"],
  "1.2": ["groups"],
  "1.3": ["ints"],
  "2.3": ["plot"],
  "2.4": ["unitcircle", "sine"],
  "3.2": ["tangent"],
  "3.3": ["riemann"],
  "4.1": ["vectors"],
  "5.1": ["complex"]
};

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
  let sx, sy;
  if (opts && opts.iso) {
    const spanX = xMax - xMin, spanY = yMax - yMin;
    const innerW = Math.max(1, w - 2 * pad);
    const innerH = Math.max(1, h - 2 * pad);
    const scale = Math.min(innerW / spanX, innerH / spanY);
    const ox = pad + (innerW - spanX * scale) / 2;
    const oy = pad + (innerH - spanY * scale) / 2;
    sx = (x) => ox + (x - xMin) * scale;
    sy = (y) => h - oy - (y - yMin) * scale;
  } else {
    sx = (x) => pad + (x - xMin) / (xMax - xMin) * (w - 2 * pad);
    sy = (y) => h - pad - (y - yMin) / (yMax - yMin) * (h - 2 * pad);
  }
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

function mountNumberline(root, spec) {
  const min = spec.min;
  const max = spec.max;
  const hint = spec.hint;
  const start = spec.start;
  root.innerHTML = widgetShell("Getallenlijn", hint,
    `<canvas data-h="120"></canvas>
     <div class="widget-controls">
       <label>Getal <input type="range" min="${min}" max="${max}" step="1" value="${start}" data-k="v"> <output>${start}</output></label>
     </div>`);
  const canvas = root.querySelector("canvas");
  const range = root.querySelector("[data-k=v]");
  const out = root.querySelector("output");
  const draw = () => {
    const v = Math.round(Number(range.value));
    range.value = String(v);
    out.textContent = String(v);
    const { ctx, w, h } = prepCanvas(canvas);
    const { sx, sy } = axes(ctx, w, h, { xMin: min, xMax: max, yMin: -1, yMax: 1 }, { noY: true });
    ctx.fillStyle = "#e6c77a";
    ctx.beginPath();
    ctx.arc(sx(v), sy(0), 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff6df";
    ctx.font = "13px Cinzel, serif";
    ctx.fillText(String(v), sx(v) - 8, sy(0) - 14);
  };
  range.addEventListener("input", draw);
  draw();
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
      const y = x; // left Riemann for y=x
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
    const { sx, sy } = axes(ctx, w, h, { xMin: -4, xMax: 4, yMin: -4, yMax: 4 }, { iso: true });
    arrow(ctx, sx, sy, ux, uy, "#7dcea0");
    arrow(ctx, sx, sy, vx, vy, "#6ab0e0");
    arrow(ctx, sx, sy, ux + vx, uy + vy, "#e6c77a");
    note.textContent = `u+v = (${(ux + vx).toFixed(1)}, ${(uy + vy).toFixed(1)})`;
  };
  keys.forEach((k) => els[k].addEventListener("input", draw));
  draw();
}

function mountComplex(root) {
  root.innerHTML = widgetShell("Complex vlak", "z en i·z. Vermenigvuldigen met i is 90° tegenwijzerzin.",
    `<canvas></canvas>
     <div class="widget-controls">
       <label>Re <input type="range" min="-3" max="3" step="0.1" value="1" data-k="re"> <output data-o="re">1</output></label>
       <label>Im <input type="range" min="-3" max="3" step="0.1" value="1" data-k="im"> <output data-o="im">1</output></label>
     </div>
     <p class="widget-readout"></p>`);
  const canvas = root.querySelector("canvas");
  const reEl = root.querySelector("[data-k=re]");
  const imEl = root.querySelector("[data-k=im]");
  const note = root.querySelector(".widget-readout");
  const draw = () => {
    const re = Number(reEl.value), im = Number(imEl.value);
    root.querySelector("[data-o=re]").textContent = re;
    root.querySelector("[data-o=im]").textContent = im;
    const { ctx, w, h } = prepCanvas(canvas);
    const { sx, sy } = axes(ctx, w, h, { xMin: -4, xMax: 4, yMin: -4, yMax: 4 }, { iso: true });
    const dot = (x, y, color, label) => {
      ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(sx(x), sy(y), 6, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = color;
      ctx.beginPath(); ctx.moveTo(sx(0), sy(0)); ctx.lineTo(sx(x), sy(y)); ctx.stroke();
      ctx.fillStyle = "#fff6df";
      ctx.font = "12px 'Source Sans 3', sans-serif";
      ctx.fillText(label, sx(x) + 6, sy(y) - 6);
    };
    dot(re, im, "#7dcea0", "z");
    dot(-im, re, "#e6c77a", "i·z");
    const mod = Math.hypot(re, im);
    note.textContent = `|z| = ${mod.toFixed(2)} · i·z = ${(-im).toFixed(1)} + ${re.toFixed(1)}i`;
  };
  [reEl, imEl].forEach((el) => el.addEventListener("input", draw));
  draw();
}

function mountUnitcircle(root) {
  root.innerHTML = widgetShell("Eenheidscirkel", "Draai de hoek. cos is de x-coördinaat, sin de y-coördinaat.",
    `<canvas data-h="280"></canvas>
     <div class="widget-controls">
       <label>α (°) <input type="range" min="0" max="360" step="1" value="45" data-k="deg"> <output data-o="deg">45</output></label>
     </div>
     <p class="widget-readout"></p>`);
  const canvas = root.querySelector("canvas");
  const degEl = root.querySelector("[data-k=deg]");
  const note = root.querySelector(".widget-readout");
  const draw = () => {
    const deg = Number(degEl.value);
    const rad = deg * Math.PI / 180;
    const c = Math.cos(rad), s = Math.sin(rad);
    root.querySelector("[data-o=deg]").textContent = String(deg);
    note.textContent = "cos(" + deg + "°) ≈ " + c.toFixed(2) + " · sin(" + deg + "°) ≈ " + s.toFixed(2);
    const { ctx, w, h } = prepCanvas(canvas);
    const { sx, sy } = axes(ctx, w, h, { xMin: -1.4, xMax: 1.4, yMin: -1.4, yMax: 1.4 }, { iso: true });
    ctx.strokeStyle = "#e6c77a";
    ctx.beginPath();
    ctx.arc(sx(0), sy(0), Math.abs(sx(1) - sx(0)), 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "#fff6df";
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(0));
    ctx.lineTo(sx(c), sy(s));
    ctx.stroke();
    ctx.strokeStyle = "#6ab0e0";
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(0));
    ctx.lineTo(sx(c), sy(0));
    ctx.stroke();
    ctx.strokeStyle = "#7dcea0";
    ctx.beginPath();
    ctx.moveTo(sx(c), sy(0));
    ctx.lineTo(sx(c), sy(s));
    ctx.stroke();
    ctx.fillStyle = "#fff6df";
    ctx.beginPath();
    ctx.arc(sx(c), sy(s), 5, 0, Math.PI * 2);
    ctx.fill();
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

function mountNats(root) {
  mountNumberline(root, {
    min: 0, max: 20, start: 3,
    hint: "Natuurlijke getallen: 0, 1, 2, … Geen minteken, geen komma."
  });
}

function mountInts(root) {
  mountNumberline(root, {
    min: -10, max: 10, start: 3,
    hint: "Gehele getallen: …, −2, −1, 0, 1, 2, … Stap 1, geen komma."
  });
}

const WIDGET_BUILDERS = {
  nats: mountNats,
  ints: mountInts,
  plot: mountPlot,
  tangent: mountTangent,
  riemann: mountRiemann,
  vectors: mountVectors,
  complex: mountComplex,
  unitcircle: mountUnitcircle,
  sine: mountSine,
  groups: mountGroups
};

function mountWidgets(root, milestoneId) {
  const page = document.getElementById("app") || root;
  const slots = page.querySelectorAll("[data-widget]");
  if (slots.length) {
    slots.forEach((slot) => {
      const kind = slot.getAttribute("data-widget");
      (WIDGET_BUILDERS[kind] || (() => {}))(slot);
    });
    return;
  }
  const kinds = WIDGET_MAP[milestoneId] || [];
  if (!kinds.length || !root) return;
  const dock = document.createElement("div");
  dock.className = "widget-dock";
  root.appendChild(dock);
  kinds.forEach((kind) => {
    const box = document.createElement("div");
    dock.appendChild(box);
    (WIDGET_BUILDERS[kind] || (() => {}))(box);
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
    note.textContent = `${groups} groepjes van ${items} = ${addition} = ${total} · ${groups} × ${items} = ${total}`;
  };
  [groupsEl, itemsEl].forEach((el) => el.addEventListener("input", draw));
  draw();
}
