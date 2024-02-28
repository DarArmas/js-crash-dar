'use strict';

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

/*
en php puedes hacer esto
peliculas[] = "batman"
y se pone al final, en js no se puede
*/

//añadir al final del arreglo
peliculas.push("Batman");
console.log(peliculas);

//agregar desde prompt
var elemento = prompt("INTRODUCE TU PELICULA SSIISISIS: ");
peliculas.push(elemento);



//sacar elemento
peliculas.pop();

//para sacar un elemento especificamente

var indice = peliculas.indexOf('Batman');
//regresa -1 cuando no existe el indice
if(indice >= -1){
    peliculas.splice(indice, 1);
    //a .splice le indicas el indice y cuantos elementos va a borrar
}


//CONVERTIR ARRAY A TEXTO
//(este de aqui no procesa el array en si, REGRESA el array en string)
var peliculas_string = peliculas.join();
document.write(peliculas_string);


//CONVERTIR TEXTO A ARRAY
var ciudades = "New York, Sydney, Londres, CDMX";
var array_ciudades = ciudades.split(",");
//console.log(array_ciudades);

//ORDENAR ALFABETICAMENTE
array_ciudades.sort();

//DARLE LA VUELTA
array_ciudades.reverse();
console.log(array_ciudades);

//For in
document.write("<h1>Top de ciudades</h1>");
document.write("<ul>");

for (let ciudad in array_ciudades){
    document.write("<li>" + array_ciudades[ciudad] + "</li>");
}

document.write("</ul>");

