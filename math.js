const SUPER = {
  "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4",
  "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9",
  "ⁿ": "n", "ᵐ": "m", "ᵏ": "k", "⁺": "+", "⁻": "-", "ⁱ": "i"
};
const SUB = {
  "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4",
  "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9",
  "ₐ": "a", "ₓ": "x", "ₙ": "n", "ₘ": "m", "ᵢ": "i", "ⱼ": "j"
};

function squeezeScripts(s, map, wrap) {
  const keys = Object.keys(map).join("");
  return s.replace(new RegExp("[" + keys + "]+", "g"), (chunk) =>
    wrap(chunk.split("").map((ch) => map[ch]).join(""))
  );
}

function unicodeToTex(raw) {
  let s = String(raw ?? "");
  s = s.replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
  s = s.replace(/d\/dx/g, "\\frac{\\mathrm{d}}{\\mathrm{d}x}");
  s = s.replace(/lim\s*([a-zA-Z])\s*→\s*([^\s,]+)/g, (_, v, a) => `\\lim_{${v} \\to ${a}}`);
  s = s.replace(/∫([ₐₓₙₘᵢ₀-₉]*)([ᵃᵇⁿᵐ]*)/g, (_, sub, sup) => {
    const to = (chunk, dict) => (chunk || "").split("").map((ch) => dict[ch] || "").join("");
    const lo = to(sub, SUB);
    const hi = to(sup, { "ᵇ": "b", "ᵃ": "a", "ⁿ": "n", "ᵐ": "m" });
    if (lo && hi) return `\\int_{${lo}}^{${hi}}`;
    if (lo) return `\\int_{${lo}}`;
    return "\\int";
  });
  s = squeezeScripts(s, SUPER, (t) => `^{${t}}`);
  s = squeezeScripts(s, SUB, (t) => `_{${t}}`);
  s = s
    .replace(/ℝ/g, "\\mathbb{R}")
    .replace(/ℕ/g, "\\mathbb{N}")
    .replace(/ℤ/g, "\\mathbb{Z}")
    .replace(/ℚ/g, "\\mathbb{Q}")
    .replace(/ℂ/g, "\\mathbb{C}")
    .replace(/π/g, "\\pi{}")
    .replace(/θ/g, "\\theta{}")
    .replace(/α/g, "\\alpha{}")
    .replace(/β/g, "\\beta{}")
    .replace(/ω/g, "\\omega{}")
    .replace(/λ/g, "\\lambda{}")
    .replace(/ε/g, "\\varepsilon{}")
    .replace(/δ/g, "\\delta{}")
    .replace(/∂/g, "\\partial{}")
    .replace(/∇/g, "\\nabla{}")
    .replace(/∞/g, "\\infty")
    .replace(/√\s*\(([^)]+)\)/g, (_, inner) => `\\sqrt{${inner}}`)
    .replace(/√\s*([A-Za-z0-9]+)/g, (_, inner) => `\\sqrt{${inner}}`)
    .replace(/√/g, "\\sqrt{}")
    .replace(/‖([^‖]+)‖/g, (_, inner) => `\\lVert ${inner}\\rVert`)
    .replace(/×/g, "\\times")
    .replace(/÷/g, "\\div")
    .replace(/·/g, "\\cdot")
    .replace(/−/g, "-")
    .replace(/–/g, "-")
    .replace(/→/g, "\\to")
    .replace(/≤/g, "\\le")
    .replace(/≥/g, "\\ge")
    .replace(/≠/g, "\\ne")
    .replace(/≈/g, "\\approx")
    .replace(/⊂/g, "\\subset")
    .replace(/∈/g, "\\in")
    .replace(/∉/g, "\\notin")
    .replace(/≅/g, "\\cong")
    .replace(/°/g, "^\\circ")
    .replace(/′/g, "'")
    .replace(/″/g, "''")
    .replace(/…/g, "\\ldots")
    .replace(/ħ/g, "\\hbar")
    .replace(/½/g, "\\tfrac{1}{2}")
    .replace(/\u00a0/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
  return s;
}

