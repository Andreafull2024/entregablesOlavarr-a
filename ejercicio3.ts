import * as readlineSync from 'readline-sync';

let numero1 : number = readlineSync.questionInt("Ingrese un número: "); ;
let numero2 : number = readlineSync.questionInt("Ingrese un número: "); ;
let opcionMenu : number = readlineSync.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
let resultadoFuncion:number=0;

function calcularResultado (numero1:number, numero2:number,opcionMenu:number):number {
    let resultado:number=0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    } else if (opcionMenu == 2) {
    resultado = numero1 - numero2;
    }
return resultado;
}

resultadoFuncion=calcularResultado(numero1,numero2,opcionMenu);

dibujarGuionesN(resultadoFuncion);
console.log ('El resultado es: ',resultadoFuncion);
dibujarGuionesN(resultadoFuncion);


function dibujarGuionesN (numeroDeGuiones : number) {
    let i : number;
    let linea : string = "";
    for (i = 0; i <= numeroDeGuiones; i++) {
               linea = linea + "-";
    };
        console.log(linea);
    }