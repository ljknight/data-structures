var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length;
  // Implement the methods below

  someInstance.enqueue = function(value){
    length = Object.keys(storage).length;
    storage[length] = value;
  };

  someInstance.dequeue = function(){
    // length = Object.keys(storage).length;
    var dequeued = storage[0];
    // create another array of values
    var values = [];
    var keys = [];
    delete storage[0];

    for( var key in storage ){
      values.push(storage[key]);
    }
    for( var i = 0; i < values.length; i++ ){
      keys.push(i);
    }

    var keyValues = _.zip(keys, values);

    storage = {};

    _.each(keyValues, function(pairs){
      storage[[pairs[0]]] = pairs[1];
    });

    return dequeued;
  };

  someInstance.size = function(){
    length = Object.keys(storage).length;
    return length;
  };

  return someInstance;
};
