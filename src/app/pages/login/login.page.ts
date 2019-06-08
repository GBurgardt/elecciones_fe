import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
            resp => {
                if (resp && resp.length > 0) {
                    this.router.navigate(['/home'])
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
            err => 
                this.alertController.create({
                    header: 'Error',
                    message: 'Error en el servidor',
                    buttons: ['Confirmar']
                }).then(alert => alert.present())
            
        )

    



}
