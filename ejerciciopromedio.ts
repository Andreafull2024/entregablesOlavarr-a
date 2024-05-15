import * as readlineSync from 'readline-sync';

suma: Number; nota: Number; promedio: Number; contador:Number;

let contador = 1;
let suma = 0;

while (contador <=10) {
    const nota= readlineSync.questionFloat("Ingrese su nota: ");
    suma= suma + nota;

    contador = contador + 1;

}
const promedio = suma/10;
console.log ("El promedio del alumno es:  " + promedio);