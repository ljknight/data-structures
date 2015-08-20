var Stack = function() {
 var someInstance = {
  storage: {}
 };
 _.extend(someInstance, stackMethods);

 return someInstance;
};

var stackMethods = {

  push: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },

  pop: function() {
    var value = this.storage[Object.keys(this.storage).length-1];
    delete this.storage[Object.keys(this.storage).length-1];
    return value; 
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};

// var stackInstance = Stack();
// stackInstance.push();