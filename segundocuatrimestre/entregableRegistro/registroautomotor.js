"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (index, vehiculo) {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos[index] = vehiculo;
        }
        else {
            throw new Error("Índice fuera de rango");
        }
    };
    RegistroAutomotor.prototype.darDeBaja = function (index) {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos.splice(index, 1);
        }
        else {
            throw new Error("Índice fuera de rango");
        }
    };
    RegistroAutomotor.prototype.getVehiculos = function () {
        return this.vehiculos;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
