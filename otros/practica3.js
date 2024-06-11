"use strict";
/*Implementa una función que tome un arreglo de números como parámetro y devuelva el número más grande.*/
Object.defineProperty(exports, "__esModule", { value: true });
var arregloNumeros = [9, 8, 33, 22, 1];
var maximo = arregloNumeros[0];
function encontrarNumeroMasGrande(numeros) {
    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
}
// Ejemplo de uso
var numeroMasGrande = encontrarNumeroMasGrande(arregloNumeros);
console.log("El número más grande es: " + numeroMasGrande);
