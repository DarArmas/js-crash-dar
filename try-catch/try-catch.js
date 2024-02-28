//para controlar expeciones

try{
    //lo que es susceptible a fallar
    var vector = new Array(99999999999999999);
}catch(error){
    //que haremos con ese error
    console.log(error);
    alert("Ha ocurrido un error en el código");
}