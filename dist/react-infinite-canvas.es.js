(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._dotSvgContainer_64xbd_1{position:absolute;width:100%;height:100%;inset-block-start:0;inset-inline-start:0}._container_1xxyl_1{position:relative;overflow:hidden;width:100%;height:100%}._canvasWrapper_1xxyl_8{position:relative;width:100%;height:100%;overflow:hidden;background-color:var(--kf-color-bg-gray);cursor:grab;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._canvasWrapper_1xxyl_8._panning_1xxyl_21{cursor:grabbing}._canvas_1xxyl_8{position:relative;z-index:2;width:100%;height:100%}._canvas_1xxyl_8>div:first-of-type{position:absolute;inset-inline-start:0;inset-block-start:0;transition:transform .01s ease}._contentWrapper_1xxyl_39{position:absolute}._verticalScrollBar_17thb_1{position:absolute;inset-inline-end:2px;inset-block-start:0;inset-block-end:0;background:transparent}._horizontalScrollBar_17thb_9{position:absolute;inset-block-end:2px;inset-inline-start:0;inset-inline-end:0;background:transparent}._verticalScrollBar_17thb_1>div,._horizontalScrollBar_17thb_9>div{position:absolute;border-radius:50px;z-index:8;cursor:pointer}._verticalScrollBar_17thb_1>div{width:100%}._horizontalScrollBar_17thb_9>div{height:100%}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import we, { forwardRef as Mn, useRef as lt, useState as In, useImperativeHandle as Pn, useEffect as ue, useCallback as jt, Fragment as Tr, memo as Rr, useMemo as kn } from "react";
var Ie = { exports: {} }, Yt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function Cr() {
  if (un) return Yt;
  un = 1;
  var t = we, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, l, f) {
    var c, _ = {}, m = null, x = null;
    f !== void 0 && (m = "" + f), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (c in l) r.call(l, c) && !a.hasOwnProperty(c) && (_[c] = l[c]);
    if (u && u.defaultProps) for (c in l = u.defaultProps, l) _[c] === void 0 && (_[c] = l[c]);
    return { $$typeof: e, type: u, key: m, ref: x, props: _, _owner: i.current };
  }
  return Yt.Fragment = n, Yt.jsx = o, Yt.jsxs = o, Yt;
}
var Xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function Or() {
  return cn || (cn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = we, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), R = Symbol.iterator, T = "@@iterator";
    function M(s) {
      if (s === null || typeof s != "object")
        return null;
      var g = R && s[R] || s[T];
      return typeof g == "function" ? g : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(s) {
      {
        for (var g = arguments.length, w = new Array(g > 1 ? g - 1 : 0), C = 1; C < g; C++)
          w[C - 1] = arguments[C];
        U("error", s, w);
      }
    }
    function U(s, g, w) {
      {
        var C = b.ReactDebugCurrentFrame, P = C.getStackAddendum();
        P !== "" && (g += "%s", w = w.concat([P]));
        var X = w.map(function(I) {
          return String(I);
        });
        X.unshift("Warning: " + g), Function.prototype.apply.call(console[s], console, X);
      }
    }
    var D = !1, $ = !1, F = !1, k = !1, L = !1, V;
    V = Symbol.for("react.module.reference");
    function J(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === a || L || s === i || s === f || s === c || k || s === x || D || $ || F || typeof s == "object" && s !== null && (s.$$typeof === m || s.$$typeof === _ || s.$$typeof === o || s.$$typeof === u || s.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === V || s.getModuleId !== void 0));
    }
    function at(s, g, w) {
      var C = s.displayName;
      if (C)
        return C;
      var P = g.displayName || g.name || "";
      return P !== "" ? w + "(" + P + ")" : w;
    }
    function Q(s) {
      return s.displayName || "Context";
    }
    function et(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
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
            var P = s, X = P._payload, I = P._init;
            try {
              return et(I(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var h = Object.assign, v = 0, d, p, y, E, S, z, O;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function Y() {
      {
        if (v === 0) {
          d = console.log, p = console.info, y = console.warn, E = console.error, S = console.group, z = console.groupCollapsed, O = console.groupEnd;
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
              value: z
            }),
            groupEnd: h({}, s, {
              value: O
            })
          });
        }
        v < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = b.ReactCurrentDispatcher, B;
    function G(s, g, w) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (P) {
            var C = P.stack.trim().match(/\n( *(at )?)/);
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
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = q.current, q.current = null, Y();
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
`), j = A.length - 1, K = nt.length - 1; j >= 1 && K >= 0 && A[j] !== nt[K]; )
            K--;
          for (; j >= 1 && K >= 0; j--, K--)
            if (A[j] !== nt[K]) {
              if (j !== 1 || K !== 1)
                do
                  if (j--, K--, K < 0 || A[j] !== nt[K]) {
                    var ut = `
` + A[j].replace(" at new ", " at ");
                    return s.displayName && ut.includes("<anonymous>") && (ut = ut.replace("<anonymous>", s.displayName)), typeof s == "function" && _t.set(s, ut), ut;
                  }
                while (j >= 1 && K >= 0);
              break;
            }
        }
      } finally {
        st = !1, q.current = X, W(), Error.prepareStackTrace = P;
      }
      var It = s ? s.displayName || s.name : "", sn = It ? G(It) : "";
      return typeof s == "function" && _t.set(s, sn), sn;
    }
    function Lt(s, g, w) {
      return gt(s, !1);
    }
    function Nt(s) {
      var g = s.prototype;
      return !!(g && g.isReactComponent);
    }
    function vt(s, g, w) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return gt(s, Nt(s));
      if (typeof s == "string")
        return G(s);
      switch (s) {
        case f:
          return G("Suspense");
        case c:
          return G("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            return Lt(s.render);
          case _:
            return vt(s.type, g, w);
          case m: {
            var C = s, P = C._payload, X = C._init;
            try {
              return vt(X(P), g, w);
            } catch {
            }
          }
        }
      return "";
    }
    var mt = Object.prototype.hasOwnProperty, ne = {}, $t = b.ReactDebugCurrentFrame;
    function Tt(s) {
      if (s) {
        var g = s._owner, w = vt(s.type, s._source, g ? g.type : null);
        $t.setExtraStackFrame(w);
      } else
        $t.setExtraStackFrame(null);
    }
    function Se(s, g, w, C, P) {
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
            } catch (j) {
              A = j;
            }
            A && !(A instanceof Error) && (Tt(P), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", w, I, typeof A), Tt(null)), A instanceof Error && !(A.message in ne) && (ne[A.message] = !0, Tt(P), N("Failed %s type: %s", w, A.message), Tt(null));
          }
      }
    }
    var re = Array.isArray;
    function At(s) {
      return re(s);
    }
    function sr(s) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, w = g && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return w;
      }
    }
    function ur(s) {
      try {
        return Ze(s), !1;
      } catch {
        return !0;
      }
    }
    function Ze(s) {
      return "" + s;
    }
    function Be(s) {
      if (ur(s))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(s)), Ze(s);
    }
    var Ft = b.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Je, Qe, Te;
    Te = {};
    function lr(s) {
      if (mt.call(s, "ref")) {
        var g = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function fr(s) {
      if (mt.call(s, "key")) {
        var g = Object.getOwnPropertyDescriptor(s, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function hr(s, g) {
      if (typeof s.ref == "string" && Ft.current && g && Ft.current.stateNode !== g) {
        var w = et(Ft.current.type);
        Te[w] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', et(Ft.current.type), s.ref), Te[w] = !0);
      }
    }
    function dr(s, g) {
      {
        var w = function() {
          Je || (Je = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function pr(s, g) {
      {
        var w = function() {
          Qe || (Qe = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var _r = function(s, g, w, C, P, X, I) {
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
        value: P
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function gr(s, g, w, C, P) {
      {
        var X, I = {}, A = null, nt = null;
        w !== void 0 && (Be(w), A = "" + w), fr(g) && (Be(g.key), A = "" + g.key), lr(g) && (nt = g.ref, hr(g, P));
        for (X in g)
          mt.call(g, X) && !cr.hasOwnProperty(X) && (I[X] = g[X]);
        if (s && s.defaultProps) {
          var j = s.defaultProps;
          for (X in j)
            I[X] === void 0 && (I[X] = j[X]);
        }
        if (A || nt) {
          var K = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          A && dr(I, K), nt && pr(I, K);
        }
        return _r(s, A, nt, P, C, Ft.current, I);
      }
    }
    var Re = b.ReactCurrentOwner, tn = b.ReactDebugCurrentFrame;
    function Mt(s) {
      if (s) {
        var g = s._owner, w = vt(s.type, s._source, g ? g.type : null);
        tn.setExtraStackFrame(w);
      } else
        tn.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function Oe(s) {
      return typeof s == "object" && s !== null && s.$$typeof === e;
    }
    function en() {
      {
        if (Re.current) {
          var s = et(Re.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function vr(s) {
      return "";
    }
    var nn = {};
    function mr(s) {
      {
        var g = en();
        if (!g) {
          var w = typeof s == "string" ? s : s.displayName || s.name;
          w && (g = `

Check the top-level render call using <` + w + ">.");
        }
        return g;
      }
    }
    function rn(s, g) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var w = mr(g);
        if (nn[w])
          return;
        nn[w] = !0;
        var C = "";
        s && s._owner && s._owner !== Re.current && (C = " It was passed a child from " + et(s._owner.type) + "."), Mt(s), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, C), Mt(null);
      }
    }
    function on(s, g) {
      {
        if (typeof s != "object")
          return;
        if (At(s))
          for (var w = 0; w < s.length; w++) {
            var C = s[w];
            Oe(C) && rn(C, g);
          }
        else if (Oe(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var P = M(s);
          if (typeof P == "function" && P !== s.entries)
            for (var X = P.call(s), I; !(I = X.next()).done; )
              Oe(I.value) && rn(I.value, g);
        }
      }
    }
    function yr(s) {
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
          Se(w, s.props, "prop", C, s);
        } else if (g.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var P = et(g);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wr(s) {
      {
        for (var g = Object.keys(s.props), w = 0; w < g.length; w++) {
          var C = g[w];
          if (C !== "children" && C !== "key") {
            Mt(s), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), Mt(null);
            break;
          }
        }
        s.ref !== null && (Mt(s), N("Invalid attribute `ref` supplied to `React.Fragment`."), Mt(null));
      }
    }
    function an(s, g, w, C, P, X) {
      {
        var I = J(s);
        if (!I) {
          var A = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var nt = vr();
          nt ? A += nt : A += en();
          var j;
          s === null ? j = "null" : At(s) ? j = "array" : s !== void 0 && s.$$typeof === e ? (j = "<" + (et(s.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : j = typeof s, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, A);
        }
        var K = gr(s, g, w, P, X);
        if (K == null)
          return K;
        if (I) {
          var ut = g.children;
          if (ut !== void 0)
            if (C)
              if (At(ut)) {
                for (var It = 0; It < ut.length; It++)
                  on(ut[It], s);
                Object.freeze && Object.freeze(ut);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              on(ut, s);
        }
        return s === r ? wr(K) : yr(K), K;
      }
    }
    function xr(s, g, w) {
      return an(s, g, w, !0);
    }
    function br(s, g, w) {
      return an(s, g, w, !1);
    }
    var Er = br, Sr = xr;
    Xt.Fragment = r, Xt.jsx = Er, Xt.jsxs = Sr;
  }()), Xt;
}
process.env.NODE_ENV === "production" ? Ie.exports = Cr() : Ie.exports = Or();
var Z = Ie.exports, Pe = "http://www.w3.org/1999/xhtml";
const ln = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Pe,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function xe(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), ln.hasOwnProperty(e) ? { space: ln[e], local: t } : t;
}
function zr(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Pe && e.documentElement.namespaceURI === Pe ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Nr(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Dn(t) {
  var e = xe(t);
  return (e.local ? Nr : zr)(e);
}
function Ar() {
}
function Ue(t) {
  return t == null ? Ar : function() {
    return this.querySelector(t);
  };
}
function Mr(t) {
  typeof t != "function" && (t = Ue(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, u = r[i] = new Array(o), l, f, c = 0; c < o; ++c)
      (l = a[c]) && (f = t.call(l, l.__data__, c, a)) && ("__data__" in l && (f.__data__ = l.__data__), u[c] = f);
  return new ot(r, this._parents);
}
function Ir(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Pr() {
  return [];
}
function Ln(t) {
  return t == null ? Pr : function() {
    return this.querySelectorAll(t);
  };
}
function kr(t) {
  return function() {
    return Ir(t.apply(this, arguments));
  };
}
function Dr(t) {
  typeof t == "function" ? t = kr(t) : t = Ln(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], u = o.length, l, f = 0; f < u; ++f)
      (l = o[f]) && (r.push(t.call(l, l.__data__, f, o)), i.push(l));
  return new ot(r, i);
}
function $n(t) {
  return function() {
    return this.matches(t);
  };
}
function Fn(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Lr = Array.prototype.find;
function $r(t) {
  return function() {
    return Lr.call(this.children, t);
  };
}
function Fr() {
  return this.firstElementChild;
}
function Yr(t) {
  return this.select(t == null ? Fr : $r(typeof t == "function" ? t : Fn(t)));
}
var Xr = Array.prototype.filter;
function Hr() {
  return Array.from(this.children);
}
function Ur(t) {
  return function() {
    return Xr.call(this.children, t);
  };
}
function Vr(t) {
  return this.selectAll(t == null ? Hr : Ur(typeof t == "function" ? t : Fn(t)));
}
function Wr(t) {
  typeof t != "function" && (t = $n(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, u = r[i] = [], l, f = 0; f < o; ++f)
      (l = a[f]) && t.call(l, l.__data__, f, a) && u.push(l);
  return new ot(r, this._parents);
}
function Yn(t) {
  return new Array(t.length);
}
function qr() {
  return new ot(this._enter || this._groups.map(Yn), this._parents);
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
function jr(t) {
  return function() {
    return t;
  };
}
function Gr(t, e, n, r, i, a) {
  for (var o = 0, u, l = e.length, f = a.length; o < f; ++o)
    (u = e[o]) ? (u.__data__ = a[o], r[o] = u) : n[o] = new de(t, a[o]);
  for (; o < l; ++o)
    (u = e[o]) && (i[o] = u);
}
function Kr(t, e, n, r, i, a, o) {
  var u, l, f = /* @__PURE__ */ new Map(), c = e.length, _ = a.length, m = new Array(c), x;
  for (u = 0; u < c; ++u)
    (l = e[u]) && (m[u] = x = o.call(l, l.__data__, u, e) + "", f.has(x) ? i[u] = l : f.set(x, l));
  for (u = 0; u < _; ++u)
    x = o.call(t, a[u], u, a) + "", (l = f.get(x)) ? (r[u] = l, l.__data__ = a[u], f.delete(x)) : n[u] = new de(t, a[u]);
  for (u = 0; u < c; ++u)
    (l = e[u]) && f.get(m[u]) === l && (i[u] = l);
}
function Zr(t) {
  return t.__data__;
}
function Br(t, e) {
  if (!arguments.length) return Array.from(this, Zr);
  var n = e ? Kr : Gr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = jr(t));
  for (var a = i.length, o = new Array(a), u = new Array(a), l = new Array(a), f = 0; f < a; ++f) {
    var c = r[f], _ = i[f], m = _.length, x = Jr(t.call(c, c && c.__data__, f, r)), R = x.length, T = u[f] = new Array(R), M = o[f] = new Array(R), b = l[f] = new Array(m);
    n(c, _, T, M, b, x, e);
    for (var N = 0, U = 0, D, $; N < R; ++N)
      if (D = T[N]) {
        for (N >= U && (U = N + 1); !($ = M[U]) && ++U < R; ) ;
        D._next = $ || null;
      }
  }
  return o = new ot(o, r), o._enter = u, o._exit = l, o;
}
function Jr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Qr() {
  return new ot(this._exit || this._groups.map(Yn), this._parents);
}
function ti(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function ei(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), u = new Array(i), l = 0; l < o; ++l)
    for (var f = n[l], c = r[l], _ = f.length, m = u[l] = new Array(_), x, R = 0; R < _; ++R)
      (x = f[R] || c[R]) && (m[R] = x);
  for (; l < i; ++l)
    u[l] = n[l];
  return new ot(u, this._parents);
}
function ni() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function ri(t) {
  t || (t = ii);
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
function ii(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function oi() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ai() {
  return Array.from(this);
}
function si() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function ui() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function ci() {
  return !this.node();
}
function li(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, u; a < o; ++a)
      (u = i[a]) && t.call(u, u.__data__, a, i);
  return this;
}
function fi(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function hi(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function di(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function pi(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function _i(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function gi(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function vi(t, e) {
  var n = xe(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? hi : fi : typeof e == "function" ? n.local ? gi : _i : n.local ? pi : di)(n, e));
}
function Xn(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function mi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function yi(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function wi(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function xi(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? mi : typeof e == "function" ? wi : yi)(t, e, n ?? "")) : kt(this.node(), t);
}
function kt(t, e) {
  return t.style.getPropertyValue(e) || Xn(t).getComputedStyle(t, null).getPropertyValue(e);
}
function bi(t) {
  return function() {
    delete this[t];
  };
}
function Ei(t, e) {
  return function() {
    this[t] = e;
  };
}
function Si(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Ti(t, e) {
  return arguments.length > 1 ? this.each((e == null ? bi : typeof e == "function" ? Si : Ei)(t, e)) : this.node()[t];
}
function Hn(t) {
  return t.trim().split(/^|\s+/);
}
function Ve(t) {
  return t.classList || new Un(t);
}
function Un(t) {
  this._node = t, this._names = Hn(t.getAttribute("class") || "");
}
Un.prototype = {
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
function Vn(t, e) {
  for (var n = Ve(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Wn(t, e) {
  for (var n = Ve(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Ri(t) {
  return function() {
    Vn(this, t);
  };
}
function Ci(t) {
  return function() {
    Wn(this, t);
  };
}
function Oi(t, e) {
  return function() {
    (e.apply(this, arguments) ? Vn : Wn)(this, t);
  };
}
function zi(t, e) {
  var n = Hn(t + "");
  if (arguments.length < 2) {
    for (var r = Ve(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Oi : e ? Ri : Ci)(n, e));
}
function Ni() {
  this.textContent = "";
}
function Ai(t) {
  return function() {
    this.textContent = t;
  };
}
function Mi(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Ii(t) {
  return arguments.length ? this.each(t == null ? Ni : (typeof t == "function" ? Mi : Ai)(t)) : this.node().textContent;
}
function Pi() {
  this.innerHTML = "";
}
function ki(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Di(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Li(t) {
  return arguments.length ? this.each(t == null ? Pi : (typeof t == "function" ? Di : ki)(t)) : this.node().innerHTML;
}
function $i() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Fi() {
  return this.each($i);
}
function Yi() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xi() {
  return this.each(Yi);
}
function Hi(t) {
  var e = typeof t == "function" ? t : Dn(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Ui() {
  return null;
}
function Vi(t, e) {
  var n = typeof t == "function" ? t : Dn(t), r = e == null ? Ui : typeof e == "function" ? e : Ue(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Wi() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function qi() {
  return this.each(Wi);
}
function ji() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Gi() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ki(t) {
  return this.select(t ? Gi : ji);
}
function Zi(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Bi(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Ji(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Qi(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function to(t, e, n) {
  return function() {
    var r = this.__on, i, a = Bi(e);
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
function eo(t, e, n) {
  var r = Ji(t + ""), i, a = r.length, o;
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
  for (u = e ? to : Qi, i = 0; i < a; ++i) this.each(u(r[i], e, n));
  return this;
}
function qn(t, e, n) {
  var r = Xn(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function no(t, e) {
  return function() {
    return qn(this, t, e);
  };
}
function ro(t, e) {
  return function() {
    return qn(this, t, e.apply(this, arguments));
  };
}
function io(t, e) {
  return this.each((typeof e == "function" ? ro : no)(t, e));
}
function* oo() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var jn = [null];
function ot(t, e) {
  this._groups = t, this._parents = e;
}
function te() {
  return new ot([[document.documentElement]], jn);
}
function ao() {
  return this;
}
ot.prototype = te.prototype = {
  constructor: ot,
  select: Mr,
  selectAll: Dr,
  selectChild: Yr,
  selectChildren: Vr,
  filter: Wr,
  data: Br,
  enter: qr,
  exit: Qr,
  join: ti,
  merge: ei,
  selection: ao,
  order: ni,
  sort: ri,
  call: oi,
  nodes: ai,
  node: si,
  size: ui,
  empty: ci,
  each: li,
  attr: vi,
  style: xi,
  property: Ti,
  classed: zi,
  text: Ii,
  html: Li,
  raise: Fi,
  lower: Xi,
  append: Hi,
  insert: Vi,
  remove: qi,
  clone: Ki,
  datum: Zi,
  on: eo,
  dispatch: io,
  [Symbol.iterator]: oo
};
function rt(t) {
  return typeof t == "string" ? new ot([[document.querySelector(t)]], [document.documentElement]) : new ot([[t]], jn);
}
function so(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Et(t, e) {
  if (t = so(t), e === void 0 && (e = t.currentTarget), e) {
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
var uo = { value: () => {
} };
function We() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ce(n);
}
function ce(t) {
  this._ = t;
}
function co(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ce.prototype = We.prototype = {
  constructor: ce,
  on: function(t, e) {
    var n = this._, r = co(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = lo(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = fn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = fn(n[i], t.name, null);
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
function lo(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function fn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = uo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
const ke = { capture: !0, passive: !1 };
function De(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function fo(t) {
  var e = t.document.documentElement, n = rt(t).on("dragstart.drag", De, ke);
  "onselectstart" in e ? n.on("selectstart.drag", De, ke) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function ho(t, e) {
  var n = t.document.documentElement, r = rt(t).on("dragstart.drag", null);
  e && (r.on("click.drag", De, ke), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
function qe(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Gn(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function ee() {
}
var Zt = 0.7, pe = 1 / Zt, Pt = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", dt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", po = /^#([0-9a-f]{3,8})$/, _o = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), go = new RegExp(`^rgb\\(${dt},${dt},${dt}\\)$`), vo = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${Bt}\\)$`), mo = new RegExp(`^rgba\\(${dt},${dt},${dt},${Bt}\\)$`), yo = new RegExp(`^hsl\\(${Bt},${dt},${dt}\\)$`), wo = new RegExp(`^hsla\\(${Bt},${dt},${dt},${Bt}\\)$`), hn = {
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
qe(ee, Jt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: dn,
  // Deprecated! Use color.formatHex.
  formatHex: dn,
  formatHex8: xo,
  formatHsl: bo,
  formatRgb: pn,
  toString: pn
});
function dn() {
  return this.rgb().formatHex();
}
function xo() {
  return this.rgb().formatHex8();
}
function bo() {
  return Kn(this).formatHsl();
}
function pn() {
  return this.rgb().formatRgb();
}
function Jt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = po.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? _n(e) : n === 3 ? new it(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ie(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ie(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = _o.exec(t)) ? new it(e[1], e[2], e[3], 1) : (e = go.exec(t)) ? new it(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = vo.exec(t)) ? ie(e[1], e[2], e[3], e[4]) : (e = mo.exec(t)) ? ie(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = yo.exec(t)) ? mn(e[1], e[2] / 100, e[3] / 100, 1) : (e = wo.exec(t)) ? mn(e[1], e[2] / 100, e[3] / 100, e[4]) : hn.hasOwnProperty(t) ? _n(hn[t]) : t === "transparent" ? new it(NaN, NaN, NaN, 0) : null;
}
function _n(t) {
  return new it(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ie(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new it(t, e, n, r);
}
function Eo(t) {
  return t instanceof ee || (t = Jt(t)), t ? (t = t.rgb(), new it(t.r, t.g, t.b, t.opacity)) : new it();
}
function Le(t, e, n, r) {
  return arguments.length === 1 ? Eo(t) : new it(t, e, n, r ?? 1);
}
function it(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
qe(it, Le, Gn(ee, {
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
    return new it(Ct(this.r), Ct(this.g), Ct(this.b), _e(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: gn,
  // Deprecated! Use color.formatHex.
  formatHex: gn,
  formatHex8: So,
  formatRgb: vn,
  toString: vn
}));
function gn() {
  return `#${Rt(this.r)}${Rt(this.g)}${Rt(this.b)}`;
}
function So() {
  return `#${Rt(this.r)}${Rt(this.g)}${Rt(this.b)}${Rt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function vn() {
  const t = _e(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ct(this.r)}, ${Ct(this.g)}, ${Ct(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function _e(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ct(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Rt(t) {
  return t = Ct(t), (t < 16 ? "0" : "") + t.toString(16);
}
function mn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new ft(t, e, n, r);
}
function Kn(t) {
  if (t instanceof ft) return new ft(t.h, t.s, t.l, t.opacity);
  if (t instanceof ee || (t = Jt(t)), !t) return new ft();
  if (t instanceof ft) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, u = a - i, l = (a + i) / 2;
  return u ? (e === a ? o = (n - r) / u + (n < r) * 6 : n === a ? o = (r - e) / u + 2 : o = (e - n) / u + 4, u /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : u = l > 0 && l < 1 ? 0 : o, new ft(o, u, l, t.opacity);
}
function To(t, e, n, r) {
  return arguments.length === 1 ? Kn(t) : new ft(t, e, n, r ?? 1);
}
function ft(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
qe(ft, To, Gn(ee, {
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
    return new ft(yn(this.h), oe(this.s), oe(this.l), _e(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = _e(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${yn(this.h)}, ${oe(this.s) * 100}%, ${oe(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function yn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function oe(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ze(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Zn = (t) => () => t;
function Ro(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Co(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Oo(t) {
  return (t = +t) == 1 ? Bn : function(e, n) {
    return n - e ? Co(e, n, t) : Zn(isNaN(e) ? n : e);
  };
}
function Bn(t, e) {
  var n = e - t;
  return n ? Ro(t, n) : Zn(isNaN(t) ? e : t);
}
const wn = function t(e) {
  var n = Oo(e);
  function r(i, a) {
    var o = n((i = Le(i)).r, (a = Le(a)).r), u = n(i.g, a.g), l = n(i.b, a.b), f = Bn(i.opacity, a.opacity);
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
var $e = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ne = new RegExp($e.source, "g");
function zo(t) {
  return function() {
    return t;
  };
}
function No(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ao(t, e) {
  var n = $e.lastIndex = Ne.lastIndex = 0, r, i, a, o = -1, u = [], l = [];
  for (t = t + "", e = e + ""; (r = $e.exec(t)) && (i = Ne.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), u[o] ? u[o] += a : u[++o] = a), (r = r[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, l.push({ i: o, x: St(r, i) })), n = Ne.lastIndex;
  return n < e.length && (a = e.slice(n), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? l[0] ? No(l[0].x) : zo(e) : (e = l.length, function(f) {
    for (var c = 0, _; c < e; ++c) u[(_ = l[c]).i] = _.x(f);
    return u.join("");
  });
}
var xn = 180 / Math.PI, Fe = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Jn(t, e, n, r, i, a) {
  var o, u, l;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * n + e * r) && (n -= t * l, r -= e * l), (u = Math.sqrt(n * n + r * r)) && (n /= u, r /= u, l /= u), t * r < e * n && (t = -t, e = -e, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * xn,
    skewX: Math.atan(l) * xn,
    scaleX: o,
    scaleY: u
  };
}
var ae;
function Mo(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Fe : Jn(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Io(t) {
  return t == null || (ae || (ae = document.createElementNS("http://www.w3.org/2000/svg", "g")), ae.setAttribute("transform", t), !(t = ae.transform.baseVal.consolidate())) ? Fe : (t = t.matrix, Jn(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Qn(t, e, n, r) {
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
var Po = Qn(Mo, "px, ", "px)", "deg)"), ko = Qn(Io, ", ", ")", ")"), Do = 1e-12;
function bn(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Lo(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function $o(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const Fo = function t(e, n, r) {
  function i(a, o) {
    var u = a[0], l = a[1], f = a[2], c = o[0], _ = o[1], m = o[2], x = c - u, R = _ - l, T = x * x + R * R, M, b;
    if (T < Do)
      b = Math.log(m / f) / e, M = function(k) {
        return [
          u + k * x,
          l + k * R,
          f * Math.exp(e * k * b)
        ];
      };
    else {
      var N = Math.sqrt(T), U = (m * m - f * f + r * T) / (2 * f * n * N), D = (m * m - f * f - r * T) / (2 * m * n * N), $ = Math.log(Math.sqrt(U * U + 1) - U), F = Math.log(Math.sqrt(D * D + 1) - D);
      b = (F - $) / e, M = function(k) {
        var L = k * b, V = bn($), J = f / (n * N) * (V * $o(e * L + $) - Lo($));
        return [
          u + J * x,
          l + J * R,
          f * V / bn(e * L + $)
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
var Dt = 0, Wt = 0, Ht = 0, tr = 1e3, ge, qt, ve = 0, Ot = 0, be = 0, Qt = typeof performance == "object" && performance.now ? performance : Date, er = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function je() {
  return Ot || (er(Yo), Ot = Qt.now() + be);
}
function Yo() {
  Ot = 0;
}
function me() {
  this._call = this._time = this._next = null;
}
me.prototype = nr.prototype = {
  constructor: me,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? je() : +n) + (e == null ? 0 : +e), !this._next && qt !== this && (qt ? qt._next = this : ge = this, qt = this), this._call = t, this._time = n, Ye();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ye());
  }
};
function nr(t, e, n) {
  var r = new me();
  return r.restart(t, e, n), r;
}
function Xo() {
  je(), ++Dt;
  for (var t = ge, e; t; )
    (e = Ot - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Dt;
}
function En() {
  Ot = (ve = Qt.now()) + be, Dt = Wt = 0;
  try {
    Xo();
  } finally {
    Dt = 0, Uo(), Ot = 0;
  }
}
function Ho() {
  var t = Qt.now(), e = t - ve;
  e > tr && (be -= e, ve = t);
}
function Uo() {
  for (var t, e = ge, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ge = n);
  qt = t, Ye(r);
}
function Ye(t) {
  if (!Dt) {
    Wt && (Wt = clearTimeout(Wt));
    var e = t - Ot;
    e > 24 ? (t < 1 / 0 && (Wt = setTimeout(En, t - Qt.now() - be)), Ht && (Ht = clearInterval(Ht))) : (Ht || (ve = Qt.now(), Ht = setInterval(Ho, tr)), Dt = 1, er(En));
  }
}
function Sn(t, e, n) {
  var r = new me();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Vo = We("start", "end", "cancel", "interrupt"), Wo = [], rr = 0, Tn = 1, Xe = 2, le = 3, Rn = 4, He = 5, fe = 6;
function Ee(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  qo(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Vo,
    tween: Wo,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: rr
  });
}
function Ge(t, e) {
  var n = ht(t, e);
  if (n.state > rr) throw new Error("too late; already scheduled");
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
function qo(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = nr(a, 0, n.time);
  function a(f) {
    n.state = Tn, n.timer.restart(o, n.delay, n.time), n.delay <= f && o(f - n.delay);
  }
  function o(f) {
    var c, _, m, x;
    if (n.state !== Tn) return l();
    for (c in r)
      if (x = r[c], x.name === n.name) {
        if (x.state === le) return Sn(o);
        x.state === Rn ? (x.state = fe, x.timer.stop(), x.on.call("interrupt", t, t.__data__, x.index, x.group), delete r[c]) : +c < e && (x.state = fe, x.timer.stop(), x.on.call("cancel", t, t.__data__, x.index, x.group), delete r[c]);
      }
    if (Sn(function() {
      n.state === le && (n.state = Rn, n.timer.restart(u, n.delay, n.time), u(f));
    }), n.state = Xe, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Xe) {
      for (n.state = le, i = new Array(m = n.tween.length), c = 0, _ = -1; c < m; ++c)
        (x = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++_] = x);
      i.length = _ + 1;
    }
  }
  function u(f) {
    for (var c = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(l), n.state = He, 1), _ = -1, m = i.length; ++_ < m; )
      i[_].call(t, c);
    n.state === He && (n.on.call("end", t, t.__data__, n.index, n.group), l());
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
      i = r.state > Xe && r.state < He, r.state = fe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function jo(t) {
  return this.each(function() {
    he(this, t);
  });
}
function Go(t, e) {
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
function Ko(t, e, n) {
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
function Zo(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = ht(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Go : Ko)(n, t, e));
}
function Ke(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = pt(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return ht(i, r).value[e];
  };
}
function ir(t, e) {
  var n;
  return (typeof e == "number" ? St : e instanceof Jt ? wn : (n = Jt(e)) ? (e = n, wn) : Ao)(t, e);
}
function Bo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Jo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Qo(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function ta(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function ea(t, e, n) {
  var r, i, a;
  return function() {
    var o, u = n(this), l;
    return u == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = u + "", o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, u)));
  };
}
function na(t, e, n) {
  var r, i, a;
  return function() {
    var o, u = n(this), l;
    return u == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = u + "", o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, u)));
  };
}
function ra(t, e) {
  var n = xe(t), r = n === "transform" ? ko : ir;
  return this.attrTween(t, typeof e == "function" ? (n.local ? na : ea)(n, r, Ke(this, "attr." + t, e)) : e == null ? (n.local ? Jo : Bo)(n) : (n.local ? ta : Qo)(n, r, e));
}
function ia(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function oa(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function aa(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && oa(t, a)), n;
  }
  return i._value = e, i;
}
function sa(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && ia(t, a)), n;
  }
  return i._value = e, i;
}
function ua(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = xe(t);
  return this.tween(n, (r.local ? aa : sa)(r, e));
}
function ca(t, e) {
  return function() {
    Ge(this, t).delay = +e.apply(this, arguments);
  };
}
function la(t, e) {
  return e = +e, function() {
    Ge(this, t).delay = e;
  };
}
function fa(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ca : la)(e, t)) : ht(this.node(), e).delay;
}
function ha(t, e) {
  return function() {
    pt(this, t).duration = +e.apply(this, arguments);
  };
}
function da(t, e) {
  return e = +e, function() {
    pt(this, t).duration = e;
  };
}
function pa(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ha : da)(e, t)) : ht(this.node(), e).duration;
}
function _a(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    pt(this, t).ease = e;
  };
}
function ga(t) {
  var e = this._id;
  return arguments.length ? this.each(_a(e, t)) : ht(this.node(), e).ease;
}
function va(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    pt(this, t).ease = n;
  };
}
function ma(t) {
  if (typeof t != "function") throw new Error();
  return this.each(va(this._id, t));
}
function ya(t) {
  typeof t != "function" && (t = $n(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, u = r[i] = [], l, f = 0; f < o; ++f)
      (l = a[f]) && t.call(l, l.__data__, f, a) && u.push(l);
  return new bt(r, this._parents, this._name, this._id);
}
function wa(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u)
    for (var l = e[u], f = n[u], c = l.length, _ = o[u] = new Array(c), m, x = 0; x < c; ++x)
      (m = l[x] || f[x]) && (_[x] = m);
  for (; u < r; ++u)
    o[u] = e[u];
  return new bt(o, this._parents, this._name, this._id);
}
function xa(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ba(t, e, n) {
  var r, i, a = xa(e) ? Ge : pt;
  return function() {
    var o = a(this, t), u = o.on;
    u !== r && (i = (r = u).copy()).on(e, n), o.on = i;
  };
}
function Ea(t, e) {
  var n = this._id;
  return arguments.length < 2 ? ht(this.node(), n).on.on(t) : this.each(ba(n, t, e));
}
function Sa(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Ta() {
  return this.on("end.remove", Sa(this._id));
}
function Ra(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ue(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var u = r[o], l = u.length, f = a[o] = new Array(l), c, _, m = 0; m < l; ++m)
      (c = u[m]) && (_ = t.call(c, c.__data__, m, u)) && ("__data__" in c && (_.__data__ = c.__data__), f[m] = _, Ee(f[m], e, n, m, f, ht(c, n)));
  return new bt(a, this._parents, e, n);
}
function Ca(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ln(t));
  for (var r = this._groups, i = r.length, a = [], o = [], u = 0; u < i; ++u)
    for (var l = r[u], f = l.length, c, _ = 0; _ < f; ++_)
      if (c = l[_]) {
        for (var m = t.call(c, c.__data__, _, l), x, R = ht(c, n), T = 0, M = m.length; T < M; ++T)
          (x = m[T]) && Ee(x, e, n, T, m, R);
        a.push(m), o.push(c);
      }
  return new bt(a, o, e, n);
}
var Oa = te.prototype.constructor;
function za() {
  return new Oa(this._groups, this._parents);
}
function Na(t, e) {
  var n, r, i;
  return function() {
    var a = kt(this, t), o = (this.style.removeProperty(t), kt(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function or(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Aa(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = kt(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Ma(t, e, n) {
  var r, i, a;
  return function() {
    var o = kt(this, t), u = n(this), l = u + "";
    return u == null && (l = u = (this.style.removeProperty(t), kt(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, u));
  };
}
function Ia(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, u;
  return function() {
    var l = pt(this, t), f = l.on, c = l.value[a] == null ? u || (u = or(e)) : void 0;
    (f !== n || i !== c) && (r = (n = f).copy()).on(o, i = c), l.on = r;
  };
}
function Pa(t, e, n) {
  var r = (t += "") == "transform" ? Po : ir;
  return e == null ? this.styleTween(t, Na(t, r)).on("end.style." + t, or(t)) : typeof e == "function" ? this.styleTween(t, Ma(t, r, Ke(this, "style." + t, e))).each(Ia(this._id, t)) : this.styleTween(t, Aa(t, r, e), n).on("end.style." + t, null);
}
function ka(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Da(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && ka(t, o, n)), r;
  }
  return a._value = e, a;
}
function La(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Da(t, e, n ?? ""));
}
function $a(t) {
  return function() {
    this.textContent = t;
  };
}
function Fa(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Ya(t) {
  return this.tween("text", typeof t == "function" ? Fa(Ke(this, "text", t)) : $a(t == null ? "" : t + ""));
}
function Xa(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Ha(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Xa(i)), e;
  }
  return r._value = t, r;
}
function Ua(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Ha(t));
}
function Va() {
  for (var t = this._name, e = this._id, n = ar(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], u = o.length, l, f = 0; f < u; ++f)
      if (l = o[f]) {
        var c = ht(l, e);
        Ee(l, t, n, f, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new bt(r, this._parents, t, n);
}
function Wa() {
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
var qa = 0;
function bt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function ar() {
  return ++qa;
}
var wt = te.prototype;
bt.prototype = {
  constructor: bt,
  select: Ra,
  selectAll: Ca,
  selectChild: wt.selectChild,
  selectChildren: wt.selectChildren,
  filter: ya,
  merge: wa,
  selection: za,
  transition: Va,
  call: wt.call,
  nodes: wt.nodes,
  node: wt.node,
  size: wt.size,
  empty: wt.empty,
  each: wt.each,
  on: Ea,
  attr: ra,
  attrTween: ua,
  style: Pa,
  styleTween: La,
  text: Ya,
  textTween: Ua,
  remove: Ta,
  tween: Zo,
  delay: fa,
  duration: pa,
  ease: ga,
  easeVarying: ma,
  end: Wa,
  [Symbol.iterator]: wt[Symbol.iterator]
};
function ja(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ga = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ja
};
function Ka(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Za(t) {
  var e, n;
  t instanceof bt ? (e = t._id, t = t._name) : (e = ar(), (n = Ga).time = je(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], u = o.length, l, f = 0; f < u; ++f)
      (l = o[f]) && Ee(l, t, e, f, o, n || Ka(l, e));
  return new bt(r, this._parents, t, e);
}
te.prototype.interrupt = jo;
te.prototype.transition = Za;
const se = (t) => () => t;
function Ba(t, {
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
function Ae(t) {
  t.stopImmediatePropagation();
}
function Ut(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ja(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function Qa() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Cn() {
  return this.__zoom || Gt;
}
function ts(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function es() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ns(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], i = t.invertX(e[1][0]) - n[1][0], a = t.invertY(e[0][1]) - n[0][1], o = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o)
  );
}
function On() {
  var t = Ja, e = Qa, n = ns, r = ts, i = es, a = [0, 1 / 0], o = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, l = Fo, f = We("start", "zoom", "end"), c, _, m, x = 500, R = 150, T = 0, M = 10;
  function b(h) {
    h.property("__zoom", Cn).on("wheel.zoom", L, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", J).filter(i).on("touchstart.zoom", at).on("touchmove.zoom", Q).on("touchend.zoom touchcancel.zoom", et).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(h, v, d, p) {
    var y = h.selection ? h.selection() : h;
    y.property("__zoom", Cn), h !== y ? $(h, v, d, p) : y.interrupt().each(function() {
      F(this, arguments).event(p).start().zoom(null, typeof v == "function" ? v.apply(this, arguments) : v).end();
    });
  }, b.scaleBy = function(h, v, d, p) {
    b.scaleTo(h, function() {
      var y = this.__zoom.k, E = typeof v == "function" ? v.apply(this, arguments) : v;
      return y * E;
    }, d, p);
  }, b.scaleTo = function(h, v, d, p) {
    b.transform(h, function() {
      var y = e.apply(this, arguments), E = this.__zoom, S = d == null ? D(y) : typeof d == "function" ? d.apply(this, arguments) : d, z = E.invert(S), O = typeof v == "function" ? v.apply(this, arguments) : v;
      return n(U(N(E, O), S, z), y, o);
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
      var E = e.apply(this, arguments), S = this.__zoom, z = p == null ? D(E) : typeof p == "function" ? p.apply(this, arguments) : p;
      return n(Gt.translate(z[0], z[1]).scale(S.k).translate(
        typeof v == "function" ? -v.apply(this, arguments) : -v,
        typeof d == "function" ? -d.apply(this, arguments) : -d
      ), E, o);
    }, p, y);
  };
  function N(h, v) {
    return v = Math.max(a[0], Math.min(a[1], v)), v === h.k ? h : new xt(v, h.x, h.y);
  }
  function U(h, v, d) {
    var p = v[0] - d[0] * h.k, y = v[1] - d[1] * h.k;
    return p === h.x && y === h.y ? h : new xt(h.k, p, y);
  }
  function D(h) {
    return [(+h[0][0] + +h[1][0]) / 2, (+h[0][1] + +h[1][1]) / 2];
  }
  function $(h, v, d, p) {
    h.on("start.zoom", function() {
      F(this, arguments).event(p).start();
    }).on("interrupt.zoom end.zoom", function() {
      F(this, arguments).event(p).end();
    }).tween("zoom", function() {
      var y = this, E = arguments, S = F(y, E).event(p), z = e.apply(y, E), O = d == null ? D(z) : typeof d == "function" ? d.apply(y, E) : d, H = Math.max(z[1][0] - z[0][0], z[1][1] - z[0][1]), Y = y.__zoom, W = typeof v == "function" ? v.apply(y, E) : v, q = l(Y.invert(O).concat(H / Y.k), W.invert(O).concat(H / W.k));
      return function(B) {
        if (B === 1) B = W;
        else {
          var G = q(B), st = H / G[2];
          B = new xt(st, O[0] - G[0] * st, O[1] - G[1] * st);
        }
        S.zoom(null, B);
      };
    });
  }
  function F(h, v, d) {
    return !d && h.__zooming || new k(h, v);
  }
  function k(h, v) {
    this.that = h, this.args = v, this.active = 0, this.sourceEvent = null, this.extent = e.apply(h, v), this.taps = 0;
  }
  k.prototype = {
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
        new Ba(h, {
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
  function L(h, ...v) {
    if (!t.apply(this, arguments)) return;
    var d = F(this, v).event(h), p = this.__zoom, y = Math.max(a[0], Math.min(a[1], p.k * Math.pow(2, r.apply(this, arguments)))), E = Et(h);
    if (d.wheel)
      (d.mouse[0][0] !== E[0] || d.mouse[0][1] !== E[1]) && (d.mouse[1] = p.invert(d.mouse[0] = E)), clearTimeout(d.wheel);
    else {
      if (p.k === y) return;
      d.mouse = [E, p.invert(E)], he(this), d.start();
    }
    Ut(h), d.wheel = setTimeout(S, R), d.zoom("mouse", n(U(N(p, y), d.mouse[0], d.mouse[1]), d.extent, o));
    function S() {
      d.wheel = null, d.end();
    }
  }
  function V(h, ...v) {
    if (m || !t.apply(this, arguments)) return;
    var d = h.currentTarget, p = F(this, v, !0).event(h), y = rt(h.view).on("mousemove.zoom", O, !0).on("mouseup.zoom", H, !0), E = Et(h, d), S = h.clientX, z = h.clientY;
    fo(h.view), Ae(h), p.mouse = [E, this.__zoom.invert(E)], he(this), p.start();
    function O(Y) {
      if (Ut(Y), !p.moved) {
        var W = Y.clientX - S, q = Y.clientY - z;
        p.moved = W * W + q * q > T;
      }
      p.event(Y).zoom("mouse", n(U(p.that.__zoom, p.mouse[0] = Et(Y, d), p.mouse[1]), p.extent, o));
    }
    function H(Y) {
      y.on("mousemove.zoom mouseup.zoom", null), ho(Y.view, p.moved), Ut(Y), p.event(Y).end();
    }
  }
  function J(h, ...v) {
    if (t.apply(this, arguments)) {
      var d = this.__zoom, p = Et(h.changedTouches ? h.changedTouches[0] : h, this), y = d.invert(p), E = d.k * (h.shiftKey ? 0.5 : 2), S = n(U(N(d, E), p, y), e.apply(this, v), o);
      Ut(h), u > 0 ? rt(this).transition().duration(u).call($, S, p, h) : rt(this).call(b.transform, S, p, h);
    }
  }
  function at(h, ...v) {
    if (t.apply(this, arguments)) {
      var d = h.touches, p = d.length, y = F(this, v, h.changedTouches.length === p).event(h), E, S, z, O;
      for (Ae(h), S = 0; S < p; ++S)
        z = d[S], O = Et(z, this), O = [O, this.__zoom.invert(O), z.identifier], y.touch0 ? !y.touch1 && y.touch0[2] !== O[2] && (y.touch1 = O, y.taps = 0) : (y.touch0 = O, E = !0, y.taps = 1 + !!c);
      c && (c = clearTimeout(c)), E && (y.taps < 2 && (_ = O[0], c = setTimeout(function() {
        c = null;
      }, x)), he(this), y.start());
    }
  }
  function Q(h, ...v) {
    if (this.__zooming) {
      var d = F(this, v).event(h), p = h.changedTouches, y = p.length, E, S, z, O;
      for (Ut(h), E = 0; E < y; ++E)
        S = p[E], z = Et(S, this), d.touch0 && d.touch0[2] === S.identifier ? d.touch0[0] = z : d.touch1 && d.touch1[2] === S.identifier && (d.touch1[0] = z);
      if (S = d.that.__zoom, d.touch1) {
        var H = d.touch0[0], Y = d.touch0[1], W = d.touch1[0], q = d.touch1[1], B = (B = W[0] - H[0]) * B + (B = W[1] - H[1]) * B, G = (G = q[0] - Y[0]) * G + (G = q[1] - Y[1]) * G;
        S = N(S, Math.sqrt(B / G)), z = [(H[0] + W[0]) / 2, (H[1] + W[1]) / 2], O = [(Y[0] + q[0]) / 2, (Y[1] + q[1]) / 2];
      } else if (d.touch0) z = d.touch0[0], O = d.touch0[1];
      else return;
      d.zoom("touch", n(U(S, z, O), d.extent, o));
    }
  }
  function et(h, ...v) {
    if (this.__zooming) {
      var d = F(this, v).event(h), p = h.changedTouches, y = p.length, E, S;
      for (Ae(h), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, x), E = 0; E < y; ++E)
        S = p[E], d.touch0 && d.touch0[2] === S.identifier ? delete d.touch0 : d.touch1 && d.touch1[2] === S.identifier && delete d.touch1;
      if (d.touch1 && !d.touch0 && (d.touch0 = d.touch1, delete d.touch1), d.touch0) d.touch0[1] = this.__zoom.invert(d.touch0[0]);
      else if (d.end(), d.taps === 2 && (S = Et(S, this), Math.hypot(_[0] - S[0], _[1] - S[1]) < M)) {
        var z = rt(this).on("dblclick.zoom");
        z && z.apply(this, arguments);
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
}) => Math.min(Math.max(t, e), n), rs = ({
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
}, is = ({
  isVertical: t,
  state: e,
  scrollDelta: n
}) => {
  const r = t ? e.verticalPos : e.horizontalPos, i = t ? e.verticalSize : e.horizontalSize, a = t ? e.verticalSizeDecrease : e.horizontalSizeDecrease, o = t ? n.deltaY : n.deltaX;
  return { scrollPos: r, scrollSize: i, scrollSizeDecrease: a, deltaValue: o };
}, Nn = ({
  isVertical: t = !0,
  state: e,
  scrollDelta: n,
  scrollLength: r
}) => {
  const { scrollPos: i, scrollSize: a, scrollSizeDecrease: o, deltaValue: u } = is({
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
}, os = "_dotSvgContainer_64xbd_1", as = {
  dotSvgContainer: os
}, ss = ({
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
  return /* @__PURE__ */ Z.jsxs("svg", { className: `${o} ${as.dotSvgContainer}`, children: [
    /* @__PURE__ */ Z.jsx(
      "pattern",
      {
        id: b,
        x: _ % R,
        y: m % R,
        width: R,
        height: R,
        patternUnits: "userSpaceOnUse",
        patternTransform: `translate(-${T},-${T})`,
        children: /* @__PURE__ */ Z.jsx(
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
    /* @__PURE__ */ Z.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${b})` })
  ] });
}, us = "_container_1xxyl_1", cs = "_canvasWrapper_1xxyl_8", ls = "_panning_1xxyl_21", fs = "_canvas_1xxyl_8", hs = "_contentWrapper_1xxyl_39", Vt = {
  container: us,
  canvasWrapper: cs,
  panning: ls,
  canvas: fs,
  contentWrapper: hs
}, ds = "_verticalScrollBar_17thb_1", ps = "_horizontalScrollBar_17thb_9", An = {
  verticalScrollBar: ds,
  horizontalScrollBar: ps
}, _s = Mn(
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
    }), [M, b] = In({
      scale: t,
      horizontalSize: m,
      horizontalPos: e ? e.x : (u ?? 0) / tt.SCROLL_POS_RATIO,
      horizontalSizeDecrease: 0,
      verticalSize: _,
      verticalPos: e ? e.y : (o ?? 0) / tt.SCROLL_POS_RATIO,
      verticalSizeDecrease: 0
    });
    Pn(c, () => ({
      resetScrollPos: () => {
        b((k) => ({
          ...k,
          horizontalPos: (u ?? 0) / tt.SCROLL_POS_RATIO,
          verticalPos: (o ?? 0) / tt.SCROLL_POS_RATIO,
          verticalSizeDecrease: 0,
          horizontalSizeDecrease: 0
        }));
      },
      onScrollDeltaChangeHandler: N,
      onMouseUp: D
    })), ue(
      function() {
        b((L) => {
          let V;
          const [J, at] = zn(t), Q = t / L.scale || 0;
          return t < L.scale ? V = {
            horizontalPos: L.horizontalPos - Q,
            verticalPos: L.verticalPos - Q
          } : V = {
            horizontalPos: L.horizontalPos + Q,
            verticalPos: L.verticalPos + Q
          }, {
            ...L,
            scale: t,
            horizontalSize: at,
            verticalSize: J,
            ...V
          };
        });
      },
      [t]
    );
    function N(k) {
      T.current.isDragging || b((L) => {
        const [V, J] = Nn({
          state: L,
          scrollDelta: k,
          scrollLength: o
        }), [at, Q] = Nn({
          isVertical: !1,
          state: L,
          scrollDelta: k,
          scrollLength: u
        });
        return {
          ...L,
          horizontalPos: at,
          horizontalSizeDecrease: Q,
          verticalPos: V,
          verticalSizeDecrease: J
        };
      });
    }
    const U = jt(
      function(L, V) {
        if (!T.current.isDragging) return;
        L.stopPropagation();
        const { movementX: J, movementY: at, clientX: Q, clientY: et, offsetX: h, offsetY: v } = L;
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
          const [H, Y, W, q] = y(O);
          return {
            ...O,
            [H]: Kt({
              value: p,
              min: q,
              max: W - Y
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
    ), D = jt(
      function() {
        T.current.isDragging = !1, T.current.initialOffset = 0, window.removeEventListener(
          "mousemove",
          (L) => U(L, T.current.vertical)
        ), window.removeEventListener("mouseup", D);
      },
      [U]
    ), $ = jt(
      function() {
        window.addEventListener(
          "mousemove",
          (L) => U(L, T.current.vertical)
        ), window.addEventListener("mouseup", D);
      },
      [U, D]
    ), F = (k) => {
      k.stopPropagation();
    };
    return /* @__PURE__ */ Z.jsxs(Tr, { children: [
      /* @__PURE__ */ Z.jsx(
        "div",
        {
          className: An.verticalScrollBar,
          style: { width: i },
          ref: x,
          children: /* @__PURE__ */ Z.jsx(
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
              onMouseDownCapture: (k) => {
                k.stopPropagation(), T.current = {
                  ...T.current,
                  isDragging: !0,
                  vertical: !0
                }, $();
              },
              onDragEnterCapture: F,
              onDragCapture: F,
              onDragEndCapture: F
            }
          )
        }
      ),
      /* @__PURE__ */ Z.jsx(
        "div",
        {
          className: An.horizontalScrollBar,
          ref: R,
          style: { height: i },
          children: /* @__PURE__ */ Z.jsx(
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
              onMouseDownCapture: (k) => {
                k.stopPropagation(), T.current = {
                  ...T.current,
                  isDragging: !0,
                  vertical: !1
                }, $();
              },
              onDragEnterCapture: F,
              onDragCapture: F,
              onDragEndCapture: F
            }
          )
        }
      )
    ] });
  }
), Me = 300, ys = Mn(({ children: t, ...e }, n) => {
  const r = we.useRef(null);
  return /* @__PURE__ */ Z.jsx(gs, { innerRef: n, ...e, children: /* @__PURE__ */ Z.jsx(
    "div",
    {
      ref: r,
      style: { width: "max-content", height: "max-content" },
      children: t
    }
  ) });
}), gs = Rr(
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
    const m = lt(null), x = lt(null), R = lt(null), T = lt(null), M = lt(null), b = t.ref, N = lt(null), U = lt(null), D = kn(() => On().scaleExtent([n, r]), [r, n]), $ = lt(rt(R.current).call(D)), [F, k] = In({
      translateX: 0,
      translateY: 0,
      scale: 1
    });
    Pn(e, () => ({
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
        $.current = rt(R.current).call(D);
        const d = rt(T.current);
        x.current = m.current ? m.current.getBoundingClientRect() : {}, D.filter((p) => {
          if (p.type === "mousedown" && !N.current && (N.current = !0, et()), !U.current) {
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
            var O, H;
            ((O = p.sourceEvent) == null ? void 0 : O.ctrlKey) === !1 && p.type === "zoom" && ((H = m.current) == null || H.classList.add(Vt.panning));
            const y = p.transform, { x: E, y: S, k: z } = y;
            T.current, k({ translateX: E, translateY: S, scale: z }), d.attr("transform", y);
          }
        ), D.on("end", () => {
          var p;
          N.current = !1, (p = m.current) == null || p.classList.remove(Vt.panning);
        }), f({
          scrollNodeToCenter: ({
            nodeElement: p,
            offset: y,
            scale: E,
            shouldUpdateMaxScale: S,
            maxScale: z,
            transitionDuration: O
          }) => J({
            nodeElement: p,
            offset: y,
            scale: E,
            shouldUpdateMaxScale: S,
            maxScale: z,
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
      c(F);
    }, [c, F]), $.current.call(On).on(
      "wheel.zoom",
      (v) => {
        var p;
        v.preventDefault();
        const d = $.current.property("__zoom").k || 1;
        if (i && !v.ctrlKey) {
          const y = {
            deltaX: v.deltaX,
            deltaY: v.deltaY
          };
          (p = M.current) == null || p.onScrollDeltaChangeHandler(y), L(y);
        } else {
          const y = d * Math.pow(2, -v.deltaY * 0.01);
          D.scaleTo($.current, y, Et(v));
        }
      },
      { passive: !1, capture: !0 }
    );
    const L = (v) => {
      const d = $.current.property("__zoom").k || 1;
      D.translateBy(
        $.current,
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
            var re, At;
            if (!b.current) return;
            const z = rt(R.current), O = b.current.getBoundingClientRect(), H = $.current.property("__zoom").k || 1, Y = (re = R.current) == null ? void 0 : re.getBoundingClientRect(), { width: W = 0, height: q = 0 } = Y || {}, B = 1 / H, G = O.width * B, st = O.height * B, _t = q / st, zt = W / G, gt = y ?? Kt({
              value: Math.min(
                E,
                Math.min(_t, zt)
              ),
              min: n,
              max: r
            }), Lt = W - G * gt, Nt = q - st * gt, vt = !S && _t > zt, mt = Lt / 2, ne = vt ? Nt / 2 : 0, $t = mt + p.x, Tt = ne + p.y, Se = Gt.translate($t, Tt).scale(gt);
            k({ translateX: $t, translateY: Tt, scale: gt }), (At = M.current) == null || At.resetScrollPos(), z.transition().duration(d).call(D.transform, Se);
          },
          { timeout: Me }
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
      position: z = ct.TOP_CENTER
    }) => {
      requestIdleCallback(
        () => {
          if (!v) return;
          const O = $.current.property("__zoom"), {
            k: H,
            x: Y,
            y: W
          } = O, q = rt(R.current), G = (() => {
            const Nt = (mt) => E ? Math.min(E, mt) : mt;
            if (!p) return Nt(H);
            let vt = p;
            return y && (vt = Math.max(p, H)), Nt(vt);
          })(), st = R.current.getBoundingClientRect(), _t = v.getBoundingClientRect(), { updatedX: zt, updatedY: gt } = rs({
            position: z,
            svgBounds: st,
            nodeBounds: _t,
            currentTranslateX: Y,
            currentTranslateY: W,
            currentScale: H,
            updatedScale: G,
            customOffset: { x: d.x, y: d.y }
          }), Lt = Gt.translate(zt, gt).scale(G);
          q.transition().duration(S).call(D.transform, Lt);
        },
        { timeout: Me }
      );
    }, at = ({
      offset: v = 0,
      transitionDuration: d = 300
    }) => {
      b.current && requestIdleCallback(
        () => {
          const p = $.current.property("__zoom"), { k: y, y: E } = p, S = rt(R.current), z = R.current.getBoundingClientRect(), O = b.current.getBoundingClientRect(), H = 1 / y, Y = O.width * H, W = (z.width - Y * y) / 2 + v;
          k({
            ...F,
            translateX: W
          });
          const q = Gt.translate(W, E).scale(y);
          S.transition().duration(d).call(D.transform, q);
        },
        { timeout: Me }
      );
    }, Q = () => ({
      canvasNode: rt(R.current),
      zoomNode: rt(T.current),
      currentPosition: $.current.property("__zoom"),
      d3Zoom: D
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
    return /* @__PURE__ */ Z.jsxs("div", { className: Vt.container, children: [
      /* @__PURE__ */ Z.jsx("div", { ref: m, className: Vt.canvasWrapper, children: /* @__PURE__ */ Z.jsx("svg", { ref: R, className: Vt.canvas, children: /* @__PURE__ */ Z.jsx("g", { ref: T, children: /* @__PURE__ */ Z.jsx(
        "foreignObject",
        {
          x: tt.INITIAL_POSITION_X,
          y: tt.INITIAL_POSITION_Y,
          width: tt.DEFAULT_LAYOUT,
          height: tt.DEFAULT_LAYOUT,
          children: t
        }
      ) }) }) }),
      /* @__PURE__ */ Z.jsx(
        ss,
        {
          maxZoom: r,
          zoomTransform: F,
          ...l
        }
      ),
      o && m.current && /* @__PURE__ */ Z.jsx(
        _s,
        {
          ref: M,
          scale: F.scale,
          ...u,
          verticalOffsetHeight: m.current.offsetHeight,
          horizontalOffsetWidth: m.current.offsetWidth,
          getContainerOffset: h,
          onScrollDeltaHandler: L
        }
      ),
      a.map((v, d) => {
        const {
          component: p,
          position: y = ye.BOTTOM_LEFT,
          offset: E = { x: 0, y: 0 },
          overlap: S = !0,
          className: z = ""
        } = v;
        return /* @__PURE__ */ Z.jsx(
          vs,
          {
            component: p,
            position: y,
            offset: E,
            overlap: S,
            zoomState: { ...F, minZoom: n, maxZoom: r },
            className: z
          },
          d
        );
      })
    ] });
  }
), vs = ({
  component: t,
  position: e,
  offset: n,
  overlap: r,
  zoomState: i,
  className: a
}) => {
  const o = kn(() => {
    const l = Object.values(ye).includes(e) ? e : ye.BOTTOM_LEFT, [f, c] = l.split("-");
    return {
      [c]: n.x,
      [f]: n.y
    };
  }, [e, n]), u = we.cloneElement(t, {
    zoomState: i
  });
  return /* @__PURE__ */ Z.jsx(
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
  ss as Background,
  ye as COMPONENT_POSITIONS,
  ys as ReactInfiniteCanvas,
  ct as SCROLL_NODE_POSITIONS
};
