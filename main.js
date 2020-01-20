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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<!--app-footer></app-footer-->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.renderer.listenGlobal('window', 'scroll', function (event) {
                var number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "hasScrolled", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { GalleryModule }  from '@ngx-gallery/core';
//import { LightboxModule } from '@ngx-gallery/lightbox';






//import { SignupComponent }  from './signup/signup.component';
//import { ProfileComponent } from './profile/profile.component';
//import { BookComponent }    from './book/book.component';
//import { LoginComponent }   from './login/login.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_11__["HomeModule"]
                //GalleryModule,
                //LightboxModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { ProfileComponent } from './profile/profile.component';
//import { SignupComponent }  from './signup/signup.component';

//import { LoginComponent }   from './login/login.component';
//import { BookComponent }    from './book/book.component';
var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    //{ path: 'user-profile', component: ProfileComponent },
    //{ path: 'register',     component: SignupComponent },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    //{ path: 'login',        component: LoginComponent },
    //{ path: 'book',         component: BookComponent, data: { title: 'Book List' }},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: false })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"position-relative\">\n    <!-- Hero for FREE version -->\n    <section class=\"section section-lg section-hero section-shaped\">\n      <!-- Background circles -->\n      <div class=\"shape shape-style-1 shape-primary\">\n        <span class=\"span-150\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n      </div>\n      <div class=\"container shape-container d-flex align-items-center py-lg\">\n        <div class=\"col px-0\">\n          <div class=\"row align-items-left justify-content-center\">\n            <div class=\"col-lg-8 text-left\">\n              <img src=\"./assets/img/brand/qroqus-purple.png\" style=\"width: 200px;\" class=\"img-fluid\">\n              <p class=\"lead text-white\">A beautiful Design System for Bootstrap 4 and Angular 7. It's Free and Open Source.</p>\n            </div>\n            <div class=\"col-lg-4\">\n              <img src=\"./assets/img/brand/phone.png\" style=\"height: 300px;\" class=\"img-fluid\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- SVG separator -->\n      <div class=\"separator separator-bottom separator-skew zindex-100\">\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n        </svg>\n      </div>\n    </section>\n  </div>\n\n  <section class=\"section section-lg pt-lg-0 mt-200\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row row-grid\">\n\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n                    <i class=\"ni ni-credit-card\"></i>\n                  </div>\n                  <h6 class=\"text-primary text-uppercase\">Оплата карткою</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n                    <i class=\"ni ni-chart-bar-32\"></i>\n                  </div>\n                  <h6 class=\"text-primary text-uppercase\">Динаміка продаж</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n                    <i class=\"ni ni-bullet-list-67\"></i>\n                  </div>\n                  <h6 class=\"text-primary text-uppercase\">Веб-вітрина</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"section section-lg pt-lg-0 mt-100\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row row-grid\">\n\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n                    <i class=\"ni ni-notification-70\"></i>\n                  </div>\n                  <h6 class=\"text-primary text-uppercase\">Знижки та акції</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n                    <i class=\"ni ni-calendar-grid-58\"></i>\n                  </div>\n                  <h6 class=\"text-primary text-uppercase\">Online резервування</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n                    <i class=\"ni ni-circle-08\"></i>\n                  </div>\n                  <h6 class=\"text-primary text-uppercase\">Програма лояльності</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <app-sections></app-sections>\n</main>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/sections.module */ "./src/app/sections/sections.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__["SectionsModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  \n  <!--  header  -->\n  <div class=\"wrapper\">\n    <div class=\"page-header page-header-small header-filter\">\n      <div class=\"page-header-image\"\n           style=\"background-image: url('assets/img/albatroz/header.jpg');\">\n      </div>\n      <!--div class=\"content-center\">\n        <div class=\"row\">\n          <div class=\"col-md-6 mx-auto text-center\">\n            <h1 class=\"title text-white\">Кафе \"Альбатрос\"</h1>\n          </div>\n        </div>\n      </div-->\n    </div>\n  </div>\n  <!--  ./header  -->\n\n  <!--  promo-card  -->\n  <section class=\"section section-lg pt-lg-0 mt--150\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row row-grid\">\n            <div class=\"col-lg-6\">\n              <div class=\"card shadow shadow-lg--hover mt-5 bg-gradient-warning\">\n                <div class=\"card-body\">\n                  <div class=\"pl-4\">\n                    <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle\">\n                      <i class=\"ni ni-ruler-pencil text-warning\"></i>\n                    </div>\n                    <h5 class=\"title text-white\">Бізнес-ланч 39 ₴</h5>\n                    <p class=\"text-white\">З 12 по 17 год. пропонуємо Вам комплексний обід, який складається з червоного борщу, свиної відбивної з картоплею п'юре та салат з капусти та огрків.</p>\n                  </div> \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!--  ./promo-card  -->\n\n  <!--  about  -->\n  <section class=\"section\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center text-center mb-lg\">\n        <div class=\"col-lg-8\">\n          <h2 class=\"display-3\">Вас вітає кафе \"Альбатрос\"</h2>\n          <p class=\"lead text-muted\">Втомились від шаленного ритму великого міста та щоденної рутини, скучили за свіжим повітрям та мальовничою природою - тоді ми запрошуємо Вас відвідати кафе \"Альбатрос\".\n          Ми розташовані неподалік від Львова, в кількох кілометрах від смт Брюховичі, у селі Воля-Гомулецька.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!--  ./about  -->\n\n  <!--  feature  -->\n  <section class=\"section bg-gradient-default\">\n    <div class=\"container pb-30\">\n      <!--div class=\"row text-center justify-content-center\">\n        <div class=\"col-lg-10\">\n          <h2 class=\"display-3 text-white\">Вас вітає кафе \"Альбатрос\"</h2>\n          <p class=\"lead text-white\">Втомились від шаленного ритму великого міста та щоденної рутини, скучили за свіжим повітрям та мальовничою природою - тоді ми запрошуємо Вас відвідати кафе \"Альбатрос\".\n          Ми розташовані неподалік від Львова, в кількох кілометрах від смт Брюховичі, у селі Воля-Гомулецька.</p>\n        </div>\n      </div-->\n      <div class=\"row row-grid mt-5\">\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-money-coins text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Помірні ціни</h5>\n          <p class=\"text-white mt-3\">В нашому кафе ви будете приємно вражені нашими демократичними цінами.</p>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Терасса</h5>\n          <p class=\"text-white mt-3\">Біля кафе розташована широка терасса з мальовничим виглядом на озеро.</p>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-atom text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Альтанки</h5>\n          <p class=\"text-white mt-3\">На терассі є альтанки, де ви можете скуштувати наші страви на відкритому повітрі.</p>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-settings text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Запечена риба</h5>\n          <p class=\"text-white mt-3\">Це наша фірмова страва. Ця риба була вирощена та виловлена у нашому озері.</p>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Страви в казані</h5>\n          <p class=\"text-white mt-3\">На вихідних ми готуємо в казані на дровах сезонні страви.</p>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-atom text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Продукти з села</h5>\n          <p class=\"text-white mt-3\">Всі наші продукти ми купляємо у жителів села Воля-Гомецька.</p>\n        </div>\n      </div>\n    </div>\n    <!-- SVG separator  -->\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </section>\n  <!-- ./feature  -->\n  \n  <!-- gallery  -->\n  <section class=\"section\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n          <div class=\"col-lg-3\">\n            <div class=\"card card-blog card-background\">\n              <div class=\"full-background\"\n                   style=\"background-image: url('assets/img/albatroz/mag-1-md.jpg\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3\">\n            <div class=\"card card-blog card-background\">\n              <div class=\"full-background\"\n                   style=\"background-image: url('assets/img/albatroz/mag-2-md.jpg\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6\">\n            <div class=\"card card-blog card-background\">\n              <div class=\"full-background\"\n                   style=\"background-image: url('assets/img/albatroz/mag-3-md.jpg\">\n              </div>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"row align-items-center\" style=\"padding-top: 40px;\">\n          <div class=\"col-lg-6\">\n            <div class=\"card card-blog card-background\">\n              <div class=\"full-background\"\n                   style=\"background-image: url('assets/img/albatroz/mag-4-md.jpg\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3\">\n            <div class=\"card card-blog card-background\">\n              <div class=\"full-background\"\n                   style=\"background-image: url('assets/img/albatroz/mag-5-md.jpg\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3\">\n            <div class=\"card card-blog card-background\">\n              <div class=\"full-background\"\n                   style=\"background-image: url('assets/img/albatroz/mag-6-md.jpg\">\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </section>\n  <!--  /.gallery -->\n\n  <!-- menu -->\n  <section class=\"section pb-0 bg-gradient-warning\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center\">\n          <div class=\"page-section\">\n            <h1 class=\"page-title text-white\">Меню</h1>\n          </div>\n        </div>\n      </div>\n      <!--------------------\n          FIRST MENU ROW\n      --------------------->\n      <!--  soups  -->\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40\">\n          <div class=\"menu-block\">\n            <h3 class=\"menu-title\">Перші страви</h3>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Червоний борщ</h5>\n                    <span class=\"dish-meta\">300  /  50 г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                 </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Бульйон курячий</h5>\n                    <span class=\"dish-meta\">300 г</span>\n                    <div class=\"dish-price\"><p>₴ 10.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Солянка м'ясна</h5>\n                    <span class=\"dish-meta\">300 г</span>\n                    <div class=\"dish-price\"><p>₴ 40.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Чанахи</h5>\n                    <span class=\"dish-meta\">300 г</span>\n                    <div class=\"dish-price\"><p>₴ 50.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div><!--  ./soups  -->\n\n        <!--  firm-dishes  -->\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40\">\n          <div class=\"menu-block\">\n            <h3 class=\"menu-title\">Фірмові страви</h3>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Уха</h5>\n                    <span class=\"dish-meta\">300 г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Риб запечена з овочами</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 30.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Риба смажена</h5>\n                    <span class=\"dish-meta\">100г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div><!--  ./firm-dishes  -->\n\n        <!-- second-dishes -->\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40\">\n          <div class=\"menu-block\">\n            <h3 class=\"menu-title\">Другі страви</h3>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Вареники зі сметаною</h5>\n                    <span class=\"dish-meta\">200  /  30  /  50г</span>\n                    <div class=\"dish-price\"><p>₴ 35.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Вареники зі шкварками</h5>\n                    <span class=\"dish-meta\">200  /  80г</span>\n                    <div class=\"dish-price\"><p>₴ 30.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Пельмені домашні</h5>\n                    <span class=\"dish-meta\">200  /  80 г</span>\n                    <div class=\"dish-price\"><p>₴ 45.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Деруни у глечику</h5>\n                    <span class=\"dish-meta\">у глечику зі свининою</span>\n                    <span class=\"dish-meta\">200  /  75 г</span>\n                    <div class=\"dish-price\"><p>₴ 40.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Яєшня</h5>\n                    <span class=\"dish-meta\">з двох яєць</span>\n                    <span class=\"dish-meta\">80  /  70г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Яєшня з ковбасою</h5>\n                    <span class=\"dish-meta\">80  /  20  /  70г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Омлет</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 27.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div><!--  ./scond-dishes  -->\n\n      <!--------------------\n          SECOND MENU ROW    \n      --------------------->\n      <!--  meat-dishes  -->\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40\">\n          <div class=\"menu-block\">\n            <h3 class=\"menu-title\">М'ясні страви</h3>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Відбивна домашня</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 30.00</p></div>\n                  </div>\n                 </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Відбивна запечена</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 35.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Відбивна куряча</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Язик в сметанному соусі</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 45.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div><!--  meat-dishes  -->\n\n        <!-- side-dishes -->\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40\">\n          <div class=\"menu-block\">\n            <h3 class=\"menu-title\">Гарніри</h3>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Картопля фрі</h5>\n                    <span class=\"dish-meta\">150  /  70 г</span>\n                    <div class=\"dish-price\"><p>₴ 30.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Картопля по селянськи</h5>\n                    <span class=\"dish-meta\">200 г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Картопляне пюре</h5>\n                    <span class=\"dish-meta\">200  /  30  /  30г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Картопя молода</h5>\n                    <span class=\"dish-meta\">200  /  30  /  30г</span>\n                    <div class=\"dish-price\"><p>₴ 30.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div><!-- /.side-dishes -->\n\n        <!--  hot-beverages  -->\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40\">\n          <div class=\"menu-block\">\n            <h3 class=\"menu-title\">Гарячі напої</h3>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Кава заварна</h5>\n                    <div class=\"dish-price\"><p>₴ 15.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Кава розчинна</h5>\n                    <div class=\"dish-price\"><p>₴ 15.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Чай</h5>\n                    <span class=\"dish-meta\">в асортименті</span>\n                    <div class=\"dish-price\"><p>₴ 10.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Nescafe 3 in 1</h5>\n                    <div class=\"dish-price\"><p>₴ 15.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Капучино</h5>\n                    <div class=\"dish-price\"><p>₴ 15.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div><!--  /.hot-baverages  -->\n\n      <!--------------------\n          THERD MENU ROW    \n      --------------------->\n      <!--  salads  -->\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40\">\n          <div class=\"menu-block\">\n            <h3 class=\"menu-title\">Салати</h3>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Грецький</h5>\n                    <span class=\"dish-meta\">помідори / перець / фета / маслини / олія</span>\n                    <span class=\"dish-meta\">150 г</span>\n                    <div class=\"dish-price\"><p>₴ 35.00</p></div>\n                  </div>\n                 </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Овочевий</h5>\n                    <span class=\"dish-meta\">помідори / огірок / цибуля / олія</span>\n                    <span class=\"dish-meta\">150 г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Капустяник</h5>\n                    <span class=\"dish-meta\">капуста свіжа / морква / олія</span>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Дністер</h5>\n                    <span class=\"dish-meta\">капуста / ковбаса / горошок / майонез</span>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 30.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Візантійський</h5>\n                    <span class=\"dish-meta\">язик / гриби мариновані / яйце / майонез</span>\n                    <span class=\"dish-meta\">150 г</span>\n                    <div class=\"dish-price\"><p>₴ 40.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div><!--  ./salads  -->\n\n        <!-- appetizers -->\n        <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40\">\n          <div class=\"menu-block\">\n            <h3 class=\"menu-title\">Холодні закуски</h3>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Асорті м'ясне</h5>\n                    <span class=\"dish-meta\">100 / 100 / 100 / 20 г</span>\n                    <div class=\"dish-price\"><p>₴ 100.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Асорті овочеве</h5>\n                    <span class=\"dish-meta\">300 / 20 / 30г</span>\n                    <div class=\"dish-price\"><p>₴ 45.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Огірок малосольний</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 15.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Сало з часником</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 15.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Канапки в асортименті</h5>\n                    <span class=\"dish-meta\">30 / 30 / 5 г</span>\n                    <div class=\"dish-price\"><p>₴ 15.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Канапка \"гаряча\"</h5>\n                    <span class=\"dish-meta\">30 / 30 / 5г</span>\n                    <div class=\"dish-price\"><p>₴ 17.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Язик відварний з хроном</h5>\n                    <span class=\"dish-meta\">75 / 50 г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Лимон з цукром</h5>\n                    <div class=\"dish-price\"><p>₴ 15.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Масло</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 25.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Майонез</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 10.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Кетчуп</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 15.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Сметана</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 12.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Маслини</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 30.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"menu-content\">\n              <div class=\"row\">\n                <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n                  <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n                    <i class=\"ni ni-building text-primary\"></i>\n                  </div>\n                </div>\n                <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\n                  <div class=\"dish-content\">\n                    <h5 class=\"dish-title\">Оливки</h5>\n                    <span class=\"dish-meta\">100 г</span>\n                    <div class=\"dish-price\"><p>₴ 30.00</p></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div><!-- ./appetizers -->\n      </div><!--  /.third menu row  -->\n    </div><!-- container -->\n    <!-- SVG separator  -->\n    <div class=\"separator separator-bottom separator-skew zindex--300\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\n           xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </section>\n  <!-- /.menu -->\n\n  <!--section class=\"section section-lg bg-gradient-default\">\n    <div class=\"container pt-lg pb-50\">\n      <div class=\"row row-grid mt-5\"-->\n  <section class=\"section bg-gradient-default\">\n    <div class=\"container\">\n      <div class=\"row row-grid\">\n\n        <div class=\"col-lg-4\">\n          <h5 class=\"text-white mt-3\">Building tools</h5>\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n\n        <div class=\"col-lg-4\">\n\n        </div>\n\n        <div class=\"col-lg-4\">\n          <div class=\"contact-us\">\n              <div class=\"contact-icon\">\n                  <i class=\"fa fa-map-o\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"contact-info\">\n                  <h3>Adress</h3>\n                  <p>Lviv</p>\n                  <p>Ukraine</p>\n                  <p>5353 Road Avenue</p>\n              </div>\n          </div>\n          <div class=\"contact-us\">\n              <div class=\"contact-icon\">\n                  <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"contact-info\">\n                  <h3>Володимир</h3>\n                  <p>+91 7568 54 3012</p>\n              </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n</main>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ==========================\n\n    PAGE-HEADER\n\n=============================*/\n.page-header {\n  position: relative;\n  min-height: 60vh;\n  max-height: 440px;\n  overflow: visible !important;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n.page-header .header-filter {\n    position: relative; }\n.page-header .page-header-image {\n    position: absolute;\n    background-size: cover;\n    background-position: center center;\n    width: 100%;\n    height: 100%;\n    z-index: -1; }\n.page-header .content-center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 2;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    text-align: center;\n    color: #fff;\n    padding: 0 15px;\n    width: 100%; }\n.page-header .title {\n    margin-bottom: 15px; }\n/* ==========================\n\n    Menu\n\n=============================*/\n.menu-block {\n  margin-bottom: 30px; }\n.menu-title {\n  color: #fff;\n  border-bottom: 3px solid #fff;\n  margin-bottom: 36px;\n  padding-bottom: 10px; }\n.menu-content {\n  color: #fff;\n  border-bottom: 1px solid #fff;\n  margin-bottom: 30px; }\n.dish-content {\n  margin-top: 12px;\n  margin-bottom: 40px; }\n.dish-meta {\n  font-size: 12px;\n  display: block;\n  width: 210px;\n  line-height: 1.7; }\n.dish-title {\n  color: #fff;\n  margin-bottom: 6px;\n  font-size: 15px;\n  font-weight: 500;\n  position: relative; }\n.dish-price {\n  position: absolute;\n  right: 16px;\n  top: 0px;\n  font-size: 26px;\n  color: #fff;\n  font-weight: 500; }\n.well-block .dish-meta {\n  width: 100%; }\n.well-block .dish-price {\n  font-size: 26px;\n  font-weight: 500;\n  position: inherit; }\n/* ==========================\n    Contact\n    bootsnipp.com/snippets/ooa9M\n=============================*/\n.contact-us {\n  position: relative;\n  z-index: 2;\n  margin-top: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center; }\n.contact-icon {\n  position: absolute; }\n.contact-icon i {\n  font-size: 36px;\n  top: -5px;\n  position: relative;\n  color: white; }\n.contact-info {\n  margin-left: 75px;\n  color: #fff; }\n.contact-info h3 {\n  font-size: 20px;\n  color: #fff;\n  margin-bottom: 0; }\n/* ====================\n\n        GALLERY\n===================== */\n.card-background {\n  background-position: center center;\n  background-size: cover;\n  text-align: center;\n  overflow: hidden;\n  height: 330px; }\n.card-background .full-background {\n    background-position: center center;\n    background-size: cover;\n    text-align: center;\n    margin-bottom: 30px;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    border-radius: .3rem;\n    -webkit-backface-visibility: hidden;\n    -webkit-transition: 1s cubic-bezier(0.2, 1, 0.22, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2toZXgvQ29kZS9hcmdvbi9zcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OzhCQ0k4QjtBREM5QjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1Ysb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBO0FBUHZCO0lBU1Esa0JBQWtCLEVBQUE7QUFUMUI7SUFZUSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVcsRUFBQTtBQWpCbkI7SUFvQlEsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLHdDQUErQjtZQUEvQixnQ0FBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFdBQ0k7SUFDSixlQUFlO0lBQ2YsV0FBVyxFQUFBO0FBN0JuQjtJQWdDUSxtQkFBbUIsRUFBQTtBQUszQjs7Ozs4QkNIOEI7QURROUI7RUFDSSxtQkFBbUIsRUFBQTtBQUV2QjtFQUNJLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBO0FBRXhCO0VBQ0ksV0FBVztFQUNYLDZCQUE2QjtFQUM3QixtQkFBbUIsRUFBQTtBQUd2QjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtBQUV2QjtFQUNJLGVBQWU7RUFFZixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBRXBCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBRWYsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0FBRXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTtBQUVwQjtFQUNJLFdBQVcsRUFBQTtBQUVmO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtBQUlyQjs7OzhCQ1Q4QjtBRGE5QjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLG9CQUFvQjtFQUlwQixhQUFhO0VBQ2IseUJBQXlCO0VBSXpCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksa0JBQWtCLEVBQUE7QUFFdEI7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBO0FBRWY7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQixFQUFBO0FBR3BCOzs7dUJDWnVCO0FEZ0J2QjtFQUNJLGtDQUFrQztFQUNsQyxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUFMakI7SUFPUSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxvREFBK0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBQQUdFLUhFQURFUlxuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4ucGFnZS1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiA2MHZoO1xuICAgIG1heC1oZWlnaHQ6IDQ0MHB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmhlYWRlci1maWx0ZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgLnBhZ2UtaGVhZGVyLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gICAgLmNvbnRlbnQtY2VudGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOlxuICAgICAgICAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgTWVudVxuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4ubWVudS1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5tZW51LXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLm1lbnUtY29udGVudCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5kaXNoLWltZyB7IH1cbi5kaXNoLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5kaXNoLW1ldGEge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAvL3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG4uZGlzaC10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAvL3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGlzaC1wcmljZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIHRvcDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLndlbGwtYmxvY2sgLmRpc2gtbWV0YSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ud2VsbC1ibG9jayAuZGlzaC1wcmljZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcG9zaXRpb246IGluaGVyaXQ7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBDb250YWN0XG4gICAgYm9vdHNuaXBwLmNvbS9zbmlwcGV0cy9vb2E5TVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhY3QtdXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRhY3QtaWNvbiBpIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgdG9wOiAtNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWN0LWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLmNvbnRhY3QtaW5mbyBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgR0FMTEVSWVxuPT09PT09PT09PT09PT09PT09PT09ICovXG4uY2FyZC1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAzMzBweDtcbiAgICAuZnVsbC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4zcmVtO1xuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcyBjdWJpYy1iZXppZXIoLjIsMSwuMjIsMSk7XG4gICAgfVxufVxuIiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIFBBR0UtSEVBREVSXG5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi5wYWdlLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNjB2aDtcbiAgbWF4LWhlaWdodDogNDQwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLnBhZ2UtaGVhZGVyIC5oZWFkZXItZmlsdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLnBhZ2UtaGVhZGVyIC5wYWdlLWhlYWRlci1pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogLTE7IH1cbiAgLnBhZ2UtaGVhZGVyIC5jb250ZW50LWNlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB6LWluZGV4OiAyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLnBhZ2UtaGVhZGVyIC50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgTWVudVxuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4ubWVudS1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuLm1lbnUtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4OyB9XG5cbi5tZW51LWNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuLmRpc2gtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cblxuLmRpc2gtbWV0YSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNzsgfVxuXG4uZGlzaC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5kaXNoLXByaWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbiAgdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLndlbGwtYmxvY2sgLmRpc2gtbWV0YSB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi53ZWxsLWJsb2NrIC5kaXNoLXByaWNlIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogaW5oZXJpdDsgfVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIENvbnRhY3RcbiAgICBib290c25pcHAuY29tL3NuaXBwZXRzL29vYTlNXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4uY29udGFjdC11cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uY29udGFjdC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyB9XG5cbi5jb250YWN0LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdG9wOiAtNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4uY29udGFjdC1pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5jb250YWN0LWluZm8gaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbi8qID09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgR0FMTEVSWVxuPT09PT09PT09PT09PT09PT09PT09ICovXG4uY2FyZC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDMzMHB4OyB9XG4gIC5jYXJkLWJhY2tncm91bmQgLmZ1bGwtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogLjNyZW07XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjIyLCAxKTsgfVxuIl19 */"

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
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
        var map = document.getElementById('map-canvas');
        var lat = map.getAttribute('data-lat');
        var lng = map.getAttribute('data-lng');
        var myLatlng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            zoom: 12,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] },
                { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] },
                { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] },
                { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] },
                { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] },
                { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
                { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] },
                { "featureType": "water", "elementType": "all", "stylers": [{ "color": '#5e72e4' }, { "visibility": "on" }] }
            ]
        };
        map = new google.maps.Map(map, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hello World!'
        });
        var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
            '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/sections/alerts-section/alerts-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2FsZXJ0cy1zZWN0aW9uL2FsZXJ0cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/alerts-section/alerts-section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <h3 class=\"mt-lg mb-4\">\n    <span>Alerts</span>\n  </h3>\n  <div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"true\"  (close)=\"close(alert)\" >\n      <ng-container *ngIf=\"alert.icon\">\n        <div class=\"alert-inner--icon\">\n            <i class=\"{{alert.icon}}\"></i>\n        </div>\n      </ng-container>\n      <span class=\"alert-inner--text\">  <strong>{{alert.strong}} </strong>{{ alert.message }}</span>\n    </ngb-alert>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sections/alerts-section/alerts-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: AlertsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsSectionComponent", function() { return AlertsSectionComponent; });
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

