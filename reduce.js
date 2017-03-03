function reduce(array, fun, init){
  var result_combine = init;
  for(var i =0; i<array.length; i++){
    result_combine = fun(result_combine, array[i]);
  }
  return result_combine;
}

var result = reduce([1, 2, 3], function(value, n) { return value + n; }, 0)

console.log(result);
