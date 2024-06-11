/*Llenar un array de 10 posiciones con números aleatorios entre 0 y 99
• Para obtener números aleatorios crear una funcion Azar, que se base en las funciones disponibles en el
paquete Math: Math.random() devuelve un nro al azar entre 0 y 1.*/
var arregloCompletar = new Array(10);
var indice;
function Azar(tope) {
    return Math.floor(Math.random() * tope);
}
for (indice = 0; indice < 10; indice++) {
    arregloCompletar[indice] = Azar(100);
}
for (indice = 0; indice < 10; indice++) {
    console.log("El n\u00FAmero en la posici\u00F3n ".concat(indice, " es: ").concat(arregloCompletar[indice]));
}
