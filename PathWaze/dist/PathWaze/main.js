(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location/location.component */ "./src/app/location/location.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'landing', redirectTo: 'location', pathMatch: 'full' },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__["LandingComponent"] },
    { path: 'location', component: _location_location_component__WEBPACK_IMPORTED_MODULE_3__["LocationComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<style>\r\nimg {\r\n  height: 100px;\r\n  width: auto;\r\n  margin-left: 30px;\r\n}\r\n</style>\r\n<header>\r\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n\r\n</header>\r\n<div class=\"container blue-grey lighten-1\">\r\n<nav class=\"nav-extended white\">\r\n        <div class=\"nav-wrapper\">\r\n          <a href=\"#!\" class=\"brand-logo\"><img class=\"materialboxed\" src=\"assets/static/images/pathwazeLogo.png\"></a>\r\n          <ul class=\"right hide-on-med-and-down\">\r\n            <li><a class=\"waves-effect waves-light btn large blue lighten-2\">Home</a></li>\r\n            <li><a [routerLink]=\"['/location']\" class=\"btn large blue lighten-2\">Location <i class=\"material-icons\">add</i></a></li>\r\n            <li><a class=\"waves-effect waves-light btn large blue lighten-2\">Meetups</a></li>\r\n            <li><a class=\"waves-effect waves-light btn large blue lighten-2 disabled\">FAQ</a></li>\r\n            \r\n          </ul>\r\n\r\n        </div>\r\n        <div class=\"nav-content\">\r\n          <span class=\"nav-title\"></span>\r\n          <a class=\"btn-floating btn-large halfway-fab waves-effect waves-light teal\">\r\n            <i class=\"medium material-icons\">camera_alt</i>\r\n          </a>\r\n        </div>\r\n      </nav>\r\n\r\n      \r\n            \r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n<footer class=\"page-footer blue-grey lighten-1\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col l6 s12\">\r\n        <h5 class=\"white-text\"></h5>\r\n        <p class=\"grey-text blue-grey lighten-1\"></p>\r\n      </div>\r\n      <div class=\"col l4 offset-l2 s12\">\r\n        <h5 class=\"white-text\"></h5>\r\n        <ul>\r\n         \r\n        </ul>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-copyright\" style=\"text-align: center\">\r\n    <div class=\"container\">\r\n    <span id=\"copyright\">© 2023 PathWaze.com, Inc. All Rights Reserved - Guess What, Chicken Butt</span>\r\n    <a class=\"grey-text blue-grey lighten-1 right\" href=\"#!\"></a>\r\n    </div>\r\n  </div>\r\n</footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#copyright {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./location/location.component */ "./src/app/location/location.component.ts");
/* harmony import */ var _sociallogin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sociallogin.module */ "./src/sociallogin.module.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth.service */ "./src/auth.service.ts");
/* harmony import */ var _providers_google_login_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../providers/google-login-provider */ "./src/providers/google-login-provider.ts");
/* harmony import */ var _providers_facebook_login_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../providers/facebook-login-provider */ "./src/providers/facebook-login-provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var config = new _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"]([
    {
        id: _providers_google_login_provider__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new _providers_google_login_provider__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"]("750175574432-tpshh02i3gacjjuaf1u2sfugs4r83h51.apps.googleusercontent.com")
    },
    {
        id: _providers_facebook_login_provider__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new _providers_facebook_login_provider__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"]("1435994693213211")
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _location_location_component__WEBPACK_IMPORTED_MODULE_9__["LocationComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _sociallogin_module__WEBPACK_IMPORTED_MODULE_10__["SocialLoginModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyA9nIuzBQg_mY6Xi8Ia_3_KtbwXftZInyQ'
                }),
            ],
            providers: [
                {
                    provide: _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn large yellow\" [routerLink]=\"['/location']\">Go to Locations</button>\r\n\r\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    LandingComponent.prototype.ngOnInit = function () {
        console.log("Testing");
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/location/location.component.css":
/*!*************************************************!*\
  !*** ./src/app/location/location.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map{\r\n    height: 400px;\r\n    width: auto;\r\n}\r\n\r\n#hikey{\r\n    background: linear-gradient(to right, rgba(255,0,0,0), rgb(201, 201, 201, 1))\r\n}"

/***/ }),

/***/ "./src/app/location/location.component.html":
/*!**************************************************!*\
  !*** ./src/app/location/location.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  img {\r\n    height: auto;\r\n    width: 90px;\r\n  }\r\n  #map {\r\n    height: 400px;\r\n    /* The height is 400 pixels */\r\n    width: 400px;\r\n    /* The width is the width of the web page */\r\n  }\r\n</style>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col s12 m6\">\r\n      <div class=\"card blue-grey darken-1\">\r\n        <div class=\"card-content white-text\"></div>\r\n          <!--<agm-map [latitude]=\"this.currentLat\" [longitude]=\"this.currentLong\" [zoom]=\"zoom\" (mapClick)=\"onChoseLocation($event)\">\r\n            <agm-marker [latitude]=\"this.currentLat\" [longitude]=\"this.currentLong\"></agm-marker>\r\n          </agm-map>\r\n        -->\r\n          <h3>My Google Maps Demo</h3>\r\n          <!--The div element for the map -->\r\n          <div id=\"map\"></div>\r\n          <script>\r\n            // Initialize and add the map\r\n            function initMap() {\r\n              // The location of Uluru\r\n              var uluru = { lat: -25.344, lng: 131.036 };\r\n              // The map, centered at Uluru\r\n              var map = new google.maps.Map(\r\n                document.getElementById('map'), { zoom: 4, center: uluru });\r\n              // The marker, positioned at Uluru\r\n              var marker = new google.maps.Marker({ position: uluru, map: map });\r\n            }\r\n          </script>\r\n          <!--Load the API from the specified URL\r\n            * The async attribute allows the browser to render the page while the API loads\r\n            * The key parameter will contain your own API key (which is not needed for this tutorial)\r\n            * The callback parameter executes the initMap() function\r\n            -->\r\n          <script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyA9nIuzBQg_mY6Xi8Ia_3_KtbwXftZInyQ&callback=initMap\">\r\n          </script>\r\n          <blockquote><span>Latitute: {{currentLat}}</span></blockquote>\r\n          <blockquote><span>Longitude: {{currentLong}}</span></blockquote>\r\n        \r\n    </div>\r\n  </div>\r\n  <div class=\"row align-center\">\r\n    <div class=\"col s12 m6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-image\">\r\n          <img class=\"materialboxed\" src=\"assets/static/images/hikepath.jpg\">\r\n          <span class=\"card-title\">Hikey Ridge</span>\r\n\r\n          <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <p>Get lost in nature and find yourself again on Hikey Ridge. Flexing on them haters with three pristine views and cool nature stuff,\r\n            Hikey Ridge is perfect for beginers, posers, and hikers who hiked before hiking was cool. \r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"socialMedia\" class=\"col s4\"><a href=\"https://facebook.com\" target=\"_blank\"><img class=\"materialboxed\" src=\"assets/static/images/facebook.png\"></a></div>\r\n      <div id=\"socialMedia\" class=\"col s4\"><a href=\"https://instagram.com\" target=\"_blank\"><img class=\"materialboxed\" src=\"assets/static/images/instagram.png\"></a></div>\r\n      <div id=\"socialMedia\" class=\"col s4\"><a href=\"https://twitter.com\" target=\"_blank\"><img class=\"materialboxed\" src=\"assets/static/images/twitter.png\"></a></div>\r\n    </div>\r\n  </div>\r\n            \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/location/location.component.ts":
/*!************************************************!*\
  !*** ./src/app/location/location.component.ts ***!
  \************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationComponent = /** @class */ (function () {
    function LocationComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.zoom = 12;
        this.isTracking = false;
    }
    LocationComponent.prototype.ngOnInit = function () {
        this.findMe();
    };
    LocationComponent.prototype.findMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.showPosition(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    LocationComponent.prototype.showPosition = function (position) {
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
        console.log(this.currentLat);
        var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        if (!this.marker) {
            this.marker = new google.maps.Marker({
                position: location,
                map: this.map,
                title: 'Got you!'
            });
        }
        else {
            this.marker.setPosition(location);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], LocationComponent.prototype, "gmapElement", void 0);
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/location/location.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LocationComponent);
    return LocationComponent;
}());

