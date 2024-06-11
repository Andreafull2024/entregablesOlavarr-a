/*Construya un algoritmo que tenga un arreglo de dimensión 5 y llénelo con los números que el usuario
desee. Muestre los números del arreglo al usuario*/

import * as readlineSync from "readline-sync";

let nroDeseadoArreglo : number[] = new Array (5) ;


function LlenarArray(array: number[]) {
    for (let index = 0; index < array.length; index++) {
        array[index] = readlineSync.questionFloat("Ingrese un numero: ");
    }
}
LlenarArray(nroDeseadoArreglo);
console.log(nroDeseadoArreglo);




function obtenerPromedio(arr:number[]): string {    
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma % arr.length;
    console.log(promedio);
}