var AlertsSectionComponent = /** @class */ (function () {
    function AlertsSectionComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Success!',
            message: 'This is a success alert—check it out!',
            icon: 'ni ni-like-2'
        }, {
            id: 2,
            strong: 'Info!',
            type: 'info',
            message: 'This is an info alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Danger!',
            message: 'This is a danger alert—check it out!',
            icon: 'ni ni-support-16'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    AlertsSectionComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AlertsSectionComponent.prototype, "alerts", void 0);
    AlertsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts-section',
            template: __webpack_require__(/*! ./alerts-section.component.html */ "./src/app/sections/alerts-section/alerts-section.component.html"),
            styles: [__webpack_require__(/*! ./alerts-section.component.css */ "./src/app/sections/alerts-section/alerts-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertsSectionComponent);
    return AlertsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/angular-section/angular-section.component.css":
/*!************************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2FuZ3VsYXItc2VjdGlvbi9hbmd1bGFyLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/angular-section/angular-section.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"mt-lg mb-5\">\n    <span>Javascript Components</span>\n  </h2>\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Modals</h3>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-primary mb-3\" (click)=\"open(classic,'' , '')\">\n       Default\n      </button>\n      <ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Type your modal title</h6>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">×</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n            <button type=\"button\" class=\"btn btn-link  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-warning mb-3\" (click)=\"open(classic2, 'Notification', '')\">\n         Notification\n      </button>\n      <ng-template #classic2 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-content bg-gradient-danger\">\n          <div class=\"modal-header\">\n            <h6 class=\"modal-title\" id=\"modal-title-notification\">Your attention is required</h6>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n              <span aria-hidden=\"true\">×</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"py-3 text-center\">\n              <i class=\"ni ni-bell-55 ni-3x\"></i>\n              <h4 class=\"heading mt-4\">You should read this!</h4>\n              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-white\">Ok, Got it</button>\n            <button type=\"button\" class=\"btn btn-link text-white ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n\n    <div class=\"col-md-4\">\n      <button class=\"btn btn-block btn-default\" (click)=\"open(classic1, 'modal_mini', 'sm')\">\n         Form\n      </button>\n      <ng-template #classic1 let-c=\"close\" let-d=\"dismiss\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body p-0\">\n            <div class=\"card bg-secondary shadow border-0\">\n              <div class=\"card-header bg-white pb-5\">\n                <div class=\"text-muted text-center mb-3\">\n                  <small>Sign in with</small>\n                </div>\n                <div class=\"btn-wrapper text-center\">\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                    <span class=\"btn-inner--icon\">\n                      <img src=\"./assets/img/icons/common/github.svg\">\n                    </span>\n                    <span class=\"btn-inner--text\">Github</span>\n                  </a>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n                    <span class=\"btn-inner--icon\">\n                      <img src=\"./assets/img/icons/common/google.svg\">\n                    </span>\n                    <span class=\"btn-inner--text\">Google</span>\n                  </a>\n                </div>\n              </div>\n              <div class=\"card-body px-lg-5 py-lg-5\">\n                <div class=\"text-center text-muted mb-4\">\n                  <small>Or sign in with credentials</small>\n                </div>\n                <form role=\"form\">\n                  <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                      </div>\n                      <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                    <div class=\"input-group input-group-alternative\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                      </div>\n                      <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                    </div>\n                  </div>\n                  <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                    <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n                    <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                      <span>Remember me</span>\n                    </label>\n                  </div>\n                  <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n  <!-- Datepicker -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Datepicker</h3>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Single date</small>\n      <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n          </div>\n          <!-- (select)=\"onDateSelection($event)\" -->\n          <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp\" [(ngModel)]=\"model1\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" type=\"text\"  autocomplete=\"off\"/>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8 mt-4 mt-md-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Date range</small>\n      <div class=\"input-daterange datepicker row align-items-center\">\n        <div class=\"col\">\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus3===true}\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n              </div>\n              <!-- (select)=\"mama($event)\" -->\n              <input class=\"form-control datepicker\"\n                     placeholder=\"Select date\"\n                     name=\"dp1\"\n                     [(ngModel)]=\"model1\"\n                     ngbDatepicker\n                     #d1=\"ngbDatepicker\"\n                     (click)=\"d1.toggle()\"\n                     type=\"text\"\n                     [dayTemplate]=\"t\"\n                     (dateSelect)=\"startDateChanged($event)\"\n                     autocomplete=\"off\"\n                     (focus)=\"focus3=true\"\n                     (blur)=\"focus3=false\"/>\n              <ng-template #t let-date let-focused=\"focused\" >\n               <span class=\"custom-day\"\n                [class.text-white]=\"isActive(date)\"\n                [class.range-end]=\"isRangeEnd(date)\"\n                [class.range-start]=\"isRangeStart(date)\"\n                [class.btn-light]=\"isActive(date)\"\n                [class.bg-primary]=\"isActive(date)\"\n                [class.range]=\"isInRange(date)\"\n                [class.faded]=\"isInRange(date)\"\n               >\n                 {{ date.day }}\n               </span>\n             </ng-template>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus4===true}\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n              </div>\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp2\" [(ngModel)]=\"model2\" ngbDatepicker #d2=\"ngbDatepicker\" (click)=\"d2.toggle()\" (focus)=\"focus4=true\" (blur)=\"focus4=false\" type=\"text\" [dayTemplate]=\"t1\" (dateSelect)=\"endDateChanged($event)\" autocomplete=\"off\"/>\n              <ng-template #t1 let-date let-focused=\"focused\" >\n               <span class=\"custom-day\"\n                [class.text-white]=\"isActive(date)\"\n                [class.range-end]=\"isRangeEnd(date)\"\n                [class.range-start]=\"isRangeStart(date)\"\n                [class.btn-light]=\"isActive(date)\"\n                [class.bg-primary]=\"isActive(date)\"\n                [class.range]=\"isInRange(date)\"\n                [class.faded]=\"isInRange(date)\"\n               >\n                 {{ date.day }}\n               </span>\n             </ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Tooltips and Popovers -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Tooltips &amp; Popovers</h3>\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Tooltips</small>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"left\"   ngbTooltip=\"Tooltip on left\">On left</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"top\"    ngbTooltip=\"Tooltip on top\">On top</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">On bottom</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"right\"  ngbTooltip=\"Tooltip on right\">On right</button>\n    </div>\n    <div class=\"col-lg-6 mt-4 mt-lg-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Popovers</small>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"left\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">On left</button>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"top\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">On top</button>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"right\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">On right</button>\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"bottom\"\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">On bottom</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sections/angular-section/angular-section.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: AngularSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSectionComponent", function() { return AngularSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AngularSectionComponent = /** @class */ (function () {
    function AngularSectionComponent(modalService, calendar) {
        this.modalService = modalService;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    AngularSectionComponent.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content, { centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    AngularSectionComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AngularSectionComponent.prototype.isRangeStart = function (date) {
        return this.model1 && this.model2 && date.equals(this.model1);
    };
    AngularSectionComponent.prototype.isRangeEnd = function (date) {
        return this.model1 && this.model2 && date.equals(this.model2);
    };
    AngularSectionComponent.prototype.isInRange = function (date) {
        return date.after(this.model1) && date.before(this.model2);
    };
    AngularSectionComponent.prototype.isActive = function (date) {
        return date.equals(this.model1) || date.equals(this.model2);
    };
    AngularSectionComponent.prototype.endDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model1 = this.model2;
        }
    };
    AngularSectionComponent.prototype.startDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model2 = this.model1;
        }
    };
    AngularSectionComponent.prototype.ngOnInit = function () {
    };
    AngularSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-section',
            template: __webpack_require__(/*! ./angular-section.component.html */ "./src/app/sections/angular-section/angular-section.component.html"),
            styles: [__webpack_require__(/*! ./angular-section.component.css */ "./src/app/sections/angular-section/angular-section.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], AngularSectionComponent);
    return AngularSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/buttons-section/buttons-section.component.css":
/*!************************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2J1dHRvbnMtc2VjdGlvbi9idXR0b25zLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/buttons-section/buttons-section.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-components pb-0\" id=\"section-components\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-12\">\n        <!-- Basic elements -->\n        <h2 class=\"mb-5\">\n          <span>Basic Elements</span>\n        </h2>\n        <!-- Buttons -->\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Buttons</h3>\n        <!-- Button styles -->\n        <div>\n          <button class=\"btn btn-primary\" type=\"button\">Button</button>\n          <button class=\"btn btn-icon btn-3 btn-primary\" type=\"button\">\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\n            <span class=\"btn-inner--text\">With icon</span>\n          </button>\n          <button class=\"btn btn-icon btn-2 btn-primary\" type=\"button\">\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\n          </button>\n          <!-- Button wizes -->\n          <div class=\"mb-3 mt-5\">\n            <small class=\"text-uppercase font-weight-bold\">Pick your size</small>\n          </div>\n          <button class=\"btn btn-sm btn-primary\" type=\"button\">Small</button>\n          <button class=\"btn btn-1 btn-primary\" type=\"button\">Regular</button>\n          <button class=\"btn btn-lg btn-primary\" type=\"button\">Large Button</button>\n        </div>\n        <!-- Button colors -->\n        <div class=\"mb-3 mt-5\">\n          <small class=\"text-uppercase font-weight-bold\">Pick your color</small>\n        </div>\n        <button class=\"btn btn-1 btn-primary\" type=\"button\">Primary</button>\n        <button class=\"btn btn-1 btn-info\" type=\"button\">Info</button>\n        <button class=\"btn btn-1 btn-success\" type=\"button\">Success</button>\n        <button class=\"btn btn-1 btn-warning\" type=\"button\">Warning</button>\n        <button class=\"btn btn-1 btn-danger\" type=\"button\">Danger</button>\n        <button class=\"btn btn-1 btn-neutral\" type=\"button\">Neutral</button>\n        <div class=\"mb-3 mt-5\">\n          <small class=\"text-uppercase font-weight-bold\">Outline</small>\n        </div>\n        <button class=\"btn btn-1 btn-outline-primary\" type=\"button\">Outline-primary</button>\n        <button class=\"btn btn-1 btn-outline-info\" type=\"button\">Outline-info</button>\n        <button class=\"btn btn-1 btn-outline-success\" type=\"button\">Outline-success</button>\n        <button class=\"btn btn-1 btn-outline-warning\" type=\"button\">Outline-warning</button>\n        <button class=\"btn btn-1 btn-outline-danger\" type=\"button\">Outline-danger</button>\n        <!-- Button links -->\n        <div class=\"mb-3 mt-5\">\n          <small class=\"text-uppercase font-weight-bold\">Links</small>\n        </div>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-default\">Default</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-primary\">Primary</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-info\">Info</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-success\">Success</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-warning\">Warning</a>\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-danger\">Danger</a>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/sections/buttons-section/buttons-section.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: ButtonsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsSectionComponent", function() { return ButtonsSectionComponent; });
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

var ButtonsSectionComponent = /** @class */ (function () {
    function ButtonsSectionComponent() {
    }
    ButtonsSectionComponent.prototype.ngOnInit = function () {
    };
    ButtonsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons-section',
            template: __webpack_require__(/*! ./buttons-section.component.html */ "./src/app/sections/buttons-section/buttons-section.component.html"),
            styles: [__webpack_require__(/*! ./buttons-section.component.css */ "./src/app/sections/buttons-section/buttons-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsSectionComponent);
    return ButtonsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/crs-section/crs-section.component.css":
/*!****************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2Nycy1zZWN0aW9uL2Nycy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/crs-section/crs-section.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n  <div class=\"container\">\n    <!-- Custom controls -->\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6\">\n        <!-- Checkboxes -->\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Checkboxes</small>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck1\" type=\"checkbox\">\n          <label class=\"custom-control-label\" for=\"customCheck1\">\n            <span>Unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck2\" type=\"checkbox\" checked>\n          <label class=\"custom-control-label\" for=\"customCheck2\">\n            <span>Checked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck3\" type=\"checkbox\" disabled>\n          <label class=\"custom-control-label\" for=\"customCheck3\">\n            <span>Disabled Unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-checkbox mb-3\">\n          <input class=\"custom-control-input\" id=\"customCheck4\" type=\"checkbox\" checked disabled>\n          <label class=\"custom-control-label\" for=\"customCheck4\">\n            <span>Disabled Checked</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\n        <!-- Radio buttons -->\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Radios</small>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio1\">\n            <span>Unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio2\" checked type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio2\">\n            <span>Checked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio3\" disabled type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio3\">\n            <span>Disabled unchecked</span>\n          </label>\n        </div>\n        <div class=\"custom-control custom-radio mb-3\">\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio4\" checked disabled type=\"radio\">\n          <label class=\"custom-control-label\" for=\"customRadio4\">\n            <span>Disabled checkbox</span>\n          </label>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\n        <!-- Toggle buttons -->\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Toggle buttons</small>\n        </div>\n        <label class=\"custom-toggle\">\n          <input type=\"checkbox\">\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\n        </label>\n        <span class=\"clearfix\"></span>\n        <label class=\"custom-toggle\">\n          <input type=\"checkbox\" checked>\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\n        </label>\n      </div>\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\n        <div class=\"mb-3\">\n          <small class=\"text-uppercase font-weight-bold\">Sliders</small>\n        </div>\n        <!-- Simple slider -->\n        <div class=\"input-slider-container\">\n          <div id=\"input-slider\" class=\"input-slider\" ></div>\n        </div>\n        <!-- Range slider -->\n        <div class=\"mt-5\">\n          <!-- Range slider container -->\n          <div id=\"input-slider-range\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row justify-content-center mt-md\">\n      <div class=\"col-lg-12\">\n        <!-- Menu -->\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Menu</h3>\n        <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">With text</small>\n            </div>\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary rounded\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-primary\">\n                  <div class=\"navbar-collapse-header\">\n                    <div class=\"row\">\n                      <div class=\"col-6 collapse-brand\">\n                        <a href=\"javascript:void(0)\">\n                          <img src=\"./assets/img/brand/blue.png\">\n                        </a>\n                      </div>\n                      <div class=\"col-6 collapse-close\">\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                          <span></span>\n                          <span></span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <ul class=\"navbar-nav ml-lg-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\n                        <span class=\"sr-only\">(current)</span>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n                      <a class=\"nav-link no-caret\" ngbDropdownToggle id=\"dropdown1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Settings</a>\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"dropdown1\" ngbDropdownMenu>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n          <div class=\"col-lg-6 mt-4 mt-lg-0\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">With icons</small>\n            </div>\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-success rounded\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-success\">\n                  <div class=\"navbar-collapse-header\">\n                    <div class=\"row\">\n                      <div class=\"col-6 collapse-brand\">\n                        <a href=\"javascript:void(0)\">\n                          <img src=\"./assets/img/brand/blue.png\">\n                        </a>\n                      </div>\n                      <div class=\"col-6 collapse-close\">\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                          <span></span>\n                          <span></span>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                  <ul class=\"navbar-nav ml-lg-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n                        <i class=\"ni ni-favourite-28\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n                        <i class=\"ni ni-notification-70\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n                      <a class=\"nav-link nav-link-icon no-caret\" ngbDropdownToggle id=\"nav-inner-success_dropdown_1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"ni ni-settings-gear-65\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\n                      </a>\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"nav-inner-success_dropdown_1\" ngbDropdownMenu>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/sections/crs-section/crs-section.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.ts ***!
  \***************************************************************/
/*! exports provided: CrsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrsSectionComponent", function() { return CrsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CrsSectionComponent = /** @class */ (function () {
    function CrsSectionComponent() {
    }
    CrsSectionComponent.prototype.ngOnInit = function () {
    };
    CrsSectionComponent.prototype.ngAfterViewInit = function () {
        var slider = document.getElementById("input-slider");
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider, {
            start: 40,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("input-slider-range");
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    CrsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crs-section',
            template: __webpack_require__(/*! ./crs-section.component.html */ "./src/app/sections/crs-section/crs-section.component.html"),
            styles: [__webpack_require__(/*! ./crs-section.component.css */ "./src/app/sections/crs-section/crs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CrsSectionComponent);
    return CrsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/inputs-section/inputs-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2lucHV0cy1zZWN0aW9uL2lucHV0cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/inputs-section/inputs-section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section pb-0 section-components\">\n\n  <div class=\"py-5 bg-secondary\">\n    <div class=\"container align-items-center align-text-center justify-content-center\">\n      <!-- Inputs (alternative) -->\n      <div class=\"mb-3\">\n        <h3 class=\"display-3\">Залишіть email для тустування додатку чи застосунку</h3>\n      </div>\n      <div class=\"row\">\n\n        <div class=\"col-lg-8 col-sm-8\">\n          <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"e-mail\" class=\"form-control form-control-alternative\" />\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/sections/inputs-section/inputs-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: InputsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsSectionComponent", function() { return InputsSectionComponent; });
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

var InputsSectionComponent = /** @class */ (function () {
    function InputsSectionComponent() {
    }
    InputsSectionComponent.prototype.ngOnInit = function () {
    };
    InputsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inputs-section',
            template: __webpack_require__(/*! ./inputs-section.component.html */ "./src/app/sections/inputs-section/inputs-section.component.html"),
            styles: [__webpack_require__(/*! ./inputs-section.component.css */ "./src/app/sections/inputs-section/inputs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputsSectionComponent);
    return InputsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/modal/modal.component.html":
/*!*****************************************************!*\
  !*** ./src/app/sections/modal/modal.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n"

/***/ }),

/***/ "./src/app/sections/modal/modal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sections/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/sections/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/sections/navigation-section/navigation-section.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL25hdmlnYXRpb24tc2VjdGlvbi9uYXZpZ2F0aW9uLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/navigation-section/navigation-section.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\">\n  <div class=\"container\">\n    <!-- Navigation -->\n    <h2 class=\"mb-5\">\n      <span>Navbars</span>\n    </h2>\n  </div>\n  <!-- Navbar default -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-default\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Default Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-default\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-favourite-28\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-notification-70\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\n            </a>\n          </li>\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-default_dropdown_1\" ngbDropdownToggle>\n              <i class=\"ni ni-settings-gear-65\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\n            </a>\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-default_dropdown_1\" ngbDropdownMenu>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar primary -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Primary Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\n          </li>\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n            <a class=\"nav-link no-caret\" id=\"navbar-primary_dropdown_1\" ngbDropdownToggle>Settings</a>\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-primary_dropdown_1\" ngbDropdownMenu>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar success -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-success mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Success Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-favourite-28\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Favorites</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"ni ni-planet\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Another action</span>\n            </a>\n          </li>\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-success_dropdown_1\" ngbDropdownToggle>\n              <i class=\"ni ni-settings-gear-65\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\n            </a>\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-success_dropdown_1\" ngbDropdownMenu>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar danger -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Danger Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-facebook-square\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-twitter\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-google-plus\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Google +</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-instagram\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar warning -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-warning mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Warning Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-facebook-square\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Share</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-twitter\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Tweet</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-pinterest\"></i>\n              <span class=\"nav-link-inner--text d-lg-none\">Pin</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- Navbar info -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-info mt-4\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Info Color</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n        <div class=\"navbar-collapse-header\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"./assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-facebook-square\"></i>\n              <span class=\"nav-link-inner--text\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-twitter\"></i>\n              <span class=\"nav-link-inner--text\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\n              <i class=\"fa fa-instagram\"></i>\n              <span class=\"nav-link-inner--text\">Instagram</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</section>\n"

/***/ }),

/***/ "./src/app/sections/navigation-section/navigation-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavigationSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSectionComponent", function() { return NavigationSectionComponent; });
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

var NavigationSectionComponent = /** @class */ (function () {
    function NavigationSectionComponent() {
    }
    NavigationSectionComponent.prototype.ngOnInit = function () {
    };
    NavigationSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-section',
            template: __webpack_require__(/*! ./navigation-section.component.html */ "./src/app/sections/navigation-section/navigation-section.component.html"),
            styles: [__webpack_require__(/*! ./navigation-section.component.css */ "./src/app/sections/navigation-section/navigation-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationSectionComponent);
    return NavigationSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/nucleo-section/nucleo-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL251Y2xlby1zZWN0aW9uL251Y2xlby1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/nucleo-section/nucleo-section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-lg section-nucleo-icons pb-250\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 text-center\">\n        <h2 class=\"display-3\">Nucleo Icons</h2>\n        <p class=\"lead\">\n          The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check all of them and use those that you like the most.\n        </p>\n        <div class=\"btn-wrapper\">\n          <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\" class=\"btn btn-primary\">View demo icons</a>\n          <a href=\"https://nucleoapp.com/?ref=1712\" target=\"_blank\" class=\"btn btn-default mt-3 mt-md-0\">View all icons</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"blur--hover\">\n      <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/icons?ref=adsa-nucleo-section\">\n        <div class=\"icons-container blur-item mt-5\" data-toggle=\"on-screen\">\n          <!-- Center -->\n          <i class=\"icon ni ni-diamond\"></i>\n          <!-- Right 1 -->\n          <i class=\"icon icon-sm ni ni-album-2\"></i>\n          <i class=\"icon icon-sm ni ni-app\"></i>\n          <i class=\"icon icon-sm ni ni-atom\"></i>\n          <!-- Right 2 -->\n          <i class=\"icon ni ni-bag-17\"></i>\n          <i class=\"icon ni ni-bell-55\"></i>\n          <i class=\"icon ni ni-credit-card\"></i>\n          <!-- Left 1 -->\n          <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\n          <i class=\"icon icon-sm ni ni-building\"></i>\n          <i class=\"icon icon-sm ni ni-button-play\"></i>\n          <!-- Left 2 -->\n          <i class=\"icon ni ni-calendar-grid-58\"></i>\n          <i class=\"icon ni ni-camera-compact\"></i>\n          <i class=\"icon ni ni-chart-bar-32\"></i>\n        </div>\n        <span class=\"blur-hidden h5 text-success\">Eplore all the 21.000+ Nucleo Icons</span>\n      </a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/sections/nucleo-section/nucleo-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: NucleoSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoSectionComponent", function() { return NucleoSectionComponent; });
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

var NucleoSectionComponent = /** @class */ (function () {
    function NucleoSectionComponent() {
    }
    NucleoSectionComponent.prototype.ngOnInit = function () {
        var nucleoView = document.getElementsByClassName('icons-container')[0];
        window.addEventListener('scroll', function (event) {
            if (this.isInViewport(nucleoView)) {
                nucleoView.classList.add('on-screen');
            }
            else {
                nucleoView.classList.remove('on-screen');
            }
        }.bind(this), false);
    };
    NucleoSectionComponent.prototype.isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    ;
    NucleoSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleo-section',
            template: __webpack_require__(/*! ./nucleo-section.component.html */ "./src/app/sections/nucleo-section/nucleo-section.component.html"),
            styles: [__webpack_require__(/*! ./nucleo-section.component.css */ "./src/app/sections/nucleo-section/nucleo-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NucleoSectionComponent);
    return NucleoSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.component.css":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/sections.component.html":
/*!**************************************************!*\
  !*** ./src/app/sections/sections.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-shaped\">\n  <div class=\"shape shape-style-1 shape-default\">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n  </div>\n  <div class=\"container py-md\">\n    <div class=\"row justify-content-between align-items-center\">\n      <div class=\"col-lg-5 mb-5 mb-lg-0\">\n        <h1 class=\"text-white font-weight-light\">Скріншоти</h1>\n      </div>\n      <div class=\"col-lg-6 mb-lg-auto\">\n        <div class=\"rounded shadow-lg overflow-hidden transform-perspective-right\">\n          <ngb-carousel>\n              <ng-template ngbSlide>\n                <img class=\"img-fluid\" src=\"assets/img/scr/pair_1.png\" alt=\"First slide\">\n              </ng-template>\n              <ng-template ngbSlide>\n                <img class=\"img-fluid\" src=\"assets/img/scr/pair_2.png\" alt=\"Second slide\">\n              </ng-template>\n              <ng-template ngbSlide>\n                <img class=\"img-fluid\" src=\"assets/img/scr/pair_3.png\" alt=\"Second slide\">\n              </ng-template>\n          </ngb-carousel>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- SVG separator -->\n  <div class=\"separator separator-bottom separator-skew\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</section>\n<app-inputs-section></app-inputs-section>\n\n"

/***/ }),

/***/ "./src/app/sections/sections.component.ts":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
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

var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.css */ "./src/app/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons-section/buttons-section.component */ "./src/app/sections/buttons-section/buttons-section.component.ts");
/* harmony import */ var _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inputs-section/inputs-section.component */ "./src/app/sections/inputs-section/inputs-section.component.ts");
/* harmony import */ var _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crs-section/crs-section.component */ "./src/app/sections/crs-section/crs-section.component.ts");
/* harmony import */ var _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-section/navigation-section.component */ "./src/app/sections/navigation-section/navigation-section.component.ts");
/* harmony import */ var _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs-section/tabs-section.component */ "./src/app/sections/tabs-section/tabs-section.component.ts");
/* harmony import */ var _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alerts-section/alerts-section.component */ "./src/app/sections/alerts-section/alerts-section.component.ts");
/* harmony import */ var _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./typography-section/typography-section.component */ "./src/app/sections/typography-section/typography-section.component.ts");
/* harmony import */ var _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./angular-section/angular-section.component */ "./src/app/sections/angular-section/angular-section.component.ts");
/* harmony import */ var _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nucleo-section/nucleo-section.component */ "./src/app/sections/nucleo-section/nucleo-section.component.ts");
/* harmony import */ var _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./versions-section/versions-section.component */ "./src/app/sections/versions-section/versions-section.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/sections/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"],
                _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsSectionComponent"],
                _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__["InputsSectionComponent"],
                _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__["CrsSectionComponent"],
                _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__["NavigationSectionComponent"],
                _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__["TabsSectionComponent"],
                _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__["AlertsSectionComponent"],
                _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__["TypographySectionComponent"],
                _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__["AngularSectionComponent"],
                _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__["NucleoSectionComponent"],
                _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__["VersionsSectionComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            exports: [_sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"]]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "./src/app/sections/tabs-section/tabs-section.component.css":
/*!******************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3RhYnMtc2VjdGlvbi90YWJzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/tabs-section/tabs-section.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Tabs</h3>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6\">\n      <!-- Tabs with icons -->\n      <div class=\"mb-3\">\n        <small class=\"text-uppercase font-weight-bold\">With icons</small>\n      </div>\n        <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\n            <ngb-tab>\n              <ng-template ngbTabTitle>\n                <i class=\"ni ni-cloud-upload-96 mr-2\"></i> Home\n              </ng-template>\n                <ng-template ngbTabContent>\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>\n                <i class=\"ni ni-bell-55 mr-2\"></i> Profile\n              </ng-template>\n                <ng-template ngbTabContent>\n                    <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n              <ng-template ngbTabTitle>\n                  <i class=\"ni ni-calendar-grid-58 mr-2\"></i> Messages\n              </ng-template>\n                <ng-template ngbTabContent>\n                    <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n                </ng-template>\n            </ngb-tab>\n        </ngb-tabset>\n    </div>\n    <div class=\"col-lg-6 mt-5 mt-lg-0\">\n      <!-- Menu -->\n      <div class=\"mb-3\">\n        <small class=\"text-uppercase font-weight-bold\">With text</small>\n      </div>\n      <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\n          <ngb-tab title=\"Home\">\n            <ng-template ngbTabContent>\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Profile\">\n            <ng-template ngbTabContent>\n                <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Messages\">\n            <ng-template ngbTabContent>\n                <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\n            </ng-template>\n          </ngb-tab>\n      </ngb-tabset>\n    </div>\n  </div>\n\n  <div class=\"row row-grid justify-content-between align-items-center mt-lg\">\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-4\">Progress bars</h3>\n      <div class=\"progress-wrapper\">\n        <div class=\"progress-info\">\n          <div class=\"progress-label\">\n            <span>Task completed</span>\n          </div>\n          <div class=\"progress-percentage\">\n            <span>40%</span>\n          </div>\n        </div>\n        <ngb-progressbar type=\"default\" [value]=\"25\"></ngb-progressbar>\n      </div>\n      <div class=\"progress-wrapper\">\n        <div class=\"progress-info\">\n          <div class=\"progress-label\">\n            <span>Task completed</span>\n          </div>\n          <div class=\"progress-percentage\">\n            <span>60%</span>\n          </div>\n        </div>\n        <ngb-progressbar type=\"primary\" [value]=\"60\"></ngb-progressbar>\n      </div>\n    </div>\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Pagination</h3>\n      <nav aria-label=\"Page navigation example\" class=\"mb-4\">\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\n      </nav>\n      <nav aria-label=\"Page navigation example\">\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page1\" aria-label=\"Default pagination\">\n          <ng-template ngbPaginationPrevious><i _ngcontent-c9=\"\" class=\"fa fa-angle-left\"></i></ng-template>\n          <ng-template ngbPaginationNext><i _ngcontent-c9=\"\" class=\"fa fa-angle-right\"></i></ng-template>\n        </ngb-pagination>\n      </nav>\n    </div>\n  </div>\n  <div class=\"row row-grid justify-content-between\">\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Navigation Pills</h3>\n      <ngb-tabset type=\"pills\" class=\"nav-pills-circle\">\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-atom\"></i></span>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-chat-round\"></i></span>\n            </ng-template>\n          </ngb-tab>\n          <ngb-tab>\n            <ng-template ngbTabTitle>\n                <span class=\"nav-link-icon d-block\"><i class=\"ni ni-cloud-download-95\"></i></span>\n            </ng-template>\n          </ngb-tab>\n      </ngb-tabset>\n    </div>\n    <div class=\"col-lg-5\">\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Labels</h3>\n      <span class=\"badge badge-pill badge-primary text-uppercase\">Primary</span>\n      <span class=\"badge badge-pill badge-success text-uppercase\">Success</span>\n      <span class=\"badge badge-pill badge-danger text-uppercase\">Danger</span>\n      <span class=\"badge badge-pill badge-warning text-uppercase\">Warning</span>\n      <span class=\"badge badge-pill badge-info text-uppercase\">Info</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sections/tabs-section/tabs-section.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.ts ***!
  \*****************************************************************/
/*! exports provided: TabsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsSectionComponent", function() { return TabsSectionComponent; });
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

var TabsSectionComponent = /** @class */ (function () {
    function TabsSectionComponent() {
        this.page = 2;
        this.page1 = 3;
    }
    TabsSectionComponent.prototype.ngOnInit = function () {
    };
    TabsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs-section',
            template: __webpack_require__(/*! ./tabs-section.component.html */ "./src/app/sections/tabs-section/tabs-section.component.html"),
            styles: [__webpack_require__(/*! ./tabs-section.component.css */ "./src/app/sections/tabs-section/tabs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsSectionComponent);
    return TabsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/typography-section/typography-section.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3R5cG9ncmFwaHktc2VjdGlvbi90eXBvZ3JhcGh5LXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/typography-section/typography-section.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"mt-lg mb-5\">\n    <span>Typography</span>\n  </h2>\n  <h3 class=\"h4 text-success font-weight-bold\">Headings</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 1</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h1 class=\"mb-0\">Argon Design System</h1>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 2</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h2 class=\"mb-0\">Argon Design System</h2>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 3</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 4</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h4 class=\"mb-0\">Argon Design System</h4>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 5</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h5 class=\"mb-0\">Argon Design System </h5>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 6</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h6 class=\"mb-0\">Argon Design System </h6>\n    </div>\n  </div>\n  <!-- Display titles -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Display titles</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 1</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h1 class=\"display-1 mb-0\">Argon Design System</h1>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 2</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h2 class=\"display-2 mb-0\">Argon Design System</h2>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 3</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"display-3 mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 4</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h4 class=\"display-4 mb-0\">Argon Design System</h4>\n    </div>\n  </div>\n  <!-- Specialized titles -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Specialized titles</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"heading mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading title</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <h3 class=\"heading-title text-warning mb-0\">Argon Design System</h3>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading seaction</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <div>\n        <h2 class=\"display-3\">Header with small subtitle </h2>\n        <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\n      </div>\n    </div>\n  </div>\n  <!-- Paragraphs -->\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Paragraphs</h3>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Paragraph</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Lead text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"lead\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Quote</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <blockquote class=\"blockquote\">\n        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n        <footer class=\"blockquote-footer\">Someone famous in\n          <cite title=\"Source Title\">Source Title</cite>\n        </footer>\n      </blockquote>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Muted text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-muted mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Primary text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-primary\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Info text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-info mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Success text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-success mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Warning text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-warning mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <div class=\"row py-3 align-items-center\">\n    <div class=\"col-sm-3\">\n      <small class=\"text-uppercase text-muted font-weight-bold\">Danger text</small>\n    </div>\n    <div class=\"col-sm-9\">\n      <p class=\"text-danger mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n    </div>\n  </div>\n  <!-- Images -->\n  <h2 class=\"mt-lg mb-5\">\n    <span>Images</span>\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-6\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Image</small>\n      <img src=\"./assets/img/theme/team-1-800x800.jpg\" alt=\"Rounded image\" class=\"img-fluid rounded shadow\" style=\"width: 150px;\">\n    </div>\n    <div class=\"col-sm-3 col-6\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Image</small>\n      <img src=\"./assets/img/theme/team-2-800x800.jpg\" alt=\"Circle image\" class=\"img-fluid rounded-circle shadow\" style=\"width: 150px;\">\n    </div>\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Raised</small>\n      <img src=\"./assets/img/theme/team-3-800x800.jpg\" alt=\"Raised image\" class=\"img-fluid rounded shadow-lg\" style=\"width: 150px;\">\n    </div>\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Raised</small>\n      <img src=\"./assets/img/theme/team-4-800x800.jpg\" alt=\"Raised circle image\" class=\"img-fluid rounded-circle shadow-lg\" style=\"width: 150px;\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sections/typography-section/typography-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TypographySectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographySectionComponent", function() { return TypographySectionComponent; });
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

var TypographySectionComponent = /** @class */ (function () {
    function TypographySectionComponent() {
    }
    TypographySectionComponent.prototype.ngOnInit = function () {
    };
    TypographySectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography-section',
            template: __webpack_require__(/*! ./typography-section.component.html */ "./src/app/sections/typography-section/typography-section.component.html"),
            styles: [__webpack_require__(/*! ./typography-section.component.css */ "./src/app/sections/typography-section/typography-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographySectionComponent);
    return TypographySectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/versions-section/versions-section.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3ZlcnNpb25zLXNlY3Rpb24vdmVyc2lvbnMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sections/versions-section/versions-section.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-lg\">\n  <div class=\"container\">\n    <div class=\"row row-grid justify-content-center\">\n      <div class=\"col-lg-8 text-center\">\n        <h2 class=\"display-3\">Do you love this awesome\n          <span class=\"text-success\">Design System for Angular?</span>\n        </h2>\n        <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\n        <div class=\"btn-wrapper\">\n          <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\n        </div>\n        <div class=\"text-center\">\n          <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\n          <div class=\"row justify-content-center\">\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Sketch - Digital design toolkit\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Adobe Photoshop - Software for digital images manipulation\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid\">\n              </a>\n            </div>\n            <div class=\"col-lg-2 col-4\">\n              <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/sections/versions-section/versions-section.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: VersionsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionsSectionComponent", function() { return VersionsSectionComponent; });
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

var VersionsSectionComponent = /** @class */ (function () {
    function VersionsSectionComponent() {
    }
    VersionsSectionComponent.prototype.ngOnInit = function () {
    };
    VersionsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-versions-section',
            template: __webpack_require__(/*! ./versions-section.component.html */ "./src/app/sections/versions-section/versions-section.component.html"),
            styles: [__webpack_require__(/*! ./versions-section.component.css */ "./src/app/sections/versions-section/versions-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VersionsSectionComponent);
    return VersionsSectionComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row row-grid align-items-center\" [ngClass]=\"{'my-md': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login', 'mb-5':getPath()==='/user-profile' || getPath()==='/register' || getPath()==='/login'}\">\n      <div class=\"col-lg-6\">\n        <h3 class=\"text-primary font-weight-light mb-2\">Thank you for supporting us!</h3>\n        <h4 class=\"mb-0 font-weight-light\">Let's get in touch on any of these platforms.</h4>\n      </div>\n      <div class=\"col-lg-6 text-lg-center btn-wrapper\">\n        <a target=\"_blank\" href=\"https://twitter.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg\" ngbTooltip=\"Follow us\">\n          <i class=\"fa fa-twitter\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg\" ngbTooltip=\"Like us\">\n          <i class=\"fa fa-facebook-square\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://dribbble.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round\" ngbTooltip=\"Follow us\">\n          <i class=\"fa fa-dribbble\"></i>\n        </a>\n        <a target=\"_blank\" href=\"https://github.com/creativetimofficial\" class=\"btn btn-neutral btn-icon-only btn-github btn-round btn-lg\" ngbTooltip=\"Star on Github\">\n          <i class=\"fa fa-github\"></i>\n        </a>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row align-items-center justify-content-md-between\">\n      <div class=\"col-md-6\">\n        <div class=\"copyright\">\n          &copy; {{test | date: 'yyyy'}}\n          <a href=\"https://www.creative-tim.com?ref=adsa-footer\" target=\"_blank\">Creative Tim</a>.\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <ul class=\"nav nav-footer justify-content-end\">\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com/presentation?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">About Us</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"http://blog.creative-tim.com?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">Blog</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\n  <div class=\"container\">\n    <a class=\"navbar-brand mr-lg-5\" [routerLink]=\"['/home']\">\n      <img src=\"./assets/img/brand/qroqus-white.png\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/home']\">\n              <img src=\"./assets/img/brand/blue.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <a [routerLink]=\"['/home']\" class=\"btn btn-1 btn-outline-primary\">Головна</a>\n      <a [routerLink]=\"['/landing']\" class=\"btn btn-1 btn-outline-primary\">Сторінка</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router) {
        this.location = location;
        this.router = router;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location
            .prepareExternalUrl(this.location.path());
        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location
            .prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/*!

=========================================================
* Argon Design System Angular - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/khex/Code/argon/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map