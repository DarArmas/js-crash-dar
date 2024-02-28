'use strict';
/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por un usuario
 */

 var numero1 = parseInt(prompt('Introduce el primer numero',0));
 var numero2 = parseInt(prompt('Introduce el primer numero',0));
 
 var diferencia = Math.abs(numero2 - numero1);

document.write("<h1>De " +numero1 + " a " + numero2 + " están estos numeros: </h1>");

for(var i=0; i<=diferencia; i++){
    document.write(numero1 + "<br/>");
    numero1++;
}