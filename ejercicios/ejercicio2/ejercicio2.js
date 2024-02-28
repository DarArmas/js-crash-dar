'use strict';
/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir un numero negativo y ahi mostrar el resultado
 */

var media;
var suma = 0 ;
var contador= 0;

do{
    var numero = parseInt(prompt('Introduce el primer numero',0));
    
    if(isNaN(numero)){
        numero = 0;
    }else if (numero >= 0){
        suma += numero;
        contador++;
    }
}while(numero >= 0);

alert("LA SUMA DE TODOS LOS NUMEROS ES: " + suma);
alert("LA MEDIA DE TODOS LOS NUMEROS ES: " + (suma/contador));