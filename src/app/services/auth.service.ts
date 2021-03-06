import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria.model';
import { PuntoMuestral } from '../models/punto-muestral.model';
import { Mesa } from '../models/mesa.model';
import { Candidato } from '../models/candidato.model';
import { MesaCandidato } from '../models/mesa-candidato.model';

import { map } from 'rxjs/operators';
import { Resultado } from '../models/resultado.model';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient
    ) { }

    /**
     * Retorna un Observable con todas las categorias
     */
    getCategoriasByMesaAndPuntoMuestral = (idPuntoMuestral: number, mesa: Mesa) => this.http.get<Categoria[]>(
        // `${environment.WS_URL}/categoria`
        `${environment.WS_URL}/punto_muestral/${idPuntoMuestral}/mesas/${mesa.id}/categorias`
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
     * Inseta en la db todos los nuevos mesasCandidatos
     */
    postMesasCandidatos = (mesasCandidatos: MesaCandidato[], imgBlob, mesa: Mesa, categoria: Categoria) => {
        const formData = new FormData();
        
        formData.append('attachment', imgBlob);
        formData.append('mesasCandidatos', JSON.stringify(mesasCandidatos));
        
        return this.http.post(`${environment.WS_URL}/mesa-candidato/${mesa.descripcion}/${categoria.descripcion}`, formData);
    }
    
    /**
     * Retorna un Observable con los resultados
     */
    getResultados = (idCategoria, idMesa) => this.http.get<any[]>(
        `${environment.WS_URL}/resultados/${idCategoria}/${idMesa}`
    ).pipe(
        map((resp: any) => resp.map(a => new Resultado(a)))
    )

    /**
     * Retorna TODAS las categorias en un Observable
     */
    getAllCategorias = () => this.http.get<Categoria[]>(
        `${environment.WS_URL}/categorias`
    )

    /**
     * Retorna TODAS las mesas en un Observable
     */
    getAllMesas = () => this.http.get<Mesa[]>(
        `${environment.WS_URL}/mesas`
    )

    /**
     * Reportar presencia
     */
    setRegistroIngreso = (celular: string, newRegistroIngreso: boolean) => this.http.post(
        `${environment.WS_URL}/punto_muestral/${celular}`,
        {
            registroIngreso: newRegistroIngreso ? 1 : 0
        }
    )

    /**
     * 
     */
    getPuntosInformados = (idCategoria: number) => this.http.get(
        `${environment.WS_URL}/puntos-informados/${idCategoria}`
    ).pipe(
        map(
            (resp: any[]) => resp && resp.length > 0 ? 
                resp[0][''] : ''
        )
    )
}



