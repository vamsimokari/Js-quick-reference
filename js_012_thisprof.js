(function sample(){
  var a=10;
  var b=20;
  var c=30;
  sum=add.apply(this,[a,b,c]);
}
function add(a,b,c){
  var  a=11;
  var  b=12;
  var c=13;
  var sum;
   sum =a+b+c;
   console.log(sum);
   return sum;
})();
