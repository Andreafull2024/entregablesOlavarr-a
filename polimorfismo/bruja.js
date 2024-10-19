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
exports.Bruja = void 0;
var personaje_1 = require("./personaje");
var Bruja = /** @class */ (function (_super) {
    __extends(Bruja, _super);
    function Bruja(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.velocidad = 300;
        _this.mostrarVelocidad(); // Call the method with parentheses
        return _this;
    }
    Bruja.prototype.lanzarLlama = function () {
        return console.log("".concat(this.nombre, " arroja una bola de fuego"));
    };
    Bruja.prototype.mostrarVelocidad = function () {
        return console.log("".concat(this.nombre, " La velocidad de la bruja es de ").concat(this.velocidad));
    };
    return Bruja;
}(personaje_1.Personaje));
exports.Bruja = Bruja;
