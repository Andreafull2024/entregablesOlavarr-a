/*Crea una función que tome un arreglo de números como parámetro y devuelva el promedio de los elementos*/
function calcularPromedio(numeros) {
    var suma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        suma += num;
    }
    return suma / numeros.length;
}
var resultado = sumarNumeros(20, 15);
var promedio = calcularPromedio(numeros);
console.log(promedio);
