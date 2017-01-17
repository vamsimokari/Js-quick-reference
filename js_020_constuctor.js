
'use strict';
function Foo(me){
  this.me = me;
  //return this;
}

Foo.prototype.identify = function(){
  return "I am "+this.me;
}

Foo.prototype.call = function(){

}

var a1 = new Foo('bar1');

a1.identify();

var a2 = new Foo('bar2');

a2.identify();


a2.speak = function(){
  alert("Hello "+this.identify());
}

a2.speak();

a1.constructor === Foo;
a1.constructor === a2.constructor;

a1.__proto__ === Foo.prototype;
a1.__proto__ === a2.__proto__;

a1.__proto__ === Object.getPrototypeOf(a1);
a2.__proto__ === a2.constructor.prototype;
