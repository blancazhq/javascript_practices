function tipAmount(amount, service_level){
  if(service_level == "good"){
    return(amount * 0.2);
  }else if(service_level == "fair"){
    return(amount * 0.15);
  }else if(service_level == "fair"){
    return(amount * 0.1);
  }else{
    return("not a valid input");
  }
}

function splitAmount(amount, service_level, num_people){
  if(service_level == "good"){
    return(amount * 1.2 / num_people);
  }else if(service_level == "fair"){
    return(amount * 1.15 / num_people);
  }else if(service_level == "fair"){
    return(amount * 1.1 / num_people);
  }else{
    return("not a valid input");
  }
}

console.log(tipAmount(100, "good"));
console.log(tipAmount(40, "fair"));

console.log(splitAmount(100, "good", 5));
console.log(splitAmount(40, "fair", 2));
