/*Implementar la clase RegistroAutomotor (Autos, Motos, Camiones) y deben tener los metodos:
AgregarVehiculo, get y set, modificar un vehiculo, dar de baja, incorporando los conceptos nuevos:
Encapsulamiento y composicion.*/
// main.ts
import { RegistroAutomotor } from './registroautomotor';
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

const registro = new RegistroAutomotor();

const auto1 = new Auto("Volkswagen", "Suran", 2020, 4);
const moto1 = new Moto("Gilera", "Smash", 2021, 1);
const camion1 = new Camion("Mercedes", "Actros", 2023, 10000); 

// Agregar instancias de vehículos al registro
registro.agregarAuto(auto1);
registro.agregarMoto(moto1);
registro.agregarCamion(camion1);

// Mostrar los vehículos registrados
console.log("Autos:", registro.getAutos());
console.log("Motos:", registro.getMotos());
console.log("Camiones:", registro.getCamiones());