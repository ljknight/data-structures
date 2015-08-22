var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);

};

treeMethods.contains = function(target){
  var contained = false;
  var childChecker = function(tree){
    if( tree.value === target ){
      contained = true;
      return true;
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

treeMethods.removeFromParent = function(value) {
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      console.log(this.children[i]);
      if (value === this.children[i].value) {
        this.children[i].parent = null;
        this.children.splice(i, 1);
        return;
      }

      if (this.children[i].length > 0) {  
        return this.children[i].removeFromParent(value);        
      }
    }
  }

  // node.parent = null;

  // loop through this.children array

    // find node (could be nested)
    // remove node from this.children
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
