import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "ant-design-vue";
import "@ant-design/icons-vue";
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const __pageData = JSON.parse('{"title":"程序性能","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/javascript/basic10.md","filePath":"frontend/javascript/basic10.md","lastUpdated":1709891825000}');
const _sfc_main = { name: "frontend/javascript/basic10.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="程序性能" tabindex="-1">程序性能 <a class="header-anchor" href="#程序性能" aria-label="Permalink to &quot;程序性能&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/javascript/basic10.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const basic10 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  basic10 as default
};
