function foo(){
  console.log(this.name);
}
var name ="vamsi";
var obj ={
   name="rakesh";
   college="usa";
  }
foo();
foo.call(obj);

