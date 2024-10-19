import { Personaje } from "./personaje";

export class Mago extends Personaje {
    protected Energia: number; /* atributo propio del mago */

    constructor(nombre: string) {
        super(nombre);
        this.Energia = 100;
        this.mostrarEnergia(); // Call the method with parentheses
    }

    public hechizar() {
        return console.log(`${this.nombre} arroja un polvo mágico`);
    }

    private mostrarEnergia(): void {
        return console.log(`${this.nombre} La energía del mago es de ${this.Energia}`);
    }
}
