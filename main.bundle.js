webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/cart/cart.module": [
		"./src/app/cart/cart.module.ts",
		"cart.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_widgets_not_found_not_found_component__ = __webpack_require__("./src/app/core/widgets/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'cart', loadChildren: 'app/cart/cart.module#CartModule' },
    { path: '', redirectTo: 'catalog/list', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__core_widgets_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>Bookstore</h1>\n</div>\n\n<app-menu></app-menu>\n<app-small-cart></app-small-cart>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_module__ = __webpack_require__("./src/app/catalog/catalog.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_services_module__ = __webpack_require__("./src/app/core/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_widgets_widgets_module__ = __webpack_require__("./src/app/core/widgets/widgets.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_widgets_widgets_module__["a" /* WidgetsModule */],
                __WEBPACK_IMPORTED_MODULE_3__catalog_catalog_module__["a" /* CatalogModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_services_services_module__["a" /* ServicesModule */],
                // Routing module à la fin :
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* LOCALE_ID */], useValue: 'fr-FR' },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/catalog/catalog-book/catalog-book.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/catalog/catalog-book/catalog-book.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"bookPosition$ |async as bookPos ; else loading\">\n  <app-book-navigator [position]=\"bookPos\"></app-book-navigator>\n  <table>\n    <tbody *ngIf=\"bookPos.book as book\">\n    <tr>\n      <th>Couverture</th>\n      <td>\n        <img [src]=\"book.image\">\n      </td>\n    </tr>\n    <tr>\n      <th>Titre</th>\n      <td>{{book.title |uppercase}}</td>\n    </tr>\n    <tr>\n      <th>Auteur</th>\n      <td>{{book.author}}</td>\n    </tr>\n    <tr>\n      <th>Prix</th>\n      <td>{{book.price |currency:'EUR'}}</td>\n    </tr>\n    <tr>\n      <th>Note</th>\n      <td>{{book.rating |textRating}}</td>\n    </tr>\n    <tr>\n      <th>Pages</th>\n      <td>{{book.pages}}</td>\n    </tr>\n    <tr>\n      <th>Description</th>\n      <td [innerHTML]=\"book.description\"></td>\n    </tr>\n    </tbody>\n  </table>\n  <p>\n    <app-buy-button [book]=\"bookPos.book\"></app-buy-button>\n  </p>\n  <app-book-navigator [position]=\"bookPos\"></app-book-navigator>\n</ng-container>\n\n<ng-template #loading>\n  <app-loading></app-loading>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/catalog/catalog-book/catalog-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_catalog_service__ = __webpack_require__("./src/app/core/services/catalog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatalogBookComponent = /** @class */ (function () {
    function CatalogBookComponent(route, catalog, title) {
        this.route = route;
        this.catalog = catalog;
        this.title = title;
    }
    CatalogBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookPosition$ = this.route.paramMap
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["g" /* switchMap */])(function (params) { return _this.catalog.getBook(params.get('id')); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["h" /* tap */])(function (bookPos) { return _this.title.setTitle('Livre: ' + bookPos.book.title); }));
    };
    CatalogBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-catalog-book',
            template: __webpack_require__("./src/app/catalog/catalog-book/catalog-book.component.html"),
            styles: [__webpack_require__("./src/app/catalog/catalog-book/catalog-book.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_catalog_service__["a" /* CatalogService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Title */]])
    ], CatalogBookComponent);
    return CatalogBookComponent;
}());



/***/ }),

