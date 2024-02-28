'use strict';

/*
 Calculadora
 */ 
 var numero1 = parseInt(prompt('Introduce el primer numero',0));
 var numero2 = parseInt(prompt('Introduce el segundo numero',0));
 
 while(numero1<0 || numero2< 0 || isNaN(numero1) || isNaN(numero2)){
       numero1 = parseInt(prompt('Introduce el primer numero',0));
       numero2 = parseInt(prompt('Introduce el segundo numero',0));
 }
 
 var resultado = "La suma es: " + (numero1 + numero2) + "<br/>" +
                "La resta es: " + (numero1 - numero2) + "<br/>" +
                "La multiplicacion es: " + (numero1*numero2) + "<br/>" +
                "la division es: " + (numero1/numero2) + "<br>";
        
 document.write(resultado);
 
 //PARA HACER SALTO DE LINEAS EN ALERTA PUES RECUERDA, ES UNA CONSOLA, USA \n
  var resultado_consola = "La suma es: " + (numero1 + numero2) + "\n" +
                "La resta es: " + (numero1 - numero2) + "\n" +
                "La multiplicacion es: " + (numero1*numero2) + "\n" +
                "la division es: " + (numero1/numero2) + "\n";
        
alert(resultado_consola);