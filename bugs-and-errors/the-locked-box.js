const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  },
};

function withBoxUnlocked(body) {
  const wasLocked = box.locked;
  try {
    box.unlock();
    body();
  } finally {
    if (wasLocked) box.lock();
  }
}

withBoxUnlocked(() => {
  box.content.push('gold piece');
});

try {
  withBoxUnlocked(() => {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log('Error raised:', e);
}
console.log(box.locked);
// → true
