/*Implementa una función que tome un arreglo de números como parámetro y devuelva el resultado de multiplicar todos los elementos.*/
var arreglodeNumeros = [5, 2, 7];
var resultadoMultiplicar = multiplicarElementos(arregloNumeros);
function multiplicarElementos(arreglo1) {
    return arreglo1.reduce(function (total, numero) { return total * numero; }, 1);
}
console.log("El resultado de la multiplicación es:", resultadoMultiplicar);
