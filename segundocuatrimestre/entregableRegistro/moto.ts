// Moto.ts
import { Vehiculo } from './vehiculo';

export class Moto extends Vehiculo {
    private tipo: string;

    constructor(marca: string, modelo: string, anio: number, asientos: number,tipo: string) {
        super(marca, modelo, anio, asientos);
        this.tipo = tipo;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }
}