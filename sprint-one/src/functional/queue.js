var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var start = 0;
  // end is index of NEXT value in queue
  var end = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
    if (start === end) {
      return 0;
    }
    return storage[start++];
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
