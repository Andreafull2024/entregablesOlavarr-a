import * as readlineSync from 'readline-sync';

// Funcion para calcular la potencia de un numero
// Si el exponente es 0, el resultado siempre será 1

function calcularPotencia(base: number, exponente: number): number {
    if (exponente === 0) {
        return 1;
    } else {
        let resultado = 1;
    for (let i = 0; i < exponente; i++) {
      resultado *= base;
    }
        return resultado;
    }
}
const base = 3;
const exponente = 4;
const potencia = calcularPotencia(base, exponente);
console.log ("el resultado es: ");
