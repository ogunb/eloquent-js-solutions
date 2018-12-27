function countChar(str, find) {
  let counter = 0;
  for (const letter of str) {
    letter === find ? counter++ : counter;
  }
  return counter;
}
console.log(countChar('BBC', 'B'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
