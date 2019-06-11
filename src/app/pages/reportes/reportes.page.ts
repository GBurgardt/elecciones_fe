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
    categoria: string = 'Todas'
    mesa: string = 'Todas'

    /**
     * Resultados
     */
    resultados: Observable<Resultado[]>;

    /**
     * Otros
     */
    showFiltros: boolean = true;

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.categorias = this.authService.getAllCategorias();
        this.mesas = this.authService.getAllMesas()

        this.refrescarLista();
    }
    
    /**
     * Refresca lista
     */
    refrescarLista = () => {
        this.resultados = this.authService.getResultados();
    }
}