const MATH_RE = /d\/dx(?:\([^)]+\))?(?:\s*=\s*[^\s,;]+(?:\s+[^\s,;]+){0,6})?|lim\s*[A-Za-z]→[^\s,]+(?:\s+\S+){0,8}|∫[^\s,;]{0,24}|e\^\{?[^}]+\}?|\[[^\]]{1,40}\](?:'|′|²|³)?(?:\s*=\s*[^\s,;]+(?:\s*[^\s,;]+){0,8})?|\([^)]{1,28}\)(?:'|′|²|³|ⁿ)?(?:\s*=\s*[^\s,;]+(?:\s*[^\s,;]+){0,8})?|[A-Za-z](?:\([^)]{0,20}\))?(?:'|′|″){1,2}(?:\([^)]{0,16}\))?(?:\s*=\s*[^\s,;]+)?|(?:[^\s,;:]{0,20}[²³ⁿ∫∂∇λπαω√∞ℝℤℕℚℂ′″‖×÷·≤≥≠≈⊂∈∉≅°ħ½][^\s,;:]{0,24})|(?:[A-Za-z0-9()][A-Za-z0-9²³ⁿ₀-₉()+\-−×÷·=/*']{0,28}[=+\-−×÷·/][A-Za-z0-9²³ⁿ₀-₉()+\-−×÷·=/*']{1,28})/g;

const SKIP = /^(en|of|met|van|voor|het|een|de|dat|die|als|dan|niet|ook|maar|tot|bij|naar|uit|aan)$/i;

function isMathChunk(chunk) {
  const t = chunk.trim();
  if (t.length < 2 || t.length > 56 || SKIP.test(t)) return false;
  if (/[A-Za-z]{5,}/.test(t) && !/\\|[∂∇πθα]|sin|cos|tan|log|lim|det|sup|inf/.test(t)) return false;
  if (/[²³ⁿ∫∂∇λπαω√∞ℝℤℕℚℂ′″‖×÷·≤≥≠≈⊂∈∉≅°ħ½^=]/.test(t)) return true;
  if (/d\/dx|lim\s*[A-Za-z]→|f\(|y'|x\^/.test(t)) return true;
  if (/[=+\-×÷·]/.test(t) && /\d/.test(t) && t.length <= 32) return true;
  return false;
}

function renderTex(tex, display) {
  return katex.renderToString(tex, { displayMode: !!display, throwOnError: false, output: "html" });
}

function decorateText(text) {
  MATH_RE.lastIndex = 0;
  let out = "";
  let last = 0;
  let m;
  while ((m = MATH_RE.exec(text))) {
    if (!isMathChunk(m[0])) continue;
    out += text.slice(last, m.index);
    try {
      out += renderTex(unicodeToTex(m[0]), false);
    } catch {
      out += m[0];
    }
    last = m.index + m[0].length;
  }
  out += text.slice(last);
  return out;
}

function typesetMixed(el) {
  if (typeof katex === "undefined" || !el) return;
  if (el.classList.contains("formula") || el.classList.contains("math") || el.closest(".katex, svg, .fig")) return;
  const kids = Array.from(el.childNodes);
  kids.forEach((node) => {
    if (node.nodeType === 3) {
      const raw = node.nodeValue;
      if (!raw || !MATH_RE.test(raw)) {
        MATH_RE.lastIndex = 0;
        return;
      }
      MATH_RE.lastIndex = 0;
      const wrap = document.createElement("span");
      wrap.innerHTML = decorateText(raw);
      node.parentNode.replaceChild(wrap, node);
    } else if (node.nodeType === 1 && !node.classList.contains("katex") && node.tagName !== "SCRIPT") {
      typesetMixed(node);
    }
  });
}

function toTex(s) {
  return /\\[a-zA-Z{]/.test(s) ? s : unicodeToTex(s);
}

function typesetMath(root) {
  if (!root || typeof katex === "undefined") return;
  root.querySelectorAll(".formula").forEach((el) => {
    try {
      katex.render(toTex(el.textContent), el, { displayMode: true, throwOnError: false, output: "html" });
    } catch { /* laat tekst staan */ }
  });
  root.querySelectorAll("span.math").forEach((el) => {
    try {
      katex.render(toTex(el.textContent), el, { displayMode: false, throwOnError: false, output: "html" });
    } catch { /* laat tekst staan */ }
  });
  root.querySelectorAll(".lesson p, .lesson li, .callout, .q-title, .choice").forEach(typesetMixed);
}
