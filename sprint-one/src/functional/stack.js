var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length;

  // Implement the methods below
  someInstance.push = function(value){
    length = Object.keys(storage).length;
    storage[length] = value;
  };

  someInstance.pop = function(){
    length = Object.keys(storage).length;
    var popped = storage[length-1];
    delete storage[length-1];
    return popped;
  };

  someInstance.size = function(){
    length = Object.keys(storage).length;
    return length;
  };

  return someInstance;
};
