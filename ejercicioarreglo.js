// Definir los numeros del arreglo
var numeros = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
// Función para encontrar el número más grande en el arreglo
function encontrarNumeroMasGrande(arreglo) {
    var numeroMasGrande = arreglo[0];
    for (var i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > numeroMasGrande) {
            numeroMasGrande = arreglo[i];
        }
    }
    return numeroMasGrande;
}
// Función para determinar si un número es par o impar
//Es par si el numero es divisible por 2
function esPar(numero) {
    return numero % 2 === 0;
}
// Almacena el número más grande en una variable global
var numeroMasGrande = encontrarNumeroMasGrande(numeros);
// Imprime el resultado por consola
console.log('El numero mas grande es: ' + numeroMasGrande);
// Determinar si el número más grande es par o impar y pasarlo a una función
var resultado = esPar(numeroMasGrande) ? 'par' : 'impar';
console.log('El numero mas grande es: ' + resultado);
