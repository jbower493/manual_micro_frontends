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
var Yu = { exports: {} },
    $o = {},
    Xu = { exports: {} },
    j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lr = Symbol.for("react.element"),
    Ld = Symbol.for("react.portal"),
    Rd = Symbol.for("react.fragment"),
    Md = Symbol.for("react.strict_mode"),
    Td = Symbol.for("react.profiler"),
    Nd = Symbol.for("react.provider"),
    zd = Symbol.for("react.context"),
    Id = Symbol.for("react.forward_ref"),
    Od = Symbol.for("react.suspense"),
    Fd = Symbol.for("react.memo"),
    jd = Symbol.for("react.lazy"),
    Rs = Symbol.iterator;
function Dd(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Rs && e[Rs]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Gu = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Zu = Object.assign,
    Ju = {};
function Dn(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Ju),
        (this.updater = n || Gu);
}
Dn.prototype.isReactComponent = {};
Dn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
Dn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qu() {}
qu.prototype = Dn.prototype;
function Ml(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Ju),
        (this.updater = n || Gu);
}
var Tl = (Ml.prototype = new qu());
Tl.constructor = Ml;
Zu(Tl, Dn.prototype);
Tl.isPureReactComponent = !0;
var Ms = Array.isArray,
    bu = Object.prototype.hasOwnProperty,
    Nl = { current: null },
    ea = { key: !0, ref: !0, __self: !0, __source: !0 };
