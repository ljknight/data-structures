var Queue = function(){
  var someInstance = {
    storage: {},
  };

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {
  consoleLog: function() { console.log(this.storage); },
  enqueue: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },

  dequeue: function() {
    var dequeued = this.storage[0];
    // create another array of values
    var values = [];
    var keys = [];
    console.log(this.storage);
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
  },

  size: function() {
    return Object.keys(this.storage).length; 
  }

 };


