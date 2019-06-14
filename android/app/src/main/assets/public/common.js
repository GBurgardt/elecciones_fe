(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-19910bac.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-19910bac.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setPageHidden; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-90d954cd.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-90d954cd.js");
var iosTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 136).then(__webpack_require__.bind(null, /*! ./chunk-8cdfc1ff.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-8cdfc1ff.js"))},mdTransitionAnimation=function(){return __webpack_require__.e(/*! import() */ 137).then(__webpack_require__.bind(null, /*! ./chunk-f2d9e763.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-f2d9e763.js"))};function transition(e){return new Promise(function(n,i){e.queue.write(function(){beforeTransition(e),runTransition(e).then(function(i){i.animation&&i.animation.destroy(),afterTransition(e),n(i)},function(n){afterTransition(e),i(n)})})})}function beforeTransition(e){var n=e.enteringEl,i=e.leavingEl;setZIndex(n,i,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),setPageHidden(n,!1),i&&setPageHidden(i,!1)}function runTransition(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return[4,getAnimationBuilder(e)];case 1:return[2,(n=i.sent())?animation(n,e):noAnimation(e)]}})})}function afterTransition(e){var n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function getAnimationBuilder(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,iosTransitionAnimation()]:[2,void 0];case 1:return n=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,mdTransitionAnimation()];case 3:n=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,n]}})})}function animation(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return[4,waitForReady(n,!0)];case 1:return t.sent(),[4,__webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./chunk-1d62a940.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-1d62a940.js")).then(function(i){return i.create(e,n.baseEl,n)})];case 2:return i=t.sent(),fireWillEvents(n.enteringEl,n.leavingEl),[4,playTransition(i,n)];case 3:return t.sent(),n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&fireDidEvents(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function noAnimation(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n,i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return n=e.enteringEl,i=e.leavingEl,[4,waitForReady(e,!1)];case 1:return t.sent(),fireWillEvents(n,i),fireDidEvents(n,i),[2,{hasCompleted:!0}]}})})}function waitForReady(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var i;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(t){switch(t.label){case 0:return i=(void 0!==e.deepWait?e.deepWait:n)?[deepReady(e.enteringEl),deepReady(e.leavingEl)]:[shallowReady(e.enteringEl),shallowReady(e.leavingEl)],[4,Promise.all(i)];case 1:return t.sent(),[4,notifyViewReady(e.viewIsReady,e.enteringEl)];case 2:return t.sent(),[2]}})})}function notifyViewReady(e,n){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return e?[4,e(n)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})}function playTransition(e,n){var i=n.progressCallback,t=new Promise(function(n){return e.onFinish(n)});return i?(e.progressStart(),i(e)):e.play(),t}function fireWillEvents(e,n){lifecycle(n,_chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["a"]),lifecycle(e,_chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["b"])}function fireDidEvents(e,n){lifecycle(e,_chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["c"]),lifecycle(n,_chunk_90d954cd_js__WEBPACK_IMPORTED_MODULE_1__["d"])}function lifecycle(e,n){if(e){var i=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(i)}}function shallowReady(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function deepReady(e){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var n;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:return(n=e)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=i.sent())return[2];i.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(deepReady))];case 3:i.sent(),i.label=4;case 4:return[2]}})})}function setPageHidden(e,n){n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}function setZIndex(e,n,i){void 0!==e&&(e.style.zIndex="back"===i?"99":"101"),void 0!==n&&(n.style.zIndex="100")}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-81780b86.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-81780b86.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelection; });
function hapticSelection(){var e=window.TapticEngine;e&&e.selection()}function hapticSelectionStart(){var e=window.TapticEngine;e&&e.gestureSelectionStart()}function hapticSelectionChanged(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()}function hapticSelectionEnd(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-8b4dfddb.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-8b4dfddb.js ***!
  \***********************************************************************/
/*! exports provided: a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeDOMString; });
var sanitizeDOMString=function(e){try{if("string"!=typeof e||""===e)return e;var t=document.createDocumentFragment(),r=document.createElement("div");t.appendChild(r),r.innerHTML=e,blockedTags.forEach(function(e){for(var r=t.querySelectorAll(e),n=r.length-1;n>=0;n--){var i=r[n];i.parentNode?i.parentNode.removeChild(i):t.removeChild(i);for(var l=getElementChildren(i),a=0;a<l.length;a++)sanitizeElement(l[a])}});for(var n=getElementChildren(t),i=0;i<n.length;i++)sanitizeElement(n[i]);var l=document.createElement("div");l.appendChild(t);var a=l.querySelector("div");return null!==a?a.innerHTML:l.innerHTML}catch(e){return console.error(e),""}},sanitizeElement=function(e){if(!e.nodeType||1===e.nodeType){for(var t=e.attributes.length-1;t>=0;t--){var r=e.attributes[t],n=r.name;if(allowedAttributes.includes(n.toLowerCase())){var i=r.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(n)}else e.removeAttribute(n)}var l=getElementChildren(e);for(t=0;t<l.length;t++)sanitizeElement(l[t])}},getElementChildren=function(e){return null!=e.children?e.children:e.childNodes},allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"];

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-90d954cd.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-90d954cd.js ***!
  \***********************************************************************/
/*! exports provided: a, b, c, d, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIFECYCLE_WILL_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LIFECYCLE_WILL_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIFECYCLE_DID_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIFECYCLE_DID_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LIFECYCLE_WILL_UNLOAD; });
var LIFECYCLE_WILL_ENTER="ionViewWillEnter",LIFECYCLE_DID_ENTER="ionViewDidEnter",LIFECYCLE_WILL_LEAVE="ionViewWillLeave",LIFECYCLE_DID_LEAVE="ionViewDidLeave",LIFECYCLE_WILL_UNLOAD="ionViewWillUnload";

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-99929188.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-99929188.js ***!
  \***********************************************************************/
/*! exports provided: a, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
function attachComponent(e,t,n,o,r){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var a;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,r,o)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,o&&o.forEach(function(e){return a.classList.add(e)}),r&&Object.assign(a,r),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,a]}})})}function detachComponent(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-ab1eff20.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/chunk-ab1eff20.js ***!
  \***********************************************************************/
/*! exports provided: createGesture, GESTURE_CONTROLLER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGesture", function() { return createGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GESTURE_CONTROLLER", function() { return GESTURE_CONTROLLER; });
var _sPassive,GestureController=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new GestureDelegate(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new BlockerDelegate(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,s=-1e4;if(i.forEach(function(t){s=Math.max(s,t)}),s===r){this.capturedId=e,i.clear();var n=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(n),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(BACKDROP_NO_SCROLL)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(BACKDROP_NO_SCROLL)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),GestureDelegate=function(){function t(t,e,r,i,s){this.id=e,this.name=r,this.disableScroll=s,this.priority=1e6*i+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),BlockerDelegate=function(){function t(t,e,r,i){this.id=e,this.disable=r,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),BACKDROP_NO_SCROLL="backdrop-no-scroll",GESTURE_CONTROLLER=new GestureController(document);function addEventListener(t,e,r,i){var s,n,o=supportsPassive(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(s="__zone_symbol__addEventListener",n="__zone_symbol__removeEventListener"):(s="addEventListener",n="removeEventListener"),t[s](e,r,o),function(){t[n](e,r,o)}}function supportsPassive(t){if(void 0===_sPassive)try{var e=Object.defineProperty({},"passive",{get:function(){_sPassive=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){_sPassive=!1}return!!_sPassive}var MOUSE_WAIT=2e3;function createPointerEvents(t,e,r,i,s){var n,o,a,c,u,l,d,h=0;function p(i){h=Date.now()+MOUSE_WAIT,e(i)&&(!o&&r&&(o=addEventListener(t,"touchmove",r,s)),a||(a=addEventListener(t,"touchend",f,s)),c||(c=addEventListener(t,"touchcancel",f,s)))}function v(i){h>Date.now()||e(i)&&(!l&&r&&(l=addEventListener(getDocument(t),"mousemove",r,s)),d||(d=addEventListener(getDocument(t),"mouseup",b,s)))}function f(t){S(),i&&i(t)}function b(t){y(),i&&i(t)}function S(){o&&o(),a&&a(),c&&c(),o=a=c=void 0}function y(){l&&l(),d&&d(),l=d=void 0}function m(){S(),y()}function D(e){e?(n&&n(),u&&u(),n=u=void 0,m()):(n||(n=addEventListener(t,"touchstart",p,s)),u||(u=addEventListener(t,"mousedown",v,s)))}return{setDisabled:D,stop:m,destroy:function(){D(!0),i=r=e=void 0}}}function getDocument(t){return t instanceof Document?t:t.ownerDocument}function createPanRecognizer(t,e,r){var i=r*(Math.PI/180),s="x"===t,n=Math.cos(i),o=e*e,a=0,c=0,u=!1,l=0;return{start:function(t,e){a=t,c=e,l=0,u=!0},detect:function(t,e){if(!u)return!1;var r=t-a,i=e-c,d=r*r+i*i;if(d<o)return!1;var h=Math.sqrt(d),p=(s?r:i)/h;return l=p>n?1:p<-n?-1:0,u=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}function createGesture(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),r=e.canStart,i=e.onWillStart,s=e.onStart,n=e.onEnd,o=e.notCaptured,a=e.onMove,c=e.threshold,u=e.queue,l={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},d=createPointerEvents(e.el,function(t){var e=now(t);return!(f||!b)&&(updateDetail(t,l),l.startX=l.currentX,l.startY=l.currentY,l.startTimeStamp=l.timeStamp=e,l.velocityX=l.velocityY=l.deltaX=l.deltaY=0,l.event=t,(!r||!1!==r(l))&&(p.release(),!!p.start()&&(f=!0,0===c?m():(h.start(l.startX,l.startY),!0))))},function(t){v?!S&&b&&(S=!0,calcGestureData(l,t),u.write(y)):(calcGestureData(l,t),h.detect(l.currentX,l.currentY)&&(h.isGesture()&&m()||(g(),d.stop(),o&&o(l))))},E,{capture:!1}),h=createPanRecognizer(e.direction,e.threshold,e.maxAngle),p=GESTURE_CONTROLLER.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),v=!1,f=!1,b=!0,S=!1;function y(){v&&(S=!1,a&&a(l))}function m(){return!(p&&!p.capture()||(v=!0,b=!1,l.startX=l.currentX,l.startY=l.currentY,l.startTimeStamp=l.timeStamp,i?i(l).then(D):D(),0))}function D(){s&&s(l),b=!0}function g(){v=!1,f=!1,S=!1,b=!0,p.release()}function E(t){var e=v,r=b;g(),r&&(calcGestureData(l,t),e?n&&n(l):o&&o(l))}return{setDisabled:function(t){t&&v&&E(void 0),d.setDisabled(t)},destroy:function(){p.destroy(),d.destroy()}}}function calcGestureData(t,e){if(e){var r=t.currentX,i=t.currentY,s=t.timeStamp;updateDetail(e,t);var n=t.currentX,o=t.currentY,a=(t.timeStamp=now(e))-s;if(a>0&&a<100){var c=(o-i)/a;t.velocityX=(n-r)/a*.7+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=n-t.startX,t.deltaY=o-t.startY,t.event=e}}function updateDetail(t,e){var r=0,i=0;if(t){var s=t.changedTouches;if(s&&s.length>0){var n=s[0];r=n.clientX,i=n.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i}function now(t){return t.timeStamp||Date.now()}

/***/ }),

/***/ "./src/app/models/resultado.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/resultado.model.ts ***!
  \*******************************************/
/*! exports provided: Resultado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resultado", function() { return Resultado; });
var Resultado = /** @class */ (function () {
    function Resultado(resultado) {
        this.categoriaDescripcion = resultado.descripcion;
        this.candidatoNombre = resultado.nombre;
        this.contados = resultado.Contados;
        this.proyectados = resultado.Proyectados;
        this.porcentaje = resultado.Porc;
        this.urlImagen = resultado.urlimagen;
    }
    return Resultado;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_resultado_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/resultado.model */ "./src/app/models/resultado.model.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        /**
         * Retorna un Observable el puntoMuestral dado un celular
         */
        this.getPuntoMuestralByCelular = function (celular) { return _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WS_URL + "/punto_muestral/" + celular, {}, {}).then(function (resp) { return resp.data; }); };
        /**
         * Retorna un Observable con todas las categorias
         */
        this.getCategoriasByMesaAndPuntoMuestral = function (idPuntoMuestral, mesa) { return _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WS_URL + "/punto_muestral/" + idPuntoMuestral + "/mesas/" + mesa.id + "/categorias", {}, {}).then(function (resp) { return resp.data; }); };
        /**
         * Retorna un Observable con todas las mesas de un punto muestral dado
         */
        this.getMesasByPuntoMuestral = function (idPuntoMuestral) { return _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WS_URL + "/punto_muestral/" + idPuntoMuestral + "/mesas", {}, {}).then(function (resp) { return resp.data; }); };
        /**
         * Retorna un Observable los candidatos dada una categoria
         */
        this.getCandidatosByCategoria = function (idCategoria) { return _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WS_URL + "/categoria/" + idCategoria + "/candidatos", {}, {}).then(function (resp) { return resp.data; }); };
        /**
         * Inseta en la db todos los nuevos mesasCandidatos
         */
        this.postMesasCandidatos = function (mesasCandidatos, imgBlob, mesa, categoria) {
            var formData = new FormData();
            formData.append('attachment', imgBlob);
            formData.append('mesasCandidatos', JSON.stringify(mesasCandidatos));
            return _this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WS_URL + "/mesa-candidato/" + mesa.descripcion + "/" + categoria.descripcion, formData, {}).then(function (resp) { return resp.data; });
        };
        /**
         * Retorna un Observable con los resultados
         */
        this.getResultados = function (idCategoria, idMesa) { return _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WS_URL + "/resultados/" + idCategoria + "/" + idMesa, {}, {})
            .then(function (resp) { return resp.data; })
            .then(function (resp) { return resp.map(function (a) { return new _models_resultado_model__WEBPACK_IMPORTED_MODULE_3__["Resultado"](a); }); }); };
        /**
         * Retorna TODAS las categorias en un Observable
         */
        this.getAllCategorias = function () { return _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WS_URL + "/categorias", {}, {}).then(function (resp) { return resp.data; }); };
        /**
         * Retorna TODAS las mesas en un Observable
         */
        this.getAllMesas = function () { return _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WS_URL + "/mesas", {}, {}).then(function (resp) { return resp.data; }); };
        /**
         * Reportar presencia
         */
        this.setRegistroIngreso = function (celular, newRegistroIngreso) { return _this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WS_URL + "/punto_muestral/" + celular, {
            registroIngreso: newRegistroIngreso ? 1 : 0
        }, {}).then(function (resp) { return resp.data; }); };
        /**
         *
         */
        this.getPuntosInformados = function (idCategoria) { return _this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].WS_URL + "/puntos-informados/" + idCategoria, {}, {})
            .then(function (resp) { return resp.data; })
            .then(function (resp) { return resp && resp.length > 0 ? resp[0][''] : ''; }); };
    }
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]])
    ], AuthService);
    return AuthService;
}());

