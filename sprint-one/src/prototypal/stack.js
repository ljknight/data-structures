var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  return someInstance;
};

var stackMethods = {
  storage: {},

  cLog: function() { console.log(this.storage); },

  push: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },

  pop: function() {
    var value = this.storage[Object.keys(this.storage).length-1];
    console.log(this.storage[Object.keys(this.storage).length-1]);
    delete this.storage[Object.keys(this.storage).length-1];
    
    return value; 
  },

  size: function() {
    // console.log(Object.keys(this.storage).length);
    return Object.keys(this.storage).length;
  }
};


