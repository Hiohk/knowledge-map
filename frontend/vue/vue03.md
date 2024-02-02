---
prev:
  text: "Vue指令"
  link: "/frontend/vue/vue03"

next:
  text: "计算属性"
  link: "/frontend/vue/vue04"
---

# 3. Vue 指令

1. **v-once**: 只渲染一次；当数据发生变化时，元素或者组件以及其所有的子元素将视为静态内容呢并且跳过；该指令用于性能优化。
2. **v-text**: 用于更新元素的 textContent。
3. **v-html**: 解析 html 结构。
4. **v-pre**: 用于跳过元素和它**子元素**的编译过程。
5. **v-cloak**: 用于隐藏尚未完成编译的 DOM 模板。

```html
[v-cloak] { display: none; }

<div v-cloak>{{ message }}</div>
```

6. **v-memo**: 缓存一个模板的子树。在元素和组件上都可以使用。为了实现缓存，该指令需要传入一个固定长度的依赖值数组进行比较。如果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。(用于性能优化)
7. **v-bind**: 动态的绑定一个或多个 attribute，也可以是组件的 prop。
   - **缩写：**: 或者 . (当使用 .prop 修饰符)
   - **修饰符**:
     - .camel - 将短横线命名的 attribute 转变为驼峰式命名。
     - .prop - 强制绑定为 DOM property。
     - .attr - 强制绑定为 DOM attribute。

```html
<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]"></div>

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- 绑定对象形式的 attribute -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- prop 绑定。“prop” 必须在子组件中已声明。 -->
<MyComponent :prop="someThing" />

<!-- 传递子父组件共有的 prop -->
<MyComponent v-bind="$props" />

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>
```

8. **v-on**: 给元素绑定事件监听器。

- **缩写：**@
- **期望的绑定值类型：**Function | Inline Statement | Object (不带参数)
- **参数：**event (使用对象语法则为可选项)
- **修饰符**
  - .stop - 调用 event.stopPropagation()。
  - .prevent - 调用 event.preventDefault()。
  - .capture - 在捕获模式添加事件监听器。
  - .self - 只有事件从元素本身发出才触发处理函数。
  - .{keyAlias} - 只在某些按键下触发处理函数。
  - .once - 最多触发一次处理函数。
  - .left - 只在鼠标左键事件触发处理函数。
  - .right - 只在鼠标右键事件触发处理函数。
  - .middle - 只在鼠标中键事件触发处理函数。
  - .passive - 通过 { passive: true } 附加一个 DOM 事件。

```html
<!-- 方法处理函数 -->
<button v-on:click="doThis"></button>

<!-- 动态事件 -->
<button v-on:[event]="doThis"></button>

<!-- 内联声明 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 使用缩写的动态事件 -->
<button @[event]="doThis"></button>

<!-- 停止传播 -->
<button @click.stop="doThis"></button>

<!-- 阻止默认事件 -->
<button @click.prevent="doThis"></button>

<!-- 不带表达式地阻止默认事件 -->
<form @submit.prevent></form>

<!-- 链式调用修饰符 -->
<button @click.stop.prevent="doThis"></button>

<!-- 按键用于 keyAlias 修饰符-->
<input @keyup.enter="onEnter" />

<!-- 点击事件将最多触发一次 -->
<button v-on:click.once="doThis"></button>

<!-- 对象语法 -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```

9. **v-if，v-else，v-else-if，v-show**

- v-if: 当 v-if 元素被触发，元素及其所包含的指令/组件都会销毁和重构。如果初始条件是假，那么其内部的内容根本都不会被渲染。
  <span style="color: red">**可用于 `<template>` 表示仅包含文本或多个元素的条件块。当条件改变时会触发过渡效果。当同时使用时，v-if 比 v-for 优先级更高。**</span>
  不推荐在一元素上同时使用这两个指令。

- v-else: 表示 v-if 或 v-if / v-else-if 链式调用的“else 块”。

  - 无需传入表达式
  - 限定：上一个兄弟元素必须有 v-if 或 v-else-if。
  - <span style="color: red">可用于 `<template>` 表示仅包含文本或多个元素的条件块。</span>

- v-else-if:

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

- v-show: 基于表达式值的真假性，来改变元素的可见性。v-show 通过设置内联样式的 display CSS 属性来工作，当元素可见时将使用初始 display 值。
  <span style="color: red">**当条件改变时，也会触发过渡效果。**</span>
  v-show 不支持`<template></template>`。

10. **v-for:**
    基于原始数据多次渲染元素或模板块。

- **期望的绑定值类型：**
  Array | Object | number | string | Iterable
- **详细信息**
  指令值必须使用特殊语法 alias in expression 为正在迭代的元素提供一个别名：

```html
<div v-for="item in items">{{ item.text }}</div>
```

或者，也可以为索引指定别名 (如果用在对象，则是键值)：

```html
<div v-for="(item, index) in items"></div>
<div v-for="(value, key) in object"></div>
<div v-for="(value, name, index) in object"></div>
```

v-for 的默认方式是尝试就地更新元素而不移动它们。要强制其重新排序元素，你需要用特殊 attribute key 来提供一个排序提示：

```html
<div v-for="item in items" :key="item.id">{{ item.text }}</div>
```

v-for 也可以用于 [**Iterable Protocol**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) 的实现，包括原生 Map 和 Set。
:::tip
数组更新检测：vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。<br />push(), pop(), shift(), unshift(), splice(), sort(), reverse();
:::

> 什么是 VNode？其全称是 Vritual Node(虚拟节点)，无论是组件还是元素，它们在 Vue 中都是表现为 VNode；VNode 的本质是一个 JavaScript 对象。

11. **v-model:**
    可以在表单 input，textarea，select 元素上创建双向数据绑定；

```html
<input :value="text" @input="event => text = event.target.value" />
```

可以进一步转化为：

```html
<input v-model="text" />
```

原理：v-bind 绑定 value 属性的值；v-on 绑定 input 事件监听到的函数中，函数会获取最新的值赋值到绑定的属性中；

修饰符：

- .lazy:

  默认情况下，v-model 会在每次 input 事件后更新数据 ([IME 拼字阶段的状态](https://cn.vuejs.org/guide/essentials/forms.html#vmodel-ime-tip)例外)。你可以添加 lazy 修饰符来改为在每次 change 事件后更新数据：

```html
<!-- 在 "change" 事件后同步更新而不是 "input" -->
<input v-model.lazy="msg" />
```

- .number:

  如果你想让用户输入自动转换为数字，你可以在 v-model 后添加 .number 修饰符来管理输入：

```html
<input v-model.number="age" />
```

如果该值无法被 parseFloat() 处理，那么将返回原始值。number 修饰符会在输入框有 type="number" 时自动启用。

- .trim:

  去除用户输入内容中两端的空格，在 v-model 后添加 .trim 修饰符：

```html
<input v-model.trim="msg" />
```