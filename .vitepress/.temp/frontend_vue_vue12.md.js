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
const __pageData = JSON.parse('{"title":"12. 组件基础","description":"","frontmatter":{"prev":{"text":"模板引用","link":"/frontend/vue/vue11"},"next":{"text":"Vue高级","link":"/frontend/vue/vue13"}},"headers":[],"relativePath":"frontend/vue/vue12.md","filePath":"frontend/vue/vue12.md","lastUpdated":1706867478000}');
const _sfc_main = { name: "frontend/vue/vue12.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_12-组件基础" tabindex="-1">12. 组件基础 <a class="header-anchor" href="#_12-组件基础" aria-label="Permalink to &quot;12. 组件基础&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/vue/vue12.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue12 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vue12 as default
};
