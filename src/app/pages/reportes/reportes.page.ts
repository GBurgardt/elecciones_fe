import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Candidato } from 'src/app/models/candidato.model';
import { Mesa } from 'src/app/models/mesa.model';
import { Categoria } from 'src/app/models/categoria.model';
import { ActivatedRoute } from '@angular/router';
import { Resultado } from 'src/app/models/resultado.model';
@Component({
    selector: 'app-reportes',
    templateUrl: 'reportes.page.html',
    styleUrls: ['reportes.page.scss'],
})
export class ReportesPage {
    /**
     * Listas
     */
    mesas: Observable<Mesa[]>;
    categorias: Observable<Categoria[]>;

    /**
     * Seleccionados
     */
    categoria: Categoria;
    mesa: Mesa;

    /**
     * Resultados
     */
    resultados: Observable<Resultado[]>;

    /**
     * Otros
     */
    showFiltros: boolean = false;

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.categorias = this.authService.getAllCategorias();
        this.mesas = this.authService.getAllMesas()

        // Categoria por defecto gobernador
        this.categorias.toPromise()
            .then(resp => {
                this.categoria = resp && resp.length > 0 ? resp[0] : null
                this.refrescarLista();
            })

    }
    
    /**
     * Refresca lista
     */
    refrescarLista = () => {
        this.resultados = this.authService.getResultados(
            this.categoria ? this.categoria.id : 0, 
            this.mesa ? this.mesa.id : 0
        );

    }


    compareSelect = (c1: Categoria | Mesa, c2: Categoria | Mesa) => c1 && c2 ? c1.id === c2.id : c1 === c2
}
