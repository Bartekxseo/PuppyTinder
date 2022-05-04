(self["webpackChunkPT_terminal_panel"] = self["webpackChunkPT_terminal_panel"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 297:
/*!******************************************!*\
  !*** ./src/app/api/api-configuration.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiConfiguration": () => (/* binding */ ApiConfiguration)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

/**
 * Global configuration for Api services
 */
class ApiConfiguration {
    constructor() {
        this.rootUrl = '';
    }
}
ApiConfiguration.ɵfac = function ApiConfiguration_Factory(t) { return new (t || ApiConfiguration)(); };
ApiConfiguration.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiConfiguration, factory: ApiConfiguration.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9809:
/*!***********************************!*\
  !*** ./src/app/api/api.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiModule": () => (/* binding */ ApiModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-configuration */ 297);
/* harmony import */ var _services_administration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/administration.service */ 4838);
/* harmony import */ var _services_machine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/machine.service */ 1959);
/* harmony import */ var _services_plc_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/plc-message.service */ 8445);
/* harmony import */ var _services_reason_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/reason.service */ 4279);
/* harmony import */ var _services_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/status.service */ 9413);
/* harmony import */ var _services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/weather-forecast.service */ 7863);
/* harmony import */ var _services_work_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/work-order.service */ 16);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);










/**
 * Provider for all Api services, plus ApiConfiguration
 */
class ApiModule {
    static forRoot(customParams) {
        return {
            ngModule: ApiModule,
            providers: [
                {
                    provide: _api_configuration__WEBPACK_IMPORTED_MODULE_0__.ApiConfiguration,
                    useValue: { rootUrl: customParams.rootUrl }
                }
            ]
        };
    }
}
ApiModule.ɵfac = function ApiModule_Factory(t) { return new (t || ApiModule)(); };
ApiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _api_configuration__WEBPACK_IMPORTED_MODULE_0__.ApiConfiguration,
        _services_administration_service__WEBPACK_IMPORTED_MODULE_1__.AdministrationService,
        _services_machine_service__WEBPACK_IMPORTED_MODULE_2__.MachineService,
        _services_plc_message_service__WEBPACK_IMPORTED_MODULE_3__.PlcMessageService,
        _services_reason_service__WEBPACK_IMPORTED_MODULE_4__.ReasonService,
        _services_status_service__WEBPACK_IMPORTED_MODULE_5__.StatusService,
        _services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_6__.WeatherForecastService,
        _services_work_order_service__WEBPACK_IMPORTED_MODULE_7__.WorkOrderService
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule
        ], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ApiModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule], exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule] }); })();


/***/ }),

/***/ 1352:
/*!*************************************!*\
  !*** ./src/app/api/base-service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* tslint:disable */

/**
 * Custom parameter codec to correctly handle the plus sign in parameter
 * values. See https://github.com/angular/angular/issues/18261
 */
class ParameterCodec {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
const PARAMETER_CODEC = new ParameterCodec();
/**
 * Base class for API services
 */
class BaseService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this._rootUrl = '';
    }
    /**
     * Returns the root url for API operations. If not set directly in this
     * service, will fallback to ApiConfiguration.rootUrl.
     */
    get rootUrl() {
        return this._rootUrl || this.config.rootUrl;
    }
    /**
     * Sets the root URL for API operations in this service.
     */
    set rootUrl(rootUrl) {
        this._rootUrl = rootUrl;
    }
    /**
     * Creates a new `HttpParams` with the correct codec
     */
    newParams() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
            encoder: PARAMETER_CODEC
        });
    }
}


/***/ }),

/***/ 4670:
/*!*********************************!*\
  !*** ./src/app/api/services.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationService": () => (/* reexport safe */ _services_administration_service__WEBPACK_IMPORTED_MODULE_0__.AdministrationService),
/* harmony export */   "MachineService": () => (/* reexport safe */ _services_machine_service__WEBPACK_IMPORTED_MODULE_1__.MachineService),
/* harmony export */   "PlcMessageService": () => (/* reexport safe */ _services_plc_message_service__WEBPACK_IMPORTED_MODULE_2__.PlcMessageService),
/* harmony export */   "ReasonService": () => (/* reexport safe */ _services_reason_service__WEBPACK_IMPORTED_MODULE_3__.ReasonService),
/* harmony export */   "StatusService": () => (/* reexport safe */ _services_status_service__WEBPACK_IMPORTED_MODULE_4__.StatusService),
/* harmony export */   "WeatherForecastService": () => (/* reexport safe */ _services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_5__.WeatherForecastService),
/* harmony export */   "WorkOrderService": () => (/* reexport safe */ _services_work_order_service__WEBPACK_IMPORTED_MODULE_6__.WorkOrderService)
/* harmony export */ });
/* harmony import */ var _services_administration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/administration.service */ 4838);
/* harmony import */ var _services_machine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/machine.service */ 1959);
/* harmony import */ var _services_plc_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/plc-message.service */ 8445);
/* harmony import */ var _services_reason_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/reason.service */ 4279);
/* harmony import */ var _services_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/status.service */ 9413);
/* harmony import */ var _services_weather_forecast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/weather-forecast.service */ 7863);
/* harmony import */ var _services_work_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/work-order.service */ 16);









/***/ }),

/***/ 4838:
/*!********************************************************!*\
  !*** ./src/app/api/services/administration.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministrationService": () => (/* binding */ AdministrationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 1352);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-configuration */ 297);






