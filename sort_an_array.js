var people1 = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

people1.sort();
console.log(people1);

var people2 = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

function compareLength(a, b){
  return a.length - b.length;
}
people2.sort(compareLength);
console.log(people2);

var array = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

function compareInnerSum(a, b){
  function combine(x, y){
    return x+y;
  }
  return a.reduce(combine, 0) - b.reduce(combine, 0);
}
array.sort(compareInnerSum);
console.log(array);

var product = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

function sortPrice(a, b){
  return a.price - b.price;
}
product.sort(sortPrice);
console.log(product);
