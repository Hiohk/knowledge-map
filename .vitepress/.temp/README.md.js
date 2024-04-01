import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "ant-design-vue";
import "@ant-design/icons-vue";
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const _imports_0 = "/knowledge-graph/assets/preview.BYXne-uM.jpg";
const __pageData = JSON.parse('{"title":"knowledge-graph","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1711706592000}');
const _sfc_main = { name: "README.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="knowledge-graph" tabindex="-1">knowledge-graph <a class="header-anchor" href="#knowledge-graph" aria-label="Permalink to &quot;knowledge-graph&quot;">​</a></h1><p>This is a knowledge summary website for front-end and back-end.</p><h2 id="访问地址" tabindex="-1">访问地址 <a class="header-anchor" href="#访问地址" aria-label="Permalink to &quot;访问地址&quot;">​</a></h2><p><a href="https://hiohk.github.io/knowledge-graph/" target="_blank" rel="noreferrer">https://hiohk.github.io/knowledge-graph/</a></p><h2 id="预览" tabindex="-1">预览 <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览&quot;">​</a></h2><p><img${ssrRenderAttr("src", _imports_0)} alt="image" loading="lazy"></p><h2 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-label="Permalink to &quot;启动项目&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm run docs:dev</span></span></code></pre></div><h2 id="打包项目" tabindex="-1">打包项目 <a class="header-anchor" href="#打包项目" aria-label="Permalink to &quot;打包项目&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm run docs:build</span></span></code></pre></div><p>Note: If you have deployed your project failed, you may run <code>pnpm install --no-frozen-lockfile</code>.</p><h4 id="copyright-©-2024" tabindex="-1">Copyright © 2024 <a class="header-anchor" href="#copyright-©-2024" aria-label="Permalink to &quot;Copyright © 2024&quot;">​</a></h4></div>`);
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
