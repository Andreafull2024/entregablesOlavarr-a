"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
suma: Number;
nota: Number;
promedio: Number;
contador: Number;
var contador = 1;
var suma = 0;
while (contador <= 10) {
    var nota = readlineSync.questionFloat("Ingrese su nota: ");
    suma = suma + nota;
    contador = contador + 1;
}
var promedio = suma / 10;
console.log("El promedio del alumno es:  " + promedio);
