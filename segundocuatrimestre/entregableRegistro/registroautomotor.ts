// RegistroAutomotor.ts
import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

export class RegistroAutomotor {
    private vehiculos: (Auto | Moto | Camion | null)[] = [];

    public agregarVehiculo(vehiculo: Auto | Moto | Camion): void {
        this.vehiculos.push(vehiculo);
    }

    public modificarVehiculo(index: number, vehiculo: Auto | Moto | Camion): void {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos[index] = vehiculo;
        }
    }

    public darDeBaja(index: number): void {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos[index] = null; 
        }
    }

    public getVehiculos(): (Auto | Moto | Camion | null)[] {
        return this.vehiculos;
    }
}