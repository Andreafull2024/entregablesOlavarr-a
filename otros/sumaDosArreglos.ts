/*• Sumar los elementos de cada una de las posicionesde dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario*/

import * as readlineSync from "readline-sync";

let array1: number[] = new Array(3);
let array2: number[] = new Array(3);
let suma: number[] = new Array(3);

// Lleno primer arreglo
console.log("Ingrese 3 numeros para llenar el primer arreglo");
LlenarArray(array1);

// Lleno segundo arreglo
console.log("Ingrese 3 numeros para llenar el segundo arreglo");
LlenarArray(array2);

// Sumo los dos arreglos
suma2Array(array1, array2, suma);

console.log("El arreglo sumado queda: ");
console.log(suma);

function LlenarArray(array: number[]) {
    for (let index = 0; index < array.length; index++) {
        array[index] = readlineSync.questionFloat("Ingrese un numero: ");
    }
}

function suma2Array(array1: number[], array2: number[], suma: number[]) {
    for (let index = 0; index < array1.length; index++) {
        suma[index] = array1[index] + array2[index];
    }
}