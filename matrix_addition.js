function matrixAdd(myArray1, myArray2){
  var newArray = [[0, 0], [0, 0]];
  for(var i=0; i<myArray1.length; i++){
    for(var j=0; j<myArray1[0].length; j++){
        newArray[i][j] = myArray1[i][j]+myArray2[i][j];
    }
  }
  console.log(newArray);
}

matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]);
