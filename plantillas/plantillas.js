'use strict';
//Plantillas de texto
//imprimir utilizando trozo de codigo html

var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TUS APELLIDOS");

//tradicionalemente se haría:
//var texto = "Mi nombre es:  " + nombre + "<br/> Mis apellidos son: " + apellidos;

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre} </h3>
    <h3>Mis apellidos son: ${apellidos} </h3>
`;

document.write(texto);