class AdministrationService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @param workerLoginCode undefined
     * @return Success
     */
    postApiAdministrationLoginWorkerResponse(workerLoginCode) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (workerLoginCode != null)
            __params = __params.set('workerLoginCode', workerLoginCode.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Administration/LoginWorker`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param workerLoginCode undefined
     * @return Success
     */
    postApiAdministrationLoginWorker(workerLoginCode) {
        return this.postApiAdministrationLoginWorkerResponse(workerLoginCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @return Success
     */
    getApiAdministrationGetCurrentTenantHeaderResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Administration/GetCurrentTenantHeader`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @return Success
     */
    getApiAdministrationGetCurrentTenantHeader() {
        return this.getApiAdministrationGetCurrentTenantHeaderResponse().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiAdministrationWorkersResponse(options) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (options != null)
            __params = __params.set('options', options.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Administration/Workers`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiAdministrationWorkers(options) {
        return this.getApiAdministrationWorkersResponse(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiAdministrationGetWorkersCountResponse(options) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (options != null)
            __params = __params.set('options', options.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Administration/GetWorkersCount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r.clone({ body: parseFloat(_r.body) });
        }));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiAdministrationGetWorkersCount(options) {
        return this.getApiAdministrationGetWorkersCountResponse(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param body undefined
     */
    postApiAdministrationAddOrUpdateResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Administration/addOrUpdate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param body undefined
     */
    postApiAdministrationAddOrUpdate(body) {
        return this.postApiAdministrationAddOrUpdateResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param id undefined
     * @return Success
     */
    getApiAdministrationGetWorkerResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (id != null)
            __params = __params.set('id', id.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Administration/GetWorker`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param id undefined
     * @return Success
     */
    getApiAdministrationGetWorker(id) {
        return this.getApiAdministrationGetWorkerResponse(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param id undefined
     */
    deleteApiAdministrationDeleteIdResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('DELETE', this.rootUrl + `/api/Administration/delete/${encodeURIComponent(id)}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param id undefined
     */
    deleteApiAdministrationDeleteId(id) {
        return this.deleteApiAdministrationDeleteIdResponse(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
}
AdministrationService.postApiAdministrationLoginWorkerPath = '/api/Administration/LoginWorker';
AdministrationService.getApiAdministrationGetCurrentTenantHeaderPath = '/api/Administration/GetCurrentTenantHeader';
AdministrationService.getApiAdministrationWorkersPath = '/api/Administration/Workers';
AdministrationService.getApiAdministrationGetWorkersCountPath = '/api/Administration/GetWorkersCount';
AdministrationService.postApiAdministrationAddOrUpdatePath = '/api/Administration/addOrUpdate';
AdministrationService.getApiAdministrationGetWorkerPath = '/api/Administration/GetWorker';
AdministrationService.deleteApiAdministrationDeleteIdPath = '/api/Administration/delete/{id}';
AdministrationService.ɵfac = function AdministrationService_Factory(t) { return new (t || AdministrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_1__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AdministrationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AdministrationService, factory: AdministrationService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ 1959:
/*!*************************************************!*\
  !*** ./src/app/api/services/machine.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MachineService": () => (/* binding */ MachineService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 1352);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-configuration */ 297);






class MachineService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * Pobieranie maszyny po jej Id
     * @param machineId
     * @return Success
     */
    GetMachineResponse(machineId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Machine/${encodeURIComponent(machineId)}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * Pobieranie maszyny po jej Id
     * @param machineId
     * @return Success
     */
    GetMachine(machineId) {
        return this.GetMachineResponse(machineId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * Pobranie listy maszyn
     * @param body undefined
     * @return Success
     */
    postApiMachineResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * Pobranie listy maszyn
     * @param body undefined
     * @return Success
     */
    postApiMachine(body) {
        return this.postApiMachineResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @return Success
     */
    getApiMachineResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Machine`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @return Success
     */
    getApiMachine() {
        return this.getApiMachineResponse().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * Pobranie listy aktywności maszyny dla danego dnia i danego przedziału godzinowego (zmiany)
     * @param body
     * @return Success
     */
    postApiMachineGetMachineActivityResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/GetMachineActivity`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * Pobranie listy aktywności maszyny dla danego dnia i danego przedziału godzinowego (zmiany)
     * @param body
     * @return Success
     */
    postApiMachineGetMachineActivity(body) {
        return this.postApiMachineGetMachineActivityResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * Pobranie listy dostępnych statusów
     * @param body undefined
     * @return Success
     */
    postApiMachineGetStatusReasonsResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/GetStatusReasons`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * Pobranie listy dostępnych statusów
     * @param body undefined
     * @return Success
     */
    postApiMachineGetStatusReasons(body) {
        return this.postApiMachineGetStatusReasonsResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * Zapis zmian (przypisania szczegółowego statusu)
     * @param body Lista identyfikatorów aktywności oraz Id powodu zmiany statusu
     * @return Success
     */
    postApiMachineSetStatusReasonResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/SetStatusReason`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * Zapis zmian (przypisania szczegółowego statusu)
     * @param body Lista identyfikatorów aktywności oraz Id powodu zmiany statusu
     * @return Success
     */
    postApiMachineSetStatusReason(body) {
        return this.postApiMachineSetStatusReasonResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * Walidacja poprawności zeskanowanego kodu zlecenia
     * @param WorkOrderCode Kod zlecenia z numerem operacji: {kodZlecenia}%{numerOperacji}
     * @return Success
     */
    postApiMachineValidateWorkOnRoutingResponse(WorkOrderCode) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (WorkOrderCode != null)
            __params = __params.set('WorkOrderCode', WorkOrderCode.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/ValidateWorkOnRouting`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * Walidacja poprawności zeskanowanego kodu zlecenia
     * @param WorkOrderCode Kod zlecenia z numerem operacji: {kodZlecenia}%{numerOperacji}
     * @return Success
     */
    postApiMachineValidateWorkOnRouting(WorkOrderCode) {
        return this.postApiMachineValidateWorkOnRoutingResponse(WorkOrderCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * Zapis zmian (przypisania zleceń do aktywności)
     * @param body
     * @return Success
     */
    postApiMachineAssignWorkOrderResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/AssignWorkOrder`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * Zapis zmian (przypisania zleceń do aktywności)
     * @param body
     * @return Success
     */
    postApiMachineAssignWorkOrder(body) {
        return this.postApiMachineAssignWorkOrderResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * Walidacja poprawności zeskanowanego kodu pracownika
     * @param WorkerCode Kod pracownika
     * @return Success
     */
    postApiMachineValidateWorkerResponse(WorkerCode) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (WorkerCode != null)
            __params = __params.set('WorkerCode', WorkerCode.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/ValidateWorker`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * Walidacja poprawności zeskanowanego kodu pracownika
     * @param WorkerCode Kod pracownika
     * @return Success
     */
    postApiMachineValidateWorker(WorkerCode) {
        return this.postApiMachineValidateWorkerResponse(WorkerCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * Zapis zmian (przypisania pracowników aktywności)
     * @param body
     */
    postApiMachineAssignWorkerResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/AssignWorker`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * Zapis zmian (przypisania pracowników aktywności)
     * @param body
     */
    postApiMachineAssignWorker(body) {
        return this.postApiMachineAssignWorkerResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * Przypisanie parcownika do aktualnej aktywności maszyny
     * @param params The `MachineService.PostApiMachineAssignWorkerToCurrentActivityParams` containing the following parameters:
     *
     * - `workerId`:
     *
     * - `machineId`:
     *
     * @return Success
     */
    postApiMachineAssignWorkerToCurrentActivityResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (params.workerId != null)
            __params = __params.set('workerId', params.workerId.toString());
        if (params.machineId != null)
            __params = __params.set('machineId', params.machineId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/AssignWorkerToCurrentActivity`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r.clone({ body: _r.body === 'true' });
        }));
    }
    /**
     * Przypisanie parcownika do aktualnej aktywności maszyny
     * @param params The `MachineService.PostApiMachineAssignWorkerToCurrentActivityParams` containing the following parameters:
     *
     * - `workerId`:
     *
     * - `machineId`:
     *
     * @return Success
     */
    postApiMachineAssignWorkerToCurrentActivity(params) {
        return this.postApiMachineAssignWorkerToCurrentActivityResponse(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param machineId undefined
     */
    getApiMachineGetOpenAttachmentResponse(machineId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (machineId != null)
            __params = __params.set('machineId', machineId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Machine/GetOpenAttachment`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param machineId undefined
     */
    getApiMachineGetOpenAttachment(machineId) {
        return this.getApiMachineGetOpenAttachmentResponse(machineId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param machineId undefined
     * @return Success
     */
    postApiMachineGetMachineDisplayConfigurationResponse(machineId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (machineId != null)
            __params = __params.set('machineId', machineId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/GetMachineDisplayConfiguration`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param machineId undefined
     * @return Success
     */
    postApiMachineGetMachineDisplayConfiguration(machineId) {
        return this.postApiMachineGetMachineDisplayConfigurationResponse(machineId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param machineId undefined
     * @return Success
     */
    postApiMachineGetMachineProductionMethod1Response(machineId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (machineId != null)
            __params = __params.set('machineId', machineId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/GetMachineProductionMethod1`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param machineId undefined
     * @return Success
     */
    postApiMachineGetMachineProductionMethod1(machineId) {
        return this.postApiMachineGetMachineProductionMethod1Response(machineId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param machineId undefined
     */
    postApiMachineCreateNewMachineActivityResponse(machineId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (machineId != null)
            __params = __params.set('machineId', machineId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/CreateNewMachineActivity`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param machineId undefined
     */
    postApiMachineCreateNewMachineActivity(machineId) {
        return this.postApiMachineCreateNewMachineActivityResponse(machineId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiMachineMachinesResponse(options) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (options != null)
            __params = __params.set('options', options.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Machine/Machines`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiMachineMachines(options) {
        return this.getApiMachineMachinesResponse(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiMachineGetMachinesCountResponse(options) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (options != null)
            __params = __params.set('options', options.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Machine/GetMachinesCount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r.clone({ body: parseFloat(_r.body) });
        }));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiMachineGetMachinesCount(options) {
        return this.getApiMachineGetMachinesCountResponse(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param body undefined
     */
    postApiMachineAddOrUpdateResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Machine/addOrUpdate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param body undefined
     */
    postApiMachineAddOrUpdate(body) {
        return this.postApiMachineAddOrUpdateResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param id undefined
     * @return Success
     */
    getApiMachineGetMachineResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (id != null)
            __params = __params.set('id', id.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Machine/GetMachine`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param id undefined
     * @return Success
     */
    getApiMachineGetMachine(id) {
        return this.getApiMachineGetMachineResponse(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param id undefined
     */
    deleteApiMachineDeleteIdResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('DELETE', this.rootUrl + `/api/Machine/delete/${encodeURIComponent(id)}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param id undefined
     */
    deleteApiMachineDeleteId(id) {
        return this.deleteApiMachineDeleteIdResponse(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
}
MachineService.GetMachinePath = '/api/Machine/{machineId}';
MachineService.postApiMachinePath = '/api/Machine';
MachineService.getApiMachinePath = '/api/Machine';
MachineService.postApiMachineGetMachineActivityPath = '/api/Machine/GetMachineActivity';
MachineService.postApiMachineGetStatusReasonsPath = '/api/Machine/GetStatusReasons';
MachineService.postApiMachineSetStatusReasonPath = '/api/Machine/SetStatusReason';
MachineService.postApiMachineValidateWorkOnRoutingPath = '/api/Machine/ValidateWorkOnRouting';
MachineService.postApiMachineAssignWorkOrderPath = '/api/Machine/AssignWorkOrder';
MachineService.postApiMachineValidateWorkerPath = '/api/Machine/ValidateWorker';
MachineService.postApiMachineAssignWorkerPath = '/api/Machine/AssignWorker';
MachineService.postApiMachineAssignWorkerToCurrentActivityPath = '/api/Machine/AssignWorkerToCurrentActivity';
MachineService.getApiMachineGetOpenAttachmentPath = '/api/Machine/GetOpenAttachment';
MachineService.postApiMachineGetMachineDisplayConfigurationPath = '/api/Machine/GetMachineDisplayConfiguration';
MachineService.postApiMachineGetMachineProductionMethod1Path = '/api/Machine/GetMachineProductionMethod1';
MachineService.postApiMachineCreateNewMachineActivityPath = '/api/Machine/CreateNewMachineActivity';
MachineService.getApiMachineMachinesPath = '/api/Machine/Machines';
MachineService.getApiMachineGetMachinesCountPath = '/api/Machine/GetMachinesCount';
MachineService.postApiMachineAddOrUpdatePath = '/api/Machine/addOrUpdate';
MachineService.getApiMachineGetMachinePath = '/api/Machine/GetMachine';
MachineService.deleteApiMachineDeleteIdPath = '/api/Machine/delete/{id}';
MachineService.ɵfac = function MachineService_Factory(t) { return new (t || MachineService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_1__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
MachineService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: MachineService, factory: MachineService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ 8445:
/*!*****************************************************!*\
  !*** ./src/app/api/services/plc-message.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlcMessageService": () => (/* binding */ PlcMessageService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 1352);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-configuration */ 297);






class PlcMessageService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @return Success
     */
    getApiPlcMessageResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/PlcMessage`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @return Success
     */
    getApiPlcMessage() {
        return this.getApiPlcMessageResponse().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    getApiPlcMessageGetLogsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/PlcMessage/GetLogs`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    getApiPlcMessageGetLogs() {
        return this.getApiPlcMessageGetLogsResponse().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
}
PlcMessageService.getApiPlcMessagePath = '/api/PlcMessage';
PlcMessageService.getApiPlcMessageGetLogsPath = '/api/PlcMessage/GetLogs';
PlcMessageService.ɵfac = function PlcMessageService_Factory(t) { return new (t || PlcMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_1__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PlcMessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PlcMessageService, factory: PlcMessageService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ 4279:
/*!************************************************!*\
  !*** ./src/app/api/services/reason.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReasonService": () => (/* binding */ ReasonService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 1352);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-configuration */ 297);






class ReasonService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiReasonSattlementReasonsResponse(options) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (options != null)
            __params = __params.set('options', options.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Reason/SattlementReasons`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiReasonSattlementReasons(options) {
        return this.getApiReasonSattlementReasonsResponse(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiReasonGetSattlementReasonsCountResponse(options) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (options != null)
            __params = __params.set('options', options.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Reason/GetSattlementReasonsCount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r.clone({ body: parseFloat(_r.body) });
        }));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiReasonGetSattlementReasonsCount(options) {
        return this.getApiReasonGetSattlementReasonsCountResponse(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param body undefined
     */
    postApiReasonAddOrUpdateResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Reason/addOrUpdate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param body undefined
     */
    postApiReasonAddOrUpdate(body) {
        return this.postApiReasonAddOrUpdateResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param id undefined
     * @return Success
     */
    getApiReasonGetSattlementReasonResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (id != null)
            __params = __params.set('id', id.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Reason/GetSattlementReason`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param id undefined
     * @return Success
     */
    getApiReasonGetSattlementReason(id) {
        return this.getApiReasonGetSattlementReasonResponse(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param id undefined
     */
    deleteApiReasonDeleteIdResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('DELETE', this.rootUrl + `/api/Reason/delete/${encodeURIComponent(id)}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param id undefined
     */
    deleteApiReasonDeleteId(id) {
        return this.deleteApiReasonDeleteIdResponse(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
}
ReasonService.getApiReasonSattlementReasonsPath = '/api/Reason/SattlementReasons';
ReasonService.getApiReasonGetSattlementReasonsCountPath = '/api/Reason/GetSattlementReasonsCount';
ReasonService.postApiReasonAddOrUpdatePath = '/api/Reason/addOrUpdate';
ReasonService.getApiReasonGetSattlementReasonPath = '/api/Reason/GetSattlementReason';
ReasonService.deleteApiReasonDeleteIdPath = '/api/Reason/delete/{id}';
ReasonService.ɵfac = function ReasonService_Factory(t) { return new (t || ReasonService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_1__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ReasonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ReasonService, factory: ReasonService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ 9413:
/*!************************************************!*\
  !*** ./src/app/api/services/status.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusService": () => (/* binding */ StatusService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 1352);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-configuration */ 297);






class StatusService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiStatusStatusesResponse(options) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (options != null)
            __params = __params.set('options', options.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Status/Statuses`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiStatusStatuses(options) {
        return this.getApiStatusStatusesResponse(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiStatusGetStatusesCountResponse(options) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (options != null)
            __params = __params.set('options', options.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Status/GetStatusesCount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r.clone({ body: parseFloat(_r.body) });
        }));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiStatusGetStatusesCount(options) {
        return this.getApiStatusGetStatusesCountResponse(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param body undefined
     */
    postApiStatusAddOrUpdateResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Status/addOrUpdate`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param body undefined
     */
    postApiStatusAddOrUpdate(body) {
        return this.postApiStatusAddOrUpdateResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param id undefined
     * @return Success
     */
    getApiStatusGetStatusResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (id != null)
            __params = __params.set('id', id.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Status/GetStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param id undefined
     * @return Success
     */
    getApiStatusGetStatus(id) {
        return this.getApiStatusGetStatusResponse(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param id undefined
     */
    deleteApiStatusDeleteIdResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('DELETE', this.rootUrl + `/api/Status/delete/${encodeURIComponent(id)}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param id undefined
     */
    deleteApiStatusDeleteId(id) {
        return this.deleteApiStatusDeleteIdResponse(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiStatusAdvancedStatusesResponse(options) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (options != null)
            __params = __params.set('options', options.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Status/AdvancedStatuses`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiStatusAdvancedStatuses(options) {
        return this.getApiStatusAdvancedStatusesResponse(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiStatusGetAdvancedStatusesCountResponse(options) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (options != null)
            __params = __params.set('options', options.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Status/GetAdvancedStatusesCount`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'text'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r.clone({ body: parseFloat(_r.body) });
        }));
    }
    /**
     * @param options undefined
     * @return Success
     */
    getApiStatusGetAdvancedStatusesCount(options) {
        return this.getApiStatusGetAdvancedStatusesCountResponse(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param body undefined
     */
    postApiStatusAddOrUpdateAdvancedResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/Status/addOrUpdateAdvanced`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param body undefined
     */
    postApiStatusAddOrUpdateAdvanced(body) {
        return this.postApiStatusAddOrUpdateAdvancedResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param id undefined
     * @return Success
     */
    getApiStatusGetAdvancedStatusResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (id != null)
            __params = __params.set('id', id.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/Status/GetAdvancedStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param id undefined
     * @return Success
     */
    getApiStatusGetAdvancedStatus(id) {
        return this.getApiStatusGetAdvancedStatusResponse(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param id undefined
     */
    deleteApiStatusDeleteAdvancedIdResponse(id) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('DELETE', this.rootUrl + `/api/Status/deleteAdvanced/${encodeURIComponent(id)}`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param id undefined
     */
    deleteApiStatusDeleteAdvancedId(id) {
        return this.deleteApiStatusDeleteAdvancedIdResponse(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
}
StatusService.getApiStatusStatusesPath = '/api/Status/Statuses';
StatusService.getApiStatusGetStatusesCountPath = '/api/Status/GetStatusesCount';
StatusService.postApiStatusAddOrUpdatePath = '/api/Status/addOrUpdate';
StatusService.getApiStatusGetStatusPath = '/api/Status/GetStatus';
StatusService.deleteApiStatusDeleteIdPath = '/api/Status/delete/{id}';
StatusService.getApiStatusAdvancedStatusesPath = '/api/Status/AdvancedStatuses';
StatusService.getApiStatusGetAdvancedStatusesCountPath = '/api/Status/GetAdvancedStatusesCount';
StatusService.postApiStatusAddOrUpdateAdvancedPath = '/api/Status/addOrUpdateAdvanced';
StatusService.getApiStatusGetAdvancedStatusPath = '/api/Status/GetAdvancedStatus';
StatusService.deleteApiStatusDeleteAdvancedIdPath = '/api/Status/deleteAdvanced/{id}';
StatusService.ɵfac = function StatusService_Factory(t) { return new (t || StatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_1__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
StatusService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: StatusService, factory: StatusService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ 7863:
/*!**********************************************************!*\
  !*** ./src/app/api/services/weather-forecast.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherForecastService": () => (/* binding */ WeatherForecastService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 1352);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-configuration */ 297);






class WeatherForecastService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @return Success
     */
    getApiWeatherForecastResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/WeatherForecast`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @return Success
     */
    getApiWeatherForecast() {
        return this.getApiWeatherForecastResponse().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    getApiWeatherForecastGetLogsResponse() {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', this.rootUrl + `/api/WeatherForecast/GetLogs`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    getApiWeatherForecastGetLogs() {
        return this.getApiWeatherForecastGetLogsResponse().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
}
WeatherForecastService.getApiWeatherForecastPath = '/api/WeatherForecast';
WeatherForecastService.getApiWeatherForecastGetLogsPath = '/api/WeatherForecast/GetLogs';
WeatherForecastService.ɵfac = function WeatherForecastService_Factory(t) { return new (t || WeatherForecastService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_1__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
WeatherForecastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: WeatherForecastService, factory: WeatherForecastService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ 16:
/*!****************************************************!*\
  !*** ./src/app/api/services/work-order.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkOrderService": () => (/* binding */ WorkOrderService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-service */ 1352);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-configuration */ 297);






class WorkOrderService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * @param params The `WorkOrderService.PostApiWorkOrderSearchWorkOrderRoutingsParams` containing the following parameters:
     *
     * - `search`:
     *
     * - `machineId`:
     *
     * @return Success
     */
    postApiWorkOrderSearchWorkOrderRoutingsResponse(params) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (params.search != null)
            __params = __params.set('search', params.search.toString());
        if (params.machineId != null)
            __params = __params.set('machineId', params.machineId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/WorkOrder/SearchWorkOrderRoutings`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param params The `WorkOrderService.PostApiWorkOrderSearchWorkOrderRoutingsParams` containing the following parameters:
     *
     * - `search`:
     *
     * - `machineId`:
     *
     * @return Success
     */
    postApiWorkOrderSearchWorkOrderRoutings(params) {
        return this.postApiWorkOrderSearchWorkOrderRoutingsResponse(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param machineId undefined
     * @return Success
     */
    postApiWorkOrderGetWorkOrderRoutingListResponse(machineId) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        if (machineId != null)
            __params = __params.set('machineId', machineId.toString());
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/WorkOrder/GetWorkOrderRoutingList`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param machineId undefined
     * @return Success
     */
    postApiWorkOrderGetWorkOrderRoutingList(machineId) {
        return this.postApiWorkOrderGetWorkOrderRoutingListResponse(machineId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
    /**
     * @param body undefined
     * @return Success
     */
    postApiWorkOrderGetWorkLogTransferStatusResponse(body) {
        let __params = this.newParams();
        let __headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        let __body = null;
        __body = body;
        let req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', this.rootUrl + `/api/WorkOrder/GetWorkLogTransferStatus`, __body, {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });
        return this.http.request(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(_r => _r instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((_r) => {
            return _r;
        }));
    }
    /**
     * @param body undefined
     * @return Success
     */
    postApiWorkOrderGetWorkLogTransferStatus(body) {
        return this.postApiWorkOrderGetWorkLogTransferStatusResponse(body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(_r => _r.body));
    }
}
WorkOrderService.postApiWorkOrderSearchWorkOrderRoutingsPath = '/api/WorkOrder/SearchWorkOrderRoutings';
WorkOrderService.postApiWorkOrderGetWorkOrderRoutingListPath = '/api/WorkOrder/GetWorkOrderRoutingList';
WorkOrderService.postApiWorkOrderGetWorkLogTransferStatusPath = '/api/WorkOrder/GetWorkLogTransferStatus';
WorkOrderService.ɵfac = function WorkOrderService_Factory(t) { return new (t || WorkOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_configuration__WEBPACK_IMPORTED_MODULE_1__.ApiConfiguration), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
WorkOrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: WorkOrderService, factory: WorkOrderService.ɵfac, providedIn: 'root' });



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var _areas_machine_machine_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areas/machine/machine-routing.module */ 7351);
/* harmony import */ var _areas_machine_machine_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./areas/machine/machine.module */ 112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






const routes = [
    // {
    //   path: MACHINE_STATE_URL, loadChildren: () =>
    //     import('./areas/machine/machine.module')
    //       // .then(m => m.AdministrationModule), canActivate: [AuthGuard]
    //       .then(m => m.MachineModule), canActivate: []
    // },
    {
        path: _areas_machine_machine_module__WEBPACK_IMPORTED_MODULE_1__.MACHINE_STATE_URL, children: _areas_machine_machine_routing_module__WEBPACK_IMPORTED_MODULE_0__.machineRoutes
    },
    // {
    //   path: WORK_ORDER_URL, loadChildren: () =>
    //     import('./areas/work-order/work-order.module')
    //       // .then(m => m.WorkOrderModule), canActivate: [AuthGuard]
    //       .then(m => m.WorkOrderModule), canActivate: []
    // },
    // {
    //   path: PART_NUMBER_URL, loadChildren: () =>
    //     import('./areas/part-number/part-number.module')
    //       // .then(m => m.PartNumberModule), canActivate: [AuthGuard]
    //       .then(m => m.PartNumberModule), canActivate: []
    // },
    { path: 'login', component: dsr_toolkit__WEBPACK_IMPORTED_MODULE_2__.LoginPanelComponent },
    { path: '**', redirectTo: _areas_machine_machine_module__WEBPACK_IMPORTED_MODULE_1__.MACHINE_STATE_URL }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout/layout.component */ 6571);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
    constructor() {
        this.title = 'PT-terminal-panel';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "mat-app-background", "mat-body"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appInitializerFactory": () => (/* binding */ appInitializerFactory),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/pl */ 869);
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/uk */ 327);
/* harmony import */ var _angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_locales_en_GB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/en-GB */ 6141);
/* harmony import */ var _angular_common_locales_en_GB__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en_GB__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var ngx_translate_messageformat_compiler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-translate-messageformat-compiler */ 7520);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.module */ 4805);


















(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)((_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_0___default()));
(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)((_angular_common_locales_uk__WEBPACK_IMPORTED_MODULE_1___default()));
(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)((_angular_common_locales_en_GB__WEBPACK_IMPORTED_MODULE_2___default()));
// tslint:disable-next-line: typedef
function appInitializerFactory(translate, injector, languageService) {
    return () => new Promise((resolve) => {
        const locationInitialized = injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_6__.LOCATION_INITIALIZED, Promise.resolve(null));
        locationInitialized.then(() => {
            const langToSet = translate.getBrowserLang();
            translate.setDefaultLang('pl');
            languageService.setCurrent(langToSet);
            translate.use(langToSet).subscribe(() => {
                // tslint:disable-next-line: no-console
                console.info(`Successfully initialized '${langToSet}' language.'`);
            }, err => {
                console.error(`Problem with '${langToSet}' language initialization.'`);
            }, () => {
                resolve(null);
            });
        });
    });
}
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__.APP_INITIALIZER,
            useFactory: appInitializerFactory,
            deps: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector, dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__.LanguageService],
            multi: true
        },
        dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__.LanguageService,
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__.LOCALE_ID,
            deps: [dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__.LanguageService],
            useFactory: languageService => languageService.getCurrent()
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__.DsrToolkitModule,
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__.LayoutModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forRoot({
                compiler: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateCompiler,
                    useClass: ngx_translate_messageformat_compiler__WEBPACK_IMPORTED_MODULE_13__.TranslateMessageFormatCompiler
                },
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient]
                },
                isolate: false
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
        dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__.DsrToolkitModule,
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__.LayoutModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule] }); })();


/***/ }),

/***/ 1524:
/*!********************************************************************************************************!*\
  !*** ./src/app/areas/machine/form-machine-status-card-list/form-machine-status-card-list.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormMachineStatusCardListComponent": () => (/* binding */ FormMachineStatusCardListComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dsr-toolkit */ 5336);






function FormMachineStatusCardListComponent_mat_card_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const machineStatus_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", machineStatus_r1.statusHexColor);
} }
function FormMachineStatusCardListComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FormMachineStatusCardListComponent_mat_card_0_div_3_Template, 1, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "dsrDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "dsrDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machineStatus_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", machineStatus_r1.statusHexColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", machineStatus_r1.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, machineStatus_r1.startTime), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 6, machineStatus_r1.endTime), " ");
} }
class FormMachineStatusCardListComponent {
    constructor() {
        this.statuses = [];
    }
    ngOnInit() {
        var _a;
        this.statuses = (_a = this.statuses) === null || _a === void 0 ? void 0 : _a.sort((a, b) => moment__WEBPACK_IMPORTED_MODULE_0__(a.startTime).valueOf() - moment__WEBPACK_IMPORTED_MODULE_0__(b.startTime).valueOf());
    }
}
FormMachineStatusCardListComponent.ɵfac = function FormMachineStatusCardListComponent_Factory(t) { return new (t || FormMachineStatusCardListComponent)(); };
FormMachineStatusCardListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormMachineStatusCardListComponent, selectors: [["app-form-machine-status-card-list"]], inputs: { statuses: "statuses" }, decls: 1, vars: 1, consts: [["class", "machine-status-card", 4, "ngFor", "ngForOf"], [1, "machine-status-card"], [2, "align-items", "center", "display", "flex", "font-family", "Roboto Mono"], ["mat-card-avatar", "", "style", "display: inline-block; margin-right: 16px;", 3, "background", 4, "ngIf"], [2, "display", "flex"], ["mat-card-avatar", "", 2, "display", "inline-block", "margin-right", "16px"]], template: function FormMachineStatusCardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FormMachineStatusCardListComponent_mat_card_0_Template, 16, 8, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.statuses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardAvatar], pipes: [dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__.DsrDateTimePipe], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n[_nghost-%COMP%]   .machine-status-card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n[_nghost-%COMP%]     .mat-card-header-text {\n  margin: 0;\n}\n[_nghost-%COMP%]     .mat-icon {\n  height: auto !important;\n  width: auto !important;\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tbWFjaGluZS1zdGF0dXMtY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtBQUNKO0FBR0k7RUFDRSxTQUFBO0FBRE47QUFJSTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUZOIiwiZmlsZSI6ImZvcm0tbWFjaGluZS1zdGF0dXMtY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcblxyXG4gIC5tYWNoaW5lLXN0YXR1cy1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAge1xyXG4gICAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7351:
/*!*********************************************************!*\
  !*** ./src/app/areas/machine/machine-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "machineRoutes": () => (/* binding */ machineRoutes),
/* harmony export */   "MachineRoutingModule": () => (/* binding */ MachineRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./machine-select/machine-select.component */ 6075);
/* harmony import */ var _machine_status_list_machine_status_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./machine-status-list/machine-status-list.component */ 7976);
/* harmony import */ var _machine_status_reason_form_machine_status_reason_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./machine-status-reason-form/machine-status-reason-form.component */ 4603);
/* harmony import */ var _machine_status_work_order_form_machine_status_work_order_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./machine-status-work-order-form/machine-status-work-order-form.component */ 2031);
/* harmony import */ var _machine_status_worker_form_machine_status_worker_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./machine-status-worker-form/machine-status-worker-form.component */ 2853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);








const machineRoutes = [
    { path: '', component: _machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_0__.MachineSelectComponent },
    { path: ':id/status', component: _machine_status_list_machine_status_list_component__WEBPACK_IMPORTED_MODULE_1__.MachineStatusListComponent },
    { path: ':id/status/reason', component: _machine_status_reason_form_machine_status_reason_form_component__WEBPACK_IMPORTED_MODULE_2__.MachineStatusReasonFormComponent },
    { path: ':id/status/workorder', component: _machine_status_work_order_form_machine_status_work_order_form_component__WEBPACK_IMPORTED_MODULE_3__.MachineStatusWorkOrderFormComponent },
    { path: ':id/status/worker', component: _machine_status_worker_form_machine_status_worker_form_component__WEBPACK_IMPORTED_MODULE_4__.MachineStatusWorkerFormComponent },
    { path: '**', redirectTo: '' }
];
class MachineRoutingModule {
}
MachineRoutingModule.ɵfac = function MachineRoutingModule_Factory(t) { return new (t || MachineRoutingModule)(); };
MachineRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MachineRoutingModule });
MachineRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(machineRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MachineRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 8331:
/*!****************************************************************************************************************!*\
  !*** ./src/app/areas/machine/machine-select-admin-panel-dialog/machine-select-admin-panel-dialog.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MachineSelectAdminPanelDialogComponent": () => (/* binding */ MachineSelectAdminPanelDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9328);
/* harmony import */ var _machine_select_machine_select_grid_configurations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../machine-select/machine-select-grid-configurations */ 3920);
/* harmony import */ var _machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../machine-select/machine-select.component */ 6075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/operator-authentication.service */ 1829);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/services */ 4670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 9790);


















function MachineSelectAdminPanelDialogComponent_div_3_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "common.required"));
} }
function MachineSelectAdminPanelDialogComponent_div_3_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "common.minValue"), " ", ctx_r3.logoutTimeoutFormControl.value, "");
} }
function MachineSelectAdminPanelDialogComponent_div_3_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r7.text);
} }
function MachineSelectAdminPanelDialogComponent_div_3_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "common.required"), " ");
} }
function MachineSelectAdminPanelDialogComponent_div_3_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "dsr-select-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function MachineSelectAdminPanelDialogComponent_div_3_div_17_Template_dsr_select_field_valueChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const gridControl_r8 = restoredCtx.$implicit; return gridControl_r8.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gridControl_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("flex", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 6, "machine.kiosk.selectMachine"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowClear", false)("items", ctx_r6.machineOptions)("value", gridControl_r8.value);
} }
function MachineSelectAdminPanelDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MachineSelectAdminPanelDialogComponent_div_3_mat_error_7_Template, 3, 3, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MachineSelectAdminPanelDialogComponent_div_3_mat_error_8_Template, 3, 4, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MachineSelectAdminPanelDialogComponent_div_3_mat_option_14_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, MachineSelectAdminPanelDialogComponent_div_3_mat_error_15_Template, 3, 3, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, MachineSelectAdminPanelDialogComponent_div_3_div_17_Template, 3, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("flex", 1)("margin-right", 2, "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 16, "machine.kiosk.logoutTimeout"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r0.logoutTimeoutFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.logoutTimeoutFormControl.errors == null ? null : ctx_r0.logoutTimeoutFormControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.logoutTimeoutFormControl.errors == null ? null : ctx_r0.logoutTimeoutFormControl.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("flex", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 18, "machine.kiosk.gridSize"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r0.gridSelectFormControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.gridOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.gridSelectFormControl.errors == null ? null : ctx_r0.gridSelectFormControl.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r0.getGridStyles());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.gridSlots);
} }
function MachineSelectAdminPanelDialogComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "dsr-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dsrClick", function MachineSelectAdminPanelDialogComponent_div_4_Template_dsr_button_dsrClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.clickCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "dsr-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dsrClick", function MachineSelectAdminPanelDialogComponent_div_4_Template_dsr_button_dsrClick_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.clickSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("margin-right", 16, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, "common.discard"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.gridSelectFormControl.invalid || ctx_r1.logoutTimeoutFormControl.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "common.save"), " ");
} }
class MachineSelectAdminPanelDialogComponent {
    constructor(data, matDialogRef, operatorAuthenticationService, machineService) {
        this.data = data;
        this.matDialogRef = matDialogRef;
        this.operatorAuthenticationService = operatorAuthenticationService;
        this.machineService = machineService;
        this.initialized = false;
        this.gridOptions = [];
        this.availableMachines = [];
        this.machinesConfiguration = {};
    }
    get machineOptions() {
        return [new dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__.SelectItem(-1, "-")].concat(...this.availableMachines);
    }
    ngOnInit() {
        this.machineService.getApiMachine().subscribe(result => {
            this.availableMachines = result;
            const logoutTimeoutValue = localStorage.getItem(_machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_1__.MachineSelectComponent.LOGOUT_TIMEOUT_KEY);
            const logoutTimeout = JSON.parse(logoutTimeoutValue !== null && logoutTimeoutValue !== void 0 ? logoutTimeoutValue : '0');
            this.logoutTimeoutFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(logoutTimeout, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0), dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__.DsrValidators.integer]);
            this.generateGridOptions();
            this.initialized = true;
        });
    }
    generateGridOptions() {
        const machinesConfigurationValue = localStorage.getItem(_machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_1__.MachineSelectComponent.CONFIGURATION_KEY);
        this.machinesConfiguration = JSON.parse(machinesConfigurationValue);
        const currentGridValue = localStorage.getItem(_machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_1__.MachineSelectComponent.CURRENT_GRID_KEY);
        const currentGrid = JSON.parse(currentGridValue);
        _machine_select_machine_select_grid_configurations__WEBPACK_IMPORTED_MODULE_0__.MachineSelectGridConfiguration.forEach((tuple) => {
            var value = tuple[0] + '_' + tuple[1];
            var text = tuple[0] + ' x ' + tuple[1];
            this.gridOptions.push(new dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__.SelectItem(value, text));
        });
        this.gridSelectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(currentGrid[0] + '_' + currentGrid[1]);
        this.changeGridSlots(null);
        this.gridSelectFormControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this.gridSelectFormControl.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.pairwise)()).subscribe(([prev, next]) => {
            this.changeGridSlots(prev);
        });
    }
    changeGridSlots(previousValue) {
        // Save previous group temporarily
        if (previousValue) {
            this.gridSlots.forEach((value, index) => {
                this.machinesConfiguration[previousValue][index] = value.value;
            });
        }
        // Generate new grid
        const controls = [];
        this.machinesConfiguration[this.gridSelectFormControl.value].forEach(value => {
            controls.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(value));
        });
        this.gridSlots = controls;
    }
    getGridStyles() {
        var currentGrid = this.gridSelectFormControl.value.split('_');
        return {
            'grid-template-rows': `repeat(${currentGrid[0]}, 1fr)`,
            'grid-template-columns': `repeat(${currentGrid[1]}, 1fr)`
        };
    }
    clickSave() {
        // save grid selection
        const currentGrid = this.gridSelectFormControl.value.split('_');
        localStorage.setItem(_machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_1__.MachineSelectComponent.CURRENT_GRID_KEY, JSON.stringify(currentGrid));
        // save grids
        this.gridSlots.forEach((value, index) => {
            this.machinesConfiguration[this.gridSelectFormControl.value][index] = value.value;
        });
        localStorage.setItem(_machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_1__.MachineSelectComponent.CONFIGURATION_KEY, JSON.stringify(this.machinesConfiguration));
        // save timeoutValue
        localStorage.setItem(_machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_1__.MachineSelectComponent.LOGOUT_TIMEOUT_KEY, JSON.stringify(this.logoutTimeoutFormControl.value));
        this.operatorAuthenticationService.changeTimeout(this.logoutTimeoutFormControl.value);
        this.matDialogRef.close(true);
    }
    clickCancel() {
        this.matDialogRef.close(false);
    }
}
MachineSelectAdminPanelDialogComponent.ɵfac = function MachineSelectAdminPanelDialogComponent_Factory(t) { return new (t || MachineSelectAdminPanelDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_2__.OperatorAuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_3__.MachineService)); };
MachineSelectAdminPanelDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MachineSelectAdminPanelDialogComponent, selectors: [["PT-machine-select-admin-panel-dialog"]], decls: 5, vars: 5, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", "style", "height: 100%;", 4, "ngIf"], ["mat-dialog-actions", "", "align", "end", "style", "margin-bottom: -8px; margin-top: 8px;", 4, "ngIf"], ["mat-dialog-content", "", 2, "height", "100%"], [2, "display", "flex"], ["appearance", "fill"], ["matInput", "", "numericInput", "", "required", "", 3, "formControl"], [4, "ngIf"], ["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [1, "gridForm", 3, "ngStyle"], ["style", "display: flex;", 4, "ngFor", "ngForOf"], [3, "value"], ["appearance", "fill", "minWidth", "0px", 3, "allowClear", "items", "value", "label", "valueChange"], ["mat-dialog-actions", "", "align", "end", 2, "margin-bottom", "-8px", "margin-top", "8px"], ["appearance", "dsrRoundNegativeOutline", 3, "dsrClick"], ["appearance", "dsrRound", 3, "disabled", "dsrClick"]], template: function MachineSelectAdminPanelDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MachineSelectAdminPanelDialogComponent_div_3_Template, 18, 20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MachineSelectAdminPanelDialogComponent_div_4_Template, 7, 9, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "machine.kiosk.settingsTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.initialized);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.initialized);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__.NumericInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__.SelectFieldComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["[_nghost-%COMP%]   .gridForm[_ngcontent-%COMP%] {\n  flex: 1;\n  display: grid;\n  grid-gap: 0 1.5rem;\n  gap: 0 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmUtc2VsZWN0LWFkbWluLXBhbmVsLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLE9BQUE7RUFHQSxhQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0FBRkoiLCJmaWxlIjoibWFjaGluZS1zZWxlY3QtYWRtaW4tcGFuZWwtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5ncmlkRm9ybSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAwIDEuNXJlbTtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3920:
/*!************************************************************************************!*\
  !*** ./src/app/areas/machine/machine-select/machine-select-grid-configurations.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MachineSelectGridConfiguration": () => (/* binding */ MachineSelectGridConfiguration)
