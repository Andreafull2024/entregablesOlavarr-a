import * as readlineSync from 'readline-sync';

let base : number = readlineSync.questionInt("Cual es la base: "); 
let altura : number = readlineSync.questionInt("Cual es la altura: "); 
let area : number = (base*altura)/2

function calcularAreaTriangulo (base:number,altura:number):number {
    return (base*altura)/2;
    };
    
    let i:number;
       for (i = 1; i <= 100; i++) {
console.log("El area es = ", calcularAreaTriangulo (i, i*2));
}



