

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.graph = {}; // ???
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.graph[node] = { edge: [] };
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
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
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  
  return this.graph[fromNode].edge.indexOf(toNode) >= 0;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.graph[fromNode].edge.push(toNode);
  this.graph[toNode].edge.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var toNodeIndex = this.graph[fromNode].edge.indexOf(toNode);
  var fromNodeIndex = this.graph[toNode].edge.indexOf(fromNode);

  this.graph[fromNode].edge.splice(toNodeIndex, 1);
  this.graph[toNode].edge.splice(fromNodeIndex, 1);
  
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for( var key in this.graph ){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



// { { }}