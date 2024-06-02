/*Implemente un algoritmo de ordenamiento con el método BubbleSort, para que ordene un arreglo de longitud N en orden descendente*/



let arreglo : number[]= [25, 2, 70, 12, 45, 8, 95];//numeros elegidos 
burbuja(arreglo)
 


//Defino la función llamada "burbuja" que toma un arreglo de números como parámetro.
function burbuja(arreglo: number[],) {
    for (let i: number = 0; i < arreglo.length; i++) {
        for (let j: number = 0; j < (arreglo.length - 1); j++) {
            if (comparar(arreglo, j, j + 1) == 1) {     //Verificamos si el resultado de llamar a la función "comparar" con elementos específicos del array es igual a 1.
                intercambiar(arreglo, j, j + 1);        //Llamamos a la función "intercambiar" para que haga el cambio en los elementos del areglo si se cumple la condición en el paso anterior.
            }
        }
    }
}
console.log(arreglo); //muestra por consola el arreglo

/
function comparar(arreglo: number[], i: number, j: number): number {     //Declaramos funcion comparar
    let comparacion: number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
        
    } else {
        comparacion = 1;
    }
    return comparacion;
}
  
function intercambiar(arreglo: number[], i: number, j: number) {             //Declaramos funcion intercambiar
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}