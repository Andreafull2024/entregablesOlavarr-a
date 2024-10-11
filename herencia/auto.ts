// Auto.ts
import { Vehiculo } from './vehiculo';

export class Auto extends Vehiculo {
    private asientos: number;

    constructor(marca: string, modelo: string, anio: number, asientos: number) {
        super(marca, modelo, anio, asientos);
        this.asientos = asientos;
    }

    public getAsientos(): number {
        return this.asientos;
    }

    public setAsientos(asientos: number): void {
        this.asientos = asientos;
    }
}