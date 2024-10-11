
// main.ts

import { RegistroAutomotor } from './registroautomotor';
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

const registro = new RegistroAutomotor();

const auto1 = new Auto("Volkswagen", "Suran", 2020, 4);
const moto1 = new Moto("Gilera", "Smash", 2021, 1, "Deportiva");
const camion1 = new Camion("Mercedes", "Actros", 2023, 123456);

registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

console.log(registro.getVehiculos());