(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/constants/candidatos-tipos.ts":
/*!***********************************************!*\
  !*** ./src/app/constants/candidatos-tipos.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    CANDIDATO: 1,
    TOTAL_VOTOS_VALIDO: 2,
    TOTAL_VOTOS: 3
});


/***/ }),

/***/ "./src/app/constants/reglas.ts":
/*!*************************************!*\
  !*** ./src/app/constants/reglas.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    MAX_VOTOS: 350
});


/***/ }),

/***/ "./src/app/models/mesa-candidato.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/mesa-candidato.model.ts ***!
  \************************************************/
/*! exports provided: MesaCandidato */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaCandidato", function() { return MesaCandidato; });
var MesaCandidato = /** @class */ (function () {
    function MesaCandidato(mesaCandidato) {
        this.mesa = mesaCandidato.mesa;
        this.candidato = mesaCandidato.candidato;
        this.cantidadVotos = mesaCandidato.cantidadVotos ? mesaCandidato.cantidadVotos : null;
    }
    return MesaCandidato;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_camera_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/camera.service */ "./src/app/services/camera.service.ts");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");










var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _services_camera_service__WEBPACK_IMPORTED_MODULE_8__["CameraService"],
                src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilsService"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content style=\"margin: 15px\" class=\"btn-container\">\n\n    <ion-header class=\"ion-margin-bottom\">\n        <ion-toolbar color=\"primary\">\n            <ion-title>Ingreso resultados</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n\n    <!-- <ion-item-divider> -->\n    <div class=\"divider\">\n        <span>\n            Seleccione mesa y categoria\n        </span>\n    </div>\n\n    <div class=\"select-container\">\n        <ion-item class=\"ion-margin-bottom\">\n            <ion-label position=\"floating\">Seleccione una mesa: </ion-label>\n            <ion-select [(ngModel)]=\"mesa\" (ngModelChange)=\"onChangeMesa($event)\">\n                <ion-select-option *ngFor=\"let m of mesas | async\" [value]=\"m\">\n                    {{ m.descripcion }}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item class=\"ion-margin-bottom\">\n            <ion-label position=\"floating\">Seleccione una categoria: </ion-label>\n            <ion-select [(ngModel)]=\"categoria\" (ngModelChange)=\"onChangeCategoria($event)\">\n                <ion-select-option *ngFor=\"let c of categorias | async\" [value]=\"c\">\n                    {{ c.descripcion }}\n                </ion-select-option>\n            </ion-select>\n        </ion-item>\n    </div>\n\n    <div *ngIf=\"mesasCandidatos\" class=\"divider\">\n        <span>\n            Ingrese cantidad votos\n        </span>\n    </div>\n\n    <div class=\"list-container\">\n        <ion-list>\n            <div class=\"item-list\" [ngStyle]=\"{ background: mc.candidato.color }\" *ngFor=\"let mc of mesasCandidatos\">\n                <div class=\"item-list-content\">\n                    <ion-label [ngStyle]=\"{ background: mc.candidato.color }\" position=\"floating\">\n                        {{ mc.candidato.nombre }}\n                    </ion-label>\n                    <ion-input [(ngModel)]=\"mc.cantidadVotos\" type=\"number\"></ion-input>\n                </div>\n                <div class=\"item-list-foto\">\n                    <!-- <img [src]=\"mc.candidato.urlimagen\" width=\"93\" height=\"93\"> -->\n                    <ion-avatar slot=\"end\">\n                        <img [src]=\"mc.candidato.urlimagen\">\n                    </ion-avatar>\n                </div>\n            </div>\n        </ion-list>\n    </div>\n\n    <div *ngIf=\"true\" class=\"divider\">\n        <span>\n            Saque una foto de la planilla\n        </span>\n    </div>\n\n\n    <div class=\"btn-camera-container\">\n        <ion-button [disabled]=\"fileCaptura\" shape=\"round\" size=\"large\" (click)=\"onClickFoto()\">\n            <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n        </ion-button>\n    </div>\n\n    \n    <ion-button [disabled]=\"!fileCaptura\" *ngIf=\"!isSubmiting\" (click)=\"onClickConfirmar()\" expand=\"full\">Confirmar</ion-button>\n    <ion-button *ngIf=\"isSubmiting\" disabled expand=\"full\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n    </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider {\n  background: #89a9e0;\n  padding: 6px;\n  color: white;\n  text-align: center;\n  padding-top: 10px; }\n\n.btn-camera-container {\n  display: flex;\n  justify-content: center;\n  margin: 15px 0; }\n\n.item-list {\n  font-size: 1.1rem;\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between; }\n\n.item-list .item-list-content {\n    padding-top: 10px;\n    padding-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2J1cmdhcmR0L3Byb2plY3RzL2VsZWNjaW9uZXNfZmUvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGFBQWE7RUFDYix1QkFBdUI7RUFFdkIsY0FBYyxFQUFBOztBQVVsQjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsYUFBYTtFQUViLDhCQUE4QixFQUFBOztBQUxsQztJQVFRLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZDogIzg5YTllMDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmJ0bi1jYW1lcmEtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgbWFyZ2luOiAxNXB4IDA7XG5cbiAgICAvLyBmb250LXNpemU6IDEuNXJlbTtcblxuICAgIC8vIGlvbi1pY29uIHtcbiAgICAvLyAgICAgcGFkZGluZzogMTBweDtcbiAgICAvLyB9XG59XG5cblxuLml0ZW0tbGlzdCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5pdGVtLWxpc3QtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgIFxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_camera_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/camera.service */ "./src/app/services/camera.service.ts");
/* harmony import */ var src_app_models_mesa_candidato_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/mesa-candidato.model */ "./src/app/models/mesa-candidato.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var src_app_constants_candidatos_tipos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constants/candidatos-tipos */ "./src/app/constants/candidatos-tipos.ts");
/* harmony import */ var src_app_constants_reglas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/constants/reglas */ "./src/app/constants/reglas.ts");










