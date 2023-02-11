//get, set, each for limitedArray

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //I key, value
  //O undefined, no return
  //C O(1), within limit
  //E TBD
  if (this._storage.get(index) === undefined) {
    //make each ele in limitedArray, another
    this._storage.set(index, {});
  }
  // set temp to storage[index] using _storage.get
  // push v to temp
  this._storage.get(index)[k] = v;
  // this._storage.set(index, v);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  delete this._storage.get(index)[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


