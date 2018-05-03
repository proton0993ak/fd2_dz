"use strict"

// function ClassF(){

//     this.a = 2;

//     this.sado = function(){
//             console.log("obj " + this);
//             console.log("thisa " + this.a);
            
//     } 


   
// }

// function Ciclope(){
//     this.a = 1;
//     this.sado = bFunc;
// }


function ff(a,b) { 
    console.log(a+" "+b); 
    console.log(this); 
    console.log(this.k); 
  }
  
  var hh={k:77};
  var ff2=ff.bind(hh);
  ff2(5,6);

// var b = new ClassF(); 
// var bFunc =  b.sado;

// bFunc();


// var c = new Ciclope();
// c.sado();





































// "use strict";
















// function HashStorage(){

//     var self = this;
//     self.nameNapitok = null;
//     self.alkOrnoalc = null;
//     self.recept = null;

//     self.addValue


    




//     self.setNapitok = function(){
        
//         self.nameNapitok = prompt("Введите название напитка");
//         self.alkOrnoalc =  confirm("Напиток алкогольный  или без алкогольный? (  OK - да  / ОТМЕНА - нет  )");
//         self.recept = prompt("Какой рецепт у напитка?");
//         if(self.alkOrnoalc == true){
//             self.alkOrnoalc = "да";
//         }else{ self.alkOrnoalc = "нет"}
        

//         return self;
//     }

//     self.show = function(){
        
//         console.log(
//             "напиток "  + self.nameNapitok + "\n" +
//             "алкогольный: " +  self.alkOrnoalc + "\n" +
//             "рецепт приготовления: " + "\n" +
//             self.recept

//         );

//         return self;
//     }

   
// }


// (new HashStorage()).setNapitok().show();
// (new HashStorage()).setNapitok().show();





