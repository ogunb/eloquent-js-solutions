class Group {
  constructor() {
    this.set = [];
  }

  add(newVal) {
    if (!this.set.includes(newVal)) {
      this.set.push(newVal);
      return this.set;
    }
  }

  has(value) {
    return this.set.includes(value);
  }

  delete(value) {
    this.set = this.set.filter(val => val !== value);
  }

  static from(values) {
    const newSet = new Group();
    for (const value of values) newSet.add(value);
    return newSet;
  }
}

const group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
