function box(width, height){
  function range(min, max) {
    var arr = [];
    for (var i = min; i < max; i++) {
      arr.push(i);
    }
    return arr;
  }

  function strJoin(array, separater){
    function combine(a, b){
      if(a === ""){
        return b;
      } else {
        return a + separater + b;
      }
    }
    var joined_str = array.reduce(combine, "");
    return joined_str;
  }

  function writeStar(n){
    return "*";
  }

  function writeALine(width){
    var rangeArrayWidth = range(0, width);

    var singleLineStars = rangeArrayWidth.map(writeStar);

    return (strJoin(singleLineStars, ""));
  }

  var rangeArrayHeight = range(0, height);

  function writeStarLine(n){
    return writeALine(width);
  }

  var boxLines = rangeArrayHeight.map(writeStarLine);


  console.log(strJoin(boxLines,"\n"));
}

box(3, 4);
