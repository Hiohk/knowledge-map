import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "ant-design-vue";
import "@ant-design/icons-vue";
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const __pageData = JSON.parse('{"title":"14. Java8 ~ Java21 重要新特性","description":"","frontmatter":{},"headers":[],"relativePath":"backend/java/java14.md","filePath":"backend/java/java14.md","lastUpdated":1711360029000}');
const _sfc_main = { name: "backend/java/java14.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_14-java8-java21-重要新特性" tabindex="-1">14. Java8 ~ Java21 重要新特性 <a class="header-anchor" href="#_14-java8-java21-重要新特性" aria-label="Permalink to &quot;14. Java8 ~ Java21 重要新特性&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/java/java14.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const java14 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  java14 as default
};
