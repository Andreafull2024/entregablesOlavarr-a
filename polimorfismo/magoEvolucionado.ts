import { Personaje } from "./personaje";

export class MagoEvolucionado extends Personaje {
    protected Energia: number;

    constructor(nombre: string) {
        super(nombre);
        this.Energia = 500;
        this.mostrarEnergia(); 
    }

    public hechizar() {
        return console.log(`${this.nombre} arroja un polvo de estrellas`);
    }

    private mostrarEnergia(): void {
        return console.log(`${this.nombre} La energía del mago evolucionado es de ${this.Energia}`);
    }
}