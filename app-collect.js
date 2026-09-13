function inzichtCollected(id) {
  return Boolean(id && progress().inzichtKeys && progress().inzichtKeys[id]);
}

document.addEventListener("click", function (e) {
  const btn = e.target.closest(".collect-inzicht");
  if (!btn) return;
  const key = btn.getAttribute("data-ikey");
  const already = inzichtCollected(key);
  store.dispatch({ type: "COLLECT_INZICHT", payload: key });
  if (!already && typeof burstInzicht === "function") burstInzicht(btn);
  btn.outerHTML = '<span class="inzicht-done"><img class="book-ico" src="assets/inzicht.png" alt=""> Inzicht verzameld</span>';
});
