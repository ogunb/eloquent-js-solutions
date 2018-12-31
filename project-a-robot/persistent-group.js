class PGroup {
  constructor(group) {
    this.group = group;
  }

  has(value) {
    return this.group.includes(value);
  }

  add(value) {
    if (this.group.length === 0) {
      return new PGroup([value]);
    }
    return new PGroup(this.group.concat([value]));
  }

  delete(value) {
    if (this.group.length !== 0 && this.group.includes(value)) {
      const newGroup = [...this.group];
      const valueIndex = newGroup.indexOf(value);
      newGroup.splice(valueIndex, 1);
      return new PGroup(newGroup);
    }
  }
}

PGroup.empty = new PGroup([]);
const a = PGroup.empty.add('a');
const ab = a.add('b');
const b = ab.delete('a');

console.log(b.has('b'));
// → true
console.log(a.has('b'));
// → false
console.log(b.has('a'));
// → false
function asd() {
  console.log(this);
}
asd();