var HomePage = /** @class */ (function () {
    function HomePage(authService, route, cameraService, utilsService) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.cameraService = cameraService;
        this.utilsService = utilsService;
        this.isSubmiting = false;
        this.onChangeMesa = function (m) {
            _this.clearAll(true);
            _this.categorias = _this.authService.getCategoriasByMesaAndPuntoMuestral(_this.idPuntoMuestral, m);
        };
        /**
         * Cargo los candidatos de la categoria seleccionada
         * Me creo las nuevas mesasCandidatos que voy a mandar
         */
        this.onChangeCategoria = function (c) {
            return _this.authService.getCandidatosByCategoria(c.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (candidatos) { return candidatos
                .sort(function (a, b) { return a.candidatoTipo - b.candidatoTipo; })
                .map(function (c) { return new src_app_models_mesa_candidato_model__WEBPACK_IMPORTED_MODULE_5__["MesaCandidato"]({
                mesa: _this.mesa,
                candidato: c
            }); }); }))
                .toPromise().then(function (mcs) { return _this.mesasCandidatos = mcs; });
        };
        /**
         * Toma una foto y guarda el archivo en fileCaptura
         */
        this.onClickFoto = function () {
            _this.cameraService.takePictureAndReturnFile()
                .then(function (f) { return _this.fileCaptura = f; });
        };
        /**
         * Valida datos
         */
        this.validarDatos = function () {
            // Primero compruebo que ningun campo sea nulo, o 0, o texto
            var camposNulos = _this.mesasCandidatos
                .some(function (mc) {
                return !mc.cantidadVotos ||
                    mc.cantidadVotos === 0;
            });
            if (camposNulos) {
                _this.utilsService.showError({
                    error: {
                        status: 'error',
                        body: "Falta completar algun campo, o alguno es 0"
                    }
                });
                return false;
            }
            // RN: Candidato total votos tiene que ser menor o igual a 350
            var candidatoTotalVotos = _this.mesasCandidatos.find(function (mc) { return mc.candidato.candidatoTipo === src_app_constants_candidatos_tipos__WEBPACK_IMPORTED_MODULE_8__["default"].TOTAL_VOTOS; });
            if (candidatoTotalVotos.cantidadVotos > src_app_constants_reglas__WEBPACK_IMPORTED_MODULE_9__["default"].MAX_VOTOS) {
                _this.utilsService.showError({
                    error: {
                        status: 'error',
                        body: "Total Votos supera la cantidad m\u00E1xima permitida: " + src_app_constants_reglas__WEBPACK_IMPORTED_MODULE_9__["default"].MAX_VOTOS
                    }
                });
                return false;
            }
            // RN: Sumatoria cnadidatos exceptuando total votos tiene que ser menor o igual a 350
            var sumTotalVotos = _this.mesasCandidatos
                .filter(function (mc) {
                return mc.candidato.candidatoTipo !== src_app_constants_candidatos_tipos__WEBPACK_IMPORTED_MODULE_8__["default"].TOTAL_VOTOS &&
                    mc.candidato.candidatoTipo !== src_app_constants_candidatos_tipos__WEBPACK_IMPORTED_MODULE_8__["default"].TOTAL_VOTOS_VALIDO;
            })
                .reduce(function (acc, mc) { return acc + Number(mc.cantidadVotos); }, 0);
            if (sumTotalVotos > src_app_constants_reglas__WEBPACK_IMPORTED_MODULE_9__["default"].MAX_VOTOS) {
                _this.utilsService.showError({
                    error: {
                        status: 'error',
                        body: "La suma de los votos de cada candidato supera la cantidad m\u00E1xima permitida: " + src_app_constants_reglas__WEBPACK_IMPORTED_MODULE_9__["default"].MAX_VOTOS
                    }
                });
                return false;
            }
            // RN: Candidato Total Votos Valido tiene que ser <= a Total votos, y >= a la suma de los votos de los candidatos
            var candidatoTotalVotosValido = _this.mesasCandidatos.find(function (mc) { return mc.candidato.candidatoTipo === src_app_constants_candidatos_tipos__WEBPACK_IMPORTED_MODULE_8__["default"].TOTAL_VOTOS_VALIDO; });
            if (candidatoTotalVotosValido.cantidadVotos > candidatoTotalVotos.cantidadVotos ||
                candidatoTotalVotosValido.cantidadVotos < sumTotalVotos) {
                _this.utilsService.showError({
                    error: {
                        status: 'error',
                        body: "Total Votos Valido tiene que ser menor o igual a Total votos, y mayor o igual a la suma de los votos de los candidatos"
                    }
                });
                return false;
            }
            return true;
        };
        /**
         * Hago el post a traves de authService
         */
        this.onClickConfirmar = function () {
            // Valido datos
            var datosValidos = _this.validarDatos();
            debugger;
            if (datosValidos) {
                _this.isSubmiting = true;
                _this.authService.postMesasCandidatos(_this.mesasCandidatos, _this.fileCaptura, _this.mesa, _this.categoria).toPromise()
                    .then(function (resp) {
                    _this.utilsService.showSuccess()
                        .then(function (resp) {
                        _this.clearAll();
                        _this.isSubmiting = false;
                    });
                })
                    .catch(function (err) { return _this.utilsService.showError(err)
                    .then(function (resp) { return _this.isSubmiting = false; }); });
            }
        };
        this.clearAll = function (excepMesa) {
            if (excepMesa === void 0) { excepMesa = false; }
            if (excepMesa) {
                _this.mesasCandidatos = null;
                _this.categorias = null;
                _this.fileCaptura = null;
                _this.categoria = null;
            }
            else {
                _this.mesa = null;
                _this.mesasCandidatos = null;
                _this.categorias = null;
                _this.fileCaptura = null;
                _this.categoria = null;
            }
        };
    }
    /**
     * Inicializo listas
     */
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.idPuntoMuestral = params.idPuntoMuestral;
            _this.mesas = _this.authService.getMesasByPuntoMuestral(params.idPuntoMuestral);
        });
        // this.categorias = this.authService.getCategorias();
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_camera_service__WEBPACK_IMPORTED_MODULE_4__["CameraService"],
            src_app_services_utils_service__WEBPACK_IMPORTED_MODULE_7__["UtilsService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/camera.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/camera.service.ts ***!
  \********************************************/
/*! exports provided: CameraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraService", function() { return CameraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");




var CameraService = /** @class */ (function () {
    function CameraService(camera, file) {
        var _this = this;
        this.camera = camera;
        this.file = file;
        /**
         * Tomar una foto y devolver el archivo (FileEntry)
         */
        this.takePictureAndReturnFile = function () { return new Promise(function (resolve, reject) {
            return _this.camera.getPicture({
                quality: 50,
                destinationType: _this.camera.DestinationType.FILE_URI,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE
            })
                .then(function (imageData) {
                return _this.file.resolveLocalFilesystemUrl(imageData)
                    .then(function (fileEntry) {
                    return fileEntry.file(function (file) {
                        var reader = new FileReader();
                        reader.onloadend = function (e) {
                            var imgBlob = new Blob([this.result], {
                                type: "image/jpeg"
                            });
                            resolve(imgBlob);
                        };
                        reader.readAsArrayBuffer(file);
                    }, function (err) { return reject(err); });
                })
                    .catch(function (err) { return reject(err); });
            })
                .catch(function (err) { return reject(err); });
        }); };
    }
    CameraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"]])
    ], CameraService);
    return CameraService;
}());



/***/ }),

/***/ "./src/app/services/utils.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var UtilsService = /** @class */ (function () {
    function UtilsService(alertController) {
        var _this = this;
        this.alertController = alertController;
        this.showSuccess = function () {
            return _this.alertController.create({
                header: 'Listo',
                message: 'Los votos se cargaron correctamente',
                buttons: ['Confirmar']
            }).then(function (alert) { return alert.present(); });
        };
        this.showError = function (err) {
            return _this.alertController.create({
                header: 'Error',
                message: err.error.body,
                buttons: ['Confirmar']
            }).then(function (alert) { return alert.present(); });
        };
    }
    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], UtilsService);
    return UtilsService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map