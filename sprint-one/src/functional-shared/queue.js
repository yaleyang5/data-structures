var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instanceOfQueue = {
    // start is start of queue, end is index of next to add
    start: 0,
    end: 0
  };

  _.extend(instanceOfQueue, queueMethods);

  return instanceOfQueue;
};

var queueMethods = {
  enqueue: function(value) {
    // adding to end
    this[this.end] = value;
    this.end++;
  },
  dequeue: function () {
    // popping off start
    if (this.size() === 0) {
      return 0;
    }
    return this[this.start++];
  },
  size: function () {
    // return length
    return this.end - this.start;
  }
};


