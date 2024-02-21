var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
// If the importer is in node compatibility mode or this is not an ESM
// file that has been converted to a CommonJS file using a Babel-
// compatible transform (i.e. "__esModule" has not been set), then set
// "default" to the CommonJS "module.exports" for node compatibility.
isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));

// node_modules/@ionic/core/dist/esm-es5/index-a5d50daf.js
var win, doc;
var init_index_a5d50daf = __esm({
  "node_modules/@ionic/core/dist/esm-es5/index-a5d50daf.js"() {
    win = typeof window !== "undefined" ? window : void 0;
    doc = typeof document !== "undefined" ? document : void 0;
  }
});

// node_modules/@ionic/core/dist/esm-es5/helpers-ae653409.js
import { __spreadArray } from "tslib";
var componentOnReady, raf;
var init_helpers_ae653409 = __esm({
  "node_modules/@ionic/core/dist/esm-es5/helpers-ae653409.js"() {
    componentOnReady = function (a, r) {
      if (a.componentOnReady) {
        a.componentOnReady().then(function (a2) {
          return r(a2);
        });
      } else {
        raf(function () {
          return r(a);
        });
      }
    };
    raf = function (a) {
      if (typeof __zone_symbol__requestAnimationFrame === "function") {
        return __zone_symbol__requestAnimationFrame(a);
      }
      if (typeof requestAnimationFrame === "function") {
        return requestAnimationFrame(a);
      }
      return setTimeout(a);
    };
  }
});

// node_modules/@ionic/core/dist/esm-es5/animation-dde8cc0d.js
import { __spreadArray as __spreadArray2 } from "tslib";
var animationPrefix, processKeyframes, convertCamelCaseToHypen, getAnimationPrefix, setStyleProperty, removeStyleProperty, animationEnd, generateKeyframeRules, keyframeIds, generateKeyframeName, getStyleContainer, createKeyframeStylesheet, addClassToArray, createAnimation;
var init_animation_dde8cc0d = __esm({
  "node_modules/@ionic/core/dist/esm-es5/animation-dde8cc0d.js"() {
    init_index_a5d50daf();
    init_helpers_ae653409();
    processKeyframes = function (n) {
      n.forEach(function (n2) {
        for (var r in n2) {
          if (n2.hasOwnProperty(r)) {
            var e = n2[r];
            if (r === "easing") {
              var t = "animation-timing-function";
              n2[t] = e;
              delete n2[r];
            } else {
              var t = convertCamelCaseToHypen(r);
              if (t !== r) {
                n2[t] = e;
                delete n2[r];
              }
            }
          }
        }
      });
      return n;
    };
    convertCamelCaseToHypen = function (n) {
      return n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    };
    getAnimationPrefix = function (n) {
      if (animationPrefix === void 0) {
        var r = n.style.animationName !== void 0;
        var e = n.style.webkitAnimationName !== void 0;
        animationPrefix = !r && e ? "-webkit-" : "";
      }
      return animationPrefix;
    };
    setStyleProperty = function (n, r, e) {
      var t = r.startsWith("animation") ? getAnimationPrefix(n) : "";
      n.style.setProperty(t + r, e);
    };
    removeStyleProperty = function (n, r) {
      var e = r.startsWith("animation") ? getAnimationPrefix(n) : "";
      n.style.removeProperty(e + r);
    };
    animationEnd = function (n, r) {
      var e;
      var t = {
        passive: true
      };
      var i = function () {
        if (e) {
          e();
        }
      };
      var a = function (e2) {
        if (n === e2.target) {
          i();
          r(e2);
        }
      };
      if (n) {
        n.addEventListener("webkitAnimationEnd", a, t);
        n.addEventListener("animationend", a, t);
        e = function () {
          n.removeEventListener("webkitAnimationEnd", a, t);
          n.removeEventListener("animationend", a, t);
        };
      }
      return i;
    };
    generateKeyframeRules = function (n) {
      if (n === void 0) {
        n = [];
      }
      return n.map(function (n2) {
        var r = n2.offset;
        var e = [];
        for (var t in n2) {
          if (n2.hasOwnProperty(t) && t !== "offset") {
            e.push("".concat(t, ": ").concat(n2[t], ";"));
          }
        }
        return "".concat(r * 100, "% { ").concat(e.join(" "), " }");
      }).join(" ");
    };
    keyframeIds = [];
    generateKeyframeName = function (n) {
      var r = keyframeIds.indexOf(n);
      if (r < 0) {
        r = keyframeIds.push(n) - 1;
      }
      return "ion-animation-".concat(r);
    };
    getStyleContainer = function (n) {
      var r = n.getRootNode !== void 0 ? n.getRootNode() : n;
      return r.head || r;
    };
    createKeyframeStylesheet = function (n, r, e) {
      var t;
      var i = getStyleContainer(e);
      var a = getAnimationPrefix(e);
      var f = i.querySelector("#" + n);
      if (f) {
        return f;
      }
      var o = ((t = e.ownerDocument) !== null && t !== void 0 ? t : document).createElement("style");
      o.id = n;
      o.textContent = "@".concat(a, "keyframes ").concat(n, " { ").concat(r, " } @").concat(a, "keyframes ").concat(n, "-alt { ").concat(r, " }");
      i.appendChild(o);
      return o;
    };
    addClassToArray = function (n, r) {
      if (n === void 0) {
        n = [];
      }
      if (r !== void 0) {
        var e = Array.isArray(r) ? r : [r];
        return __spreadArray2(__spreadArray2([], n, true), e, true);
      }
      return n;
    };
    createAnimation = function (n) {
      var r;
      var e;
      var t;
      var i;
      var a;
      var f;
      var o = [];
      var u = [];
      var v = [];
      var l = false;
      var s;
      var c = {};
      var d = [];
      var y = [];
      var m = {};
      var p = 0;
      var S = false;
      var P = false;
      var g;
      var A;
      var C;
      var b;
      var T = true;
      var k = false;
      var E = true;
      var _;
      var x;
      var K = false;
      var h2 = n;
      var w = [];
      var I = [];
      var R = [];
      var F = [];
      var D = [];
      var W = [];
      var j = [];
      var H = [];
      var M = [];
      var N = [];
      var $ = [];
      var z = typeof AnimationEffect === "function" || win !== void 0 && typeof win.AnimationEffect === "function";
      var Z = typeof Element === "function" && typeof Element.prototype.animate === "function" && z;
      var q = 100;
      var B = function () {
        return $;
      };
      var G = function (n2) {
        D.forEach(function (r2) {
          r2.destroy(n2);
        });
        J(n2);
        F.length = 0;
        D.length = 0;
        o.length = 0;
        X();
        l = false;
        E = true;
        return x;
      };
      var J = function (n2) {
        Y();
        if (n2) {
          nn();
        }
      };
      var L = function () {
        S = false;
        P = false;
        E = true;
        A = void 0;
        C = void 0;
        b = void 0;
        p = 0;
        k = false;
        T = true;
        K = false;
      };
      var O = function () {
        return p !== 0 && !K;
      };
      var Q = function (n2, r2) {
        var e2 = r2.findIndex(function (r3) {
          return r3.c === n2;
        });
        if (e2 > -1) {
          r2.splice(e2, 1);
        }
      };
      var U = function (n2, r2) {
        R.push({
          c: n2,
          o: r2
        });
        return x;
      };
      var V = function (n2, r2) {
        var e2 = (r2 === null || r2 === void 0 ? void 0 : r2.oneTimeCallback) ? I : w;
        e2.push({
          c: n2,
          o: r2
        });
        return x;
      };
      var X = function () {
        w.length = 0;
        I.length = 0;
        return x;
      };
      var Y = function () {
        if (Z) {
          $.forEach(function (n3) {
            n3.cancel();
          });
          $.length = 0;
        } else {
          var n2 = F.slice();
          raf(function () {
            n2.forEach(function (n3) {
              removeStyleProperty(n3, "animation-name");
              removeStyleProperty(n3, "animation-duration");
              removeStyleProperty(n3, "animation-timing-function");
              removeStyleProperty(n3, "animation-iteration-count");
              removeStyleProperty(n3, "animation-delay");
              removeStyleProperty(n3, "animation-play-state");
              removeStyleProperty(n3, "animation-fill-mode");
              removeStyleProperty(n3, "animation-direction");
            });
          });
        }
      };
      var nn = function () {
        W.forEach(function (n2) {
          if (n2 === null || n2 === void 0 ? void 0 : n2.parentNode) {
            n2.parentNode.removeChild(n2);
          }
        });
        W.length = 0;
      };
      var rn = function (n2) {
        j.push(n2);
        return x;
      };
      var en = function (n2) {
        H.push(n2);
        return x;
      };
      var tn = function (n2) {
        M.push(n2);
        return x;
      };
      var an = function (n2) {
        N.push(n2);
        return x;
      };
      var fn = function (n2) {
        u = addClassToArray(u, n2);
        return x;
      };
      var on = function (n2) {
        v = addClassToArray(v, n2);
        return x;
      };
      var un = function (n2) {
        if (n2 === void 0) {
          n2 = {};
        }
        c = n2;
        return x;
      };
      var vn = function (n2) {
        if (n2 === void 0) {
          n2 = [];
        }
        for (var r2 = 0, e2 = n2; r2 < e2.length; r2++) {
          var t2 = e2[r2];
          c[t2] = "";
        }
        return x;
      };
      var ln = function (n2) {
        d = addClassToArray(d, n2);
        return x;
      };
      var sn = function (n2) {
        y = addClassToArray(y, n2);
        return x;
      };
      var cn = function (n2) {
        if (n2 === void 0) {
          n2 = {};
        }
        m = n2;
        return x;
      };
      var dn = function (n2) {
        if (n2 === void 0) {
          n2 = [];
        }
        for (var r2 = 0, e2 = n2; r2 < e2.length; r2++) {
          var t2 = e2[r2];
          m[t2] = "";
        }
        return x;
      };
      var yn = function () {
        if (a !== void 0) {
          return a;
        }
        if (s) {
          return s.getFill();
        }
        return "both";
      };
      var mn = function () {
        if (A !== void 0) {
          return A;
        }
        if (f !== void 0) {
          return f;
        }
        if (s) {
          return s.getDirection();
        }
        return "normal";
      };
      var pn = function () {
        if (S) {
          return "linear";
        }
        if (t !== void 0) {
          return t;
        }
        if (s) {
          return s.getEasing();
        }
        return "linear";
      };
      var Sn = function () {
        if (P) {
          return 0;
        }
        if (C !== void 0) {
          return C;
        }
        if (e !== void 0) {
          return e;
        }
        if (s) {
          return s.getDuration();
        }
        return 0;
      };
      var Pn = function () {
        if (i !== void 0) {
          return i;
        }
        if (s) {
          return s.getIterations();
        }
        return 1;
      };
      var gn = function () {
        if (b !== void 0) {
          return b;
        }
        if (r !== void 0) {
          return r;
        }
        if (s) {
          return s.getDelay();
        }
        return 0;
      };
      var An = function () {
        return o;
      };
      var Cn = function (n2) {
        f = n2;
        zn(true);
        return x;
      };
      var bn = function (n2) {
        a = n2;
        zn(true);
        return x;
      };
      var Tn = function (n2) {
        r = n2;
        zn(true);
        return x;
      };
      var kn = function (n2) {
        t = n2;
        zn(true);
        return x;
      };
      var En = function (n2) {
        if (!Z && n2 === 0) {
          n2 = 1;
        }
        e = n2;
        zn(true);
        return x;
      };
      var _n = function (n2) {
        i = n2;
        zn(true);
        return x;
      };
      var xn = function (n2) {
        s = n2;
        return x;
      };
      var Kn = function (n2) {
        if (n2 != null) {
          if (n2.nodeType === 1) {
            F.push(n2);
          } else if (n2.length >= 0) {
            for (var r2 = 0; r2 < n2.length; r2++) {
              F.push(n2[r2]);
            }
          } else {
            console.error("Invalid addElement value");
          }
        }
        return x;
      };
      var hn = function (n2) {
        if (n2 != null) {
          if (Array.isArray(n2)) {
            for (var r2 = 0, e2 = n2; r2 < e2.length; r2++) {
              var t2 = e2[r2];
              t2.parent(x);
              D.push(t2);
            }
          } else {
            n2.parent(x);
            D.push(n2);
          }
        }
        return x;
      };
      var wn = function (n2) {
        var r2 = o !== n2;
        o = n2;
        if (r2) {
          In(o);
        }
        return x;
      };
      var In = function (n2) {
        if (Z) {
          B().forEach(function (r2) {
            var e2 = r2.effect;
            if (e2.setKeyframes) {
              e2.setKeyframes(n2);
            } else {
              var t2 = new KeyframeEffect(e2.target, n2, e2.getTiming());
              r2.effect = t2;
            }
          });
        } else {
          Wn();
        }
      };
      var Rn = function () {
        j.forEach(function (n3) {
          return n3();
        });
        H.forEach(function (n3) {
          return n3();
        });
        var n2 = u;
        var r2 = v;
        var e2 = c;
        F.forEach(function (t2) {
          var i3 = t2.classList;
          n2.forEach(function (n3) {
            return i3.add(n3);
          });
          r2.forEach(function (n3) {
            return i3.remove(n3);
          });
          for (var a2 in e2) {
            if (e2.hasOwnProperty(a2)) {
              setStyleProperty(t2, a2, e2[a2]);
            }
          }
        });
      };
      var Fn = function () {
        On();
        M.forEach(function (n3) {
          return n3();
        });
        N.forEach(function (n3) {
          return n3();
        });
        var n2 = T ? 1 : 0;
        var r2 = d;
        var e2 = y;
        var t2 = m;
        F.forEach(function (n3) {
          var i3 = n3.classList;
          r2.forEach(function (n4) {
            return i3.add(n4);
          });
          e2.forEach(function (n4) {
            return i3.remove(n4);
          });
          for (var a2 in t2) {
            if (t2.hasOwnProperty(a2)) {
              setStyleProperty(n3, a2, t2[a2]);
            }
          }
        });
        C = void 0;
        A = void 0;
        b = void 0;
        w.forEach(function (r3) {
          return r3.c(n2, x);
        });
        I.forEach(function (r3) {
          return r3.c(n2, x);
        });
        I.length = 0;
        E = true;
        if (T) {
          k = true;
        }
        T = true;
      };
      var Dn = function () {
        if (p === 0) {
          return;
        }
        p--;
        if (p === 0) {
          Fn();
          if (s) {
            s.animationFinish();
          }
        }
      };
      var Wn = function (r2) {
        if (r2 === void 0) {
          r2 = true;
        }
        nn();
        var e2 = processKeyframes(o);
        F.forEach(function (t2) {
          if (e2.length > 0) {
            var i3 = generateKeyframeRules(e2);
            _ = n !== void 0 ? n : generateKeyframeName(i3);
            var a2 = createKeyframeStylesheet(_, i3, t2);
            W.push(a2);
            setStyleProperty(t2, "animation-duration", "".concat(Sn(), "ms"));
            setStyleProperty(t2, "animation-timing-function", pn());
            setStyleProperty(t2, "animation-delay", "".concat(gn(), "ms"));
            setStyleProperty(t2, "animation-fill-mode", yn());
            setStyleProperty(t2, "animation-direction", mn());
            var f2 = Pn() === Infinity ? "infinite" : Pn().toString();
            setStyleProperty(t2, "animation-iteration-count", f2);
            setStyleProperty(t2, "animation-play-state", "paused");
            if (r2) {
              setStyleProperty(t2, "animation-name", "".concat(a2.id, "-alt"));
            }
            raf(function () {
              setStyleProperty(t2, "animation-name", a2.id || null);
            });
          }
        });
      };
      var jn = function () {
        F.forEach(function (n2) {
          var r2 = n2.animate(o, {
            id: h2,
            delay: gn(),
            duration: Sn(),
            easing: pn(),
            iterations: Pn(),
            fill: yn(),
            direction: mn()
          });
          r2.pause();
          $.push(r2);
        });
        if ($.length > 0) {
          $[0].onfinish = function () {
            Dn();
          };
        }
      };
      var Hn = function (n2) {
        if (n2 === void 0) {
          n2 = true;
        }
        Rn();
        if (o.length > 0) {
          if (Z) {
            jn();
          } else {
            Wn(n2);
          }
        }
        l = true;
      };
      var Mn = function (n2) {
        n2 = Math.min(Math.max(n2, 0), 0.9999);
        if (Z) {
          $.forEach(function (r3) {
            r3.currentTime = r3.effect.getComputedTiming().delay + Sn() * n2;
            r3.pause();
          });
        } else {
          var r2 = "-".concat(Sn() * n2, "ms");
          F.forEach(function (n3) {
            if (o.length > 0) {
              setStyleProperty(n3, "animation-delay", r2);
              setStyleProperty(n3, "animation-play-state", "paused");
            }
          });
        }
      };
      var Nn = function (n2) {
        $.forEach(function (n3) {
          n3.effect.updateTiming({
            delay: gn(),
            duration: Sn(),
            easing: pn(),
            iterations: Pn(),
            fill: yn(),
            direction: mn()
          });
        });
        if (n2 !== void 0) {
          Mn(n2);
        }
      };
      var $n = function (n2, r2) {
        if (n2 === void 0) {
          n2 = true;
        }
        raf(function () {
          F.forEach(function (e2) {
            setStyleProperty(e2, "animation-name", _ || null);
            setStyleProperty(e2, "animation-duration", "".concat(Sn(), "ms"));
            setStyleProperty(e2, "animation-timing-function", pn());
            setStyleProperty(e2, "animation-delay", r2 !== void 0 ? "-".concat(r2 * Sn(), "ms") : "".concat(gn(), "ms"));
            setStyleProperty(e2, "animation-fill-mode", yn() || null);
            setStyleProperty(e2, "animation-direction", mn() || null);
            var t2 = Pn() === Infinity ? "infinite" : Pn().toString();
            setStyleProperty(e2, "animation-iteration-count", t2);
            if (n2) {
              setStyleProperty(e2, "animation-name", "".concat(_, "-alt"));
            }
            raf(function () {
              setStyleProperty(e2, "animation-name", _ || null);
            });
          });
        });
      };
      var zn = function (n2, r2, e2) {
        if (n2 === void 0) {
          n2 = false;
        }
        if (r2 === void 0) {
          r2 = true;
        }
        if (n2) {
          D.forEach(function (t2) {
            t2.update(n2, r2, e2);
          });
        }
        if (Z) {
          Nn(e2);
        } else {
          $n(r2, e2);
        }
        return x;
      };
      var Zn = function (n2, r2) {
        if (n2 === void 0) {
          n2 = false;
        }
        D.forEach(function (e2) {
          e2.progressStart(n2, r2);
        });
        Gn();
        S = n2;
        if (!l) {
          Hn();
        }
        zn(false, true, r2);
        return x;
      };
      var qn = function (n2) {
        D.forEach(function (r2) {
          r2.progressStep(n2);
        });
        Mn(n2);
        return x;
      };
      var Bn = function (n2, r2, e2) {
        S = false;
        D.forEach(function (t2) {
          t2.progressEnd(n2, r2, e2);
        });
        if (e2 !== void 0) {
          C = e2;
        }
        k = false;
        T = true;
        if (n2 === 0) {
          A = mn() === "reverse" ? "normal" : "reverse";
          if (A === "reverse") {
            T = false;
          }
          if (Z) {
            zn();
            Mn(1 - r2);
          } else {
            b = (1 - r2) * Sn() * -1;
            zn(false, false);
          }
        } else if (n2 === 1) {
          if (Z) {
            zn();
            Mn(r2);
          } else {
            b = r2 * Sn() * -1;
            zn(false, false);
          }
        }
        if (n2 !== void 0 && !s) {
          Yn();
        }
        return x;
      };
      var Gn = function () {
        if (l) {
          if (Z) {
            $.forEach(function (n2) {
              n2.pause();
            });
          } else {
            F.forEach(function (n2) {
              setStyleProperty(n2, "animation-play-state", "paused");
            });
          }
          K = true;
        }
      };
      var Jn = function () {
        D.forEach(function (n2) {
          n2.pause();
        });
        Gn();
        return x;
      };
      var Ln = function () {
        g = void 0;
        Dn();
      };
      var On = function () {
        if (g) {
          clearTimeout(g);
        }
      };
      var Qn = function () {
        On();
        raf(function () {
          F.forEach(function (n3) {
            if (o.length > 0) {
              setStyleProperty(n3, "animation-play-state", "running");
            }
          });
        });
        if (o.length === 0 || F.length === 0) {
          Dn();
        } else {
          var n2 = gn() || 0;
          var r2 = Sn() || 0;
          var e2 = Pn() || 1;
          if (isFinite(e2)) {
            g = setTimeout(Ln, n2 + r2 * e2 + q);
          }
          animationEnd(F[0], function () {
            On();
            raf(function () {
              Un();
              raf(Dn);
            });
          });
        }
      };
      var Un = function () {
        F.forEach(function (n2) {
          removeStyleProperty(n2, "animation-duration");
          removeStyleProperty(n2, "animation-delay");
          removeStyleProperty(n2, "animation-play-state");
        });
      };
      var Vn = function () {
        $.forEach(function (n2) {
          n2.play();
        });
        if (o.length === 0 || F.length === 0) {
          Dn();
        }
      };
      var Xn = function () {
        if (Z) {
          Mn(0);
          Nn();
        } else {
          $n();
        }
      };
      var Yn = function (n2) {
        return new Promise(function (r2) {
          if (n2 === null || n2 === void 0 ? void 0 : n2.sync) {
            P = true;
            V(function () {
              return P = false;
            }, {
              oneTimeCallback: true
            });
          }
          if (!l) {
            Hn();
          }
          if (k) {
            Xn();
            k = false;
          }
          if (E) {
            p = D.length + 1;
            E = false;
          }
          var e2 = function () {
            Q(t2, I);
            r2();
          };
          var t2 = function () {
            Q(e2, R);
            r2();
          };
          V(t2, {
            oneTimeCallback: true
          });
          U(e2, {
            oneTimeCallback: true
          });
          D.forEach(function (n3) {
            n3.play();
          });
          if (Z) {
            Vn();
          } else {
            Qn();
          }
          K = false;
        });
      };
      var nr = function () {
        D.forEach(function (n2) {
          n2.stop();
        });
        if (l) {
          Y();
          l = false;
        }
        L();
        R.forEach(function (n2) {
          return n2.c(0, x);
        });
        R.length = 0;
      };
      var rr = function (n2, r2) {
        var e2;
        var t2 = o[0];
        if (t2 !== void 0 && (t2.offset === void 0 || t2.offset === 0)) {
          t2[n2] = r2;
        } else {
          o = __spreadArray2([(e2 = {
            offset: 0
          }, e2[n2] = r2, e2)], o, true);
        }
        return x;
      };
      var er = function (n2, r2) {
        var e2;
        var t2 = o[o.length - 1];
        if (t2 !== void 0 && (t2.offset === void 0 || t2.offset === 1)) {
          t2[n2] = r2;
        } else {
          o = __spreadArray2(__spreadArray2([], o, true), [(e2 = {
            offset: 1
          }, e2[n2] = r2, e2)], false);
        }
        return x;
      };
      var tr = function (n2, r2, e2) {
        return rr(n2, r2).to(n2, e2);
      };
      return x = {
        parentAnimation: s,
        elements: F,
        childAnimations: D,
        id: h2,
        animationFinish: Dn,
        from: rr,
        to: er,
        fromTo: tr,
        parent: xn,
        play: Yn,
        pause: Jn,
        stop: nr,
        destroy: G,
        keyframes: wn,
        addAnimation: hn,
        addElement: Kn,
        update: zn,
        fill: bn,
        direction: Cn,
        iterations: _n,
        duration: En,
        easing: kn,
        delay: Tn,
        getWebAnimations: B,
        getKeyframes: An,
        getFill: yn,
        getDirection: mn,
        getDelay: gn,
        getIterations: Pn,
        getEasing: pn,
        getDuration: Sn,
        afterAddRead: tn,
        afterAddWrite: an,
        afterClearStyles: dn,
        afterStyles: cn,
        afterRemoveClass: sn,
        afterAddClass: ln,
        beforeAddRead: rn,
        beforeAddWrite: en,
        beforeClearStyles: vn,
        beforeStyles: un,
        beforeRemoveClass: on,
        beforeAddClass: fn,
        onFinish: V,
        isRunning: O,
        progressStart: Zn,
        progressStep: qn,
        progressEnd: Bn
      };
    };
  }
});

// node_modules/@ionic/core/dist/esm-es5/index-b7d870cf.js
import { __awaiter, __extends, __generator, __spreadArray as __spreadArray3 } from "tslib";
function queryNonceMetaTagContent(e) {
  var t, r, n;
  return (n = (r = (t = e.head) === null || t === void 0 ? void 0 : t.querySelector('meta[name="csp-nonce"]')) === null || r === void 0 ? void 0 : r.getAttribute("content")) !== null && n !== void 0 ? n : void 0;
}
var NAMESPACE, BUILD, scopeId, contentRef, hostTagName, useNativeShadowDom, checkSlotFallbackVisibility, checkSlotRelocate, isSvgMode, queuePending, createTime, uniqueTime, CONTENT_REF_ID, ORG_LOCATION_ID, SLOT_NODE_ID, TEXT_NODE_ID, HYDRATE_ID, HYDRATED_STYLE_ID, HYDRATE_CHILD_ID, HYDRATED_CSS, SLOT_FB_CSS, XLINK_NS, EMPTY_OBJ, SVG_NS, HTML_NS, isDef, isComplexType, h, newVNode, Host, isHost, vdomFnUtils, convertToPublic, convertToPrivate, initializeClientHydrate, clientHydrate, initializeDocumentHydrate, computeMode, setMode, getMode, parsePropertyValue, emitEvent, rootAppliedStyles, registerStyle, addStyle, attachStyles, getScopeId, convertScopedToShadow, setAccessor, parseClassListRegex, parseClassList, CAPTURE_EVENT_SUFFIX, CAPTURE_EVENT_REGEX, updateElement, createElm, putBackInOriginalLocation, addVnodes, removeVnodes, updateChildren, isSameVnode, referenceNode, parentReferenceNode, patch, updateFallbackSlotVisibility, relocateNodes, markSlotContentForRelocation, isNodeLocatedInSlot, nullifyVNodeRefs, renderVdom, attachToAncestor, scheduleUpdate, dispatchHooks, enqueue, isPromisey, updateComponent, callRender, postUpdateComponent, appDidLoad, safeCall, addHydratedFlag, getValue, setValue, proxyComponent, initializeComponent, fireConnectedCallback, connectedCallback, setContentReference, disconnectInstance, disconnectedCallback, bootstrapLazy, addHostEventListeners, hostListenerProxy, getHostListenerTarget, hostListenerOpts, hostRefs, getHostRef, registerHost, isMemberInElement, consoleError, cmpModules, loadModule, styles, modeResolutionChain, win2, doc2, plt, setPlatformHelpers, supportsShadow, promiseResolve, supportsConstructableStylesheets, queueDomReads, queueDomWrites, queueTask, consume, flush, nextTick, readTask, writeTask;
var init_index_b7d870cf = __esm({
  "node_modules/@ionic/core/dist/esm-es5/index-b7d870cf.js"() {
    NAMESPACE = "ionic";
    BUILD = {
      allRenderFn: false,
      appendChildSlotFix: false,
      asyncLoading: true,
      asyncQueue: false,
      attachStyles: true,
      cloneNodeFix: false,
      cmpDidLoad: true,
      cmpDidRender: true,
      cmpDidUnload: false,
      cmpDidUpdate: true,
      cmpShouldUpdate: false,
      cmpWillLoad: true,
      cmpWillRender: true,
      cmpWillUpdate: false,
      connectedCallback: true,
      constructableCSS: true,
      cssAnnotations: true,
      devTools: false,
      disconnectedCallback: true,
      element: false,
      event: true,
      experimentalSlotFixes: false,
      formAssociated: false,
      hasRenderFn: true,
      hostListener: true,
      hostListenerTarget: true,
      hostListenerTargetBody: true,
      hostListenerTargetDocument: true,
      hostListenerTargetParent: false,
      hostListenerTargetWindow: true,
      hotModuleReplacement: false,
      hydrateClientSide: true,
      hydrateServerSide: false,
      hydratedAttribute: false,
      hydratedClass: true,
      initializeNextTick: false,
      invisiblePrehydration: true,
      isDebug: false,
      isDev: false,
      isTesting: false,
      lazyLoad: true,
      lifecycle: true,
      lifecycleDOMEvents: false,
      member: true,
      method: true,
      mode: true,
      observeAttribute: true,
      profile: false,
      prop: true,
      propBoolean: true,
      propMutable: true,
      propNumber: true,
      propString: true,
      reflect: true,
      scoped: true,
      scopedSlotTextContentFix: false,
      scriptDataOpts: false,
      shadowDelegatesFocus: true,
      shadowDom: true,
      slot: true,
      slotChildNodesFix: false,
      slotRelocation: true,
      state: true,
      style: true,
      svg: true,
      taskQueue: true,
      transformTagName: false,
      updatable: true,
      vdomAttribute: true,
      vdomClass: true,
      vdomFunctional: true,
      vdomKey: true,
      vdomListener: true,
      vdomPropOrAttr: true,
      vdomRef: true,
      vdomRender: true,
      vdomStyle: true,
      vdomText: true,
      vdomXlink: true,
      watchCallback: true
    };
    useNativeShadowDom = false;
    checkSlotFallbackVisibility = false;
    checkSlotRelocate = false;
    isSvgMode = false;
    queuePending = false;
    createTime = function (e, t) {
      if (t === void 0) {
        t = "";
      }
      {
        return function () {
          return;
        };
      }
    };
    uniqueTime = function (e, t) {
      {
        return function () {
          return;
        };
      }
    };
    CONTENT_REF_ID = "r";
    ORG_LOCATION_ID = "o";
    SLOT_NODE_ID = "s";
    TEXT_NODE_ID = "t";
    HYDRATE_ID = "s-id";
    HYDRATED_STYLE_ID = "sty-id";
    HYDRATE_CHILD_ID = "c-id";
    HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
    SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
    XLINK_NS = "http://www.w3.org/1999/xlink";
    EMPTY_OBJ = {};
    SVG_NS = "http://www.w3.org/2000/svg";
    HTML_NS = "http://www.w3.org/1999/xhtml";
    isDef = function (e) {
      return e != null;
    };
    isComplexType = function (e) {
      e = typeof e;
      return e === "object" || e === "function";
    };
    h = function (e, t) {
      var r = [];
      for (var n = 2; n < arguments.length; n++) {
        r[n - 2] = arguments[n];
      }
      var a = null;
      var i = null;
      var o = null;
      var l = false;
      var u = false;
      var s = [];
      var f = function (t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          a = t2[r2];
          if (Array.isArray(a)) {
            f(a);
          } else if (a != null && typeof a !== "boolean") {
            if (l = typeof e !== "function" && !isComplexType(a)) {
              a = String(a);
            }
            if (l && u) {
              s[s.length - 1].i += a;
            } else {
              s.push(l ? newVNode(null, a) : a);
            }
            u = l;
          }
        }
      };
      f(r);
      if (t) {
        if (t.key) {
          i = t.key;
        }
        if (t.name) {
          o = t.name;
        }
        {
          var c = t.className || t.class;
          if (c) {
            t.class = typeof c !== "object" ? c : Object.keys(c).filter(function (e2) {
              return c[e2];
            }).join(" ");
          }
        }
      }
      if (typeof e === "function") {
        return e(t === null ? {} : t, s, vdomFnUtils);
      }
      var v = newVNode(e, null);
      v.o = t;
      if (s.length > 0) {
        v.l = s;
      }
      {
        v.u = i;
      }
      {
        v.v = o;
      }
      return v;
    };
    newVNode = function (e, t) {
      var r = {
        p: 0,
        m: e,
        i: t,
        h: null,
        l: null
      };
      {
        r.o = null;
      }
      {
        r.u = null;
      }
      {
        r.v = null;
      }
      return r;
    };
    Host = {};
    isHost = function (e) {
      return e && e.m === Host;
    };
    vdomFnUtils = {
      forEach: function (e, t) {
        return e.map(convertToPublic).forEach(t);
      },
      map: function (e, t) {
        return e.map(convertToPublic).map(t).map(convertToPrivate);
      }
    };
    convertToPublic = function (e) {
      return {
        vattrs: e.o,
        vchildren: e.l,
        vkey: e.u,
        vname: e.v,
        vtag: e.m,
        vtext: e.i
      };
    };
    convertToPrivate = function (e) {
      if (typeof e.vtag === "function") {
        var t = Object.assign({}, e.vattrs);
        if (e.vkey) {
          t.key = e.vkey;
        }
        if (e.vname) {
          t.name = e.vname;
        }
        return h.apply(void 0, __spreadArray3([e.vtag, t], e.vchildren || [], false));
      }
      var r = newVNode(e.vtag, e.vtext);
      r.o = e.vattrs;
      r.l = e.vchildren;
      r.u = e.vkey;
      r.v = e.vname;
      return r;
    };
    initializeClientHydrate = function (e, t, r, n) {
      var a = createTime("hydrateClient", t);
      var i = e.shadowRoot;
      var o = [];
      var l = [];
      var u = i ? [] : null;
      var s = n.S = newVNode(t, null);
      if (!plt.T) {
        initializeDocumentHydrate(doc2.body, plt.T = /* @__PURE__ */new Map());
      }
      e[HYDRATE_ID] = r;
      e.removeAttribute(HYDRATE_ID);
      clientHydrate(s, o, l, u, e, e, r);
      o.map(function (e2) {
        var r2 = e2._ + "." + e2.C;
        var n2 = plt.T.get(r2);
        var a2 = e2.h;
        if (n2 && supportsShadow && n2["s-en"] === "") {
          n2.parentNode.insertBefore(a2, n2.nextSibling);
        }
        if (!i) {
          a2["s-hn"] = t;
          if (n2) {
            a2["s-ol"] = n2;
            a2["s-ol"]["s-nr"] = a2;
          }
        }
        plt.T.delete(r2);
      });
      if (i) {
        u.map(function (e2) {
          if (e2) {
            i.appendChild(e2);
          }
        });
      }
      a();
    };
    clientHydrate = function (e, t, r, n, a, i, o) {
      var l;
      var u;
      var s;
      var f;
      if (i.nodeType === 1) {
        l = i.getAttribute(HYDRATE_CHILD_ID);
        if (l) {
          u = l.split(".");
          if (u[0] === o || u[0] === "0") {
            s = {
              p: 0,
              _: u[0],
              C: u[1],
              R: u[2],
              $: u[3],
              m: i.tagName.toLowerCase(),
              h: i,
              o: null,
              l: null,
              u: null,
              v: null,
              i: null
            };
            t.push(s);
            i.removeAttribute(HYDRATE_CHILD_ID);
            if (!e.l) {
              e.l = [];
            }
            e.l[s.$] = s;
            e = s;
            if (n && s.R === "0") {
              n[s.$] = s.h;
            }
          }
        }
        for (f = i.childNodes.length - 1; f >= 0; f--) {
          clientHydrate(e, t, r, n, a, i.childNodes[f], o);
        }
        if (i.shadowRoot) {
          for (f = i.shadowRoot.childNodes.length - 1; f >= 0; f--) {
            clientHydrate(e, t, r, n, a, i.shadowRoot.childNodes[f], o);
          }
        }
      } else if (i.nodeType === 8) {
        u = i.nodeValue.split(".");
        if (u[1] === o || u[1] === "0") {
          l = u[0];
          s = {
            p: 0,
            _: u[1],
            C: u[2],
            R: u[3],
            $: u[4],
            h: i,
            o: null,
            l: null,
            u: null,
            v: null,
            m: null,
            i: null
          };
          if (l === TEXT_NODE_ID) {
            s.h = i.nextSibling;
            if (s.h && s.h.nodeType === 3) {
              s.i = s.h.textContent;
              t.push(s);
              i.remove();
              if (!e.l) {
                e.l = [];
              }
              e.l[s.$] = s;
              if (n && s.R === "0") {
                n[s.$] = s.h;
              }
            }
          } else if (s._ === o) {
            if (l === SLOT_NODE_ID) {
              s.m = "slot";
              if (u[5]) {
                i["s-sn"] = s.v = u[5];
              } else {
                i["s-sn"] = "";
              }
              i["s-sr"] = true;
              if (n) {
                s.h = doc2.createElement(s.m);
                if (s.v) {
                  s.h.setAttribute("name", s.v);
                }
                i.parentNode.insertBefore(s.h, i);
                i.remove();
                if (s.R === "0") {
                  n[s.$] = s.h;
                }
              }
              r.push(s);
              if (!e.l) {
                e.l = [];
              }
              e.l[s.$] = s;
            } else if (l === CONTENT_REF_ID) {
              if (n) {
                i.remove();
              } else {
                a["s-cr"] = i;
                i["s-cn"] = true;
              }
            }
          }
        }
      } else if (e && e.m === "style") {
        var c = newVNode(null, i.textContent);
        c.h = i;
        c.$ = "0";
        e.l = [c];
      }
    };
    initializeDocumentHydrate = function (e, t) {
      if (e.nodeType === 1) {
        var r = 0;
        for (; r < e.childNodes.length; r++) {
          initializeDocumentHydrate(e.childNodes[r], t);
        }
        if (e.shadowRoot) {
          for (r = 0; r < e.shadowRoot.childNodes.length; r++) {
            initializeDocumentHydrate(e.shadowRoot.childNodes[r], t);
          }
        }
      } else if (e.nodeType === 8) {
        var n = e.nodeValue.split(".");
        if (n[0] === ORG_LOCATION_ID) {
          t.set(n[1] + "." + n[2], e);
          e.nodeValue = "";
          e["s-en"] = n[3];
        }
      }
    };
    computeMode = function (e) {
      return modeResolutionChain.map(function (t) {
        return t(e);
      }).find(function (e2) {
        return !!e2;
      });
    };
    setMode = function (e) {
      return modeResolutionChain.push(e);
    };
    getMode = function (e) {
      return getHostRef(e).D;
    };
    parsePropertyValue = function (e, t) {
      if (e != null && !isComplexType(e)) {
        if (t & 4) {
          return e === "false" ? false : e === "" || !!e;
        }
        if (t & 2) {
          return parseFloat(e);
        }
        if (t & 1) {
          return String(e);
        }
        return e;
      }
      return e;
    };
    emitEvent = function (e, t, r) {
      var n = plt.ce(t, r);
      e.dispatchEvent(n);
      return n;
    };
    rootAppliedStyles = /* @__PURE__ */new WeakMap();
    registerStyle = function (e, t, r) {
      var n = styles.get(e);
      if (supportsConstructableStylesheets && r) {
        n = n || new CSSStyleSheet();
        if (typeof n === "string") {
          n = t;
        } else {
          n.replaceSync(t);
        }
      } else {
        n = t;
      }
      styles.set(e, n);
    };
    addStyle = function (e, t, r) {
      var n;
      var a = getScopeId(t, r);
      var i = styles.get(a);
      e = e.nodeType === 11 ? e : doc2;
      if (i) {
        if (typeof i === "string") {
          e = e.head || e;
          var o = rootAppliedStyles.get(e);
          var l = void 0;
          if (!o) {
            rootAppliedStyles.set(e, o = /* @__PURE__ */new Set());
          }
          if (!o.has(a)) {
            if (e.host && (l = e.querySelector("[".concat(HYDRATED_STYLE_ID, '="').concat(a, '"]')))) {
              l.innerHTML = i;
            } else {
              l = doc2.createElement("style");
              l.innerHTML = i;
              var u = (n = plt.N) !== null && n !== void 0 ? n : queryNonceMetaTagContent(doc2);
              if (u != null) {
                l.setAttribute("nonce", u);
              }
              e.insertBefore(l, e.querySelector("link"));
            }
            if (t.p & 4) {
              l.innerHTML += SLOT_FB_CSS;
            }
            if (o) {
              o.add(a);
            }
          }
        } else if (!e.adoptedStyleSheets.includes(i)) {
          e.adoptedStyleSheets = __spreadArray3(__spreadArray3([], e.adoptedStyleSheets, true), [i], false);
        }
      }
      return a;
    };
    attachStyles = function (e) {
      var t = e.k;
      var r = e.$hostElement$;
      var n = t.p;
      var a = createTime("attachStyles", t.L);
      var i = addStyle(r.shadowRoot ? r.shadowRoot : r.getRootNode(), t, e.D);
      if (n & 10) {
        r["s-sc"] = i;
        r.classList.add(i + "-h");
        if (n & 2) {
          r.classList.add(i + "-s");
        }
      }
      a();
    };
    getScopeId = function (e, t) {
      return "sc-" + (t && e.p & 32 ? e.L + "-" + t : e.L);
    };
    convertScopedToShadow = function (e) {
      return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");
    };
    setAccessor = function (e, t, r, n, a, i) {
      if (r !== n) {
        var o = isMemberInElement(e, t);
        var l = t.toLowerCase();
        if (t === "class") {
          var u = e.classList;
          var s = parseClassList(r);
          var f = parseClassList(n);
          u.remove.apply(u, s.filter(function (e2) {
            return e2 && !f.includes(e2);
          }));
          u.add.apply(u, f.filter(function (e2) {
            return e2 && !s.includes(e2);
          }));
        } else if (t === "style") {
          {
            for (var c in r) {
              if (!n || n[c] == null) {
                if (c.includes("-")) {
                  e.style.removeProperty(c);
                } else {
                  e.style[c] = "";
                }
              }
            }
          }
          for (var c in n) {
            if (!r || n[c] !== r[c]) {
              if (c.includes("-")) {
                e.style.setProperty(c, n[c]);
              } else {
                e.style[c] = n[c];
              }
            }
          }
        } else if (t === "key") ;else if (t === "ref") {
          if (n) {
            n(e);
          }
        } else if (!o && t[0] === "o" && t[1] === "n") {
          if (t[2] === "-") {
            t = t.slice(3);
          } else if (isMemberInElement(win2, l)) {
            t = l.slice(2);
          } else {
            t = l[2] + t.slice(3);
          }
          if (r || n) {
            var v = t.endsWith(CAPTURE_EVENT_SUFFIX);
            t = t.replace(CAPTURE_EVENT_REGEX, "");
            if (r) {
              plt.rel(e, t, r, v);
            }
            if (n) {
              plt.ael(e, t, n, v);
            }
          }
        } else {
          var d = isComplexType(n);
          if ((o || d && n !== null) && !a) {
            try {
              if (!e.tagName.includes("-")) {
                var p = n == null ? "" : n;
                if (t === "list") {
                  o = false;
                } else if (r == null || e[t] != p) {
                  e[t] = p;
                }
              } else {
                e[t] = n;
              }
            } catch (e2) {}
          }
          var m = false;
          {
            if (l !== (l = l.replace(/^xlink\:?/, ""))) {
              t = l;
              m = true;
            }
          }
          if (n == null || n === false) {
            if (n !== false || e.getAttribute(t) === "") {
              if (m) {
                e.removeAttributeNS(XLINK_NS, t);
              } else {
                e.removeAttribute(t);
              }
            }
          } else if ((!o || i & 4 || a) && !d) {
            n = n === true ? "" : n;
            if (m) {
              e.setAttributeNS(XLINK_NS, t, n);
            } else {
              e.setAttribute(t, n);
            }
          }
        }
      }
    };
    parseClassListRegex = /\s/;
    parseClassList = function (e) {
      return !e ? [] : e.split(parseClassListRegex);
    };
    CAPTURE_EVENT_SUFFIX = "Capture";
    CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");
    updateElement = function (e, t, r, n) {
      var a = t.h.nodeType === 11 && t.h.host ? t.h.host : t.h;
      var i = e && e.o || EMPTY_OBJ;
      var o = t.o || EMPTY_OBJ;
      {
        for (n in i) {
          if (!(n in o)) {
            setAccessor(a, n, i[n], void 0, r, t.p);
          }
        }
      }
      for (n in o) {
        setAccessor(a, n, i[n], o[n], r, t.p);
      }
    };
    createElm = function (e, t, r, n) {
      var a;
      var i = t.l[r];
      var o = 0;
      var l;
      var u;
      var s;
      if (!useNativeShadowDom) {
        checkSlotRelocate = true;
        if (i.m === "slot") {
          if (scopeId) {
            n.classList.add(scopeId + "-s");
          }
          i.p |= i.l ? 2 : 1;
        }
      }
      if (i.i !== null) {
        l = i.h = doc2.createTextNode(i.i);
      } else if (i.p & 1) {
        l = i.h = doc2.createTextNode("");
      } else {
        if (!isSvgMode) {
          isSvgMode = i.m === "svg";
        }
        l = i.h = doc2.createElementNS(isSvgMode ? SVG_NS : HTML_NS, i.p & 2 ? "slot-fb" : i.m);
        if (isSvgMode && i.m === "foreignObject") {
          isSvgMode = false;
        }
        {
          updateElement(null, i, isSvgMode);
        }
        if (isDef(scopeId) && l["s-si"] !== scopeId) {
          l.classList.add(l["s-si"] = scopeId);
        }
        if (i.l) {
          for (o = 0; o < i.l.length; ++o) {
            u = createElm(e, i, o, l);
            if (u) {
              l.appendChild(u);
            }
          }
        }
        {
          if (i.m === "svg") {
            isSvgMode = false;
          } else if (l.tagName === "foreignObject") {
            isSvgMode = true;
          }
        }
      }
      l["s-hn"] = hostTagName;
      {
        if (i.p & (2 | 1)) {
          l["s-sr"] = true;
          l["s-fs"] = (a = i.o) === null || a === void 0 ? void 0 : a.slot;
          l["s-cr"] = contentRef;
          l["s-sn"] = i.v || "";
          s = e && e.l && e.l[r];
          if (s && s.m === i.m && e.h) {
            {
              putBackInOriginalLocation(e.h, false);
            }
          }
        }
      }
      return l;
    };
    putBackInOriginalLocation = function (e, t) {
      var r;
      plt.p |= 1;
      var n = e.childNodes;
      for (var a = n.length - 1; a >= 0; a--) {
        var i = n[a];
        if (i["s-hn"] !== hostTagName && i["s-ol"]) {
          parentReferenceNode(i).insertBefore(i, referenceNode(i));
          i["s-ol"].remove();
          i["s-ol"] = void 0;
          i["s-sh"] = void 0;
          if (i.nodeType === 1) {
            i.setAttribute("slot", (r = i["s-sn"]) !== null && r !== void 0 ? r : "");
          }
          checkSlotRelocate = true;
        }
        if (t) {
          putBackInOriginalLocation(i, t);
        }
      }
      plt.p &= ~1;
    };
    addVnodes = function (e, t, r, n, a, i) {
      var o = e["s-cr"] && e["s-cr"].parentNode || e;
      var l;
      if (o.shadowRoot && o.tagName === hostTagName) {
        o = o.shadowRoot;
      }
      for (; a <= i; ++a) {
        if (n[a]) {
          l = createElm(null, r, a, e);
          if (l) {
            n[a].h = l;
            o.insertBefore(l, referenceNode(t));
          }
        }
      }
    };
    removeVnodes = function (e, t, r) {
      for (var n = t; n <= r; ++n) {
        var a = e[n];
        if (a) {
          var i = a.h;
          nullifyVNodeRefs(a);
          if (i) {
            {
              checkSlotFallbackVisibility = true;
              if (i["s-ol"]) {
                i["s-ol"].remove();
              } else {
                putBackInOriginalLocation(i, true);
              }
            }
            i.remove();
          }
        }
      }
    };
    updateChildren = function (e, t, r, n) {
      var a = 0;
      var i = 0;
      var o = 0;
      var l = 0;
      var u = t.length - 1;
      var s = t[0];
      var f = t[u];
      var c = n.length - 1;
      var v = n[0];
      var d = n[c];
      var p;
      var m;
      while (a <= u && i <= c) {
        if (s == null) {
          s = t[++a];
        } else if (f == null) {
          f = t[--u];
        } else if (v == null) {
          v = n[++i];
        } else if (d == null) {
          d = n[--c];
        } else if (isSameVnode(s, v)) {
          patch(s, v);
          s = t[++a];
          v = n[++i];
        } else if (isSameVnode(f, d)) {
          patch(f, d);
          f = t[--u];
          d = n[--c];
        } else if (isSameVnode(s, d)) {
          if (s.m === "slot" || d.m === "slot") {
            putBackInOriginalLocation(s.h.parentNode, false);
          }
          patch(s, d);
          e.insertBefore(s.h, f.h.nextSibling);
          s = t[++a];
          d = n[--c];
        } else if (isSameVnode(f, v)) {
          if (s.m === "slot" || d.m === "slot") {
            putBackInOriginalLocation(f.h.parentNode, false);
          }
          patch(f, v);
          e.insertBefore(f.h, s.h);
          f = t[--u];
          v = n[++i];
        } else {
          o = -1;
          {
            for (l = a; l <= u; ++l) {
              if (t[l] && t[l].u !== null && t[l].u === v.u) {
                o = l;
                break;
              }
            }
          }
          if (o >= 0) {
            m = t[o];
            if (m.m !== v.m) {
              p = createElm(t && t[i], r, o, e);
            } else {
              patch(m, v);
              t[o] = void 0;
              p = m.h;
            }
            v = n[++i];
          } else {
            p = createElm(t && t[i], r, i, e);
            v = n[++i];
          }
          if (p) {
            {
              parentReferenceNode(s.h).insertBefore(p, referenceNode(s.h));
            }
          }
        }
      }
      if (a > u) {
        addVnodes(e, n[c + 1] == null ? null : n[c + 1].h, r, n, i, c);
      } else if (i > c) {
        removeVnodes(t, a, u);
      }
    };
    isSameVnode = function (e, t) {
      if (e.m === t.m) {
        if (e.m === "slot") {
          return e.v === t.v;
        }
        {
          return e.u === t.u;
        }
      }
      return false;
    };
    referenceNode = function (e) {
      return e && e["s-ol"] || e;
    };
    parentReferenceNode = function (e) {
      return (e["s-ol"] ? e["s-ol"] : e).parentNode;
    };
    patch = function (e, t) {
      var r = t.h = e.h;
      var n = e.l;
      var a = t.l;
      var i = t.m;
      var o = t.i;
      var l;
      if (o === null) {
        {
          isSvgMode = i === "svg" ? true : i === "foreignObject" ? false : isSvgMode;
        }
        {
          if (i === "slot") ;else {
            updateElement(e, t, isSvgMode);
          }
        }
        if (n !== null && a !== null) {
          updateChildren(r, n, t, a);
        } else if (a !== null) {
          if (e.i !== null) {
            r.textContent = "";
          }
          addVnodes(r, null, t, a, 0, a.length - 1);
        } else if (n !== null) {
          removeVnodes(n, 0, n.length - 1);
        }
        if (isSvgMode && i === "svg") {
          isSvgMode = false;
        }
      } else if (l = r["s-cr"]) {
        l.parentNode.textContent = o;
      } else if (e.i !== o) {
        r.data = o;
      }
    };
    updateFallbackSlotVisibility = function (e) {
      var t = e.childNodes;
      for (var r = 0, n = t; r < n.length; r++) {
        var a = n[r];
        if (a.nodeType === 1) {
          if (a["s-sr"]) {
            var i = a["s-sn"];
            a.hidden = false;
            for (var o = 0, l = t; o < l.length; o++) {
              var u = l[o];
              if (u !== a) {
                if (u["s-hn"] !== a["s-hn"] || i !== "") {
                  if (u.nodeType === 1 && (i === u.getAttribute("slot") || i === u["s-sn"])) {
                    a.hidden = true;
                    break;
                  }
                } else {
                  if (u.nodeType === 1 || u.nodeType === 3 && u.textContent.trim() !== "") {
                    a.hidden = true;
                    break;
                  }
                }
              }
            }
          }
          updateFallbackSlotVisibility(a);
        }
      }
    };
    relocateNodes = [];
    markSlotContentForRelocation = function (e) {
      var t;
      var r;
      var n;
      for (var a = 0, i = e.childNodes; a < i.length; a++) {
        var o = i[a];
        if (o["s-sr"] && (t = o["s-cr"]) && t.parentNode) {
          r = t.parentNode.childNodes;
          var l = o["s-sn"];
          var u = function () {
            t = r[n];
            if (!t["s-cn"] && !t["s-nr"] && t["s-hn"] !== o["s-hn"] && !BUILD.experimentalSlotFixes) {
              if (isNodeLocatedInSlot(t, l)) {
                var e2 = relocateNodes.find(function (e3) {
                  return e3.I === t;
                });
                checkSlotFallbackVisibility = true;
                t["s-sn"] = t["s-sn"] || l;
                if (e2) {
                  e2.I["s-sh"] = o["s-hn"];
                  e2.H = o;
                } else {
                  t["s-sh"] = o["s-hn"];
                  relocateNodes.push({
                    H: o,
                    I: t
                  });
                }
                if (t["s-sr"]) {
                  relocateNodes.map(function (r2) {
                    if (isNodeLocatedInSlot(r2.I, t["s-sn"])) {
                      e2 = relocateNodes.find(function (e3) {
                        return e3.I === t;
                      });
                      if (e2 && !r2.H) {
                        r2.H = e2.H;
                      }
                    }
                  });
                }
              } else if (!relocateNodes.some(function (e3) {
                return e3.I === t;
              })) {
                relocateNodes.push({
                  I: t
                });
              }
            }
          };
          for (n = r.length - 1; n >= 0; n--) {
            u();
          }
        }
        if (o.nodeType === 1) {
          markSlotContentForRelocation(o);
        }
      }
    };
    isNodeLocatedInSlot = function (e, t) {
      if (e.nodeType === 1) {
        if (e.getAttribute("slot") === null && t === "") {
          return true;
        }
        if (e.getAttribute("slot") === t) {
          return true;
        }
        return false;
      }
      if (e["s-sn"] === t) {
        return true;
      }
      return t === "";
    };
    nullifyVNodeRefs = function (e) {
      {
        e.o && e.o.ref && e.o.ref(null);
        e.l && e.l.map(nullifyVNodeRefs);
      }
    };
    renderVdom = function (e, t, r) {
      if (r === void 0) {
        r = false;
      }
      var n, a, i, o;
      var l = e.$hostElement$;
      var u = e.k;
      var s = e.S || newVNode(null, null);
      var f = isHost(t) ? t : h(null, null, t);
      hostTagName = l.tagName;
      if (u.A) {
        f.o = f.o || {};
        u.A.map(function (e2) {
          var t2 = e2[0],
            r2 = e2[1];
          return f.o[r2] = l[t2];
        });
      }
      if (r && f.o) {
        for (var c = 0, v = Object.keys(f.o); c < v.length; c++) {
          var d = v[c];
          if (l.hasAttribute(d) && !["key", "ref", "style", "class"].includes(d)) {
            f.o[d] = l[d];
          }
        }
      }
      f.m = null;
      f.p |= 4;
      e.S = f;
      f.h = s.h = l.shadowRoot || l;
      {
        scopeId = l["s-sc"];
      }
      {
        contentRef = l["s-cr"];
        useNativeShadowDom = (u.p & 1) !== 0;
        checkSlotFallbackVisibility = false;
      }
      patch(s, f);
      {
        plt.p |= 1;
        if (checkSlotRelocate) {
          markSlotContentForRelocation(f.h);
          for (var p = 0, m = relocateNodes; p < m.length; p++) {
            var y = m[p];
            var S = y.I;
            if (!S["s-ol"]) {
              var g = doc2.createTextNode("");
              g["s-nr"] = S;
              S.parentNode.insertBefore(S["s-ol"] = g, S);
            }
          }
          for (var T = 0, _ = relocateNodes; T < _.length; T++) {
            var y = _[T];
            var S = y.I;
            var C = y.H;
            if (C) {
              var b = C.parentNode;
              var E = C.nextSibling;
              {
                var g = (n = S["s-ol"]) === null || n === void 0 ? void 0 : n.previousSibling;
                while (g) {
                  var R = (a = g["s-nr"]) !== null && a !== void 0 ? a : null;
                  if (R && R["s-sn"] === S["s-sn"] && b === R.parentNode) {
                    R = R.nextSibling;
                    if (!R || !R["s-nr"]) {
                      E = R;
                      break;
                    }
                  }
                  g = g.previousSibling;
                }
              }
              if (!E && b !== S.parentNode || S.nextSibling !== E) {
                if (S !== E) {
                  if (!S["s-hn"] && S["s-ol"]) {
                    S["s-hn"] = S["s-ol"].parentNode.nodeName;
                  }
                  b.insertBefore(S, E);
                  if (S.nodeType === 1) {
                    S.hidden = (i = S["s-ih"]) !== null && i !== void 0 ? i : false;
                  }
                }
              }
            } else {
              if (S.nodeType === 1) {
                if (r) {
                  S["s-ih"] = (o = S.hidden) !== null && o !== void 0 ? o : false;
                }
                S.hidden = true;
              }
            }
          }
        }
        if (checkSlotFallbackVisibility) {
          updateFallbackSlotVisibility(f.h);
        }
        plt.p &= ~1;
        relocateNodes.length = 0;
      }
    };
    attachToAncestor = function (e, t) {
      if (t && !e.M && t["s-p"]) {
        t["s-p"].push(new Promise(function (t2) {
          return e.M = t2;
        }));
      }
    };
    scheduleUpdate = function (e, t) {
      {
        e.p |= 16;
      }
      if (e.p & 4) {
        e.p |= 512;
        return;
      }
      attachToAncestor(e, e.V);
      var r = function () {
        return dispatchHooks(e, t);
      };
      return writeTask(r);
    };
    dispatchHooks = function (e, t) {
      var r = createTime("scheduleUpdate", e.k.L);
      var n = e.O;
      var a;
      if (t) {
        {
          e.p |= 256;
          if (e.F) {
            e.F.map(function (e2) {
              var t2 = e2[0],
                r2 = e2[1];
              return safeCall(n, t2, r2);
            });
            e.F = void 0;
          }
        }
        {
          a = safeCall(n, "componentWillLoad");
        }
      }
      {
        a = enqueue(a, function () {
          return safeCall(n, "componentWillRender");
        });
      }
      r();
      return enqueue(a, function () {
        return updateComponent(e, n, t);
      });
    };
    enqueue = function (e, t) {
      return isPromisey(e) ? e.then(t) : t();
    };
    isPromisey = function (e) {
      return e instanceof Promise || e && e.then && typeof e.then === "function";
    };
    updateComponent = function (e, t, r) {
      return __awaiter(void 0, void 0, void 0, function () {
        var n, a, i, o, l, u, s;
        return __generator(this, function (f) {
          a = e.$hostElement$;
          i = createTime("update", e.k.L);
          o = a["s-rc"];
          if (r) {
            attachStyles(e);
          }
          l = createTime("render", e.k.L);
          {
            callRender(e, t, a, r);
          }
          if (o) {
            o.map(function (e2) {
              return e2();
            });
            a["s-rc"] = void 0;
          }
          l();
          i();
          {
            u = (n = a["s-p"]) !== null && n !== void 0 ? n : [];
            s = function () {
              return postUpdateComponent(e);
            };
            if (u.length === 0) {
              s();
            } else {
              Promise.all(u).then(s);
              e.p |= 4;
              u.length = 0;
            }
          }
          return [2];
        });
      });
    };
    callRender = function (e, t, r, n) {
      try {
        t = t.render && t.render();
        {
          e.p &= ~16;
        }
        {
          e.p |= 2;
        }
        {
          {
            {
              renderVdom(e, t, n);
            }
          }
        }
      } catch (t2) {
        consoleError(t2, e.$hostElement$);
      }
      return null;
    };
    postUpdateComponent = function (e) {
      var t = e.k.L;
      var r = e.$hostElement$;
      var n = createTime("postUpdate", t);
      var a = e.O;
      var i = e.V;
      {
        safeCall(a, "componentDidRender");
      }
      if (!(e.p & 64)) {
        e.p |= 64;
        {
          addHydratedFlag(r);
        }
        {
          safeCall(a, "componentDidLoad");
        }
        n();
        {
          e.P(r);
          if (!i) {
            appDidLoad();
          }
        }
      } else {
        {
          safeCall(a, "componentDidUpdate");
        }
        n();
      }
      {
        e.U(r);
      }
      {
        if (e.M) {
          e.M();
          e.M = void 0;
        }
        if (e.p & 512) {
          nextTick(function () {
            return scheduleUpdate(e, false);
          });
        }
        e.p &= ~(4 | 512);
      }
    };
    appDidLoad = function (e) {
      {
        addHydratedFlag(doc2.documentElement);
      }
      nextTick(function () {
        return emitEvent(win2, "appload", {
          detail: {
            namespace: NAMESPACE
          }
        });
      });
    };
    safeCall = function (e, t, r) {
      if (e && e[t]) {
        try {
          return e[t](r);
        } catch (e2) {
          consoleError(e2);
        }
      }
      return void 0;
    };
    addHydratedFlag = function (e) {
      return e.classList.add("hydrated");
    };
    getValue = function (e, t) {
      return getHostRef(e).q.get(t);
    };
    setValue = function (e, t, r, n) {
      var a = getHostRef(e);
      var i = a.$hostElement$;
      var o = a.q.get(t);
      var l = a.p;
      var u = a.O;
      r = parsePropertyValue(r, n.B[t][0]);
      var s = Number.isNaN(o) && Number.isNaN(r);
      var f = r !== o && !s;
      if ((!(l & 8) || o === void 0) && f) {
        a.q.set(t, r);
        if (u) {
          if (n.Y && l & 128) {
            var c = n.Y[t];
            if (c) {
              c.map(function (e2) {
                try {
                  u[e2](r, o, t);
                } catch (e3) {
                  consoleError(e3, i);
                }
              });
            }
          }
          if ((l & (2 | 16)) === 2) {
            scheduleUpdate(a, false);
          }
        }
      }
    };
    proxyComponent = function (e, t, r) {
      var n;
      var a = e.prototype;
      if (t.B) {
        if (e.watchers) {
          t.Y = e.watchers;
        }
        var i = Object.entries(t.B);
        i.map(function (e2) {
          var n2 = e2[0],
            i3 = e2[1][0];
          if (i3 & 31 || r & 2 && i3 & 32) {
            Object.defineProperty(a, n2, {
              get: function () {
                return getValue(this, n2);
              },
              set: function (e3) {
                setValue(this, n2, e3, t);
              },
              configurable: true,
              enumerable: true
            });
          } else if (r & 1 && i3 & 64) {
            Object.defineProperty(a, n2, {
              value: function () {
                var e3 = [];
                for (var t2 = 0; t2 < arguments.length; t2++) {
                  e3[t2] = arguments[t2];
                }
                var r2;
                var a2 = getHostRef(this);
                return (r2 = a2 === null || a2 === void 0 ? void 0 : a2.j) === null || r2 === void 0 ? void 0 : r2.then(function () {
                  var t3;
                  return (t3 = a2.O) === null || t3 === void 0 ? void 0 : t3[n2].apply(t3, e3);
                });
              }
            });
          }
        });
        if (r & 1) {
          var o = /* @__PURE__ */new Map();
          a.attributeChangedCallback = function (e2, r2, n2) {
            var i3 = this;
            plt.jmp(function () {
              var l;
              var u = o.get(e2);
              if (i3.hasOwnProperty(u)) {
                n2 = i3[u];
                delete i3[u];
              } else if (a.hasOwnProperty(u) && typeof i3[u] === "number" && i3[u] == n2) {
                return;
              } else if (u == null) {
                var s = getHostRef(i3);
                var f = s === null || s === void 0 ? void 0 : s.p;
                if (f && !(f & 8) && f & 128 && n2 !== r2) {
                  var c = s.O;
                  var v = (l = t.Y) === null || l === void 0 ? void 0 : l[e2];
                  v === null || v === void 0 ? void 0 : v.forEach(function (t2) {
                    if (c[t2] != null) {
                      c[t2].call(c, n2, r2, e2);
                    }
                  });
                }
                return;
              }
              i3[u] = n2 === null && typeof i3[u] === "boolean" ? false : n2;
            });
          };
          e.observedAttributes = Array.from(new Set(__spreadArray3(__spreadArray3([], Object.keys((n = t.Y) !== null && n !== void 0 ? n : {}), true), i.filter(function (e2) {
            var t2 = e2[0],
              r2 = e2[1];
            return r2[0] & 15;
          }).map(function (e2) {
            var r2 = e2[0],
              n2 = e2[1];
            var a2;
            var i3 = n2[1] || r2;
            o.set(i3, r2);
            if (n2[0] & 512) {
              (a2 = t.A) === null || a2 === void 0 ? void 0 : a2.push([r2, i3]);
            }
            return i3;
          }), true)));
        }
      }
      return e;
    };
    initializeComponent = function (e, t, r, n) {
      return __awaiter(void 0, void 0, void 0, function () {
        var n2, a, i, o, l, u, s, f;
        return __generator(this, function (c) {
          switch (c.label) {
            case 0:
              if (!((t.p & 32) === 0)) return [3, 3];
              t.p |= 32;
              n2 = loadModule(r);
              if (!n2.then) return [3, 2];
              a = uniqueTime();
              return [4, n2];
            case 1:
              n2 = c.sent();
              a();
              c.label = 2;
            case 2:
              if (!n2.isProxied) {
                {
                  r.Y = n2.watchers;
                }
                proxyComponent(n2, r, 2);
                n2.isProxied = true;
              }
              i = createTime("createInstance", r.L);
              {
                t.p |= 8;
              }
              try {
                new n2(t);
              } catch (e2) {
                consoleError(e2);
              }
              {
                t.p &= ~8;
              }
              {
                t.p |= 128;
              }
              i();
              fireConnectedCallback(t.O);
              if (n2.style) {
                o = n2.style;
                if (typeof o !== "string") {
                  o = o[t.D = computeMode(e)];
                }
                l = getScopeId(r, t.D);
                if (!styles.has(l)) {
                  u = createTime("registerStyles", r.L);
                  registerStyle(l, o, !!(r.p & 1));
                  u();
                }
              }
              c.label = 3;
            case 3:
              s = t.V;
              f = function () {
                return scheduleUpdate(t, true);
              };
              if (s && s["s-rc"]) {
                s["s-rc"].push(f);
              } else {
                f();
              }
              return [2];
          }
        });
      });
    };
    fireConnectedCallback = function (e) {
      {
        safeCall(e, "connectedCallback");
      }
    };
    connectedCallback = function (e) {
      if ((plt.p & 1) === 0) {
        var t = getHostRef(e);
        var r = t.k;
        var n = createTime("connectedCallback", r.L);
        if (!(t.p & 1)) {
          t.p |= 1;
          var a = void 0;
          {
            a = e.getAttribute(HYDRATE_ID);
            if (a) {
              if (r.p & 1) {
                var i = addStyle(e.shadowRoot, r, e.getAttribute("s-mode"));
                e.classList.remove(i + "-h", i + "-s");
              }
              initializeClientHydrate(e, r.L, a, t);
            }
          }
          if (!a) {
            if (r.p & (4 | 8)) {
              setContentReference(e);
            }
          }
          {
            var o = e;
            while (o = o.parentNode || o.host) {
              if (o.nodeType === 1 && o.hasAttribute("s-id") && o["s-p"] || o["s-p"]) {
                attachToAncestor(t, t.V = o);
                break;
              }
            }
          }
          if (r.B) {
            Object.entries(r.B).map(function (t2) {
              var r2 = t2[0],
                n2 = t2[1][0];
              if (n2 & 31 && e.hasOwnProperty(r2)) {
                var a2 = e[r2];
                delete e[r2];
                e[r2] = a2;
              }
            });
          }
          {
            initializeComponent(e, t, r);
          }
        } else {
          addHostEventListeners(e, t, r.W);
          if (t === null || t === void 0 ? void 0 : t.O) {
            fireConnectedCallback(t.O);
          } else if (t === null || t === void 0 ? void 0 : t.X) {
            t.X.then(function () {
              return fireConnectedCallback(t.O);
            });
          }
        }
        n();
      }
    };
    setContentReference = function (e) {
      var t = e["s-cr"] = doc2.createComment("");
      t["s-cn"] = true;
      e.insertBefore(t, e.firstChild);
    };
    disconnectInstance = function (e) {
      {
        safeCall(e, "disconnectedCallback");
      }
    };
    disconnectedCallback = function (e) {
      return __awaiter(void 0, void 0, void 0, function () {
        var t;
        return __generator(this, function (r) {
          if ((plt.p & 1) === 0) {
            t = getHostRef(e);
            {
              if (t.G) {
                t.G.map(function (e2) {
                  return e2();
                });
                t.G = void 0;
              }
            }
            if (t === null || t === void 0 ? void 0 : t.O) {
              disconnectInstance(t.O);
            } else if (t === null || t === void 0 ? void 0 : t.X) {
              t.X.then(function () {
                return disconnectInstance(t.O);
              });
            }
          }
          return [2];
        });
      });
    };
    bootstrapLazy = function (e, t) {
      if (t === void 0) {
        t = {};
      }
      var r;
      var n = createTime();
      var a = [];
      var i = t.exclude || [];
      var o = win2.customElements;
      var l = doc2.head;
      var u = l.querySelector("meta[charset]");
      var s = doc2.createElement("style");
      var f = [];
      var c = doc2.querySelectorAll("[".concat(HYDRATED_STYLE_ID, "]"));
      var v;
      var d = true;
      var p = 0;
      Object.assign(plt, t);
      plt.t = new URL(t.resourcesUrl || "./", doc2.baseURI).href;
      {
        plt.p |= 2;
      }
      {
        for (; p < c.length; p++) {
          registerStyle(c[p].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(c[p].innerHTML), true);
        }
      }
      var m = false;
      e.map(function (e2) {
        e2[1].map(function (t2) {
          var r2;
          var n2 = {
            p: t2[0],
            L: t2[1],
            B: t2[2],
            W: t2[3]
          };
          if (n2.p & 4) {
            m = true;
          }
          {
            n2.B = t2[2];
          }
          {
            n2.W = t2[3];
          }
          {
            n2.A = [];
          }
          {
            n2.Y = (r2 = t2[4]) !== null && r2 !== void 0 ? r2 : {};
          }
          var l2 = n2.L;
          var u2 = function (e3) {
            __extends(t3, e3);
            function t3(t4) {
              var r3 = e3.call(this, t4) || this;
              t4 = r3;
              registerHost(t4, n2);
              if (n2.p & 1) {
                {
                  {
                    t4.attachShadow({
                      mode: "open",
                      delegatesFocus: !!(n2.p & 16)
                    });
                  }
                }
              }
              return r3;
            }
            t3.prototype.connectedCallback = function () {
              var e4 = this;
              if (v) {
                clearTimeout(v);
                v = null;
              }
              if (d) {
                f.push(this);
              } else {
                plt.jmp(function () {
                  return connectedCallback(e4);
                });
              }
            };
            t3.prototype.disconnectedCallback = function () {
              var e4 = this;
              plt.jmp(function () {
                return disconnectedCallback(e4);
              });
            };
            t3.prototype.componentOnReady = function () {
              return getHostRef(this).X;
            };
            return t3;
          }(HTMLElement);
          n2.K = e2[0];
          if (!i.includes(l2) && !o.get(l2)) {
            a.push(l2);
            o.define(l2, proxyComponent(u2, n2, 1));
          }
        });
      });
      if (m) {
        s.innerHTML += SLOT_FB_CSS;
      }
      {
        s.innerHTML += a + HYDRATED_CSS;
      }
      if (s.innerHTML.length) {
        s.setAttribute("data-styles", "");
        var h2 = (r = plt.N) !== null && r !== void 0 ? r : queryNonceMetaTagContent(doc2);
        if (h2 != null) {
          s.setAttribute("nonce", h2);
        }
        l.insertBefore(s, u ? u.nextSibling : l.firstChild);
      }
      d = false;
      if (f.length) {
        f.map(function (e2) {
          return e2.connectedCallback();
        });
      } else {
        {
          plt.jmp(function () {
            return v = setTimeout(appDidLoad, 30);
          });
        }
      }
      n();
    };
    addHostEventListeners = function (e, t, r, n) {
      if (r) {
        r.map(function (r2) {
          var n2 = r2[0],
            a = r2[1],
            i = r2[2];
          var o = getHostListenerTarget(e, n2);
          var l = hostListenerProxy(t, i);
          var u = hostListenerOpts(n2);
          plt.ael(o, a, l, u);
          (t.G = t.G || []).push(function () {
            return plt.rel(o, a, l, u);
          });
        });
      }
    };
    hostListenerProxy = function (e, t) {
      return function (r) {
        try {
          {
            if (e.p & 256) {
              e.O[t](r);
            } else {
              (e.F = e.F || []).push([t, r]);
            }
          }
        } catch (e2) {
          consoleError(e2);
        }
      };
    };
    getHostListenerTarget = function (e, t) {
      if (t & 4) return doc2;
      if (t & 8) return win2;
      if (t & 16) return doc2.body;
      return e;
    };
    hostListenerOpts = function (e) {
      return (e & 2) !== 0;
    };
    hostRefs = /* @__PURE__ */new WeakMap();
    getHostRef = function (e) {
      return hostRefs.get(e);
    };
    registerHost = function (e, t) {
      var r = {
        p: 0,
        $hostElement$: e,
        k: t,
        q: /* @__PURE__ */new Map()
      };
      {
        r.j = new Promise(function (e2) {
          return r.U = e2;
        });
      }
      {
        r.X = new Promise(function (e2) {
          return r.P = e2;
        });
        e["s-p"] = [];
        e["s-rc"] = [];
      }
      addHostEventListeners(e, r, t.W);
      return hostRefs.set(e, r);
    };
    isMemberInElement = function (e, t) {
      return t in e;
    };
    consoleError = function (e, t) {
      return (0, console.error)(e, t);
    };
    cmpModules = /* @__PURE__ */new Map();
    loadModule = function (e, t, r) {
      var n = e.L.replace(/-/g, "_");
      var a = e.K;
      var i = cmpModules.get(a);
      if (i) {
        return i[n];
      }
      return import("./".concat(a, ".entry.js").concat("")).then(function (e2) {
        {
          cmpModules.set(a, e2);
        }
        return e2[n];
      }, consoleError);
    };
    styles = /* @__PURE__ */new Map();
    modeResolutionChain = [];
    win2 = typeof window !== "undefined" ? window : {};
    doc2 = win2.document || {
      head: {}
    };
    plt = {
      p: 0,
      t: "",
      jmp: function (e) {
        return e();
      },
      raf: function (e) {
        return requestAnimationFrame(e);
      },
      ael: function (e, t, r, n) {
        return e.addEventListener(t, r, n);
      },
      rel: function (e, t, r, n) {
        return e.removeEventListener(t, r, n);
      },
      ce: function (e, t) {
        return new CustomEvent(e, t);
      }
    };
    setPlatformHelpers = function (e) {
      Object.assign(plt, e);
    };
    supportsShadow = true;
    promiseResolve = function (e) {
      return Promise.resolve(e);
    };
    supportsConstructableStylesheets = function () {
      try {
        new CSSStyleSheet();
        return typeof new CSSStyleSheet().replaceSync === "function";
      } catch (e) {}
      return false;
    }();
    queueDomReads = [];
    queueDomWrites = [];
    queueTask = function (e, t) {
      return function (r) {
        e.push(r);
        if (!queuePending) {
          queuePending = true;
          if (t && plt.p & 4) {
            nextTick(flush);
          } else {
            plt.raf(flush);
          }
        }
      };
    };
    consume = function (e) {
      for (var t = 0; t < e.length; t++) {
        try {
          e[t](performance.now());
        } catch (e2) {
          consoleError(e2);
        }
      }
      e.length = 0;
    };
    flush = function () {
      consume(queueDomReads);
      {
        consume(queueDomWrites);
        if (queuePending = queueDomReads.length > 0) {
          plt.raf(flush);
        }
      }
    };
    nextTick = function (e) {
      return promiseResolve().then(e);
    };
    readTask = queueTask(queueDomReads, false);
    writeTask = queueTask(queueDomWrites, true);
  }
});

// node_modules/@ionic/core/dist/esm-es5/index-4743453d.js
import { __awaiter as __awaiter2, __generator as __generator2 } from "tslib";
var getIonPageElement;
var init_index_4743453d = __esm({
  "node_modules/@ionic/core/dist/esm-es5/index-4743453d.js"() {
    init_index_b7d870cf();
    init_helpers_ae653409();
    getIonPageElement = function (n) {
      if (n.classList.contains("ion-page")) {
        return n;
      }
      var e = n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
      if (e) {
        return e;
      }
      return n;
    };
  }
});

// node_modules/@ionic/core/dist/esm-es5/ios.transition-3376ccb2.js
var DURATION, getClonedElement, shadow, getLargeTitle, getBackButton, createLargeTitleTransition, animateBackButton, animateLargeTitle, iosTransitionAnimation, LARGE_TITLE_SIZE_OFFSET;
var init_ios_transition_3376ccb2 = __esm({
  "node_modules/@ionic/core/dist/esm-es5/ios.transition-3376ccb2.js"() {
    init_animation_dde8cc0d();
    init_index_4743453d();
    init_index_a5d50daf();
    init_helpers_ae653409();
    init_index_b7d870cf();
    DURATION = 540;
    getClonedElement = function (a) {
      return document.querySelector("".concat(a, ".ion-cloned-element"));
    };
    shadow = function (a) {
      return a.shadowRoot || a;
    };
    getLargeTitle = function (a) {
      var t = a.tagName === "ION-TABS" ? a : a.querySelector("ion-tabs");
      var r = "ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";
      if (t != null) {
        var n = t.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
        return n != null ? n.querySelector(r) : null;
      }
      return a.querySelector(r);
    };
    getBackButton = function (a, t) {
      var r = a.tagName === "ION-TABS" ? a : a.querySelector("ion-tabs");
      var n = [];
      if (r != null) {
        var o = r.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
        if (o != null) {
          n = o.querySelectorAll("ion-buttons");
        }
      } else {
        n = a.querySelectorAll("ion-buttons");
      }
      for (var e = 0, i = n; e < i.length; e++) {
        var s = i[e];
        var l = s.closest("ion-header");
        var v = l && !l.classList.contains("header-collapse-condense-inactive");
        var c = s.querySelector("ion-back-button");
        var f = s.classList.contains("buttons-collapse");
        var p = s.slot === "start" || s.slot === "";
        if (c !== null && p && (f && v && t || !f)) {
          return c;
        }
      }
      return null;
    };
    createLargeTitleTransition = function (a, t, r, n, o) {
      var e = getBackButton(n, r);
      var i = getLargeTitle(o);
      var s = getLargeTitle(n);
      var l = getBackButton(o, r);
      var v = e !== null && i !== null && !r;
      var c = s !== null && l !== null && r;
      if (v) {
        var f = i.getBoundingClientRect();
        var p = e.getBoundingClientRect();
        var d = shadow(e).querySelector(".button-text");
        var m = d.getBoundingClientRect();
        var u = shadow(i).querySelector(".toolbar-title");
        var b = u.getBoundingClientRect();
        animateLargeTitle(a, t, r, i, f, b, d, m);
        animateBackButton(a, t, r, e, p, d, m, i, b);
      } else if (c) {
        var g = s.getBoundingClientRect();
        var h2 = l.getBoundingClientRect();
        var A = shadow(l).querySelector(".button-text");
        var y = A.getBoundingClientRect();
        var X = shadow(s).querySelector(".toolbar-title");
        var x = X.getBoundingClientRect();
        animateLargeTitle(a, t, r, s, g, x, A, y);
        animateBackButton(a, t, r, l, h2, A, y, s, x);
      }
      return {
        forward: v,
        backward: c
      };
    };
    animateBackButton = function (a, t, r, n, o, e, i, s, l) {
      var v;
      var c, f;
      var p = t ? "calc(100% - ".concat(o.right + 4, "px)") : "".concat(o.left - 4, "px");
      var d = t ? "right" : "left";
      var m = t ? "left" : "right";
      var u = t ? "right" : "left";
      var b = ((c = e.textContent) === null || c === void 0 ? void 0 : c.trim()) === ((f = s.textContent) === null || f === void 0 ? void 0 : f.trim());
      var g = l.width / i.width;
      var h2 = (l.height - LARGE_TITLE_SIZE_OFFSET) / i.height;
      var A = b ? "scale(".concat(g, ", ").concat(h2, ")") : "scale(".concat(h2, ")");
      var y = "scale(1)";
      var X = shadow(n).querySelector("ion-icon");
      var x = X.getBoundingClientRect();
      var T = t ? "".concat(x.width / 2 - (x.right - o.right), "px") : "".concat(o.left - x.width / 2, "px");
      var w = t ? "-".concat(window.innerWidth - o.right, "px") : "".concat(o.left, "px");
      var k = "".concat(l.top, "px");
      var E = "".concat(o.top, "px");
      var B = [{
        offset: 0,
        transform: "translate3d(".concat(T, ", ").concat(k, ", 0)")
      }, {
        offset: 1,
        transform: "translate3d(".concat(w, ", ").concat(E, ", 0)")
      }];
      var L = [{
        offset: 0,
        transform: "translate3d(".concat(w, ", ").concat(E, ", 0)")
      }, {
        offset: 1,
        transform: "translate3d(".concat(T, ", ").concat(k, ", 0)")
      }];
      var I = r ? L : B;
      var _ = [{
        offset: 0,
        opacity: 0,
        transform: A
      }, {
        offset: 1,
        opacity: 1,
        transform: y
      }];
      var S = [{
        offset: 0,
        opacity: 1,
        transform: y
      }, {
        offset: 1,
        opacity: 0,
        transform: A
      }];
      var O = r ? S : _;
      var F = [{
        offset: 0,
        opacity: 0,
        transform: "scale(0.6)"
      }, {
        offset: 0.6,
        opacity: 0,
        transform: "scale(0.6)"
      }, {
        offset: 1,
        opacity: 1,
        transform: "scale(1)"
      }];
      var j = [{
        offset: 0,
        opacity: 1,
        transform: "scale(1)"
      }, {
        offset: 0.2,
        opacity: 0,
        transform: "scale(0.6)"
      }, {
        offset: 1,
        opacity: 0,
        transform: "scale(0.6)"
      }];
      var R = r ? j : F;
      var N = createAnimation();
      var C = createAnimation();
      var G = createAnimation();
      var Z = getClonedElement("ion-back-button");
      var D = shadow(Z).querySelector(".button-text");
      var P = shadow(Z).querySelector("ion-icon");
      Z.text = n.text;
      Z.mode = n.mode;
      Z.icon = n.icon;
      Z.color = n.color;
      Z.disabled = n.disabled;
      Z.style.setProperty("display", "block");
      Z.style.setProperty("position", "fixed");
      C.addElement(P);
      N.addElement(D);
      G.addElement(Z);
      G.beforeStyles((v = {
        position: "absolute",
        top: "0px"
      }, v[u] = "0px", v)).keyframes(I);
      N.beforeStyles({
        "transform-origin": "".concat(d, " top")
      }).beforeAddWrite(function () {
        n.style.setProperty("display", "none");
        Z.style.setProperty(d, p);
      }).afterAddWrite(function () {
        n.style.setProperty("display", "");
        Z.style.setProperty("display", "none");
        Z.style.removeProperty(d);
      }).keyframes(O);
      C.beforeStyles({
        "transform-origin": "".concat(m, " center")
      }).keyframes(R);
      a.addAnimation([N, C, G]);
    };
    animateLargeTitle = function (a, t, r, n, o, e, i, s) {
      var l;
      var v, c;
      var f = t ? "right" : "left";
      var p = t ? "calc(100% - ".concat(o.right, "px)") : "".concat(o.left, "px");
      var d = "0px";
      var m = "".concat(o.top, "px");
      var u = 8;
      var b = t ? "-".concat(window.innerWidth - s.right - u, "px") : "".concat(s.x - u, "px");
      var g = 2;
      var h2 = "".concat(s.y - g, "px");
      var A = ((v = i.textContent) === null || v === void 0 ? void 0 : v.trim()) === ((c = n.textContent) === null || c === void 0 ? void 0 : c.trim());
      var y = s.width / e.width;
      var X = s.height / (e.height - LARGE_TITLE_SIZE_OFFSET);
      var x = "scale(1)";
      var T = A ? "scale(".concat(y, ", ").concat(X, ")") : "scale(".concat(X, ")");
      var w = [{
        offset: 0,
        opacity: 0,
        transform: "translate3d(".concat(b, ", ").concat(h2, ", 0) ").concat(T)
      }, {
        offset: 0.1,
        opacity: 0
      }, {
        offset: 1,
        opacity: 1,
        transform: "translate3d(".concat(d, ", ").concat(m, ", 0) ").concat(x)
      }];
      var k = [{
        offset: 0,
        opacity: 0.99,
        transform: "translate3d(".concat(d, ", ").concat(m, ", 0) ").concat(x)
      }, {
        offset: 0.6,
        opacity: 0
      }, {
        offset: 1,
        opacity: 0,
        transform: "translate3d(".concat(b, ", ").concat(h2, ", 0) ").concat(T)
      }];
      var E = r ? w : k;
      var B = getClonedElement("ion-title");
      var L = createAnimation();
      B.innerText = n.innerText;
      B.size = n.size;
      B.color = n.color;
      L.addElement(B);
      L.beforeStyles((l = {
        "transform-origin": "".concat(f, " top"),
        height: "".concat(o.height, "px"),
        display: "",
        position: "relative"
      }, l[f] = p, l)).beforeAddWrite(function () {
        n.style.setProperty("opacity", "0");
      }).afterAddWrite(function () {
        n.style.setProperty("opacity", "");
        B.style.setProperty("display", "none");
      }).keyframes(E);
      a.addAnimation(L);
    };
    iosTransitionAnimation = function (a, t) {
      var r;
      try {
        var n = "cubic-bezier(0.32,0.72,0,1)";
        var o = "opacity";
        var e = "transform";
        var i = "0%";
        var s = 0.8;
        var l = a.ownerDocument.dir === "rtl";
        var v = l ? "-99.5%" : "99.5%";
        var c = l ? "33%" : "-33%";
        var f = t.enteringEl;
        var p = t.leavingEl;
        var d = t.direction === "back";
        var m = f.querySelector(":scope > ion-content");
        var u = f.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
        var b = f.querySelectorAll(":scope > ion-header > ion-toolbar");
        var g = createAnimation();
        var h2 = createAnimation();
        g.addElement(f).duration(((r = t.duration) !== null && r !== void 0 ? r : 0) || DURATION).easing(t.easing || n).fill("both").beforeRemoveClass("ion-page-invisible");
        if (p && a !== null && a !== void 0) {
          var A = createAnimation();
          A.addElement(a);
          g.addAnimation(A);
        }
        if (!m && b.length === 0 && u.length === 0) {
          h2.addElement(f.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"));
        } else {
          h2.addElement(m);
          h2.addElement(u);
        }
        g.addAnimation(h2);
        if (d) {
          h2.beforeClearStyles([o]).fromTo("transform", "translateX(".concat(c, ")"), "translateX(".concat(i, ")")).fromTo(o, s, 1);
        } else {
          h2.beforeClearStyles([o]).fromTo("transform", "translateX(".concat(v, ")"), "translateX(".concat(i, ")"));
        }
        if (m) {
          var y = shadow(m).querySelector(".transition-effect");
          if (y) {
            var X = y.querySelector(".transition-cover");
            var x = y.querySelector(".transition-shadow");
            var T = createAnimation();
            var w = createAnimation();
            var k = createAnimation();
            T.addElement(y).beforeStyles({
              opacity: "1",
              display: "block"
            }).afterStyles({
              opacity: "",
              display: ""
            });
            w.addElement(X).beforeClearStyles([o]).fromTo(o, 0, 0.1);
            k.addElement(x).beforeClearStyles([o]).fromTo(o, 0.03, 0.7);
            T.addAnimation([w, k]);
            h2.addAnimation([T]);
          }
        }
        var E = f.querySelector("ion-header.header-collapse-condense");
        var B = createLargeTitleTransition(g, l, d, f, p),
          L = B.forward,
          I = B.backward;
        b.forEach(function (a2) {
          var t2 = createAnimation();
          t2.addElement(a2);
          g.addAnimation(t2);
          var r2 = createAnimation();
          r2.addElement(a2.querySelector("ion-title"));
          var n2 = createAnimation();
          var e2 = Array.from(a2.querySelectorAll("ion-buttons,[menuToggle]"));
          var s2 = a2.closest("ion-header");
          var f2 = s2 === null || s2 === void 0 ? void 0 : s2.classList.contains("header-collapse-condense-inactive");
          var p2;
          if (d) {
            p2 = e2.filter(function (a3) {
              var t3 = a3.classList.contains("buttons-collapse");
              return t3 && !f2 || !t3;
            });
          } else {
            p2 = e2.filter(function (a3) {
              return !a3.classList.contains("buttons-collapse");
            });
          }
          n2.addElement(p2);
          var m2 = createAnimation();
          m2.addElement(a2.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));
          var u2 = createAnimation();
          u2.addElement(shadow(a2).querySelector(".toolbar-background"));
          var b2 = createAnimation();
          var h3 = a2.querySelector("ion-back-button");
          if (h3) {
            b2.addElement(h3);
          }
          t2.addAnimation([r2, n2, m2, u2, b2]);
          n2.fromTo(o, 0.01, 1);
          m2.fromTo(o, 0.01, 1);
          if (d) {
            if (!f2) {
              r2.fromTo("transform", "translateX(".concat(c, ")"), "translateX(".concat(i, ")")).fromTo(o, 0.01, 1);
            }
            m2.fromTo("transform", "translateX(".concat(c, ")"), "translateX(".concat(i, ")"));
            b2.fromTo(o, 0.01, 1);
          } else {
            if (!E) {
              r2.fromTo("transform", "translateX(".concat(v, ")"), "translateX(".concat(i, ")")).fromTo(o, 0.01, 1);
            }
            m2.fromTo("transform", "translateX(".concat(v, ")"), "translateX(".concat(i, ")"));
            u2.beforeClearStyles([o, "transform"]);
            var A2 = s2 === null || s2 === void 0 ? void 0 : s2.translucent;
            if (!A2) {
              u2.fromTo(o, 0.01, "var(--opacity)");
            } else {
              u2.fromTo("transform", l ? "translateX(-100%)" : "translateX(100%)", "translateX(0px)");
            }
            if (!L) {
              b2.fromTo(o, 0.01, 1);
            }
            if (h3 && !L) {
              var y2 = createAnimation();
              y2.addElement(shadow(h3).querySelector(".button-text")).fromTo("transform", l ? "translateX(-100px)" : "translateX(100px)", "translateX(0px)");
              t2.addAnimation(y2);
            }
          }
        });
        if (p) {
          var _ = createAnimation();
          var S = p.querySelector(":scope > ion-content");
          var O = p.querySelectorAll(":scope > ion-header > ion-toolbar");
          var F = p.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
          if (!S && O.length === 0 && F.length === 0) {
            _.addElement(p.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"));
          } else {
            _.addElement(S);
            _.addElement(F);
          }
          g.addAnimation(_);
          if (d) {
            _.beforeClearStyles([o]).fromTo("transform", "translateX(".concat(i, ")"), l ? "translateX(-100%)" : "translateX(100%)");
            var j = getIonPageElement(p);
            g.afterAddWrite(function () {
              if (g.getDirection() === "normal") {
                j.style.setProperty("display", "none");
              }
            });
          } else {
            _.fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat(c, ")")).fromTo(o, 1, s);
          }
          if (S) {
            var R = shadow(S).querySelector(".transition-effect");
            if (R) {
              var N = R.querySelector(".transition-cover");
              var C = R.querySelector(".transition-shadow");
              var G = createAnimation();
              var Z = createAnimation();
              var D = createAnimation();
              G.addElement(R).beforeStyles({
                opacity: "1",
                display: "block"
              }).afterStyles({
                opacity: "",
                display: ""
              });
              Z.addElement(N).beforeClearStyles([o]).fromTo(o, 0.1, 0);
              D.addElement(C).beforeClearStyles([o]).fromTo(o, 0.7, 0.03);
              G.addAnimation([Z, D]);
              _.addAnimation([G]);
            }
          }
          O.forEach(function (a2) {
            var t2 = createAnimation();
            t2.addElement(a2);
            var r2 = createAnimation();
            r2.addElement(a2.querySelector("ion-title"));
            var n2 = createAnimation();
            var s2 = a2.querySelectorAll("ion-buttons,[menuToggle]");
            var v2 = a2.closest("ion-header");
            var f2 = v2 === null || v2 === void 0 ? void 0 : v2.classList.contains("header-collapse-condense-inactive");
            var p2 = Array.from(s2).filter(function (a3) {
              var t3 = a3.classList.contains("buttons-collapse");
              return t3 && !f2 || !t3;
            });
            n2.addElement(p2);
            var m2 = createAnimation();
            var u2 = a2.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");
            if (u2.length > 0) {
              m2.addElement(u2);
            }
            var b2 = createAnimation();
            b2.addElement(shadow(a2).querySelector(".toolbar-background"));
            var h3 = createAnimation();
            var A2 = a2.querySelector("ion-back-button");
            if (A2) {
              h3.addElement(A2);
            }
            t2.addAnimation([r2, n2, m2, h3, b2]);
            g.addAnimation(t2);
            h3.fromTo(o, 0.99, 0);
            n2.fromTo(o, 0.99, 0);
            m2.fromTo(o, 0.99, 0);
            if (d) {
              if (!f2) {
                r2.fromTo("transform", "translateX(".concat(i, ")"), l ? "translateX(-100%)" : "translateX(100%)").fromTo(o, 0.99, 0);
              }
              m2.fromTo("transform", "translateX(".concat(i, ")"), l ? "translateX(-100%)" : "translateX(100%)");
              b2.beforeClearStyles([o, "transform"]);
              var y2 = v2 === null || v2 === void 0 ? void 0 : v2.translucent;
              if (!y2) {
                b2.fromTo(o, "var(--opacity)", 0);
              } else {
                b2.fromTo("transform", "translateX(0px)", l ? "translateX(-100%)" : "translateX(100%)");
              }
              if (A2 && !I) {
                var X2 = createAnimation();
                X2.addElement(shadow(A2).querySelector(".button-text")).fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat((l ? -124 : 124) + "px", ")"));
                t2.addAnimation(X2);
              }
            } else {
              if (!f2) {
                r2.fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat(c, ")")).fromTo(o, 0.99, 0).afterClearStyles([e, o]);
              }
              m2.fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat(c, ")")).afterClearStyles([e, o]);
              h3.afterClearStyles([o]);
              r2.afterClearStyles([o]);
              n2.afterClearStyles([o]);
            }
          });
        }
        return g;
      } catch (a2) {
        throw a2;
      }
    };
    LARGE_TITLE_SIZE_OFFSET = 10;
  }
});

// node_modules/@ionic/core/dist/esm-es5/md.transition-f992779f.js
var mdTransitionAnimation;
var init_md_transition_f992779f = __esm({
  "node_modules/@ionic/core/dist/esm-es5/md.transition-f992779f.js"() {
    init_animation_dde8cc0d();
    init_index_4743453d();
    init_index_a5d50daf();
    init_helpers_ae653409();
    init_index_b7d870cf();
    mdTransitionAnimation = function (a, i) {
      var n, e, t;
      var r = "40px";
      var o = "0px";
      var m = i.direction === "back";
      var c = i.enteringEl;
      var s = i.leavingEl;
      var l = getIonPageElement(c);
      var d = l.querySelector("ion-toolbar");
      var v = createAnimation();
      v.addElement(l).fill("both").beforeRemoveClass("ion-page-invisible");
      if (m) {
        v.duration(((n = i.duration) !== null && n !== void 0 ? n : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
      } else {
        v.duration(((e = i.duration) !== null && e !== void 0 ? e : 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", "translateY(".concat(r, ")"), "translateY(".concat(o, ")")).fromTo("opacity", 0.01, 1);
      }
      if (d) {
        var p = createAnimation();
        p.addElement(d);
        v.addAnimation(p);
      }
      if (s && m) {
        v.duration(((t = i.duration) !== null && t !== void 0 ? t : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
        var f = createAnimation();
        f.addElement(getIonPageElement(s)).onFinish(function (a2) {
          if (a2 === 1 && f.elements.length > 0) {
            f.elements[0].style.setProperty("display", "none");
          }
        }).fromTo("transform", "translateY(".concat(o, ")"), "translateY(".concat(r, ")")).fromTo("opacity", 1, 0);
        v.addAnimation(f);
      }
      return v;
    };
  }
});

// node_modules/@ionic/core/dist/esm/polyfills/dom.js
var require_dom = __commonJS({
  "node_modules/@ionic/core/dist/esm/polyfills/dom.js"() {
    (function () {
      "use strict";

      var aa = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
      function g(a) {
        var b = aa.has(a);
        a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
        return !b && a;
      }
      function l(a) {
        var b = a.isConnected;
        if (void 0 !== b) return b;
        for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
        return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
      }
      function n(a, b) {
        for (; b && b !== a && !b.nextSibling;) b = b.parentNode;
        return b && b !== a ? b.nextSibling : null;
      }
      function p(a, b, d) {
        d = void 0 === d ? /* @__PURE__ */new Set() : d;
        for (var c = a; c;) {
          if (c.nodeType === Node.ELEMENT_NODE) {
            var e = c;
            b(e);
            var f = e.localName;
            if ("link" === f && "import" === e.getAttribute("rel")) {
              c = e.import;
              if (c instanceof Node && !d.has(c)) for (d.add(c), c = c.firstChild; c; c = c.nextSibling) p(c, b, d);
              c = n(a, e);
              continue;
            } else if ("template" === f) {
              c = n(a, e);
              continue;
            }
            if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) p(e, b, d);
          }
          c = c.firstChild ? c.firstChild : n(a, c);
        }
      }
      function r(a, b, d) {
        a[b] = d;
      }
      ;
      function u() {
        this.a = /* @__PURE__ */new Map();
        this.g = /* @__PURE__ */new Map();
        this.c = [];
        this.f = [];
        this.b = false;
      }
      function ba(a, b, d) {
        a.a.set(b, d);
        a.g.set(d.constructorFunction, d);
      }
      function ca(a, b) {
        a.b = true;
        a.c.push(b);
      }
      function da(a, b) {
        a.b = true;
        a.f.push(b);
      }
      function v(a, b) {
        a.b && p(b, function (b2) {
          return w(a, b2);
        });
      }
      function w(a, b) {
        if (a.b && !b.__CE_patched) {
          b.__CE_patched = true;
          for (var d = 0; d < a.c.length; d++) a.c[d](b);
          for (d = 0; d < a.f.length; d++) a.f[d](b);
        }
      }
      function x(a, b) {
        var d = [];
        p(b, function (b2) {
          return d.push(b2);
        });
        for (b = 0; b < d.length; b++) {
          var c = d[b];
          1 === c.__CE_state ? a.connectedCallback(c) : y(a, c);
        }
      }
      function z(a, b) {
        var d = [];
        p(b, function (b2) {
          return d.push(b2);
        });
        for (b = 0; b < d.length; b++) {
          var c = d[b];
          1 === c.__CE_state && a.disconnectedCallback(c);
        }
      }
      function A(a, b, d) {
        d = void 0 === d ? {} : d;
        var c = d.u || /* @__PURE__ */new Set(),
          e = d.i || function (b2) {
            return y(a, b2);
          },
          f = [];
        p(b, function (b2) {
          if ("link" === b2.localName && "import" === b2.getAttribute("rel")) {
            var d2 = b2.import;
            d2 instanceof Node && (d2.__CE_isImportDocument = true, d2.__CE_hasRegistry = true);
            d2 && "complete" === d2.readyState ? d2.__CE_documentLoadHandled = true : b2.addEventListener("load", function () {
              var d3 = b2.import;
              if (!d3.__CE_documentLoadHandled) {
                d3.__CE_documentLoadHandled = true;
                var f2 = new Set(c);
                f2.delete(d3);
                A(a, d3, {
                  u: f2,
                  i: e
                });
              }
            });
          } else f.push(b2);
        }, c);
        if (a.b) for (b = 0; b < f.length; b++) w(a, f[b]);
        for (b = 0; b < f.length; b++) e(f[b]);
      }
      function y(a, b) {
        if (void 0 === b.__CE_state) {
          var d = b.ownerDocument;
          if (d.defaultView || d.__CE_isImportDocument && d.__CE_hasRegistry) {
            if (d = a.a.get(b.localName)) {
              d.constructionStack.push(b);
              var c = d.constructorFunction;
              try {
                try {
                  if (new c() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
                } finally {
                  d.constructionStack.pop();
                }
              } catch (t) {
                throw b.__CE_state = 2, t;
              }
              b.__CE_state = 1;
              b.__CE_definition = d;
              if (d.attributeChangedCallback) for (d = d.observedAttributes, c = 0; c < d.length; c++) {
                var e = d[c],
                  f = b.getAttribute(e);
                null !== f && a.attributeChangedCallback(b, e, null, f, null);
              }
              l(b) && a.connectedCallback(b);
            }
          }
        }
      }
      u.prototype.connectedCallback = function (a) {
        var b = a.__CE_definition;
        b.connectedCallback && b.connectedCallback.call(a);
      };
      u.prototype.disconnectedCallback = function (a) {
        var b = a.__CE_definition;
        b.disconnectedCallback && b.disconnectedCallback.call(a);
      };
      u.prototype.attributeChangedCallback = function (a, b, d, c, e) {
        var f = a.__CE_definition;
        f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, d, c, e);
      };
      function B(a) {
        var b = document;
        this.c = a;
        this.a = b;
        this.b = void 0;
        A(this.c, this.a);
        "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
          childList: true,
          subtree: true
        }));
      }
      function C(a) {
        a.b && a.b.disconnect();
      }
      B.prototype.f = function (a) {
        var b = this.a.readyState;
        "interactive" !== b && "complete" !== b || C(this);
        for (b = 0; b < a.length; b++) for (var d = a[b].addedNodes, c = 0; c < d.length; c++) A(this.c, d[c]);
      };
      function ea() {
        var a = this;
        this.b = this.a = void 0;
        this.c = new Promise(function (b) {
          a.b = b;
          a.a && b(a.a);
        });
      }
      function D(a) {
        if (a.a) throw Error("Already resolved.");
        a.a = void 0;
        a.b && a.b(void 0);
      }
      ;
      function E(a) {
        this.c = false;
        this.a = a;
        this.j = /* @__PURE__ */new Map();
        this.f = function (b) {
          return b();
        };
        this.b = false;
        this.g = [];
        this.o = new B(a);
      }
      E.prototype.l = function (a, b) {
        var d = this;
        if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
        if (!g(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");
        if (this.a.a.get(a)) throw Error("A custom element with name '" + a + "' has already been defined.");
        if (this.c) throw Error("A custom element is already being defined.");
        this.c = true;
        try {
          var c = function (b2) {
              var a2 = e[b2];
              if (void 0 !== a2 && !(a2 instanceof Function)) throw Error("The '" + b2 + "' callback must be a function.");
              return a2;
            },
            e = b.prototype;
          if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
          var f = c("connectedCallback");
          var t = c("disconnectedCallback");
          var k = c("adoptedCallback");
          var h2 = c("attributeChangedCallback");
          var m = b.observedAttributes || [];
        } catch (q) {
          return;
        } finally {
          this.c = false;
        }
        b = {
          localName: a,
          constructorFunction: b,
          connectedCallback: f,
          disconnectedCallback: t,
          adoptedCallback: k,
          attributeChangedCallback: h2,
          observedAttributes: m,
          constructionStack: []
        };
        ba(this.a, a, b);
        this.g.push(b);
        this.b || (this.b = true, this.f(function () {
          return fa(d);
        }));
      };
      E.prototype.i = function (a) {
        A(this.a, a);
      };
      function fa(a) {
        if (false !== a.b) {
          a.b = false;
          for (var b = a.g, d = [], c = /* @__PURE__ */new Map(), e = 0; e < b.length; e++) c.set(b[e].localName, []);
          A(a.a, document, {
            i: function (b2) {
              if (void 0 === b2.__CE_state) {
                var e2 = b2.localName,
                  f2 = c.get(e2);
                f2 ? f2.push(b2) : a.a.a.get(e2) && d.push(b2);
              }
            }
          });
          for (e = 0; e < d.length; e++) y(a.a, d[e]);
          for (; 0 < b.length;) {
            var f = b.shift();
            e = f.localName;
            f = c.get(f.localName);
            for (var t = 0; t < f.length; t++) y(a.a, f[t]);
            (e = a.j.get(e)) && D(e);
          }
        }
      }
      E.prototype.get = function (a) {
        if (a = this.a.a.get(a)) return a.constructorFunction;
      };
      E.prototype.m = function (a) {
        if (!g(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
        var b = this.j.get(a);
        if (b) return b.c;
        b = new ea();
        this.j.set(a, b);
        this.a.a.get(a) && !this.g.some(function (b2) {
          return b2.localName === a;
        }) && D(b);
        return b.c;
      };
      E.prototype.s = function (a) {
        C(this.o);
        var b = this.f;
        this.f = function (d) {
          return a(function () {
            return b(d);
          });
        };
      };
      window.CustomElementRegistry = E;
      E.prototype.define = E.prototype.l;
      E.prototype.upgrade = E.prototype.i;
      E.prototype.get = E.prototype.get;
      E.prototype.whenDefined = E.prototype.m;
      E.prototype.polyfillWrapFlushCallback = E.prototype.s;
      var F = window.Document.prototype.createElement,
        G = window.Document.prototype.createElementNS,
        ha = window.Document.prototype.importNode,
        ia = window.Document.prototype.prepend,
        ja = window.Document.prototype.append,
        ka = window.DocumentFragment.prototype.prepend,
        la = window.DocumentFragment.prototype.append,
        H = window.Node.prototype.cloneNode,
        I = window.Node.prototype.appendChild,
        J = window.Node.prototype.insertBefore,
        K = window.Node.prototype.removeChild,
        L = window.Node.prototype.replaceChild,
        M = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
        N = window.Element.prototype.attachShadow,
        O = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        P = window.Element.prototype.getAttribute,
        Q = window.Element.prototype.setAttribute,
        R = window.Element.prototype.removeAttribute,
        S = window.Element.prototype.getAttributeNS,
        T = window.Element.prototype.setAttributeNS,
        U = window.Element.prototype.removeAttributeNS,
        ma = window.Element.prototype.insertAdjacentElement,
        na = window.Element.prototype.insertAdjacentHTML,
        oa = window.Element.prototype.prepend,
        pa = window.Element.prototype.append,
        V = window.Element.prototype.before,
        qa = window.Element.prototype.after,
        ra = window.Element.prototype.replaceWith,
        sa = window.Element.prototype.remove,
        ta = window.HTMLElement,
        W = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        ua = window.HTMLElement.prototype.insertAdjacentElement,
        va = window.HTMLElement.prototype.insertAdjacentHTML;
      var wa = new function () {}();
      function xa() {
        var a = X;
        window.HTMLElement = function () {
          function b() {
            var b2 = this.constructor,
              c = a.g.get(b2);
            if (!c) throw Error("The custom element being constructed was not registered with `customElements`.");
            var e = c.constructionStack;
            if (0 === e.length) return e = F.call(document, c.localName), Object.setPrototypeOf(e, b2.prototype), e.__CE_state = 1, e.__CE_definition = c, w(a, e), e;
            c = e.length - 1;
            var f = e[c];
            if (f === wa) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
            e[c] = wa;
            Object.setPrototypeOf(f, b2.prototype);
            w(a, f);
            return f;
          }
          b.prototype = ta.prototype;
          Object.defineProperty(b.prototype, "constructor", {
            writable: true,
            configurable: true,
            enumerable: false,
            value: b
          });
          return b;
        }();
      }
      ;
      function Y(a, b, d) {
        function c(b2) {
          return function (d2) {
            for (var e = [], c2 = 0; c2 < arguments.length; ++c2) e[c2] = arguments[c2];
            c2 = [];
            for (var f = [], m = 0; m < e.length; m++) {
              var q = e[m];
              q instanceof Element && l(q) && f.push(q);
              if (q instanceof DocumentFragment) for (q = q.firstChild; q; q = q.nextSibling) c2.push(q);else c2.push(q);
            }
            b2.apply(this, e);
            for (e = 0; e < f.length; e++) z(a, f[e]);
            if (l(this)) for (e = 0; e < c2.length; e++) f = c2[e], f instanceof Element && x(a, f);
          };
        }
        void 0 !== d.h && (b.prepend = c(d.h));
        void 0 !== d.append && (b.append = c(d.append));
      }
      ;
      function ya() {
        var a = X;
        r(Document.prototype, "createElement", function (b) {
          if (this.__CE_hasRegistry) {
            var d = a.a.get(b);
            if (d) return new d.constructorFunction();
          }
          b = F.call(this, b);
          w(a, b);
          return b;
        });
        r(Document.prototype, "importNode", function (b, d) {
          b = ha.call(this, b, !!d);
          this.__CE_hasRegistry ? A(a, b) : v(a, b);
          return b;
        });
        r(Document.prototype, "createElementNS", function (b, d) {
          if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
            var c = a.a.get(d);
            if (c) return new c.constructorFunction();
          }
          b = G.call(this, b, d);
          w(a, b);
          return b;
        });
        Y(a, Document.prototype, {
          h: ia,
          append: ja
        });
      }
      ;
      function za() {
        function a(a2, c) {
          Object.defineProperty(a2, "textContent", {
            enumerable: c.enumerable,
            configurable: true,
            get: c.get,
            set: function (a3) {
              if (this.nodeType === Node.TEXT_NODE) c.set.call(this, a3);else {
                var d = void 0;
                if (this.firstChild) {
                  var e = this.childNodes,
                    k = e.length;
                  if (0 < k && l(this)) {
                    d = Array(k);
                    for (var h2 = 0; h2 < k; h2++) d[h2] = e[h2];
                  }
                }
                c.set.call(this, a3);
                if (d) for (a3 = 0; a3 < d.length; a3++) z(b, d[a3]);
              }
            }
          });
        }
        var b = X;
        r(Node.prototype, "insertBefore", function (a2, c) {
          if (a2 instanceof DocumentFragment) {
            var e = Array.prototype.slice.apply(a2.childNodes);
            a2 = J.call(this, a2, c);
            if (l(this)) for (c = 0; c < e.length; c++) x(b, e[c]);
            return a2;
          }
          e = l(a2);
          c = J.call(this, a2, c);
          e && z(b, a2);
          l(this) && x(b, a2);
          return c;
        });
        r(Node.prototype, "appendChild", function (a2) {
          if (a2 instanceof DocumentFragment) {
            var c = Array.prototype.slice.apply(a2.childNodes);
            a2 = I.call(this, a2);
            if (l(this)) for (var e = 0; e < c.length; e++) x(b, c[e]);
            return a2;
          }
          c = l(a2);
          e = I.call(this, a2);
          c && z(b, a2);
          l(this) && x(b, a2);
          return e;
        });
        r(Node.prototype, "cloneNode", function (a2) {
          a2 = H.call(this, !!a2);
          this.ownerDocument.__CE_hasRegistry ? A(b, a2) : v(b, a2);
          return a2;
        });
        r(Node.prototype, "removeChild", function (a2) {
          var c = l(a2),
            e = K.call(this, a2);
          c && z(b, a2);
          return e;
        });
        r(Node.prototype, "replaceChild", function (a2, c) {
          if (a2 instanceof DocumentFragment) {
            var e = Array.prototype.slice.apply(a2.childNodes);
            a2 = L.call(this, a2, c);
            if (l(this)) for (z(b, c), c = 0; c < e.length; c++) x(b, e[c]);
            return a2;
          }
          e = l(a2);
          var f = L.call(this, a2, c),
            d = l(this);
          d && z(b, c);
          e && z(b, a2);
          d && x(b, a2);
          return f;
        });
        M && M.get ? a(Node.prototype, M) : ca(b, function (b2) {
          a(b2, {
            enumerable: true,
            configurable: true,
            get: function () {
              for (var a2 = [], b3 = 0; b3 < this.childNodes.length; b3++) {
                var f = this.childNodes[b3];
                f.nodeType !== Node.COMMENT_NODE && a2.push(f.textContent);
              }
              return a2.join("");
            },
            set: function (a2) {
              for (; this.firstChild;) K.call(this, this.firstChild);
              null != a2 && "" !== a2 && I.call(this, document.createTextNode(a2));
            }
          });
        });
      }
      ;
      function Aa(a) {
        function b(b2) {
          return function (e) {
            for (var c = [], d2 = 0; d2 < arguments.length; ++d2) c[d2] = arguments[d2];
            d2 = [];
            for (var k = [], h2 = 0; h2 < c.length; h2++) {
              var m = c[h2];
              m instanceof Element && l(m) && k.push(m);
              if (m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) d2.push(m);else d2.push(m);
            }
            b2.apply(this, c);
            for (c = 0; c < k.length; c++) z(a, k[c]);
            if (l(this)) for (c = 0; c < d2.length; c++) k = d2[c], k instanceof Element && x(a, k);
          };
        }
        var d = Element.prototype;
        void 0 !== V && (d.before = b(V));
        void 0 !== V && (d.after = b(qa));
        void 0 !== ra && r(d, "replaceWith", function (b2) {
          for (var e = [], c = 0; c < arguments.length; ++c) e[c] = arguments[c];
          c = [];
          for (var d2 = [], k = 0; k < e.length; k++) {
            var h2 = e[k];
            h2 instanceof Element && l(h2) && d2.push(h2);
            if (h2 instanceof DocumentFragment) for (h2 = h2.firstChild; h2; h2 = h2.nextSibling) c.push(h2);else c.push(h2);
          }
          k = l(this);
          ra.apply(this, e);
          for (e = 0; e < d2.length; e++) z(a, d2[e]);
          if (k) for (z(a, this), e = 0; e < c.length; e++) d2 = c[e], d2 instanceof Element && x(a, d2);
        });
        void 0 !== sa && r(d, "remove", function () {
          var b2 = l(this);
          sa.call(this);
          b2 && z(a, this);
        });
      }
      ;
      function Ba() {
        function a(a2, b2) {
          Object.defineProperty(a2, "innerHTML", {
            enumerable: b2.enumerable,
            configurable: true,
            get: b2.get,
            set: function (a3) {
              var e = this,
                d2 = void 0;
              l(this) && (d2 = [], p(this, function (a4) {
                a4 !== e && d2.push(a4);
              }));
              b2.set.call(this, a3);
              if (d2) for (var f = 0; f < d2.length; f++) {
                var t = d2[f];
                1 === t.__CE_state && c.disconnectedCallback(t);
              }
              this.ownerDocument.__CE_hasRegistry ? A(c, this) : v(c, this);
              return a3;
            }
          });
        }
        function b(a2, b2) {
          r(a2, "insertAdjacentElement", function (a3, e) {
            var d2 = l(e);
            a3 = b2.call(this, a3, e);
            d2 && z(c, e);
            l(a3) && x(c, e);
            return a3;
          });
        }
        function d(a2, b2) {
          function e(a3, b3) {
            for (var e2 = []; a3 !== b3; a3 = a3.nextSibling) e2.push(a3);
            for (b3 = 0; b3 < e2.length; b3++) A(c, e2[b3]);
          }
          r(a2, "insertAdjacentHTML", function (a3, c2) {
            a3 = a3.toLowerCase();
            if ("beforebegin" === a3) {
              var d2 = this.previousSibling;
              b2.call(this, a3, c2);
              e(d2 || this.parentNode.firstChild, this);
            } else if ("afterbegin" === a3) d2 = this.firstChild, b2.call(this, a3, c2), e(this.firstChild, d2);else if ("beforeend" === a3) d2 = this.lastChild, b2.call(this, a3, c2), e(d2 || this.firstChild, null);else if ("afterend" === a3) d2 = this.nextSibling, b2.call(this, a3, c2), e(this.nextSibling, d2);else throw new SyntaxError("The value provided (" + String(a3) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
          });
        }
        var c = X;
        N && r(Element.prototype, "attachShadow", function (a2) {
          a2 = N.call(this, a2);
          var b2 = c;
          if (b2.b && !a2.__CE_patched) {
            a2.__CE_patched = true;
            for (var e = 0; e < b2.c.length; e++) b2.c[e](a2);
          }
          return this.__CE_shadowRoot = a2;
        });
        O && O.get ? a(Element.prototype, O) : W && W.get ? a(HTMLElement.prototype, W) : da(c, function (b2) {
          a(b2, {
            enumerable: true,
            configurable: true,
            get: function () {
              return H.call(this, true).innerHTML;
            },
            set: function (a2) {
              var b3 = "template" === this.localName,
                c2 = b3 ? this.content : this,
                e = G.call(document, this.namespaceURI, this.localName);
              for (e.innerHTML = a2; 0 < c2.childNodes.length;) K.call(c2, c2.childNodes[0]);
              for (a2 = b3 ? e.content : e; 0 < a2.childNodes.length;) I.call(c2, a2.childNodes[0]);
            }
          });
        });
        r(Element.prototype, "setAttribute", function (a2, b2) {
          if (1 !== this.__CE_state) return Q.call(this, a2, b2);
          var e = P.call(this, a2);
          Q.call(this, a2, b2);
          b2 = P.call(this, a2);
          c.attributeChangedCallback(this, a2, e, b2, null);
        });
        r(Element.prototype, "setAttributeNS", function (a2, b2, d2) {
          if (1 !== this.__CE_state) return T.call(this, a2, b2, d2);
          var e = S.call(this, a2, b2);
          T.call(this, a2, b2, d2);
          d2 = S.call(this, a2, b2);
          c.attributeChangedCallback(this, b2, e, d2, a2);
        });
        r(Element.prototype, "removeAttribute", function (a2) {
          if (1 !== this.__CE_state) return R.call(this, a2);
          var b2 = P.call(this, a2);
          R.call(this, a2);
          null !== b2 && c.attributeChangedCallback(this, a2, b2, null, null);
        });
        r(Element.prototype, "removeAttributeNS", function (a2, b2) {
          if (1 !== this.__CE_state) return U.call(this, a2, b2);
          var d2 = S.call(this, a2, b2);
          U.call(this, a2, b2);
          var e = S.call(this, a2, b2);
          d2 !== e && c.attributeChangedCallback(this, b2, d2, e, a2);
        });
        ua ? b(HTMLElement.prototype, ua) : ma ? b(Element.prototype, ma) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
        va ? d(HTMLElement.prototype, va) : na ? d(Element.prototype, na) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");
        Y(c, Element.prototype, {
          h: oa,
          append: pa
        });
        Aa(c);
      }
      ;
      var Z = window.customElements;
      if (!Z || Z.forcePolyfill || "function" != typeof Z.define || "function" != typeof Z.get) {
        var X = new u();
        xa();
        ya();
        Y(X, DocumentFragment.prototype, {
          h: ka,
          append: la
        });
        za();
        Ba();
        document.__CE_hasRegistry = true;
        var customElements2 = new E(X);
        Object.defineProperty(window, "customElements", {
          configurable: true,
          enumerable: true,
          value: customElements2
        });
      }
      ;
    }).call(self);
    "string" !== typeof document.baseURI && Object.defineProperty(Document.prototype, "baseURI", {
      enumerable: true,
      configurable: true,
      get: function () {
        var a = document.querySelector("base");
        return a && a.href ? a.href : document.URL;
      }
    });
    "function" !== typeof window.CustomEvent && (window.CustomEvent = function (c, a) {
      a = a || {
        bubbles: false,
        cancelable: false,
        detail: void 0
      };
      var b = document.createEvent("CustomEvent");
      b.initCustomEvent(c, a.bubbles, a.cancelable, a.detail);
      return b;
    }, window.CustomEvent.prototype = window.Event.prototype);
    (function (b, c, d) {
      b.composedPath || (b.composedPath = function () {
        if (this.path) return this.path;
        var a = this.target;
        for (this.path = []; null !== a.parentNode;) this.path.push(a), a = a.parentNode;
        this.path.push(c, d);
        return this.path;
      });
    })(Event.prototype, document, window);
    (function (a) {
      "function" !== typeof a.matches && (a.matches = a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || function (a2) {
        a2 = (this.document || this.ownerDocument).querySelectorAll(a2);
        for (var b = 0; a2[b] && a2[b] !== this;) ++b;
        return !!a2[b];
      });
      "function" !== typeof a.closest && (a.closest = function (a2) {
        for (var b = this; b && 1 === b.nodeType;) {
          if (b.matches(a2)) return b;
          b = b.parentNode;
        }
        return null;
      });
    })(window.Element.prototype);
    (function (c) {
      function d(a) {
        a = b(a);
        return a && 11 === a.nodeType ? d(a.host) : a;
      }
      function b(a) {
        return a && a.parentNode ? b(a.parentNode) : a;
      }
      "function" !== typeof c.getRootNode && (c.getRootNode = function (a) {
        return a && a.composed ? d(this) : b(this);
      });
    })(Element.prototype);
    (function (a) {
      "isConnected" in a || Object.defineProperty(a, "isConnected", {
        configurable: true,
        enumerable: true,
        get: function () {
          var a2 = this.getRootNode({
            composed: true
          });
          return a2 && 9 === a2.nodeType;
        }
      });
    })(Element.prototype);
    (function (b) {
      b.forEach(function (a) {
        a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function () {
            null !== this.parentNode && this.parentNode.removeChild(this);
          }
        });
      });
    })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
    !function (e) {
      "classList" in e || Object.defineProperty(e, "classList", {
        get: function () {
          var e2 = this,
            t = (e2.getAttribute("class") || "").replace(/^\s+|\s$/g, "").split(/\s+/g);
          function n() {
            t.length > 0 ? e2.setAttribute("class", t.join(" ")) : e2.removeAttribute("class");
          }
          return "" === t[0] && t.splice(0, 1), t.toggle = function (e3, i) {
            void 0 !== i ? i ? t.add(e3) : t.remove(e3) : -1 !== t.indexOf(e3) ? t.splice(t.indexOf(e3), 1) : t.push(e3), n();
          }, t.add = function () {
            for (var e3 = [].slice.call(arguments), i = 0, s = e3.length; i < s; i++) -1 === t.indexOf(e3[i]) && t.push(e3[i]);
            n();
          }, t.remove = function () {
            for (var e3 = [].slice.call(arguments), i = 0, s = e3.length; i < s; i++) -1 !== t.indexOf(e3[i]) && t.splice(t.indexOf(e3[i]), 1);
            n();
          }, t.item = function (e3) {
            return t[e3];
          }, t.contains = function (e3) {
            return -1 !== t.indexOf(e3);
          }, t.replace = function (e3, i) {
            -1 !== t.indexOf(e3) && t.splice(t.indexOf(e3), 1, i), n();
          }, t.value = e2.getAttribute("class") || "", t;
        }
      });
    }(Element.prototype);
    (function (b) {
      try {
        document.body.classList.add();
      } catch (e) {
        var c = b.add,
          d = b.remove;
        b.add = function () {
          for (var a = 0; a < arguments.length; a++) c.call(this, arguments[a]);
        };
        b.remove = function () {
          for (var a = 0; a < arguments.length; a++) d.call(this, arguments[a]);
        };
      }
    })(DOMTokenList.prototype);
  }
});

// node_modules/@ionic/core/dist/esm/polyfills/core-js.js
var require_core_js = __commonJS({
  "node_modules/@ionic/core/dist/esm/polyfills/core-js.js"() {
    !function (t) {
      "use strict";

      !function (t2) {
        var n = {};
        function e(r) {
          if (n[r]) return n[r].exports;
          var o = n[r] = {
            i: r,
            l: false,
            exports: {}
          };
          return t2[r].call(o.exports, o, o.exports, e), o.l = true, o.exports;
        }
        e.m = t2, e.c = n, e.d = function (t3, n2, r) {
          e.o(t3, n2) || Object.defineProperty(t3, n2, {
            enumerable: true,
            get: r
          });
        }, e.r = function (t3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t3, "__esModule", {
            value: true
          });
        }, e.t = function (t3, n2) {
          if (1 & n2 && (t3 = e(t3)), 8 & n2) return t3;
          if (4 & n2 && "object" == typeof t3 && t3 && t3.__esModule) return t3;
          var r = /* @__PURE__ */Object.create(null);
          if (e.r(r), Object.defineProperty(r, "default", {
            enumerable: true,
            value: t3
          }), 2 & n2 && "string" != typeof t3) for (var o in t3) e.d(r, o, function (n3) {
            return t3[n3];
          }.bind(null, o));
          return r;
        }, e.n = function (t3) {
          var n2 = t3 && t3.__esModule ? function () {
            return t3.default;
          } : function () {
            return t3;
          };
          return e.d(n2, "a", n2), n2;
        }, e.o = function (t3, n2) {
          return Object.prototype.hasOwnProperty.call(t3, n2);
        }, e.p = "", e(e.s = 0);
      }([function (t2, n, e) {
        e(1), e(55), e(62), e(68), e(70), e(71), e(72), e(73), e(75), e(76), e(78), e(87), e(88), e(89), e(98), e(99), e(101), e(102), e(103), e(105), e(106), e(107), e(108), e(110), e(111), e(112), e(113), e(114), e(115), e(116), e(117), e(118), e(127), e(130), e(131), e(133), e(135), e(136), e(137), e(138), e(139), e(141), e(143), e(146), e(148), e(150), e(151), e(153), e(154), e(155), e(156), e(157), e(159), e(160), e(162), e(163), e(164), e(165), e(166), e(167), e(168), e(169), e(170), e(172), e(173), e(183), e(184), e(185), e(189), e(191), e(192), e(193), e(194), e(195), e(196), e(198), e(201), e(202), e(203), e(204), e(208), e(209), e(212), e(213), e(214), e(215), e(216), e(217), e(218), e(219), e(221), e(222), e(223), e(226), e(227), e(228), e(229), e(230), e(231), e(232), e(233), e(234), e(235), e(236), e(237), e(238), e(240), e(241), e(243), e(248), t2.exports = e(246);
      }, function (t2, n, e) {
        var r = e(2),
          o = e(6),
          i = e(45),
          a = e(14),
          u = e(46),
          c = e(39),
          f = e(47),
          s = e(48),
          l = e(52),
          p = e(49),
          h2 = e(53),
          v = p("isConcatSpreadable"),
          g = h2 >= 51 || !o(function () {
            var t3 = [];
            return t3[v] = false, t3.concat()[0] !== t3;
          }),
          d = l("concat"),
          y = function (t3) {
            if (!a(t3)) return false;
            var n2 = t3[v];
            return void 0 !== n2 ? !!n2 : i(t3);
          };
        r({
          target: "Array",
          proto: true,
          forced: !g || !d
        }, {
          concat: function (t3) {
            var n2,
              e2,
              r2,
              o2,
              i3,
              a2 = u(this),
              l2 = s(a2, 0),
              p2 = 0;
            for (n2 = -1, r2 = arguments.length; n2 < r2; n2++) if (i3 = -1 === n2 ? a2 : arguments[n2], y(i3)) {
              if (p2 + (o2 = c(i3.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
              for (e2 = 0; e2 < o2; e2++, p2++) e2 in i3 && f(l2, p2, i3[e2]);
            } else {
              if (p2 >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
              f(l2, p2++, i3);
            }
            return l2.length = p2, l2;
          }
        });
      }, function (t2, n, e) {
        var r = e(3),
          o = e(4).f,
          i = e(18),
          a = e(21),
          u = e(22),
          c = e(32),
          f = e(44);
        t2.exports = function (t3, n2) {
          var e2,
            s,
            l,
            p,
            h2,
            v = t3.target,
            g = t3.global,
            d = t3.stat;
          if (e2 = g ? r : d ? r[v] || u(v, {}) : (r[v] || {}).prototype) for (s in n2) {
            if (p = n2[s], l = t3.noTargetGet ? (h2 = o(e2, s)) && h2.value : e2[s], !f(g ? s : v + (d ? "." : "#") + s, t3.forced) && void 0 !== l) {
              if (typeof p == typeof l) continue;
              c(p, l);
            }
            (t3.sham || l && l.sham) && i(p, "sham", true), a(e2, s, p, t3);
          }
        };
      }, function (t2, n) {
        var e = function (t3) {
          return t3 && t3.Math == Math && t3;
        };
        t2.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof global && global) || Function("return this")();
      }, function (t2, n, e) {
        var r = e(5),
          o = e(7),
          i = e(8),
          a = e(9),
          u = e(13),
          c = e(15),
          f = e(16),
          s = Object.getOwnPropertyDescriptor;
        n.f = r ? s : function (t3, n2) {
          if (t3 = a(t3), n2 = u(n2, true), f) try {
            return s(t3, n2);
          } catch (t4) {}
          if (c(t3, n2)) return i(!o.f.call(t3, n2), t3[n2]);
        };
      }, function (t2, n, e) {
        var r = e(6);
        t2.exports = !r(function () {
          return 7 != Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            }
          })[1];
        });
      }, function (t2, n) {
        t2.exports = function (t3) {
          try {
            return !!t3();
          } catch (t4) {
            return true;
          }
        };
      }, function (t2, n, e) {
        var r = {}.propertyIsEnumerable,
          o = Object.getOwnPropertyDescriptor,
          i = o && !r.call({
            1: 2
          }, 1);
        n.f = i ? function (t3) {
          var n2 = o(this, t3);
          return !!n2 && n2.enumerable;
        } : r;
      }, function (t2, n) {
        t2.exports = function (t3, n2) {
          return {
            enumerable: !(1 & t3),
            configurable: !(2 & t3),
            writable: !(4 & t3),
            value: n2
          };
        };
      }, function (t2, n, e) {
        var r = e(10),
          o = e(12);
        t2.exports = function (t3) {
          return r(o(t3));
        };
      }, function (t2, n, e) {
        var r = e(6),
          o = e(11),
          i = "".split;
        t2.exports = r(function () {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function (t3) {
          return "String" == o(t3) ? i.call(t3, "") : Object(t3);
        } : Object;
      }, function (t2, n) {
        var e = {}.toString;
        t2.exports = function (t3) {
          return e.call(t3).slice(8, -1);
        };
      }, function (t2, n) {
        t2.exports = function (t3) {
          if (null == t3) throw TypeError("Can't call method on " + t3);
          return t3;
        };
      }, function (t2, n, e) {
        var r = e(14);
        t2.exports = function (t3, n2) {
          if (!r(t3)) return t3;
          var e2, o;
          if (n2 && "function" == typeof (e2 = t3.toString) && !r(o = e2.call(t3))) return o;
          if ("function" == typeof (e2 = t3.valueOf) && !r(o = e2.call(t3))) return o;
          if (!n2 && "function" == typeof (e2 = t3.toString) && !r(o = e2.call(t3))) return o;
          throw TypeError("Can't convert object to primitive value");
        };
      }, function (t2, n) {
        t2.exports = function (t3) {
          return "object" == typeof t3 ? null !== t3 : "function" == typeof t3;
        };
      }, function (t2, n) {
        var e = {}.hasOwnProperty;
        t2.exports = function (t3, n2) {
          return e.call(t3, n2);
        };
      }, function (t2, n, e) {
        var r = e(5),
          o = e(6),
          i = e(17);
        t2.exports = !r && !o(function () {
          return 7 != Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            }
          }).a;
        });
      }, function (t2, n, e) {
        var r = e(3),
          o = e(14),
          i = r.document,
          a = o(i) && o(i.createElement);
        t2.exports = function (t3) {
          return a ? i.createElement(t3) : {};
        };
      }, function (t2, n, e) {
        var r = e(5),
          o = e(19),
          i = e(8);
        t2.exports = r ? function (t3, n2, e2) {
          return o.f(t3, n2, i(1, e2));
        } : function (t3, n2, e2) {
          return t3[n2] = e2, t3;
        };
      }, function (t2, n, e) {
        var r = e(5),
          o = e(16),
          i = e(20),
          a = e(13),
          u = Object.defineProperty;
        n.f = r ? u : function (t3, n2, e2) {
          if (i(t3), n2 = a(n2, true), i(e2), o) try {
            return u(t3, n2, e2);
          } catch (t4) {}
          if ("get" in e2 || "set" in e2) throw TypeError("Accessors not supported");
          return "value" in e2 && (t3[n2] = e2.value), t3;
        };
      }, function (t2, n, e) {
        var r = e(14);
        t2.exports = function (t3) {
          if (!r(t3)) throw TypeError(String(t3) + " is not an object");
          return t3;
        };
      }, function (t2, n, e) {
        var r = e(3),
          o = e(18),
          i = e(15),
          a = e(22),
          u = e(23),
          c = e(25),
          f = c.get,
          s = c.enforce,
          l = String(String).split("String");
        (t2.exports = function (t3, n2, e2, u2) {
          var c2 = !!u2 && !!u2.unsafe,
            f2 = !!u2 && !!u2.enumerable,
            p = !!u2 && !!u2.noTargetGet;
          "function" == typeof e2 && ("string" != typeof n2 || i(e2, "name") || o(e2, "name", n2), s(e2).source = l.join("string" == typeof n2 ? n2 : "")), t3 !== r ? (c2 ? !p && t3[n2] && (f2 = true) : delete t3[n2], f2 ? t3[n2] = e2 : o(t3, n2, e2)) : f2 ? t3[n2] = e2 : a(n2, e2);
        })(Function.prototype, "toString", function () {
          return "function" == typeof this && f(this).source || u(this);
        });
      }, function (t2, n, e) {
        var r = e(3),
          o = e(18);
        t2.exports = function (t3, n2) {
          try {
            o(r, t3, n2);
          } catch (e2) {
            r[t3] = n2;
          }
          return n2;
        };
      }, function (t2, n, e) {
        var r = e(24),
          o = Function.toString;
        "function" != typeof r.inspectSource && (r.inspectSource = function (t3) {
          return o.call(t3);
        }), t2.exports = r.inspectSource;
      }, function (t2, n, e) {
        var r = e(3),
          o = e(22),
          i = r["__core-js_shared__"] || o("__core-js_shared__", {});
        t2.exports = i;
      }, function (t2, n, e) {
        var r,
          o,
          i,
          a = e(26),
          u = e(3),
          c = e(14),
          f = e(18),
          s = e(15),
          l = e(27),
          p = e(31),
          h2 = u.WeakMap;
        if (a) {
          var v = new h2(),
            g = v.get,
            d = v.has,
            y = v.set;
          r = function (t3, n2) {
            return y.call(v, t3, n2), n2;
          }, o = function (t3) {
            return g.call(v, t3) || {};
          }, i = function (t3) {
            return d.call(v, t3);
          };
        } else {
          var x = l("state");
          p[x] = true, r = function (t3, n2) {
            return f(t3, x, n2), n2;
          }, o = function (t3) {
            return s(t3, x) ? t3[x] : {};
          }, i = function (t3) {
            return s(t3, x);
          };
        }
        t2.exports = {
          set: r,
          get: o,
          has: i,
          enforce: function (t3) {
            return i(t3) ? o(t3) : r(t3, {});
          },
          getterFor: function (t3) {
            return function (n2) {
              var e2;
              if (!c(n2) || (e2 = o(n2)).type !== t3) throw TypeError("Incompatible receiver, " + t3 + " required");
              return e2;
            };
          }
        };
      }, function (t2, n, e) {
        var r = e(3),
          o = e(23),
          i = r.WeakMap;
        t2.exports = "function" == typeof i && /native code/.test(o(i));
      }, function (t2, n, e) {
        var r = e(28),
          o = e(30),
          i = r("keys");
        t2.exports = function (t3) {
          return i[t3] || (i[t3] = o(t3));
        };
      }, function (t2, n, e) {
        var r = e(29),
          o = e(24);
        (t2.exports = function (t3, n2) {
          return o[t3] || (o[t3] = void 0 !== n2 ? n2 : {});
        })("versions", []).push({
          version: "3.6.5",
          mode: r ? "pure" : "global",
          copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
        });
      }, function (t2, n) {
        t2.exports = false;
      }, function (t2, n) {
        var e = 0,
          r = Math.random();
        t2.exports = function (t3) {
          return "Symbol(" + String(void 0 === t3 ? "" : t3) + ")_" + (++e + r).toString(36);
        };
      }, function (t2, n) {
        t2.exports = {};
      }, function (t2, n, e) {
        var r = e(15),
          o = e(33),
          i = e(4),
          a = e(19);
        t2.exports = function (t3, n2) {
          for (var e2 = o(n2), u = a.f, c = i.f, f = 0; f < e2.length; f++) {
            var s = e2[f];
            r(t3, s) || u(t3, s, c(n2, s));
          }
        };
      }, function (t2, n, e) {
        var r = e(34),
          o = e(36),
          i = e(43),
          a = e(20);
        t2.exports = r("Reflect", "ownKeys") || function (t3) {
          var n2 = o.f(a(t3)),
            e2 = i.f;
          return e2 ? n2.concat(e2(t3)) : n2;
        };
      }, function (t2, n, e) {
        var r = e(35),
          o = e(3),
          i = function (t3) {
            return "function" == typeof t3 ? t3 : void 0;
          };
        t2.exports = function (t3, n2) {
          return arguments.length < 2 ? i(r[t3]) || i(o[t3]) : r[t3] && r[t3][n2] || o[t3] && o[t3][n2];
        };
      }, function (t2, n, e) {
        var r = e(3);
        t2.exports = r;
      }, function (t2, n, e) {
        var r = e(37),
          o = e(42).concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function (t3) {
          return r(t3, o);
        };
      }, function (t2, n, e) {
        var r = e(15),
          o = e(9),
          i = e(38).indexOf,
          a = e(31);
        t2.exports = function (t3, n2) {
          var e2,
            u = o(t3),
            c = 0,
            f = [];
          for (e2 in u) !r(a, e2) && r(u, e2) && f.push(e2);
          for (; n2.length > c;) r(u, e2 = n2[c++]) && (~i(f, e2) || f.push(e2));
          return f;
        };
      }, function (t2, n, e) {
        var r = e(9),
          o = e(39),
          i = e(41),
          a = function (t3) {
            return function (n2, e2, a2) {
              var u,
                c = r(n2),
                f = o(c.length),
                s = i(a2, f);
              if (t3 && e2 != e2) {
                for (; f > s;) if ((u = c[s++]) != u) return true;
              } else for (; f > s; s++) if ((t3 || s in c) && c[s] === e2) return t3 || s || 0;
              return !t3 && -1;
            };
          };
        t2.exports = {
          includes: a(true),
          indexOf: a(false)
        };
      }, function (t2, n, e) {
        var r = e(40),
          o = Math.min;
        t2.exports = function (t3) {
          return t3 > 0 ? o(r(t3), 9007199254740991) : 0;
        };
      }, function (t2, n) {
        var e = Math.ceil,
          r = Math.floor;
        t2.exports = function (t3) {
          return isNaN(t3 = +t3) ? 0 : (t3 > 0 ? r : e)(t3);
        };
      }, function (t2, n, e) {
        var r = e(40),
          o = Math.max,
          i = Math.min;
        t2.exports = function (t3, n2) {
          var e2 = r(t3);
          return e2 < 0 ? o(e2 + n2, 0) : i(e2, n2);
        };
      }, function (t2, n) {
        t2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      }, function (t2, n) {
        n.f = Object.getOwnPropertySymbols;
      }, function (t2, n, e) {
        var r = e(6),
          o = /#|\.prototype\./,
          i = function (t3, n2) {
            var e2 = u[a(t3)];
            return e2 == f || e2 != c && ("function" == typeof n2 ? r(n2) : !!n2);
          },
          a = i.normalize = function (t3) {
            return String(t3).replace(o, ".").toLowerCase();
          },
          u = i.data = {},
          c = i.NATIVE = "N",
          f = i.POLYFILL = "P";
        t2.exports = i;
      }, function (t2, n, e) {
        var r = e(11);
        t2.exports = Array.isArray || function (t3) {
          return "Array" == r(t3);
        };
      }, function (t2, n, e) {
        var r = e(12);
        t2.exports = function (t3) {
          return Object(r(t3));
        };
      }, function (t2, n, e) {
        var r = e(13),
          o = e(19),
          i = e(8);
        t2.exports = function (t3, n2, e2) {
          var a = r(n2);
          a in t3 ? o.f(t3, a, i(0, e2)) : t3[a] = e2;
        };
      }, function (t2, n, e) {
        var r = e(14),
          o = e(45),
          i = e(49)("species");
        t2.exports = function (t3, n2) {
          var e2;
          return o(t3) && ("function" != typeof (e2 = t3.constructor) || e2 !== Array && !o(e2.prototype) ? r(e2) && null === (e2 = e2[i]) && (e2 = void 0) : e2 = void 0), new (void 0 === e2 ? Array : e2)(0 === n2 ? 0 : n2);
        };
      }, function (t2, n, e) {
        var r = e(3),
          o = e(28),
          i = e(15),
          a = e(30),
          u = e(50),
          c = e(51),
          f = o("wks"),
          s = r.Symbol,
          l = c ? s : s && s.withoutSetter || a;
        t2.exports = function (t3) {
          return i(f, t3) || (u && i(s, t3) ? f[t3] = s[t3] : f[t3] = l("Symbol." + t3)), f[t3];
        };
      }, function (t2, n, e) {
        var r = e(6);
        t2.exports = !!Object.getOwnPropertySymbols && !r(function () {
          return !String(Symbol());
        });
      }, function (t2, n, e) {
        var r = e(50);
        t2.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      }, function (t2, n, e) {
        var r = e(6),
          o = e(49),
          i = e(53),
          a = o("species");
        t2.exports = function (t3) {
          return i >= 51 || !r(function () {
            var n2 = [];
            return (n2.constructor = {})[a] = function () {
              return {
                foo: 1
              };
            }, 1 !== n2[t3](Boolean).foo;
          });
        };
      }, function (t2, n, e) {
        var r,
          o,
          i = e(3),
          a = e(54),
          u = i.process,
          c = u && u.versions,
          f = c && c.v8;
        f ? o = (r = f.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), t2.exports = o && +o;
      }, function (t2, n, e) {
        var r = e(34);
        t2.exports = r("navigator", "userAgent") || "";
      }, function (t2, n, e) {
        var r = e(2),
          o = e(56),
          i = e(57);
        r({
          target: "Array",
          proto: true
        }, {
          copyWithin: o
        }), i("copyWithin");
      }, function (t2, n, e) {
        var r = e(46),
          o = e(41),
          i = e(39),
          a = Math.min;
        t2.exports = [].copyWithin || function (t3, n2) {
          var e2 = r(this),
            u = i(e2.length),
            c = o(t3, u),
            f = o(n2, u),
            s = arguments.length > 2 ? arguments[2] : void 0,
            l = a((void 0 === s ? u : o(s, u)) - f, u - c),
            p = 1;
          for (f < c && c < f + l && (p = -1, f += l - 1, c += l - 1); l-- > 0;) f in e2 ? e2[c] = e2[f] : delete e2[c], c += p, f += p;
          return e2;
        };
      }, function (t2, n, e) {
        var r = e(49),
          o = e(58),
          i = e(19),
          a = r("unscopables"),
          u = Array.prototype;
        null == u[a] && i.f(u, a, {
          configurable: true,
          value: o(null)
        }), t2.exports = function (t3) {
          u[a][t3] = true;
        };
      }, function (t2, n, e) {
        var r,
          o = e(20),
          i = e(59),
          a = e(42),
          u = e(31),
          c = e(61),
          f = e(17),
          s = e(27),
          l = s("IE_PROTO"),
          p = function () {},
          h2 = function (t3) {
            return "<script>" + t3 + "<\/script>";
          },
          v = function () {
            try {
              r = document.domain && new ActiveXObject("htmlfile");
            } catch (t4) {}
            var t3, n2;
            v = r ? function (t4) {
              t4.write(h2("")), t4.close();
              var n3 = t4.parentWindow.Object;
              return t4 = null, n3;
            }(r) : ((n2 = f("iframe")).style.display = "none", c.appendChild(n2), n2.src = String("javascript:"), (t3 = n2.contentWindow.document).open(), t3.write(h2("document.F=Object")), t3.close(), t3.F);
            for (var e2 = a.length; e2--;) delete v.prototype[a[e2]];
            return v();
          };
        u[l] = true, t2.exports = Object.create || function (t3, n2) {
          var e2;
          return null !== t3 ? (p.prototype = o(t3), e2 = new p(), p.prototype = null, e2[l] = t3) : e2 = v(), void 0 === n2 ? e2 : i(e2, n2);
        };
      }, function (t2, n, e) {
        var r = e(5),
          o = e(19),
          i = e(20),
          a = e(60);
        t2.exports = r ? Object.defineProperties : function (t3, n2) {
          i(t3);
          for (var e2, r2 = a(n2), u = r2.length, c = 0; u > c;) o.f(t3, e2 = r2[c++], n2[e2]);
          return t3;
        };
      }, function (t2, n, e) {
        var r = e(37),
          o = e(42);
        t2.exports = Object.keys || function (t3) {
          return r(t3, o);
        };
      }, function (t2, n, e) {
        var r = e(34);
        t2.exports = r("document", "documentElement");
      }, function (t2, n, e) {
        var r = e(2),
          o = e(63).every,
          i = e(66),
          a = e(67),
          u = i("every"),
          c = a("every");
        r({
          target: "Array",
          proto: true,
          forced: !u || !c
        }, {
          every: function (t3) {
            return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }, function (t2, n, e) {
        var r = e(64),
          o = e(10),
          i = e(46),
          a = e(39),
          u = e(48),
          c = [].push,
          f = function (t3) {
            var n2 = 1 == t3,
              e2 = 2 == t3,
              f2 = 3 == t3,
              s = 4 == t3,
              l = 6 == t3,
              p = 5 == t3 || l;
            return function (h2, v, g, d) {
              for (var y, x, m = i(h2), b = o(m), S = r(v, g, 3), E = a(b.length), w = 0, O = d || u, R = n2 ? O(h2, E) : e2 ? O(h2, 0) : void 0; E > w; w++) if ((p || w in b) && (x = S(y = b[w], w, m), t3)) {
                if (n2) R[w] = x;else if (x) switch (t3) {
                  case 3:
                    return true;
                  case 5:
                    return y;
                  case 6:
                    return w;
                  case 2:
                    c.call(R, y);
                } else if (s) return false;
              }
              return l ? -1 : f2 || s ? s : R;
            };
          };
        t2.exports = {
          forEach: f(0),
          map: f(1),
          filter: f(2),
          some: f(3),
          every: f(4),
          find: f(5),
          findIndex: f(6)
        };
      }, function (t2, n, e) {
        var r = e(65);
        t2.exports = function (t3, n2, e2) {
          if (r(t3), void 0 === n2) return t3;
          switch (e2) {
            case 0:
              return function () {
                return t3.call(n2);
              };
            case 1:
              return function (e3) {
                return t3.call(n2, e3);
              };
            case 2:
              return function (e3, r2) {
                return t3.call(n2, e3, r2);
              };
            case 3:
              return function (e3, r2, o) {
                return t3.call(n2, e3, r2, o);
              };
          }
          return function () {
            return t3.apply(n2, arguments);
          };
        };
      }, function (t2, n) {
        t2.exports = function (t3) {
          if ("function" != typeof t3) throw TypeError(String(t3) + " is not a function");
          return t3;
        };
      }, function (t2, n, e) {
        var r = e(6);
        t2.exports = function (t3, n2) {
          var e2 = [][t3];
          return !!e2 && r(function () {
            e2.call(null, n2 || function () {
              throw 1;
            }, 1);
          });
        };
      }, function (t2, n, e) {
        var r = e(5),
          o = e(6),
          i = e(15),
          a = Object.defineProperty,
          u = {},
          c = function (t3) {
            throw t3;
          };
        t2.exports = function (t3, n2) {
          if (i(u, t3)) return u[t3];
          n2 || (n2 = {});
          var e2 = [][t3],
            f = !!i(n2, "ACCESSORS") && n2.ACCESSORS,
            s = i(n2, 0) ? n2[0] : c,
            l = i(n2, 1) ? n2[1] : void 0;
          return u[t3] = !!e2 && !o(function () {
            if (f && !r) return true;
            var t4 = {
              length: -1
            };
            f ? a(t4, 1, {
              enumerable: true,
              get: c
            }) : t4[1] = 1, e2.call(t4, s, l);
          });
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(69),
          i = e(57);
        r({
          target: "Array",
          proto: true
        }, {
          fill: o
        }), i("fill");
      }, function (t2, n, e) {
        var r = e(46),
          o = e(41),
          i = e(39);
        t2.exports = function (t3) {
          for (var n2 = r(this), e2 = i(n2.length), a = arguments.length, u = o(a > 1 ? arguments[1] : void 0, e2), c = a > 2 ? arguments[2] : void 0, f = void 0 === c ? e2 : o(c, e2); f > u;) n2[u++] = t3;
          return n2;
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(63).filter,
          i = e(52),
          a = e(67),
          u = i("filter"),
          c = a("filter");
        r({
          target: "Array",
          proto: true,
          forced: !u || !c
        }, {
          filter: function (t3) {
            return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(63).find,
          i = e(57),
          a = e(67),
          u = true,
          c = a("find");
        "find" in [] && Array(1).find(function () {
          u = false;
        }), r({
          target: "Array",
          proto: true,
          forced: u || !c
        }, {
          find: function (t3) {
            return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), i("find");
      }, function (t2, n, e) {
        var r = e(2),
          o = e(63).findIndex,
          i = e(57),
          a = e(67),
          u = true,
          c = a("findIndex");
        "findIndex" in [] && Array(1).findIndex(function () {
          u = false;
        }), r({
          target: "Array",
          proto: true,
          forced: u || !c
        }, {
          findIndex: function (t3) {
            return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), i("findIndex");
      }, function (t2, n, e) {
        var r = e(2),
          o = e(74),
          i = e(46),
          a = e(39),
          u = e(40),
          c = e(48);
        r({
          target: "Array",
          proto: true
        }, {
          flat: function () {
            var t3 = arguments.length ? arguments[0] : void 0,
              n2 = i(this),
              e2 = a(n2.length),
              r2 = c(n2, 0);
            return r2.length = o(r2, n2, n2, e2, 0, void 0 === t3 ? 1 : u(t3)), r2;
          }
        });
      }, function (t2, n, e) {
        var r = e(45),
          o = e(39),
          i = e(64),
          a = function (t3, n2, e2, u, c, f, s, l) {
            for (var p, h2 = c, v = 0, g = !!s && i(s, l, 3); v < u;) {
              if (v in e2) {
                if (p = g ? g(e2[v], v, n2) : e2[v], f > 0 && r(p)) h2 = a(t3, n2, p, o(p.length), h2, f - 1) - 1;else {
                  if (h2 >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                  t3[h2] = p;
                }
                h2++;
              }
              v++;
            }
            return h2;
          };
        t2.exports = a;
      }, function (t2, n, e) {
        var r = e(2),
          o = e(74),
          i = e(46),
          a = e(39),
          u = e(65),
          c = e(48);
        r({
          target: "Array",
          proto: true
        }, {
          flatMap: function (t3) {
            var n2,
              e2 = i(this),
              r2 = a(e2.length);
            return u(t3), (n2 = c(e2, 0)).length = o(n2, e2, e2, r2, 0, 1, t3, arguments.length > 1 ? arguments[1] : void 0), n2;
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(77);
        r({
          target: "Array",
          proto: true,
          forced: [].forEach != o
        }, {
          forEach: o
        });
      }, function (t2, n, e) {
        var r = e(63).forEach,
          o = e(66),
          i = e(67),
          a = o("forEach"),
          u = i("forEach");
        t2.exports = a && u ? [].forEach : function (t3) {
          return r(this, t3, arguments.length > 1 ? arguments[1] : void 0);
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(79);
        r({
          target: "Array",
          stat: true,
          forced: !e(86)(function (t3) {
            Array.from(t3);
          })
        }, {
          from: o
        });
      }, function (t2, n, e) {
        var r = e(64),
          o = e(46),
          i = e(80),
          a = e(81),
          u = e(39),
          c = e(47),
          f = e(83);
        t2.exports = function (t3) {
          var n2,
            e2,
            s,
            l,
            p,
            h2,
            v = o(t3),
            g = "function" == typeof this ? this : Array,
            d = arguments.length,
            y = d > 1 ? arguments[1] : void 0,
            x = void 0 !== y,
            m = f(v),
            b = 0;
          if (x && (y = r(y, d > 2 ? arguments[2] : void 0, 2)), null == m || g == Array && a(m)) for (e2 = new g(n2 = u(v.length)); n2 > b; b++) h2 = x ? y(v[b], b) : v[b], c(e2, b, h2);else for (p = (l = m.call(v)).next, e2 = new g(); !(s = p.call(l)).done; b++) h2 = x ? i(l, y, [s.value, b], true) : s.value, c(e2, b, h2);
          return e2.length = b, e2;
        };
      }, function (t2, n, e) {
        var r = e(20);
        t2.exports = function (t3, n2, e2, o) {
          try {
            return o ? n2(r(e2)[0], e2[1]) : n2(e2);
          } catch (n3) {
            var i = t3.return;
            throw void 0 !== i && r(i.call(t3)), n3;
          }
        };
      }, function (t2, n, e) {
        var r = e(49),
          o = e(82),
          i = r("iterator"),
          a = Array.prototype;
        t2.exports = function (t3) {
          return void 0 !== t3 && (o.Array === t3 || a[i] === t3);
        };
      }, function (t2, n) {
        t2.exports = {};
      }, function (t2, n, e) {
        var r = e(84),
          o = e(82),
          i = e(49)("iterator");
        t2.exports = function (t3) {
          if (null != t3) return t3[i] || t3["@@iterator"] || o[r(t3)];
        };
      }, function (t2, n, e) {
        var r = e(85),
          o = e(11),
          i = e(49)("toStringTag"),
          a = "Arguments" == o( /* @__PURE__ */function () {
            return arguments;
          }());
        t2.exports = r ? o : function (t3) {
          var n2, e2, r2;
          return void 0 === t3 ? "Undefined" : null === t3 ? "Null" : "string" == typeof (e2 = function (t4, n3) {
            try {
              return t4[n3];
            } catch (t5) {}
          }(n2 = Object(t3), i)) ? e2 : a ? o(n2) : "Object" == (r2 = o(n2)) && "function" == typeof n2.callee ? "Arguments" : r2;
        };
      }, function (t2, n, e) {
        var r = {};
        r[e(49)("toStringTag")] = "z", t2.exports = "[object z]" === String(r);
      }, function (t2, n, e) {
        var r = e(49)("iterator"),
          o = false;
        try {
          var i = 0,
            a = {
              next: function () {
                return {
                  done: !!i++
                };
              },
              return: function () {
                o = true;
              }
            };
          a[r] = function () {
            return this;
          }, Array.from(a, function () {
            throw 2;
          });
        } catch (t3) {}
        t2.exports = function (t3, n2) {
          if (!n2 && !o) return false;
          var e2 = false;
          try {
            var i3 = {};
            i3[r] = function () {
              return {
                next: function () {
                  return {
                    done: e2 = true
                  };
                }
              };
            }, t3(i3);
          } catch (t4) {}
          return e2;
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(38).includes,
          i = e(57);
        r({
          target: "Array",
          proto: true,
          forced: !e(67)("indexOf", {
            ACCESSORS: true,
            1: 0
          })
        }, {
          includes: function (t3) {
            return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), i("includes");
      }, function (t2, n, e) {
        var r = e(2),
          o = e(38).indexOf,
          i = e(66),
          a = e(67),
          u = [].indexOf,
          c = !!u && 1 / [1].indexOf(1, -0) < 0,
          f = i("indexOf"),
          s = a("indexOf", {
            ACCESSORS: true,
            1: 0
          });
        r({
          target: "Array",
          proto: true,
          forced: c || !f || !s
        }, {
          indexOf: function (t3) {
            return c ? u.apply(this, arguments) || 0 : o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }, function (t2, n, e) {
        var r = e(9),
          o = e(57),
          i = e(82),
          a = e(25),
          u = e(90),
          c = a.set,
          f = a.getterFor("Array Iterator");
        t2.exports = u(Array, "Array", function (t3, n2) {
          c(this, {
            type: "Array Iterator",
            target: r(t3),
            index: 0,
            kind: n2
          });
        }, function () {
          var t3 = f(this),
            n2 = t3.target,
            e2 = t3.kind,
            r2 = t3.index++;
          return !n2 || r2 >= n2.length ? (t3.target = void 0, {
            value: void 0,
            done: true
          }) : "keys" == e2 ? {
            value: r2,
            done: false
          } : "values" == e2 ? {
            value: n2[r2],
            done: false
          } : {
            value: [r2, n2[r2]],
            done: false
          };
        }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries");
      }, function (t2, n, e) {
        var r = e(2),
          o = e(91),
          i = e(93),
          a = e(96),
          u = e(95),
          c = e(18),
          f = e(21),
          s = e(49),
          l = e(29),
          p = e(82),
          h2 = e(92),
          v = h2.IteratorPrototype,
          g = h2.BUGGY_SAFARI_ITERATORS,
          d = s("iterator"),
          y = function () {
            return this;
          };
        t2.exports = function (t3, n2, e2, s2, h3, x, m) {
          o(e2, n2, s2);
          var b,
            S,
            E,
            w = function (t4) {
              if (t4 === h3 && I) return I;
              if (!g && t4 in A) return A[t4];
              switch (t4) {
                case "keys":
                case "values":
                case "entries":
                  return function () {
                    return new e2(this, t4);
                  };
              }
              return function () {
                return new e2(this);
              };
            },
            O = n2 + " Iterator",
            R = false,
            A = t3.prototype,
            j = A[d] || A["@@iterator"] || h3 && A[h3],
            I = !g && j || w(h3),
            k = "Array" == n2 && A.entries || j;
          if (k && (b = i(k.call(new t3())), v !== Object.prototype && b.next && (l || i(b) === v || (a ? a(b, v) : "function" != typeof b[d] && c(b, d, y)), u(b, O, true, true), l && (p[O] = y))), "values" == h3 && j && "values" !== j.name && (R = true, I = function () {
            return j.call(this);
          }), l && !m || A[d] === I || c(A, d, I), p[n2] = I, h3) if (S = {
            values: w("values"),
            keys: x ? I : w("keys"),
            entries: w("entries")
          }, m) for (E in S) (g || R || !(E in A)) && f(A, E, S[E]);else r({
            target: n2,
            proto: true,
            forced: g || R
          }, S);
          return S;
        };
      }, function (t2, n, e) {
        var r = e(92).IteratorPrototype,
          o = e(58),
          i = e(8),
          a = e(95),
          u = e(82),
          c = function () {
            return this;
          };
        t2.exports = function (t3, n2, e2) {
          var f = n2 + " Iterator";
          return t3.prototype = o(r, {
            next: i(1, e2)
          }), a(t3, f, false, true), u[f] = c, t3;
        };
      }, function (t2, n, e) {
        var r,
          o,
          i,
          a = e(93),
          u = e(18),
          c = e(15),
          f = e(49),
          s = e(29),
          l = f("iterator"),
          p = false;
        [].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : p = true), null == r && (r = {}), s || c(r, l) || u(r, l, function () {
          return this;
        }), t2.exports = {
          IteratorPrototype: r,
          BUGGY_SAFARI_ITERATORS: p
        };
      }, function (t2, n, e) {
        var r = e(15),
          o = e(46),
          i = e(27),
          a = e(94),
          u = i("IE_PROTO"),
          c = Object.prototype;
        t2.exports = a ? Object.getPrototypeOf : function (t3) {
          return t3 = o(t3), r(t3, u) ? t3[u] : "function" == typeof t3.constructor && t3 instanceof t3.constructor ? t3.constructor.prototype : t3 instanceof Object ? c : null;
        };
      }, function (t2, n, e) {
        var r = e(6);
        t2.exports = !r(function () {
          function t3() {}
          return t3.prototype.constructor = null, Object.getPrototypeOf(new t3()) !== t3.prototype;
        });
      }, function (t2, n, e) {
        var r = e(19).f,
          o = e(15),
          i = e(49)("toStringTag");
        t2.exports = function (t3, n2, e2) {
          t3 && !o(t3 = e2 ? t3 : t3.prototype, i) && r(t3, i, {
            configurable: true,
            value: n2
          });
        };
      }, function (t2, n, e) {
        var r = e(20),
          o = e(97);
        t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
          var t3,
            n2 = false,
            e2 = {};
          try {
            (t3 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e2, []), n2 = e2 instanceof Array;
          } catch (t4) {}
          return function (e3, i) {
            return r(e3), o(i), n2 ? t3.call(e3, i) : e3.__proto__ = i, e3;
          };
        }() : void 0);
      }, function (t2, n, e) {
        var r = e(14);
        t2.exports = function (t3) {
          if (!r(t3) && null !== t3) throw TypeError("Can't set " + String(t3) + " as a prototype");
          return t3;
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(10),
          i = e(9),
          a = e(66),
          u = [].join,
          c = o != Object,
          f = a("join", ",");
        r({
          target: "Array",
          proto: true,
          forced: c || !f
        }, {
          join: function (t3) {
            return u.call(i(this), void 0 === t3 ? "," : t3);
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(100);
        r({
          target: "Array",
          proto: true,
          forced: o !== [].lastIndexOf
        }, {
          lastIndexOf: o
        });
      }, function (t2, n, e) {
        var r = e(9),
          o = e(40),
          i = e(39),
          a = e(66),
          u = e(67),
          c = Math.min,
          f = [].lastIndexOf,
          s = !!f && 1 / [1].lastIndexOf(1, -0) < 0,
          l = a("lastIndexOf"),
          p = u("indexOf", {
            ACCESSORS: true,
            1: 0
          }),
          h2 = s || !l || !p;
        t2.exports = h2 ? function (t3) {
          if (s) return f.apply(this, arguments) || 0;
          var n2 = r(this),
            e2 = i(n2.length),
            a2 = e2 - 1;
          for (arguments.length > 1 && (a2 = c(a2, o(arguments[1]))), a2 < 0 && (a2 = e2 + a2); a2 >= 0; a2--) if (a2 in n2 && n2[a2] === t3) return a2 || 0;
          return -1;
        } : f;
      }, function (t2, n, e) {
        var r = e(2),
          o = e(63).map,
          i = e(52),
          a = e(67),
          u = i("map"),
          c = a("map");
        r({
          target: "Array",
          proto: true,
          forced: !u || !c
        }, {
          map: function (t3) {
            return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(6),
          i = e(47);
        r({
          target: "Array",
          stat: true,
          forced: o(function () {
            function t3() {}
            return !(Array.of.call(t3) instanceof t3);
          })
        }, {
          of: function () {
            for (var t3 = 0, n2 = arguments.length, e2 = new ("function" == typeof this ? this : Array)(n2); n2 > t3;) i(e2, t3, arguments[t3++]);
            return e2.length = n2, e2;
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(104).left,
          i = e(66),
          a = e(67),
          u = i("reduce"),
          c = a("reduce", {
            1: 0
          });
        r({
          target: "Array",
          proto: true,
          forced: !u || !c
        }, {
          reduce: function (t3) {
            return o(this, t3, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }, function (t2, n, e) {
        var r = e(65),
          o = e(46),
          i = e(10),
          a = e(39),
          u = function (t3) {
            return function (n2, e2, u2, c) {
              r(e2);
              var f = o(n2),
                s = i(f),
                l = a(f.length),
                p = t3 ? l - 1 : 0,
                h2 = t3 ? -1 : 1;
              if (u2 < 2) for (;;) {
                if (p in s) {
                  c = s[p], p += h2;
                  break;
                }
                if (p += h2, t3 ? p < 0 : l <= p) throw TypeError("Reduce of empty array with no initial value");
              }
              for (; t3 ? p >= 0 : l > p; p += h2) p in s && (c = e2(c, s[p], p, f));
              return c;
            };
          };
        t2.exports = {
          left: u(false),
          right: u(true)
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(104).right,
          i = e(66),
          a = e(67),
          u = i("reduceRight"),
          c = a("reduce", {
            1: 0
          });
        r({
          target: "Array",
          proto: true,
          forced: !u || !c
        }, {
          reduceRight: function (t3) {
            return o(this, t3, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(14),
          i = e(45),
          a = e(41),
          u = e(39),
          c = e(9),
          f = e(47),
          s = e(49),
          l = e(52),
          p = e(67),
          h2 = l("slice"),
          v = p("slice", {
            ACCESSORS: true,
            0: 0,
            1: 2
          }),
          g = s("species"),
          d = [].slice,
          y = Math.max;
        r({
          target: "Array",
          proto: true,
          forced: !h2 || !v
        }, {
          slice: function (t3, n2) {
            var e2,
              r2,
              s2,
              l2 = c(this),
              p2 = u(l2.length),
              h3 = a(t3, p2),
              v2 = a(void 0 === n2 ? p2 : n2, p2);
            if (i(l2) && ("function" != typeof (e2 = l2.constructor) || e2 !== Array && !i(e2.prototype) ? o(e2) && null === (e2 = e2[g]) && (e2 = void 0) : e2 = void 0, e2 === Array || void 0 === e2)) return d.call(l2, h3, v2);
            for (r2 = new (void 0 === e2 ? Array : e2)(y(v2 - h3, 0)), s2 = 0; h3 < v2; h3++, s2++) h3 in l2 && f(r2, s2, l2[h3]);
            return r2.length = s2, r2;
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(63).some,
          i = e(66),
          a = e(67),
          u = i("some"),
          c = a("some");
        r({
          target: "Array",
          proto: true,
          forced: !u || !c
        }, {
          some: function (t3) {
            return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }, function (t2, n, e) {
        e(109)("Array");
      }, function (t2, n, e) {
        var r = e(34),
          o = e(19),
          i = e(49),
          a = e(5),
          u = i("species");
        t2.exports = function (t3) {
          var n2 = r(t3),
            e2 = o.f;
          a && n2 && !n2[u] && e2(n2, u, {
            configurable: true,
            get: function () {
              return this;
            }
          });
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(41),
          i = e(40),
          a = e(39),
          u = e(46),
          c = e(48),
          f = e(47),
          s = e(52),
          l = e(67),
          p = s("splice"),
          h2 = l("splice", {
            ACCESSORS: true,
            0: 0,
            1: 2
          }),
          v = Math.max,
          g = Math.min;
        r({
          target: "Array",
          proto: true,
          forced: !p || !h2
        }, {
          splice: function (t3, n2) {
            var e2,
              r2,
              s2,
              l2,
              p2,
              h3,
              d = u(this),
              y = a(d.length),
              x = o(t3, y),
              m = arguments.length;
            if (0 === m ? e2 = r2 = 0 : 1 === m ? (e2 = 0, r2 = y - x) : (e2 = m - 2, r2 = g(v(i(n2), 0), y - x)), y + e2 - r2 > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (s2 = c(d, r2), l2 = 0; l2 < r2; l2++) (p2 = x + l2) in d && f(s2, l2, d[p2]);
            if (s2.length = r2, e2 < r2) {
              for (l2 = x; l2 < y - r2; l2++) h3 = l2 + e2, (p2 = l2 + r2) in d ? d[h3] = d[p2] : delete d[h3];
              for (l2 = y; l2 > y - r2 + e2; l2--) delete d[l2 - 1];
            } else if (e2 > r2) for (l2 = y - r2; l2 > x; l2--) h3 = l2 + e2 - 1, (p2 = l2 + r2 - 1) in d ? d[h3] = d[p2] : delete d[h3];
            for (l2 = 0; l2 < e2; l2++) d[l2 + x] = arguments[l2 + 2];
            return d.length = y - r2 + e2, s2;
          }
        });
      }, function (t2, n, e) {
        e(57)("flat");
      }, function (t2, n, e) {
        e(57)("flatMap");
      }, function (t2, n, e) {
        var r = e(14),
          o = e(19),
          i = e(93),
          a = e(49)("hasInstance"),
          u = Function.prototype;
        a in u || o.f(u, a, {
          value: function (t3) {
            if ("function" != typeof this || !r(t3)) return false;
            if (!r(this.prototype)) return t3 instanceof this;
            for (; t3 = i(t3);) if (this.prototype === t3) return true;
            return false;
          }
        });
      }, function (t2, n, e) {
        var r = e(5),
          o = e(19).f,
          i = Function.prototype,
          a = i.toString,
          u = /^\s*function ([^ (]*)/;
        r && !("name" in i) && o(i, "name", {
          configurable: true,
          get: function () {
            try {
              return a.call(this).match(u)[1];
            } catch (t3) {
              return "";
            }
          }
        });
      }, function (t2, n, e) {
        e(2)({
          global: true
        }, {
          globalThis: e(3)
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(34),
          i = e(6),
          a = o("JSON", "stringify"),
          u = /[\uD800-\uDFFF]/g,
          c = /^[\uD800-\uDBFF]$/,
          f = /^[\uDC00-\uDFFF]$/,
          s = function (t3, n2, e2) {
            var r2 = e2.charAt(n2 - 1),
              o2 = e2.charAt(n2 + 1);
            return c.test(t3) && !f.test(o2) || f.test(t3) && !c.test(r2) ? "\\u" + t3.charCodeAt(0).toString(16) : t3;
          },
          l = i(function () {
            return '"\\udf06\\ud834"' !== a("\uDF06\uD834") || '"\\udead"' !== a("\uDEAD");
          });
        a && r({
          target: "JSON",
          stat: true,
          forced: l
        }, {
          stringify: function (t3, n2, e2) {
            var r2 = a.apply(null, arguments);
            return "string" == typeof r2 ? r2.replace(u, s) : r2;
          }
        });
      }, function (t2, n, e) {
        var r = e(3);
        e(95)(r.JSON, "JSON", true);
      }, function (t2, n, e) {
        var r = e(119),
          o = e(125);
        t2.exports = r("Map", function (t3) {
          return function () {
            return t3(this, arguments.length ? arguments[0] : void 0);
          };
        }, o);
      }, function (t2, n, e) {
        var r = e(2),
          o = e(3),
          i = e(44),
          a = e(21),
          u = e(120),
          c = e(122),
          f = e(123),
          s = e(14),
          l = e(6),
          p = e(86),
          h2 = e(95),
          v = e(124);
        t2.exports = function (t3, n2, e2) {
          var g = -1 !== t3.indexOf("Map"),
            d = -1 !== t3.indexOf("Weak"),
            y = g ? "set" : "add",
            x = o[t3],
            m = x && x.prototype,
            b = x,
            S = {},
            E = function (t4) {
              var n3 = m[t4];
              a(m, t4, "add" == t4 ? function (t5) {
                return n3.call(this, 0 === t5 ? 0 : t5), this;
              } : "delete" == t4 ? function (t5) {
                return !(d && !s(t5)) && n3.call(this, 0 === t5 ? 0 : t5);
              } : "get" == t4 ? function (t5) {
                return d && !s(t5) ? void 0 : n3.call(this, 0 === t5 ? 0 : t5);
              } : "has" == t4 ? function (t5) {
                return !(d && !s(t5)) && n3.call(this, 0 === t5 ? 0 : t5);
              } : function (t5, e3) {
                return n3.call(this, 0 === t5 ? 0 : t5, e3), this;
              });
            };
          if (i(t3, "function" != typeof x || !(d || m.forEach && !l(function () {
            new x().entries().next();
          })))) b = e2.getConstructor(n2, t3, g, y), u.REQUIRED = true;else if (i(t3, true)) {
            var w = new b(),
              O = w[y](d ? {} : -0, 1) != w,
              R = l(function () {
                w.has(1);
              }),
              A = p(function (t4) {
                new x(t4);
              }),
              j = !d && l(function () {
                for (var t4 = new x(), n3 = 5; n3--;) t4[y](n3, n3);
                return !t4.has(-0);
              });
            A || ((b = n2(function (n3, e3) {
              f(n3, b, t3);
              var r2 = v(new x(), n3, b);
              return null != e3 && c(e3, r2[y], r2, g), r2;
            })).prototype = m, m.constructor = b), (R || j) && (E("delete"), E("has"), g && E("get")), (j || O) && E(y), d && m.clear && delete m.clear;
          }
          return S[t3] = b, r({
            global: true,
            forced: b != x
          }, S), h2(b, t3), d || e2.setStrong(b, t3, g), b;
        };
      }, function (t2, n, e) {
        var r = e(31),
          o = e(14),
          i = e(15),
          a = e(19).f,
          u = e(30),
          c = e(121),
          f = u("meta"),
          s = 0,
          l = Object.isExtensible || function () {
            return true;
          },
          p = function (t3) {
            a(t3, f, {
              value: {
                objectID: "O" + ++s,
                weakData: {}
              }
            });
          },
          h2 = t2.exports = {
            REQUIRED: false,
            fastKey: function (t3, n2) {
              if (!o(t3)) return "symbol" == typeof t3 ? t3 : ("string" == typeof t3 ? "S" : "P") + t3;
              if (!i(t3, f)) {
                if (!l(t3)) return "F";
                if (!n2) return "E";
                p(t3);
              }
              return t3[f].objectID;
            },
            getWeakData: function (t3, n2) {
              if (!i(t3, f)) {
                if (!l(t3)) return true;
                if (!n2) return false;
                p(t3);
              }
              return t3[f].weakData;
            },
            onFreeze: function (t3) {
              return c && h2.REQUIRED && l(t3) && !i(t3, f) && p(t3), t3;
            }
          };
        r[f] = true;
      }, function (t2, n, e) {
        var r = e(6);
        t2.exports = !r(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      }, function (t2, n, e) {
        var r = e(20),
          o = e(81),
          i = e(39),
          a = e(64),
          u = e(83),
          c = e(80),
          f = function (t3, n2) {
            this.stopped = t3, this.result = n2;
          };
        (t2.exports = function (t3, n2, e2, s, l) {
          var p,
            h2,
            v,
            g,
            d,
            y,
            x,
            m = a(n2, e2, s ? 2 : 1);
          if (l) p = t3;else {
            if ("function" != typeof (h2 = u(t3))) throw TypeError("Target is not iterable");
            if (o(h2)) {
              for (v = 0, g = i(t3.length); g > v; v++) if ((d = s ? m(r(x = t3[v])[0], x[1]) : m(t3[v])) && d instanceof f) return d;
              return new f(false);
            }
            p = h2.call(t3);
          }
          for (y = p.next; !(x = y.call(p)).done;) if ("object" == typeof (d = c(p, m, x.value, s)) && d && d instanceof f) return d;
          return new f(false);
        }).stop = function (t3) {
          return new f(true, t3);
        };
      }, function (t2, n) {
        t2.exports = function (t3, n2, e) {
          if (!(t3 instanceof n2)) throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
          return t3;
        };
      }, function (t2, n, e) {
        var r = e(14),
          o = e(96);
        t2.exports = function (t3, n2, e2) {
          var i, a;
          return o && "function" == typeof (i = n2.constructor) && i !== e2 && r(a = i.prototype) && a !== e2.prototype && o(t3, a), t3;
        };
      }, function (t2, n, e) {
        var r = e(19).f,
          o = e(58),
          i = e(126),
          a = e(64),
          u = e(123),
          c = e(122),
          f = e(90),
          s = e(109),
          l = e(5),
          p = e(120).fastKey,
          h2 = e(25),
          v = h2.set,
          g = h2.getterFor;
        t2.exports = {
          getConstructor: function (t3, n2, e2, f2) {
            var s2 = t3(function (t4, r2) {
                u(t4, s2, n2), v(t4, {
                  type: n2,
                  index: o(null),
                  first: void 0,
                  last: void 0,
                  size: 0
                }), l || (t4.size = 0), null != r2 && c(r2, t4[f2], t4, e2);
              }),
              h3 = g(n2),
              d = function (t4, n3, e3) {
                var r2,
                  o2,
                  i3 = h3(t4),
                  a2 = y(t4, n3);
                return a2 ? a2.value = e3 : (i3.last = a2 = {
                  index: o2 = p(n3, true),
                  key: n3,
                  value: e3,
                  previous: r2 = i3.last,
                  next: void 0,
                  removed: false
                }, i3.first || (i3.first = a2), r2 && (r2.next = a2), l ? i3.size++ : t4.size++, "F" !== o2 && (i3.index[o2] = a2)), t4;
              },
              y = function (t4, n3) {
                var e3,
                  r2 = h3(t4),
                  o2 = p(n3);
                if ("F" !== o2) return r2.index[o2];
                for (e3 = r2.first; e3; e3 = e3.next) if (e3.key == n3) return e3;
              };
            return i(s2.prototype, {
              clear: function () {
                for (var t4 = h3(this), n3 = t4.index, e3 = t4.first; e3;) e3.removed = true, e3.previous && (e3.previous = e3.previous.next = void 0), delete n3[e3.index], e3 = e3.next;
                t4.first = t4.last = void 0, l ? t4.size = 0 : this.size = 0;
              },
              delete: function (t4) {
                var n3 = h3(this),
                  e3 = y(this, t4);
                if (e3) {
                  var r2 = e3.next,
                    o2 = e3.previous;
                  delete n3.index[e3.index], e3.removed = true, o2 && (o2.next = r2), r2 && (r2.previous = o2), n3.first == e3 && (n3.first = r2), n3.last == e3 && (n3.last = o2), l ? n3.size-- : this.size--;
                }
                return !!e3;
              },
              forEach: function (t4) {
                for (var n3, e3 = h3(this), r2 = a(t4, arguments.length > 1 ? arguments[1] : void 0, 3); n3 = n3 ? n3.next : e3.first;) for (r2(n3.value, n3.key, this); n3 && n3.removed;) n3 = n3.previous;
              },
              has: function (t4) {
                return !!y(this, t4);
              }
            }), i(s2.prototype, e2 ? {
              get: function (t4) {
                var n3 = y(this, t4);
                return n3 && n3.value;
              },
              set: function (t4, n3) {
                return d(this, 0 === t4 ? 0 : t4, n3);
              }
            } : {
              add: function (t4) {
                return d(this, t4 = 0 === t4 ? 0 : t4, t4);
              }
            }), l && r(s2.prototype, "size", {
              get: function () {
                return h3(this).size;
              }
            }), s2;
          },
          setStrong: function (t3, n2, e2) {
            var r2 = n2 + " Iterator",
              o2 = g(n2),
              i3 = g(r2);
            f(t3, n2, function (t4, n3) {
              v(this, {
                type: r2,
                target: t4,
                state: o2(t4),
                kind: n3,
                last: void 0
              });
            }, function () {
              for (var t4 = i3(this), n3 = t4.kind, e3 = t4.last; e3 && e3.removed;) e3 = e3.previous;
              return t4.target && (t4.last = e3 = e3 ? e3.next : t4.state.first) ? "keys" == n3 ? {
                value: e3.key,
                done: false
              } : "values" == n3 ? {
                value: e3.value,
                done: false
              } : {
                value: [e3.key, e3.value],
                done: false
              } : (t4.target = void 0, {
                value: void 0,
                done: true
              });
            }, e2 ? "entries" : "values", !e2, true), s(n2);
          }
        };
      }, function (t2, n, e) {
        var r = e(21);
        t2.exports = function (t3, n2, e2) {
          for (var o in n2) r(t3, o, n2[o], e2);
          return t3;
        };
      }, function (t2, n, e) {
        var r = e(5),
          o = e(3),
          i = e(44),
          a = e(21),
          u = e(15),
          c = e(11),
          f = e(124),
          s = e(13),
          l = e(6),
          p = e(58),
          h2 = e(36).f,
          v = e(4).f,
          g = e(19).f,
          d = e(128).trim,
          y = o.Number,
          x = y.prototype,
          m = "Number" == c(p(x)),
          b = function (t3) {
            var n2,
              e2,
              r2,
              o2,
              i3,
              a2,
              u2,
              c2,
              f2 = s(t3, false);
            if ("string" == typeof f2 && f2.length > 2) {
              if (43 === (n2 = (f2 = d(f2)).charCodeAt(0)) || 45 === n2) {
                if (88 === (e2 = f2.charCodeAt(2)) || 120 === e2) return NaN;
              } else if (48 === n2) {
                switch (f2.charCodeAt(1)) {
                  case 66:
                  case 98:
                    r2 = 2, o2 = 49;
                    break;
                  case 79:
                  case 111:
                    r2 = 8, o2 = 55;
                    break;
                  default:
                    return +f2;
                }
                for (a2 = (i3 = f2.slice(2)).length, u2 = 0; u2 < a2; u2++) if ((c2 = i3.charCodeAt(u2)) < 48 || c2 > o2) return NaN;
                return parseInt(i3, r2);
              }
            }
            return +f2;
          };
        if (i("Number", !y(" 0o1") || !y("0b1") || y("+0x1"))) {
          for (var S, E = function (t3) {
              var n2 = arguments.length < 1 ? 0 : t3,
                e2 = this;
              return e2 instanceof E && (m ? l(function () {
                x.valueOf.call(e2);
              }) : "Number" != c(e2)) ? f(new y(b(n2)), e2, E) : b(n2);
            }, w = r ? h2(y) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), O = 0; w.length > O; O++) u(y, S = w[O]) && !u(E, S) && g(E, S, v(y, S));
          E.prototype = x, x.constructor = E, a(o, "Number", E);
        }
      }, function (t2, n, e) {
        var r = e(12),
          o = "[" + e(129) + "]",
          i = RegExp("^" + o + o + "*"),
          a = RegExp(o + o + "*$"),
          u = function (t3) {
            return function (n2) {
              var e2 = String(r(n2));
              return 1 & t3 && (e2 = e2.replace(i, "")), 2 & t3 && (e2 = e2.replace(a, "")), e2;
            };
          };
        t2.exports = {
          start: u(1),
          end: u(2),
          trim: u(3)
        };
      }, function (t2, n) {
        t2.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
      }, function (t2, n, e) {
        e(2)({
          target: "Number",
          stat: true
        }, {
          EPSILON: Math.pow(2, -52)
        });
      }, function (t2, n, e) {
        e(2)({
          target: "Number",
          stat: true
        }, {
          isFinite: e(132)
        });
      }, function (t2, n, e) {
        var r = e(3).isFinite;
        t2.exports = Number.isFinite || function (t3) {
          return "number" == typeof t3 && r(t3);
        };
      }, function (t2, n, e) {
        e(2)({
          target: "Number",
          stat: true
        }, {
          isInteger: e(134)
        });
      }, function (t2, n, e) {
        var r = e(14),
          o = Math.floor;
        t2.exports = function (t3) {
          return !r(t3) && isFinite(t3) && o(t3) === t3;
        };
      }, function (t2, n, e) {
        e(2)({
          target: "Number",
          stat: true
        }, {
          isNaN: function (t3) {
            return t3 != t3;
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(134),
          i = Math.abs;
        r({
          target: "Number",
          stat: true
        }, {
          isSafeInteger: function (t3) {
            return o(t3) && i(t3) <= 9007199254740991;
          }
        });
      }, function (t2, n, e) {
        e(2)({
          target: "Number",
          stat: true
        }, {
          MAX_SAFE_INTEGER: 9007199254740991
        });
      }, function (t2, n, e) {
        e(2)({
          target: "Number",
          stat: true
        }, {
          MIN_SAFE_INTEGER: -9007199254740991
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(140);
        r({
          target: "Number",
          stat: true,
          forced: Number.parseFloat != o
        }, {
          parseFloat: o
        });
      }, function (t2, n, e) {
        var r = e(3),
          o = e(128).trim,
          i = e(129),
          a = r.parseFloat,
          u = 1 / a(i + "-0") != -1 / 0;
        t2.exports = u ? function (t3) {
          var n2 = o(String(t3)),
            e2 = a(n2);
          return 0 === e2 && "-" == n2.charAt(0) ? -0 : e2;
        } : a;
      }, function (t2, n, e) {
        var r = e(2),
          o = e(142);
        r({
          target: "Number",
          stat: true,
          forced: Number.parseInt != o
        }, {
          parseInt: o
        });
      }, function (t2, n, e) {
        var r = e(3),
          o = e(128).trim,
          i = e(129),
          a = r.parseInt,
          u = /^[+-]?0[Xx]/,
          c = 8 !== a(i + "08") || 22 !== a(i + "0x16");
        t2.exports = c ? function (t3, n2) {
          var e2 = o(String(t3));
          return a(e2, n2 >>> 0 || (u.test(e2) ? 16 : 10));
        } : a;
      }, function (t2, n, e) {
        var r = e(2),
          o = e(40),
          i = e(144),
          a = e(145),
          u = e(6),
          c = 1 .toFixed,
          f = Math.floor,
          s = function (t3, n2, e2) {
            return 0 === n2 ? e2 : n2 % 2 == 1 ? s(t3, n2 - 1, e2 * t3) : s(t3 * t3, n2 / 2, e2);
          };
        r({
          target: "Number",
          proto: true,
          forced: c && ("0.000" !== 8e-5.toFixed(3) || "1" !== 0.9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 1000000000000000100 .toFixed(0)) || !u(function () {
            c.call({});
          })
        }, {
          toFixed: function (t3) {
            var n2,
              e2,
              r2,
              u2,
              c2 = i(this),
              l = o(t3),
              p = [0, 0, 0, 0, 0, 0],
              h2 = "",
              v = "0",
              g = function (t4, n3) {
                for (var e3 = -1, r3 = n3; ++e3 < 6;) r3 += t4 * p[e3], p[e3] = r3 % 1e7, r3 = f(r3 / 1e7);
              },
              d = function (t4) {
                for (var n3 = 6, e3 = 0; --n3 >= 0;) e3 += p[n3], p[n3] = f(e3 / t4), e3 = e3 % t4 * 1e7;
              },
              y = function () {
                for (var t4 = 6, n3 = ""; --t4 >= 0;) if ("" !== n3 || 0 === t4 || 0 !== p[t4]) {
                  var e3 = String(p[t4]);
                  n3 = "" === n3 ? e3 : n3 + a.call("0", 7 - e3.length) + e3;
                }
                return n3;
              };
            if (l < 0 || l > 20) throw RangeError("Incorrect fraction digits");
            if (c2 != c2) return "NaN";
            if (c2 <= -1e21 || c2 >= 1e21) return String(c2);
            if (c2 < 0 && (h2 = "-", c2 = -c2), c2 > 1e-21) if (e2 = (n2 = function (t4) {
              for (var n3 = 0, e3 = t4; e3 >= 4096;) n3 += 12, e3 /= 4096;
              for (; e3 >= 2;) n3 += 1, e3 /= 2;
              return n3;
            }(c2 * s(2, 69, 1)) - 69) < 0 ? c2 * s(2, -n2, 1) : c2 / s(2, n2, 1), e2 *= 4503599627370496, (n2 = 52 - n2) > 0) {
              for (g(0, e2), r2 = l; r2 >= 7;) g(1e7, 0), r2 -= 7;
              for (g(s(10, r2, 1), 0), r2 = n2 - 1; r2 >= 23;) d(1 << 23), r2 -= 23;
              d(1 << r2), g(1, 1), d(2), v = y();
            } else g(0, e2), g(1 << -n2, 0), v = y() + a.call("0", l);
            return v = l > 0 ? h2 + ((u2 = v.length) <= l ? "0." + a.call("0", l - u2) + v : v.slice(0, u2 - l) + "." + v.slice(u2 - l)) : h2 + v;
          }
        });
      }, function (t2, n, e) {
        var r = e(11);
        t2.exports = function (t3) {
          if ("number" != typeof t3 && "Number" != r(t3)) throw TypeError("Incorrect invocation");
          return +t3;
        };
      }, function (t2, n, e) {
        var r = e(40),
          o = e(12);
        t2.exports = "".repeat || function (t3) {
          var n2 = String(o(this)),
            e2 = "",
            i = r(t3);
          if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
          for (; i > 0; (i >>>= 1) && (n2 += n2)) 1 & i && (e2 += n2);
          return e2;
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(147);
        r({
          target: "Object",
          stat: true,
          forced: Object.assign !== o
        }, {
          assign: o
        });
      }, function (t2, n, e) {
        var r = e(5),
          o = e(6),
          i = e(60),
          a = e(43),
          u = e(7),
          c = e(46),
          f = e(10),
          s = Object.assign,
          l = Object.defineProperty;
        t2.exports = !s || o(function () {
          if (r && 1 !== s({
            b: 1
          }, s(l({}, "a", {
            enumerable: true,
            get: function () {
              l(this, "b", {
                value: 3,
                enumerable: false
              });
            }
          }), {
            b: 2
          })).b) return true;
          var t3 = {},
            n2 = {},
            e2 = Symbol();
          return t3[e2] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t4) {
            n2[t4] = t4;
          }), 7 != s({}, t3)[e2] || "abcdefghijklmnopqrst" != i(s({}, n2)).join("");
        }) ? function (t3, n2) {
          for (var e2 = c(t3), o2 = arguments.length, s2 = 1, l2 = a.f, p = u.f; o2 > s2;) for (var h2, v = f(arguments[s2++]), g = l2 ? i(v).concat(l2(v)) : i(v), d = g.length, y = 0; d > y;) h2 = g[y++], r && !p.call(v, h2) || (e2[h2] = v[h2]);
          return e2;
        } : s;
      }, function (t2, n, e) {
        var r = e(2),
          o = e(5),
          i = e(149),
          a = e(46),
          u = e(65),
          c = e(19);
        o && r({
          target: "Object",
          proto: true,
          forced: i
        }, {
          __defineGetter__: function (t3, n2) {
            c.f(a(this), t3, {
              get: u(n2),
              enumerable: true,
              configurable: true
            });
          }
        });
      }, function (t2, n, e) {
        var r = e(29),
          o = e(3),
          i = e(6);
        t2.exports = r || !i(function () {
          var t3 = Math.random();
          __defineSetter__.call(null, t3, function () {}), delete o[t3];
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(5),
          i = e(149),
          a = e(46),
          u = e(65),
          c = e(19);
        o && r({
          target: "Object",
          proto: true,
          forced: i
        }, {
          __defineSetter__: function (t3, n2) {
            c.f(a(this), t3, {
              set: u(n2),
              enumerable: true,
              configurable: true
            });
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(152).entries;
        r({
          target: "Object",
          stat: true
        }, {
          entries: function (t3) {
            return o(t3);
          }
        });
      }, function (t2, n, e) {
        var r = e(5),
          o = e(60),
          i = e(9),
          a = e(7).f,
          u = function (t3) {
            return function (n2) {
              for (var e2, u2 = i(n2), c = o(u2), f = c.length, s = 0, l = []; f > s;) e2 = c[s++], r && !a.call(u2, e2) || l.push(t3 ? [e2, u2[e2]] : u2[e2]);
              return l;
            };
          };
        t2.exports = {
          entries: u(true),
          values: u(false)
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(121),
          i = e(6),
          a = e(14),
          u = e(120).onFreeze,
          c = Object.freeze;
        r({
          target: "Object",
          stat: true,
          forced: i(function () {
            c(1);
          }),
          sham: !o
        }, {
          freeze: function (t3) {
            return c && a(t3) ? c(u(t3)) : t3;
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(122),
          i = e(47);
        r({
          target: "Object",
          stat: true
        }, {
          fromEntries: function (t3) {
            var n2 = {};
            return o(t3, function (t4, e2) {
              i(n2, t4, e2);
            }, void 0, true), n2;
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(6),
          i = e(9),
          a = e(4).f,
          u = e(5),
          c = o(function () {
            a(1);
          });
        r({
          target: "Object",
          stat: true,
          forced: !u || c,
          sham: !u
        }, {
          getOwnPropertyDescriptor: function (t3, n2) {
            return a(i(t3), n2);
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(5),
          i = e(33),
          a = e(9),
          u = e(4),
          c = e(47);
        r({
          target: "Object",
          stat: true,
          sham: !o
        }, {
          getOwnPropertyDescriptors: function (t3) {
            for (var n2, e2, r2 = a(t3), o2 = u.f, f = i(r2), s = {}, l = 0; f.length > l;) void 0 !== (e2 = o2(r2, n2 = f[l++])) && c(s, n2, e2);
            return s;
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(6),
          i = e(158).f;
        r({
          target: "Object",
          stat: true,
          forced: o(function () {
            return !Object.getOwnPropertyNames(1);
          })
        }, {
          getOwnPropertyNames: i
        });
      }, function (t2, n, e) {
        var r = e(9),
          o = e(36).f,
          i = {}.toString,
          a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t2.exports.f = function (t3) {
          return a && "[object Window]" == i.call(t3) ? function (t4) {
            try {
              return o(t4);
            } catch (t5) {
              return a.slice();
            }
          }(t3) : o(r(t3));
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(6),
          i = e(46),
          a = e(93),
          u = e(94);
        r({
          target: "Object",
          stat: true,
          forced: o(function () {
            a(1);
          }),
          sham: !u
        }, {
          getPrototypeOf: function (t3) {
            return a(i(t3));
          }
        });
      }, function (t2, n, e) {
        e(2)({
          target: "Object",
          stat: true
        }, {
          is: e(161)
        });
      }, function (t2, n) {
        t2.exports = Object.is || function (t3, n2) {
          return t3 === n2 ? 0 !== t3 || 1 / t3 == 1 / n2 : t3 != t3 && n2 != n2;
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(6),
          i = e(14),
          a = Object.isExtensible;
        r({
          target: "Object",
          stat: true,
          forced: o(function () {
            a(1);
          })
        }, {
          isExtensible: function (t3) {
            return !!i(t3) && (!a || a(t3));
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(6),
          i = e(14),
          a = Object.isFrozen;
        r({
          target: "Object",
          stat: true,
          forced: o(function () {
            a(1);
          })
        }, {
          isFrozen: function (t3) {
            return !i(t3) || !!a && a(t3);
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(6),
          i = e(14),
          a = Object.isSealed;
        r({
          target: "Object",
          stat: true,
          forced: o(function () {
            a(1);
          })
        }, {
          isSealed: function (t3) {
            return !i(t3) || !!a && a(t3);
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(46),
          i = e(60);
        r({
          target: "Object",
          stat: true,
          forced: e(6)(function () {
            i(1);
          })
        }, {
          keys: function (t3) {
            return i(o(t3));
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(5),
          i = e(149),
          a = e(46),
          u = e(13),
          c = e(93),
          f = e(4).f;
        o && r({
          target: "Object",
          proto: true,
          forced: i
        }, {
          __lookupGetter__: function (t3) {
            var n2,
              e2 = a(this),
              r2 = u(t3, true);
            do {
              if (n2 = f(e2, r2)) return n2.get;
            } while (e2 = c(e2));
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(5),
          i = e(149),
          a = e(46),
          u = e(13),
          c = e(93),
          f = e(4).f;
        o && r({
          target: "Object",
          proto: true,
          forced: i
        }, {
          __lookupSetter__: function (t3) {
            var n2,
              e2 = a(this),
              r2 = u(t3, true);
            do {
              if (n2 = f(e2, r2)) return n2.set;
            } while (e2 = c(e2));
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(14),
          i = e(120).onFreeze,
          a = e(121),
          u = e(6),
          c = Object.preventExtensions;
        r({
          target: "Object",
          stat: true,
          forced: u(function () {
            c(1);
          }),
          sham: !a
        }, {
          preventExtensions: function (t3) {
            return c && o(t3) ? c(i(t3)) : t3;
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(14),
          i = e(120).onFreeze,
          a = e(121),
          u = e(6),
          c = Object.seal;
        r({
          target: "Object",
          stat: true,
          forced: u(function () {
            c(1);
          }),
          sham: !a
        }, {
          seal: function (t3) {
            return c && o(t3) ? c(i(t3)) : t3;
          }
        });
      }, function (t2, n, e) {
        var r = e(85),
          o = e(21),
          i = e(171);
        r || o(Object.prototype, "toString", i, {
          unsafe: true
        });
      }, function (t2, n, e) {
        var r = e(85),
          o = e(84);
        t2.exports = r ? {}.toString : function () {
          return "[object " + o(this) + "]";
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(152).values;
        r({
          target: "Object",
          stat: true
        }, {
          values: function (t3) {
            return o(t3);
          }
        });
      }, function (t2, n, e) {
        var r,
          o,
          i,
          a,
          u = e(2),
          c = e(29),
          f = e(3),
          s = e(34),
          l = e(174),
          p = e(21),
          h2 = e(126),
          v = e(95),
          g = e(109),
          d = e(14),
          y = e(65),
          x = e(123),
          m = e(11),
          b = e(23),
          S = e(122),
          E = e(86),
          w = e(175),
          O = e(176).set,
          R = e(178),
          A = e(179),
          j = e(181),
          I = e(180),
          k = e(182),
          P = e(25),
          L = e(44),
          T = e(49),
          _ = e(53),
          U = T("species"),
          N = "Promise",
          C = P.get,
          F = P.set,
          M = P.getterFor(N),
          z = l,
          D = f.TypeError,
          q = f.document,
          B = f.process,
          W = s("fetch"),
          $ = I.f,
          G = $,
          V = "process" == m(B),
          X = !!(q && q.createEvent && f.dispatchEvent),
          Y = L(N, function () {
            if (!(b(z) !== String(z))) {
              if (66 === _) return true;
              if (!V && "function" != typeof PromiseRejectionEvent) return true;
            }
            if (c && !z.prototype.finally) return true;
            if (_ >= 51 && /native code/.test(z)) return false;
            var t3 = z.resolve(1),
              n2 = function (t4) {
                t4(function () {}, function () {});
              };
            return (t3.constructor = {})[U] = n2, !(t3.then(function () {}) instanceof n2);
          }),
          K = Y || !E(function (t3) {
            z.all(t3).catch(function () {});
          }),
          J = function (t3) {
            var n2;
            return !(!d(t3) || "function" != typeof (n2 = t3.then)) && n2;
          },
          H = function (t3, n2, e2) {
            if (!n2.notified) {
              n2.notified = true;
              var r2 = n2.reactions;
              R(function () {
                for (var o2 = n2.value, i3 = 1 == n2.state, a2 = 0; r2.length > a2;) {
                  var u2,
                    c2,
                    f2,
                    s2 = r2[a2++],
                    l2 = i3 ? s2.ok : s2.fail,
                    p2 = s2.resolve,
                    h3 = s2.reject,
                    v2 = s2.domain;
                  try {
                    l2 ? (i3 || (2 === n2.rejection && nt(t3, n2), n2.rejection = 1), true === l2 ? u2 = o2 : (v2 && v2.enter(), u2 = l2(o2), v2 && (v2.exit(), f2 = true)), u2 === s2.promise ? h3(D("Promise-chain cycle")) : (c2 = J(u2)) ? c2.call(u2, p2, h3) : p2(u2)) : h3(o2);
                  } catch (t4) {
                    v2 && !f2 && v2.exit(), h3(t4);
                  }
                }
                n2.reactions = [], n2.notified = false, e2 && !n2.rejection && Z(t3, n2);
              });
            }
          },
          Q = function (t3, n2, e2) {
            var r2, o2;
            X ? ((r2 = q.createEvent("Event")).promise = n2, r2.reason = e2, r2.initEvent(t3, false, true), f.dispatchEvent(r2)) : r2 = {
              promise: n2,
              reason: e2
            }, (o2 = f["on" + t3]) ? o2(r2) : "unhandledrejection" === t3 && j("Unhandled promise rejection", e2);
          },
          Z = function (t3, n2) {
            O.call(f, function () {
              var e2,
                r2 = n2.value;
              if (tt(n2) && (e2 = k(function () {
                V ? B.emit("unhandledRejection", r2, t3) : Q("unhandledrejection", t3, r2);
              }), n2.rejection = V || tt(n2) ? 2 : 1, e2.error)) throw e2.value;
            });
          },
          tt = function (t3) {
            return 1 !== t3.rejection && !t3.parent;
          },
          nt = function (t3, n2) {
            O.call(f, function () {
              V ? B.emit("rejectionHandled", t3) : Q("rejectionhandled", t3, n2.value);
            });
          },
          et = function (t3, n2, e2, r2) {
            return function (o2) {
              t3(n2, e2, o2, r2);
            };
          },
          rt = function (t3, n2, e2, r2) {
            n2.done || (n2.done = true, r2 && (n2 = r2), n2.value = e2, n2.state = 2, H(t3, n2, true));
          },
          ot = function (t3, n2, e2, r2) {
            if (!n2.done) {
              n2.done = true, r2 && (n2 = r2);
              try {
                if (t3 === e2) throw D("Promise can't be resolved itself");
                var o2 = J(e2);
                o2 ? R(function () {
                  var r3 = {
                    done: false
                  };
                  try {
                    o2.call(e2, et(ot, t3, r3, n2), et(rt, t3, r3, n2));
                  } catch (e3) {
                    rt(t3, r3, e3, n2);
                  }
                }) : (n2.value = e2, n2.state = 1, H(t3, n2, false));
              } catch (e3) {
                rt(t3, {
                  done: false
                }, e3, n2);
              }
            }
          };
        Y && (z = function (t3) {
          x(this, z, N), y(t3), r.call(this);
          var n2 = C(this);
          try {
            t3(et(ot, this, n2), et(rt, this, n2));
          } catch (t4) {
            rt(this, n2, t4);
          }
        }, (r = function (t3) {
          F(this, {
            type: N,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: 0,
            value: void 0
          });
        }).prototype = h2(z.prototype, {
          then: function (t3, n2) {
            var e2 = M(this),
              r2 = $(w(this, z));
            return r2.ok = "function" != typeof t3 || t3, r2.fail = "function" == typeof n2 && n2, r2.domain = V ? B.domain : void 0, e2.parent = true, e2.reactions.push(r2), 0 != e2.state && H(this, e2, false), r2.promise;
          },
          catch: function (t3) {
            return this.then(void 0, t3);
          }
        }), o = function () {
          var t3 = new r(),
            n2 = C(t3);
          this.promise = t3, this.resolve = et(ot, t3, n2), this.reject = et(rt, t3, n2);
        }, I.f = $ = function (t3) {
          return t3 === z || t3 === i ? new o(t3) : G(t3);
        }, c || "function" != typeof l || (a = l.prototype.then, p(l.prototype, "then", function (t3, n2) {
          var e2 = this;
          return new z(function (t4, n3) {
            a.call(e2, t4, n3);
          }).then(t3, n2);
        }, {
          unsafe: true
        }), "function" == typeof W && u({
          global: true,
          enumerable: true,
          forced: true
        }, {
          fetch: function (t3) {
            return A(z, W.apply(f, arguments));
          }
        }))), u({
          global: true,
          wrap: true,
          forced: Y
        }, {
          Promise: z
        }), v(z, N, false, true), g(N), i = s(N), u({
          target: N,
          stat: true,
          forced: Y
        }, {
          reject: function (t3) {
            var n2 = $(this);
            return n2.reject.call(void 0, t3), n2.promise;
          }
        }), u({
          target: N,
          stat: true,
          forced: c || Y
        }, {
          resolve: function (t3) {
            return A(c && this === i ? z : this, t3);
          }
        }), u({
          target: N,
          stat: true,
          forced: K
        }, {
          all: function (t3) {
            var n2 = this,
              e2 = $(n2),
              r2 = e2.resolve,
              o2 = e2.reject,
              i3 = k(function () {
                var e3 = y(n2.resolve),
                  i4 = [],
                  a2 = 0,
                  u2 = 1;
                S(t3, function (t4) {
                  var c2 = a2++,
                    f2 = false;
                  i4.push(void 0), u2++, e3.call(n2, t4).then(function (t5) {
                    f2 || (f2 = true, i4[c2] = t5, --u2 || r2(i4));
                  }, o2);
                }), --u2 || r2(i4);
              });
            return i3.error && o2(i3.value), e2.promise;
          },
          race: function (t3) {
            var n2 = this,
              e2 = $(n2),
              r2 = e2.reject,
              o2 = k(function () {
                var o3 = y(n2.resolve);
                S(t3, function (t4) {
                  o3.call(n2, t4).then(e2.resolve, r2);
                });
              });
            return o2.error && r2(o2.value), e2.promise;
          }
        });
      }, function (t2, n, e) {
        var r = e(3);
        t2.exports = r.Promise;
      }, function (t2, n, e) {
        var r = e(20),
          o = e(65),
          i = e(49)("species");
        t2.exports = function (t3, n2) {
          var e2,
            a = r(t3).constructor;
          return void 0 === a || null == (e2 = r(a)[i]) ? n2 : o(e2);
        };
      }, function (t2, n, e) {
        var r,
          o,
          i,
          a = e(3),
          u = e(6),
          c = e(11),
          f = e(64),
          s = e(61),
          l = e(17),
          p = e(177),
          h2 = a.location,
          v = a.setImmediate,
          g = a.clearImmediate,
          d = a.process,
          y = a.MessageChannel,
          x = a.Dispatch,
          m = 0,
          b = {},
          S = function (t3) {
            if (b.hasOwnProperty(t3)) {
              var n2 = b[t3];
              delete b[t3], n2();
            }
          },
          E = function (t3) {
            return function () {
              S(t3);
            };
          },
          w = function (t3) {
            S(t3.data);
          },
          O = function (t3) {
            a.postMessage(t3 + "", h2.protocol + "//" + h2.host);
          };
        v && g || (v = function (t3) {
          for (var n2 = [], e2 = 1; arguments.length > e2;) n2.push(arguments[e2++]);
          return b[++m] = function () {
            ("function" == typeof t3 ? t3 : Function(t3)).apply(void 0, n2);
          }, r(m), m;
        }, g = function (t3) {
          delete b[t3];
        }, "process" == c(d) ? r = function (t3) {
          d.nextTick(E(t3));
        } : x && x.now ? r = function (t3) {
          x.now(E(t3));
        } : y && !p ? (i = (o = new y()).port2, o.port1.onmessage = w, r = f(i.postMessage, i, 1)) : !a.addEventListener || "function" != typeof postMessage || a.importScripts || u(O) || "file:" === h2.protocol ? r = "onreadystatechange" in l("script") ? function (t3) {
          s.appendChild(l("script")).onreadystatechange = function () {
            s.removeChild(this), S(t3);
          };
        } : function (t3) {
          setTimeout(E(t3), 0);
        } : (r = O, a.addEventListener("message", w, false))), t2.exports = {
          set: v,
          clear: g
        };
      }, function (t2, n, e) {
        var r = e(54);
        t2.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
      }, function (t2, n, e) {
        var r,
          o,
          i,
          a,
          u,
          c,
          f,
          s,
          l = e(3),
          p = e(4).f,
          h2 = e(11),
          v = e(176).set,
          g = e(177),
          d = l.MutationObserver || l.WebKitMutationObserver,
          y = l.process,
          x = l.Promise,
          m = "process" == h2(y),
          b = p(l, "queueMicrotask"),
          S = b && b.value;
        S || (r = function () {
          var t3, n2;
          for (m && (t3 = y.domain) && t3.exit(); o;) {
            n2 = o.fn, o = o.next;
            try {
              n2();
            } catch (t4) {
              throw o ? a() : i = void 0, t4;
            }
          }
          i = void 0, t3 && t3.enter();
        }, m ? a = function () {
          y.nextTick(r);
        } : d && !g ? (u = true, c = document.createTextNode(""), new d(r).observe(c, {
          characterData: true
        }), a = function () {
          c.data = u = !u;
        }) : x && x.resolve ? (f = x.resolve(void 0), s = f.then, a = function () {
          s.call(f, r);
        }) : a = function () {
          v.call(l, r);
        }), t2.exports = S || function (t3) {
          var n2 = {
            fn: t3,
            next: void 0
          };
          i && (i.next = n2), o || (o = n2, a()), i = n2;
        };
      }, function (t2, n, e) {
        var r = e(20),
          o = e(14),
          i = e(180);
        t2.exports = function (t3, n2) {
          if (r(t3), o(n2) && n2.constructor === t3) return n2;
          var e2 = i.f(t3);
          return (0, e2.resolve)(n2), e2.promise;
        };
      }, function (t2, n, e) {
        var r = e(65),
          o = function (t3) {
            var n2, e2;
            this.promise = new t3(function (t4, r2) {
              if (void 0 !== n2 || void 0 !== e2) throw TypeError("Bad Promise constructor");
              n2 = t4, e2 = r2;
            }), this.resolve = r(n2), this.reject = r(e2);
          };
        t2.exports.f = function (t3) {
          return new o(t3);
        };
      }, function (t2, n, e) {
        var r = e(3);
        t2.exports = function (t3, n2) {
          var e2 = r.console;
          e2 && e2.error && (1 === arguments.length ? e2.error(t3) : e2.error(t3, n2));
        };
      }, function (t2, n) {
        t2.exports = function (t3) {
          try {
            return {
              error: false,
              value: t3()
            };
          } catch (t4) {
            return {
              error: true,
              value: t4
            };
          }
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(65),
          i = e(180),
          a = e(182),
          u = e(122);
        r({
          target: "Promise",
          stat: true
        }, {
          allSettled: function (t3) {
            var n2 = this,
              e2 = i.f(n2),
              r2 = e2.resolve,
              c = e2.reject,
              f = a(function () {
                var e3 = o(n2.resolve),
                  i3 = [],
                  a2 = 0,
                  c2 = 1;
                u(t3, function (t4) {
                  var o2 = a2++,
                    u2 = false;
                  i3.push(void 0), c2++, e3.call(n2, t4).then(function (t5) {
                    u2 || (u2 = true, i3[o2] = {
                      status: "fulfilled",
                      value: t5
                    }, --c2 || r2(i3));
                  }, function (t5) {
                    u2 || (u2 = true, i3[o2] = {
                      status: "rejected",
                      reason: t5
                    }, --c2 || r2(i3));
                  });
                }), --c2 || r2(i3);
              });
            return f.error && c(f.value), e2.promise;
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(29),
          i = e(174),
          a = e(6),
          u = e(34),
          c = e(175),
          f = e(179),
          s = e(21);
        r({
          target: "Promise",
          proto: true,
          real: true,
          forced: !!i && a(function () {
            i.prototype.finally.call({
              then: function () {}
            }, function () {});
          })
        }, {
          finally: function (t3) {
            var n2 = c(this, u("Promise")),
              e2 = "function" == typeof t3;
            return this.then(e2 ? function (e3) {
              return f(n2, t3()).then(function () {
                return e3;
              });
            } : t3, e2 ? function (e3) {
              return f(n2, t3()).then(function () {
                throw e3;
              });
            } : t3);
          }
        }), o || "function" != typeof i || i.prototype.finally || s(i.prototype, "finally", u("Promise").prototype.finally);
      }, function (t2, n, e) {
        var r = e(5),
          o = e(3),
          i = e(44),
          a = e(124),
          u = e(19).f,
          c = e(36).f,
          f = e(186),
          s = e(187),
          l = e(188),
          p = e(21),
          h2 = e(6),
          v = e(25).set,
          g = e(109),
          d = e(49)("match"),
          y = o.RegExp,
          x = y.prototype,
          m = /a/g,
          b = /a/g,
          S = new y(m) !== m,
          E = l.UNSUPPORTED_Y;
        if (r && i("RegExp", !S || E || h2(function () {
          return b[d] = false, y(m) != m || y(b) == b || "/a/i" != y(m, "i");
        }))) {
          for (var w = function (t3, n2) {
              var e2,
                r2 = this instanceof w,
                o2 = f(t3),
                i3 = void 0 === n2;
              if (!r2 && o2 && t3.constructor === w && i3) return t3;
              S ? o2 && !i3 && (t3 = t3.source) : t3 instanceof w && (i3 && (n2 = s.call(t3)), t3 = t3.source), E && (e2 = !!n2 && n2.indexOf("y") > -1) && (n2 = n2.replace(/y/g, ""));
              var u2 = a(S ? new y(t3, n2) : y(t3, n2), r2 ? this : x, w);
              return E && e2 && v(u2, {
                sticky: e2
              }), u2;
            }, O = function (t3) {
              (t3 in w) || u(w, t3, {
                configurable: true,
                get: function () {
                  return y[t3];
                },
                set: function (n2) {
                  y[t3] = n2;
                }
              });
            }, R = c(y), A = 0; R.length > A;) O(R[A++]);
          x.constructor = w, w.prototype = x, p(o, "RegExp", w);
        }
        g("RegExp");
      }, function (t2, n, e) {
        var r = e(14),
          o = e(11),
          i = e(49)("match");
        t2.exports = function (t3) {
          var n2;
          return r(t3) && (void 0 !== (n2 = t3[i]) ? !!n2 : "RegExp" == o(t3));
        };
      }, function (t2, n, e) {
        var r = e(20);
        t2.exports = function () {
          var t3 = r(this),
            n2 = "";
          return t3.global && (n2 += "g"), t3.ignoreCase && (n2 += "i"), t3.multiline && (n2 += "m"), t3.dotAll && (n2 += "s"), t3.unicode && (n2 += "u"), t3.sticky && (n2 += "y"), n2;
        };
      }, function (t2, n, e) {
        var r = e(6);
        function o(t3, n2) {
          return RegExp(t3, n2);
        }
        n.UNSUPPORTED_Y = r(function () {
          var t3 = o("a", "y");
          return t3.lastIndex = 2, null != t3.exec("abcd");
        }), n.BROKEN_CARET = r(function () {
          var t3 = o("^r", "gy");
          return t3.lastIndex = 2, null != t3.exec("str");
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(190);
        r({
          target: "RegExp",
          proto: true,
          forced: /./.exec !== o
        }, {
          exec: o
        });
      }, function (t2, n, e) {
        var r,
          o,
          i = e(187),
          a = e(188),
          u = RegExp.prototype.exec,
          c = String.prototype.replace,
          f = u,
          s = (r = /a/, o = /b*/g, u.call(r, "a"), u.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
          l = a.UNSUPPORTED_Y || a.BROKEN_CARET,
          p = void 0 !== /()??/.exec("")[1];
        (s || p || l) && (f = function (t3) {
          var n2,
            e2,
            r2,
            o2,
            a2 = this,
            f2 = l && a2.sticky,
            h2 = i.call(a2),
            v = a2.source,
            g = 0,
            d = t3;
          return f2 && (-1 === (h2 = h2.replace("y", "")).indexOf("g") && (h2 += "g"), d = String(t3).slice(a2.lastIndex), a2.lastIndex > 0 && (!a2.multiline || a2.multiline && "\n" !== t3[a2.lastIndex - 1]) && (v = "(?: " + v + ")", d = " " + d, g++), e2 = new RegExp("^(?:" + v + ")", h2)), p && (e2 = new RegExp("^" + v + "$(?!\\s)", h2)), s && (n2 = a2.lastIndex), r2 = u.call(f2 ? e2 : a2, d), f2 ? r2 ? (r2.input = r2.input.slice(g), r2[0] = r2[0].slice(g), r2.index = a2.lastIndex, a2.lastIndex += r2[0].length) : a2.lastIndex = 0 : s && r2 && (a2.lastIndex = a2.global ? r2.index + r2[0].length : n2), p && r2 && r2.length > 1 && c.call(r2[0], e2, function () {
            for (o2 = 1; o2 < arguments.length - 2; o2++) void 0 === arguments[o2] && (r2[o2] = void 0);
          }), r2;
        }), t2.exports = f;
      }, function (t2, n, e) {
        var r = e(5),
          o = e(19),
          i = e(187),
          a = e(188).UNSUPPORTED_Y;
        r && ("g" != /./g.flags || a) && o.f(RegExp.prototype, "flags", {
          configurable: true,
          get: i
        });
      }, function (t2, n, e) {
        var r = e(5),
          o = e(188).UNSUPPORTED_Y,
          i = e(19).f,
          a = e(25).get,
          u = RegExp.prototype;
        r && o && i(RegExp.prototype, "sticky", {
          configurable: true,
          get: function () {
            if (this !== u) {
              if (this instanceof RegExp) return !!a(this).sticky;
              throw TypeError("Incompatible receiver, RegExp required");
            }
          }
        });
      }, function (t2, n, e) {
        e(189);
        var r,
          o,
          i = e(2),
          a = e(14),
          u = (r = false, (o = /[ac]/).exec = function () {
            return r = true, /./.exec.apply(this, arguments);
          }, true === o.test("abc") && r),
          c = /./.test;
        i({
          target: "RegExp",
          proto: true,
          forced: !u
        }, {
          test: function (t3) {
            if ("function" != typeof this.exec) return c.call(this, t3);
            var n2 = this.exec(t3);
            if (null !== n2 && !a(n2)) throw new Error("RegExp exec method returned something other than an Object or null");
            return !!n2;
          }
        });
      }, function (t2, n, e) {
        var r = e(21),
          o = e(20),
          i = e(6),
          a = e(187),
          u = RegExp.prototype,
          c = u.toString,
          f = i(function () {
            return "/a/b" != c.call({
              source: "a",
              flags: "b"
            });
          }),
          s = "toString" != c.name;
        (f || s) && r(RegExp.prototype, "toString", function () {
          var t3 = o(this),
            n2 = String(t3.source),
            e2 = t3.flags;
          return "/" + n2 + "/" + String(void 0 === e2 && t3 instanceof RegExp && !("flags" in u) ? a.call(t3) : e2);
        }, {
          unsafe: true
        });
      }, function (t2, n, e) {
        var r = e(119),
          o = e(125);
        t2.exports = r("Set", function (t3) {
          return function () {
            return t3(this, arguments.length ? arguments[0] : void 0);
          };
        }, o);
      }, function (t2, n, e) {
        var r = e(2),
          o = e(197).codeAt;
        r({
          target: "String",
          proto: true
        }, {
          codePointAt: function (t3) {
            return o(this, t3);
          }
        });
      }, function (t2, n, e) {
        var r = e(40),
          o = e(12),
          i = function (t3) {
            return function (n2, e2) {
              var i3,
                a,
                u = String(o(n2)),
                c = r(e2),
                f = u.length;
              return c < 0 || c >= f ? t3 ? "" : void 0 : (i3 = u.charCodeAt(c)) < 55296 || i3 > 56319 || c + 1 === f || (a = u.charCodeAt(c + 1)) < 56320 || a > 57343 ? t3 ? u.charAt(c) : i3 : t3 ? u.slice(c, c + 2) : a - 56320 + (i3 - 55296 << 10) + 65536;
            };
          };
        t2.exports = {
          codeAt: i(false),
          charAt: i(true)
        };
      }, function (t2, n, e) {
        var r,
          o = e(2),
          i = e(4).f,
          a = e(39),
          u = e(199),
          c = e(12),
          f = e(200),
          s = e(29),
          l = "".endsWith,
          p = Math.min,
          h2 = f("endsWith");
        o({
          target: "String",
          proto: true,
          forced: !!(s || h2 || (r = i(String.prototype, "endsWith"), !r || r.writable)) && !h2
        }, {
          endsWith: function (t3) {
            var n2 = String(c(this));
            u(t3);
            var e2 = arguments.length > 1 ? arguments[1] : void 0,
              r2 = a(n2.length),
              o2 = void 0 === e2 ? r2 : p(a(e2), r2),
              i3 = String(t3);
            return l ? l.call(n2, i3, o2) : n2.slice(o2 - i3.length, o2) === i3;
          }
        });
      }, function (t2, n, e) {
        var r = e(186);
        t2.exports = function (t3) {
          if (r(t3)) throw TypeError("The method doesn't accept regular expressions");
          return t3;
        };
      }, function (t2, n, e) {
        var r = e(49)("match");
        t2.exports = function (t3) {
          var n2 = /./;
          try {
            "/./"[t3](n2);
          } catch (e2) {
            try {
              return n2[r] = false, "/./"[t3](n2);
            } catch (t4) {}
          }
          return false;
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(41),
          i = String.fromCharCode,
          a = String.fromCodePoint;
        r({
          target: "String",
          stat: true,
          forced: !!a && 1 != a.length
        }, {
          fromCodePoint: function (t3) {
            for (var n2, e2 = [], r2 = arguments.length, a2 = 0; r2 > a2;) {
              if (n2 = +arguments[a2++], o(n2, 1114111) !== n2) throw RangeError(n2 + " is not a valid code point");
              e2.push(n2 < 65536 ? i(n2) : i(55296 + ((n2 -= 65536) >> 10), n2 % 1024 + 56320));
            }
            return e2.join("");
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(199),
          i = e(12);
        r({
          target: "String",
          proto: true,
          forced: !e(200)("includes")
        }, {
          includes: function (t3) {
            return !!~String(i(this)).indexOf(o(t3), arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }, function (t2, n, e) {
        var r = e(197).charAt,
          o = e(25),
          i = e(90),
          a = o.set,
          u = o.getterFor("String Iterator");
        i(String, "String", function (t3) {
          a(this, {
            type: "String Iterator",
            string: String(t3),
            index: 0
          });
        }, function () {
          var t3,
            n2 = u(this),
            e2 = n2.string,
            o2 = n2.index;
          return o2 >= e2.length ? {
            value: void 0,
            done: true
          } : (t3 = r(e2, o2), n2.index += t3.length, {
            value: t3,
            done: false
          });
        });
      }, function (t2, n, e) {
        var r = e(205),
          o = e(20),
          i = e(39),
          a = e(12),
          u = e(206),
          c = e(207);
        r("match", 1, function (t3, n2, e2) {
          return [function (n3) {
            var e3 = a(this),
              r2 = null == n3 ? void 0 : n3[t3];
            return void 0 !== r2 ? r2.call(n3, e3) : new RegExp(n3)[t3](String(e3));
          }, function (t4) {
            var r2 = e2(n2, t4, this);
            if (r2.done) return r2.value;
            var a2 = o(t4),
              f = String(this);
            if (!a2.global) return c(a2, f);
            var s = a2.unicode;
            a2.lastIndex = 0;
            for (var l, p = [], h2 = 0; null !== (l = c(a2, f));) {
              var v = String(l[0]);
              p[h2] = v, "" === v && (a2.lastIndex = u(f, i(a2.lastIndex), s)), h2++;
            }
            return 0 === h2 ? null : p;
          }];
        });
      }, function (t2, n, e) {
        e(189);
        var r = e(21),
          o = e(6),
          i = e(49),
          a = e(190),
          u = e(18),
          c = i("species"),
          f = !o(function () {
            var t3 = /./;
            return t3.exec = function () {
              var t4 = [];
              return t4.groups = {
                a: "7"
              }, t4;
            }, "7" !== "".replace(t3, "$<a>");
          }),
          s = "$0" === "a".replace(/./, "$0"),
          l = i("replace"),
          p = !!/./[l] && "" === /./[l]("a", "$0"),
          h2 = !o(function () {
            var t3 = /(?:)/,
              n2 = t3.exec;
            t3.exec = function () {
              return n2.apply(this, arguments);
            };
            var e2 = "ab".split(t3);
            return 2 !== e2.length || "a" !== e2[0] || "b" !== e2[1];
          });
        t2.exports = function (t3, n2, e2, l2) {
          var v = i(t3),
            g = !o(function () {
              var n3 = {};
              return n3[v] = function () {
                return 7;
              }, 7 != ""[t3](n3);
            }),
            d = g && !o(function () {
              var n3 = false,
                e3 = /a/;
              return "split" === t3 && ((e3 = {}).constructor = {}, e3.constructor[c] = function () {
                return e3;
              }, e3.flags = "", e3[v] = /./[v]), e3.exec = function () {
                return n3 = true, null;
              }, e3[v](""), !n3;
            });
          if (!g || !d || "replace" === t3 && (!f || !s || p) || "split" === t3 && !h2) {
            var y = /./[v],
              x = e2(v, ""[t3], function (t4, n3, e3, r2, o2) {
                return n3.exec === a ? g && !o2 ? {
                  done: true,
                  value: y.call(n3, e3, r2)
                } : {
                  done: true,
                  value: t4.call(e3, n3, r2)
                } : {
                  done: false
                };
              }, {
                REPLACE_KEEPS_$0: s,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p
              }),
              m = x[0],
              b = x[1];
            r(String.prototype, t3, m), r(RegExp.prototype, v, 2 == n2 ? function (t4, n3) {
              return b.call(t4, this, n3);
            } : function (t4) {
              return b.call(t4, this);
            });
          }
          l2 && u(RegExp.prototype[v], "sham", true);
        };
      }, function (t2, n, e) {
        var r = e(197).charAt;
        t2.exports = function (t3, n2, e2) {
          return n2 + (e2 ? r(t3, n2).length : 1);
        };
      }, function (t2, n, e) {
        var r = e(11),
          o = e(190);
        t2.exports = function (t3, n2) {
          var e2 = t3.exec;
          if ("function" == typeof e2) {
            var i = e2.call(t3, n2);
            if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
            return i;
          }
          if ("RegExp" !== r(t3)) throw TypeError("RegExp#exec called on incompatible receiver");
          return o.call(t3, n2);
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(91),
          i = e(12),
          a = e(39),
          u = e(65),
          c = e(20),
          f = e(11),
          s = e(186),
          l = e(187),
          p = e(18),
          h2 = e(6),
          v = e(49),
          g = e(175),
          d = e(206),
          y = e(25),
          x = e(29),
          m = v("matchAll"),
          b = y.set,
          S = y.getterFor("RegExp String Iterator"),
          E = RegExp.prototype,
          w = E.exec,
          O = "".matchAll,
          R = !!O && !h2(function () {
            "a".matchAll(/./);
          }),
          A = o(function (t3, n2, e2, r2) {
            b(this, {
              type: "RegExp String Iterator",
              regexp: t3,
              string: n2,
              global: e2,
              unicode: r2,
              done: false
            });
          }, "RegExp String", function () {
            var t3 = S(this);
            if (t3.done) return {
              value: void 0,
              done: true
            };
            var n2 = t3.regexp,
              e2 = t3.string,
              r2 = function (t4, n3) {
                var e3,
                  r3 = t4.exec;
                if ("function" == typeof r3) {
                  if ("object" != typeof (e3 = r3.call(t4, n3))) throw TypeError("Incorrect exec result");
                  return e3;
                }
                return w.call(t4, n3);
              }(n2, e2);
            return null === r2 ? {
              value: void 0,
              done: t3.done = true
            } : t3.global ? ("" == String(r2[0]) && (n2.lastIndex = d(e2, a(n2.lastIndex), t3.unicode)), {
              value: r2,
              done: false
            }) : (t3.done = true, {
              value: r2,
              done: false
            });
          }),
          j = function (t3) {
            var n2,
              e2,
              r2,
              o2,
              i3,
              u2,
              f2 = c(this),
              s2 = String(t3);
            return n2 = g(f2, RegExp), void 0 === (e2 = f2.flags) && f2 instanceof RegExp && !("flags" in E) && (e2 = l.call(f2)), r2 = void 0 === e2 ? "" : String(e2), o2 = new n2(n2 === RegExp ? f2.source : f2, r2), i3 = !!~r2.indexOf("g"), u2 = !!~r2.indexOf("u"), o2.lastIndex = a(f2.lastIndex), new A(o2, s2, i3, u2);
          };
        r({
          target: "String",
          proto: true,
          forced: R
        }, {
          matchAll: function (t3) {
            var n2,
              e2,
              r2,
              o2 = i(this);
            if (null != t3) {
              if (s(t3) && !~String(i("flags" in E ? t3.flags : l.call(t3))).indexOf("g")) throw TypeError("`.matchAll` does not allow non-global regexes");
              if (R) return O.apply(o2, arguments);
              if (void 0 === (e2 = t3[m]) && x && "RegExp" == f(t3) && (e2 = j), null != e2) return u(e2).call(t3, o2);
            } else if (R) return O.apply(o2, arguments);
            return n2 = String(o2), r2 = new RegExp(t3, "g"), x ? j.call(r2, n2) : r2[m](n2);
          }
        }), x || m in E || p(E, m, j);
      }, function (t2, n, e) {
        var r = e(2),
          o = e(210).end;
        r({
          target: "String",
          proto: true,
          forced: e(211)
        }, {
          padEnd: function (t3) {
            return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }, function (t2, n, e) {
        var r = e(39),
          o = e(145),
          i = e(12),
          a = Math.ceil,
          u = function (t3) {
            return function (n2, e2, u2) {
              var c,
                f,
                s = String(i(n2)),
                l = s.length,
                p = void 0 === u2 ? " " : String(u2),
                h2 = r(e2);
              return h2 <= l || "" == p ? s : (c = h2 - l, (f = o.call(p, a(c / p.length))).length > c && (f = f.slice(0, c)), t3 ? s + f : f + s);
            };
          };
        t2.exports = {
          start: u(false),
          end: u(true)
        };
      }, function (t2, n, e) {
        var r = e(54);
        t2.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
      }, function (t2, n, e) {
        var r = e(2),
          o = e(210).start;
        r({
          target: "String",
          proto: true,
          forced: e(211)
        }, {
          padStart: function (t3) {
            return o(this, t3, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(9),
          i = e(39);
        r({
          target: "String",
          stat: true
        }, {
          raw: function (t3) {
            for (var n2 = o(t3.raw), e2 = i(n2.length), r2 = arguments.length, a = [], u = 0; e2 > u;) a.push(String(n2[u++])), u < r2 && a.push(String(arguments[u]));
            return a.join("");
          }
        });
      }, function (t2, n, e) {
        e(2)({
          target: "String",
          proto: true
        }, {
          repeat: e(145)
        });
      }, function (t2, n, e) {
        var r = e(205),
          o = e(20),
          i = e(46),
          a = e(39),
          u = e(40),
          c = e(12),
          f = e(206),
          s = e(207),
          l = Math.max,
          p = Math.min,
          h2 = Math.floor,
          v = /\$([$&'`]|\d\d?|<[^>]*>)/g,
          g = /\$([$&'`]|\d\d?)/g;
        r("replace", 2, function (t3, n2, e2, r2) {
          var d = r2.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            y = r2.REPLACE_KEEPS_$0,
            x = d ? "$" : "$0";
          return [function (e3, r3) {
            var o2 = c(this),
              i3 = null == e3 ? void 0 : e3[t3];
            return void 0 !== i3 ? i3.call(e3, o2, r3) : n2.call(String(o2), e3, r3);
          }, function (t4, r3) {
            if (!d && y || "string" == typeof r3 && -1 === r3.indexOf(x)) {
              var i3 = e2(n2, t4, this, r3);
              if (i3.done) return i3.value;
            }
            var c2 = o(t4),
              h3 = String(this),
              v2 = "function" == typeof r3;
            v2 || (r3 = String(r3));
            var g2 = c2.global;
            if (g2) {
              var b = c2.unicode;
              c2.lastIndex = 0;
            }
            for (var S = [];;) {
              var E = s(c2, h3);
              if (null === E) break;
              if (S.push(E), !g2) break;
              "" === String(E[0]) && (c2.lastIndex = f(h3, a(c2.lastIndex), b));
            }
            for (var w, O = "", R = 0, A = 0; A < S.length; A++) {
              E = S[A];
              for (var j = String(E[0]), I = l(p(u(E.index), h3.length), 0), k = [], P = 1; P < E.length; P++) k.push(void 0 === (w = E[P]) ? w : String(w));
              var L = E.groups;
              if (v2) {
                var T = [j].concat(k, I, h3);
                void 0 !== L && T.push(L);
                var _ = String(r3.apply(void 0, T));
              } else _ = m(j, h3, I, k, L, r3);
              I >= R && (O += h3.slice(R, I) + _, R = I + j.length);
            }
            return O + h3.slice(R);
          }];
          function m(t4, e3, r3, o2, a2, u2) {
            var c2 = r3 + t4.length,
              f2 = o2.length,
              s2 = g;
            return void 0 !== a2 && (a2 = i(a2), s2 = v), n2.call(u2, s2, function (n3, i3) {
              var u3;
              switch (i3.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return t4;
                case "`":
                  return e3.slice(0, r3);
                case "'":
                  return e3.slice(c2);
                case "<":
                  u3 = a2[i3.slice(1, -1)];
                  break;
                default:
                  var s3 = +i3;
                  if (0 === s3) return n3;
                  if (s3 > f2) {
                    var l2 = h2(s3 / 10);
                    return 0 === l2 ? n3 : l2 <= f2 ? void 0 === o2[l2 - 1] ? i3.charAt(1) : o2[l2 - 1] + i3.charAt(1) : n3;
                  }
                  u3 = o2[s3 - 1];
              }
              return void 0 === u3 ? "" : u3;
            });
          }
        });
      }, function (t2, n, e) {
        var r = e(205),
          o = e(20),
          i = e(12),
          a = e(161),
          u = e(207);
        r("search", 1, function (t3, n2, e2) {
          return [function (n3) {
            var e3 = i(this),
              r2 = null == n3 ? void 0 : n3[t3];
            return void 0 !== r2 ? r2.call(n3, e3) : new RegExp(n3)[t3](String(e3));
          }, function (t4) {
            var r2 = e2(n2, t4, this);
            if (r2.done) return r2.value;
            var i3 = o(t4),
              c = String(this),
              f = i3.lastIndex;
            a(f, 0) || (i3.lastIndex = 0);
            var s = u(i3, c);
            return a(i3.lastIndex, f) || (i3.lastIndex = f), null === s ? -1 : s.index;
          }];
        });
      }, function (t2, n, e) {
        var r = e(205),
          o = e(186),
          i = e(20),
          a = e(12),
          u = e(175),
          c = e(206),
          f = e(39),
          s = e(207),
          l = e(190),
          p = e(6),
          h2 = [].push,
          v = Math.min,
          g = !p(function () {
            return !RegExp(4294967295, "y");
          });
        r("split", 2, function (t3, n2, e2) {
          var r2;
          return r2 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t4, e3) {
            var r3 = String(a(this)),
              i3 = void 0 === e3 ? 4294967295 : e3 >>> 0;
            if (0 === i3) return [];
            if (void 0 === t4) return [r3];
            if (!o(t4)) return n2.call(r3, t4, i3);
            for (var u2, c2, f2, s2 = [], p2 = (t4.ignoreCase ? "i" : "") + (t4.multiline ? "m" : "") + (t4.unicode ? "u" : "") + (t4.sticky ? "y" : ""), v2 = 0, g2 = new RegExp(t4.source, p2 + "g"); (u2 = l.call(g2, r3)) && !((c2 = g2.lastIndex) > v2 && (s2.push(r3.slice(v2, u2.index)), u2.length > 1 && u2.index < r3.length && h2.apply(s2, u2.slice(1)), f2 = u2[0].length, v2 = c2, s2.length >= i3));) g2.lastIndex === u2.index && g2.lastIndex++;
            return v2 === r3.length ? !f2 && g2.test("") || s2.push("") : s2.push(r3.slice(v2)), s2.length > i3 ? s2.slice(0, i3) : s2;
          } : "0".split(void 0, 0).length ? function (t4, e3) {
            return void 0 === t4 && 0 === e3 ? [] : n2.call(this, t4, e3);
          } : n2, [function (n3, e3) {
            var o2 = a(this),
              i3 = null == n3 ? void 0 : n3[t3];
            return void 0 !== i3 ? i3.call(n3, o2, e3) : r2.call(String(o2), n3, e3);
          }, function (t4, o2) {
            var a2 = e2(r2, t4, this, o2, r2 !== n2);
            if (a2.done) return a2.value;
            var l2 = i(t4),
              p2 = String(this),
              h3 = u(l2, RegExp),
              d = l2.unicode,
              y = (l2.ignoreCase ? "i" : "") + (l2.multiline ? "m" : "") + (l2.unicode ? "u" : "") + (g ? "y" : "g"),
              x = new h3(g ? l2 : "^(?:" + l2.source + ")", y),
              m = void 0 === o2 ? 4294967295 : o2 >>> 0;
            if (0 === m) return [];
            if (0 === p2.length) return null === s(x, p2) ? [p2] : [];
            for (var b = 0, S = 0, E = []; S < p2.length;) {
              x.lastIndex = g ? S : 0;
              var w,
                O = s(x, g ? p2 : p2.slice(S));
              if (null === O || (w = v(f(x.lastIndex + (g ? 0 : S)), p2.length)) === b) S = c(p2, S, d);else {
                if (E.push(p2.slice(b, S)), E.length === m) return E;
                for (var R = 1; R <= O.length - 1; R++) if (E.push(O[R]), E.length === m) return E;
                S = b = w;
              }
            }
            return E.push(p2.slice(b)), E;
          }];
        }, !g);
      }, function (t2, n, e) {
        var r,
          o = e(2),
          i = e(4).f,
          a = e(39),
          u = e(199),
          c = e(12),
          f = e(200),
          s = e(29),
          l = "".startsWith,
          p = Math.min,
          h2 = f("startsWith");
        o({
          target: "String",
          proto: true,
          forced: !!(s || h2 || (r = i(String.prototype, "startsWith"), !r || r.writable)) && !h2
        }, {
          startsWith: function (t3) {
            var n2 = String(c(this));
            u(t3);
            var e2 = a(p(arguments.length > 1 ? arguments[1] : void 0, n2.length)),
              r2 = String(t3);
            return l ? l.call(n2, r2, e2) : n2.slice(e2, e2 + r2.length) === r2;
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(128).trim;
        r({
          target: "String",
          proto: true,
          forced: e(220)("trim")
        }, {
          trim: function () {
            return o(this);
          }
        });
      }, function (t2, n, e) {
        var r = e(6),
          o = e(129);
        t2.exports = function (t3) {
          return r(function () {
            return !!o[t3]() || "\u200B\x85\u180E" != "\u200B\x85\u180E"[t3]() || o[t3].name !== t3;
          });
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(128).end,
          i = e(220)("trimEnd"),
          a = i ? function () {
            return o(this);
          } : "".trimEnd;
        r({
          target: "String",
          proto: true,
          forced: i
        }, {
          trimEnd: a,
          trimRight: a
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(128).start,
          i = e(220)("trimStart"),
          a = i ? function () {
            return o(this);
          } : "".trimStart;
        r({
          target: "String",
          proto: true,
          forced: i
        }, {
          trimStart: a,
          trimLeft: a
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("anchor")
        }, {
          anchor: function (t3) {
            return o(this, "a", "name", t3);
          }
        });
      }, function (t2, n, e) {
        var r = e(12),
          o = /"/g;
        t2.exports = function (t3, n2, e2, i) {
          var a = String(r(t3)),
            u = "<" + n2;
          return "" !== e2 && (u += " " + e2 + '="' + String(i).replace(o, "&quot;") + '"'), u + ">" + a + "</" + n2 + ">";
        };
      }, function (t2, n, e) {
        var r = e(6);
        t2.exports = function (t3) {
          return r(function () {
            var n2 = ""[t3]('"');
            return n2 !== n2.toLowerCase() || n2.split('"').length > 3;
          });
        };
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("big")
        }, {
          big: function () {
            return o(this, "big", "", "");
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("blink")
        }, {
          blink: function () {
            return o(this, "blink", "", "");
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("bold")
        }, {
          bold: function () {
            return o(this, "b", "", "");
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("fixed")
        }, {
          fixed: function () {
            return o(this, "tt", "", "");
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("fontcolor")
        }, {
          fontcolor: function (t3) {
            return o(this, "font", "color", t3);
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("fontsize")
        }, {
          fontsize: function (t3) {
            return o(this, "font", "size", t3);
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("italics")
        }, {
          italics: function () {
            return o(this, "i", "", "");
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("link")
        }, {
          link: function (t3) {
            return o(this, "a", "href", t3);
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("small")
        }, {
          small: function () {
            return o(this, "small", "", "");
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("strike")
        }, {
          strike: function () {
            return o(this, "strike", "", "");
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("sub")
        }, {
          sub: function () {
            return o(this, "sub", "", "");
          }
        });
      }, function (t2, n, e) {
        var r = e(2),
          o = e(224);
        r({
          target: "String",
          proto: true,
          forced: e(225)("sup")
        }, {
          sup: function () {
            return o(this, "sup", "", "");
          }
        });
      }, function (t2, n, e) {
        var r,
          o = e(3),
          i = e(126),
          a = e(120),
          u = e(119),
          c = e(239),
          f = e(14),
          s = e(25).enforce,
          l = e(26),
          p = !o.ActiveXObject && "ActiveXObject" in o,
          h2 = Object.isExtensible,
          v = function (t3) {
            return function () {
              return t3(this, arguments.length ? arguments[0] : void 0);
            };
          },
          g = t2.exports = u("WeakMap", v, c);
        if (l && p) {
          r = c.getConstructor(v, "WeakMap", true), a.REQUIRED = true;
          var d = g.prototype,
            y = d.delete,
            x = d.has,
            m = d.get,
            b = d.set;
          i(d, {
            delete: function (t3) {
              if (f(t3) && !h2(t3)) {
                var n2 = s(this);
                return n2.frozen || (n2.frozen = new r()), y.call(this, t3) || n2.frozen.delete(t3);
              }
              return y.call(this, t3);
            },
            has: function (t3) {
              if (f(t3) && !h2(t3)) {
                var n2 = s(this);
                return n2.frozen || (n2.frozen = new r()), x.call(this, t3) || n2.frozen.has(t3);
              }
              return x.call(this, t3);
            },
            get: function (t3) {
              if (f(t3) && !h2(t3)) {
                var n2 = s(this);
                return n2.frozen || (n2.frozen = new r()), x.call(this, t3) ? m.call(this, t3) : n2.frozen.get(t3);
              }
              return m.call(this, t3);
            },
            set: function (t3, n2) {
              if (f(t3) && !h2(t3)) {
                var e2 = s(this);
                e2.frozen || (e2.frozen = new r()), x.call(this, t3) ? b.call(this, t3, n2) : e2.frozen.set(t3, n2);
              } else b.call(this, t3, n2);
              return this;
            }
          });
        }
      }, function (t2, n, e) {
        var r = e(126),
          o = e(120).getWeakData,
          i = e(20),
          a = e(14),
          u = e(123),
          c = e(122),
          f = e(63),
          s = e(15),
          l = e(25),
          p = l.set,
          h2 = l.getterFor,
          v = f.find,
          g = f.findIndex,
          d = 0,
          y = function (t3) {
            return t3.frozen || (t3.frozen = new x());
          },
          x = function () {
            this.entries = [];
          },
          m = function (t3, n2) {
            return v(t3.entries, function (t4) {
              return t4[0] === n2;
            });
          };
        x.prototype = {
          get: function (t3) {
            var n2 = m(this, t3);
            if (n2) return n2[1];
          },
          has: function (t3) {
            return !!m(this, t3);
          },
          set: function (t3, n2) {
            var e2 = m(this, t3);
            e2 ? e2[1] = n2 : this.entries.push([t3, n2]);
          },
          delete: function (t3) {
            var n2 = g(this.entries, function (n3) {
              return n3[0] === t3;
            });
            return ~n2 && this.entries.splice(n2, 1), !!~n2;
          }
        }, t2.exports = {
          getConstructor: function (t3, n2, e2, f2) {
            var l2 = t3(function (t4, r2) {
                u(t4, l2, n2), p(t4, {
                  type: n2,
                  id: d++,
                  frozen: void 0
                }), null != r2 && c(r2, t4[f2], t4, e2);
              }),
              v2 = h2(n2),
              g2 = function (t4, n3, e3) {
                var r2 = v2(t4),
                  a2 = o(i(n3), true);
                return true === a2 ? y(r2).set(n3, e3) : a2[r2.id] = e3, t4;
              };
            return r(l2.prototype, {
              delete: function (t4) {
                var n3 = v2(this);
                if (!a(t4)) return false;
                var e3 = o(t4);
                return true === e3 ? y(n3).delete(t4) : e3 && s(e3, n3.id) && delete e3[n3.id];
              },
              has: function (t4) {
                var n3 = v2(this);
                if (!a(t4)) return false;
                var e3 = o(t4);
                return true === e3 ? y(n3).has(t4) : e3 && s(e3, n3.id);
              }
            }), r(l2.prototype, e2 ? {
              get: function (t4) {
                var n3 = v2(this);
                if (a(t4)) {
                  var e3 = o(t4);
                  return true === e3 ? y(n3).get(t4) : e3 ? e3[n3.id] : void 0;
                }
              },
              set: function (t4, n3) {
                return g2(this, t4, n3);
              }
            } : {
              add: function (t4) {
                return g2(this, t4, true);
              }
            }), l2;
          }
        };
      }, function (t2, n, e) {
        e(119)("WeakSet", function (t3) {
          return function () {
            return t3(this, arguments.length ? arguments[0] : void 0);
          };
        }, e(239));
      }, function (t2, n, e) {
        var r = e(3),
          o = e(242),
          i = e(77),
          a = e(18);
        for (var u in o) {
          var c = r[u],
            f = c && c.prototype;
          if (f && f.forEach !== i) try {
            a(f, "forEach", i);
          } catch (t3) {
            f.forEach = i;
          }
        }
      }, function (t2, n) {
        t2.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };
      }, function (t2, n, e) {
        e(203);
        var r,
          o = e(2),
          i = e(5),
          a = e(244),
          u = e(3),
          c = e(59),
          f = e(21),
          s = e(123),
          l = e(15),
          p = e(147),
          h2 = e(79),
          v = e(197).codeAt,
          g = e(245),
          d = e(95),
          y = e(246),
          x = e(25),
          m = u.URL,
          b = y.URLSearchParams,
          S = y.getState,
          E = x.set,
          w = x.getterFor("URL"),
          O = Math.floor,
          R = Math.pow,
          A = /[A-Za-z]/,
          j = /[\d+-.A-Za-z]/,
          I = /\d/,
          k = /^(0x|0X)/,
          P = /^[0-7]+$/,
          L = /^\d+$/,
          T = /^[\dA-Fa-f]+$/,
          _ = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
          U = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
          N = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
          C = /[\u0009\u000A\u000D]/g,
          F = function (t3, n2) {
            var e2, r2, o2;
            if ("[" == n2.charAt(0)) {
              if ("]" != n2.charAt(n2.length - 1)) return "Invalid host";
              if (!(e2 = z(n2.slice(1, -1)))) return "Invalid host";
              t3.host = e2;
            } else if (X(t3)) {
              if (n2 = g(n2), _.test(n2)) return "Invalid host";
              if (null === (e2 = M(n2))) return "Invalid host";
              t3.host = e2;
            } else {
              if (U.test(n2)) return "Invalid host";
              for (e2 = "", r2 = h2(n2), o2 = 0; o2 < r2.length; o2++) e2 += G(r2[o2], q);
              t3.host = e2;
            }
          },
          M = function (t3) {
            var n2,
              e2,
              r2,
              o2,
              i3,
              a2,
              u2,
              c2 = t3.split(".");
            if (c2.length && "" == c2[c2.length - 1] && c2.pop(), (n2 = c2.length) > 4) return t3;
            for (e2 = [], r2 = 0; r2 < n2; r2++) {
              if ("" == (o2 = c2[r2])) return t3;
              if (i3 = 10, o2.length > 1 && "0" == o2.charAt(0) && (i3 = k.test(o2) ? 16 : 8, o2 = o2.slice(8 == i3 ? 1 : 2)), "" === o2) a2 = 0;else {
                if (!(10 == i3 ? L : 8 == i3 ? P : T).test(o2)) return t3;
                a2 = parseInt(o2, i3);
              }
              e2.push(a2);
            }
            for (r2 = 0; r2 < n2; r2++) if (a2 = e2[r2], r2 == n2 - 1) {
              if (a2 >= R(256, 5 - n2)) return null;
            } else if (a2 > 255) return null;
            for (u2 = e2.pop(), r2 = 0; r2 < e2.length; r2++) u2 += e2[r2] * R(256, 3 - r2);
            return u2;
          },
          z = function (t3) {
            var n2,
              e2,
              r2,
              o2,
              i3,
              a2,
              u2,
              c2 = [0, 0, 0, 0, 0, 0, 0, 0],
              f2 = 0,
              s2 = null,
              l2 = 0,
              p2 = function () {
                return t3.charAt(l2);
              };
            if (":" == p2()) {
              if (":" != t3.charAt(1)) return;
              l2 += 2, s2 = ++f2;
            }
            for (; p2();) {
              if (8 == f2) return;
              if (":" != p2()) {
                for (n2 = e2 = 0; e2 < 4 && T.test(p2());) n2 = 16 * n2 + parseInt(p2(), 16), l2++, e2++;
                if ("." == p2()) {
                  if (0 == e2) return;
                  if (l2 -= e2, f2 > 6) return;
                  for (r2 = 0; p2();) {
                    if (o2 = null, r2 > 0) {
                      if (!("." == p2() && r2 < 4)) return;
                      l2++;
                    }
                    if (!I.test(p2())) return;
                    for (; I.test(p2());) {
                      if (i3 = parseInt(p2(), 10), null === o2) o2 = i3;else {
                        if (0 == o2) return;
                        o2 = 10 * o2 + i3;
                      }
                      if (o2 > 255) return;
                      l2++;
                    }
                    c2[f2] = 256 * c2[f2] + o2, 2 != ++r2 && 4 != r2 || f2++;
                  }
                  if (4 != r2) return;
                  break;
                }
                if (":" == p2()) {
                  if (l2++, !p2()) return;
                } else if (p2()) return;
                c2[f2++] = n2;
              } else {
                if (null !== s2) return;
                l2++, s2 = ++f2;
              }
            }
            if (null !== s2) for (a2 = f2 - s2, f2 = 7; 0 != f2 && a2 > 0;) u2 = c2[f2], c2[f2--] = c2[s2 + a2 - 1], c2[s2 + --a2] = u2;else if (8 != f2) return;
            return c2;
          },
          D = function (t3) {
            var n2, e2, r2, o2;
            if ("number" == typeof t3) {
              for (n2 = [], e2 = 0; e2 < 4; e2++) n2.unshift(t3 % 256), t3 = O(t3 / 256);
              return n2.join(".");
            }
            if ("object" == typeof t3) {
              for (n2 = "", r2 = function (t4) {
                for (var n3 = null, e3 = 1, r3 = null, o3 = 0, i3 = 0; i3 < 8; i3++) 0 !== t4[i3] ? (o3 > e3 && (n3 = r3, e3 = o3), r3 = null, o3 = 0) : (null === r3 && (r3 = i3), ++o3);
                return o3 > e3 && (n3 = r3, e3 = o3), n3;
              }(t3), e2 = 0; e2 < 8; e2++) o2 && 0 === t3[e2] || (o2 && (o2 = false), r2 === e2 ? (n2 += e2 ? ":" : "::", o2 = true) : (n2 += t3[e2].toString(16), e2 < 7 && (n2 += ":")));
              return "[" + n2 + "]";
            }
            return t3;
          },
          q = {},
          B = p({}, q, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
          }),
          W = p({}, B, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
          }),
          $ = p({}, W, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
          }),
          G = function (t3, n2) {
            var e2 = v(t3, 0);
            return e2 > 32 && e2 < 127 && !l(n2, t3) ? t3 : encodeURIComponent(t3);
          },
          V = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
          },
          X = function (t3) {
            return l(V, t3.scheme);
          },
          Y = function (t3) {
            return "" != t3.username || "" != t3.password;
          },
          K = function (t3) {
            return !t3.host || t3.cannotBeABaseURL || "file" == t3.scheme;
          },
          J = function (t3, n2) {
            var e2;
            return 2 == t3.length && A.test(t3.charAt(0)) && (":" == (e2 = t3.charAt(1)) || !n2 && "|" == e2);
          },
          H = function (t3) {
            var n2;
            return t3.length > 1 && J(t3.slice(0, 2)) && (2 == t3.length || "/" === (n2 = t3.charAt(2)) || "\\" === n2 || "?" === n2 || "#" === n2);
          },
          Q = function (t3) {
            var n2 = t3.path,
              e2 = n2.length;
            !e2 || "file" == t3.scheme && 1 == e2 && J(n2[0], true) || n2.pop();
          },
          Z = function (t3) {
            return "." === t3 || "%2e" === t3.toLowerCase();
          },
          tt = {},
          nt = {},
          et = {},
          rt = {},
          ot = {},
          it = {},
          at = {},
          ut = {},
          ct = {},
          ft = {},
          st = {},
          lt = {},
          pt = {},
          ht = {},
          vt = {},
          gt = {},
          dt = {},
          yt = {},
          xt = {},
          mt = {},
          bt = {},
          St = function (t3, n2, e2, o2) {
            var i3,
              a2,
              u2,
              c2,
              f2,
              s2 = e2 || tt,
              p2 = 0,
              v2 = "",
              g2 = false,
              d2 = false,
              y2 = false;
            for (e2 || (t3.scheme = "", t3.username = "", t3.password = "", t3.host = null, t3.port = null, t3.path = [], t3.query = null, t3.fragment = null, t3.cannotBeABaseURL = false, n2 = n2.replace(N, "")), n2 = n2.replace(C, ""), i3 = h2(n2); p2 <= i3.length;) {
              switch (a2 = i3[p2], s2) {
                case tt:
                  if (!a2 || !A.test(a2)) {
                    if (e2) return "Invalid scheme";
                    s2 = et;
                    continue;
                  }
                  v2 += a2.toLowerCase(), s2 = nt;
                  break;
                case nt:
                  if (a2 && (j.test(a2) || "+" == a2 || "-" == a2 || "." == a2)) v2 += a2.toLowerCase();else {
                    if (":" != a2) {
                      if (e2) return "Invalid scheme";
                      v2 = "", s2 = et, p2 = 0;
                      continue;
                    }
                    if (e2 && (X(t3) != l(V, v2) || "file" == v2 && (Y(t3) || null !== t3.port) || "file" == t3.scheme && !t3.host)) return;
                    if (t3.scheme = v2, e2) return void (X(t3) && V[t3.scheme] == t3.port && (t3.port = null));
                    v2 = "", "file" == t3.scheme ? s2 = ht : X(t3) && o2 && o2.scheme == t3.scheme ? s2 = rt : X(t3) ? s2 = ut : "/" == i3[p2 + 1] ? (s2 = ot, p2++) : (t3.cannotBeABaseURL = true, t3.path.push(""), s2 = xt);
                  }
                  break;
                case et:
                  if (!o2 || o2.cannotBeABaseURL && "#" != a2) return "Invalid scheme";
                  if (o2.cannotBeABaseURL && "#" == a2) {
                    t3.scheme = o2.scheme, t3.path = o2.path.slice(), t3.query = o2.query, t3.fragment = "", t3.cannotBeABaseURL = true, s2 = bt;
                    break;
                  }
                  s2 = "file" == o2.scheme ? ht : it;
                  continue;
                case rt:
                  if ("/" != a2 || "/" != i3[p2 + 1]) {
                    s2 = it;
                    continue;
                  }
                  s2 = ct, p2++;
                  break;
                case ot:
                  if ("/" == a2) {
                    s2 = ft;
                    break;
                  }
                  s2 = yt;
                  continue;
                case it:
                  if (t3.scheme = o2.scheme, a2 == r) t3.username = o2.username, t3.password = o2.password, t3.host = o2.host, t3.port = o2.port, t3.path = o2.path.slice(), t3.query = o2.query;else if ("/" == a2 || "\\" == a2 && X(t3)) s2 = at;else if ("?" == a2) t3.username = o2.username, t3.password = o2.password, t3.host = o2.host, t3.port = o2.port, t3.path = o2.path.slice(), t3.query = "", s2 = mt;else {
                    if ("#" != a2) {
                      t3.username = o2.username, t3.password = o2.password, t3.host = o2.host, t3.port = o2.port, t3.path = o2.path.slice(), t3.path.pop(), s2 = yt;
                      continue;
                    }
                    t3.username = o2.username, t3.password = o2.password, t3.host = o2.host, t3.port = o2.port, t3.path = o2.path.slice(), t3.query = o2.query, t3.fragment = "", s2 = bt;
                  }
                  break;
                case at:
                  if (!X(t3) || "/" != a2 && "\\" != a2) {
                    if ("/" != a2) {
                      t3.username = o2.username, t3.password = o2.password, t3.host = o2.host, t3.port = o2.port, s2 = yt;
                      continue;
                    }
                    s2 = ft;
                  } else s2 = ct;
                  break;
                case ut:
                  if (s2 = ct, "/" != a2 || "/" != v2.charAt(p2 + 1)) continue;
                  p2++;
                  break;
                case ct:
                  if ("/" != a2 && "\\" != a2) {
                    s2 = ft;
                    continue;
                  }
                  break;
                case ft:
                  if ("@" == a2) {
                    g2 && (v2 = "%40" + v2), g2 = true, u2 = h2(v2);
                    for (var x2 = 0; x2 < u2.length; x2++) {
                      var m2 = u2[x2];
                      if (":" != m2 || y2) {
                        var b2 = G(m2, $);
                        y2 ? t3.password += b2 : t3.username += b2;
                      } else y2 = true;
                    }
                    v2 = "";
                  } else if (a2 == r || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && X(t3)) {
                    if (g2 && "" == v2) return "Invalid authority";
                    p2 -= h2(v2).length + 1, v2 = "", s2 = st;
                  } else v2 += a2;
                  break;
                case st:
                case lt:
                  if (e2 && "file" == t3.scheme) {
                    s2 = gt;
                    continue;
                  }
                  if (":" != a2 || d2) {
                    if (a2 == r || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && X(t3)) {
                      if (X(t3) && "" == v2) return "Invalid host";
                      if (e2 && "" == v2 && (Y(t3) || null !== t3.port)) return;
                      if (c2 = F(t3, v2)) return c2;
                      if (v2 = "", s2 = dt, e2) return;
                      continue;
                    }
                    "[" == a2 ? d2 = true : "]" == a2 && (d2 = false), v2 += a2;
                  } else {
                    if ("" == v2) return "Invalid host";
                    if (c2 = F(t3, v2)) return c2;
                    if (v2 = "", s2 = pt, e2 == lt) return;
                  }
                  break;
                case pt:
                  if (!I.test(a2)) {
                    if (a2 == r || "/" == a2 || "?" == a2 || "#" == a2 || "\\" == a2 && X(t3) || e2) {
                      if ("" != v2) {
                        var S2 = parseInt(v2, 10);
                        if (S2 > 65535) return "Invalid port";
                        t3.port = X(t3) && S2 === V[t3.scheme] ? null : S2, v2 = "";
                      }
                      if (e2) return;
                      s2 = dt;
                      continue;
                    }
                    return "Invalid port";
                  }
                  v2 += a2;
                  break;
                case ht:
                  if (t3.scheme = "file", "/" == a2 || "\\" == a2) s2 = vt;else {
                    if (!o2 || "file" != o2.scheme) {
                      s2 = yt;
                      continue;
                    }
                    if (a2 == r) t3.host = o2.host, t3.path = o2.path.slice(), t3.query = o2.query;else if ("?" == a2) t3.host = o2.host, t3.path = o2.path.slice(), t3.query = "", s2 = mt;else {
                      if ("#" != a2) {
                        H(i3.slice(p2).join("")) || (t3.host = o2.host, t3.path = o2.path.slice(), Q(t3)), s2 = yt;
                        continue;
                      }
                      t3.host = o2.host, t3.path = o2.path.slice(), t3.query = o2.query, t3.fragment = "", s2 = bt;
                    }
                  }
                  break;
                case vt:
                  if ("/" == a2 || "\\" == a2) {
                    s2 = gt;
                    break;
                  }
                  o2 && "file" == o2.scheme && !H(i3.slice(p2).join("")) && (J(o2.path[0], true) ? t3.path.push(o2.path[0]) : t3.host = o2.host), s2 = yt;
                  continue;
                case gt:
                  if (a2 == r || "/" == a2 || "\\" == a2 || "?" == a2 || "#" == a2) {
                    if (!e2 && J(v2)) s2 = yt;else if ("" == v2) {
                      if (t3.host = "", e2) return;
                      s2 = dt;
                    } else {
                      if (c2 = F(t3, v2)) return c2;
                      if ("localhost" == t3.host && (t3.host = ""), e2) return;
                      v2 = "", s2 = dt;
                    }
                    continue;
                  }
                  v2 += a2;
                  break;
                case dt:
                  if (X(t3)) {
                    if (s2 = yt, "/" != a2 && "\\" != a2) continue;
                  } else if (e2 || "?" != a2) {
                    if (e2 || "#" != a2) {
                      if (a2 != r && (s2 = yt, "/" != a2)) continue;
                    } else t3.fragment = "", s2 = bt;
                  } else t3.query = "", s2 = mt;
                  break;
                case yt:
                  if (a2 == r || "/" == a2 || "\\" == a2 && X(t3) || !e2 && ("?" == a2 || "#" == a2)) {
                    if (".." === (f2 = (f2 = v2).toLowerCase()) || "%2e." === f2 || ".%2e" === f2 || "%2e%2e" === f2 ? (Q(t3), "/" == a2 || "\\" == a2 && X(t3) || t3.path.push("")) : Z(v2) ? "/" == a2 || "\\" == a2 && X(t3) || t3.path.push("") : ("file" == t3.scheme && !t3.path.length && J(v2) && (t3.host && (t3.host = ""), v2 = v2.charAt(0) + ":"), t3.path.push(v2)), v2 = "", "file" == t3.scheme && (a2 == r || "?" == a2 || "#" == a2)) for (; t3.path.length > 1 && "" === t3.path[0];) t3.path.shift();
                    "?" == a2 ? (t3.query = "", s2 = mt) : "#" == a2 && (t3.fragment = "", s2 = bt);
                  } else v2 += G(a2, W);
                  break;
                case xt:
                  "?" == a2 ? (t3.query = "", s2 = mt) : "#" == a2 ? (t3.fragment = "", s2 = bt) : a2 != r && (t3.path[0] += G(a2, q));
                  break;
                case mt:
                  e2 || "#" != a2 ? a2 != r && ("'" == a2 && X(t3) ? t3.query += "%27" : t3.query += "#" == a2 ? "%23" : G(a2, q)) : (t3.fragment = "", s2 = bt);
                  break;
                case bt:
                  a2 != r && (t3.fragment += G(a2, B));
              }
              p2++;
            }
          },
          Et = function (t3) {
            var n2,
              e2,
              r2 = s(this, Et, "URL"),
              o2 = arguments.length > 1 ? arguments[1] : void 0,
              a2 = String(t3),
              u2 = E(r2, {
                type: "URL"
              });
            if (void 0 !== o2) {
              if (o2 instanceof Et) n2 = w(o2);else if (e2 = St(n2 = {}, String(o2))) throw TypeError(e2);
            }
            if (e2 = St(u2, a2, null, n2)) throw TypeError(e2);
            var c2 = u2.searchParams = new b(),
              f2 = S(c2);
            f2.updateSearchParams(u2.query), f2.updateURL = function () {
              u2.query = String(c2) || null;
            }, i || (r2.href = Ot.call(r2), r2.origin = Rt.call(r2), r2.protocol = At.call(r2), r2.username = jt.call(r2), r2.password = It.call(r2), r2.host = kt.call(r2), r2.hostname = Pt.call(r2), r2.port = Lt.call(r2), r2.pathname = Tt.call(r2), r2.search = _t.call(r2), r2.searchParams = Ut.call(r2), r2.hash = Nt.call(r2));
          },
          wt = Et.prototype,
          Ot = function () {
            var t3 = w(this),
              n2 = t3.scheme,
              e2 = t3.username,
              r2 = t3.password,
              o2 = t3.host,
              i3 = t3.port,
              a2 = t3.path,
              u2 = t3.query,
              c2 = t3.fragment,
              f2 = n2 + ":";
            return null !== o2 ? (f2 += "//", Y(t3) && (f2 += e2 + (r2 ? ":" + r2 : "") + "@"), f2 += D(o2), null !== i3 && (f2 += ":" + i3)) : "file" == n2 && (f2 += "//"), f2 += t3.cannotBeABaseURL ? a2[0] : a2.length ? "/" + a2.join("/") : "", null !== u2 && (f2 += "?" + u2), null !== c2 && (f2 += "#" + c2), f2;
          },
          Rt = function () {
            var t3 = w(this),
              n2 = t3.scheme,
              e2 = t3.port;
            if ("blob" == n2) try {
              return new URL(n2.path[0]).origin;
            } catch (t4) {
              return "null";
            }
            return "file" != n2 && X(t3) ? n2 + "://" + D(t3.host) + (null !== e2 ? ":" + e2 : "") : "null";
          },
          At = function () {
            return w(this).scheme + ":";
          },
          jt = function () {
            return w(this).username;
          },
          It = function () {
            return w(this).password;
          },
          kt = function () {
            var t3 = w(this),
              n2 = t3.host,
              e2 = t3.port;
            return null === n2 ? "" : null === e2 ? D(n2) : D(n2) + ":" + e2;
          },
          Pt = function () {
            var t3 = w(this).host;
            return null === t3 ? "" : D(t3);
          },
          Lt = function () {
            var t3 = w(this).port;
            return null === t3 ? "" : String(t3);
          },
          Tt = function () {
            var t3 = w(this),
              n2 = t3.path;
            return t3.cannotBeABaseURL ? n2[0] : n2.length ? "/" + n2.join("/") : "";
          },
          _t = function () {
            var t3 = w(this).query;
            return t3 ? "?" + t3 : "";
          },
          Ut = function () {
            return w(this).searchParams;
          },
          Nt = function () {
            var t3 = w(this).fragment;
            return t3 ? "#" + t3 : "";
          },
          Ct = function (t3, n2) {
            return {
              get: t3,
              set: n2,
              configurable: true,
              enumerable: true
            };
          };
        if (i && c(wt, {
          href: Ct(Ot, function (t3) {
            var n2 = w(this),
              e2 = String(t3),
              r2 = St(n2, e2);
            if (r2) throw TypeError(r2);
            S(n2.searchParams).updateSearchParams(n2.query);
          }),
          origin: Ct(Rt),
          protocol: Ct(At, function (t3) {
            var n2 = w(this);
            St(n2, String(t3) + ":", tt);
          }),
          username: Ct(jt, function (t3) {
            var n2 = w(this),
              e2 = h2(String(t3));
            if (!K(n2)) {
              n2.username = "";
              for (var r2 = 0; r2 < e2.length; r2++) n2.username += G(e2[r2], $);
            }
          }),
          password: Ct(It, function (t3) {
            var n2 = w(this),
              e2 = h2(String(t3));
            if (!K(n2)) {
              n2.password = "";
              for (var r2 = 0; r2 < e2.length; r2++) n2.password += G(e2[r2], $);
            }
          }),
          host: Ct(kt, function (t3) {
            var n2 = w(this);
            n2.cannotBeABaseURL || St(n2, String(t3), st);
          }),
          hostname: Ct(Pt, function (t3) {
            var n2 = w(this);
            n2.cannotBeABaseURL || St(n2, String(t3), lt);
          }),
          port: Ct(Lt, function (t3) {
            var n2 = w(this);
            K(n2) || ("" == (t3 = String(t3)) ? n2.port = null : St(n2, t3, pt));
          }),
          pathname: Ct(Tt, function (t3) {
            var n2 = w(this);
            n2.cannotBeABaseURL || (n2.path = [], St(n2, t3 + "", dt));
          }),
          search: Ct(_t, function (t3) {
            var n2 = w(this);
            "" == (t3 = String(t3)) ? n2.query = null : ("?" == t3.charAt(0) && (t3 = t3.slice(1)), n2.query = "", St(n2, t3, mt)), S(n2.searchParams).updateSearchParams(n2.query);
          }),
          searchParams: Ct(Ut),
          hash: Ct(Nt, function (t3) {
            var n2 = w(this);
            "" != (t3 = String(t3)) ? ("#" == t3.charAt(0) && (t3 = t3.slice(1)), n2.fragment = "", St(n2, t3, bt)) : n2.fragment = null;
          })
        }), f(wt, "toJSON", function () {
          return Ot.call(this);
        }, {
          enumerable: true
        }), f(wt, "toString", function () {
          return Ot.call(this);
        }, {
          enumerable: true
        }), m) {
          var Ft = m.createObjectURL,
            Mt = m.revokeObjectURL;
          Ft && f(Et, "createObjectURL", function (t3) {
            return Ft.apply(m, arguments);
          }), Mt && f(Et, "revokeObjectURL", function (t3) {
            return Mt.apply(m, arguments);
          });
        }
        d(Et, "URL"), o({
          global: true,
          forced: !a,
          sham: !i
        }, {
          URL: Et
        });
      }, function (t2, n, e) {
        var r = e(6),
          o = e(49),
          i = e(29),
          a = o("iterator");
        t2.exports = !r(function () {
          var t3 = new URL("b?a=1&b=2&c=3", "http://a"),
            n2 = t3.searchParams,
            e2 = "";
          return t3.pathname = "c%20d", n2.forEach(function (t4, r2) {
            n2.delete("b"), e2 += r2 + t4;
          }), i && !t3.toJSON || !n2.sort || "http://a/c%20d?a=1&c=3" !== t3.href || "3" !== n2.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !n2[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://\u0442\u0435\u0441\u0442").host || "#%D0%B1" !== new URL("http://a#\u0431").hash || "a1c3" !== e2 || "x" !== new URL("http://x", void 0).host;
        });
      }, function (t2, n, e) {
        var r = /[^\0-\u007E]/,
          o = /[.\u3002\uFF0E\uFF61]/g,
          i = "Overflow: input needs wider integers to process",
          a = Math.floor,
          u = String.fromCharCode,
          c = function (t3) {
            return t3 + 22 + 75 * (t3 < 26);
          },
          f = function (t3, n2, e2) {
            var r2 = 0;
            for (t3 = e2 ? a(t3 / 700) : t3 >> 1, t3 += a(t3 / n2); t3 > 455; r2 += 36) t3 = a(t3 / 35);
            return a(r2 + 36 * t3 / (t3 + 38));
          },
          s = function (t3) {
            var n2,
              e2,
              r2 = [],
              o2 = (t3 = function (t4) {
                for (var n3 = [], e3 = 0, r3 = t4.length; e3 < r3;) {
                  var o3 = t4.charCodeAt(e3++);
                  if (o3 >= 55296 && o3 <= 56319 && e3 < r3) {
                    var i3 = t4.charCodeAt(e3++);
                    56320 == (64512 & i3) ? n3.push(((1023 & o3) << 10) + (1023 & i3) + 65536) : (n3.push(o3), e3--);
                  } else n3.push(o3);
                }
                return n3;
              }(t3)).length,
              s2 = 128,
              l = 0,
              p = 72;
            for (n2 = 0; n2 < t3.length; n2++) (e2 = t3[n2]) < 128 && r2.push(u(e2));
            var h2 = r2.length,
              v = h2;
            for (h2 && r2.push("-"); v < o2;) {
              var g = 2147483647;
              for (n2 = 0; n2 < t3.length; n2++) (e2 = t3[n2]) >= s2 && e2 < g && (g = e2);
              var d = v + 1;
              if (g - s2 > a((2147483647 - l) / d)) throw RangeError(i);
              for (l += (g - s2) * d, s2 = g, n2 = 0; n2 < t3.length; n2++) {
                if ((e2 = t3[n2]) < s2 && ++l > 2147483647) throw RangeError(i);
                if (e2 == s2) {
                  for (var y = l, x = 36;; x += 36) {
                    var m = x <= p ? 1 : x >= p + 26 ? 26 : x - p;
                    if (y < m) break;
                    var b = y - m,
                      S = 36 - m;
                    r2.push(u(c(m + b % S))), y = a(b / S);
                  }
                  r2.push(u(c(y))), p = f(l, d, v == h2), l = 0, ++v;
                }
              }
              ++l, ++s2;
            }
            return r2.join("");
          };
        t2.exports = function (t3) {
          var n2,
            e2,
            i3 = [],
            a2 = t3.toLowerCase().replace(o, ".").split(".");
          for (n2 = 0; n2 < a2.length; n2++) e2 = a2[n2], i3.push(r.test(e2) ? "xn--" + s(e2) : e2);
          return i3.join(".");
        };
      }, function (t2, n, e) {
        e(89);
        var r = e(2),
          o = e(34),
          i = e(244),
          a = e(21),
          u = e(126),
          c = e(95),
          f = e(91),
          s = e(25),
          l = e(123),
          p = e(15),
          h2 = e(64),
          v = e(84),
          g = e(20),
          d = e(14),
          y = e(58),
          x = e(8),
          m = e(247),
          b = e(83),
          S = e(49),
          E = o("fetch"),
          w = o("Headers"),
          O = S("iterator"),
          R = s.set,
          A = s.getterFor("URLSearchParams"),
          j = s.getterFor("URLSearchParamsIterator"),
          I = /\+/g,
          k = Array(4),
          P = function (t3) {
            return k[t3 - 1] || (k[t3 - 1] = RegExp("((?:%[\\da-f]{2}){" + t3 + "})", "gi"));
          },
          L = function (t3) {
            try {
              return decodeURIComponent(t3);
            } catch (n2) {
              return t3;
            }
          },
          T = function (t3) {
            var n2 = t3.replace(I, " "),
              e2 = 4;
            try {
              return decodeURIComponent(n2);
            } catch (t4) {
              for (; e2;) n2 = n2.replace(P(e2--), L);
              return n2;
            }
          },
          _ = /[!'()~]|%20/g,
          U = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
          },
          N = function (t3) {
            return U[t3];
          },
          C = function (t3) {
            return encodeURIComponent(t3).replace(_, N);
          },
          F = function (t3, n2) {
            if (n2) for (var e2, r2, o2 = n2.split("&"), i3 = 0; i3 < o2.length;) (e2 = o2[i3++]).length && (r2 = e2.split("="), t3.push({
              key: T(r2.shift()),
              value: T(r2.join("="))
            }));
          },
          M = function (t3) {
            this.entries.length = 0, F(this.entries, t3);
          },
          z = function (t3, n2) {
            if (t3 < n2) throw TypeError("Not enough arguments");
          },
          D = f(function (t3, n2) {
            R(this, {
              type: "URLSearchParamsIterator",
              iterator: m(A(t3).entries),
              kind: n2
            });
          }, "Iterator", function () {
            var t3 = j(this),
              n2 = t3.kind,
              e2 = t3.iterator.next(),
              r2 = e2.value;
            return e2.done || (e2.value = "keys" === n2 ? r2.key : "values" === n2 ? r2.value : [r2.key, r2.value]), e2;
          }),
          q = function () {
            l(this, q, "URLSearchParams");
            var t3,
              n2,
              e2,
              r2,
              o2,
              i3,
              a2,
              u2,
              c2,
              f2 = arguments.length > 0 ? arguments[0] : void 0,
              s2 = this,
              h3 = [];
            if (R(s2, {
              type: "URLSearchParams",
              entries: h3,
              updateURL: function () {},
              updateSearchParams: M
            }), void 0 !== f2) if (d(f2)) {
              if ("function" == typeof (t3 = b(f2))) for (e2 = (n2 = t3.call(f2)).next; !(r2 = e2.call(n2)).done;) {
                if ((a2 = (i3 = (o2 = m(g(r2.value))).next).call(o2)).done || (u2 = i3.call(o2)).done || !i3.call(o2).done) throw TypeError("Expected sequence with length 2");
                h3.push({
                  key: a2.value + "",
                  value: u2.value + ""
                });
              } else for (c2 in f2) p(f2, c2) && h3.push({
                key: c2,
                value: f2[c2] + ""
              });
            } else F(h3, "string" == typeof f2 ? "?" === f2.charAt(0) ? f2.slice(1) : f2 : f2 + "");
          },
          B = q.prototype;
        u(B, {
          append: function (t3, n2) {
            z(arguments.length, 2);
            var e2 = A(this);
            e2.entries.push({
              key: t3 + "",
              value: n2 + ""
            }), e2.updateURL();
          },
          delete: function (t3) {
            z(arguments.length, 1);
            for (var n2 = A(this), e2 = n2.entries, r2 = t3 + "", o2 = 0; o2 < e2.length;) e2[o2].key === r2 ? e2.splice(o2, 1) : o2++;
            n2.updateURL();
          },
          get: function (t3) {
            z(arguments.length, 1);
            for (var n2 = A(this).entries, e2 = t3 + "", r2 = 0; r2 < n2.length; r2++) if (n2[r2].key === e2) return n2[r2].value;
            return null;
          },
          getAll: function (t3) {
            z(arguments.length, 1);
            for (var n2 = A(this).entries, e2 = t3 + "", r2 = [], o2 = 0; o2 < n2.length; o2++) n2[o2].key === e2 && r2.push(n2[o2].value);
            return r2;
          },
          has: function (t3) {
            z(arguments.length, 1);
            for (var n2 = A(this).entries, e2 = t3 + "", r2 = 0; r2 < n2.length;) if (n2[r2++].key === e2) return true;
            return false;
          },
          set: function (t3, n2) {
            z(arguments.length, 1);
            for (var e2, r2 = A(this), o2 = r2.entries, i3 = false, a2 = t3 + "", u2 = n2 + "", c2 = 0; c2 < o2.length; c2++) (e2 = o2[c2]).key === a2 && (i3 ? o2.splice(c2--, 1) : (i3 = true, e2.value = u2));
            i3 || o2.push({
              key: a2,
              value: u2
            }), r2.updateURL();
          },
          sort: function () {
            var t3,
              n2,
              e2,
              r2 = A(this),
              o2 = r2.entries,
              i3 = o2.slice();
            for (o2.length = 0, e2 = 0; e2 < i3.length; e2++) {
              for (t3 = i3[e2], n2 = 0; n2 < e2; n2++) if (o2[n2].key > t3.key) {
                o2.splice(n2, 0, t3);
                break;
              }
              n2 === e2 && o2.push(t3);
            }
            r2.updateURL();
          },
          forEach: function (t3) {
            for (var n2, e2 = A(this).entries, r2 = h2(t3, arguments.length > 1 ? arguments[1] : void 0, 3), o2 = 0; o2 < e2.length;) r2((n2 = e2[o2++]).value, n2.key, this);
          },
          keys: function () {
            return new D(this, "keys");
          },
          values: function () {
            return new D(this, "values");
          },
          entries: function () {
            return new D(this, "entries");
          }
        }, {
          enumerable: true
        }), a(B, O, B.entries), a(B, "toString", function () {
          for (var t3, n2 = A(this).entries, e2 = [], r2 = 0; r2 < n2.length;) t3 = n2[r2++], e2.push(C(t3.key) + "=" + C(t3.value));
          return e2.join("&");
        }, {
          enumerable: true
        }), c(q, "URLSearchParams"), r({
          global: true,
          forced: !i
        }, {
          URLSearchParams: q
        }), i || "function" != typeof E || "function" != typeof w || r({
          global: true,
          enumerable: true,
          forced: true
        }, {
          fetch: function (t3) {
            var n2,
              e2,
              r2,
              o2 = [t3];
            return arguments.length > 1 && (n2 = arguments[1], d(n2) && (e2 = n2.body, "URLSearchParams" === v(e2) && ((r2 = n2.headers ? new w(n2.headers) : new w()).has("content-type") || r2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), n2 = y(n2, {
              body: x(0, String(e2)),
              headers: x(0, r2)
            }))), o2.push(n2)), E.apply(this, o2);
          }
        }), t2.exports = {
          URLSearchParams: q,
          getState: A
        };
      }, function (t2, n, e) {
        var r = e(20),
          o = e(83);
        t2.exports = function (t3) {
          var n2 = o(t3);
          if ("function" != typeof n2) throw TypeError(String(t3) + " is not iterable");
          return r(n2.call(t3));
        };
      }, function (t2, n, e) {
        e(2)({
          target: "URL",
          proto: true,
          enumerable: true
        }, {
          toJSON: function () {
            return URL.prototype.toString.call(this);
          }
        });
      }]);
    }();
    !function (t) {
      "use strict";

      var e = ("URLSearchParams" in self),
        r = "Symbol" in self && "iterator" in Symbol,
        o = "FileReader" in self && "Blob" in self && function () {
          try {
            return new Blob(), true;
          } catch (t2) {
            return false;
          }
        }(),
        n = ("FormData" in self),
        i = ("ArrayBuffer" in self);
      if (i) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        a = ArrayBuffer.isView || function (t2) {
          return t2 && s.indexOf(Object.prototype.toString.call(t2)) > -1;
        };
      function h2(t2) {
        if ("string" != typeof t2 && (t2 = String(t2)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t2)) throw new TypeError("Invalid character in header field name");
        return t2.toLowerCase();
      }
      function u(t2) {
        return "string" != typeof t2 && (t2 = String(t2)), t2;
      }
      function f(t2) {
        var e2 = {
          next: function () {
            var e3 = t2.shift();
            return {
              done: void 0 === e3,
              value: e3
            };
          }
        };
        return r && (e2[Symbol.iterator] = function () {
          return e2;
        }), e2;
      }
      function d(t2) {
        this.map = {}, t2 instanceof d ? t2.forEach(function (t3, e2) {
          this.append(e2, t3);
        }, this) : Array.isArray(t2) ? t2.forEach(function (t3) {
          this.append(t3[0], t3[1]);
        }, this) : t2 && Object.getOwnPropertyNames(t2).forEach(function (e2) {
          this.append(e2, t2[e2]);
        }, this);
      }
      function c(t2) {
        if (t2.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t2.bodyUsed = true;
      }
      function p(t2) {
        return new Promise(function (e2, r2) {
          t2.onload = function () {
            e2(t2.result);
          }, t2.onerror = function () {
            r2(t2.error);
          };
        });
      }
      function y(t2) {
        var e2 = new FileReader(),
          r2 = p(e2);
        return e2.readAsArrayBuffer(t2), r2;
      }
      function l(t2) {
        if (t2.slice) return t2.slice(0);
        var e2 = new Uint8Array(t2.byteLength);
        return e2.set(new Uint8Array(t2)), e2.buffer;
      }
      function b() {
        return this.bodyUsed = false, this._initBody = function (t2) {
          var r2;
          this._bodyInit = t2, t2 ? "string" == typeof t2 ? this._bodyText = t2 : o && Blob.prototype.isPrototypeOf(t2) ? this._bodyBlob = t2 : n && FormData.prototype.isPrototypeOf(t2) ? this._bodyFormData = t2 : e && URLSearchParams.prototype.isPrototypeOf(t2) ? this._bodyText = t2.toString() : i && o && (r2 = t2) && DataView.prototype.isPrototypeOf(r2) ? (this._bodyArrayBuffer = l(t2.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : i && (ArrayBuffer.prototype.isPrototypeOf(t2) || a(t2)) ? this._bodyArrayBuffer = l(t2) : this._bodyText = t2 = Object.prototype.toString.call(t2) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t2 ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t2) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, o && (this.blob = function () {
          var t2 = c(this);
          if (t2) return t2;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData) throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function () {
          return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y);
        }), this.text = function () {
          var t2,
            e2,
            r2,
            o2 = c(this);
          if (o2) return o2;
          if (this._bodyBlob) return t2 = this._bodyBlob, e2 = new FileReader(), r2 = p(e2), e2.readAsText(t2), r2;
          if (this._bodyArrayBuffer) return Promise.resolve(function (t3) {
            for (var e3 = new Uint8Array(t3), r3 = new Array(e3.length), o3 = 0; o3 < e3.length; o3++) r3[o3] = String.fromCharCode(e3[o3]);
            return r3.join("");
          }(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, n && (this.formData = function () {
          return this.text().then(v);
        }), this.json = function () {
          return this.text().then(JSON.parse);
        }, this;
      }
      d.prototype.append = function (t2, e2) {
        t2 = h2(t2), e2 = u(e2);
        var r2 = this.map[t2];
        this.map[t2] = r2 ? r2 + ", " + e2 : e2;
      }, d.prototype.delete = function (t2) {
        delete this.map[h2(t2)];
      }, d.prototype.get = function (t2) {
        return t2 = h2(t2), this.has(t2) ? this.map[t2] : null;
      }, d.prototype.has = function (t2) {
        return this.map.hasOwnProperty(h2(t2));
      }, d.prototype.set = function (t2, e2) {
        this.map[h2(t2)] = u(e2);
      }, d.prototype.forEach = function (t2, e2) {
        for (var r2 in this.map) this.map.hasOwnProperty(r2) && t2.call(e2, this.map[r2], r2, this);
      }, d.prototype.keys = function () {
        var t2 = [];
        return this.forEach(function (e2, r2) {
          t2.push(r2);
        }), f(t2);
      }, d.prototype.values = function () {
        var t2 = [];
        return this.forEach(function (e2) {
          t2.push(e2);
        }), f(t2);
      }, d.prototype.entries = function () {
        var t2 = [];
        return this.forEach(function (e2, r2) {
          t2.push([r2, e2]);
        }), f(t2);
      }, r && (d.prototype[Symbol.iterator] = d.prototype.entries);
      var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function w(t2, e2) {
        var r2,
          o2,
          n2 = (e2 = e2 || {}).body;
        if (t2 instanceof w) {
          if (t2.bodyUsed) throw new TypeError("Already read");
          this.url = t2.url, this.credentials = t2.credentials, e2.headers || (this.headers = new d(t2.headers)), this.method = t2.method, this.mode = t2.mode, this.signal = t2.signal, n2 || null == t2._bodyInit || (n2 = t2._bodyInit, t2.bodyUsed = true);
        } else this.url = String(t2);
        if (this.credentials = e2.credentials || this.credentials || "same-origin", !e2.headers && this.headers || (this.headers = new d(e2.headers)), this.method = (r2 = e2.method || this.method || "GET", o2 = r2.toUpperCase(), m.indexOf(o2) > -1 ? o2 : r2), this.mode = e2.mode || this.mode || null, this.signal = e2.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n2) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n2);
      }
      function v(t2) {
        var e2 = new FormData();
        return t2.trim().split("&").forEach(function (t3) {
          if (t3) {
            var r2 = t3.split("="),
              o2 = r2.shift().replace(/\+/g, " "),
              n2 = r2.join("=").replace(/\+/g, " ");
            e2.append(decodeURIComponent(o2), decodeURIComponent(n2));
          }
        }), e2;
      }
      function E(t2, e2) {
        e2 || (e2 = {}), this.type = "default", this.status = void 0 === e2.status ? 200 : e2.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e2 ? e2.statusText : "OK", this.headers = new d(e2.headers), this.url = e2.url || "", this._initBody(t2);
      }
      w.prototype.clone = function () {
        return new w(this, {
          body: this._bodyInit
        });
      }, b.call(w.prototype), b.call(E.prototype), E.prototype.clone = function () {
        return new E(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new d(this.headers),
          url: this.url
        });
      }, E.error = function () {
        var t2 = new E(null, {
          status: 0,
          statusText: ""
        });
        return t2.type = "error", t2;
      };
      var A = [301, 302, 303, 307, 308];
      E.redirect = function (t2, e2) {
        if (-1 === A.indexOf(e2)) throw new RangeError("Invalid status code");
        return new E(null, {
          status: e2,
          headers: {
            location: t2
          }
        });
      }, t.DOMException = self.DOMException;
      try {
        new t.DOMException();
      } catch (e2) {
        t.DOMException = function (t2, e3) {
          this.message = t2, this.name = e3;
          var r2 = Error(t2);
          this.stack = r2.stack;
        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException;
      }
      function _(e2, r2) {
        return new Promise(function (n2, i3) {
          var s2 = new w(e2, r2);
          if (s2.signal && s2.signal.aborted) return i3(new t.DOMException("Aborted", "AbortError"));
          var a2 = new XMLHttpRequest();
          function h3() {
            a2.abort();
          }
          a2.onload = function () {
            var t2,
              e3,
              r3 = {
                status: a2.status,
                statusText: a2.statusText,
                headers: (t2 = a2.getAllResponseHeaders() || "", e3 = new d(), t2.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (t3) {
                  var r4 = t3.split(":"),
                    o3 = r4.shift().trim();
                  if (o3) {
                    var n3 = r4.join(":").trim();
                    e3.append(o3, n3);
                  }
                }), e3)
              };
            r3.url = "responseURL" in a2 ? a2.responseURL : r3.headers.get("X-Request-URL");
            var o2 = "response" in a2 ? a2.response : a2.responseText;
            n2(new E(o2, r3));
          }, a2.onerror = function () {
            i3(new TypeError("Network request failed"));
          }, a2.ontimeout = function () {
            i3(new TypeError("Network request failed"));
          }, a2.onabort = function () {
            i3(new t.DOMException("Aborted", "AbortError"));
          }, a2.open(s2.method, s2.url, true), "include" === s2.credentials ? a2.withCredentials = true : "omit" === s2.credentials && (a2.withCredentials = false), "responseType" in a2 && o && (a2.responseType = "blob"), s2.headers.forEach(function (t2, e3) {
            a2.setRequestHeader(e3, t2);
          }), s2.signal && (s2.signal.addEventListener("abort", h3), a2.onreadystatechange = function () {
            4 === a2.readyState && s2.signal.removeEventListener("abort", h3);
          }), a2.send(void 0 === s2._bodyInit ? null : s2._bodyInit);
        });
      }
      _.polyfill = true, self.fetch || (self.fetch = _, self.Headers = d, self.Request = w, self.Response = E), t.Headers = d, t.Request = w, t.Response = E, t.fetch = _;
    }({});
  }
});

// node_modules/@ionic/angular/fesm2020/ionic-angular.mjs
import * as i0 from "@angular/core";
import { Directive, HostListener, Component, ChangeDetectionStrategy, Attribute, Optional, SkipSelf, ViewChild, ContentChild, ContentChildren, forwardRef, Injectable, inject, Injector as Injector2, EnvironmentInjector as EnvironmentInjector2, APP_INITIALIZER, NgZone as NgZone2, NgModule } from "@angular/core";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, MaxValidator, MinValidator } from "@angular/forms";
import * as i2$1 from "@ionic/angular/common";
import { ValueAccessor, setIonicClasses, IonRouterOutlet as IonRouterOutlet$1, IonTabs as IonTabs$1, IonBackButton as IonBackButton$1, IonNav as IonNav$1, RouterLinkDelegateDirective as RouterLinkDelegateDirective$1, RouterLinkWithHrefDelegateDirective as RouterLinkWithHrefDelegateDirective$1, IonModal as IonModal$1, IonPopover as IonPopover$1, OverlayBaseController, MenuController as MenuController$1, AngularDelegate as AngularDelegate2, raf as raf2, ConfigToken, provideComponentInputBinding } from "@ionic/angular/common";
import { AngularDelegate as AngularDelegate3, Config as Config3, DomController, IonicRouteStrategy, NavController as NavController2, NavParams, Platform } from "@ionic/angular/common";
import { __decorate } from "tslib";
import { fromEvent } from "rxjs";
import * as i1 from "@angular/common";
import { DOCUMENT, CommonModule } from "@angular/common";
import * as i2 from "@angular/router";

// node_modules/@ionic/core/dist/esm-es5/index.js
init_animation_dde8cc0d();
init_index_4743453d();
init_ios_transition_3376ccb2();
init_md_transition_f992779f();

// node_modules/@ionic/core/dist/esm-es5/cubic-bezier-fe2083dc.js
var getTimeGivenProgression = function (t, a, r, e, i) {
  return solveCubicBezier(t[1], a[1], r[1], e[1], i).map(function (i3) {
    return solveCubicParametricEquation(t[0], a[0], r[0], e[0], i3);
  });
};
var solveCubicParametricEquation = function (t, a, r, e, i) {
  var n = 3 * a * Math.pow(i - 1, 2);
  var u = -3 * r * i + 3 * r + e * i;
  var o = t * Math.pow(i - 1, 3);
  return i * (n + i * u) - o;
};
var solveCubicBezier = function (t, a, r, e, i) {
  t -= i;
  a -= i;
  r -= i;
  e -= i;
  var n = solveCubicEquation(e - 3 * r + 3 * a - t, 3 * r - 6 * a + 3 * t, 3 * a - 3 * t, t);
  return n.filter(function (t2) {
    return t2 >= 0 && t2 <= 1;
  });
};
var solveQuadraticEquation = function (t, a, r) {
  var e = a * a - 4 * t * r;
  if (e < 0) {
    return [];
  } else {
    return [(-a + Math.sqrt(e)) / (2 * t), (-a - Math.sqrt(e)) / (2 * t)];
  }
};
var solveCubicEquation = function (t, a, r, e) {
  if (t === 0) {
    return solveQuadraticEquation(a, r, e);
  }
  a /= t;
  r /= t;
  e /= t;
  var i = (3 * r - a * a) / 3;
  var n = (2 * a * a * a - 9 * a * r + 27 * e) / 27;
  if (i === 0) {
    return [Math.pow(-n, 1 / 3)];
  } else if (n === 0) {
    return [Math.sqrt(-i), -Math.sqrt(-i)];
  }
  var u = Math.pow(n / 2, 2) + Math.pow(i / 3, 3);
  if (u === 0) {
    return [Math.pow(n / 2, 1 / 2) - a / 3];
  } else if (u > 0) {
    return [Math.pow(-(n / 2) + Math.sqrt(u), 1 / 3) - Math.pow(n / 2 + Math.sqrt(u), 1 / 3) - a / 3];
  }
  var o = Math.sqrt(Math.pow(-(i / 3), 3));
  var v = Math.acos(-(n / (2 * Math.sqrt(Math.pow(-(i / 3), 3)))));
  var h2 = 2 * Math.pow(o, 1 / 3);
  return [h2 * Math.cos(v / 3) - a / 3, h2 * Math.cos((v + 2 * Math.PI) / 3) - a / 3, h2 * Math.cos((v + 4 * Math.PI) / 3) - a / 3];
};

// node_modules/@ionic/core/dist/esm-es5/gesture-controller-1bf57181.js
var GestureController = function () {
  function t() {
    this.gestureId = 0;
    this.requestedStart = /* @__PURE__ */new Map();
    this.disabledGestures = /* @__PURE__ */new Map();
    this.disabledScroll = /* @__PURE__ */new Set();
  }
  t.prototype.createGesture = function (t2) {
    var i;
    return new GestureDelegate(this, this.newID(), t2.name, (i = t2.priority) !== null && i !== void 0 ? i : 0, !!t2.disableScroll);
  };
  t.prototype.createBlocker = function (t2) {
    if (t2 === void 0) {
      t2 = {};
    }
    return new BlockerDelegate(this, this.newID(), t2.disable, !!t2.disableScroll);
  };
  t.prototype.start = function (t2, i, n) {
    if (!this.canStart(t2)) {
      this.requestedStart.delete(i);
      return false;
    }
    this.requestedStart.set(i, n);
    return true;
  };
  t.prototype.capture = function (t2, i, n) {
    if (!this.start(t2, i, n)) {
      return false;
    }
    var e = this.requestedStart;
    var s = -1e4;
    e.forEach(function (t3) {
      s = Math.max(s, t3);
    });
    if (s === n) {
      this.capturedId = i;
      e.clear();
      var r = new CustomEvent("ionGestureCaptured", {
        detail: {
          gestureName: t2
        }
      });
      document.dispatchEvent(r);
      return true;
    }
    e.delete(i);
    return false;
  };
  t.prototype.release = function (t2) {
    this.requestedStart.delete(t2);
    if (this.capturedId === t2) {
      this.capturedId = void 0;
    }
  };
  t.prototype.disableGesture = function (t2, i) {
    var n = this.disabledGestures.get(t2);
    if (n === void 0) {
      n = /* @__PURE__ */new Set();
      this.disabledGestures.set(t2, n);
    }
    n.add(i);
  };
  t.prototype.enableGesture = function (t2, i) {
    var n = this.disabledGestures.get(t2);
    if (n !== void 0) {
      n.delete(i);
    }
  };
  t.prototype.disableScroll = function (t2) {
    this.disabledScroll.add(t2);
    if (this.disabledScroll.size === 1) {
      document.body.classList.add(BACKDROP_NO_SCROLL);
    }
  };
  t.prototype.enableScroll = function (t2) {
    this.disabledScroll.delete(t2);
    if (this.disabledScroll.size === 0) {
      document.body.classList.remove(BACKDROP_NO_SCROLL);
    }
  };
  t.prototype.canStart = function (t2) {
    if (this.capturedId !== void 0) {
      return false;
    }
    if (this.isDisabled(t2)) {
      return false;
    }
    return true;
  };
  t.prototype.isCaptured = function () {
    return this.capturedId !== void 0;
  };
  t.prototype.isScrollDisabled = function () {
    return this.disabledScroll.size > 0;
  };
  t.prototype.isDisabled = function (t2) {
    var i = this.disabledGestures.get(t2);
    if (i && i.size > 0) {
      return true;
    }
    return false;
  };
  t.prototype.newID = function () {
    this.gestureId++;
    return this.gestureId;
  };
  return t;
}();
var GestureDelegate = function () {
  function t(t2, i, n, e, s) {
    this.id = i;
    this.name = n;
    this.disableScroll = s;
    this.priority = e * 1e6 + i;
    this.ctrl = t2;
  }
  t.prototype.canStart = function () {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.canStart(this.name);
  };
  t.prototype.start = function () {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.start(this.name, this.id, this.priority);
  };
  t.prototype.capture = function () {
    if (!this.ctrl) {
      return false;
    }
    var t2 = this.ctrl.capture(this.name, this.id, this.priority);
    if (t2 && this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
    return t2;
  };
  t.prototype.release = function () {
    if (this.ctrl) {
      this.ctrl.release(this.id);
      if (this.disableScroll) {
        this.ctrl.enableScroll(this.id);
      }
    }
  };
  t.prototype.destroy = function () {
    this.release();
    this.ctrl = void 0;
  };
  return t;
}();
var BlockerDelegate = function () {
  function t(t2, i, n, e) {
    this.id = i;
    this.disable = n;
    this.disableScroll = e;
    this.ctrl = t2;
  }
  t.prototype.block = function () {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (var t2 = 0, i = this.disable; t2 < i.length; t2++) {
        var n = i[t2];
        this.ctrl.disableGesture(n, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
  };
  t.prototype.unblock = function () {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (var t2 = 0, i = this.disable; t2 < i.length; t2++) {
        var n = i[t2];
        this.ctrl.enableGesture(n, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.enableScroll(this.id);
    }
  };
  t.prototype.destroy = function () {
    this.unblock();
    this.ctrl = void 0;
  };
  return t;
}();
var BACKDROP_NO_SCROLL = "backdrop-no-scroll";
var GESTURE_CONTROLLER = new GestureController();

// node_modules/@ionic/core/dist/esm-es5/index-2cf77112.js
var addEventListener = function (e, r, t, a) {
  var n = supportsPassive(e) ? {
    capture: !!a.capture,
    passive: !!a.passive
  } : !!a.capture;
  var i;
  var f;
  if (e["__zone_symbol__addEventListener"]) {
    i = "__zone_symbol__addEventListener";
    f = "__zone_symbol__removeEventListener";
  } else {
    i = "addEventListener";
    f = "removeEventListener";
  }
  e[i](r, t, n);
  return function () {
    e[f](r, t, n);
  };
};
var supportsPassive = function (e) {
  if (_sPassive === void 0) {
    try {
      var r = Object.defineProperty({}, "passive", {
        get: function () {
          _sPassive = true;
        }
      });
      e.addEventListener("optsTest", function () {
        return;
      }, r);
    } catch (e2) {
      _sPassive = false;
    }
  }
  return !!_sPassive;
};
var _sPassive;
var MOUSE_WAIT = 2e3;
var createPointerEvents = function (e, r, t, a, n) {
  var i;
  var f;
  var v;
  var u;
  var s;
  var o;
  var c;
  var d = 0;
  var l = function (a2) {
    d = Date.now() + MOUSE_WAIT;
    if (!r(a2)) {
      return;
    }
    if (!f && t) {
      f = addEventListener(e, "touchmove", t, n);
    }
    if (!v) {
      v = addEventListener(a2.target, "touchend", m, n);
    }
    if (!u) {
      u = addEventListener(a2.target, "touchcancel", m, n);
    }
  };
  var E = function (a2) {
    if (d > Date.now()) {
      return;
    }
    if (!r(a2)) {
      return;
    }
    if (!o && t) {
      o = addEventListener(getDocument(e), "mousemove", t, n);
    }
    if (!c) {
      c = addEventListener(getDocument(e), "mouseup", p, n);
    }
  };
  var m = function (e2) {
    _();
    if (a) {
      a(e2);
    }
  };
  var p = function (e2) {
    L();
    if (a) {
      a(e2);
    }
  };
  var _ = function () {
    if (f) {
      f();
    }
    if (v) {
      v();
    }
    if (u) {
      u();
    }
    f = v = u = void 0;
  };
  var L = function () {
    if (o) {
      o();
    }
    if (c) {
      c();
    }
    o = c = void 0;
  };
  var D = function () {
    _();
    L();
  };
  var G = function (r2) {
    if (r2 === void 0) {
      r2 = true;
    }
    if (!r2) {
      if (i) {
        i();
      }
      if (s) {
        s();
      }
      i = s = void 0;
      D();
    } else {
      if (!i) {
        i = addEventListener(e, "touchstart", l, n);
      }
      if (!s) {
        s = addEventListener(e, "mousedown", E, n);
      }
    }
  };
  var P = function () {
    G(false);
    a = t = r = void 0;
  };
  return {
    enable: G,
    stop: D,
    destroy: P
  };
};
var getDocument = function (e) {
  return e instanceof Document ? e : e.ownerDocument;
};
var createPanRecognizer = function (e, r, t) {
  var a = t * (Math.PI / 180);
  var n = e === "x";
  var i = Math.cos(a);
  var f = r * r;
  var v = 0;
  var u = 0;
  var s = false;
  var o = 0;
  return {
    start: function (e2, r2) {
      v = e2;
      u = r2;
      o = 0;
      s = true;
    },
    detect: function (e2, r2) {
      if (!s) {
        return false;
      }
      var t2 = e2 - v;
      var a2 = r2 - u;
      var c = t2 * t2 + a2 * a2;
      if (c < f) {
        return false;
      }
      var d = Math.sqrt(c);
      var l = (n ? t2 : a2) / d;
      if (l > i) {
        o = 1;
      } else if (l < -i) {
        o = -1;
      } else {
        o = 0;
      }
      s = false;
      return true;
    },
    isGesture: function () {
      return o !== 0;
    },
    getDirection: function () {
      return o;
    }
  };
};
var createGesture = function (e) {
  var r = false;
  var t = false;
  var a = true;
  var n = false;
  var i = Object.assign({
    disableScroll: false,
    direction: "x",
    gesturePriority: 0,
    passive: true,
    maxAngle: 40,
    threshold: 10
  }, e);
  var f = i.canStart;
  var v = i.onWillStart;
  var u = i.onStart;
  var s = i.onEnd;
  var o = i.notCaptured;
  var c = i.onMove;
  var d = i.threshold;
  var l = i.passive;
  var E = i.blurOnStart;
  var m = {
    type: "pan",
    startX: 0,
    startY: 0,
    startTime: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    deltaX: 0,
    deltaY: 0,
    currentTime: 0,
    event: void 0,
    data: void 0
  };
  var p = createPanRecognizer(i.direction, i.threshold, i.maxAngle);
  var _ = GESTURE_CONTROLLER.createGesture({
    name: e.gestureName,
    priority: e.gesturePriority,
    disableScroll: e.disableScroll
  });
  var L = function (e2) {
    var r2 = now(e2);
    if (t || !a) {
      return false;
    }
    updateDetail(e2, m);
    m.startX = m.currentX;
    m.startY = m.currentY;
    m.startTime = m.currentTime = r2;
    m.velocityX = m.velocityY = m.deltaX = m.deltaY = 0;
    m.event = e2;
    if (f && f(m) === false) {
      return false;
    }
    _.release();
    if (!_.start()) {
      return false;
    }
    t = true;
    if (d === 0) {
      return P();
    }
    p.start(m.startX, m.startY);
    return true;
  };
  var D = function (e2) {
    if (r) {
      if (!n && a) {
        n = true;
        calcGestureData(m, e2);
        requestAnimationFrame(G);
      }
      return;
    }
    calcGestureData(m, e2);
    if (p.detect(m.currentX, m.currentY)) {
      if (!p.isGesture() || !P()) {
        h2();
      }
    }
  };
  var G = function () {
    if (!r) {
      return;
    }
    n = false;
    if (c) {
      c(m);
    }
  };
  var P = function () {
    if (!_.capture()) {
      return false;
    }
    r = true;
    a = false;
    m.startX = m.currentX;
    m.startY = m.currentY;
    m.startTime = m.currentTime;
    if (v) {
      v(m).then(y);
    } else {
      y();
    }
    return true;
  };
  var g = function () {
    if (typeof document !== "undefined") {
      var e2 = document.activeElement;
      if (e2 === null || e2 === void 0 ? void 0 : e2.blur) {
        e2.blur();
      }
    }
  };
  var y = function () {
    if (E) {
      g();
    }
    if (u) {
      u(m);
    }
    a = true;
  };
  var R = function () {
    r = false;
    t = false;
    n = false;
    a = true;
    _.release();
  };
  var T = function (e2) {
    var t2 = r;
    var n2 = a;
    R();
    if (!n2) {
      return;
    }
    calcGestureData(m, e2);
    if (t2) {
      if (s) {
        s(m);
      }
      return;
    }
    if (o) {
      o(m);
    }
  };
  var b = createPointerEvents(i.el, L, D, T, {
    capture: false,
    passive: l
  });
  var h2 = function () {
    R();
    b.stop();
    if (o) {
      o(m);
    }
  };
  return {
    enable: function (e2) {
      if (e2 === void 0) {
        e2 = true;
      }
      if (!e2) {
        if (r) {
          T(void 0);
        }
        R();
      }
      b.enable(e2);
    },
    destroy: function () {
      _.destroy();
      b.destroy();
    }
  };
};
var calcGestureData = function (e, r) {
  if (!r) {
    return;
  }
  var t = e.currentX;
  var a = e.currentY;
  var n = e.currentTime;
  updateDetail(r, e);
  var i = e.currentX;
  var f = e.currentY;
  var v = e.currentTime = now(r);
  var u = v - n;
  if (u > 0 && u < 100) {
    var s = (i - t) / u;
    var o = (f - a) / u;
    e.velocityX = s * 0.7 + e.velocityX * 0.3;
    e.velocityY = o * 0.7 + e.velocityY * 0.3;
  }
  e.deltaX = i - e.startX;
  e.deltaY = f - e.startY;
  e.event = r;
};
var updateDetail = function (e, r) {
  var t = 0;
  var a = 0;
  if (e) {
    var n = e.changedTouches;
    if (n && n.length > 0) {
      var i = n[0];
      t = i.clientX;
      a = i.clientY;
    } else if (e.pageX !== void 0) {
      t = e.pageX;
      a = e.pageY;
    }
  }
  r.currentX = t;
  r.currentY = a;
};
var now = function (e) {
  return e.timeStamp || Date.now();
};

// node_modules/@ionic/core/dist/esm-es5/ionic-global-1f99b929.js
init_index_b7d870cf();
var Config = function () {
  function i() {
    this.m = /* @__PURE__ */new Map();
  }
  i.prototype.reset = function (i3) {
    this.m = new Map(Object.entries(i3));
  };
  i.prototype.get = function (i3, t) {
    var n = this.m.get(i3);
    return n !== void 0 ? n : t;
  };
  i.prototype.getBoolean = function (i3, t) {
    if (t === void 0) {
      t = false;
    }
    var n = this.m.get(i3);
    if (n === void 0) {
      return t;
    }
    if (typeof n === "string") {
      return n === "true";
    }
    return !!n;
  };
  i.prototype.getNumber = function (i3, t) {
    var n = parseFloat(this.m.get(i3));
    return isNaN(n) ? t !== void 0 ? t : NaN : n;
  };
  i.prototype.set = function (i3, t) {
    this.m.set(i3, t);
  };
  return i;
}();
var config = new Config();
var configFromSession = function (i) {
  try {
    var t = i.sessionStorage.getItem(IONIC_SESSION_KEY);
    return t !== null ? JSON.parse(t) : {};
  } catch (i3) {
    return {};
  }
};
var saveConfig = function (i, t) {
  try {
    i.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(t));
  } catch (i3) {
    return;
  }
};
var configFromURL = function (i) {
  var t = {};
  i.location.search.slice(1).split("&").map(function (i3) {
    return i3.split("=");
  }).map(function (i3) {
    var t2 = i3[0],
      n = i3[1];
    return [decodeURIComponent(t2), decodeURIComponent(n)];
  }).filter(function (i3) {
    var t2 = i3[0];
    return startsWith(t2, IONIC_PREFIX);
  }).map(function (i3) {
    var t2 = i3[0],
      n = i3[1];
    return [t2.slice(IONIC_PREFIX.length), n];
  }).forEach(function (i3) {
    var n = i3[0],
      r = i3[1];
    t[n] = r;
  });
  return t;
};
var startsWith = function (i, t) {
  return i.substr(0, t.length) === t;
};
var IONIC_PREFIX = "ionic:";
var IONIC_SESSION_KEY = "ionic-persist-config";
var getPlatforms = function (i) {
  return setupPlatforms(i);
};
var isPlatform = function (i, t) {
  if (typeof i === "string") {
    t = i;
    i = void 0;
  }
  return getPlatforms(i).includes(t);
};
var setupPlatforms = function (i) {
  if (i === void 0) {
    i = window;
  }
  if (typeof i === "undefined") {
    return [];
  }
  i.Ionic = i.Ionic || {};
  var t = i.Ionic.platforms;
  if (t == null) {
    t = i.Ionic.platforms = detectPlatforms(i);
    t.forEach(function (t2) {
      return i.document.documentElement.classList.add("plt-".concat(t2));
    });
  }
  return t;
};
var detectPlatforms = function (i) {
  var t = config.get("platform");
  return Object.keys(PLATFORMS_MAP).filter(function (n) {
    var r = t === null || t === void 0 ? void 0 : t[n];
    return typeof r === "function" ? r(i) : PLATFORMS_MAP[n](i);
  });
};
var isMobileWeb = function (i) {
  return isMobile(i) && !isHybrid(i);
};
var isIpad = function (i) {
  if (testUserAgent(i, /iPad/i)) {
    return true;
  }
  if (testUserAgent(i, /Macintosh/i) && isMobile(i)) {
    return true;
  }
  return false;
};
var isIphone = function (i) {
  return testUserAgent(i, /iPhone/i);
};
var isIOS = function (i) {
  return testUserAgent(i, /iPhone|iPod/i) || isIpad(i);
};
var isAndroid = function (i) {
  return testUserAgent(i, /android|sink/i);
};
var isAndroidTablet = function (i) {
  return isAndroid(i) && !testUserAgent(i, /mobile/i);
};
var isPhablet = function (i) {
  var t = i.innerWidth;
  var n = i.innerHeight;
  var r = Math.min(t, n);
  var e = Math.max(t, n);
  return r > 390 && r < 520 && e > 620 && e < 800;
};
var isTablet = function (i) {
  var t = i.innerWidth;
  var n = i.innerHeight;
  var r = Math.min(t, n);
  var e = Math.max(t, n);
  return isIpad(i) || isAndroidTablet(i) || r > 460 && r < 820 && e > 780 && e < 1400;
};
var isMobile = function (i) {
  return matchMedia(i, "(any-pointer:coarse)");
};
var isDesktop = function (i) {
  return !isMobile(i);
};
var isHybrid = function (i) {
  return isCordova(i) || isCapacitorNative(i);
};
var isCordova = function (i) {
  return !!(i["cordova"] || i["phonegap"] || i["PhoneGap"]);
};
var isCapacitorNative = function (i) {
  var t = i["Capacitor"];
  return !!(t === null || t === void 0 ? void 0 : t.isNative);
};
var isElectron = function (i) {
  return testUserAgent(i, /electron/i);
};
var isPWA = function (i) {
  var t;
  return !!(((t = i.matchMedia) === null || t === void 0 ? void 0 : t.call(i, "(display-mode: standalone)").matches) || i.navigator.standalone);
};
var testUserAgent = function (i, t) {
  return t.test(i.navigator.userAgent);
};
var matchMedia = function (i, t) {
  var n;
  return (n = i.matchMedia) === null || n === void 0 ? void 0 : n.call(i, t).matches;
};
var PLATFORMS_MAP = {
  ipad: isIpad,
  iphone: isIphone,
  ios: isIOS,
  android: isAndroid,
  phablet: isPhablet,
  tablet: isTablet,
  cordova: isCordova,
  capacitor: isCapacitorNative,
  electron: isElectron,
  pwa: isPWA,
  mobile: isMobile,
  mobileweb: isMobileWeb,
  desktop: isDesktop,
  hybrid: isHybrid
};
var defaultMode;
var getIonMode = function (i) {
  return i && getMode(i) || defaultMode;
};
var initialize = function (i) {
  if (i === void 0) {
    i = {};
  }
  if (typeof window === "undefined") {
    return;
  }
  var t = window.document;
  var n = window;
  var r = n.Ionic = n.Ionic || {};
  var e = {};
  if (i._ael) {
    e.ael = i._ael;
  }
  if (i._rel) {
    e.rel = i._rel;
  }
  if (i._ce) {
    e.ce = i._ce;
  }
  setPlatformHelpers(e);
  var o = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(n)), {
    persistConfig: false
  }), r.config), configFromURL(n)), i);
  config.reset(o);
  if (config.getBoolean("persistConfig")) {
    saveConfig(n, o);
  }
  setupPlatforms(n);
  r.config = config;
  r.mode = defaultMode = config.get("mode", t.documentElement.getAttribute("mode") || (isPlatform(n, "ios") ? "ios" : "md"));
  config.set("mode", defaultMode);
  t.documentElement.setAttribute("mode", defaultMode);
  t.documentElement.classList.add(defaultMode);
  if (config.getBoolean("_testing")) {
    config.set("animated", false);
  }
  var a = function (i3) {
    var t2;
    return (t2 = i3.tagName) === null || t2 === void 0 ? void 0 : t2.startsWith("ION-");
  };
  var s = function (i3) {
    return ["ios", "md"].includes(i3);
  };
  setMode(function (i3) {
    while (i3) {
      var t2 = i3.mode || i3.getAttribute("mode");
      if (t2) {
        if (s(t2)) {
          return t2;
        } else if (a(i3)) {
          console.warn('Invalid ionic mode: "' + t2 + '", expected: "ios" or "md"');
        }
      }
      i3 = i3.parentElement;
    }
    return defaultMode;
  });
};

// node_modules/@ionic/core/dist/esm-es5/index.js
init_helpers_ae653409();

// node_modules/@ionic/core/dist/esm-es5/config-49c88215.js
var IonicSafeString = /* @__PURE__ */function () {
  function e(e2) {
    this.value = e2;
  }
  return e;
}();
var setupConfig = function (e) {
  var r = window;
  var n = r.Ionic;
  if (n && n.config && n.config.constructor.name !== "Object") {
    return;
  }
  r.Ionic = r.Ionic || {};
  r.Ionic.config = Object.assign(Object.assign({}, r.Ionic.config), e);
  return r.Ionic.config;
};

// node_modules/@ionic/core/dist/esm-es5/theme-01f3f29c.js
import { __awaiter as __awaiter3, __generator as __generator3 } from "tslib";
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (r, t, n, e) {
  return __awaiter3(void 0, void 0, void 0, function () {
    var o;
    return __generator3(this, function (a) {
      if (r != null && r[0] !== "#" && !SCHEME.test(r)) {
        o = document.querySelector("ion-router");
        if (o) {
          if (t != null) {
            t.preventDefault();
          }
          return [2, o.push(r, n, e)];
        }
      }
      return [2, false];
    });
  });
};

// node_modules/@ionic/core/dist/esm-es5/index-1193f005.js
init_index_a5d50daf();
import { __awaiter as __awaiter5, __generator as __generator5 } from "tslib";

// node_modules/@ionic/core/dist/esm-es5/hardware-back-button-b2bc76db.js
import { __awaiter as __awaiter4, __generator as __generator4 } from "tslib";
var MENU_BACK_BUTTON_PRIORITY = 99;

// node_modules/@ionic/core/dist/esm-es5/index-9b0d46f4.js
import { __spreadArray as __spreadArray4 } from "tslib";
var printIonWarning = function (r) {
  var n = [];
  for (var o = 1; o < arguments.length; o++) {
    n[o - 1] = arguments[o];
  }
  return console.warn.apply(console, __spreadArray4(["[Ionic Warning]: ".concat(r)], n, false));
};

// node_modules/@ionic/core/dist/esm-es5/index-1193f005.js
init_helpers_ae653409();
init_animation_dde8cc0d();
var baseAnimation = function (n) {
  return createAnimation().duration(n ? 400 : 300);
};
var menuOverlayAnimation = function (n) {
  var r;
  var e;
  var t = n.width + 8;
  var i = createAnimation();
  var a = createAnimation();
  if (n.isEndSide) {
    r = t + "px";
    e = "0px";
  } else {
    r = -t + "px";
    e = "0px";
  }
  i.addElement(n.menuInnerEl).fromTo("transform", "translateX(".concat(r, ")"), "translateX(".concat(e, ")"));
  var o = getIonMode(n);
  var u = o === "ios";
  var s = u ? 0.2 : 0.25;
  a.addElement(n.backdropEl).fromTo("opacity", 0.01, s);
  return baseAnimation(u).addAnimation([i, a]);
};
var menuPushAnimation = function (n) {
  var r;
  var e;
  var t = getIonMode(n);
  var i = n.width;
  if (n.isEndSide) {
    r = -i + "px";
    e = i + "px";
  } else {
    r = i + "px";
    e = -i + "px";
  }
  var a = createAnimation().addElement(n.menuInnerEl).fromTo("transform", "translateX(".concat(e, ")"), "translateX(0px)");
  var o = createAnimation().addElement(n.contentEl).fromTo("transform", "translateX(0px)", "translateX(".concat(r, ")"));
  var u = createAnimation().addElement(n.backdropEl).fromTo("opacity", 0.01, 0.32);
  return baseAnimation(t === "ios").addAnimation([a, o, u]);
};
var menuRevealAnimation = function (n) {
  var r = getIonMode(n);
  var e = n.width * (n.isEndSide ? -1 : 1) + "px";
  var t = createAnimation().addElement(n.contentEl).fromTo("transform", "translateX(0px)", "translateX(".concat(e, ")"));
  return baseAnimation(r === "ios").addAnimation(t);
};
var createMenuController = function () {
  var n = /* @__PURE__ */new Map();
  var r = [];
  var e = function (n2) {
    return __awaiter5(void 0, void 0, void 0, function () {
      var r2;
      return __generator5(this, function (e2) {
        switch (e2.label) {
          case 0:
            return [4, c(n2, true)];
          case 1:
            r2 = e2.sent();
            if (r2) {
              return [2, r2.open()];
            }
            return [2, false];
        }
      });
    });
  };
  var t = function (n2) {
    return __awaiter5(void 0, void 0, void 0, function () {
      var r2;
      return __generator5(this, function (e2) {
        switch (e2.label) {
          case 0:
            return [4, n2 !== void 0 ? c(n2, true) : f()];
          case 1:
            r2 = e2.sent();
            if (r2 !== void 0) {
              return [2, r2.close()];
            }
            return [2, false];
        }
      });
    });
  };
  var i = function (n2) {
    return __awaiter5(void 0, void 0, void 0, function () {
      var r2;
      return __generator5(this, function (e2) {
        switch (e2.label) {
          case 0:
            return [4, c(n2, true)];
          case 1:
            r2 = e2.sent();
            if (r2) {
              return [2, r2.toggle()];
            }
            return [2, false];
        }
      });
    });
  };
  var a = function (n2, r2) {
    return __awaiter5(void 0, void 0, void 0, function () {
      var e2;
      return __generator5(this, function (t2) {
        switch (t2.label) {
          case 0:
            return [4, c(r2)];
          case 1:
            e2 = t2.sent();
            if (e2) {
              e2.disabled = !n2;
            }
            return [2, e2];
        }
      });
    });
  };
  var o = function (n2, r2) {
    return __awaiter5(void 0, void 0, void 0, function () {
      var e2;
      return __generator5(this, function (t2) {
        switch (t2.label) {
          case 0:
            return [4, c(r2)];
          case 1:
            e2 = t2.sent();
            if (e2) {
              e2.swipeGesture = n2;
            }
            return [2, e2];
        }
      });
    });
  };
  var u = function (n2) {
    return __awaiter5(void 0, void 0, void 0, function () {
      var r2, r2;
      return __generator5(this, function (e2) {
        switch (e2.label) {
          case 0:
            if (!(n2 != null)) return [3, 2];
            return [4, c(n2)];
          case 1:
            r2 = e2.sent();
            return [2, r2 !== void 0 && r2.isOpen()];
          case 2:
            return [4, f()];
          case 3:
            r2 = e2.sent();
            return [2, r2 !== void 0];
        }
      });
    });
  };
  var s = function (n2) {
    return __awaiter5(void 0, void 0, void 0, function () {
      var r2;
      return __generator5(this, function (e2) {
        switch (e2.label) {
          case 0:
            return [4, c(n2)];
          case 1:
            r2 = e2.sent();
            if (r2) {
              return [2, !r2.disabled];
            }
            return [2, false];
        }
      });
    });
  };
  var c = function (n2, e2) {
    if (e2 === void 0) {
      e2 = false;
    }
    return __awaiter5(void 0, void 0, void 0, function () {
      var t2, i3, a2;
      return __generator5(this, function (o2) {
        switch (o2.label) {
          case 0:
            return [4, x()];
          case 1:
            o2.sent();
            if (n2 === "start" || n2 === "end") {
              t2 = r.filter(function (r2) {
                return r2.side === n2 && !r2.disabled;
              });
              if (t2.length >= 1) {
                if (t2.length > 1 && e2) {
                  printIonWarning('menuController queried for a menu on the "'.concat(n2, '" side, but ').concat(t2.length, " menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."), t2.map(function (n3) {
                    return n3.el;
                  }));
                }
                return [2, t2[0].el];
              }
              i3 = r.filter(function (r2) {
                return r2.side === n2;
              });
              if (i3.length >= 1) {
                if (i3.length > 1 && e2) {
                  printIonWarning('menuController queried for a menu on the "'.concat(n2, '" side, but ').concat(i3.length, " menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side."), i3.map(function (n3) {
                    return n3.el;
                  }));
                }
                return [2, i3[0].el];
              }
            } else if (n2 != null) {
              return [2, b(function (r2) {
                return r2.menuId === n2;
              })];
            }
            a2 = b(function (n3) {
              return !n3.disabled;
            });
            if (a2) {
              return [2, a2];
            }
            return [2, r.length > 0 ? r[0].el : void 0];
        }
      });
    });
  };
  var f = function () {
    return __awaiter5(void 0, void 0, void 0, function () {
      return __generator5(this, function (n2) {
        switch (n2.label) {
          case 0:
            return [4, x()];
          case 1:
            n2.sent();
            return [2, w()];
        }
      });
    });
  };
  var v = function () {
    return __awaiter5(void 0, void 0, void 0, function () {
      return __generator5(this, function (n2) {
        switch (n2.label) {
          case 0:
            return [4, x()];
          case 1:
            n2.sent();
            return [2, g()];
        }
      });
    });
  };
  var d = function () {
    return __awaiter5(void 0, void 0, void 0, function () {
      return __generator5(this, function (n2) {
        switch (n2.label) {
          case 0:
            return [4, x()];
          case 1:
            n2.sent();
            return [2, A()];
        }
      });
    });
  };
  var m = function (r2, e2) {
    n.set(r2, e2);
  };
  var _ = function (n2) {
    if (r.indexOf(n2) < 0) {
      r.push(n2);
    }
  };
  var l = function (n2) {
    var e2 = r.indexOf(n2);
    if (e2 > -1) {
      r.splice(e2, 1);
    }
  };
  var h2 = function (n2, r2, e2) {
    return __awaiter5(void 0, void 0, void 0, function () {
      var t2;
      return __generator5(this, function (i3) {
        switch (i3.label) {
          case 0:
            if (A()) {
              return [2, false];
            }
            if (!r2) return [3, 3];
            return [4, f()];
          case 1:
            t2 = i3.sent();
            if (!(t2 && n2.el !== t2)) return [3, 3];
            return [4, t2.setOpen(false, false)];
          case 2:
            i3.sent();
            i3.label = 3;
          case 3:
            return [2, n2._setOpen(r2, e2)];
        }
      });
    });
  };
  var p = function (r2, e2) {
    var t2 = n.get(r2);
    if (!t2) {
      throw new Error("animation not registered");
    }
    var i3 = t2(e2);
    return i3;
  };
  var w = function () {
    return b(function (n2) {
      return n2._isOpen;
    });
  };
  var g = function () {
    return r.map(function (n2) {
      return n2.el;
    });
  };
  var A = function () {
    return r.some(function (n2) {
      return n2.isAnimating;
    });
  };
  var b = function (n2) {
    var e2 = r.find(n2);
    if (e2 !== void 0) {
      return e2.el;
    }
    return void 0;
  };
  var x = function () {
    return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(function (n2) {
      return new Promise(function (r2) {
        return componentOnReady(n2, r2);
      });
    }));
  };
  m("reveal", menuRevealAnimation);
  m("push", menuPushAnimation);
  m("overlay", menuOverlayAnimation);
  doc === null || doc === void 0 ? void 0 : doc.addEventListener("ionBackButton", function (n2) {
    var r2 = w();
    if (r2) {
      n2.detail.register(MENU_BACK_BUTTON_PRIORITY, function () {
        return r2.close();
      });
    }
  });
  return {
    registerAnimation: m,
    get: c,
    getMenus: v,
    getOpen: f,
    isEnabled: s,
    swipeGesture: o,
    isAnimating: d,
    isOpen: u,
    enable: a,
    toggle: i,
    close: t,
    open: e,
    _getOpenSync: w,
    _createAnimation: p,
    _register: _,
    _unregister: l,
    _setOpen: h2
  };
};
var menuController = createMenuController();

// node_modules/@ionic/core/dist/esm-es5/overlays-b33f6bca.js
init_index_a5d50daf();
import { __awaiter as __awaiter7, __generator as __generator7, __spreadArray as __spreadArray5 } from "tslib";

// node_modules/@ionic/core/dist/esm-es5/framework-delegate-bc1fd82a.js
init_helpers_ae653409();
import { __awaiter as __awaiter6, __generator as __generator6 } from "tslib";

// node_modules/@ionic/core/dist/esm-es5/overlays-b33f6bca.js
init_helpers_ae653409();
var createController = function (e) {
  return {
    create: function (n) {
      return createOverlay(e, n);
    },
    dismiss: function (n, r, t) {
      return dismissOverlay(document, n, r, e, t);
    },
    getTop: function () {
      return __awaiter7(this, void 0, void 0, function () {
        return __generator7(this, function (n) {
          return [2, getPresentedOverlay(document, e)];
        });
      });
    }
  };
};
var alertController = createController("ion-alert");
var actionSheetController = createController("ion-action-sheet");
var loadingController = createController("ion-loading");
var modalController = createController("ion-modal");
var pickerController = createController("ion-picker");
var popoverController = createController("ion-popover");
var toastController = createController("ion-toast");
var createOverlay = function (e, n) {
  if (typeof window !== "undefined" && typeof window.customElements !== "undefined") {
    return window.customElements.whenDefined(e).then(function () {
      var r = document.createElement(e);
      r.classList.add("overlay-hidden");
      Object.assign(r, Object.assign(Object.assign({}, n), {
        hasController: true
      }));
      getAppRoot(document).appendChild(r);
      return new Promise(function (e2) {
        return componentOnReady(r, e2);
      });
    });
  }
  return Promise.resolve();
};
var isOverlayHidden = function (e) {
  return e.classList.contains("overlay-hidden");
};
var dismissOverlay = function (e, n, r, t, o) {
  var i = getPresentedOverlay(e, t, o);
  if (!i) {
    return Promise.reject("overlay does not exist");
  }
  return i.dismiss(n, r);
};
var getOverlays = function (e, n) {
  if (n === void 0) {
    n = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast";
  }
  return Array.from(e.querySelectorAll(n)).filter(function (e2) {
    return e2.overlayIndex > 0;
  });
};
var getPresentedOverlays = function (e, n) {
  return getOverlays(e, n).filter(function (e2) {
    return !isOverlayHidden(e2);
  });
};
var getPresentedOverlay = function (e, n, r) {
  var t = getPresentedOverlays(e, n);
  return r === void 0 ? t[t.length - 1] : t.find(function (e2) {
    return e2.id === r;
  });
};
var getAppRoot = function (e) {
  return e.querySelector("ion-app") || e.body;
};

// node_modules/@ionic/core/dist/esm-es5/index.js
init_index_a5d50daf();
init_index_b7d870cf();
var IonicSlides = function (e) {
  var o = e.swiper,
    t = e.extendParams;
  var s = {
    effect: void 0,
    direction: "horizontal",
    initialSlide: 0,
    loop: false,
    parallax: false,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    centeredSlides: false,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    touchEventsTarget: "container",
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    autoHeight: false,
    setWrapperSize: false,
    zoom: {
      maxRatio: 3,
      minRatio: 1,
      toggle: false
    },
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    touchStartPreventDefault: false,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    threshold: 0,
    touchMoveStopPropagation: true,
    touchReleaseOnEdges: false,
    iOSEdgeSwipeDetection: false,
    iOSEdgeSwipeThreshold: 20,
    resistance: true,
    resistanceRatio: 0.85,
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    loopAdditionalSlides: 0,
    noSwiping: true,
    runCallbacksOnInit: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    },
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    fadeEffect: {
      crossFade: false
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide"
    }
  };
  if (o.pagination) {
    s.pagination = {
      type: "bullets",
      clickable: false,
      hideOnClick: false
    };
  }
  if (o.scrollbar) {
    s.scrollbar = {
      hide: true
    };
  }
  t(s);
};

// node_modules/@ionic/core/dist/esm/polyfills/index.js
function applyPolyfills() {
  var promises = [];
  if (typeof window !== "undefined") {
    var win3 = window;
    if (!win3.customElements || win3.Element && (!win3.Element.prototype.closest || !win3.Element.prototype.matches || !win3.Element.prototype.remove || !win3.Element.prototype.getRootNode)) {
      promises.push(Promise.resolve().then(() => __toESM(require_dom())));
    }
    var checkIfURLIsSupported = function () {
      try {
        var u = new URL("b", "http://a");
        u.pathname = "c%20d";
        return u.href === "http://a/c%20d" && u.searchParams;
      } catch (e) {
        return false;
      }
    };
    if ("function" !== typeof Object.assign || !Object.entries || !Array.prototype.find || !Array.prototype.includes || !String.prototype.startsWith || !String.prototype.endsWith || win3.NodeList && !win3.NodeList.prototype.forEach || !win3.fetch || !checkIfURLIsSupported() || typeof WeakMap == "undefined") {
      promises.push(Promise.resolve().then(() => __toESM(require_core_js())));
    }
  }
  return Promise.all(promises);
}

// node_modules/@ionic/core/dist/esm-es5/loader.js
init_index_b7d870cf();
init_index_b7d870cf();

// node_modules/@ionic/core/dist/esm-es5/app-globals-8c62bec2.js
var globalScripts = initialize;

// node_modules/@ionic/core/dist/esm-es5/loader.js
var defineCustomElements = function (e, o) {
  if (typeof window === "undefined") return void 0;
  globalScripts();
  return bootstrapLazy(JSON.parse('[["ion-menu_3",[[33,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[33,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"],[0,"keydown","onKeydown"]],{"type":["typeChanged"],"disabled":["disabledChanged"],"side":["sideChanged"],"swipeGesture":["swipeGestureChanged"]}],[1,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-fab_3",[[33,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1],"closeIcon":[1,"close-icon"]}],[1,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]},null,{"activated":["activatedChanged"]}],[1,"ion-fab-list",{"activated":[4],"side":[1]},null,{"activated":["activatedChanged"]}]]],["ion-refresher_2",[[0,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[32,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-back-button",[[33,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16]}]]],["ion-toast",[[33,"ion-toast",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"color":[513],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"layout":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"positionAnchor":[1,"position-anchor"],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16],"swipeGesture":[1,"swipe-gesture"],"isOpen":[4,"is-open"],"trigger":[1],"revealContentToScreenReader":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"swipeGesture":["swipeGestureChanged"],"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-card_5",[[33,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}],[32,"ion-card-content"],[33,"ion-card-header",{"color":[513],"translucent":[4]}],[33,"ion-card-subtitle",{"color":[513]}],[33,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[33,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[32,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[0,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-accordion_2",[[49,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32]},null,{"value":["valueChanged"]}],[33,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]],{"value":["valueChanged"],"disabled":["disabledChanged"],"readonly":["readonlyChanged"]}]]],["ion-infinite-scroll_2",[[32,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[0,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]},null,{"threshold":["thresholdChanged"],"disabled":["disabledChanged"]}]]],["ion-reorder_2",[[33,"ion-reorder",null,[[2,"click","onClick"]]],[0,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-segment_2",[[33,"ion-segment-button",{"disabled":[1028],"layout":[1],"type":[1],"value":[8],"checked":[32],"setFocus":[64]},null,{"value":["valueChanged"]}],[33,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1032],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[0,"keydown","onKeyDown"]],{"color":["colorChanged"],"swipeGesture":["swipeGestureChanged"],"value":["valueChanged"],"disabled":["disabledChanged"]}]]],["ion-tab-bar_2",[[33,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[33,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]},null,{"selectedTab":["selectedTabChanged"]}]]],["ion-chip",[[33,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-datetime-button",[[33,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-input",[[38,"ion-input",{"color":[513],"accept":[1],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearOnEdit":[4,"clear-on-edit"],"counter":[4],"counterFormatter":[16],"debounce":[2],"disabled":[4],"enterkeyhint":[1],"errorText":[1,"error-text"],"fill":[1],"inputmode":[1],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"legacy":[4],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[4],"required":[4],"shape":[1],"spellcheck":[4],"step":[1],"size":[2],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},null,{"debounce":["debounceChanged"],"disabled":["disabledChanged"],"placeholder":["placeholderChanged"],"value":["valueChanged"]}]]],["ion-searchbar",[[34,"ion-searchbar",{"color":[513],"animated":[4],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"name":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]},null,{"debounce":["debounceChanged"],"value":["valueChanged"],"showCancelButton":["showCancelButtonChanged"]}]]],["ion-toggle",[[33,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"labelPlacement":[1,"label-placement"],"legacy":[4],"justify":[1],"alignment":[1],"activated":[32]},null,{"disabled":["disabledChanged"]}]]],["ion-nav_2",[[1,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64]},null,{"swipeGesture":["swipeGestureChanged"],"root":["rootChanged"]}],[0,"ion-nav-link",{"component":[1],"componentProps":[16],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["ion-textarea",[[38,"ion-textarea",{"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"fill":[1],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[514],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"counter":[4],"counterFormatter":[16],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"legacy":[4],"shape":[1],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},null,{"debounce":["debounceChanged"],"disabled":["disabledChanged"],"value":["valueChanged"]}]]],["ion-backdrop",[[33,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-loading",[[34,"ion-loading",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-breadcrumb_2",[[33,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}],[33,"ion-breadcrumbs",{"color":[513],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]],{"maxItems":["maxItemsChanged"],"itemsBeforeCollapse":["maxItemsChanged"],"itemsAfterCollapse":["maxItemsChanged"]}]]],["ion-modal",[[33,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"breakpoints":[16],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"canDismiss":[4,"can-dismiss"],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-route_4",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]},null,{"url":["onUpdate"],"component":["onUpdate"],"componentProps":["onComponentProps"]}],[0,"ion-route-redirect",{"from":[1],"to":[1]},null,{"from":["propDidChange"],"to":["propDidChange"]}],[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[1,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["ion-avatar_3",[[33,"ion-avatar"],[33,"ion-badge",{"color":[513]}],[1,"ion-thumbnail"]]],["ion-col_3",[[1,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[1,"ion-grid",{"fixed":[4]}],[1,"ion-row"]]],["ion-tab_2",[[1,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]},null,{"active":["changeActive"]}],[1,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-img",[[1,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]},null,{"src":["srcChanged"]}]]],["ion-progress-bar",[[33,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[33,"ion-range",{"color":[513],"debounce":[2],"name":[1],"label":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"labelPlacement":[1,"label-placement"],"legacy":[4],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]},null,{"debounce":["debounceChanged"],"min":["minChanged"],"max":["maxChanged"],"activeBarStart":["activeBarStartChanged"],"disabled":["disabledChanged"],"value":["valueChanged"]}]]],["ion-split-pane",[[33,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32]},null,{"visible":["visibleChanged"],"disabled":["updateState"],"when":["updateState"]}]]],["ion-text",[[1,"ion-text",{"color":[513]}]]],["ion-item_8",[[33,"ion-item-divider",{"color":[513],"sticky":[4]}],[32,"ion-item-group"],[1,"ion-skeleton-text",{"animated":[4]}],[32,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}],[33,"ion-list-header",{"color":[513],"lines":[1]}],[49,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[4],"download":[1],"fill":[1],"shape":[1],"href":[1],"rel":[1],"lines":[1],"counter":[4],"routerAnimation":[16],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"counterFormatter":[16],"multipleInputs":[32],"focusable":[32],"counterString":[32]},[[0,"ionInput","handleIonInput"],[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]],{"counterFormatter":["counterFormatterChanged"]}],[34,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]},null,{"color":["colorChanged"],"position":["positionChanged"]}],[33,"ion-note",{"color":[513]}]]],["ion-select_3",[[33,"ion-select",{"cancelText":[1,"cancel-text"],"color":[513],"compareWith":[1,"compare-with"],"disabled":[4],"fill":[1],"interface":[1],"interfaceOptions":[8,"interface-options"],"justify":[1],"label":[1],"labelPlacement":[1,"label-placement"],"legacy":[4],"multiple":[4],"name":[1],"okText":[1,"ok-text"],"placeholder":[1],"selectedText":[1,"selected-text"],"toggleIcon":[1,"toggle-icon"],"expandedIcon":[1,"expanded-icon"],"shape":[1],"value":[1032],"isExpanded":[32],"open":[64]},null,{"disabled":["styleChanged"],"isExpanded":["styleChanged"],"placeholder":["styleChanged"],"value":["styleChanged"]}],[1,"ion-select-option",{"disabled":[4],"value":[8]}],[34,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]}]]],["ion-picker-internal",[[33,"ion-picker-internal",{"exitInputMode":[64]},[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-datetime_3",[[33,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"readonly":[4],"isDateEnabled":[16],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16],"multiple":[4],"highlightedDates":[16],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isTimePopoverOpen":[32],"forceRenderDate":[32],"confirm":[64],"reset":[64],"cancel":[64]},null,{"disabled":["disabledChanged"],"min":["minChanged"],"max":["maxChanged"],"yearValues":["yearValuesChanged"],"monthValues":["monthValuesChanged"],"dayValues":["dayValuesChanged"],"hourValues":["hourValuesChanged"],"minuteValues":["minuteValuesChanged"],"value":["valueChanged"]}],[34,"ion-picker",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}],[32,"ion-picker-column",{"col":[16]},null,{"col":["colChanged"]}]]],["ion-radio_2",[[33,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"legacy":[4],"justify":[1],"alignment":[1],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]},null,{"value":["valueChanged"],"checked":["styleChanged"],"color":["styleChanged"],"disabled":["styleChanged"]}],[0,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"compareWith":[1,"compare-with"],"name":[1],"value":[1032]},[[4,"keydown","onKeydown"]],{"value":["valueChanged"]}]]],["ion-ripple-effect",[[1,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-button_2",[[33,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1]},null,{"disabled":["disabledChanged"]}],[1,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]},null,{"name":["loadIcon"],"src":["loadIcon"],"icon":["loadIcon"],"ios":["loadIcon"],"md":["loadIcon"]}]]],["ion-action-sheet",[[34,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-alert",[[34,"ion-alert",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]],{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"],"buttons":["buttonsChanged"],"inputs":["inputsChanged"]}]]],["ion-app_8",[[0,"ion-app",{"setFocus":[64]}],[1,"ion-content",{"color":[513],"fullscreen":[4],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[9,"resize","onResize"]]],[36,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[36,"ion-header",{"collapse":[1],"translucent":[4]}],[1,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]},null,{"swipeHandler":["swipeHandlerChanged"]}],[33,"ion-title",{"color":[513],"size":[1]},null,{"size":["sizeChanged"]}],[33,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[34,"ion-buttons",{"collapse":[4]}]]],["ion-picker-column-internal",[[33,"ion-picker-column-internal",{"disabled":[4],"items":[16],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64]},null,{"value":["valueChange"]}]]],["ion-popover",[[33,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"trigger":["onTriggerChange"],"triggerAction":["onTriggerChange"],"isOpen":["onIsOpenChange"]}]]],["ion-checkbox",[[33,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"legacy":[4]},null,{"checked":["styleChanged"],"disabled":["styleChanged"]}]]],["ion-spinner",[[1,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]]]'), o);
};

// node_modules/@ionic/core/loader/index.js
(function () {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a = HTMLElement;
    window.HTMLElement = function () {
      return Reflect.construct(a, [], this.constructor);
    };
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
})();

// node_modules/@ionic/angular/fesm2020/ionic-angular.mjs
var _c0 = ["*"];
var _c1 = ["outlet"];
var _c2 = [[["", "slot", "top"]], "*"];
var _c3 = ["[slot=top]", "*"];
function IonModal_div_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementContainer(1, 2);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.template);
  }
}
function IonPopover_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementContainer(0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.template);
  }
}
var BooleanValueAccessorDirective = class extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  writeValue(value) {
    this.elementRef.nativeElement.checked = this.lastValue = value;
    setIonicClasses(this.elementRef);
  }
  _handleIonChange(el) {
    this.handleValueChange(el, el.checked);
  }
};
BooleanValueAccessorDirective.ɵfac = function BooleanValueAccessorDirective_Factory(t) {
  return new (t || BooleanValueAccessorDirective)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef));
};
BooleanValueAccessorDirective.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
  type: BooleanValueAccessorDirective,
  selectors: [["ion-checkbox"], ["ion-toggle"]],
  hostBindings: function BooleanValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵlistener("ionChange", function BooleanValueAccessorDirective_ionChange_HostBindingHandler($event) {
        return ctx._handleIonChange($event.target);
      });
    }
  },
  features: [i0.ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: BooleanValueAccessorDirective,
    multi: true
  }]), i0.ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BooleanValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-checkbox,ion-toggle",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: BooleanValueAccessorDirective,
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: i0.Injector
    }, {
      type: i0.ElementRef
    }];
  }, {
    _handleIonChange: [{
      type: HostListener,
      args: ["ionChange", ["$event.target"]]
    }]
  });
})();
var NumericValueAccessorDirective = class extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
  registerOnChange(fn) {
    super.registerOnChange(value => {
      fn(value === "" ? null : parseFloat(value));
    });
  }
};
NumericValueAccessorDirective.ɵfac = function NumericValueAccessorDirective_Factory(t) {
  return new (t || NumericValueAccessorDirective)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef));
};
NumericValueAccessorDirective.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
  type: NumericValueAccessorDirective,
  selectors: [["ion-input", "type", "number"]],
  hostBindings: function NumericValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵlistener("ionInput", function NumericValueAccessorDirective_ionInput_HostBindingHandler($event) {
        return ctx.handleInputEvent($event.target);
      });
    }
  },
  features: [i0.ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumericValueAccessorDirective,
    multi: true
  }]), i0.ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumericValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number]",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NumericValueAccessorDirective,
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: i0.Injector
    }, {
      type: i0.ElementRef
    }];
  }, {
    handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event.target"]]
    }]
  });
})();
var RadioValueAccessorDirective = class extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleIonSelect(el) {
    this.handleValueChange(el, el.checked);
  }
};
RadioValueAccessorDirective.ɵfac = function RadioValueAccessorDirective_Factory(t) {
  return new (t || RadioValueAccessorDirective)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef));
};
RadioValueAccessorDirective.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
  type: RadioValueAccessorDirective,
  selectors: [["ion-radio"]],
  hostBindings: function RadioValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵlistener("ionSelect", function RadioValueAccessorDirective_ionSelect_HostBindingHandler($event) {
        return ctx._handleIonSelect($event.target);
      });
    }
  },
  features: [i0.ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RadioValueAccessorDirective,
    multi: true
  }]), i0.ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "ion-radio",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: RadioValueAccessorDirective,
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: i0.Injector
    }, {
      type: i0.ElementRef
    }];
  }, {
    _handleIonSelect: [{
      type: HostListener,
      args: ["ionSelect", ["$event.target"]]
    }]
  });
})();
var SelectValueAccessorDirective = class extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleChangeEvent(el) {
    this.handleValueChange(el, el.value);
  }
};
SelectValueAccessorDirective.ɵfac = function SelectValueAccessorDirective_Factory(t) {
  return new (t || SelectValueAccessorDirective)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef));
};
SelectValueAccessorDirective.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
  type: SelectValueAccessorDirective,
  selectors: [["ion-select"], ["ion-radio-group"], ["ion-segment"], ["ion-datetime"]],
  hostBindings: function SelectValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵlistener("ionChange", function SelectValueAccessorDirective_ionChange_HostBindingHandler($event) {
        return ctx._handleChangeEvent($event.target);
      });
    }
  },
  features: [i0.ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectValueAccessorDirective,
    multi: true
  }]), i0.ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "ion-select, ion-radio-group, ion-segment, ion-datetime",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: SelectValueAccessorDirective,
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: i0.Injector
    }, {
      type: i0.ElementRef
    }];
  }, {
    _handleChangeEvent: [{
      type: HostListener,
      args: ["ionChange", ["$event.target"]]
    }]
  });
})();
var TextValueAccessorDirective = class extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
};
TextValueAccessorDirective.ɵfac = function TextValueAccessorDirective_Factory(t) {
  return new (t || TextValueAccessorDirective)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.ElementRef));
};
TextValueAccessorDirective.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
  type: TextValueAccessorDirective,
  selectors: [["ion-input", 3, "type", "number"], ["ion-textarea"], ["ion-searchbar"], ["ion-range"]],
  hostBindings: function TextValueAccessorDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵlistener("ionInput", function TextValueAccessorDirective_ionInput_HostBindingHandler($event) {
        return ctx._handleInputEvent($event.target);
      });
    }
  },
  features: [i0.ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextValueAccessorDirective,
    multi: true
  }]), i0.ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar,ion-range",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: TextValueAccessorDirective,
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: i0.Injector
    }, {
      type: i0.ElementRef
    }];
  }, {
    _handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event.target"]]
    }]
  });
})();
var proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true
    });
  });
};
var proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
var proxyOutputs = (instance, el, events) => {
  events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
};
function ProxyCmp(opts) {
  const decorator = function (cls) {
    const {
      defineCustomElementFn,
      inputs,
      methods
    } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
var IonAccordion = class IonAccordion2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonAccordion.ɵfac = function IonAccordion_Factory(t) {
  return new (t || IonAccordion)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonAccordion.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonAccordion,
  selectors: [["ion-accordion"]],
  inputs: {
    disabled: "disabled",
    mode: "mode",
    readonly: "readonly",
    toggleIcon: "toggleIcon",
    toggleIconSlot: "toggleIconSlot",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonAccordion_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonAccordion = __decorate([ProxyCmp({
  inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
})], IonAccordion);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonAccordion, [{
    type: Component,
    args: [{
      selector: "ion-accordion",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonAccordionGroup = class IonAccordionGroup2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
};
IonAccordionGroup.ɵfac = function IonAccordionGroup_Factory(t) {
  return new (t || IonAccordionGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonAccordionGroup.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonAccordionGroup,
  selectors: [["ion-accordion-group"]],
  inputs: {
    animated: "animated",
    disabled: "disabled",
    expand: "expand",
    mode: "mode",
    multiple: "multiple",
    readonly: "readonly",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonAccordionGroup_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonAccordionGroup = __decorate([ProxyCmp({
  inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
})], IonAccordionGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonAccordionGroup, [{
    type: Component,
    args: [{
      selector: "ion-accordion-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonActionSheet = class IonActionSheet2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionActionSheetDidPresent", "ionActionSheetWillPresent", "ionActionSheetWillDismiss", "ionActionSheetDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
};
IonActionSheet.ɵfac = function IonActionSheet_Factory(t) {
  return new (t || IonActionSheet)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonActionSheet.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonActionSheet,
  selectors: [["ion-action-sheet"]],
  inputs: {
    animated: "animated",
    backdropDismiss: "backdropDismiss",
    buttons: "buttons",
    cssClass: "cssClass",
    enterAnimation: "enterAnimation",
    header: "header",
    htmlAttributes: "htmlAttributes",
    isOpen: "isOpen",
    keyboardClose: "keyboardClose",
    leaveAnimation: "leaveAnimation",
    mode: "mode",
    subHeader: "subHeader",
    translucent: "translucent",
    trigger: "trigger"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonActionSheet_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonActionSheet = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonActionSheet);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonActionSheet, [{
    type: Component,
    args: [{
      selector: "ion-action-sheet",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonAlert = class IonAlert2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionAlertDidPresent", "ionAlertWillPresent", "ionAlertWillDismiss", "ionAlertDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
};
IonAlert.ɵfac = function IonAlert_Factory(t) {
  return new (t || IonAlert)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonAlert.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonAlert,
  selectors: [["ion-alert"]],
  inputs: {
    animated: "animated",
    backdropDismiss: "backdropDismiss",
    buttons: "buttons",
    cssClass: "cssClass",
    enterAnimation: "enterAnimation",
    header: "header",
    htmlAttributes: "htmlAttributes",
    inputs: "inputs",
    isOpen: "isOpen",
    keyboardClose: "keyboardClose",
    leaveAnimation: "leaveAnimation",
    message: "message",
    mode: "mode",
    subHeader: "subHeader",
    translucent: "translucent",
    trigger: "trigger"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonAlert_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonAlert = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonAlert);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonAlert, [{
    type: Component,
    args: [{
      selector: "ion-alert",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonApp = class IonApp2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonApp.ɵfac = function IonApp_Factory(t) {
  return new (t || IonApp)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonApp.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonApp,
  selectors: [["ion-app"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonApp_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonApp = __decorate([ProxyCmp({})], IonApp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonApp, [{
    type: Component,
    args: [{
      selector: "ion-app",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonAvatar = class IonAvatar2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonAvatar.ɵfac = function IonAvatar_Factory(t) {
  return new (t || IonAvatar)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonAvatar.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonAvatar,
  selectors: [["ion-avatar"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonAvatar_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonAvatar = __decorate([ProxyCmp({})], IonAvatar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonAvatar, [{
    type: Component,
    args: [{
      selector: "ion-avatar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonBackdrop = class IonBackdrop2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionBackdropTap"]);
  }
};
IonBackdrop.ɵfac = function IonBackdrop_Factory(t) {
  return new (t || IonBackdrop)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonBackdrop.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonBackdrop,
  selectors: [["ion-backdrop"]],
  inputs: {
    stopPropagation: "stopPropagation",
    tappable: "tappable",
    visible: "visible"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonBackdrop_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonBackdrop = __decorate([ProxyCmp({
  inputs: ["stopPropagation", "tappable", "visible"]
})], IonBackdrop);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonBackdrop, [{
    type: Component,
    args: [{
      selector: "ion-backdrop",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["stopPropagation", "tappable", "visible"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonBadge = class IonBadge2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonBadge.ɵfac = function IonBadge_Factory(t) {
  return new (t || IonBadge)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonBadge.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonBadge,
  selectors: [["ion-badge"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonBadge_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonBadge = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonBadge);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonBadge, [{
    type: Component,
    args: [{
      selector: "ion-badge",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonBreadcrumb = class IonBreadcrumb2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
};
IonBreadcrumb.ɵfac = function IonBreadcrumb_Factory(t) {
  return new (t || IonBreadcrumb)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonBreadcrumb.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonBreadcrumb,
  selectors: [["ion-breadcrumb"]],
  inputs: {
    active: "active",
    color: "color",
    disabled: "disabled",
    download: "download",
    href: "href",
    mode: "mode",
    rel: "rel",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection",
    separator: "separator",
    target: "target"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonBreadcrumb_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonBreadcrumb = __decorate([ProxyCmp({
  inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"]
})], IonBreadcrumb);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonBreadcrumb, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonBreadcrumbs = class IonBreadcrumbs2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionCollapsedClick"]);
  }
};
IonBreadcrumbs.ɵfac = function IonBreadcrumbs_Factory(t) {
  return new (t || IonBreadcrumbs)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonBreadcrumbs.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonBreadcrumbs,
  selectors: [["ion-breadcrumbs"]],
  inputs: {
    color: "color",
    itemsAfterCollapse: "itemsAfterCollapse",
    itemsBeforeCollapse: "itemsBeforeCollapse",
    maxItems: "maxItems",
    mode: "mode"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonBreadcrumbs_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonBreadcrumbs = __decorate([ProxyCmp({
  inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"]
})], IonBreadcrumbs);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonBreadcrumbs, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumbs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonButton = class IonButton2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
};
IonButton.ɵfac = function IonButton_Factory(t) {
  return new (t || IonButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonButton.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonButton,
  selectors: [["ion-button"]],
  inputs: {
    buttonType: "buttonType",
    color: "color",
    disabled: "disabled",
    download: "download",
    expand: "expand",
    fill: "fill",
    form: "form",
    href: "href",
    mode: "mode",
    rel: "rel",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection",
    shape: "shape",
    size: "size",
    strong: "strong",
    target: "target",
    type: "type"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonButton_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonButton = __decorate([ProxyCmp({
  inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
})], IonButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonButton, [{
    type: Component,
    args: [{
      selector: "ion-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonButtons = class IonButtons2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonButtons.ɵfac = function IonButtons_Factory(t) {
  return new (t || IonButtons)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonButtons.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonButtons,
  selectors: [["ion-buttons"]],
  inputs: {
    collapse: "collapse"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonButtons_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonButtons = __decorate([ProxyCmp({
  inputs: ["collapse"]
})], IonButtons);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonButtons, [{
    type: Component,
    args: [{
      selector: "ion-buttons",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonCard = class IonCard2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonCard.ɵfac = function IonCard_Factory(t) {
  return new (t || IonCard)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonCard.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonCard,
  selectors: [["ion-card"]],
  inputs: {
    button: "button",
    color: "color",
    disabled: "disabled",
    download: "download",
    href: "href",
    mode: "mode",
    rel: "rel",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection",
    target: "target",
    type: "type"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCard_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonCard = __decorate([ProxyCmp({
  inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
})], IonCard);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonCard, [{
    type: Component,
    args: [{
      selector: "ion-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonCardContent = class IonCardContent2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonCardContent.ɵfac = function IonCardContent_Factory(t) {
  return new (t || IonCardContent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonCardContent.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonCardContent,
  selectors: [["ion-card-content"]],
  inputs: {
    mode: "mode"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCardContent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonCardContent = __decorate([ProxyCmp({
  inputs: ["mode"]
})], IonCardContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonCardContent, [{
    type: Component,
    args: [{
      selector: "ion-card-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonCardHeader = class IonCardHeader2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonCardHeader.ɵfac = function IonCardHeader_Factory(t) {
  return new (t || IonCardHeader)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonCardHeader.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonCardHeader,
  selectors: [["ion-card-header"]],
  inputs: {
    color: "color",
    mode: "mode",
    translucent: "translucent"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCardHeader_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonCardHeader = __decorate([ProxyCmp({
  inputs: ["color", "mode", "translucent"]
})], IonCardHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonCardHeader, [{
    type: Component,
    args: [{
      selector: "ion-card-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "translucent"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonCardSubtitle = class IonCardSubtitle2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonCardSubtitle.ɵfac = function IonCardSubtitle_Factory(t) {
  return new (t || IonCardSubtitle)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonCardSubtitle.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonCardSubtitle,
  selectors: [["ion-card-subtitle"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCardSubtitle_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonCardSubtitle = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonCardSubtitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonCardSubtitle, [{
    type: Component,
    args: [{
      selector: "ion-card-subtitle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonCardTitle = class IonCardTitle2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonCardTitle.ɵfac = function IonCardTitle_Factory(t) {
  return new (t || IonCardTitle)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonCardTitle.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonCardTitle,
  selectors: [["ion-card-title"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCardTitle_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonCardTitle = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonCardTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonCardTitle, [{
    type: Component,
    args: [{
      selector: "ion-card-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonCheckbox = class IonCheckbox2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
};
IonCheckbox.ɵfac = function IonCheckbox_Factory(t) {
  return new (t || IonCheckbox)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonCheckbox.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonCheckbox,
  selectors: [["ion-checkbox"]],
  inputs: {
    alignment: "alignment",
    checked: "checked",
    color: "color",
    disabled: "disabled",
    indeterminate: "indeterminate",
    justify: "justify",
    labelPlacement: "labelPlacement",
    legacy: "legacy",
    mode: "mode",
    name: "name",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonCheckbox = __decorate([ProxyCmp({
  inputs: ["alignment", "checked", "color", "disabled", "indeterminate", "justify", "labelPlacement", "legacy", "mode", "name", "value"]
})], IonCheckbox);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonCheckbox, [{
    type: Component,
    args: [{
      selector: "ion-checkbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "indeterminate", "justify", "labelPlacement", "legacy", "mode", "name", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonChip = class IonChip2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonChip.ɵfac = function IonChip_Factory(t) {
  return new (t || IonChip)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonChip.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonChip,
  selectors: [["ion-chip"]],
  inputs: {
    color: "color",
    disabled: "disabled",
    mode: "mode",
    outline: "outline"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonChip_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonChip = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "mode", "outline"]
})], IonChip);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonChip, [{
    type: Component,
    args: [{
      selector: "ion-chip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "outline"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonCol = class IonCol2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonCol.ɵfac = function IonCol_Factory(t) {
  return new (t || IonCol)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonCol.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonCol,
  selectors: [["ion-col"]],
  inputs: {
    offset: "offset",
    offsetLg: "offsetLg",
    offsetMd: "offsetMd",
    offsetSm: "offsetSm",
    offsetXl: "offsetXl",
    offsetXs: "offsetXs",
    pull: "pull",
    pullLg: "pullLg",
    pullMd: "pullMd",
    pullSm: "pullSm",
    pullXl: "pullXl",
    pullXs: "pullXs",
    push: "push",
    pushLg: "pushLg",
    pushMd: "pushMd",
    pushSm: "pushSm",
    pushXl: "pushXl",
    pushXs: "pushXs",
    size: "size",
    sizeLg: "sizeLg",
    sizeMd: "sizeMd",
    sizeSm: "sizeSm",
    sizeXl: "sizeXl",
    sizeXs: "sizeXs"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonCol_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonCol = __decorate([ProxyCmp({
  inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"]
})], IonCol);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonCol, [{
    type: Component,
    args: [{
      selector: "ion-col",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonContent = class IonContent2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]);
  }
};
IonContent.ɵfac = function IonContent_Factory(t) {
  return new (t || IonContent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonContent.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonContent,
  selectors: [["ion-content"]],
  inputs: {
    color: "color",
    forceOverscroll: "forceOverscroll",
    fullscreen: "fullscreen",
    scrollEvents: "scrollEvents",
    scrollX: "scrollX",
    scrollY: "scrollY"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonContent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonContent = __decorate([ProxyCmp({
  inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"],
  methods: ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"]
})], IonContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonContent, [{
    type: Component,
    args: [{
      selector: "ion-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonDatetime = class IonDatetime2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]);
  }
};
IonDatetime.ɵfac = function IonDatetime_Factory(t) {
  return new (t || IonDatetime)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonDatetime.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonDatetime,
  selectors: [["ion-datetime"]],
  inputs: {
    cancelText: "cancelText",
    clearText: "clearText",
    color: "color",
    dayValues: "dayValues",
    disabled: "disabled",
    doneText: "doneText",
    firstDayOfWeek: "firstDayOfWeek",
    highlightedDates: "highlightedDates",
    hourCycle: "hourCycle",
    hourValues: "hourValues",
    isDateEnabled: "isDateEnabled",
    locale: "locale",
    max: "max",
    min: "min",
    minuteValues: "minuteValues",
    mode: "mode",
    monthValues: "monthValues",
    multiple: "multiple",
    name: "name",
    preferWheel: "preferWheel",
    presentation: "presentation",
    readonly: "readonly",
    showClearButton: "showClearButton",
    showDefaultButtons: "showDefaultButtons",
    showDefaultTimeLabel: "showDefaultTimeLabel",
    showDefaultTitle: "showDefaultTitle",
    size: "size",
    titleSelectedDatesFormatter: "titleSelectedDatesFormatter",
    value: "value",
    yearValues: "yearValues"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonDatetime_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonDatetime = __decorate([ProxyCmp({
  inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"],
  methods: ["confirm", "reset", "cancel"]
})], IonDatetime);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonDatetime, [{
    type: Component,
    args: [{
      selector: "ion-datetime",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonDatetimeButton = class IonDatetimeButton2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonDatetimeButton.ɵfac = function IonDatetimeButton_Factory(t) {
  return new (t || IonDatetimeButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonDatetimeButton.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonDatetimeButton,
  selectors: [["ion-datetime-button"]],
  inputs: {
    color: "color",
    datetime: "datetime",
    disabled: "disabled",
    mode: "mode"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonDatetimeButton_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonDatetimeButton = __decorate([ProxyCmp({
  inputs: ["color", "datetime", "disabled", "mode"]
})], IonDatetimeButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonDatetimeButton, [{
    type: Component,
    args: [{
      selector: "ion-datetime-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "datetime", "disabled", "mode"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonFab = class IonFab2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonFab.ɵfac = function IonFab_Factory(t) {
  return new (t || IonFab)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonFab.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonFab,
  selectors: [["ion-fab"]],
  inputs: {
    activated: "activated",
    edge: "edge",
    horizontal: "horizontal",
    vertical: "vertical"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonFab_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonFab = __decorate([ProxyCmp({
  inputs: ["activated", "edge", "horizontal", "vertical"],
  methods: ["close"]
})], IonFab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonFab, [{
    type: Component,
    args: [{
      selector: "ion-fab",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "edge", "horizontal", "vertical"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonFabButton = class IonFabButton2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
};
IonFabButton.ɵfac = function IonFabButton_Factory(t) {
  return new (t || IonFabButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonFabButton.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonFabButton,
  selectors: [["ion-fab-button"]],
  inputs: {
    activated: "activated",
    closeIcon: "closeIcon",
    color: "color",
    disabled: "disabled",
    download: "download",
    href: "href",
    mode: "mode",
    rel: "rel",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection",
    show: "show",
    size: "size",
    target: "target",
    translucent: "translucent",
    type: "type"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonFabButton_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonFabButton = __decorate([ProxyCmp({
  inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
})], IonFabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonFabButton, [{
    type: Component,
    args: [{
      selector: "ion-fab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonFabList = class IonFabList2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonFabList.ɵfac = function IonFabList_Factory(t) {
  return new (t || IonFabList)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonFabList.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonFabList,
  selectors: [["ion-fab-list"]],
  inputs: {
    activated: "activated",
    side: "side"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonFabList_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonFabList = __decorate([ProxyCmp({
  inputs: ["activated", "side"]
})], IonFabList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonFabList, [{
    type: Component,
    args: [{
      selector: "ion-fab-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "side"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonFooter = class IonFooter2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonFooter.ɵfac = function IonFooter_Factory(t) {
  return new (t || IonFooter)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonFooter.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonFooter,
  selectors: [["ion-footer"]],
  inputs: {
    collapse: "collapse",
    mode: "mode",
    translucent: "translucent"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonFooter_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonFooter = __decorate([ProxyCmp({
  inputs: ["collapse", "mode", "translucent"]
})], IonFooter);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonFooter, [{
    type: Component,
    args: [{
      selector: "ion-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonGrid = class IonGrid2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonGrid.ɵfac = function IonGrid_Factory(t) {
  return new (t || IonGrid)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonGrid.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonGrid,
  selectors: [["ion-grid"]],
  inputs: {
    fixed: "fixed"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonGrid_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonGrid = __decorate([ProxyCmp({
  inputs: ["fixed"]
})], IonGrid);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonGrid, [{
    type: Component,
    args: [{
      selector: "ion-grid",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["fixed"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonHeader = class IonHeader2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonHeader.ɵfac = function IonHeader_Factory(t) {
  return new (t || IonHeader)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonHeader.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonHeader,
  selectors: [["ion-header"]],
  inputs: {
    collapse: "collapse",
    mode: "mode",
    translucent: "translucent"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonHeader_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonHeader = __decorate([ProxyCmp({
  inputs: ["collapse", "mode", "translucent"]
})], IonHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonHeader, [{
    type: Component,
    args: [{
      selector: "ion-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonIcon = class IonIcon2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonIcon.ɵfac = function IonIcon_Factory(t) {
  return new (t || IonIcon)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonIcon.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonIcon,
  selectors: [["ion-icon"]],
  inputs: {
    color: "color",
    flipRtl: "flipRtl",
    icon: "icon",
    ios: "ios",
    lazy: "lazy",
    md: "md",
    mode: "mode",
    name: "name",
    sanitize: "sanitize",
    size: "size",
    src: "src"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonIcon_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonIcon = __decorate([ProxyCmp({
  inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
})], IonIcon);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonIcon, [{
    type: Component,
    args: [{
      selector: "ion-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonImg = class IonImg2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]);
  }
};
IonImg.ɵfac = function IonImg_Factory(t) {
  return new (t || IonImg)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonImg.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonImg,
  selectors: [["ion-img"]],
  inputs: {
    alt: "alt",
    src: "src"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonImg_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonImg = __decorate([ProxyCmp({
  inputs: ["alt", "src"]
})], IonImg);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonImg, [{
    type: Component,
    args: [{
      selector: "ion-img",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alt", "src"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonInfiniteScroll = class IonInfiniteScroll2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInfinite"]);
  }
};
IonInfiniteScroll.ɵfac = function IonInfiniteScroll_Factory(t) {
  return new (t || IonInfiniteScroll)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonInfiniteScroll.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonInfiniteScroll,
  selectors: [["ion-infinite-scroll"]],
  inputs: {
    disabled: "disabled",
    position: "position",
    threshold: "threshold"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonInfiniteScroll_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonInfiniteScroll = __decorate([ProxyCmp({
  inputs: ["disabled", "position", "threshold"],
  methods: ["complete"]
})], IonInfiniteScroll);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonInfiniteScroll, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "position", "threshold"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonInfiniteScrollContent = class IonInfiniteScrollContent2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonInfiniteScrollContent.ɵfac = function IonInfiniteScrollContent_Factory(t) {
  return new (t || IonInfiniteScrollContent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonInfiniteScrollContent.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonInfiniteScrollContent,
  selectors: [["ion-infinite-scroll-content"]],
  inputs: {
    loadingSpinner: "loadingSpinner",
    loadingText: "loadingText"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonInfiniteScrollContent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonInfiniteScrollContent = __decorate([ProxyCmp({
  inputs: ["loadingSpinner", "loadingText"]
})], IonInfiniteScrollContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonInfiniteScrollContent, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["loadingSpinner", "loadingText"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonInput = class IonInput2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]);
  }
};
IonInput.ɵfac = function IonInput_Factory(t) {
  return new (t || IonInput)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonInput.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonInput,
  selectors: [["ion-input"]],
  inputs: {
    accept: "accept",
    autocapitalize: "autocapitalize",
    autocomplete: "autocomplete",
    autocorrect: "autocorrect",
    autofocus: "autofocus",
    clearInput: "clearInput",
    clearOnEdit: "clearOnEdit",
    color: "color",
    counter: "counter",
    counterFormatter: "counterFormatter",
    debounce: "debounce",
    disabled: "disabled",
    enterkeyhint: "enterkeyhint",
    errorText: "errorText",
    fill: "fill",
    helperText: "helperText",
    inputmode: "inputmode",
    label: "label",
    labelPlacement: "labelPlacement",
    legacy: "legacy",
    max: "max",
    maxlength: "maxlength",
    min: "min",
    minlength: "minlength",
    mode: "mode",
    multiple: "multiple",
    name: "name",
    pattern: "pattern",
    placeholder: "placeholder",
    readonly: "readonly",
    required: "required",
    shape: "shape",
    size: "size",
    spellcheck: "spellcheck",
    step: "step",
    type: "type",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonInput_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonInput = __decorate([ProxyCmp({
  inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "legacy", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "size", "spellcheck", "step", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonInput);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonInput, [{
    type: Component,
    args: [{
      selector: "ion-input",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "legacy", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "size", "spellcheck", "step", "type", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonItem = class IonItem2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonItem.ɵfac = function IonItem_Factory(t) {
  return new (t || IonItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonItem.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonItem,
  selectors: [["ion-item"]],
  inputs: {
    button: "button",
    color: "color",
    counter: "counter",
    counterFormatter: "counterFormatter",
    detail: "detail",
    detailIcon: "detailIcon",
    disabled: "disabled",
    download: "download",
    fill: "fill",
    href: "href",
    lines: "lines",
    mode: "mode",
    rel: "rel",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection",
    shape: "shape",
    target: "target",
    type: "type"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItem_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonItem = __decorate([ProxyCmp({
  inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"]
})], IonItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonItem, [{
    type: Component,
    args: [{
      selector: "ion-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonItemDivider = class IonItemDivider2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonItemDivider.ɵfac = function IonItemDivider_Factory(t) {
  return new (t || IonItemDivider)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonItemDivider.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonItemDivider,
  selectors: [["ion-item-divider"]],
  inputs: {
    color: "color",
    mode: "mode",
    sticky: "sticky"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItemDivider_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonItemDivider = __decorate([ProxyCmp({
  inputs: ["color", "mode", "sticky"]
})], IonItemDivider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonItemDivider, [{
    type: Component,
    args: [{
      selector: "ion-item-divider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "sticky"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonItemGroup = class IonItemGroup2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonItemGroup.ɵfac = function IonItemGroup_Factory(t) {
  return new (t || IonItemGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonItemGroup.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonItemGroup,
  selectors: [["ion-item-group"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItemGroup_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonItemGroup = __decorate([ProxyCmp({})], IonItemGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonItemGroup, [{
    type: Component,
    args: [{
      selector: "ion-item-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonItemOption = class IonItemOption2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonItemOption.ɵfac = function IonItemOption_Factory(t) {
  return new (t || IonItemOption)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonItemOption.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonItemOption,
  selectors: [["ion-item-option"]],
  inputs: {
    color: "color",
    disabled: "disabled",
    download: "download",
    expandable: "expandable",
    href: "href",
    mode: "mode",
    rel: "rel",
    target: "target",
    type: "type"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItemOption_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonItemOption = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"]
})], IonItemOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonItemOption, [{
    type: Component,
    args: [{
      selector: "ion-item-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonItemOptions = class IonItemOptions2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSwipe"]);
  }
};
IonItemOptions.ɵfac = function IonItemOptions_Factory(t) {
  return new (t || IonItemOptions)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonItemOptions.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonItemOptions,
  selectors: [["ion-item-options"]],
  inputs: {
    side: "side"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItemOptions_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonItemOptions = __decorate([ProxyCmp({
  inputs: ["side"]
})], IonItemOptions);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonItemOptions, [{
    type: Component,
    args: [{
      selector: "ion-item-options",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["side"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonItemSliding = class IonItemSliding2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionDrag"]);
  }
};
IonItemSliding.ɵfac = function IonItemSliding_Factory(t) {
  return new (t || IonItemSliding)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonItemSliding.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonItemSliding,
  selectors: [["ion-item-sliding"]],
  inputs: {
    disabled: "disabled"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonItemSliding_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonItemSliding = __decorate([ProxyCmp({
  inputs: ["disabled"],
  methods: ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"]
})], IonItemSliding);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonItemSliding, [{
    type: Component,
    args: [{
      selector: "ion-item-sliding",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonLabel = class IonLabel2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonLabel.ɵfac = function IonLabel_Factory(t) {
  return new (t || IonLabel)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonLabel.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonLabel,
  selectors: [["ion-label"]],
  inputs: {
    color: "color",
    mode: "mode",
    position: "position"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonLabel_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonLabel = __decorate([ProxyCmp({
  inputs: ["color", "mode", "position"]
})], IonLabel);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonLabel, [{
    type: Component,
    args: [{
      selector: "ion-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "position"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonList = class IonList2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonList.ɵfac = function IonList_Factory(t) {
  return new (t || IonList)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonList.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonList,
  selectors: [["ion-list"]],
  inputs: {
    inset: "inset",
    lines: "lines",
    mode: "mode"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonList_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonList = __decorate([ProxyCmp({
  inputs: ["inset", "lines", "mode"],
  methods: ["closeSlidingItems"]
})], IonList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonList, [{
    type: Component,
    args: [{
      selector: "ion-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["inset", "lines", "mode"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonListHeader = class IonListHeader2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonListHeader.ɵfac = function IonListHeader_Factory(t) {
  return new (t || IonListHeader)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonListHeader.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonListHeader,
  selectors: [["ion-list-header"]],
  inputs: {
    color: "color",
    lines: "lines",
    mode: "mode"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonListHeader_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonListHeader = __decorate([ProxyCmp({
  inputs: ["color", "lines", "mode"]
})], IonListHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonListHeader, [{
    type: Component,
    args: [{
      selector: "ion-list-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "lines", "mode"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonLoading = class IonLoading2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionLoadingDidPresent", "ionLoadingWillPresent", "ionLoadingWillDismiss", "ionLoadingDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
};
IonLoading.ɵfac = function IonLoading_Factory(t) {
  return new (t || IonLoading)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonLoading.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonLoading,
  selectors: [["ion-loading"]],
  inputs: {
    animated: "animated",
    backdropDismiss: "backdropDismiss",
    cssClass: "cssClass",
    duration: "duration",
    enterAnimation: "enterAnimation",
    htmlAttributes: "htmlAttributes",
    isOpen: "isOpen",
    keyboardClose: "keyboardClose",
    leaveAnimation: "leaveAnimation",
    message: "message",
    mode: "mode",
    showBackdrop: "showBackdrop",
    spinner: "spinner",
    translucent: "translucent",
    trigger: "trigger"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonLoading_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonLoading = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonLoading);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonLoading, [{
    type: Component,
    args: [{
      selector: "ion-loading",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonMenu = class IonMenu2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]);
  }
};
IonMenu.ɵfac = function IonMenu_Factory(t) {
  return new (t || IonMenu)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonMenu.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonMenu,
  selectors: [["ion-menu"]],
  inputs: {
    contentId: "contentId",
    disabled: "disabled",
    maxEdgeStart: "maxEdgeStart",
    menuId: "menuId",
    side: "side",
    swipeGesture: "swipeGesture",
    type: "type"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonMenu_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonMenu = __decorate([ProxyCmp({
  inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"],
  methods: ["isOpen", "isActive", "open", "close", "toggle", "setOpen"]
})], IonMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonMenu, [{
    type: Component,
    args: [{
      selector: "ion-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonMenuButton = class IonMenuButton2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonMenuButton.ɵfac = function IonMenuButton_Factory(t) {
  return new (t || IonMenuButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonMenuButton.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonMenuButton,
  selectors: [["ion-menu-button"]],
  inputs: {
    autoHide: "autoHide",
    color: "color",
    disabled: "disabled",
    menu: "menu",
    mode: "mode",
    type: "type"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonMenuButton_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonMenuButton = __decorate([ProxyCmp({
  inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
})], IonMenuButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonMenuButton, [{
    type: Component,
    args: [{
      selector: "ion-menu-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonMenuToggle = class IonMenuToggle2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonMenuToggle.ɵfac = function IonMenuToggle_Factory(t) {
  return new (t || IonMenuToggle)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonMenuToggle.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonMenuToggle,
  selectors: [["ion-menu-toggle"]],
  inputs: {
    autoHide: "autoHide",
    menu: "menu"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonMenuToggle_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonMenuToggle = __decorate([ProxyCmp({
  inputs: ["autoHide", "menu"]
})], IonMenuToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonMenuToggle, [{
    type: Component,
    args: [{
      selector: "ion-menu-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "menu"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonNavLink = class IonNavLink2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonNavLink.ɵfac = function IonNavLink_Factory(t) {
  return new (t || IonNavLink)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonNavLink.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonNavLink,
  selectors: [["ion-nav-link"]],
  inputs: {
    component: "component",
    componentProps: "componentProps",
    routerAnimation: "routerAnimation",
    routerDirection: "routerDirection"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonNavLink_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonNavLink = __decorate([ProxyCmp({
  inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
})], IonNavLink);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonNavLink, [{
    type: Component,
    args: [{
      selector: "ion-nav-link",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonNote = class IonNote2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonNote.ɵfac = function IonNote_Factory(t) {
  return new (t || IonNote)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonNote.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonNote,
  selectors: [["ion-note"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonNote_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonNote = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonNote);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonNote, [{
    type: Component,
    args: [{
      selector: "ion-note",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonPicker = class IonPicker2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionPickerDidPresent", "ionPickerWillPresent", "ionPickerWillDismiss", "ionPickerDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
};
IonPicker.ɵfac = function IonPicker_Factory(t) {
  return new (t || IonPicker)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonPicker.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonPicker,
  selectors: [["ion-picker"]],
  inputs: {
    animated: "animated",
    backdropDismiss: "backdropDismiss",
    buttons: "buttons",
    columns: "columns",
    cssClass: "cssClass",
    duration: "duration",
    enterAnimation: "enterAnimation",
    htmlAttributes: "htmlAttributes",
    isOpen: "isOpen",
    keyboardClose: "keyboardClose",
    leaveAnimation: "leaveAnimation",
    mode: "mode",
    showBackdrop: "showBackdrop",
    trigger: "trigger"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonPicker_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonPicker = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "columns", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss", "getColumn"]
})], IonPicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonPicker, [{
    type: Component,
    args: [{
      selector: "ion-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "columns", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "trigger"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonProgressBar = class IonProgressBar2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonProgressBar.ɵfac = function IonProgressBar_Factory(t) {
  return new (t || IonProgressBar)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonProgressBar.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonProgressBar,
  selectors: [["ion-progress-bar"]],
  inputs: {
    buffer: "buffer",
    color: "color",
    mode: "mode",
    reversed: "reversed",
    type: "type",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonProgressBar_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonProgressBar = __decorate([ProxyCmp({
  inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
})], IonProgressBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonProgressBar, [{
    type: Component,
    args: [{
      selector: "ion-progress-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonRadio = class IonRadio2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
};
IonRadio.ɵfac = function IonRadio_Factory(t) {
  return new (t || IonRadio)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonRadio.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonRadio,
  selectors: [["ion-radio"]],
  inputs: {
    alignment: "alignment",
    color: "color",
    disabled: "disabled",
    justify: "justify",
    labelPlacement: "labelPlacement",
    legacy: "legacy",
    mode: "mode",
    name: "name",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRadio_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonRadio = __decorate([ProxyCmp({
  inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "legacy", "mode", "name", "value"]
})], IonRadio);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonRadio, [{
    type: Component,
    args: [{
      selector: "ion-radio",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "legacy", "mode", "name", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonRadioGroup = class IonRadioGroup2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
};
IonRadioGroup.ɵfac = function IonRadioGroup_Factory(t) {
  return new (t || IonRadioGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonRadioGroup.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonRadioGroup,
  selectors: [["ion-radio-group"]],
  inputs: {
    allowEmptySelection: "allowEmptySelection",
    compareWith: "compareWith",
    name: "name",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRadioGroup_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonRadioGroup = __decorate([ProxyCmp({
  inputs: ["allowEmptySelection", "compareWith", "name", "value"]
})], IonRadioGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonRadioGroup, [{
    type: Component,
    args: [{
      selector: "ion-radio-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["allowEmptySelection", "compareWith", "name", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonRange = class IonRange2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionFocus", "ionBlur", "ionKnobMoveStart", "ionKnobMoveEnd"]);
  }
};
IonRange.ɵfac = function IonRange_Factory(t) {
  return new (t || IonRange)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonRange.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonRange,
  selectors: [["ion-range"]],
  inputs: {
    activeBarStart: "activeBarStart",
    color: "color",
    debounce: "debounce",
    disabled: "disabled",
    dualKnobs: "dualKnobs",
    label: "label",
    labelPlacement: "labelPlacement",
    legacy: "legacy",
    max: "max",
    min: "min",
    mode: "mode",
    name: "name",
    pin: "pin",
    pinFormatter: "pinFormatter",
    snaps: "snaps",
    step: "step",
    ticks: "ticks",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRange_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonRange = __decorate([ProxyCmp({
  inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "legacy", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"]
})], IonRange);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonRange, [{
    type: Component,
    args: [{
      selector: "ion-range",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "legacy", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonRefresher = class IonRefresher2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionRefresh", "ionPull", "ionStart"]);
  }
};
IonRefresher.ɵfac = function IonRefresher_Factory(t) {
  return new (t || IonRefresher)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonRefresher.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonRefresher,
  selectors: [["ion-refresher"]],
  inputs: {
    closeDuration: "closeDuration",
    disabled: "disabled",
    pullFactor: "pullFactor",
    pullMax: "pullMax",
    pullMin: "pullMin",
    snapbackDuration: "snapbackDuration"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRefresher_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonRefresher = __decorate([ProxyCmp({
  inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"],
  methods: ["complete", "cancel", "getProgress"]
})], IonRefresher);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonRefresher, [{
    type: Component,
    args: [{
      selector: "ion-refresher",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonRefresherContent = class IonRefresherContent2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonRefresherContent.ɵfac = function IonRefresherContent_Factory(t) {
  return new (t || IonRefresherContent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonRefresherContent.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonRefresherContent,
  selectors: [["ion-refresher-content"]],
  inputs: {
    pullingIcon: "pullingIcon",
    pullingText: "pullingText",
    refreshingSpinner: "refreshingSpinner",
    refreshingText: "refreshingText"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRefresherContent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonRefresherContent = __decorate([ProxyCmp({
  inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"]
})], IonRefresherContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonRefresherContent, [{
    type: Component,
    args: [{
      selector: "ion-refresher-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonReorder = class IonReorder2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonReorder.ɵfac = function IonReorder_Factory(t) {
  return new (t || IonReorder)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonReorder.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonReorder,
  selectors: [["ion-reorder"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonReorder_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonReorder = __decorate([ProxyCmp({})], IonReorder);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonReorder, [{
    type: Component,
    args: [{
      selector: "ion-reorder",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonReorderGroup = class IonReorderGroup2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionItemReorder"]);
  }
};
IonReorderGroup.ɵfac = function IonReorderGroup_Factory(t) {
  return new (t || IonReorderGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonReorderGroup.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonReorderGroup,
  selectors: [["ion-reorder-group"]],
  inputs: {
    disabled: "disabled"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonReorderGroup_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonReorderGroup = __decorate([ProxyCmp({
  inputs: ["disabled"],
  methods: ["complete"]
})], IonReorderGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonReorderGroup, [{
    type: Component,
    args: [{
      selector: "ion-reorder-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonRippleEffect = class IonRippleEffect2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonRippleEffect.ɵfac = function IonRippleEffect_Factory(t) {
  return new (t || IonRippleEffect)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonRippleEffect.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonRippleEffect,
  selectors: [["ion-ripple-effect"]],
  inputs: {
    type: "type"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRippleEffect_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonRippleEffect = __decorate([ProxyCmp({
  inputs: ["type"],
  methods: ["addRipple"]
})], IonRippleEffect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonRippleEffect, [{
    type: Component,
    args: [{
      selector: "ion-ripple-effect",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["type"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonRow = class IonRow2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonRow.ɵfac = function IonRow_Factory(t) {
  return new (t || IonRow)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonRow.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonRow,
  selectors: [["ion-row"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonRow_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonRow = __decorate([ProxyCmp({})], IonRow);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonRow, [{
    type: Component,
    args: [{
      selector: "ion-row",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonSearchbar = class IonSearchbar2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]);
  }
};
IonSearchbar.ɵfac = function IonSearchbar_Factory(t) {
  return new (t || IonSearchbar)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonSearchbar.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonSearchbar,
  selectors: [["ion-searchbar"]],
  inputs: {
    animated: "animated",
    autocomplete: "autocomplete",
    autocorrect: "autocorrect",
    cancelButtonIcon: "cancelButtonIcon",
    cancelButtonText: "cancelButtonText",
    clearIcon: "clearIcon",
    color: "color",
    debounce: "debounce",
    disabled: "disabled",
    enterkeyhint: "enterkeyhint",
    inputmode: "inputmode",
    mode: "mode",
    name: "name",
    placeholder: "placeholder",
    searchIcon: "searchIcon",
    showCancelButton: "showCancelButton",
    showClearButton: "showClearButton",
    spellcheck: "spellcheck",
    type: "type",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSearchbar_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonSearchbar = __decorate([ProxyCmp({
  inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonSearchbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonSearchbar, [{
    type: Component,
    args: [{
      selector: "ion-searchbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonSegment = class IonSegment2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
};
IonSegment.ɵfac = function IonSegment_Factory(t) {
  return new (t || IonSegment)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonSegment.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonSegment,
  selectors: [["ion-segment"]],
  inputs: {
    color: "color",
    disabled: "disabled",
    mode: "mode",
    scrollable: "scrollable",
    selectOnFocus: "selectOnFocus",
    swipeGesture: "swipeGesture",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSegment_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonSegment = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"]
})], IonSegment);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonSegment, [{
    type: Component,
    args: [{
      selector: "ion-segment",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonSegmentButton = class IonSegmentButton2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonSegmentButton.ɵfac = function IonSegmentButton_Factory(t) {
  return new (t || IonSegmentButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonSegmentButton.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonSegmentButton,
  selectors: [["ion-segment-button"]],
  inputs: {
    disabled: "disabled",
    layout: "layout",
    mode: "mode",
    type: "type",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSegmentButton_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonSegmentButton = __decorate([ProxyCmp({
  inputs: ["disabled", "layout", "mode", "type", "value"]
})], IonSegmentButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonSegmentButton, [{
    type: Component,
    args: [{
      selector: "ion-segment-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "layout", "mode", "type", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonSelect = class IonSelect2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionCancel", "ionDismiss", "ionFocus", "ionBlur"]);
  }
};
IonSelect.ɵfac = function IonSelect_Factory(t) {
  return new (t || IonSelect)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonSelect.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonSelect,
  selectors: [["ion-select"]],
  inputs: {
    cancelText: "cancelText",
    color: "color",
    compareWith: "compareWith",
    disabled: "disabled",
    expandedIcon: "expandedIcon",
    fill: "fill",
    interface: "interface",
    interfaceOptions: "interfaceOptions",
    justify: "justify",
    label: "label",
    labelPlacement: "labelPlacement",
    legacy: "legacy",
    mode: "mode",
    multiple: "multiple",
    name: "name",
    okText: "okText",
    placeholder: "placeholder",
    selectedText: "selectedText",
    shape: "shape",
    toggleIcon: "toggleIcon",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSelect_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonSelect = __decorate([ProxyCmp({
  inputs: ["cancelText", "color", "compareWith", "disabled", "expandedIcon", "fill", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "legacy", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "shape", "toggleIcon", "value"],
  methods: ["open"]
})], IonSelect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonSelect, [{
    type: Component,
    args: [{
      selector: "ion-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "color", "compareWith", "disabled", "expandedIcon", "fill", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "legacy", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "shape", "toggleIcon", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonSelectOption = class IonSelectOption2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonSelectOption.ɵfac = function IonSelectOption_Factory(t) {
  return new (t || IonSelectOption)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonSelectOption.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonSelectOption,
  selectors: [["ion-select-option"]],
  inputs: {
    disabled: "disabled",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSelectOption_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonSelectOption = __decorate([ProxyCmp({
  inputs: ["disabled", "value"]
})], IonSelectOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonSelectOption, [{
    type: Component,
    args: [{
      selector: "ion-select-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonSkeletonText = class IonSkeletonText2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonSkeletonText.ɵfac = function IonSkeletonText_Factory(t) {
  return new (t || IonSkeletonText)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonSkeletonText.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonSkeletonText,
  selectors: [["ion-skeleton-text"]],
  inputs: {
    animated: "animated"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSkeletonText_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonSkeletonText = __decorate([ProxyCmp({
  inputs: ["animated"]
})], IonSkeletonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonSkeletonText, [{
    type: Component,
    args: [{
      selector: "ion-skeleton-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonSpinner = class IonSpinner2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonSpinner.ɵfac = function IonSpinner_Factory(t) {
  return new (t || IonSpinner)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonSpinner.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonSpinner,
  selectors: [["ion-spinner"]],
  inputs: {
    color: "color",
    duration: "duration",
    name: "name",
    paused: "paused"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSpinner_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonSpinner = __decorate([ProxyCmp({
  inputs: ["color", "duration", "name", "paused"]
})], IonSpinner);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonSpinner, [{
    type: Component,
    args: [{
      selector: "ion-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "duration", "name", "paused"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonSplitPane = class IonSplitPane2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSplitPaneVisible"]);
  }
};
IonSplitPane.ɵfac = function IonSplitPane_Factory(t) {
  return new (t || IonSplitPane)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonSplitPane.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonSplitPane,
  selectors: [["ion-split-pane"]],
  inputs: {
    contentId: "contentId",
    disabled: "disabled",
    when: "when"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonSplitPane_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonSplitPane = __decorate([ProxyCmp({
  inputs: ["contentId", "disabled", "when"]
})], IonSplitPane);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonSplitPane, [{
    type: Component,
    args: [{
      selector: "ion-split-pane",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "when"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonTabBar = class IonTabBar2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonTabBar.ɵfac = function IonTabBar_Factory(t) {
  return new (t || IonTabBar)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonTabBar.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonTabBar,
  selectors: [["ion-tab-bar"]],
  inputs: {
    color: "color",
    mode: "mode",
    selectedTab: "selectedTab",
    translucent: "translucent"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonTabBar_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonTabBar = __decorate([ProxyCmp({
  inputs: ["color", "mode", "selectedTab", "translucent"]
})], IonTabBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonTabBar, [{
    type: Component,
    args: [{
      selector: "ion-tab-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "selectedTab", "translucent"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonTabButton = class IonTabButton2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonTabButton.ɵfac = function IonTabButton_Factory(t) {
  return new (t || IonTabButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonTabButton.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonTabButton,
  selectors: [["ion-tab-button"]],
  inputs: {
    disabled: "disabled",
    download: "download",
    href: "href",
    layout: "layout",
    mode: "mode",
    rel: "rel",
    selected: "selected",
    tab: "tab",
    target: "target"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonTabButton_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonTabButton = __decorate([ProxyCmp({
  inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
})], IonTabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonTabButton, [{
    type: Component,
    args: [{
      selector: "ion-tab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonText = class IonText2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonText.ɵfac = function IonText_Factory(t) {
  return new (t || IonText)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonText.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonText,
  selectors: [["ion-text"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonText_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonText = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonText, [{
    type: Component,
    args: [{
      selector: "ion-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonTextarea = class IonTextarea2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]);
  }
};
IonTextarea.ɵfac = function IonTextarea_Factory(t) {
  return new (t || IonTextarea)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonTextarea.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonTextarea,
  selectors: [["ion-textarea"]],
  inputs: {
    autoGrow: "autoGrow",
    autocapitalize: "autocapitalize",
    autofocus: "autofocus",
    clearOnEdit: "clearOnEdit",
    color: "color",
    cols: "cols",
    counter: "counter",
    counterFormatter: "counterFormatter",
    debounce: "debounce",
    disabled: "disabled",
    enterkeyhint: "enterkeyhint",
    errorText: "errorText",
    fill: "fill",
    helperText: "helperText",
    inputmode: "inputmode",
    label: "label",
    labelPlacement: "labelPlacement",
    legacy: "legacy",
    maxlength: "maxlength",
    minlength: "minlength",
    mode: "mode",
    name: "name",
    placeholder: "placeholder",
    readonly: "readonly",
    required: "required",
    rows: "rows",
    shape: "shape",
    spellcheck: "spellcheck",
    value: "value",
    wrap: "wrap"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonTextarea_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonTextarea = __decorate([ProxyCmp({
  inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "legacy", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"],
  methods: ["setFocus", "getInputElement"]
})], IonTextarea);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonTextarea, [{
    type: Component,
    args: [{
      selector: "ion-textarea",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "legacy", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonThumbnail = class IonThumbnail2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonThumbnail.ɵfac = function IonThumbnail_Factory(t) {
  return new (t || IonThumbnail)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonThumbnail.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonThumbnail,
  selectors: [["ion-thumbnail"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonThumbnail_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonThumbnail = __decorate([ProxyCmp({})], IonThumbnail);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonThumbnail, [{
    type: Component,
    args: [{
      selector: "ion-thumbnail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonTitle = class IonTitle2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonTitle.ɵfac = function IonTitle_Factory(t) {
  return new (t || IonTitle)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonTitle.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonTitle,
  selectors: [["ion-title"]],
  inputs: {
    color: "color",
    size: "size"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonTitle_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonTitle = __decorate([ProxyCmp({
  inputs: ["color", "size"]
})], IonTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonTitle, [{
    type: Component,
    args: [{
      selector: "ion-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "size"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonToast = class IonToast2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionToastDidPresent", "ionToastWillPresent", "ionToastWillDismiss", "ionToastDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
};
IonToast.ɵfac = function IonToast_Factory(t) {
  return new (t || IonToast)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonToast.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonToast,
  selectors: [["ion-toast"]],
  inputs: {
    animated: "animated",
    buttons: "buttons",
    color: "color",
    cssClass: "cssClass",
    duration: "duration",
    enterAnimation: "enterAnimation",
    header: "header",
    htmlAttributes: "htmlAttributes",
    icon: "icon",
    isOpen: "isOpen",
    keyboardClose: "keyboardClose",
    layout: "layout",
    leaveAnimation: "leaveAnimation",
    message: "message",
    mode: "mode",
    position: "position",
    positionAnchor: "positionAnchor",
    swipeGesture: "swipeGesture",
    translucent: "translucent",
    trigger: "trigger"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonToast_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonToast = __decorate([ProxyCmp({
  inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonToast);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonToast, [{
    type: Component,
    args: [{
      selector: "ion-toast",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonToggle = class IonToggle2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
};
IonToggle.ɵfac = function IonToggle_Factory(t) {
  return new (t || IonToggle)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonToggle.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonToggle,
  selectors: [["ion-toggle"]],
  inputs: {
    alignment: "alignment",
    checked: "checked",
    color: "color",
    disabled: "disabled",
    enableOnOffLabels: "enableOnOffLabels",
    justify: "justify",
    labelPlacement: "labelPlacement",
    legacy: "legacy",
    mode: "mode",
    name: "name",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonToggle_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonToggle = __decorate([ProxyCmp({
  inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "justify", "labelPlacement", "legacy", "mode", "name", "value"]
})], IonToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonToggle, [{
    type: Component,
    args: [{
      selector: "ion-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "justify", "labelPlacement", "legacy", "mode", "name", "value"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonToolbar = class IonToolbar2 {
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
};
IonToolbar.ɵfac = function IonToolbar_Factory(t) {
  return new (t || IonToolbar)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone));
};
IonToolbar.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonToolbar,
  selectors: [["ion-toolbar"]],
  inputs: {
    color: "color",
    mode: "mode"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonToolbar_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
IonToolbar = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonToolbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonToolbar, [{
    type: Component,
    args: [{
      selector: "ion-toolbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function () {
    return [{
      type: i0.ChangeDetectorRef
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }];
  }, null);
})();
var IonRouterOutlet = class extends IonRouterOutlet$1 {
  /**
   * We need to pass in the correct instance of IonRouterOutlet
   * otherwise parentOutlet will be null in a nested outlet context.
   * This results in APIs such as NavController.pop not working
   * in nested outlets because the parent outlet cannot be found.
   */
  constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
    super(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet);
    this.parentOutlet = parentOutlet;
  }
};
IonRouterOutlet.ɵfac = function IonRouterOutlet_Factory(t) {
  return new (t || IonRouterOutlet)(i0.ɵɵinjectAttribute("name"), i0.ɵɵinjectAttribute("tabs"), i0.ɵɵdirectiveInject(i1.Location), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i2.ActivatedRoute), i0.ɵɵdirectiveInject(IonRouterOutlet, 12));
};
IonRouterOutlet.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
  type: IonRouterOutlet,
  selectors: [["ion-router-outlet"]],
  features: [i0.ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonRouterOutlet, [{
    type: Directive,
    args: [{
      selector: "ion-router-outlet"
    }]
  }], function () {
    return [{
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["name"]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Attribute,
        args: ["tabs"]
      }]
    }, {
      type: i1.Location
    }, {
      type: i0.ElementRef
    }, {
      type: i2.Router
    }, {
      type: i0.NgZone
    }, {
      type: i2.ActivatedRoute
    }, {
      type: IonRouterOutlet,
      decorators: [{
        type: SkipSelf
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var IonTabs = class extends IonTabs$1 {};
IonTabs.ɵfac = /* @__PURE__ */(() => {
  let ɵIonTabs_BaseFactory;
  return function IonTabs_Factory(t) {
    return (ɵIonTabs_BaseFactory || (ɵIonTabs_BaseFactory = i0.ɵɵgetInheritedFactory(IonTabs)))(t || IonTabs);
  };
})();
IonTabs.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonTabs,
  selectors: [["ion-tabs"]],
  contentQueries: function IonTabs_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      i0.ɵɵcontentQuery(dirIndex, IonTabBar, 5);
      i0.ɵɵcontentQuery(dirIndex, IonTabBar, 4);
    }
    if (rf & 2) {
      let _t;
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabBar = _t.first);
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabBars = _t);
    }
  },
  viewQuery: function IonTabs_Query(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵviewQuery(_c1, 5, IonRouterOutlet);
    }
    if (rf & 2) {
      let _t;
      i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.outlet = _t.first);
    }
  },
  features: [i0.ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c3,
  decls: 6,
  vars: 0,
  consts: [[1, "tabs-inner"], ["tabsInner", ""], ["tabs", "true", 3, "stackWillChange", "stackDidChange"], ["outlet", ""]],
  template: function IonTabs_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef(_c2);
      i0.ɵɵprojection(0);
      i0.ɵɵelementStart(1, "div", 0, 1)(3, "ion-router-outlet", 2, 3);
      i0.ɵɵlistener("stackWillChange", function IonTabs_Template_ion_router_outlet_stackWillChange_3_listener($event) {
        return ctx.onStackWillChange($event);
      })("stackDidChange", function IonTabs_Template_ion_router_outlet_stackDidChange_3_listener($event) {
        return ctx.onStackDidChange($event);
      });
      i0.ɵɵelementEnd()();
      i0.ɵɵprojection(5, 1);
    }
  },
  dependencies: [IonRouterOutlet],
  styles: ["[_nghost-%COMP%]{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner[_ngcontent-%COMP%]{position:relative;flex:1;contain:layout size style}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonTabs, [{
    type: Component,
    args: [{
      selector: "ion-tabs",
      template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner" #tabsInner>
      <ion-router-outlet
        #outlet
        tabs="true"
        (stackWillChange)="onStackWillChange($event)"
        (stackDidChange)="onStackDidChange($event)"
      ></ion-router-outlet>
    </div>
    <ng-content></ng-content>
  `,
      styles: [":host{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner{position:relative;flex:1;contain:layout size style}\n"]
    }]
  }], null, {
    outlet: [{
      type: ViewChild,
      args: ["outlet", {
        read: IonRouterOutlet,
        static: false
      }]
    }],
    tabBar: [{
      type: ContentChild,
      args: [IonTabBar, {
        static: false
      }]
    }],
    tabBars: [{
      type: ContentChildren,
      args: [IonTabBar]
    }]
  });
})();
var IonBackButton = class extends IonBackButton$1 {
  constructor(routerOutlet, navCtrl, config2, r, z, c) {
    super(routerOutlet, navCtrl, config2, r, z, c);
  }
};
IonBackButton.ɵfac = function IonBackButton_Factory(t) {
  return new (t || IonBackButton)(i0.ɵɵdirectiveInject(IonRouterOutlet, 8), i0.ɵɵdirectiveInject(i2$1.NavController), i0.ɵɵdirectiveInject(i2$1.Config), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef));
};
IonBackButton.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonBackButton,
  selectors: [["ion-back-button"]],
  features: [i0.ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonBackButton_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonBackButton, [{
    type: Component,
    args: [{
      selector: "ion-back-button",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: IonRouterOutlet,
      decorators: [{
        type: Optional
      }]
    }, {
      type: i2$1.NavController
    }, {
      type: i2$1.Config
    }, {
      type: i0.ElementRef
    }, {
      type: i0.NgZone
    }, {
      type: i0.ChangeDetectorRef
    }];
  }, null);
})();
var IonNav = class extends IonNav$1 {
  constructor(ref, environmentInjector, injector, angularDelegate, z, c) {
    super(ref, environmentInjector, injector, angularDelegate, z, c);
  }
};
IonNav.ɵfac = function IonNav_Factory(t) {
  return new (t || IonNav)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.EnvironmentInjector), i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i2$1.AngularDelegate), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef));
};
IonNav.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonNav,
  selectors: [["ion-nav"]],
  features: [i0.ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function IonNav_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonNav, [{
    type: Component,
    args: [{
      selector: "ion-nav",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: i0.ElementRef
    }, {
      type: i0.EnvironmentInjector
    }, {
      type: i0.Injector
    }, {
      type: i2$1.AngularDelegate
    }, {
      type: i0.NgZone
    }, {
      type: i0.ChangeDetectorRef
    }];
  }, null);
})();
var RouterLinkDelegateDirective = class extends RouterLinkDelegateDirective$1 {};
RouterLinkDelegateDirective.ɵfac = /* @__PURE__ */(() => {
  let ɵRouterLinkDelegateDirective_BaseFactory;
  return function RouterLinkDelegateDirective_Factory(t) {
    return (ɵRouterLinkDelegateDirective_BaseFactory || (ɵRouterLinkDelegateDirective_BaseFactory = i0.ɵɵgetInheritedFactory(RouterLinkDelegateDirective)))(t || RouterLinkDelegateDirective);
  };
})();
RouterLinkDelegateDirective.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
  type: RouterLinkDelegateDirective,
  selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
  features: [i0.ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouterLinkDelegateDirective, [{
    type: Directive,
    args: [{
      selector: ":not(a):not(area)[routerLink]"
    }]
  }], null, null);
})();
var RouterLinkWithHrefDelegateDirective = class extends RouterLinkWithHrefDelegateDirective$1 {};
RouterLinkWithHrefDelegateDirective.ɵfac = /* @__PURE__ */(() => {
  let ɵRouterLinkWithHrefDelegateDirective_BaseFactory;
  return function RouterLinkWithHrefDelegateDirective_Factory(t) {
    return (ɵRouterLinkWithHrefDelegateDirective_BaseFactory || (ɵRouterLinkWithHrefDelegateDirective_BaseFactory = i0.ɵɵgetInheritedFactory(RouterLinkWithHrefDelegateDirective)))(t || RouterLinkWithHrefDelegateDirective);
  };
})();
RouterLinkWithHrefDelegateDirective.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
  type: RouterLinkWithHrefDelegateDirective,
  selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
  features: [i0.ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RouterLinkWithHrefDelegateDirective, [{
    type: Directive,
    args: [{
      selector: "a[routerLink],area[routerLink]"
    }]
  }], null, null);
})();
var IonModal = class extends IonModal$1 {};
IonModal.ɵfac = /* @__PURE__ */(() => {
  let ɵIonModal_BaseFactory;
  return function IonModal_Factory(t) {
    return (ɵIonModal_BaseFactory || (ɵIonModal_BaseFactory = i0.ɵɵgetInheritedFactory(IonModal)))(t || IonModal);
  };
})();
IonModal.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonModal,
  selectors: [["ion-modal"]],
  features: [i0.ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [["class", "ion-delegate-host ion-page", 4, "ngIf"], [1, "ion-delegate-host", "ion-page"], [3, "ngTemplateOutlet"]],
  template: function IonModal_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵtemplate(0, IonModal_div_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      i0.ɵɵproperty("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
    }
  },
  dependencies: [i1.NgIf, i1.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonModal, [{
    type: Component,
    args: [{
      selector: "ion-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="ion-delegate-host ion-page" *ngIf="isCmpOpen || keepContentsMounted">
    <ng-container [ngTemplateOutlet]="template"></ng-container>
  </div>`
    }]
  }], null, null);
})();
var IonPopover = class extends IonPopover$1 {};
IonPopover.ɵfac = /* @__PURE__ */(() => {
  let ɵIonPopover_BaseFactory;
  return function IonPopover_Factory(t) {
    return (ɵIonPopover_BaseFactory || (ɵIonPopover_BaseFactory = i0.ɵɵgetInheritedFactory(IonPopover)))(t || IonPopover);
  };
})();
IonPopover.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
  type: IonPopover,
  selectors: [["ion-popover"]],
  features: [i0.ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]],
  template: function IonPopover_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵtemplate(0, IonPopover_ng_container_0_Template, 1, 1, "ng-container", 0);
    }
    if (rf & 2) {
      i0.ɵɵproperty("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
    }
  },
  dependencies: [i1.NgIf, i1.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonPopover, [{
    type: Component,
    args: [{
      selector: "ion-popover",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container [ngTemplateOutlet]="template" *ngIf="isCmpOpen || keepContentsMounted"></ng-container>`
    }]
  }], null, null);
})();
var ION_MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMaxValidator),
  multi: true
};
var IonMaxValidator = class extends MaxValidator {};
IonMaxValidator.ɵfac = /* @__PURE__ */(() => {
  let ɵIonMaxValidator_BaseFactory;
  return function IonMaxValidator_Factory(t) {
    return (ɵIonMaxValidator_BaseFactory || (ɵIonMaxValidator_BaseFactory = i0.ɵɵgetInheritedFactory(IonMaxValidator)))(t || IonMaxValidator);
  };
})();
IonMaxValidator.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
  type: IonMaxValidator,
  selectors: [["ion-input", "type", "number", "max", "", "formControlName", ""], ["ion-input", "type", "number", "max", "", "formControl", ""], ["ion-input", "type", "number", "max", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function IonMaxValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      i0.ɵɵattribute("max", ctx._enabled ? ctx.max : null);
    }
  },
  features: [i0.ɵɵProvidersFeature([ION_MAX_VALIDATOR]), i0.ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonMaxValidator, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number][max][formControlName],ion-input[type=number][max][formControl],ion-input[type=number][max][ngModel]",
      providers: [ION_MAX_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, null);
})();
var ION_MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMinValidator),
  multi: true
};
var IonMinValidator = class extends MinValidator {};
IonMinValidator.ɵfac = /* @__PURE__ */(() => {
  let ɵIonMinValidator_BaseFactory;
  return function IonMinValidator_Factory(t) {
    return (ɵIonMinValidator_BaseFactory || (ɵIonMinValidator_BaseFactory = i0.ɵɵgetInheritedFactory(IonMinValidator)))(t || IonMinValidator);
  };
})();
IonMinValidator.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
  type: IonMinValidator,
  selectors: [["ion-input", "type", "number", "min", "", "formControlName", ""], ["ion-input", "type", "number", "min", "", "formControl", ""], ["ion-input", "type", "number", "min", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function IonMinValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      i0.ɵɵattribute("min", ctx._enabled ? ctx.min : null);
    }
  },
  features: [i0.ɵɵProvidersFeature([ION_MIN_VALIDATOR]), i0.ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonMinValidator, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number][min][formControlName],ion-input[type=number][min][formControl],ion-input[type=number][min][ngModel]",
      providers: [ION_MIN_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, null);
})();
var AlertController = class extends OverlayBaseController {
  constructor() {
    super(alertController);
  }
};
AlertController.ɵfac = function AlertController_Factory(t) {
  return new (t || AlertController)();
};
AlertController.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
  token: AlertController,
  factory: AlertController.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [];
  }, null);
})();
var AnimationController = class {
  /**
   * Create a new animation
   */
  create(animationId) {
    return createAnimation(animationId);
  }
  /**
   * EXPERIMENTAL
   *
   * Given a progression and a cubic bezier function,
   * this utility returns the time value(s) at which the
   * cubic bezier reaches the given time progression.
   *
   * If the cubic bezier never reaches the progression
   * the result will be an empty array.
   *
   * This is most useful for switching between easing curves
   * when doing a gesture animation (i.e. going from linear easing
   * during a drag, to another easing when `progressEnd` is called)
   */
  easingTime(p0, p1, p2, p3, progression) {
    return getTimeGivenProgression(p0, p1, p2, p3, progression);
  }
};
AnimationController.ɵfac = function AnimationController_Factory(t) {
  return new (t || AnimationController)();
};
AnimationController.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
  token: AnimationController,
  factory: AnimationController.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnimationController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ActionSheetController = class extends OverlayBaseController {
  constructor() {
    super(actionSheetController);
  }
};
ActionSheetController.ɵfac = function ActionSheetController_Factory(t) {
  return new (t || ActionSheetController)();
};
ActionSheetController.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
  token: ActionSheetController,
  factory: ActionSheetController.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionSheetController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [];
  }, null);
})();
var GestureController2 = class {
  constructor(zone) {
    this.zone = zone;
  }
  /**
   * Create a new gesture
   */
  create(opts, runInsideAngularZone = false) {
    if (runInsideAngularZone) {
      Object.getOwnPropertyNames(opts).forEach(key => {
        if (typeof opts[key] === "function") {
          const fn = opts[key];
          opts[key] = (...props) => this.zone.run(() => fn(...props));
        }
      });
    }
    return createGesture(opts);
  }
};
GestureController2.ɵfac = function GestureController_Factory(t) {
  return new (t || GestureController2)(i0.ɵɵinject(i0.NgZone));
};
GestureController2.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
  token: GestureController2,
  factory: GestureController2.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GestureController2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [{
      type: i0.NgZone
    }];
  }, null);
})();
var LoadingController = class extends OverlayBaseController {
  constructor() {
    super(loadingController);
  }
};
LoadingController.ɵfac = function LoadingController_Factory(t) {
  return new (t || LoadingController)();
};
LoadingController.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
  token: LoadingController,
  factory: LoadingController.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [];
  }, null);
})();
var MenuController = class extends MenuController$1 {
  constructor() {
    super(menuController);
  }
};
MenuController.ɵfac = function MenuController_Factory(t) {
  return new (t || MenuController)();
};
MenuController.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
  token: MenuController,
  factory: MenuController.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [];
  }, null);
})();
var ModalController = class extends OverlayBaseController {
  constructor() {
    super(modalController);
    this.angularDelegate = inject(AngularDelegate2);
    this.injector = inject(Injector2);
    this.environmentInjector = inject(EnvironmentInjector2);
  }
  create(opts) {
    return super.create(__spreadProps(__spreadValues({}, opts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "modal")
    }));
  }
};
ModalController.ɵfac = function ModalController_Factory(t) {
  return new (t || ModalController)();
};
ModalController.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
  token: ModalController,
  factory: ModalController.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalController, [{
    type: Injectable
  }], function () {
    return [];
  }, null);
})();
var PickerController = class extends OverlayBaseController {
  constructor() {
    super(pickerController);
  }
};
PickerController.ɵfac = function PickerController_Factory(t) {
  return new (t || PickerController)();
};
PickerController.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
  token: PickerController,
  factory: PickerController.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PickerController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [];
  }, null);
})();
var PopoverController = class extends OverlayBaseController {
  constructor() {
    super(popoverController);
    this.angularDelegate = inject(AngularDelegate2);
    this.injector = inject(Injector2);
    this.environmentInjector = inject(EnvironmentInjector2);
  }
  create(opts) {
    return super.create(__spreadProps(__spreadValues({}, opts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "popover")
    }));
  }
};
var ToastController = class extends OverlayBaseController {
  constructor() {
    super(toastController);
  }
};
ToastController.ɵfac = function ToastController_Factory(t) {
  return new (t || ToastController)();
};
ToastController.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
  token: ToastController,
  factory: ToastController.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToastController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [];
  }, null);
})();
var appInitialize = (config2, doc3, zone) => {
  return () => {
    const win3 = doc3.defaultView;
    if (win3 && typeof window !== "undefined") {
      setupConfig(__spreadProps(__spreadValues({}, config2), {
        _zoneGate: h2 => zone.run(h2)
      }));
      const aelFn = "__zone_symbol__addEventListener" in doc3.body ? "__zone_symbol__addEventListener" : "addEventListener";
      return applyPolyfills().then(() => {
        return defineCustomElements(win3, {
          exclude: ["ion-tabs", "ion-tab"],
          syncQueue: true,
          raf: raf2,
          jmp: h2 => zone.runOutsideAngular(h2),
          ael(elm, eventName, cb, opts) {
            elm[aelFn](eventName, cb, opts);
          },
          rel(elm, eventName, cb, opts) {
            elm.removeEventListener(eventName, cb, opts);
          }
        });
      });
    }
  };
};
var DIRECTIVES = [IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonApp, IonAvatar, IonBackdrop, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonLoading, IonMenu, IonMenuButton, IonMenuToggle, IonNavLink, IonNote, IonPicker, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSkeletonText, IonSpinner, IonSplitPane, IonTabBar, IonTabButton, IonText, IonTextarea, IonThumbnail, IonTitle, IonToast, IonToggle, IonToolbar];
var DECLARATIONS = [
// generated proxies
...DIRECTIVES,
// manual proxies
IonModal, IonPopover,
// ngModel accessors
BooleanValueAccessorDirective, NumericValueAccessorDirective, RadioValueAccessorDirective, SelectValueAccessorDirective, TextValueAccessorDirective,
// navigation
IonTabs, IonRouterOutlet, IonBackButton, IonNav, RouterLinkDelegateDirective, RouterLinkWithHrefDelegateDirective,
// validators
IonMinValidator, IonMaxValidator];
var IonicModule = class _IonicModule {
  static forRoot(config2) {
    return {
      ngModule: _IonicModule,
      providers: [{
        provide: ConfigToken,
        useValue: config2
      }, {
        provide: APP_INITIALIZER,
        useFactory: appInitialize,
        multi: true,
        deps: [ConfigToken, DOCUMENT, NgZone2]
      }, provideComponentInputBinding()]
    };
  }
};
IonicModule.ɵfac = function IonicModule_Factory(t) {
  return new (t || IonicModule)();
};
IonicModule.ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
  type: IonicModule
});
IonicModule.ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({
  providers: [AngularDelegate2, ModalController, PopoverController],
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonicModule, [{
    type: NgModule,
    args: [{
      declarations: DECLARATIONS,
      exports: DECLARATIONS,
      providers: [AngularDelegate2, ModalController, PopoverController],
      imports: [CommonModule]
    }]
  }], null, null);
})();
export { ActionSheetController, AlertController, AngularDelegate3 as AngularDelegate, AnimationController, BooleanValueAccessorDirective as BooleanValueAccessor, Config3 as Config, DomController, GestureController2 as GestureController, ION_MAX_VALIDATOR, ION_MIN_VALIDATOR, IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonApp, IonAvatar, IonBackButton, IonBackdrop, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonLoading, IonMaxValidator, IonMenu, IonMenuButton, IonMenuToggle, IonMinValidator, IonModal, IonNav, IonNavLink, IonNote, IonPicker, IonPopover, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRouterOutlet, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSkeletonText, IonSpinner, IonSplitPane, IonTabBar, IonTabButton, IonTabs, IonText, IonTextarea, IonThumbnail, IonTitle, IonToast, IonToggle, IonToolbar, IonicModule, IonicRouteStrategy, IonicSafeString, IonicSlides, LoadingController, MenuController, ModalController, NavController2 as NavController, NavParams, NumericValueAccessorDirective as NumericValueAccessor, PickerController, Platform, PopoverController, RadioValueAccessorDirective as RadioValueAccessor, RouterLinkDelegateDirective as RouterLinkDelegate, RouterLinkWithHrefDelegateDirective as RouterLinkWithHrefDelegate, SelectValueAccessorDirective as SelectValueAccessor, TextValueAccessorDirective as TextValueAccessor, ToastController, createAnimation, createGesture, getIonPageElement, getPlatforms, getTimeGivenProgression, iosTransitionAnimation, isPlatform, mdTransitionAnimation, openURL };
/*! Bundled license information:

@ionic/core/dist/esm-es5/index-a5d50daf.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/helpers-ae653409.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/animation-dde8cc0d.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-b7d870cf.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
  (*!__STENCIL_STATIC_IMPORT_SWITCH__*)

@ionic/core/dist/esm-es5/index-4743453d.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/ios.transition-3376ccb2.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/md.transition-f992779f.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm/polyfills/dom.js:
  (*!
  Element.closest and Element.matches
  https://github.com/jonathantneal/closest
  Creative Commons Zero v1.0 Universal
  *)
  (*!
  Element.getRootNode()
  *)
  (*!
  Element.isConnected()
  *)
  (*!
  Element.remove()
  *)
  (*!
  Element.classList
  *)
  (*!
  DOMTokenList
  *)

@ionic/core/dist/esm/polyfills/core-js.js:
  (*!fetch 3.0.0, global "this" must be replaced with "window" *)

@ionic/core/dist/esm-es5/cubic-bezier-fe2083dc.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/gesture-controller-1bf57181.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-2cf77112.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/ionic-global-1f99b929.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/config-49c88215.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/theme-01f3f29c.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/hardware-back-button-b2bc76db.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-9b0d46f4.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-1193f005.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/framework-delegate-bc1fd82a.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/overlays-b33f6bca.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/app-globals-8c62bec2.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/loader.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/loader/index.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/