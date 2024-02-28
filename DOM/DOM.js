'use strict';

//DOM : Document objetct model

function cambiaColor(color) {
    caja.style.background = color;
}

//var caja = document.getElementById("micaja");
//tambien puedes seleccionar un objeto del DOM con un query selector 
var caja = document.querySelector("#micaja");

//ahora caja es un objeto de tipo div
caja.innerHTML = "TEXTO EN LA CAJA DESDE JS";
caja.style.fontsize = "22px";
caja.style.padding = "20px";
//hasta se le pude poner una clase
caja.className = "hola";


//CONSEGUIR TODOS LOS ELEMENTOS POR SU ETIQUETA
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion"); //aqui voy a crear nuevas 

//CREAR ELEMENTOS HTML
var hr= document.createElement("hr");

/*
seccion.append(hr);  //añadir <hr> despues de lo que hay en el padre (seccion)
seccion.prepend(hr); //añadir <hr> antes de lo que hay en el padre (seccion)
*/
 
//no puede usar forEach en colleciones html
for (var valor in todosLosDivs) {

    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p"); //creame un <p>
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        //append = anexar despues del padre
        //prepend = anteponer
        parrafo.append(texto);   //a la <p> metele el texto    
        seccion.append(parrafo); //a la seccion metele el <p>texto</p>
    }

}

seccion.append(hr);

//OBTENER LOS OBJETOS HTML POR CLASES
var divsRojos = document.getElementsByClassName('rojo');    //Recuerda que cuando hace esto me agarra mas informacion aparte de los elementos, VE LA COMPROBACION EN EL FOR

//divRojos.style.background = "red"; //no puedes cambiarle propiedades de todos de putazo, para eso haz un for in

for(var div in divsRojos){
    
    if(divsRojos[div].className == "rojo"){
         divsRojos[div].style.background = "red";
    }
   
}


//obtener por clases con QuerySelector
var divsAmarillos = document.querySelectorAll('.amarillo');
console.log(divsAmarillos);



