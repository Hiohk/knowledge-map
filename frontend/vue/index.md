---
next:
  text: '响应式基础'
  link: '/frontend/vue/vue-01'
---

# Vue.js(vue3)

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

下面是一个最基本的示例：

```js
import { createApp, ref } from "vue";

createApp({
  setup() {
    return {
      count: ref(0),
    };
  },
}).mount("#app");
```
