var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var contained = false;
  var childChecker = function(tree){
    if( tree.value === target ){
      contained = true;
      return;
    }
    if( tree.children.length > 0 ){
      for( var i = 0; i < tree.children.length; i++ ){
        childChecker(tree.children[i]);
      }
    }
    return contained;
  }
  return childChecker(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
