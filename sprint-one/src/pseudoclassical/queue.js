var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function(){
  var value = this.storage[this.head];
  delete this.storage[this.head];
  this.head++;
  return value;
};

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
};
