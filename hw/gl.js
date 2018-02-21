"use strict"


function v(){
  var stroka = prompt("введите любое слово");
var s = stroka.split('');
var arr = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
var f = 0;
var rez= "";
    for(var i=0; i<s.length; i++){
        if(arr.indexOf(s[i].toLowerCase()) > -1){
              f++;  
        }
    }
      return f;
}
console.log(v());  
    