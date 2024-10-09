import { Vehiculo } from './vehiculo';

export class Camion {
    private vehiculo: Vehiculo;
    private capacidadCarga: number;

    constructor(marca: string, modelo: string, anio: number, capacidadCarga: number) {
        this.vehiculo = new Vehiculo(marca, modelo, anio, "Camion");
        this.capacidadCarga = capacidadCarga;
    }

    public getVehiculo(): Vehiculo {
        return this.vehiculo;
    }

    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    public setCapacidadCarga(capacidadCarga: number): void {
        this.capacidadCarga = capacidadCarga;
    }
}
