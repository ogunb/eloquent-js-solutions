class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  }
  throw new MultiplicatorUnitFailure('Klunk');
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) console.log(e);
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64
