var array = [-1, -2, 3, 4, 5];

function positive (n){
  return n > 0;
}

var positive_array = array.filter(positive);

console.log(positive_array);
