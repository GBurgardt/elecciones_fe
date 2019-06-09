import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria.model';
import { PuntoMuestral } from '../models/punto-muestral.model';
import { Mesa } from '../models/mesa.model';
import { Candidato } from '../models/candidato.model';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient
    ) { }

    /**
     * Retorna un Observable con todas las categorias
     */
    getCategorias = () => this.http.get<Categoria[]>(
        `${environment.WS_URL}/categoria`
    )

    /**
     * Retorna un Observable con todas las mesas de un punto muestral dado
     */
    getMesasByPuntoMuestral = (idPuntoMuestral: number) => this.http.get<Mesa[]>(
        `${environment.WS_URL}/punto_muestral/${idPuntoMuestral}/mesas`
    )

    /**
     * Retorna un Observable el puntoMuestral dado un celular
     */
    getPuntoMuestralByCelular = (celular: string) => this.http.get<PuntoMuestral[]>(
        `${environment.WS_URL}/punto_muestral/${celular}`
    )

    /**
     * Retorna un Observable los candidatos dada una categoria
     */
    getCandidatosByCategoria = (idCategoria: number) => this.http.get<Candidato[]>(
        `${environment.WS_URL}/categoria/${idCategoria}/candidatos`
    )

    /**
     * Test
     */
    uploadFoto = (imgBlob) => {
        const formData = new FormData();

        formData.append('attachment', imgBlob);
        
        return this.http.post(`${environment.WS_URL}/test-upload`, formData);
    }

}






