'use strict';

//Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

//voy a sacar un json de una api rest fake
var usuarios = [];

//esto es una promesa
getUsuarios()
            .then(data => data.json())  //convierteme a json (recuerda que todo se manda en string)
            .then(users => {
            listadoUsuarios(users.data);
    
            return getJanet(); //para que me haga la siguiente promesa
            })
            .then(data => data.json())  //es una peticion nueva, transformala
            .then(user => {
                mostrarJanet(user.data);
            });

function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=1');
}


function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}

            //recibe JSON
function listadoUsuarios(usuarios){
    //recorrer arreglo usuarios
            usuarios.map((user,i) => {
                let nombre = document.createElement('h3');
                nombre.innerHTML = i + ' - ' + user.first_name + " " + user.last_name;
                div_usuarios.appendChild(nombre);
                document.querySelector(".loading").style.display = 'none';
            });
}

function mostrarJanet(user){
    
                let nombre = document.createElement('h4');
                let avatar = document.createElement('img');
                
                nombre.innerHTML = user.first_name + " " + user.last_name;
                avatar.src = user.avatar;
                avatar.width = '100';
                
                div_janet.appendChild(nombre);
                div_janet.appendChild(avatar);
                document.querySelector("#janet .loading").style.display = 'none';
        
}