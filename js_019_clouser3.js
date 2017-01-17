function foo3(){
  for(var i=0;i<5;i++){
    setTimeout(function(){
      console.log(i);
    },i*1000);
  }
}
//foo3();


//dont forgot scope of that i is in global when settime out function is 
//going to excute by that time i rached to 5;


function foo4(){
  for(var i=0;i<5;i++){
    (function(i){
      setTimeout(function(){
        console.log(i);
      },i*1000);
    })(i);
  }
}


//foo4();
//
//in the above a=example we are using iifi pattern to print all i's here each loop has it's own
//scope




function foo5(){
  for(let i=0;i<5;i++){
    setTimeout(function(){
      console.log(i);
    },i*1000);
  }
}
//foo5();



//here we are using let i so ecah i has it's own scope
//
//it will print all the i's
