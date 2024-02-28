'use strict';

//comprobar si el navegador es compatible con localstorage
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con LocalStorage");
}

//Guardar datos
localStorage.setItem("titulo", "Curso de Symfony de Víctor Robles");

//Recuperar elemento
                                                                    //key
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");


//Guardar objetos
var usuario = {
    nombre: "Darnell Armas",
    email: "darnell@gmail.com",
    web: "darnellarmas.com.mx"
};
            //en el localstorage se tiene que converir json -> string
localStorage.setItem("usuario", JSON.stringify(usuario));


//recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

document.querySelector("#datos").append(" " + userjs.nombre + " " + userjs.email);


//borrar elemento de ls
localStorage.removeItem("usuario");

//borrar todo
localStorage.clear();