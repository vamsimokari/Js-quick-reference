function a(){
  name ="vamsi";
  bazz();
}
function bazz(){
  console.log(this.name)
}
name ="global name"
a();
