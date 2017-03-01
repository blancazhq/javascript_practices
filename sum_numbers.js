function sumNumbers(myArray){
  var sum = 0;
  for (var i = 0; i<myArray.length; i++){
    sum += myArray[i];
  }
  return(sum);
}

console.log(sumNumbers([1, 4, 8]));
