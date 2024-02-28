'use strict';

/*
 1) pida 6 numeros por pantalla y los meta en un array
 2) mostrarlo en el cuerpo de la pagina y en la consola
 3) ordeanarlo y mostrarlo
 4) invertirlo y mostrarlo
 5) mostrar cuantos elementos tiene el array
 6) busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 */

var numeros = [];

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array " + textoCustom + "</h1>");

    document.write("<ul>");
        elementos.forEach((elemento, index) => {
            document.write("<li>" + (index + 1) + ") " + elemento + "</li>");
        });
    document.write("</ul>");
}

for (var i = 0; i < 6; i++) {
    numeros.push(parseInt(prompt("Introduce un numero: ", 0)));
}


//mostra el array en el cuerpo de la pagina
mostrarArray(numeros, "original");

//ordenar y mostrar
numeros.sort(function(a,b){return a-b;});   //sort solo tiene en cuenta la primera cifra
mostrarArray(numeros, "ordenados");

//voltear y mostrar
numeros.reverse();
mostrarArray(numeros, "Invertidos");

//Contar elementos
document.write("<h1>El array tiene " + numeros.length + " elementos</h1>");

//Buscar un elemento
var busqueda = parseInt(prompt("Cual numero quieres buscar: ", 0));

var posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != 1){
    document.write("<hr/><h1>ENCONTRADO</h1>");
    document.write("<h1>Posicion de la busqueda: " + posicion + "</h1></hr>");
}else{
    document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}