var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/app/components/remote-app/pages/scan/scan.component.ts
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, HostListener } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

// src/app/enums/shell.enum.ts
var ShellActions;
(function(ShellActions2) {
  ShellActions2["SHELL_VERSION"] = "shellVersion";
})(ShellActions || (ShellActions = {}));
var ShellEvents;
(function(ShellEvents2) {
  ShellEvents2["SHELL_DEVICE_GET_ID"] = "shellDeviceGetId";
  ShellEvents2["SHELL_SCANNER_RESPONSE"] = "shellScannerResponse";
  ShellEvents2["SHELL_SCANNER_START"] = "shellScannerStart";
  ShellEvents2["SHELL_SCANNER_STOP"] = "shellScannerStop";
  ShellEvents2["SHELL_SCANNER_ERROR"] = "shellScannerError";
  ShellEvents2["SHELL_DEVICE_GET_ID_RESPONSE"] = "shellDeviceGetIdResponse";
})(ShellEvents || (ShellEvents = {}));
var ShellErrors;
(function(ShellErrors2) {
  ShellErrors2["SHELL_LOADING_REMOTE_OK"] = "shellLoadingRemoteOk";
})(ShellErrors || (ShellErrors = {}));

// src/app/enums/global.enum.ts
var LocalStorageKeys;
(function(LocalStorageKeys2) {
  LocalStorageKeys2["TOKEN"] = "token";
  LocalStorageKeys2["APP_UUID"] = "appUuid";
})(LocalStorageKeys || (LocalStorageKeys = {}));
var LogKeys;
(function(LogKeys2) {
  LogKeys2["SYSTEM"] = "[SYSTEM]";
})(LogKeys || (LogKeys = {}));
var GlobalKeys;
(function(GlobalKeys2) {
  GlobalKeys2["UUID_EMAIL_DOMAIN"] = "@uuid.app";
  GlobalKeys2["UUID_QR_CODE"] = "app-uuid-code:";
})(GlobalKeys || (GlobalKeys = {}));
var GameCodes;
(function(GameCodes2) {
  GameCodes2["LOTERIA_NACIONAL"] = "ln";
})(GameCodes || (GameCodes = {}));
var AlertCodes;
(function(AlertCodes2) {
  AlertCodes2["CANCEL"] = "CANCEL";
  AlertCodes2["ACCEPT"] = "ACCEPT";
})(AlertCodes || (AlertCodes = {}));

// src/app/components/remote-app/pages/scan/scan.component.ts
import * as i07 from "@angular/core";
import * as i13 from "@angular/router";

// src/app/services/ticket.service.ts
import { Injectable as Injectable3 } from "@angular/core";

// src/environments/environment.ts
var environment = {
  api: {
    host: "http://192.168.1.40:3000/api"
  },
  web: {
    host: "http://192.168.1.40:4201"
  }
};

// src/app/services/ticket.service.ts
import { lastValueFrom } from "rxjs";
import * as i03 from "@angular/core";
import * as i12 from "@ionic/angular";
import * as i22 from "@ngx-translate/core";

// src/app/services/api.service.ts
import { HttpHeaders } from "@angular/common/http";
import { Injectable as Injectable2 } from "@angular/core";
import { catchError, throwError } from "rxjs";
import * as i02 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";

