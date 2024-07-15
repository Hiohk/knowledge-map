import "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/tslib@2.6.3/node_modules/tslib/tslib.es6.mjs
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2)) t[p2] = s2[p2];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e) {
  var t = {};
  for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e.indexOf(p2) < 0)
    t[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t[p2[i2]] = s2[p2[i2]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
    if (ar || !(i2 in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
      ar[i2] = from[i2];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/.pnpm/@fingerprintjs+fingerprintjs-pro@3.9.10/node_modules/@fingerprintjs/fingerprintjs-pro/dist/fp.esm.min.js
function r(e, t) {
  return function(e2, t2) {
    return Object.prototype.hasOwnProperty.call(e2, t2);
  }(e, t) ? e[t] : void 0;
}
function o(e, t, n, r2) {
  var o2, i2 = document, a2 = "securitypolicyviolation", u2 = function(t2) {
    var n2 = new URL(e, location.href), r3 = t2.blockedURI;
    r3 !== n2.href && r3 !== n2.protocol.slice(0, -1) && r3 !== n2.origin || (o2 = t2, R2());
  };
  i2.addEventListener(a2, u2);
  var R2 = function() {
    return i2.removeEventListener(a2, u2);
  };
  return null == r2 || r2.then(R2, R2), Promise.resolve().then(t).then(function(e2) {
    return R2(), e2;
  }, function(e2) {
    return new Promise(function(e3) {
      var t2 = new MessageChannel();
      t2.port1.onmessage = function() {
        return e3();
      }, t2.port2.postMessage(null);
    }).then(function() {
      if (R2(), o2) return n(o2);
      throw e2;
    });
  });
}
var i = { default: "endpoint" };
var a = { default: "tlsEndpoint" };
function u(e) {
  for (var t = "", n = 0; n < e.length; ++n) if (n > 0) {
    var r2 = e[n].toLowerCase();
    r2 !== e[n] ? t += " ".concat(r2) : t += e[n];
  } else t += e[n].toUpperCase();
  return t;
}
var R = "Client timeout";
var c = "Network connection error";
var s = "Network request aborted";
var f = "Response cannot be parsed";
var l = "Blocked by CSP";
var E = "The endpoint parameter is not a valid URL";
var d = u("WrongRegion");
var p = u("SubscriptionNotActive");
var v = u("UnsupportedVersion");
var _ = u("InstallationMethodRestricted");
var O = u("HostnameRestricted");
var h = u("IntegrationFailed");
var I = "API key required";
var N = "API key not found";
var T = "API key expired";
var m = "Request cannot be parsed";
var w = "Request failed";
var A = "Request failed to process";
var P = "Too many requests, rate limit exceeded";
var y = "Not available for this origin";
var D = "Not available with restricted header";
var S = I;
var g = N;
var L = T;
var U = "3.9.10";
var b = "Failed to load the JS script of the agent";
var C = "9319";
function M(t, n) {
  var r2, o2, i2, a2, u2, R2, c2 = [], s2 = (r2 = function(t2) {
    var n2 = __spreadArray([], t2, true);
    return { current: function() {
      return n2[0];
    }, postpone: function() {
      var e = n2.shift();
      void 0 !== e && n2.push(e);
    }, exclude: function() {
      n2.shift();
    } };
  }(t), a2 = 100, u2 = 3e3, R2 = 0, o2 = function() {
    return Math.random() * Math.min(u2, a2 * Math.pow(2, R2++));
  }, i2 = /* @__PURE__ */ new Set(), [r2.current(), function(e, t2) {
    var n2, a3 = t2 instanceof Error ? t2.message : "";
    if (a3 === l || a3 === E) r2.exclude(), n2 = 0;
    else if (a3 === C) r2.exclude();
    else if (a3 === b) {
      var u3 = Date.now() - e.getTime() < 50, R3 = r2.current();
      R3 && u3 && !i2.has(R3) && (i2.add(R3), n2 = 0), r2.postpone();
    } else r2.postpone();
    var c3 = r2.current();
    return void 0 === c3 ? void 0 : [c3, null != n2 ? n2 : e.getTime() + o2() - Date.now()];
  }]), f2 = s2[0], d2 = s2[1];
  if (void 0 === f2) return Promise.reject(new TypeError("The list of script URL patterns is empty"));
  var p2 = function(e) {
    var t2 = /* @__PURE__ */ new Date(), r3 = function(n2) {
      return c2.push({ url: e, startedAt: t2, finishedAt: /* @__PURE__ */ new Date(), error: n2 });
    }, o3 = n(e);
    return o3.then(function() {
      return r3();
    }, r3), o3.catch(function(e2) {
      if (c2.length >= 5) throw e2;
      var n2 = d2(t2, e2);
      if (!n2) throw e2;
      var r4, o4 = n2[0], i3 = n2[1];
      return (r4 = i3, new Promise(function(e3) {
        return setTimeout(e3, r4);
      })).then(function() {
        return p2(o4);
      });
    });
  };
  return p2(f2).then(function(e) {
    return [e, c2];
  });
}
var K = "https://fpnpmcdn.net/v<version>/<apiKey>/loader_v<loaderVersion>.js";
var B = K;
function F(e) {
  var o2;
  e.scriptUrlPattern;
  var i2 = e.token, a2 = e.apiKey, u2 = void 0 === a2 ? i2 : a2, R2 = __rest(e, ["scriptUrlPattern", "token", "apiKey"]), c2 = null !== (o2 = r(e, "scriptUrlPattern")) && void 0 !== o2 ? o2 : K, s2 = function() {
    var e2 = [], t = function() {
      e2.push({ time: /* @__PURE__ */ new Date(), state: document.visibilityState });
    }, n = function(e3, t2, n2, r2) {
      return e3.addEventListener(t2, n2, r2), function() {
        return e3.removeEventListener(t2, n2, r2);
      };
    }(document, "visibilitychange", t);
    return t(), [e2, n];
  }(), f2 = s2[0], l2 = s2[1];
  return Promise.resolve().then(function() {
    if (!u2 || "string" != typeof u2) throw new Error(I);
    var e2 = function(e3, t) {
      return (Array.isArray(e3) ? e3 : [e3]).map(function(e4) {
        return function(e5, t2) {
          var n = encodeURIComponent;
          return e5.replace(/<[^<>]+>/g, function(e6) {
            return "<version>" === e6 ? "3" : "<apiKey>" === e6 ? n(t2) : "<loaderVersion>" === e6 ? n(U) : e6;
          });
        }(String(e4), t);
      });
    }(c2, u2);
    return M(e2, V);
  }).catch(function(e2) {
    throw l2(), function(e3) {
      if (e3 instanceof Error && e3.message === C) return new Error(b);
      return e3;
    }(e2);
  }).then(function(e2) {
    var t = e2[0], r2 = e2[1];
    return l2(), t.load(__assign(__assign({}, R2), { ldi: { attempts: r2, visibilityStates: f2 } }));
  });
}
function V(e) {
  return o(e, function() {
    return function(e2) {
      return new Promise(function(t, n) {
        if (function(e3) {
          if (URL.prototype) try {
            return new URL(e3, location.href), false;
          } catch (t2) {
            if (t2 instanceof Error && "TypeError" === t2.name) return true;
            throw t2;
          }
        }(e2)) throw new Error(E);
        var r2 = document.createElement("script"), o2 = function() {
          var e3;
          return null === (e3 = r2.parentNode) || void 0 === e3 ? void 0 : e3.removeChild(r2);
        }, i2 = document.head || document.getElementsByTagName("head")[0];
        r2.onload = function() {
          o2(), t();
        }, r2.onerror = function() {
          o2(), n(new Error(b));
        }, r2.async = true, r2.src = e2, i2.appendChild(r2);
      });
    }(e);
  }, function() {
    throw new Error(l);
  }).then(k);
}
function k() {
  var e = window, t = "__fpjs_p_l_b", n = e[t];
  if (function(e2, t2) {
    var n2, r2 = null === (n2 = Object.getOwnPropertyDescriptor) || void 0 === n2 ? void 0 : n2.call(Object, e2, t2);
    (null == r2 ? void 0 : r2.configurable) ? delete e2[t2] : r2 && !r2.writable || (e2[t2] = void 0);
  }(e, t), "function" != typeof (null == n ? void 0 : n.load)) throw new Error(C);
  return n;
}
var G = { load: F, defaultScriptUrlPattern: B, ERROR_SCRIPT_LOAD_FAIL: b, ERROR_API_KEY_EXPIRED: T, ERROR_API_KEY_INVALID: N, ERROR_API_KEY_MISSING: I, ERROR_BAD_REQUEST_FORMAT: m, ERROR_BAD_RESPONSE_FORMAT: f, ERROR_CLIENT_TIMEOUT: R, ERROR_CSP_BLOCK: l, ERROR_FORBIDDEN_ENDPOINT: O, ERROR_FORBIDDEN_HEADER: D, ERROR_FORBIDDEN_ORIGIN: y, ERROR_GENERAL_SERVER_FAILURE: w, ERROR_INSTALLATION_METHOD_RESTRICTED: _, ERROR_INTEGRATION_FAILURE: h, ERROR_INVALID_ENDPOINT: E, ERROR_NETWORK_ABORT: s, ERROR_NETWORK_CONNECTION: c, ERROR_RATE_LIMIT: P, ERROR_SERVER_TIMEOUT: A, ERROR_SUBSCRIPTION_NOT_ACTIVE: p, ERROR_TOKEN_EXPIRED: L, ERROR_TOKEN_INVALID: g, ERROR_TOKEN_MISSING: S, ERROR_UNSUPPORTED_VERSION: v, ERROR_WRONG_REGION: d, defaultEndpoint: i, defaultTlsEndpoint: a };
export {
  T as ERROR_API_KEY_EXPIRED,
  N as ERROR_API_KEY_INVALID,
  I as ERROR_API_KEY_MISSING,
  m as ERROR_BAD_REQUEST_FORMAT,
  f as ERROR_BAD_RESPONSE_FORMAT,
  R as ERROR_CLIENT_TIMEOUT,
  l as ERROR_CSP_BLOCK,
  O as ERROR_FORBIDDEN_ENDPOINT,
  D as ERROR_FORBIDDEN_HEADER,
  y as ERROR_FORBIDDEN_ORIGIN,
  w as ERROR_GENERAL_SERVER_FAILURE,
  _ as ERROR_INSTALLATION_METHOD_RESTRICTED,
  h as ERROR_INTEGRATION_FAILURE,
  E as ERROR_INVALID_ENDPOINT,
  s as ERROR_NETWORK_ABORT,
  c as ERROR_NETWORK_CONNECTION,
  P as ERROR_RATE_LIMIT,
  b as ERROR_SCRIPT_LOAD_FAIL,
  A as ERROR_SERVER_TIMEOUT,
  p as ERROR_SUBSCRIPTION_NOT_ACTIVE,
  L as ERROR_TOKEN_EXPIRED,
  g as ERROR_TOKEN_INVALID,
  S as ERROR_TOKEN_MISSING,
  v as ERROR_UNSUPPORTED_VERSION,
  d as ERROR_WRONG_REGION,
  G as default,
  i as defaultEndpoint,
  B as defaultScriptUrlPattern,
  a as defaultTlsEndpoint,
  F as load
};
//# sourceMappingURL=@fingerprintjs_fingerprintjs-pro.js.map
