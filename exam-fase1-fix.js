/* Content correction kept separate so the generated exam bank remains easy to review. */
(function(){
  const base=EXAM_BANKS_1["1.1"];
  EXAM_BANKS_1["1.1"]=function(){
    return base().map(q=>q.id==="F1-1.1-08"?{...q,prompt:"Welk getal hoort bij 6 × 1000 + 0 × 100 + 4 × 10 + 9 × 1?"}:q);
  };
})();
