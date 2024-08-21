(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver((o) => {
        for (const i of o)
            if (i.type === "childList")
                for (const l of i.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const i = {};
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials"
                ? (i.credentials = "include")
                : o.crossOrigin === "anonymous"
                ? (i.credentials = "omit")
                : (i.credentials = "same-origin"),
            i
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i);
    }
})();
var Qu = { exports: {} },
    jo = {},
    Ku = { exports: {} },
    F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pr = Symbol.for("react.element"),
    xd = Symbol.for("react.portal"),
    Cd = Symbol.for("react.fragment"),
    Pd = Symbol.for("react.strict_mode"),
    Ld = Symbol.for("react.profiler"),
    Rd = Symbol.for("react.provider"),
    Md = Symbol.for("react.context"),
    Nd = Symbol.for("react.forward_ref"),
    Td = Symbol.for("react.suspense"),
    zd = Symbol.for("react.memo"),
    Id = Symbol.for("react.lazy"),
    Ls = Symbol.iterator;
function Od(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Ls && e[Ls]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Yu = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Xu = Object.assign,
    Gu = {};
function jn(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Gu),
        (this.updater = n || Yu);
}
jn.prototype.isReactComponent = {};
jn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
jn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zu() {}
Zu.prototype = jn.prototype;
function Ml(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Gu),
        (this.updater = n || Yu);
}
var Nl = (Ml.prototype = new Zu());
Nl.constructor = Ml;
Xu(Nl, jn.prototype);
Nl.isPureReactComponent = !0;
var Rs = Array.isArray,
    Ju = Object.prototype.hasOwnProperty,
    Tl = { current: null },
    qu = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, t, n) {
    var r,
        o = {},
        i = null,
        l = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t))
            Ju.call(t, r) && !qu.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
        for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
        o.children = u;
    }
    if (e && e.defaultProps)
        for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
    return {
        $$typeof: Pr,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: Tl.current,
    };
}
function Fd(e, t) {
    return {
        $$typeof: Pr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function zl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Pr;
}
function jd(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Ms = /\/+/g;
function oi(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? jd("" + e.key)
        : t.toString(36);
}
function Gr(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0;
    else
        switch (i) {
            case "string":
            case "number":
                l = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Pr:
                    case xd:
                        l = !0;
                }
        }
    if (l)
        return (
            (l = e),
            (o = o(l)),
            (e = r === "" ? "." + oi(l, 0) : r),
            Rs(o)
                ? ((n = ""),
                  e != null && (n = e.replace(Ms, "$&/") + "/"),
                  Gr(o, t, n, "", function (a) {
                      return a;
                  }))
                : o != null &&
                  (zl(o) &&
                      (o = Fd(
                          o,
                          n +
                              (!o.key || (l && l.key === o.key)
                                  ? ""
                                  : ("" + o.key).replace(Ms, "$&/") + "/") +
                              e
                      )),
                  t.push(o)),
            1
        );
    if (((l = 0), (r = r === "" ? "." : r + ":"), Rs(e)))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var u = r + oi(i, s);
            l += Gr(i, t, n, u, o);
        }
    else if (((u = Od(e)), typeof u == "function"))
        for (e = u.call(e), s = 0; !(i = e.next()).done; )
            (i = i.value), (u = r + oi(i, s++)), (l += Gr(i, t, n, u, o));
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return l;
}
function Tr(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        Gr(e, r, "", "", function (i) {
            return t.call(n, i, o++);
        }),
        r
    );
}
function Dd(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var ge = { current: null },
    Zr = { transition: null },
    $d = {
        ReactCurrentDispatcher: ge,
        ReactCurrentBatchConfig: Zr,
        ReactCurrentOwner: Tl,
    };
function ea() {
    throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
    map: Tr,
    forEach: function (e, t, n) {
        Tr(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Tr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Tr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!zl(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
F.Component = jn;
F.Fragment = Cd;
F.Profiler = Ld;
F.PureComponent = Ml;
F.StrictMode = Pd;
F.Suspense = Td;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d;
F.act = ea;
F.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Xu({}, e.props),
        o = e.key,
        i = e.ref,
        l = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (l = Tl.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var s = e.type.defaultProps;
        for (u in t)
            Ju.call(t, u) &&
                !qu.hasOwnProperty(u) &&
                (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
        r.children = s;
    }
    return { $$typeof: Pr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
F.createContext = function (e) {
    return (
        (e = {
            $$typeof: Md,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Rd, _context: e }),
        (e.Consumer = e)
    );
};
F.createElement = bu;
F.createFactory = function (e) {
    var t = bu.bind(null, e);
    return (t.type = e), t;
};
F.createRef = function () {
    return { current: null };
};
F.forwardRef = function (e) {
    return { $$typeof: Nd, render: e };
};
F.isValidElement = zl;
F.lazy = function (e) {
    return { $$typeof: Id, _payload: { _status: -1, _result: e }, _init: Dd };
};
F.memo = function (e, t) {
    return { $$typeof: zd, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
    var t = Zr.transition;
    Zr.transition = {};
    try {
        e();
    } finally {
        Zr.transition = t;
    }
};
F.unstable_act = ea;
F.useCallback = function (e, t) {
    return ge.current.useCallback(e, t);
};
F.useContext = function (e) {
    return ge.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
    return ge.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
    return ge.current.useEffect(e, t);
};
F.useId = function () {
    return ge.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
    return ge.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
    return ge.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
    return ge.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
    return ge.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
    return ge.current.useReducer(e, t, n);
};
F.useRef = function (e) {
    return ge.current.useRef(e);
};
F.useState = function (e) {
    return ge.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
    return ge.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
    return ge.current.useTransition();
};
F.version = "18.3.1";
Ku.exports = F;
var z = Ku.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ud = z,
    Bd = Symbol.for("react.element"),
    Ad = Symbol.for("react.fragment"),
    Vd = Object.prototype.hasOwnProperty,
    Hd =
        Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Wd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ta(e, t, n) {
    var r,
        o = {},
        i = null,
        l = null;
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (l = t.ref);
    for (r in t) Vd.call(t, r) && !Wd.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Bd,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: Hd.current,
    };
}
jo.Fragment = Ad;
jo.jsx = ta;
jo.jsxs = ta;
Qu.exports = jo;
var M = Qu.exports,
    na = { exports: {} },
    Oe = {},
    ra = { exports: {} },
    oa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(w, R) {
        var N = w.length;
        w.push(R);
        e: for (; 0 < N; ) {
            var O = (N - 1) >>> 1,
                D = w[O];
            if (0 < o(D, R)) (w[O] = R), (w[N] = D), (N = O);
            else break e;
        }
    }
    function n(w) {
        return w.length === 0 ? null : w[0];
    }
    function r(w) {
        if (w.length === 0) return null;
        var R = w[0],
            N = w.pop();
        if (N !== R) {
            w[0] = N;
            e: for (var O = 0, D = w.length, V = D >>> 1; O < V; ) {
                var ee = 2 * (O + 1) - 1,
                    st = w[ee],
                    je = ee + 1,
                    He = w[je];
                if (0 > o(st, N))
                    je < D && 0 > o(He, st)
                        ? ((w[O] = He), (w[je] = N), (O = je))
                        : ((w[O] = st), (w[ee] = N), (O = ee));
                else if (je < D && 0 > o(He, N))
                    (w[O] = He), (w[je] = N), (O = je);
                else break e;
            }
        }
        return R;
    }
    function o(w, R) {
        var N = w.sortIndex - R.sortIndex;
        return N !== 0 ? N : w.id - R.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var l = Date,
            s = l.now();
        e.unstable_now = function () {
            return l.now() - s;
        };
    }
    var u = [],
        a = [],
        h = 1,
        m = null,
        f = 3,
        v = !1,
        y = !1,
        g = !1,
        x = typeof setTimeout == "function" ? setTimeout : null,
        d = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(w) {
        for (var R = n(a); R !== null; ) {
            if (R.callback === null) r(a);
            else if (R.startTime <= w)
                r(a), (R.sortIndex = R.expirationTime), t(u, R);
            else break;
            R = n(a);
        }
    }
    function S(w) {
        if (((g = !1), p(w), !y))
            if (n(u) !== null) (y = !0), we(C);
            else {
                var R = n(a);
                R !== null && ke(S, R.startTime - w);
            }
    }
    function C(w, R) {
        (y = !1), g && ((g = !1), d(E), (E = -1)), (v = !0);
        var N = f;
        try {
            for (
                p(R), m = n(u);
                m !== null && (!(m.expirationTime > R) || (w && !U()));

            ) {
                var O = m.callback;
                if (typeof O == "function") {
                    (m.callback = null), (f = m.priorityLevel);
                    var D = O(m.expirationTime <= R);
                    (R = e.unstable_now()),
                        typeof D == "function"
                            ? (m.callback = D)
                            : m === n(u) && r(u),
                        p(R);
                } else r(u);
                m = n(u);
            }
            if (m !== null) var V = !0;
            else {
                var ee = n(a);
                ee !== null && ke(S, ee.startTime - R), (V = !1);
            }
            return V;
        } finally {
            (m = null), (f = N), (v = !1);
        }
    }
    var P = !1,
        _ = null,
        E = -1,
        I = 5,
        T = -1;
    function U() {
        return !(e.unstable_now() - T < I);
    }
    function A() {
        if (_ !== null) {
            var w = e.unstable_now();
            T = w;
            var R = !0;
            try {
                R = _(!0, w);
            } finally {
                R ? j() : ((P = !1), (_ = null));
            }
        } else P = !1;
    }
    var j;
    if (typeof c == "function")
        j = function () {
            c(A);
        };
    else if (typeof MessageChannel < "u") {
        var Y = new MessageChannel(),
            le = Y.port2;
        (Y.port1.onmessage = A),
            (j = function () {
                le.postMessage(null);
            });
    } else
        j = function () {
            x(A, 0);
        };
    function we(w) {
        (_ = w), P || ((P = !0), j());
    }
    function ke(w, R) {
        E = x(function () {
            w(e.unstable_now());
        }, R);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (w) {
            w.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || v || ((y = !0), we(C));
        }),
        (e.unstable_forceFrameRate = function (w) {
            0 > w || 125 < w
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (I = 0 < w ? Math.floor(1e3 / w) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return f;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(u);
        }),
        (e.unstable_next = function (w) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var R = 3;
                    break;
                default:
                    R = f;
            }
            var N = f;
            f = R;
            try {
                return w();
            } finally {
                f = N;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (w, R) {
            switch (w) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    w = 3;
            }
            var N = f;
            f = w;
            try {
                return R();
            } finally {
                f = N;
            }
        }),
        (e.unstable_scheduleCallback = function (w, R, N) {
            var O = e.unstable_now();
            switch (
                (typeof N == "object" && N !== null
                    ? ((N = N.delay),
                      (N = typeof N == "number" && 0 < N ? O + N : O))
                    : (N = O),
                w)
            ) {
                case 1:
                    var D = -1;
                    break;
                case 2:
                    D = 250;
                    break;
                case 5:
                    D = 1073741823;
                    break;
                case 4:
                    D = 1e4;
                    break;
                default:
                    D = 5e3;
            }
            return (
                (D = N + D),
                (w = {
                    id: h++,
                    callback: R,
                    priorityLevel: w,
                    startTime: N,
                    expirationTime: D,
                    sortIndex: -1,
                }),
                N > O
                    ? ((w.sortIndex = N),
                      t(a, w),
                      n(u) === null &&
                          w === n(a) &&
                          (g ? (d(E), (E = -1)) : (g = !0), ke(S, N - O)))
                    : ((w.sortIndex = D), t(u, w), y || v || ((y = !0), we(C))),
                w
            );
        }),
        (e.unstable_shouldYield = U),
        (e.unstable_wrapCallback = function (w) {
            var R = f;
            return function () {
                var N = f;
                f = R;
                try {
                    return w.apply(this, arguments);
                } finally {
                    f = N;
                }
            };
        });
})(oa);
ra.exports = oa;
var Qd = ra.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kd = z,
    Ie = Qd;
function k(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var ia = new Set(),
    ar = {};
function en(e, t) {
    Pn(e, t), Pn(e + "Capture", t);
}
function Pn(e, t) {
    for (ar[e] = t, e = 0; e < t.length; e++) ia.add(t[e]);
}
var pt = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    ji = Object.prototype.hasOwnProperty,
    Yd =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ns = {},
    Ts = {};
function Xd(e) {
    return ji.call(Ts, e)
        ? !0
        : ji.call(Ns, e)
        ? !1
        : Yd.test(e)
        ? (Ts[e] = !0)
        : ((Ns[e] = !0), !1);
}
function Gd(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Zd(e, t, n, r) {
    if (t === null || typeof t > "u" || Gd(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Se(e, t, n, r, o, i, l) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = l);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        ae[e] = new Se(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    ae[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ae[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    ae[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        ae[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ae[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    ae[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ae[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    ae[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Il = /[\-:]([a-z])/g;
function Ol(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Il, Ol);
        ae[t] = new Se(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Il, Ol);
        ae[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Il, Ol);
    ae[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ae[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new Se(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    ae[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Fl(e, t, n, r) {
    var o = ae.hasOwnProperty(t) ? ae[t] : null;
    (o !== null
        ? o.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Zd(t, n, o, r) && (n = null),
        r || o === null
            ? Xd(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
            ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
            : ((t = o.attributeName),
              (r = o.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((o = o.type),
                    (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var yt = Kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    zr = Symbol.for("react.element"),
    ln = Symbol.for("react.portal"),
    sn = Symbol.for("react.fragment"),
    jl = Symbol.for("react.strict_mode"),
    Di = Symbol.for("react.profiler"),
    la = Symbol.for("react.provider"),
    sa = Symbol.for("react.context"),
    Dl = Symbol.for("react.forward_ref"),
    $i = Symbol.for("react.suspense"),
    Ui = Symbol.for("react.suspense_list"),
    $l = Symbol.for("react.memo"),
    St = Symbol.for("react.lazy"),
    ua = Symbol.for("react.offscreen"),
    zs = Symbol.iterator;
function Bn(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (zs && e[zs]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Z = Object.assign,
    ii;
function Xn(e) {
    if (ii === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ii = (t && t[1]) || "";
        }
    return (
        `
` +
        ii +
        e
    );
}
var li = !1;
function si(e, t) {
    if (!e || li) return "";
    li = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (a) {
                    var r = a;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (a) {
                    r = a;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (a) {
                r = a;
            }
            e();
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (
                var o = a.stack.split(`
`),
                    i = r.stack.split(`
`),
                    l = o.length - 1,
                    s = i.length - 1;
                1 <= l && 0 <= s && o[l] !== i[s];

            )
                s--;
            for (; 1 <= l && 0 <= s; l--, s--)
                if (o[l] !== i[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if ((l--, s--, 0 > s || o[l] !== i[s])) {
                                var u =
                                    `
` + o[l].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        u.includes("<anonymous>") &&
                                        (u = u.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    u
                                );
                            }
                        while (1 <= l && 0 <= s);
                    break;
                }
        }
    } finally {
        (li = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Xn(e) : "";
}
function Jd(e) {
    switch (e.tag) {
        case 5:
            return Xn(e.type);
        case 16:
            return Xn("Lazy");
        case 13:
            return Xn("Suspense");
        case 19:
            return Xn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = si(e.type, !1)), e;
        case 11:
            return (e = si(e.type.render, !1)), e;
        case 1:
            return (e = si(e.type, !0)), e;
        default:
            return "";
    }
}
function Bi(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case sn:
            return "Fragment";
        case ln:
            return "Portal";
        case Di:
            return "Profiler";
        case jl:
            return "StrictMode";
        case $i:
            return "Suspense";
        case Ui:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case sa:
                return (e.displayName || "Context") + ".Consumer";
            case la:
                return (e._context.displayName || "Context") + ".Provider";
            case Dl:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case $l:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Bi(e.type) || "Memo"
                );
            case St:
                (t = e._payload), (e = e._init);
                try {
                    return Bi(e(t));
                } catch {}
        }
    return null;
}
function qd(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Bi(t);
        case 8:
            return t === jl ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Ot(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function aa(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function bd(e) {
    var t = aa(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var o = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (l) {
                    (r = "" + l), i.call(this, l);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (l) {
                    r = "" + l;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Ir(e) {
    e._valueTracker || (e._valueTracker = bd(e));
}
function ca(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = aa(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function so(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Ai(e, t) {
    var n = t.checked;
    return Z({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Is(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Ot(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function da(e, t) {
    (t = t.checked), t != null && Fl(e, "checked", t, !1);
}
function Vi(e, t) {
    da(e, t);
    var n = Ot(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Hi(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Hi(e, t.type, Ot(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Os(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Hi(e, t, n) {
    (t !== "number" || so(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gn = Array.isArray;
function Sn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Ot(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function Wi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return Z({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Fs(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(k(92));
            if (Gn(n)) {
                if (1 < n.length) throw Error(k(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Ot(n) };
}
function fa(e, t) {
    var n = Ot(t.value),
        r = Ot(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function js(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function pa(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Qi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? pa(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var Or,
    ha = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                Or = Or || document.createElement("div"),
                    Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = Or.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function cr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var qn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    ef = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function (e) {
    ef.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qn[t] = qn[e]);
    });
});
function ma(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (qn.hasOwnProperty(e) && qn[e])
        ? ("" + t).trim()
        : t + "px";
}
function va(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = ma(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var tf = Z(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Ki(e, t) {
    if (t) {
        if (tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(k(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(k(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(k(62));
    }
}
function Yi(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Xi = null;
function Ul(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Gi = null,
    wn = null,
    kn = null;
function Ds(e) {
    if ((e = Mr(e))) {
        if (typeof Gi != "function") throw Error(k(280));
        var t = e.stateNode;
        t && ((t = Ao(t)), Gi(e.stateNode, e.type, t));
    }
}
function ya(e) {
    wn ? (kn ? kn.push(e) : (kn = [e])) : (wn = e);
}
function ga() {
    if (wn) {
        var e = wn,
            t = kn;
        if (((kn = wn = null), Ds(e), t))
            for (e = 0; e < t.length; e++) Ds(t[e]);
    }
}
function Sa(e, t) {
    return e(t);
}
function wa() {}
var ui = !1;
function ka(e, t, n) {
    if (ui) return e(t, n);
    ui = !0;
    try {
        return Sa(e, t, n);
    } finally {
        (ui = !1), (wn !== null || kn !== null) && (wa(), ga());
    }
}
function dr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ao(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(k(231, t, typeof n));
    return n;
}
var Zi = !1;
if (pt)
    try {
        var An = {};
        Object.defineProperty(An, "passive", {
            get: function () {
                Zi = !0;
            },
        }),
            window.addEventListener("test", An, An),
            window.removeEventListener("test", An, An);
    } catch {
        Zi = !1;
    }
function nf(e, t, n, r, o, i, l, s, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a);
    } catch (h) {
        this.onError(h);
    }
}
var bn = !1,
    uo = null,
    ao = !1,
    Ji = null,
    rf = {
        onError: function (e) {
            (bn = !0), (uo = e);
        },
    };
function of(e, t, n, r, o, i, l, s, u) {
    (bn = !1), (uo = null), nf.apply(rf, arguments);
}
function lf(e, t, n, r, o, i, l, s, u) {
    if ((of.apply(this, arguments), bn)) {
        if (bn) {
            var a = uo;
            (bn = !1), (uo = null);
        } else throw Error(k(198));
        ao || ((ao = !0), (Ji = a));
    }
}
function tn(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function _a(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function $s(e) {
    if (tn(e) !== e) throw Error(k(188));
}
function sf(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = tn(e)), t === null)) throw Error(k(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n) return $s(o), e;
                if (i === r) return $s(o), t;
                i = i.sibling;
            }
            throw Error(k(188));
        }
        if (n.return !== r.return) (n = o), (r = i);
        else {
            for (var l = !1, s = o.child; s; ) {
                if (s === n) {
                    (l = !0), (n = o), (r = i);
                    break;
                }
                if (s === r) {
                    (l = !0), (r = o), (n = i);
                    break;
                }
                s = s.sibling;
            }
            if (!l) {
                for (s = i.child; s; ) {
                    if (s === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                    }
                    if (s === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                    }
                    s = s.sibling;
                }
                if (!l) throw Error(k(189));
            }
        }
        if (n.alternate !== r) throw Error(k(190));
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t;
}
function Ea(e) {
    return (e = sf(e)), e !== null ? xa(e) : null;
}
function xa(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = xa(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Ca = Ie.unstable_scheduleCallback,
    Us = Ie.unstable_cancelCallback,
    uf = Ie.unstable_shouldYield,
    af = Ie.unstable_requestPaint,
    b = Ie.unstable_now,
    cf = Ie.unstable_getCurrentPriorityLevel,
    Bl = Ie.unstable_ImmediatePriority,
    Pa = Ie.unstable_UserBlockingPriority,
    co = Ie.unstable_NormalPriority,
    df = Ie.unstable_LowPriority,
    La = Ie.unstable_IdlePriority,
    Do = null,
    it = null;
function ff(e) {
    if (it && typeof it.onCommitFiberRoot == "function")
        try {
            it.onCommitFiberRoot(
                Do,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : mf,
    pf = Math.log,
    hf = Math.LN2;
function mf(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((pf(e) / hf) | 0)) | 0;
}
var Fr = 64,
    jr = 4194304;
function Zn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function fo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        l = n & 268435455;
    if (l !== 0) {
        var s = l & ~o;
        s !== 0 ? (r = Zn(s)) : ((i &= l), i !== 0 && (r = Zn(i)));
    } else (l = n & ~o), l !== 0 ? (r = Zn(l)) : i !== 0 && (r = Zn(i));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & o) &&
        ((o = r & -r),
        (i = t & -t),
        o >= i || (o === 16 && (i & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Xe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function vf(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function yf(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            o = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var l = 31 - Xe(i),
            s = 1 << l,
            u = o[l];
        u === -1
            ? (!(s & n) || s & r) && (o[l] = vf(s, t))
            : u <= t && (e.expiredLanes |= s),
            (i &= ~s);
    }
}
function qi(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Ra() {
    var e = Fr;
    return (Fr <<= 1), !(Fr & 4194240) && (Fr = 64), e;
}
function ai(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Lr(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Xe(t)),
        (e[t] = n);
}
function gf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Xe(n),
            i = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
}
function Al(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Xe(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var B = 0;
function Ma(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Na,
    Vl,
    Ta,
    za,
    Ia,
    bi = !1,
    Dr = [],
    Ct = null,
    Pt = null,
    Lt = null,
    fr = new Map(),
    pr = new Map(),
    kt = [],
    Sf =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Bs(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Ct = null;
            break;
        case "dragenter":
        case "dragleave":
            Pt = null;
            break;
        case "mouseover":
        case "mouseout":
            Lt = null;
            break;
        case "pointerover":
        case "pointerout":
            fr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            pr.delete(t.pointerId);
    }
}
function Vn(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [o],
          }),
          t !== null && ((t = Mr(t)), t !== null && Vl(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          o !== null && t.indexOf(o) === -1 && t.push(o),
          e);
}
function wf(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (Ct = Vn(Ct, e, t, n, r, o)), !0;
        case "dragenter":
            return (Pt = Vn(Pt, e, t, n, r, o)), !0;
        case "mouseover":
            return (Lt = Vn(Lt, e, t, n, r, o)), !0;
        case "pointerover":
            var i = o.pointerId;
            return fr.set(i, Vn(fr.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (
                (i = o.pointerId),
                pr.set(i, Vn(pr.get(i) || null, e, t, n, r, o)),
                !0
            );
    }
    return !1;
}
function Oa(e) {
    var t = Ht(e.target);
    if (t !== null) {
        var n = tn(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = _a(n)), t !== null)) {
                    (e.blockedOn = t),
                        Ia(e.priority, function () {
                            Ta(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Jr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = el(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Xi = r), n.target.dispatchEvent(r), (Xi = null);
        } else return (t = Mr(n)), t !== null && Vl(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function As(e, t, n) {
    Jr(e) && n.delete(t);
}
function kf() {
    (bi = !1),
        Ct !== null && Jr(Ct) && (Ct = null),
        Pt !== null && Jr(Pt) && (Pt = null),
        Lt !== null && Jr(Lt) && (Lt = null),
        fr.forEach(As),
        pr.forEach(As);
}
function Hn(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        bi ||
            ((bi = !0),
            Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, kf)));
}
function hr(e) {
    function t(o) {
        return Hn(o, e);
    }
    if (0 < Dr.length) {
        Hn(Dr[0], e);
        for (var n = 1; n < Dr.length; n++) {
            var r = Dr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Ct !== null && Hn(Ct, e),
            Pt !== null && Hn(Pt, e),
            Lt !== null && Hn(Lt, e),
            fr.forEach(t),
            pr.forEach(t),
            n = 0;
        n < kt.length;
        n++
    )
        (r = kt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < kt.length && ((n = kt[0]), n.blockedOn === null); )
        Oa(n), n.blockedOn === null && kt.shift();
}
var _n = yt.ReactCurrentBatchConfig,
    po = !0;
function _f(e, t, n, r) {
    var o = B,
        i = _n.transition;
    _n.transition = null;
    try {
        (B = 1), Hl(e, t, n, r);
    } finally {
        (B = o), (_n.transition = i);
    }
}
function Ef(e, t, n, r) {
    var o = B,
        i = _n.transition;
    _n.transition = null;
    try {
        (B = 4), Hl(e, t, n, r);
    } finally {
        (B = o), (_n.transition = i);
    }
}
function Hl(e, t, n, r) {
    if (po) {
        var o = el(e, t, n, r);
        if (o === null) Si(e, t, r, ho, n), Bs(e, r);
        else if (wf(o, e, t, n, r)) r.stopPropagation();
        else if ((Bs(e, r), t & 4 && -1 < Sf.indexOf(e))) {
            for (; o !== null; ) {
                var i = Mr(o);
                if (
                    (i !== null && Na(i),
                    (i = el(e, t, n, r)),
                    i === null && Si(e, t, r, ho, n),
                    i === o)
                )
                    break;
                o = i;
            }
            o !== null && r.stopPropagation();
        } else Si(e, t, r, null, n);
    }
}
var ho = null;
function el(e, t, n, r) {
    if (((ho = null), (e = Ul(r)), (e = Ht(e)), e !== null))
        if (((t = tn(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = _a(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (ho = e), null;
}
function Fa(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (cf()) {
                case Bl:
                    return 1;
                case Pa:
                    return 4;
                case co:
                case df:
                    return 16;
                case La:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Et = null,
    Wl = null,
    qr = null;
function ja() {
    if (qr) return qr;
    var e,
        t = Wl,
        n = t.length,
        r,
        o = "value" in Et ? Et.value : Et.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
    return (qr = o.slice(e, 1 < r ? 1 - r : void 0));
}
function br(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function $r() {
    return !0;
}
function Vs() {
    return !1;
}
function Fe(e) {
    function t(n, r, o, i, l) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = l),
            (this.currentTarget = null);
        for (var s in e)
            e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? $r
                : Vs),
            (this.isPropagationStopped = Vs),
            this
        );
    }
    return (
        Z(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = $r));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = $r));
            },
            persist: function () {},
            isPersistent: $r,
        }),
        t
    );
}
var Dn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Ql = Fe(Dn),
    Rr = Z({}, Dn, { view: 0, detail: 0 }),
    xf = Fe(Rr),
    ci,
    di,
    Wn,
    $o = Z({}, Rr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Kl,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Wn &&
                      (Wn && e.type === "mousemove"
                          ? ((ci = e.screenX - Wn.screenX),
                            (di = e.screenY - Wn.screenY))
                          : (di = ci = 0),
                      (Wn = e)),
                  ci);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : di;
        },
    }),
    Hs = Fe($o),
    Cf = Z({}, $o, { dataTransfer: 0 }),
    Pf = Fe(Cf),
    Lf = Z({}, Rr, { relatedTarget: 0 }),
    fi = Fe(Lf),
    Rf = Z({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mf = Fe(Rf),
    Nf = Z({}, Dn, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    Tf = Fe(Nf),
    zf = Z({}, Dn, { data: 0 }),
    Ws = Fe(zf),
    If = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Of = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Ff = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function jf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = Ff[e])
        ? !!t[e]
        : !1;
}
function Kl() {
    return jf;
}
var Df = Z({}, Rr, {
        key: function (e) {
            if (e.key) {
                var t = If[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? Of[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Kl,
        charCode: function (e) {
            return e.type === "keypress" ? br(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? br(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    $f = Fe(Df),
    Uf = Z({}, $o, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Qs = Fe(Uf),
    Bf = Z({}, Rr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Kl,
    }),
    Af = Fe(Bf),
    Vf = Z({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hf = Fe(Vf),
    Wf = Z({}, $o, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Qf = Fe(Wf),
    Kf = [9, 13, 27, 32],
    Yl = pt && "CompositionEvent" in window,
    er = null;
pt && "documentMode" in document && (er = document.documentMode);
var Yf = pt && "TextEvent" in window && !er,
    Da = pt && (!Yl || (er && 8 < er && 11 >= er)),
    Ks = " ",
    Ys = !1;
function $a(e, t) {
    switch (e) {
        case "keyup":
            return Kf.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Ua(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var un = !1;
function Xf(e, t) {
    switch (e) {
        case "compositionend":
            return Ua(t);
        case "keypress":
            return t.which !== 32 ? null : ((Ys = !0), Ks);
        case "textInput":
            return (e = t.data), e === Ks && Ys ? null : e;
        default:
            return null;
    }
}
function Gf(e, t) {
    if (un)
        return e === "compositionend" || (!Yl && $a(e, t))
            ? ((e = ja()), (qr = Wl = Et = null), (un = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Da && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var Zf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Xs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Zf[e.type] : t === "textarea";
}
function Ba(e, t, n, r) {
    ya(r),
        (t = mo(t, "onChange")),
        0 < t.length &&
            ((n = new Ql("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var tr = null,
    mr = null;
function Jf(e) {
    Ja(e, 0);
}
function Uo(e) {
    var t = dn(e);
    if (ca(t)) return e;
}
function qf(e, t) {
    if (e === "change") return t;
}
var Aa = !1;
if (pt) {
    var pi;
    if (pt) {
        var hi = "oninput" in document;
        if (!hi) {
            var Gs = document.createElement("div");
            Gs.setAttribute("oninput", "return;"),
                (hi = typeof Gs.oninput == "function");
        }
        pi = hi;
    } else pi = !1;
    Aa = pi && (!document.documentMode || 9 < document.documentMode);
}
function Zs() {
    tr && (tr.detachEvent("onpropertychange", Va), (mr = tr = null));
}
function Va(e) {
    if (e.propertyName === "value" && Uo(mr)) {
        var t = [];
        Ba(t, mr, e, Ul(e)), ka(Jf, t);
    }
}
function bf(e, t, n) {
    e === "focusin"
        ? (Zs(), (tr = t), (mr = n), tr.attachEvent("onpropertychange", Va))
        : e === "focusout" && Zs();
}
function ep(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Uo(mr);
}
function tp(e, t) {
    if (e === "click") return Uo(t);
}
function np(e, t) {
    if (e === "input" || e === "change") return Uo(t);
}
function rp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : rp;
function vr(e, t) {
    if (Ze(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!ji.call(t, o) || !Ze(e[o], t[o])) return !1;
    }
    return !0;
}
function Js(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function qs(e, t) {
    var n = Js(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Js(n);
    }
}
function Ha(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Ha(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function Wa() {
    for (var e = window, t = so(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = so(e.document);
    }
    return t;
}
function Xl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function op(e) {
    var t = Wa(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Ha(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && Xl(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                (r = r.end === void 0 ? i : Math.min(r.end, o)),
                    !e.extend && i > r && ((o = r), (r = i), (i = o)),
                    (o = qs(n, i));
                var l = qs(n, r);
                o &&
                    l &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== l.node ||
                        e.focusOffset !== l.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(l.node, l.offset))
                        : (t.setEnd(l.node, l.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var ip = pt && "documentMode" in document && 11 >= document.documentMode,
    an = null,
    tl = null,
    nr = null,
    nl = !1;
function bs(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    nl ||
        an == null ||
        an !== so(r) ||
        ((r = an),
        "selectionStart" in r && Xl(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (nr && vr(nr, r)) ||
            ((nr = r),
            (r = mo(tl, "onSelect")),
            0 < r.length &&
                ((t = new Ql("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = an))));
}
function Ur(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var cn = {
        animationend: Ur("Animation", "AnimationEnd"),
        animationiteration: Ur("Animation", "AnimationIteration"),
        animationstart: Ur("Animation", "AnimationStart"),
        transitionend: Ur("Transition", "TransitionEnd"),
    },
    mi = {},
    Qa = {};
pt &&
    ((Qa = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete cn.animationend.animation,
        delete cn.animationiteration.animation,
        delete cn.animationstart.animation),
    "TransitionEvent" in window || delete cn.transitionend.transition);
function Bo(e) {
    if (mi[e]) return mi[e];
    if (!cn[e]) return e;
    var t = cn[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Qa) return (mi[e] = t[n]);
    return e;
}
var Ka = Bo("animationend"),
    Ya = Bo("animationiteration"),
    Xa = Bo("animationstart"),
    Ga = Bo("transitionend"),
    Za = new Map(),
    eu =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function jt(e, t) {
    Za.set(e, t), en(t, [e]);
}
for (var vi = 0; vi < eu.length; vi++) {
    var yi = eu[vi],
        lp = yi.toLowerCase(),
        sp = yi[0].toUpperCase() + yi.slice(1);
    jt(lp, "on" + sp);
}
jt(Ka, "onAnimationEnd");
jt(Ya, "onAnimationIteration");
jt(Xa, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(Ga, "onTransitionEnd");
Pn("onMouseEnter", ["mouseout", "mouseover"]);
Pn("onMouseLeave", ["mouseout", "mouseover"]);
Pn("onPointerEnter", ["pointerout", "pointerover"]);
Pn("onPointerLeave", ["pointerout", "pointerover"]);
en(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
en(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
en(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
en(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
en(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Jn =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    up = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Jn)
    );
function tu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), lf(r, t, void 0, e), (e.currentTarget = null);
}
function Ja(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var s = r[l],
                        u = s.instance,
                        a = s.currentTarget;
                    if (((s = s.listener), u !== i && o.isPropagationStopped()))
                        break e;
                    tu(o, s, a), (i = u);
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (
                        ((s = r[l]),
                        (u = s.instance),
                        (a = s.currentTarget),
                        (s = s.listener),
                        u !== i && o.isPropagationStopped())
                    )
                        break e;
                    tu(o, s, a), (i = u);
                }
        }
    }
    if (ao) throw ((e = Ji), (ao = !1), (Ji = null), e);
}
function W(e, t) {
    var n = t[sl];
    n === void 0 && (n = t[sl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (qa(t, e, 2, !1), n.add(r));
}
function gi(e, t, n) {
    var r = 0;
    t && (r |= 4), qa(n, e, r, t);
}
var Br = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
    if (!e[Br]) {
        (e[Br] = !0),
            ia.forEach(function (n) {
                n !== "selectionchange" &&
                    (up.has(n) || gi(n, !1, e), gi(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Br] || ((t[Br] = !0), gi("selectionchange", !1, t));
    }
}
function qa(e, t, n, r) {
    switch (Fa(t)) {
        case 1:
            var o = _f;
            break;
        case 4:
            o = Ef;
            break;
        default:
            o = Hl;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !Zi ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
            ? e.addEventListener(t, n, { passive: o })
            : e.addEventListener(t, n, !1);
}
function Si(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var s = r.stateNode.containerInfo;
                if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var u = l.tag;
                        if (
                            (u === 3 || u === 4) &&
                            ((u = l.stateNode.containerInfo),
                            u === o || (u.nodeType === 8 && u.parentNode === o))
                        )
                            return;
                        l = l.return;
                    }
                for (; s !== null; ) {
                    if (((l = Ht(s)), l === null)) return;
                    if (((u = l.tag), u === 5 || u === 6)) {
                        r = i = l;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
    ka(function () {
        var a = i,
            h = Ul(n),
            m = [];
        e: {
            var f = Za.get(e);
            if (f !== void 0) {
                var v = Ql,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (br(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = $f;
                        break;
                    case "focusin":
                        (y = "focus"), (v = fi);
                        break;
                    case "focusout":
                        (y = "blur"), (v = fi);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = fi;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = Hs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = Pf;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = Af;
                        break;
                    case Ka:
                    case Ya:
                    case Xa:
                        v = Mf;
                        break;
                    case Ga:
                        v = Hf;
                        break;
                    case "scroll":
                        v = xf;
                        break;
                    case "wheel":
                        v = Qf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = Tf;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = Qs;
                }
                var g = (t & 4) !== 0,
                    x = !g && e === "scroll",
                    d = g ? (f !== null ? f + "Capture" : null) : f;
                g = [];
                for (var c = a, p; c !== null; ) {
                    p = c;
                    var S = p.stateNode;
                    if (
                        (p.tag === 5 &&
                            S !== null &&
                            ((p = S),
                            d !== null &&
                                ((S = dr(c, d)),
                                S != null && g.push(gr(c, S, p)))),
                        x)
                    )
                        break;
                    c = c.return;
                }
                0 < g.length &&
                    ((f = new v(f, y, null, n, h)),
                    m.push({ event: f, listeners: g }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((f = e === "mouseover" || e === "pointerover"),
                    (v = e === "mouseout" || e === "pointerout"),
                    f &&
                        n !== Xi &&
                        (y = n.relatedTarget || n.fromElement) &&
                        (Ht(y) || y[ht]))
                )
                    break e;
                if (
                    (v || f) &&
                    ((f =
                        h.window === h
                            ? h
                            : (f = h.ownerDocument)
                            ? f.defaultView || f.parentWindow
                            : window),
                    v
                        ? ((y = n.relatedTarget || n.toElement),
                          (v = a),
                          (y = y ? Ht(y) : null),
                          y !== null &&
                              ((x = tn(y)),
                              y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                              (y = null))
                        : ((v = null), (y = a)),
                    v !== y)
                ) {
                    if (
                        ((g = Hs),
                        (S = "onMouseLeave"),
                        (d = "onMouseEnter"),
                        (c = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((g = Qs),
                            (S = "onPointerLeave"),
                            (d = "onPointerEnter"),
                            (c = "pointer")),
                        (x = v == null ? f : dn(v)),
                        (p = y == null ? f : dn(y)),
                        (f = new g(S, c + "leave", v, n, h)),
                        (f.target = x),
                        (f.relatedTarget = p),
                        (S = null),
                        Ht(h) === a &&
                            ((g = new g(d, c + "enter", y, n, h)),
                            (g.target = p),
                            (g.relatedTarget = x),
                            (S = g)),
                        (x = S),
                        v && y)
                    )
                        t: {
                            for (g = v, d = y, c = 0, p = g; p; p = rn(p)) c++;
                            for (p = 0, S = d; S; S = rn(S)) p++;
                            for (; 0 < c - p; ) (g = rn(g)), c--;
                            for (; 0 < p - c; ) (d = rn(d)), p--;
                            for (; c--; ) {
                                if (
                                    g === d ||
                                    (d !== null && g === d.alternate)
                                )
                                    break t;
                                (g = rn(g)), (d = rn(d));
                            }
                            g = null;
                        }
                    else g = null;
                    v !== null && nu(m, f, v, g, !1),
                        y !== null && x !== null && nu(m, x, y, g, !0);
                }
            }
            e: {
                if (
                    ((f = a ? dn(a) : window),
                    (v = f.nodeName && f.nodeName.toLowerCase()),
                    v === "select" || (v === "input" && f.type === "file"))
                )
                    var C = qf;
                else if (Xs(f))
                    if (Aa) C = np;
                    else {
                        C = ep;
                        var P = bf;
                    }
                else
                    (v = f.nodeName) &&
                        v.toLowerCase() === "input" &&
                        (f.type === "checkbox" || f.type === "radio") &&
                        (C = tp);
                if (C && (C = C(e, a))) {
                    Ba(m, C, n, h);
                    break e;
                }
                P && P(e, f, a),
                    e === "focusout" &&
                        (P = f._wrapperState) &&
                        P.controlled &&
                        f.type === "number" &&
                        Hi(f, "number", f.value);
            }
            switch (((P = a ? dn(a) : window), e)) {
                case "focusin":
                    (Xs(P) || P.contentEditable === "true") &&
                        ((an = P), (tl = a), (nr = null));
                    break;
                case "focusout":
                    nr = tl = an = null;
                    break;
                case "mousedown":
                    nl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (nl = !1), bs(m, n, h);
                    break;
                case "selectionchange":
                    if (ip) break;
                case "keydown":
                case "keyup":
                    bs(m, n, h);
            }
            var _;
            if (Yl)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var E = "onCompositionStart";
                            break e;
                        case "compositionend":
                            E = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            E = "onCompositionUpdate";
                            break e;
                    }
                    E = void 0;
                }
            else
                un
                    ? $a(e, n) && (E = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (E = "onCompositionStart");
            E &&
                (Da &&
                    n.locale !== "ko" &&
                    (un || E !== "onCompositionStart"
                        ? E === "onCompositionEnd" && un && (_ = ja())
                        : ((Et = h),
                          (Wl = "value" in Et ? Et.value : Et.textContent),
                          (un = !0))),
                (P = mo(a, E)),
                0 < P.length &&
                    ((E = new Ws(E, e, null, n, h)),
                    m.push({ event: E, listeners: P }),
                    _
                        ? (E.data = _)
                        : ((_ = Ua(n)), _ !== null && (E.data = _)))),
                (_ = Yf ? Xf(e, n) : Gf(e, n)) &&
                    ((a = mo(a, "onBeforeInput")),
                    0 < a.length &&
                        ((h = new Ws(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            h
                        )),
                        m.push({ event: h, listeners: a }),
                        (h.data = _)));
        }
        Ja(m, t);
    });
}
function gr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function mo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 &&
            i !== null &&
            ((o = i),
            (i = dr(e, n)),
            i != null && r.unshift(gr(e, i, o)),
            (i = dr(e, t)),
            i != null && r.push(gr(e, i, o))),
            (e = e.return);
    }
    return r;
}
function rn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function nu(e, t, n, r, o) {
    for (var i = t._reactName, l = []; n !== null && n !== r; ) {
        var s = n,
            u = s.alternate,
            a = s.stateNode;
        if (u !== null && u === r) break;
        s.tag === 5 &&
            a !== null &&
            ((s = a),
            o
                ? ((u = dr(n, i)), u != null && l.unshift(gr(n, u, s)))
                : o || ((u = dr(n, i)), u != null && l.push(gr(n, u, s)))),
            (n = n.return);
    }
    l.length !== 0 && e.push({ event: t, listeners: l });
}
var ap = /\r\n?/g,
    cp = /\u0000|\uFFFD/g;
function ru(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            ap,
            `
`
        )
        .replace(cp, "");
}
function Ar(e, t, n) {
    if (((t = ru(t)), ru(e) !== t && n)) throw Error(k(425));
}
function vo() {}
var rl = null,
    ol = null;
function il(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var ll = typeof setTimeout == "function" ? setTimeout : void 0,
    dp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ou = typeof Promise == "function" ? Promise : void 0,
    fp =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof ou < "u"
            ? function (e) {
                  return ou.resolve(null).then(e).catch(pp);
              }
            : ll;
function pp(e) {
    setTimeout(function () {
        throw e;
    });
}
function wi(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), hr(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    hr(t);
}
function Rt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function iu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var $n = Math.random().toString(36).slice(2),
    ot = "__reactFiber$" + $n,
    Sr = "__reactProps$" + $n,
    ht = "__reactContainer$" + $n,
    sl = "__reactEvents$" + $n,
    hp = "__reactListeners$" + $n,
    mp = "__reactHandles$" + $n;
function Ht(e) {
    var t = e[ot];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[ht] || n[ot])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = iu(e); e !== null; ) {
                    if ((n = e[ot])) return n;
                    e = iu(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Mr(e) {
    return (
        (e = e[ot] || e[ht]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function dn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33));
}
function Ao(e) {
    return e[Sr] || null;
}
var ul = [],
    fn = -1;
function Dt(e) {
    return { current: e };
}
function Q(e) {
    0 > fn || ((e.current = ul[fn]), (ul[fn] = null), fn--);
}
function H(e, t) {
    fn++, (ul[fn] = e.current), (e.current = t);
}
var Ft = {},
    he = Dt(Ft),
    Ce = Dt(!1),
    Gt = Ft;
function Ln(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function Pe(e) {
    return (e = e.childContextTypes), e != null;
}
function yo() {
    Q(Ce), Q(he);
}
function lu(e, t, n) {
    if (he.current !== Ft) throw Error(k(168));
    H(he, t), H(Ce, n);
}
function ba(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(k(108, qd(e) || "Unknown", o));
    return Z({}, n, r);
}
function go(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            Ft),
        (Gt = he.current),
        H(he, e),
        H(Ce, Ce.current),
        !0
    );
}
function su(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n
        ? ((e = ba(e, t, Gt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          Q(Ce),
          Q(he),
          H(he, e))
        : Q(Ce),
        H(Ce, n);
}
var at = null,
    Vo = !1,
    ki = !1;
function ec(e) {
    at === null ? (at = [e]) : at.push(e);
}
function vp(e) {
    (Vo = !0), ec(e);
}
function $t() {
    if (!ki && at !== null) {
        ki = !0;
        var e = 0,
            t = B;
        try {
            var n = at;
            for (B = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (at = null), (Vo = !1);
        } catch (o) {
            throw (at !== null && (at = at.slice(e + 1)), Ca(Bl, $t), o);
        } finally {
            (B = t), (ki = !1);
        }
    }
    return null;
}
var pn = [],
    hn = 0,
    So = null,
    wo = 0,
    De = [],
    $e = 0,
    Zt = null,
    ct = 1,
    dt = "";
function Bt(e, t) {
    (pn[hn++] = wo), (pn[hn++] = So), (So = e), (wo = t);
}
function tc(e, t, n) {
    (De[$e++] = ct), (De[$e++] = dt), (De[$e++] = Zt), (Zt = e);
    var r = ct;
    e = dt;
    var o = 32 - Xe(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - Xe(t) + o;
    if (30 < i) {
        var l = o - (o % 5);
        (i = (r & ((1 << l) - 1)).toString(32)),
            (r >>= l),
            (o -= l),
            (ct = (1 << (32 - Xe(t) + o)) | (n << o) | r),
            (dt = i + e);
    } else (ct = (1 << i) | (n << o) | r), (dt = e);
}
function Gl(e) {
    e.return !== null && (Bt(e, 1), tc(e, 1, 0));
}
function Zl(e) {
    for (; e === So; )
        (So = pn[--hn]), (pn[hn] = null), (wo = pn[--hn]), (pn[hn] = null);
    for (; e === Zt; )
        (Zt = De[--$e]),
            (De[$e] = null),
            (dt = De[--$e]),
            (De[$e] = null),
            (ct = De[--$e]),
            (De[$e] = null);
}
var Te = null,
    Ne = null,
    K = !1,
    Ye = null;
function nc(e, t) {
    var n = Ue(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function uu(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (Te = e), (Ne = Rt(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (Te = e), (Ne = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Zt !== null ? { id: ct, overflow: dt } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Ue(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Te = e),
                      (Ne = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function al(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cl(e) {
    if (K) {
        var t = Ne;
        if (t) {
            var n = t;
            if (!uu(e, t)) {
                if (al(e)) throw Error(k(418));
                t = Rt(n.nextSibling);
                var r = Te;
                t && uu(e, t)
                    ? nc(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Te = e));
            }
        } else {
            if (al(e)) throw Error(k(418));
            (e.flags = (e.flags & -4097) | 2), (K = !1), (Te = e);
        }
    }
}
function au(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    Te = e;
}
function Vr(e) {
    if (e !== Te) return !1;
    if (!K) return au(e), (K = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !il(e.type, e.memoizedProps))),
        t && (t = Ne))
    ) {
        if (al(e)) throw (rc(), Error(k(418)));
        for (; t; ) nc(e, t), (t = Rt(t.nextSibling));
    }
    if ((au(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(k(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ne = Rt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Ne = null;
        }
    } else Ne = Te ? Rt(e.stateNode.nextSibling) : null;
    return !0;
}
function rc() {
    for (var e = Ne; e; ) e = Rt(e.nextSibling);
}
function Rn() {
    (Ne = Te = null), (K = !1);
}
function Jl(e) {
    Ye === null ? (Ye = [e]) : Ye.push(e);
}
var yp = yt.ReactCurrentBatchConfig;
function Qn(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(k(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(k(147, e));
            var o = r,
                i = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (l) {
                      var s = o.refs;
                      l === null ? delete s[i] : (s[i] = l);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != "string") throw Error(k(284));
        if (!n._owner) throw Error(k(290, e));
    }
    return e;
}
function Hr(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            k(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function cu(e) {
    var t = e._init;
    return t(e._payload);
}
function oc(e) {
    function t(d, c) {
        if (e) {
            var p = d.deletions;
            p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
        }
    }
    function n(d, c) {
        if (!e) return null;
        for (; c !== null; ) t(d, c), (c = c.sibling);
        return null;
    }
    function r(d, c) {
        for (d = new Map(); c !== null; )
            c.key !== null ? d.set(c.key, c) : d.set(c.index, c),
                (c = c.sibling);
        return d;
    }
    function o(d, c) {
        return (d = zt(d, c)), (d.index = 0), (d.sibling = null), d;
    }
    function i(d, c, p) {
        return (
            (d.index = p),
            e
                ? ((p = d.alternate),
                  p !== null
                      ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
                      : ((d.flags |= 2), c))
                : ((d.flags |= 1048576), c)
        );
    }
    function l(d) {
        return e && d.alternate === null && (d.flags |= 2), d;
    }
    function s(d, c, p, S) {
        return c === null || c.tag !== 6
            ? ((c = Ri(p, d.mode, S)), (c.return = d), c)
            : ((c = o(c, p)), (c.return = d), c);
    }
    function u(d, c, p, S) {
        var C = p.type;
        return C === sn
            ? h(d, c, p.props.children, S, p.key)
            : c !== null &&
              (c.elementType === C ||
                  (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === St &&
                      cu(C) === c.type))
            ? ((S = o(c, p.props)), (S.ref = Qn(d, c, p)), (S.return = d), S)
            : ((S = lo(p.type, p.key, p.props, null, d.mode, S)),
              (S.ref = Qn(d, c, p)),
              (S.return = d),
              S);
    }
    function a(d, c, p, S) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== p.containerInfo ||
            c.stateNode.implementation !== p.implementation
            ? ((c = Mi(p, d.mode, S)), (c.return = d), c)
            : ((c = o(c, p.children || [])), (c.return = d), c);
    }
    function h(d, c, p, S, C) {
        return c === null || c.tag !== 7
            ? ((c = Xt(p, d.mode, S, C)), (c.return = d), c)
            : ((c = o(c, p)), (c.return = d), c);
    }
    function m(d, c, p) {
        if ((typeof c == "string" && c !== "") || typeof c == "number")
            return (c = Ri("" + c, d.mode, p)), (c.return = d), c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case zr:
                    return (
                        (p = lo(c.type, c.key, c.props, null, d.mode, p)),
                        (p.ref = Qn(d, null, c)),
                        (p.return = d),
                        p
                    );
                case ln:
                    return (c = Mi(c, d.mode, p)), (c.return = d), c;
                case St:
                    var S = c._init;
                    return m(d, S(c._payload), p);
            }
            if (Gn(c) || Bn(c))
                return (c = Xt(c, d.mode, p, null)), (c.return = d), c;
            Hr(d, c);
        }
        return null;
    }
    function f(d, c, p, S) {
        var C = c !== null ? c.key : null;
        if ((typeof p == "string" && p !== "") || typeof p == "number")
            return C !== null ? null : s(d, c, "" + p, S);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case zr:
                    return p.key === C ? u(d, c, p, S) : null;
                case ln:
                    return p.key === C ? a(d, c, p, S) : null;
                case St:
                    return (C = p._init), f(d, c, C(p._payload), S);
            }
            if (Gn(p) || Bn(p)) return C !== null ? null : h(d, c, p, S, null);
            Hr(d, p);
        }
        return null;
    }
    function v(d, c, p, S, C) {
        if ((typeof S == "string" && S !== "") || typeof S == "number")
            return (d = d.get(p) || null), s(c, d, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case zr:
                    return (
                        (d = d.get(S.key === null ? p : S.key) || null),
                        u(c, d, S, C)
                    );
                case ln:
                    return (
                        (d = d.get(S.key === null ? p : S.key) || null),
                        a(c, d, S, C)
                    );
                case St:
                    var P = S._init;
                    return v(d, c, p, P(S._payload), C);
            }
            if (Gn(S) || Bn(S))
                return (d = d.get(p) || null), h(c, d, S, C, null);
            Hr(c, S);
        }
        return null;
    }
    function y(d, c, p, S) {
        for (
            var C = null, P = null, _ = c, E = (c = 0), I = null;
            _ !== null && E < p.length;
            E++
        ) {
            _.index > E ? ((I = _), (_ = null)) : (I = _.sibling);
            var T = f(d, _, p[E], S);
            if (T === null) {
                _ === null && (_ = I);
                break;
            }
            e && _ && T.alternate === null && t(d, _),
                (c = i(T, c, E)),
                P === null ? (C = T) : (P.sibling = T),
                (P = T),
                (_ = I);
        }
        if (E === p.length) return n(d, _), K && Bt(d, E), C;
        if (_ === null) {
            for (; E < p.length; E++)
                (_ = m(d, p[E], S)),
                    _ !== null &&
                        ((c = i(_, c, E)),
                        P === null ? (C = _) : (P.sibling = _),
                        (P = _));
            return K && Bt(d, E), C;
        }
        for (_ = r(d, _); E < p.length; E++)
            (I = v(_, d, E, p[E], S)),
                I !== null &&
                    (e &&
                        I.alternate !== null &&
                        _.delete(I.key === null ? E : I.key),
                    (c = i(I, c, E)),
                    P === null ? (C = I) : (P.sibling = I),
                    (P = I));
        return (
            e &&
                _.forEach(function (U) {
                    return t(d, U);
                }),
            K && Bt(d, E),
            C
        );
    }
    function g(d, c, p, S) {
        var C = Bn(p);
        if (typeof C != "function") throw Error(k(150));
        if (((p = C.call(p)), p == null)) throw Error(k(151));
        for (
            var P = (C = null), _ = c, E = (c = 0), I = null, T = p.next();
            _ !== null && !T.done;
            E++, T = p.next()
        ) {
            _.index > E ? ((I = _), (_ = null)) : (I = _.sibling);
            var U = f(d, _, T.value, S);
            if (U === null) {
                _ === null && (_ = I);
                break;
            }
            e && _ && U.alternate === null && t(d, _),
                (c = i(U, c, E)),
                P === null ? (C = U) : (P.sibling = U),
                (P = U),
                (_ = I);
        }
        if (T.done) return n(d, _), K && Bt(d, E), C;
        if (_ === null) {
            for (; !T.done; E++, T = p.next())
                (T = m(d, T.value, S)),
                    T !== null &&
                        ((c = i(T, c, E)),
                        P === null ? (C = T) : (P.sibling = T),
                        (P = T));
            return K && Bt(d, E), C;
        }
        for (_ = r(d, _); !T.done; E++, T = p.next())
            (T = v(_, d, E, T.value, S)),
                T !== null &&
                    (e &&
                        T.alternate !== null &&
                        _.delete(T.key === null ? E : T.key),
                    (c = i(T, c, E)),
                    P === null ? (C = T) : (P.sibling = T),
                    (P = T));
        return (
            e &&
                _.forEach(function (A) {
                    return t(d, A);
                }),
            K && Bt(d, E),
            C
        );
    }
    function x(d, c, p, S) {
        if (
            (typeof p == "object" &&
                p !== null &&
                p.type === sn &&
                p.key === null &&
                (p = p.props.children),
            typeof p == "object" && p !== null)
        ) {
            switch (p.$$typeof) {
                case zr:
                    e: {
                        for (var C = p.key, P = c; P !== null; ) {
                            if (P.key === C) {
                                if (((C = p.type), C === sn)) {
                                    if (P.tag === 7) {
                                        n(d, P.sibling),
                                            (c = o(P, p.props.children)),
                                            (c.return = d),
                                            (d = c);
                                        break e;
                                    }
                                } else if (
                                    P.elementType === C ||
                                    (typeof C == "object" &&
                                        C !== null &&
                                        C.$$typeof === St &&
                                        cu(C) === P.type)
                                ) {
                                    n(d, P.sibling),
                                        (c = o(P, p.props)),
                                        (c.ref = Qn(d, P, p)),
                                        (c.return = d),
                                        (d = c);
                                    break e;
                                }
                                n(d, P);
                                break;
                            } else t(d, P);
                            P = P.sibling;
                        }
                        p.type === sn
                            ? ((c = Xt(p.props.children, d.mode, S, p.key)),
                              (c.return = d),
                              (d = c))
                            : ((S = lo(
                                  p.type,
                                  p.key,
                                  p.props,
                                  null,
                                  d.mode,
                                  S
                              )),
                              (S.ref = Qn(d, c, p)),
                              (S.return = d),
                              (d = S));
                    }
                    return l(d);
                case ln:
                    e: {
                        for (P = p.key; c !== null; ) {
                            if (c.key === P)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo ===
                                        p.containerInfo &&
                                    c.stateNode.implementation ===
                                        p.implementation
                                ) {
                                    n(d, c.sibling),
                                        (c = o(c, p.children || [])),
                                        (c.return = d),
                                        (d = c);
                                    break e;
                                } else {
                                    n(d, c);
                                    break;
                                }
                            else t(d, c);
                            c = c.sibling;
                        }
                        (c = Mi(p, d.mode, S)), (c.return = d), (d = c);
                    }
                    return l(d);
                case St:
                    return (P = p._init), x(d, c, P(p._payload), S);
            }
            if (Gn(p)) return y(d, c, p, S);
            if (Bn(p)) return g(d, c, p, S);
            Hr(d, p);
        }
        return (typeof p == "string" && p !== "") || typeof p == "number"
            ? ((p = "" + p),
              c !== null && c.tag === 6
                  ? (n(d, c.sibling), (c = o(c, p)), (c.return = d), (d = c))
                  : (n(d, c), (c = Ri(p, d.mode, S)), (c.return = d), (d = c)),
              l(d))
            : n(d, c);
    }
    return x;
}
var Mn = oc(!0),
    ic = oc(!1),
    ko = Dt(null),
    _o = null,
    mn = null,
    ql = null;
function bl() {
    ql = mn = _o = null;
}
function es(e) {
    var t = ko.current;
    Q(ko), (e._currentValue = t);
}
function dl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function En(e, t) {
    (_o = e),
        (ql = mn = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (xe = !0), (e.firstContext = null));
}
function Ae(e) {
    var t = e._currentValue;
    if (ql !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), mn === null)) {
            if (_o === null) throw Error(k(308));
            (mn = e), (_o.dependencies = { lanes: 0, firstContext: e });
        } else mn = mn.next = e;
    return t;
}
var Wt = null;
function ts(e) {
    Wt === null ? (Wt = [e]) : Wt.push(e);
}
function lc(e, t, n, r) {
    var o = t.interleaved;
    return (
        o === null ? ((n.next = n), ts(t)) : ((n.next = o.next), (o.next = n)),
        (t.interleaved = n),
        mt(e, r)
    );
}
function mt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var wt = !1;
function ns(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function sc(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function ft(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function Mt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), $ & 2)) {
        var o = r.pending;
        return (
            o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
            (r.pending = t),
            mt(e, n)
        );
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), ts(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        mt(e, n)
    );
}
function eo(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
    }
}
function du(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
            } while (n !== null);
            i === null ? (o = i = t) : (i = i.next = t);
        } else o = i = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function Eo(e, t, n, r) {
    var o = e.updateQueue;
    wt = !1;
    var i = o.firstBaseUpdate,
        l = o.lastBaseUpdate,
        s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var u = s,
            a = u.next;
        (u.next = null), l === null ? (i = a) : (l.next = a), (l = u);
        var h = e.alternate;
        h !== null &&
            ((h = h.updateQueue),
            (s = h.lastBaseUpdate),
            s !== l &&
                (s === null ? (h.firstBaseUpdate = a) : (s.next = a),
                (h.lastBaseUpdate = u)));
    }
    if (i !== null) {
        var m = o.baseState;
        (l = 0), (h = a = u = null), (s = i);
        do {
            var f = s.lane,
                v = s.eventTime;
            if ((r & f) === f) {
                h !== null &&
                    (h = h.next =
                        {
                            eventTime: v,
                            lane: 0,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null,
                        });
                e: {
                    var y = e,
                        g = s;
                    switch (((f = t), (v = n), g.tag)) {
                        case 1:
                            if (((y = g.payload), typeof y == "function")) {
                                m = y.call(v, m, f);
                                break e;
                            }
                            m = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (
                                ((y = g.payload),
                                (f =
                                    typeof y == "function"
                                        ? y.call(v, m, f)
                                        : y),
                                f == null)
                            )
                                break e;
                            m = Z({}, m, f);
                            break e;
                        case 2:
                            wt = !0;
                    }
                }
                s.callback !== null &&
                    s.lane !== 0 &&
                    ((e.flags |= 64),
                    (f = o.effects),
                    f === null ? (o.effects = [s]) : f.push(s));
            } else
                (v = {
                    eventTime: v,
                    lane: f,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null,
                }),
                    h === null ? ((a = h = v), (u = m)) : (h = h.next = v),
                    (l |= f);
            if (((s = s.next), s === null)) {
                if (((s = o.shared.pending), s === null)) break;
                (f = s),
                    (s = f.next),
                    (f.next = null),
                    (o.lastBaseUpdate = f),
                    (o.shared.pending = null);
            }
        } while (!0);
        if (
            (h === null && (u = m),
            (o.baseState = u),
            (o.firstBaseUpdate = a),
            (o.lastBaseUpdate = h),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (l |= o.lane), (o = o.next);
            while (o !== t);
        } else i === null && (o.shared.lanes = 0);
        (qt |= l), (e.lanes = l), (e.memoizedState = m);
    }
}
function fu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function"))
                    throw Error(k(191, o));
                o.call(r);
            }
        }
}
var Nr = {},
    lt = Dt(Nr),
    wr = Dt(Nr),
    kr = Dt(Nr);
function Qt(e) {
    if (e === Nr) throw Error(k(174));
    return e;
}
function rs(e, t) {
    switch ((H(kr, t), H(wr, e), H(lt, Nr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Qi(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Qi(t, e));
    }
    Q(lt), H(lt, t);
}
function Nn() {
    Q(lt), Q(wr), Q(kr);
}
function uc(e) {
    Qt(kr.current);
    var t = Qt(lt.current),
        n = Qi(t, e.type);
    t !== n && (H(wr, e), H(lt, n));
}
function os(e) {
    wr.current === e && (Q(lt), Q(wr));
}
var X = Dt(0);
function xo(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var _i = [];
function is() {
    for (var e = 0; e < _i.length; e++)
        _i[e]._workInProgressVersionPrimary = null;
    _i.length = 0;
}
var to = yt.ReactCurrentDispatcher,
    Ei = yt.ReactCurrentBatchConfig,
    Jt = 0,
    G = null,
    ne = null,
    oe = null,
    Co = !1,
    rr = !1,
    _r = 0,
    gp = 0;
function de() {
    throw Error(k(321));
}
function ls(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ze(e[n], t[n])) return !1;
    return !0;
}
function ss(e, t, n, r, o, i) {
    if (
        ((Jt = i),
        (G = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (to.current = e === null || e.memoizedState === null ? _p : Ep),
        (e = n(r, o)),
        rr)
    ) {
        i = 0;
        do {
            if (((rr = !1), (_r = 0), 25 <= i)) throw Error(k(301));
            (i += 1),
                (oe = ne = null),
                (t.updateQueue = null),
                (to.current = xp),
                (e = n(r, o));
        } while (rr);
    }
    if (
        ((to.current = Po),
        (t = ne !== null && ne.next !== null),
        (Jt = 0),
        (oe = ne = G = null),
        (Co = !1),
        t)
    )
        throw Error(k(300));
    return e;
}
function us() {
    var e = _r !== 0;
    return (_r = 0), e;
}
function nt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Ve() {
    if (ne === null) {
        var e = G.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = ne.next;
    var t = oe === null ? G.memoizedState : oe.next;
    if (t !== null) (oe = t), (ne = e);
    else {
        if (e === null) throw Error(k(310));
        (ne = e),
            (e = {
                memoizedState: ne.memoizedState,
                baseState: ne.baseState,
                baseQueue: ne.baseQueue,
                queue: ne.queue,
                next: null,
            }),
            oe === null ? (G.memoizedState = oe = e) : (oe = oe.next = e);
    }
    return oe;
}
function Er(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function xi(e) {
    var t = Ve(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = ne,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var l = o.next;
            (o.next = i.next), (i.next = l);
        }
        (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
        (i = o.next), (r = r.baseState);
        var s = (l = null),
            u = null,
            a = i;
        do {
            var h = a.lane;
            if ((Jt & h) === h)
                u !== null &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: a.action,
                            hasEagerState: a.hasEagerState,
                            eagerState: a.eagerState,
                            next: null,
                        }),
                    (r = a.hasEagerState ? a.eagerState : e(r, a.action));
            else {
                var m = {
                    lane: h,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null,
                };
                u === null ? ((s = u = m), (l = r)) : (u = u.next = m),
                    (G.lanes |= h),
                    (qt |= h);
            }
            a = a.next;
        } while (a !== null && a !== i);
        u === null ? (l = r) : (u.next = s),
            Ze(r, t.memoizedState) || (xe = !0),
            (t.memoizedState = r),
            (t.baseState = l),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (i = o.lane), (G.lanes |= i), (qt |= i), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Ci(e) {
    var t = Ve(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var l = (o = o.next);
        do (i = e(i, l.action)), (l = l.next);
        while (l !== o);
        Ze(i, t.memoizedState) || (xe = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function ac() {}
function cc(e, t) {
    var n = G,
        r = Ve(),
        o = t(),
        i = !Ze(r.memoizedState, o);
    if (
        (i && ((r.memoizedState = o), (xe = !0)),
        (r = r.queue),
        as(pc.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (oe !== null && oe.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            xr(9, fc.bind(null, n, r, o, t), void 0, null),
            ie === null)
        )
            throw Error(k(349));
        Jt & 30 || dc(n, t, o);
    }
    return o;
}
function dc(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = G.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (G.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), hc(t) && mc(e);
}
function pc(e, t, n) {
    return n(function () {
        hc(t) && mc(e);
    });
}
function hc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ze(e, n);
    } catch {
        return !0;
    }
}
function mc(e) {
    var t = mt(e, 1);
    t !== null && Ge(t, e, 1, -1);
}
function pu(e) {
    var t = nt();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Er,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = kp.bind(null, G, e)),
        [t.memoizedState, e]
    );
}
function xr(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = G.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (G.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function vc() {
    return Ve().memoizedState;
}
function no(e, t, n, r) {
    var o = nt();
    (G.flags |= e),
        (o.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ho(e, t, n, r) {
    var o = Ve();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ne !== null) {
        var l = ne.memoizedState;
        if (((i = l.destroy), r !== null && ls(r, l.deps))) {
            o.memoizedState = xr(t, n, i, r);
            return;
        }
    }
    (G.flags |= e), (o.memoizedState = xr(1 | t, n, i, r));
}
function hu(e, t) {
    return no(8390656, 8, e, t);
}
function as(e, t) {
    return Ho(2048, 8, e, t);
}
function yc(e, t) {
    return Ho(4, 2, e, t);
}
function gc(e, t) {
    return Ho(4, 4, e, t);
}
function Sc(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function wc(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Ho(4, 4, Sc.bind(null, t, e), n)
    );
}
function cs() {}
function kc(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function _c(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ec(e, t, n) {
    return Jt & 21
        ? (Ze(n, t) ||
              ((n = Ra()), (G.lanes |= n), (qt |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (xe = !0)),
          (e.memoizedState = n));
}
function Sp(e, t) {
    var n = B;
    (B = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ei.transition;
    Ei.transition = {};
    try {
        e(!1), t();
    } finally {
        (B = n), (Ei.transition = r);
    }
}
function xc() {
    return Ve().memoizedState;
}
function wp(e, t, n) {
    var r = Tt(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Cc(e))
    )
        Pc(t, n);
    else if (((n = lc(e, t, n, r)), n !== null)) {
        var o = ye();
        Ge(n, e, r, o), Lc(n, t, r);
    }
}
function kp(e, t, n) {
    var r = Tt(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Cc(e)) Pc(t, o);
    else {
        var i = e.alternate;
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var l = t.lastRenderedState,
                    s = i(l, n);
                if (((o.hasEagerState = !0), (o.eagerState = s), Ze(s, l))) {
                    var u = t.interleaved;
                    u === null
                        ? ((o.next = o), ts(t))
                        : ((o.next = u.next), (u.next = o)),
                        (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = lc(e, t, o, r)),
            n !== null && ((o = ye()), Ge(n, e, r, o), Lc(n, t, r));
    }
}
function Cc(e) {
    var t = e.alternate;
    return e === G || (t !== null && t === G);
}
function Pc(e, t) {
    rr = Co = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Lc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
    }
}
var Po = {
        readContext: Ae,
        useCallback: de,
        useContext: de,
        useEffect: de,
        useImperativeHandle: de,
        useInsertionEffect: de,
        useLayoutEffect: de,
        useMemo: de,
        useReducer: de,
        useRef: de,
        useState: de,
        useDebugValue: de,
        useDeferredValue: de,
        useTransition: de,
        useMutableSource: de,
        useSyncExternalStore: de,
        useId: de,
        unstable_isNewReconciler: !1,
    },
    _p = {
        readContext: Ae,
        useCallback: function (e, t) {
            return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ae,
        useEffect: hu,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                no(4194308, 4, Sc.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return no(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return no(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = nt();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = nt();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = wp.bind(null, G, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = nt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: pu,
        useDebugValue: cs,
        useDeferredValue: function (e) {
            return (nt().memoizedState = e);
        },
        useTransition: function () {
            var e = pu(!1),
                t = e[0];
            return (e = Sp.bind(null, e[1])), (nt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = G,
                o = nt();
            if (K) {
                if (n === void 0) throw Error(k(407));
                n = n();
            } else {
                if (((n = t()), ie === null)) throw Error(k(349));
                Jt & 30 || dc(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (o.queue = i),
                hu(pc.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                xr(9, fc.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = nt(),
                t = ie.identifierPrefix;
            if (K) {
                var n = dt,
                    r = ct;
                (n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = _r++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = gp++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Ep = {
        readContext: Ae,
        useCallback: kc,
        useContext: Ae,
        useEffect: as,
        useImperativeHandle: wc,
        useInsertionEffect: yc,
        useLayoutEffect: gc,
        useMemo: _c,
        useReducer: xi,
        useRef: vc,
        useState: function () {
            return xi(Er);
        },
        useDebugValue: cs,
        useDeferredValue: function (e) {
            var t = Ve();
            return Ec(t, ne.memoizedState, e);
        },
        useTransition: function () {
            var e = xi(Er)[0],
                t = Ve().memoizedState;
            return [e, t];
        },
        useMutableSource: ac,
        useSyncExternalStore: cc,
        useId: xc,
        unstable_isNewReconciler: !1,
    },
    xp = {
        readContext: Ae,
        useCallback: kc,
        useContext: Ae,
        useEffect: as,
        useImperativeHandle: wc,
        useInsertionEffect: yc,
        useLayoutEffect: gc,
        useMemo: _c,
        useReducer: Ci,
        useRef: vc,
        useState: function () {
            return Ci(Er);
        },
        useDebugValue: cs,
        useDeferredValue: function (e) {
            var t = Ve();
            return ne === null
                ? (t.memoizedState = e)
                : Ec(t, ne.memoizedState, e);
        },
        useTransition: function () {
            var e = Ci(Er)[0],
                t = Ve().memoizedState;
            return [e, t];
        },
        useMutableSource: ac,
        useSyncExternalStore: cc,
        useId: xc,
        unstable_isNewReconciler: !1,
    };
function Qe(e, t) {
    if (e && e.defaultProps) {
        (t = Z({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function fl(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : Z({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wo = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? tn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ye(),
            o = Tt(e),
            i = ft(r, o);
        (i.payload = t),
            n != null && (i.callback = n),
            (t = Mt(e, i, o)),
            t !== null && (Ge(t, e, o, r), eo(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ye(),
            o = Tt(e),
            i = ft(r, o);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = Mt(e, i, o)),
            t !== null && (Ge(t, e, o, r), eo(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ye(),
            r = Tt(e),
            o = ft(n, r);
        (o.tag = 2),
            t != null && (o.callback = t),
            (t = Mt(e, o, r)),
            t !== null && (Ge(t, e, r, n), eo(t, e, r));
    },
};
function mu(e, t, n, r, o, i, l) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, l)
            : t.prototype && t.prototype.isPureReactComponent
            ? !vr(n, r) || !vr(o, i)
            : !0
    );
}
function Rc(e, t, n) {
    var r = !1,
        o = Ft,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = Ae(i))
            : ((o = Pe(t) ? Gt : he.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? Ln(e, o) : Ft)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Wo),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function vu(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
}
function pl(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ns(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
        ? (o.context = Ae(i))
        : ((i = Pe(t) ? Gt : he.current), (o.context = Ln(e, i))),
        (o.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (fl(e, t, i, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" &&
                typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" &&
                o.UNSAFE_componentWillMount(),
            t !== o.state && Wo.enqueueReplaceState(o, o.state, null),
            Eo(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tn(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Jd(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (i) {
        o =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function Pi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hl(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Cp = typeof WeakMap == "function" ? WeakMap : Map;
function Mc(e, t, n) {
    (n = ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Ro || ((Ro = !0), (xl = r)), hl(e, t);
        }),
        n
    );
}
function Nc(e, t, n) {
    (n = ft(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                hl(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                hl(e, t),
                    typeof r != "function" &&
                        (Nt === null ? (Nt = new Set([this])) : Nt.add(this));
                var l = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: l !== null ? l : "",
                });
            }),
        n
    );
}
function yu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Cp();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = Up.bind(null, e, t, n)), t.then(e, e));
}
function gu(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Su(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = ft(-1, 1)), (t.tag = 2), Mt(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var Pp = yt.ReactCurrentOwner,
    xe = !1;
function ve(e, t, n, r) {
    t.child = e === null ? ic(t, null, n, r) : Mn(t, e.child, n, r);
}
function wu(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        En(t, o),
        (r = ss(e, t, n, r, i, o)),
        (n = us()),
        e !== null && !xe
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              vt(e, t, o))
            : (K && n && Gl(t), (t.flags |= 1), ve(e, t, r, o), t.child)
    );
}
function ku(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
            !gs(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), Tc(e, t, i, r, o))
            : ((e = lo(n.type, null, r, t, t.mode, o)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
        var l = i.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : vr),
            n(l, r) && e.ref === t.ref)
        )
            return vt(e, t, o);
    }
    return (
        (t.flags |= 1),
        (e = zt(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function Tc(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (vr(i, r) && e.ref === t.ref)
            if (((xe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
                e.flags & 131072 && (xe = !0);
            else return (t.lanes = e.lanes), vt(e, t, o);
    }
    return ml(e, t, n, r, o);
}
function zc(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                H(yn, Re),
                (Re |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    H(yn, Re),
                    (Re |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                H(yn, Re),
                (Re |= r);
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            H(yn, Re),
            (Re |= r);
    return ve(e, t, o, n), t.child;
}
function Ic(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function ml(e, t, n, r, o) {
    var i = Pe(n) ? Gt : he.current;
    return (
        (i = Ln(t, i)),
        En(t, o),
        (n = ss(e, t, n, r, i, o)),
        (r = us()),
        e !== null && !xe
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              vt(e, t, o))
            : (K && r && Gl(t), (t.flags |= 1), ve(e, t, n, o), t.child)
    );
}
function _u(e, t, n, r, o) {
    if (Pe(n)) {
        var i = !0;
        go(t);
    } else i = !1;
    if ((En(t, o), t.stateNode === null))
        ro(e, t), Rc(t, n, r), pl(t, n, r, o), (r = !0);
    else if (e === null) {
        var l = t.stateNode,
            s = t.memoizedProps;
        l.props = s;
        var u = l.context,
            a = n.contextType;
        typeof a == "object" && a !== null
            ? (a = Ae(a))
            : ((a = Pe(n) ? Gt : he.current), (a = Ln(t, a)));
        var h = n.getDerivedStateFromProps,
            m =
                typeof h == "function" ||
                typeof l.getSnapshotBeforeUpdate == "function";
        m ||
            (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
                typeof l.componentWillReceiveProps != "function") ||
            ((s !== r || u !== a) && vu(t, l, r, a)),
            (wt = !1);
        var f = t.memoizedState;
        (l.state = f),
            Eo(t, r, l, o),
            (u = t.memoizedState),
            s !== r || f !== u || Ce.current || wt
                ? (typeof h == "function" &&
                      (fl(t, n, h, r), (u = t.memoizedState)),
                  (s = wt || mu(t, n, s, r, f, u, a))
                      ? (m ||
                            (typeof l.UNSAFE_componentWillMount != "function" &&
                                typeof l.componentWillMount != "function") ||
                            (typeof l.componentWillMount == "function" &&
                                l.componentWillMount(),
                            typeof l.UNSAFE_componentWillMount == "function" &&
                                l.UNSAFE_componentWillMount()),
                        typeof l.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof l.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = a),
                  (r = s))
                : (typeof l.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (l = t.stateNode),
            sc(e, t),
            (s = t.memoizedProps),
            (a = t.type === t.elementType ? s : Qe(t.type, s)),
            (l.props = a),
            (m = t.pendingProps),
            (f = l.context),
            (u = n.contextType),
            typeof u == "object" && u !== null
                ? (u = Ae(u))
                : ((u = Pe(n) ? Gt : he.current), (u = Ln(t, u)));
        var v = n.getDerivedStateFromProps;
        (h =
            typeof v == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function") ||
            (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
                typeof l.componentWillReceiveProps != "function") ||
            ((s !== m || f !== u) && vu(t, l, r, u)),
            (wt = !1),
            (f = t.memoizedState),
            (l.state = f),
            Eo(t, r, l, o);
        var y = t.memoizedState;
        s !== m || f !== y || Ce.current || wt
            ? (typeof v == "function" &&
                  (fl(t, n, v, r), (y = t.memoizedState)),
              (a = wt || mu(t, n, a, r, f, y, u) || !1)
                  ? (h ||
                        (typeof l.UNSAFE_componentWillUpdate != "function" &&
                            typeof l.componentWillUpdate != "function") ||
                        (typeof l.componentWillUpdate == "function" &&
                            l.componentWillUpdate(r, y, u),
                        typeof l.UNSAFE_componentWillUpdate == "function" &&
                            l.UNSAFE_componentWillUpdate(r, y, u)),
                    typeof l.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof l.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof l.componentDidUpdate != "function" ||
                        (s === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof l.getSnapshotBeforeUpdate != "function" ||
                        (s === e.memoizedProps && f === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = y)),
              (l.props = r),
              (l.state = y),
              (l.context = u),
              (r = a))
            : (typeof l.componentDidUpdate != "function" ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
              typeof l.getSnapshotBeforeUpdate != "function" ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return vl(e, t, n, r, i, o);
}
function vl(e, t, n, r, o, i) {
    Ic(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return o && su(t, n, !1), vt(e, t, i);
    (r = t.stateNode), (Pp.current = t);
    var s =
        l && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && l
            ? ((t.child = Mn(t, e.child, null, i)),
              (t.child = Mn(t, null, s, i)))
            : ve(e, t, s, i),
        (t.memoizedState = r.state),
        o && su(t, n, !0),
        t.child
    );
}
function Oc(e) {
    var t = e.stateNode;
    t.pendingContext
        ? lu(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && lu(e, t.context, !1),
        rs(e, t.containerInfo);
}
function Eu(e, t, n, r, o) {
    return Rn(), Jl(o), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var yl = { dehydrated: null, treeContext: null, retryLane: 0 };
function gl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Fc(e, t, n) {
    var r = t.pendingProps,
        o = X.current,
        i = !1,
        l = (t.flags & 128) !== 0,
        s;
    if (
        ((s = l) ||
            (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        s
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (o |= 1),
        H(X, o & 1),
        e === null)
    )
        return (
            cl(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((l = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (l = { mode: "hidden", children: l }),
                        !(r & 1) && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = l))
                            : (i = Yo(l, r, 0, null)),
                        (e = Xt(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = gl(n)),
                        (t.memoizedState = yl),
                        e)
                      : ds(t, l))
        );
    if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
        return Lp(e, t, l, r, s, o, n);
    if (i) {
        (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
        var u = { mode: "hidden", children: r.children };
        return (
            !(l & 1) && t.child !== o
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = u),
                  (t.deletions = null))
                : ((r = zt(o, u)),
                  (r.subtreeFlags = o.subtreeFlags & 14680064)),
            s !== null
                ? (i = zt(s, i))
                : ((i = Xt(i, l, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (l = e.child.memoizedState),
            (l =
                l === null
                    ? gl(n)
                    : {
                          baseLanes: l.baseLanes | n,
                          cachePool: null,
                          transitions: l.transitions,
                      }),
            (i.memoizedState = l),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = yl),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = zt(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function ds(e, t) {
    return (
        (t = Yo({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Wr(e, t, n, r) {
    return (
        r !== null && Jl(r),
        Mn(t, e.child, null, n),
        (e = ds(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Lp(e, t, n, r, o, i, l) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Pi(Error(k(422)))), Wr(e, t, l, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (o = t.mode),
              (r = Yo({ mode: "visible", children: r.children }, o, 0, null)),
              (i = Xt(i, o, l, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && Mn(t, e.child, null, l),
              (t.child.memoizedState = gl(l)),
              (t.memoizedState = yl),
              i);
    if (!(t.mode & 1)) return Wr(e, t, l, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
        return (
            (r = s), (i = Error(k(419))), (r = Pi(i, r, void 0)), Wr(e, t, l, r)
        );
    }
    if (((s = (l & e.childLanes) !== 0), xe || s)) {
        if (((r = ie), r !== null)) {
            switch (l & -l) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            (o = o & (r.suspendedLanes | l) ? 0 : o),
                o !== 0 &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), mt(e, o), Ge(r, e, o, -1));
        }
        return ys(), (r = Pi(Error(k(421)))), Wr(e, t, l, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Bp.bind(null, e)),
          (o._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (Ne = Rt(o.nextSibling)),
          (Te = t),
          (K = !0),
          (Ye = null),
          e !== null &&
              ((De[$e++] = ct),
              (De[$e++] = dt),
              (De[$e++] = Zt),
              (ct = e.id),
              (dt = e.overflow),
              (Zt = t)),
          (t = ds(t, r.children)),
          (t.flags |= 4096),
          t);
}
function xu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), dl(e.return, t, n);
}
function Li(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: o,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = o));
}
function jc(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ((ve(e, t, r.children, n), (r = X.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && xu(e, n, t);
                else if (e.tag === 19) xu(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((H(X, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate),
                        e !== null && xo(e) === null && (o = n),
                        (n = n.sibling);
                (n = o),
                    n === null
                        ? ((o = t.child), (t.child = null))
                        : ((o = n.sibling), (n.sibling = null)),
                    Li(t, !1, o, n, i);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && xo(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Li(t, !0, n, null, i);
                break;
            case "together":
                Li(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function ro(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (qt |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
        for (
            e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = zt(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Rp(e, t, n) {
    switch (t.tag) {
        case 3:
            Oc(t), Rn();
            break;
        case 5:
            uc(t);
            break;
        case 1:
            Pe(t.type) && go(t);
            break;
        case 4:
            rs(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            H(ko, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (H(X, X.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Fc(e, t, n)
                    : (H(X, X.current & 1),
                      (e = vt(e, t, n)),
                      e !== null ? e.sibling : null);
            H(X, X.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return jc(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null &&
                    ((o.rendering = null),
                    (o.tail = null),
                    (o.lastEffect = null)),
                H(X, X.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), zc(e, t, n);
    }
    return vt(e, t, n);
}
var Dc, Sl, $c, Uc;
Dc = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Sl = function () {};
$c = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), Qt(lt.current);
        var i = null;
        switch (n) {
            case "input":
                (o = Ai(e, o)), (r = Ai(e, r)), (i = []);
                break;
            case "select":
                (o = Z({}, o, { value: void 0 })),
                    (r = Z({}, r, { value: void 0 })),
                    (i = []);
                break;
            case "textarea":
                (o = Wi(e, o)), (r = Wi(e, r)), (i = []);
                break;
            default:
                typeof o.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = vo);
        }
        Ki(n, r);
        var l;
        n = null;
        for (a in o)
            if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
                if (a === "style") {
                    var s = o[a];
                    for (l in s)
                        s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                } else
                    a !== "dangerouslySetInnerHTML" &&
                        a !== "children" &&
                        a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (ar.hasOwnProperty(a)
                            ? i || (i = [])
                            : (i = i || []).push(a, null));
        for (a in r) {
            var u = r[a];
            if (
                ((s = o != null ? o[a] : void 0),
                r.hasOwnProperty(a) && u !== s && (u != null || s != null))
            )
                if (a === "style")
                    if (s) {
                        for (l in s)
                            !s.hasOwnProperty(l) ||
                                (u && u.hasOwnProperty(l)) ||
                                (n || (n = {}), (n[l] = ""));
                        for (l in u)
                            u.hasOwnProperty(l) &&
                                s[l] !== u[l] &&
                                (n || (n = {}), (n[l] = u[l]));
                    } else n || (i || (i = []), i.push(a, n)), (n = u);
                else
                    a === "dangerouslySetInnerHTML"
                        ? ((u = u ? u.__html : void 0),
                          (s = s ? s.__html : void 0),
                          u != null && s !== u && (i = i || []).push(a, u))
                        : a === "children"
                        ? (typeof u != "string" && typeof u != "number") ||
                          (i = i || []).push(a, "" + u)
                        : a !== "suppressContentEditableWarning" &&
                          a !== "suppressHydrationWarning" &&
                          (ar.hasOwnProperty(a)
                              ? (u != null &&
                                    a === "onScroll" &&
                                    W("scroll", e),
                                i || s === u || (i = []))
                              : (i = i || []).push(a, u));
        }
        n && (i = i || []).push("style", n);
        var a = i;
        (t.updateQueue = a) && (t.flags |= 4);
    }
};
Uc = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Kn(e, t) {
    if (!K)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling);
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Mp(e, t, n) {
    var r = t.pendingProps;
    switch ((Zl(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return fe(t), null;
        case 1:
            return Pe(t.type) && yo(), fe(t), null;
        case 3:
            return (
                (r = t.stateNode),
                Nn(),
                Q(Ce),
                Q(he),
                is(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Vr(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Ye !== null && (Ll(Ye), (Ye = null)))),
                Sl(e, t),
                fe(t),
                null
            );
        case 5:
            os(t);
            var o = Qt(kr.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                $c(e, t, n, r, o),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(k(166));
                    return fe(t), null;
                }
                if (((e = Qt(lt.current)), Vr(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (
                        ((r[ot] = t), (r[Sr] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            W("cancel", r), W("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            W("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Jn.length; o++) W(Jn[o], r);
                            break;
                        case "source":
                            W("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            W("error", r), W("load", r);
                            break;
                        case "details":
                            W("toggle", r);
                            break;
                        case "input":
                            Is(r, i), W("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }),
                                W("invalid", r);
                            break;
                        case "textarea":
                            Fs(r, i), W("invalid", r);
                    }
                    Ki(n, i), (o = null);
                    for (var l in i)
                        if (i.hasOwnProperty(l)) {
                            var s = i[l];
                            l === "children"
                                ? typeof s == "string"
                                    ? r.textContent !== s &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Ar(r.textContent, s, e),
                                      (o = ["children", s]))
                                    : typeof s == "number" &&
                                      r.textContent !== "" + s &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Ar(r.textContent, s, e),
                                      (o = ["children", "" + s]))
                                : ar.hasOwnProperty(l) &&
                                  s != null &&
                                  l === "onScroll" &&
                                  W("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Ir(r), Os(r, i, !0);
                            break;
                        case "textarea":
                            Ir(r), js(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = vo);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (l = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = pa(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = l.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = l.createElement(n, { is: r.is }))
                                : ((e = l.createElement(n)),
                                  n === "select" &&
                                      ((l = e),
                                      r.multiple
                                          ? (l.multiple = !0)
                                          : r.size && (l.size = r.size)))
                            : (e = l.createElementNS(e, n)),
                        (e[ot] = t),
                        (e[Sr] = r),
                        Dc(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((l = Yi(n, r)), n)) {
                            case "dialog":
                                W("cancel", e), W("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                W("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Jn.length; o++) W(Jn[o], e);
                                o = r;
                                break;
                            case "source":
                                W("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                W("error", e), W("load", e), (o = r);
                                break;
                            case "details":
                                W("toggle", e), (o = r);
                                break;
                            case "input":
                                Is(e, r), (o = Ai(e, r)), W("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (o = Z({}, r, { value: void 0 })),
                                    W("invalid", e);
                                break;
                            case "textarea":
                                Fs(e, r), (o = Wi(e, r)), W("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        Ki(n, o), (s = o);
                        for (i in s)
                            if (s.hasOwnProperty(i)) {
                                var u = s[i];
                                i === "style"
                                    ? va(e, u)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((u = u ? u.__html : void 0),
                                      u != null && ha(e, u))
                                    : i === "children"
                                    ? typeof u == "string"
                                        ? (n !== "textarea" || u !== "") &&
                                          cr(e, u)
                                        : typeof u == "number" && cr(e, "" + u)
                                    : i !== "suppressContentEditableWarning" &&
                                      i !== "suppressHydrationWarning" &&
                                      i !== "autoFocus" &&
                                      (ar.hasOwnProperty(i)
                                          ? u != null &&
                                            i === "onScroll" &&
                                            W("scroll", e)
                                          : u != null && Fl(e, i, u, l));
                            }
                        switch (n) {
                            case "input":
                                Ir(e), Os(e, r, !1);
                                break;
                            case "textarea":
                                Ir(e), js(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + Ot(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? Sn(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          Sn(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof o.onClick == "function" &&
                                    (e.onclick = vo);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return fe(t), null;
        case 6:
            if (e && t.stateNode != null) Uc(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(k(166));
                if (((n = Qt(kr.current)), Qt(lt.current), Vr(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[ot] = t),
                        (i = r.nodeValue !== n) && ((e = Te), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Ar(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Ar(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[ot] = t),
                        (t.stateNode = r);
            }
            return fe(t), null;
        case 13:
            if (
                (Q(X),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (K && Ne !== null && t.mode & 1 && !(t.flags & 128))
                    rc(), Rn(), (t.flags |= 98560), (i = !1);
                else if (((i = Vr(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(k(318));
                        if (
                            ((i = t.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error(k(317));
                        i[ot] = t;
                    } else
                        Rn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    fe(t), (i = !1);
                } else Ye !== null && (Ll(Ye), (Ye = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || X.current & 1
                              ? re === 0 && (re = 3)
                              : ys())),
                  t.updateQueue !== null && (t.flags |= 4),
                  fe(t),
                  null);
        case 4:
            return (
                Nn(),
                Sl(e, t),
                e === null && yr(t.stateNode.containerInfo),
                fe(t),
                null
            );
        case 10:
            return es(t.type._context), fe(t), null;
        case 17:
            return Pe(t.type) && yo(), fe(t), null;
        case 19:
            if ((Q(X), (i = t.memoizedState), i === null)) return fe(t), null;
            if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
                if (r) Kn(i, !1);
                else {
                    if (re !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((l = xo(e)), l !== null)) {
                                for (
                                    t.flags |= 128,
                                        Kn(i, !1),
                                        r = l.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (l = i.alternate),
                                        l === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = l.childLanes),
                                              (i.lanes = l.lanes),
                                              (i.child = l.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  l.memoizedProps),
                                              (i.memoizedState =
                                                  l.memoizedState),
                                              (i.updateQueue = l.updateQueue),
                                              (i.type = l.type),
                                              (e = l.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return H(X, (X.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null &&
                        b() > zn &&
                        ((t.flags |= 128),
                        (r = !0),
                        Kn(i, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = xo(l)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Kn(i, !0),
                            i.tail === null &&
                                i.tailMode === "hidden" &&
                                !l.alternate &&
                                !K)
                        )
                            return fe(t), null;
                    } else
                        2 * b() - i.renderingStartTime > zn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            Kn(i, !1),
                            (t.lanes = 4194304));
                i.isBackwards
                    ? ((l.sibling = t.child), (t.child = l))
                    : ((n = i.last),
                      n !== null ? (n.sibling = l) : (t.child = l),
                      (i.last = l));
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = b()),
                  (t.sibling = null),
                  (n = X.current),
                  H(X, r ? (n & 1) | 2 : n & 1),
                  t)
                : (fe(t), null);
        case 22:
        case 23:
            return (
                vs(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? Re & 1073741824 &&
                      (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : fe(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(k(156, t.tag));
}
function Np(e, t) {
    switch ((Zl(t), t.tag)) {
        case 1:
            return (
                Pe(t.type) && yo(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                Nn(),
                Q(Ce),
                Q(he),
                is(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return os(t), null;
        case 13:
            if (
                (Q(X),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(k(340));
                Rn();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return Q(X), null;
        case 4:
            return Nn(), null;
        case 10:
            return es(t.type._context), null;
        case 22:
        case 23:
            return vs(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Qr = !1,
    pe = !1,
    Tp = typeof WeakSet == "function" ? WeakSet : Set,
    L = null;
function vn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                J(e, t, r);
            }
        else n.current = null;
}
function wl(e, t, n) {
    try {
        n();
    } catch (r) {
        J(e, t, r);
    }
}
var Cu = !1;
function zp(e, t) {
    if (((rl = po), (e = Wa()), Xl(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var l = 0,
                        s = -1,
                        u = -1,
                        a = 0,
                        h = 0,
                        m = e,
                        f = null;
                    t: for (;;) {
                        for (
                            var v;
                            m !== n ||
                                (o !== 0 && m.nodeType !== 3) ||
                                (s = l + o),
                                m !== i ||
                                    (r !== 0 && m.nodeType !== 3) ||
                                    (u = l + r),
                                m.nodeType === 3 && (l += m.nodeValue.length),
                                (v = m.firstChild) !== null;

                        )
                            (f = m), (m = v);
                        for (;;) {
                            if (m === e) break t;
                            if (
                                (f === n && ++a === o && (s = l),
                                f === i && ++h === r && (u = l),
                                (v = m.nextSibling) !== null)
                            )
                                break;
                            (m = f), (f = m.parentNode);
                        }
                        m = v;
                    }
                    n = s === -1 || u === -1 ? null : { start: s, end: u };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        ol = { focusedElem: e, selectionRange: n }, po = !1, L = t;
        L !== null;

    )
        if (
            ((t = L),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (L = e);
        else
            for (; L !== null; ) {
                t = L;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var g = y.memoizedProps,
                                        x = y.memoizedState,
                                        d = t.stateNode,
                                        c = d.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? g
                                                : Qe(t.type, g),
                                            x
                                        );
                                    d.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var p = t.stateNode.containerInfo;
                                p.nodeType === 1
                                    ? (p.textContent = "")
                                    : p.nodeType === 9 &&
                                      p.documentElement &&
                                      p.removeChild(p.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(k(163));
                        }
                } catch (S) {
                    J(t, t.return, S);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (L = e);
                    break;
                }
                L = t.return;
            }
    return (y = Cu), (Cu = !1), y;
}
function or(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), i !== void 0 && wl(t, n, i);
            }
            o = o.next;
        } while (o !== r);
    }
}
function Qo(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function kl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Bc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Bc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[ot],
                delete t[Sr],
                delete t[sl],
                delete t[hp],
                delete t[mp])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Ac(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pu(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ac(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function _l(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = vo));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (_l(e, t, n), e = e.sibling; e !== null; )
            _l(e, t, n), (e = e.sibling);
}
function El(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (El(e, t, n), e = e.sibling; e !== null; )
            El(e, t, n), (e = e.sibling);
}
var se = null,
    Ke = !1;
function gt(e, t, n) {
    for (n = n.child; n !== null; ) Vc(e, t, n), (n = n.sibling);
}
function Vc(e, t, n) {
    if (it && typeof it.onCommitFiberUnmount == "function")
        try {
            it.onCommitFiberUnmount(Do, n);
        } catch {}
    switch (n.tag) {
        case 5:
            pe || vn(n, t);
        case 6:
            var r = se,
                o = Ke;
            (se = null),
                gt(e, t, n),
                (se = r),
                (Ke = o),
                se !== null &&
                    (Ke
                        ? ((e = se),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : se.removeChild(n.stateNode));
            break;
        case 18:
            se !== null &&
                (Ke
                    ? ((e = se),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? wi(e.parentNode, n)
                          : e.nodeType === 1 && wi(e, n),
                      hr(e))
                    : wi(se, n.stateNode));
            break;
        case 4:
            (r = se),
                (o = Ke),
                (se = n.stateNode.containerInfo),
                (Ke = !0),
                gt(e, t, n),
                (se = r),
                (Ke = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !pe &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                o = r = r.next;
                do {
                    var i = o,
                        l = i.destroy;
                    (i = i.tag),
                        l !== void 0 && (i & 2 || i & 4) && wl(n, t, l),
                        (o = o.next);
                } while (o !== r);
            }
            gt(e, t, n);
            break;
        case 1:
            if (
                !pe &&
                (vn(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (s) {
                    J(n, t, s);
                }
            gt(e, t, n);
            break;
        case 21:
            gt(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((pe = (r = pe) || n.memoizedState !== null),
                  gt(e, t, n),
                  (pe = r))
                : gt(e, t, n);
            break;
        default:
            gt(e, t, n);
    }
}
function Lu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Tp()),
            t.forEach(function (r) {
                var o = Ap.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function We(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    l = t,
                    s = l;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                        case 5:
                            (se = s.stateNode), (Ke = !1);
                            break e;
                        case 3:
                            (se = s.stateNode.containerInfo), (Ke = !0);
                            break e;
                        case 4:
                            (se = s.stateNode.containerInfo), (Ke = !0);
                            break e;
                    }
                    s = s.return;
                }
                if (se === null) throw Error(k(160));
                Vc(i, l, o), (se = null), (Ke = !1);
                var u = o.alternate;
                u !== null && (u.return = null), (o.return = null);
            } catch (a) {
                J(o, t, a);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Hc(t, e), (t = t.sibling);
}
function Hc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((We(t, e), et(e), r & 4)) {
                try {
                    or(3, e, e.return), Qo(3, e);
                } catch (g) {
                    J(e, e.return, g);
                }
                try {
                    or(5, e, e.return);
                } catch (g) {
                    J(e, e.return, g);
                }
            }
            break;
        case 1:
            We(t, e), et(e), r & 512 && n !== null && vn(n, n.return);
            break;
        case 5:
            if (
                (We(t, e),
                et(e),
                r & 512 && n !== null && vn(n, n.return),
                e.flags & 32)
            ) {
                var o = e.stateNode;
                try {
                    cr(o, "");
                } catch (g) {
                    J(e, e.return, g);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var i = e.memoizedProps,
                    l = n !== null ? n.memoizedProps : i,
                    s = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), u !== null))
                    try {
                        s === "input" &&
                            i.type === "radio" &&
                            i.name != null &&
                            da(o, i),
                            Yi(s, l);
                        var a = Yi(s, i);
                        for (l = 0; l < u.length; l += 2) {
                            var h = u[l],
                                m = u[l + 1];
                            h === "style"
                                ? va(o, m)
                                : h === "dangerouslySetInnerHTML"
                                ? ha(o, m)
                                : h === "children"
                                ? cr(o, m)
                                : Fl(o, h, m, a);
                        }
                        switch (s) {
                            case "input":
                                Vi(o, i);
                                break;
                            case "textarea":
                                fa(o, i);
                                break;
                            case "select":
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var v = i.value;
                                v != null
                                    ? Sn(o, !!i.multiple, v, !1)
                                    : f !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? Sn(
                                                o,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0
                                            )
                                          : Sn(
                                                o,
                                                !!i.multiple,
                                                i.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        o[Sr] = i;
                    } catch (g) {
                        J(e, e.return, g);
                    }
            }
            break;
        case 6:
            if ((We(t, e), et(e), r & 4)) {
                if (e.stateNode === null) throw Error(k(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                    o.nodeValue = i;
                } catch (g) {
                    J(e, e.return, g);
                }
            }
            break;
        case 3:
            if (
                (We(t, e),
                et(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    hr(t.containerInfo);
                } catch (g) {
                    J(e, e.return, g);
                }
            break;
        case 4:
            We(t, e), et(e);
            break;
        case 13:
            We(t, e),
                et(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((i = o.memoizedState !== null),
                    (o.stateNode.isHidden = i),
                    !i ||
                        (o.alternate !== null &&
                            o.alternate.memoizedState !== null) ||
                        (hs = b())),
                r & 4 && Lu(e);
            break;
        case 22:
            if (
                ((h = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((pe = (a = pe) || h), We(t, e), (pe = a))
                    : We(t, e),
                et(e),
                r & 8192)
            ) {
                if (
                    ((a = e.memoizedState !== null),
                    (e.stateNode.isHidden = a) && !h && e.mode & 1)
                )
                    for (L = e, h = e.child; h !== null; ) {
                        for (m = L = h; L !== null; ) {
                            switch (((f = L), (v = f.child), f.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    or(4, f, f.return);
                                    break;
                                case 1:
                                    vn(f, f.return);
                                    var y = f.stateNode;
                                    if (
                                        typeof y.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = f), (n = f.return);
                                        try {
                                            (t = r),
                                                (y.props = t.memoizedProps),
                                                (y.state = t.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (g) {
                                            J(r, n, g);
                                        }
                                    }
                                    break;
                                case 5:
                                    vn(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Mu(m);
                                        continue;
                                    }
                            }
                            v !== null ? ((v.return = f), (L = v)) : Mu(m);
                        }
                        h = h.sibling;
                    }
                e: for (h = null, m = e; ; ) {
                    if (m.tag === 5) {
                        if (h === null) {
                            h = m;
                            try {
                                (o = m.stateNode),
                                    a
                                        ? ((i = o.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (i.display = "none"))
                                        : ((s = m.stateNode),
                                          (u = m.memoizedProps.style),
                                          (l =
                                              u != null &&
                                              u.hasOwnProperty("display")
                                                  ? u.display
                                                  : null),
                                          (s.style.display = ma("display", l)));
                            } catch (g) {
                                J(e, e.return, g);
                            }
                        }
                    } else if (m.tag === 6) {
                        if (h === null)
                            try {
                                m.stateNode.nodeValue = a
                                    ? ""
                                    : m.memoizedProps;
                            } catch (g) {
                                J(e, e.return, g);
                            }
                    } else if (
                        ((m.tag !== 22 && m.tag !== 23) ||
                            m.memoizedState === null ||
                            m === e) &&
                        m.child !== null
                    ) {
                        (m.child.return = m), (m = m.child);
                        continue;
                    }
                    if (m === e) break e;
                    for (; m.sibling === null; ) {
                        if (m.return === null || m.return === e) break e;
                        h === m && (h = null), (m = m.return);
                    }
                    h === m && (h = null),
                        (m.sibling.return = m.return),
                        (m = m.sibling);
                }
            }
            break;
        case 19:
            We(t, e), et(e), r & 4 && Lu(e);
            break;
        case 21:
            break;
        default:
            We(t, e), et(e);
    }
}
function et(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Ac(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(k(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (cr(o, ""), (r.flags &= -33));
                    var i = Pu(e);
                    El(e, i, o);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        s = Pu(e);
                    _l(e, s, l);
                    break;
                default:
                    throw Error(k(161));
            }
        } catch (u) {
            J(e, e.return, u);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Ip(e, t, n) {
    (L = e), Wc(e);
}
function Wc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
        var o = L,
            i = o.child;
        if (o.tag === 22 && r) {
            var l = o.memoizedState !== null || Qr;
            if (!l) {
                var s = o.alternate,
                    u = (s !== null && s.memoizedState !== null) || pe;
                s = Qr;
                var a = pe;
                if (((Qr = l), (pe = u) && !a))
                    for (L = o; L !== null; )
                        (l = L),
                            (u = l.child),
                            l.tag === 22 && l.memoizedState !== null
                                ? Nu(o)
                                : u !== null
                                ? ((u.return = l), (L = u))
                                : Nu(o);
                for (; i !== null; ) (L = i), Wc(i), (i = i.sibling);
                (L = o), (Qr = s), (pe = a);
            }
            Ru(e);
        } else
            o.subtreeFlags & 8772 && i !== null
                ? ((i.return = o), (L = i))
                : Ru(e);
    }
}
function Ru(e) {
    for (; L !== null; ) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            pe || Qo(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !pe)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Qe(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        o,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var i = t.updateQueue;
                            i !== null && fu(t, i, r);
                            break;
                        case 3:
                            var l = t.updateQueue;
                            if (l !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                fu(t, l, n);
                            }
                            break;
                        case 5:
                            var s = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = s;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var a = t.alternate;
                                if (a !== null) {
                                    var h = a.memoizedState;
                                    if (h !== null) {
                                        var m = h.dehydrated;
                                        m !== null && hr(m);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(k(163));
                    }
                pe || (t.flags & 512 && kl(t));
            } catch (f) {
                J(t, t.return, f);
            }
        }
        if (t === e) {
            L = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (L = n);
            break;
        }
        L = t.return;
    }
}
function Mu(e) {
    for (; L !== null; ) {
        var t = L;
        if (t === e) {
            L = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (L = n);
            break;
        }
        L = t.return;
    }
}
function Nu(e) {
    for (; L !== null; ) {
        var t = L;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Qo(4, t);
                    } catch (u) {
                        J(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            J(t, o, u);
                        }
                    }
                    var i = t.return;
                    try {
                        kl(t);
                    } catch (u) {
                        J(t, i, u);
                    }
                    break;
                case 5:
                    var l = t.return;
                    try {
                        kl(t);
                    } catch (u) {
                        J(t, l, u);
                    }
            }
        } catch (u) {
            J(t, t.return, u);
        }
        if (t === e) {
            L = null;
            break;
        }
        var s = t.sibling;
        if (s !== null) {
            (s.return = t.return), (L = s);
            break;
        }
        L = t.return;
    }
}
var Op = Math.ceil,
    Lo = yt.ReactCurrentDispatcher,
    fs = yt.ReactCurrentOwner,
    Be = yt.ReactCurrentBatchConfig,
    $ = 0,
    ie = null,
    te = null,
    ue = 0,
    Re = 0,
    yn = Dt(0),
    re = 0,
    Cr = null,
    qt = 0,
    Ko = 0,
    ps = 0,
    ir = null,
    Ee = null,
    hs = 0,
    zn = 1 / 0,
    ut = null,
    Ro = !1,
    xl = null,
    Nt = null,
    Kr = !1,
    xt = null,
    Mo = 0,
    lr = 0,
    Cl = null,
    oo = -1,
    io = 0;
function ye() {
    return $ & 6 ? b() : oo !== -1 ? oo : (oo = b());
}
function Tt(e) {
    return e.mode & 1
        ? $ & 2 && ue !== 0
            ? ue & -ue
            : yp.transition !== null
            ? (io === 0 && (io = Ra()), io)
            : ((e = B),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : Fa(e.type))),
              e)
        : 1;
}
function Ge(e, t, n, r) {
    if (50 < lr) throw ((lr = 0), (Cl = null), Error(k(185)));
    Lr(e, n, r),
        (!($ & 2) || e !== ie) &&
            (e === ie && (!($ & 2) && (Ko |= n), re === 4 && _t(e, ue)),
            Le(e, r),
            n === 1 &&
                $ === 0 &&
                !(t.mode & 1) &&
                ((zn = b() + 500), Vo && $t()));
}
function Le(e, t) {
    var n = e.callbackNode;
    yf(e, t);
    var r = fo(e, e === ie ? ue : 0);
    if (r === 0)
        n !== null && Us(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Us(n), t === 1))
            e.tag === 0 ? vp(Tu.bind(null, e)) : ec(Tu.bind(null, e)),
                fp(function () {
                    !($ & 6) && $t();
                }),
                (n = null);
        else {
            switch (Ma(r)) {
                case 1:
                    n = Bl;
                    break;
                case 4:
                    n = Pa;
                    break;
                case 16:
                    n = co;
                    break;
                case 536870912:
                    n = La;
                    break;
                default:
                    n = co;
            }
            n = qc(n, Qc.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Qc(e, t) {
    if (((oo = -1), (io = 0), $ & 6)) throw Error(k(327));
    var n = e.callbackNode;
    if (xn() && e.callbackNode !== n) return null;
    var r = fo(e, e === ie ? ue : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = No(e, r);
    else {
        t = r;
        var o = $;
        $ |= 2;
        var i = Yc();
        (ie !== e || ue !== t) && ((ut = null), (zn = b() + 500), Yt(e, t));
        do
            try {
                Dp();
                break;
            } catch (s) {
                Kc(e, s);
            }
        while (!0);
        bl(),
            (Lo.current = i),
            ($ = o),
            te !== null ? (t = 0) : ((ie = null), (ue = 0), (t = re));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((o = qi(e)), o !== 0 && ((r = o), (t = Pl(e, o)))),
            t === 1)
        )
            throw ((n = Cr), Yt(e, 0), _t(e, r), Le(e, b()), n);
        if (t === 6) _t(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !Fp(o) &&
                    ((t = No(e, r)),
                    t === 2 &&
                        ((i = qi(e)), i !== 0 && ((r = i), (t = Pl(e, i)))),
                    t === 1))
            )
                throw ((n = Cr), Yt(e, 0), _t(e, r), Le(e, b()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(k(345));
                case 2:
                    At(e, Ee, ut);
                    break;
                case 3:
                    if (
                        (_t(e, r),
                        (r & 130023424) === r && ((t = hs + 500 - b()), 10 < t))
                    ) {
                        if (fo(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            ye(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = ll(At.bind(null, e, Ee, ut), t);
                        break;
                    }
                    At(e, Ee, ut);
                    break;
                case 4:
                    if ((_t(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var l = 31 - Xe(r);
                        (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
                    }
                    if (
                        ((r = o),
                        (r = b() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * Op(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = ll(At.bind(null, e, Ee, ut), r);
                        break;
                    }
                    At(e, Ee, ut);
                    break;
                case 5:
                    At(e, Ee, ut);
                    break;
                default:
                    throw Error(k(329));
            }
        }
    }
    return Le(e, b()), e.callbackNode === n ? Qc.bind(null, e) : null;
}
function Pl(e, t) {
    var n = ir;
    return (
        e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256),
        (e = No(e, t)),
        e !== 2 && ((t = Ee), (Ee = n), t !== null && Ll(t)),
        e
    );
}
function Ll(e) {
    Ee === null ? (Ee = e) : Ee.push.apply(Ee, e);
}
function Fp(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Ze(i(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function _t(e, t) {
    for (
        t &= ~ps,
            t &= ~Ko,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Xe(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Tu(e) {
    if ($ & 6) throw Error(k(327));
    xn();
    var t = fo(e, 0);
    if (!(t & 1)) return Le(e, b()), null;
    var n = No(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = qi(e);
        r !== 0 && ((t = r), (n = Pl(e, r)));
    }
    if (n === 1) throw ((n = Cr), Yt(e, 0), _t(e, t), Le(e, b()), n);
    if (n === 6) throw Error(k(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        At(e, Ee, ut),
        Le(e, b()),
        null
    );
}
function ms(e, t) {
    var n = $;
    $ |= 1;
    try {
        return e(t);
    } finally {
        ($ = n), $ === 0 && ((zn = b() + 500), Vo && $t());
    }
}
function bt(e) {
    xt !== null && xt.tag === 0 && !($ & 6) && xn();
    var t = $;
    $ |= 1;
    var n = Be.transition,
        r = B;
    try {
        if (((Be.transition = null), (B = 1), e)) return e();
    } finally {
        (B = r), (Be.transition = n), ($ = t), !($ & 6) && $t();
    }
}
function vs() {
    (Re = yn.current), Q(yn);
}
function Yt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), dp(n)), te !== null))
        for (n = te.return; n !== null; ) {
            var r = n;
            switch ((Zl(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && yo();
                    break;
                case 3:
                    Nn(), Q(Ce), Q(he), is();
                    break;
                case 5:
                    os(r);
                    break;
                case 4:
                    Nn();
                    break;
                case 13:
                    Q(X);
                    break;
                case 19:
                    Q(X);
                    break;
                case 10:
                    es(r.type._context);
                    break;
                case 22:
                case 23:
                    vs();
            }
            n = n.return;
        }
    if (
        ((ie = e),
        (te = e = zt(e.current, null)),
        (ue = Re = t),
        (re = 0),
        (Cr = null),
        (ps = Ko = qt = 0),
        (Ee = ir = null),
        Wt !== null)
    ) {
        for (t = 0; t < Wt.length; t++)
            if (((n = Wt[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var l = i.next;
                    (i.next = o), (r.next = l);
                }
                n.pending = r;
            }
        Wt = null;
    }
    return e;
}
function Kc(e, t) {
    do {
        var n = te;
        try {
            if ((bl(), (to.current = Po), Co)) {
                for (var r = G.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                Co = !1;
            }
            if (
                ((Jt = 0),
                (oe = ne = G = null),
                (rr = !1),
                (_r = 0),
                (fs.current = null),
                n === null || n.return === null)
            ) {
                (re = 1), (Cr = t), (te = null);
                break;
            }
            e: {
                var i = e,
                    l = n.return,
                    s = n,
                    u = t;
                if (
                    ((t = ue),
                    (s.flags |= 32768),
                    u !== null &&
                        typeof u == "object" &&
                        typeof u.then == "function")
                ) {
                    var a = u,
                        h = s,
                        m = h.tag;
                    if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var f = h.alternate;
                        f
                            ? ((h.updateQueue = f.updateQueue),
                              (h.memoizedState = f.memoizedState),
                              (h.lanes = f.lanes))
                            : ((h.updateQueue = null),
                              (h.memoizedState = null));
                    }
                    var v = gu(l);
                    if (v !== null) {
                        (v.flags &= -257),
                            Su(v, l, s, i, t),
                            v.mode & 1 && yu(i, a, t),
                            (t = v),
                            (u = a);
                        var y = t.updateQueue;
                        if (y === null) {
                            var g = new Set();
                            g.add(u), (t.updateQueue = g);
                        } else y.add(u);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            yu(i, a, t), ys();
                            break e;
                        }
                        u = Error(k(426));
                    }
                } else if (K && s.mode & 1) {
                    var x = gu(l);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                            Su(x, l, s, i, t),
                            Jl(Tn(u, s));
                        break e;
                    }
                }
                (i = u = Tn(u, s)),
                    re !== 4 && (re = 2),
                    ir === null ? (ir = [i]) : ir.push(i),
                    (i = l);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var d = Mc(i, u, t);
                            du(i, d);
                            break e;
                        case 1:
                            s = u;
                            var c = i.type,
                                p = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof c.getDerivedStateFromError ==
                                    "function" ||
                                    (p !== null &&
                                        typeof p.componentDidCatch ==
                                            "function" &&
                                        (Nt === null || !Nt.has(p))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var S = Nc(i, s, t);
                                du(i, S);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            Gc(n);
        } catch (C) {
            (t = C), te === n && n !== null && (te = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Yc() {
    var e = Lo.current;
    return (Lo.current = Po), e === null ? Po : e;
}
function ys() {
    (re === 0 || re === 3 || re === 2) && (re = 4),
        ie === null || (!(qt & 268435455) && !(Ko & 268435455)) || _t(ie, ue);
}
function No(e, t) {
    var n = $;
    $ |= 2;
    var r = Yc();
    (ie !== e || ue !== t) && ((ut = null), Yt(e, t));
    do
        try {
            jp();
            break;
        } catch (o) {
            Kc(e, o);
        }
    while (!0);
    if ((bl(), ($ = n), (Lo.current = r), te !== null)) throw Error(k(261));
    return (ie = null), (ue = 0), re;
}
function jp() {
    for (; te !== null; ) Xc(te);
}
function Dp() {
    for (; te !== null && !uf(); ) Xc(te);
}
function Xc(e) {
    var t = Jc(e.alternate, e, Re);
    (e.memoizedProps = e.pendingProps),
        t === null ? Gc(e) : (te = t),
        (fs.current = null);
}
function Gc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Np(n, t)), n !== null)) {
                (n.flags &= 32767), (te = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (re = 6), (te = null);
                return;
            }
        } else if (((n = Mp(n, t, Re)), n !== null)) {
            te = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            te = t;
            return;
        }
        te = t = e;
    } while (t !== null);
    re === 0 && (re = 5);
}
function At(e, t, n) {
    var r = B,
        o = Be.transition;
    try {
        (Be.transition = null), (B = 1), $p(e, t, n, r);
    } finally {
        (Be.transition = o), (B = r);
    }
    return null;
}
function $p(e, t, n, r) {
    do xn();
    while (xt !== null);
    if ($ & 6) throw Error(k(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(k(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (gf(e, i),
        e === ie && ((te = ie = null), (ue = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Kr ||
            ((Kr = !0),
            qc(co, function () {
                return xn(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = Be.transition), (Be.transition = null);
        var l = B;
        B = 1;
        var s = $;
        ($ |= 4),
            (fs.current = null),
            zp(e, n),
            Hc(n, e),
            op(ol),
            (po = !!rl),
            (ol = rl = null),
            (e.current = n),
            Ip(n),
            af(),
            ($ = s),
            (B = l),
            (Be.transition = i);
    } else e.current = n;
    if (
        (Kr && ((Kr = !1), (xt = e), (Mo = o)),
        (i = e.pendingLanes),
        i === 0 && (Nt = null),
        ff(n.stateNode),
        Le(e, b()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]),
                r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Ro) throw ((Ro = !1), (e = xl), (xl = null), e);
    return (
        Mo & 1 && e.tag !== 0 && xn(),
        (i = e.pendingLanes),
        i & 1 ? (e === Cl ? lr++ : ((lr = 0), (Cl = e))) : (lr = 0),
        $t(),
        null
    );
}
function xn() {
    if (xt !== null) {
        var e = Ma(Mo),
            t = Be.transition,
            n = B;
        try {
            if (((Be.transition = null), (B = 16 > e ? 16 : e), xt === null))
                var r = !1;
            else {
                if (((e = xt), (xt = null), (Mo = 0), $ & 6))
                    throw Error(k(331));
                var o = $;
                for ($ |= 4, L = e.current; L !== null; ) {
                    var i = L,
                        l = i.child;
                    if (L.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var a = s[u];
                                for (L = a; L !== null; ) {
                                    var h = L;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            or(8, h, i);
                                    }
                                    var m = h.child;
                                    if (m !== null) (m.return = h), (L = m);
                                    else
                                        for (; L !== null; ) {
                                            h = L;
                                            var f = h.sibling,
                                                v = h.return;
                                            if ((Bc(h), h === a)) {
                                                L = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                (f.return = v), (L = f);
                                                break;
                                            }
                                            L = v;
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var g = y.child;
                                if (g !== null) {
                                    y.child = null;
                                    do {
                                        var x = g.sibling;
                                        (g.sibling = null), (g = x);
                                    } while (g !== null);
                                }
                            }
                            L = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && l !== null)
                        (l.return = i), (L = l);
                    else
                        e: for (; L !== null; ) {
                            if (((i = L), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        or(9, i, i.return);
                                }
                            var d = i.sibling;
                            if (d !== null) {
                                (d.return = i.return), (L = d);
                                break e;
                            }
                            L = i.return;
                        }
                }
                var c = e.current;
                for (L = c; L !== null; ) {
                    l = L;
                    var p = l.child;
                    if (l.subtreeFlags & 2064 && p !== null)
                        (p.return = l), (L = p);
                    else
                        e: for (l = c; L !== null; ) {
                            if (((s = L), s.flags & 2048))
                                try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Qo(9, s);
                                    }
                                } catch (C) {
                                    J(s, s.return, C);
                                }
                            if (s === l) {
                                L = null;
                                break e;
                            }
                            var S = s.sibling;
                            if (S !== null) {
                                (S.return = s.return), (L = S);
                                break e;
                            }
                            L = s.return;
                        }
                }
                if (
                    (($ = o),
                    $t(),
                    it && typeof it.onPostCommitFiberRoot == "function")
                )
                    try {
                        it.onPostCommitFiberRoot(Do, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (B = n), (Be.transition = t);
        }
    }
    return !1;
}
function zu(e, t, n) {
    (t = Tn(n, t)),
        (t = Mc(e, t, 1)),
        (e = Mt(e, t, 1)),
        (t = ye()),
        e !== null && (Lr(e, 1, t), Le(e, t));
}
function J(e, t, n) {
    if (e.tag === 3) zu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                zu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (Nt === null || !Nt.has(r)))
                ) {
                    (e = Tn(n, e)),
                        (e = Nc(t, e, 1)),
                        (t = Mt(t, e, 1)),
                        (e = ye()),
                        t !== null && (Lr(t, 1, e), Le(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Up(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = ye()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ie === e &&
            (ue & n) === n &&
            (re === 4 || (re === 3 && (ue & 130023424) === ue && 500 > b() - hs)
                ? Yt(e, 0)
                : (ps |= n)),
        Le(e, t);
}
function Zc(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
            : (t = 1));
    var n = ye();
    (e = mt(e, t)), e !== null && (Lr(e, t, n), Le(e, n));
}
function Bp(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Zc(e, n);
}
function Ap(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(k(314));
    }
    r !== null && r.delete(t), Zc(e, n);
}
var Jc;
Jc = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ce.current) xe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (xe = !1), Rp(e, t, n);
            xe = !!(e.flags & 131072);
        }
    else (xe = !1), K && t.flags & 1048576 && tc(t, wo, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            ro(e, t), (e = t.pendingProps);
            var o = Ln(t, he.current);
            En(t, n), (o = ss(null, t, r, e, o, n));
            var i = us();
            return (
                (t.flags |= 1),
                typeof o == "object" &&
                o !== null &&
                typeof o.render == "function" &&
                o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Pe(r) ? ((i = !0), go(t)) : (i = !1),
                      (t.memoizedState =
                          o.state !== null && o.state !== void 0
                              ? o.state
                              : null),
                      ns(t),
                      (o.updater = Wo),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      pl(t, r, e, n),
                      (t = vl(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      K && i && Gl(t),
                      ve(null, t, o, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (ro(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = Hp(r)),
                    (e = Qe(r, e)),
                    o)
                ) {
                    case 0:
                        t = ml(null, t, r, e, n);
                        break e;
                    case 1:
                        t = _u(null, t, r, e, n);
                        break e;
                    case 11:
                        t = wu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ku(null, t, r, Qe(r.type, e), n);
                        break e;
                }
                throw Error(k(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Qe(r, o)),
                ml(e, t, r, o, n)
            );
        case 1:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Qe(r, o)),
                _u(e, t, r, o, n)
            );
        case 3:
            e: {
                if ((Oc(t), e === null)) throw Error(k(387));
                (r = t.pendingProps),
                    (i = t.memoizedState),
                    (o = i.element),
                    sc(e, t),
                    Eo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: l.cache,
                            pendingSuspenseBoundaries:
                                l.pendingSuspenseBoundaries,
                            transitions: l.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (o = Tn(Error(k(423)), t)), (t = Eu(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = Tn(Error(k(424)), t)), (t = Eu(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            Ne = Rt(t.stateNode.containerInfo.firstChild),
                                Te = t,
                                K = !0,
                                Ye = null,
                                n = ic(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Rn(), r === o)) {
                        t = vt(e, t, n);
                        break e;
                    }
                    ve(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                uc(t),
                e === null && cl(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (l = o.children),
                il(r, o)
                    ? (l = null)
                    : i !== null && il(r, i) && (t.flags |= 32),
                Ic(e, t),
                ve(e, t, l, n),
                t.child
            );
        case 6:
            return e === null && cl(t), null;
        case 13:
            return Fc(e, t, n);
        case 4:
            return (
                rs(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = Mn(t, null, r, n)) : ve(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Qe(r, o)),
                wu(e, t, r, o, n)
            );
        case 7:
            return ve(e, t, t.pendingProps, n), t.child;
        case 8:
            return ve(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ve(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (i = t.memoizedProps),
                    (l = o.value),
                    H(ko, r._currentValue),
                    (r._currentValue = l),
                    i !== null)
                )
                    if (Ze(i.value, l)) {
                        if (i.children === o.children && !Ce.current) {
                            t = vt(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            i = t.child, i !== null && (i.return = t);
                            i !== null;

                        ) {
                            var s = i.dependencies;
                            if (s !== null) {
                                l = i.child;
                                for (var u = s.firstContext; u !== null; ) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            (u = ft(-1, n & -n)), (u.tag = 2);
                                            var a = i.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var h = a.pending;
                                                h === null
                                                    ? (u.next = u)
                                                    : ((u.next = h.next),
                                                      (h.next = u)),
                                                    (a.pending = u);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (u = i.alternate),
                                            u !== null && (u.lanes |= n),
                                            dl(i.return, n, t),
                                            (s.lanes |= n);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (i.tag === 10)
                                l = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((l = i.return), l === null))
                                    throw Error(k(341));
                                (l.lanes |= n),
                                    (s = l.alternate),
                                    s !== null && (s.lanes |= n),
                                    dl(l, n, t),
                                    (l = i.sibling);
                            } else l = i.child;
                            if (l !== null) l.return = i;
                            else
                                for (l = i; l !== null; ) {
                                    if (l === t) {
                                        l = null;
                                        break;
                                    }
                                    if (((i = l.sibling), i !== null)) {
                                        (i.return = l.return), (l = i);
                                        break;
                                    }
                                    l = l.return;
                                }
                            i = l;
                        }
                ve(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                En(t, n),
                (o = Ae(o)),
                (r = r(o)),
                (t.flags |= 1),
                ve(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (o = Qe(r, t.pendingProps)),
                (o = Qe(r.type, o)),
                ku(e, t, r, o, n)
            );
        case 15:
            return Tc(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Qe(r, o)),
                ro(e, t),
                (t.tag = 1),
                Pe(r) ? ((e = !0), go(t)) : (e = !1),
                En(t, n),
                Rc(t, r, o),
                pl(t, r, o, n),
                vl(null, t, r, !0, e, n)
            );
        case 19:
            return jc(e, t, n);
        case 22:
            return zc(e, t, n);
    }
    throw Error(k(156, t.tag));
};
function qc(e, t) {
    return Ca(e, t);
}
function Vp(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Ue(e, t, n, r) {
    return new Vp(e, t, n, r);
}
function gs(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Hp(e) {
    if (typeof e == "function") return gs(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Dl)) return 11;
        if (e === $l) return 14;
    }
    return 2;
}
function zt(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Ue(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function lo(e, t, n, r, o, i) {
    var l = 2;
    if (((r = e), typeof e == "function")) gs(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else
        e: switch (e) {
            case sn:
                return Xt(n.children, o, i, t);
            case jl:
                (l = 8), (o |= 8);
                break;
            case Di:
                return (
                    (e = Ue(12, n, t, o | 2)),
                    (e.elementType = Di),
                    (e.lanes = i),
                    e
                );
            case $i:
                return (
                    (e = Ue(13, n, t, o)),
                    (e.elementType = $i),
                    (e.lanes = i),
                    e
                );
            case Ui:
                return (
                    (e = Ue(19, n, t, o)),
                    (e.elementType = Ui),
                    (e.lanes = i),
                    e
                );
            case ua:
                return Yo(n, o, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case la:
                            l = 10;
                            break e;
                        case sa:
                            l = 9;
                            break e;
                        case Dl:
                            l = 11;
                            break e;
                        case $l:
                            l = 14;
                            break e;
                        case St:
                            (l = 16), (r = null);
                            break e;
                    }
                throw Error(k(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Ue(l, n, t, o)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
    );
}
function Xt(e, t, n, r) {
    return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function Yo(e, t, n, r) {
    return (
        (e = Ue(22, e, r, t)),
        (e.elementType = ua),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Ri(e, t, n) {
    return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function Mi(e, t, n) {
    return (
        (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function Wp(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = ai(0)),
        (this.expirationTimes = ai(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = ai(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function Ss(e, t, n, r, o, i, l, s, u) {
    return (
        (e = new Wp(e, t, n, s, u)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = Ue(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        ns(i),
        e
    );
}
function Qp(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: ln,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function bc(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
        if (tn(e) !== e || e.tag !== 1) throw Error(k(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Pe(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(k(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Pe(n)) return ba(e, n, t);
    }
    return t;
}
function ed(e, t, n, r, o, i, l, s, u) {
    return (
        (e = Ss(n, r, !0, e, o, i, l, s, u)),
        (e.context = bc(null)),
        (n = e.current),
        (r = ye()),
        (o = Tt(n)),
        (i = ft(r, o)),
        (i.callback = t ?? null),
        Mt(n, i, o),
        (e.current.lanes = o),
        Lr(e, o, r),
        Le(e, r),
        e
    );
}
function Xo(e, t, n, r) {
    var o = t.current,
        i = ye(),
        l = Tt(o);
    return (
        (n = bc(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = ft(i, l)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Mt(o, t, l)),
        e !== null && (Ge(e, o, l, i), eo(e, o, l)),
        l
    );
}
function To(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Iu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function ws(e, t) {
    Iu(e, t), (e = e.alternate) && Iu(e, t);
}
function Kp() {
    return null;
}
var td =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function ks(e) {
    this._internalRoot = e;
}
Go.prototype.render = ks.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    Xo(e, t, null, null);
};
Go.prototype.unmount = ks.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        bt(function () {
            Xo(null, e, null, null);
        }),
            (t[ht] = null);
    }
};
function Go(e) {
    this._internalRoot = e;
}
Go.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = za();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++);
        kt.splice(n, 0, e), n === 0 && Oa(e);
    }
};
function _s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zo(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Ou() {}
function Yp(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var a = To(l);
                i.call(a);
            };
        }
        var l = ed(t, r, e, 0, null, !1, !1, "", Ou);
        return (
            (e._reactRootContainer = l),
            (e[ht] = l.current),
            yr(e.nodeType === 8 ? e.parentNode : e),
            bt(),
            l
        );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function () {
            var a = To(u);
            s.call(a);
        };
    }
    var u = Ss(e, 0, !1, null, null, !1, !1, "", Ou);
    return (
        (e._reactRootContainer = u),
        (e[ht] = u.current),
        yr(e.nodeType === 8 ? e.parentNode : e),
        bt(function () {
            Xo(t, u, n, r);
        }),
        u
    );
}
function Jo(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var l = i;
        if (typeof o == "function") {
            var s = o;
            o = function () {
                var u = To(l);
                s.call(u);
            };
        }
        Xo(t, l, e, o);
    } else l = Yp(n, t, e, o, r);
    return To(l);
}
Na = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Zn(t.pendingLanes);
                n !== 0 &&
                    (Al(t, n | 1),
                    Le(t, b()),
                    !($ & 6) && ((zn = b() + 500), $t()));
            }
            break;
        case 13:
            bt(function () {
                var r = mt(e, 1);
                if (r !== null) {
                    var o = ye();
                    Ge(r, e, 1, o);
                }
            }),
                ws(e, 1);
    }
};
Vl = function (e) {
    if (e.tag === 13) {
        var t = mt(e, 134217728);
        if (t !== null) {
            var n = ye();
            Ge(t, e, 134217728, n);
        }
        ws(e, 134217728);
    }
};
Ta = function (e) {
    if (e.tag === 13) {
        var t = Tt(e),
            n = mt(e, t);
        if (n !== null) {
            var r = ye();
            Ge(n, e, t, r);
        }
        ws(e, t);
    }
};
za = function () {
    return B;
};
Ia = function (e, t) {
    var n = B;
    try {
        return (B = e), t();
    } finally {
        B = n;
    }
};
Gi = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Vi(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Ao(r);
                        if (!o) throw Error(k(90));
                        ca(r), Vi(r, o);
                    }
                }
            }
            break;
        case "textarea":
            fa(e, n);
            break;
        case "select":
            (t = n.value), t != null && Sn(e, !!n.multiple, t, !1);
    }
};
Sa = ms;
wa = bt;
var Xp = { usingClientEntryPoint: !1, Events: [Mr, dn, Ao, ya, ga, ms] },
    Yn = {
        findFiberByHostInstance: Ht,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
    },
    Gp = {
        bundleType: Yn.bundleType,
        version: Yn.version,
        rendererPackageName: Yn.rendererPackageName,
        rendererConfig: Yn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: yt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Ea(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Yn.findFiberByHostInstance || Kp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yr.isDisabled && Yr.supportsFiber)
        try {
            (Do = Yr.inject(Gp)), (it = Yr);
        } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xp;
Oe.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_s(t)) throw Error(k(200));
    return Qp(e, t, null, n);
};
Oe.createRoot = function (e, t) {
    if (!_s(e)) throw Error(k(299));
    var n = !1,
        r = "",
        o = td;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Ss(e, 1, !1, null, null, n, !1, r, o)),
        (e[ht] = t.current),
        yr(e.nodeType === 8 ? e.parentNode : e),
        new ks(t)
    );
};
Oe.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(k(188))
            : ((e = Object.keys(e).join(",")), Error(k(268, e)));
    return (e = Ea(t)), (e = e === null ? null : e.stateNode), e;
};
Oe.flushSync = function (e) {
    return bt(e);
};
Oe.hydrate = function (e, t, n) {
    if (!Zo(t)) throw Error(k(200));
    return Jo(null, e, t, !0, n);
};
Oe.hydrateRoot = function (e, t, n) {
    if (!_s(e)) throw Error(k(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        l = td;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (t = ed(t, null, e, 1, n ?? null, o, !1, i, l)),
        (e[ht] = t.current),
        yr(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new Go(t);
};
Oe.render = function (e, t, n) {
    if (!Zo(t)) throw Error(k(200));
    return Jo(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function (e) {
    if (!Zo(e)) throw Error(k(40));
    return e._reactRootContainer
        ? (bt(function () {
              Jo(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ht] = null);
              });
          }),
          !0)
        : !1;
};
Oe.unstable_batchedUpdates = ms;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Zo(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return Jo(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function nd() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd);
        } catch (e) {
            console.error(e);
        }
}
nd(), (na.exports = Oe);
var rd = na.exports,
    od,
    Fu = rd;
(od = Fu.createRoot), Fu.hydrateRoot;
const ju = "pushstate",
    Du = "popstate",
    id = "beforeunload",
    ld = (e) => (e.preventDefault(), (e.returnValue = "")),
    Zp = () => {
        removeEventListener(id, ld, { capture: !0 });
    };
function sd(e) {
    let t = e.getLocation();
    const n = new Set();
    let r = [];
    const o = () => {
            (t = e.getLocation()), n.forEach((l) => l());
        },
        i = async (l, s) => {
            var u;
            if (
                !((s == null ? void 0 : s.ignoreBlocker) ?? !1) &&
                typeof document < "u" &&
                r.length
            ) {
                for (const h of r)
                    if (!(await h())) {
                        (u = e.onBlocked) == null || u.call(e, o);
                        return;
                    }
            }
            l();
        };
    return {
        get location() {
            return t;
        },
        subscribers: n,
        subscribe: (l) => (
            n.add(l),
            () => {
                n.delete(l);
            }
        ),
        push: (l, s, u) => {
            (s = sr(s)),
                i(() => {
                    e.pushState(l, s), o();
                }, u);
        },
        replace: (l, s, u) => {
            (s = sr(s)),
                i(() => {
                    e.replaceState(l, s), o();
                }, u);
        },
        go: (l, s) => {
            i(() => {
                e.go(l), o();
            }, s);
        },
        back: (l) => {
            i(() => {
                e.back(), o();
            }, l);
        },
        forward: (l) => {
            i(() => {
                e.forward(), o();
            }, l);
        },
        createHref: (l) => e.createHref(l),
        block: (l) => (
            r.push(l),
            r.length === 1 && addEventListener(id, ld, { capture: !0 }),
            () => {
                (r = r.filter((s) => s !== l)), r.length || Zp();
            }
        ),
        flush: () => {
            var l;
            return (l = e.flush) == null ? void 0 : l.call(e);
        },
        destroy: () => {
            var l;
            return (l = e.destroy) == null ? void 0 : l.call(e);
        },
        notify: o,
    };
}
function sr(e) {
    return e || (e = {}), { ...e, key: ud() };
}
function Jp(e) {
    const t = typeof document < "u" ? window : void 0,
        n = t.history.pushState,
        r = t.history.replaceState,
        o = (g) => g,
        i = () =>
            Rl(
                `${t.location.pathname}${t.location.search}${t.location.hash}`,
                t.history.state
            );
    let l = i(),
        s;
    const u = () => l;
    let a, h;
    const m = () => {
            if (!a) return;
            (a.isPush ? n : r).call(t.history, a.state, "", a.href),
                (a = void 0),
                (h = void 0),
                (s = void 0);
        },
        f = (g, x, d) => {
            const c = o(x);
            h || (s = l),
                (l = Rl(x, d)),
                (a = {
                    href: c,
                    state: d,
                    isPush: (a == null ? void 0 : a.isPush) || g === "push",
                }),
                h || (h = Promise.resolve().then(() => m()));
        },
        v = () => {
            (l = i()), y.notify();
        },
        y = sd({
            getLocation: u,
            pushState: (g, x) => f("push", g, x),
            replaceState: (g, x) => f("replace", g, x),
            back: () => t.history.back(),
            forward: () => t.history.forward(),
            go: (g) => t.history.go(g),
            createHref: (g) => o(g),
            flush: m,
            destroy: () => {
                (t.history.pushState = n),
                    (t.history.replaceState = r),
                    t.removeEventListener(ju, v),
                    t.removeEventListener(Du, v);
            },
            onBlocked: (g) => {
                s && l !== s && ((l = s), g());
            },
        });
    return (
        t.addEventListener(ju, v),
        t.addEventListener(Du, v),
        (t.history.pushState = function (...g) {
            const x = n.apply(t.history, g);
            return v(), x;
        }),
        (t.history.replaceState = function (...g) {
            const x = r.apply(t.history, g);
            return v(), x;
        }),
        y
    );
}
function qp(e = { initialEntries: ["/"] }) {
    const t = e.initialEntries;
    let n = e.initialIndex ?? t.length - 1,
        r = { key: ud() };
    return sd({
        getLocation: () => Rl(t[n], r),
        pushState: (i, l) => {
            (r = l),
                t.splice,
                n < t.length - 1 && t.splice(n + 1),
                t.push(i),
                (n = Math.max(t.length - 1, 0));
        },
        replaceState: (i, l) => {
            (r = l), (t[n] = i);
        },
        back: () => {
            (r = sr(r)), (n = Math.max(n - 1, 0));
        },
        forward: () => {
            (r = sr(r)), (n = Math.min(n + 1, t.length - 1));
        },
        go: (i) => {
            (r = sr(r)), (n = Math.min(Math.max(n + i, 0), t.length - 1));
        },
        createHref: (i) => i,
    });
}
function Rl(e, t) {
    const n = e.indexOf("#"),
        r = e.indexOf("?");
    return {
        href: e,
        pathname: e.substring(
            0,
            n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length
        ),
        hash: n > -1 ? e.substring(n) : "",
        search: r > -1 ? e.slice(r, n === -1 ? void 0 : n) : "",
        state: t || {},
    };
}
function ud() {
    return (Math.random() + 1).toString(36).substring(7);
}
var bp = "Invariant failed";
function _e(e, t) {
    if (!e) throw new Error(bp);
}
const Ni = z.createContext(null);
function ad() {
    return typeof document > "u"
        ? Ni
        : window.__TSR_ROUTER_CONTEXT__
        ? window.__TSR_ROUTER_CONTEXT__
        : ((window.__TSR_ROUTER_CONTEXT__ = Ni), Ni);
}
function Ut(e) {
    const t = z.useContext(ad());
    return e == null || e.warn, t;
}
var cd = { exports: {} },
    dd = {},
    fd = { exports: {} },
    pd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var In = z;
function eh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var th = typeof Object.is == "function" ? Object.is : eh,
    nh = In.useState,
    rh = In.useEffect,
    oh = In.useLayoutEffect,
    ih = In.useDebugValue;
function lh(e, t) {
    var n = t(),
        r = nh({ inst: { value: n, getSnapshot: t } }),
        o = r[0].inst,
        i = r[1];
    return (
        oh(
            function () {
                (o.value = n), (o.getSnapshot = t), Ti(o) && i({ inst: o });
            },
            [e, n, t]
        ),
        rh(
            function () {
                return (
                    Ti(o) && i({ inst: o }),
                    e(function () {
                        Ti(o) && i({ inst: o });
                    })
                );
            },
            [e]
        ),
        ih(n),
        n
    );
}
function Ti(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !th(e, n);
    } catch {
        return !0;
    }
}
function sh(e, t) {
    return t();
}
var uh =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
        ? sh
        : lh;
pd.useSyncExternalStore =
    In.useSyncExternalStore !== void 0 ? In.useSyncExternalStore : uh;
fd.exports = pd;
var ah = fd.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qo = z,
    ch = ah;
function dh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var fh = typeof Object.is == "function" ? Object.is : dh,
    ph = ch.useSyncExternalStore,
    hh = qo.useRef,
    mh = qo.useEffect,
    vh = qo.useMemo,
    yh = qo.useDebugValue;
dd.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
    var i = hh(null);
    if (i.current === null) {
        var l = { hasValue: !1, value: null };
        i.current = l;
    } else l = i.current;
    i = vh(
        function () {
            function u(v) {
                if (!a) {
                    if (
                        ((a = !0),
                        (h = v),
                        (v = r(v)),
                        o !== void 0 && l.hasValue)
                    ) {
                        var y = l.value;
                        if (o(y, v)) return (m = y);
                    }
                    return (m = v);
                }
                if (((y = m), fh(h, v))) return y;
                var g = r(v);
                return o !== void 0 && o(y, g) ? y : ((h = v), (m = g));
            }
            var a = !1,
                h,
                m,
                f = n === void 0 ? null : n;
            return [
                function () {
                    return u(t());
                },
                f === null
                    ? void 0
                    : function () {
                          return u(f());
                      },
            ];
        },
        [t, n, r, o]
    );
    var s = ph(e, i[0], i[1]);
    return (
        mh(
            function () {
                (l.hasValue = !0), (l.value = s);
            },
            [s]
        ),
        yh(s),
        s
    );
};
cd.exports = dd;
var gh = cd.exports;
class Sh {
    constructor(t, n) {
        (this.listeners = new Set()),
            (this._batching = !1),
            (this._flushing = 0),
            (this.subscribe = (r) => {
                var o, i;
                this.listeners.add(r);
                const l =
                    (i = (o = this.options) == null ? void 0 : o.onSubscribe) ==
                    null
                        ? void 0
                        : i.call(o, r, this);
                return () => {
                    this.listeners.delete(r), l == null || l();
                };
            }),
            (this.setState = (r) => {
                var o, i, l;
                const s = this.state;
                (this.state =
                    (o = this.options) != null && o.updateFn
                        ? this.options.updateFn(s)(r)
                        : r(s)),
                    (l = (i = this.options) == null ? void 0 : i.onUpdate) ==
                        null || l.call(i),
                    this._flush();
            }),
            (this._flush = () => {
                if (this._batching) return;
                const r = ++this._flushing;
                this.listeners.forEach((o) => {
                    this._flushing === r && o();
                });
            }),
            (this.batch = (r) => {
                if (this._batching) return r();
                (this._batching = !0),
                    r(),
                    (this._batching = !1),
                    this._flush();
            }),
            (this.state = t),
            (this.options = n);
    }
}
function wh(e, t = (n) => n) {
    return gh.useSyncExternalStoreWithSelector(
        e.subscribe,
        () => e.state,
        () => e.state,
        t,
        kh
    );
}
function kh(e, t) {
    if (Object.is(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (let r = 0; r < n.length; r++)
        if (
            !Object.prototype.hasOwnProperty.call(t, n[r]) ||
            !Object.is(e[n[r]], t[n[r]])
        )
            return !1;
    return !0;
}
const Me = "__root__";
function _h(e, t) {
    let n,
        r,
        o,
        i = "";
    for (n in e)
        if ((o = e[n]) !== void 0)
            if (Array.isArray(o))
                for (r = 0; r < o.length; r++)
                    i && (i += "&"),
                        (i +=
                            encodeURIComponent(n) +
                            "=" +
                            encodeURIComponent(o[r]));
            else
                i && (i += "&"),
                    (i += encodeURIComponent(n) + "=" + encodeURIComponent(o));
    return "" + i;
}
function $u(e) {
    if (!e) return "";
    const t = decodeURIComponent(e);
    return t === "false"
        ? !1
        : t === "true"
        ? !0
        : +t * 0 === 0 && +t + "" === t
        ? +t
        : t;
}
function Eh(e, t) {
    let n, r;
    const o = {},
        i = e.split("&");
    for (; (n = i.shift()); ) {
        const l = n.indexOf("=");
        if (l !== -1) {
            r = n.slice(0, l);
            const s = n.slice(l + 1);
            o[r] !== void 0 ? (o[r] = [].concat(o[r], $u(s))) : (o[r] = $u(s));
        } else (r = n), (o[r] = "");
    }
    return o;
}
const xh = Ph(JSON.parse),
    Ch = Lh(JSON.stringify, JSON.parse);
function Ph(e) {
    return (t) => {
        t.substring(0, 1) === "?" && (t = t.substring(1));
        const n = Eh(t);
        for (const r in n) {
            const o = n[r];
            if (typeof o == "string")
                try {
                    n[r] = e(o);
                } catch {}
        }
        return n;
    };
}
function Lh(e, t) {
    function n(r) {
        if (typeof r == "object" && r !== null)
            try {
                return e(r);
            } catch {}
        else if (typeof r == "string" && typeof t == "function")
            try {
                return t(r), e(r);
            } catch {}
        return r;
    }
    return (r) => {
        (r = { ...r }),
            Object.keys(r).forEach((i) => {
                const l = r[i];
                typeof l > "u" || l === void 0 ? delete r[i] : (r[i] = n(l));
            });
        const o = _h(r).toString();
        return o ? `?${o}` : "";
    };
}
function zo(e) {
    return e[e.length - 1];
}
function Rh(e) {
    return typeof e == "function";
}
function gn(e, t) {
    return Rh(e) ? e(t) : e;
}
function ur(e, t) {
    return t.reduce((n, r) => ((n[r] = e[r]), n), {});
}
function tt(e, t) {
    if (e === t) return e;
    const n = t,
        r = Bu(e) && Bu(n);
    if (r || (Io(e) && Io(n))) {
        const o = r ? e : Object.keys(e),
            i = o.length,
            l = r ? n : Object.keys(n),
            s = l.length,
            u = r ? [] : {};
        let a = 0;
        for (let h = 0; h < s; h++) {
            const m = r ? h : l[h];
            ((!r && o.includes(m)) || r) && e[m] === void 0 && n[m] === void 0
                ? ((u[m] = void 0), a++)
                : ((u[m] = tt(e[m], n[m])),
                  u[m] === e[m] && e[m] !== void 0 && a++);
        }
        return i === s && a === i ? e : u;
    }
    return n;
}
function Io(e) {
    if (!Uu(e)) return !1;
    const t = e.constructor;
    if (typeof t > "u") return !0;
    const n = t.prototype;
    return !(!Uu(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Uu(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function Bu(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Cn(e, t, n = !1) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (Io(e) && Io(t)) {
        const r = Object.keys(e).filter((i) => e[i] !== void 0),
            o = Object.keys(t).filter((i) => t[i] !== void 0);
        return !n && r.length !== o.length
            ? !1
            : !o.some((i) => !(i in e) || !Cn(e[i], t[i], n));
    }
    return Array.isArray(e) && Array.isArray(t)
        ? e.length !== t.length
            ? !1
            : !e.some((r, o) => !Cn(r, t[o], n))
        : !1;
}
const zi = typeof window < "u" ? z.useLayoutEffect : z.useEffect;
function on(e) {
    let t, n;
    const r = new Promise((o, i) => {
        (t = o), (n = i);
    });
    return (
        (r.status = "pending"),
        (r.resolve = (o) => {
            (r.status = "resolved"), (r.value = o), t(o), e == null || e(o);
        }),
        (r.reject = (o) => {
            (r.status = "rejected"), n(o);
        }),
        r
    );
}
function Au(e) {
    const t = z.useRef({ value: e, prev: null }),
        n = t.current.value;
    return e !== n && (t.current = { value: e, prev: n }), t.current.prev;
}
function Mh(e, t, n = {}, r = {}) {
    const o = z.useRef(typeof IntersectionObserver == "function"),
        i = z.useRef(null);
    return (
        z.useEffect(() => {
            if (!(!e.current || !o.current || r.disabled))
                return (
                    (i.current = new IntersectionObserver(([l]) => {
                        t(l);
                    }, n)),
                    i.current.observe(e.current),
                    () => {
                        var l;
                        (l = i.current) == null || l.disconnect();
                    }
                );
        }, [t, n, r.disabled, e]),
        i.current
    );
}
function Nh(e) {
    const t = z.useRef(null);
    return (
        z.useEffect(() => {
            e &&
                (typeof e == "function"
                    ? e(t.current)
                    : (e.current = t.current));
        }),
        t
    );
}
function It(e) {
    return bo(e.filter((t) => t !== void 0).join("/"));
}
function bo(e) {
    return e.replace(/\/{2,}/g, "/");
}
function Es(e) {
    return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function Kt(e) {
    return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function Th(e) {
    return Kt(Es(e));
}
function Oo(e, t) {
    return e.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function zh(e, t, n) {
    return Oo(e, n) === Oo(t, n);
}
function Ih({ basepath: e, base: t, to: n, trailingSlash: r = "never" }) {
    var o, i;
    (t = Fo(e, t)), (n = Fo(e, n));
    let l = On(t);
    const s = On(n);
    l.length > 1 && ((o = zo(l)) == null ? void 0 : o.value) === "/" && l.pop(),
        s.forEach((a, h) => {
            a.value === "/"
                ? h
                    ? h === s.length - 1 && l.push(a)
                    : (l = [a])
                : a.value === ".."
                ? l.pop()
                : a.value === "." || l.push(a);
        }),
        l.length > 1 &&
            (((i = zo(l)) == null ? void 0 : i.value) === "/"
                ? r === "never" && l.pop()
                : r === "always" && l.push({ type: "pathname", value: "/" }));
    const u = It([e, ...l.map((a) => a.value)]);
    return bo(u);
}
function On(e) {
    if (!e) return [];
    e = bo(e);
    const t = [];
    if (
        (e.slice(0, 1) === "/" &&
            ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })),
        !e)
    )
        return t;
    const n = e.split("/").filter(Boolean);
    return (
        t.push(
            ...n.map((r) =>
                r === "$" || r === "*"
                    ? { type: "wildcard", value: r }
                    : r.charAt(0) === "$"
                    ? { type: "param", value: r }
                    : { type: "pathname", value: decodeURIComponent(r) }
            )
        ),
        e.slice(-1) === "/" &&
            ((e = e.substring(1)), t.push({ type: "pathname", value: "/" })),
        t
    );
}
function Ii({ path: e, params: t, leaveWildcards: n, leaveParams: r }) {
    const o = On(e),
        i = {};
    for (const [l, s] of Object.entries(t)) {
        const u = typeof s == "string";
        ["*", "_splat"].includes(l)
            ? (i[l] = u ? encodeURI(s) : s)
            : (i[l] = u ? encodeURIComponent(s) : s);
    }
    return It(
        o.map((l) => {
            if (l.type === "wildcard") {
                const s = i._splat;
                return n ? `${l.value}${s ?? ""}` : s;
            }
            if (l.type === "param") {
                if (r) {
                    const s = i[l.value];
                    return `${l.value}${s ?? ""}`;
                }
                return i[l.value.substring(1)] ?? "undefined";
            }
            return l.value;
        })
    );
}
function Xr(e, t, n) {
    const r = Oh(e, t, n);
    if (!(n.to && !r)) return r ?? {};
}
function Fo(e, t) {
    switch (!0) {
        case e === "/":
            return t;
        case t === e:
            return "";
        case t.length < e.length:
            return t;
        case t[e.length] !== "/":
            return t;
        case t.startsWith(e):
            return t.slice(e.length);
        default:
            return t;
    }
}
function Oh(e, t, n) {
    t = Fo(e, t);
    const r = Fo(e, `${n.to ?? "$"}`),
        o = On(t),
        i = On(r);
    t.startsWith("/") || o.unshift({ type: "pathname", value: "/" }),
        r.startsWith("/") || i.unshift({ type: "pathname", value: "/" });
    const l = {};
    return (() => {
        for (let u = 0; u < Math.max(o.length, i.length); u++) {
            const a = o[u],
                h = i[u],
                m = u >= o.length - 1,
                f = u >= i.length - 1;
            if (h) {
                if (h.type === "wildcard") {
                    if (a != null && a.value) {
                        const v = decodeURI(It(o.slice(u).map((y) => y.value)));
                        return (l["*"] = v), (l._splat = v), !0;
                    }
                    return !1;
                }
                if (h.type === "pathname") {
                    if (h.value === "/" && !(a != null && a.value)) return !0;
                    if (a) {
                        if (n.caseSensitive) {
                            if (h.value !== a.value) return !1;
                        } else if (
                            h.value.toLowerCase() !== a.value.toLowerCase()
                        )
                            return !1;
                    }
                }
                if (!a) return !1;
                if (h.type === "param") {
                    if (a.value === "/") return !1;
                    a.value.charAt(0) !== "$" &&
                        (l[h.value.substring(1)] = decodeURIComponent(a.value));
                }
            }
            if (!m && f)
                return (
                    (l["**"] = It(o.slice(u + 1).map((v) => v.value))),
                    !!n.fuzzy && (h == null ? void 0 : h.value) !== "/"
                );
        }
        return !0;
    })()
        ? l
        : void 0;
}
function Vt(e) {
    return !!(e != null && e.isRedirect);
}
function Vu(e) {
    return !!(e != null && e.isRedirect) && e.href;
}
function xs(e) {
    const t = e.errorComponent ?? ei;
    return M.jsx(Fh, {
        getResetKey: e.getResetKey,
        onCatch: e.onCatch,
        children: ({ error: n, reset: r }) =>
            n ? z.createElement(t, { error: n, reset: r }) : e.children,
    });
}
class Fh extends z.Component {
    constructor() {
        super(...arguments), (this.state = { error: null });
    }
    static getDerivedStateFromProps(t) {
        return { resetKey: t.getResetKey() };
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    reset() {
        this.setState({ error: null });
    }
    componentDidUpdate(t, n) {
        n.error && n.resetKey !== this.state.resetKey && this.reset();
    }
    componentDidCatch(t, n) {
        this.props.onCatch && this.props.onCatch(t, n);
    }
    render() {
        return this.props.children({
            error:
                this.state.resetKey !== this.props.getResetKey()
                    ? null
                    : this.state.error,
            reset: () => {
                this.reset();
            },
        });
    }
}
function ei({ error: e }) {
    const [t, n] = z.useState(!1);
    return M.jsxs("div", {
        style: { padding: ".5rem", maxWidth: "100%" },
        children: [
            M.jsxs("div", {
                style: { display: "flex", alignItems: "center", gap: ".5rem" },
                children: [
                    M.jsx("strong", {
                        style: { fontSize: "1rem" },
                        children: "Something went wrong!",
                    }),
                    M.jsx("button", {
                        style: {
                            appearance: "none",
                            fontSize: ".6em",
                            border: "1px solid currentColor",
                            padding: ".1rem .2rem",
                            fontWeight: "bold",
                            borderRadius: ".25rem",
                        },
                        onClick: () => n((r) => !r),
                        children: t ? "Hide Error" : "Show Error",
                    }),
                ],
            }),
            M.jsx("div", { style: { height: ".25rem" } }),
            t
                ? M.jsx("div", {
                      children: M.jsx("pre", {
                          style: {
                              fontSize: ".7em",
                              border: "1px solid red",
                              borderRadius: ".25rem",
                              padding: ".3rem",
                              color: "red",
                              overflow: "auto",
                          },
                          children: e.message
                              ? M.jsx("code", { children: e.message })
                              : null,
                      }),
                  })
                : null,
        ],
    });
}
function ze(e) {
    const t = Ut({ warn: (e == null ? void 0 : e.router) === void 0 });
    return wh(
        ((e == null ? void 0 : e.router) || t).__store,
        e == null ? void 0 : e.select
    );
}
function rt(e) {
    return !!(e != null && e.isNotFound);
}
function jh(e) {
    const t = ze({
        select: (n) => `not-found-${n.location.pathname}-${n.status}`,
    });
    return M.jsx(xs, {
        getResetKey: () => t,
        onCatch: (n, r) => {
            var o;
            if (rt(n)) (o = e.onCatch) == null || o.call(e, n, r);
            else throw n;
        },
        errorComponent: ({ error: n }) => {
            var r;
            return (r = e.fallback) == null ? void 0 : r.call(e, n);
        },
        children: e.children,
    });
}
function Dh() {
    return M.jsx("p", { children: "Not Found" });
}
const $h = [
    "component",
    "errorComponent",
    "pendingComponent",
    "notFoundComponent",
];
function Uh(e) {
    return new Bh(e);
}
class Bh {
    constructor(t) {
        (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
            (this.resetNextScroll = !0),
            (this.shouldViewTransition = void 0),
            (this.subscribers = new Set()),
            (this.startReactTransition = (n) => n()),
            (this.update = (n) => {
                n.notFoundRoute &&
                    console.warn(
                        "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info."
                    );
                const r = this.options;
                (this.options = { ...this.options, ...n }),
                    (this.isServer =
                        this.options.isServer ?? typeof document > "u"),
                    (!this.basepath ||
                        (n.basepath && n.basepath !== r.basepath)) &&
                        (n.basepath === void 0 ||
                        n.basepath === "" ||
                        n.basepath === "/"
                            ? (this.basepath = "/")
                            : (this.basepath = `/${Th(n.basepath)}`)),
                    (!this.history ||
                        (this.options.history &&
                            this.options.history !== this.history)) &&
                        ((this.history =
                            this.options.history ??
                            (this.isServer
                                ? qp({ initialEntries: [this.basepath || "/"] })
                                : Jp())),
                        (this.latestLocation = this.parseLocation())),
                    this.options.routeTree !== this.routeTree &&
                        ((this.routeTree = this.options.routeTree),
                        this.buildRouteTree()),
                    this.__store ||
                        (this.__store = new Sh(Hh(this.latestLocation), {
                            onUpdate: () => {
                                this.__store.state = {
                                    ...this.state,
                                    cachedMatches:
                                        this.state.cachedMatches.filter(
                                            (o) =>
                                                !["redirected"].includes(
                                                    o.status
                                                )
                                        ),
                                };
                            },
                        }));
            }),
            (this.buildRouteTree = () => {
                (this.routesById = {}), (this.routesByPath = {});
                const n = this.options.notFoundRoute;
                n &&
                    (n.init({ originalIndex: 99999999999 }),
                    (this.routesById[n.id] = n));
                const r = (l) => {
                    l.forEach((s, u) => {
                        s.init({ originalIndex: u });
                        const a = this.routesById[s.id];
                        if (
                            (_e(
                                !a,
                                `Duplicate routes found with id: ${String(
                                    s.id
                                )}`
                            ),
                            (this.routesById[s.id] = s),
                            !s.isRoot && s.path)
                        ) {
                            const m = Kt(s.fullPath);
                            (!this.routesByPath[m] ||
                                s.fullPath.endsWith("/")) &&
                                (this.routesByPath[m] = s);
                        }
                        const h = s.children;
                        h != null && h.length && r(h);
                    });
                };
                r([this.routeTree]);
                const o = [];
                Object.values(this.routesById).forEach((l, s) => {
                    var u;
                    if (l.isRoot || !l.path) return;
                    const a = Es(l.fullPath),
                        h = On(a);
                    for (
                        ;
                        h.length > 1 &&
                        ((u = h[0]) == null ? void 0 : u.value) === "/";

                    )
                        h.shift();
                    const m = h.map((f) =>
                        f.value === "/"
                            ? 0.75
                            : f.type === "param"
                            ? 0.5
                            : f.type === "wildcard"
                            ? 0.25
                            : 1
                    );
                    o.push({
                        child: l,
                        trimmed: a,
                        parsed: h,
                        index: s,
                        scores: m,
                    });
                }),
                    (this.flatRoutes = o
                        .sort((l, s) => {
                            const u = Math.min(
                                l.scores.length,
                                s.scores.length
                            );
                            for (let a = 0; a < u; a++)
                                if (l.scores[a] !== s.scores[a])
                                    return s.scores[a] - l.scores[a];
                            if (l.scores.length !== s.scores.length)
                                return s.scores.length - l.scores.length;
                            for (let a = 0; a < u; a++)
                                if (l.parsed[a].value !== s.parsed[a].value)
                                    return l.parsed[a].value > s.parsed[a].value
                                        ? 1
                                        : -1;
                            return l.index - s.index;
                        })
                        .map((l, s) => ((l.child.rank = s), l.child)));
            }),
            (this.subscribe = (n, r) => {
                const o = { eventType: n, fn: r };
                return (
                    this.subscribers.add(o),
                    () => {
                        this.subscribers.delete(o);
                    }
                );
            }),
            (this.emit = (n) => {
                this.subscribers.forEach((r) => {
                    r.eventType === n.type && r.fn(n);
                });
            }),
            (this.parseLocation = (n) => {
                const r = ({ pathname: s, search: u, hash: a, state: h }) => {
                        const m = this.options.parseSearch(u),
                            f = this.options.stringifySearch(m);
                        return {
                            pathname: s,
                            searchStr: f,
                            search: tt(n == null ? void 0 : n.search, m),
                            hash: a.split("#").reverse()[0] ?? "",
                            href: `${s}${f}${a}`,
                            state: tt(n == null ? void 0 : n.state, h),
                        };
                    },
                    o = r(this.history.location),
                    { __tempLocation: i, __tempKey: l } = o.state;
                if (i && (!l || l === this.tempLocationKey)) {
                    const s = r(i);
                    return (
                        (s.state.key = o.state.key),
                        delete s.state.__tempLocation,
                        { ...s, maskedLocation: o }
                    );
                }
                return o;
            }),
            (this.resolvePathWithBase = (n, r) =>
                Ih({
                    basepath: this.basepath,
                    base: n,
                    to: bo(r),
                    trailingSlash: this.options.trailingSlash,
                })),
            (this.matchRoutes = (n, r, o) => {
                let i = {};
                const l = this.flatRoutes.find((v) => {
                    const y = Xr(this.basepath, Kt(n), {
                        to: v.fullPath,
                        caseSensitive:
                            v.options.caseSensitive ??
                            this.options.caseSensitive,
                        fuzzy: !0,
                    });
                    return y ? ((i = y), !0) : !1;
                });
                let s = l || this.routesById[Me];
                const u = [s];
                let a = !1;
                for (
                    (l ? l.path !== "/" && i["**"] : Kt(n)) &&
                    (this.options.notFoundRoute
                        ? u.push(this.options.notFoundRoute)
                        : (a = !0));
                    s.parentRoute;

                )
                    (s = s.parentRoute), u.unshift(s);
                const h = (() => {
                        if (a) {
                            if (this.options.notFoundMode !== "root")
                                for (let v = u.length - 1; v >= 0; v--) {
                                    const y = u[v];
                                    if (y.children) return y.id;
                                }
                            return Me;
                        }
                    })(),
                    m = u.map((v) => {
                        var y;
                        let g;
                        const x =
                            ((y = v.options.params) == null
                                ? void 0
                                : y.parse) ?? v.options.parseParams;
                        if (x)
                            try {
                                const d = x(i);
                                Object.assign(i, d);
                            } catch (d) {
                                if (
                                    ((g = new Vh(d.message, { cause: d })),
                                    o != null && o.throwOnError)
                                )
                                    throw g;
                                return g;
                            }
                    }),
                    f = [];
                return (
                    u.forEach((v, y) => {
                        var g, x, d, c, p, S, C, P, _, E;
                        const I = f[y - 1],
                            [T, U] = (() => {
                                const R = (I == null ? void 0 : I.search) ?? r;
                                try {
                                    const N =
                                            typeof v.options.validateSearch ==
                                            "object"
                                                ? v.options.validateSearch.parse
                                                : v.options.validateSearch,
                                        O = (N == null ? void 0 : N(R)) ?? {};
                                    return [{ ...R, ...O }, void 0];
                                } catch (N) {
                                    const O = new Ah(N.message, { cause: N });
                                    if (o != null && o.throwOnError) throw O;
                                    return [R, O];
                                }
                            })(),
                            A =
                                ((x = (g = v.options).loaderDeps) == null
                                    ? void 0
                                    : x.call(g, { search: T })) ?? "",
                            j = A ? JSON.stringify(A) : "",
                            Y = Ii({ path: v.fullPath, params: i }),
                            le =
                                Ii({
                                    path: v.id,
                                    params: i,
                                    leaveWildcards: !0,
                                }) + j,
                            we = this.getMatch(le),
                            ke = this.state.matches.find((R) => R.id === le)
                                ? "stay"
                                : "enter";
                        let w;
                        if (we) w = { ...we, cause: ke, params: i };
                        else {
                            const R =
                                v.options.loader ||
                                v.options.beforeLoad ||
                                v.lazyFn
                                    ? "pending"
                                    : "success";
                            w = {
                                id: le,
                                index: y,
                                routeId: v.id,
                                params: i,
                                pathname: It([this.basepath, Y]),
                                updatedAt: Date.now(),
                                search: {},
                                searchError: void 0,
                                status: R,
                                isFetching: !1,
                                error: void 0,
                                paramsError: m[y],
                                routeContext: void 0,
                                context: void 0,
                                abortController: new AbortController(),
                                fetchCount: 0,
                                cause: ke,
                                loaderDeps: A,
                                invalid: !1,
                                preload: !1,
                                links:
                                    (c = (d = v.options).links) == null
                                        ? void 0
                                        : c.call(d),
                                scripts:
                                    (S = (p = v.options).scripts) == null
                                        ? void 0
                                        : S.call(p),
                                staticData: v.options.staticData || {},
                                loadPromise: on(),
                            };
                        }
                        w.status === "success" &&
                            ((w.meta =
                                (P = (C = v.options).meta) == null
                                    ? void 0
                                    : P.call(C, {
                                          matches: f,
                                          match: w,
                                          params: w.params,
                                          loaderData: w.loaderData,
                                      })),
                            (w.headers =
                                (E = (_ = v.options).headers) == null
                                    ? void 0
                                    : E.call(_, { loaderData: w.loaderData }))),
                            (o != null && o.preload) ||
                                (w.globalNotFound = h === v.id),
                            (w.search = tt(w.search, T)),
                            (w.searchError = U),
                            f.push(w);
                    }),
                    f
                );
            }),
            (this.cancelMatch = (n) => {
                const r = this.getMatch(n);
                r &&
                    (r.abortController.abort(), clearTimeout(r.pendingTimeout));
            }),
            (this.cancelMatches = () => {
                var n;
                (n = this.state.pendingMatches) == null ||
                    n.forEach((r) => {
                        this.cancelMatch(r.id);
                    });
            }),
            (this.buildLocation = (n) => {
                const r = (i = {}, l) => {
                        var s, u, a;
                        const h =
                                i._fromLocation != null
                                    ? this.matchRoutes(
                                          i._fromLocation.pathname,
                                          i.fromSearch || i._fromLocation.search
                                      )
                                    : this.state.matches,
                            m =
                                i.from != null
                                    ? h.find((j) =>
                                          Xr(this.basepath, Kt(j.pathname), {
                                              to: i.from,
                                              caseSensitive: !1,
                                              fuzzy: !1,
                                          })
                                      )
                                    : void 0,
                            f =
                                (m == null ? void 0 : m.pathname) ||
                                this.latestLocation.pathname;
                        _e(
                            i.from == null || m != null,
                            "Could not find match for from: " + i.from
                        );
                        const v =
                                ((s = zo(h)) == null ? void 0 : s.search) ||
                                this.latestLocation.search,
                            y =
                                l == null
                                    ? void 0
                                    : l.filter((j) =>
                                          h.find((Y) => Y.routeId === j.routeId)
                                      ),
                            g =
                                this.routesById[
                                    (u =
                                        y == null
                                            ? void 0
                                            : y.find(
                                                  (j) => j.pathname === f
                                              )) == null
                                        ? void 0
                                        : u.routeId
                                ];
                        let x = i.to
                            ? this.resolvePathWithBase(f, `${i.to}`)
                            : this.resolvePathWithBase(
                                  f,
                                  (g == null ? void 0 : g.to) ?? f
                              );
                        const d = {
                            ...((a = zo(h)) == null ? void 0 : a.params),
                        };
                        let c =
                            (i.params ?? !0) === !0
                                ? d
                                : { ...d, ...gn(i.params, d) };
                        Object.keys(c).length > 0 &&
                            (l == null ||
                                l
                                    .map((j) => {
                                        var Y;
                                        const le =
                                            this.looseRoutesById[j.routeId];
                                        return (
                                            ((Y =
                                                le == null
                                                    ? void 0
                                                    : le.options.params) == null
                                                ? void 0
                                                : Y.stringify) ??
                                            le.options.stringifyParams
                                        );
                                    })
                                    .filter(Boolean)
                                    .forEach((j) => {
                                        c = { ...c, ...j(c) };
                                    })),
                            (x = Ii({
                                path: x,
                                params: c ?? {},
                                leaveWildcards: !1,
                                leaveParams: n.leaveParams,
                            }));
                        const p =
                                (y == null
                                    ? void 0
                                    : y
                                          .map(
                                              (j) =>
                                                  this.looseRoutesById[
                                                      j.routeId
                                                  ].options.preSearchFilters ??
                                                  []
                                          )
                                          .flat()
                                          .filter(Boolean)) ?? [],
                            S =
                                (y == null
                                    ? void 0
                                    : y
                                          .map(
                                              (j) =>
                                                  this.looseRoutesById[
                                                      j.routeId
                                                  ].options.postSearchFilters ??
                                                  []
                                          )
                                          .flat()
                                          .filter(Boolean)) ?? [],
                            C = p.length ? p.reduce((j, Y) => Y(j), v) : v,
                            P =
                                i.search === !0
                                    ? C
                                    : i.search
                                    ? gn(i.search, C)
                                    : p.length
                                    ? C
                                    : {},
                            _ = S.length ? S.reduce((j, Y) => Y(j), P) : P,
                            E = tt(v, _),
                            I = this.options.stringifySearch(E),
                            T =
                                i.hash === !0
                                    ? this.latestLocation.hash
                                    : i.hash
                                    ? gn(i.hash, this.latestLocation.hash)
                                    : void 0,
                            U = T ? `#${T}` : "";
                        let A =
                            i.state === !0
                                ? this.latestLocation.state
                                : i.state
                                ? gn(i.state, this.latestLocation.state)
                                : {};
                        return (
                            (A = tt(this.latestLocation.state, A)),
                            {
                                pathname: x,
                                search: E,
                                searchStr: I,
                                state: A,
                                hash: T ?? "",
                                href: `${x}${I}${U}`,
                                unmaskOnReload: i.unmaskOnReload,
                            }
                        );
                    },
                    o = (i = {}, l) => {
                        var s;
                        const u = r(i);
                        let a = l ? r(l) : void 0;
                        if (!a) {
                            let y = {};
                            const g =
                                (s = this.options.routeMasks) == null
                                    ? void 0
                                    : s.find((x) => {
                                          const d = Xr(
                                              this.basepath,
                                              u.pathname,
                                              {
                                                  to: x.from,
                                                  caseSensitive: !1,
                                                  fuzzy: !1,
                                              }
                                          );
                                          return d ? ((y = d), !0) : !1;
                                      });
                            if (g) {
                                const { from: x, ...d } = g;
                                (l = { ...ur(n, ["from"]), ...d, params: y }),
                                    (a = r(l));
                            }
                        }
                        const h = this.matchRoutes(u.pathname, u.search),
                            m = a
                                ? this.matchRoutes(a.pathname, a.search)
                                : void 0,
                            f = a ? r(l, m) : void 0,
                            v = r(i, h);
                        return f && (v.maskedLocation = f), v;
                    };
                return n.mask ? o(n, { ...ur(n, ["from"]), ...n.mask }) : o(n);
            }),
            (this.commitLocation = ({
                viewTransition: n,
                ignoreBlocker: r,
                ...o
            }) => {
                const i = () => {
                        o.state.key = this.latestLocation.state.key;
                        const u = Cn(o.state, this.latestLocation.state);
                        return delete o.state.key, u;
                    },
                    l = this.latestLocation.href === o.href,
                    s = this.commitLocationPromise;
                if (
                    ((this.commitLocationPromise = on(() => {
                        s == null || s.resolve();
                    })),
                    l && i())
                )
                    this.load();
                else {
                    let { maskedLocation: u, ...a } = o;
                    u &&
                        ((a = {
                            ...u,
                            state: {
                                ...u.state,
                                __tempKey: void 0,
                                __tempLocation: {
                                    ...a,
                                    search: a.searchStr,
                                    state: {
                                        ...a.state,
                                        __tempKey: void 0,
                                        __tempLocation: void 0,
                                        key: void 0,
                                    },
                                },
                            },
                        }),
                        (a.unmaskOnReload ??
                            this.options.unmaskOnReload ??
                            !1) &&
                            (a.state.__tempKey = this.tempLocationKey)),
                        (this.shouldViewTransition = n),
                        this.history[o.replace ? "replace" : "push"](
                            a.href,
                            a.state,
                            { ignoreBlocker: r }
                        );
                }
                return (
                    (this.resetNextScroll = o.resetScroll ?? !0),
                    this.history.subscribers.size || this.load(),
                    this.commitLocationPromise
                );
            }),
            (this.buildAndCommitLocation = ({
                replace: n,
                resetScroll: r,
                viewTransition: o,
                ignoreBlocker: i,
                ...l
            } = {}) => {
                const s = this.buildLocation(l);
                return this.commitLocation({
                    ...s,
                    viewTransition: o,
                    replace: n,
                    resetScroll: r,
                    ignoreBlocker: i,
                });
            }),
            (this.navigate = ({ from: n, to: r, __isRedirect: o, ...i }) => {
                const l = String(r);
                let s;
                try {
                    new URL(`${l}`), (s = !0);
                } catch {}
                return (
                    _e(!s),
                    this.buildAndCommitLocation({ ...i, from: n, to: r })
                );
            }),
            (this.load = async () => {
                (this.latestLocation = this.parseLocation(this.latestLocation)),
                    this.__store.setState((i) => ({
                        ...i,
                        loadedAt: Date.now(),
                    }));
                let n, r;
                const o = new Promise((i) => {
                    this.startReactTransition(async () => {
                        var l;
                        try {
                            const s = this.latestLocation,
                                u = this.state.resolvedLocation,
                                a = u.href !== s.href;
                            this.cancelMatches();
                            let h;
                            this.__store.batch(() => {
                                (h = this.matchRoutes(s.pathname, s.search)),
                                    this.__store.setState((m) => ({
                                        ...m,
                                        status: "pending",
                                        isLoading: !0,
                                        location: s,
                                        pendingMatches: h,
                                        cachedMatches: m.cachedMatches.filter(
                                            (f) => !h.find((v) => v.id === f.id)
                                        ),
                                    }));
                            }),
                                this.state.redirect ||
                                    this.emit({
                                        type: "onBeforeNavigate",
                                        fromLocation: u,
                                        toLocation: s,
                                        pathChanged: a,
                                    }),
                                this.emit({
                                    type: "onBeforeLoad",
                                    fromLocation: u,
                                    toLocation: s,
                                    pathChanged: a,
                                }),
                                await this.loadMatches({
                                    matches: h,
                                    location: s,
                                    onReady: async () => {
                                        this.startViewTransition(async () => {
                                            let m, f, v;
                                            this.__store.batch(() => {
                                                this.__store.setState((y) => {
                                                    const g = y.matches,
                                                        x =
                                                            y.pendingMatches ||
                                                            y.matches;
                                                    return (
                                                        (m = g.filter(
                                                            (d) =>
                                                                !x.find(
                                                                    (c) =>
                                                                        c.id ===
                                                                        d.id
                                                                )
                                                        )),
                                                        (f = x.filter(
                                                            (d) =>
                                                                !g.find(
                                                                    (c) =>
                                                                        c.id ===
                                                                        d.id
                                                                )
                                                        )),
                                                        (v = g.filter((d) =>
                                                            x.find(
                                                                (c) =>
                                                                    c.id ===
                                                                    d.id
                                                            )
                                                        )),
                                                        {
                                                            ...y,
                                                            isLoading: !1,
                                                            matches: x,
                                                            pendingMatches:
                                                                void 0,
                                                            cachedMatches: [
                                                                ...y.cachedMatches,
                                                                ...m.filter(
                                                                    (d) =>
                                                                        d.status !==
                                                                        "error"
                                                                ),
                                                            ],
                                                        }
                                                    );
                                                }),
                                                    this.cleanCache();
                                            }),
                                                [
                                                    [m, "onLeave"],
                                                    [f, "onEnter"],
                                                    [v, "onStay"],
                                                ].forEach(([y, g]) => {
                                                    y.forEach((x) => {
                                                        var d, c;
                                                        (c = (d =
                                                            this
                                                                .looseRoutesById[
                                                                x.routeId
                                                            ].options)[g]) ==
                                                            null ||
                                                            c.call(d, x);
                                                    });
                                                });
                                        });
                                    },
                                });
                        } catch (s) {
                            Vu(s)
                                ? ((n = s),
                                  this.isServer ||
                                      this.navigate({
                                          ...s,
                                          replace: !0,
                                          __isRedirect: !0,
                                      }))
                                : rt(s) && (r = s),
                                this.__store.setState((u) => ({
                                    ...u,
                                    statusCode: n
                                        ? n.statusCode
                                        : r
                                        ? 404
                                        : u.matches.some(
                                              (a) => a.status === "error"
                                          )
                                        ? 500
                                        : 200,
                                    redirect: n,
                                }));
                        }
                        this.latestLoadPromise === o &&
                            ((l = this.commitLocationPromise) == null ||
                                l.resolve(),
                            (this.latestLoadPromise = void 0),
                            (this.commitLocationPromise = void 0)),
                            i();
                    });
                });
                for (
                    this.latestLoadPromise = o, await o;
                    this.latestLoadPromise && o !== this.latestLoadPromise;

                )
                    await this.latestLoadPromise;
            }),
            (this.startViewTransition = (n) => {
                var r, o;
                const i =
                    this.shouldViewTransition ??
                    this.options.defaultViewTransition;
                delete this.shouldViewTransition,
                    ((o =
                        (r = i && typeof document < "u" ? document : void 0) ==
                        null
                            ? void 0
                            : r.startViewTransition) != null &&
                        o.call(r, n)) ||
                        n();
            }),
            (this.updateMatch = (n, r) => {
                var o;
                let i;
                const l =
                        (o = this.state.pendingMatches) == null
                            ? void 0
                            : o.find((a) => a.id === n),
                    s = this.state.matches.find((a) => a.id === n),
                    u = l ? "pendingMatches" : s ? "matches" : "cachedMatches";
                return (
                    this.__store.setState((a) => {
                        var h;
                        return {
                            ...a,
                            [u]:
                                (h = a[u]) == null
                                    ? void 0
                                    : h.map((m) =>
                                          m.id === n ? (i = r(m)) : m
                                      ),
                        };
                    }),
                    i
                );
            }),
            (this.getMatch = (n) =>
                [
                    ...this.state.cachedMatches,
                    ...(this.state.pendingMatches ?? []),
                    ...this.state.matches,
                ].find((r) => r.id === n)),
            (this.loadMatches = async ({
                location: n,
                matches: r,
                preload: o,
                onReady: i,
                updateMatch: l = this.updateMatch,
            }) => {
                let s,
                    u = !1;
                const a = async () => {
                    u || ((u = !0), await (i == null ? void 0 : i()));
                };
                !this.isServer && !this.state.matches.length && a();
                const h = (m, f) => {
                    var v, y, g;
                    if (Vu(f)) throw f;
                    if (Vt(f) || rt(f)) {
                        if (
                            (l(m.id, (x) => ({
                                ...x,
                                status: Vt(f)
                                    ? "redirected"
                                    : rt(f)
                                    ? "notFound"
                                    : "error",
                                isFetching: !1,
                                error: f,
                                beforeLoadPromise: void 0,
                                loaderPromise: void 0,
                            })),
                            f.routeId || (f.routeId = m.routeId),
                            (v = m.beforeLoadPromise) == null || v.resolve(),
                            (y = m.loaderPromise) == null || y.resolve(),
                            (g = m.loadPromise) == null || g.resolve(),
                            Vt(f))
                        )
                            throw (
                                ((u = !0),
                                (f = this.resolveRedirect({
                                    ...f,
                                    _fromLocation: n,
                                })),
                                f)
                            );
                        if (rt(f))
                            throw (
                                (this._handleNotFound(r, f, { updateMatch: l }),
                                f)
                            );
                    }
                };
                try {
                    await new Promise((m, f) => {
                        (async () => {
                            var v, y, g;
                            try {
                                const x = (p, S, C) => {
                                    var P, _;
                                    const { id: E, routeId: I } = r[p],
                                        T = this.looseRoutesById[I];
                                    if (S instanceof Promise) throw S;
                                    (S.routerCode = C),
                                        (s = s ?? p),
                                        h(this.getMatch(E), S);
                                    try {
                                        (_ = (P = T.options).onError) == null ||
                                            _.call(P, S);
                                    } catch (U) {
                                        (S = U), h(this.getMatch(E), S);
                                    }
                                    l(E, (U) => {
                                        var A;
                                        return (
                                            (A = U.beforeLoadPromise) == null ||
                                                A.resolve(),
                                            {
                                                ...U,
                                                error: S,
                                                status: "error",
                                                isFetching: !1,
                                                updatedAt: Date.now(),
                                                abortController:
                                                    new AbortController(),
                                                beforeLoadPromise: void 0,
                                            }
                                        );
                                    });
                                };
                                for (const [
                                    p,
                                    { id: S, routeId: C },
                                ] of r.entries()) {
                                    const P = this.getMatch(S);
                                    if (P.beforeLoadPromise || P.loaderPromise)
                                        await P.beforeLoadPromise;
                                    else {
                                        try {
                                            l(S, (V) => ({
                                                ...V,
                                                loadPromise: on(() => {
                                                    var ee;
                                                    (ee = V.loadPromise) ==
                                                        null || ee.resolve();
                                                }),
                                                beforeLoadPromise: on(),
                                            }));
                                            const _ = this.looseRoutesById[C],
                                                E = new AbortController(),
                                                I =
                                                    (v = r[p - 1]) == null
                                                        ? void 0
                                                        : v.id,
                                                T = () =>
                                                    I
                                                        ? this.getMatch(I)
                                                              .context ??
                                                          this.options
                                                              .context ??
                                                          {}
                                                        : this.options
                                                              .context ?? {},
                                                U =
                                                    _.options.pendingMs ??
                                                    this.options
                                                        .defaultPendingMs,
                                                A = !!(
                                                    i &&
                                                    !this.isServer &&
                                                    !o &&
                                                    (_.options.loader ||
                                                        _.options.beforeLoad) &&
                                                    typeof U == "number" &&
                                                    U !== 1 / 0 &&
                                                    (_.options
                                                        .pendingComponent ??
                                                        this.options
                                                            .defaultPendingComponent)
                                                );
                                            let j;
                                            A &&
                                                (j = setTimeout(() => {
                                                    try {
                                                        a();
                                                    } catch {}
                                                }, U));
                                            const {
                                                paramsError: Y,
                                                searchError: le,
                                            } = this.getMatch(S);
                                            Y && x(p, Y, "PARSE_PARAMS"),
                                                le &&
                                                    x(p, le, "VALIDATE_SEARCH");
                                            const we = T();
                                            l(S, (V) => ({
                                                ...V,
                                                isFetching: "beforeLoad",
                                                fetchCount: V.fetchCount + 1,
                                                routeContext: tt(
                                                    V.routeContext,
                                                    we
                                                ),
                                                context: tt(V.context, we),
                                                abortController: E,
                                                pendingTimeout: j,
                                            }));
                                            const {
                                                    search: ke,
                                                    params: w,
                                                    routeContext: R,
                                                    cause: N,
                                                } = this.getMatch(S),
                                                O = {
                                                    search: ke,
                                                    abortController: E,
                                                    params: w,
                                                    preload: !!o,
                                                    context: R,
                                                    location: n,
                                                    navigate: (V) =>
                                                        this.navigate({
                                                            ...V,
                                                            _fromLocation: n,
                                                        }),
                                                    buildLocation:
                                                        this.buildLocation,
                                                    cause: o ? "preload" : N,
                                                },
                                                D =
                                                    (await ((g = (y = _.options)
                                                        .beforeLoad) == null
                                                        ? void 0
                                                        : g.call(y, O))) ?? {};
                                            (Vt(D) || rt(D)) &&
                                                x(p, D, "BEFORE_LOAD"),
                                                l(S, (V) => {
                                                    const ee = {
                                                        ...V.routeContext,
                                                        ...D,
                                                    };
                                                    return {
                                                        ...V,
                                                        routeContext: tt(
                                                            V.routeContext,
                                                            ee
                                                        ),
                                                        context: tt(
                                                            V.context,
                                                            ee
                                                        ),
                                                        abortController: E,
                                                    };
                                                });
                                        } catch (_) {
                                            x(p, _, "BEFORE_LOAD");
                                        }
                                        l(S, (_) => {
                                            var E;
                                            return (
                                                (E = _.beforeLoadPromise) ==
                                                    null || E.resolve(),
                                                {
                                                    ..._,
                                                    beforeLoadPromise: void 0,
                                                    isFetching: !1,
                                                }
                                            );
                                        });
                                    }
                                }
                                const d = r.slice(0, s),
                                    c = [];
                                d.forEach(({ id: p, routeId: S }, C) => {
                                    c.push(
                                        (async () => {
                                            const { loaderPromise: P } =
                                                this.getMatch(p);
                                            if (P) await P;
                                            else {
                                                const _ = c[C - 1],
                                                    E = this.looseRoutesById[S],
                                                    I = () => {
                                                        const {
                                                            params: R,
                                                            loaderDeps: N,
                                                            abortController: O,
                                                            context: D,
                                                            cause: V,
                                                        } = this.getMatch(p);
                                                        return {
                                                            params: R,
                                                            deps: N,
                                                            preload: !!o,
                                                            parentMatchPromise:
                                                                _,
                                                            abortController: O,
                                                            context: D,
                                                            location: n,
                                                            navigate: (ee) =>
                                                                this.navigate({
                                                                    ...ee,
                                                                    _fromLocation:
                                                                        n,
                                                                }),
                                                            cause: o
                                                                ? "preload"
                                                                : V,
                                                            route: E,
                                                        };
                                                    },
                                                    T =
                                                        Date.now() -
                                                        this.getMatch(p)
                                                            .updatedAt,
                                                    U = o
                                                        ? E.options
                                                              .preloadStaleTime ??
                                                          this.options
                                                              .defaultPreloadStaleTime ??
                                                          3e4
                                                        : E.options.staleTime ??
                                                          this.options
                                                              .defaultStaleTime ??
                                                          0,
                                                    A = E.options.shouldReload,
                                                    j =
                                                        typeof A == "function"
                                                            ? A(I())
                                                            : A;
                                                l(p, (R) => ({
                                                    ...R,
                                                    loaderPromise: on(),
                                                    preload:
                                                        !!o &&
                                                        !this.state.matches.find(
                                                            (N) => N.id === p
                                                        ),
                                                }));
                                                const Y = async () => {
                                                        var R,
                                                            N,
                                                            O,
                                                            D,
                                                            V,
                                                            ee,
                                                            st,
                                                            je;
                                                        try {
                                                            const He =
                                                                async () => {
                                                                    const Je =
                                                                        this.getMatch(
                                                                            p
                                                                        );
                                                                    Je.minPendingPromise &&
                                                                        (await Je.minPendingPromise);
                                                                };
                                                            try {
                                                                E._lazyPromise =
                                                                    E._lazyPromise ||
                                                                    (E.lazyFn
                                                                        ? E.lazyFn().then(
                                                                              (
                                                                                  be
                                                                              ) => {
                                                                                  Object.assign(
                                                                                      E.options,
                                                                                      be.options
                                                                                  );
                                                                              }
                                                                          )
                                                                        : Promise.resolve());
                                                                const Je =
                                                                    this.getMatch(
                                                                        p
                                                                    )
                                                                        .componentsPromise ||
                                                                    E._lazyPromise.then(
                                                                        () =>
                                                                            Promise.all(
                                                                                $h.map(
                                                                                    async (
                                                                                        be
                                                                                    ) => {
                                                                                        const nn =
                                                                                            E
                                                                                                .options[
                                                                                                be
                                                                                            ];
                                                                                        nn !=
                                                                                            null &&
                                                                                            nn.preload &&
                                                                                            (await nn.preload());
                                                                                    }
                                                                                )
                                                                            )
                                                                    );
                                                                l(p, (be) => ({
                                                                    ...be,
                                                                    isFetching:
                                                                        "loader",
                                                                    componentsPromise:
                                                                        Je,
                                                                })),
                                                                    await E._lazyPromise;
                                                                let me =
                                                                    await ((N =
                                                                        (R =
                                                                            E.options)
                                                                            .loader) ==
                                                                    null
                                                                        ? void 0
                                                                        : N.call(
                                                                              R,
                                                                              I()
                                                                          ));
                                                                this
                                                                    .serializeLoaderData &&
                                                                    (me =
                                                                        this.serializeLoaderData(
                                                                            me,
                                                                            {
                                                                                router: this,
                                                                                match: this.getMatch(
                                                                                    p
                                                                                ),
                                                                            }
                                                                        )),
                                                                    h(
                                                                        this.getMatch(
                                                                            p
                                                                        ),
                                                                        me
                                                                    ),
                                                                    await He();
                                                                const qe =
                                                                        (D =
                                                                            (O =
                                                                                E.options)
                                                                                .meta) ==
                                                                        null
                                                                            ? void 0
                                                                            : D.call(
                                                                                  O,
                                                                                  {
                                                                                      matches:
                                                                                          r,
                                                                                      match: this.getMatch(
                                                                                          p
                                                                                      ),
                                                                                      params: this.getMatch(
                                                                                          p
                                                                                      )
                                                                                          .params,
                                                                                      loaderData:
                                                                                          me,
                                                                                  }
                                                                              ),
                                                                    Un =
                                                                        (ee =
                                                                            (V =
                                                                                E.options)
                                                                                .headers) ==
                                                                        null
                                                                            ? void 0
                                                                            : ee.call(
                                                                                  V,
                                                                                  {
                                                                                      loaderData:
                                                                                          me,
                                                                                  }
                                                                              );
                                                                l(p, (be) => ({
                                                                    ...be,
                                                                    error: void 0,
                                                                    status: "success",
                                                                    isFetching:
                                                                        !1,
                                                                    updatedAt:
                                                                        Date.now(),
                                                                    loaderData:
                                                                        me,
                                                                    meta: qe,
                                                                    headers: Un,
                                                                }));
                                                            } catch (Je) {
                                                                let me = Je;
                                                                await He(),
                                                                    h(
                                                                        this.getMatch(
                                                                            p
                                                                        ),
                                                                        Je
                                                                    );
                                                                try {
                                                                    (je = (st =
                                                                        E.options)
                                                                        .onError) ==
                                                                        null ||
                                                                        je.call(
                                                                            st,
                                                                            Je
                                                                        );
                                                                } catch (qe) {
                                                                    (me = qe),
                                                                        h(
                                                                            this.getMatch(
                                                                                p
                                                                            ),
                                                                            qe
                                                                        );
                                                                }
                                                                l(p, (qe) => ({
                                                                    ...qe,
                                                                    error: me,
                                                                    status: "error",
                                                                    isFetching:
                                                                        !1,
                                                                }));
                                                            }
                                                            await this.getMatch(
                                                                p
                                                            ).componentsPromise;
                                                        } catch (He) {
                                                            h(
                                                                this.getMatch(
                                                                    p
                                                                ),
                                                                He
                                                            );
                                                        }
                                                    },
                                                    {
                                                        status: le,
                                                        invalid: we,
                                                    } = this.getMatch(p);
                                                le === "success" &&
                                                (we || (j ?? T > U))
                                                    ? (async () => {
                                                          try {
                                                              await Y();
                                                          } catch {}
                                                      })()
                                                    : le !== "success" &&
                                                      (await Y());
                                                const {
                                                    loaderPromise: ke,
                                                    loadPromise: w,
                                                } = this.getMatch(p);
                                                ke == null || ke.resolve(),
                                                    w == null || w.resolve();
                                            }
                                            l(p, (_) => ({
                                                ..._,
                                                isFetching: !1,
                                                loaderPromise: void 0,
                                            }));
                                        })()
                                    );
                                }),
                                    await Promise.all(c),
                                    m();
                            } catch (x) {
                                f(x);
                            }
                        })();
                    }),
                        await a();
                } catch (m) {
                    if (Vt(m) || rt(m)) throw (rt(m) && !o && (await a()), m);
                }
                return r;
            }),
            (this.invalidate = () => {
                const n = (r) => ({
                    ...r,
                    invalid: !0,
                    ...(r.status === "error"
                        ? { status: "pending", error: void 0 }
                        : {}),
                });
                return (
                    this.__store.setState((r) => {
                        var o;
                        return {
                            ...r,
                            matches: r.matches.map(n),
                            cachedMatches: r.cachedMatches.map(n),
                            pendingMatches:
                                (o = r.pendingMatches) == null
                                    ? void 0
                                    : o.map(n),
                        };
                    }),
                    this.load()
                );
            }),
            (this.resolveRedirect = (n) => {
                const r = n;
                return r.href || (r.href = this.buildLocation(r).href), r;
            }),
            (this.cleanCache = () => {
                this.__store.setState((n) => ({
                    ...n,
                    cachedMatches: n.cachedMatches.filter((r) => {
                        const o = this.looseRoutesById[r.routeId];
                        if (!o.options.loader) return !1;
                        const i =
                            (r.preload
                                ? o.options.preloadGcTime ??
                                  this.options.defaultPreloadGcTime
                                : o.options.gcTime ??
                                  this.options.defaultGcTime) ?? 5 * 60 * 1e3;
                        return (
                            r.status !== "error" && Date.now() - r.updatedAt < i
                        );
                    }),
                }));
            }),
            (this.preloadRoute = async (n) => {
                const r = this.buildLocation(n);
                let o = this.matchRoutes(r.pathname, r.search, {
                    throwOnError: !0,
                    preload: !0,
                });
                const i = Object.fromEntries(
                    [
                        ...this.state.matches,
                        ...(this.state.pendingMatches ?? []),
                        ...this.state.cachedMatches,
                    ].map((s) => [s.id, !0])
                );
                this.__store.batch(() => {
                    o.forEach((s) => {
                        i[s.id] ||
                            this.__store.setState((u) => ({
                                ...u,
                                cachedMatches: [...u.cachedMatches, s],
                            }));
                    });
                });
                const l = new Set(
                    [
                        ...this.state.matches,
                        ...(this.state.pendingMatches ?? []),
                    ].map((s) => s.id)
                );
                try {
                    return (
                        (o = await this.loadMatches({
                            matches: o,
                            location: r,
                            preload: !0,
                            updateMatch: (s, u) => {
                                l.has(s)
                                    ? (o = o.map((a) =>
                                          a.id === s ? u(a) : a
                                      ))
                                    : this.updateMatch(s, u);
                            },
                        })),
                        o
                    );
                } catch (s) {
                    if (Vt(s))
                        return await this.preloadRoute({
                            ...s,
                            _fromLocation: r,
                        });
                    console.error(s);
                    return;
                }
            }),
            (this.matchRoute = (n, r) => {
                const o = {
                        ...n,
                        to: n.to
                            ? this.resolvePathWithBase(n.from || "", n.to)
                            : void 0,
                        params: n.params || {},
                        leaveParams: !0,
                    },
                    i = this.buildLocation(o);
                if (r != null && r.pending && this.state.status !== "pending")
                    return !1;
                const s = (
                        (r == null ? void 0 : r.pending) === void 0
                            ? !this.state.isLoading
                            : r.pending
                    )
                        ? this.latestLocation
                        : this.state.resolvedLocation,
                    u = Xr(this.basepath, s.pathname, { ...r, to: i.pathname });
                return !u || (n.params && !Cn(u, n.params, !0))
                    ? !1
                    : u && ((r == null ? void 0 : r.includeSearch) ?? !0)
                    ? Cn(s.search, i.search, !0)
                        ? u
                        : !1
                    : u;
            }),
            (this.dehydrate = () => {
                var n;
                const r =
                    ((n = this.options.errorSerializer) == null
                        ? void 0
                        : n.serialize) ?? Wh;
                return {
                    state: {
                        dehydratedMatches: this.state.matches.map((o) => ({
                            ...ur(o, ["id", "status", "updatedAt"]),
                            error: o.error
                                ? { data: r(o.error), __isServerError: !0 }
                                : void 0,
                        })),
                    },
                    manifest: this.manifest,
                };
            }),
            (this.hydrate = () => {
                var n, r, o;
                let i;
                typeof document < "u" &&
                    (i = this.options.transformer.parse(
                        (n = window.__TSR__) == null ? void 0 : n.dehydrated
                    )),
                    _e(i),
                    (this.dehydratedData = i.payload),
                    (o = (r = this.options).hydrate) == null ||
                        o.call(r, i.payload);
                const l = i.router.state,
                    s = this.matchRoutes(
                        this.state.location.pathname,
                        this.state.location.search
                    ).map((u) => {
                        const a = l.dehydratedMatches.find(
                            (h) => h.id === u.id
                        );
                        return (
                            _e(
                                a,
                                `Could not find a client-side match for dehydrated match with id: ${u.id}!`
                            ),
                            { ...u, ...a }
                        );
                    });
                this.__store.setState((u) => ({ ...u, matches: s })),
                    (this.manifest = i.router.manifest);
            }),
            (this.injectedHtml = []),
            (this.injectHtml = (n) => {
                const r = () => (
                    (this.injectedHtml = this.injectedHtml.filter(
                        (o) => o !== r
                    )),
                    n
                );
                this.injectedHtml.push(r);
            }),
            (this.streamedKeys = new Set()),
            (this.getStreamedValue = (n) => {
                var r;
                if (this.isServer) return;
                const o =
                    (r = window.__TSR__) == null ? void 0 : r.streamedValues[n];
                if (o)
                    return (
                        o.parsed ||
                            (o.parsed = this.options.transformer.parse(
                                o.value
                            )),
                        o.parsed
                    );
            }),
            (this.streamValue = (n, r) => {
                var o;
                this.streamedKeys.has(n), this.streamedKeys.add(n);
                const i = `__TSR__.streamedValues['${n}'] = { value: ${
                    (o = this.serializer) == null
                        ? void 0
                        : o.call(this, this.options.transformer.stringify(r))
                }}`;
                this.injectHtml(
                    `<script class='tsr-once'>${i}; __TSR__.cleanScripts()<\/script>`
                );
            }),
            (this._handleNotFound = (
                n,
                r,
                { updateMatch: o = this.updateMatch } = {}
            ) => {
                const i = Object.fromEntries(n.map((u) => [u.routeId, u]));
                let l =
                    (r.global
                        ? this.looseRoutesById[Me]
                        : this.looseRoutesById[r.routeId]) ||
                    this.looseRoutesById[Me];
                for (
                    ;
                    !l.options.notFoundComponent &&
                    !this.options.defaultNotFoundComponent &&
                    l.id !== Me;

                )
                    (l = l.parentRoute), _e(l);
                const s = i[l.id];
                _e(s, "Could not find match for route: " + l.id),
                    o(s.id, (u) => ({
                        ...u,
                        status: "notFound",
                        error: r,
                        isFetching: !1,
                    })),
                    r.routerCode === "BEFORE_LOAD" &&
                        l.parentRoute &&
                        ((r.routeId = l.parentRoute.id),
                        this._handleNotFound(n, r, { updateMatch: o }));
            }),
            (this.hasNotFoundMatch = () =>
                this.__store.state.matches.some(
                    (n) => n.status === "notFound" || n.globalNotFound
                )),
            this.update({
                defaultPreloadDelay: 50,
                defaultPendingMs: 1e3,
                defaultPendingMinMs: 500,
                context: void 0,
                ...t,
                notFoundMode: t.notFoundMode ?? "fuzzy",
                stringifySearch: t.stringifySearch ?? Ch,
                parseSearch: t.parseSearch ?? xh,
                transformer: t.transformer ?? {
                    parse: JSON.parse,
                    stringify: JSON.stringify,
                },
            }),
            typeof document < "u" && (window.__TSR__ROUTER__ = this);
    }
    get state() {
        return this.__store.state;
    }
    get looseRoutesById() {
        return this.routesById;
    }
}
class Ah extends Error {}
class Vh extends Error {}
function Hh(e) {
    return {
        loadedAt: 0,
        isLoading: !1,
        isTransitioning: !1,
        status: "idle",
        resolvedLocation: { ...e },
        location: e,
        matches: [],
        pendingMatches: [],
        cachedMatches: [],
        statusCode: 200,
    };
}
function Wh(e) {
    return e instanceof Error
        ? { name: e.name, message: e.message }
        : { data: e };
}
function Hu(e) {
    return !(typeof e == "object" && e && "data" in e) ||
        !("__isServerError" in e && e.__isServerError) ||
        !(typeof e.data == "object" && e.data)
        ? !1
        : e.__isServerError === !0;
}
function Wu(e) {
    if ("name" in e && "message" in e) {
        const t = new Error(e.message);
        return (t.name = e.name), t;
    }
    return e.data;
}
const ti = z.createContext(void 0);
function Fn(e) {
    const t = z.useContext(ti);
    return ze({
        select: (r) => {
            const o = r.matches.find((i) =>
                e.from ? e.from === i.routeId : i.id === t
            );
            if (
                (_e(
                    !((e.shouldThrow ?? !0) && !o),
                    `Could not find ${
                        e.from
                            ? `an active match from "${e.from}"`
                            : "a nearest match!"
                    }`
                ),
                o !== void 0)
            )
                return e.select ? e.select(o) : o;
        },
    });
}
function Qh(e) {
    return Fn({
        ...e,
        select: (t) =>
            typeof e.select == "function"
                ? e.select(t.loaderDeps)
                : t.loaderDeps,
    });
}
function Kh(e) {
    return Fn({
        ...e,
        select: (t) =>
            typeof e.select == "function"
                ? e.select(t.loaderData)
                : t.loaderData,
    });
}
function Yh(e) {
    return Fn({
        ...e,
        select: (t) => (e.select ? e.select(t.params) : t.params),
    });
}
function Xh(e) {
    return Fn({
        ...e,
        select: (t) => (e.select ? e.select(t.search) : t.search),
    });
}
function Gh(e) {
    const { navigate: t } = Ut();
    return z.useCallback((n) => t({ ...n }), [t]);
}
class hd {
    constructor(t) {
        (this.init = (n) => {
            var r, o;
            this.originalIndex = n.originalIndex;
            const i = this.options,
                l = !(i != null && i.path) && !(i != null && i.id);
            (this.parentRoute =
                (o = (r = this.options) == null ? void 0 : r.getParentRoute) ==
                null
                    ? void 0
                    : o.call(r)),
                l ? (this.path = Me) : _e(this.parentRoute);
            let s = l ? Me : i.path;
            s && s !== "/" && (s = Es(s));
            const u = (i == null ? void 0 : i.id) || s;
            let a = l
                ? Me
                : It([
                      this.parentRoute.id === Me ? "" : this.parentRoute.id,
                      u,
                  ]);
            s === Me && (s = "/"), a !== Me && (a = It(["/", a]));
            const h = a === Me ? "/" : It([this.parentRoute.fullPath, s]);
            (this.path = s), (this.id = a), (this.fullPath = h), (this.to = h);
        }),
            (this.updateLoader = (n) => (Object.assign(this.options, n), this)),
            (this.update = (n) => (Object.assign(this.options, n), this)),
            (this.lazy = (n) => ((this.lazyFn = n), this)),
            (this.useMatch = (n) => Fn({ ...n, from: this.id })),
            (this.useRouteContext = (n) =>
                Fn({
                    ...n,
                    from: this.id,
                    select: (r) =>
                        n != null && n.select ? n.select(r.context) : r.context,
                })),
            (this.useSearch = (n) => Xh({ ...n, from: this.id })),
            (this.useParams = (n) => Yh({ ...n, from: this.id })),
            (this.useLoaderDeps = (n) => Qh({ ...n, from: this.id })),
            (this.useLoaderData = (n) => Kh({ ...n, from: this.id })),
            (this.useNavigate = () => Gh({ from: this.id })),
            (this.options = t || {}),
            (this.isRoot = !(t != null && t.getParentRoute)),
            _e(!(t != null && t.id && t != null && t.path)),
            (this.$$typeof = Symbol.for("react.memo"));
    }
    addChildren(t) {
        return (this.children = Array.isArray(t) ? t : Object.values(t)), this;
    }
}
function Cs(e) {
    return new hd(e);
}
class Zh extends hd {
    constructor(t) {
        super(t);
    }
    addChildren(t) {
        return super.addChildren(t);
    }
}
function Jh(e) {
    return new Zh(e);
}
const qh = "Error preloading route! ☝️";
function bh(e, t) {
    const n = Ut(),
        [r, o] = z.useState(!1),
        i = Nh(t),
        {
            activeProps: l = () => ({ className: "active" }),
            inactiveProps: s = () => ({}),
            activeOptions: u,
            hash: a,
            search: h,
            params: m,
            to: f,
            state: v,
            mask: y,
            preload: g,
            preloadDelay: x,
            replace: d,
            startTransition: c,
            resetScroll: p,
            viewTransition: S,
            children: C,
            target: P,
            disabled: _,
            style: E,
            className: I,
            onClick: T,
            onFocus: U,
            onMouseEnter: A,
            onMouseLeave: j,
            onTouchStart: Y,
            ignoreBlocker: le,
            ...we
        } = e,
        ke = z.useMemo(() => {
            try {
                return new URL(`${f}`), "external";
            } catch {}
            return "internal";
        }, [f]),
        w = z.useMemo(() => n.buildLocation(e), [n, e]),
        R = z.useMemo(
            () => g ?? n.options.defaultPreload,
            [n.options.defaultPreload, g]
        ),
        N = x ?? n.options.defaultPreloadDelay ?? 0,
        O = ze({
            select: (q) => {
                const ce = Oo(q.location.pathname, n.basepath).split("/"),
                    ri = Oo(w.pathname, n.basepath)
                        .split("/")
                        .every((_d, Ed) => _d === ce[Ed]),
                    Sd =
                        u != null && u.exact
                            ? zh(q.location.pathname, w.pathname, n.basepath)
                            : ri,
                    wd =
                        u != null && u.includeHash
                            ? q.location.hash === w.hash
                            : !0,
                    kd =
                        (u == null ? void 0 : u.includeSearch) ?? !0
                            ? Cn(
                                  q.location.search,
                                  w.search,
                                  !(u != null && u.exact)
                              )
                            : !0;
                return Sd && wd && kd;
            },
        }),
        D = z.useCallback(() => {
            n.preloadRoute(e).catch((q) => {
                console.warn(q), console.warn(qh);
            });
        }, [e, n]),
        V = z.useCallback(
            (q) => {
                q != null && q.isIntersecting && D();
            },
            [D]
        );
    if (
        (Mh(
            i,
            V,
            { rootMargin: "100px" },
            { disabled: !!_ || R !== "viewport" }
        ),
        ke === "external")
    )
        return {
            ...we,
            ref: i,
            type: ke,
            href: f,
            ...(C && { children: C }),
            ...(P && { target: P }),
            ...(_ && { disabled: _ }),
            ...(E && { style: E }),
            ...(I && { className: I }),
            ...(T && { onClick: T }),
            ...(U && { onFocus: U }),
            ...(A && { onMouseEnter: A }),
            ...(j && { onMouseLeave: j }),
            ...(Y && { onTouchStart: Y }),
        };
    const ee = (q) => {
            if (
                !_ &&
                !em(q) &&
                !q.defaultPrevented &&
                (!P || P === "_self") &&
                q.button === 0
            ) {
                q.preventDefault(),
                    rd.flushSync(() => {
                        o(!0);
                    });
                const ce = n.subscribe("onResolved", () => {
                    ce(), o(!1);
                });
                n.commitLocation({
                    ...w,
                    replace: d,
                    resetScroll: p,
                    startTransition: c,
                    viewTransition: S,
                    ignoreBlocker: le,
                });
            }
        },
        st = (q) => {
            _ || (R && D());
        },
        je = st,
        He = (q) => {
            if (_) return;
            const ce = q.target || {};
            if (R) {
                if (ce.preloadTimeout) return;
                ce.preloadTimeout = setTimeout(() => {
                    (ce.preloadTimeout = null), D();
                }, N);
            }
        },
        Je = (q) => {
            if (_) return;
            const ce = q.target || {};
            ce.preloadTimeout &&
                (clearTimeout(ce.preloadTimeout), (ce.preloadTimeout = null));
        },
        me = (q) => (ce) => {
            var ni;
            (ni = ce.persist) == null || ni.call(ce),
                q.filter(Boolean).forEach((ri) => {
                    ce.defaultPrevented || ri(ce);
                });
        },
        qe = O ? gn(l, {}) ?? {} : {},
        Un = O ? {} : gn(s, {}),
        be = [I, qe.className, Un.className].filter(Boolean).join(" "),
        nn = { ...E, ...qe.style, ...Un.style };
    return {
        ...qe,
        ...Un,
        ...we,
        href: _
            ? void 0
            : w.maskedLocation
            ? n.history.createHref(w.maskedLocation.href)
            : n.history.createHref(w.href),
        ref: i,
        onClick: me([T, ee]),
        onFocus: me([U, st]),
        onMouseEnter: me([A, He]),
        onMouseLeave: me([j, Je]),
        onTouchStart: me([Y, je]),
        disabled: !!_,
        target: P,
        ...(Object.keys(nn).length && { style: nn }),
        ...(be && { className: be }),
        ...(_ && { role: "link", "aria-disabled": !0 }),
        ...(O && { "data-status": "active", "aria-current": "page" }),
        ...(r && { "data-transitioning": "transitioning" }),
    };
}
const Oi = z.forwardRef((e, t) => {
    const { _asChild: n, ...r } = e,
        { type: o, ref: i, ...l } = bh(r, t),
        s =
            typeof r.children == "function"
                ? r.children({ isActive: l["data-status"] === "active" })
                : r.children;
    return (
        typeof n > "u" && delete l.disabled,
        z.createElement(n || "a", { ...l, ref: i }, s)
    );
});
function em(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function tm() {
    const e = Ut(),
        t = z.useRef({ router: e, mounted: !1 }),
        n = ze({
            select: (a) =>
                ur(a, [
                    "isLoading",
                    "location",
                    "resolvedLocation",
                    "isTransitioning",
                ]),
        }),
        [r, o] = z.useTransition(),
        i = ze({
            select: (a) => a.matches.some((h) => h.status === "pending"),
        }),
        l = Au(n.isLoading),
        s = n.isLoading || r || i,
        u = Au(s);
    return (
        e.isServer || (e.startReactTransition = o),
        z.useEffect(() => {
            const a = e.history.subscribe(e.load),
                h = e.buildLocation({
                    to: e.latestLocation.pathname,
                    search: !0,
                    params: !0,
                    hash: !0,
                    state: !0,
                });
            return (
                Kt(e.latestLocation.href) !== Kt(h.href) &&
                    e.commitLocation({ ...h, replace: !0 }),
                () => {
                    a();
                }
            );
        }, [e, e.history]),
        zi(() => {
            var a;
            if (
                (typeof window < "u" &&
                    (a = window.__TSR__) != null &&
                    a.dehydrated) ||
                (t.current.router === e && t.current.mounted)
            )
                return;
            (t.current = { router: e, mounted: !0 }),
                (async () => {
                    try {
                        await e.load();
                    } catch (m) {
                        console.error(m);
                    }
                })();
        }, [e]),
        zi(() => {
            if (l && !n.isLoading) {
                const a = e.state.location,
                    h = e.state.resolvedLocation,
                    m = h.href !== a.href;
                e.emit({
                    type: "onLoad",
                    fromLocation: h,
                    toLocation: a,
                    pathChanged: m,
                });
            }
        }, [l, e, n.isLoading]),
        zi(() => {
            if (u && !s) {
                const a = e.state.location,
                    h = e.state.resolvedLocation,
                    m = h.href !== a.href;
                if (
                    (e.emit({
                        type: "onResolved",
                        fromLocation: h,
                        toLocation: a,
                        pathChanged: m,
                    }),
                    e.__store.setState((f) => ({
                        ...f,
                        status: "idle",
                        resolvedLocation: f.location,
                    })),
                    typeof document < "u" &&
                        document.querySelector &&
                        e.state.location.hash !== "")
                ) {
                    const f = document.getElementById(e.state.location.hash);
                    f && f.scrollIntoView();
                }
            }
        }, [s, u, e]),
        null
    );
}
function Fi(e) {
    return M.jsx(M.Fragment, { children: e.children });
}
function md(e, t, n) {
    return t.options.notFoundComponent
        ? M.jsx(t.options.notFoundComponent, { data: n })
        : e.options.defaultNotFoundComponent
        ? M.jsx(e.options.defaultNotFoundComponent, { data: n })
        : M.jsx(Dh, {});
}
const vd = z.memo(function ({ matchId: t }) {
        var n, r;
        const o = Ut(),
            i = ze({
                select: (x) => {
                    var d;
                    return (d = x.matches.find((c) => c.id === t)) == null
                        ? void 0
                        : d.routeId;
                },
            });
        _e(i);
        const l = o.routesById[i],
            s = l.options.pendingComponent ?? o.options.defaultPendingComponent,
            u = s ? M.jsx(s, {}) : null,
            a = l.options.errorComponent ?? o.options.defaultErrorComponent,
            h = l.options.onCatch ?? o.options.defaultOnCatch,
            m = l.isRoot
                ? l.options.notFoundComponent ??
                  ((n = o.options.notFoundRoute) == null
                      ? void 0
                      : n.options.component)
                : l.options.notFoundComponent,
            f =
                (!l.isRoot || l.options.wrapInSuspense) &&
                (l.options.wrapInSuspense ??
                    s ??
                    ((r = l.options.errorComponent) == null
                        ? void 0
                        : r.preload))
                    ? z.Suspense
                    : Fi,
            v = a ? xs : Fi,
            y = m ? jh : Fi,
            g = ze({ select: (x) => x.loadedAt });
        return M.jsx(ti.Provider, {
            value: t,
            children: M.jsx(f, {
                fallback: u,
                children: M.jsx(v, {
                    getResetKey: () => g,
                    errorComponent: a || ei,
                    onCatch: (x, d) => {
                        if (rt(x)) throw x;
                        h == null || h(x, d);
                    },
                    children: M.jsx(y, {
                        fallback: (x) => {
                            if (
                                !m ||
                                (x.routeId && x.routeId !== i) ||
                                (!x.routeId && !l.isRoot)
                            )
                                throw x;
                            return z.createElement(m, x);
                        },
                        children: M.jsx(nm, { matchId: t }),
                    }),
                }),
            }),
        });
    }),
    nm = z.memo(function ({ matchId: t }) {
        var n, r, o;
        const i = Ut(),
            {
                match: l,
                matchIndex: s,
                routeId: u,
            } = ze({
                select: (f) => {
                    const v = f.matches.findIndex((x) => x.id === t),
                        y = f.matches[v];
                    return {
                        routeId: y.routeId,
                        matchIndex: v,
                        match: ur(y, ["id", "status", "error", "loadPromise"]),
                    };
                },
            }),
            a = i.routesById[u],
            h = z.useMemo(() => {
                const f = a.options.component ?? i.options.defaultComponent;
                return f ? M.jsx(f, {}, u) : M.jsx(yd, {});
            }, [u, a.options.component, i.options.defaultComponent]),
            m =
                (a.options.errorComponent ?? i.options.defaultErrorComponent) ||
                ei;
        if (l.status === "notFound") {
            let f;
            return (
                Hu(l.error)
                    ? (f = (
                          ((n = i.options.errorSerializer) == null
                              ? void 0
                              : n.deserialize) ?? Wu
                      )(l.error.data))
                    : (f = l.error),
                _e(rt(f)),
                md(i, a, f)
            );
        }
        if (l.status === "redirected") throw (_e(Vt(l.error)), l.loadPromise);
        if (l.status === "error") {
            if (i.isServer)
                return M.jsx(m, {
                    error: l.error,
                    info: { componentStack: "" },
                });
            throw Hu(l.error)
                ? (
                      ((r = i.options.errorSerializer) == null
                          ? void 0
                          : r.deserialize) ?? Wu
                  )(l.error.data)
                : l.error;
        }
        if (l.status === "pending") {
            const f = a.options.pendingMinMs ?? i.options.defaultPendingMinMs;
            if (
                f &&
                !((o = i.getMatch(l.id)) != null && o.minPendingPromise) &&
                !i.isServer
            ) {
                const v = on();
                Promise.resolve().then(() => {
                    i.updateMatch(l.id, (y) => ({
                        ...y,
                        minPendingPromise: v,
                    }));
                }),
                    setTimeout(() => {
                        v.resolve(),
                            i.updateMatch(l.id, (y) => ({
                                ...y,
                                minPendingPromise: void 0,
                            }));
                    }, f);
            }
            throw l.loadPromise;
        }
        return M.jsxs(M.Fragment, {
            children: [
                h,
                i.AfterEachMatch
                    ? M.jsx(i.AfterEachMatch, { match: l, matchIndex: s })
                    : null,
            ],
        });
    }),
    yd = z.memo(function () {
        const t = Ut(),
            n = z.useContext(ti),
            r = ze({
                select: (a) => {
                    var h;
                    return (h = a.matches.find((m) => m.id === n)) == null
                        ? void 0
                        : h.routeId;
                },
            }),
            o = t.routesById[r],
            { parentGlobalNotFound: i } = ze({
                select: (a) => {
                    const m = a.matches.find((f) => f.id === n);
                    return _e(m), { parentGlobalNotFound: m.globalNotFound };
                },
            }),
            l = ze({
                select: (a) => {
                    var h;
                    const m = a.matches,
                        f = m.findIndex((v) => v.id === n);
                    return (h = m[f + 1]) == null ? void 0 : h.id;
                },
            });
        if (i) return md(t, o, void 0);
        if (!l) return null;
        const s = M.jsx(vd, { matchId: l }),
            u = t.options.defaultPendingComponent
                ? M.jsx(t.options.defaultPendingComponent, {})
                : null;
        return n === Me ? M.jsx(z.Suspense, { fallback: u, children: s }) : s;
    });
function rm() {
    const e = Ut(),
        t = e.options.defaultPendingComponent
            ? M.jsx(e.options.defaultPendingComponent, {})
            : null,
        n = M.jsxs(z.Suspense, {
            fallback: t,
            children: [M.jsx(tm, {}), M.jsx(om, {})],
        });
    return e.options.InnerWrap
        ? M.jsx(e.options.InnerWrap, { children: n })
        : n;
}
function om() {
    const e = ze({
            select: (n) => {
                var r;
                return (r = n.matches[0]) == null ? void 0 : r.id;
            },
        }),
        t = ze({ select: (n) => n.loadedAt });
    return M.jsx(ti.Provider, {
        value: e,
        children: M.jsx(xs, {
            getResetKey: () => t,
            errorComponent: ei,
            onCatch: (n) => {
                n.message || n.toString();
            },
            children: e ? M.jsx(vd, { matchId: e }) : null,
        }),
    });
}
function im({ router: e, children: t, ...n }) {
    e.update({
        ...e.options,
        ...n,
        context: { ...e.options.context, ...n.context },
    });
    const r = ad(),
        o = M.jsx(r.Provider, { value: e, children: t });
    return e.options.Wrap ? M.jsx(e.options.Wrap, { children: o }) : o;
}
function lm({ router: e, ...t }) {
    return M.jsx(im, { router: e, ...t, children: M.jsx(rm, {}) });
}
const gd = Jh({ notFoundComponent: () => null }),
    Ps = Cs({
        getParentRoute: () => gd,
        path: "/online-shop",
        component: () =>
            M.jsxs("div", {
                children: [
                    M.jsx("div", {
                        children: M.jsx(Oi, {
                            to: "/online-shop/products",
                            children: "Products",
                        }),
                    }),
                    M.jsx("div", {
                        children: M.jsx(Oi, {
                            to: "/online-shop/cart",
                            children: "Cart",
                        }),
                    }),
                    M.jsx("div", {
                        children: M.jsx(Oi, { to: "/", children: "Home" }),
                    }),
                    M.jsx("p", { children: "Online Shop: /online-shop" }),
                    M.jsx(yd, {}),
                ],
            }),
    }),
    sm = Cs({
        getParentRoute: () => Ps,
        path: "products",
        component: () =>
            M.jsx("div", { children: "Online Shop: /online-shop/products" }),
    }),
    um = Cs({
        getParentRoute: () => Ps,
        path: "cart",
        component: () =>
            M.jsx("div", { children: "Online Shop: /online-shop/cart" }),
    }),
    am = gd.addChildren([Ps.addChildren([sm, um])]),
    cm = Uh({ routeTree: am });
function dm() {
    return M.jsx(lm, { router: cm });
}
console.log("it ran");
od(document.getElementById("onlineShopRoot")).render(M.jsx(dm, {}));