;


/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fb {\r\n    background-color: #3b50a2 !important;\r\n    vertical-align: center;\r\n    position: relative;\r\n}\r\n\r\n#fbIcon{\r\n    position: relative;\r\n    top: 4px;\r\n    right: 7px;\r\n}\r\n\r\n#socialPic{\r\n    position: relative;\r\n    top: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n#gl{\r\n    background-color: #3c7afc !important;\r\n    vertical-align: center;\r\n    position: relative;\r\n    width: 127px;\r\n}\r\n\r\n#googleIcon{\r\n    position: relative;\r\n    top: 5px;\r\n    right: 7px;\r\n}"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\" />\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <title>Sign into PathWaze</title>\n  <meta name=\"google-signin-client_id\" content=\"50175574432-tpshh02i3gacjjuaf1u2sfugs4r83h51.apps.googleusercontent.com\">\n  <link rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"main.css\" />\n  <script src=\"https://apis.google.com/js/platform.js?onload=init\" async defer></script>\n\n</head>\n\n<body style=\"text-align: center\">\n  <div>\n    <div class=\"signin\" *ngIf=\"!user\">\n      <div>\n        <h4>Not signed in</h4>\n        <p>Sign in with</p>\n      </div>\n      <div>\n        <button id=\"gl\" class=\"btn large\" (click)=\"signInWithGoogle()\"><img id=\"googleIcon\" src=\"/assets/static/images/googleIcon.png\">Google</button>\n        <br>\n        <br>\n        <button id=\"fb\" class=\"btn large\" (click)=\"signInWithFB()\"><img id=\"fbIcon\" src=\"/assets/static/images/fbIcon.png\">Facebook</button>\n      </div>\n    </div>\n    <div *ngIf=\"user\">\n      <div></div>\n      <img id=\"socialPic\" src=\"{{ user.photoUrl }}\">\n      <div>\n        <h4>{{ user.name }}</h4>\n        <p>{{ user.email }}</p>\n      </div>\n      <div>\n        <button class=\"btn large red\" (click)=\"signOut()\">Sign out</button>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth.service */ "./src/auth.service.ts");
/* harmony import */ var _providers_google_login_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/google-login-provider */ "./src/providers/google-login-provider.ts");
/* harmony import */ var _providers_facebook_login_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/facebook-login-provider */ "./src/providers/facebook-login-provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
        });
    };
    SigninComponent.prototype.signInWithGoogle = function () {
        this.authService.signIn(_providers_google_login_provider__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID);
    };
    SigninComponent.prototype.signInWithFB = function () {
        this.authService.signIn(_providers_facebook_login_provider__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID);
    };
    SigninComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/auth.service.ts":
