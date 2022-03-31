"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_checkout_checkout_module_ts"],{

/***/ 2290:
/*!*****************************************************!*\
  !*** ./src/app/checkout/checkout-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageRoutingModule": () => (/* binding */ CheckoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.page */ 5247);




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_0__.CheckoutPage
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ 8400:
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageModule": () => (/* binding */ CheckoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5472);
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-routing.module */ 2290);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page */ 5247);







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutPageRoutingModule
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_1__.CheckoutPage]
    })
], CheckoutPageModule);



/***/ }),

/***/ 5247:
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPage": () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8163);
/* harmony import */ var _checkout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.page.html?ngResource */ 8964);
/* harmony import */ var _checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page.scss?ngResource */ 989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8336);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5485);







let CheckoutPage = class CheckoutPage {
    constructor(http, activatedRouter, route) {
        this.http = http;
        this.activatedRouter = activatedRouter;
        this.route = route;
        this.stripe = Stripe('pk_live_lz1cs7P5y6vwgaIwZdnDwyOS');
        let _this = this;
        setTimeout(() => {
            // Render the PayPal button into #paypal-button-container
            window['paypal'].Buttons({
                // Set up the transaction
                createOrder: function (data, actions) {
                    return actions.order.create({
                        purchase_units: [{
                                amount: {
                                    value: _this.montantcredit
                                }
                            }]
                    });
                },
                // Finalize the transaction
                onApprove: function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
                        headers.append('Authorization', 'Basic bXlhZG1pbmFwaTpQQDU1JnIxMjNhcGloYXlvcGFzcw==');
                        _this.http
                            .post('https://apihayo.elite-techno.net/api/positionnementcredit', {
                            numerohayo: _this.numerohayo,
                            montantcredit: _this.montantcredit
                        }, { headers: headers })
                            .subscribe(data => {
                            if (data["status"] == 200) {
                                _this.route.navigate(['/thanksyou']);
                            }
                            else {
                                alert("Transaction a échoué.Veuillez vous rapprocher de votre support");
                            }
                        });
                    });
                }
            }).render('#paypal-button-container');
        }, 500);
    }
    ;
    ngOnInit() {
        this.setupStripe();
        this.montantcredit = this.activatedRouter.snapshot.paramMap.get("montantcredit");
        this.numerohayo = this.activatedRouter.snapshot.paramMap.get("numerohayo");
    }
    setupStripe() {
        let elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        this.card = elements.create('card', { style: style });
        console.log(this.card);
        this.card.mount('#card-element');
        this.card.addEventListener('change', event => {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
        var form = document.getElementById('payment-form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            this.stripe.createSource(this.card).then(result => {
                if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                }
                else {
                    this.makePayment(result.source.id);
                }
            });
        });
    }
    makePayment(token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        headers.append('Authorization', 'Basic bXlhZG1pbmFwaTpQQDU1JnIxMjNhcGloYXlvcGFzcw==');
        this.http
            .post('https://apihayo.elite-techno.net/api/callstripe', {
            token: token,
            numerohayo: this.numerohayo,
            montantcredit: this.montantcredit
        }, { headers: headers })
            .subscribe(data => {
            if (data["status"] == 200) {
                this.route.navigate(['/thanksyou']);
            }
            else {
                alert("Transaction a échoué");
            }
        });
    }
    positionnercredit() {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        headers.append('Authorization', 'Basic bXlhZG1pbmFwaTpQQDU1JnIxMjNhcGloYXlvcGFzcw==');
        this.http
            .post('https://apihayo.elite-techno.net/api/positionnementcredit', {
            numerohayo: this.numerohayo,
            montantcredit: this.montantcredit
        }, { headers: headers })
            .subscribe(data => {
            if (data["status"] == 200) {
                this.route.navigate(['/thanksyou']);
            }
            else {
                alert("Transaction a échoué.Veuillez vous rapprocher de votre support");
            }
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
CheckoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-checkout',
        template: _checkout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CheckoutPage);



/***/ }),

/***/ 989:
/*!********************************************************!*\
  !*** ./src/app/checkout/checkout.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8964:
/*!********************************************************!*\
  !*** ./src/app/checkout/checkout.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"success\">\n    <ion-title style=\"text-align: center;\">\nPAIEMENT    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   <ion-card>\n    <img src=\"assets/images/hayo.png\" width=\"125\" style=\"display: block; margin-left: auto; margin-right: auto; \"/>\n    <h1 style=\"text-align: center; margin-top: -20px; font-weight: bold; color: #11754f;\">DIASPORA</h1>\n  </ion-card>\n  <ion-card shape=\"round\">\n  <ion-card-header color=\"success\">\n    <ion-card-title style=\"text-align: center;\">Finaliser le paiement</ion-card-title>\n  </ion-card-header>\n</ion-card>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Numéro hayo: <strong color=\"success\">{{ numerohayo}}</strong></ion-card-subtitle>\n      <ion-card-subtitle>Montant du crédit: <strong color=\"success\">{{ montantcredit}} Є </strong></ion-card-subtitle>\n    </ion-card-header><br><br>\n    <ion-card-content>\n      <form action=\"/\" method=\"post\" id=\"payment-form\">\n        <div class=\"form-row\">\n          <div id=\"card-element\">\n            <!-- a Stripe Element will be inserted here. -->\n          </div>\n          <!-- Used to display Element errors -->\n          <div id=\"card-errors\" role=\"alert\"></div>\n        </div><br>\n        <ion-button type=\"submit\" color=\"success\" expand=\"full\">Acheter</ion-button><br>\n        <br>\n        <ion-card shape=\"round\">\n          <ion-card-header>\n            <ion-card-subtitle style=\"text-align: center;\" color=\"success\">Payer avec paypal</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n        <div id=\"paypal-button-container\" style=\"text-align: center; width: 100%;\"></div>\n        <br><br>\n      </form>\n    </ion-card-content>\n  </ion-card><br><br>\n  <ion-card shape=\"round\">\n  <ion-card-header>\n    <a href=\"https://elite-techno.net/\"><ion-card-subtitle style=\"text-align: center;\">By Elite Techno</ion-card-subtitle></a>\n  </ion-card-header>\n</ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_checkout_checkout_module_ts.js.map