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
const __pageData = JSON.parse('{"title":"方法论（methodology）","description":"","frontmatter":{},"headers":[],"relativePath":"exploration/methodology/index.md","filePath":"exploration/methodology/index.md","lastUpdated":1717061571000}');
const _sfc_main = { name: "exploration/methodology/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_a_back_top = resolveComponent("a-back-top");
  const _component_reading_progress_bar = resolveComponent("reading-progress-bar");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="方法论-methodology" tabindex="-1">方法论（methodology） <a class="header-anchor" href="#方法论-methodology" aria-label="Permalink to &quot;方法论（methodology）&quot;">​</a></h1><p>某天我突发奇想，专门开辟了一个新的章节——<strong>方法论</strong>。希望总结日常工作学习中总结的方法论。无论是治国理政，还是科学研究以及生活中的为人处世，处处都存在着我们看不见摸不着的方法论。</p><p>方法论的重要性体现在多个方面，它对于个人、组织、企业乃至整个社会的思考和行动都具有深远的影响。方法论的重要性体现在提高效率、保证质量、建立可复制性和可伸缩性的工作框架、推动企业成功以及促进个人成长和发展等多个方面。因此，我们应该重视方法论的学习和应用，不断提升自己的方法论水平，以更好地应对各种挑战和问题。</p><ol><li><p>《思考的艺术》—— [美] 文森特·赖安·拉吉罗</p><p><strong>哲学家亚瑟·叔本华（Arthur Schopen-hauer）曾写道：“每个人都把自己的眼界当成是这个世界的极限。”一个人的视野越广阔，他对日常体验的感知当然也就越深刻、越准确。</strong></p></li><li><p>《专注力 化繁为简的惊人力量》—— [英] 于尔根·沃尔夫（Jurgen Wolff）</p></li></ol><h2 id="_01-前端工程师如何快速成长" tabindex="-1">01. 前端工程师如何快速成长？ <a class="header-anchor" href="#_01-前端工程师如何快速成长" aria-label="Permalink to &quot;01. 前端工程师如何快速成长？&quot;">​</a></h2><p>前端工程师的快速成长，80%来源于<strong>能力</strong>，20%来源于<strong>知识</strong>。能力可以包括：编程能力、架构能力和工程能力；知识是各种技术的知识点的学习。 知识点的学习并不是最重要的，对新技术的学习也不是最重要的。前端工程师成长最重要的是在于能力的快速提升。能力的提升远比掌握一门新的技术或者框架重要的多。</p>`);
  _push(ssrRenderComponent(_component_a_back_top, null, null, _parent));
  _push(ssrRenderComponent(_component_reading_progress_bar, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("exploration/methodology/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
