import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "./@docsearch.w40geAFS.js";
import "ant-design-vue";
import "./ant-design-vue.w40geAFS.js";
import "grid-layout-plus";
const __pageData = JSON.parse('{"title":"11. 模板引用","description":"","frontmatter":{"prev":{"text":"生命周期","link":"/frontend/vue/vue10"},"next":{"text":"组件基础","link":"/frontend/vue/vue12"}},"headers":[],"relativePath":"frontend/vue/vue11.md","filePath":"frontend/vue/vue11.md","lastUpdated":1706867478000}');
const _sfc_main = { name: "frontend/vue/vue11.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_11-模板引用" tabindex="-1">11. 模板引用 <a class="header-anchor" href="#_11-模板引用" aria-label="Permalink to &quot;11. 模板引用&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/vue/vue11.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue11 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vue11 as default
};
