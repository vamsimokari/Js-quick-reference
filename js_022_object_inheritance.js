function Foo(who){
  this.me = who;
}

Foo.prototype.identify = function(){
  return "I am "+this.me;
}

function Bar(who){
  Foo.call(this, who);
}

//Bar.prototype = Object.create(Foo.prototype);//1,2 steps of new key word


Bar.prototype.speak = function(){
  //alert("Hello "+this.identify());
};

var b1 = new Bar('bar1');
console.log(b1);
b1.speak();
//avoid 24 to 30

function Bam(who){
  Foo.call(this, who);
}

Bam.prototype = new Foo("bam1");

console.log(Bam);