/**
 * BACKUP DE httpclient
 */
// /**
//  * Retorna un Observable con todas las categorias
//  */
// getCategoriasByMesaAndPuntoMuestral = (idPuntoMuestral: number, mesa: Mesa) => this.http.get<Categoria[]>(
//     // `${environment.WS_URL}/categoria`
//     `${environment.WS_URL}/punto_muestral/${idPuntoMuestral}/mesas/${mesa.id}/categorias`
// )
// /**
//  * Retorna un Observable con todas las mesas de un punto muestral dado
//  */
// getMesasByPuntoMuestral = (idPuntoMuestral: number) => this.http.get<Mesa[]>(
//     `${environment.WS_URL}/punto_muestral/${idPuntoMuestral}/mesas`
// )
// /**
//  * Retorna un Observable el puntoMuestral dado un celular
//  */
// getPuntoMuestralByCelular = (celular: string) => this.http.get<PuntoMuestral[]>(
//     `${environment.WS_URL}/punto_muestral/${celular}`
// )
// /**
//  * Retorna un Observable los candidatos dada una categoria
//  */
// getCandidatosByCategoria = (idCategoria: number) => this.http.get<Candidato[]>(
//     `${environment.WS_URL}/categoria/${idCategoria}/candidatos`
// )
// /**
//  * Inseta en la db todos los nuevos mesasCandidatos
//  */
// postMesasCandidatos = (mesasCandidatos: MesaCandidato[], imgBlob, mesa: Mesa, categoria: Categoria) => {
//     const formData = new FormData();
//     formData.append('attachment', imgBlob);
//     formData.append('mesasCandidatos', JSON.stringify(mesasCandidatos));
//     return this.http.post(`${environment.WS_URL}/mesa-candidato/${mesa.descripcion}/${categoria.descripcion}`, formData);
// }
// /**
//  * Retorna un Observable con los resultados
//  */
// getResultados = (idCategoria, idMesa) => this.http.get<any[]>(
//     `${environment.WS_URL}/resultados/${idCategoria}/${idMesa}`
// ).pipe(
//     map((resp: any) => resp.map(a => new Resultado(a)))
// )
// /**
//  * Retorna TODAS las categorias en un Observable
//  */
// getAllCategorias = () => this.http.get<Categoria[]>(
//     `${environment.WS_URL}/categorias`
// )
// /**
//  * Retorna TODAS las mesas en un Observable
//  */
// getAllMesas = () => this.http.get<Mesa[]>(
//     `${environment.WS_URL}/mesas`
// )
// /**
//  * Reportar presencia
//  */
// setRegistroIngreso = (celular: string, newRegistroIngreso: boolean) => this.http.post(
//     `${environment.WS_URL}/punto_muestral/${celular}`,
//     {
//         registroIngreso: newRegistroIngreso ? 1 : 0
//     }
// )
// /**
//  * 
//  */
// getPuntosInformados = (idCategoria: number) => this.http.get(
//     `${environment.WS_URL}/puntos-informados/${idCategoria}`
// ).pipe(
//     map(
//         (resp: any[]) => resp && resp.length > 0 ? 
//             resp[0][''] : ''
//     )
// )


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
//# sourceMappingURL=common.js.map