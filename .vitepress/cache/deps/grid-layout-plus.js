import {
  Fragment,
  computed,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  inject,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  renderSlot,
  toRef,
  toRefs,
  unref,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives
} from "./chunk-I376RV5Q.js";
import {
  __commonJS,
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/.pnpm/interactjs@1.10.26/node_modules/interactjs/dist/interact.min.js
var require_interact_min = __commonJS({
  "node_modules/.pnpm/interactjs@1.10.26/node_modules/interactjs/dist/interact.min.js"(exports, module) {
    !function(t2, e2) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t2 = "undefined" != typeof globalThis ? globalThis : t2 || self).interact = e2();
    }(exports, function() {
      "use strict";
      function t2(t3, e3) {
        var n2 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var r3 = Object.getOwnPropertySymbols(t3);
          e3 && (r3 = r3.filter(function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          })), n2.push.apply(n2, r3);
        }
        return n2;
      }
      function e2(e3) {
        for (var n2 = 1; n2 < arguments.length; n2++) {
          var r3 = null != arguments[n2] ? arguments[n2] : {};
          n2 % 2 ? t2(Object(r3), true).forEach(function(t3) {
            a3(e3, t3, r3[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r3)) : t2(Object(r3)).forEach(function(t3) {
            Object.defineProperty(e3, t3, Object.getOwnPropertyDescriptor(r3, t3));
          });
        }
        return e3;
      }
      function n(t3) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        }, n(t3);
      }
      function r2(t3, e3) {
        if (!(t3 instanceof e3))
          throw new TypeError("Cannot call a class as a function");
      }
      function i2(t3, e3) {
        for (var n2 = 0; n2 < e3.length; n2++) {
          var r3 = e3[n2];
          r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, d3(r3.key), r3);
        }
      }
      function o(t3, e3, n2) {
        return e3 && i2(t3.prototype, e3), n2 && i2(t3, n2), Object.defineProperty(t3, "prototype", { writable: false }), t3;
      }
      function a3(t3, e3, n2) {
        return (e3 = d3(e3)) in t3 ? Object.defineProperty(t3, e3, { value: n2, enumerable: true, configurable: true, writable: true }) : t3[e3] = n2, t3;
      }
      function s2(t3, e3) {
        if ("function" != typeof e3 && null !== e3)
          throw new TypeError("Super expression must either be null or a function");
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), e3 && l2(t3, e3);
      }
      function c2(t3) {
        return c2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        }, c2(t3);
      }
      function l2(t3, e3) {
        return l2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
          return t4.__proto__ = e4, t4;
        }, l2(t3, e3);
      }
      function u(t3) {
        if (void 0 === t3)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function p(t3) {
        var e3 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t4) {
            return false;
          }
        }();
        return function() {
          var n2, r3 = c2(t3);
          if (e3) {
            var i3 = c2(this).constructor;
            n2 = Reflect.construct(r3, arguments, i3);
          } else
            n2 = r3.apply(this, arguments);
          return function(t4, e4) {
            if (e4 && ("object" == typeof e4 || "function" == typeof e4))
              return e4;
            if (void 0 !== e4)
              throw new TypeError("Derived constructors may only return object or undefined");
            return u(t4);
          }(this, n2);
        };
      }
      function f() {
        return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t3, e3, n2) {
          var r3 = function(t4, e4) {
            for (; !Object.prototype.hasOwnProperty.call(t4, e4) && null !== (t4 = c2(t4)); )
              ;
            return t4;
          }(t3, e3);
          if (r3) {
            var i3 = Object.getOwnPropertyDescriptor(r3, e3);
            return i3.get ? i3.get.call(arguments.length < 3 ? t3 : n2) : i3.value;
          }
        }, f.apply(this, arguments);
      }
      function d3(t3) {
        var e3 = function(t4, e4) {
          if ("object" != typeof t4 || null === t4)
            return t4;
          var n2 = t4[Symbol.toPrimitive];
          if (void 0 !== n2) {
            var r3 = n2.call(t4, e4 || "default");
            if ("object" != typeof r3)
              return r3;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e4 ? String : Number)(t4);
        }(t3, "string");
        return "symbol" == typeof e3 ? e3 : e3 + "";
      }
      var h = function(t3) {
        return !(!t3 || !t3.Window) && t3 instanceof t3.Window;
      }, v3 = void 0, g2 = void 0;
      function m(t3) {
        v3 = t3;
        var e3 = t3.document.createTextNode("");
        e3.ownerDocument !== t3.document && "function" == typeof t3.wrap && t3.wrap(e3) === e3 && (t3 = t3.wrap(t3)), g2 = t3;
      }
      function y4(t3) {
        return h(t3) ? t3 : (t3.ownerDocument || t3).defaultView || g2.window;
      }
      "undefined" != typeof window && window && m(window);
      var b2 = function(t3) {
        return !!t3 && "object" === n(t3);
      }, x3 = function(t3) {
        return "function" == typeof t3;
      }, w = { window: function(t3) {
        return t3 === g2 || h(t3);
      }, docFrag: function(t3) {
        return b2(t3) && 11 === t3.nodeType;
      }, object: b2, func: x3, number: function(t3) {
        return "number" == typeof t3;
      }, bool: function(t3) {
        return "boolean" == typeof t3;
      }, string: function(t3) {
        return "string" == typeof t3;
      }, element: function(t3) {
        if (!t3 || "object" !== n(t3))
          return false;
        var e3 = y4(t3) || g2;
        return /object|function/.test("undefined" == typeof Element ? "undefined" : n(Element)) ? t3 instanceof Element || t3 instanceof e3.Element : 1 === t3.nodeType && "string" == typeof t3.nodeName;
      }, plainObject: function(t3) {
        return b2(t3) && !!t3.constructor && /function Object\b/.test(t3.constructor.toString());
      }, array: function(t3) {
        return b2(t3) && void 0 !== t3.length && x3(t3.splice);
      } };
      function E3(t3) {
        var e3 = t3.interaction;
        if ("drag" === e3.prepared.name) {
          var n2 = e3.prepared.axis;
          "x" === n2 ? (e3.coords.cur.page.y = e3.coords.start.page.y, e3.coords.cur.client.y = e3.coords.start.client.y, e3.coords.velocity.client.y = 0, e3.coords.velocity.page.y = 0) : "y" === n2 && (e3.coords.cur.page.x = e3.coords.start.page.x, e3.coords.cur.client.x = e3.coords.start.client.x, e3.coords.velocity.client.x = 0, e3.coords.velocity.page.x = 0);
        }
      }
      function T2(t3) {
        var e3 = t3.iEvent, n2 = t3.interaction;
        if ("drag" === n2.prepared.name) {
          var r3 = n2.prepared.axis;
          if ("x" === r3 || "y" === r3) {
            var i3 = "x" === r3 ? "y" : "x";
            e3.page[i3] = n2.coords.start.page[i3], e3.client[i3] = n2.coords.start.client[i3], e3.delta[i3] = 0;
          }
        }
      }
      var S = { id: "actions/drag", install: function(t3) {
        var e3 = t3.actions, n2 = t3.Interactable, r3 = t3.defaults;
        n2.prototype.draggable = S.draggable, e3.map.drag = S, e3.methodDict.drag = "draggable", r3.actions.drag = S.defaults;
      }, listeners: { "interactions:before-action-move": E3, "interactions:action-resume": E3, "interactions:action-move": T2, "auto-start:check": function(t3) {
        var e3 = t3.interaction, n2 = t3.interactable, r3 = t3.buttons, i3 = n2.options.drag;
        if (i3 && i3.enabled && (!e3.pointerIsDown || !/mouse|pointer/.test(e3.pointerType) || 0 != (r3 & n2.options.drag.mouseButtons)))
          return t3.action = { name: "drag", axis: "start" === i3.lockAxis ? i3.startAxis : i3.lockAxis }, false;
      } }, draggable: function(t3) {
        return w.object(t3) ? (this.options.drag.enabled = false !== t3.enabled, this.setPerAction("drag", t3), this.setOnEvents("drag", t3), /^(xy|x|y|start)$/.test(t3.lockAxis) && (this.options.drag.lockAxis = t3.lockAxis), /^(xy|x|y)$/.test(t3.startAxis) && (this.options.drag.startAxis = t3.startAxis), this) : w.bool(t3) ? (this.options.drag.enabled = t3, this) : this.options.drag;
      }, beforeMove: E3, move: T2, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(t3) {
        return 0 === t3.search("drag");
      } }, _2 = S, P3 = { init: function(t3) {
        var e3 = t3;
        P3.document = e3.document, P3.DocumentFragment = e3.DocumentFragment || O2, P3.SVGElement = e3.SVGElement || O2, P3.SVGSVGElement = e3.SVGSVGElement || O2, P3.SVGElementInstance = e3.SVGElementInstance || O2, P3.Element = e3.Element || O2, P3.HTMLElement = e3.HTMLElement || P3.Element, P3.Event = e3.Event, P3.Touch = e3.Touch || O2, P3.PointerEvent = e3.PointerEvent || e3.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function O2() {
      }
      var k2 = P3;
      var D2 = { init: function(t3) {
        var e3 = k2.Element, n2 = t3.navigator || {};
        D2.supportsTouch = "ontouchstart" in t3 || w.func(t3.DocumentTouch) && k2.document instanceof t3.DocumentTouch, D2.supportsPointerEvent = false !== n2.pointerEnabled && !!k2.PointerEvent, D2.isIOS = /iP(hone|od|ad)/.test(n2.platform), D2.isIOS7 = /iP(hone|od|ad)/.test(n2.platform) && /OS 7[^\d]/.test(n2.appVersion), D2.isIe9 = /MSIE 9/.test(n2.userAgent), D2.isOperaMobile = "Opera" === n2.appName && D2.supportsTouch && /Presto/.test(n2.userAgent), D2.prefixedMatchesSelector = "matches" in e3.prototype ? "matches" : "webkitMatchesSelector" in e3.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e3.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e3.prototype ? "oMatchesSelector" : "msMatchesSelector", D2.pEventTypes = D2.supportsPointerEvent ? k2.PointerEvent === t3.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, D2.wheelEvent = k2.document && "onmousewheel" in k2.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null };
      var I = D2;
      function M(t3, e3) {
        if (t3.contains)
          return t3.contains(e3);
        for (; e3; ) {
          if (e3 === t3)
            return true;
          e3 = e3.parentNode;
        }
        return false;
      }
      function z(t3, e3) {
        for (; w.element(t3); ) {
          if (R2(t3, e3))
            return t3;
          t3 = A3(t3);
        }
        return null;
      }
      function A3(t3) {
        var e3 = t3.parentNode;
        if (w.docFrag(e3)) {
          for (; (e3 = e3.host) && w.docFrag(e3); )
            ;
          return e3;
        }
        return e3;
      }
      function R2(t3, e3) {
        return g2 !== v3 && (e3 = e3.replace(/\/deep\//g, " ")), t3[I.prefixedMatchesSelector](e3);
      }
      var C3 = function(t3) {
        return t3.parentNode || t3.host;
      };
      function j(t3, e3) {
        for (var n2, r3 = [], i3 = t3; (n2 = C3(i3)) && i3 !== e3 && n2 !== i3.ownerDocument; )
          r3.unshift(i3), i3 = n2;
        return r3;
      }
      function F2(t3, e3, n2) {
        for (; w.element(t3); ) {
          if (R2(t3, e3))
            return true;
          if ((t3 = A3(t3)) === n2)
            return R2(t3, e3);
        }
        return false;
      }
      function X2(t3) {
        return t3.correspondingUseElement || t3;
      }
      function Y2(t3) {
        var e3 = t3 instanceof k2.SVGElement ? t3.getBoundingClientRect() : t3.getClientRects()[0];
        return e3 && { left: e3.left, right: e3.right, top: e3.top, bottom: e3.bottom, width: e3.width || e3.right - e3.left, height: e3.height || e3.bottom - e3.top };
      }
      function L2(t3) {
        var e3, n2 = Y2(t3);
        if (!I.isIOS7 && n2) {
          var r3 = { x: (e3 = (e3 = y4(t3)) || g2).scrollX || e3.document.documentElement.scrollLeft, y: e3.scrollY || e3.document.documentElement.scrollTop };
          n2.left += r3.x, n2.right += r3.x, n2.top += r3.y, n2.bottom += r3.y;
        }
        return n2;
      }
      function q(t3) {
        for (var e3 = []; t3; )
          e3.push(t3), t3 = A3(t3);
        return e3;
      }
      function B2(t3) {
        return !!w.string(t3) && (k2.document.querySelector(t3), true);
      }
      function V2(t3, e3) {
        for (var n2 in e3)
          t3[n2] = e3[n2];
        return t3;
      }
      function W(t3, e3, n2) {
        return "parent" === t3 ? A3(n2) : "self" === t3 ? e3.getRect(n2) : z(n2, t3);
      }
      function G3(t3, e3, n2, r3) {
        var i3 = t3;
        return w.string(i3) ? i3 = W(i3, e3, n2) : w.func(i3) && (i3 = i3.apply(void 0, r3)), w.element(i3) && (i3 = L2(i3)), i3;
      }
      function N(t3) {
        return t3 && { x: "x" in t3 ? t3.x : t3.left, y: "y" in t3 ? t3.y : t3.top };
      }
      function U3(t3) {
        return !t3 || "x" in t3 && "y" in t3 || ((t3 = V2({}, t3)).x = t3.left || 0, t3.y = t3.top || 0, t3.width = t3.width || (t3.right || 0) - t3.x, t3.height = t3.height || (t3.bottom || 0) - t3.y), t3;
      }
      function H2(t3, e3, n2) {
        t3.left && (e3.left += n2.x), t3.right && (e3.right += n2.x), t3.top && (e3.top += n2.y), t3.bottom && (e3.bottom += n2.y), e3.width = e3.right - e3.left, e3.height = e3.bottom - e3.top;
      }
      function K4(t3, e3, n2) {
        var r3 = n2 && t3.options[n2];
        return N(G3(r3 && r3.origin || t3.options.origin, t3, e3, [t3 && e3])) || { x: 0, y: 0 };
      }
      function $2(t3, e3) {
        var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t4) {
          return true;
        }, r3 = arguments.length > 3 ? arguments[3] : void 0;
        if (r3 = r3 || {}, w.string(t3) && -1 !== t3.search(" ") && (t3 = J(t3)), w.array(t3))
          return t3.forEach(function(t4) {
            return $2(t4, e3, n2, r3);
          }), r3;
        if (w.object(t3) && (e3 = t3, t3 = ""), w.func(e3) && n2(t3))
          r3[t3] = r3[t3] || [], r3[t3].push(e3);
        else if (w.array(e3))
          for (var i3 = 0, o2 = e3; i3 < o2.length; i3++) {
            var a4 = o2[i3];
            $2(t3, a4, n2, r3);
          }
        else if (w.object(e3))
          for (var s3 in e3) {
            $2(J(s3).map(function(e4) {
              return "".concat(t3).concat(e4);
            }), e3[s3], n2, r3);
          }
        return r3;
      }
      function J(t3) {
        return t3.trim().split(/ +/);
      }
      var Q2 = function(t3, e3) {
        return Math.sqrt(t3 * t3 + e3 * e3);
      }, Z = ["webkit", "moz"];
      function tt(t3, e3) {
        t3.__set || (t3.__set = {});
        var n2 = function(n3) {
          if (Z.some(function(t4) {
            return 0 === n3.indexOf(t4);
          }))
            return 1;
          "function" != typeof t3[n3] && "__set" !== n3 && Object.defineProperty(t3, n3, { get: function() {
            return n3 in t3.__set ? t3.__set[n3] : t3.__set[n3] = e3[n3];
          }, set: function(e4) {
            t3.__set[n3] = e4;
          }, configurable: true });
        };
        for (var r3 in e3)
          n2(r3);
        return t3;
      }
      function et(t3, e3) {
        t3.page = t3.page || {}, t3.page.x = e3.page.x, t3.page.y = e3.page.y, t3.client = t3.client || {}, t3.client.x = e3.client.x, t3.client.y = e3.client.y, t3.timeStamp = e3.timeStamp;
      }
      function nt(t3) {
        t3.page.x = 0, t3.page.y = 0, t3.client.x = 0, t3.client.y = 0;
      }
      function rt(t3) {
        return t3 instanceof k2.Event || t3 instanceof k2.Touch;
      }
      function it(t3, e3, n2) {
        return t3 = t3 || "page", (n2 = n2 || {}).x = e3[t3 + "X"], n2.y = e3[t3 + "Y"], n2;
      }
      function ot3(t3, e3) {
        return e3 = e3 || { x: 0, y: 0 }, I.isOperaMobile && rt(t3) ? (it("screen", t3, e3), e3.x += window.scrollX, e3.y += window.scrollY) : it("page", t3, e3), e3;
      }
      function at(t3) {
        return w.number(t3.pointerId) ? t3.pointerId : t3.identifier;
      }
      function st2(t3, e3, n2) {
        var r3 = e3.length > 1 ? lt(e3) : e3[0];
        ot3(r3, t3.page), function(t4, e4) {
          e4 = e4 || {}, I.isOperaMobile && rt(t4) ? it("screen", t4, e4) : it("client", t4, e4);
        }(r3, t3.client), t3.timeStamp = n2;
      }
      function ct2(t3) {
        var e3 = [];
        return w.array(t3) ? (e3[0] = t3[0], e3[1] = t3[1]) : "touchend" === t3.type ? 1 === t3.touches.length ? (e3[0] = t3.touches[0], e3[1] = t3.changedTouches[0]) : 0 === t3.touches.length && (e3[0] = t3.changedTouches[0], e3[1] = t3.changedTouches[1]) : (e3[0] = t3.touches[0], e3[1] = t3.touches[1]), e3;
      }
      function lt(t3) {
        for (var e3 = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n2 = 0; n2 < t3.length; n2++) {
          var r3 = t3[n2];
          for (var i3 in e3)
            e3[i3] += r3[i3];
        }
        for (var o2 in e3)
          e3[o2] /= t3.length;
        return e3;
      }
      function ut(t3) {
        if (!t3.length)
          return null;
        var e3 = ct2(t3), n2 = Math.min(e3[0].pageX, e3[1].pageX), r3 = Math.min(e3[0].pageY, e3[1].pageY), i3 = Math.max(e3[0].pageX, e3[1].pageX), o2 = Math.max(e3[0].pageY, e3[1].pageY);
        return { x: n2, y: r3, left: n2, top: r3, right: i3, bottom: o2, width: i3 - n2, height: o2 - r3 };
      }
      function pt(t3, e3) {
        var n2 = e3 + "X", r3 = e3 + "Y", i3 = ct2(t3), o2 = i3[0][n2] - i3[1][n2], a4 = i3[0][r3] - i3[1][r3];
        return Q2(o2, a4);
      }
      function ft2(t3, e3) {
        var n2 = e3 + "X", r3 = e3 + "Y", i3 = ct2(t3), o2 = i3[1][n2] - i3[0][n2], a4 = i3[1][r3] - i3[0][r3];
        return 180 * Math.atan2(a4, o2) / Math.PI;
      }
      function dt(t3) {
        return w.string(t3.pointerType) ? t3.pointerType : w.number(t3.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t3.pointerType] : /touch/.test(t3.type || "") || t3 instanceof k2.Touch ? "touch" : "mouse";
      }
      function ht(t3) {
        var e3 = w.func(t3.composedPath) ? t3.composedPath() : t3.path;
        return [X2(e3 ? e3[0] : t3.target), X2(t3.currentTarget)];
      }
      var vt = function() {
        function t3(e3) {
          r2(this, t3), this.immediatePropagationStopped = false, this.propagationStopped = false, this._interaction = e3;
        }
        return o(t3, [{ key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }]), t3;
      }();
      Object.defineProperty(vt.prototype, "interaction", { get: function() {
        return this._interaction._proxy;
      }, set: function() {
      } });
      var gt = function(t3, e3) {
        for (var n2 = 0; n2 < e3.length; n2++) {
          var r3 = e3[n2];
          t3.push(r3);
        }
        return t3;
      }, mt = function(t3) {
        return gt([], t3);
      }, yt = function(t3, e3) {
        for (var n2 = 0; n2 < t3.length; n2++)
          if (e3(t3[n2], n2, t3))
            return n2;
        return -1;
      }, bt2 = function(t3, e3) {
        return t3[yt(t3, e3)];
      }, xt2 = function(t3) {
        s2(n2, t3);
        var e3 = p(n2);
        function n2(t4, i3, o2) {
          var a4;
          r2(this, n2), (a4 = e3.call(this, i3._interaction)).dropzone = void 0, a4.dragEvent = void 0, a4.relatedTarget = void 0, a4.draggable = void 0, a4.propagationStopped = false, a4.immediatePropagationStopped = false;
          var s3 = "dragleave" === o2 ? t4.prev : t4.cur, c3 = s3.element, l3 = s3.dropzone;
          return a4.type = o2, a4.target = c3, a4.currentTarget = c3, a4.dropzone = l3, a4.dragEvent = i3, a4.relatedTarget = i3.target, a4.draggable = i3.interactable, a4.timeStamp = i3.timeStamp, a4;
        }
        return o(n2, [{ key: "reject", value: function() {
          var t4 = this, e4 = this._interaction.dropState;
          if ("dropactivate" === this.type || this.dropzone && e4.cur.dropzone === this.dropzone && e4.cur.element === this.target)
            if (e4.prev.dropzone = this.dropzone, e4.prev.element = this.target, e4.rejected = true, e4.events.enter = null, this.stopImmediatePropagation(), "dropactivate" === this.type) {
              var r3 = e4.activeDrops, i3 = yt(r3, function(e5) {
                var n3 = e5.dropzone, r4 = e5.element;
                return n3 === t4.dropzone && r4 === t4.target;
              });
              e4.activeDrops.splice(i3, 1);
              var o2 = new n2(e4, this.dragEvent, "dropdeactivate");
              o2.dropzone = this.dropzone, o2.target = this.target, this.dropzone.fire(o2);
            } else
              this.dropzone.fire(new n2(e4, this.dragEvent, "dragleave"));
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }]), n2;
      }(vt);
      function wt2(t3, e3) {
        for (var n2 = 0, r3 = t3.slice(); n2 < r3.length; n2++) {
          var i3 = r3[n2], o2 = i3.dropzone, a4 = i3.element;
          e3.dropzone = o2, e3.target = a4, o2.fire(e3), e3.propagationStopped = e3.immediatePropagationStopped = false;
        }
      }
      function Et2(t3, e3) {
        for (var n2 = function(t4, e4) {
          for (var n3 = [], r4 = 0, i4 = t4.interactables.list; r4 < i4.length; r4++) {
            var o2 = i4[r4];
            if (o2.options.drop.enabled) {
              var a4 = o2.options.drop.accept;
              if (!(w.element(a4) && a4 !== e4 || w.string(a4) && !R2(e4, a4) || w.func(a4) && !a4({ dropzone: o2, draggableElement: e4 })))
                for (var s3 = 0, c3 = o2.getAllElements(); s3 < c3.length; s3++) {
                  var l3 = c3[s3];
                  l3 !== e4 && n3.push({ dropzone: o2, element: l3, rect: o2.getRect(l3) });
                }
            }
          }
          return n3;
        }(t3, e3), r3 = 0; r3 < n2.length; r3++) {
          var i3 = n2[r3];
          i3.rect = i3.dropzone.getRect(i3.element);
        }
        return n2;
      }
      function Tt3(t3, e3, n2) {
        for (var r3 = t3.dropState, i3 = t3.interactable, o2 = t3.element, a4 = [], s3 = 0, c3 = r3.activeDrops; s3 < c3.length; s3++) {
          var l3 = c3[s3], u2 = l3.dropzone, p2 = l3.element, f2 = l3.rect, d4 = u2.dropCheck(e3, n2, i3, o2, p2, f2);
          a4.push(d4 ? p2 : null);
        }
        var h2 = function(t4) {
          for (var e4, n3, r4, i4 = [], o3 = 0; o3 < t4.length; o3++) {
            var a5 = t4[o3], s4 = t4[e4];
            if (a5 && o3 !== e4)
              if (s4) {
                var c4 = C3(a5), l4 = C3(s4);
                if (c4 !== a5.ownerDocument)
                  if (l4 !== a5.ownerDocument)
                    if (c4 !== l4) {
                      i4 = i4.length ? i4 : j(s4);
                      var u3 = void 0;
                      if (s4 instanceof k2.HTMLElement && a5 instanceof k2.SVGElement && !(a5 instanceof k2.SVGSVGElement)) {
                        if (a5 === l4)
                          continue;
                        u3 = a5.ownerSVGElement;
                      } else
                        u3 = a5;
                      for (var p3 = j(u3, s4.ownerDocument), f3 = 0; p3[f3] && p3[f3] === i4[f3]; )
                        f3++;
                      var d5 = [p3[f3 - 1], p3[f3], i4[f3]];
                      if (d5[0])
                        for (var h3 = d5[0].lastChild; h3; ) {
                          if (h3 === d5[1]) {
                            e4 = o3, i4 = p3;
                            break;
                          }
                          if (h3 === d5[2])
                            break;
                          h3 = h3.previousSibling;
                        }
                    } else
                      r4 = s4, void 0, void 0, (parseInt(y4(n3 = a5).getComputedStyle(n3).zIndex, 10) || 0) >= (parseInt(y4(r4).getComputedStyle(r4).zIndex, 10) || 0) && (e4 = o3);
                  else
                    e4 = o3;
              } else
                e4 = o3;
          }
          return e4;
        }(a4);
        return r3.activeDrops[h2] || null;
      }
      function St2(t3, e3, n2) {
        var r3 = t3.dropState, i3 = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return "dragstart" === n2.type && (i3.activate = new xt2(r3, n2, "dropactivate"), i3.activate.target = null, i3.activate.dropzone = null), "dragend" === n2.type && (i3.deactivate = new xt2(r3, n2, "dropdeactivate"), i3.deactivate.target = null, i3.deactivate.dropzone = null), r3.rejected || (r3.cur.element !== r3.prev.element && (r3.prev.dropzone && (i3.leave = new xt2(r3, n2, "dragleave"), n2.dragLeave = i3.leave.target = r3.prev.element, n2.prevDropzone = i3.leave.dropzone = r3.prev.dropzone), r3.cur.dropzone && (i3.enter = new xt2(r3, n2, "dragenter"), n2.dragEnter = r3.cur.element, n2.dropzone = r3.cur.dropzone)), "dragend" === n2.type && r3.cur.dropzone && (i3.drop = new xt2(r3, n2, "drop"), n2.dropzone = r3.cur.dropzone, n2.relatedTarget = r3.cur.element), "dragmove" === n2.type && r3.cur.dropzone && (i3.move = new xt2(r3, n2, "dropmove"), n2.dropzone = r3.cur.dropzone)), i3;
      }
      function _t3(t3, e3) {
        var n2 = t3.dropState, r3 = n2.activeDrops, i3 = n2.cur, o2 = n2.prev;
        e3.leave && o2.dropzone.fire(e3.leave), e3.enter && i3.dropzone.fire(e3.enter), e3.move && i3.dropzone.fire(e3.move), e3.drop && i3.dropzone.fire(e3.drop), e3.deactivate && wt2(r3, e3.deactivate), n2.prev.dropzone = i3.dropzone, n2.prev.element = i3.element;
      }
      function Pt2(t3, e3) {
        var n2 = t3.interaction, r3 = t3.iEvent, i3 = t3.event;
        if ("dragmove" === r3.type || "dragend" === r3.type) {
          var o2 = n2.dropState;
          e3.dynamicDrop && (o2.activeDrops = Et2(e3, n2.element));
          var a4 = r3, s3 = Tt3(n2, a4, i3);
          o2.rejected = o2.rejected && !!s3 && s3.dropzone === o2.cur.dropzone && s3.element === o2.cur.element, o2.cur.dropzone = s3 && s3.dropzone, o2.cur.element = s3 && s3.element, o2.events = St2(n2, 0, a4);
        }
      }
      var Ot3 = { id: "actions/drop", install: function(t3) {
        var e3 = t3.actions, n2 = t3.interactStatic, r3 = t3.Interactable, i3 = t3.defaults;
        t3.usePlugin(_2), r3.prototype.dropzone = function(t4) {
          return function(t5, e4) {
            if (w.object(e4)) {
              if (t5.options.drop.enabled = false !== e4.enabled, e4.listeners) {
                var n3 = $2(e4.listeners), r4 = Object.keys(n3).reduce(function(t6, e5) {
                  return t6[/^(enter|leave)/.test(e5) ? "drag".concat(e5) : /^(activate|deactivate|move)/.test(e5) ? "drop".concat(e5) : e5] = n3[e5], t6;
                }, {}), i4 = t5.options.drop.listeners;
                i4 && t5.off(i4), t5.on(r4), t5.options.drop.listeners = r4;
              }
              return w.func(e4.ondrop) && t5.on("drop", e4.ondrop), w.func(e4.ondropactivate) && t5.on("dropactivate", e4.ondropactivate), w.func(e4.ondropdeactivate) && t5.on("dropdeactivate", e4.ondropdeactivate), w.func(e4.ondragenter) && t5.on("dragenter", e4.ondragenter), w.func(e4.ondragleave) && t5.on("dragleave", e4.ondragleave), w.func(e4.ondropmove) && t5.on("dropmove", e4.ondropmove), /^(pointer|center)$/.test(e4.overlap) ? t5.options.drop.overlap = e4.overlap : w.number(e4.overlap) && (t5.options.drop.overlap = Math.max(Math.min(1, e4.overlap), 0)), "accept" in e4 && (t5.options.drop.accept = e4.accept), "checker" in e4 && (t5.options.drop.checker = e4.checker), t5;
            }
            if (w.bool(e4))
              return t5.options.drop.enabled = e4, t5;
            return t5.options.drop;
          }(this, t4);
        }, r3.prototype.dropCheck = function(t4, e4, n3, r4, i4, o2) {
          return function(t5, e5, n4, r5, i5, o3, a4) {
            var s3 = false;
            if (!(a4 = a4 || t5.getRect(o3)))
              return !!t5.options.drop.checker && t5.options.drop.checker(e5, n4, s3, t5, o3, r5, i5);
            var c3 = t5.options.drop.overlap;
            if ("pointer" === c3) {
              var l3 = K4(r5, i5, "drag"), u2 = ot3(e5);
              u2.x += l3.x, u2.y += l3.y;
              var p2 = u2.x > a4.left && u2.x < a4.right, f2 = u2.y > a4.top && u2.y < a4.bottom;
              s3 = p2 && f2;
            }
            var d4 = r5.getRect(i5);
            if (d4 && "center" === c3) {
              var h2 = d4.left + d4.width / 2, v4 = d4.top + d4.height / 2;
              s3 = h2 >= a4.left && h2 <= a4.right && v4 >= a4.top && v4 <= a4.bottom;
            }
            if (d4 && w.number(c3)) {
              s3 = Math.max(0, Math.min(a4.right, d4.right) - Math.max(a4.left, d4.left)) * Math.max(0, Math.min(a4.bottom, d4.bottom) - Math.max(a4.top, d4.top)) / (d4.width * d4.height) >= c3;
            }
            t5.options.drop.checker && (s3 = t5.options.drop.checker(e5, n4, s3, t5, o3, r5, i5));
            return s3;
          }(this, t4, e4, n3, r4, i4, o2);
        }, n2.dynamicDrop = function(e4) {
          return w.bool(e4) ? (t3.dynamicDrop = e4, n2) : t3.dynamicDrop;
        }, V2(e3.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), e3.methodDict.drop = "dropzone", t3.dynamicDrop = false, i3.actions.drop = Ot3.defaults;
      }, listeners: { "interactions:before-action-start": function(t3) {
        var e3 = t3.interaction;
        "drag" === e3.prepared.name && (e3.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(t3, e3) {
        var n2 = t3.interaction, r3 = (t3.event, t3.iEvent);
        if ("drag" === n2.prepared.name) {
          var i3 = n2.dropState;
          i3.activeDrops = [], i3.events = {}, i3.activeDrops = Et2(e3, n2.element), i3.events = St2(n2, 0, r3), i3.events.activate && (wt2(i3.activeDrops, i3.events.activate), e3.fire("actions/drop:start", { interaction: n2, dragEvent: r3 }));
        }
      }, "interactions:action-move": Pt2, "interactions:after-action-move": function(t3, e3) {
        var n2 = t3.interaction, r3 = t3.iEvent;
        if ("drag" === n2.prepared.name) {
          var i3 = n2.dropState;
          _t3(n2, i3.events), e3.fire("actions/drop:move", { interaction: n2, dragEvent: r3 }), i3.events = {};
        }
      }, "interactions:action-end": function(t3, e3) {
        if ("drag" === t3.interaction.prepared.name) {
          var n2 = t3.interaction, r3 = t3.iEvent;
          Pt2(t3, e3), _t3(n2, n2.dropState.events), e3.fire("actions/drop:end", { interaction: n2, dragEvent: r3 });
        }
      }, "interactions:stop": function(t3) {
        var e3 = t3.interaction;
        if ("drag" === e3.prepared.name) {
          var n2 = e3.dropState;
          n2 && (n2.activeDrops = null, n2.events = null, n2.cur.dropzone = null, n2.cur.element = null, n2.prev.dropzone = null, n2.prev.element = null, n2.rejected = false);
        }
      } }, getActiveDrops: Et2, getDrop: Tt3, getDropEvents: St2, fireDropEvents: _t3, filterEventType: function(t3) {
        return 0 === t3.search("drag") || 0 === t3.search("drop");
      }, defaults: { enabled: false, accept: null, overlap: "pointer" } }, kt3 = Ot3;
      function Dt(t3) {
        var e3 = t3.interaction, n2 = t3.iEvent, r3 = t3.phase;
        if ("gesture" === e3.prepared.name) {
          var i3 = e3.pointers.map(function(t4) {
            return t4.pointer;
          }), o2 = "start" === r3, a4 = "end" === r3, s3 = e3.interactable.options.deltaSource;
          if (n2.touches = [i3[0], i3[1]], o2)
            n2.distance = pt(i3, s3), n2.box = ut(i3), n2.scale = 1, n2.ds = 0, n2.angle = ft2(i3, s3), n2.da = 0, e3.gesture.startDistance = n2.distance, e3.gesture.startAngle = n2.angle;
          else if (a4 || e3.pointers.length < 2) {
            var c3 = e3.prevEvent;
            n2.distance = c3.distance, n2.box = c3.box, n2.scale = c3.scale, n2.ds = 0, n2.angle = c3.angle, n2.da = 0;
          } else
            n2.distance = pt(i3, s3), n2.box = ut(i3), n2.scale = n2.distance / e3.gesture.startDistance, n2.angle = ft2(i3, s3), n2.ds = n2.scale - e3.gesture.scale, n2.da = n2.angle - e3.gesture.angle;
          e3.gesture.distance = n2.distance, e3.gesture.angle = n2.angle, w.number(n2.scale) && n2.scale !== 1 / 0 && !isNaN(n2.scale) && (e3.gesture.scale = n2.scale);
        }
      }
      var It2 = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t3) {
        var e3 = t3.actions, n2 = t3.Interactable, r3 = t3.defaults;
        n2.prototype.gesturable = function(t4) {
          return w.object(t4) ? (this.options.gesture.enabled = false !== t4.enabled, this.setPerAction("gesture", t4), this.setOnEvents("gesture", t4), this) : w.bool(t4) ? (this.options.gesture.enabled = t4, this) : this.options.gesture;
        }, e3.map.gesture = It2, e3.methodDict.gesture = "gesturable", r3.actions.gesture = It2.defaults;
      }, listeners: { "interactions:action-start": Dt, "interactions:action-move": Dt, "interactions:action-end": Dt, "interactions:new": function(t3) {
        t3.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
      }, "auto-start:check": function(t3) {
        if (!(t3.interaction.pointers.length < 2)) {
          var e3 = t3.interactable.options.gesture;
          if (e3 && e3.enabled)
            return t3.action = { name: "gesture" }, false;
        }
      } }, defaults: {}, getCursor: function() {
        return "";
      }, filterEventType: function(t3) {
        return 0 === t3.search("gesture");
      } }, Mt = It2;
      function zt3(t3, e3, n2, r3, i3, o2, a4) {
        if (!e3)
          return false;
        if (true === e3) {
          var s3 = w.number(o2.width) ? o2.width : o2.right - o2.left, c3 = w.number(o2.height) ? o2.height : o2.bottom - o2.top;
          if (a4 = Math.min(a4, Math.abs(("left" === t3 || "right" === t3 ? s3 : c3) / 2)), s3 < 0 && ("left" === t3 ? t3 = "right" : "right" === t3 && (t3 = "left")), c3 < 0 && ("top" === t3 ? t3 = "bottom" : "bottom" === t3 && (t3 = "top")), "left" === t3) {
            var l3 = s3 >= 0 ? o2.left : o2.right;
            return n2.x < l3 + a4;
          }
          if ("top" === t3) {
            var u2 = c3 >= 0 ? o2.top : o2.bottom;
            return n2.y < u2 + a4;
          }
          if ("right" === t3)
            return n2.x > (s3 >= 0 ? o2.right : o2.left) - a4;
          if ("bottom" === t3)
            return n2.y > (c3 >= 0 ? o2.bottom : o2.top) - a4;
        }
        return !!w.element(r3) && (w.element(e3) ? e3 === r3 : F2(r3, e3, i3));
      }
      function At3(t3) {
        var e3 = t3.iEvent, n2 = t3.interaction;
        if ("resize" === n2.prepared.name && n2.resizeAxes) {
          var r3 = e3;
          n2.interactable.options.resize.square ? ("y" === n2.resizeAxes ? r3.delta.x = r3.delta.y : r3.delta.y = r3.delta.x, r3.axes = "xy") : (r3.axes = n2.resizeAxes, "x" === n2.resizeAxes ? r3.delta.y = 0 : "y" === n2.resizeAxes && (r3.delta.x = 0));
        }
      }
      var Rt3, Ct2, jt2 = { id: "actions/resize", before: ["actions/drag"], install: function(t3) {
        var e3 = t3.actions, n2 = t3.browser, r3 = t3.Interactable, i3 = t3.defaults;
        jt2.cursors = function(t4) {
          return t4.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        }(n2), jt2.defaultMargin = n2.supportsTouch || n2.supportsPointerEvent ? 20 : 10, r3.prototype.resizable = function(e4) {
          return function(t4, e5, n3) {
            if (w.object(e5))
              return t4.options.resize.enabled = false !== e5.enabled, t4.setPerAction("resize", e5), t4.setOnEvents("resize", e5), w.string(e5.axis) && /^x$|^y$|^xy$/.test(e5.axis) ? t4.options.resize.axis = e5.axis : null === e5.axis && (t4.options.resize.axis = n3.defaults.actions.resize.axis), w.bool(e5.preserveAspectRatio) ? t4.options.resize.preserveAspectRatio = e5.preserveAspectRatio : w.bool(e5.square) && (t4.options.resize.square = e5.square), t4;
            if (w.bool(e5))
              return t4.options.resize.enabled = e5, t4;
            return t4.options.resize;
          }(this, e4, t3);
        }, e3.map.resize = jt2, e3.methodDict.resize = "resizable", i3.actions.resize = jt2.defaults;
      }, listeners: { "interactions:new": function(t3) {
        t3.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(t3) {
        !function(t4) {
          var e3 = t4.iEvent, n2 = t4.interaction;
          if ("resize" === n2.prepared.name && n2.prepared.edges) {
            var r3 = e3, i3 = n2.rect;
            n2._rects = { start: V2({}, i3), corrected: V2({}, i3), previous: V2({}, i3), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, r3.edges = n2.prepared.edges, r3.rect = n2._rects.corrected, r3.deltaRect = n2._rects.delta;
          }
        }(t3), At3(t3);
      }, "interactions:action-move": function(t3) {
        !function(t4) {
          var e3 = t4.iEvent, n2 = t4.interaction;
          if ("resize" === n2.prepared.name && n2.prepared.edges) {
            var r3 = e3, i3 = n2.interactable.options.resize.invert, o2 = "reposition" === i3 || "negate" === i3, a4 = n2.rect, s3 = n2._rects, c3 = s3.start, l3 = s3.corrected, u2 = s3.delta, p2 = s3.previous;
            if (V2(p2, l3), o2) {
              if (V2(l3, a4), "reposition" === i3) {
                if (l3.top > l3.bottom) {
                  var f2 = l3.top;
                  l3.top = l3.bottom, l3.bottom = f2;
                }
                if (l3.left > l3.right) {
                  var d4 = l3.left;
                  l3.left = l3.right, l3.right = d4;
                }
              }
            } else
              l3.top = Math.min(a4.top, c3.bottom), l3.bottom = Math.max(a4.bottom, c3.top), l3.left = Math.min(a4.left, c3.right), l3.right = Math.max(a4.right, c3.left);
            for (var h2 in l3.width = l3.right - l3.left, l3.height = l3.bottom - l3.top, l3)
              u2[h2] = l3[h2] - p2[h2];
            r3.edges = n2.prepared.edges, r3.rect = l3, r3.deltaRect = u2;
          }
        }(t3), At3(t3);
      }, "interactions:action-end": function(t3) {
        var e3 = t3.iEvent, n2 = t3.interaction;
        if ("resize" === n2.prepared.name && n2.prepared.edges) {
          var r3 = e3;
          r3.edges = n2.prepared.edges, r3.rect = n2._rects.corrected, r3.deltaRect = n2._rects.delta;
        }
      }, "auto-start:check": function(t3) {
        var e3 = t3.interaction, n2 = t3.interactable, r3 = t3.element, i3 = t3.rect, o2 = t3.buttons;
        if (i3) {
          var a4 = V2({}, e3.coords.cur.page), s3 = n2.options.resize;
          if (s3 && s3.enabled && (!e3.pointerIsDown || !/mouse|pointer/.test(e3.pointerType) || 0 != (o2 & s3.mouseButtons))) {
            if (w.object(s3.edges)) {
              var c3 = { left: false, right: false, top: false, bottom: false };
              for (var l3 in c3)
                c3[l3] = zt3(l3, s3.edges[l3], a4, e3._latestPointer.eventTarget, r3, i3, s3.margin || jt2.defaultMargin);
              c3.left = c3.left && !c3.right, c3.top = c3.top && !c3.bottom, (c3.left || c3.right || c3.top || c3.bottom) && (t3.action = { name: "resize", edges: c3 });
            } else {
              var u2 = "y" !== s3.axis && a4.x > i3.right - jt2.defaultMargin, p2 = "x" !== s3.axis && a4.y > i3.bottom - jt2.defaultMargin;
              (u2 || p2) && (t3.action = { name: "resize", axes: (u2 ? "x" : "") + (p2 ? "y" : "") });
            }
            return !t3.action && void 0;
          }
        }
      } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t3) {
        var e3 = t3.edges, n2 = t3.axis, r3 = t3.name, i3 = jt2.cursors, o2 = null;
        if (n2)
          o2 = i3[r3 + n2];
        else if (e3) {
          for (var a4 = "", s3 = 0, c3 = ["top", "bottom", "left", "right"]; s3 < c3.length; s3++) {
            var l3 = c3[s3];
            e3[l3] && (a4 += l3);
          }
          o2 = i3[a4];
        }
        return o2;
      }, filterEventType: function(t3) {
        return 0 === t3.search("resize");
      }, defaultMargin: null }, Ft = jt2, Xt2 = { id: "actions", install: function(t3) {
        t3.usePlugin(Mt), t3.usePlugin(Ft), t3.usePlugin(_2), t3.usePlugin(kt3);
      } }, Yt = 0;
      var Lt = { request: function(t3) {
        return Rt3(t3);
      }, cancel: function(t3) {
        return Ct2(t3);
      }, init: function(t3) {
        if (Rt3 = t3.requestAnimationFrame, Ct2 = t3.cancelAnimationFrame, !Rt3)
          for (var e3 = ["ms", "moz", "webkit", "o"], n2 = 0; n2 < e3.length; n2++) {
            var r3 = e3[n2];
            Rt3 = t3["".concat(r3, "RequestAnimationFrame")], Ct2 = t3["".concat(r3, "CancelAnimationFrame")] || t3["".concat(r3, "CancelRequestAnimationFrame")];
          }
        Rt3 = Rt3 && Rt3.bind(t3), Ct2 = Ct2 && Ct2.bind(t3), Rt3 || (Rt3 = function(e4) {
          var n3 = Date.now(), r4 = Math.max(0, 16 - (n3 - Yt)), i3 = t3.setTimeout(function() {
            e4(n3 + r4);
          }, r4);
          return Yt = n3 + r4, i3;
        }, Ct2 = function(t4) {
          return clearTimeout(t4);
        });
      } };
      var qt2 = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(t3) {
        qt2.isScrolling = true, Lt.cancel(qt2.i), t3.autoScroll = qt2, qt2.interaction = t3, qt2.prevTime = qt2.now(), qt2.i = Lt.request(qt2.scroll);
      }, stop: function() {
        qt2.isScrolling = false, qt2.interaction && (qt2.interaction.autoScroll = null), Lt.cancel(qt2.i);
      }, scroll: function() {
        var t3 = qt2.interaction, e3 = t3.interactable, n2 = t3.element, r3 = t3.prepared.name, i3 = e3.options[r3].autoScroll, o2 = Bt(i3.container, e3, n2), a4 = qt2.now(), s3 = (a4 - qt2.prevTime) / 1e3, c3 = i3.speed * s3;
        if (c3 >= 1) {
          var l3 = { x: qt2.x * c3, y: qt2.y * c3 };
          if (l3.x || l3.y) {
            var u2 = Vt(o2);
            w.window(o2) ? o2.scrollBy(l3.x, l3.y) : o2 && (o2.scrollLeft += l3.x, o2.scrollTop += l3.y);
            var p2 = Vt(o2), f2 = { x: p2.x - u2.x, y: p2.y - u2.y };
            (f2.x || f2.y) && e3.fire({ type: "autoscroll", target: n2, interactable: e3, delta: f2, interaction: t3, container: o2 });
          }
          qt2.prevTime = a4;
        }
        qt2.isScrolling && (Lt.cancel(qt2.i), qt2.i = Lt.request(qt2.scroll));
      }, check: function(t3, e3) {
        var n2;
        return null == (n2 = t3.options[e3].autoScroll) ? void 0 : n2.enabled;
      }, onInteractionMove: function(t3) {
        var e3 = t3.interaction, n2 = t3.pointer;
        if (e3.interacting() && qt2.check(e3.interactable, e3.prepared.name))
          if (e3.simulation)
            qt2.x = qt2.y = 0;
          else {
            var r3, i3, o2, a4, s3 = e3.interactable, c3 = e3.element, l3 = e3.prepared.name, u2 = s3.options[l3].autoScroll, p2 = Bt(u2.container, s3, c3);
            if (w.window(p2))
              a4 = n2.clientX < qt2.margin, r3 = n2.clientY < qt2.margin, i3 = n2.clientX > p2.innerWidth - qt2.margin, o2 = n2.clientY > p2.innerHeight - qt2.margin;
            else {
              var f2 = Y2(p2);
              a4 = n2.clientX < f2.left + qt2.margin, r3 = n2.clientY < f2.top + qt2.margin, i3 = n2.clientX > f2.right - qt2.margin, o2 = n2.clientY > f2.bottom - qt2.margin;
            }
            qt2.x = i3 ? 1 : a4 ? -1 : 0, qt2.y = o2 ? 1 : r3 ? -1 : 0, qt2.isScrolling || (qt2.margin = u2.margin, qt2.speed = u2.speed, qt2.start(e3));
          }
      } };
      function Bt(t3, e3, n2) {
        return (w.string(t3) ? W(t3, e3, n2) : t3) || y4(n2);
      }
      function Vt(t3) {
        return w.window(t3) && (t3 = window.document.body), { x: t3.scrollLeft, y: t3.scrollTop };
      }
      var Wt3 = { id: "auto-scroll", install: function(t3) {
        var e3 = t3.defaults, n2 = t3.actions;
        t3.autoScroll = qt2, qt2.now = function() {
          return t3.now();
        }, n2.phaselessTypes.autoscroll = true, e3.perAction.autoScroll = qt2.defaults;
      }, listeners: { "interactions:new": function(t3) {
        t3.interaction.autoScroll = null;
      }, "interactions:destroy": function(t3) {
        t3.interaction.autoScroll = null, qt2.stop(), qt2.interaction && (qt2.interaction = null);
      }, "interactions:stop": qt2.stop, "interactions:action-move": function(t3) {
        return qt2.onInteractionMove(t3);
      } } }, Gt2 = Wt3;
      function Nt(t3, e3) {
        var n2 = false;
        return function() {
          return n2 || (g2.console.warn(e3), n2 = true), t3.apply(this, arguments);
        };
      }
      function Ut(t3, e3) {
        return t3.name = e3.name, t3.axis = e3.axis, t3.edges = e3.edges, t3;
      }
      function Ht(t3) {
        return w.bool(t3) ? (this.options.styleCursor = t3, this) : null === t3 ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function Kt2(t3) {
        return w.func(t3) ? (this.options.actionChecker = t3, this) : null === t3 ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var $t2 = { id: "auto-start/interactableMethods", install: function(t3) {
        var e3 = t3.Interactable;
        e3.prototype.getAction = function(e4, n2, r3, i3) {
          var o2 = function(t4, e5, n3, r4, i4) {
            var o3 = t4.getRect(r4), a4 = e5.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[e5.button], s3 = { action: null, interactable: t4, interaction: n3, element: r4, rect: o3, buttons: a4 };
            return i4.fire("auto-start:check", s3), s3.action;
          }(this, n2, r3, i3, t3);
          return this.options.actionChecker ? this.options.actionChecker(e4, n2, o2, this, i3, r3) : o2;
        }, e3.prototype.ignoreFrom = Nt(function(t4) {
          return this._backCompatOption("ignoreFrom", t4);
        }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e3.prototype.allowFrom = Nt(function(t4) {
          return this._backCompatOption("allowFrom", t4);
        }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e3.prototype.actionChecker = Kt2, e3.prototype.styleCursor = Ht;
      } };
      function Jt2(t3, e3, n2, r3, i3) {
        return e3.testIgnoreAllow(e3.options[t3.name], n2, r3) && e3.options[t3.name].enabled && ee(e3, n2, t3, i3) ? t3 : null;
      }
      function Qt2(t3, e3, n2, r3, i3, o2, a4) {
        for (var s3 = 0, c3 = r3.length; s3 < c3; s3++) {
          var l3 = r3[s3], u2 = i3[s3], p2 = l3.getAction(e3, n2, t3, u2);
          if (p2) {
            var f2 = Jt2(p2, l3, u2, o2, a4);
            if (f2)
              return { action: f2, interactable: l3, element: u2 };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function Zt3(t3, e3, n2, r3, i3) {
        var o2 = [], a4 = [], s3 = r3;
        function c3(t4) {
          o2.push(t4), a4.push(s3);
        }
        for (; w.element(s3); ) {
          o2 = [], a4 = [], i3.interactables.forEachMatch(s3, c3);
          var l3 = Qt2(t3, e3, n2, o2, a4, r3, i3);
          if (l3.action && !l3.interactable.options[l3.action.name].manualStart)
            return l3;
          s3 = A3(s3);
        }
        return { action: null, interactable: null, element: null };
      }
      function te2(t3, e3, n2) {
        var r3 = e3.action, i3 = e3.interactable, o2 = e3.element;
        r3 = r3 || { name: null }, t3.interactable = i3, t3.element = o2, Ut(t3.prepared, r3), t3.rect = i3 && r3.name ? i3.getRect(o2) : null, ie2(t3, n2), n2.fire("autoStart:prepared", { interaction: t3 });
      }
      function ee(t3, e3, n2, r3) {
        var i3 = t3.options, o2 = i3[n2.name].max, a4 = i3[n2.name].maxPerElement, s3 = r3.autoStart.maxInteractions, c3 = 0, l3 = 0, u2 = 0;
        if (!(o2 && a4 && s3))
          return false;
        for (var p2 = 0, f2 = r3.interactions.list; p2 < f2.length; p2++) {
          var d4 = f2[p2], h2 = d4.prepared.name;
          if (d4.interacting()) {
            if (++c3 >= s3)
              return false;
            if (d4.interactable === t3) {
              if ((l3 += h2 === n2.name ? 1 : 0) >= o2)
                return false;
              if (d4.element === e3 && (u2++, h2 === n2.name && u2 >= a4))
                return false;
            }
          }
        }
        return s3 > 0;
      }
      function ne3(t3, e3) {
        return w.number(t3) ? (e3.autoStart.maxInteractions = t3, this) : e3.autoStart.maxInteractions;
      }
      function re(t3, e3, n2) {
        var r3 = n2.autoStart.cursorElement;
        r3 && r3 !== t3 && (r3.style.cursor = ""), t3.ownerDocument.documentElement.style.cursor = e3, t3.style.cursor = e3, n2.autoStart.cursorElement = e3 ? t3 : null;
      }
      function ie2(t3, e3) {
        var n2 = t3.interactable, r3 = t3.element, i3 = t3.prepared;
        if ("mouse" === t3.pointerType && n2 && n2.options.styleCursor) {
          var o2 = "";
          if (i3.name) {
            var a4 = n2.options[i3.name].cursorChecker;
            o2 = w.func(a4) ? a4(i3, n2, r3, t3._interacting) : e3.actions.map[i3.name].getCursor(i3);
          }
          re(t3.element, o2 || "", e3);
        } else
          e3.autoStart.cursorElement && re(e3.autoStart.cursorElement, "", e3);
      }
      var oe = { id: "auto-start/base", before: ["actions"], install: function(t3) {
        var e3 = t3.interactStatic, n2 = t3.defaults;
        t3.usePlugin($t2), n2.base.actionChecker = null, n2.base.styleCursor = true, V2(n2.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e3.maxInteractions = function(e4) {
          return ne3(e4, t3);
        }, t3.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: ee, cursorElement: null };
      }, listeners: { "interactions:down": function(t3, e3) {
        var n2 = t3.interaction, r3 = t3.pointer, i3 = t3.event, o2 = t3.eventTarget;
        n2.interacting() || te2(n2, Zt3(n2, r3, i3, o2, e3), e3);
      }, "interactions:move": function(t3, e3) {
        !function(t4, e4) {
          var n2 = t4.interaction, r3 = t4.pointer, i3 = t4.event, o2 = t4.eventTarget;
          "mouse" !== n2.pointerType || n2.pointerIsDown || n2.interacting() || te2(n2, Zt3(n2, r3, i3, o2, e4), e4);
        }(t3, e3), function(t4, e4) {
          var n2 = t4.interaction;
          if (n2.pointerIsDown && !n2.interacting() && n2.pointerWasMoved && n2.prepared.name) {
            e4.fire("autoStart:before-start", t4);
            var r3 = n2.interactable, i3 = n2.prepared.name;
            i3 && r3 && (r3.options[i3].manualStart || !ee(r3, n2.element, n2.prepared, e4) ? n2.stop() : (n2.start(n2.prepared, r3, n2.element), ie2(n2, e4)));
          }
        }(t3, e3);
      }, "interactions:stop": function(t3, e3) {
        var n2 = t3.interaction, r3 = n2.interactable;
        r3 && r3.options.styleCursor && re(n2.element, "", e3);
      } }, maxInteractions: ne3, withinInteractionLimit: ee, validateAction: Jt2 }, ae2 = oe;
      var se2 = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t3, e3) {
        var n2 = t3.interaction, r3 = t3.eventTarget, i3 = t3.dx, o2 = t3.dy;
        if ("drag" === n2.prepared.name) {
          var a4 = Math.abs(i3), s3 = Math.abs(o2), c3 = n2.interactable.options.drag, l3 = c3.startAxis, u2 = a4 > s3 ? "x" : a4 < s3 ? "y" : "xy";
          if (n2.prepared.axis = "start" === c3.lockAxis ? u2[0] : c3.lockAxis, "xy" !== u2 && "xy" !== l3 && l3 !== u2) {
            n2.prepared.name = null;
            for (var p2 = r3, f2 = function(t4) {
              if (t4 !== n2.interactable) {
                var i4 = n2.interactable.options.drag;
                if (!i4.manualStart && t4.testIgnoreAllow(i4, p2, r3)) {
                  var o3 = t4.getAction(n2.downPointer, n2.downEvent, n2, p2);
                  if (o3 && "drag" === o3.name && function(t5, e4) {
                    if (!e4)
                      return false;
                    var n3 = e4.options.drag.startAxis;
                    return "xy" === t5 || "xy" === n3 || n3 === t5;
                  }(u2, t4) && ae2.validateAction(o3, t4, p2, r3, e3))
                    return t4;
                }
              }
            }; w.element(p2); ) {
              var d4 = e3.interactables.forEachMatch(p2, f2);
              if (d4) {
                n2.prepared.name = "drag", n2.interactable = d4, n2.element = p2;
                break;
              }
              p2 = A3(p2);
            }
          }
        }
      } } };
      function ce3(t3) {
        var e3 = t3.prepared && t3.prepared.name;
        if (!e3)
          return null;
        var n2 = t3.interactable.options;
        return n2[e3].hold || n2[e3].delay;
      }
      var le = { id: "auto-start/hold", install: function(t3) {
        var e3 = t3.defaults;
        t3.usePlugin(ae2), e3.perAction.hold = 0, e3.perAction.delay = 0;
      }, listeners: { "interactions:new": function(t3) {
        t3.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(t3) {
        var e3 = t3.interaction, n2 = ce3(e3);
        n2 > 0 && (e3.autoStartHoldTimer = setTimeout(function() {
          e3.start(e3.prepared, e3.interactable, e3.element);
        }, n2));
      }, "interactions:move": function(t3) {
        var e3 = t3.interaction, n2 = t3.duplicate;
        e3.autoStartHoldTimer && e3.pointerWasMoved && !n2 && (clearTimeout(e3.autoStartHoldTimer), e3.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(t3) {
        var e3 = t3.interaction;
        ce3(e3) > 0 && (e3.prepared.name = null);
      } }, getHoldDuration: ce3 }, ue = le, pe2 = { id: "auto-start", install: function(t3) {
        t3.usePlugin(ae2), t3.usePlugin(ue), t3.usePlugin(se2);
      } }, fe2 = function(t3) {
        return /^(always|never|auto)$/.test(t3) ? (this.options.preventDefault = t3, this) : w.bool(t3) ? (this.options.preventDefault = t3 ? "always" : "never", this) : this.options.preventDefault;
      };
      function de(t3) {
        var e3 = t3.interaction, n2 = t3.event;
        e3.interactable && e3.interactable.checkAndPreventDefault(n2);
      }
      var he = { id: "core/interactablePreventDefault", install: function(t3) {
        var e3 = t3.Interactable;
        e3.prototype.preventDefault = fe2, e3.prototype.checkAndPreventDefault = function(e4) {
          return function(t4, e5, n2) {
            var r3 = t4.options.preventDefault;
            if ("never" !== r3)
              if ("always" !== r3) {
                if (e5.events.supportsPassive && /^touch(start|move)$/.test(n2.type)) {
                  var i3 = y4(n2.target).document, o2 = e5.getDocOptions(i3);
                  if (!o2 || !o2.events || false !== o2.events.passive)
                    return;
                }
                /^(mouse|pointer|touch)*(down|start)/i.test(n2.type) || w.element(n2.target) && R2(n2.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n2.preventDefault();
              } else
                n2.preventDefault();
          }(this, t3, e4);
        }, t3.interactions.docEvents.push({ type: "dragstart", listener: function(e4) {
          for (var n2 = 0, r3 = t3.interactions.list; n2 < r3.length; n2++) {
            var i3 = r3[n2];
            if (i3.element && (i3.element === e4.target || M(i3.element, e4.target)))
              return void i3.interactable.checkAndPreventDefault(e4);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce(function(t3, e3) {
        return t3["interactions:".concat(e3)] = de, t3;
      }, {}) };
      function ve(t3, e3) {
        if (e3.phaselessTypes[t3])
          return true;
        for (var n2 in e3.map)
          if (0 === t3.indexOf(n2) && t3.substr(n2.length) in e3.phases)
            return true;
        return false;
      }
      function ge2(t3) {
        var e3 = {};
        for (var n2 in t3) {
          var r3 = t3[n2];
          w.plainObject(r3) ? e3[n2] = ge2(r3) : w.array(r3) ? e3[n2] = mt(r3) : e3[n2] = r3;
        }
        return e3;
      }
      var me2 = function() {
        function t3(e3) {
          r2(this, t3), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e3, this.result = ye(), this.edges = { left: false, right: false, top: false, bottom: false };
        }
        return o(t3, [{ key: "start", value: function(t4, e3) {
          var n2, r3, i3 = t4.phase, o2 = this.interaction, a4 = function(t5) {
            var e4 = t5.interactable.options[t5.prepared.name], n3 = e4.modifiers;
            if (n3 && n3.length)
              return n3;
            return ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(t6) {
              var n4 = e4[t6];
              return n4 && n4.enabled && { options: n4, methods: n4._methods };
            }).filter(function(t6) {
              return !!t6;
            });
          }(o2);
          this.prepareStates(a4), this.startEdges = V2({}, o2.edges), this.edges = V2({}, this.startEdges), this.startOffset = (n2 = o2.rect, r3 = e3, n2 ? { left: r3.x - n2.left, top: r3.y - n2.top, right: n2.right - r3.x, bottom: n2.bottom - r3.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
          var s3 = this.fillArg({ phase: i3, pageCoords: e3, preEnd: false });
          return this.result = ye(), this.startAll(s3), this.result = this.setAll(s3);
        } }, { key: "fillArg", value: function(t4) {
          var e3 = this.interaction;
          return t4.interaction = e3, t4.interactable = e3.interactable, t4.element = e3.element, t4.rect || (t4.rect = e3.rect), t4.edges || (t4.edges = this.startEdges), t4.startOffset = this.startOffset, t4;
        } }, { key: "startAll", value: function(t4) {
          for (var e3 = 0, n2 = this.states; e3 < n2.length; e3++) {
            var r3 = n2[e3];
            r3.methods.start && (t4.state = r3, r3.methods.start(t4));
          }
        } }, { key: "setAll", value: function(t4) {
          var e3 = t4.phase, n2 = t4.preEnd, r3 = t4.skipModifiers, i3 = t4.rect, o2 = t4.edges;
          t4.coords = V2({}, t4.pageCoords), t4.rect = V2({}, i3), t4.edges = V2({}, o2);
          for (var a4 = r3 ? this.states.slice(r3) : this.states, s3 = ye(t4.coords, t4.rect), c3 = 0; c3 < a4.length; c3++) {
            var l3, u2 = a4[c3], p2 = u2.options, f2 = V2({}, t4.coords), d4 = null;
            null != (l3 = u2.methods) && l3.set && this.shouldDo(p2, n2, e3) && (t4.state = u2, d4 = u2.methods.set(t4), H2(t4.edges, t4.rect, { x: t4.coords.x - f2.x, y: t4.coords.y - f2.y })), s3.eventProps.push(d4);
          }
          V2(this.edges, t4.edges), s3.delta.x = t4.coords.x - t4.pageCoords.x, s3.delta.y = t4.coords.y - t4.pageCoords.y, s3.rectDelta.left = t4.rect.left - i3.left, s3.rectDelta.right = t4.rect.right - i3.right, s3.rectDelta.top = t4.rect.top - i3.top, s3.rectDelta.bottom = t4.rect.bottom - i3.bottom;
          var h2 = this.result.coords, v4 = this.result.rect;
          if (h2 && v4) {
            var g3 = s3.rect.left !== v4.left || s3.rect.right !== v4.right || s3.rect.top !== v4.top || s3.rect.bottom !== v4.bottom;
            s3.changed = g3 || h2.x !== s3.coords.x || h2.y !== s3.coords.y;
          }
          return s3;
        } }, { key: "applyToInteraction", value: function(t4) {
          var e3 = this.interaction, n2 = t4.phase, r3 = e3.coords.cur, i3 = e3.coords.start, o2 = this.result, a4 = this.startDelta, s3 = o2.delta;
          "start" === n2 && V2(this.startDelta, o2.delta);
          for (var c3 = 0, l3 = [[i3, a4], [r3, s3]]; c3 < l3.length; c3++) {
            var u2 = l3[c3], p2 = u2[0], f2 = u2[1];
            p2.page.x += f2.x, p2.page.y += f2.y, p2.client.x += f2.x, p2.client.y += f2.y;
          }
          var d4 = this.result.rectDelta, h2 = t4.rect || e3.rect;
          h2.left += d4.left, h2.right += d4.right, h2.top += d4.top, h2.bottom += d4.bottom, h2.width = h2.right - h2.left, h2.height = h2.bottom - h2.top;
        } }, { key: "setAndApply", value: function(t4) {
          var e3 = this.interaction, n2 = t4.phase, r3 = t4.preEnd, i3 = t4.skipModifiers, o2 = this.setAll(this.fillArg({ preEnd: r3, phase: n2, pageCoords: t4.modifiedCoords || e3.coords.cur.page }));
          if (this.result = o2, !o2.changed && (!i3 || i3 < this.states.length) && e3.interacting())
            return false;
          if (t4.modifiedCoords) {
            var a4 = e3.coords.cur.page, s3 = { x: t4.modifiedCoords.x - a4.x, y: t4.modifiedCoords.y - a4.y };
            o2.coords.x += s3.x, o2.coords.y += s3.y, o2.delta.x += s3.x, o2.delta.y += s3.y;
          }
          this.applyToInteraction(t4);
        } }, { key: "beforeEnd", value: function(t4) {
          var e3 = t4.interaction, n2 = t4.event, r3 = this.states;
          if (r3 && r3.length) {
            for (var i3 = false, o2 = 0; o2 < r3.length; o2++) {
              var a4 = r3[o2];
              t4.state = a4;
              var s3 = a4.options, c3 = a4.methods, l3 = c3.beforeEnd && c3.beforeEnd(t4);
              if (l3)
                return this.endResult = l3, false;
              i3 = i3 || !i3 && this.shouldDo(s3, true, t4.phase, true);
            }
            i3 && e3.move({ event: n2, preEnd: true });
          }
        } }, { key: "stop", value: function(t4) {
          var e3 = t4.interaction;
          if (this.states && this.states.length) {
            var n2 = V2({ states: this.states, interactable: e3.interactable, element: e3.element, rect: null }, t4);
            this.fillArg(n2);
            for (var r3 = 0, i3 = this.states; r3 < i3.length; r3++) {
              var o2 = i3[r3];
              n2.state = o2, o2.methods.stop && o2.methods.stop(n2);
            }
            this.states = null, this.endResult = null;
          }
        } }, { key: "prepareStates", value: function(t4) {
          this.states = [];
          for (var e3 = 0; e3 < t4.length; e3++) {
            var n2 = t4[e3], r3 = n2.options, i3 = n2.methods, o2 = n2.name;
            this.states.push({ options: r3, methods: i3, index: e3, name: o2 });
          }
          return this.states;
        } }, { key: "restoreInteractionCoords", value: function(t4) {
          var e3 = t4.interaction, n2 = e3.coords, r3 = e3.rect, i3 = e3.modification;
          if (i3.result) {
            for (var o2 = i3.startDelta, a4 = i3.result, s3 = a4.delta, c3 = a4.rectDelta, l3 = 0, u2 = [[n2.start, o2], [n2.cur, s3]]; l3 < u2.length; l3++) {
              var p2 = u2[l3], f2 = p2[0], d4 = p2[1];
              f2.page.x -= d4.x, f2.page.y -= d4.y, f2.client.x -= d4.x, f2.client.y -= d4.y;
            }
            r3.left -= c3.left, r3.right -= c3.right, r3.top -= c3.top, r3.bottom -= c3.bottom;
          }
        } }, { key: "shouldDo", value: function(t4, e3, n2, r3) {
          return !(!t4 || false === t4.enabled || r3 && !t4.endOnly || t4.endOnly && !e3 || "start" === n2 && !t4.setStart);
        } }, { key: "copyFrom", value: function(t4) {
          this.startOffset = t4.startOffset, this.startDelta = t4.startDelta, this.startEdges = t4.startEdges, this.edges = t4.edges, this.states = t4.states.map(function(t5) {
            return ge2(t5);
          }), this.result = ye(V2({}, t4.result.coords), V2({}, t4.result.rect));
        } }, { key: "destroy", value: function() {
          for (var t4 in this)
            this[t4] = null;
        } }]), t3;
      }();
      function ye(t3, e3) {
        return { rect: e3, coords: t3, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
      }
      function be(t3, e3) {
        var n2 = t3.defaults, r3 = { start: t3.start, set: t3.set, beforeEnd: t3.beforeEnd, stop: t3.stop }, i3 = function(t4) {
          var i4 = t4 || {};
          for (var o2 in i4.enabled = false !== i4.enabled, n2)
            o2 in i4 || (i4[o2] = n2[o2]);
          var a4 = { options: i4, methods: r3, name: e3, enable: function() {
            return i4.enabled = true, a4;
          }, disable: function() {
            return i4.enabled = false, a4;
          } };
          return a4;
        };
        return e3 && "string" == typeof e3 && (i3._defaults = n2, i3._methods = r3), i3;
      }
      function xe(t3) {
        var e3 = t3.iEvent, n2 = t3.interaction.modification.result;
        n2 && (e3.modifiers = n2.eventProps);
      }
      var we2 = { id: "modifiers/base", before: ["actions"], install: function(t3) {
        t3.defaults.perAction.modifiers = [];
      }, listeners: { "interactions:new": function(t3) {
        var e3 = t3.interaction;
        e3.modification = new me2(e3);
      }, "interactions:before-action-start": function(t3) {
        var e3 = t3.interaction, n2 = t3.interaction.modification;
        n2.start(t3, e3.coords.start.page), e3.edges = n2.edges, n2.applyToInteraction(t3);
      }, "interactions:before-action-move": function(t3) {
        var e3 = t3.interaction, n2 = e3.modification, r3 = n2.setAndApply(t3);
        return e3.edges = n2.edges, r3;
      }, "interactions:before-action-end": function(t3) {
        var e3 = t3.interaction, n2 = e3.modification, r3 = n2.beforeEnd(t3);
        return e3.edges = n2.startEdges, r3;
      }, "interactions:action-start": xe, "interactions:action-move": xe, "interactions:action-end": xe, "interactions:after-action-start": function(t3) {
        return t3.interaction.modification.restoreInteractionCoords(t3);
      }, "interactions:after-action-move": function(t3) {
        return t3.interaction.modification.restoreInteractionCoords(t3);
      }, "interactions:stop": function(t3) {
        return t3.interaction.modification.stop(t3);
      } } }, Ee2 = we2, Te3 = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} }, Se4 = function(t3) {
        s2(n2, t3);
        var e3 = p(n2);
        function n2(t4, i3, o2, a4, s3, c3, l3) {
          var p2;
          r2(this, n2), (p2 = e3.call(this, t4)).relatedTarget = null, p2.screenX = void 0, p2.screenY = void 0, p2.button = void 0, p2.buttons = void 0, p2.ctrlKey = void 0, p2.shiftKey = void 0, p2.altKey = void 0, p2.metaKey = void 0, p2.page = void 0, p2.client = void 0, p2.delta = void 0, p2.rect = void 0, p2.x0 = void 0, p2.y0 = void 0, p2.t0 = void 0, p2.dt = void 0, p2.duration = void 0, p2.clientX0 = void 0, p2.clientY0 = void 0, p2.velocity = void 0, p2.speed = void 0, p2.swipe = void 0, p2.axes = void 0, p2.preEnd = void 0, s3 = s3 || t4.element;
          var f2 = t4.interactable, d4 = (f2 && f2.options || Te3).deltaSource, h2 = K4(f2, s3, o2), v4 = "start" === a4, g3 = "end" === a4, m2 = v4 ? u(p2) : t4.prevEvent, y5 = v4 ? t4.coords.start : g3 ? { page: m2.page, client: m2.client, timeStamp: t4.coords.cur.timeStamp } : t4.coords.cur;
          return p2.page = V2({}, y5.page), p2.client = V2({}, y5.client), p2.rect = V2({}, t4.rect), p2.timeStamp = y5.timeStamp, g3 || (p2.page.x -= h2.x, p2.page.y -= h2.y, p2.client.x -= h2.x, p2.client.y -= h2.y), p2.ctrlKey = i3.ctrlKey, p2.altKey = i3.altKey, p2.shiftKey = i3.shiftKey, p2.metaKey = i3.metaKey, p2.button = i3.button, p2.buttons = i3.buttons, p2.target = s3, p2.currentTarget = s3, p2.preEnd = c3, p2.type = l3 || o2 + (a4 || ""), p2.interactable = f2, p2.t0 = v4 ? t4.pointers[t4.pointers.length - 1].downTime : m2.t0, p2.x0 = t4.coords.start.page.x - h2.x, p2.y0 = t4.coords.start.page.y - h2.y, p2.clientX0 = t4.coords.start.client.x - h2.x, p2.clientY0 = t4.coords.start.client.y - h2.y, p2.delta = v4 || g3 ? { x: 0, y: 0 } : { x: p2[d4].x - m2[d4].x, y: p2[d4].y - m2[d4].y }, p2.dt = t4.coords.delta.timeStamp, p2.duration = p2.timeStamp - p2.t0, p2.velocity = V2({}, t4.coords.velocity[d4]), p2.speed = Q2(p2.velocity.x, p2.velocity.y), p2.swipe = g3 || "inertiastart" === a4 ? p2.getSwipe() : null, p2;
        }
        return o(n2, [{ key: "getSwipe", value: function() {
          var t4 = this._interaction;
          if (t4.prevEvent.speed < 600 || this.timeStamp - t4.prevEvent.timeStamp > 150)
            return null;
          var e4 = 180 * Math.atan2(t4.prevEvent.velocityY, t4.prevEvent.velocityX) / Math.PI;
          e4 < 0 && (e4 += 360);
          var n3 = 112.5 <= e4 && e4 < 247.5, r3 = 202.5 <= e4 && e4 < 337.5;
          return { up: r3, down: !r3 && 22.5 <= e4 && e4 < 157.5, left: n3, right: !n3 && (292.5 <= e4 || e4 < 67.5), angle: e4, speed: t4.prevEvent.speed, velocity: { x: t4.prevEvent.velocityX, y: t4.prevEvent.velocityY } };
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }]), n2;
      }(vt);
      Object.defineProperties(Se4.prototype, { pageX: { get: function() {
        return this.page.x;
      }, set: function(t3) {
        this.page.x = t3;
      } }, pageY: { get: function() {
        return this.page.y;
      }, set: function(t3) {
        this.page.y = t3;
      } }, clientX: { get: function() {
        return this.client.x;
      }, set: function(t3) {
        this.client.x = t3;
      } }, clientY: { get: function() {
        return this.client.y;
      }, set: function(t3) {
        this.client.y = t3;
      } }, dx: { get: function() {
        return this.delta.x;
      }, set: function(t3) {
        this.delta.x = t3;
      } }, dy: { get: function() {
        return this.delta.y;
      }, set: function(t3) {
        this.delta.y = t3;
      } }, velocityX: { get: function() {
        return this.velocity.x;
      }, set: function(t3) {
        this.velocity.x = t3;
      } }, velocityY: { get: function() {
        return this.velocity.y;
      }, set: function(t3) {
        this.velocity.y = t3;
      } } });
      var _e = o(function t3(e3, n2, i3, o2, a4) {
        r2(this, t3), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e3, this.pointer = n2, this.event = i3, this.downTime = o2, this.downTarget = a4;
      }), Pe2 = function(t3) {
        return t3.interactable = "", t3.element = "", t3.prepared = "", t3.pointerIsDown = "", t3.pointerWasMoved = "", t3._proxy = "", t3;
      }({}), Oe2 = function(t3) {
        return t3.start = "", t3.move = "", t3.end = "", t3.stop = "", t3.interacting = "", t3;
      }({}), ke2 = 0, De = function() {
        function t3(e3) {
          var n2 = this, i3 = e3.pointerType, o2 = e3.scopeFire;
          r2(this, t3), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = false, this.pointerWasMoved = false, this._interacting = false, this._ending = false, this._stopped = true, this._proxy = void 0, this.simulation = null, this.doMove = Nt(function(t4) {
            this.move(t4);
          }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = ke2++, this._scopeFire = o2, this.pointerType = i3;
          var a4 = this;
          this._proxy = {};
          var s3 = function(t4) {
            Object.defineProperty(n2._proxy, t4, { get: function() {
              return a4[t4];
            } });
          };
          for (var c3 in Pe2)
            s3(c3);
          var l3 = function(t4) {
            Object.defineProperty(n2._proxy, t4, { value: function() {
              return a4[t4].apply(a4, arguments);
            } });
          };
          for (var u2 in Oe2)
            l3(u2);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return o(t3, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(t4, e3, n2) {
          var r3 = this.updatePointer(t4, e3, n2, true), i3 = this.pointers[r3];
          this._scopeFire("interactions:down", { pointer: t4, event: e3, eventTarget: n2, pointerIndex: r3, pointerInfo: i3, type: "down", interaction: this });
        } }, { key: "start", value: function(t4, e3, n2) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < ("gesture" === t4.name ? 2 : 1) || !e3.options[t4.name].enabled) && (Ut(this.prepared, t4), this.interactable = e3, this.element = n2, this.rect = e3.getRect(n2), this.edges = this.prepared.edges ? V2({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(t4, e3, n2) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(t4, e3, n2, false);
          var r3, i3, o2 = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (r3 = this.coords.cur.client.x - this.coords.start.client.x, i3 = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Q2(r3, i3) > this.pointerMoveTolerance);
          var a4, s3, c3, l3 = this.getPointerIndex(t4), u2 = { pointer: t4, pointerIndex: l3, pointerInfo: this.pointers[l3], event: e3, type: "move", eventTarget: n2, dx: r3, dy: i3, duplicate: o2, interaction: this };
          o2 || (a4 = this.coords.velocity, s3 = this.coords.delta, c3 = Math.max(s3.timeStamp / 1e3, 1e-3), a4.page.x = s3.page.x / c3, a4.page.y = s3.page.y / c3, a4.client.x = s3.client.x / c3, a4.client.y = s3.client.y / c3, a4.timeStamp = c3), this._scopeFire("interactions:move", u2), o2 || this.simulation || (this.interacting() && (u2.type = null, this.move(u2)), this.pointerWasMoved && et(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(t4) {
          t4 && t4.event || nt(this.coords.delta), (t4 = V2({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, t4 || {})).phase = "move", this._doPhase(t4);
        } }, { key: "pointerUp", value: function(t4, e3, n2, r3) {
          var i3 = this.getPointerIndex(t4);
          -1 === i3 && (i3 = this.updatePointer(t4, e3, n2, false));
          var o2 = /cancel$/i.test(e3.type) ? "cancel" : "up";
          this._scopeFire("interactions:".concat(o2), { pointer: t4, pointerIndex: i3, pointerInfo: this.pointers[i3], event: e3, eventTarget: n2, type: o2, curEventTarget: r3, interaction: this }), this.simulation || this.end(e3), this.removePointer(t4, e3);
        } }, { key: "documentBlur", value: function(t4) {
          this.end(t4), this._scopeFire("interactions:blur", { event: t4, type: "blur", interaction: this });
        } }, { key: "end", value: function(t4) {
          var e3;
          this._ending = true, t4 = t4 || this._latestPointer.event, this.interacting() && (e3 = this._doPhase({ event: t4, interaction: this, phase: "end" })), this._ending = false, true === e3 && this.stop();
        } }, { key: "currentAction", value: function() {
          return this._interacting ? this.prepared.name : null;
        } }, { key: "interacting", value: function() {
          return this._interacting;
        } }, { key: "stop", value: function() {
          this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
        } }, { key: "getPointerIndex", value: function(t4) {
          var e3 = at(t4);
          return "mouse" === this.pointerType || "pen" === this.pointerType ? this.pointers.length - 1 : yt(this.pointers, function(t5) {
            return t5.id === e3;
          });
        } }, { key: "getPointerInfo", value: function(t4) {
          return this.pointers[this.getPointerIndex(t4)];
        } }, { key: "updatePointer", value: function(t4, e3, n2, r3) {
          var i3, o2, a4, s3 = at(t4), c3 = this.getPointerIndex(t4), l3 = this.pointers[c3];
          return r3 = false !== r3 && (r3 || /(down|start)$/i.test(e3.type)), l3 ? l3.pointer = t4 : (l3 = new _e(s3, t4, e3, null, null), c3 = this.pointers.length, this.pointers.push(l3)), st2(this.coords.cur, this.pointers.map(function(t5) {
            return t5.pointer;
          }), this._now()), i3 = this.coords.delta, o2 = this.coords.prev, a4 = this.coords.cur, i3.page.x = a4.page.x - o2.page.x, i3.page.y = a4.page.y - o2.page.y, i3.client.x = a4.client.x - o2.client.x, i3.client.y = a4.client.y - o2.client.y, i3.timeStamp = a4.timeStamp - o2.timeStamp, r3 && (this.pointerIsDown = true, l3.downTime = this.coords.cur.timeStamp, l3.downTarget = n2, tt(this.downPointer, t4), this.interacting() || (et(this.coords.start, this.coords.cur), et(this.coords.prev, this.coords.cur), this.downEvent = e3, this.pointerWasMoved = false)), this._updateLatestPointer(t4, e3, n2), this._scopeFire("interactions:update-pointer", { pointer: t4, event: e3, eventTarget: n2, down: r3, pointerInfo: l3, pointerIndex: c3, interaction: this }), c3;
        } }, { key: "removePointer", value: function(t4, e3) {
          var n2 = this.getPointerIndex(t4);
          if (-1 !== n2) {
            var r3 = this.pointers[n2];
            this._scopeFire("interactions:remove-pointer", { pointer: t4, event: e3, eventTarget: null, pointerIndex: n2, pointerInfo: r3, interaction: this }), this.pointers.splice(n2, 1), this.pointerIsDown = false;
          }
        } }, { key: "_updateLatestPointer", value: function(t4, e3, n2) {
          this._latestPointer.pointer = t4, this._latestPointer.event = e3, this._latestPointer.eventTarget = n2;
        } }, { key: "destroy", value: function() {
          this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
        } }, { key: "_createPreparedEvent", value: function(t4, e3, n2, r3) {
          return new Se4(this, t4, this.prepared.name, e3, this.element, n2, r3);
        } }, { key: "_fireEvent", value: function(t4) {
          var e3;
          null == (e3 = this.interactable) || e3.fire(t4), (!this.prevEvent || t4.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t4);
        } }, { key: "_doPhase", value: function(t4) {
          var e3 = t4.event, n2 = t4.phase, r3 = t4.preEnd, i3 = t4.type, o2 = this.rect;
          if (o2 && "move" === n2 && (H2(this.edges, o2, this.coords.delta[this.interactable.options.deltaSource]), o2.width = o2.right - o2.left, o2.height = o2.bottom - o2.top), false === this._scopeFire("interactions:before-action-".concat(n2), t4))
            return false;
          var a4 = t4.iEvent = this._createPreparedEvent(e3, n2, r3, i3);
          return this._scopeFire("interactions:action-".concat(n2), t4), "start" === n2 && (this.prevEvent = a4), this._fireEvent(a4), this._scopeFire("interactions:after-action-".concat(n2), t4), true;
        } }, { key: "_now", value: function() {
          return Date.now();
        } }]), t3;
      }();
      function Ie(t3) {
        Me3(t3.interaction);
      }
      function Me3(t3) {
        if (!function(t4) {
          return !(!t4.offset.pending.x && !t4.offset.pending.y);
        }(t3))
          return false;
        var e3 = t3.offset.pending;
        return Ae2(t3.coords.cur, e3), Ae2(t3.coords.delta, e3), H2(t3.edges, t3.rect, e3), e3.x = 0, e3.y = 0, true;
      }
      function ze2(t3) {
        var e3 = t3.x, n2 = t3.y;
        this.offset.pending.x += e3, this.offset.pending.y += n2, this.offset.total.x += e3, this.offset.total.y += n2;
      }
      function Ae2(t3, e3) {
        var n2 = t3.page, r3 = t3.client, i3 = e3.x, o2 = e3.y;
        n2.x += i3, n2.y += o2, r3.x += i3, r3.y += o2;
      }
      Oe2.offsetBy = "";
      var Re2 = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t3) {
        t3.Interaction.prototype.offsetBy = ze2;
      }, listeners: { "interactions:new": function(t3) {
        t3.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
      }, "interactions:update-pointer": function(t3) {
        return function(t4) {
          t4.pointerIsDown && (Ae2(t4.coords.cur, t4.offset.total), t4.offset.pending.x = 0, t4.offset.pending.y = 0);
        }(t3.interaction);
      }, "interactions:before-action-start": Ie, "interactions:before-action-move": Ie, "interactions:before-action-end": function(t3) {
        var e3 = t3.interaction;
        if (Me3(e3))
          return e3.move({ offset: true }), e3.end(), false;
      }, "interactions:stop": function(t3) {
        var e3 = t3.interaction;
        e3.offset.total.x = 0, e3.offset.total.y = 0, e3.offset.pending.x = 0, e3.offset.pending.y = 0;
      } } }, Ce = Re2;
      var je2 = function() {
        function t3(e3) {
          r2(this, t3), this.active = false, this.isModified = false, this.smoothEnd = false, this.allowResume = false, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e3;
        }
        return o(t3, [{ key: "start", value: function(t4) {
          var e3 = this.interaction, n2 = Fe2(e3);
          if (!n2 || !n2.enabled)
            return false;
          var r3 = e3.coords.velocity.client, i3 = Q2(r3.x, r3.y), o2 = this.modification || (this.modification = new me2(e3));
          if (o2.copyFrom(e3.modification), this.t0 = e3._now(), this.allowResume = n2.allowResume, this.v0 = i3, this.currentOffset = { x: 0, y: 0 }, this.startCoords = e3.coords.cur.page, this.modifierArg = o2.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - e3.coords.cur.timeStamp < 50 && i3 > n2.minSpeed && i3 > n2.endSpeed)
            this.startInertia();
          else {
            if (o2.result = o2.setAll(this.modifierArg), !o2.result.changed)
              return false;
            this.startSmoothEnd();
          }
          return e3.modification.result.rect = null, e3.offsetBy(this.targetOffset), e3._doPhase({ interaction: e3, event: t4, phase: "inertiastart" }), e3.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), e3.modification.result.rect = null, this.active = true, e3.simulation = this, true;
        } }, { key: "startInertia", value: function() {
          var t4 = this, e3 = this.interaction.coords.velocity.client, n2 = Fe2(this.interaction), r3 = n2.resistance, i3 = -Math.log(n2.endSpeed / this.v0) / r3;
          this.targetOffset = { x: (e3.x - i3) / r3, y: (e3.y - i3) / r3 }, this.te = i3, this.lambda_v0 = r3 / this.v0, this.one_ve_v0 = 1 - n2.endSpeed / this.v0;
          var o2 = this.modification, a4 = this.modifierArg;
          a4.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, o2.result = o2.setAll(a4), o2.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + o2.result.delta.x, y: this.targetOffset.y + o2.result.delta.y }), this.onNextFrame(function() {
            return t4.inertiaTick();
          });
        } }, { key: "startSmoothEnd", value: function() {
          var t4 = this;
          this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
            return t4.smoothEndTick();
          });
        } }, { key: "onNextFrame", value: function(t4) {
          var e3 = this;
          this.timeout = Lt.request(function() {
            e3.active && t4();
          });
        } }, { key: "inertiaTick", value: function() {
          var t4, e3, n2, r3, i3, o2, a4, s3 = this, c3 = this.interaction, l3 = Fe2(c3).resistance, u2 = (c3._now() - this.t0) / 1e3;
          if (u2 < this.te) {
            var p2, f2 = 1 - (Math.exp(-l3 * u2) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (t4 = 0, e3 = 0, n2 = this.targetOffset.x, r3 = this.targetOffset.y, i3 = this.modifiedOffset.x, o2 = this.modifiedOffset.y, p2 = { x: Ye2(a4 = f2, t4, n2, i3), y: Ye2(a4, e3, r3, o2) }) : p2 = { x: this.targetOffset.x * f2, y: this.targetOffset.y * f2 };
            var d4 = { x: p2.x - this.currentOffset.x, y: p2.y - this.currentOffset.y };
            this.currentOffset.x += d4.x, this.currentOffset.y += d4.y, c3.offsetBy(d4), c3.move(), this.onNextFrame(function() {
              return s3.inertiaTick();
            });
          } else
            c3.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var t4 = this, e3 = this.interaction, n2 = e3._now() - this.t0, r3 = Fe2(e3).smoothEndDuration;
          if (n2 < r3) {
            var i3 = { x: Le(n2, 0, this.targetOffset.x, r3), y: Le(n2, 0, this.targetOffset.y, r3) }, o2 = { x: i3.x - this.currentOffset.x, y: i3.y - this.currentOffset.y };
            this.currentOffset.x += o2.x, this.currentOffset.y += o2.y, e3.offsetBy(o2), e3.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
              return t4.smoothEndTick();
            });
          } else
            e3.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(t4) {
          var e3 = t4.pointer, n2 = t4.event, r3 = t4.eventTarget, i3 = this.interaction;
          i3.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), i3.updatePointer(e3, n2, r3, true), i3._doPhase({ interaction: i3, event: n2, phase: "resume" }), et(i3.coords.prev, i3.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = false, this.interaction.simulation = null, Lt.cancel(this.timeout);
        } }]), t3;
      }();
      function Fe2(t3) {
        var e3 = t3.interactable, n2 = t3.prepared;
        return e3 && e3.options && n2.name && e3.options[n2.name].inertia;
      }
      var Xe3 = { id: "inertia", before: ["modifiers", "actions"], install: function(t3) {
        var e3 = t3.defaults;
        t3.usePlugin(Ce), t3.usePlugin(Ee2), t3.actions.phases.inertiastart = true, t3.actions.phases.resume = true, e3.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(t3) {
        var e3 = t3.interaction;
        e3.inertia = new je2(e3);
      }, "interactions:before-action-end": function(t3) {
        var e3 = t3.interaction, n2 = t3.event;
        return (!e3._interacting || e3.simulation || !e3.inertia.start(n2)) && null;
      }, "interactions:down": function(t3) {
        var e3 = t3.interaction, n2 = t3.eventTarget, r3 = e3.inertia;
        if (r3.active)
          for (var i3 = n2; w.element(i3); ) {
            if (i3 === e3.element) {
              r3.resume(t3);
              break;
            }
            i3 = A3(i3);
          }
      }, "interactions:stop": function(t3) {
        var e3 = t3.interaction.inertia;
        e3.active && e3.stop();
      }, "interactions:before-action-resume": function(t3) {
        var e3 = t3.interaction.modification;
        e3.stop(t3), e3.start(t3, t3.interaction.coords.cur.page), e3.applyToInteraction(t3);
      }, "interactions:before-action-inertiastart": function(t3) {
        return t3.interaction.modification.setAndApply(t3);
      }, "interactions:action-resume": xe, "interactions:action-inertiastart": xe, "interactions:after-action-inertiastart": function(t3) {
        return t3.interaction.modification.restoreInteractionCoords(t3);
      }, "interactions:after-action-resume": function(t3) {
        return t3.interaction.modification.restoreInteractionCoords(t3);
      } } };
      function Ye2(t3, e3, n2, r3) {
        var i3 = 1 - t3;
        return i3 * i3 * e3 + 2 * i3 * t3 * n2 + t3 * t3 * r3;
      }
      function Le(t3, e3, n2, r3) {
        return -n2 * (t3 /= r3) * (t3 - 2) + e3;
      }
      var qe2 = Xe3;
      function Be2(t3, e3) {
        for (var n2 = 0; n2 < e3.length; n2++) {
          var r3 = e3[n2];
          if (t3.immediatePropagationStopped)
            break;
          r3(t3);
        }
      }
      var Ve2 = function() {
        function t3(e3) {
          r2(this, t3), this.options = void 0, this.types = {}, this.propagationStopped = false, this.immediatePropagationStopped = false, this.global = void 0, this.options = V2({}, e3 || {});
        }
        return o(t3, [{ key: "fire", value: function(t4) {
          var e3, n2 = this.global;
          (e3 = this.types[t4.type]) && Be2(t4, e3), !t4.propagationStopped && n2 && (e3 = n2[t4.type]) && Be2(t4, e3);
        } }, { key: "on", value: function(t4, e3) {
          var n2 = $2(t4, e3);
          for (t4 in n2)
            this.types[t4] = gt(this.types[t4] || [], n2[t4]);
        } }, { key: "off", value: function(t4, e3) {
          var n2 = $2(t4, e3);
          for (t4 in n2) {
            var r3 = this.types[t4];
            if (r3 && r3.length)
              for (var i3 = 0, o2 = n2[t4]; i3 < o2.length; i3++) {
                var a4 = o2[i3], s3 = r3.indexOf(a4);
                -1 !== s3 && r3.splice(s3, 1);
              }
          }
        } }, { key: "getRect", value: function(t4) {
          return null;
        } }]), t3;
      }();
      var We2 = function() {
        function t3(e3) {
          r2(this, t3), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e3, tt(this, e3);
        }
        return o(t3, [{ key: "preventOriginalDefault", value: function() {
          this.originalEvent.preventDefault();
        } }, { key: "stopPropagation", value: function() {
          this.originalEvent.stopPropagation();
        } }, { key: "stopImmediatePropagation", value: function() {
          this.originalEvent.stopImmediatePropagation();
        } }]), t3;
      }();
      function Ge(t3) {
        return w.object(t3) ? { capture: !!t3.capture, passive: !!t3.passive } : { capture: !!t3, passive: false };
      }
      function Ne2(t3, e3) {
        return t3 === e3 || ("boolean" == typeof t3 ? !!e3.capture === t3 && false == !!e3.passive : !!t3.capture == !!e3.capture && !!t3.passive == !!e3.passive);
      }
      var Ue = { id: "events", install: function(t3) {
        var e3, n2 = [], r3 = {}, i3 = [], o2 = { add: a4, remove: s3, addDelegate: function(t4, e4, n3, o3, s4) {
          var u2 = Ge(s4);
          if (!r3[n3]) {
            r3[n3] = [];
            for (var p2 = 0; p2 < i3.length; p2++) {
              var f2 = i3[p2];
              a4(f2, n3, c3), a4(f2, n3, l3, true);
            }
          }
          var d4 = r3[n3], h2 = bt2(d4, function(n4) {
            return n4.selector === t4 && n4.context === e4;
          });
          h2 || (h2 = { selector: t4, context: e4, listeners: [] }, d4.push(h2));
          h2.listeners.push({ func: o3, options: u2 });
        }, removeDelegate: function(t4, e4, n3, i4, o3) {
          var a5, u2 = Ge(o3), p2 = r3[n3], f2 = false;
          if (!p2)
            return;
          for (a5 = p2.length - 1; a5 >= 0; a5--) {
            var d4 = p2[a5];
            if (d4.selector === t4 && d4.context === e4) {
              for (var h2 = d4.listeners, v4 = h2.length - 1; v4 >= 0; v4--) {
                var g3 = h2[v4];
                if (g3.func === i4 && Ne2(g3.options, u2)) {
                  h2.splice(v4, 1), h2.length || (p2.splice(a5, 1), s3(e4, n3, c3), s3(e4, n3, l3, true)), f2 = true;
                  break;
                }
              }
              if (f2)
                break;
            }
          }
        }, delegateListener: c3, delegateUseCapture: l3, delegatedEvents: r3, documents: i3, targets: n2, supportsOptions: false, supportsPassive: false };
        function a4(t4, e4, r4, i4) {
          if (t4.addEventListener) {
            var a5 = Ge(i4), s4 = bt2(n2, function(e5) {
              return e5.eventTarget === t4;
            });
            s4 || (s4 = { eventTarget: t4, events: {} }, n2.push(s4)), s4.events[e4] || (s4.events[e4] = []), bt2(s4.events[e4], function(t5) {
              return t5.func === r4 && Ne2(t5.options, a5);
            }) || (t4.addEventListener(e4, r4, o2.supportsOptions ? a5 : a5.capture), s4.events[e4].push({ func: r4, options: a5 }));
          }
        }
        function s3(t4, e4, r4, i4) {
          if (t4.addEventListener && t4.removeEventListener) {
            var a5 = yt(n2, function(e5) {
              return e5.eventTarget === t4;
            }), c4 = n2[a5];
            if (c4 && c4.events)
              if ("all" !== e4) {
                var l4 = false, u2 = c4.events[e4];
                if (u2) {
                  if ("all" === r4) {
                    for (var p2 = u2.length - 1; p2 >= 0; p2--) {
                      var f2 = u2[p2];
                      s3(t4, e4, f2.func, f2.options);
                    }
                    return;
                  }
                  for (var d4 = Ge(i4), h2 = 0; h2 < u2.length; h2++) {
                    var v4 = u2[h2];
                    if (v4.func === r4 && Ne2(v4.options, d4)) {
                      t4.removeEventListener(e4, r4, o2.supportsOptions ? d4 : d4.capture), u2.splice(h2, 1), 0 === u2.length && (delete c4.events[e4], l4 = true);
                      break;
                    }
                  }
                }
                l4 && !Object.keys(c4.events).length && n2.splice(a5, 1);
              } else
                for (e4 in c4.events)
                  c4.events.hasOwnProperty(e4) && s3(t4, e4, "all");
          }
        }
        function c3(t4, e4) {
          for (var n3 = Ge(e4), i4 = new We2(t4), o3 = r3[t4.type], a5 = ht(t4)[0], s4 = a5; w.element(s4); ) {
            for (var c4 = 0; c4 < o3.length; c4++) {
              var l4 = o3[c4], u2 = l4.selector, p2 = l4.context;
              if (R2(s4, u2) && M(p2, a5) && M(p2, s4)) {
                var f2 = l4.listeners;
                i4.currentTarget = s4;
                for (var d4 = 0; d4 < f2.length; d4++) {
                  var h2 = f2[d4];
                  Ne2(h2.options, n3) && h2.func(i4);
                }
              }
            }
            s4 = A3(s4);
          }
        }
        function l3(t4) {
          return c3(t4, true);
        }
        return null == (e3 = t3.document) || e3.createElement("div").addEventListener("test", null, { get capture() {
          return o2.supportsOptions = true;
        }, get passive() {
          return o2.supportsPassive = true;
        } }), t3.events = o2, o2;
      } }, He = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t3) {
        for (var e3 = 0, n2 = He.methodOrder; e3 < n2.length; e3++) {
          var r3 = n2[e3], i3 = He[r3](t3);
          if (i3)
            return i3;
        }
        return null;
      }, simulationResume: function(t3) {
        var e3 = t3.pointerType, n2 = t3.eventType, r3 = t3.eventTarget, i3 = t3.scope;
        if (!/down|start/i.test(n2))
          return null;
        for (var o2 = 0, a4 = i3.interactions.list; o2 < a4.length; o2++) {
          var s3 = a4[o2], c3 = r3;
          if (s3.simulation && s3.simulation.allowResume && s3.pointerType === e3)
            for (; c3; ) {
              if (c3 === s3.element)
                return s3;
              c3 = A3(c3);
            }
        }
        return null;
      }, mouseOrPen: function(t3) {
        var e3, n2 = t3.pointerId, r3 = t3.pointerType, i3 = t3.eventType, o2 = t3.scope;
        if ("mouse" !== r3 && "pen" !== r3)
          return null;
        for (var a4 = 0, s3 = o2.interactions.list; a4 < s3.length; a4++) {
          var c3 = s3[a4];
          if (c3.pointerType === r3) {
            if (c3.simulation && !Ke2(c3, n2))
              continue;
            if (c3.interacting())
              return c3;
            e3 || (e3 = c3);
          }
        }
        if (e3)
          return e3;
        for (var l3 = 0, u2 = o2.interactions.list; l3 < u2.length; l3++) {
          var p2 = u2[l3];
          if (!(p2.pointerType !== r3 || /down/i.test(i3) && p2.simulation))
            return p2;
        }
        return null;
      }, hasPointer: function(t3) {
        for (var e3 = t3.pointerId, n2 = 0, r3 = t3.scope.interactions.list; n2 < r3.length; n2++) {
          var i3 = r3[n2];
          if (Ke2(i3, e3))
            return i3;
        }
        return null;
      }, idle: function(t3) {
        for (var e3 = t3.pointerType, n2 = 0, r3 = t3.scope.interactions.list; n2 < r3.length; n2++) {
          var i3 = r3[n2];
          if (1 === i3.pointers.length) {
            var o2 = i3.interactable;
            if (o2 && (!o2.options.gesture || !o2.options.gesture.enabled))
              continue;
          } else if (i3.pointers.length >= 2)
            continue;
          if (!i3.interacting() && e3 === i3.pointerType)
            return i3;
        }
        return null;
      } };
      function Ke2(t3, e3) {
        return t3.pointers.some(function(t4) {
          return t4.id === e3;
        });
      }
      var $e2 = He, Je2 = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function Qe(t3, e3) {
        return function(n2) {
          var r3 = e3.interactions.list, i3 = dt(n2), o2 = ht(n2), a4 = o2[0], s3 = o2[1], c3 = [];
          if (/^touch/.test(n2.type)) {
            e3.prevTouchTime = e3.now();
            for (var l3 = 0, u2 = n2.changedTouches; l3 < u2.length; l3++) {
              var p2 = u2[l3], f2 = { pointer: p2, pointerId: at(p2), pointerType: i3, eventType: n2.type, eventTarget: a4, curEventTarget: s3, scope: e3 }, d4 = Ze3(f2);
              c3.push([f2.pointer, f2.eventTarget, f2.curEventTarget, d4]);
            }
          } else {
            var h2 = false;
            if (!I.supportsPointerEvent && /mouse/.test(n2.type)) {
              for (var v4 = 0; v4 < r3.length && !h2; v4++)
                h2 = "mouse" !== r3[v4].pointerType && r3[v4].pointerIsDown;
              h2 = h2 || e3.now() - e3.prevTouchTime < 500 || 0 === n2.timeStamp;
            }
            if (!h2) {
              var g3 = { pointer: n2, pointerId: at(n2), pointerType: i3, eventType: n2.type, curEventTarget: s3, eventTarget: a4, scope: e3 }, m2 = Ze3(g3);
              c3.push([g3.pointer, g3.eventTarget, g3.curEventTarget, m2]);
            }
          }
          for (var y5 = 0; y5 < c3.length; y5++) {
            var b3 = c3[y5], x4 = b3[0], w2 = b3[1], E4 = b3[2];
            b3[3][t3](x4, n2, w2, E4);
          }
        };
      }
      function Ze3(t3) {
        var e3 = t3.pointerType, n2 = t3.scope, r3 = { interaction: $e2.search(t3), searchDetails: t3 };
        return n2.fire("interactions:find", r3), r3.interaction || n2.interactions.new({ pointerType: e3 });
      }
      function tn2(t3, e3) {
        var n2 = t3.doc, r3 = t3.scope, i3 = t3.options, o2 = r3.interactions.docEvents, a4 = r3.events, s3 = a4[e3];
        for (var c3 in r3.browser.isIOS && !i3.events && (i3.events = { passive: false }), a4.delegatedEvents)
          s3(n2, c3, a4.delegateListener), s3(n2, c3, a4.delegateUseCapture, true);
        for (var l3 = i3 && i3.events, u2 = 0; u2 < o2.length; u2++) {
          var p2 = o2[u2];
          s3(n2, p2.type, p2.listener, l3);
        }
      }
      var en2 = { id: "core/interactions", install: function(t3) {
        for (var e3 = {}, n2 = 0; n2 < Je2.length; n2++) {
          var i3 = Je2[n2];
          e3[i3] = Qe(i3, t3);
        }
        var a4, c3 = I.pEventTypes;
        function l3() {
          for (var e4 = 0, n3 = t3.interactions.list; e4 < n3.length; e4++) {
            var r3 = n3[e4];
            if (r3.pointerIsDown && "touch" === r3.pointerType && !r3._interacting)
              for (var i4 = function() {
                var e5 = a5[o2];
                t3.documents.some(function(t4) {
                  return M(t4.doc, e5.downTarget);
                }) || r3.removePointer(e5.pointer, e5.event);
              }, o2 = 0, a5 = r3.pointers; o2 < a5.length; o2++)
                i4();
          }
        }
        (a4 = k2.PointerEvent ? [{ type: c3.down, listener: l3 }, { type: c3.down, listener: e3.pointerDown }, { type: c3.move, listener: e3.pointerMove }, { type: c3.up, listener: e3.pointerUp }, { type: c3.cancel, listener: e3.pointerUp }] : [{ type: "mousedown", listener: e3.pointerDown }, { type: "mousemove", listener: e3.pointerMove }, { type: "mouseup", listener: e3.pointerUp }, { type: "touchstart", listener: l3 }, { type: "touchstart", listener: e3.pointerDown }, { type: "touchmove", listener: e3.pointerMove }, { type: "touchend", listener: e3.pointerUp }, { type: "touchcancel", listener: e3.pointerUp }]).push({ type: "blur", listener: function(e4) {
          for (var n3 = 0, r3 = t3.interactions.list; n3 < r3.length; n3++) {
            r3[n3].documentBlur(e4);
          }
        } }), t3.prevTouchTime = 0, t3.Interaction = function(e4) {
          s2(i4, e4);
          var n3 = p(i4);
          function i4() {
            return r2(this, i4), n3.apply(this, arguments);
          }
          return o(i4, [{ key: "pointerMoveTolerance", get: function() {
            return t3.interactions.pointerMoveTolerance;
          }, set: function(e5) {
            t3.interactions.pointerMoveTolerance = e5;
          } }, { key: "_now", value: function() {
            return t3.now();
          } }]), i4;
        }(De), t3.interactions = { list: [], new: function(e4) {
          e4.scopeFire = function(e5, n4) {
            return t3.fire(e5, n4);
          };
          var n3 = new t3.Interaction(e4);
          return t3.interactions.list.push(n3), n3;
        }, listeners: e3, docEvents: a4, pointerMoveTolerance: 1 }, t3.usePlugin(he);
      }, listeners: { "scope:add-document": function(t3) {
        return tn2(t3, "add");
      }, "scope:remove-document": function(t3) {
        return tn2(t3, "remove");
      }, "interactable:unset": function(t3, e3) {
        for (var n2 = t3.interactable, r3 = e3.interactions.list.length - 1; r3 >= 0; r3--) {
          var i3 = e3.interactions.list[r3];
          i3.interactable === n2 && (i3.stop(), e3.fire("interactions:destroy", { interaction: i3 }), i3.destroy(), e3.interactions.list.length > 2 && e3.interactions.list.splice(r3, 1));
        }
      } }, onDocSignal: tn2, doOnInteractions: Qe, methodNames: Je2 }, nn2 = en2, rn2 = function(t3) {
        return t3[t3.On = 0] = "On", t3[t3.Off = 1] = "Off", t3;
      }(rn2 || {}), on2 = function() {
        function t3(e3, n2, i3, o2) {
          r2(this, t3), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new Ve2(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n2.actions, this.target = e3, this._context = n2.context || i3, this._win = y4(B2(e3) ? this._context : e3), this._doc = this._win.document, this._scopeEvents = o2, this.set(n2);
        }
        return o(t3, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(t4, e3) {
          return w.func(e3.onstart) && this.on("".concat(t4, "start"), e3.onstart), w.func(e3.onmove) && this.on("".concat(t4, "move"), e3.onmove), w.func(e3.onend) && this.on("".concat(t4, "end"), e3.onend), w.func(e3.oninertiastart) && this.on("".concat(t4, "inertiastart"), e3.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(t4, e3, n2) {
          var r3, i3 = this, o2 = null == (r3 = this._actions.map[t4]) ? void 0 : r3.filterEventType, a4 = function(t5) {
            return (null == o2 || o2(t5)) && ve(t5, i3._actions);
          };
          (w.array(e3) || w.object(e3)) && this._onOff(rn2.Off, t4, e3, void 0, a4), (w.array(n2) || w.object(n2)) && this._onOff(rn2.On, t4, n2, void 0, a4);
        } }, { key: "setPerAction", value: function(t4, e3) {
          var n2 = this._defaults;
          for (var r3 in e3) {
            var i3 = r3, o2 = this.options[t4], a4 = e3[i3];
            "listeners" === i3 && this.updatePerActionListeners(t4, o2.listeners, a4), w.array(a4) ? o2[i3] = mt(a4) : w.plainObject(a4) ? (o2[i3] = V2(o2[i3] || {}, ge2(a4)), w.object(n2.perAction[i3]) && "enabled" in n2.perAction[i3] && (o2[i3].enabled = false !== a4.enabled)) : w.bool(a4) && w.object(n2.perAction[i3]) ? o2[i3].enabled = a4 : o2[i3] = a4;
          }
        } }, { key: "getRect", value: function(t4) {
          return t4 = t4 || (w.element(this.target) ? this.target : null), w.string(this.target) && (t4 = t4 || this._context.querySelector(this.target)), L2(t4);
        } }, { key: "rectChecker", value: function(t4) {
          var e3 = this;
          return w.func(t4) ? (this.getRect = function(n2) {
            var r3 = V2({}, t4.apply(e3, n2));
            return "width" in r3 || (r3.width = r3.right - r3.left, r3.height = r3.bottom - r3.top), r3;
          }, this) : null === t4 ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(t4, e3) {
          if (B2(e3) || w.object(e3)) {
            for (var n2 in this.options[t4] = e3, this._actions.map)
              this.options[n2][t4] = e3;
            return this;
          }
          return this.options[t4];
        } }, { key: "origin", value: function(t4) {
          return this._backCompatOption("origin", t4);
        } }, { key: "deltaSource", value: function(t4) {
          return "page" === t4 || "client" === t4 ? (this.options.deltaSource = t4, this) : this.options.deltaSource;
        } }, { key: "getAllElements", value: function() {
          var t4 = this.target;
          return w.string(t4) ? Array.from(this._context.querySelectorAll(t4)) : w.func(t4) && t4.getAllElements ? t4.getAllElements() : w.element(t4) ? [t4] : [];
        } }, { key: "context", value: function() {
          return this._context;
        } }, { key: "inContext", value: function(t4) {
          return this._context === t4.ownerDocument || M(this._context, t4);
        } }, { key: "testIgnoreAllow", value: function(t4, e3, n2) {
          return !this.testIgnore(t4.ignoreFrom, e3, n2) && this.testAllow(t4.allowFrom, e3, n2);
        } }, { key: "testAllow", value: function(t4, e3, n2) {
          return !t4 || !!w.element(n2) && (w.string(t4) ? F2(n2, t4, e3) : !!w.element(t4) && M(t4, n2));
        } }, { key: "testIgnore", value: function(t4, e3, n2) {
          return !(!t4 || !w.element(n2)) && (w.string(t4) ? F2(n2, t4, e3) : !!w.element(t4) && M(t4, n2));
        } }, { key: "fire", value: function(t4) {
          return this.events.fire(t4), this;
        } }, { key: "_onOff", value: function(t4, e3, n2, r3, i3) {
          w.object(e3) && !w.array(e3) && (r3 = n2, n2 = null);
          var o2 = $2(e3, n2, i3);
          for (var a4 in o2) {
            "wheel" === a4 && (a4 = I.wheelEvent);
            for (var s3 = 0, c3 = o2[a4]; s3 < c3.length; s3++) {
              var l3 = c3[s3];
              ve(a4, this._actions) ? this.events[t4 === rn2.On ? "on" : "off"](a4, l3) : w.string(this.target) ? this._scopeEvents[t4 === rn2.On ? "addDelegate" : "removeDelegate"](this.target, this._context, a4, l3, r3) : this._scopeEvents[t4 === rn2.On ? "add" : "remove"](this.target, a4, l3, r3);
            }
          }
          return this;
        } }, { key: "on", value: function(t4, e3, n2) {
          return this._onOff(rn2.On, t4, e3, n2);
        } }, { key: "off", value: function(t4, e3, n2) {
          return this._onOff(rn2.Off, t4, e3, n2);
        } }, { key: "set", value: function(t4) {
          var e3 = this._defaults;
          for (var n2 in w.object(t4) || (t4 = {}), this.options = ge2(e3.base), this._actions.methodDict) {
            var r3 = n2, i3 = this._actions.methodDict[r3];
            this.options[r3] = {}, this.setPerAction(r3, V2(V2({}, e3.perAction), e3.actions[r3])), this[i3](t4[r3]);
          }
          for (var o2 in t4)
            "getRect" !== o2 ? w.func(this[o2]) && this[o2](t4[o2]) : this.rectChecker(t4.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (w.string(this.target))
            for (var t4 in this._scopeEvents.delegatedEvents)
              for (var e3 = this._scopeEvents.delegatedEvents[t4], n2 = e3.length - 1; n2 >= 0; n2--) {
                var r3 = e3[n2], i3 = r3.selector, o2 = r3.context, a4 = r3.listeners;
                i3 === this.target && o2 === this._context && e3.splice(n2, 1);
                for (var s3 = a4.length - 1; s3 >= 0; s3--)
                  this._scopeEvents.removeDelegate(this.target, this._context, t4, a4[s3][0], a4[s3][1]);
              }
          else
            this._scopeEvents.remove(this.target, "all");
        } }]), t3;
      }(), an = function() {
        function t3(e3) {
          var n2 = this;
          r2(this, t3), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e3, e3.addListeners({ "interactable:unset": function(t4) {
            var e4 = t4.interactable, r3 = e4.target, i3 = w.string(r3) ? n2.selectorMap[r3] : r3[n2.scope.id], o2 = yt(i3, function(t5) {
              return t5 === e4;
            });
            i3.splice(o2, 1);
          } });
        }
        return o(t3, [{ key: "new", value: function(t4, e3) {
          e3 = V2(e3 || {}, { actions: this.scope.actions });
          var n2 = new this.scope.Interactable(t4, e3, this.scope.document, this.scope.events);
          return this.scope.addDocument(n2._doc), this.list.push(n2), w.string(t4) ? (this.selectorMap[t4] || (this.selectorMap[t4] = []), this.selectorMap[t4].push(n2)) : (n2.target[this.scope.id] || Object.defineProperty(t4, this.scope.id, { value: [], configurable: true }), t4[this.scope.id].push(n2)), this.scope.fire("interactable:new", { target: t4, options: e3, interactable: n2, win: this.scope._win }), n2;
        } }, { key: "getExisting", value: function(t4, e3) {
          var n2 = e3 && e3.context || this.scope.document, r3 = w.string(t4), i3 = r3 ? this.selectorMap[t4] : t4[this.scope.id];
          if (i3)
            return bt2(i3, function(e4) {
              return e4._context === n2 && (r3 || e4.inContext(t4));
            });
        } }, { key: "forEachMatch", value: function(t4, e3) {
          for (var n2 = 0, r3 = this.list; n2 < r3.length; n2++) {
            var i3 = r3[n2], o2 = void 0;
            if ((w.string(i3.target) ? w.element(t4) && R2(t4, i3.target) : t4 === i3.target) && i3.inContext(t4) && (o2 = e3(i3)), void 0 !== o2)
              return o2;
          }
        } }]), t3;
      }();
      var sn2 = function() {
        function t3() {
          var e3 = this;
          r2(this, t3), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = false, this.listenerMaps = [], this.browser = I, this.defaults = ge2(Te3), this.Eventable = Ve2, this.actions = { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = function(t4) {
            var e4 = function e5(n3, r3) {
              var i3 = t4.interactables.getExisting(n3, r3);
              return i3 || ((i3 = t4.interactables.new(n3, r3)).events.global = e5.globalEvents), i3;
            };
            return e4.getPointerAverage = lt, e4.getTouchBBox = ut, e4.getTouchDistance = pt, e4.getTouchAngle = ft2, e4.getElementRect = L2, e4.getElementClientRect = Y2, e4.matchesSelector = R2, e4.closest = z, e4.globalEvents = {}, e4.version = "1.10.26", e4.scope = t4, e4.use = function(t5, e5) {
              return this.scope.usePlugin(t5, e5), this;
            }, e4.isSet = function(t5, e5) {
              return !!this.scope.interactables.get(t5, e5 && e5.context);
            }, e4.on = Nt(function(t5, e5, n3) {
              if (w.string(t5) && -1 !== t5.search(" ") && (t5 = t5.trim().split(/ +/)), w.array(t5)) {
                for (var r3 = 0, i3 = t5; r3 < i3.length; r3++) {
                  var o2 = i3[r3];
                  this.on(o2, e5, n3);
                }
                return this;
              }
              if (w.object(t5)) {
                for (var a4 in t5)
                  this.on(a4, t5[a4], e5);
                return this;
              }
              return ve(t5, this.scope.actions) ? this.globalEvents[t5] ? this.globalEvents[t5].push(e5) : this.globalEvents[t5] = [e5] : this.scope.events.add(this.scope.document, t5, e5, { options: n3 }), this;
            }, "The interact.on() method is being deprecated"), e4.off = Nt(function(t5, e5, n3) {
              if (w.string(t5) && -1 !== t5.search(" ") && (t5 = t5.trim().split(/ +/)), w.array(t5)) {
                for (var r3 = 0, i3 = t5; r3 < i3.length; r3++) {
                  var o2 = i3[r3];
                  this.off(o2, e5, n3);
                }
                return this;
              }
              if (w.object(t5)) {
                for (var a4 in t5)
                  this.off(a4, t5[a4], e5);
                return this;
              }
              var s3;
              return ve(t5, this.scope.actions) ? t5 in this.globalEvents && -1 !== (s3 = this.globalEvents[t5].indexOf(e5)) && this.globalEvents[t5].splice(s3, 1) : this.scope.events.remove(this.scope.document, t5, e5, n3), this;
            }, "The interact.off() method is being deprecated"), e4.debug = function() {
              return this.scope;
            }, e4.supportsTouch = function() {
              return I.supportsTouch;
            }, e4.supportsPointerEvent = function() {
              return I.supportsPointerEvent;
            }, e4.stop = function() {
              for (var t5 = 0, e5 = this.scope.interactions.list; t5 < e5.length; t5++)
                e5[t5].stop();
              return this;
            }, e4.pointerMoveTolerance = function(t5) {
              return w.number(t5) ? (this.scope.interactions.pointerMoveTolerance = t5, this) : this.scope.interactions.pointerMoveTolerance;
            }, e4.addDocument = function(t5, e5) {
              this.scope.addDocument(t5, e5);
            }, e4.removeDocument = function(t5) {
              this.scope.removeDocument(t5);
            }, e4;
          }(this), this.InteractEvent = Se4, this.Interactable = void 0, this.interactables = new an(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(t4) {
            return e3.removeDocument(t4.target);
          };
          var n2 = this;
          this.Interactable = function(t4) {
            s2(i3, t4);
            var e4 = p(i3);
            function i3() {
              return r2(this, i3), e4.apply(this, arguments);
            }
            return o(i3, [{ key: "_defaults", get: function() {
              return n2.defaults;
            } }, { key: "set", value: function(t5) {
              return f(c2(i3.prototype), "set", this).call(this, t5), n2.fire("interactable:set", { options: t5, interactable: this }), this;
            } }, { key: "unset", value: function() {
              f(c2(i3.prototype), "unset", this).call(this);
              var t5 = n2.interactables.list.indexOf(this);
              t5 < 0 || (n2.interactables.list.splice(t5, 1), n2.fire("interactable:unset", { interactable: this }));
            } }]), i3;
          }(on2);
        }
        return o(t3, [{ key: "addListeners", value: function(t4, e3) {
          this.listenerMaps.push({ id: e3, map: t4 });
        } }, { key: "fire", value: function(t4, e3) {
          for (var n2 = 0, r3 = this.listenerMaps; n2 < r3.length; n2++) {
            var i3 = r3[n2].map[t4];
            if (i3 && false === i3(e3, this, t4))
              return false;
          }
        } }, { key: "init", value: function(t4) {
          return this.isInitialized ? this : function(t5, e3) {
            t5.isInitialized = true, w.window(e3) && m(e3);
            return k2.init(e3), I.init(e3), Lt.init(e3), t5.window = e3, t5.document = e3.document, t5.usePlugin(nn2), t5.usePlugin(Ue), t5;
          }(this, t4);
        } }, { key: "pluginIsInstalled", value: function(t4) {
          var e3 = t4.id;
          return e3 ? !!this._plugins.map[e3] : -1 !== this._plugins.list.indexOf(t4);
        } }, { key: "usePlugin", value: function(t4, e3) {
          if (!this.isInitialized)
            return this;
          if (this.pluginIsInstalled(t4))
            return this;
          if (t4.id && (this._plugins.map[t4.id] = t4), this._plugins.list.push(t4), t4.install && t4.install(this, e3), t4.listeners && t4.before) {
            for (var n2 = 0, r3 = this.listenerMaps.length, i3 = t4.before.reduce(function(t5, e4) {
              return t5[e4] = true, t5[cn(e4)] = true, t5;
            }, {}); n2 < r3; n2++) {
              var o2 = this.listenerMaps[n2].id;
              if (o2 && (i3[o2] || i3[cn(o2)]))
                break;
            }
            this.listenerMaps.splice(n2, 0, { id: t4.id, map: t4.listeners });
          } else
            t4.listeners && this.listenerMaps.push({ id: t4.id, map: t4.listeners });
          return this;
        } }, { key: "addDocument", value: function(t4, e3) {
          if (-1 !== this.getDocIndex(t4))
            return false;
          var n2 = y4(t4);
          e3 = e3 ? V2({}, e3) : {}, this.documents.push({ doc: t4, options: e3 }), this.events.documents.push(t4), t4 !== this.document && this.events.add(n2, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: t4, window: n2, scope: this, options: e3 });
        } }, { key: "removeDocument", value: function(t4) {
          var e3 = this.getDocIndex(t4), n2 = y4(t4), r3 = this.documents[e3].options;
          this.events.remove(n2, "unload", this.onWindowUnload), this.documents.splice(e3, 1), this.events.documents.splice(e3, 1), this.fire("scope:remove-document", { doc: t4, window: n2, scope: this, options: r3 });
        } }, { key: "getDocIndex", value: function(t4) {
          for (var e3 = 0; e3 < this.documents.length; e3++)
            if (this.documents[e3].doc === t4)
              return e3;
          return -1;
        } }, { key: "getDocOptions", value: function(t4) {
          var e3 = this.getDocIndex(t4);
          return -1 === e3 ? null : this.documents[e3].options;
        } }, { key: "now", value: function() {
          return (this.window.Date || Date).now();
        } }]), t3;
      }();
      function cn(t3) {
        return t3 && t3.replace(/\/.*$/, "");
      }
      var ln = new sn2(), un = ln.interactStatic, pn = "undefined" != typeof globalThis ? globalThis : window;
      ln.init(pn);
      var fn2 = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(t3) {
        var e3 = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(e4) {
          var n3 = e4[0], r3 = e4[1];
          return n3 in t3 || r3 in t3;
        }), n2 = function(n3, r3) {
          for (var i3 = t3.range, o2 = t3.limits, a4 = void 0 === o2 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : o2, s3 = t3.offset, c3 = void 0 === s3 ? { x: 0, y: 0 } : s3, l3 = { range: i3, grid: t3, x: null, y: null }, u2 = 0; u2 < e3.length; u2++) {
            var p2 = e3[u2], f2 = p2[0], d4 = p2[1], h2 = Math.round((n3 - c3.x) / t3[f2]), v4 = Math.round((r3 - c3.y) / t3[d4]);
            l3[f2] = Math.max(a4.left, Math.min(a4.right, h2 * t3[f2] + c3.x)), l3[d4] = Math.max(a4.top, Math.min(a4.bottom, v4 * t3[d4] + c3.y));
          }
          return l3;
        };
        return n2.grid = t3, n2.coordFields = e3, n2;
      } }), dn = { id: "snappers", install: function(t3) {
        var e3 = t3.interactStatic;
        e3.snappers = V2(e3.snappers || {}, fn2), e3.createSnapGrid = e3.snappers.grid;
      } }, hn = dn, vn = { start: function(t3) {
        var n2 = t3.state, r3 = t3.rect, i3 = t3.edges, o2 = t3.pageCoords, a4 = n2.options, s3 = a4.ratio, c3 = a4.enabled, l3 = n2.options, u2 = l3.equalDelta, p2 = l3.modifiers;
        "preserve" === s3 && (s3 = r3.width / r3.height), n2.startCoords = V2({}, o2), n2.startRect = V2({}, r3), n2.ratio = s3, n2.equalDelta = u2;
        var f2 = n2.linkedEdges = { top: i3.top || i3.left && !i3.bottom, left: i3.left || i3.top && !i3.right, bottom: i3.bottom || i3.right && !i3.top, right: i3.right || i3.bottom && !i3.left };
        if (n2.xIsPrimaryAxis = !(!i3.left && !i3.right), n2.equalDelta) {
          var d4 = (f2.left ? 1 : -1) * (f2.top ? 1 : -1);
          n2.edgeSign = { x: d4, y: d4 };
        } else
          n2.edgeSign = { x: f2.left ? -1 : 1, y: f2.top ? -1 : 1 };
        if (false !== c3 && V2(i3, f2), null != p2 && p2.length) {
          var h2 = new me2(t3.interaction);
          h2.copyFrom(t3.interaction.modification), h2.prepareStates(p2), n2.subModification = h2, h2.startAll(e2({}, t3));
        }
      }, set: function(t3) {
        var n2 = t3.state, r3 = t3.rect, i3 = t3.coords, o2 = n2.linkedEdges, a4 = V2({}, i3), s3 = n2.equalDelta ? gn3 : mn2;
        if (V2(t3.edges, o2), s3(n2, n2.xIsPrimaryAxis, i3, r3), !n2.subModification)
          return null;
        var c3 = V2({}, r3);
        H2(o2, c3, { x: i3.x - a4.x, y: i3.y - a4.y });
        var l3 = n2.subModification.setAll(e2(e2({}, t3), {}, { rect: c3, edges: o2, pageCoords: i3, prevCoords: i3, prevRect: c3 })), u2 = l3.delta;
        l3.changed && (s3(n2, Math.abs(u2.x) > Math.abs(u2.y), l3.coords, l3.rect), V2(i3, l3.coords));
        return l3.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
      function gn3(t3, e3, n2) {
        var r3 = t3.startCoords, i3 = t3.edgeSign;
        e3 ? n2.y = r3.y + (n2.x - r3.x) * i3.y : n2.x = r3.x + (n2.y - r3.y) * i3.x;
      }
      function mn2(t3, e3, n2, r3) {
        var i3 = t3.startRect, o2 = t3.startCoords, a4 = t3.ratio, s3 = t3.edgeSign;
        if (e3) {
          var c3 = r3.width / a4;
          n2.y = o2.y + (c3 - i3.height) * s3.y;
        } else {
          var l3 = r3.height * a4;
          n2.x = o2.x + (l3 - i3.width) * s3.x;
        }
      }
      var yn2 = be(vn, "aspectRatio"), bn2 = function() {
      };
      bn2._defaults = {};
      var xn = bn2;
      function wn2(t3, e3, n2) {
        return w.func(t3) ? G3(t3, e3.interactable, e3.element, [n2.x, n2.y, e3]) : G3(t3, e3.interactable, e3.element);
      }
      var En2 = { start: function(t3) {
        var e3 = t3.rect, n2 = t3.startOffset, r3 = t3.state, i3 = t3.interaction, o2 = t3.pageCoords, a4 = r3.options, s3 = a4.elementRect, c3 = V2({ left: 0, top: 0, right: 0, bottom: 0 }, a4.offset || {});
        if (e3 && s3) {
          var l3 = wn2(a4.restriction, i3, o2);
          if (l3) {
            var u2 = l3.right - l3.left - e3.width, p2 = l3.bottom - l3.top - e3.height;
            u2 < 0 && (c3.left += u2, c3.right += u2), p2 < 0 && (c3.top += p2, c3.bottom += p2);
          }
          c3.left += n2.left - e3.width * s3.left, c3.top += n2.top - e3.height * s3.top, c3.right += n2.right - e3.width * (1 - s3.right), c3.bottom += n2.bottom - e3.height * (1 - s3.bottom);
        }
        r3.offset = c3;
      }, set: function(t3) {
        var e3 = t3.coords, n2 = t3.interaction, r3 = t3.state, i3 = r3.options, o2 = r3.offset, a4 = wn2(i3.restriction, n2, e3);
        if (a4) {
          var s3 = function(t4) {
            return !t4 || "left" in t4 && "top" in t4 || ((t4 = V2({}, t4)).left = t4.x || 0, t4.top = t4.y || 0, t4.right = t4.right || t4.left + t4.width, t4.bottom = t4.bottom || t4.top + t4.height), t4;
          }(a4);
          e3.x = Math.max(Math.min(s3.right - o2.right, e3.x), s3.left + o2.left), e3.y = Math.max(Math.min(s3.bottom - o2.bottom, e3.y), s3.top + o2.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } }, Tn = be(En2, "restrict"), Sn2 = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, _n = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function Pn(t3, e3) {
        for (var n2 = 0, r3 = ["top", "left", "bottom", "right"]; n2 < r3.length; n2++) {
          var i3 = r3[n2];
          i3 in t3 || (t3[i3] = e3[i3]);
        }
        return t3;
      }
      var On2 = { noInner: Sn2, noOuter: _n, start: function(t3) {
        var e3, n2 = t3.interaction, r3 = t3.startOffset, i3 = t3.state, o2 = i3.options;
        o2 && (e3 = N(wn2(o2.offset, n2, n2.coords.start.page))), e3 = e3 || { x: 0, y: 0 }, i3.offset = { top: e3.y + r3.top, left: e3.x + r3.left, bottom: e3.y - r3.bottom, right: e3.x - r3.right };
      }, set: function(t3) {
        var e3 = t3.coords, n2 = t3.edges, r3 = t3.interaction, i3 = t3.state, o2 = i3.offset, a4 = i3.options;
        if (n2) {
          var s3 = V2({}, e3), c3 = wn2(a4.inner, r3, s3) || {}, l3 = wn2(a4.outer, r3, s3) || {};
          Pn(c3, Sn2), Pn(l3, _n), n2.top ? e3.y = Math.min(Math.max(l3.top + o2.top, s3.y), c3.top + o2.top) : n2.bottom && (e3.y = Math.max(Math.min(l3.bottom + o2.bottom, s3.y), c3.bottom + o2.bottom)), n2.left ? e3.x = Math.min(Math.max(l3.left + o2.left, s3.x), c3.left + o2.left) : n2.right && (e3.x = Math.max(Math.min(l3.right + o2.right, s3.x), c3.right + o2.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } }, kn = be(On2, "restrictEdges"), Dn = V2({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(t3) {
      } }, En2.defaults), In = be({ start: En2.start, set: En2.set, defaults: Dn }, "restrictRect"), Mn = { width: -1 / 0, height: -1 / 0 }, zn = { width: 1 / 0, height: 1 / 0 };
      var An = be({ start: function(t3) {
        return On2.start(t3);
      }, set: function(t3) {
        var e3 = t3.interaction, n2 = t3.state, r3 = t3.rect, i3 = t3.edges, o2 = n2.options;
        if (i3) {
          var a4 = U3(wn2(o2.min, e3, t3.coords)) || Mn, s3 = U3(wn2(o2.max, e3, t3.coords)) || zn;
          n2.options = { endOnly: o2.endOnly, inner: V2({}, On2.noInner), outer: V2({}, On2.noOuter) }, i3.top ? (n2.options.inner.top = r3.bottom - a4.height, n2.options.outer.top = r3.bottom - s3.height) : i3.bottom && (n2.options.inner.bottom = r3.top + a4.height, n2.options.outer.bottom = r3.top + s3.height), i3.left ? (n2.options.inner.left = r3.right - a4.width, n2.options.outer.left = r3.right - s3.width) : i3.right && (n2.options.inner.right = r3.left + a4.width, n2.options.outer.right = r3.left + s3.width), On2.set(t3), n2.options = o2;
        }
      }, defaults: { min: null, max: null, endOnly: false, enabled: false } }, "restrictSize");
      var Rn = { start: function(t3) {
        var e3, n2 = t3.interaction, r3 = t3.interactable, i3 = t3.element, o2 = t3.rect, a4 = t3.state, s3 = t3.startOffset, c3 = a4.options, l3 = c3.offsetWithOrigin ? function(t4) {
          var e4 = t4.interaction.element, n3 = N(G3(t4.state.options.origin, null, null, [e4])), r4 = n3 || K4(t4.interactable, e4, t4.interaction.prepared.name);
          return r4;
        }(t3) : { x: 0, y: 0 };
        if ("startCoords" === c3.offset)
          e3 = { x: n2.coords.start.page.x, y: n2.coords.start.page.y };
        else {
          var u2 = G3(c3.offset, r3, i3, [n2]);
          (e3 = N(u2) || { x: 0, y: 0 }).x += l3.x, e3.y += l3.y;
        }
        var p2 = c3.relativePoints;
        a4.offsets = o2 && p2 && p2.length ? p2.map(function(t4, n3) {
          return { index: n3, relativePoint: t4, x: s3.left - o2.width * t4.x + e3.x, y: s3.top - o2.height * t4.y + e3.y };
        }) : [{ index: 0, relativePoint: null, x: e3.x, y: e3.y }];
      }, set: function(t3) {
        var e3 = t3.interaction, n2 = t3.coords, r3 = t3.state, i3 = r3.options, o2 = r3.offsets, a4 = K4(e3.interactable, e3.element, e3.prepared.name), s3 = V2({}, n2), c3 = [];
        i3.offsetWithOrigin || (s3.x -= a4.x, s3.y -= a4.y);
        for (var l3 = 0, u2 = o2; l3 < u2.length; l3++)
          for (var p2 = u2[l3], f2 = s3.x - p2.x, d4 = s3.y - p2.y, h2 = 0, v4 = i3.targets.length; h2 < v4; h2++) {
            var g3 = i3.targets[h2], m2 = void 0;
            (m2 = w.func(g3) ? g3(f2, d4, e3._proxy, p2, h2) : g3) && c3.push({ x: (w.number(m2.x) ? m2.x : f2) + p2.x, y: (w.number(m2.y) ? m2.y : d4) + p2.y, range: w.number(m2.range) ? m2.range : i3.range, source: g3, index: h2, offset: p2 });
          }
        for (var y5 = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, b3 = 0; b3 < c3.length; b3++) {
          var x4 = c3[b3], E4 = x4.range, T3 = x4.x - s3.x, S2 = x4.y - s3.y, _3 = Q2(T3, S2), P4 = _3 <= E4;
          E4 === 1 / 0 && y5.inRange && y5.range !== 1 / 0 && (P4 = false), y5.target && !(P4 ? y5.inRange && E4 !== 1 / 0 ? _3 / E4 < y5.distance / y5.range : E4 === 1 / 0 && y5.range !== 1 / 0 || _3 < y5.distance : !y5.inRange && _3 < y5.distance) || (y5.target = x4, y5.distance = _3, y5.range = E4, y5.inRange = P4, y5.delta.x = T3, y5.delta.y = S2);
        }
        return y5.inRange && (n2.x = y5.target.x, n2.y = y5.target.y), r3.closest = y5, y5;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } }, Cn = be(Rn, "snap");
      var jn = { start: function(t3) {
        var e3 = t3.state, n2 = t3.edges, r3 = e3.options;
        if (!n2)
          return null;
        t3.state = { options: { targets: null, relativePoints: [{ x: n2.left ? 0 : 1, y: n2.top ? 0 : 1 }], offset: r3.offset || "self", origin: { x: 0, y: 0 }, range: r3.range } }, e3.targetFields = e3.targetFields || [["width", "height"], ["x", "y"]], Rn.start(t3), e3.offsets = t3.state.offsets, t3.state = e3;
      }, set: function(t3) {
        var e3 = t3.interaction, n2 = t3.state, r3 = t3.coords, i3 = n2.options, o2 = n2.offsets, a4 = { x: r3.x - o2[0].x, y: r3.y - o2[0].y };
        n2.options = V2({}, i3), n2.options.targets = [];
        for (var s3 = 0, c3 = i3.targets || []; s3 < c3.length; s3++) {
          var l3 = c3[s3], u2 = void 0;
          if (u2 = w.func(l3) ? l3(a4.x, a4.y, e3) : l3) {
            for (var p2 = 0, f2 = n2.targetFields; p2 < f2.length; p2++) {
              var d4 = f2[p2], h2 = d4[0], v4 = d4[1];
              if (h2 in u2 || v4 in u2) {
                u2.x = u2[h2], u2.y = u2[v4];
                break;
              }
            }
            n2.options.targets.push(u2);
          }
        }
        var g3 = Rn.set(t3);
        return n2.options = i3, g3;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } }, Fn = be(jn, "snapSize");
      var Xn = { aspectRatio: yn2, restrictEdges: kn, restrict: Tn, restrictRect: In, restrictSize: An, snapEdges: be({ start: function(t3) {
        var e3 = t3.edges;
        return e3 ? (t3.state.targetFields = t3.state.targetFields || [[e3.left ? "left" : "right", e3.top ? "top" : "bottom"]], jn.start(t3)) : null;
      }, set: jn.set, defaults: V2(ge2(jn.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: Cn, snapSize: Fn, spring: xn, avoid: xn, transform: xn, rubberband: xn }, Yn = { id: "modifiers", install: function(t3) {
        var e3 = t3.interactStatic;
        for (var n2 in t3.usePlugin(Ee2), t3.usePlugin(hn), e3.modifiers = Xn, Xn) {
          var r3 = Xn[n2], i3 = r3._defaults, o2 = r3._methods;
          i3._methods = o2, t3.defaults.perAction[n2] = i3;
        }
      } }, Ln = Yn, qn = function(t3) {
        s2(n2, t3);
        var e3 = p(n2);
        function n2(t4, i3, o2, a4, s3, c3) {
          var l3;
          if (r2(this, n2), tt(u(l3 = e3.call(this, s3)), o2), o2 !== i3 && tt(u(l3), i3), l3.timeStamp = c3, l3.originalEvent = o2, l3.type = t4, l3.pointerId = at(i3), l3.pointerType = dt(i3), l3.target = a4, l3.currentTarget = null, "tap" === t4) {
            var p2 = s3.getPointerIndex(i3);
            l3.dt = l3.timeStamp - s3.pointers[p2].downTime;
            var f2 = l3.timeStamp - s3.tapTime;
            l3.double = !!s3.prevTap && "doubletap" !== s3.prevTap.type && s3.prevTap.target === l3.target && f2 < 500;
          } else
            "doubletap" === t4 && (l3.dt = i3.timeStamp - s3.tapTime, l3.double = true);
          return l3;
        }
        return o(n2, [{ key: "_subtractOrigin", value: function(t4) {
          var e4 = t4.x, n3 = t4.y;
          return this.pageX -= e4, this.pageY -= n3, this.clientX -= e4, this.clientY -= n3, this;
        } }, { key: "_addOrigin", value: function(t4) {
          var e4 = t4.x, n3 = t4.y;
          return this.pageX += e4, this.pageY += n3, this.clientX += e4, this.clientY += n3, this;
        } }, { key: "preventDefault", value: function() {
          this.originalEvent.preventDefault();
        } }]), n2;
      }(vt), Bn2 = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t3) {
        t3.pointerEvents = Bn2, t3.defaults.actions.pointerEvents = Bn2.defaults, V2(t3.actions.phaselessTypes, Bn2.types);
      }, listeners: { "interactions:new": function(t3) {
        var e3 = t3.interaction;
        e3.prevTap = null, e3.tapTime = 0;
      }, "interactions:update-pointer": function(t3) {
        var e3 = t3.down, n2 = t3.pointerInfo;
        if (!e3 && n2.hold)
          return;
        n2.hold = { duration: 1 / 0, timeout: null };
      }, "interactions:move": function(t3, e3) {
        var n2 = t3.interaction, r3 = t3.pointer, i3 = t3.event, o2 = t3.eventTarget;
        t3.duplicate || n2.pointerIsDown && !n2.pointerWasMoved || (n2.pointerIsDown && Gn(t3), Vn({ interaction: n2, pointer: r3, event: i3, eventTarget: o2, type: "move" }, e3));
      }, "interactions:down": function(t3, e3) {
        !function(t4, e4) {
          for (var n2 = t4.interaction, r3 = t4.pointer, i3 = t4.event, o2 = t4.eventTarget, a4 = t4.pointerIndex, s3 = n2.pointers[a4].hold, c3 = q(o2), l3 = { interaction: n2, pointer: r3, event: i3, eventTarget: o2, type: "hold", targets: [], path: c3, node: null }, u2 = 0; u2 < c3.length; u2++) {
            var p2 = c3[u2];
            l3.node = p2, e4.fire("pointerEvents:collect-targets", l3);
          }
          if (!l3.targets.length)
            return;
          for (var f2 = 1 / 0, d4 = 0, h2 = l3.targets; d4 < h2.length; d4++) {
            var v4 = h2[d4].eventable.options.holdDuration;
            v4 < f2 && (f2 = v4);
          }
          s3.duration = f2, s3.timeout = setTimeout(function() {
            Vn({ interaction: n2, eventTarget: o2, pointer: r3, event: i3, type: "hold" }, e4);
          }, f2);
        }(t3, e3), Vn(t3, e3);
      }, "interactions:up": function(t3, e3) {
        Gn(t3), Vn(t3, e3), function(t4, e4) {
          var n2 = t4.interaction, r3 = t4.pointer, i3 = t4.event, o2 = t4.eventTarget;
          n2.pointerWasMoved || Vn({ interaction: n2, eventTarget: o2, pointer: r3, event: i3, type: "tap" }, e4);
        }(t3, e3);
      }, "interactions:cancel": function(t3, e3) {
        Gn(t3), Vn(t3, e3);
      } }, PointerEvent: qn, fire: Vn, collectEventTargets: Wn, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
      function Vn(t3, e3) {
        var n2 = t3.interaction, r3 = t3.pointer, i3 = t3.event, o2 = t3.eventTarget, a4 = t3.type, s3 = t3.targets, c3 = void 0 === s3 ? Wn(t3, e3) : s3, l3 = new qn(a4, r3, i3, o2, n2, e3.now());
        e3.fire("pointerEvents:new", { pointerEvent: l3 });
        for (var u2 = { interaction: n2, pointer: r3, event: i3, eventTarget: o2, targets: c3, type: a4, pointerEvent: l3 }, p2 = 0; p2 < c3.length; p2++) {
          var f2 = c3[p2];
          for (var d4 in f2.props || {})
            l3[d4] = f2.props[d4];
          var h2 = K4(f2.eventable, f2.node);
          if (l3._subtractOrigin(h2), l3.eventable = f2.eventable, l3.currentTarget = f2.node, f2.eventable.fire(l3), l3._addOrigin(h2), l3.immediatePropagationStopped || l3.propagationStopped && p2 + 1 < c3.length && c3[p2 + 1].node !== l3.currentTarget)
            break;
        }
        if (e3.fire("pointerEvents:fired", u2), "tap" === a4) {
          var v4 = l3.double ? Vn({ interaction: n2, pointer: r3, event: i3, eventTarget: o2, type: "doubletap" }, e3) : l3;
          n2.prevTap = v4, n2.tapTime = v4.timeStamp;
        }
        return l3;
      }
      function Wn(t3, e3) {
        var n2 = t3.interaction, r3 = t3.pointer, i3 = t3.event, o2 = t3.eventTarget, a4 = t3.type, s3 = n2.getPointerIndex(r3), c3 = n2.pointers[s3];
        if ("tap" === a4 && (n2.pointerWasMoved || !c3 || c3.downTarget !== o2))
          return [];
        for (var l3 = q(o2), u2 = { interaction: n2, pointer: r3, event: i3, eventTarget: o2, type: a4, path: l3, targets: [], node: null }, p2 = 0; p2 < l3.length; p2++) {
          var f2 = l3[p2];
          u2.node = f2, e3.fire("pointerEvents:collect-targets", u2);
        }
        return "hold" === a4 && (u2.targets = u2.targets.filter(function(t4) {
          var e4, r4;
          return t4.eventable.options.holdDuration === (null == (e4 = n2.pointers[s3]) || null == (r4 = e4.hold) ? void 0 : r4.duration);
        })), u2.targets;
      }
      function Gn(t3) {
        var e3 = t3.interaction, n2 = t3.pointerIndex, r3 = e3.pointers[n2].hold;
        r3 && r3.timeout && (clearTimeout(r3.timeout), r3.timeout = null);
      }
      var Nn = Object.freeze({ __proto__: null, default: Bn2 });
      function Un(t3) {
        var e3 = t3.interaction;
        e3.holdIntervalHandle && (clearInterval(e3.holdIntervalHandle), e3.holdIntervalHandle = null);
      }
      var Hn = { id: "pointer-events/holdRepeat", install: function(t3) {
        t3.usePlugin(Bn2);
        var e3 = t3.pointerEvents;
        e3.defaults.holdRepeatInterval = 0, e3.types.holdrepeat = t3.actions.phaselessTypes.holdrepeat = true;
      }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t3, e3) {
        return t3["pointerEvents:".concat(e3)] = Un, t3;
      }, { "pointerEvents:new": function(t3) {
        var e3 = t3.pointerEvent;
        "hold" === e3.type && (e3.count = (e3.count || 0) + 1);
      }, "pointerEvents:fired": function(t3, e3) {
        var n2 = t3.interaction, r3 = t3.pointerEvent, i3 = t3.eventTarget, o2 = t3.targets;
        if ("hold" === r3.type && o2.length) {
          var a4 = o2[0].eventable.options.holdRepeatInterval;
          a4 <= 0 || (n2.holdIntervalHandle = setTimeout(function() {
            e3.pointerEvents.fire({ interaction: n2, eventTarget: i3, type: "hold", pointer: r3, event: r3 }, e3);
          }, a4));
        }
      } }) }, Kn = Hn;
      var $n = { id: "pointer-events/interactableTargets", install: function(t3) {
        var e3 = t3.Interactable;
        e3.prototype.pointerEvents = function(t4) {
          return V2(this.events.options, t4), this;
        };
        var n2 = e3.prototype._backCompatOption;
        e3.prototype._backCompatOption = function(t4, e4) {
          var r3 = n2.call(this, t4, e4);
          return r3 === this && (this.events.options[t4] = e4), r3;
        };
      }, listeners: { "pointerEvents:collect-targets": function(t3, e3) {
        var n2 = t3.targets, r3 = t3.node, i3 = t3.type, o2 = t3.eventTarget;
        e3.interactables.forEachMatch(r3, function(t4) {
          var e4 = t4.events, a4 = e4.options;
          e4.types[i3] && e4.types[i3].length && t4.testIgnoreAllow(a4, r3, o2) && n2.push({ node: r3, eventable: e4, props: { interactable: t4 } });
        });
      }, "interactable:new": function(t3) {
        var e3 = t3.interactable;
        e3.events.getRect = function(t4) {
          return e3.getRect(t4);
        };
      }, "interactable:set": function(t3, e3) {
        var n2 = t3.interactable, r3 = t3.options;
        V2(n2.events.options, e3.pointerEvents.defaults), V2(n2.events.options, r3.pointerEvents || {});
      } } }, Jn = $n, Qn = { id: "pointer-events", install: function(t3) {
        t3.usePlugin(Nn), t3.usePlugin(Kn), t3.usePlugin(Jn);
      } }, Zn2 = Qn;
      var tr2 = { id: "reflow", install: function(t3) {
        var e3 = t3.Interactable;
        t3.actions.phases.reflow = true, e3.prototype.reflow = function(e4) {
          return function(t4, e5, n2) {
            for (var r3 = t4.getAllElements(), i3 = n2.window.Promise, o2 = i3 ? [] : null, a4 = function() {
              var a5 = r3[s3], c3 = t4.getRect(a5);
              if (!c3)
                return 1;
              var l3, u2 = bt2(n2.interactions.list, function(n3) {
                return n3.interacting() && n3.interactable === t4 && n3.element === a5 && n3.prepared.name === e5.name;
              });
              if (u2)
                u2.move(), o2 && (l3 = u2._reflowPromise || new i3(function(t5) {
                  u2._reflowResolve = t5;
                }));
              else {
                var p2 = U3(c3), f2 = /* @__PURE__ */ function(t5) {
                  return { coords: t5, get page() {
                    return this.coords.page;
                  }, get client() {
                    return this.coords.client;
                  }, get timeStamp() {
                    return this.coords.timeStamp;
                  }, get pageX() {
                    return this.coords.page.x;
                  }, get pageY() {
                    return this.coords.page.y;
                  }, get clientX() {
                    return this.coords.client.x;
                  }, get clientY() {
                    return this.coords.client.y;
                  }, get pointerId() {
                    return this.coords.pointerId;
                  }, get target() {
                    return this.coords.target;
                  }, get type() {
                    return this.coords.type;
                  }, get pointerType() {
                    return this.coords.pointerType;
                  }, get buttons() {
                    return this.coords.buttons;
                  }, preventDefault: function() {
                  } };
                }({ page: { x: p2.x, y: p2.y }, client: { x: p2.x, y: p2.y }, timeStamp: n2.now() });
                l3 = function(t5, e6, n3, r4, i4) {
                  var o3 = t5.interactions.new({ pointerType: "reflow" }), a6 = { interaction: o3, event: i4, pointer: i4, eventTarget: n3, phase: "reflow" };
                  o3.interactable = e6, o3.element = n3, o3.prevEvent = i4, o3.updatePointer(i4, i4, n3, true), nt(o3.coords.delta), Ut(o3.prepared, r4), o3._doPhase(a6);
                  var s4 = t5.window, c4 = s4.Promise, l4 = c4 ? new c4(function(t6) {
                    o3._reflowResolve = t6;
                  }) : void 0;
                  o3._reflowPromise = l4, o3.start(r4, e6, n3), o3._interacting ? (o3.move(a6), o3.end(i4)) : (o3.stop(), o3._reflowResolve());
                  return o3.removePointer(i4, i4), l4;
                }(n2, t4, a5, e5, f2);
              }
              o2 && o2.push(l3);
            }, s3 = 0; s3 < r3.length && !a4(); s3++)
              ;
            return o2 && i3.all(o2).then(function() {
              return t4;
            });
          }(this, e4, t3);
        };
      }, listeners: { "interactions:stop": function(t3, e3) {
        var n2 = t3.interaction;
        "reflow" === n2.pointerType && (n2._reflowResolve && n2._reflowResolve(), function(t4, e4) {
          t4.splice(t4.indexOf(e4), 1);
        }(e3.interactions.list, n2));
      } } }, er2 = tr2;
      if (un.use(he), un.use(Ce), un.use(Zn2), un.use(qe2), un.use(Ln), un.use(pe2), un.use(Xt2), un.use(Gt2), un.use(er2), un.default = un, "object" === ("undefined" == typeof module ? "undefined" : n(module)) && module)
        try {
          module.exports = un;
        } catch (t3) {
        }
      return un.default = un, un;
    });
  }
});

// node_modules/.pnpm/@vexip-ui+utils@2.13.1/node_modules/@vexip-ui/utils/dist/index.mjs
var y = typeof window < "u";
var At;
var gn = y && ((At = window == null ? void 0 : window.navigator) == null ? void 0 : At.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ne(t2) {
  return t2 == null;
}
function ot() {
}
var se = "[-\\+]?\\d+%?";
var ce = "[-\\+]?\\d*\\.\\d+%?";
var F = `(?:${ce})|(?:${se})`;
var ae = `[\\s|\\(]+(${F})[,|\\s]+(${F})[,|\\s]+(${F})\\s*\\)?`;
var U = `[\\s|\\(]+(${F})[,|\\s]+(${F})[,|\\s]+(${F})[,|\\s]+(${F})\\s*\\)?`;
var Tt = new RegExp(`rgb${ae}`);
var Ot = new RegExp(`rgba${U}`);
var $t = new RegExp(`hsl${U}`);
var Rt = new RegExp(`hsla${U}`);
var _t = new RegExp(`hsv${U}`);
var kt = new RegExp(`hsva${U}`);
var G = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
var fe = Object.freeze(new Set(Object.keys(G)));
function E(t2) {
  const e2 = t2.toString().split(/[eE]/), n = (e2[0].split(".")[1] || "").length - +(e2[1] || 0);
  return n > 0 ? n : 0;
}
var bt = Object.freeze([
  "B",
  "KB",
  "MB",
  "GB",
  "TB",
  "AUTO"
]);
function Wt(t2, e2 = 15) {
  return +parseFloat(Number(t2).toPrecision(e2));
}
function K(t2) {
  const e2 = String(t2);
  if (!e2.includes("e"))
    return Number(e2.replace(".", ""));
  const n = E(t2);
  return n > 0 ? Wt(Number(t2) * 10 ** n) : Number(t2);
}
function Q(t2) {
  return (...e2) => {
    let n = e2[0];
    for (let r2 = 1, o = e2.length; r2 < o; ++r2)
      n = t2(n, e2[r2]);
    return n;
  };
}
var P = Q((t2, e2) => {
  const n = K(t2), r2 = K(e2), o = E(t2) + E(e2);
  return n * r2 / 10 ** o;
});
var tr = Q((t2, e2) => {
  const n = 10 ** Math.max(E(t2), E(e2));
  return (P(t2, n) + P(e2, n)) / n;
});
var er = Q((t2, e2) => {
  const n = 10 ** Math.max(E(t2), E(e2));
  return (P(t2, n) - P(e2, n)) / n;
});
var nr = Q((t2, e2) => {
  const n = K(t2), r2 = K(e2);
  return P(n / r2, Wt(10 ** (E(e2) - E(t2))));
});
var A = 1e3;
var C = 60;
var Me = C * A;
var rr = C * A;
var X = 60;
var Gt = X * C;
var Se = Gt * A;
var or = Gt * A;
var zt = 24;
var we = zt * X;
var qt = we * C;
var Ee = qt * A;
var ir = qt * A;
var ct = 7;
var Ne = ct * zt;
var Ae = Ne * X;
var jt = Ae * C;
var Fe = jt * A;
var sr = jt * A;
var Kt = 3;
var Te = 4;
var Oe = Te * Kt;
var Xe = y && ("ontouchstart" in window || Ze() > 0);
function Ze() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
var Ve = [
  "button",
  "[href]:not(.disabled)",
  "input",
  "select",
  "textarea",
  "[tabindex]",
  "[contenteditable]"
].map((t2) => `${t2}:not(:disabled):not([disabled])`).join(", ");
function Wr() {
  const t2 = /* @__PURE__ */ new Map();
  return {
    on(e2, n) {
      const r2 = t2.get(e2);
      (r2 == null ? void 0 : r2.add(n)) || t2.set(e2, /* @__PURE__ */ new Set([n]));
    },
    off(e2, n) {
      const r2 = t2.get(e2);
      r2 && r2.delete(n);
    },
    clear(e2) {
      const n = t2.get(e2);
      n && n.clear();
    },
    clearAll() {
      t2.clear();
    },
    emit(e2, ...n) {
      const r2 = t2.get(e2);
      r2 && r2.forEach((o) => {
        o(...n);
      });
    }
  };
}
function jr(t2, e2 = 16) {
  if (typeof t2 != "function")
    return ot;
  const n = (...i2) => {
    t2(...i2);
  };
  if (e2 <= 0)
    return Xt(n);
  let r2 = 0, o;
  return function(...i2) {
    const s2 = Date.now(), c2 = s2 - r2;
    clearTimeout(o), c2 >= e2 ? (r2 = s2, n(...i2)) : o = setTimeout(
      () => {
        r2 = Date.now(), n(...i2);
      },
      Math.max(0, e2 - c2)
    );
  };
}
function Kr(t2, e2 = 100) {
  if (typeof t2 != "function")
    return ot;
  const n = (...o) => {
    t2(...o);
  };
  if (e2 <= 0)
    return Xt(n);
  let r2;
  return function(...o) {
    clearTimeout(r2), r2 = setTimeout(() => {
      n(...o);
    }, e2);
  };
}
function Xt(t2) {
  if (typeof t2 != "function")
    return t2;
  let e2 = false, n, r2;
  return function(...o) {
    return n = o, e2 || (e2 = true, r2 = Promise.resolve().then(() => (e2 = false, r2 = void 0, t2(...n)))), r2;
  };
}
var x = /* @__PURE__ */ new Set();
var Zt = /* @__PURE__ */ new WeakMap();
function fn() {
  x.forEach((t2) => {
    t2(...Zt.get(t2));
  }), x.clear();
}
function Xr(t2, ...e2) {
  if (typeof t2 != "function")
    return t2;
  Zt.set(t2, e2), !x.has(t2) && (x.add(t2), x.size === 1 && Promise.resolve().then(fn));
}

// node_modules/.pnpm/grid-layout-plus@1.0.4_vue@3.4.21/node_modules/grid-layout-plus/es/helpers/common.mjs
var T = Symbol("LAYOUT_KEY");
var v = Symbol("EMITTER_KEY");
function A2(r2) {
  let n = 0, t2;
  for (let e2 = 0, i2 = r2.length; e2 < i2; e2++)
    t2 = r2[e2].y + r2[e2].h, t2 > n && (n = t2);
  return n;
}
function Y(r2) {
  const n = Array(r2.length);
  for (let t2 = 0, e2 = r2.length; t2 < e2; t2++)
    n[t2] = y2(r2[t2]);
  return n;
}
function y2(r2) {
  return { ...r2 };
}
function d(r2, n) {
  return !(r2 === n || r2.x + r2.w <= n.x || r2.x >= n.x + n.w || r2.y + r2.h <= n.y || r2.y >= n.y + n.h);
}
function $(r2, n, t2) {
  const e2 = b(r2), i2 = g(r2), o = Array(r2.length);
  for (let s2 = 0, f = i2.length; s2 < f; s2++) {
    let c2 = i2[s2];
    c2.static || (c2 = E2(e2, c2, n, t2), e2.push(c2)), o[r2.indexOf(c2)] = c2, c2.moved = false;
  }
  return o;
}
function E2(r2, n, t2, e2) {
  if (t2)
    for (; n.y > 0 && !l(r2, n); )
      n.y--;
  else if (e2) {
    const o = e2[n.i].y;
    for (; n.y > o && !l(r2, n); )
      n.y--;
  }
  let i2;
  for (; i2 = l(r2, n); )
    n.y = i2.y + i2.h;
  return n;
}
function _(r2, n) {
  const t2 = b(r2);
  for (let e2 = 0, i2 = r2.length; e2 < i2; e2++) {
    const o = r2[e2];
    if (o.x + o.w > n.cols && (o.x = n.cols - o.w), o.x < 0 && (o.x = 0, o.w = n.cols), !o.static)
      t2.push(o);
    else
      for (; l(t2, o); )
        o.y++;
  }
  return r2;
}
function C2(r2, n) {
  for (let t2 = 0, e2 = r2.length; t2 < e2; t2++)
    if (r2[t2].i === n)
      return r2[t2];
}
function l(r2, n) {
  for (let t2 = 0, e2 = r2.length; t2 < e2; t2++)
    if (d(r2[t2], n))
      return r2[t2];
}
function L(r2, n) {
  return r2.filter((t2) => d(t2, n));
}
function b(r2) {
  return r2.filter((n) => n.static);
}
function x2(r2, n, t2, e2, i2 = false, o = false) {
  if (n.static)
    return r2;
  const s2 = n.x, f = n.y, c2 = e2 && n.y > e2;
  typeof t2 == "number" && (n.x = t2), typeof e2 == "number" && (n.y = e2), n.moved = true;
  let h = g(r2);
  c2 && (h = h.reverse());
  const p = L(h, n);
  if (o && p.length)
    return n.x = s2, n.y = f, n.moved = false, r2;
  for (let w = 0, m = p.length; w < m; w++) {
    const u = p[w];
    u.moved || n.y > u.y && n.y - u.y > u.h / 4 || (u.static ? r2 = a(r2, u, n, i2) : r2 = a(r2, n, u, i2));
  }
  return r2;
}
function a(r2, n, t2, e2) {
  if (e2) {
    const o = {
      x: t2.x,
      y: t2.y,
      w: t2.w,
      h: t2.h,
      i: "-1"
    };
    if (o.y = Math.max(n.y - t2.h, 0), !l(r2, o))
      return x2(r2, t2, void 0, o.y, false);
  }
  return x2(r2, t2, void 0, t2.y + 1, false);
}
function O(r2, n, t2, e2) {
  const i2 = "translate3d(" + n + "px," + r2 + "px, 0)";
  return {
    transform: i2,
    WebkitTransform: i2,
    MozTransform: i2,
    msTransform: i2,
    OTransform: i2,
    width: t2 + "px",
    height: e2 + "px",
    position: "absolute"
  };
}
function G2(r2, n, t2, e2) {
  const i2 = "translate3d(" + n * -1 + "px," + r2 + "px, 0)";
  return {
    transform: i2,
    WebkitTransform: i2,
    MozTransform: i2,
    msTransform: i2,
    OTransform: i2,
    width: t2 + "px",
    height: e2 + "px",
    position: "absolute"
  };
}
function R(r2, n, t2, e2) {
  return {
    top: r2 + "px",
    left: n + "px",
    width: t2 + "px",
    height: e2 + "px",
    position: "absolute"
  };
}
function V(r2, n, t2, e2) {
  return {
    top: r2 + "px",
    right: n + "px",
    width: t2 + "px",
    height: e2 + "px",
    position: "absolute"
  };
}
function g(r2) {
  return Array.from(r2).sort(function(n, t2) {
    return n.y === t2.y && n.x === t2.x ? 0 : n.y > t2.y || n.y === t2.y && n.x > t2.x ? 1 : -1;
  });
}
function k(r2, n) {
  n = n || "Layout";
  const t2 = ["x", "y", "w", "h"], e2 = [];
  if (!Array.isArray(r2))
    throw new Error(n + " must be an array!");
  for (let i2 = 0, o = r2.length; i2 < o; i2++) {
    const s2 = r2[i2];
    for (let f = 0; f < t2.length; f++)
      if (typeof s2[t2[f]] != "number")
        throw new Error(
          "VueGridLayout: " + n + "[" + i2 + "]." + t2[f] + " must be a number!"
        );
    if (s2.i === void 0 || s2.i === null)
      throw new Error("VueGridLayout: " + n + "[" + i2 + "].i cannot be null!");
    if (typeof s2.i != "number" && typeof s2.i != "string")
      throw new Error("VueGridLayout: " + n + "[" + i2 + "].i must be a string or number!");
    if (e2.indexOf(s2.i) >= 0)
      throw new Error("VueGridLayout: " + n + "[" + i2 + "].i must be unique!");
    if (e2.push(s2.i), s2.static !== void 0 && typeof s2.static != "boolean")
      throw new Error("VueGridLayout: " + n + "[" + i2 + "].static must be a boolean!");
  }
}
function K2(r2, n = "vgl") {
  const t2 = () => `${n}-${r2}`;
  return {
    b: t2,
    be: (s2) => `${t2()}__${s2}`,
    bm: (s2) => `${t2()}--${s2}`,
    bem: (s2, f) => `${t2()}__${s2}--${f}`
  };
}

// node_modules/.pnpm/grid-layout-plus@1.0.4_vue@3.4.21/node_modules/grid-layout-plus/es/helpers/draggable.mjs
function a2(t2) {
  return c(t2);
}
function c(t2) {
  var f;
  const n = ((f = t2.target) == null ? void 0 : f.offsetParent) || document.body, e2 = t2.offsetParent === document.body ? { left: 0, top: 0 } : n.getBoundingClientRect(), o = t2.clientX + n.scrollLeft - e2.left, r2 = t2.clientY + n.scrollTop - e2.top;
  return { x: o, y: r2 };
}
function i(t2, n, e2, o) {
  return s(t2) ? {
    deltaX: e2 - t2,
    deltaY: o - n,
    lastX: t2,
    lastY: n,
    x: e2,
    y: o
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: e2,
    lastY: o,
    x: e2,
    y: o
  };
}
function s(t2) {
  return typeof t2 == "number" && !Number.isNaN(t2);
}

// node_modules/.pnpm/grid-layout-plus@1.0.4_vue@3.4.21/node_modules/grid-layout-plus/es/helpers/responsive.mjs
function y3(t2, e2) {
  const o = d2(t2);
  let n = o[0];
  for (let r2 = 1, c2 = o.length; r2 < c2; r2++) {
    const i2 = o[r2];
    e2 > t2[i2] && (n = i2);
  }
  return n;
}
function B(t2, e2) {
  if (!e2[t2])
    throw new Error("ResponsiveGridLayout: `cols` entry for breakpoint " + t2 + " is missing!");
  return e2[t2];
}
function v2(t2, e2, o, n, r2, c2, i2) {
  if (e2[n])
    return Y(e2[n]);
  let s2 = t2;
  const u = d2(o), l2 = u.slice(u.indexOf(n));
  for (let f = 0, g2 = l2.length; f < g2; f++) {
    const a3 = l2[f];
    if (e2[a3]) {
      s2 = e2[a3];
      break;
    }
  }
  return s2 = Y(s2 || []), $(_(s2, { cols: c2 }), i2);
}
function d2(t2) {
  return Object.keys(t2).sort((o, n) => t2[o] - t2[n]);
}

// node_modules/.pnpm/grid-layout-plus@1.0.4_vue@3.4.21/node_modules/grid-layout-plus/es/helpers/dom.mjs
var t = "auto";
function e() {
  return typeof document < "u";
}
function r() {
  return e() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : t;
}

// node_modules/.pnpm/grid-layout-plus@1.0.4_vue@3.4.21/node_modules/grid-layout-plus/es/components/grid-item.vue.mjs
var import_interactjs = __toESM(require_interact_min(), 1);
var ot2 = defineComponent({
  __name: "grid-item",
  props: {
    isDraggable: {
      type: Boolean,
      default: null
    },
    isResizable: {
      type: Boolean,
      default: null
    },
    isBounded: {
      type: Boolean,
      default: null
    },
    static: {
      type: Boolean,
      default: false
    },
    minH: {
      type: Number,
      default: 1
    },
    minW: {
      type: Number,
      default: 1
    },
    maxH: {
      type: Number,
      default: 1 / 0
    },
    maxW: {
      type: Number,
      default: 1 / 0
    },
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    w: {
      type: Number,
      required: true
    },
    h: {
      type: Number,
      required: true
    },
    i: {
      type: [Number, String],
      required: true
    },
    dragIgnoreFrom: {
      type: String,
      default: "a, button"
    },
    dragAllowFrom: {
      type: String,
      default: null
    },
    resizeIgnoreFrom: {
      type: String,
      default: "a, button"
    },
    preserveAspectRatio: {
      type: Boolean,
      default: false
    },
    dragOption: {
      type: Object,
      default: () => ({})
    },
    resizeOption: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved"],
  setup(We2, { expose: Be2, emit: M }) {
    const i2 = We2, l2 = inject(T), g2 = inject(v);
    if (!l2)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const u = ref(null), e2 = reactive({
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: null,
      resizable: null,
      bounded: null,
      transformScale: 1,
      useCssTransforms: true,
      useStyleCursor: true,
      isDragging: false,
      dragging: {
        top: -1,
        left: -1
      },
      isResizing: false,
      resizing: {
        width: -1,
        height: -1
      },
      style: {},
      rtl: false
    });
    let L2 = false, X2 = false, _2 = NaN, q = NaN, j = NaN, $2 = NaN, G3 = -1, K4 = -1, V2 = -1, J = -1, h = i2.x, y4 = i2.y, p = i2.w, R2 = i2.h;
    const W = ref(), Q2 = reactive({
      i: toRef(i2, "i"),
      state: e2,
      wrapper: W,
      calcXY: E3
    });
    function Z(t2) {
      Ie(t2);
    }
    function U3() {
      de();
    }
    function ee(t2) {
      ne(i2.isDraggable) && (e2.draggable = t2);
    }
    function te2(t2) {
      ne(i2.isResizable) && (e2.resizable = t2);
    }
    function ie2(t2) {
      ne(i2.isBounded) && (e2.bounded = t2);
    }
    function re(t2) {
      e2.transformScale = t2;
    }
    function ae2(t2) {
      e2.rowHeight = t2;
    }
    function ne3(t2) {
      e2.maxRows = t2;
    }
    function oe() {
      e2.rtl = r() === "rtl", de();
    }
    function se2(t2) {
      e2.cols = Math.floor(t2);
    }
    l2.increaseItem(Q2), onBeforeMount(() => {
      e2.rtl = r() === "rtl";
    }), onMounted(() => {
      l2.responsive && l2.lastBreakpoint ? e2.cols = B(l2.lastBreakpoint, l2.cols) : e2.cols = l2.colNum, e2.rowHeight = l2.rowHeight, e2.containerWidth = l2.width !== null ? l2.width : 100, e2.margin = l2.margin !== void 0 ? l2.margin.map(Number) : [10, 10], e2.maxRows = l2.maxRows, ne(i2.isDraggable) ? e2.draggable = l2.isDraggable : e2.draggable = i2.isDraggable, ne(i2.isResizable) ? e2.resizable = l2.isResizable : e2.resizable = i2.isResizable, ne(i2.isBounded) ? e2.bounded = l2.isBounded : e2.bounded = i2.isBounded, e2.transformScale = l2.transformScale, e2.useCssTransforms = l2.useCssTransforms, e2.useStyleCursor = l2.useStyleCursor, watchEffect(() => {
        h = i2.x, y4 = i2.y, R2 = i2.h, p = i2.w, Xr(x3);
      }), g2.on("updateWidth", Z), g2.on("compact", U3), g2.on("setDraggable", ee), g2.on("setResizable", te2), g2.on("setBounded", ie2), g2.on("setTransformScale", re), g2.on("setRowHeight", ae2), g2.on("setMaxRows", ne3), g2.on("directionchange", oe), g2.on("setColNum", se2);
    }), onBeforeUnmount(() => {
      g2.off("updateWidth", Z), g2.off("compact", U3), g2.off("setDraggable", ee), g2.off("setResizable", te2), g2.off("setBounded", ie2), g2.off("setTransformScale", re), g2.off("setRowHeight", ae2), g2.off("setMaxRows", ne3), g2.off("directionchange", oe), g2.off("setColNum", se2), u.value && (u.value.unset(), u.value = null), l2.decreaseItem(Q2);
    }), Be2({ state: e2, wrapper: W });
    const Ne2 = navigator.userAgent.toLowerCase().includes("android"), le = computed(() => e2.resizable && !i2.static), m = computed(() => l2.isMirrored ? !e2.rtl : e2.rtl), Ce = computed(() => (e2.draggable || e2.resizable) && !i2.static), z = K2("item"), De = computed(() => ({
      [z.b()]: true,
      [z.bm("resizable")]: le.value,
      [z.bm("static")]: i2.static,
      [z.bm("resizing")]: e2.isResizing,
      [z.bm("dragging")]: e2.isDragging,
      [z.bm("transform")]: e2.useCssTransforms,
      [z.bm("rtl")]: m.value,
      [z.bm("no-touch")]: Ne2 && Ce.value
    })), I = computed(() => [z.be("resizer"), m.value && z.bem("resizer", "rtl")].filter(Boolean));
    watch(
      () => i2.isDraggable,
      (t2) => {
        e2.draggable = t2;
      }
    ), watch(
      () => i2.static,
      () => {
        Xr(he), Xr(H2);
      }
    ), watch(
      () => e2.draggable,
      () => {
        Xr(he);
      }
    ), watch(
      () => i2.isResizable,
      (t2) => {
        e2.resizable = t2;
      }
    ), watch(
      () => i2.isBounded,
      (t2) => {
        e2.bounded = t2;
      }
    ), watch(
      () => e2.resizable,
      () => {
        Xr(H2);
      }
    ), watch(
      () => e2.rowHeight,
      () => {
        Xr(x3), Xr(k2);
      }
    ), watch([() => e2.cols, () => e2.containerWidth], () => {
      Xr(H2), Xr(x3), Xr(k2);
    }), watch([() => i2.minH, () => i2.maxH, () => i2.minW, () => i2.maxW], () => {
      Xr(H2);
    }), watch(m, () => {
      Xr(H2), Xr(x3);
    }), watch([() => l2.margin, () => l2.margin[0], () => l2.margin[1]], () => {
      const t2 = l2.margin;
      !t2 || t2[0] === e2.margin[0] && t2[1] === e2.margin[1] || (e2.margin = t2.map(Number), Xr(x3), Xr(k2));
    });
    function x3() {
      i2.x + i2.w > e2.cols ? (h = 0, p = i2.w > e2.cols ? e2.cols : i2.w) : (h = i2.x, p = i2.w);
      const t2 = B2(h, y4, p, R2);
      e2.isDragging && (t2.top = e2.dragging.top, m.value ? t2.right = e2.dragging.left : t2.left = e2.dragging.left), e2.isResizing && (t2.width = e2.resizing.width, t2.height = e2.resizing.height);
      let a3;
      e2.useCssTransforms ? m.value ? a3 = G2(t2.top, t2.right, t2.width, t2.height) : a3 = O(t2.top, t2.left, t2.width, t2.height) : m.value ? a3 = V(t2.top, t2.right, t2.width, t2.height) : a3 = R(t2.top, t2.left, t2.width, t2.height), e2.style = a3;
    }
    function k2() {
      const t2 = {};
      for (const a3 of ["width", "height"]) {
        const o = e2.style[a3].match(/^(\d+)px$/);
        if (!o)
          return;
        t2[a3] = o[1];
      }
      M("container-resized", i2.i, i2.h, i2.w, t2.height, t2.width);
    }
    function ge2(t2) {
      if (i2.static)
        return;
      const a3 = t2.type;
      if (a3 === "resizestart" && e2.isResizing || a3 !== "resizestart" && !e2.isResizing)
        return;
      const s2 = a2(t2);
      if (ne(s2))
        return;
      const { x: o, y: c2 } = s2, n = { width: 0, height: 0 };
      let r2;
      switch (a3) {
        case "resizestart": {
          H2(), G3 = p, K4 = R2, r2 = B2(h, y4, p, R2), n.width = r2.width, n.height = r2.height, e2.resizing = n, e2.isResizing = true;
          break;
        }
        case "resizemove": {
          const d3 = i(j, $2, o, c2);
          m.value ? n.width = e2.resizing.width - d3.deltaX / e2.transformScale : n.width = e2.resizing.width + d3.deltaX / e2.transformScale, n.height = e2.resizing.height + d3.deltaY / e2.transformScale, e2.resizing = n;
          break;
        }
        case "resizeend": {
          r2 = B2(h, y4, p, R2), n.width = r2.width, n.height = r2.height, e2.resizing = { width: -1, height: -1 }, e2.isResizing = false;
          break;
        }
      }
      r2 = Te3(n.height, n.width), r2.w < i2.minW && (r2.w = i2.minW), r2.w > i2.maxW && (r2.w = i2.maxW), r2.h < i2.minH && (r2.h = i2.minH), r2.h > i2.maxH && (r2.h = i2.maxH), r2.h < 1 && (r2.h = 1), r2.w < 1 && (r2.w = 1), j = o, $2 = c2, (p !== r2.w || R2 !== r2.h) && M("resize", i2.i, r2.h, r2.w, n.height, n.width), t2.type === "resizeend" && (G3 !== p || K4 !== R2) && M("resized", i2.i, r2.h, r2.w, n.height, n.width), g2.emit("resizeEvent", t2.type, i2.i, h, y4, r2.h, r2.w);
    }
    function ce3(t2) {
      if (i2.static || e2.isResizing)
        return;
      const a3 = t2.type;
      if (a3 === "dragstart" && e2.isDragging || a3 !== "dragstart" && !e2.isDragging)
        return;
      const s2 = a2(t2);
      if (ne(s2))
        return;
      const { x: o, y: c2 } = s2, n = t2.target;
      if (!n.offsetParent)
        return;
      const r2 = { top: 0, left: 0 };
      switch (a3) {
        case "dragstart": {
          V2 = h, J = y4;
          const b2 = n.offsetParent.getBoundingClientRect(), v3 = n.getBoundingClientRect(), N = v3.left / e2.transformScale, C3 = b2.left / e2.transformScale, F2 = v3.right / e2.transformScale, O2 = b2.right / e2.transformScale, A3 = v3.top / e2.transformScale, P3 = b2.top / e2.transformScale;
          m.value ? r2.left = (F2 - O2) * -1 : r2.left = N - C3, r2.top = A3 - P3, e2.dragging = r2, e2.isDragging = true;
          break;
        }
        case "dragmove": {
          const b2 = i(_2, q, o, c2);
          if (m.value ? r2.left = e2.dragging.left - b2.deltaX / e2.transformScale : r2.left = e2.dragging.left + b2.deltaX / e2.transformScale, r2.top = e2.dragging.top + b2.deltaY / e2.transformScale, e2.bounded) {
            const v3 = n.offsetParent.clientHeight - fe2(i2.h, e2.rowHeight, e2.margin[1]);
            r2.top = ue(r2.top, 0, v3);
            const N = T2(), C3 = e2.containerWidth - fe2(i2.w, N, e2.margin[0]);
            r2.left = ue(r2.left, 0, C3);
          }
          e2.dragging = r2;
          break;
        }
        case "dragend": {
          const b2 = n.offsetParent.getBoundingClientRect(), v3 = n.getBoundingClientRect(), N = v3.left / e2.transformScale, C3 = b2.left / e2.transformScale, F2 = v3.right / e2.transformScale, O2 = b2.right / e2.transformScale, A3 = v3.top / e2.transformScale, P3 = b2.top / e2.transformScale;
          m.value ? r2.left = (F2 - O2) * -1 : r2.left = N - C3, r2.top = A3 - P3, e2.dragging = { top: -1, left: -1 }, e2.isDragging = false;
          break;
        }
      }
      let d3;
      m.value, d3 = E3(r2.top, r2.left), _2 = o, q = c2, (h !== d3.x || y4 !== d3.y) && M("move", i2.i, d3.x, d3.y), t2.type === "dragend" && (V2 !== h || J !== y4) && M("moved", i2.i, d3.x, d3.y), g2.emit("dragEvent", t2.type, i2.i, d3.x, d3.y, R2, p);
    }
    function B2(t2, a3, s2, o) {
      const c2 = T2();
      let n;
      return m.value ? n = {
        right: Math.round(c2 * t2 + (t2 + 1) * e2.margin[0]),
        top: Math.round(e2.rowHeight * a3 + (a3 + 1) * e2.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: s2 === 1 / 0 ? s2 : Math.round(c2 * s2 + Math.max(0, s2 - 1) * e2.margin[0]),
        height: o === 1 / 0 ? o : Math.round(e2.rowHeight * o + Math.max(0, o - 1) * e2.margin[1])
      } : n = {
        left: Math.round(c2 * t2 + (t2 + 1) * e2.margin[0]),
        top: Math.round(e2.rowHeight * a3 + (a3 + 1) * e2.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: s2 === 1 / 0 ? s2 : Math.round(c2 * s2 + Math.max(0, s2 - 1) * e2.margin[0]),
        height: o === 1 / 0 ? o : Math.round(e2.rowHeight * o + Math.max(0, o - 1) * e2.margin[1])
      }, n;
    }
    function E3(t2, a3) {
      const s2 = T2();
      let o = Math.round((a3 - e2.margin[0]) / (s2 + e2.margin[0])), c2 = Math.round((t2 - e2.margin[1]) / (e2.rowHeight + e2.margin[1]));
      return o = Math.max(Math.min(o, e2.cols - p), 0), c2 = Math.max(Math.min(c2, e2.maxRows - R2), 0), { x: o, y: c2 };
    }
    function T2() {
      return (e2.containerWidth - e2.margin[0] * (e2.cols + 1)) / e2.cols;
    }
    function fe2(t2, a3, s2) {
      return Number.isFinite(t2) ? Math.round(a3 * t2 + Math.max(0, t2 - 1) * s2) : t2;
    }
    function ue(t2, a3, s2) {
      return Math.max(Math.min(t2, s2), a3);
    }
    function Te3(t2, a3, s2 = false) {
      const o = T2();
      let c2 = Math.round((a3 + e2.margin[0]) / (o + e2.margin[0])), n = 0;
      return s2 ? n = Math.ceil((t2 + e2.margin[1]) / (e2.rowHeight + e2.margin[1])) : n = Math.round((t2 + e2.margin[1]) / (e2.rowHeight + e2.margin[1])), c2 = Math.max(Math.min(c2, e2.cols - h), 0), n = Math.max(Math.min(n, e2.maxRows - y4), 0), { w: c2, h: n };
    }
    function Ie(t2, a3) {
      e2.containerWidth = t2, a3 != null && (e2.cols = a3);
    }
    function de() {
      x3();
    }
    function me2() {
      !u.value && W.value && (u.value = (0, import_interactjs.default)(W.value), e2.useStyleCursor || u.value.styleCursor(false));
    }
    const ke2 = jr(ce3);
    function he() {
      if (me2(), !!u.value)
        if (e2.draggable && !i2.static) {
          const t2 = {
            ignoreFrom: i2.dragIgnoreFrom,
            allowFrom: i2.dragAllowFrom,
            ...i2.dragOption
          };
          u.value.draggable(t2), L2 || (L2 = true, u.value.on("dragstart dragmove dragend", (a3) => {
            a3.type === "dragmove" ? ke2(a3) : ce3(a3);
          }));
        } else
          u.value.draggable({ enabled: false });
    }
    const Ee2 = jr(ge2);
    function H2() {
      if (me2(), !!u.value)
        if (e2.resizable && !i2.static) {
          const t2 = B2(0, 0, i2.maxW, i2.maxH), a3 = B2(0, 0, i2.minW, i2.minH), s2 = {
            edges: {
              left: false,
              right: `.${I.value[0]}`,
              bottom: `.${I.value[0]}`,
              top: false
            },
            ignoreFrom: i2.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: a3.height * e2.transformScale,
                width: a3.width * e2.transformScale
              },
              max: {
                height: t2.height * e2.transformScale,
                width: t2.width * e2.transformScale
              }
            },
            ...i2.resizeOption
          };
          i2.preserveAspectRatio && (s2.modifiers = [import_interactjs.default.modifiers.aspectRatio({ ratio: "preserve" })]), u.value.resizable(s2), X2 || (X2 = true, u.value.on("resizestart resizemove resizeend", (o) => {
            o.type === "resizemove" ? Ee2(o) : ge2(o);
          }));
        } else
          u.value.resizable({ enabled: false });
    }
    return (t2, a3) => (openBlock(), createElementBlock("section", {
      ref_key: "wrapper",
      ref: W,
      class: normalizeClass(unref(De)),
      style: normalizeStyle(e2.style)
    }, [
      renderSlot(t2.$slots, "default"),
      unref(le) ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(I))
      }, null, 2)) : createCommentVNode("", true)
    ], 6));
  }
});

// node_modules/.pnpm/@vexip-ui+hooks@2.4.1_vue@3.4.21/node_modules/@vexip-ui/hooks/dist/index.mjs
var D = typeof window < "u";
var ft;
D && ((ft = window == null ? void 0 : window.navigator) != null && ft.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Xe2(e2) {
  return e2 != null;
}
function P2() {
}
var mn = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(mn)));
var gn2 = D && ("ontouchstart" in window || yn() > 0);
var bn = gn2 ? "pointerdown" : "click";
function yn() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function wn(e2, t2, n = window.Event) {
  const { type: r2, bubbles: o = false, cancelable: i2 = false, ...s2 } = t2;
  if (!Xe2(r2) || r2 === "")
    return false;
  let c2;
  return Xe2(n) ? c2 = new n(r2, { bubbles: o, cancelable: i2 }) : (c2 = document.createEvent("HTMLEvents"), c2.initEvent(r2, o, i2)), Object.assign(c2, s2), e2.dispatchEvent(c2);
}
function Pt(e2, t2 = 16) {
  if (typeof e2 != "function")
    return P2;
  const n = (...i2) => {
    e2(...i2);
  };
  if (t2 <= 0)
    return En(n);
  let r2 = 0, o;
  return function(...i2) {
    const s2 = Date.now(), c2 = s2 - r2;
    clearTimeout(o), c2 >= t2 ? (r2 = s2, n(...i2)) : o = setTimeout(
      () => {
        r2 = Date.now(), n(...i2);
      },
      Math.max(0, t2 - c2)
    );
  };
}
function En(e2) {
  if (typeof e2 != "function")
    return e2;
  let t2 = false, n, r2;
  return function(...o) {
    return n = o, t2 || (t2 = true, r2 = Promise.resolve().then(() => (t2 = false, r2 = void 0, e2(...n)))), r2;
  };
}
var _t2 = "clickoutside";
var je = /* @__PURE__ */ new Set();
D && document.addEventListener(
  bn,
  (e2) => {
    const t2 = e2.target, n = e2.composedPath && e2.composedPath();
    je.forEach((r2) => {
      r2 !== t2 && (n ? !n.includes(r2) : !r2.contains(t2)) && (!r2.__transferElement || r2.__transferElement !== t2 && !r2.__transferElement.contains(t2)) && wn(r2, { type: _t2 });
    });
  },
  true
);
var Sn = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  // New WebKit
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  // Old WebKit
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
var ie;
if (D) {
  for (const e2 of Sn)
    if (e2[1] in document) {
      ie = e2;
      break;
    }
}
var Ye = !!ie;
var On = {
  supported: Ye,
  full: computed(() => false),
  enter: P2,
  exit: P2,
  toggle: P2
};
var Wt2 = /* @__PURE__ */ new Set();
var Ke = /* @__PURE__ */ new WeakMap();
if (D && ie) {
  const e2 = ie[2], t2 = ie[4];
  document.addEventListener(
    t2,
    () => {
      debugger;
      if (Wt2.forEach((n) => {
        n.value = false;
      }), document[e2]) {
        const n = Ke.get(document[e2]);
        n && (n.value = true);
      }
    },
    false
  );
}
var pe = /* @__PURE__ */ new Set();
var K3 = /* @__PURE__ */ new Map();
K3.set("x", 0);
K3.set("y", 0);
function Bn(e2) {
  const { pageX: t2, pageY: n } = e2;
  K3.set("x", t2), K3.set("y", n), pe.forEach((r2) => {
    r2.x.value = t2, r2.y.value = n;
  });
}
var It = Pt(Bn);
var U2 = (e2) => ({
  x: e2,
  y: e2
});
var Zn = U2(0);
var te = [];
var mr = function() {
  return te.some(function(e2) {
    return e2.activeTargets.length > 0;
  });
};
var pr = function() {
  return te.some(function(e2) {
    return e2.skippedTargets.length > 0;
  });
};
var wt = "ResizeObserver loop completed with undelivered notifications.";
var vr = function() {
  var e2;
  typeof ErrorEvent == "function" ? e2 = new ErrorEvent("error", {
    message: wt
  }) : (e2 = document.createEvent("Event"), e2.initEvent("error", false, false), e2.message = wt), window.dispatchEvent(e2);
};
var ge;
(function(e2) {
  e2.BORDER_BOX = "border-box", e2.CONTENT_BOX = "content-box", e2.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ge || (ge = {}));
var ne2 = function(e2) {
  return Object.freeze(e2);
};
var gr = /* @__PURE__ */ function() {
  function e2(t2, n) {
    this.inlineSize = t2, this.blockSize = n, ne2(this);
  }
  return e2;
}();
var Jt = function() {
  function e2(t2, n, r2, o) {
    return this.x = t2, this.y = n, this.width = r2, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, ne2(this);
  }
  return e2.prototype.toJSON = function() {
    var t2 = this, n = t2.x, r2 = t2.y, o = t2.top, i2 = t2.right, s2 = t2.bottom, c2 = t2.left, a3 = t2.width, l2 = t2.height;
    return { x: n, y: r2, top: o, right: i2, bottom: s2, left: c2, width: a3, height: l2 };
  }, e2.fromRect = function(t2) {
    return new e2(t2.x, t2.y, t2.width, t2.height);
  }, e2;
}();
var st = function(e2) {
  return e2 instanceof SVGElement && "getBBox" in e2;
};
var Zt2 = function(e2) {
  if (st(e2)) {
    var t2 = e2.getBBox(), n = t2.width, r2 = t2.height;
    return !n && !r2;
  }
  var o = e2, i2 = o.offsetWidth, s2 = o.offsetHeight;
  return !(i2 || s2 || e2.getClientRects().length);
};
var xt = function(e2) {
  var t2;
  if (e2 instanceof Element)
    return true;
  var n = (t2 = e2 == null ? void 0 : e2.ownerDocument) === null || t2 === void 0 ? void 0 : t2.defaultView;
  return !!(n && e2 instanceof n.Element);
};
var br = function(e2) {
  switch (e2.tagName) {
    case "INPUT":
      if (e2.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};
var me = typeof window < "u" ? window : {};
var Re = /* @__PURE__ */ new WeakMap();
var Et = /auto|scroll/;
var yr = /^tb|vertical/;
var wr = /msie|trident/i.test(me.navigator && me.navigator.userAgent);
var H = function(e2) {
  return parseFloat(e2 || "0");
};
var ce2 = function(e2, t2, n) {
  return e2 === void 0 && (e2 = 0), t2 === void 0 && (t2 = 0), n === void 0 && (n = false), new gr((n ? t2 : e2) || 0, (n ? e2 : t2) || 0);
};
var Rt2 = ne2({
  devicePixelContentBoxSize: ce2(),
  borderBoxSize: ce2(),
  contentBoxSize: ce2(),
  contentRect: new Jt(0, 0, 0, 0)
});
var Qt = function(e2, t2) {
  if (t2 === void 0 && (t2 = false), Re.has(e2) && !t2)
    return Re.get(e2);
  if (Zt2(e2))
    return Re.set(e2, Rt2), Rt2;
  var n = getComputedStyle(e2), r2 = st(e2) && e2.ownerSVGElement && e2.getBBox(), o = !wr && n.boxSizing === "border-box", i2 = yr.test(n.writingMode || ""), s2 = !r2 && Et.test(n.overflowY || ""), c2 = !r2 && Et.test(n.overflowX || ""), a3 = r2 ? 0 : H(n.paddingTop), l2 = r2 ? 0 : H(n.paddingRight), f = r2 ? 0 : H(n.paddingBottom), p = r2 ? 0 : H(n.paddingLeft), b2 = r2 ? 0 : H(n.borderTopWidth), m = r2 ? 0 : H(n.borderRightWidth), v3 = r2 ? 0 : H(n.borderBottomWidth), u = r2 ? 0 : H(n.borderLeftWidth), d3 = p + l2, h = a3 + f, g2 = u + m, w = b2 + v3, O2 = c2 ? e2.offsetHeight - w - e2.clientHeight : 0, S = s2 ? e2.offsetWidth - g2 - e2.clientWidth : 0, R2 = o ? d3 + g2 : 0, M = o ? h + w : 0, A3 = r2 ? r2.width : H(n.width) - R2 - S, B2 = r2 ? r2.height : H(n.height) - M - O2, F2 = A3 + d3 + S + g2, N = B2 + h + O2 + w, L2 = ne2({
    devicePixelContentBoxSize: ce2(Math.round(A3 * devicePixelRatio), Math.round(B2 * devicePixelRatio), i2),
    borderBoxSize: ce2(F2, N, i2),
    contentBoxSize: ce2(A3, B2, i2),
    contentRect: new Jt(p, a3, A3, B2)
  });
  return Re.set(e2, L2), L2;
};
var en = function(e2, t2, n) {
  var r2 = Qt(e2, n), o = r2.borderBoxSize, i2 = r2.contentBoxSize, s2 = r2.devicePixelContentBoxSize;
  switch (t2) {
    case ge.DEVICE_PIXEL_CONTENT_BOX:
      return s2;
    case ge.BORDER_BOX:
      return o;
    default:
      return i2;
  }
};
var xr = /* @__PURE__ */ function() {
  function e2(t2) {
    var n = Qt(t2);
    this.target = t2, this.contentRect = n.contentRect, this.borderBoxSize = ne2([n.borderBoxSize]), this.contentBoxSize = ne2([n.contentBoxSize]), this.devicePixelContentBoxSize = ne2([n.devicePixelContentBoxSize]);
  }
  return e2;
}();
var tn = function(e2) {
  if (Zt2(e2))
    return 1 / 0;
  for (var t2 = 0, n = e2.parentNode; n; )
    t2 += 1, n = n.parentNode;
  return t2;
};
var Er = function() {
  var e2 = 1 / 0, t2 = [];
  te.forEach(function(s2) {
    if (s2.activeTargets.length !== 0) {
      var c2 = [];
      s2.activeTargets.forEach(function(l2) {
        var f = new xr(l2.target), p = tn(l2.target);
        c2.push(f), l2.lastReportedSize = en(l2.target, l2.observedBox), p < e2 && (e2 = p);
      }), t2.push(function() {
        s2.callback.call(s2.observer, c2, s2.observer);
      }), s2.activeTargets.splice(0, s2.activeTargets.length);
    }
  });
  for (var n = 0, r2 = t2; n < r2.length; n++) {
    var o = r2[n];
    o();
  }
  return e2;
};
var Tt2 = function(e2) {
  te.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (tn(o.target) > e2 ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
};
var Rr = function() {
  var e2 = 0;
  for (Tt2(e2); mr(); )
    e2 = Er(), Tt2(e2);
  return pr() && vr(), e2 > 0;
};
var $e;
var nn = [];
var Tr = function() {
  return nn.splice(0).forEach(function(e2) {
    return e2();
  });
};
var Sr = function(e2) {
  if (!$e) {
    var t2 = 0, n = document.createTextNode(""), r2 = { characterData: true };
    new MutationObserver(function() {
      return Tr();
    }).observe(n, r2), $e = function() {
      n.textContent = "".concat(t2 ? t2-- : t2++);
    };
  }
  nn.push(e2), $e();
};
var Or = function(e2) {
  Sr(function() {
    requestAnimationFrame(e2);
  });
};
var ke = 0;
var kr = function() {
  return !!ke;
};
var zr = 250;
var Cr = { attributes: true, characterData: true, childList: true, subtree: true };
var St = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
];
var Ot2 = function(e2) {
  return e2 === void 0 && (e2 = 0), Date.now() + e2;
};
var qe = false;
var Ar = function() {
  function e2() {
    var t2 = this;
    this.stopped = true, this.listener = function() {
      return t2.schedule();
    };
  }
  return e2.prototype.run = function(t2) {
    var n = this;
    if (t2 === void 0 && (t2 = zr), !qe) {
      qe = true;
      var r2 = Ot2(t2);
      Or(function() {
        var o = false;
        try {
          o = Rr();
        } finally {
          if (qe = false, t2 = r2 - Ot2(), !kr())
            return;
          o ? n.run(1e3) : t2 > 0 ? n.run(t2) : n.start();
        }
      });
    }
  }, e2.prototype.schedule = function() {
    this.stop(), this.run();
  }, e2.prototype.observe = function() {
    var t2 = this, n = function() {
      return t2.observer && t2.observer.observe(document.body, Cr);
    };
    document.body ? n() : me.addEventListener("DOMContentLoaded", n);
  }, e2.prototype.start = function() {
    var t2 = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), St.forEach(function(n) {
      return me.addEventListener(n, t2.listener, true);
    }));
  }, e2.prototype.stop = function() {
    var t2 = this;
    this.stopped || (this.observer && this.observer.disconnect(), St.forEach(function(n) {
      return me.removeEventListener(n, t2.listener, true);
    }), this.stopped = true);
  }, e2;
}();
var Je = new Ar();
var kt2 = function(e2) {
  !ke && e2 > 0 && Je.start(), ke += e2, !ke && Je.stop();
};
var Mr = function(e2) {
  return !st(e2) && !br(e2) && getComputedStyle(e2).display === "inline";
};
var Lr = function() {
  function e2(t2, n) {
    this.target = t2, this.observedBox = n || ge.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e2.prototype.isActive = function() {
    var t2 = en(this.target, this.observedBox, true);
    return Mr(this.target) && (this.lastReportedSize = t2), this.lastReportedSize.inlineSize !== t2.inlineSize || this.lastReportedSize.blockSize !== t2.blockSize;
  }, e2;
}();
var Br = /* @__PURE__ */ function() {
  function e2(t2, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t2, this.callback = n;
  }
  return e2;
}();
var Te2 = /* @__PURE__ */ new WeakMap();
var zt2 = function(e2, t2) {
  for (var n = 0; n < e2.length; n += 1)
    if (e2[n].target === t2)
      return n;
  return -1;
};
var Se2 = function() {
  function e2() {
  }
  return e2.connect = function(t2, n) {
    var r2 = new Br(t2, n);
    Te2.set(t2, r2);
  }, e2.observe = function(t2, n, r2) {
    var o = Te2.get(t2), i2 = o.observationTargets.length === 0;
    zt2(o.observationTargets, n) < 0 && (i2 && te.push(o), o.observationTargets.push(new Lr(n, r2 && r2.box)), kt2(1), Je.schedule());
  }, e2.unobserve = function(t2, n) {
    var r2 = Te2.get(t2), o = zt2(r2.observationTargets, n), i2 = r2.observationTargets.length === 1;
    o >= 0 && (i2 && te.splice(te.indexOf(r2), 1), r2.observationTargets.splice(o, 1), kt2(-1));
  }, e2.disconnect = function(t2) {
    var n = this, r2 = Te2.get(t2);
    r2.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t2, o.target);
    }), r2.activeTargets.splice(0, r2.activeTargets.length);
  }, e2;
}();
var Ct = function() {
  function e2(t2) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t2 != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Se2.connect(this, t2);
  }
  return e2.prototype.observe = function(t2, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!xt(t2))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Se2.observe(this, t2, n);
  }, e2.prototype.unobserve = function(t2) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!xt(t2))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Se2.unobserve(this, t2);
  }, e2.prototype.disconnect = function() {
    Se2.disconnect(this);
  }, e2.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e2;
}();
var Be = /* @__PURE__ */ new WeakMap();
function Pr(e2) {
  for (let t2 = 0, n = e2.length; t2 < n; ++t2) {
    const r2 = e2[t2], o = Be.get(r2.target);
    typeof o == "function" && o(r2);
  }
}
var rn = new (D && window.ResizeObserver || Ct)(
  Pr
);
function We(e2, t2) {
  Be.set(e2, t2), rn.observe(e2);
}
function on(e2) {
  Be.has(e2) && (rn.unobserve(e2), Be.delete(e2));
}
function so() {
  return {
    observeResize: We,
    unobserveResize: on
  };
}
var sn = ref(false);
var Dr = computed(() => sn.value);
var co = Object.freeze([
  "top",
  "top-start",
  "top-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
  "right",
  "right-start",
  "right-end"
]);
var At2 = "__theme_style__";
var ze = "__theme_observer__";
var Pe = reactive(/* @__PURE__ */ new Map());
var Ze2 = /* @__PURE__ */ new Map();
watch(Pe, () => {
  if (!D)
    return;
  Ze2.clear();
  const e2 = document.head.querySelector(`#${At2}`);
  e2 && document.head.removeChild(e2);
  const t2 = document.createElement("style");
  let n = `.${ze} { width: 1px }`, r2 = 1;
  for (const [o, [i2, s2]] of Pe.entries())
    n += ` html.${i2} .${ze}, .${s2} .${ze} { width: ${++r2}px }`, Ze2.set(r2, o);
  t2.textContent = n, t2.id = At2, document.head.appendChild(t2);
});

// node_modules/.pnpm/grid-layout-plus@1.0.4_vue@3.4.21/node_modules/grid-layout-plus/es/components/grid-layout.vue.mjs
var Se3 = defineComponent({
  __name: "grid-layout",
  props: {
    autoSize: {
      type: Boolean,
      default: true
    },
    colNum: {
      type: Number,
      default: 12
    },
    rowHeight: {
      type: Number,
      default: 150
    },
    maxRows: {
      type: Number,
      default: 1 / 0
    },
    margin: {
      type: Array,
      default: () => [10, 10]
    },
    isDraggable: {
      type: Boolean,
      default: true
    },
    isResizable: {
      type: Boolean,
      default: true
    },
    isMirrored: {
      type: Boolean,
      default: false
    },
    isBounded: {
      type: Boolean,
      default: false
    },
    useCssTransforms: {
      type: Boolean,
      default: true
    },
    verticalCompact: {
      type: Boolean,
      default: true
    },
    restoreOnDrag: {
      type: Boolean,
      default: false
    },
    layout: {
      type: Array,
      required: true
    },
    responsive: {
      type: Boolean,
      default: false
    },
    responsiveLayouts: {
      type: Object,
      default: () => ({})
    },
    transformScale: {
      type: Number,
      default: 1
    },
    breakpoints: {
      type: Object,
      default: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 })
    },
    cols: {
      type: Object,
      default: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 })
    },
    preventCollision: {
      type: Boolean,
      default: false
    },
    useStyleCursor: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    "layout-before-mount",
    "layout-mounted",
    "layout-updated",
    "breakpoint-changed",
    "update:layout",
    "layout-ready"
  ],
  setup(W, { expose: A3, emit: u }) {
    const a3 = W, t2 = reactive({
      width: -1,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: false,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: ""
      },
      layouts: {},
      // array to store all layouts from different breakpoints
      lastBreakpoint: null,
      // store last active breakpoint
      originalLayout: null
      // store original Layout
    }), L2 = /* @__PURE__ */ new Map(), l2 = ref(a3.layout), g2 = ref(), { observeResize: Y2, unobserveResize: j } = so(), r2 = Wr();
    r2.on("resizeEvent", $2), r2.on("dragEvent", q), onBeforeMount(() => {
      u("layout-before-mount", l2.value);
    }), onMounted(() => {
      u("layout-mounted", l2.value), nextTick(() => {
        k(l2.value), t2.originalLayout = l2.value, nextTick(() => {
          S(), g2.value && Y2(g2.value, Kr(k2, 16)), $(l2.value, a3.verticalCompact), u("layout-updated", l2.value), m(), k2();
        });
      });
    }), onBeforeUnmount(() => {
      r2.clearAll(), g2.value && j(g2.value);
    });
    function $2(e2, n, i2, p, c2, d3) {
      E3(e2, n, i2, p, c2, d3);
    }
    function q(e2, n, i2, p, c2, d3) {
      R2(e2, n, i2, p, c2, d3);
    }
    watch(
      () => t2.width,
      (e2, n) => {
        nextTick(() => {
          r2.emit("updateWidth", e2), n === null && nextTick(() => {
            u("layout-ready", l2.value);
          }), m();
        });
      }
    ), watch(
      () => [a3.layout, a3.layout.length],
      () => {
        l2.value = a3.layout, P3();
      }
    ), watch(
      () => a3.colNum,
      (e2) => {
        r2.emit("setColNum", e2);
      }
    ), watch(
      () => a3.rowHeight,
      (e2) => {
        r2.emit("setRowHeight", e2);
      }
    ), watch(
      () => a3.isDraggable,
      (e2) => {
        r2.emit("setDraggable", e2);
      }
    ), watch(
      () => a3.isResizable,
      (e2) => {
        r2.emit("setResizable", e2);
      }
    ), watch(
      () => a3.isBounded,
      (e2) => {
        r2.emit("setBounded", e2);
      }
    ), watch(
      () => a3.transformScale,
      (e2) => {
        r2.emit("setTransformScale", e2);
      }
    ), watch(
      () => a3.responsive,
      (e2) => {
        e2 || (u("update:layout", t2.originalLayout), r2.emit("setColNum", a3.colNum)), k2();
      }
    ), watch(
      () => a3.maxRows,
      (e2) => {
        r2.emit("setMaxRows", e2);
      }
    ), watch([() => a3.margin, () => a3.margin[1]], m), provide(
      T,
      reactive({
        ...toRefs(a3),
        ...toRefs(t2),
        increaseItem: U3,
        decreaseItem: G3
      })
    ), provide(v, r2), A3({ state: t2, getItem: K4, resizeEvent: E3, dragEvent: R2 });
    function U3(e2) {
      L2.set(e2.i, e2);
    }
    function G3(e2) {
      L2.delete(e2.i);
    }
    function K4(e2) {
      return L2.get(e2);
    }
    function P3() {
      if (!ne(l2.value) && !ne(t2.originalLayout)) {
        if (l2.value.length !== t2.originalLayout.length) {
          const e2 = J(l2.value, t2.originalLayout);
          if (e2.length > 0)
            if (l2.value.length > t2.originalLayout.length)
              t2.originalLayout = t2.originalLayout.concat(e2);
            else {
              const n = new Set(e2.map((i2) => i2.i));
              t2.originalLayout = t2.originalLayout.filter((i2) => !n.has(i2.i));
            }
          t2.lastLayoutLength = l2.value.length, S();
        }
        $(l2.value, a3.verticalCompact), r2.emit("updateWidth", t2.width), m(), u("layout-updated", l2.value);
      }
    }
    function m() {
      t2.mergedStyle = {
        height: V2()
      };
    }
    function k2() {
      g2.value && (t2.width = g2.value.offsetWidth), r2.emit("resizeEvent");
    }
    function V2() {
      if (!a3.autoSize)
        return;
      const e2 = parseFloat(a3.margin[1]);
      return A2(l2.value) * (a3.rowHeight + e2) + e2 + "px";
    }
    let C3;
    function R2(e2, n, i2, p, c2, d3) {
      let o = C2(l2.value, n);
      ne(o) && (o = { h: 0, w: 0, x: 0, y: 0, i: "" }), e2 === "dragstart" && !a3.verticalCompact && (C3 = l2.value.reduce(
        (v3, { i: b2, x: f, y: h }) => ({
          ...v3,
          [b2]: { x: f, y: h }
        }),
        {}
      )), e2 === "dragmove" || e2 === "dragstart" ? (t2.placeholder.i = n, t2.placeholder.x = o.x, t2.placeholder.y = o.y, t2.placeholder.w = d3, t2.placeholder.h = c2, nextTick(() => {
        t2.isDragging = true;
      }), r2.emit("updateWidth", t2.width)) : nextTick(() => {
        t2.isDragging = false;
      }), l2.value = x2(l2.value, o, i2, p, true, a3.preventCollision), a3.restoreOnDrag ? (o.static = true, $(l2.value, a3.verticalCompact, C3), o.static = false) : $(l2.value, a3.verticalCompact), r2.emit("compact"), m(), e2 === "dragend" && (C3 = void 0, u("layout-updated", l2.value));
    }
    function E3(e2, n, i2, p, c2, d3) {
      let o = C2(l2.value, n);
      ne(o) && (o = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let v3;
      if (a3.preventCollision) {
        const b2 = L(l2.value, { ...o, w: d3, h: c2 }).filter(
          (f) => f.i !== o.i
        );
        if (v3 = b2.length > 0, v3) {
          let f = 1 / 0, h = 1 / 0;
          b2.forEach((x3) => {
            x3.x > o.x && (f = Math.min(f, x3.x)), x3.y > o.y && (h = Math.min(h, x3.y));
          }), Number.isFinite(f) && (o.w = f - o.x), Number.isFinite(h) && (o.h = h - o.y);
        }
      }
      v3 || (o.w = d3, o.h = c2), e2 === "resizestart" || e2 === "resizemove" ? (t2.placeholder.i = n, t2.placeholder.x = i2, t2.placeholder.y = p, t2.placeholder.w = o.w, t2.placeholder.h = o.h, nextTick(() => {
        t2.isDragging = true;
      }), r2.emit("updateWidth", t2.width)) : nextTick(() => {
        t2.isDragging = false;
      }), a3.responsive && X2(), $(l2.value, a3.verticalCompact), r2.emit("compact"), m(), e2 === "resizeend" && u("layout-updated", l2.value);
    }
    function X2() {
      const e2 = y3(a3.breakpoints, t2.width), n = B(e2, a3.cols);
      !ne(t2.lastBreakpoint) && !t2.layouts[t2.lastBreakpoint] && (t2.layouts[t2.lastBreakpoint] = Y(l2.value));
      const i2 = v2(
        t2.originalLayout,
        t2.layouts,
        a3.breakpoints,
        e2,
        t2.lastBreakpoint,
        n,
        a3.verticalCompact
      );
      t2.layouts[e2] = i2, t2.lastBreakpoint !== e2 && u("breakpoint-changed", e2, i2), u("update:layout", i2), t2.lastBreakpoint = e2, r2.emit("setColNum", B(e2, a3.cols));
    }
    function S() {
      t2.layouts = Object.assign({}, a3.responsiveLayouts);
    }
    function J(e2, n) {
      const i2 = new Set(n.map((o) => o.i)), p = new Set(e2.map((o) => o.i)), c2 = e2.filter((o) => !i2.has(o.i)), d3 = n.filter((o) => !p.has(o.i));
      return c2.concat(d3);
    }
    return (e2, n) => (openBlock(), createElementBlock("div", {
      ref_key: "wrapper",
      ref: g2,
      class: "vgl-layout",
      style: normalizeStyle(t2.mergedStyle)
    }, [
      e2.$slots.default ? renderSlot(e2.$slots, "default", { key: 0 }) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(l2.value, (i2) => (openBlock(), createBlock(ot2, mergeProps({
        key: i2.i
      }, i2), {
        default: withCtx(() => [
          renderSlot(e2.$slots, "item", { item: i2 })
        ]),
        _: 2
      }, 1040))), 128)),
      withDirectives(createVNode(ot2, {
        class: "vgl-item--placeholder",
        x: t2.placeholder.x,
        y: t2.placeholder.y,
        w: t2.placeholder.w,
        h: t2.placeholder.h,
        i: t2.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [vShow, t2.isDragging]
      ])
    ], 4));
  }
});

// node_modules/.pnpm/grid-layout-plus@1.0.4_vue@3.4.21/node_modules/grid-layout-plus/es/index.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var e2 = document.createElement("style");
      e2.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;inset:0 3px 3px 0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{inset:0 0 3px 3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}')), document.head.appendChild(e2);
    }
  } catch (r2) {
    console.error("vite-plugin-css-injected-by-js", r2);
  }
})();
export {
  ot2 as GridItem,
  Se3 as GridLayout
};
//# sourceMappingURL=grid-layout-plus.js.map
