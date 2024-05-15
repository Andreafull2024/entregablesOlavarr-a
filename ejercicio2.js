"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funcion para calcular la potencia de un numero
// Si el exponente es 0, el resultado siempre será 1
function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    else {
        var resultado = 1;
        for (var i = 0; i < exponente; i++) {
            resultado *= base;
        }
        return resultado;
    }
}
var base = 3;
var exponente = 4;
var potencia = calcularPotencia(base, exponente);
console.log("el resultado es: ");
