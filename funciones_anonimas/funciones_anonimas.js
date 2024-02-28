'use strict';

/*FUNCION ANONIMA:  bloque de instrucciones que no tiene nombre
 * se usa mucho para hacer callbacks
 


var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}

/*
 * se llama asi: pelicula("batman");
 */

//CALLBACK:
//es una funcion anonima que se le pasa a la funcion como parametro   
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    
    return sumar;
}

sumame(5,7, (dato) => {
    console.log("La suma es: " + dato);
},
function(dato){
    console.log("La suma por dos es " + (dato*2));
});

//puedes sustituir "function" por =>


/*
 * ES COMO SI HICIERA:
    var sumaYmuestra = function(dato){
        console.log("La suma es: " + dato);
    }
   
   
   y luego paso sumaYmuestra como parametro
*/