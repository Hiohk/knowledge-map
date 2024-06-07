import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
/* empty css                    */
import "ant-design-vue";
/* empty css                        */
import "@ant-design/icons-vue";
import "@iconify/vue";
/* empty css                     */
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const __pageData = JSON.parse('{"title":"回调","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/javascript/basic07.md","filePath":"frontend/javascript/basic07.md","lastUpdated":1713177778000}');
const _sfc_main = { name: "frontend/javascript/basic07.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_a_back_top = resolveComponent("a-back-top");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="回调" tabindex="-1">回调 <a class="header-anchor" href="#回调" aria-label="Permalink to &quot;回调&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_a_back_top, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/javascript/basic07.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const basic07 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  basic07 as default
};
