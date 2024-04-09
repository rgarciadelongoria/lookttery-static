(function (exports, es_array_unscopables_flat_js, es_regexp_flags_js, es_string_replace_js, esnext_promise_allSettled_js, esnext_string_matchAll_js, web_domCollections_iterator_js, signals) {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */

    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };
      return extendStatics(d, b);
    };
    function __extends(d, b) {
      if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function () {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    function isFunction(value) {
      return typeof value === 'function';
    }

    function createErrorClass(createImpl) {
      var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
      };
      var ctorFunc = createImpl(_super);
      ctorFunc.prototype = Object.create(Error.prototype);
      ctorFunc.prototype.constructor = ctorFunc;
      return ctorFunc;
    }

    var UnsubscriptionError = createErrorClass(function (_super) {
      return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
          return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
      };
    });

    function arrRemove(arr, item) {
      if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
      }
    }

    var Subscription = function () {
      function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
      }
      Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
          this.closed = true;
          var _parentage = this._parentage;
          if (_parentage) {
            this._parentage = null;
            if (Array.isArray(_parentage)) {
              try {
                for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                  var parent_1 = _parentage_1_1.value;
                  parent_1.remove(this);
                }
              } catch (e_1_1) {
                e_1 = {
                  error: e_1_1
                };
              } finally {
                try {
                  if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                } finally {
                  if (e_1) throw e_1.error;
                }
              }
            } else {
              _parentage.remove(this);
            }
          }
          var initialFinalizer = this.initialTeardown;
          if (isFunction(initialFinalizer)) {
            try {
              initialFinalizer();
            } catch (e) {
              errors = e instanceof UnsubscriptionError ? e.errors : [e];
            }
          }
          var _finalizers = this._finalizers;
          if (_finalizers) {
            this._finalizers = null;
            try {
              for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                var finalizer = _finalizers_1_1.value;
                try {
                  execFinalizer(finalizer);
                } catch (err) {
                  errors = errors !== null && errors !== void 0 ? errors : [];
                  if (err instanceof UnsubscriptionError) {
                    errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                  } else {
                    errors.push(err);
                  }
                }
              }
            } catch (e_2_1) {
              e_2 = {
                error: e_2_1
              };
            } finally {
              try {
                if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
              } finally {
                if (e_2) throw e_2.error;
              }
            }
          }
          if (errors) {
            throw new UnsubscriptionError(errors);
          }
        }
      };
      Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
          if (this.closed) {
            execFinalizer(teardown);
          } else {
            if (teardown instanceof Subscription) {
              if (teardown.closed || teardown._hasParent(this)) {
                return;
              }
              teardown._addParent(this);
            }
            (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
          }
        }
      };
      Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
      };
      Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
      };
      Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
          this._parentage = null;
        } else if (Array.isArray(_parentage)) {
          arrRemove(_parentage, parent);
        }
      };
      Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
          teardown._removeParent(this);
        }
      };
      Subscription.EMPTY = function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
      }();
      return Subscription;
    }();
    var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
    function isSubscription(value) {
      return value instanceof Subscription || value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
    }
    function execFinalizer(finalizer) {
      if (isFunction(finalizer)) {
        finalizer();
      } else {
        finalizer.unsubscribe();
      }
    }

    var config = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: undefined,
      useDeprecatedSynchronousErrorHandling: false,
      useDeprecatedNextContext: false
    };

    var timeoutProvider = {
      setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
      },
      clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
      },
      delegate: undefined
    };

    function reportUnhandledError(err) {
      timeoutProvider.setTimeout(function () {
        {
          throw err;
        }
      });
    }

    function noop() {}

    function errorContext(cb) {
      {
        cb();
      }
    }

    var Subscriber = function (_super) {
      __extends(Subscriber, _super);
      function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
          _this.destination = destination;
          if (isSubscription(destination)) {
            destination.add(_this);
          }
        } else {
          _this.destination = EMPTY_OBSERVER;
        }
        return _this;
      }
      Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
      };
      Subscriber.prototype.next = function (value) {
        if (this.isStopped) ; else {
          this._next(value);
        }
      };
      Subscriber.prototype.error = function (err) {
        if (this.isStopped) ; else {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber.prototype.complete = function () {
        if (this.isStopped) ; else {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
          this.destination = null;
        }
      };
      Subscriber.prototype._next = function (value) {
        this.destination.next(value);
      };
      Subscriber.prototype._error = function (err) {
        try {
          this.destination.error(err);
        } finally {
          this.unsubscribe();
        }
      };
      Subscriber.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      };
      return Subscriber;
    }(Subscription);
    var _bind = Function.prototype.bind;
    function bind(fn, thisArg) {
      return _bind.call(fn, thisArg);
    }
    var ConsumerObserver = function () {
      function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
      }
      ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
          try {
            partialObserver.next(value);
          } catch (error) {
            handleUnhandledError(error);
          }
        }
      };
      ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
          try {
            partialObserver.error(err);
          } catch (error) {
            handleUnhandledError(error);
          }
        } else {
          handleUnhandledError(err);
        }
      };
      ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
          try {
            partialObserver.complete();
          } catch (error) {
            handleUnhandledError(error);
          }
        }
      };
      return ConsumerObserver;
    }();
    var SafeSubscriber = function (_super) {
      __extends(SafeSubscriber, _super);
      function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
          partialObserver = {
            next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
            error: error !== null && error !== void 0 ? error : undefined,
            complete: complete !== null && complete !== void 0 ? complete : undefined
          };
        } else {
          var context_1;
          if (_this && config.useDeprecatedNextContext) {
            context_1 = Object.create(observerOrNext);
            context_1.unsubscribe = function () {
              return _this.unsubscribe();
            };
            partialObserver = {
              next: observerOrNext.next && bind(observerOrNext.next, context_1),
              error: observerOrNext.error && bind(observerOrNext.error, context_1),
              complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
            };
          } else {
            partialObserver = observerOrNext;
          }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
      }
      return SafeSubscriber;
    }(Subscriber);
    function handleUnhandledError(error) {
      {
        reportUnhandledError(error);
      }
    }
    function defaultErrorHandler(err) {
      throw err;
    }
    var EMPTY_OBSERVER = {
      closed: true,
      next: noop,
      error: defaultErrorHandler,
      complete: noop
    };

    var observable = function () {
      return typeof Symbol === 'function' && Symbol.observable || '@@observable';
    }();

    function identity(x) {
      return x;
    }

    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity;
      }
      if (fns.length === 1) {
        return fns[0];
      }
      return function piped(input) {
        return fns.reduce(function (prev, fn) {
          return fn(prev);
        }, input);
      };
    }

    var Observable = function () {
      function Observable(subscribe) {
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };
      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
          var _a = _this,
            operator = _a.operator,
            source = _a.source;
          subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
      };
      Observable.prototype._trySubscribe = function (sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          sink.error(err);
        }
      };
      Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var subscriber = new SafeSubscriber({
            next: function (value) {
              try {
                next(value);
              } catch (err) {
                reject(err);
                subscriber.unsubscribe();
              }
            },
            error: reject,
            complete: resolve
          });
          _this.subscribe(subscriber);
        });
      };
      Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
      };
      Observable.prototype[observable] = function () {
        return this;
      };
      Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
      };
      Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var value;
          _this.subscribe(function (x) {
            return value = x;
          }, function (err) {
            return reject(err);
          }, function () {
            return resolve(value);
          });
        });
      };
      Observable.create = function (subscribe) {
        return new Observable(subscribe);
      };
      return Observable;
    }();
    function getPromiseCtor(promiseCtor) {
      var _a;
      return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
    }
    function isObserver(value) {
      return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
    }
    function isSubscriber(value) {
      return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
    }

    function hasLift(source) {
      return isFunction(source === null || source === void 0 ? void 0 : source.lift);
    }
    function operate(init) {
      return function (source) {
        if (hasLift(source)) {
          return source.lift(function (liftedSource) {
            try {
              return init(liftedSource, this);
            } catch (err) {
              this.error(err);
            }
          });
        }
        throw new TypeError('Unable to lift unknown Observable type');
      };
    }

    function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
      return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
    }
    var OperatorSubscriber = function (_super) {
      __extends(OperatorSubscriber, _super);
      function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext ? function (value) {
          try {
            onNext(value);
          } catch (err) {
            destination.error(err);
          }
        } : _super.prototype._next;
        _this._error = onError ? function (err) {
          try {
            onError(err);
          } catch (err) {
            destination.error(err);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._error;
        _this._complete = onComplete ? function () {
          try {
            onComplete();
          } catch (err) {
            destination.error(err);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._complete;
        return _this;
      }
      OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var closed_1 = this.closed;
          _super.prototype.unsubscribe.call(this);
          !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
      };
      return OperatorSubscriber;
    }(Subscriber);

    var ObjectUnsubscribedError = createErrorClass(function (_super) {
      return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
      };
    });

    var Subject = function (_super) {
      __extends(Subject, _super);
      function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
      }
      Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
      };
      Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        }
      };
      Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
          var e_1, _a;
          _this._throwIfClosed();
          if (!_this.isStopped) {
            if (!_this.currentObservers) {
              _this.currentObservers = Array.from(_this.observers);
            }
            try {
              for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var observer = _c.value;
                observer.next(value);
              }
            } catch (e_1_1) {
              e_1 = {
                error: e_1_1
              };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
          }
        });
      };
      Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.hasError = _this.isStopped = true;
            _this.thrownError = err;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().error(err);
            }
          }
        });
      };
      Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.isStopped = true;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().complete();
            }
          }
        });
      };
      Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
      };
      Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
          var _a;
          return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
      });
      Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
      };
      Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
      };
      Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this,
          hasError = _a.hasError,
          isStopped = _a.isStopped,
          observers = _a.observers;
        if (hasError || isStopped) {
          return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
          _this.currentObservers = null;
          arrRemove(observers, subscriber);
        });
      };
      Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this,
          hasError = _a.hasError,
          thrownError = _a.thrownError,
          isStopped = _a.isStopped;
        if (hasError) {
          subscriber.error(thrownError);
        } else if (isStopped) {
          subscriber.complete();
        }
      };
      Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
      };
      Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
      };
      return Subject;
    }(Observable);
    var AnonymousSubject = function (_super) {
      __extends(AnonymousSubject, _super);
      function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
      }
      AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
      };
      AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
      };
      AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
      };
      return AnonymousSubject;
    }(Subject);

    var BehaviorSubject = function (_super) {
      __extends(BehaviorSubject, _super);
      function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
      }
      Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
          return this.getValue();
        },
        enumerable: false,
        configurable: true
      });
      BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
      };
      BehaviorSubject.prototype.getValue = function () {
        var _a = this,
          hasError = _a.hasError,
          thrownError = _a.thrownError,
          _value = _a._value;
        if (hasError) {
          throw thrownError;
        }
        this._throwIfClosed();
        return _value;
      };
      BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
      };
      return BehaviorSubject;
    }(Subject);

    var EMPTY = new Observable(function (subscriber) {
      return subscriber.complete();
    });

    function isScheduler(value) {
      return value && isFunction(value.schedule);
    }

    function last(arr) {
      return arr[arr.length - 1];
    }
    function popScheduler(args) {
      return isScheduler(last(args)) ? args.pop() : undefined;
    }
    function popNumber(args, defaultValue) {
      return typeof last(args) === 'number' ? args.pop() : defaultValue;
    }

    var isArrayLike = function (x) {
      return x && typeof x.length === 'number' && typeof x !== 'function';
    };

    function isPromise(value) {
      return isFunction(value === null || value === void 0 ? void 0 : value.then);
    }

    function isInteropObservable(input) {
      return isFunction(input[observable]);
    }

    function isAsyncIterable(obj) {
      return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
    }

    function createInvalidObservableTypeError(input) {
      return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
    }

    function getSymbolIterator() {
      if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
      }
      return Symbol.iterator;
    }
    var iterator = getSymbolIterator();

    function isIterable(input) {
      return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
    }

    function readableStreamLikeToAsyncGenerator(readableStream) {
      return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              reader = readableStream.getReader();
              _b.label = 1;
            case 1:
              _b.trys.push([1,, 9, 10]);
              _b.label = 2;
            case 2:
              return [4, __await(reader.read())];
            case 3:
              _a = _b.sent(), value = _a.value, done = _a.done;
              if (!done) return [3, 5];
              return [4, __await(void 0)];
            case 4:
              return [2, _b.sent()];
            case 5:
              return [4, __await(value)];
            case 6:
              return [4, _b.sent()];
            case 7:
              _b.sent();
              return [3, 2];
            case 8:
              return [3, 10];
            case 9:
              reader.releaseLock();
              return [7];
            case 10:
              return [2];
          }
        });
      });
    }
    function isReadableStreamLike(obj) {
      return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
    }

    function innerFrom(input) {
      if (input instanceof Observable) {
        return input;
      }
      if (input != null) {
        if (isInteropObservable(input)) {
          return fromInteropObservable(input);
        }
        if (isArrayLike(input)) {
          return fromArrayLike(input);
        }
        if (isPromise(input)) {
          return fromPromise(input);
        }
        if (isAsyncIterable(input)) {
          return fromAsyncIterable(input);
        }
        if (isIterable(input)) {
          return fromIterable(input);
        }
        if (isReadableStreamLike(input)) {
          return fromReadableStreamLike(input);
        }
      }
      throw createInvalidObservableTypeError(input);
    }
    function fromInteropObservable(obj) {
      return new Observable(function (subscriber) {
        var obs = obj[observable]();
        if (isFunction(obs.subscribe)) {
          return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
      });
    }
    function fromArrayLike(array) {
      return new Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }
        subscriber.complete();
      });
    }
    function fromPromise(promise) {
      return new Observable(function (subscriber) {
        promise.then(function (value) {
          if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
          }
        }, function (err) {
          return subscriber.error(err);
        }).then(null, reportUnhandledError);
      });
    }
    function fromIterable(iterable) {
      return new Observable(function (subscriber) {
        var e_1, _a;
        try {
          for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
            var value = iterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return;
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        subscriber.complete();
      });
    }
    function fromAsyncIterable(asyncIterable) {
      return new Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) {
          return subscriber.error(err);
        });
      });
    }
    function fromReadableStreamLike(readableStream) {
      return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
    }
    function process(asyncIterable, subscriber) {
      var asyncIterable_1, asyncIterable_1_1;
      var e_2, _a;
      return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 5, 6, 11]);
              asyncIterable_1 = __asyncValues(asyncIterable);
              _b.label = 1;
            case 1:
              return [4, asyncIterable_1.next()];
            case 2:
              if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
              value = asyncIterable_1_1.value;
              subscriber.next(value);
              if (subscriber.closed) {
                return [2];
              }
              _b.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              e_2_1 = _b.sent();
              e_2 = {
                error: e_2_1
              };
              return [3, 11];
            case 6:
              _b.trys.push([6,, 9, 10]);
              if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
              return [4, _a.call(asyncIterable_1)];
            case 7:
              _b.sent();
              _b.label = 8;
            case 8:
              return [3, 10];
            case 9:
              if (e_2) throw e_2.error;
              return [7];
            case 10:
              return [7];
            case 11:
              subscriber.complete();
              return [2];
          }
        });
      });
    }

    function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
      if (delay === void 0) {
        delay = 0;
      }
      if (repeat === void 0) {
        repeat = false;
      }
      var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
          parentSubscription.add(this.schedule(null, delay));
        } else {
          this.unsubscribe();
        }
      }, delay);
      parentSubscription.add(scheduleSubscription);
      if (!repeat) {
        return scheduleSubscription;
      }
    }

    function observeOn(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return operate(function (source, subscriber) {
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
          return executeSchedule(subscriber, scheduler, function () {
            return subscriber.next(value);
          }, delay);
        }, function () {
          return executeSchedule(subscriber, scheduler, function () {
            return subscriber.complete();
          }, delay);
        }, function (err) {
          return executeSchedule(subscriber, scheduler, function () {
            return subscriber.error(err);
          }, delay);
        }));
      });
    }

    function subscribeOn(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return operate(function (source, subscriber) {
        subscriber.add(scheduler.schedule(function () {
          return source.subscribe(subscriber);
        }, delay));
      });
    }

    function scheduleObservable(input, scheduler) {
      return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
    }

    function schedulePromise(input, scheduler) {
      return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
    }

    function scheduleArray(input, scheduler) {
      return new Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
          if (i === input.length) {
            subscriber.complete();
          } else {
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
              this.schedule();
            }
          }
        });
      });
    }

    function scheduleIterable(input, scheduler) {
      return new Observable(function (subscriber) {
        var iterator$1;
        executeSchedule(subscriber, scheduler, function () {
          iterator$1 = input[iterator]();
          executeSchedule(subscriber, scheduler, function () {
            var _a;
            var value;
            var done;
            try {
              _a = iterator$1.next(), value = _a.value, done = _a.done;
            } catch (err) {
              subscriber.error(err);
              return;
            }
            if (done) {
              subscriber.complete();
            } else {
              subscriber.next(value);
            }
          }, 0, true);
        });
        return function () {
          return isFunction(iterator$1 === null || iterator$1 === void 0 ? void 0 : iterator$1.return) && iterator$1.return();
        };
      });
    }

    function scheduleAsyncIterable(input, scheduler) {
      if (!input) {
        throw new Error('Iterable cannot be null');
      }
      return new Observable(function (subscriber) {
        executeSchedule(subscriber, scheduler, function () {
          var iterator = input[Symbol.asyncIterator]();
          executeSchedule(subscriber, scheduler, function () {
            iterator.next().then(function (result) {
              if (result.done) {
                subscriber.complete();
              } else {
                subscriber.next(result.value);
              }
            });
          }, 0, true);
        });
      });
    }

    function scheduleReadableStreamLike(input, scheduler) {
      return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
    }

    function scheduled(input, scheduler) {
      if (input != null) {
        if (isInteropObservable(input)) {
          return scheduleObservable(input, scheduler);
        }
        if (isArrayLike(input)) {
          return scheduleArray(input, scheduler);
        }
        if (isPromise(input)) {
          return schedulePromise(input, scheduler);
        }
        if (isAsyncIterable(input)) {
          return scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable(input)) {
          return scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike(input)) {
          return scheduleReadableStreamLike(input, scheduler);
        }
      }
      throw createInvalidObservableTypeError(input);
    }

    function from(input, scheduler) {
      return scheduler ? scheduled(input, scheduler) : innerFrom(input);
    }

    function of$1() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = popScheduler(args);
      return from(args, scheduler);
    }

    var EmptyError = createErrorClass(function (_super) {
      return function EmptyErrorImpl() {
        _super(this);
        this.name = 'EmptyError';
        this.message = 'no elements in sequence';
      };
    });

    function map(project, thisArg) {
      return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
          subscriber.next(project.call(thisArg, value, index++));
        }));
      });
    }

    function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
      var buffer = [];
      var active = 0;
      var index = 0;
      var isComplete = false;
      var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
          subscriber.complete();
        }
      };
      var outerNext = function (value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
      };
      var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function (innerValue) {
          onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
          if (expand) {
            outerNext(innerValue);
          } else {
            subscriber.next(innerValue);
          }
        }, function () {
          innerComplete = true;
        }, undefined, function () {
          if (innerComplete) {
            try {
              active--;
              var _loop_1 = function () {
                var bufferedValue = buffer.shift();
                if (innerSubScheduler) {
                  executeSchedule(subscriber, innerSubScheduler, function () {
                    return doInnerSub(bufferedValue);
                  });
                } else {
                  doInnerSub(bufferedValue);
                }
              };
              while (buffer.length && active < concurrent) {
                _loop_1();
              }
              checkComplete();
            } catch (err) {
              subscriber.error(err);
            }
          }
        }));
      };
      source.subscribe(createOperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
      }));
      return function () {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
      };
    }

    function mergeMap(project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      if (isFunction(resultSelector)) {
        return mergeMap(function (a, i) {
          return map(function (b, ii) {
            return resultSelector(a, b, i, ii);
          })(innerFrom(project(a, i)));
        }, concurrent);
      } else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
      }
      return operate(function (source, subscriber) {
        return mergeInternals(source, subscriber, project, concurrent);
      });
    }

    function mergeAll(concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      return mergeMap(identity, concurrent);
    }

    function merge() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = popScheduler(args);
      var concurrent = popNumber(args, Infinity);
      var sources = args;
      return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
    }

    function filter(predicate, thisArg) {
      return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
          return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
      });
    }

    function defaultIfEmpty(defaultValue) {
      return operate(function (source, subscriber) {
        var hasValue = false;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
          hasValue = true;
          subscriber.next(value);
        }, function () {
          if (!hasValue) {
            subscriber.next(defaultValue);
          }
          subscriber.complete();
        }));
      });
    }

    function take(count) {
      return count <= 0 ? function () {
        return EMPTY;
      } : operate(function (source, subscriber) {
        var seen = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
          if (++seen <= count) {
            subscriber.next(value);
            if (count <= seen) {
              subscriber.complete();
            }
          }
        }));
      });
    }

    function distinctUntilChanged(comparator, keySelector) {
      if (keySelector === void 0) {
        keySelector = identity;
      }
      comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
      return operate(function (source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
          var currentKey = keySelector(value);
          if (first || !comparator(previousKey, currentKey)) {
            first = false;
            previousKey = currentKey;
            subscriber.next(value);
          }
        }));
      });
    }
    function defaultCompare(a, b) {
      return a === b;
    }

    function throwIfEmpty(errorFactory) {
      if (errorFactory === void 0) {
        errorFactory = defaultErrorFactory;
      }
      return operate(function (source, subscriber) {
        var hasValue = false;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
          hasValue = true;
          subscriber.next(value);
        }, function () {
          return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
        }));
      });
    }
    function defaultErrorFactory() {
      return new EmptyError();
    }

    function first(predicate, defaultValue) {
      var hasDefaultValue = arguments.length >= 2;
      return function (source) {
        return source.pipe(predicate ? filter(function (v, i) {
          return predicate(v, i, source);
        }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () {
          return new EmptyError();
        }));
      };
    }

    function share(options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.connector,
        connector = _a === void 0 ? function () {
          return new Subject();
        } : _a,
        _b = options.resetOnError,
        resetOnError = _b === void 0 ? true : _b,
        _c = options.resetOnComplete,
        resetOnComplete = _c === void 0 ? true : _c,
        _d = options.resetOnRefCountZero,
        resetOnRefCountZero = _d === void 0 ? true : _d;
      return function (wrapperSource) {
        var connection;
        var resetConnection;
        var subject;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function () {
          resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
          resetConnection = undefined;
        };
        var reset = function () {
          cancelReset();
          connection = subject = undefined;
          hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function () {
          var conn = connection;
          reset();
          conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return operate(function (source, subscriber) {
          refCount++;
          if (!hasErrored && !hasCompleted) {
            cancelReset();
          }
          var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
          subscriber.add(function () {
            refCount--;
            if (refCount === 0 && !hasErrored && !hasCompleted) {
              resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
            }
          });
          dest.subscribe(subscriber);
          if (!connection && refCount > 0) {
            connection = new SafeSubscriber({
              next: function (value) {
                return dest.next(value);
              },
              error: function (err) {
                hasErrored = true;
                cancelReset();
                resetConnection = handleReset(reset, resetOnError, err);
                dest.error(err);
              },
              complete: function () {
                hasCompleted = true;
                cancelReset();
                resetConnection = handleReset(reset, resetOnComplete);
                dest.complete();
              }
            });
            innerFrom(source).subscribe(connection);
          }
        })(wrapperSource);
      };
    }
    function handleReset(reset, on) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      if (on === true) {
        reset();
        return;
      }
      if (on === false) {
        return;
      }
      var onSubscriber = new SafeSubscriber({
        next: function () {
          onSubscriber.unsubscribe();
          reset();
        }
      });
      return innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
    }

    function switchMap(project, resultSelector) {
      return operate(function (source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function () {
          return isComplete && !innerSubscriber && subscriber.complete();
        };
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
          innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
          var innerIndex = 0;
          var outerIndex = index++;
          innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function (innerValue) {
            return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
          }, function () {
            innerSubscriber = null;
            checkComplete();
          }));
        }, function () {
          isComplete = true;
          checkComplete();
        }));
      });
    }

    var qg = Object.defineProperty,
      Gg = Object.defineProperties;
    var Wg = Object.getOwnPropertyDescriptors;
    var rl = Object.getOwnPropertySymbols;
    var zg = Object.prototype.hasOwnProperty,
      Qg = Object.prototype.propertyIsEnumerable;
    var sl = (e, t, n) => t in e ? qg(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
      }) : e[t] = n,
      ne = (e, t) => {
        for (var n in t || (t = {})) zg.call(t, n) && sl(e, n, t[n]);
        if (rl) for (var n of rl(t)) Qg.call(t, n) && sl(e, n, t[n]);
        return e;
      },
      Ft = (e, t) => Gg(e, Wg(t));
    function k(e) {
      for (let t in e) if (e[t] === k) return t;
      throw Error("Could not find renamed property on target object.");
    }
    function zo(e, t) {
      for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
    }
    function ae(e) {
      if (typeof e == "string") return e;
      if (Array.isArray(e)) return "[" + e.map(ae).join(", ") + "]";
      if (e == null) return "" + e;
      if (e.overriddenName) return "".concat(e.overriddenName);
      if (e.name) return "".concat(e.name);
      let t = e.toString();
      if (t == null) return "" + t;
      let n = t.indexOf("\n");
      return n === -1 ? t : t.substring(0, n);
    }
    function ii(e, t) {
      return e == null || e === "" ? t === null ? "" : t : t == null || t === "" ? e : e + " " + t;
    }
    function yN(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      if (!e || t < 1 || e.length <= t) return e;
      if (t == 1) return e.substring(0, 1) + "...";
      let n = Math.round(t / 2);
      return e.substring(0, n) + "..." + e.substring(e.length - n);
    }
    var mm = k({
      __forward_ref__: k
    });
    function Wa(e) {
      return e.__forward_ref__ = Wa, e.toString = function () {
        return ae(this());
      }, e;
    }
    function A(e) {
      return Yr(e) ? e() : e;
    }
    function Yr(e) {
      return typeof e == "function" && e.hasOwnProperty(mm) && e.__forward_ref__ === Wa;
    }
    function Nu(e) {
      return e && !!e.ɵproviders;
    }
    var bu = "https://g.co/ng/security#xss",
      w = class extends Error {
        constructor(t, n) {
          super(vm(t, n)), this.code = t;
        }
      };
    function vm(e, t) {
      return "".concat("NG0".concat(Math.abs(e)), t ? ": " + t : "");
    }
    var Jr = k({
        ɵcmp: k
      }),
      za = k({
        ɵdir: k
      }),
      Qa = k({
        ɵpipe: k
      }),
      xu = k({
        ɵmod: k
      }),
      Ke = k({
        ɵfac: k
      }),
      Hn = k({
        __NG_ELEMENT_ID__: k
      }),
      al = k({
        __NG_ENV_ID__: k
      });
    function M(e) {
      return typeof e == "string" ? e : e == null ? "" : String(e);
    }
    function Te(e) {
      return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : M(e);
    }
    function ym(e, t) {
      let n = t ? ". Dependency path: ".concat(t.join(" > "), " > ").concat(e) : "";
      throw new w(-200, "Circular dependency in DI detected for ".concat(e).concat(n));
    }
    function Za(e, t) {
      throw new w(-201, !1);
    }
    function Im(e, t, n) {
      e != t && re(n, e, t, "==");
    }
    function hr(e, t) {
      e == null && re(t, e, null, "!=");
    }
    function re(e, t, n, o) {
      throw new Error("ASSERTION ERROR: ".concat(e) + (o == null ? "" : " [Expected=> ".concat(n, " ").concat(o, " ").concat(t, " <=Actual]")));
    }
    function U(e) {
      return {
        token: e.token,
        providedIn: e.providedIn || null,
        factory: e.factory,
        value: void 0
      };
    }
    var IN = U;
    function Ya(e) {
      return {
        providers: e.providers || [],
        imports: e.imports || []
      };
    }
    function Xr(e) {
      return cl(e, mr) || cl(e, Su);
    }
    function DN(e) {
      return Xr(e) !== null;
    }
    function cl(e, t) {
      return e.hasOwnProperty(t) ? e[t] : null;
    }
    function Dm(e) {
      let t = e && (e[mr] || e[Su]);
      return t || null;
    }
    function gr(e) {
      return e && (e.hasOwnProperty(ai) || e.hasOwnProperty(wm)) ? e[ai] : null;
    }
    var mr = k({
        ɵprov: k
      }),
      ai = k({
        ɵinj: k
      }),
      Su = k({
        ngInjectableDef: k
      }),
      wm = k({
        ngInjectorDef: k
      }),
      x = function (e) {
        return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e;
      }(x || {}),
      ci;
    function Au() {
      return ci;
    }
    function ye(e) {
      let t = ci;
      return ci = e, t;
    }
    function Pu(e, t, n) {
      let o = Xr(e);
      if (o && o.providedIn == "root") return o.value === void 0 ? o.value = o.factory() : o.value;
      if (n & x.Optional) return null;
      if (t !== void 0) return t;
      Za(ae(e));
    }
    var ue = globalThis;
    var P = class {
        constructor(t, n) {
          this._desc = t, this.ngMetadataName = "InjectionToken", this.ɵprov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.ɵprov = U({
            token: this,
            providedIn: n.providedIn || "root",
            factory: n.factory
          }));
        }
        get multi() {
          return this;
        }
        toString() {
          return "InjectionToken ".concat(this._desc);
        }
      },
      ll;
    function wN(e) {
      re("setInjectorProfilerContext should never be called in production mode");
      let t = ll;
      return ll = e, t;
    }
    var Cm = e => {
        re("setInjectorProfiler should never be called in production mode");
      };
    var Mm = {},
      Xn = Mm,
      li = "__NG_DI_FLAG__",
      vr = "ngTempTokenPath",
      Tm = "ngTokenPath",
      _m = /\n/gm,
      Nm = "\u0275",
      ul = "__source",
      Qt;
    function bm() {
      return Qt;
    }
    function ct(e) {
      let t = Qt;
      return Qt = e, t;
    }
    function xm(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x.Default;
      if (Qt === void 0) throw new w(-203, !1);
      return Qt === null ? Pu(e, void 0, t) : Qt.get(e, t & x.Optional ? null : void 0, t);
    }
    function de(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x.Default;
      return (Au() || xm)(A(e), t);
    }
    function Ou(e) {
      throw new w(202, !1);
    }
    function L(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x.Default;
      return de(e, Kr(t));
    }
    function Kr(e) {
      return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
    }
    function ui(e) {
      let t = [];
      for (let n = 0; n < e.length; n++) {
        let o = A(e[n]);
        if (Array.isArray(o)) {
          if (o.length === 0) throw new w(900, !1);
          let r,
            s = x.Default;
          for (let i = 0; i < o.length; i++) {
            let a = o[i],
              c = Sm(a);
            typeof c == "number" ? c === -1 ? r = a.token : s |= c : r = a;
          }
          t.push(de(r, s));
        } else t.push(de(o));
      }
      return t;
    }
    function Co(e, t) {
      return e[li] = t, e.prototype[li] = t, e;
    }
    function Sm(e) {
      return e[li];
    }
    function Am(e, t, n, o) {
      let r = e[vr];
      throw t[ul] && r.unshift(t[ul]), e.message = Pm("\n" + e.message, r, n, o), e[Tm] = r, e[vr] = null, e;
    }
    function Pm(e, t, n) {
      let o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      e = e && e.charAt(0) === "\n" && e.charAt(1) == Nm ? e.slice(2) : e;
      let r = ae(t);
      if (Array.isArray(t)) r = t.map(ae).join(" -> ");else if (typeof t == "object") {
        let s = [];
        for (let i in t) if (t.hasOwnProperty(i)) {
          let a = t[i];
          s.push(i + ":" + (typeof a == "string" ? JSON.stringify(a) : ae(a)));
        }
        r = "{".concat(s.join(", "), "}");
      }
      return "".concat(n).concat(o ? "(" + o + ")" : "", "[").concat(r, "]: ").concat(e.replace(_m, "\n  "));
    }
    function nt(e) {
      return {
        toString: e
      }.toString();
    }
    var Kn = function (e) {
        return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e;
      }(Kn || {}),
      Ct = function (e) {
        return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e;
      }(Ct || {}),
      $e = {},
      O = [];
    function Ru(e, t, n) {
      let o = e.length;
      for (;;) {
        let r = e.indexOf(t, n);
        if (r === -1) return r;
        if (r === 0 || e.charCodeAt(r - 1) <= 32) {
          let s = t.length;
          if (r + s === o || e.charCodeAt(r + s) <= 32) return r;
        }
        n = r + 1;
      }
    }
    function di(e, t, n) {
      let o = 0;
      for (; o < n.length;) {
        let r = n[o];
        if (typeof r == "number") {
          if (r !== 0) break;
          o++;
          let s = n[o++],
            i = n[o++],
            a = n[o++];
          e.setAttribute(t, i, a, s);
        } else {
          let s = r,
            i = n[++o];
          Om(s) ? e.setProperty(t, s, i) : e.setAttribute(t, s, i), o++;
        }
      }
      return o;
    }
    function ku(e) {
      return e === 3 || e === 4 || e === 6;
    }
    function Om(e) {
      return e.charCodeAt(0) === 64;
    }
    function eo(e, t) {
      if (!(t === null || t.length === 0)) if (e === null || e.length === 0) e = t.slice();else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
          let r = t[o];
          typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? dl(e, n, r, null, t[++o]) : dl(e, n, r, null, null));
        }
      }
      return e;
    }
    function dl(e, t, n, o, r) {
      let s = 0,
        i = e.length;
      if (t === -1) i = -1;else for (; s < e.length;) {
        let a = e[s++];
        if (typeof a == "number") {
          if (a === t) {
            i = -1;
            break;
          } else if (a > t) {
            i = s - 1;
            break;
          }
        }
      }
      for (; s < e.length;) {
        let a = e[s];
        if (typeof a == "number") break;
        if (a === n) {
          if (o === null) {
            r !== null && (e[s + 1] = r);
            return;
          } else if (o === e[s + 1]) {
            e[s + 2] = r;
            return;
          }
        }
        s++, o !== null && s++, r !== null && s++;
      }
      i !== -1 && (e.splice(i, 0, t), s = i + 1), e.splice(s++, 0, n), o !== null && e.splice(s++, 0, o), r !== null && e.splice(s++, 0, r);
    }
    var Lu = "ng-template";
    function Rm(e, t, n) {
      let o = 0,
        r = !0;
      for (; o < e.length;) {
        let s = e[o++];
        if (typeof s == "string" && r) {
          let i = e[o++];
          if (n && s === "class" && Ru(i.toLowerCase(), t, 0) !== -1) return !0;
        } else if (s === 1) {
          for (; o < e.length && typeof (s = e[o++]) == "string";) if (s.toLowerCase() === t) return !0;
          return !1;
        } else typeof s == "number" && (r = !1);
      }
      return !1;
    }
    function Fu(e) {
      return e.type === 4 && e.value !== Lu;
    }
    function km(e, t, n) {
      let o = e.type === 4 && !n ? Lu : e.value;
      return t === o;
    }
    function Lm(e, t, n) {
      let o = 4,
        r = e.attrs || [],
        s = Vm(r),
        i = !1;
      for (let a = 0; a < t.length; a++) {
        let c = t[a];
        if (typeof c == "number") {
          if (!i && !be(o) && !be(c)) return !1;
          if (i && be(c)) continue;
          i = !1, o = c | o & 1;
          continue;
        }
        if (!i) if (o & 4) {
          if (o = 2 | o & 1, c !== "" && !km(e, c, n) || c === "" && t.length === 1) {
            if (be(o)) return !1;
            i = !0;
          }
        } else {
          let l = o & 8 ? c : t[++a];
          if (o & 8 && e.attrs !== null) {
            if (!Rm(e.attrs, l, n)) {
              if (be(o)) return !1;
              i = !0;
            }
            continue;
          }
          let u = o & 8 ? "class" : c,
            d = Fm(u, r, Fu(e), n);
          if (d === -1) {
            if (be(o)) return !1;
            i = !0;
            continue;
          }
          if (l !== "") {
            let f;
            d > s ? f = "" : f = r[d + 1].toLowerCase();
            let p = o & 8 ? f : null;
            if (p && Ru(p, l, 0) !== -1 || o & 2 && l !== f) {
              if (be(o)) return !1;
              i = !0;
            }
          }
        }
      }
      return be(o) || i;
    }
    function be(e) {
      return (e & 1) === 0;
    }
    function Fm(e, t, n, o) {
      if (t === null) return -1;
      let r = 0;
      if (o || !n) {
        let s = !1;
        for (; r < t.length;) {
          let i = t[r];
          if (i === e) return r;
          if (i === 3 || i === 6) s = !0;else if (i === 1 || i === 2) {
            let a = t[++r];
            for (; typeof a == "string";) a = t[++r];
            continue;
          } else {
            if (i === 4) break;
            if (i === 0) {
              r += 4;
              continue;
            }
          }
          r += s ? 1 : 2;
        }
        return -1;
      } else return Hm(t, e);
    }
    function ju(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      for (let o = 0; o < t.length; o++) if (Lm(e, t[o], n)) return !0;
      return !1;
    }
    function jm(e) {
      let t = e.attrs;
      if (t != null) {
        let n = t.indexOf(5);
        if (!(n & 1)) return t[n + 1];
      }
      return null;
    }
    function Vm(e) {
      for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (ku(n)) return t;
      }
      return e.length;
    }
    function Hm(e, t) {
      let n = e.indexOf(4);
      if (n > -1) for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number") return -1;
        if (o === t) return n;
        n++;
      }
      return -1;
    }
    function $m(e, t) {
      e: for (let n = 0; n < t.length; n++) {
        let o = t[n];
        if (e.length === o.length) {
          for (let r = 0; r < e.length; r++) if (e[r] !== o[r]) continue e;
          return !0;
        }
      }
      return !1;
    }
    function fl(e, t) {
      return e ? ":not(" + t.trim() + ")" : t;
    }
    function Bm(e) {
      let t = e[0],
        n = 1,
        o = 2,
        r = "",
        s = !1;
      for (; n < e.length;) {
        let i = e[n];
        if (typeof i == "string") {
          if (o & 2) {
            let a = e[++n];
            r += "[" + i + (a.length > 0 ? "=\"" + a + "\"" : "") + "]";
          } else o & 8 ? r += "." + i : o & 4 && (r += " " + i);
        } else r !== "" && !be(i) && (t += fl(s, r), r = ""), o = i, s = s || !be(o);
        n++;
      }
      return r !== "" && (t += fl(s, r)), t;
    }
    function Um(e) {
      return e.map(Bm).join(",");
    }
    function qm(e) {
      let t = [],
        n = [],
        o = 1,
        r = 2;
      for (; o < e.length;) {
        let s = e[o];
        if (typeof s == "string") r === 2 ? s !== "" && t.push(s, e[++o]) : r === 8 && n.push(s);else {
          if (!be(r)) break;
          r = s;
        }
        o++;
      }
      return {
        attrs: t,
        classes: n
      };
    }
    function Gm(e) {
      return nt(() => {
        var _e$signals;
        let t = Hu(e),
          n = Ft(ne({}, t), {
            decls: e.decls,
            vars: e.vars,
            template: e.template,
            consts: e.consts || null,
            ngContentSelectors: e.ngContentSelectors,
            onPush: e.changeDetection === Kn.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            dependencies: t.standalone && e.dependencies || null,
            getStandaloneInjector: null,
            signals: (_e$signals = e.signals) !== null && _e$signals !== void 0 ? _e$signals : !1,
            data: e.data || {},
            encapsulation: e.encapsulation || Ct.Emulated,
            styles: e.styles || O,
            _: null,
            schemas: e.schemas || null,
            tView: null,
            id: ""
          });
        $u(n);
        let o = e.dependencies;
        return n.directiveDefs = Ir(o, !1), n.pipeDefs = Ir(o, !0), n.id = Jm(n), n;
      });
    }
    function Wm(e) {
      return R(e) || Ie(e);
    }
    function zm(e) {
      return e !== null;
    }
    function Vu(e) {
      return nt(() => ({
        type: e.type,
        bootstrap: e.bootstrap || O,
        declarations: e.declarations || O,
        imports: e.imports || O,
        exports: e.exports || O,
        transitiveCompileScopes: null,
        schemas: e.schemas || null,
        id: e.id || null
      }));
    }
    function pl(e, t) {
      if (e == null) return $e;
      let n = {};
      for (let o in e) if (e.hasOwnProperty(o)) {
        let r = e[o],
          s = r;
        Array.isArray(r) && (s = r[1], r = r[0]), n[r] = o, t && (t[r] = s);
      }
      return n;
    }
    function Qm(e) {
      return nt(() => {
        let t = Hu(e);
        return $u(t), t;
      });
    }
    function Zm(e) {
      return {
        type: e.type,
        name: e.name,
        factory: null,
        pure: e.pure !== !1,
        standalone: e.standalone === !0,
        onDestroy: e.type.prototype.ngOnDestroy || null
      };
    }
    function R(e) {
      return e[Jr] || null;
    }
    function Ie(e) {
      return e[za] || null;
    }
    function De(e) {
      return e[Qa] || null;
    }
    function yr(e) {
      let t = R(e) || Ie(e) || De(e);
      return t !== null ? t.standalone : !1;
    }
    function Se(e, t) {
      let n = e[xu] || null;
      if (!n && t === !0) throw new Error("Type ".concat(ae(e), " does not have '\u0275mod' property."));
      return n;
    }
    function Hu(e) {
      let t = {};
      return {
        type: e.type,
        providersResolver: null,
        factory: null,
        hostBindings: e.hostBindings || null,
        hostVars: e.hostVars || 0,
        hostAttrs: e.hostAttrs || null,
        contentQueries: e.contentQueries || null,
        declaredInputs: t,
        inputTransforms: null,
        inputConfig: e.inputs || $e,
        exportAs: e.exportAs || null,
        standalone: e.standalone === !0,
        signals: e.signals === !0,
        selectors: e.selectors || O,
        viewQuery: e.viewQuery || null,
        features: e.features || null,
        setInput: null,
        findHostDirectiveDefs: null,
        hostDirectives: null,
        inputs: pl(e.inputs, t),
        outputs: pl(e.outputs),
        debugInfo: null
      };
    }
    function $u(e) {
      var _e$features;
      (_e$features = e.features) === null || _e$features === void 0 || _e$features.forEach(t => t(e));
    }
    function Ir(e, t) {
      if (!e) return null;
      let n = t ? De : Wm;
      return () => (typeof e == "function" ? e() : e).map(o => n(o)).filter(zm);
    }
    var Ym = new Map();
    function Jm(e) {
      let t = 0,
        n = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, e.consts, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery].join("|");
      for (let r of n) t = Math.imul(31, t) + r.charCodeAt(0) << 0;
      return t += 2147483648, "c" + t;
    }
    var q = 0,
      v = 1,
      D = 2,
      B = 3,
      xe = 4,
      ge = 5,
      Ae = 6,
      Xt = 7,
      $ = 8,
      he = 9,
      Kt = 10,
      T = 11,
      to = 12,
      hl = 13,
      gn = 14,
      ee = 15,
      Mo = 16,
      $t = 17,
      He = 18,
      To = 19,
      Bu = 20,
      dt = 21,
      sr = 22,
      Mt = 23,
      _ = 25,
      Ja = 1,
      no = 6,
      Be = 7,
      Dr = 8,
      en = 9,
      G = 10,
      tn = function (e) {
        return e[e.None = 0] = "None", e[e.HasTransplantedViews = 2] = "HasTransplantedViews", e[e.HasChildViewsToRefresh = 4] = "HasChildViewsToRefresh", e;
      }(tn || {});
    function fe(e) {
      return Array.isArray(e) && typeof e[Ja] == "object";
    }
    function se(e) {
      return Array.isArray(e) && e[Ja] === !0;
    }
    function Xa(e) {
      return (e.flags & 4) !== 0;
    }
    function Rt(e) {
      return e.componentOffset > -1;
    }
    function es(e) {
      return (e.flags & 1) === 1;
    }
    function Pe(e) {
      return !!e.template;
    }
    function Ka(e) {
      return (e[D] & 512) !== 0;
    }
    function Xm(e) {
      return (e.type & 16) === 16;
    }
    function Km(e) {
      return (e[D] & 32) === 32;
    }
    function fi(e) {
      return (e[D] & 256) === 256;
    }
    function Uu(e, t) {
      ev(e, t[v]);
    }
    function ev(e, t) {
      pi(e);
      let n = t.data;
      for (let o = _; o < n.length; o++) if (n[o] === e) return;
      re("This TNode does not belong to this TView.");
    }
    function pi(e) {
      hr(e, "TNode must be defined"), e && typeof e == "object" && e.hasOwnProperty("directiveStylingLast") || re("Not of type TNode, got: " + e);
    }
    function Tt(e, t) {
      let n = e.hasOwnProperty(Ke);
      return n ? e[Ke] : null;
    }
    var hi = class {
      constructor(t, n, o) {
        this.previousValue = t, this.currentValue = n, this.firstChange = o;
      }
      isFirstChange() {
        return this.firstChange;
      }
    };
    function qu() {
      return Gu;
    }
    function Gu(e) {
      return e.type.prototype.ngOnChanges && (e.setInput = nv), tv;
    }
    qu.ngInherit = !0;
    function tv() {
      let e = zu(this),
        t = e === null || e === void 0 ? void 0 : e.current;
      if (t) {
        let n = e.previous;
        if (n === $e) e.previous = t;else for (let o in t) n[o] = t[o];
        e.current = null, this.ngOnChanges(t);
      }
    }
    function nv(e, t, n, o) {
      let r = this.declaredInputs[n],
        s = zu(e) || ov(e, {
          previous: $e,
          current: null
        }),
        i = s.current || (s.current = {}),
        a = s.previous,
        c = a[r];
      i[r] = new hi(c && c.currentValue, t, a === $e), e[o] = t;
    }
    var Wu = "__ngSimpleChanges__";
    function zu(e) {
      return e[Wu] || null;
    }
    function ov(e, t) {
      return e[Wu] = t;
    }
    var gi = null,
      rv = e => {
        gi = e;
      },
      je = function (e, t, n) {
        var _gi;
        (_gi = gi) === null || _gi === void 0 || _gi(e, t, n);
      },
      Qu = "svg",
      Zu = "math";
    function V(e) {
      for (; Array.isArray(e);) e = e[q];
      return e;
    }
    function ec(e) {
      for (; Array.isArray(e);) {
        if (typeof e[Ja] == "object") return e;
        e = e[q];
      }
      return null;
    }
    function _o(e, t) {
      return V(t[e]);
    }
    function me(e, t) {
      return V(t[e.index]);
    }
    function sv(e, t) {
      let n = e === null ? -1 : e.index;
      return n !== -1 ? V(t[n]) : null;
    }
    function No(e, t) {
      return e.data[t];
    }
    function mn(e, t) {
      return e[t];
    }
    function Ee(e, t) {
      let n = t[e];
      return fe(n) ? n : n[q];
    }
    function iv(e) {
      return (e[D] & 4) === 4;
    }
    function tc(e) {
      return (e[D] & 128) === 128;
    }
    function av(e) {
      return se(e[B]);
    }
    function Ue(e, t) {
      return t == null ? null : e[t];
    }
    function Yu(e) {
      e[$t] = 0;
    }
    function cv(e) {
      e[D] & 1024 || (e[D] |= 1024, tc(e) && ts(e));
    }
    function Ju(e, t) {
      for (; e > 0;) t = t[gn], e--;
      return t;
    }
    function Xu(e) {
      var _e$Mt;
      return e[D] & 9216 || ((_e$Mt = e[Mt]) === null || _e$Mt === void 0 ? void 0 : _e$Mt.dirty);
    }
    function Ku(e) {
      Xu(e) && ts(e);
    }
    function ts(e) {
      let t = e[B];
      for (; t !== null && !(se(t) && t[D] & tn.HasChildViewsToRefresh || fe(t) && t[D] & 8192);) {
        if (se(t)) t[D] |= tn.HasChildViewsToRefresh;else if (t[D] |= 8192, !tc(t)) break;
        t = t[B];
      }
    }
    function ns(e, t) {
      if ((e[D] & 256) === 256) throw new w(911, !1);
      e[dt] === null && (e[dt] = []), e[dt].push(t);
    }
    function nc(e, t) {
      if (e[dt] === null) return;
      let n = e[dt].indexOf(t);
      n !== -1 && e[dt].splice(n, 1);
    }
    var E = {
      lFrame: ad(null),
      bindingsEnabled: !0,
      skipHydrationRootTNode: null
    };
    function lv() {
      return E.lFrame.elementDepthCount;
    }
    function uv() {
      E.lFrame.elementDepthCount++;
    }
    function dv() {
      E.lFrame.elementDepthCount--;
    }
    function ed() {
      return E.bindingsEnabled;
    }
    function vn() {
      return E.skipHydrationRootTNode !== null;
    }
    function fv(e) {
      return E.skipHydrationRootTNode === e;
    }
    function pv() {
      E.bindingsEnabled = !0;
    }
    function hv(e) {
      E.skipHydrationRootTNode = e;
    }
    function gv() {
      E.bindingsEnabled = !1;
    }
    function mv() {
      E.skipHydrationRootTNode = null;
    }
    function g() {
      return E.lFrame.lView;
    }
    function S() {
      return E.lFrame.tView;
    }
    function vv(e) {
      return E.lFrame.contextLView = e, e[$];
    }
    function yv(e) {
      return E.lFrame.contextLView = null, e;
    }
    function F() {
      let e = td();
      for (; e !== null && e.type === 64;) e = e.parent;
      return e;
    }
    function td() {
      return E.lFrame.currentTNode;
    }
    function oo() {
      let e = E.lFrame,
        t = e.currentTNode;
      return e.isParent ? t : t.parent;
    }
    function qe(e, t) {
      let n = E.lFrame;
      n.currentTNode = e, n.isParent = t;
    }
    function oc() {
      return E.lFrame.isParent;
    }
    function rc() {
      E.lFrame.isParent = !1;
    }
    function Iv() {
      return E.lFrame.contextLView;
    }
    function ve() {
      let e = E.lFrame,
        t = e.bindingRootIndex;
      return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
    }
    function ot() {
      return E.lFrame.bindingIndex;
    }
    function nd(e) {
      return E.lFrame.bindingIndex = e;
    }
    function Ge() {
      return E.lFrame.bindingIndex++;
    }
    function rt(e) {
      let t = E.lFrame,
        n = t.bindingIndex;
      return t.bindingIndex = t.bindingIndex + e, n;
    }
    function Dv() {
      return E.lFrame.inI18n;
    }
    function od(e) {
      E.lFrame.inI18n = e;
    }
    function wv(e, t) {
      let n = E.lFrame;
      n.bindingIndex = n.bindingRootIndex = e, mi(t);
    }
    function Ev() {
      return E.lFrame.currentDirectiveIndex;
    }
    function mi(e) {
      E.lFrame.currentDirectiveIndex = e;
    }
    function sc(e) {
      let t = E.lFrame.currentDirectiveIndex;
      return t === -1 ? null : e[t];
    }
    function rd() {
      return E.lFrame.currentQueryIndex;
    }
    function ic(e) {
      E.lFrame.currentQueryIndex = e;
    }
    function Cv(e) {
      let t = e[v];
      return t.type === 2 ? t.declTNode : t.type === 1 ? e[ge] : null;
    }
    function sd(e, t, n) {
      if (n & x.SkipSelf) {
        let r = t,
          s = e;
        for (; r = r.parent, r === null && !(n & x.Host);) if (r = Cv(s), r === null || (s = s[gn], r.type & 10)) break;
        if (r === null) return !1;
        t = r, e = s;
      }
      let o = E.lFrame = id();
      return o.currentTNode = t, o.lView = e, !0;
    }
    function ac(e) {
      let t = id(),
        n = e[v];
      E.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1;
    }
    function id() {
      let e = E.lFrame,
        t = e === null ? null : e.child;
      return t === null ? ad(e) : t;
    }
    function ad(e) {
      let t = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: e,
        child: null,
        inI18n: !1
      };
      return e !== null && (e.child = t), t;
    }
    function cd() {
      let e = E.lFrame;
      return E.lFrame = e.parent, e.currentTNode = null, e.lView = null, e;
    }
    var ld = cd;
    function cc() {
      let e = cd();
      e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0;
    }
    function Mv(e) {
      return (E.lFrame.contextLView = Ju(e, E.lFrame.contextLView))[$];
    }
    function ce() {
      return E.lFrame.selectedIndex;
    }
    function _t(e) {
      E.lFrame.selectedIndex = e;
    }
    function H() {
      let e = E.lFrame;
      return No(e.tView, e.selectedIndex);
    }
    function Tv() {
      E.lFrame.currentNamespace = Qu;
    }
    function _v() {
      E.lFrame.currentNamespace = Zu;
    }
    function Nv() {
      bv();
    }
    function bv() {
      E.lFrame.currentNamespace = null;
    }
    function ud() {
      return E.lFrame.currentNamespace;
    }
    var dd = !0;
    function os() {
      return dd;
    }
    function gt(e) {
      dd = e;
    }
    function xv(e, t, n) {
      var _n$preOrderHooks2, _n$preOrderHooks3, _n$preOrderCheckHooks2;
      let {
        ngOnChanges: o,
        ngOnInit: r,
        ngDoCheck: s
      } = t.type.prototype;
      if (o) {
        var _n$preOrderHooks, _n$preOrderCheckHooks;
        let i = Gu(t);
        ((_n$preOrderHooks = n.preOrderHooks) !== null && _n$preOrderHooks !== void 0 ? _n$preOrderHooks : n.preOrderHooks = []).push(e, i), ((_n$preOrderCheckHooks = n.preOrderCheckHooks) !== null && _n$preOrderCheckHooks !== void 0 ? _n$preOrderCheckHooks : n.preOrderCheckHooks = []).push(e, i);
      }
      r && ((_n$preOrderHooks2 = n.preOrderHooks) !== null && _n$preOrderHooks2 !== void 0 ? _n$preOrderHooks2 : n.preOrderHooks = []).push(0 - e, r), s && (((_n$preOrderHooks3 = n.preOrderHooks) !== null && _n$preOrderHooks3 !== void 0 ? _n$preOrderHooks3 : n.preOrderHooks = []).push(e, s), ((_n$preOrderCheckHooks2 = n.preOrderCheckHooks) !== null && _n$preOrderCheckHooks2 !== void 0 ? _n$preOrderCheckHooks2 : n.preOrderCheckHooks = []).push(e, s));
    }
    function rs(e, t) {
      for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
        var _e$contentHooks, _e$contentHooks2, _e$contentCheckHooks, _e$viewHooks, _e$viewHooks2, _e$viewCheckHooks, _e$destroyHooks;
        let s = e.data[n].type.prototype,
          {
            ngAfterContentInit: i,
            ngAfterContentChecked: a,
            ngAfterViewInit: c,
            ngAfterViewChecked: l,
            ngOnDestroy: u
          } = s;
        i && ((_e$contentHooks = e.contentHooks) !== null && _e$contentHooks !== void 0 ? _e$contentHooks : e.contentHooks = []).push(-n, i), a && (((_e$contentHooks2 = e.contentHooks) !== null && _e$contentHooks2 !== void 0 ? _e$contentHooks2 : e.contentHooks = []).push(n, a), ((_e$contentCheckHooks = e.contentCheckHooks) !== null && _e$contentCheckHooks !== void 0 ? _e$contentCheckHooks : e.contentCheckHooks = []).push(n, a)), c && ((_e$viewHooks = e.viewHooks) !== null && _e$viewHooks !== void 0 ? _e$viewHooks : e.viewHooks = []).push(-n, c), l && (((_e$viewHooks2 = e.viewHooks) !== null && _e$viewHooks2 !== void 0 ? _e$viewHooks2 : e.viewHooks = []).push(n, l), ((_e$viewCheckHooks = e.viewCheckHooks) !== null && _e$viewCheckHooks !== void 0 ? _e$viewCheckHooks : e.viewCheckHooks = []).push(n, l)), u != null && ((_e$destroyHooks = e.destroyHooks) !== null && _e$destroyHooks !== void 0 ? _e$destroyHooks : e.destroyHooks = []).push(n, u);
      }
    }
    function ir(e, t, n) {
      fd(e, t, 3, n);
    }
    function ar(e, t, n, o) {
      (e[D] & 3) === n && fd(e, t, n, o);
    }
    function ks(e, t) {
      let n = e[D];
      (n & 3) === t && (n &= 16383, n += 1, e[D] = n);
    }
    function fd(e, t, n, o) {
      let r = o !== void 0 ? e[$t] & 65535 : 0,
        s = o !== null && o !== void 0 ? o : -1,
        i = t.length - 1,
        a = 0;
      for (let c = r; c < i; c++) if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o) break;
      } else t[c] < 0 && (e[$t] += 65536), (a < s || s == -1) && (Sv(e, n, t, c), e[$t] = (e[$t] & 4294901760) + c + 2), c++;
    }
    function gl(e, t) {
      je(4, e, t);
      let n = signals.setActiveConsumer(null);
      try {
        t.call(e);
      } finally {
        signals.setActiveConsumer(n), je(5, e, t);
      }
    }
    function Sv(e, t, n, o) {
      let r = n[o] < 0,
        s = n[o + 1],
        i = r ? -n[o] : n[o],
        a = e[i];
      r ? e[D] >> 14 < e[$t] >> 16 && (e[D] & 3) === t && (e[D] += 16384, gl(a, s)) : gl(a, s);
    }
    var Zt = -1,
      Nt = class {
        constructor(t, n, o) {
          this.factory = t, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = o;
        }
      };
    function Av(e) {
      return e instanceof Nt;
    }
    function Pv(e) {
      return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex));
    }
    function Ov(e) {
      return (e.flags & 8) !== 0;
    }
    function Rv(e) {
      return (e.flags & 16) !== 0;
    }
    function lc(e) {
      return e !== Zt;
    }
    function ro(e) {
      return e & 32767;
    }
    function kv(e) {
      return e >> 16;
    }
    function so(e, t) {
      let n = kv(e),
        o = t;
      for (; n > 0;) o = o[gn], n--;
      return o;
    }
    var vi = !0;
    function wr(e) {
      let t = vi;
      return vi = e, t;
    }
    var Lv = 256,
      pd = Lv - 1,
      hd = 5,
      Fv = 0,
      Ve = {};
    function jv(e, t, n) {
      let o;
      typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(Hn) && (o = n[Hn]), o == null && (o = n[Hn] = Fv++);
      let r = o & pd,
        s = 1 << r;
      t.data[e + (r >> hd)] |= s;
    }
    function Er(e, t) {
      let n = gd(e, t);
      if (n !== -1) return n;
      let o = t[v];
      o.firstCreatePass && (e.injectorIndex = t.length, Ls(o.data, e), Ls(t, null), Ls(o.blueprint, null));
      let r = ss(e, t),
        s = e.injectorIndex;
      if (lc(r)) {
        let i = ro(r),
          a = so(r, t),
          c = a[v].data;
        for (let l = 0; l < 8; l++) t[s + l] = a[i + l] | c[i + l];
      }
      return t[s + 8] = r, s;
    }
    function Ls(e, t) {
      e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
    }
    function gd(e, t) {
      return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex;
    }
    function ss(e, t) {
      if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
      let n = 0,
        o = null,
        r = t;
      for (; r !== null;) {
        if (o = Dd(r), o === null) return Zt;
        if (n++, r = r[gn], o.injectorIndex !== -1) return o.injectorIndex | n << 16;
      }
      return Zt;
    }
    function yi(e, t, n) {
      jv(e, t, n);
    }
    function Vv(e, t) {
      if (t === "class") return e.classes;
      if (t === "style") return e.styles;
      let n = e.attrs;
      if (n) {
        let o = n.length,
          r = 0;
        for (; r < o;) {
          let s = n[r];
          if (ku(s)) break;
          if (s === 0) r = r + 2;else if (typeof s == "number") for (r++; r < o && typeof n[r] == "string";) r++;else {
            if (s === t) return n[r + 1];
            r = r + 2;
          }
        }
      }
      return null;
    }
    function md(e, t, n) {
      if (n & x.Optional || e !== void 0) return e;
      Za();
    }
    function vd(e, t, n, o) {
      if (n & x.Optional && o === void 0 && (o = null), !(n & (x.Self | x.Host))) {
        let r = e[he],
          s = ye(void 0);
        try {
          return r ? r.get(t, o, n & x.Optional) : Pu(t, o, n & x.Optional);
        } finally {
          ye(s);
        }
      }
      return md(o, t, n);
    }
    function yd(e, t, n) {
      let o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : x.Default;
      let r = arguments.length > 4 ? arguments[4] : undefined;
      if (e !== null) {
        if (t[D] & 2048 && !(o & x.Self)) {
          let i = qv(e, t, n, o, Ve);
          if (i !== Ve) return i;
        }
        let s = Id(e, t, n, o, Ve);
        if (s !== Ve) return s;
      }
      return vd(t, n, o, r);
    }
    function Id(e, t, n, o, r) {
      let s = $v(n);
      if (typeof s == "function") {
        if (!sd(t, e, o)) return o & x.Host ? md(r, n, o) : vd(t, n, o, r);
        try {
          let i;
          if (i = s(o), i == null && !(o & x.Optional)) Za(n);else return i;
        } finally {
          ld();
        }
      } else if (typeof s == "number") {
        let i = null,
          a = gd(e, t),
          c = Zt,
          l = o & x.Host ? t[ee][ge] : null;
        for ((a === -1 || o & x.SkipSelf) && (c = a === -1 ? ss(e, t) : t[a + 8], c === Zt || !vl(o, !1) ? a = -1 : (i = t[v], a = ro(c), t = so(c, t))); a !== -1;) {
          let u = t[v];
          if (ml(s, a, u.data)) {
            let d = Hv(a, t, n, i, o, l);
            if (d !== Ve) return d;
          }
          c = t[a + 8], c !== Zt && vl(o, t[v].data[a + 8] === l) && ml(s, a, t) ? (i = u, a = ro(c), t = so(c, t)) : a = -1;
        }
      }
      return r;
    }
    function Hv(e, t, n, o, r, s) {
      let i = t[v],
        a = i.data[e + 8],
        c = o == null ? Rt(a) && vi : o != i && (a.type & 3) !== 0,
        l = r & x.Host && s === a,
        u = cr(a, i, n, c, l);
      return u !== null ? bt(t, i, u, a) : Ve;
    }
    function cr(e, t, n, o, r) {
      let s = e.providerIndexes,
        i = t.data,
        a = s & 1048575,
        c = e.directiveStart,
        l = e.directiveEnd,
        u = s >> 20,
        d = o ? a : a + u,
        f = r ? a + u : l;
      for (let p = d; p < f; p++) {
        let h = i[p];
        if (p < c && n === h || p >= c && h.type === n) return p;
      }
      if (r) {
        let p = i[c];
        if (p && Pe(p) && p.type === n) return c;
      }
      return null;
    }
    function bt(e, t, n, o) {
      let r = e[n],
        s = t.data;
      if (Av(r)) {
        let i = r;
        i.resolving && ym(Te(s[n]));
        let a = wr(i.canSeeViewProviders);
        i.resolving = !0;
        let l = i.injectImpl ? ye(i.injectImpl) : null;
          sd(e, o, x.Default);
        try {
          r = e[n] = i.factory(void 0, s, e, o), t.firstCreatePass && n >= o.directiveStart && xv(n, s[n], t);
        } finally {
          l !== null && ye(l), wr(a), i.resolving = !1, ld();
        }
      }
      return r;
    }
    function $v(e) {
      if (typeof e == "string") return e.charCodeAt(0) || 0;
      let t = e.hasOwnProperty(Hn) ? e[Hn] : void 0;
      return typeof t == "number" ? t >= 0 ? t & pd : Bv : t;
    }
    function ml(e, t, n) {
      let o = 1 << e;
      return !!(n[t + (e >> hd)] & o);
    }
    function vl(e, t) {
      return !(e & x.Self) && !(e & x.Host && t);
    }
    function yn(e) {
      return e._lView;
    }
    function In(e) {
      return e._tNode;
    }
    var W = class {
      constructor(t, n) {
        this._tNode = t, this._lView = n;
      }
      get(t, n, o) {
        return yd(this._tNode, this._lView, t, Kr(o), n);
      }
    };
    function Bv() {
      return new W(F(), g());
    }
    function Uv(e) {
      return nt(() => {
        let t = e.prototype.constructor,
          n = t[Ke] || Ii(t),
          o = Object.prototype,
          r = Object.getPrototypeOf(e.prototype).constructor;
        for (; r && r !== o;) {
          let s = r[Ke] || Ii(r);
          if (s && s !== n) return s;
          r = Object.getPrototypeOf(r);
        }
        return s => new s();
      });
    }
    function Ii(e) {
      return Yr(e) ? () => {
        let t = Ii(A(e));
        return t && t();
      } : Tt(e);
    }
    function qv(e, t, n, o, r) {
      let s = e,
        i = t;
      for (; s !== null && i !== null && i[D] & 2048 && !(i[D] & 512);) {
        let a = Id(s, i, n, o | x.Self, Ve);
        if (a !== Ve) return a;
        let c = s.parent;
        if (!c) {
          let l = i[Bu];
          if (l) {
            let u = l.get(n, Ve, o);
            if (u !== Ve) return u;
          }
          c = Dd(i), i = i[gn];
        }
        s = c;
      }
      return r;
    }
    function Dd(e) {
      let t = e[v],
        n = t.type;
      return n === 2 ? t.declTNode : n === 1 ? e[ge] : null;
    }
    function wd(e) {
      return Vv(F(), e);
    }
    var Bt = "__annotations__",
      Ut = "__parameters__",
      qt = "__prop__metadata__";
    function bo(e, t, n, o, r) {
      return nt(() => {
        let s = uc(t);
        function i() {
          for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
            a[_key] = arguments[_key];
          }
          if (this instanceof i) return s.call(this, ...a), this;
          let c = new i(...a);
          return function (u) {
            return r && r(u, ...a), (u.hasOwnProperty(Bt) ? u[Bt] : Object.defineProperty(u, Bt, {
              value: []
            })[Bt]).push(c), o && o(u), u;
          };
        }
        return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i;
      });
    }
    function uc(e) {
      return function () {
        if (e) {
          let o = e(...arguments);
          for (let r in o) this[r] = o[r];
        }
      };
    }
    function Dn(e, t, n) {
      return nt(() => {
        let o = uc(t);
        function r() {
          for (var _len2 = arguments.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            s[_key2] = arguments[_key2];
          }
          if (this instanceof r) return o.apply(this, s), this;
          let i = new r(...s);
          return a.annotation = i, a;
          function a(c, l, u) {
            let d = c.hasOwnProperty(Ut) ? c[Ut] : Object.defineProperty(c, Ut, {
              value: []
            })[Ut];
            for (; d.length <= u;) d.push(null);
            return (d[u] = d[u] || []).push(i), c;
          }
        }
        return n && (r.prototype = Object.create(n.prototype)), r.prototype.ngMetadataName = e, r.annotationCls = r, r;
      });
    }
    function mt(e, t, n, o) {
      return nt(() => {
        let r = uc(t);
        function s() {
          for (var _len3 = arguments.length, i = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            i[_key3] = arguments[_key3];
          }
          if (this instanceof s) return r.apply(this, i), this;
          let a = new s(...i);
          function c(l, u) {
            if (l === void 0) throw new Error("Standard Angular field decorators are not supported in JIT mode.");
            let d = l.constructor,
              f = d.hasOwnProperty(qt) ? d[qt] : Object.defineProperty(d, qt, {
                value: {}
              })[qt];
            f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a), o && o(l, u, ...i);
          }
          return c;
        }
        return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s;
      });
    }
    var Gv = Dn("Attribute", e => ({
        attributeName: e,
        __NG_ELEMENT_ID__: () => wd(e)
      })),
      Ed = !0,
      nn = class {},
      EN = mt("ContentChildren", function (e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return ne({
          selector: e,
          first: !1,
          isViewQuery: !1,
          descendants: !1,
          emitDistinctChangesOnly: Ed
        }, t);
      }, nn),
      CN = mt("ContentChild", function (e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return ne({
          selector: e,
          first: !0,
          isViewQuery: !1,
          descendants: !0
        }, t);
      }, nn),
      MN = mt("ViewChildren", function (e) {
        let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return ne({
          selector: e,
          first: !1,
          isViewQuery: !0,
          descendants: !0,
          emitDistinctChangesOnly: Ed
        }, t);
      }, nn),
      TN = mt("ViewChild", (e, t) => ne({
        selector: e,
        first: !0,
        isViewQuery: !0,
        descendants: !0
      }, t), nn),
      Ht = function (e) {
        return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e;
      }(Ht || {});
    function K(e) {
      let t = ue.ng;
      if (t && t.ɵcompilerFacade) return t.ɵcompilerFacade;
      throw new Error("JIT compiler unavailable");
    }
    var Wv = Function;
    function jn(e) {
      return typeof e == "function";
    }
    function zv(e, t, n) {
      if (e.length !== t.length) return !1;
      for (let o = 0; o < e.length; o++) {
        let r = e[o],
          s = t[o];
        if (n && (r = n(r), s = n(s)), s !== r) return !1;
      }
      return !0;
    }
    function Fe(e) {
      return e.flat(Number.POSITIVE_INFINITY);
    }
    function is(e, t) {
      e.forEach(n => Array.isArray(n) ? is(n, t) : t(n));
    }
    function Cd(e, t, n) {
      t >= e.length ? e.push(n) : e.splice(t, 0, n);
    }
    function Cr(e, t) {
      return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
    }
    function $n(e, t) {
      let n = [];
      for (let o = 0; o < e; o++) n.push(t);
      return n;
    }
    function yl(e, t, n) {
      let o = e.length - n;
      for (; t < o;) e[t] = e[t + n], t++;
      for (; n--;) e.pop();
    }
    function Md(e, t, n, o) {
      let r = e.length;
      if (r == t) e.push(n, o);else if (r === 1) e.push(o, e[0]), e[0] = n;else {
        for (r--, e.push(e[r - 1], e[r]); r > t;) {
          let s = r - 2;
          e[r] = e[s], r--;
        }
        e[t] = n, e[t + 1] = o;
      }
    }
    function Ce(e, t, n) {
      let o = xo(e, t);
      return o >= 0 ? e[o | 1] = n : (o = ~o, Md(e, o, t, n)), o;
    }
    function Fs(e, t) {
      let n = xo(e, t);
      if (n >= 0) return e[n | 1];
    }
    function xo(e, t) {
      return Qv(e, t, 1);
    }
    function Qv(e, t, n) {
      let o = 0,
        r = e.length >> n;
      for (; r !== o;) {
        let s = o + (r - o >> 1),
          i = e[s << n];
        if (t === i) return s << n;
        i > t ? r = s : o = s + 1;
      }
      return ~(r << n);
    }
    var Zv = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/,
      Yv = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,
      Jv = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,
      Xv = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
    function Kv(e) {
      return Zv.test(e) || Xv.test(e) || Yv.test(e) && !Jv.test(e);
    }
    var Di = class {
      constructor(t) {
        this._reflect = t || ue.Reflect;
      }
      factory(t) {
        return function () {
          for (var _len4 = arguments.length, n = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            n[_key4] = arguments[_key4];
          }
          return new t(...n);
        };
      }
      _zipTypesAndAnnotations(t, n) {
        let o;
        typeof t > "u" ? o = $n(n.length) : o = $n(t.length);
        for (let r = 0; r < o.length; r++) typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r]));
        return o;
      }
      _ownParameters(t, n) {
        let o = t.toString();
        if (Kv(o)) return null;
        if (t.parameters && t.parameters !== n.parameters) return t.parameters;
        let r = t.ctorParameters;
        if (r && r !== n.ctorParameters) {
          let a = typeof r == "function" ? r() : r,
            c = a.map(u => u && u.type),
            l = a.map(u => u && js(u.decorators));
          return this._zipTypesAndAnnotations(c, l);
        }
        let s = t.hasOwnProperty(Ut) && t[Ut],
          i = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t);
        return i || s ? this._zipTypesAndAnnotations(i, s) : $n(t.length);
      }
      parameters(t) {
        if (!jn(t)) return [];
        let n = Qo(t),
          o = this._ownParameters(t, n);
        return !o && n !== Object && (o = this.parameters(n)), o || [];
      }
      _ownAnnotations(t, n) {
        if (t.annotations && t.annotations !== n.annotations) {
          let o = t.annotations;
          return typeof o == "function" && o.annotations && (o = o.annotations), o;
        }
        return t.decorators && t.decorators !== n.decorators ? js(t.decorators) : t.hasOwnProperty(Bt) ? t[Bt] : null;
      }
      annotations(t) {
        if (!jn(t)) return [];
        let n = Qo(t),
          o = this._ownAnnotations(t, n) || [];
        return (n !== Object ? this.annotations(n) : []).concat(o);
      }
      _ownPropMetadata(t, n) {
        if (t.propMetadata && t.propMetadata !== n.propMetadata) {
          let o = t.propMetadata;
          return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
        }
        if (t.propDecorators && t.propDecorators !== n.propDecorators) {
          let o = t.propDecorators,
            r = {};
          return Object.keys(o).forEach(s => {
            r[s] = js(o[s]);
          }), r;
        }
        return t.hasOwnProperty(qt) ? t[qt] : null;
      }
      propMetadata(t) {
        if (!jn(t)) return {};
        let n = Qo(t),
          o = {};
        if (n !== Object) {
          let s = this.propMetadata(n);
          Object.keys(s).forEach(i => {
            o[i] = s[i];
          });
        }
        let r = this._ownPropMetadata(t, n);
        return r && Object.keys(r).forEach(s => {
          let i = [];
          o.hasOwnProperty(s) && i.push(...o[s]), i.push(...r[s]), o[s] = i;
        }), o;
      }
      ownPropMetadata(t) {
        return jn(t) ? this._ownPropMetadata(t, Qo(t)) || {} : {};
      }
      hasLifecycleHook(t, n) {
        return t instanceof Wv && n in t.prototype;
      }
    };
    function js(e) {
      return e ? e.map(t => {
        let o = t.type.annotationCls,
          r = t.args ? t.args : [];
        return new o(...r);
      }) : [];
    }
    function Qo(e) {
      let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null;
      return (t ? t.constructor : null) || Object;
    }
    var ey = Co(Dn("Inject", e => ({
        token: e
      })), -1),
      dc = Co(Dn("Optional"), 8),
      ty = Co(Dn("Self"), 2),
      fc = Co(Dn("SkipSelf"), 4),
      ny = Co(Dn("Host"), 1),
      Il = null;
    function pc() {
      return Il = Il || new Di();
    }
    function as(e) {
      return Td(pc().parameters(e));
    }
    function Td(e) {
      return e.map(t => oy(t));
    }
    function oy(e) {
      let t = {
        token: null,
        attribute: null,
        host: !1,
        optional: !1,
        self: !1,
        skipSelf: !1
      };
      if (Array.isArray(e) && e.length > 0) for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0) continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof dc || r.ngMetadataName === "Optional") t.optional = !0;else if (o instanceof fc || r.ngMetadataName === "SkipSelf") t.skipSelf = !0;else if (o instanceof ty || r.ngMetadataName === "Self") t.self = !0;else if (o instanceof ny || r.ngMetadataName === "Host") t.host = !0;else if (o instanceof ey) t.token = o.token;else if (o instanceof Gv) {
          if (o.attributeName === void 0) throw new w(204, !1);
          t.attribute = o.attributeName;
        } else t.token = o;
      } else e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e;
      return t;
    }
    function ry(e) {
      let t = [],
        n = new Map();
      function o(r) {
        let s = n.get(r);
        if (!s) {
          let i = e(r);
          n.set(r, s = i.then(cy));
        }
        return s;
      }
      return on.forEach((r, s) => {
        var _r$styleUrls, _r$styleUrls2;
        let i = [];
        r.templateUrl && i.push(o(r.templateUrl).then(l => {
          r.template = l;
        }));
        let a = typeof r.styles == "string" ? [r.styles] : r.styles || [];
        if (r.styles = a, r.styleUrl && (_r$styleUrls = r.styleUrls) !== null && _r$styleUrls !== void 0 && _r$styleUrls.length) throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");
        if ((_r$styleUrls2 = r.styleUrls) !== null && _r$styleUrls2 !== void 0 && _r$styleUrls2.length) {
          let l = r.styles.length,
            u = r.styleUrls;
          r.styleUrls.forEach((d, f) => {
            a.push(""), i.push(o(d).then(p => {
              a[l + f] = p, u.splice(u.indexOf(d), 1), u.length == 0 && (r.styleUrls = void 0);
            }));
          });
        } else r.styleUrl && i.push(o(r.styleUrl).then(l => {
          a.push(l), r.styleUrl = void 0;
        }));
        let c = Promise.all(i).then(() => ly(s));
        t.push(c);
      }), iy(), Promise.all(t).then(() => {});
    }
    var on = new Map(),
      io = new Set();
    function sy(e, t) {
      _d(t) && (on.set(e, t), io.add(e));
    }
    function _N(e) {
      return io.has(e);
    }
    function _d(e) {
      return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls && e.styleUrls.length || e.styleUrl);
    }
    function iy() {
      let e = on;
      return on = new Map(), e;
    }
    function NN(e) {
      io.clear(), e.forEach((t, n) => io.add(n)), on = e;
    }
    function cy(e) {
      return typeof e == "string" ? e : e.text();
    }
    function ly(e) {
      io.delete(e);
    }
    var So = new P("ENVIRONMENT_INITIALIZER"),
      Nd = new P("INJECTOR", -1),
      hc = new P("INJECTOR_DEF_TYPES"),
      rn = class {
        get(t) {
          let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Xn;
          if (n === Xn) {
            let o = new Error("NullInjectorError: No provider for ".concat(ae(t), "!"));
            throw o.name = "NullInjectorError", o;
          }
          return n;
        }
      };
    function bd(e) {
      return {
        ɵproviders: e
      };
    }
    function uy() {
      for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        e[_key5] = arguments[_key5];
      }
      return {
        ɵproviders: xd(!0, e),
        ɵfromNgModule: !0
      };
    }
    function xd(e) {
      let n = [],
        o = new Set(),
        r,
        s = i => {
          n.push(i);
        };
      for (var _len6 = arguments.length, t = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        t[_key6 - 1] = arguments[_key6];
      }
      return is(t, i => {
        let a = i;
        Mr(a, s, [], o) && (r || (r = []), r.push(a));
      }), r !== void 0 && Sd(r, s), n;
    }
    function Sd(e, t) {
      for (let n = 0; n < e.length; n++) {
        let {
          ngModule: o,
          providers: r
        } = e[n];
        gc(r, s => {
          t(s, o);
        });
      }
    }
    function Mr(e, t, n, o) {
      if (e = A(e), !e) return !1;
      let r = null,
        s = gr(e),
        i = !s && R(e);
      if (!s && !i) {
        let c = e.ngModule;
        if (s = gr(c), s) r = c;else return !1;
      } else {
        if (i && !i.standalone) return !1;
        r = e;
      }
      let a = o.has(r);
      if (i) {
        if (a) return !1;
        if (o.add(r), i.dependencies) {
          let c = typeof i.dependencies == "function" ? i.dependencies() : i.dependencies;
          for (let l of c) Mr(l, t, n, o);
        }
      } else if (s) {
        if (s.imports != null && !a) {
          o.add(r);
          let l;
          try {
            is(s.imports, u => {
              Mr(u, t, n, o) && (l || (l = []), l.push(u));
            });
          } finally {}
          l !== void 0 && Sd(l, t);
        }
        if (!a) {
          let l = Tt(r) || (() => new r());
          t({
            provide: r,
            useFactory: l,
            deps: O
          }, r), t({
            provide: hc,
            useValue: r,
            multi: !0
          }, r), t({
            provide: So,
            useValue: () => de(r),
            multi: !0
          }, r);
        }
        let c = s.providers;
        if (c != null && !a) {
          let l = e;
          gc(c, u => {
            t(u, l);
          });
        }
      } else return !1;
      return r !== e && e.providers !== void 0;
    }
    function gc(e, t) {
      for (let n of e) Nu(n) && (n = n.ɵproviders), Array.isArray(n) ? gc(n, t) : t(n);
    }
    var dy = k({
      provide: String,
      useValue: k
    });
    function Ad(e) {
      return e !== null && typeof e == "object" && dy in e;
    }
    function fy(e) {
      return !!(e && e.useExisting);
    }
    function py(e) {
      return !!(e && e.useFactory);
    }
    function sn(e) {
      return typeof e == "function";
    }
    function hy(e) {
      return !!e.useClass;
    }
    var Pd = new P("Set Injector scope."),
      lr = {},
      gy = {},
      Vs;
    function cs() {
      return Vs === void 0 && (Vs = new rn()), Vs;
    }
    var Oe = class {},
      pt = class extends Oe {
        get destroyed() {
          return this._destroyed;
        }
        constructor(t, n, o, r) {
          super(), this.parent = n, this.source = o, this.scopes = r, this.records = new Map(), this._ngOnDestroyHooks = new Set(), this._onDestroyHooks = [], this._destroyed = !1, Ei(t, i => this.processProvider(i)), this.records.set(Nd, Gt(void 0, this)), r.has("environment") && this.records.set(Oe, Gt(void 0, this));
          let s = this.records.get(Pd);
          s != null && typeof s.value == "string" && this.scopes.add(s.value), this.injectorDefTypes = new Set(this.get(hc, O, x.Self));
        }
        destroy() {
          this.assertNotDestroyed(), this._destroyed = !0;
          try {
            for (let n of this._ngOnDestroyHooks) n.ngOnDestroy();
            let t = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (let n of t) n();
          } finally {
            this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear();
          }
        }
        onDestroy(t) {
          return this.assertNotDestroyed(), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t);
        }
        runInContext(t) {
          this.assertNotDestroyed();
          let n = ct(this),
            o = ye(void 0);
          try {
            return t();
          } finally {
            ct(n), ye(o);
          }
        }
        get(t) {
          let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Xn;
          let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x.Default;
          if (this.assertNotDestroyed(), t.hasOwnProperty(al)) return t[al](this);
          o = Kr(o);
          let s = ct(this),
            i = ye(void 0);
          try {
            if (!(o & x.SkipSelf)) {
              let c = this.records.get(t);
              if (c === void 0) {
                let l = Dy(t) && Xr(t);
                l && this.injectableDefInScope(l) ? c = Gt(wi(t), lr) : c = null, this.records.set(t, c);
              }
              if (c != null) return this.hydrate(t, c);
            }
            let a = o & x.Self ? cs() : this.parent;
            return n = o & x.Optional && n === Xn ? null : n, a.get(t, n);
          } catch (a) {
            if (a.name === "NullInjectorError") {
              if ((a[vr] = a[vr] || []).unshift(ae(t)), s) throw a;
              return Am(a, t, "R3InjectorError", this.source);
            } else throw a;
          } finally {
            ye(i), ct(s);
          }
        }
        resolveInjectorInitializers() {
          let t = ct(this),
            n = ye(void 0);
          try {
            let r = this.get(So, O, x.Self);
            for (let s of r) s();
          } finally {
            ct(t), ye(n);
          }
        }
        toString() {
          let t = [],
            n = this.records;
          for (let o of n.keys()) t.push(ae(o));
          return "R3Injector[".concat(t.join(", "), "]");
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new w(205, !1);
        }
        processProvider(t) {
          t = A(t);
          let n = sn(t) ? t : A(t && t.provide),
            o = vy(t);
          if (!sn(t) && t.multi === !0) {
            let r = this.records.get(n);
            r || (r = Gt(void 0, lr, !0), r.factory = () => ui(r.multi), this.records.set(n, r)), n = t, r.multi.push(t);
          } else {
            this.records.get(n);
          }
          this.records.set(n, o);
        }
        hydrate(t, n) {
          return n.value === lr && (n.value = gy, n.value = n.factory()), typeof n.value == "object" && n.value && Iy(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          let n = A(t.providedIn);
          return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n);
        }
        removeOnDestroy(t) {
          let n = this._onDestroyHooks.indexOf(t);
          n !== -1 && this._onDestroyHooks.splice(n, 1);
        }
      };
    function wi(e) {
      let t = Xr(e),
        n = t !== null ? t.factory : Tt(e);
      if (n !== null) return n;
      if (e instanceof P) throw new w(204, !1);
      if (e instanceof Function) return my(e);
      throw new w(204, !1);
    }
    function my(e) {
      let t = e.length;
      if (t > 0) {
        $n(t, "?");
        throw new w(204, !1);
      }
      let n = Dm(e);
      return n !== null ? () => n.factory(e) : () => new e();
    }
    function vy(e) {
      if (Ad(e)) return Gt(void 0, e.useValue);
      {
        let t = Od(e);
        return Gt(t, lr);
      }
    }
    function Od(e, t, n) {
      let o;
      if (sn(e)) {
        let r = A(e);
        return Tt(r) || wi(r);
      } else if (Ad(e)) o = () => A(e.useValue);else if (py(e)) o = () => e.useFactory(...ui(e.deps || []));else if (fy(e)) o = () => de(A(e.useExisting));else {
        let r = A(e && (e.useClass || e.provide));
        if (yy(e)) o = () => new r(...ui(e.deps));else return Tt(r) || wi(r);
      }
      return o;
    }
    function Gt(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      return {
        factory: e,
        value: t,
        multi: n ? [] : void 0
      };
    }
    function yy(e) {
      return !!e.deps;
    }
    function Iy(e) {
      return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function";
    }
    function Dy(e) {
      return typeof e == "function" || typeof e == "object" && e instanceof P;
    }
    function Ei(e, t) {
      for (let n of e) Array.isArray(n) ? Ei(n, t) : n && Nu(n) ? Ei(n.ɵproviders, t) : t(n);
    }
    function bN(e, t) {
      e instanceof pt && e.assertNotDestroyed();
      let o = ct(e),
        r = ye(void 0);
      try {
        return t();
      } finally {
        ct(o), ye(r);
      }
    }
    function mc(e) {
      if (!Au() && !bm()) throw new w(-203, !1);
    }
    var Dl = {
      ɵɵdefineInjectable: U,
      ɵɵdefineInjector: Ya,
      ɵɵinject: de,
      ɵɵinvalidFactoryDep: Ou,
      resolveForwardRef: A
    };
    function wy(e, t) {
      let n = null,
        o = null;
      e.hasOwnProperty(mr) || Object.defineProperty(e, mr, {
        get: () => (n === null && (n = K().compileInjectable(Dl, "ng:///".concat(e.name, "/\u0275prov.js"), Ty(e, t))), n)
      }), e.hasOwnProperty(Ke) || Object.defineProperty(e, Ke, {
        get: () => {
          if (o === null) {
            let r = K();
            o = r.compileFactory(Dl, "ng:///".concat(e.name, "/\u0275fac.js"), {
              name: e.name,
              type: e,
              typeArgumentCount: 0,
              deps: as(e),
              target: r.FactoryTarget.Injectable
            });
          }
          return o;
        },
        configurable: !0
      });
    }
    var Ey = k({
      provide: String,
      useValue: k
    });
    function wl(e) {
      return e.useClass !== void 0;
    }
    function Cy(e) {
      return Ey in e;
    }
    function El(e) {
      return e.useFactory !== void 0;
    }
    function My(e) {
      return e.useExisting !== void 0;
    }
    function Ty(e, t) {
      let n = t || {
          providedIn: null
        },
        o = {
          name: e.name,
          type: e,
          typeArgumentCount: 0,
          providedIn: n.providedIn
        };
      return (wl(n) || El(n)) && n.deps !== void 0 && (o.deps = Td(n.deps)), wl(n) ? o.useClass = n.useClass : Cy(n) ? o.useValue = n.useValue : El(n) ? o.useFactory = n.useFactory : My(n) && (o.useExisting = n.useExisting), o;
    }
    var xN = bo("Injectable", void 0, void 0, void 0, (e, t) => wy(e, t));
    function Cl(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      let o = arguments.length > 3 ? arguments[3] : undefined;
      let r = Rd(e, t, n, o);
      return r.resolveInjectorInitializers(), r;
    }
    function Rd(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      let o = arguments.length > 3 ? arguments[3] : undefined;
      let r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Set();
      let s = [n || O, uy(e)];
      return o = o || (typeof e == "object" ? void 0 : ae(e)), new pt(s, t || cs(), o || null, r);
    }
    var Re = (_e2 => {
      class e {
        static create(n, o) {
          if (Array.isArray(n)) return Cl({
            name: ""
          }, o, n, "");
          {
            var _n$name;
            let r = (_n$name = n.name) !== null && _n$name !== void 0 ? _n$name : "";
            return Cl({
              name: r
            }, n.parent, n.providers, r);
          }
        }
      }
      _e2 = e;
      _e2.THROW_IF_NOT_FOUND = Xn;
      _e2.NULL = new rn();
      _e2.ɵprov = U({
        token: _e2,
        providedIn: "any",
        factory: () => de(Nd)
      });
      _e2.__NG_ELEMENT_ID__ = -1;
      return e;
    })();
    function vc(e) {
      return e.ngModule !== void 0;
    }
    function Dt(e) {
      return !!Se(e);
    }
    function Zo(e) {
      return !!De(e);
    }
    function Ml(e) {
      return !!Ie(e);
    }
    function Bn(e) {
      return !!R(e);
    }
    function _y(e) {
      return R(e) ? "component" : Ie(e) ? "directive" : De(e) ? "pipe" : "type";
    }
    function Ny(e, t) {
      if (Yr(e) && (e = A(e), !e)) throw new Error("Expected forwardRef function, imported from \"".concat(Te(t), "\", to return a standalone entity or NgModule but got \"").concat(Te(e) || e, "\"."));
      if (Se(e) == null) {
        let n = R(e) || Ie(e) || De(e);
        if (n != null) {
          if (!n.standalone) throw new Error("The \"".concat(Te(e), "\" ").concat(_y(e), ", imported from \"").concat(Te(t), "\", is not standalone. Did you forget to add the standalone: true flag?"));
        } else throw vc(e) ? new Error("A module with providers was imported from \"".concat(Te(t), "\". Modules with providers are not supported in standalone components imports.")) : new Error("The \"".concat(Te(e), "\" type, imported from \"").concat(Te(t), "\", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?"));
      }
    }
    var Ci;
    function SN(e) {
      Ci = e;
    }
    function wn() {
      if (Ci !== void 0) return Ci;
      if (typeof document < "u") return document;
      throw new w(210, !1);
    }
    var by = new P("AppId", {
        providedIn: "root",
        factory: () => xy
      }),
      xy = "ng",
      Sy = new P("Platform Initializer"),
      kd = new P("Platform ID", {
        providedIn: "platform",
        factory: () => "unknown"
      }),
      AN = new P("Application Packages Root URL"),
      PN = new P("AnimationModuleType"),
      ON = new P("CSP nonce", {
        providedIn: "root",
        factory: () => {
          var _wn$body;
          return ((_wn$body = wn().body) === null || _wn$body === void 0 || (_wn$body = _wn$body.querySelector("[ngCspNonce]")) === null || _wn$body === void 0 ? void 0 : _wn$body.getAttribute("ngCspNonce")) || null;
        }
      }),
      Ay = {
        breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        disableImageSizeWarning: !1,
        disableImageLazyLoadWarning: !1
      },
      RN = new P("ImageConfig", {
        providedIn: "root",
        factory: () => Ay
      });
    function Py(e) {
      return e.ownerDocument.defaultView;
    }
    function Oy(e) {
      return e.ownerDocument;
    }
    function Ld(e) {
      return e.ownerDocument.body;
    }
    var Ry = "\uFFFD";
    function Je(e) {
      return e instanceof Function ? e() : e;
    }
    function lt(e) {
      return (e !== null && e !== void 0 ? e : L(Re)).get(kd) === "browser";
    }
    var Mi = !0,
      Ti = class {
        constructor() {
          this.ownerNgModule = new Map(), this.ngModulesWithSomeUnresolvedDecls = new Set(), this.ngModulesScopeCache = new Map(), this.standaloneComponentsScopeCache = new Map();
        }
        resolveNgModulesDecls() {
          if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
            for (let t of this.ngModulesWithSomeUnresolvedDecls) {
              let n = Se(t);
              if (n !== null && n !== void 0 && n.declarations) for (let o of Je(n.declarations)) Bn(o) && this.ownerNgModule.set(o, t);
            }
            this.ngModulesWithSomeUnresolvedDecls.clear();
          }
        }
        getComponentDependencies(t, n) {
          this.resolveNgModulesDecls();
          let o = R(t);
          if (o === null) throw new Error("Attempting to get component dependencies for a type that is not a component: ".concat(t));
          if (o.standalone) {
            let r = this.getStandaloneComponentScope(t, n);
            return r.compilation.isPoisoned ? {
              dependencies: []
            } : {
              dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules]
            };
          } else {
            if (!this.ownerNgModule.has(t)) return {
              dependencies: []
            };
            let r = this.getNgModuleScope(this.ownerNgModule.get(t));
            return r.compilation.isPoisoned ? {
              dependencies: []
            } : {
              dependencies: [...r.compilation.directives, ...r.compilation.pipes]
            };
          }
        }
        registerNgModule(t, n) {
          if (!Dt(t)) throw new Error("Attempting to register a Type which is not NgModule as NgModule: ".concat(t));
          this.ngModulesWithSomeUnresolvedDecls.add(t);
        }
        clearScopeCacheFor(t) {
          this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t);
        }
        getNgModuleScope(t) {
          if (this.ngModulesScopeCache.has(t)) return this.ngModulesScopeCache.get(t);
          let n = this.computeNgModuleScope(t);
          return this.ngModulesScopeCache.set(t, n), n;
        }
        computeNgModuleScope(t) {
          let n = Se(t, !0),
            o = {
              exported: {
                directives: new Set(),
                pipes: new Set()
              },
              compilation: {
                directives: new Set(),
                pipes: new Set()
              }
            };
          for (let r of Je(n.imports)) if (Dt(r)) {
            let s = this.getNgModuleScope(r);
            at(s.exported.directives, o.compilation.directives), at(s.exported.pipes, o.compilation.pipes);
          } else if (yr(r)) {
            if (Ml(r) || Bn(r)) o.compilation.directives.add(r);else if (Zo(r)) o.compilation.pipes.add(r);else throw new w(1e3, "The standalone imported type is neither a component nor a directive nor a pipe");
          } else {
            o.compilation.isPoisoned = !0;
            break;
          }
          if (!o.compilation.isPoisoned) for (let r of Je(n.declarations)) {
            if (Dt(r) || yr(r)) {
              o.compilation.isPoisoned = !0;
              break;
            }
            Zo(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
          }
          for (let r of Je(n.exports)) if (Dt(r)) {
            let s = this.getNgModuleScope(r);
            at(s.exported.directives, o.exported.directives), at(s.exported.pipes, o.exported.pipes), at(s.exported.directives, o.compilation.directives), at(s.exported.pipes, o.compilation.pipes);
          } else Zo(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r);
          return o;
        }
        getStandaloneComponentScope(t, n) {
          if (this.standaloneComponentsScopeCache.has(t)) return this.standaloneComponentsScopeCache.get(t);
          let o = this.computeStandaloneComponentScope(t, n);
          return this.standaloneComponentsScopeCache.set(t, o), o;
        }
        computeStandaloneComponentScope(t, n) {
          let o = {
            compilation: {
              directives: new Set([t]),
              pipes: new Set(),
              ngModules: new Set()
            }
          };
          for (let r of Fe(n !== null && n !== void 0 ? n : [])) {
            let s = A(r);
            try {
              Ny(s, t);
            } catch {
              return o.compilation.isPoisoned = !0, o;
            }
            if (Dt(s)) {
              o.compilation.ngModules.add(s);
              let i = this.getNgModuleScope(s);
              if (i.exported.isPoisoned) return o.compilation.isPoisoned = !0, o;
              at(i.exported.directives, o.compilation.directives), at(i.exported.pipes, o.compilation.pipes);
            } else if (Zo(s)) o.compilation.pipes.add(s);else if (Ml(s) || Bn(s)) o.compilation.directives.add(s);else return o.compilation.isPoisoned = !0, o;
          }
          return o;
        }
        isOrphanComponent(t) {
          let n = R(t);
          return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t));
        }
      };
    function at(e, t) {
      for (let n of e) t.add(n);
    }
    var ao = new Ti();
    var _i = new Map(),
      Fd = !0;
    function ky(e, t, n) {
      if (t && t !== n && Fd) throw new Error("Duplicate module registered for ".concat(e, " - ").concat(ae(t), " vs ").concat(ae(t.name)));
    }
    function jd(e, t) {
      let n = _i.get(t) || null;
      ky(t, n, e), _i.set(t, e);
    }
    function Vd(e) {
      return _i.get(e);
    }
    function kN(e) {
      Fd = !e;
    }
    var LN = {
        name: "custom-elements"
      },
      FN = {
        name: "no-errors-schema"
      },
      Hd = !1;
    function jN(e) {
      Hd = e;
    }
    function VN() {
      return Hd;
    }
    var $d = !1;
    function HN(e) {
      $d = e;
    }
    function $N() {
      return $d;
    }
    function Ly(e) {
      re("Must never be called in production mode");
      let n = e[ee][$];
      return n && n.constructor ? R(n.constructor) : null;
    }
    function Fy(e) {
      var _Ly;
      re("Must never be called in production mode");
      let n = (_Ly = Ly(e)) === null || _Ly === void 0 || (_Ly = _Ly.type) === null || _Ly === void 0 ? void 0 : _Ly.name;
      return n ? " (used in the '".concat(n, "' component template)") : "";
    }
    var co = "ngSkipHydration",
      jy = "ngskiphydration";
    function Bd(e) {
      let t = e.mergedAttrs;
      if (t === null) return !1;
      for (let n = 0; n < t.length; n += 2) {
        let o = t[n];
        if (typeof o == "number") return !1;
        if (typeof o == "string" && o.toLowerCase() === jy) return !0;
      }
      return !1;
    }
    function Ud(e) {
      return e.hasAttribute(co);
    }
    function Tr(e) {
      return (e.flags & 128) === 128;
    }
    function _r(e) {
      if (Tr(e)) return !0;
      let t = e.parent;
      for (; t;) {
        if (Tr(e) || Bd(t)) return !0;
        t = t.parent;
      }
      return !1;
    }
    var Ni = function (e) {
        return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e;
      }(Ni || {}),
      Vy = /^>|^->|<!--|-->|--!>|<!-$/g,
      Hy = /(<|>)/g,
      $y = "\u200B$1\u200B";
    function By(e) {
      return e.replace(Vy, t => t.replace(Hy, $y));
    }
    var yc = new Map(),
      Uy = 0;
    function qy() {
      return Uy++;
    }
    function Gy(e) {
      yc.set(e[To], e);
    }
    function qd(e) {
      return yc.get(e) || null;
    }
    function Wy(e) {
      yc.delete(e[To]);
    }
    var bi = class {
      get lView() {
        return qd(this.lViewId);
      }
      constructor(t, n, o) {
        this.lViewId = t, this.nodeIndex = n, this.native = o;
      }
    };
    function we(e) {
      let t = Un(e);
      if (t) {
        if (fe(t)) {
          let n = t,
            o,
            r,
            s;
          if (zd(e)) {
            if (o = Qd(n, e), o == -1) throw new Error("The provided component was not found in the application");
            r = e;
          } else if (zy(e)) {
            if (o = Zy(n, e), o == -1) throw new Error("The provided directive was not found in the application");
            s = Zd(o, n);
          } else if (o = Tl(n, e), o == -1) return null;
          let i = V(n[o]),
            a = Un(i),
            c = a && !Array.isArray(a) ? a : xi(n, o, i);
          if (r && c.component === void 0 && (c.component = r, ie(c.component, c)), s && c.directives === void 0) {
            c.directives = s;
            for (let l = 0; l < s.length; l++) ie(s[l], c);
          }
          ie(c.native, c), t = c;
        }
      } else {
        let n = e,
          o = n;
        for (; o = o.parentNode;) {
          let r = Un(o);
          if (r) {
            let s = Array.isArray(r) ? r : r.lView;
            if (!s) return null;
            let i = Tl(s, n);
            if (i >= 0) {
              let a = V(s[i]),
                c = xi(s, i, a);
              ie(a, c), t = c;
              break;
            }
          }
        }
      }
      return t || null;
    }
    function xi(e, t, n) {
      return new bi(e[To], t, n);
    }
    function Gd(e) {
      let t = Un(e),
        n;
      if (fe(t)) {
        let o = t,
          r = Qd(o, e);
        n = Ee(r, o);
        let s = xi(o, r, n[q]);
        s.component = e, ie(e, s), ie(s.native, s);
      } else {
        let o = t,
          r = o.lView;
        n = Ee(o.nodeIndex, r);
      }
      return n;
    }
    var Si = "__ngContext__";
    function ie(e, t) {
      fe(t) ? (e[Si] = t[To], Gy(t)) : e[Si] = t;
    }
    function Un(e) {
      let t = e[Si];
      return typeof t == "number" ? qd(t) : t || null;
    }
    function Wd(e) {
      let t = Un(e);
      return t ? fe(t) ? t : t.lView : null;
    }
    function zd(e) {
      return e && e.constructor && e.constructor.ɵcmp;
    }
    function zy(e) {
      return e && e.constructor && e.constructor.ɵdir;
    }
    function Tl(e, t) {
      let n = e[v];
      for (let o = _; o < n.bindingStartIndex; o++) if (V(e[o]) === t) return o;
      return -1;
    }
    function Qy(e) {
      if (e.child) return e.child;
      if (e.next) return e.next;
      for (; e.parent && !e.parent.next;) e = e.parent;
      return e.parent && e.parent.next;
    }
    function Qd(e, t) {
      let n = e[v].components;
      if (n) for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (Ee(r, e)[$] === t) return r;
      } else if (Ee(_, e)[$] === t) return _;
      return -1;
    }
    function Zy(e, t) {
      let n = e[v].firstChild;
      for (; n;) {
        let o = n.directiveStart,
          r = n.directiveEnd;
        for (let s = o; s < r; s++) if (e[s] === t) return n.index;
        n = Qy(n);
      }
      return -1;
    }
    function Zd(e, t) {
      let n = t[v].data[e];
      if (n.directiveStart === 0) return O;
      let o = [];
      for (let r = n.directiveStart; r < n.directiveEnd; r++) {
        let s = t[r];
        zd(s) || o.push(s);
      }
      return o;
    }
    function Yy(e, t) {
      let n = t[v].data[e],
        {
          directiveStart: o,
          componentOffset: r
        } = n;
      return r > -1 ? t[o + r] : null;
    }
    function Jy(e, t) {
      let n = e[v].data[t];
      if (n && n.localNames) {
        let o = {},
          r = n.index + 1;
        for (let s = 0; s < n.localNames.length; s += 2) o[n.localNames[s]] = e[r], r++;
        return o;
      }
      return null;
    }
    var Ai;
    function Ic(e, t) {
      return Ai(e, t);
    }
    function Xy(e) {
      Ai === void 0 && (Ai = e());
    }
    function Ao(e) {
      let t = e[B];
      return se(t) ? t[B] : t;
    }
    function Ky(e) {
      let t = fe(e) ? e : Wd(e);
      for (; t && !(t[D] & 512);) t = Ao(t);
      return t;
    }
    function eI(e) {
      return Ky(e)[$];
    }
    function Yd(e) {
      return Xd(e[to]);
    }
    function Jd(e) {
      return Xd(e[xe]);
    }
    function Xd(e) {
      for (; e !== null && !se(e);) e = e[xe];
      return e;
    }
    function Wt(e, t, n, o, r) {
      if (o != null) {
        let s,
          i = !1;
        se(o) ? s = o : fe(o) && (i = !0, o = o[q]);
        let a = V(o);
        e === 0 && n !== null ? r == null ? nf(t, n, a) : xt(t, n, a, r || null, !0) : e === 1 && n !== null ? xt(t, n, a, r || null, !0) : e === 2 ? hs(t, a, i) : e === 3 && t.destroyNode(a), s != null && fI(t, e, s, n, r);
      }
    }
    function ls(e, t) {
      return e.createText(t);
    }
    function Kd(e, t, n) {
      e.setValue(t, n);
    }
    function Dc(e, t) {
      return e.createComment(By(t));
    }
    function us(e, t, n) {
      return e.createElement(t, n);
    }
    function tI(e, t) {
      let n = t[T];
      Po(e, t, n, 2, null, null), t[q] = null, t[ge] = null;
    }
    function nI(e, t, n, o, r, s) {
      o[q] = r, o[ge] = t, Po(e, o, n, 1, r, s);
    }
    function oI(e, t) {
      Po(e, t, t[T], 2, null, null);
    }
    function rI(e) {
      let t = e[to];
      if (!t) return Hs(e[v], e);
      for (; t;) {
        let n = null;
        if (fe(t)) n = t[to];else {
          let o = t[G];
          o && (n = o);
        }
        if (!n) {
          for (; t && !t[xe] && t !== e;) fe(t) && Hs(t[v], t), t = t[B];
          t === null && (t = e), fe(t) && Hs(t[v], t), n = t && t[xe];
        }
        t = n;
      }
    }
    function sI(e, t, n, o) {
      let r = G + o,
        s = n.length;
      o > 0 && (n[r - 1][xe] = t), o < s - G ? (t[xe] = n[r], Cd(n, G + o, t)) : (n.push(t), t[xe] = null), t[B] = n;
      let i = t[Mo];
      i !== null && n !== i && iI(i, t);
      let a = t[He];
      a !== null && a.insertView(e), Ku(t), t[D] |= 128;
    }
    function iI(e, t) {
      let n = e[en],
        r = t[B][B][ee];
      t[ee] !== r && (e[D] |= tn.HasTransplantedViews), n === null ? e[en] = [t] : n.push(t);
    }
    function ef(e, t) {
      let n = e[en],
        o = n.indexOf(t);
        t[B];
      n.splice(o, 1);
    }
    function lo(e, t) {
      if (e.length <= G) return;
      let n = G + t,
        o = e[n];
      if (o) {
        let r = o[Mo];
        r !== null && r !== e && ef(r, o), t > 0 && (e[n - 1][xe] = o[xe]);
        let s = Cr(e, G + t);
        tI(o[v], o);
        let i = s[He];
        i !== null && i.detachView(s[v]), o[B] = null, o[xe] = null, o[D] &= -129;
      }
      return o;
    }
    function ds(e, t) {
      if (!(t[D] & 256)) {
        let n = t[T];
        n.destroyNode && Po(e, t, n, 3, null, null), rI(t);
      }
    }
    function Hs(e, t) {
      if (!(t[D] & 256)) {
        t[D] &= -129, t[D] |= 256, t[Mt] && signals.consumerDestroy(t[Mt]), cI(e, t), aI(e, t), t[v].type === 1 && t[T].destroy();
        let n = t[Mo];
        if (n !== null && se(t[B])) {
          n !== t[B] && ef(n, t);
          let o = t[He];
          o !== null && o.detachView(e);
        }
        Wy(t);
      }
    }
    function aI(e, t) {
      let n = e.cleanup,
        o = t[Xt];
      if (n !== null) for (let s = 0; s < n.length - 1; s += 2) if (typeof n[s] == "string") {
        let i = n[s + 3];
        i >= 0 ? o[i]() : o[-i].unsubscribe(), s += 2;
      } else {
        let i = o[n[s + 1]];
        n[s].call(i);
      }
      o !== null && (t[Xt] = null);
      let r = t[dt];
      if (r !== null) {
        t[dt] = null;
        for (let s = 0; s < r.length; s++) {
          let i = r[s];
          i();
        }
      }
    }
    function cI(e, t) {
      let n;
      if (e != null && (n = e.destroyHooks) != null) for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof Nt)) {
          let s = n[o + 1];
          if (Array.isArray(s)) for (let i = 0; i < s.length; i += 2) {
            let a = r[s[i]],
              c = s[i + 1];
            je(4, a, c);
            try {
              c.call(a);
            } finally {
              je(5, a, c);
            }
          } else {
            je(4, r, s);
            try {
              s.call(r);
            } finally {
              je(5, r, s);
            }
          }
        }
      }
    }
    function wc(e, t, n) {
      return tf(e, t.parent, n);
    }
    function tf(e, t, n) {
      let o = t;
      for (; o !== null && o.type & 40;) t = o, o = t.parent;
      if (o === null) return n[q];
      {
        let {
          componentOffset: r
        } = o;
        if (r > -1) {
          let {
            encapsulation: s
          } = e.data[o.directiveStart + r];
          if (s === Ct.None || s === Ct.Emulated) return null;
        }
        return me(o, n);
      }
    }
    function xt(e, t, n, o, r) {
      e.insertBefore(t, n, o, r);
    }
    function nf(e, t, n) {
      e.appendChild(t, n);
    }
    function _l(e, t, n, o, r) {
      o !== null ? xt(e, t, n, o, r) : nf(e, t, n);
    }
    function lI(e, t, n, o) {
      e.removeChild(t, n, o);
    }
    function fs(e, t) {
      return e.parentNode(t);
    }
    function uI(e, t) {
      return e.nextSibling(t);
    }
    function of(e, t, n) {
      return sf(e, t, n);
    }
    function rf(e, t, n) {
      return e.type & 40 ? me(e, n) : null;
    }
    var sf = rf,
      Pi;
    function af(e, t) {
      sf = e, Pi = t;
    }
    function ps(e, t, n, o) {
      let r = wc(e, o, t),
        s = t[T],
        i = o.parent || t[ge],
        a = of(i, o, t);
      if (r != null) if (Array.isArray(n)) for (let c = 0; c < n.length; c++) _l(s, r, n[c], a, !1);else _l(s, r, n, a, !1);
      Pi !== void 0 && Pi(s, o, t, n, r);
    }
    function qn(e, t) {
      if (t !== null) {
        let n = t.type;
        if (n & 3) return me(t, e);
        if (n & 4) return Oi(-1, e[t.index]);
        if (n & 8) {
          let o = t.child;
          if (o !== null) return qn(e, o);
          {
            let r = e[t.index];
            return se(r) ? Oi(-1, r) : V(r);
          }
        } else {
          if (n & 32) return Ic(t, e)() || V(e[t.index]);
          {
            let o = cf(e, t);
            if (o !== null) {
              if (Array.isArray(o)) return o[0];
              let r = Ao(e[ee]);
              return qn(r, o);
            } else return qn(e, t.next);
          }
        }
      }
      return null;
    }
    function cf(e, t) {
      if (t !== null) {
        let o = e[ee][ge],
          r = t.projection;
        return o.projection[r];
      }
      return null;
    }
    function Oi(e, t) {
      let n = G + e + 1;
      if (n < t.length) {
        let o = t[n],
          r = o[v].firstChild;
        if (r !== null) return qn(o, r);
      }
      return t[Be];
    }
    function hs(e, t, n) {
      let o = fs(e, t);
      o && lI(e, o, t, n);
    }
    function lf(e) {
      e.textContent = "";
    }
    function Ec(e, t, n, o, r, s, i) {
      for (; n != null;) {
        let a = o[n.index],
          c = n.type;
        if (i && t === 0 && (a && ie(V(a), o), n.flags |= 2), (n.flags & 32) !== 32) if (c & 8) Ec(e, t, n.child, o, r, s, !1), Wt(t, e, r, a, s);else if (c & 32) {
          let l = Ic(n, o),
            u;
          for (; u = l();) Wt(t, e, r, u, s);
          Wt(t, e, r, a, s);
        } else c & 16 ? uf(e, t, o, n, r, s) : Wt(t, e, r, a, s);
        n = i ? n.projectionNext : n.next;
      }
    }
    function Po(e, t, n, o, r, s) {
      Ec(n, o, e.firstChild, t, r, s, !1);
    }
    function dI(e, t, n) {
      let o = t[T],
        r = wc(e, n, t),
        s = n.parent || t[ge],
        i = of(s, n, t);
      uf(o, 0, t, n, r, i);
    }
    function uf(e, t, n, o, r, s) {
      let i = n[ee],
        c = i[ge].projection[o.projection];
      if (Array.isArray(c)) for (let l = 0; l < c.length; l++) {
        let u = c[l];
        Wt(t, e, r, u, s);
      } else {
        let l = c,
          u = i[B];
        Tr(o) && (l.flags |= 128), Ec(e, t, l, u, r, s, !0);
      }
    }
    function fI(e, t, n, o, r) {
      let s = n[Be],
        i = V(n);
      s !== i && Wt(t, e, o, s, r);
      for (let a = G; a < n.length; a++) {
        let c = n[a];
        Po(c[v], c, e, t, o, s);
      }
    }
    function pI(e, t, n, o, r) {
      if (t) r ? e.addClass(n, o) : e.removeClass(n, o);else {
        let s = o.indexOf("-") === -1 ? void 0 : Ni.DashCase;
        r == null ? e.removeStyle(n, o, s) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), s |= Ni.Important), e.setStyle(n, o, r, s));
      }
    }
    function hI(e, t, n) {
      e.setAttribute(t, "style", n);
    }
    function df(e, t, n) {
      n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
    }
    function ff(e, t, n) {
      let {
        mergedAttrs: o,
        classes: r,
        styles: s
      } = n;
      o !== null && di(e, t, o), r !== null && df(e, t, r), s !== null && hI(e, t, s);
    }
    var Yo;
    function pf() {
      if (Yo === void 0 && (Yo = null, ue.trustedTypes)) try {
        Yo = ue.trustedTypes.createPolicy("angular", {
          createHTML: e => e,
          createScript: e => e,
          createScriptURL: e => e
        });
      } catch {}
      return Yo;
    }
    function En(e) {
      var _pf;
      return ((_pf = pf()) === null || _pf === void 0 ? void 0 : _pf.createHTML(e)) || e;
    }
    function gI(e) {
      var _pf2;
      return ((_pf2 = pf()) === null || _pf2 === void 0 ? void 0 : _pf2.createScriptURL(e)) || e;
    }
    function mI(e, t, n) {
      let o = g(),
        r = H(),
        s = me(r, o);
      if (r.type === 2 && t.toLowerCase() === "iframe") {
        let i = s;
        i.src = "", i.srcdoc = En(""), hs(o[T], i);
        let a = !1;
        throw new w(-910, a);
      }
      return e;
    }
    var Jo;
    function Cc() {
      if (Jo === void 0 && (Jo = null, ue.trustedTypes)) try {
        Jo = ue.trustedTypes.createPolicy("angular#unsafe-bypass", {
          createHTML: e => e,
          createScript: e => e,
          createScriptURL: e => e
        });
      } catch {}
      return Jo;
    }
    function Nl(e) {
      var _Cc;
      return ((_Cc = Cc()) === null || _Cc === void 0 ? void 0 : _Cc.createHTML(e)) || e;
    }
    function bl(e) {
      var _Cc2;
      return ((_Cc2 = Cc()) === null || _Cc2 === void 0 ? void 0 : _Cc2.createScript(e)) || e;
    }
    function xl(e) {
      var _Cc3;
      return ((_Cc3 = Cc()) === null || _Cc3 === void 0 ? void 0 : _Cc3.createScriptURL(e)) || e;
    }
    var et = class {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return "SafeValue must use [property]=binding: ".concat(this.changingThisBreaksApplicationSecurity, " (see ").concat(bu, ")");
        }
      },
      Ri = class extends et {
        getTypeName() {
          return "HTML";
        }
      },
      ki = class extends et {
        getTypeName() {
          return "Style";
        }
      },
      Li = class extends et {
        getTypeName() {
          return "Script";
        }
      },
      Fi = class extends et {
        getTypeName() {
          return "URL";
        }
      },
      ji = class extends et {
        getTypeName() {
          return "ResourceURL";
        }
      };
    function vt(e) {
      return e instanceof et ? e.changingThisBreaksApplicationSecurity : e;
    }
    function Oo(e, t) {
      let n = vI(e);
      if (n != null && n !== t) {
        if (n === "ResourceURL" && t === "URL") return !0;
        throw new Error("Required a safe ".concat(t, ", got a ").concat(n, " (see ").concat(bu, ")"));
      }
      return n === t;
    }
    function vI(e) {
      return e instanceof et && e.getTypeName() || null;
    }
    function BN(e) {
      return new Ri(e);
    }
    function UN(e) {
      return new ki(e);
    }
    function qN(e) {
      return new Li(e);
    }
    function GN(e) {
      return new Fi(e);
    }
    function WN(e) {
      return new ji(e);
    }
    function hf(e) {
      let t = new Hi(e);
      return yI() ? new Vi(t) : t;
    }
    var Vi = class {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = "<body><remove></remove>" + t;
          try {
            let n = new window.DOMParser().parseFromString(En(t), "text/html").body;
            return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.removeChild(n.firstChild), n);
          } catch {
            return null;
          }
        }
      },
      Hi = class {
        constructor(t) {
          this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");
        }
        getInertBodyElement(t) {
          let n = this.inertDocument.createElement("template");
          return n.innerHTML = En(t), n;
        }
      };
    function yI() {
      try {
        return !!new window.DOMParser().parseFromString(En(""), "text/html");
      } catch {
        return !1;
      }
    }
    var II = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
    function Mc(e) {
      return e = String(e), e.match(II) ? e : "unsafe:" + e;
    }
    function st(e) {
      let t = {};
      for (let n of e.split(",")) t[n] = !0;
      return t;
    }
    function Ro() {
      let t = {};
      for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        e[_key7] = arguments[_key7];
      }
      for (let n of e) for (let o in n) n.hasOwnProperty(o) && (t[o] = !0);
      return t;
    }
    var gf = st("area,br,col,hr,img,wbr"),
      mf = st("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      vf = st("rp,rt"),
      DI = Ro(vf, mf),
      wI = Ro(mf, st("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),
      EI = Ro(vf, st("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),
      $i = Ro(gf, wI, EI, DI),
      Tc = st("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
      CI = st("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),
      MI = st("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),
      yf = Ro(Tc, CI, MI),
      TI = st("script,style,template"),
      Bi = class {
        constructor() {
          this.sanitizedSomething = !1, this.buf = [];
        }
        sanitizeChildren(t) {
          let n = t.firstChild,
            o = !0;
          for (; n;) {
            if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
              n = n.firstChild;
              continue;
            }
            for (; n;) {
              n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
              let r = this.checkClobberedElement(n, n.nextSibling);
              if (r) {
                n = r;
                break;
              }
              n = this.checkClobberedElement(n, n.parentNode);
            }
          }
          return this.buf.join("");
        }
        startElement(t) {
          let n = t.nodeName.toLowerCase();
          if (!$i.hasOwnProperty(n)) return this.sanitizedSomething = !0, !TI.hasOwnProperty(n);
          this.buf.push("<"), this.buf.push(n);
          let o = t.attributes;
          for (let r = 0; r < o.length; r++) {
            let s = o.item(r),
              i = s.name,
              a = i.toLowerCase();
            if (!yf.hasOwnProperty(a)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let c = s.value;
            Tc[a] && (c = Mc(c)), this.buf.push(" ", i, "=\"", Sl(c), "\"");
          }
          return this.buf.push(">"), !0;
        }
        endElement(t) {
          let n = t.nodeName.toLowerCase();
          $i.hasOwnProperty(n) && !gf.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
        }
        chars(t) {
          this.buf.push(Sl(t));
        }
        checkClobberedElement(t, n) {
          if (n && (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: ".concat(t.outerHTML));
          return n;
        }
      },
      _I = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      NI = /([^\#-~ |!])/g;
    function Sl(e) {
      return e.replace(/&/g, "&amp;").replace(_I, function (t) {
        let n = t.charCodeAt(0),
          o = t.charCodeAt(1);
        return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";";
      }).replace(NI, function (t) {
        return "&#" + t.charCodeAt(0) + ";";
      }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    var Xo;
    function bI(e, t) {
      let n = null;
      try {
        Xo = Xo || hf(e);
        let o = t ? String(t) : "";
        n = Xo.getInertBodyElement(o);
        let r = 5,
          s = o;
        do {
          if (r === 0) throw new Error("Failed to sanitize html because the input is unstable");
          r--, o = s, s = n.innerHTML, n = Xo.getInertBodyElement(o);
        } while (o !== s);
        let a = new Bi().sanitizeChildren(Ui(n) || n);
        return En(a);
      } finally {
        if (n) {
          let o = Ui(n) || n;
          for (; o.firstChild;) o.removeChild(o.firstChild);
        }
      }
    }
    function Ui(e) {
      return "content" in e && xI(e) ? e.content : null;
    }
    function xI(e) {
      return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
    }
    var Cn = function (e) {
      return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e;
    }(Cn || {});
    function SI(e) {
      let t = ko();
      return t ? Nl(t.sanitize(Cn.HTML, e) || "") : Oo(e, "HTML") ? Nl(vt(e)) : bI(wn(), M(e));
    }
    function AI(e) {
      let t = ko();
      return t ? t.sanitize(Cn.STYLE, e) || "" : Oo(e, "Style") ? vt(e) : M(e);
    }
    function If(e) {
      let t = ko();
      return t ? t.sanitize(Cn.URL, e) || "" : Oo(e, "URL") ? vt(e) : Mc(M(e));
    }
    function Df(e) {
      let t = ko();
      if (t) return xl(t.sanitize(Cn.RESOURCE_URL, e) || "");
      if (Oo(e, "ResourceURL")) return xl(vt(e));
      throw new w(904, !1);
    }
    function PI(e) {
      let t = ko();
      if (t) return bl(t.sanitize(Cn.SCRIPT, e) || "");
      if (Oo(e, "Script")) return bl(vt(e));
      throw new w(905, !1);
    }
    function OI(e) {
      return En(e[0]);
    }
    function RI(e) {
      return gI(e[0]);
    }
    function kI(e, t) {
      return t === "src" && (e === "embed" || e === "frame" || e === "iframe" || e === "media" || e === "script") || t === "href" && (e === "base" || e === "link") ? Df : If;
    }
    function LI(e, t, n) {
      return kI(t, n)(e);
    }
    function ko() {
      let e = g();
      return e && e[Kt].sanitizer;
    }
    function zN(e) {
      return e;
    }
    function FI() {
      let e = new gs();
      return L(kd) === "browser" && (e.store = jI(wn(), L(by))), e;
    }
    var gs = (_e3 => {
      class e {
        constructor() {
          this.store = {}, this.onSerializeCallbacks = {};
        }
        get(n, o) {
          return this.store[n] !== void 0 ? this.store[n] : o;
        }
        set(n, o) {
          this.store[n] = o;
        }
        remove(n) {
          delete this.store[n];
        }
        hasKey(n) {
          return this.store.hasOwnProperty(n);
        }
        get isEmpty() {
          return Object.keys(this.store).length === 0;
        }
        onSerialize(n, o) {
          this.onSerializeCallbacks[n] = o;
        }
        toJson() {
          for (let n in this.onSerializeCallbacks) if (this.onSerializeCallbacks.hasOwnProperty(n)) try {
            this.store[n] = this.onSerializeCallbacks[n]();
          } catch (o) {
            console.warn("Exception in onSerialize callback: ", o);
          }
          return JSON.stringify(this.store).replace(/</g, "\\u003C");
        }
      }
      _e3 = e;
      _e3.ɵprov = U({
        token: _e3,
        providedIn: "root",
        factory: FI
      });
      return e;
    })();
    function jI(e, t) {
      let n = e.getElementById(t + "-state");
      if (n !== null && n !== void 0 && n.textContent) try {
        return JSON.parse(n.textContent);
      } catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
      }
      return {};
    }
    var _c = "h",
      Nc = "b",
      uo = function (e) {
        return e.FirstChild = "f", e.NextSibling = "n", e;
      }(uo || {}),
      qi = "e",
      Gi = "t",
      fo = "c",
      Nr = "x",
      an = "r",
      Wi = "i",
      zi = "n",
      ur = "d",
      VI = "__nghData__",
      bc = VI,
      Gn = "ngh",
      HI = "nghm",
      wf = (e, t, n) => null;
    function $I(e, t) {
      var _e$firstChild;
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      let o = e.getAttribute(Gn);
      if (o == null) return null;
      let [r, s] = o.split("|");
      if (o = n ? s : r, !o) return null;
      let i = n ? r : s ? "|".concat(s) : "",
        a = {};
      if (o !== "") {
        let l = t.get(gs, null, {
          optional: !0
        });
        l !== null && (a = l.get(bc, [])[Number(o)]);
      }
      let c = {
        data: a,
        firstChild: (_e$firstChild = e.firstChild) !== null && _e$firstChild !== void 0 ? _e$firstChild : null
      };
      return n && (c.firstChild = e, ms(c, 0, e.nextSibling)), i ? e.setAttribute(Gn, i) : e.removeAttribute(Gn), c;
    }
    function BI() {
      wf = $I;
    }
    function xc(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      return wf(e, t, n);
    }
    function Ef(e) {
      let t = e._lView;
      return t[v].type === 2 ? null : (Ka(t) && (t = t[_]), t);
    }
    function UI(e) {
      var _e$textContent;
      return (_e$textContent = e.textContent) === null || _e$textContent === void 0 ? void 0 : _e$textContent.replace(/\s/gm, "");
    }
    function qI(e) {
      let t = wn(),
        n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, {
          acceptNode(s) {
            let i = UI(s);
            return i === "ngetn" || i === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
        }),
        o,
        r = [];
      for (; o = n.nextNode();) r.push(o);
      for (let s of r) s.textContent === "ngetn" ? s.replaceWith(t.createTextNode("")) : s.remove();
    }
    function ms(e, t, n) {
      var _e$segmentHeads;
      (_e$segmentHeads = e.segmentHeads) !== null && _e$segmentHeads !== void 0 ? _e$segmentHeads : e.segmentHeads = {}, e.segmentHeads[t] = n;
    }
    function Qi(e, t) {
      var _e$segmentHeads$t, _e$segmentHeads2;
      return (_e$segmentHeads$t = (_e$segmentHeads2 = e.segmentHeads) === null || _e$segmentHeads2 === void 0 ? void 0 : _e$segmentHeads2[t]) !== null && _e$segmentHeads$t !== void 0 ? _e$segmentHeads$t : null;
    }
    function GI(e, t) {
      var _n$qi$t, _n$qi, _n$fo;
      let n = e.data,
        o = (_n$qi$t = (_n$qi = n[qi]) === null || _n$qi === void 0 ? void 0 : _n$qi[t]) !== null && _n$qi$t !== void 0 ? _n$qi$t : null;
      return o === null && (_n$fo = n[fo]) !== null && _n$fo !== void 0 && _n$fo[t] && (o = Sc(e, t)), o;
    }
    function Cf(e, t) {
      var _e$data$fo$t, _e$data$fo;
      return (_e$data$fo$t = (_e$data$fo = e.data[fo]) === null || _e$data$fo === void 0 ? void 0 : _e$data$fo[t]) !== null && _e$data$fo$t !== void 0 ? _e$data$fo$t : null;
    }
    function Sc(e, t) {
      var _Cf;
      let n = (_Cf = Cf(e, t)) !== null && _Cf !== void 0 ? _Cf : [],
        o = 0;
      for (let r of n) {
        var _r$Nr;
        o += r[an] * ((_r$Nr = r[Nr]) !== null && _r$Nr !== void 0 ? _r$Nr : 1);
      }
      return o;
    }
    function vs(e, t) {
      var _e$disconnectedNodes;
      if (typeof e.disconnectedNodes > "u") {
        let n = e.data[ur];
        e.disconnectedNodes = n ? new Set(n) : null;
      }
      return !!((_e$disconnectedNodes = e.disconnectedNodes) !== null && _e$disconnectedNodes !== void 0 && _e$disconnectedNodes.has(t));
    }
    var Zi = class {},
      br = class {};
    function WI(e) {
      let t = Error("No component factory found for ".concat(ae(e), "."));
      return t[zI] = e, t;
    }
    var zI = "ngComponent";
    var Yi = class {
        resolveComponentFactory(t) {
          throw WI(t);
        }
      },
      ys = (_e4 => {
        class e {}
        _e4 = e;
        _e4.NULL = new Yi();
        return e;
      })();
    function QI() {
      return Mn(F(), g());
    }
    function Mn(e, t) {
      return new Is(me(e, t));
    }
    var Is = (_e5 => {
      class e {
        constructor(n) {
          this.nativeElement = n;
        }
      }
      _e5 = e;
      _e5.__NG_ELEMENT_ID__ = QI;
      return e;
    })();
    function ZI(e) {
      return e instanceof Is ? e.nativeElement : e;
    }
    var Ji = class {},
      QN = (_e6 => {
        class e {
          constructor() {
            this.destroyNode = null;
          }
        }
        _e6 = e;
        _e6.__NG_ELEMENT_ID__ = () => YI();
        return e;
      })();
    function YI() {
      let e = g(),
        t = F(),
        n = Ee(t.index, e);
      return (fe(n) ? n : e)[T];
    }
    var JI = (_e7 => {
        class e {}
        _e7 = e;
        _e7.ɵprov = U({
          token: _e7,
          providedIn: "root",
          factory: () => null
        });
        return e;
      })(),
      Xi = class {
        constructor(t) {
          this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".");
        }
      },
      XI = new Xi("17.0.7"),
      $s = {};
    function ZN(e) {
      return typeof e == "function" && e[signals.SIGNAL] !== void 0;
    }
    function YN(e, t) {
      let n = signals.createComputed(e);
      return t !== null && t !== void 0 && t.equal && (n[signals.SIGNAL].equal = t.equal), n;
    }
    function JN(e, t) {
      let n = signals.createSignal(e),
        o = n[signals.SIGNAL];
      return t !== null && t !== void 0 && t.equal && (o.equal = t.equal), n.set = r => signals.signalSetFn(o, r), n.update = r => signals.signalUpdateFn(o, r), n.asReadonly = KI.bind(n), n;
    }
    function KI() {
      let e = this[signals.SIGNAL];
      if (e.readonlyFn === void 0) {
        let t = () => this();
        t[signals.SIGNAL] = e, e.readonlyFn = t;
      }
      return e.readonlyFn;
    }
    function XN(e) {
      let t = signals.setActiveConsumer(null);
      try {
        return e();
      } finally {
        signals.setActiveConsumer(t);
      }
    }
    function xr(e) {
      return Ac(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1;
    }
    function eD(e, t, n) {
      let o = e[Symbol.iterator](),
        r = t[Symbol.iterator]();
      for (;;) {
        let s = o.next(),
          i = r.next();
        if (s.done && i.done) return !0;
        if (s.done || i.done || !n(s.value, i.value)) return !1;
      }
    }
    function tD(e, t) {
      if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);else {
        let n = e[Symbol.iterator](),
          o;
        for (; !(o = n.next()).done;) t(o.value);
      }
    }
    function Ac(e) {
      return e !== null && (typeof e == "function" || typeof e == "object");
    }
    var Sr = class {
        constructor() {}
        supports(t) {
          return xr(t);
        }
        create(t) {
          return new Ki(t);
        }
      },
      nD = (e, t) => t,
      Ki = class {
        constructor(t) {
          this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || nD;
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; n !== null; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            o = this._removalsHead,
            r = 0,
            s = null;
          for (; n || o;) {
            let i = !o || n && n.currentIndex < Al(o, r, s) ? n : o,
              a = Al(i, r, s),
              c = i.currentIndex;
            if (i === o) r--, o = o._nextRemoved;else if (n = n._next, i.previousIndex == null) r++;else {
              s || (s = []);
              let l = a - r,
                u = c - r;
              if (l != u) {
                for (let f = 0; f < l; f++) {
                  let p = f < s.length ? s[f] : s[f] = 0,
                    h = p + f;
                  u <= h && h < l && (s[f] = p + 1);
                }
                let d = i.previousIndex;
                s[d] = u - l;
              }
            }
            a !== c && t(i, a, c);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; n !== null; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; n !== null; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange) t(n);
        }
        diff(t) {
          if (t == null && (t = []), !xr(t)) throw new w(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._itHead,
            o = !1,
            r,
            s,
            i;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let a = 0; a < this.length; a++) s = t[a], i = this._trackByFn(a, s), n === null || !Object.is(n.trackById, i) ? (n = this._mismatch(n, s, i, a), o = !0) : (o && (n = this._verifyReinsertion(n, s, i, a)), Object.is(n.item, s) || this._addIdentityChange(n, s)), n = n._next;
          } else r = 0, tD(t, a => {
            i = this._trackByFn(r, a), n === null || !Object.is(n.trackById, i) ? (n = this._mismatch(n, a, i, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, i, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++;
          }), this.length = r;
          return this._truncate(n), this.collection = t, this.isDirty;
        }
        get isDirty() {
          return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null;
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (t = this._previousItHead = this._itHead; t !== null; t = t._next) t._nextPrevious = t._next;
            for (t = this._additionsHead; t !== null; t = t._nextAdded) t.previousIndex = t.currentIndex;
            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved) t.previousIndex = t.currentIndex;
            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
          }
        }
        _mismatch(t, n, o, r) {
          let s;
          return t === null ? s = this._itTail : (s = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, s, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, s, r)) : t = this._addAfter(new ea(n, o), s, r)), t;
        }
        _verifyReinsertion(t, n, o, r) {
          let s = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null);
          return s !== null ? t = this._reinsertAfter(s, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t;
        }
        _truncate(t) {
          for (; t !== null;) {
            let n = t._next;
            this._addToRemovals(this._unlink(t)), t = n;
          }
          this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, o) {
          this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
          let r = t._prevRemoved,
            s = t._nextRemoved;
          return r === null ? this._removalsHead = s : r._nextRemoved = s, s === null ? this._removalsTail = r : s._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t;
        }
        _moveAfter(t, n, o) {
          return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t;
        }
        _addAfter(t, n, o) {
          return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t;
        }
        _insertAfter(t, n, o) {
          let r = n === null ? this._itHead : n._next;
          return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Ar()), this._linkedRecords.put(t), t.currentIndex = o, t;
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          this._linkedRecords !== null && this._linkedRecords.remove(t);
          let n = t._prev,
            o = t._next;
          return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t;
        }
        _addToMoves(t, n) {
          return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t;
        }
        _addToRemovals(t) {
          return this._unlinkedRecords === null && (this._unlinkedRecords = new Ar()), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t;
        }
        _addIdentityChange(t, n) {
          return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t;
        }
      },
      ea = class {
        constructor(t, n) {
          this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null;
        }
      },
      ta = class {
        constructor() {
          this._head = null, this._tail = null;
        }
        add(t) {
          this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t);
        }
        get(t, n) {
          let o;
          for (o = this._head; o !== null; o = o._nextDup) if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t)) return o;
          return null;
        }
        remove(t) {
          let n = t._prevDup,
            o = t._nextDup;
          return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null;
        }
      },
      Ar = class {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          let n = t.trackById,
            o = this.map.get(n);
          o || (o = new ta(), this.map.set(n, o)), o.add(t);
        }
        get(t, n) {
          let o = t,
            r = this.map.get(o);
          return r ? r.get(t, n) : null;
        }
        remove(t) {
          let n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return this.map.size === 0;
        }
        clear() {
          this.map.clear();
        }
      };
    function Al(e, t, n) {
      let o = e.previousIndex;
      if (o === null) return o;
      let r = 0;
      return n && o < n.length && (r = n[o]), o + t + r;
    }
    var Pr = class {
        constructor() {}
        supports(t) {
          return t instanceof Map || Ac(t);
        }
        create() {
          return new na();
        }
      },
      na = class {
        constructor() {
          this._records = new Map(), this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null;
        }
        get isDirty() {
          return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null;
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; n !== null; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; n !== null; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; n !== null; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (!t) t = new Map();else if (!(t instanceof Map || Ac(t))) throw new w(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (this._appendAfter = null, this._forEach(t, (o, r) => {
            if (n && n.key === r) this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;else {
              let s = this._getOrCreateRecordForKey(r, o);
              n = this._insertBeforeOrAppend(n, s);
            }
          }), n) {
            n._prev && (n._prev._next = null), this._removalsHead = n;
            for (let o = n; o !== null; o = o._nextRemoved) o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
          }
          return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty;
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            let o = t._prev;
            return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
          }
          return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null;
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            let r = this._records.get(t);
            this._maybeAddToChanges(r, n);
            let s = r._prev,
              i = r._next;
            return s && (s._next = i), i && (i._prev = s), r._next = null, r._prev = null, r;
          }
          let o = new oa(t);
          return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o;
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next) t._nextPrevious = t._next;
            for (t = this._changesHead; t !== null; t = t._nextChanged) t.previousValue = t.currentValue;
            for (t = this._additionsHead; t != null; t = t._nextAdded) t.previousValue = t.currentValue;
            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t));
        }
        _addToAdditions(t) {
          this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t);
        }
        _addToChanges(t) {
          this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t);
        }
        _forEach(t, n) {
          t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o));
        }
      },
      oa = class {
        constructor(t) {
          this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null;
        }
      };
    function Pl() {
      return new Mf([new Sr()]);
    }
    var Mf = (_e8 => {
      class e {
        constructor(n) {
          this.factories = n;
        }
        static create(n, o) {
          if (o != null) {
            let r = o.factories.slice();
            n = n.concat(r);
          }
          return new e(n);
        }
        static extend(n) {
          return {
            provide: e,
            useFactory: o => e.create(n, o || Pl()),
            deps: [[e, new fc(), new dc()]]
          };
        }
        find(n) {
          let o = this.factories.find(r => r.supports(n));
          if (o != null) return o;
          throw new w(901, !1);
        }
      }
      _e8 = e;
      _e8.ɵprov = U({
        token: _e8,
        providedIn: "root",
        factory: Pl
      });
      return e;
    })();
    function Ol() {
      return new Tf([new Pr()]);
    }
    var Tf = (_e9 => {
      class e {
        constructor(n) {
          this.factories = n;
        }
        static create(n, o) {
          if (o) {
            let r = o.factories.slice();
            n = n.concat(r);
          }
          return new e(n);
        }
        static extend(n) {
          return {
            provide: e,
            useFactory: o => e.create(n, o || Ol()),
            deps: [[e, new fc(), new dc()]]
          };
        }
        find(n) {
          let o = this.factories.find(r => r.supports(n));
          if (o) return o;
          throw new w(901, !1);
        }
      }
      _e9 = e;
      _e9.ɵprov = U({
        token: _e9,
        providedIn: "root",
        factory: Ol
      });
      return e;
    })();
    function oD(e, t) {
      let n = xr(e),
        o = xr(t);
      return n && o ? eD(e, t, oD) : !n && e && (typeof e == "object" || typeof e == "function") && !o && t && (typeof t == "object" || typeof t == "function") ? !0 : Object.is(e, t);
    }
    function po(e, t, n, o) {
      let r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
      for (; n !== null;) {
        let s = t[n.index];
        s !== null && o.push(V(s)), se(s) && _f(s, o);
        let i = n.type;
        if (i & 8) po(e, t, n.child, o);else if (i & 32) {
          let a = Ic(n, t),
            c;
          for (; c = a();) o.push(c);
        } else if (i & 16) {
          let a = cf(t, n);
          if (Array.isArray(a)) o.push(...a);else {
            let c = Ao(t[ee]);
            po(c[v], c, a, o, !0);
          }
        }
        n = r ? n.projectionNext : n.next;
      }
      return o;
    }
    function _f(e, t) {
      for (let n = G; n < e.length; n++) {
        let o = e[n],
          r = o[v].firstChild;
        r !== null && po(o[v], o, r, t);
      }
      e[Be] !== e[q] && t.push(e[Be]);
    }
    var Nf = [];
    function rD(e) {
      var _e$Mt2;
      return (_e$Mt2 = e[Mt]) !== null && _e$Mt2 !== void 0 ? _e$Mt2 : sD(e);
    }
    function sD(e) {
      var _Nf$pop;
      let t = (_Nf$pop = Nf.pop()) !== null && _Nf$pop !== void 0 ? _Nf$pop : Object.create(aD);
      return t.lView = e, t;
    }
    function iD(e) {
      e.lView[Mt] !== e && (e.lView = null, Nf.push(e));
    }
    var aD = Ft(ne({}, signals.REACTIVE_NODE), {
        consumerIsAlwaysLive: !0,
        consumerMarkedDirty: e => {
          ts(e.lView);
        },
        consumerOnSignalRead() {
          this.lView[Mt] = this;
        }
      }),
      cD = "ngOriginalError";
    function Bs(e) {
      return e[cD];
    }
    var tt = class {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          let n = this._findOriginalError(t);
          this._console.error("ERROR", t), n && this._console.error("ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && Bs(t);
          for (; n && Bs(n);) n = Bs(n);
          return n || null;
        }
      },
      bf = new P("", {
        providedIn: "root",
        factory: () => L(tt).handleError.bind(void 0)
      }),
      Ko = new P(""),
      xf = !1,
      Sf = new P("", {
        providedIn: "root",
        factory: () => xf
      });
    var N = {};
    function lD(e) {
      Af(S(), g(), ce() + e, !1);
    }
    function Af(e, t, n, o) {
      if (!o) if ((t[D] & 3) === 3) {
        let s = e.preOrderCheckHooks;
        s !== null && ir(t, s, n);
      } else {
        let s = e.preOrderHooks;
        s !== null && ar(t, s, 0, n);
      }
      _t(n);
    }
    function Lo(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x.Default;
      let n = g();
      if (n === null) return de(e, t);
      let o = F();
      return yd(o, n, A(e), t);
    }
    function uD() {
      let e = "invalid";
      throw new Error(e);
    }
    function dD(e, t) {
      let n = e.hostBindingOpCodes;
      if (n !== null) try {
        for (let o = 0; o < n.length; o++) {
          let r = n[o];
          if (r < 0) _t(~r);else {
            let s = r,
              i = n[++o],
              a = n[++o];
            wv(i, s);
            let c = t[s];
            a(2, c);
          }
        }
      } finally {
        _t(-1);
      }
    }
    function Ds(e, t, n, o, r, s, i, a, c, l, u) {
      let d = t.blueprint.slice();
      return d[q] = r, d[D] = o | 4 | 128 | 8, (l !== null || e && e[D] & 2048) && (d[D] |= 2048), Yu(d), d[B] = d[gn] = e, d[$] = n, d[Kt] = i || e && e[Kt], d[T] = a || e && e[T], d[he] = c || e && e[he] || null, d[ge] = s, d[To] = qy(), d[Ae] = u, d[Bu] = l, d[ee] = t.type == 2 ? e[ee] : d, d;
    }
    function Tn(e, t, n, o, r) {
      let s = e.data[t];
      if (s === null) s = Pc(e, t, n, o, r), Dv() && (s.flags |= 32);else if (s.type & 64) {
        s.type = n, s.value = o, s.attrs = r;
        let i = oo();
        s.injectorIndex = i === null ? -1 : i.injectorIndex;
      }
      return qe(s, !0), s;
    }
    function Pc(e, t, n, o, r) {
      let s = td(),
        i = oc(),
        a = i ? s : s && s.parent,
        c = e.data[t] = yD(e, a, n, t, o, r);
      return e.firstChild === null && (e.firstChild = c), s !== null && (i ? s.child == null && c.parent !== null && (s.child = c) : s.next === null && (s.next = c, c.prev = s)), c;
    }
    function Fo(e, t, n, o) {
      if (n === 0) return -1;
      let r = t.length;
      for (let s = 0; s < n; s++) t.push(o), e.blueprint.push(o), e.data.push(null);
      return r;
    }
    function Pf(e, t, n, o, r) {
      let s = ce(),
        i = o & 2;
      try {
        _t(-1), i && t.length > _ && Af(e, t, _, !1), je(i ? 2 : 0, r), n(o, r);
      } finally {
        _t(s), je(i ? 3 : 1, r);
      }
    }
    function Oc(e, t, n) {
      if (Xa(t)) {
        let o = signals.setActiveConsumer(null);
        try {
          let r = t.directiveStart,
            s = t.directiveEnd;
          for (let i = r; i < s; i++) {
            let a = e.data[i];
            a.contentQueries && a.contentQueries(1, n[i], i);
          }
        } finally {
          signals.setActiveConsumer(o);
        }
      }
    }
    function Rc(e, t, n) {
      ed() && (MD(e, t, n, me(n, t)), (n.flags & 64) === 64 && Lf(e, t, n));
    }
    function kc(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : me;
      let o = t.localNames;
      if (o !== null) {
        let r = t.index + 1;
        for (let s = 0; s < o.length; s += 2) {
          let i = o[s + 1],
            a = i === -1 ? n(t, e) : e[i];
          e[r++] = a;
        }
      }
    }
    function Of(e) {
      let t = e.tView;
      return t === null || t.incompleteFirstPass ? e.tView = Lc(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t;
    }
    function Lc(e, t, n, o, r, s, i, a, c, l, u) {
      let d = _ + o,
        f = d + r,
        p = fD(d, f),
        h = typeof l == "function" ? l() : l;
      return p[v] = {
        type: e,
        blueprint: p,
        template: n,
        queries: null,
        viewQuery: a,
        declTNode: t,
        data: p.slice().fill(null, d),
        bindingStartIndex: d,
        expandoStartIndex: f,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: typeof s == "function" ? s() : s,
        pipeRegistry: typeof i == "function" ? i() : i,
        firstChild: null,
        schemas: c,
        consts: h,
        incompleteFirstPass: !1,
        ssrId: u
      };
    }
    function fD(e, t) {
      let n = [];
      for (let o = 0; o < t; o++) n.push(o < e ? null : N);
      return n;
    }
    function pD(e, t, n, o) {
      let s = o.get(Sf, xf) || n === Ct.ShadowDom,
        i = e.selectRootElement(t, s);
      return hD(i), i;
    }
    function hD(e) {
      Rf(e);
    }
    var Rf = e => null;
    function gD(e) {
      Ud(e) ? lf(e) : qI(e);
    }
    function mD() {
      Rf = gD;
    }
    function vD(e, t, n, o) {
      let r = Hf(t);
      r.push(n), e.firstCreatePass && $f(e).push(o, r.length - 1);
    }
    function yD(e, t, n, o, r, s) {
      let i = t ? t.injectorIndex : -1,
        a = 0;
      return vn() && (a |= 128), {
        type: n,
        index: o,
        insertBeforeIndex: null,
        injectorIndex: i,
        directiveStart: -1,
        directiveEnd: -1,
        directiveStylingLast: -1,
        componentOffset: -1,
        propertyBindings: null,
        flags: a,
        providerIndexes: 0,
        value: r,
        attrs: s,
        mergedAttrs: null,
        localNames: null,
        initialInputs: void 0,
        inputs: null,
        outputs: null,
        tView: null,
        next: null,
        prev: null,
        projectionNext: null,
        child: null,
        parent: t,
        projection: null,
        styles: null,
        stylesWithoutHost: null,
        residualStyles: void 0,
        classes: null,
        classesWithoutHost: null,
        residualClasses: void 0,
        classBindings: 0,
        styleBindings: 0
      };
    }
    function Rl(e, t, n, o) {
      for (let r in e) if (e.hasOwnProperty(r)) {
        n = n === null ? {} : n;
        let s = e[r];
        o === null ? kl(n, t, r, s) : o.hasOwnProperty(r) && kl(n, t, o[r], s);
      }
      return n;
    }
    function kl(e, t, n, o) {
      e.hasOwnProperty(n) ? e[n].push(t, o) : e[n] = [t, o];
    }
    function ID(e, t, n) {
      let o = t.directiveStart,
        r = t.directiveEnd,
        s = e.data,
        i = t.attrs,
        a = [],
        c = null,
        l = null;
      for (let u = o; u < r; u++) {
        let d = s[u],
          f = n ? n.get(d) : null,
          p = f ? f.inputs : null,
          h = f ? f.outputs : null;
        c = Rl(d.inputs, u, c, p), l = Rl(d.outputs, u, l, h);
        let m = c !== null && i !== null && !Fu(t) ? OD(c, u, i) : null;
        a.push(m);
      }
      c !== null && (c.hasOwnProperty("class") && (t.flags |= 8), c.hasOwnProperty("style") && (t.flags |= 16)), t.initialInputs = a, t.inputs = c, t.outputs = l;
    }
    function DD(e) {
      return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e;
    }
    function Me(e, t, n, o, r, s, i, a) {
      let c = me(t, n),
        l = t.inputs,
        u;
      !a && l != null && (u = l[o]) ? (Vc(e, n, u, o, r), Rt(t) && wD(n, t.index)) : t.type & 3 ? (o = DD(o), r = i != null ? i(r, t.value || "", o) : r, s.setProperty(c, o, r)) : t.type & 12;
    }
    function wD(e, t) {
      let n = Ee(t, e);
      n[D] & 16 || (n[D] |= 64);
    }
    function Fc(e, t, n, o) {
      if (ed()) {
        let r = o === null ? null : {
            "": -1
          },
          s = _D(e, n),
          i,
          a;
        s === null ? i = a = null : [i, a] = s, i !== null && kf(e, t, n, i, r, a), r && ND(n, o, r);
      }
      n.mergedAttrs = eo(n.mergedAttrs, n.attrs);
    }
    function kf(e, t, n, o, r, s) {
      for (let l = 0; l < o.length; l++) yi(Er(n, t), e, o[l].type);
      xD(n, e.data.length, o.length);
      for (let l = 0; l < o.length; l++) {
        let u = o[l];
        u.providersResolver && u.providersResolver(u);
      }
      let i = !1,
        a = !1,
        c = Fo(e, t, o.length, null);
      for (let l = 0; l < o.length; l++) {
        var _e$preOrderHooks, _e$preOrderCheckHooks;
        let u = o[l];
        n.mergedAttrs = eo(n.mergedAttrs, u.hostAttrs), SD(e, n, t, c, u), bD(c, u, r), u.contentQueries !== null && (n.flags |= 4), (u.hostBindings !== null || u.hostAttrs !== null || u.hostVars !== 0) && (n.flags |= 64);
        let d = u.type.prototype;
        !i && (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) && (((_e$preOrderHooks = e.preOrderHooks) !== null && _e$preOrderHooks !== void 0 ? _e$preOrderHooks : e.preOrderHooks = []).push(n.index), i = !0), !a && (d.ngOnChanges || d.ngDoCheck) && (((_e$preOrderCheckHooks = e.preOrderCheckHooks) !== null && _e$preOrderCheckHooks !== void 0 ? _e$preOrderCheckHooks : e.preOrderCheckHooks = []).push(n.index), a = !0), c++;
      }
      ID(e, n, s);
    }
    function ED(e, t, n, o, r) {
      let s = r.hostBindings;
      if (s) {
        let i = e.hostBindingOpCodes;
        i === null && (i = e.hostBindingOpCodes = []);
        let a = ~t.index;
        CD(i) != a && i.push(a), i.push(n, o, s);
      }
    }
    function CD(e) {
      let t = e.length;
      for (; t > 0;) {
        let n = e[--t];
        if (typeof n == "number" && n < 0) return n;
      }
      return 0;
    }
    function MD(e, t, n, o) {
      let r = n.directiveStart,
        s = n.directiveEnd;
      Rt(n) && AD(t, n, e.data[r + n.componentOffset]), e.firstCreatePass || Er(n, t), ie(o, t);
      let i = n.initialInputs;
      for (let a = r; a < s; a++) {
        let c = e.data[a],
          l = bt(t, e, a, n);
        if (ie(l, t), i !== null && PD(t, a - r, l, c, n, i), Pe(c)) {
          let u = Ee(n.index, t);
          u[$] = bt(t, e, a, n);
        }
      }
    }
    function Lf(e, t, n) {
      let o = n.directiveStart,
        r = n.directiveEnd,
        s = n.index,
        i = Ev();
      try {
        _t(s);
        for (let a = o; a < r; a++) {
          let c = e.data[a],
            l = t[a];
          mi(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && TD(c, l);
        }
      } finally {
        _t(-1), mi(i);
      }
    }
    function TD(e, t) {
      e.hostBindings !== null && e.hostBindings(1, t);
    }
    function _D(e, t) {
      let n = e.directiveRegistry,
        o = null,
        r = null;
      if (n) for (let s = 0; s < n.length; s++) {
        var _i$findHostDirectiveD;
        let i = n[s];
        if (ju(t, i.selectors, !1)) if (o || (o = []), Pe(i)) {
          if (i.findHostDirectiveDefs !== null) {
            let a = [];
            r = r || new Map(), i.findHostDirectiveDefs(i, a, r), o.unshift(...a, i);
            let c = a.length;
            ra(e, t, c);
          } else o.unshift(i), ra(e, t, 0);
        } else r = r || new Map(), (_i$findHostDirectiveD = i.findHostDirectiveDefs) !== null && _i$findHostDirectiveD !== void 0 && _i$findHostDirectiveD.call(i, i, o, r), o.push(i);
      }
      return o === null ? null : [o, r];
    }
    function ra(e, t, n) {
      var _e$components;
      t.componentOffset = n, ((_e$components = e.components) !== null && _e$components !== void 0 ? _e$components : e.components = []).push(t.index);
    }
    function ND(e, t, n) {
      if (t) {
        let o = e.localNames = [];
        for (let r = 0; r < t.length; r += 2) {
          let s = n[t[r + 1]];
          if (s == null) throw new w(-301, !1);
          o.push(t[r], s);
        }
      }
    }
    function bD(e, t, n) {
      if (n) {
        if (t.exportAs) for (let o = 0; o < t.exportAs.length; o++) n[t.exportAs[o]] = e;
        Pe(t) && (n[""] = e);
      }
    }
    function xD(e, t, n) {
      e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t;
    }
    function SD(e, t, n, o, r) {
      e.data[o] = r;
      let s = r.factory || (r.factory = Tt(r.type)),
        i = new Nt(s, Pe(r), Lo);
      e.blueprint[o] = i, n[o] = i, ED(e, t, o, Fo(e, n, r.hostVars, N), r);
    }
    function AD(e, t, n) {
      let o = me(t, e),
        r = Of(n),
        s = e[Kt].rendererFactory,
        i = 16;
      n.signals ? i = 4096 : n.onPush && (i = 64);
      let a = ws(e, Ds(e, r, null, i, o, t, null, s.createRenderer(o, n), null, null, null));
      e[t.index] = a;
    }
    function We(e, t, n, o, r, s) {
      let i = me(e, t);
      jc(t[T], i, s, e.value, n, o, r);
    }
    function jc(e, t, n, o, r, s, i) {
      if (s == null) e.removeAttribute(t, r, n);else {
        let a = i == null ? M(s) : i(s, o || "", r);
        e.setAttribute(t, r, a, n);
      }
    }
    function PD(e, t, n, o, r, s) {
      let i = s[t];
      if (i !== null) for (let a = 0; a < i.length;) {
        let c = i[a++],
          l = i[a++],
          u = i[a++];
        Ff(o, n, c, l, u);
      }
    }
    function Ff(e, t, n, o, r) {
      let s = signals.setActiveConsumer(null);
      try {
        let i = e.inputTransforms;
        i !== null && i.hasOwnProperty(o) && (r = i[o].call(t, r)), e.setInput !== null ? e.setInput(t, r, n, o) : t[o] = r;
      } finally {
        signals.setActiveConsumer(s);
      }
    }
    function OD(e, t, n) {
      let o = null,
        r = 0;
      for (; r < n.length;) {
        let s = n[r];
        if (s === 0) {
          r += 4;
          continue;
        } else if (s === 5) {
          r += 2;
          continue;
        }
        if (typeof s == "number") break;
        if (e.hasOwnProperty(s)) {
          o === null && (o = []);
          let i = e[s];
          for (let a = 0; a < i.length; a += 2) if (i[a] === t) {
            o.push(s, i[a + 1], n[r + 1]);
            break;
          }
        }
        r += 2;
      }
      return o;
    }
    function jf(e, t, n, o) {
      return [e, !0, 0, t, null, o, null, n, null, null];
    }
    function Vf(e, t) {
      let n = e.contentQueries;
      if (n !== null) {
        let o = signals.setActiveConsumer(null);
        try {
          for (let r = 0; r < n.length; r += 2) {
            let s = n[r],
              i = n[r + 1];
            if (i !== -1) {
              let a = e.data[i];
              ic(s), a.contentQueries(2, t[i], i);
            }
          }
        } finally {
          signals.setActiveConsumer(o);
        }
      }
    }
    function ws(e, t) {
      return e[to] ? e[hl][xe] = t : e[to] = t, e[hl] = t, t;
    }
    function sa(e, t, n) {
      ic(0);
      let o = signals.setActiveConsumer(null);
      try {
        t(e, n);
      } finally {
        signals.setActiveConsumer(o);
      }
    }
    function Hf(e) {
      return e[Xt] || (e[Xt] = []);
    }
    function $f(e) {
      return e.cleanup || (e.cleanup = []);
    }
    function Bf(e, t, n) {
      return (e === null || Pe(e)) && (n = ec(n[t.index])), n[T];
    }
    function Es(e, t) {
      let n = e[he],
        o = n ? n.get(tt, null) : null;
      o && o.handleError(t);
    }
    function Vc(e, t, n, o, r) {
      for (let s = 0; s < n.length;) {
        let i = n[s++],
          a = n[s++],
          c = t[i],
          l = e.data[i];
        Ff(l, c, o, a, r);
      }
    }
    function it(e, t, n) {
      let o = _o(t, e);
      Kd(e[T], o, n);
    }
    var RD = 100;
    function Uf(e) {
      var _o$begin;
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      let n = e[Kt],
        o = n.rendererFactory,
        r = n.afterRenderEventManager;
      ((_o$begin = o.begin) !== null && _o$begin !== void 0 && _o$begin.call(o), r === null || r === void 0 ? void 0 : r.begin());
      try {
        kD(e);
      } catch (i) {
        throw t && Es(e, i), i;
      } finally {
        var _o$end, _n$inlineEffectRunner;
        ((_o$end = o.end) !== null && _o$end !== void 0 && _o$end.call(o), (_n$inlineEffectRunner = n.inlineEffectRunner) !== null && _n$inlineEffectRunner !== void 0 && _n$inlineEffectRunner.flush(), r === null || r === void 0 ? void 0 : r.end());
      }
    }
    function kD(e) {
      ia(e, 0);
      let t = 0;
      for (; Xu(e);) {
        if (t === RD) throw new w(103, !1);
        t++, ia(e, 1);
      }
    }
    function LD(e, t, n, o) {
      var _t$Kt$inlineEffectRun;
      let r = t[D];
      if ((r & 256) === 256) return;
      let s = !1;
      (_t$Kt$inlineEffectRun = t[Kt].inlineEffectRunner) !== null && _t$Kt$inlineEffectRun !== void 0 && _t$Kt$inlineEffectRun.flush(), ac(t);
      let i = null,
        a = null;
      FD(e) && (a = rD(t), i = signals.consumerBeforeComputation(a));
      try {
        Yu(t), nd(e.bindingStartIndex), n !== null && Pf(e, t, n, 2, o);
        let c = (r & 3) === 3;
        if (!s) if (c) {
          let d = e.preOrderCheckHooks;
          d !== null && ir(t, d, null);
        } else {
          let d = e.preOrderHooks;
          d !== null && ar(t, d, 0, null), ks(t, 0);
        }
        if (jD(t), qf(t, 0), e.contentQueries !== null && Vf(e, t), !s) if (c) {
          let d = e.contentCheckHooks;
          d !== null && ir(t, d);
        } else {
          let d = e.contentHooks;
          d !== null && ar(t, d, 1), ks(t, 1);
        }
        dD(e, t);
        let l = e.components;
        l !== null && Wf(t, l, 0);
        let u = e.viewQuery;
        if (u !== null && sa(2, u, o), !s) if (c) {
          let d = e.viewCheckHooks;
          d !== null && ir(t, d);
        } else {
          let d = e.viewHooks;
          d !== null && ar(t, d, 2), ks(t, 2);
        }
        if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[sr]) {
          for (let d of t[sr]) d();
          t[sr] = null;
        }
        s || (t[D] &= -73);
      } catch (c) {
        throw ts(t), c;
      } finally {
        a !== null && (signals.consumerAfterComputation(a, i), iD(a)), cc();
      }
    }
    function FD(e) {
      return e.type !== 2;
    }
    function qf(e, t) {
      for (let n = Yd(e); n !== null; n = Jd(n)) {
        n[D] &= ~tn.HasChildViewsToRefresh;
        for (let o = G; o < n.length; o++) {
          let r = n[o];
          Gf(r, t);
        }
      }
    }
    function jD(e) {
      for (let t = Yd(e); t !== null; t = Jd(t)) {
        if (!(t[D] & tn.HasTransplantedViews)) continue;
        let n = t[en];
        for (let o = 0; o < n.length; o++) {
          let r = n[o];
            r[B];
          cv(r);
        }
      }
    }
    function VD(e, t, n) {
      let o = Ee(t, e);
      Gf(o, n);
    }
    function Gf(e, t) {
      tc(e) && ia(e, t);
    }
    function ia(e, t) {
      let o = e[v],
        r = e[D],
        s = e[Mt],
        i = !!(t === 0 && r & 16);
      if (i || (i = !!(r & 64 && t === 0)), i || (i = !!(r & 1024)), i || (i = !!(s !== null && s !== void 0 && s.dirty && signals.consumerPollProducersForChange(s))), s && (s.dirty = !1), e[D] &= -9217, i) LD(o, e, o.template, e[$]);else if (r & 8192) {
        qf(e, 1);
        let a = o.components;
        a !== null && Wf(e, a, 1);
      }
    }
    function Wf(e, t, n) {
      for (let o = 0; o < t.length; o++) VD(e, t[o], n);
    }
    function jo(e) {
      for (; e;) {
        e[D] |= 64;
        let t = Ao(e);
        if (Ka(e) && !t) return e;
        e = t;
      }
      return null;
    }
    var St = class {
        get rootNodes() {
          let t = this._lView,
            n = t[v];
          return po(n, t, n.firstChild, []);
        }
        constructor(t, n) {
          let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          this._lView = t, this._cdRefInjectingView = n, this.notifyErrorHandler = o, this._appRef = null, this._attachedToViewContainer = !1;
        }
        get context() {
          return this._lView[$];
        }
        set context(t) {
          this._lView[$] = t;
        }
        get destroyed() {
          return (this._lView[D] & 256) === 256;
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);else if (this._attachedToViewContainer) {
            let t = this._lView[B];
            if (se(t)) {
              let n = t[Dr],
                o = n ? n.indexOf(this) : -1;
              o > -1 && (lo(t, o), Cr(n, o));
            }
            this._attachedToViewContainer = !1;
          }
          ds(this._lView[v], this._lView);
        }
        onDestroy(t) {
          ns(this._lView, t);
        }
        markForCheck() {
          jo(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[D] &= -129;
        }
        reattach() {
          Ku(this._lView), this._lView[D] |= 128;
        }
        detectChanges() {
          this._lView[D] |= 1024, Uf(this._lView, this.notifyErrorHandler);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new w(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          this._appRef = null, oI(this._lView[v], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new w(902, !1);
          this._appRef = t;
        }
      },
      zf = (_e10 => {
        class e {}
        _e10 = e;
        _e10.__NG_ELEMENT_ID__ = HD;
        return e;
      })();
    function HD(e) {
      return $D(F(), g(), (e & 16) === 16);
    }
    function $D(e, t, n) {
      if (Rt(e) && !n) {
        let o = Ee(e.index, t);
        return new St(o, o);
      } else if (e.type & 47) {
        let o = t[ee];
        return new St(o, t);
      }
      return null;
    }
    var BD = [new Pr()],
      UD = [new Sr()],
      KN = new Mf(UD),
      eb = new Tf(BD),
      Cs = (_e11 => {
        class e {}
        _e11 = e;
        _e11.__NG_ELEMENT_ID__ = qD;
        _e11.__NG_ENV_ID__ = n => n;
        return e;
      })(),
      aa = class extends Cs {
        constructor(t) {
          super(), this._lView = t;
        }
        onDestroy(t) {
          return ns(this._lView, t), () => nc(this._lView, t);
        }
      };
    function qD() {
      return new aa(g());
    }
    function tb(e, t) {
      if (signals.getActiveConsumer() !== null) throw new w(-602, !1);
    }
    var GD = new P("", {
        providedIn: "root",
        factory: () => L(WD)
      }),
      WD = (_e12 => {
        class e {}
        _e12 = e;
        _e12.ɵprov = U({
          token: _e12,
          providedIn: "root",
          factory: () => new ca()
        });
        return e;
      })(),
      zD = (_e13 => {
        class e {
          constructor() {
            this.queuedEffectCount = 0, this.queues = new Map();
          }
          scheduleEffect(n) {
            let o = n.creationZone;
            this.queues.has(o) || this.queues.set(o, new Set());
            let r = this.queues.get(o);
            r.has(n) || (this.queuedEffectCount++, r.add(n));
          }
          flush() {
            for (; this.queuedEffectCount > 0;) for (let [n, o] of this.queues) n === null ? this.flushQueue(o) : n.run(() => this.flushQueue(o));
          }
          flushQueue(n) {
            for (let o of n) n.delete(o), this.queuedEffectCount--, o.run();
          }
        }
        _e13 = e;
        _e13.ɵprov = U({
          token: _e13,
          providedIn: "root",
          factory: () => new _e13()
        });
        return e;
      })(),
      ca = class {
        constructor() {
          this.hasQueuedFlush = !1, this.delegate = new zD(), this.flushTask = () => {
            this.delegate.flush(), this.hasQueuedFlush = !1;
          };
        }
        scheduleEffect(t) {
          this.delegate.scheduleEffect(t), this.hasQueuedFlush || (queueMicrotask(this.flushTask), this.hasQueuedFlush = !0);
        }
      },
      la = class {
        constructor(t, n, o, r, s, i) {
          this.scheduler = t, this.effectFn = n, this.creationZone = o, this.errorHandler = s, this.watcher = signals.createWatch(a => this.runEffect(a), () => this.schedule(), i), this.unregisterOnDestroy = r === null || r === void 0 ? void 0 : r.onDestroy(() => this.destroy());
        }
        runEffect(t) {
          try {
            this.effectFn(t);
          } catch (n) {
            var _this$errorHandler;
            (_this$errorHandler = this.errorHandler) === null || _this$errorHandler === void 0 || _this$errorHandler.handleError(n);
          }
        }
        run() {
          this.watcher.run();
        }
        schedule() {
          this.scheduler.scheduleEffect(this);
        }
        destroy() {
          var _this$unregisterOnDes;
          this.watcher.destroy(), (_this$unregisterOnDes = this.unregisterOnDestroy) === null || _this$unregisterOnDes === void 0 ? void 0 : _this$unregisterOnDes.call(this);
        }
      };
    function QD(e, t) {
      var _t$injector, _t$allowSignalWrites, _i$_lView, _i$_lView$sr;
      !(t !== null && t !== void 0 && t.injector) && mc();
      let n = (_t$injector = t === null || t === void 0 ? void 0 : t.injector) !== null && _t$injector !== void 0 ? _t$injector : L(Re),
        o = n.get(tt, null, {
          optional: !0
        }),
        r = (t === null || t === void 0 ? void 0 : t.manualCleanup) !== !0 ? n.get(Cs) : null,
        s = new la(n.get(GD), e, typeof Zone > "u" ? null : Zone.current, r, o, (_t$allowSignalWrites = t === null || t === void 0 ? void 0 : t.allowSignalWrites) !== null && _t$allowSignalWrites !== void 0 ? _t$allowSignalWrites : !1),
        i = n.get(zf, null, {
          optional: !0
        });
      return !i || !(i._lView[D] & 8) ? s.watcher.notify() : ((_i$_lView$sr = (_i$_lView = i._lView)[sr]) !== null && _i$_lView$sr !== void 0 ? _i$_lView$sr : _i$_lView[sr] = []).push(s.watcher.notify), s;
    }
    var Ll = new Set();
    function kt(e) {
      var _performance, _performance$mark;
      Ll.has(e) || (Ll.add(e), (_performance = performance) === null || _performance === void 0 || (_performance$mark = _performance.mark) === null || _performance$mark === void 0 ? void 0 : _performance$mark.call(_performance, "mark_feature_usage", {
        detail: {
          feature: e
        }
      }));
    }
    var ua = class extends Subject {
      constructor() {
        let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        super(), this.__isAsync = t;
      }
      emit(t) {
        super.next(t);
      }
      subscribe(t, n, o) {
        let r = t,
          s = n || (() => null),
          i = o;
        if (t && typeof t == "object") {
          var _c$next, _c$error, _c$complete;
          let c = t;
          r = (_c$next = c.next) === null || _c$next === void 0 ? void 0 : _c$next.bind(c), s = (_c$error = c.error) === null || _c$error === void 0 ? void 0 : _c$error.bind(c), i = (_c$complete = c.complete) === null || _c$complete === void 0 ? void 0 : _c$complete.bind(c);
        }
        this.__isAsync && (s = Us(s), r && (r = Us(r)), i && (i = Us(i)));
        let a = super.subscribe({
          next: r,
          error: s,
          complete: i
        });
        return t instanceof Subscription && t.add(a), a;
      }
    };
    function Us(e) {
      return t => {
        setTimeout(e, void 0, t);
      };
    }
    var Xe = ua;
    function Fl() {}
    function ZD() {
      let e = typeof ue.requestAnimationFrame == "function",
        t = ue[e ? "requestAnimationFrame" : "setTimeout"],
        n = ue[e ? "cancelAnimationFrame" : "clearTimeout"];
      if (typeof Zone < "u" && t && n) {
        let o = t[Zone.__symbol__("OriginalDelegate")];
        o && (t = o);
        let r = n[Zone.__symbol__("OriginalDelegate")];
        r && (n = r);
      }
      return {
        nativeRequestAnimationFrame: t,
        nativeCancelAnimationFrame: n
      };
    }
    var oe = class e {
        constructor(_ref) {
          let {
            enableLongStackTrace: t = !1,
            shouldCoalesceEventChangeDetection: n = !1,
            shouldCoalesceRunChangeDetection: o = !1
          } = _ref;
          if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new Xe(!1), this.onMicrotaskEmpty = new Xe(!1), this.onStable = new Xe(!1), this.onError = new Xe(!1), typeof Zone > "u") throw new w(908, !1);
          Zone.assertZonePatched();
          let r = this;
          r._nesting = 0, r._outer = r._inner = Zone.current, Zone.TaskTrackingZoneSpec && (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec())), t && Zone.longStackTraceZoneSpec && (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)), r.shouldCoalesceEventChangeDetection = !o && n, r.shouldCoalesceRunChangeDetection = o, r.lastRequestAnimationFrameId = -1, r.nativeRequestAnimationFrame = ZD().nativeRequestAnimationFrame, XD(r);
        }
        static isInAngularZone() {
          return typeof Zone < "u" && Zone.current.get("isAngularZone") === !0;
        }
        static assertInAngularZone() {
          if (!e.isInAngularZone()) throw new w(909, !1);
        }
        static assertNotInAngularZone() {
          if (e.isInAngularZone()) throw new w(909, !1);
        }
        run(t, n, o) {
          return this._inner.run(t, n, o);
        }
        runTask(t, n, o, r) {
          let s = this._inner,
            i = s.scheduleEventTask("NgZoneEvent: " + r, t, YD, Fl, Fl);
          try {
            return s.runTask(i, n, o);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(t, n, o) {
          return this._inner.runGuarded(t, n, o);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      },
      YD = {};
    function Hc(e) {
      if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable) try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
      } finally {
        if (e._nesting--, !e.hasPendingMicrotasks) try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
      }
    }
    function JD(e) {
      e.isCheckStableRunning || e.lastRequestAnimationFrameId !== -1 || (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(ue, () => {
        e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
          e.lastRequestAnimationFrameId = -1, da(e), e.isCheckStableRunning = !0, Hc(e), e.isCheckStableRunning = !1;
        }, void 0, () => {}, () => {})), e.fakeTopEventTask.invoke();
      }), da(e));
    }
    function XD(e) {
      let t = () => {
        JD(e);
      };
      e._inner = e._inner.fork({
        name: "angular",
        properties: {
          isAngularZone: !0
        },
        onInvokeTask: (n, o, r, s, i, a) => {
          if (KD(a)) return n.invokeTask(r, s, i, a);
          try {
            return jl(e), n.invokeTask(r, s, i, a);
          } finally {
            (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), Vl(e);
          }
        },
        onInvoke: (n, o, r, s, i, a, c) => {
          try {
            return jl(e), n.invoke(r, s, i, a, c);
          } finally {
            e.shouldCoalesceRunChangeDetection && t(), Vl(e);
          }
        },
        onHasTask: (n, o, r, s) => {
          n.hasTask(r, s), o === r && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, da(e), Hc(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask));
        },
        onHandleError: (n, o, r, s) => (n.handleError(r, s), e.runOutsideAngular(() => e.onError.emit(s)), !1)
      });
    }
    function da(e) {
      e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.lastRequestAnimationFrameId !== -1 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1;
    }
    function jl(e) {
      e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null));
    }
    function Vl(e) {
      e._nesting--, Hc(e);
    }
    var fa = class {
        constructor() {
          this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Xe(), this.onMicrotaskEmpty = new Xe(), this.onStable = new Xe(), this.onError = new Xe();
        }
        run(t, n, o) {
          return t.apply(n, o);
        }
        runGuarded(t, n, o) {
          return t.apply(n, o);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, o, r) {
          return t.apply(n, o);
        }
      },
      Qf = new P("", {
        providedIn: "root",
        factory: Zf
      });
    function Zf() {
      let e = L(oe),
        t = !0,
        n = new Observable(r => {
          t = e.isStable && !e.hasPendingMacrotasks && !e.hasPendingMicrotasks, e.runOutsideAngular(() => {
            r.next(t), r.complete();
          });
        }),
        o = new Observable(r => {
          let s;
          e.runOutsideAngular(() => {
            s = e.onStable.subscribe(() => {
              oe.assertNotInAngularZone(), queueMicrotask(() => {
                !t && !e.hasPendingMacrotasks && !e.hasPendingMicrotasks && (t = !0, r.next(!0));
              });
            });
          });
          let i = e.onUnstable.subscribe(() => {
            oe.assertInAngularZone(), t && (t = !1, e.runOutsideAngular(() => {
              r.next(!1);
            }));
          });
          return () => {
            s.unsubscribe(), i.unsubscribe();
          };
        });
      return merge(n, o.pipe(share()));
    }
    function KD(e) {
      var _e$0$data;
      return !Array.isArray(e) || e.length !== 1 ? !1 : ((_e$0$data = e[0].data) === null || _e$0$data === void 0 ? void 0 : _e$0$data.__ignore_ng_zone__) === !0;
    }
    function ew() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "zone.js";
      let t = arguments.length > 1 ? arguments[1] : undefined;
      return e === "noop" ? new fa() : e === "zone.js" ? new oe(t) : e;
    }
    var Et = function (e) {
        return e[e.EarlyRead = 0] = "EarlyRead", e[e.Write = 1] = "Write", e[e.MixedReadWrite = 2] = "MixedReadWrite", e[e.Read = 3] = "Read", e;
      }(Et || {}),
      Yf = {
        destroy() {}
      };
    function Hl(e, t) {
      var _t$injector2;
      let n = (_t$injector2 = t === null || t === void 0 ? void 0 : t.injector) !== null && _t$injector2 !== void 0 ? _t$injector2 : L(Re);
      if (!lt(n)) return;
      n.get(Ms).internalCallbacks.push(e);
    }
    function tw(e, t) {
      var _t$injector3, _o$handler, _t$phase;
      !t && mc();
      let n = (_t$injector3 = t === null || t === void 0 ? void 0 : t.injector) !== null && _t$injector3 !== void 0 ? _t$injector3 : L(Re);
      if (!lt(n)) return Yf;
      kt("NgAfterRender");
      let o = n.get(Ms),
        r = (_o$handler = o.handler) !== null && _o$handler !== void 0 ? _o$handler : o.handler = new Rr(),
        s = (_t$phase = t === null || t === void 0 ? void 0 : t.phase) !== null && _t$phase !== void 0 ? _t$phase : Et.MixedReadWrite,
        i = () => {
          r.unregister(c), a();
        },
        a = n.get(Cs).onDestroy(i),
        c = new Or(n, s, e);
      return r.register(c), {
        destroy: i
      };
    }
    function nw(e, t) {
      var _t$injector4, _o$handler2, _t$phase2;
      !t && mc();
      let n = (_t$injector4 = t === null || t === void 0 ? void 0 : t.injector) !== null && _t$injector4 !== void 0 ? _t$injector4 : L(Re);
      if (!lt(n)) return Yf;
      kt("NgAfterNextRender");
      let o = n.get(Ms),
        r = (_o$handler2 = o.handler) !== null && _o$handler2 !== void 0 ? _o$handler2 : o.handler = new Rr(),
        s = (_t$phase2 = t === null || t === void 0 ? void 0 : t.phase) !== null && _t$phase2 !== void 0 ? _t$phase2 : Et.MixedReadWrite,
        i = () => {
          r.unregister(c), a();
        },
        a = n.get(Cs).onDestroy(i),
        c = new Or(n, s, () => {
          i(), e();
        });
      return r.register(c), {
        destroy: i
      };
    }
    var Or = class {
        constructor(t, n, o) {
          this.phase = n, this.callbackFn = o, this.zone = t.get(oe), this.errorHandler = t.get(tt, null, {
            optional: !0
          });
        }
        invoke() {
          try {
            this.zone.runOutsideAngular(this.callbackFn);
          } catch (t) {
            var _this$errorHandler2;
            (_this$errorHandler2 = this.errorHandler) === null || _this$errorHandler2 === void 0 || _this$errorHandler2.handleError(t);
          }
        }
      },
      Rr = class {
        constructor() {
          this.executingCallbacks = !1, this.buckets = {
            [Et.EarlyRead]: new Set(),
            [Et.Write]: new Set(),
            [Et.MixedReadWrite]: new Set(),
            [Et.Read]: new Set()
          }, this.deferredCallbacks = new Set();
        }
        validateBegin() {
          if (this.executingCallbacks) throw new w(102, !1);
        }
        register(t) {
          (this.executingCallbacks ? this.deferredCallbacks : this.buckets[t.phase]).add(t);
        }
        unregister(t) {
          this.buckets[t.phase].delete(t), this.deferredCallbacks.delete(t);
        }
        execute() {
          this.executingCallbacks = !0;
          for (let t of Object.values(this.buckets)) for (let n of t) n.invoke();
          this.executingCallbacks = !1;
          for (let t of this.deferredCallbacks) this.buckets[t.phase].add(t);
          this.deferredCallbacks.clear();
        }
        destroy() {
          for (let t of Object.values(this.buckets)) t.clear();
          this.deferredCallbacks.clear();
        }
      },
      Ms = (_e14 => {
        class e {
          constructor() {
            this.renderDepth = 0, this.handler = null, this.internalCallbacks = [];
          }
          begin() {
            var _this$handler;
            (_this$handler = this.handler) !== null && _this$handler !== void 0 && _this$handler.validateBegin(), this.renderDepth++;
          }
          end() {
            if (this.renderDepth--, this.renderDepth === 0) {
              var _this$handler2;
              for (let n of this.internalCallbacks) n();
              this.internalCallbacks.length = 0, (_this$handler2 = this.handler) === null || _this$handler2 === void 0 ? void 0 : _this$handler2.execute();
            }
          }
          ngOnDestroy() {
            var _this$handler3;
            (_this$handler3 = this.handler) !== null && _this$handler3 !== void 0 && _this$handler3.destroy(), this.handler = null, this.internalCallbacks.length = 0;
          }
        }
        _e14 = e;
        _e14.ɵprov = U({
          token: _e14,
          providedIn: "root",
          factory: () => new _e14()
        });
        return e;
      })();
    function ow(e, t) {
      let n = Ee(t, e),
        o = n[v];
      rw(o, n);
      let r = n[q];
      r !== null && n[Ae] === null && (n[Ae] = xc(r, n[he])), $c(o, n, n[$]);
    }
    function rw(e, t) {
      for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
    }
    function $c(e, t, n) {
      ac(t);
      try {
        let o = e.viewQuery;
        o !== null && sa(1, o, n);
        let r = e.template;
        r !== null && Pf(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && Vf(e, t), e.staticViewQueries && sa(2, e.viewQuery, n);
        let s = e.components;
        s !== null && sw(t, s);
      } catch (o) {
        throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
      } finally {
        t[D] &= -5, cc();
      }
    }
    function sw(e, t) {
      for (let n = 0; n < t.length; n++) ow(e, t[n]);
    }
    function kr(e, t, n) {
      let o = n ? e.styles : null,
        r = n ? e.classes : null,
        s = 0;
      if (t !== null) for (let i = 0; i < t.length; i++) {
        let a = t[i];
        if (typeof a == "number") s = a;else if (s == 1) r = ii(r, a);else if (s == 2) {
          let c = a,
            l = t[++i];
          o = ii(o, c + ": " + l + ";");
        }
      }
      n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r;
    }
    var Lr = class extends ys {
      constructor(t) {
        super(), this.ngModule = t;
      }
      resolveComponentFactory(t) {
        let n = R(t);
        return new At(n, this.ngModule);
      }
    };
    function $l(e) {
      let t = [];
      for (let n in e) if (e.hasOwnProperty(n)) {
        let o = e[n];
        t.push({
          propName: o,
          templateName: n
        });
      }
      return t;
    }
    function iw(e) {
      let t = e.toLowerCase();
      return t === "svg" ? Qu : t === "math" ? Zu : null;
    }
    var pa = class {
        constructor(t, n) {
          this.injector = t, this.parentInjector = n;
        }
        get(t, n, o) {
          o = Kr(o);
          let r = this.injector.get(t, $s, o);
          return r !== $s || n === $s ? r : this.parentInjector.get(t, n, o);
        }
      },
      At = class extends br {
        get inputs() {
          let t = this.componentDef,
            n = t.inputTransforms,
            o = $l(t.inputs);
          if (n !== null) for (let r of o) n.hasOwnProperty(r.propName) && (r.transform = n[r.propName]);
          return o;
        }
        get outputs() {
          return $l(this.componentDef.outputs);
        }
        constructor(t, n) {
          super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = Um(t.selectors), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!n;
        }
        create(t, n, o, r) {
          var _r2;
          r = r || this.ngModule;
          let s = r instanceof Oe ? r : (_r2 = r) === null || _r2 === void 0 ? void 0 : _r2.injector;
          s && this.componentDef.getStandaloneInjector !== null && (s = this.componentDef.getStandaloneInjector(s) || s);
          let i = s ? new pa(t, s) : t,
            a = i.get(Ji, null);
          if (a === null) throw new w(407, !1);
          let c = i.get(JI, null),
            l = i.get(Ms, null),
            u = {
              rendererFactory: a,
              sanitizer: c,
              inlineEffectRunner: null,
              afterRenderEventManager: l
            },
            d = a.createRenderer(null, this.componentDef),
            f = this.componentDef.selectors[0][0] || "div",
            p = o ? pD(d, o, this.componentDef.encapsulation, i) : us(d, f, iw(f)),
            h = 4608,
            m = this.componentDef.onPush ? 576 : 528,
            y = this.componentDef.signals ? h : m,
            I = null;
          p !== null && (I = xc(p, i, !0));
          let C = Lc(0, null, null, 1, 0, null, null, null, null, null, null),
            b = Ds(null, C, null, y, null, null, u, d, i, null, I);
          ac(b);
          let j, J;
          try {
            let te = this.componentDef,
              yt,
              Rs = null;
            te.findHostDirectiveDefs ? (yt = [], Rs = new Map(), te.findHostDirectiveDefs(te, yt, Rs), yt.push(te)) : yt = [te];
            let Bg = aw(b, p),
              Ug = cw(Bg, p, te, yt, b, u, d);
            J = No(C, _), p && dw(d, te, p, o), n !== void 0 && fw(J, this.ngContentSelectors, n), j = uw(Ug, te, yt, Rs, b, [pw]), $c(C, b, null);
          } finally {
            cc();
          }
          return new ha(this.componentType, j, Mn(J, b), b, J);
        }
      },
      ha = class extends Zi {
        constructor(t, n, o, r, s) {
          super(), this.location = o, this._rootLView = r, this._tNode = s, this.previousInputValues = null, this.instance = n, this.hostView = this.changeDetectorRef = new St(r, void 0, !1), this.componentType = t;
        }
        setInput(t, n) {
          let o = this._tNode.inputs,
            r;
          if (o !== null && (r = o[t])) {
            var _this$previousInputVa;
            if ((_this$previousInputVa = this.previousInputValues) !== null && _this$previousInputVa !== void 0 ? _this$previousInputVa : this.previousInputValues = new Map(), this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n)) return;
            let s = this._rootLView;
            Vc(s[v], s, r, t, n), this.previousInputValues.set(t, n);
            let i = Ee(this._tNode.index, s);
            jo(i);
          }
        }
        get injector() {
          return new W(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      };
    function aw(e, t) {
      let n = e[v],
        o = _;
      return e[o] = t, Tn(n, o, 2, "#host", null);
    }
    function cw(e, t, n, o, r, s, i) {
      let a = r[v];
      lw(o, e, t, i);
      let c = null;
      t !== null && (c = xc(t, r[he]));
      let l = s.rendererFactory.createRenderer(t, n),
        u = 16;
      n.signals ? u = 4096 : n.onPush && (u = 64);
      let d = Ds(r, Of(n), null, u, r[e.index], e, s, l, null, null, c);
      return a.firstCreatePass && ra(a, e, o.length - 1), ws(r, d), r[e.index] = d;
    }
    function lw(e, t, n, o) {
      for (let r of e) t.mergedAttrs = eo(t.mergedAttrs, r.hostAttrs);
      t.mergedAttrs !== null && (kr(t, t.mergedAttrs, !0), n !== null && ff(o, n, t));
    }
    function uw(e, t, n, o, r, s) {
      let i = F(),
        a = r[v],
        c = me(i, r);
      kf(a, r, i, n, null, o);
      for (let u = 0; u < n.length; u++) {
        let d = i.directiveStart + u,
          f = bt(r, a, d, i);
        ie(f, r);
      }
      Lf(a, r, i), c && ie(c, r);
      let l = bt(r, a, i.directiveStart + i.componentOffset, i);
      if (e[$] = r[$] = l, s !== null) for (let u of s) u(l, t);
      return Oc(a, i, e), l;
    }
    function dw(e, t, n, o) {
      if (o) di(e, n, ["ng-version", XI.full]);else {
        let {
          attrs: r,
          classes: s
        } = qm(t.selectors[0]);
        r && di(e, n, r), s && s.length > 0 && df(e, n, s.join(" "));
      }
    }
    function fw(e, t, n) {
      let o = e.projection = [];
      for (let r = 0; r < t.length; r++) {
        let s = n[r];
        o.push(s != null ? Array.from(s) : null);
      }
    }
    function pw() {
      let e = F();
      rs(g()[v], e);
    }
    function Jf(e) {
      return Object.getPrototypeOf(e.prototype).constructor;
    }
    function Xf(e) {
      let t = Jf(e.type),
        n = !0,
        o = [e];
      for (; t;) {
        let r;
        if (Pe(e)) r = t.ɵcmp || t.ɵdir;else {
          if (t.ɵcmp) throw new w(903, !1);
          r = t.ɵdir;
        }
        if (r) {
          if (n) {
            o.push(r);
            let i = e;
            i.inputs = er(e.inputs), i.inputTransforms = er(e.inputTransforms), i.declaredInputs = er(e.declaredInputs), i.outputs = er(e.outputs);
            let a = r.hostBindings;
            a && vw(e, a);
            let c = r.viewQuery,
              l = r.contentQueries;
            if (c && gw(e, c), l && mw(e, l), zo(e.inputs, r.inputs), zo(e.declaredInputs, r.declaredInputs), zo(e.outputs, r.outputs), r.inputTransforms !== null && (i.inputTransforms === null && (i.inputTransforms = {}), zo(i.inputTransforms, r.inputTransforms)), Pe(r) && r.data.animation) {
              let u = e.data;
              u.animation = (u.animation || []).concat(r.data.animation);
            }
          }
          let s = r.features;
          if (s) for (let i = 0; i < s.length; i++) {
            let a = s[i];
            a && a.ngInherit && a(e), a === Xf && (n = !1);
          }
        }
        t = Object.getPrototypeOf(t);
      }
      hw(o);
    }
    function hw(e) {
      let t = 0,
        n = null;
      for (let o = e.length - 1; o >= 0; o--) {
        let r = e[o];
        r.hostVars = t += r.hostVars, r.hostAttrs = eo(r.hostAttrs, n = eo(n, r.hostAttrs));
      }
    }
    function er(e) {
      return e === $e ? {} : e === O ? [] : e;
    }
    function gw(e, t) {
      let n = e.viewQuery;
      n ? e.viewQuery = (o, r) => {
        t(o, r), n(o, r);
      } : e.viewQuery = t;
    }
    function mw(e, t) {
      let n = e.contentQueries;
      n ? e.contentQueries = (o, r, s) => {
        t(o, r, s), n(o, r, s);
      } : e.contentQueries = t;
    }
    function vw(e, t) {
      let n = e.hostBindings;
      n ? e.hostBindings = (o, r) => {
        t(o, r), n(o, r);
      } : e.hostBindings = t;
    }
    var yw = ["providersResolver"],
      Iw = ["template", "decls", "consts", "vars", "onPush", "ngContentSelectors", "styles", "encapsulation", "schemas"];
    function Dw(e) {
      let t = Jf(e.type),
        n;
      Pe(e) ? n = t.ɵcmp : n = t.ɵdir;
      let o = e;
      for (let r of yw) o[r] = n[r];
      if (Pe(n)) for (let r of Iw) o[r] = n[r];
    }
    function ww(e) {
      let t = n => {
        let o = (Array.isArray(e) ? e : e()).map(r => typeof r == "function" ? {
          directive: A(r),
          inputs: $e,
          outputs: $e
        } : {
          directive: A(r.directive),
          inputs: Bl(r.inputs),
          outputs: Bl(r.outputs)
        });
        n.hostDirectives === null ? (n.findHostDirectiveDefs = Kf, n.hostDirectives = o) : n.hostDirectives.unshift(...o);
      };
      return t.ngInherit = !0, t;
    }
    function Kf(e, t, n) {
      if (e.hostDirectives !== null) for (let o of e.hostDirectives) {
        let r = Ie(o.directive);
        Ew(r.declaredInputs, o.inputs), Kf(r, t, n), n.set(r, o), t.push(r);
      }
    }
    function Bl(e) {
      if (e === void 0 || e.length === 0) return $e;
      let t = {};
      for (let n = 0; n < e.length; n += 2) t[e[n]] = e[n + 1];
      return t;
    }
    function Ew(e, t) {
      for (let n in t) if (t.hasOwnProperty(n)) {
        let o = t[n],
          r = e[n];
        e[o] = r;
      }
    }
    function Cw(e) {
      let t = e.inputConfig,
        n = {};
      for (let o in t) if (t.hasOwnProperty(o)) {
        let r = t[o];
        Array.isArray(r) && r[2] && (n[o] = r[2]);
      }
      e.inputTransforms = n;
    }
    function ze(e, t, n) {
      return e[t] = n;
    }
    function Vo(e, t) {
      return e[t];
    }
    function Y(e, t, n) {
      let o = e[t];
      return Object.is(o, n) ? !1 : (e[t] = n, !0);
    }
    function Pt(e, t, n, o) {
      let r = Y(e, t, n);
      return Y(e, t + 1, o) || r;
    }
    function Ts(e, t, n, o, r) {
      let s = Pt(e, t, n, o);
      return Y(e, t + 2, r) || s;
    }
    function _e(e, t, n, o, r, s) {
      let i = Pt(e, t, n, o);
      return Pt(e, t + 2, r, s) || i;
    }
    function ep(e, t, n, o) {
      let r = g(),
        s = Ge();
      if (Y(r, s, t)) {
        S();
          let a = H();
        We(a, r, e, t, n, o);
      }
      return ep;
    }
    function _n(e, t) {
      let n = !1,
        o = ot();
      for (let s = 1; s < t.length; s += 2) n = Y(e, o++, t[s]) || n;
      if (nd(o), !n) return N;
      let r = t[0];
      for (let s = 1; s < t.length; s += 2) r += M(t[s]) + t[s + 1];
      return r;
    }
    function Nn(e, t, n, o) {
      return Y(e, Ge(), n) ? t + M(n) + o : N;
    }
    function bn(e, t, n, o, r, s) {
      let i = ot(),
        a = Pt(e, i, n, r);
      return rt(2), a ? t + M(n) + o + M(r) + s : N;
    }
    function xn(e, t, n, o, r, s, i, a) {
      let c = ot(),
        l = Ts(e, c, n, r, i);
      return rt(3), l ? t + M(n) + o + M(r) + s + M(i) + a : N;
    }
    function Sn(e, t, n, o, r, s, i, a, c, l) {
      let u = ot(),
        d = _e(e, u, n, r, i, c);
      return rt(4), d ? t + M(n) + o + M(r) + s + M(i) + a + M(c) + l : N;
    }
    function An(e, t, n, o, r, s, i, a, c, l, u, d) {
      let f = ot(),
        p = _e(e, f, n, r, i, c);
      return p = Y(e, f + 4, u) || p, rt(5), p ? t + M(n) + o + M(r) + s + M(i) + a + M(c) + l + M(u) + d : N;
    }
    function Pn(e, t, n, o, r, s, i, a, c, l, u, d, f, p) {
      let h = ot(),
        m = _e(e, h, n, r, i, c);
      return m = Pt(e, h + 4, u, f) || m, rt(6), m ? t + M(n) + o + M(r) + s + M(i) + a + M(c) + l + M(u) + d + M(f) + p : N;
    }
    function On(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m) {
      let y = ot(),
        I = _e(e, y, n, r, i, c);
      return I = Ts(e, y + 4, u, f, h) || I, rt(7), I ? t + M(n) + o + M(r) + s + M(i) + a + M(c) + l + M(u) + d + M(f) + p + M(h) + m : N;
    }
    function Rn(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y, I) {
      let C = ot(),
        b = _e(e, C, n, r, i, c);
      return b = _e(e, C + 4, u, f, h, y) || b, rt(8), b ? t + M(n) + o + M(r) + s + M(i) + a + M(c) + l + M(u) + d + M(f) + p + M(h) + m + M(y) + I : N;
    }
    function tp(e, t, n, o, r, s) {
      let i = g(),
        a = Nn(i, t, n, o);
      if (a !== N) {
        let c = H();
        We(c, i, e, a, r, s);
      }
      return tp;
    }
    function np(e, t, n, o, r, s, i, a) {
      let c = g(),
        l = bn(c, t, n, o, r, s);
      if (l !== N) {
        let u = H();
        We(u, c, e, l, i, a);
      }
      return np;
    }
    function op(e, t, n, o, r, s, i, a, c, l) {
      let u = g(),
        d = xn(u, t, n, o, r, s, i, a);
      if (d !== N) {
        let f = H();
        We(f, u, e, d, c, l);
      }
      return op;
    }
    function rp(e, t, n, o, r, s, i, a, c, l, u, d) {
      let f = g(),
        p = Sn(f, t, n, o, r, s, i, a, c, l);
      if (p !== N) {
        let h = H();
        We(h, f, e, p, u, d);
      }
      return rp;
    }
    function sp(e, t, n, o, r, s, i, a, c, l, u, d, f, p) {
      let h = g(),
        m = An(h, t, n, o, r, s, i, a, c, l, u, d);
      if (m !== N) {
        let y = H();
        We(y, h, e, m, f, p);
      }
      return sp;
    }
    function ip(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m) {
      let y = g(),
        I = Pn(y, t, n, o, r, s, i, a, c, l, u, d, f, p);
      if (I !== N) {
        let C = H();
        We(C, y, e, I, h, m);
      }
      return ip;
    }
    function ap(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y, I) {
      let C = g(),
        b = On(C, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m);
      if (b !== N) {
        let j = H();
        We(j, C, e, b, y, I);
      }
      return ap;
    }
    function cp(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y, I, C, b) {
      let j = g(),
        J = Rn(j, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y, I);
      if (J !== N) {
        let te = H();
        We(te, j, e, J, C, b);
      }
      return cp;
    }
    function lp(e, t, n, o) {
      let r = g(),
        s = _n(r, t);
      if (s !== N) {
        let i = H();
        We(i, r, e, s, n, o);
      }
      return lp;
    }
    function tr(e, t) {
      return e << 17 | t << 2;
    }
    function Ot(e) {
      return e >> 17 & 32767;
    }
    function Mw(e) {
      return (e & 2) == 2;
    }
    function Tw(e, t) {
      return e & 131071 | t << 17;
    }
    function ga(e) {
      return e | 2;
    }
    function cn(e) {
      return (e & 131068) >> 2;
    }
    function qs(e, t) {
      return e & -131069 | t << 2;
    }
    function _w(e) {
      return (e & 1) === 1;
    }
    function ma(e) {
      return e | 1;
    }
    function Nw(e, t, n, o, r, s) {
      let i = s ? t.classBindings : t.styleBindings,
        a = Ot(i),
        c = cn(i);
      e[o] = n;
      let l = !1,
        u;
      if (Array.isArray(n)) {
        let d = n;
        u = d[1], (u === null || xo(d, u) > 0) && (l = !0);
      } else u = n;
      if (r) {
        if (c !== 0) {
          let f = Ot(e[a + 1]);
          e[o + 1] = tr(f, a), f !== 0 && (e[f + 1] = qs(e[f + 1], o)), e[a + 1] = Tw(e[a + 1], o);
        } else e[o + 1] = tr(a, 0), a !== 0 && (e[a + 1] = qs(e[a + 1], o)), a = o;
      } else e[o + 1] = tr(c, 0), a === 0 ? a = o : e[c + 1] = qs(e[c + 1], o), c = o;
      l && (e[o + 1] = ga(e[o + 1])), Ul(e, u, o, !0), Ul(e, u, o, !1), bw(t, u, e, o, s), i = tr(a, c), s ? t.classBindings = i : t.styleBindings = i;
    }
    function bw(e, t, n, o, r) {
      let s = r ? e.residualClasses : e.residualStyles;
      s != null && typeof t == "string" && xo(s, t) >= 0 && (n[o + 1] = ma(n[o + 1]));
    }
    function Ul(e, t, n, o, r) {
      let s = e[n + 1],
        i = t === null,
        a = o ? Ot(s) : cn(s),
        c = !1;
      for (; a !== 0 && (c === !1 || i);) {
        let l = e[a],
          u = e[a + 1];
        xw(l, t) && (c = !0, e[a + 1] = o ? ma(u) : ga(u)), a = o ? Ot(u) : cn(u);
      }
      c && (e[n + 1] = o ? ga(s) : ma(s));
    }
    function xw(e, t) {
      return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? xo(e, t) >= 0 : !1;
    }
    var X = {
      textEnd: 0,
      key: 0,
      keyEnd: 0,
      value: 0,
      valueEnd: 0
    };
    function up(e) {
      return e.substring(X.key, X.keyEnd);
    }
    function Sw(e) {
      return e.substring(X.value, X.valueEnd);
    }
    function Aw(e) {
      return pp(e), dp(e, ln(e, 0, X.textEnd));
    }
    function dp(e, t) {
      let n = X.textEnd;
      return n === t ? -1 : (t = X.keyEnd = Ow(e, X.key = t, n), ln(e, t, n));
    }
    function Pw(e) {
      return pp(e), fp(e, ln(e, 0, X.textEnd));
    }
    function fp(e, t) {
      let n = X.textEnd,
        o = X.key = ln(e, t, n);
      return n === o ? -1 : (o = X.keyEnd = Rw(e, o, n), o = ql(e, o, n), o = X.value = ln(e, o, n), o = X.valueEnd = kw(e, o, n), ql(e, o, n));
    }
    function pp(e) {
      X.key = 0, X.keyEnd = 0, X.value = 0, X.valueEnd = 0, X.textEnd = e.length;
    }
    function ln(e, t, n) {
      for (; t < n && e.charCodeAt(t) <= 32;) t++;
      return t;
    }
    function Ow(e, t, n) {
      for (; t < n && e.charCodeAt(t) > 32;) t++;
      return t;
    }
    function Rw(e, t, n) {
      let o;
      for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);) t++;
      return t;
    }
    function ql(e, t, n, o) {
      return t = ln(e, t, n), t < n && t++, t;
    }
    function kw(e, t, n) {
      let o = -1,
        r = -1,
        s = -1,
        i = t,
        a = i;
      for (; i < n;) {
        let c = e.charCodeAt(i++);
        if (c === 59) return a;
        c === 34 || c === 39 ? a = i = Gl(e, c, i, n) : t === i - 4 && s === 85 && r === 82 && o === 76 && c === 40 ? a = i = Gl(e, 41, i, n) : c > 32 && (a = i), s = r, r = o, o = c & -33;
      }
      return a;
    }
    function Gl(e, t, n, o) {
      let r = -1,
        s = n;
      for (; s < o;) {
        let i = e.charCodeAt(s++);
        if (i == t && r !== 92) return s;
        i == 92 && r === 92 ? r = 0 : r = i;
      }
      throw new Error();
    }
    function hp(e, t, n) {
      let o = g(),
        r = Ge();
      if (Y(o, r, t)) {
        let s = S(),
          i = H();
        Me(s, i, o, e, t, o[T], n, !1);
      }
      return hp;
    }
    function va(e, t, n, o, r) {
      let s = t.inputs,
        i = r ? "class" : "style";
      Vc(e, n, s[i], i, o);
    }
    function gp(e, t, n) {
      return ke(e, t, n, !1), gp;
    }
    function mp(e, t) {
      return ke(e, t, null, !0), mp;
    }
    function Qe(e) {
      Le(Ip, Lw, e, !1);
    }
    function Lw(e, t) {
      for (let n = Pw(t); n >= 0; n = fp(t, n)) Ip(e, up(t), Sw(t));
    }
    function Fw(e) {
      Le(Uw, Ze, e, !0);
    }
    function Ze(e, t) {
      for (let n = Aw(t); n >= 0; n = dp(t, n)) Ce(e, up(t), !0);
    }
    function ke(e, t, n, o) {
      let r = g(),
        s = S(),
        i = rt(2);
      if (s.firstUpdatePass && yp(s, e, i, o), t !== N && Y(r, i, t)) {
        let a = s.data[ce()];
        Dp(s, a, r, r[T], e, r[i + 1] = Gw(t, n), o, i);
      }
    }
    function Le(e, t, n, o) {
      let r = S(),
        s = rt(2);
      r.firstUpdatePass && yp(r, null, s, o);
      let i = g();
      if (n !== N && Y(i, s, n)) {
        let a = r.data[ce()];
        if (wp(a, o) && !vp(r, s)) {
          let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
          c !== null && (n = ii(c, n || "")), va(r, a, i, n, o);
        } else qw(r, a, i, i[T], i[s + 1], i[s + 1] = Bw(e, t, n), o, s);
      }
    }
    function vp(e, t) {
      return t >= e.expandoStartIndex;
    }
    function yp(e, t, n, o) {
      let r = e.data;
      if (r[n + 1] === null) {
        let s = r[ce()],
          i = vp(e, n);
        wp(s, o) && t === null && !i && (t = !1), t = jw(r, s, t, o), Nw(r, s, t, n, i, o);
      }
    }
    function jw(e, t, n, o) {
      let r = sc(e),
        s = o ? t.residualClasses : t.residualStyles;
      if (r === null) (o ? t.classBindings : t.styleBindings) === 0 && (n = Gs(null, e, t, n, o), n = ho(n, t.attrs, o), s = null);else {
        let i = t.directiveStylingLast;
        if (i === -1 || e[i] !== r) if (n = Gs(r, e, t, n, o), s === null) {
          let c = Vw(e, t, o);
          c !== void 0 && Array.isArray(c) && (c = Gs(null, e, t, c[1], o), c = ho(c, t.attrs, o), Hw(e, t, o, c));
        } else s = $w(e, t, o);
      }
      return s !== void 0 && (o ? t.residualClasses = s : t.residualStyles = s), n;
    }
    function Vw(e, t, n) {
      let o = n ? t.classBindings : t.styleBindings;
      if (cn(o) !== 0) return e[Ot(o)];
    }
    function Hw(e, t, n, o) {
      let r = n ? t.classBindings : t.styleBindings;
      e[Ot(r)] = o;
    }
    function $w(e, t, n) {
      let o,
        r = t.directiveEnd;
      for (let s = 1 + t.directiveStylingLast; s < r; s++) {
        let i = e[s].hostAttrs;
        o = ho(o, i, n);
      }
      return ho(o, t.attrs, n);
    }
    function Gs(e, t, n, o, r) {
      let s = null,
        i = n.directiveEnd,
        a = n.directiveStylingLast;
      for (a === -1 ? a = n.directiveStart : a++; a < i && (s = t[a], o = ho(o, s.hostAttrs, r), s !== e);) a++;
      return e !== null && (n.directiveStylingLast = a), o;
    }
    function ho(e, t, n) {
      let o = n ? 1 : 2,
        r = -1;
      if (t !== null) for (let s = 0; s < t.length; s++) {
        let i = t[s];
        typeof i == "number" ? r = i : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Ce(e, i, n ? !0 : t[++s]));
      }
      return e === void 0 ? null : e;
    }
    function Bw(e, t, n) {
      if (n == null || n === "") return O;
      let o = [],
        r = vt(n);
      if (Array.isArray(r)) for (let s = 0; s < r.length; s++) e(o, r[s], !0);else if (typeof r == "object") for (let s in r) r.hasOwnProperty(s) && e(o, s, r[s]);else typeof r == "string" && t(o, r);
      return o;
    }
    function Ip(e, t, n) {
      Ce(e, t, vt(n));
    }
    function Uw(e, t, n) {
      let o = String(t);
      o !== "" && !o.includes(" ") && Ce(e, o, n);
    }
    function qw(e, t, n, o, r, s, i, a) {
      r === N && (r = O);
      let c = 0,
        l = 0,
        u = 0 < r.length ? r[0] : null,
        d = 0 < s.length ? s[0] : null;
      for (; u !== null || d !== null;) {
        let f = c < r.length ? r[c + 1] : void 0,
          p = l < s.length ? s[l + 1] : void 0,
          h = null,
          m;
        u === d ? (c += 2, l += 2, f !== p && (h = d, m = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, m = p), h !== null && Dp(e, t, n, o, h, m, i, a), u = c < r.length ? r[c] : null, d = l < s.length ? s[l] : null;
      }
    }
    function Dp(e, t, n, o, r, s, i, a) {
      if (!(t.type & 3)) return;
      let c = e.data,
        l = c[a + 1],
        u = _w(l) ? Wl(c, t, n, r, cn(l), i) : void 0;
      if (!Fr(u)) {
        Fr(s) || Mw(l) && (s = Wl(c, null, n, r, a, i));
        let d = _o(ce(), n);
        pI(o, i, d, r, s);
      }
    }
    function Wl(e, t, n, o, r, s) {
      let i = t === null,
        a;
      for (; r > 0;) {
        let c = e[r],
          l = Array.isArray(c),
          u = l ? c[1] : c,
          d = u === null,
          f = n[r + 1];
        f === N && (f = d ? O : void 0);
        let p = d ? Fs(f, o) : u === o ? f : void 0;
        if (l && !Fr(p) && (p = Fs(c, o)), Fr(p) && (a = p, i)) return a;
        let h = e[r + 1];
        r = i ? Ot(h) : cn(h);
      }
      if (t !== null) {
        let c = s ? t.residualClasses : t.residualStyles;
        c != null && (a = Fs(c, o));
      }
      return a;
    }
    function Fr(e) {
      return e !== void 0;
    }
    function Gw(e, t) {
      return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = ae(vt(e)))), e;
    }
    function wp(e, t) {
      return (e.flags & (t ? 8 : 16)) !== 0;
    }
    function Ww(e, t, n) {
      let o = g(),
        r = Nn(o, e, t, n);
      Le(Ce, Ze, r, !0);
    }
    function zw(e, t, n, o, r) {
      let s = g(),
        i = bn(s, e, t, n, o, r);
      Le(Ce, Ze, i, !0);
    }
    function Qw(e, t, n, o, r, s, i) {
      let a = g(),
        c = xn(a, e, t, n, o, r, s, i);
      Le(Ce, Ze, c, !0);
    }
    function Zw(e, t, n, o, r, s, i, a, c) {
      let l = g(),
        u = Sn(l, e, t, n, o, r, s, i, a, c);
      Le(Ce, Ze, u, !0);
    }
    function Yw(e, t, n, o, r, s, i, a, c, l, u) {
      let d = g(),
        f = An(d, e, t, n, o, r, s, i, a, c, l, u);
      Le(Ce, Ze, f, !0);
    }
    function Jw(e, t, n, o, r, s, i, a, c, l, u, d, f) {
      let p = g(),
        h = Pn(p, e, t, n, o, r, s, i, a, c, l, u, d, f);
      Le(Ce, Ze, h, !0);
    }
    function Xw(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h) {
      let m = g(),
        y = On(m, e, t, n, o, r, s, i, a, c, l, u, d, f, p, h);
      Le(Ce, Ze, y, !0);
    }
    function Kw(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y) {
      let I = g(),
        C = Rn(I, e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y);
      Le(Ce, Ze, C, !0);
    }
    function eE(e) {
      let t = g(),
        n = _n(t, e);
      Le(Ce, Ze, n, !0);
    }
    function tE() {
      return g()[ee][$];
    }
    var ya = "<-- AT THIS LOCATION";
    function nE(e) {
      switch (e) {
        case 4:
          return "view container";
        case 2:
          return "element";
        case 8:
          return "ng-container";
        case 32:
          return "icu";
        case 64:
          return "i18n";
        case 16:
          return "projection";
        case 1:
          return "text";
        default:
          return "<unknown>";
      }
    }
    function oE(e, t) {
      let n = "During serialization, Angular was unable to find an element in the DOM:\n\n",
        o = "".concat(cE(e, t, !1), "\n\n"),
        r = uE();
      throw new w(-502, n + o + r);
    }
    function rE(e) {
      let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n",
        n = "".concat(lE(e), "\n\n"),
        o = t + n + dE();
      return new w(-503, o);
    }
    function sE(e) {
      let t = [];
      if (e.attrs) for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number") break;
        let r = e.attrs[n++];
        t.push("".concat(o, "=\"").concat(jr(r), "\""));
      }
      return t.join(" ");
    }
    var iE = new Set(["ngh", "ng-version", "ng-server-context"]);
    function aE(e) {
      let t = [];
      for (let n = 0; n < e.attributes.length; n++) {
        let o = e.attributes[n];
        iE.has(o.name) || t.push("".concat(o.name, "=\"").concat(jr(o.value), "\""));
      }
      return t.join(" ");
    }
    function Ws(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "\u2026";
      switch (e.type) {
        case 1:
          return "#text".concat(e.value ? "(".concat(e.value, ")") : "");
        case 2:
          let o = sE(e),
            r = e.value.toLowerCase();
          return "<".concat(r).concat(o ? " " + o : "", ">").concat(t, "</").concat(r, ">");
        case 8:
          return "<!-- ng-container -->";
        case 4:
          return "<!-- container -->";
        default:
          return "#node(".concat(nE(e.type), ")");
      }
    }
    function dr(e) {
      var _n$textContent;
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "\u2026";
      let n = e;
      switch (n.nodeType) {
        case Node.ELEMENT_NODE:
          let o = n.tagName.toLowerCase(),
            r = aE(n);
          return "<".concat(o).concat(r ? " " + r : "", ">").concat(t, "</").concat(o, ">");
        case Node.TEXT_NODE:
          let s = n.textContent ? jr(n.textContent) : "";
          return "#text".concat(s ? "(".concat(s, ")") : "");
        case Node.COMMENT_NODE:
          return "<!-- ".concat(jr((_n$textContent = n.textContent) !== null && _n$textContent !== void 0 ? _n$textContent : ""), " -->");
        default:
          return "#node(".concat(n.nodeType, ")");
      }
    }
    function cE(e, t, n) {
      let o = "  ",
        r = "";
      t.prev ? (r += o + "\u2026\n", r += o + Ws(t.prev) + "\n") : t.type && t.type & 12 && (r += o + "\u2026\n"), n ? (r += o + Ws(t) + "\n", r += o + "<!-- container -->  ".concat(ya, "\n")) : r += o + Ws(t) + "  ".concat(ya, "\n"), r += o + "\u2026\n";
      let s = t.type ? wc(e[v], t, e) : null;
      return s && (r = dr(s, "\n" + r)), r;
    }
    function lE(e) {
      let t = "  ",
        n = "",
        o = e;
      return o.previousSibling && (n += t + "\u2026\n", n += t + dr(o.previousSibling) + "\n"), n += t + dr(o) + "  ".concat(ya, "\n"), e.nextSibling && (n += t + "\u2026\n"), e.parentNode && (n = dr(o.parentNode, "\n" + n)), n;
    }
    function uE(e) {
      return "To fix this problem:\n  * check ".concat(e ? "the \"".concat(e, "\"") : "corresponding", " component for hydration-related issues\n  * check to see if your template has valid HTML structure\n  * or skip hydration by adding the `ngSkipHydration` attribute to its host node in a template\n\n");
    }
    function dE() {
      return "Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.\n\n";
    }
    function fE(e) {
      return e.replace(/\s+/gm, "");
    }
    function jr(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      return e ? (e = fE(e), e.length > t ? "".concat(e.substring(0, t - 1), "\u2026") : e) : "";
    }
    function Ep(e) {
      var _e$no;
      let t = (_e$no = e[no]) !== null && _e$no !== void 0 ? _e$no : [],
        o = e[B][T];
      for (let r of t) pE(r, o);
      e[no] = O;
    }
    function pE(e, t) {
      let n = 0,
        o = e.firstChild;
      if (o) {
        let r = e.data[an];
        for (; n < r;) {
          let s = o.nextSibling;
          hs(t, o, !1), o = s, n++;
        }
      }
    }
    function Cp(e) {
      Ep(e);
      for (let t = G; t < e.length; t++) Vr(e[t]);
    }
    function Vr(e) {
      let t = e[v];
      for (let n = _; n < t.bindingStartIndex; n++) if (se(e[n])) {
        let o = e[n];
        Cp(o);
      } else fe(e[n]) && Vr(e[n]);
    }
    function hE(e) {
      let t = e._views;
      for (let n of t) {
        let o = Ef(n);
        if (o !== null && o[q] !== null) if (fe(o)) Vr(o);else {
          let r = o[q];
          Vr(r), Cp(o);
        }
      }
    }
    var gE = new RegExp("^(\\d+)*(".concat(Nc, "|").concat(_c, ")*(.*)"));
    function mE(e, t) {
      let n = [e];
      for (let o of t) {
        let r = n.length - 1;
        if (r > 0 && n[r - 1] === o) {
          let s = n[r] || 1;
          n[r] = s + 1;
        } else n.push(o, "");
      }
      return n.join("");
    }
    function vE(e) {
      let t = e.match(gE),
        [n, o, r, s] = t,
        i = o ? parseInt(o, 10) : r,
        a = [];
      for (let [c, l, u] of s.matchAll(/(f|n)(\d*)/g)) {
        let d = parseInt(u, 10) || 1;
        a.push(l, d);
      }
      return [i, ...a];
    }
    function yE(e) {
      var _e$parent;
      return !e.prev && ((_e$parent = e.parent) === null || _e$parent === void 0 ? void 0 : _e$parent.type) === 8;
    }
    function zs(e) {
      return e.index - _;
    }
    function go(e, t) {
      var _V;
      return !(e.type & 16) && !!t[e.index] && !((_V = V(t[e.index])) !== null && _V !== void 0 && _V.isConnected);
    }
    function _s(e, t, n, o) {
      let r = null,
        s = zs(o),
        i = e.data[zi];
      if (i !== null && i !== void 0 && i[s]) r = DE(i[s], n);else if (t.firstChild === o) r = e.firstChild;else {
        var _o$prev;
        let a = o.prev === null,
          c = (_o$prev = o.prev) !== null && _o$prev !== void 0 ? _o$prev : o.parent;
        if (yE(o)) {
          let l = zs(o.parent);
          r = Qi(e, l);
        } else {
          let l = me(c, n);
          if (a) r = l.firstChild;else {
            let u = zs(c),
              d = Qi(e, u);
            if (c.type === 2 && d) {
              let p = Sc(e, u) + 1;
              r = Ns(p, d);
            } else r = l.nextSibling;
          }
        }
      }
      return r;
    }
    function Ns(e, t) {
      let n = t;
      for (let o = 0; o < e; o++) n = n.nextSibling;
      return n;
    }
    function IE(e, t) {
      let n = e;
      for (let o = 0; o < t.length; o += 2) {
        let r = t[o],
          s = t[o + 1];
        for (let i = 0; i < s; i++) switch (r) {
          case uo.FirstChild:
            n = n.firstChild;
            break;
          case uo.NextSibling:
            n = n.nextSibling;
            break;
        }
      }
      return n;
    }
    function DE(e, t) {
      let [n, ...o] = vE(e),
        r;
      if (n === _c) r = t[ee][q];else if (n === Nc) r = Ld(t[ee][q]);else {
        let s = Number(n);
        r = V(t[s + _]);
      }
      return IE(r, o);
    }
    function Ia(e, t) {
      if (e === t) return [];
      if (e.parentElement == null || t.parentElement == null) return null;
      if (e.parentElement === t.parentElement) return wE(e, t);
      {
        let n = t.parentElement,
          o = Ia(e, n),
          r = Ia(n.firstChild, t);
        return !o || !r ? null : [...o, uo.FirstChild, ...r];
      }
    }
    function wE(e, t) {
      let n = [],
        o = null;
      for (o = e; o != null && o !== t; o = o.nextSibling) n.push(uo.NextSibling);
      return o == null ? null : n;
    }
    function zl(e, t, n) {
      let o = Ia(e, t);
      return o === null ? null : mE(n, o);
    }
    function EE(e, t) {
      let n = e.parent,
        o,
        r,
        s;
      for (; n !== null && go(n, t);) n = n.parent;
      n === null || !(n.type & 3) ? (o = s = _c, r = t[ee][q]) : (o = n.index, r = V(t[o]), s = M(o - _));
      let i = V(t[e.index]);
      if (e.type & 12) {
        let c = qn(t, e);
        c && (i = c);
      }
      let a = zl(r, i, s);
      if (a === null && r !== i) {
        let c = r.ownerDocument.body;
        if (a = zl(c, i, Nc), a === null) throw oE(t, e);
      }
      return a;
    }
    function CE(e, t) {
      let n = [];
      for (let o of t) for (let r = 0; r < ((_o$Nr = o[Nr]) !== null && _o$Nr !== void 0 ? _o$Nr : 1); r++) {
        var _o$Nr;
        let s = {
          data: o,
          firstChild: null
        };
        o[an] > 0 && (s.firstChild = e, e = Ns(o[an], e)), n.push(s);
      }
      return [e, n];
    }
    var Mp = (e, t) => null;
    function ME(e, t) {
      let n = e[no];
      return !t || n === null || n.length === 0 ? null : n[0].data[Wi] === t ? n.shift() : (Ep(e), null);
    }
    function TE() {
      Mp = ME;
    }
    function un(e, t) {
      return Mp(e, t);
    }
    var Da = class {
      destroy(t) {}
      updateValue(t, n) {}
      swap(t, n) {
        let o = Math.min(t, n),
          r = Math.max(t, n),
          s = this.detach(r);
        if (r - o > 1) {
          let i = this.detach(o);
          this.attach(o, s), this.attach(r, i);
        } else this.attach(o, s);
      }
      move(t, n) {
        this.attach(n, this.detach(t));
      }
    };
    function Qs(e, t, n, o, r) {
      return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0;
    }
    function _E(e, t, n) {
      var _o4;
      let o,
        r,
        s = 0,
        i = e.length - 1;
      if (Array.isArray(t)) {
        let a = t.length - 1;
        for (; s <= i && s <= a;) {
          var _o2, _r3;
          let c = e.at(s),
            l = t[s],
            u = Qs(s, c, s, l, n);
          if (u !== 0) {
            u < 0 && e.updateValue(s, l), s++;
            continue;
          }
          let d = e.at(i),
            f = t[a],
            p = Qs(i, d, a, f, n);
          if (p !== 0) {
            p < 0 && e.updateValue(i, f), i--, a--;
            continue;
          }
          let h = n(s, c),
            m = n(i, d),
            y = n(s, l);
          if (Object.is(y, m)) {
            let I = n(a, f);
            Object.is(I, h) ? (e.swap(s, i), e.updateValue(i, f), a--, i--) : e.move(i, s), e.updateValue(s, l), s++;
            continue;
          }
          if ((_o2 = o) !== null && _o2 !== void 0 ? _o2 : o = new Hr(), (_r3 = r) !== null && _r3 !== void 0 ? _r3 : r = Zl(e, s, i, n), wa(e, o, s, y)) e.updateValue(s, l), s++, i++;else if (r.has(y)) o.set(h, e.detach(s)), i--;else {
            let I = e.create(s, t[s]);
            e.attach(s, I), s++, i++;
          }
        }
        for (; s <= a;) Ql(e, o, n, s, t[s]), s++;
      } else if (t != null) {
        let a = t[Symbol.iterator](),
          c = a.next();
        for (; !c.done && s <= i;) {
          let l = e.at(s),
            u = c.value,
            d = Qs(s, l, s, u, n);
          if (d !== 0) d < 0 && e.updateValue(s, u), s++, c = a.next();else {
            var _o3, _r4;
            (_o3 = o) !== null && _o3 !== void 0 ? _o3 : o = new Hr(), (_r4 = r) !== null && _r4 !== void 0 ? _r4 : r = Zl(e, s, i, n);
            let f = n(s, u);
            if (wa(e, o, s, f)) e.updateValue(s, u), s++, i++, c = a.next();else if (!r.has(f)) e.attach(s, e.create(s, u)), s++, i++, c = a.next();else {
              let p = n(s, l);
              o.set(p, e.detach(s)), i--;
            }
          }
        }
        for (; !c.done;) Ql(e, o, n, e.length, c.value), c = a.next();
      }
      for (; s <= i;) e.destroy(e.detach(i--));
      (_o4 = o) === null || _o4 === void 0 || _o4.forEach(a => {
        e.destroy(a);
      });
    }
    function wa(e, t, n, o) {
      return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1;
    }
    function Ql(e, t, n, o, r) {
      if (wa(e, t, o, n(o, r))) e.updateValue(o, r);else {
        let s = e.create(o, r);
        e.attach(o, s);
      }
    }
    function Zl(e, t, n, o) {
      let r = new Set();
      for (let s = t; s <= n; s++) r.add(o(s, e.at(s)));
      return r;
    }
    var Hr = class {
      constructor() {
        this.kvMap = new Map(), this._vMap = void 0;
      }
      has(t) {
        return this.kvMap.has(t);
      }
      delete(t) {
        if (!this.has(t)) return !1;
        let n = this.kvMap.get(t);
        return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0;
      }
      get(t) {
        return this.kvMap.get(t);
      }
      set(t, n) {
        if (this.kvMap.has(t)) {
          let o = this.kvMap.get(t);
          this._vMap === void 0 && (this._vMap = new Map());
          let r = this._vMap;
          for (; r.has(o);) o = r.get(o);
          r.set(o, n);
        } else this.kvMap.set(t, n);
      }
      forEach(t) {
        for (let [n, o] of this.kvMap) if (t(o, n), this._vMap !== void 0) {
          let r = this._vMap;
          for (; r.has(o);) o = r.get(o), t(o, n);
        }
      }
    };
    function Ho(e, t, n, o) {
      var _o$injector, _o$dehydratedView;
      let r = t.tView,
        i = e[D] & 4096 ? 4096 : 16,
        a = Ds(e, r, n, i, null, t, null, null, null, (_o$injector = o === null || o === void 0 ? void 0 : o.injector) !== null && _o$injector !== void 0 ? _o$injector : null, (_o$dehydratedView = o === null || o === void 0 ? void 0 : o.dehydratedView) !== null && _o$dehydratedView !== void 0 ? _o$dehydratedView : null),
        c = e[t.index];
      a[Mo] = c;
      let l = e[He];
      return l !== null && (a[He] = l.createEmbeddedView(r)), $c(r, a, n), a;
    }
    function Tp(e, t) {
      let n = G + t;
      if (n < e.length) return e[n];
    }
    function dn(e, t) {
      return !t || t.firstChild === null || Tr(e);
    }
    function $o(e, t, n) {
      let o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
      let r = t[v];
      if (sI(r, t, e, n), o) {
        let i = Oi(n, e),
          a = t[T],
          c = fs(a, e[Be]);
        c !== null && nI(r, e[ge], a, t, c, i);
      }
      let s = t[Ae];
      s !== null && s.firstChild !== null && (s.firstChild = null);
    }
    function Bc(e, t) {
      let n = lo(e, t);
      return n !== void 0 && ds(n[v], n), n;
    }
    var Uc = (_e15 => {
      class e {}
      _e15 = e;
      _e15.__NG_ELEMENT_ID__ = NE;
      return e;
    })();
    function NE() {
      let e = F();
      return Np(e, g());
    }
    var bE = Uc,
      _p = class extends bE {
        constructor(t, n, o) {
          super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o;
        }
        get element() {
          return Mn(this._hostTNode, this._hostLView);
        }
        get injector() {
          return new W(this._hostTNode, this._hostLView);
        }
        get parentInjector() {
          let t = ss(this._hostTNode, this._hostLView);
          if (lc(t)) {
            let n = so(t, this._hostLView),
              o = ro(t),
              r = n[v].data[o + 8];
            return new W(r, n);
          } else return new W(null, this._hostLView);
        }
        clear() {
          for (; this.length > 0;) this.remove(this.length - 1);
        }
        get(t) {
          let n = Yl(this._lContainer);
          return n !== null && n[t] || null;
        }
        get length() {
          return this._lContainer.length - G;
        }
        createEmbeddedView(t, n, o) {
          let r, s;
          typeof o == "number" ? r = o : o != null && (r = o.index, s = o.injector);
          let i = un(this._lContainer, t.ssrId),
            a = t.createEmbeddedViewImpl(n || {}, s, i);
          return this.insertImpl(a, r, dn(this._hostTNode, i)), a;
        }
        createComponent(t, n, o, r, s) {
          var _c$componentType, _u$id, _d$firstChild;
          let i = t && !jn(t),
            a;
          if (i) a = n;else {
            let h = n || {};
            a = h.index, o = h.injector, r = h.projectableNodes, s = h.environmentInjector || h.ngModuleRef;
          }
          let c = i ? t : new At(R(t)),
            l = o || this.parentInjector;
          if (!s && c.ngModule == null) {
            let m = (i ? l : this.parentInjector).get(Oe, null);
            m && (s = m);
          }
          let u = R((_c$componentType = c.componentType) !== null && _c$componentType !== void 0 ? _c$componentType : {}),
            d = un(this._lContainer, (_u$id = u === null || u === void 0 ? void 0 : u.id) !== null && _u$id !== void 0 ? _u$id : null),
            f = (_d$firstChild = d === null || d === void 0 ? void 0 : d.firstChild) !== null && _d$firstChild !== void 0 ? _d$firstChild : null,
            p = c.create(l, r, f, s);
          return this.insertImpl(p.hostView, a, dn(this._hostTNode, d)), p;
        }
        insert(t, n) {
          return this.insertImpl(t, n, !0);
        }
        insertImpl(t, n, o) {
          let r = t._lView;
          if (av(r)) {
            let a = this.indexOf(t);
            if (a !== -1) this.detach(a);else {
              let c = r[B],
                l = new _p(c, c[ge], c[B]);
              l.detach(l.indexOf(t));
            }
          }
          let s = this._adjustIndex(n),
            i = this._lContainer;
          return $o(i, r, s, o), t.attachToViewContainerRef(), Cd(Zs(i), s, t), t;
        }
        move(t, n) {
          return this.insert(t, n);
        }
        indexOf(t) {
          let n = Yl(this._lContainer);
          return n !== null ? n.indexOf(t) : -1;
        }
        remove(t) {
          let n = this._adjustIndex(t, -1),
            o = lo(this._lContainer, n);
          o && (Cr(Zs(this._lContainer), n), ds(o[v], o));
        }
        detach(t) {
          let n = this._adjustIndex(t, -1),
            o = lo(this._lContainer, n);
          return o && Cr(Zs(this._lContainer), n) != null ? new St(o) : null;
        }
        _adjustIndex(t) {
          let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return t !== null && t !== void 0 ? t : this.length + n;
        }
      };
    function Yl(e) {
      return e[Dr];
    }
    function Zs(e) {
      return e[Dr] || (e[Dr] = []);
    }
    function Np(e, t) {
      let n,
        o = t[e.index];
      return se(o) ? n = o : (n = jf(o, t, null, e), t[e.index] = n, ws(t, n)), bp(n, t, e, o), new _p(n, e, t);
    }
    function xE(e, t) {
      let n = e[T],
        o = n.createComment(""),
        r = me(t, e),
        s = fs(n, r);
      return xt(n, s, o, uI(n, r), !1), o;
    }
    var bp = Sp,
      qc = (e, t, n) => !1;
    function xp(e, t, n) {
      return qc(e, t, n);
    }
    function Sp(e, t, n, o) {
      if (e[Be]) return;
      let r;
      n.type & 8 ? r = V(o) : r = xE(t, n), e[Be] = r;
    }
    function SE(e, t, n) {
      var _o$data$fo;
      if (e[Be] && e[no]) return !0;
      let o = n[Ae],
        r = t.index - _;
      if (!o || _r(t) || vs(o, r)) return !1;
      let i = Qi(o, r),
        a = (_o$data$fo = o.data[fo]) === null || _o$data$fo === void 0 ? void 0 : _o$data$fo[r],
        [c, l] = CE(i, a);
      return e[Be] = c, e[no] = l, !0;
    }
    function AE(e, t, n, o) {
      qc(e, n, t) || Sp(e, t, n, o);
    }
    function PE() {
      bp = AE, qc = SE;
    }
    function OE(e, t, n, o, r, s, i, a, c) {
      let l = t.consts,
        u = Tn(t, e, 4, i || null, Ue(l, a));
      Fc(t, n, u, Ue(l, c)), rs(t, u);
      let d = u.tView = Lc(2, u, o, r, s, t.directiveRegistry, t.pipeRegistry, null, t.schemas, l, null);
      return t.queries !== null && (t.queries.template(t, u), d.queries = t.queries.embeddedTView(u)), u;
    }
    function mo(e, t, n, o, r, s, i, a) {
      let c = g(),
        l = S(),
        u = e + _,
        d = l.firstCreatePass ? OE(u, l, c, t, n, o, r, s, i) : l.data[u];
      qe(d, !1);
      let f = Ap(l, c, d, e);
      os() && ps(l, c, f, d), ie(f, c);
      let p = jf(f, c, f, d);
      return c[u] = p, ws(c, p), xp(p, d, c), es(d) && Rc(l, c, d), i != null && kc(c, d, a), mo;
    }
    var Ap = Pp;
    function Pp(e, t, n, o) {
      return gt(!0), t[T].createComment("");
    }
    function RE(e, t, n, o) {
      var _r$data$Gi$o, _r$data$Gi;
      let r = t[Ae],
        s = !r || vn() || vs(r, o);
      if (gt(s), s) return Pp(e, t);
      let i = (_r$data$Gi$o = (_r$data$Gi = r.data[Gi]) === null || _r$data$Gi === void 0 ? void 0 : _r$data$Gi[o]) !== null && _r$data$Gi$o !== void 0 ? _r$data$Gi$o : null;
      i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i);
      let a = _s(r, e, t, n);
      ms(r, o, a);
      let c = Sc(r, o);
      return Ns(c, a);
    }
    function kE() {
      Ap = RE;
    }
    function LE(e, t, n) {
      kt("NgControlFlow");
      let o = g(),
        r = Ge(),
        s = Ta(o, _ + e),
        i = 0;
      if (Y(o, r, t)) {
        let a = signals.setActiveConsumer(null);
        try {
          if (Bc(s, i), t !== -1) {
            let c = _a(o[v], _ + t),
              l = un(s, c.tView.ssrId),
              u = Ho(o, c, n, {
                dehydratedView: l
              });
            $o(s, u, i, dn(c, l));
          }
        } finally {
          signals.setActiveConsumer(a);
        }
      } else {
        let a = Tp(s, i);
        a !== void 0 && (a[$] = n);
      }
    }
    var Ea = class {
      constructor(t, n, o) {
        this.lContainer = t, this.$implicit = n, this.$index = o;
      }
      get $count() {
        return this.lContainer.length - G;
      }
    };
    function FE(e) {
      return e;
    }
    function jE(e, t) {
      return t;
    }
    var Ca = class {
      constructor(t, n, o) {
        this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o;
      }
    };
    function VE(e, t, n, o, r, s, i, a, c, l, u) {
      kt("NgControlFlow");
      let d = c !== void 0,
        f = g(),
        p = a ? i.bind(f[ee][$]) : i,
        h = new Ca(d, p);
      f[_ + e] = h, mo(e + 1, t, n, o, r, s), d && mo(e + 2, c, l, u);
    }
    var Ma = class extends Da {
      constructor(t, n, o) {
        super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o, this.needsIndexUpdate = !1;
      }
      get length() {
        return this.lContainer.length - G;
      }
      at(t) {
        return this.getLView(t)[$].$implicit;
      }
      attach(t, n) {
        let o = n[Ae];
        this.needsIndexUpdate || (this.needsIndexUpdate = t !== this.length), $o(this.lContainer, n, t, dn(this.templateTNode, o));
      }
      detach(t) {
        return this.needsIndexUpdate || (this.needsIndexUpdate = t !== this.length - 1), $E(this.lContainer, t);
      }
      create(t, n) {
        let o = un(this.lContainer, this.templateTNode.tView.ssrId);
        return Ho(this.hostLView, this.templateTNode, new Ea(this.lContainer, n, t), {
          dehydratedView: o
        });
      }
      destroy(t) {
        ds(t[v], t);
      }
      updateValue(t, n) {
        this.getLView(t)[$].$implicit = n;
      }
      reset() {
        this.needsIndexUpdate = !1;
      }
      updateIndexes() {
        if (this.needsIndexUpdate) for (let t = 0; t < this.length; t++) this.getLView(t)[$].$index = t;
      }
      getLView(t) {
        return BE(this.lContainer, t);
      }
    };
    function HE(e) {
      let t = signals.setActiveConsumer(null),
        n = ce();
      try {
        let o = g(),
          r = o[v],
          s = o[n];
        if (s.liveCollection === void 0) {
          let a = n + 1,
            c = Ta(o, a),
            l = _a(r, a);
          s.liveCollection = new Ma(c, o, l);
        } else s.liveCollection.reset();
        let i = s.liveCollection;
        if (_E(i, e, s.trackByFn), i.updateIndexes(), s.hasEmptyBlock) {
          let a = Ge(),
            c = i.length === 0;
          if (Y(o, a, c)) {
            let l = n + 2,
              u = Ta(o, l);
            if (c) {
              let d = _a(r, l),
                f = un(u, d.tView.ssrId),
                p = Ho(o, d, void 0, {
                  dehydratedView: f
                });
              $o(u, p, 0, dn(d, f));
            } else Bc(u, 0);
          }
        }
      } finally {
        signals.setActiveConsumer(t);
      }
    }
    function Ta(e, t) {
      return e[t];
    }
    function $E(e, t) {
      return lo(e, t);
    }
    function BE(e, t) {
      return Tp(e, t);
    }
    function _a(e, t) {
      return No(e, t);
    }
    var z = function (e) {
        return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e;
      }(z || {}),
      Jl = 0,
      UE = 1,
      Q = function (e) {
        return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e;
      }(Q || {}),
      vo = function (e) {
        return e[e.Initial = -1] = "Initial", e;
      }(vo || {}),
      Yt = 0,
      bs = 1,
      Vn = 2,
      nr = 3,
      Op = 4,
      Rp = 5,
      kp = function (e) {
        return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e;
      }(kp || {});
    function xs(e, t, n) {
      let o = e === 1 ? Rp : Op;
      t[o] === null && (t[o] = []), t[o].push(n);
    }
    function Na(e, t) {
      let n = e === 1 ? Rp : Op,
        o = t[n];
      if (o !== null) {
        for (let r of o) r();
        t[n] = null;
      }
    }
    function Lp(e) {
      Na(1, e), Na(0, e);
    }
    function Ss(e) {
      return e + 1;
    }
    function Lt(e, t) {
      e[v];
        let o = Ss(t.index);
      return e[o];
    }
    function qE(e, t, n) {
      e[v];
        let r = Ss(t);
      e[r] = n;
    }
    function Ne(e, t) {
      let n = Ss(t.index);
      return e.data[n];
    }
    function GE(e, t, n) {
      let o = Ss(t);
      e.data[o] = n;
    }
    function WE(e, t, n) {
      let o = t[v],
        r = Ne(o, n);
      switch (e) {
        case Q.Complete:
          return r.primaryTmplIndex;
        case Q.Loading:
          return r.loadingTmplIndex;
        case Q.Error:
          return r.errorTmplIndex;
        case Q.Placeholder:
          return r.placeholderTmplIndex;
        default:
          return null;
      }
    }
    function ba(e, t) {
      var _e$placeholderBlockCo, _e$placeholderBlockCo2, _e$loadingBlockConfig, _e$loadingBlockConfig2;
      return t === Q.Placeholder ? (_e$placeholderBlockCo = (_e$placeholderBlockCo2 = e.placeholderBlockConfig) === null || _e$placeholderBlockCo2 === void 0 ? void 0 : _e$placeholderBlockCo2[Jl]) !== null && _e$placeholderBlockCo !== void 0 ? _e$placeholderBlockCo : null : t === Q.Loading ? (_e$loadingBlockConfig = (_e$loadingBlockConfig2 = e.loadingBlockConfig) === null || _e$loadingBlockConfig2 === void 0 ? void 0 : _e$loadingBlockConfig2[Jl]) !== null && _e$loadingBlockConfig !== void 0 ? _e$loadingBlockConfig : null : null;
    }
    function Fp(e) {
      var _e$loadingBlockConfig3, _e$loadingBlockConfig4;
      return (_e$loadingBlockConfig3 = (_e$loadingBlockConfig4 = e.loadingBlockConfig) === null || _e$loadingBlockConfig4 === void 0 ? void 0 : _e$loadingBlockConfig4[UE]) !== null && _e$loadingBlockConfig3 !== void 0 ? _e$loadingBlockConfig3 : null;
    }
    function Xl(e, t) {
      if (!e || e.length === 0) return t;
      let n = new Set(e);
      for (let o of t) n.add(o);
      return e.length === n.size ? e : Array.from(n);
    }
    function zE(e, t) {
      let n = t.primaryTmplIndex + _;
      return No(e, n);
    }
    function QE(e) {
      return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number";
    }
    var $r = {
        passive: !0,
        capture: !0
      },
      Ys = new WeakMap(),
      Js = new WeakMap(),
      jt = new WeakMap(),
      Kl = ["click", "keydown"],
      eu = ["mouseenter", "focusin"],
      Vt = null,
      Xs = 0,
      yo = class {
        constructor() {
          this.callbacks = new Set(), this.listener = () => {
            for (let t of this.callbacks) t();
          };
        }
      };
    function jp(e, t) {
      let n = Js.get(e);
      if (!n) {
        n = new yo(), Js.set(e, n);
        for (let o of Kl) e.addEventListener(o, n.listener, $r);
      }
      return n.callbacks.add(t), () => {
        let {
          callbacks: o,
          listener: r
        } = n;
        if (o.delete(t), o.size === 0) {
          Js.delete(e);
          for (let s of Kl) e.removeEventListener(s, r, $r);
        }
      };
    }
    function Vp(e, t) {
      let n = Ys.get(e);
      if (!n) {
        n = new yo(), Ys.set(e, n);
        for (let o of eu) e.addEventListener(o, n.listener, $r);
      }
      return n.callbacks.add(t), () => {
        let {
          callbacks: o,
          listener: r
        } = n;
        if (o.delete(t), o.size === 0) {
          for (let s of eu) e.removeEventListener(s, r, $r);
          Ys.delete(e);
        }
      };
    }
    function Hp(e, t, n) {
      let o = n.get(oe),
        r = jt.get(e);
      return Vt = Vt || o.runOutsideAngular(() => new IntersectionObserver(s => {
        for (let i of s) i.isIntersecting && jt.has(i.target) && o.run(jt.get(i.target).listener);
      })), r || (r = new yo(), o.runOutsideAngular(() => Vt.observe(e)), jt.set(e, r), Xs++), r.callbacks.add(t), () => {
        var _Vt, _Vt2;
        jt.has(e) && (r.callbacks.delete(t), r.callbacks.size === 0 && ((_Vt = Vt) !== null && _Vt !== void 0 && _Vt.unobserve(e), jt.delete(e), Xs--), Xs === 0 && ((_Vt2 = Vt) !== null && _Vt2 !== void 0 && _Vt2.disconnect(), Vt = null));
      };
    }
    function ZE(e, t, n) {
      var _e$t$index$G;
      return n == null ? e : n >= 0 ? Ju(n, e) : (_e$t$index$G = e[t.index][G]) !== null && _e$t$index$G !== void 0 ? _e$t$index$G : null;
    }
    function YE(e, t) {
      return _o(_ + t, e);
    }
    function kn(e, t, n, o, r, s, i) {
      let a = e[he];
      function c() {
        if (fi(e)) return;
        let l = Lt(e, t),
          u = l[bs];
        if (u !== vo.Initial && u !== Q.Placeholder) return;
        let d = ZE(e, t, o);
        if (!d) {
          Hl(c, {
            injector: a
          });
          return;
        }
        if (fi(d)) return;
        let f = YE(d, n),
          p = r(f, () => {
            e !== d && nc(d, p), s();
          }, a);
        e !== d && ns(d, p), xs(i, l, p);
      }
      Hl(c, {
        injector: a
      });
    }
    function $p(e, t) {
      let o = t[he].get(KE),
        r = () => o.remove(e);
      return o.add(e), r;
    }
    var JE = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout,
      XE = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout,
      KE = (_e16 => {
        class e {
          constructor() {
            this.executingCallbacks = !1, this.idleId = null, this.current = new Set(), this.deferred = new Set(), this.ngZone = L(oe), this.requestIdleCallbackFn = JE().bind(globalThis), this.cancelIdleCallbackFn = XE().bind(globalThis);
          }
          add(n) {
            (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback();
          }
          remove(n) {
            let {
              current: o,
              deferred: r
            } = this;
            o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback();
          }
          scheduleIdleCallback() {
            let n = () => {
              this.cancelIdleCallback(), this.executingCallbacks = !0;
              for (let o of this.current) o();
              if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
                for (let o of this.deferred) this.current.add(o);
                this.deferred.clear(), this.scheduleIdleCallback();
              }
            };
            this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n));
          }
          cancelIdleCallback() {
            this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null);
          }
          ngOnDestroy() {
            this.cancelIdleCallback(), this.current.clear(), this.deferred.clear();
          }
        }
        _e16 = e;
        _e16.ɵprov = U({
          token: _e16,
          providedIn: "root",
          factory: () => new _e16()
        });
        return e;
      })();
    function Bp(e) {
      return (t, n) => Up(e, t, n);
    }
    function Up(e, t, n) {
      let r = n[he].get(eC),
        s = () => r.remove(t);
      return r.add(e, t), s;
    }
    var eC = (_e17 => {
        class e {
          constructor() {
            this.executingCallbacks = !1, this.timeoutId = null, this.invokeTimerAt = null, this.current = [], this.deferred = [];
          }
          add(n, o) {
            let r = this.executingCallbacks ? this.deferred : this.current;
            this.addToQueue(r, Date.now() + n, o), this.scheduleTimer();
          }
          remove(n) {
            let {
              current: o,
              deferred: r
            } = this;
            this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout();
          }
          addToQueue(n, o, r) {
            let s = n.length;
            for (let i = 0; i < n.length; i += 2) if (n[i] > o) {
              s = i;
              break;
            }
            Md(n, s, o, r);
          }
          removeFromQueue(n, o) {
            let r = -1;
            for (let s = 0; s < n.length; s += 2) if (n[s + 1] === o) {
              r = s;
              break;
            }
            return r > -1 && yl(n, r, 2), r;
          }
          scheduleTimer() {
            let n = () => {
              this.clearTimeout(), this.executingCallbacks = !0;
              let r = [...this.current],
                s = Date.now();
              for (let a = 0; a < r.length; a += 2) {
                let c = r[a],
                  l = r[a + 1];
                if (c <= s) l();else break;
              }
              let i = -1;
              for (let a = 0; a < this.current.length && this.current[a] <= s; a += 2) i = a + 1;
              if (i >= 0 && yl(this.current, 0, i + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
                for (let a = 0; a < this.deferred.length; a += 2) {
                  let c = this.deferred[a],
                    l = this.deferred[a + 1];
                  this.addToQueue(this.current, c, l);
                }
                this.deferred.length = 0;
              }
              this.scheduleTimer();
            };
            if (this.current.length > 0) {
              let r = Date.now(),
                s = this.current[0];
              if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
                this.clearTimeout();
                let i = Math.max(s - r, 16);
                this.invokeTimerAt = s, this.timeoutId = setTimeout(n, i);
              }
            }
          }
          clearTimeout() {
            this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
          }
          ngOnDestroy() {
            this.clearTimeout(), this.current.length = 0, this.deferred.length = 0;
          }
        }
        _e17 = e;
        _e17.ɵprov = U({
          token: _e17,
          providedIn: "root",
          factory: () => new _e17()
        });
        return e;
      })(),
      ob = new P("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"),
      tC = new P("");
    function qp(e) {
      var _e$get;
      return ((_e$get = e.get(tC, null, {
        optional: !0
      })) === null || _e$get === void 0 ? void 0 : _e$get.behavior) === kp.Manual ? !1 : lt(e);
    }
    var xa = null;
    function nC(e, t, n, o) {
      let r = e.consts;
      n != null && (t.placeholderBlockConfig = Ue(r, n)), o != null && (t.loadingBlockConfig = Ue(r, o)), xa === null && (xa = yC);
    }
    function oC(e, t, n, o, r, s, i, a, c) {
      let l = g(),
        u = S(),
        d = e + _;
      if (mo(e, null, 0, 0), u.firstCreatePass) {
        kt("NgDefer");
        let y = {
          primaryTmplIndex: t,
          loadingTmplIndex: o !== null && o !== void 0 ? o : null,
          placeholderTmplIndex: r !== null && r !== void 0 ? r : null,
          errorTmplIndex: s !== null && s !== void 0 ? s : null,
          placeholderBlockConfig: null,
          loadingBlockConfig: null,
          dependencyResolverFn: n !== null && n !== void 0 ? n : null,
          loadingState: z.NOT_STARTED,
          loadingPromise: null
        };
        c !== null && c !== void 0 && c(u, y, a, i), GE(u, d, y);
      }
      let f = F(),
        p = l[d];
      xp(p, f, l);
      let h = [null, vo.Initial, null, null, null, null];
      qE(l, d, h);
      let m = () => Lp(h);
      xs(0, h, () => nc(l, m)), ns(l, m);
    }
    function rC(e) {
      let t = g(),
        n = Ge();
      if (Y(t, n, e)) {
        let o = signals.setActiveConsumer(null);
        try {
          let r = !!e,
            s = H(),
            a = Lt(t, s)[bs];
          r === !1 && a === vo.Initial ? Ln(t, s) : r === !0 && (a === vo.Initial || a === Q.Placeholder) && Fn(t, s);
        } finally {
          signals.setActiveConsumer(o);
        }
      }
    }
    function sC(e) {
      let t = g(),
        n = Ge();
      if (Y(t, n, e)) {
        let o = signals.setActiveConsumer(null);
        try {
          let r = !!e,
            s = t[v],
            i = H(),
            a = Ne(s, i);
          r === !0 && a.loadingState === z.NOT_STARTED && Bo(a, t, i);
        } finally {
          signals.setActiveConsumer(o);
        }
      }
    }
    function iC() {
      Gp($p);
    }
    function aC() {
      Wp($p);
    }
    function cC() {
      let e = g(),
        t = F(),
        n = e[v];
      Ne(n, t).loadingTmplIndex === null && Ln(e, t), Fn(e, t);
    }
    function lC() {
      let e = g(),
        t = F(),
        n = e[v],
        o = Ne(n, t);
      o.loadingState === z.NOT_STARTED && Gc(o, e, t);
    }
    function uC(e) {
      Gp(Bp(e));
    }
    function dC(e) {
      Wp(Bp(e));
    }
    function fC(e, t) {
      let n = g(),
        o = F();
      Ln(n, o), kn(n, o, e, t, Vp, () => Fn(n, o), 0);
    }
    function pC(e, t) {
      let n = g(),
        o = F(),
        r = n[v],
        s = Ne(r, o);
      s.loadingState === z.NOT_STARTED && kn(n, o, e, t, Vp, () => Bo(s, n, o), 1);
    }
    function hC(e, t) {
      let n = g(),
        o = F();
      Ln(n, o), kn(n, o, e, t, jp, () => Fn(n, o), 0);
    }
    function gC(e, t) {
      let n = g(),
        o = F(),
        r = n[v],
        s = Ne(r, o);
      s.loadingState === z.NOT_STARTED && kn(n, o, e, t, jp, () => Bo(s, n, o), 1);
    }
    function mC(e, t) {
      let n = g(),
        o = F();
      Ln(n, o), kn(n, o, e, t, Hp, () => Fn(n, o), 0);
    }
    function vC(e, t) {
      let n = g(),
        o = F(),
        r = n[v],
        s = Ne(r, o);
      s.loadingState === z.NOT_STARTED && kn(n, o, e, t, Hp, () => Bo(s, n, o), 1);
    }
    function Gp(e) {
      let t = g(),
        n = F();
      Ln(t, n);
      let o = e(() => Fn(t, n), t),
        r = Lt(t, n);
      xs(0, r, o);
    }
    function Wp(e) {
      let t = g(),
        n = F(),
        o = t[v],
        r = Ne(o, n);
      if (r.loadingState === z.NOT_STARTED) {
        let s = Lt(t, n),
          a = e(() => Bo(r, t, n), t);
        xs(1, s, a);
      }
    }
    function ut(e, t, n) {
      var _i$Yt;
      let o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
      let r = n[B],
        s = r[v];
      if (fi(r)) return;
      let i = Lt(r, t),
        a = i[bs];
      if (nu(a, e) && nu((_i$Yt = i[Yt]) !== null && _i$Yt !== void 0 ? _i$Yt : -1, e)) {
        let c = Ne(s, t),
          u = !o && (Fp(c) !== null || ba(c, Q.Loading) !== null || ba(c, Q.Placeholder)) ? xa : zp;
        try {
          u(e, i, n, t, r);
        } catch (d) {
          Es(r, d);
        }
      }
    }
    function zp(e, t, n, o, r) {
      let s = WE(e, r, o);
      if (s !== null) {
        t[bs] = e;
        let i = r[v],
          a = s + _,
          c = No(i, a),
          l = 0;
        Bc(n, l);
        let u = un(n, c.tView.ssrId),
          d = Ho(r, c, null, {
            dehydratedView: u
          });
        $o(n, d, l, dn(c, u)), jo(d);
      }
    }
    function yC(e, t, n, o, r) {
      let s = Date.now(),
        i = r[v],
        a = Ne(i, o);
      if (t[Vn] === null || t[Vn] <= s) {
        t[Vn] = null;
        let c = Fp(a),
          l = t[nr] !== null;
        if (e === Q.Loading && c !== null && !l) {
          t[Yt] = e;
          let u = tu(c, t, o, n, r);
          t[nr] = u;
        } else {
          e > Q.Loading && l && (t[nr](), t[nr] = null, t[Yt] = null), zp(e, t, n, o, r);
          let u = ba(a, e);
          u !== null && (t[Vn] = s + u, tu(u, t, o, n, r));
        }
      } else t[Yt] = e;
    }
    function tu(e, t, n, o, r) {
      return Up(e, () => {
        let i = t[Yt];
        t[Vn] = null, t[Yt] = null, i !== null && ut(i, n, o);
      }, r);
    }
    function nu(e, t) {
      return e < t;
    }
    function Bo(e, t, n) {
      t[he] && qp(t[he]) && Gc(e, t, n);
    }
    function Gc(e, t, n) {
      t[he];
        let r = t[v];
      if (e.loadingState !== z.NOT_STARTED) return;
      let s = Lt(t, n),
        i = zE(r, e);
      e.loadingState = z.IN_PROGRESS, Na(1, s);
      let a = e.dependencyResolverFn;
      if (!a) {
        e.loadingPromise = Promise.resolve().then(() => {
          e.loadingPromise = null, e.loadingState = z.COMPLETE;
        });
        return;
      }
      e.loadingPromise = Promise.allSettled(a()).then(c => {
        let l = !1,
          u = [],
          d = [];
        for (let f of c) if (f.status === "fulfilled") {
          let p = f.value,
            h = R(p) || Ie(p);
          if (h) u.push(h);else {
            let m = De(p);
            m && d.push(m);
          }
        } else {
          l = !0;
          break;
        }
        if (e.loadingPromise = null, l) {
          if (e.loadingState = z.FAILED, e.errorTmplIndex === null) {
            Fy(t);
              let p = new w(750, !1);
            Es(t, p);
          }
        } else {
          e.loadingState = z.COMPLETE;
          let f = i.tView;
          u.length > 0 && (f.directiveRegistry = Xl(f.directiveRegistry, u)), d.length > 0 && (f.pipeRegistry = Xl(f.pipeRegistry, d));
        }
      });
    }
    function Ln(e, t) {
      let n = e[t.index];
      ut(Q.Placeholder, t, n);
    }
    function ou(e, t, n) {
      e.loadingPromise.then(() => {
        e.loadingState === z.COMPLETE ? ut(Q.Complete, t, n) : e.loadingState === z.FAILED && ut(Q.Error, t, n);
      });
    }
    function Fn(e, t) {
      let n = e[v],
        o = e[t.index],
        r = e[he];
      if (!qp(r)) return;
      let s = Lt(e, t),
        i = Ne(n, t);
      switch (Lp(s), i.loadingState) {
        case z.NOT_STARTED:
          ut(Q.Loading, t, o), Gc(i, e, t), i.loadingState === z.IN_PROGRESS && ou(i, t, o);
          break;
        case z.IN_PROGRESS:
          ut(Q.Loading, t, o), ou(i, t, o);
          break;
        case z.COMPLETE:
          ut(Q.Complete, t, o);
          break;
        case z.FAILED:
          ut(Q.Error, t, o);
          break;
      }
    }
    function IC(e, t, n, o, r, s) {
      let i = t.consts,
        a = Ue(i, r),
        c = Tn(t, e, 2, o, a);
      return Fc(t, n, c, Ue(i, s)), c.attrs !== null && kr(c, c.attrs, !1), c.mergedAttrs !== null && kr(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c;
    }
    function Wc(e, t, n, o) {
      let r = g(),
        s = S(),
        i = _ + e,
        a = r[T],
        c = s.firstCreatePass ? IC(i, s, r, t, n, o) : s.data[i],
        l = Zp(s, r, c, a, t, e);
      r[i] = l;
      let u = es(c);
      return qe(c, !0), ff(a, l, c), (c.flags & 32) !== 32 && os() && ps(s, r, l, c), lv() === 0 && ie(l, r), uv(), u && (Rc(s, r, c), Oc(s, c, r)), o !== null && kc(r, c), Wc;
    }
    function zc() {
      let e = F();
      oc() ? rc() : (e = e.parent, qe(e, !1));
      let t = e;
      fv(t) && mv(), dv();
      let n = S();
      return n.firstCreatePass && (rs(n, e), Xa(e) && n.queries.elementEnd(e)), t.classesWithoutHost != null && Ov(t) && va(n, t, g(), t.classesWithoutHost, !0), t.stylesWithoutHost != null && Rv(t) && va(n, t, g(), t.stylesWithoutHost, !1), zc;
    }
    function Qp(e, t, n, o) {
      return Wc(e, t, n, o), zc(), Qp;
    }
    var Zp = (e, t, n, o, r, s) => (gt(!0), us(o, r, ud()));
    function DC(e, t, n, o, r, s) {
      let i = t[Ae],
        a = !i || vn() || vs(i, s);
      if (gt(a), a) return us(o, r, ud());
      let c = _s(i, e, t, n);
      return Cf(i, s) && ms(i, s, c.nextSibling), i && (Bd(n) || Ud(c)) && Rt(n) && (hv(n), lf(c)), c;
    }
    function wC() {
      Zp = DC;
    }
    function EC(e, t, n, o, r) {
      let s = t.consts,
        i = Ue(s, o),
        a = Tn(t, e, 8, "ng-container", i);
      i !== null && kr(a, i, !0);
      let c = Ue(s, r);
      return Fc(t, n, a, c), t.queries !== null && t.queries.elementStart(t, a), a;
    }
    function Qc(e, t, n) {
      let o = g(),
        r = S(),
        s = e + _,
        i = r.firstCreatePass ? EC(s, r, o, t, n) : r.data[s];
      qe(i, !0);
      let a = Jp(r, o, i, e);
      return o[s] = a, os() && ps(r, o, a, i), ie(a, o), es(i) && (Rc(r, o, i), Oc(r, i, o)), n != null && kc(o, i), Qc;
    }
    function Zc() {
      let e = F(),
        t = S();
      return oc() ? rc() : (e = e.parent, qe(e, !1)), t.firstCreatePass && (rs(t, e), Xa(e) && t.queries.elementEnd(e)), Zc;
    }
    function Yp(e, t, n) {
      return Qc(e, t, n), Zc(), Yp;
    }
    var Jp = (e, t, n, o) => (gt(!0), Dc(t[T], ""));
    function CC(e, t, n, o) {
      let r,
        s = t[Ae],
        i = !s || vn();
      if (gt(i), i) return Dc(t[T], "");
      let a = _s(s, e, t, n),
        c = GI(s, o);
      return ms(s, o, a), r = Ns(c, a), r;
    }
    function MC() {
      Jp = CC;
    }
    function TC() {
      return g();
    }
    function Xp(e, t, n) {
      let o = g(),
        r = Ge();
      if (Y(o, r, t)) {
        let s = S(),
          i = H();
        Me(s, i, o, e, t, o[T], n, !0);
      }
      return Xp;
    }
    function Kp(e, t, n) {
      let o = g(),
        r = Ge();
      if (Y(o, r, t)) {
        let s = S(),
          i = H(),
          a = sc(s.data),
          c = Bf(a, i, o);
        Me(s, i, o, e, t, c, n, !0);
      }
      return Kp;
    }
    var It = void 0;
    function _C(e) {
      let n = Math.floor(Math.abs(e)),
        o = e.toString().replace(/^[^.]*\.?/, "").length;
      return n === 1 && o === 0 ? 1 : 5;
    }
    var NC = ["en", [["a", "p"], ["AM", "PM"], It], [["AM", "PM"], It, It], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], It, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], It, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", It, "{1} 'at' {0}", It], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", _C],
      Jt = {};
    function rb(e, t, n) {
      typeof t != "string" && (n = t, t = e[Io.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), Jt[t] = e, n && (Jt[t][Io.ExtraData] = n);
    }
    function eh(e) {
      let t = xC(e),
        n = ru(t);
      if (n) return n;
      let o = t.split("-")[0];
      if (n = ru(o), n) return n;
      if (o === "en") return NC;
      throw new w(701, !1);
    }
    function sb(e) {
      return eh(e)[Io.CurrencyCode] || null;
    }
    function bC(e) {
      return eh(e)[Io.PluralCase];
    }
    function ru(e) {
      return e in Jt || (Jt[e] = ue.ng && ue.ng.common && ue.ng.common.locales && ue.ng.common.locales[e]), Jt[e];
    }
    function ib() {
      Jt = {};
    }
    var Io = function (e) {
      return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e;
    }(Io || {});
    function xC(e) {
      return e.toLowerCase().replace(/_/g, "-");
    }
    var SC = ["zero", "one", "two", "few", "many"];
    function AC(e, t) {
      let n = bC(t)(parseInt(e, 10)),
        o = SC[n];
      return o !== void 0 ? o : "other";
    }
    var fn = "en-US",
      PC = "USD",
      th = {
        marker: "element"
      },
      nh = {
        marker: "ICU"
      },
      Ye = function (e) {
        return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e;
      }(Ye || {}),
      oh = fn;
    function rh(e) {
      hr(e, "Expected localeId to be defined"), typeof e == "string" && (oh = e.toLowerCase().replace(/_/g, "-"));
    }
    function OC() {
      return oh;
    }
    function sh(e, t, n) {
      let o = t.insertBeforeIndex,
        r = Array.isArray(o) ? o[0] : o;
      return r === null ? rf(e, t, n) : V(n[r]);
    }
    function ih(e, t, n, o, r) {
      let s = t.insertBeforeIndex;
      if (Array.isArray(s)) {
        let i = o,
          a = null;
        if (t.type & 3 || (a = i, i = r), i !== null && t.componentOffset === -1) for (let c = 1; c < s.length; c++) {
          let l = n[s[c]];
          xt(e, i, l, a, !1);
        }
      }
    }
    function ah(e, t) {
      if (e.push(t), e.length > 1) for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        ch(o) || RC(o, t) && kC(o) === null && LC(o, t.index);
      }
    }
    function ch(e) {
      return !(e.type & 64);
    }
    function RC(e, t) {
      return ch(t) || e.index > t.index;
    }
    function kC(e) {
      let t = e.insertBeforeIndex;
      return Array.isArray(t) ? t[0] : t;
    }
    function LC(e, t) {
      let n = e.insertBeforeIndex;
      Array.isArray(n) ? n[0] = t : (af(sh, ih), e.insertBeforeIndex = t);
    }
    function Wn(e, t) {
      let n = e.data[t];
      return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value;
    }
    function FC(e, t, n) {
      let o = e.data[t];
      o === null ? e.data[t] = n : o.value = n;
    }
    function jC(e, t) {
      let n = e.insertBeforeIndex;
      n === null ? (af(sh, ih), n = e.insertBeforeIndex = [null, t]) : (Im(Array.isArray(n), !0, "Expecting array here"), n.push(t));
    }
    function VC(e, t, n) {
      let o = Pc(e, n, 64, null, null);
      return ah(t, o), o;
    }
    function As(e, t) {
      let n = t[e.currentCaseLViewIndex];
      return n === null ? n : n < 0 ? ~n : n;
    }
    function HC(e) {
      return e >>> 17;
    }
    function $C(e) {
      return (e & 131070) >>> 1;
    }
    function BC(e, t, n) {
      return e | t << 17 | n << 1;
    }
    var Do = 0,
      zn = 0;
    function UC(e) {
      e && (Do = Do | 1 << Math.min(zn, 31)), zn++;
    }
    function qC(e, t, n) {
      if (zn > 0) {
        let o = e.data[n],
          r = Array.isArray(o) ? o : o.update,
          s = ot() - zn - 1;
        uh(e, t, r, s, Do);
      }
      Do = 0, zn = 0;
    }
    function GC(e, t, n, o) {
      let r = e[T];
      for (let s = 0; s < t.length; s++) {
        let i = t[s++],
          a = t[s],
          c = (i & Ye.COMMENT) === Ye.COMMENT,
          l = (i & Ye.APPEND_EAGERLY) === Ye.APPEND_EAGERLY,
          u = i >>> Ye.SHIFT,
          d = e[u];
        d === null && (d = e[u] = c ? r.createComment(a) : ls(r, a)), l && n !== null && xt(r, n, d, o, !1);
      }
    }
    function lh(e, t, n, o) {
      let r = n[T],
        s = null,
        i;
      for (let a = 0; a < t.length; a++) {
        let c = t[a];
        if (typeof c == "string") {
          let l = t[++a];
          n[l] === null && (n[l] = ls(r, c));
        } else if (typeof c == "number") switch (c & 1) {
          case 0:
            let l = HC(c);
            s === null && (s = l, i = fs(r, o));
            let u, d;
            if (l === s ? (u = o, d = i) : (u = null, d = V(n[l])), d !== null) {
              let m = $C(c),
                y = n[m];
              xt(r, d, y, u, !1);
              let I = Wn(e, m);
              if (I !== null && typeof I == "object") {
                let C = As(I, n);
                C !== null && lh(e, I.create[C], n, n[I.anchorIdx]);
              }
            }
            break;
          case 1:
            let f = c >>> 1,
              p = t[++a],
              h = t[++a];
            jc(r, _o(f, n), null, null, p, h, null);
            break;
        } else switch (c) {
          case nh:
            let l = t[++a],
              u = t[++a];
            if (n[u] === null) {
              let p = n[u] = Dc(r, l);
              ie(p, n);
            }
            break;
          case th:
            let d = t[++a],
              f = t[++a];
            if (n[f] === null) {
              let p = n[f] = us(r, d, null);
              ie(p, n);
            }
            break;
        }
      }
    }
    function uh(e, t, n, o, r) {
      for (let s = 0; s < n.length; s++) {
        let i = n[s],
          a = n[++s];
        if (i & r) {
          let c = "";
          for (let l = s + 1; l <= s + a; l++) {
            let u = n[l];
            if (typeof u == "string") c += u;else if (typeof u == "number") if (u < 0) c += M(t[o - u]);else {
              let d = u >>> 2;
              switch (u & 3) {
                case 1:
                  let f = n[++l],
                    p = n[++l],
                    h = e.data[d];
                  typeof h == "string" ? jc(t[T], t[d], null, h, f, c, p) : Me(e, h, t, f, c, t[T], p, !1);
                  break;
                case 0:
                  let m = t[d];
                  m !== null && Kd(t[T], m, c);
                  break;
                case 2:
                  WC(e, Wn(e, d), t, c);
                  break;
                case 3:
                  su(e, Wn(e, d), o, t);
                  break;
              }
            }
          }
        } else {
          let c = n[s + 1];
          if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2,
              u = Wn(e, l);
            t[u.currentCaseLViewIndex] < 0 && su(e, u, o, t);
          }
        }
        s += a;
      }
    }
    function su(e, t, n, o) {
      let r = o[t.currentCaseLViewIndex];
      if (r !== null) {
        let s = Do;
        r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, s = -1), uh(e, o, t.update[r], n, s);
      }
    }
    function WC(e, t, n, o) {
      let r = zC(t, o);
      if (As(t, n) !== r && (dh(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
        let i = n[t.anchorIdx];
        i && lh(e, t.create[r], n, i);
      }
    }
    function dh(e, t, n) {
      let o = As(t, n);
      if (o !== null) {
        let r = t.remove[o];
        for (let s = 0; s < r.length; s++) {
          let i = r[s];
          if (i > 0) {
            let a = _o(i, n);
            a !== null && hs(n[T], a);
          } else dh(e, Wn(e, ~i), n);
        }
      }
    }
    function zC(e, t) {
      let n = e.cases.indexOf(t);
      if (n === -1) switch (e.type) {
        case 1:
          {
            let o = AC(t, OC());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
          }
        case 0:
          {
            n = e.cases.indexOf("other");
            break;
          }
      }
      return n === -1 ? null : n;
    }
    function QC() {
      let e = [],
        t = -1,
        n,
        o;
      function r(a, c) {
        for (n = c; e.length;) e.pop();
        return s(a.value, c), i;
      }
      function s(a, c) {
        t = 0;
        let l = As(a, c);
        l !== null ? o = a.remove[l] : o = O;
      }
      function i() {
        if (t < o.length) {
          let a = o[t++];
          if (a > 0) return n[a];
          {
            e.push(t, o);
            let c = ~a,
              l = n[v].data[c];
            return s(l, n), i();
          }
        } else return e.length === 0 ? null : (o = e.pop(), t = e.pop(), i());
      }
      return r;
    }
    var Br = /�(\d+):?\d*�/gi,
      ZC = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi,
      YC = /�(\d+)�/,
      fh = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/,
      Qn = "\uFFFD",
      JC = /�\/?\*(\d+:\d+)�/gi,
      XC = /�(\/?[#*]\d+):?\d*�/gi,
      KC = /\uE500/g;
    function eM(e) {
      return e.replace(KC, " ");
    }
    function tM(e, t, n, o, r, s) {
      let i = oo(),
        a = [],
        c = [],
        l = [[]];
      r = iM(r, s);
      let u = eM(r).split(XC);
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (d & 1) {
          let p = f.charCodeAt(0) === 47;
            f.charCodeAt(p ? 1 : 0);
            let m = _ + Number.parseInt(f.substring(p ? 2 : 1));
          if (p) l.shift(), qe(oo(), !1);else {
            let y = VC(e, l[0], m);
            l.unshift([]), qe(y, !0);
          }
        } else {
          let p = Sa(f);
          for (let h = 0; h < p.length; h++) {
            let m = p[h];
            if (h & 1) {
              let y = m;
              if (typeof y != "object") throw new Error("Unable to parse ICU expression in \"".concat(r, "\" message."));
              let C = ph(e, i, l[0], n, a, "", !0).index;
              gh(e, n, c, t, y, C);
            } else {
              let y = m;
              y !== "" && nM(e, i, l[0], a, c, n, y);
            }
          }
        }
      }
      e.data[o] = {
        create: a,
        update: c
      };
    }
    function ph(e, t, n, o, r, s, i) {
      let a = Fo(e, o, 1, null),
        c = a << Ye.SHIFT,
        l = oo();
      t === l && (l = null), l === null && (c |= Ye.APPEND_EAGERLY), i && (c |= Ye.COMMENT, Xy(QC)), r.push(c, s === null ? "" : s);
      let u = Pc(e, a, i ? 32 : 1, s === null ? "" : s, null);
      ah(n, u);
      let d = u.index;
      return qe(u, !1), l !== null && t !== l && jC(l, d), u;
    }
    function nM(e, t, n, o, r, s, i) {
      let a = i.match(Br),
        c = ph(e, t, n, s, o, a ? null : i, !1);
      a && Zn(r, i, c.index, null, 0, null);
    }
    function oM(e, t, n) {
      let r = F().index,
        s = [];
      if (e.firstCreatePass && e.data[t] === null) {
        for (let i = 0; i < n.length; i += 2) {
          let a = n[i],
            c = n[i + 1];
          if (c !== "") {
            if (ZC.test(c)) throw new Error("ICU expressions are not supported in attributes. Message: \"".concat(c, "\"."));
            Zn(s, c, r, a, rM(s), null);
          }
        }
        e.data[t] = s;
      }
    }
    function Zn(e, t, n, o, r, s) {
      let i = e.length,
        a = i + 1;
      e.push(null, null);
      let c = i + 2,
        l = t.split(Br),
        u = 0;
      for (let d = 0; d < l.length; d++) {
        let f = l[d];
        if (d & 1) {
          let p = r + parseInt(f, 10);
          e.push(-1 - p), u = u | hh(p);
        } else f !== "" && e.push(f);
      }
      return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, s), e[i] = u, e[a] = e.length - c, u;
    }
    function rM(e) {
      let t = 0;
      for (let n = 0; n < e.length; n++) {
        let o = e[n];
        typeof o == "number" && o < 0 && t++;
      }
      return t;
    }
    function hh(e) {
      return 1 << Math.min(e, 31);
    }
    function sM(e) {
      return e === -1;
    }
    function iu(e) {
      let t,
        n = "",
        o = 0,
        r = !1,
        s;
      for (; (t = JC.exec(e)) !== null;) r ? t[0] === "".concat(Qn, "/*").concat(s).concat(Qn) && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), s = t[1], r = !0);
      return n += e.slice(o), n;
    }
    function iM(e, t) {
      if (sM(t)) return iu(e);
      {
        let n = e.indexOf(":".concat(t).concat(Qn)) + 2 + t.toString().length,
          o = e.search(new RegExp("".concat(Qn, "\\/\\*\\d+:").concat(t).concat(Qn)));
        return iu(e.substring(n, o));
      }
    }
    function gh(e, t, n, o, r, s) {
      let i = 0,
        a = {
          type: r.type,
          currentCaseLViewIndex: Fo(e, t, 1, null),
          anchorIdx: s,
          cases: [],
          create: [],
          remove: [],
          update: []
        };
      uM(n, r, s), FC(e, s, a);
      let c = r.values;
      for (let l = 0; l < c.length; l++) {
        let u = c[l],
          d = [];
        for (let f = 0; f < u.length; f++) {
          let p = u[f];
          if (typeof p != "string") {
            let h = d.push(p) - 1;
            u[f] = "<!--\uFFFD".concat(h, "\uFFFD-->");
          }
        }
        i = cM(e, a, t, n, o, r.cases[l], u.join(""), d) | i;
      }
      i && dM(n, i, s);
    }
    function aM(e) {
      let t = [],
        n = [],
        o = 1,
        r = 0;
      e = e.replace(fh, function (i, a, c) {
        return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), "";
      });
      let s = Sa(e);
      for (let i = 0; i < s.length;) {
        let a = s[i++].trim();
        o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
        let c = Sa(s[i++]);
        t.length > n.length && n.push(c);
      }
      return {
        type: o,
        mainBinding: r,
        cases: t,
        values: n
      };
    }
    function Sa(e) {
      if (!e) return [];
      let t = 0,
        n = [],
        o = [],
        r = /[{}]/g;
      r.lastIndex = 0;
      let s;
      for (; s = r.exec(e);) {
        let a = s.index;
        if (s[0] == "}") {
          if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            fh.test(c) ? o.push(aM(c)) : o.push(c), t = a + 1;
          }
        } else {
          if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
          }
          n.push("{");
        }
      }
      let i = e.substring(t);
      return o.push(i), o;
    }
    function cM(e, t, n, o, r, s, i, a) {
      let c = [],
        l = [],
        u = [];
      t.cases.push(s), t.create.push(c), t.remove.push(l), t.update.push(u);
      let f = hf(wn()).getInertBodyElement(i),
        p = Ui(f) || f;
      return p ? mh(e, t, n, o, c, l, u, p, r, a, 0) : 0;
    }
    function mh(e, t, n, o, r, s, i, a, c, l, u) {
      let d = 0,
        f = a.firstChild;
      for (; f;) {
        let p = Fo(e, n, 1, null);
        switch (f.nodeType) {
          case Node.ELEMENT_NODE:
            let h = f,
              m = h.tagName.toLowerCase();
            if ($i.hasOwnProperty(m)) {
              Ks(r, th, m, c, p), e.data[p] = m;
              let b = h.attributes;
              for (let j = 0; j < b.length; j++) {
                let J = b.item(j),
                  te = J.name.toLowerCase();
                !!J.value.match(Br) ? yf.hasOwnProperty(te) && (Tc[te] ? Zn(i, J.value, p, J.name, 0, Mc) : Zn(i, J.value, p, J.name, 0, null)) : fM(r, p, J);
              }
              d = mh(e, t, n, o, r, s, i, f, p, l, u + 1) | d, au(s, p, u);
            }
            break;
          case Node.TEXT_NODE:
            let y = f.textContent || "",
              I = y.match(Br);
            Ks(r, null, I ? "" : y, c, p), au(s, p, u), I && (d = Zn(i, y, p, null, 0, null) | d);
            break;
          case Node.COMMENT_NODE:
            let C = YC.exec(f.textContent || "");
            if (C) {
              let b = parseInt(C[1], 10),
                j = l[b];
              Ks(r, nh, "", c, p), gh(e, n, o, c, j, p), lM(s, p, u);
            }
            break;
        }
        f = f.nextSibling;
      }
      return d;
    }
    function au(e, t, n) {
      n === 0 && e.push(t);
    }
    function lM(e, t, n) {
      n === 0 && (e.push(~t), e.push(t));
    }
    function uM(e, t, n) {
      e.push(hh(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2);
    }
    function dM(e, t, n) {
      e.push(t, 1, n << 2 | 3);
    }
    function Ks(e, t, n, o, r) {
      t !== null && e.push(t), e.push(n, r, BC(0, o, r));
    }
    function fM(e, t, n) {
      e.push(t << 1 | 1, n.name, n.value);
    }
    var cu = 0,
      pM = /\[(�.+?�?)\]/,
      hM = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g,
      gM = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,
      mM = /{([A-Z0-9_]+)}/g,
      vM = /�I18N_EXP_(ICU(_\d+)?)�/g,
      yM = /\/\*/,
      IM = /\d+\:(\d+)/;
    function DM(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let n = e;
      if (pM.test(e)) {
        let o = {},
          r = [cu];
        n = n.replace(hM, (s, i, a) => {
          let c = i || a,
            l = o[c] || [];
          if (l.length || (c.split("|").forEach(m => {
            let y = m.match(IM),
              I = y ? parseInt(y[1], 10) : cu,
              C = yM.test(m);
            l.push([I, C, m]);
          }), o[c] = l), !l.length) throw new Error("i18n postprocess: unmatched placeholder - ".concat(c));
          let u = r[r.length - 1],
            d = 0;
          for (let m = 0; m < l.length; m++) if (l[m][0] === u) {
            d = m;
            break;
          }
          let [f, p, h] = l[d];
          return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h;
        });
      }
      return Object.keys(t).length && (n = n.replace(gM, (o, r, s, i, a, c) => t.hasOwnProperty(s) ? "".concat(r).concat(t[s]).concat(c) : o), n = n.replace(mM, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(vM, (o, r) => {
        if (t.hasOwnProperty(r)) {
          let s = t[r];
          if (!s.length) throw new Error("i18n postprocess: unmatched ICU - ".concat(o, " with key: ").concat(r));
          return s.shift();
        }
        return o;
      })), n;
    }
    function vh(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      let o = S(),
        r = g(),
        s = _ + e,
        i = Ue(o.consts, t),
        a = oo();
      if (o.firstCreatePass && tM(o, a === null ? 0 : a.index, r, s, i, n), o.type === 2) {
        let f = r[ee];
        f[D] |= 32;
      } else r[D] |= 32;
      let c = o.data[s],
        l = a === r[ge] ? null : a,
        u = tf(o, l, r),
        d = a && a.type & 8 ? r[a.index] : null;
      GC(r, c.create, u, d), od(!0);
    }
    function yh() {
      od(!1);
    }
    function wM(e, t, n) {
      vh(e, t, n), yh();
    }
    function EM(e, t) {
      let n = S(),
        o = Ue(n.consts, t);
      oM(n, e + _, o);
    }
    function Ih(e) {
      let t = g();
      return UC(Y(t, Ge(), e)), Ih;
    }
    function CM(e) {
      qC(S(), g(), e + _);
    }
    function MM(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return DM(e, t);
    }
    function Dh(e) {
      return !!e && typeof e.then == "function";
    }
    function TM(e) {
      return !!e && typeof e.subscribe == "function";
    }
    function wh(e, t, n, o) {
      let r = g(),
        s = S(),
        i = F();
      return Ch(s, r, r[T], i, e, t, o), wh;
    }
    function Eh(e, t) {
      let n = F(),
        o = g(),
        r = S(),
        s = sc(r.data),
        i = Bf(s, n, o);
      return Ch(r, o, i, n, e, t), Eh;
    }
    function _M(e, t, n, o) {
      let r = e.cleanup;
      if (r != null) for (let s = 0; s < r.length - 1; s += 2) {
        let i = r[s];
        if (i === n && r[s + 1] === o) {
          let a = t[Xt],
            c = r[s + 2];
          return a.length > c ? a[c] : null;
        }
        typeof i == "string" && (s += 2);
      }
      return null;
    }
    function Ch(e, t, n, o, r, s, i) {
      let a = es(o),
        l = e.firstCreatePass && $f(e),
        u = t[$],
        d = Hf(t),
        f = !0;
      if (o.type & 3 || i) {
        let m = me(o, t),
          y = i ? i(m) : m,
          I = d.length,
          C = i ? j => i(V(j[o.index])) : o.index,
          b = null;
        if (!i && a && (b = _M(e, t, r, o.index)), b !== null) {
          let j = b.__ngLastListenerFn__ || b;
          j.__ngNextListenerFn__ = s, b.__ngLastListenerFn__ = s, f = !1;
        } else {
          s = uu(o, t, u, s, !1);
          let j = n.listen(y, r, s);
          d.push(s, j), l && l.push(r, C, I, I + 1);
        }
      } else s = uu(o, t, u, s, !1);
      let p = o.outputs,
        h;
      if (f && p !== null && (h = p[r])) {
        let m = h.length;
        if (m) for (let y = 0; y < m; y += 2) {
          let I = h[y],
            C = h[y + 1],
            J = t[I][C].subscribe(s),
            te = d.length;
          d.push(s, J), l && l.push(r, o.index, te, -(te + 1));
        }
      }
    }
    function lu(e, t, n, o) {
      try {
        return je(6, t, n), n(o) !== !1;
      } catch (r) {
        return Es(e, r), !1;
      } finally {
        je(7, t, n);
      }
    }
    function uu(e, t, n, o, r) {
      return function s(i) {
        if (i === Function) return o;
        let a = e.componentOffset > -1 ? Ee(e.index, t) : t;
        jo(a);
        let c = lu(t, n, o, i),
          l = s.__ngNextListenerFn__;
        for (; l;) c = lu(t, n, l, i) && c, l = l.__ngNextListenerFn__;
        return r && c === !1 && i.preventDefault(), c;
      };
    }
    function NM() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return Mv(e);
    }
    function bM(e, t) {
      let n = null,
        o = jm(e);
      for (let r = 0; r < t.length; r++) {
        let s = t[r];
        if (s === "*") {
          n = r;
          continue;
        }
        if (o === null ? ju(e, s, !0) : $m(o, s)) return r;
      }
      return n;
    }
    function xM(e) {
      let t = g()[ee][ge];
      if (!t.projection) {
        let n = e ? e.length : 1,
          o = t.projection = $n(n, null),
          r = o.slice(),
          s = t.child;
        for (; s !== null;) {
          let i = e ? bM(s, e) : 0;
          i !== null && (r[i] ? r[i].projectionNext = s : o[i] = s, r[i] = s), s = s.next;
        }
      }
    }
    function SM(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      let n = arguments.length > 2 ? arguments[2] : undefined;
      let o = g(),
        r = S(),
        s = Tn(r, _ + e, 16, null, n || null);
      s.projection === null && (s.projection = t), rc(), (!o[Ae] || vn()) && (s.flags & 32) !== 32 && dI(r, o, s);
    }
    function Mh(e, t, n) {
      return Yc(e, "", t, "", n), Mh;
    }
    function Yc(e, t, n, o, r) {
      let s = g(),
        i = Nn(s, t, n, o);
      if (i !== N) {
        let a = S(),
          c = H();
        Me(a, c, s, e, i, s[T], r, !1);
      }
      return Yc;
    }
    function Th(e, t, n, o, r, s, i) {
      let a = g(),
        c = bn(a, t, n, o, r, s);
      if (c !== N) {
        let l = S(),
          u = H();
        Me(l, u, a, e, c, a[T], i, !1);
      }
      return Th;
    }
    function _h(e, t, n, o, r, s, i, a, c) {
      let l = g(),
        u = xn(l, t, n, o, r, s, i, a);
      if (u !== N) {
        let d = S(),
          f = H();
        Me(d, f, l, e, u, l[T], c, !1);
      }
      return _h;
    }
    function Nh(e, t, n, o, r, s, i, a, c, l, u) {
      let d = g(),
        f = Sn(d, t, n, o, r, s, i, a, c, l);
      if (f !== N) {
        let p = S(),
          h = H();
        Me(p, h, d, e, f, d[T], u, !1);
      }
      return Nh;
    }
    function bh(e, t, n, o, r, s, i, a, c, l, u, d, f) {
      let p = g(),
        h = An(p, t, n, o, r, s, i, a, c, l, u, d);
      if (h !== N) {
        let m = S(),
          y = H();
        Me(m, y, p, e, h, p[T], f, !1);
      }
      return bh;
    }
    function xh(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h) {
      let m = g(),
        y = Pn(m, t, n, o, r, s, i, a, c, l, u, d, f, p);
      if (y !== N) {
        let I = S(),
          C = H();
        Me(I, C, m, e, y, m[T], h, !1);
      }
      return xh;
    }
    function Sh(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y) {
      let I = g(),
        C = On(I, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m);
      if (C !== N) {
        let b = S(),
          j = H();
        Me(b, j, I, e, C, I[T], y, !1);
      }
      return Sh;
    }
    function Ah(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y, I, C) {
      let b = g(),
        j = Rn(b, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y, I);
      if (j !== N) {
        let J = S(),
          te = H();
        Me(J, te, b, e, j, b[T], C, !1);
      }
      return Ah;
    }
    function Ph(e, t, n) {
      let o = g(),
        r = _n(o, t);
      if (r !== N) {
        let s = S(),
          i = H();
        Me(s, i, o, e, r, o[T], n, !1);
      }
      return Ph;
    }
    function AM(e, t, n, o) {
      n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = o;
    }
    function PM(e) {
      let t = Iv();
      return mn(t, _ + e);
    }
    function OM(e, t, n) {
      let o = g(),
        r = Nn(o, e, t, n);
      Qe(r);
    }
    function RM(e, t, n, o, r) {
      let s = g(),
        i = bn(s, e, t, n, o, r);
      Qe(i);
    }
    function kM(e, t, n, o, r, s, i) {
      let a = g(),
        c = xn(a, e, t, n, o, r, s, i);
      Qe(c);
    }
    function LM(e, t, n, o, r, s, i, a, c) {
      let l = g(),
        u = Sn(l, e, t, n, o, r, s, i, a, c);
      Qe(u);
    }
    function FM(e, t, n, o, r, s, i, a, c, l, u) {
      let d = g(),
        f = An(d, e, t, n, o, r, s, i, a, c, l, u);
      Qe(f);
    }
    function jM(e, t, n, o, r, s, i, a, c, l, u, d, f) {
      let p = g(),
        h = Pn(p, e, t, n, o, r, s, i, a, c, l, u, d, f);
      Qe(h);
    }
    function VM(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h) {
      let m = g(),
        y = On(m, e, t, n, o, r, s, i, a, c, l, u, d, f, p, h);
      Qe(y);
    }
    function HM(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y) {
      let I = g(),
        C = Rn(I, e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y);
      Qe(C);
    }
    function $M(e) {
      let t = g(),
        n = _n(t, e);
      Qe(n);
    }
    function Oh(e, t, n, o, r) {
      let s = g(),
        i = Nn(s, t, n, o);
      return ke(e, i, r, !1), Oh;
    }
    function Rh(e, t, n, o, r, s, i) {
      let a = g(),
        c = bn(a, t, n, o, r, s);
      return ke(e, c, i, !1), Rh;
    }
    function kh(e, t, n, o, r, s, i, a, c) {
      let l = g(),
        u = xn(l, t, n, o, r, s, i, a);
      return ke(e, u, c, !1), kh;
    }
    function Lh(e, t, n, o, r, s, i, a, c, l, u) {
      let d = g(),
        f = Sn(d, t, n, o, r, s, i, a, c, l);
      return ke(e, f, u, !1), Lh;
    }
    function Fh(e, t, n, o, r, s, i, a, c, l, u, d, f) {
      let p = g(),
        h = An(p, t, n, o, r, s, i, a, c, l, u, d);
      return ke(e, h, f, !1), Fh;
    }
    function jh(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h) {
      let m = g(),
        y = Pn(m, t, n, o, r, s, i, a, c, l, u, d, f, p);
      return ke(e, y, h, !1), jh;
    }
    function Vh(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y) {
      let I = g(),
        C = On(I, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m);
      return ke(e, C, y, !1), Vh;
    }
    function Hh(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y, I, C) {
      let b = g(),
        j = Rn(b, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y, I);
      return ke(e, j, C, !1), Hh;
    }
    function $h(e, t, n) {
      let o = g(),
        r = _n(o, t);
      return ke(e, r, n, !1), $h;
    }
    function BM(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      let n = g(),
        o = S(),
        r = e + _,
        s = o.firstCreatePass ? Tn(o, r, 1, t, null) : o.data[r],
        i = Bh(o, n, s, t, e);
      n[r] = i, os() && ps(o, n, i, s), qe(s, !1);
    }
    var Bh = (e, t, n, o, r) => (gt(!0), ls(t[T], o));
    function UM(e, t, n, o, r) {
      let s = t[Ae],
        i = !s || vn() || vs(s, r);
      return gt(i), i ? ls(t[T], o) : _s(s, e, t, n);
    }
    function qM() {
      Bh = UM;
    }
    function Uh(e) {
      return Jc("", e, ""), Uh;
    }
    function Jc(e, t, n) {
      let o = g(),
        r = Nn(o, e, t, n);
      return r !== N && it(o, ce(), r), Jc;
    }
    function qh(e, t, n, o, r) {
      let s = g(),
        i = bn(s, e, t, n, o, r);
      return i !== N && it(s, ce(), i), qh;
    }
    function Gh(e, t, n, o, r, s, i) {
      let a = g(),
        c = xn(a, e, t, n, o, r, s, i);
      return c !== N && it(a, ce(), c), Gh;
    }
    function Wh(e, t, n, o, r, s, i, a, c) {
      let l = g(),
        u = Sn(l, e, t, n, o, r, s, i, a, c);
      return u !== N && it(l, ce(), u), Wh;
    }
    function zh(e, t, n, o, r, s, i, a, c, l, u) {
      let d = g(),
        f = An(d, e, t, n, o, r, s, i, a, c, l, u);
      return f !== N && it(d, ce(), f), zh;
    }
    function Qh(e, t, n, o, r, s, i, a, c, l, u, d, f) {
      let p = g(),
        h = Pn(p, e, t, n, o, r, s, i, a, c, l, u, d, f);
      return h !== N && it(p, ce(), h), Qh;
    }
    function Zh(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h) {
      let m = g(),
        y = On(m, e, t, n, o, r, s, i, a, c, l, u, d, f, p, h);
      return y !== N && it(m, ce(), y), Zh;
    }
    function Yh(e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y) {
      let I = g(),
        C = Rn(I, e, t, n, o, r, s, i, a, c, l, u, d, f, p, h, m, y);
      return C !== N && it(I, ce(), C), Yh;
    }
    function Jh(e) {
      let t = g(),
        n = _n(t, e);
      return n !== N && it(t, ce(), n), Jh;
    }
    function GM(e, t, n) {
      let o = S();
      if (o.firstCreatePass) {
        let r = Pe(e);
        Aa(n, o.data, o.blueprint, r, !0), Aa(t, o.data, o.blueprint, r, !1);
      }
    }
    function Aa(e, t, n, o, r) {
      if (e = A(e), Array.isArray(e)) for (let s = 0; s < e.length; s++) Aa(e[s], t, n, o, r);else {
        let s = S(),
          i = g(),
          a = F(),
          c = sn(e) ? e : A(e.provide),
          l = Od(e),
          u = a.providerIndexes & 1048575,
          d = a.directiveStart,
          f = a.providerIndexes >> 20;
        if (sn(e) || !e.multi) {
          let p = new Nt(l, r, Lo),
            h = ti(c, t, r ? u : u + f, d);
          h === -1 ? (yi(Er(a, i), s, c), ei(s, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), i.push(p)) : (n[h] = p, i[h] = p);
        } else {
          let p = ti(c, t, u + f, d),
            h = ti(c, t, u, u + f),
            m = p >= 0 && n[p],
            y = h >= 0 && n[h];
          if (r && !y || !r && !m) {
            yi(Er(a, i), s, c);
            let I = QM(r ? zM : WM, n.length, r, o, l);
            !r && y && (n[h].providerFactory = I), ei(s, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(I), i.push(I);
          } else {
            let I = Xh(n[r ? h : p], l, !r && o);
            ei(s, e, p > -1 ? p : h, I);
          }
          !r && o && y && n[h].componentProviders++;
        }
      }
    }
    function ei(e, t, n, o) {
      let r = sn(t),
        s = hy(t);
      if (r || s) {
        let c = (s ? A(t.useClass) : t).prototype.ngOnDestroy;
        if (c) {
          let l = e.destroyHooks || (e.destroyHooks = []);
          if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
          } else l.push(n, c);
        }
      }
    }
    function Xh(e, t, n) {
      return n && e.componentProviders++, e.multi.push(t) - 1;
    }
    function ti(e, t, n, o) {
      for (let r = n; r < o; r++) if (t[r] === e) return r;
      return -1;
    }
    function WM(e, t, n, o) {
      return Pa(this.multi, []);
    }
    function zM(e, t, n, o) {
      let r = this.multi,
        s;
      if (this.providerFactory) {
        let i = this.providerFactory.componentProviders,
          a = bt(n, n[v], this.providerFactory.index, o);
        s = a.slice(0, i), Pa(r, s);
        for (let c = i; c < a.length; c++) s.push(a[c]);
      } else s = [], Pa(r, s);
      return s;
    }
    function Pa(e, t) {
      for (let n = 0; n < e.length; n++) {
        let o = e[n];
        t.push(o());
      }
      return t;
    }
    function QM(e, t, n, o, r) {
      let s = new Nt(e, n, Lo);
      return s.multi = [], s.index = t, s.componentProviders = 0, Xh(s, r, o && !n), s;
    }
    function ZM(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return n => {
        n.providersResolver = (o, r) => GM(o, r ? r(e) : e, t);
      };
    }
    var ht = class {},
      Oa = class {};
    function YM(e, t) {
      return new wo(e, t !== null && t !== void 0 ? t : null, []);
    }
    var ab = YM,
      wo = class extends ht {
        constructor(t, n, o) {
          super(), this._parent = n, this._bootstrapComponents = [], this.destroyCbs = [], this.componentFactoryResolver = new Lr(this);
          let r = Se(t);
          this._bootstrapComponents = Je(r.bootstrap), this._r3Injector = Rd(t, n, [{
            provide: ht,
            useValue: this
          }, {
            provide: ys,
            useValue: this.componentFactoryResolver
          }, ...o], ae(t), new Set(["environment"])), this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(t);
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          let t = this._r3Injector;
          !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null;
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      },
      Eo = class extends Oa {
        constructor(t) {
          super(), this.moduleType = t;
        }
        create(t) {
          return new wo(this.moduleType, t, []);
        }
      };
    function JM(e, t, n) {
      return new wo(e, t, n);
    }
    var Ur = class extends ht {
      constructor(t) {
        super(), this.componentFactoryResolver = new Lr(this), this.instance = null;
        let n = new pt([...t.providers, {
          provide: ht,
          useValue: this
        }, {
          provide: ys,
          useValue: this.componentFactoryResolver
        }], t.parent || cs(), t.debugName, new Set(["environment"]));
        this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers();
      }
      destroy() {
        this.injector.destroy();
      }
      onDestroy(t) {
        this.injector.onDestroy(t);
      }
    };
    function XM(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return new Ur({
        providers: e,
        parent: t,
        debugName: n,
        runEnvironmentInitializers: !0
      }).injector;
    }
    var KM = (_e18 => {
      class e {
        constructor(n) {
          this._injector = n, this.cachedInjectors = new Map();
        }
        getOrCreateStandaloneInjector(n) {
          if (!n.standalone) return null;
          if (!this.cachedInjectors.has(n)) {
            let o = xd(!1, n.type),
              r = o.length > 0 ? XM([o], this._injector, "Standalone[".concat(n.type.name, "]")) : null;
            this.cachedInjectors.set(n, r);
          }
          return this.cachedInjectors.get(n);
        }
        ngOnDestroy() {
          try {
            for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
          } finally {
            this.cachedInjectors.clear();
          }
        }
      }
      _e18 = e;
      _e18.ɵprov = U({
        token: _e18,
        providedIn: "environment",
        factory: () => new _e18(de(Oe))
      });
      return e;
    })();
    function eT(e) {
      kt("NgStandalone"), e.getStandaloneInjector = t => t.get(KM).getOrCreateStandaloneInjector(e);
    }
    function tT(e, t, n) {
      let o = e.ɵcmp;
      o.directiveDefs = Ir(t, !1), o.pipeDefs = Ir(n, !0);
    }
    function nT(e, t) {
      return nt(() => {
        let n = Se(e, !0);
        n.declarations = or(t.declarations || O), n.imports = or(t.imports || O), n.exports = or(t.exports || O), t.bootstrap && (n.bootstrap = or(t.bootstrap)), ao.registerNgModule(e, t);
      });
    }
    function or(e) {
      if (typeof e == "function") return e;
      let t = Fe(e);
      return t.some(Yr) ? () => t.map(A).map(du) : t.map(du);
    }
    function du(e) {
      return vc(e) ? e.ngModule : e;
    }
    function Ra(e) {
      let t = we(e);
      if (t === null) return null;
      if (t.component === void 0) {
        let n = t.lView;
        if (n === null) return null;
        t.component = Yy(t.nodeIndex, n);
      }
      return t.component;
    }
    function Kh(e) {
      uT(e);
      let t = we(e),
        n = t ? t.lView : null;
      return n === null ? null : n[$];
    }
    function eg(e) {
      let t = we(e),
        n = t ? t.lView : null;
      if (n === null) return null;
      let o;
      for (; n[v].type === 2 && (o = Ao(n));) n = o;
      return n[D] & 512 ? null : n[$];
    }
    function tg(e) {
      let t = Wd(e);
      return t !== null ? [eI(t)] : [];
    }
    function ng(e) {
      let t = we(e),
        n = t ? t.lView : null;
      if (n === null) return Re.NULL;
      let o = n[v].data[t.nodeIndex];
      return new W(o, n);
    }
    function oT(e) {
      let t = we(e),
        n = t ? t.lView : null;
      if (n === null) return [];
      let o = n[v],
        r = o.data[t.nodeIndex],
        s = [],
        i = r.providerIndexes & 1048575,
        a = r.directiveEnd;
      for (let c = i; c < a; c++) {
        let l = o.data[c];
        lT(l) && (l = l.type), s.push(l);
      }
      return s;
    }
    function rT(e) {
      if (e instanceof Text) return [];
      let t = we(e),
        n = t ? t.lView : null;
      if (n === null) return [];
      let o = n[v],
        r = t.nodeIndex;
      return o !== null && o !== void 0 && o.data[r] ? (t.directives === void 0 && (t.directives = Zd(r, n)), t.directives === null ? [] : [...t.directives]) : [];
    }
    function sT(e) {
      let {
        constructor: t
      } = e;
      if (!t) throw new Error("Unable to find the instance constructor");
      let n = R(t);
      if (n) return {
        inputs: n.inputs,
        outputs: n.outputs,
        encapsulation: n.encapsulation,
        changeDetection: n.onPush ? Kn.OnPush : Kn.Default
      };
      let o = Ie(t);
      return o ? {
        inputs: o.inputs,
        outputs: o.outputs
      } : null;
    }
    function iT(e) {
      let t = we(e);
      if (t === null) return {};
      if (t.localRefs === void 0) {
        let n = t.lView;
        if (n === null) return {};
        t.localRefs = Jy(n, t.nodeIndex);
      }
      return t.localRefs || {};
    }
    function aT(e) {
      return we(e).native;
    }
    function og(e) {
      let t = we(e),
        n = t === null ? null : t.lView;
      if (n === null) return [];
      let o = n[v],
        r = n[Xt],
        s = o.cleanup,
        i = [];
      if (s && r) for (let a = 0; a < s.length;) {
        let c = s[a++],
          l = s[a++];
        if (typeof c == "string") {
          let u = c,
            d = V(n[l]),
            f = r[s[a++]],
            p = s[a++],
            h = typeof p == "boolean" || p >= 0 ? "dom" : "output",
            m = typeof p == "boolean" ? p : !1;
          e == d && i.push({
            element: e,
            name: u,
            callback: f,
            useCapture: m,
            type: h
          });
        }
      }
      return i.sort(cT), i;
    }
    function cT(e, t) {
      return e.name == t.name ? 0 : e.name < t.name ? -1 : 1;
    }
    function lT(e) {
      return e.type !== void 0 && e.declaredInputs !== void 0 && e.findHostDirectiveDefs !== void 0;
    }
    function uT(e) {
      if (typeof Element < "u" && !(e instanceof Element)) throw new Error("Expecting instance of DOM Element");
    }
    var fr = "__ngAsyncComponentMetadataFn__";
    function cb(e) {
      var _e$fr;
      return (_e$fr = e[fr]) !== null && _e$fr !== void 0 ? _e$fr : null;
    }
    function lb(e, t, n) {
      let o = e;
      return o[fr] = () => Promise.all(t()).then(r => (n(...r), o[fr] = null, r)), o[fr];
    }
    function dT(e, t, n, o) {
      return nt(() => {
        let r = e;
        t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = ne(ne({}, r.propDecorators), o) : r.propDecorators = o);
      });
    }
    function fT(e, t, n) {
      let o = ve() + e,
        r = g();
      return r[o] === N ? ze(r, o, n ? t.call(n) : t()) : Vo(r, o);
    }
    function pT(e, t, n, o) {
      return rg(g(), ve(), e, t, n, o);
    }
    function hT(e, t, n, o, r) {
      return sg(g(), ve(), e, t, n, o, r);
    }
    function gT(e, t, n, o, r, s) {
      return ig(g(), ve(), e, t, n, o, r, s);
    }
    function mT(e, t, n, o, r, s, i) {
      return ag(g(), ve(), e, t, n, o, r, s, i);
    }
    function vT(e, t, n, o, r, s, i, a) {
      let c = ve() + e,
        l = g(),
        u = _e(l, c, n, o, r, s);
      return Y(l, c + 4, i) || u ? ze(l, c + 5, a ? t.call(a, n, o, r, s, i) : t(n, o, r, s, i)) : Vo(l, c + 5);
    }
    function yT(e, t, n, o, r, s, i, a, c) {
      let l = ve() + e,
        u = g(),
        d = _e(u, l, n, o, r, s);
      return Pt(u, l + 4, i, a) || d ? ze(u, l + 6, c ? t.call(c, n, o, r, s, i, a) : t(n, o, r, s, i, a)) : Vo(u, l + 6);
    }
    function IT(e, t, n, o, r, s, i, a, c, l) {
      let u = ve() + e,
        d = g(),
        f = _e(d, u, n, o, r, s);
      return Ts(d, u + 4, i, a, c) || f ? ze(d, u + 7, l ? t.call(l, n, o, r, s, i, a, c) : t(n, o, r, s, i, a, c)) : Vo(d, u + 7);
    }
    function DT(e, t, n, o, r, s, i, a, c, l, u) {
      let d = ve() + e,
        f = g(),
        p = _e(f, d, n, o, r, s);
      return _e(f, d + 4, i, a, c, l) || p ? ze(f, d + 8, u ? t.call(u, n, o, r, s, i, a, c, l) : t(n, o, r, s, i, a, c, l)) : Vo(f, d + 8);
    }
    function wT(e, t, n, o) {
      return cg(g(), ve(), e, t, n, o);
    }
    function Uo(e, t) {
      let n = e[t];
      return n === N ? void 0 : n;
    }
    function rg(e, t, n, o, r, s) {
      let i = t + n;
      return Y(e, i, r) ? ze(e, i + 1, s ? o.call(s, r) : o(r)) : Uo(e, i + 1);
    }
    function sg(e, t, n, o, r, s, i) {
      let a = t + n;
      return Pt(e, a, r, s) ? ze(e, a + 2, i ? o.call(i, r, s) : o(r, s)) : Uo(e, a + 2);
    }
    function ig(e, t, n, o, r, s, i, a) {
      let c = t + n;
      return Ts(e, c, r, s, i) ? ze(e, c + 3, a ? o.call(a, r, s, i) : o(r, s, i)) : Uo(e, c + 3);
    }
    function ag(e, t, n, o, r, s, i, a, c) {
      let l = t + n;
      return _e(e, l, r, s, i, a) ? ze(e, l + 4, c ? o.call(c, r, s, i, a) : o(r, s, i, a)) : Uo(e, l + 4);
    }
    function cg(e, t, n, o, r, s) {
      let i = t + n,
        a = !1;
      for (let c = 0; c < r.length; c++) Y(e, i++, r[c]) && (a = !0);
      return a ? ze(e, i, o.apply(s, r)) : Uo(e, i);
    }
    function ET(e, t) {
      var _n$destroyHooks;
      let n = S(),
        o,
        r = e + _;
      n.firstCreatePass ? (o = CT(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && ((_n$destroyHooks = n.destroyHooks) !== null && _n$destroyHooks !== void 0 ? _n$destroyHooks : n.destroyHooks = []).push(r, o.onDestroy)) : o = n.data[r];
      let s = o.factory || (o.factory = Tt(o.type)),
        a = ye(Lo);
      try {
        let c = wr(!1),
          l = s();
        return wr(c), AM(n, g(), r, l), l;
      } finally {
        ye(a);
      }
    }
    function CT(e, t) {
      if (t) for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name) return o;
      }
    }
    function MT(e, t, n) {
      let o = e + _,
        r = g(),
        s = mn(r, o);
      return qo(r, o) ? rg(r, ve(), t, s.transform, n, s) : s.transform(n);
    }
    function TT(e, t, n, o) {
      let r = e + _,
        s = g(),
        i = mn(s, r);
      return qo(s, r) ? sg(s, ve(), t, i.transform, n, o, i) : i.transform(n, o);
    }
    function _T(e, t, n, o, r) {
      let s = e + _,
        i = g(),
        a = mn(i, s);
      return qo(i, s) ? ig(i, ve(), t, a.transform, n, o, r, a) : a.transform(n, o, r);
    }
    function NT(e, t, n, o, r, s) {
      let i = e + _,
        a = g(),
        c = mn(a, i);
      return qo(a, i) ? ag(a, ve(), t, c.transform, n, o, r, s, c) : c.transform(n, o, r, s);
    }
    function bT(e, t, n) {
      let o = e + _,
        r = g(),
        s = mn(r, o);
      return qo(r, o) ? cg(r, ve(), t, s.transform, n, s) : s.transform.apply(s, n);
    }
    function qo(e, t) {
      return e[v].data[t].pure;
    }
    function xT() {
      return this._results[Symbol.iterator]();
    }
    var ka = class e {
        get changes() {
          var _this$_changes;
          return (_this$_changes = this._changes) !== null && _this$_changes !== void 0 ? _this$_changes : this._changes = new Xe();
        }
        constructor() {
          let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
          this._emitDistinctChangesOnly = t, this.dirty = !0, this._results = [], this._changesDetected = !1, this._changes = void 0, this.length = 0, this.first = void 0, this.last = void 0;
          let n = e.prototype;
          n[Symbol.iterator] || (n[Symbol.iterator] = xT);
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          this.dirty = !1;
          let o = Fe(t);
          (this._changesDetected = !zv(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]);
        }
        notifyOnChanges() {
          this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe());
        }
      },
      qr = (_e19 => {
        class e {}
        _e19 = e;
        _e19.__NG_ELEMENT_ID__ = PT;
        return e;
      })(),
      ST = qr,
      AT = class extends ST {
        constructor(t, n, o) {
          super(), this._declarationLView = t, this._declarationTContainer = n, this.elementRef = o;
        }
        get ssrId() {
          var _this$_declarationTCo;
          return ((_this$_declarationTCo = this._declarationTContainer.tView) === null || _this$_declarationTCo === void 0 ? void 0 : _this$_declarationTCo.ssrId) || null;
        }
        createEmbeddedView(t, n) {
          return this.createEmbeddedViewImpl(t, n);
        }
        createEmbeddedViewImpl(t, n, o) {
          let r = Ho(this._declarationLView, this._declarationTContainer, t, {
            injector: n,
            dehydratedView: o
          });
          return new St(r);
        }
      };
    function PT() {
      return Ps(F(), g());
    }
    function Ps(e, t) {
      return e.type & 4 ? new AT(t, e, Mn(e, t)) : null;
    }
    var La = class e {
        constructor(t) {
          this.queryList = t, this.matches = null;
        }
        clone() {
          return new e(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      },
      Fa = class e {
        constructor() {
          let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          this.queries = t;
        }
        createEmbeddedView(t) {
          let n = t.queries;
          if (n !== null) {
            let o = t.contentQueries !== null ? t.contentQueries[0] : n.length,
              r = [];
            for (let s = 0; s < o; s++) {
              let i = n.getByIndex(s),
                a = this.queries[i.indexInDeclarationView];
              r.push(a.clone());
            }
            return new e(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++) fg(t, n).matches !== null && this.queries[n].setDirty();
        }
      },
      Gr = class {
        constructor(t, n) {
          let o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          this.predicate = t, this.flags = n, this.read = o;
        }
      },
      ja = class e {
        constructor() {
          let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          this.queries = t;
        }
        elementStart(t, n) {
          for (let o = 0; o < this.queries.length; o++) this.queries[o].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let o = 0; o < this.length; o++) {
            let r = n !== null ? n.length : 0,
              s = this.getByIndex(o).embeddedTView(t, r);
            s && (s.indexInDeclarationView = o, n !== null ? n.push(s) : n = [s]);
          }
          return n !== null ? new e(n) : null;
        }
        template(t, n) {
          for (let o = 0; o < this.queries.length; o++) this.queries[o].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      },
      Va = class e {
        constructor(t) {
          let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
          this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n;
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
            let n = this._declarationNodeIndex,
              o = t.parent;
            for (; o !== null && o.type & 8 && o.index !== n;) o = o.parent;
            return n === (o !== null ? o.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          let o = this.metadata.predicate;
          if (Array.isArray(o)) for (let r = 0; r < o.length; r++) {
            let s = o[r];
            this.matchTNodeWithReadOption(t, n, OT(n, s)), this.matchTNodeWithReadOption(t, n, cr(n, t, s, !1, !1));
          } else o === qr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, cr(n, t, o, !1, !1));
        }
        matchTNodeWithReadOption(t, n, o) {
          if (o !== null) {
            let r = this.metadata.read;
            if (r !== null) {
              if (r === Is || r === Uc || r === qr && n.type & 4) this.addMatch(n.index, -2);else {
                let s = cr(n, t, r, !1, !1);
                s !== null && this.addMatch(n.index, s);
              }
            } else this.addMatch(n.index, o);
          }
        }
        addMatch(t, n) {
          this.matches === null ? this.matches = [t, n] : this.matches.push(t, n);
        }
      };
    function OT(e, t) {
      let n = e.localNames;
      if (n !== null) {
        for (let o = 0; o < n.length; o += 2) if (n[o] === t) return n[o + 1];
      }
      return null;
    }
    function RT(e, t) {
      return e.type & 11 ? Mn(e, t) : e.type & 4 ? Ps(e, t) : null;
    }
    function kT(e, t, n, o) {
      return n === -1 ? RT(t, e) : n === -2 ? LT(e, t, o) : bt(e, e[v], n, t);
    }
    function LT(e, t, n) {
      if (n === Is) return Mn(t, e);
      if (n === qr) return Ps(t, e);
      if (n === Uc) return Np(t, e);
    }
    function lg(e, t, n, o) {
      let r = t[He].queries[o];
      if (r.matches === null) {
        let s = e.data,
          i = n.matches,
          a = [];
        for (let c = 0; c < i.length; c += 2) {
          let l = i[c];
          if (l < 0) a.push(null);else {
            let u = s[l];
            a.push(kT(t, u, i[c + 1], n.metadata.read));
          }
        }
        r.matches = a;
      }
      return r.matches;
    }
    function Ha(e, t, n, o) {
      let r = e.queries.getByIndex(n),
        s = r.matches;
      if (s !== null) {
        let i = lg(e, t, r, n);
        for (let a = 0; a < s.length; a += 2) {
          let c = s[a];
          if (c > 0) o.push(i[a / 2]);else {
            let l = s[a + 1],
              u = t[-c];
            for (let d = G; d < u.length; d++) {
              let f = u[d];
              f[Mo] === f[B] && Ha(f[v], f, l, o);
            }
            if (u[en] !== null) {
              let d = u[en];
              for (let f = 0; f < d.length; f++) {
                let p = d[f];
                Ha(p[v], p, l, o);
              }
            }
          }
        }
      }
      return o;
    }
    function FT(e) {
      let t = g(),
        n = S(),
        o = rd();
      ic(o + 1);
      let r = fg(n, o);
      if (e.dirty && iv(t) === ((r.metadata.flags & 2) === 2)) {
        if (r.matches === null) e.reset([]);else {
          let s = r.crossesNgTemplate ? Ha(n, t, o, []) : lg(n, t, r, o);
          e.reset(s, ZI), e.notifyOnChanges();
        }
        return !0;
      }
      return !1;
    }
    function jT(e, t, n) {
      let o = S();
      o.firstCreatePass && (dg(o, new Gr(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), ug(o, g(), t);
    }
    function VT(e, t, n, o) {
      let r = S();
      if (r.firstCreatePass) {
        let s = F();
        dg(r, new Gr(t, n, o), s.index), BT(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
      }
      ug(r, g(), n);
    }
    function HT() {
      return $T(g(), rd());
    }
    function $T(e, t) {
      return e[He].queries[t].queryList;
    }
    function ug(e, t, n) {
      let o = new ka((n & 4) === 4);
      vD(e, t, o, o.destroy), t[He] === null && (t[He] = new Fa()), t[He].queries.push(new La(o));
    }
    function dg(e, t, n) {
      e.queries === null && (e.queries = new ja()), e.queries.track(new Va(t, n));
    }
    function BT(e, t) {
      let n = e.contentQueries || (e.contentQueries = []),
        o = n.length ? n[n.length - 1] : -1;
      t !== o && n.push(e.queries.length - 1, t);
    }
    function fg(e, t) {
      return e.queries.getByIndex(t);
    }
    function UT(e, t) {
      return Ps(e, t);
    }
    function qT(e, t) {
      return () => {
        try {
          return ao.getComponentDependencies(e, t).dependencies;
        } catch (n) {
          throw console.error("Computing dependencies in local compilation mode for the component \"".concat(e.name, "\" failed with the exception:"), n), n;
        }
      };
    }
    function GT(e, t) {
      let n = R(e);
      n !== null && (n.debugInfo = t);
    }
    var pe = {
        ɵɵattribute: ep,
        ɵɵattributeInterpolate1: tp,
        ɵɵattributeInterpolate2: np,
        ɵɵattributeInterpolate3: op,
        ɵɵattributeInterpolate4: rp,
        ɵɵattributeInterpolate5: sp,
        ɵɵattributeInterpolate6: ip,
        ɵɵattributeInterpolate7: ap,
        ɵɵattributeInterpolate8: cp,
        ɵɵattributeInterpolateV: lp,
        ɵɵdefineComponent: Gm,
        ɵɵdefineDirective: Qm,
        ɵɵdefineInjectable: U,
        ɵɵdefineInjector: Ya,
        ɵɵdefineNgModule: Vu,
        ɵɵdefinePipe: Zm,
        ɵɵdirectiveInject: Lo,
        ɵɵgetInheritedFactory: Uv,
        ɵɵinject: de,
        ɵɵinjectAttribute: wd,
        ɵɵinvalidFactory: uD,
        ɵɵinvalidFactoryDep: Ou,
        ɵɵtemplateRefExtractor: UT,
        ɵɵresetView: yv,
        ɵɵHostDirectivesFeature: ww,
        ɵɵNgOnChangesFeature: qu,
        ɵɵProvidersFeature: ZM,
        ɵɵCopyDefinitionFeature: Dw,
        ɵɵInheritDefinitionFeature: Xf,
        ɵɵInputTransformsFeature: Cw,
        ɵɵStandaloneFeature: eT,
        ɵɵnextContext: NM,
        ɵɵnamespaceHTML: Nv,
        ɵɵnamespaceMathML: _v,
        ɵɵnamespaceSVG: Tv,
        ɵɵenableBindings: pv,
        ɵɵdisableBindings: gv,
        ɵɵelementStart: Wc,
        ɵɵelementEnd: zc,
        ɵɵelement: Qp,
        ɵɵelementContainerStart: Qc,
        ɵɵelementContainerEnd: Zc,
        ɵɵelementContainer: Yp,
        ɵɵpureFunction0: fT,
        ɵɵpureFunction1: pT,
        ɵɵpureFunction2: hT,
        ɵɵpureFunction3: gT,
        ɵɵpureFunction4: mT,
        ɵɵpureFunction5: vT,
        ɵɵpureFunction6: yT,
        ɵɵpureFunction7: IT,
        ɵɵpureFunction8: DT,
        ɵɵpureFunctionV: wT,
        ɵɵgetCurrentView: TC,
        ɵɵrestoreView: vv,
        ɵɵlistener: wh,
        ɵɵprojection: SM,
        ɵɵsyntheticHostProperty: Kp,
        ɵɵsyntheticHostListener: Eh,
        ɵɵpipeBind1: MT,
        ɵɵpipeBind2: TT,
        ɵɵpipeBind3: _T,
        ɵɵpipeBind4: NT,
        ɵɵpipeBindV: bT,
        ɵɵprojectionDef: xM,
        ɵɵhostProperty: Xp,
        ɵɵproperty: hp,
        ɵɵpropertyInterpolate: Mh,
        ɵɵpropertyInterpolate1: Yc,
        ɵɵpropertyInterpolate2: Th,
        ɵɵpropertyInterpolate3: _h,
        ɵɵpropertyInterpolate4: Nh,
        ɵɵpropertyInterpolate5: bh,
        ɵɵpropertyInterpolate6: xh,
        ɵɵpropertyInterpolate7: Sh,
        ɵɵpropertyInterpolate8: Ah,
        ɵɵpropertyInterpolateV: Ph,
        ɵɵpipe: ET,
        ɵɵqueryRefresh: FT,
        ɵɵviewQuery: jT,
        ɵɵloadQuery: HT,
        ɵɵcontentQuery: VT,
        ɵɵreference: PM,
        ɵɵclassMap: Fw,
        ɵɵclassMapInterpolate1: Ww,
        ɵɵclassMapInterpolate2: zw,
        ɵɵclassMapInterpolate3: Qw,
        ɵɵclassMapInterpolate4: Zw,
        ɵɵclassMapInterpolate5: Yw,
        ɵɵclassMapInterpolate6: Jw,
        ɵɵclassMapInterpolate7: Xw,
        ɵɵclassMapInterpolate8: Kw,
        ɵɵclassMapInterpolateV: eE,
        ɵɵstyleMap: Qe,
        ɵɵstyleMapInterpolate1: OM,
        ɵɵstyleMapInterpolate2: RM,
        ɵɵstyleMapInterpolate3: kM,
        ɵɵstyleMapInterpolate4: LM,
        ɵɵstyleMapInterpolate5: FM,
        ɵɵstyleMapInterpolate6: jM,
        ɵɵstyleMapInterpolate7: VM,
        ɵɵstyleMapInterpolate8: HM,
        ɵɵstyleMapInterpolateV: $M,
        ɵɵstyleProp: gp,
        ɵɵstylePropInterpolate1: Oh,
        ɵɵstylePropInterpolate2: Rh,
        ɵɵstylePropInterpolate3: kh,
        ɵɵstylePropInterpolate4: Lh,
        ɵɵstylePropInterpolate5: Fh,
        ɵɵstylePropInterpolate6: jh,
        ɵɵstylePropInterpolate7: Vh,
        ɵɵstylePropInterpolate8: Hh,
        ɵɵstylePropInterpolateV: $h,
        ɵɵclassProp: mp,
        ɵɵadvance: lD,
        ɵɵtemplate: mo,
        ɵɵconditional: LE,
        ɵɵdefer: oC,
        ɵɵdeferWhen: rC,
        ɵɵdeferOnIdle: iC,
        ɵɵdeferOnImmediate: cC,
        ɵɵdeferOnTimer: uC,
        ɵɵdeferOnHover: fC,
        ɵɵdeferOnInteraction: hC,
        ɵɵdeferOnViewport: mC,
        ɵɵdeferPrefetchWhen: sC,
        ɵɵdeferPrefetchOnIdle: aC,
        ɵɵdeferPrefetchOnImmediate: lC,
        ɵɵdeferPrefetchOnTimer: dC,
        ɵɵdeferPrefetchOnHover: pC,
        ɵɵdeferPrefetchOnInteraction: gC,
        ɵɵdeferPrefetchOnViewport: vC,
        ɵɵdeferEnableTimerScheduling: nC,
        ɵɵrepeater: HE,
        ɵɵrepeaterCreate: VE,
        ɵɵrepeaterTrackByIndex: FE,
        ɵɵrepeaterTrackByIdentity: jE,
        ɵɵcomponentInstance: tE,
        ɵɵtext: BM,
        ɵɵtextInterpolate: Uh,
        ɵɵtextInterpolate1: Jc,
        ɵɵtextInterpolate2: qh,
        ɵɵtextInterpolate3: Gh,
        ɵɵtextInterpolate4: Wh,
        ɵɵtextInterpolate5: zh,
        ɵɵtextInterpolate6: Qh,
        ɵɵtextInterpolate7: Zh,
        ɵɵtextInterpolate8: Yh,
        ɵɵtextInterpolateV: Jh,
        ɵɵi18n: wM,
        ɵɵi18nAttributes: EM,
        ɵɵi18nExp: Ih,
        ɵɵi18nStart: vh,
        ɵɵi18nEnd: yh,
        ɵɵi18nApply: CM,
        ɵɵi18nPostprocess: MM,
        ɵɵresolveWindow: Py,
        ɵɵresolveDocument: Oy,
        ɵɵresolveBody: Ld,
        ɵɵsetComponentScope: tT,
        ɵɵsetNgModuleScope: nT,
        ɵɵregisterNgModuleType: jd,
        ɵɵgetComponentDepsFactory: qT,
        ɵsetClassDebugInfo: GT,
        ɵɵsanitizeHtml: SI,
        ɵɵsanitizeStyle: AI,
        ɵɵsanitizeResourceUrl: Df,
        ɵɵsanitizeScript: PI,
        ɵɵsanitizeUrl: If,
        ɵɵsanitizeUrlOrResourceUrl: LI,
        ɵɵtrustConstantHtml: OI,
        ɵɵtrustConstantResourceUrl: RI,
        ɵɵvalidateIframeAttribute: mI,
        forwardRef: Wa,
        resolveForwardRef: A
      },
      zt = null;
    function zT() {
      return zt;
    }
    function db() {
      zt = null;
    }
    var Yn = [];
    function QT(e, t) {
      Yn.push({
        moduleType: e,
        ngModule: t
      });
    }
    var ni = !1;
    function ZT() {
      if (!ni) {
        ni = !0;
        try {
          for (let e = Yn.length - 1; e >= 0; e--) {
            let {
              moduleType: t,
              ngModule: n
            } = Yn[e];
            n.declarations && n.declarations.every(pg) && (Yn.splice(e, 1), e_(t, n));
          }
        } finally {
          ni = !1;
        }
      }
    }
    function pg(e) {
      return Array.isArray(e) ? e.every(pg) : !!A(e);
    }
    function YT(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      JT(e, t), t.id !== void 0 && jd(e, t.id), QT(e, t);
    }
    function JT(e, t) {
      let o = Fe(t.declarations || O),
        r = null;
      Object.defineProperty(e, xu, {
        configurable: !0,
        get: () => (r === null && (r = K().compileNgModule(pe, "ng:///".concat(e.name, "/\u0275mod.js"), {
          type: e,
          bootstrap: Fe(t.bootstrap || O).map(A),
          declarations: o.map(A),
          imports: Fe(t.imports || O).map(A).map(fu),
          exports: Fe(t.exports || O).map(A).map(fu),
          schemas: t.schemas ? Fe(t.schemas) : null,
          id: t.id || null
        }), r.schemas || (r.schemas = [])), r)
      });
      let s = null;
      Object.defineProperty(e, Ke, {
        get: () => {
          if (s === null) {
            let a = K();
            s = a.compileFactory(pe, "ng:///".concat(e.name, "/\u0275fac.js"), {
              name: e.name,
              type: e,
              deps: as(e),
              target: a.FactoryTarget.NgModule,
              typeArgumentCount: 0
            });
          }
          return s;
        },
        configurable: !1
      });
      let i = null;
      Object.defineProperty(e, ai, {
        get: () => {
          if (i === null) {
            let a = {
              name: e.name,
              type: e,
              providers: t.providers || O,
              imports: [(t.imports || O).map(A), (t.exports || O).map(A)]
            };
            i = K().compileInjector(pe, "ng:///".concat(e.name, "/\u0275inj.js"), a);
          }
          return i;
        },
        configurable: !1
      });
    }
    function fb(e, t) {
      let n = "Unexpected \"".concat(Te(e), "\" found in the \"declarations\" array of the"),
        o = "\"".concat(Te(e), "\" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the \"imports\" array)?");
      return "".concat(n, " ").concat(t, ", ").concat(o);
    }
    function pb() {
      Yn.length = 0, Ym.clear();
    }
    function e_(e, t) {
      let n = Fe(t.declarations || O),
        o = pn(e);
      n.forEach(r => {
        if (r = A(r), r.hasOwnProperty(Jr)) {
          let i = R(r);
          hg(i, o);
        } else !r.hasOwnProperty(za) && !r.hasOwnProperty(Qa) && (r.ngSelectorScope = e);
      });
    }
    function hg(e, t) {
      e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(Jr) ? R(n) : Ie(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => De(n)), e.schemas = t.schemas, e.tView = null;
    }
    function pn(e) {
      if (Dt(e)) {
        {
          let t = ao.getNgModuleScope(e),
            n = Se(e, !0);
          return ne({
            schemas: n.schemas || null
          }, t);
        }
      } else if (yr(e)) {
        if ((R(e) || Ie(e)) !== null) return {
          schemas: null,
          compilation: {
            directives: new Set(),
            pipes: new Set()
          },
          exported: {
            directives: new Set([e]),
            pipes: new Set()
          }
        };
        if (De(e) !== null) return {
          schemas: null,
          compilation: {
            directives: new Set(),
            pipes: new Set()
          },
          exported: {
            directives: new Set(),
            pipes: new Set([e])
          }
        };
      }
      throw new Error("".concat(e.name, " does not have a module def (\u0275mod property)"));
    }
    function fu(e) {
      return vc(e) ? e.ngModule : e;
    }
    var oi = 0;
    function n_(e, t) {
      let n = null;
      sy(e, t), vg(e, t), Object.defineProperty(e, Jr, {
        get: () => {
          if (n === null) {
            let o = K();
            if (_d(t)) {
              let l = ["Component '".concat(e.name, "' is not resolved:")];
              throw t.templateUrl && l.push(" - templateUrl: ".concat(t.templateUrl)), t.styleUrls && t.styleUrls.length && l.push(" - styleUrls: ".concat(JSON.stringify(t.styleUrls))), t.styleUrl && l.push(" - styleUrl: ".concat(t.styleUrl)), l.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(l.join("\n"));
            }
            let r = zT(),
              s = t.preserveWhitespaces;
            s === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? s = r.preserveWhitespaces : s = !1);
            let i = t.encapsulation;
            i === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? i = r.defaultEncapsulation : i = Ct.Emulated);
            let a = t.templateUrl || "ng:///".concat(e.name, "/template.html"),
              c = Ft(ne({}, yg(e, t)), {
                typeSourceSpan: o.createParseSourceSpan("Component", e.name, a),
                template: t.template || "",
                preserveWhitespaces: s,
                styles: typeof t.styles == "string" ? [t.styles] : t.styles || O,
                animations: t.animations,
                declarations: [],
                changeDetection: t.changeDetection,
                encapsulation: i,
                interpolation: t.interpolation,
                viewProviders: t.viewProviders || null
              });
            oi++;
            try {
              if (c.usesInheritance && Ig(e), n = o.compileComponent(pe, a, c), t.standalone) {
                let l = Fe(t.imports || O),
                  {
                    directiveDefs: u,
                    pipeDefs: d
                  } = o_(e, l);
                n.directiveDefs = u, n.pipeDefs = d, n.dependencies = () => l.map(A);
              }
            } finally {
              oi--;
            }
            if (oi === 0 && ZT(), r_(e)) {
              let l = pn(e.ngSelectorScope);
              hg(n, l);
            }
            if (t.schemas) {
              if (t.standalone) n.schemas = t.schemas;else throw new Error("The 'schemas' was specified for the ".concat(Te(e), " but is only valid on a component that is standalone."));
            } else t.standalone && (n.schemas = []);
          }
          return n;
        },
        configurable: !1
      });
    }
    function o_(e, t) {
      return {
        directiveDefs: () => {
          return Bn(e) ? [...ao.getStandaloneComponentScope(e, t).compilation.directives].map(a => R(a) || Ie(a)).filter(a => a !== null) : [];
        },
        pipeDefs: () => {
          return Bn(e) ? [...ao.getStandaloneComponentScope(e, t).compilation.pipes].map(a => De(a)).filter(a => a !== null) : [];
        }
      };
    }
    function r_(e) {
      return e.ngSelectorScope !== void 0;
    }
    function gg(e, t) {
      let n = null;
      vg(e, t || {}), Object.defineProperty(e, za, {
        get: () => {
          if (n === null) {
            let o = mg(e, t || {});
            n = K().compileDirective(pe, o.sourceMapUrl, o.metadata);
          }
          return n;
        },
        configurable: !1
      });
    }
    function mg(e, t) {
      let n = e && e.name,
        o = "ng:///".concat(n, "/\u0275dir.js"),
        r = K(),
        s = yg(e, t);
      return s.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), s.usesInheritance && Ig(e), {
        metadata: s,
        sourceMapUrl: o
      };
    }
    function vg(e, t) {
      let n = null;
      Object.defineProperty(e, Ke, {
        get: () => {
          if (n === null) {
            let o = mg(e, t),
              r = K();
            n = r.compileFactory(pe, "ng:///".concat(e.name, "/\u0275fac.js"), {
              name: o.metadata.name,
              type: o.metadata.type,
              typeArgumentCount: 0,
              deps: as(e),
              target: r.FactoryTarget.Directive
            });
          }
          return n;
        },
        configurable: !1
      });
    }
    function s_(e) {
      return Object.getPrototypeOf(e.prototype) === Object.prototype;
    }
    function yg(e, t) {
      var _t$hostDirectives;
      let n = pc(),
        o = n.ownPropMetadata(e);
      return {
        name: e.name,
        type: e,
        selector: t.selector !== void 0 ? t.selector : null,
        host: t.host || $e,
        propMetadata: o,
        inputs: t.inputs || O,
        outputs: t.outputs || O,
        queries: pu(e, o, Dg),
        lifecycle: {
          usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges")
        },
        typeSourceSpan: null,
        usesInheritance: !s_(e),
        exportAs: c_(t.exportAs),
        providers: t.providers || null,
        viewQueries: pu(e, o, wg),
        isStandalone: !!t.standalone,
        isSignal: !!t.signals,
        hostDirectives: ((_t$hostDirectives = t.hostDirectives) === null || _t$hostDirectives === void 0 ? void 0 : _t$hostDirectives.map(r => typeof r == "function" ? {
          directive: r
        } : r)) || null
      };
    }
    function Ig(e) {
      let t = Object.prototype,
        n = Object.getPrototypeOf(e.prototype).constructor;
      for (; n && n !== t;) !Ie(n) && !R(n) && u_(n) && gg(n, null), n = Object.getPrototypeOf(n);
    }
    function i_(e) {
      return typeof e == "string" ? Cg(e) : A(e);
    }
    function a_(e, t) {
      return {
        propertyName: e,
        predicate: i_(t.selector),
        descendants: t.descendants,
        first: t.first,
        read: t.read ? t.read : null,
        static: !!t.static,
        emitDistinctChangesOnly: !!t.emitDistinctChangesOnly
      };
    }
    function pu(e, t, n) {
      let o = [];
      for (let r in t) if (t.hasOwnProperty(r)) {
        let s = t[r];
        s.forEach(i => {
          if (n(i)) {
            if (!i.selector) throw new Error("Can't construct a query for the property \"".concat(r, "\" of \"").concat(Te(e), "\" since the query selector wasn't defined."));
            if (s.some(Eg)) throw new Error("Cannot combine @Input decorators with query decorators");
            o.push(a_(r, i));
          }
        });
      }
      return o;
    }
    function c_(e) {
      return e === void 0 ? null : Cg(e);
    }
    function Dg(e) {
      let t = e.ngMetadataName;
      return t === "ContentChild" || t === "ContentChildren";
    }
    function wg(e) {
      let t = e.ngMetadataName;
      return t === "ViewChild" || t === "ViewChildren";
    }
    function Eg(e) {
      return e.ngMetadataName === "Input";
    }
    function Cg(e) {
      return e.split(",").map(t => t.trim());
    }
    var l_ = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
    function u_(e) {
      let t = pc();
      if (l_.some(o => t.hasLifecycleHook(e, o))) return !0;
      let n = t.propMetadata(e);
      for (let o in n) {
        let r = n[o];
        for (let s = 0; s < r.length; s++) {
          let i = r[s],
            a = i.ngMetadataName;
          if (Eg(i) || Dg(i) || wg(i) || a === "Output" || a === "HostBinding" || a === "HostListener") return !0;
        }
      }
      return !1;
    }
    function d_(e, t) {
      let n = null,
        o = null;
      Object.defineProperty(e, Ke, {
        get: () => {
          if (o === null) {
            let r = hu(e, t),
              s = K({
                usage: 0,
                kind: "pipe",
                type: r.type
              });
            o = s.compileFactory(pe, "ng:///".concat(r.name, "/\u0275fac.js"), {
              name: r.name,
              type: r.type,
              typeArgumentCount: 0,
              deps: as(e),
              target: s.FactoryTarget.Pipe
            });
          }
          return o;
        },
        configurable: !1
      }), Object.defineProperty(e, Qa, {
        get: () => {
          if (n === null) {
            let r = hu(e, t);
            n = K({
              usage: 0,
              kind: "pipe",
              type: r.type
            }).compilePipe(pe, "ng:///".concat(r.name, "/\u0275pipe.js"), r);
          }
          return n;
        },
        configurable: !1
      });
    }
    function hu(e, t) {
      return {
        type: e,
        name: e.name,
        pipeName: t.name,
        pure: t.pure !== void 0 ? t.pure : !0,
        isStandalone: !!t.standalone
      };
    }
    var f_ = bo("Directive", function () {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return e;
      }, void 0, void 0, (e, t) => gg(e, t)),
      hb = bo("Component", function () {
        let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return ne({
          changeDetection: Kn.Default
        }, e);
      }, f_, void 0, (e, t) => n_(e, t)),
      gb = bo("Pipe", e => ne({
        pure: !0
      }, e), void 0, void 0, (e, t) => d_(e, t)),
      mb = mt("Input", e => e ? typeof e == "string" ? {
        alias: e
      } : e : {}),
      vb = mt("Output", e => ({
        alias: e
      })),
      yb = mt("HostBinding", e => ({
        hostPropertyName: e
      })),
      Ib = mt("HostListener", (e, t) => ({
        eventName: e,
        args: t
      })),
      Db = bo("NgModule", e => e, void 0, void 0, (e, t) => YT(e, t));
    var wb = (_e20 => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        _e20 = e;
        _e20.ɵfac = function (o) {
          return new (o || _e20)();
        };
        _e20.ɵprov = U({
          token: _e20,
          factory: _e20.ɵfac,
          providedIn: "platform"
        });
        return e;
      })(),
      p_ = (_e21 => {
        class e {
          constructor() {
            this.taskId = 0, this.pendingTasks = new Set(), this.hasPendingTasks = new BehaviorSubject(!1);
          }
          add() {
            this.hasPendingTasks.next(!0);
            let n = this.taskId++;
            return this.pendingTasks.add(n), n;
          }
          remove(n) {
            this.pendingTasks.delete(n), this.pendingTasks.size === 0 && this.hasPendingTasks.next(!1);
          }
          ngOnDestroy() {
            this.pendingTasks.clear(), this.hasPendingTasks.next(!1);
          }
        }
        _e21 = e;
        _e21.ɵfac = function (o) {
          return new (o || _e21)();
        };
        _e21.ɵprov = U({
          token: _e21,
          factory: _e21.ɵfac,
          providedIn: "root"
        });
        return e;
      })(),
      $a = class {
        constructor(t, n) {
          this.ngModuleFactory = t, this.componentFactories = n;
        }
      },
      Eb = (_e22 => {
        class e {
          compileModuleSync(n) {
            return new Eo(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            let o = this.compileModuleSync(n),
              r = Se(n),
              s = Je(r.declarations).reduce((i, a) => {
                let c = R(a);
                return c && i.push(new At(c)), i;
              }, []);
            return new $a(o, s);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        _e22 = e;
        _e22.ɵfac = function (o) {
          return new (o || _e22)();
        };
        _e22.ɵprov = U({
          token: _e22,
          factory: _e22.ɵfac,
          providedIn: "root"
        });
        return e;
      })(),
      h_ = new P("compilerOptions"),
      gu = class {},
      Ba = class {
        constructor() {
          this.resolverToTokenToDependencies = new WeakMap(), this.resolverToProviders = new WeakMap(), this.standaloneInjectorToComponent = new WeakMap();
        }
        reset() {
          this.resolverToTokenToDependencies = new WeakMap(), this.resolverToProviders = new WeakMap(), this.standaloneInjectorToComponent = new WeakMap();
        }
      },
      Go = new Ba();
    function Os() {
      return Go;
    }
    function g_() {
      Go.reset(), Cm();
    }
    function C_(e) {
      jo(Gd(e)), tg(e).forEach(t => M_(t));
    }
    function M_(e) {
      let t = Gd(e);
      t[D] |= 1024, Uf(t);
    }
    function T_(e, t) {
      let n = e.get(t, null, {
        self: !0,
        optional: !0
      });
      if (n === null) throw new Error("Unable to determine instance of ".concat(t, " in given injector"));
      let o = __(t, e),
        r = Tg(e),
        s = o.map(i => {
          let a = {
              value: i.value
            },
            c = i.flags;
          a.flags = {
            optional: (8 & c) === 8,
            host: (1 & c) === 1,
            self: (2 & c) === 2,
            skipSelf: (4 & c) === 4
          };
          for (let l = 0; l < r.length; l++) {
            let u = r[l];
            if (l === 0 && a.flags.skipSelf) continue;
            if (a.flags.host && u instanceof Oe) break;
            if (u.get(i.token, null, {
              self: !0,
              optional: !0
            }) !== null) {
              if (a.flags.host) {
                r[0].get(i.token, null, Ft(ne({}, a.flags), {
                  optional: !0
                })) !== null && (a.providedIn = u);
                break;
              }
              a.providedIn = u;
              break;
            }
            if (l === 0 && a.flags.self) break;
          }
          return i.token && (a.token = i.token), a;
        });
      return {
        instance: n,
        dependencies: s
      };
    }
    function __(e, t) {
      var _n$get$get, _n$get, _n$get$get2, _n$get$get3, _n$get2;
      let {
        resolverToTokenToDependencies: n
      } = Os();
      if (!(t instanceof W)) return (_n$get$get = (_n$get = n.get(t)) === null || _n$get === void 0 || (_n$get$get2 = _n$get.get) === null || _n$get$get2 === void 0 ? void 0 : _n$get$get2.call(_n$get, e)) !== null && _n$get$get !== void 0 ? _n$get$get : [];
      let o = yn(t);
      return ((_n$get$get3 = (_n$get2 = n.get(o)) === null || _n$get2 === void 0 ? void 0 : _n$get2.get(e)) !== null && _n$get$get3 !== void 0 ? _n$get$get3 : []).filter(i => {
        var _i$injectedIn;
        let a = (_i$injectedIn = i.injectedIn) === null || _i$injectedIn === void 0 ? void 0 : _i$injectedIn.tNode;
        if (a === void 0) return !1;
        let c = In(t);
        return pi(a), pi(c), a === c;
      });
    }
    function N_(e) {
      let {
        standaloneInjectorToComponent: t
      } = Os();
      if (t.has(e)) return t.get(e);
      let n = e.get(ht, null, {
        self: !0,
        optional: !0
      });
      return n === null || n.instance === null ? null : n.instance.constructor;
    }
    function b_(e) {
      var _n$get3;
      let t = In(e),
        {
          resolverToProviders: n
        } = Os();
      return (_n$get3 = n.get(t)) !== null && _n$get3 !== void 0 ? _n$get3 : [];
    }
    function x_(e) {
      let t = new Map(),
        o = S_(t, new Set());
      return Mr(e, o, [], new Set()), t;
    }
    function S_(e, t) {
      return (n, o) => {
        if (e.has(n) || e.set(n, [o]), !t.has(o)) for (let r of e.keys()) {
          let s = e.get(r),
            i = gr(o);
          if (!i) {
            let l = o.ngModule;
            i = gr(l);
          }
          if (!i) return;
          let a = s[0],
            c = !1;
          is(i.imports, l => {
            var _e$get2;
            c || (c = l.ngModule === a || l === a, c && ((_e$get2 = e.get(r)) === null || _e$get2 === void 0 ? void 0 : _e$get2.unshift(o)));
          });
        }
        t.add(o);
      };
    }
    function A_(e) {
      var _Os$resolverToProvide;
      let t = (_Os$resolverToProvide = Os().resolverToProviders.get(e)) !== null && _Os$resolverToProvide !== void 0 ? _Os$resolverToProvide : [];
      if (P_(e)) return t;
      let n = N_(e);
      if (n === null) return t;
      let o = x_(n),
        r = [];
      for (let s of t) {
        var _o$get, _R2;
        let i = s.provider,
          a = i.provide;
        if (a === So || a === hc) continue;
        let c = (_o$get = o.get(i)) !== null && _o$get !== void 0 ? _o$get : [];
        !!((_R2 = R(n)) !== null && _R2 !== void 0 && _R2.standalone) && (c = [n, ...c]), r.push(Ft(ne({}, s), {
          importPath: c
        }));
      }
      return r;
    }
    function P_(e) {
      return e instanceof pt && e.scopes.has("platform");
    }
    function O_(e) {
      if (e instanceof W) return b_(e);
      if (e instanceof Oe) return A_(e);
      re("getInjectorProviders only supports NodeInjector and EnvironmentInjector");
    }
    function R_(e) {
      var _e$source;
      if (e instanceof W) {
        let t = yn(e),
          n = In(e);
        return Uu(n, t), {
          type: "element",
          source: me(n, t)
        };
      }
      return e instanceof pt ? {
        type: "environment",
        source: (_e$source = e.source) !== null && _e$source !== void 0 ? _e$source : null
      } : e instanceof rn ? {
        type: "null",
        source: null
      } : null;
    }
    function Tg(e) {
      let t = [e];
      return Ua(e, t), t;
    }
    function Ua(e, t) {
      let n = k_(e);
      if (n === null) {
        if (e instanceof W) {
          let o = t[0];
          if (o instanceof W) {
            let r = L_(o);
            r === null && re("NodeInjector must have some connection to the module injector tree"), t.push(r), Ua(r, t);
          }
          return t;
        }
      } else t.push(n), Ua(n, t);
      return t;
    }
    function k_(e) {
      if (e instanceof pt) return e.parent;
      let t, n;
      if (e instanceof W) t = In(e), n = yn(e);else {
        if (e instanceof rn) return null;
        re("getInjectorParent only support injectors of type R3Injector, NodeInjector, NullInjector");
      }
      let o = ss(t, n);
      if (lc(o)) {
        let r = ro(o),
          s = so(o, n),
          a = s[v].data[r + 8];
        return new W(a, s);
      } else {
        var _n$he$injector;
        let s = (_n$he$injector = n[he].injector) === null || _n$he$injector === void 0 ? void 0 : _n$he$injector.parent;
        if (s instanceof W) return s;
      }
      return null;
    }
    function L_(e) {
      let t;
      e instanceof W ? t = yn(e) : re("getModuleInjectorOfNodeInjector must be called with a NodeInjector");
      let o = t[he].parentInjector;
      return o || re("NodeInjector must have some connection to the module injector tree"), o;
    }
    var mu = "ng",
      vu = !1;
    function Cb() {
      vu || (vu = !0, g_(), le("\u0275getDependenciesFromInjectable", T_), le("\u0275getInjectorProviders", O_), le("\u0275getInjectorResolutionPath", Tg), le("\u0275getInjectorMetadata", R_), le("\u0275setProfiler", rv), le("getDirectiveMetadata", sT), le("getComponent", Ra), le("getContext", Kh), le("getListeners", og), le("getOwningComponent", eg), le("getHostElement", aT), le("getInjector", ng), le("getRootComponents", tg), le("getDirectives", rT), le("applyChanges", C_));
    }
    function le(e, t) {
      if (typeof COMPILED > "u" || !COMPILED) {
        let n = ue;
        if (n) {
          let o = n[mu];
          o || (o = n[mu] = {}), o[e] = t;
        }
      }
    }
    var F_ = new P(""),
      j_ = new P(""),
      Mb = (_e23 => {
        class e {
          constructor(n, o, r) {
            this._ngZone = n, this.registry = o, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, Xc || (H_(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => {
              this.taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone");
            });
          }
          _watchAngularEvents() {
            this._ngZone.onUnstable.subscribe({
              next: () => {
                this._didWork = !0, this._isZoneStable = !1;
              }
            }), this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable.subscribe({
                next: () => {
                  oe.assertNotInAngularZone(), queueMicrotask(() => {
                    this._isZoneStable = !0, this._runCallbacksIfReady();
                  });
                }
              });
            });
          }
          increasePendingRequestCount() {
            return this._pendingCount += 1, this._didWork = !0, this._pendingCount;
          }
          decreasePendingRequestCount() {
            if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
            return this._runCallbacksIfReady(), this._pendingCount;
          }
          isStable() {
            return this._isZoneStable && this._pendingCount === 0 && !this._ngZone.hasPendingMacrotasks;
          }
          _runCallbacksIfReady() {
            if (this.isStable()) queueMicrotask(() => {
              for (; this._callbacks.length !== 0;) {
                let n = this._callbacks.pop();
                clearTimeout(n.timeoutId), n.doneCb(this._didWork);
              }
              this._didWork = !1;
            });else {
              let n = this.getPendingTasks();
              this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0), this._didWork = !0;
            }
          }
          getPendingTasks() {
            return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n => ({
              source: n.source,
              creationLocation: n.creationLocation,
              data: n.data
            })) : [];
          }
          addCallback(n, o, r) {
            let s = -1;
            o && o > 0 && (s = setTimeout(() => {
              this._callbacks = this._callbacks.filter(i => i.timeoutId !== s), n(this._didWork, this.getPendingTasks());
            }, o)), this._callbacks.push({
              doneCb: n,
              timeoutId: s,
              updateCb: r
            });
          }
          whenStable(n, o, r) {
            if (r && !this.taskTrackingZone) throw new Error("Task tracking zone is required when passing an update callback to whenStable(). Is \"zone.js/plugins/task-tracking\" loaded?");
            this.addCallback(n, o, r), this._runCallbacksIfReady();
          }
          getPendingRequestCount() {
            return this._pendingCount;
          }
          registerApplication(n) {
            this.registry.registerApplication(n, this);
          }
          unregisterApplication(n) {
            this.registry.unregisterApplication(n);
          }
          findProviders(n, o, r) {
            return [];
          }
        }
        _e23 = e;
        _e23.ɵfac = function (o) {
          return new (o || _e23)(de(oe), de(V_), de(j_));
        };
        _e23.ɵprov = U({
          token: _e23,
          factory: _e23.ɵfac
        });
        return e;
      })(),
      V_ = (_e24 => {
        class e {
          constructor() {
            this._applications = new Map();
          }
          registerApplication(n, o) {
            this._applications.set(n, o);
          }
          unregisterApplication(n) {
            this._applications.delete(n);
          }
          unregisterAllApplications() {
            this._applications.clear();
          }
          getTestability(n) {
            return this._applications.get(n) || null;
          }
          getAllTestabilities() {
            return Array.from(this._applications.values());
          }
          getAllRootElements() {
            return Array.from(this._applications.keys());
          }
          findTestabilityInTree(n) {
            var _Xc$findTestabilityIn, _Xc;
            let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return (_Xc$findTestabilityIn = (_Xc = Xc) === null || _Xc === void 0 ? void 0 : _Xc.findTestabilityInTree(this, n, o)) !== null && _Xc$findTestabilityIn !== void 0 ? _Xc$findTestabilityIn : null;
          }
        }
        _e24 = e;
        _e24.ɵfac = function (o) {
          return new (o || _e24)();
        };
        _e24.ɵprov = U({
          token: _e24,
          factory: _e24.ɵfac,
          providedIn: "platform"
        });
        return e;
      })();
    function H_(e) {
      Xc = e;
    }
    var Xc,
      $_ = new P("Application Initializer"),
      Kc = (_e25 => {
        class e {
          constructor() {
            var _L;
            this.initialized = !1, this.done = !1, this.donePromise = new Promise((n, o) => {
              this.resolve = n, this.reject = o;
            }), this.appInits = (_L = L($_, {
              optional: !0
            })) !== null && _L !== void 0 ? _L : [];
          }
          runInitializers() {
            if (this.initialized) return;
            let n = [];
            for (let r of this.appInits) {
              let s = r();
              if (Dh(s)) n.push(s);else if (TM(s)) {
                let i = new Promise((a, c) => {
                  s.subscribe({
                    complete: a,
                    error: c
                  });
                });
                n.push(i);
              }
            }
            let o = () => {
              this.done = !0, this.resolve();
            };
            Promise.all(n).then(() => {
              o();
            }).catch(r => {
              this.reject(r);
            }), n.length === 0 && o(), this.initialized = !0;
          }
        }
        _e25 = e;
        _e25.ɵfac = function (o) {
          return new (o || _e25)();
        };
        _e25.ɵprov = U({
          token: _e25,
          factory: _e25.ɵfac,
          providedIn: "root"
        });
        return e;
      })(),
      _g = new P("appBootstrapListener");
    function B_(e, t, n) {
      let o = new Eo(n);
      return Promise.resolve(o);
    }
    function Ng() {
      signals.setThrowInvalidWriteToSignalError(() => {
        throw new w(600, !1);
      });
    }
    function U_(e) {
      return e.isBoundToModule;
    }
    var yu = class {
      constructor(t, n) {
        this.name = t, this.token = n;
      }
    };
    function bg(e, t, n) {
      try {
        let o = n();
        return Dh(o) ? o.catch(r => {
          throw t.runOutsideAngular(() => e.handleError(r)), r;
        }) : o;
      } catch (o) {
        throw t.runOutsideAngular(() => e.handleError(o)), o;
      }
    }
    function xg(e, t) {
      return Array.isArray(t) ? t.reduce(xg, e) : ne(ne({}, e), t);
    }
    var Wo = (_e26 => {
      class e {
        constructor() {
          this._bootstrapListeners = [], this._runningTick = !1, this._destroyed = !1, this._destroyListeners = [], this._views = [], this.internalErrorHandler = L(bf), this.zoneIsStable = L(Qf), this.componentTypes = [], this.components = [], this.isStable = L(p_).hasPendingTasks.pipe(switchMap(n => n ? of$1(!1) : this.zoneIsStable), distinctUntilChanged()), this._injector = L(Oe);
        }
        get destroyed() {
          return this._destroyed;
        }
        get injector() {
          return this._injector;
        }
        bootstrap(n, o) {
          let r = n instanceof br;
          if (!this._injector.get(Kc).done) {
            "Cannot bootstrap as there are still asynchronous initializers running." + (!r && yr(n) ? "" : " Bootstrap components in the `ngDoBootstrap` method of the root module.");
            throw new w(405, !1);
          }
          let i;
          r ? i = n : i = this._injector.get(ys).resolveComponentFactory(n), this.componentTypes.push(i.componentType);
          let a = U_(i) ? void 0 : this._injector.get(ht),
            c = o || i.selector,
            l = i.create(Re.NULL, [], c, a),
            u = l.location.nativeElement,
            d = l.injector.get(F_, null);
          return d !== null && d !== void 0 && d.registerApplication(u), l.onDestroy(() => {
            this.detachView(l.hostView), pr(this.components, l), d === null || d === void 0 ? void 0 : d.unregisterApplication(u);
          }), this._loadComponent(l), l;
        }
        tick() {
          if (this._runningTick) throw new w(101, !1);
          try {
            this._runningTick = !0;
            for (let n of this._views) n.detectChanges();
          } catch (n) {
            this.internalErrorHandler(n);
          } finally {
            this._runningTick = !1;
          }
        }
        attachView(n) {
          let o = n;
          this._views.push(o), o.attachToAppRef(this);
        }
        detachView(n) {
          let o = n;
          pr(this._views, o), o.detachFromAppRef();
        }
        _loadComponent(n) {
          this.attachView(n.hostView), this.tick(), this.components.push(n);
          let o = this._injector.get(_g, []);
          [...this._bootstrapListeners, ...o].forEach(r => r(n));
        }
        ngOnDestroy() {
          if (!this._destroyed) try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
          } finally {
            this._destroyed = !0, this._views = [], this._bootstrapListeners = [], this._destroyListeners = [];
          }
        }
        onDestroy(n) {
          return this._destroyListeners.push(n), () => pr(this._destroyListeners, n);
        }
        destroy() {
          if (this._destroyed) throw new w(406, !1);
          let n = this._injector;
          n.destroy && !n.destroyed && n.destroy();
        }
        get viewCount() {
          return this._views.length;
        }
        warnIfDestroyed() {}
      }
      _e26 = e;
      _e26.ɵfac = function (o) {
        return new (o || _e26)();
      };
      _e26.ɵprov = U({
        token: _e26,
        factory: _e26.ɵfac,
        providedIn: "root"
      });
      return e;
    })();
    function pr(e, t) {
      let n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }
    var rr;
    function q_(e) {
      var _rr;
      (_rr = rr) !== null && _rr !== void 0 ? _rr : rr = new WeakMap();
      let t = rr.get(e);
      if (t) return t;
      let n = e.isStable.pipe(first(o => o)).toPromise().then(() => {});
      return rr.set(e, n), e.onDestroy(() => {
        var _rr2;
        return (_rr2 = rr) === null || _rr2 === void 0 ? void 0 : _rr2.delete(e);
      }), n;
    }
    var G_ = (_e27 => {
      class e {
        constructor() {
          this.zone = L(oe), this.applicationRef = L(Wo);
        }
        initialize() {
          this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
            next: () => {
              this.zone.run(() => {
                this.applicationRef.tick();
              });
            }
          }));
        }
        ngOnDestroy() {
          var _this$_onMicrotaskEmp;
          (_this$_onMicrotaskEmp = this._onMicrotaskEmptySubscription) === null || _this$_onMicrotaskEmp === void 0 || _this$_onMicrotaskEmp.unsubscribe();
        }
      }
      _e27 = e;
      _e27.ɵfac = function (o) {
        return new (o || _e27)();
      };
      _e27.ɵprov = U({
        token: _e27,
        factory: _e27.ɵfac,
        providedIn: "root"
      });
      return e;
    })();
    function Sg(e) {
      return [{
        provide: oe,
        useFactory: e
      }, {
        provide: So,
        multi: !0,
        useFactory: () => {
          let t = L(G_, {
            optional: !0
          });
          return () => t.initialize();
        }
      }, {
        provide: bf,
        useFactory: W_
      }, {
        provide: Qf,
        useFactory: Zf
      }];
    }
    function W_() {
      let e = L(oe),
        t = L(tt);
      return n => e.runOutsideAngular(() => t.handleError(n));
    }
    function z_(e) {
      let t = Sg(() => new oe(Ag(e)));
      return bd([[], t]);
    }
    function Ag(e) {
      var _e$eventCoalescing, _e$runCoalescing;
      return {
        enableLongStackTrace: !1,
        shouldCoalesceEventChangeDetection: (_e$eventCoalescing = e === null || e === void 0 ? void 0 : e.eventCoalescing) !== null && _e$eventCoalescing !== void 0 ? _e$eventCoalescing : !1,
        shouldCoalesceRunChangeDetection: (_e$runCoalescing = e === null || e === void 0 ? void 0 : e.runCoalescing) !== null && _e$runCoalescing !== void 0 ? _e$runCoalescing : !1
      };
    }
    function Q_() {
      return typeof $localize < "u" && $localize.locale || fn;
    }
    var el = new P("LocaleId", {
        providedIn: "root",
        factory: () => L(el, x.Optional | x.SkipSelf) || Q_()
      }),
      Tb = new P("DefaultCurrencyCode", {
        providedIn: "root",
        factory: () => PC
      }),
      _b = new P("Translations"),
      Nb = new P("TranslationsFormat"),
      Z_ = function (e) {
        return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e;
      }(Z_ || {}),
      tl = new P("PlatformDestroyListeners"),
      Pg = (_e28 => {
        class e {
          constructor(n) {
            this._injector = n, this._modules = [], this._destroyListeners = [], this._destroyed = !1;
          }
          bootstrapModuleFactory(n, o) {
            let r = ew(o === null || o === void 0 ? void 0 : o.ngZone, Ag({
              eventCoalescing: o === null || o === void 0 ? void 0 : o.ngZoneEventCoalescing,
              runCoalescing: o === null || o === void 0 ? void 0 : o.ngZoneRunCoalescing
            }));
            return r.run(() => {
              let s = JM(n.moduleType, this.injector, Sg(() => r)),
                i = s.injector.get(tt, null);
              return r.runOutsideAngular(() => {
                let a = r.onError.subscribe({
                  next: c => {
                    i.handleError(c);
                  }
                });
                s.onDestroy(() => {
                  pr(this._modules, s), a.unsubscribe();
                });
              }), bg(i, r, () => {
                let a = s.injector.get(Kc);
                return a.runInitializers(), a.donePromise.then(() => {
                  let c = s.injector.get(el, fn);
                  return rh(c || fn), this._moduleDoBootstrap(s), s;
                });
              });
            });
          }
          bootstrapModule(n) {
            let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            let r = xg({}, o);
            return B_(this.injector, r, n).then(s => this.bootstrapModuleFactory(s, r));
          }
          _moduleDoBootstrap(n) {
            let o = n.injector.get(Wo);
            if (n._bootstrapComponents.length > 0) n._bootstrapComponents.forEach(r => o.bootstrap(r));else if (n.instance.ngDoBootstrap) n.instance.ngDoBootstrap(o);else throw new w(-403, !1);
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new w(404, !1);
            this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o());
            let n = this._injector.get(tl, null);
            n && (n.forEach(o => o()), n.clear()), this._destroyed = !0;
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        _e28 = e;
        _e28.ɵfac = function (o) {
          return new (o || _e28)(de(Re));
        };
        _e28.ɵprov = U({
          token: _e28,
          factory: _e28.ɵfac,
          providedIn: "platform"
        });
        return e;
      })(),
      ft = null,
      Og = new P("AllowMultipleToken");
    function Y_(e) {
      if (ft && !ft.get(Og, !1)) throw new w(400, !1);
      Ng(), ft = e;
      let t = e.get(Pg);
      return kg(e), t;
    }
    function J_(e, t) {
      let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      let o = "Platform: ".concat(t),
        r = new P(o);
      return function () {
        let s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        let i = nl();
        if (!i || i.injector.get(Og, !1)) {
          let a = [...n, ...s, {
            provide: r,
            useValue: !0
          }];
          e ? e(a) : Y_(Rg(a, o));
        }
        return X_();
      };
    }
    function Rg() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      let t = arguments.length > 1 ? arguments[1] : undefined;
      return Re.create({
        name: t,
        providers: [{
          provide: Pd,
          useValue: "platform"
        }, {
          provide: tl,
          useValue: new Set([() => ft = null])
        }, ...e]
      });
    }
    function X_(e) {
      let t = nl();
      if (!t) throw new w(401, !1);
      return t;
    }
    function nl() {
      var _ft$get, _ft;
      return (_ft$get = (_ft = ft) === null || _ft === void 0 ? void 0 : _ft.get(Pg)) !== null && _ft$get !== void 0 ? _ft$get : null;
    }
    function bb() {
      var _nl;
      (_nl = nl()) === null || _nl === void 0 || _nl.destroy();
    }
    function K_() {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (ft) return ft;
      let t = Rg(e);
      return ft = t, Ng(), kg(t), t;
    }
    function kg(e) {
      var _e$get3;
      (_e$get3 = e.get(Sy, null)) === null || _e$get3 === void 0 || _e$get3.forEach(n => n());
    }
    function xb() {
      return !1;
    }
    function Sb() {}
    function Ab(e) {
      let t = Vd(e);
      if (!t) throw Lg(e);
      return new Eo(t);
    }
    function Pb(e) {
      let t = Vd(e);
      if (!t) throw Lg(e);
      return t;
    }
    function Lg(e) {
      return new Error("No module with ID ".concat(e, " loaded"));
    }
    var qa = class extends zf {},
      Du = class extends qa {};
    var wu = class {
      constructor(t, n) {
        this.name = t, this.callback = n;
      }
    };
    function Ob(e) {
      return e.map(t => t.nativeElement);
    }
    var Wr = class {
        constructor(t) {
          this.nativeNode = t;
        }
        get parent() {
          let t = this.nativeNode.parentNode;
          return t ? new hn(t) : null;
        }
        get injector() {
          return ng(this.nativeNode);
        }
        get componentInstance() {
          let t = this.nativeNode;
          return t && (Ra(t) || eg(t));
        }
        get context() {
          return Ra(this.nativeNode) || Kh(this.nativeNode);
        }
        get listeners() {
          return og(this.nativeNode).filter(t => t.type === "dom");
        }
        get references() {
          return iT(this.nativeNode);
        }
        get providerTokens() {
          return oT(this.nativeNode);
        }
      },
      hn = class extends Wr {
        constructor(t) {
          super(t);
        }
        get nativeElement() {
          return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null;
        }
        get name() {
          let t = we(this.nativeNode),
            n = t ? t.lView : null;
          return n !== null ? n[v].data[t.nodeIndex].value : this.nativeNode.nodeName;
        }
        get properties() {
          let t = we(this.nativeNode),
            n = t ? t.lView : null;
          if (n === null) return {};
          let o = n[v].data,
            r = o[t.nodeIndex],
            s = {};
          return eN(this.nativeElement, s), nN(s, r, n, o), s;
        }
        get attributes() {
          let t = {},
            n = this.nativeElement;
          if (!n) return t;
          let o = we(n),
            r = o ? o.lView : null;
          if (r === null) return {};
          let s = r[v].data[o.nodeIndex].attrs,
            i = [];
          if (s) {
            let a = 0;
            for (; a < s.length;) {
              let c = s[a];
              if (typeof c != "string") break;
              let l = s[a + 1];
              t[c] = l, i.push(c.toLowerCase()), a += 2;
            }
          }
          for (let a of n.attributes) i.includes(a.name) || (t[a.name] = a.value);
          return t;
        }
        get styles() {
          var _this$nativeElement$s, _this$nativeElement;
          return (_this$nativeElement$s = (_this$nativeElement = this.nativeElement) === null || _this$nativeElement === void 0 ? void 0 : _this$nativeElement.style) !== null && _this$nativeElement$s !== void 0 ? _this$nativeElement$s : {};
        }
        get classes() {
          let t = {},
            o = this.nativeElement.className;
          return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(s => t[s] = !0), t;
        }
        get childNodes() {
          let t = this.nativeNode.childNodes,
            n = [];
          for (let o = 0; o < t.length; o++) {
            let r = t[o];
            n.push(zr(r));
          }
          return n;
        }
        get children() {
          let t = this.nativeElement;
          if (!t) return [];
          let n = t.children,
            o = [];
          for (let r = 0; r < n.length; r++) {
            let s = n[r];
            o.push(zr(s));
          }
          return o;
        }
        query(t) {
          return this.queryAll(t)[0] || null;
        }
        queryAll(t) {
          let n = [];
          return Eu(this, t, n, !0), n;
        }
        queryAllNodes(t) {
          let n = [];
          return Eu(this, t, n, !1), n;
        }
        triggerEventHandler(t, n) {
          let o = this.nativeNode,
            r = [];
          this.listeners.forEach(s => {
            if (s.name === t) {
              let i = s.callback;
              i.call(o, n), r.push(i);
            }
          }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(s => {
            if (s.toString().indexOf("__ngUnwrap__") !== -1) {
              let i = s("__ngUnwrap__");
              return r.indexOf(i) === -1 && i.call(o, n);
            }
          });
        }
      };
    function eN(e, t) {
      if (e) {
        let n = Object.getPrototypeOf(e),
          o = Node.prototype;
        for (; n !== null && n !== o;) {
          let r = Object.getOwnPropertyDescriptors(n);
          for (let s in r) if (!s.startsWith("__") && !s.startsWith("on")) {
            let i = e[s];
            tN(i) && (t[s] = i);
          }
          n = Object.getPrototypeOf(n);
        }
      }
    }
    function tN(e) {
      return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null;
    }
    function Eu(e, t, n, o) {
      let r = we(e.nativeNode),
        s = r ? r.lView : null;
      if (s !== null) {
        let i = s[v].data[r.nodeIndex];
        wt(i, s, t, n, o, e.nativeNode);
      } else ol(e.nativeNode, t, n, o);
    }
    function wt(e, t, n, o, r, s) {
      let i = sv(e, t);
      if (e.type & 11) {
        if (ri(i, n, o, r, s), Rt(e)) {
          let c = Ee(e.index, t);
          c && c[v].firstChild && wt(c[v].firstChild, c, n, o, r, s);
        } else e.child && wt(e.child, t, n, o, r, s), i && ol(i, n, o, r);
        let a = t[e.index];
        se(a) && Cu(a, n, o, r, s);
      } else if (e.type & 4) {
        let a = t[e.index];
        ri(a[Be], n, o, r, s), Cu(a, n, o, r, s);
      } else if (e.type & 16) {
        let a = t[ee],
          l = a[ge].projection[e.projection];
        if (Array.isArray(l)) for (let u of l) ri(u, n, o, r, s);else if (l) {
          let u = a[B],
            d = u[v].data[l.index];
          wt(d, u, n, o, r, s);
        }
      } else e.child && wt(e.child, t, n, o, r, s);
      if (s !== i) {
        let a = e.flags & 2 ? e.projectionNext : e.next;
        a && wt(a, t, n, o, r, s);
      }
    }
    function Cu(e, t, n, o, r) {
      for (let s = G; s < e.length; s++) {
        let i = e[s],
          a = i[v].firstChild;
        a && wt(a, i, t, n, o, r);
      }
    }
    function ri(e, t, n, o, r) {
      if (r !== e) {
        let s = zr(e);
        if (!s) return;
        (o && s instanceof hn && t(s) && n.indexOf(s) === -1 || !o && t(s) && n.indexOf(s) === -1) && n.push(s);
      }
    }
    function ol(e, t, n, o) {
      let r = e.childNodes,
        s = r.length;
      for (let i = 0; i < s; i++) {
        let a = r[i],
          c = zr(a);
        c && ((o && c instanceof hn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), ol(a, t, n, o));
      }
    }
    function nN(e, t, n, o) {
      let r = t.propertyBindings;
      if (r !== null) for (let s = 0; s < r.length; s++) {
        let i = r[s],
          c = o[i].split(Ry),
          l = c[0];
        if (c.length > 1) {
          let u = c[1];
          for (let d = 1; d < c.length - 1; d++) u += M(n[i + d - 1]) + c[d + 1];
          e[l] = u;
        } else e[l] = n[i];
      }
    }
    var si = "__ng_debug__";
    function zr(e) {
      return e instanceof Node ? (e.hasOwnProperty(si) || (e[si] = e.nodeType == Node.ELEMENT_NODE ? new hn(e) : new Wr(e)), e[si]) : null;
    }
    var Rb = J_(null, "core", []),
      kb = (_e29 => {
        class e {
          constructor(n) {}
        }
        _e29 = e;
        _e29.ɵfac = function (o) {
          return new (o || _e29)(de(Wo));
        };
        _e29.ɵmod = Vu({
          type: _e29
        });
        _e29.ɵinj = Ya({});
        return e;
      })();
    function Lb(e) {}
    function Fb(e) {
      try {
        let {
            rootComponent: t,
            appProviders: n,
            platformProviders: o
          } = e,
          r = K_(o),
          s = [z_(), ...(n || [])],
          a = new Ur({
            providers: s,
            parent: r,
            debugName: "",
            runEnvironmentInitializers: !1
          }).injector,
          c = a.get(oe);
        return c.run(() => {
          a.resolveInjectorInitializers();
          let l = a.get(tt, null),
            u;
          c.runOutsideAngular(() => {
            u = c.onError.subscribe({
              next: p => {
                l.handleError(p);
              }
            });
          });
          let d = () => a.destroy(),
            f = r.get(tl);
          return f.add(d), a.onDestroy(() => {
            u.unsubscribe(), f.delete(d);
          }), bg(l, c, () => {
            let p = a.get(Kc);
            return p.runInitializers(), p.donePromise.then(() => {
              let h = a.get(el, fn);
              rh(h || fn);
              let m = a.get(Wo);
              return t !== void 0 && m.bootstrap(t), m;
            });
          });
        });
      } catch (t) {
        return Promise.reject(t);
      }
    }
    function Mu(e, t) {
      let n = e[v];
      for (let o = _; o < n.bindingStartIndex; o++) if (se(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
          let i = n.data[o],
            a = Ne(n, i);
          if (QE(a)) {
            t.push({
              lContainer: r,
              lView: e,
              tNode: i,
              tDetails: a
            });
            continue;
          }
        }
        for (let i = G; i < r.length; i++) Mu(r[i], t);
      } else fe(e[o]) && Mu(e[o], t);
    }
    var Ga = class {
        constructor() {
          this.views = [], this.indexByContent = new Map();
        }
        add(t) {
          let n = JSON.stringify(t);
          if (!this.indexByContent.has(n)) {
            let o = this.views.length;
            return this.views.push(t), this.indexByContent.set(n, o), o;
          }
          return this.indexByContent.get(n);
        }
        getAll() {
          return this.views;
        }
      },
      oN = 0;
    function Fg(e) {
      return e.ssrId || (e.ssrId = "t".concat(oN++)), e.ssrId;
    }
    function jg(e, t, n) {
      let o = [];
      return po(e, t, n, o), o.length;
    }
    function rN(e) {
      let t = [];
      return _f(e, t), t.length;
    }
    function Vg(e, t) {
      let n = e[q];
      return n && !n.hasAttribute(co) ? Zr(n, e, t) : null;
    }
    function Hg(e, t) {
      let n = ec(e[q]),
        o = Vg(n, t),
        r = V(n[q]),
        s = e[B],
        i = Zr(r, s, t),
        a = n[T],
        c = "".concat(o, "|").concat(i);
      a.setAttribute(r, Gn, c);
    }
    function jb(e, t) {
      let n = new Ga(),
        o = new Map(),
        r = e._views;
      for (let a of r) {
        let c = Ef(a);
        if (c !== null) {
          let l = {
            serializedViewCollection: n,
            corruptedTextNodes: o
          };
          se(c) ? Hg(c, l) : Vg(c, l), cN(o, t);
        }
      }
      let s = n.getAll();
      e.injector.get(gs).set(bc, s);
    }
    function sN(e, t) {
      let n = [],
        o = "";
      for (let r = G; r < e.length; r++) {
        let s = e[r],
          i,
          a,
          c;
        if (Ka(s) && (s = s[_], se(s))) {
          a = rN(s) + 1, Hg(s, t);
          let u = ec(s[q]);
          c = {
            [Wi]: u[v].ssrId,
            [an]: a
          };
        }
        if (!c) {
          let u = s[v];
          u.type === 1 ? (i = u.ssrId, a = 1) : (i = Fg(u), a = jg(u, s, u.firstChild)), c = ne({
            [Wi]: i,
            [an]: a
          }, $g(e[r], t));
        }
        let l = JSON.stringify(c);
        if (n.length > 0 && l === o) {
          var _u$Nr;
          let u = n[n.length - 1];
          (_u$Nr = u[Nr]) !== null && _u$Nr !== void 0 ? _u$Nr : u[Nr] = 1, u[Nr]++;
        } else o = l, n.push(c);
      }
      return n;
    }
    function Qr(e, t, n) {
      var _e$zi;
      let o = t.index - _;
      (_e$zi = e[zi]) !== null && _e$zi !== void 0 ? _e$zi : e[zi] = {}, e[zi][o] = EE(t, n);
    }
    function Tu(e, t) {
      var _e$ur;
      let n = t.index - _;
      (_e$ur = e[ur]) !== null && _e$ur !== void 0 ? _e$ur : e[ur] = [], e[ur].includes(n) || e[ur].push(n);
    }
    function $g(e, t) {
      let n = {},
        o = e[v];
      for (let r = _; r < o.bindingStartIndex; r++) {
        let s = o.data[r],
          i = r - _;
        if (Pv(s)) {
          var _n$qi2;
          if (go(s, e) && lN(s)) {
            Tu(n, s);
            continue;
          }
          if (Array.isArray(s.projection)) {
            for (let a of s.projection) if (a) if (!Array.isArray(a)) !Xm(a) && !_r(a) && (go(a, e) ? Tu(n, a) : Qr(n, a, e));else throw rE(V(e[r]));
          }
          if (iN(n, s, e), se(e[r])) {
            var _n$Gi, _n$fo2;
            let a = s.tView;
            a !== null && ((_n$Gi = n[Gi]) !== null && _n$Gi !== void 0 ? _n$Gi : n[Gi] = {}, n[Gi][i] = Fg(a));
            let c = e[r][q];
            if (Array.isArray(c)) {
              let l = V(c);
              l.hasAttribute(co) || Zr(l, c, t);
            }
            (_n$fo2 = n[fo]) !== null && _n$fo2 !== void 0 ? _n$fo2 : n[fo] = {}, n[fo][i] = sN(e[r], t);
          } else if (Array.isArray(e[r])) {
            let a = V(e[r][q]);
            a.hasAttribute(co) || Zr(a, e[r], t);
          } else if (s.type & 8) (_n$qi2 = n[qi]) !== null && _n$qi2 !== void 0 ? _n$qi2 : n[qi] = {}, n[qi][i] = jg(o, e, s.child);else if (s.type & 16) {
            let a = s.next;
            for (; a !== null && a.type & 16;) a = a.next;
            a && !_r(a) && Qr(n, a, e);
          } else if (s.type & 1) {
            var _a$nextSibling;
            let a = V(e[r]);
            a.textContent === "" ? t.corruptedTextNodes.set(a, "ngetn") : ((_a$nextSibling = a.nextSibling) === null || _a$nextSibling === void 0 ? void 0 : _a$nextSibling.nodeType) === Node.TEXT_NODE && t.corruptedTextNodes.set(a, "ngtns");
          }
        }
      }
      return n;
    }
    function iN(e, t, n) {
      t.projectionNext && t.projectionNext !== t.next && !_r(t.projectionNext) && Qr(e, t.projectionNext, n), t.prev === null && t.parent !== null && go(t.parent, n) && !go(t, n) && Qr(e, t, n);
    }
    function aN(e) {
      var _R3;
      let t = e[$];
      return t !== null && t !== void 0 && t.constructor ? ((_R3 = R(t.constructor)) === null || _R3 === void 0 ? void 0 : _R3.encapsulation) === Ct.ShadowDom : !1;
    }
    function Zr(e, t, n) {
      let o = t[T];
      if (Km(t) || aN(t)) return o.setAttribute(e, co, ""), null;
      {
        let r = $g(t, n),
          s = n.serializedViewCollection.add(r);
        return o.setAttribute(e, Gn, s.toString()), s;
      }
    }
    function cN(e, t) {
      for (let [n, o] of e) n.after(t.createComment(o));
    }
    function lN(e) {
      let t = e;
      for (; t != null;) {
        if (Rt(t)) return !0;
        t = t.parent;
      }
      return !1;
    }
    var _u = !1;
    function uN() {
      _u || (_u = !0, BI(), wC(), qM(), MC(), kE(), PE(), TE(), mD());
    }
    function dN(e, t) {
      return q_(e);
    }
    function Vb() {
      return bd([{
        provide: Ko,
        useFactory: () => {
          var _L2;
          let e = !0;
          return lt() && (e = !!((_L2 = L(gs, {
            optional: !0
          })) !== null && _L2 !== void 0 && _L2.get(bc, null))), e && kt("NgHydration"), e;
        }
      }, {
        provide: So,
        useValue: () => {
          lt() && L(Ko) && (fN(), uN());
        },
        multi: !0
      }, {
        provide: Sf,
        useFactory: () => lt() && L(Ko)
      }, {
        provide: _g,
        useFactory: () => {
          if (lt() && L(Ko)) {
            let e = L(Wo);
              L(Re);
            return () => {
              dN(e).then(() => {
                oe.assertInAngularZone(), hE(e);
              });
            };
          }
          return () => {};
        },
        multi: !0
      }]);
    }
    function fN() {
      let e = wn(),
        t;
      for (let n of e.body.childNodes) {
        var _n$textContent2;
        if (n.nodeType === Node.COMMENT_NODE && ((_n$textContent2 = n.textContent) === null || _n$textContent2 === void 0 ? void 0 : _n$textContent2.trim()) === HI) {
          t = n;
          break;
        }
      }
      if (!t) throw new w(-507, !1);
    }
    function Hb(e) {
      return typeof e == "boolean" ? e : e != null && e !== "false";
    }
    function $b(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
      return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
    }
    function Bb(e) {
      return K({
        usage: 1,
        kind: "directive",
        type: e.type
      }).compileDirectiveDeclaration(pe, "ng:///".concat(e.type.name, "/\u0275fac.js"), e);
    }
    function Ub(e) {
      var _e$ctorParameters, _e$propDecorators;
      dT(e.type, e.decorators, (_e$ctorParameters = e.ctorParameters) !== null && _e$ctorParameters !== void 0 ? _e$ctorParameters : null, (_e$propDecorators = e.propDecorators) !== null && _e$propDecorators !== void 0 ? _e$propDecorators : null);
    }
    function qb(e) {
      return K({
        usage: 1,
        kind: "component",
        type: e.type
      }).compileComponentDeclaration(pe, "ng:///".concat(e.type.name, "/\u0275cmp.js"), e);
    }
    function Gb(e) {
      return K({
        usage: 1,
        kind: pN(e.target),
        type: e.type
      }).compileFactoryDeclaration(pe, "ng:///".concat(e.type.name, "/\u0275fac.js"), e);
    }
    function pN(e) {
      switch (e) {
        case Ht.Directive:
          return "directive";
        case Ht.Component:
          return "component";
        case Ht.Injectable:
          return "injectable";
        case Ht.Pipe:
          return "pipe";
        case Ht.NgModule:
          return "NgModule";
      }
    }
    function Wb(e) {
      return K({
        usage: 1,
        kind: "injectable",
        type: e.type
      }).compileInjectableDeclaration(pe, "ng:///".concat(e.type.name, "/\u0275prov.js"), e);
    }
    function zb(e) {
      return K({
        usage: 1,
        kind: "NgModule",
        type: e.type
      }).compileInjectorDeclaration(pe, "ng:///".concat(e.type.name, "/\u0275inj.js"), e);
    }
    function Qb(e) {
      return K({
        usage: 1,
        kind: "NgModule",
        type: e.type
      }).compileNgModuleDeclaration(pe, "ng:///".concat(e.type.name, "/\u0275mod.js"), e);
    }
    function Zb(e) {
      return K({
        usage: 1,
        kind: "pipe",
        type: e.type
      }).compilePipeDeclaration(pe, "ng:///".concat(e.type.name, "/\u0275pipe.js"), e);
    }
    function Yb(e, t) {
      let n = R(e),
        o = t.elementInjector || cs();
      return new At(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector);
    }
    function Jb(e) {
      let t = R(e);
      if (!t) return null;
      let n = new At(t);
      return {
        get selector() {
          return n.selector;
        },
        get type() {
          return n.componentType;
        },
        get inputs() {
          return n.inputs;
        },
        get outputs() {
          return n.outputs;
        },
        get ngContentSelectors() {
          return n.ngContentSelectors;
        },
        get isStandalone() {
          return t.standalone;
        },
        get isSignal() {
          return t.signals;
        }
      };
    }
    function Xb() {
      for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        e[_key8] = arguments[_key8];
      }
      return e.reduce((t, n) => Object.assign(t, n, {
        providers: [...t.providers, ...n.providers]
      }), {
        providers: []
      });
    }
     /*! Bundled license information:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          @angular/core/fesm2022/core.mjs:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          (**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @license Angular v17.0.7
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * (c) 2010-2022 Google LLC. https://angular.io/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          @angular/core/fesm2022/core.mjs:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          (*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright Google LLC All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          @angular/core/fesm2022/core.mjs:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          (*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright Google LLC All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          @angular/core/fesm2022/core.mjs:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          (*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright Google LLC All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Use of this source code is governed by an MIT-style license that can be
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * found in the LICENSE file at https://angular.io/license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

    exports.ANIMATION_MODULE_TYPE = PN;
    exports.APP_BOOTSTRAP_LISTENER = _g;
    exports.APP_ID = by;
    exports.APP_INITIALIZER = $_;
    exports.AfterRenderPhase = Et;
    exports.ApplicationInitStatus = Kc;
    exports.ApplicationModule = kb;
    exports.ApplicationRef = Wo;
    exports.Attribute = Gv;
    exports.COMPILER_OPTIONS = h_;
    exports.CSP_NONCE = ON;
    exports.CUSTOM_ELEMENTS_SCHEMA = LN;
    exports.ChangeDetectionStrategy = Kn;
    exports.ChangeDetectorRef = zf;
    exports.Compiler = Eb;
    exports.CompilerFactory = gu;
    exports.Component = hb;
    exports.ComponentFactory = br;
    exports.ComponentFactoryResolver = ys;
    exports.ComponentRef = Zi;
    exports.ContentChild = CN;
    exports.ContentChildren = EN;
    exports.DEFAULT_CURRENCY_CODE = Tb;
    exports.DebugElement = hn;
    exports.DebugEventListener = wu;
    exports.DebugNode = Wr;
    exports.DefaultIterableDiffer = Ki;
    exports.DestroyRef = Cs;
    exports.Directive = f_;
    exports.ENVIRONMENT_INITIALIZER = So;
    exports.ElementRef = Is;
    exports.EmbeddedViewRef = Du;
    exports.EnvironmentInjector = Oe;
    exports.ErrorHandler = tt;
    exports.EventEmitter = Xe;
    exports.Host = ny;
    exports.HostBinding = yb;
    exports.HostListener = Ib;
    exports.INJECTOR = Nd;
    exports.Inject = ey;
    exports.InjectFlags = x;
    exports.Injectable = xN;
    exports.InjectionToken = P;
    exports.Injector = Re;
    exports.Input = mb;
    exports.IterableDiffers = Mf;
    exports.KeyValueDiffers = Tf;
    exports.LOCALE_ID = el;
    exports.MissingTranslationStrategy = Z_;
    exports.ModuleWithComponentFactories = $a;
    exports.NO_ERRORS_SCHEMA = FN;
    exports.NgModule = Db;
    exports.NgModuleFactory = Oa;
    exports.NgModuleRef = ht;
    exports.NgProbeToken = yu;
    exports.NgZone = oe;
    exports.Optional = dc;
    exports.Output = vb;
    exports.PACKAGE_ROOT_URL = AN;
    exports.PLATFORM_ID = kd;
    exports.PLATFORM_INITIALIZER = Sy;
    exports.Pipe = gb;
    exports.PlatformRef = Pg;
    exports.Query = nn;
    exports.QueryList = ka;
    exports.Renderer2 = QN;
    exports.RendererFactory2 = Ji;
    exports.RendererStyleFlags2 = Ni;
    exports.Sanitizer = JI;
    exports.SecurityContext = Cn;
    exports.Self = ty;
    exports.SimpleChange = hi;
    exports.SkipSelf = fc;
    exports.TRANSLATIONS = _b;
    exports.TRANSLATIONS_FORMAT = Nb;
    exports.TemplateRef = qr;
    exports.Testability = Mb;
    exports.TestabilityRegistry = V_;
    exports.TransferState = gs;
    exports.Type = Wv;
    exports.VERSION = XI;
    exports.Version = Xi;
    exports.ViewChild = TN;
    exports.ViewChildren = MN;
    exports.ViewContainerRef = Uc;
    exports.ViewEncapsulation = Ct;
    exports.ViewRef = qa;
    exports.afterNextRender = nw;
    exports.afterRender = tw;
    exports.asNativeElements = Ob;
    exports.assertInInjectionContext = mc;
    exports.assertNotInReactiveContext = tb;
    exports.assertPlatform = X_;
    exports.booleanAttribute = Hb;
    exports.computed = YN;
    exports.createComponent = Yb;
    exports.createEnvironmentInjector = XM;
    exports.createNgModule = YM;
    exports.createNgModuleRef = ab;
    exports.createPlatform = Y_;
    exports.createPlatformFactory = J_;
    exports.defineInjectable = IN;
    exports.destroyPlatform = bb;
    exports.effect = QD;
    exports.enableProdMode = Sb;
    exports.forwardRef = Wa;
    exports.getDebugNode = zr;
    exports.getModuleFactory = Ab;
    exports.getNgModuleById = Pb;
    exports.getPlatform = nl;
    exports.importProvidersFrom = uy;
    exports.inject = L;
    exports.isDevMode = xb;
    exports.isSignal = ZN;
    exports.isStandalone = yr;
    exports.makeEnvironmentProviders = bd;
    exports.makeStateKey = zN;
    exports.mergeApplicationConfig = Xb;
    exports.numberAttribute = $b;
    exports.platformCore = Rb;
    exports.provideZoneChangeDetection = z_;
    exports.reflectComponentType = Jb;
    exports.resolveForwardRef = A;
    exports.runInInjectionContext = bN;
    exports.setTestabilityGetter = H_;
    exports.signal = JN;
    exports.untracked = XN;
    exports.ɵALLOW_MULTIPLE_PLATFORMS = Og;
    exports.ɵAfterRenderEventManager = Ms;
    exports.ɵCONTAINER_HEADER_OFFSET = G;
    exports.ɵComponentFactory = br;
    exports.ɵConsole = wb;
    exports.ɵDEFAULT_LOCALE_ID = fn;
    exports.ɵDEFER_BLOCK_CONFIG = tC;
    exports.ɵDEFER_BLOCK_DEPENDENCY_INTERCEPTOR = ob;
    exports.ɵDeferBlockBehavior = kp;
    exports.ɵDeferBlockState = Q;
    exports.ɵEffectScheduler = WD;
    exports.ɵIMAGE_CONFIG = RN;
    exports.ɵIMAGE_CONFIG_DEFAULTS = Ay;
    exports.ɵINJECTOR_SCOPE = Pd;
    exports.ɵIS_HYDRATION_DOM_REUSE_ENABLED = Ko;
    exports.ɵInitialRenderPendingTasks = p_;
    exports.ɵLContext = bi;
    exports.ɵLifecycleHooksFeature = pw;
    exports.ɵLocaleDataIndex = Io;
    exports.ɵNG_COMP_DEF = Jr;
    exports.ɵNG_DIR_DEF = za;
    exports.ɵNG_ELEMENT_ID = Hn;
    exports.ɵNG_INJ_DEF = ai;
    exports.ɵNG_MOD_DEF = xu;
    exports.ɵNG_PIPE_DEF = Qa;
    exports.ɵNG_PROV_DEF = mr;
    exports.ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR = $s;
    exports.ɵNO_CHANGE = N;
    exports.ɵNgModuleFactory = Eo;
    exports.ɵNoopNgZone = fa;
    exports.ɵReflectionCapabilities = Di;
    exports.ɵRender3ComponentFactory = At;
    exports.ɵRender3ComponentRef = ha;
    exports.ɵRender3NgModuleRef = wo;
    exports.ɵRuntimeError = w;
    exports.ɵSSR_CONTENT_INTEGRITY_MARKER = HI;
    exports.ɵTESTABILITY = F_;
    exports.ɵTESTABILITY_GETTER = j_;
    exports.ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT = Mi;
    exports.ɵViewRef = St;
    exports.ɵXSS_SECURITY_URL = bu;
    exports.ɵZoneAwareQueueingScheduler = zD;
    exports.ɵ_sanitizeHtml = bI;
    exports.ɵ_sanitizeUrl = Mc;
    exports.ɵallowSanitizationBypassAndThrow = Oo;
    exports.ɵannotateForHydration = jb;
    exports.ɵbypassSanitizationTrustHtml = BN;
    exports.ɵbypassSanitizationTrustResourceUrl = WN;
    exports.ɵbypassSanitizationTrustScript = qN;
    exports.ɵbypassSanitizationTrustStyle = UN;
    exports.ɵbypassSanitizationTrustUrl = GN;
    exports.ɵclearResolutionOfComponentResourcesQueue = iy;
    exports.ɵcompileComponent = n_;
    exports.ɵcompileDirective = gg;
    exports.ɵcompileNgModule = YT;
    exports.ɵcompileNgModuleDefs = JT;
    exports.ɵcompileNgModuleFactory = B_;
    exports.ɵcompilePipe = d_;
    exports.ɵconvertToBitFlags = Kr;
    exports.ɵcreateInjector = Cl;
    exports.ɵdefaultIterableDiffers = KN;
    exports.ɵdefaultKeyValueDiffers = eb;
    exports.ɵdepsTracker = ao;
    exports.ɵdevModeEqual = oD;
    exports.ɵfindLocaleData = eh;
    exports.ɵflushModuleScopingQueueAsMuchAsPossible = ZT;
    exports.ɵformatRuntimeError = vm;
    exports.ɵgenerateStandaloneInDeclarationsError = fb;
    exports.ɵgetAsyncClassMetadataFn = cb;
    exports.ɵgetDebugNode = zr;
    exports.ɵgetDeferBlocks = Mu;
    exports.ɵgetDirectives = rT;
    exports.ɵgetHostElement = aT;
    exports.ɵgetInjectableDef = Xr;
    exports.ɵgetLContext = we;
    exports.ɵgetLocaleCurrencyCode = sb;
    exports.ɵgetLocalePluralCase = bC;
    exports.ɵgetSanitizationBypassType = vI;
    exports.ɵgetUnknownElementStrictMode = VN;
    exports.ɵgetUnknownPropertyStrictMode = $N;
    exports.ɵglobal = ue;
    exports.ɵinjectChangeDetectorRef = HD;
    exports.ɵinternalAfterNextRender = Hl;
    exports.ɵinternalCreateApplication = Fb;
    exports.ɵisBoundToModule = U_;
    exports.ɵisComponentDefPendingResolution = _N;
    exports.ɵisEnvironmentProviders = Nu;
    exports.ɵisInjectable = DN;
    exports.ɵisNgModule = Dt;
    exports.ɵisPromise = Dh;
    exports.ɵisSubscribable = TM;
    exports.ɵnoSideEffects = nt;
    exports.ɵpatchComponentDefWithScope = hg;
    exports.ɵperformanceMarkFeature = kt;
    exports.ɵpublishDefaultGlobalUtils = Cb;
    exports.ɵpublishGlobalUtil = le;
    exports.ɵregisterLocaleData = rb;
    exports.ɵrenderDeferBlockState = ut;
    exports.ɵresetCompiledComponents = pb;
    exports.ɵresetJitOptions = db;
    exports.ɵresolveComponentResources = ry;
    exports.ɵrestoreComponentResolutionQueue = NN;
    exports.ɵsetAllowDuplicateNgModuleIdsForTest = kN;
    exports.ɵsetAlternateWeakRefImpl = Lb;
    exports.ɵsetClassDebugInfo = GT;
    exports.ɵsetClassMetadata = dT;
    exports.ɵsetClassMetadataAsync = lb;
    exports.ɵsetCurrentInjector = ct;
    exports.ɵsetDocument = SN;
    exports.ɵsetInjectorProfilerContext = wN;
    exports.ɵsetLocaleId = rh;
    exports.ɵsetUnknownElementStrictMode = jN;
    exports.ɵsetUnknownPropertyStrictMode = HN;
    exports.ɵstore = AM;
    exports.ɵstringify = ae;
    exports.ɵtransitiveScopesFor = pn;
    exports.ɵtriggerResourceLoading = Gc;
    exports.ɵtruncateMiddle = yN;
    exports.ɵunregisterLocaleData = ib;
    exports.ɵunwrapSafeValue = vt;
    exports.ɵwhenStable = q_;
    exports.ɵwithDomHydration = Vb;
    exports.ɵɵCopyDefinitionFeature = Dw;
    exports.ɵɵFactoryTarget = Ht;
    exports.ɵɵHostDirectivesFeature = ww;
    exports.ɵɵInheritDefinitionFeature = Xf;
    exports.ɵɵInputTransformsFeature = Cw;
    exports.ɵɵNgOnChangesFeature = qu;
    exports.ɵɵProvidersFeature = ZM;
    exports.ɵɵStandaloneFeature = eT;
    exports.ɵɵadvance = lD;
    exports.ɵɵattribute = ep;
    exports.ɵɵattributeInterpolate1 = tp;
    exports.ɵɵattributeInterpolate2 = np;
    exports.ɵɵattributeInterpolate3 = op;
    exports.ɵɵattributeInterpolate4 = rp;
    exports.ɵɵattributeInterpolate5 = sp;
    exports.ɵɵattributeInterpolate6 = ip;
    exports.ɵɵattributeInterpolate7 = ap;
    exports.ɵɵattributeInterpolate8 = cp;
    exports.ɵɵattributeInterpolateV = lp;
    exports.ɵɵclassMap = Fw;
    exports.ɵɵclassMapInterpolate1 = Ww;
    exports.ɵɵclassMapInterpolate2 = zw;
    exports.ɵɵclassMapInterpolate3 = Qw;
    exports.ɵɵclassMapInterpolate4 = Zw;
    exports.ɵɵclassMapInterpolate5 = Yw;
    exports.ɵɵclassMapInterpolate6 = Jw;
    exports.ɵɵclassMapInterpolate7 = Xw;
    exports.ɵɵclassMapInterpolate8 = Kw;
    exports.ɵɵclassMapInterpolateV = eE;
    exports.ɵɵclassProp = mp;
    exports.ɵɵcomponentInstance = tE;
    exports.ɵɵconditional = LE;
    exports.ɵɵcontentQuery = VT;
    exports.ɵɵdefer = oC;
    exports.ɵɵdeferEnableTimerScheduling = nC;
    exports.ɵɵdeferOnHover = fC;
    exports.ɵɵdeferOnIdle = iC;
    exports.ɵɵdeferOnImmediate = cC;
    exports.ɵɵdeferOnInteraction = hC;
    exports.ɵɵdeferOnTimer = uC;
    exports.ɵɵdeferOnViewport = mC;
    exports.ɵɵdeferPrefetchOnHover = pC;
    exports.ɵɵdeferPrefetchOnIdle = aC;
    exports.ɵɵdeferPrefetchOnImmediate = lC;
    exports.ɵɵdeferPrefetchOnInteraction = gC;
    exports.ɵɵdeferPrefetchOnTimer = dC;
    exports.ɵɵdeferPrefetchOnViewport = vC;
    exports.ɵɵdeferPrefetchWhen = sC;
    exports.ɵɵdeferWhen = rC;
    exports.ɵɵdefineComponent = Gm;
    exports.ɵɵdefineDirective = Qm;
    exports.ɵɵdefineInjectable = U;
    exports.ɵɵdefineInjector = Ya;
    exports.ɵɵdefineNgModule = Vu;
    exports.ɵɵdefinePipe = Zm;
    exports.ɵɵdirectiveInject = Lo;
    exports.ɵɵdisableBindings = gv;
    exports.ɵɵelement = Qp;
    exports.ɵɵelementContainer = Yp;
    exports.ɵɵelementContainerEnd = Zc;
    exports.ɵɵelementContainerStart = Qc;
    exports.ɵɵelementEnd = zc;
    exports.ɵɵelementStart = Wc;
    exports.ɵɵenableBindings = pv;
    exports.ɵɵgetComponentDepsFactory = qT;
    exports.ɵɵgetCurrentView = TC;
    exports.ɵɵgetInheritedFactory = Uv;
    exports.ɵɵhostProperty = Xp;
    exports.ɵɵi18n = wM;
    exports.ɵɵi18nApply = CM;
    exports.ɵɵi18nAttributes = EM;
    exports.ɵɵi18nEnd = yh;
    exports.ɵɵi18nExp = Ih;
    exports.ɵɵi18nPostprocess = MM;
    exports.ɵɵi18nStart = vh;
    exports.ɵɵinject = de;
    exports.ɵɵinjectAttribute = wd;
    exports.ɵɵinvalidFactory = uD;
    exports.ɵɵinvalidFactoryDep = Ou;
    exports.ɵɵlistener = wh;
    exports.ɵɵloadQuery = HT;
    exports.ɵɵnamespaceHTML = Nv;
    exports.ɵɵnamespaceMathML = _v;
    exports.ɵɵnamespaceSVG = Tv;
    exports.ɵɵnextContext = NM;
    exports.ɵɵngDeclareClassMetadata = Ub;
    exports.ɵɵngDeclareComponent = qb;
    exports.ɵɵngDeclareDirective = Bb;
    exports.ɵɵngDeclareFactory = Gb;
    exports.ɵɵngDeclareInjectable = Wb;
    exports.ɵɵngDeclareInjector = zb;
    exports.ɵɵngDeclareNgModule = Qb;
    exports.ɵɵngDeclarePipe = Zb;
    exports.ɵɵpipe = ET;
    exports.ɵɵpipeBind1 = MT;
    exports.ɵɵpipeBind2 = TT;
    exports.ɵɵpipeBind3 = _T;
    exports.ɵɵpipeBind4 = NT;
    exports.ɵɵpipeBindV = bT;
    exports.ɵɵprojection = SM;
    exports.ɵɵprojectionDef = xM;
    exports.ɵɵproperty = hp;
    exports.ɵɵpropertyInterpolate = Mh;
    exports.ɵɵpropertyInterpolate1 = Yc;
    exports.ɵɵpropertyInterpolate2 = Th;
    exports.ɵɵpropertyInterpolate3 = _h;
    exports.ɵɵpropertyInterpolate4 = Nh;
    exports.ɵɵpropertyInterpolate5 = bh;
    exports.ɵɵpropertyInterpolate6 = xh;
    exports.ɵɵpropertyInterpolate7 = Sh;
    exports.ɵɵpropertyInterpolate8 = Ah;
    exports.ɵɵpropertyInterpolateV = Ph;
    exports.ɵɵpureFunction0 = fT;
    exports.ɵɵpureFunction1 = pT;
    exports.ɵɵpureFunction2 = hT;
    exports.ɵɵpureFunction3 = gT;
    exports.ɵɵpureFunction4 = mT;
    exports.ɵɵpureFunction5 = vT;
    exports.ɵɵpureFunction6 = yT;
    exports.ɵɵpureFunction7 = IT;
    exports.ɵɵpureFunction8 = DT;
    exports.ɵɵpureFunctionV = wT;
    exports.ɵɵqueryRefresh = FT;
    exports.ɵɵreference = PM;
    exports.ɵɵregisterNgModuleType = jd;
    exports.ɵɵrepeater = HE;
    exports.ɵɵrepeaterCreate = VE;
    exports.ɵɵrepeaterTrackByIdentity = jE;
    exports.ɵɵrepeaterTrackByIndex = FE;
    exports.ɵɵresetView = yv;
    exports.ɵɵresolveBody = Ld;
    exports.ɵɵresolveDocument = Oy;
    exports.ɵɵresolveWindow = Py;
    exports.ɵɵrestoreView = vv;
    exports.ɵɵsanitizeHtml = SI;
    exports.ɵɵsanitizeResourceUrl = Df;
    exports.ɵɵsanitizeScript = PI;
    exports.ɵɵsanitizeStyle = AI;
    exports.ɵɵsanitizeUrl = If;
    exports.ɵɵsanitizeUrlOrResourceUrl = LI;
    exports.ɵɵsetComponentScope = tT;
    exports.ɵɵsetNgModuleScope = nT;
    exports.ɵɵstyleMap = Qe;
    exports.ɵɵstyleMapInterpolate1 = OM;
    exports.ɵɵstyleMapInterpolate2 = RM;
    exports.ɵɵstyleMapInterpolate3 = kM;
    exports.ɵɵstyleMapInterpolate4 = LM;
    exports.ɵɵstyleMapInterpolate5 = FM;
    exports.ɵɵstyleMapInterpolate6 = jM;
    exports.ɵɵstyleMapInterpolate7 = VM;
    exports.ɵɵstyleMapInterpolate8 = HM;
    exports.ɵɵstyleMapInterpolateV = $M;
    exports.ɵɵstyleProp = gp;
    exports.ɵɵstylePropInterpolate1 = Oh;
    exports.ɵɵstylePropInterpolate2 = Rh;
    exports.ɵɵstylePropInterpolate3 = kh;
    exports.ɵɵstylePropInterpolate4 = Lh;
    exports.ɵɵstylePropInterpolate5 = Fh;
    exports.ɵɵstylePropInterpolate6 = jh;
    exports.ɵɵstylePropInterpolate7 = Vh;
    exports.ɵɵstylePropInterpolate8 = Hh;
    exports.ɵɵstylePropInterpolateV = $h;
    exports.ɵɵsyntheticHostListener = Eh;
    exports.ɵɵsyntheticHostProperty = Kp;
    exports.ɵɵtemplate = mo;
    exports.ɵɵtemplateRefExtractor = UT;
    exports.ɵɵtext = BM;
    exports.ɵɵtextInterpolate = Uh;
    exports.ɵɵtextInterpolate1 = Jc;
    exports.ɵɵtextInterpolate2 = qh;
    exports.ɵɵtextInterpolate3 = Gh;
    exports.ɵɵtextInterpolate4 = Wh;
    exports.ɵɵtextInterpolate5 = zh;
    exports.ɵɵtextInterpolate6 = Qh;
    exports.ɵɵtextInterpolate7 = Zh;
    exports.ɵɵtextInterpolate8 = Yh;
    exports.ɵɵtextInterpolateV = Jh;
    exports.ɵɵtrustConstantHtml = OI;
    exports.ɵɵtrustConstantResourceUrl = RI;
    exports.ɵɵvalidateIframeAttribute = mI;
    exports.ɵɵviewQuery = jT;

    return exports;

})({}, null, null, null, null, null, null, signals);
