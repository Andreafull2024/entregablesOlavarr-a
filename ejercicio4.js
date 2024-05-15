"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese el número de la base: ");
var altura = readlineSync.questionInt("Ingrese el número de la altura: ");
var resultado = calcularAreaTriangulo(base * altura) / 2;
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
;
var i;
for (i = 1; i <= 100; i++) {
    console.log("El area es = ", calcularAreaTriangulo(i, i * 2));
}
