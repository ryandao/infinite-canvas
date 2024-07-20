(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._dotSvgContainer_64xbd_1{position:absolute;width:100%;height:100%;inset-block-start:0;inset-inline-start:0}._container_1xxyl_1{position:relative;overflow:hidden;width:100%;height:100%}._canvasWrapper_1xxyl_8{position:relative;width:100%;height:100%;overflow:hidden;background-color:var(--kf-color-bg-gray);cursor:grab;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._canvasWrapper_1xxyl_8._panning_1xxyl_21{cursor:grabbing}._canvas_1xxyl_8{position:relative;z-index:2;width:100%;height:100%}._canvas_1xxyl_8>div:first-of-type{position:absolute;inset-inline-start:0;inset-block-start:0;transition:transform .01s ease}._contentWrapper_1xxyl_39{position:absolute}._verticalScrollBar_17thb_1{position:absolute;inset-inline-end:2px;inset-block-start:0;inset-block-end:0;background:transparent}._horizontalScrollBar_17thb_9{position:absolute;inset-block-end:2px;inset-inline-start:0;inset-inline-end:0;background:transparent}._verticalScrollBar_17thb_1>div,._horizontalScrollBar_17thb_9>div{position:absolute;border-radius:50px;z-index:8;cursor:pointer}._verticalScrollBar_17thb_1>div{width:100%}._horizontalScrollBar_17thb_9>div{height:100%}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import xe, { forwardRef as In, useRef as lt, useState as Pn, useImperativeHandle as kn, useEffect as ue, useCallback as jt, Fragment as Rr, memo as Cr, useMemo as Dn } from "react";
var Pe = { exports: {} }, Xt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function Or() {
  if (cn) return Xt;
  cn = 1;
  var t = xe, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, l, f) {
    var c, _ = {}, m = null, x = null;
    f !== void 0 && (m = "" + f), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (c in l) r.call(l, c) && !a.hasOwnProperty(c) && (_[c] = l[c]);
    if (u && u.defaultProps) for (c in l = u.defaultProps, l) _[c] === void 0 && (_[c] = l[c]);
    return { $$typeof: e, type: u, key: m, ref: x, props: _, _owner: i.current };
  }
  return Xt.Fragment = n, Xt.jsx = o, Xt.jsxs = o, Xt;
}
var Ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ln;
function Nr() {
  return ln || (ln = 1, process.env.NODE_ENV !== "production" && function() {
    var t = xe, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), R = Symbol.iterator, T = "@@iterator";
    function M(s) {
      if (s === null || typeof s != "object")
        return null;
      var g = R && s[R] || s[T];
      return typeof g == "function" ? g : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function z(s) {
      {
        for (var g = arguments.length, w = new Array(g > 1 ? g - 1 : 0), C = 1; C < g; C++)
          w[C - 1] = arguments[C];
        U("error", s, w);
      }
    }
    function U(s, g, w) {
      {
        var C = b.ReactDebugCurrentFrame, k = C.getStackAddendum();
        k !== "" && (g += "%s", w = w.concat([k]));
        var X = w.map(function(I) {
          return String(I);
        });
        X.unshift("Warning: " + g), Function.prototype.apply.call(console[s], console, X);
      }
    }
    var L = !1, F = !1, Y = !1, D = !1, $ = !1, V;
    V = Symbol.for("react.module.reference");
    function J(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === a || $ || s === i || s === f || s === c || D || s === x || L || F || Y || typeof s == "object" && s !== null && (s.$$typeof === m || s.$$typeof === _ || s.$$typeof === o || s.$$typeof === u || s.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === V || s.getModuleId !== void 0));
    }
    function at(s, g, w) {
      var C = s.displayName;
      if (C)
        return C;
      var k = g.displayName || g.name || "";
      return k !== "" ? w + "(" + k + ")" : w;
    }
    function Q(s) {
      return s.displayName || "Context";
    }
    function et(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            var g = s;
            return Q(g) + ".Consumer";
          case o:
            var w = s;
            return Q(w._context) + ".Provider";
          case l:
            return at(s, s.render, "ForwardRef");
          case _:
            var C = s.displayName || null;
            return C !== null ? C : et(s.type) || "Memo";
          case m: {
            var k = s, X = k._payload, I = k._init;
            try {
              return et(I(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var h = Object.assign, v = 0, d, p, y, E, S, N, O;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function P() {
      {
        if (v === 0) {
          d = console.log, p = console.info, y = console.warn, E = console.error, S = console.group, N = console.groupCollapsed, O = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        v++;
      }
    }
    function W() {
      {
        if (v--, v === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: h({}, s, {
              value: d
            }),
            info: h({}, s, {
              value: p
            }),
            warn: h({}, s, {
              value: y
            }),
            error: h({}, s, {
              value: E
            }),
            group: h({}, s, {
              value: S
            }),
            groupCollapsed: h({}, s, {
              value: N
            }),
            groupEnd: h({}, s, {
              value: O
            })
          });
        }
        v < 0 && z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = b.ReactCurrentDispatcher, B;
    function K(s, g, w) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (k) {
            var C = k.stack.trim().match(/\n( *(at )?)/);
            B = C && C[1] || "";
          }
        return `
` + B + s;
      }
    }
    var st = !1, _t;
    {
      var zt = typeof WeakMap == "function" ? WeakMap : Map;
      _t = new zt();
    }
    function gt(s, g) {
      if (!s || st)
        return "";
      {
        var w = _t.get(s);
        if (w !== void 0)
          return w;
      }
      var C;
      st = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = j.current, j.current = null, P();
      try {
        if (g) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (yt) {
              C = yt;
            }
            Reflect.construct(s, [], I);
          } else {
            try {
              I.call();
            } catch (yt) {
              C = yt;
            }
            s.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yt) {
            C = yt;
          }
          s();
        }
      } catch (yt) {
        if (yt && C && typeof yt.stack == "string") {
          for (var A = yt.stack.split(`
`), nt = C.stack.split(`
`), G = A.length - 1, Z = nt.length - 1; G >= 1 && Z >= 0 && A[G] !== nt[Z]; )
            Z--;
          for (; G >= 1 && Z >= 0; G--, Z--)
            if (A[G] !== nt[Z]) {
              if (G !== 1 || Z !== 1)
                do
                  if (G--, Z--, Z < 0 || A[G] !== nt[Z]) {
                    var ut = `
` + A[G].replace(" at new ", " at ");
                    return s.displayName && ut.includes("<anonymous>") && (ut = ut.replace("<anonymous>", s.displayName)), typeof s == "function" && _t.set(s, ut), ut;
                  }
                while (G >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        st = !1, j.current = X, W(), Error.prepareStackTrace = k;
      }
      var Pt = s ? s.displayName || s.name : "", un = Pt ? K(Pt) : "";
      return typeof s == "function" && _t.set(s, un), un;
    }
    function $t(s, g, w) {
      return gt(s, !1);
    }
    function At(s) {
      var g = s.prototype;
      return !!(g && g.isReactComponent);
    }
    function vt(s, g, w) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return gt(s, At(s));
      if (typeof s == "string")
        return K(s);
      switch (s) {
        case f:
          return K("Suspense");
        case c:
          return K("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            return $t(s.render);
          case _:
            return vt(s.type, g, w);
          case m: {
            var C = s, k = C._payload, X = C._init;
            try {
              return vt(X(k), g, w);
            } catch {
            }
          }
        }
      return "";
    }
    var mt = Object.prototype.hasOwnProperty, ne = {}, Ft = b.ReactDebugCurrentFrame;
    function Tt(s) {
      if (s) {
        var g = s._owner, w = vt(s.type, s._source, g ? g.type : null);
        Ft.setExtraStackFrame(w);
      } else
        Ft.setExtraStackFrame(null);
    }
    function Te(s, g, w, C, k) {
      {
        var X = Function.call.bind(mt);
        for (var I in s)
          if (X(s, I)) {
            var A = void 0;
            try {
              if (typeof s[I] != "function") {
                var nt = Error((C || "React class") + ": " + w + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw nt.name = "Invariant Violation", nt;
              }
              A = s[I](g, I, C, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              A = G;
            }
            A && !(A instanceof Error) && (Tt(k), z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", w, I, typeof A), Tt(null)), A instanceof Error && !(A.message in ne) && (ne[A.message] = !0, Tt(k), z("Failed %s type: %s", w, A.message), Tt(null));
          }
      }
    }
    var re = Array.isArray;
    function Mt(s) {
      return re(s);
    }
    function ur(s) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, w = g && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return w;
      }
    }
    function cr(s) {
      try {
        return Be(s), !1;
      } catch {
        return !0;
      }
    }
    function Be(s) {
      return "" + s;
    }
    function Je(s) {
      if (cr(s))
        return z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(s)), Be(s);
    }
    var Yt = b.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, tn, Re;
    Re = {};
    function fr(s) {
      if (mt.call(s, "ref")) {
        var g = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function hr(s) {
      if (mt.call(s, "key")) {
        var g = Object.getOwnPropertyDescriptor(s, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function dr(s, g) {
      if (typeof s.ref == "string" && Yt.current && g && Yt.current.stateNode !== g) {
        var w = et(Yt.current.type);
        Re[w] || (z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', et(Yt.current.type), s.ref), Re[w] = !0);
      }
    }
    function pr(s, g) {
      {
        var w = function() {
          Qe || (Qe = !0, z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function _r(s, g) {
      {
        var w = function() {
          tn || (tn = !0, z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var gr = function(s, g, w, C, k, X, I) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: s,
        key: g,
        ref: w,
        props: I,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function vr(s, g, w, C, k) {
      {
        var X, I = {}, A = null, nt = null;
        w !== void 0 && (Je(w), A = "" + w), hr(g) && (Je(g.key), A = "" + g.key), fr(g) && (nt = g.ref, dr(g, k));
        for (X in g)
          mt.call(g, X) && !lr.hasOwnProperty(X) && (I[X] = g[X]);
        if (s && s.defaultProps) {
          var G = s.defaultProps;
          for (X in G)
            I[X] === void 0 && (I[X] = G[X]);
        }
        if (A || nt) {
          var Z = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          A && pr(I, Z), nt && _r(I, Z);
        }
        return gr(s, A, nt, k, C, Yt.current, I);
      }
    }
    var Ce = b.ReactCurrentOwner, en = b.ReactDebugCurrentFrame;
    function It(s) {
      if (s) {
        var g = s._owner, w = vt(s.type, s._source, g ? g.type : null);
        en.setExtraStackFrame(w);
      } else
        en.setExtraStackFrame(null);
    }
    var Oe;
    Oe = !1;
    function Ne(s) {
      return typeof s == "object" && s !== null && s.$$typeof === e;
    }
    function nn() {
      {
        if (Ce.current) {
          var s = et(Ce.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function mr(s) {
      return "";
    }
    var rn = {};
    function yr(s) {
      {
        var g = nn();
        if (!g) {
          var w = typeof s == "string" ? s : s.displayName || s.name;
          w && (g = `

Check the top-level render call using <` + w + ">.");
        }
        return g;
      }
    }
    function on(s, g) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var w = yr(g);
        if (rn[w])
          return;
        rn[w] = !0;
        var C = "";
        s && s._owner && s._owner !== Ce.current && (C = " It was passed a child from " + et(s._owner.type) + "."), It(s), z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, C), It(null);
      }
    }
    function an(s, g) {
      {
        if (typeof s != "object")
          return;
        if (Mt(s))
          for (var w = 0; w < s.length; w++) {
            var C = s[w];
            Ne(C) && on(C, g);
          }
        else if (Ne(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var k = M(s);
          if (typeof k == "function" && k !== s.entries)
            for (var X = k.call(s), I; !(I = X.next()).done; )
              Ne(I.value) && on(I.value, g);
        }
      }
    }
    function wr(s) {
      {
        var g = s.type;
        if (g == null || typeof g == "string")
          return;
        var w;
        if (typeof g == "function")
          w = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === _))
          w = g.propTypes;
        else
          return;
        if (w) {
          var C = et(g);
          Te(w, s.props, "prop", C, s);
        } else if (g.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var k = et(g);
          z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(s) {
      {
        for (var g = Object.keys(s.props), w = 0; w < g.length; w++) {
          var C = g[w];
          if (C !== "children" && C !== "key") {
            It(s), z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), It(null);
            break;
          }
        }
        s.ref !== null && (It(s), z("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    function sn(s, g, w, C, k, X) {
      {
        var I = J(s);
        if (!I) {
          var A = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var nt = mr();
          nt ? A += nt : A += nn();
          var G;
          s === null ? G = "null" : Mt(s) ? G = "array" : s !== void 0 && s.$$typeof === e ? (G = "<" + (et(s.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : G = typeof s, z("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, A);
        }
        var Z = vr(s, g, w, k, X);
        if (Z == null)
          return Z;
        if (I) {
          var ut = g.children;
          if (ut !== void 0)
            if (C)
              if (Mt(ut)) {
                for (var Pt = 0; Pt < ut.length; Pt++)
                  an(ut[Pt], s);
                Object.freeze && Object.freeze(ut);
              } else
                z("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              an(ut, s);
        }
        return s === r ? xr(Z) : wr(Z), Z;
      }
    }
    function br(s, g, w) {
      return sn(s, g, w, !0);
    }
    function Er(s, g, w) {
      return sn(s, g, w, !1);
    }
    var Sr = Er, Tr = br;
    Ht.Fragment = r, Ht.jsx = Sr, Ht.jsxs = Tr;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? Pe.exports = Or() : Pe.exports = Nr();
var q = Pe.exports, ke = "http://www.w3.org/1999/xhtml";
const fn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ke,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function be(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), fn.hasOwnProperty(e) ? { space: fn[e], local: t } : t;
}
function zr(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === ke && e.documentElement.namespaceURI === ke ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Ar(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ln(t) {
  var e = be(t);
  return (e.local ? Ar : zr)(e);
}
function Mr() {
}
function Ve(t) {
  return t == null ? Mr : function() {
    return this.querySelector(t);
  };
}
function Ir(t) {
  typeof t != "function" && (t = Ve(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, u = r[i] = new Array(o), l, f, c = 0; c < o; ++c)
      (l = a[c]) && (f = t.call(l, l.__data__, c, a)) && ("__data__" in l && (f.__data__ = l.__data__), u[c] = f);
  return new ot(r, this._parents);
}
function Pr(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function kr() {
  return [];
}
function $n(t) {
  return t == null ? kr : function() {
    return this.querySelectorAll(t);
  };
}
function Dr(t) {
  return function() {
    return Pr(t.apply(this, arguments));
  };
}
function Lr(t) {
  typeof t == "function" ? t = Dr(t) : t = $n(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], u = o.length, l, f = 0; f < u; ++f)
      (l = o[f]) && (r.push(t.call(l, l.__data__, f, o)), i.push(l));
  return new ot(r, i);
}
function Fn(t) {
  return function() {
    return this.matches(t);
  };
}
function Yn(t) {
  return function(e) {
    return e.matches(t);
  };
}
var $r = Array.prototype.find;
function Fr(t) {
  return function() {
    return $r.call(this.children, t);
  };
}
function Yr() {
  return this.firstElementChild;
}
function Xr(t) {
  return this.select(t == null ? Yr : Fr(typeof t == "function" ? t : Yn(t)));
}
var Hr = Array.prototype.filter;
function Ur() {
  return Array.from(this.children);
}
function Vr(t) {
  return function() {
    return Hr.call(this.children, t);
  };
}
function Wr(t) {
  return this.selectAll(t == null ? Ur : Vr(typeof t == "function" ? t : Yn(t)));
}
function qr(t) {
  typeof t != "function" && (t = Fn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, u = r[i] = [], l, f = 0; f < o; ++f)
      (l = a[f]) && t.call(l, l.__data__, f, a) && u.push(l);
  return new ot(r, this._parents);
}
function Xn(t) {
  return new Array(t.length);
}
function jr() {
  return new ot(this._enter || this._groups.map(Xn), this._parents);
}
function de(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
de.prototype = {
  constructor: de,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Gr(t) {
  return function() {
    return t;
  };
}
function Kr(t, e, n, r, i, a) {
  for (var o = 0, u, l = e.length, f = a.length; o < f; ++o)
    (u = e[o]) ? (u.__data__ = a[o], r[o] = u) : n[o] = new de(t, a[o]);
  for (; o < l; ++o)
    (u = e[o]) && (i[o] = u);
}
function Zr(t, e, n, r, i, a, o) {
  var u, l, f = /* @__PURE__ */ new Map(), c = e.length, _ = a.length, m = new Array(c), x;
  for (u = 0; u < c; ++u)
    (l = e[u]) && (m[u] = x = o.call(l, l.__data__, u, e) + "", f.has(x) ? i[u] = l : f.set(x, l));
  for (u = 0; u < _; ++u)
    x = o.call(t, a[u], u, a) + "", (l = f.get(x)) ? (r[u] = l, l.__data__ = a[u], f.delete(x)) : n[u] = new de(t, a[u]);
  for (u = 0; u < c; ++u)
    (l = e[u]) && f.get(m[u]) === l && (i[u] = l);
}
function Br(t) {
  return t.__data__;
}
function Jr(t, e) {
  if (!arguments.length) return Array.from(this, Br);
  var n = e ? Zr : Kr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Gr(t));
  for (var a = i.length, o = new Array(a), u = new Array(a), l = new Array(a), f = 0; f < a; ++f) {
    var c = r[f], _ = i[f], m = _.length, x = Qr(t.call(c, c && c.__data__, f, r)), R = x.length, T = u[f] = new Array(R), M = o[f] = new Array(R), b = l[f] = new Array(m);
    n(c, _, T, M, b, x, e);
    for (var z = 0, U = 0, L, F; z < R; ++z)
      if (L = T[z]) {
        for (z >= U && (U = z + 1); !(F = M[U]) && ++U < R; ) ;
        L._next = F || null;
      }
  }
  return o = new ot(o, r), o._enter = u, o._exit = l, o;
}
function Qr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ti() {
  return new ot(this._exit || this._groups.map(Xn), this._parents);
}
function ei(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function ni(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), u = new Array(i), l = 0; l < o; ++l)
    for (var f = n[l], c = r[l], _ = f.length, m = u[l] = new Array(_), x, R = 0; R < _; ++R)
      (x = f[R] || c[R]) && (m[R] = x);
  for (; l < i; ++l)
    u[l] = n[l];
  return new ot(u, this._parents);
}
function ri() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function ii(t) {
  t || (t = oi);
  function e(_, m) {
    return _ && m ? t(_.__data__, m.__data__) : !_ - !m;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], u = o.length, l = i[a] = new Array(u), f, c = 0; c < u; ++c)
      (f = o[c]) && (l[c] = f);
    l.sort(e);
  }
  return new ot(i, this._parents).order();
}
function oi(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ai() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function si() {
  return Array.from(this);
}
function ui() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function ci() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function li() {
  return !this.node();
}
function fi(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, u; a < o; ++a)
      (u = i[a]) && t.call(u, u.__data__, a, i);
  return this;
}
function hi(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function di(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function pi(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function _i(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function gi(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function vi(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function mi(t, e) {
  var n = be(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? di : hi : typeof e == "function" ? n.local ? vi : gi : n.local ? _i : pi)(n, e));
}
function Hn(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function yi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function wi(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function xi(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function bi(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? yi : typeof e == "function" ? xi : wi)(t, e, n ?? "")) : Dt(this.node(), t);
}
function Dt(t, e) {
  return t.style.getPropertyValue(e) || Hn(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Ei(t) {
  return function() {
    delete this[t];
  };
}
function Si(t, e) {
  return function() {
    this[t] = e;
  };
}
function Ti(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Ri(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Ei : typeof e == "function" ? Ti : Si)(t, e)) : this.node()[t];
}
function Un(t) {
  return t.trim().split(/^|\s+/);
}
function We(t) {
  return t.classList || new Vn(t);
}
function Vn(t) {
  this._node = t, this._names = Un(t.getAttribute("class") || "");
}
Vn.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Wn(t, e) {
  for (var n = We(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function qn(t, e) {
  for (var n = We(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Ci(t) {
  return function() {
    Wn(this, t);
  };
}
function Oi(t) {
  return function() {
    qn(this, t);
  };
}
function Ni(t, e) {
  return function() {
    (e.apply(this, arguments) ? Wn : qn)(this, t);
  };
}
function zi(t, e) {
  var n = Un(t + "");
  if (arguments.length < 2) {
    for (var r = We(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Ni : e ? Ci : Oi)(n, e));
}
function Ai() {
  this.textContent = "";
}
function Mi(t) {
  return function() {
    this.textContent = t;
  };
}
function Ii(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Pi(t) {
  return arguments.length ? this.each(t == null ? Ai : (typeof t == "function" ? Ii : Mi)(t)) : this.node().textContent;
}
function ki() {
  this.innerHTML = "";
}
function Di(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Li(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function $i(t) {
  return arguments.length ? this.each(t == null ? ki : (typeof t == "function" ? Li : Di)(t)) : this.node().innerHTML;
}
function Fi() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Yi() {
  return this.each(Fi);
}
function Xi() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Hi() {
  return this.each(Xi);
}
function Ui(t) {
  var e = typeof t == "function" ? t : Ln(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Vi() {
  return null;
}
function Wi(t, e) {
  var n = typeof t == "function" ? t : Ln(t), r = e == null ? Vi : typeof e == "function" ? e : Ve(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function qi() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ji() {
  return this.each(qi);
}
function Gi() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ki() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Zi(t) {
  return this.select(t ? Ki : Gi);
}
function Bi(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ji(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Qi(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function to(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function eo(t, e, n) {
  return function() {
    var r = this.__on, i, a = Ji(e);
    if (r) {
      for (var o = 0, u = r.length; o < u; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function no(t, e, n) {
  var r = Qi(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var u = this.node().__on;
    if (u) {
      for (var l = 0, f = u.length, c; l < f; ++l)
        for (i = 0, c = u[l]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (u = e ? eo : to, i = 0; i < a; ++i) this.each(u(r[i], e, n));
  return this;
}
function jn(t, e, n) {
  var r = Hn(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function ro(t, e) {
  return function() {
    return jn(this, t, e);
  };
}
function io(t, e) {
  return function() {
    return jn(this, t, e.apply(this, arguments));
  };
}
function oo(t, e) {
  return this.each((typeof e == "function" ? io : ro)(t, e));
}
function* ao() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Gn = [null];
function ot(t, e) {
  this._groups = t, this._parents = e;
}
function te() {
  return new ot([[document.documentElement]], Gn);
}
function so() {
  return this;
}
ot.prototype = te.prototype = {
  constructor: ot,
  select: Ir,
  selectAll: Lr,
  selectChild: Xr,
  selectChildren: Wr,
  filter: qr,
  data: Jr,
  enter: jr,
  exit: ti,
  join: ei,
  merge: ni,
  selection: so,
  order: ri,
  sort: ii,
  call: ai,
  nodes: si,
  node: ui,
  size: ci,
  empty: li,
  each: fi,
  attr: mi,
  style: bi,
  property: Ri,
  classed: zi,
  text: Pi,
  html: $i,
  raise: Yi,
  lower: Hi,
  append: Ui,
  insert: Wi,
  remove: ji,
  clone: Zi,
  datum: Bi,
  on: no,
  dispatch: oo,
  [Symbol.iterator]: ao
};
function rt(t) {
  return typeof t == "string" ? new ot([[document.querySelector(t)]], [document.documentElement]) : new ot([[t]], Gn);
}
function uo(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Et(t, e) {
  if (t = uo(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
var co = { value: () => {
} };
function qe() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ce(n);
}
function ce(t) {
  this._ = t;
}
function lo(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ce.prototype = qe.prototype = {
  constructor: ce,
  on: function(t, e) {
    var n = this._, r = lo(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = fo(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = hn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = hn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ce(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n);
  }
};
function fo(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function hn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = co, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
const De = { capture: !0, passive: !1 };
function Le(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ho(t) {
  var e = t.document.documentElement, n = rt(t).on("dragstart.drag", Le, De);
  "onselectstart" in e ? n.on("selectstart.drag", Le, De) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function po(t, e) {
  var n = t.document.documentElement, r = rt(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Le, De), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
function je(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Kn(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function ee() {
}
var Zt = 0.7, pe = 1 / Zt, kt = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _o = /^#([0-9a-f]{3,8})$/, go = new RegExp(`^rgb\\(${kt},${kt},${kt}\\)$`), vo = new RegExp(`^rgb\\(${dt},${dt},${dt}\\)$`), mo = new RegExp(`^rgba\\(${kt},${kt},${kt},${Bt}\\)$`), yo = new RegExp(`^rgba\\(${dt},${dt},${dt},${Bt}\\)$`), wo = new RegExp(`^hsl\\(${Bt},${dt},${dt}\\)$`), xo = new RegExp(`^hsla\\(${Bt},${dt},${dt},${Bt}\\)$`), dn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
je(ee, Jt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: pn,
  // Deprecated! Use color.formatHex.
  formatHex: pn,
  formatHex8: bo,
  formatHsl: Eo,
  formatRgb: _n,
  toString: _n
});
function pn() {
  return this.rgb().formatHex();
}
function bo() {
  return this.rgb().formatHex8();
}
function Eo() {
  return Zn(this).formatHsl();
}
function _n() {
  return this.rgb().formatRgb();
}
function Jt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = _o.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? gn(e) : n === 3 ? new it(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ie(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ie(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = go.exec(t)) ? new it(e[1], e[2], e[3], 1) : (e = vo.exec(t)) ? new it(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = mo.exec(t)) ? ie(e[1], e[2], e[3], e[4]) : (e = yo.exec(t)) ? ie(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = wo.exec(t)) ? yn(e[1], e[2] / 100, e[3] / 100, 1) : (e = xo.exec(t)) ? yn(e[1], e[2] / 100, e[3] / 100, e[4]) : dn.hasOwnProperty(t) ? gn(dn[t]) : t === "transparent" ? new it(NaN, NaN, NaN, 0) : null;
}
function gn(t) {
  return new it(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ie(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new it(t, e, n, r);
}
function So(t) {
  return t instanceof ee || (t = Jt(t)), t ? (t = t.rgb(), new it(t.r, t.g, t.b, t.opacity)) : new it();
}
function $e(t, e, n, r) {
  return arguments.length === 1 ? So(t) : new it(t, e, n, r ?? 1);
}
function it(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
je(it, $e, Kn(ee, {
  brighter(t) {
    return t = t == null ? pe : Math.pow(pe, t), new it(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Zt : Math.pow(Zt, t), new it(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new it(Ot(this.r), Ot(this.g), Ot(this.b), _e(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: vn,
  // Deprecated! Use color.formatHex.
  formatHex: vn,
  formatHex8: To,
  formatRgb: mn,
  toString: mn
}));
function vn() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}`;
}
function To() {
  return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}${Ct((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function mn() {
  const t = _e(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ot(this.r)}, ${Ot(this.g)}, ${Ot(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function _e(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ot(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ct(t) {
  return t = Ot(t), (t < 16 ? "0" : "") + t.toString(16);
}
function yn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new ft(t, e, n, r);
}
function Zn(t) {
  if (t instanceof ft) return new ft(t.h, t.s, t.l, t.opacity);
  if (t instanceof ee || (t = Jt(t)), !t) return new ft();
  if (t instanceof ft) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, u = a - i, l = (a + i) / 2;
  return u ? (e === a ? o = (n - r) / u + (n < r) * 6 : n === a ? o = (r - e) / u + 2 : o = (e - n) / u + 4, u /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : u = l > 0 && l < 1 ? 0 : o, new ft(o, u, l, t.opacity);
}
function Ro(t, e, n, r) {
  return arguments.length === 1 ? Zn(t) : new ft(t, e, n, r ?? 1);
}
function ft(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
je(ft, Ro, Kn(ee, {
  brighter(t) {
    return t = t == null ? pe : Math.pow(pe, t), new ft(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Zt : Math.pow(Zt, t), new ft(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new it(
      ze(t >= 240 ? t - 240 : t + 120, i, r),
      ze(t, i, r),
      ze(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new ft(wn(this.h), oe(this.s), oe(this.l), _e(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = _e(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${wn(this.h)}, ${oe(this.s) * 100}%, ${oe(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function wn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function oe(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ze(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Bn = (t) => () => t;
function Co(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Oo(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function No(t) {
  return (t = +t) == 1 ? Jn : function(e, n) {
    return n - e ? Oo(e, n, t) : Bn(isNaN(e) ? n : e);
  };
}
function Jn(t, e) {
  var n = e - t;
  return n ? Co(t, n) : Bn(isNaN(t) ? e : t);
}
const xn = function t(e) {
  var n = No(e);
  function r(i, a) {
    var o = n((i = $e(i)).r, (a = $e(a)).r), u = n(i.g, a.g), l = n(i.b, a.b), f = Jn(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = u(c), i.b = l(c), i.opacity = f(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function St(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
var Fe = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ae = new RegExp(Fe.source, "g");
function zo(t) {
  return function() {
    return t;
  };
}
function Ao(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Mo(t, e) {
  var n = Fe.lastIndex = Ae.lastIndex = 0, r, i, a, o = -1, u = [], l = [];
  for (t = t + "", e = e + ""; (r = Fe.exec(t)) && (i = Ae.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), u[o] ? u[o] += a : u[++o] = a), (r = r[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, l.push({ i: o, x: St(r, i) })), n = Ae.lastIndex;
  return n < e.length && (a = e.slice(n), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? l[0] ? Ao(l[0].x) : zo(e) : (e = l.length, function(f) {
    for (var c = 0, _; c < e; ++c) u[(_ = l[c]).i] = _.x(f);
    return u.join("");
  });
}
var bn = 180 / Math.PI, Ye = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Qn(t, e, n, r, i, a) {
  var o, u, l;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * n + e * r) && (n -= t * l, r -= e * l), (u = Math.sqrt(n * n + r * r)) && (n /= u, r /= u, l /= u), t * r < e * n && (t = -t, e = -e, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * bn,
    skewX: Math.atan(l) * bn,
    scaleX: o,
    scaleY: u
  };
}
var ae;
function Io(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Ye : Qn(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Po(t) {
  return t == null || (ae || (ae = document.createElementNS("http://www.w3.org/2000/svg", "g")), ae.setAttribute("transform", t), !(t = ae.transform.baseVal.consolidate())) ? Ye : (t = t.matrix, Qn(t.a, t.b, t.c, t.d, t.e, t.f));
}
function tr(t, e, n, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function a(f, c, _, m, x, R) {
    if (f !== _ || c !== m) {
      var T = x.push("translate(", null, e, null, n);
      R.push({ i: T - 4, x: St(f, _) }, { i: T - 2, x: St(c, m) });
    } else (_ || m) && x.push("translate(" + _ + e + m + n);
  }
  function o(f, c, _, m) {
    f !== c ? (f - c > 180 ? c += 360 : c - f > 180 && (f += 360), m.push({ i: _.push(i(_) + "rotate(", null, r) - 2, x: St(f, c) })) : c && _.push(i(_) + "rotate(" + c + r);
  }
  function u(f, c, _, m) {
    f !== c ? m.push({ i: _.push(i(_) + "skewX(", null, r) - 2, x: St(f, c) }) : c && _.push(i(_) + "skewX(" + c + r);
  }
  function l(f, c, _, m, x, R) {
    if (f !== _ || c !== m) {
      var T = x.push(i(x) + "scale(", null, ",", null, ")");
      R.push({ i: T - 4, x: St(f, _) }, { i: T - 2, x: St(c, m) });
    } else (_ !== 1 || m !== 1) && x.push(i(x) + "scale(" + _ + "," + m + ")");
  }
  return function(f, c) {
    var _ = [], m = [];
    return f = t(f), c = t(c), a(f.translateX, f.translateY, c.translateX, c.translateY, _, m), o(f.rotate, c.rotate, _, m), u(f.skewX, c.skewX, _, m), l(f.scaleX, f.scaleY, c.scaleX, c.scaleY, _, m), f = c = null, function(x) {
      for (var R = -1, T = m.length, M; ++R < T; ) _[(M = m[R]).i] = M.x(x);
      return _.join("");
    };
  };
}
var ko = tr(Io, "px, ", "px)", "deg)"), Do = tr(Po, ", ", ")", ")"), Lo = 1e-12;
function En(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function $o(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Fo(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const Yo = function t(e, n, r) {
  function i(a, o) {
    var u = a[0], l = a[1], f = a[2], c = o[0], _ = o[1], m = o[2], x = c - u, R = _ - l, T = x * x + R * R, M, b;
    if (T < Lo)
      b = Math.log(m / f) / e, M = function(D) {
        return [
          u + D * x,
          l + D * R,
          f * Math.exp(e * D * b)
        ];
      };
    else {
      var z = Math.sqrt(T), U = (m * m - f * f + r * T) / (2 * f * n * z), L = (m * m - f * f - r * T) / (2 * m * n * z), F = Math.log(Math.sqrt(U * U + 1) - U), Y = Math.log(Math.sqrt(L * L + 1) - L);
      b = (Y - F) / e, M = function(D) {
        var $ = D * b, V = En(F), J = f / (n * z) * (V * Fo(e * $ + F) - $o(F));
        return [
          u + J * x,
          l + J * R,
          f * V / En(e * $ + F)
        ];
      };
    }
    return M.duration = b * 1e3 * e / Math.SQRT2, M;
  }
  return i.rho = function(a) {
    var o = Math.max(1e-3, +a), u = o * o, l = u * u;
    return t(o, u, l);
  }, i;
}(Math.SQRT2, 2, 4);
var Lt = 0, Wt = 0, Ut = 0, er = 1e3, ge, qt, ve = 0, Nt = 0, Ee = 0, Qt = typeof performance == "object" && performance.now ? performance : Date, nr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ge() {
  return Nt || (nr(Xo), Nt = Qt.now() + Ee);
}
function Xo() {
  Nt = 0;
}
function me() {
  this._call = this._time = this._next = null;
}
me.prototype = rr.prototype = {
  constructor: me,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ge() : +n) + (e == null ? 0 : +e), !this._next && qt !== this && (qt ? qt._next = this : ge = this, qt = this), this._call = t, this._time = n, Xe();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Xe());
  }
};
function rr(t, e, n) {
  var r = new me();
  return r.restart(t, e, n), r;
}
function Ho() {
  Ge(), ++Lt;
  for (var t = ge, e; t; )
    (e = Nt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Lt;
}
function Sn() {
  Nt = (ve = Qt.now()) + Ee, Lt = Wt = 0;
  try {
    Ho();
  } finally {
    Lt = 0, Vo(), Nt = 0;
  }
}
function Uo() {
  var t = Qt.now(), e = t - ve;
  e > er && (Ee -= e, ve = t);
}
function Vo() {
  for (var t, e = ge, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ge = n);
  qt = t, Xe(r);
}
function Xe(t) {
  if (!Lt) {
    Wt && (Wt = clearTimeout(Wt));
    var e = t - Nt;
    e > 24 ? (t < 1 / 0 && (Wt = setTimeout(Sn, t - Qt.now() - Ee)), Ut && (Ut = clearInterval(Ut))) : (Ut || (ve = Qt.now(), Ut = setInterval(Uo, er)), Lt = 1, nr(Sn));
  }
}
function Tn(t, e, n) {
  var r = new me();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Wo = qe("start", "end", "cancel", "interrupt"), qo = [], ir = 0, Rn = 1, He = 2, le = 3, Cn = 4, Ue = 5, fe = 6;
function Se(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  jo(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Wo,
    tween: qo,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: ir
  });
}
function Ke(t, e) {
  var n = ht(t, e);
  if (n.state > ir) throw new Error("too late; already scheduled");
  return n;
}
function pt(t, e) {
  var n = ht(t, e);
  if (n.state > le) throw new Error("too late; already running");
  return n;
}
function ht(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function jo(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = rr(a, 0, n.time);
  function a(f) {
    n.state = Rn, n.timer.restart(o, n.delay, n.time), n.delay <= f && o(f - n.delay);
  }
  function o(f) {
    var c, _, m, x;
    if (n.state !== Rn) return l();
    for (c in r)
      if (x = r[c], x.name === n.name) {
        if (x.state === le) return Tn(o);
        x.state === Cn ? (x.state = fe, x.timer.stop(), x.on.call("interrupt", t, t.__data__, x.index, x.group), delete r[c]) : +c < e && (x.state = fe, x.timer.stop(), x.on.call("cancel", t, t.__data__, x.index, x.group), delete r[c]);
      }
    if (Tn(function() {
      n.state === le && (n.state = Cn, n.timer.restart(u, n.delay, n.time), u(f));
    }), n.state = He, n.on.call("start", t, t.__data__, n.index, n.group), n.state === He) {
      for (n.state = le, i = new Array(m = n.tween.length), c = 0, _ = -1; c < m; ++c)
        (x = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++_] = x);
      i.length = _ + 1;
    }
  }
  function u(f) {
    for (var c = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(l), n.state = Ue, 1), _ = -1, m = i.length; ++_ < m; )
      i[_].call(t, c);
    n.state === Ue && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = fe, n.timer.stop(), delete r[e];
    for (var f in r) return;
    delete t.__transition;
  }
}
function he(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > He && r.state < Ue, r.state = fe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function Go(t) {
  return this.each(function() {
    he(this, t);
  });
}
function Ko(t, e) {
  var n, r;
  return function() {
    var i = pt(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, u = r.length; o < u; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Zo(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = pt(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var u = { name: e, value: n }, l = 0, f = i.length; l < f; ++l)
        if (i[l].name === e) {
          i[l] = u;
          break;
        }
      l === f && i.push(u);
    }
    a.tween = i;
  };
}
function Bo(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = ht(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Ko : Zo)(n, t, e));
}
function Ze(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = pt(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return ht(i, r).value[e];
  };
}
function or(t, e) {
  var n;
  return (typeof e == "number" ? St : e instanceof Jt ? xn : (n = Jt(e)) ? (e = n, xn) : Mo)(t, e);
}
function Jo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Qo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ta(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function ea(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function na(t, e, n) {
  var r, i, a;
  return function() {
    var o, u = n(this), l;
    return u == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = u + "", o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, u)));
  };
}
function ra(t, e, n) {
  var r, i, a;
  return function() {
    var o, u = n(this), l;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = u + "", o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, u)));
  };
}
function ia(t, e) {
  var n = be(t), r = n === "transform" ? Do : or;
  return this.attrTween(t, typeof e == "function" ? (n.local ? ra : na)(n, r, Ze(this, "attr." + t, e)) : e == null ? (n.local ? Qo : Jo)(n) : (n.local ? ea : ta)(n, r, e));
}
function oa(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function aa(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function sa(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && aa(t, a)), n;
  }
  return i._value = e, i;
}
function ua(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && oa(t, a)), n;
  }
  return i._value = e, i;
}
function ca(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = be(t);
  return this.tween(n, (r.local ? sa : ua)(r, e));
}
function la(t, e) {
  return function() {
    Ke(this, t).delay = +e.apply(this, arguments);
  };
}
function fa(t, e) {
  return e = +e, function() {
    Ke(this, t).delay = e;
  };
}
function ha(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? la : fa)(e, t)) : ht(this.node(), e).delay;
}
function da(t, e) {
  return function() {
    pt(this, t).duration = +e.apply(this, arguments);
  };
}
function pa(t, e) {
  return e = +e, function() {
    pt(this, t).duration = e;
  };
}
function _a(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? da : pa)(e, t)) : ht(this.node(), e).duration;
}
function ga(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    pt(this, t).ease = e;
  };
}
function va(t) {
  var e = this._id;
  return arguments.length ? this.each(ga(e, t)) : ht(this.node(), e).ease;
}
function ma(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    pt(this, t).ease = n;
  };
}
function ya(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ma(this._id, t));
}
function wa(t) {
  typeof t != "function" && (t = Fn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, u = r[i] = [], l, f = 0; f < o; ++f)
      (l = a[f]) && t.call(l, l.__data__, f, a) && u.push(l);
  return new bt(r, this._parents, this._name, this._id);
}
function xa(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u)
    for (var l = e[u], f = n[u], c = l.length, _ = o[u] = new Array(c), m, x = 0; x < c; ++x)
      (m = l[x] || f[x]) && (_[x] = m);
  for (; u < r; ++u)
    o[u] = e[u];
  return new bt(o, this._parents, this._name, this._id);
}
function ba(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Ea(t, e, n) {
  var r, i, a = ba(e) ? Ke : pt;
  return function() {
    var o = a(this, t), u = o.on;
    u !== r && (i = (r = u).copy()).on(e, n), o.on = i;
  };
}
function Sa(t, e) {
  var n = this._id;
  return arguments.length < 2 ? ht(this.node(), n).on.on(t) : this.each(Ea(n, t, e));
}
function Ta(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Ra() {
  return this.on("end.remove", Ta(this._id));
}
function Ca(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ve(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var u = r[o], l = u.length, f = a[o] = new Array(l), c, _, m = 0; m < l; ++m)
      (c = u[m]) && (_ = t.call(c, c.__data__, m, u)) && ("__data__" in c && (_.__data__ = c.__data__), f[m] = _, Se(f[m], e, n, m, f, ht(c, n)));
  return new bt(a, this._parents, e, n);
}
function Oa(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = $n(t));
  for (var r = this._groups, i = r.length, a = [], o = [], u = 0; u < i; ++u)
    for (var l = r[u], f = l.length, c, _ = 0; _ < f; ++_)
      if (c = l[_]) {
        for (var m = t.call(c, c.__data__, _, l), x, R = ht(c, n), T = 0, M = m.length; T < M; ++T)
          (x = m[T]) && Se(x, e, n, T, m, R);
        a.push(m), o.push(c);
      }
  return new bt(a, o, e, n);
}
var Na = te.prototype.constructor;
function za() {
  return new Na(this._groups, this._parents);
}
function Aa(t, e) {
  var n, r, i;
  return function() {
    var a = Dt(this, t), o = (this.style.removeProperty(t), Dt(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function ar(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ma(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = Dt(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Ia(t, e, n) {
  var r, i, a;
  return function() {
    var o = Dt(this, t), u = n(this), l = u + "";
    return u == null && (l = u = (this.style.removeProperty(t), Dt(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, u));
  };
}
function Pa(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, u;
  return function() {
    var l = pt(this, t), f = l.on, c = l.value[a] == null ? u || (u = ar(e)) : void 0;
    (f !== n || i !== c) && (r = (n = f).copy()).on(o, i = c), l.on = r;
  };
}
function ka(t, e, n) {
  var r = (t += "") == "transform" ? ko : or;
  return e == null ? this.styleTween(t, Aa(t, r)).on("end.style." + t, ar(t)) : typeof e == "function" ? this.styleTween(t, Ia(t, r, Ze(this, "style." + t, e))).each(Pa(this._id, t)) : this.styleTween(t, Ma(t, r, e), n).on("end.style." + t, null);
}
function Da(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function La(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && Da(t, o, n)), r;
  }
  return a._value = e, a;
}
function $a(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, La(t, e, n ?? ""));
}
function Fa(t) {
  return function() {
    this.textContent = t;
  };
}
function Ya(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Xa(t) {
  return this.tween("text", typeof t == "function" ? Ya(Ze(this, "text", t)) : Fa(t == null ? "" : t + ""));
}
function Ha(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Ua(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Ha(i)), e;
  }
  return r._value = t, r;
}
function Va(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Ua(t));
}
function Wa() {
  for (var t = this._name, e = this._id, n = sr(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], u = o.length, l, f = 0; f < u; ++f)
      if (l = o[f]) {
        var c = ht(l, e);
        Se(l, t, n, f, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new bt(r, this._parents, t, n);
}
function qa() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var u = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var f = pt(this, r), c = f.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(u), e._.interrupt.push(u), e._.end.push(l)), f.on = e;
    }), i === 0 && a();
  });
}
var ja = 0;
function bt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function sr() {
  return ++ja;
}
var wt = te.prototype;
bt.prototype = {
  constructor: bt,
  select: Ca,
  selectAll: Oa,
  selectChild: wt.selectChild,
  selectChildren: wt.selectChildren,
  filter: wa,
  merge: xa,
  selection: za,
  transition: Wa,
  call: wt.call,
  nodes: wt.nodes,
  node: wt.node,
  size: wt.size,
  empty: wt.empty,
  each: wt.each,
  on: Sa,
  attr: ia,
  attrTween: ca,
  style: ka,
  styleTween: $a,
  text: Xa,
  textTween: Va,
  remove: Ra,
  tween: Bo,
  delay: ha,
  duration: _a,
  ease: va,
  easeVarying: ya,
  end: qa,
  [Symbol.iterator]: wt[Symbol.iterator]
};
function Ga(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ka = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ga
};
function Za(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Ba(t) {
  var e, n;
  t instanceof bt ? (e = t._id, t = t._name) : (e = sr(), (n = Ka).time = Ge(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], u = o.length, l, f = 0; f < u; ++f)
      (l = o[f]) && Se(l, t, e, f, o, n || Za(l, e));
  return new bt(r, this._parents, t, e);
}
te.prototype.interrupt = Go;
te.prototype.transition = Ba;
const se = (t) => () => t;
function Ja(t, {
  sourceEvent: e,
  target: n,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function xt(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
xt.prototype = {
  constructor: xt,
  scale: function(t) {
    return t === 1 ? this : new xt(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new xt(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Gt = new xt(1, 0, 0);
xt.prototype;
function Me(t) {
  t.stopImmediatePropagation();
}
function Vt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Qa(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function ts() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function On() {
  return this.__zoom || Gt;
}
function es(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function ns() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function rs(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], i = t.invertX(e[1][0]) - n[1][0], a = t.invertY(e[0][1]) - n[0][1], o = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o)
  );
}
function Nn() {
  var t = Qa, e = ts, n = rs, r = es, i = ns, a = [0, 1 / 0], o = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, l = Yo, f = qe("start", "zoom", "end"), c, _, m, x = 500, R = 150, T = 0, M = 10;
  function b(h) {
    h.property("__zoom", On).on("wheel.zoom", $, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", J).filter(i).on("touchstart.zoom", at).on("touchmove.zoom", Q).on("touchend.zoom touchcancel.zoom", et).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(h, v, d, p) {
    var y = h.selection ? h.selection() : h;
    y.property("__zoom", On), h !== y ? F(h, v, d, p) : y.interrupt().each(function() {
      Y(this, arguments).event(p).start().zoom(null, typeof v == "function" ? v.apply(this, arguments) : v).end();
    });
  }, b.scaleBy = function(h, v, d, p) {
    b.scaleTo(h, function() {
      var y = this.__zoom.k, E = typeof v == "function" ? v.apply(this, arguments) : v;
      return y * E;
    }, d, p);
  }, b.scaleTo = function(h, v, d, p) {
    b.transform(h, function() {
      var y = e.apply(this, arguments), E = this.__zoom, S = d == null ? L(y) : typeof d == "function" ? d.apply(this, arguments) : d, N = E.invert(S), O = typeof v == "function" ? v.apply(this, arguments) : v;
      return n(U(z(E, O), S, N), y, o);
    }, d, p);
  }, b.translateBy = function(h, v, d, p) {
    b.transform(h, function() {
      return n(this.__zoom.translate(
        typeof v == "function" ? v.apply(this, arguments) : v,
        typeof d == "function" ? d.apply(this, arguments) : d
      ), e.apply(this, arguments), o);
    }, null, p);
  }, b.translateTo = function(h, v, d, p, y) {
    b.transform(h, function() {
      var E = e.apply(this, arguments), S = this.__zoom, N = p == null ? L(E) : typeof p == "function" ? p.apply(this, arguments) : p;
      return n(Gt.translate(N[0], N[1]).scale(S.k).translate(
        typeof v == "function" ? -v.apply(this, arguments) : -v,
        typeof d == "function" ? -d.apply(this, arguments) : -d
      ), E, o);
    }, p, y);
  };
  function z(h, v) {
    return v = Math.max(a[0], Math.min(a[1], v)), v === h.k ? h : new xt(v, h.x, h.y);
  }
  function U(h, v, d) {
    var p = v[0] - d[0] * h.k, y = v[1] - d[1] * h.k;
    return p === h.x && y === h.y ? h : new xt(h.k, p, y);
  }
  function L(h) {
    return [(+h[0][0] + +h[1][0]) / 2, (+h[0][1] + +h[1][1]) / 2];
  }
  function F(h, v, d, p) {
    h.on("start.zoom", function() {
      Y(this, arguments).event(p).start();
    }).on("interrupt.zoom end.zoom", function() {
      Y(this, arguments).event(p).end();
    }).tween("zoom", function() {
      var y = this, E = arguments, S = Y(y, E).event(p), N = e.apply(y, E), O = d == null ? L(N) : typeof d == "function" ? d.apply(y, E) : d, H = Math.max(N[1][0] - N[0][0], N[1][1] - N[0][1]), P = y.__zoom, W = typeof v == "function" ? v.apply(y, E) : v, j = l(P.invert(O).concat(H / P.k), W.invert(O).concat(H / W.k));
      return function(B) {
        if (B === 1) B = W;
        else {
          var K = j(B), st = H / K[2];
          B = new xt(st, O[0] - K[0] * st, O[1] - K[1] * st);
        }
        S.zoom(null, B);
      };
    });
  }
  function Y(h, v, d) {
    return !d && h.__zooming || new D(h, v);
  }
  function D(h, v) {
    this.that = h, this.args = v, this.active = 0, this.sourceEvent = null, this.extent = e.apply(h, v), this.taps = 0;
  }
  D.prototype = {
    event: function(h) {
      return h && (this.sourceEvent = h), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(h, v) {
      return this.mouse && h !== "mouse" && (this.mouse[1] = v.invert(this.mouse[0])), this.touch0 && h !== "touch" && (this.touch0[1] = v.invert(this.touch0[0])), this.touch1 && h !== "touch" && (this.touch1[1] = v.invert(this.touch1[0])), this.that.__zoom = v, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(h) {
      var v = rt(this.that).datum();
      f.call(
        h,
        this.that,
        new Ja(h, {
          sourceEvent: this.sourceEvent,
          target: b,
          type: h,
          transform: this.that.__zoom,
          dispatch: f
        }),
        v
      );
    }
  };
  function $(h, ...v) {
    if (!t.apply(this, arguments)) return;
    var d = Y(this, v).event(h), p = this.__zoom, y = Math.max(a[0], Math.min(a[1], p.k * Math.pow(2, r.apply(this, arguments)))), E = Et(h);
    if (d.wheel)
      (d.mouse[0][0] !== E[0] || d.mouse[0][1] !== E[1]) && (d.mouse[1] = p.invert(d.mouse[0] = E)), clearTimeout(d.wheel);
    else {
      if (p.k === y) return;
      d.mouse = [E, p.invert(E)], he(this), d.start();
    }
    Vt(h), d.wheel = setTimeout(S, R), d.zoom("mouse", n(U(z(p, y), d.mouse[0], d.mouse[1]), d.extent, o));
    function S() {
      d.wheel = null, d.end();
    }
  }
  function V(h, ...v) {
    if (m || !t.apply(this, arguments)) return;
    var d = h.currentTarget, p = Y(this, v, !0).event(h), y = rt(h.view).on("mousemove.zoom", O, !0).on("mouseup.zoom", H, !0), E = Et(h, d), S = h.clientX, N = h.clientY;
    ho(h.view), Me(h), p.mouse = [E, this.__zoom.invert(E)], he(this), p.start();
    function O(P) {
      if (Vt(P), !p.moved) {
        var W = P.clientX - S, j = P.clientY - N;
        p.moved = W * W + j * j > T;
      }
      p.event(P).zoom("mouse", n(U(p.that.__zoom, p.mouse[0] = Et(P, d), p.mouse[1]), p.extent, o));
    }
    function H(P) {
      y.on("mousemove.zoom mouseup.zoom", null), po(P.view, p.moved), Vt(P), p.event(P).end();
    }
  }
  function J(h, ...v) {
    if (t.apply(this, arguments)) {
      var d = this.__zoom, p = Et(h.changedTouches ? h.changedTouches[0] : h, this), y = d.invert(p), E = d.k * (h.shiftKey ? 0.5 : 2), S = n(U(z(d, E), p, y), e.apply(this, v), o);
      Vt(h), u > 0 ? rt(this).transition().duration(u).call(F, S, p, h) : rt(this).call(b.transform, S, p, h);
    }
  }
  function at(h, ...v) {
    if (t.apply(this, arguments)) {
      var d = h.touches, p = d.length, y = Y(this, v, h.changedTouches.length === p).event(h), E, S, N, O;
      for (Me(h), S = 0; S < p; ++S)
        N = d[S], O = Et(N, this), O = [O, this.__zoom.invert(O), N.identifier], y.touch0 ? !y.touch1 && y.touch0[2] !== O[2] && (y.touch1 = O, y.taps = 0) : (y.touch0 = O, E = !0, y.taps = 1 + !!c);
      c && (c = clearTimeout(c)), E && (y.taps < 2 && (_ = O[0], c = setTimeout(function() {
        c = null;
      }, x)), he(this), y.start());
    }
  }
  function Q(h, ...v) {
    if (this.__zooming) {
      var d = Y(this, v).event(h), p = h.changedTouches, y = p.length, E, S, N, O;
      for (Vt(h), E = 0; E < y; ++E)
        S = p[E], N = Et(S, this), d.touch0 && d.touch0[2] === S.identifier ? d.touch0[0] = N : d.touch1 && d.touch1[2] === S.identifier && (d.touch1[0] = N);
      if (S = d.that.__zoom, d.touch1) {
        var H = d.touch0[0], P = d.touch0[1], W = d.touch1[0], j = d.touch1[1], B = (B = W[0] - H[0]) * B + (B = W[1] - H[1]) * B, K = (K = j[0] - P[0]) * K + (K = j[1] - P[1]) * K;
        S = z(S, Math.sqrt(B / K)), N = [(H[0] + W[0]) / 2, (H[1] + W[1]) / 2], O = [(P[0] + j[0]) / 2, (P[1] + j[1]) / 2];
      } else if (d.touch0) N = d.touch0[0], O = d.touch0[1];
      else return;
      d.zoom("touch", n(U(S, N, O), d.extent, o));
    }
  }
  function et(h, ...v) {
    if (this.__zooming) {
      var d = Y(this, v).event(h), p = h.changedTouches, y = p.length, E, S;
      for (Me(h), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, x), E = 0; E < y; ++E)
        S = p[E], d.touch0 && d.touch0[2] === S.identifier ? delete d.touch0 : d.touch1 && d.touch1[2] === S.identifier && delete d.touch1;
      if (d.touch1 && !d.touch0 && (d.touch0 = d.touch1, delete d.touch1), d.touch0) d.touch0[1] = this.__zoom.invert(d.touch0[0]);
      else if (d.end(), d.taps === 2 && (S = Et(S, this), Math.hypot(_[0] - S[0], _[1] - S[1]) < M)) {
        var N = rt(this).on("dblclick.zoom");
        N && N.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(h) {
    return arguments.length ? (r = typeof h == "function" ? h : se(+h), b) : r;
  }, b.filter = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : se(!!h), b) : t;
  }, b.touchable = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : se(!!h), b) : i;
  }, b.extent = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : se([[+h[0][0], +h[0][1]], [+h[1][0], +h[1][1]]]), b) : e;
  }, b.scaleExtent = function(h) {
    return arguments.length ? (a[0] = +h[0], a[1] = +h[1], b) : [a[0], a[1]];
  }, b.translateExtent = function(h) {
    return arguments.length ? (o[0][0] = +h[0][0], o[1][0] = +h[1][0], o[0][1] = +h[0][1], o[1][1] = +h[1][1], b) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
  }, b.constrain = function(h) {
    return arguments.length ? (n = h, b) : n;
  }, b.duration = function(h) {
    return arguments.length ? (u = +h, b) : u;
  }, b.interpolate = function(h) {
    return arguments.length ? (l = h, b) : l;
  }, b.on = function() {
    var h = f.on.apply(f, arguments);
    return h === f ? b : h;
  }, b.clickDistance = function(h) {
    return arguments.length ? (T = (h = +h) * h, b) : Math.sqrt(T);
  }, b.tapDistance = function(h) {
    return arguments.length ? (M = +h, b) : M;
  }, b;
}
const tt = {
  DEFAULT_MIN_ZOOM: 0.1,
  DEFAULT_MAX_ZOOM: 4,
  FIT_TO_VIEW_MAX_ZOOM: 1,
  ZOOM_RATIO: 0.5,
  TIME_FRAME: 500,
  INITIAL_POSITION_X: 0,
  INITIAL_POSITION_Y: 0,
  SCROLL_POS_RATIO: 3,
  LAYOUT_FALLBACK: 500,
  DEFAULT_LAYOUT: 1e6,
  INITIAL_SCROLLBAR_SIZE: 50,
  MIN_SCROLLBAR_SIZE: 15,
  SCROLL_DELTA_DIFF: 1.5,
  NODE_Y_OFFSET: 110
}, ye = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_CENTER: "bottom-center"
}, ct = {
  ...ye,
  TOP_CENTER: "top-center",
  BOTTOM_RIGHT: "bottom-right",
  CENTER_LEFT: "center-left",
  CENTER_RIGHT: "center-right",
  CENTER_CENTER: "center-center"
}, Kt = ({
  value: t,
  min: e = 0,
  max: n
}) => Math.min(Math.max(t, e), n), is = ({
  position: t,
  svgBounds: e,
  nodeBounds: n,
  currentTranslateX: r,
  currentTranslateY: i,
  currentScale: a,
  updatedScale: o,
  customOffset: u
}) => {
  let [l, f, c] = [0, 0, 1];
  switch (o !== a && (c = o / a, r *= c, i *= c), t) {
    case ct.TOP_LEFT:
      return {
        updatedX: r + ((e.x - n.x) * c + u.x),
        updatedY: i + ((e.y - n.y) * c + u.y)
      };
    case ct.TOP_CENTER:
      return l = e.width / 2 - (n.x * c + n.width * c / 2) + e.x, {
        updatedX: r + l + u.x,
        updatedY: i + ((e.y - n.y) * c + u.y)
      };
    case ct.TOP_RIGHT:
      return {
        updatedX: r + (e.width - (Math.abs(e.x - n.x * c) + n.width * c)) + u.x,
        updatedY: i + ((e.y - n.y) * c + u.y)
      };
    case ct.CENTER_LEFT:
      return f = e.height / 2 - (Math.abs(e.y - n.y) * c + n.height * c / 2), {
        updatedX: r + ((e.x - n.x) * c + u.x),
        updatedY: i + f + u.y
      };
    case ct.CENTER_CENTER:
      return l = e.width / 2 - (Math.abs(e.x - n.x) * c + n.width * c / 2), f = e.height / 2 - (Math.abs(e.y - n.y) * c + n.height * c / 2), {
        updatedX: r + l + u.x,
        updatedY: i + f + u.y
      };
    case ct.CENTER_RIGHT:
      return f = e.height / 2 - (Math.abs(e.y - n.y) * c + n.height * c / 2), {
        updatedX: r + (e.width - (Math.abs(e.x - n.x) * c + n.width * c)) + u.x,
        updatedY: i + f + u.y
      };
    case ct.BOTTOM_LEFT:
      return {
        updatedX: r + ((e.x - n.x) * c + u.x),
        updatedY: i + (e.height - (Math.abs(e.y - n.y) * c + n.height * c)) + u.y
      };
    case ct.BOTTOM_CENTER:
      return l = e.width / 2 - (Math.abs(e.x - n.x) * c + n.width * c / 2), {
        updatedX: r + l + u.x,
        updatedY: i + (e.height - (Math.abs(e.y - n.y) * c + n.height * c)) + u.y
      };
    case ct.BOTTOM_RIGHT:
      return {
        updatedX: r + (e.width - (Math.abs(e.x - n.x) * c + n.width * c)) + u.x,
        updatedY: i + (e.height - (Math.abs(e.y - n.y) * c + n.height)) + u.y
      };
    default:
      return {
        updatedX: r,
        updatedY: i
      };
  }
}, zn = (t) => {
  const [e, n] = [Math.max(t - 0.2, 0.2), t];
  return [
    tt.INITIAL_SCROLLBAR_SIZE / e,
    tt.INITIAL_SCROLLBAR_SIZE / n
  ];
}, os = ({
  isVertical: t,
  state: e,
  scrollDelta: n
}) => {
  const r = t ? e.verticalPos : e.horizontalPos, i = t ? e.verticalSize : e.horizontalSize, a = t ? e.verticalSizeDecrease : e.horizontalSizeDecrease, o = t ? n.deltaY : n.deltaX;
  return { scrollPos: r, scrollSize: i, scrollSizeDecrease: a, deltaValue: o };
}, An = ({
  isVertical: t = !0,
  state: e,
  scrollDelta: n,
  scrollLength: r
}) => {
  const { scrollPos: i, scrollSize: a, scrollSizeDecrease: o, deltaValue: u } = os({
    isVertical: t,
    state: e,
    scrollDelta: n
  }), l = u / 10 || 0, f = u / 100 || 0;
  let [c, _] = [
    i + l,
    o
  ];
  if (c < 1)
    c = 0, _ -= Math.abs(f);
  else if (c + a > r) {
    const m = r - Math.max(
      tt.MIN_SCROLLBAR_SIZE,
      a - Math.abs(_)
    );
    c = Math.min(
      r - (a + _),
      m
    ), _ -= f;
  } else if (_ !== 0) {
    const m = c > r / 2;
    c = m ? r - a : 0, m ? (_ -= f, _ <= 0 && (_ = 0)) : (_ += Math.abs(f), _ >= 0 && (_ = 0));
  }
  return [c, _];
}, as = "_dotSvgContainer_64xbd_1", ss = {
  dotSvgContainer: as
}, us = ({
  id: t = "",
  size: e = 1,
  minSize: n = 0.3,
  maxZoom: r = 4,
  gap: i = 20,
  zoomTransform: a = {
    scale: 1,
    translateX: 0,
    translateY: 0
  },
  className: o = "",
  minOpacity: u = 0.8,
  maxOpacity: l = 1,
  elementColor: f = "#afb7c7"
}) => {
  const { scale: c, translateX: _, translateY: m } = a, x = Kt({
    value: c * 10 / (r * 10),
    min: u,
    max: l
  }), R = i * c, T = e * c, M = Math.max(n, T), b = `patternId-${t}`;
  return /* @__PURE__ */ q.jsxs("svg", { className: `${o} ${ss.dotSvgContainer}`, children: [
    /* @__PURE__ */ q.jsx(
      "pattern",
      {
        id: b,
        x: _ % R,
        y: m % R,
        width: R,
        height: R,
        patternUnits: "userSpaceOnUse",
        patternTransform: `translate(-${T},-${T})`,
        children: /* @__PURE__ */ q.jsx(
          "circle",
          {
            cx: M,
            cy: M,
            r: M,
            fill: f,
            opacity: x
          }
        )
      }
    ),
    /* @__PURE__ */ q.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${b})` })
  ] });
}, cs = "_container_1xxyl_1", ls = "_canvasWrapper_1xxyl_8", fs = "_panning_1xxyl_21", hs = "_canvas_1xxyl_8", ds = "_contentWrapper_1xxyl_39", Rt = {
  container: cs,
  canvasWrapper: ls,
  panning: fs,
  canvas: hs,
  contentWrapper: ds
}, ps = "_verticalScrollBar_17thb_1", _s = "_horizontalScrollBar_17thb_9", Mn = {
  verticalScrollBar: ps,
  horizontalScrollBar: _s
}, gs = In(
  ({
    scale: t,
    startingPosition: e,
    offset: n = { x: 0, y: 0 },
    color: r = "gray",
    thickness: i = "8px",
    minSize: a = "15px",
    verticalOffsetHeight: o,
    horizontalOffsetWidth: u,
    onScrollDeltaHandler: l,
    getContainerOffset: f
  }, c) => {
    const [_, m] = zn(t), x = lt(null), R = lt(null), T = lt({
      isDragging: !1,
      vertical: !0,
      initialOffset: 0
    }), [M, b] = Pn({
      scale: t,
      horizontalSize: m,
      horizontalPos: e ? e.x : (u ?? 0) / tt.SCROLL_POS_RATIO,
      horizontalSizeDecrease: 0,
      verticalSize: _,
      verticalPos: e ? e.y : (o ?? 0) / tt.SCROLL_POS_RATIO,
      verticalSizeDecrease: 0
    });
    kn(c, () => ({
      resetScrollPos: () => {
        b((D) => ({
          ...D,
          horizontalPos: (u ?? 0) / tt.SCROLL_POS_RATIO,
          verticalPos: (o ?? 0) / tt.SCROLL_POS_RATIO,
          verticalSizeDecrease: 0,
          horizontalSizeDecrease: 0
        }));
      },
      onScrollDeltaChangeHandler: z,
      onMouseUp: L
    })), ue(
      function() {
        b(($) => {
          let V;
          const [J, at] = zn(t), Q = t / $.scale || 0;
          return t < $.scale ? V = {
            horizontalPos: $.horizontalPos - Q,
            verticalPos: $.verticalPos - Q
          } : V = {
            horizontalPos: $.horizontalPos + Q,
            verticalPos: $.verticalPos + Q
          }, {
            ...$,
            scale: t,
            horizontalSize: at,
            verticalSize: J,
            ...V
          };
        });
      },
      [t]
    );
    function z(D) {
      T.current.isDragging || b(($) => {
        const [V, J] = An({
          state: $,
          scrollDelta: D,
          scrollLength: o
        }), [at, Q] = An({
          isVertical: !1,
          state: $,
          scrollDelta: D,
          scrollLength: u
        });
        return {
          ...$,
          horizontalPos: at,
          horizontalSizeDecrease: Q,
          verticalPos: V,
          verticalSizeDecrease: J
        };
      });
    }
    const U = jt(
      function($, V) {
        if (!T.current.isDragging) return;
        $.stopPropagation();
        const { movementX: J, movementY: at, clientX: Q, clientY: et, offsetX: h, offsetY: v } = $;
        T.current.initialOffset < 1 && (T.current.initialOffset = V ? v : h);
        const d = V ? at : J, p = (V ? et : Q) - T.current.initialOffset - f(V), y = (O) => V ? [
          "verticalPos",
          O.verticalSize,
          o,
          n.y
        ] : [
          "horizontalPos",
          O.horizontalSize,
          u,
          n.x
        ];
        b((O) => {
          const [H, P, W, j] = y(O);
          return {
            ...O,
            [H]: Kt({
              value: p,
              min: j,
              max: W - P
            })
          };
        });
        const E = () => {
          const O = d > 0 ? d + tt.SCROLL_DELTA_DIFF : d - tt.SCROLL_DELTA_DIFF;
          return V ? { deltaX: 0, deltaY: O } : {
            deltaX: O,
            deltaY: 0
          };
        }, S = (V ? o : u) - (V ? M.verticalSize : M.horizontalSize);
        !(p <= 0 || p >= S) && d !== 0 && l(E());
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [o, u, n.y, n.x]
    ), L = jt(
      function() {
        T.current.isDragging = !1, T.current.initialOffset = 0, window.removeEventListener(
          "mousemove",
          ($) => U($, T.current.vertical)
        ), window.removeEventListener("mouseup", L);
      },
      [U]
    ), F = jt(
      function() {
        window.addEventListener(
          "mousemove",
          ($) => U($, T.current.vertical)
        ), window.addEventListener("mouseup", L);
      },
      [U, L]
    ), Y = (D) => {
      D.stopPropagation();
    };
    return /* @__PURE__ */ q.jsxs(Rr, { children: [
      /* @__PURE__ */ q.jsx(
        "div",
        {
          className: Mn.verticalScrollBar,
          style: { width: i },
          ref: x,
          children: /* @__PURE__ */ q.jsx(
            "div",
            {
              "data-id": "vertical-scrollbar",
              style: {
                insetBlockStart: `${Kt({
                  value: M.verticalPos,
                  min: n.y,
                  max: o
                })}px`,
                height: `${M.verticalSize + M.verticalSizeDecrease}px`,
                background: r,
                minHeight: a
              },
              onMouseDownCapture: (D) => {
                D.stopPropagation(), T.current = {
                  ...T.current,
                  isDragging: !0,
                  vertical: !0
                }, F();
              },
              onDragEnterCapture: Y,
              onDragCapture: Y,
              onDragEndCapture: Y
            }
          )
        }
      ),
      /* @__PURE__ */ q.jsx(
        "div",
        {
          className: Mn.horizontalScrollBar,
          ref: R,
          style: { height: i },
          children: /* @__PURE__ */ q.jsx(
            "div",
            {
              "data-id": "horizontal-scrollbar",
              style: {
                insetInlineStart: `${Kt({
                  value: M.horizontalPos,
                  min: n.x,
                  max: u
                })}px`,
                width: `${M.horizontalSize + M.horizontalSizeDecrease}px`,
                background: r,
                minWidth: a
              },
              onMouseDownCapture: (D) => {
                D.stopPropagation(), T.current = {
                  ...T.current,
                  isDragging: !0,
                  vertical: !1
                }, F();
              },
              onDragEnterCapture: Y,
              onDragCapture: Y,
              onDragEndCapture: Y
            }
          )
        }
      )
    ] });
  }
);
let we = !1;
typeof navigator < "u" && (we = /^((?!chrome|android).)*safari/i.test(navigator.userAgent));
const Ie = we ? 600 : 300, ws = In(({ children: t, ...e }, n) => {
  const r = xe.useRef(null);
  return /* @__PURE__ */ q.jsx(vs, { innerRef: n, ...e, children: /* @__PURE__ */ q.jsx(
    "div",
    {
      ref: r,
      style: { width: "max-content", height: "max-content" },
      children: t
    }
  ) });
}), vs = Cr(
  ({
    children: t,
    innerRef: e,
    minZoom: n = tt.DEFAULT_MIN_ZOOM,
    maxZoom: r = tt.DEFAULT_MAX_ZOOM,
    panOnScroll: i = !0,
    customComponents: a = [],
    renderScrollBar: o = !0,
    scrollBarConfig: u = {},
    backgroundConfig: l = {},
    onCanvasMount: f = () => {
    },
    onTransform: c = () => {
    },
    disablePanningClasses: _ = []
  }) => {
    const m = lt(null), x = lt(null), R = lt(null), T = lt(null), M = lt(null), b = t.ref, z = lt(null), U = lt(null), L = Dn(() => Nn().scaleExtent([n, r]), [r, n]), F = lt(rt(R.current).call(L)), [Y, D] = Pn({
      translateX: 0,
      translateY: 0,
      scale: 1
    });
    kn(e, () => ({
      scrollNodeToCenter: ({
        nodeElement: v,
        offset: d,
        scale: p,
        shouldUpdateMaxScale: y,
        maxScale: E,
        transitionDuration: S
      }) => J({
        nodeElement: v,
        offset: d,
        scale: p,
        shouldUpdateMaxScale: y,
        maxScale: E,
        transitionDuration: S,
        position: ct.CENTER_CENTER
      }),
      scrollNodeHandler: J,
      scrollContentHorizontallyCenter: at,
      fitContentToView: V,
      getCanvasState: Q
    })), ue(() => {
      const v = (p) => {
        p.code === "Space" && (U.current = !0);
      }, d = (p) => {
        p.code === "Space" && (U.current = !1);
      };
      return window.addEventListener("keydown", v), window.addEventListener("keyup", d), () => {
        window.removeEventListener("keydown", v), window.removeEventListener("keyup", d);
      };
    }, []), ue(
      function() {
        F.current = rt(R.current).call(L);
        const d = rt(T.current);
        x.current = m.current ? m.current.getBoundingClientRect() : {}, L.filter((p) => {
          if (p.type === "mousedown" && !z.current && (z.current = !0, et()), !U.current) {
            let y = p.target;
            for (; y; ) {
              if (_.filter((E) => y == null ? void 0 : y.classList.contains(E)).length > 0)
                return !1;
              y = y.parentElement;
            }
          }
          return p.ctrlKey || p.type !== "wheel";
        }).on(
          "zoom",
          (p) => {
            var H, P;
            ((H = p.sourceEvent) == null ? void 0 : H.ctrlKey) === !1 && p.type === "zoom" && ((P = m.current) == null || P.classList.add(Rt.panning));
            const y = p.transform, { x: E, y: S, k: N } = y, O = T.current;
            D({ translateX: E, translateY: S, scale: N }), we && O ? O.style.transform = `translate(${E}px, ${S}px) scale(${N})` : d.attr("transform", y);
          }
        ), L.on("end", () => {
          var p;
          z.current = !1, (p = m.current) == null || p.classList.remove(Rt.panning);
        }), f({
          scrollNodeToCenter: ({
            nodeElement: p,
            offset: y,
            scale: E,
            shouldUpdateMaxScale: S,
            maxScale: N,
            transitionDuration: O
          }) => J({
            nodeElement: p,
            offset: y,
            scale: E,
            shouldUpdateMaxScale: S,
            maxScale: N,
            transitionDuration: O,
            position: ct.CENTER_CENTER
          }),
          scrollNodeHandler: J,
          scrollContentHorizontallyCenter: at,
          fitContentToView: V,
          getCanvasState: Q
        });
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    ), ue(() => {
      c(Y);
    }, [c, Y]), F.current.call(Nn).on(
      "wheel.zoom",
      (v) => {
        var p;
        v.preventDefault();
        const d = F.current.property("__zoom").k || 1;
        if (i && !v.ctrlKey) {
          const y = {
            deltaX: v.deltaX,
            deltaY: v.deltaY
          };
          (p = M.current) == null || p.onScrollDeltaChangeHandler(y), $(y);
        } else {
          const y = d * Math.pow(2, -v.deltaY * 0.01);
          L.scaleTo(F.current, y, Et(v));
        }
      },
      { passive: !1, capture: !0 }
    );
    const $ = (v) => {
      const d = F.current.property("__zoom").k || 1;
      L.translateBy(
        F.current,
        -(v.deltaX / d),
        -(v.deltaY / d)
      );
    }, V = jt(
      function({
        duration: d = 500,
        offset: p = { x: 0, y: 0 },
        scale: y,
        maxZoomLimit: E = tt.FIT_TO_VIEW_MAX_ZOOM,
        disableVerticalCenter: S = !1
      }) {
        requestIdleCallback(
          () => {
            var re, Mt;
            if (!b.current) return;
            const N = rt(R.current), O = b.current.getBoundingClientRect(), H = F.current.property("__zoom").k || 1, P = (re = R.current) == null ? void 0 : re.getBoundingClientRect(), { width: W = 0, height: j = 0 } = P || {}, B = 1 / H, K = O.width * B, st = O.height * B, _t = j / st, zt = W / K, gt = y ?? Kt({
              value: Math.min(
                E,
                Math.min(_t, zt)
              ),
              min: n,
              max: r
            }), $t = W - K * gt, At = j - st * gt, vt = !S && _t > zt, mt = $t / 2, ne = vt ? At / 2 : 0, Ft = mt + p.x, Tt = ne + p.y, Te = Gt.translate(Ft, Tt).scale(gt);
            D({ translateX: Ft, translateY: Tt, scale: gt }), (Mt = M.current) == null || Mt.resetScrollPos(), N.transition().duration(d).call(L.transform, Te);
          },
          { timeout: Ie }
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [r, n]
    ), J = ({
      nodeElement: v,
      offset: d = { x: 0, y: 0 },
      scale: p,
      shouldUpdateMaxScale: y = !0,
      maxScale: E,
      transitionDuration: S = 300,
      position: N = ct.TOP_CENTER
    }) => {
      requestIdleCallback(
        () => {
          if (!v) return;
          const O = F.current.property("__zoom"), {
            k: H,
            x: P,
            y: W
          } = O, j = rt(R.current), K = (() => {
            const At = (mt) => E ? Math.min(E, mt) : mt;
            if (!p) return At(H);
            let vt = p;
            return y && (vt = Math.max(p, H)), At(vt);
          })(), st = R.current.getBoundingClientRect(), _t = v.getBoundingClientRect(), { updatedX: zt, updatedY: gt } = is({
            position: N,
            svgBounds: st,
            nodeBounds: _t,
            currentTranslateX: P,
            currentTranslateY: W,
            currentScale: H,
            updatedScale: K,
            customOffset: { x: d.x, y: d.y }
          }), $t = Gt.translate(zt, gt).scale(K);
          j.transition().duration(S).call(L.transform, $t);
        },
        { timeout: Ie }
      );
    }, at = ({
      offset: v = 0,
      transitionDuration: d = 300
    }) => {
      b.current && requestIdleCallback(
        () => {
          const p = F.current.property("__zoom"), { k: y, y: E } = p, S = rt(R.current), N = R.current.getBoundingClientRect(), O = b.current.getBoundingClientRect(), H = 1 / y, P = O.width * H, W = (N.width - P * y) / 2 + v;
          D({
            ...Y,
            translateX: W
          });
          const j = Gt.translate(W, E).scale(y);
          S.transition().duration(d).call(L.transform, j);
        },
        { timeout: Ie }
      );
    }, Q = () => ({
      canvasNode: rt(R.current),
      zoomNode: rt(T.current),
      currentPosition: F.current.property("__zoom"),
      d3Zoom: L
    }), et = () => {
      const v = document.body;
      if (v) {
        const d = new MouseEvent("mousedown", {
          bubbles: !0,
          cancelable: !0,
          view: window
        });
        v.dispatchEvent(d);
      }
    }, h = jt(
      function(d = !0) {
        const { x: p, y } = x.current;
        return d ? y : p;
      },
      []
    );
    return /* @__PURE__ */ q.jsxs("div", { className: Rt.container, children: [
      /* @__PURE__ */ q.jsx("div", { ref: m, className: Rt.canvasWrapper, children: we ? /* @__PURE__ */ q.jsx("div", { ref: R, className: Rt.canvas, children: /* @__PURE__ */ q.jsx("div", { ref: T, children: /* @__PURE__ */ q.jsx("div", { className: Rt.contentWrapper, children: t }) }) }) : /* @__PURE__ */ q.jsx("svg", { ref: R, className: Rt.canvas, children: /* @__PURE__ */ q.jsx("g", { ref: T, children: /* @__PURE__ */ q.jsx(
        "foreignObject",
        {
          x: tt.INITIAL_POSITION_X,
          y: tt.INITIAL_POSITION_Y,
          width: tt.DEFAULT_LAYOUT,
          height: tt.DEFAULT_LAYOUT,
          children: t
        }
      ) }) }) }),
      /* @__PURE__ */ q.jsx(
        us,
        {
          maxZoom: r,
          zoomTransform: Y,
          ...l
        }
      ),
      o && m.current && /* @__PURE__ */ q.jsx(
        gs,
        {
          ref: M,
          scale: Y.scale,
          ...u,
          verticalOffsetHeight: m.current.offsetHeight,
          horizontalOffsetWidth: m.current.offsetWidth,
          getContainerOffset: h,
          onScrollDeltaHandler: $
        }
      ),
      a.map((v, d) => {
        const {
          component: p,
          position: y = ye.BOTTOM_LEFT,
          offset: E = { x: 0, y: 0 },
          overlap: S = !0,
          className: N = ""
        } = v;
        return /* @__PURE__ */ q.jsx(
          ms,
          {
            component: p,
            position: y,
            offset: E,
            overlap: S,
            zoomState: { ...Y, minZoom: n, maxZoom: r },
            className: N
          },
          d
        );
      })
    ] });
  }
), ms = ({
  component: t,
  position: e,
  offset: n,
  overlap: r,
  zoomState: i,
  className: a
}) => {
  const o = Dn(() => {
    const l = Object.values(ye).includes(e) ? e : ye.BOTTOM_LEFT, [f, c] = l.split("-");
    return {
      [c]: n.x,
      [f]: n.y
    };
  }, [e, n]), u = xe.cloneElement(t, {
    zoomState: i
  });
  return /* @__PURE__ */ q.jsx(
    "div",
    {
      style: {
        position: "absolute",
        ...o,
        zIndex: r ? 20 : 1
      },
      className: a,
      children: u
    }
  );
};
export {
  us as Background,
  ye as COMPONENT_POSITIONS,
  ws as ReactInfiniteCanvas,
  ct as SCROLL_NODE_POSITIONS
};