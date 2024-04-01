import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "ant-design-vue";
import "@ant-design/icons-vue";
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const __pageData = JSON.parse('{"title":"9. 表单输入绑定","description":"","frontmatter":{"prev":{"text":"事件处理","link":"/frontend/vue/vue08"},"next":{"text":"生命周期","link":"/frontend/vue/vue10"}},"headers":[],"relativePath":"frontend/vue/vue09.md","filePath":"frontend/vue/vue09.md","lastUpdated":1706867478000}');
const _sfc_main = { name: "frontend/vue/vue09.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_9-表单输入绑定" tabindex="-1">9. 表单输入绑定 <a class="header-anchor" href="#_9-表单输入绑定" aria-label="Permalink to &quot;9. 表单输入绑定&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/vue/vue09.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue09 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vue09 as default
};
