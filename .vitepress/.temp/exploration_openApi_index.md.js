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
const __pageData = JSON.parse('{"title":"Web Open API For developers","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"exploration/openApi/index.md","filePath":"exploration/openApi/index.md","lastUpdated":1717049326000}');
const _sfc_main = { name: "exploration/openApi/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="web-open-api-for-developers" tabindex="-1">Web Open API For developers <a class="header-anchor" href="#web-open-api-for-developers" aria-label="Permalink to &quot;Web Open API For developers&quot;">​</a></h1><p>This is a collection of useful links and resources for developers who want to use the Web Open API.</p><p>更多内容请参考： <a href="https://github.com/public-apis/public-apis" target="_blank" rel="noreferrer"><code>public-apis</code></a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("exploration/openApi/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
