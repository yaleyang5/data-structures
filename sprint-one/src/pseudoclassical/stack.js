var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
};

Stack.prototype.push = function (value) {
  this[this.len++] = value;
};

Stack.prototype.pop = function () {
  if (this.len === 0) {
    return 0;
  }
  return this[--this.len];
};

Stack.prototype.size = function () {
  return this.len;
};


// we assume that when Stack is called, it will be called with the keyword 'new' (new Stack).


