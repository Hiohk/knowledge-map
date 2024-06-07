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
const __pageData = JSON.parse('{"title":"MySQL 高级","description":"","frontmatter":{},"headers":[],"relativePath":"backend/mysql/advance01.md","filePath":"backend/mysql/advance01.md","lastUpdated":1717586181000}');
const _sfc_main = { name: "backend/mysql/advance01.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_a_back_top = resolveComponent("a-back-top");
  const _component_reading_progress_bar = resolveComponent("reading-progress-bar");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mysql-高级" tabindex="-1">MySQL 高级 <a class="header-anchor" href="#mysql-高级" aria-label="Permalink to &quot;MySQL 高级&quot;">​</a></h1><p>即将开始 MySQL 高级......</p>`);
  _push(ssrRenderComponent(_component_a_back_top, null, null, _parent));
  _push(ssrRenderComponent(_component_reading_progress_bar, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/mysql/advance01.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const advance01 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  advance01 as default
};
