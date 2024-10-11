// Camion.ts
import { Vehiculo } from './vehiculo';

export class Camion extends Vehiculo {
    private capacidadCarga: number;

    constructor(marca: string, modelo: string, anio: number, capacidadCarga: number) {
        super(marca, modelo, anio, capacidadCarga);
        this.capacidadCarga = capacidadCarga;
    }

    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    public setCapacidadCarga(capacidadCarga: number): void {
        this.capacidadCarga = capacidadCarga;
    }
}