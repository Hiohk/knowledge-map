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
const __pageData = JSON.parse('{"title":"2. 响应式基础","description":"","frontmatter":{"prev":{"text":"模板语法","link":"/frontend/vue/vue01"},"next":{"text":"Vue指令","link":"/frontend/vue/vue03"}},"headers":[],"relativePath":"frontend/vue/vue02.md","filePath":"frontend/vue/vue02.md","lastUpdated":1706867478000}');
const _sfc_main = { name: "frontend/vue/vue02.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2-响应式基础" tabindex="-1">2. 响应式基础 <a class="header-anchor" href="#_2-响应式基础" aria-label="Permalink to &quot;2. 响应式基础&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/vue/vue02.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue02 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vue02 as default
};
