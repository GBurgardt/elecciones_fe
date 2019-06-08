export class Mesa {
    id: number;
    descripcion: string;

    constructor(private mesa: { id: number, descripcion: string }) {
        this.id = mesa.id;
        this.descripcion = mesa.descripcion;
    }
}