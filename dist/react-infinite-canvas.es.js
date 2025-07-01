(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._dotSvgContainer_64xbd_1{position:absolute;width:100%;height:100%;inset-block-start:0;inset-inline-start:0}._container_1xxyl_1{position:relative;overflow:hidden;width:100%;height:100%}._canvasWrapper_1xxyl_8{position:relative;width:100%;height:100%;overflow:hidden;background-color:var(--kf-color-bg-gray);cursor:grab;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._canvasWrapper_1xxyl_8._panning_1xxyl_21{cursor:grabbing}._canvas_1xxyl_8{position:relative;z-index:2;width:100%;height:100%}._canvas_1xxyl_8>div:first-of-type{position:absolute;inset-inline-start:0;inset-block-start:0;transition:transform .01s ease}._contentWrapper_1xxyl_39{position:absolute}._verticalScrollBar_17thb_1{position:absolute;inset-inline-end:2px;inset-block-start:0;inset-block-end:0;background:transparent}._horizontalScrollBar_17thb_9{position:absolute;inset-block-end:2px;inset-inline-start:0;inset-inline-end:0;background:transparent}._verticalScrollBar_17thb_1>div,._horizontalScrollBar_17thb_9>div{position:absolute;border-radius:50px;z-index:8;cursor:pointer}._verticalScrollBar_17thb_1>div{width:100%}._horizontalScrollBar_17thb_9>div{height:100%}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import Ee, { forwardRef as In, useRef as ft, useState as kn, useImperativeHandle as Dn, useEffect as le, useCallback as Lt, Fragment as Rr, memo as Cr, useMemo as Ln } from "react";
var ke = { exports: {} }, Vt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ln;
function Or() {
  if (ln) return Vt;
  ln = 1;
  var t = Ee, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, l, f) {
    var c, p = {}, m = null, w = null;
    f !== void 0 && (m = "" + f), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (c in l) r.call(l, c) && !a.hasOwnProperty(c) && (p[c] = l[c]);
    if (u && u.defaultProps) for (c in l = u.defaultProps, l) p[c] === void 0 && (p[c] = l[c]);
    return { $$typeof: e, type: u, key: m, ref: w, props: p, _owner: i.current };
  }
  return Vt.Fragment = n, Vt.jsx = o, Vt.jsxs = o, Vt;
}
var Wt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fn;
function Nr() {
  return fn || (fn = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ee, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), N = Symbol.iterator, T = "@@iterator";
    function z(s) {
      if (s === null || typeof s != "object")
        return null;
      var _ = N && s[N] || s[T];
      return typeof _ == "function" ? _ : null;
    }
    var E = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(s) {
      {
        for (var _ = arguments.length, x = new Array(_ > 1 ? _ - 1 : 0), O = 1; O < _; O++)
          x[O - 1] = arguments[O];
        V("error", s, x);
      }
    }
    function V(s, _, x) {
      {
        var O = E.ReactDebugCurrentFrame, $ = O.getStackAddendum();
        $ !== "" && (_ += "%s", x = x.concat([$]));
        var H = x.map(function(I) {
          return String(I);
        });
        H.unshift("Warning: " + _), Function.prototype.apply.call(console[s], console, H);
      }
    }
    var G = !1, X = !1, k = !1, D = !1, L = !1, W;
    W = Symbol.for("react.module.reference");
    function nt(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === a || L || s === i || s === f || s === c || D || s === w || G || X || k || typeof s == "object" && s !== null && (s.$$typeof === m || s.$$typeof === p || s.$$typeof === o || s.$$typeof === u || s.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === W || s.getModuleId !== void 0));
    }
    function st(s, _, x) {
      var O = s.displayName;
      if (O)
        return O;
      var $ = _.displayName || _.name || "";
      return $ !== "" ? x + "(" + $ + ")" : x;
    }
    function J(s) {
      return s.displayName || "Context";
    }
    function Q(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
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
            var _ = s;
            return J(_) + ".Consumer";
          case o:
            var x = s;
            return J(x._context) + ".Provider";
          case l:
            return st(s, s.render, "ForwardRef");
          case p:
            var O = s.displayName || null;
            return O !== null ? O : Q(s.type) || "Memo";
          case m: {
            var $ = s, H = $._payload, I = $._init;
            try {
              return Q(I(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var h = Object.assign, b = 0, d, g, v, y, S, R, C;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function P() {
      {
        if (b === 0) {
          d = console.log, g = console.info, v = console.warn, y = console.error, S = console.group, R = console.groupCollapsed, C = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: F,
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
        b++;
      }
    }
    function U() {
      {
        if (b--, b === 0) {
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
              value: g
            }),
            warn: h({}, s, {
              value: v
            }),
            error: h({}, s, {
              value: y
            }),
            group: h({}, s, {
              value: S
            }),
            groupCollapsed: h({}, s, {
              value: R
            }),
            groupEnd: h({}, s, {
              value: C
            })
          });
        }
        b < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = E.ReactCurrentDispatcher, q;
    function K(s, _, x) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch ($) {
            var O = $.stack.trim().match(/\n( *(at )?)/);
            q = O && O[1] || "";
          }
        return `
` + q + s;
      }
    }
    var rt = !1, ut;
    {
      var Mt = typeof WeakMap == "function" ? WeakMap : Map;
      ut = new Mt();
    }
    function Tt(s, _) {
      if (!s || rt)
        return "";
      {
        var x = ut.get(s);
        if (x !== void 0)
          return x;
      }
      var O;
      rt = !0;
      var $ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = Y.current, Y.current = null, P();
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
            } catch (mt) {
              O = mt;
            }
            Reflect.construct(s, [], I);
          } else {
            try {
              I.call();
            } catch (mt) {
              O = mt;
            }
            s.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (mt) {
            O = mt;
          }
          s();
        }
      } catch (mt) {
        if (mt && O && typeof mt.stack == "string") {
          for (var M = mt.stack.split(`
`), it = O.stack.split(`
`), B = M.length - 1, Z = it.length - 1; B >= 1 && Z >= 0 && M[B] !== it[Z]; )
            Z--;
          for (; B >= 1 && Z >= 0; B--, Z--)
            if (M[B] !== it[Z]) {
              if (B !== 1 || Z !== 1)
                do
                  if (B--, Z--, Z < 0 || M[B] !== it[Z]) {
                    var ct = `
` + M[B].replace(" at new ", " at ");
                    return s.displayName && ct.includes("<anonymous>") && (ct = ct.replace("<anonymous>", s.displayName)), typeof s == "function" && ut.set(s, ct), ct;
                  }
                while (B >= 1 && Z >= 0);
              break;
            }
        }
      } finally {
        rt = !1, Y.current = H, U(), Error.prepareStackTrace = $;
      }
      var kt = s ? s.displayName || s.name : "", cn = kt ? K(kt) : "";
      return typeof s == "function" && ut.set(s, cn), cn;
    }
    function bt(s, _, x) {
      return Tt(s, !1);
    }
    function Ht(s) {
      var _ = s.prototype;
      return !!(_ && _.isReactComponent);
    }
    function gt(s, _, x) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return Tt(s, Ht(s));
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
            return bt(s.render);
          case p:
            return gt(s.type, _, x);
          case m: {
            var O = s, $ = O._payload, H = O._init;
            try {
              return gt(H($), _, x);
            } catch {
            }
          }
        }
      return "";
    }
    var vt = Object.prototype.hasOwnProperty, Rt = {}, ne = E.ReactDebugCurrentFrame;
    function Ct(s) {
      if (s) {
        var _ = s._owner, x = gt(s.type, s._source, _ ? _.type : null);
        ne.setExtraStackFrame(x);
      } else
        ne.setExtraStackFrame(null);
    }
    function re(s, _, x, O, $) {
      {
        var H = Function.call.bind(vt);
        for (var I in s)
          if (H(s, I)) {
            var M = void 0;
            try {
              if (typeof s[I] != "function") {
                var it = Error((O || "React class") + ": " + x + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw it.name = "Invariant Violation", it;
              }
              M = s[I](_, I, O, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              M = B;
            }
            M && !(M instanceof Error) && (Ct($), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", x, I, typeof M), Ct(null)), M instanceof Error && !(M.message in Rt) && (Rt[M.message] = !0, Ct($), A("Failed %s type: %s", x, M.message), Ct(null));
          }
      }
    }
    var Ce = Array.isArray;
    function Pt(s) {
      return Ce(s);
    }
    function ie(s) {
      {
        var _ = typeof Symbol == "function" && Symbol.toStringTag, x = _ && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return x;
      }
    }
    function cr(s) {
      try {
        return Je(s), !1;
      } catch {
        return !0;
      }
    }
    function Je(s) {
      return "" + s;
    }
    function Qe(s) {
      if (cr(s))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ie(s)), Je(s);
    }
    var Ut = E.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tn, en, Oe;
    Oe = {};
    function fr(s) {
      if (vt.call(s, "ref")) {
        var _ = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function hr(s) {
      if (vt.call(s, "key")) {
        var _ = Object.getOwnPropertyDescriptor(s, "key").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function dr(s, _) {
      if (typeof s.ref == "string" && Ut.current && _ && Ut.current.stateNode !== _) {
        var x = Q(Ut.current.type);
        Oe[x] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(Ut.current.type), s.ref), Oe[x] = !0);
      }
    }
    function pr(s, _) {
      {
        var x = function() {
          tn || (tn = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        x.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function _r(s, _) {
      {
        var x = function() {
          en || (en = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        x.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var gr = function(s, _, x, O, $, H, I) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: s,
        key: _,
        ref: x,
        props: I,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function vr(s, _, x, O, $) {
      {
        var H, I = {}, M = null, it = null;
        x !== void 0 && (Qe(x), M = "" + x), hr(_) && (Qe(_.key), M = "" + _.key), fr(_) && (it = _.ref, dr(_, $));
        for (H in _)
          vt.call(_, H) && !lr.hasOwnProperty(H) && (I[H] = _[H]);
        if (s && s.defaultProps) {
          var B = s.defaultProps;
          for (H in B)
            I[H] === void 0 && (I[H] = B[H]);
        }
        if (M || it) {
          var Z = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          M && pr(I, Z), it && _r(I, Z);
        }
        return gr(s, M, it, $, O, Ut.current, I);
      }
    }
    var Ne = E.ReactCurrentOwner, nn = E.ReactDebugCurrentFrame;
    function It(s) {
      if (s) {
        var _ = s._owner, x = gt(s.type, s._source, _ ? _.type : null);
        nn.setExtraStackFrame(x);
      } else
        nn.setExtraStackFrame(null);
    }
    var ze;
    ze = !1;
    function Ae(s) {
      return typeof s == "object" && s !== null && s.$$typeof === e;
    }
    function rn() {
      {
        if (Ne.current) {
          var s = Q(Ne.current.type);
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
    var on = {};
    function yr(s) {
      {
        var _ = rn();
        if (!_) {
          var x = typeof s == "string" ? s : s.displayName || s.name;
          x && (_ = `

Check the top-level render call using <` + x + ">.");
        }
        return _;
      }
    }
    function an(s, _) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var x = yr(_);
        if (on[x])
          return;
        on[x] = !0;
        var O = "";
        s && s._owner && s._owner !== Ne.current && (O = " It was passed a child from " + Q(s._owner.type) + "."), It(s), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, O), It(null);
      }
    }
    function sn(s, _) {
      {
        if (typeof s != "object")
          return;
        if (Pt(s))
          for (var x = 0; x < s.length; x++) {
            var O = s[x];
            Ae(O) && an(O, _);
          }
        else if (Ae(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var $ = z(s);
          if (typeof $ == "function" && $ !== s.entries)
            for (var H = $.call(s), I; !(I = H.next()).done; )
              Ae(I.value) && an(I.value, _);
        }
      }
    }
    function wr(s) {
      {
        var _ = s.type;
        if (_ == null || typeof _ == "string")
          return;
        var x;
        if (typeof _ == "function")
          x = _.propTypes;
        else if (typeof _ == "object" && (_.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        _.$$typeof === p))
          x = _.propTypes;
        else
          return;
        if (x) {
          var O = Q(_);
          re(x, s.props, "prop", O, s);
        } else if (_.PropTypes !== void 0 && !ze) {
          ze = !0;
          var $ = Q(_);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", $ || "Unknown");
        }
        typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(s) {
      {
        for (var _ = Object.keys(s.props), x = 0; x < _.length; x++) {
          var O = _[x];
          if (O !== "children" && O !== "key") {
            It(s), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), It(null);
            break;
          }
        }
        s.ref !== null && (It(s), A("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    function un(s, _, x, O, $, H) {
      {
        var I = nt(s);
        if (!I) {
          var M = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var it = mr();
          it ? M += it : M += rn();
          var B;
          s === null ? B = "null" : Pt(s) ? B = "array" : s !== void 0 && s.$$typeof === e ? (B = "<" + (Q(s.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : B = typeof s, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, M);
        }
        var Z = vr(s, _, x, $, H);
        if (Z == null)
          return Z;
        if (I) {
          var ct = _.children;
          if (ct !== void 0)
            if (O)
              if (Pt(ct)) {
                for (var kt = 0; kt < ct.length; kt++)
                  sn(ct[kt], s);
                Object.freeze && Object.freeze(ct);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sn(ct, s);
        }
        return s === r ? xr(Z) : wr(Z), Z;
      }
    }
    function br(s, _, x) {
      return un(s, _, x, !0);
    }
    function Er(s, _, x) {
      return un(s, _, x, !1);
    }
    var Sr = Er, Tr = br;
    Wt.Fragment = r, Wt.jsx = Sr, Wt.jsxs = Tr;
  }()), Wt;
}
process.env.NODE_ENV === "production" ? ke.exports = Or() : ke.exports = Nr();
var j = ke.exports, De = "http://www.w3.org/1999/xhtml";
const hn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: De,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Se(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), hn.hasOwnProperty(e) ? { space: hn[e], local: t } : t;
}
function zr(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === De && e.documentElement.namespaceURI === De ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Ar(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function $n(t) {
  var e = Se(t);
  return (e.local ? Ar : zr)(e);
}
function Mr() {
}
function We(t) {
  return t == null ? Mr : function() {
    return this.querySelector(t);
  };
}
function Pr(t) {
  typeof t != "function" && (t = We(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, u = r[i] = new Array(o), l, f, c = 0; c < o; ++c)
      (l = a[c]) && (f = t.call(l, l.__data__, c, a)) && ("__data__" in l && (f.__data__ = l.__data__), u[c] = f);
  return new at(r, this._parents);
}
function Ir(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function kr() {
  return [];
}
function Fn(t) {
  return t == null ? kr : function() {
    return this.querySelectorAll(t);
  };
}
function Dr(t) {
  return function() {
    return Ir(t.apply(this, arguments));
  };
}
function Lr(t) {
  typeof t == "function" ? t = Dr(t) : t = Fn(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], u = o.length, l, f = 0; f < u; ++f)
      (l = o[f]) && (r.push(t.call(l, l.__data__, f, o)), i.push(l));
  return new at(r, i);
}
function Yn(t) {
  return function() {
    return this.matches(t);
  };
}
function Xn(t) {
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
  return this.select(t == null ? Yr : Fr(typeof t == "function" ? t : Xn(t)));
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
  return this.selectAll(t == null ? Ur : Vr(typeof t == "function" ? t : Xn(t)));
}
function qr(t) {
  typeof t != "function" && (t = Yn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, u = r[i] = [], l, f = 0; f < o; ++f)
      (l = a[f]) && t.call(l, l.__data__, f, a) && u.push(l);
  return new at(r, this._parents);
}
function Hn(t) {
  return new Array(t.length);
}
function jr() {
  return new at(this._enter || this._groups.map(Hn), this._parents);
}
function _e(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
_e.prototype = {
  constructor: _e,
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
    (u = e[o]) ? (u.__data__ = a[o], r[o] = u) : n[o] = new _e(t, a[o]);
  for (; o < l; ++o)
    (u = e[o]) && (i[o] = u);
}
function Br(t, e, n, r, i, a, o) {
  var u, l, f = /* @__PURE__ */ new Map(), c = e.length, p = a.length, m = new Array(c), w;
  for (u = 0; u < c; ++u)
    (l = e[u]) && (m[u] = w = o.call(l, l.__data__, u, e) + "", f.has(w) ? i[u] = l : f.set(w, l));
  for (u = 0; u < p; ++u)
    w = o.call(t, a[u], u, a) + "", (l = f.get(w)) ? (r[u] = l, l.__data__ = a[u], f.delete(w)) : n[u] = new _e(t, a[u]);
  for (u = 0; u < c; ++u)
    (l = e[u]) && f.get(m[u]) === l && (i[u] = l);
}
function Zr(t) {
  return t.__data__;
}
function Jr(t, e) {
  if (!arguments.length) return Array.from(this, Zr);
  var n = e ? Br : Kr, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Gr(t));
  for (var a = i.length, o = new Array(a), u = new Array(a), l = new Array(a), f = 0; f < a; ++f) {
    var c = r[f], p = i[f], m = p.length, w = Qr(t.call(c, c && c.__data__, f, r)), N = w.length, T = u[f] = new Array(N), z = o[f] = new Array(N), E = l[f] = new Array(m);
    n(c, p, T, z, E, w, e);
    for (var A = 0, V = 0, G, X; A < N; ++A)
      if (G = T[A]) {
        for (A >= V && (V = A + 1); !(X = z[V]) && ++V < N; ) ;
        G._next = X || null;
      }
  }
  return o = new at(o, r), o._enter = u, o._exit = l, o;
}
function Qr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ti() {
  return new at(this._exit || this._groups.map(Hn), this._parents);
}
function ei(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function ni(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), u = new Array(i), l = 0; l < o; ++l)
    for (var f = n[l], c = r[l], p = f.length, m = u[l] = new Array(p), w, N = 0; N < p; ++N)
      (w = f[N] || c[N]) && (m[N] = w);
  for (; l < i; ++l)
    u[l] = n[l];
  return new at(u, this._parents);
}
function ri() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function ii(t) {
  t || (t = oi);
  function e(p, m) {
    return p && m ? t(p.__data__, m.__data__) : !p - !m;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], u = o.length, l = i[a] = new Array(u), f, c = 0; c < u; ++c)
      (f = o[c]) && (l[c] = f);
    l.sort(e);
  }
  return new at(i, this._parents).order();
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
  var n = Se(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? di : hi : typeof e == "function" ? n.local ? vi : gi : n.local ? _i : pi)(n, e));
}
function Un(t) {
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
  return arguments.length > 1 ? this.each((e == null ? yi : typeof e == "function" ? xi : wi)(t, e, n ?? "")) : Yt(this.node(), t);
}
function Yt(t, e) {
  return t.style.getPropertyValue(e) || Un(t).getComputedStyle(t, null).getPropertyValue(e);
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
function Vn(t) {
  return t.trim().split(/^|\s+/);
}
function qe(t) {
  return t.classList || new Wn(t);
}
function Wn(t) {
  this._node = t, this._names = Vn(t.getAttribute("class") || "");
}
Wn.prototype = {
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
function qn(t, e) {
  for (var n = qe(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function jn(t, e) {
  for (var n = qe(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Ci(t) {
  return function() {
    qn(this, t);
  };
}
function Oi(t) {
  return function() {
    jn(this, t);
  };
}
function Ni(t, e) {
  return function() {
    (e.apply(this, arguments) ? qn : jn)(this, t);
  };
}
function zi(t, e) {
  var n = Vn(t + "");
  if (arguments.length < 2) {
    for (var r = qe(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
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
function Pi(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Ii(t) {
  return arguments.length ? this.each(t == null ? Ai : (typeof t == "function" ? Pi : Mi)(t)) : this.node().textContent;
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
  var e = typeof t == "function" ? t : $n(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Vi() {
  return null;
}
function Wi(t, e) {
  var n = typeof t == "function" ? t : $n(t), r = e == null ? Vi : typeof e == "function" ? e : We(e);
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
function Bi(t) {
  return this.select(t ? Ki : Gi);
}
function Zi(t) {
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
function Gn(t, e, n) {
  var r = Un(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function ro(t, e) {
  return function() {
    return Gn(this, t, e);
  };
}
function io(t, e) {
  return function() {
    return Gn(this, t, e.apply(this, arguments));
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
var Kn = [null];
function at(t, e) {
  this._groups = t, this._parents = e;
}
function te() {
  return new at([[document.documentElement]], Kn);
}
function so() {
  return this;
}
at.prototype = te.prototype = {
  constructor: at,
  select: Pr,
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
  text: Ii,
  html: $i,
  raise: Yi,
  lower: Hi,
  append: Ui,
  insert: Wi,
  remove: ji,
  clone: Bi,
  datum: Zi,
  on: no,
  dispatch: oo,
  [Symbol.iterator]: ao
};
function tt(t) {
  return typeof t == "string" ? new at([[document.querySelector(t)]], [document.documentElement]) : new at([[t]], Kn);
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
function je() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new fe(n);
}
function fe(t) {
  this._ = t;
}
function lo(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
fe.prototype = je.prototype = {
  constructor: fe,
  on: function(t, e) {
    var n = this._, r = lo(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = fo(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = dn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = dn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new fe(t);
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
function dn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = co, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
const Le = { capture: !0, passive: !1 };
function $e(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ho(t) {
  var e = t.document.documentElement, n = tt(t).on("dragstart.drag", $e, Le);
  "onselectstart" in e ? n.on("selectstart.drag", $e, Le) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function po(t, e) {
  var n = t.document.documentElement, r = tt(t).on("dragstart.drag", null);
  e && (r.on("click.drag", $e, Le), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
function Ge(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Bn(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function ee() {
}
var Bt = 0.7, ge = 1 / Bt, $t = "\\s*([+-]?\\d+)\\s*", Zt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _o = /^#([0-9a-f]{3,8})$/, go = new RegExp(`^rgb\\(${$t},${$t},${$t}\\)$`), vo = new RegExp(`^rgb\\(${pt},${pt},${pt}\\)$`), mo = new RegExp(`^rgba\\(${$t},${$t},${$t},${Zt}\\)$`), yo = new RegExp(`^rgba\\(${pt},${pt},${pt},${Zt}\\)$`), wo = new RegExp(`^hsl\\(${Zt},${pt},${pt}\\)$`), xo = new RegExp(`^hsla\\(${Zt},${pt},${pt},${Zt}\\)$`), pn = {
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
Ge(ee, Jt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _n,
  // Deprecated! Use color.formatHex.
  formatHex: _n,
  formatHex8: bo,
  formatHsl: Eo,
  formatRgb: gn,
  toString: gn
});
function _n() {
  return this.rgb().formatHex();
}
function bo() {
  return this.rgb().formatHex8();
}
function Eo() {
  return Zn(this).formatHsl();
}
function gn() {
  return this.rgb().formatRgb();
}
function Jt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = _o.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? vn(e) : n === 3 ? new ot(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? oe(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? oe(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = go.exec(t)) ? new ot(e[1], e[2], e[3], 1) : (e = vo.exec(t)) ? new ot(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = mo.exec(t)) ? oe(e[1], e[2], e[3], e[4]) : (e = yo.exec(t)) ? oe(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = wo.exec(t)) ? wn(e[1], e[2] / 100, e[3] / 100, 1) : (e = xo.exec(t)) ? wn(e[1], e[2] / 100, e[3] / 100, e[4]) : pn.hasOwnProperty(t) ? vn(pn[t]) : t === "transparent" ? new ot(NaN, NaN, NaN, 0) : null;
}
function vn(t) {
  return new ot(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function oe(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new ot(t, e, n, r);
}
function So(t) {
  return t instanceof ee || (t = Jt(t)), t ? (t = t.rgb(), new ot(t.r, t.g, t.b, t.opacity)) : new ot();
}
function Fe(t, e, n, r) {
  return arguments.length === 1 ? So(t) : new ot(t, e, n, r ?? 1);
}
function ot(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Ge(ot, Fe, Bn(ee, {
  brighter(t) {
    return t = t == null ? ge : Math.pow(ge, t), new ot(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Bt : Math.pow(Bt, t), new ot(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ot(zt(this.r), zt(this.g), zt(this.b), ve(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: mn,
  // Deprecated! Use color.formatHex.
  formatHex: mn,
  formatHex8: To,
  formatRgb: yn,
  toString: yn
}));
function mn() {
  return `#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}`;
}
function To() {
  return `#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}${Nt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function yn() {
  const t = ve(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${zt(this.r)}, ${zt(this.g)}, ${zt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ve(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function zt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Nt(t) {
  return t = zt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function wn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new ht(t, e, n, r);
}
function Zn(t) {
  if (t instanceof ht) return new ht(t.h, t.s, t.l, t.opacity);
  if (t instanceof ee || (t = Jt(t)), !t) return new ht();
  if (t instanceof ht) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, u = a - i, l = (a + i) / 2;
  return u ? (e === a ? o = (n - r) / u + (n < r) * 6 : n === a ? o = (r - e) / u + 2 : o = (e - n) / u + 4, u /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : u = l > 0 && l < 1 ? 0 : o, new ht(o, u, l, t.opacity);
}
function Ro(t, e, n, r) {
  return arguments.length === 1 ? Zn(t) : new ht(t, e, n, r ?? 1);
}
function ht(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Ge(ht, Ro, Bn(ee, {
  brighter(t) {
    return t = t == null ? ge : Math.pow(ge, t), new ht(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Bt : Math.pow(Bt, t), new ht(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new ot(
      Me(t >= 240 ? t - 240 : t + 120, i, r),
      Me(t, i, r),
      Me(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new ht(xn(this.h), ae(this.s), ae(this.l), ve(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ve(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${xn(this.h)}, ${ae(this.s) * 100}%, ${ae(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function xn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ae(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Me(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Jn = (t) => () => t;
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
  return (t = +t) == 1 ? Qn : function(e, n) {
    return n - e ? Oo(e, n, t) : Jn(isNaN(e) ? n : e);
  };
}
function Qn(t, e) {
  var n = e - t;
  return n ? Co(t, n) : Jn(isNaN(t) ? e : t);
}
const bn = function t(e) {
  var n = No(e);
  function r(i, a) {
    var o = n((i = Fe(i)).r, (a = Fe(a)).r), u = n(i.g, a.g), l = n(i.b, a.b), f = Qn(i.opacity, a.opacity);
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
var Ye = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Pe = new RegExp(Ye.source, "g");
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
  var n = Ye.lastIndex = Pe.lastIndex = 0, r, i, a, o = -1, u = [], l = [];
  for (t = t + "", e = e + ""; (r = Ye.exec(t)) && (i = Pe.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), u[o] ? u[o] += a : u[++o] = a), (r = r[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, l.push({ i: o, x: St(r, i) })), n = Pe.lastIndex;
  return n < e.length && (a = e.slice(n), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? l[0] ? Ao(l[0].x) : zo(e) : (e = l.length, function(f) {
    for (var c = 0, p; c < e; ++c) u[(p = l[c]).i] = p.x(f);
    return u.join("");
  });
}
var En = 180 / Math.PI, Xe = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function tr(t, e, n, r, i, a) {
  var o, u, l;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (l = t * n + e * r) && (n -= t * l, r -= e * l), (u = Math.sqrt(n * n + r * r)) && (n /= u, r /= u, l /= u), t * r < e * n && (t = -t, e = -e, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * En,
    skewX: Math.atan(l) * En,
    scaleX: o,
    scaleY: u
  };
}
var se;
function Po(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Xe : tr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Io(t) {
  return t == null || (se || (se = document.createElementNS("http://www.w3.org/2000/svg", "g")), se.setAttribute("transform", t), !(t = se.transform.baseVal.consolidate())) ? Xe : (t = t.matrix, tr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function er(t, e, n, r) {
  function i(f) {
    return f.length ? f.pop() + " " : "";
  }
  function a(f, c, p, m, w, N) {
    if (f !== p || c !== m) {
      var T = w.push("translate(", null, e, null, n);
      N.push({ i: T - 4, x: St(f, p) }, { i: T - 2, x: St(c, m) });
    } else (p || m) && w.push("translate(" + p + e + m + n);
  }
  function o(f, c, p, m) {
    f !== c ? (f - c > 180 ? c += 360 : c - f > 180 && (f += 360), m.push({ i: p.push(i(p) + "rotate(", null, r) - 2, x: St(f, c) })) : c && p.push(i(p) + "rotate(" + c + r);
  }
  function u(f, c, p, m) {
    f !== c ? m.push({ i: p.push(i(p) + "skewX(", null, r) - 2, x: St(f, c) }) : c && p.push(i(p) + "skewX(" + c + r);
  }
  function l(f, c, p, m, w, N) {
    if (f !== p || c !== m) {
      var T = w.push(i(w) + "scale(", null, ",", null, ")");
      N.push({ i: T - 4, x: St(f, p) }, { i: T - 2, x: St(c, m) });
    } else (p !== 1 || m !== 1) && w.push(i(w) + "scale(" + p + "," + m + ")");
  }
  return function(f, c) {
    var p = [], m = [];
    return f = t(f), c = t(c), a(f.translateX, f.translateY, c.translateX, c.translateY, p, m), o(f.rotate, c.rotate, p, m), u(f.skewX, c.skewX, p, m), l(f.scaleX, f.scaleY, c.scaleX, c.scaleY, p, m), f = c = null, function(w) {
      for (var N = -1, T = m.length, z; ++N < T; ) p[(z = m[N]).i] = z.x(w);
      return p.join("");
    };
  };
}
var ko = er(Po, "px, ", "px)", "deg)"), Do = er(Io, ", ", ")", ")"), Lo = 1e-12;
function Sn(t) {
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
    var u = a[0], l = a[1], f = a[2], c = o[0], p = o[1], m = o[2], w = c - u, N = p - l, T = w * w + N * N, z, E;
    if (T < Lo)
      E = Math.log(m / f) / e, z = function(D) {
        return [
          u + D * w,
          l + D * N,
          f * Math.exp(e * D * E)
        ];
      };
    else {
      var A = Math.sqrt(T), V = (m * m - f * f + r * T) / (2 * f * n * A), G = (m * m - f * f - r * T) / (2 * m * n * A), X = Math.log(Math.sqrt(V * V + 1) - V), k = Math.log(Math.sqrt(G * G + 1) - G);
      E = (k - X) / e, z = function(D) {
        var L = D * E, W = Sn(X), nt = f / (n * A) * (W * Fo(e * L + X) - $o(X));
        return [
          u + nt * w,
          l + nt * N,
          f * W / Sn(e * L + X)
        ];
      };
    }
    return z.duration = E * 1e3 * e / Math.SQRT2, z;
  }
  return i.rho = function(a) {
    var o = Math.max(1e-3, +a), u = o * o, l = u * u;
    return t(o, u, l);
  }, i;
}(Math.SQRT2, 2, 4);
var Xt = 0, Gt = 0, qt = 0, nr = 1e3, me, Kt, ye = 0, At = 0, Te = 0, Qt = typeof performance == "object" && performance.now ? performance : Date, rr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ke() {
  return At || (rr(Xo), At = Qt.now() + Te);
}
function Xo() {
  At = 0;
}
function we() {
  this._call = this._time = this._next = null;
}
we.prototype = ir.prototype = {
  constructor: we,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ke() : +n) + (e == null ? 0 : +e), !this._next && Kt !== this && (Kt ? Kt._next = this : me = this, Kt = this), this._call = t, this._time = n, He();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, He());
  }
};
function ir(t, e, n) {
  var r = new we();
  return r.restart(t, e, n), r;
}
function Ho() {
  Ke(), ++Xt;
  for (var t = me, e; t; )
    (e = At - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Xt;
}
function Tn() {
  At = (ye = Qt.now()) + Te, Xt = Gt = 0;
  try {
    Ho();
  } finally {
    Xt = 0, Vo(), At = 0;
  }
}
function Uo() {
  var t = Qt.now(), e = t - ye;
  e > nr && (Te -= e, ye = t);
}
function Vo() {
  for (var t, e = me, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : me = n);
  Kt = t, He(r);
}
function He(t) {
  if (!Xt) {
    Gt && (Gt = clearTimeout(Gt));
    var e = t - At;
    e > 24 ? (t < 1 / 0 && (Gt = setTimeout(Tn, t - Qt.now() - Te)), qt && (qt = clearInterval(qt))) : (qt || (ye = Qt.now(), qt = setInterval(Uo, nr)), Xt = 1, rr(Tn));
  }
}
function Rn(t, e, n) {
  var r = new we();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Wo = je("start", "end", "cancel", "interrupt"), qo = [], or = 0, Cn = 1, Ue = 2, he = 3, On = 4, Ve = 5, de = 6;
function Re(t, e, n, r, i, a) {
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
    state: or
  });
}
function Be(t, e) {
  var n = dt(t, e);
  if (n.state > or) throw new Error("too late; already scheduled");
  return n;
}
function _t(t, e) {
  var n = dt(t, e);
  if (n.state > he) throw new Error("too late; already running");
  return n;
}
function dt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function jo(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = ir(a, 0, n.time);
  function a(f) {
    n.state = Cn, n.timer.restart(o, n.delay, n.time), n.delay <= f && o(f - n.delay);
  }
  function o(f) {
    var c, p, m, w;
    if (n.state !== Cn) return l();
    for (c in r)
      if (w = r[c], w.name === n.name) {
        if (w.state === he) return Rn(o);
        w.state === On ? (w.state = de, w.timer.stop(), w.on.call("interrupt", t, t.__data__, w.index, w.group), delete r[c]) : +c < e && (w.state = de, w.timer.stop(), w.on.call("cancel", t, t.__data__, w.index, w.group), delete r[c]);
      }
    if (Rn(function() {
      n.state === he && (n.state = On, n.timer.restart(u, n.delay, n.time), u(f));
    }), n.state = Ue, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Ue) {
      for (n.state = he, i = new Array(m = n.tween.length), c = 0, p = -1; c < m; ++c)
        (w = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++p] = w);
      i.length = p + 1;
    }
  }
  function u(f) {
    for (var c = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(l), n.state = Ve, 1), p = -1, m = i.length; ++p < m; )
      i[p].call(t, c);
    n.state === Ve && (n.on.call("end", t, t.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = de, n.timer.stop(), delete r[e];
    for (var f in r) return;
    delete t.__transition;
  }
}
function pe(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > Ue && r.state < Ve, r.state = de, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function Go(t) {
  return this.each(function() {
    pe(this, t);
  });
}
function Ko(t, e) {
  var n, r;
  return function() {
    var i = _t(this, t), a = i.tween;
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
function Bo(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = _t(this, t), o = a.tween;
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
    for (var r = dt(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Ko : Bo)(n, t, e));
}
function Ze(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = _t(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return dt(i, r).value[e];
  };
}
function ar(t, e) {
  var n;
  return (typeof e == "number" ? St : e instanceof Jt ? bn : (n = Jt(e)) ? (e = n, bn) : Mo)(t, e);
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
  var n = Se(t), r = n === "transform" ? Do : ar;
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
  var r = Se(t);
  return this.tween(n, (r.local ? sa : ua)(r, e));
}
function la(t, e) {
  return function() {
    Be(this, t).delay = +e.apply(this, arguments);
  };
}
function fa(t, e) {
  return e = +e, function() {
    Be(this, t).delay = e;
  };
}
function ha(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? la : fa)(e, t)) : dt(this.node(), e).delay;
}
function da(t, e) {
  return function() {
    _t(this, t).duration = +e.apply(this, arguments);
  };
}
function pa(t, e) {
  return e = +e, function() {
    _t(this, t).duration = e;
  };
}
function _a(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? da : pa)(e, t)) : dt(this.node(), e).duration;
}
function ga(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    _t(this, t).ease = e;
  };
}
function va(t) {
  var e = this._id;
  return arguments.length ? this.each(ga(e, t)) : dt(this.node(), e).ease;
}
function ma(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    _t(this, t).ease = n;
  };
}
function ya(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ma(this._id, t));
}
function wa(t) {
  typeof t != "function" && (t = Yn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, u = r[i] = [], l, f = 0; f < o; ++f)
      (l = a[f]) && t.call(l, l.__data__, f, a) && u.push(l);
  return new xt(r, this._parents, this._name, this._id);
}
function xa(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), u = 0; u < a; ++u)
    for (var l = e[u], f = n[u], c = l.length, p = o[u] = new Array(c), m, w = 0; w < c; ++w)
      (m = l[w] || f[w]) && (p[w] = m);
  for (; u < r; ++u)
    o[u] = e[u];
  return new xt(o, this._parents, this._name, this._id);
}
function ba(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Ea(t, e, n) {
  var r, i, a = ba(e) ? Be : _t;
  return function() {
    var o = a(this, t), u = o.on;
    u !== r && (i = (r = u).copy()).on(e, n), o.on = i;
  };
}
function Sa(t, e) {
  var n = this._id;
  return arguments.length < 2 ? dt(this.node(), n).on.on(t) : this.each(Ea(n, t, e));
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
  typeof t != "function" && (t = We(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var u = r[o], l = u.length, f = a[o] = new Array(l), c, p, m = 0; m < l; ++m)
      (c = u[m]) && (p = t.call(c, c.__data__, m, u)) && ("__data__" in c && (p.__data__ = c.__data__), f[m] = p, Re(f[m], e, n, m, f, dt(c, n)));
  return new xt(a, this._parents, e, n);
}
function Oa(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Fn(t));
  for (var r = this._groups, i = r.length, a = [], o = [], u = 0; u < i; ++u)
    for (var l = r[u], f = l.length, c, p = 0; p < f; ++p)
      if (c = l[p]) {
        for (var m = t.call(c, c.__data__, p, l), w, N = dt(c, n), T = 0, z = m.length; T < z; ++T)
          (w = m[T]) && Re(w, e, n, T, m, N);
        a.push(m), o.push(c);
      }
  return new xt(a, o, e, n);
}
var Na = te.prototype.constructor;
function za() {
  return new Na(this._groups, this._parents);
}
function Aa(t, e) {
  var n, r, i;
  return function() {
    var a = Yt(this, t), o = (this.style.removeProperty(t), Yt(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function sr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ma(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = Yt(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Pa(t, e, n) {
  var r, i, a;
  return function() {
    var o = Yt(this, t), u = n(this), l = u + "";
    return u == null && (l = u = (this.style.removeProperty(t), Yt(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = e(r = o, u));
  };
}
function Ia(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, u;
  return function() {
    var l = _t(this, t), f = l.on, c = l.value[a] == null ? u || (u = sr(e)) : void 0;
    (f !== n || i !== c) && (r = (n = f).copy()).on(o, i = c), l.on = r;
  };
}
function ka(t, e, n) {
  var r = (t += "") == "transform" ? ko : ar;
  return e == null ? this.styleTween(t, Aa(t, r)).on("end.style." + t, sr(t)) : typeof e == "function" ? this.styleTween(t, Pa(t, r, Ze(this, "style." + t, e))).each(Ia(this._id, t)) : this.styleTween(t, Ma(t, r, e), n).on("end.style." + t, null);
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
  for (var t = this._name, e = this._id, n = ur(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], u = o.length, l, f = 0; f < u; ++f)
      if (l = o[f]) {
        var c = dt(l, e);
        Re(l, t, n, f, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new xt(r, this._parents, t, n);
}
function qa() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var u = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var f = _t(this, r), c = f.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(u), e._.interrupt.push(u), e._.end.push(l)), f.on = e;
    }), i === 0 && a();
  });
}
var ja = 0;
function xt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function ur() {
  return ++ja;
}
var yt = te.prototype;
xt.prototype = {
  constructor: xt,
  select: Ca,
  selectAll: Oa,
  selectChild: yt.selectChild,
  selectChildren: yt.selectChildren,
  filter: wa,
  merge: xa,
  selection: za,
  transition: Wa,
  call: yt.call,
  nodes: yt.nodes,
  node: yt.node,
  size: yt.size,
  empty: yt.empty,
  each: yt.each,
  on: Sa,
  attr: ia,
  attrTween: ca,
  style: ka,
  styleTween: $a,
  text: Xa,
  textTween: Va,
  remove: Ra,
  tween: Zo,
  delay: ha,
  duration: _a,
  ease: va,
  easeVarying: ya,
  end: qa,
  [Symbol.iterator]: yt[Symbol.iterator]
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
function Ba(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Za(t) {
  var e, n;
  t instanceof xt ? (e = t._id, t = t._name) : (e = ur(), (n = Ka).time = Ke(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], u = o.length, l, f = 0; f < u; ++f)
      (l = o[f]) && Re(l, t, e, f, o, n || Ba(l, e));
  return new xt(r, this._parents, t, e);
}
te.prototype.interrupt = Go;
te.prototype.transition = Za;
const ue = (t) => () => t;
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
function wt(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
wt.prototype = {
  constructor: wt,
  scale: function(t) {
    return t === 1 ? this : new wt(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new wt(this.k, this.x + this.k * t, this.y + this.k * e);
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
var Dt = new wt(1, 0, 0);
wt.prototype;
function Ie(t) {
  t.stopImmediatePropagation();
}
function jt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Qa(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function ts() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Nn() {
  return this.__zoom || Dt;
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
function zn() {
  var t = Qa, e = ts, n = rs, r = es, i = ns, a = [0, 1 / 0], o = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], u = 250, l = Yo, f = je("start", "zoom", "end"), c, p, m, w = 500, N = 150, T = 0, z = 10;
  function E(h) {
    h.property("__zoom", Nn).on("wheel.zoom", L, { passive: !1 }).on("mousedown.zoom", W).on("dblclick.zoom", nt).filter(i).on("touchstart.zoom", st).on("touchmove.zoom", J).on("touchend.zoom touchcancel.zoom", Q).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  E.transform = function(h, b, d, g) {
    var v = h.selection ? h.selection() : h;
    v.property("__zoom", Nn), h !== v ? X(h, b, d, g) : v.interrupt().each(function() {
      k(this, arguments).event(g).start().zoom(null, typeof b == "function" ? b.apply(this, arguments) : b).end();
    });
  }, E.scaleBy = function(h, b, d, g) {
    E.scaleTo(h, function() {
      var v = this.__zoom.k, y = typeof b == "function" ? b.apply(this, arguments) : b;
      return v * y;
    }, d, g);
  }, E.scaleTo = function(h, b, d, g) {
    E.transform(h, function() {
      var v = e.apply(this, arguments), y = this.__zoom, S = d == null ? G(v) : typeof d == "function" ? d.apply(this, arguments) : d, R = y.invert(S), C = typeof b == "function" ? b.apply(this, arguments) : b;
      return n(V(A(y, C), S, R), v, o);
    }, d, g);
  }, E.translateBy = function(h, b, d, g) {
    E.transform(h, function() {
      return n(this.__zoom.translate(
        typeof b == "function" ? b.apply(this, arguments) : b,
        typeof d == "function" ? d.apply(this, arguments) : d
      ), e.apply(this, arguments), o);
    }, null, g);
  }, E.translateTo = function(h, b, d, g, v) {
    E.transform(h, function() {
      var y = e.apply(this, arguments), S = this.__zoom, R = g == null ? G(y) : typeof g == "function" ? g.apply(this, arguments) : g;
      return n(Dt.translate(R[0], R[1]).scale(S.k).translate(
        typeof b == "function" ? -b.apply(this, arguments) : -b,
        typeof d == "function" ? -d.apply(this, arguments) : -d
      ), y, o);
    }, g, v);
  };
  function A(h, b) {
    return b = Math.max(a[0], Math.min(a[1], b)), b === h.k ? h : new wt(b, h.x, h.y);
  }
  function V(h, b, d) {
    var g = b[0] - d[0] * h.k, v = b[1] - d[1] * h.k;
    return g === h.x && v === h.y ? h : new wt(h.k, g, v);
  }
  function G(h) {
    return [(+h[0][0] + +h[1][0]) / 2, (+h[0][1] + +h[1][1]) / 2];
  }
  function X(h, b, d, g) {
    h.on("start.zoom", function() {
      k(this, arguments).event(g).start();
    }).on("interrupt.zoom end.zoom", function() {
      k(this, arguments).event(g).end();
    }).tween("zoom", function() {
      var v = this, y = arguments, S = k(v, y).event(g), R = e.apply(v, y), C = d == null ? G(R) : typeof d == "function" ? d.apply(v, y) : d, F = Math.max(R[1][0] - R[0][0], R[1][1] - R[0][1]), P = v.__zoom, U = typeof b == "function" ? b.apply(v, y) : b, Y = l(P.invert(C).concat(F / P.k), U.invert(C).concat(F / U.k));
      return function(q) {
        if (q === 1) q = U;
        else {
          var K = Y(q), rt = F / K[2];
          q = new wt(rt, C[0] - K[0] * rt, C[1] - K[1] * rt);
        }
        S.zoom(null, q);
      };
    });
  }
  function k(h, b, d) {
    return !d && h.__zooming || new D(h, b);
  }
  function D(h, b) {
    this.that = h, this.args = b, this.active = 0, this.sourceEvent = null, this.extent = e.apply(h, b), this.taps = 0;
  }
  D.prototype = {
    event: function(h) {
      return h && (this.sourceEvent = h), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(h, b) {
      return this.mouse && h !== "mouse" && (this.mouse[1] = b.invert(this.mouse[0])), this.touch0 && h !== "touch" && (this.touch0[1] = b.invert(this.touch0[0])), this.touch1 && h !== "touch" && (this.touch1[1] = b.invert(this.touch1[0])), this.that.__zoom = b, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(h) {
      var b = tt(this.that).datum();
      f.call(
        h,
        this.that,
        new Ja(h, {
          sourceEvent: this.sourceEvent,
          target: E,
          type: h,
          transform: this.that.__zoom,
          dispatch: f
        }),
        b
      );
    }
  };
  function L(h, ...b) {
    if (!t.apply(this, arguments)) return;
    var d = k(this, b).event(h), g = this.__zoom, v = Math.max(a[0], Math.min(a[1], g.k * Math.pow(2, r.apply(this, arguments)))), y = Et(h);
    if (d.wheel)
      (d.mouse[0][0] !== y[0] || d.mouse[0][1] !== y[1]) && (d.mouse[1] = g.invert(d.mouse[0] = y)), clearTimeout(d.wheel);
    else {
      if (g.k === v) return;
      d.mouse = [y, g.invert(y)], pe(this), d.start();
    }
    jt(h), d.wheel = setTimeout(S, N), d.zoom("mouse", n(V(A(g, v), d.mouse[0], d.mouse[1]), d.extent, o));
    function S() {
      d.wheel = null, d.end();
    }
  }
  function W(h, ...b) {
    if (m || !t.apply(this, arguments)) return;
    var d = h.currentTarget, g = k(this, b, !0).event(h), v = tt(h.view).on("mousemove.zoom", C, !0).on("mouseup.zoom", F, !0), y = Et(h, d), S = h.clientX, R = h.clientY;
    ho(h.view), Ie(h), g.mouse = [y, this.__zoom.invert(y)], pe(this), g.start();
    function C(P) {
      if (jt(P), !g.moved) {
        var U = P.clientX - S, Y = P.clientY - R;
        g.moved = U * U + Y * Y > T;
      }
      g.event(P).zoom("mouse", n(V(g.that.__zoom, g.mouse[0] = Et(P, d), g.mouse[1]), g.extent, o));
    }
    function F(P) {
      v.on("mousemove.zoom mouseup.zoom", null), po(P.view, g.moved), jt(P), g.event(P).end();
    }
  }
  function nt(h, ...b) {
    if (t.apply(this, arguments)) {
      var d = this.__zoom, g = Et(h.changedTouches ? h.changedTouches[0] : h, this), v = d.invert(g), y = d.k * (h.shiftKey ? 0.5 : 2), S = n(V(A(d, y), g, v), e.apply(this, b), o);
      jt(h), u > 0 ? tt(this).transition().duration(u).call(X, S, g, h) : tt(this).call(E.transform, S, g, h);
    }
  }
  function st(h, ...b) {
    if (t.apply(this, arguments)) {
      var d = h.touches, g = d.length, v = k(this, b, h.changedTouches.length === g).event(h), y, S, R, C;
      for (Ie(h), S = 0; S < g; ++S)
        R = d[S], C = Et(R, this), C = [C, this.__zoom.invert(C), R.identifier], v.touch0 ? !v.touch1 && v.touch0[2] !== C[2] && (v.touch1 = C, v.taps = 0) : (v.touch0 = C, y = !0, v.taps = 1 + !!c);
      c && (c = clearTimeout(c)), y && (v.taps < 2 && (p = C[0], c = setTimeout(function() {
        c = null;
      }, w)), pe(this), v.start());
    }
  }
  function J(h, ...b) {
    if (this.__zooming) {
      var d = k(this, b).event(h), g = h.changedTouches, v = g.length, y, S, R, C;
      for (jt(h), y = 0; y < v; ++y)
        S = g[y], R = Et(S, this), d.touch0 && d.touch0[2] === S.identifier ? d.touch0[0] = R : d.touch1 && d.touch1[2] === S.identifier && (d.touch1[0] = R);
      if (S = d.that.__zoom, d.touch1) {
        var F = d.touch0[0], P = d.touch0[1], U = d.touch1[0], Y = d.touch1[1], q = (q = U[0] - F[0]) * q + (q = U[1] - F[1]) * q, K = (K = Y[0] - P[0]) * K + (K = Y[1] - P[1]) * K;
        S = A(S, Math.sqrt(q / K)), R = [(F[0] + U[0]) / 2, (F[1] + U[1]) / 2], C = [(P[0] + Y[0]) / 2, (P[1] + Y[1]) / 2];
      } else if (d.touch0) R = d.touch0[0], C = d.touch0[1];
      else return;
      d.zoom("touch", n(V(S, R, C), d.extent, o));
    }
  }
  function Q(h, ...b) {
    if (this.__zooming) {
      var d = k(this, b).event(h), g = h.changedTouches, v = g.length, y, S;
      for (Ie(h), m && clearTimeout(m), m = setTimeout(function() {
        m = null;
      }, w), y = 0; y < v; ++y)
        S = g[y], d.touch0 && d.touch0[2] === S.identifier ? delete d.touch0 : d.touch1 && d.touch1[2] === S.identifier && delete d.touch1;
      if (d.touch1 && !d.touch0 && (d.touch0 = d.touch1, delete d.touch1), d.touch0) d.touch0[1] = this.__zoom.invert(d.touch0[0]);
      else if (d.end(), d.taps === 2 && (S = Et(S, this), Math.hypot(p[0] - S[0], p[1] - S[1]) < z)) {
        var R = tt(this).on("dblclick.zoom");
        R && R.apply(this, arguments);
      }
    }
  }
  return E.wheelDelta = function(h) {
    return arguments.length ? (r = typeof h == "function" ? h : ue(+h), E) : r;
  }, E.filter = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : ue(!!h), E) : t;
  }, E.touchable = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : ue(!!h), E) : i;
  }, E.extent = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : ue([[+h[0][0], +h[0][1]], [+h[1][0], +h[1][1]]]), E) : e;
  }, E.scaleExtent = function(h) {
    return arguments.length ? (a[0] = +h[0], a[1] = +h[1], E) : [a[0], a[1]];
  }, E.translateExtent = function(h) {
    return arguments.length ? (o[0][0] = +h[0][0], o[1][0] = +h[1][0], o[0][1] = +h[0][1], o[1][1] = +h[1][1], E) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
  }, E.constrain = function(h) {
    return arguments.length ? (n = h, E) : n;
  }, E.duration = function(h) {
    return arguments.length ? (u = +h, E) : u;
  }, E.interpolate = function(h) {
    return arguments.length ? (l = h, E) : l;
  }, E.on = function() {
    var h = f.on.apply(f, arguments);
    return h === f ? E : h;
  }, E.clickDistance = function(h) {
    return arguments.length ? (T = (h = +h) * h, E) : Math.sqrt(T);
  }, E.tapDistance = function(h) {
    return arguments.length ? (z = +h, E) : z;
  }, E;
}
const et = {
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
}, xe = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_CENTER: "bottom-center"
}, lt = {
  ...xe,
  TOP_CENTER: "top-center",
  BOTTOM_RIGHT: "bottom-right",
  CENTER_LEFT: "center-left",
  CENTER_RIGHT: "center-right",
  CENTER_CENTER: "center-center"
}, Ft = ({
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
    case lt.TOP_LEFT:
      return {
        updatedX: r + ((e.x - n.x) * c + u.x),
        updatedY: i + ((e.y - n.y) * c + u.y)
      };
    case lt.TOP_CENTER:
      return l = e.width / 2 - (n.x * c + n.width * c / 2) + e.x, {
        updatedX: r + l + u.x,
        updatedY: i + ((e.y - n.y) * c + u.y)
      };
    case lt.TOP_RIGHT:
      return {
        updatedX: r + (e.width - (Math.abs(e.x - n.x * c) + n.width * c)) + u.x,
        updatedY: i + ((e.y - n.y) * c + u.y)
      };
    case lt.CENTER_LEFT:
      return f = e.height / 2 - (Math.abs(e.y - n.y) * c + n.height * c / 2), {
        updatedX: r + ((e.x - n.x) * c + u.x),
        updatedY: i + f + u.y
      };
    case lt.CENTER_CENTER:
      return l = e.width / 2 - (Math.abs(e.x - n.x) * c + n.width * c / 2), f = e.height / 2 - (Math.abs(e.y - n.y) * c + n.height * c / 2), {
        updatedX: r + l + u.x,
        updatedY: i + f + u.y
      };
    case lt.CENTER_RIGHT:
      return f = e.height / 2 - (Math.abs(e.y - n.y) * c + n.height * c / 2), {
        updatedX: r + (e.width - (Math.abs(e.x - n.x) * c + n.width * c)) + u.x,
        updatedY: i + f + u.y
      };
    case lt.BOTTOM_LEFT:
      return {
        updatedX: r + ((e.x - n.x) * c + u.x),
        updatedY: i + (e.height - (Math.abs(e.y - n.y) * c + n.height * c)) + u.y
      };
    case lt.BOTTOM_CENTER:
      return l = e.width / 2 - (Math.abs(e.x - n.x) * c + n.width * c / 2), {
        updatedX: r + l + u.x,
        updatedY: i + (e.height - (Math.abs(e.y - n.y) * c + n.height * c)) + u.y
      };
    case lt.BOTTOM_RIGHT:
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
}, An = (t) => {
  const [e, n] = [Math.max(t - 0.2, 0.2), t];
  return [
    et.INITIAL_SCROLLBAR_SIZE / e,
    et.INITIAL_SCROLLBAR_SIZE / n
  ];
}, os = ({
  isVertical: t,
  state: e,
  scrollDelta: n
}) => {
  const r = t ? e.verticalPos : e.horizontalPos, i = t ? e.verticalSize : e.horizontalSize, a = t ? e.verticalSizeDecrease : e.horizontalSizeDecrease, o = t ? n.deltaY : n.deltaX;
  return { scrollPos: r, scrollSize: i, scrollSizeDecrease: a, deltaValue: o };
}, Mn = ({
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
  let [c, p] = [
    i + l,
    o
  ];
  if (c < 1)
    c = 0, p -= Math.abs(f);
  else if (c + a > r) {
    const m = r - Math.max(
      et.MIN_SCROLLBAR_SIZE,
      a - Math.abs(p)
    );
    c = Math.min(
      r - (a + p),
      m
    ), p -= f;
  } else if (p !== 0) {
    const m = c > r / 2;
    c = m ? r - a : 0, m ? (p -= f, p <= 0 && (p = 0)) : (p += Math.abs(f), p >= 0 && (p = 0));
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
  elementColor: f = "#afb7c7"
}) => {
  const { scale: c, translateX: p, translateY: m } = a, w = Ft({
    value: c * 10 / (r * 10),
    min: u,
    max: l
  }), N = i * c, T = e * c, z = Math.max(n, T), E = `patternId-${t}`;
  return /* @__PURE__ */ j.jsxs("svg", { className: `${o} ${ss.dotSvgContainer}`, children: [
    /* @__PURE__ */ j.jsx(
      "pattern",
      {
        id: E,
        x: p % N,
        y: m % N,
        width: N,
        height: N,
        patternUnits: "userSpaceOnUse",
        patternTransform: `translate(-${T},-${T})`,
        children: /* @__PURE__ */ j.jsx(
          "circle",
          {
            cx: z,
            cy: z,
            r: z,
            fill: f,
            opacity: w
          }
        )
      }
    ),
    /* @__PURE__ */ j.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${E})` })
  ] });
}, cs = "_container_1xxyl_1", ls = "_canvasWrapper_1xxyl_8", fs = "_panning_1xxyl_21", hs = "_canvas_1xxyl_8", ds = "_contentWrapper_1xxyl_39", Ot = {
  container: cs,
  canvasWrapper: ls,
  panning: fs,
  canvas: hs,
  contentWrapper: ds
}, ps = "_verticalScrollBar_17thb_1", _s = "_horizontalScrollBar_17thb_9", Pn = {
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
    const [p, m] = An(t), w = ft(null), N = ft(null), T = ft({
      isDragging: !1,
      vertical: !0,
      initialOffset: 0
    }), [z, E] = kn({
      scale: t,
      horizontalSize: m,
      horizontalPos: e ? e.x : (u ?? 0) / et.SCROLL_POS_RATIO,
      horizontalSizeDecrease: 0,
      verticalSize: p,
      verticalPos: e ? e.y : (o ?? 0) / et.SCROLL_POS_RATIO,
      verticalSizeDecrease: 0
    });
    Dn(c, () => ({
      resetScrollPos: () => {
        E((D) => ({
          ...D,
          horizontalPos: (u ?? 0) / et.SCROLL_POS_RATIO,
          verticalPos: (o ?? 0) / et.SCROLL_POS_RATIO,
          verticalSizeDecrease: 0,
          horizontalSizeDecrease: 0
        }));
      },
      onScrollDeltaChangeHandler: A,
      onMouseUp: G
    })), le(
      function() {
        E((L) => {
          let W;
          const [nt, st] = An(t), J = t / L.scale || 0;
          return t < L.scale ? W = {
            horizontalPos: L.horizontalPos - J,
            verticalPos: L.verticalPos - J
          } : W = {
            horizontalPos: L.horizontalPos + J,
            verticalPos: L.verticalPos + J
          }, {
            ...L,
            scale: t,
            horizontalSize: st,
            verticalSize: nt,
            ...W
          };
        });
      },
      [t]
    );
    function A(D) {
      T.current.isDragging || E((L) => {
        const [W, nt] = Mn({
          state: L,
          scrollDelta: D,
          scrollLength: o
        }), [st, J] = Mn({
          isVertical: !1,
          state: L,
          scrollDelta: D,
          scrollLength: u
        });
        return {
          ...L,
          horizontalPos: st,
          horizontalSizeDecrease: J,
          verticalPos: W,
          verticalSizeDecrease: nt
        };
      });
    }
    const V = Lt(
      function(L, W) {
        if (!T.current.isDragging) return;
        L.stopPropagation();
        const { movementX: nt, movementY: st, clientX: J, clientY: Q, offsetX: h, offsetY: b } = L;
        T.current.initialOffset < 1 && (T.current.initialOffset = W ? b : h);
        const d = W ? st : nt, g = (W ? Q : J) - T.current.initialOffset - f(W), v = (C) => W ? [
          "verticalPos",
          C.verticalSize,
          o,
          n.y
        ] : [
          "horizontalPos",
          C.horizontalSize,
          u,
          n.x
        ];
        E((C) => {
          const [F, P, U, Y] = v(C);
          return {
            ...C,
            [F]: Ft({
              value: g,
              min: Y,
              max: U - P
            })
          };
        });
        const y = () => {
          const C = d > 0 ? d + et.SCROLL_DELTA_DIFF : d - et.SCROLL_DELTA_DIFF;
          return W ? { deltaX: 0, deltaY: C } : {
            deltaX: C,
            deltaY: 0
          };
        }, S = (W ? o : u) - (W ? z.verticalSize : z.horizontalSize);
        !(g <= 0 || g >= S) && d !== 0 && l(y());
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [o, u, n.y, n.x]
    ), G = Lt(
      function() {
        T.current.isDragging = !1, T.current.initialOffset = 0, window.removeEventListener(
          "mousemove",
          (L) => V(L, T.current.vertical)
        ), window.removeEventListener("mouseup", G);
      },
      [V]
    ), X = Lt(
      function() {
        window.addEventListener(
          "mousemove",
          (L) => V(L, T.current.vertical)
        ), window.addEventListener("mouseup", G);
      },
      [V, G]
    ), k = (D) => {
      D.stopPropagation();
    };
    return /* @__PURE__ */ j.jsxs(Rr, { children: [
      /* @__PURE__ */ j.jsx(
        "div",
        {
          className: Pn.verticalScrollBar,
          style: { width: i },
          ref: w,
          children: /* @__PURE__ */ j.jsx(
            "div",
            {
              "data-id": "vertical-scrollbar",
              style: {
                insetBlockStart: `${Ft({
                  value: z.verticalPos,
                  min: n.y,
                  max: o
                })}px`,
                height: `${z.verticalSize + z.verticalSizeDecrease}px`,
                background: r,
                minHeight: a
              },
              onMouseDownCapture: (D) => {
                D.stopPropagation(), T.current = {
                  ...T.current,
                  isDragging: !0,
                  vertical: !0
                }, X();
              },
              onDragEnterCapture: k,
              onDragCapture: k,
              onDragEndCapture: k
            }
          )
        }
      ),
      /* @__PURE__ */ j.jsx(
        "div",
        {
          className: Pn.horizontalScrollBar,
          ref: N,
          style: { height: i },
          children: /* @__PURE__ */ j.jsx(
            "div",
            {
              "data-id": "horizontal-scrollbar",
              style: {
                insetInlineStart: `${Ft({
                  value: z.horizontalPos,
                  min: n.x,
                  max: u
                })}px`,
                width: `${z.horizontalSize + z.horizontalSizeDecrease}px`,
                background: r,
                minWidth: a
              },
              onMouseDownCapture: (D) => {
                D.stopPropagation(), T.current = {
                  ...T.current,
                  isDragging: !0,
                  vertical: !1
                }, X();
              },
              onDragEnterCapture: k,
              onDragCapture: k,
              onDragEndCapture: k
            }
          )
        }
      )
    ] });
  }
);
let be = !1;
typeof navigator < "u" && (be = /^((?!chrome|android).)*safari/i.test(navigator.userAgent));
const ce = be ? 600 : 300, ws = In(({ children: t, ...e }, n) => {
  const r = Ee.useRef(null);
  return /* @__PURE__ */ j.jsx(vs, { innerRef: n, ...e, children: /* @__PURE__ */ j.jsx(
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
    minZoom: n = et.DEFAULT_MIN_ZOOM,
    maxZoom: r = et.DEFAULT_MAX_ZOOM,
    panOnScroll: i = !0,
    customComponents: a = [],
    renderScrollBar: o = !0,
    scrollBarConfig: u = {},
    backgroundConfig: l = {},
    onCanvasMount: f = () => {
    },
    onTransform: c = () => {
    },
    disableMousePanningClasses: p = [],
    disableScrollPanningClasses: m = []
  }) => {
    const w = ft(null), N = ft(null), T = ft(null), z = ft(null), E = ft(null), A = t.ref, V = ft(null), G = ft(null), X = Ln(() => zn().scaleExtent([n, r]), [r, n]), k = ft(tt(T.current).call(X)), [D, L] = kn({
      translateX: 0,
      translateY: 0,
      scale: 1
    });
    Dn(e, () => ({
      scrollNodeToCenter: ({
        nodeElement: d,
        offset: g,
        scale: v,
        shouldUpdateMaxScale: y,
        maxScale: S,
        transitionDuration: R
      }) => J({
        nodeElement: d,
        offset: g,
        scale: v,
        shouldUpdateMaxScale: y,
        maxScale: S,
        transitionDuration: R,
        position: lt.CENTER_CENTER
      }),
      scrollNodeHandler: J,
      scrollContentHorizontallyCenter: Q,
      fitContentToView: nt,
      setCanvasPosition: st,
      getCanvasState: h
    })), le(() => {
      const d = (v) => {
        v.code === "Space" && (G.current = !0);
      }, g = (v) => {
        v.code === "Space" && (G.current = !1);
      };
      return window.addEventListener("keydown", d), window.addEventListener("keyup", g), () => {
        window.removeEventListener("keydown", d), window.removeEventListener("keyup", g);
      };
    }, []), le(
      function() {
        k.current = tt(T.current).call(X);
        const g = tt(z.current);
        N.current = w.current ? w.current.getBoundingClientRect() : {}, X.filter((v) => {
          if (v.type === "mousedown" && !V.current && (V.current = !0), !G.current) {
            let y = v.target;
            for (; y; ) {
              if (p.filter((S) => y == null ? void 0 : y.classList.contains(S)).length > 0)
                return !1;
              y = y.parentElement;
            }
          }
          return v.ctrlKey || v.metaKey || v.type !== "wheel";
        }).on(
          "zoom",
          (v) => {
            var P, U, Y;
            ((P = v.sourceEvent) == null ? void 0 : P.ctrlKey) === !1 && ((U = v.sourceEvent) == null ? void 0 : U.metaKey) === !1 && v.type === "zoom" && ((Y = w.current) == null || Y.classList.add(Ot.panning));
            const y = v.transform, { x: S, y: R, k: C } = y, F = z.current;
            L({ translateX: S, translateY: R, scale: C }), be && F ? F.style.transform = `translate(${S}px, ${R}px) scale(${C})` : g.attr("transform", y);
          }
        ), X.on("end", () => {
          var v;
          V.current = !1, (v = w.current) == null || v.classList.remove(Ot.panning);
        }), f({
          scrollNodeToCenter: ({
            nodeElement: v,
            offset: y,
            scale: S,
            shouldUpdateMaxScale: R,
            maxScale: C,
            transitionDuration: F
          }) => J({
            nodeElement: v,
            offset: y,
            scale: S,
            shouldUpdateMaxScale: R,
            maxScale: C,
            transitionDuration: F,
            position: lt.CENTER_CENTER
          }),
          scrollNodeHandler: J,
          scrollContentHorizontallyCenter: Q,
          fitContentToView: nt,
          setCanvasPosition: st,
          getCanvasState: h
        });
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    ), le(() => {
      c(D);
    }, [c, D]), k.current.call(zn).on(
      "wheel.zoom",
      (d) => {
        var v;
        const g = k.current.property("__zoom").k || 1;
        if (i && !d.ctrlKey && !d.metaKey) {
          let y = d.target;
          for (; y; ) {
            if (m.filter((R) => y == null ? void 0 : y.classList.contains(R)).length > 0)
              return;
            y = y.parentElement;
          }
          d.preventDefault();
          const S = {
            deltaX: d.deltaX,
            deltaY: d.deltaY
          };
          (v = E.current) == null || v.onScrollDeltaChangeHandler(S), W(S);
        } else {
          d.preventDefault();
          const y = g * Math.pow(2, -d.deltaY * 0.01);
          X.scaleTo(k.current, y, Et(d));
        }
      },
      { passive: !1, capture: !0 }
    );
    const W = (d) => {
      const g = k.current.property("__zoom").k || 1;
      X.translateBy(
        k.current,
        -(d.deltaX / g),
        -(d.deltaY / g)
      );
    }, nt = Lt(
      function({
        duration: g = 500,
        offset: v = { x: 0, y: 0 },
        scale: y,
        maxZoomLimit: S = et.FIT_TO_VIEW_MAX_ZOOM,
        disableVerticalCenter: R = !1
      }) {
        requestIdleCallback(
          () => {
            var Pt, ie;
            if (!A.current) return;
            const C = tt(T.current), F = A.current.getBoundingClientRect(), P = k.current.property("__zoom").k || 1, U = (Pt = T.current) == null ? void 0 : Pt.getBoundingClientRect(), { width: Y = 0, height: q = 0 } = U || {}, K = 1 / P, rt = F.width * K, ut = F.height * K, Mt = q / ut, Tt = Y / rt, bt = y ?? Ft({
              value: Math.min(
                S,
                Math.min(Mt, Tt)
              ),
              min: n,
              max: r
            }), Ht = Y - rt * bt, gt = q - ut * bt, vt = !R && Mt > Tt, Rt = Ht / 2, ne = vt ? gt / 2 : 0, Ct = Rt + v.x, re = ne + v.y, Ce = Dt.translate(Ct, re).scale(bt);
            L({ translateX: Ct, translateY: re, scale: bt }), (ie = E.current) == null || ie.resetScrollPos(), C.transition().duration(g).call(X.transform, Ce);
          },
          { timeout: ce }
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [r, n]
    ), st = Lt(
      function({
        scale: g,
        translateX: v,
        translateY: y,
        transitionDuration: S = 300
      }) {
        requestIdleCallback(
          () => {
            var ut;
            const R = tt(T.current), C = k.current.property("__zoom"), { k: F, x: P, y: U } = C, Y = g !== void 0 ? Ft({
              value: g,
              min: n,
              max: r
            }) : F, q = v !== void 0 ? v : P, K = y !== void 0 ? y : U, rt = Dt.translate(q, K).scale(Y);
            L({
              translateX: q,
              translateY: K,
              scale: Y
            }), (ut = E.current) == null || ut.resetScrollPos(), R.transition().duration(S).call(X.transform, rt);
          },
          { timeout: ce }
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [r, n]
    ), J = ({
      nodeElement: d,
      offset: g = { x: 0, y: 0 },
      scale: v,
      shouldUpdateMaxScale: y = !0,
      maxScale: S,
      transitionDuration: R = 300,
      position: C = lt.TOP_CENTER
    }) => {
      requestIdleCallback(
        () => {
          if (!d) return;
          const F = k.current.property("__zoom"), {
            k: P,
            x: U,
            y: Y
          } = F, q = tt(T.current), rt = (() => {
            const gt = (Rt) => S ? Math.min(S, Rt) : Rt;
            if (!v) return gt(P);
            let vt = v;
            return y && (vt = Math.max(v, P)), gt(vt);
          })(), ut = T.current.getBoundingClientRect(), Mt = d.getBoundingClientRect(), { updatedX: Tt, updatedY: bt } = is({
            position: C,
            svgBounds: ut,
            nodeBounds: Mt,
            currentTranslateX: U,
            currentTranslateY: Y,
            currentScale: P,
            updatedScale: rt,
            customOffset: { x: g.x, y: g.y }
          }), Ht = Dt.translate(Tt, bt).scale(rt);
          q.transition().duration(R).call(X.transform, Ht);
        },
        { timeout: ce }
      );
    }, Q = ({
      offset: d = 0,
      transitionDuration: g = 300
    }) => {
      A.current && requestIdleCallback(
        () => {
          const v = k.current.property("__zoom"), { k: y, y: S } = v, R = tt(T.current), C = T.current.getBoundingClientRect(), F = A.current.getBoundingClientRect(), P = 1 / y, U = F.width * P, Y = (C.width - U * y) / 2 + d;
          L({
            ...D,
            translateX: Y
          });
          const q = Dt.translate(Y, S).scale(y);
          R.transition().duration(g).call(X.transform, q);
        },
        { timeout: ce }
      );
    }, h = () => ({
      canvasNode: tt(T.current),
      zoomNode: tt(z.current),
      currentPosition: k.current.property("__zoom"),
      d3Zoom: X
    }), b = Lt(
      function(g = !0) {
        const { x: v, y } = N.current;
        return g ? y : v;
      },
      []
    );
    return /* @__PURE__ */ j.jsxs("div", { className: Ot.container, children: [
      /* @__PURE__ */ j.jsx("div", { ref: w, className: Ot.canvasWrapper, children: be ? /* @__PURE__ */ j.jsx("div", { ref: T, className: Ot.canvas, children: /* @__PURE__ */ j.jsx("div", { ref: z, children: /* @__PURE__ */ j.jsx("div", { className: Ot.contentWrapper, children: t }) }) }) : /* @__PURE__ */ j.jsx("svg", { ref: T, className: Ot.canvas, children: /* @__PURE__ */ j.jsx("g", { ref: z, children: /* @__PURE__ */ j.jsx(
        "foreignObject",
        {
          x: et.INITIAL_POSITION_X,
          y: et.INITIAL_POSITION_Y,
          width: et.DEFAULT_LAYOUT,
          height: et.DEFAULT_LAYOUT,
          children: t
        }
      ) }) }) }),
      /* @__PURE__ */ j.jsx(
        us,
        {
          maxZoom: r,
          zoomTransform: D,
          ...l
        }
      ),
      o && w.current && /* @__PURE__ */ j.jsx(
        gs,
        {
          ref: E,
          scale: D.scale,
          ...u,
          verticalOffsetHeight: w.current.offsetHeight,
          horizontalOffsetWidth: w.current.offsetWidth,
          getContainerOffset: b,
          onScrollDeltaHandler: W
        }
      ),
      a.map((d, g) => {
        const {
          component: v,
          position: y = xe.BOTTOM_LEFT,
          offset: S = { x: 0, y: 0 },
          overlap: R = !0,
          className: C = ""
        } = d;
        return /* @__PURE__ */ j.jsx(
          ms,
          {
            component: v,
            position: y,
            offset: S,
            overlap: R,
            zoomState: { ...D, minZoom: n, maxZoom: r },
            className: C
          },
          g
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
  const o = Ln(() => {
    const l = Object.values(xe).includes(e) ? e : xe.BOTTOM_LEFT, [f, c] = l.split("-");
    return {
      [c]: n.x,
      [f]: n.y
    };
  }, [e, n]), u = Ee.cloneElement(t, {
    zoomState: i
  });
  return /* @__PURE__ */ j.jsx(
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
  xe as COMPONENT_POSITIONS,
  ws as ReactInfiniteCanvas,
  lt as SCROLL_NODE_POSITIONS
};
