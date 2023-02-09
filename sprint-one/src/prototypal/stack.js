var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.len = 0;
  return instance;
};

var stackMethods = {
  push: function (value) {
    this[this.len] = value;
    this.len++;
  },
  pop: function () {
    if (this.len === 0) {
      return 0;
    }
    this.len--;
    return this[this.len];
  },
  size: function () {
    return this.len;
  }
};


