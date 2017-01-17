// Code goes here
//compilation and excution with lhs and rhs

var foo = "bar";

//var foo;//LHS
//foo = "bar";//RHS

function bar(){
  var foo = "baz";
  
  function baz(){
    foo = "bam";
    bam = "yay";
    console.log(foo);
  }
  baz();
  console.log(foo);
}

bar();//
foo;//
bam;//
baz();//
