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
const __pageData = JSON.parse('{"title":"第 05 章 排序与分页","description":"","frontmatter":{"prev":{"text":"运算符","link":"/backend/mysql/basic04"},"next":{"text":"多表查询","link":"/backend/mysql/basic06"}},"headers":[],"relativePath":"backend/mysql/basic05.md","filePath":"backend/mysql/basic05.md","lastUpdated":1717658540000}');
const _sfc_main = { name: "backend/mysql/basic05.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_a_back_top = resolveComponent("a-back-top");
  const _component_reading_progress_bar = resolveComponent("reading-progress-bar");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="第-05-章-排序与分页" tabindex="-1">第 05 章 排序与分页 <a class="header-anchor" href="#第-05-章-排序与分页" aria-label="Permalink to &quot;第 05 章 排序与分页&quot;">​</a></h1><h2 id="_1-排序与分页" tabindex="-1">1. 排序与分页 <a class="header-anchor" href="#_1-排序与分页" aria-label="Permalink to &quot;1. 排序与分页&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_a_back_top, null, null, _parent));
  _push(ssrRenderComponent(_component_reading_progress_bar, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/mysql/basic05.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const basic05 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  basic05 as default
};
