import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PuntoMuestral } from 'src/app/models/punto-muestral.model';
import tiposPuntosMuestrales from 'src/app/constants/tipos-puntos-muestrales';

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})
export class LoginPage {

    celular: string

    constructor(
        private authService: AuthService,
        private router: Router,
        private alertController: AlertController
    ) { }

    onClickIngresar = () => this.authService.getPuntoMuestralByCelular(this.celular).toPromise()
        .then(
            (resp: any) => {
                if (resp && resp.length > 0) {

                    const puntoMuestral: PuntoMuestral = new PuntoMuestral(resp[0]);
                    
                    if (puntoMuestral.idTipo === tiposPuntosMuestrales.TD) {
                        this.router.navigate([`/home/${puntoMuestral.id}`])
                    } else {
                        this.router.navigate([`/reportes/${puntoMuestral.id}`])
                    }

                } else {
                    this.alertController.create({
                        header: 'Error',
                        message: 'El nro de celular ingresado es incorrecto',
                        buttons: ['Confirmar']
                    }).then(alert => alert.present())
                }
            }
        )
        .catch(
            err => {
                console.log(err)
                this.alertController.create({
                    header: 'Error',
                    message: 'Error en el servidor',
                    buttons: ['Confirmar']
                }).then(alert => alert.present())
            }
            
        )

    



}
