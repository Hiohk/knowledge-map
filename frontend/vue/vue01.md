---
prev:
  text: "简介"
  link: "/frontend/vue/"

next:
  text: "响应式基础"
  link: "/frontend/vue/vue02"
---

# 1. 模板语法

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作。

如果你对虚拟 DOM 的概念比较熟悉，并且偏好直接使用 JavaScript，你也可以结合可选的 JSX 支持直接手写渲染函数而不采用模板。但请注意，这将不会享受到和模板同等级别的编译时优化。

## 1.1 文本插值（mustache语法）

> react 中使用 jsx（类似于 js 的一种语法），vue 中使用基于 HTML 的模板语法；

- \{ \{ message \} \} 双大括号语法；
- \{ \{ 表达式 \} \};
- \{ \{ 三元运算符 \} \} : \{ \{ age>18?"成年人":"未成年人" \} \};
- \{ \{ 调用函数 \} \};

## 1.2 原始HTML

在当前**组件实例**上使用v-html，将此元素的innerHTML与rawHtml属性保持同步，也就是说使用了v-html的标签内部的内容会被替换为原生HTML属性的值。

``` html
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

:::warning
1. 不能使用v-html来拼接组合模板，因为Vue不是一个基于字符串的模板引擎。在使用Vue时，应当使用组件作为UI重用和组合的基本单元。

2. 在网站上动态渲染任意HTML是非常危险的，容易造成**XSS漏洞**。**请仅在内容安全可信时再使用v-html，并且永远不要使用用户提供的HTML内容**。
:::

## 1.3 属性绑定


``` html
<!-- v-bind指令 -->
<div v-bind:id="dynamicId"></div>

<!-- 简写 -->
<div :id="dynamicId"></div>

<!-- 同名简写 在Vue 3.4及以上版本中可用-->
<div :id></div>

<!-- 绑定布尔值 -->
<button :disabled="isButtonDisabled">Button</button>

<!-- 其他绑定方法将在指令和事件一节介绍 -->
```

<a-back-top />

<reading-progress-bar/>