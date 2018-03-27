"use strict"
// 

// for (var i = 20; ; i++) {
//     if(i%6 == 0){
//         console.log("sfsdfsdff " + i);
//         break;
//     }
    
function a(year){
        if(year%4 == 0){
            return 366;
        }else{return 365;}
}

console.log('В 2013 году дней: ' + a(2013));
console.log('В 2018 году дней: ' + a(2016));

function f(d,b,c){
    console.log(d + ' / ' + b + ' / ' + c  );

}

f(3);

























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