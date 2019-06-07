import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria.model';

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

}