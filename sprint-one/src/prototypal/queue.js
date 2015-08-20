var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail++;
  },

  dequeue: function() {
    var value = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return value;
  },

  size: function() {
    return Object.keys(this.storage).length; 
  }
};


