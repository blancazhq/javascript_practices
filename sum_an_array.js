function combine(a, b){
  return a+b;
}

function sum(array){
  var sum = array.reduce(combine, 0);
  console.log(sum);
}

sum([1, 2, 3]);
