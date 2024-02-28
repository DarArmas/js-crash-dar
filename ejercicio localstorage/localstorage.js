'use strict';

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit', function(){
   
    var titulo = document.querySelector("#addpelicula").value;
        
       //si no le mando vacio
    if(titulo.length >= 1){
        localStorage.setItem(titulo,titulo);
    }
    
});

var ul = document.querySelector("#peliculas-list");

for(var i in localStorage){
    //localStorage me trae mas objetos
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}




var formulariob = document.querySelector("#formBorrarPeliculas");

formulariob.addEventListener('submit', function(){
    var titulo = document.querySelector("#borrarPelicula").value;  //cual quiero borrar
        
  for(var i in localStorage){
      
      //si existe ese elemento borralo
      if(localStorage[i] == titulo){
          localStorage.removeItem(titulo);
      }else{
          alert("ESA PELICULA NO LA PUSISTE MI PANA");
          return;
      }
  }
    
});