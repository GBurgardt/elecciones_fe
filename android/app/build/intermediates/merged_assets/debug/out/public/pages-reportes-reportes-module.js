(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reportes-reportes-module"],{

/***/ "./src/app/pages/reportes/reportes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/reportes/reportes.module.ts ***!
  \***************************************************/
/*! exports provided: ReportesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesPageModule", function() { return ReportesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reportes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportes.page */ "./src/app/pages/reportes/reportes.page.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");








var ReportesPageModule = /** @class */ (function () {
    function ReportesPageModule() {
    }
    ReportesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _reportes_page__WEBPACK_IMPORTED_MODULE_6__["ReportesPage"]
                    }
                ])
            ],
            declarations: [_reportes_page__WEBPACK_IMPORTED_MODULE_6__["ReportesPage"]],
            providers: [
                src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
            ]
        })
    ], ReportesPageModule);
    return ReportesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/reportes/reportes.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/reportes/reportes.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content style=\"margin: 15px\">\n\n    <ion-header>\n        <ion-toolbar color=\"primary\">\n            <ion-title>Resumen de Resultados￼</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content id=\"content\">\n\n        <ion-item-divider>\n            <ion-label>\n                Filtros\n            </ion-label>\n\n            <ion-icon class=\"btn-eye\" *ngIf=\"!showFiltros\" (click)=\"showFiltros = !showFiltros\" slot=\"end\" name=\"eye\">\n            </ion-icon>\n            <ion-icon class=\"btn-eye\" *ngIf=\"showFiltros\" (click)=\"showFiltros = !showFiltros\" slot=\"end\"\n                name=\"eye-off\"></ion-icon>\n        </ion-item-divider>\n\n        <div *ngIf=\"showFiltros\" class=\"filtros-container\">\n\n            <ion-item class=\"ion-margin-bottom\">\n                <ion-label position=\"floating\">Seleccione una categoria: </ion-label>\n                <ion-select [compareWith]=\"compareSelect\" [(ngModel)]=\"categoria\" (ngModelChange)=\"refrescarLista()\">\n                    <ion-select-option [value]=\"null\">\n                        Todas\n                    </ion-select-option>\n                    <ion-select-option *ngFor=\"let c of categorias | async\" [value]=\"c\">\n                        {{ c.descripcion }}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item class=\"ion-margin-bottom\">\n                <ion-label position=\"floating\">Seleccione una mesa: </ion-label>\n                <ion-select [compareWith]=\"compareSelect\" [(ngModel)]=\"mesa\" (ngModelChange)=\"refrescarLista()\">\n                    <ion-select-option [value]=\"null\">\n                        Todas\n                    </ion-select-option>\n                    <ion-select-option *ngFor=\"let m of mesas | async\" [value]=\"m\">\n                        {{ m.descripcion }}\n                    </ion-select-option>\n                </ion-select>\n            </ion-item>\n\n        </div>\n\n        <ion-item-divider sticky>\n            <ion-label>\n                <span style=\"font-weight: bolder\">Categoria:</span> {{ categoria ? categoria.descripcion : 'Todas' }}\n            </ion-label>\n\n            <ion-label slot=\"end\" style=\"padding-right: calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\">\n                <span style=\"font-weight: bolder\">Mesa:</span> {{ mesa ? mesa.descripcion : 'Todas' }}\n            </ion-label>\n        </ion-item-divider>\n\n        <div class=\"resultados-container\">\n            <ion-item *ngFor=\"let r of resultados | async\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"r.urlImagen\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{ r.candidatoNombre }}: <span>{{ r.porcentaje }}%</span></h2>\n                    <p>{{ r.proyectados }} proyectados</p>\n                </ion-label>\n            </ion-item>\n        </div>\n\n    </ion-content>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/reportes/reportes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/reportes/reportes.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-eye {\n  margin-right: 10px;\n  padding-top: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J1cmdhcmR0L3Byb2plY3RzL2VsZWNjaW9uZXNfZmUvc3JjL2FwcC9wYWdlcy9yZXBvcnRlcy9yZXBvcnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBvcnRlcy9yZXBvcnRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWV5ZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/reportes/reportes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/reportes/reportes.page.ts ***!
  \*************************************************/
/*! exports provided: ReportesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesPage", function() { return ReportesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var ReportesPage = /** @class */ (function () {
    function ReportesPage(authService) {
        var _this = this;
        this.authService = authService;
        /**
         * Otros
         */
        this.showFiltros = false;
        /**
         * Refresca lista
         */
        this.refrescarLista = function () {
            _this.resultados = _this.authService.getResultados(_this.categoria ? _this.categoria.id : 0, _this.mesa ? _this.mesa.id : 0);
        };
        this.compareSelect = function (c1, c2) { return c1 && c2 ? c1.id === c2.id : c1 === c2; };
    }
    ReportesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.categorias = this.authService.getAllCategorias();
        this.mesas = this.authService.getAllMesas();
        // Categoria por defecto gobernador
        this.categorias.toPromise()
            .then(function (resp) {
            _this.categoria = resp && resp.length > 0 ? resp[0] : null;
            _this.refrescarLista();
        });
    };
    ReportesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reportes',
            template: __webpack_require__(/*! ./reportes.page.html */ "./src/app/pages/reportes/reportes.page.html"),
            styles: [__webpack_require__(/*! ./reportes.page.scss */ "./src/app/pages/reportes/reportes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ReportesPage);
    return ReportesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reportes-reportes-module.js.map