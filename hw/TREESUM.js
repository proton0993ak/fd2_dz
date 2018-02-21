"use strict"

var massiv = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ],  1, 8 ];

var g = function(massiv){
    var summaMassiva = 0;
    for(var i=0; i<massiv.length; i++){
        var rez = massiv[i];
        if(typeof(rez) == 'number'){
            summaMassiva += rez;
        }else{
            summaMassiva += g(rez);
        }
    }

    return summaMassiva;
}

console.log("Сумма всех элементов данного массива = " + g(massiv));

























// var a = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ],  1, 8 ];
// var f = function(a){
  
//      var s = 0;

//      for(var i=0; i<a.length; i++){
//                 var item = a[i];
//                 if(typeof(item) == 'number'){
//                           s+= item;
                         
//                 } else{
//                       s+= f(item);        
//                 }

               
//      }
//   return s;
//   s
// }

// console.log(f(a));