/* harmony export */ });
const MachineSelectGridConfiguration = [
    [1, 1],
    [1, 2],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 3],
    [3, 4],
    [3, 5],
    [4, 4],
    [4, 6]
];


/***/ }),

/***/ 6075:
/*!**************************************************************************!*\
  !*** ./src/app/areas/machine/machine-select/machine-select.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MachineSelectComponent": () => (/* binding */ MachineSelectComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var src_app_common_utils_color_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/utils/color-helper */ 8488);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _machine_select_admin_panel_dialog_machine_select_admin_panel_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../machine-select-admin-panel-dialog/machine-select-admin-panel-dialog.component */ 8331);
/* harmony import */ var _machine_select_grid_configurations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./machine-select-grid-configurations */ 3920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/services */ 4670);
/* harmony import */ var src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/loader.service */ 961);
/* harmony import */ var src_app_common_services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/sfc-navigator.service */ 9873);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/services/operator-authentication.service */ 1829);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var src_app_common_services_focus_refresh_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/services/focus-refresh.service */ 7430);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 9790);






















function MachineSelectComponent_dsr_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "dsr-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dsrClick", function MachineSelectComponent_dsr_button_7_Template_dsr_button_dsrClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r2.openAdminPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("margin-right", 1, "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 3, "common.admin"), "");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 21);
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", machine_r4.statusHexColor);
} }
function MachineSelectComponent_ng_container_10_mat_card_1_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("[", machine_r4.status, "]");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("[", machine_r4.statusDetail, "]");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_27_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("(", machine_r4.products.length, ")");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_27_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](": ", machine_r4.products.join(", "), "");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_27_span_2_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_27_span_3_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (machine_r4.products == null ? null : machine_r4.products.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (machine_r4.products == null ? null : machine_r4.products.length) > 0);
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("(", machine_r4.workers.length, ")");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](": ", machine_r4.workers.join(", "), "");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_p_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("(", machine_r4.products.length, ")");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_p_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](": ", machine_r4.products.join(", "), "");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_p_7_span_4_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_p_7_span_5_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, "machine.products"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (machine_r4.products == null ? null : machine_r4.products.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (machine_r4.products == null ? null : machine_r4.products.length) > 0);
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "machine.parts.partNumber"), " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r41.partNumber, " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "machine.parts.partDescription"), " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r42.partDescription, " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "machine.parts.partCustomCharacter01"), " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r43.partCustomCharacter01, " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 39);
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 40);
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](6, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_th_7_Template, 3, 3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_td_8_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](9, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_th_10_Template, 3, 3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_td_11_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](12, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_th_13_Template, 3, 3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_td_14_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_tr_15_Template, 1, 0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_tr_16_Template, 1, 0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 4, "machine.products"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", machine_r4.workOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx_r23.partTableDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx_r23.partTableDisplayedColumns);
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_span_9_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](": ", machine_r4.workOrder, "");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_span_9_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate5"]("", machine_r4.workOrders[0].qtyOrdered, " / ", machine_r4.workOrders[0].qtyCompleted, " / ", machine_r4.workOrders[0].qtyToFix, " / ", machine_r4.workOrders[0].qtyCompletedWithLogs, " / ", machine_r4.workOrders[0].qtyRejected, " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_span_9_span_5_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_span_9_span_11_Template, 2, 5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 4, "machine.workOrder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", machine_r4.workOrders[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 6, "machine.workOrderQuantities"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (machine_r4.workOrders == null ? null : machine_r4.workOrders.length) > 0);
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "machine.column.order"), " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r65.number, " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "machine.workOrders.qtyPlanned"), " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r66.qtyOrdered, " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "machine.workOrders.qtyCompleted"), " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r67.qtyCompleted, " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "machine.workOrders.qtyToFix"), " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r68.qtyToFix, " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "machine.workOrders.qtyCompletedWithLogs"), " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r69.qtyCompletedWithLogs, " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "machine.workOrders.qtyMissing"), " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", element_r70.qtyRejected, " ");
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 39);
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 40);
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](6, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_7_Template, 3, 3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_8_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](9, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_10_Template, 3, 3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_11_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](12, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_13_Template, 3, 3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_14_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](15, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_16_Template, 3, 3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_17_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](18, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_19_Template, 3, 3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_20_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](21, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_th_22_Template, 3, 3, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_td_23_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_tr_24_Template, 1, 0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_tr_25_Template, 1, 0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 4, "machine.workOrder"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", machine_r4.workOrders);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx_r25.workOrderTableDisplayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx_r25.workOrderTableDisplayedColumns);
} }
function MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card-content", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_span_5_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_span_6_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_p_7_Template, 6, 5, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_8_Template, 17, 6, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_span_9_Template, 12, 8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_ng_container_10_Template, 26, 6, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 7, "machine.workers"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (machine_r4.workers == null ? null : machine_r4.workers.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (machine_r4.workers == null ? null : machine_r4.workers.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.isMediumGrid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r11.isMediumGrid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.isMediumGrid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r11.isMediumGrid());
} }
const _c0 = function () { return { "display": "flex", "justify-content": "right" }; };
const _c1 = function () { return { "display": "grid", "justify-content": "right" }; };
const _c2 = function () { return { "color": "red" }; };
const _c3 = function () { return { "color": "green" }; };
function MachineSelectComponent_ng_container_10_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MachineSelectComponent_ng_container_10_mat_card_1_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r76); const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r74.goToMachineStatus(machine_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "engineering");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "sync_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "dsr-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dsrClick", function MachineSelectComponent_ng_container_10_mat_card_1_Template_dsr_button_dsrClick_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r76); const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r77.goToAttachment(machine_r4); })("click", function MachineSelectComponent_ng_container_10_mat_card_1_Template_dsr_button_click_16_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "mat-card-title", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, MachineSelectComponent_ng_container_10_mat_card_1_div_21_Template, 1, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "mat-card-subtitle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, MachineSelectComponent_ng_container_10_mat_card_1_span_25_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, MachineSelectComponent_ng_container_10_mat_card_1_span_26_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_27_Template, 4, 2, "mat-card-content", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, MachineSelectComponent_ng_container_10_mat_card_1_mat_card_content_28_Template, 11, 9, "mat-card-content", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const machine_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](ctx_r5.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("machine-disabled-card", !ctx_r5.hasPermission(machine_r4.id) || !machine_r4.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRippleColor", ctx_r5.alphaRipple(machine_r4 == null ? null : machine_r4.statusHexColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", !ctx_r5.isBigGrid() ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](39, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](40, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", machine_r4.statusIconAnimation == 2 || machine_r4.statusIconAnimation == 4 ? "red" : "green")("visibility", machine_r4.statusIconAnimation > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("blink", machine_r4.statusIconAnimation == 3 || machine_r4.statusIconAnimation == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", machine_r4.workOrderIconAnimation == 2 || machine_r4.workOrderIconAnimation == 4 ? "red" : "green")("visibility", machine_r4.workOrderIconAnimation > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("blink", machine_r4.workOrderIconAnimation == 4 || machine_r4.workOrderIconAnimation == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("color", machine_r4.workerIconAnimation == 2 || machine_r4.workerIconAnimation == 4 ? "red" : "green")("visibility", machine_r4.workerIconAnimation > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("blink", machine_r4.workerIconAnimation == 3 || machine_r4.workerIconAnimation == 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("visibility", machine_r4.itegrationStatus > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", machine_r4.itegrationStatus == 2 ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](41, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](42, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("visibility", machine_r4.attachmentUrl.length > 0 && !ctx_r5.isMediumGrid() ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 37, "machine.attachment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", machine_r4.statusHexColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", machine_r4.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", machine_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", machine_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", machine_r4.statusIconAnimation != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.isBigGrid());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r5.isBigGrid());
} }
function MachineSelectComponent_ng_container_10_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-card", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MachineSelectComponent_ng_container_10_mat_card_2_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r81.goToMachineStatus(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-card-content", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "precision_manufacturing");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function MachineSelectComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, MachineSelectComponent_ng_container_10_mat_card_1_Template, 29, 43, "mat-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, MachineSelectComponent_ng_container_10_mat_card_2_Template, 4, 0, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const machine_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", machine_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !machine_r4);
} }
class MachineSelectComponent {
    constructor(router, route, machineService, workOrderService, loaderService, sfcNavigator, notificationService, operatorAuthenticationService, dialog, focuRefreshService) {
        this.router = router;
        this.route = route;
        this.machineService = machineService;
        this.workOrderService = workOrderService;
        this.loaderService = loaderService;
        this.sfcNavigator = sfcNavigator;
        this.notificationService = notificationService;
        this.operatorAuthenticationService = operatorAuthenticationService;
        this.dialog = dialog;
        this.focuRefreshService = focuRefreshService;
        this.machines = [];
        this.machinesConfiguration = {};
        this.machinesIntegrationStauts = [];
        this.currentGrid = null;
        this.loading = true;
        this.isLandscape = true;
        this.hidePassword = true;
        this.loadingMachines = false;
        this.loadingWorkLogStatus = false;
        this.operatorLoginCode = "";
        this.currentOperator = null;
        this.workOrderTableDisplayedColumns = ['number', 'qtyOrdered', 'qtyCompleted', 'qtyToFix', 'qtyCompletedWithLogs', 'qtyRejected'];
        this.partTableDisplayedColumns = ['partNumber', 'partDescription', 'partCustomCharacter01'];
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.style = "";
        this.loginInputFocus = true;
        this.loaderService.getLoading().subscribe((v) => {
            setTimeout(() => this.loading = v);
        });
    }
    isSmallGrid() {
        return this.currentGrid[0] == 1;
    }
    isMediumGrid() {
        return this.currentGrid[0] >= 3 || this.currentGrid[1] >= 4;
    }
    isBigGrid() {
        return this.currentGrid[0] >= 4;
    }
    checkForWO() {
        console.log(this.machines);
        if (this.machines.length == 1) {
            if (this.machines[0].workOrderIconAnimation == 2) {
                if (this.blinker == null) {
                    this.blinker = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.interval)(1000);
                    this.sub = this.blinker.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.onDestroy$)).subscribe(x => {
                        if (this.style == "") {
                            this.style = "background-color: red;";
                        }
                        else {
                            this.style = "";
                        }
                    });
                }
            }
            else {
                if (this.sub != null)
                    this.sub.unsubscribe();
                this.blinker = null;
                this.style = "";
            }
        }
    }
    ngOnInit() {
        this.loadingMachines = false;
        this.loadMachinesConfiguration();
        this.loadMachines();
        this.getWorkLogTransferStatus();
        const secondsCounter = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.interval)(60000); // 10s
        // const secondsCounter = interval(30000); // 30s
        // const secondsCounter = interval(1000000000); // inf for debug
        this.subscription = secondsCounter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.onDestroy$)).subscribe(n => {
            if (!this.loadingMachines) {
                this.loadingMachines = true;
                this.loadMachines();
            }
        });
        this.focuRefreshService.focus.subscribe(x => {
            this.loginInputFocus = x;
        });
        const workLogTransferStatusCounter = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.interval)(60000);
        this.workLogStatusSubscription = workLogTransferStatusCounter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.onDestroy$)).subscribe(n => {
            if (!this.loadingWorkLogStatus) {
                this.loadingWorkLogStatus = true;
                this.getWorkLogTransferStatus();
            }
        });
        this.operatorAuthenticationService.currentUser.subscribe(user => {
            this.currentOperator = user;
        });
        this.operatorAuthenticationService.currentWorker.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.onDestroy$)).subscribe(worker => {
            if (this.machines.length == 1) {
                this.machineService.postApiMachineAssignWorkerToCurrentActivity({ workerId: worker.id, machineId: this.machines[0].id })
                    .subscribe((result) => {
                    if (result == true)
                        this.notificationService.showSuccessTranslated('machine.workerAssignedSuccessfully', 'Ok', null, false, 4000);
                    else
                        this.notificationService.showInfoTranslated('machine.workerUnassignedSuccessfully', 'Ok', null, false, 4000);
                    this.loadMachines();
                }, () => { }, () => { });
            }
        });
    }
    getWorkLogTransferStatus() {
        var machineIds = this.machinesConfiguration[this.currentGridKey].filter(x => x > -1);
        if (machineIds.length > 0) {
            this.workOrderService.postApiWorkOrderGetWorkLogTransferStatus(machineIds).subscribe((result) => {
                this.machinesIntegrationStauts = result;
                this.machines.forEach((m) => {
                    var _a, _b;
                    m.itegrationStatus = (_b = (_a = this.machinesIntegrationStauts) === null || _a === void 0 ? void 0 : _a.find(x => x.machineId == m.id)) === null || _b === void 0 ? void 0 : _b.transferStatus;
                });
            }, (error) => {
                // TODO: catch error
            }, () => {
                this.loadingWorkLogStatus = false;
            });
        }
    }
    ngOnDestroy() {
        this.onDestroy$.next();
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.isLandscape = window.innerWidth >= window.innerHeight;
    }
    onResize(event) {
        this.isLandscape = event.target.innerWidth >= event.target.innerHeight;
    }
    get currentGridKey() {
        return this.currentGrid[0] + '_' + this.currentGrid[1];
    }
    get machinesList() {
        const result = [];
        this.machinesConfiguration[this.currentGridKey].forEach((machineId) => {
            var existingMachine = this.machines.find(m => m.id == machineId);
            result.push(existingMachine !== null && existingMachine !== void 0 ? existingMachine : null);
        });
        // console.log(result);
        return result;
    }
    getGridStyles() {
        return {
            'grid-template-rows': `repeat(${this.isLandscape ? this.currentGrid[0] : this.currentGrid[1]}, 1fr)`,
            'grid-template-columns': `repeat(${this.isLandscape ? this.currentGrid[1] : this.currentGrid[0]}, 1fr)`
        };
    }
    loadMachinesConfiguration() {
        const value = localStorage.getItem(MachineSelectComponent.CONFIGURATION_KEY);
        if (value) {
            this.machinesConfiguration = JSON.parse(value);
        }
        let updateGrid = false;
        _machine_select_grid_configurations__WEBPACK_IMPORTED_MODULE_3__.MachineSelectGridConfiguration.forEach((tuple) => {
            var key = tuple[0] + '_' + tuple[1];
            if (!(key in this.machinesConfiguration)) {
                this.machinesConfiguration[key] = Array(tuple[0] * tuple[1]).fill(-1);
                updateGrid = true;
            }
        });
        if (updateGrid) {
            localStorage.setItem(MachineSelectComponent.CONFIGURATION_KEY, JSON.stringify(this.machinesConfiguration));
        }
        const currentGrid = localStorage.getItem(MachineSelectComponent.CURRENT_GRID_KEY);
        if (currentGrid) {
            this.currentGrid = JSON.parse(currentGrid);
        }
        if (!currentGrid || !(this.currentGridKey in this.machinesConfiguration)) {
            this.currentGrid = _machine_select_grid_configurations__WEBPACK_IMPORTED_MODULE_3__.MachineSelectGridConfiguration[0];
            localStorage.setItem(MachineSelectComponent.CURRENT_GRID_KEY, JSON.stringify(this.currentGrid));
        }
        console.log(this.currentGrid, this.currentGridKey);
        console.log(this.machinesConfiguration);
    }
    loadMachines() {
        var machineIds = this.machinesConfiguration[this.currentGridKey].filter(x => x > -1);
        if (machineIds.length > 0) {
            this.machineService.postApiMachine(machineIds).subscribe((result) => {
                this.machines = result.map(m => {
                    var _a, _b, _c, _d;
                    return {
                        id: m.id,
                        code: m.code,
                        name: m.name,
                        status: m.status,
                        statusDetail: m.statusDetail,
                        statusHexColor: m.hexColor || '#ffffff',
                        products: !this.isBigGrid() ? (_a = m.workOrders) === null || _a === void 0 ? void 0 : _a.map(p => p.partNumber + " (" + p.partUm + ") " + p.partDescription + " " + p.partCustomCharacter01) : m.products,
                        workers: m.workers,
                        statusIconAnimation: m.statusIconAnimation,
                        workOrderIconAnimation: m.workOrderIconAnimation,
                        workerIconAnimation: m.workerIconAnimation,
                        workOrder: m.workOrders != null ? (_b = m.workOrders[0]) === null || _b === void 0 ? void 0 : _b.number : [],
                        workOrders: m.workOrders,
                        itegrationStatus: (_d = (_c = this.machinesIntegrationStauts) === null || _c === void 0 ? void 0 : _c.find(x => x.machineId == m.id)) === null || _d === void 0 ? void 0 : _d.transferStatus,
                        attachmentUrl: m.attachmentUrl,
                        active: m.active
                    };
                });
            }, (error) => {
                // TODO: catch error
            }, () => {
                this.loadingMachines = false;
                this.checkForWO();
            });
        }
    }
    alphaRipple(hexColor) {
        return hexColor ? (0,src_app_common_utils_color_helper__WEBPACK_IMPORTED_MODULE_0__.alphaRipple)(hexColor) : 'rgba(0,0,0,0)';
    }
    goToSfc() {
        this.sfcNavigator.goToSfc();
    }
    goToAttachment(machine) {
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiRootUrl + "/api/Machine/GetOpenAttachment?machineId=" + machine.id; // wygląda na to że musi tak być trzeba będzie sprawdzać z API czy dobrze się wszystko wysyła
        window.open(url, "_blank");
    }
    goToMachineStatus(machine) {
        if (machine) {
            if (!machine.active) {
                this.notificationService.showWarningTranslated('machine.inactive', 'Ok', null, false, 4000);
            }
            else if (this.hasPermission(machine.id)) {
                this.router.navigate([machine.id, 'status'], { state: { machine }, relativeTo: this.route });
                this.operatorAuthenticationService.resetTimeout();
            }
            else if (this.currentOperator != null) {
                this.notificationService.showWarningTranslated('machine.accessDenied', 'Ok', null, false, 4000);
            }
            else {
                this.notificationService.showWarningTranslated('machine.loginFirst', 'Ok', null, false, 4000);
            }
        }
        else {
            this.notificationService.showInfoTranslated('machine.assignMachine', 'Ok', null, false, 4000);
        }
    }
    hasPermission(machineId) {
        var _a;
        return this.currentOperator && ((_a = this.currentOperator) === null || _a === void 0 ? void 0 : _a.workerMachinePermissions.map(p => p.machineId).includes(machineId));
    }
    openAdminPanel() {
        this.dialog.open(_machine_select_admin_panel_dialog_machine_select_admin_panel_dialog_component__WEBPACK_IMPORTED_MODULE_2__.MachineSelectAdminPanelDialogComponent, {
            height: '90vh',
            width: '90vw',
            data: {
            // title: 'common.deleteMessage',
            // message: 'common.deleteMessagePrompt',
            // translateData: { count: records.length }
            }
        }).afterClosed().subscribe((result) => {
            if (result) {
                this.notificationService.showSuccessTranslated('common.savedSuccessfully', 'Ok', null, false, 4000);
                this.subscription.unsubscribe();
                this.loadMachinesConfiguration();
                this.loadMachines();
                const secondsCounter = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.interval)(60000); // 10s
                // const secondsCounter = interval(30000); // 30s
                this.subscription = secondsCounter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.onDestroy$)).subscribe(n => this.loadMachines());
            }
        });
    }
    onLogin() {
        this.operatorAuthenticationService.login(this.operatorLoginCode);
        this.operatorLoginCode = "";
    }
    togglePasswordVisibility() {
        this.hidePassword = !this.hidePassword;
    }
}
MachineSelectComponent.CONFIGURATION_KEY = 'DSR_PT_MACHINES_SELECT_PANEL_CONFIGURATION';
MachineSelectComponent.CURRENT_GRID_KEY = 'DSR_PT_MACHINES_SELECT_PANEL_CURRENT_GRID';
MachineSelectComponent.LOGOUT_TIMEOUT_KEY = 'DSR_PT_LOGOUT_TIMEOUT';
MachineSelectComponent.ɵfac = function MachineSelectComponent_Factory(t) { return new (t || MachineSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_4__.MachineService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_4__.WorkOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_6__.SfcNavigatorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](dsr_toolkit__WEBPACK_IMPORTED_MODULE_14__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_7__.OperatorAuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_common_services_focus_refresh_service__WEBPACK_IMPORTED_MODULE_8__.FocusRefreshService)); };
MachineSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: MachineSelectComponent, selectors: [["app-machine-select"]], hostBindings: function MachineSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("resize", function MachineSelectComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"]);
    } }, decls: 11, vars: 22, consts: [[1, "header"], ["appearance", "dsrRoundBorder", "icon", "login", "minWidth", "30vw", 3, "value", "hideText", "prefixIcon", "label", "focus", "valueChange", "enterPress", "prefixButtonClick"], ["appearance", "dsrRound", 3, "disabled", "dsrClick"], ["appearance", "dsrRound", 3, "margin-right", "dsrClick", 4, "ngIf"], [1, "content", 3, "ngStyle"], [4, "ngFor", "ngForOf"], ["appearance", "dsrRound", 3, "dsrClick"], ["class", "machine-card", "matRipple", "", 3, "machine-disabled-card", "matRippleColor", "style", "click", 4, "ngIf"], ["class", "machine-empty-card", 3, "click", 4, "ngIf"], ["matRipple", "", 1, "machine-card", 3, "matRippleColor", "click"], [1, "notification-icons"], [3, "ngStyle"], [2, "display", "flex"], [1, "material-icons-outlined"], [2, "size", "10px", 3, "dsrClick", "click"], [1, "machine-card-title"], ["mat-card-avatar", "", "class", "machine-card-title-status", 3, "background", 4, "ngIf"], [1, "machine-card-subtitle"], ["style", "font-family: 'Roboto Mono';", 4, "ngIf"], [4, "ngIf"], ["class", "machine-card-content", 4, "ngIf"], ["mat-card-avatar", "", 1, "machine-card-title-status"], [2, "font-family", "Roboto Mono"], [1, "details-paragraph", "details-paragraph-small"], [1, "machine-card-content"], [1, "details-paragraph", 2, "margin-bottom", "4px"], [2, "font-weight", "500"], ["style", "font-weight: 500;", 4, "ngIf"], ["class", "details-paragraph", "style", "margin-bottom: 4px;", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "partNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "partDescription"], ["matColumnDef", "partCustomCharacter01"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["matColumnDef", "number"], ["matColumnDef", "qtyOrdered"], ["matColumnDef", "qtyCompleted"], ["matColumnDef", "qtyToFix"], ["matColumnDef", "qtyCompletedWithLogs"], ["matColumnDef", "qtyRejected"], [1, "machine-empty-card", 3, "click"], [1, "scaled-icons-wrapper", 2, "display", "flex", "height", "100%"], [1, "material-icons-outlined", 2, "margin", "auto"]], template: function MachineSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "dsr-search-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function MachineSelectComponent_Template_dsr_search_field_valueChange_1_listener($event) { return ctx.operatorLoginCode = $event; })("enterPress", function MachineSelectComponent_Template_dsr_search_field_enterPress_1_listener() { return ctx.onLogin(); })("prefixButtonClick", function MachineSelectComponent_Template_dsr_search_field_prefixButtonClick_1_listener() { return ctx.togglePasswordVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "dsr-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dsrClick", function MachineSelectComponent_Template_dsr_button_dsrClick_3_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, MachineSelectComponent_dsr_button_7_Template, 3, 5, "dsr-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, MachineSelectComponent_ng_container_10_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("margin-right", 1, "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 18, "machine.operatorCode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.operatorLoginCode)("hideText", ctx.hidePassword)("prefixIcon", ctx.hidePassword ? "visibility_off" : "visibility")("focus", ctx.loginInputFocus);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("margin-right", 1, "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.operatorLoginCode || ctx.operatorLoginCode.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 20, "common.login"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("flex", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.currentOperator == null ? null : ctx.currentOperator.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("big-font", ctx.isSmallGrid());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx.getGridStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.machinesList);
    } }, directives: [dsr_toolkit__WEBPACK_IMPORTED_MODULE_14__.SearchFieldComponent, dsr_toolkit__WEBPACK_IMPORTED_MODULE_14__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatRow], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  --multiplier: 1;\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n\n.big-font[_ngcontent-%COMP%] {\n  --multiplier: 2;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: grid;\n  grid-gap: 1.5rem 1.5rem;\n  gap: 1.5rem 1.5rem;\n}\n\n.content[_ngcontent-%COMP%]   .machine-card[_ngcontent-%COMP%] {\n  border: 5px solid #424242;\n  padding: calc(var(--multiplier) * 1rem);\n  box-sizing: border-box;\n}\n\n.content[_ngcontent-%COMP%]   .machine-card[_ngcontent-%COMP%]    .mat-card-header-text {\n  margin: 0;\n}\n\n.content[_ngcontent-%COMP%]   .machine-card[_ngcontent-%COMP%]    .mat-card-header-text .mat-card-avatar {\n  height: calc(var(--multiplier) * 2rem);\n  width: calc(var(--multiplier) * 2rem);\n}\n\n.content[_ngcontent-%COMP%]   .machine-card[_ngcontent-%COMP%]   .machine-card-title[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  font-size: calc(var(--multiplier) * 1em);\n  line-height: 1.5em;\n}\n\n.content[_ngcontent-%COMP%]   .machine-card[_ngcontent-%COMP%]   .machine-card-title[_ngcontent-%COMP%]   .machine-card-title-status[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: calc(var(--multiplier) * 1rem);\n}\n\n.content[_ngcontent-%COMP%]   .machine-card[_ngcontent-%COMP%]   .machine-card-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  font-size: calc(var(--multiplier) * 0.75em);\n  line-height: 1.5em;\n}\n\n.content[_ngcontent-%COMP%]   .machine-card[_ngcontent-%COMP%]   .machine-card-content[_ngcontent-%COMP%] {\n  font-size: calc(var(--multiplier) * 0.6em);\n  line-height: 2em;\n}\n\n.content[_ngcontent-%COMP%]   .machine-disabled-card[_ngcontent-%COMP%] {\n  background-color: rgba(66, 66, 66, 0.25);\n  box-shadow: none;\n}\n\n.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%]   .machine-empty-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  box-shadow: none;\n}\n\n.content[_ngcontent-%COMP%]   .details-paragraph[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n\n.content[_ngcontent-%COMP%]   .details-paragraph-small[_ngcontent-%COMP%] {\n  font-size: medium;\n}\n\n.content[_ngcontent-%COMP%]   .notification-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(var(--multiplier) * 1rem);\n  right: calc(var(--multiplier) * 1rem);\n}\n\n.content[_ngcontent-%COMP%]   .notification-icons[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  width: calc(var(--multiplier) * 2rem);\n  height: calc(var(--multiplier) * 2rem);\n  font-size: calc(var(--multiplier) * 2rem);\n}\n\n.blink[_ngcontent-%COMP%] {\n  animation: blinker 1s step-start infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmUtc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFHRSxpQkFBQTtFQUNBLGtCQUFBO0FBUko7O0FBWUE7RUFDRSxlQUFBO0FBVEY7O0FBWUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQVRGOztBQVlBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFBQSxrQkFBQTtBQVZGOztBQVlFO0VBQ0UseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0FBVko7O0FBWUk7RUFDRSxTQUFBO0FBVk47O0FBWU07RUFFRSxzQ0FBQTtFQUNBLHFDQUFBO0FBWFI7O0FBZUk7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBYk47O0FBZU07RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0FBYlI7O0FBaUJJO0VBQ0Usa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBZk47O0FBa0JJO0VBQ0UsMENBQUE7RUFDQSxnQkFBQTtBQWhCTjs7QUFvQkU7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0FBbEJKOztBQW9CRTtFQUNFLFdBQUE7QUFsQko7O0FBb0JFO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtBQWxCSjs7QUFxQkU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFuQko7O0FBc0JFO0VBQ0UsaUJBQUE7QUFwQko7O0FBdUJFO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0FBckJKOztBQXVCSTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EseUNBQUE7QUFyQk47O0FBMEJBO0VBQ0UseUNBQUE7QUF2QkY7O0FBMEJBO0VBQ0U7SUFDRSxVQUFBO0VBdkJGO0FBQ0YiLCJmaWxlIjoibWFjaGluZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICd+QGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xyXG5cclxuJGhlYWRlci1mb250LXNpemU6IG1hdC5mb250LXNpemUobWF0LmRlZmluZS10eXBvZ3JhcGh5LWNvbmZpZygpLCB0aXRsZSk7XHJcblxyXG5cclxuXHJcbjpob3N0IHtcclxuICAtLW11bHRpcGxpZXI6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjoge1xyXG4gICAgbGVmdDogM3JlbTtcclxuICAgIHJpZ2h0OiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmJpZy1mb250IHtcclxuICAtLW11bHRpcGxpZXI6IDI7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgZ2FwOiAxLjVyZW0gMS41cmVtO1xyXG5cclxuICAubWFjaGluZS1jYXJkIHtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICM0MjQyNDI7XHJcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLW11bHRpcGxpZXIpICogMXJlbSk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgIDo6bmctZGVlcC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgIC5tYXQtY2FyZC1hdmF0YXIge1xyXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IGNhbGMoI3sgJGhlYWRlci1mb250LXNpemUgfSAqIDAuMTUpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1tdWx0aXBsaWVyKSAqIDJyZW0pO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLW11bHRpcGxpZXIpICogMnJlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFjaGluZS1jYXJkLXRpdGxlIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZm9udC1zaXplOiBjYWxjKHZhcigtLW11bHRpcGxpZXIpICogMWVtKTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG5cclxuICAgICAgLm1hY2hpbmUtY2FyZC10aXRsZS1zdGF0dXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tbXVsdGlwbGllcikgKiAxcmVtKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYWNoaW5lLWNhcmQtc3VidGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1tdWx0aXBsaWVyKSAqIDAuNzVlbSk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICAubWFjaGluZS1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBmb250LXNpemU6IGNhbGModmFyKC0tbXVsdGlwbGllcikgKiAwLjZlbSk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFjaGluZS1kaXNhYmxlZC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzQyNDI0MiwgMC4yNSk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm1hY2hpbmUtZW1wdHktY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZGV0YWlscy1wYXJhZ3JhcGgge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbHMtcGFyYWdyYXBoLXNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxuXHJcbiAgLm5vdGlmaWNhdGlvbi1pY29ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGModmFyKC0tbXVsdGlwbGllcikgKiAxcmVtKTtcclxuICAgIHJpZ2h0OiBjYWxjKHZhcigtLW11bHRpcGxpZXIpICogMXJlbSk7XHJcblxyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IGNhbGModmFyKC0tbXVsdGlwbGllcikgKiAycmVtKTtcclxuICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLW11bHRpcGxpZXIpICogMnJlbSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1tdWx0aXBsaWVyKSAqIDJyZW0pO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi5ibGluayB7XHJcbiAgYW5pbWF0aW9uOiBibGlua2VyIDFzIHN0ZXAtc3RhcnQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmtlciB7XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7976:
/*!************************************************************************************!*\
  !*** ./src/app/areas/machine/machine-status-list/machine-status-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MachineStatusListComponent": () => (/* binding */ MachineStatusListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_common_utils_color_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/utils/color-helper */ 8488);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ 4670);
