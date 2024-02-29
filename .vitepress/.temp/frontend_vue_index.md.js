import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "./@docsearch.w40geAFS.js";
import "ant-design-vue";
import "./ant-design-vue.w40geAFS.js";
import "grid-layout-plus";
const __pageData = JSON.parse('{"title":"Vue.js(vue3)","description":"","frontmatter":{"next":{"text":"模板语法","link":"/frontend/vue/vue01"}},"headers":[],"relativePath":"frontend/vue/index.md","filePath":"frontend/vue/index.md","lastUpdated":1706867478000}');
const _sfc_main = { name: "frontend/vue/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vue-js-vue3" tabindex="-1">Vue.js(vue3) <a class="header-anchor" href="#vue-js-vue3" aria-label="Permalink to &quot;Vue.js(vue3)&quot;">​</a></h1><p>Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。</p><p>下面是一个最基本的示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { createApp, ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &quot;vue&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">createApp</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">({</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">  setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">      count: </span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">0</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">),</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    };</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}).</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">mount</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;#app&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">);</span></span></code></pre></div><h2 id="_1-mvvm" tabindex="-1">1. MVVM <a class="header-anchor" href="#_1-mvvm" aria-label="Permalink to &quot;1. MVVM&quot;">​</a></h2><blockquote><p>理解命令式编程与声明式编程的区别</p></blockquote><h3 id="_1-1-mvc和mvvm的架构模型" tabindex="-1">1.1 MVC和MVVM的架构模型 <a class="header-anchor" href="#_1-1-mvc和mvvm的架构模型" aria-label="Permalink to &quot;1.1 MVC和MVVM的架构模型&quot;">​</a></h3><ol><li>MVC：Model-View-Controller</li><li>MVVM: Model-View-ViewModel</li></ol><h3 id="_1-2-data属性选项" tabindex="-1">1.2 data属性选项 <a class="header-anchor" href="#_1-2-data属性选项" aria-label="Permalink to &quot;1.2 data属性选项&quot;">​</a></h3><blockquote><p>在vue2中data可以为一个对象，在vue3中data必须为一个函数，否则浏览器会报错；</p></blockquote><p>data中返回的对象会被Vue的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中被处理。</p><h3 id="_1-3-methods属性选项" tabindex="-1">1.3 methods属性选项 <a class="header-anchor" href="#_1-3-methods属性选项" aria-label="Permalink to &quot;1.3 methods属性选项&quot;">​</a></h3><p>methods中的函数不可以写成箭头函数，因为箭头函数中this会指向父级作用域上下文；</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/vue/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
