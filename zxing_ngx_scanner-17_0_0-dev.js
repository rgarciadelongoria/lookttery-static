var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {}) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = value => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = value => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/@zxing/ngx-scanner/fesm2022/zxing-ngx-scanner.mjs
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import { EventEmitter, Component, ChangeDetectionStrategy, ViewChild, Input, Output, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserMultiFormatReader, BrowserCodeReader } from "@zxing/browser";
import { NotFoundException, ChecksumException, FormatException, DecodeHintType, BarcodeFormat } from "@zxing/library";
import { BehaviorSubject } from "rxjs";
var _c0 = ["preview"];
var BrowserMultiFormatContinuousReader = class extends BrowserMultiFormatReader {
  /**
   * Returns the code reader scanner controls.
   */
  getScannerControls() {
    if (!this.scannerControls) {
      throw new Error("No scanning is running at the time.");
    }
    return this.scannerControls;
  }
  /**
   * Starts the decoding from the current or a new video element.
   *
   * @param deviceId The device's to be used Id
   * @param previewEl A new video element
   */
  scanFromDeviceObservable(deviceId, previewEl) {
    return __async(this, null, function* () {
      const scan$ = new BehaviorSubject({});
      let ctrls;
      try {
        ctrls = yield this.decodeFromVideoDevice(deviceId, previewEl, (result, error) => {
          if (!error) {
            scan$.next({
              result
            });
            return;
          }
          const errorName = error.name;
          if (
          // scan Failure - found nothing, no error
          errorName === NotFoundException.name ||
          // scan Error - found the QR but got error on decoding
          errorName === ChecksumException.name || errorName === FormatException.name || error.message.includes("No MultiFormat Readers were able to detect the code.")) {
            scan$.next({
              error
            });
            return;
          }
          scan$.error(error);
          this.scannerControls.stop();
          this.scannerControls = void 0;
          return;
        });
        this.scannerControls = __spreadProps(__spreadValues({}, ctrls), {
          stop() {
            ctrls.stop();
            scan$.complete();
          }
        });
      } catch (e) {
        scan$.error(e);
        this.scannerControls?.stop();
        this.scannerControls = void 0;
      }
      return scan$.asObservable();
    });
  }
};
var ZXingScannerComponent = class _ZXingScannerComponent {
  /**
   * Exposes the current code reader, so the user can use it's APIs.
   */
  get codeReader() {
    return this._codeReader;
  }
  /**
   * User device input
   */
  set device(device) {
    if (!this._ready) {
      this._devicePreStart = device;
      return;
    }
    if (this.isAutostarting) {
      console.warn("Avoid setting a device during auto-start.");
      return;
    }
    if (this.isCurrentDevice(device)) {
      console.warn("Setting the same device is not allowed.");
      return;
    }
    if (!this.hasPermission) {
      console.warn("Permissions not set yet, waiting for them to be set to apply device change.");
      return;
    }
    this.setDevice(device);
  }
  /**
   * User device accessor.
   */
  get device() {
    return this._device;
  }
  /**
   * Returns all the registered formats.
   */
  get formats() {
    return this.hints.get(DecodeHintType.POSSIBLE_FORMATS);
  }
  /**
   * Registers formats the scanner should support.
   *
   * @param input BarcodeFormat or case-insensitive string array.
   */
  set formats(input) {
    if (typeof input === "string") {
      throw new Error("Invalid formats, make sure the [formats] input is a binding.");
    }
    const formats = input.map(f => this.getBarcodeFormatOrFail(f));
    const hints = this.hints;
    hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);
    this.hints = hints;
  }
  /**
   * Returns all the registered hints.
   */
  get hints() {
    return this._hints;
  }
  /**
   * Does what it takes to set the hints.
   */
  set hints(hints) {
    this._hints = hints;
    this.codeReader?.setHints(this._hints);
  }
  /**
   * Sets the desired constraints in all video tracks.
   * @experimental
   */
  set videoConstraints(constraints) {
    const controls = this.codeReader?.getScannerControls();
    if (!controls) {
      return;
    }
    controls?.streamVideoConstraintsApply(constraints);
  }
  /**
   *
   */
  set isAutostarting(state) {
    this._isAutostarting = state;
    this.autostarting.next(state);
  }
  /**
   *
   */
  get isAutostarting() {
    return this._isAutostarting;
  }
  /**
   * Can turn on/off the device flashlight.
   *
   * @experimental Torch/Flash APIs are not stable in all browsers, it may be buggy!
   */
  set torch(onOff) {
    try {
      const controls = this.getCodeReader().getScannerControls();
      controls.switchTorch(onOff);
    } catch (error) {}
  }
  /**
   * Starts and Stops the scanning.
   */
  set enable(enabled) {
    this._enabled = Boolean(enabled);
    if (!this._enabled) {
      this.reset();
      BrowserMultiFormatContinuousReader.releaseAllStreams();
    } else {
      if (this.device) {
        this.scanFromDevice(this.device.deviceId);
      } else {
        this.init();
      }
    }
  }
  /**
   * Tells if the scanner is enabled or not.
   */
  get enabled() {
    return this._enabled;
  }
  /**
   * If is `tryHarder` enabled.
   */
  get tryHarder() {
    return this.hints.get(DecodeHintType.TRY_HARDER);
  }
  /**
   * Enable/disable tryHarder hint.
   */
  set tryHarder(enable) {
    const hints = this.hints;
    if (enable) {
      hints.set(DecodeHintType.TRY_HARDER, true);
    } else {
      hints.delete(DecodeHintType.TRY_HARDER);
    }
    this.hints = hints;
  }
  /**
   * Constructor to build the object and do some DI.
   */
  constructor() {
    this.timeBetweenScans = 500;
    this.delayBetweenScanSuccess = 500;
    this.previewFitMode = "cover";
    this.poster = "";
    this._ready = false;
    this.autostarted = new EventEmitter();
    this.autostarting = new EventEmitter();
    this.torchCompatible = new EventEmitter(false);
    this.scanSuccess = new EventEmitter();
    this.scanFailure = new EventEmitter();
    this.scanError = new EventEmitter();
    this.scanComplete = new EventEmitter();
    this.camerasFound = new EventEmitter();
    this.camerasNotFound = new EventEmitter();
    this.permissionResponse = new EventEmitter(true);
    this.hasDevices = new EventEmitter();
    this.deviceChange = new EventEmitter();
    this._enabled = true;
    this._hints = /* @__PURE__ */new Map();
    this.autofocusEnabled = true;
    this.autostart = true;
    this.formats = [BarcodeFormat.QR_CODE];
    this.hasNavigator = typeof navigator !== "undefined";
    this.isMediaDevicesSupported = this.hasNavigator && !!navigator.mediaDevices;
  }
  /**
   * Gets and registers all cameras.
   */
  askForPermission() {
    return __async(this, null, function* () {
      if (!this.hasNavigator) {
        console.error("@zxing/ngx-scanner", "Can't ask permission, navigator is not present.");
        this.setPermission(null);
        return this.hasPermission;
      }
      if (!this.isMediaDevicesSupported) {
        console.error("@zxing/ngx-scanner", "Can't get user media, this is not supported.");
        this.setPermission(null);
        return this.hasPermission;
      }
      let stream;
      let permission;
      try {
        stream = yield this.getAnyVideoDevice();
        permission = !!stream;
      } catch (err) {
        return this.handlePermissionException(err);
      } finally {
        this.terminateStream(stream);
      }
      this.setPermission(permission);
      return permission;
    });
  }
  /**
   *
   */
  getAnyVideoDevice() {
    return navigator.mediaDevices.getUserMedia({
      video: true
    });
  }
  /**
   * Terminates a stream and it's tracks.
   */
  terminateStream(stream) {
    if (stream) {
      stream.getTracks().forEach(t => t.stop());
    }
    stream = void 0;
  }
  init() {
    return __async(this, null, function* () {
      if (!this.autostart) {
        console.warn("Feature 'autostart' disabled. Permissions and devices recovery has to be run manually.");
        this.initAutostartOff();
        this._ready = true;
        return;
      }
      yield this.initAutostartOn();
      this._ready = true;
    });
  }
  /**
   * Initializes the component without starting the scanner.
   */
  initAutostartOff() {
    this.isAutostarting = false;
    this.updateVideoInputDevices();
    if (this._device && this._devicePreStart) {
      this.setDevice(this._devicePreStart);
    }
  }
  /**
   * Initializes the component and starts the scanner.
   * Permissions are asked to accomplish that.
   */
  initAutostartOn() {
    return __async(this, null, function* () {
      this.isAutostarting = true;
      let hasPermission;
      try {
        hasPermission = yield this.askForPermission();
      } catch (e) {
        console.error("Exception occurred while asking for permission:", e);
        return;
      }
      if (hasPermission) {
        const devices = yield this.updateVideoInputDevices();
        yield this.autostartScanner([...devices]);
      }
      this.isAutostarting = false;
      this.autostarted.next();
    });
  }
  /**
   * Checks if the given device is the current defined one.
   */
  isCurrentDevice(device) {
    return device?.deviceId === this._device?.deviceId;
  }
  /**
   * Executes some actions before destroy the component.
   */
  ngOnDestroy() {
    this.reset();
    BrowserMultiFormatContinuousReader.releaseAllStreams();
  }
  /**
   *
   */
  ngOnInit() {
    this.init();
  }
  /**
   * Stops the scanning, if any.
   */
  scanStop() {
    if (this._scanSubscription) {
      this.codeReader?.getScannerControls().stop();
      this._scanSubscription?.unsubscribe();
      this._scanSubscription = void 0;
    }
    this.torchCompatible.next(false);
  }
  /**
   * Stops the scanning, if any.
   */
  scanStart() {
    if (this._scanSubscription) {
      throw new Error("There is already a scan process running.");
    }
    if (!this._device) {
      throw new Error("No device defined, cannot start scan, please define a device.");
    }
    this.scanFromDevice(this._device.deviceId);
  }
  /**
   * Stops old `codeReader` and starts scanning in a new one.
   */
  restart() {
    this._codeReader = void 0;
    const prevDevice = this._reset();
    if (!prevDevice) {
      return;
    }
    this.device = prevDevice;
  }
  /**
   * Discovers and updates known video input devices.
   */
  updateVideoInputDevices() {
    return __async(this, null, function* () {
      const devices = (yield BrowserCodeReader.listVideoInputDevices()) || [];
      const hasDevices = devices && devices.length > 0;
      this.hasDevices.next(hasDevices);
      this.camerasFound.next([...devices]);
      if (!hasDevices) {
        this.camerasNotFound.next(null);
      }
      return devices;
    });
  }
  /**
   * Starts the scanner with the back camera otherwise take the last
   * available device.
   */
  autostartScanner(devices) {
    return __async(this, null, function* () {
      const matcher = ({
        label
      }) => /back|trás|rear|traseira|environment|ambiente/gi.test(label);
      const device = devices.find(matcher) || devices.pop();
      if (!device) {
        throw new Error("Impossible to autostart, no input devices available.");
      }
      yield this.setDevice(device);
      this.deviceChange.next(device);
    });
  }
  /**
   * Dispatches the scan success event.
   *
   * @param result the scan result.
   */
  dispatchScanSuccess(result) {
    this.scanSuccess.next(result.getText());
  }
  /**
   * Dispatches the scan failure event.
   */
  dispatchScanFailure(reason) {
    this.scanFailure.next(reason);
  }
  /**
   * Dispatches the scan error event.
   *
   * @param error the error thing.
   */
  dispatchScanError(error) {
    if (!this.scanError.observed) {
      console.error(`zxing scanner component: ${error.name}`, error);
      console.warn("Use the `(scanError)` property to handle errors like this!");
    }
    this.scanError.next(error);
  }
  /**
   * Dispatches the scan event.
   *
   * @param result the scan result.
   */
  dispatchScanComplete(result) {
    this.scanComplete.next(result);
  }
  /**
   * Returns the filtered permission.
   */
  handlePermissionException(err) {
    console.error("@zxing/ngx-scanner", "Error when asking for permission.", err);
    let permission;
    switch (err.name) {
      case "NotSupportedError":
        console.warn("@zxing/ngx-scanner", err.message);
        permission = null;
        this.hasDevices.next(null);
        break;
      case "NotAllowedError":
        console.warn("@zxing/ngx-scanner", err.message);
        permission = false;
        this.hasDevices.next(true);
        break;
      case "NotFoundError":
        console.warn("@zxing/ngx-scanner", err.message);
        permission = null;
        this.hasDevices.next(false);
        this.camerasNotFound.next(err);
        break;
      case "NotReadableError":
        console.warn("@zxing/ngx-scanner", "Couldn't read the device(s)'s stream, it's probably in use by another app.");
        permission = null;
        this.hasDevices.next(false);
        this.camerasNotFound.next(err);
        break;
      default:
        console.warn("@zxing/ngx-scanner", "I was not able to define if I have permissions for camera or not.", err);
        permission = null;
        break;
    }
    this.setPermission(permission);
    this.permissionResponse.error(err);
    return permission;
  }
  /**
   * Returns a valid BarcodeFormat or fails.
   */
  getBarcodeFormatOrFail(format) {
    return typeof format === "string" ? BarcodeFormat[format.trim().toUpperCase()] : format;
  }
  /**
   * Return a code reader, create one if non exist
   */
  getCodeReader() {
    if (!this._codeReader) {
      const options = {
        delayBetweenScanAttempts: this.timeBetweenScans,
        delayBetweenScanSuccess: this.delayBetweenScanSuccess
      };
      this._codeReader = new BrowserMultiFormatContinuousReader(this.hints, options);
    }
    return this._codeReader;
  }
  /**
   * Starts the continuous scanning for the given device.
   *
   * @param deviceId The deviceId from the device.
   */
  scanFromDevice(deviceId) {
    return __async(this, null, function* () {
      const videoElement = this.previewElemRef.nativeElement;
      const codeReader = this.getCodeReader();
      const scanStream = yield codeReader.scanFromDeviceObservable(deviceId, videoElement);
      if (!scanStream) {
        throw new Error("Undefined decoding stream, aborting.");
      }
      const next = x => this._onDecodeResult(x.result, x.error);
      const error = err => this._onDecodeError(err);
      const complete = () => {};
      this._scanSubscription = scanStream.subscribe(next, error, complete);
      if (this._scanSubscription.closed) {
        return;
      }
      const controls = codeReader.getScannerControls();
      const hasTorchControl = typeof controls.switchTorch !== "undefined";
      this.torchCompatible.next(hasTorchControl);
    });
  }
  /**
   * Handles decode errors.
   */
  _onDecodeError(err) {
    this.dispatchScanError(err);
  }
  /**
   * Handles decode results.
   */
  _onDecodeResult(result, error) {
    if (result) {
      this.dispatchScanSuccess(result);
    } else {
      this.dispatchScanFailure(error);
    }
    this.dispatchScanComplete(result);
  }
  /**
   * Stops the code reader and returns the previous selected device.
   */
  _reset() {
    if (!this._codeReader) {
      return;
    }
    this._codeReader = void 0;
    const device = this._device;
    this.device = void 0;
    return device;
  }
  /**
   * Resets the scanner and emits device change.
   */
  reset() {
    this._reset();
    this.deviceChange.emit(null);
  }
  /**
   * Sets the current device.
   */
  setDevice(device) {
    return __async(this, null, function* () {
      this.scanStop();
      this._device = device || void 0;
      if (!this._device) {
        BrowserCodeReader.cleanVideoSource(this.previewElemRef.nativeElement);
      }
      if (this._enabled && device) {
        yield this.scanFromDevice(device.deviceId);
      }
    });
  }
  /**
   * Sets the permission value and emits the event.
   */
  setPermission(hasPermission) {
    this.hasPermission = hasPermission;
    this.permissionResponse.next(hasPermission);
  }
  static {
    this.ɵfac = function ZXingScannerComponent_Factory(t) {
      return new (t || _ZXingScannerComponent)();
    };
  }
  static {
    this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
      type: _ZXingScannerComponent,
      selectors: [["zxing-scanner"]],
      viewQuery: function ZXingScannerComponent_Query(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵviewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.previewElemRef = _t.first);
        }
      },
      inputs: {
        autofocusEnabled: "autofocusEnabled",
        timeBetweenScans: "timeBetweenScans",
        delayBetweenScanSuccess: "delayBetweenScanSuccess",
        autostart: "autostart",
        previewFitMode: "previewFitMode",
        poster: "poster",
        device: "device",
        formats: "formats",
        videoConstraints: "videoConstraints",
        torch: "torch",
        enable: "enable",
        tryHarder: "tryHarder"
      },
      outputs: {
        autostarted: "autostarted",
        autostarting: "autostarting",
        torchCompatible: "torchCompatible",
        scanSuccess: "scanSuccess",
        scanFailure: "scanFailure",
        scanError: "scanError",
        scanComplete: "scanComplete",
        camerasFound: "camerasFound",
        camerasNotFound: "camerasNotFound",
        permissionResponse: "permissionResponse",
        hasDevices: "hasDevices",
        deviceChange: "deviceChange"
      },
      decls: 6,
      vars: 3,
      consts: [[3, "poster"], ["preview", ""]],
      template: function ZXingScannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "video", 0, 1)(2, "p");
          i0.ɵɵtext(3, " Your browser does not support this feature, please try to upgrade it. ");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(4, "p");
          i0.ɵɵtext(5, " Seu navegador n\xE3o suporta este recurso, por favor tente atualiz\xE1-lo. ");
          i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
          i0.ɵɵstyleProp("object-fit", ctx.previewFitMode);
          i0.ɵɵproperty("poster", ctx.poster, i0.ɵɵsanitizeUrl);
        }
      },
      styles: ["[_nghost-%COMP%]{display:block}video[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:contain}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZXingScannerComponent, [{
    type: Component,
    args: [{
      selector: "zxing-scanner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<video #preview [style.object-fit]="previewFitMode" [poster]="poster">\n  <p>\n    Your browser does not support this feature, please try to upgrade it.\n  </p>\n  <p>\n    Seu navegador n\xE3o suporta este recurso, por favor tente atualiz\xE1-lo.\n  </p>\n</video>\n',
      styles: [":host{display:block}video{width:100%;height:auto;object-fit:contain}\n"]
    }]
  }], () => [], {
    previewElemRef: [{
      type: ViewChild,
      args: ["preview", {
        static: true
      }]
    }],
    autofocusEnabled: [{
      type: Input
    }],
    timeBetweenScans: [{
      type: Input
    }],
    delayBetweenScanSuccess: [{
      type: Input
    }],
    autostarted: [{
      type: Output
    }],
    autostarting: [{
      type: Output
    }],
    autostart: [{
      type: Input
    }],
    previewFitMode: [{
      type: Input
    }],
    poster: [{
      type: Input
    }],
    torchCompatible: [{
      type: Output
    }],
    scanSuccess: [{
      type: Output
    }],
    scanFailure: [{
      type: Output
    }],
    scanError: [{
      type: Output
    }],
    scanComplete: [{
      type: Output
    }],
    camerasFound: [{
      type: Output
    }],
    camerasNotFound: [{
      type: Output
    }],
    permissionResponse: [{
      type: Output
    }],
    hasDevices: [{
      type: Output
    }],
    device: [{
      type: Input
    }],
    deviceChange: [{
      type: Output
    }],
    formats: [{
      type: Input
    }],
    videoConstraints: [{
      type: Input
    }],
    torch: [{
      type: Input
    }],
    enable: [{
      type: Input
    }],
    tryHarder: [{
      type: Input
    }]
  });
})();
var ZXingScannerModule = class _ZXingScannerModule {
  static {
    this.ɵfac = function ZXingScannerModule_Factory(t) {
      return new (t || _ZXingScannerModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
      type: _ZXingScannerModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({
      imports: [CommonModule, FormsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZXingScannerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule],
      declarations: [ZXingScannerComponent],
      exports: [ZXingScannerComponent]
    }]
  }], null, null);
})();
export { ZXingScannerComponent, ZXingScannerModule };