/* harmony import */ var src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/loader.service */ 961);
/* harmony import */ var src_app_common_services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/sfc-navigator.service */ 9873);
/* harmony import */ var src_app_common_services_display_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/display-configuration.service */ 5653);
/* harmony import */ var src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/operator-authentication.service */ 1829);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 9790);




















function MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
} }
function MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", order_r18.orderId, " ");
} }
function MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_12_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", row_r8.orders);
} }
function MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
} }
function MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", order_r21.partDescription, " ");
} }
function MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_15_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", row_r8.orders);
} }
function MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
} }
function MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const worker_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", worker_r24.name, " ", worker_r24.surname, "");
} }
function MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_18_div_1_Template, 3, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", row_r8.workers);
} }
function MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
} }
function MachineStatusListComponent_ng_container_9_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MachineStatusListComponent_ng_container_9_ng_container_17_Template_div_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const row_r8 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r26.toggleRow(row_r8, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MachineStatusListComponent_ng_container_9_ng_container_17_Template_div_click_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const row_r8 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r28.toggleRow(row_r8, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MachineStatusListComponent_ng_container_9_ng_container_17_Template_div_click_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const row_r8 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r29.toggleRow(row_r8, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MachineStatusListComponent_ng_container_9_ng_container_17_Template_div_click_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const row_r8 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r30.toggleRow(row_r8, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_10_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MachineStatusListComponent_ng_container_9_ng_container_17_Template_div_click_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const row_r8 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r31.toggleRow(row_r8, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_12_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_13_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MachineStatusListComponent_ng_container_9_ng_container_17_Template_div_click_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const row_r8 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r32.toggleRow(row_r8, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_15_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_16_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MachineStatusListComponent_ng_container_9_ng_container_17_Template_div_click_17_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const row_r8 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r33.toggleRow(row_r8, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_18_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, MachineStatusListComponent_ng_container_9_ng_container_17_ng_container_19_Template, 1, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](30);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("grid-row", i_r9 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r7.selected.includes(row_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRippleColor", ctx_r7.alphaRipple(row_r8.statusHexColor))("matRippleTrigger", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("grid-row", i_r9 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", row_r8.statusHexColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r7.selected.includes(row_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("grid-row", i_r9 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r7.getTime(row_r8), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("grid-row", i_r9 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("[", row_r8.status, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r8 == null ? null : row_r8.statusReason, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r8 == null ? null : row_r8.isReasonRequired)("ngIfThen", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("grid-row", i_r9 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (row_r8.orders == null ? null : row_r8.orders.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r8 == null ? null : row_r8.isOrderRequired)("ngIfThen", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("grid-row", i_r9 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (row_r8.orders == null ? null : row_r8.orders.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r8 == null ? null : row_r8.isOrderRequired)("ngIfThen", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("grid-row", i_r9 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (row_r8.workers == null ? null : row_r8.workers.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", row_r8 == null ? null : row_r8.isWorkerRequired)("ngIfThen", _r5);
} }
function MachineStatusListComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, MachineStatusListComponent_ng_container_9_ng_container_17_Template, 20, 36, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 6, "machine.column.time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 8, "machine.column.status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 10, "machine.column.order"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 12, "machine.column.part"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 14, "machine.column.worker"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.dataSource);
} }
function MachineStatusListComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 1, "machine.noRecords"));
} }
function MachineStatusListComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 10, "machine.qtyRequired"), ": ", (tmp_0_0 = ctx_r2.productionData == null ? null : ctx_r2.productionData.qtyRequired) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 12, "machine.qtyCompleted"), ": ", (tmp_1_0 = ctx_r2.productionData == null ? null : ctx_r2.productionData.qtyCompleted) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 14, "machine.qtyMissing"), ": ", (tmp_2_0 = ctx_r2.productionData == null ? null : ctx_r2.productionData.qtyMissing) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 16, "machine.qtyCompletedWithLogs"), ": ", (tmp_3_0 = ctx_r2.productionData == null ? null : ctx_r2.productionData.qtyCompletedWithLogs) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 18, "machine.qtyToFix"), ": ", (tmp_4_0 = ctx_r2.productionData == null ? null : ctx_r2.productionData.qtyToFix) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "-", "");
} }
function MachineStatusListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-bottom", 16, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 4, "machine.selectedRows"), ": ", (ctx_r3.selected == null ? null : ctx_r3.selected.length) || 0, "");
} }
function MachineStatusListComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class MachineStatusListComponent {
    constructor(router, route, machineService, loaderService, sfcNavigator, displayConfigurationService, operatorAuthenticationService) {
        this.router = router;
        this.route = route;
        this.machineService = machineService;
        this.loaderService = loaderService;
        this.sfcNavigator = sfcNavigator;
        this.displayConfigurationService = displayConfigurationService;
        this.operatorAuthenticationService = operatorAuthenticationService;
        this.loading = true;
        this.machine = null;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.dates = [];
        this.shifts = [];
        this.dataSource = [];
        this.selected = [];
        this.status = null;
        this.machineProductionDisplayMethod = -1;
        this.productionData = null;
        this.initialized = false;
        this.SHIFTS = [
            { id: 1, startTime: 360, endTime: 840 },
            { id: 2, startTime: 840, endTime: 1320 },
            { id: 3, startTime: 1320, endTime: 360 },
        ];
        this.changeShiftDisabled = false;
        if (!this.operatorAuthenticationService.isLoggedIn) {
            this.goToMachineSelect();
        }
        this.changeShiftDisabled = this.operatorAuthenticationService.currentUserValue.role == "operatorPlus";
        this.machineId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        const tempStatus = this.router.getCurrentNavigation().extras.state;
        if (tempStatus !== undefined && 'machine' in tempStatus) {
            if ('selected' in tempStatus) {
                this.status = tempStatus;
            }
            else {
                this.machine = tempStatus.machine;
            }
        }
        // this.loaderService.getLoading().subscribe((v) => {
        //   setTimeout(() => this.loading = v);
        // });
    }
    goToSfc() {
        this.sfcNavigator.goToSfc();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.machineProductionDisplayMethod = yield this.displayConfigurationService.getMachineProductionDisplayMethod(this.machineId);
            this.loadProductionData();
            const secondsCounter = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.interval)(60000); // 10s
            // const secondsCounter = interval(30000); // 30s
            // const secondsCounter = interval(1000000000); // inf for debug
            this.subscription = secondsCounter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.onDestroy$)).subscribe(n => {
                if (!this.loading) {
                    this.loading = true;
                    this.loadProductionData();
                    this.loadData();
                }
            });
            for (let i = 0; i < 30; i++) {
                const date = moment__WEBPACK_IMPORTED_MODULE_0__().subtract(i, 'days').startOf('day');
                if (i === 0) {
                    this.dateValue = date.format('YYYY-MM-DD');
                }
                this.dates.push(new dsr_toolkit__WEBPACK_IMPORTED_MODULE_12__.SelectItem(date.format('YYYY-MM-DD'), date.format('DD-MM-YYYY')));
            }
            var shiftConfig = this.displayConfigurationService.getMachineShiftsConfiguration(this.machineId);
            shiftConfig.then((result) => {
                this.SHIFTS = [];
                result.shifts.forEach(s => this.SHIFTS.push({ id: s.id, startTime: s.startTime, endTime: s.endTime }));
                this.setUpShifts();
                this.initialized = true;
            });
        });
    }
    ngOnDestroy() {
        this.onDestroy$.next();
        this.subscription.unsubscribe();
    }
    loadProductionData() {
        if (this.machineProductionDisplayMethod == 0) {
            this.machineService.postApiMachineGetMachineProductionMethod1(this.machineId).subscribe((data) => {
                this.productionData = data;
                // qtyCompleted?: number;
                // qtyRequired?: number;
            });
        }
    }
    setUpShifts() {
        const today = moment__WEBPACK_IMPORTED_MODULE_0__();
        const currDay = moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day');
        this.SHIFTS.forEach(shift => {
            const shiftStart = currDay.clone().add(shift.startTime, 'minutes');
            let shiftEnd = currDay.clone().add(shift.endTime, 'minutes');
            if (shiftEnd < shiftStart) {
                shiftEnd = shiftEnd.add(1, 'days'); // Next day
            }
            this.shifts.push(new dsr_toolkit__WEBPACK_IMPORTED_MODULE_12__.SelectItem(shift.id, `${shiftStart.format('HH:mm')} - ${shiftEnd.format('HH:mm')}`, null, true));
            if (today.isBetween(shiftStart, shiftEnd)) {
                this.shiftValue = shift.id;
            }
        });
        this.activateShiftOptions();
    }
    activateShiftOptions() {
        if (this.shiftValue == null) {
            this.shiftValue = 1;
        }
        const today = moment__WEBPACK_IMPORTED_MODULE_0__();
        const selectedDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.dateValue);
        this.SHIFTS.forEach(shift => {
            const shiftStart = selectedDate.clone().add(shift.startTime, 'minutes');
            let shiftEnd = selectedDate.clone().add(shift.endTime, 'minutes');
            if (shiftEnd < shiftStart) {
                shiftEnd = shiftEnd.add(1, 'days'); // Next day
            }
            const selectItem = this.shifts.find(it => it.value === shift.id);
            selectItem.active = today.valueOf() > shiftStart.valueOf();
        });
        if (!this.shifts.find(s => s.value === this.shiftValue).active) {
            this.changeCurrentShiftValue();
        }
    }
    changeCurrentShiftValue() {
        const today = moment__WEBPACK_IMPORTED_MODULE_0__();
        const selectedDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.dateValue);
        this.SHIFTS.forEach(shift => {
            const shiftStart = selectedDate.clone().add(shift.startTime, 'minutes');
            let shiftEnd = selectedDate.clone().add(shift.endTime, 'minutes');
            if (shiftEnd < shiftStart) {
                shiftEnd = shiftEnd.add(1, 'days'); // Next day
            }
            if (today.isBetween(shiftStart, shiftEnd)) {
                this.shiftValue = shift.id;
            }
        });
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            while (!this.initialized) {
                yield new Promise(f => setTimeout(f, 100));
            }
            if (this.status) {
                this.dateValue = this.status.dateValue;
                this.shiftValue = this.status.shiftValue;
                this.machine = this.status.machine;
                this.selected = this.status.selected.map(row => row.id);
                this.loadData();
            }
            else if (!this.machine) {
                this.machineService.GetMachine(this.machineId).subscribe((m) => {
                    this.machine = { id: m.id, code: m.code, name: m.name, status: m.status, statusHexColor: m.hexColor || '#ffffff' };
                    this.loadData();
                }, (error) => {
                }, () => {
                });
            }
            else {
                this.loadData();
            }
        });
    }
    resetData() {
        if (this.initialized && !this.changeShiftDisabled) {
            this.activateShiftOptions();
            this.dataSource = [];
            this.selected = [];
            this.loadData();
        }
    }
    loadData() {
        this.loading = true;
        this.loaderService.setGlobalLoading(true);
        const data = { dayOfActivity: this.dateValue, machineId: this.machineId, shift: this.shiftValue };
        // console.log('loadData', data);
        this.machineService.postApiMachineGetMachineActivity(data).subscribe((result) => {
            const tempList = result.map(m => {
                return {
                    id: m.id,
                    status: m.status,
                    statusHexColor: m.statusHexColor || '#ffffff',
                    statusReason: m.statusReasons,
                    startTime: m.beginDate,
                    endTime: m.endDate,
                    orders: m.workOnRoutings.map(wor => ({
                        orderId: wor.number,
                        opNo: wor.operation,
                        partNo: wor.partNumber,
                        removable: wor.isUnassigningEnabled,
                        partDescription: wor.partDescription,
                        partDetails: wor.partDetails,
                    })),
                    workers: m.workers.map(w => ({ id: w.id, name: w.firstName, surname: w.lastName })),
                    isReasonRequired: m.statusReasonDetailRequired,
                    isOrderRequired: false,
                    isWorkerRequired: false
                };
            });
            this.dataSource = tempList.sort((a, b) => {
                if (a.startTime !== b.startTime) {
                    return moment__WEBPACK_IMPORTED_MODULE_0__(b.startTime).valueOf() - moment__WEBPACK_IMPORTED_MODULE_0__(a.startTime).valueOf();
                }
                if (a.endTime !== b.endTime) {
                    return moment__WEBPACK_IMPORTED_MODULE_0__(b.endTime).valueOf() - moment__WEBPACK_IMPORTED_MODULE_0__(a.endTime).valueOf();
                }
                return b.id - a.id;
            });
            setTimeout(() => {
                this.selected.forEach(id => this.triggerRiggle(id));
                this.loaderService.setGlobalLoading(false);
                this.loading = false;
            });
        }, (error) => {
            // TODO: catch error
            this.loaderService.setGlobalLoading(false);
            this.loading = false;
        }, () => {
        });
    }
    getTime(row) {
        const shift = this.SHIFTS.find(s => s.id === this.shiftValue);
        const currentDay = moment__WEBPACK_IMPORTED_MODULE_0__(this.dateValue).startOf('day');
        const shiftStart = currentDay.clone().add(shift.startTime, 'minutes');
        let shiftEnd = currentDay.clone().add(shift.endTime, 'minutes');
        if (shiftEnd < shiftStart) {
            shiftEnd = shiftEnd.add(1, 'days'); // Next day
        }
        const startDate = moment__WEBPACK_IMPORTED_MODULE_0__(row.startTime);
        let result = '';
        if (startDate < shiftStart) {
            result += `*${moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day').add(shift.startTime, 'minutes').format('HH:mm')}`;
        }
        else {
            result += `${startDate.format('HH:mm')}`;
        }
        result += ' - ';
        if (row.endTime) {
            const endDate = moment__WEBPACK_IMPORTED_MODULE_0__(row.endTime);
            if (endDate > shiftEnd) {
                result += `*${moment__WEBPACK_IMPORTED_MODULE_0__().startOf('day').add(shift.endTime, 'minutes').format('HH:mm')}`;
            }
            else {
                result += `${endDate.format('HH:mm')}`;
            }
        }
        return result;
    }
    triggerRiggle(id) {
        const rowIndex = this.dataSource.findIndex((row) => row.id === id);
        const matRipple = this.rippleList.toArray()[rowIndex];
        matRipple.launch({
            centered: true,
            persistent: true
        });
    }
    toggleRow(row, event) {
        const rowIndex = this.dataSource.indexOf(row, 0);
        const matRipple = this.rippleList.toArray()[rowIndex];
        const id = row.id;
        if (this.selected.includes(id)) {
            const selectedIdx = this.selected.indexOf(id, 0);
            if (selectedIdx > -1) {
                this.selected.splice(selectedIdx, 1);
                matRipple.fadeOutAll();
            }
        }
        else {
            this.selected.push(id);
            this.triggerRiggle(id);
        }
        event.stopPropagation();
    }
    alphaRipple(hexColor) {
        return (0,src_app_common_utils_color_helper__WEBPACK_IMPORTED_MODULE_1__.alphaRipple)(hexColor, 0.5);
    }
    goToMachineSelect() {
        this.operatorAuthenticationService.resetTimeout();
        this.router.navigate(['..', '..'], { relativeTo: this.route });
    }
    isAssignDetailsActive() {
        let result = false;
        if (this.selected.length > 0) {
            result = true;
            const firstRow = this.dataSource.find(row => row.id === this.selected[0]);
            const statusReasonValue = (firstRow === null || firstRow === void 0 ? void 0 : firstRow.statusReason) || null;
            this.selected.forEach(id => {
                const currRow = this.dataSource.find(row => row.id === id);
                const currStatusReason = (currRow === null || currRow === void 0 ? void 0 : currRow.statusReason) || null;
                if (currStatusReason !== statusReasonValue) {
                    result = false;
                }
            });
        }
        return result;
    }
    isAssignWorkOrderActive() {
        let result = false;
        if (this.selected.length > 0) {
            result = true;
            const firstRow = this.dataSource.find(row => row.id === this.selected[0]);
            const orders = firstRow === null || firstRow === void 0 ? void 0 : firstRow.orders;
            this.selected.forEach(id => {
                var _a, _b;
                const currRow = this.dataSource.find(row => row.id === id);
                if (((_a = currRow === null || currRow === void 0 ? void 0 : currRow.orders) === null || _a === void 0 ? void 0 : _a.length) !== (orders === null || orders === void 0 ? void 0 : orders.length)) {
                    result = false;
                }
                else {
                    (_b = currRow === null || currRow === void 0 ? void 0 : currRow.orders) === null || _b === void 0 ? void 0 : _b.forEach(order => {
                        if (!orders.find(o => o.orderId === (order === null || order === void 0 ? void 0 : order.orderId) && o.opNo === (order === null || order === void 0 ? void 0 : order.opNo))) {
                            result = false;
                        }
                    });
                }
            });
        }
        return result;
    }
    isAssignWorkerActive() {
        let result = false;
        if (this.selected.length > 0) {
            result = true;
            const firstRow = this.dataSource.find(row => row.id === this.selected[0]);
            const workers = firstRow === null || firstRow === void 0 ? void 0 : firstRow.workers;
            this.selected.forEach(id => {
                var _a, _b;
                const currRow = this.dataSource.find(row => row.id === id);
                if (((_a = currRow === null || currRow === void 0 ? void 0 : currRow.workers) === null || _a === void 0 ? void 0 : _a.length) !== (workers === null || workers === void 0 ? void 0 : workers.length)) {
                    result = false;
                }
                else {
                    (_b = currRow === null || currRow === void 0 ? void 0 : currRow.workers) === null || _b === void 0 ? void 0 : _b.forEach(worker => {
                        if (!workers.find(w => w.id === worker.id)) {
                            result = false;
                        }
                    });
                }
            });
        }
        return result;
    }
    getCurrentStatus() {
        return {
            machine: this.machine,
            shiftValue: this.shiftValue,
            dateValue: this.dateValue,
            selected: this.selected.map(id => this.dataSource.find((row) => row.id === id))
        };
    }
    goToReasonForm() {
        this.operatorAuthenticationService.resetTimeout();
        this.router.navigate(['reason'], { state: this.getCurrentStatus(), relativeTo: this.route });
    }
    goToWorkOrderForm() {
        this.operatorAuthenticationService.resetTimeout();
        this.router.navigate(['workorder'], { state: this.getCurrentStatus(), relativeTo: this.route });
    }
    goToWorkerForm() {
        this.operatorAuthenticationService.resetTimeout();
        this.router.navigate(['worker'], { state: this.getCurrentStatus(), relativeTo: this.route });
    }
}
MachineStatusListComponent.ɵfac = function MachineStatusListComponent_Factory(t) { return new (t || MachineStatusListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.MachineService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_4__.SfcNavigatorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_services_display_configuration_service__WEBPACK_IMPORTED_MODULE_5__.DisplayConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_6__.OperatorAuthenticationService)); };
MachineStatusListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: MachineStatusListComponent, selectors: [["app-machine-status-list"]], viewQuery: function MachineStatusListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.rippleList = _t);
    } }, decls: 33, vars: 45, consts: [[1, "header"], [1, "mat-headline", 2, "margin", "auto"], ["icon", "today", 3, "items", "value", "disabled", "allowClear", "valueChange"], ["icon", "engineering", 3, "items", "value", "disabled", "allowClear", "valueChange"], [1, "content"], [2, "flex", "1", "display", "flex", "flex-flow", "column"], [1, "grid-container"], [4, "ngIf"], [1, "side-panel"], [1, "mat-title", 2, "margin", "auto"], [1, "spacer"], ["class", "amount-div", 3, "margin-bottom", 4, "ngIf"], ["appearance", "dsrRoundNegativeOutline", 2, "width", "100%", 3, "dsrClick"], ["appearance", "dsrRound", 2, "width", "100%", 3, "disabled", "dsrClick"], [2, "display", "none"], ["rippleTrigger", ""], ["missingField", ""], [1, "mat-h3", "grid-cell"], [4, "ngFor", "ngForOf"], ["matRipple", "", 1, "ripple-row", 3, "matRippleColor", "matRippleTrigger", "click"], [1, "grid-cell", 2, "grid-column", "1", 3, "click"], [1, "status-dot"], [1, "grid-cell", 2, "grid-column", "2", 3, "click"], [1, "grid-cell", 2, "grid-column", "3", 3, "click"], [2, "font-family", "Roboto Mono"], [4, "ngIf", "ngIfThen"], [1, "grid-cell", 2, "grid-column", "4", 3, "click"], [1, "grid-cell", 2, "grid-column", "5", 3, "click"], [1, "grid-cell", 2, "grid-column", "6", 3, "click"], [2, "margin-right", "16px"], [1, "full-container-wrapper"], [1, "mat-headline", 2, "margin", "0"], [2, "margin", "auto"], [1, "amount-div"], [1, "missing-field-wrapper"], [1, "material-icons-outlined"]], template: function MachineStatusListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "dsr-select-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function MachineStatusListComponent_Template_dsr_select_field_valueChange_3_listener($event) { return ctx.dateValue = $event; })("valueChange", function MachineStatusListComponent_Template_dsr_select_field_valueChange_3_listener() { return ctx.resetData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "dsr-select-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function MachineStatusListComponent_Template_dsr_select_field_valueChange_4_listener($event) { return ctx.shiftValue = $event; })("valueChange", function MachineStatusListComponent_Template_dsr_select_field_valueChange_4_listener() { return ctx.resetData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, MachineStatusListComponent_ng_container_9_Template, 18, 16, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, MachineStatusListComponent_ng_container_10_Template, 5, 3, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, MachineStatusListComponent_ng_container_14_Template, 16, 20, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MachineStatusListComponent_div_16_Template, 3, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "dsr-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dsrClick", function MachineStatusListComponent_Template_dsr_button_dsrClick_17_listener() { return ctx.goToMachineSelect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "dsr-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dsrClick", function MachineStatusListComponent_Template_dsr_button_dsrClick_20_listener() { return ctx.goToReasonForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "dsr-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dsrClick", function MachineStatusListComponent_Template_dsr_button_dsrClick_23_listener() { return ctx.goToWorkOrderForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "dsr-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dsrClick", function MachineStatusListComponent_Template_dsr_button_dsrClick_26_listener() { return ctx.goToWorkerForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, MachineStatusListComponent_ng_template_31_Template, 3, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-right", 16, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.machine == null ? null : ctx.machine.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("flex", 1)("margin-right", 16, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.dates)("value", ctx.dateValue)("disabled", ctx.changeShiftDisabled)("allowClear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("flex", 1)("margin-right", 16, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.shifts)("value", ctx.shiftValue)("disabled", ctx.changeShiftDisabled)("allowClear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.dataSource.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.machine == null ? null : ctx.machine.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.machineProductionDisplayMethod == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-bottom", 16, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 37, "machine.changeMachine"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-bottom", 16, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isAssignDetailsActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 39, "machine.assignStatusReason"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-bottom", 16, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isAssignWorkOrderActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 41, "machine.assignWorkOrder"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isAssignWorkerActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 43, "machine.assignWorker"), "");
    } }, directives: [dsr_toolkit__WEBPACK_IMPORTED_MODULE_12__.SelectFieldComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, dsr_toolkit__WEBPACK_IMPORTED_MODULE_12__.ButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n@media all and (min-width: 1080px) {\n  .content[_ngcontent-%COMP%] {\n    flex-flow: row;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n\n@media not all and (min-width: 1080px) {\n  .content[_ngcontent-%COMP%] {\n    flex-flow: column-reverse;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n    flex-flow: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n    flex: 0;\n  }\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: flex;\n  overflow-y: auto;\n}\n\n.content[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: 300px repeat(5, 1fr);\n  grid-column-gap: 1rem;\n  column-gap: 1rem;\n  grid-row-gap: 1rem;\n  row-gap: 1rem;\n  padding-right: 8px;\n}\n\n.content[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .full-container-wrapper[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin: auto;\n}\n\n.content[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .ripple-row[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  border-radius: 0.5rem;\n  min-height: 1.5em;\n  grid-column: 1/-1;\n  background-color: #424242;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.content[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .ripple-row.active[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.content[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  z-index: 1;\n  white-space: nowrap;\n}\n\n.content[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 50%;\n  flex-shrink: 0;\n  object-fit: cover;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n\n.content[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .grid-cell[_ngcontent-%COMP%]   .status-dot.active[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%]   .amount-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.missing-field-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  opacity: 0.8;\n}\n\n.missing-field-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n  font-size: 1.5em;\n  text-shadow: 0px 0px 15px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmUtc3RhdHVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxjb3JlXFxzdHlsZVxcX2VsZXZhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUdFLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBTEY7O0FBUUE7RUFDRTtJQUNFLGNBQUE7RUFMRjtFQU9FO0lBQ0UsaUJBQUE7RUFMSjtFQU9JO0lBQ0UsT0FBQTtFQUxOO0FBQ0Y7O0FBVUE7RUFDRTtJQUNFLHlCQUFBO0VBUkY7RUFVRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsNkJBQUE7RUFSSjtFQVVJO0lBQ0UsT0FBQTtFQVJOO0FBQ0Y7O0FBYUE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVhGOztBQWFFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7QUFYSjs7QUFhSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQVhOOztBQWNJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLHlCQUFBO0VDb0hKLHlEQUFBO0VBdENBLHlIQUFBO0FEekZGOztBQWVNO0VDMEVKLDJIQUFBO0FEdEZGOztBQWlCSTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7RUFFRixVQUFBO0VBQ0EsbUJBQUE7QUFqQk47O0FBbUJNO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VDNkZOLHlEQUFBO0VBdENBLHdIQUFBO0FEdEVGOztBQW1CUTtFQ21ETiwwSEFBQTtBRG5FRjs7QUF1QkU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFyQko7O0FBdUJJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBckJOOztBQTBCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUF2QkY7O0FBeUJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBdkJKIiwiZmlsZSI6Im1hY2hpbmUtc3RhdHVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICd+QGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBtYXJnaW46IHtcclxuICAgIGxlZnQ6IDNyZW07XHJcbiAgICByaWdodDogM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMDgwcHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuXHJcbiAgICAuc2lkZS1wYW5lbCB7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAgICAgLnNwYWNlciB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG5vdCBhbGwgYW5kIChtaW4td2lkdGg6IDEwODBweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcblxyXG4gICAgLnNpZGUtcGFuZWwge1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgICAgIC5zcGFjZXIge1xyXG4gICAgICAgIGZsZXg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggcmVwZWF0KDUsIDFmcik7XHJcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xyXG4gICAgcm93LWdhcDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuXHJcbiAgICAuZnVsbC1jb250YWluZXItd3JhcHBlciB7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAucmlwcGxlLXJvdyB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxLjVlbTtcclxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XHJcbiAgICAgIEBpbmNsdWRlIG1hdC5lbGV2YXRpb24tdHJhbnNpdGlvbjtcclxuICAgICAgQGluY2x1ZGUgbWF0LmVsZXZhdGlvbigyKTtcclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBAaW5jbHVkZSBtYXQuZWxldmF0aW9uKDgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtY2VsbCB7XHJcbiAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgIC5zdGF0dXMtZG90IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIEBpbmNsdWRlIG1hdC5lbGV2YXRpb24tdHJhbnNpdGlvbjtcclxuICAgICAgICBAaW5jbHVkZSBtYXQuZWxldmF0aW9uKDApO1xyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBtYXQuZWxldmF0aW9uKDQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGUtcGFuZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5hbW91bnQtZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWlzc2luZy1maWVsZC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuXHJcbiAgLm1hdC1pY29uIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgwLDAsMCwxKTtcclxuICB9XHJcbn1cclxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptYXRoJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICd2YXJpYWJsZXMnO1xuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXJpYWJsZXMuJGZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJHByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIGVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRjb2xvciwgJG9wYWNpdHk6ICRvcGFjaXR5KSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCBtYXRoLmlzLXVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC5nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLmdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBvdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRjb2xvcixcbiAgICAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJHRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 4603:
/*!**************************************************************************************************!*\
  !*** ./src/app/areas/machine/machine-status-reason-form/machine-status-reason-form.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MachineStatusReasonFormComponent": () => (/* binding */ MachineStatusReasonFormComponent)
/* harmony export */ });
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services */ 4670);
/* harmony import */ var src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/loader.service */ 961);
/* harmony import */ var src_app_common_services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/sfc-navigator.service */ 9873);
/* harmony import */ var src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/operator-authentication.service */ 1829);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _form_machine_status_card_list_form_machine_status_card_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-machine-status-card-list/form-machine-status-card-list.component */ 1524);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 9790);