/*!*****************************!*\
  !*** ./src/auth.service.ts ***!
  \*****************************/
/*! exports provided: AuthServiceConfig, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceConfig", function() { return AuthServiceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthServiceConfig = /** @class */ (function () {
    function AuthServiceConfig(providers) {
        this.providers = new Map();
        for (var i = 0; i < providers.length; i++) {
            var element = providers[i];
            this.providers.set(element.id, element.provider);
        }
    }
    return AuthServiceConfig;
}());

var AuthService = /** @class */ (function () {
    function AuthService(_router, config) {
        var _this = this;
        this._router = _router;
        this._user = null;
        this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.providers = config.providers;
        this.providers.forEach(function (provider, key) {
            provider.initialize().then(function (user) {
                user.provider = key;
                _this._user = user;
                _this._authState.next(user);
            }).catch(function (err) {
                // this._authState.next(null);
            });
        });
    }
    AuthService_1 = AuthService;
    Object.defineProperty(AuthService.prototype, "authState", {
        get: function () {
            return this._authState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signIn = function (providerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var providerObject = _this.providers.get(providerId);
            if (providerObject) {
                providerObject.signIn().then(function (user) {
                    user.provider = providerId;
                    resolve(user);
                    _this._user = user;
                    _this._authState.next(user);
                    _this._router.navigate(['/landing']);
                });
            }
            else {
                reject(AuthService_1.ERR_LOGIN_PROVIDER_NOT_FOUND);
            }
        });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this._user) {
                reject(AuthService_1.ERR_NOT_LOGGED_IN);
            }
            else {
                var providerId = _this._user.provider;
                var providerObject = _this.providers.get(providerId);
                if (providerObject) {
                    providerObject.signOut().then(function () {
                        resolve();
                        _this._user = null;
                        _this._authState.next(null);
                    });
                }
                else {
                    reject(AuthService_1.ERR_LOGIN_PROVIDER_NOT_FOUND);
                }
            }
        });
    };
    AuthService.ERR_LOGIN_PROVIDER_NOT_FOUND = 'Login provider not found';
    AuthService.ERR_NOT_LOGGED_IN = 'Not logged in';
    AuthService = AuthService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            AuthServiceConfig])
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());



