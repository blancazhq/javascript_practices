var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

function combine(a, b){
  return a + b["price"];
}

function total(array){
  var total_price = array.reduce(combine, 0);
  console.log(total_price);
}

total(products);
