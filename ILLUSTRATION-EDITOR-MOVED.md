# Wiskundige illustratie-editor verhuisd

De editor is een zelfstandig project geworden:

https://github.com/Geert1985/wiskundige-illustratie-editor

Alle editorcode, tests, specificaties en roadmap staan daar, inclusief de laatste wijzigingen van de ontwikkelbranch en de editorgeschiedenis. Deze repository bevat voortaan de From Zero 2 Infinity-lesapp. De bestanden daarvan zijn bij deze migratie niet gewijzigd.

Voor lokaal ontwikkelen: clone de nieuwe repository en voer `npm run serve` uit. Open http://127.0.0.1:8080/. Browserconcepten kunnen via JSON-export in de oude editor en JSON-import in de nieuwe editor worden overgezet.

Migratie: 11 oktober 2026. Editorbron: commit 73333a0 op chatgpt/math-illustration-m5b. Zelfstandige migratiecommit: c4bf129. Historische branches en commits blijven beschikbaar. De nieuwe repository is volledig getest (363 Node-tests en Edge-suite) en gepusht voordat de editor hier verwijderd werd.
