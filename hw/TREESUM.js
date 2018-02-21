"use strict"
var a = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ],  1, 8 ];
var f = function(a){
  
     var s = 0;

     for(var i=0; i<a.length; i++){
                var item = a[i];
                if(typeof(item) == 'number'){
                          s+= item;
                         
                } else{
                      s+= f(item);        
                }

               
     }
  return s;
  s
}

console.log(f(a));