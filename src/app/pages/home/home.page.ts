import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Categoria } from '../../models/categoria.model';
import { Observable } from 'rxjs';
import { Mesa } from 'src/app/models/mesa.model';
import { ActivatedRoute } from '@angular/router';
import { CameraService } from 'src/app/services/camera.service';
import { MesaCandidato } from 'src/app/models/mesa-candidato.model';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import candidatosTipos from 'src/app/constants/candidatos-tipos';
import reglas from 'src/app/constants/reglas';
import { Candidato } from 'src/app/models/candidato.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    /**
     * Listas
     */
    mesas: Observable<Mesa[]>;
    categorias: Observable<Categoria[]>;
    
    /**
     * Seleccionados
     */
    mesa: Mesa;
    categoria: Categoria;
    fileCaptura: any;

    mesasCandidatos: MesaCandidato[];

    isSubmiting:boolean = false;

    idPuntoMuestral: number;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private cameraService: CameraService,
        private utilsService: UtilsService
    ) { }

    /**
     * Inicializo listas
     */
    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.idPuntoMuestral = params.idPuntoMuestral;
                this.mesas = this.authService.getMesasByPuntoMuestral(params.idPuntoMuestral)
            }
        );

        // this.categorias = this.authService.getCategorias();
    }

    onChangeMesa = (m: Mesa) => {
        this.clearAll(true);
        this.categorias = this.authService.getCategoriasByMesaAndPuntoMuestral(this.idPuntoMuestral, m);
    }

    /**
     * Cargo los candidatos de la categoria seleccionada
     * Me creo las nuevas mesasCandidatos que voy a mandar
     */
    onChangeCategoria = (c: Categoria) => 
        this.authService.getCandidatosByCategoria(c.id)
            .pipe(
                map(
                    candidatos => candidatos
                        .sort(
                            (a: Candidato, b: Candidato) => a.candidatoTipo - b.candidatoTipo
                        )
                        .map (
                            c => new MesaCandidato({
                                mesa: this.mesa,
                                candidato: c
                            })
                        )
                )
            )
            .toPromise().then((mcs: MesaCandidato[]) => this.mesasCandidatos = mcs)


    /**
     * Toma una foto y guarda el archivo en fileCaptura
     */
    onClickFoto = () => {
        this.cameraService.takePictureAndReturnFile()
            .then(
                (f) => this.fileCaptura = f
            )
    }

    /**
     * Valida datos
     */
    validarDatos = () => {
        // RN: Candidato total votos tiene que ser menor o igual a 350
        const candidatoTotalVotos = this.mesasCandidatos.find(mc => mc.candidato.candidatoTipo === candidatosTipos.TOTAL_VOTOS);
        if (candidatoTotalVotos.cantidadVotos > reglas.MAX_VOTOS) {
            this.utilsService.showError({
                error: {
                    status: 'error',
                    body: `Total Votos supera la cantidad máxima permitida: ${reglas.MAX_VOTOS}`
                }
            })
            return false;
        }

        // RN: Sumatoria cnadidatos exceptuando total votos tiene que ser menor o igual a 350
        const sumTotalVotos = this.mesasCandidatos
            .filter(
                mc => 
                    mc.candidato.candidatoTipo !== candidatosTipos.TOTAL_VOTOS &&
                    mc.candidato.candidatoTipo !== candidatosTipos.TOTAL_VOTOS_VALIDO
            )
            .reduce(
                (acc, mc) => acc + Number(mc.cantidadVotos),
                0
            )

        if (sumTotalVotos > reglas.MAX_VOTOS) {
            this.utilsService.showError({
                error: {
                    status: 'error',
                    body: `La suma de los votos de cada candidato supera la cantidad máxima permitida: ${reglas.MAX_VOTOS}`
                }
            })
            return false
        }

        return true;
    }

    /**
     * Hago el post a traves de authService
     */
    onClickConfirmar = () => {

        // Valido datos
        const datosValidos = this.validarDatos();

        if (datosValidos) {

            this.isSubmiting = true;
            this.authService.postMesasCandidatos(this.mesasCandidatos, this.fileCaptura, this.mesa, this.categoria).toPromise()
                .then(
                    resp => {
                        this.utilsService.showSuccess()
                            .then(
                                resp => {
                                    this.clearAll();
                                    this.isSubmiting = false;
                                }
                            )
                    }
                )
                .catch(
                    err => this.utilsService.showError(err)
                        .then(
                            resp => this.isSubmiting = false
                        )
                )
        }
    }

    clearAll = (excepMesa = false) => {
        if (excepMesa) {
            this.mesasCandidatos = null;
            this.categorias = null;
            this.fileCaptura = null
            this.categoria = null;
        } else {
            this.mesa = null;
            this.mesasCandidatos = null;
            this.categorias = null;
            this.fileCaptura = null
            this.categoria = null;
        }
    }
}
