'use strict';

var edad = 18;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    
    case 25:
        imprime = "Ya eres un adulto";
    break;
    
    case 40:
        imprime = "Crisis de los cuarenta";
    break;
    
    case 75:
        imprime = "Ya eres un anciano";
    break;
    
    default:
        imprime  = "No mame wey deme una edad";    
    break;
    
}

console.log(imprime);
