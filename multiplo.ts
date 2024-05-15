//Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que
//se indique como parámetro es múltiplo del segundo
//Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
//Recuerde que la operación mod permite saber si el resto de una división es cero//

function esMultiplo(numero: number, multiploDe: number): boolean {
    return numero % multiploDe === 0;
}

let multiplo: boolean = esMultiplo(8, 2);
console.log(multiplo);