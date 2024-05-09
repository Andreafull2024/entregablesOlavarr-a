"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese el número de la base: ");
var exponente = readlineSync.questionInt("Ingrese el número del exponente: ");
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
if (exponente < 0) {
    console.log('El exponente debe ser mayor o igual a cero.');
}
else {
    console.log('El resultado de {base}^{exponente} es: {resultado}');
}
