var array = [-1, -2, 3, 4, 5];

function odd (n){
  return n % 2 != 0;
}

var odd_array = array.filter(odd);

console.log(odd_array);