function MachineStatusReasonFormComponent_dsr_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "dsr-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dsrClick", function MachineStatusReasonFormComponent_dsr_button_16_Template_dsr_button_dsrClick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const reason_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.changeSelectedStatus(reason_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reason_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", reason_r1.text, " ");
} }
class MachineStatusReasonFormComponent {
    constructor(router, route, machineService, loaderService, notificationService, sfcNavigator, operatorAuthenticationService) {
        this.router = router;
        this.route = route;
        this.machineService = machineService;
        this.loaderService = loaderService;
        this.notificationService = notificationService;
        this.sfcNavigator = sfcNavigator;
        this.operatorAuthenticationService = operatorAuthenticationService;
        this.loading = true;
        this.status = null;
        this.selectedValue = null;
        this.statusReasonValues = [];
        this.status = this.router.getCurrentNavigation().extras.state;
        if (this.status == null || !this.operatorAuthenticationService.isLoggedIn) {
            this.goToMachineStatus();
        }
        this.loaderService.getLoading().subscribe((v) => {
            setTimeout(() => this.loading = v);
        });
    }
    goToSfc() {
        this.sfcNavigator.goToSfc();
    }
    ngOnInit() {
        var test = this.status.selected.map((x) => x.id);
        this.machineService.postApiMachineGetStatusReasons(test).subscribe((result) => {
            var _a;
            this.statusReasonValues = result.map((dictItem) => new dsr_toolkit__WEBPACK_IMPORTED_MODULE_6__.SelectItem(dictItem.id, dictItem.key, dictItem.name));
            this.statusReasonValues.sort((a, b) => a.text.localeCompare(b.text));
            if (((_a = this.status.selected) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                const reasonName = this.status.selected[0].statusReason;
                if (reasonName) {
                    this.selectedValue = this.statusReasonValues.find(sr => sr.details === reasonName).value;
                    // console.log(reasonName);
                    // console.log(this.statusReasonValues, this.statusReasonValues.find(sr => sr.details === reasonName), this.selectedValue);
                }
            }
        }, (error) => {
            // TODO: Catch error
        }, () => {
        });
    }
    goToMachineStatus() {
        this.operatorAuthenticationService.resetTimeout();
        this.router.navigate(['..'], { state: this.status, relativeTo: this.route });
    }
    changeSelectedStatus(reason) {
        this.selectedValue = reason.value;
        this.save();
    }
    save() {
        const data = {
            machineActivityIds: this.status.selected.map(m => m.id),
            statusReasonId: this.selectedValue
        };
        this.machineService.postApiMachineSetStatusReason(data).subscribe(() => {
            this.status.selected = [];
            this.notificationService.showSuccessTranslated('common.savedSuccessfully', 'Ok', null, false, 4000);
        }, () => { }, () => this.goToMachineStatus());
    }
}
MachineStatusReasonFormComponent.ɵfac = function MachineStatusReasonFormComponent_Factory(t) { return new (t || MachineStatusReasonFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.MachineService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](dsr_toolkit__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_common_services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_2__.SfcNavigatorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_3__.OperatorAuthenticationService)); };
MachineStatusReasonFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MachineStatusReasonFormComponent, selectors: [["app-machine-status-reason-form"]], decls: 26, vars: 18, consts: [[1, "header"], [1, "mat-headline", 2, "margin", "auto"], ["appearance", "dsrRound", 2, "visibility", "hidden"], [1, "content"], [1, "list-container"], [1, "statuses-list-wrapper"], [1, "mat-title", 2, "margin", "auto"], [3, "statuses"], [2, "margin", "1rem", 3, "vertical"], [2, "flex", "1"], ["style", "display: inline-block; width: 20vw;  padding: 5px;", 3, "dsrClick", 4, "ngFor", "ngForOf"], [1, "side-panel"], [1, "spacer"], ["appearance", "dsrRoundNegativeOutline", 2, "width", "100%", 3, "dsrClick"], [2, "display", "inline-block", "width", "20vw", "padding", "5px", 3, "dsrClick"]], template: function MachineStatusReasonFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "dsr-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-form-machine-status-card-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "mat-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, MachineStatusReasonFormComponent_dsr_button_16_Template, 2, 1, "dsr-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "dsr-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dsrClick", function MachineStatusReasonFormComponent_Template_dsr_button_dsrClick_23_listener() { return ctx.goToMachineStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 12, "machine.assignStatusReason"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("flex", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 14, "machine.selectedStatuses"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("statuses", ctx.status.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.statusReasonValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.status.machine == null ? null : ctx.status.machine.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.status.machine == null ? null : ctx.status.machine.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("margin-bottom", 16, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 16, "common.discard"), " ");
    } }, directives: [dsr_toolkit__WEBPACK_IMPORTED_MODULE_6__.ButtonComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _form_machine_status_card_list_form_machine_status_card_list_component__WEBPACK_IMPORTED_MODULE_4__.FormMachineStatusCardListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n@media all and (min-width: 1080px) {\n  .content[_ngcontent-%COMP%] {\n    flex-flow: row;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n\n@media not all and (min-width: 1080px) {\n  .content[_ngcontent-%COMP%] {\n    flex-flow: column-reverse;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n    flex-flow: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n    flex: 0;\n  }\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: flex;\n  overflow-y: auto;\n}\n\n.content[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .statuses-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n\n.content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmUtc3RhdHVzLXJlYXNvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUdFLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLGNBQUE7RUFGRjtFQUlFO0lBQ0UsaUJBQUE7RUFGSjtFQUlJO0lBQ0UsT0FBQTtFQUZOO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLHlCQUFBO0VBTEY7RUFPRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsNkJBQUE7RUFMSjtFQU9JO0lBQ0UsT0FBQTtFQUxOO0FBQ0Y7O0FBVUE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVVFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUFSSjs7QUFVSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQVJOOztBQVlFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBVkoiLCJmaWxlIjoibWFjaGluZS1zdGF0dXMtcmVhc29uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjoge1xyXG4gICAgbGVmdDogM3JlbTtcclxuICAgIHJpZ2h0OiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwODBweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG5cclxuICAgIC5zaWRlLXBhbmVsIHtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgICAuc3BhY2VyIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgbm90IGFsbCBhbmQgKG1pbi13aWR0aDogMTA4MHB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcclxuXHJcbiAgICAuc2lkZS1wYW5lbCB7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICAgLnNwYWNlciB7XHJcbiAgICAgICAgZmxleDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgLmxpc3QtY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5zdGF0dXNlcy1saXN0LXdyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaWRlLXBhbmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2031:
/*!**********************************************************************************************************!*\
  !*** ./src/app/areas/machine/machine-status-work-order-form/machine-status-work-order-form.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MachineStatusWorkOrderFormComponent": () => (/* binding */ MachineStatusWorkOrderFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _select_work_order_panel_dialog_select_work_order_panel_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-work-order-panel-dialog/select-work-order-panel-dialog.component */ 9737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ 4670);
/* harmony import */ var src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/loader.service */ 961);
/* harmony import */ var src_app_common_services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/sfc-navigator.service */ 9873);
/* harmony import */ var src_app_common_services_display_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/display-configuration.service */ 5653);
/* harmony import */ var src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/services/operator-authentication.service */ 1829);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _form_machine_status_card_list_form_machine_status_card_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-machine-status-card-list/form-machine-status-card-list.component */ 1524);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6627);



















function MachineStatusWorkOrderFormComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "dsr-search-field", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function MachineStatusWorkOrderFormComponent_ng_container_16_Template_dsr_search_field_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.inputValue = $event; })("enterPress", function MachineStatusWorkOrderFormComponent_ng_container_16_Template_dsr_search_field_enterPress_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r6.submitText($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-bottom", 16, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r0.inputValue)("debounceTime", 0)("focus", true)("allowClear", false);
} }
function MachineStatusWorkOrderFormComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "dsr-server-select-search-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("itemChange", function MachineStatusWorkOrderFormComponent_ng_container_17_Template_dsr_server_select_search_field_itemChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r7.itemValue = $event; })("itemChange", function MachineStatusWorkOrderFormComponent_ng_container_17_Template_dsr_server_select_search_field_itemChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r9.submitItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-bottom", 16, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", ctx_r1.itemValue)("focus", true)("allowClear", true)("searchFn", ctx_r1.searchFn);
} }
function MachineStatusWorkOrderFormComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "dsr-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dsrClick", function MachineStatusWorkOrderFormComponent_ng_container_18_Template_dsr_button_dsrClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.openSelectWorkOrderPanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-right", 1, "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r2.workOrders.length >= ctx_r2.assignedWorkOrderLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, "common.select"), "");
} }
function MachineStatusWorkOrderFormComponent_div_20_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MachineStatusWorkOrderFormComponent_div_20_ng_container_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const wo_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.removeWO(wo_r12.id, wo_r12.removable); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const wo_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](wo_r12.partNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](wo_r12.partDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](wo_r12.partDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !wo_r12.removable && !ctx_r13.isCurrentActivity);
} }
function MachineStatusWorkOrderFormComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MachineStatusWorkOrderFormComponent_div_20_ng_container_3_Template, 12, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wo_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](wo_r12.orderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.workOrderAssigningMethod == 1 || 2);
} }
class MachineStatusWorkOrderFormComponent {
    constructor(translate, router, route, machineService, loaderService, sfcNavigator, displayConfigurationService, notificationService, workOrderService, operatorAuthenticationService, dialog) {
        this.translate = translate;
        this.router = router;
        this.route = route;
        this.machineService = machineService;
        this.loaderService = loaderService;
        this.sfcNavigator = sfcNavigator;
        this.displayConfigurationService = displayConfigurationService;
        this.notificationService = notificationService;
        this.workOrderService = workOrderService;
        this.operatorAuthenticationService = operatorAuthenticationService;
        this.dialog = dialog;
        this.loading = true;
        this.status = null;
        this.inputValue = '';
        this.itemValue = null;
        this.workOrders = [];
        this.workOrderAssigningMethod = 0;
        this.assignedWorkOrderLimit = 0;
        this.unassigningWorkOrderEnabled = false;
        this.isCurrentActivity = false;
        this.selectCmpnt = null;
        this.searchFn = this.search.bind(this);
        this.status = this.router.getCurrentNavigation().extras.state;
        if (this.status == null || !this.operatorAuthenticationService.isLoggedIn) {
            this.goToMachineStatus();
        }
        this.loaderService.getLoading().subscribe((v) => {
            setTimeout(() => this.loading = v);
        });
    }
    goToSfc() {
        this.sfcNavigator.goToSfc();
    }
    ngOnInit() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (((_a = this.status.selected) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                const workOrders = this.status.selected[0].orders;
                if ((workOrders === null || workOrders === void 0 ? void 0 : workOrders.length) > 0) {
                    this.workOrders = workOrders;
                }
            }
            this.workOrderAssigningMethod = yield this.displayConfigurationService.getMachineWorkOrderAssigningMethod(this.status.machine.id);
            this.assignedWorkOrderLimit = yield this.displayConfigurationService.getAssignedWorkOrderLimit(this.status.machine.id);
            this.unassigningWorkOrderEnabled = yield this.displayConfigurationService.getUnassigningWorkOrderEnabled(this.status.machine.id);
            this.isCurrentActivity = this.status.selected.some(a => a.endTime == null);
            if (this.workOrderAssigningMethod == 2 && !(this.workOrders.length > 0)) {
                this.openSelectWorkOrderPanel();
            }
        });
    }
    goToMachineStatus() {
        this.operatorAuthenticationService.resetTimeout();
        this.router.navigate(['..'], { state: this.status, relativeTo: this.route });
    }
    search(search) {
        return this.workOrderService
            .postApiWorkOrderSearchWorkOrderRoutings({
            search: search,
            machineId: this.status.machine.id
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((items) => {
            return items.map(i => i);
        }));
    }
    submitItem(wor) {
        // console.log('submitItem value', wor);
        console.log('submitItem before', this.itemValue);
        if (wor != null) {
            // this.itemValue = null;
            // setTimeout(() => {
            //   this.selectCmpnt.clearValue();
            console.log('submitItem after', this.itemValue);
            // });
            const wo = {
                id: wor.value,
                orderId: wor.woNumber,
                opNo: wor.opNo,
                partNo: wor.partNumber,
                removable: true,
                partDescription: wor.partDescription,
                partDetails: wor.partDetails
            };
            const existingWoIdx = this.workOrders.findIndex(ewo => ewo.id === wo.id);
            if (existingWoIdx > -1) {
                this.workOrders.splice(existingWoIdx, 1);
            }
            else {
                var existingWo = this.workOrders.findIndex(ewo => ewo.opNo == wo.opNo && ewo.orderId == wo.orderId);
                if (existingWo == -1)
                    this.workOrders.push(wo);
            }
            setTimeout(() => {
                this.selectCmpnt.selectRef.resetValues();
            });
            setTimeout(() => {
                this.selectCmpnt.openSelect();
            }, 200);
            // this.selectCmpnt.openSelect();
            // console.log(this.selectCmpnt.selectRef.getMatSelectRef());
            // this.selectCmpnt.selectRef.getMatSelectRef().close();
            // this.selectCmpnt.selectRef.getMatSelectRef().focus();
            // this.selectCmpnt.selectRef.getMatSelectRef().open();
            // this.selectRef.getMatSelectRef()open().;)
        }
    }
    removeWO(woId, removable) {
        if (removable) {
            const existingWoIdx = this.workOrders.findIndex(ewo => ewo.id === woId);
            if (existingWoIdx > -1) {
                this.workOrders.splice(existingWoIdx, 1);
            }
            this.selectCmpnt.selectRef.resetValues();
            this.selectCmpnt.openSelect();
        }
        else {
            this.dialog.open(dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__.GeneralPromptDialogComponent, {
                data: {
                    title: 'machine.removeWorkOrderMessage'
                }
            }).afterClosed().subscribe((result) => {
                if (result) {
                    this.machineService.postApiMachineCreateNewMachineActivity(this.status.machine.id).subscribe((response) => {
                        this.notificationService.showSuccessTranslated('machine.addNewActivitySuccessful', 'Ok', null, false, 4000);
                        this.status.selected = [];
                        this.goToMachineStatus();
                    }, (error) => {
                    }, () => {
                    });
                }
            });
        }
    }
    submitText(value) {
        this.inputValue = '';
        this.machineService.postApiMachineValidateWorkOnRouting(value).subscribe((response) => {
            const wo = { orderId: response.number, opNo: response.operation };
            const existingWoIdx = this.workOrders.findIndex(ewo => ewo.orderId === wo.orderId && ewo.opNo === wo.opNo);
            if (existingWoIdx > -1) {
                this.workOrders.splice(existingWoIdx, 1);
            }
            else {
                this.workOrders.push(wo);
            }
        }, (error) => {
        }, () => {
        });
    }
    save() {
        if (this.workOrders.length > this.assignedWorkOrderLimit) {
            this.notificationService.showWarningTranslated('machine.workOrderLimit', 'Ok', null, false, 4000);
            return;
        }
        const data = {
            machineActivityIds: this.status.selected.map(m => m.id),
            workOnRoutings: this.workOrders.map(wo => ({ number: wo.orderId, operation: wo.opNo, routingId: wo.id }))
        };
        this.machineService.postApiMachineAssignWorkOrder(data).subscribe((response) => {
            if (response != null && response.machineCode != null) {
                var message = this.translate.instant('machine.workOrderRoutingAssignNotAllowedExceptionMessage', { workOrderNumber: response.wrokOrderNumber, machineCode: response.machineCode });
                this.notificationService.showError(message, 'Ok', false, 8000);
            }
            else {
                this.status.selected = [];
                this.notificationService.showSuccessTranslated('common.savedSuccessfully', 'Ok', null, false, 4000);
                this.goToMachineStatus();
            }
        }, () => {
        }, () => { });
    }
    openSelectWorkOrderPanel() {
        this.dialog.open(_select_work_order_panel_dialog_select_work_order_panel_dialog_component__WEBPACK_IMPORTED_MODULE_0__.SelectWorkOrderPanelDialogComponent, {
            width: '80vw',
            data: {
                machineId: this.status.machine.id
            }
        }).afterClosed().subscribe((result) => {
            if (result) {
                this.submitItem(result);
            }
        });
    }
}
MachineStatusWorkOrderFormComponent.ɵfac = function MachineStatusWorkOrderFormComponent_Factory(t) { return new (t || MachineStatusWorkOrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.MachineService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_3__.SfcNavigatorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_services_display_configuration_service__WEBPACK_IMPORTED_MODULE_4__.DisplayConfigurationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.WorkOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_5__.OperatorAuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog)); };
MachineStatusWorkOrderFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: MachineStatusWorkOrderFormComponent, selectors: [["app-machine-status-work-order-form"]], viewQuery: function MachineStatusWorkOrderFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__.ServerSelectSearchFieldComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.selectCmpnt = _t.first);
    } }, decls: 33, vars: 24, consts: [[1, "header"], [1, "mat-headline", 2, "margin", "auto"], ["appearance", "dsrRound", 2, "visibility", "hidden"], [1, "content"], [1, "list-container"], [1, "mat-title", 2, "margin", "auto"], [3, "statuses"], [2, "margin", "1rem", 3, "vertical"], [2, "flex", "1", "display", "flex", "flex-flow", "column"], [4, "ngIf"], [2, "flex", "1", "overflow-y", "auto", "padding-right", "8px", "padding-left", "8px"], ["class", "ripple-row", 4, "ngFor", "ngForOf"], [1, "side-panel"], [1, "spacer"], ["appearance", "dsrRoundNegativeOutline", 2, "width", "100%", 3, "dsrClick"], ["appearance", "dsrRound", 2, "width", "100%", 3, "dsrClick"], ["icon", "settings", "label", "machine.selectWorkOrder", "placeholder", "machine.selectWorkOrder", "style.width", "100%", 3, "value", "debounceTime", "focus", "allowClear", "valueChange", "enterPress"], ["icon", "settings", "label", "machine.selectWorkOrder", "placeholder", "machine.selectWorkOrder", "style.width", "100%", 3, "item", "focus", "allowClear", "searchFn", "itemChange"], ["appearance", "dsrRound", 3, "disabled", "dsrClick"], [1, "ripple-row"], [1, "mat-headline", 2, "margin", "auto 0", "flex", "1", "padding-right", "16px"], [1, "mat-title", 2, "margin", "auto 0", "flex", "1", "padding-right", "16px"], [2, "padding-right", "36px"], [1, "part-description"], [1, "scaled-icons-wrapper"], ["mat-button", "", "mat-icon-button", "", "aria-label", "Clear", "color", "accent", 3, "disabled", "click"]], template: function MachineStatusWorkOrderFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "dsr-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-form-machine-status-card-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "mat-divider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, MachineStatusWorkOrderFormComponent_ng_container_16_Template, 2, 6, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, MachineStatusWorkOrderFormComponent_ng_container_17_Template, 2, 6, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, MachineStatusWorkOrderFormComponent_ng_container_18_Template, 4, 6, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, MachineStatusWorkOrderFormComponent_div_20_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "dsr-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dsrClick", function MachineStatusWorkOrderFormComponent_Template_dsr_button_dsrClick_27_listener() { return ctx.goToMachineStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "dsr-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dsrClick", function MachineStatusWorkOrderFormComponent_Template_dsr_button_dsrClick_30_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 16, "machine.assignWorkOrder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("flex", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 18, "machine.selectedStatuses"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("statuses", ctx.status.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.workOrderAssigningMethod == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.workOrderAssigningMethod == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.workOrderAssigningMethod == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.workOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.status.machine.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.status.machine.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-bottom", 16, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 20, "common.discard"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 22, "common.save"), "");
    } }, directives: [dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__.ButtonComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _form_machine_status_card_list_form_machine_status_card_list_component__WEBPACK_IMPORTED_MODULE_6__.FormMachineStatusCardListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__.SearchFieldComponent, dsr_toolkit__WEBPACK_IMPORTED_MODULE_10__.ServerSelectSearchFieldComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n@media all and (min-width: 1080px) {\n  .content[_ngcontent-%COMP%] {\n    flex-flow: row;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n\n@media not all and (min-width: 1080px) {\n  .content[_ngcontent-%COMP%] {\n    flex-flow: column-reverse;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n    flex-flow: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n    flex: 0;\n  }\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: flex;\n  overflow-y: auto;\n}\n\n.content[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .statuses-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n\n.content[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .ripple-row[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.5rem;\n  min-height: 1.5em;\n  display: flex;\n  background-color: #424242;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  display: flex;\n}\n\n.part-description[_ngcontent-%COMP%] {\n  font: 500 1.5rem/2rem Roboto, \"Helvetica Neue\", sans-serif;\n  margin: auto 0;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmUtc3RhdHVzLXdvcmstb3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXGNvcmVcXHN0eWxlXFxfZWxldmF0aW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBR0UsaUJBQUE7RUFDQSxrQkFBQTtBQUpKOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQ0UsY0FBQTtFQUxGO0VBT0U7SUFDRSxpQkFBQTtFQUxKO0VBT0k7SUFDRSxPQUFBO0VBTE47QUFDRjs7QUFVQTtFQUNFO0lBQ0UseUJBQUE7RUFSRjtFQVVFO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSw2QkFBQTtFQVJKO0VBVUk7SUFDRSxPQUFBO0VBUk47QUFDRjs7QUFhQTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBYUU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtBQVhKOztBQWFJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBWE47O0FBY0k7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBRUEseUJBQUE7RUNpRkoseUhBQUE7QUQ3RkY7O0FBaUJFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FBZko7O0FBbUJBO0VBQ0UsMERBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtBQWhCRiIsImZpbGUiOiJtYWNoaW5lLXN0YXR1cy13b3JrLW9yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICd+QGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBtYXJnaW46IHtcclxuICAgIGxlZnQ6IDNyZW07XHJcbiAgICByaWdodDogM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMDgwcHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuXHJcbiAgICAuc2lkZS1wYW5lbCB7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICAgICAgLnNwYWNlciB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG5vdCBhbGwgYW5kIChtaW4td2lkdGg6IDEwODBweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uLXJldmVyc2U7XHJcblxyXG4gICAgLnNpZGUtcGFuZWwge1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbiAgICAgIC5zcGFjZXIge1xyXG4gICAgICAgIGZsZXg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gIC5saXN0LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuc3RhdHVzZXMtbGlzdC13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLnJpcHBsZS1yb3cge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcclxuICAgICAgQGluY2x1ZGUgbWF0LmVsZXZhdGlvbigyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaWRlLXBhbmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcbi5wYXJ0LWRlc2NyaXB0aW9ue1xyXG4gIGZvbnQ6IDUwMCAxLjVyZW0gLyAycmVtIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogYXV0byAwOyBcclxuICBmbGV4OiAxO1xyXG59IiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptYXRoJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICd2YXJpYWJsZXMnO1xuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXJpYWJsZXMuJGZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJHByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIGVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRjb2xvciwgJG9wYWNpdHk6ICRvcGFjaXR5KSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCBtYXRoLmlzLXVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC5nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLmdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBvdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRjb2xvcixcbiAgICAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJHRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 9737:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/areas/machine/machine-status-work-order-form/select-work-order-panel-dialog/select-work-order-panel-dialog.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectWorkOrderPanelDialogComponent": () => (/* binding */ SelectWorkOrderPanelDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services */ 4670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9790);







function SelectWorkOrderPanelDialogComponent_div_5_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, wo_r2.beginDate, "shortTime"), ")");
} }
function SelectWorkOrderPanelDialogComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectWorkOrderPanelDialogComponent_div_5_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const wo_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.selectkWorkOrder(wo_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SelectWorkOrderPanelDialogComponent_div_5_h2_3_Template, 3, 4, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](wo_r2.woNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", wo_r2.beginDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](wo_r2.partNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](wo_r2.partDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](wo_r2.partDetails);
} }
function SelectWorkOrderPanelDialogComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "machine.noWokrOrders"));
} }
class SelectWorkOrderPanelDialogComponent {
    constructor(data, matDialogRef, workOrderService) {
        this.data = data;
        this.matDialogRef = matDialogRef;
        this.workOrderService = workOrderService;
        this.workOrders = [];
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.workOrderService.postApiWorkOrderGetWorkOrderRoutingList(this.data.machineId).subscribe((result) => {
            this.workOrders = result;
        }, () => { }, () => { this.loading = false; });
    }
    clickCancel() {
        this.matDialogRef.close(null);
    }
    selectkWorkOrder(workOrder) {
        this.matDialogRef.close(workOrder);
    }
}
SelectWorkOrderPanelDialogComponent.ɵfac = function SelectWorkOrderPanelDialogComponent_Factory(t) { return new (t || SelectWorkOrderPanelDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.WorkOrderService)); };
SelectWorkOrderPanelDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectWorkOrderPanelDialogComponent, selectors: [["PT-select-work-order-panel-dialog"]], decls: 11, vars: 10, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 2, "height", "70%"], [2, "flex", "1", "overflow-y", "auto", "padding-right", "8px", "padding-left", "8px"], ["class", "ripple-row", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-dialog-actions", "", "align", "end", 2, "margin-bottom", "8px", "margin-top", "8px"], ["appearance", "dsrRoundNegativeOutline", 3, "dsrClick"], [1, "ripple-row", 3, "click"], [1, "mat-title", 2, "margin", "auto 0", "flex", "1", "padding-right", "16px"], ["class", "mat-title", "style", "margin: auto 0; flex: 1", 4, "ngIf"], [1, "mat-title", 2, "margin", "auto 0", "flex", "1"], [1, "part-description"], [1, "mat-headline", 2, "margin", "0"]], template: function SelectWorkOrderPanelDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SelectWorkOrderPanelDialogComponent_div_5_Template, 11, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SelectWorkOrderPanelDialogComponent_ng_container_6_Template, 5, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "dsr-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dsrClick", function SelectWorkOrderPanelDialogComponent_Template_dsr_button_dsrClick_8_listener() { return ctx.clickCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, "machine.selectWorkOrderTitle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.workOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.workOrders.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-right", 16, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, "common.discard"), "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, dsr_toolkit__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".ripple-row[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.5rem;\n  min-height: 1.5em;\n  display: flex;\n  background-color: #303030;\n}\n\n.part-description[_ngcontent-%COMP%] {\n  font: 500 1.5rem/2rem Roboto, \"Helvetica Neue\", sans-serif;\n  margin: auto 0;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC13b3JrLW9yZGVyLXBhbmVsLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFFQSx5QkFBQTtBQUZKOztBQUtBO0VBQ0UsMERBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtBQUZGIiwiZmlsZSI6InNlbGVjdC13b3JrLW9yZGVyLXBhbmVsLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnJpcHBsZS1yb3cge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgbWluLWhlaWdodDogMS41ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcbiAgfVxyXG5cclxuLnBhcnQtZGVzY3JpcHRpb257XHJcbiAgZm9udDogNTAwIDEuNXJlbSAvIDJyZW0gUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiBhdXRvIDA7IFxyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbiAgXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 2853:
/*!**************************************************************************************************!*\
  !*** ./src/app/areas/machine/machine-status-worker-form/machine-status-worker-form.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MachineStatusWorkerFormComponent": () => (/* binding */ MachineStatusWorkerFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services */ 4670);
