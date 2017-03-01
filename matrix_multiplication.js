function matrixMultiply(myArray1, myArray2){
  var newArray = [[0, 0], [0, 0]];
  for(var i=0; i<myArray1.length; i++){
    for(var j=0; j<myArray1[0].length; j++){
      for(var k=0; k<myArray1[0].length; k++){
        newArray[i][j] += myArray1[i][k] * myArray2[k][j];
      }  
    }
  }
  console.log(newArray);
}

matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]);
