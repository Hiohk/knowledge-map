---
next:
  text: '模板语法'
  link: '/frontend/vue/vue01'
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

## 1. MVVM
> 理解命令式编程与声明式编程的区别

### 1.1 MVC和MVVM的架构模型

1. MVC：Model-View-Controller
2. MVVM: Model-View-ViewModel

### 1.2 data属性选项
> 在vue2中data可以为一个对象，在vue3中data必须为一个函数，否则浏览器会报错；

  data中返回的对象会被Vue的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中被处理。

### 1.3 methods属性选项
  methods中的函数不可以写成箭头函数，因为箭头函数中this会指向父级作用域上下文；
