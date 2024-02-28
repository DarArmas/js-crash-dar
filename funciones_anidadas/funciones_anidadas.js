'use strict';

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "<br/>");
    document.write("Resta: " + (numero1 - numero2) + "<br/>");
    document.write("Multiplicacion: " + (numero1 * numero2) + "<br/>");
    document.write("Division: " + (numero1 / numero2) + "<br/>");
}


function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
}

function calculadora_2(numero1, numero2, mostrar = true) {

    if (mostrar) {
        porPantalla(numero1, numero2);
    } else {
        porConsola(numero1, numero2);
    }
    
    return true;
}

calculadora_2(6, 12);


