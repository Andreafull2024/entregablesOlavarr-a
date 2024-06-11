/*Guarda la información de los siguientes arrays:
constprecios:number[] =[525, 3500, 400, 1999]; constproductos:string[] =["Leche", "Galletitas", "Harina", "Queso"]; 
en un archivo “precios.txt” y “productos.txt” respectivamente.
Luego recupera la información en forma de array nuevamente y mostrala por consola.*/

/*import * as fs from "node:fs";

const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"]; //arreglo
let contenidoProducto: string = ""; //defino la variable para acumular el contenido del arreglo
for (let i: number = 0; i < productos.length; i++) { //lo recorro
    contenidoProducto += `${productos[i]} `;
}
fs.writeFileSync('./productos.txt', contenidoProducto);//Creo el txt 


const precios: number[] = [525, 3500, 400, 1999];//arreglo
let precioString: string = ""; //defino la variable para acumular el contenido del arreglo
let contenidoString: string = precioString.toString();  // se usa cuando es numero

for (let i= 0; i < precios.length; i++) {    //Lo recorro
     precioString += `${precios[i]} `;

}
fs.writeFileSync('./precios.txt', precioString);



//recupero texto
contenidoProducto = fs.readFileSync('./productos.txt', 'utf8');
const productos: string = contenidoProducto.trim(); 
const productosSuper : string[] = productos.split(" ");


precioString = fs.readFileSync('./precios.txt', 'utf8');
const precio: string = precioString.trim(); 
const preciosSuper : string[] = precio.split(" ");
console.log("productosSuper");
console.log("preciosSuper");*/


import * as fs from "node:fs"

const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];//arreglo
let contenidoProducto: string = "";       //defino la variable
for (let i: number = 0; i < productos.length; i++) { //Lo recorro
    contenidoProducto += `${productos[i]} `;
}
fs.writeFileSync('./productos.txt', contenidoProducto);

const precios: number[] = [525, 3500, 400, 1999];//arreglo
let precioString: string = "";      //defino la variable
const preciosSuper1 : string[] = precioString.split(" "); //se usa cuando es number
for (let i = 0; i < precios.length; i++) {   ////Lo recorro
    precioString += `${precios[i]} `;
}
fs.writeFileSync('./precios.txt', precioString);

// Recuperar texto
const contenidoProducto1 = fs.readFileSync('./productos.txt', 'utf8');
const productosSuper: string[] = contenidoProducto.trim().split(" ");

const precioString1 = fs.readFileSync('./precios.txt', 'utf8');
const preciosSuper: string[] = precioString.trim().split(" ");

console.log(productosSuper);
console.log(preciosSuper);