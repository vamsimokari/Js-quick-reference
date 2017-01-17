"use strict"
function foo(){
  var bar = "bar1";
  
  function baz(){
    var name ="vamsi";
    return name;
  }
  return baz;
  
}

var x= foo()();
console.log(x);
