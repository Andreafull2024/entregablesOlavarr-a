import { Vehiculo } from './vehiculo';

export class Moto {
    private vehiculo: Vehiculo;
    private ruedas: number;

    constructor(marca: string, modelo: string, anio: number, ruedas: number) {
        this.vehiculo = new Vehiculo(marca, modelo, anio, "Moto");
        this.ruedas = ruedas;
    }

    public getVehiculo(): Vehiculo {
        return this.vehiculo;
    }

    public getRuedas(): number {
        return this.ruedas;
    }

    public setRuedas(ruedas: number): void {
        this.ruedas = ruedas;
    }
}
