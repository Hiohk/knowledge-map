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
const __pageData = JSON.parse('{"title":"功能待开发...","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"community.md","filePath":"community.md","lastUpdated":1706784636000}');
const _sfc_main = { name: "community.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="功能待开发" tabindex="-1">功能待开发... <a class="header-anchor" href="#功能待开发" aria-label="Permalink to &quot;功能待开发...&quot;">​</a></h1><p>预计开放时间：2024年12月</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is an open community dedicated to serving developers where discussions can take place.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("community.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const community = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  community as default
};
