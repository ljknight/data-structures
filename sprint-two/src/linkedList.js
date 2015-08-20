var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    // var prevTail = this.tail || newNode;

    if( this.head === undefined ){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // {}
      this.tail = newNode;
    }

  };

  list.removeHead = function(){
    // reassign head to current head's next
    // return list.head
    var currentHead = list.head;
    var newHead = list.head.next || list.head;
    if(list.head )
    list.head = newHead;
    return currentHead;
  };

  list.contains = function(target){
    // check all values, return boolean
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
