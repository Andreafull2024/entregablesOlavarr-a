"use strict";
/*• Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que
almacene 3 números ambos ingresados por el usuario.
• Al final debe imprimir los valores por consola.*/
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function mostrarArreglo(arreglo) {
    for (var index = 0; index < arreglo.length; index++) {
        console.log('En posición ' + index + ": " + arreglo[index]);
    }
}
function ingresarValores(arreglo) {
    for (var index = 0; index < arreglo.length; index++) {
        arreglo[index] = readlineSync.question("Ingrese valor: ");
    }
}
var nombres = new Array(2);
var numeros = new Array(3);
// Llenar los arreglos
console.log("Ingrese 2 nombres");
ingresarValores(nombres);
console.log("Ingrese 3 numeros");
ingresarValores(numeros);
console.log("Muestra nombres");
mostrarArreglo(nombres);
console.log("Muestra numeros");
mostrarArreglo(numeros);
