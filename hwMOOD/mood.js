"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];

    var h = {};

    console.log( 'цветов: ' + colorsCount );
    for ( var i=1; i<=colorsCount; i++ ) {
        var n=randomDiap(1,7);
        var colorName=colors[n];
        if(colorName in h){
          for(;;){
            var m=randomDiap(1,7);
            if(!(colors[m] in h)){
            h[colors[m]]=true;
            console.log(colors[m]);
            break;
            }
            }
        }else if(!(colorName in h)){
          h[colorName]=true;
          console.log( colorName );
        }
    }
}

mood(3);

