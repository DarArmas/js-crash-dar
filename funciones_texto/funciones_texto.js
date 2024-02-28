'use strict';

//tranformacion de textos

var numero =444;
var texto1 = "Bienvenido al curso de javascript de victor robles curso";
var texto2 =  "Es muy buen curso";


//Calcualr longitud
var letras = texto1.length;
//console.log(letras);

//Concatenar textos
var textoTotal = texto1.concat(" " + texto2);
//console.log(textoTotal);

//devuelve la posicion de la primer coincidencia
var busqueda = texto1.indexOf("curso");
//console.log(busqueda);

//devuelve la posicion de la ultima coincidencia
var busqueda = texto1.lastIndexOf("curso");
//console.log(busqueda);

//alias de indexof
var busqueda = texto1.search("curso");
//console.log(busqueda);
//si no la encuentra me regresa -1

//match: me regresa las coincidencias
var busqueda = texto1.match(/curso/g);
//console.log(busqueda);

//sacar un trozo del array
var busqueda = texto1.substr(14,5);
//console.log(busqueda);

//ahora se usa substring en donde ya no le digo cuantos caracteres agarra si no de donde a donde
var busqueda = texto1.substring(14,19);
//console.log(busqueda);

//sacame la letra que hay en tal posicion
var busqueda = texto1.charAt(44);
//console.log(busqueda);

//si empieza con..., regresa bool
var busqueda = texto1.startsWith("Bi");
//console.log(busqueda);

//si termina con..., regresa bool
var busqueda = texto1.endsWith("curso");
//console.log(busqueda);

//buscar una frase, regresa bool
var busqueda = texto1.includes("javascript");
//console.log(busqueda);

//remplazar
var busqueda = texto1.replace("javascript", "caca");
//console.log(busqueda);

//cortar el string a partir de donde le diga
var busqueda = texto1.slice(14,22);
//console.log(busqueda);

//dividir y guardar en un array todas las palabras de un string dentro de un 
var busqueda = texto1.split(" ");
console.log(busqueda);