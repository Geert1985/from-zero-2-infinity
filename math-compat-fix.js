/* Compatibiliteitslaag voor LaTeX-formules in JavaScript template strings.
 *
 * In JavaScript wordt een enkele \\f geïnterpreteerd als form-feed.
 * Daardoor kan bijvoorbeeld \\frac in een template literal als "rac" in
 * de uiteindelijke tekst terechtkomen. Deze laag herstelt dat vóór KaTeX.
 */
(function () {
  if (typeof unicodeToTex !== "function") return;

  const originalUnicodeToTex = unicodeToTex;

  window.unicodeToTex = function (raw) {
    let s = String(raw ?? "");

    // Herstel een per ongeluk als control character geïnterpreteerde \\frac.
    // Dit vangt vooral de veelvoorkomende vorm: form-feed + "rac".
    s = s.replace(/\f\s*rac/g, "\\\\frac");

    return originalUnicodeToTex(s);
  };

  // typesetMath() gebruikt toTex(). Ook daar moet de compatibiliteitslaag
  // actief zijn wanneer een formule rechtstreeks uit de DOM komt.
  window.toTex = function (s) {
    const raw = String(s ?? "");

    if (/\\[a-zA-Z{]/.test(raw)) {
      return raw;
    }

    return window.unicodeToTex(raw);
  };
})();
