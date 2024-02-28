'use strict';
//
var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "Kotlin");

/*
var busqueda = lenguajes.find((lenguaje) => {
   return lenguaje == "PHP"; 
});
*/

//es lo mismo que
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");    

console.log(busqueda);

//encontrar el index
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");

console.log(busqueda);

var precios = [10,20,30,40,50];
//.some para buscar si hay mayores, menores que
//retorna bool
var busqueda = precios.some(precio => precio > 30);
console.log(busqueda);