/***/ "./src/app/catalog/catalog-list/catalog-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/catalog/catalog-list/catalog-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n  <tr>\n    <th></th>\n    <th>Titre</th>\n    <th>Auteur</th>\n    <th>Prix</th>\n    <th>Note</th>\n    <th></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let book of catalog$ |async\" class=\"catalog-row\">\n    <td class=\"catalog-image\">\n      <a [routerLink]=\"url.catalogBook(book)\">\n        <img [src]=\"book.image\">\n      </a>\n    </td>\n    <td class=\"catalog-title\">{{book.title}}</td>\n    <td class=\"catalog-author\">{{book.author}}</td>\n    <td class=\"catalog-price right\">{{book.price |currency:'EUR'}}</td>\n    <td class=\"catalog-rating\">\n      <app-rating [(value)]=\"book.rating\"></app-rating>\n    </td>\n    <td class=\"catalog-button\">\n      <app-buy-button [book]=\"book\"></app-buy-button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/catalog/catalog-list/catalog-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_catalog_service__ = __webpack_require__("./src/app/core/services/catalog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_url_service__ = __webpack_require__("./src/app/core/services/url.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatalogListComponent = /** @class */ (function () {
    function CatalogListComponent(catalog, title, url) {
        this.catalog = catalog;
        this.title = title;
        this.url = url;
    }
    CatalogListComponent.prototype.ngOnInit = function () {
        this.catalog$ = this.catalog.getList();
        this.title.setTitle('Catalogue des livres');
    };
    CatalogListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-catalog-list',
            template: __webpack_require__("./src/app/catalog/catalog-list/catalog-list.component.html"),
            styles: [__webpack_require__("./src/app/catalog/catalog-list/catalog-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_catalog_service__["a" /* CatalogService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_url_service__["a" /* UrlService */]])
    ], CatalogListComponent);
    return CatalogListComponent;
}());



/***/ }),

/***/ "./src/app/catalog/catalog-root/catalog-root.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/catalog/catalog-root/catalog-root.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/catalog/catalog-root/catalog-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatalogRootComponent = /** @class */ (function () {
    function CatalogRootComponent() {
    }
    CatalogRootComponent.prototype.ngOnInit = function () {
    };
    CatalogRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-catalog-root',
            template: __webpack_require__("./src/app/catalog/catalog-root/catalog-root.component.html"),
            styles: [__webpack_require__("./src/app/catalog/catalog-root/catalog-root.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CatalogRootComponent);
    return CatalogRootComponent;
}());



/***/ }),

/***/ "./src/app/catalog/catalog-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalog_root_catalog_root_component__ = __webpack_require__("./src/app/catalog/catalog-root/catalog-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalog_list_catalog_list_component__ = __webpack_require__("./src/app/catalog/catalog-list/catalog-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__catalog_book_catalog_book_component__ = __webpack_require__("./src/app/catalog/catalog-book/catalog-book.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'catalog',
        component: __WEBPACK_IMPORTED_MODULE_2__catalog_root_catalog_root_component__["a" /* CatalogRootComponent */],
        children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__catalog_list_catalog_list_component__["a" /* CatalogListComponent */] },
            { path: 'book/:id', component: __WEBPACK_IMPORTED_MODULE_4__catalog_book_catalog_book_component__["a" /* CatalogBookComponent */] },
        ]
    }
];
var CatalogRoutingModule = /** @class */ (function () {
    function CatalogRoutingModule() {
    }
    CatalogRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CatalogRoutingModule);
    return CatalogRoutingModule;
}());



/***/ }),

/***/ "./src/app/catalog/catalog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalog_root_catalog_root_component__ = __webpack_require__("./src/app/catalog/catalog-root/catalog-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalog_list_catalog_list_component__ = __webpack_require__("./src/app/catalog/catalog-list/catalog-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__catalog_book_catalog_book_component__ = __webpack_require__("./src/app/catalog/catalog-book/catalog-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__catalog_routing_module__ = __webpack_require__("./src/app/catalog/catalog-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_widgets_widgets_module__ = __webpack_require__("./src/app/core/widgets/widgets.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CatalogModule = /** @class */ (function () {
    function CatalogModule() {
    }
    CatalogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__core_widgets_widgets_module__["a" /* WidgetsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                // Routing module à la fin :
                __WEBPACK_IMPORTED_MODULE_5__catalog_routing_module__["a" /* CatalogRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__catalog_root_catalog_root_component__["a" /* CatalogRootComponent */],
                __WEBPACK_IMPORTED_MODULE_3__catalog_list_catalog_list_component__["a" /* CatalogListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__catalog_book_catalog_book_component__["a" /* CatalogBookComponent */]
            ],
            exports: []
        })
    ], CatalogModule);
    return CatalogModule;
}());



