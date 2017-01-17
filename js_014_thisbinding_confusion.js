function foo(){
	var bar = "bar1";
	console.log(this.bar = bar);
	console.log(this.baz = baz);
	console.log(this);
	this.baz();
}

function baz(){
	console.log(this.bar);
}

var bar = "bar2";
foo();
