'use strict';

/*
 * Muestre todos los divisores de un numero introducido en un prompt
 */

 var numero = parseInt(prompt('Introduce el numero',0));
 
 for(var i=0; i<= numero; i++){
     
     if( (numero%i) == 0 ){
         document.write(i + " es divisor de " + numero + "<br/>");
     }
     
 }