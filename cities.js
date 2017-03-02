var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function cool (city){
  return city.temperature < 70;
}

var cool_cities = cities.filter(cool);

console.log(cool_cities);

var city_name_array = [];

function listname(city){
  city_name_array.push(city.name);
}

cities.forEach(listname);

console.log(city_name_array);
