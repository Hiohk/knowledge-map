# Vue.js(vue3)

主要介绍Vue3相关知识点.

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

## 2. Vue基础-模板语法
### 2.1 mustache语法
> react中使用jsx（类似于js的一种语法），vue中使用基于HTML的模板语法；

* \{ \{ message \} \} 双大括号语法；
* \{ \{ 表达式 \} \};
* \{ \{ 三元运算符 \} \} : \{ \{ age>18?"成年人":"未成年人" \} \};
* \{ \{ 调用函数 \} \};

### 2.2 Vue指令

1. **v-once**: 只渲染一次；当数据发生变化时，元素或者组件以及其所有的子元素将视为静态内容呢并且跳过；该指令用于性能优化。
2. **v-text**: 用于更新元素的textContent。
3. **v-html**: 解析html结构。
4. **v-pre**: 用于跳过元素和它**子元素**的编译过程。
5. **v-cloak**: 用于隐藏尚未完成编译的 DOM 模板。

```html
[v-cloak] {
	display: none;
}

<div v-cloak>
  {{ message }}
</div>
```

6. **v-memo**:  缓存一个模板的子树。在元素和组件上都可以使用。为了实现缓存，该指令需要传入一个固定长度的依赖值数组进行比较。如果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。(用于性能优化)
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

9. **v-if，v-else，v-else-if，v-show:**

未完待续。。。。。