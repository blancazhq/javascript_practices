function callNTimes(number, fun) {
  for(var i = 0; i< number; i++){
    fun();
  }
}

function hello(){
  console.log("Hello, world!")
}

callNTimes(5, hello);
