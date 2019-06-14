(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/constants/tipos-puntos-muestrales.ts":
/*!******************************************************!*\
  !*** ./src/app/constants/tipos-puntos-muestrales.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    TD: 1,
    CANDIDATO: 2,
});


/***/ }),

/***/ "./src/app/models/punto-muestral.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/punto-muestral.model.ts ***!
  \************************************************/
/*! exports provided: PuntoMuestral */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntoMuestral", function() { return PuntoMuestral; });
var PuntoMuestral = /** @class */ (function () {
    function PuntoMuestral(puntoMuestral) {
        this.puntoMuestral = puntoMuestral;
        this.id = puntoMuestral.id;
        this.comportamiento = puntoMuestral.comportamiento;
        this.idCircuito = puntoMuestral.id_circuito;
        this.celular = puntoMuestral.celular;
        this.peso = puntoMuestral.peso;
        this.idTipo = puntoMuestral.id_tipo;
        this.registroIngreso = puntoMuestral.registro_ingreso;
    }
    ;
    return PuntoMuestral;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");








var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
                    }
                ])
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"btn-container\">\n\n    <ion-header class=\"ion-margin-bottom\">\n        <ion-toolbar color=\"primary\">\n            <ion-title>Ingreso</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n\n    <ion-item class=\"ion-margin-bottom\">\n        <ion-label position=\"floating\">Ingrese su celular: </ion-label>\n        <ion-input [(ngModel)]=\"celular\" type=\"number\"></ion-input>\n    </ion-item>\n\n    <ion-button [disabled]=\"!celular\" (click)=\"onClickReportarPresencia()\" expand=\"block\" fill=\"outline\">Reportar Presencia</ion-button>\n    <ion-button [disabled]=\"!celular\" (click)=\"onClickIngresar()\" expand=\"block\">Ingresar</ion-button>\n\n\n    <ion-button href=\"https://www.youtube.com/watch?v=aYOXFNVpkSc&feature=youtu.be\" style=\"margin-top: 50px\" expand=\"block\" fill=\"outline\">\n        Tutorial\n    </ion-button>\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_models_punto_muestral_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/punto-muestral.model */ "./src/app/models/punto-muestral.model.ts");
/* harmony import */ var src_app_constants_tipos_puntos_muestrales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants/tipos-puntos-muestrales */ "./src/app/constants/tipos-puntos-muestrales.ts");







var LoginPage = /** @class */ (function () {
    function LoginPage(authService, router, alertController) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.alertController = alertController;
        this.onClickIngresar = function () { return _this.authService.getPuntoMuestralByCelular(_this.celular)
            .then(function (resp) {
            if (resp && resp.length > 0) {
                var puntoMuestral = new src_app_models_punto_muestral_model__WEBPACK_IMPORTED_MODULE_5__["PuntoMuestral"](resp[0]);
                // 
                if (puntoMuestral.idTipo === src_app_constants_tipos_puntos_muestrales__WEBPACK_IMPORTED_MODULE_6__["default"].TD &&
                    !puntoMuestral.registroIngreso) {
                    _this.alertController.create({
                        header: 'Error',
                        message: 'Antes de ingresar debe reportar su presencia',
                        buttons: ['Confirmar']
                    }).then(function (alert) { return alert.present(); });
                }
                else {
                    if (puntoMuestral.idTipo === src_app_constants_tipos_puntos_muestrales__WEBPACK_IMPORTED_MODULE_6__["default"].TD) {
                        _this.router.navigate(["/home/" + puntoMuestral.id]);
                    }
                    else {
                        _this.router.navigate(["/reportes/" + puntoMuestral.id]);
                    }
                }
            }
            else {
                _this.alertController.create({
                    header: 'Error',
                    message: 'El nro de celular ingresado es incorrecto',
                    buttons: ['Confirmar']
                }).then(function (alert) { return alert.present(); });
            }
        })
            .catch(function (err) {
            // console.log(err.message)
            // debugger;
            _this.alertController.create({
                header: 'Error',
                message: err.message,
                buttons: ['Confirmar']
            }).then(function (alert) { return alert.present(); });
        }); };
        this.onClickReportarPresencia = function () { return _this.authService.getPuntoMuestralByCelular(_this.celular)
            .then(function (resp) {
            var puntoMuestral = new src_app_models_punto_muestral_model__WEBPACK_IMPORTED_MODULE_5__["PuntoMuestral"](resp[0]);
            var currentRegistroIngreso = puntoMuestral.registroIngreso;
            // Si el ingreso ya esta ingresado, muestro mensaje
            if (currentRegistroIngreso) {
                _this.alertController.create({
                    header: 'Error',
                    message: 'Usted ya reporto su presencia',
                    buttons: ['Confirmar']
                }).then(function (alert) { return alert.present(); });
            }
            else {
                _this.authService.setRegistroIngreso(_this.celular, true)
                    .then(function (resp) {
                    return _this.alertController.create({
                        header: resp.status,
                        message: resp.body,
                        buttons: ['Confirmar']
                    }).then(function (alert) { return alert.present(); });
                });
            }
        })
            .catch(function (err) {
            console.log(err);
            _this.alertController.create({
                header: 'Error',
                message: 'Error en el servidor',
                buttons: ['Confirmar']
            }).then(function (alert) { return alert.present(); });
        }); };
    }
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map