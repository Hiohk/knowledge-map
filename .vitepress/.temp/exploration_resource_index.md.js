import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext, ref, resolveComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode } from "vue";
import { PicCenterOutlined } from "@ant-design/icons-vue";
import { Icon } from "@iconify/vue";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
/* empty css                    */
import "ant-design-vue";
/* empty css                        */
/* empty css                     */
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const _sfc_main$1 = {
  __name: "Resource",
  __ssrInlineRender: true,
  setup(__props) {
    const activeKey = ref("frontend");
    const jumpTipDialog = ref(false);
    const loading = ref(false);
    const targetData = ref("");
    const headStyle = ref({
      color: "#D1802B",
      border: "1.5px solid #E6A23C",
      "border-bottom": "0",
      "font-size": "16px",
      "font-weight": "600",
      background: "linear-gradient(to bottom, #fcf8ed, #fefbf5, #fff)"
    });
    const bodyStyle = ref({
      border: "1.5px solid #E6A23C",
      "border-top": "0"
    });
    const bookBodyStyle = ref({
      border: "1.5px solid #E6A23C",
      "border-top": "0"
    });
    const docsData = ref([
      {
        title: "Vue3.0",
        href: "https://v3.cn.vuejs.org/",
        desc: "易学易用，性能出色，适用场景丰富的 Web 前端框架",
        icon: "vscode-icons:file-type-vue"
      },
      {
        title: "MDN",
        href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
        desc: "MDN文档",
        icon: "logos:mdn"
      },
      {
        title: "Vuex",
        href: "https://next.router.vuejs.org/zh/",
        desc: "Vuex中文文档",
        icon: "skill-icons:vuejs-light"
      },
      {
        title: "Vue-Router",
        href: "https://router.vuejs.org/zh/",
        desc: "Vue-Router中文文档",
        icon: "vscode-icons:file-type-vueconfig"
      },
      {
        title: "Vue-Cli",
        href: "https://cli.vuejs.org/zh/",
        desc: "Vue-Cli中文文档",
        icon: "skill-icons:vuejs-dark"
      },
      {
        title: "Pinia",
        href: "https://pinia.vuejs.org/zh/",
        desc: "符合直觉的 Vue.js 状态管理库",
        icon: "logos:pinia"
      },
      {
        title: "Node.js",
        href: "https://nodejs.org/zh-cn/",
        desc: "Node.js中文文档",
        icon: "logos:nodejs"
      },
      {
        title: "Java",
        href: "https://www.java.com/zh-CN/",
        desc: "Java API DOC",
        icon: "devicon:java-wordmark"
      },
      {
        title: "axios",
        href: "https://axios-http.com/zh-cn/docs/intro",
        desc: "axios中文文档",
        icon: "logos:axios"
      },
      {
        title: "TypeScript",
        href: "https://typescript.bootcss.com/",
        desc: "TypeScript中文文档",
        icon: "fluent:code-ts-rectangle-16-regular",
        color: "color: #00B8F6"
      },
      {
        title: "React",
        href: "https://react.docschina.org/",
        desc: "React中文文档",
        icon: "logos:react"
      },
      {
        title: "mongoDB",
        href: "https://www.mongodb.com/docs/manual/",
        desc: "MongoDB中文文档",
        icon: "devicon:mongodb-wordmark"
      },
      {
        title: "MySQL",
        href: "https://dev.mysql.com/doc/",
        desc: "MySQL中文文档",
        icon: "logos:mysql"
      },
      {
        title: "Redis",
        href: "https://redis.io/docs/",
        desc: "Redis中文文档",
        icon: "devicon:redis-wordmark"
      },
      {
        title: "uni-app",
        href: "https://uniapp.dcloud.net.cn/",
        desc: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架",
        icon: "carbon:app",
        color: "color: #2B9939"
      },
      {
        title: "W3School",
        href: "https://www.w3school.com.cn/",
        desc: "W3School",
        icon: "simple-icons:w3schools",
        color: "color: #BD2D2F"
      }
    ]);
    const communityData = ref([
      {
        title: "stack overflow",
        href: "https://stackoverflow.com/",
        desc: "Stack Overflow是最受程序员欢迎的IT技术问答网站",
        icon: "devicon:stackoverflow"
      },
      {
        title: "稀土掘金",
        href: "https://juejin.cn/",
        desc: "开发者社区",
        icon: "simple-icons:juejin",
        color: "color: #1F80FF"
      },
      {
        title: "开源中国",
        href: "https://www.oschina.net/",
        desc: "中国版的Github，国内最大的开源技术社区",
        icon: "arcticons:china-construction-bank",
        color: "color: #3CA054"
      },
      {
        title: "CSDN",
        href: "https://www.csdn.net/",
        desc: "国内开发者社区",
        icon: "logos:zulip-icon"
      },
      {
        title: "SegmentFault",
        href: "https://segmentfault.com/",
        desc: "开放式协作的问答社区",
        icon: "logos:segment"
      },
      {
        title: "Github",
        href: "https://github.com/",
        desc: "Github",
        icon: "logos:github-icon"
      },
      {
        title: "阿里云开发者社区",
        href: "https://developer.aliyun.com/",
        desc: "阿里云开发者社区",
        icon: "ant-design:aliyun-outlined",
        color: "color: #ef6400"
      },
      {
        title: "腾讯云开发者社区",
        href: "https://cloud.tencent.com/developer",
        desc: "腾讯云开发者社区",
        icon: "emojione:cloud"
      },
      {
        title: "Gitee",
        href: "https://gitee.com/",
        desc: "国内代码托管平台",
        icon: "simple-icons:gitee",
        color: "color: #C71D23"
      },
      {
        title: "GitLab",
        href: "https://gitlab.cn/",
        desc: "一站式DevOps平台",
        icon: "logos:gitlab",
        color: "color: #C71D23"
      },
      {
        title: "51CTO",
        href: "https://www.51cto.com/",
        desc: "中国领先的IT技术网站",
        icon: "streamline:ai-technology-spark",
        color: "color: #C71D23"
      },
      {
        title: "InfoQ",
        href: "https://xie.infoq.cn/",
        desc: "写作社区-专业技术博客社区",
        icon: "simple-icons:infoq",
        color: "color: #0B74DB"
      }
    ]);
    const componentData = ref([
      {
        title: "Element Plus",
        href: "https://element-plus.org/zh-CN/",
        desc: "一个Vue3 UI 框架",
        icon: "ep:element-plus",
        color: "color: #00B8F6"
      },
      {
        title: "Ant Design Vue",
        href: "https://www.antdv.com/docs/vue/introduce-cn",
        desc: "持续探索企业级应用的最佳 UI 实践",
        icon: "logos:ant-design"
      },
      {
        title: "TDesign",
        href: "https://tdesign.tencent.com/",
        desc: "TDesign 企业级设计体系",
        icon: "icon-park-outline:bydesign",
        color: "color: #00B8F6"
      },
      {
        title: "Arco Design",
        href: "https://arco.design/vue/docs/start",
        desc: "字节跳动的UI组件库",
        icon: "simple-icons:bytedance",
        color: "color: #00B8F6"
      },
      {
        title: "Vant",
        href: "https://vant-contrib.gitee.io/vant/#/zh-CN/",
        desc: "轻量、可定制的移动端 Vue 组件库",
        icon: "logos:uikit"
      },
      {
        title: "Vuetify",
        href: "https://vuetifyjs.com/zh-Hans/",
        desc: "Vuetify is a no design skills required Open Source UI Library with beautifully handcrafted Vue Components.",
        icon: "devicon:vuetify"
      },
      {
        title: "Bootstrap",
        href: "https://www.bootcss.com/",
        desc: "简洁、直观、强悍的前端开发框架，让web开发更迅速、简单",
        icon: "devicon:bootstrap"
      },
      {
        title: "Swiper",
        href: "https://www.swiper.com.cn/",
        desc: "Swiper是纯javascript打造的滑动特效插件",
        icon: "simple-icons:swiper",
        color: "color: #194DE0"
      },
      {
        title: "iconify",
        href: "https://iconify.design/",
        desc: "Freedom to choose icons. All popular icon sets, one framework. Over 200,000 open source vector icons.",
        icon: "simple-icons:iconify",
        color: "color: #1769AA"
      },
      {
        title: "iconfont",
        href: "https://www.iconfont.cn/",
        desc: "阿里巴巴矢量图标库",
        icon: "logos:godot-icon"
      }
    ]);
    const learningPlatformData = ref([
      {
        title: "Bilibili",
        href: "https://www.bilibili.com/",
        desc: "Bilibili",
        icon: "ri:bilibili-line",
        color: "color: #00B8F6"
      },
      {
        title: "菜鸟教程",
        href: "https://www.runoob.com/",
        desc: "菜鸟教程",
        icon: "noto:bird"
      },
      {
        title: "阿里云",
        href: "https://www.aliyun.com/",
        desc: "阿里云",
        icon: "ant-design:aliyun-outlined",
        color: "color: #ef6400"
      },
      {
        title: "腾讯云",
        href: "https://cloud.tencent.com/",
        desc: "腾讯云",
        icon: "material-symbols:cloud-outline",
        color: "color: #01A4FF"
      },
      {
        title: "华为云",
        href: "https://www.huaweicloud.com/",
        desc: "华为云",
        icon: "cbi:huawei",
        color: "color: #E60315"
      }
    ]);
    const jumpToTarget = (data) => {
      jumpTipDialog.value = true;
      targetData.value = data;
    };
    const confirmJump = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        jumpTipDialog.value = false;
        window.open(targetData.value.href, "_blank");
      }, 1e3);
    };
    const handleCancel = () => {
      jumpTipDialog.value = false;
    };
    const anchorData = ref([
      {
        key: "1",
        href: "#anchor-docs",
        title: "技术文档"
      },
      {
        key: "2",
        href: "#anchor-community",
        title: "技术社区"
      },
      {
        key: "3",
        href: "#anchor-components",
        title: "UI 组件"
      },
      {
        key: "4",
        href: "#anchor-learning-platform",
        title: "学习平台"
      },
      {
        key: "5",
        href: "#anchor-books",
        title: "书籍推荐"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_row = resolveComponent("a-row");
      const _component_a_col = resolveComponent("a-col");
      const _component_a_card = resolveComponent("a-card");
      const _component_a_card_grid = resolveComponent("a-card-grid");
      const _component_a_tabs = resolveComponent("a-tabs");
      const _component_a_tab_pane = resolveComponent("a-tab-pane");
      const _component_a_modal = resolveComponent("a-modal");
      const _component_a_button = resolveComponent("a-button");
      const _component_a_alert = resolveComponent("a-alert");
      const _component_a_affix = resolveComponent("a-affix");
      const _component_a_anchor = resolveComponent("a-anchor");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-459fa705>`);
      _push(ssrRenderComponent(_component_a_row, { gutter: 16 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, {
              xs: 19,
              sm: 19,
              md: 20,
              lg: 20,
              xl: 21
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_card, {
                    class: "card-item",
                    id: "anchor-docs",
                    title: "技术文档",
                    headStyle: headStyle.value,
                    bodyStyle: bodyStyle.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_row, { gutter: [16, 16] }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(docsData.value, (item, index2) => {
                                _push5(ssrRenderComponent(_component_a_col, {
                                  xs: 24,
                                  sm: 12,
                                  md: 6,
                                  lg: 6,
                                  xl: 6
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_a_card_grid, {
                                        class: "card-grid-item",
                                        onClick: ($event) => jumpToTarget(item)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="card-grid-icon" data-v-459fa705${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(Icon), {
                                              icon: item.icon,
                                              style: [{ "width": "40px", "height": "40px" }, item.color]
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="card-grid-container" data-v-459fa705${_scopeId6}><span class="card-grid-title" data-v-459fa705${_scopeId6}>${ssrInterpolate(item.title)}</span><span class="card-grid-desc" data-v-459fa705${_scopeId6}>${ssrInterpolate(item.desc)}</span></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "card-grid-icon" }, [
                                                createVNode(unref(Icon), {
                                                  icon: item.icon,
                                                  style: [{ "width": "40px", "height": "40px" }, item.color]
                                                }, null, 8, ["icon", "style"])
                                              ]),
                                              createVNode("div", { class: "card-grid-container" }, [
                                                createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                                createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_a_card_grid, {
                                          class: "card-grid-item",
                                          onClick: ($event) => jumpToTarget(item)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "card-grid-icon" }, [
                                              createVNode(unref(Icon), {
                                                icon: item.icon,
                                                style: [{ "width": "40px", "height": "40px" }, item.color]
                                              }, null, 8, ["icon", "style"])
                                            ]),
                                            createVNode("div", { class: "card-grid-container" }, [
                                              createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                              createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(docsData.value, (item, index2) => {
                                  return openBlock(), createBlock(_component_a_col, {
                                    key: index2,
                                    xs: 24,
                                    sm: 12,
                                    md: 6,
                                    lg: 6,
                                    xl: 6
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_card_grid, {
                                        class: "card-grid-item",
                                        onClick: ($event) => jumpToTarget(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "card-grid-icon" }, [
                                            createVNode(unref(Icon), {
                                              icon: item.icon,
                                              style: [{ "width": "40px", "height": "40px" }, item.color]
                                            }, null, 8, ["icon", "style"])
                                          ]),
                                          createVNode("div", { class: "card-grid-container" }, [
                                            createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                            createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_row, { gutter: [16, 16] }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(docsData.value, (item, index2) => {
                                return openBlock(), createBlock(_component_a_col, {
                                  key: index2,
                                  xs: 24,
                                  sm: 12,
                                  md: 6,
                                  lg: 6,
                                  xl: 6
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_card_grid, {
                                      class: "card-grid-item",
                                      onClick: ($event) => jumpToTarget(item)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "card-grid-icon" }, [
                                          createVNode(unref(Icon), {
                                            icon: item.icon,
                                            style: [{ "width": "40px", "height": "40px" }, item.color]
                                          }, null, 8, ["icon", "style"])
                                        ]),
                                        createVNode("div", { class: "card-grid-container" }, [
                                          createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                          createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_card, {
                    class: "card-item",
                    id: "anchor-community",
                    title: "技术社区",
                    headStyle: headStyle.value,
                    bodyStyle: bodyStyle.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_row, { gutter: [16, 16] }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(communityData.value, (item, index2) => {
                                _push5(ssrRenderComponent(_component_a_col, {
                                  xs: 24,
                                  sm: 12,
                                  md: 12,
                                  lg: 6,
                                  xl: 6
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_a_card_grid, {
                                        class: "card-grid-item",
                                        onClick: ($event) => jumpToTarget(item)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="card-grid-icon" data-v-459fa705${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(Icon), {
                                              icon: item.icon,
                                              style: [{ "width": "40px", "height": "40px" }, item.color]
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="card-grid-container" data-v-459fa705${_scopeId6}><span class="card-grid-title" data-v-459fa705${_scopeId6}>${ssrInterpolate(item.title)}</span><span class="card-grid-desc" data-v-459fa705${_scopeId6}>${ssrInterpolate(item.desc)}</span></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "card-grid-icon" }, [
                                                createVNode(unref(Icon), {
                                                  icon: item.icon,
                                                  style: [{ "width": "40px", "height": "40px" }, item.color]
                                                }, null, 8, ["icon", "style"])
                                              ]),
                                              createVNode("div", { class: "card-grid-container" }, [
                                                createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                                createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_a_card_grid, {
                                          class: "card-grid-item",
                                          onClick: ($event) => jumpToTarget(item)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "card-grid-icon" }, [
                                              createVNode(unref(Icon), {
                                                icon: item.icon,
                                                style: [{ "width": "40px", "height": "40px" }, item.color]
                                              }, null, 8, ["icon", "style"])
                                            ]),
                                            createVNode("div", { class: "card-grid-container" }, [
                                              createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                              createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(communityData.value, (item, index2) => {
                                  return openBlock(), createBlock(_component_a_col, {
                                    key: index2,
                                    xs: 24,
                                    sm: 12,
                                    md: 12,
                                    lg: 6,
                                    xl: 6
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_card_grid, {
                                        class: "card-grid-item",
                                        onClick: ($event) => jumpToTarget(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "card-grid-icon" }, [
                                            createVNode(unref(Icon), {
                                              icon: item.icon,
                                              style: [{ "width": "40px", "height": "40px" }, item.color]
                                            }, null, 8, ["icon", "style"])
                                          ]),
                                          createVNode("div", { class: "card-grid-container" }, [
                                            createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                            createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_row, { gutter: [16, 16] }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(communityData.value, (item, index2) => {
                                return openBlock(), createBlock(_component_a_col, {
                                  key: index2,
                                  xs: 24,
                                  sm: 12,
                                  md: 12,
                                  lg: 6,
                                  xl: 6
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_card_grid, {
                                      class: "card-grid-item",
                                      onClick: ($event) => jumpToTarget(item)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "card-grid-icon" }, [
                                          createVNode(unref(Icon), {
                                            icon: item.icon,
                                            style: [{ "width": "40px", "height": "40px" }, item.color]
                                          }, null, 8, ["icon", "style"])
                                        ]),
                                        createVNode("div", { class: "card-grid-container" }, [
                                          createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                          createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_card, {
                    class: "card-item",
                    id: "anchor-components",
                    title: "UI 组件",
                    headStyle: headStyle.value,
                    bodyStyle: bodyStyle.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_row, { gutter: [16, 16] }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(componentData.value, (item, index2) => {
                                _push5(ssrRenderComponent(_component_a_col, {
                                  xs: 24,
                                  sm: 12,
                                  md: 12,
                                  lg: 6,
                                  xl: 6
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_a_card_grid, {
                                        class: "card-grid-item",
                                        onClick: ($event) => jumpToTarget(item)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="card-grid-icon" data-v-459fa705${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(Icon), {
                                              icon: item.icon,
                                              style: [{ "width": "40px", "height": "40px" }, item.color]
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="card-grid-container" data-v-459fa705${_scopeId6}><span class="card-grid-title" data-v-459fa705${_scopeId6}>${ssrInterpolate(item.title)}</span><span class="card-grid-desc" data-v-459fa705${_scopeId6}>${ssrInterpolate(item.desc)}</span></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "card-grid-icon" }, [
                                                createVNode(unref(Icon), {
                                                  icon: item.icon,
                                                  style: [{ "width": "40px", "height": "40px" }, item.color]
                                                }, null, 8, ["icon", "style"])
                                              ]),
                                              createVNode("div", { class: "card-grid-container" }, [
                                                createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                                createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_a_card_grid, {
                                          class: "card-grid-item",
                                          onClick: ($event) => jumpToTarget(item)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "card-grid-icon" }, [
                                              createVNode(unref(Icon), {
                                                icon: item.icon,
                                                style: [{ "width": "40px", "height": "40px" }, item.color]
                                              }, null, 8, ["icon", "style"])
                                            ]),
                                            createVNode("div", { class: "card-grid-container" }, [
                                              createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                              createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(componentData.value, (item, index2) => {
                                  return openBlock(), createBlock(_component_a_col, {
                                    key: index2,
                                    xs: 24,
                                    sm: 12,
                                    md: 12,
                                    lg: 6,
                                    xl: 6
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_card_grid, {
                                        class: "card-grid-item",
                                        onClick: ($event) => jumpToTarget(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "card-grid-icon" }, [
                                            createVNode(unref(Icon), {
                                              icon: item.icon,
                                              style: [{ "width": "40px", "height": "40px" }, item.color]
                                            }, null, 8, ["icon", "style"])
                                          ]),
                                          createVNode("div", { class: "card-grid-container" }, [
                                            createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                            createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_row, { gutter: [16, 16] }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(componentData.value, (item, index2) => {
                                return openBlock(), createBlock(_component_a_col, {
                                  key: index2,
                                  xs: 24,
                                  sm: 12,
                                  md: 12,
                                  lg: 6,
                                  xl: 6
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_card_grid, {
                                      class: "card-grid-item",
                                      onClick: ($event) => jumpToTarget(item)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "card-grid-icon" }, [
                                          createVNode(unref(Icon), {
                                            icon: item.icon,
                                            style: [{ "width": "40px", "height": "40px" }, item.color]
                                          }, null, 8, ["icon", "style"])
                                        ]),
                                        createVNode("div", { class: "card-grid-container" }, [
                                          createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                          createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_card, {
                    class: "card-item",
                    id: "anchor-learning-platform",
                    title: "学习平台",
                    headStyle: headStyle.value,
                    bodyStyle: bodyStyle.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_row, { gutter: [16, 16] }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(learningPlatformData.value, (item, index2) => {
                                _push5(ssrRenderComponent(_component_a_col, {
                                  xs: 12,
                                  sm: 12,
                                  md: 12,
                                  lg: 6,
                                  xl: 6
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_a_card_grid, {
                                        class: "card-grid-item",
                                        onClick: ($event) => jumpToTarget(item)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="card-grid-icon" data-v-459fa705${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(Icon), {
                                              icon: item.icon,
                                              style: [{ "width": "40px", "height": "40px" }, item.color]
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="card-grid-container" data-v-459fa705${_scopeId6}><span class="card-grid-title" data-v-459fa705${_scopeId6}>${ssrInterpolate(item.title)}</span><span class="card-grid-desc" data-v-459fa705${_scopeId6}>${ssrInterpolate(item.desc)}</span></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "card-grid-icon" }, [
                                                createVNode(unref(Icon), {
                                                  icon: item.icon,
                                                  style: [{ "width": "40px", "height": "40px" }, item.color]
                                                }, null, 8, ["icon", "style"])
                                              ]),
                                              createVNode("div", { class: "card-grid-container" }, [
                                                createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                                createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_a_card_grid, {
                                          class: "card-grid-item",
                                          onClick: ($event) => jumpToTarget(item)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "card-grid-icon" }, [
                                              createVNode(unref(Icon), {
                                                icon: item.icon,
                                                style: [{ "width": "40px", "height": "40px" }, item.color]
                                              }, null, 8, ["icon", "style"])
                                            ]),
                                            createVNode("div", { class: "card-grid-container" }, [
                                              createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                              createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(learningPlatformData.value, (item, index2) => {
                                  return openBlock(), createBlock(_component_a_col, {
                                    key: index2,
                                    xs: 12,
                                    sm: 12,
                                    md: 12,
                                    lg: 6,
                                    xl: 6
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_card_grid, {
                                        class: "card-grid-item",
                                        onClick: ($event) => jumpToTarget(item)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "card-grid-icon" }, [
                                            createVNode(unref(Icon), {
                                              icon: item.icon,
                                              style: [{ "width": "40px", "height": "40px" }, item.color]
                                            }, null, 8, ["icon", "style"])
                                          ]),
                                          createVNode("div", { class: "card-grid-container" }, [
                                            createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                            createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_row, { gutter: [16, 16] }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(learningPlatformData.value, (item, index2) => {
                                return openBlock(), createBlock(_component_a_col, {
                                  key: index2,
                                  xs: 12,
                                  sm: 12,
                                  md: 12,
                                  lg: 6,
                                  xl: 6
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_card_grid, {
                                      class: "card-grid-item",
                                      onClick: ($event) => jumpToTarget(item)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "card-grid-icon" }, [
                                          createVNode(unref(Icon), {
                                            icon: item.icon,
                                            style: [{ "width": "40px", "height": "40px" }, item.color]
                                          }, null, 8, ["icon", "style"])
                                        ]),
                                        createVNode("div", { class: "card-grid-container" }, [
                                          createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                          createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_card, {
                    class: "card-item",
                    id: "anchor-books",
                    title: "书籍推荐",
                    hoverable: "",
                    headStyle: headStyle.value,
                    bodyStyle: bookBodyStyle.value
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_tabs, {
                          activeKey: activeKey.value,
                          "onUpdate:activeKey": ($event) => activeKey.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_a_tab_pane, { key: "frontend" }, {
                                tab: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span data-v-459fa705${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(PicCenterOutlined), null, null, _parent6, _scopeId5));
                                    _push6(` 前端书籍 </span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, [
                                        createVNode(unref(PicCenterOutlined)),
                                        createTextVNode(" 前端书籍 ")
                                      ])
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Tab 1.... `);
                                  } else {
                                    return [
                                      createTextVNode(" Tab 1.... ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_a_tab_pane, { key: "backend" }, {
                                tab: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span data-v-459fa705${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(PicCenterOutlined), null, null, _parent6, _scopeId5));
                                    _push6(` 后端书籍 </span>`);
                                  } else {
                                    return [
                                      createVNode("span", null, [
                                        createVNode(unref(PicCenterOutlined)),
                                        createTextVNode(" 后端书籍 ")
                                      ])
                                    ];
                                  }
                                }),
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Tab 2... `);
                                  } else {
                                    return [
                                      createTextVNode(" Tab 2... ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_a_tab_pane, { key: "frontend" }, {
                                  tab: withCtx(() => [
                                    createVNode("span", null, [
                                      createVNode(unref(PicCenterOutlined)),
                                      createTextVNode(" 前端书籍 ")
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" Tab 1.... ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_a_tab_pane, { key: "backend" }, {
                                  tab: withCtx(() => [
                                    createVNode("span", null, [
                                      createVNode(unref(PicCenterOutlined)),
                                      createTextVNode(" 后端书籍 ")
                                    ])
                                  ]),
                                  default: withCtx(() => [
                                    createTextVNode(" Tab 2... ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_tabs, {
                            activeKey: activeKey.value,
                            "onUpdate:activeKey": ($event) => activeKey.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_a_tab_pane, { key: "frontend" }, {
                                tab: withCtx(() => [
                                  createVNode("span", null, [
                                    createVNode(unref(PicCenterOutlined)),
                                    createTextVNode(" 前端书籍 ")
                                  ])
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" Tab 1.... ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_a_tab_pane, { key: "backend" }, {
                                tab: withCtx(() => [
                                  createVNode("span", null, [
                                    createVNode(unref(PicCenterOutlined)),
                                    createTextVNode(" 后端书籍 ")
                                  ])
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" Tab 2... ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["activeKey", "onUpdate:activeKey"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_modal, {
                    open: jumpTipDialog.value,
                    "onUpdate:open": ($event) => jumpTipDialog.value = $event,
                    title: "即将离开该平台",
                    onOk: confirmJump,
                    centered: "",
                    keyboard: "",
                    maskClosable: false,
                    closable: false
                  }, {
                    footer: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_button, {
                          key: "back",
                          onClick: handleCancel
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`取消`);
                            } else {
                              return [
                                createTextVNode("取消")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_button, {
                          key: "submit",
                          type: "primary",
                          loading: loading.value,
                          onClick: confirmJump
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`继续访问`);
                            } else {
                              return [
                                createTextVNode("继续访问")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_button, {
                            key: "back",
                            onClick: handleCancel
                          }, {
                            default: withCtx(() => [
                              createTextVNode("取消")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_button, {
                            key: "submit",
                            type: "primary",
                            loading: loading.value,
                            onClick: confirmJump
                          }, {
                            default: withCtx(() => [
                              createTextVNode("继续访问")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_alert, {
                          message: "您即将离开该平台，请注意您的帐号和财产安全",
                          type: "warning",
                          "show-icon": ""
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="tip-content" data-v-459fa705${_scopeId3}><div data-v-459fa705${_scopeId3}>${ssrInterpolate(targetData.value.desc)}</div>`);
                        _push4(ssrRenderComponent(_component_a_button, {
                          type: "link",
                          class: "link-btn",
                          onClick: confirmJump
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(targetData.value.href)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(targetData.value.href), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_a_alert, {
                            message: "您即将离开该平台，请注意您的帐号和财产安全",
                            type: "warning",
                            "show-icon": ""
                          }),
                          createVNode("div", { class: "tip-content" }, [
                            createVNode("div", null, toDisplayString(targetData.value.desc), 1),
                            createVNode(_component_a_button, {
                              type: "link",
                              class: "link-btn",
                              onClick: confirmJump
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(targetData.value.href), 1)
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_card, {
                      class: "card-item",
                      id: "anchor-docs",
                      title: "技术文档",
                      headStyle: headStyle.value,
                      bodyStyle: bodyStyle.value
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_row, { gutter: [16, 16] }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(docsData.value, (item, index2) => {
                              return openBlock(), createBlock(_component_a_col, {
                                key: index2,
                                xs: 24,
                                sm: 12,
                                md: 6,
                                lg: 6,
                                xl: 6
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_card_grid, {
                                    class: "card-grid-item",
                                    onClick: ($event) => jumpToTarget(item)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "card-grid-icon" }, [
                                        createVNode(unref(Icon), {
                                          icon: item.icon,
                                          style: [{ "width": "40px", "height": "40px" }, item.color]
                                        }, null, 8, ["icon", "style"])
                                      ]),
                                      createVNode("div", { class: "card-grid-container" }, [
                                        createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                        createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["headStyle", "bodyStyle"]),
                    createVNode(_component_a_card, {
                      class: "card-item",
                      id: "anchor-community",
                      title: "技术社区",
                      headStyle: headStyle.value,
                      bodyStyle: bodyStyle.value
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_row, { gutter: [16, 16] }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(communityData.value, (item, index2) => {
                              return openBlock(), createBlock(_component_a_col, {
                                key: index2,
                                xs: 24,
                                sm: 12,
                                md: 12,
                                lg: 6,
                                xl: 6
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_card_grid, {
                                    class: "card-grid-item",
                                    onClick: ($event) => jumpToTarget(item)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "card-grid-icon" }, [
                                        createVNode(unref(Icon), {
                                          icon: item.icon,
                                          style: [{ "width": "40px", "height": "40px" }, item.color]
                                        }, null, 8, ["icon", "style"])
                                      ]),
                                      createVNode("div", { class: "card-grid-container" }, [
                                        createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                        createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["headStyle", "bodyStyle"]),
                    createVNode(_component_a_card, {
                      class: "card-item",
                      id: "anchor-components",
                      title: "UI 组件",
                      headStyle: headStyle.value,
                      bodyStyle: bodyStyle.value
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_row, { gutter: [16, 16] }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(componentData.value, (item, index2) => {
                              return openBlock(), createBlock(_component_a_col, {
                                key: index2,
                                xs: 24,
                                sm: 12,
                                md: 12,
                                lg: 6,
                                xl: 6
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_card_grid, {
                                    class: "card-grid-item",
                                    onClick: ($event) => jumpToTarget(item)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "card-grid-icon" }, [
                                        createVNode(unref(Icon), {
                                          icon: item.icon,
                                          style: [{ "width": "40px", "height": "40px" }, item.color]
                                        }, null, 8, ["icon", "style"])
                                      ]),
                                      createVNode("div", { class: "card-grid-container" }, [
                                        createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                        createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["headStyle", "bodyStyle"]),
                    createVNode(_component_a_card, {
                      class: "card-item",
                      id: "anchor-learning-platform",
                      title: "学习平台",
                      headStyle: headStyle.value,
                      bodyStyle: bodyStyle.value
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_row, { gutter: [16, 16] }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(learningPlatformData.value, (item, index2) => {
                              return openBlock(), createBlock(_component_a_col, {
                                key: index2,
                                xs: 12,
                                sm: 12,
                                md: 12,
                                lg: 6,
                                xl: 6
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_card_grid, {
                                    class: "card-grid-item",
                                    onClick: ($event) => jumpToTarget(item)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "card-grid-icon" }, [
                                        createVNode(unref(Icon), {
                                          icon: item.icon,
                                          style: [{ "width": "40px", "height": "40px" }, item.color]
                                        }, null, 8, ["icon", "style"])
                                      ]),
                                      createVNode("div", { class: "card-grid-container" }, [
                                        createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                        createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["headStyle", "bodyStyle"]),
                    createVNode(_component_a_card, {
                      class: "card-item",
                      id: "anchor-books",
                      title: "书籍推荐",
                      hoverable: "",
                      headStyle: headStyle.value,
                      bodyStyle: bookBodyStyle.value
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_tabs, {
                          activeKey: activeKey.value,
                          "onUpdate:activeKey": ($event) => activeKey.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_a_tab_pane, { key: "frontend" }, {
                              tab: withCtx(() => [
                                createVNode("span", null, [
                                  createVNode(unref(PicCenterOutlined)),
                                  createTextVNode(" 前端书籍 ")
                                ])
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Tab 1.... ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_a_tab_pane, { key: "backend" }, {
                              tab: withCtx(() => [
                                createVNode("span", null, [
                                  createVNode(unref(PicCenterOutlined)),
                                  createTextVNode(" 后端书籍 ")
                                ])
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Tab 2... ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["activeKey", "onUpdate:activeKey"])
                      ]),
                      _: 1
                    }, 8, ["headStyle", "bodyStyle"]),
                    createVNode(_component_a_modal, {
                      open: jumpTipDialog.value,
                      "onUpdate:open": ($event) => jumpTipDialog.value = $event,
                      title: "即将离开该平台",
                      onOk: confirmJump,
                      centered: "",
                      keyboard: "",
                      maskClosable: false,
                      closable: false
                    }, {
                      footer: withCtx(() => [
                        createVNode(_component_a_button, {
                          key: "back",
                          onClick: handleCancel
                        }, {
                          default: withCtx(() => [
                            createTextVNode("取消")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_button, {
                          key: "submit",
                          type: "primary",
                          loading: loading.value,
                          onClick: confirmJump
                        }, {
                          default: withCtx(() => [
                            createTextVNode("继续访问")
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_a_alert, {
                          message: "您即将离开该平台，请注意您的帐号和财产安全",
                          type: "warning",
                          "show-icon": ""
                        }),
                        createVNode("div", { class: "tip-content" }, [
                          createVNode("div", null, toDisplayString(targetData.value.desc), 1),
                          createVNode(_component_a_button, {
                            type: "link",
                            class: "link-btn",
                            onClick: confirmJump
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(targetData.value.href), 1)
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["open", "onUpdate:open"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, {
              xs: 5,
              sm: 5,
              md: 4,
              lg: 4,
              xl: 3
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="anchor" data-v-459fa705${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_a_affix, { "offset-top": 74 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_anchor, {
                          offsetTop: 64,
                          affix: false,
                          showInkInFixed: true,
                          items: anchorData.value
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_anchor, {
                            offsetTop: 64,
                            affix: false,
                            showInkInFixed: true,
                            items: anchorData.value
                          }, null, 8, ["items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "anchor" }, [
                      createVNode(_component_a_affix, { "offset-top": 74 }, {
                        default: withCtx(() => [
                          createVNode(_component_a_anchor, {
                            offsetTop: 64,
                            affix: false,
                            showInkInFixed: true,
                            items: anchorData.value
                          }, null, 8, ["items"])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, {
                xs: 19,
                sm: 19,
                md: 20,
                lg: 20,
                xl: 21
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_card, {
                    class: "card-item",
                    id: "anchor-docs",
                    title: "技术文档",
                    headStyle: headStyle.value,
                    bodyStyle: bodyStyle.value
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_row, { gutter: [16, 16] }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(docsData.value, (item, index2) => {
                            return openBlock(), createBlock(_component_a_col, {
                              key: index2,
                              xs: 24,
                              sm: 12,
                              md: 6,
                              lg: 6,
                              xl: 6
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_card_grid, {
                                  class: "card-grid-item",
                                  onClick: ($event) => jumpToTarget(item)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "card-grid-icon" }, [
                                      createVNode(unref(Icon), {
                                        icon: item.icon,
                                        style: [{ "width": "40px", "height": "40px" }, item.color]
                                      }, null, 8, ["icon", "style"])
                                    ]),
                                    createVNode("div", { class: "card-grid-container" }, [
                                      createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                      createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["headStyle", "bodyStyle"]),
                  createVNode(_component_a_card, {
                    class: "card-item",
                    id: "anchor-community",
                    title: "技术社区",
                    headStyle: headStyle.value,
                    bodyStyle: bodyStyle.value
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_row, { gutter: [16, 16] }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(communityData.value, (item, index2) => {
                            return openBlock(), createBlock(_component_a_col, {
                              key: index2,
                              xs: 24,
                              sm: 12,
                              md: 12,
                              lg: 6,
                              xl: 6
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_card_grid, {
                                  class: "card-grid-item",
                                  onClick: ($event) => jumpToTarget(item)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "card-grid-icon" }, [
                                      createVNode(unref(Icon), {
                                        icon: item.icon,
                                        style: [{ "width": "40px", "height": "40px" }, item.color]
                                      }, null, 8, ["icon", "style"])
                                    ]),
                                    createVNode("div", { class: "card-grid-container" }, [
                                      createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                      createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["headStyle", "bodyStyle"]),
                  createVNode(_component_a_card, {
                    class: "card-item",
                    id: "anchor-components",
                    title: "UI 组件",
                    headStyle: headStyle.value,
                    bodyStyle: bodyStyle.value
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_row, { gutter: [16, 16] }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(componentData.value, (item, index2) => {
                            return openBlock(), createBlock(_component_a_col, {
                              key: index2,
                              xs: 24,
                              sm: 12,
                              md: 12,
                              lg: 6,
                              xl: 6
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_card_grid, {
                                  class: "card-grid-item",
                                  onClick: ($event) => jumpToTarget(item)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "card-grid-icon" }, [
                                      createVNode(unref(Icon), {
                                        icon: item.icon,
                                        style: [{ "width": "40px", "height": "40px" }, item.color]
                                      }, null, 8, ["icon", "style"])
                                    ]),
                                    createVNode("div", { class: "card-grid-container" }, [
                                      createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                      createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["headStyle", "bodyStyle"]),
                  createVNode(_component_a_card, {
                    class: "card-item",
                    id: "anchor-learning-platform",
                    title: "学习平台",
                    headStyle: headStyle.value,
                    bodyStyle: bodyStyle.value
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_row, { gutter: [16, 16] }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(learningPlatformData.value, (item, index2) => {
                            return openBlock(), createBlock(_component_a_col, {
                              key: index2,
                              xs: 12,
                              sm: 12,
                              md: 12,
                              lg: 6,
                              xl: 6
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_card_grid, {
                                  class: "card-grid-item",
                                  onClick: ($event) => jumpToTarget(item)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "card-grid-icon" }, [
                                      createVNode(unref(Icon), {
                                        icon: item.icon,
                                        style: [{ "width": "40px", "height": "40px" }, item.color]
                                      }, null, 8, ["icon", "style"])
                                    ]),
                                    createVNode("div", { class: "card-grid-container" }, [
                                      createVNode("span", { class: "card-grid-title" }, toDisplayString(item.title), 1),
                                      createVNode("span", { class: "card-grid-desc" }, toDisplayString(item.desc), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["headStyle", "bodyStyle"]),
                  createVNode(_component_a_card, {
                    class: "card-item",
                    id: "anchor-books",
                    title: "书籍推荐",
                    hoverable: "",
                    headStyle: headStyle.value,
                    bodyStyle: bookBodyStyle.value
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_tabs, {
                        activeKey: activeKey.value,
                        "onUpdate:activeKey": ($event) => activeKey.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_tab_pane, { key: "frontend" }, {
                            tab: withCtx(() => [
                              createVNode("span", null, [
                                createVNode(unref(PicCenterOutlined)),
                                createTextVNode(" 前端书籍 ")
                              ])
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Tab 1.... ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tab_pane, { key: "backend" }, {
                            tab: withCtx(() => [
                              createVNode("span", null, [
                                createVNode(unref(PicCenterOutlined)),
                                createTextVNode(" 后端书籍 ")
                              ])
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Tab 2... ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["activeKey", "onUpdate:activeKey"])
                    ]),
                    _: 1
                  }, 8, ["headStyle", "bodyStyle"]),
                  createVNode(_component_a_modal, {
                    open: jumpTipDialog.value,
                    "onUpdate:open": ($event) => jumpTipDialog.value = $event,
                    title: "即将离开该平台",
                    onOk: confirmJump,
                    centered: "",
                    keyboard: "",
                    maskClosable: false,
                    closable: false
                  }, {
                    footer: withCtx(() => [
                      createVNode(_component_a_button, {
                        key: "back",
                        onClick: handleCancel
                      }, {
                        default: withCtx(() => [
                          createTextVNode("取消")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_button, {
                        key: "submit",
                        type: "primary",
                        loading: loading.value,
                        onClick: confirmJump
                      }, {
                        default: withCtx(() => [
                          createTextVNode("继续访问")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_a_alert, {
                        message: "您即将离开该平台，请注意您的帐号和财产安全",
                        type: "warning",
                        "show-icon": ""
                      }),
                      createVNode("div", { class: "tip-content" }, [
                        createVNode("div", null, toDisplayString(targetData.value.desc), 1),
                        createVNode(_component_a_button, {
                          type: "link",
                          class: "link-btn",
                          onClick: confirmJump
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(targetData.value.href), 1)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["open", "onUpdate:open"])
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                xs: 5,
                sm: 5,
                md: 4,
                lg: 4,
                xl: 3
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "anchor" }, [
                    createVNode(_component_a_affix, { "offset-top": 74 }, {
                      default: withCtx(() => [
                        createVNode(_component_a_anchor, {
                          offsetTop: 64,
                          affix: false,
                          showInkInFixed: true,
                          items: anchorData.value
                        }, null, 8, ["items"])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/views/Resource.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Resource = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-459fa705"]]);
const __pageData = JSON.parse('{"title":"资源导航","description":"","frontmatter":{"title":"资源导航","layout":"page"},"headers":[],"relativePath":"exploration/resource/index.md","filePath":"exploration/resource/index.md","lastUpdated":1714316212000}');
const __default__ = { name: "exploration/resource/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1044ac50>`);
      _push(ssrRenderComponent(Resource, { class: "container" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("exploration/resource/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1044ac50"]]);
export {
  __pageData,
  index as default
};