/* harmony import */ var src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/loader.service */ 961);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var src_app_common_services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/sfc-navigator.service */ 9873);
/* harmony import */ var src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/operator-authentication.service */ 1829);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _form_machine_status_card_list_form_machine_status_card_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-machine-status-card-list/form-machine-status-card-list.component */ 1524);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 9790);













function MachineStatusWorkerFormComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MachineStatusWorkerFormComponent_div_18_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const worker_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.RemoveWorker(worker_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const worker_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", worker_r1.name, " ", worker_r1.surname, "");
} }
class MachineStatusWorkerFormComponent {
    constructor(router, route, machineService, loaderService, notificationService, sfcNavigator, operatorAuthenticationService) {
        this.router = router;
        this.route = route;
        this.machineService = machineService;
        this.loaderService = loaderService;
        this.notificationService = notificationService;
        this.sfcNavigator = sfcNavigator;
        this.operatorAuthenticationService = operatorAuthenticationService;
        this.loading = true;
        this.status = null;
        this.inputValue = '';
        this.workers = [];
        this.status = this.router.getCurrentNavigation().extras.state;
        if (this.status == null || !this.operatorAuthenticationService.isLoggedIn) {
            this.goToMachineStatus();
        }
        this.loaderService.getLoading().subscribe((v) => {
            setTimeout(() => this.loading = v);
        });
    }
    goToSfc() {
        this.sfcNavigator.goToSfc();
    }
    ngOnInit() {
        var _a;
        if (((_a = this.status.selected) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            const workers = this.status.selected[0].workers;
            if ((workers === null || workers === void 0 ? void 0 : workers.length) > 0) {
                this.workers = workers;
            }
        }
    }
    goToMachineStatus() {
        this.operatorAuthenticationService.resetTimeout();
        this.router.navigate(['..'], { state: this.status, relativeTo: this.route });
    }
    submit(value) {
        this.inputValue = '';
        var user = this.operatorAuthenticationService.currentUserValue;
        this.machineService.postApiMachineValidateWorker(value).subscribe((response) => {
            if (user.role == "operatorPlus" && user.id != response.id) {
                this.notificationService.showWarningTranslated('machine.assigningOnlyYourself', 'Ok', null, false, 4000);
                return;
            }
            const worker = { id: response.id, name: response.firstName, surname: response.lastName };
            const existingWorkerIdx = this.workers.findIndex(ewo => ewo.id === worker.id);
            if (existingWorkerIdx > -1) {
                this.workers.splice(existingWorkerIdx, 1);
            }
            else {
                this.workers.push(worker);
            }
        }, (error) => {
            if (error.status == 403)
                this.notificationService.showErrorTranslated('machine.inactiveWorker', 'Ok', null, false, 4000);
        }, () => {
        });
    }
    RemoveWorker(value) {
        const WorkerIdx = this.workers.findIndex(ewo => ewo.id === value.id);
        this.workers.splice(WorkerIdx, 1);
    }
    save() {
        const data = {
            machineActivityIds: this.status.selected.map(m => m.id),
            workerIds: this.workers.map(w => w.id)
        };
        this.machineService.postApiMachineAssignWorker(data).subscribe(() => {
            this.status.selected = [];
            this.notificationService.showSuccessTranslated('common.savedSuccessfully', 'Ok', null, false, 4000);
        }, () => { }, () => this.goToMachineStatus());
    }
}
MachineStatusWorkerFormComponent.ɵfac = function MachineStatusWorkerFormComponent_Factory(t) { return new (t || MachineStatusWorkerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.MachineService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](dsr_toolkit__WEBPACK_IMPORTED_MODULE_7__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_common_services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_2__.SfcNavigatorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_3__.OperatorAuthenticationService)); };
MachineStatusWorkerFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MachineStatusWorkerFormComponent, selectors: [["app-machine-status-worker-form"]], decls: 31, vars: 25, consts: [[1, "header"], [1, "mat-headline", 2, "margin", "auto"], ["appearance", "dsrRound", 2, "visibility", "hidden"], [1, "content"], [1, "list-container"], [1, "statuses-list-wrapper"], [1, "mat-title", 2, "margin", "auto"], [3, "statuses"], [2, "margin", "1rem", 3, "vertical"], [2, "flex", "1"], ["icon", "engineering", "label", "machine.selectWorker", "placeholder", "machine.selectWorker", "style.width", "100%", 3, "value", "debounceTime", "focus", "allowClear", "valueChange", "enterPress"], [2, "flex", "1", "overflow-y", "auto", "padding-right", "8px", "padding-left", "8px"], ["class", "ripple-row", 4, "ngFor", "ngForOf"], [1, "side-panel"], [1, "spacer"], ["appearance", "dsrRoundNegativeOutline", 2, "width", "100%", 3, "dsrClick"], ["appearance", "dsrRound", 2, "width", "100%", 3, "dsrClick"], [1, "ripple-row"], [1, "mat-headline", 2, "margin", "auto 0", "flex", "1"], [1, "scaled-icons-wrapper"], ["mat-button", "", "mat-icon-button", "", "aria-label", "Clear", "color", "accent", 3, "click"]], template: function MachineStatusWorkerFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "dsr-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "app-form-machine-status-card-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "mat-divider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "dsr-search-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function MachineStatusWorkerFormComponent_Template_dsr_search_field_valueChange_16_listener($event) { return ctx.inputValue = $event; })("enterPress", function MachineStatusWorkerFormComponent_Template_dsr_search_field_enterPress_16_listener($event) { return ctx.submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, MachineStatusWorkerFormComponent_div_18_Template, 7, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "dsr-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dsrClick", function MachineStatusWorkerFormComponent_Template_dsr_button_dsrClick_25_listener() { return ctx.goToMachineStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "dsr-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dsrClick", function MachineStatusWorkerFormComponent_Template_dsr_button_dsrClick_28_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 17, "machine.assignWorker"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("flex", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 19, "machine.selectedStatuses"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("statuses", ctx.status.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.inputValue)("debounceTime", 0)("focus", true)("allowClear", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.workers);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.status.machine.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.status.machine.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("margin-bottom", 16, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 21, "common.discard"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 23, "common.save"), "");
    } }, directives: [dsr_toolkit__WEBPACK_IMPORTED_MODULE_7__.ButtonComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _form_machine_status_card_list_form_machine_status_card_list_component__WEBPACK_IMPORTED_MODULE_4__.FormMachineStatusCardListComponent, dsr_toolkit__WEBPACK_IMPORTED_MODULE_7__.SearchFieldComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n@media all and (min-width: 1080px) {\n  .content[_ngcontent-%COMP%] {\n    flex-flow: row;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n\n@media not all and (min-width: 1080px) {\n  .content[_ngcontent-%COMP%] {\n    flex-flow: column-reverse;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n    flex-flow: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n  }\n  .content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n    flex: 0;\n  }\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  display: flex;\n  overflow-y: auto;\n}\n\n.content[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n\n.content[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .statuses-list-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n}\n\n.content[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]   .ripple-row[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.5rem;\n  min-height: 1.5em;\n  display: flex;\n  background-color: #424242;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.content[_ngcontent-%COMP%]   .side-panel[_ngcontent-%COMP%] {\n  margin-left: 32px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmUtc3RhdHVzLXdvcmtlci1mb3JtLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcY29yZVxcc3R5bGVcXF9lbGV2YXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFHRSxpQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBUUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUxGOztBQVFBO0VBQ0U7SUFDRSxjQUFBO0VBTEY7RUFPRTtJQUNFLGlCQUFBO0VBTEo7RUFPSTtJQUNFLE9BQUE7RUFMTjtBQUNGOztBQVVBO0VBQ0U7SUFDRSx5QkFBQTtFQVJGO0VBVUU7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLDZCQUFBO0VBUko7RUFVSTtJQUNFLE9BQUE7RUFSTjtBQUNGOztBQWFBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFYRjs7QUFhRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0FBWEo7O0FBYUk7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFYTjs7QUFjSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFFQSx5QkFBQTtFQ2lGSix5SEFBQTtBRDdGRjs7QUFpQkU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFmSiIsImZpbGUiOiJtYWNoaW5lLXN0YXR1cy13b3JrZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ35AYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xyXG5AaW1wb3J0ICd+QGFuZ3VsYXIvbWF0ZXJpYWwvdGhlbWluZyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIG1hcmdpbjoge1xyXG4gICAgbGVmdDogM3JlbTtcclxuICAgIHJpZ2h0OiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwODBweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG5cclxuICAgIC5zaWRlLXBhbmVsIHtcclxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICAgICAuc3BhY2VyIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgbm90IGFsbCBhbmQgKG1pbi13aWR0aDogMTA4MHB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcclxuXHJcbiAgICAuc2lkZS1wYW5lbCB7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICAgLnNwYWNlciB7XHJcbiAgICAgICAgZmxleDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgLmxpc3QtY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5zdGF0dXNlcy1saXN0LXdyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAucmlwcGxlLXJvdyB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgbWluLWhlaWdodDogMS41ZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xyXG4gICAgICBAaW5jbHVkZSBtYXQuZWxldmF0aW9uKDIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGUtcGFuZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1hdGgnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJ3ZhcmlhYmxlcyc7XG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZihtZXRhLnR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDFweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggMXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAxcHggMTRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAxcHggMThweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCAzcHggMTRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCAzcHggMTZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDRweCAyMHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA1cHggMjJweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDVweCAyNnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA2cHggMjhweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDZweCAzMnB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA3cHggMzRweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDhweCAzOHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCA4cHggNDBweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDlweCA0NHB4IDhweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCA5cHggNDZweCA4cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiR0cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcmlhYmxlcy4kZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRjb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kcHJlZml4OiAnbWF0LWVsZXZhdGlvbi16JztcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgdG8gYW4gZWxlbWVudCB0byBnaXZlIGl0IHRoZSBlbGV2YXRpb24gc3BlY2lmaWVkIGJ5ICR6VmFsdWUuXG4vLyBUaGUgJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQuXG5AbWl4aW4gZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJGNvbG9yLCAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkelZhbHVlKSAhPSBudW1iZXIgb3Igbm90IG1hdGguaXMtdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLmdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC5nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJGNvbG9yLFxuICAgICRvcGFjaXR5OiAkb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRwcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBlbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBwcml2YXRlLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgQHJldHVybiBib3gtc2hhZG93ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyBuZWVkZWQgdG8gaGF2ZSBhbiBlbGVtZW50IHRyYW5zaXRpb24gYmV0d2VlbiBlbGV2YXRpb25zLlxuLy8gVGhpcyBtaXhpbiBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50cyB3aG9zZSBlbGV2YXRpb24gdmFsdWVzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGVpclxuLy8gY29udGV4dCAoZS5nLiB3aGVuIGFjdGl2ZSBvciBkaXNhYmxlZCkuXG4vL1xuLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogQm90aCB0aGlzIG1peGluIGFuZCB0aGUgYWJvdmUgZnVuY3Rpb24gdXNlIGRlZmF1bHQgcGFyYW1ldGVycyBzbyB0aGV5IGNhblxuLy8gYmUgdXNlZCBpbiB0aGUgc2FtZSB3YXkgYnkgY2xpZW50cy5cbkBtaXhpbiBlbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBwcml2YXRlLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 112:
/*!*************************************************!*\
  !*** ./src/app/areas/machine/machine.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MACHINE_STATE_URL": () => (/* binding */ MACHINE_STATE_URL),
/* harmony export */   "MachineModule": () => (/* binding */ MachineModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/table */ 552);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var src_app_common_PT_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/PT-common.module */ 7614);
/* harmony import */ var _machine_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./machine-routing.module */ 7351);
/* harmony import */ var _machine_status_list_machine_status_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./machine-status-list/machine-status-list.component */ 7976);
/* harmony import */ var _machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./machine-select/machine-select.component */ 6075);
/* harmony import */ var _machine_status_reason_form_machine_status_reason_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./machine-status-reason-form/machine-status-reason-form.component */ 4603);
/* harmony import */ var _machine_status_work_order_form_machine_status_work_order_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./machine-status-work-order-form/machine-status-work-order-form.component */ 2031);
/* harmony import */ var _machine_status_worker_form_machine_status_worker_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./machine-status-worker-form/machine-status-worker-form.component */ 2853);
/* harmony import */ var _form_machine_status_card_list_form_machine_status_card_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-machine-status-card-list/form-machine-status-card-list.component */ 1524);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _machine_select_admin_panel_dialog_machine_select_admin_panel_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./machine-select-admin-panel-dialog/machine-select-admin-panel-dialog.component */ 8331);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _machine_status_work_order_form_select_work_order_panel_dialog_select_work_order_panel_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./machine-status-work-order-form/select-work-order-panel-dialog/select-work-order-panel-dialog.component */ 9737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
























const MACHINE_STATE_URL = 'machine';
class MachineModule {
}
MachineModule.ɵfac = function MachineModule_Factory(t) { return new (t || MachineModule)(); };
MachineModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MachineModule });
MachineModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            src_app_common_PT_common_module__WEBPACK_IMPORTED_MODULE_0__.PTCommonModule,
            _machine_routing_module__WEBPACK_IMPORTED_MODULE_1__.MachineRoutingModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRippleModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__.CdkTableModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MachineModule, { declarations: [_machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_3__.MachineSelectComponent, _machine_status_list_machine_status_list_component__WEBPACK_IMPORTED_MODULE_2__.MachineStatusListComponent, _machine_status_reason_form_machine_status_reason_form_component__WEBPACK_IMPORTED_MODULE_4__.MachineStatusReasonFormComponent, _machine_status_work_order_form_machine_status_work_order_form_component__WEBPACK_IMPORTED_MODULE_5__.MachineStatusWorkOrderFormComponent, _machine_status_worker_form_machine_status_worker_form_component__WEBPACK_IMPORTED_MODULE_6__.MachineStatusWorkerFormComponent, _form_machine_status_card_list_form_machine_status_card_list_component__WEBPACK_IMPORTED_MODULE_7__.FormMachineStatusCardListComponent, _machine_select_admin_panel_dialog_machine_select_admin_panel_dialog_component__WEBPACK_IMPORTED_MODULE_8__.MachineSelectAdminPanelDialogComponent, _machine_status_work_order_form_select_work_order_panel_dialog_select_work_order_panel_dialog_component__WEBPACK_IMPORTED_MODULE_9__.SelectWorkOrderPanelDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        src_app_common_PT_common_module__WEBPACK_IMPORTED_MODULE_0__.PTCommonModule,
        _machine_routing_module__WEBPACK_IMPORTED_MODULE_1__.MachineRoutingModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRippleModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__.CdkTableModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule] }); })();


/***/ }),

/***/ 8271:
/*!****************************************************************************************!*\
  !*** ./src/app/common/components/dsr-app-logo-button/dsr-app-logo-button.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DsrAppLogoButtonComponent": () => (/* binding */ DsrAppLogoButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DsrAppLogoButtonComponent {
    constructor() {
        this.appName = 'sfc';
        this.backgroundColor = 'transparent';
    }
    ngOnInit() {
        this.backgroundColor = this.getAppColor();
    }
    getIconFileName() {
        switch (this.appName) {
            case 'eam':
                return 'eam_mini_logo.svg';
            case 'sfc':
                return 'sfc_mini_logo.svg';
        }
    }
    getAppColor() {
        switch (this.appName) {
            case 'eam':
                return '#069779';
            case 'sfc':
                return '#009FDB';
        }
    }
    getIconPath() {
        return '/assets/' + this.getIconFileName();
    }
}
DsrAppLogoButtonComponent.ɵfac = function DsrAppLogoButtonComponent_Factory(t) { return new (t || DsrAppLogoButtonComponent)(); };
DsrAppLogoButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DsrAppLogoButtonComponent, selectors: [["PT-dsr-app-logo-button"]], hostVars: 2, hostBindings: function DsrAppLogoButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.backgroundColor);
    } }, inputs: { appName: "appName" }, decls: 2, vars: 1, consts: [[1, "app-logo-wrapper"], [1, "app-logo", 3, "src"]], template: function DsrAppLogoButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getIconPath(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  background-color: aqua;\n  aspect-ratio: 1/1;\n  border-radius: 50%;\n  display: flex;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .app-logo-wrapper[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: auto;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzci1hcHAtbG9nby1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiZHNyLWFwcC1sb2dvLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgLmFwcC1sb2dvLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 992:
/*!*******************************************************************!*\
  !*** ./src/app/common/interceptors/loader-interceptor.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loader.service */ 961);




class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.requests = [];
    }
    removeRequest(req) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.setHttpLoading(this.requests.length > 0);
    }
    intercept(req, next) {
        this.requests.push(req);
        // console.log('No of requests--->' + this.requests.length);
        this.loaderService.setHttpLoading(true);
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
            const subscription = next.handle(req)
                .subscribe(event => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
                    this.removeRequest(req);
                    observer.next(event);
                }
            }, err => {
                // alert('error' + err);
                this.removeRequest(req);
                observer.error(err);
            }, () => {
                this.removeRequest(req);
                observer.complete();
            });
            // remove request from queue when cancelled
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
LoaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });


/***/ }),

/***/ 7614:
/*!*********************************************!*\
  !*** ./src/app/common/PT-common.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "PTCommonModule": () => (/* binding */ PTCommonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2472);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var _api_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api.module */ 9809);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _interceptors_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/loader-interceptor.service */ 992);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/loader.service */ 961);
/* harmony import */ var _services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/sfc-navigator.service */ 9873);
/* harmony import */ var _services_display_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/display-configuration.service */ 5653);
/* harmony import */ var _components_dsr_app_logo_button_dsr_app_logo_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dsr-app-logo-button/dsr-app-logo-button.component */ 8271);
/* harmony import */ var _services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/operator-authentication.service */ 1829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);














function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http);
}
class PTCommonModule {
}
PTCommonModule.ɵfac = function PTCommonModule_Factory(t) { return new (t || PTCommonModule)(); };
PTCommonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: PTCommonModule });
PTCommonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        _services_display_configuration_service__WEBPACK_IMPORTED_MODULE_5__.DisplayConfigurationService,
        _services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService,
        _services_sfc_navigator_service__WEBPACK_IMPORTED_MODULE_4__.SfcNavigatorService,
        _services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_7__.OperatorAuthenticationService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: dsr_toolkit__WEBPACK_IMPORTED_MODULE_11__.HttpErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: _interceptors_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_2__.LoaderInterceptor, multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            dsr_toolkit__WEBPACK_IMPORTED_MODULE_11__.DsrToolkitModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _api_api_module__WEBPACK_IMPORTED_MODULE_0__.ApiModule.forRoot({ rootUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiRootUrl }),
        ], dsr_toolkit__WEBPACK_IMPORTED_MODULE_11__.DsrToolkitModule,
        _api_api_module__WEBPACK_IMPORTED_MODULE_0__.ApiModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PTCommonModule, { declarations: [_components_dsr_app_logo_button_dsr_app_logo_button_component__WEBPACK_IMPORTED_MODULE_6__.DsrAppLogoButtonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        dsr_toolkit__WEBPACK_IMPORTED_MODULE_11__.DsrToolkitModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _api_api_module__WEBPACK_IMPORTED_MODULE_0__.ApiModule], exports: [dsr_toolkit__WEBPACK_IMPORTED_MODULE_11__.DsrToolkitModule,
        _api_api_module__WEBPACK_IMPORTED_MODULE_0__.ApiModule,
        _components_dsr_app_logo_button_dsr_app_logo_button_component__WEBPACK_IMPORTED_MODULE_6__.DsrAppLogoButtonComponent] }); })();


/***/ }),

/***/ 5653:
/*!******************************************************************!*\
  !*** ./src/app/common/services/display-configuration.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayConfigurationService": () => (/* binding */ DisplayConfigurationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/services */ 4670);



class DisplayConfigurationService {
    constructor(machineService) {
        this.machineService = machineService;
        this._cache = new Map();
    }
    getMachineDisplayConfiguration(machineId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            if (!this._cache.has(machineId)) {
                yield this.machineService.postApiMachineGetMachineDisplayConfiguration(machineId)
                    .toPromise()
                    .then((config) => this._cache.set(machineId, config));
            }
            return this._cache.get(machineId);
        });
    }
    getMachineWorkOrderAssigningMethod(machineId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.getMachineDisplayConfiguration(machineId)).workOrderAssigningMethod;
        });
    }
    getMachineProductionDisplayMethod(machineId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.getMachineDisplayConfiguration(machineId)).productionDisplayMethod;
        });
    }
    getUnassigningWorkOrderEnabled(machineId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.getMachineDisplayConfiguration(machineId)).unassigningWorkOrderEnabled;
        });
    }
    getAssignedWorkOrderLimit(machineId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.getMachineDisplayConfiguration(machineId)).assignedWorkOrderLimit;
        });
    }
    getMachineShiftsConfiguration(machineId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return (yield this.getMachineDisplayConfiguration(machineId)).machineShiftsConfiguration;
        });
    }
}
DisplayConfigurationService.ɵfac = function DisplayConfigurationService_Factory(t) { return new (t || DisplayConfigurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_0__.MachineService)); };
DisplayConfigurationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DisplayConfigurationService, factory: DisplayConfigurationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7430:
/*!**********************************************************!*\
  !*** ./src/app/common/services/focus-refresh.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusRefreshService": () => (/* binding */ FocusRefreshService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class FocusRefreshService {
    constructor() {
        this.focusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.focus = this.focusSubject.asObservable();
    }
    reFocus() {
        this.focusSubject.next(false);
        setTimeout(() => { this.focusSubject.next(true); });
    }
}
FocusRefreshService.ɵfac = function FocusRefreshService_Factory(t) { return new (t || FocusRefreshService)(); };
FocusRefreshService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FocusRefreshService, factory: FocusRefreshService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 961:
/*!***************************************************!*\
  !*** ./src/app/common/services/loader.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    emit() {
        this.isLoading.next(this.isHttpLoading || this.isGlobalLoading);
    }
    setGlobalLoading(isLoading) {
        this.isGlobalLoading = isLoading;
        this.emit();
    }
    setHttpLoading(isLoading) {
        this.isHttpLoading = isLoading;
        this.emit();
    }
    getLoading() {
        return this.isLoading.asObservable();
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1829:
/*!********************************************************************!*\
  !*** ./src/app/common/services/operator-authentication.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorAuthenticationService": () => (/* binding */ OperatorAuthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var src_app_areas_machine_machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/areas/machine/machine-select/machine-select.component */ 6075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/services */ 4670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var _focus_refresh_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focus-refresh.service */ 7430);







