import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Candidato } from 'src/app/models/candidato.model';
import { Mesa } from 'src/app/models/mesa.model';
import { Categoria } from 'src/app/models/categoria.model';
import { ActivatedRoute } from '@angular/router';
import { Resultado } from 'src/app/models/resultado.model';
import { IonInput } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
    selector: 'app-reportes',
    templateUrl: 'reportes.page.html',
    styleUrls: ['reportes.page.scss'],
})
export class ReportesPage {
    /**
     * Listas
     */
    mesas: Mesa[];
    // categorias: any;
    categorias: Observable<Categoria[]>;

    /**
     * Seleccionados
     */
    categoria: Categoria;
    mesa: Mesa;

    /**
     * Resultados
     */
    // resultados: any;
    resultados: Observable<Resultado[]>;
    puntosInformadosMsg: string;

    /**
     * Otros
     */
    showFiltros: boolean = false;

    constructor(
        private authService: AuthService,
        private utilsService: UtilsService
    ) { }

    ngOnInit() {
        this.categorias = this.authService.getAllCategorias();
        this.authService.getAllMesas().toPromise().then((resp: any) => this.mesas = resp)

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

        this.authService.getPuntosInformados(this.categoria ? this.categoria.id : 0).toPromise()
            .then(
                resp => {
                    
                    this.puntosInformadosMsg = resp
                }
            )

        this.resultados = this.authService.getResultados(
            this.categoria ? this.categoria.id : 0, 
            this.mesa ? this.mesa.id : 0
        );

    }

    onClickBuscarPorMesa = (e: IonInput) => {

        const value = e.value;
        
        this.mesa = this.mesas.find(
            m => m.descripcion === value
        )
        // debugger;

        if (this.mesa) {
            this.refrescarLista();
        } else {
            // No encontrada
            this.utilsService.showError({
                error: {
                    status: 'error',
                    body: `Mesa no encontrada`
                }
            });

        }

    }

    onClickMesasTodas = () => {
        this.mesa = null;
        this.refrescarLista();

        const inputMesa: any = document.getElementById('input-mesa');
        
        if (inputMesa) {
            inputMesa.value = '';
        }
    }

    compareSelect = (c1: Categoria | Mesa, c2: Categoria | Mesa) => c1 && c2 ? c1.id === c2.id : c1 === c2
}
