import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "./@docsearch.w40geAFS.js";
import "ant-design-vue";
import "./ant-design-vue.w40geAFS.js";
import "grid-layout-plus";
const __pageData = JSON.parse('{"title":"6. 类与样式绑定","description":"","frontmatter":{"prev":{"text":"计算属性","link":"/frontend/vue/vue05"},"next":{"text":"列表渲染","link":"/frontend/vue/vue07"}},"headers":[],"relativePath":"frontend/vue/vue06.md","filePath":"frontend/vue/vue06.md","lastUpdated":1706867478000}');
const _sfc_main = { name: "frontend/vue/vue06.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_6-类与样式绑定" tabindex="-1">6. 类与样式绑定 <a class="header-anchor" href="#_6-类与样式绑定" aria-label="Permalink to &quot;6. 类与样式绑定&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/vue/vue06.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue06 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vue06 as default
};
