function filter(array, fun){
  new_array = [];
  for(var i =0; i<array.length; i++){
    if(fun(array[i]) === true){
      new_array.push(array[i]);
    }
  }
  return new_array
}

var result = filter([1, 2, 3], function(n) { return n % 2 === 1 });

console.log(result);
