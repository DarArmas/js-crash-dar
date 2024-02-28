'use strict';
//SE PUEDEN DEFINIR ASI
var nombres = ["David", "Carlos", "Martin", "Jorge"];

//O ASI
var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "Kotlin");

/*
var elemento = parseInt(prompt("Que elemento del array quieres??", 0));

if(elemento >= nombres.length){
    alert("TE MAMASTE NO HAY ESE INDICE");
}else{
    alert("ELEGISTE A :" + nombres[elemento]);
}
*/

//RECORRER 

document.write("<h1>Lenguajes de programación del 2021</h1>");
/*
document.write("<ul>");

for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("</ul>");
*/

//FOREACH
//adentro del FOREACH hay una funcion de callback
document.write("<ul>");

lenguajes.forEach((elemento, indice) => {
    document.write("<li>Lenguaje " + indice + ": " + elemento + "</li>");
});

document.write("</ul>");