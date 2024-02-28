'use strict';

/*
 * Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
 */

 var numero1 = parseInt(prompt('Introduce el primer numero',0));
 var numero2 = parseInt(prompt('Introduce el primer numero',0));
 
 var diferencia = Math.abs(numero2 - numero1);

document.write("<h1>De " +numero1 + " a " + numero2 + " están estos numeros: </h1>");

for(var i=0; i<=diferencia; i++){
    if((numero1%2) != 0 ){
         document.write(numero1 + "<br/>");
    }   
    numero1++;
}