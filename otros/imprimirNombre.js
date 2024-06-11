"use strict";
/*Dado un Array con nombres de tamaño 5, pedir al usuario que ingrese un nombre y verificar
si está en el arreglo .Inmprimir el arreglo y si esta o no en el*/
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var nombres = ["Juan", "Paula", "Sofia", "Ana", "Mauricio"];
var nombreBuscado = readlineSync.question("Ingrese nombre a buscar: ");
for (var indice = 0; indice < nombres.length; indice++)
    if (nombres[indice] === nombreBuscado) {
        console.log("El nombre buscado esta en la posicion: ".concat(indice));
    }
console.log(nombres);
