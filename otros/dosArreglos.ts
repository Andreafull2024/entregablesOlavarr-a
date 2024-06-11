/*• Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres y otro que
almacene 3 números ambos ingresados por el usuario.
• Al final debe imprimir los valores por consola.*/

import * as readlineSync from "readline-sync";

function mostrarArreglo(arreglo: number[] | string[]) {
    for (let index = 0; index < arreglo.length; index++) {
        console.log('En posición ' + index + ": " + arreglo[index]);
    }
}

function ingresarValores(arreglo: number[] | string[]) {
    for (let index = 0; index < arreglo.length; index++) {
        arreglo[index] = readlineSync.question("Ingrese valor: ");
    }
}

let nombres: string[] = new Array(2);
let numeros: number[] = new Array(3);

// Llenar los arreglos
console.log("Ingrese 2 nombres");
ingresarValores(nombres);
console.log("Ingrese 3 numeros");
ingresarValores(numeros);

console.log("Muestra nombres");
mostrarArreglo(nombres);
console.log("Muestra numeros");
mostrarArreglo(numeros);