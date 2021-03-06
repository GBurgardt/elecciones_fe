import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AuthService } from '../../services/auth.service';
import { CameraService } from '../../services/camera.service';
import { UtilsService } from 'src/app/services/utils.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [HomePage],
    providers: [
        AuthService,
        CameraService,
        UtilsService
    ]
})
export class HomePageModule { }
