/*Invertir una palabra ingresada por el usuario*/

import * as readlineSync from "readline-sync";
let palabra : string= readlineSync.question("Ingrese una palabra: ");

//ARGENTINA

for (let index = palabra.length; index >=0; index--) {
    console.log(palabra[index]);
}

