// node_modules/zone.js/fesm2015/zone.js
(function(global2) {
  const performance = global2["performance"];
  function mark(name) {
    performance && performance["mark"] && performance["mark"](name);
  }
  function performanceMeasure(name, label) {
    performance && performance["measure"] && performance["measure"](name, label);
  }
  mark("Zone");
  const symbolPrefix = global2["__Zone_symbol_prefix"] || "__zone_symbol__";
  function __symbol__(name) {
    return symbolPrefix + name;
  }
  const checkDuplicate = global2[__symbol__("forceDuplicateZoneCheck")] === true;
  if (global2["Zone"]) {
    if (checkDuplicate || typeof global2["Zone"].__symbol__ !== "function") {
      throw new Error("Zone already loaded.");
    } else {
      return global2["Zone"];
    }
  }
  const _Zone = class _Zone {
    static assertZonePatched() {
      if (global2["Promise"] !== patches["ZoneAwarePromise"]) {
        throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
      }
    }
    static get root() {
      let zone = _Zone.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    // tslint:disable-next-line:require-internal-with-underscore
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error("Already loaded patch: " + name);
        }
      } else if (!global2["__Zone_disable_" + name]) {
        const perfName = "Zone:" + name;
        mark(perfName);
        patches[name] = fn(global2, _Zone, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || "unnamed" : "<root>";
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone)
        return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec)
        throw new Error("ZoneSpec required!");
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== "function") {
        throw new Error("Expecting function got: " + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function() {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error("A task can only be run in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      }
      if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && task._transitionTo(running, scheduled);
      task.runCount++;
      const previousTask = _currentTask;
      _currentTask = task;
      _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
      try {
        if (task.type == macroTask && task.data && !task.data.isPeriodic) {
          task.cancelFn = void 0;
        }
        try {
          return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        if (task.state !== notScheduled && task.state !== unknown) {
          if (task.type == eventTask || task.data && task.data.isPeriodic) {
            reEntryGuard && task._transitionTo(scheduled, running);
          } else {
            task.runCount = 0;
            this._updateTaskCount(task, -1);
            reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, scheduling, notScheduled);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, void 0));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this)
        throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      if (task.state !== scheduled && task.state !== running) {
        return;
      }
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = 0;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  };
  _Zone.__symbol__ = __symbol__;
  let Zone2 = _Zone;
  const DELEGATE_ZS = {
    name: "",
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    constructor(zone, parentDelegate, zoneSpec) {
      this._taskCounts = { "microTask": 0, "macroTask": 0, "eventTask": 0 };
      this.zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this.zone;
        }
      }
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone2(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        if (!returnTask)
          returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error("Task is missing scheduleFn.");
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error("Task is not cancelable");
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error("More tasks executed then were scheduled.");
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts["microTask"] > 0,
          macroTask: counts["macroTask"] > 0,
          eventTask: counts["eventTask"] > 0,
          change: type
        };
        this.hasTask(this.zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      this._zone = null;
      this.runCount = 0;
      this._zoneDelegates = null;
      this._state = "notScheduled";
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error("callback is not defined");
      }
      this.callback = callback;
      const self2 = this;
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function() {
          return ZoneTask.invokeTask.call(global2, self2, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? " or '" + fromState2 + "'" : ""}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== "undefined") {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  const symbolSetTimeout = __symbol__("setTimeout");
  const symbolPromise = __symbol__("Promise");
  const symbolThen = __symbol__("then");
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global2[symbolPromise]) {
        nativeMicroTaskQueuePromise = global2[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        nativeThen = nativeMicroTaskQueuePromise["then"];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global2[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  const NO_ZONE = {
    name: "NO ZONE"
  };
  const notScheduled = "notScheduled", scheduling = "scheduling", scheduled = "scheduled", running = "running", canceling = "canceling", unknown = "unknown";
  const microTask = "microTask", macroTask = "macroTask", eventTask = "eventTask";
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask,
    showUncaughtError: () => !Zone2[__symbol__("ignoreConsoleErrorUncaughtError")],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    isIEOrEdge: () => false,
    getGlobalObjects: () => void 0,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => void 0,
    ObjectCreate: () => void 0,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask
  };
  let _currentZoneFrame = { parent: null, zone: new Zone2(null, null) };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {
  }
  performanceMeasure("Zone", "Zone");
  return global2["Zone"] = Zone2;
})(globalThis);
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ObjectDefineProperty = Object.defineProperty;
var ObjectGetPrototypeOf = Object.getPrototypeOf;
var ObjectCreate = Object.create;
var ArraySlice = Array.prototype.slice;
var ADD_EVENT_LISTENER_STR = "addEventListener";
var REMOVE_EVENT_LISTENER_STR = "removeEventListener";
var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
var TRUE_STR = "true";
var FALSE_STR = "false";
var ZONE_SYMBOL_PREFIX = Zone.__symbol__("");
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = Zone.__symbol__;
var isWindowExists = typeof window !== "undefined";
var internalWindow = isWindowExists ? window : void 0;
var _global = isWindowExists && internalWindow || globalThis;
var REMOVE_ATTRIBUTE = "removeAttribute";
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === "function") {
      args[i] = wrapWithCurrentZone(args[i], source + "_" + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor["name"];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = ((delegate2) => {
        const patched = function() {
          return delegate2.apply(this, bindArguments(arguments, source + "." + name));
        };
        attachOriginToPatched(patched, delegate2);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === "function" && typeof propertyDesc.set === "undefined");
}
var isWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
var isNode = !("nw" in _global) && typeof _global.process !== "undefined" && {}.toString.call(_global.process) === "[object process]";
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var isMix = typeof _global.process !== "undefined" && {}.toString.call(_global.process) === "[object process]" && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var zoneSymbolEventNames$1 = {};
var wrapFn = function(event) {
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames$1[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol("ON_PROPERTY" + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === "error") {
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (result != void 0 && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = { enumerable: true, configurable: true };
    }
  }
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol("on" + prop + "patched");
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol("ON_PROPERTY" + eventName);
  }
  desc.set = function(newValue) {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === "function") {
      target.removeEventListener(eventName, wrapFn);
    }
    originalDescSet && originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === "function") {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  desc.get = function() {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === "function") {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, "on" + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == "on") {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
var originalInstanceKey = zoneSymbol("originalInstance");
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass)
    return;
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function() {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error("Arg list too long.");
    }
  };
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function() {
  });
  let prop;
  for (prop in instance) {
    if (className === "XMLHttpRequest" && prop === "responseBlob")
      continue;
    (function(prop2) {
      if (typeof instance[prop2] === "function") {
        _global[className].prototype[prop2] = function() {
          return this[originalInstanceKey][prop2].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop2, {
          set: function(fn) {
            if (typeof fn === "function") {
              this[originalInstanceKey][prop2] = wrapWithCurrentZone(fn, className + "." + prop2);
              attachOriginToPatched(this[originalInstanceKey][prop2], fn);
            } else {
              this[originalInstanceKey][prop2] = fn;
            }
          },
          get: function() {
            return this[originalInstanceKey][prop2];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== "prototype" && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function() {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function() {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, (delegate) => function(self2, args) {
    const meta = metaCreator(self2, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === "function") {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      return delegate.apply(self2, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol("OriginalDelegate")] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIE() {
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf("MSIE ") !== -1 || ua.indexOf("Trident/") !== -1) {
      return true;
    }
  } catch (error) {
  }
  return false;
}
function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }
  isDetectedIEOrEdge = true;
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf("MSIE ") !== -1 || ua.indexOf("Trident/") !== -1 || ua.indexOf("Edge/") !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {
  }
  return ieOrEdge;
}
Zone.__load_patch("ZoneAwarePromise", (global2, Zone2, api) => {
  const ObjectGetOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
  const ObjectDefineProperty2 = Object.defineProperty;
  function readableObjectToString(obj) {
    if (obj && obj.toString === Object.prototype.toString) {
      const className = obj.constructor && obj.constructor.name;
      return (className ? className : "") + ": " + JSON.stringify(obj);
    }
    return obj ? obj.toString() : Object.prototype.toString.call(obj);
  }
  const __symbol__ = api.symbol;
  const _uncaughtPromiseErrors = [];
  const isDisableWrappingUncaughtPromiseRejection = global2[__symbol__("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== false;
  const symbolPromise = __symbol__("Promise");
  const symbolThen = __symbol__("then");
  const creationTrace = "__creationTrace__";
  api.onUnhandledError = (e) => {
    if (api.showUncaughtError()) {
      const rejection = e && e.rejection;
      if (rejection) {
        console.error("Unhandled Promise rejection:", rejection instanceof Error ? rejection.message : rejection, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", rejection, rejection instanceof Error ? rejection.stack : void 0);
      } else {
        console.error(e);
      }
    }
  };
  api.microtaskDrainDone = () => {
    while (_uncaughtPromiseErrors.length) {
      const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
      try {
        uncaughtPromiseError.zone.runGuarded(() => {
          if (uncaughtPromiseError.throwOriginal) {
            throw uncaughtPromiseError.rejection;
          }
          throw uncaughtPromiseError;
        });
      } catch (error) {
        handleUnhandledRejection(error);
      }
    }
  };
  const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__("unhandledPromiseRejectionHandler");
  function handleUnhandledRejection(e) {
    api.onUnhandledError(e);
    try {
      const handler = Zone2[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
      if (typeof handler === "function") {
        handler.call(this, e);
      }
    } catch (err) {
    }
  }
  function isThenable(value) {
    return value && value.then;
  }
  function forwardResolution(value) {
    return value;
  }
  function forwardRejection(rejection) {
    return ZoneAwarePromise.reject(rejection);
  }
  const symbolState = __symbol__("state");
  const symbolValue = __symbol__("value");
  const symbolFinally = __symbol__("finally");
  const symbolParentPromiseValue = __symbol__("parentPromiseValue");
  const symbolParentPromiseState = __symbol__("parentPromiseState");
  const source = "Promise.then";
  const UNRESOLVED = null;
  const RESOLVED = true;
  const REJECTED = false;
  const REJECTED_NO_CATCH = 0;
  function makeResolver(promise, state) {
    return (v) => {
      try {
        resolvePromise(promise, state, v);
      } catch (err) {
        resolvePromise(promise, false, err);
      }
    };
  }
  const once = function() {
    let wasCalled = false;
    return function wrapper(wrappedFunction) {
      return function() {
        if (wasCalled) {
          return;
        }
        wasCalled = true;
        wrappedFunction.apply(null, arguments);
      };
    };
  };
  const TYPE_ERROR = "Promise resolved with itself";
  const CURRENT_TASK_TRACE_SYMBOL = __symbol__("currentTaskTrace");
  function resolvePromise(promise, state, value) {
    const onceWrapper = once();
    if (promise === value) {
      throw new TypeError(TYPE_ERROR);
    }
    if (promise[symbolState] === UNRESOLVED) {
      let then = null;
      try {
        if (typeof value === "object" || typeof value === "function") {
          then = value && value.then;
        }
      } catch (err) {
        onceWrapper(() => {
          resolvePromise(promise, false, err);
        })();
        return promise;
      }
      if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
        clearRejectedNoCatch(value);
        resolvePromise(promise, value[symbolState], value[symbolValue]);
      } else if (state !== REJECTED && typeof then === "function") {
        try {
          then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
        }
      } else {
        promise[symbolState] = state;
        const queue = promise[symbolValue];
        promise[symbolValue] = value;
        if (promise[symbolFinally] === symbolFinally) {
          if (state === RESOLVED) {
            promise[symbolState] = promise[symbolParentPromiseState];
            promise[symbolValue] = promise[symbolParentPromiseValue];
          }
        }
        if (state === REJECTED && value instanceof Error) {
          const trace = Zone2.currentTask && Zone2.currentTask.data && Zone2.currentTask.data[creationTrace];
          if (trace) {
            ObjectDefineProperty2(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
          }
        }
        for (let i = 0; i < queue.length; ) {
          scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
        }
        if (queue.length == 0 && state == REJECTED) {
          promise[symbolState] = REJECTED_NO_CATCH;
          let uncaughtPromiseError = value;
          try {
            throw new Error("Uncaught (in promise): " + readableObjectToString(value) + (value && value.stack ? "\n" + value.stack : ""));
          } catch (err) {
            uncaughtPromiseError = err;
          }
          if (isDisableWrappingUncaughtPromiseRejection) {
            uncaughtPromiseError.throwOriginal = true;
          }
          uncaughtPromiseError.rejection = value;
          uncaughtPromiseError.promise = promise;
          uncaughtPromiseError.zone = Zone2.current;
          uncaughtPromiseError.task = Zone2.currentTask;
          _uncaughtPromiseErrors.push(uncaughtPromiseError);
          api.scheduleMicroTask();
        }
      }
    }
    return promise;
  }
  const REJECTION_HANDLED_HANDLER = __symbol__("rejectionHandledHandler");
  function clearRejectedNoCatch(promise) {
    if (promise[symbolState] === REJECTED_NO_CATCH) {
      try {
        const handler = Zone2[REJECTION_HANDLED_HANDLER];
        if (handler && typeof handler === "function") {
          handler.call(this, { rejection: promise[symbolValue], promise });
        }
      } catch (err) {
      }
      promise[symbolState] = REJECTED;
      for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
        if (promise === _uncaughtPromiseErrors[i].promise) {
          _uncaughtPromiseErrors.splice(i, 1);
        }
      }
    }
  }
  function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
    clearRejectedNoCatch(promise);
    const promiseState = promise[symbolState];
    const delegate = promiseState ? typeof onFulfilled === "function" ? onFulfilled : forwardResolution : typeof onRejected === "function" ? onRejected : forwardRejection;
    zone.scheduleMicroTask(source, () => {
      try {
        const parentPromiseValue = promise[symbolValue];
        const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
        if (isFinallyPromise) {
          chainPromise[symbolParentPromiseValue] = parentPromiseValue;
          chainPromise[symbolParentPromiseState] = promiseState;
        }
        const value = zone.run(delegate, void 0, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
        resolvePromise(chainPromise, true, value);
      } catch (error) {
        resolvePromise(chainPromise, false, error);
      }
    }, chainPromise);
  }
  const ZONE_AWARE_PROMISE_TO_STRING = "function ZoneAwarePromise() { [native code] }";
  const noop = function() {
  };
  const AggregateError = global2.AggregateError;
  class ZoneAwarePromise {
    static toString() {
      return ZONE_AWARE_PROMISE_TO_STRING;
    }
    static resolve(value) {
      if (value instanceof ZoneAwarePromise) {
        return value;
      }
      return resolvePromise(new this(null), RESOLVED, value);
    }
    static reject(error) {
      return resolvePromise(new this(null), REJECTED, error);
    }
    static withResolvers() {
      const result = {};
      result.promise = new ZoneAwarePromise((res, rej) => {
        result.resolve = res;
        result.reject = rej;
      });
      return result;
    }
    static any(values) {
      if (!values || typeof values[Symbol.iterator] !== "function") {
        return Promise.reject(new AggregateError([], "All promises were rejected"));
      }
      const promises = [];
      let count = 0;
      try {
        for (let v of values) {
          count++;
          promises.push(ZoneAwarePromise.resolve(v));
        }
      } catch (err) {
        return Promise.reject(new AggregateError([], "All promises were rejected"));
      }
      if (count === 0) {
        return Promise.reject(new AggregateError([], "All promises were rejected"));
      }
      let finished = false;
      const errors = [];
      return new ZoneAwarePromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
          promises[i].then((v) => {
            if (finished) {
              return;
            }
            finished = true;
            resolve(v);
          }, (err) => {
            errors.push(err);
            count--;
            if (count === 0) {
              finished = true;
              reject(new AggregateError(errors, "All promises were rejected"));
            }
          });
        }
      });
    }
    static race(values) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      function onResolve(value) {
        resolve(value);
      }
      function onReject(error) {
        reject(error);
      }
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        value.then(onResolve, onReject);
      }
      return promise;
    }
    static all(values) {
      return ZoneAwarePromise.allWithCallback(values);
    }
    static allSettled(values) {
      const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
      return P.allWithCallback(values, {
        thenCallback: (value) => ({ status: "fulfilled", value }),
        errorCallback: (err) => ({ status: "rejected", reason: err })
      });
    }
    static allWithCallback(values, callback) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      let unresolvedCount = 2;
      let valueIndex = 0;
      const resolvedValues = [];
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        const curValueIndex = valueIndex;
        try {
          value.then((value2) => {
            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value2) : value2;
            unresolvedCount--;
            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }
          }, (err) => {
            if (!callback) {
              reject(err);
            } else {
              resolvedValues[curValueIndex] = callback.errorCallback(err);
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }
          });
        } catch (thenErr) {
          reject(thenErr);
        }
        unresolvedCount++;
        valueIndex++;
      }
      unresolvedCount -= 2;
      if (unresolvedCount === 0) {
        resolve(resolvedValues);
      }
      return promise;
    }
    constructor(executor) {
      const promise = this;
      if (!(promise instanceof ZoneAwarePromise)) {
        throw new Error("Must be an instanceof Promise.");
      }
      promise[symbolState] = UNRESOLVED;
      promise[symbolValue] = [];
      try {
        const onceWrapper = once();
        executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
      } catch (error) {
        resolvePromise(promise, false, error);
      }
    }
    get [Symbol.toStringTag]() {
      return "Promise";
    }
    get [Symbol.species]() {
      return ZoneAwarePromise;
    }
    then(onFulfilled, onRejected) {
      let C = this.constructor?.[Symbol.species];
      if (!C || typeof C !== "function") {
        C = this.constructor || ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      const zone = Zone2.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
      }
      return chainPromise;
    }
    catch(onRejected) {
      return this.then(null, onRejected);
    }
    finally(onFinally) {
      let C = this.constructor?.[Symbol.species];
      if (!C || typeof C !== "function") {
        C = ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      chainPromise[symbolFinally] = symbolFinally;
      const zone = Zone2.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
      }
      return chainPromise;
    }
  }
  ZoneAwarePromise["resolve"] = ZoneAwarePromise.resolve;
  ZoneAwarePromise["reject"] = ZoneAwarePromise.reject;
  ZoneAwarePromise["race"] = ZoneAwarePromise.race;
  ZoneAwarePromise["all"] = ZoneAwarePromise.all;
  const NativePromise = global2[symbolPromise] = global2["Promise"];
  global2["Promise"] = ZoneAwarePromise;
  const symbolThenPatched = __symbol__("thenPatched");
  function patchThen(Ctor) {
    const proto = Ctor.prototype;
    const prop = ObjectGetOwnPropertyDescriptor2(proto, "then");
    if (prop && (prop.writable === false || !prop.configurable)) {
      return;
    }
    const originalThen = proto.then;
    proto[symbolThen] = originalThen;
    Ctor.prototype.then = function(onResolve, onReject) {
      const wrapped = new ZoneAwarePromise((resolve, reject) => {
        originalThen.call(this, resolve, reject);
      });
      return wrapped.then(onResolve, onReject);
    };
    Ctor[symbolThenPatched] = true;
  }
  api.patchThen = patchThen;
  function zoneify(fn) {
    return function(self2, args) {
      let resultPromise = fn.apply(self2, args);
      if (resultPromise instanceof ZoneAwarePromise) {
        return resultPromise;
      }
      let ctor = resultPromise.constructor;
      if (!ctor[symbolThenPatched]) {
        patchThen(ctor);
      }
      return resultPromise;
    };
  }
  if (NativePromise) {
    patchThen(NativePromise);
    patchMethod(global2, "fetch", (delegate) => zoneify(delegate));
  }
  Promise[Zone2.__symbol__("uncaughtPromiseErrors")] = _uncaughtPromiseErrors;
  return ZoneAwarePromise;
});
Zone.__load_patch("toString", (global2) => {
  const originalFunctionToString = Function.prototype.toString;
  const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol("OriginalDelegate");
  const PROMISE_SYMBOL = zoneSymbol("Promise");
  const ERROR_SYMBOL = zoneSymbol("Error");
  const newFunctionToString = function toString() {
    if (typeof this === "function") {
      const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
      if (originalDelegate) {
        if (typeof originalDelegate === "function") {
          return originalFunctionToString.call(originalDelegate);
        } else {
          return Object.prototype.toString.call(originalDelegate);
        }
      }
      if (this === Promise) {
        const nativePromise = global2[PROMISE_SYMBOL];
        if (nativePromise) {
          return originalFunctionToString.call(nativePromise);
        }
      }
      if (this === Error) {
        const nativeError = global2[ERROR_SYMBOL];
        if (nativeError) {
          return originalFunctionToString.call(nativeError);
        }
      }
    }
    return originalFunctionToString.call(this);
  };
  newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
  Function.prototype.toString = newFunctionToString;
  const originalObjectToString = Object.prototype.toString;
  const PROMISE_OBJECT_TO_STRING = "[object Promise]";
  Object.prototype.toString = function() {
    if (typeof Promise === "function" && this instanceof Promise) {
      return PROMISE_OBJECT_TO_STRING;
    }
    return originalObjectToString.call(this);
  };
});
var passiveSupported = false;
if (typeof window !== "undefined") {
  try {
    const options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
var zoneSymbolEventNames = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = new RegExp("^" + ZONE_SYMBOL_PREFIX + "(\\w+)(true|false)$");
var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol("propagationStopped");
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global2, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || "eventListeners";
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || "removeAllListeners";
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = "." + ADD_EVENT_LISTENER + ":";
  const PREPEND_EVENT_LISTENER = "prependListener";
  const PREPEND_EVENT_LISTENER_SOURCE = "." + PREPEND_EVENT_LISTENER + ":";
  const invokeTask = function(task, target, event) {
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === "object" && delegate.handleEvent) {
      task.callback = (event2) => delegate.handleEvent(event2);
      task.originalDelegate = delegate;
    }
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === "object" && options.once) {
      const delegate2 = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate2, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    event = event || _global2.event;
    if (!event) {
      return;
    }
    const target = context || event.target || _global2;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  const globalZoneAwareCallback = function(event) {
    return globalCallback(this, event, false);
  };
  const globalZoneAwareCaptureCallback = function(event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions2) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions2 && patchOptions2.useG !== void 0) {
      useGlobalCallback = patchOptions2.useG;
    }
    const validateHandler = patchOptions2 && patchOptions2.vh;
    let checkDuplicate = true;
    if (patchOptions2 && patchOptions2.chkDup !== void 0) {
      checkDuplicate = patchOptions2.chkDup;
    }
    let returnTarget = false;
    if (patchOptions2 && patchOptions2.rt !== void 0) {
      returnTarget = patchOptions2.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions2 && patchOptions2.eventNameToString;
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions2 && patchOptions2.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions2.prepend)] = proto[patchOptions2.prepend];
    }
    function buildEventListenerOptions(options, passive) {
      if (!passiveSupported && typeof options === "object" && options) {
        return !!options.capture;
      }
      if (!passiveSupported || !passive) {
        return options;
      }
      if (typeof options === "boolean") {
        return { capture: options, passive: true };
      }
      if (!options) {
        return { passive: true };
      }
      if (typeof options === "object" && options.passive !== false) {
        return { ...options, passive: true };
      }
      return options;
    }
    const customScheduleGlobal = function(task) {
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function(task) {
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              task.isRemoved = true;
              if (existingTasks.length === 0) {
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function(task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function(task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function(task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function(task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === "function" && task.callback === delegate || typeOfDelegate === "object" && task.originalDelegate === delegate;
    };
    const compare = patchOptions2 && patchOptions2.diff ? patchOptions2.diff : compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol("UNPATCHED_EVENTS")];
    const passiveEvents = _global2[zoneSymbol("PASSIVE_EVENTS")];
    const makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget2 = false, prepend = false) {
      return function() {
        const target = this || _global2;
        let eventName = arguments[0];
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === "uncaughtException") {
          return nativeListener.apply(this, arguments);
        }
        let isHandleEvent = false;
        if (typeof delegate !== "function") {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isHandleEvent = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = buildEventListenerOptions(arguments[2], passive);
        const signal = options && typeof options === "object" && options.signal && typeof options.signal === "object" ? options.signal : void 0;
        if (signal?.aborted) {
          return;
        }
        if (unpatchedEvents) {
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
        const once = options && typeof options === "object" ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor["name"];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        taskData.options = options;
        if (once) {
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : void 0;
        if (data) {
          data.taskData = taskData;
        }
        if (signal) {
          taskData.options.signal = void 0;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        if (signal) {
          taskData.options.signal = signal;
          nativeListener.call(signal, "abort", () => {
            task.zone.cancelTask(task);
          }, { once: true });
        }
        taskData.target = null;
        if (data) {
          data.taskData = null;
        }
        if (once) {
          options.once = true;
        }
        if (!(!passiveSupported && typeof task.options === "boolean")) {
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isHandleEvent) {
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget2) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              if (typeof eventName === "string") {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + "ON_PROPERTY" + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          if (evtName && evtName !== "removeListener") {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, "removeListener");
      } else {
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global2, api) {
  const Event2 = global2["Event"];
  if (Event2 && Event2.prototype) {
    api.patchMethod(Event2.prototype, "stopImmediatePropagation", (delegate) => function(self2, args) {
      self2[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      delegate && delegate.apply(self2, args);
    });
  }
}
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function(name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function(callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch {
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter((ip) => ip.target === target);
  if (!tip || tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter((op) => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter((name) => name.startsWith("on") && name.length > 2).map((name) => name.substring(2));
}
function propertyDescriptorPatch(api, _global2) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol("patchEvents")]) {
    return;
  }
  const ignoreProperties = _global2["__Zone_ignore_on_properties"];
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow2 = window;
    patchTargets = patchTargets.concat([
      "Document",
      "SVGElement",
      "Element",
      "HTMLElement",
      "HTMLBodyElement",
      "HTMLMediaElement",
      "HTMLFrameSetElement",
      "HTMLFrameElement",
      "HTMLIFrameElement",
      "HTMLMarqueeElement",
      "Worker"
    ]);
    const ignoreErrorProperties = isIE() ? [{ target: internalWindow2, ignoreProperties: ["error"] }] : [];
    patchFilteredProperties(internalWindow2, getOnEventNames(internalWindow2), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow2));
  }
  patchTargets = patchTargets.concat([
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "IDBIndex",
    "IDBRequest",
    "IDBOpenDBRequest",
    "IDBDatabase",
    "IDBTransaction",
    "IDBCursor",
    "WebSocket"
  ]);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global2[patchTargets[i]];
    target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}
Zone.__load_patch("util", (global2, Zone2, api) => {
  const eventNames = getOnEventNames(global2);
  api.patchOnProperties = patchOnProperties;
  api.patchMethod = patchMethod;
  api.bindArguments = bindArguments;
  api.patchMacroTask = patchMacroTask;
  const SYMBOL_BLACK_LISTED_EVENTS = Zone2.__symbol__("BLACK_LISTED_EVENTS");
  const SYMBOL_UNPATCHED_EVENTS = Zone2.__symbol__("UNPATCHED_EVENTS");
  if (global2[SYMBOL_UNPATCHED_EVENTS]) {
    global2[SYMBOL_BLACK_LISTED_EVENTS] = global2[SYMBOL_UNPATCHED_EVENTS];
  }
  if (global2[SYMBOL_BLACK_LISTED_EVENTS]) {
    Zone2[SYMBOL_BLACK_LISTED_EVENTS] = Zone2[SYMBOL_UNPATCHED_EVENTS] = global2[SYMBOL_BLACK_LISTED_EVENTS];
  }
  api.patchEventPrototype = patchEventPrototype;
  api.patchEventTarget = patchEventTarget;
  api.isIEOrEdge = isIEOrEdge;
  api.ObjectDefineProperty = ObjectDefineProperty;
  api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
  api.ObjectCreate = ObjectCreate;
  api.ArraySlice = ArraySlice;
  api.patchClass = patchClass;
  api.wrapWithCurrentZone = wrapWithCurrentZone;
  api.filterProperties = filterProperties;
  api.attachOriginToPatched = attachOriginToPatched;
  api._redefineProperty = Object.defineProperty;
  api.patchCallbacks = patchCallbacks;
  api.getGlobalObjects = () => ({
    globalSources,
    zoneSymbolEventNames,
    eventNames,
    isBrowser,
    isMix,
    isNode,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX,
    ADD_EVENT_LISTENER_STR,
    REMOVE_EVENT_LISTENER_STR
  });
});
function patchQueueMicrotask(global2, api) {
  api.patchMethod(global2, "queueMicrotask", (delegate) => {
    return function(self2, args) {
      Zone.current.scheduleMicroTask("queueMicrotask", args[0]);
    };
  });
}
var taskSymbol = zoneSymbol("zoneTask");
function patchTimer(window2, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function() {
      return task.invoke.apply(this, arguments);
    };
    data.handleId = setNative.apply(window2, data.args);
    return task;
  }
  function clearTask(task) {
    return clearNative.call(window2, task.data.handleId);
  }
  setNative = patchMethod(window2, setName, (delegate) => function(self2, args) {
    if (typeof args[0] === "function") {
      const options = {
        isPeriodic: nameSuffix === "Interval",
        delay: nameSuffix === "Timeout" || nameSuffix === "Interval" ? args[1] || 0 : void 0,
        args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          if (!options.isPeriodic) {
            if (typeof options.handleId === "number") {
              delete tasksByHandleId[options.handleId];
            } else if (options.handleId) {
              options.handleId[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      const handle = task.data.handleId;
      if (typeof handle === "number") {
        tasksByHandleId[handle] = task;
      } else if (handle) {
        handle[taskSymbol] = task;
      }
      if (handle && handle.ref && handle.unref && typeof handle.ref === "function" && typeof handle.unref === "function") {
        task.ref = handle.ref.bind(handle);
        task.unref = handle.unref.bind(handle);
      }
      if (typeof handle === "number" || handle) {
        return handle;
      }
      return task;
    } else {
      return delegate.apply(window2, args);
    }
  });
  clearNative = patchMethod(window2, cancelName, (delegate) => function(self2, args) {
    const id = args[0];
    let task;
    if (typeof id === "number") {
      task = tasksByHandleId[id];
    } else {
      task = id && id[taskSymbol];
      if (!task) {
        task = id;
      }
    }
    if (task && typeof task.type === "string") {
      if (task.state !== "notScheduled" && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
        if (typeof id === "number") {
          delete tasksByHandleId[id];
        } else if (id) {
          id[taskSymbol] = null;
        }
        task.zone.cancelTask(task);
      }
    } else {
      delegate.apply(window2, args);
    }
  });
}
function patchCustomElements(_global2, api) {
  const { isBrowser: isBrowser2, isMix: isMix2 } = api.getGlobalObjects();
  if (!isBrowser2 && !isMix2 || !_global2["customElements"] || !("customElements" in _global2)) {
    return;
  }
  const callbacks = [
    "connectedCallback",
    "disconnectedCallback",
    "adoptedCallback",
    "attributeChangedCallback",
    "formAssociatedCallback",
    "formDisabledCallback",
    "formResetCallback",
    "formStateRestoreCallback"
  ];
  api.patchCallbacks(api, _global2.customElements, "customElements", "define", callbacks);
}
function eventTargetPatch(_global2, api) {
  if (Zone[api.symbol("patchEventTarget")]) {
    return;
  }
  const { eventNames, zoneSymbolEventNames: zoneSymbolEventNames2, TRUE_STR: TRUE_STR2, FALSE_STR: FALSE_STR2, ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX2 } = api.getGlobalObjects();
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR2;
    const trueEventName = eventName + TRUE_STR2;
    const symbol = ZONE_SYMBOL_PREFIX2 + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX2 + trueEventName;
    zoneSymbolEventNames2[eventName] = {};
    zoneSymbolEventNames2[eventName][FALSE_STR2] = symbol;
    zoneSymbolEventNames2[eventName][TRUE_STR2] = symbolCapture;
  }
  const EVENT_TARGET = _global2["EventTarget"];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global2, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global2, api) {
  api.patchEventPrototype(global2, api);
}
Zone.__load_patch("legacy", (global2) => {
  const legacyPatch = global2[Zone.__symbol__("legacyPatch")];
  if (legacyPatch) {
    legacyPatch();
  }
});
Zone.__load_patch("timers", (global2) => {
  const set = "set";
  const clear = "clear";
  patchTimer(global2, set, clear, "Timeout");
  patchTimer(global2, set, clear, "Interval");
  patchTimer(global2, set, clear, "Immediate");
});
Zone.__load_patch("requestAnimationFrame", (global2) => {
  patchTimer(global2, "request", "cancel", "AnimationFrame");
  patchTimer(global2, "mozRequest", "mozCancel", "AnimationFrame");
  patchTimer(global2, "webkitRequest", "webkitCancel", "AnimationFrame");
});
Zone.__load_patch("blocking", (global2, Zone2) => {
  const blockingMethods = ["alert", "prompt", "confirm"];
  for (let i = 0; i < blockingMethods.length; i++) {
    const name = blockingMethods[i];
    patchMethod(global2, name, (delegate, symbol, name2) => {
      return function(s, args) {
        return Zone2.current.run(delegate, global2, args, name2);
      };
    });
  }
});
Zone.__load_patch("EventTarget", (global2, Zone2, api) => {
  patchEvent(global2, api);
  eventTargetPatch(global2, api);
  const XMLHttpRequestEventTarget = global2["XMLHttpRequestEventTarget"];
  if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
    api.patchEventTarget(global2, api, [XMLHttpRequestEventTarget.prototype]);
  }
});
Zone.__load_patch("MutationObserver", (global2, Zone2, api) => {
  patchClass("MutationObserver");
  patchClass("WebKitMutationObserver");
});
Zone.__load_patch("IntersectionObserver", (global2, Zone2, api) => {
  patchClass("IntersectionObserver");
});
Zone.__load_patch("FileReader", (global2, Zone2, api) => {
  patchClass("FileReader");
});
Zone.__load_patch("on_property", (global2, Zone2, api) => {
  propertyDescriptorPatch(api, global2);
});
Zone.__load_patch("customElements", (global2, Zone2, api) => {
  patchCustomElements(global2, api);
});
Zone.__load_patch("XHR", (global2, Zone2) => {
  patchXHR(global2);
  const XHR_TASK = zoneSymbol("xhrTask");
  const XHR_SYNC = zoneSymbol("xhrSync");
  const XHR_LISTENER = zoneSymbol("xhrListener");
  const XHR_SCHEDULED = zoneSymbol("xhrScheduled");
  const XHR_URL = zoneSymbol("xhrURL");
  const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol("xhrErrorBeforeScheduled");
  function patchXHR(window2) {
    const XMLHttpRequest = window2["XMLHttpRequest"];
    if (!XMLHttpRequest) {
      return;
    }
    const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    function findPendingTask(target) {
      return target[XHR_TASK];
    }
    let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
    let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
    if (!oriAddListener) {
      const XMLHttpRequestEventTarget = window2["XMLHttpRequestEventTarget"];
      if (XMLHttpRequestEventTarget) {
        const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
        oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
    }
    const READY_STATE_CHANGE = "readystatechange";
    const SCHEDULED = "scheduled";
    function scheduleTask(task) {
      const data = task.data;
      const target = data.target;
      target[XHR_SCHEDULED] = false;
      target[XHR_ERROR_BEFORE_SCHEDULED] = false;
      const listener = target[XHR_LISTENER];
      if (!oriAddListener) {
        oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
      if (listener) {
        oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
      }
      const newListener = target[XHR_LISTENER] = () => {
        if (target.readyState === target.DONE) {
          if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
            const loadTasks = target[Zone2.__symbol__("loadfalse")];
            if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
              const oriInvoke = task.invoke;
              task.invoke = function() {
                const loadTasks2 = target[Zone2.__symbol__("loadfalse")];
                for (let i = 0; i < loadTasks2.length; i++) {
                  if (loadTasks2[i] === task) {
                    loadTasks2.splice(i, 1);
                  }
                }
                if (!data.aborted && task.state === SCHEDULED) {
                  oriInvoke.call(task);
                }
              };
              loadTasks.push(task);
            } else {
              task.invoke();
            }
          } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
          }
        }
      };
      oriAddListener.call(target, READY_STATE_CHANGE, newListener);
      const storedTask = target[XHR_TASK];
      if (!storedTask) {
        target[XHR_TASK] = task;
      }
      sendNative.apply(target, data.args);
      target[XHR_SCHEDULED] = true;
      return task;
    }
    function placeholderCallback() {
    }
    function clearTask(task) {
      const data = task.data;
      data.aborted = true;
      return abortNative.apply(data.target, data.args);
    }
    const openNative = patchMethod(XMLHttpRequestPrototype, "open", () => function(self2, args) {
      self2[XHR_SYNC] = args[2] == false;
      self2[XHR_URL] = args[1];
      return openNative.apply(self2, args);
    });
    const XMLHTTPREQUEST_SOURCE = "XMLHttpRequest.send";
    const fetchTaskAborting = zoneSymbol("fetchTaskAborting");
    const fetchTaskScheduling = zoneSymbol("fetchTaskScheduling");
    const sendNative = patchMethod(XMLHttpRequestPrototype, "send", () => function(self2, args) {
      if (Zone2.current[fetchTaskScheduling] === true) {
        return sendNative.apply(self2, args);
      }
      if (self2[XHR_SYNC]) {
        return sendNative.apply(self2, args);
      } else {
        const options = { target: self2, url: self2[XHR_URL], isPeriodic: false, args, aborted: false };
        const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
        if (self2 && self2[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
          task.invoke();
        }
      }
    });
    const abortNative = patchMethod(XMLHttpRequestPrototype, "abort", () => function(self2, args) {
      const task = findPendingTask(self2);
      if (task && typeof task.type == "string") {
        if (task.cancelFn == null || task.data && task.data.aborted) {
          return;
        }
        task.zone.cancelTask(task);
      } else if (Zone2.current[fetchTaskAborting] === true) {
        return abortNative.apply(self2, args);
      }
    });
  }
});
Zone.__load_patch("geolocation", (global2) => {
  if (global2["navigator"] && global2["navigator"].geolocation) {
    patchPrototype(global2["navigator"].geolocation, ["getCurrentPosition", "watchPosition"]);
  }
});
Zone.__load_patch("PromiseRejectionEvent", (global2, Zone2) => {
  function findPromiseRejectionHandler(evtName) {
    return function(e) {
      const eventTasks = findEventTasks(global2, evtName);
      eventTasks.forEach((eventTask) => {
        const PromiseRejectionEvent = global2["PromiseRejectionEvent"];
        if (PromiseRejectionEvent) {
          const evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
          eventTask.invoke(evt);
        }
      });
    };
  }
  if (global2["PromiseRejectionEvent"]) {
    Zone2[zoneSymbol("unhandledPromiseRejectionHandler")] = findPromiseRejectionHandler("unhandledrejection");
    Zone2[zoneSymbol("rejectionHandledHandler")] = findPromiseRejectionHandler("rejectionhandled");
  }
});
Zone.__load_patch("queueMicrotask", (global2, Zone2, api) => {
  patchQueueMicrotask(global2, api);
});

// node_modules/es-module-shims/dist/es-module-shims.js
(function() {
  const hasWindow = typeof window !== "undefined";
  const hasDocument = typeof document !== "undefined";
  const noop = () => {
  };
  const optionsScript = hasDocument ? document.querySelector("script[type=esms-options]") : void 0;
  const esmsInitOptions = optionsScript ? JSON.parse(optionsScript.innerHTML) : {};
  Object.assign(esmsInitOptions, self.esmsInitOptions || {});
  let shimMode = hasDocument ? !!esmsInitOptions.shimMode : true;
  const importHook = globalHook(shimMode && esmsInitOptions.onimport);
  const resolveHook = globalHook(shimMode && esmsInitOptions.resolve);
  let fetchHook = esmsInitOptions.fetch ? globalHook(esmsInitOptions.fetch) : fetch;
  const metaHook = esmsInitOptions.meta ? globalHook(shimMode && esmsInitOptions.meta) : noop;
  const mapOverrides = esmsInitOptions.mapOverrides;
  let nonce = esmsInitOptions.nonce;
  if (!nonce && hasDocument) {
    const nonceElement = document.querySelector("script[nonce]");
    if (nonceElement)
      nonce = nonceElement.nonce || nonceElement.getAttribute("nonce");
  }
  const onerror = globalHook(esmsInitOptions.onerror || noop);
  const onpolyfill = esmsInitOptions.onpolyfill ? globalHook(esmsInitOptions.onpolyfill) : () => {
    console.log("%c^^ Module TypeError above is polyfilled and can be ignored ^^", "font-weight:900;color:#391");
  };
  const { revokeBlobURLs, noLoadEventRetriggers, enforceIntegrity } = esmsInitOptions;
  function globalHook(name) {
    return typeof name === "string" ? self[name] : name;
  }
  const enable = Array.isArray(esmsInitOptions.polyfillEnable) ? esmsInitOptions.polyfillEnable : [];
  const cssModulesEnabled = enable.includes("css-modules");
  const jsonModulesEnabled = enable.includes("json-modules");
  const edge = !navigator.userAgentData && !!navigator.userAgent.match(/Edge\/\d+\.\d+/);
  const baseUrl = hasDocument ? document.baseURI : `${location.protocol}//${location.host}${location.pathname.includes("/") ? location.pathname.slice(0, location.pathname.lastIndexOf("/") + 1) : location.pathname}`;
  const createBlob = (source, type = "text/javascript") => URL.createObjectURL(new Blob([source], { type }));
  let { skip } = esmsInitOptions;
  if (Array.isArray(skip)) {
    const l2 = skip.map((s2) => new URL(s2, baseUrl).href);
    skip = (s2) => l2.some((i2) => i2[i2.length - 1] === "/" && s2.startsWith(i2) || s2 === i2);
  } else if (typeof skip === "string") {
    const r2 = new RegExp(skip);
    skip = (s2) => r2.test(s2);
  } else if (skip instanceof RegExp) {
    skip = (s2) => skip.test(s2);
  }
  const eoop = (err) => setTimeout(() => {
    throw err;
  });
  const throwError = (err) => {
    (self.reportError || hasWindow && window.safari && console.error || eoop)(err), void onerror(err);
  };
  function fromParent(parent) {
    return parent ? ` imported from ${parent}` : "";
  }
  let importMapSrcOrLazy = false;
  function setImportMapSrcOrLazy() {
    importMapSrcOrLazy = true;
  }
  if (!shimMode) {
    if (document.querySelectorAll("script[type=module-shim],script[type=importmap-shim],link[rel=modulepreload-shim]").length) {
      shimMode = true;
    } else {
      let seenScript = false;
      for (const script of document.querySelectorAll("script[type=module],script[type=importmap]")) {
        if (!seenScript) {
          if (script.type === "module" && !script.ep)
            seenScript = true;
        } else if (script.type === "importmap" && seenScript) {
          importMapSrcOrLazy = true;
          break;
        }
      }
    }
  }
  const backslashRegEx = /\\/g;
  function asURL(url) {
    try {
      if (url.indexOf(":") !== -1)
        return new URL(url).href;
    } catch (_) {
    }
  }
  function resolveUrl(relUrl, parentUrl) {
    return resolveIfNotPlainOrUrl(relUrl, parentUrl) || (asURL(relUrl) || resolveIfNotPlainOrUrl("./" + relUrl, parentUrl));
  }
  function resolveIfNotPlainOrUrl(relUrl, parentUrl) {
    const hIdx = parentUrl.indexOf("#"), qIdx = parentUrl.indexOf("?");
    if (hIdx + qIdx > -2)
      parentUrl = parentUrl.slice(0, hIdx === -1 ? qIdx : qIdx === -1 || qIdx > hIdx ? hIdx : qIdx);
    if (relUrl.indexOf("\\") !== -1)
      relUrl = relUrl.replace(backslashRegEx, "/");
    if (relUrl[0] === "/" && relUrl[1] === "/") {
      return parentUrl.slice(0, parentUrl.indexOf(":") + 1) + relUrl;
    } else if (relUrl[0] === "." && (relUrl[1] === "/" || relUrl[1] === "." && (relUrl[2] === "/" || relUrl.length === 2 && (relUrl += "/")) || relUrl.length === 1 && (relUrl += "/")) || relUrl[0] === "/") {
      const parentProtocol = parentUrl.slice(0, parentUrl.indexOf(":") + 1);
      if (parentProtocol === "blob:") {
        throw new TypeError(`Failed to resolve module specifier "${relUrl}". Invalid relative url or base scheme isn't hierarchical.`);
      }
      let pathname;
      if (parentUrl[parentProtocol.length + 1] === "/") {
        if (parentProtocol !== "file:") {
          pathname = parentUrl.slice(parentProtocol.length + 2);
          pathname = pathname.slice(pathname.indexOf("/") + 1);
        } else {
          pathname = parentUrl.slice(8);
        }
      } else {
        pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === "/"));
      }
      if (relUrl[0] === "/")
        return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;
      const segmented = pathname.slice(0, pathname.lastIndexOf("/") + 1) + relUrl;
      const output = [];
      let segmentIndex = -1;
      for (let i2 = 0; i2 < segmented.length; i2++) {
        if (segmentIndex !== -1) {
          if (segmented[i2] === "/") {
            output.push(segmented.slice(segmentIndex, i2 + 1));
            segmentIndex = -1;
          }
          continue;
        } else if (segmented[i2] === ".") {
          if (segmented[i2 + 1] === "." && (segmented[i2 + 2] === "/" || i2 + 2 === segmented.length)) {
            output.pop();
            i2 += 2;
            continue;
          } else if (segmented[i2 + 1] === "/" || i2 + 1 === segmented.length) {
            i2 += 1;
            continue;
          }
        }
        while (segmented[i2] === "/")
          i2++;
        segmentIndex = i2;
      }
      if (segmentIndex !== -1)
        output.push(segmented.slice(segmentIndex));
      return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join("");
    }
  }
  function resolveAndComposeImportMap(json, baseUrl2, parentMap) {
    const outMap = { imports: Object.assign({}, parentMap.imports), scopes: Object.assign({}, parentMap.scopes) };
    if (json.imports)
      resolveAndComposePackages(json.imports, outMap.imports, baseUrl2, parentMap);
    if (json.scopes)
      for (let s2 in json.scopes) {
        const resolvedScope = resolveUrl(s2, baseUrl2);
        resolveAndComposePackages(json.scopes[s2], outMap.scopes[resolvedScope] || (outMap.scopes[resolvedScope] = {}), baseUrl2, parentMap);
      }
    return outMap;
  }
  function getMatch(path, matchObj) {
    if (matchObj[path])
      return path;
    let sepIndex = path.length;
    do {
      const segment = path.slice(0, sepIndex + 1);
      if (segment in matchObj)
        return segment;
    } while ((sepIndex = path.lastIndexOf("/", sepIndex - 1)) !== -1);
  }
  function applyPackages(id, packages) {
    const pkgName = getMatch(id, packages);
    if (pkgName) {
      const pkg = packages[pkgName];
      if (pkg === null)
        return;
      return pkg + id.slice(pkgName.length);
    }
  }
  function resolveImportMap(importMap2, resolvedOrPlain, parentUrl) {
    let scopeUrl = parentUrl && getMatch(parentUrl, importMap2.scopes);
    while (scopeUrl) {
      const packageResolution = applyPackages(resolvedOrPlain, importMap2.scopes[scopeUrl]);
      if (packageResolution)
        return packageResolution;
      scopeUrl = getMatch(scopeUrl.slice(0, scopeUrl.lastIndexOf("/")), importMap2.scopes);
    }
    return applyPackages(resolvedOrPlain, importMap2.imports) || resolvedOrPlain.indexOf(":") !== -1 && resolvedOrPlain;
  }
  function resolveAndComposePackages(packages, outPackages, baseUrl2, parentMap) {
    for (let p2 in packages) {
      const resolvedLhs = resolveIfNotPlainOrUrl(p2, baseUrl2) || p2;
      if ((!shimMode || !mapOverrides) && outPackages[resolvedLhs] && outPackages[resolvedLhs] !== packages[resolvedLhs]) {
        throw Error(`Rejected map override "${resolvedLhs}" from ${outPackages[resolvedLhs]} to ${packages[resolvedLhs]}.`);
      }
      let target = packages[p2];
      if (typeof target !== "string")
        continue;
      const mapped = resolveImportMap(parentMap, resolveIfNotPlainOrUrl(target, baseUrl2) || target, baseUrl2);
      if (mapped) {
        outPackages[resolvedLhs] = mapped;
        continue;
      }
      console.warn(`Mapping "${p2}" -> "${packages[p2]}" does not resolve`);
    }
  }
  let dynamicImport = !hasDocument && (0, eval)("u=>import(u)");
  let supportsDynamicImport;
  const dynamicImportCheck = hasDocument && new Promise((resolve2) => {
    const s2 = Object.assign(document.createElement("script"), {
      src: createBlob("self._d=u=>import(u)"),
      ep: true
    });
    s2.setAttribute("nonce", nonce);
    s2.addEventListener("load", () => {
      if (!(supportsDynamicImport = !!(dynamicImport = self._d))) {
        let err;
        window.addEventListener("error", (_err) => err = _err);
        dynamicImport = (url, opts) => new Promise((resolve3, reject) => {
          const s3 = Object.assign(document.createElement("script"), {
            type: "module",
            src: createBlob(`import*as m from'${url}';self._esmsi=m`)
          });
          err = void 0;
          s3.ep = true;
          if (nonce)
            s3.setAttribute("nonce", nonce);
          s3.addEventListener("error", cb);
          s3.addEventListener("load", cb);
          function cb(_err) {
            document.head.removeChild(s3);
            if (self._esmsi) {
              resolve3(self._esmsi, baseUrl);
              self._esmsi = void 0;
            } else {
              reject(!(_err instanceof Event) && _err || err && err.error || new Error(`Error loading ${opts && opts.errUrl || url} (${s3.src}).`));
              err = void 0;
            }
          }
          document.head.appendChild(s3);
        });
      }
      document.head.removeChild(s2);
      delete self._d;
      resolve2();
    });
    document.head.appendChild(s2);
  });
  let supportsJsonAssertions = false;
  let supportsCssAssertions = false;
  const supports = hasDocument && HTMLScriptElement.supports;
  let supportsImportMaps = supports && supports.name === "supports" && supports("importmap");
  let supportsImportMeta = supportsDynamicImport;
  const importMetaCheck = "import.meta";
  const cssModulesCheck = `import"x"assert{type:"css"}`;
  const jsonModulesCheck = `import"x"assert{type:"json"}`;
  let featureDetectionPromise = Promise.resolve(dynamicImportCheck).then(() => {
    if (!supportsDynamicImport)
      return;
    if (!hasDocument)
      return Promise.all([
        supportsImportMaps || dynamicImport(createBlob(importMetaCheck)).then(() => supportsImportMeta = true, noop),
        cssModulesEnabled && dynamicImport(createBlob(cssModulesCheck.replace("x", createBlob("", "text/css")))).then(() => supportsCssAssertions = true, noop),
        jsonModulesEnabled && dynamicImport(createBlob(jsonModulescheck.replace("x", createBlob("{}", "text/json")))).then(() => supportsJsonAssertions = true, noop)
      ]);
    return new Promise((resolve2) => {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.setAttribute("nonce", nonce);
      function cb({ data }) {
        const isFeatureDetectionMessage = Array.isArray(data) && data[0] === "esms";
        if (!isFeatureDetectionMessage) {
          return;
        }
        supportsImportMaps = data[1];
        supportsImportMeta = data[2];
        supportsCssAssertions = data[3];
        supportsJsonAssertions = data[4];
        resolve2();
        document.head.removeChild(iframe);
        window.removeEventListener("message", cb, false);
      }
      window.addEventListener("message", cb, false);
      const importMapTest = `<script nonce=${nonce || ""}>b=(s,type='text/javascript')=>URL.createObjectURL(new Blob([s],{type}));document.head.appendChild(Object.assign(document.createElement('script'),{type:'importmap',nonce:"${nonce}",innerText:\`{"imports":{"x":"\${b('')}"}}\`}));Promise.all([${supportsImportMaps ? "true,true" : `'x',b('${importMetaCheck}')`}, ${cssModulesEnabled ? `b('${cssModulesCheck}'.replace('x',b('','text/css')))` : "false"}, ${jsonModulesEnabled ? `b('${jsonModulesCheck}'.replace('x',b('{}','text/json')))` : "false"}].map(x =>typeof x==='string'?import(x).then(x =>!!x,()=>false):x)).then(a=>parent.postMessage(['esms'].concat(a),'*'))<${""}/script>`;
      let readyForOnload = false, onloadCalledWhileNotReady = false;
      function doOnload() {
        if (!readyForOnload) {
          onloadCalledWhileNotReady = true;
          return;
        }
        const doc = iframe.contentDocument;
        if (doc && doc.head.childNodes.length === 0) {
          const s2 = doc.createElement("script");
          if (nonce)
            s2.setAttribute("nonce", nonce);
          s2.innerHTML = importMapTest.slice(15 + (nonce ? nonce.length : 0), -9);
          doc.head.appendChild(s2);
        }
      }
      iframe.onload = doOnload;
      document.head.appendChild(iframe);
      readyForOnload = true;
      if ("srcdoc" in iframe)
        iframe.srcdoc = importMapTest;
      else
        iframe.contentDocument.write(importMapTest);
      if (onloadCalledWhileNotReady)
        doOnload();
    });
  });
  let e, a, r, i = 2 << 19;
  const s = 1 === new Uint8Array(new Uint16Array([1]).buffer)[0] ? function(e2, a2) {
    const r2 = e2.length;
    let i2 = 0;
    for (; i2 < r2; )
      a2[i2] = e2.charCodeAt(i2++);
  } : function(e2, a2) {
    const r2 = e2.length;
    let i2 = 0;
    for (; i2 < r2; ) {
      const r3 = e2.charCodeAt(i2);
      a2[i2++] = (255 & r3) << 8 | r3 >>> 8;
    }
  }, t = "xportmportlassetaromsyncunctionssertvoyiedelecontininstantybreareturdebuggeawaithrwhileforifcatcfinallels";
  let f, c$1, n;
  function parse(l2, k2 = "@") {
    f = l2, c$1 = k2;
    const u2 = 2 * f.length + (2 << 18);
    if (u2 > i || !e) {
      for (; u2 > i; )
        i *= 2;
      a = new ArrayBuffer(i), s(t, new Uint16Array(a, 16, 105)), e = function(e2, a2, r2) {
        ;
        var i2 = new e2.Int8Array(r2), s2 = new e2.Int16Array(r2), t2 = new e2.Int32Array(r2), f2 = new e2.Uint8Array(r2), c2 = new e2.Uint16Array(r2), n2 = 1024;
        function b2() {
          var e3 = 0, a3 = 0, r3 = 0, f3 = 0, b3 = 0, u4 = 0;
          u4 = n2;
          n2 = n2 + 10240 | 0;
          i2[796] = 1;
          i2[795] = 0;
          s2[395] = 0;
          s2[396] = 0;
          t2[67] = t2[2];
          i2[797] = 0;
          t2[66] = 0;
          i2[794] = 0;
          t2[68] = u4 + 2048;
          t2[69] = u4;
          i2[798] = 0;
          e3 = (t2[3] | 0) + -2 | 0;
          t2[70] = e3;
          a3 = e3 + (t2[64] << 1) | 0;
          t2[71] = a3;
          e:
            while (1) {
              r3 = e3 + 2 | 0;
              t2[70] = r3;
              if (e3 >>> 0 >= a3 >>> 0) {
                b3 = 18;
                break;
              }
              a:
                do {
                  switch (s2[r3 >> 1] | 0) {
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 32:
                      break;
                    case 101: {
                      if ((((s2[396] | 0) == 0 ? H(r3) | 0 : 0) ? (m(e3 + 4 | 0, 16, 10) | 0) == 0 : 0) ? (l3(), (i2[796] | 0) == 0) : 0) {
                        b3 = 9;
                        break e;
                      } else
                        b3 = 17;
                      break;
                    }
                    case 105: {
                      if (H(r3) | 0 ? (m(e3 + 4 | 0, 26, 10) | 0) == 0 : 0) {
                        k3();
                        b3 = 17;
                      } else
                        b3 = 17;
                      break;
                    }
                    case 59: {
                      b3 = 17;
                      break;
                    }
                    case 47:
                      switch (s2[e3 + 4 >> 1] | 0) {
                        case 47: {
                          P();
                          break a;
                        }
                        case 42: {
                          y(1);
                          break a;
                        }
                        default: {
                          b3 = 16;
                          break e;
                        }
                      }
                    default: {
                      b3 = 16;
                      break e;
                    }
                  }
                } while (0);
              if ((b3 | 0) == 17) {
                b3 = 0;
                t2[67] = t2[70];
              }
              e3 = t2[70] | 0;
              a3 = t2[71] | 0;
            }
          if ((b3 | 0) == 9) {
            e3 = t2[70] | 0;
            t2[67] = e3;
            b3 = 19;
          } else if ((b3 | 0) == 16) {
            i2[796] = 0;
            t2[70] = e3;
            b3 = 19;
          } else if ((b3 | 0) == 18)
            if (!(i2[794] | 0)) {
              e3 = r3;
              b3 = 19;
            } else
              e3 = 0;
          do {
            if ((b3 | 0) == 19) {
              e:
                while (1) {
                  a3 = e3 + 2 | 0;
                  t2[70] = a3;
                  if (e3 >>> 0 >= (t2[71] | 0) >>> 0) {
                    b3 = 82;
                    break;
                  }
                  a:
                    do {
                      switch (s2[a3 >> 1] | 0) {
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 32:
                          break;
                        case 101: {
                          if (((s2[396] | 0) == 0 ? H(a3) | 0 : 0) ? (m(e3 + 4 | 0, 16, 10) | 0) == 0 : 0) {
                            l3();
                            b3 = 81;
                          } else
                            b3 = 81;
                          break;
                        }
                        case 105: {
                          if (H(a3) | 0 ? (m(e3 + 4 | 0, 26, 10) | 0) == 0 : 0) {
                            k3();
                            b3 = 81;
                          } else
                            b3 = 81;
                          break;
                        }
                        case 99: {
                          if ((H(a3) | 0 ? (m(e3 + 4 | 0, 36, 8) | 0) == 0 : 0) ? V(s2[e3 + 12 >> 1] | 0) | 0 : 0) {
                            i2[798] = 1;
                            b3 = 81;
                          } else
                            b3 = 81;
                          break;
                        }
                        case 40: {
                          f3 = t2[68] | 0;
                          a3 = s2[396] | 0;
                          b3 = a3 & 65535;
                          t2[f3 + (b3 << 3) >> 2] = 1;
                          r3 = t2[67] | 0;
                          s2[396] = a3 + 1 << 16 >> 16;
                          t2[f3 + (b3 << 3) + 4 >> 2] = r3;
                          b3 = 81;
                          break;
                        }
                        case 41: {
                          a3 = s2[396] | 0;
                          if (!(a3 << 16 >> 16)) {
                            b3 = 36;
                            break e;
                          }
                          b3 = a3 + -1 << 16 >> 16;
                          s2[396] = b3;
                          f3 = s2[395] | 0;
                          a3 = f3 & 65535;
                          if (f3 << 16 >> 16 != 0 ? (t2[(t2[68] | 0) + ((b3 & 65535) << 3) >> 2] | 0) == 5 : 0) {
                            a3 = t2[(t2[69] | 0) + (a3 + -1 << 2) >> 2] | 0;
                            r3 = a3 + 4 | 0;
                            if (!(t2[r3 >> 2] | 0))
                              t2[r3 >> 2] = (t2[67] | 0) + 2;
                            t2[a3 + 12 >> 2] = e3 + 4;
                            s2[395] = f3 + -1 << 16 >> 16;
                            b3 = 81;
                          } else
                            b3 = 81;
                          break;
                        }
                        case 123: {
                          b3 = t2[67] | 0;
                          f3 = t2[61] | 0;
                          e3 = b3;
                          do {
                            if ((s2[b3 >> 1] | 0) == 41 & (f3 | 0) != 0 ? (t2[f3 + 4 >> 2] | 0) == (b3 | 0) : 0) {
                              a3 = t2[62] | 0;
                              t2[61] = a3;
                              if (!a3) {
                                t2[57] = 0;
                                break;
                              } else {
                                t2[a3 + 28 >> 2] = 0;
                                break;
                              }
                            }
                          } while (0);
                          f3 = t2[68] | 0;
                          r3 = s2[396] | 0;
                          b3 = r3 & 65535;
                          t2[f3 + (b3 << 3) >> 2] = (i2[798] | 0) == 0 ? 2 : 6;
                          s2[396] = r3 + 1 << 16 >> 16;
                          t2[f3 + (b3 << 3) + 4 >> 2] = e3;
                          i2[798] = 0;
                          b3 = 81;
                          break;
                        }
                        case 125: {
                          e3 = s2[396] | 0;
                          if (!(e3 << 16 >> 16)) {
                            b3 = 49;
                            break e;
                          }
                          f3 = t2[68] | 0;
                          b3 = e3 + -1 << 16 >> 16;
                          s2[396] = b3;
                          if ((t2[f3 + ((b3 & 65535) << 3) >> 2] | 0) == 4) {
                            h2();
                            b3 = 81;
                          } else
                            b3 = 81;
                          break;
                        }
                        case 39: {
                          d2(39);
                          b3 = 81;
                          break;
                        }
                        case 34: {
                          d2(34);
                          b3 = 81;
                          break;
                        }
                        case 47:
                          switch (s2[e3 + 4 >> 1] | 0) {
                            case 47: {
                              P();
                              break a;
                            }
                            case 42: {
                              y(1);
                              break a;
                            }
                            default: {
                              e3 = t2[67] | 0;
                              f3 = s2[e3 >> 1] | 0;
                              r:
                                do {
                                  if (!(U(f3) | 0)) {
                                    switch (f3 << 16 >> 16) {
                                      case 41:
                                        if (D(t2[(t2[68] | 0) + (c2[396] << 3) + 4 >> 2] | 0) | 0) {
                                          b3 = 69;
                                          break r;
                                        } else {
                                          b3 = 66;
                                          break r;
                                        }
                                      case 125:
                                        break;
                                      default: {
                                        b3 = 66;
                                        break r;
                                      }
                                    }
                                    a3 = t2[68] | 0;
                                    r3 = c2[396] | 0;
                                    if (!(p2(t2[a3 + (r3 << 3) + 4 >> 2] | 0) | 0) ? (t2[a3 + (r3 << 3) >> 2] | 0) != 6 : 0)
                                      b3 = 66;
                                    else
                                      b3 = 69;
                                  } else
                                    switch (f3 << 16 >> 16) {
                                      case 46:
                                        if (((s2[e3 + -2 >> 1] | 0) + -48 & 65535) < 10) {
                                          b3 = 66;
                                          break r;
                                        } else {
                                          b3 = 69;
                                          break r;
                                        }
                                      case 43:
                                        if ((s2[e3 + -2 >> 1] | 0) == 43) {
                                          b3 = 66;
                                          break r;
                                        } else {
                                          b3 = 69;
                                          break r;
                                        }
                                      case 45:
                                        if ((s2[e3 + -2 >> 1] | 0) == 45) {
                                          b3 = 66;
                                          break r;
                                        } else {
                                          b3 = 69;
                                          break r;
                                        }
                                      default: {
                                        b3 = 69;
                                        break r;
                                      }
                                    }
                                } while (0);
                              r:
                                do {
                                  if ((b3 | 0) == 66) {
                                    b3 = 0;
                                    if (!(o2(e3) | 0)) {
                                      switch (f3 << 16 >> 16) {
                                        case 0: {
                                          b3 = 69;
                                          break r;
                                        }
                                        case 47: {
                                          if (i2[797] | 0) {
                                            b3 = 69;
                                            break r;
                                          }
                                          break;
                                        }
                                        default: {
                                        }
                                      }
                                      r3 = t2[3] | 0;
                                      a3 = f3;
                                      do {
                                        if (e3 >>> 0 <= r3 >>> 0)
                                          break;
                                        e3 = e3 + -2 | 0;
                                        t2[67] = e3;
                                        a3 = s2[e3 >> 1] | 0;
                                      } while (!(E(a3) | 0));
                                      if (F(a3) | 0) {
                                        do {
                                          if (e3 >>> 0 <= r3 >>> 0)
                                            break;
                                          e3 = e3 + -2 | 0;
                                          t2[67] = e3;
                                        } while (F(s2[e3 >> 1] | 0) | 0);
                                        if (j(e3) | 0) {
                                          g();
                                          i2[797] = 0;
                                          b3 = 81;
                                          break a;
                                        } else
                                          e3 = 1;
                                      } else
                                        e3 = 1;
                                    } else
                                      b3 = 69;
                                  }
                                } while (0);
                              if ((b3 | 0) == 69) {
                                g();
                                e3 = 0;
                              }
                              i2[797] = e3;
                              b3 = 81;
                              break a;
                            }
                          }
                        case 96: {
                          f3 = t2[68] | 0;
                          r3 = s2[396] | 0;
                          b3 = r3 & 65535;
                          t2[f3 + (b3 << 3) + 4 >> 2] = t2[67];
                          s2[396] = r3 + 1 << 16 >> 16;
                          t2[f3 + (b3 << 3) >> 2] = 3;
                          h2();
                          b3 = 81;
                          break;
                        }
                        default:
                          b3 = 81;
                      }
                    } while (0);
                  if ((b3 | 0) == 81) {
                    b3 = 0;
                    t2[67] = t2[70];
                  }
                  e3 = t2[70] | 0;
                }
              if ((b3 | 0) == 36) {
                T();
                e3 = 0;
                break;
              } else if ((b3 | 0) == 49) {
                T();
                e3 = 0;
                break;
              } else if ((b3 | 0) == 82) {
                e3 = (i2[794] | 0) == 0 ? (s2[395] | s2[396]) << 16 >> 16 == 0 : 0;
                break;
              }
            }
          } while (0);
          n2 = u4;
          return e3 | 0;
        }
        function l3() {
          var e3 = 0, a3 = 0, r3 = 0, f3 = 0, c3 = 0, n3 = 0, b3 = 0, l4 = 0, k4 = 0, o3 = 0, h3 = 0, v2 = 0, C2 = 0, g2 = 0;
          l4 = t2[70] | 0;
          k4 = t2[63] | 0;
          g2 = l4 + 12 | 0;
          t2[70] = g2;
          r3 = w2(1) | 0;
          e3 = t2[70] | 0;
          if (!((e3 | 0) == (g2 | 0) ? !(I(r3) | 0) : 0))
            C2 = 3;
          e:
            do {
              if ((C2 | 0) == 3) {
                a:
                  do {
                    switch (r3 << 16 >> 16) {
                      case 123: {
                        t2[70] = e3 + 2;
                        e3 = w2(1) | 0;
                        a3 = t2[70] | 0;
                        while (1) {
                          if (W(e3) | 0) {
                            d2(e3);
                            e3 = (t2[70] | 0) + 2 | 0;
                            t2[70] = e3;
                          } else {
                            q(e3) | 0;
                            e3 = t2[70] | 0;
                          }
                          w2(1) | 0;
                          e3 = A(a3, e3) | 0;
                          if (e3 << 16 >> 16 == 44) {
                            t2[70] = (t2[70] | 0) + 2;
                            e3 = w2(1) | 0;
                          }
                          if (e3 << 16 >> 16 == 125) {
                            C2 = 15;
                            break;
                          }
                          g2 = a3;
                          a3 = t2[70] | 0;
                          if ((a3 | 0) == (g2 | 0)) {
                            C2 = 12;
                            break;
                          }
                          if (a3 >>> 0 > (t2[71] | 0) >>> 0) {
                            C2 = 14;
                            break;
                          }
                        }
                        if ((C2 | 0) == 12) {
                          T();
                          break e;
                        } else if ((C2 | 0) == 14) {
                          T();
                          break e;
                        } else if ((C2 | 0) == 15) {
                          i2[795] = 1;
                          t2[70] = (t2[70] | 0) + 2;
                          break a;
                        }
                        break;
                      }
                      case 42: {
                        t2[70] = e3 + 2;
                        w2(1) | 0;
                        g2 = t2[70] | 0;
                        A(g2, g2) | 0;
                        break;
                      }
                      default: {
                        i2[796] = 0;
                        switch (r3 << 16 >> 16) {
                          case 100: {
                            l4 = e3 + 14 | 0;
                            t2[70] = l4;
                            switch ((w2(1) | 0) << 16 >> 16) {
                              case 97: {
                                a3 = t2[70] | 0;
                                if ((m(a3 + 2 | 0, 56, 8) | 0) == 0 ? (c3 = a3 + 10 | 0, F(s2[c3 >> 1] | 0) | 0) : 0) {
                                  t2[70] = c3;
                                  w2(0) | 0;
                                  C2 = 22;
                                }
                                break;
                              }
                              case 102: {
                                C2 = 22;
                                break;
                              }
                              case 99: {
                                a3 = t2[70] | 0;
                                if (((m(a3 + 2 | 0, 36, 8) | 0) == 0 ? (f3 = a3 + 10 | 0, g2 = s2[f3 >> 1] | 0, V(g2) | 0 | g2 << 16 >> 16 == 123) : 0) ? (t2[70] = f3, n3 = w2(1) | 0, n3 << 16 >> 16 != 123) : 0) {
                                  v2 = n3;
                                  C2 = 31;
                                }
                                break;
                              }
                              default: {
                              }
                            }
                            r:
                              do {
                                if ((C2 | 0) == 22 ? (b3 = t2[70] | 0, (m(b3 + 2 | 0, 64, 14) | 0) == 0) : 0) {
                                  r3 = b3 + 16 | 0;
                                  a3 = s2[r3 >> 1] | 0;
                                  if (!(V(a3) | 0))
                                    switch (a3 << 16 >> 16) {
                                      case 40:
                                      case 42:
                                        break;
                                      default:
                                        break r;
                                    }
                                  t2[70] = r3;
                                  a3 = w2(1) | 0;
                                  if (a3 << 16 >> 16 == 42) {
                                    t2[70] = (t2[70] | 0) + 2;
                                    a3 = w2(1) | 0;
                                  }
                                  if (a3 << 16 >> 16 != 40) {
                                    v2 = a3;
                                    C2 = 31;
                                  }
                                }
                              } while (0);
                            if ((C2 | 0) == 31 ? (o3 = t2[70] | 0, q(v2) | 0, h3 = t2[70] | 0, h3 >>> 0 > o3 >>> 0) : 0) {
                              O(e3, l4, o3, h3);
                              t2[70] = (t2[70] | 0) + -2;
                              break e;
                            }
                            O(e3, l4, 0, 0);
                            t2[70] = e3 + 12;
                            break e;
                          }
                          case 97: {
                            t2[70] = e3 + 10;
                            w2(0) | 0;
                            e3 = t2[70] | 0;
                            C2 = 35;
                            break;
                          }
                          case 102: {
                            C2 = 35;
                            break;
                          }
                          case 99: {
                            if ((m(e3 + 2 | 0, 36, 8) | 0) == 0 ? (a3 = e3 + 10 | 0, E(s2[a3 >> 1] | 0) | 0) : 0) {
                              t2[70] = a3;
                              g2 = w2(1) | 0;
                              C2 = t2[70] | 0;
                              q(g2) | 0;
                              g2 = t2[70] | 0;
                              O(C2, g2, C2, g2);
                              t2[70] = (t2[70] | 0) + -2;
                              break e;
                            }
                            e3 = e3 + 4 | 0;
                            t2[70] = e3;
                            break;
                          }
                          case 108:
                          case 118:
                            break;
                          default:
                            break e;
                        }
                        if ((C2 | 0) == 35) {
                          t2[70] = e3 + 16;
                          e3 = w2(1) | 0;
                          if (e3 << 16 >> 16 == 42) {
                            t2[70] = (t2[70] | 0) + 2;
                            e3 = w2(1) | 0;
                          }
                          C2 = t2[70] | 0;
                          q(e3) | 0;
                          g2 = t2[70] | 0;
                          O(C2, g2, C2, g2);
                          t2[70] = (t2[70] | 0) + -2;
                          break e;
                        }
                        t2[70] = e3 + 6;
                        i2[796] = 0;
                        r3 = w2(1) | 0;
                        e3 = t2[70] | 0;
                        r3 = (q(r3) | 0 | 32) << 16 >> 16 == 123;
                        f3 = t2[70] | 0;
                        if (r3) {
                          t2[70] = f3 + 2;
                          g2 = w2(1) | 0;
                          e3 = t2[70] | 0;
                          q(g2) | 0;
                        }
                        r:
                          while (1) {
                            a3 = t2[70] | 0;
                            if ((a3 | 0) == (e3 | 0))
                              break;
                            O(e3, a3, e3, a3);
                            a3 = w2(1) | 0;
                            if (r3)
                              switch (a3 << 16 >> 16) {
                                case 93:
                                case 125:
                                  break e;
                                default: {
                                }
                              }
                            e3 = t2[70] | 0;
                            if (a3 << 16 >> 16 != 44) {
                              C2 = 51;
                              break;
                            }
                            t2[70] = e3 + 2;
                            a3 = w2(1) | 0;
                            e3 = t2[70] | 0;
                            switch (a3 << 16 >> 16) {
                              case 91:
                              case 123: {
                                C2 = 51;
                                break r;
                              }
                              default: {
                              }
                            }
                            q(a3) | 0;
                          }
                        if ((C2 | 0) == 51)
                          t2[70] = e3 + -2;
                        if (!r3)
                          break e;
                        t2[70] = f3 + -2;
                        break e;
                      }
                    }
                  } while (0);
                g2 = (w2(1) | 0) << 16 >> 16 == 102;
                e3 = t2[70] | 0;
                if (g2 ? (m(e3 + 2 | 0, 50, 6) | 0) == 0 : 0) {
                  t2[70] = e3 + 8;
                  u3(l4, w2(1) | 0);
                  e3 = (k4 | 0) == 0 ? 232 : k4 + 16 | 0;
                  while (1) {
                    e3 = t2[e3 >> 2] | 0;
                    if (!e3)
                      break e;
                    t2[e3 + 12 >> 2] = 0;
                    t2[e3 + 8 >> 2] = 0;
                    e3 = e3 + 16 | 0;
                  }
                }
                t2[70] = e3 + -2;
              }
            } while (0);
          return;
        }
        function k3() {
          var e3 = 0, a3 = 0, r3 = 0, f3 = 0, c3 = 0, n3 = 0;
          c3 = t2[70] | 0;
          e3 = c3 + 12 | 0;
          t2[70] = e3;
          e:
            do {
              switch ((w2(1) | 0) << 16 >> 16) {
                case 40: {
                  a3 = t2[68] | 0;
                  n3 = s2[396] | 0;
                  r3 = n3 & 65535;
                  t2[a3 + (r3 << 3) >> 2] = 5;
                  e3 = t2[70] | 0;
                  s2[396] = n3 + 1 << 16 >> 16;
                  t2[a3 + (r3 << 3) + 4 >> 2] = e3;
                  if ((s2[t2[67] >> 1] | 0) != 46) {
                    t2[70] = e3 + 2;
                    n3 = w2(1) | 0;
                    v(c3, t2[70] | 0, 0, e3);
                    a3 = t2[61] | 0;
                    r3 = t2[69] | 0;
                    c3 = s2[395] | 0;
                    s2[395] = c3 + 1 << 16 >> 16;
                    t2[r3 + ((c3 & 65535) << 2) >> 2] = a3;
                    switch (n3 << 16 >> 16) {
                      case 39: {
                        d2(39);
                        break;
                      }
                      case 34: {
                        d2(34);
                        break;
                      }
                      default: {
                        t2[70] = (t2[70] | 0) + -2;
                        break e;
                      }
                    }
                    e3 = (t2[70] | 0) + 2 | 0;
                    t2[70] = e3;
                    switch ((w2(1) | 0) << 16 >> 16) {
                      case 44: {
                        t2[70] = (t2[70] | 0) + 2;
                        w2(1) | 0;
                        c3 = t2[61] | 0;
                        t2[c3 + 4 >> 2] = e3;
                        n3 = t2[70] | 0;
                        t2[c3 + 16 >> 2] = n3;
                        i2[c3 + 24 >> 0] = 1;
                        t2[70] = n3 + -2;
                        break e;
                      }
                      case 41: {
                        s2[396] = (s2[396] | 0) + -1 << 16 >> 16;
                        n3 = t2[61] | 0;
                        t2[n3 + 4 >> 2] = e3;
                        t2[n3 + 12 >> 2] = (t2[70] | 0) + 2;
                        i2[n3 + 24 >> 0] = 1;
                        s2[395] = (s2[395] | 0) + -1 << 16 >> 16;
                        break e;
                      }
                      default: {
                        t2[70] = (t2[70] | 0) + -2;
                        break e;
                      }
                    }
                  }
                  break;
                }
                case 46: {
                  t2[70] = (t2[70] | 0) + 2;
                  if ((w2(1) | 0) << 16 >> 16 == 109 ? (a3 = t2[70] | 0, (m(a3 + 2 | 0, 44, 6) | 0) == 0) : 0) {
                    e3 = t2[67] | 0;
                    if (!(G(e3) | 0) ? (s2[e3 >> 1] | 0) == 46 : 0)
                      break e;
                    v(c3, c3, a3 + 8 | 0, 2);
                  }
                  break;
                }
                case 42:
                case 39:
                case 34: {
                  f3 = 18;
                  break;
                }
                case 123: {
                  e3 = t2[70] | 0;
                  if (s2[396] | 0) {
                    t2[70] = e3 + -2;
                    break e;
                  }
                  while (1) {
                    if (e3 >>> 0 >= (t2[71] | 0) >>> 0)
                      break;
                    e3 = w2(1) | 0;
                    if (!(W(e3) | 0)) {
                      if (e3 << 16 >> 16 == 125) {
                        f3 = 33;
                        break;
                      }
                    } else
                      d2(e3);
                    e3 = (t2[70] | 0) + 2 | 0;
                    t2[70] = e3;
                  }
                  if ((f3 | 0) == 33)
                    t2[70] = (t2[70] | 0) + 2;
                  n3 = (w2(1) | 0) << 16 >> 16 == 102;
                  e3 = t2[70] | 0;
                  if (n3 ? m(e3 + 2 | 0, 50, 6) | 0 : 0) {
                    T();
                    break e;
                  }
                  t2[70] = e3 + 8;
                  e3 = w2(1) | 0;
                  if (W(e3) | 0) {
                    u3(c3, e3);
                    break e;
                  } else {
                    T();
                    break e;
                  }
                }
                default:
                  if ((t2[70] | 0) == (e3 | 0))
                    t2[70] = c3 + 10;
                  else
                    f3 = 18;
              }
            } while (0);
          do {
            if ((f3 | 0) == 18) {
              if (s2[396] | 0) {
                t2[70] = (t2[70] | 0) + -2;
                break;
              }
              e3 = t2[71] | 0;
              a3 = t2[70] | 0;
              while (1) {
                if (a3 >>> 0 >= e3 >>> 0) {
                  f3 = 25;
                  break;
                }
                r3 = s2[a3 >> 1] | 0;
                if (W(r3) | 0) {
                  f3 = 23;
                  break;
                }
                n3 = a3 + 2 | 0;
                t2[70] = n3;
                a3 = n3;
              }
              if ((f3 | 0) == 23) {
                u3(c3, r3);
                break;
              } else if ((f3 | 0) == 25) {
                T();
                break;
              }
            }
          } while (0);
          return;
        }
        function u3(e3, a3) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          var r3 = 0, i3 = 0;
          r3 = (t2[70] | 0) + 2 | 0;
          switch (a3 << 16 >> 16) {
            case 39: {
              d2(39);
              i3 = 5;
              break;
            }
            case 34: {
              d2(34);
              i3 = 5;
              break;
            }
            default:
              T();
          }
          do {
            if ((i3 | 0) == 5) {
              v(e3, r3, t2[70] | 0, 1);
              t2[70] = (t2[70] | 0) + 2;
              a3 = w2(0) | 0;
              e3 = a3 << 16 >> 16 == 97;
              if (e3) {
                r3 = t2[70] | 0;
                if (m(r3 + 2 | 0, 78, 10) | 0)
                  i3 = 11;
              } else {
                r3 = t2[70] | 0;
                if (!(((a3 << 16 >> 16 == 119 ? (s2[r3 + 2 >> 1] | 0) == 105 : 0) ? (s2[r3 + 4 >> 1] | 0) == 116 : 0) ? (s2[r3 + 6 >> 1] | 0) == 104 : 0))
                  i3 = 11;
              }
              if ((i3 | 0) == 11) {
                t2[70] = r3 + -2;
                break;
              }
              t2[70] = r3 + ((e3 ? 6 : 4) << 1);
              if ((w2(1) | 0) << 16 >> 16 != 123) {
                t2[70] = r3;
                break;
              }
              e3 = t2[70] | 0;
              a3 = e3;
              e:
                while (1) {
                  t2[70] = a3 + 2;
                  a3 = w2(1) | 0;
                  switch (a3 << 16 >> 16) {
                    case 39: {
                      d2(39);
                      t2[70] = (t2[70] | 0) + 2;
                      a3 = w2(1) | 0;
                      break;
                    }
                    case 34: {
                      d2(34);
                      t2[70] = (t2[70] | 0) + 2;
                      a3 = w2(1) | 0;
                      break;
                    }
                    default:
                      a3 = q(a3) | 0;
                  }
                  if (a3 << 16 >> 16 != 58) {
                    i3 = 20;
                    break;
                  }
                  t2[70] = (t2[70] | 0) + 2;
                  switch ((w2(1) | 0) << 16 >> 16) {
                    case 39: {
                      d2(39);
                      break;
                    }
                    case 34: {
                      d2(34);
                      break;
                    }
                    default: {
                      i3 = 24;
                      break e;
                    }
                  }
                  t2[70] = (t2[70] | 0) + 2;
                  switch ((w2(1) | 0) << 16 >> 16) {
                    case 125: {
                      i3 = 29;
                      break e;
                    }
                    case 44:
                      break;
                    default: {
                      i3 = 28;
                      break e;
                    }
                  }
                  t2[70] = (t2[70] | 0) + 2;
                  if ((w2(1) | 0) << 16 >> 16 == 125) {
                    i3 = 29;
                    break;
                  }
                  a3 = t2[70] | 0;
                }
              if ((i3 | 0) == 20) {
                t2[70] = r3;
                break;
              } else if ((i3 | 0) == 24) {
                t2[70] = r3;
                break;
              } else if ((i3 | 0) == 28) {
                t2[70] = r3;
                break;
              } else if ((i3 | 0) == 29) {
                i3 = t2[61] | 0;
                t2[i3 + 16 >> 2] = e3;
                t2[i3 + 12 >> 2] = (t2[70] | 0) + 2;
                break;
              }
            }
          } while (0);
          return;
        }
        function o2(e3) {
          e3 = e3 | 0;
          e:
            do {
              switch (s2[e3 >> 1] | 0) {
                case 100:
                  switch (s2[e3 + -2 >> 1] | 0) {
                    case 105: {
                      e3 = $(e3 + -4 | 0, 88, 2) | 0;
                      break e;
                    }
                    case 108: {
                      e3 = $(e3 + -4 | 0, 92, 3) | 0;
                      break e;
                    }
                    default: {
                      e3 = 0;
                      break e;
                    }
                  }
                case 101:
                  switch (s2[e3 + -2 >> 1] | 0) {
                    case 115:
                      switch (s2[e3 + -4 >> 1] | 0) {
                        case 108: {
                          e3 = B(e3 + -6 | 0, 101) | 0;
                          break e;
                        }
                        case 97: {
                          e3 = B(e3 + -6 | 0, 99) | 0;
                          break e;
                        }
                        default: {
                          e3 = 0;
                          break e;
                        }
                      }
                    case 116: {
                      e3 = $(e3 + -4 | 0, 98, 4) | 0;
                      break e;
                    }
                    case 117: {
                      e3 = $(e3 + -4 | 0, 106, 6) | 0;
                      break e;
                    }
                    default: {
                      e3 = 0;
                      break e;
                    }
                  }
                case 102: {
                  if ((s2[e3 + -2 >> 1] | 0) == 111 ? (s2[e3 + -4 >> 1] | 0) == 101 : 0)
                    switch (s2[e3 + -6 >> 1] | 0) {
                      case 99: {
                        e3 = $(e3 + -8 | 0, 118, 6) | 0;
                        break e;
                      }
                      case 112: {
                        e3 = $(e3 + -8 | 0, 130, 2) | 0;
                        break e;
                      }
                      default: {
                        e3 = 0;
                        break e;
                      }
                    }
                  else
                    e3 = 0;
                  break;
                }
                case 107: {
                  e3 = $(e3 + -2 | 0, 134, 4) | 0;
                  break;
                }
                case 110: {
                  e3 = e3 + -2 | 0;
                  if (B(e3, 105) | 0)
                    e3 = 1;
                  else
                    e3 = $(e3, 142, 5) | 0;
                  break;
                }
                case 111: {
                  e3 = B(e3 + -2 | 0, 100) | 0;
                  break;
                }
                case 114: {
                  e3 = $(e3 + -2 | 0, 152, 7) | 0;
                  break;
                }
                case 116: {
                  e3 = $(e3 + -2 | 0, 166, 4) | 0;
                  break;
                }
                case 119:
                  switch (s2[e3 + -2 >> 1] | 0) {
                    case 101: {
                      e3 = B(e3 + -4 | 0, 110) | 0;
                      break e;
                    }
                    case 111: {
                      e3 = $(e3 + -4 | 0, 174, 3) | 0;
                      break e;
                    }
                    default: {
                      e3 = 0;
                      break e;
                    }
                  }
                default:
                  e3 = 0;
              }
            } while (0);
          return e3 | 0;
        }
        function h2() {
          var e3 = 0, a3 = 0, r3 = 0, i3 = 0;
          a3 = t2[71] | 0;
          r3 = t2[70] | 0;
          e:
            while (1) {
              e3 = r3 + 2 | 0;
              if (r3 >>> 0 >= a3 >>> 0) {
                a3 = 10;
                break;
              }
              switch (s2[e3 >> 1] | 0) {
                case 96: {
                  a3 = 7;
                  break e;
                }
                case 36: {
                  if ((s2[r3 + 4 >> 1] | 0) == 123) {
                    a3 = 6;
                    break e;
                  }
                  break;
                }
                case 92: {
                  e3 = r3 + 4 | 0;
                  break;
                }
                default: {
                }
              }
              r3 = e3;
            }
          if ((a3 | 0) == 6) {
            e3 = r3 + 4 | 0;
            t2[70] = e3;
            a3 = t2[68] | 0;
            i3 = s2[396] | 0;
            r3 = i3 & 65535;
            t2[a3 + (r3 << 3) >> 2] = 4;
            s2[396] = i3 + 1 << 16 >> 16;
            t2[a3 + (r3 << 3) + 4 >> 2] = e3;
          } else if ((a3 | 0) == 7) {
            t2[70] = e3;
            r3 = t2[68] | 0;
            i3 = (s2[396] | 0) + -1 << 16 >> 16;
            s2[396] = i3;
            if ((t2[r3 + ((i3 & 65535) << 3) >> 2] | 0) != 3)
              T();
          } else if ((a3 | 0) == 10) {
            t2[70] = e3;
            T();
          }
          return;
        }
        function w2(e3) {
          e3 = e3 | 0;
          var a3 = 0, r3 = 0, i3 = 0;
          r3 = t2[70] | 0;
          e:
            do {
              a3 = s2[r3 >> 1] | 0;
              a:
                do {
                  if (a3 << 16 >> 16 != 47)
                    if (e3)
                      if (V(a3) | 0)
                        break;
                      else
                        break e;
                    else if (F(a3) | 0)
                      break;
                    else
                      break e;
                  else
                    switch (s2[r3 + 2 >> 1] | 0) {
                      case 47: {
                        P();
                        break a;
                      }
                      case 42: {
                        y(e3);
                        break a;
                      }
                      default: {
                        a3 = 47;
                        break e;
                      }
                    }
                } while (0);
              i3 = t2[70] | 0;
              r3 = i3 + 2 | 0;
              t2[70] = r3;
            } while (i3 >>> 0 < (t2[71] | 0) >>> 0);
          return a3 | 0;
        }
        function d2(e3) {
          e3 = e3 | 0;
          var a3 = 0, r3 = 0, i3 = 0, f3 = 0;
          f3 = t2[71] | 0;
          a3 = t2[70] | 0;
          while (1) {
            i3 = a3 + 2 | 0;
            if (a3 >>> 0 >= f3 >>> 0) {
              a3 = 9;
              break;
            }
            r3 = s2[i3 >> 1] | 0;
            if (r3 << 16 >> 16 == e3 << 16 >> 16) {
              a3 = 10;
              break;
            }
            if (r3 << 16 >> 16 == 92) {
              r3 = a3 + 4 | 0;
              if ((s2[r3 >> 1] | 0) == 13) {
                a3 = a3 + 6 | 0;
                a3 = (s2[a3 >> 1] | 0) == 10 ? a3 : r3;
              } else
                a3 = r3;
            } else if (Z(r3) | 0) {
              a3 = 9;
              break;
            } else
              a3 = i3;
          }
          if ((a3 | 0) == 9) {
            t2[70] = i3;
            T();
          } else if ((a3 | 0) == 10)
            t2[70] = i3;
          return;
        }
        function v(e3, a3, r3, s3) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          r3 = r3 | 0;
          s3 = s3 | 0;
          var f3 = 0, c3 = 0;
          f3 = t2[65] | 0;
          t2[65] = f3 + 32;
          c3 = t2[61] | 0;
          t2[((c3 | 0) == 0 ? 228 : c3 + 28 | 0) >> 2] = f3;
          t2[62] = c3;
          t2[61] = f3;
          t2[f3 + 8 >> 2] = e3;
          if (2 == (s3 | 0))
            e3 = r3;
          else
            e3 = 1 == (s3 | 0) ? r3 + 2 | 0 : 0;
          t2[f3 + 12 >> 2] = e3;
          t2[f3 >> 2] = a3;
          t2[f3 + 4 >> 2] = r3;
          t2[f3 + 16 >> 2] = 0;
          t2[f3 + 20 >> 2] = s3;
          c3 = 1 == (s3 | 0);
          i2[f3 + 24 >> 0] = c3 & 1;
          t2[f3 + 28 >> 2] = 0;
          if (c3 | 2 == (s3 | 0))
            i2[795] = 1;
          return;
        }
        function A(e3, a3) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          var r3 = 0, i3 = 0, f3 = 0, c3 = 0;
          r3 = t2[70] | 0;
          i3 = s2[r3 >> 1] | 0;
          c3 = (e3 | 0) == (a3 | 0);
          f3 = c3 ? 0 : e3;
          c3 = c3 ? 0 : a3;
          if (i3 << 16 >> 16 == 97) {
            t2[70] = r3 + 4;
            r3 = w2(1) | 0;
            e3 = t2[70] | 0;
            if (W(r3) | 0) {
              d2(r3);
              a3 = (t2[70] | 0) + 2 | 0;
              t2[70] = a3;
            } else {
              q(r3) | 0;
              a3 = t2[70] | 0;
            }
            i3 = w2(1) | 0;
            r3 = t2[70] | 0;
          }
          if ((r3 | 0) != (e3 | 0))
            O(e3, a3, f3, c3);
          return i3 | 0;
        }
        function C() {
          var e3 = 0, a3 = 0, r3 = 0;
          r3 = t2[71] | 0;
          a3 = t2[70] | 0;
          e:
            while (1) {
              e3 = a3 + 2 | 0;
              if (a3 >>> 0 >= r3 >>> 0) {
                a3 = 6;
                break;
              }
              switch (s2[e3 >> 1] | 0) {
                case 13:
                case 10: {
                  a3 = 6;
                  break e;
                }
                case 93: {
                  a3 = 7;
                  break e;
                }
                case 92: {
                  e3 = a3 + 4 | 0;
                  break;
                }
                default: {
                }
              }
              a3 = e3;
            }
          if ((a3 | 0) == 6) {
            t2[70] = e3;
            T();
            e3 = 0;
          } else if ((a3 | 0) == 7) {
            t2[70] = e3;
            e3 = 93;
          }
          return e3 | 0;
        }
        function g() {
          var e3 = 0, a3 = 0, r3 = 0;
          e:
            while (1) {
              e3 = t2[70] | 0;
              a3 = e3 + 2 | 0;
              t2[70] = a3;
              if (e3 >>> 0 >= (t2[71] | 0) >>> 0) {
                r3 = 7;
                break;
              }
              switch (s2[a3 >> 1] | 0) {
                case 13:
                case 10: {
                  r3 = 7;
                  break e;
                }
                case 47:
                  break e;
                case 91: {
                  C() | 0;
                  break;
                }
                case 92: {
                  t2[70] = e3 + 4;
                  break;
                }
                default: {
                }
              }
            }
          if ((r3 | 0) == 7)
            T();
          return;
        }
        function p2(e3) {
          e3 = e3 | 0;
          switch (s2[e3 >> 1] | 0) {
            case 62: {
              e3 = (s2[e3 + -2 >> 1] | 0) == 61;
              break;
            }
            case 41:
            case 59: {
              e3 = 1;
              break;
            }
            case 104: {
              e3 = $(e3 + -2 | 0, 200, 4) | 0;
              break;
            }
            case 121: {
              e3 = $(e3 + -2 | 0, 208, 6) | 0;
              break;
            }
            case 101: {
              e3 = $(e3 + -2 | 0, 220, 3) | 0;
              break;
            }
            default:
              e3 = 0;
          }
          return e3 | 0;
        }
        function y(e3) {
          e3 = e3 | 0;
          var a3 = 0, r3 = 0, i3 = 0, f3 = 0, c3 = 0;
          f3 = (t2[70] | 0) + 2 | 0;
          t2[70] = f3;
          r3 = t2[71] | 0;
          while (1) {
            a3 = f3 + 2 | 0;
            if (f3 >>> 0 >= r3 >>> 0)
              break;
            i3 = s2[a3 >> 1] | 0;
            if (!e3 ? Z(i3) | 0 : 0)
              break;
            if (i3 << 16 >> 16 == 42 ? (s2[f3 + 4 >> 1] | 0) == 47 : 0) {
              c3 = 8;
              break;
            }
            f3 = a3;
          }
          if ((c3 | 0) == 8) {
            t2[70] = a3;
            a3 = f3 + 4 | 0;
          }
          t2[70] = a3;
          return;
        }
        function m(e3, a3, r3) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          r3 = r3 | 0;
          var s3 = 0, t3 = 0;
          e:
            do {
              if (!r3)
                e3 = 0;
              else {
                while (1) {
                  s3 = i2[e3 >> 0] | 0;
                  t3 = i2[a3 >> 0] | 0;
                  if (s3 << 24 >> 24 != t3 << 24 >> 24)
                    break;
                  r3 = r3 + -1 | 0;
                  if (!r3) {
                    e3 = 0;
                    break e;
                  } else {
                    e3 = e3 + 1 | 0;
                    a3 = a3 + 1 | 0;
                  }
                }
                e3 = (s3 & 255) - (t3 & 255) | 0;
              }
            } while (0);
          return e3 | 0;
        }
        function I(e3) {
          e3 = e3 | 0;
          e:
            do {
              switch (e3 << 16 >> 16) {
                case 38:
                case 37:
                case 33: {
                  e3 = 1;
                  break;
                }
                default:
                  if ((e3 & -8) << 16 >> 16 == 40 | (e3 + -58 & 65535) < 6)
                    e3 = 1;
                  else {
                    switch (e3 << 16 >> 16) {
                      case 91:
                      case 93:
                      case 94: {
                        e3 = 1;
                        break e;
                      }
                      default: {
                      }
                    }
                    e3 = (e3 + -123 & 65535) < 4;
                  }
              }
            } while (0);
          return e3 | 0;
        }
        function U(e3) {
          e3 = e3 | 0;
          e:
            do {
              switch (e3 << 16 >> 16) {
                case 38:
                case 37:
                case 33:
                  break;
                default:
                  if (!((e3 + -58 & 65535) < 6 | (e3 + -40 & 65535) < 7 & e3 << 16 >> 16 != 41)) {
                    switch (e3 << 16 >> 16) {
                      case 91:
                      case 94:
                        break e;
                      default: {
                      }
                    }
                    return e3 << 16 >> 16 != 125 & (e3 + -123 & 65535) < 4 | 0;
                  }
              }
            } while (0);
          return 1;
        }
        function x(e3) {
          e3 = e3 | 0;
          var a3 = 0;
          a3 = s2[e3 >> 1] | 0;
          e:
            do {
              if ((a3 + -9 & 65535) >= 5) {
                switch (a3 << 16 >> 16) {
                  case 160:
                  case 32: {
                    a3 = 1;
                    break e;
                  }
                  default: {
                  }
                }
                if (I(a3) | 0)
                  return a3 << 16 >> 16 != 46 | (G(e3) | 0) | 0;
                else
                  a3 = 0;
              } else
                a3 = 1;
            } while (0);
          return a3 | 0;
        }
        function S(e3) {
          e3 = e3 | 0;
          var a3 = 0, r3 = 0, i3 = 0, f3 = 0;
          r3 = n2;
          n2 = n2 + 16 | 0;
          i3 = r3;
          t2[i3 >> 2] = 0;
          t2[64] = e3;
          a3 = t2[3] | 0;
          f3 = a3 + (e3 << 1) | 0;
          e3 = f3 + 2 | 0;
          s2[f3 >> 1] = 0;
          t2[i3 >> 2] = e3;
          t2[65] = e3;
          t2[57] = 0;
          t2[61] = 0;
          t2[59] = 0;
          t2[58] = 0;
          t2[63] = 0;
          t2[60] = 0;
          n2 = r3;
          return a3 | 0;
        }
        function O(e3, a3, r3, s3) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          r3 = r3 | 0;
          s3 = s3 | 0;
          var f3 = 0, c3 = 0;
          f3 = t2[65] | 0;
          t2[65] = f3 + 20;
          c3 = t2[63] | 0;
          t2[((c3 | 0) == 0 ? 232 : c3 + 16 | 0) >> 2] = f3;
          t2[63] = f3;
          t2[f3 >> 2] = e3;
          t2[f3 + 4 >> 2] = a3;
          t2[f3 + 8 >> 2] = r3;
          t2[f3 + 12 >> 2] = s3;
          t2[f3 + 16 >> 2] = 0;
          i2[795] = 1;
          return;
        }
        function $(e3, a3, r3) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          r3 = r3 | 0;
          var i3 = 0, s3 = 0;
          i3 = e3 + (0 - r3 << 1) | 0;
          s3 = i3 + 2 | 0;
          e3 = t2[3] | 0;
          if (s3 >>> 0 >= e3 >>> 0 ? (m(s3, a3, r3 << 1) | 0) == 0 : 0)
            if ((s3 | 0) == (e3 | 0))
              e3 = 1;
            else
              e3 = x(i3) | 0;
          else
            e3 = 0;
          return e3 | 0;
        }
        function j(e3) {
          e3 = e3 | 0;
          switch (s2[e3 >> 1] | 0) {
            case 107: {
              e3 = $(e3 + -2 | 0, 134, 4) | 0;
              break;
            }
            case 101: {
              if ((s2[e3 + -2 >> 1] | 0) == 117)
                e3 = $(e3 + -4 | 0, 106, 6) | 0;
              else
                e3 = 0;
              break;
            }
            default:
              e3 = 0;
          }
          return e3 | 0;
        }
        function B(e3, a3) {
          e3 = e3 | 0;
          a3 = a3 | 0;
          var r3 = 0;
          r3 = t2[3] | 0;
          if (r3 >>> 0 <= e3 >>> 0 ? (s2[e3 >> 1] | 0) == a3 << 16 >> 16 : 0)
            if ((r3 | 0) == (e3 | 0))
              r3 = 1;
            else
              r3 = E(s2[e3 + -2 >> 1] | 0) | 0;
          else
            r3 = 0;
          return r3 | 0;
        }
        function E(e3) {
          e3 = e3 | 0;
          e:
            do {
              if ((e3 + -9 & 65535) < 5)
                e3 = 1;
              else {
                switch (e3 << 16 >> 16) {
                  case 32:
                  case 160: {
                    e3 = 1;
                    break e;
                  }
                  default: {
                  }
                }
                e3 = e3 << 16 >> 16 != 46 & (I(e3) | 0);
              }
            } while (0);
          return e3 | 0;
        }
        function P() {
          var e3 = 0, a3 = 0, r3 = 0;
          e3 = t2[71] | 0;
          r3 = t2[70] | 0;
          e:
            while (1) {
              a3 = r3 + 2 | 0;
              if (r3 >>> 0 >= e3 >>> 0)
                break;
              switch (s2[a3 >> 1] | 0) {
                case 13:
                case 10:
                  break e;
                default:
                  r3 = a3;
              }
            }
          t2[70] = a3;
          return;
        }
        function q(e3) {
          e3 = e3 | 0;
          while (1) {
            if (V(e3) | 0)
              break;
            if (I(e3) | 0)
              break;
            e3 = (t2[70] | 0) + 2 | 0;
            t2[70] = e3;
            e3 = s2[e3 >> 1] | 0;
            if (!(e3 << 16 >> 16)) {
              e3 = 0;
              break;
            }
          }
          return e3 | 0;
        }
        function z() {
          var e3 = 0;
          e3 = t2[(t2[59] | 0) + 20 >> 2] | 0;
          switch (e3 | 0) {
            case 1: {
              e3 = -1;
              break;
            }
            case 2: {
              e3 = -2;
              break;
            }
            default:
              e3 = e3 - (t2[3] | 0) >> 1;
          }
          return e3 | 0;
        }
        function D(e3) {
          e3 = e3 | 0;
          if (!($(e3, 180, 5) | 0) ? !($(e3, 190, 3) | 0) : 0)
            e3 = $(e3, 196, 2) | 0;
          else
            e3 = 1;
          return e3 | 0;
        }
        function F(e3) {
          e3 = e3 | 0;
          switch (e3 << 16 >> 16) {
            case 160:
            case 32:
            case 12:
            case 11:
            case 9: {
              e3 = 1;
              break;
            }
            default:
              e3 = 0;
          }
          return e3 | 0;
        }
        function G(e3) {
          e3 = e3 | 0;
          if ((s2[e3 >> 1] | 0) == 46 ? (s2[e3 + -2 >> 1] | 0) == 46 : 0)
            e3 = (s2[e3 + -4 >> 1] | 0) == 46;
          else
            e3 = 0;
          return e3 | 0;
        }
        function H(e3) {
          e3 = e3 | 0;
          if ((t2[3] | 0) == (e3 | 0))
            e3 = 1;
          else
            e3 = x(e3 + -2 | 0) | 0;
          return e3 | 0;
        }
        function J() {
          var e3 = 0;
          e3 = t2[(t2[60] | 0) + 12 >> 2] | 0;
          if (!e3)
            e3 = -1;
          else
            e3 = e3 - (t2[3] | 0) >> 1;
          return e3 | 0;
        }
        function K() {
          var e3 = 0;
          e3 = t2[(t2[59] | 0) + 12 >> 2] | 0;
          if (!e3)
            e3 = -1;
          else
            e3 = e3 - (t2[3] | 0) >> 1;
          return e3 | 0;
        }
        function L() {
          var e3 = 0;
          e3 = t2[(t2[60] | 0) + 8 >> 2] | 0;
          if (!e3)
            e3 = -1;
          else
            e3 = e3 - (t2[3] | 0) >> 1;
          return e3 | 0;
        }
        function M() {
          var e3 = 0;
          e3 = t2[(t2[59] | 0) + 16 >> 2] | 0;
          if (!e3)
            e3 = -1;
          else
            e3 = e3 - (t2[3] | 0) >> 1;
          return e3 | 0;
        }
        function N() {
          var e3 = 0;
          e3 = t2[(t2[59] | 0) + 4 >> 2] | 0;
          if (!e3)
            e3 = -1;
          else
            e3 = e3 - (t2[3] | 0) >> 1;
          return e3 | 0;
        }
        function Q() {
          var e3 = 0;
          e3 = t2[59] | 0;
          e3 = t2[((e3 | 0) == 0 ? 228 : e3 + 28 | 0) >> 2] | 0;
          t2[59] = e3;
          return (e3 | 0) != 0 | 0;
        }
        function R() {
          var e3 = 0;
          e3 = t2[60] | 0;
          e3 = t2[((e3 | 0) == 0 ? 232 : e3 + 16 | 0) >> 2] | 0;
          t2[60] = e3;
          return (e3 | 0) != 0 | 0;
        }
        function T() {
          i2[794] = 1;
          t2[66] = (t2[70] | 0) - (t2[3] | 0) >> 1;
          t2[70] = (t2[71] | 0) + 2;
          return;
        }
        function V(e3) {
          e3 = e3 | 0;
          return (e3 | 128) << 16 >> 16 == 160 | (e3 + -9 & 65535) < 5 | 0;
        }
        function W(e3) {
          e3 = e3 | 0;
          return e3 << 16 >> 16 == 39 | e3 << 16 >> 16 == 34 | 0;
        }
        function X() {
          return (t2[(t2[59] | 0) + 8 >> 2] | 0) - (t2[3] | 0) >> 1 | 0;
        }
        function Y() {
          return (t2[(t2[60] | 0) + 4 >> 2] | 0) - (t2[3] | 0) >> 1 | 0;
        }
        function Z(e3) {
          e3 = e3 | 0;
          return e3 << 16 >> 16 == 13 | e3 << 16 >> 16 == 10 | 0;
        }
        function _() {
          return (t2[t2[59] >> 2] | 0) - (t2[3] | 0) >> 1 | 0;
        }
        function ee() {
          return (t2[t2[60] >> 2] | 0) - (t2[3] | 0) >> 1 | 0;
        }
        function ae() {
          return f2[(t2[59] | 0) + 24 >> 0] | 0 | 0;
        }
        function re(e3) {
          e3 = e3 | 0;
          t2[3] = e3;
          return;
        }
        function ie() {
          return (i2[795] | 0) != 0 | 0;
        }
        function se() {
          return (i2[796] | 0) != 0 | 0;
        }
        function te() {
          return t2[66] | 0;
        }
        function fe(e3) {
          e3 = e3 | 0;
          n2 = e3 + 992 + 15 & -16;
          return 992;
        }
        return { su: fe, ai: M, e: te, ee: Y, ele: J, els: L, es: ee, f: se, id: z, ie: N, ip: ae, is: _, ms: ie, p: b2, re: R, ri: Q, sa: S, se: K, ses: re, ss: X };
      }("undefined" != typeof self ? self : global, {}, a), r = e.su(i - (2 << 17));
    }
    const h = f.length + 1;
    e.ses(r), e.sa(h - 1), s(f, new Uint16Array(a, r, h)), e.p() || (n = e.e(), o());
    const w = [], d = [];
    for (; e.ri(); ) {
      const a2 = e.is(), r2 = e.ie(), i2 = e.ai(), s2 = e.id(), t2 = e.ss(), c2 = e.se();
      let n2;
      e.ip() && (n2 = b(-1 === s2 ? a2 : a2 + 1, f.charCodeAt(-1 === s2 ? a2 - 1 : a2))), w.push({ n: n2, s: a2, e: r2, ss: t2, se: c2, d: s2, a: i2 });
    }
    for (; e.re(); ) {
      const a2 = e.es(), r2 = e.ee(), i2 = e.els(), s2 = e.ele(), t2 = f.charCodeAt(a2), c2 = i2 >= 0 ? f.charCodeAt(i2) : -1;
      d.push({ s: a2, e: r2, ls: i2, le: s2, n: 34 === t2 || 39 === t2 ? b(a2 + 1, t2) : f.slice(a2, r2), ln: i2 < 0 ? void 0 : 34 === c2 || 39 === c2 ? b(i2 + 1, c2) : f.slice(i2, s2) });
    }
    return [w, d, !!e.f(), !!e.ms()];
  }
  function b(e2, a2) {
    n = e2;
    let r2 = "", i2 = n;
    for (; ; ) {
      n >= f.length && o();
      const e3 = f.charCodeAt(n);
      if (e3 === a2)
        break;
      92 === e3 ? (r2 += f.slice(i2, n), r2 += l(), i2 = n) : (8232 === e3 || 8233 === e3 || u(e3) && o(), ++n);
    }
    return r2 += f.slice(i2, n++), r2;
  }
  function l() {
    let e2 = f.charCodeAt(++n);
    switch (++n, e2) {
      case 110:
        return "\n";
      case 114:
        return "\r";
      case 120:
        return String.fromCharCode(k(2));
      case 117:
        return function() {
          const e3 = f.charCodeAt(n);
          let a2;
          123 === e3 ? (++n, a2 = k(f.indexOf("}", n) - n), ++n, a2 > 1114111 && o()) : a2 = k(4);
          return a2 <= 65535 ? String.fromCharCode(a2) : (a2 -= 65536, String.fromCharCode(55296 + (a2 >> 10), 56320 + (1023 & a2)));
        }();
      case 116:
        return "	";
      case 98:
        return "\b";
      case 118:
        return "\v";
      case 102:
        return "\f";
      case 13:
        10 === f.charCodeAt(n) && ++n;
      case 10:
        return "";
      case 56:
      case 57:
        o();
      default:
        if (e2 >= 48 && e2 <= 55) {
          let a2 = f.substr(n - 1, 3).match(/^[0-7]+/)[0], r2 = parseInt(a2, 8);
          return r2 > 255 && (a2 = a2.slice(0, -1), r2 = parseInt(a2, 8)), n += a2.length - 1, e2 = f.charCodeAt(n), "0" === a2 && 56 !== e2 && 57 !== e2 || o(), String.fromCharCode(r2);
        }
        return u(e2) ? "" : String.fromCharCode(e2);
    }
  }
  function k(e2) {
    const a2 = n;
    let r2 = 0, i2 = 0;
    for (let a3 = 0; a3 < e2; ++a3, ++n) {
      let e3, s2 = f.charCodeAt(n);
      if (95 !== s2) {
        if (s2 >= 97)
          e3 = s2 - 97 + 10;
        else if (s2 >= 65)
          e3 = s2 - 65 + 10;
        else {
          if (!(s2 >= 48 && s2 <= 57))
            break;
          e3 = s2 - 48;
        }
        if (e3 >= 16)
          break;
        i2 = s2, r2 = 16 * r2 + e3;
      } else
        95 !== i2 && 0 !== a3 || o(), i2 = s2;
    }
    return 95 !== i2 && n - a2 === e2 || o(), r2;
  }
  function u(e2) {
    return 13 === e2 || 10 === e2;
  }
  function o() {
    throw Object.assign(Error(`Parse error ${c$1}:${f.slice(0, n).split("\n").length}:${n - f.lastIndexOf("\n", n - 1)}`), { idx: n });
  }
  async function _resolve(id, parentUrl) {
    const urlResolved = resolveIfNotPlainOrUrl(id, parentUrl) || asURL(id);
    return {
      r: resolveImportMap(importMap, urlResolved || id, parentUrl) || throwUnresolved(id, parentUrl),
      // b = bare specifier
      b: !urlResolved && !asURL(id)
    };
  }
  const resolve = resolveHook ? async (id, parentUrl) => {
    let result = resolveHook(id, parentUrl, defaultResolve);
    if (result && result.then)
      result = await result;
    return result ? { r: result, b: !resolveIfNotPlainOrUrl(id, parentUrl) && !asURL(id) } : _resolve(id, parentUrl);
  } : _resolve;
  async function importShim(id, ...args) {
    let parentUrl = args[args.length - 1];
    if (typeof parentUrl !== "string")
      parentUrl = baseUrl;
    await initPromise;
    if (importHook)
      await importHook(id, typeof args[1] !== "string" ? args[1] : {}, parentUrl);
    if (acceptingImportMaps || shimMode || !baselinePassthrough) {
      if (hasDocument)
        processScriptsAndPreloads(true);
      if (!shimMode)
        acceptingImportMaps = false;
    }
    await importMapPromise;
    return topLevelLoad((await resolve(id, parentUrl)).r, { credentials: "same-origin" });
  }
  self.importShim = importShim;
  function defaultResolve(id, parentUrl) {
    return resolveImportMap(importMap, resolveIfNotPlainOrUrl(id, parentUrl) || id, parentUrl) || throwUnresolved(id, parentUrl);
  }
  function throwUnresolved(id, parentUrl) {
    throw Error(`Unable to resolve specifier '${id}'${fromParent(parentUrl)}`);
  }
  const resolveSync = (id, parentUrl = baseUrl) => {
    parentUrl = `${parentUrl}`;
    const result = resolveHook && resolveHook(id, parentUrl, defaultResolve);
    return result && !result.then ? result : defaultResolve(id, parentUrl);
  };
  function metaResolve(id, parentUrl = this.url) {
    return resolveSync(id, parentUrl);
  }
  importShim.resolve = resolveSync;
  importShim.getImportMap = () => JSON.parse(JSON.stringify(importMap));
  importShim.addImportMap = (importMapIn) => {
    if (!shimMode)
      throw new Error("Unsupported in polyfill mode.");
    importMap = resolveAndComposeImportMap(importMapIn, baseUrl, importMap);
  };
  const registry = importShim._r = {};
  importShim._w = {};
  async function loadAll(load, seen) {
    if (load.b || seen[load.u])
      return;
    seen[load.u] = 1;
    await load.L;
    await Promise.all(load.d.map((dep) => loadAll(dep, seen)));
    if (!load.n)
      load.n = load.d.some((dep) => dep.n);
  }
  let importMap = { imports: {}, scopes: {} };
  let baselinePassthrough;
  const initPromise = featureDetectionPromise.then(() => {
    baselinePassthrough = esmsInitOptions.polyfillEnable !== true && supportsDynamicImport && supportsImportMeta && supportsImportMaps && (!jsonModulesEnabled || supportsJsonAssertions) && (!cssModulesEnabled || supportsCssAssertions) && !importMapSrcOrLazy;
    if (hasDocument) {
      if (!supportsImportMaps) {
        const supports2 = HTMLScriptElement.supports || ((type) => type === "classic" || type === "module");
        HTMLScriptElement.supports = (type) => type === "importmap" || supports2(type);
      }
      if (shimMode || !baselinePassthrough) {
        new MutationObserver((mutations) => {
          for (const mutation of mutations) {
            if (mutation.type !== "childList")
              continue;
            for (const node of mutation.addedNodes) {
              if (node.tagName === "SCRIPT") {
                if (node.type === (shimMode ? "module-shim" : "module"))
                  processScript(node, true);
                if (node.type === (shimMode ? "importmap-shim" : "importmap"))
                  processImportMap(node, true);
              } else if (node.tagName === "LINK" && node.rel === (shimMode ? "modulepreload-shim" : "modulepreload")) {
                processPreload(node);
              }
            }
          }
        }).observe(document, { childList: true, subtree: true });
        processScriptsAndPreloads();
        if (document.readyState === "complete") {
          readyStateCompleteCheck();
        } else {
          async function readyListener() {
            await initPromise;
            processScriptsAndPreloads();
            if (document.readyState === "complete") {
              readyStateCompleteCheck();
              document.removeEventListener("readystatechange", readyListener);
            }
          }
          document.addEventListener("readystatechange", readyListener);
        }
      }
    }
    return void 0;
  });
  let importMapPromise = initPromise;
  let firstPolyfillLoad = true;
  let acceptingImportMaps = true;
  async function topLevelLoad(url, fetchOpts, source, nativelyLoaded, lastStaticLoadPromise2) {
    if (!shimMode)
      acceptingImportMaps = false;
    await initPromise;
    await importMapPromise;
    if (importHook)
      await importHook(url, typeof fetchOpts !== "string" ? fetchOpts : {}, "");
    if (!shimMode && baselinePassthrough) {
      if (nativelyLoaded)
        return null;
      await lastStaticLoadPromise2;
      return dynamicImport(source ? createBlob(source) : url, { errUrl: url || source });
    }
    const load = getOrCreateLoad(url, fetchOpts, null, source);
    const seen = {};
    await loadAll(load, seen);
    lastLoad = void 0;
    resolveDeps(load, seen);
    await lastStaticLoadPromise2;
    if (source && !shimMode && !load.n) {
      if (nativelyLoaded)
        return;
      if (revokeBlobURLs)
        revokeObjectURLs(Object.keys(seen));
      return await dynamicImport(createBlob(source), { errUrl: source });
    }
    if (firstPolyfillLoad && !shimMode && load.n && nativelyLoaded) {
      onpolyfill();
      firstPolyfillLoad = false;
    }
    const module = await dynamicImport(!shimMode && !load.n && nativelyLoaded ? load.u : load.b, { errUrl: load.u });
    if (load.s)
      (await dynamicImport(load.s)).u$_(module);
    if (revokeBlobURLs)
      revokeObjectURLs(Object.keys(seen));
    return module;
  }
  function revokeObjectURLs(registryKeys) {
    let batch = 0;
    const keysLength = registryKeys.length;
    const schedule = self.requestIdleCallback ? self.requestIdleCallback : self.requestAnimationFrame;
    schedule(cleanup);
    function cleanup() {
      const batchStartIndex = batch * 100;
      if (batchStartIndex > keysLength)
        return;
      for (const key of registryKeys.slice(batchStartIndex, batchStartIndex + 100)) {
        const load = registry[key];
        if (load)
          URL.revokeObjectURL(load.b);
      }
      batch++;
      schedule(cleanup);
    }
  }
  function urlJsString(url) {
    return `'${url.replace(/'/g, "\\'")}'`;
  }
  let lastLoad;
  function resolveDeps(load, seen) {
    if (load.b || !seen[load.u])
      return;
    seen[load.u] = 0;
    for (const dep of load.d)
      resolveDeps(dep, seen);
    const [imports, exports] = load.a;
    const source = load.S;
    let resolvedSource = edge && lastLoad ? `import '${lastLoad}';` : "";
    let lastIndex = 0, depIndex = 0, dynamicImportEndStack = [];
    function pushStringTo(originalIndex) {
      while (dynamicImportEndStack[dynamicImportEndStack.length - 1] < originalIndex) {
        const dynamicImportEnd = dynamicImportEndStack.pop();
        resolvedSource += `${source.slice(lastIndex, dynamicImportEnd)}, ${urlJsString(load.r)}`;
        lastIndex = dynamicImportEnd;
      }
      resolvedSource += source.slice(lastIndex, originalIndex);
      lastIndex = originalIndex;
    }
    for (const { s: start, ss: statementStart, se: statementEnd, d: dynamicImportIndex } of imports) {
      if (dynamicImportIndex === -1) {
        let depLoad = load.d[depIndex++], blobUrl = depLoad.b, cycleShell = !blobUrl;
        if (cycleShell) {
          if (!(blobUrl = depLoad.s)) {
            blobUrl = depLoad.s = createBlob(`export function u$_(m){${depLoad.a[1].map(({ s: s2, e: e2 }, i2) => {
              const q = depLoad.S[s2] === '"' || depLoad.S[s2] === "'";
              return `e$_${i2}=m${q ? `[` : "."}${depLoad.S.slice(s2, e2)}${q ? `]` : ""}`;
            }).join(",")}}${depLoad.a[1].length ? `let ${depLoad.a[1].map((_, i2) => `e$_${i2}`).join(",")};` : ""}export {${depLoad.a[1].map(({ s: s2, e: e2 }, i2) => `e$_${i2} as ${depLoad.S.slice(s2, e2)}`).join(",")}}
//# sourceURL=${depLoad.r}?cycle`);
          }
        }
        pushStringTo(start - 1);
        resolvedSource += `/*${source.slice(start - 1, statementEnd)}*/${urlJsString(blobUrl)}`;
        if (!cycleShell && depLoad.s) {
          resolvedSource += `;import*as m$_${depIndex} from'${depLoad.b}';import{u$_ as u$_${depIndex}}from'${depLoad.s}';u$_${depIndex}(m$_${depIndex})`;
          depLoad.s = void 0;
        }
        lastIndex = statementEnd;
      } else if (dynamicImportIndex === -2) {
        load.m = { url: load.r, resolve: metaResolve };
        metaHook(load.m, load.u);
        pushStringTo(start);
        resolvedSource += `importShim._r[${urlJsString(load.u)}].m`;
        lastIndex = statementEnd;
      } else {
        pushStringTo(statementStart + 6);
        resolvedSource += `Shim(`;
        dynamicImportEndStack.push(statementEnd - 1);
        lastIndex = start;
      }
    }
    if (load.s)
      resolvedSource += `
;import{u$_}from'${load.s}';try{u$_({${exports.filter((e2) => e2.ln).map(({ s: s2, e: e2, ln }) => `${source.slice(s2, e2)}:${ln}`).join(",")}})}catch(_){};
`;
    function pushSourceURL(commentPrefix, commentStart) {
      const urlStart = commentStart + commentPrefix.length;
      const commentEnd = source.indexOf("\n", urlStart);
      const urlEnd = commentEnd !== -1 ? commentEnd : source.length;
      pushStringTo(urlStart);
      resolvedSource += new URL(source.slice(urlStart, urlEnd), load.r).href;
      lastIndex = urlEnd;
    }
    let sourceURLCommentStart = source.lastIndexOf(sourceURLCommentPrefix);
    let sourceMapURLCommentStart = source.lastIndexOf(sourceMapURLCommentPrefix);
    if (sourceURLCommentStart < lastIndex)
      sourceURLCommentStart = -1;
    if (sourceMapURLCommentStart < lastIndex)
      sourceMapURLCommentStart = -1;
    if (sourceURLCommentStart !== -1 && (sourceMapURLCommentStart === -1 || sourceMapURLCommentStart > sourceURLCommentStart)) {
      pushSourceURL(sourceURLCommentPrefix, sourceURLCommentStart);
    }
    if (sourceMapURLCommentStart !== -1) {
      pushSourceURL(sourceMapURLCommentPrefix, sourceMapURLCommentStart);
      if (sourceURLCommentStart !== -1 && sourceURLCommentStart > sourceMapURLCommentStart)
        pushSourceURL(sourceURLCommentPrefix, sourceURLCommentStart);
    }
    pushStringTo(source.length);
    if (sourceURLCommentStart === -1)
      resolvedSource += sourceURLCommentPrefix + load.r;
    load.b = lastLoad = createBlob(resolvedSource);
    load.S = void 0;
  }
  const sourceURLCommentPrefix = "\n//# sourceURL=";
  const sourceMapURLCommentPrefix = "\n//# sourceMappingURL=";
  const jsContentType = /^(text|application)\/(x-)?javascript(;|$)/;
  const wasmContentType = /^(application)\/wasm(;|$)/;
  const jsonContentType = /^(text|application)\/json(;|$)/;
  const cssContentType = /^(text|application)\/css(;|$)/;
  const cssUrlRegEx = /url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g;
  let p = [];
  let c = 0;
  function pushFetchPool() {
    if (++c > 100)
      return new Promise((r2) => p.push(r2));
  }
  function popFetchPool() {
    c--;
    if (p.length)
      p.shift()();
  }
  async function doFetch(url, fetchOpts, parent) {
    if (enforceIntegrity && !fetchOpts.integrity)
      throw Error(`No integrity for ${url}${fromParent(parent)}.`);
    const poolQueue = pushFetchPool();
    if (poolQueue)
      await poolQueue;
    try {
      var res = await fetchHook(url, fetchOpts);
    } catch (e2) {
      e2.message = `Unable to fetch ${url}${fromParent(parent)} - see network log for details.
` + e2.message;
      throw e2;
    } finally {
      popFetchPool();
    }
    if (!res.ok) {
      const error = new TypeError(`${res.status} ${res.statusText} ${res.url}${fromParent(parent)}`);
      error.response = res;
      throw error;
    }
    return res;
  }
  async function fetchModule(url, fetchOpts, parent) {
    const res = await doFetch(url, fetchOpts, parent);
    const contentType = res.headers.get("content-type");
    if (jsContentType.test(contentType))
      return { r: res.url, s: await res.text(), t: "js" };
    else if (wasmContentType.test(contentType)) {
      const module = importShim._w[url] = await WebAssembly.compileStreaming(res);
      let s2 = "", i2 = 0, importObj = "";
      for (const impt of WebAssembly.Module.imports(module)) {
        s2 += `import * as impt${i2} from '${impt.module}';
`;
        importObj += `'${impt.module}':impt${i2++},`;
      }
      i2 = 0;
      s2 += `const instance = await WebAssembly.instantiate(importShim._w['${url}'], {${importObj}});
`;
      for (const expt of WebAssembly.Module.exports(module)) {
        s2 += `const expt${i2} = instance['${expt.name}'];
`;
        s2 += `export { expt${i2++} as "${expt.name}" };
`;
      }
      return { r: res.url, s: s2, t: "wasm" };
    } else if (jsonContentType.test(contentType))
      return { r: res.url, s: `export default ${await res.text()}`, t: "json" };
    else if (cssContentType.test(contentType)) {
      return { r: res.url, s: `var s=new CSSStyleSheet();s.replaceSync(${JSON.stringify((await res.text()).replace(cssUrlRegEx, (_match, quotes = "", relUrl1, relUrl2) => `url(${quotes}${resolveUrl(relUrl1 || relUrl2, url)}${quotes})`))});export default s;`, t: "css" };
    } else
      throw Error(`Unsupported Content-Type "${contentType}" loading ${url}${fromParent(parent)}. Modules must be served with a valid MIME type like application/javascript.`);
  }
  function getOrCreateLoad(url, fetchOpts, parent, source) {
    let load = registry[url];
    if (load && !source)
      return load;
    load = {
      // url
      u: url,
      // response url
      r: source ? url : void 0,
      // fetchPromise
      f: void 0,
      // source
      S: void 0,
      // linkPromise
      L: void 0,
      // analysis
      a: void 0,
      // deps
      d: void 0,
      // blobUrl
      b: void 0,
      // shellUrl
      s: void 0,
      // needsShim
      n: false,
      // type
      t: null,
      // meta
      m: null
    };
    if (registry[url]) {
      let i2 = 0;
      while (registry[load.u + ++i2])
        ;
      load.u += i2;
    }
    registry[load.u] = load;
    load.f = (async () => {
      if (!source) {
        let t2;
        ({ r: load.r, s: source, t: t2 } = await (fetchCache[url] || fetchModule(url, fetchOpts, parent)));
        if (t2 && !shimMode) {
          if (t2 === "css" && !cssModulesEnabled || t2 === "json" && !jsonModulesEnabled)
            throw Error(`${t2}-modules require <script type="esms-options">{ "polyfillEnable": ["${t2}-modules"] }<${""}/script>`);
          if (t2 === "css" && !supportsCssAssertions || t2 === "json" && !supportsJsonAssertions)
            load.n = true;
        }
      }
      try {
        load.a = parse(source, load.u);
      } catch (e2) {
        throwError(e2);
        load.a = [[], [], false];
      }
      load.S = source;
      return load;
    })();
    load.L = load.f.then(async () => {
      let childFetchOpts = fetchOpts;
      load.d = (await Promise.all(load.a[0].map(async ({ n: n2, d }) => {
        if (d >= 0 && !supportsDynamicImport || d === -2 && !supportsImportMeta)
          load.n = true;
        if (d !== -1 || !n2)
          return;
        const { r: r2, b: b2 } = await resolve(n2, load.r || load.u);
        if (b2 && (!supportsImportMaps || importMapSrcOrLazy))
          load.n = true;
        if (d !== -1)
          return;
        if (skip && skip(r2))
          return { b: r2 };
        if (childFetchOpts.integrity)
          childFetchOpts = Object.assign({}, childFetchOpts, { integrity: void 0 });
        return getOrCreateLoad(r2, childFetchOpts, load.r).f;
      }))).filter((l2) => l2);
    });
    return load;
  }
  function processScriptsAndPreloads(mapsOnly = false) {
    if (!mapsOnly)
      for (const link of document.querySelectorAll(shimMode ? "link[rel=modulepreload-shim]" : "link[rel=modulepreload]"))
        processPreload(link);
    for (const script of document.querySelectorAll(shimMode ? "script[type=importmap-shim]" : "script[type=importmap]"))
      processImportMap(script);
    if (!mapsOnly)
      for (const script of document.querySelectorAll(shimMode ? "script[type=module-shim]" : "script[type=module]"))
        processScript(script);
  }
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerPolicy)
      fetchOpts.referrerPolicy = script.referrerPolicy;
    if (script.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  let lastStaticLoadPromise = Promise.resolve();
  let domContentLoadedCnt = 1;
  function domContentLoadedCheck() {
    if (--domContentLoadedCnt === 0 && !noLoadEventRetriggers && (shimMode || !baselinePassthrough)) {
      document.dispatchEvent(new Event("DOMContentLoaded"));
    }
  }
  if (hasDocument) {
    document.addEventListener("DOMContentLoaded", async () => {
      await initPromise;
      domContentLoadedCheck();
    });
  }
  let readyStateCompleteCnt = 1;
  function readyStateCompleteCheck() {
    if (--readyStateCompleteCnt === 0 && !noLoadEventRetriggers && (shimMode || !baselinePassthrough)) {
      document.dispatchEvent(new Event("readystatechange"));
    }
  }
  const hasNext = (script) => script.nextSibling || script.parentNode && hasNext(script.parentNode);
  const epCheck = (script, ready) => script.ep || !ready && (!script.src && !script.innerHTML || !hasNext(script)) || script.getAttribute("noshim") !== null || !(script.ep = true);
  function processImportMap(script, ready = readyStateCompleteCnt > 0) {
    if (epCheck(script, ready))
      return;
    if (script.src) {
      if (!shimMode)
        return;
      setImportMapSrcOrLazy();
    }
    if (acceptingImportMaps) {
      importMapPromise = importMapPromise.then(async () => {
        importMap = resolveAndComposeImportMap(script.src ? await (await doFetch(script.src, getFetchOpts(script))).json() : JSON.parse(script.innerHTML), script.src || baseUrl, importMap);
      }).catch((e2) => {
        console.log(e2);
        if (e2 instanceof SyntaxError)
          e2 = new Error(`Unable to parse import map ${e2.message} in: ${script.src || script.innerHTML}`);
        throwError(e2);
      });
      if (!shimMode)
        acceptingImportMaps = false;
    }
  }
  function processScript(script, ready = readyStateCompleteCnt > 0) {
    if (epCheck(script, ready))
      return;
    const isBlockingReadyScript = script.getAttribute("async") === null && readyStateCompleteCnt > 0;
    const isDomContentLoadedScript = domContentLoadedCnt > 0;
    if (isBlockingReadyScript)
      readyStateCompleteCnt++;
    if (isDomContentLoadedScript)
      domContentLoadedCnt++;
    const loadPromise = topLevelLoad(script.src || baseUrl, getFetchOpts(script), !script.src && script.innerHTML, !shimMode, isBlockingReadyScript && lastStaticLoadPromise).then(() => {
      if (shimMode) {
        script.dispatchEvent(new Event("load"));
      }
    }).catch(throwError);
    if (isBlockingReadyScript)
      lastStaticLoadPromise = loadPromise.then(readyStateCompleteCheck);
    if (isDomContentLoadedScript)
      loadPromise.then(domContentLoadedCheck);
  }
  const fetchCache = {};
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    if (fetchCache[link.href])
      return;
    fetchCache[link.href] = fetchModule(link.href, getFetchOpts(link));
  }
})();
/*! Bundled license information:

zone.js/fesm2015/zone.js:
  (**
   * @license Angular v<unknown>
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=polyfills.js.map
