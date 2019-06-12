export class Candidato {
    id: number;
    nombre: string;
    color: string;
    urlimagen: string;
    candidatoTipo: number;

    constructor(candidato: { id: number, nombre: string, color: string, urlimagen: string, candidatoTipo: number }) {
        this.id = candidato.id;
        this.nombre = candidato.nombre;
        this.color = candidato.color;
        this.urlimagen = candidato.urlimagen;
        this.candidatoTipo = candidato.candidatoTipo;
    }
}