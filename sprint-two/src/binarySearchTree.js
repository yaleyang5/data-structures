var BinarySearchTree = function(value) {
  // obj = Object.create(BinarySearchTree.prototype)
  // this.tree = {};
  // return obj;

  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

// E: if value === this.value;
BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (this.right === undefined) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (this.left === undefined) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  // compare value and this.value: equal -> return true;
    // greater
        // if this.right === undefined
          // return false
      // return contains(value) function ON this.right
    // less
      // if this.left === undefined
          // return false
      // return contains(value) function ON this.right
  // return false;

  if (value === this.value) {
    return true;
  } else if (value > this.value) {
    if (this.right === undefined) {
      return false;
    }
    return this.right.contains(value);
  } else if (value < this.value) {
    if (this.left === undefined) {
      return false;
    }
    return this.left.contains(value);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//.left - lower than value, .right - higher than value, .insert(value), .contains(value) -> bool, .depthFirstLog(cb)

/*
0 1
1 2
2 3
3
4 3
5 2

bst.left()

bst.right()
*/

// value is stored as object - value is set as object's key
// .children -> object
  // contains 0, 1, or 2 children
  // can compare whether it is greater than or less than

// inserting:
// if value >= current node insert to right
// if vaue < current node left
