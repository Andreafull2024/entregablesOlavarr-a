"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var registroautomotor_1 = require("./registroautomotor");
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var registro = new registroautomotor_1.RegistroAutomotor();
var auto1 = new auto_1.Auto("Volkswagen", "Suran", 2020, 4);
var moto1 = new moto_1.Moto("Gilera", "Smash", 2021, 1);
var camion1 = new camion_1.Camion("Mercedes", "Actros", 2023, 10000);
// Agregar instancias de vehículos al registro
registro.agregarAuto(auto1);
registro.agregarMoto(moto1);
registro.agregarCamion(camion1);
// Mostrar los vehículos registrados
console.log("Autos:", registro.getAutos());
console.log("Motos:", registro.getMotos());
console.log("Camiones:", registro.getCamiones());
