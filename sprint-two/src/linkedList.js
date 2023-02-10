var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    /*
      create new node
        what tail is referencing, earlier node reference new node
        tail reference new node
        set value at node at tail to value


    */

    var newNode = Node(value);

    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;

      return newNode;
    }

    list.tail.next = newNode;
    list.tail = newNode;
    // list.tail.value = value; // not necessary
  };

  // Node1(value,next=null)
  // ^ tail,head (pointing to Node1)

  //Node1(value,next=Node2)       -->         Node2(value,next=null)
  // ^head                                      ^ tail (pointing to Node2)

  // Node1(value,next=Node2) -->  Node2(value,next=Node3)    Node3(value,next=null).      newNode(value,next=null)
  //                                                             ^ list.tail(pointing to Node3)

  list.removeHead = function() {
    //move list.head one node down
    var removedNode = list.head.value;
    list.head = list.head.next;

    return removedNode;
  };

  list.contains = function(target) {
    /*
      I value looking for
      O boolean
      C none
      E no target being turned in.

      iterate through linked list (reduce method) - doesn't work for linked lists
        initial memo, false
        for each node, does value === target?
          true, return true
          false, return memo or false

      Plan B
      iterate through linked list
        if (val === target) {
          return true
        }
      return false
    */

    for (var temp = list.head; temp !== null; temp = temp.next) {
      if (temp.value === target) {
        return true;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
