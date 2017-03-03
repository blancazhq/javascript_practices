function strJoin(array, separater){
  function combine(a, b){
    if(a === 0){
      return b;
    } else {
      return a + separater + b;
    }
  }
  var joined_str = array.reduce(combine, 0);
  console.log(joined_str);
}

strJoin(['Hello', 'and', 'goodbye'], ' ');
