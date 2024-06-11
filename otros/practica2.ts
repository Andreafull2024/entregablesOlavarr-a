/*Crea una función que tome un arreglo de números como parámetro y devuelva el promedio de los elementos*/


    function calcularPromedio(numeros: number[]): number {
        let suma = 0;
    
        for (let num of numeros) {
            suma += num;
        }
    
        return suma / numeros.length;
    }
    const resultado = sumarNumeros(20, 15);
    const promedio = calcularPromedio(numeros);
    console.log(promedio);

}
