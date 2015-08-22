var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if( this._storage.get(i) === undefined ){ 
    this._storage.set(i, []);
    this._storage.get(i).push([k,v]);
  } else {
    for( var index = 0; index < this._storage.get(i).length; index++ ){
      if( this._storage.get(i)[index][0] === k ){
        this._storage.get(i)[index][1] = v;
      } else {
        this._storage.get(i).push([k,v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var retireved;
  for( var index = 0; index < this._storage.get(i).length; index++ ){
    if( this._storage.get(i)[index][0] === k ){
      return this._storage.get(i)[index][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for( var index = 0; index < this._storage.get(i).length; index++ ){
    if( this._storage.get(i)[index][0] === k ){
      this._storage.get(i)[index][1] = null;
    }
  }
};

HashTable.prototype.log = function() {
  this._storage.each(function(value, index, storage) {
    console.log(storage);
  });
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
