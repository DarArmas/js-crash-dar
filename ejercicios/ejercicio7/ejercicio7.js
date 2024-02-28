'use strict';

/*
 Tabla de multiplicar de un numero introducido por el usuario
 * 
 */

/*
var numero = parseInt(prompt('Introduce el numero', 0));

for (var i = 0; i <= 10; i++) {
    var res = i * numero;
    document.write(i + " x " + numero + " = " + res + "<br/>");
}
*/

//TODAS LAS TABLAS DE MULTIPLICAR
document.write("<h1>TODAS LAS TABLAS</h1>");

for (var numero = 1; numero <= 10; numero++) {
    document.write("<h2>Tabla del " + numero + "</h2>");

    for (var i = 0; i <= 10; i++) {
        var res = i * numero;
        document.write(i + " x " + numero + " = " + res + "<br/>");
    }
}
   