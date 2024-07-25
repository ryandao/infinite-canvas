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
  function o(u, l, h) {
    var c, p = {}, g = null, w = null;
    h !== void 0 && (g = "" + h), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (c in l) r.call(l, c) && !a.hasOwnProperty(c) && (p[c] = l[c]);
    if (u && u.defaultProps) for (c in l = u.defaultProps, l) p[c] === void 0 && (p[c] = l[c]);
    return { $$typeof: e, type: u, key: g, ref: w, props: p, _owner: i.current };
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
    var t = xe, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), R = Symbol.iterator, T = "@@iterator";
    function M(s) {
      if (s === null || typeof s != "object")
        return null;
      var _ = R && s[R] || s[T];
      return typeof _ == "function" ? _ : null;
    }
    var x = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function z(s) {
      {
        for (var _ = arguments.length, y = new Array(_ > 1 ? _ - 1 : 0), C = 1; C < _; C++)
          y[C - 1] = arguments[C];
        H("error", s, y);
      }
    }
    function H(s, _, y) {
      {
        var C = x.ReactDebugCurrentFrame, P = C.getStackAddendum();
        P !== "" && (_ += "%s", y = y.concat([P]));
        var X = y.map(function(I) {
          return String(I);
        });
        X.unshift("Warning: " + _), Function.prototype.apply.call(console[s], console, X);
      }
    }
    var L = !1, F = !1, Y = !1, k = !1, $ = !1, U;
    U = Symbol.for("react.module.reference");
    function J(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === a || $ || s === i || s === h || s === c || k || s === w || L || F || Y || typeof s == "object" && s !== null && (s.$$typeof === g || s.$$typeof === p || s.$$typeof === o || s.$$typeof === u || s.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === U || s.getModuleId !== void 0));
    }
    function at(s, _, y) {
      var C = s.displayName;
      if (C)
        return C;
      var P = _.displayName || _.name || "";
      return P !== "" ? y + "(" + P + ")" : y;
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
        case h:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            var _ = s;
            return Q(_) + ".Consumer";
          case o:
            var y = s;
            return Q(y._context) + ".Provider";
          case l:
            return at(s, s.render, "ForwardRef");
          case p:
            var C = s.displayName || null;
            return C !== null ? C : et(s.type) || "Memo";
          case g: {
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
    var f = Object.assign, m = 0, d, v, b, E, S, N, O;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function D() {
      {
        if (m === 0) {
          d = console.log, v = console.info, b = console.warn, E = console.error, S = console.group, N = console.groupCollapsed, O = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: V,
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
        m++;
      }
    }
    function q() {
      {
        if (m--, m === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: f({}, s, {
              value: d
            }),
            info: f({}, s, {
              value: v
            }),
            warn: f({}, s, {
              value: b
            }),
            error: f({}, s, {
              value: E
            }),
            group: f({}, s, {
              value: S
            }),
            groupCollapsed: f({}, s, {
              value: N
            }),
            groupEnd: f({}, s, {
              value: O
            })
          });
        }
        m < 0 && z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = x.ReactCurrentDispatcher, j;
    function B(s, _, y) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (P) {
            var C = P.stack.trim().match(/\n( *(at )?)/);
            j = C && C[1] || "";
          }
        return `
` + j + s;
      }
    }
    var st = !1, _t;
    {
      var xt = typeof WeakMap == "function" ? WeakMap : Map;
      _t = new xt();
    }
    function Ot(s, _) {
      if (!s || st)
        return "";
      {
        var y = _t.get(s);
        if (y !== void 0)
          return y;
      }
      var C;
      st = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = Z.current, Z.current = null, D();
      try {
        if (_) {
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
            } catch (vt) {
              C = vt;
            }
            Reflect.construct(s, [], I);
          } else {
            try {
              I.call();
            } catch (vt) {
              C = vt;
            }
            s.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (vt) {
            C = vt;
          }
          s();
        }
      } catch (vt) {
        if (vt && C && typeof vt.stack == "string") {
          for (var A = vt.stack.split(`
`), nt = C.stack.split(`
`), G = A.length - 1, K = nt.length - 1; G >= 1 && K >= 0 && A[G] !== nt[K]; )
            K--;
          for (; G >= 1 && K >= 0; G--, K--)
            if (A[G] !== nt[K]) {
              if (G !== 1 || K !== 1)
                do
                  if (G--, K--, K < 0 || A[G] !== nt[K]) {
                    var ut = `
` + A[G].replace(" at new ", " at ");
                    return s.displayName && ut.includes("<anonymous>") && (ut = ut.replace("<anonymous>", s.displayName)), typeof s == "function" && _t.set(s, ut), ut;
                  }
                while (G >= 1 && K >= 0);
              break;
            }
        }
      } finally {
        st = !1, Z.current = X, q(), Error.prepareStackTrace = P;
      }
      var Pt = s ? s.displayName || s.name : "", un = Pt ? B(Pt) : "";
      return typeof s == "function" && _t.set(s, un), un;
    }
    function Nt(s, _, y) {
      return Ot(s, !1);
    }
    function zt(s) {
      var _ = s.prototype;
      return !!(_ && _.isReactComponent);
    }
    function gt(s, _, y) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return Ot(s, zt(s));
      if (typeof s == "string")
        return B(s);
      switch (s) {
        case h:
          return B("Suspense");
        case c:
          return B("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            return Nt(s.render);
          case p:
            return gt(s.type, _, y);
          case g: {
            var C = s, P = C._payload, X = C._init;
            try {
              return gt(X(P), _, y);
            } catch {
            }
          }
        }
      return "";
    }
    var At = Object.prototype.hasOwnProperty, $t = {}, Ft = x.ReactDebugCurrentFrame;
    function Mt(s) {
      if (s) {
        var _ = s._owner, y = gt(s.type, s._source, _ ? _.type : null);
        Ft.setExtraStackFrame(y);
      } else
        Ft.setExtraStackFrame(null);
    }
    function ne(s, _, y, C, P) {
      {
        var X = Function.call.bind(At);
        for (var I in s)
          if (X(s, I)) {
            var A = void 0;
            try {
              if (typeof s[I] != "function") {
                var nt = Error((C || "React class") + ": " + y + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw nt.name = "Invariant Violation", nt;
              }
              A = s[I](_, I, C, y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              A = G;
            }
            A && !(A instanceof Error) && (Mt(P), z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", y, I, typeof A), Mt(null)), A instanceof Error && !(A.message in $t) && ($t[A.message] = !0, Mt(P), z("Failed %s type: %s", y, A.message), Mt(null));
          }
      }
    }
    var re = Array.isArray;
    function Te(s) {
      return re(s);
    }
    function ur(s) {
      {
        var _ = typeof Symbol == "function" && Symbol.toStringTag, y = _ && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return y;
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
    var Yt = x.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, tn, Re;
    Re = {};
    function fr(s) {
      if (At.call(s, "ref")) {
        var _ = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function hr(s) {
      if (At.call(s, "key")) {
        var _ = Object.getOwnPropertyDescriptor(s, "key").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function dr(s, _) {
      if (typeof s.ref == "string" && Yt.current && _ && Yt.current.stateNode !== _) {
        var y = et(Yt.current.type);
        Re[y] || (z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', et(Yt.current.type), s.ref), Re[y] = !0);
      }
    }
    function pr(s, _) {
      {
        var y = function() {
          Qe || (Qe = !0, z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        y.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: y,
          configurable: !0
        });
      }
    }
    function _r(s, _) {
      {
        var y = function() {
          tn || (tn = !0, z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        y.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: y,
          configurable: !0
        });
      }
    }
    var gr = function(s, _, y, C, P, X, I) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: s,
        key: _,
        ref: y,
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
    function vr(s, _, y, C, P) {
      {
        var X, I = {}, A = null, nt = null;
        y !== void 0 && (Je(y), A = "" + y), hr(_) && (Je(_.key), A = "" + _.key), fr(_) && (nt = _.ref, dr(_, P));
        for (X in _)
          At.call(_, X) && !lr.hasOwnProperty(X) && (I[X] = _[X]);
        if (s && s.defaultProps) {
          var G = s.defaultProps;
          for (X in G)
            I[X] === void 0 && (I[X] = G[X]);
        }
        if (A || nt) {
          var K = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          A && pr(I, K), nt && _r(I, K);
        }
        return gr(s, A, nt, P, C, Yt.current, I);
      }
    }
    var Ce = x.ReactCurrentOwner, en = x.ReactDebugCurrentFrame;
    function It(s) {
      if (s) {
        var _ = s._owner, y = gt(s.type, s._source, _ ? _.type : null);
        en.setExtraStackFrame(y);
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
        var _ = nn();
        if (!_) {
          var y = typeof s == "string" ? s : s.displayName || s.name;
          y && (_ = `

Check the top-level render call using <` + y + ">.");
        }
        return _;
      }
    }
    function on(s, _) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var y = yr(_);
        if (rn[y])
          return;
        rn[y] = !0;
        var C = "";
        s && s._owner && s._owner !== Ce.current && (C = " It was passed a child from " + et(s._owner.type) + "."), It(s), z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', y, C), It(null);
      }
    }
    function an(s, _) {
      {
        if (typeof s != "object")
          return;
        if (Te(s))
          for (var y = 0; y < s.length; y++) {
            var C = s[y];
            Ne(C) && on(C, _);
          }
        else if (Ne(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var P = M(s);
          if (typeof P == "function" && P !== s.entries)
            for (var X = P.call(s), I; !(I = X.next()).done; )
              Ne(I.value) && on(I.value, _);
        }
      }
    }
    function wr(s) {
      {
        var _ = s.type;
        if (_ == null || typeof _ == "string")
          return;
        var y;
        if (typeof _ == "function")
          y = _.propTypes;
        else if (typeof _ == "object" && (_.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        _.$$typeof === p))
          y = _.propTypes;
        else
          return;
        if (y) {
          var C = et(_);
          ne(y, s.props, "prop", C, s);
        } else if (_.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var P = et(_);
          z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(s) {
      {
        for (var _ = Object.keys(s.props), y = 0; y < _.length; y++) {
          var C = _[y];
          if (C !== "children" && C !== "key") {
            It(s), z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), It(null);
            break;
          }
        }
        s.ref !== null && (It(s), z("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    function sn(s, _, y, C, P, X) {
      {
        var I = J(s);
        if (!I) {
          var A = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var nt = mr();
          nt ? A += nt : A += nn();
          var G;
          s === null ? G = "null" : Te(s) ? G = "array" : s !== void 0 && s.$$typeof === e ? (G = "<" + (et(s.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : G = typeof s, z("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", G, A);
        }
        var K = vr(s, _, y, P, X);
        if (K == null)
          return K;
        if (I) {
          var ut = _.children;
          if (ut !== void 0)
            if (C)
              if (Te(ut)) {
                for (var Pt = 0; Pt < ut.length; Pt++)
                  an(ut[Pt], s);
                Object.freeze && Object.freeze(ut);
              } else
                z("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              an(ut, s);
        }
        return s === r ? xr(K) : wr(K), K;
      }
    }
    function br(s, _, y) {
      return sn(s, _, y, !0);
    }
    function Er(s, _, y) {
      return sn(s, _, y, !1);
    }
    var Sr = Er, Tr = br;
    Ht.Fragment = r, Ht.jsx = Sr, Ht.jsxs = Tr;
  }()), Ht;
}
process.env.NODE_ENV === "production" ? Pe.exports = Or() : Pe.exports = Nr();
var W = Pe.exports, ke = "http://www.w3.org/1999/xhtml";
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
    for (var a = e[i], o = a.length, u = r[i] = new Array(o), l, h, c = 0; c < o; ++c)
      (l = a[c]) && (h = t.call(l, l.__data__, c, a)) && ("__data__" in l && (h.__data__ = l.__data__), u[c] = h);
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
    for (var o = e[a], u = o.length, l, h = 0; h < u; ++h)
      (l = o[h]) && (r.push(t.call(l, l.__data__, h, o)), i.push(l));
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
    for (var a = e[i], o = a.length, u = r[i] = [], l, h = 0; h < o; ++h)
      (l = a[h]) && t.call(l, l.__data__, h, a) && u.push(l);
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
  for (var o = 0, u, l = e.length, h = a.length; o < h; ++o)
    (u = e[o]) ? (u.__data__ = a[o], r[o] = u) : n[o] = new de(t, a[o]);
  for (; o < l; ++o)
    (u = e[o]) && (i[o] = u);
}
function Zr(t, e, n, r, i, a, o) {
  var u, l, h = /* @__PURE__ */ new Map(), c = e.length, p = a.length, g = new Array(c), w;
  for (u = 0; u < c; ++u)
    (l = e[u]) && (g[u] = w = o.call(l, l.__data__, u, e) + "", h.has(w) ? i[u] = l : h.set(w, l));
  for (u = 0; u < p; ++u)
    w = o.call(t, a[u], u, a) + "", (l = h.get(w)) ? (r[u] = l, l.__data__ = a[u], h.delete(w)) : n[u] = new de(t, a[u]);
  for (u = 0; u < c; ++u)
    (l = e[u]) && h.get(g[u]) === l && (i[u] = l);
}
function Br(t) {
  return t.__data__;
}
function Jr(t, e) {
  if (!arguments.length) return Array.from(this, Br);
  var n = e ? Zr : Kr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Gr(t));
  for (var a = i.length, o = new Array(a), u = new Array(a), l = new Array(a), h = 0; h < a; ++h) {
    var c = r[h], p = i[h], g = p.length, w = Qr(t.call(c, c && c.__data__, h, r)), R = w.length, T = u[h] = new Array(R), M = o[h] = new Array(R), x = l[h] = new Array(g);
    n(c, p, T, M, x, w, e);
    for (var z = 0, H = 0, L, F; z < R; ++z)
      if (L = T[z]) {
        for (z >= H && (H = z + 1); !(F = M[H]) && ++H < R; ) ;
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
    for (var h = n[l], c = r[l], p = h.length, g = u[l] = new Array(p), w, R = 0; R < p; ++R)
      (w = h[R] || c[R]) && (g[R] = w);
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
  function e(p, g) {
    return p && g ? t(p.__data__, g.__data__) : !p - !g;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], u = o.length, l = i[a] = new Array(u), h, c = 0; c < u; ++c)
      (h = o[c]) && (l[c] = h);
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
      for (var l = 0, h = u.length, c; l < h; ++l)
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
function bt(t, e) {
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
    return new it(Rt(this.r), Rt(this.g), Rt(this.b), _e(this.opacity));
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
  return `#${Tt(this.r)}${Tt(this.g)}${Tt(this.b)}`;
}
function To() {
  return `#${Tt(this.r)}${Tt(this.g)}${Tt(this.b)}${Tt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function mn() {
  const t = _e(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Rt(this.r)}, ${Rt(this.g)}, ${Rt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function _e(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Rt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Tt(t) {
  return t = Rt(t), (t < 16 ? "0" : "") + t.toString(16);
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
    var o = n((i = $e(i)).r, (a = $e(a)).r), u = n(i.g, a.g), l = n(i.b, a.b), h = Jn(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = u(c), i.b = l(c), i.opacity = h(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Et(t, e) {
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
    (a = i.index) > n && (a = e.slice(n, a), u[o] ? u[o] += a : u[++o] = a), (r = r[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, l.push({ i: o, x: Et(r, i) })), n = Ae.lastIndex;
  return n < e.length && (a = e.slice(n), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? l[0] ? Ao(l[0].x) : zo(e) : (e = l.length, function(h) {
    for (var c = 0, p; c < e; ++c) u[(p = l[c]).i] = p.x(h);
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
  function i(h) {
    return h.length ? h.pop() + " " : "";
  }
  function a(h, c, p, g, w, R) {
    if (h !== p || c !== g) {
      var T = w.push("translate(", null, e, null, n);
      R.push({ i: T - 4, x: Et(h, p) }, { i: T - 2, x: Et(c, g) });
    } else (p || g) && w.push("translate(" + p + e + g + n);
  }
  function o(h, c, p, g) {
    h !== c ? (h - c > 180 ? c += 360 : c - h > 180 && (h += 360), g.push({ i: p.push(i(p) + "rotate(", null, r) - 2, x: Et(h, c) })) : c && p.push(i(p) + "rotate(" + c + r);
  }
  function u(h, c, p, g) {
    h !== c ? g.push({ i: p.push(i(p) + "skewX(", null, r) - 2, x: Et(h, c) }) : c && p.push(i(p) + "skewX(" + c + r);
  }
  function l(h, c, p, g, w, R) {
    if (h !== p || c !== g) {
      var T = w.push(i(w) + "scale(", null, ",", null, ")");
      R.push({ i: T - 4, x: Et(h, p) }, { i: T - 2, x: Et(c, g) });
    } else (p !== 1 || g !== 1) && w.push(i(w) + "scale(" + p + "," + g + ")");
  }
  return function(h, c) {
    var p = [], g = [];
    return h = t(h), c = t(c), a(h.translateX, h.translateY, c.translateX, c.translateY, p, g), o(h.rotate, c.rotate, p, g), u(h.skewX, c.skewX, p, g), l(h.scaleX, h.scaleY, c.scaleX, c.scaleY, p, g), h = c = null, function(w) {
      for (var R = -1, T = g.length, M; ++R < T; ) p[(M = g[R]).i] = M.x(w);
      return p.join("");
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
    var u = a[0], l = a[1], h = a[2], c = o[0], p = o[1], g = o[2], w = c - u, R = p - l, T = w * w + R * R, M, x;
    if (T < Lo)
      x = Math.log(g / h) / e, M = function(k) {
        return [
          u + k * w,
          l + k * R,
          h * Math.exp(e * k * x)
        ];
      };
    else {
      var z = Math.sqrt(T), H = (g * g - h * h + r * T) / (2 * h * n * z), L = (g * g - h * h - r * T) / (2 * g * n * z), F = Math.log(Math.sqrt(H * H + 1) - H), Y = Math.log(Math.sqrt(L * L + 1) - L);
      x = (Y - F) / e, M = function(k) {
        var $ = k * x, U = En(F), J = h / (n * z) * (U * Fo(e * $ + F) - $o(F));
        return [
          u + J * w,
          l + J * R,
          h * U / En(e * $ + F)
        ];
      };
    }
    return M.duration = x * 1e3 * e / Math.SQRT2, M;
  }
  return i.rho = function(a) {
    var o = Math.max(1e-3, +a), u = o * o, l = u * u;
    return t(o, u, l);
  }, i;
}(Math.SQRT2, 2, 4);
var Lt = 0, Wt = 0, Ut = 0, er = 1e3, ge, qt, ve = 0, Ct = 0, Ee = 0, Qt = typeof performance == "object" && performance.now ? performance : Date, nr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ge() {
  return Ct || (nr(Xo), Ct = Qt.now() + Ee);
}
function Xo() {
  Ct = 0;
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
    (e = Ct - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Lt;
}
function Sn() {
  Ct = (ve = Qt.now()) + Ee, Lt = Wt = 0;
  try {
    Ho();
  } finally {
    Lt = 0, Vo(), Ct = 0;
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
    var e = t - Ct;
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
  function a(h) {
    n.state = Rn, n.timer.restart(o, n.delay, n.time), n.delay <= h && o(h - n.delay);
  }
  function o(h) {
    var c, p, g, w;
    if (n.state !== Rn) return l();
    for (c in r)
      if (w = r[c], w.name === n.name) {
        if (w.state === le) return Tn(o);
        w.state === Cn ? (w.state = fe, w.timer.stop(), w.on.call("interrupt", t, t.__data__, w.index, w.group), delete r[c]) : +c < e && (w.state = fe, w.timer.stop(), w.on.call("cancel", t, t.__data__, w.index, w.group), delete r[c]);
      }
    if (Tn(function() {
      n.state === le && (n.state = Cn, n.timer.restart(u, n.delay, n.time), u(h));
    }), n.state = He, n.on.call("start", t, t.__data__, n.index, n.group), n.state === He) {
      for (n.state = le, i = new Array(g = n.tween.length), c = 0, p = -1; c < g; ++c)
        (w = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++p] = w);
      i.length = p + 1;
    }
  }
  function u(h) {
    for (var c = h < n.duration ? n.ease.call(null, h / n.duration) : (n.timer.restart(l), n.state = Ue, 1), p = -1, g = i.length; ++p < g; )
      i[p].call(t, c);
    n.state === Ue && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = fe, n.timer.stop(), delete r[e];
    for (var h in r) return;
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
      for (var u = { name: e, value: n }, l = 0, h = i.length; l < h; ++l)
        if (i[l].name === e) {
          i[l] = u;
          break;
        }
      l === h && i.push(u);
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
  return (typeof e == "number" ? Et : e instanceof Jt ? xn : (n = Jt(e)) ? (e = n, xn) : Mo)(t, e);
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
    for (var a = e[i], o = a.length, u = r[i] = [], l, h = 0; h < o; ++h)
      (l = a[h]) && t.call(l, l.__data__, h, a) && u.push(l);
  return new wt(r, this._parents, this._name, this._id);
}
function xa(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u)
    for (var l = e[u], h = n[u], c = l.length, p = o[u] = new Array(c), g, w = 0; w < c; ++w)
      (g = l[w] || h[w]) && (p[w] = g);
  for (; u < r; ++u)
    o[u] = e[u];
  return new wt(o, this._parents, this._name, this._id);
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
    for (var u = r[o], l = u.length, h = a[o] = new Array(l), c, p, g = 0; g < l; ++g)
      (c = u[g]) && (p = t.call(c, c.__data__, g, u)) && ("__data__" in c && (p.__data__ = c.__data__), h[g] = p, Se(h[g], e, n, g, h, ht(c, n)));
  return new wt(a, this._parents, e, n);
}
function Oa(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = $n(t));
  for (var r = this._groups, i = r.length, a = [], o = [], u = 0; u < i; ++u)
    for (var l = r[u], h = l.length, c, p = 0; p < h; ++p)
      if (c = l[p]) {
        for (var g = t.call(c, c.__data__, p, l), w, R = ht(c, n), T = 0, M = g.length; T < M; ++T)
          (w = g[T]) && Se(w, e, n, T, g, R);
        a.push(g), o.push(c);
      }
  return new wt(a, o, e, n);
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
    var l = pt(this, t), h = l.on, c = l.value[a] == null ? u || (u = ar(e)) : void 0;
    (h !== n || i !== c) && (r = (n = h).copy()).on(o, i = c), l.on = r;
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
    for (var o = r[a], u = o.length, l, h = 0; h < u; ++h)
      if (l = o[h]) {
        var c = ht(l, e);
        Se(l, t, n, h, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new wt(r, this._parents, t, n);
}
function qa() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var u = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var h = pt(this, r), c = h.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(u), e._.interrupt.push(u), e._.end.push(l)), h.on = e;
    }), i === 0 && a();
  });
}
var ja = 0;
function wt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function sr() {
  return ++ja;
}
var mt = te.prototype;
wt.prototype = {
  constructor: wt,
  select: Ca,
  selectAll: Oa,
  selectChild: mt.selectChild,
  selectChildren: mt.selectChildren,
  filter: wa,
  merge: xa,
  selection: za,
  transition: Wa,
  call: mt.call,
  nodes: mt.nodes,
  node: mt.node,
  size: mt.size,
  empty: mt.empty,
  each: mt.each,
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
  [Symbol.iterator]: mt[Symbol.iterator]
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
  t instanceof wt ? (e = t._id, t = t._name) : (e = sr(), (n = Ka).time = Ge(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], u = o.length, l, h = 0; h < u; ++h)
      (l = o[h]) && Se(l, t, e, h, o, n || Za(l, e));
  return new wt(r, this._parents, t, e);
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
function yt(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
yt.prototype = {
  constructor: yt,
  scale: function(t) {
    return t === 1 ? this : new yt(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new yt(this.k, this.x + this.k * t, this.y + this.k * e);
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
var Gt = new yt(1, 0, 0);
yt.prototype;
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
  var t = Qa, e = ts, n = rs, r = es, i = ns, a = [0, 1 / 0], o = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, l = Yo, h = qe("start", "zoom", "end"), c, p, g, w = 500, R = 150, T = 0, M = 10;
  function x(f) {
    f.property("__zoom", On).on("wheel.zoom", $, { passive: !1 }).on("mousedown.zoom", U).on("dblclick.zoom", J).filter(i).on("touchstart.zoom", at).on("touchmove.zoom", Q).on("touchend.zoom touchcancel.zoom", et).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  x.transform = function(f, m, d, v) {
    var b = f.selection ? f.selection() : f;
    b.property("__zoom", On), f !== b ? F(f, m, d, v) : b.interrupt().each(function() {
      Y(this, arguments).event(v).start().zoom(null, typeof m == "function" ? m.apply(this, arguments) : m).end();
    });
  }, x.scaleBy = function(f, m, d, v) {
    x.scaleTo(f, function() {
      var b = this.__zoom.k, E = typeof m == "function" ? m.apply(this, arguments) : m;
      return b * E;
    }, d, v);
  }, x.scaleTo = function(f, m, d, v) {
    x.transform(f, function() {
      var b = e.apply(this, arguments), E = this.__zoom, S = d == null ? L(b) : typeof d == "function" ? d.apply(this, arguments) : d, N = E.invert(S), O = typeof m == "function" ? m.apply(this, arguments) : m;
      return n(H(z(E, O), S, N), b, o);
    }, d, v);
  }, x.translateBy = function(f, m, d, v) {
    x.transform(f, function() {
      return n(this.__zoom.translate(
        typeof m == "function" ? m.apply(this, arguments) : m,
        typeof d == "function" ? d.apply(this, arguments) : d
      ), e.apply(this, arguments), o);
    }, null, v);
  }, x.translateTo = function(f, m, d, v, b) {
    x.transform(f, function() {
      var E = e.apply(this, arguments), S = this.__zoom, N = v == null ? L(E) : typeof v == "function" ? v.apply(this, arguments) : v;
      return n(Gt.translate(N[0], N[1]).scale(S.k).translate(
        typeof m == "function" ? -m.apply(this, arguments) : -m,
        typeof d == "function" ? -d.apply(this, arguments) : -d
      ), E, o);
    }, v, b);
  };
  function z(f, m) {
    return m = Math.max(a[0], Math.min(a[1], m)), m === f.k ? f : new yt(m, f.x, f.y);
  }
  function H(f, m, d) {
    var v = m[0] - d[0] * f.k, b = m[1] - d[1] * f.k;
    return v === f.x && b === f.y ? f : new yt(f.k, v, b);
  }
  function L(f) {
    return [(+f[0][0] + +f[1][0]) / 2, (+f[0][1] + +f[1][1]) / 2];
  }
  function F(f, m, d, v) {
    f.on("start.zoom", function() {
      Y(this, arguments).event(v).start();
    }).on("interrupt.zoom end.zoom", function() {
      Y(this, arguments).event(v).end();
    }).tween("zoom", function() {
      var b = this, E = arguments, S = Y(b, E).event(v), N = e.apply(b, E), O = d == null ? L(N) : typeof d == "function" ? d.apply(b, E) : d, V = Math.max(N[1][0] - N[0][0], N[1][1] - N[0][1]), D = b.__zoom, q = typeof m == "function" ? m.apply(b, E) : m, Z = l(D.invert(O).concat(V / D.k), q.invert(O).concat(V / q.k));
      return function(j) {
        if (j === 1) j = q;
        else {
          var B = Z(j), st = V / B[2];
          j = new yt(st, O[0] - B[0] * st, O[1] - B[1] * st);
        }
        S.zoom(null, j);
      };
    });
  }
  function Y(f, m, d) {
    return !d && f.__zooming || new k(f, m);
  }
  function k(f, m) {
    this.that = f, this.args = m, this.active = 0, this.sourceEvent = null, this.extent = e.apply(f, m), this.taps = 0;
  }
  k.prototype = {
    event: function(f) {
      return f && (this.sourceEvent = f), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(f, m) {
      return this.mouse && f !== "mouse" && (this.mouse[1] = m.invert(this.mouse[0])), this.touch0 && f !== "touch" && (this.touch0[1] = m.invert(this.touch0[0])), this.touch1 && f !== "touch" && (this.touch1[1] = m.invert(this.touch1[0])), this.that.__zoom = m, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(f) {
      var m = rt(this.that).datum();
      h.call(
        f,
        this.that,
        new Ja(f, {
          sourceEvent: this.sourceEvent,
          target: x,
          type: f,
          transform: this.that.__zoom,
          dispatch: h
        }),
        m
      );
    }
  };
  function $(f, ...m) {
    if (!t.apply(this, arguments)) return;
    var d = Y(this, m).event(f), v = this.__zoom, b = Math.max(a[0], Math.min(a[1], v.k * Math.pow(2, r.apply(this, arguments)))), E = bt(f);
    if (d.wheel)
      (d.mouse[0][0] !== E[0] || d.mouse[0][1] !== E[1]) && (d.mouse[1] = v.invert(d.mouse[0] = E)), clearTimeout(d.wheel);
    else {
      if (v.k === b) return;
      d.mouse = [E, v.invert(E)], he(this), d.start();
    }
    Vt(f), d.wheel = setTimeout(S, R), d.zoom("mouse", n(H(z(v, b), d.mouse[0], d.mouse[1]), d.extent, o));
    function S() {
      d.wheel = null, d.end();
    }
  }
  function U(f, ...m) {
    if (g || !t.apply(this, arguments)) return;
    var d = f.currentTarget, v = Y(this, m, !0).event(f), b = rt(f.view).on("mousemove.zoom", O, !0).on("mouseup.zoom", V, !0), E = bt(f, d), S = f.clientX, N = f.clientY;
    ho(f.view), Me(f), v.mouse = [E, this.__zoom.invert(E)], he(this), v.start();
    function O(D) {
      if (Vt(D), !v.moved) {
        var q = D.clientX - S, Z = D.clientY - N;
        v.moved = q * q + Z * Z > T;
      }
      v.event(D).zoom("mouse", n(H(v.that.__zoom, v.mouse[0] = bt(D, d), v.mouse[1]), v.extent, o));
    }
    function V(D) {
      b.on("mousemove.zoom mouseup.zoom", null), po(D.view, v.moved), Vt(D), v.event(D).end();
    }
  }
  function J(f, ...m) {
    if (t.apply(this, arguments)) {
      var d = this.__zoom, v = bt(f.changedTouches ? f.changedTouches[0] : f, this), b = d.invert(v), E = d.k * (f.shiftKey ? 0.5 : 2), S = n(H(z(d, E), v, b), e.apply(this, m), o);
      Vt(f), u > 0 ? rt(this).transition().duration(u).call(F, S, v, f) : rt(this).call(x.transform, S, v, f);
    }
  }
  function at(f, ...m) {
    if (t.apply(this, arguments)) {
      var d = f.touches, v = d.length, b = Y(this, m, f.changedTouches.length === v).event(f), E, S, N, O;
      for (Me(f), S = 0; S < v; ++S)
        N = d[S], O = bt(N, this), O = [O, this.__zoom.invert(O), N.identifier], b.touch0 ? !b.touch1 && b.touch0[2] !== O[2] && (b.touch1 = O, b.taps = 0) : (b.touch0 = O, E = !0, b.taps = 1 + !!c);
      c && (c = clearTimeout(c)), E && (b.taps < 2 && (p = O[0], c = setTimeout(function() {
        c = null;
      }, w)), he(this), b.start());
    }
  }
  function Q(f, ...m) {
    if (this.__zooming) {
      var d = Y(this, m).event(f), v = f.changedTouches, b = v.length, E, S, N, O;
      for (Vt(f), E = 0; E < b; ++E)
        S = v[E], N = bt(S, this), d.touch0 && d.touch0[2] === S.identifier ? d.touch0[0] = N : d.touch1 && d.touch1[2] === S.identifier && (d.touch1[0] = N);
      if (S = d.that.__zoom, d.touch1) {
        var V = d.touch0[0], D = d.touch0[1], q = d.touch1[0], Z = d.touch1[1], j = (j = q[0] - V[0]) * j + (j = q[1] - V[1]) * j, B = (B = Z[0] - D[0]) * B + (B = Z[1] - D[1]) * B;
        S = z(S, Math.sqrt(j / B)), N = [(V[0] + q[0]) / 2, (V[1] + q[1]) / 2], O = [(D[0] + Z[0]) / 2, (D[1] + Z[1]) / 2];
      } else if (d.touch0) N = d.touch0[0], O = d.touch0[1];
      else return;
      d.zoom("touch", n(H(S, N, O), d.extent, o));
    }
  }
  function et(f, ...m) {
    if (this.__zooming) {
      var d = Y(this, m).event(f), v = f.changedTouches, b = v.length, E, S;
      for (Me(f), g && clearTimeout(g), g = setTimeout(function() {
        g = null;
      }, w), E = 0; E < b; ++E)
        S = v[E], d.touch0 && d.touch0[2] === S.identifier ? delete d.touch0 : d.touch1 && d.touch1[2] === S.identifier && delete d.touch1;
      if (d.touch1 && !d.touch0 && (d.touch0 = d.touch1, delete d.touch1), d.touch0) d.touch0[1] = this.__zoom.invert(d.touch0[0]);
      else if (d.end(), d.taps === 2 && (S = bt(S, this), Math.hypot(p[0] - S[0], p[1] - S[1]) < M)) {
        var N = rt(this).on("dblclick.zoom");
        N && N.apply(this, arguments);
      }
    }
  }
  return x.wheelDelta = function(f) {
    return arguments.length ? (r = typeof f == "function" ? f : se(+f), x) : r;
  }, x.filter = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : se(!!f), x) : t;
  }, x.touchable = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : se(!!f), x) : i;
  }, x.extent = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : se([[+f[0][0], +f[0][1]], [+f[1][0], +f[1][1]]]), x) : e;
  }, x.scaleExtent = function(f) {
    return arguments.length ? (a[0] = +f[0], a[1] = +f[1], x) : [a[0], a[1]];
  }, x.translateExtent = function(f) {
    return arguments.length ? (o[0][0] = +f[0][0], o[1][0] = +f[1][0], o[0][1] = +f[0][1], o[1][1] = +f[1][1], x) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
  }, x.constrain = function(f) {
    return arguments.length ? (n = f, x) : n;
  }, x.duration = function(f) {
    return arguments.length ? (u = +f, x) : u;
  }, x.interpolate = function(f) {
    return arguments.length ? (l = f, x) : l;
  }, x.on = function() {
    var f = h.on.apply(h, arguments);
    return f === h ? x : f;
  }, x.clickDistance = function(f) {
    return arguments.length ? (T = (f = +f) * f, x) : Math.sqrt(T);
  }, x.tapDistance = function(f) {
    return arguments.length ? (M = +f, x) : M;
  }, x;
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
  let [l, h, c] = [0, 0, 1];
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
      return h = e.height / 2 - (Math.abs(e.y - n.y) * c + n.height * c / 2), {
        updatedX: r + ((e.x - n.x) * c + u.x),
        updatedY: i + h + u.y
      };
    case ct.CENTER_CENTER:
      return l = e.width / 2 - (Math.abs(e.x - n.x) * c + n.width * c / 2), h = e.height / 2 - (Math.abs(e.y - n.y) * c + n.height * c / 2), {
        updatedX: r + l + u.x,
        updatedY: i + h + u.y
      };
    case ct.CENTER_RIGHT:
      return h = e.height / 2 - (Math.abs(e.y - n.y) * c + n.height * c / 2), {
        updatedX: r + (e.width - (Math.abs(e.x - n.x) * c + n.width * c)) + u.x,
        updatedY: i + h + u.y
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
  }), l = u / 10 || 0, h = u / 100 || 0;
  let [c, p] = [
    i + l,
    o
  ];
  if (c < 1)
    c = 0, p -= Math.abs(h);
  else if (c + a > r) {
    const g = r - Math.max(
      tt.MIN_SCROLLBAR_SIZE,
      a - Math.abs(p)
    );
    c = Math.min(
      r - (a + p),
      g
    ), p -= h;
  } else if (p !== 0) {
    const g = c > r / 2;
    c = g ? r - a : 0, g ? (p -= h, p <= 0 && (p = 0)) : (p += Math.abs(h), p >= 0 && (p = 0));
  }
  return [c, p];
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
  elementColor: h = "#afb7c7"
}) => {
  const { scale: c, translateX: p, translateY: g } = a, w = Kt({
    value: c * 10 / (r * 10),
    min: u,
    max: l
  }), R = i * c, T = e * c, M = Math.max(n, T), x = `patternId-${t}`;
  return /* @__PURE__ */ W.jsxs("svg", { className: `${o} ${ss.dotSvgContainer}`, children: [
    /* @__PURE__ */ W.jsx(
      "pattern",
      {
        id: x,
        x: p % R,
        y: g % R,
        width: R,
        height: R,
        patternUnits: "userSpaceOnUse",
        patternTransform: `translate(-${T},-${T})`,
        children: /* @__PURE__ */ W.jsx(
          "circle",
          {
            cx: M,
            cy: M,
            r: M,
            fill: h,
            opacity: w
          }
        )
      }
    ),
    /* @__PURE__ */ W.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${x})` })
  ] });
}, cs = "_container_1xxyl_1", ls = "_canvasWrapper_1xxyl_8", fs = "_panning_1xxyl_21", hs = "_canvas_1xxyl_8", ds = "_contentWrapper_1xxyl_39", St = {
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
    getContainerOffset: h
  }, c) => {
    const [p, g] = zn(t), w = lt(null), R = lt(null), T = lt({
      isDragging: !1,
      vertical: !0,
      initialOffset: 0
    }), [M, x] = Pn({
      scale: t,
      horizontalSize: g,
      horizontalPos: e ? e.x : (u ?? 0) / tt.SCROLL_POS_RATIO,
      horizontalSizeDecrease: 0,
      verticalSize: p,
      verticalPos: e ? e.y : (o ?? 0) / tt.SCROLL_POS_RATIO,
      verticalSizeDecrease: 0
    });
    kn(c, () => ({
      resetScrollPos: () => {
        x((k) => ({
          ...k,
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
        x(($) => {
          let U;
          const [J, at] = zn(t), Q = t / $.scale || 0;
          return t < $.scale ? U = {
            horizontalPos: $.horizontalPos - Q,
            verticalPos: $.verticalPos - Q
          } : U = {
            horizontalPos: $.horizontalPos + Q,
            verticalPos: $.verticalPos + Q
          }, {
            ...$,
            scale: t,
            horizontalSize: at,
            verticalSize: J,
            ...U
          };
        });
      },
      [t]
    );
    function z(k) {
      T.current.isDragging || x(($) => {
        const [U, J] = An({
          state: $,
          scrollDelta: k,
          scrollLength: o
        }), [at, Q] = An({
          isVertical: !1,
          state: $,
          scrollDelta: k,
          scrollLength: u
        });
        return {
          ...$,
          horizontalPos: at,
          horizontalSizeDecrease: Q,
          verticalPos: U,
          verticalSizeDecrease: J
        };
      });
    }
    const H = jt(
      function($, U) {
        if (!T.current.isDragging) return;
        $.stopPropagation();
        const { movementX: J, movementY: at, clientX: Q, clientY: et, offsetX: f, offsetY: m } = $;
        T.current.initialOffset < 1 && (T.current.initialOffset = U ? m : f);
        const d = U ? at : J, v = (U ? et : Q) - T.current.initialOffset - h(U), b = (O) => U ? [
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
        x((O) => {
          const [V, D, q, Z] = b(O);
          return {
            ...O,
            [V]: Kt({
              value: v,
              min: Z,
              max: q - D
            })
          };
        });
        const E = () => {
          const O = d > 0 ? d + tt.SCROLL_DELTA_DIFF : d - tt.SCROLL_DELTA_DIFF;
          return U ? { deltaX: 0, deltaY: O } : {
            deltaX: O,
            deltaY: 0
          };
        }, S = (U ? o : u) - (U ? M.verticalSize : M.horizontalSize);
        !(v <= 0 || v >= S) && d !== 0 && l(E());
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [o, u, n.y, n.x]
    ), L = jt(
      function() {
        T.current.isDragging = !1, T.current.initialOffset = 0, window.removeEventListener(
          "mousemove",
          ($) => H($, T.current.vertical)
        ), window.removeEventListener("mouseup", L);
      },
      [H]
    ), F = jt(
      function() {
        window.addEventListener(
          "mousemove",
          ($) => H($, T.current.vertical)
        ), window.addEventListener("mouseup", L);
      },
      [H, L]
    ), Y = (k) => {
      k.stopPropagation();
    };
    return /* @__PURE__ */ W.jsxs(Rr, { children: [
      /* @__PURE__ */ W.jsx(
        "div",
        {
          className: Mn.verticalScrollBar,
          style: { width: i },
          ref: w,
          children: /* @__PURE__ */ W.jsx(
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
                }, F();
              },
              onDragEnterCapture: Y,
              onDragCapture: Y,
              onDragEndCapture: Y
            }
          )
        }
      ),
      /* @__PURE__ */ W.jsx(
        "div",
        {
          className: Mn.horizontalScrollBar,
          ref: R,
          style: { height: i },
          children: /* @__PURE__ */ W.jsx(
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
  return /* @__PURE__ */ W.jsx(vs, { innerRef: n, ...e, children: /* @__PURE__ */ W.jsx(
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
    onCanvasMount: h = () => {
    },
    onTransform: c = () => {
    },
    disablePanningClasses: p = []
  }) => {
    const g = lt(null), w = lt(null), R = lt(null), T = lt(null), M = lt(null), x = t.ref, z = lt(null), H = lt(null), L = Dn(() => Nn().scaleExtent([n, r]), [r, n]), F = lt(rt(R.current).call(L)), [Y, k] = Pn({
      translateX: 0,
      translateY: 0,
      scale: 1
    });
    kn(e, () => ({
      scrollNodeToCenter: ({
        nodeElement: f,
        offset: m,
        scale: d,
        shouldUpdateMaxScale: v,
        maxScale: b,
        transitionDuration: E
      }) => J({
        nodeElement: f,
        offset: m,
        scale: d,
        shouldUpdateMaxScale: v,
        maxScale: b,
        transitionDuration: E,
        position: ct.CENTER_CENTER
      }),
      scrollNodeHandler: J,
      scrollContentHorizontallyCenter: at,
      fitContentToView: U,
      getCanvasState: Q
    })), ue(() => {
      const f = (d) => {
        d.code === "Space" && (H.current = !0);
      }, m = (d) => {
        d.code === "Space" && (H.current = !1);
      };
      return window.addEventListener("keydown", f), window.addEventListener("keyup", m), () => {
        window.removeEventListener("keydown", f), window.removeEventListener("keyup", m);
      };
    }, []), ue(
      function() {
        F.current = rt(R.current).call(L);
        const m = rt(T.current);
        w.current = g.current ? g.current.getBoundingClientRect() : {}, L.filter((d) => {
          if (d.type === "mousedown" && !z.current && (z.current = !0), !H.current) {
            let v = d.target;
            for (; v; ) {
              if (p.filter((b) => v == null ? void 0 : v.classList.contains(b)).length > 0)
                return !1;
              v = v.parentElement;
            }
          }
          return d.ctrlKey || d.type !== "wheel";
        }).on(
          "zoom",
          (d) => {
            var O, V;
            ((O = d.sourceEvent) == null ? void 0 : O.ctrlKey) === !1 && d.type === "zoom" && ((V = g.current) == null || V.classList.add(St.panning));
            const v = d.transform, { x: b, y: E, k: S } = v, N = T.current;
            k({ translateX: b, translateY: E, scale: S }), we && N ? N.style.transform = `translate(${b}px, ${E}px) scale(${S})` : m.attr("transform", v);
          }
        ), L.on("end", () => {
          var d;
          z.current = !1, (d = g.current) == null || d.classList.remove(St.panning);
        }), h({
          scrollNodeToCenter: ({
            nodeElement: d,
            offset: v,
            scale: b,
            shouldUpdateMaxScale: E,
            maxScale: S,
            transitionDuration: N
          }) => J({
            nodeElement: d,
            offset: v,
            scale: b,
            shouldUpdateMaxScale: E,
            maxScale: S,
            transitionDuration: N,
            position: ct.CENTER_CENTER
          }),
          scrollNodeHandler: J,
          scrollContentHorizontallyCenter: at,
          fitContentToView: U,
          getCanvasState: Q
        });
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    ), ue(() => {
      c(Y);
    }, [c, Y]), F.current.call(Nn).on(
      "wheel.zoom",
      (f) => {
        var d;
        f.preventDefault();
        const m = F.current.property("__zoom").k || 1;
        if (i && !f.ctrlKey) {
          const v = {
            deltaX: f.deltaX,
            deltaY: f.deltaY
          };
          (d = M.current) == null || d.onScrollDeltaChangeHandler(v), $(v);
        } else {
          const v = m * Math.pow(2, -f.deltaY * 0.01);
          L.scaleTo(F.current, v, bt(f));
        }
      },
      { passive: !1, capture: !0 }
    );
    const $ = (f) => {
      const m = F.current.property("__zoom").k || 1;
      L.translateBy(
        F.current,
        -(f.deltaX / m),
        -(f.deltaY / m)
      );
    }, U = jt(
      function({
        duration: m = 500,
        offset: d = { x: 0, y: 0 },
        scale: v,
        maxZoomLimit: b = tt.FIT_TO_VIEW_MAX_ZOOM,
        disableVerticalCenter: E = !1
      }) {
        requestIdleCallback(
          () => {
            var ne, re;
            if (!x.current) return;
            const S = rt(R.current), N = x.current.getBoundingClientRect(), O = F.current.property("__zoom").k || 1, V = (ne = R.current) == null ? void 0 : ne.getBoundingClientRect(), { width: D = 0, height: q = 0 } = V || {}, Z = 1 / O, j = N.width * Z, B = N.height * Z, st = q / B, _t = D / j, xt = v ?? Kt({
              value: Math.min(
                b,
                Math.min(st, _t)
              ),
              min: n,
              max: r
            }), Ot = D - j * xt, Nt = q - B * xt, zt = !E && st > _t, gt = Ot / 2, At = zt ? Nt / 2 : 0, $t = gt + d.x, Ft = At + d.y, Mt = Gt.translate($t, Ft).scale(xt);
            k({ translateX: $t, translateY: Ft, scale: xt }), (re = M.current) == null || re.resetScrollPos(), S.transition().duration(m).call(L.transform, Mt);
          },
          { timeout: Ie }
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [r, n]
    ), J = ({
      nodeElement: f,
      offset: m = { x: 0, y: 0 },
      scale: d,
      shouldUpdateMaxScale: v = !0,
      maxScale: b,
      transitionDuration: E = 300,
      position: S = ct.TOP_CENTER
    }) => {
      requestIdleCallback(
        () => {
          if (!f) return;
          const N = F.current.property("__zoom"), {
            k: O,
            x: V,
            y: D
          } = N, q = rt(R.current), j = (() => {
            const Nt = (gt) => b ? Math.min(b, gt) : gt;
            if (!d) return Nt(O);
            let zt = d;
            return v && (zt = Math.max(d, O)), Nt(zt);
          })(), B = R.current.getBoundingClientRect(), st = f.getBoundingClientRect(), { updatedX: _t, updatedY: xt } = is({
            position: S,
            svgBounds: B,
            nodeBounds: st,
            currentTranslateX: V,
            currentTranslateY: D,
            currentScale: O,
            updatedScale: j,
            customOffset: { x: m.x, y: m.y }
          }), Ot = Gt.translate(_t, xt).scale(j);
          q.transition().duration(E).call(L.transform, Ot);
        },
        { timeout: Ie }
      );
    }, at = ({
      offset: f = 0,
      transitionDuration: m = 300
    }) => {
      x.current && requestIdleCallback(
        () => {
          const d = F.current.property("__zoom"), { k: v, y: b } = d, E = rt(R.current), S = R.current.getBoundingClientRect(), N = x.current.getBoundingClientRect(), O = 1 / v, V = N.width * O, D = (S.width - V * v) / 2 + f;
          k({
            ...Y,
            translateX: D
          });
          const q = Gt.translate(D, b).scale(v);
          E.transition().duration(m).call(L.transform, q);
        },
        { timeout: Ie }
      );
    }, Q = () => ({
      canvasNode: rt(R.current),
      zoomNode: rt(T.current),
      currentPosition: F.current.property("__zoom"),
      d3Zoom: L
    }), et = jt(
      function(m = !0) {
        const { x: d, y: v } = w.current;
        return m ? v : d;
      },
      []
    );
    return /* @__PURE__ */ W.jsxs("div", { className: St.container, children: [
      /* @__PURE__ */ W.jsx("div", { ref: g, className: St.canvasWrapper, children: we ? /* @__PURE__ */ W.jsx("div", { ref: R, className: St.canvas, children: /* @__PURE__ */ W.jsx("div", { ref: T, children: /* @__PURE__ */ W.jsx("div", { className: St.contentWrapper, children: t }) }) }) : /* @__PURE__ */ W.jsx("svg", { ref: R, className: St.canvas, children: /* @__PURE__ */ W.jsx("g", { ref: T, children: /* @__PURE__ */ W.jsx(
        "foreignObject",
        {
          x: tt.INITIAL_POSITION_X,
          y: tt.INITIAL_POSITION_Y,
          width: tt.DEFAULT_LAYOUT,
          height: tt.DEFAULT_LAYOUT,
          children: t
        }
      ) }) }) }),
      /* @__PURE__ */ W.jsx(
        us,
        {
          maxZoom: r,
          zoomTransform: Y,
          ...l
        }
      ),
      o && g.current && /* @__PURE__ */ W.jsx(
        gs,
        {
          ref: M,
          scale: Y.scale,
          ...u,
          verticalOffsetHeight: g.current.offsetHeight,
          horizontalOffsetWidth: g.current.offsetWidth,
          getContainerOffset: et,
          onScrollDeltaHandler: $
        }
      ),
      a.map((f, m) => {
        const {
          component: d,
          position: v = ye.BOTTOM_LEFT,
          offset: b = { x: 0, y: 0 },
          overlap: E = !0,
          className: S = ""
        } = f;
        return /* @__PURE__ */ W.jsx(
          ms,
          {
            component: d,
            position: v,
            offset: b,
            overlap: E,
            zoomState: { ...Y, minZoom: n, maxZoom: r },
            className: S
          },
          m
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
    const l = Object.values(ye).includes(e) ? e : ye.BOTTOM_LEFT, [h, c] = l.split("-");
    return {
      [c]: n.x,
      [h]: n.y
    };
  }, [e, n]), u = xe.cloneElement(t, {
    zoomState: i
  });
  return /* @__PURE__ */ W.jsx(
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
