function foo(){
  console.log(this.name);
}
var a={name:"vamsi",id:"402960"};
var b={name:"rakesh",id:"98988"};
foo.call(b);
var c=foo;
foo =function()
      {
        c.call(a);
      };
foo();
foo.call(b);