class OperatorAuthenticationService {
    constructor(administrationService, router, route, notificationService, focusRefreshService) {
        this.administrationService = administrationService;
        this.router = router;
        this.route = route;
        this.notificationService = notificationService;
        this.focusRefreshService = focusRefreshService;
        this.loggedUser = null;
        this.timeoutValue = 0;
        this.timeLeft = 0;
        const logoutTimeoutValue = localStorage.getItem(src_app_areas_machine_machine_select_machine_select_component__WEBPACK_IMPORTED_MODULE_0__.MachineSelectComponent.LOGOUT_TIMEOUT_KEY);
        this.changeTimeout(JSON.parse(logoutTimeoutValue !== null && logoutTimeoutValue !== void 0 ? logoutTimeoutValue : '0'));
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentWorkerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.currentWorker = this.currentWorkerSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    get secondsLeft() {
        return this.timeLeft;
    }
    get isLoggedIn() {
        console.log('isLoggedIn', this.loggedUser, this.loggedUser != null);
        return this.loggedUser != null;
    }
    login(operatorLoginCode) {
        this.administrationService.postApiAdministrationLoginWorker(operatorLoginCode).subscribe(user => {
            if ((user === null || user === void 0 ? void 0 : user.role) != "operator") {
                this.loggedUser = user;
                this.resetTimeout();
                console.log(this.loggedUser);
                this.currentUserSubject.next(this.loggedUser);
            }
            else {
                this.currentWorkerSubject.next(user);
            }
        }, error => {
            console.log(error);
            if (error.status == 401)
                this.notificationService.showErrorTranslated('machine.loginFailed', 'Ok', null, false, 4000);
            if (error.status == 403)
                this.notificationService.showErrorTranslated('machine.inactiveWorker', 'Ok', null, false, 4000);
        });
    }
    logout() {
        this.loggedUser = null;
        this.resetTimeout();
        this.currentUserSubject.next(this.loggedUser);
        this.focusRefreshService.reFocus();
        this.router.navigate(['/']);
    }
    resetTimeout() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.timeLeft = this.timeoutValue;
        if (this.loggedUser && this.timeoutValue > 0) {
            this.interval = setInterval(() => {
                if (this.timeLeft > 0) {
                    this.timeLeft--;
                }
                else {
                    this.logout();
                }
            }, 1000);
        }
    }
    changeTimeout(timeout) {
        if (timeout < 0) {
            timeout = 0;
        }
        this.timeoutValue = timeout;
        this.resetTimeout();
    }
}
OperatorAuthenticationService.ɵfac = function OperatorAuthenticationService_Factory(t) { return new (t || OperatorAuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__.AdministrationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](dsr_toolkit__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_focus_refresh_service__WEBPACK_IMPORTED_MODULE_2__.FocusRefreshService)); };
OperatorAuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: OperatorAuthenticationService, factory: OperatorAuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9873:
/*!**********************************************************!*\
  !*** ./src/app/common/services/sfc-navigator.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SfcNavigatorService": () => (/* binding */ SfcNavigatorService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class SfcNavigatorService {
    constructor(document) {
        this.document = document;
    }
    goToSfc() {
        this.document.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.sfcTerminalUrl;
    }
}
SfcNavigatorService.ɵfac = function SfcNavigatorService_Factory(t) { return new (t || SfcNavigatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
SfcNavigatorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SfcNavigatorService, factory: SfcNavigatorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8488:
/*!**********************************************!*\
  !*** ./src/app/common/utils/color-helper.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alphaRipple": () => (/* binding */ alphaRipple)
/* harmony export */ });
function hexToRgb(hex) {
    const bigint = parseInt(hex.replace('#', ''), 16);
    // tslint:disable-next-line: no-bitwise
    const r = (bigint >> 16) & 255;
    // tslint:disable-next-line: no-bitwise
    const g = (bigint >> 8) & 255;
    // tslint:disable-next-line: no-bitwise
    const b = bigint & 255;
    return r + ',' + g + ',' + b;
}
function alphaRipple(hexColor, alpha = 0.2) {
    return `rgba(${hexToRgb(hexColor)},${alpha})`;
}


/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 1494);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7310);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ 5396);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ 2542);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-routing.module */ 158);
/* harmony import */ var _common_PT_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/PT-common.module */ 7614);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ 6571);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 7252);
/* harmony import */ var _loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-overlay/loading-overlay.component */ 7291);
/* harmony import */ var _loading_overlay_loading_overlay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-overlay/loading-overlay.service */ 7110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);





























class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _loading_overlay_loading_overlay_service__WEBPACK_IMPORTED_MODULE_5__.LoadingOverlayService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            dsr_toolkit__WEBPACK_IMPORTED_MODULE_8__.DsrToolkitModule,
            _common_PT_common_module__WEBPACK_IMPORTED_MODULE_1__.PTCommonModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__.DragDropModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__.MatGridListModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_4__.LoadingOverlayComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        dsr_toolkit__WEBPACK_IMPORTED_MODULE_8__.DsrToolkitModule,
        _common_PT_common_module__WEBPACK_IMPORTED_MODULE_1__.PTCommonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__.DragDropModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__.MatGridListModule], exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent] }); })();


/***/ }),

/***/ 6571:
/*!***************************************************!*\
  !*** ./src/app/layout/layout/layout.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/services/loader.service */ 961);
/* harmony import */ var _loading_overlay_loading_overlay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loading-overlay/loading-overlay.service */ 7110);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ 7252);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);





const _c0 = ["*"];
class LayoutComponent {
    constructor(loaderService, overlay) {
        this.loaderService = loaderService;
        this.overlay = overlay;
        this.overlayRef = null;
        this.loaderService.getLoading().subscribe((v) => {
            var _a;
            // console.log(v);
            setTimeout(() => this.loading = v);
            if (v && this.overlayRef === null) {
                // console.log('open overlay');
                this.overlayRef = overlay.open();
                this.overlayRef.afterClosed().subscribe(() => this.overlayRef = null);
            }
            else if (!v) {
                // console.log('close overlay');
                (_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.close();
            }
        });
    }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_common_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_loading_overlay_loading_overlay_service__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayService)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], ngContentSelectors: _c0, decls: 6, vars: 0, consts: [[1, "layout-container"], ["cols", "1", "rowHeight", "100%"], [1, "content-container"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridTile], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100vh;\n}\n\n.layout-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubGF5b3V0LWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7291:
/*!*********************************************************************!*\
  !*** ./src/app/layout/loading-overlay/loading-overlay.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingOverlayComponent": () => (/* binding */ LoadingOverlayComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);




const ANIMATION_TIMINGS = '400ms cubic-bezier(0.25, 0.8, 0.25, 1)';
class LoadingOverlayComponent {
    constructor() {
        this.animationState = 'enter';
        this.animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    // onLoad(event: Event): void {
    //   this.loading = false;
    // }
    onAnimationStart(event) {
        this.animationStateChanged.emit(event);
    }
    onAnimationDone(event) {
        this.animationStateChanged.emit(event);
    }
    startExitAnimation() {
        this.animationState = 'leave';
    }
}
LoadingOverlayComponent.ɵfac = function LoadingOverlayComponent_Factory(t) { return new (t || LoadingOverlayComponent)(); };
LoadingOverlayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingOverlayComponent, selectors: [["app-loading-overlay"]], decls: 3, vars: 1, consts: [[1, "overlay-content"], [1, "spinner-wrapper"]], template: function LoadingOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@slideContent.start", function LoadingOverlayComponent_Template_div_animation_slideContent_start_0_listener($event) { return ctx.onAnimationStart($event); })("@slideContent.done", function LoadingOverlayComponent_Template_div_animation_slideContent_done_0_listener($event) { return ctx.onAnimationDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideContent", ctx.animationState);
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatSpinner], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1em;\n}\n\n.spinner-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 500px;\n  height: auto;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing.dark-backdrop {\n  background: #000;\n  opacity: 0.5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUlJO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQUROIiwiZmlsZSI6ImxvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5zcGlubmVyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XHJcbiAgICAmLmRhcmstYmFja2Ryb3Age1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"], data: { animation: [
            // trigger('fade', [
            //   state('fadeOut', style({ opacity: 0 })),
            //   state('fadeIn', style({ opacity: 1 })),
            //   transition('* => *', animate(ANIMATION_TIMINGS))
            // ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('slideContent', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 1 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({ opacity: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(ANIMATION_TIMINGS)),
            ])
        ] } });


/***/ }),

/***/ 7547:
/*!***************************************************************!*\
  !*** ./src/app/layout/loading-overlay/loading-overlay.ref.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingOverlayRef": () => (/* binding */ LoadingOverlayRef)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5257);


class LoadingOverlayRef {
    constructor(overlayRef) {
        this.overlayRef = overlayRef;
        this._beforeClose = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    close() {
        this.componentInstance.animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event.phaseName === 'start'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => {
            this._beforeClose.next();
            this._beforeClose.complete();
            this.overlayRef.detachBackdrop();
        });
        this.componentInstance.animationStateChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event.phaseName === 'done' && event.toState === 'leave'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => {
            this.overlayRef.dispose();
            this._afterClosed.next();
            this._afterClosed.complete();
            // this.overlayRef.detachBackdrop();
            // tslint:disable-next-line: no-non-null-assertion
            this.componentInstance = null;
        });
        this.componentInstance.startExitAnimation();
    }
    afterClosed() {
        return this._afterClosed.asObservable();
    }
    beforeClose() {
        return this._beforeClose.asObservable();
    }
}


/***/ }),

/***/ 7110:
/*!*******************************************************************!*\
  !*** ./src/app/layout/loading-overlay/loading-overlay.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingOverlayService": () => (/* binding */ LoadingOverlayService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ 8203);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 7636);
/* harmony import */ var _loading_overlay_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-overlay.component */ 7291);
/* harmony import */ var _loading_overlay_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-overlay.ref */ 7547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);






class LoadingOverlayService {
    constructor(injector, overlay) {
        this.injector = injector;
        this.overlay = overlay;
    }
    open() {
        // Returns an OverlayRef which is a PortalHost
        const overlayRef = this.createOverlay();
        // Instantiate remote control
        const dialogRef = new _loading_overlay_ref__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayRef(overlayRef);
        const overlayComponent = this.attachDialogContainer(overlayRef, dialogRef);
        dialogRef.componentInstance = overlayComponent;
        return dialogRef;
    }
    createOverlay() {
        const overlayConfig = this.getOverlayConfig();
        return this.overlay.create(overlayConfig);
    }
    attachDialogContainer(overlayRef, dialogRef) {
        const injector = this.createInjector(dialogRef);
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.ComponentPortal(_loading_overlay_component__WEBPACK_IMPORTED_MODULE_0__.LoadingOverlayComponent, null, injector);
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    // tslint:disable-next-line: deprecation
    createInjector(dialogRef) {
        const injectionTokens = new WeakMap();
        injectionTokens.set(_loading_overlay_ref__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayRef, dialogRef);
        // tslint:disable-next-line: deprecation
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.PortalInjector(this.injector, injectionTokens);
    }
    getOverlayConfig() {
        const positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'dark-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });
        return overlayConfig;
    }
}
LoadingOverlayService.ɵfac = function LoadingOverlayService_Factory(t) { return new (t || LoadingOverlayService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay)); };
LoadingOverlayService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LoadingOverlayService, factory: LoadingOverlayService.ɵfac });


/***/ }),

/***/ 7252:
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dsr-toolkit */ 5336);
/* harmony import */ var src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/operator-authentication.service */ 1829);
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/services */ 4670);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 9790);










function NavbarComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r0.currentOperator.firstName, " ", ctx_r0.currentOperator.lastName, "");
} }
function NavbarComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.secondsLeftParsed);
} }
function NavbarComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dsr-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dsrClick", function NavbarComponent_ng_container_11_Template_dsr_button_dsrClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "power_settings_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("margin-left", 1, "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "common.logout"), " ");
} }
class NavbarComponent {
    constructor(languageService, operatorAuthenticationService, administrationService) {
        this.languageService = languageService;
        this.operatorAuthenticationService = operatorAuthenticationService;
        this.administrationService = administrationService;
        this.everySecond$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(0, 1000);
        this.subscriptions = [];
        this.currentOperator = null;
        this.secondsToLogout = 0;
        this.Header = "";
    }
    ngOnInit() {
        this.currentLanguage = this.languageService.getCurrent();
        this.administrationService.getApiAdministrationGetCurrentTenantHeader().subscribe(val => this.Header = val);
        this.operatorAuthenticationService.currentUser.subscribe(worker => {
            this.currentOperator = worker;
        });
        this.subscriptions.push(this.everySecond$.subscribe(val => {
            this.currentTime = Date.now();
            this.secondsToLogout = this.operatorAuthenticationService.secondsLeft;
        }));
    }
    get secondsLeftParsed() {
        const duration = moment__WEBPACK_IMPORTED_MODULE_0__.duration(this.secondsToLogout, 'seconds');
        // const resultstring = moment.utc(duration.asMilliseconds()).format('HH:mm:ss');
        const resultstring = moment__WEBPACK_IMPORTED_MODULE_0__.utc(duration.asMilliseconds()).format('mm:ss');
        return resultstring;
    }
    logout() {
        this.operatorAuthenticationService.logout();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_common_services_operator_authentication_service__WEBPACK_IMPORTED_MODULE_1__.OperatorAuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__.AdministrationService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 12, vars: 10, consts: [["color", "primary", 1, "mat-elevation-z2"], ["src", "/assets/PT_logo.svg", 1, "app-logo"], [1, "spacer"], [1, "navbar-text"], [4, "ngIf"], [2, "margin-left", "1rem", "margin-right", "1rem"], [1, "material-icons-outlined", 2, "margin-right", "0.5rem"], ["appearance", "dsrRoundOutline", 3, "dsrClick"], [1, "material-icons-outlined", 2, "margin-left", "-0.5rem", "margin-right", "0.5rem"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, NavbarComponent_ng_container_9_Template, 5, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, NavbarComponent_ng_container_10_Template, 7, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, NavbarComponent_ng_container_11_Template, 6, 5, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.Header);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](8, 5, ctx.currentTime, "E d \u22C5 H:mm", undefined, ctx.currentLanguage));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentOperator);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentOperator && ctx.secondsToLogout > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentOperator);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarRow, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, dsr_toolkit__WEBPACK_IMPORTED_MODULE_5__.ButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  z-index: 1000;\n}\n\n.mat-toolbar-row[_ngcontent-%COMP%] {\n  min-height: 96px;\n  padding-left: 48px;\n  padding-right: 48px;\n  height: auto !important;\n  color: white;\n}\n\n.navbar-button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 48px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.navbar-button[_ngcontent-%COMP%]     button {\n  display: block;\n  color: white;\n}\n\n.app-logo[_ngcontent-%COMP%] {\n  height: 48px;\n  min-height: 32px;\n  padding-bottom: 12px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.navbar-text[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\n\ndiv.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUYsdUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVFLGdCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBTEo7O0FBU0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUVFLGdCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFXQTtFQUNFLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxjQUFBO0FBUkYiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci1yb3cge1xyXG4gIG1pbi1oZWlnaHQ6IDk2cHg7XHJcbiAgcGFkZGluZzoge1xyXG4gICAgbGVmdDogNDhweDtcclxuICAgIHJpZ2h0OiA0OHB4O1xyXG4gIH1cclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLy8gZm9udC1zaXplOiAxM3B4O1xyXG4gIC8vIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIG1hcmdpbjoge1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgYm90dG9tOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5hcHAtbG9nbyB7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgbWFyZ2luOiB7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbmRpdi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiRootUrl: 'http://dsrws07.dsr.com.pl:9010',
    apiRootUrl: 'http://localhost:60653',
    sfcTerminalUrl: 'https://sfc-dev.4factory.com/terminal/'
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 6431,
	"./af.js": 6431,
	"./ar": 1286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 3160,
	"./ar-ly.js": 3160,
	"./ar-ma": 2551,
	"./ar-ma.js": 2551,
	"./ar-sa": 9989,
	"./ar-sa.js": 9989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 1286,
	"./az": 5887,
	"./az.js": 5887,
	"./be": 4572,
	"./be.js": 4572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 3344,
	"./bm.js": 3344,
	"./bn": 8985,
	"./bn.js": 8985,
	"./bo": 4391,
	"./bo.js": 4391,
	"./br": 6728,
	"./br.js": 6728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 1043,
	"./ca.js": 1043,
	"./cs": 420,
	"./cs.js": 420,
	"./cv": 3513,
	"./cv.js": 3513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 7978,
	"./da.js": 7978,
	"./de": 6061,
	"./de-at": 5204,
	"./de-at.js": 5204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 6061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 5724,
	"./en-au.js": 5724,
	"./en-ca": 525,
	"./en-ca.js": 525,
	"./en-gb": 2847,
	"./en-gb.js": 2847,
	"./en-ie": 7216,
	"./en-ie.js": 7216,
	"./en-il": 9305,
	"./en-il.js": 9305,
	"./en-in": 3364,
	"./en-in.js": 3364,
	"./en-nz": 9130,
	"./en-nz.js": 9130,
	"./en-sg": 1161,
	"./en-sg.js": 1161,
	"./eo": 802,
	"./eo.js": 802,
	"./es": 328,
	"./es-do": 5551,
	"./es-do.js": 5551,
	"./es-us": 4790,
	"./es-us.js": 4790,
	"./es.js": 328,
	"./et": 6389,
	"./et.js": 6389,
	"./eu": 2961,
	"./eu.js": 2961,
	"./fa": 6151,
	"./fa.js": 6151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 8898,
	"./fil.js": 8898,
	"./fo": 7779,
	"./fo.js": 7779,
	"./fr": 8174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 8867,
	"./fr-ch.js": 8867,
	"./fr.js": 8174,
	"./fy": 452,
	"./fy.js": 452,
	"./ga": 5014,
	"./ga.js": 5014,
	"./gd": 4127,
	"./gd.js": 4127,
	"./gl": 2124,
	"./gl.js": 2124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 7953,
	"./gom-latn.js": 7953,
	"./gu": 6604,
	"./gu.js": 6604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 4235,
	"./hi.js": 4235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 7735,
	"./hu.js": 7735,
	"./hy-am": 402,
	"./hy-am.js": 402,
	"./id": 9187,
	"./id.js": 9187,
	"./is": 536,
	"./is.js": 536,
	"./it": 5007,
	"./it-ch": 4667,
	"./it-ch.js": 4667,
	"./it.js": 5007,
	"./ja": 2093,
	"./ja.js": 2093,
	"./jv": 59,
	"./jv.js": 59,
	"./ka": 6870,
	"./ka.js": 6870,
	"./kk": 880,
	"./kk.js": 880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 8785,
	"./kn.js": 8785,
	"./ko": 1721,
	"./ko.js": 1721,
	"./ku": 7851,
	"./ku.js": 7851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 346,
	"./lb.js": 346,
	"./lo": 3002,
	"./lo.js": 3002,
	"./lt": 4035,
	"./lt.js": 4035,
	"./lv": 6927,
	"./lv.js": 6927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 4173,
	"./mi.js": 4173,
	"./mk": 6320,
	"./mk.js": 6320,
	"./ml": 1705,
	"./ml.js": 1705,
	"./mn": 1062,
	"./mn.js": 1062,
	"./mr": 2805,
	"./mr.js": 2805,
	"./ms": 1341,
	"./ms-my": 9900,
	"./ms-my.js": 9900,
	"./ms.js": 1341,
	"./mt": 7734,
	"./mt.js": 7734,
	"./my": 9034,
	"./my.js": 9034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 6495,
	"./ne.js": 6495,
	"./nl": 673,
	"./nl-be": 6272,
	"./nl-be.js": 6272,
	"./nl.js": 673,
	"./nn": 2486,
	"./nn.js": 2486,
	"./oc-lnc": 6219,
	"./oc-lnc.js": 6219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 8444,
	"./pl.js": 8444,
	"./pt": 3170,
	"./pt-br": 6117,
	"./pt-br.js": 6117,
	"./pt.js": 3170,
	"./ro": 6587,
	"./ro.js": 6587,
	"./ru": 9264,
	"./ru.js": 9264,
	"./sd": 2135,
	"./sd.js": 2135,
	"./se": 5366,
	"./se.js": 5366,
	"./si": 3379,
	"./si.js": 3379,
	"./sk": 6143,
	"./sk.js": 6143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 1082,
	"./sq.js": 1082,
	"./sr": 1621,
	"./sr-cyrl": 8963,
	"./sr-cyrl.js": 8963,
	"./sr.js": 1621,
	"./ss": 1404,
	"./ss.js": 1404,
	"./sv": 5685,
	"./sv.js": 5685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 4106,
	"./ta.js": 4106,
	"./te": 9204,
	"./te.js": 9204,
	"./tet": 3692,
	"./tet.js": 3692,
	"./tg": 6361,
	"./tg.js": 6361,
	"./th": 1735,
	"./th.js": 1735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 6129,
	"./tl-ph.js": 6129,
	"./tlh": 3759,
	"./tlh.js": 3759,
	"./tr": 1644,
	"./tr.js": 1644,
	"./tzl": 875,
	"./tzl.js": 875,
	"./tzm": 6878,
	"./tzm-latn": 1041,
	"./tzm-latn.js": 1041,
	"./tzm.js": 6878,
	"./ug-cn": 4357,
	"./ug-cn.js": 4357,
	"./uk": 4810,
	"./uk.js": 4810,
	"./ur": 6794,
	"./ur.js": 6794,
	"./uz": 8966,
	"./uz-latn": 7959,
	"./uz-latn.js": 7959,
	"./uz.js": 8966,
	"./vi": 5386,
	"./vi.js": 5386,
	"./x-pseudo": 3156,
	"./x-pseudo.js": 3156,
	"./yo": 8028,
	"./yo.js": 8028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 9380,
	"./zh-hk.js": 9380,
	"./zh-mo": 874,
	"./zh-mo.js": 874,
	"./zh-tw": 6508,
	"./zh-tw.js": 6508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map