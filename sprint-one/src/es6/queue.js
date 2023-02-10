class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.start = 0;
    this.end = 0;
  }

  enqueue(value) {
    this[this.end++] = value;
  }

  dequeue() {
    if (this.size() === 0) {
      return 0;
    }
    return this[this.start++];
  }

  size() {
    return this.end - this.start;
  }
}