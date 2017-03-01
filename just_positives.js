function positiveNumbers(myArray){
  for (var i=0; i<myArray.length; i++){
    if(myArray[i]<0){
      myArray.splice(i, 1);
    }
  }
  console.log(myArray);
}

positiveNumbers([1, -3, 5, -3, 0]);
