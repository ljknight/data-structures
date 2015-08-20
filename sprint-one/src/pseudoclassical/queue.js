var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[Object.keys(this.storage).length] = value;
};

Queue.prototype.dequeue = function(){
  var dequeued = this.storage[0];
  var values = [];
  var keys = [];
  
  delete this.storage[0];

  for( var key in this.storage ){
    values.push(this.storage[key]);
  }
  for( var i = 0; i < values.length; i++ ){
    keys.push(i);
  }

  var keyValues = _.zip(keys, values);
  var context = this;
  context.storage = {};

  _.each(keyValues, function(pairs){
    context.storage[[pairs[0]]] = pairs[1];
  });

  return dequeued;
};

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
};
