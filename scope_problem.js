console.log("line1", a, f);
var a = 0;
console.log("line2",a, f);
function f(c) {
  console.log("line3", a, f, c);
  var b = 1;
  console.log("line4",a, f, c, b);
  function g(d) {
    console.log("line5",a, f, c, b, g, d)
    var e = 4;
    console.log("line6",a, f, c, b, g, d, e)
  }
  console.log("line7", a, f, b);
  return g;
  //console.log("line8");
}
console.log("line9", a, f);
f(2)(3);
console.log("line10", a, f);
