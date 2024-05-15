//Implemente un método llamado imprimirNombre que reciba un nombre y un apellido y devuelva los dos datos concatenados
//en una variable de tipo string.El string devuelto debe imprimirse por consola.//

function imprimirNombre (nombre:string , apellido:string): string {
    let nombreCompleto: string = nombre + " " + apellido
    return nombreCompleto;
}

console.log (imprimirNombre ("Andrea", "San Juan"))