"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }
    RegistroAutomotor.prototype.agregarAuto = function (auto) {
        this.autos.push(auto);
    };
    RegistroAutomotor.prototype.agregarMoto = function (moto) {
        this.motos.push(moto);
    };
    RegistroAutomotor.prototype.agregarCamion = function (camion) {
        this.camiones.push(camion);
    };
    RegistroAutomotor.prototype.getAutos = function () {
        return this.autos;
    };
    RegistroAutomotor.prototype.getMotos = function () {
        return this.motos;
    };
    RegistroAutomotor.prototype.getCamiones = function () {
        return this.camiones;
    };
    RegistroAutomotor.prototype.modificarAuto = function (index, auto) {
        if (index >= 0 && index < this.autos.length) {
            this.autos[index] = auto;
        }
    };
    RegistroAutomotor.prototype.modificarMoto = function (index, moto) {
        if (index >= 0 && index < this.motos.length) {
            this.motos[index] = moto;
        }
    };
    RegistroAutomotor.prototype.modificarCamion = function (index, camion) {
        if (index >= 0 && index < this.camiones.length) {
            this.camiones[index] = camion;
        }
    };
    RegistroAutomotor.prototype.darDeBajaAuto = function (index) {
        if (index >= 0 && index < this.autos.length) {
            this.autos.splice(index, 1); // Eliminar el auto del array
        }
    };
    RegistroAutomotor.prototype.darDeBajaMoto = function (index) {
        if (index >= 0 && index < this.motos.length) {
            this.motos.splice(index, 1); // Eliminar la moto del array
        }
    };
    RegistroAutomotor.prototype.darDeBajaCamion = function (index) {
        if (index >= 0 && index < this.camiones.length) {
            this.camiones.splice(index, 1); // Eliminar el camión del array
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