/***/ }),

/***/ "./src/app/core/model/cart-row.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartRow; });
var CartRow = /** @class */ (function () {
    function CartRow(_book, _quantity) {
        var _this = this;
        this._book = _book;
        this._quantity = _quantity;
        this.deleted = false;
        this.added = true;
        setTimeout(function () {
            _this.added = false;
        }, 500);
    }
    Object.defineProperty(CartRow.prototype, "book", {
        get: function () {
            return this._book;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartRow.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        enumerable: true,
        configurable: true
    });
    CartRow.load = function (json) {
        return new CartRow(json._book, json._quantity);
    };
    CartRow.prototype.amount = function () {
        return this._book.price * this._quantity;
    };
    return CartRow;
}());



/***/ }),

/***/ "./src/app/core/services/action.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("./src/app/core/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__url_service__ = __webpack_require__("./src/app/core/services/url.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActionService = /** @class */ (function () {
    function ActionService(cart, router, url) {
        this.cart = cart;
        this.router = router;
        this.url = url;
    }
    ActionService.prototype.buyBook = function (book) {
        this.cart.add(book);
        this.router.navigate(this.url.cartContent());
    };
    ActionService.prototype.orderCart = function () {
        this.router.navigate(this.url.cartOrder());
    };
    ActionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__url_service__["a" /* UrlService */]])
    ], ActionService);
    return ActionService;
}());



/***/ }),

/***/ "./src/app/core/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_cart_row__ = __webpack_require__("./src/app/core/model/cart-row.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_reduce_util__ = __webpack_require__("./src/app/core/util/reduce-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var storageKey = 'cart-rows';
var CartService = /** @class */ (function () {
    function CartService() {
        this._rows = [];
        this.load();
    }
    Object.defineProperty(CartService.prototype, "rows", {
        get: function () {
            return this._rows.slice();
        },
        enumerable: true,
        configurable: true
    });
    CartService.prototype.save = function () {
        localStorage.setItem(storageKey, JSON.stringify(this._rows));
    };
    CartService.prototype.load = function () {
        var json = localStorage.getItem(storageKey);
        if (json) {
            this._rows = JSON.parse(json)
                .map(function (jsonRow) { return __WEBPACK_IMPORTED_MODULE_1__model_cart_row__["a" /* CartRow */].load(jsonRow); });
        }
    };
    CartService.prototype.findRow = function (rowOrBook) {
        var book = rowOrBook instanceof __WEBPACK_IMPORTED_MODULE_1__model_cart_row__["a" /* CartRow */] ? rowOrBook.book : rowOrBook;
        var id = book._id.$oid;
        var row, index;
        this._rows.forEach(function (r, i) {
            if (r.book._id.$oid === id) {
                row = r;
                index = i;
            }
        });
        return { row: row, index: index };
    };
    CartService.prototype.add = function (book) {
        var found = this.findRow(book).row;
        if (found) {
            this.updateQuantity(found, found.quantity + 1);
        }
        else {
            this._rows = this._rows.concat([new __WEBPACK_IMPORTED_MODULE_1__model_cart_row__["a" /* CartRow */](book, 1)]);
            this.save();
        }
    };
    CartService.prototype.remove = function (row) {
        var _this = this;
        var found = this.findRow(row).row;
        row.deleted = true;
        setTimeout(function () {
            _this._rows = _this._rows.filter(function (r) { return r !== found; });
            _this.save();
        }, 450);
    };
    CartService.prototype.updateQuantity = function (row, newQantity) {
        var _a = this.findRow(row), found = _a.row, index = _a.index;
        if (found) {
            this._rows[index] = new __WEBPACK_IMPORTED_MODULE_1__model_cart_row__["a" /* CartRow */](found.book, newQantity);
            this.save();
        }
    };
    CartService.prototype.isEmpty = function () {
        return this._rows.length === 0;
    };
    CartService.prototype.count = function () {
        return this._rows
            .map(function (row) { return row.quantity; })
            .reduce(__WEBPACK_IMPORTED_MODULE_2__util_reduce_util__["a" /* ReduceUtil */].total, 0);
    };
    CartService.prototype.total = function () {
        return this._rows
            .map(function (row) { return row.amount(); })
            .reduce(__WEBPACK_IMPORTED_MODULE_2__util_reduce_util__["a" /* ReduceUtil */].total, 0);
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/core/services/catalog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export url */
/* unused harmony export apiKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
var apiKey = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
var CatalogService = /** @class */ (function () {
    function CatalogService(http, ngZone) {
        var _this = this;
        this.http = http;
        this.load();
        ngZone.runOutsideAngular(function () {
            setInterval(function () {
                ngZone.run(function () {
                    _this.load();
                });
            }, 10 * 1000);
        });
    }
    CatalogService.prototype.load = function () {
        this.list$ = this.http.get(url + apiKey)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["f" /* shareReplay */])(1));
    };
    CatalogService.prototype.getList = function () {
        return this.list$;
    };
    CatalogService.prototype.getBook = function (id) {
        return this.list$
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["e" /* map */])(function (books) {
            var book = books.filter(function (b) { return b._id.$oid === id; })[0];
            var index = books.indexOf(book);
            var count = books.length;
            var previous = books[index - 1];
            var next = books[index + 1];
            return { book: book, previous: previous, next: next, index: index, count: count };
        }));
    };
    CatalogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], CatalogService);
    return CatalogService;
}());



