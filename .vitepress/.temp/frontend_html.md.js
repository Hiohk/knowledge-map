import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "./@docsearch.w40geAFS.js";
import "ant-design-vue";
import "./ant-design-vue.w40geAFS.js";
import "grid-layout-plus";
const __pageData = JSON.parse('{"title":"HTML知识","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/html.md","filePath":"frontend/html.md","lastUpdated":1706779868000}');
const _sfc_main = { name: "frontend/html.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="html知识" tabindex="-1">HTML知识 <a class="header-anchor" href="#html知识" aria-label="Permalink to &quot;HTML知识&quot;">​</a></h1><p>HTML（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。它定义了网页内容的含义和结构。除 HTML 以外的其他技术则通常用来描述一个网页的表现与展示效果（如 CSS），或功能与行为（如 JavaScript）。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/html.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  html as default
};
