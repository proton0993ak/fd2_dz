"use strict"

function arr(a){
     a = [ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ],  1, 8 ];
     var s = 0;

     for(var i=0; i<a.length; i++){
                var item = a[i];
                if(typeof(item) == 'Namber'){
                          s+= item;
                         
                } else{
                      s+= arr(item);        
                }

               
     }
  return s;

}

console.log(arr());