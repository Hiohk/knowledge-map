import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
const __pageData = JSON.parse('{"title":"7. 列表渲染","description":"","frontmatter":{"prev":{"text":"类与样式绑定","link":"/frontend/vue/vue06"},"next":{"text":"事件处理","link":"/frontend/vue/vue08"}},"headers":[],"relativePath":"frontend/vue/vue07.md","filePath":"frontend/vue/vue07.md","lastUpdated":1706867478000}');
const _sfc_main = { name: "frontend/vue/vue07.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_7-列表渲染" tabindex="-1">7. 列表渲染 <a class="header-anchor" href="#_7-列表渲染" aria-label="Permalink to &quot;7. 列表渲染&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/vue/vue07.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue07 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vue07 as default
};
