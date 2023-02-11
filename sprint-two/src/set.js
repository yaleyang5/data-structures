var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};
// item will be a string
setPrototype.add = function(item) {
  // this._storage[Object.keys(this._storage).length] = item;

  // now with item as the key
  return !this.contains[item] ? this._storage[item] = 1 : undefined;
};
//this.contains[item] ? this._storage
// time complexity = TC Object.keys
// new TC O(1)

setPrototype.contains = function(item) {
  // for (var key in this._storage) {
  //   if (this._storage[key] === item) {
  //     return true;
  //   }
  // }
  // return false;

  return this._storage[item] !== undefined;
};
// O(n)
// new TC O(1)

setPrototype.remove = function(item) {
  // if statement -> this.contains(item)
  // if (!this.contains(item)) {
  //   return;
  // }
  // for (var key in this._storage) {
  //   if (this._storage[key] === item) {
  //     delete this._storage[key];
  //   }
  // }

  delete this._storage[item];
};
// O(n)
// new TC O(1)

/*
 * Complexity: What is the time complexity of the above functions?
 */
