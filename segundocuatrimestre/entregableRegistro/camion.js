"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var vehiculo_1 = require("./vehiculo");
var Camion = /** @class */ (function () {
    function Camion(marca, modelo, anio, capacidadCarga) {
        this.vehiculo = new vehiculo_1.Vehiculo(marca, modelo, anio, "Camion");
        this.capacidadCarga = capacidadCarga;
    }
    Camion.prototype.getVehiculo = function () {
        return this.vehiculo;
    };
    Camion.prototype.getCapacidadCarga = function () {
        return this.capacidadCarga;
    };
    Camion.prototype.setCapacidadCarga = function (capacidadCarga) {
        this.capacidadCarga = capacidadCarga;
    };
    return Camion;
}());
exports.Camion = Camion;
