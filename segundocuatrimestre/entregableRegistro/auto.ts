import { Vehiculo } from './vehiculo';

export class Auto {
    private vehiculo: Vehiculo;
    private puertas: number;

    constructor(marca: string, modelo: string, anio: number, puertas: number) {
        this.vehiculo = new Vehiculo(marca, modelo, anio, "Auto");
        this.puertas = puertas;
    }

    public getVehiculo(): Vehiculo {
        return this.vehiculo;
    }

    public getPuertas(): number {
        return this.puertas;
    }

    public setPuertas(puertas: number): void {
        this.puertas = puertas;
    }
}