/***/ }),

/***/ "./src/app/core/services/country.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var url = 'https://restcountries.eu/rest/v2/name/';
var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.search = function (name) {
        name = name && name.trim();
        if (name) {
            return this.http.get(url + name)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["e" /* map */])(function (countries) {
                return countries.map(function (country) { return country.translations.fr; });
            }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])([]); }));
        }
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])([]);
    };
    CountryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/core/services/non-empty-cart.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonEmptyCartGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("./src/app/core/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NonEmptyCartGuard = /** @class */ (function () {
    function NonEmptyCartGuard(cart) {
        this.cart = cart;
    }
    NonEmptyCartGuard.prototype.canActivate = function () {
        return !this.cart.isEmpty();
    };
    NonEmptyCartGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]])
    ], NonEmptyCartGuard);
    return NonEmptyCartGuard;
}());



/***/ }),

/***/ "./src/app/core/services/services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalog_service__ = __webpack_require__("./src/app/core/services/catalog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__url_service__ = __webpack_require__("./src/app/core/services/url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_service__ = __webpack_require__("./src/app/core/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__action_service__ = __webpack_require__("./src/app/core/services/action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__country_service__ = __webpack_require__("./src/app/core/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__non_empty_cart_guard__ = __webpack_require__("./src/app/core/services/non-empty-cart.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__catalog_service__["a" /* CatalogService */],
                __WEBPACK_IMPORTED_MODULE_3__url_service__["a" /* UrlService */],
                __WEBPACK_IMPORTED_MODULE_4__cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_5__action_service__["a" /* ActionService */],
                __WEBPACK_IMPORTED_MODULE_6__country_service__["a" /* CountryService */],
                __WEBPACK_IMPORTED_MODULE_7__non_empty_cart_guard__["a" /* NonEmptyCartGuard */],
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/core/services/url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UrlService = /** @class */ (function () {
    function UrlService() {
    }
    UrlService.prototype.catalogList = function () {
        return ['/catalog/list'];
    };
    UrlService.prototype.catalogBook = function (book) {
        return ['/catalog/book', book._id.$oid];
    };
    UrlService.prototype.cartContent = function () {
        return ['/cart/content'];
    };
    UrlService.prototype.cartOrder = function () {
        return ['/cart/order'];
    };
    UrlService.prototype.cartReactive = function () {
        return ['/cart/reactive'];
    };
    UrlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], UrlService);
    return UrlService;
}());



/***/ }),

