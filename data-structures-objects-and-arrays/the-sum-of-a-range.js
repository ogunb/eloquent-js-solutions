function range(start, end, step = 1) {
  const newArray = [];
  const isNegative = step < 0;
  const isStartBigger = start > end;
  if (isStartBigger && !isNegative) {
    for (let i = start; i >= end; i -= step) {
      newArray.push(i);
    }
  } else if (isNegative) {
    for (let i = start; i >= end; i += step) {
      newArray.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      newArray.push(i);
    }
  }
  return newArray;
}
const sum = arr => arr.reduce((total, num) => num + total, 0);
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
