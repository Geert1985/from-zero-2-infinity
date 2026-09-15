from pathlib import Path

fase = Path("fase1.js")
text = fase.read_text(encoding="utf-8")
if 'id: "1.13"' in text:
    raise SystemExit("1.13 already exists")
part = Path("fase1-1.13.tmp").read_text(encoding="utf-8").rstrip()
pos = text.rfind("\n];")
if pos < 0:
    raise SystemExit("End marker not found")
before = text[:pos].rstrip()
if not before.endswith(","):
    before += ","
fase.write_text(before + "\n" + part + text[pos:], encoding="utf-8")

math = Path("math.js")
m = math.read_text(encoding="utf-8")
old = 'if (el.classList.contains("formula") || el.classList.contains("math") || el.closest(".katex, svg, .fig")) return;'
new = 'if (el.classList.contains("formula") || el.classList.contains("formula-inline") || el.classList.contains("math") || el.closest(".katex, svg, .fig")) return;'
if old not in m:
    raise SystemExit("math.js guard not found")
m = m.replace(old, new, 1)
anchor = '  root.querySelectorAll("span.math").forEach((el) => {'
inline = '''  root.querySelectorAll(".formula-inline").forEach((el) => {
    try {
      katex.render(toTex(el.textContent), el, { displayMode: false, throwOnError: false, output: "html" });
    } catch { /* laat tekst staan */ }
  });
'''
if 'root.querySelectorAll(".formula-inline")' not in m:
    if anchor not in m:
        raise SystemExit("inline insertion point not found")
    m = m.replace(anchor, inline + anchor, 1)
math.write_text(m, encoding="utf-8")

context = Path("Projectcontext_AI.md")
c = context.read_text(encoding="utf-8")
start = c.find("## 11.1 Harde regel voor LaTeX in cursus-JavaScript")
end = c.find("\n------------------------------------------------------------------------\n\n# 12.", start)
if start < 0 or end < 0:
    raise SystemExit("Projectcontext LaTeX section not found")
rules = r'''## 11.1 Harde regel voor LaTeX in cursus-JavaScript

Nieuwe cursusinhoud in `fase*.js` moet de bestaande renderingarchitectuur volgen.

### LaTeX in JavaScript template literals

De cursusinhoud staat in JavaScript template literals. Iedere LaTeX-opdracht die een backslash gebruikt, moet in de JavaScript-bron met **twee backslashes** worden geschreven.

Correct:

```html
<p class="formula">\\mathbb{R} = \\mathbb{Q} \\cup \\text{irrationele getallen}</p>
<span class="formula-inline">\\pi</span>
<span class="formula-inline">\\sqrt{2}</span>
<span class="formula-inline">x^2</span>
<span class="formula-inline">2^{n+1}</span>
```

JavaScript geeft dan één backslash door aan KaTeX. Een losse `\pi` in een JavaScript-template-literal is dus niet de correcte bronnotatie.

### Exponenten

Voor één eenvoudig teken kan `x^2` worden gebruikt. Zodra de exponent uit meerdere tekens of een bewerking bestaat, gebruik je accolades:

```html
<p class="formula">2^{n+1}</p>
<p class="formula">a^{m+n}</p>
<p class="formula">x^{2k+1}</p>
```

### Breuken, wortels en symbolen

Gebruik voor nieuwe inhoud expliciete LaTeX:

```html
<p class="formula">\\frac{3}{4}</p>
<span class="formula-inline">\\sqrt{2}</span>
<span class="formula-inline">\\pi</span>
<span class="formula-inline">\\mathbb{R}</span>
```

### Tekst binnen een formule

Gebruik `\\text{...}` en `\\quad` wanneer gewone woorden onderdeel zijn van een formule:

```html
<p class="formula">\\sqrt{25} = 5 \\quad \\text{omdat} \\quad 5^2 = 25</p>
```

Gebruik `\\` dus niet als algemene manier om woorden van elkaar te scheiden.

### Geen `\[\]` in `.formula`

Gebruik geen `\[\]` of `$$...$$` binnen `class="formula"`; de renderer behandelt `.formula` al als display-formule.

### Compatibiliteitslaag

`math-compat-fix.js` is uitsluitend een vangnet voor oudere of beschadigde content. Nieuwe cursusinhoud moet vanaf het begin correct worden geschreven en mag niet afhankelijk zijn van deze reparatielaag.

## 11.2 Inline wiskunde

Wiskunde midden in een zin gebruikt:

```html
<span class="formula-inline">...</span>
```

`formula-inline` wordt rechtstreeks door `math.js` met KaTeX in `displayMode: false` gerenderd. De algemene automatische tekstverwerker moet een `formula-inline`-element daarna niet opnieuw verwerken.

Voorbeelden:

```html
<span class="formula-inline">\\pi</span>
<span class="formula-inline">\\sqrt{2}</span>
<span class="formula-inline">\\mathbb{R}</span>
<span class="formula-inline">x^2</span>
<span class="formula-inline">2^{n+1}</span>
```

## 11.3 JavaScript escaping

LaTeX en JavaScript-strings zijn gevoelig voor backslash-escapes. Vooral combinaties die beginnen met `\\f`, `\\t` of `\\n` kunnen door JavaScript als escape sequence worden geïnterpreteerd voordat KaTeX de tekst ontvangt.

De cursusbron moet daarom structureel correct zijn; nieuwe inhoud mag niet afhankelijk zijn van herstelcode.

## 11.4 `math-compat-fix.js`

`math-compat-fix.js` is een compatibiliteitslaag voor legacy-inhoud waarin LaTeX door JavaScript escaping beschadigd is geraakt. Nieuwe cursusinhoud moet deze laag niet nodig hebben.

## 11.5 `fraction-widget-fix.js`

`fraction-widget-fix.js` heeft geen functie binnen de LaTeX-rendering. Het is uitsluitend een technische override voor de `fractionVisual`-widget.

'''
c = c[:start] + rules + c[end:]
marker = "# 17. Huidige focus"
start = c.find(marker)
end = c.find("\n------------------------------------------------------------------------\n\n## Kernregel", start)
if start >= 0 and end >= 0:
    c = c[:start] + "# 17. Huidige focus\n\nDe huidige ontwikkelfocus is **Fase 1 verder uitbouwen**. De milestones 1.1 t/m 1.12 zijn aanwezig; 1.13 behandelt **afronden en wetenschappelijke notatie** en vormt voorlopig het einde van de huidige Fase 1-inhoud.\n" + c[end:]
context.write_text(c, encoding="utf-8")
