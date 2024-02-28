'use strict';


window.addEventListener('load', function () {

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");


    formulario.addEventListener('submit', function () {

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);
        
        //Validacion 
        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;  //o sea que se acabe la funcion
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        }
        
         if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("El apellido no es valido");
            document.querySelector("#error_apellidos").innerHTML = "El apellido no es valido";
            return false; 
        }else{
            document.querySelector("#error_apellidos").style.display = "none";
        }
        
         if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es valida");
            document.querySelector("#error_edad").innerHTML = "El apellido no es valido";
            return false; 
        }else{
             document.querySelector("#error_edad").style.display = "none";
        }
        
        
        
        box_dashed.style.display = "block";
        
        
        var datos_usuario = [nombre, apellidos, edad];
        
        for(var indice in datos_usuario){
            var parrafo = document.createElement("p");   //<p>
            parrafo.append(datos_usuario[indice]);       //nombre
            box_dashed.append(parrafo);                  //</p>
        }
        
      
        
        

    });





});

