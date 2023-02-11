

// Instantiate a new graph
var Graph = function() {
  // keeps track of an object that has all nodes as keys
  // value is an array that holds nodes that the key shares an edge with
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  /*
    Yale's approach
    iterate through the graph
      for each node, removeEdge() w/ current node and node removing as two arguments.
    delete this node

    Vaughn's approach hehe

    iterate through the graph
      for each node containing this[node], splice out node
    delete this node
    delete this.edges[node]
  */
  for (var element in this) {
    var indexVar = this.edges[element] !== undefined ? this.edges[element].indexOf(node) : -1;
    if (indexVar !== -1) {
      this.edges[element].splice(indexVar, 1);
    }
  }

  delete this.edges[node];
  delete this[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges[fromNode].indexOf(toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  /*
    if this.edges[fromNode] === undefined
      this.edges[fromNode] === []
    push toNode to this.edges[fromNode]
    if this.edges[toNode] === undefined
      this.edges[toNode] === []
    push fromNode to this.edges[toNode]
  */

  if (this.edges[fromNode] === undefined) {
    this.edges[fromNode] = [];
  }
  this.edges[fromNode].push(toNode);

  if (this.edges[toNode] === undefined) {
    this.edges[toNode] = [];
  }
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  /*
    two nodes share edge
    __fromNode___
    store this.edges[fromNode].indexOf(toNode) in indexVar
    this.edges[fromNode].splice(indexVar, 1);

    __toNode___
    store this.edges[toNode].indexOf(fromNode) in indexVar
    this.edges[toNode].splice(indexVar, 1);
  */
  var indexVar = this.edges[fromNode].indexOf(toNode);
  this.edges[fromNode].splice(indexVar, 1);

  var indexVar2 = this.edges[toNode].indexOf(fromNode);
  this.edges[toNode].splice(indexVar2, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  /*
    iterate through graph
      execute cb on each node
  */
  for (var node in this) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


