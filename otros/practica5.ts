/*Implementa una función que tome un arreglo de números como parámetro y devuelva el resultado de multiplicar todos los elementos.*/

let arregloNumeros: number[] = [5, 2, 7];
let resultadoMultiplicar = multiplicarElementos(arregloNumeros);

function multiplicarElementos(arreglo1: number[]): number {
    return arreglo1.reduce((total, numero) => total * numero, 1);
}

console.log("El resultado de la multiplicación es:", resultadoMultiplicar);
