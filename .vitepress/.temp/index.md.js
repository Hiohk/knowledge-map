import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "ant-design-vue";
import "@ant-design/icons-vue";
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Knowledge Graph","text":"For front-end and back-end.","tagline":"时间不能改变你的故事内容，却可以改变你的叙述方式。","image":{"src":"/background.svg","alt":"背景图片"},"actions":[{"theme":"brand","text":"开始探索","link":"/blog/"},{"theme":"alt","text":"前端知识","link":"/frontend/html"},{"theme":"alt","text":"后端知识","link":"/backend/java/java01"}]}},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1711964165000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
