var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if( this._storage.get(i) !== null ){ 
    this._storage.set(i, []);
    this._storage.each(function(value, index, storage){
      if(index === i){
        storage[index].push([k,v]);
      }
    });
  } else {
    this._storage.each(function(value, index, storage){
      storage[i].push([k,v]);
    });
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, index, storage){
    if(value[0] === k) { // fix this
      var num = this.storage.get(value[1]);
      console.log(value);
    }
  });
  return num;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, index, storage) {
    if( index === i ){ storage[index] = null; }
  });
};

HashTable.prototype.log = function() {
  this._storage.each(function(value, index, storage) {
    console.log(storage);
  });
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
