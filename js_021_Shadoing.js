
function Foo(me){
  this.me = me;
}

Foo.prototype.identify = function(){
  return "I am "+this.me;
}

var a1 = new Foo('bar1');
console.log(a1.identify());

a1.identify = function(){
  alert("Hello "+ Foo.prototype.identify.call(this));
};

a1.identify();