/***/ "./src/app/core/util/app-validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppValidators; });
var AppValidators = /** @class */ (function () {
    function AppValidators() {
    }
    AppValidators.zipcode = function (control) {
        var pattern = /^[0-9]{4,5}$/;
        if (control.value && !pattern.test(control.value)) {
            return { zipcode: true };
        }
        return null;
    };
    // noinspection TsLint
    AppValidators.email = function (requiredDomain) {
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return function (control) {
            if (control.value) {
                if (!pattern.test(control.value)) {
                    return { email: true };
                }
                else if (requiredDomain) {
                    var _a = control.value.split('@'), actualDomain = _a[1];
                    if (actualDomain !== requiredDomain) {
                        return {
                            domain: { requiredDomain: requiredDomain, actualDomain: actualDomain }
                        };
                    }
                }
            }
            return null;
        };
    };
    return AppValidators;
}());



/***/ }),

/***/ "./src/app/core/util/reduce-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduceUtil; });
var ReduceUtil = /** @class */ (function () {
    function ReduceUtil() {
    }
    ReduceUtil.total = function (result, value) {
        return result + value;
    };
    return ReduceUtil;
}());



/***/ }),

/***/ "./src/app/core/widgets/book-navigator/book-navigator.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/core/widgets/book-navigator/book-navigator.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p>\n  <a *ngIf=\"position.previous\"\n     [routerLink]=\"url.catalogBook(position.previous)\">◀</a>\n  {{position.index + 1}} / {{position.count}}\n  <a *ngIf=\"position.next\"\n     [routerLink]=\"url.catalogBook(position.next)\">▶</a>\n</p>\n\n\n"

/***/ }),

/***/ "./src/app/core/widgets/book-navigator/book-navigator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookNavigatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_url_service__ = __webpack_require__("./src/app/core/services/url.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookNavigatorComponent = /** @class */ (function () {
    function BookNavigatorComponent(url) {
        this.url = url;
    }
    BookNavigatorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BookNavigatorComponent.prototype, "position", void 0);
    BookNavigatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-navigator',
            template: __webpack_require__("./src/app/core/widgets/book-navigator/book-navigator.component.html"),
            styles: [__webpack_require__("./src/app/core/widgets/book-navigator/book-navigator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_url_service__["a" /* UrlService */]])
    ], BookNavigatorComponent);
    return BookNavigatorComponent;
}());



/***/ }),

/***/ "./src/app/core/widgets/buy-button/buy-button.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/widgets/buy-button/buy-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"action.buyBook(book)\">\n  <img src=\"assets/img/cart-add.png\">\n</button>\n"

/***/ }),

/***/ "./src/app/core/widgets/buy-button/buy-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_action_service__ = __webpack_require__("./src/app/core/services/action.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuyButtonComponent = /** @class */ (function () {
    function BuyButtonComponent(action) {
        this.action = action;
    }
    BuyButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BuyButtonComponent.prototype, "book", void 0);
    BuyButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buy-button',
            template: __webpack_require__("./src/app/core/widgets/buy-button/buy-button.component.html"),
            styles: [__webpack_require__("./src/app/core/widgets/buy-button/buy-button.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_action_service__["a" /* ActionService */]])
    ], BuyButtonComponent);
    return BuyButtonComponent;
}());



/***/ }),

