import fs from "node:fs";

/*let contenido: string= "Nuevo contenido"; */

/*let contenido: number=9

let contenidoString: string = contenido.toString ();*/

const nombres: string[] = ["Juan", "Amalia", "Nicolas", "Carlos"];
let contenido: string = ""; 

for (let i: number=0 ; i < nombres.length; i++){
    contenido += `${nombres[i]} `; //template string nombres [i]+""
}

fs.writeFileSync('./test.txt', contenido);
console.log ("Finalizado");

//Leer informacion de txt

const datos: string = fs.readFileSync('./test.txt', 'utf8');
const datos2: string= datos.trim(); // saca los espacios de adelantae y atras
const nuevoArray: string [] = datos2.split (" ");
console.log (nuevoArray)