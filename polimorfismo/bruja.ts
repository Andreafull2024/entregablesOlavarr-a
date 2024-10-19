import { Personaje } from "./personaje";

export class Bruja extends Personaje {
    protected velocidad: number;

    constructor(nombre: string) {
        super(nombre);
        this.velocidad = 300;
        this.mostrarVelocidad(); 
    }

    public lanzarLlama(): void {
        return console.log(`${this.nombre} arroja una bola de fuego`);
    }

    private mostrarVelocidad(): void {
        return console.log(`${this.nombre} La velocidad de la bruja es de ${this.velocidad}`);
    }
}