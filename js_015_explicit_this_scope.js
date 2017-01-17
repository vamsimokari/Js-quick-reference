
function foo(){
  console.log(this.bar);
}

var bar = "bar1";

var o1 = {
  bar : "bar2"
}

foo();//??
foo.call(o1);//??
