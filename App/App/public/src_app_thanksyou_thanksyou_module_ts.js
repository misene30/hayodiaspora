"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_thanksyou_thanksyou_module_ts"],{

/***/ 9785:
/*!*******************************************************!*\
  !*** ./src/app/thanksyou/thanksyou-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThanksyouPageRoutingModule": () => (/* binding */ ThanksyouPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _thanksyou_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thanksyou.page */ 807);




const routes = [
    {
        path: '',
        component: _thanksyou_page__WEBPACK_IMPORTED_MODULE_0__.ThanksyouPage
    }
];
let ThanksyouPageRoutingModule = class ThanksyouPageRoutingModule {
};
ThanksyouPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThanksyouPageRoutingModule);



/***/ }),

/***/ 3298:
/*!***********************************************!*\
  !*** ./src/app/thanksyou/thanksyou.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThanksyouPageModule": () => (/* binding */ ThanksyouPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _thanksyou_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thanksyou-routing.module */ 9785);
/* harmony import */ var _thanksyou_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thanksyou.page */ 807);







let ThanksyouPageModule = class ThanksyouPageModule {
};
ThanksyouPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _thanksyou_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThanksyouPageRoutingModule
        ],
        declarations: [_thanksyou_page__WEBPACK_IMPORTED_MODULE_1__.ThanksyouPage]
    })
], ThanksyouPageModule);



/***/ }),

/***/ 807:
/*!*********************************************!*\
  !*** ./src/app/thanksyou/thanksyou.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThanksyouPage": () => (/* binding */ ThanksyouPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _thanksyou_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thanksyou.page.html?ngResource */ 1906);
/* harmony import */ var _thanksyou_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thanksyou.page.scss?ngResource */ 17);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);




let ThanksyouPage = class ThanksyouPage {
    constructor() { }
    ngOnInit() {
    }
};
ThanksyouPage.ctorParameters = () => [];
ThanksyouPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-thanksyou',
        template: _thanksyou_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_thanksyou_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ThanksyouPage);



/***/ }),

/***/ 17:
/*!**********************************************************!*\
  !*** ./src/app/thanksyou/thanksyou.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGFua3N5b3UucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1906:
/*!**********************************************************!*\
  !*** ./src/app/thanksyou/thanksyou.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"success\">\n    <ion-title style=\"text-align: center;\">\n      Félicitations\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"false\">\n  <ion-card>\n    <img src=\"assets/images/hayo.png\" width=\"125\" style=\"display: block; margin-left: auto; margin-right: auto; \"/>\n    <h1 style=\"text-align: center; margin-top: -20px; font-weight: bold; color: #11754f;\">DIASPORA</h1>\n  </ion-card>\n<ion-card shape=\"round\">\n  <ion-card-header color=\"success\">\n    <ion-card-title style=\"text-align: center;\">Achat réussi</ion-card-title>\n  </ion-card-header>\n</ion-card>\n<ion-card shape=\"round\">\n  <ion-card-header>\n    <ion-card-title style=\"text-align: center;\"><ion-icon name=\"checkmark-circle-outline\" style=\"font-size: 100px;\" color=\"success\"></ion-icon></ion-card-title>\n    <h4 style=\"text-align: center;\">Votre crédit a été positionné avec succès.</h4><br>\n    <ion-button href=\"/\" color=\"success\" expand=\"block\">Accueil</ion-button>\n  </ion-card-header>\n</ion-card>\n<br><br>\n<ion-card shape=\"round\">\n  <ion-card-header>\n    <a href=\"https://elite-techno.net/\"><ion-card-subtitle style=\"text-align: center;\">By Elite Techno</ion-card-subtitle></a>\n  </ion-card-header>\n</ion-card>\n\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_thanksyou_thanksyou_module_ts.js.map