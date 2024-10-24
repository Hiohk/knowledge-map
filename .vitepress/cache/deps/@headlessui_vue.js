import {
  Fragment,
  Teleport,
  cloneVNode,
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  nextTick,
  normalizeClass,
  onMounted,
  onScopeDispose,
  onUnmounted,
  provide,
  reactive,
  ref,
  shallowRef,
  toRaw,
  triggerRef,
  unref,
  watch,
  watchEffect
} from "./chunk-ZHRRCW76.js";
import "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/@tanstack+virtual-core@3.10.7/node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a5, b2) => Math.abs(a5 - b2) < 1;
var debounce = (targetWindow, fn, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/.pnpm/@tanstack+virtual-core@3.10.7/node_modules/@tanstack/virtual-core/dist/esm/index.js
var defaultKeyExtractor = (index) => index;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i9 = start; i9 <= end; i9++) {
    arr.push(i9);
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset = 0;
  const fallback = supportsScrollend ? () => void 0 : debounce(
    targetWindow,
    () => {
      cb(offset, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
var measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
var elementScroll = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            this._measureElement(entry.target, entry);
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined") delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d9) => d9());
      this.unsubs = [];
      this.observer.disconnect();
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            this.isScrolling = isScrolling;
            this.maybeNotify();
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m4 = index - 1; m4 >= 0; m4--) {
        const measurement = measurements[m4];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a5, b2) => {
        if (a5.end === b2.end) {
          return a5.index - b2.index;
        }
        return a5.end - b2.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min);
        for (let i9 = min; i9 < count; i9++) {
          const key = getItemKey(i9);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i9 - 1] : this.getFurthestMeasurement(measurements, i9);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i9);
          const end = start + size;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i9 % this.options.lanes;
          measurements[i9] = {
            index: i9,
            start,
            size,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (rangeExtractor, range, overscan, count) => {
        return range === null ? [] : rangeExtractor({
          startIndex: range.startIndex,
          endIndex: range.endIndex,
          overscan,
          count
        });
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const index = this.indexFromElement(node);
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const key = item.key;
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if (node.isConnected) {
        this.resizeItem(index, this.options.measureElement(node, entry, this));
      }
    };
    this.resizeItem = (index, size) => {
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          if (this.options.debug) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k3 = 0, len = indexes.length; k3 < len; k3++) {
          const i9 = indexes[k3];
          const measurement = measurements[i9];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "getVirtualItems",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index) => notUndefined(measurements[index]).start,
          offset
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (toOffset <= scrollOffset) {
          align = "start";
        } else if (toOffset >= scrollOffset + size) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size;
      } else if (align === "center") {
        toOffset = toOffset - size / 2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - size;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const item = this.measurementsCache[index];
      if (!item) {
        return void 0;
      }
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null && this.targetWindow) {
        this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {}) => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const offsetAndAlign = this.getOffsetForIndex(index, initialAlign);
      if (!offsetAndAlign) return;
      const [offset, align] = offsetAndAlign;
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode() && this.targetWindow) {
        this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.elementsCache.has(
            this.options.getItemKey(index)
          );
          if (elementInDOM) {
            const [latestOffset] = notUndefined(
              this.getOffsetForIndex(index, align)
            );
            if (!approxEqual(latestOffset, this.getScrollOffset())) {
              this.scrollToIndex(index, { align, behavior });
            }
          } else {
            this.scrollToIndex(index, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m4) => m4.end)
        );
      }
      return end - this.options.scrollMargin + this.options.paddingEnd;
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count = measurements.length - 1;
  const getOffset = (index) => measurements[index].start;
  const startIndex = findNearestBinarySearch(0, count, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}