/***/ "./src/app/core/widgets/email-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_app_validators__ = __webpack_require__("./src/app/core/util/app-validators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailValidatorDirective = /** @class */ (function () {
    function EmailValidatorDirective() {
    }
    EmailValidatorDirective_1 = EmailValidatorDirective;
    EmailValidatorDirective.prototype.validate = function (control) {
        return __WEBPACK_IMPORTED_MODULE_2__util_app_validators__["a" /* AppValidators */].email(this.domain)(control);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], EmailValidatorDirective.prototype, "domain", void 0);
    EmailValidatorDirective = EmailValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appEmail],input[type=email][ngModel]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return EmailValidatorDirective_1; }),
                    multi: true
                }
            ]
        })
    ], EmailValidatorDirective);
    return EmailValidatorDirective;
    var EmailValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/core/widgets/error/error.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/widgets/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"error\" *ngIf=\"control.invalid\n        && (control.touched || form?.submitted)\">Erreur :\n  <span *ngIf=\"control.hasError('required')\">\n    ce champ est obligatoire.</span>\n  <span *ngIf=\"control.hasError('minlength')\">\n    il faut au moins\n    {{control.errors['minlength'].requiredLength}}\n    caractères.</span>\n  <span *ngIf=\"control.hasError('pattern')\">\n    le format est incorrect.</span>\n  <span *ngIf=\"control.hasError('zipcode')\">\n    le code postal doit avoir 4 ou 5 chiffres\n    selon le pays.</span>\n  <span *ngIf=\"control.hasError('email')\">\n    le format de l'adresse email est incorrect.</span>\n  <span *ngIf=\"control.hasError('domain')\">\n    vous devez utiliser une adresse en\n    @{{control.errors['domain'].requiredDomain}}.</span>\n</span>\n"

/***/ }),

/***/ "./src/app/core/widgets/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgControl */])
    ], ErrorComponent.prototype, "control", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ErrorComponent.prototype, "form", void 0);
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("./src/app/core/widgets/error/error.component.html"),
            styles: [__webpack_require__("./src/app/core/widgets/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/core/widgets/field/field.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/widgets/field/field.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <label>{{label}}\n    <ng-content></ng-content>\n  </label>\n  <app-error [control]=\"control\"\n             [form]=\"form\"></app-error>\n</p>\n"

/***/ }),

/***/ "./src/app/core/widgets/field/field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FieldComponent = /** @class */ (function () {
    function FieldComponent(ngForm, formGroupDir) {
        this.ngForm = ngForm;
        this.formGroupDir = formGroupDir;
    }
    Object.defineProperty(FieldComponent.prototype, "form", {
        get: function () {
            return this.ngForm || this.formGroupDir;
        },
        enumerable: true,
        configurable: true
    });
    FieldComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], FieldComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgControl */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgControl */])
    ], FieldComponent.prototype, "control", void 0);
    FieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-field',
            template: __webpack_require__("./src/app/core/widgets/field/field.component.html"),
            styles: [__webpack_require__("./src/app/core/widgets/field/field.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NgForm */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroupDirective */]])
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/core/widgets/loading/loading.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/widgets/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <img src=\"assets/img/ajax-loader.gif\">\n  chargement en cours...\n</p>\n"

/***/ }),

/***/ "./src/app/core/widgets/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: __webpack_require__("./src/app/core/widgets/loading/loading.component.html"),
            styles: [__webpack_require__("./src/app/core/widgets/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/core/widgets/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: grey;\n  border-bottom: 1px solid grey;\n  margin: 5px;\n  padding: 5px;\n}\na.active-link {\n  color: darkred;\n  border-bottom: 2px solid darkred;\n}\nnav {\n  display: inline-block;\n}\n"

/***/ }),

/***/ "./src/app/core/widgets/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <a [routerLink]=\"url.catalogList()\"\n       routerLinkActive=\"active-link\">Catalogue</a>\n\n  <a [routerLink]=\"url.cartContent()\"\n     routerLinkActive=\"active-link\">Panier</a>\n\n  <a [routerLink]=\"url.cartOrder()\"\n     routerLinkActive=\"active-link\">Commande</a>\n\n  <a [routerLink]=\"url.cartReactive()\"\n     routerLinkActive=\"active-link\">Commande (Reactive Form)</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/widgets/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_url_service__ = __webpack_require__("./src/app/core/services/url.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(url) {
        this.url = url;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/core/widgets/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/core/widgets/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_url_service__["a" /* UrlService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/core/widgets/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/widgets/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Page introuvable !\n</p>\n"

/***/ }),

