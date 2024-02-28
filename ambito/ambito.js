'use strict';

//UNA VARIABLE DECLARADA FUERA DE UNA FUNCION SI ME LA AGARRA ADENTRO DE LA FUNCION
//UNA VARIABLE DECLARADA ADENTRO DE UNA FUNCION NO ME LA AGARRA AFUERA



function holaMundo(texto){
    var hola_mundo = "Texto dentro de una funcion";
    
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

var numero = 12;
var texto = "hola mundo soy una variable que viene desde el parametro";
holaMundo(texto);

//console.log(hola_mundo);  esto no se puede hacer