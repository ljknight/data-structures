var BinarySearchTree = function(value){
  var tree = Object.create(binarySearchTreeMethods);

  tree.value = value;
  tree.left = null; // smaller child
  tree.right = null; // larger child

  return tree;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value){
  if (value < this.value ){
    if( this.left === null ) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (value > this.value) {
    if( this.right === null ){
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } 
};

binarySearchTreeMethods.contains = function(target){
  if( target >= this.value && this.right !== null ){
    if( this.right.value === target ) {
      return true;
    } else {
      this.right.contains(target);
    }
  }
  if( target < this.value && this.left !== null ){
    if( this.left.value === target) {
      return true;
    } else {
      this.left.contains(target);
    }
  }
  return false;
};

binarySearchTreeMethods.depthFirstLog = function(callback) {
  callback(this.value)

  if(this.right !== null){
    this.right.depthFirstLog(callback);
  }
  if(this.left !== null){
    this.left.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
