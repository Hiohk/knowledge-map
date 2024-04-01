import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "ant-design-vue";
import "@ant-design/icons-vue";
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const __pageData = JSON.parse('{"title":"3. 原生函数","description":"","frontmatter":{"prev":{"text":"数组、字符串和数字","link":"/frontend/javascript/basic02"},"next":{"text":"强制类型转换","link":"/frontend/javascript/basic04"}},"headers":[],"relativePath":"frontend/javascript/basic03.md","filePath":"frontend/javascript/basic03.md","lastUpdated":1710824806000}');
const _sfc_main = { name: "frontend/javascript/basic03.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_3-原生函数" tabindex="-1">3. 原生函数 <a class="header-anchor" href="#_3-原生函数" aria-label="Permalink to &quot;3. 原生函数&quot;">​</a></h1><h2 id="_3-1-内不能属性-class" tabindex="-1">3.1 内不能属性 [[Class]] <a class="header-anchor" href="#_3-1-内不能属性-class" aria-label="Permalink to &quot;3.1 内不能属性 [[Class]]&quot;">​</a></h2><h2 id="_3-2-封装对象包装" tabindex="-1">3.2 封装对象包装 <a class="header-anchor" href="#_3-2-封装对象包装" aria-label="Permalink to &quot;3.2 封装对象包装&quot;">​</a></h2><h2 id="_3-3-拆封" tabindex="-1">3.3 拆封 <a class="header-anchor" href="#_3-3-拆封" aria-label="Permalink to &quot;3.3 拆封&quot;">​</a></h2><h2 id="_3-4-原生函数作为构造函数" tabindex="-1">3.4 原生函数作为构造函数 <a class="header-anchor" href="#_3-4-原生函数作为构造函数" aria-label="Permalink to &quot;3.4 原生函数作为构造函数&quot;">​</a></h2><h2 id="_3-5-总结" tabindex="-1">3.5 总结 <a class="header-anchor" href="#_3-5-总结" aria-label="Permalink to &quot;3.5 总结&quot;">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/javascript/basic03.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const basic03 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  basic03 as default
};
