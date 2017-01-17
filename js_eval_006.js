
var bar = "bar";

function foo(str){
  //var bar = 48;
  eval(str);//cheating
  console.log(bar);
}

foo("var bar = 42");
