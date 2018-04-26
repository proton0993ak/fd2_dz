"use strict";

function HashStorage(){

    // Спрашивает название напитка

    var nameNapitok = prompt("Введите название напитка");

    // Спрашивает алкогольный он или нет

    var alkOrnoalc = prompt("Напиток алкогольный  или без алкогольный?");

    // Спрашивает  рецепт его приготовления

    var recept = prompt("Какой рецепт у напитка?");

    // сохраняет информацию о напитке в хранилище.


    var t = this;

    t.value = null;
    t.key = null;

    t.addValue = function(key, value){ t.value = value;  t.key = key; return t; };
    t.show = function(){console.log(t.value + " " + t.key); return t;}
}


var drinkStorage = new HashStorage();


