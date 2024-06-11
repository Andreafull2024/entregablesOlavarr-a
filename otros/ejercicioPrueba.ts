/*Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese). Cuente la cantidad de A, E y O que hay en ese string y 
almacene esas cantidades en otro arreglo de 3 elementos en el orden que usted desee.
Pegar el codigo aquí */

let texto: string = "Hoy tengo una evaluacion de programacion";
let letrasAEO: string[] = ["A", "E", "O"];
let cantidades: number[] = [0, 0, 0];

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "A") {
        cantidades[0]++;
    } else if (texto[i] === "E") {
        cantidades[1]++;
    } else (texto[i] === "O") {
        cantidades[2]++;
    }
}

console.log(cantidades)