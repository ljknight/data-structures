var Queue = function(){
  var someInstance = {
    head: 0,
    tail: 0,
    storage: {},
  };

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.head] = value;
    this.head++;

  },

  dequeue: function() {
    var value = this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail++;
    return value;
  },

  size: function() {
    return Object.keys(this.storage).length; 
  }

 };


