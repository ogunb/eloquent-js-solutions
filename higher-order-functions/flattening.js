let arrays = [[1, 2, 3], [4, 5], [6]];
arrays = arrays.reduce((acc, arr) => acc.concat(...arr), []);
console.log(arrays);
// → [1, 2, 3, 4, 5, 6]
