var Queue = function(){
  var someInstance = {};
  
  var storage = {};
  var length;
  var head = 0, tail = 0;

  someInstance.enqueue = function(value){
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function(){
    var value = storage[head];
    delete storage[head];
    head++;
    return value;
  };

  someInstance.size = function(){
    length = Object.keys(storage).length;
    return length;
  };

  return someInstance;
};
