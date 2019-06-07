import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Categoria } from '../../models/categoria.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    categorias: Observable<Categoria[]>;

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.categorias = this.authService.getCategorias();
    }

}
