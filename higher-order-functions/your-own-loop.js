function loop(val, test, update, body) {
  if (!test(val)) return;
  body(val);
  const newVal = update(val);
  loop(newVal, test, update, body);
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
