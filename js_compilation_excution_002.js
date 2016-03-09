var foo = "bar";
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
