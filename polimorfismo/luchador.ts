import { Personaje } from "./personaje";

export class Luchador extends Personaje {
    protected Fuerza: number;

    constructor(nombre: string) {
        super(nombre);
        this.Fuerza = 70;
        this.mostrarFuerza(); 
    }

    public golpear(): void {
        return console.log(`${this.nombre} golpea fuerte.`);
    }

    private mostrarFuerza(): void {
        return console.log(`${this.nombre} la fuerza es de ${this.Fuerza}.`);
    }
}