var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  // now any other properties of instance that are unique among instances
  instance.start = 0;
  instance.end = 0;
  return instance;
};

var queueMethods = {
  enqueue: function (value) {
    this[this.end++] = value;
  },
  dequeue: function () {
    if (this.start === this.end) {
      return 0;
    }
    return this[this.start++];
  },
  size: function () {
    return this.end - this.start;
  }
};


