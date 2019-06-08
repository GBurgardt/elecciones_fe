export class PuntoMuestral {
    id: number;
    comportamiento: string;
    circuito: string;
    celular: string;
    peso: number;

    constructor(private puntoMuestral: { 
        id: number, 
        comportamiento: string,
        circuito: string,
        celular: string,
        peso: number
    }) {
        this.id = puntoMuestral.id;
        this.comportamiento = puntoMuestral.comportamiento;
        this.circuito = puntoMuestral.circuito;
        this.celular = puntoMuestral.celular;
        this.peso = puntoMuestral.peso;
    }
}