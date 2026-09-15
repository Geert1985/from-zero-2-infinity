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
