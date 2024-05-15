//Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores
//Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,16, por lo que la respuesta debería ser 5
//Re-utilice el método esMultiplo implementado para el ejercicio anterior





function esMultiplo(numero: number, multiploDe: number): boolean {
    return numero % multiploDe === 0;
}

let multiplo: boolean = esMultiplo(8, 2);
console.log(multiplo);