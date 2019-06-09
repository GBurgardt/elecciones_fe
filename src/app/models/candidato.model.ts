export class Candidato {
    id: number;
    nombre: string;

    constructor(candidato: { id: number, nombre: string }) {
        this.id = candidato.id;
        this.nombre = candidato.nombre;
    }
}