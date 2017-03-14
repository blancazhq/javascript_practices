function counter(init){
  var count = init;
  function increment(){
      count++;
      return count;
  }
  function decrement(){
      count--;
      return count;
  }
  return {
    increment: increment,
    decrement: decrement,
  }
}
var count1 = counter(4)
var count2 = counter(2)

console.log(count1.increment());
console.log(count1.increment());
console.log(count2.decrement());
console.log(count2.decrement());
console.log(count1.increment());
