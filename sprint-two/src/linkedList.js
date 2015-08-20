var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);

    if(list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
      list.head.next = list.tail;
    }
  };

  list.removeHead = function(){
    var currentHead = list.head;
    var newHead = list.head.next || list.head; 
    list.head = newHead;
    return currentHead.value;
  };

  list.contains = function(target){
    var result = false;
    var doesContain = function(someThing){
      if( someThing.value === target) {
        result = true;
        return;
      }
      if( someThing.next !== null ){
        doesContain(someThing.next);
      }
      return false;
      };
    doesContain(list.head);
    return result;
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
