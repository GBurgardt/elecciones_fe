export class Resultado {
    categoriaDescripcion: string;
    candidatoNombre: string;
    contados: number;
    proyectados: number;
    porcentaje: number;
    urlImagen: string;

    constructor(resultado: {
        descripcion: string
        nombre: string,
        Contados: number,
        Proyectados: number,
        Porc: number,
        urlimagen: string
    }) {
        this.categoriaDescripcion = resultado.descripcion;
        this.candidatoNombre = resultado.nombre;
        this.contados = resultado.Contados;
        this.proyectados = resultado.Proyectados;
        this.porcentaje = resultado.Porc;
        this.urlImagen = resultado.urlimagen;
    }
}