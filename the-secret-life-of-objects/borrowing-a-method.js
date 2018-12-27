const map = { one: true, two: true, hasOwnProperty: false };

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, 'one'));
// → true
