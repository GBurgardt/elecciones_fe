export class Candidato {
    id: number;
    nombre: string;
    color: string;
    urlImagen: string;

    constructor(candidato: { id: number, nombre: string, color: string, urlImagen: string }) {
        this.id = candidato.id;
        this.nombre = candidato.nombre;
        this.color = candidato.color;
        this.urlImagen = candidato.urlImagen;
    }
}