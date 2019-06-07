export class Categoria {
    id: number;
    descripcion: string;

    constructor(private categoria: { id: number, descripcion: string }) {
        this.id = categoria.id;
        this.descripcion = categoria.descripcion;
    }
}