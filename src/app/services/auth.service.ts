import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria.model';
import { PuntoMuestral } from '../models/punto-muestral.model';
import { Mesa } from '../models/mesa.model';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient
    ) { }

    /**
     * Retorna un Observable con todas las categorias
     */
    getCategorias = () => this.http.get<Categoria[]>(
        `${environment.WS_URL}/categorias`
    )

    /**
     * Retorna un Observable con todas las mesas de un punto muestral dado
     */
    getMesasByPuntoMuestral = (idPuntoMuestral: number) => this.http.get<Mesa[]>(
        `${environment.WS_URL}/mesas/${idPuntoMuestral}`
    )

    /**
     * Retorna un Observable el puntoMuestral dado un celular
     */
    getPuntoMuestralByCelular = (celular: string) => this.http.get<PuntoMuestral[]>(
        `${environment.WS_URL}/punto_muestral/${celular}`
    )

}