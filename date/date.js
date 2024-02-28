var fecha = new Date(); //trae todo 

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();

//uso plantilla
var textoHora =  `
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
`;

console.log(textoHora);

//para usar funciones matematicas se utiliza el objeto Mat
var random = Math.round(Math.random()*100);   //me lo da en 0.124121, por eso multiplicado
console.log(random);