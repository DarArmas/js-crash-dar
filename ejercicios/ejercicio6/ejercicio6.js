'use strict';

/*
 * Si un numero es par o impar
 * 1.Ventana prompt
 * 2.Si no es valido que lo pida de nuevo
 * 
 */


do{
    var numero = parseInt(prompt('Introduce el numero',0));
}while(isNaN(numero) || numero < 0)
    
if(numero%2 == 0){
    document.write("ES PAR MI PANA");
}else{
    document.write("ES IMPAR MI PANA");
}
    
    
    