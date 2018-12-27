function prepend(item, list) {
  const newList = { value: item, rest: list };
  return newList;
}
function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = prepend(arr[i], list);
  }
  return list;
}
function listToArray(list) {
  const newArr = [];
  for (let node = list; node; node = node.rest) {
    newArr.push(node.value);
  }
  return newArr;
}
function nth(list, index) {
  let counter = 0;
  for (let node = list; node; node = node.rest) {
    if (counter === index) {
      return node.value;
    }
    counter++;
  }
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
