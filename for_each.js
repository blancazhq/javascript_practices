var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }];


function forEach(array, fun){
  for(var i =0; i<array.length; i++){
    fun(array[i]);
  }
}

forEach(arr, function(person) {
  console.log('Hello, ' + person.name + '!');
});
