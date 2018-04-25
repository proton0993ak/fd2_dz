"use strict";

function HashStorage(){
    var t = this;

    t.value = null;
    t.key = null;

    t.addValue = function(_key,_value){ t.value = _value;  t.key = _key; return t; };
    t.show = function(){console.log(t.value + "" + t.key); return t;}
}

(new HashStorage()).addValue("id2", "12345").show();



function Car() {
    var self=this;

    self.num=null;
    self.color=null;
    
    self.setNum=function(_num) { self.num=_num; return self; }
    self.setColor=function(_color) { self.color=_color; return self; }
    self.beep=function() { console.log('Beeeep!'); return self; }
    self.show=function() { console.log( 'num='+self.num+' color='+self.color ); return self; }
}

(new Car()).setNum('AAA111').setColor('чёрный').beep().show();