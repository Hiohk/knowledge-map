import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "./@docsearch.w40geAFS.js";
import "ant-design-vue";
import "./ant-design-vue.w40geAFS.js";
import "grid-layout-plus";
const _imports_0 = "/knowledge-graph/assets/preview.WF53vrjK.jpg";
const __pageData = JSON.parse('{"title":"knowledge-graph","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1707027393000}');
const _sfc_main = { name: "README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="knowledge-graph" tabindex="-1">knowledge-graph <a class="header-anchor" href="#knowledge-graph" aria-label="Permalink to &quot;knowledge-graph&quot;">​</a></h1><p>This is a knowledge summary website for front-end and back-end.</p><h1 id="预览" tabindex="-1">预览 <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览&quot;">​</a></h1><p><img${ssrRenderAttr("src", _imports_0)} alt="image"></p><h1 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-label="Permalink to &quot;启动项目&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm run docs:dev</span></span></code></pre></div><h1 id="打包项目" tabindex="-1">打包项目 <a class="header-anchor" href="#打包项目" aria-label="Permalink to &quot;打包项目&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm run docs:build</span></span></code></pre></div><h4 id="copyright-©-2024" tabindex="-1">Copyright © 2024 <a class="header-anchor" href="#copyright-©-2024" aria-label="Permalink to &quot;Copyright © 2024&quot;">​</a></h4></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("README.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  README as default
};
