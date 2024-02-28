'use strict';

//BOM: browser mode object
function getBom(){
    //ver el tamaño de la ventana
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    
    //ver url cargada
    console.log(window.location);
}

//REDIRIGIR CON JAVASCRIPT
function redirect(url){
    window.location.href = url;
}

//ABIR una pestaña nueva
function abrirVentana(url){
    window.open(url, "", "width=400, height=300");
}


getBom();
