import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "ant-design-vue";
import "@ant-design/icons-vue";
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const __pageData = JSON.parse('{"title":"8. IO 流","description":"","frontmatter":{},"headers":[],"relativePath":"backend/java/java08.md","filePath":"backend/java/java08.md","lastUpdated":1711360029000}');
const _sfc_main = { name: "backend/java/java08.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_8-io-流" tabindex="-1">8. IO 流 <a class="header-anchor" href="#_8-io-流" aria-label="Permalink to &quot;8. IO 流&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/java/java08.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const java08 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  java08 as default
};