/**
 * BACKUP DE httpclient
 */


    // /**
    //  * Retorna un Observable con todas las categorias
    //  */
    // getCategoriasByMesaAndPuntoMuestral = (idPuntoMuestral: number, mesa: Mesa) => this.http.get<Categoria[]>(
    //     // `${environment.WS_URL}/categoria`
    //     `${environment.WS_URL}/punto_muestral/${idPuntoMuestral}/mesas/${mesa.id}/categorias`
    // )

    // /**
    //  * Retorna un Observable con todas las mesas de un punto muestral dado
    //  */
    // getMesasByPuntoMuestral = (idPuntoMuestral: number) => this.http.get<Mesa[]>(
    //     `${environment.WS_URL}/punto_muestral/${idPuntoMuestral}/mesas`
    // )

    // /**
    //  * Retorna un Observable el puntoMuestral dado un celular
    //  */
    // getPuntoMuestralByCelular = (celular: string) => this.http.get<PuntoMuestral[]>(
    //     `${environment.WS_URL}/punto_muestral/${celular}`
    // )

    // /**
    //  * Retorna un Observable los candidatos dada una categoria
    //  */
    // getCandidatosByCategoria = (idCategoria: number) => this.http.get<Candidato[]>(
    //     `${environment.WS_URL}/categoria/${idCategoria}/candidatos`
    // )
    
    // /**
    //  * Inseta en la db todos los nuevos mesasCandidatos
    //  */
    // postMesasCandidatos = (mesasCandidatos: MesaCandidato[], imgBlob, mesa: Mesa, categoria: Categoria) => {
    //     const formData = new FormData();
        
    //     formData.append('attachment', imgBlob);
    //     formData.append('mesasCandidatos', JSON.stringify(mesasCandidatos));
        
    //     return this.http.post(`${environment.WS_URL}/mesa-candidato/${mesa.descripcion}/${categoria.descripcion}`, formData);
    // }
    
    // /**
    //  * Retorna un Observable con los resultados
    //  */
    // getResultados = (idCategoria, idMesa) => this.http.get<any[]>(
    //     `${environment.WS_URL}/resultados/${idCategoria}/${idMesa}`
    // ).pipe(
    //     map((resp: any) => resp.map(a => new Resultado(a)))
    // )

    // /**
    //  * Retorna TODAS las categorias en un Observable
    //  */
    // getAllCategorias = () => this.http.get<Categoria[]>(
    //     `${environment.WS_URL}/categorias`
    // )

    // /**
    //  * Retorna TODAS las mesas en un Observable
    //  */
    // getAllMesas = () => this.http.get<Mesa[]>(
    //     `${environment.WS_URL}/mesas`
    // )

    // /**
    //  * Reportar presencia
    //  */
    // setRegistroIngreso = (celular: string, newRegistroIngreso: boolean) => this.http.post(
    //     `${environment.WS_URL}/punto_muestral/${celular}`,
    //     {
    //         registroIngreso: newRegistroIngreso ? 1 : 0
    //     }
    // )

    // /**
    //  * 
    //  */
    // getPuntosInformados = (idCategoria: number) => this.http.get(
    //     `${environment.WS_URL}/puntos-informados/${idCategoria}`
    // ).pipe(
    //     map(
    //         (resp: any[]) => resp && resp.length > 0 ? 
    //             resp[0][''] : ''
    //     )
    // )







    /**
     * odasjodasojdas
     */




    // /**
    //  * Retorna un Observable el puntoMuestral dado un celular
    //  */
    // getPuntoMuestralByCelular = (celular: string) => this.http.get(
    //     `${environment.WS_URL}/punto_muestral/${celular}`, {}, {}
    // ).then(resp => {
    //     // debugger;
    //     return JSON.parse(resp.data)
    // })

    // /**
    //  * Retorna un Observable con todas las categorias
    //  */
    // getCategoriasByMesaAndPuntoMuestral = (idPuntoMuestral: number, mesa: Mesa) => this.http.get(
    //     `${environment.WS_URL}/punto_muestral/${idPuntoMuestral}/mesas/${mesa.id}/categorias`, {}, {}
    // ).then(resp => JSON.parse(resp.data))

    // /**
    //  * Retorna un Observable con todas las mesas de un punto muestral dado
    //  */
    // getMesasByPuntoMuestral = (idPuntoMuestral: number) => this.http.get(
    //     `${environment.WS_URL}/punto_muestral/${idPuntoMuestral}/mesas`, {}, {}
    // ).then(resp => JSON.parse(resp.data))

    // /**
    //  * Retorna un Observable los candidatos dada una categoria
    //  */
    // getCandidatosByCategoria = (idCategoria: number) => this.http.get(
    //     `${environment.WS_URL}/categoria/${idCategoria}/candidatos`, {}, {}
    // ).then(resp => JSON.parse(resp.data))
    
    // /**
    //  * Inseta en la db todos los nuevos mesasCandidatos
    //  */
    // postMesasCandidatos = (mesasCandidatos: MesaCandidato[], imgBlob, mesa: Mesa, categoria: Categoria) => {
    //     const formData = new FormData();
        
    //     formData.append('attachment', imgBlob);
    //     formData.append('mesasCandidatos', JSON.stringify(mesasCandidatos));
        
    //     return this.http.post(`${environment.WS_URL}/mesa-candidato/${mesa.descripcion}/${categoria.descripcion}`, formData, {}).then(resp => JSON.parse(resp.data))
    // }
    
    // /**
    //  * Retorna un Observable con los resultados
    //  */
    // getResultados = (idCategoria, idMesa) => this.http.get(
    //     `${environment.WS_URL}/resultados/${idCategoria}/${idMesa}`, {}, {}
    // )
    //     .then(resp => JSON.parse(resp.data))
    //     .then((resp: any) => resp.map(a => new Resultado(a)))

    // /**
    //  * Retorna TODAS las categorias en un Observable
    //  */
    // getAllCategorias = () => this.http.get(
    //     `${environment.WS_URL}/categorias`, {}, {}
    // ).then(resp => JSON.parse(resp.data))

    // /**
    //  * Retorna TODAS las mesas en un Observable
    //  */
    // getAllMesas = () => this.http.get(
    //     `${environment.WS_URL}/mesas`, {}, {}
    // ).then(resp => JSON.parse(resp.data))

    // /**
    //  * Reportar presencia
    //  */
    // setRegistroIngreso = (celular: string, newRegistroIngreso: boolean) => this.http.post(
    //     `${environment.WS_URL}/punto_muestral/${celular}`,
    //     {
    //         registroIngreso: newRegistroIngreso ? 1 : 0
    //     }, {}
    // ).then(resp => JSON.parse(resp.data))

    // /**
    //  * 
    //  */
    // getPuntosInformados = (idCategoria: number) => this.http.get(
    //     `${environment.WS_URL}/puntos-informados/${idCategoria}`, {}, {}
    // )
    //     .then(resp => JSON.parse(resp.data))
    //     .then(
    //         (resp: any) => resp && resp.length > 0 ? resp[0][''] : ''
    //     )