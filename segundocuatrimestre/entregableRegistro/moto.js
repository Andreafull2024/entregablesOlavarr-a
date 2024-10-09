"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var vehiculo_1 = require("./vehiculo");
var Moto = /** @class */ (function () {
    function Moto(marca, modelo, anio, ruedas) {
        this.vehiculo = new vehiculo_1.Vehiculo(marca, modelo, anio, "Moto");
        this.ruedas = ruedas;
    }
    Moto.prototype.getVehiculo = function () {
        return this.vehiculo;
    };
    Moto.prototype.getRuedas = function () {
        return this.ruedas;
    };
    Moto.prototype.setRuedas = function (ruedas) {
        this.ruedas = ruedas;
    };
    return Moto;
}());
exports.Moto = Moto;