// src/app/services/storage.service.ts
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
var StorageService = class _StorageService {
  constructor() {
  }
  setItem(key, value) {
    localStorage.setItem(key, value);
  }
  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "");
    } catch (error) {
      return localStorage.getItem(key);
    }
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  static {
    this.\u0275fac = function StorageService_Factory(t) {
      return new (t || _StorageService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _StorageService, factory: _StorageService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/api.service.ts
var HttpApiErrors;
(function(HttpApiErrors2) {
  HttpApiErrors2["UNAUTHORIZED"] = "Unauthorized";
})(HttpApiErrors || (HttpApiErrors = {}));
var ApiService = class _ApiService {
  constructor(http, router, storageSrv) {
    this.http = http;
    this.router = router;
    this.storageSrv = storageSrv;
  }
  /*
  HTTP Methods
  */
  get(url, options) {
    options = this.addTokenToHeaders(options);
    return this.http.get(url, options);
  }
  post(url, body, options) {
    options = this.addPostHeaders(options);
    options = this.addTokenToHeaders(options);
    return this.http.post(url, body, options).pipe(this.handleErrorAndRedirect());
  }
  delete(url, options) {
    options = this.addTokenToHeaders(options);
    return this.http.delete(url, options);
  }
  /*
  Interceptor logic
  */
  addTokenToHeaders(options) {
    const currentTokenData = this.storageSrv.getItem(LocalStorageKeys.TOKEN);
    const headers = [
      ["Authorization", `Bearer ${currentTokenData?.token}`]
    ];
    return this.addHeaders(headers, options);
  }
  addPostHeaders(options) {
    const headers = [
      ["Content-Type", "application/json"]
    ];
    return this.addHeaders(headers, options);
  }
  addHeaders(headers, options) {
    headers.forEach((header) => {
      options = options || {};
      options.headers = options.headers || {};
      if (options.headers instanceof HttpHeaders) {
        options.headers = options.headers.append(header[0], header[1]);
      } else if (typeof options.headers === "object") {
        options.headers[header[0]] = header[1];
      }
    });
    return options || {};
  }
  handleErrorAndRedirect() {
    return catchError((err, caught) => __async(this, null, function* () {
      if (err.status === 401 && err.statusText === HttpApiErrors.UNAUTHORIZED) {
        this.storageSrv.removeItem(LocalStorageKeys.TOKEN);
        this.router.navigate(["/", "main"]);
      }
      return throwError(err);
    }));
  }
  static {
    this.\u0275fac = function ApiService_Factory(t) {
      return new (t || _ApiService)(i02.\u0275\u0275inject(i1.HttpClient), i02.\u0275\u0275inject(i2.Router), i02.\u0275\u0275inject(StorageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i02.\u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/ticket.service.ts
var TicketService = class _TicketService {
  constructor(alertController, translateSrv, apiSrv) {
    this.alertController = alertController;
    this.translateSrv = translateSrv;
    this.apiSrv = apiSrv;
    this.apiTicket = `${environment.api.host}${"/ticket"}`;
  }
  createNewTicket(code) {
    return __async(this, null, function* () {
      const body = {
        data: {
          info: {
            code
          }
        }
      };
      try {
        const ticketData$ = this.apiSrv.post(this.apiTicket, body);
        const ticketData = yield lastValueFrom(ticketData$);
        return ticketData;
      } catch (error) {
        throw error;
      }
    });
  }
  deleteTicketById(id, alert = false) {
    return __async(this, null, function* () {
      let role = AlertCodes.ACCEPT;
      if (alert) {
        role = yield this.presentAlertConfirmDeleteTicket();
      }
      if (role === AlertCodes.ACCEPT) {
        try {
          const ticketData$ = yield this.apiSrv.delete(`${this.apiTicket}/${id}`);
          const ticketData = yield lastValueFrom(ticketData$);
          return ticketData;
        } catch (error) {
          throw error;
        }
      }
      return void 0;
    });
  }
  presentAlertConfirmDeleteTicket() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: this.translateSrv.instant("TICKETS.DELETE_TICKET"),
        subHeader: this.translateSrv.instant("GLOBAL.IRREVERSIBLE_ACTION"),
        message: this.translateSrv.instant("TICKETS.DELETE_TICKET_QUESTION"),
        buttons: [
          {
            text: this.translateSrv.instant("GLOBAL.CANCEL"),
            role: AlertCodes.CANCEL,
            handler: () => {
            }
          },
          {
            text: this.translateSrv.instant("GLOBAL.ACCEPT"),
            role: AlertCodes.ACCEPT,
            handler: () => {
            }
          }
        ]
      });
      yield alert.present();
      const { role } = yield alert.onDidDismiss();
      return role;
    });
  }
  static {
    this.\u0275fac = function TicketService_Factory(t) {
      return new (t || _TicketService)(i03.\u0275\u0275inject(i12.AlertController), i03.\u0275\u0275inject(i22.TranslateService), i03.\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i03.\u0275\u0275defineInjectable({ token: _TicketService, factory: _TicketService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/uuid.service.ts
import { Injectable as Injectable6 } from "@angular/core";
import { lastValueFrom as lastValueFrom3 } from "rxjs";
import { v4 as uuid } from "uuid";
import * as i06 from "@angular/core";

// src/app/services/user.service.ts
import { Injectable as Injectable4 } from "@angular/core";
import { lastValueFrom as lastValueFrom2 } from "rxjs";
import * as i04 from "@angular/core";
var TOKEN_EXPIRATION_TIME = 1e3 * 60 * 60 * 1.5;
var UserService = class _UserService {
  constructor(apiSrv, storageSrv) {
    this.apiSrv = apiSrv;
    this.storageSrv = storageSrv;
    this.apiUser = `${environment.api.host}${"/user"}`;
  }
  createUserByUuid(uuid2) {
    return __async(this, null, function* () {
      const body = {
        email: `${uuid2}${GlobalKeys.UUID_EMAIL_DOMAIN}`,
        password: uuid2,
        name: uuid2
      };
      try {
        const userData$ = this.apiSrv.post(this.apiUser, body);
        const userData = yield lastValueFrom2(userData$);
        return userData;
      } catch (error) {
        throw error;
      }
    });
  }
  loginByUuid(uuid2) {
    return __async(this, null, function* () {
      return yield this.login(`${uuid2}${GlobalKeys.UUID_EMAIL_DOMAIN}`, uuid2);
    });
  }
  login(email, password) {
    return __async(this, null, function* () {
      const body = {
        email,
        password
      };
      try {
        const loginData$ = this.apiSrv.post(`${this.apiUser}/login`, body);
        const loginData = yield lastValueFrom2(loginData$);
        if (loginData.token) {
          const tokenData = {
            token: loginData.token,
            date: Date.now()
          };
          this.storageSrv.setItem(LocalStorageKeys.TOKEN, JSON.stringify(tokenData));
          console.info(LogKeys.SYSTEM, `${loginData.token}`);
        }
        return loginData;
      } catch (error) {
        throw error;
      }
    });
  }
  checkTokenExpiration(uuid2) {
    return __async(this, null, function* () {
      const currentTokenData = this.storageSrv.getItem(LocalStorageKeys.TOKEN);
      const currentTokenDate = currentTokenData?.date || 0;
      const currentDate = Date.now();
      if (currentDate - currentTokenDate > TOKEN_EXPIRATION_TIME) {
        yield this.loginByUuid(uuid2);
      }
    });
  }
  getAllTicketsByUser() {
    return __async(this, null, function* () {
      try {
        const userTicketsData$ = this.apiSrv.get(`${this.apiUser}/ticket/all?limit=100&offset=0`);
        const userTicketsData = yield lastValueFrom2(userTicketsData$);
        return userTicketsData;
      } catch (error) {
        return [];
      }
    });
  }
  static {
    this.\u0275fac = function UserService_Factory(t) {
      return new (t || _UserService)(i04.\u0275\u0275inject(ApiService), i04.\u0275\u0275inject(StorageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i04.\u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/core.service.ts
import { Injectable as Injectable5 } from "@angular/core";
import * as i05 from "@angular/core";
var CoreService = class _CoreService {
  constructor(storageSrv) {
    this.storageSrv = storageSrv;
  }
  hasShell() {
    const remoteVersion = "0.0.0";
    const shellVersion = this.storageSrv.getItem(ShellActions.SHELL_VERSION);
    if (shellVersion === remoteVersion) {
      return true;
    }
    return false;
  }
  static {
    this.\u0275fac = function CoreService_Factory(t) {
      return new (t || _CoreService)(i05.\u0275\u0275inject(StorageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i05.\u0275\u0275defineInjectable({ token: _CoreService, factory: _CoreService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/uuid.service.ts
var UuidService = class _UuidService {
  constructor(apiSrv, userSrv, coreSrv) {
    this.apiSrv = apiSrv;
    this.userSrv = userSrv;
    this.coreSrv = coreSrv;
    this.uuid = "";
    this.apiUuid = `${environment.api.host}${"/uuid"}`;
    window.addEventListener(ShellEvents.SHELL_DEVICE_GET_ID_RESPONSE, (event) => __async(this, null, function* () {
      const localUuid = localStorage.getItem(LocalStorageKeys.APP_UUID) || (event.detail?.response || "");
      this.setAppUuid(localUuid);
      yield this.onDeviceIdResponse();
    }));
  }
  init() {
    return __async(this, null, function* () {
      yield this.requestDeviceId();
    });
  }
  getUuid() {
    return this.uuid;
  }
  updateAppUuid(newUuid) {
    this.setAppUuid(newUuid);
  }
  requestDeviceId() {
    return __async(this, null, function* () {
      if (this.coreSrv.hasShell()) {
        window.dispatchEvent(new CustomEvent(ShellEvents.SHELL_DEVICE_GET_ID));
      } else {
        const localUuid = localStorage.getItem(LocalStorageKeys.APP_UUID) || "";
        this.setAppUuid(localUuid);
        yield this.onDeviceIdResponse();
      }
    });
  }
  setAppUuid(newUuid) {
    this.uuid = newUuid;
    if (!this.uuid) {
      this.uuid = uuid();
    }
    localStorage.setItem(LocalStorageKeys.APP_UUID, this.uuid);
  }
  onDeviceIdResponse() {
    return __async(this, null, function* () {
      const uuidData = yield this.getUuidData();
      if (!uuidData) {
        yield this.registerUuid();
      } else {
        yield this.userSrv.loginByUuid(this.uuid);
        console.info(LogKeys.SYSTEM, `UUID ${this.uuid} was registered.`);
      }
    });
  }
  getUuidData() {
    return __async(this, null, function* () {
      try {
        const uuidData$ = this.apiSrv.get(`${this.apiUuid}/${this.uuid}`);
        const uuidData = yield lastValueFrom3(uuidData$);
        return uuidData;
      } catch (error) {
        return null;
      }
    });
  }
  registerUuid() {
    return __async(this, null, function* () {
      const userData = yield this.userSrv.createUserByUuid(this.uuid);
      const loginData = yield this.userSrv.loginByUuid(this.uuid);
      if (loginData.token) {
        const body = {
          uuid: this.uuid,
          user: userData._id
        };
        try {
          const uuidData$ = this.apiSrv.post(this.apiUuid, body);
          const uuidData = yield lastValueFrom3(uuidData$);
          this.uuid = uuidData.uuid;
          console.info(LogKeys.SYSTEM, `UUID ${this.uuid} has been registered.`);
        } catch (error) {
          console.error(error);
        }
      }
    });
  }
  static {
    this.\u0275fac = function UuidService_Factory(t) {
      return new (t || _UuidService)(i06.\u0275\u0275inject(ApiService), i06.\u0275\u0275inject(UserService), i06.\u0275\u0275inject(CoreService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i06.\u0275\u0275defineInjectable({ token: _UuidService, factory: _UuidService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/remote-app/pages/scan/scan.component.ts
import * as i5 from "@ionic/angular";
function ScanComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "article");
    i07.\u0275\u0275text(1, "Camera permission denied.");
    i07.\u0275\u0275elementEnd();
  }
}
function ScanComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275element(0, "ion-icon", 2);
  }
}
var ScanComponent = class _ScanComponent {
  handleShellScannerResponse(event) {
    return __async(this, null, function* () {
      yield this.onScannerResponse(event.detail?.response || {});
    });
  }
  handleShellScannerError(event) {
    return __async(this, null, function* () {
      yield this.onScannerError(event.detail?.response || {});
    });
  }
  constructor(router, ticketSrv, uuidSrv, userSrv) {
    this.router = router;
    this.ticketSrv = ticketSrv;
    this.uuidSrv = uuidSrv;
    this.userSrv = userSrv;
    this.hasShell = false;
    this.responses = [];
    this.hasPermission = true;
  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    return __async(this, null, function* () {
      yield this.startScan();
    });
  }
  ionViewWillLeave() {
    this.stopScan();
  }
  startScan(event) {
    return __async(this, null, function* () {
      this.hasPermission = true;
      window.dispatchEvent(new CustomEvent(ShellEvents.SHELL_SCANNER_START));
    });
  }
  stopScan(event) {
    window.dispatchEvent(new CustomEvent(ShellEvents.SHELL_SCANNER_STOP));
  }
  permissionResponse(event) {
    this.hasPermission = event || false;
  }
  onScannerResponse(response) {
    return __async(this, null, function* () {
      if (this.checkUuidQRCode(response.content || "")) {
        const uuid2 = response.content.toString().replace(GlobalKeys.UUID_QR_CODE, "");
        this.uuidSrv.updateAppUuid(uuid2);
        yield this.userSrv.loginByUuid(uuid2);
      } else if (response) {
        const ticketData = yield this.ticketSrv.createNewTicket(response.content || "");
      }
      this.exit();
    });
  }
  onScannerError(response) {
    return __async(this, null, function* () {
      console.log(response);
      this.hasPermission = false;
    });
  }
  exit() {
    this.router.navigate(["/main/", "tickets"]);
  }
  checkUuidQRCode(response) {
    if (response.toString().includes(GlobalKeys.UUID_QR_CODE)) {
      return true;
    }
    return false;
  }
  static {
    this.\u0275fac = function ScanComponent_Factory(t) {
      return new (t || _ScanComponent)(i07.\u0275\u0275directiveInject(i13.Router), i07.\u0275\u0275directiveInject(TicketService), i07.\u0275\u0275directiveInject(UuidService), i07.\u0275\u0275directiveInject(UserService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _ScanComponent, selectors: [["app-scan"]], hostBindings: function ScanComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        i07.\u0275\u0275listener("shellScannerResponse", function ScanComponent_shellScannerResponse_HostBindingHandler($event) {
          return ctx.handleShellScannerResponse($event);
        }, false, i07.\u0275\u0275resolveWindow)("shellScannerError", function ScanComponent_shellScannerError_HostBindingHandler($event) {
          return ctx.handleShellScannerError($event);
        }, false, i07.\u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [i07.\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "scan"], [1, "scan-screen"], ["name", "add-outline", 1, "scan-screen-pointer"]], template: function ScanComponent_Template(rf, ctx) {
      if (rf & 1) {
        i07.\u0275\u0275elementStart(0, "section", 0)(1, "section", 1);
        i07.\u0275\u0275template(2, ScanComponent_Conditional_2_Template, 2, 0, "article")(3, ScanComponent_Conditional_3_Template, 1, 0);
        i07.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        i07.\u0275\u0275advance(2);
        i07.\u0275\u0275conditional(2, !ctx.hasPermission ? 2 : 3);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      IonicModule,
      i5.IonIcon
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .scan[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100vh;\n  margin: 0;\n}\n[_nghost-%COMP%]   .scan-controls[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n}\n[_nghost-%COMP%]   .scan-controls[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n[_nghost-%COMP%]   .scan-screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .scan-screen-pointer[_ngcontent-%COMP%] {\n  width: 40px;\n  color: white;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL3JlbW90ZS1hcHAvcGFnZXMvc2Nhbi9zY2FuLmNvbXBvbmVudC5zY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBcbiAgLnNjYW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcblxuICAgICYtY29udHJvbHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLXNjcmVlbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAmLXBvaW50ZXIge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDRSxXQUFBOztBQUVBLE1BQUEsQ0FBQTtBQUNFLFdBQUE7QUFDQSxrQkFBQTtBQUNBLGVBQUE7QUFDQSxtQkFBQTtBQUNBLFVBQUE7QUFDQSxVQUFBOztBQUVBLE1BQUEsQ0FBQTtBQUNFLFNBQUE7QUFDQSxXQUFBOztBQUVBLE1BQUEsQ0FKRixjQUlFO0FBQ0UsYUFBQTs7QUFJSixNQUFBLENBQUE7QUFDRSxXQUFBO0FBQ0Esa0JBQUE7QUFDQSxlQUFBO0FBQ0EsbUJBQUE7QUFDQSxTQUFBO0FBQ0EsVUFBQTs7QUFFQSxNQUFBLENBQUE7QUFDRSxTQUFBO0FBQ0EsU0FBQTtBQUNBLFVBQUE7OyIsCiAgIm5hbWVzIjogW10KfQo= */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(ScanComponent, { className: "ScanComponent" });
})();

// src/app/components/remote-app/pages/main/main.component.ts
import { CommonModule as CommonModule2 } from "@angular/common";
import { ChangeDetectionStrategy as ChangeDetectionStrategy2, Component as Component2, ViewChild } from "@angular/core";
import { RouterModule as RouterModule2 } from "@angular/router";
import { IonicModule as IonicModule2 } from "@ionic/angular";
import { TranslateModule } from "@ngx-translate/core";
import * as i08 from "@angular/core";
import * as i14 from "@angular/router";
import * as i23 from "@ionic/angular";
import * as i3 from "@ngx-translate/core";
var _c0 = ["mainTabs"];
var MainComponent = class _MainComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.mainTabs.select("games");
    }, 500);
  }
  static {
    this.\u0275fac = function MainComponent_Factory(t) {
      return new (t || _MainComponent)(i08.\u0275\u0275directiveInject(i14.Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _MainComponent, selectors: [["app-main"]], viewQuery: function MainComponent_Query(rf, ctx) {
      if (rf & 1) {
        i08.\u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        i08.\u0275\u0275queryRefresh(_t = i08.\u0275\u0275loadQuery()) && (ctx.mainTabs = _t.first);
      }
    }, standalone: true, features: [i08.\u0275\u0275StandaloneFeature], decls: 23, vars: 12, consts: [["mainTabs", ""], ["slot", "bottom"], ["tab", "games"], ["name", "grid-outline"], ["tab", "scan"], ["name", "scan-outline"], ["tab", "tickets"], ["name", "wallet-outline"], ["tab", "menu"], ["name", "cog-outline"]], template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        i08.\u0275\u0275elementStart(0, "ion-tabs", null, 0)(2, "ion-tab-bar", 1)(3, "ion-tab-button", 2);
        i08.\u0275\u0275element(4, "ion-icon", 3);
        i08.\u0275\u0275elementStart(5, "span");
        i08.\u0275\u0275text(6);
        i08.\u0275\u0275pipe(7, "translate");
        i08.\u0275\u0275elementEnd()();
        i08.\u0275\u0275elementStart(8, "ion-tab-button", 4);
        i08.\u0275\u0275element(9, "ion-icon", 5);
        i08.\u0275\u0275elementStart(10, "span");
        i08.\u0275\u0275text(11);
        i08.\u0275\u0275pipe(12, "translate");
        i08.\u0275\u0275elementEnd()();
        i08.\u0275\u0275elementStart(13, "ion-tab-button", 6);
        i08.\u0275\u0275element(14, "ion-icon", 7);
        i08.\u0275\u0275elementStart(15, "span");
        i08.\u0275\u0275text(16);
        i08.\u0275\u0275pipe(17, "translate");
        i08.\u0275\u0275elementEnd()();
        i08.\u0275\u0275elementStart(18, "ion-tab-button", 8);
        i08.\u0275\u0275element(19, "ion-icon", 9);
        i08.\u0275\u0275elementStart(20, "span");
        i08.\u0275\u0275text(21);
        i08.\u0275\u0275pipe(22, "translate");
        i08.\u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        i08.\u0275\u0275advance(6);
        i08.\u0275\u0275textInterpolate(i08.\u0275\u0275pipeBind1(7, 4, "MAIN.TABS.GAMES"));
        i08.\u0275\u0275advance(5);
        i08.\u0275\u0275textInterpolate(i08.\u0275\u0275pipeBind1(12, 6, "MAIN.TABS.SCAN_NOW"));
        i08.\u0275\u0275advance(5);
        i08.\u0275\u0275textInterpolate(i08.\u0275\u0275pipeBind1(17, 8, "MAIN.TABS.TICKETS"));
        i08.\u0275\u0275advance(5);
        i08.\u0275\u0275textInterpolate(i08.\u0275\u0275pipeBind1(22, 10, "MAIN.TABS.MENU"));
      }
    }, dependencies: [
      CommonModule2,
      RouterModule2,
      IonicModule2,
      i23.IonIcon,
      i23.IonTabBar,
      i23.IonTabButton,
      i23.IonTabs,
      TranslateModule,
      i3.TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   ion-tab-bar[_ngcontent-%COMP%] {\n  padding-bottom: var(--ion-statusbar-padding, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL3JlbW90ZS1hcHAvcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgaW9uLXRhYi1iYXIge1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tc3RhdHVzYmFyLXBhZGRpbmcsIDApXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNFLFdBQVM7QUFLWDtBQU5BLE1BR0U7QUFDRSxrQkFBZ0IsSUFBSSx1QkFBdUIsRUFBRTtBQUMvQzsiLAogICJuYW1lcyI6IFtdCn0K */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(MainComponent, { className: "MainComponent" });
})();

// src/app/components/remote-app/remote-app.component.ts
import { CommonModule as CommonModule3 } from "@angular/common";
import { HttpClient as HttpClient3, HttpClientModule } from "@angular/common/http";
import { ChangeDetectionStrategy as ChangeDetectionStrategy3, Component as Component3, ViewEncapsulation } from "@angular/core";
import { NavigationEnd, RouterModule as RouterModule3 } from "@angular/router";
import { filter } from "rxjs";
import { IonicModule as IonicModule3 } from "@ionic/angular";
import { TranslateLoader, TranslateModule as TranslateModule2 } from "@ngx-translate/core";

// src/app/utils/custom-translate-loader.ts
import { Injectable as Injectable7 } from "@angular/core";
import { catchError as catchError2 } from "rxjs/operators";
import * as i09 from "@angular/core";
import * as i15 from "@angular/common/http";
var CustomTranslateLoader = class _CustomTranslateLoader {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getTranslation(lang) {
    const apiAddress = environment.web.host + `/assets/i18n/${lang}.json`;
    return this.httpClient.get(apiAddress).pipe(catchError2((error) => {
      console.log("Error loading translation file", error);
      return this.httpClient.get(environment.web.host + `/assets/i18n/es.json`);
    }));
  }
  static {
    this.\u0275fac = function CustomTranslateLoader_Factory(t) {
      return new (t || _CustomTranslateLoader)(i09.\u0275\u0275inject(i15.HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i09.\u0275\u0275defineInjectable({ token: _CustomTranslateLoader, factory: _CustomTranslateLoader.\u0275fac });
  }
};

// src/app/services/game.service.ts
import { Injectable as Injectable8 } from "@angular/core";
import { lastValueFrom as lastValueFrom4 } from "rxjs";
import * as i010 from "@angular/core";
var GameService = class _GameService {
  constructor(apiSrv) {
    this.apiSrv = apiSrv;
    this.apiGame = `${environment.api.host}${"/game"}`;
  }
  getAllTicketsPrizesByUser() {
    return __async(this, null, function* () {
      try {
        const userTicketsPrizeData$ = this.apiSrv.get(`${this.apiGame}/ticket/all?limit=100&offset=0`);
        const userTicketsPrizeData = yield lastValueFrom4(userTicketsPrizeData$);
        return userTicketsPrizeData;
      } catch (error) {
        return [];
      }
    });
  }
  static {
    this.\u0275fac = function GameService_Factory(t) {
      return new (t || _GameService)(i010.\u0275\u0275inject(ApiService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ i010.\u0275\u0275defineInjectable({ token: _GameService, factory: _GameService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/remote-app/remote-app.component.ts
import * as i011 from "@angular/core";
import * as i16 from "@ngx-translate/core";
import * as i52 from "@angular/router";
var RemoteAppComponent = class _RemoteAppComponent {
  constructor(translateSrv, uuidSrv, userSrv, storageSrv, router) {
    this.translateSrv = translateSrv;
    this.uuidSrv = uuidSrv;
    this.userSrv = userSrv;
    this.storageSrv = storageSrv;
    this.router = router;
    this.translateSrv.setDefaultLang("en");
    this.translateSrv.use("en");
  }
  ngOnInit() {
    this.setNoErrorLoadingRemote();
    this.importStyles();
    this.importScripts();
    this.uuidSrv.init();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const uuid2 = this.uuidSrv.getUuid();
      if (uuid2) {
        this.userSrv.checkTokenExpiration(uuid2);
      } else {
        this.uuidSrv.init();
      }
    });
  }
  /*
  Shell logic
  */
  setNoErrorLoadingRemote() {
    this.storageSrv.setItem(ShellErrors.SHELL_LOADING_REMOTE_OK, true);
  }
  importScripts() {
    const scripts = [
      "https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js",
      "https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.esm.js"
    ];
    const head = document.head;
    scripts.forEach((script) => {
      const scriptEl = document.createElement("script");
      scriptEl.type = "module";
      scriptEl.src = script;
      scriptEl.async = false;
      document.head.appendChild(scriptEl);
      head.insertBefore(scriptEl, head.firstElementChild);
    });
  }
  importStyles() {
    const styles = [
      "https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"
    ];
    const head = document.head;
    styles.forEach((style) => {
      const linkEl = document.createElement("link");
      linkEl.rel = "stylesheet";
      linkEl.href = style;
      head.insertBefore(linkEl, head.firstElementChild);
    });
  }
  static {
    this.\u0275fac = function RemoteAppComponent_Factory(t) {
      return new (t || _RemoteAppComponent)(i011.\u0275\u0275directiveInject(i16.TranslateService), i011.\u0275\u0275directiveInject(UuidService), i011.\u0275\u0275directiveInject(UserService), i011.\u0275\u0275directiveInject(StorageService), i011.\u0275\u0275directiveInject(i52.Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i011.\u0275\u0275defineComponent({ type: _RemoteAppComponent, selectors: [["app-remote-app"]], standalone: true, features: [i011.\u0275\u0275ProvidersFeature([
      ApiService,
      UuidService,
      UserService,
      TicketService,
      GameService,
      TranslateModule2.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: CustomTranslateLoader,
          deps: [HttpClient3]
        }
      }).providers
    ]), i011.\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function RemoteAppComponent_Template(rf, ctx) {
      if (rf & 1) {
        i011.\u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [
      CommonModule3,
      RouterModule3,
      i52.RouterOutlet,
      IonicModule3,
      HttpClientModule
    ], styles: ["/* src/app/components/remote-app/remote-app.component.css */\n:host {\n  display: block;\n}\nbody {\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb:\n    56,128,255;\n  --ion-color-primary-contrast: #000000;\n  --ion-color-primary-contrast-rgb:\n    0,0,0;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb:\n    61,194,255;\n  --ion-color-secondary-contrast: #000000;\n  --ion-color-secondary-contrast-rgb:\n    0,0,0;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb:\n    82,96,255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb:\n    255,255,255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb:\n    45,211,111;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb:\n    0,0,0;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb:\n    255,196,9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb:\n    0,0,0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb:\n    235,68,90;\n  --ion-color-danger-contrast: #000000;\n  --ion-color-danger-contrast-rgb:\n    0,0,0;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb:\n    244,245,248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb:\n    0,0,0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb:\n    146,148,156;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb:\n    0,0,0;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb:\n    34,36,40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb:\n    255,255,255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL3JlbW90ZS1hcHAvcmVtb3RlLWFwcC5jb21wb25lbnQuY3NzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgLypcbiAgQ3VzdG9tIGFwcCBzdHlsZXMgaGVyZVxuICAqL1xuXHQtLWlvbi1jb2xvci1wcmltYXJ5OiAjMzg4MGZmO1xuXHQtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsMTI4LDI1NTtcblx0LS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogIzAwMDAwMDtcblx0LS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuXHQtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuXHQtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cblx0LS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuXHQtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwxOTQsMjU1O1xuXHQtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICMwMDAwMDA7XG5cdC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuXHQtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG5cdC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG5cdC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuXHQtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLDk2LDI1NTtcblx0LS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG5cdC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG5cdC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuXHQtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG5cdC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG5cdC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwyMTEsMTExO1xuXHQtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuXHQtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG5cdC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG5cdC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuXHQtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuXHQtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LDE5Niw5O1xuXHQtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuXHQtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwwLDA7XG5cdC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG5cdC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuXHQtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG5cdC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSw2OCw5MDtcblx0LS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjMDAwMDAwO1xuXHQtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAwLDAsMDtcblx0LS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xuXHQtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuXHQtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODtcblx0LS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsMjQ1LDI0ODtcblx0LS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG5cdC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwwLDA7XG5cdC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuXHQtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xuXG5cdC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5Yztcblx0LS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LDE0OCwxNTY7XG5cdC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcblx0LS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwwLDA7XG5cdC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcblx0LS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cblx0LS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcblx0LS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LDM2LDQwO1xuXHQtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuXHQtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG5cdC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG5cdC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDRSxXQUFTO0FBQ1g7QUFFQTtBQUlDLHVCQUFxQjtBQUNyQjtBQUFBLElBQXlCLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDaEMsZ0NBQThCO0FBQzlCO0FBQUEsSUFBa0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0Qyw2QkFBMkI7QUFDM0IsNEJBQTBCO0FBRTFCLHlCQUF1QjtBQUN2QjtBQUFBLElBQTJCLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDbEMsa0NBQWdDO0FBQ2hDO0FBQUEsSUFBb0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QywrQkFBNkI7QUFDN0IsOEJBQTRCO0FBRTVCLHdCQUFzQjtBQUN0QjtBQUFBLElBQTBCLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDaEMsaUNBQStCO0FBQy9CO0FBQUEsSUFBbUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUMzQyw4QkFBNEI7QUFDNUIsNkJBQTJCO0FBRTNCLHVCQUFxQjtBQUNyQjtBQUFBLElBQXlCLEVBQUUsQ0FBQyxHQUFHLENBQUM7QUFDaEMsZ0NBQThCO0FBQzlCO0FBQUEsSUFBa0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0Qyw2QkFBMkI7QUFDM0IsNEJBQTBCO0FBRTFCLHVCQUFxQjtBQUNyQjtBQUFBLElBQXlCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDakMsZ0NBQThCO0FBQzlCO0FBQUEsSUFBa0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0Qyw2QkFBMkI7QUFDM0IsNEJBQTBCO0FBRTFCLHNCQUFvQjtBQUNwQjtBQUFBLElBQXdCLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDL0IsK0JBQTZCO0FBQzdCO0FBQUEsSUFBaUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyw0QkFBMEI7QUFDMUIsMkJBQXlCO0FBRXpCLHFCQUFtQjtBQUNuQjtBQUFBLElBQXVCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDL0IsOEJBQTRCO0FBQzVCO0FBQUEsSUFBZ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQywyQkFBeUI7QUFDekIsMEJBQXdCO0FBRXhCLHNCQUFvQjtBQUNwQjtBQUFBLElBQXdCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDaEMsK0JBQTZCO0FBQzdCO0FBQUEsSUFBaUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyw0QkFBMEI7QUFDMUIsMkJBQXlCO0FBRXpCLG9CQUFrQjtBQUNsQjtBQUFBLElBQXNCLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDNUIsNkJBQTJCO0FBQzNCO0FBQUEsSUFBK0IsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUN2QywwQkFBd0I7QUFDeEIseUJBQXVCO0FBQ3hCOyIsCiAgIm5hbWVzIjogW10KfQo= */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassDebugInfo(RemoteAppComponent, { className: "RemoteAppComponent" });
})();

// src/app/components/remote-app/pages/tickets/tickets.component.ts
import { CommonModule as CommonModule5 } from "@angular/common";
import { ChangeDetectionStrategy as ChangeDetectionStrategy5, Component as Component5 } from "@angular/core";
import { RouterModule as RouterModule4 } from "@angular/router";
import { IonicModule as IonicModule5 } from "@ionic/angular";

// src/app/components/remote-app/components/header/header.component.ts
import { CommonModule as CommonModule4 } from "@angular/common";
import { ChangeDetectionStrategy as ChangeDetectionStrategy4, Component as Component4, Input } from "@angular/core";
import { IonicModule as IonicModule4 } from "@ionic/angular";
import * as i012 from "@angular/core";
import * as i17 from "@angular/router";
import * as i24 from "@ngx-translate/core";
import * as i32 from "@angular/common";
import * as i4 from "@ionic/angular";
function HeaderComponent_ion_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i012.\u0275\u0275getCurrentView();
    i012.\u0275\u0275elementStart(0, "ion-button", 3);
    i012.\u0275\u0275listener("click", function HeaderComponent_ion_button_5_Template_ion_button_click_0_listener() {
      i012.\u0275\u0275restoreView(_r2);
      const ctx_r1 = i012.\u0275\u0275nextContext();
      return i012.\u0275\u0275resetView(ctx_r1.openMenu());
    });
    i012.\u0275\u0275text(1, "MENU");
    i012.\u0275\u0275elementEnd();
  }
}
var HeaderComponent = class _HeaderComponent {
  constructor(router, cdr, translateSrv) {
    this.router = router;
    this.cdr = cdr;
    this.translateSrv = translateSrv;
    this.showMenu = true;
  }
  changeLanguage(lang) {
    this.translateSrv.use(lang);
    this.cdr.detectChanges();
  }
  openMenu() {
    this.router.navigate(["/main/", "menu"]);
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(t) {
      return new (t || _HeaderComponent)(i012.\u0275\u0275directiveInject(i17.Router), i012.\u0275\u0275directiveInject(i012.ChangeDetectorRef), i012.\u0275\u0275directiveInject(i24.TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i012.\u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], inputs: { showMenu: "showMenu" }, standalone: true, features: [i012.\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [["color", "primary"], ["slot", "end"], [3, "click", 4, "ngIf"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        i012.\u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
        i012.\u0275\u0275text(3, "Lookttery");
        i012.\u0275\u0275elementEnd();
        i012.\u0275\u0275elementStart(4, "ion-buttons", 1);
        i012.\u0275\u0275template(5, HeaderComponent_ion_button_5_Template, 2, 0, "ion-button", 2);
        i012.\u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        i012.\u0275\u0275advance(5);
        i012.\u0275\u0275property("ngIf", ctx.showMenu);
      }
    }, dependencies: [CommonModule4, i32.NgIf, IonicModule4, i4.IonButton, i4.IonButtons, i4.IonHeader, i4.IonTitle, i4.IonToolbar], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --padding-top: calc(var(--ion-statusbar-padding, 0) + var(--ion-statusbar-padding, 0));\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL3JlbW90ZS1hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy10b3A6IGNhbGModmFyKC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nLCAwKSArIHZhcigtLWlvbi1zdGF0dXNiYXItcGFkZGluZywgMCkpO1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQUE7QUFDRSxXQUFTO0FBS1g7QUFOQSxNQUdFO0FBQ0UsaUJBQWUsS0FBSyxJQUFJLHVCQUF1QixFQUFFLEdBQUcsRUFBRSxJQUFJLHVCQUF1QixFQUFFO0FBQ3JGOyIsCiAgIm5hbWVzIjogW10KfQo= */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent" });
})();

// src/app/pipes/custom-date.pipe.ts
import { Pipe } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as i013 from "@angular/core";
import * as i18 from "@ngx-translate/core";
var CustomDatePipe = class _CustomDatePipe {
  constructor(translateService) {
    this.translateService = translateService;
  }
  transform(value) {
    const date = new Date(value);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    let finalValue = date.toLocaleDateString(this.translateService.currentLang, options);
    const finalValue$ = new BehaviorSubject(finalValue);
    this.translateService.onLangChange.subscribe(() => {
      finalValue = date.toLocaleDateString(this.translateService.currentLang, options);
      return finalValue$.next(finalValue);
    });
    return finalValue$;
  }
  static {
    this.\u0275fac = function CustomDatePipe_Factory(t) {
      return new (t || _CustomDatePipe)(i013.\u0275\u0275directiveInject(i18.TranslateService, 16));
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ i013.\u0275\u0275definePipe({ name: "date", type: _CustomDatePipe, pure: true, standalone: true });
  }
};

// src/app/components/remote-app/pages/tickets/tickets.component.ts
import * as i014 from "@angular/core";
import * as i33 from "@ionic/angular";
import * as i42 from "@ngx-translate/core";
import * as i53 from "@angular/common";
var _forTrack0 = ($index, $item) => $item.ticket._id;
function TicketsComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "ion-item-sliding")(1, "ion-item", 2)(2, "ion-label", 3)(3, "ion-note", 4);
    i014.\u0275\u0275text(4);
    i014.\u0275\u0275pipe(5, "async");
    i014.\u0275\u0275pipe(6, "date");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(7, "section", 5);
    i014.\u0275\u0275element(8, "ion-img", 6);
    i014.\u0275\u0275elementStart(9, "strong", 7);
    i014.\u0275\u0275text(10);
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(11, "span", 8);
    i014.\u0275\u0275text(12);
    i014.\u0275\u0275pipe(13, "currency");
    i014.\u0275\u0275elementEnd()()()();
    i014.\u0275\u0275elementStart(14, "ion-item-options", 9)(15, "ion-item-option", 10);
    i014.\u0275\u0275listener("click", function TicketsComponent_For_4_Template_ion_item_option_click_15_listener() {
      const restoredCtx = i014.\u0275\u0275restoreView(_r8);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r7 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r7.deleteTicketById(item_r2.ticket._id || ""));
    });
    i014.\u0275\u0275element(16, "ion-icon", 11);
    i014.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = i014.\u0275\u0275nextContext();
    i014.\u0275\u0275advance(1);
    i014.\u0275\u0275property("button", true);
    i014.\u0275\u0275advance(3);
    i014.\u0275\u0275textInterpolate(i014.\u0275\u0275pipeBind1(5, 5, i014.\u0275\u0275pipeBind1(6, 7, item_r2.ticket.date)));
    i014.\u0275\u0275advance(4);
    i014.\u0275\u0275property("src", ctx_r0.environment.web.host + "/assets/logos/games/" + item_r2.ticket.code + ".png");
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275textInterpolate(item_r2.ticket.data.info.number);
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275textInterpolate(i014.\u0275\u0275pipeBind2(13, 9, item_r2.prize.quantity / 100, "EUR"));
  }
}
function TicketsComponent_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "p");
    i014.\u0275\u0275text(1, "Empty list of tickets");
    i014.\u0275\u0275elementEnd();
  }
}
var TicketsComponent = class _TicketsComponent {
  constructor(cdr, ticketSrv, gameSrv, loadingCtrl, translateSrv) {
    this.cdr = cdr;
    this.ticketSrv = ticketSrv;
    this.gameSrv = gameSrv;
    this.loadingCtrl = loadingCtrl;
    this.translateSrv = translateSrv;
    this.tickets = [];
    this.environment = environment;
  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    return __async(this, null, function* () {
      yield this.getUserTickets();
      this.sortTicketsByDate();
    });
  }
  sortTicketsByDate() {
    this.tickets.sort((a, b) => {
      const dateA = new Date(a.ticket.date);
      const dateB = new Date(b.ticket.date);
      return dateB.getTime() - dateA.getTime();
    });
    this.cdr.detectChanges();
  }
  deleteTicketById(id) {
    return __async(this, null, function* () {
      yield this.ticketSrv.deleteTicketById(id, true);
      yield this.getUserTickets();
    });
  }
  getUserTickets() {
    return __async(this, null, function* () {
      yield this.showLoading();
      try {
        this.tickets = yield this.gameSrv.getAllTicketsPrizesByUser();
        this.cdr.detectChanges();
        console.log(this.tickets);
      } catch (error) {
        console.log(error);
      }
      yield this.dismissLoading();
    });
  }
  showLoading() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translateSrv.instant("TICKETS.LOADING_TICKETS")
      });
      loading.present();
    });
  }
  dismissLoading() {
    return __async(this, null, function* () {
      yield this.loadingCtrl.dismiss();
    });
  }
  static {
    this.\u0275fac = function TicketsComponent_Factory(t) {
      return new (t || _TicketsComponent)(i014.\u0275\u0275directiveInject(i014.ChangeDetectorRef), i014.\u0275\u0275directiveInject(TicketService), i014.\u0275\u0275directiveInject(GameService), i014.\u0275\u0275directiveInject(i33.LoadingController), i014.\u0275\u0275directiveInject(i42.TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i014.\u0275\u0275defineComponent({ type: _TicketsComponent, selectors: [["app-tickets"]], standalone: true, features: [i014.\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [["padding", "", "color", "light"], [1, "ticket-list"], [1, "ticket-item", 3, "button"], [1, "ticket-item-text"], ["color", "medium"], [1, "game-item-data"], ["aria-hidden", "true", "slot", "start", "alt", "", 1, "game-item-img", 3, "src"], [1, "game-item-data-number"], [1, "game-item-prize"], ["slot", "end"], ["color", "danger", "expandable", "true", 3, "click"], ["slot", "icon-only", "name", "trash"]], template: function TicketsComponent_Template(rf, ctx) {
      if (rf & 1) {
        i014.\u0275\u0275element(0, "app-header");
        i014.\u0275\u0275elementStart(1, "ion-content", 0)(2, "ion-list", 1);
        i014.\u0275\u0275repeaterCreate(3, TicketsComponent_For_4_Template, 17, 12, "ion-item-sliding", null, _forTrack0, false, TicketsComponent_ForEmpty_5_Template, 2, 0);
        i014.\u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        i014.\u0275\u0275advance(3);
        i014.\u0275\u0275repeater(ctx.tickets);
      }
    }, dependencies: [
      CommonModule5,
      i53.AsyncPipe,
      i53.CurrencyPipe,
      RouterModule4,
      IonicModule5,
      i33.IonContent,
      i33.IonIcon,
      i33.IonImg,
      i33.IonItem,
      i33.IonItemOption,
      i33.IonItemOptions,
      i33.IonItemSliding,
      i33.IonLabel,
      i33.IonList,
      i33.IonNote,
      HeaderComponent,
      CustomDatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  padding-top: 50px;\n}\n[_nghost-%COMP%]   .ticket-list[_ngcontent-%COMP%] {\n  margin-bottom: 150px;\n}\n[_nghost-%COMP%]   .ticket-list[_ngcontent-%COMP%]   .ticket-item[_ngcontent-%COMP%]   .ticket-item-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .ticket-list[_ngcontent-%COMP%]   .ticket-item[_ngcontent-%COMP%]   .ticket-item-text[_ngcontent-%COMP%]   .game-item-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n[_nghost-%COMP%]   .ticket-list[_ngcontent-%COMP%]   .ticket-item[_ngcontent-%COMP%]   .ticket-item-text[_ngcontent-%COMP%]   .game-item-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: calc(100% - 45px);\n  align-items: center;\n  margin-top: 12px;\n}\n[_nghost-%COMP%]   .ticket-list[_ngcontent-%COMP%]   .ticket-item[_ngcontent-%COMP%]   .ticket-item-text[_ngcontent-%COMP%]   .game-item-data[_ngcontent-%COMP%]   .game-item-data-number[_ngcontent-%COMP%] {\n  letter-spacing: 15px;\n  font-size: 30px;\n  display: block;\n  width: 100%;\n  padding-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL3JlbW90ZS1hcHAvcGFnZXMvdGlja2V0cy90aWNrZXRzLmNvbXBvbmVudC5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9XG5cbiAgLnRpY2tldC1saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcblxuICAgIC50aWNrZXQtaXRlbSB7XG4gICAgICAudGlja2V0LWl0ZW0tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLmdhbWUtaXRlbS1pbWcge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nYW1lLWl0ZW0tZGF0YSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0NXB4KTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG5cbiAgICAgICAgICAuZ2FtZS1pdGVtLWRhdGEtbnVtYmVyIHtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNFLFdBQVM7QUF1Q1g7QUF4Q0EsTUFHRTtBQUNFLFVBQVE7QUFDUixTQUFPO0FBQ1AsZUFBYTtBQUNmO0FBUEYsTUFTRSxDQUFDO0FBQ0MsaUJBQWU7QUE2QmpCO0FBdkNGLE1BU0UsQ0FBQyxZQUdDLENBQUMsWUFDQyxDQUFDO0FBQ0MsV0FBUztBQUNULGtCQUFnQjtBQXNCbEI7QUFyQ04sTUFTRSxDQUFDLFlBR0MsQ0FBQyxZQUNDLENBQUMsaUJBSUMsQ0FBQztBQUNDLFNBQU87QUFDUCxVQUFRO0FBQ1Y7QUFwQlIsTUFTRSxDQUFDLFlBR0MsQ0FBQyxZQUNDLENBQUMsaUJBU0MsQ0FBQztBQUNDLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsU0FBTyxLQUFLLEtBQUssRUFBRTtBQUNuQixlQUFhO0FBQ2IsY0FBWTtBQVNkO0FBcENSLE1BU0UsQ0FBQyxZQUdDLENBQUMsWUFDQyxDQUFDLGlCQVNDLENBQUMsZUFPQyxDQUFDO0FBQ0Msa0JBQWdCO0FBQ2hCLGFBQVc7QUFDWCxXQUFTO0FBQ1QsU0FBTztBQUNQLGdCQUFjO0FBQ2hCOyIsCiAgIm5hbWVzIjogW10KfQo= */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassDebugInfo(TicketsComponent, { className: "TicketsComponent" });
})();

// src/app/components/remote-app/pages/menu/menu.component.ts
import { CommonModule as CommonModule6 } from "@angular/common";
import { ChangeDetectionStrategy as ChangeDetectionStrategy6, Component as Component6 } from "@angular/core";
import { IonicModule as IonicModule6 } from "@ionic/angular";
import { QrCodeModule } from "ng-qrcode";
import { RouterModule as RouterModule5 } from "@angular/router";
import * as i015 from "@angular/core";
import * as i25 from "@angular/common";
import * as i34 from "@ionic/angular";
import * as i43 from "ng-qrcode";
function MenuComponent_qr_code_4_Template(rf, ctx) {
  if (rf & 1) {
    i015.\u0275\u0275element(0, "qr-code", 5);
  }
  if (rf & 2) {
    const ctx_r0 = i015.\u0275\u0275nextContext();
    i015.\u0275\u0275property("value", ctx_r0.qrUuid);
  }
}
var MenuComponent = class _MenuComponent {
  constructor(cdr, uuidSrv) {
    this.cdr = cdr;
    this.uuidSrv = uuidSrv;
    this.qrUuid = "aaa";
  }
  ionViewDidEnter() {
    this.qrUuid = GlobalKeys.UUID_QR_CODE + this.uuidSrv.getUuid();
    this.cdr.detectChanges();
  }
  static {
    this.\u0275fac = function MenuComponent_Factory(t) {
      return new (t || _MenuComponent)(i015.\u0275\u0275directiveInject(i015.ChangeDetectorRef), i015.\u0275\u0275directiveInject(UuidService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ i015.\u0275\u0275defineComponent({ type: _MenuComponent, selectors: [["app-menu"]], standalone: true, features: [i015.\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [[3, "showMenu"], ["padding", "", "color", "light"], [1, "menu-list"], [1, "menu-list-qr"], ["size", "300", "errorCorrectionLevel", "M", 3, "value", 4, "ngIf"], ["size", "300", "errorCorrectionLevel", "M", 3, "value"]], template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        i015.\u0275\u0275element(0, "app-header", 0);
        i015.\u0275\u0275elementStart(1, "ion-content", 1)(2, "ion-list", 2)(3, "section", 3);
        i015.\u0275\u0275template(4, MenuComponent_qr_code_4_Template, 1, 1, "qr-code", 4);
        i015.\u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        i015.\u0275\u0275property("showMenu", false);
        i015.\u0275\u0275advance(4);
        i015.\u0275\u0275property("ngIf", ctx.qrUuid);
      }
    }, dependencies: [
      CommonModule6,
      i25.NgIf,
      IonicModule6,
      i34.IonContent,
      i34.IonList,
      RouterModule5,
      QrCodeModule,
      i43.QrCodeComponent,
      HeaderComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  padding-top: 50px;\n}\n[_nghost-%COMP%]   .menu-list[_ngcontent-%COMP%]   .menu-list-qr[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL3JlbW90ZS1hcHAvcGFnZXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICB9XG5cbiAgLm1lbnUtbGlzdCB7XG4gICAgLm1lbnUtbGlzdC1xciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUNFLFdBQVM7QUFnQlg7QUFqQkEsTUFHRTtBQUNFLFVBQVE7QUFDUixTQUFPO0FBQ1AsZUFBYTtBQUNmO0FBUEYsTUFTRSxDQUFDLFVBQ0MsQ0FBQztBQUNDLFdBQVM7QUFDVCxrQkFBZ0I7QUFDaEIsbUJBQWlCO0FBQ2pCLGVBQWE7QUFDZjsiLAogICJuYW1lcyI6IFtdCn0K */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassDebugInfo(MenuComponent, { className: "MenuComponent" });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: RemoteAppComponent,
    children: [
      {
        path: "",
        redirectTo: "main",
        pathMatch: "full"
      },
      {
        path: "main",
        component: MainComponent,
        children: [
          {
            path: "scan",
            component: ScanComponent
          },
          {
            path: "tickets",
            component: TicketsComponent
          },
          {
            path: "menu",
            component: MenuComponent
          }
        ]
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=routes.js.map
