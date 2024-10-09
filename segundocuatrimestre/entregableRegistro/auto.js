"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var vehiculo_1 = require("./vehiculo");
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anio, puertas) {
        this.vehiculo = new vehiculo_1.Vehiculo(marca, modelo, anio, "Auto");
        this.puertas = puertas;
    }
    Auto.prototype.getVehiculo = function () {
        return this.vehiculo;
    };
    Auto.prototype.getPuertas = function () {
        return this.puertas;
    };
    Auto.prototype.setPuertas = function (puertas) {
        this.puertas = puertas;
    };
    return Auto;
}());
exports.Auto = Auto;