// node_modules/.pnpm/@tanstack+vue-virtual@3.10.7_vue@3.4.31/node_modules/@tanstack/vue-virtual/dist/esm/index.js
function useVirtualizerBase(options) {
  const virtualizer = new Virtualizer(unref(options));
  const state = shallowRef(virtualizer);
  const cleanup = virtualizer._didMount();
  watch(
    () => unref(options).getScrollElement(),
    (el) => {
      if (el) {
        virtualizer._willUpdate();
      }
    },
    {
      immediate: true
    }
  );
  watch(
    () => unref(options),
    (options2) => {
      virtualizer.setOptions({
        ...options2,
        onChange: (instance, sync) => {
          var _a;
          triggerRef(state);
          (_a = options2.onChange) == null ? void 0 : _a.call(options2, instance, sync);
        }
      });
      virtualizer._willUpdate();
      triggerRef(state);
    },
    {
      immediate: true
    }
  );
  onScopeDispose(cleanup);
  return state;
}
function useVirtualizer(options) {
  return useVirtualizerBase(
    computed(() => ({
      observeElementRect,
      observeElementOffset,
      scrollToFn: elementScroll,
      ...unref(options)
    }))
  );
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-controllable.js
function d(u9, e3, r4) {
  let i9 = ref(r4 == null ? void 0 : r4.value), f5 = computed(() => u9.value !== void 0);
  return [computed(() => f5.value ? u9.value : i9.value), function(t8) {
    return f5.value || (i9.value = t8), e3 == null ? void 0 : e3(t8);
  }];
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/micro-task.js
function t(e3) {
  typeof queueMicrotask == "function" ? queueMicrotask(e3) : Promise.resolve().then(e3).catch((o7) => setTimeout(() => {
    throw o7;
  }));
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/disposables.js
function o() {
  let a5 = [], s7 = { addEventListener(e3, t8, r4, i9) {
    return e3.addEventListener(t8, r4, i9), s7.add(() => e3.removeEventListener(t8, r4, i9));
  }, requestAnimationFrame(...e3) {
    let t8 = requestAnimationFrame(...e3);
    s7.add(() => cancelAnimationFrame(t8));
  }, nextFrame(...e3) {
    s7.requestAnimationFrame(() => {
      s7.requestAnimationFrame(...e3);
    });
  }, setTimeout(...e3) {
    let t8 = setTimeout(...e3);
    s7.add(() => clearTimeout(t8));
  }, microTask(...e3) {
    let t8 = { current: true };
    return t(() => {
      t8.current && e3[0]();
    }), s7.add(() => {
      t8.current = false;
    });
  }, style(e3, t8, r4) {
    let i9 = e3.style.getPropertyValue(t8);
    return Object.assign(e3.style, { [t8]: r4 }), this.add(() => {
      Object.assign(e3.style, { [t8]: i9 });
    });
  }, group(e3) {
    let t8 = o();
    return e3(t8), this.add(() => t8.dispose());
  }, add(e3) {
    return a5.push(e3), () => {
      let t8 = a5.indexOf(e3);
      if (t8 >= 0) for (let r4 of a5.splice(t8, 1)) r4();
    };
  }, dispose() {
    for (let e3 of a5.splice(0)) e3();
  } };
  return s7;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-disposables.js
function i() {
  let o7 = o();
  return onUnmounted(() => o7.dispose()), o7;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-frame-debounce.js
function t2() {
  let e3 = i();
  return (o7) => {
    e3.dispose(), e3.nextFrame(o7);
  };
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-id.js
var r;
var n = Symbol("headlessui.useid");
var o2 = 0;
var i2 = (r = void 0) != null ? r : function() {
  return inject(n, () => `${++o2}`)();
};
function s(t8) {
  provide(n, t8);
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/dom.js
function o3(e3) {
  var l4;
  if (e3 == null || e3.value == null) return null;
  let n6 = (l4 = e3.value.$el) != null ? l4 : e3.value;
  return n6 instanceof Node ? n6 : null;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/match.js
function u(r4, n6, ...a5) {
  if (r4 in n6) {
    let e3 = n6[r4];
    return typeof e3 == "function" ? e3(...a5) : e3;
  }
  let t8 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e3) => `"${e3}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t8, u), t8;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/env.js
var i3 = Object.defineProperty;
var d2 = (t8, e3, r4) => e3 in t8 ? i3(t8, e3, { enumerable: true, configurable: true, writable: true, value: r4 }) : t8[e3] = r4;
var n2 = (t8, e3, r4) => (d2(t8, typeof e3 != "symbol" ? e3 + "" : e3, r4), r4);
var s2 = class {
  constructor() {
    n2(this, "current", this.detect());
    n2(this, "currentId", 0);
  }
  set(e3) {
    this.current !== e3 && (this.currentId = 0, this.current = e3);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
};
var c = new s2();

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/owner.js
function i4(r4) {
  if (c.isServer) return null;
  if (r4 instanceof Node) return r4.ownerDocument;
  if (r4 != null && r4.hasOwnProperty("value")) {
    let n6 = o3(r4);
    if (n6) return n6.ownerDocument;
  }
  return document;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e3) => `${e3}:not([tabindex='-1'])`).join(",");
var N = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(N || {});
var T = ((o7) => (o7[o7.Error = 0] = "Error", o7[o7.Overflow = 1] = "Overflow", o7[o7.Success = 2] = "Success", o7[o7.Underflow = 3] = "Underflow", o7))(T || {});
var F = ((t8) => (t8[t8.Previous = -1] = "Previous", t8[t8.Next = 1] = "Next", t8))(F || {});
function E(e3 = document.body) {
  return e3 == null ? [] : Array.from(e3.querySelectorAll(c2)).sort((r4, t8) => Math.sign((r4.tabIndex || Number.MAX_SAFE_INTEGER) - (t8.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h2 = ((t8) => (t8[t8.Strict = 0] = "Strict", t8[t8.Loose = 1] = "Loose", t8))(h2 || {});
function w(e3, r4 = 0) {
  var t8;
  return e3 === ((t8 = i4(e3)) == null ? void 0 : t8.body) ? false : u(r4, { [0]() {
    return e3.matches(c2);
  }, [1]() {
    let l4 = e3;
    for (; l4 !== null; ) {
      if (l4.matches(c2)) return true;
      l4 = l4.parentElement;
    }
    return false;
  } });
}
function _(e3) {
  let r4 = i4(e3);
  nextTick(() => {
    r4 && !w(r4.activeElement, 0) && S(e3);
  });
}
var y = ((t8) => (t8[t8.Keyboard = 0] = "Keyboard", t8[t8.Mouse = 1] = "Mouse", t8))(y || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e3) => {
  e3.metaKey || e3.altKey || e3.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e3) => {
  e3.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e3.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function S(e3) {
  e3 == null || e3.focus({ preventScroll: true });
}
var H = ["textarea", "input"].join(",");
function I(e3) {
  var r4, t8;
  return (t8 = (r4 = e3 == null ? void 0 : e3.matches) == null ? void 0 : r4.call(e3, H)) != null ? t8 : false;
}
function O(e3, r4 = (t8) => t8) {
  return e3.slice().sort((t8, l4) => {
    let o7 = r4(t8), i9 = r4(l4);
    if (o7 === null || i9 === null) return 0;
    let n6 = o7.compareDocumentPosition(i9);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v(e3, r4) {
  return P(E(), r4, { relativeTo: e3 });
}
function P(e3, r4, { sorted: t8 = true, relativeTo: l4 = null, skipElements: o7 = [] } = {}) {
  var m4;
  let i9 = (m4 = Array.isArray(e3) ? e3.length > 0 ? e3[0].ownerDocument : document : e3 == null ? void 0 : e3.ownerDocument) != null ? m4 : document, n6 = Array.isArray(e3) ? t8 ? O(e3) : e3 : E(e3);
  o7.length > 0 && n6.length > 1 && (n6 = n6.filter((s7) => !o7.includes(s7))), l4 = l4 != null ? l4 : i9.activeElement;
  let x2 = (() => {
    if (r4 & 5) return 1;
    if (r4 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p3 = (() => {
    if (r4 & 1) return 0;
    if (r4 & 2) return Math.max(0, n6.indexOf(l4)) - 1;
    if (r4 & 4) return Math.max(0, n6.indexOf(l4)) + 1;
    if (r4 & 8) return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L3 = r4 & 32 ? { preventScroll: true } : {}, a5 = 0, d9 = n6.length, u9;
  do {
    if (a5 >= d9 || a5 + d9 <= 0) return 0;
    let s7 = p3 + a5;
    if (r4 & 16) s7 = (s7 + d9) % d9;
    else {
      if (s7 < 0) return 3;
      if (s7 >= d9) return 1;
    }
    u9 = n6[s7], u9 == null || u9.focus(L3), a5 += x2;
  } while (u9 !== i9.activeElement);
  return r4 & 6 && I(u9) && u9.select(), 2;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/platform.js
function t3() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i5() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n3() {
  return t3() || i5();
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-document-event.js
function u2(e3, t8, n6) {
  c.isServer || watchEffect((o7) => {
    document.addEventListener(e3, t8, n6), o7(() => document.removeEventListener(e3, t8, n6));
  });
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-window-event.js
function w2(e3, n6, t8) {
  c.isServer || watchEffect((o7) => {
    window.addEventListener(e3, n6, t8), o7(() => window.removeEventListener(e3, n6, t8));
  });
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-outside-click.js
function w3(f5, m4, l4 = computed(() => true)) {
  function a5(e3, r4) {
    if (!l4.value || e3.defaultPrevented) return;
    let t8 = r4(e3);
    if (t8 === null || !t8.getRootNode().contains(t8)) return;
    let c5 = function o7(n6) {
      return typeof n6 == "function" ? o7(n6()) : Array.isArray(n6) || n6 instanceof Set ? n6 : [n6];
    }(f5);
    for (let o7 of c5) {
      if (o7 === null) continue;
      let n6 = o7 instanceof HTMLElement ? o7 : o3(o7);
      if (n6 != null && n6.contains(t8) || e3.composed && e3.composedPath().includes(n6)) return;
    }
    return !w(t8, h2.Loose) && t8.tabIndex !== -1 && e3.preventDefault(), m4(e3, t8);
  }
  let u9 = ref(null);
  u2("pointerdown", (e3) => {
    var r4, t8;
    l4.value && (u9.value = ((t8 = (r4 = e3.composedPath) == null ? void 0 : r4.call(e3)) == null ? void 0 : t8[0]) || e3.target);
  }, true), u2("mousedown", (e3) => {
    var r4, t8;
    l4.value && (u9.value = ((t8 = (r4 = e3.composedPath) == null ? void 0 : r4.call(e3)) == null ? void 0 : t8[0]) || e3.target);
  }, true), u2("click", (e3) => {
    n3() || u9.value && (a5(e3, () => u9.value), u9.value = null);
  }, true), u2("touchend", (e3) => a5(e3, () => e3.target instanceof HTMLElement ? e3.target : null), true), w2("blur", (e3) => a5(e3, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-resolve-button-type.js
function r2(t8, e3) {
  if (t8) return t8;
  let n6 = e3 != null ? e3 : "button";
  if (typeof n6 == "string" && n6.toLowerCase() === "button") return "button";
}
function s3(t8, e3) {
  let n6 = ref(r2(t8.value.type, t8.value.as));
  return onMounted(() => {
    n6.value = r2(t8.value.type, t8.value.as);
  }), watchEffect(() => {
    var u9;
    n6.value || o3(e3) && o3(e3) instanceof HTMLButtonElement && !((u9 = o3(e3)) != null && u9.hasAttribute("type")) && (n6.value = "button");
  }), n6;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-tracked-pointer.js
function r3(e3) {
  return [e3.screenX, e3.screenY];
}
function u3() {
  let e3 = ref([-1, -1]);
  return { wasMoved(n6) {
    let t8 = r3(n6);
    return e3.value[0] === t8[0] && e3.value[1] === t8[1] ? false : (e3.value = t8, true);
  }, update(n6) {
    e3.value = r3(n6);
  } };
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-tree-walker.js
function i6({ container: e3, accept: t8, walk: d9, enabled: o7 }) {
  watchEffect(() => {
    let r4 = e3.value;
    if (!r4 || o7 !== void 0 && !o7.value) return;
    let l4 = i4(e3);
    if (!l4) return;
    let c5 = Object.assign((f5) => t8(f5), { acceptNode: t8 }), n6 = l4.createTreeWalker(r4, NodeFilter.SHOW_ELEMENT, c5, false);
    for (; n6.nextNode(); ) d9(n6.currentNode);
  });
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/render.js
var N2 = ((o7) => (o7[o7.None = 0] = "None", o7[o7.RenderStrategy = 1] = "RenderStrategy", o7[o7.Static = 2] = "Static", o7))(N2 || {});
var S2 = ((e3) => (e3[e3.Unmount = 0] = "Unmount", e3[e3.Hidden = 1] = "Hidden", e3))(S2 || {});
function A({ visible: r4 = true, features: t8 = 0, ourProps: e3, theirProps: o7, ...i9 }) {
  var a5;
  let n6 = j(o7, e3), l4 = Object.assign(i9, { props: n6 });
  if (r4 || t8 & 2 && n6.static) return y2(l4);
  if (t8 & 1) {
    let d9 = (a5 = n6.unmount) == null || a5 ? 0 : 1;
    return u(d9, { [0]() {
      return null;
    }, [1]() {
      return y2({ ...i9, props: { ...n6, hidden: true, style: { display: "none" } } });
    } });
  }
  return y2(l4);
}
function y2({ props: r4, attrs: t8, slots: e3, slot: o7, name: i9 }) {
  var m4, h3;
  let { as: n6, ...l4 } = T2(r4, ["unmount", "static"]), a5 = (m4 = e3.default) == null ? void 0 : m4.call(e3, o7), d9 = {};
  if (o7) {
    let u9 = false, c5 = [];
    for (let [p3, f5] of Object.entries(o7)) typeof f5 == "boolean" && (u9 = true), f5 === true && c5.push(p3);
    u9 && (d9["data-headlessui-state"] = c5.join(" "));
  }
  if (n6 === "template") {
    if (a5 = b(a5 != null ? a5 : []), Object.keys(l4).length > 0 || Object.keys(t8).length > 0) {
      let [u9, ...c5] = a5 != null ? a5 : [];
      if (!v2(u9) || c5.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i9} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l4).concat(Object.keys(t8)).map((s7) => s7.trim()).filter((s7, g5, R3) => R3.indexOf(s7) === g5).sort((s7, g5) => s7.localeCompare(g5)).map((s7) => `  - ${s7}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s7) => `  - ${s7}`).join(`
`)].join(`
`));
      let p3 = j((h3 = u9.props) != null ? h3 : {}, l4, d9), f5 = cloneVNode(u9, p3, true);
      for (let s7 in p3) s7.startsWith("on") && (f5.props || (f5.props = {}), f5.props[s7] = p3[s7]);
      return f5;
    }
    return Array.isArray(a5) && a5.length === 1 ? a5[0] : a5;
  }
  return h(n6, Object.assign({}, l4, d9), { default: () => a5 });
}
function b(r4) {
  return r4.flatMap((t8) => t8.type === Fragment ? b(t8.children) : [t8]);
}
function j(...r4) {
  var o7;
  if (r4.length === 0) return {};
  if (r4.length === 1) return r4[0];
  let t8 = {}, e3 = {};
  for (let i9 of r4) for (let n6 in i9) n6.startsWith("on") && typeof i9[n6] == "function" ? ((o7 = e3[n6]) != null || (e3[n6] = []), e3[n6].push(i9[n6])) : t8[n6] = i9[n6];
  if (t8.disabled || t8["aria-disabled"]) return Object.assign(t8, Object.fromEntries(Object.keys(e3).map((i9) => [i9, void 0])));
  for (let i9 in e3) Object.assign(t8, { [i9](n6, ...l4) {
    let a5 = e3[i9];
    for (let d9 of a5) {
      if (n6 instanceof Event && n6.defaultPrevented) return;
      d9(n6, ...l4);
    }
  } });
  return t8;
}
function E2(r4) {
  let t8 = Object.assign({}, r4);
  for (let e3 in t8) t8[e3] === void 0 && delete t8[e3];
  return t8;
}
function T2(r4, t8 = []) {
  let e3 = Object.assign({}, r4);
  for (let o7 of t8) o7 in e3 && delete e3[o7];
  return e3;
}
function v2(r4) {
  return r4 == null ? false : typeof r4.type == "string" || typeof r4.type == "object" || typeof r4.type == "function";
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/internal/hidden.js
var u4 = ((e3) => (e3[e3.None = 1] = "None", e3[e3.Focusable = 2] = "Focusable", e3[e3.Hidden = 4] = "Hidden", e3))(u4 || {});
var f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t8, { slots: n6, attrs: i9 }) {
  return () => {
    var r4;
    let { features: e3, ...d9 } = t8, o7 = { "aria-hidden": (e3 & 2) === 2 ? true : (r4 = d9["aria-hidden"]) != null ? r4 : void 0, hidden: (e3 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e3 & 4) === 4 && (e3 & 2) !== 2 && { display: "none" } } };
    return A({ ourProps: o7, theirProps: d9, slot: {}, attrs: i9, slots: n6, name: "Hidden" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/internal/open-closed.js
var n4 = Symbol("Context");
var i7 = ((e3) => (e3[e3.Open = 1] = "Open", e3[e3.Closed = 2] = "Closed", e3[e3.Closing = 4] = "Closing", e3[e3.Opening = 8] = "Opening", e3))(i7 || {});
function s4() {
  return l() !== null;
}
function l() {
  return inject(n4, null);
}
function t4(o7) {
  provide(n4, o7);
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/keyboard.js
var o4 = ((r4) => (r4.Space = " ", r4.Enter = "Enter", r4.Escape = "Escape", r4.Backspace = "Backspace", r4.Delete = "Delete", r4.ArrowLeft = "ArrowLeft", r4.ArrowUp = "ArrowUp", r4.ArrowRight = "ArrowRight", r4.ArrowDown = "ArrowDown", r4.Home = "Home", r4.End = "End", r4.PageUp = "PageUp", r4.PageDown = "PageDown", r4.Tab = "Tab", r4))(o4 || {});

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/mouse.js
var g = ((f5) => (f5[f5.Left = 0] = "Left", f5[f5.Right = 2] = "Right", f5))(g || {});

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/document-ready.js
function t5(n6) {
  function e3() {
    document.readyState !== "loading" && (n6(), document.removeEventListener("DOMContentLoaded", e3));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e3), e3());
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/active-element-history.js
var t6 = [];
t5(() => {
  function e3(n6) {
    n6.target instanceof HTMLElement && n6.target !== document.body && t6[0] !== n6.target && (t6.unshift(n6.target), t6 = t6.filter((r4) => r4 != null && r4.isConnected), t6.splice(10));
  }
  window.addEventListener("click", e3, { capture: true }), window.addEventListener("mousedown", e3, { capture: true }), window.addEventListener("focus", e3, { capture: true }), document.body.addEventListener("click", e3, { capture: true }), document.body.addEventListener("mousedown", e3, { capture: true }), document.body.addEventListener("focus", e3, { capture: true });
});

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/calculate-active-index.js
function u5(l4) {
  throw new Error("Unexpected object: " + l4);
}
var c3 = ((i9) => (i9[i9.First = 0] = "First", i9[i9.Previous = 1] = "Previous", i9[i9.Next = 2] = "Next", i9[i9.Last = 3] = "Last", i9[i9.Specific = 4] = "Specific", i9[i9.Nothing = 5] = "Nothing", i9))(c3 || {});
function f2(l4, n6) {
  let t8 = n6.resolveItems();
  if (t8.length <= 0) return null;
  let r4 = n6.resolveActiveIndex(), s7 = r4 != null ? r4 : -1;
  switch (l4.focus) {
    case 0: {
      for (let e3 = 0; e3 < t8.length; ++e3) if (!n6.resolveDisabled(t8[e3], e3, t8)) return e3;
      return r4;
    }
    case 1: {
      s7 === -1 && (s7 = t8.length);
      for (let e3 = s7 - 1; e3 >= 0; --e3) if (!n6.resolveDisabled(t8[e3], e3, t8)) return e3;
      return r4;
    }
    case 2: {
      for (let e3 = s7 + 1; e3 < t8.length; ++e3) if (!n6.resolveDisabled(t8[e3], e3, t8)) return e3;
      return r4;
    }
    case 3: {
      for (let e3 = t8.length - 1; e3 >= 0; --e3) if (!n6.resolveDisabled(t8[e3], e3, t8)) return e3;
      return r4;
    }
    case 4: {
      for (let e3 = 0; e3 < t8.length; ++e3) if (n6.resolveId(t8[e3], e3, t8) === l4.id) return e3;
      return r4;
    }
    case 5:
      return null;
    default:
      u5(l4);
  }
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/form.js
function e(i9 = {}, s7 = null, t8 = []) {
  for (let [r4, n6] of Object.entries(i9)) o5(t8, f3(s7, r4), n6);
  return t8;
}
function f3(i9, s7) {
  return i9 ? i9 + "[" + s7 + "]" : s7;
}
function o5(i9, s7, t8) {
  if (Array.isArray(t8)) for (let [r4, n6] of t8.entries()) o5(i9, f3(s7, r4.toString()), n6);
  else t8 instanceof Date ? i9.push([s7, t8.toISOString()]) : typeof t8 == "boolean" ? i9.push([s7, t8 ? "1" : "0"]) : typeof t8 == "string" ? i9.push([s7, t8]) : typeof t8 == "number" ? i9.push([s7, `${t8}`]) : t8 == null ? i9.push([s7, ""]) : e(t8, s7, i9);
}
function p(i9) {
  var t8, r4;
  let s7 = (t8 = i9 == null ? void 0 : i9.form) != null ? t8 : i9.closest("form");
  if (s7) {
    for (let n6 of s7.elements) if (n6 !== i9 && (n6.tagName === "INPUT" && n6.type === "submit" || n6.tagName === "BUTTON" && n6.type === "submit" || n6.nodeName === "INPUT" && n6.type === "image")) {
      n6.click();
      return;
    }
    (r4 = s7.requestSubmit) == null || r4.call(s7);
  }
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/combobox/combobox.js
function De(a5, h3) {
  return a5 === h3;
}
var Ee = ((r4) => (r4[r4.Open = 0] = "Open", r4[r4.Closed = 1] = "Closed", r4))(Ee || {});
var Ve = ((r4) => (r4[r4.Single = 0] = "Single", r4[r4.Multi = 1] = "Multi", r4))(Ve || {});
var ke = ((y4) => (y4[y4.Pointer = 0] = "Pointer", y4[y4.Focus = 1] = "Focus", y4[y4.Other = 2] = "Other", y4))(ke || {});
var ne = Symbol("ComboboxContext");
function K(a5) {
  let h3 = inject(ne, null);
  if (h3 === null) {
    let r4 = new Error(`<${a5} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r4, K), r4;
  }
  return h3;
}
var ie = Symbol("VirtualContext");
var Ae = defineComponent({ name: "VirtualProvider", setup(a5, { slots: h3 }) {
  let r4 = K("VirtualProvider"), y4 = computed(() => {
    let c5 = o3(r4.optionsRef);
    if (!c5) return { start: 0, end: 0 };
    let f5 = window.getComputedStyle(c5);
    return { start: parseFloat(f5.paddingBlockStart || f5.paddingTop), end: parseFloat(f5.paddingBlockEnd || f5.paddingBottom) };
  }), o7 = useVirtualizer(computed(() => ({ scrollPaddingStart: y4.value.start, scrollPaddingEnd: y4.value.end, count: r4.virtual.value.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return o3(r4.optionsRef);
  }, overscan: 12 }))), u9 = computed(() => {
    var c5;
    return (c5 = r4.virtual.value) == null ? void 0 : c5.options;
  }), e3 = ref(0);
  return watch([u9], () => {
    e3.value += 1;
  }), provide(ie, r4.virtual.value ? o7 : null), () => [h("div", { style: { position: "relative", width: "100%", height: `${o7.value.getTotalSize()}px` }, ref: (c5) => {
    if (c5) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r4.activationTrigger.value === 0) return;
      r4.activeOptionIndex.value !== null && r4.virtual.value.options.length > r4.activeOptionIndex.value && o7.value.scrollToIndex(r4.activeOptionIndex.value);
    }
  } }, o7.value.getVirtualItems().map((c5) => cloneVNode(h3.default({ option: r4.virtual.value.options[c5.index], open: r4.comboboxState.value === 0 })[0], { key: `${e3.value}-${c5.index}`, "data-index": c5.index, "aria-setsize": r4.virtual.value.options.length, "aria-posinset": c5.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${c5.start}px)`, overflowAnchor: "none" } })))];
} });
var lt = defineComponent({ name: "Combobox", emits: { "update:modelValue": (a5) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], nullable: true, default: null }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false }, immediate: { type: [Boolean], default: false }, virtual: { type: Object, default: null } }, inheritAttrs: false, setup(a5, { slots: h3, attrs: r4, emit: y4 }) {
  let o7 = ref(1), u9 = ref(null), e3 = ref(null), c5 = ref(null), f5 = ref(null), S3 = ref({ static: false, hold: false }), v4 = ref([]), d9 = ref(null), D = ref(2), E6 = ref(false);
  function w6(t8 = (n6) => n6) {
    let n6 = d9.value !== null ? v4.value[d9.value] : null, s7 = t8(v4.value.slice()), b2 = s7.length > 0 && s7[0].dataRef.order.value !== null ? s7.sort((C3, A6) => C3.dataRef.order.value - A6.dataRef.order.value) : O(s7, (C3) => o3(C3.dataRef.domRef)), O4 = n6 ? b2.indexOf(n6) : null;
    return O4 === -1 && (O4 = null), { options: b2, activeOptionIndex: O4 };
  }
  let M2 = computed(() => a5.multiple ? 1 : 0), $5 = computed(() => a5.nullable), [B2, p3] = d(computed(() => a5.modelValue), (t8) => y4("update:modelValue", t8), computed(() => a5.defaultValue)), R3 = computed(() => B2.value === void 0 ? u(M2.value, { [1]: [], [0]: void 0 }) : B2.value), V2 = null, i9 = null;
  function I2(t8) {
    return u(M2.value, { [0]() {
      return p3 == null ? void 0 : p3(t8);
    }, [1]: () => {
      let n6 = toRaw(l4.value.value).slice(), s7 = toRaw(t8), b2 = n6.findIndex((O4) => l4.compare(s7, toRaw(O4)));
      return b2 === -1 ? n6.push(s7) : n6.splice(b2, 1), p3 == null ? void 0 : p3(n6);
    } });
  }
  let T5 = computed(() => {
  });
  watch([T5], ([t8], [n6]) => {
    if (l4.virtual.value && t8 && n6 && d9.value !== null) {
      let s7 = t8.indexOf(n6[d9.value]);
      s7 !== -1 ? d9.value = s7 : d9.value = null;
    }
  });
  let l4 = { comboboxState: o7, value: R3, mode: M2, compare(t8, n6) {
    if (typeof a5.by == "string") {
      let s7 = a5.by;
      return (t8 == null ? void 0 : t8[s7]) === (n6 == null ? void 0 : n6[s7]);
    }
    return a5.by === null ? De(t8, n6) : a5.by(t8, n6);
  }, calculateIndex(t8) {
    return l4.virtual.value ? a5.by === null ? l4.virtual.value.options.indexOf(t8) : l4.virtual.value.options.findIndex((n6) => l4.compare(n6, t8)) : v4.value.findIndex((n6) => l4.compare(n6.dataRef.value, t8));
  }, defaultValue: computed(() => a5.defaultValue), nullable: $5, immediate: computed(() => false), virtual: computed(() => null), inputRef: e3, labelRef: u9, buttonRef: c5, optionsRef: f5, disabled: computed(() => a5.disabled), options: v4, change(t8) {
    p3(t8);
  }, activeOptionIndex: computed(() => {
    if (E6.value && d9.value === null && (l4.virtual.value ? l4.virtual.value.options.length > 0 : v4.value.length > 0)) {
      if (l4.virtual.value) {
        let n6 = l4.virtual.value.options.findIndex((s7) => {
          var b2;
          return !((b2 = l4.virtual.value) != null && b2.disabled(s7));
        });
        if (n6 !== -1) return n6;
      }
      let t8 = v4.value.findIndex((n6) => !n6.dataRef.disabled);
      if (t8 !== -1) return t8;
    }
    return d9.value;
  }), activationTrigger: D, optionsPropsRef: S3, closeCombobox() {
    E6.value = false, !a5.disabled && o7.value !== 1 && (o7.value = 1, d9.value = null);
  }, openCombobox() {
    if (E6.value = true, !a5.disabled && o7.value !== 0) {
      if (l4.value.value) {
        let t8 = l4.calculateIndex(l4.value.value);
        t8 !== -1 && (d9.value = t8);
      }
      o7.value = 0;
    }
  }, setActivationTrigger(t8) {
    D.value = t8;
  }, goToOption(t8, n6, s7) {
    E6.value = false, V2 !== null && cancelAnimationFrame(V2), V2 = requestAnimationFrame(() => {
      if (a5.disabled || f5.value && !S3.value.static && o7.value === 1) return;
      if (l4.virtual.value) {
        d9.value = t8 === c3.Specific ? n6 : f2({ focus: t8 }, { resolveItems: () => l4.virtual.value.options, resolveActiveIndex: () => {
          var C3, A6;
          return (A6 = (C3 = l4.activeOptionIndex.value) != null ? C3 : l4.virtual.value.options.findIndex((j2) => {
            var q2;
            return !((q2 = l4.virtual.value) != null && q2.disabled(j2));
          })) != null ? A6 : null;
        }, resolveDisabled: (C3) => l4.virtual.value.disabled(C3), resolveId() {
          throw new Error("Function not implemented.");
        } }), D.value = s7 != null ? s7 : 2;
        return;
      }
      let b2 = w6();
      if (b2.activeOptionIndex === null) {
        let C3 = b2.options.findIndex((A6) => !A6.dataRef.disabled);
        C3 !== -1 && (b2.activeOptionIndex = C3);
      }
      let O4 = t8 === c3.Specific ? n6 : f2({ focus: t8 }, { resolveItems: () => b2.options, resolveActiveIndex: () => b2.activeOptionIndex, resolveId: (C3) => C3.id, resolveDisabled: (C3) => C3.dataRef.disabled });
      d9.value = O4, D.value = s7 != null ? s7 : 2, v4.value = b2.options;
    });
  }, selectOption(t8) {
    let n6 = v4.value.find((b2) => b2.id === t8);
    if (!n6) return;
    let { dataRef: s7 } = n6;
    I2(s7.value);
  }, selectActiveOption() {
    if (l4.activeOptionIndex.value !== null) {
      if (l4.virtual.value) I2(l4.virtual.value.options[l4.activeOptionIndex.value]);
      else {
        let { dataRef: t8 } = v4.value[l4.activeOptionIndex.value];
        I2(t8.value);
      }
      l4.goToOption(c3.Specific, l4.activeOptionIndex.value);
    }
  }, registerOption(t8, n6) {
    let s7 = reactive({ id: t8, dataRef: n6 });
    if (l4.virtual.value) {
      v4.value.push(s7);
      return;
    }
    i9 && cancelAnimationFrame(i9);
    let b2 = w6((O4) => (O4.push(s7), O4));
    d9.value === null && l4.isSelected(n6.value.value) && (b2.activeOptionIndex = b2.options.indexOf(s7)), v4.value = b2.options, d9.value = b2.activeOptionIndex, D.value = 2, b2.options.some((O4) => !o3(O4.dataRef.domRef)) && (i9 = requestAnimationFrame(() => {
      let O4 = w6();
      v4.value = O4.options, d9.value = O4.activeOptionIndex;
    }));
  }, unregisterOption(t8, n6) {
    if (V2 !== null && cancelAnimationFrame(V2), n6 && (E6.value = true), l4.virtual.value) {
      v4.value = v4.value.filter((b2) => b2.id !== t8);
      return;
    }
    let s7 = w6((b2) => {
      let O4 = b2.findIndex((C3) => C3.id === t8);
      return O4 !== -1 && b2.splice(O4, 1), b2;
    });
    v4.value = s7.options, d9.value = s7.activeOptionIndex, D.value = 2;
  }, isSelected(t8) {
    return u(M2.value, { [0]: () => l4.compare(toRaw(l4.value.value), toRaw(t8)), [1]: () => toRaw(l4.value.value).some((n6) => l4.compare(toRaw(n6), toRaw(t8))) });
  }, isActive(t8) {
    return d9.value === l4.calculateIndex(t8);
  } };
  w3([e3, c5, f5], () => l4.closeCombobox(), computed(() => o7.value === 0)), provide(ne, l4), t4(computed(() => u(o7.value, { [0]: i7.Open, [1]: i7.Closed })));
  let g5 = computed(() => {
    var t8;
    return (t8 = o3(e3)) == null ? void 0 : t8.closest("form");
  });
  return onMounted(() => {
    watch([g5], () => {
      if (!g5.value || a5.defaultValue === void 0) return;
      function t8() {
        l4.change(a5.defaultValue);
      }
      return g5.value.addEventListener("reset", t8), () => {
        var n6;
        (n6 = g5.value) == null || n6.removeEventListener("reset", t8);
      };
    }, { immediate: true });
  }), () => {
    var C3, A6, j2;
    let { name: t8, disabled: n6, form: s7, ...b2 } = a5, O4 = { open: o7.value === 0, disabled: n6, activeIndex: l4.activeOptionIndex.value, activeOption: l4.activeOptionIndex.value === null ? null : l4.virtual.value ? l4.virtual.value.options[(C3 = l4.activeOptionIndex.value) != null ? C3 : 0] : (j2 = (A6 = l4.options.value[l4.activeOptionIndex.value]) == null ? void 0 : A6.dataRef.value) != null ? j2 : null, value: R3.value };
    return h(Fragment, [...t8 != null && R3.value != null ? e({ [t8]: R3.value }).map(([q2, ue4]) => h(f, E2({ features: u4.Hidden, key: q2, as: "input", type: "hidden", hidden: true, readOnly: true, form: s7, disabled: n6, name: q2, value: ue4 }))) : [], A({ theirProps: { ...r4, ...T2(b2, ["by", "defaultValue", "immediate", "modelValue", "multiple", "nullable", "onUpdate:modelValue", "virtual"]) }, ourProps: {}, slot: O4, slots: h3, attrs: r4, name: "Combobox" })]);
  };
} });
var at = defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(a5, { attrs: h3, slots: r4 }) {
  var e3;
  let y4 = (e3 = a5.id) != null ? e3 : `headlessui-combobox-label-${i2()}`, o7 = K("ComboboxLabel");
  function u9() {
    var c5;
    (c5 = o3(o7.inputRef)) == null || c5.focus({ preventScroll: true });
  }
  return () => {
    let c5 = { open: o7.comboboxState.value === 0, disabled: o7.disabled.value }, { ...f5 } = a5, S3 = { id: y4, ref: o7.labelRef, onClick: u9 };
    return A({ ourProps: S3, theirProps: f5, slot: c5, attrs: h3, slots: r4, name: "ComboboxLabel" });
  };
} });
var nt = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(a5, { attrs: h3, slots: r4, expose: y4 }) {
  var S3;
  let o7 = (S3 = a5.id) != null ? S3 : `headlessui-combobox-button-${i2()}`, u9 = K("ComboboxButton");
  y4({ el: u9.buttonRef, $el: u9.buttonRef });
  function e3(v4) {
    u9.disabled.value || (u9.comboboxState.value === 0 ? u9.closeCombobox() : (v4.preventDefault(), u9.openCombobox()), nextTick(() => {
      var d9;
      return (d9 = o3(u9.inputRef)) == null ? void 0 : d9.focus({ preventScroll: true });
    }));
  }
  function c5(v4) {
    switch (v4.key) {
      case o4.ArrowDown:
        v4.preventDefault(), v4.stopPropagation(), u9.comboboxState.value === 1 && u9.openCombobox(), nextTick(() => {
          var d9;
          return (d9 = u9.inputRef.value) == null ? void 0 : d9.focus({ preventScroll: true });
        });
        return;
      case o4.ArrowUp:
        v4.preventDefault(), v4.stopPropagation(), u9.comboboxState.value === 1 && (u9.openCombobox(), nextTick(() => {
          u9.value.value || u9.goToOption(c3.Last);
        })), nextTick(() => {
          var d9;
          return (d9 = u9.inputRef.value) == null ? void 0 : d9.focus({ preventScroll: true });
        });
        return;
      case o4.Escape:
        if (u9.comboboxState.value !== 0) return;
        v4.preventDefault(), u9.optionsRef.value && !u9.optionsPropsRef.value.static && v4.stopPropagation(), u9.closeCombobox(), nextTick(() => {
          var d9;
          return (d9 = u9.inputRef.value) == null ? void 0 : d9.focus({ preventScroll: true });
        });
        return;
    }
  }
  let f5 = s3(computed(() => ({ as: a5.as, type: h3.type })), u9.buttonRef);
  return () => {
    var E6, w6;
    let v4 = { open: u9.comboboxState.value === 0, disabled: u9.disabled.value, value: u9.value.value }, { ...d9 } = a5, D = { ref: u9.buttonRef, id: o7, type: f5.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (E6 = o3(u9.optionsRef)) == null ? void 0 : E6.id, "aria-expanded": u9.comboboxState.value === 0, "aria-labelledby": u9.labelRef.value ? [(w6 = o3(u9.labelRef)) == null ? void 0 : w6.id, o7].join(" ") : void 0, disabled: u9.disabled.value === true ? true : void 0, onKeydown: c5, onClick: e3 };
    return A({ ourProps: D, theirProps: d9, slot: v4, attrs: h3, slots: r4, name: "ComboboxButton" });
  };
} });
var it = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: null } }, emits: { change: (a5) => true }, setup(a5, { emit: h3, attrs: r4, slots: y4, expose: o7 }) {
  var V2;
  let u9 = (V2 = a5.id) != null ? V2 : `headlessui-combobox-input-${i2()}`, e3 = K("ComboboxInput"), c5 = computed(() => i4(o3(e3.inputRef))), f5 = { value: false };
  o7({ el: e3.inputRef, $el: e3.inputRef });
  function S3() {
    e3.change(null);
    let i9 = o3(e3.optionsRef);
    i9 && (i9.scrollTop = 0), e3.goToOption(c3.Nothing);
  }
  let v4 = computed(() => {
    var I2;
    let i9 = e3.value.value;
    return o3(e3.inputRef) ? typeof a5.displayValue != "undefined" && i9 !== void 0 ? (I2 = a5.displayValue(i9)) != null ? I2 : "" : typeof i9 == "string" ? i9 : "" : "";
  });
  onMounted(() => {
    watch([v4, e3.comboboxState, c5], ([i9, I2], [T5, l4]) => {
      if (f5.value) return;
      let g5 = o3(e3.inputRef);
      g5 && ((l4 === 0 && I2 === 1 || i9 !== T5) && (g5.value = i9), requestAnimationFrame(() => {
        var s7;
        if (f5.value || !g5 || ((s7 = c5.value) == null ? void 0 : s7.activeElement) !== g5) return;
        let { selectionStart: t8, selectionEnd: n6 } = g5;
        Math.abs((n6 != null ? n6 : 0) - (t8 != null ? t8 : 0)) === 0 && t8 === 0 && g5.setSelectionRange(g5.value.length, g5.value.length);
      }));
    }, { immediate: true }), watch([e3.comboboxState], ([i9], [I2]) => {
      if (i9 === 0 && I2 === 1) {
        if (f5.value) return;
        let T5 = o3(e3.inputRef);
        if (!T5) return;
        let l4 = T5.value, { selectionStart: g5, selectionEnd: t8, selectionDirection: n6 } = T5;
        T5.value = "", T5.value = l4, n6 !== null ? T5.setSelectionRange(g5, t8, n6) : T5.setSelectionRange(g5, t8);
      }
    });
  });
  let d9 = ref(false);
  function D() {
    d9.value = true;
  }
  function E6() {
    o().nextFrame(() => {
      d9.value = false;
    });
  }
  let w6 = t2();
  function M2(i9) {
    switch (f5.value = true, w6(() => {
      f5.value = false;
    }), i9.key) {
      case o4.Enter:
        if (f5.value = false, e3.comboboxState.value !== 0 || d9.value) return;
        if (i9.preventDefault(), i9.stopPropagation(), e3.activeOptionIndex.value === null) {
          e3.closeCombobox();
          return;
        }
        e3.selectActiveOption(), e3.mode.value === 0 && e3.closeCombobox();
        break;
      case o4.ArrowDown:
        return f5.value = false, i9.preventDefault(), i9.stopPropagation(), u(e3.comboboxState.value, { [0]: () => e3.goToOption(c3.Next), [1]: () => e3.openCombobox() });
      case o4.ArrowUp:
        return f5.value = false, i9.preventDefault(), i9.stopPropagation(), u(e3.comboboxState.value, { [0]: () => e3.goToOption(c3.Previous), [1]: () => {
          e3.openCombobox(), nextTick(() => {
            e3.value.value || e3.goToOption(c3.Last);
          });
        } });
      case o4.Home:
        if (i9.shiftKey) break;
        return f5.value = false, i9.preventDefault(), i9.stopPropagation(), e3.goToOption(c3.First);
      case o4.PageUp:
        return f5.value = false, i9.preventDefault(), i9.stopPropagation(), e3.goToOption(c3.First);
      case o4.End:
        if (i9.shiftKey) break;
        return f5.value = false, i9.preventDefault(), i9.stopPropagation(), e3.goToOption(c3.Last);
      case o4.PageDown:
        return f5.value = false, i9.preventDefault(), i9.stopPropagation(), e3.goToOption(c3.Last);
      case o4.Escape:
        if (f5.value = false, e3.comboboxState.value !== 0) return;
        i9.preventDefault(), e3.optionsRef.value && !e3.optionsPropsRef.value.static && i9.stopPropagation(), e3.nullable.value && e3.mode.value === 0 && e3.value.value === null && S3(), e3.closeCombobox();
        break;
      case o4.Tab:
        if (f5.value = false, e3.comboboxState.value !== 0) return;
        e3.mode.value === 0 && e3.activationTrigger.value !== 1 && e3.selectActiveOption(), e3.closeCombobox();
        break;
    }
  }
  function $5(i9) {
    h3("change", i9), e3.nullable.value && e3.mode.value === 0 && i9.target.value === "" && S3(), e3.openCombobox();
  }
  function B2(i9) {
    var T5, l4, g5;
    let I2 = (T5 = i9.relatedTarget) != null ? T5 : t6.find((t8) => t8 !== i9.currentTarget);
    if (f5.value = false, !((l4 = o3(e3.optionsRef)) != null && l4.contains(I2)) && !((g5 = o3(e3.buttonRef)) != null && g5.contains(I2)) && e3.comboboxState.value === 0) return i9.preventDefault(), e3.mode.value === 0 && (e3.nullable.value && e3.value.value === null ? S3() : e3.activationTrigger.value !== 1 && e3.selectActiveOption()), e3.closeCombobox();
  }
  function p3(i9) {
    var T5, l4, g5;
    let I2 = (T5 = i9.relatedTarget) != null ? T5 : t6.find((t8) => t8 !== i9.currentTarget);
    (l4 = o3(e3.buttonRef)) != null && l4.contains(I2) || (g5 = o3(e3.optionsRef)) != null && g5.contains(I2) || e3.disabled.value || e3.immediate.value && e3.comboboxState.value !== 0 && (e3.openCombobox(), o().nextFrame(() => {
      e3.setActivationTrigger(1);
    }));
  }
  let R3 = computed(() => {
    var i9, I2, T5, l4;
    return (l4 = (T5 = (I2 = a5.defaultValue) != null ? I2 : e3.defaultValue.value !== void 0 ? (i9 = a5.displayValue) == null ? void 0 : i9.call(a5, e3.defaultValue.value) : null) != null ? T5 : e3.defaultValue.value) != null ? l4 : "";
  });
  return () => {
    var t8, n6, s7, b2, O4, C3, A6;
    let i9 = { open: e3.comboboxState.value === 0 }, { displayValue: I2, onChange: T5, ...l4 } = a5, g5 = { "aria-controls": (t8 = e3.optionsRef.value) == null ? void 0 : t8.id, "aria-expanded": e3.comboboxState.value === 0, "aria-activedescendant": e3.activeOptionIndex.value === null ? void 0 : e3.virtual.value ? (n6 = e3.options.value.find((j2) => !e3.virtual.value.disabled(j2.dataRef.value) && e3.compare(j2.dataRef.value, e3.virtual.value.options[e3.activeOptionIndex.value]))) == null ? void 0 : n6.id : (s7 = e3.options.value[e3.activeOptionIndex.value]) == null ? void 0 : s7.id, "aria-labelledby": (C3 = (b2 = o3(e3.labelRef)) == null ? void 0 : b2.id) != null ? C3 : (O4 = o3(e3.buttonRef)) == null ? void 0 : O4.id, "aria-autocomplete": "list", id: u9, onCompositionstart: D, onCompositionend: E6, onKeydown: M2, onInput: $5, onFocus: p3, onBlur: B2, role: "combobox", type: (A6 = r4.type) != null ? A6 : "text", tabIndex: 0, ref: e3.inputRef, defaultValue: R3.value, disabled: e3.disabled.value === true ? true : void 0 };
    return A({ ourProps: g5, theirProps: l4, slot: i9, attrs: r4, slots: y4, features: N2.RenderStrategy | N2.Static, name: "ComboboxInput" });
  };
} });
var ut = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(a5, { attrs: h3, slots: r4, expose: y4 }) {
  let o7 = K("ComboboxOptions"), u9 = `headlessui-combobox-options-${i2()}`;
  y4({ el: o7.optionsRef, $el: o7.optionsRef }), watchEffect(() => {
    o7.optionsPropsRef.value.static = a5.static;
  }), watchEffect(() => {
    o7.optionsPropsRef.value.hold = a5.hold;
  });
  let e3 = l(), c5 = computed(() => e3 !== null ? (e3.value & i7.Open) === i7.Open : o7.comboboxState.value === 0);
  i6({ container: computed(() => o3(o7.optionsRef)), enabled: computed(() => o7.comboboxState.value === 0), accept(S3) {
    return S3.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : S3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(S3) {
    S3.setAttribute("role", "none");
  } });
  function f5(S3) {
    S3.preventDefault();
  }
  return () => {
    var D, E6, w6;
    let S3 = { open: o7.comboboxState.value === 0 }, v4 = { "aria-labelledby": (w6 = (D = o3(o7.labelRef)) == null ? void 0 : D.id) != null ? w6 : (E6 = o3(o7.buttonRef)) == null ? void 0 : E6.id, id: u9, ref: o7.optionsRef, role: "listbox", "aria-multiselectable": o7.mode.value === 1 ? true : void 0, onMousedown: f5 }, d9 = T2(a5, ["hold"]);
    return A({ ourProps: v4, theirProps: d9, slot: S3, attrs: h3, slots: o7.virtual.value && o7.comboboxState.value === 0 ? { ...r4, default: () => [h(Ae, {}, r4.default)] } : r4, features: N2.RenderStrategy | N2.Static, visible: c5.value, name: "ComboboxOptions" });
  };
} });
var rt = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, order: { type: [Number], default: null } }, setup(a5, { slots: h3, attrs: r4, expose: y4 }) {
  let o7 = K("ComboboxOption"), u9 = `headlessui-combobox-option-${i2()}`, e3 = ref(null), c5 = computed(() => a5.disabled);
  y4({ el: e3, $el: e3 });
  let f5 = computed(() => {
    var p3;
    return o7.virtual.value ? o7.activeOptionIndex.value === o7.calculateIndex(a5.value) : o7.activeOptionIndex.value === null ? false : ((p3 = o7.options.value[o7.activeOptionIndex.value]) == null ? void 0 : p3.id) === u9;
  }), S3 = computed(() => o7.isSelected(a5.value)), v4 = inject(ie, null), d9 = computed(() => ({ disabled: a5.disabled, value: a5.value, domRef: e3, order: computed(() => a5.order) }));
  onMounted(() => o7.registerOption(u9, d9)), onUnmounted(() => o7.unregisterOption(u9, f5.value)), watchEffect(() => {
    let p3 = o3(e3);
    p3 && (v4 == null || v4.value.measureElement(p3));
  }), watchEffect(() => {
    o7.comboboxState.value === 0 && f5.value && (o7.virtual.value || o7.activationTrigger.value !== 0 && nextTick(() => {
      var p3, R3;
      return (R3 = (p3 = o3(e3)) == null ? void 0 : p3.scrollIntoView) == null ? void 0 : R3.call(p3, { block: "nearest" });
    }));
  });
  function D(p3) {
    p3.preventDefault(), p3.button === g.Left && (c5.value || (o7.selectOption(u9), n3() || requestAnimationFrame(() => {
      var R3;
      return (R3 = o3(o7.inputRef)) == null ? void 0 : R3.focus({ preventScroll: true });
    }), o7.mode.value === 0 && o7.closeCombobox()));
  }
  function E6() {
    var R3;
    if (a5.disabled || (R3 = o7.virtual.value) != null && R3.disabled(a5.value)) return o7.goToOption(c3.Nothing);
    let p3 = o7.calculateIndex(a5.value);
    o7.goToOption(c3.Specific, p3);
  }
  let w6 = u3();
  function M2(p3) {
    w6.update(p3);
  }
  function $5(p3) {
    var V2;
    if (!w6.wasMoved(p3) || a5.disabled || (V2 = o7.virtual.value) != null && V2.disabled(a5.value) || f5.value) return;
    let R3 = o7.calculateIndex(a5.value);
    o7.goToOption(c3.Specific, R3, 0);
  }
  function B2(p3) {
    var R3;
    w6.wasMoved(p3) && (a5.disabled || (R3 = o7.virtual.value) != null && R3.disabled(a5.value) || f5.value && (o7.optionsPropsRef.value.hold || o7.goToOption(c3.Nothing)));
  }
  return () => {
    let { disabled: p3 } = a5, R3 = { active: f5.value, selected: S3.value, disabled: p3 }, V2 = { id: u9, ref: e3, role: "option", tabIndex: p3 === true ? void 0 : -1, "aria-disabled": p3 === true ? true : void 0, "aria-selected": S3.value, disabled: void 0, onMousedown: D, onFocus: E6, onPointerenter: M2, onMouseenter: M2, onPointermove: $5, onMousemove: $5, onPointerleave: B2, onMouseleave: B2 }, i9 = T2(a5, ["order", "value"]);
    return A({ ourProps: V2, theirProps: i9, slot: R3, attrs: r4, slots: h3, name: "ComboboxOption" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-event-listener.js
function E3(n6, e3, o7, r4) {
  c.isServer || watchEffect((t8) => {
    n6 = n6 != null ? n6 : window, n6.addEventListener(e3, o7, r4), t8(() => n6.removeEventListener(e3, o7, r4));
  });
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-tab-direction.js
var d3 = ((r4) => (r4[r4.Forwards = 0] = "Forwards", r4[r4.Backwards = 1] = "Backwards", r4))(d3 || {});
function n5() {
  let o7 = ref(0);
  return w2("keydown", (e3) => {
    e3.key === "Tab" && (o7.value = e3.shiftKey ? 1 : 0);
  }), o7;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js
function B(t8) {
  if (!t8) return /* @__PURE__ */ new Set();
  if (typeof t8 == "function") return new Set(t8());
  let n6 = /* @__PURE__ */ new Set();
  for (let r4 of t8.value) {
    let l4 = o3(r4);
    l4 instanceof HTMLElement && n6.add(l4);
  }
  return n6;
}
var A2 = ((e3) => (e3[e3.None = 1] = "None", e3[e3.InitialFocus = 2] = "InitialFocus", e3[e3.TabLock = 4] = "TabLock", e3[e3.FocusLock = 8] = "FocusLock", e3[e3.RestoreFocus = 16] = "RestoreFocus", e3[e3.All = 30] = "All", e3))(A2 || {});
var ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t8, { attrs: n6, slots: r4, expose: l4 }) {
  let o7 = ref(null);
  l4({ el: o7, $el: o7 });
  let i9 = computed(() => i4(o7)), e3 = ref(false);
  onMounted(() => e3.value = true), onUnmounted(() => e3.value = false), $({ ownerDocument: i9 }, computed(() => e3.value && Boolean(t8.features & 16)));
  let m4 = z({ ownerDocument: i9, container: o7, initialFocus: computed(() => t8.initialFocus) }, computed(() => e3.value && Boolean(t8.features & 2)));
  J({ ownerDocument: i9, container: o7, containers: t8.containers, previousActiveElement: m4 }, computed(() => e3.value && Boolean(t8.features & 8)));
  let f5 = n5();
  function a5(u9) {
    let T5 = o3(o7);
    if (!T5) return;
    ((w6) => w6())(() => {
      u(f5.value, { [d3.Forwards]: () => {
        P(T5, N.First, { skipElements: [u9.relatedTarget] });
      }, [d3.Backwards]: () => {
        P(T5, N.Last, { skipElements: [u9.relatedTarget] });
      } });
    });
  }
  let s7 = ref(false);
  function F3(u9) {
    u9.key === "Tab" && (s7.value = true, requestAnimationFrame(() => {
      s7.value = false;
    }));
  }
  function H5(u9) {
    if (!e3.value) return;
    let T5 = B(t8.containers);
    o3(o7) instanceof HTMLElement && T5.add(o3(o7));
    let d9 = u9.relatedTarget;
    d9 instanceof HTMLElement && d9.dataset.headlessuiFocusGuard !== "true" && (N3(T5, d9) || (s7.value ? P(o3(o7), u(f5.value, { [d3.Forwards]: () => N.Next, [d3.Backwards]: () => N.Previous }) | N.WrapAround, { relativeTo: u9.target }) : u9.target instanceof HTMLElement && S(u9.target)));
  }
  return () => {
    let u9 = {}, T5 = { ref: o7, onKeydown: F3, onFocusout: H5 }, { features: d9, initialFocus: w6, containers: Q3, ...O4 } = t8;
    return h(Fragment, [Boolean(d9 & 4) && h(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a5, features: u4.Focusable }), A({ ourProps: T5, theirProps: { ...n6, ...O4 }, slot: u9, attrs: n6, slots: r4, name: "FocusTrap" }), Boolean(d9 & 4) && h(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a5, features: u4.Focusable })]);
  };
} }), { features: A2 });
function W(t8) {
  let n6 = ref(t6.slice());
  return watch([t8], ([r4], [l4]) => {
    l4 === true && r4 === false ? t(() => {
      n6.value.splice(0);
    }) : l4 === false && r4 === true && (n6.value = t6.slice());
  }, { flush: "post" }), () => {
    var r4;
    return (r4 = n6.value.find((l4) => l4 != null && l4.isConnected)) != null ? r4 : null;
  };
}
function $({ ownerDocument: t8 }, n6) {
  let r4 = W(n6);
  onMounted(() => {
    watchEffect(() => {
      var l4, o7;
      n6.value || ((l4 = t8.value) == null ? void 0 : l4.activeElement) === ((o7 = t8.value) == null ? void 0 : o7.body) && S(r4());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n6.value && S(r4());
  });
}
function z({ ownerDocument: t8, container: n6, initialFocus: r4 }, l4) {
  let o7 = ref(null), i9 = ref(false);
  return onMounted(() => i9.value = true), onUnmounted(() => i9.value = false), onMounted(() => {
    watch([n6, r4, l4], (e3, m4) => {
      if (e3.every((a5, s7) => (m4 == null ? void 0 : m4[s7]) === a5) || !l4.value) return;
      let f5 = o3(n6);
      f5 && t(() => {
        var F3, H5;
        if (!i9.value) return;
        let a5 = o3(r4), s7 = (F3 = t8.value) == null ? void 0 : F3.activeElement;
        if (a5) {
          if (a5 === s7) {
            o7.value = s7;
            return;
          }
        } else if (f5.contains(s7)) {
          o7.value = s7;
          return;
        }
        a5 ? S(a5) : P(f5, N.First | N.NoScroll) === T.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o7.value = (H5 = t8.value) == null ? void 0 : H5.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o7;
}
function J({ ownerDocument: t8, container: n6, containers: r4, previousActiveElement: l4 }, o7) {
  var i9;
  E3((i9 = t8.value) == null ? void 0 : i9.defaultView, "focus", (e3) => {
    if (!o7.value) return;
    let m4 = B(r4);
    o3(n6) instanceof HTMLElement && m4.add(o3(n6));
    let f5 = l4.value;
    if (!f5) return;
    let a5 = e3.target;
    a5 && a5 instanceof HTMLElement ? N3(m4, a5) ? (l4.value = a5, S(a5)) : (e3.preventDefault(), e3.stopPropagation(), S(f5)) : S(l4.value);
  }, true);
}
function N3(t8, n6) {
  for (let r4 of t8) if (r4.contains(n6)) return true;
  return false;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-store.js
function m(t8) {
  let e3 = shallowRef(t8.getSnapshot());
  return onUnmounted(t8.subscribe(() => {
    e3.value = t8.getSnapshot();
  })), e3;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/store.js
function a(o7, r4) {
  let t8 = o7(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t8;
  }, subscribe(e3) {
    return n6.add(e3), () => n6.delete(e3);
  }, dispatch(e3, ...s7) {
    let i9 = r4[e3].call(t8, ...s7);
    i9 && (t8 = i9, n6.forEach((c5) => c5()));
  } };
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c4() {
  let o7;
  return { before({ doc: e3 }) {
    var l4;
    let n6 = e3.documentElement;
    o7 = ((l4 = e3.defaultView) != null ? l4 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e3, d: n6 }) {
    let t8 = e3.documentElement, l4 = t8.clientWidth - t8.offsetWidth, r4 = o7 - l4;
    n6.style(t8, "paddingRight", `${r4}px`);
  } };
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/document-overflow/handle-ios-locking.js
function w4() {
  return t3() ? { before({ doc: r4, d: n6, meta: c5 }) {
    function a5(o7) {
      return c5.containers.flatMap((l4) => l4()).some((l4) => l4.contains(o7));
    }
    n6.microTask(() => {
      var s7;
      if (window.getComputedStyle(r4.documentElement).scrollBehavior !== "auto") {
        let t8 = o();
        t8.style(r4.documentElement, "scrollBehavior", "auto"), n6.add(() => n6.microTask(() => t8.dispose()));
      }
      let o7 = (s7 = window.scrollY) != null ? s7 : window.pageYOffset, l4 = null;
      n6.addEventListener(r4, "click", (t8) => {
        if (t8.target instanceof HTMLElement) try {
          let e3 = t8.target.closest("a");
          if (!e3) return;
          let { hash: f5 } = new URL(e3.href), i9 = r4.querySelector(f5);
          i9 && !a5(i9) && (l4 = i9);
        } catch {
        }
      }, true), n6.addEventListener(r4, "touchstart", (t8) => {
        if (t8.target instanceof HTMLElement) if (a5(t8.target)) {
          let e3 = t8.target;
          for (; e3.parentElement && a5(e3.parentElement); ) e3 = e3.parentElement;
          n6.style(e3, "overscrollBehavior", "contain");
        } else n6.style(t8.target, "touchAction", "none");
      }), n6.addEventListener(r4, "touchmove", (t8) => {
        if (t8.target instanceof HTMLElement) {
          if (t8.target.tagName === "INPUT") return;
          if (a5(t8.target)) {
            let e3 = t8.target;
            for (; e3.parentElement && e3.dataset.headlessuiPortal !== "" && !(e3.scrollHeight > e3.clientHeight || e3.scrollWidth > e3.clientWidth); ) e3 = e3.parentElement;
            e3.dataset.headlessuiPortal === "" && t8.preventDefault();
          } else t8.preventDefault();
        }
      }, { passive: false }), n6.add(() => {
        var e3;
        let t8 = (e3 = window.scrollY) != null ? e3 : window.pageYOffset;
        o7 !== t8 && window.scrollTo(0, o7), l4 && l4.isConnected && (l4.scrollIntoView({ block: "nearest" }), l4 = null);
      });
    });
  } } : {};
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/document-overflow/prevent-scroll.js
function l2() {
  return { before({ doc: e3, d: o7 }) {
    o7.style(e3.documentElement, "overflow", "hidden");
  } };
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/document-overflow/overflow-store.js
function m2(e3) {
  let n6 = {};
  for (let t8 of e3) Object.assign(n6, t8(n6));
  return n6;
}
var a2 = a(() => /* @__PURE__ */ new Map(), { PUSH(e3, n6) {
  var o7;
  let t8 = (o7 = this.get(e3)) != null ? o7 : { doc: e3, count: 0, d: o(), meta: /* @__PURE__ */ new Set() };
  return t8.count++, t8.meta.add(n6), this.set(e3, t8), this;
}, POP(e3, n6) {
  let t8 = this.get(e3);
  return t8 && (t8.count--, t8.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e3, d: n6, meta: t8 }) {
  let o7 = { doc: e3, d: n6, meta: m2(t8) }, c5 = [w4(), c4(), l2()];
  c5.forEach(({ before: r4 }) => r4 == null ? void 0 : r4(o7)), c5.forEach(({ after: r4 }) => r4 == null ? void 0 : r4(o7));
}, SCROLL_ALLOW({ d: e3 }) {
  e3.dispose();
}, TEARDOWN({ doc: e3 }) {
  this.delete(e3);
} });
a2.subscribe(() => {
  let e3 = a2.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t8] of e3) n6.set(t8, t8.documentElement.style.overflow);
  for (let t8 of e3.values()) {
    let o7 = n6.get(t8.doc) === "hidden", c5 = t8.count !== 0;
    (c5 && !o7 || !c5 && o7) && a2.dispatch(t8.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t8), t8.count === 0 && a2.dispatch("TEARDOWN", t8);
  }
});

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/document-overflow/use-document-overflow.js
function d4(t8, a5, n6) {
  let i9 = m(a2), l4 = computed(() => {
    let e3 = t8.value ? i9.value.get(t8.value) : void 0;
    return e3 ? e3.count > 0 : false;
  });
  return watch([t8, a5], ([e3, m4], [r4], o7) => {
    if (!e3 || !m4) return;
    a2.dispatch("PUSH", e3, n6);
    let f5 = false;
    o7(() => {
      f5 || (a2.dispatch("POP", r4 != null ? r4 : e3, n6), f5 = true);
    });
  }, { immediate: true }), l4;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-inert.js
var i8 = /* @__PURE__ */ new Map();
var t7 = /* @__PURE__ */ new Map();
function E4(d9, f5 = ref(true)) {
  watchEffect((o7) => {
    var a5;
    if (!f5.value) return;
    let e3 = o3(d9);
    if (!e3) return;
    o7(function() {
      var u9;
      if (!e3) return;
      let r4 = (u9 = t7.get(e3)) != null ? u9 : 1;
      if (r4 === 1 ? t7.delete(e3) : t7.set(e3, r4 - 1), r4 !== 1) return;
      let n6 = i8.get(e3);
      n6 && (n6["aria-hidden"] === null ? e3.removeAttribute("aria-hidden") : e3.setAttribute("aria-hidden", n6["aria-hidden"]), e3.inert = n6.inert, i8.delete(e3));
    });
    let l4 = (a5 = t7.get(e3)) != null ? a5 : 0;
    t7.set(e3, l4 + 1), l4 === 0 && (i8.set(e3, { "aria-hidden": e3.getAttribute("aria-hidden"), inert: e3.inert }), e3.setAttribute("aria-hidden", "true"), e3.inert = true);
  });
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-root-containers.js
function N4({ defaultContainers: o7 = [], portals: i9, mainTreeNodeRef: H5 } = {}) {
  let t8 = ref(null), r4 = i4(t8);
  function u9() {
    var l4, f5, a5;
    let n6 = [];
    for (let e3 of o7) e3 !== null && (e3 instanceof HTMLElement ? n6.push(e3) : "value" in e3 && e3.value instanceof HTMLElement && n6.push(e3.value));
    if (i9 != null && i9.value) for (let e3 of i9.value) n6.push(e3);
    for (let e3 of (l4 = r4 == null ? void 0 : r4.querySelectorAll("html > *, body > *")) != null ? l4 : []) e3 !== document.body && e3 !== document.head && e3 instanceof HTMLElement && e3.id !== "headlessui-portal-root" && (e3.contains(o3(t8)) || e3.contains((a5 = (f5 = o3(t8)) == null ? void 0 : f5.getRootNode()) == null ? void 0 : a5.host) || n6.some((M2) => e3.contains(M2)) || n6.push(e3));
    return n6;
  }
  return { resolveContainers: u9, contains(n6) {
    return u9().some((l4) => l4.contains(n6));
  }, mainTreeNodeRef: t8, MainTreeNode() {
    return H5 != null ? null : h(f, { features: u4.Hidden, ref: t8 });
  } };
}
function v3() {
  let o7 = ref(null);
  return { mainTreeNodeRef: o7, MainTreeNode() {
    return h(f, { features: u4.Hidden, ref: o7 });
  } };
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/internal/portal-force-root.js
var e2 = Symbol("ForcePortalRootContext");
function s5() {
  return inject(e2, false);
}
var u6 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o7, { slots: t8, attrs: r4 }) {
  return provide(e2, o7.force), () => {
    let { force: f5, ...n6 } = o7;
    return A({ theirProps: n6, ourProps: {}, slot: {}, slots: t8, attrs: r4, name: "ForcePortalRoot" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/internal/stack-context.js
var u7 = Symbol("StackContext");
var s6 = ((e3) => (e3[e3.Add = 0] = "Add", e3[e3.Remove = 1] = "Remove", e3))(s6 || {});
function y3() {
  return inject(u7, () => {
  });
}
function R({ type: o7, enabled: r4, element: e3, onUpdate: i9 }) {
  let a5 = y3();
  function t8(...n6) {
    i9 == null || i9(...n6), a5(...n6);
  }
  onMounted(() => {
    watch(r4, (n6, d9) => {
      n6 ? t8(0, o7, e3) : d9 === true && t8(1, o7, e3);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r4.value && t8(1, o7, e3);
  }), provide(u7, t8);
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/description/description.js
var u8 = Symbol("DescriptionContext");
function w5() {
  let t8 = inject(u8, null);
  if (t8 === null) throw new Error("Missing parent");
  return t8;
}
function k({ slot: t8 = ref({}), name: o7 = "Description", props: s7 = {} } = {}) {
  let e3 = ref([]);
  function r4(n6) {
    return e3.value.push(n6), () => {
      let i9 = e3.value.indexOf(n6);
      i9 !== -1 && e3.value.splice(i9, 1);
    };
  }
  return provide(u8, { register: r4, slot: t8, name: o7, props: s7 }), computed(() => e3.value.length > 0 ? e3.value.join(" ") : void 0);
}
var K2 = defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t8, { attrs: o7, slots: s7 }) {
  var n6;
  let e3 = (n6 = t8.id) != null ? n6 : `headlessui-description-${i2()}`, r4 = w5();
  return onMounted(() => onUnmounted(r4.register(e3))), () => {
    let { name: i9 = "Description", slot: l4 = ref({}), props: d9 = {} } = r4, { ...c5 } = t8, f5 = { ...Object.entries(d9).reduce((a5, [g5, m4]) => Object.assign(a5, { [g5]: unref(m4) }), {}), id: e3 };
    return A({ ourProps: f5, theirProps: c5, slot: l4.value, attrs: o7, slots: s7, name: i9 });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/portal/portal.js
function x(e3) {
  let t8 = i4(e3);
  if (!t8) {
    if (e3 === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e3}`);
  }
  let l4 = t8.getElementById("headlessui-portal-root");
  if (l4) return l4;
  let r4 = t8.createElement("div");
  return r4.setAttribute("id", "headlessui-portal-root"), t8.body.appendChild(r4);
}
var f4 = /* @__PURE__ */ new WeakMap();
function U(e3) {
  var t8;
  return (t8 = f4.get(e3)) != null ? t8 : 0;
}
function M(e3, t8) {
  let l4 = t8(U(e3));
  return l4 <= 0 ? f4.delete(e3) : f4.set(e3, l4), l4;
}
var $2 = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e3, { slots: t8, attrs: l4 }) {
  let r4 = ref(null), i9 = computed(() => i4(r4)), o7 = s5(), u9 = inject(H2, null), n6 = ref(o7 === true || u9 == null ? x(r4.value) : u9.resolveTarget());
  n6.value && M(n6.value, (a5) => a5 + 1);
  let c5 = ref(false);
  onMounted(() => {
    c5.value = true;
  }), watchEffect(() => {
    o7 || u9 != null && (n6.value = u9.resolveTarget());
  });
  let v4 = inject(d5, null), g5 = false, b2 = getCurrentInstance();
  return watch(r4, () => {
    if (g5 || !v4) return;
    let a5 = o3(r4);
    a5 && (onUnmounted(v4.register(a5), b2), g5 = true);
  }), onUnmounted(() => {
    var P2, T5;
    let a5 = (P2 = i9.value) == null ? void 0 : P2.getElementById("headlessui-portal-root");
    !a5 || n6.value !== a5 || M(n6.value, (L3) => L3 - 1) || n6.value.children.length > 0 || (T5 = n6.value.parentElement) == null || T5.removeChild(n6.value);
  }), () => {
    if (!c5.value || n6.value === null) return null;
    let a5 = { ref: r4, "data-headlessui-portal": "" };
    return h(Teleport, { to: n6.value }, A({ ourProps: a5, theirProps: e3, slot: {}, attrs: l4, slots: t8, name: "Portal" }));
  };
} });
var d5 = Symbol("PortalParentContext");
function q() {
  let e3 = inject(d5, null), t8 = ref([]);
  function l4(o7) {
    return t8.value.push(o7), e3 && e3.register(o7), () => r4(o7);
  }
  function r4(o7) {
    let u9 = t8.value.indexOf(o7);
    u9 !== -1 && t8.value.splice(u9, 1), e3 && e3.unregister(o7);
  }
  let i9 = { register: l4, unregister: r4, portals: t8 };
  return [t8, defineComponent({ name: "PortalWrapper", setup(o7, { slots: u9 }) {
    return provide(d5, i9), () => {
      var n6;
      return (n6 = u9.default) == null ? void 0 : n6.call(u9);
    };
  } })];
}
var H2 = Symbol("PortalGroupContext");
var z2 = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e3, { attrs: t8, slots: l4 }) {
  let r4 = reactive({ resolveTarget() {
    return e3.target;
  } });
  return provide(H2, r4), () => {
    let { target: i9, ...o7 } = e3;
    return A({ theirProps: o7, ourProps: {}, slot: {}, attrs: t8, slots: l4, name: "PortalGroup" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/dialog/dialog.js
var Te = ((l4) => (l4[l4.Open = 0] = "Open", l4[l4.Closed = 1] = "Closed", l4))(Te || {});
var H3 = Symbol("DialogContext");
function T3(t8) {
  let i9 = inject(H3, null);
  if (i9 === null) {
    let l4 = new Error(`<${t8} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l4, T3), l4;
  }
  return i9;
}
var A3 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
var Ye = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A3 }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (t8) => true }, setup(t8, { emit: i9, attrs: l4, slots: p3, expose: s7 }) {
  var q2, W3;
  let n6 = (q2 = t8.id) != null ? q2 : `headlessui-dialog-${i2()}`, u9 = ref(false);
  onMounted(() => {
    u9.value = true;
  });
  let r4 = false, g5 = computed(() => t8.role === "dialog" || t8.role === "alertdialog" ? t8.role : (r4 || (r4 = true, console.warn(`Invalid role [${g5}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S3 = l(), R3 = computed(() => t8.open === A3 && S3 !== null ? (S3.value & i7.Open) === i7.Open : t8.open), m4 = ref(null), E6 = computed(() => i4(m4));
  if (s7({ el: m4, $el: m4 }), !(t8.open !== A3 || S3 !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R3.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R3.value === A3 ? void 0 : t8.open}`);
  let c5 = computed(() => u9.value && R3.value ? 0 : 1), k3 = computed(() => c5.value === 0), w6 = computed(() => D.value > 1), N8 = inject(H3, null) !== null, [Q3, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K4, MainTreeNode: Z2 } = N4({ portals: Q3, defaultContainers: [computed(() => {
    var e3;
    return (e3 = h3.panelRef.value) != null ? e3 : m4.value;
  })] }), ee2 = computed(() => w6.value ? "parent" : "leaf"), U5 = computed(() => S3 !== null ? (S3.value & i7.Closing) === i7.Closing : false), te3 = computed(() => N8 || U5.value ? false : k3.value), le4 = computed(() => {
    var e3, a5, d9;
    return (d9 = Array.from((a5 = (e3 = E6.value) == null ? void 0 : e3.querySelectorAll("body > *")) != null ? a5 : []).find((f5) => f5.id === "headlessui-portal-root" ? false : f5.contains(o3(K4)) && f5 instanceof HTMLElement)) != null ? d9 : null;
  });
  E4(le4, te3);
  let ae2 = computed(() => w6.value ? true : k3.value), oe2 = computed(() => {
    var e3, a5, d9;
    return (d9 = Array.from((a5 = (e3 = E6.value) == null ? void 0 : e3.querySelectorAll("[data-headlessui-portal]")) != null ? a5 : []).find((f5) => f5.contains(o3(K4)) && f5 instanceof HTMLElement)) != null ? d9 : null;
  });
  E4(oe2, ae2), R({ type: "Dialog", enabled: computed(() => c5.value === 0), element: m4, onUpdate: (e3, a5) => {
    if (a5 === "Dialog") return u(e3, { [s6.Add]: () => D.value += 1, [s6.Remove]: () => D.value -= 1 });
  } });
  let re2 = k({ name: "DialogDescription", slot: computed(() => ({ open: R3.value })) }), M2 = ref(null), h3 = { titleId: M2, panelRef: ref(null), dialogState: c5, setTitleId(e3) {
    M2.value !== e3 && (M2.value = e3);
  }, close() {
    i9("close", false);
  } };
  provide(H3, h3);
  let ne2 = computed(() => !(!k3.value || w6.value));
  w3(B2, (e3, a5) => {
    e3.preventDefault(), h3.close(), nextTick(() => a5 == null ? void 0 : a5.focus());
  }, ne2);
  let ie3 = computed(() => !(w6.value || c5.value !== 0));
  E3((W3 = E6.value) == null ? void 0 : W3.defaultView, "keydown", (e3) => {
    ie3.value && (e3.defaultPrevented || e3.key === o4.Escape && (e3.preventDefault(), e3.stopPropagation(), h3.close()));
  });
  let ue4 = computed(() => !(U5.value || c5.value !== 0 || N8));
  return d4(E6, ue4, (e3) => {
    var a5;
    return { containers: [...(a5 = e3.containers) != null ? a5 : [], B2] };
  }), watchEffect((e3) => {
    if (c5.value !== 0) return;
    let a5 = o3(m4);
    if (!a5) return;
    let d9 = new ResizeObserver((f5) => {
      for (let L3 of f5) {
        let x2 = L3.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h3.close();
      }
    });
    d9.observe(a5), e3(() => d9.disconnect());
  }), () => {
    let { open: e3, initialFocus: a5, ...d9 } = t8, f5 = { ...l4, ref: m4, id: n6, role: g5.value, "aria-modal": c5.value === 0 ? true : void 0, "aria-labelledby": M2.value, "aria-describedby": re2.value }, L3 = { open: c5.value === 0 };
    return h(u6, { force: true }, () => [h($2, () => h(z2, { target: m4.value }, () => h(u6, { force: false }, () => h(ue, { initialFocus: a5, containers: B2, features: k3.value ? u(ee2.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h(X, {}, () => A({ ourProps: f5, theirProps: { ...d9, ...l4 }, slot: L3, attrs: l4, slots: p3, visible: c5.value === 0, features: N2.RenderStrategy | N2.Static, name: "Dialog" })))))), h(Z2)]);
  };
} });
var _e = defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t8, { attrs: i9, slots: l4 }) {
  var u9;
  let p3 = (u9 = t8.id) != null ? u9 : `headlessui-dialog-overlay-${i2()}`, s7 = T3("DialogOverlay");
  function n6(r4) {
    r4.target === r4.currentTarget && (r4.preventDefault(), r4.stopPropagation(), s7.close());
  }
  return () => {
    let { ...r4 } = t8;
    return A({ ourProps: { id: p3, "aria-hidden": true, onClick: n6 }, theirProps: r4, slot: { open: s7.dialogState.value === 0 }, attrs: i9, slots: l4, name: "DialogOverlay" });
  };
} });
var ze = defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(t8, { attrs: i9, slots: l4, expose: p3 }) {
  var r4;
  let s7 = (r4 = t8.id) != null ? r4 : `headlessui-dialog-backdrop-${i2()}`, n6 = T3("DialogBackdrop"), u9 = ref(null);
  return p3({ el: u9, $el: u9 }), onMounted(() => {
    if (n6.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g5 } = t8, D = { id: s7, ref: u9, "aria-hidden": true };
    return h(u6, { force: true }, () => h($2, () => A({ ourProps: D, theirProps: { ...i9, ...g5 }, slot: { open: n6.dialogState.value === 0 }, attrs: i9, slots: l4, name: "DialogBackdrop" })));
  };
} });
var Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t8, { attrs: i9, slots: l4, expose: p3 }) {
  var r4;
  let s7 = (r4 = t8.id) != null ? r4 : `headlessui-dialog-panel-${i2()}`, n6 = T3("DialogPanel");
  p3({ el: n6.panelRef, $el: n6.panelRef });
  function u9(g5) {
    g5.stopPropagation();
  }
  return () => {
    let { ...g5 } = t8, D = { id: s7, ref: n6.panelRef, onClick: u9 };
    return A({ ourProps: D, theirProps: g5, slot: { open: n6.dialogState.value === 0 }, attrs: i9, slots: l4, name: "DialogPanel" });
  };
} });
var Ve2 = defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(t8, { attrs: i9, slots: l4 }) {
  var n6;
  let p3 = (n6 = t8.id) != null ? n6 : `headlessui-dialog-title-${i2()}`, s7 = T3("DialogTitle");
  return onMounted(() => {
    s7.setTitleId(p3), onUnmounted(() => s7.setTitleId(null));
  }), () => {
    let { ...u9 } = t8;
    return A({ ourProps: { id: p3 }, theirProps: u9, slot: { open: s7.dialogState.value === 0 }, attrs: i9, slots: l4, name: "DialogTitle" });
  };
} });
var Je = K2;

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js
var $3 = ((o7) => (o7[o7.Open = 0] = "Open", o7[o7.Closed = 1] = "Closed", o7))($3 || {});
var T4 = Symbol("DisclosureContext");
function O2(t8) {
  let r4 = inject(T4, null);
  if (r4 === null) {
    let o7 = new Error(`<${t8} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o7, O2), o7;
  }
  return r4;
}
var k2 = Symbol("DisclosurePanelContext");
function U2() {
  return inject(k2, null);
}
var N5 = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t8, { slots: r4, attrs: o7 }) {
  let s7 = ref(t8.defaultOpen ? 0 : 1), e3 = ref(null), i9 = ref(null), n6 = { buttonId: ref(`headlessui-disclosure-button-${i2()}`), panelId: ref(`headlessui-disclosure-panel-${i2()}`), disclosureState: s7, panel: e3, button: i9, toggleDisclosure() {
    s7.value = u(s7.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s7.value !== 1 && (s7.value = 1);
  }, close(l4) {
    n6.closeDisclosure();
    let a5 = (() => l4 ? l4 instanceof HTMLElement ? l4 : l4.value instanceof HTMLElement ? o3(l4) : o3(n6.button) : o3(n6.button))();
    a5 == null || a5.focus();
  } };
  return provide(T4, n6), t4(computed(() => u(s7.value, { [0]: i7.Open, [1]: i7.Closed }))), () => {
    let { defaultOpen: l4, ...a5 } = t8, c5 = { open: s7.value === 0, close: n6.close };
    return A({ theirProps: a5, ourProps: {}, slot: c5, slots: r4, attrs: o7, name: "Disclosure" });
  };
} });
var Q = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t8, { attrs: r4, slots: o7, expose: s7 }) {
  let e3 = O2("DisclosureButton"), i9 = U2(), n6 = computed(() => i9 === null ? false : i9.value === e3.panelId.value);
  onMounted(() => {
    n6.value || t8.id !== null && (e3.buttonId.value = t8.id);
  }), onUnmounted(() => {
    n6.value || (e3.buttonId.value = null);
  });
  let l4 = ref(null);
  s7({ el: l4, $el: l4 }), n6.value || watchEffect(() => {
    e3.button.value = l4.value;
  });
  let a5 = s3(computed(() => ({ as: t8.as, type: r4.type })), l4);
  function c5() {
    var u9;
    t8.disabled || (n6.value ? (e3.toggleDisclosure(), (u9 = o3(e3.button)) == null || u9.focus()) : e3.toggleDisclosure());
  }
  function D(u9) {
    var S3;
    if (!t8.disabled) if (n6.value) switch (u9.key) {
      case o4.Space:
      case o4.Enter:
        u9.preventDefault(), u9.stopPropagation(), e3.toggleDisclosure(), (S3 = o3(e3.button)) == null || S3.focus();
        break;
    }
    else switch (u9.key) {
      case o4.Space:
      case o4.Enter:
        u9.preventDefault(), u9.stopPropagation(), e3.toggleDisclosure();
        break;
    }
  }
  function v4(u9) {
    switch (u9.key) {
      case o4.Space:
        u9.preventDefault();
        break;
    }
  }
  return () => {
    var C3;
    let u9 = { open: e3.disclosureState.value === 0 }, { id: S3, ...K4 } = t8, M2 = n6.value ? { ref: l4, type: a5.value, onClick: c5, onKeydown: D } : { id: (C3 = e3.buttonId.value) != null ? C3 : S3, ref: l4, type: a5.value, "aria-expanded": e3.disclosureState.value === 0, "aria-controls": e3.disclosureState.value === 0 || o3(e3.panel) ? e3.panelId.value : void 0, disabled: t8.disabled ? true : void 0, onClick: c5, onKeydown: D, onKeyup: v4 };
    return A({ ourProps: M2, theirProps: K4, slot: u9, attrs: r4, slots: o7, name: "DisclosureButton" });
  };
} });
var V = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(t8, { attrs: r4, slots: o7, expose: s7 }) {
  let e3 = O2("DisclosurePanel");
  onMounted(() => {
    t8.id !== null && (e3.panelId.value = t8.id);
  }), onUnmounted(() => {
    e3.panelId.value = null;
  }), s7({ el: e3.panel, $el: e3.panel }), provide(k2, e3.panelId);
  let i9 = l(), n6 = computed(() => i9 !== null ? (i9.value & i7.Open) === i7.Open : e3.disclosureState.value === 0);
  return () => {
    var v4;
    let l4 = { open: e3.disclosureState.value === 0, close: e3.close }, { id: a5, ...c5 } = t8, D = { id: (v4 = e3.panelId.value) != null ? v4 : a5, ref: e3.panel };
    return A({ ourProps: D, theirProps: c5, slot: l4, attrs: r4, slots: o7, features: N2.RenderStrategy | N2.Static, visible: n6.value, name: "DisclosurePanel" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/get-text-value.js
var a3 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o6(e3) {
  var r4, i9;
  let n6 = (r4 = e3.innerText) != null ? r4 : "", t8 = e3.cloneNode(true);
  if (!(t8 instanceof HTMLElement)) return n6;
  let u9 = false;
  for (let f5 of t8.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f5.remove(), u9 = true;
  let l4 = u9 ? (i9 = t8.innerText) != null ? i9 : "" : n6;
  return a3.test(l4) && (l4 = l4.replace(a3, "")), l4;
}
function g2(e3) {
  let n6 = e3.getAttribute("aria-label");
  if (typeof n6 == "string") return n6.trim();
  let t8 = e3.getAttribute("aria-labelledby");
  if (t8) {
    let u9 = t8.split(" ").map((l4) => {
      let r4 = document.getElementById(l4);
      if (r4) {
        let i9 = r4.getAttribute("aria-label");
        return typeof i9 == "string" ? i9.trim() : o6(r4).trim();
      }
      return null;
    }).filter(Boolean);
    if (u9.length > 0) return u9.join(", ");
  }
  return o6(e3).trim();
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/hooks/use-text-value.js
function p2(a5) {
  let t8 = ref(""), r4 = ref("");
  return () => {
    let e3 = o3(a5);
    if (!e3) return "";
    let l4 = e3.innerText;
    if (t8.value === l4) return r4.value;
    let u9 = g2(e3).trim().toLowerCase();
    return t8.value = l4, r4.value = u9, u9;
  };
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/listbox/listbox.js
function pe(o7, b2) {
  return o7 === b2;
}
var ce = ((r4) => (r4[r4.Open = 0] = "Open", r4[r4.Closed = 1] = "Closed", r4))(ce || {});
var ve = ((r4) => (r4[r4.Single = 0] = "Single", r4[r4.Multi = 1] = "Multi", r4))(ve || {});
var be = ((r4) => (r4[r4.Pointer = 0] = "Pointer", r4[r4.Other = 1] = "Other", r4))(be || {});
function me(o7) {
  requestAnimationFrame(() => requestAnimationFrame(o7));
}
var $4 = Symbol("ListboxContext");
function A4(o7) {
  let b2 = inject($4, null);
  if (b2 === null) {
    let r4 = new Error(`<${o7} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r4, A4), r4;
  }
  return b2;
}
var Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o7) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o7, { slots: b2, attrs: r4, emit: w6 }) {
  let n6 = ref(1), e3 = ref(null), f5 = ref(null), v4 = ref(null), s7 = ref([]), m4 = ref(""), p3 = ref(null), a5 = ref(1);
  function u9(t8 = (i9) => i9) {
    let i9 = p3.value !== null ? s7.value[p3.value] : null, l4 = O(t8(s7.value.slice()), (O4) => o3(O4.dataRef.domRef)), d9 = i9 ? l4.indexOf(i9) : null;
    return d9 === -1 && (d9 = null), { options: l4, activeOptionIndex: d9 };
  }
  let D = computed(() => o7.multiple ? 1 : 0), [y4, L3] = d(computed(() => o7.modelValue), (t8) => w6("update:modelValue", t8), computed(() => o7.defaultValue)), M2 = computed(() => y4.value === void 0 ? u(D.value, { [1]: [], [0]: void 0 }) : y4.value), k3 = { listboxState: n6, value: M2, mode: D, compare(t8, i9) {
    if (typeof o7.by == "string") {
      let l4 = o7.by;
      return (t8 == null ? void 0 : t8[l4]) === (i9 == null ? void 0 : i9[l4]);
    }
    return o7.by(t8, i9);
  }, orientation: computed(() => o7.horizontal ? "horizontal" : "vertical"), labelRef: e3, buttonRef: f5, optionsRef: v4, disabled: computed(() => o7.disabled), options: s7, searchQuery: m4, activeOptionIndex: p3, activationTrigger: a5, closeListbox() {
    o7.disabled || n6.value !== 1 && (n6.value = 1, p3.value = null);
  }, openListbox() {
    o7.disabled || n6.value !== 0 && (n6.value = 0);
  }, goToOption(t8, i9, l4) {
    if (o7.disabled || n6.value === 1) return;
    let d9 = u9(), O4 = f2(t8 === c3.Specific ? { focus: c3.Specific, id: i9 } : { focus: t8 }, { resolveItems: () => d9.options, resolveActiveIndex: () => d9.activeOptionIndex, resolveId: (h3) => h3.id, resolveDisabled: (h3) => h3.dataRef.disabled });
    m4.value = "", p3.value = O4, a5.value = l4 != null ? l4 : 1, s7.value = d9.options;
  }, search(t8) {
    if (o7.disabled || n6.value === 1) return;
    let l4 = m4.value !== "" ? 0 : 1;
    m4.value += t8.toLowerCase();
    let O4 = (p3.value !== null ? s7.value.slice(p3.value + l4).concat(s7.value.slice(0, p3.value + l4)) : s7.value).find((I2) => I2.dataRef.textValue.startsWith(m4.value) && !I2.dataRef.disabled), h3 = O4 ? s7.value.indexOf(O4) : -1;
    h3 === -1 || h3 === p3.value || (p3.value = h3, a5.value = 1);
  }, clearSearch() {
    o7.disabled || n6.value !== 1 && m4.value !== "" && (m4.value = "");
  }, registerOption(t8, i9) {
    let l4 = u9((d9) => [...d9, { id: t8, dataRef: i9 }]);
    s7.value = l4.options, p3.value = l4.activeOptionIndex;
  }, unregisterOption(t8) {
    let i9 = u9((l4) => {
      let d9 = l4.findIndex((O4) => O4.id === t8);
      return d9 !== -1 && l4.splice(d9, 1), l4;
    });
    s7.value = i9.options, p3.value = i9.activeOptionIndex, a5.value = 1;
  }, theirOnChange(t8) {
    o7.disabled || L3(t8);
  }, select(t8) {
    o7.disabled || L3(u(D.value, { [0]: () => t8, [1]: () => {
      let i9 = toRaw(k3.value.value).slice(), l4 = toRaw(t8), d9 = i9.findIndex((O4) => k3.compare(l4, toRaw(O4)));
      return d9 === -1 ? i9.push(l4) : i9.splice(d9, 1), i9;
    } }));
  } };
  w3([f5, v4], (t8, i9) => {
    var l4;
    k3.closeListbox(), w(i9, h2.Loose) || (t8.preventDefault(), (l4 = o3(f5)) == null || l4.focus());
  }, computed(() => n6.value === 0)), provide($4, k3), t4(computed(() => u(n6.value, { [0]: i7.Open, [1]: i7.Closed })));
  let C3 = computed(() => {
    var t8;
    return (t8 = o3(f5)) == null ? void 0 : t8.closest("form");
  });
  return onMounted(() => {
    watch([C3], () => {
      if (!C3.value || o7.defaultValue === void 0) return;
      function t8() {
        k3.theirOnChange(o7.defaultValue);
      }
      return C3.value.addEventListener("reset", t8), () => {
        var i9;
        (i9 = C3.value) == null || i9.removeEventListener("reset", t8);
      };
    }, { immediate: true });
  }), () => {
    let { name: t8, modelValue: i9, disabled: l4, form: d9, ...O4 } = o7, h3 = { open: n6.value === 0, disabled: l4, value: M2.value };
    return h(Fragment, [...t8 != null && M2.value != null ? e({ [t8]: M2.value }).map(([I2, Q3]) => h(f, E2({ features: u4.Hidden, key: I2, as: "input", type: "hidden", hidden: true, readOnly: true, form: d9, disabled: l4, name: I2, value: Q3 }))) : [], A({ ourProps: {}, theirProps: { ...r4, ...T2(O4, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: h3, slots: b2, attrs: r4, name: "Listbox" })]);
  };
} });
var Ee2 = defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(o7, { attrs: b2, slots: r4 }) {
  var f5;
  let w6 = (f5 = o7.id) != null ? f5 : `headlessui-listbox-label-${i2()}`, n6 = A4("ListboxLabel");
  function e3() {
    var v4;
    (v4 = o3(n6.buttonRef)) == null || v4.focus({ preventScroll: true });
  }
  return () => {
    let v4 = { open: n6.listboxState.value === 0, disabled: n6.disabled.value }, { ...s7 } = o7, m4 = { id: w6, ref: n6.labelRef, onClick: e3 };
    return A({ ourProps: m4, theirProps: s7, slot: v4, attrs: b2, slots: r4, name: "ListboxLabel" });
  };
} });
var je = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o7, { attrs: b2, slots: r4, expose: w6 }) {
  var p3;
  let n6 = (p3 = o7.id) != null ? p3 : `headlessui-listbox-button-${i2()}`, e3 = A4("ListboxButton");
  w6({ el: e3.buttonRef, $el: e3.buttonRef });
  function f5(a5) {
    switch (a5.key) {
      case o4.Space:
      case o4.Enter:
      case o4.ArrowDown:
        a5.preventDefault(), e3.openListbox(), nextTick(() => {
          var u9;
          (u9 = o3(e3.optionsRef)) == null || u9.focus({ preventScroll: true }), e3.value.value || e3.goToOption(c3.First);
        });
        break;
      case o4.ArrowUp:
        a5.preventDefault(), e3.openListbox(), nextTick(() => {
          var u9;
          (u9 = o3(e3.optionsRef)) == null || u9.focus({ preventScroll: true }), e3.value.value || e3.goToOption(c3.Last);
        });
        break;
    }
  }
  function v4(a5) {
    switch (a5.key) {
      case o4.Space:
        a5.preventDefault();
        break;
    }
  }
  function s7(a5) {
    e3.disabled.value || (e3.listboxState.value === 0 ? (e3.closeListbox(), nextTick(() => {
      var u9;
      return (u9 = o3(e3.buttonRef)) == null ? void 0 : u9.focus({ preventScroll: true });
    })) : (a5.preventDefault(), e3.openListbox(), me(() => {
      var u9;
      return (u9 = o3(e3.optionsRef)) == null ? void 0 : u9.focus({ preventScroll: true });
    })));
  }
  let m4 = s3(computed(() => ({ as: o7.as, type: b2.type })), e3.buttonRef);
  return () => {
    var y4, L3;
    let a5 = { open: e3.listboxState.value === 0, disabled: e3.disabled.value, value: e3.value.value }, { ...u9 } = o7, D = { ref: e3.buttonRef, id: n6, type: m4.value, "aria-haspopup": "listbox", "aria-controls": (y4 = o3(e3.optionsRef)) == null ? void 0 : y4.id, "aria-expanded": e3.listboxState.value === 0, "aria-labelledby": e3.labelRef.value ? [(L3 = o3(e3.labelRef)) == null ? void 0 : L3.id, n6].join(" ") : void 0, disabled: e3.disabled.value === true ? true : void 0, onKeydown: f5, onKeyup: v4, onClick: s7 };
    return A({ ourProps: D, theirProps: u9, slot: a5, attrs: b2, slots: r4, name: "ListboxButton" });
  };
} });
var Ae2 = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o7, { attrs: b2, slots: r4, expose: w6 }) {
  var p3;
  let n6 = (p3 = o7.id) != null ? p3 : `headlessui-listbox-options-${i2()}`, e3 = A4("ListboxOptions"), f5 = ref(null);
  w6({ el: e3.optionsRef, $el: e3.optionsRef });
  function v4(a5) {
    switch (f5.value && clearTimeout(f5.value), a5.key) {
      case o4.Space:
        if (e3.searchQuery.value !== "") return a5.preventDefault(), a5.stopPropagation(), e3.search(a5.key);
      case o4.Enter:
        if (a5.preventDefault(), a5.stopPropagation(), e3.activeOptionIndex.value !== null) {
          let u9 = e3.options.value[e3.activeOptionIndex.value];
          e3.select(u9.dataRef.value);
        }
        e3.mode.value === 0 && (e3.closeListbox(), nextTick(() => {
          var u9;
          return (u9 = o3(e3.buttonRef)) == null ? void 0 : u9.focus({ preventScroll: true });
        }));
        break;
      case u(e3.orientation.value, { vertical: o4.ArrowDown, horizontal: o4.ArrowRight }):
        return a5.preventDefault(), a5.stopPropagation(), e3.goToOption(c3.Next);
      case u(e3.orientation.value, { vertical: o4.ArrowUp, horizontal: o4.ArrowLeft }):
        return a5.preventDefault(), a5.stopPropagation(), e3.goToOption(c3.Previous);
      case o4.Home:
      case o4.PageUp:
        return a5.preventDefault(), a5.stopPropagation(), e3.goToOption(c3.First);
      case o4.End:
      case o4.PageDown:
        return a5.preventDefault(), a5.stopPropagation(), e3.goToOption(c3.Last);
      case o4.Escape:
        a5.preventDefault(), a5.stopPropagation(), e3.closeListbox(), nextTick(() => {
          var u9;
          return (u9 = o3(e3.buttonRef)) == null ? void 0 : u9.focus({ preventScroll: true });
        });
        break;
      case o4.Tab:
        a5.preventDefault(), a5.stopPropagation();
        break;
      default:
        a5.key.length === 1 && (e3.search(a5.key), f5.value = setTimeout(() => e3.clearSearch(), 350));
        break;
    }
  }
  let s7 = l(), m4 = computed(() => s7 !== null ? (s7.value & i7.Open) === i7.Open : e3.listboxState.value === 0);
  return () => {
    var y4, L3;
    let a5 = { open: e3.listboxState.value === 0 }, { ...u9 } = o7, D = { "aria-activedescendant": e3.activeOptionIndex.value === null || (y4 = e3.options.value[e3.activeOptionIndex.value]) == null ? void 0 : y4.id, "aria-multiselectable": e3.mode.value === 1 ? true : void 0, "aria-labelledby": (L3 = o3(e3.buttonRef)) == null ? void 0 : L3.id, "aria-orientation": e3.orientation.value, id: n6, onKeydown: v4, role: "listbox", tabIndex: 0, ref: e3.optionsRef };
    return A({ ourProps: D, theirProps: u9, slot: a5, attrs: b2, slots: r4, features: N2.RenderStrategy | N2.Static, visible: m4.value, name: "ListboxOptions" });
  };
} });
var Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o7, { slots: b2, attrs: r4, expose: w6 }) {
  var C3;
  let n6 = (C3 = o7.id) != null ? C3 : `headlessui-listbox-option-${i2()}`, e3 = A4("ListboxOption"), f5 = ref(null);
  w6({ el: f5, $el: f5 });
  let v4 = computed(() => e3.activeOptionIndex.value !== null ? e3.options.value[e3.activeOptionIndex.value].id === n6 : false), s7 = computed(() => u(e3.mode.value, { [0]: () => e3.compare(toRaw(e3.value.value), toRaw(o7.value)), [1]: () => toRaw(e3.value.value).some((t8) => e3.compare(toRaw(t8), toRaw(o7.value))) })), m4 = computed(() => u(e3.mode.value, { [1]: () => {
    var i9;
    let t8 = toRaw(e3.value.value);
    return ((i9 = e3.options.value.find((l4) => t8.some((d9) => e3.compare(toRaw(d9), toRaw(l4.dataRef.value))))) == null ? void 0 : i9.id) === n6;
  }, [0]: () => s7.value })), p3 = p2(f5), a5 = computed(() => ({ disabled: o7.disabled, value: o7.value, get textValue() {
    return p3();
  }, domRef: f5 }));
  onMounted(() => e3.registerOption(n6, a5)), onUnmounted(() => e3.unregisterOption(n6)), onMounted(() => {
    watch([e3.listboxState, s7], () => {
      e3.listboxState.value === 0 && s7.value && u(e3.mode.value, { [1]: () => {
        m4.value && e3.goToOption(c3.Specific, n6);
      }, [0]: () => {
        e3.goToOption(c3.Specific, n6);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e3.listboxState.value === 0 && v4.value && e3.activationTrigger.value !== 0 && nextTick(() => {
      var t8, i9;
      return (i9 = (t8 = o3(f5)) == null ? void 0 : t8.scrollIntoView) == null ? void 0 : i9.call(t8, { block: "nearest" });
    });
  });
  function u9(t8) {
    if (o7.disabled) return t8.preventDefault();
    e3.select(o7.value), e3.mode.value === 0 && (e3.closeListbox(), nextTick(() => {
      var i9;
      return (i9 = o3(e3.buttonRef)) == null ? void 0 : i9.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (o7.disabled) return e3.goToOption(c3.Nothing);
    e3.goToOption(c3.Specific, n6);
  }
  let y4 = u3();
  function L3(t8) {
    y4.update(t8);
  }
  function M2(t8) {
    y4.wasMoved(t8) && (o7.disabled || v4.value || e3.goToOption(c3.Specific, n6, 0));
  }
  function k3(t8) {
    y4.wasMoved(t8) && (o7.disabled || v4.value && e3.goToOption(c3.Nothing));
  }
  return () => {
    let { disabled: t8 } = o7, i9 = { active: v4.value, selected: s7.value, disabled: t8 }, { value: l4, disabled: d9, ...O4 } = o7, h3 = { id: n6, ref: f5, role: "option", tabIndex: t8 === true ? void 0 : -1, "aria-disabled": t8 === true ? true : void 0, "aria-selected": s7.value, disabled: void 0, onClick: u9, onFocus: D, onPointerenter: L3, onMouseenter: L3, onPointermove: M2, onMousemove: M2, onPointerleave: k3, onMouseleave: k3 };
    return A({ ourProps: h3, theirProps: O4, slot: i9, attrs: r4, slots: b2, name: "ListboxOption" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/menu/menu.js
var Z = ((i9) => (i9[i9.Open = 0] = "Open", i9[i9.Closed = 1] = "Closed", i9))(Z || {});
var ee = ((i9) => (i9[i9.Pointer = 0] = "Pointer", i9[i9.Other = 1] = "Other", i9))(ee || {});
function te(o7) {
  requestAnimationFrame(() => requestAnimationFrame(o7));
}
var A5 = Symbol("MenuContext");
function O3(o7) {
  let M2 = inject(A5, null);
  if (M2 === null) {
    let i9 = new Error(`<${o7} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i9, O3), i9;
  }
  return M2;
}
var ge = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(o7, { slots: M2, attrs: i9 }) {
  let I2 = ref(1), p3 = ref(null), e3 = ref(null), r4 = ref([]), f5 = ref(""), d9 = ref(null), g5 = ref(1);
  function b2(t8 = (a5) => a5) {
    let a5 = d9.value !== null ? r4.value[d9.value] : null, n6 = O(t8(r4.value.slice()), (v4) => o3(v4.dataRef.domRef)), s7 = a5 ? n6.indexOf(a5) : null;
    return s7 === -1 && (s7 = null), { items: n6, activeItemIndex: s7 };
  }
  let l4 = { menuState: I2, buttonRef: p3, itemsRef: e3, items: r4, searchQuery: f5, activeItemIndex: d9, activationTrigger: g5, closeMenu: () => {
    I2.value = 1, d9.value = null;
  }, openMenu: () => I2.value = 0, goToItem(t8, a5, n6) {
    let s7 = b2(), v4 = f2(t8 === c3.Specific ? { focus: c3.Specific, id: a5 } : { focus: t8 }, { resolveItems: () => s7.items, resolveActiveIndex: () => s7.activeItemIndex, resolveId: (u9) => u9.id, resolveDisabled: (u9) => u9.dataRef.disabled });
    f5.value = "", d9.value = v4, g5.value = n6 != null ? n6 : 1, r4.value = s7.items;
  }, search(t8) {
    let n6 = f5.value !== "" ? 0 : 1;
    f5.value += t8.toLowerCase();
    let v4 = (d9.value !== null ? r4.value.slice(d9.value + n6).concat(r4.value.slice(0, d9.value + n6)) : r4.value).find((h3) => h3.dataRef.textValue.startsWith(f5.value) && !h3.dataRef.disabled), u9 = v4 ? r4.value.indexOf(v4) : -1;
    u9 === -1 || u9 === d9.value || (d9.value = u9, g5.value = 1);
  }, clearSearch() {
    f5.value = "";
  }, registerItem(t8, a5) {
    let n6 = b2((s7) => [...s7, { id: t8, dataRef: a5 }]);
    r4.value = n6.items, d9.value = n6.activeItemIndex, g5.value = 1;
  }, unregisterItem(t8) {
    let a5 = b2((n6) => {
      let s7 = n6.findIndex((v4) => v4.id === t8);
      return s7 !== -1 && n6.splice(s7, 1), n6;
    });
    r4.value = a5.items, d9.value = a5.activeItemIndex, g5.value = 1;
  } };
  return w3([p3, e3], (t8, a5) => {
    var n6;
    l4.closeMenu(), w(a5, h2.Loose) || (t8.preventDefault(), (n6 = o3(p3)) == null || n6.focus());
  }, computed(() => I2.value === 0)), provide(A5, l4), t4(computed(() => u(I2.value, { [0]: i7.Open, [1]: i7.Closed }))), () => {
    let t8 = { open: I2.value === 0, close: l4.closeMenu };
    return A({ ourProps: {}, theirProps: o7, slot: t8, slots: M2, attrs: i9, name: "Menu" });
  };
} });
var Se = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o7, { attrs: M2, slots: i9, expose: I2 }) {
  var b2;
  let p3 = (b2 = o7.id) != null ? b2 : `headlessui-menu-button-${i2()}`, e3 = O3("MenuButton");
  I2({ el: e3.buttonRef, $el: e3.buttonRef });
  function r4(l4) {
    switch (l4.key) {
      case o4.Space:
      case o4.Enter:
      case o4.ArrowDown:
        l4.preventDefault(), l4.stopPropagation(), e3.openMenu(), nextTick(() => {
          var t8;
          (t8 = o3(e3.itemsRef)) == null || t8.focus({ preventScroll: true }), e3.goToItem(c3.First);
        });
        break;
      case o4.ArrowUp:
        l4.preventDefault(), l4.stopPropagation(), e3.openMenu(), nextTick(() => {
          var t8;
          (t8 = o3(e3.itemsRef)) == null || t8.focus({ preventScroll: true }), e3.goToItem(c3.Last);
        });
        break;
    }
  }
  function f5(l4) {
    switch (l4.key) {
      case o4.Space:
        l4.preventDefault();
        break;
    }
  }
  function d9(l4) {
    o7.disabled || (e3.menuState.value === 0 ? (e3.closeMenu(), nextTick(() => {
      var t8;
      return (t8 = o3(e3.buttonRef)) == null ? void 0 : t8.focus({ preventScroll: true });
    })) : (l4.preventDefault(), e3.openMenu(), te(() => {
      var t8;
      return (t8 = o3(e3.itemsRef)) == null ? void 0 : t8.focus({ preventScroll: true });
    })));
  }
  let g5 = s3(computed(() => ({ as: o7.as, type: M2.type })), e3.buttonRef);
  return () => {
    var n6;
    let l4 = { open: e3.menuState.value === 0 }, { ...t8 } = o7, a5 = { ref: e3.buttonRef, id: p3, type: g5.value, "aria-haspopup": "menu", "aria-controls": (n6 = o3(e3.itemsRef)) == null ? void 0 : n6.id, "aria-expanded": e3.menuState.value === 0, onKeydown: r4, onKeyup: f5, onClick: d9 };
    return A({ ourProps: a5, theirProps: t8, slot: l4, attrs: M2, slots: i9, name: "MenuButton" });
  };
} });
var Me = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o7, { attrs: M2, slots: i9, expose: I2 }) {
  var l4;
  let p3 = (l4 = o7.id) != null ? l4 : `headlessui-menu-items-${i2()}`, e3 = O3("MenuItems"), r4 = ref(null);
  I2({ el: e3.itemsRef, $el: e3.itemsRef }), i6({ container: computed(() => o3(e3.itemsRef)), enabled: computed(() => e3.menuState.value === 0), accept(t8) {
    return t8.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t8.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t8) {
    t8.setAttribute("role", "none");
  } });
  function f5(t8) {
    var a5;
    switch (r4.value && clearTimeout(r4.value), t8.key) {
      case o4.Space:
        if (e3.searchQuery.value !== "") return t8.preventDefault(), t8.stopPropagation(), e3.search(t8.key);
      case o4.Enter:
        if (t8.preventDefault(), t8.stopPropagation(), e3.activeItemIndex.value !== null) {
          let s7 = e3.items.value[e3.activeItemIndex.value];
          (a5 = o3(s7.dataRef.domRef)) == null || a5.click();
        }
        e3.closeMenu(), _(o3(e3.buttonRef));
        break;
      case o4.ArrowDown:
        return t8.preventDefault(), t8.stopPropagation(), e3.goToItem(c3.Next);
      case o4.ArrowUp:
        return t8.preventDefault(), t8.stopPropagation(), e3.goToItem(c3.Previous);
      case o4.Home:
      case o4.PageUp:
        return t8.preventDefault(), t8.stopPropagation(), e3.goToItem(c3.First);
      case o4.End:
      case o4.PageDown:
        return t8.preventDefault(), t8.stopPropagation(), e3.goToItem(c3.Last);
      case o4.Escape:
        t8.preventDefault(), t8.stopPropagation(), e3.closeMenu(), nextTick(() => {
          var n6;
          return (n6 = o3(e3.buttonRef)) == null ? void 0 : n6.focus({ preventScroll: true });
        });
        break;
      case o4.Tab:
        t8.preventDefault(), t8.stopPropagation(), e3.closeMenu(), nextTick(() => v(o3(e3.buttonRef), t8.shiftKey ? N.Previous : N.Next));
        break;
      default:
        t8.key.length === 1 && (e3.search(t8.key), r4.value = setTimeout(() => e3.clearSearch(), 350));
        break;
    }
  }
  function d9(t8) {
    switch (t8.key) {
      case o4.Space:
        t8.preventDefault();
        break;
    }
  }
  let g5 = l(), b2 = computed(() => g5 !== null ? (g5.value & i7.Open) === i7.Open : e3.menuState.value === 0);
  return () => {
    var s7, v4;
    let t8 = { open: e3.menuState.value === 0 }, { ...a5 } = o7, n6 = { "aria-activedescendant": e3.activeItemIndex.value === null || (s7 = e3.items.value[e3.activeItemIndex.value]) == null ? void 0 : s7.id, "aria-labelledby": (v4 = o3(e3.buttonRef)) == null ? void 0 : v4.id, id: p3, onKeydown: f5, onKeyup: d9, role: "menu", tabIndex: 0, ref: e3.itemsRef };
    return A({ ourProps: n6, theirProps: a5, slot: t8, attrs: M2, slots: i9, features: N2.RenderStrategy | N2.Static, visible: b2.value, name: "MenuItems" });
  };
} });
var be2 = defineComponent({ name: "MenuItem", inheritAttrs: false, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o7, { slots: M2, attrs: i9, expose: I2 }) {
  var v4;
  let p3 = (v4 = o7.id) != null ? v4 : `headlessui-menu-item-${i2()}`, e3 = O3("MenuItem"), r4 = ref(null);
  I2({ el: r4, $el: r4 });
  let f5 = computed(() => e3.activeItemIndex.value !== null ? e3.items.value[e3.activeItemIndex.value].id === p3 : false), d9 = p2(r4), g5 = computed(() => ({ disabled: o7.disabled, get textValue() {
    return d9();
  }, domRef: r4 }));
  onMounted(() => e3.registerItem(p3, g5)), onUnmounted(() => e3.unregisterItem(p3)), watchEffect(() => {
    e3.menuState.value === 0 && f5.value && e3.activationTrigger.value !== 0 && nextTick(() => {
      var u9, h3;
      return (h3 = (u9 = o3(r4)) == null ? void 0 : u9.scrollIntoView) == null ? void 0 : h3.call(u9, { block: "nearest" });
    });
  });
  function b2(u9) {
    if (o7.disabled) return u9.preventDefault();
    e3.closeMenu(), _(o3(e3.buttonRef));
  }
  function l4() {
    if (o7.disabled) return e3.goToItem(c3.Nothing);
    e3.goToItem(c3.Specific, p3);
  }
  let t8 = u3();
  function a5(u9) {
    t8.update(u9);
  }
  function n6(u9) {
    t8.wasMoved(u9) && (o7.disabled || f5.value || e3.goToItem(c3.Specific, p3, 0));
  }
  function s7(u9) {
    t8.wasMoved(u9) && (o7.disabled || f5.value && e3.goToItem(c3.Nothing));
  }
  return () => {
    let { disabled: u9, ...h3 } = o7, C3 = { active: f5.value, disabled: u9, close: e3.closeMenu };
    return A({ ourProps: { id: p3, ref: r4, role: "menuitem", tabIndex: u9 === true ? void 0 : -1, "aria-disabled": u9 === true ? true : void 0, onClick: b2, onFocus: l4, onPointerenter: a5, onMouseenter: a5, onPointermove: n6, onMousemove: n6, onPointerleave: s7, onMouseleave: s7 }, theirProps: { ...i9, ...h3 }, slot: C3, attrs: i9, slots: M2, name: "MenuItem" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/popover/popover.js
var Se2 = ((s7) => (s7[s7.Open = 0] = "Open", s7[s7.Closed = 1] = "Closed", s7))(Se2 || {});
var re = Symbol("PopoverContext");
function U3(d9) {
  let P2 = inject(re, null);
  if (P2 === null) {
    let s7 = new Error(`<${d9} /> is missing a parent <${ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s7, U3), s7;
  }
  return P2;
}
var le = Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
var ue2 = Symbol("PopoverPanelContext");
function ge2() {
  return inject(ue2, null);
}
var ye = defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d9, { slots: P2, attrs: s7, expose: h3 }) {
  var u9;
  let f5 = ref(null);
  h3({ el: f5, $el: f5 });
  let t8 = ref(1), o7 = ref(null), y4 = ref(null), v4 = ref(null), m4 = ref(null), b2 = computed(() => i4(f5)), E6 = computed(() => {
    var L3, $5;
    if (!o3(o7) || !o3(m4)) return false;
    for (let x2 of document.querySelectorAll("body > *")) if (Number(x2 == null ? void 0 : x2.contains(o3(o7))) ^ Number(x2 == null ? void 0 : x2.contains(o3(m4)))) return true;
    let e3 = E(), r4 = e3.indexOf(o3(o7)), l4 = (r4 + e3.length - 1) % e3.length, g5 = (r4 + 1) % e3.length, G2 = e3[l4], C3 = e3[g5];
    return !((L3 = o3(m4)) != null && L3.contains(G2)) && !(($5 = o3(m4)) != null && $5.contains(C3));
  }), a5 = { popoverState: t8, buttonId: ref(null), panelId: ref(null), panel: m4, button: o7, isPortalled: E6, beforePanelSentinel: y4, afterPanelSentinel: v4, togglePopover() {
    t8.value = u(t8.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    t8.value !== 1 && (t8.value = 1);
  }, close(e3) {
    a5.closePopover();
    let r4 = (() => e3 ? e3 instanceof HTMLElement ? e3 : e3.value instanceof HTMLElement ? o3(e3) : o3(a5.button) : o3(a5.button))();
    r4 == null || r4.focus();
  } };
  provide(re, a5), t4(computed(() => u(t8.value, { [0]: i7.Open, [1]: i7.Closed })));
  let S3 = { buttonId: a5.buttonId, panelId: a5.panelId, close() {
    a5.closePopover();
  } }, c5 = ae(), I2 = c5 == null ? void 0 : c5.registerPopover, [F3, w6] = q(), i9 = N4({ mainTreeNodeRef: c5 == null ? void 0 : c5.mainTreeNodeRef, portals: F3, defaultContainers: [o7, m4] });
  function p3() {
    var e3, r4, l4, g5;
    return (g5 = c5 == null ? void 0 : c5.isFocusWithinPopoverGroup()) != null ? g5 : ((e3 = b2.value) == null ? void 0 : e3.activeElement) && (((r4 = o3(o7)) == null ? void 0 : r4.contains(b2.value.activeElement)) || ((l4 = o3(m4)) == null ? void 0 : l4.contains(b2.value.activeElement)));
  }
  return watchEffect(() => I2 == null ? void 0 : I2(S3)), E3((u9 = b2.value) == null ? void 0 : u9.defaultView, "focus", (e3) => {
    var r4, l4;
    e3.target !== window && e3.target instanceof HTMLElement && t8.value === 0 && (p3() || o7 && m4 && (i9.contains(e3.target) || (r4 = o3(a5.beforePanelSentinel)) != null && r4.contains(e3.target) || (l4 = o3(a5.afterPanelSentinel)) != null && l4.contains(e3.target) || a5.closePopover()));
  }, true), w3(i9.resolveContainers, (e3, r4) => {
    var l4;
    a5.closePopover(), w(r4, h2.Loose) || (e3.preventDefault(), (l4 = o3(o7)) == null || l4.focus());
  }, computed(() => t8.value === 0)), () => {
    let e3 = { open: t8.value === 0, close: a5.close };
    return h(Fragment, [h(w6, {}, () => A({ theirProps: { ...d9, ...s7 }, ourProps: { ref: f5 }, slot: e3, slots: P2, attrs: s7, name: "Popover" })), h(i9.MainTreeNode)]);
  };
} });
var Ge2 = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d9, { attrs: P2, slots: s7, expose: h3 }) {
  var u9;
  let f5 = (u9 = d9.id) != null ? u9 : `headlessui-popover-button-${i2()}`, t8 = U3("PopoverButton"), o7 = computed(() => i4(t8.button));
  h3({ el: t8.button, $el: t8.button }), onMounted(() => {
    t8.buttonId.value = f5;
  }), onUnmounted(() => {
    t8.buttonId.value = null;
  });
  let y4 = ae(), v4 = y4 == null ? void 0 : y4.closeOthers, m4 = ge2(), b2 = computed(() => m4 === null ? false : m4.value === t8.panelId.value), E6 = ref(null), a5 = `headlessui-focus-sentinel-${i2()}`;
  b2.value || watchEffect(() => {
    t8.button.value = o3(E6);
  });
  let S3 = s3(computed(() => ({ as: d9.as, type: P2.type })), E6);
  function c5(e3) {
    var r4, l4, g5, G2, C3;
    if (b2.value) {
      if (t8.popoverState.value === 1) return;
      switch (e3.key) {
        case o4.Space:
        case o4.Enter:
          e3.preventDefault(), (l4 = (r4 = e3.target).click) == null || l4.call(r4), t8.closePopover(), (g5 = o3(t8.button)) == null || g5.focus();
          break;
      }
    } else switch (e3.key) {
      case o4.Space:
      case o4.Enter:
        e3.preventDefault(), e3.stopPropagation(), t8.popoverState.value === 1 && (v4 == null || v4(t8.buttonId.value)), t8.togglePopover();
        break;
      case o4.Escape:
        if (t8.popoverState.value !== 0) return v4 == null ? void 0 : v4(t8.buttonId.value);
        if (!o3(t8.button) || (G2 = o7.value) != null && G2.activeElement && !((C3 = o3(t8.button)) != null && C3.contains(o7.value.activeElement))) return;
        e3.preventDefault(), e3.stopPropagation(), t8.closePopover();
        break;
    }
  }
  function I2(e3) {
    b2.value || e3.key === o4.Space && e3.preventDefault();
  }
  function F3(e3) {
    var r4, l4;
    d9.disabled || (b2.value ? (t8.closePopover(), (r4 = o3(t8.button)) == null || r4.focus()) : (e3.preventDefault(), e3.stopPropagation(), t8.popoverState.value === 1 && (v4 == null || v4(t8.buttonId.value)), t8.togglePopover(), (l4 = o3(t8.button)) == null || l4.focus()));
  }
  function w6(e3) {
    e3.preventDefault(), e3.stopPropagation();
  }
  let i9 = n5();
  function p3() {
    let e3 = o3(t8.panel);
    if (!e3) return;
    function r4() {
      u(i9.value, { [d3.Forwards]: () => P(e3, N.First), [d3.Backwards]: () => P(e3, N.Last) }) === T.Error && P(E().filter((g5) => g5.dataset.headlessuiFocusGuard !== "true"), u(i9.value, { [d3.Forwards]: N.Next, [d3.Backwards]: N.Previous }), { relativeTo: o3(t8.button) });
    }
    r4();
  }
  return () => {
    let e3 = t8.popoverState.value === 0, r4 = { open: e3 }, { ...l4 } = d9, g5 = b2.value ? { ref: E6, type: S3.value, onKeydown: c5, onClick: F3 } : { ref: E6, id: f5, type: S3.value, "aria-expanded": t8.popoverState.value === 0, "aria-controls": o3(t8.panel) ? t8.panelId.value : void 0, disabled: d9.disabled ? true : void 0, onKeydown: c5, onKeyup: I2, onClick: F3, onMousedown: w6 };
    return h(Fragment, [A({ ourProps: g5, theirProps: { ...P2, ...l4 }, slot: r4, attrs: P2, slots: s7, name: "PopoverButton" }), e3 && !b2.value && t8.isPortalled.value && h(f, { id: a5, features: u4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: p3 })]);
  };
} });
var $e = defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(d9, { attrs: P2, slots: s7 }) {
  let h3 = U3("PopoverOverlay"), f5 = `headlessui-popover-overlay-${i2()}`, t8 = l(), o7 = computed(() => t8 !== null ? (t8.value & i7.Open) === i7.Open : h3.popoverState.value === 0);
  function y4() {
    h3.closePopover();
  }
  return () => {
    let v4 = { open: h3.popoverState.value === 0 };
    return A({ ourProps: { id: f5, "aria-hidden": true, onClick: y4 }, theirProps: d9, slot: v4, attrs: P2, slots: s7, features: N2.RenderStrategy | N2.Static, visible: o7.value, name: "PopoverOverlay" });
  };
} });
var je2 = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: null } }, inheritAttrs: false, setup(d9, { attrs: P2, slots: s7, expose: h3 }) {
  var w6;
  let f5 = (w6 = d9.id) != null ? w6 : `headlessui-popover-panel-${i2()}`, { focus: t8 } = d9, o7 = U3("PopoverPanel"), y4 = computed(() => i4(o7.panel)), v4 = `headlessui-focus-sentinel-before-${i2()}`, m4 = `headlessui-focus-sentinel-after-${i2()}`;
  h3({ el: o7.panel, $el: o7.panel }), onMounted(() => {
    o7.panelId.value = f5;
  }), onUnmounted(() => {
    o7.panelId.value = null;
  }), provide(ue2, o7.panelId), watchEffect(() => {
    var p3, u9;
    if (!t8 || o7.popoverState.value !== 0 || !o7.panel) return;
    let i9 = (p3 = y4.value) == null ? void 0 : p3.activeElement;
    (u9 = o3(o7.panel)) != null && u9.contains(i9) || P(o3(o7.panel), N.First);
  });
  let b2 = l(), E6 = computed(() => b2 !== null ? (b2.value & i7.Open) === i7.Open : o7.popoverState.value === 0);
  function a5(i9) {
    var p3, u9;
    switch (i9.key) {
      case o4.Escape:
        if (o7.popoverState.value !== 0 || !o3(o7.panel) || y4.value && !((p3 = o3(o7.panel)) != null && p3.contains(y4.value.activeElement))) return;
        i9.preventDefault(), i9.stopPropagation(), o7.closePopover(), (u9 = o3(o7.button)) == null || u9.focus();
        break;
    }
  }
  function S3(i9) {
    var u9, e3, r4, l4, g5;
    let p3 = i9.relatedTarget;
    p3 && o3(o7.panel) && ((u9 = o3(o7.panel)) != null && u9.contains(p3) || (o7.closePopover(), ((r4 = (e3 = o3(o7.beforePanelSentinel)) == null ? void 0 : e3.contains) != null && r4.call(e3, p3) || (g5 = (l4 = o3(o7.afterPanelSentinel)) == null ? void 0 : l4.contains) != null && g5.call(l4, p3)) && p3.focus({ preventScroll: true })));
  }
  let c5 = n5();
  function I2() {
    let i9 = o3(o7.panel);
    if (!i9) return;
    function p3() {
      u(c5.value, { [d3.Forwards]: () => {
        var e3;
        P(i9, N.First) === T.Error && ((e3 = o3(o7.afterPanelSentinel)) == null || e3.focus());
      }, [d3.Backwards]: () => {
        var u9;
        (u9 = o3(o7.button)) == null || u9.focus({ preventScroll: true });
      } });
    }
    p3();
  }
  function F3() {
    let i9 = o3(o7.panel);
    if (!i9) return;
    function p3() {
      u(c5.value, { [d3.Forwards]: () => {
        let u9 = o3(o7.button), e3 = o3(o7.panel);
        if (!u9) return;
        let r4 = E(), l4 = r4.indexOf(u9), g5 = r4.slice(0, l4 + 1), C3 = [...r4.slice(l4 + 1), ...g5];
        for (let L3 of C3.slice()) if (L3.dataset.headlessuiFocusGuard === "true" || e3 != null && e3.contains(L3)) {
          let $5 = C3.indexOf(L3);
          $5 !== -1 && C3.splice($5, 1);
        }
        P(C3, N.First, { sorted: false });
      }, [d3.Backwards]: () => {
        var e3;
        P(i9, N.Previous) === T.Error && ((e3 = o3(o7.button)) == null || e3.focus());
      } });
    }
    p3();
  }
  return () => {
    let i9 = { open: o7.popoverState.value === 0, close: o7.close }, { focus: p3, ...u9 } = d9, e3 = { ref: o7.panel, id: f5, onKeydown: a5, onFocusout: t8 && o7.popoverState.value === 0 ? S3 : void 0, tabIndex: -1 };
    return A({ ourProps: e3, theirProps: { ...P2, ...u9 }, attrs: P2, slot: i9, slots: { ...s7, default: (...r4) => {
      var l4;
      return [h(Fragment, [E6.value && o7.isPortalled.value && h(f, { id: v4, ref: o7.beforePanelSentinel, features: u4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I2 }), (l4 = s7.default) == null ? void 0 : l4.call(s7, ...r4), E6.value && o7.isPortalled.value && h(f, { id: m4, ref: o7.afterPanelSentinel, features: u4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: F3 })])];
    } }, features: N2.RenderStrategy | N2.Static, visible: E6.value, name: "PopoverPanel" });
  };
} });
var Ae3 = defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(d9, { attrs: P2, slots: s7, expose: h3 }) {
  let f5 = ref(null), t8 = shallowRef([]), o7 = computed(() => i4(f5)), y4 = v3();
  h3({ el: f5, $el: f5 });
  function v4(a5) {
    let S3 = t8.value.indexOf(a5);
    S3 !== -1 && t8.value.splice(S3, 1);
  }
  function m4(a5) {
    return t8.value.push(a5), () => {
      v4(a5);
    };
  }
  function b2() {
    var c5;
    let a5 = o7.value;
    if (!a5) return false;
    let S3 = a5.activeElement;
    return (c5 = o3(f5)) != null && c5.contains(S3) ? true : t8.value.some((I2) => {
      var F3, w6;
      return ((F3 = a5.getElementById(I2.buttonId.value)) == null ? void 0 : F3.contains(S3)) || ((w6 = a5.getElementById(I2.panelId.value)) == null ? void 0 : w6.contains(S3));
    });
  }
  function E6(a5) {
    for (let S3 of t8.value) S3.buttonId.value !== a5 && S3.close();
  }
  return provide(le, { registerPopover: m4, unregisterPopover: v4, isFocusWithinPopoverGroup: b2, closeOthers: E6, mainTreeNodeRef: y4.mainTreeNodeRef }), () => h(Fragment, [A({ ourProps: { ref: f5 }, theirProps: { ...d9, ...P2 }, slot: {}, attrs: P2, slots: s7, name: "PopoverGroup" }), h(y4.MainTreeNode)]);
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/label/label.js
var a4 = Symbol("LabelContext");
function d6() {
  let t8 = inject(a4, null);
  if (t8 === null) {
    let n6 = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n6, d6), n6;
  }
  return t8;
}
function E5({ slot: t8 = {}, name: n6 = "Label", props: i9 = {} } = {}) {
  let e3 = ref([]);
  function o7(r4) {
    return e3.value.push(r4), () => {
      let l4 = e3.value.indexOf(r4);
      l4 !== -1 && e3.value.splice(l4, 1);
    };
  }
  return provide(a4, { register: o7, slot: t8, name: n6, props: i9 }), computed(() => e3.value.length > 0 ? e3.value.join(" ") : void 0);
}
var K3 = defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t8, { slots: n6, attrs: i9 }) {
  var r4;
  let e3 = (r4 = t8.id) != null ? r4 : `headlessui-label-${i2()}`, o7 = d6();
  return onMounted(() => onUnmounted(o7.register(e3))), () => {
    let { name: l4 = "Label", slot: p3 = {}, props: c5 = {} } = o7, { passive: f5, ...s7 } = t8, u9 = { ...Object.entries(c5).reduce((b2, [g5, m4]) => Object.assign(b2, { [g5]: unref(m4) }), {}), id: e3 };
    return f5 && (delete u9.onClick, delete u9.htmlFor, delete s7.onClick), A({ ourProps: u9, theirProps: s7, slot: p3, attrs: i9, slots: n6, name: l4 });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js
function le2(t8, m4) {
  return t8 === m4;
}
var H4 = Symbol("RadioGroupContext");
function N6(t8) {
  let m4 = inject(H4, null);
  if (m4 === null) {
    let u9 = new Error(`<${t8} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u9, N6), u9;
  }
  return m4;
}
var he = defineComponent({ name: "RadioGroup", emits: { "update:modelValue": (t8) => true }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => le2 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, id: { type: String, default: null } }, inheritAttrs: false, setup(t8, { emit: m4, attrs: u9, slots: S3, expose: g5 }) {
  var O4;
  let d9 = (O4 = t8.id) != null ? O4 : `headlessui-radiogroup-${i2()}`, p3 = ref(null), l4 = ref([]), R3 = E5({ name: "RadioGroupLabel" }), T5 = k({ name: "RadioGroupDescription" });
  g5({ el: p3, $el: p3 });
  let [f5, G2] = d(computed(() => t8.modelValue), (e3) => m4("update:modelValue", e3), computed(() => t8.defaultValue)), s7 = { options: l4, value: f5, disabled: computed(() => t8.disabled), firstOption: computed(() => l4.value.find((e3) => !e3.propsRef.disabled)), containsCheckedOption: computed(() => l4.value.some((e3) => s7.compare(toRaw(e3.propsRef.value), toRaw(t8.modelValue)))), compare(e3, a5) {
    if (typeof t8.by == "string") {
      let n6 = t8.by;
      return (e3 == null ? void 0 : e3[n6]) === (a5 == null ? void 0 : a5[n6]);
    }
    return t8.by(e3, a5);
  }, change(e3) {
    var n6;
    if (t8.disabled || s7.compare(toRaw(f5.value), toRaw(e3))) return false;
    let a5 = (n6 = l4.value.find((i9) => s7.compare(toRaw(i9.propsRef.value), toRaw(e3)))) == null ? void 0 : n6.propsRef;
    return a5 != null && a5.disabled ? false : (G2(e3), true);
  }, registerOption(e3) {
    l4.value.push(e3), l4.value = O(l4.value, (a5) => a5.element);
  }, unregisterOption(e3) {
    let a5 = l4.value.findIndex((n6) => n6.id === e3);
    a5 !== -1 && l4.value.splice(a5, 1);
  } };
  provide(H4, s7), i6({ container: computed(() => o3(p3)), accept(e3) {
    return e3.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e3) {
    e3.setAttribute("role", "none");
  } });
  function v4(e3) {
    if (!p3.value || !p3.value.contains(e3.target)) return;
    let a5 = l4.value.filter((n6) => n6.propsRef.disabled === false).map((n6) => n6.element);
    switch (e3.key) {
      case o4.Enter:
        p(e3.currentTarget);
        break;
      case o4.ArrowLeft:
      case o4.ArrowUp:
        if (e3.preventDefault(), e3.stopPropagation(), P(a5, N.Previous | N.WrapAround) === T.Success) {
          let i9 = l4.value.find((r4) => {
            var c5;
            return r4.element === ((c5 = i4(p3)) == null ? void 0 : c5.activeElement);
          });
          i9 && s7.change(i9.propsRef.value);
        }
        break;
      case o4.ArrowRight:
      case o4.ArrowDown:
        if (e3.preventDefault(), e3.stopPropagation(), P(a5, N.Next | N.WrapAround) === T.Success) {
          let i9 = l4.value.find((r4) => {
            var c5;
            return r4.element === ((c5 = i4(r4.element)) == null ? void 0 : c5.activeElement);
          });
          i9 && s7.change(i9.propsRef.value);
        }
        break;
      case o4.Space:
        {
          e3.preventDefault(), e3.stopPropagation();
          let n6 = l4.value.find((i9) => {
            var r4;
            return i9.element === ((r4 = i4(i9.element)) == null ? void 0 : r4.activeElement);
          });
          n6 && s7.change(n6.propsRef.value);
        }
        break;
    }
  }
  let b2 = computed(() => {
    var e3;
    return (e3 = o3(p3)) == null ? void 0 : e3.closest("form");
  });
  return onMounted(() => {
    watch([b2], () => {
      if (!b2.value || t8.defaultValue === void 0) return;
      function e3() {
        s7.change(t8.defaultValue);
      }
      return b2.value.addEventListener("reset", e3), () => {
        var a5;
        (a5 = b2.value) == null || a5.removeEventListener("reset", e3);
      };
    }, { immediate: true });
  }), () => {
    let { disabled: e3, name: a5, form: n6, ...i9 } = t8, r4 = { ref: p3, id: d9, role: "radiogroup", "aria-labelledby": R3.value, "aria-describedby": T5.value, onKeydown: v4 };
    return h(Fragment, [...a5 != null && f5.value != null ? e({ [a5]: f5.value }).map(([c5, L3]) => h(f, E2({ features: u4.Hidden, key: c5, as: "input", type: "hidden", hidden: true, readOnly: true, form: n6, disabled: e3, name: c5, value: L3 }))) : [], A({ ourProps: r4, theirProps: { ...u9, ...T2(i9, ["modelValue", "defaultValue", "by"]) }, slot: {}, attrs: u9, slots: S3, name: "RadioGroup" })]);
  };
} });
var ie2 = ((u9) => (u9[u9.Empty = 1] = "Empty", u9[u9.Active = 2] = "Active", u9))(ie2 || {});
var Oe = defineComponent({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(t8, { attrs: m4, slots: u9, expose: S3 }) {
  var i9;
  let g5 = (i9 = t8.id) != null ? i9 : `headlessui-radiogroup-option-${i2()}`, d9 = N6("RadioGroupOption"), p3 = E5({ name: "RadioGroupLabel" }), l4 = k({ name: "RadioGroupDescription" }), R3 = ref(null), T5 = computed(() => ({ value: t8.value, disabled: t8.disabled })), f5 = ref(1);
  S3({ el: R3, $el: R3 });
  let G2 = computed(() => o3(R3));
  onMounted(() => d9.registerOption({ id: g5, element: G2, propsRef: T5 })), onUnmounted(() => d9.unregisterOption(g5));
  let s7 = computed(() => {
    var r4;
    return ((r4 = d9.firstOption.value) == null ? void 0 : r4.id) === g5;
  }), v4 = computed(() => d9.disabled.value || t8.disabled), b2 = computed(() => d9.compare(toRaw(d9.value.value), toRaw(t8.value))), O4 = computed(() => v4.value ? -1 : b2.value || !d9.containsCheckedOption.value && s7.value ? 0 : -1);
  function e3() {
    var r4;
    d9.change(t8.value) && (f5.value |= 2, (r4 = o3(R3)) == null || r4.focus());
  }
  function a5() {
    f5.value |= 2;
  }
  function n6() {
    f5.value &= -3;
  }
  return () => {
    let { value: r4, disabled: c5, ...L3 } = t8, K4 = { checked: b2.value, disabled: v4.value, active: Boolean(f5.value & 2) }, M2 = { id: g5, ref: R3, role: "radio", "aria-checked": b2.value ? "true" : "false", "aria-labelledby": p3.value, "aria-describedby": l4.value, "aria-disabled": v4.value ? true : void 0, tabIndex: O4.value, onClick: v4.value ? void 0 : e3, onFocus: v4.value ? void 0 : a5, onBlur: v4.value ? void 0 : n6 };
    return A({ ourProps: M2, theirProps: L3, slot: K4, attrs: m4, slots: u9, name: "RadioGroupOption" });
  };
} });
var ke2 = K3;
var Ee3 = K2;

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/switch/switch.js
var C = Symbol("GroupContext");
var oe = defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l4, { slots: c5, attrs: i9 }) {
  let r4 = ref(null), f5 = E5({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var t8;
    return (t8 = r4.value) == null ? void 0 : t8.id;
  }), onClick(t8) {
    r4.value && (t8.currentTarget.tagName === "LABEL" && t8.preventDefault(), r4.value.click(), r4.value.focus({ preventScroll: true }));
  } } }), p3 = k({ name: "SwitchDescription" });
  return provide(C, { switchRef: r4, labelledby: f5, describedby: p3 }), () => A({ theirProps: l4, ourProps: {}, slot: {}, slots: c5, attrs: i9, name: "SwitchGroup" });
} });
var ue3 = defineComponent({ name: "Switch", emits: { "update:modelValue": (l4) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: null }, disabled: { type: Boolean, default: false }, tabIndex: { type: Number, default: 0 } }, inheritAttrs: false, setup(l4, { emit: c5, attrs: i9, slots: r4, expose: f5 }) {
  var h3;
  let p3 = (h3 = l4.id) != null ? h3 : `headlessui-switch-${i2()}`, n6 = inject(C, null), [t8, s7] = d(computed(() => l4.modelValue), (e3) => c5("update:modelValue", e3), computed(() => l4.defaultChecked));
  function m4() {
    s7(!t8.value);
  }
  let E6 = ref(null), o7 = n6 === null ? E6 : n6.switchRef, L3 = s3(computed(() => ({ as: l4.as, type: i9.type })), o7);
  f5({ el: o7, $el: o7 });
  function D(e3) {
    e3.preventDefault(), m4();
  }
  function R3(e3) {
    e3.key === o4.Space ? (e3.preventDefault(), m4()) : e3.key === o4.Enter && p(e3.currentTarget);
  }
  function x2(e3) {
    e3.preventDefault();
  }
  let d9 = computed(() => {
    var e3, a5;
    return (a5 = (e3 = o3(o7)) == null ? void 0 : e3.closest) == null ? void 0 : a5.call(e3, "form");
  });
  return onMounted(() => {
    watch([d9], () => {
      if (!d9.value || l4.defaultChecked === void 0) return;
      function e3() {
        s7(l4.defaultChecked);
      }
      return d9.value.addEventListener("reset", e3), () => {
        var a5;
        (a5 = d9.value) == null || a5.removeEventListener("reset", e3);
      };
    }, { immediate: true });
  }), () => {
    let { name: e3, value: a5, form: K4, tabIndex: y4, ...b2 } = l4, T5 = { checked: t8.value }, B2 = { id: p3, ref: o7, role: "switch", type: L3.value, tabIndex: y4 === -1 ? 0 : y4, "aria-checked": t8.value, "aria-labelledby": n6 == null ? void 0 : n6.labelledby.value, "aria-describedby": n6 == null ? void 0 : n6.describedby.value, onClick: D, onKeyup: R3, onKeypress: x2 };
    return h(Fragment, [e3 != null && t8.value != null ? h(f, E2({ features: u4.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: t8.value, form: K4, disabled: b2.disabled, name: e3, value: a5 })) : null, A({ ourProps: B2, theirProps: { ...i9, ...T2(b2, ["modelValue", "defaultChecked"]) }, slot: T5, attrs: i9, slots: r4, name: "Switch" })]);
  };
} });
var de = K3;
var ce2 = K2;

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/internal/focus-sentinel.js
var d7 = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t8) {
  let n6 = ref(true);
  return () => n6.value ? h(f, { as: "button", type: "button", features: u4.Focusable, onFocus(o7) {
    o7.preventDefault();
    let e3, a5 = 50;
    function r4() {
      var u9;
      if (a5-- <= 0) {
        e3 && cancelAnimationFrame(e3);
        return;
      }
      if ((u9 = t8.onFocus) != null && u9.call(t8)) {
        n6.value = false, cancelAnimationFrame(e3);
        return;
      }
      e3 = requestAnimationFrame(r4);
    }
    e3 = requestAnimationFrame(r4);
  } }) : null;
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/tabs/tabs.js
var te2 = ((s7) => (s7[s7.Forwards = 0] = "Forwards", s7[s7.Backwards = 1] = "Backwards", s7))(te2 || {});
var le3 = ((d9) => (d9[d9.Less = -1] = "Less", d9[d9.Equal = 0] = "Equal", d9[d9.Greater = 1] = "Greater", d9))(le3 || {});
var U4 = Symbol("TabsContext");
function C2(a5) {
  let b2 = inject(U4, null);
  if (b2 === null) {
    let s7 = new Error(`<${a5} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s7, C2), s7;
  }
  return b2;
}
var G = Symbol("TabsSSRContext");
var me2 = defineComponent({ name: "TabGroup", emits: { change: (a5) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a5, { slots: b2, attrs: s7, emit: d9 }) {
  var E6;
  let i9 = ref((E6 = a5.selectedIndex) != null ? E6 : a5.defaultIndex), l4 = ref([]), r4 = ref([]), p3 = computed(() => a5.selectedIndex !== null), R3 = computed(() => p3.value ? a5.selectedIndex : i9.value);
  function y4(t8) {
    var c5;
    let n6 = O(u9.tabs.value, o3), o7 = O(u9.panels.value, o3), e3 = n6.filter((I2) => {
      var m4;
      return !((m4 = o3(I2)) != null && m4.hasAttribute("disabled"));
    });
    if (t8 < 0 || t8 > n6.length - 1) {
      let I2 = u(i9.value === null ? 0 : Math.sign(t8 - i9.value), { [-1]: () => 1, [0]: () => u(Math.sign(t8), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 }), m4 = u(I2, { [0]: () => n6.indexOf(e3[0]), [1]: () => n6.indexOf(e3[e3.length - 1]) });
      m4 !== -1 && (i9.value = m4), u9.tabs.value = n6, u9.panels.value = o7;
    } else {
      let I2 = n6.slice(0, t8), h3 = [...n6.slice(t8), ...I2].find((W3) => e3.includes(W3));
      if (!h3) return;
      let O4 = (c5 = n6.indexOf(h3)) != null ? c5 : u9.selectedIndex.value;
      O4 === -1 && (O4 = u9.selectedIndex.value), i9.value = O4, u9.tabs.value = n6, u9.panels.value = o7;
    }
  }
  let u9 = { selectedIndex: computed(() => {
    var t8, n6;
    return (n6 = (t8 = i9.value) != null ? t8 : a5.defaultIndex) != null ? n6 : null;
  }), orientation: computed(() => a5.vertical ? "vertical" : "horizontal"), activation: computed(() => a5.manual ? "manual" : "auto"), tabs: l4, panels: r4, setSelectedIndex(t8) {
    R3.value !== t8 && d9("change", t8), p3.value || y4(t8);
  }, registerTab(t8) {
    var o7;
    if (l4.value.includes(t8)) return;
    let n6 = l4.value[i9.value];
    if (l4.value.push(t8), l4.value = O(l4.value, o3), !p3.value) {
      let e3 = (o7 = l4.value.indexOf(n6)) != null ? o7 : i9.value;
      e3 !== -1 && (i9.value = e3);
    }
  }, unregisterTab(t8) {
    let n6 = l4.value.indexOf(t8);
    n6 !== -1 && l4.value.splice(n6, 1);
  }, registerPanel(t8) {
    r4.value.includes(t8) || (r4.value.push(t8), r4.value = O(r4.value, o3));
  }, unregisterPanel(t8) {
    let n6 = r4.value.indexOf(t8);
    n6 !== -1 && r4.value.splice(n6, 1);
  } };
  provide(U4, u9);
  let T5 = ref({ tabs: [], panels: [] }), x2 = ref(false);
  onMounted(() => {
    x2.value = true;
  }), provide(G, computed(() => x2.value ? null : T5.value));
  let w6 = computed(() => a5.selectedIndex);
  return onMounted(() => {
    watch([w6], () => {
      var t8;
      return y4((t8 = a5.selectedIndex) != null ? t8 : a5.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!p3.value || R3.value == null || u9.tabs.value.length <= 0) return;
    let t8 = O(u9.tabs.value, o3);
    t8.some((o7, e3) => o3(u9.tabs.value[e3]) !== o3(o7)) && u9.setSelectedIndex(t8.findIndex((o7) => o3(o7) === o3(u9.tabs.value[R3.value])));
  }), () => {
    let t8 = { selectedIndex: i9.value };
    return h(Fragment, [l4.value.length <= 0 && h(d7, { onFocus: () => {
      for (let n6 of l4.value) {
        let o7 = o3(n6);
        if ((o7 == null ? void 0 : o7.tabIndex) === 0) return o7.focus(), true;
      }
      return false;
    } }), A({ theirProps: { ...s7, ...T2(a5, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t8, slots: b2, attrs: s7, name: "TabGroup" })]);
  };
} });
var pe2 = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a5, { attrs: b2, slots: s7 }) {
  let d9 = C2("TabList");
  return () => {
    let i9 = { selectedIndex: d9.selectedIndex.value }, l4 = { role: "tablist", "aria-orientation": d9.orientation.value };
    return A({ ourProps: l4, theirProps: a5, slot: i9, attrs: b2, slots: s7, name: "TabList" });
  };
} });
var xe = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(a5, { attrs: b2, slots: s7, expose: d9 }) {
  var o7;
  let i9 = (o7 = a5.id) != null ? o7 : `headlessui-tabs-tab-${i2()}`, l4 = C2("Tab"), r4 = ref(null);
  d9({ el: r4, $el: r4 }), onMounted(() => l4.registerTab(r4)), onUnmounted(() => l4.unregisterTab(r4));
  let p3 = inject(G), R3 = computed(() => {
    if (p3.value) {
      let e3 = p3.value.tabs.indexOf(i9);
      return e3 === -1 ? p3.value.tabs.push(i9) - 1 : e3;
    }
    return -1;
  }), y4 = computed(() => {
    let e3 = l4.tabs.value.indexOf(r4);
    return e3 === -1 ? R3.value : e3;
  }), u9 = computed(() => y4.value === l4.selectedIndex.value);
  function T5(e3) {
    var I2;
    let c5 = e3();
    if (c5 === T.Success && l4.activation.value === "auto") {
      let m4 = (I2 = i4(r4)) == null ? void 0 : I2.activeElement, h3 = l4.tabs.value.findIndex((O4) => o3(O4) === m4);
      h3 !== -1 && l4.setSelectedIndex(h3);
    }
    return c5;
  }
  function x2(e3) {
    let c5 = l4.tabs.value.map((m4) => o3(m4)).filter(Boolean);
    if (e3.key === o4.Space || e3.key === o4.Enter) {
      e3.preventDefault(), e3.stopPropagation(), l4.setSelectedIndex(y4.value);
      return;
    }
    switch (e3.key) {
      case o4.Home:
      case o4.PageUp:
        return e3.preventDefault(), e3.stopPropagation(), T5(() => P(c5, N.First));
      case o4.End:
      case o4.PageDown:
        return e3.preventDefault(), e3.stopPropagation(), T5(() => P(c5, N.Last));
    }
    if (T5(() => u(l4.orientation.value, { vertical() {
      return e3.key === o4.ArrowUp ? P(c5, N.Previous | N.WrapAround) : e3.key === o4.ArrowDown ? P(c5, N.Next | N.WrapAround) : T.Error;
    }, horizontal() {
      return e3.key === o4.ArrowLeft ? P(c5, N.Previous | N.WrapAround) : e3.key === o4.ArrowRight ? P(c5, N.Next | N.WrapAround) : T.Error;
    } })) === T.Success) return e3.preventDefault();
  }
  let w6 = ref(false);
  function E6() {
    var e3;
    w6.value || (w6.value = true, !a5.disabled && ((e3 = o3(r4)) == null || e3.focus({ preventScroll: true }), l4.setSelectedIndex(y4.value), t(() => {
      w6.value = false;
    })));
  }
  function t8(e3) {
    e3.preventDefault();
  }
  let n6 = s3(computed(() => ({ as: a5.as, type: b2.type })), r4);
  return () => {
    var m4, h3;
    let e3 = { selected: u9.value, disabled: (m4 = a5.disabled) != null ? m4 : false }, { ...c5 } = a5, I2 = { ref: r4, onKeydown: x2, onMousedown: t8, onClick: E6, id: i9, role: "tab", type: n6.value, "aria-controls": (h3 = o3(l4.panels.value[y4.value])) == null ? void 0 : h3.id, "aria-selected": u9.value, tabIndex: u9.value ? 0 : -1, disabled: a5.disabled ? true : void 0 };
    return A({ ourProps: I2, theirProps: c5, slot: e3, attrs: b2, slots: s7, name: "Tab" });
  };
} });
var Ie2 = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a5, { slots: b2, attrs: s7 }) {
  let d9 = C2("TabPanels");
  return () => {
    let i9 = { selectedIndex: d9.selectedIndex.value };
    return A({ theirProps: a5, ourProps: {}, slot: i9, attrs: s7, slots: b2, name: "TabPanels" });
  };
} });
var ye2 = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null }, tabIndex: { type: Number, default: 0 } }, setup(a5, { attrs: b2, slots: s7, expose: d9 }) {
  var T5;
  let i9 = (T5 = a5.id) != null ? T5 : `headlessui-tabs-panel-${i2()}`, l4 = C2("TabPanel"), r4 = ref(null);
  d9({ el: r4, $el: r4 }), onMounted(() => l4.registerPanel(r4)), onUnmounted(() => l4.unregisterPanel(r4));
  let p3 = inject(G), R3 = computed(() => {
    if (p3.value) {
      let x2 = p3.value.panels.indexOf(i9);
      return x2 === -1 ? p3.value.panels.push(i9) - 1 : x2;
    }
    return -1;
  }), y4 = computed(() => {
    let x2 = l4.panels.value.indexOf(r4);
    return x2 === -1 ? R3.value : x2;
  }), u9 = computed(() => y4.value === l4.selectedIndex.value);
  return () => {
    var n6;
    let x2 = { selected: u9.value }, { tabIndex: w6, ...E6 } = a5, t8 = { ref: r4, id: i9, role: "tabpanel", "aria-labelledby": (n6 = o3(l4.tabs.value[y4.value])) == null ? void 0 : n6.id, tabIndex: u9.value ? w6 : -1 };
    return !u9.value && a5.unmount && !a5.static ? h(f, { as: "span", "aria-hidden": true, ...t8 }) : A({ ourProps: t8, theirProps: E6, slot: x2, attrs: b2, slots: s7, features: N2.Static | N2.RenderStrategy, visible: u9.value, name: "TabPanel" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/utils/once.js
function l3(r4) {
  let e3 = { called: false };
  return (...t8) => {
    if (!e3.called) return e3.called = true, r4(...t8);
  };
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/transitions/utils/transition.js
function m3(e3, ...t8) {
  e3 && t8.length > 0 && e3.classList.add(...t8);
}
function d8(e3, ...t8) {
  e3 && t8.length > 0 && e3.classList.remove(...t8);
}
var g3 = ((i9) => (i9.Finished = "finished", i9.Cancelled = "cancelled", i9))(g3 || {});
function F2(e3, t8) {
  let i9 = o();
  if (!e3) return i9.dispose;
  let { transitionDuration: n6, transitionDelay: a5 } = getComputedStyle(e3), [l4, s7] = [n6, a5].map((o7) => {
    let [u9 = 0] = o7.split(",").filter(Boolean).map((r4) => r4.includes("ms") ? parseFloat(r4) : parseFloat(r4) * 1e3).sort((r4, c5) => c5 - r4);
    return u9;
  });
  return l4 !== 0 ? i9.setTimeout(() => t8("finished"), l4 + s7) : t8("finished"), i9.add(() => t8("cancelled")), i9.dispose;
}
function L(e3, t8, i9, n6, a5, l4) {
  let s7 = o(), o7 = l4 !== void 0 ? l3(l4) : () => {
  };
  return d8(e3, ...a5), m3(e3, ...t8, ...i9), s7.nextFrame(() => {
    d8(e3, ...i9), m3(e3, ...n6), s7.add(F2(e3, (u9) => (d8(e3, ...n6, ...t8), m3(e3, ...a5), o7(u9))));
  }), s7.add(() => d8(e3, ...t8, ...i9, ...n6, ...a5)), s7.add(() => o7("cancelled")), s7.dispose;
}

// node_modules/.pnpm/@headlessui+vue@1.7.23_vue@3.4.31/node_modules/@headlessui/vue/dist/components/transitions/transition.js
function g4(e3 = "") {
  return e3.split(/\s+/).filter((t8) => t8.length > 1);
}
var R2 = Symbol("TransitionContext");
var pe3 = ((a5) => (a5.Visible = "visible", a5.Hidden = "hidden", a5))(pe3 || {});
function me3() {
  return inject(R2, null) !== null;
}
function Te2() {
  let e3 = inject(R2, null);
  if (e3 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e3;
}
function ge3() {
  let e3 = inject(N7, null);
  if (e3 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e3;
}
var N7 = Symbol("NestingContext");
function L2(e3) {
  return "children" in e3 ? L2(e3.children) : e3.value.filter(({ state: t8 }) => t8 === "visible").length > 0;
}
function Q2(e3) {
  let t8 = ref([]), a5 = ref(false);
  onMounted(() => a5.value = true), onUnmounted(() => a5.value = false);
  function s7(n6, r4 = S2.Hidden) {
    let l4 = t8.value.findIndex(({ id: f5 }) => f5 === n6);
    l4 !== -1 && (u(r4, { [S2.Unmount]() {
      t8.value.splice(l4, 1);
    }, [S2.Hidden]() {
      t8.value[l4].state = "hidden";
    } }), !L2(t8) && a5.value && (e3 == null || e3()));
  }
  function h3(n6) {
    let r4 = t8.value.find(({ id: l4 }) => l4 === n6);
    return r4 ? r4.state !== "visible" && (r4.state = "visible") : t8.value.push({ id: n6, state: "visible" }), () => s7(n6, S2.Unmount);
  }
  return { children: t8, register: h3, unregister: s7 };
}
var W2 = N2.RenderStrategy;
var he2 = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e3, { emit: t8, attrs: a5, slots: s7, expose: h3 }) {
  let n6 = ref(0);
  function r4() {
    n6.value |= i7.Opening, t8("beforeEnter");
  }
  function l4() {
    n6.value &= ~i7.Opening, t8("afterEnter");
  }
  function f5() {
    n6.value |= i7.Closing, t8("beforeLeave");
  }
  function S3() {
    n6.value &= ~i7.Closing, t8("afterLeave");
  }
  if (!me3() && s4()) return () => h(Se3, { ...e3, onBeforeEnter: r4, onAfterEnter: l4, onBeforeLeave: f5, onAfterLeave: S3 }, s7);
  let d9 = ref(null), y4 = computed(() => e3.unmount ? S2.Unmount : S2.Hidden);
  h3({ el: d9, $el: d9 });
  let { show: v4, appear: A6 } = Te2(), { register: D, unregister: H5 } = ge3(), i9 = ref(v4.value ? "visible" : "hidden"), I2 = { value: true }, c5 = i2(), b2 = { value: false }, P2 = Q2(() => {
    !b2.value && i9.value !== "hidden" && (i9.value = "hidden", H5(c5), S3());
  });
  onMounted(() => {
    let o7 = D(c5);
    onUnmounted(o7);
  }), watchEffect(() => {
    if (y4.value === S2.Hidden && c5) {
      if (v4.value && i9.value !== "visible") {
        i9.value = "visible";
        return;
      }
      u(i9.value, { ["hidden"]: () => H5(c5), ["visible"]: () => D(c5) });
    }
  });
  let j2 = g4(e3.enter), M2 = g4(e3.enterFrom), X = g4(e3.enterTo), _2 = g4(e3.entered), Y = g4(e3.leave), Z2 = g4(e3.leaveFrom), ee2 = g4(e3.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i9.value === "visible") {
        let o7 = o3(d9);
        if (o7 instanceof Comment && o7.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te3(o7) {
    let E6 = I2.value && !A6.value, p3 = o3(d9);
    !p3 || !(p3 instanceof HTMLElement) || E6 || (b2.value = true, v4.value && r4(), v4.value || f5(), o7(v4.value ? L(p3, j2, M2, X, _2, (V2) => {
      b2.value = false, V2 === g3.Finished && l4();
    }) : L(p3, Y, Z2, ee2, _2, (V2) => {
      b2.value = false, V2 === g3.Finished && (L2(P2) || (i9.value = "hidden", H5(c5), S3()));
    })));
  }
  return onMounted(() => {
    watch([v4], (o7, E6, p3) => {
      te3(p3), I2.value = false;
    }, { immediate: true });
  }), provide(N7, P2), t4(computed(() => u(i9.value, { ["visible"]: i7.Open, ["hidden"]: i7.Closed }) | n6.value)), () => {
    let { appear: o7, show: E6, enter: p3, enterFrom: V2, enterTo: Ce, entered: ye3, leave: be3, leaveFrom: Ee4, leaveTo: Ve3, ...U5 } = e3, ne2 = { ref: d9 }, re2 = { ...U5, ...A6.value && v4.value && c.isServer ? { class: normalizeClass([a5.class, U5.class, ...j2, ...M2]) } : {} };
    return A({ theirProps: re2, ourProps: ne2, slot: {}, slots: s7, attrs: a5, features: W2, visible: i9.value === "visible", name: "TransitionChild" });
  };
} });
var ce3 = he2;
var Se3 = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e3, { emit: t8, attrs: a5, slots: s7 }) {
  let h3 = l(), n6 = computed(() => e3.show === null && h3 !== null ? (h3.value & i7.Open) === i7.Open : e3.show);
  watchEffect(() => {
    if (![true, false].includes(n6.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r4 = ref(n6.value ? "visible" : "hidden"), l4 = Q2(() => {
    r4.value = "hidden";
  }), f5 = ref(true), S3 = { show: n6, appear: computed(() => e3.appear || !f5.value) };
  return onMounted(() => {
    watchEffect(() => {
      f5.value = false, n6.value ? r4.value = "visible" : L2(l4) || (r4.value = "hidden");
    });
  }), provide(N7, l4), provide(R2, S3), () => {
    let d9 = T2(e3, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y4 = { unmount: e3.unmount };
    return A({ ourProps: { ...y4, as: "template" }, theirProps: {}, slot: {}, slots: { ...s7, default: () => [h(ce3, { onBeforeEnter: () => t8("beforeEnter"), onAfterEnter: () => t8("afterEnter"), onBeforeLeave: () => t8("beforeLeave"), onAfterLeave: () => t8("afterLeave"), ...a5, ...y4, ...d9 }, s7.default)] }, attrs: {}, features: W2, visible: r4.value === "visible", name: "Transition" });
  };
} });
export {
  lt as Combobox,
  nt as ComboboxButton,
  it as ComboboxInput,
  at as ComboboxLabel,
  rt as ComboboxOption,
  ut as ComboboxOptions,
  Ye as Dialog,
  ze as DialogBackdrop,
  Je as DialogDescription,
  _e as DialogOverlay,
  Ge as DialogPanel,
  Ve2 as DialogTitle,
  N5 as Disclosure,
  Q as DisclosureButton,
  V as DisclosurePanel,
  ue as FocusTrap,
  Ie as Listbox,
  je as ListboxButton,
  Ee2 as ListboxLabel,
  Fe as ListboxOption,
  Ae2 as ListboxOptions,
  ge as Menu,
  Se as MenuButton,
  be2 as MenuItem,
  Me as MenuItems,
  ye as Popover,
  Ge2 as PopoverButton,
  Ae3 as PopoverGroup,
  $e as PopoverOverlay,
  je2 as PopoverPanel,
  $2 as Portal,
  z2 as PortalGroup,
  he as RadioGroup,
  Ee3 as RadioGroupDescription,
  ke2 as RadioGroupLabel,
  Oe as RadioGroupOption,
  ue3 as Switch,
  ce2 as SwitchDescription,
  oe as SwitchGroup,
  de as SwitchLabel,
  xe as Tab,
  me2 as TabGroup,
  pe2 as TabList,
  ye2 as TabPanel,
  Ie2 as TabPanels,
  he2 as TransitionChild,
  Se3 as TransitionRoot,
  s as provideUseId
};
//# sourceMappingURL=@headlessui_vue.js.map
