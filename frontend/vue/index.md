---
next:
  text: "模板语法"
  link: "/frontend/vue/vue01"
---

# Vue.js <Badge type="warning" text="v3.5.13" />

vue 知识来源于 Vue.js 官方文档，本文将对 Vue.js 的知识进行介绍。更多信息请参考[官方文档](https://cn.vuejs.org/)。

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

下面是一个最基本的示例：

```js
import { createApp, ref } from "vue";

createApp({
  setup() {
    <Badge type="warning" text="beta" />;
    return {
      count: ref(0),
    };
  },
}).mount("#app");
```

应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。

`.mount()` 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。

## 1. MVVM

> 理解命令式编程与声明式编程的区别

### 1.1 MVC 和 MVVM 的架构模型

1. MVC：Model-View-Controller
2. MVVM: Model-View-ViewModel


<a-back-top />

<reading-progress-bar/>