"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese el número de la base: ");
var exponente = readlineSync.questionInt("Ingrese el número del exponente: ");
var resultado = calcularPotencia(base, exponente);
function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    else {
        var resultado_1 = 1;
        for (var i = 0; i < exponente; i++) {
            resultado_1 *= base;
        }
        return resultado_1;
    }
}
if (exponente < 0) {
    console.log('El exponente debe ser mayor o igual a cero.');
}
else {
    var resultado_2 = calcularPotencia(base, exponente);
    console.log('El resultado es: ' + resultado_2);
}
