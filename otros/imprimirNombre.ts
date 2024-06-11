/*Dado un Arreglo de tamaño 5 con nombres, pedir al usuario que ingrese un nombre y verificar
si está en el arreglo .Inmprimir el arreglo y si esta o no en el*/

import * as readlineSync from "readline-sync";

let nombres: string[] = ["Juan", "Paula", "Sofia", "Ana", "Mauricio"];
let nombreBuscado: string = readlineSync.question("Ingrese nombre a buscar: ");

for (let indice = 0; indice < nombres.length; indice++) 

    if (nombres[indice]===nombreBuscado){
    console.log(`El nombre buscado esta en la posicion: ${indice}`);
}


console.log(nombres);