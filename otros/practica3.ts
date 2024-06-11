/*Implementa una función que tome un arreglo de números como parámetro y devuelva el número más grande.*/



let arregloNumeros: number[] = [9, 8, 33, 22, 1];
let maximo = arregloNumeros [0];


function encontrarNumeroMasGrande(numeros: number[]): number {
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }

    return maximo;
}

// Ejemplo de uso

let numeroMasGrande = encontrarNumeroMasGrande(arregloNumeros);
console.log("El número más grande es: " + numeroMasGrande);