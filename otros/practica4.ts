/*Escribe una función que tome dos arreglos como parámetros y devuelva un nuevo arreglo que contenga los elementos de ambos arreglos concatenados.*/


let arreglo1: number[] = [1, 2, 3];
let arreglo2: number[] = [4, 5, 6];
let arregloConcatenado = concatenarArreglos(arreglo1, arreglo2);

function concatenarArreglos(arreglo1: number[], arreglo2: number[]): number[] {
    return arreglo1.concat(arreglo2);
}

console.log("Arreglo concatenado:", arregloConcatenado);