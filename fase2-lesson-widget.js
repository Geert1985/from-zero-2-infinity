/* Plaatst de algebramachine op een vaste didactische plek in les 2.1. */
(function () {
  if (typeof renderLesson !== "function") return;

  const originalRenderLesson = renderLesson;

  renderLesson = function (phaseId, id) {
    const html = originalRenderLesson(phaseId, id);

    if (String(id) !== "2.1") return html;

    // De algemene renderLesson maakt standaard een widget-host aan wanneer
    // de les nog geen eigen data-widget-slot bevat. Voor 2.1 vervangen we
    // die host door de algebramachine en plaatsen we hem vóór de lesknoppen.
    return html
      .replace(
        '<div class="widget-host" data-mid="2.1"></div>',
        '<div data-widget="algebraMachine"></div>'
      );
  };
})();
