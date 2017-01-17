
function bind(fn, o){
  return function(){
    fn.call(o);
  };
}

function foo(){
  console.log(this.bar);
}

var bar = "bar1";
var obj1 = {
  bar : "bar2"
};
var obj2 = {
  bar : "bar3"
};

foo = bind(foo, obj1);

foo()//??
foo.call(obj2);