/***/ }),

/***/ "./src/entities/base-login-provider.ts":
/*!*********************************************!*\
  !*** ./src/entities/base-login-provider.ts ***!
  \*********************************************/
/*! exports provided: BaseLoginProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoginProvider", function() { return BaseLoginProvider; });
var BaseLoginProvider = /** @class */ (function () {
    function BaseLoginProvider() {
    }
    BaseLoginProvider.prototype.loadScript = function (id, src, onload) {
        if (document.getElementById(id)) {
            return;
        }
        var signInJS = document.createElement("script");
        signInJS.async = true;
        signInJS.src = src;
        signInJS.onload = onload;
        document.head.appendChild(signInJS);
    };
    return BaseLoginProvider;
}());



/***/ }),

/***/ "./src/entities/user.ts":
/*!******************************!*\
  !*** ./src/entities/user.ts ***!
  \******************************/
/*! exports provided: SocialUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialUser", function() { return SocialUser; });
var SocialUser = /** @class */ (function () {
    function SocialUser() {
    }
    return SocialUser;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/providers/facebook-login-provider.ts":
/*!**************************************************!*\
  !*** ./src/providers/facebook-login-provider.ts ***!
  \**************************************************/
/*! exports provided: FacebookLoginProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginProvider", function() { return FacebookLoginProvider; });
/* harmony import */ var _entities_base_login_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/base-login-provider */ "./src/entities/base-login-provider.ts");
/* harmony import */ var _entities_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/user */ "./src/entities/user.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FacebookLoginProvider = /** @class */ (function (_super) {
    __extends(FacebookLoginProvider, _super);
    function FacebookLoginProvider(clientId, scope) {
        if (scope === void 0) { scope = 'email,public_profile'; }
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        _this.scope = scope;
        return _this;
    }
    FacebookLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(FacebookLoginProvider.PROVIDER_ID, "//connect.facebook.net/en_US/sdk.js", function () {
                FB.init({
                    appId: _this.clientId,
                    autoLogAppEvents: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.9'
                });
                // FB.AppEvents.logPageView(); #FIX for #18
                FB.getLoginStatus(function (response) {
                    if (response.status === 'connected') {
                        var authResponse_1 = response.authResponse;
                        FB.api('/me?fields=name,email,picture,first_name,last_name', function (response) {
                            var user = new _entities_user__WEBPACK_IMPORTED_MODULE_1__["SocialUser"]();
                            user.id = response.id;
                            user.name = response.name;
                            user.email = response.email;
                            user.photoUrl = "https://graph.facebook.com/" + response.id + "/picture?type=normal";
                            user.firstName = response.first_name;
                            user.lastName = response.last_name;
                            user.authToken = authResponse_1.accessToken;
                            resolve(user);
                        });
                    }
                });
            });
        });
    };
    FacebookLoginProvider.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            FB.login(function (response) {
                if (response.authResponse) {
                    var authResponse_2 = response.authResponse;
                    FB.api('/me?fields=name,email,picture,first_name,last_name', function (response) {
                        var user = new _entities_user__WEBPACK_IMPORTED_MODULE_1__["SocialUser"]();
                        user.id = response.id;
                        user.name = response.name;
                        user.email = response.email;
                        user.photoUrl = "https://graph.facebook.com/" + response.id + "/picture?type=normal";
                        user.firstName = response.first_name;
                        user.lastName = response.last_name;
                        user.authToken = authResponse_2.accessToken;
                        resolve(user);
                    });
                }
            }, { scope: _this.scope });
        });
    };
    FacebookLoginProvider.prototype.signOut = function () {
        return new Promise(function (resolve, reject) {
            FB.logout(function (response) {
                resolve();
            });
        });
    };
    FacebookLoginProvider.PROVIDER_ID = "FACEBOOK";
    return FacebookLoginProvider;
}(_entities_base_login_provider__WEBPACK_IMPORTED_MODULE_0__["BaseLoginProvider"]));



