function person(firstname,lastnaeme)
{
    this.firstname = firstname;
    this.lastname =lastnaeme;
}
person.prototype.new = function(name1) {
    var name =name1;
    console.log(name);
}
person.prototype.new.call("moakri");


var obj1 =new Object();
obj1.firstname="vamsi";
obj1.college="cdk";
obj1.ttt="bmnbmb";
//console.dir(obj1);;
console.dir(obj1);
var object = Object.create(null);
object.name ="vamsi";
console.log(object.college);
console.dir(object);
var object1 = Object.create(person.prototype);
console.dir(object1);
object1.new("vnmbmbnnvnvnbmbhjkl");


 var rectangle = {
      create: function (width, height) {
          var self = Object.create(this);
          console.log(self);
          self.height = height;
          self.width = width;
          return self;
      },
      area: function () {
          return this.width * this.height;
   }
 };

 var rect = rectangle.create(5, 10);

 // alert(rect.area());
