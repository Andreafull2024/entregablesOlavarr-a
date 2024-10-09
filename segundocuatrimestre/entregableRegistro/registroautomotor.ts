import { Auto } from './auto';
import { Moto } from './moto';
import { Camion } from './camion';

export class RegistroAutomotor {
    private autos: Auto[] = [];
    private motos: Moto[] = [];
    private camiones: Camion[] = [];

    public agregarAuto(auto: Auto): void {
        this.autos.push(auto);
    }

    public agregarMoto(moto: Moto): void {
        this.motos.push(moto);
    }

    public agregarCamion(camion: Camion): void {
        this.camiones.push(camion);
    }

    public getAutos(): Auto[] {
        return this.autos;
    }

    public getMotos(): Moto[] {
        return this.motos;
    }

    public getCamiones(): Camion[] {
        return this.camiones;
    }

    public modificarAuto(index: number, auto: Auto): void {
        if (index >= 0 && index < this.autos.length) {
            this.autos[index] = auto;
        }
    }

    public modificarMoto(index: number, moto: Moto): void {
        if (index >= 0 && index < this.motos.length) {
            this.motos[index] = moto;
        }
    }

    public modificarCamion(index: number, camion: Camion): void {
        if (index >= 0 && index < this.camiones.length) {
            this.camiones[index] = camion;
        }
    }

    public darDeBajaAuto(index: number): void {
        if (index >= 0 && index < this.autos.length) {
            this.autos.splice(index, 1); // Eliminar el auto del array
        }
    }

    public darDeBajaMoto(index: number): void {
        if (index >= 0 && index < this.motos.length) {
            this.motos.splice(index, 1); // Eliminar la moto del array
        }
    }

    public darDeBajaCamion(index: number): void {
        if (index >= 0 && index < this.camiones.length) {
            this.camiones.splice(index, 1); // Eliminar el camión del array
        }
    }
}
