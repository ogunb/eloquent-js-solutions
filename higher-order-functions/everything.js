function every(array, test) {
  for (const item of array) {
    if (!test(item)) return false;
  }
  return true;
}
function some(array, test) {
  for (const item of array) {
    if (test(item)) return true;
  }
  return false;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
console.log(some([1, 3, 5], n => n < 2));
// → true
console.log(some([2, 4, 16], n => n < 1));
// → false
