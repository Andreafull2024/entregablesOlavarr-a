"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero1 = readlineSync.questionInt("Ingrese un número: ");
;
var numero2 = readlineSync.questionInt("Ingrese un número: ");
;
var opcionMenu = readlineSync.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
var resultadoFuncion = 0;
function calcularResultado(numero1, numero2, opcionMenu) {
    var resultado = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    }
    else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}
resultadoFuncion = calcularResultado(numero1, numero2, opcionMenu);
dibujarGuionesN(resultadoFuncion);
console.log('El resultado es: ', resultadoFuncion);
dibujarGuionesN(resultadoFuncion);
function dibujarGuionesN(numeroDeGuiones) {
    var i;
    var linea = "";
    for (i = 0; i <= numeroDeGuiones; i++) {
        linea = linea + "-";
    }
    ;
    console.log(linea);
}
