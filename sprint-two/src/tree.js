var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  //all children?

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  /*
  create a new Tree with a value of value
  new Tree = newTree.childen[newTree.children.length]

  */
  var newChild = Tree(value);
  this.children[this.children.length] = newChild;
  return newChild;
};

// myTree.children[0]
// typeof newTree.children MUST be an object or array
// tree?

// strategy 2:
// create w wraparound function
// call it on the root node
treeMethods.contains = function(target) {
  // initial strategy
  // start at the top
  // if newTree.children !== undefined
    // iterate through it (recursively somehow)
    // if newTree.value === target
      // return true
  // return false

  // still works! function inside of contains:
  // create recursionFunc
    // first check if this.value === target
      // return true
    // if this.children
      // iterate through children array
        // call recursionFunc(this.children[i])
    // return false;

  // return recursionFunc(rootNode)

  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
