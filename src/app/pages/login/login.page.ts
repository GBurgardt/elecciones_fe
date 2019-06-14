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

    onClickIngresar = () => this.authService.getPuntoMuestralByCelular(this.celular)
        .then(
            (resp: any) => {
                debugger;
                if (resp && resp.length > 0) {

                    const puntoMuestral: PuntoMuestral = new PuntoMuestral(resp[0]);
                    debugger;
                    // 
                    if (
                        puntoMuestral.idTipo === tiposPuntosMuestrales.TD &&
                        !puntoMuestral.registroIngreso
                    ) {
                        this.alertController.create({
                            header: 'Error',
                            message: 'Antes de ingresar debe reportar su presencia',
                            buttons: ['Confirmar']
                        }).then(alert => alert.present())
                    } else {
                        if (puntoMuestral.idTipo === tiposPuntosMuestrales.TD) {
                            this.router.navigate([`/home/${puntoMuestral.id}`])
                        } else {
                            this.router.navigate([`/reportes/${puntoMuestral.id}`])
                        }
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
                // console.log(err.message)
                // debugger;
                this.alertController.create({
                    header: 'Error',
                    message: err.message,
                    buttons: ['Confirmar']
                }).then(alert => alert.present())
            }

        )

    onClickReportarPresencia = () => this.authService.getPuntoMuestralByCelular(this.celular)
        .then(
            (resp: any) => {

                const puntoMuestral: PuntoMuestral = new PuntoMuestral(resp[0]);
                const currentRegistroIngreso = puntoMuestral.registroIngreso;

                // Si el ingreso ya esta ingresado, muestro mensaje
                if (currentRegistroIngreso) {
                    this.alertController.create({
                        header: 'Error',
                        message: 'Usted ya reporto su presencia',
                        buttons: ['Confirmar']
                    }).then(alert => alert.present())
                } else {

                    this.authService.setRegistroIngreso(this.celular, true)
                        .then(
                            (resp: any) => 
                                this.alertController.create({
                                    header: resp.status,
                                    message: resp.body,
                                    buttons: ['Confirmar']
                                }).then(alert => alert.present())
                            
                        )
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

    // onClickYoutube = () => {
    //     this.router.navigate([`https://www.youtube.com/watch?v=aYOXFNVpkSc&feature=youtu.be`])
    // }
}
