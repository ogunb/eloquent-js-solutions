function deepEqual(mainObj, compObj) {
  if (Object.keys(mainObj).length !== Object.keys(compObj).length) return false;
  let toReturn = null;
  for (const item in mainObj) {
    if (typeof compObj[item] === 'object') {
      deepEqual(mainObj[item], compObj[item]);
    } else {
      if (mainObj[item] !== compObj[item]) return false;
      toReturn = true;
    }
  }
  return toReturn;
}

const obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(
  deepEqual(obj, { here: { is: 'an', asd: { asdf: 'asdf' } }, object: 2 })
);
// → true
