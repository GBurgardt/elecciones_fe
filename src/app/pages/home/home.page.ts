import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Categoria } from '../../models/categoria.model';
import { Observable } from 'rxjs';
import { Mesa } from 'src/app/models/mesa.model';
import { ActivatedRoute } from '@angular/router';
import { Candidato } from 'src/app/models/candidato.model';
import { CameraService } from 'src/app/services/camera.service';

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
    candidatos: Observable<Candidato[]>;
    
    /**
     * Seleccionados
     */
    mesa: Mesa;
    categoria: Categoria;
    fileCaptura: any;
    // fileCaptura: File;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
        private cameraService: CameraService
    ) { }

    /**
     * Inicializo listas
     */
    ngOnInit() {
        this.route.params.subscribe(
            params => this.mesas = this.authService.getMesasByPuntoMuestral(params.idPuntoMuestral)
        );

        this.categorias = this.authService.getCategorias();
    }

    /**
     * Cargo los candidatos de la categoria seleccionada
     */
    onChangeCategoria = (c: Categoria) => 
        this.candidatos = this.authService.getCandidatosByCategoria(c.id)


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
     * Hago el post a traves de authService
     */
    onClickConfirmar = () => {
        this.fileCaptura;
        this.mesa;
        this.categoria;

        this.authService.uploadFoto(this.fileCaptura)
            .subscribe(
                resp => {
                    // debugger;
                }
            )
    }
}