/***/ "./src/app/core/widgets/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/core/widgets/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/core/widgets/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/widgets/order-button/order-button.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/widgets/order-button/order-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"action.orderCart()\">Passer la commande</button>\n"

/***/ }),

/***/ "./src/app/core/widgets/order-button/order-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_action_service__ = __webpack_require__("./src/app/core/services/action.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderButtonComponent = /** @class */ (function () {
    function OrderButtonComponent(action) {
        this.action = action;
    }
    OrderButtonComponent.prototype.ngOnInit = function () {
    };
    OrderButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-button',
            template: __webpack_require__("./src/app/core/widgets/order-button/order-button.component.html"),
            styles: [__webpack_require__("./src/app/core/widgets/order-button/order-button.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_action_service__["a" /* ActionService */]])
    ], OrderButtonComponent);
    return OrderButtonComponent;
}());



/***/ }),

/***/ "./src/app/core/widgets/rating/rating.component.css":
/***/ (function(module, exports) {

module.exports = "span {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/core/widgets/rating/rating.component.html":
/***/ (function(module, exports) {

module.exports = "<span (mouseleave)=\"leave()\">\n  <span class=\"star\"\n        *ngFor=\"let full of stars ; index as i\"\n        (click)=\"changeRating(i)\"\n        (mouseenter)=\"enter(i)\"\n  ><span *ngIf=\"full\">★</span\n  ><span *ngIf=\"!full\">☆</span\n  ></span>\n</span>\n{{logRefresh()}}\n"

/***/ }),

/***/ "./src/app/core/widgets/rating/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(RatingComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newRating) {
            this._value = newRating;
            this.buildArray(newRating);
        },
        enumerable: true,
        configurable: true
    });
    RatingComponent.prototype.buildArray = function (rating) {
        this.stars = [1, 2, 3, 4, 5]
            .map(function (i) { return i <= rating; });
    };
    RatingComponent.prototype.changeRating = function (index) {
        this.valueChange.emit(index + 1);
    };
    RatingComponent.prototype.enter = function (index) {
        this.buildArray(index + 1);
    };
    RatingComponent.prototype.leave = function () {
        this.buildArray(this.value);
    };
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent.prototype.logRefresh = function () {
        // console.log('refresh rating');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], RatingComponent.prototype, "value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], RatingComponent.prototype, "valueChange", void 0);
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rating',
            template: __webpack_require__("./src/app/core/widgets/rating/rating.component.html"),
            styles: [__webpack_require__("./src/app/core/widgets/rating/rating.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/core/widgets/small-cart/small-cart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/widgets/small-cart/small-cart.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ng-container *ngIf=\"cart.isEmpty()\">\n  <img src=\"assets/img/cart-empty.png\">\n  <span>vide</span>\n</ng-container>\n\n<ng-container *ngIf=\"!cart.isEmpty()\">\n  <img src=\"assets/img/cart-loaded.png\">\n  <span class=\"cart-count\">{{cart.count()}} art.</span>\n  <span class=\"cart-total\">{{cart.total() |currency:'EUR'}}</span>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/core/widgets/small-cart/small-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("./src/app/core/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmallCartComponent = /** @class */ (function () {
    function SmallCartComponent(cart) {
        this.cart = cart;
    }
    SmallCartComponent.prototype.ngOnInit = function () {
    };
    SmallCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-small-cart',
            template: __webpack_require__("./src/app/core/widgets/small-cart/small-cart.component.html"),
            styles: [__webpack_require__("./src/app/core/widgets/small-cart/small-cart.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]])
    ], SmallCartComponent);
    return SmallCartComponent;
}());



/***/ }),

/***/ "./src/app/core/widgets/text-rating.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextRatingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TextRatingPipe = /** @class */ (function () {
    function TextRatingPipe() {
    }
    TextRatingPipe.prototype.transform = function (value) {
        return '★★★★★'.substring(0, value)
            + '☆☆☆☆☆'.substring(value, 5);
    };
    TextRatingPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'textRating'
        })
    ], TextRatingPipe);
    return TextRatingPipe;
}());



