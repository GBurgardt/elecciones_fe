import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Categoria } from '../../models/categoria.model';
import { Observable } from 'rxjs';
import { Mesa } from 'src/app/models/mesa.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    mesas: Observable<Mesa[]>;
    categorias: Observable<Categoria[]>;

    resultado: number;

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

        this.route.params.subscribe(
            params => this.mesas = this.authService.getMesasByPuntoMuestral(params.idPuntoMuestral)
        );

        this.categorias = this.authService.getCategorias();
    }

}
