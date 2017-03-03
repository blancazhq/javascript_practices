function combine(a, b){
    return a*b;
}

function product(array){
  var sum = array.reduce(combine, 1);
  console.log(sum);
}

product([3, 4, 5]);
