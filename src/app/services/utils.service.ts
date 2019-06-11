import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable()
export class UtilsService {
    constructor(
        private alertController: AlertController
    ) { }

    showSuccess = () => 
        this.alertController.create({
            header: 'Listo',
            message: 'Los votos se cargaron correctamente',
            buttons: ['Confirmar']
        }).then(
            alert => alert.present()
        )
    

    showError = (err) => 
        this.alertController.create({
            header: 'Error',
            message: err.error.body,
            buttons: ['Confirmar']
        }).then(
            alert => alert.present()
        )
    

}
