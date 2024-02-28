'use strict';

//arrays multidimensionales: array dentro de array

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

//ver todo
//console.log(cine);

//acceder a 'Comedia', como ejemplo
console.log(cine[0][2]);

