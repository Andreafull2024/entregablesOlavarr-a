"use strict";
/*Crear un sistema de personajes de un videojuego RPG utilizando herencia y polimorfismo. Los personajes tendrán
características y habilidades únicas, y algunos podrán evolucionar a versiones  mejoradas con nuevas habilidades.
El personaje debe tener atributos ej:
nombre (string): El nombre del personaje.
nivel (number): El nivel del personaje (empieza en 1).
puntosDeVida (number): Los puntos de vida del personaje.

Métodos ej:
atacar(): Imprime un mensaje indicando que el personaje  está atacando.
defender(): Imprime un mensaje indicando que el personaje está defendiendo.Aclaracion, pueden crear las propiedades que quieran
pero no se vayan por la ramas. Hagan lo justo y
necesario.
Recomendamos crear  3 tipos de héroes (mago, luchador, arquero) y luego algunos especiales*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre) {
        this.nombre = nombre;
        this.nivel = 1;
        this.puntosDeVida = 100;
        this.habilidades = [];
    }
    Personaje.prototype.atacar = function () {
        console.log("".concat(this.nombre, " est\u00E1 atacando"));
    };
    Personaje.prototype.defender = function () {
        console.log("".concat(this.nombre, " est\u00E1 defendiendo"));
    };
    return Personaje;
}());
exports.Personaje = Personaje;
