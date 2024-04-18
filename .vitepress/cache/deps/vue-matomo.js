import {
  __commonJS
} from "./chunk-ZS7NZCD4.js";

// node_modules/vue-matomo/dist/vue-matomo.js
var require_vue_matomo = __commonJS({
  "node_modules/vue-matomo/dist/vue-matomo.js"(exports, module) {
    !function(e, r) {
      if ("object" == typeof exports && "object" == typeof module)
        module.exports = r();
      else if ("function" == typeof define && define.amd)
        define([], r);
      else {
        var o = r();
        for (var t in o)
          ("object" == typeof exports ? exports : e)[t] = o[t];
      }
    }(window, function() {
      return function(e) {
        var r = {};
        function o(t) {
          if (r[t])
            return r[t].exports;
          var n = r[t] = { i: t, l: false, exports: {} };
          return e[t].call(n.exports, n, n.exports, o), n.l = true, n.exports;
        }
        return o.m = e, o.c = r, o.d = function(e2, r2, t) {
          o.o(e2, r2) || Object.defineProperty(e2, r2, { enumerable: true, get: t });
        }, o.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, o.t = function(e2, r2) {
          if (1 & r2 && (e2 = o(e2)), 8 & r2)
            return e2;
          if (4 & r2 && "object" == typeof e2 && e2 && e2.__esModule)
            return e2;
          var t = /* @__PURE__ */ Object.create(null);
          if (o.r(t), Object.defineProperty(t, "default", { enumerable: true, value: e2 }), 2 & r2 && "string" != typeof e2)
            for (var n in e2)
              o.d(t, n, (function(r3) {
                return e2[r3];
              }).bind(null, n));
          return t;
        }, o.n = function(e2) {
          var r2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return o.d(r2, "a", r2), r2;
        }, o.o = function(e2, r2) {
          return Object.prototype.hasOwnProperty.call(e2, r2);
        }, o.p = "", o(o.s = 0);
      }([function(e, r, o) {
        "use strict";
        function t() {
          return window.Piwik.getAsyncTracker();
        }
        function n(e2) {
          var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
          return new Promise(function(o2, t2) {
            var n2 = document.createElement("script");
            n2.async = true, n2.defer = true, n2.src = e2, r2 && ["anonymous", "use-credentials"].includes(r2) && (n2.crossOrigin = r2), (document.head || document.getElementsByTagName("head")[0]).appendChild(n2), n2.onload = o2, n2.onerror = t2;
          });
        }
        function i(e2, r2) {
          return e2.resolve(r2).href;
        }
        o.r(r), o.d(r, "matomoKey", function() {
          return u;
        }), o.d(r, "default", function() {
          return l;
        });
        var a = { debug: false, disableCookies: false, requireCookieConsent: false, enableHeartBeatTimer: false, enableLinkTracking: true, heartBeatTimerInterval: 15, requireConsent: false, trackInitialView: true, trackSiteSearch: false, trackerFileName: "matomo", trackerUrl: void 0, trackerScriptUrl: void 0, userId: void 0, cookieDomain: void 0, domains: void 0, preInitActions: [], crossOrigin: void 0 }, u = "Matomo";
        function c(e2, r2, o2) {
          if ("function" == typeof e2.trackSiteSearch) {
            var n2 = e2.trackSiteSearch(r2);
            if (n2)
              return void function(e3, r3) {
                var o3 = r3.keyword, n3 = r3.category, i2 = r3.resultsCount, a2 = t();
                e3.debug && console.debug("[vue-matomo] Site Search " + o3), a2.trackSiteSearch(o3, n3, i2);
              }(e2, n2);
          }
          !function(e3, r3, o3) {
            var n3, a2, u2, c2 = t();
            if (e3.router) {
              if (a2 = i(e3.router, r3.fullPath), u2 = o3 && o3.fullPath ? i(e3.router, o3.fullPath) : void 0, r3.meta.analyticsIgnore)
                return void (e3.debug && console.debug("[vue-matomo] Ignoring " + a2));
              e3.debug && console.debug("[vue-matomo] Tracking " + a2), n3 = r3.meta.title || a2;
            }
            u2 && c2.setReferrerUrl(window.location.origin + u2);
            a2 && c2.setCustomUrl(window.location.origin + a2);
            c2.trackPageView(n3);
          }(e2, r2, o2);
        }
        function s(e2, r2) {
          var o2 = t();
          if (Number(e2.version.split(".")[0]) > 2 ? (e2.config.globalProperties.$piwik = o2, e2.config.globalProperties.$matomo = o2, e2.provide(u, o2)) : (e2.prototype.$piwik = o2, e2.prototype.$matomo = o2), r2.trackInitialView && r2.router) {
            var n2 = r2.router.currentRoute.value ? r2.router.currentRoute.value : r2.router.currentRoute;
            c(r2, n2);
          }
          r2.router && r2.router.afterEach(function(e3, t2) {
            c(r2, e3, t2), r2.enableLinkTracking && o2.enableLinkTracking();
          });
        }
        function d() {
          return new Promise(function(e2, r2) {
            var o2 = Date.now(), t2 = setInterval(function() {
              if (window.Piwik)
                return clearInterval(t2), e2();
              if (Date.now() >= o2 + 3e3)
                throw clearInterval(t2), new Error("[vue-matomo]: window.Piwik undefined after waiting for ".concat(3e3, "ms"));
            }, 50);
          });
        }
        function l(e2) {
          var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o2 = Object.assign({}, a, r2), t2 = o2.host, i2 = o2.siteId, u2 = o2.trackerFileName, c2 = o2.trackerUrl, l2 = o2.trackerScriptUrl, f = l2 || "".concat(t2, "/").concat(u2, ".js"), p = c2 || "".concat(t2, "/").concat(u2, ".php");
          window._paq = window._paq || [], window._paq.push(["setTrackerUrl", p]), window._paq.push(["setSiteId", i2]), o2.requireConsent && window._paq.push(["requireConsent"]), o2.userId && window._paq.push(["setUserId", o2.userId]), o2.enableLinkTracking && window._paq.push(["enableLinkTracking"]), o2.disableCookies && window._paq.push(["disableCookies"]), o2.requireCookieConsent && window._paq.push(["requireCookieConsent"]), o2.enableHeartBeatTimer && window._paq.push(["enableHeartBeatTimer", o2.heartBeatTimerInterval]), o2.cookieDomain && window._paq.push(["setCookieDomain", o2.cookieDomain]), o2.domains && window._paq.push(["setDomains", o2.domains]), o2.preInitActions.forEach(function(e3) {
            return window._paq.push(e3);
          }), n(f, o2.crossOrigin).then(function() {
            return d();
          }).then(function() {
            return s(e2, o2);
          }).catch(function(e3) {
            if (e3.target)
              return console.error("[vue-matomo] An error occurred trying to load ".concat(e3.target.src, ". ") + "If the file exists you may have an ad- or trackingblocker enabled.");
            console.error(e3);
          });
        }
      }]);
    });
  }
});
export default require_vue_matomo();
//# sourceMappingURL=vue-matomo.js.map
