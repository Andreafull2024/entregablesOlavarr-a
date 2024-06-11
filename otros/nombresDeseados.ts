/*Construya un algoritmo que tenga un arreglo de dimensión deseada por el usuario y llénelo con los nombres que el usuario desee*/

import * as readlineSync from "readline-sync";

function llenarArreglo(): string[] {
    let dimension = readlineSync.questionInt("Ingrese la dimensión del arreglo: ");
    let  arreglo: string[] = [];
    
    for (let i = 0; i < dimension; i++) {
        let nombre = readlineSync.question("Ingrese un nombre: ");
        arreglo.push(nombre);
    }

    return arreglo;
}

let nombres: string[] = llenarArreglo();
console.log("Los nombres ingresados son: ", nombres);