/***/ }),

/***/ "./src/app/core/widgets/widgets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__("./src/app/core/widgets/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_loading_component__ = __webpack_require__("./src/app/core/widgets/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__ = __webpack_require__("./src/app/core/widgets/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__text_rating_pipe__ = __webpack_require__("./src/app/core/widgets/text-rating.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rating_rating_component__ = __webpack_require__("./src/app/core/widgets/rating/rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_navigator_book_navigator_component__ = __webpack_require__("./src/app/core/widgets/book-navigator/book-navigator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__small_cart_small_cart_component__ = __webpack_require__("./src/app/core/widgets/small-cart/small-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__buy_button_buy_button_component__ = __webpack_require__("./src/app/core/widgets/buy-button/buy-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_button_order_button_component__ = __webpack_require__("./src/app/core/widgets/order-button/order-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__error_error_component__ = __webpack_require__("./src/app/core/widgets/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__field_field_component__ = __webpack_require__("./src/app/core/widgets/field/field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__zipcode_validator_directive__ = __webpack_require__("./src/app/core/widgets/zipcode-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__email_validator_directive__ = __webpack_require__("./src/app/core/widgets/email-validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_3__loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__text_rating_pipe__["a" /* TextRatingPipe */],
                __WEBPACK_IMPORTED_MODULE_7__rating_rating_component__["a" /* RatingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__book_navigator_book_navigator_component__["a" /* BookNavigatorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__small_cart_small_cart_component__["a" /* SmallCartComponent */],
                __WEBPACK_IMPORTED_MODULE_10__buy_button_buy_button_component__["a" /* BuyButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_11__order_button_order_button_component__["a" /* OrderButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_12__error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__field_field_component__["a" /* FieldComponent */],
                __WEBPACK_IMPORTED_MODULE_14__zipcode_validator_directive__["a" /* ZipcodeValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_15__email_validator_directive__["a" /* EmailValidatorDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__text_rating_pipe__["a" /* TextRatingPipe */],
                __WEBPACK_IMPORTED_MODULE_7__rating_rating_component__["a" /* RatingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__book_navigator_book_navigator_component__["a" /* BookNavigatorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__small_cart_small_cart_component__["a" /* SmallCartComponent */],
                __WEBPACK_IMPORTED_MODULE_10__buy_button_buy_button_component__["a" /* BuyButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_11__order_button_order_button_component__["a" /* OrderButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_12__error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_13__field_field_component__["a" /* FieldComponent */],
                __WEBPACK_IMPORTED_MODULE_14__zipcode_validator_directive__["a" /* ZipcodeValidatorDirective */],
                __WEBPACK_IMPORTED_MODULE_15__email_validator_directive__["a" /* EmailValidatorDirective */]
            ]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());



/***/ }),

/***/ "./src/app/core/widgets/zipcode-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZipcodeValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_app_validators__ = __webpack_require__("./src/app/core/util/app-validators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZipcodeValidatorDirective = /** @class */ (function () {
    function ZipcodeValidatorDirective() {
    }
    ZipcodeValidatorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appZipcode],input[zipcode]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */],
                    useValue: __WEBPACK_IMPORTED_MODULE_2__util_app_validators__["a" /* AppValidators */].zipcode,
                    multi: true
                }
            ]
        })
    ], ZipcodeValidatorDirective);
    return ZipcodeValidatorDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map