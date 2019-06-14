export class PuntoMuestral {
    id: number;
    comportamiento: string;
    idCircuito: string;
    celular: string;
    peso: number;
    idTipo: number;
    registroIngreso: boolean;


    constructor(private puntoMuestral: { 
        id: number, 
        comportamiento: string,
        id_circuito: string,
        celular: string,
        peso: number,
        id_tipo: number,
        registro_ingreso: boolean
    }) {
        this.id = puntoMuestral.id;
        this.comportamiento = puntoMuestral.comportamiento;
        this.idCircuito = puntoMuestral.id_circuito;
        this.celular = puntoMuestral.celular;
        this.peso = puntoMuestral.peso;
        this.idTipo = puntoMuestral.id_tipo;
        this.registroIngreso = puntoMuestral.registro_ingreso;
    };
}