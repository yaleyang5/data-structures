var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function (value) {
  this[this.end++] = value;
};

Queue.prototype.dequeue = function () {
  if (this.size() === 0) {
    return 0;
  }
  return this[this.start++];
};

Queue.prototype.size = function () {
  return this.end - this.start;
};

