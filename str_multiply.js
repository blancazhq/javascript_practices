function strMultiply(str, times){
  function range(min, max) {
    var arr = [];
    for (var i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
  }

  var rangeArray = range(0, times)

  function writestr(n){
    return str;
  }

  var new_array = rangeArray.map(writestr);

  function strJoin(array){
    function combine(a, b){
        return a + b;
    }
    var joined_str = array.reduce(combine, "");
    return joined_str;
  }

  console.log(strJoin(new_array));
}

strMultiply('abc', 5);
