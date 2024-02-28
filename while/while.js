'use strict';

var year = 2018;


while(year <= 2051){
    console.log( "Estamos en el año " + year );
    if(year == 2020){
        console.log("El mundo se para por un pandemia");
        break;
    }
    
    year++;
}

//do while

var years = 30;

do{
    //console.log("SOLO CUANDO SEA DIFERENTE A 20");
    years--;
}while( years > 25 );