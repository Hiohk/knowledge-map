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
const __pageData = JSON.parse('{"title":"MyBatis Plus","description":"","frontmatter":{},"headers":[],"relativePath":"backend/mybatisPlus/index.md","filePath":"backend/mybatisPlus/index.md","lastUpdated":1717049326000}');
const _sfc_main = { name: "backend/mybatisPlus/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_a_back_top = resolveComponent("a-back-top");
  const _component_reading_progress_bar = resolveComponent("reading-progress-bar");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mybatis-plus" tabindex="-1">MyBatis Plus <a class="header-anchor" href="#mybatis-plus" aria-label="Permalink to &quot;MyBatis Plus&quot;">​</a></h1><p><strong>符号说明</strong></p><ul><li>✅ 需要学习者<strong>掌握</strong>的知识点；</li><li>❤️ 高级开发者需要<strong>重点掌握</strong>的知识点；</li><li>🚀 需要学习者<strong>理解</strong>的知识点；</li><li>⭐ 需要学习者<strong>了解</strong>的知识点；</li><li>❌ 拓展知识点，可以不用学习；</li></ul><p>即将开始 MyBatis Plus...</p>`);
  _push(ssrRenderComponent(_component_a_back_top, null, null, _parent));
  _push(ssrRenderComponent(_component_reading_progress_bar, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/mybatisPlus/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
