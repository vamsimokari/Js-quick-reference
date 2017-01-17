//iffi pattern self excution of a fucntion with out compilation stage 
var foo = "foo1";

(function (bar){
  var foo = bar;
  console.log(foo);//??
})('foo2');

console.log(foo);//??
console.log(window);
