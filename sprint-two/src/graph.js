

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.graph = {}; // ???
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  // this.graph.push({value: node, edge: []});
  this.graph[node] = { edge: [] };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  // for( var i = 0; i < this.graph.length; i++ ){
  //   if( this.graph[i].value === node ){
  //     return true
  //   }
  // }
  for( var key in this.graph ){
    if( key === node ){
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  for( var key in this.graph ){
    if( key === node ){
      delete this.graph[key];
    }
  }
  //   if (this.graph[i].value === node) {
  //     for (var j = 0; j < this.graph[i].edge.length)
  //     this.graph.splice(i, 1);
  //   } 
  // }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  // for (var i = 0; i < this.graph.length; i++) {
  console.log(this.graph);
  for( var key in this.graph ){
    if( key === fromNode ){
      for( var i = 0; i < this.graph[key].edge.length; i++ ){
        if( this.graph[key].edge[i] === toNode ){
          return true;
        }
      }
    }
  }
    // if( fromNode === this.graph[i].value ){
    //   for( var j = 0 ; j < this.graph[i].edge.length; j++ ){
    //     if( this.graph[i].edge[j] === toNode ){
    //       return true;
    //     }
    //   }
    // }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  for( var key in this.graph ){
    if ( key === fromNode) {
      this.graph[key].edge.push(toNode);
    } 
    if (key === toNode) {
      this.graph[key].edge.push(fromNode);
    }
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  // for( var i = 0; i < this.graph.length; i++ ){
  for (var key in this.graph) {
    if (this.graph[key] === fromNode) {
      for( var i = 0; i < this.graph[key].edge.length; i++ ){
        if (this.graph[key].edge[i] === toNode) {
          this.graph[key].edge.splice(i, 1);
        }
      }
    } 

    if (this.graph[key] === toNode) {
      for( var i = 0; i < this.graph[key].edge.length; i++ ){
        if (this.graph[key].edge[i] === fromNode) {
          this.graph[key].edge.splice(i, 1);
        }
      }
    }
  }  
    // // if( this.graph[i].value === fromNode ){
    //   for( var j = 0; j < this.graph[i].edge.length; j++ ){
    //     if( this.graph[i].edge[j] === toNode ){
    //       this.graph[i].edge.splice(j,1);
    //     }
    //   }
    // }
    // if( this.graph[i].value === toNode ){
    //   for( var j = 0; j < this.graph[i].edge.length; j++ ){
    //     if( this.graph[i].edge[j] === fromNode ){
    //       this.graph[i].edge.splice(j,1);
    //     }
    //   }
    // }
  // }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



// { { }}