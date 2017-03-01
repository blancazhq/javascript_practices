function factors(num){
  for(var i=1; i<=num; i++){
    if(num % i == 0){
      console.log(i);
    }
  }
}

factors(20);
