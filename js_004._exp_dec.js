function foo(){//Declaration
	foo();

} 


vs 


/*
	Function Expression
*/

var foo = function bar(){
	bar();
}


var foo = function bar(){
  var foo = "baz";
  
  function baz(foo){
    console.log(foo);
    foo = bar;
    console.log(foo);
  }
  
  baz(foo);
}

foo();
bar();



// function foo(){
//     function bar() {
//         return 3;
//     }
//     return bar();
//     function bar() {
//         return 8;
//     }
// }
// alert(foo());


// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }
// alert(foo());


// alert(foo());
// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }


// function foo(){
//     return bar();
//     var bar = function() {
//         return 3;
//     };
//     var bar = function() {
//         return 8;
//     };
// }
// alert(foo());
