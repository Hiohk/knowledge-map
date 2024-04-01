import { useSSRContext, ref, resolveComponent, withCtx, unref, openBlock, createBlock, createVNode, toDisplayString, createTextVNode, mergeProps, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined, SmileTwoTone, EyeOutlined, MessageOutlined, MessageTwoTone, UpOutlined, LikeTwoTone, ShareAltOutlined, WechatOutlined, QqOutlined, WeiboCircleOutlined, EllipsisOutlined } from "@ant-design/icons-vue";
import dayjs from "dayjs";
import { message } from "ant-design-vue";
import relativeTime from "dayjs/plugin/relativeTime.js";
import "dayjs/locale/zh-cn.js";
import { _ as _export_sfc } from "./app.js";
import "@vueuse/core";
import "@vueuse/integrations/useFocusTrap";
import "mark.js/src/vanilla.js";
import "minisearch";
const avatarImg = "/knowledge-graph/assets/avatarImg.BWcCNF6K.svg";
const _sfc_main$3 = {
  __name: "Comment",
  __ssrInlineRender: true,
  setup(__props) {
    dayjs.extend(relativeTime);
    dayjs.locale("zh-cn");
    const comments = ref([
      {
        author: "Leonard",
        avatar: avatarImg,
        content: "Object.assign()可以实现深拷贝？",
        datetime: dayjs(),
        likes: 0,
        dislikes: 0
      }
    ]);
    const submitting = ref(false);
    const commentText = ref("");
    const replyText = ref("请输入你的评论");
    const like = (item) => {
      item.likes = 1;
      item.dislikes = 0;
      item.action = "liked";
    };
    const dislike = (item) => {
      item.dislikes = 1;
      item.likes = 0;
      item.action = "disliked";
    };
    const handleSubmit = () => {
      if (commentText.value === "") {
        message.info("请输入你的评论");
        return;
      }
      submitting.value = true;
      setTimeout(() => {
        submitting.value = false;
        comments.value = [
          {
            author: "Leonard" + generateRandomNumberString(5),
            avatar: avatarImg,
            content: commentText.value,
            datetime: dayjs(),
            likes: 0,
            dislikes: 0
          },
          ...comments.value
        ];
        message.success("评论成功");
        commentText.value = "";
        replyText.value = "请输入你的评论";
      }, 1e3);
    };
    const replyAuthor = (item) => {
      replyText.value = "回复 @" + item.author;
    };
    const generateRandomNumberString = (length) => {
      let result = "";
      let characters = "0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_list = resolveComponent("a-list");
      const _component_a_list_item = resolveComponent("a-list-item");
      const _component_a_comment = resolveComponent("a-comment");
      const _component_a_tooltip = resolveComponent("a-tooltip");
      const _component_a_avatar = resolveComponent("a-avatar");
      const _component_a_form_item = resolveComponent("a-form-item");
      const _component_a_textarea = resolveComponent("a-textarea");
      const _component_a_button = resolveComponent("a-button");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-55e14302>`);
      if (comments.value.length) {
        _push(ssrRenderComponent(_component_a_list, {
          "data-source": comments.value,
          header: `${comments.value.length} 评论`,
          "item-layout": "horizontal"
        }, {
          renderItem: withCtx(({ item }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_list_item, null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_comment, null, {
                      actions: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span data-v-55e14302${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_a_tooltip, { title: "赞" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (item.action === "liked") {
                                  _push5(ssrRenderComponent(unref(LikeFilled), {
                                    onClick: ($event) => like(item)
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(ssrRenderComponent(unref(LikeOutlined), {
                                    onClick: ($event) => like(item)
                                  }, null, _parent5, _scopeId4));
                                }
                              } else {
                                return [
                                  item.action === "liked" ? (openBlock(), createBlock(unref(LikeFilled), {
                                    key: 0,
                                    onClick: ($event) => like(item)
                                  }, null, 8, ["onClick"])) : (openBlock(), createBlock(unref(LikeOutlined), {
                                    key: 1,
                                    onClick: ($event) => like(item)
                                  }, null, 8, ["onClick"]))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<span style="${ssrRenderStyle({ "padding-left": "8px", "cursor": "auto" })}" data-v-55e14302${_scopeId3}>${ssrInterpolate(item.likes)}</span></span><span data-v-55e14302${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_a_tooltip, { title: "踩一下" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (item.action === "disliked") {
                                  _push5(ssrRenderComponent(unref(DislikeFilled), {
                                    onClick: ($event) => dislike(item)
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(ssrRenderComponent(unref(DislikeOutlined), {
                                    onClick: ($event) => dislike(item)
                                  }, null, _parent5, _scopeId4));
                                }
                              } else {
                                return [
                                  item.action === "disliked" ? (openBlock(), createBlock(unref(DislikeFilled), {
                                    key: 0,
                                    onClick: ($event) => dislike(item)
                                  }, null, 8, ["onClick"])) : (openBlock(), createBlock(unref(DislikeOutlined), {
                                    key: 1,
                                    onClick: ($event) => dislike(item)
                                  }, null, 8, ["onClick"]))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<span style="${ssrRenderStyle({ "padding-left": "8px", "cursor": "auto" })}" data-v-55e14302${_scopeId3}>${ssrInterpolate(item.dislikes)}</span></span><span data-v-55e14302${_scopeId3}>回复</span>`);
                        } else {
                          return [
                            createVNode("span", { key: "comment-basic-like" }, [
                              createVNode(_component_a_tooltip, { title: "赞" }, {
                                default: withCtx(() => [
                                  item.action === "liked" ? (openBlock(), createBlock(unref(LikeFilled), {
                                    key: 0,
                                    onClick: ($event) => like(item)
                                  }, null, 8, ["onClick"])) : (openBlock(), createBlock(unref(LikeOutlined), {
                                    key: 1,
                                    onClick: ($event) => like(item)
                                  }, null, 8, ["onClick"]))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("span", { style: { "padding-left": "8px", "cursor": "auto" } }, toDisplayString(item.likes), 1)
                            ]),
                            createVNode("span", { key: "comment-basic-dislike" }, [
                              createVNode(_component_a_tooltip, { title: "踩一下" }, {
                                default: withCtx(() => [
                                  item.action === "disliked" ? (openBlock(), createBlock(unref(DislikeFilled), {
                                    key: 0,
                                    onClick: ($event) => dislike(item)
                                  }, null, 8, ["onClick"])) : (openBlock(), createBlock(unref(DislikeOutlined), {
                                    key: 1,
                                    onClick: ($event) => dislike(item)
                                  }, null, 8, ["onClick"]))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("span", { style: { "padding-left": "8px", "cursor": "auto" } }, toDisplayString(item.dislikes), 1)
                            ]),
                            createVNode("span", {
                              key: "comment-basic-reply-to",
                              onClick: ($event) => replyAuthor(item)
                            }, "回复", 8, ["onClick"])
                          ];
                        }
                      }),
                      author: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a data-v-55e14302${_scopeId3}>${ssrInterpolate(item.author)}</a>`);
                        } else {
                          return [
                            createVNode("a", null, toDisplayString(item.author), 1)
                          ];
                        }
                      }),
                      avatar: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_avatar, {
                            src: unref(avatarImg),
                            alt: "Michael"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_avatar, {
                              src: unref(avatarImg),
                              alt: "Michael"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      content: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="comment-content" data-v-55e14302${_scopeId3}>${ssrInterpolate(item.content)}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "comment-content" }, toDisplayString(item.content), 1)
                          ];
                        }
                      }),
                      datetime: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_tooltip, {
                            title: item.datetime.format("YYYY-MM-DD HH:mm:ss")
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span data-v-55e14302${_scopeId4}>${ssrInterpolate(item.datetime.fromNow())}</span>`);
                              } else {
                                return [
                                  createVNode("span", null, toDisplayString(item.datetime.fromNow()), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_tooltip, {
                              title: item.datetime.format("YYYY-MM-DD HH:mm:ss")
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, toDisplayString(item.datetime.fromNow()), 1)
                              ]),
                              _: 2
                            }, 1032, ["title"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_comment, null, {
                        actions: withCtx(() => [
                          createVNode("span", { key: "comment-basic-like" }, [
                            createVNode(_component_a_tooltip, { title: "赞" }, {
                              default: withCtx(() => [
                                item.action === "liked" ? (openBlock(), createBlock(unref(LikeFilled), {
                                  key: 0,
                                  onClick: ($event) => like(item)
                                }, null, 8, ["onClick"])) : (openBlock(), createBlock(unref(LikeOutlined), {
                                  key: 1,
                                  onClick: ($event) => like(item)
                                }, null, 8, ["onClick"]))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("span", { style: { "padding-left": "8px", "cursor": "auto" } }, toDisplayString(item.likes), 1)
                          ]),
                          createVNode("span", { key: "comment-basic-dislike" }, [
                            createVNode(_component_a_tooltip, { title: "踩一下" }, {
                              default: withCtx(() => [
                                item.action === "disliked" ? (openBlock(), createBlock(unref(DislikeFilled), {
                                  key: 0,
                                  onClick: ($event) => dislike(item)
                                }, null, 8, ["onClick"])) : (openBlock(), createBlock(unref(DislikeOutlined), {
                                  key: 1,
                                  onClick: ($event) => dislike(item)
                                }, null, 8, ["onClick"]))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("span", { style: { "padding-left": "8px", "cursor": "auto" } }, toDisplayString(item.dislikes), 1)
                          ]),
                          createVNode("span", {
                            key: "comment-basic-reply-to",
                            onClick: ($event) => replyAuthor(item)
                          }, "回复", 8, ["onClick"])
                        ]),
                        author: withCtx(() => [
                          createVNode("a", null, toDisplayString(item.author), 1)
                        ]),
                        avatar: withCtx(() => [
                          createVNode(_component_a_avatar, {
                            src: unref(avatarImg),
                            alt: "Michael"
                          }, null, 8, ["src"])
                        ]),
                        content: withCtx(() => [
                          createVNode("p", { class: "comment-content" }, toDisplayString(item.content), 1)
                        ]),
                        datetime: withCtx(() => [
                          createVNode(_component_a_tooltip, {
                            title: item.datetime.format("YYYY-MM-DD HH:mm:ss")
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(item.datetime.fromNow()), 1)
                            ]),
                            _: 2
                          }, 1032, ["title"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_list_item, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_comment, null, {
                      actions: withCtx(() => [
                        createVNode("span", { key: "comment-basic-like" }, [
                          createVNode(_component_a_tooltip, { title: "赞" }, {
                            default: withCtx(() => [
                              item.action === "liked" ? (openBlock(), createBlock(unref(LikeFilled), {
                                key: 0,
                                onClick: ($event) => like(item)
                              }, null, 8, ["onClick"])) : (openBlock(), createBlock(unref(LikeOutlined), {
                                key: 1,
                                onClick: ($event) => like(item)
                              }, null, 8, ["onClick"]))
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("span", { style: { "padding-left": "8px", "cursor": "auto" } }, toDisplayString(item.likes), 1)
                        ]),
                        createVNode("span", { key: "comment-basic-dislike" }, [
                          createVNode(_component_a_tooltip, { title: "踩一下" }, {
                            default: withCtx(() => [
                              item.action === "disliked" ? (openBlock(), createBlock(unref(DislikeFilled), {
                                key: 0,
                                onClick: ($event) => dislike(item)
                              }, null, 8, ["onClick"])) : (openBlock(), createBlock(unref(DislikeOutlined), {
                                key: 1,
                                onClick: ($event) => dislike(item)
                              }, null, 8, ["onClick"]))
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("span", { style: { "padding-left": "8px", "cursor": "auto" } }, toDisplayString(item.dislikes), 1)
                        ]),
                        createVNode("span", {
                          key: "comment-basic-reply-to",
                          onClick: ($event) => replyAuthor(item)
                        }, "回复", 8, ["onClick"])
                      ]),
                      author: withCtx(() => [
                        createVNode("a", null, toDisplayString(item.author), 1)
                      ]),
                      avatar: withCtx(() => [
                        createVNode(_component_a_avatar, {
                          src: unref(avatarImg),
                          alt: "Michael"
                        }, null, 8, ["src"])
                      ]),
                      content: withCtx(() => [
                        createVNode("p", { class: "comment-content" }, toDisplayString(item.content), 1)
                      ]),
                      datetime: withCtx(() => [
                        createVNode(_component_a_tooltip, {
                          title: item.datetime.format("YYYY-MM-DD HH:mm:ss")
                        }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(item.datetime.fromNow()), 1)
                          ]),
                          _: 2
                        }, 1032, ["title"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_a_comment, null, {
        avatar: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_avatar, {
              src: unref(avatarImg),
              alt: "Han Solo"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_avatar, {
                src: unref(avatarImg),
                alt: "Han Solo"
              }, null, 8, ["src"])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_form_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_textarea, {
                    value: commentText.value,
                    "onUpdate:value": ($event) => commentText.value = $event,
                    rows: 4,
                    placeholder: replyText.value,
                    "show-count": "",
                    maxlength: 200
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_textarea, {
                      value: commentText.value,
                      "onUpdate:value": ($event) => commentText.value = $event,
                      rows: 4,
                      placeholder: replyText.value,
                      "show-count": "",
                      maxlength: 200
                    }, null, 8, ["value", "onUpdate:value", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_form_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_button, {
                    "html-type": "submit",
                    loading: submitting.value,
                    type: "primary",
                    onClick: handleSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 添加评论 `);
                      } else {
                        return [
                          createTextVNode(" 添加评论 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_button, {
                      "html-type": "submit",
                      loading: submitting.value,
                      type: "primary",
                      onClick: handleSubmit
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 添加评论 ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_a_textarea, {
                    value: commentText.value,
                    "onUpdate:value": ($event) => commentText.value = $event,
                    rows: 4,
                    placeholder: replyText.value,
                    "show-count": "",
                    maxlength: 200
                  }, null, 8, ["value", "onUpdate:value", "placeholder"])
                ]),
                _: 1
              }),
              createVNode(_component_a_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_a_button, {
                    "html-type": "submit",
                    loading: submitting.value,
                    type: "primary",
                    onClick: handleSubmit
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 添加评论 ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/views/Comment.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Comment = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-55e14302"]]);
const _sfc_main$2 = {
  __name: "Blog",
  __ssrInlineRender: true,
  emits: ["getPaperDetail"],
  setup(__props, { emit: __emit }) {
    const blogData = ref([
      {
        title: "Object.assign 这算是深拷贝吗",
        content: "在JavaScript中，Object.assign() 是一个用于合并对象属性的常见方法。然而，对于许多开发者来说，关于它是否执行深拷贝的认识可能存在一些混淆。先说答案Object.assign()",
        date: "2024-02-28 22:12:23",
        pageViews: 123,
        likes: 45,
        comments: 3,
        showComment: false
      },
      {
        title: "防抖是回城，节流是攻击",
        content: "防抖和节流是前端开发中常用的函数优化手段，它们可以限制函数的执行频率，提升性能和用户体验。在我们的日常开发中，经常会遇到一些需要对函数进行优化的场景，比如防止表单的重复提交。",
        date: "2024-02-29 12:30:01",
        pageViews: 12,
        likes: 4,
        comments: 2,
        showComment: false
      },
      {
        title: "$nextTick底层原理(详细) - vue篇",
        content: "nextTick 是 Vue 的一个核心实现，$nextTick方法将回调延迟到下次DOM更新循环之后执行。Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用。",
        date: "2024-02-29 12:30:01",
        pageViews: 12,
        likes: 4,
        comments: 2,
        showComment: false
      },
      {
        title: "js中，对象的29个方法你都知道吗",
        content: "在js中，对象类型是非常重要的类型之一，也是项目中数据处理常用的类型之一，虽然这种类型我们经常使用，但是它的方法却不怎么用的到或者很少用到，",
        date: "2024-02-29 12:30:01",
        pageViews: 12,
        likes: 4,
        comments: 2,
        showComment: false
      }
    ]);
    const emit = __emit;
    const keywords = ref("");
    const currentPage = ref(1);
    const pageSize = ref(5);
    const pageSizeOptions = ref(["5", "10", "20", "30", "50", "100"]);
    const showTips = ref(true);
    const searchBlog = (data) => {
    };
    const closeTips = () => {
      showTips.value = false;
    };
    const toggleComment = (item) => {
      item.showComment = !item.showComment;
    };
    const toDetailPage = (item) => {
      emit("getPaperDetail", item);
    };
    const foldComment = (item) => {
      item.showComment = !item.showComment;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_input_search = resolveComponent("a-input-search");
      const _component_a_space = resolveComponent("a-space");
      const _component_a_alert = resolveComponent("a-alert");
      const _component_a_card = resolveComponent("a-card");
      const _component_a_card_meta = resolveComponent("a-card-meta");
      const _component_a_row = resolveComponent("a-row");
      const _component_a_col = resolveComponent("a-col");
      const _component_a_divider = resolveComponent("a-divider");
      const _component_a_tag = resolveComponent("a-tag");
      const _component_a_button = resolveComponent("a-button");
      const _component_a_pagination = resolveComponent("a-pagination");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="search">`);
      _push(ssrRenderComponent(_component_a_input_search, {
        value: keywords.value,
        "onUpdate:value": ($event) => keywords.value = $event,
        size: "large",
        placeholder: "请输入关键词搜索",
        "enter-button": "",
        onSearch: ($event) => searchBlog()
      }, null, _parent));
      _push(`</div>`);
      if (showTips.value) {
        _push(`<div class="tips">`);
        _push(ssrRenderComponent(_component_a_space, {
          direction: "vertical",
          style: { "width": "100%" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_alert, {
                message: "致力于实现全面自动化的可实时部署的技术博客共享！",
                type: "success",
                "show-icon": "",
                closable: "",
                onClose: closeTips
              }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(SmileTwoTone), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(SmileTwoTone))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_alert, {
                  message: "致力于实现全面自动化的可实时部署的技术博客共享！",
                  type: "success",
                  "show-icon": "",
                  closable: "",
                  onClose: closeTips
                }, {
                  icon: withCtx(() => [
                    createVNode(unref(SmileTwoTone))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(blogData.value, (item, index) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_a_card, {
          class: "blog-card",
          hoverable: "",
          size: "small",
          onClick: ($event) => toDetailPage(item)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_card_meta, {
                title: item.title
              }, {
                description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_row, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_col, { span: 20 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_a_row, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_a_col, {
                                        span: 24,
                                        class: "blog-content"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.content)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.content), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_a_col, {
                                        span: 24,
                                        class: "blog-bottom"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_a_row, null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_a_col, { span: 12 }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<span${_scopeId8}>发布于${ssrInterpolate(item.date)}</span>`);
                                                        _push9(ssrRenderComponent(_component_a_divider, { type: "vertical" }, null, _parent9, _scopeId8));
                                                        _push9(`<span class="icon-item"${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(unref(EyeOutlined), null, null, _parent9, _scopeId8));
                                                        _push9(` ${ssrInterpolate(item.pageViews)}</span><span class="icon-item"${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(unref(LikeOutlined), null, null, _parent9, _scopeId8));
                                                        _push9(` ${ssrInterpolate(item.likes)}</span><span class="icon-item"${_scopeId8}>`);
                                                        if (!item.showComment) {
                                                          _push9(`<span${_scopeId8}>`);
                                                          _push9(ssrRenderComponent(unref(MessageOutlined), null, null, _parent9, _scopeId8));
                                                          _push9(`</span>`);
                                                        } else {
                                                          _push9(`<span${_scopeId8}>`);
                                                          _push9(ssrRenderComponent(unref(MessageTwoTone), null, null, _parent9, _scopeId8));
                                                          _push9(`</span>`);
                                                        }
                                                        _push9(` ${ssrInterpolate(item.comments)}</span><span${_scopeId8}></span>`);
                                                      } else {
                                                        return [
                                                          createVNode("span", null, "发布于" + toDisplayString(item.date), 1),
                                                          createVNode(_component_a_divider, { type: "vertical" }),
                                                          createVNode("span", { class: "icon-item" }, [
                                                            createVNode(unref(EyeOutlined)),
                                                            createTextVNode(" " + toDisplayString(item.pageViews), 1)
                                                          ]),
                                                          createVNode("span", { class: "icon-item" }, [
                                                            createVNode(unref(LikeOutlined)),
                                                            createTextVNode(" " + toDisplayString(item.likes), 1)
                                                          ]),
                                                          createVNode("span", {
                                                            class: "icon-item",
                                                            onClick: withModifiers(($event) => toggleComment(item), ["stop"])
                                                          }, [
                                                            !item.showComment ? (openBlock(), createBlock("span", { key: 0 }, [
                                                              createVNode(unref(MessageOutlined))
                                                            ])) : (openBlock(), createBlock("span", { key: 1 }, [
                                                              createVNode(unref(MessageTwoTone))
                                                            ])),
                                                            createTextVNode(" " + toDisplayString(item.comments), 1)
                                                          ], 8, ["onClick"]),
                                                          createVNode("span")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_a_col, { span: 12 }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<span class="tag"${_scopeId8}>`);
                                                        _push9(ssrRenderComponent(_component_a_tag, { color: "pink" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`前端`);
                                                            } else {
                                                              return [
                                                                createTextVNode("前端")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_a_tag, { color: "red" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`JavaScript`);
                                                            } else {
                                                              return [
                                                                createTextVNode("JavaScript")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_a_tag, { color: "orange" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`Vue.js`);
                                                            } else {
                                                              return [
                                                                createTextVNode("Vue.js")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_a_tag, { color: "green" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`基础知识`);
                                                            } else {
                                                              return [
                                                                createTextVNode("基础知识")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_a_tag, { color: "cyan" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`编程`);
                                                            } else {
                                                              return [
                                                                createTextVNode("编程")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(ssrRenderComponent(_component_a_tag, { color: "purple" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`笔试`);
                                                            } else {
                                                              return [
                                                                createTextVNode("笔试")
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                        _push9(`</span>`);
                                                      } else {
                                                        return [
                                                          createVNode("span", { class: "tag" }, [
                                                            createVNode(_component_a_tag, { color: "pink" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("前端")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_a_tag, { color: "red" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("JavaScript")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_a_tag, { color: "orange" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Vue.js")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_a_tag, { color: "green" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("基础知识")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_a_tag, { color: "cyan" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("编程")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(_component_a_tag, { color: "purple" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("笔试")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_a_col, { span: 12 }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", null, "发布于" + toDisplayString(item.date), 1),
                                                        createVNode(_component_a_divider, { type: "vertical" }),
                                                        createVNode("span", { class: "icon-item" }, [
                                                          createVNode(unref(EyeOutlined)),
                                                          createTextVNode(" " + toDisplayString(item.pageViews), 1)
                                                        ]),
                                                        createVNode("span", { class: "icon-item" }, [
                                                          createVNode(unref(LikeOutlined)),
                                                          createTextVNode(" " + toDisplayString(item.likes), 1)
                                                        ]),
                                                        createVNode("span", {
                                                          class: "icon-item",
                                                          onClick: withModifiers(($event) => toggleComment(item), ["stop"])
                                                        }, [
                                                          !item.showComment ? (openBlock(), createBlock("span", { key: 0 }, [
                                                            createVNode(unref(MessageOutlined))
                                                          ])) : (openBlock(), createBlock("span", { key: 1 }, [
                                                            createVNode(unref(MessageTwoTone))
                                                          ])),
                                                          createTextVNode(" " + toDisplayString(item.comments), 1)
                                                        ], 8, ["onClick"]),
                                                        createVNode("span")
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(_component_a_col, { span: 12 }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", { class: "tag" }, [
                                                          createVNode(_component_a_tag, { color: "pink" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("前端")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_a_tag, { color: "red" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("JavaScript")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_a_tag, { color: "orange" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Vue.js")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_a_tag, { color: "green" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("基础知识")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_a_tag, { color: "cyan" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("编程")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(_component_a_tag, { color: "purple" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("笔试")
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
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_a_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_a_col, { span: 12 }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, "发布于" + toDisplayString(item.date), 1),
                                                      createVNode(_component_a_divider, { type: "vertical" }),
                                                      createVNode("span", { class: "icon-item" }, [
                                                        createVNode(unref(EyeOutlined)),
                                                        createTextVNode(" " + toDisplayString(item.pageViews), 1)
                                                      ]),
                                                      createVNode("span", { class: "icon-item" }, [
                                                        createVNode(unref(LikeOutlined)),
                                                        createTextVNode(" " + toDisplayString(item.likes), 1)
                                                      ]),
                                                      createVNode("span", {
                                                        class: "icon-item",
                                                        onClick: withModifiers(($event) => toggleComment(item), ["stop"])
                                                      }, [
                                                        !item.showComment ? (openBlock(), createBlock("span", { key: 0 }, [
                                                          createVNode(unref(MessageOutlined))
                                                        ])) : (openBlock(), createBlock("span", { key: 1 }, [
                                                          createVNode(unref(MessageTwoTone))
                                                        ])),
                                                        createTextVNode(" " + toDisplayString(item.comments), 1)
                                                      ], 8, ["onClick"]),
                                                      createVNode("span")
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(_component_a_col, { span: 12 }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", { class: "tag" }, [
                                                        createVNode(_component_a_tag, { color: "pink" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("前端")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_a_tag, { color: "red" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("JavaScript")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_a_tag, { color: "orange" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Vue.js")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_a_tag, { color: "green" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("基础知识")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_a_tag, { color: "cyan" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("编程")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(_component_a_tag, { color: "purple" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("笔试")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_a_col, {
                                          span: 24,
                                          class: "blog-content"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.content), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_a_col, {
                                          span: 24,
                                          class: "blog-bottom"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_a_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_a_col, { span: 12 }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", null, "发布于" + toDisplayString(item.date), 1),
                                                    createVNode(_component_a_divider, { type: "vertical" }),
                                                    createVNode("span", { class: "icon-item" }, [
                                                      createVNode(unref(EyeOutlined)),
                                                      createTextVNode(" " + toDisplayString(item.pageViews), 1)
                                                    ]),
                                                    createVNode("span", { class: "icon-item" }, [
                                                      createVNode(unref(LikeOutlined)),
                                                      createTextVNode(" " + toDisplayString(item.likes), 1)
                                                    ]),
                                                    createVNode("span", {
                                                      class: "icon-item",
                                                      onClick: withModifiers(($event) => toggleComment(item), ["stop"])
                                                    }, [
                                                      !item.showComment ? (openBlock(), createBlock("span", { key: 0 }, [
                                                        createVNode(unref(MessageOutlined))
                                                      ])) : (openBlock(), createBlock("span", { key: 1 }, [
                                                        createVNode(unref(MessageTwoTone))
                                                      ])),
                                                      createTextVNode(" " + toDisplayString(item.comments), 1)
                                                    ], 8, ["onClick"]),
                                                    createVNode("span")
                                                  ]),
                                                  _: 2
                                                }, 1024),
                                                createVNode(_component_a_col, { span: 12 }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", { class: "tag" }, [
                                                      createVNode(_component_a_tag, { color: "pink" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("前端")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_a_tag, { color: "red" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("JavaScript")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_a_tag, { color: "orange" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Vue.js")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_a_tag, { color: "green" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("基础知识")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_a_tag, { color: "cyan" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("编程")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(_component_a_tag, { color: "purple" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("笔试")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_a_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_col, {
                                        span: 24,
                                        class: "blog-content"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.content), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_a_col, {
                                        span: 24,
                                        class: "blog-bottom"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_a_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_a_col, { span: 12 }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, "发布于" + toDisplayString(item.date), 1),
                                                  createVNode(_component_a_divider, { type: "vertical" }),
                                                  createVNode("span", { class: "icon-item" }, [
                                                    createVNode(unref(EyeOutlined)),
                                                    createTextVNode(" " + toDisplayString(item.pageViews), 1)
                                                  ]),
                                                  createVNode("span", { class: "icon-item" }, [
                                                    createVNode(unref(LikeOutlined)),
                                                    createTextVNode(" " + toDisplayString(item.likes), 1)
                                                  ]),
                                                  createVNode("span", {
                                                    class: "icon-item",
                                                    onClick: withModifiers(($event) => toggleComment(item), ["stop"])
                                                  }, [
                                                    !item.showComment ? (openBlock(), createBlock("span", { key: 0 }, [
                                                      createVNode(unref(MessageOutlined))
                                                    ])) : (openBlock(), createBlock("span", { key: 1 }, [
                                                      createVNode(unref(MessageTwoTone))
                                                    ])),
                                                    createTextVNode(" " + toDisplayString(item.comments), 1)
                                                  ], 8, ["onClick"]),
                                                  createVNode("span")
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_a_col, { span: 12 }, {
                                                default: withCtx(() => [
                                                  createVNode("span", { class: "tag" }, [
                                                    createVNode(_component_a_tag, { color: "pink" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("前端")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_a_tag, { color: "red" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("JavaScript")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_a_tag, { color: "orange" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Vue.js")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_a_tag, { color: "green" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("基础知识")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_a_tag, { color: "cyan" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("编程")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(_component_a_tag, { color: "purple" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("笔试")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_a_col, { span: 4 }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_col, { span: 20 }, {
                              default: withCtx(() => [
                                createVNode(_component_a_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_col, {
                                      span: 24,
                                      class: "blog-content"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.content), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_a_col, {
                                      span: 24,
                                      class: "blog-bottom"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_a_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_a_col, { span: 12 }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, "发布于" + toDisplayString(item.date), 1),
                                                createVNode(_component_a_divider, { type: "vertical" }),
                                                createVNode("span", { class: "icon-item" }, [
                                                  createVNode(unref(EyeOutlined)),
                                                  createTextVNode(" " + toDisplayString(item.pageViews), 1)
                                                ]),
                                                createVNode("span", { class: "icon-item" }, [
                                                  createVNode(unref(LikeOutlined)),
                                                  createTextVNode(" " + toDisplayString(item.likes), 1)
                                                ]),
                                                createVNode("span", {
                                                  class: "icon-item",
                                                  onClick: withModifiers(($event) => toggleComment(item), ["stop"])
                                                }, [
                                                  !item.showComment ? (openBlock(), createBlock("span", { key: 0 }, [
                                                    createVNode(unref(MessageOutlined))
                                                  ])) : (openBlock(), createBlock("span", { key: 1 }, [
                                                    createVNode(unref(MessageTwoTone))
                                                  ])),
                                                  createTextVNode(" " + toDisplayString(item.comments), 1)
                                                ], 8, ["onClick"]),
                                                createVNode("span")
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_a_col, { span: 12 }, {
                                              default: withCtx(() => [
                                                createVNode("span", { class: "tag" }, [
                                                  createVNode(_component_a_tag, { color: "pink" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("前端")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_a_tag, { color: "red" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("JavaScript")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_a_tag, { color: "orange" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Vue.js")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_a_tag, { color: "green" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("基础知识")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_a_tag, { color: "cyan" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("编程")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_a_tag, { color: "purple" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("笔试")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_a_col, { span: 4 })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_a_col, { span: 20 }, {
                            default: withCtx(() => [
                              createVNode(_component_a_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_a_col, {
                                    span: 24,
                                    class: "blog-content"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.content), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_a_col, {
                                    span: 24,
                                    class: "blog-bottom"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_a_col, { span: 12 }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, "发布于" + toDisplayString(item.date), 1),
                                              createVNode(_component_a_divider, { type: "vertical" }),
                                              createVNode("span", { class: "icon-item" }, [
                                                createVNode(unref(EyeOutlined)),
                                                createTextVNode(" " + toDisplayString(item.pageViews), 1)
                                              ]),
                                              createVNode("span", { class: "icon-item" }, [
                                                createVNode(unref(LikeOutlined)),
                                                createTextVNode(" " + toDisplayString(item.likes), 1)
                                              ]),
                                              createVNode("span", {
                                                class: "icon-item",
                                                onClick: withModifiers(($event) => toggleComment(item), ["stop"])
                                              }, [
                                                !item.showComment ? (openBlock(), createBlock("span", { key: 0 }, [
                                                  createVNode(unref(MessageOutlined))
                                                ])) : (openBlock(), createBlock("span", { key: 1 }, [
                                                  createVNode(unref(MessageTwoTone))
                                                ])),
                                                createTextVNode(" " + toDisplayString(item.comments), 1)
                                              ], 8, ["onClick"]),
                                              createVNode("span")
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_a_col, { span: 12 }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "tag" }, [
                                                createVNode(_component_a_tag, { color: "pink" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("前端")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_a_tag, { color: "red" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("JavaScript")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_a_tag, { color: "orange" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Vue.js")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_a_tag, { color: "green" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("基础知识")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_a_tag, { color: "cyan" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("编程")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_a_tag, { color: "purple" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("笔试")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_a_col, { span: 4 })
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_card_meta, {
                  title: item.title
                }, {
                  description: withCtx(() => [
                    createVNode(_component_a_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_a_col, { span: 20 }, {
                          default: withCtx(() => [
                            createVNode(_component_a_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_a_col, {
                                  span: 24,
                                  class: "blog-content"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.content), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_a_col, {
                                  span: 24,
                                  class: "blog-bottom"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_a_col, { span: 12 }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, "发布于" + toDisplayString(item.date), 1),
                                            createVNode(_component_a_divider, { type: "vertical" }),
                                            createVNode("span", { class: "icon-item" }, [
                                              createVNode(unref(EyeOutlined)),
                                              createTextVNode(" " + toDisplayString(item.pageViews), 1)
                                            ]),
                                            createVNode("span", { class: "icon-item" }, [
                                              createVNode(unref(LikeOutlined)),
                                              createTextVNode(" " + toDisplayString(item.likes), 1)
                                            ]),
                                            createVNode("span", {
                                              class: "icon-item",
                                              onClick: withModifiers(($event) => toggleComment(item), ["stop"])
                                            }, [
                                              !item.showComment ? (openBlock(), createBlock("span", { key: 0 }, [
                                                createVNode(unref(MessageOutlined))
                                              ])) : (openBlock(), createBlock("span", { key: 1 }, [
                                                createVNode(unref(MessageTwoTone))
                                              ])),
                                              createTextVNode(" " + toDisplayString(item.comments), 1)
                                            ], 8, ["onClick"]),
                                            createVNode("span")
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_a_col, { span: 12 }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "tag" }, [
                                              createVNode(_component_a_tag, { color: "pink" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("前端")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_a_tag, { color: "red" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("JavaScript")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_a_tag, { color: "orange" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Vue.js")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_a_tag, { color: "green" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("基础知识")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_a_tag, { color: "cyan" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("编程")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_a_tag, { color: "purple" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("笔试")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_a_col, { span: 4 })
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["title"])
              ];
            }
          }),
          _: 2
        }, _parent));
        if (item.showComment) {
          _push(ssrRenderComponent(_component_a_card, {
            class: "blog-card",
            hoverable: "",
            size: "small"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="fold-text"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_a_button, {
                  type: "link",
                  onClick: ($event) => foldComment(item)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`收 起 `);
                      _push3(ssrRenderComponent(unref(UpOutlined), null, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createTextVNode("收 起 "),
                        createVNode(unref(UpOutlined))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(Comment, null, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("div", { class: "fold-text" }, [
                    createVNode(_component_a_button, {
                      type: "link",
                      onClick: ($event) => foldComment(item)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("收 起 "),
                        createVNode(unref(UpOutlined))
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  createVNode(Comment)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><div class="pagination">`);
      _push(ssrRenderComponent(_component_a_pagination, {
        current: currentPage.value,
        "onUpdate:current": ($event) => currentPage.value = $event,
        "page-size": pageSize.value,
        "onUpdate:pageSize": ($event) => pageSize.value = $event,
        total: 60,
        "show-total": (total) => `总计 ${blogData.value.length} 条`,
        defaultPageSize: 5,
        pageSizeOptions: pageSizeOptions.value,
        "show-quick-jumper": ""
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/views/Blog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "PaperDetail",
  __ssrInlineRender: true,
  props: {
    currentPaperData: {
      type: Object
    }
  },
  emits: ["closePaperDetail"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const activeKey = ref(["1"]);
    const paperObj = ref({});
    paperObj.value = props.currentPaperData;
    const backToCard = () => {
      emit("closePaperDetail", true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_row = resolveComponent("a-row");
      const _component_a_col = resolveComponent("a-col");
      const _component_a_page_header = resolveComponent("a-page-header");
      const _component_a_tag = resolveComponent("a-tag");
      const _component_a_popover = resolveComponent("a-popover");
      const _component_a_qrcode = resolveComponent("a-qrcode");
      const _component_a_dropdown = resolveComponent("a-dropdown");
      const _component_a_button = resolveComponent("a-button");
      const _component_a_menu = resolveComponent("a-menu");
      const _component_a_menu_item = resolveComponent("a-menu-item");
      const _component_a_collapse = resolveComponent("a-collapse");
      const _component_a_collapse_panel = resolveComponent("a-collapse-panel");
      const _component_a_anchor = resolveComponent("a-anchor");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-065e9363>`);
      _push(ssrRenderComponent(_component_a_row, { gutter: [16, 24] }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_col, { span: 20 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="content" data-v-065e9363${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_a_page_header, {
                    title: paperObj.value.title,
                    onBack: backToCard
                  }, {
                    tags: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_tag, { color: "pink" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`前端`);
                            } else {
                              return [
                                createTextVNode("前端")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_tag, { color: "red" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`JavaScript`);
                            } else {
                              return [
                                createTextVNode("JavaScript")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_tag, { color: "orange" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Vue.js`);
                            } else {
                              return [
                                createTextVNode("Vue.js")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_tag, { color: "green" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`基础知识`);
                            } else {
                              return [
                                createTextVNode("基础知识")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_tag, { color: "cyan" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`编程`);
                            } else {
                              return [
                                createTextVNode("编程")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_tag, { color: "blue" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`面试`);
                            } else {
                              return [
                                createTextVNode("面试")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_tag, { color: "purple" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`笔试`);
                            } else {
                              return [
                                createTextVNode("笔试")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_tag, { color: "pink" }, {
                            default: withCtx(() => [
                              createTextVNode("前端")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "red" }, {
                            default: withCtx(() => [
                              createTextVNode("JavaScript")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "orange" }, {
                            default: withCtx(() => [
                              createTextVNode("Vue.js")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "green" }, {
                            default: withCtx(() => [
                              createTextVNode("基础知识")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "cyan" }, {
                            default: withCtx(() => [
                              createTextVNode("编程")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "blue" }, {
                            default: withCtx(() => [
                              createTextVNode("面试")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "purple" }, {
                            default: withCtx(() => [
                              createTextVNode("笔试")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    extra: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(LikeTwoTone), { style: { fontSize: "20px", color: "#08c" } }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_popover, { "overlay-inner-style": { padding: 0 } }, {
                          content: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_a_qrcode, {
                                value: "http://www.antdv.com",
                                bordered: false
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_a_qrcode, {
                                  value: "http://www.antdv.com",
                                  bordered: false
                                })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(ShareAltOutlined), { style: { fontSize: "20px", color: "#08c", marginLeft: "10px" } }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(ShareAltOutlined), { style: { fontSize: "20px", color: "#08c", marginLeft: "10px" } })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_dropdown, { key: "more" }, {
                          overlay: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_a_menu, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_a_menu_item, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<a target="_blank" rel="noopener noreferrer" href="" data-v-065e9363${_scopeId6}>`);
                                          _push7(ssrRenderComponent(unref(WechatOutlined), null, null, _parent7, _scopeId6));
                                          _push7(`<span class="more" data-v-065e9363${_scopeId6}>分享到微信</span></a>`);
                                        } else {
                                          return [
                                            createVNode("a", {
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              href: ""
                                            }, [
                                              createVNode(unref(WechatOutlined)),
                                              createVNode("span", { class: "more" }, "分享到微信")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_a_menu_item, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<a target="_blank" rel="noopener noreferrer" href="" data-v-065e9363${_scopeId6}>`);
                                          _push7(ssrRenderComponent(unref(QqOutlined), null, null, _parent7, _scopeId6));
                                          _push7(`<span class="more" data-v-065e9363${_scopeId6}>分享到QQ</span></a>`);
                                        } else {
                                          return [
                                            createVNode("a", {
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              href: ""
                                            }, [
                                              createVNode(unref(QqOutlined)),
                                              createVNode("span", { class: "more" }, "分享到QQ")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_a_menu_item, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<a target="_blank" rel="noopener noreferrer" href="" data-v-065e9363${_scopeId6}>`);
                                          _push7(ssrRenderComponent(unref(WeiboCircleOutlined), null, null, _parent7, _scopeId6));
                                          _push7(`<span class="more" data-v-065e9363${_scopeId6}>分享到微博</span></a>`);
                                        } else {
                                          return [
                                            createVNode("a", {
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              href: ""
                                            }, [
                                              createVNode(unref(WeiboCircleOutlined)),
                                              createVNode("span", { class: "more" }, "分享到微博")
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_a_menu_item, null, {
                                        default: withCtx(() => [
                                          createVNode("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: ""
                                          }, [
                                            createVNode(unref(WechatOutlined)),
                                            createVNode("span", { class: "more" }, "分享到微信")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_a_menu_item, null, {
                                        default: withCtx(() => [
                                          createVNode("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: ""
                                          }, [
                                            createVNode(unref(QqOutlined)),
                                            createVNode("span", { class: "more" }, "分享到QQ")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_a_menu_item, null, {
                                        default: withCtx(() => [
                                          createVNode("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: ""
                                          }, [
                                            createVNode(unref(WeiboCircleOutlined)),
                                            createVNode("span", { class: "more" }, "分享到微博")
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_a_menu, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_menu_item, null, {
                                      default: withCtx(() => [
                                        createVNode("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: ""
                                        }, [
                                          createVNode(unref(WechatOutlined)),
                                          createVNode("span", { class: "more" }, "分享到微信")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_a_menu_item, null, {
                                      default: withCtx(() => [
                                        createVNode("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: ""
                                        }, [
                                          createVNode(unref(QqOutlined)),
                                          createVNode("span", { class: "more" }, "分享到QQ")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_a_menu_item, null, {
                                      default: withCtx(() => [
                                        createVNode("a", {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          href: ""
                                        }, [
                                          createVNode(unref(WeiboCircleOutlined)),
                                          createVNode("span", { class: "more" }, "分享到微博")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_a_button, { style: { border: "none", padding: 0, marginLeft: "10px" } }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(EllipsisOutlined), { style: { fontSize: "20px", verticalAlign: "top" } }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(EllipsisOutlined), { style: { fontSize: "20px", verticalAlign: "top" } })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_a_button, { style: { border: "none", padding: 0, marginLeft: "10px" } }, {
                                  default: withCtx(() => [
                                    createVNode(unref(EllipsisOutlined), { style: { fontSize: "20px", verticalAlign: "top" } })
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
                          createVNode(unref(LikeTwoTone), { style: { fontSize: "20px", color: "#08c" } }),
                          createVNode(_component_a_popover, { "overlay-inner-style": { padding: 0 } }, {
                            content: withCtx(() => [
                              createVNode(_component_a_qrcode, {
                                value: "http://www.antdv.com",
                                bordered: false
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(unref(ShareAltOutlined), { style: { fontSize: "20px", color: "#08c", marginLeft: "10px" } })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_dropdown, { key: "more" }, {
                            overlay: withCtx(() => [
                              createVNode(_component_a_menu, null, {
                                default: withCtx(() => [
                                  createVNode(_component_a_menu_item, null, {
                                    default: withCtx(() => [
                                      createVNode("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: ""
                                      }, [
                                        createVNode(unref(WechatOutlined)),
                                        createVNode("span", { class: "more" }, "分享到微信")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_a_menu_item, null, {
                                    default: withCtx(() => [
                                      createVNode("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: ""
                                      }, [
                                        createVNode(unref(QqOutlined)),
                                        createVNode("span", { class: "more" }, "分享到QQ")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_a_menu_item, null, {
                                    default: withCtx(() => [
                                      createVNode("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: ""
                                      }, [
                                        createVNode(unref(WeiboCircleOutlined)),
                                        createVNode("span", { class: "more" }, "分享到微博")
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, { style: { border: "none", padding: 0, marginLeft: "10px" } }, {
                                default: withCtx(() => [
                                  createVNode(unref(EllipsisOutlined), { style: { fontSize: "20px", verticalAlign: "top" } })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="main-content" data-v-065e9363${_scopeId2}>${ssrInterpolate(paperObj.value.content)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "content" }, [
                      createVNode(_component_a_page_header, {
                        title: paperObj.value.title,
                        onBack: backToCard
                      }, {
                        tags: withCtx(() => [
                          createVNode(_component_a_tag, { color: "pink" }, {
                            default: withCtx(() => [
                              createTextVNode("前端")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "red" }, {
                            default: withCtx(() => [
                              createTextVNode("JavaScript")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "orange" }, {
                            default: withCtx(() => [
                              createTextVNode("Vue.js")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "green" }, {
                            default: withCtx(() => [
                              createTextVNode("基础知识")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "cyan" }, {
                            default: withCtx(() => [
                              createTextVNode("编程")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "blue" }, {
                            default: withCtx(() => [
                              createTextVNode("面试")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_tag, { color: "purple" }, {
                            default: withCtx(() => [
                              createTextVNode("笔试")
                            ]),
                            _: 1
                          })
                        ]),
                        extra: withCtx(() => [
                          createVNode(unref(LikeTwoTone), { style: { fontSize: "20px", color: "#08c" } }),
                          createVNode(_component_a_popover, { "overlay-inner-style": { padding: 0 } }, {
                            content: withCtx(() => [
                              createVNode(_component_a_qrcode, {
                                value: "http://www.antdv.com",
                                bordered: false
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(unref(ShareAltOutlined), { style: { fontSize: "20px", color: "#08c", marginLeft: "10px" } })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_dropdown, { key: "more" }, {
                            overlay: withCtx(() => [
                              createVNode(_component_a_menu, null, {
                                default: withCtx(() => [
                                  createVNode(_component_a_menu_item, null, {
                                    default: withCtx(() => [
                                      createVNode("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: ""
                                      }, [
                                        createVNode(unref(WechatOutlined)),
                                        createVNode("span", { class: "more" }, "分享到微信")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_a_menu_item, null, {
                                    default: withCtx(() => [
                                      createVNode("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: ""
                                      }, [
                                        createVNode(unref(QqOutlined)),
                                        createVNode("span", { class: "more" }, "分享到QQ")
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_a_menu_item, null, {
                                    default: withCtx(() => [
                                      createVNode("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: ""
                                      }, [
                                        createVNode(unref(WeiboCircleOutlined)),
                                        createVNode("span", { class: "more" }, "分享到微博")
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_a_button, { style: { border: "none", padding: 0, marginLeft: "10px" } }, {
                                default: withCtx(() => [
                                  createVNode(unref(EllipsisOutlined), { style: { fontSize: "20px", verticalAlign: "top" } })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode("div", { class: "main-content" }, toDisplayString(paperObj.value.content), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, { span: 4 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_row, { gutter: [16, 24] }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_col, { span: 24 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="catalogue" data-v-065e9363${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_a_collapse, {
                                ghost: "",
                                activeKey: activeKey.value,
                                "onUpdate:activeKey": ($event) => activeKey.value = $event,
                                expandIconPosition: "end"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_a_collapse_panel, {
                                      key: "1",
                                      header: "目录"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_a_anchor, {
                                            affix: false,
                                            items: [
                                              {
                                                key: "1",
                                                href: "#components-anchor-demo-basic",
                                                title: "Basic demo"
                                              },
                                              {
                                                key: "2",
                                                href: "#components-anchor-demo-static",
                                                title: "Static demo"
                                              },
                                              {
                                                key: "3",
                                                href: "#api",
                                                title: "API",
                                                children: [
                                                  {
                                                    key: "4",
                                                    href: "#anchor-props",
                                                    title: "Anchor Props"
                                                  },
                                                  {
                                                    key: "5",
                                                    href: "#link-props",
                                                    title: "Link Props"
                                                  }
                                                ]
                                              }
                                            ]
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_a_anchor, {
                                              affix: false,
                                              items: [
                                                {
                                                  key: "1",
                                                  href: "#components-anchor-demo-basic",
                                                  title: "Basic demo"
                                                },
                                                {
                                                  key: "2",
                                                  href: "#components-anchor-demo-static",
                                                  title: "Static demo"
                                                },
                                                {
                                                  key: "3",
                                                  href: "#api",
                                                  title: "API",
                                                  children: [
                                                    {
                                                      key: "4",
                                                      href: "#anchor-props",
                                                      title: "Anchor Props"
                                                    },
                                                    {
                                                      key: "5",
                                                      href: "#link-props",
                                                      title: "Link Props"
                                                    }
                                                  ]
                                                }
                                              ]
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_a_collapse_panel, {
                                        key: "1",
                                        header: "目录"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_a_anchor, {
                                            affix: false,
                                            items: [
                                              {
                                                key: "1",
                                                href: "#components-anchor-demo-basic",
                                                title: "Basic demo"
                                              },
                                              {
                                                key: "2",
                                                href: "#components-anchor-demo-static",
                                                title: "Static demo"
                                              },
                                              {
                                                key: "3",
                                                href: "#api",
                                                title: "API",
                                                children: [
                                                  {
                                                    key: "4",
                                                    href: "#anchor-props",
                                                    title: "Anchor Props"
                                                  },
                                                  {
                                                    key: "5",
                                                    href: "#link-props",
                                                    title: "Link Props"
                                                  }
                                                ]
                                              }
                                            ]
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "catalogue" }, [
                                  createVNode(_component_a_collapse, {
                                    ghost: "",
                                    activeKey: activeKey.value,
                                    "onUpdate:activeKey": ($event) => activeKey.value = $event,
                                    expandIconPosition: "end"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_collapse_panel, {
                                        key: "1",
                                        header: "目录"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_a_anchor, {
                                            affix: false,
                                            items: [
                                              {
                                                key: "1",
                                                href: "#components-anchor-demo-basic",
                                                title: "Basic demo"
                                              },
                                              {
                                                key: "2",
                                                href: "#components-anchor-demo-static",
                                                title: "Static demo"
                                              },
                                              {
                                                key: "3",
                                                href: "#api",
                                                title: "API",
                                                children: [
                                                  {
                                                    key: "4",
                                                    href: "#anchor-props",
                                                    title: "Anchor Props"
                                                  },
                                                  {
                                                    key: "5",
                                                    href: "#link-props",
                                                    title: "Link Props"
                                                  }
                                                ]
                                              }
                                            ]
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["activeKey", "onUpdate:activeKey"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_col, {
                          class: "gutter-row",
                          span: 24
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="recommendation" data-v-065e9363${_scopeId4}>推荐文章</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "recommendation" }, "推荐文章")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_col, { span: 24 }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "catalogue" }, [
                                createVNode(_component_a_collapse, {
                                  ghost: "",
                                  activeKey: activeKey.value,
                                  "onUpdate:activeKey": ($event) => activeKey.value = $event,
                                  expandIconPosition: "end"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_collapse_panel, {
                                      key: "1",
                                      header: "目录"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_a_anchor, {
                                          affix: false,
                                          items: [
                                            {
                                              key: "1",
                                              href: "#components-anchor-demo-basic",
                                              title: "Basic demo"
                                            },
                                            {
                                              key: "2",
                                              href: "#components-anchor-demo-static",
                                              title: "Static demo"
                                            },
                                            {
                                              key: "3",
                                              href: "#api",
                                              title: "API",
                                              children: [
                                                {
                                                  key: "4",
                                                  href: "#anchor-props",
                                                  title: "Anchor Props"
                                                },
                                                {
                                                  key: "5",
                                                  href: "#link-props",
                                                  title: "Link Props"
                                                }
                                              ]
                                            }
                                          ]
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["activeKey", "onUpdate:activeKey"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_col, {
                            class: "gutter-row",
                            span: 24
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "recommendation" }, "推荐文章")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_row, { gutter: [16, 24] }, {
                      default: withCtx(() => [
                        createVNode(_component_a_col, { span: 24 }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "catalogue" }, [
                              createVNode(_component_a_collapse, {
                                ghost: "",
                                activeKey: activeKey.value,
                                "onUpdate:activeKey": ($event) => activeKey.value = $event,
                                expandIconPosition: "end"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_collapse_panel, {
                                    key: "1",
                                    header: "目录"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_anchor, {
                                        affix: false,
                                        items: [
                                          {
                                            key: "1",
                                            href: "#components-anchor-demo-basic",
                                            title: "Basic demo"
                                          },
                                          {
                                            key: "2",
                                            href: "#components-anchor-demo-static",
                                            title: "Static demo"
                                          },
                                          {
                                            key: "3",
                                            href: "#api",
                                            title: "API",
                                            children: [
                                              {
                                                key: "4",
                                                href: "#anchor-props",
                                                title: "Anchor Props"
                                              },
                                              {
                                                key: "5",
                                                href: "#link-props",
                                                title: "Link Props"
                                              }
                                            ]
                                          }
                                        ]
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["activeKey", "onUpdate:activeKey"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_col, {
                          class: "gutter-row",
                          span: 24
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "recommendation" }, "推荐文章")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_col, { span: 20 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="comment" data-v-065e9363${_scopeId2}>评论区</div>`);
                } else {
                  return [
                    createVNode("div", { class: "comment" }, "评论区")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_col, { span: 20 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "content" }, [
                    createVNode(_component_a_page_header, {
                      title: paperObj.value.title,
                      onBack: backToCard
                    }, {
                      tags: withCtx(() => [
                        createVNode(_component_a_tag, { color: "pink" }, {
                          default: withCtx(() => [
                            createTextVNode("前端")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_tag, { color: "red" }, {
                          default: withCtx(() => [
                            createTextVNode("JavaScript")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_tag, { color: "orange" }, {
                          default: withCtx(() => [
                            createTextVNode("Vue.js")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_tag, { color: "green" }, {
                          default: withCtx(() => [
                            createTextVNode("基础知识")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_tag, { color: "cyan" }, {
                          default: withCtx(() => [
                            createTextVNode("编程")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_tag, { color: "blue" }, {
                          default: withCtx(() => [
                            createTextVNode("面试")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_tag, { color: "purple" }, {
                          default: withCtx(() => [
                            createTextVNode("笔试")
                          ]),
                          _: 1
                        })
                      ]),
                      extra: withCtx(() => [
                        createVNode(unref(LikeTwoTone), { style: { fontSize: "20px", color: "#08c" } }),
                        createVNode(_component_a_popover, { "overlay-inner-style": { padding: 0 } }, {
                          content: withCtx(() => [
                            createVNode(_component_a_qrcode, {
                              value: "http://www.antdv.com",
                              bordered: false
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(unref(ShareAltOutlined), { style: { fontSize: "20px", color: "#08c", marginLeft: "10px" } })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_dropdown, { key: "more" }, {
                          overlay: withCtx(() => [
                            createVNode(_component_a_menu, null, {
                              default: withCtx(() => [
                                createVNode(_component_a_menu_item, null, {
                                  default: withCtx(() => [
                                    createVNode("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: ""
                                    }, [
                                      createVNode(unref(WechatOutlined)),
                                      createVNode("span", { class: "more" }, "分享到微信")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_a_menu_item, null, {
                                  default: withCtx(() => [
                                    createVNode("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: ""
                                    }, [
                                      createVNode(unref(QqOutlined)),
                                      createVNode("span", { class: "more" }, "分享到QQ")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_a_menu_item, null, {
                                  default: withCtx(() => [
                                    createVNode("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      href: ""
                                    }, [
                                      createVNode(unref(WeiboCircleOutlined)),
                                      createVNode("span", { class: "more" }, "分享到微博")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_button, { style: { border: "none", padding: 0, marginLeft: "10px" } }, {
                              default: withCtx(() => [
                                createVNode(unref(EllipsisOutlined), { style: { fontSize: "20px", verticalAlign: "top" } })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["title"]),
                    createVNode("div", { class: "main-content" }, toDisplayString(paperObj.value.content), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_a_col, { span: 4 }, {
                default: withCtx(() => [
                  createVNode(_component_a_row, { gutter: [16, 24] }, {
                    default: withCtx(() => [
                      createVNode(_component_a_col, { span: 24 }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "catalogue" }, [
                            createVNode(_component_a_collapse, {
                              ghost: "",
                              activeKey: activeKey.value,
                              "onUpdate:activeKey": ($event) => activeKey.value = $event,
                              expandIconPosition: "end"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_collapse_panel, {
                                  key: "1",
                                  header: "目录"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_anchor, {
                                      affix: false,
                                      items: [
                                        {
                                          key: "1",
                                          href: "#components-anchor-demo-basic",
                                          title: "Basic demo"
                                        },
                                        {
                                          key: "2",
                                          href: "#components-anchor-demo-static",
                                          title: "Static demo"
                                        },
                                        {
                                          key: "3",
                                          href: "#api",
                                          title: "API",
                                          children: [
                                            {
                                              key: "4",
                                              href: "#anchor-props",
                                              title: "Anchor Props"
                                            },
                                            {
                                              key: "5",
                                              href: "#link-props",
                                              title: "Link Props"
                                            }
                                          ]
                                        }
                                      ]
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["activeKey", "onUpdate:activeKey"])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_col, {
                        class: "gutter-row",
                        span: 24
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "recommendation" }, "推荐文章")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_a_col, { span: 20 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "comment" }, "评论区")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/views/PaperDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PaperDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-065e9363"]]);
const __pageData = JSON.parse('{"title":"技术文章","description":"","frontmatter":{"title":"技术文章","layout":"page"},"headers":[],"relativePath":"blog/index.md","filePath":"blog/index.md","lastUpdated":1710063648000}');
const __default__ = { name: "blog/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const showPaperDetail = ref(false);
    const currentPaperData = ref({});
    const bodyStyle = ref({
      "overflow-y": "scroll"
    });
    const getPaperDetail = (data) => {
      currentPaperData.value = data;
    };
    const closePaperDetail = (data) => {
      showPaperDetail.value = false;
    };
    const handleOk = (e) => {
      showPaperDetail.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_modal = resolveComponent("a-modal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "blog",
        onGetPaperDetail: getPaperDetail
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_modal, {
        open: showPaperDetail.value,
        "onUpdate:open": ($event) => showPaperDetail.value = $event,
        title: "文章详情",
        width: "100%",
        height: "100%",
        "wrap-class-name": "full-modal",
        onOk: handleOk,
        bodyStyle: bodyStyle.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(PaperDetail, {
              class: "detail",
              "current-paper-data": currentPaperData.value,
              onClosePaperDetail: closePaperDetail
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(PaperDetail, {
                class: "detail",
                "current-paper-data": currentPaperData.value,
                onClosePaperDetail: closePaperDetail
              }, null, 8, ["current-paper-data"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("blog/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
