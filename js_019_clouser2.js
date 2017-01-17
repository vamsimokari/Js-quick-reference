
function foo2(){
  var bar = 0;
  
  setTimeout(function() {
    console.log(bar++)
  }, 10);
  
  setTimeout(function() {
    console.log(bar++)
  }, 10);
}

foo2();
