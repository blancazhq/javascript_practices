var arr = [1, 2, 3]


function map(array, fun){
  new_array = [];
  for(var i =0; i<array.length; i++){
    new_array.push(fun(array[i]));
  }
  return new_array
}

var result = map(arr, function(n) {
  return n*2;
});

console.log(result);