/***/ }),

/***/ "./src/providers/google-login-provider.ts":
/*!************************************************!*\
  !*** ./src/providers/google-login-provider.ts ***!
  \************************************************/
/*! exports provided: GoogleLoginProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginProvider", function() { return GoogleLoginProvider; });
/* harmony import */ var _entities_base_login_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/base-login-provider */ "./src/entities/base-login-provider.ts");
/* harmony import */ var _entities_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/user */ "./src/entities/user.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var GoogleLoginProvider = /** @class */ (function (_super) {
    __extends(GoogleLoginProvider, _super);
    function GoogleLoginProvider(clientId) {
        var _this = _super.call(this) || this;
        _this.clientId = clientId;
        return _this;
    }
    GoogleLoginProvider.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loadScript(GoogleLoginProvider.PROVIDER_ID, "//apis.google.com/js/platform.js", function () {
                gapi.load('auth2', function () {
                    _this.auth2 = gapi.auth2.init({
                        client_id: _this.clientId,
                        scope: 'email'
                    });
                    _this.auth2.then(function () {
                        if (_this.auth2.isSignedIn.get()) {
                            var user = new _entities_user__WEBPACK_IMPORTED_MODULE_1__["SocialUser"]();
                            var profile = _this.auth2.currentUser.get().getBasicProfile();
                            user.id = profile.getId();
                            user.name = profile.getName();
                            user.email = profile.getEmail();
                            user.photoUrl = profile.getImageUrl();
                            user.firstName = profile.getGivenName();
                            user.lastName = profile.getFamilyName();
                            resolve(user);
                        }
                    });
                });
            });
        });
    };
    GoogleLoginProvider.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var promise = _this.auth2.signIn();
            promise.then(function () {
                var user = new _entities_user__WEBPACK_IMPORTED_MODULE_1__["SocialUser"]();
                var profile = _this.auth2.currentUser.get().getBasicProfile();
                user.id = profile.getId();
                user.name = profile.getName();
                user.email = profile.getEmail();
                user.photoUrl = profile.getImageUrl();
                resolve(user);
            });
        });
    };
    GoogleLoginProvider.prototype.signOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth2.signOut().then(function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    GoogleLoginProvider.PROVIDER_ID = "GOOGLE";
    return GoogleLoginProvider;
}(_entities_base_login_provider__WEBPACK_IMPORTED_MODULE_0__["BaseLoginProvider"]));



/***/ }),

/***/ "./src/sociallogin.module.ts":
/*!***********************************!*\
  !*** ./src/sociallogin.module.ts ***!
  \***********************************/
/*! exports provided: configFactory, SocialLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFactory", function() { return configFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginModule", function() { return SocialLoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function configFactory(config) {
    return config;
}
var SocialLoginModule = /** @class */ (function () {
    function SocialLoginModule() {
    }
    SocialLoginModule_1 = SocialLoginModule;
    SocialLoginModule.initialize = function (config) {
        return {
            ngModule: SocialLoginModule_1,
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                {
                    provide: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthServiceConfig"],
                    useValue: config
                }
            ]
        };
    };
    SocialLoginModule = SocialLoginModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
            ]
        })
    ], SocialLoginModule);
    return SocialLoginModule;
    var SocialLoginModule_1;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Geran Pauley\Desktop\Dojo\MEAN\Project\PathWaze\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map