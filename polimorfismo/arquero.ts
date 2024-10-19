import { Personaje } from "./personaje";

export class Arquero extends Personaje {
    protected Precision: number;

    constructor(nombre: string) {
        super(nombre);
        this.Precision = 75;
        this.mostrarPrecision(); 
    }

    public dispararFlecha(): void {
        return console.log(`${this.nombre} dispara una flecha`);
    }

    private mostrarPrecision(): void {
        return console.log(`${this.nombre} la precisión es de ${this.Precision}`);
    }
}