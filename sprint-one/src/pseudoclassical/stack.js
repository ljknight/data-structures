var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value){
  this.storage[Object.keys(this.storage).length] = value;
};

Stack.prototype.pop = function() {
  var value = this.storage[Object.keys(this.storage).length-1];
  delete this.storage[Object.keys(this.storage).length-1];
  return value;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};