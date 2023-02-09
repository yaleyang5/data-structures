var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // index is the index of the element to be pushed
  var index = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    if (index > 0) {
      index--;
    } else {
      return 0;
    }
    return storage[index];
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
