// Definir los numeros del arreglo
let numeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];

// Función para encontrar el número más grande en el arreglo
function encontrarNumeroMasGrande(arreglo: number[]): number {
    let numeroMasGrande = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > numeroMasGrande) {
            numeroMasGrande = arreglo[i];
        }
    }
    return numeroMasGrande;
}

// Función para determinar si un número es par o impar
//Es par si el numero es divisible por 2
function esPar(numero: number): boolean {
    return numero % 2 === 0;
}

// Almacena el número más grande en una variable global
let numeroMasGrande = encontrarNumeroMasGrande(numeros);

// Imprime el resultado por consola
console.log ('El numero mas grande es: ' + numeroMasGrande);


// Determinar si el número más grande es par o impar y pasarlo a una función
let resultado = esPar(numeroMasGrande) ? 'par' : 'impar';
console.log ('El numero mas grande es: ' +  resultado);
