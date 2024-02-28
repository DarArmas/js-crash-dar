'use strict';


let prueba = "hola";
/*
 * DIFERENCIA let y var
 * let: se limita al bloque o expresion en donde se esté usando
 * var: variable global 
 */

//PRUEBA CON VAR


if(true){
    var numero = 50;
    console.log(numero);
}

console.log(numero); //aqui me arroja 50



if(true){
    let texto = "Curso JS"; 
    console.log(texto);
}

console.log(texto);  //ni siquiera me llega (texto is not defined)


