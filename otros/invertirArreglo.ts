/*Almacene en un arreglo de tamaño N los números ingresados por el usuario
• La dimensión N también es ingresada por el usuario 
 Muestre los números del arreglo pero del ultimo al primero*/


 import * as readlineSync from "readline-sync";

 let arregloN: number = readlineSync.questionInt("Ingrese la dimensión del arreglo: ");
 let numeros: number[] = [];
 
 function llenarArreglo(numeros: number[]): undefined {
     for (let i = 0; i < arregloN; i++) {
         let numero = readlineSync.questionInt(`Ingrese el número ${i + 1}: `);
         numeros.push(numero);
     }
     return undefined;
 }
 
 llenarArreglo(numeros);
 
 for (let index = numeros.length - 1; index >= 0; index--) {
     console.log(numeros[index]);
 }
 
 console.log("Los numeros del arreglo invertidos son: ", numeros);




