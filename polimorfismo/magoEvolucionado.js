"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagoEvolucionado = void 0;
var personaje_1 = require("./personaje");
var MagoEvolucionado = /** @class */ (function (_super) {
    __extends(MagoEvolucionado, _super);
    function MagoEvolucionado(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.Energia = 500;
        _this.mostrarEnergia(); // Call the method with parentheses
        return _this;
    }
    MagoEvolucionado.prototype.hechizar = function () {
        return console.log("".concat(this.nombre, " arroja un polvo de estrellas"));
    };
    MagoEvolucionado.prototype.mostrarEnergia = function () {
        return console.log("".concat(this.nombre, " La energ\u00EDa del mago evolucionado es de ").concat(this.Energia));
    };
    return MagoEvolucionado;
}(personaje_1.Personaje));
exports.MagoEvolucionado = MagoEvolucionado;
