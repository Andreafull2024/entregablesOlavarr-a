"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    else {
        return Math.pow(base, exponente);
    }
}
rl.question('Ingrese la base: ', function (baseInput) {
    var base = parseInt(baseInput);
    rl.question('Ingrese el exponente (mayor o igual a cero): ', function (exponenteInput) {
        var exponente = parseInt(exponenteInput);
        if (exponente < 0) {
            console.log('El exponente debe ser mayor o igual a cero.');
        }
        else {
            var resultado = calcularPotencia(base, exponente);
            console.log("El resultado de ".concat(base, "^").concat(exponente, " es: ").concat(resultado));
        }
        rl.close();
    });
});
