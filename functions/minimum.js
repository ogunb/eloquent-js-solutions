function min(...args) {
  let minimum = null;
  for (const num of args) {
    if (minimum === null || num < minimum) {
      minimum = num;
    }
  }
  return minimum;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