function ta(e, t, n) {
    var r,
        o = {},
        i = null,
        l = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t))
            bu.call(t, r) && !ea.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
        for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
        o.children = u;
    }
    if (e && e.defaultProps)
        for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
    return {
        $$typeof: Lr,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: Nl.current,
    };
}
function $d(e, t) {
    return {
        $$typeof: Lr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function zl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Lr;
}
function Ud(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Ts = /\/+/g;
function li(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? Ud("" + e.key)
        : t.toString(36);
}
function Zr(e, t, n, r, o) {
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
                    case Lr:
                    case Ld:
                        l = !0;
                }
        }
    if (l)
        return (
            (l = e),
            (o = o(l)),
            (e = r === "" ? "." + li(l, 0) : r),
            Ms(o)
                ? ((n = ""),
                  e != null && (n = e.replace(Ts, "$&/") + "/"),
                  Zr(o, t, n, "", function (a) {
                      return a;
                  }))
                : o != null &&
                  (zl(o) &&
                      (o = $d(
                          o,
                          n +
                              (!o.key || (l && l.key === o.key)
                                  ? ""
                                  : ("" + o.key).replace(Ts, "$&/") + "/") +
                              e
                      )),
                  t.push(o)),
            1
        );
    if (((l = 0), (r = r === "" ? "." : r + ":"), Ms(e)))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var u = r + li(i, s);
            l += Zr(i, t, n, u, o);
        }
    else if (((u = Dd(e)), typeof u == "function"))
        for (e = u.call(e), s = 0; !(i = e.next()).done; )
            (i = i.value), (u = r + li(i, s++)), (l += Zr(i, t, n, u, o));
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
function zr(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        Zr(e, r, "", "", function (i) {
            return t.call(n, i, o++);
        }),
        r
    );
}
function Bd(e) {
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
    Jr = { transition: null },
    Ad = {
        ReactCurrentDispatcher: ge,
        ReactCurrentBatchConfig: Jr,
        ReactCurrentOwner: Nl,
    };
function na() {
    throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
    map: zr,
    forEach: function (e, t, n) {
        zr(
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
            zr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            zr(e, function (t) {
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
j.Component = Dn;
j.Fragment = Rd;
j.Profiler = Td;
j.PureComponent = Ml;
j.StrictMode = Md;
j.Suspense = Od;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
j.act = na;
j.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Zu({}, e.props),
        o = e.key,
        i = e.ref,
        l = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (l = Nl.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var s = e.type.defaultProps;
        for (u in t)
            bu.call(t, u) &&
                !ea.hasOwnProperty(u) &&
                (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
        r.children = s;
    }
    return { $$typeof: Lr, type: e.type, key: o, ref: i, props: r, _owner: l };
};
j.createContext = function (e) {
    return (
        (e = {
            $$typeof: zd,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Nd, _context: e }),
        (e.Consumer = e)
    );
};
j.createElement = ta;
j.createFactory = function (e) {
    var t = ta.bind(null, e);
    return (t.type = e), t;
};
j.createRef = function () {
    return { current: null };
};
j.forwardRef = function (e) {
    return { $$typeof: Id, render: e };
};
j.isValidElement = zl;
j.lazy = function (e) {
    return { $$typeof: jd, _payload: { _status: -1, _result: e }, _init: Bd };
};
j.memo = function (e, t) {
    return { $$typeof: Fd, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
    var t = Jr.transition;
    Jr.transition = {};
    try {
        e();
    } finally {
        Jr.transition = t;
    }
};
j.unstable_act = na;
j.useCallback = function (e, t) {
    return ge.current.useCallback(e, t);
};
j.useContext = function (e) {
    return ge.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
    return ge.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
    return ge.current.useEffect(e, t);
};
j.useId = function () {
    return ge.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
    return ge.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
    return ge.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
    return ge.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
    return ge.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
    return ge.current.useReducer(e, t, n);
};
j.useRef = function (e) {
    return ge.current.useRef(e);
};
j.useState = function (e) {
    return ge.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
    return ge.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
    return ge.current.useTransition();
};
j.version = "18.3.1";
Xu.exports = j;
var O = Xu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd = O,
    Hd = Symbol.for("react.element"),
    Wd = Symbol.for("react.fragment"),
    Qd = Object.prototype.hasOwnProperty,
    Kd =
        Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Yd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ra(e, t, n) {
    var r,
        o = {},
        i = null,
        l = null;
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (l = t.ref);
    for (r in t) Qd.call(t, r) && !Yd.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Hd,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: Kd.current,
    };
}
$o.Fragment = Wd;
$o.jsx = ra;
$o.jsxs = ra;
Yu.exports = $o;
var R = Yu.exports,
    oa = { exports: {} },
    Oe = {},
    ia = { exports: {} },
    la = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(w, M) {
        var N = w.length;
        w.push(M);
        e: for (; 0 < N; ) {
            var F = (N - 1) >>> 1,
                z = w[F];
            if (0 < o(z, M)) (w[F] = M), (w[N] = z), (N = F);
            else break e;
        }
    }
    function n(w) {
        return w.length === 0 ? null : w[0];
    }
    function r(w) {
        if (w.length === 0) return null;
        var M = w[0],
            N = w.pop();
        if (N !== M) {
            w[0] = N;
            e: for (var F = 0, z = w.length, b = z >>> 1; F < b; ) {
                var te = 2 * (F + 1) - 1,
                    lt = w[te],
                    je = te + 1,
                    He = w[je];
                if (0 > o(lt, N))
                    je < z && 0 > o(He, lt)
                        ? ((w[F] = He), (w[je] = N), (F = je))
                        : ((w[F] = lt), (w[te] = N), (F = te));
                else if (je < z && 0 > o(He, N))
                    (w[F] = He), (w[je] = N), (F = je);
                else break e;
            }
        }
        return M;
    }
    function o(w, M) {
        var N = w.sortIndex - M.sortIndex;
        return N !== 0 ? N : w.id - M.id;
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
        p = 1,
        d = null,
        f = 3,
        v = !1,
        y = !1,
        g = !1,
        C = typeof setTimeout == "function" ? setTimeout : null,
        h = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(w) {
        for (var M = n(a); M !== null; ) {
            if (M.callback === null) r(a);
            else if (M.startTime <= w)
                r(a), (M.sortIndex = M.expirationTime), t(u, M);
            else break;
            M = n(a);
        }
    }
    function S(w) {
        if (((g = !1), m(w), !y))
            if (n(u) !== null) (y = !0), Re(x);
            else {
                var M = n(a);
                M !== null && we(S, M.startTime - w);
            }
    }
    function x(w, M) {
        (y = !1), g && ((g = !1), h(_), (_ = -1)), (v = !0);
        var N = f;
        try {
            for (
                m(M), d = n(u);
                d !== null && (!(d.expirationTime > M) || (w && !B()));

            ) {
                var F = d.callback;
                if (typeof F == "function") {
                    (d.callback = null), (f = d.priorityLevel);
                    var z = F(d.expirationTime <= M);
                    (M = e.unstable_now()),
                        typeof z == "function"
                            ? (d.callback = z)
                            : d === n(u) && r(u),
                        m(M);
                } else r(u);
                d = n(u);
            }
            if (d !== null) var b = !0;
            else {
                var te = n(a);
                te !== null && we(S, te.startTime - M), (b = !1);
            }
            return b;
        } finally {
            (d = null), (f = N), (v = !1);
        }
    }
    var P = !1,
        E = null,
        _ = -1,
        I = 5,
        T = -1;
    function B() {
        return !(e.unstable_now() - T < I);
    }
    function A() {
        if (E !== null) {
            var w = e.unstable_now();
            T = w;
            var M = !0;
            try {
                M = E(!0, w);
            } finally {
                M ? D() : ((P = !1), (E = null));
            }
        } else P = !1;
    }
    var D;
    if (typeof c == "function")
        D = function () {
            c(A);
        };
    else if (typeof MessageChannel < "u") {
        var K = new MessageChannel(),
            le = K.port2;
        (K.port1.onmessage = A),
            (D = function () {
                le.postMessage(null);
            });
    } else
        D = function () {
            C(A, 0);
        };
    function Re(w) {
        (E = w), P || ((P = !0), D());
    }
    function we(w, M) {
        _ = C(function () {
            w(e.unstable_now());
        }, M);
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
            y || v || ((y = !0), Re(x));
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
                    var M = 3;
                    break;
                default:
                    M = f;
            }
            var N = f;
            f = M;
            try {
                return w();
            } finally {
                f = N;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (w, M) {
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
                return M();
            } finally {
                f = N;
            }
        }),
        (e.unstable_scheduleCallback = function (w, M, N) {
            var F = e.unstable_now();
            switch (
                (typeof N == "object" && N !== null
                    ? ((N = N.delay),
                      (N = typeof N == "number" && 0 < N ? F + N : F))
                    : (N = F),
                w)
            ) {
                case 1:
                    var z = -1;
                    break;
                case 2:
                    z = 250;
                    break;
                case 5:
                    z = 1073741823;
                    break;
                case 4:
                    z = 1e4;
                    break;
                default:
                    z = 5e3;
            }
            return (
                (z = N + z),
                (w = {
                    id: p++,
                    callback: M,
                    priorityLevel: w,
                    startTime: N,
                    expirationTime: z,
                    sortIndex: -1,
                }),
                N > F
                    ? ((w.sortIndex = N),
                      t(a, w),
                      n(u) === null &&
                          w === n(a) &&
                          (g ? (h(_), (_ = -1)) : (g = !0), we(S, N - F)))
                    : ((w.sortIndex = z), t(u, w), y || v || ((y = !0), Re(x))),
                w
            );
        }),
        (e.unstable_shouldYield = B),
        (e.unstable_wrapCallback = function (w) {
            var M = f;
            return function () {
                var N = f;
                f = M;
                try {
                    return w.apply(this, arguments);
                } finally {
                    f = N;
                }
            };
        });
})(la);
ia.exports = la;
var Xd = ia.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gd = O,
    Ie = Xd;
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
var sa = new Set(),
    cr = {};
function bt(e, t) {
    Pn(e, t), Pn(e + "Capture", t);
}
function Pn(e, t) {
    for (cr[e] = t, e = 0; e < t.length; e++) sa.add(t[e]);
}
var ft = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    Di = Object.prototype.hasOwnProperty,
    Zd =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ns = {},
    zs = {};
function Jd(e) {
    return Di.call(zs, e)
        ? !0
        : Di.call(Ns, e)
        ? !1
        : Zd.test(e)
        ? (zs[e] = !0)
        : ((Ns[e] = !0), !1);
}
function qd(e, t, n, r) {
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
function bd(e, t, n, r) {
    if (t === null || typeof t > "u" || qd(e, t, n, r)) return !0;
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
        (bd(t, n, o, r) && (n = null),
        r || o === null
            ? Jd(t) &&
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
var vt = Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ir = Symbol.for("react.element"),
    ln = Symbol.for("react.portal"),
    sn = Symbol.for("react.fragment"),
    jl = Symbol.for("react.strict_mode"),
    $i = Symbol.for("react.profiler"),
    ua = Symbol.for("react.provider"),
    aa = Symbol.for("react.context"),
    Dl = Symbol.for("react.forward_ref"),
    Ui = Symbol.for("react.suspense"),
    Bi = Symbol.for("react.suspense_list"),
    $l = Symbol.for("react.memo"),
    gt = Symbol.for("react.lazy"),
    ca = Symbol.for("react.offscreen"),
    Is = Symbol.iterator;
function An(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Is && e[Is]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var G = Object.assign,
    si;
function Gn(e) {
    if (si === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            si = (t && t[1]) || "";
        }
    return (
        `
` +
        si +
        e
    );
}
var ui = !1;
function ai(e, t) {
    if (!e || ui) return "";
    ui = !0;
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
        (ui = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Gn(e) : "";
}
function ef(e) {
    switch (e.tag) {
        case 5:
            return Gn(e.type);
        case 16:
            return Gn("Lazy");
        case 13:
            return Gn("Suspense");
        case 19:
            return Gn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = ai(e.type, !1)), e;
        case 11:
            return (e = ai(e.type.render, !1)), e;
        case 1:
            return (e = ai(e.type, !0)), e;
        default:
            return "";
    }
}
function Ai(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case sn:
            return "Fragment";
        case ln:
            return "Portal";
        case $i:
            return "Profiler";
        case jl:
            return "StrictMode";
        case Ui:
            return "Suspense";
        case Bi:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case aa:
                return (e.displayName || "Context") + ".Consumer";
            case ua:
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
                    t !== null ? t : Ai(e.type) || "Memo"
                );
            case gt:
                (t = e._payload), (e = e._init);
                try {
                    return Ai(e(t));
                } catch {}
        }
    return null;
}
function tf(e) {
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
            return Ai(t);
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
function It(e) {
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
function da(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function nf(e) {
    var t = da(e) ? "checked" : "value",
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
function Or(e) {
    e._valueTracker || (e._valueTracker = nf(e));
}
function fa(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = da(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function ao(e) {
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
function Vi(e, t) {
    var n = t.checked;
    return G({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Os(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = It(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function pa(e, t) {
    (t = t.checked), t != null && Fl(e, "checked", t, !1);
}
function Hi(e, t) {
    pa(e, t);
    var n = It(t.value),
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
        ? Wi(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Wi(e, t.type, It(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Fs(e, t, n) {
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
function Wi(e, t, n) {
    (t !== "number" || ao(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zn = Array.isArray;
function Sn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + It(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function Qi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return G({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function js(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(k(92));
            if (Zn(n)) {
                if (1 < n.length) throw Error(k(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: It(n) };
}
function ha(e, t) {
    var n = It(t.value),
        r = It(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function Ds(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function ma(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Ki(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? ma(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var Fr,
    va = (function (e) {
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
                Fr = Fr || document.createElement("div"),
                    Fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = Fr.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function dr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var bn = {
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
    rf = ["Webkit", "ms", "Moz", "O"];
Object.keys(bn).forEach(function (e) {
    rf.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (bn[t] = bn[e]);
    });
});
function ya(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (bn.hasOwnProperty(e) && bn[e])
        ? ("" + t).trim()
        : t + "px";
}
function ga(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = ya(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var of = G(
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
function Yi(e, t) {
    if (t) {
        if (of[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Xi(e, t) {
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
var Gi = null;
function Ul(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Zi = null,
    wn = null,
    _n = null;
function $s(e) {
    if ((e = Tr(e))) {
        if (typeof Zi != "function") throw Error(k(280));
        var t = e.stateNode;
        t && ((t = Ho(t)), Zi(e.stateNode, e.type, t));
    }
}
function Sa(e) {
    wn ? (_n ? _n.push(e) : (_n = [e])) : (wn = e);
}
function wa() {
    if (wn) {
        var e = wn,
            t = _n;
        if (((_n = wn = null), $s(e), t))
            for (e = 0; e < t.length; e++) $s(t[e]);
    }
}
function _a(e, t) {
    return e(t);
}
function ka() {}
var ci = !1;
function Ea(e, t, n) {
    if (ci) return e(t, n);
    ci = !0;
    try {
        return _a(e, t, n);
    } finally {
        (ci = !1), (wn !== null || _n !== null) && (ka(), wa());
    }
}
function fr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ho(n);
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
var Ji = !1;
if (ft)
    try {
        var Vn = {};
        Object.defineProperty(Vn, "passive", {
            get: function () {
                Ji = !0;
            },
        }),
            window.addEventListener("test", Vn, Vn),
            window.removeEventListener("test", Vn, Vn);
    } catch {
        Ji = !1;
    }
function lf(e, t, n, r, o, i, l, s, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a);
    } catch (p) {
        this.onError(p);
    }
}
var er = !1,
    co = null,
    fo = !1,
    qi = null,
    sf = {
        onError: function (e) {
            (er = !0), (co = e);
        },
    };
function uf(e, t, n, r, o, i, l, s, u) {
    (er = !1), (co = null), lf.apply(sf, arguments);
}
function af(e, t, n, r, o, i, l, s, u) {
    if ((uf.apply(this, arguments), er)) {
        if (er) {
            var a = co;
            (er = !1), (co = null);
        } else throw Error(k(198));
        fo || ((fo = !0), (qi = a));
    }
}
function en(e) {
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
function Ca(e) {
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
function Us(e) {
    if (en(e) !== e) throw Error(k(188));
}
function cf(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = en(e)), t === null)) throw Error(k(188));
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
                if (i === n) return Us(o), e;
                if (i === r) return Us(o), t;
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
function xa(e) {
    return (e = cf(e)), e !== null ? Pa(e) : null;
}
function Pa(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Pa(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var La = Ie.unstable_scheduleCallback,
    Bs = Ie.unstable_cancelCallback,
    df = Ie.unstable_shouldYield,
    ff = Ie.unstable_requestPaint,
    q = Ie.unstable_now,
    pf = Ie.unstable_getCurrentPriorityLevel,
    Bl = Ie.unstable_ImmediatePriority,
    Ra = Ie.unstable_UserBlockingPriority,
    po = Ie.unstable_NormalPriority,
    hf = Ie.unstable_LowPriority,
    Ma = Ie.unstable_IdlePriority,
    Uo = null,
    ot = null;
function mf(e) {
    if (ot && typeof ot.onCommitFiberRoot == "function")
        try {
            ot.onCommitFiberRoot(
                Uo,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : gf,
    vf = Math.log,
    yf = Math.LN2;
function gf(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((vf(e) / yf) | 0)) | 0;
}
var jr = 64,
    Dr = 4194304;
function Jn(e) {
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
function ho(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        l = n & 268435455;
    if (l !== 0) {
        var s = l & ~o;
        s !== 0 ? (r = Jn(s)) : ((i &= l), i !== 0 && (r = Jn(i)));
    } else (l = n & ~o), l !== 0 ? (r = Jn(l)) : i !== 0 && (r = Jn(i));
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
function Sf(e, t) {
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
function wf(e, t) {
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
            ? (!(s & n) || s & r) && (o[l] = Sf(s, t))
            : u <= t && (e.expiredLanes |= s),
            (i &= ~s);
    }
}
function bi(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Ta() {
    var e = jr;
    return (jr <<= 1), !(jr & 4194240) && (jr = 64), e;
}
function di(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Rr(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Xe(t)),
        (e[t] = n);
}
function _f(e, t) {
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
var U = 0;
function Na(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var za,
    Vl,
    Ia,
    Oa,
    Fa,
    el = !1,
    $r = [],
    Ct = null,
    xt = null,
    Pt = null,
    pr = new Map(),
    hr = new Map(),
    wt = [],
    kf =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function As(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Ct = null;
            break;
        case "dragenter":
        case "dragleave":
            xt = null;
            break;
        case "mouseover":
        case "mouseout":
            Pt = null;
            break;
        case "pointerover":
        case "pointerout":
            pr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            hr.delete(t.pointerId);
    }
}
function Hn(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [o],
          }),
          t !== null && ((t = Tr(t)), t !== null && Vl(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          o !== null && t.indexOf(o) === -1 && t.push(o),
          e);
}
function Ef(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (Ct = Hn(Ct, e, t, n, r, o)), !0;
        case "dragenter":
            return (xt = Hn(xt, e, t, n, r, o)), !0;
        case "mouseover":
            return (Pt = Hn(Pt, e, t, n, r, o)), !0;
        case "pointerover":
            var i = o.pointerId;
            return pr.set(i, Hn(pr.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (
                (i = o.pointerId),
                hr.set(i, Hn(hr.get(i) || null, e, t, n, r, o)),
                !0
            );
    }
    return !1;
}
function ja(e) {
    var t = Vt(e.target);
    if (t !== null) {
        var n = en(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Ca(n)), t !== null)) {
                    (e.blockedOn = t),
                        Fa(e.priority, function () {
                            Ia(n);
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
function qr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = tl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Gi = r), n.target.dispatchEvent(r), (Gi = null);
        } else return (t = Tr(n)), t !== null && Vl(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Vs(e, t, n) {
    qr(e) && n.delete(t);
}
function Cf() {
    (el = !1),
        Ct !== null && qr(Ct) && (Ct = null),
        xt !== null && qr(xt) && (xt = null),
        Pt !== null && qr(Pt) && (Pt = null),
        pr.forEach(Vs),
        hr.forEach(Vs);
}
function Wn(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        el ||
            ((el = !0),
            Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Cf)));
}
function mr(e) {
    function t(o) {
        return Wn(o, e);
    }
    if (0 < $r.length) {
        Wn($r[0], e);
        for (var n = 1; n < $r.length; n++) {
            var r = $r[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Ct !== null && Wn(Ct, e),
            xt !== null && Wn(xt, e),
            Pt !== null && Wn(Pt, e),
            pr.forEach(t),
            hr.forEach(t),
            n = 0;
        n < wt.length;
        n++
    )
        (r = wt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < wt.length && ((n = wt[0]), n.blockedOn === null); )
        ja(n), n.blockedOn === null && wt.shift();
}
var kn = vt.ReactCurrentBatchConfig,
    mo = !0;
function xf(e, t, n, r) {
    var o = U,
        i = kn.transition;
    kn.transition = null;
    try {
        (U = 1), Hl(e, t, n, r);
    } finally {
        (U = o), (kn.transition = i);
    }
}
function Pf(e, t, n, r) {
    var o = U,
        i = kn.transition;
    kn.transition = null;
    try {
        (U = 4), Hl(e, t, n, r);
    } finally {
        (U = o), (kn.transition = i);
    }
}
function Hl(e, t, n, r) {
    if (mo) {
        var o = tl(e, t, n, r);
        if (o === null) _i(e, t, r, vo, n), As(e, r);
        else if (Ef(o, e, t, n, r)) r.stopPropagation();
        else if ((As(e, r), t & 4 && -1 < kf.indexOf(e))) {
            for (; o !== null; ) {
                var i = Tr(o);
                if (
                    (i !== null && za(i),
                    (i = tl(e, t, n, r)),
                    i === null && _i(e, t, r, vo, n),
                    i === o)
                )
                    break;
                o = i;
            }
            o !== null && r.stopPropagation();
        } else _i(e, t, r, null, n);
    }
}
var vo = null;
function tl(e, t, n, r) {
    if (((vo = null), (e = Ul(r)), (e = Vt(e)), e !== null))
        if (((t = en(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Ca(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (vo = e), null;
}
function Da(e) {
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
            switch (pf()) {
                case Bl:
                    return 1;
                case Ra:
                    return 4;
                case po:
                case hf:
                    return 16;
                case Ma:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var kt = null,
    Wl = null,
    br = null;
function $a() {
    if (br) return br;
    var e,
        t = Wl,
        n = t.length,
        r,
        o = "value" in kt ? kt.value : kt.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
    return (br = o.slice(e, 1 < r ? 1 - r : void 0));
}
function eo(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Ur() {
    return !0;
}
function Hs() {
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
                ? Ur
                : Hs),
            (this.isPropagationStopped = Hs),
            this
        );
    }
    return (
        G(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Ur));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Ur));
            },
            persist: function () {},
            isPersistent: Ur,
        }),
        t
    );
}
var $n = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Ql = Fe($n),
    Mr = G({}, $n, { view: 0, detail: 0 }),
    Lf = Fe(Mr),
    fi,
    pi,
    Qn,
    Bo = G({}, Mr, {
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
                : (e !== Qn &&
                      (Qn && e.type === "mousemove"
                          ? ((fi = e.screenX - Qn.screenX),
                            (pi = e.screenY - Qn.screenY))
                          : (pi = fi = 0),
                      (Qn = e)),
                  fi);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : pi;
        },
    }),
    Ws = Fe(Bo),
    Rf = G({}, Bo, { dataTransfer: 0 }),
    Mf = Fe(Rf),
    Tf = G({}, Mr, { relatedTarget: 0 }),
    hi = Fe(Tf),
    Nf = G({}, $n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zf = Fe(Nf),
    If = G({}, $n, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    Of = Fe(If),
    Ff = G({}, $n, { data: 0 }),
    Qs = Fe(Ff),
    jf = {
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
    Df = {
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
    $f = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Uf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = $f[e])
        ? !!t[e]
        : !1;
}
function Kl() {
    return Uf;
}
var Bf = G({}, Mr, {
        key: function (e) {
            if (e.key) {
                var t = jf[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = eo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? Df[e.keyCode] || "Unidentified"
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
            return e.type === "keypress" ? eo(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? eo(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    Af = Fe(Bf),
    Vf = G({}, Bo, {
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
    Ks = Fe(Vf),
    Hf = G({}, Mr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Kl,
    }),
    Wf = Fe(Hf),
    Qf = G({}, $n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Kf = Fe(Qf),
    Yf = G({}, Bo, {
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
    Xf = Fe(Yf),
    Gf = [9, 13, 27, 32],
    Yl = ft && "CompositionEvent" in window,
    tr = null;
ft && "documentMode" in document && (tr = document.documentMode);
var Zf = ft && "TextEvent" in window && !tr,
    Ua = ft && (!Yl || (tr && 8 < tr && 11 >= tr)),
    Ys = " ",
    Xs = !1;
function Ba(e, t) {
    switch (e) {
        case "keyup":
            return Gf.indexOf(t.keyCode) !== -1;
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
function Aa(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var un = !1;
function Jf(e, t) {
    switch (e) {
        case "compositionend":
            return Aa(t);
        case "keypress":
            return t.which !== 32 ? null : ((Xs = !0), Ys);
        case "textInput":
            return (e = t.data), e === Ys && Xs ? null : e;
        default:
            return null;
    }
}
function qf(e, t) {
    if (un)
        return e === "compositionend" || (!Yl && Ba(e, t))
            ? ((e = $a()), (br = Wl = kt = null), (un = !1), e)
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
            return Ua && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var bf = {
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
function Gs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!bf[e.type] : t === "textarea";
}
function Va(e, t, n, r) {
    Sa(r),
        (t = yo(t, "onChange")),
        0 < t.length &&
            ((n = new Ql("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var nr = null,
    vr = null;
function ep(e) {
    ba(e, 0);
}
function Ao(e) {
    var t = dn(e);
    if (fa(t)) return e;
}
function tp(e, t) {
    if (e === "change") return t;
}
var Ha = !1;
if (ft) {
    var mi;
    if (ft) {
        var vi = "oninput" in document;
        if (!vi) {
            var Zs = document.createElement("div");
            Zs.setAttribute("oninput", "return;"),
                (vi = typeof Zs.oninput == "function");
        }
        mi = vi;
    } else mi = !1;
    Ha = mi && (!document.documentMode || 9 < document.documentMode);
}
function Js() {
    nr && (nr.detachEvent("onpropertychange", Wa), (vr = nr = null));
}
function Wa(e) {
    if (e.propertyName === "value" && Ao(vr)) {
        var t = [];
        Va(t, vr, e, Ul(e)), Ea(ep, t);
    }
}
function np(e, t, n) {
    e === "focusin"
        ? (Js(), (nr = t), (vr = n), nr.attachEvent("onpropertychange", Wa))
        : e === "focusout" && Js();
}
function rp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ao(vr);
}
function op(e, t) {
    if (e === "click") return Ao(t);
}
function ip(e, t) {
    if (e === "input" || e === "change") return Ao(t);
}
function lp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : lp;
function yr(e, t) {
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
        if (!Di.call(t, o) || !Ze(e[o], t[o])) return !1;
    }
    return !0;
}
function qs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function bs(e, t) {
    var n = qs(e);
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
        n = qs(n);
    }
}
function Qa(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Qa(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function Ka() {
    for (var e = window, t = ao(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ao(e.document);
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
function sp(e) {
    var t = Ka(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Qa(n.ownerDocument.documentElement, n)
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
                    (o = bs(n, i));
                var l = bs(n, r);
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
var up = ft && "documentMode" in document && 11 >= document.documentMode,
    an = null,
    nl = null,
    rr = null,
    rl = !1;
function eu(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    rl ||
        an == null ||
        an !== ao(r) ||
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
        (rr && yr(rr, r)) ||
            ((rr = r),
            (r = yo(nl, "onSelect")),
            0 < r.length &&
                ((t = new Ql("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = an))));
}
function Br(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var cn = {
        animationend: Br("Animation", "AnimationEnd"),
        animationiteration: Br("Animation", "AnimationIteration"),
        animationstart: Br("Animation", "AnimationStart"),
        transitionend: Br("Transition", "TransitionEnd"),
    },
    yi = {},
    Ya = {};
ft &&
    ((Ya = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete cn.animationend.animation,
        delete cn.animationiteration.animation,
        delete cn.animationstart.animation),
    "TransitionEvent" in window || delete cn.transitionend.transition);
function Vo(e) {
    if (yi[e]) return yi[e];
    if (!cn[e]) return e;
    var t = cn[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ya) return (yi[e] = t[n]);
    return e;
}
var Xa = Vo("animationend"),
    Ga = Vo("animationiteration"),
    Za = Vo("animationstart"),
    Ja = Vo("transitionend"),
    qa = new Map(),
    tu =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function Ft(e, t) {
    qa.set(e, t), bt(t, [e]);
}
for (var gi = 0; gi < tu.length; gi++) {
    var Si = tu[gi],
        ap = Si.toLowerCase(),
        cp = Si[0].toUpperCase() + Si.slice(1);
    Ft(ap, "on" + cp);
}
Ft(Xa, "onAnimationEnd");
Ft(Ga, "onAnimationIteration");
Ft(Za, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(Ja, "onTransitionEnd");
Pn("onMouseEnter", ["mouseout", "mouseover"]);
Pn("onMouseLeave", ["mouseout", "mouseover"]);
Pn("onPointerEnter", ["pointerout", "pointerover"]);
Pn("onPointerLeave", ["pointerout", "pointerover"]);
bt(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
bt(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bt(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
bt(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
bt(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var qn =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    dp = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(qn)
    );
function nu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), af(r, t, void 0, e), (e.currentTarget = null);
}
function ba(e, t) {
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
                    nu(o, s, a), (i = u);
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
                    nu(o, s, a), (i = u);
                }
        }
    }
    if (fo) throw ((e = qi), (fo = !1), (qi = null), e);
}
function H(e, t) {
    var n = t[ul];
    n === void 0 && (n = t[ul] = new Set());
    var r = e + "__bubble";
    n.has(r) || (ec(t, e, 2, !1), n.add(r));
}
function wi(e, t, n) {
    var r = 0;
    t && (r |= 4), ec(n, e, r, t);
}
var Ar = "_reactListening" + Math.random().toString(36).slice(2);
function gr(e) {
    if (!e[Ar]) {
        (e[Ar] = !0),
            sa.forEach(function (n) {
                n !== "selectionchange" &&
                    (dp.has(n) || wi(n, !1, e), wi(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ar] || ((t[Ar] = !0), wi("selectionchange", !1, t));
    }
}
function ec(e, t, n, r) {
    switch (Da(t)) {
        case 1:
            var o = xf;
            break;
        case 4:
            o = Pf;
            break;
        default:
            o = Hl;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !Ji ||
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
function _i(e, t, n, r, o) {
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
                    if (((l = Vt(s)), l === null)) return;
                    if (((u = l.tag), u === 5 || u === 6)) {
                        r = i = l;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
    Ea(function () {
        var a = i,
            p = Ul(n),
            d = [];
        e: {
            var f = qa.get(e);
            if (f !== void 0) {
                var v = Ql,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (eo(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = Af;
                        break;
                    case "focusin":
                        (y = "focus"), (v = hi);
                        break;
                    case "focusout":
                        (y = "blur"), (v = hi);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = hi;
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
                        v = Ws;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = Mf;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = Wf;
                        break;
                    case Xa:
                    case Ga:
                    case Za:
                        v = zf;
                        break;
                    case Ja:
                        v = Kf;
                        break;
                    case "scroll":
                        v = Lf;
                        break;
                    case "wheel":
                        v = Xf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = Of;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = Ks;
                }
                var g = (t & 4) !== 0,
                    C = !g && e === "scroll",
                    h = g ? (f !== null ? f + "Capture" : null) : f;
                g = [];
                for (var c = a, m; c !== null; ) {
                    m = c;
                    var S = m.stateNode;
                    if (
                        (m.tag === 5 &&
                            S !== null &&
                            ((m = S),
                            h !== null &&
                                ((S = fr(c, h)),
                                S != null && g.push(Sr(c, S, m)))),
                        C)
                    )
                        break;
                    c = c.return;
                }
                0 < g.length &&
                    ((f = new v(f, y, null, n, p)),
                    d.push({ event: f, listeners: g }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((f = e === "mouseover" || e === "pointerover"),
                    (v = e === "mouseout" || e === "pointerout"),
                    f &&
                        n !== Gi &&
                        (y = n.relatedTarget || n.fromElement) &&
                        (Vt(y) || y[pt]))
                )
                    break e;
                if (
                    (v || f) &&
                    ((f =
                        p.window === p
                            ? p
                            : (f = p.ownerDocument)
                            ? f.defaultView || f.parentWindow
                            : window),
                    v
                        ? ((y = n.relatedTarget || n.toElement),
                          (v = a),
                          (y = y ? Vt(y) : null),
                          y !== null &&
                              ((C = en(y)),
                              y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                              (y = null))
                        : ((v = null), (y = a)),
                    v !== y)
                ) {
                    if (
                        ((g = Ws),
                        (S = "onMouseLeave"),
                        (h = "onMouseEnter"),
                        (c = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((g = Ks),
                            (S = "onPointerLeave"),
                            (h = "onPointerEnter"),
                            (c = "pointer")),
                        (C = v == null ? f : dn(v)),
                        (m = y == null ? f : dn(y)),
                        (f = new g(S, c + "leave", v, n, p)),
                        (f.target = C),
                        (f.relatedTarget = m),
                        (S = null),
                        Vt(p) === a &&
                            ((g = new g(h, c + "enter", y, n, p)),
                            (g.target = m),
                            (g.relatedTarget = C),
                            (S = g)),
                        (C = S),
                        v && y)
                    )
                        t: {
                            for (g = v, h = y, c = 0, m = g; m; m = nn(m)) c++;
                            for (m = 0, S = h; S; S = nn(S)) m++;
                            for (; 0 < c - m; ) (g = nn(g)), c--;
                            for (; 0 < m - c; ) (h = nn(h)), m--;
                            for (; c--; ) {
                                if (
                                    g === h ||
                                    (h !== null && g === h.alternate)
                                )
                                    break t;
                                (g = nn(g)), (h = nn(h));
                            }
                            g = null;
                        }
                    else g = null;
                    v !== null && ru(d, f, v, g, !1),
                        y !== null && C !== null && ru(d, C, y, g, !0);
                }
            }
            e: {
                if (
                    ((f = a ? dn(a) : window),
                    (v = f.nodeName && f.nodeName.toLowerCase()),
                    v === "select" || (v === "input" && f.type === "file"))
                )
                    var x = tp;
                else if (Gs(f))
                    if (Ha) x = ip;
                    else {
                        x = rp;
                        var P = np;
                    }
                else
                    (v = f.nodeName) &&
                        v.toLowerCase() === "input" &&
                        (f.type === "checkbox" || f.type === "radio") &&
                        (x = op);
                if (x && (x = x(e, a))) {
                    Va(d, x, n, p);
                    break e;
                }
                P && P(e, f, a),
                    e === "focusout" &&
                        (P = f._wrapperState) &&
                        P.controlled &&
                        f.type === "number" &&
                        Wi(f, "number", f.value);
            }
            switch (((P = a ? dn(a) : window), e)) {
                case "focusin":
                    (Gs(P) || P.contentEditable === "true") &&
                        ((an = P), (nl = a), (rr = null));
                    break;
                case "focusout":
                    rr = nl = an = null;
                    break;
                case "mousedown":
                    rl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (rl = !1), eu(d, n, p);
                    break;
                case "selectionchange":
                    if (up) break;
                case "keydown":
                case "keyup":
                    eu(d, n, p);
            }
            var E;
            if (Yl)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var _ = "onCompositionStart";
                            break e;
                        case "compositionend":
                            _ = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            _ = "onCompositionUpdate";
                            break e;
                    }
                    _ = void 0;
                }
            else
                un
                    ? Ba(e, n) && (_ = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (_ = "onCompositionStart");
            _ &&
                (Ua &&
                    n.locale !== "ko" &&
                    (un || _ !== "onCompositionStart"
                        ? _ === "onCompositionEnd" && un && (E = $a())
                        : ((kt = p),
                          (Wl = "value" in kt ? kt.value : kt.textContent),
                          (un = !0))),
                (P = yo(a, _)),
                0 < P.length &&
                    ((_ = new Qs(_, e, null, n, p)),
                    d.push({ event: _, listeners: P }),
                    E
                        ? (_.data = E)
                        : ((E = Aa(n)), E !== null && (_.data = E)))),
                (E = Zf ? Jf(e, n) : qf(e, n)) &&
                    ((a = yo(a, "onBeforeInput")),
                    0 < a.length &&
                        ((p = new Qs(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            p
                        )),
                        d.push({ event: p, listeners: a }),
                        (p.data = E)));
        }
        ba(d, t);
    });
}
function Sr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function yo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 &&
            i !== null &&
            ((o = i),
            (i = fr(e, n)),
            i != null && r.unshift(Sr(e, i, o)),
            (i = fr(e, t)),
            i != null && r.push(Sr(e, i, o))),
            (e = e.return);
    }
    return r;
}
function nn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function ru(e, t, n, r, o) {
    for (var i = t._reactName, l = []; n !== null && n !== r; ) {
        var s = n,
            u = s.alternate,
            a = s.stateNode;
        if (u !== null && u === r) break;
        s.tag === 5 &&
            a !== null &&
            ((s = a),
            o
                ? ((u = fr(n, i)), u != null && l.unshift(Sr(n, u, s)))
                : o || ((u = fr(n, i)), u != null && l.push(Sr(n, u, s)))),
            (n = n.return);
    }
    l.length !== 0 && e.push({ event: t, listeners: l });
}
var fp = /\r\n?/g,
    pp = /\u0000|\uFFFD/g;
function ou(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            fp,
            `
`
        )
        .replace(pp, "");
}
function Vr(e, t, n) {
    if (((t = ou(t)), ou(e) !== t && n)) throw Error(k(425));
}
function go() {}
var ol = null,
    il = null;
function ll(e, t) {
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
var sl = typeof setTimeout == "function" ? setTimeout : void 0,
    hp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    iu = typeof Promise == "function" ? Promise : void 0,
    mp =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof iu < "u"
            ? function (e) {
                  return iu.resolve(null).then(e).catch(vp);
              }
            : sl;
function vp(e) {
    setTimeout(function () {
        throw e;
    });
}
function ki(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), mr(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    mr(t);
}
function Lt(e) {
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
function lu(e) {
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
var Un = Math.random().toString(36).slice(2),
    rt = "__reactFiber$" + Un,
    wr = "__reactProps$" + Un,
    pt = "__reactContainer$" + Un,
    ul = "__reactEvents$" + Un,
    yp = "__reactListeners$" + Un,
    gp = "__reactHandles$" + Un;
function Vt(e) {
    var t = e[rt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[pt] || n[rt])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = lu(e); e !== null; ) {
                    if ((n = e[rt])) return n;
                    e = lu(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Tr(e) {
    return (
        (e = e[rt] || e[pt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function dn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33));
}
function Ho(e) {
    return e[wr] || null;
}
var al = [],
    fn = -1;
function jt(e) {
    return { current: e };
}
function W(e) {
    0 > fn || ((e.current = al[fn]), (al[fn] = null), fn--);
}
function V(e, t) {
    fn++, (al[fn] = e.current), (e.current = t);
}
var Ot = {},
    he = jt(Ot),
    Ce = jt(!1),
    Xt = Ot;
function Ln(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ot;
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
function xe(e) {
    return (e = e.childContextTypes), e != null;
}
function So() {
    W(Ce), W(he);
}
function su(e, t, n) {
    if (he.current !== Ot) throw Error(k(168));
    V(he, t), V(Ce, n);
}
function tc(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(k(108, tf(e) || "Unknown", o));
    return G({}, n, r);
}
function wo(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            Ot),
        (Xt = he.current),
        V(he, e),
        V(Ce, Ce.current),
        !0
    );
}
function uu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n
        ? ((e = tc(e, t, Xt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          W(Ce),
          W(he),
          V(he, e))
        : W(Ce),
        V(Ce, n);
}
var ut = null,
    Wo = !1,
    Ei = !1;
function nc(e) {
    ut === null ? (ut = [e]) : ut.push(e);
}
function Sp(e) {
    (Wo = !0), nc(e);
}
function Dt() {
    if (!Ei && ut !== null) {
        Ei = !0;
        var e = 0,
            t = U;
        try {
            var n = ut;
            for (U = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (ut = null), (Wo = !1);
        } catch (o) {
            throw (ut !== null && (ut = ut.slice(e + 1)), La(Bl, Dt), o);
        } finally {
            (U = t), (Ei = !1);
        }
    }
    return null;
}
var pn = [],
    hn = 0,
    _o = null,
    ko = 0,
    De = [],
    $e = 0,
    Gt = null,
    at = 1,
    ct = "";
function Ut(e, t) {
    (pn[hn++] = ko), (pn[hn++] = _o), (_o = e), (ko = t);
}
function rc(e, t, n) {
    (De[$e++] = at), (De[$e++] = ct), (De[$e++] = Gt), (Gt = e);
    var r = at;
    e = ct;
    var o = 32 - Xe(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - Xe(t) + o;
    if (30 < i) {
        var l = o - (o % 5);
        (i = (r & ((1 << l) - 1)).toString(32)),
            (r >>= l),
            (o -= l),
            (at = (1 << (32 - Xe(t) + o)) | (n << o) | r),
            (ct = i + e);
    } else (at = (1 << i) | (n << o) | r), (ct = e);
}
function Gl(e) {
    e.return !== null && (Ut(e, 1), rc(e, 1, 0));
}
function Zl(e) {
    for (; e === _o; )
        (_o = pn[--hn]), (pn[hn] = null), (ko = pn[--hn]), (pn[hn] = null);
    for (; e === Gt; )
        (Gt = De[--$e]),
            (De[$e] = null),
            (ct = De[--$e]),
            (De[$e] = null),
            (at = De[--$e]),
            (De[$e] = null);
}
var ze = null,
    Ne = null,
    Q = !1,
    Ye = null;
function oc(e, t) {
    var n = Ue(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function au(e, t) {
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
                    ? ((e.stateNode = t), (ze = e), (Ne = Lt(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (ze = e), (Ne = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Gt !== null ? { id: at, overflow: ct } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Ue(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (ze = e),
                      (Ne = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function cl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function dl(e) {
    if (Q) {
        var t = Ne;
        if (t) {
            var n = t;
            if (!au(e, t)) {
                if (cl(e)) throw Error(k(418));
                t = Lt(n.nextSibling);
                var r = ze;
                t && au(e, t)
                    ? oc(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (ze = e));
            }
        } else {
            if (cl(e)) throw Error(k(418));
            (e.flags = (e.flags & -4097) | 2), (Q = !1), (ze = e);
        }
    }
}
function cu(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    ze = e;
}
function Hr(e) {
    if (e !== ze) return !1;
    if (!Q) return cu(e), (Q = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !ll(e.type, e.memoizedProps))),
        t && (t = Ne))
    ) {
        if (cl(e)) throw (ic(), Error(k(418)));
        for (; t; ) oc(e, t), (t = Lt(t.nextSibling));
    }
    if ((cu(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(k(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ne = Lt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Ne = null;
        }
    } else Ne = ze ? Lt(e.stateNode.nextSibling) : null;
    return !0;
}
function ic() {
    for (var e = Ne; e; ) e = Lt(e.nextSibling);
}
function Rn() {
    (Ne = ze = null), (Q = !1);
}
function Jl(e) {
    Ye === null ? (Ye = [e]) : Ye.push(e);
}
var wp = vt.ReactCurrentBatchConfig;
function Kn(e, t, n) {
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
function Wr(e, t) {
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
function du(e) {
    var t = e._init;
    return t(e._payload);
}
function lc(e) {
    function t(h, c) {
        if (e) {
            var m = h.deletions;
            m === null ? ((h.deletions = [c]), (h.flags |= 16)) : m.push(c);
        }
    }
    function n(h, c) {
        if (!e) return null;
        for (; c !== null; ) t(h, c), (c = c.sibling);
        return null;
    }
    function r(h, c) {
        for (h = new Map(); c !== null; )
            c.key !== null ? h.set(c.key, c) : h.set(c.index, c),
                (c = c.sibling);
        return h;
    }
    function o(h, c) {
        return (h = Nt(h, c)), (h.index = 0), (h.sibling = null), h;
    }
    function i(h, c, m) {
        return (
            (h.index = m),
            e
                ? ((m = h.alternate),
                  m !== null
                      ? ((m = m.index), m < c ? ((h.flags |= 2), c) : m)
                      : ((h.flags |= 2), c))
                : ((h.flags |= 1048576), c)
        );
    }
    function l(h) {
        return e && h.alternate === null && (h.flags |= 2), h;
    }
    function s(h, c, m, S) {
        return c === null || c.tag !== 6
            ? ((c = Ti(m, h.mode, S)), (c.return = h), c)
            : ((c = o(c, m)), (c.return = h), c);
    }
    function u(h, c, m, S) {
        var x = m.type;
        return x === sn
            ? p(h, c, m.props.children, S, m.key)
            : c !== null &&
              (c.elementType === x ||
                  (typeof x == "object" &&
                      x !== null &&
                      x.$$typeof === gt &&
                      du(x) === c.type))
            ? ((S = o(c, m.props)), (S.ref = Kn(h, c, m)), (S.return = h), S)
            : ((S = so(m.type, m.key, m.props, null, h.mode, S)),
              (S.ref = Kn(h, c, m)),
              (S.return = h),
              S);
    }
    function a(h, c, m, S) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== m.containerInfo ||
            c.stateNode.implementation !== m.implementation
            ? ((c = Ni(m, h.mode, S)), (c.return = h), c)
            : ((c = o(c, m.children || [])), (c.return = h), c);
    }
    function p(h, c, m, S, x) {
        return c === null || c.tag !== 7
            ? ((c = Yt(m, h.mode, S, x)), (c.return = h), c)
            : ((c = o(c, m)), (c.return = h), c);
    }
    function d(h, c, m) {
        if ((typeof c == "string" && c !== "") || typeof c == "number")
            return (c = Ti("" + c, h.mode, m)), (c.return = h), c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Ir:
                    return (
                        (m = so(c.type, c.key, c.props, null, h.mode, m)),
                        (m.ref = Kn(h, null, c)),
                        (m.return = h),
                        m
                    );
                case ln:
                    return (c = Ni(c, h.mode, m)), (c.return = h), c;
                case gt:
                    var S = c._init;
                    return d(h, S(c._payload), m);
            }
            if (Zn(c) || An(c))
                return (c = Yt(c, h.mode, m, null)), (c.return = h), c;
            Wr(h, c);
        }
        return null;
    }
    function f(h, c, m, S) {
        var x = c !== null ? c.key : null;
        if ((typeof m == "string" && m !== "") || typeof m == "number")
            return x !== null ? null : s(h, c, "" + m, S);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ir:
                    return m.key === x ? u(h, c, m, S) : null;
                case ln:
                    return m.key === x ? a(h, c, m, S) : null;
                case gt:
                    return (x = m._init), f(h, c, x(m._payload), S);
            }
            if (Zn(m) || An(m)) return x !== null ? null : p(h, c, m, S, null);
            Wr(h, m);
        }
        return null;
    }
    function v(h, c, m, S, x) {
        if ((typeof S == "string" && S !== "") || typeof S == "number")
            return (h = h.get(m) || null), s(c, h, "" + S, x);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case Ir:
                    return (
                        (h = h.get(S.key === null ? m : S.key) || null),
                        u(c, h, S, x)
                    );
                case ln:
                    return (
                        (h = h.get(S.key === null ? m : S.key) || null),
                        a(c, h, S, x)
                    );
                case gt:
                    var P = S._init;
                    return v(h, c, m, P(S._payload), x);
            }
            if (Zn(S) || An(S))
                return (h = h.get(m) || null), p(c, h, S, x, null);
            Wr(c, S);
        }
        return null;
    }
    function y(h, c, m, S) {
        for (
            var x = null, P = null, E = c, _ = (c = 0), I = null;
            E !== null && _ < m.length;
            _++
        ) {
            E.index > _ ? ((I = E), (E = null)) : (I = E.sibling);
            var T = f(h, E, m[_], S);
            if (T === null) {
                E === null && (E = I);
                break;
            }
            e && E && T.alternate === null && t(h, E),
                (c = i(T, c, _)),
                P === null ? (x = T) : (P.sibling = T),
                (P = T),
                (E = I);
        }
        if (_ === m.length) return n(h, E), Q && Ut(h, _), x;
        if (E === null) {
            for (; _ < m.length; _++)
                (E = d(h, m[_], S)),
                    E !== null &&
                        ((c = i(E, c, _)),
                        P === null ? (x = E) : (P.sibling = E),
                        (P = E));
            return Q && Ut(h, _), x;
        }
        for (E = r(h, E); _ < m.length; _++)
            (I = v(E, h, _, m[_], S)),
                I !== null &&
                    (e &&
                        I.alternate !== null &&
                        E.delete(I.key === null ? _ : I.key),
                    (c = i(I, c, _)),
                    P === null ? (x = I) : (P.sibling = I),
                    (P = I));
        return (
            e &&
                E.forEach(function (B) {
                    return t(h, B);
                }),
            Q && Ut(h, _),
            x
        );
    }
    function g(h, c, m, S) {
        var x = An(m);
        if (typeof x != "function") throw Error(k(150));
        if (((m = x.call(m)), m == null)) throw Error(k(151));
        for (
            var P = (x = null), E = c, _ = (c = 0), I = null, T = m.next();
            E !== null && !T.done;
            _++, T = m.next()
        ) {
            E.index > _ ? ((I = E), (E = null)) : (I = E.sibling);
            var B = f(h, E, T.value, S);
            if (B === null) {
                E === null && (E = I);
                break;
            }
            e && E && B.alternate === null && t(h, E),
                (c = i(B, c, _)),
                P === null ? (x = B) : (P.sibling = B),
                (P = B),
                (E = I);
        }
        if (T.done) return n(h, E), Q && Ut(h, _), x;
        if (E === null) {
            for (; !T.done; _++, T = m.next())
                (T = d(h, T.value, S)),
                    T !== null &&
                        ((c = i(T, c, _)),
                        P === null ? (x = T) : (P.sibling = T),
                        (P = T));
            return Q && Ut(h, _), x;
        }
        for (E = r(h, E); !T.done; _++, T = m.next())
            (T = v(E, h, _, T.value, S)),
                T !== null &&
                    (e &&
                        T.alternate !== null &&
                        E.delete(T.key === null ? _ : T.key),
                    (c = i(T, c, _)),
                    P === null ? (x = T) : (P.sibling = T),
                    (P = T));
        return (
            e &&
                E.forEach(function (A) {
                    return t(h, A);
                }),
            Q && Ut(h, _),
            x
        );
    }
    function C(h, c, m, S) {
        if (
            (typeof m == "object" &&
                m !== null &&
                m.type === sn &&
                m.key === null &&
                (m = m.props.children),
            typeof m == "object" && m !== null)
        ) {
            switch (m.$$typeof) {
                case Ir:
                    e: {
                        for (var x = m.key, P = c; P !== null; ) {
                            if (P.key === x) {
                                if (((x = m.type), x === sn)) {
                                    if (P.tag === 7) {
                                        n(h, P.sibling),
                                            (c = o(P, m.props.children)),
                                            (c.return = h),
                                            (h = c);
                                        break e;
                                    }
                                } else if (
                                    P.elementType === x ||
                                    (typeof x == "object" &&
                                        x !== null &&
                                        x.$$typeof === gt &&
                                        du(x) === P.type)
                                ) {
                                    n(h, P.sibling),
                                        (c = o(P, m.props)),
                                        (c.ref = Kn(h, P, m)),
                                        (c.return = h),
                                        (h = c);
                                    break e;
                                }
                                n(h, P);
                                break;
                            } else t(h, P);
                            P = P.sibling;
                        }
                        m.type === sn
                            ? ((c = Yt(m.props.children, h.mode, S, m.key)),
                              (c.return = h),
                              (h = c))
                            : ((S = so(
                                  m.type,
                                  m.key,
                                  m.props,
                                  null,
                                  h.mode,
                                  S
                              )),
                              (S.ref = Kn(h, c, m)),
                              (S.return = h),
                              (h = S));
                    }
                    return l(h);
                case ln:
                    e: {
                        for (P = m.key; c !== null; ) {
                            if (c.key === P)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo ===
                                        m.containerInfo &&
                                    c.stateNode.implementation ===
                                        m.implementation
                                ) {
                                    n(h, c.sibling),
                                        (c = o(c, m.children || [])),
                                        (c.return = h),
                                        (h = c);
                                    break e;
                                } else {
                                    n(h, c);
                                    break;
                                }
                            else t(h, c);
                            c = c.sibling;
                        }
                        (c = Ni(m, h.mode, S)), (c.return = h), (h = c);
                    }
                    return l(h);
                case gt:
                    return (P = m._init), C(h, c, P(m._payload), S);
            }
            if (Zn(m)) return y(h, c, m, S);
            if (An(m)) return g(h, c, m, S);
            Wr(h, m);
        }
        return (typeof m == "string" && m !== "") || typeof m == "number"
            ? ((m = "" + m),
              c !== null && c.tag === 6
                  ? (n(h, c.sibling), (c = o(c, m)), (c.return = h), (h = c))
                  : (n(h, c), (c = Ti(m, h.mode, S)), (c.return = h), (h = c)),
              l(h))
            : n(h, c);
    }
    return C;
}
var Mn = lc(!0),
    sc = lc(!1),
    Eo = jt(null),
    Co = null,
    mn = null,
    ql = null;
function bl() {
    ql = mn = Co = null;
}
function es(e) {
    var t = Eo.current;
    W(Eo), (e._currentValue = t);
}
function fl(e, t, n) {
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
    (Co = e),
        (ql = mn = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (Ee = !0), (e.firstContext = null));
}
function Ae(e) {
    var t = e._currentValue;
    if (ql !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), mn === null)) {
            if (Co === null) throw Error(k(308));
            (mn = e), (Co.dependencies = { lanes: 0, firstContext: e });
        } else mn = mn.next = e;
    return t;
}
var Ht = null;
function ts(e) {
    Ht === null ? (Ht = [e]) : Ht.push(e);
}
function uc(e, t, n, r) {
    var o = t.interleaved;
    return (
        o === null ? ((n.next = n), ts(t)) : ((n.next = o.next), (o.next = n)),
        (t.interleaved = n),
        ht(e, r)
    );
}
function ht(e, t) {
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
var St = !1;
function ns(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function ac(e, t) {
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
function dt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function Rt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), $ & 2)) {
        var o = r.pending;
        return (
            o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
            (r.pending = t),
            ht(e, n)
        );
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), ts(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        ht(e, n)
    );
}
function to(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
    }
}
function fu(e, t) {
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
function xo(e, t, n, r) {
    var o = e.updateQueue;
    St = !1;
    var i = o.firstBaseUpdate,
        l = o.lastBaseUpdate,
        s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var u = s,
            a = u.next;
        (u.next = null), l === null ? (i = a) : (l.next = a), (l = u);
        var p = e.alternate;
        p !== null &&
            ((p = p.updateQueue),
            (s = p.lastBaseUpdate),
            s !== l &&
                (s === null ? (p.firstBaseUpdate = a) : (s.next = a),
                (p.lastBaseUpdate = u)));
    }
    if (i !== null) {
        var d = o.baseState;
        (l = 0), (p = a = u = null), (s = i);
        do {
            var f = s.lane,
                v = s.eventTime;
            if ((r & f) === f) {
                p !== null &&
                    (p = p.next =
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
                                d = y.call(v, d, f);
                                break e;
                            }
                            d = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (
                                ((y = g.payload),
                                (f =
                                    typeof y == "function"
                                        ? y.call(v, d, f)
                                        : y),
                                f == null)
                            )
                                break e;
                            d = G({}, d, f);
                            break e;
                        case 2:
                            St = !0;
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
                    p === null ? ((a = p = v), (u = d)) : (p = p.next = v),
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
            (p === null && (u = d),
            (o.baseState = u),
            (o.firstBaseUpdate = a),
            (o.lastBaseUpdate = p),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (l |= o.lane), (o = o.next);
            while (o !== t);
        } else i === null && (o.shared.lanes = 0);
        (Jt |= l), (e.lanes = l), (e.memoizedState = d);
    }
}
function pu(e, t, n) {
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
    it = jt(Nr),
    _r = jt(Nr),
    kr = jt(Nr);
function Wt(e) {
    if (e === Nr) throw Error(k(174));
    return e;
}
function rs(e, t) {
    switch ((V(kr, t), V(_r, e), V(it, Nr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ki(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Ki(t, e));
    }
    W(it), V(it, t);
}
function Tn() {
    W(it), W(_r), W(kr);
}
function cc(e) {
    Wt(kr.current);
    var t = Wt(it.current),
        n = Ki(t, e.type);
    t !== n && (V(_r, e), V(it, n));
}
function os(e) {
    _r.current === e && (W(it), W(_r));
}
var Y = jt(0);
function Po(e) {
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
var Ci = [];
function is() {
    for (var e = 0; e < Ci.length; e++)
        Ci[e]._workInProgressVersionPrimary = null;
    Ci.length = 0;
}
var no = vt.ReactCurrentDispatcher,
    xi = vt.ReactCurrentBatchConfig,
    Zt = 0,
    X = null,
    ne = null,
    oe = null,
    Lo = !1,
    or = !1,
    Er = 0,
    _p = 0;
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
        ((Zt = i),
        (X = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (no.current = e === null || e.memoizedState === null ? xp : Pp),
        (e = n(r, o)),
        or)
    ) {
        i = 0;
        do {
            if (((or = !1), (Er = 0), 25 <= i)) throw Error(k(301));
            (i += 1),
                (oe = ne = null),
                (t.updateQueue = null),
                (no.current = Lp),
                (e = n(r, o));
        } while (or);
    }
    if (
        ((no.current = Ro),
        (t = ne !== null && ne.next !== null),
        (Zt = 0),
        (oe = ne = X = null),
        (Lo = !1),
        t)
    )
        throw Error(k(300));
    return e;
}
function us() {
    var e = Er !== 0;
    return (Er = 0), e;
}
function tt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return oe === null ? (X.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Ve() {
    if (ne === null) {
        var e = X.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = ne.next;
    var t = oe === null ? X.memoizedState : oe.next;
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
            oe === null ? (X.memoizedState = oe = e) : (oe = oe.next = e);
    }
    return oe;
}
function Cr(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Pi(e) {
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
            var p = a.lane;
            if ((Zt & p) === p)
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
                var d = {
                    lane: p,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null,
                };
                u === null ? ((s = u = d), (l = r)) : (u = u.next = d),
                    (X.lanes |= p),
                    (Jt |= p);
            }
            a = a.next;
        } while (a !== null && a !== i);
        u === null ? (l = r) : (u.next = s),
            Ze(r, t.memoizedState) || (Ee = !0),
            (t.memoizedState = r),
            (t.baseState = l),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (i = o.lane), (X.lanes |= i), (Jt |= i), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Li(e) {
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
        Ze(i, t.memoizedState) || (Ee = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function dc() {}
function fc(e, t) {
    var n = X,
        r = Ve(),
        o = t(),
        i = !Ze(r.memoizedState, o);
    if (
        (i && ((r.memoizedState = o), (Ee = !0)),
        (r = r.queue),
        as(mc.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (oe !== null && oe.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            xr(9, hc.bind(null, n, r, o, t), void 0, null),
            ie === null)
        )
            throw Error(k(349));
        Zt & 30 || pc(n, t, o);
    }
    return o;
}
function pc(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = X.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (X.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), vc(t) && yc(e);
}
function mc(e, t, n) {
    return n(function () {
        vc(t) && yc(e);
    });
}
function vc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ze(e, n);
    } catch {
        return !0;
    }
}
function yc(e) {
    var t = ht(e, 1);
    t !== null && Ge(t, e, 1, -1);
}
function hu(e) {
    var t = tt();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Cr,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Cp.bind(null, X, e)),
        [t.memoizedState, e]
    );
}
function xr(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = X.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (X.updateQueue = t),
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
function gc() {
    return Ve().memoizedState;
}
function ro(e, t, n, r) {
    var o = tt();
    (X.flags |= e),
        (o.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Qo(e, t, n, r) {
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
    (X.flags |= e), (o.memoizedState = xr(1 | t, n, i, r));
}
function mu(e, t) {
    return ro(8390656, 8, e, t);
}
function as(e, t) {
    return Qo(2048, 8, e, t);
}
function Sc(e, t) {
    return Qo(4, 2, e, t);
}
function wc(e, t) {
    return Qo(4, 4, e, t);
}
function _c(e, t) {
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
function kc(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Qo(4, 4, _c.bind(null, t, e), n)
    );
}
function cs() {}
function Ec(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function Cc(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ls(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xc(e, t, n) {
    return Zt & 21
        ? (Ze(n, t) ||
              ((n = Ta()), (X.lanes |= n), (Jt |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (Ee = !0)),
          (e.memoizedState = n));
}
function kp(e, t) {
    var n = U;
    (U = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = xi.transition;
    xi.transition = {};
    try {
        e(!1), t();
    } finally {
        (U = n), (xi.transition = r);
    }
}
function Pc() {
    return Ve().memoizedState;
}
function Ep(e, t, n) {
    var r = Tt(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Lc(e))
    )
        Rc(t, n);
    else if (((n = uc(e, t, n, r)), n !== null)) {
        var o = ye();
        Ge(n, e, r, o), Mc(n, t, r);
    }
}
function Cp(e, t, n) {
    var r = Tt(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Lc(e)) Rc(t, o);
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
        (n = uc(e, t, o, r)),
            n !== null && ((o = ye()), Ge(n, e, r, o), Mc(n, t, r));
    }
}
function Lc(e) {
    var t = e.alternate;
    return e === X || (t !== null && t === X);
}
function Rc(e, t) {
    or = Lo = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Mc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
    }
}
var Ro = {
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
    xp = {
        readContext: Ae,
        useCallback: function (e, t) {
            return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ae,
        useEffect: mu,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                ro(4194308, 4, _c.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return ro(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return ro(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = tt();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = tt();
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
                (e = e.dispatch = Ep.bind(null, X, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = tt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: hu,
        useDebugValue: cs,
        useDeferredValue: function (e) {
            return (tt().memoizedState = e);
        },
        useTransition: function () {
            var e = hu(!1),
                t = e[0];
            return (e = kp.bind(null, e[1])), (tt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = X,
                o = tt();
            if (Q) {
                if (n === void 0) throw Error(k(407));
                n = n();
            } else {
                if (((n = t()), ie === null)) throw Error(k(349));
                Zt & 30 || pc(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (o.queue = i),
                mu(mc.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                xr(9, hc.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = tt(),
                t = ie.identifierPrefix;
            if (Q) {
                var n = ct,
                    r = at;
                (n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = Er++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = _p++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Pp = {
        readContext: Ae,
        useCallback: Ec,
        useContext: Ae,
        useEffect: as,
        useImperativeHandle: kc,
        useInsertionEffect: Sc,
        useLayoutEffect: wc,
        useMemo: Cc,
        useReducer: Pi,
        useRef: gc,
        useState: function () {
            return Pi(Cr);
        },
        useDebugValue: cs,
        useDeferredValue: function (e) {
            var t = Ve();
            return xc(t, ne.memoizedState, e);
        },
        useTransition: function () {
            var e = Pi(Cr)[0],
                t = Ve().memoizedState;
            return [e, t];
        },
        useMutableSource: dc,
        useSyncExternalStore: fc,
        useId: Pc,
        unstable_isNewReconciler: !1,
    },
    Lp = {
        readContext: Ae,
        useCallback: Ec,
        useContext: Ae,
        useEffect: as,
        useImperativeHandle: kc,
        useInsertionEffect: Sc,
        useLayoutEffect: wc,
        useMemo: Cc,
        useReducer: Li,
        useRef: gc,
        useState: function () {
            return Li(Cr);
        },
        useDebugValue: cs,
        useDeferredValue: function (e) {
            var t = Ve();
            return ne === null
                ? (t.memoizedState = e)
                : xc(t, ne.memoizedState, e);
        },
        useTransition: function () {
            var e = Li(Cr)[0],
                t = Ve().memoizedState;
            return [e, t];
        },
        useMutableSource: dc,
        useSyncExternalStore: fc,
        useId: Pc,
        unstable_isNewReconciler: !1,
    };
function Qe(e, t) {
    if (e && e.defaultProps) {
        (t = G({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function pl(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : G({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ko = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? en(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ye(),
            o = Tt(e),
            i = dt(r, o);
        (i.payload = t),
            n != null && (i.callback = n),
            (t = Rt(e, i, o)),
            t !== null && (Ge(t, e, o, r), to(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ye(),
            o = Tt(e),
            i = dt(r, o);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = Rt(e, i, o)),
            t !== null && (Ge(t, e, o, r), to(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ye(),
            r = Tt(e),
            o = dt(n, r);
        (o.tag = 2),
            t != null && (o.callback = t),
            (t = Rt(e, o, r)),
            t !== null && (Ge(t, e, r, n), to(t, e, r));
    },
};
function vu(e, t, n, r, o, i, l) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, l)
            : t.prototype && t.prototype.isPureReactComponent
            ? !yr(n, r) || !yr(o, i)
            : !0
    );
}
function Tc(e, t, n) {
    var r = !1,
        o = Ot,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = Ae(i))
            : ((o = xe(t) ? Xt : he.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? Ln(e, o) : Ot)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Ko),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function yu(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ko.enqueueReplaceState(t, t.state, null);
}
function hl(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ns(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
        ? (o.context = Ae(i))
        : ((i = xe(t) ? Xt : he.current), (o.context = Ln(e, i))),
        (o.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (pl(e, t, i, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" &&
                typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" &&
                o.UNSAFE_componentWillMount(),
            t !== o.state && Ko.enqueueReplaceState(o, o.state, null),
            xo(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nn(e, t) {
    try {
        var n = "",
            r = t;
        do (n += ef(r)), (r = r.return);
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
function Ri(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ml(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Rp = typeof WeakMap == "function" ? WeakMap : Map;
function Nc(e, t, n) {
    (n = dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            To || ((To = !0), (xl = r)), ml(e, t);
        }),
        n
    );
}
function zc(e, t, n) {
    (n = dt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                ml(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                ml(e, t),
                    typeof r != "function" &&
                        (Mt === null ? (Mt = new Set([this])) : Mt.add(this));
                var l = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: l !== null ? l : "",
                });
            }),
        n
    );
}
function gu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Rp();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = Vp.bind(null, e, t, n)), t.then(e, e));
}
function Su(e) {
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
function wu(e, t, n, r, o) {
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
                        : ((t = dt(-1, 1)), (t.tag = 2), Rt(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var Mp = vt.ReactCurrentOwner,
    Ee = !1;
function ve(e, t, n, r) {
    t.child = e === null ? sc(t, null, n, r) : Mn(t, e.child, n, r);
}
function _u(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        En(t, o),
        (r = ss(e, t, n, r, i, o)),
        (n = us()),
        e !== null && !Ee
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              mt(e, t, o))
            : (Q && n && Gl(t), (t.flags |= 1), ve(e, t, r, o), t.child)
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
            ? ((t.tag = 15), (t.type = i), Ic(e, t, i, r, o))
            : ((e = so(n.type, null, r, t, t.mode, o)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
        var l = i.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : yr),
            n(l, r) && e.ref === t.ref)
        )
            return mt(e, t, o);
    }
    return (
        (t.flags |= 1),
        (e = Nt(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function Ic(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (yr(i, r) && e.ref === t.ref)
            if (((Ee = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
                e.flags & 131072 && (Ee = !0);
            else return (t.lanes = e.lanes), mt(e, t, o);
    }
    return vl(e, t, n, r, o);
}
function Oc(e, t, n) {
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
                V(yn, Me),
                (Me |= n);
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
                    V(yn, Me),
                    (Me |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                V(yn, Me),
                (Me |= r);
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            V(yn, Me),
            (Me |= r);
    return ve(e, t, o, n), t.child;
}
function Fc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function vl(e, t, n, r, o) {
    var i = xe(n) ? Xt : he.current;
    return (
        (i = Ln(t, i)),
        En(t, o),
        (n = ss(e, t, n, r, i, o)),
        (r = us()),
        e !== null && !Ee
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              mt(e, t, o))
            : (Q && r && Gl(t), (t.flags |= 1), ve(e, t, n, o), t.child)
    );
}
function Eu(e, t, n, r, o) {
    if (xe(n)) {
        var i = !0;
        wo(t);
    } else i = !1;
    if ((En(t, o), t.stateNode === null))
        oo(e, t), Tc(t, n, r), hl(t, n, r, o), (r = !0);
    else if (e === null) {
        var l = t.stateNode,
            s = t.memoizedProps;
        l.props = s;
        var u = l.context,
            a = n.contextType;
        typeof a == "object" && a !== null
            ? (a = Ae(a))
            : ((a = xe(n) ? Xt : he.current), (a = Ln(t, a)));
        var p = n.getDerivedStateFromProps,
            d =
                typeof p == "function" ||
                typeof l.getSnapshotBeforeUpdate == "function";
        d ||
            (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
                typeof l.componentWillReceiveProps != "function") ||
            ((s !== r || u !== a) && yu(t, l, r, a)),
            (St = !1);
        var f = t.memoizedState;
        (l.state = f),
            xo(t, r, l, o),
            (u = t.memoizedState),
            s !== r || f !== u || Ce.current || St
                ? (typeof p == "function" &&
                      (pl(t, n, p, r), (u = t.memoizedState)),
                  (s = St || vu(t, n, s, r, f, u, a))
                      ? (d ||
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
            ac(e, t),
            (s = t.memoizedProps),
            (a = t.type === t.elementType ? s : Qe(t.type, s)),
            (l.props = a),
            (d = t.pendingProps),
            (f = l.context),
            (u = n.contextType),
            typeof u == "object" && u !== null
                ? (u = Ae(u))
                : ((u = xe(n) ? Xt : he.current), (u = Ln(t, u)));
        var v = n.getDerivedStateFromProps;
        (p =
            typeof v == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function") ||
            (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
                typeof l.componentWillReceiveProps != "function") ||
            ((s !== d || f !== u) && yu(t, l, r, u)),
            (St = !1),
            (f = t.memoizedState),
            (l.state = f),
            xo(t, r, l, o);
        var y = t.memoizedState;
        s !== d || f !== y || Ce.current || St
            ? (typeof v == "function" &&
                  (pl(t, n, v, r), (y = t.memoizedState)),
              (a = St || vu(t, n, a, r, f, y, u) || !1)
                  ? (p ||
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
    return yl(e, t, n, r, i, o);
}
function yl(e, t, n, r, o, i) {
    Fc(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return o && uu(t, n, !1), mt(e, t, i);
    (r = t.stateNode), (Mp.current = t);
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
        o && uu(t, n, !0),
        t.child
    );
}
function jc(e) {
    var t = e.stateNode;
    t.pendingContext
        ? su(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && su(e, t.context, !1),
        rs(e, t.containerInfo);
}
function Cu(e, t, n, r, o) {
    return Rn(), Jl(o), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var gl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Dc(e, t, n) {
    var r = t.pendingProps,
        o = Y.current,
        i = !1,
        l = (t.flags & 128) !== 0,
        s;
    if (
        ((s = l) ||
            (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        s
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (o |= 1),
        V(Y, o & 1),
        e === null)
    )
        return (
            dl(t),
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
                            : (i = Go(l, r, 0, null)),
                        (e = Yt(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = Sl(n)),
                        (t.memoizedState = gl),
                        e)
                      : ds(t, l))
        );
    if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
        return Tp(e, t, l, r, s, o, n);
    if (i) {
        (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
        var u = { mode: "hidden", children: r.children };
        return (
            !(l & 1) && t.child !== o
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = u),
                  (t.deletions = null))
                : ((r = Nt(o, u)),
                  (r.subtreeFlags = o.subtreeFlags & 14680064)),
            s !== null
                ? (i = Nt(s, i))
                : ((i = Yt(i, l, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (l = e.child.memoizedState),
            (l =
                l === null
                    ? Sl(n)
                    : {
                          baseLanes: l.baseLanes | n,
                          cachePool: null,
                          transitions: l.transitions,
                      }),
            (i.memoizedState = l),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = gl),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = Nt(i, { mode: "visible", children: r.children })),
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
        (t = Go({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Qr(e, t, n, r) {
    return (
        r !== null && Jl(r),
        Mn(t, e.child, null, n),
        (e = ds(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Tp(e, t, n, r, o, i, l) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Ri(Error(k(422)))), Qr(e, t, l, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (o = t.mode),
              (r = Go({ mode: "visible", children: r.children }, o, 0, null)),
              (i = Yt(i, o, l, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && Mn(t, e.child, null, l),
              (t.child.memoizedState = Sl(l)),
              (t.memoizedState = gl),
              i);
    if (!(t.mode & 1)) return Qr(e, t, l, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
        return (
            (r = s), (i = Error(k(419))), (r = Ri(i, r, void 0)), Qr(e, t, l, r)
        );
    }
    if (((s = (l & e.childLanes) !== 0), Ee || s)) {
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
                    ((i.retryLane = o), ht(e, o), Ge(r, e, o, -1));
        }
        return ys(), (r = Ri(Error(k(421)))), Qr(e, t, l, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Hp.bind(null, e)),
          (o._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (Ne = Lt(o.nextSibling)),
          (ze = t),
          (Q = !0),
          (Ye = null),
          e !== null &&
              ((De[$e++] = at),
              (De[$e++] = ct),
              (De[$e++] = Gt),
              (at = e.id),
              (ct = e.overflow),
              (Gt = t)),
          (t = ds(t, r.children)),
          (t.flags |= 4096),
          t);
}
function xu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), fl(e.return, t, n);
}
function Mi(e, t, n, r, o) {
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
function $c(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ((ve(e, t, r.children, n), (r = Y.current), r & 2))
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
    if ((V(Y, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Po(e) === null && (o = n),
                        (n = n.sibling);
                (n = o),
                    n === null
                        ? ((o = t.child), (t.child = null))
                        : ((o = n.sibling), (n.sibling = null)),
                    Mi(t, !1, o, n, i);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && Po(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Mi(t, !0, n, null, i);
                break;
            case "together":
                Mi(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function oo(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Jt |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
        for (
            e = t.child, n = Nt(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = Nt(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Np(e, t, n) {
    switch (t.tag) {
        case 3:
            jc(t), Rn();
            break;
        case 5:
            cc(t);
            break;
        case 1:
            xe(t.type) && wo(t);
            break;
        case 4:
            rs(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            V(Eo, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (V(Y, Y.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Dc(e, t, n)
                    : (V(Y, Y.current & 1),
                      (e = mt(e, t, n)),
                      e !== null ? e.sibling : null);
            V(Y, Y.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return $c(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null &&
                    ((o.rendering = null),
                    (o.tail = null),
                    (o.lastEffect = null)),
                V(Y, Y.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Oc(e, t, n);
    }
    return mt(e, t, n);
}
var Uc, wl, Bc, Ac;
Uc = function (e, t) {
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
wl = function () {};
Bc = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), Wt(it.current);
        var i = null;
        switch (n) {
            case "input":
                (o = Vi(e, o)), (r = Vi(e, r)), (i = []);
                break;
            case "select":
                (o = G({}, o, { value: void 0 })),
                    (r = G({}, r, { value: void 0 })),
                    (i = []);
                break;
            case "textarea":
                (o = Qi(e, o)), (r = Qi(e, r)), (i = []);
                break;
            default:
                typeof o.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = go);
        }
        Yi(n, r);
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
                        (cr.hasOwnProperty(a)
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
                          (cr.hasOwnProperty(a)
                              ? (u != null &&
                                    a === "onScroll" &&
                                    H("scroll", e),
                                i || s === u || (i = []))
                              : (i = i || []).push(a, u));
        }
        n && (i = i || []).push("style", n);
        var a = i;
        (t.updateQueue = a) && (t.flags |= 4);
    }
};
Ac = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Yn(e, t) {
    if (!Q)
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
function zp(e, t, n) {
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
            return xe(t.type) && So(), fe(t), null;
        case 3:
            return (
                (r = t.stateNode),
                Tn(),
                W(Ce),
                W(he),
                is(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Hr(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Ye !== null && (Rl(Ye), (Ye = null)))),
                wl(e, t),
                fe(t),
                null
            );
        case 5:
            os(t);
            var o = Wt(kr.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Bc(e, t, n, r, o),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(k(166));
                    return fe(t), null;
                }
                if (((e = Wt(it.current)), Hr(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (
                        ((r[rt] = t), (r[wr] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            H("cancel", r), H("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            H("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < qn.length; o++) H(qn[o], r);
                            break;
                        case "source":
                            H("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            H("error", r), H("load", r);
                            break;
                        case "details":
                            H("toggle", r);
                            break;
                        case "input":
                            Os(r, i), H("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }),
                                H("invalid", r);
                            break;
                        case "textarea":
                            js(r, i), H("invalid", r);
                    }
                    Yi(n, i), (o = null);
                    for (var l in i)
                        if (i.hasOwnProperty(l)) {
                            var s = i[l];
                            l === "children"
                                ? typeof s == "string"
                                    ? r.textContent !== s &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Vr(r.textContent, s, e),
                                      (o = ["children", s]))
                                    : typeof s == "number" &&
                                      r.textContent !== "" + s &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Vr(r.textContent, s, e),
                                      (o = ["children", "" + s]))
                                : cr.hasOwnProperty(l) &&
                                  s != null &&
                                  l === "onScroll" &&
                                  H("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Or(r), Fs(r, i, !0);
                            break;
                        case "textarea":
                            Or(r), Ds(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = go);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (l = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = ma(n)),
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
                        (e[rt] = t),
                        (e[wr] = r),
                        Uc(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((l = Xi(n, r)), n)) {
                            case "dialog":
                                H("cancel", e), H("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                H("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < qn.length; o++) H(qn[o], e);
                                o = r;
                                break;
                            case "source":
                                H("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                H("error", e), H("load", e), (o = r);
                                break;
                            case "details":
                                H("toggle", e), (o = r);
                                break;
                            case "input":
                                Os(e, r), (o = Vi(e, r)), H("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (o = G({}, r, { value: void 0 })),
                                    H("invalid", e);
                                break;
                            case "textarea":
                                js(e, r), (o = Qi(e, r)), H("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        Yi(n, o), (s = o);
                        for (i in s)
                            if (s.hasOwnProperty(i)) {
                                var u = s[i];
                                i === "style"
                                    ? ga(e, u)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((u = u ? u.__html : void 0),
                                      u != null && va(e, u))
                                    : i === "children"
                                    ? typeof u == "string"
                                        ? (n !== "textarea" || u !== "") &&
                                          dr(e, u)
                                        : typeof u == "number" && dr(e, "" + u)
                                    : i !== "suppressContentEditableWarning" &&
                                      i !== "suppressHydrationWarning" &&
                                      i !== "autoFocus" &&
                                      (cr.hasOwnProperty(i)
                                          ? u != null &&
                                            i === "onScroll" &&
                                            H("scroll", e)
                                          : u != null && Fl(e, i, u, l));
                            }
                        switch (n) {
                            case "input":
                                Or(e), Fs(e, r, !1);
                                break;
                            case "textarea":
                                Or(e), Ds(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + It(r.value));
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
                                    (e.onclick = go);
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
            if (e && t.stateNode != null) Ac(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(k(166));
                if (((n = Wt(kr.current)), Wt(it.current), Hr(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[rt] = t),
                        (i = r.nodeValue !== n) && ((e = ze), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Vr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Vr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[rt] = t),
                        (t.stateNode = r);
            }
            return fe(t), null;
        case 13:
            if (
                (W(Y),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (Q && Ne !== null && t.mode & 1 && !(t.flags & 128))
                    ic(), Rn(), (t.flags |= 98560), (i = !1);
                else if (((i = Hr(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(k(318));
                        if (
                            ((i = t.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error(k(317));
                        i[rt] = t;
                    } else
                        Rn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    fe(t), (i = !1);
                } else Ye !== null && (Rl(Ye), (Ye = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || Y.current & 1
                              ? re === 0 && (re = 3)
                              : ys())),
                  t.updateQueue !== null && (t.flags |= 4),
                  fe(t),
                  null);
        case 4:
            return (
                Tn(),
                wl(e, t),
                e === null && gr(t.stateNode.containerInfo),
                fe(t),
                null
            );
        case 10:
            return es(t.type._context), fe(t), null;
        case 17:
            return xe(t.type) && So(), fe(t), null;
        case 19:
            if ((W(Y), (i = t.memoizedState), i === null)) return fe(t), null;
            if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
                if (r) Yn(i, !1);
                else {
                    if (re !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((l = Po(e)), l !== null)) {
                                for (
                                    t.flags |= 128,
                                        Yn(i, !1),
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
                                return V(Y, (Y.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null &&
                        q() > zn &&
                        ((t.flags |= 128),
                        (r = !0),
                        Yn(i, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Po(l)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Yn(i, !0),
                            i.tail === null &&
                                i.tailMode === "hidden" &&
                                !l.alternate &&
                                !Q)
                        )
                            return fe(t), null;
                    } else
                        2 * q() - i.renderingStartTime > zn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            Yn(i, !1),
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
                  (i.renderingStartTime = q()),
                  (t.sibling = null),
                  (n = Y.current),
                  V(Y, r ? (n & 1) | 2 : n & 1),
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
                    ? Me & 1073741824 &&
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
function Ip(e, t) {
    switch ((Zl(t), t.tag)) {
        case 1:
            return (
                xe(t.type) && So(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                Tn(),
                W(Ce),
                W(he),
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
                (W(Y),
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
            return W(Y), null;
        case 4:
            return Tn(), null;
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
var Kr = !1,
    pe = !1,
    Op = typeof WeakSet == "function" ? WeakSet : Set,
    L = null;
function vn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                Z(e, t, r);
            }
        else n.current = null;
}
function _l(e, t, n) {
    try {
        n();
    } catch (r) {
        Z(e, t, r);
    }
}
var Pu = !1;
function Fp(e, t) {
    if (((ol = mo), (e = Ka()), Xl(e))) {
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
                        p = 0,
                        d = e,
                        f = null;
                    t: for (;;) {
                        for (
                            var v;
                            d !== n ||
                                (o !== 0 && d.nodeType !== 3) ||
                                (s = l + o),
                                d !== i ||
                                    (r !== 0 && d.nodeType !== 3) ||
                                    (u = l + r),
                                d.nodeType === 3 && (l += d.nodeValue.length),
                                (v = d.firstChild) !== null;

                        )
                            (f = d), (d = v);
                        for (;;) {
                            if (d === e) break t;
                            if (
                                (f === n && ++a === o && (s = l),
                                f === i && ++p === r && (u = l),
                                (v = d.nextSibling) !== null)
                            )
                                break;
                            (d = f), (f = d.parentNode);
                        }
                        d = v;
                    }
                    n = s === -1 || u === -1 ? null : { start: s, end: u };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        il = { focusedElem: e, selectionRange: n }, mo = !1, L = t;
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
                                        C = y.memoizedState,
                                        h = t.stateNode,
                                        c = h.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? g
                                                : Qe(t.type, g),
                                            C
                                        );
                                    h.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var m = t.stateNode.containerInfo;
                                m.nodeType === 1
                                    ? (m.textContent = "")
                                    : m.nodeType === 9 &&
                                      m.documentElement &&
                                      m.removeChild(m.documentElement);
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
                    Z(t, t.return, S);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (L = e);
                    break;
                }
                L = t.return;
            }
    return (y = Pu), (Pu = !1), y;
}
function ir(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), i !== void 0 && _l(t, n, i);
            }
            o = o.next;
        } while (o !== r);
    }
}
function Yo(e, t) {
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
function Vc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Vc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[rt],
                delete t[wr],
                delete t[ul],
                delete t[yp],
                delete t[gp])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Hc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lu(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Hc(e.return)) return null;
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
function El(e, t, n) {
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
                  n != null || t.onclick !== null || (t.onclick = go));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (El(e, t, n), e = e.sibling; e !== null; )
            El(e, t, n), (e = e.sibling);
}
function Cl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Cl(e, t, n), e = e.sibling; e !== null; )
            Cl(e, t, n), (e = e.sibling);
}
var se = null,
    Ke = !1;
function yt(e, t, n) {
    for (n = n.child; n !== null; ) Wc(e, t, n), (n = n.sibling);
}
function Wc(e, t, n) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
        try {
            ot.onCommitFiberUnmount(Uo, n);
        } catch {}
    switch (n.tag) {
        case 5:
            pe || vn(n, t);
        case 6:
            var r = se,
                o = Ke;
            (se = null),
                yt(e, t, n),
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
                          ? ki(e.parentNode, n)
                          : e.nodeType === 1 && ki(e, n),
                      mr(e))
                    : ki(se, n.stateNode));
            break;
        case 4:
            (r = se),
                (o = Ke),
                (se = n.stateNode.containerInfo),
                (Ke = !0),
                yt(e, t, n),
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
                        l !== void 0 && (i & 2 || i & 4) && _l(n, t, l),
                        (o = o.next);
                } while (o !== r);
            }
            yt(e, t, n);
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
                    Z(n, t, s);
                }
            yt(e, t, n);
            break;
        case 21:
            yt(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((pe = (r = pe) || n.memoizedState !== null),
                  yt(e, t, n),
                  (pe = r))
                : yt(e, t, n);
            break;
        default:
            yt(e, t, n);
    }
}
function Ru(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Op()),
            t.forEach(function (r) {
                var o = Wp.bind(null, e, r);
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
                Wc(i, l, o), (se = null), (Ke = !1);
                var u = o.alternate;
                u !== null && (u.return = null), (o.return = null);
            } catch (a) {
                Z(o, t, a);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Qc(t, e), (t = t.sibling);
}
function Qc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((We(t, e), et(e), r & 4)) {
                try {
                    ir(3, e, e.return), Yo(3, e);
                } catch (g) {
                    Z(e, e.return, g);
                }
                try {
                    ir(5, e, e.return);
                } catch (g) {
                    Z(e, e.return, g);
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
                    dr(o, "");
                } catch (g) {
                    Z(e, e.return, g);
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
                            pa(o, i),
                            Xi(s, l);
                        var a = Xi(s, i);
                        for (l = 0; l < u.length; l += 2) {
                            var p = u[l],
                                d = u[l + 1];
                            p === "style"
                                ? ga(o, d)
                                : p === "dangerouslySetInnerHTML"
                                ? va(o, d)
                                : p === "children"
                                ? dr(o, d)
                                : Fl(o, p, d, a);
                        }
                        switch (s) {
                            case "input":
                                Hi(o, i);
                                break;
                            case "textarea":
                                ha(o, i);
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
                        o[wr] = i;
                    } catch (g) {
                        Z(e, e.return, g);
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
                    Z(e, e.return, g);
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
                    mr(t.containerInfo);
                } catch (g) {
                    Z(e, e.return, g);
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
                        (hs = q())),
                r & 4 && Ru(e);
            break;
        case 22:
            if (
                ((p = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((pe = (a = pe) || p), We(t, e), (pe = a))
                    : We(t, e),
                et(e),
                r & 8192)
            ) {
                if (
                    ((a = e.memoizedState !== null),
                    (e.stateNode.isHidden = a) && !p && e.mode & 1)
                )
                    for (L = e, p = e.child; p !== null; ) {
                        for (d = L = p; L !== null; ) {
                            switch (((f = L), (v = f.child), f.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ir(4, f, f.return);
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
                                            Z(r, n, g);
                                        }
                                    }
                                    break;
                                case 5:
                                    vn(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Tu(d);
                                        continue;
                                    }
                            }
                            v !== null ? ((v.return = f), (L = v)) : Tu(d);
                        }
                        p = p.sibling;
                    }
                e: for (p = null, d = e; ; ) {
                    if (d.tag === 5) {
                        if (p === null) {
                            p = d;
                            try {
                                (o = d.stateNode),
                                    a
                                        ? ((i = o.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (i.display = "none"))
                                        : ((s = d.stateNode),
                                          (u = d.memoizedProps.style),
                                          (l =
                                              u != null &&
                                              u.hasOwnProperty("display")
                                                  ? u.display
                                                  : null),
                                          (s.style.display = ya("display", l)));
                            } catch (g) {
                                Z(e, e.return, g);
                            }
                        }
                    } else if (d.tag === 6) {
                        if (p === null)
                            try {
                                d.stateNode.nodeValue = a
                                    ? ""
                                    : d.memoizedProps;
                            } catch (g) {
                                Z(e, e.return, g);
                            }
                    } else if (
                        ((d.tag !== 22 && d.tag !== 23) ||
                            d.memoizedState === null ||
                            d === e) &&
                        d.child !== null
                    ) {
                        (d.child.return = d), (d = d.child);
                        continue;
                    }
                    if (d === e) break e;
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === e) break e;
                        p === d && (p = null), (d = d.return);
                    }
                    p === d && (p = null),
                        (d.sibling.return = d.return),
                        (d = d.sibling);
                }
            }
            break;
        case 19:
            We(t, e), et(e), r & 4 && Ru(e);
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
                    if (Hc(n)) {
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
                    r.flags & 32 && (dr(o, ""), (r.flags &= -33));
                    var i = Lu(e);
                    Cl(e, i, o);
                    break;
                case 3:
                case 4:
                    var l = r.stateNode.containerInfo,
                        s = Lu(e);
                    El(e, s, l);
                    break;
                default:
                    throw Error(k(161));
            }
        } catch (u) {
            Z(e, e.return, u);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function jp(e, t, n) {
    (L = e), Kc(e);
}
function Kc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
        var o = L,
            i = o.child;
        if (o.tag === 22 && r) {
            var l = o.memoizedState !== null || Kr;
            if (!l) {
                var s = o.alternate,
                    u = (s !== null && s.memoizedState !== null) || pe;
                s = Kr;
                var a = pe;
                if (((Kr = l), (pe = u) && !a))
                    for (L = o; L !== null; )
                        (l = L),
                            (u = l.child),
                            l.tag === 22 && l.memoizedState !== null
                                ? Nu(o)
                                : u !== null
                                ? ((u.return = l), (L = u))
                                : Nu(o);
                for (; i !== null; ) (L = i), Kc(i), (i = i.sibling);
                (L = o), (Kr = s), (pe = a);
            }
            Mu(e);
        } else
            o.subtreeFlags & 8772 && i !== null
                ? ((i.return = o), (L = i))
                : Mu(e);
    }
}
function Mu(e) {
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
                            pe || Yo(5, t);
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
                            i !== null && pu(t, i, r);
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
                                pu(t, l, n);
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
                                    var p = a.memoizedState;
                                    if (p !== null) {
                                        var d = p.dehydrated;
                                        d !== null && mr(d);
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
                Z(t, t.return, f);
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
function Tu(e) {
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
                        Yo(4, t);
                    } catch (u) {
                        Z(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            Z(t, o, u);
                        }
                    }
                    var i = t.return;
                    try {
                        kl(t);
                    } catch (u) {
                        Z(t, i, u);
                    }
                    break;
                case 5:
                    var l = t.return;
                    try {
                        kl(t);
                    } catch (u) {
                        Z(t, l, u);
                    }
            }
        } catch (u) {
            Z(t, t.return, u);
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
var Dp = Math.ceil,
    Mo = vt.ReactCurrentDispatcher,
    fs = vt.ReactCurrentOwner,
    Be = vt.ReactCurrentBatchConfig,
    $ = 0,
    ie = null,
    ee = null,
    ue = 0,
    Me = 0,
    yn = jt(0),
    re = 0,
    Pr = null,
    Jt = 0,
    Xo = 0,
    ps = 0,
    lr = null,
    ke = null,
    hs = 0,
    zn = 1 / 0,
    st = null,
    To = !1,
    xl = null,
    Mt = null,
    Yr = !1,
    Et = null,
    No = 0,
    sr = 0,
    Pl = null,
    io = -1,
    lo = 0;
function ye() {
    return $ & 6 ? q() : io !== -1 ? io : (io = q());
}
function Tt(e) {
    return e.mode & 1
        ? $ & 2 && ue !== 0
            ? ue & -ue
            : wp.transition !== null
            ? (lo === 0 && (lo = Ta()), lo)
            : ((e = U),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : Da(e.type))),
              e)
        : 1;
}
function Ge(e, t, n, r) {
    if (50 < sr) throw ((sr = 0), (Pl = null), Error(k(185)));
    Rr(e, n, r),
        (!($ & 2) || e !== ie) &&
            (e === ie && (!($ & 2) && (Xo |= n), re === 4 && _t(e, ue)),
            Pe(e, r),
            n === 1 &&
                $ === 0 &&
                !(t.mode & 1) &&
                ((zn = q() + 500), Wo && Dt()));
}
function Pe(e, t) {
    var n = e.callbackNode;
    wf(e, t);
    var r = ho(e, e === ie ? ue : 0);
    if (r === 0)
        n !== null && Bs(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Bs(n), t === 1))
            e.tag === 0 ? Sp(zu.bind(null, e)) : nc(zu.bind(null, e)),
                mp(function () {
                    !($ & 6) && Dt();
                }),
                (n = null);
        else {
            switch (Na(r)) {
                case 1:
                    n = Bl;
                    break;
                case 4:
                    n = Ra;
                    break;
                case 16:
                    n = po;
                    break;
                case 536870912:
                    n = Ma;
                    break;
                default:
                    n = po;
            }
            n = ed(n, Yc.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Yc(e, t) {
    if (((io = -1), (lo = 0), $ & 6)) throw Error(k(327));
    var n = e.callbackNode;
    if (Cn() && e.callbackNode !== n) return null;
    var r = ho(e, e === ie ? ue : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = zo(e, r);
    else {
        t = r;
        var o = $;
        $ |= 2;
        var i = Gc();
        (ie !== e || ue !== t) && ((st = null), (zn = q() + 500), Kt(e, t));
        do
            try {
                Bp();
                break;
            } catch (s) {
                Xc(e, s);
            }
        while (!0);
        bl(),
            (Mo.current = i),
            ($ = o),
            ee !== null ? (t = 0) : ((ie = null), (ue = 0), (t = re));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((o = bi(e)), o !== 0 && ((r = o), (t = Ll(e, o)))),
            t === 1)
        )
            throw ((n = Pr), Kt(e, 0), _t(e, r), Pe(e, q()), n);
        if (t === 6) _t(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !$p(o) &&
                    ((t = zo(e, r)),
                    t === 2 &&
                        ((i = bi(e)), i !== 0 && ((r = i), (t = Ll(e, i)))),
                    t === 1))
            )
                throw ((n = Pr), Kt(e, 0), _t(e, r), Pe(e, q()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(k(345));
                case 2:
                    Bt(e, ke, st);
                    break;
                case 3:
                    if (
                        (_t(e, r),
                        (r & 130023424) === r && ((t = hs + 500 - q()), 10 < t))
                    ) {
                        if (ho(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            ye(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = sl(Bt.bind(null, e, ke, st), t);
                        break;
                    }
                    Bt(e, ke, st);
                    break;
                case 4:
                    if ((_t(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var l = 31 - Xe(r);
                        (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
                    }
                    if (
                        ((r = o),
                        (r = q() - r),
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
                                : 1960 * Dp(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = sl(Bt.bind(null, e, ke, st), r);
                        break;
                    }
                    Bt(e, ke, st);
                    break;
                case 5:
                    Bt(e, ke, st);
                    break;
                default:
                    throw Error(k(329));
            }
        }
    }
    return Pe(e, q()), e.callbackNode === n ? Yc.bind(null, e) : null;
}
function Ll(e, t) {
    var n = lr;
    return (
        e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256),
        (e = zo(e, t)),
        e !== 2 && ((t = ke), (ke = n), t !== null && Rl(t)),
        e
    );
}
function Rl(e) {
    ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function $p(e) {
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
            t &= ~Xo,
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
function zu(e) {
    if ($ & 6) throw Error(k(327));
    Cn();
    var t = ho(e, 0);
    if (!(t & 1)) return Pe(e, q()), null;
    var n = zo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = bi(e);
        r !== 0 && ((t = r), (n = Ll(e, r)));
    }
    if (n === 1) throw ((n = Pr), Kt(e, 0), _t(e, t), Pe(e, q()), n);
    if (n === 6) throw Error(k(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Bt(e, ke, st),
        Pe(e, q()),
        null
    );
}
function ms(e, t) {
    var n = $;
    $ |= 1;
    try {
        return e(t);
    } finally {
        ($ = n), $ === 0 && ((zn = q() + 500), Wo && Dt());
    }
}
function qt(e) {
    Et !== null && Et.tag === 0 && !($ & 6) && Cn();
    var t = $;
    $ |= 1;
    var n = Be.transition,
        r = U;
    try {
        if (((Be.transition = null), (U = 1), e)) return e();
    } finally {
        (U = r), (Be.transition = n), ($ = t), !($ & 6) && Dt();
    }
}
function vs() {
    (Me = yn.current), W(yn);
}
function Kt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), hp(n)), ee !== null))
        for (n = ee.return; n !== null; ) {
            var r = n;
            switch ((Zl(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && So();
                    break;
                case 3:
                    Tn(), W(Ce), W(he), is();
                    break;
                case 5:
                    os(r);
                    break;
                case 4:
                    Tn();
                    break;
                case 13:
                    W(Y);
                    break;
                case 19:
                    W(Y);
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
        (ee = e = Nt(e.current, null)),
        (ue = Me = t),
        (re = 0),
        (Pr = null),
        (ps = Xo = Jt = 0),
        (ke = lr = null),
        Ht !== null)
    ) {
        for (t = 0; t < Ht.length; t++)
            if (((n = Ht[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var l = i.next;
                    (i.next = o), (r.next = l);
                }
                n.pending = r;
            }
        Ht = null;
    }
    return e;
}
function Xc(e, t) {
    do {
        var n = ee;
        try {
            if ((bl(), (no.current = Ro), Lo)) {
                for (var r = X.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                Lo = !1;
            }
            if (
                ((Zt = 0),
                (oe = ne = X = null),
                (or = !1),
                (Er = 0),
                (fs.current = null),
                n === null || n.return === null)
            ) {
                (re = 1), (Pr = t), (ee = null);
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
                        p = s,
                        d = p.tag;
                    if (!(p.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = p.alternate;
                        f
                            ? ((p.updateQueue = f.updateQueue),
                              (p.memoizedState = f.memoizedState),
                              (p.lanes = f.lanes))
                            : ((p.updateQueue = null),
                              (p.memoizedState = null));
                    }
                    var v = Su(l);
                    if (v !== null) {
                        (v.flags &= -257),
                            wu(v, l, s, i, t),
                            v.mode & 1 && gu(i, a, t),
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
                            gu(i, a, t), ys();
                            break e;
                        }
                        u = Error(k(426));
                    }
                } else if (Q && s.mode & 1) {
                    var C = Su(l);
                    if (C !== null) {
                        !(C.flags & 65536) && (C.flags |= 256),
                            wu(C, l, s, i, t),
                            Jl(Nn(u, s));
                        break e;
                    }
                }
                (i = u = Nn(u, s)),
                    re !== 4 && (re = 2),
                    lr === null ? (lr = [i]) : lr.push(i),
                    (i = l);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var h = Nc(i, u, t);
                            fu(i, h);
                            break e;
                        case 1:
                            s = u;
                            var c = i.type,
                                m = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof c.getDerivedStateFromError ==
                                    "function" ||
                                    (m !== null &&
                                        typeof m.componentDidCatch ==
                                            "function" &&
                                        (Mt === null || !Mt.has(m))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var S = zc(i, s, t);
                                fu(i, S);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            Jc(n);
        } catch (x) {
            (t = x), ee === n && n !== null && (ee = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function Gc() {
    var e = Mo.current;
    return (Mo.current = Ro), e === null ? Ro : e;
}
function ys() {
    (re === 0 || re === 3 || re === 2) && (re = 4),
        ie === null || (!(Jt & 268435455) && !(Xo & 268435455)) || _t(ie, ue);
}
function zo(e, t) {
    var n = $;
    $ |= 2;
    var r = Gc();
    (ie !== e || ue !== t) && ((st = null), Kt(e, t));
    do
        try {
            Up();
            break;
        } catch (o) {
            Xc(e, o);
        }
    while (!0);
    if ((bl(), ($ = n), (Mo.current = r), ee !== null)) throw Error(k(261));
    return (ie = null), (ue = 0), re;
}
function Up() {
    for (; ee !== null; ) Zc(ee);
}
function Bp() {
    for (; ee !== null && !df(); ) Zc(ee);
}
function Zc(e) {
    var t = bc(e.alternate, e, Me);
    (e.memoizedProps = e.pendingProps),
        t === null ? Jc(e) : (ee = t),
        (fs.current = null);
}
function Jc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Ip(n, t)), n !== null)) {
                (n.flags &= 32767), (ee = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (re = 6), (ee = null);
                return;
            }
        } else if (((n = zp(n, t, Me)), n !== null)) {
            ee = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            ee = t;
            return;
        }
        ee = t = e;
    } while (t !== null);
    re === 0 && (re = 5);
}
function Bt(e, t, n) {
    var r = U,
        o = Be.transition;
    try {
        (Be.transition = null), (U = 1), Ap(e, t, n, r);
    } finally {
        (Be.transition = o), (U = r);
    }
    return null;
}
function Ap(e, t, n, r) {
    do Cn();
    while (Et !== null);
    if ($ & 6) throw Error(k(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(k(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (_f(e, i),
        e === ie && ((ee = ie = null), (ue = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Yr ||
            ((Yr = !0),
            ed(po, function () {
                return Cn(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = Be.transition), (Be.transition = null);
        var l = U;
        U = 1;
        var s = $;
        ($ |= 4),
            (fs.current = null),
            Fp(e, n),
            Qc(n, e),
            sp(il),
            (mo = !!ol),
            (il = ol = null),
            (e.current = n),
            jp(n),
            ff(),
            ($ = s),
            (U = l),
            (Be.transition = i);
    } else e.current = n;
    if (
        (Yr && ((Yr = !1), (Et = e), (No = o)),
        (i = e.pendingLanes),
        i === 0 && (Mt = null),
        mf(n.stateNode),
        Pe(e, q()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]),
                r(o.value, { componentStack: o.stack, digest: o.digest });
    if (To) throw ((To = !1), (e = xl), (xl = null), e);
    return (
        No & 1 && e.tag !== 0 && Cn(),
        (i = e.pendingLanes),
        i & 1 ? (e === Pl ? sr++ : ((sr = 0), (Pl = e))) : (sr = 0),
        Dt(),
        null
    );
}
function Cn() {
    if (Et !== null) {
        var e = Na(No),
            t = Be.transition,
            n = U;
        try {
            if (((Be.transition = null), (U = 16 > e ? 16 : e), Et === null))
                var r = !1;
            else {
                if (((e = Et), (Et = null), (No = 0), $ & 6))
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
                                    var p = L;
                                    switch (p.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ir(8, p, i);
                                    }
                                    var d = p.child;
                                    if (d !== null) (d.return = p), (L = d);
                                    else
                                        for (; L !== null; ) {
                                            p = L;
                                            var f = p.sibling,
                                                v = p.return;
                                            if ((Vc(p), p === a)) {
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
                                        var C = g.sibling;
                                        (g.sibling = null), (g = C);
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
                                        ir(9, i, i.return);
                                }
                            var h = i.sibling;
                            if (h !== null) {
                                (h.return = i.return), (L = h);
                                break e;
                            }
                            L = i.return;
                        }
                }
                var c = e.current;
                for (L = c; L !== null; ) {
                    l = L;
                    var m = l.child;
                    if (l.subtreeFlags & 2064 && m !== null)
                        (m.return = l), (L = m);
                    else
                        e: for (l = c; L !== null; ) {
                            if (((s = L), s.flags & 2048))
                                try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Yo(9, s);
                                    }
                                } catch (x) {
                                    Z(s, s.return, x);
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
                    Dt(),
                    ot && typeof ot.onPostCommitFiberRoot == "function")
                )
                    try {
                        ot.onPostCommitFiberRoot(Uo, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (U = n), (Be.transition = t);
        }
    }
    return !1;
}
function Iu(e, t, n) {
    (t = Nn(n, t)),
        (t = Nc(e, t, 1)),
        (e = Rt(e, t, 1)),
        (t = ye()),
        e !== null && (Rr(e, 1, t), Pe(e, t));
}
function Z(e, t, n) {
    if (e.tag === 3) Iu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Iu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (Mt === null || !Mt.has(r)))
                ) {
                    (e = Nn(n, e)),
                        (e = zc(t, e, 1)),
                        (t = Rt(t, e, 1)),
                        (e = ye()),
                        t !== null && (Rr(t, 1, e), Pe(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Vp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = ye()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ie === e &&
            (ue & n) === n &&
            (re === 4 || (re === 3 && (ue & 130023424) === ue && 500 > q() - hs)
                ? Kt(e, 0)
                : (ps |= n)),
        Pe(e, t);
}
function qc(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = Dr), (Dr <<= 1), !(Dr & 130023424) && (Dr = 4194304))
            : (t = 1));
    var n = ye();
    (e = ht(e, t)), e !== null && (Rr(e, t, n), Pe(e, n));
}
function Hp(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), qc(e, n);
}
function Wp(e, t) {
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
    r !== null && r.delete(t), qc(e, n);
}
var bc;
bc = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ce.current) Ee = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (Ee = !1), Np(e, t, n);
            Ee = !!(e.flags & 131072);
        }
    else (Ee = !1), Q && t.flags & 1048576 && rc(t, ko, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            oo(e, t), (e = t.pendingProps);
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
                      xe(r) ? ((i = !0), wo(t)) : (i = !1),
                      (t.memoizedState =
                          o.state !== null && o.state !== void 0
                              ? o.state
                              : null),
                      ns(t),
                      (o.updater = Ko),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      hl(t, r, e, n),
                      (t = yl(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      Q && i && Gl(t),
                      ve(null, t, o, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (oo(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = Kp(r)),
                    (e = Qe(r, e)),
                    o)
                ) {
                    case 0:
                        t = vl(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Eu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = _u(null, t, r, e, n);
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
                vl(e, t, r, o, n)
            );
        case 1:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Qe(r, o)),
                Eu(e, t, r, o, n)
            );
        case 3:
            e: {
                if ((jc(t), e === null)) throw Error(k(387));
                (r = t.pendingProps),
                    (i = t.memoizedState),
                    (o = i.element),
                    ac(e, t),
                    xo(t, r, null, n);
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
                        (o = Nn(Error(k(423)), t)), (t = Cu(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = Nn(Error(k(424)), t)), (t = Cu(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            Ne = Lt(t.stateNode.containerInfo.firstChild),
                                ze = t,
                                Q = !0,
                                Ye = null,
                                n = sc(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Rn(), r === o)) {
                        t = mt(e, t, n);
                        break e;
                    }
                    ve(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                cc(t),
                e === null && dl(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (l = o.children),
                ll(r, o)
                    ? (l = null)
                    : i !== null && ll(r, i) && (t.flags |= 32),
                Fc(e, t),
                ve(e, t, l, n),
                t.child
            );
        case 6:
            return e === null && dl(t), null;
        case 13:
            return Dc(e, t, n);
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
                _u(e, t, r, o, n)
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
                    V(Eo, r._currentValue),
                    (r._currentValue = l),
                    i !== null)
                )
                    if (Ze(i.value, l)) {
                        if (i.children === o.children && !Ce.current) {
                            t = mt(e, t, n);
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
                                            (u = dt(-1, n & -n)), (u.tag = 2);
                                            var a = i.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var p = a.pending;
                                                p === null
                                                    ? (u.next = u)
                                                    : ((u.next = p.next),
                                                      (p.next = u)),
                                                    (a.pending = u);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (u = i.alternate),
                                            u !== null && (u.lanes |= n),
                                            fl(i.return, n, t),
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
                                    fl(l, n, t),
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
            return Ic(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Qe(r, o)),
                oo(e, t),
                (t.tag = 1),
                xe(r) ? ((e = !0), wo(t)) : (e = !1),
                En(t, n),
                Tc(t, r, o),
                hl(t, r, o, n),
                yl(null, t, r, !0, e, n)
            );
        case 19:
            return $c(e, t, n);
        case 22:
            return Oc(e, t, n);
    }
    throw Error(k(156, t.tag));
};
function ed(e, t) {
    return La(e, t);
}
function Qp(e, t, n, r) {
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
    return new Qp(e, t, n, r);
}
function gs(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Kp(e) {
    if (typeof e == "function") return gs(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Dl)) return 11;
        if (e === $l) return 14;
    }
    return 2;
}
function Nt(e, t) {
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
function so(e, t, n, r, o, i) {
    var l = 2;
    if (((r = e), typeof e == "function")) gs(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else
        e: switch (e) {
            case sn:
                return Yt(n.children, o, i, t);
            case jl:
                (l = 8), (o |= 8);
                break;
            case $i:
                return (
                    (e = Ue(12, n, t, o | 2)),
                    (e.elementType = $i),
                    (e.lanes = i),
                    e
                );
            case Ui:
                return (
                    (e = Ue(13, n, t, o)),
                    (e.elementType = Ui),
                    (e.lanes = i),
                    e
                );
            case Bi:
                return (
                    (e = Ue(19, n, t, o)),
                    (e.elementType = Bi),
                    (e.lanes = i),
                    e
                );
            case ca:
                return Go(n, o, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case ua:
                            l = 10;
                            break e;
                        case aa:
                            l = 9;
                            break e;
                        case Dl:
                            l = 11;
                            break e;
                        case $l:
                            l = 14;
                            break e;
                        case gt:
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
function Yt(e, t, n, r) {
    return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function Go(e, t, n, r) {
    return (
        (e = Ue(22, e, r, t)),
        (e.elementType = ca),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Ti(e, t, n) {
    return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function Ni(e, t, n) {
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
function Yp(e, t, n, r, o) {
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
        (this.eventTimes = di(0)),
        (this.expirationTimes = di(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = di(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function Ss(e, t, n, r, o, i, l, s, u) {
    return (
        (e = new Yp(e, t, n, s, u)),
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
function Xp(e, t, n) {
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
function td(e) {
    if (!e) return Ot;
    e = e._reactInternals;
    e: {
        if (en(e) !== e || e.tag !== 1) throw Error(k(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (xe(t.type)) {
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
        if (xe(n)) return tc(e, n, t);
    }
    return t;
}
function nd(e, t, n, r, o, i, l, s, u) {
    return (
        (e = Ss(n, r, !0, e, o, i, l, s, u)),
        (e.context = td(null)),
        (n = e.current),
        (r = ye()),
        (o = Tt(n)),
        (i = dt(r, o)),
        (i.callback = t ?? null),
        Rt(n, i, o),
        (e.current.lanes = o),
        Rr(e, o, r),
        Pe(e, r),
        e
    );
}
function Zo(e, t, n, r) {
    var o = t.current,
        i = ye(),
        l = Tt(o);
    return (
        (n = td(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = dt(i, l)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Rt(o, t, l)),
        e !== null && (Ge(e, o, l, i), to(e, o, l)),
        l
    );
}
function Io(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Ou(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function ws(e, t) {
    Ou(e, t), (e = e.alternate) && Ou(e, t);
}
function Gp() {
    return null;
}
var rd =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function _s(e) {
    this._internalRoot = e;
}
Jo.prototype.render = _s.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    Zo(e, t, null, null);
};
Jo.prototype.unmount = _s.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        qt(function () {
            Zo(null, e, null, null);
        }),
            (t[pt] = null);
    }
};
function Jo(e) {
    this._internalRoot = e;
}
Jo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Oa();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++);
        wt.splice(n, 0, e), n === 0 && ja(e);
    }
};
function ks(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qo(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Fu() {}
function Zp(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var a = Io(l);
                i.call(a);
            };
        }
        var l = nd(t, r, e, 0, null, !1, !1, "", Fu);
        return (
            (e._reactRootContainer = l),
            (e[pt] = l.current),
            gr(e.nodeType === 8 ? e.parentNode : e),
            qt(),
            l
        );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function () {
            var a = Io(u);
            s.call(a);
        };
    }
    var u = Ss(e, 0, !1, null, null, !1, !1, "", Fu);
    return (
        (e._reactRootContainer = u),
        (e[pt] = u.current),
        gr(e.nodeType === 8 ? e.parentNode : e),
        qt(function () {
            Zo(t, u, n, r);
        }),
        u
    );
}
function bo(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var l = i;
        if (typeof o == "function") {
            var s = o;
            o = function () {
                var u = Io(l);
                s.call(u);
            };
        }
        Zo(t, l, e, o);
    } else l = Zp(n, t, e, o, r);
    return Io(l);
}
za = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Jn(t.pendingLanes);
                n !== 0 &&
                    (Al(t, n | 1),
                    Pe(t, q()),
                    !($ & 6) && ((zn = q() + 500), Dt()));
            }
            break;
        case 13:
            qt(function () {
                var r = ht(e, 1);
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
        var t = ht(e, 134217728);
        if (t !== null) {
            var n = ye();
            Ge(t, e, 134217728, n);
        }
        ws(e, 134217728);
    }
};
Ia = function (e) {
    if (e.tag === 13) {
        var t = Tt(e),
            n = ht(e, t);
        if (n !== null) {
            var r = ye();
            Ge(n, e, t, r);
        }
        ws(e, t);
    }
};
Oa = function () {
    return U;
};
Fa = function (e, t) {
    var n = U;
    try {
        return (U = e), t();
    } finally {
        U = n;
    }
};
Zi = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Hi(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
                        var o = Ho(r);
                        if (!o) throw Error(k(90));
                        fa(r), Hi(r, o);
                    }
                }
            }
            break;
        case "textarea":
            ha(e, n);
            break;
        case "select":
            (t = n.value), t != null && Sn(e, !!n.multiple, t, !1);
    }
};
_a = ms;
ka = qt;
var Jp = { usingClientEntryPoint: !1, Events: [Tr, dn, Ho, Sa, wa, ms] },
    Xn = {
        findFiberByHostInstance: Vt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
    },
    qp = {
        bundleType: Xn.bundleType,
        version: Xn.version,
        rendererPackageName: Xn.rendererPackageName,
        rendererConfig: Xn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: vt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = xa(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Xn.findFiberByHostInstance || Gp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xr.isDisabled && Xr.supportsFiber)
        try {
            (Uo = Xr.inject(qp)), (ot = Xr);
        } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jp;
Oe.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ks(t)) throw Error(k(200));
    return Xp(e, t, null, n);
};
Oe.createRoot = function (e, t) {
    if (!ks(e)) throw Error(k(299));
    var n = !1,
        r = "",
        o = rd;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = Ss(e, 1, !1, null, null, n, !1, r, o)),
        (e[pt] = t.current),
        gr(e.nodeType === 8 ? e.parentNode : e),
        new _s(t)
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
    return (e = xa(t)), (e = e === null ? null : e.stateNode), e;
};
Oe.flushSync = function (e) {
    return qt(e);
};
Oe.hydrate = function (e, t, n) {
    if (!qo(t)) throw Error(k(200));
    return bo(null, e, t, !0, n);
};
Oe.hydrateRoot = function (e, t, n) {
    if (!ks(e)) throw Error(k(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        l = rd;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (t = nd(t, null, e, 1, n ?? null, o, !1, i, l)),
        (e[pt] = t.current),
        gr(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new Jo(t);
};
Oe.render = function (e, t, n) {
    if (!qo(t)) throw Error(k(200));
    return bo(null, e, t, !1, n);
};
Oe.unmountComponentAtNode = function (e) {
    if (!qo(e)) throw Error(k(40));
    return e._reactRootContainer
        ? (qt(function () {
              bo(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pt] = null);
              });
          }),
          !0)
        : !1;
};
Oe.unstable_batchedUpdates = ms;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!qo(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return bo(e, t, n, !1, r);
};
Oe.version = "18.3.1-next-f1338f8080-20240426";
function od() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(od);
        } catch (e) {
            console.error(e);
        }
}
od(), (oa.exports = Oe);
var id = oa.exports,
    ld,
    ju = id;
(ld = ju.createRoot), ju.hydrateRoot;
const Du = "pushstate",
    $u = "popstate",
    sd = "beforeunload",
    ud = (e) => (e.preventDefault(), (e.returnValue = "")),
    bp = () => {
        removeEventListener(sd, ud, { capture: !0 });
    };
function ad(e) {
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
                for (const p of r)
                    if (!(await p())) {
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
            (s = ur(s)),
                i(() => {
                    e.pushState(l, s), o();
                }, u);
        },
        replace: (l, s, u) => {
            (s = ur(s)),
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
            r.length === 1 && addEventListener(sd, ud, { capture: !0 }),
            () => {
                (r = r.filter((s) => s !== l)), r.length || bp();
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
function ur(e) {
    return e || (e = {}), { ...e, key: cd() };
}
function eh(e) {
    const t = typeof document < "u" ? window : void 0,
        n = t.history.pushState,
        r = t.history.replaceState,
        o = (g) => g,
        i = () =>
            Oo(
                `${t.location.pathname}${t.location.search}${t.location.hash}`,
                t.history.state
            );
    let l = i(),
        s;
    const u = () => l;
    let a, p;
    const d = () => {
            if (!a) return;
            (a.isPush ? n : r).call(t.history, a.state, "", a.href),
                (a = void 0),
                (p = void 0),
                (s = void 0);
        },
        f = (g, C, h) => {
            const c = o(C);
            p || (s = l),
                (l = Oo(C, h)),
                (a = {
                    href: c,
                    state: h,
                    isPush: (a == null ? void 0 : a.isPush) || g === "push",
                }),
                p || (p = Promise.resolve().then(() => d()));
        },
        v = () => {
            (l = i()), y.notify();
        },
        y = ad({
            getLocation: u,
            pushState: (g, C) => f("push", g, C),
            replaceState: (g, C) => f("replace", g, C),
            back: () => t.history.back(),
            forward: () => t.history.forward(),
            go: (g) => t.history.go(g),
            createHref: (g) => o(g),
            flush: d,
            destroy: () => {
                (t.history.pushState = n),
                    (t.history.replaceState = r),
                    t.removeEventListener(Du, v),
                    t.removeEventListener($u, v);
            },
            onBlocked: (g) => {
                s && l !== s && ((l = s), g());
            },
        });
    return (
        t.addEventListener(Du, v),
        t.addEventListener($u, v),
        (t.history.pushState = function (...g) {
            const C = n.apply(t.history, g);
            return v(), C;
        }),
        (t.history.replaceState = function (...g) {
            const C = r.apply(t.history, g);
            return v(), C;
        }),
        y
    );
}
function th(e = { initialEntries: ["/"] }) {
    const t = e.initialEntries;
    let n = e.initialIndex ?? t.length - 1,
        r = { key: cd() };
    return ad({
        getLocation: () => Oo(t[n], r),
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
            (r = ur(r)), (n = Math.max(n - 1, 0));
        },
        forward: () => {
            (r = ur(r)), (n = Math.min(n + 1, t.length - 1));
        },
        go: (i) => {
            (r = ur(r)), (n = Math.min(Math.max(n + i, 0), t.length - 1));
        },
        createHref: (i) => i,
    });
}
function Oo(e, t) {
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
function cd() {
    return (Math.random() + 1).toString(36).substring(7);
}
var nh = "Invariant failed";
function _e(e, t) {
    if (!e) throw new Error(nh);
}
const zi = O.createContext(null);
function dd() {
    return typeof document > "u"
        ? zi
        : window.__TSR_ROUTER_CONTEXT__
        ? window.__TSR_ROUTER_CONTEXT__
        : ((window.__TSR_ROUTER_CONTEXT__ = zi), zi);
}
function $t(e) {
    const t = O.useContext(dd());
    return e == null || e.warn, t;
}
var fd = { exports: {} },
    pd = {},
    hd = { exports: {} },
    md = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var In = O;
function rh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var oh = typeof Object.is == "function" ? Object.is : rh,
    ih = In.useState,
    lh = In.useEffect,
    sh = In.useLayoutEffect,
    uh = In.useDebugValue;
function ah(e, t) {
    var n = t(),
        r = ih({ inst: { value: n, getSnapshot: t } }),
        o = r[0].inst,
        i = r[1];
    return (
        sh(
            function () {
                (o.value = n), (o.getSnapshot = t), Ii(o) && i({ inst: o });
            },
            [e, n, t]
        ),
        lh(
            function () {
                return (
                    Ii(o) && i({ inst: o }),
                    e(function () {
                        Ii(o) && i({ inst: o });
                    })
                );
            },
            [e]
        ),
        uh(n),
        n
    );
}
function Ii(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !oh(e, n);
    } catch {
        return !0;
    }
}
function ch(e, t) {
    return t();
}
var dh =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
        ? ch
        : ah;
md.useSyncExternalStore =
    In.useSyncExternalStore !== void 0 ? In.useSyncExternalStore : dh;
hd.exports = md;
var fh = hd.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ei = O,
    ph = fh;
function hh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var mh = typeof Object.is == "function" ? Object.is : hh,
    vh = ph.useSyncExternalStore,
    yh = ei.useRef,
    gh = ei.useEffect,
    Sh = ei.useMemo,
    wh = ei.useDebugValue;
pd.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
    var i = yh(null);
    if (i.current === null) {
        var l = { hasValue: !1, value: null };
        i.current = l;
    } else l = i.current;
    i = Sh(
        function () {
            function u(v) {
                if (!a) {
                    if (
                        ((a = !0),
                        (p = v),
                        (v = r(v)),
                        o !== void 0 && l.hasValue)
                    ) {
                        var y = l.value;
                        if (o(y, v)) return (d = y);
                    }
                    return (d = v);
                }
                if (((y = d), mh(p, v))) return y;
                var g = r(v);
                return o !== void 0 && o(y, g) ? y : ((p = v), (d = g));
            }
            var a = !1,
                p,
                d,
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
    var s = vh(e, i[0], i[1]);
    return (
        gh(
            function () {
                (l.hasValue = !0), (l.value = s);
            },
            [s]
        ),
        wh(s),
        s
    );
};
fd.exports = pd;
var _h = fd.exports;
class kh {
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
function Eh(e, t = (n) => n) {
    return _h.useSyncExternalStoreWithSelector(
        e.subscribe,
        () => e.state,
        () => e.state,
        t,
        Ch
    );
}
function Ch(e, t) {
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
const Te = "__root__";
function xh(e, t) {
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
function Uu(e) {
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
function Ph(e, t) {
    let n, r;
    const o = {},
        i = e.split("&");
    for (; (n = i.shift()); ) {
        const l = n.indexOf("=");
        if (l !== -1) {
            r = n.slice(0, l);
            const s = n.slice(l + 1);
            o[r] !== void 0 ? (o[r] = [].concat(o[r], Uu(s))) : (o[r] = Uu(s));
        } else (r = n), (o[r] = "");
    }
    return o;
}
const Lh = Mh(JSON.parse),
    Rh = Th(JSON.stringify, JSON.parse);
function Mh(e) {
    return (t) => {
        t.substring(0, 1) === "?" && (t = t.substring(1));
        const n = Ph(t);
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
function Th(e, t) {
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
        const o = xh(r).toString();
        return o ? `?${o}` : "";
    };
}
function Fo(e) {
    return e[e.length - 1];
}
function Nh(e) {
    return typeof e == "function";
}
function gn(e, t) {
    return Nh(e) ? e(t) : e;
}
function ar(e, t) {
    return t.reduce((n, r) => ((n[r] = e[r]), n), {});
}
function rn(e, t) {
    if (e === t) return e;
    const n = t,
        r = Au(e) && Au(n);
    if (r || (On(e) && On(n))) {
        const o = r ? e : Object.keys(e),
            i = o.length,
            l = r ? n : Object.keys(n),
            s = l.length,
            u = r ? [] : {};
        let a = 0;
        for (let p = 0; p < s; p++) {
            const d = r ? p : l[p];
            ((!r && o.includes(d)) || r) && e[d] === void 0 && n[d] === void 0
                ? ((u[d] = void 0), a++)
                : ((u[d] = rn(e[d], n[d])),
                  u[d] === e[d] && e[d] !== void 0 && a++);
        }
        return i === s && a === i ? e : u;
    }
    return n;
}
function On(e) {
    if (!Bu(e)) return !1;
    const t = e.constructor;
    if (typeof t > "u") return !0;
    const n = t.prototype;
    return !(!Bu(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Bu(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function Au(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
}
function xn(e, t, n = !1) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (On(e) && On(t)) {
        const r = Object.keys(e).filter((i) => e[i] !== void 0),
            o = Object.keys(t).filter((i) => t[i] !== void 0);
        return !n && r.length !== o.length
            ? !1
            : !o.some((i) => !(i in e) || !xn(e[i], t[i], n));
    }
    return Array.isArray(e) && Array.isArray(t)
        ? e.length !== t.length
            ? !1
            : !e.some((r, o) => !xn(r, t[o], n))
        : !1;
}
const Oi = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
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
function Vu(e) {
    const t = O.useRef({ value: e, prev: null }),
        n = t.current.value;
    return e !== n && (t.current = { value: e, prev: n }), t.current.prev;
}
function zh(e, t, n = {}, r = {}) {
    const o = O.useRef(typeof IntersectionObserver == "function"),
        i = O.useRef(null);
    return (
        O.useEffect(() => {
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
function Ih(e) {
    const t = O.useRef(null);
    return (
        O.useEffect(() => {
            e &&
                (typeof e == "function"
                    ? e(t.current)
                    : (e.current = t.current));
        }),
        t
    );
}
function zt(e) {
    return ti(e.filter((t) => t !== void 0).join("/"));
}
function ti(e) {
    return e.replace(/\/{2,}/g, "/");
}
function Es(e) {
    return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function Qt(e) {
    return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function Oh(e) {
    return Qt(Es(e));
}
function jo(e, t) {
    return e.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function Fh(e, t, n) {
    return jo(e, n) === jo(t, n);
}
function jh({ basepath: e, base: t, to: n, trailingSlash: r = "never" }) {
    var o, i;
    (t = Do(e, t)), (n = Do(e, n));
    let l = Fn(t);
    const s = Fn(n);
    l.length > 1 && ((o = Fo(l)) == null ? void 0 : o.value) === "/" && l.pop(),
        s.forEach((a, p) => {
            a.value === "/"
                ? p
                    ? p === s.length - 1 && l.push(a)
                    : (l = [a])
                : a.value === ".."
                ? l.pop()
                : a.value === "." || l.push(a);
        }),
        l.length > 1 &&
            (((i = Fo(l)) == null ? void 0 : i.value) === "/"
                ? r === "never" && l.pop()
                : r === "always" && l.push({ type: "pathname", value: "/" }));
    const u = zt([e, ...l.map((a) => a.value)]);
    return ti(u);
}
function Fn(e) {
    if (!e) return [];
    e = ti(e);
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
function Fi({ path: e, params: t, leaveWildcards: n, leaveParams: r }) {
    const o = Fn(e),
        i = {};
    for (const [l, s] of Object.entries(t)) {
        const u = typeof s == "string";
        ["*", "_splat"].includes(l)
            ? (i[l] = u ? encodeURI(s) : s)
            : (i[l] = u ? encodeURIComponent(s) : s);
    }
    return zt(
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
function Gr(e, t, n) {
    const r = Dh(e, t, n);
    if (!(n.to && !r)) return r ?? {};
}
function Do(e, t) {
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
function Dh(e, t, n) {
    t = Do(e, t);
    const r = Do(e, `${n.to ?? "$"}`),
        o = Fn(t),
        i = Fn(r);
    t.startsWith("/") || o.unshift({ type: "pathname", value: "/" }),
        r.startsWith("/") || i.unshift({ type: "pathname", value: "/" });
    const l = {};
    return (() => {
        for (let u = 0; u < Math.max(o.length, i.length); u++) {
            const a = o[u],
                p = i[u],
                d = u >= o.length - 1,
                f = u >= i.length - 1;
            if (p) {
                if (p.type === "wildcard") {
                    const v = decodeURI(zt(o.slice(u).map((y) => y.value)));
                    return (l["*"] = v), (l._splat = v), !0;
                }
                if (p.type === "pathname") {
                    if (p.value === "/" && !(a != null && a.value)) return !0;
                    if (a) {
                        if (n.caseSensitive) {
                            if (p.value !== a.value) return !1;
                        } else if (
                            p.value.toLowerCase() !== a.value.toLowerCase()
                        )
                            return !1;
                    }
                }
                if (!a) return !1;
                if (p.type === "param") {
                    if (a.value === "/") return !1;
                    a.value.charAt(0) !== "$" &&
                        (l[p.value.substring(1)] = decodeURIComponent(a.value));
                }
            }
            if (!d && f)
                return (
                    (l["**"] = zt(o.slice(u + 1).map((v) => v.value))),
                    !!n.fuzzy && (p == null ? void 0 : p.value) !== "/"
                );
        }
        return !0;
    })()
        ? l
        : void 0;
}
function At(e) {
    return !!(e != null && e.isRedirect);
}
function Hu(e) {
    return !!(e != null && e.isRedirect) && e.href;
}
function Cs(e) {
    const t = e.errorComponent ?? ni;
    return R.jsx($h, {
        getResetKey: e.getResetKey,
        onCatch: e.onCatch,
        children: ({ error: n, reset: r }) =>
            n ? O.createElement(t, { error: n, reset: r }) : e.children,
    });
}
class $h extends O.Component {
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
function ni({ error: e }) {
    const [t, n] = O.useState(!1);
    return R.jsxs("div", {
        style: { padding: ".5rem", maxWidth: "100%" },
        children: [
            R.jsxs("div", {
                style: { display: "flex", alignItems: "center", gap: ".5rem" },
                children: [
                    R.jsx("strong", {
                        style: { fontSize: "1rem" },
                        children: "Something went wrong!",
                    }),
                    R.jsx("button", {
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
            R.jsx("div", { style: { height: ".25rem" } }),
            t
                ? R.jsx("div", {
                      children: R.jsx("pre", {
                          style: {
                              fontSize: ".7em",
                              border: "1px solid red",
                              borderRadius: ".25rem",
                              padding: ".3rem",
                              color: "red",
                              overflow: "auto",
                          },
                          children: e.message
                              ? R.jsx("code", { children: e.message })
                              : null,
                      }),
                  })
                : null,
        ],
    });
}
function Le(e) {
    const t = $t({ warn: (e == null ? void 0 : e.router) === void 0 });
    return Eh(
        ((e == null ? void 0 : e.router) || t).__store,
        e == null ? void 0 : e.select
    );
}
function nt(e) {
    return !!(e != null && e.isNotFound);
}
function Uh(e) {
    const t = Le({
        select: (n) => `not-found-${n.location.pathname}-${n.status}`,
    });
    return R.jsx(Cs, {
        getResetKey: () => t,
        onCatch: (n, r) => {
            var o;
            if (nt(n)) (o = e.onCatch) == null || o.call(e, n, r);
            else throw n;
        },
        errorComponent: ({ error: n }) => {
            var r;
            return (r = e.fallback) == null ? void 0 : r.call(e, n);
        },
        children: e.children,
    });
}
function Bh() {
    return R.jsx("p", { children: "Not Found" });
}
const Ah = {
        stringify: (e) =>
            JSON.stringify(e, function (n, r) {
                const o = this[n],
                    i = Wu.find((l) => l.stringifyCondition(o));
                return i ? i.stringify(o) : r;
            }),
        parse: (e) =>
            JSON.parse(e, function (n, r) {
                const o = this[n],
                    i = Wu.find((l) => l.parseCondition(o));
                return i ? i.parse(o) : r;
            }),
    },
    Wu = [
        {
            stringifyCondition: (e) => e instanceof Date,
            stringify: (e) => ({ $date: e.toISOString() }),
            parseCondition: (e) => On(e) && e.$date,
            parse: (e) => new Date(e.$date),
        },
        {
            stringifyCondition: (e) => e === void 0,
            stringify: () => ({ $undefined: "" }),
            parseCondition: (e) => On(e) && e.$undefined === "",
            parse: () => {},
        },
    ],
    Vh = [
        "component",
        "errorComponent",
        "pendingComponent",
        "notFoundComponent",
    ];
function Hh(e) {
    return console.log("create router"), new Wh(e);
}
class Wh {
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
                            : (this.basepath = `/${Oh(n.basepath)}`)),
                    (!this.history ||
                        (this.options.history &&
                            this.options.history !== this.history)) &&
                        ((this.history =
                            this.options.history ??
                            (this.isServer
                                ? th({ initialEntries: [this.basepath || "/"] })
                                : eh())),
                        (this.latestLocation = this.parseLocation())),
                    this.options.routeTree !== this.routeTree &&
                        ((this.routeTree = this.options.routeTree),
                        this.buildRouteTree()),
                    this.__store ||
                        (this.__store = new kh(Yh(this.latestLocation), {
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
                            const d = Qt(s.fullPath);
                            (!this.routesByPath[d] ||
                                s.fullPath.endsWith("/")) &&
                                (this.routesByPath[d] = s);
                        }
                        const p = s.children;
                        p != null && p.length && r(p);
                    });
                };
                r([this.routeTree]);
                const o = [];
                Object.values(this.routesById).forEach((l, s) => {
                    var u;
                    if (l.isRoot || !l.path) return;
                    const a = Es(l.fullPath),
                        p = Fn(a);
                    for (
                        ;
                        p.length > 1 &&
                        ((u = p[0]) == null ? void 0 : u.value) === "/";

                    )
                        p.shift();
                    const d = p.map((f) =>
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
                        parsed: p,
                        index: s,
                        scores: d,
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
                const r = ({ pathname: s, search: u, hash: a, state: p }) => {
                        const d = this.options.parseSearch(u),
                            f = this.options.stringifySearch(d);
                        return {
                            pathname: s,
                            searchStr: f,
                            search: rn(n == null ? void 0 : n.search, d),
                            hash: a.split("#").reverse()[0] ?? "",
                            href: `${s}${f}${a}`,
                            state: rn(n == null ? void 0 : n.state, p),
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
                jh({
                    basepath: this.basepath,
                    base: n,
                    to: ti(r),
                    trailingSlash: this.options.trailingSlash,
                })),
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
                        const p =
                                i._fromLocation != null
                                    ? this.matchRoutes({
                                          ...i._fromLocation,
                                          search:
                                              i.fromSearch ||
                                              i._fromLocation.search,
                                      })
                                    : this.state.matches,
                            d =
                                i.from != null
                                    ? p.find((D) =>
                                          Gr(this.basepath, Qt(D.pathname), {
                                              to: i.from,
                                              caseSensitive: !1,
                                              fuzzy: !1,
                                          })
                                      )
                                    : void 0,
                            f =
                                (d == null ? void 0 : d.pathname) ||
                                this.latestLocation.pathname;
                        _e(
                            i.from == null || d != null,
                            "Could not find match for from: " + i.from
                        );
                        const v =
                                ((s = Fo(p)) == null ? void 0 : s.search) ||
                                this.latestLocation.search,
                            y =
                                l == null
                                    ? void 0
                                    : l.filter((D) =>
                                          p.find((K) => K.routeId === D.routeId)
                                      ),
                            g =
                                this.routesById[
                                    (u =
                                        y == null
                                            ? void 0
                                            : y.find(
                                                  (D) => D.pathname === f
                                              )) == null
                                        ? void 0
                                        : u.routeId
                                ];
                        let C = i.to
                            ? this.resolvePathWithBase(f, `${i.to}`)
                            : this.resolvePathWithBase(
                                  f,
                                  (g == null ? void 0 : g.to) ?? f
                              );
                        const h = {
                            ...((a = Fo(p)) == null ? void 0 : a.params),
                        };
                        let c =
                            (i.params ?? !0) === !0
                                ? h
                                : { ...h, ...gn(i.params, h) };
                        Object.keys(c).length > 0 &&
                            (l == null ||
                                l
                                    .map((D) => {
                                        var K;
                                        const le =
                                            this.looseRoutesById[D.routeId];
                                        return (
                                            ((K =
                                                le == null
                                                    ? void 0
                                                    : le.options.params) == null
                                                ? void 0
                                                : K.stringify) ??
                                            le.options.stringifyParams
                                        );
                                    })
                                    .filter(Boolean)
                                    .forEach((D) => {
                                        c = { ...c, ...D(c) };
                                    })),
                            (C = Fi({
                                path: C,
                                params: c ?? {},
                                leaveWildcards: !1,
                                leaveParams: n.leaveParams,
                            }));
                        const m =
                                (y == null
                                    ? void 0
                                    : y
                                          .map(
                                              (D) =>
                                                  this.looseRoutesById[
                                                      D.routeId
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
                                              (D) =>
                                                  this.looseRoutesById[
                                                      D.routeId
                                                  ].options.postSearchFilters ??
                                                  []
                                          )
                                          .flat()
                                          .filter(Boolean)) ?? [],
                            x = m.length ? m.reduce((D, K) => K(D), v) : v,
                            P =
                                i.search === !0
                                    ? x
                                    : i.search
                                    ? gn(i.search, x)
                                    : m.length
                                    ? x
                                    : {},
                            E = S.length ? S.reduce((D, K) => K(D), P) : P,
                            _ = rn(v, E),
                            I = this.options.stringifySearch(_),
                            T =
                                i.hash === !0
                                    ? this.latestLocation.hash
                                    : i.hash
                                    ? gn(i.hash, this.latestLocation.hash)
                                    : void 0,
                            B = T ? `#${T}` : "";
                        let A =
                            i.state === !0
                                ? this.latestLocation.state
                                : i.state
                                ? gn(i.state, this.latestLocation.state)
                                : {};
                        return (
                            (A = rn(this.latestLocation.state, A)),
                            {
                                pathname: C,
                                search: _,
                                searchStr: I,
                                state: A,
                                hash: T ?? "",
                                href: `${C}${I}${B}`,
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
                                    : s.find((C) => {
                                          const h = Gr(
                                              this.basepath,
                                              u.pathname,
                                              {
                                                  to: C.from,
                                                  caseSensitive: !1,
                                                  fuzzy: !1,
                                              }
                                          );
                                          return h ? ((y = h), !0) : !1;
                                      });
                            if (g) {
                                const { from: C, ...h } = g;
                                (l = { ...ar(n, ["from"]), ...h, params: y }),
                                    (a = r(l));
                            }
                        }
                        const p = this.matchRoutes(u),
                            d = a ? this.matchRoutes(a) : void 0,
                            f = a ? r(l, d) : void 0,
                            v = r(i, p);
                        return f && (v.maskedLocation = f), v;
                    };
                return n.mask ? o(n, { ...ar(n, ["from"]), ...n.mask }) : o(n);
            }),
            (this.commitLocation = ({
                viewTransition: n,
                ignoreBlocker: r,
                ...o
            }) => {
                const i = () => {
                        o.state.key = this.latestLocation.state.key;
                        const u = xn(o.state, this.latestLocation.state);
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
                const s = l.href;
                if (s) {
                    const a = Oo(s, {});
                    (l.to = a.pathname),
                        (l.search = this.options.parseSearch(a.search)),
                        (l.hash = a.hash);
                }
                const u = this.buildLocation(l);
                return this.commitLocation({
                    ...u,
                    viewTransition: o,
                    replace: n,
                    resetScroll: r,
                    ignoreBlocker: i,
                });
            }),
            (this.navigate = ({ to: n, __isRedirect: r, ...o }) => {
                const i = String(n);
                let l;
                try {
                    new URL(`${i}`), (l = !0);
                } catch {}
                return _e(!l), this.buildAndCommitLocation({ ...o, to: n });
            }),
            (this.load = async () => {
                (this.latestLocation = this.parseLocation(this.latestLocation)),
                    this.__store.setState((i) => ({
                        ...i,
                        loadedAt: Date.now(),
                    }));
                let n, r, o;
                for (
                    o = new Promise((i) => {
                        this.startReactTransition(async () => {
                            var l;
                            try {
                                const s = this.latestLocation,
                                    u = this.state.resolvedLocation,
                                    a = u.href !== s.href;
                                this.cancelMatches();
                                let p;
                                this.__store.batch(() => {
                                    (p = this.matchRoutes(s)),
                                        this.__store.setState((d) => ({
                                            ...d,
                                            status: "pending",
                                            isLoading: !0,
                                            location: s,
                                            pendingMatches: p,
                                            cachedMatches:
                                                d.cachedMatches.filter(
                                                    (f) =>
                                                        !p.find(
                                                            (v) => v.id === f.id
                                                        )
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
                                        matches: p,
                                        location: s,
                                        onReady: async () => {
                                            this.startViewTransition(
                                                async () => {
                                                    let d, f, v;
                                                    this.__store.batch(() => {
                                                        this.__store.setState(
                                                            (y) => {
                                                                const g =
                                                                        y.matches,
                                                                    C =
                                                                        y.pendingMatches ||
                                                                        y.matches;
                                                                return (
                                                                    (d =
                                                                        g.filter(
                                                                            (
                                                                                h
                                                                            ) =>
                                                                                !C.find(
                                                                                    (
                                                                                        c
                                                                                    ) =>
                                                                                        c.id ===
                                                                                        h.id
                                                                                )
                                                                        )),
                                                                    (f =
                                                                        C.filter(
                                                                            (
                                                                                h
                                                                            ) =>
                                                                                !g.find(
                                                                                    (
                                                                                        c
                                                                                    ) =>
                                                                                        c.id ===
                                                                                        h.id
                                                                                )
                                                                        )),
                                                                    (v =
                                                                        g.filter(
                                                                            (
                                                                                h
                                                                            ) =>
                                                                                C.find(
                                                                                    (
                                                                                        c
                                                                                    ) =>
                                                                                        c.id ===
                                                                                        h.id
                                                                                )
                                                                        )),
                                                                    {
                                                                        ...y,
                                                                        isLoading:
                                                                            !1,
                                                                        matches:
                                                                            C,
                                                                        pendingMatches:
                                                                            void 0,
                                                                        cachedMatches:
                                                                            [
                                                                                ...y.cachedMatches,
                                                                                ...d.filter(
                                                                                    (
                                                                                        h
                                                                                    ) =>
                                                                                        h.status !==
                                                                                        "error"
                                                                                ),
                                                                            ],
                                                                    }
                                                                );
                                                            }
                                                        ),
                                                            this.cleanCache();
                                                    }),
                                                        [
                                                            [d, "onLeave"],
                                                            [f, "onEnter"],
                                                            [v, "onStay"],
                                                        ].forEach(([y, g]) => {
                                                            y.forEach((C) => {
                                                                var h, c;
                                                                (c = (h =
                                                                    this
                                                                        .looseRoutesById[
                                                                        C
                                                                            .routeId
                                                                    ].options)[
                                                                    g
                                                                ]) == null ||
                                                                    c.call(
                                                                        h,
                                                                        C
                                                                    );
                                                            });
                                                        });
                                                }
                                            );
                                        },
                                    });
                            } catch (s) {
                                Hu(s)
                                    ? ((n = s),
                                      this.isServer ||
                                          this.navigate({
                                              ...s,
                                              replace: !0,
                                              __isRedirect: !0,
                                          }))
                                    : nt(s) && (r = s),
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
                    }),
                        this.latestLoadPromise = o,
                        await o;
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
                        var p;
                        return {
                            ...a,
                            [u]:
                                (p = a[u]) == null
                                    ? void 0
                                    : p.map((d) =>
                                          d.id === n ? (i = r(d)) : d
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
                const p = (d, f) => {
                    var v, y, g;
                    if (Hu(f)) throw f;
                    if (At(f) || nt(f)) {
                        if (
                            (l(d.id, (C) => ({
                                ...C,
                                status: At(f)
                                    ? "redirected"
                                    : nt(f)
                                    ? "notFound"
                                    : "error",
                                isFetching: !1,
                                error: f,
                                beforeLoadPromise: void 0,
                                loaderPromise: void 0,
                            })),
                            f.routeId || (f.routeId = d.routeId),
                            (v = d.beforeLoadPromise) == null || v.resolve(),
                            (y = d.loaderPromise) == null || y.resolve(),
                            (g = d.loadPromise) == null || g.resolve(),
                            At(f))
                        )
                            throw (
                                ((u = !0),
                                (f = this.resolveRedirect({
                                    ...f,
                                    _fromLocation: n,
                                })),
                                f)
                            );
                        if (nt(f))
                            throw (
                                (this._handleNotFound(r, f, { updateMatch: l }),
                                f)
                            );
                    }
                };
                try {
                    await new Promise((d, f) => {
                        (async () => {
                            var v, y, g;
                            try {
                                const C = (m, S, x) => {
                                    var P, E;
                                    const { id: _, routeId: I } = r[m],
                                        T = this.looseRoutesById[I];
                                    if (S instanceof Promise) throw S;
                                    (S.routerCode = x),
                                        (s = s ?? m),
                                        p(this.getMatch(_), S);
                                    try {
                                        (E = (P = T.options).onError) == null ||
                                            E.call(P, S);
                                    } catch (B) {
                                        (S = B), p(this.getMatch(_), S);
                                    }
                                    l(_, (B) => {
                                        var A;
                                        return (
                                            (A = B.beforeLoadPromise) == null ||
                                                A.resolve(),
                                            {
                                                ...B,
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
                                    m,
                                    { id: S, routeId: x },
                                ] of r.entries()) {
                                    const P = this.getMatch(S),
                                        E =
                                            (v = r[m - 1]) == null
                                                ? void 0
                                                : v.id;
                                    if (P.beforeLoadPromise || P.loaderPromise)
                                        await P.beforeLoadPromise;
                                    else {
                                        try {
                                            l(S, (z) => ({
                                                ...z,
                                                loadPromise: on(() => {
                                                    var b;
                                                    (b = z.loadPromise) ==
                                                        null || b.resolve();
                                                }),
                                                beforeLoadPromise: on(),
                                            }));
                                            const _ = this.looseRoutesById[x],
                                                I = new AbortController(),
                                                T =
                                                    _.options.pendingMs ??
                                                    this.options
                                                        .defaultPendingMs,
                                                B = !!(
                                                    i &&
                                                    !this.isServer &&
                                                    !o &&
                                                    (_.options.loader ||
                                                        _.options.beforeLoad) &&
                                                    typeof T == "number" &&
                                                    T !== 1 / 0 &&
                                                    (_.options
                                                        .pendingComponent ??
                                                        this.options
                                                            .defaultPendingComponent)
                                                );
                                            let A;
                                            B &&
                                                (A = setTimeout(() => {
                                                    try {
                                                        a();
                                                    } catch {}
                                                }, T));
                                            const {
                                                paramsError: D,
                                                searchError: K,
                                            } = this.getMatch(S);
                                            D && C(m, D, "PARSE_PARAMS"),
                                                K && C(m, K, "VALIDATE_SEARCH");
                                            const le = () =>
                                                E
                                                    ? this.getMatch(E).context
                                                    : this.options.context ??
                                                      {};
                                            l(S, (z) => ({
                                                ...z,
                                                isFetching: "beforeLoad",
                                                fetchCount: z.fetchCount + 1,
                                                abortController: I,
                                                pendingTimeout: A,
                                                context: {
                                                    ...le(),
                                                    ...z.__routeContext,
                                                    ...z.__beforeLoadContext,
                                                },
                                            }));
                                            const {
                                                    search: Re,
                                                    params: we,
                                                    context: w,
                                                    cause: M,
                                                } = this.getMatch(S),
                                                N = {
                                                    search: Re,
                                                    abortController: I,
                                                    params: we,
                                                    preload: !!o,
                                                    context: w,
                                                    location: n,
                                                    navigate: (z) =>
                                                        this.navigate({
                                                            ...z,
                                                            _fromLocation: n,
                                                        }),
                                                    buildLocation:
                                                        this.buildLocation,
                                                    cause: o ? "preload" : M,
                                                };
                                            let F =
                                                (await ((g = (y = _.options)
                                                    .beforeLoad) == null
                                                    ? void 0
                                                    : g.call(y, N))) ?? {};
                                            this.serializeLoaderData &&
                                                (F = this.serializeLoaderData(
                                                    "__beforeLoadContext",
                                                    F,
                                                    {
                                                        router: this,
                                                        match: this.getMatch(S),
                                                    }
                                                )),
                                                (At(F) || nt(F)) &&
                                                    C(m, F, "BEFORE_LOAD"),
                                                l(S, (z) => ({
                                                    ...z,
                                                    __beforeLoadContext: F,
                                                    context: {
                                                        ...le(),
                                                        ...z.__routeContext,
                                                        ...F,
                                                    },
                                                    abortController: I,
                                                }));
                                        } catch (_) {
                                            C(m, _, "BEFORE_LOAD");
                                        }
                                        l(S, (_) => {
                                            var I;
                                            return (
                                                (I = _.beforeLoadPromise) ==
                                                    null || I.resolve(),
                                                {
                                                    ..._,
                                                    beforeLoadPromise: void 0,
                                                    isFetching: !1,
                                                }
                                            );
                                        });
                                    }
                                }
                                const h = r.slice(0, s),
                                    c = [];
                                h.forEach(({ id: m, routeId: S }, x) => {
                                    c.push(
                                        (async () => {
                                            const { loaderPromise: P } =
                                                this.getMatch(m);
                                            if (P) await P;
                                            else {
                                                const E = c[x - 1],
                                                    _ = this.looseRoutesById[S],
                                                    I = () => {
                                                        const {
                                                            params: M,
                                                            loaderDeps: N,
                                                            abortController: F,
                                                            context: z,
                                                            cause: b,
                                                        } = this.getMatch(m);
                                                        return {
                                                            params: M,
                                                            deps: N,
                                                            preload: !!o,
                                                            parentMatchPromise:
                                                                E,
                                                            abortController: F,
                                                            context: z,
                                                            location: n,
                                                            navigate: (te) =>
                                                                this.navigate({
                                                                    ...te,
                                                                    _fromLocation:
                                                                        n,
                                                                }),
                                                            cause: o
                                                                ? "preload"
                                                                : b,
                                                            route: _,
                                                        };
                                                    },
                                                    T =
                                                        Date.now() -
                                                        this.getMatch(m)
                                                            .updatedAt,
                                                    B = o
                                                        ? _.options
                                                              .preloadStaleTime ??
                                                          this.options
                                                              .defaultPreloadStaleTime ??
                                                          3e4
                                                        : _.options.staleTime ??
                                                          this.options
                                                              .defaultStaleTime ??
                                                          0,
                                                    A = _.options.shouldReload,
                                                    D =
                                                        typeof A == "function"
                                                            ? A(I())
                                                            : A;
                                                l(m, (M) => ({
                                                    ...M,
                                                    loaderPromise: on(),
                                                    preload:
                                                        !!o &&
                                                        !this.state.matches.find(
                                                            (N) => N.id === m
                                                        ),
                                                }));
                                                const K = async () => {
                                                        var M,
                                                            N,
                                                            F,
                                                            z,
                                                            b,
                                                            te,
                                                            lt,
                                                            je;
                                                        try {
                                                            const He =
                                                                async () => {
                                                                    const Je =
                                                                        this.getMatch(
                                                                            m
                                                                        );
                                                                    Je.minPendingPromise &&
                                                                        (await Je.minPendingPromise);
                                                                };
                                                            try {
                                                                _._lazyPromise =
                                                                    _._lazyPromise ||
                                                                    (_.lazyFn
                                                                        ? _.lazyFn().then(
                                                                              (
                                                                                  be
                                                                              ) => {
                                                                                  Object.assign(
                                                                                      _.options,
                                                                                      be.options
                                                                                  );
                                                                              }
                                                                          )
                                                                        : Promise.resolve());
                                                                const Je =
                                                                    this.getMatch(
                                                                        m
                                                                    )
                                                                        .componentsPromise ||
                                                                    _._lazyPromise.then(
                                                                        () =>
                                                                            Promise.all(
                                                                                Vh.map(
                                                                                    async (
                                                                                        be
                                                                                    ) => {
                                                                                        const tn =
                                                                                            _
                                                                                                .options[
                                                                                                be
                                                                                            ];
                                                                                        tn !=
                                                                                            null &&
                                                                                            tn.preload &&
                                                                                            (await tn.preload());
                                                                                    }
                                                                                )
                                                                            )
                                                                    );
                                                                l(m, (be) => ({
                                                                    ...be,
                                                                    isFetching:
                                                                        "loader",
                                                                    componentsPromise:
                                                                        Je,
                                                                })),
                                                                    await _._lazyPromise;
                                                                let me =
                                                                    await ((N =
                                                                        (M =
                                                                            _.options)
                                                                            .loader) ==
                                                                    null
                                                                        ? void 0
                                                                        : N.call(
                                                                              M,
                                                                              I()
                                                                          ));
                                                                this
                                                                    .serializeLoaderData &&
                                                                    (me =
                                                                        this.serializeLoaderData(
                                                                            "loaderData",
                                                                            me,
                                                                            {
                                                                                router: this,
                                                                                match: this.getMatch(
                                                                                    m
                                                                                ),
                                                                            }
                                                                        )),
                                                                    p(
                                                                        this.getMatch(
                                                                            m
                                                                        ),
                                                                        me
                                                                    ),
                                                                    await He();
                                                                const qe =
                                                                        (z =
                                                                            (F =
                                                                                _.options)
                                                                                .meta) ==
                                                                        null
                                                                            ? void 0
                                                                            : z.call(
                                                                                  F,
                                                                                  {
                                                                                      matches:
                                                                                          r,
                                                                                      match: this.getMatch(
                                                                                          m
                                                                                      ),
                                                                                      params: this.getMatch(
                                                                                          m
                                                                                      )
                                                                                          .params,
                                                                                      loaderData:
                                                                                          me,
                                                                                  }
                                                                              ),
                                                                    Bn =
                                                                        (te =
                                                                            (b =
                                                                                _.options)
                                                                                .headers) ==
                                                                        null
                                                                            ? void 0
                                                                            : te.call(
                                                                                  b,
                                                                                  {
                                                                                      loaderData:
                                                                                          me,
                                                                                  }
                                                                              );
                                                                l(m, (be) => ({
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
                                                                    headers: Bn,
                                                                }));
                                                            } catch (Je) {
                                                                let me = Je;
                                                                await He(),
                                                                    p(
                                                                        this.getMatch(
                                                                            m
                                                                        ),
                                                                        Je
                                                                    );
                                                                try {
                                                                    (je = (lt =
                                                                        _.options)
                                                                        .onError) ==
                                                                        null ||
                                                                        je.call(
                                                                            lt,
                                                                            Je
                                                                        );
                                                                } catch (qe) {
                                                                    (me = qe),
                                                                        p(
                                                                            this.getMatch(
                                                                                m
                                                                            ),
                                                                            qe
                                                                        );
                                                                }
                                                                l(m, (qe) => ({
                                                                    ...qe,
                                                                    error: me,
                                                                    status: "error",
                                                                    isFetching:
                                                                        !1,
                                                                }));
                                                            }
                                                            await this.getMatch(
                                                                m
                                                            ).componentsPromise;
                                                        } catch (He) {
                                                            p(
                                                                this.getMatch(
                                                                    m
                                                                ),
                                                                He
                                                            );
                                                        }
                                                    },
                                                    {
                                                        status: le,
                                                        invalid: Re,
                                                    } = this.getMatch(m);
                                                (o &&
                                                    _.options.preload === !1) ||
                                                    (le === "success" &&
                                                    (Re || (D ?? T > B))
                                                        ? (async () => {
                                                              try {
                                                                  await K();
                                                              } catch {}
                                                          })()
                                                        : le !== "success" &&
                                                          (await K()));
                                                const {
                                                    loaderPromise: we,
                                                    loadPromise: w,
                                                } = this.getMatch(m);
                                                we == null || we.resolve(),
                                                    w == null || w.resolve();
                                            }
                                            l(m, (E) => ({
                                                ...E,
                                                isFetching: !1,
                                                loaderPromise: void 0,
                                            }));
                                        })()
                                    );
                                }),
                                    await Promise.all(c),
                                    d();
                            } catch (C) {
                                f(C);
                            }
                        })();
                    }),
                        await a();
                } catch (d) {
                    if (At(d) || nt(d)) throw (nt(d) && !o && (await a()), d);
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
                let o = this.matchRoutes(r, { throwOnError: !0, preload: !0 });
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
                    if (At(s))
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
                    u = Gr(this.basepath, s.pathname, { ...r, to: i.pathname });
                return !u || (n.params && !xn(u, n.params, !0))
                    ? !1
                    : u && ((r == null ? void 0 : r.includeSearch) ?? !0)
                    ? xn(s.search, i.search, !0)
                        ? u
                        : !1
                    : u;
            }),
            (this.dehydrate = () => {
                var n;
                const r =
                    ((n = this.options.errorSerializer) == null
                        ? void 0
                        : n.serialize) ?? Xh;
                return {
                    state: {
                        dehydratedMatches: this.state.matches.map((o) => ({
                            ...ar(o, ["id", "status", "updatedAt"]),
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
                    s = this.matchRoutes(this.state.location).map((u) => {
                        const a = l.dehydratedMatches.find(
                            (p) => p.id === u.id
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
                        ? this.looseRoutesById[Te]
                        : this.looseRoutesById[r.routeId]) ||
                    this.looseRoutesById[Te];
                for (
                    ;
                    !l.options.notFoundComponent &&
                    !this.options.defaultNotFoundComponent &&
                    l.id !== Te;

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
                stringifySearch: t.stringifySearch ?? Rh,
                parseSearch: t.parseSearch ?? Lh,
                transformer: t.transformer ?? Ah,
            }),
            typeof document < "u" && (window.__TSR__ROUTER__ = this);
    }
    get state() {
        return this.__store.state;
    }
    get looseRoutesById() {
        return this.routesById;
    }
    matchRoutes(t, n, r) {
        return typeof t == "string"
            ? this.matchRoutesInternal({ pathname: t, search: n }, r)
            : this.matchRoutesInternal(t, n);
    }
    matchRoutesInternal(t, n) {
        let r = {};
        const o = this.flatRoutes.find((d) => {
            const f = Gr(this.basepath, Qt(t.pathname), {
                to: d.fullPath,
                caseSensitive:
                    d.options.caseSensitive ?? this.options.caseSensitive,
                fuzzy: !0,
            });
            return f ? ((r = f), !0) : !1;
        });
        let i = o || this.routesById[Te];
        const l = [i];
        let s = !1;
        for (
            (o ? o.path !== "/" && r["**"] : Qt(t.pathname)) &&
            (this.options.notFoundRoute
                ? l.push(this.options.notFoundRoute)
                : (s = !0));
            i.parentRoute;

        )
            (i = i.parentRoute), l.unshift(i);
        const u = (() => {
                if (s) {
                    if (this.options.notFoundMode !== "root")
                        for (let d = l.length - 1; d >= 0; d--) {
                            const f = l[d];
                            if (f.children) return f.id;
                        }
                    return Te;
                }
            })(),
            a = l.map((d) => {
                var f;
                let v;
                const y =
                    ((f = d.options.params) == null ? void 0 : f.parse) ??
                    d.options.parseParams;
                if (y)
                    try {
                        const g = y(r);
                        Object.assign(r, g);
                    } catch (g) {
                        if (
                            ((v = new Kh(g.message, { cause: g })),
                            n != null && n.throwOnError)
                        )
                            throw v;
                        return v;
                    }
            }),
            p = [];
        return (
            l.forEach((d, f) => {
                var v, y, g, C, h, c, m, S, x, P, E, _;
                const I = p[f - 1],
                    [T, B] = (() => {
                        const z = (I == null ? void 0 : I.search) ?? t.search;
                        try {
                            const b =
                                    typeof d.options.validateSearch == "object"
                                        ? d.options.validateSearch.parse
                                        : d.options.validateSearch,
                                te = (b == null ? void 0 : b(z)) ?? {};
                            return [{ ...z, ...te }, void 0];
                        } catch (b) {
                            const te = new Qh(b.message, { cause: b });
                            if (n != null && n.throwOnError) throw te;
                            return [z, te];
                        }
                    })(),
                    A =
                        ((y = (v = d.options).loaderDeps) == null
                            ? void 0
                            : y.call(v, { search: T })) ?? "",
                    D = A ? JSON.stringify(A) : "",
                    K = Fi({ path: d.fullPath, params: r }),
                    le = Fi({ path: d.id, params: r, leaveWildcards: !0 }) + D,
                    Re = this.getMatch(le),
                    we = this.state.matches.find((z) => z.id === le)
                        ? "stay"
                        : "enter";
                let w;
                if (Re) w = { ...Re, cause: we, params: r };
                else {
                    const z =
                        d.options.loader || d.options.beforeLoad || d.lazyFn
                            ? "pending"
                            : "success";
                    w = {
                        id: le,
                        index: f,
                        routeId: d.id,
                        params: r,
                        pathname: zt([this.basepath, K]),
                        updatedAt: Date.now(),
                        search: {},
                        searchError: void 0,
                        status: z,
                        isFetching: !1,
                        error: void 0,
                        paramsError: a[f],
                        __routeContext: {},
                        __beforeLoadContext: {},
                        context: {},
                        abortController: new AbortController(),
                        fetchCount: 0,
                        cause: we,
                        loaderDeps: A,
                        invalid: !1,
                        preload: !1,
                        links:
                            (C = (g = d.options).links) == null
                                ? void 0
                                : C.call(g),
                        scripts:
                            (c = (h = d.options).scripts) == null
                                ? void 0
                                : c.call(h),
                        staticData: d.options.staticData || {},
                        loadPromise: on(),
                    };
                }
                w.status === "success" &&
                    ((w.meta =
                        (S = (m = d.options).meta) == null
                            ? void 0
                            : S.call(m, {
                                  matches: p,
                                  match: w,
                                  params: w.params,
                                  loaderData: w.loaderData,
                              })),
                    (w.headers =
                        (P = (x = d.options).headers) == null
                            ? void 0
                            : P.call(x, { loaderData: w.loaderData }))),
                    (n != null && n.preload) || (w.globalNotFound = u === d.id),
                    (w.search = rn(w.search, T)),
                    (w.searchError = B);
                const N = (I == null ? void 0 : I.id)
                    ? I.context ?? this.options.context ?? {}
                    : this.options.context ?? {};
                w.context = {
                    ...N,
                    ...w.__routeContext,
                    ...w.__beforeLoadContext,
                };
                const F = {
                    search: w.search,
                    params: w.params,
                    context: w.context,
                    location: t,
                    navigate: (z) => this.navigate({ ...z, _fromLocation: t }),
                    buildLocation: this.buildLocation,
                    cause: w.cause,
                    abortController: w.abortController,
                    preload: !!w.preload,
                };
                (w.__routeContext =
                    ((_ = (E = d.options).context) == null
                        ? void 0
                        : _.call(E, F)) ?? {}),
                    (w.context = {
                        ...N,
                        ...w.__routeContext,
                        ...w.__beforeLoadContext,
                    }),
                    p.push(w);
            }),
            p
        );
    }
}
class Qh extends Error {}
class Kh extends Error {}
function Yh(e) {
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
function Xh(e) {
    return e instanceof Error
        ? { name: e.name, message: e.message }
        : { data: e };
}
function Qu(e) {
    return !(typeof e == "object" && e && "data" in e) ||
        !("__isServerError" in e && e.__isServerError) ||
        !(typeof e.data == "object" && e.data)
        ? !1
        : e.__isServerError === !0;
}
function Ku(e) {
    if ("name" in e && "message" in e) {
        const t = new Error(e.message);
        return (t.name = e.name), t;
    }
    return e.data;
}
const ri = O.createContext(void 0);
function jn(e) {
    const t = O.useContext(ri);
    return Le({
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
function Gh(e) {
    return jn({
        ...e,
        select: (t) =>
            typeof e.select == "function"
                ? e.select(t.loaderDeps)
                : t.loaderDeps,
    });
}
function Zh(e) {
    return jn({
        ...e,
        select: (t) =>
            typeof e.select == "function"
                ? e.select(t.loaderData)
                : t.loaderData,
    });
}
function Jh(e) {
    return jn({
        ...e,
        select: (t) => (e.select ? e.select(t.params) : t.params),
    });
}
function qh(e) {
    return jn({
        ...e,
        select: (t) => (e.select ? e.select(t.search) : t.search),
    });
}
function bh(e) {
    const { navigate: t } = $t();
    return O.useCallback((n) => t({ ...n }), [t]);
}
class vd {
    constructor(t) {
        (this.init = (n) => {
            var r, o;
            this.originalIndex = n.originalIndex;
            const i = this.options,
                l = !(i != null && i.path) && !(i != null && i.id);
            (this.parentRoute =
                (o = (r = this.options).getParentRoute) == null
                    ? void 0
                    : o.call(r)),
                l ? (this.path = Te) : _e(this.parentRoute);
            let s = l ? Te : i.path;
            s && s !== "/" && (s = Es(s));
            const u = (i == null ? void 0 : i.id) || s;
            let a = l
                ? Te
                : zt([
                      this.parentRoute.id === Te ? "" : this.parentRoute.id,
                      u,
                  ]);
            s === Te && (s = "/"), a !== Te && (a = zt(["/", a]));
            const p = a === Te ? "/" : zt([this.parentRoute.fullPath, s]);
            (this.path = s), (this.id = a), (this.fullPath = p), (this.to = p);
        }),
            (this.updateLoader = (n) => (Object.assign(this.options, n), this)),
            (this.update = (n) => (Object.assign(this.options, n), this)),
            (this.lazy = (n) => ((this.lazyFn = n), this)),
            (this.useMatch = (n) => jn({ ...n, from: this.id })),
            (this.useRouteContext = (n) =>
                jn({
                    ...n,
                    from: this.id,
                    select: (r) =>
                        n != null && n.select ? n.select(r.context) : r.context,
                })),
            (this.useSearch = (n) => qh({ ...n, from: this.id })),
            (this.useParams = (n) => Jh({ ...n, from: this.id })),
            (this.useLoaderDeps = (n) => Gh({ ...n, from: this.id })),
            (this.useLoaderData = (n) => Zh({ ...n, from: this.id })),
            (this.useNavigate = () => bh({ from: this.id })),
            (this.options = t || {}),
            (this.isRoot = !(t != null && t.getParentRoute)),
            _e(!(t != null && t.id && t != null && t.path)),
            (this.$$typeof = Symbol.for("react.memo"));
    }
    addChildren(t) {
        return (this.children = Array.isArray(t) ? t : Object.values(t)), this;
    }
}
function xs(e) {
    return new vd(e);
}
class em extends vd {
    constructor(t) {
        super(t);
    }
    addChildren(t) {
        return super.addChildren(t);
    }
}
function tm(e) {
    return new em(e);
}
const nm = "Error preloading route! ☝️";
function rm(e, t) {
    const n = $t(),
        [r, o] = O.useState(!1),
        i = Ih(t),
        {
            activeProps: l = () => ({ className: "active" }),
            inactiveProps: s = () => ({}),
            activeOptions: u,
            hash: a,
            search: p,
            params: d,
            to: f,
            state: v,
            mask: y,
            preload: g,
            preloadDelay: C,
            replace: h,
            startTransition: c,
            resetScroll: m,
            viewTransition: S,
            children: x,
            target: P,
            disabled: E,
            style: _,
            className: I,
            onClick: T,
            onFocus: B,
            onMouseEnter: A,
            onMouseLeave: D,
            onTouchStart: K,
            ignoreBlocker: le,
            ...Re
        } = e,
        we = O.useMemo(() => {
            try {
                return new URL(`${f}`), "external";
            } catch {}
            return "internal";
        }, [f]),
        w = O.useMemo(() => n.buildLocation(e), [n, e]),
        M = O.useMemo(
            () => g ?? n.options.defaultPreload,
            [n.options.defaultPreload, g]
        ),
        N = C ?? n.options.defaultPreloadDelay ?? 0,
        F = Le({
            select: (J) => {
                const ce = jo(J.location.pathname, n.basepath).split("/"),
                    ii = jo(w.pathname, n.basepath)
                        .split("/")
                        .every((xd, Pd) => xd === ce[Pd]),
                    kd =
                        u != null && u.exact
                            ? Fh(J.location.pathname, w.pathname, n.basepath)
                            : ii,
                    Ed =
                        u != null && u.includeHash
                            ? J.location.hash === w.hash
                            : !0,
                    Cd =
                        (u == null ? void 0 : u.includeSearch) ?? !0
                            ? xn(
                                  J.location.search,
                                  w.search,
                                  !(u != null && u.exact)
                              )
                            : !0;
                return kd && Ed && Cd;
            },
        }),
        z = O.useCallback(() => {
            n.preloadRoute(e).catch((J) => {
                console.warn(J), console.warn(nm);
            });
        }, [e, n]),
        b = O.useCallback(
            (J) => {
                J != null && J.isIntersecting && z();
            },
            [z]
        );
    if (
        (zh(
            i,
            b,
            { rootMargin: "100px" },
            { disabled: !!E || M !== "viewport" }
        ),
        we === "external")
    )
        return {
            ...Re,
            ref: i,
            type: we,
            href: f,
            ...(x && { children: x }),
            ...(P && { target: P }),
            ...(E && { disabled: E }),
            ...(_ && { style: _ }),
            ...(I && { className: I }),
            ...(T && { onClick: T }),
            ...(B && { onFocus: B }),
            ...(A && { onMouseEnter: A }),
            ...(D && { onMouseLeave: D }),
            ...(K && { onTouchStart: K }),
        };
    const te = (J) => {
            if (
                !E &&
                !om(J) &&
                !J.defaultPrevented &&
                (!P || P === "_self") &&
                J.button === 0
            ) {
                J.preventDefault(),
                    id.flushSync(() => {
                        o(!0);
                    });
                const ce = n.subscribe("onResolved", () => {
                    ce(), o(!1);
                });
                n.commitLocation({
                    ...w,
                    replace: h,
                    resetScroll: m,
                    startTransition: c,
                    viewTransition: S,
                    ignoreBlocker: le,
                });
            }
        },
        lt = (J) => {
            E || (M && z());
        },
        je = lt,
        He = (J) => {
            if (E) return;
            const ce = J.target || {};
            if (M) {
                if (ce.preloadTimeout) return;
                ce.preloadTimeout = setTimeout(() => {
                    (ce.preloadTimeout = null), z();
                }, N);
            }
        },
        Je = (J) => {
            if (E) return;
            const ce = J.target || {};
            ce.preloadTimeout &&
                (clearTimeout(ce.preloadTimeout), (ce.preloadTimeout = null));
        },
        me = (J) => (ce) => {
            var oi;
            (oi = ce.persist) == null || oi.call(ce),
                J.filter(Boolean).forEach((ii) => {
                    ce.defaultPrevented || ii(ce);
                });
        },
        qe = F ? gn(l, {}) ?? {} : {},
        Bn = F ? {} : gn(s, {}),
        be = [I, qe.className, Bn.className].filter(Boolean).join(" "),
        tn = { ..._, ...qe.style, ...Bn.style };
    return {
        ...qe,
        ...Bn,
        ...Re,
        href: E
            ? void 0
            : w.maskedLocation
            ? n.history.createHref(w.maskedLocation.href)
            : n.history.createHref(w.href),
        ref: i,
        onClick: me([T, te]),
        onFocus: me([B, lt]),
        onMouseEnter: me([A, He]),
        onMouseLeave: me([D, Je]),
        onTouchStart: me([K, je]),
        disabled: !!E,
        target: P,
        ...(Object.keys(tn).length && { style: tn }),
        ...(be && { className: be }),
        ...(E && { role: "link", "aria-disabled": !0 }),
        ...(F && { "data-status": "active", "aria-current": "page" }),
        ...(r && { "data-transitioning": "transitioning" }),
    };
}
const ji = O.forwardRef((e, t) => {
    const { _asChild: n, ...r } = e,
        { type: o, ref: i, ...l } = rm(r, t),
        s =
            typeof r.children == "function"
                ? r.children({ isActive: l["data-status"] === "active" })
                : r.children;
    return (
        typeof n > "u" && delete l.disabled,
        O.createElement(n || "a", { ...l, ref: i }, s)
    );
});
function om(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function im() {
    const e = $t(),
        t = O.useRef({ router: e, mounted: !1 }),
        n = Le({
            select: (a) =>
                ar(a, [
                    "isLoading",
                    "location",
                    "resolvedLocation",
                    "isTransitioning",
                ]),
        }),
        [r, o] = O.useTransition(),
        i = Le({
            select: (a) => a.matches.some((p) => p.status === "pending"),
        }),
        l = Vu(n.isLoading),
        s = n.isLoading || r || i,
        u = Vu(s);
    return (
        e.isServer || (e.startReactTransition = o),
        O.useEffect(() => {
            const a = e.history.subscribe(e.load),
                p = e.buildLocation({
                    to: e.latestLocation.pathname,
                    search: !0,
                    params: !0,
                    hash: !0,
                    state: !0,
                });
            return (
                Qt(e.latestLocation.href) !== Qt(p.href) &&
                    e.commitLocation({ ...p, replace: !0 }),
                () => {
                    a();
                }
            );
        }, [e, e.history]),
        Oi(() => {
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
                    } catch (d) {
                        console.error(d);
                    }
                })();
        }, [e]),
        Oi(() => {
            if (l && !n.isLoading) {
                const a = e.state.location,
                    p = e.state.resolvedLocation,
                    d = p.href !== a.href;
                e.emit({
                    type: "onLoad",
                    fromLocation: p,
                    toLocation: a,
                    pathChanged: d,
                });
            }
        }, [l, e, n.isLoading]),
        Oi(() => {
            if (u && !s) {
                const a = e.state.location,
                    p = e.state.resolvedLocation,
                    d = p.href !== a.href;
                if (
                    (e.emit({
                        type: "onResolved",
                        fromLocation: p,
                        toLocation: a,
                        pathChanged: d,
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
function uo(e) {
    return R.jsx(R.Fragment, { children: e.children });
}
function yd(e, t, n) {
    return t.options.notFoundComponent
        ? R.jsx(t.options.notFoundComponent, { data: n })
        : e.options.defaultNotFoundComponent
        ? R.jsx(e.options.defaultNotFoundComponent, { data: n })
        : R.jsx(Bh, {});
}
const gd = O.memo(function ({ matchId: t }) {
        var n, r;
        const o = $t(),
            i = Le({
                select: (C) => {
                    var h;
                    return (h = C.matches.find((c) => c.id === t)) == null
                        ? void 0
                        : h.routeId;
                },
            });
        _e(i);
        const l = o.routesById[i],
            s = l.options.pendingComponent ?? o.options.defaultPendingComponent,
            u = s ? R.jsx(s, {}) : null,
            a = l.options.errorComponent ?? o.options.defaultErrorComponent,
            p = l.options.onCatch ?? o.options.defaultOnCatch,
            d = l.isRoot
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
                    ? O.Suspense
                    : uo,
            v = a ? Cs : uo,
            y = d ? Uh : uo,
            g = Le({ select: (C) => C.loadedAt });
        return R.jsx(ri.Provider, {
            value: t,
            children: R.jsx(f, {
                fallback: u,
                children: R.jsx(v, {
                    getResetKey: () => g,
                    errorComponent: a || ni,
                    onCatch: (C, h) => {
                        if (nt(C)) throw C;
                        p == null || p(C, h);
                    },
                    children: R.jsx(y, {
                        fallback: (C) => {
                            if (
                                !d ||
                                (C.routeId && C.routeId !== i) ||
                                (!C.routeId && !l.isRoot)
                            )
                                throw C;
                            return O.createElement(d, C);
                        },
                        children: R.jsx(lm, { matchId: t }),
                    }),
                }),
            }),
        });
    }),
    lm = O.memo(function ({ matchId: t }) {
        var n, r, o;
        const i = $t(),
            {
                match: l,
                matchIndex: s,
                routeId: u,
            } = Le({
                select: (f) => {
                    const v = f.matches.findIndex((C) => C.id === t),
                        y = f.matches[v];
                    return {
                        routeId: y.routeId,
                        matchIndex: v,
                        match: ar(y, ["id", "status", "error", "loadPromise"]),
                    };
                },
            }),
            a = i.routesById[u],
            p = O.useMemo(() => {
                const f = a.options.component ?? i.options.defaultComponent;
                return f ? R.jsx(f, {}, u) : R.jsx(Ps, {});
            }, [u, a.options.component, i.options.defaultComponent]),
            d =
                (a.options.errorComponent ?? i.options.defaultErrorComponent) ||
                ni;
        if (l.status === "notFound") {
            let f;
            return (
                Qu(l.error)
                    ? (f = (
                          ((n = i.options.errorSerializer) == null
                              ? void 0
                              : n.deserialize) ?? Ku
                      )(l.error.data))
                    : (f = l.error),
                _e(nt(f)),
                yd(i, a, f)
            );
        }
        if (l.status === "redirected") throw (_e(At(l.error)), l.loadPromise);
        if (l.status === "error") {
            if (i.isServer)
                return R.jsx(d, {
                    error: l.error,
                    info: { componentStack: "" },
                });
            throw Qu(l.error)
                ? (
                      ((r = i.options.errorSerializer) == null
                          ? void 0
                          : r.deserialize) ?? Ku
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
        return R.jsxs(R.Fragment, {
            children: [
                p,
                i.AfterEachMatch
                    ? R.jsx(i.AfterEachMatch, { match: l, matchIndex: s })
                    : null,
            ],
        });
    }),
    Ps = O.memo(function () {
        const t = $t(),
            n = O.useContext(ri),
            r = Le({
                select: (a) => {
                    var p;
                    return (p = a.matches.find((d) => d.id === n)) == null
                        ? void 0
                        : p.routeId;
                },
            }),
            o = t.routesById[r],
            { parentGlobalNotFound: i } = Le({
                select: (a) => {
                    const d = a.matches.find((f) => f.id === n);
                    return _e(d), { parentGlobalNotFound: d.globalNotFound };
                },
            }),
            l = Le({
                select: (a) => {
                    var p;
                    const d = a.matches,
                        f = d.findIndex((v) => v.id === n);
                    return (p = d[f + 1]) == null ? void 0 : p.id;
                },
            });
        if (i) return yd(t, o, void 0);
        if (!l) return null;
        const s = R.jsx(gd, { matchId: l }),
            u = t.options.defaultPendingComponent
                ? R.jsx(t.options.defaultPendingComponent, {})
                : null;
        return n === Te ? R.jsx(O.Suspense, { fallback: u, children: s }) : s;
    });
function sm() {
    const e = $t(),
        t = e.options.defaultPendingComponent
            ? R.jsx(e.options.defaultPendingComponent, {})
            : null,
        n =
            e.isServer || (typeof document < "u" && window.__TSR__)
                ? uo
                : O.Suspense,
        r = R.jsxs(n, {
            fallback: t,
            children: [R.jsx(im, {}), R.jsx(um, {})],
        });
    return e.options.InnerWrap
        ? R.jsx(e.options.InnerWrap, { children: r })
        : r;
}
function um() {
    const e = Le({
            select: (n) => {
                var r;
                return (r = n.matches[0]) == null ? void 0 : r.id;
            },
        }),
        t = Le({ select: (n) => n.loadedAt });
    return R.jsx(ri.Provider, {
        value: e,
        children: R.jsx(Cs, {
            getResetKey: () => t,
            errorComponent: ni,
            onCatch: (n) => {
                n.message || n.toString();
            },
            children: e ? R.jsx(gd, { matchId: e }) : null,
        }),
    });
}
function am({ router: e, children: t, ...n }) {
    e.update({
        ...e.options,
        ...n,
        context: { ...e.options.context, ...n.context },
    });
    const r = dd(),
        o = R.jsx(r.Provider, { value: e, children: t });
    return e.options.Wrap ? R.jsx(e.options.Wrap, { children: o }) : o;
}
function cm({ router: e, ...t }) {
    return R.jsx(am, { router: e, ...t, children: R.jsx(sm, {}) });
}
function dm(e) {
    return Le({ select: (t) => t.location });
}
function fm() {
    const e = dm();
    return (
        O.useEffect(() => {
            window.postMessage("ROUTE_CHANGE");
        }, [e.pathname]),
        R.jsx(Ps, {})
    );
}
const Sd = tm({ notFoundComponent: () => null, component: fm }),
    Ls = xs({
        getParentRoute: () => Sd,
        path: "/online-shop",
        component: () => (
            console.log('Online Shop MFE "/online-shop" route rendered'),
            R.jsxs("div", {
                children: [
                    R.jsx("div", {
                        children: R.jsx(ji, {
                            to: "/online-shop/products",
                            children: "Products",
                        }),
                    }),
                    R.jsx("div", {
                        children: R.jsx(ji, {
                            to: "/online-shop/cart",
                            children: "Cart",
                        }),
                    }),
                    R.jsx("div", {
                        children: R.jsx(ji, { to: "/", children: "Home" }),
                    }),
                    R.jsx("p", { children: "Online Shop: /online-shop" }),
                    R.jsx(Ps, {}),
                ],
            })
        ),
    }),
    pm = xs({
        getParentRoute: () => Ls,
        path: "products",
        component: () =>
            R.jsx("div", { children: "Online Shop: /online-shop/products" }),
    }),
    hm = xs({
        getParentRoute: () => Ls,
        path: "cart",
        component: () =>
            R.jsx("div", { children: "Online Shop: /online-shop/cart" }),
    }),
    mm = Sd.addChildren([Ls.addChildren([pm, hm])]),
    vm = Hh({ routeTree: mm });
function ym() {
    return R.jsx(cm, { router: vm });
}
const gm = document.getElementById("onlineShopRoot"),
    wd = ld(gm);
wd.render(R.jsx(ym, {}));
function _d(e) {
    e.data === "UNMOUNT_ONLINE_SHOP" &&
        (wd.unmount(), window.removeEventListener("message", _d));
}
window.addEventListener("message", _d);
