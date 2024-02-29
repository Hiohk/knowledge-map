import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "./@docsearch.w40geAFS.js";
import "ant-design-vue";
import "./ant-design-vue.w40geAFS.js";
import "grid-layout-plus";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Knowledge Graph","text":"For front-end and back-end.","tagline":"其实地上本没有路，走的人多了，也便成了路。","image":{"src":"/background.svg","alt":"背景图片"},"actions":[{"theme":"brand","text":"开始探索","link":"/"},{"theme":"alt","text":"前端知识","link":"/"},{"theme":"alt","text":"后端知识","link":"/"}]},"features":[{"title":"JavaScript 💞","details":"JavaScript基础和高级知识汇总"},{"title":"Vue.js 🦢","details":"关于Vue3的知识"},{"title":"Node.js 🐧","details":"Node.js相关知识"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1706867478000}');
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
