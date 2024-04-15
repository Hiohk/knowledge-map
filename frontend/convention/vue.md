---
prev:
  text: "CSS 代码规范"
  link: "/frontend/convention/css"
next: false
---

# vue 代码规范 <Badge type="warning">Beta</Badge>

## 1. 命名规范

### 1.1 项目文件命名

#### 项目名

全部采用小写方式， 以短横线分隔。例：`my-project-name`。

#### 目录名

参照项目命名规则，有复数结构时，要采用复数命名法。例：`docs`、`assets`、`components`、`directives`、`mixins`、`utils`、`views`。

```
my-project-name/
|- BuildScript // 流水线部署文件目录
|- docs // 项目的细化文档目录（可选）
|- nginx // 部署在容器上前端项目 nginx 代理文件目录
|- node_modules // 下载的依赖包
|- public // 静态页面目录
|- index.html // 项目入口
|- src // 源码目录
|- api // http 请求目录
|- assets // 静态资源目录，这里的资源会被 wabpack 构建
|- icon // icon 存放目录
|- img // 图片存放目录
|- js // 公共 js 文件目录
|- scss // 公共样式 scss 存放目录
|- frame.scss // 入口文件
|- global.scss // 公共样式
|- reset.scss // 重置样式
|- components // 组件
|- plugins // 插件
|- router // 路由
|- routes // 详细的路由拆分目录（可选）
|- index.js
|- store // 全局状态管理
|- utils // 工具存放目录
|- request.js // 公共请求工具
|- views // 页面存放目录
|- App.vue // 根组件
|- main.js // 入口文件
|- tests // 测试用例
|- .browserslistrc// 浏览器兼容配置文件
|- .editorconfig // 编辑器配置文件
|- .eslintignore // eslint 忽略规则
|- .eslintrc.js // eslint 规则
|- .gitignore // git 忽略规则
|- babel.config.js // babel 规则
|- Dockerfile // Docker 部署文件
|- jest.config.js
|- package-lock.json
|- package.json // 依赖
|- README.md // 项目 README
|- vue.config.js // webpack 配置
```

#### 图像文件名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以下划线分隔。

```
banner_sina.gif
menu_aboutus.gif
menutitle_news.gif
logo_police.gif
logo_national.gif
pic_people.jpg
pic_TV.jpg
```

#### HTML 文件名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以下划线分隔。

```
|- error_report.html
|- success_report.html
```

#### CSS 文件名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以短横线分隔。

```
|- normalize.less
|- base.less
|- date-picker.scss
|- input-number.scss
```

#### JavaScript 文件名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以短横线分隔。

```
|- index.js
|- plugin.js
|- util.js
|- date-util.js
|- account-model.js
|- collapse-transition.js
```

上述规则可以快速记忆为“静态文件下划线，编译文件短横线”。

### 1.2 Vue 组件命名

#### 单文件组件名

文件扩展名为 `.vue` 的 `single-file components` (单文件组件)。单文件组件名应该始终是单词大写开头 (PascalCase)。

```
components/
|- MyComponent.vue
```

#### 单例组件名

只拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。这不意味着组件只可用于一个单页面，而是*每个页面*只使用一次。这些组件永远不接受任何 `prop`，因为它们是为你的应用定制的。如果你发现有必要添加 `prop`，那就表明这实际上是一个可复用的组件，只是目前在每个页面里只使用一次。比如，头部和侧边栏组件几乎在每个页面都会使用，不接受 `prop`，该组件是专门为该应用所定制的。

```
components/
|- TheHeading.vue
|- TheSidebar.vue
```

#### 基础组件名

基础组件：不包含业务，独立、具体功能的基础组件，比如日期选择器、模态框等。这类组件作为项目的基础控件，会被大量使用，因此组件的 API 进行过高强度的抽象，可以通过不同配置实现不同的功能。
应用特定样式和约定的基础组件(也就是展示类的、无逻辑的或无状态、不掺杂业务逻辑的组件) 应该全部以一个特定的前缀开头 —— `Base`。基础组件在一个页面内可使用多次，在不同页面内也可复用，是高可复用组件。

```
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
```

#### 业务组件

业务组件：它不像基础组件只包含某个功能，而是在业务中被多个页面复用的（具有可复用性），它与基础组件的区别是，业务组件只在当前项目中会用到，不具有通用性，而且会包含一些业务，比如数据请求；而基础组件不含业务，在任何项目中都可以使用，功能单一，比如一个具有数据校验功能的输入框。掺杂了复杂业务的组件（拥有自身 `data`、`prop` 的相关处理）即业务组件应该以 `Custom` 前缀命名。业务组件在一个页面内比如：某个页面内有一个卡片列表，而样式和逻辑跟业务紧密相关的卡片就是业务组件。

```
components/
|- CustomCard.vue
```

#### 紧密耦合的组件名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名。 因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

```
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```

#### 组件名中单词顺序

组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。 因为编辑器通常会按字母顺序组织文件，所以现在组件之间的重要关系一目了然。如下组件主要是用于搜索和设置功能。

```
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```

还有另一种多级目录的方式，把所有的搜索组件放到“search”目录，把所有的设置组件放到“settings”目录。我们只推荐在非常大型 (如有 100+ 个组件) 的应用下才考虑这么做，因为在多级目录间找来找去，要比在单个 `components` 目录下滚动查找要花费更多的精力。

#### 完整单词的组件名

组件名应该倾向于而不是缩写。 编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。

```
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

### 1.3 代码参数命名

#### name

组件名应该始终是多个单词，应该始终是 `PascalCase` 的。根组件 App 以及 xxx、 之类的 Vue 内置组件除外。这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

```javascript
export default {
  name: "ToDoList",
  // ...
};
```

#### prop

在声明 `prop` 的时候，其命名应该始终使用 `camelCase`，而在模板和 JSX 中应该始终使用 `kebab-case`。我们单纯的遵循每个语言的约定，在 JavaScript 中更自然的是 `camelCase`。而在 HTML 中则是 `kebab-case`。

```javascript
<WelcomeMessage greeting-text="hi" />;

export default {
  name: "MyComponent",
  // ...
  props: {
    greetingText: {
      type: String,
      required: true,
      validator: function (value) {
        return ["syncing", "synced"].indexOf(value) !== -1;
      },
    },
  },
};
```

#### router

Vue Router Path 命名采用 `kebab-case` 格式。 用 Snake（如：`/user_info`）或 `camelCase`（如：`/userInfo`)的单词会被当成一个单词，搜索引擎无法区分语义。

```json
// bad
{
  path: '/user_info', // user_info 当成一个单词
  name: 'UserInfo',
  component: UserInfo,
  meta: {
    title: ' - 用户',
    desc: ''
  }
},
// good
{
  path: '/user-info', // 能解析成 user info
  name: 'UserInfo',
  component: UserInfo,
  meta: {
    title: ' - 用户',
    desc: ''
  }
},
```

#### 模板中组件

对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 `PascalCase` 的，但是在 DOM 模板中总是 `kebab-case` 的。

```html
<!-- 在单文件组件和字符串模板中 -->
<MyComponent />
```

```html
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

#### 自闭合组件

在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。

```html
<!-- 在单文件组件和字符串模板中 -->
<MyComponent />

<!-- 在所有地方 -->
<my-component></my-component>
```

#### 变量

命名方法：`camelCase` 命名规范：类型 + 对象描述或属性的方式

```javascript
// bad
var getTitle = "LoginTable";
// good
let tableTitle = "LoginTable";
let mySchool = "我的学校";
```

#### 常量

命名方法：全部大写下划线分割 命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词

```javascript
const MAX_COUNT = 10;
const URL = "http://test.host.com";
```

#### 方法

命名方法：`camelCase` 命名规范：统一使用动词或者动词 + 名词形式。

```javascript
// 1、普通情况下，使用动词 + 名词形式
// bad
go、nextPage、show、open、login
// good
jumpPage、openCarInfoDialog
// 2、请求数据方法，以 data 结尾
// bad
takeData、confirmData、getList、postForm
// good
getListData、postFormData
// 3、单个动词的情况
init、refresh
```

| <div style="width:50px">动词 </div> | 含义                         | 返回值                                                |
| ----------------------------------- | ---------------------------- | ----------------------------------------------------- |
| can                                 | 判断是否可执行某个动作 (权 ) | 函数返回一个布尔值。true：可执行；false：不可执行     |
| has                                 | 判断是否含有某个值           | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
| is                                  | 判断是否为某个值             | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
| get                                 | 获取某个值                   | 函数返回一个非布尔值                                  |
| set                                 | 设置某个值                   | 无返回值、返回是否设置成功或者返回链式对象            |

#### 自定义事件

自定义事件应始终使用 `kebab-case` 的事件名。不同于组件和 `prop`，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。

```javascript
this.$emit('my-event')

<MyComponent @my-event="handleDoSomething" />
```

不同于组件和 `prop`，事件名不会被用作一个 JavaScript 变量名或 `property` 名，所以就没有理由使用 `camelCase` 或 `PascalCase` 了。并且 `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写(因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成 `v-on:myevent`——导致 `myEvent` 不可能被监听到。

由原生事件可以发现其使用方式如下：

```html
<div
  @blur="toggleHeaderFocus"
  @focus="toggleHeaderFocus"
  @click="toggleMenu"
  @keydown.esc="handleKeydown"
  @keydown.enter="handleKeydown"
  @keydown.up.prevent="handleKeydown"
  @keydown.down.prevent="handleKeydown"
  @keydown.tab="handleKeydown"
  @keydown.delete="handleKeydown"
  @mouseenter="hasMouseHoverHead = true"
  @mouseleave="hasMouseHoverHead = false"
></div>
```

而为了区分*原生事件*和*自定义事件*在 Vue 中的使用，建议除了多单词事件名使用 `kebab-case` 的情况下，命名还需遵守为 `on + 动词` 的形式，如下：

```html
<!-- 父组件 -->
<div
  @on-search="handleSearch"
  @on-clear="handleClear"
  @on-clickoutside="handleClickOutside"
></div>
```

```javascript
// 子组件
export default {
  methods: {
    handleTriggerItem() {
      this.$emit("on-clear");
    },
  },
};
```

#### 事件方法

命名方法：`camelCase` 命名规范：`handle + 名称（可选）+ 动词`

```html
<template>
  <div
    @click.native.stop="handleItemClick()"
    @mouseenter.native.stop="handleItemHover()"
  ></div>
</template>
<script>
  export default {
    methods: {
      handleItemClick() {
        //...
      },
      handleItemHover() {
        //...
      },
    },
  };
</script>
```

## 2. 代码规范

### 2.1 Vue

#### 代码结构 <Badge type="warning">Vue2</Badge>

```html
<template>
  <div id="my-component">
    <DemoComponent />
  </div>
</template>

<script>
  import DemoComponent from '../components/DemoComponent'

  export default {
    name: 'MyComponent',
    components: {
      DemoComponent
    },
    mixins: [],
    props: {},
    data () {
      return {}
    },
    computed: {},
    watch: {}
    created () {},
    mounted () {},
    destroyed () {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  #my-component {
  }
</style>
```

#### data <Badge type="warning">Vue2</Badge>

组件的 data 必须是一个函数。

```javascript
// In a .vue file
export default {
  data() {
    return {
      foo: "bar",
    };
  },
};
```

#### prop <Badge type="warning">Vue2</Badge>

Prop 定义应该尽量详细。

```javascript
export default {
  props: {
    status: {
      type: String,
      required: true,
      validator: function (value) {
        return (
          ["syncing", "synced", "version-conflict", "error"].indexOf(value) !==
          -1
        );
      },
    },
  },
};
```

#### computed <Badge type="warning">Vue2</Badge>

应该把复杂计算属性分割为尽可能多的更简单的属性。 小的、专注的计算属性减少了信息使用时的假设性限制，所以需求变更时也用不着那么多重构了。

```javascript
// bad
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}
// good
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

#### 为 v-for 设置键值

在组件上必须用 `key` 搭配 `v-for`，以便维护内部组件及其子树的状态。

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

#### v-if 和 v-for 互斥

永远不要把 v-if 和 v-for 同时用在同一个元素上。(vue2 和 vue3 同样适用，而优先级不同)

```html
<!-- bad：控制台报错 -->
<ul>
  <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

一般我们在两种常见的情况下会倾向于这样做：

为了过滤一个列表中的项目 (比如 `v-for="user in users" v-if="user.isActive"`)。在这种情形下，请将 `users` 替换为一个计算属性 (比如 `activeUsers`)，让其返回过滤后的列表。

```javascript
computed: {
  activeUsers: function () {
    return this.users.filter((user) => {
      return user.isActive
    })
  }
}
```

```html
<ul>
  <li v-for="user in activeUsers" :key="user.id">{{ user.name }}</li>
</ul>
```

为了避免渲染本应该被隐藏的列表 (比如 `v-for="user in users" v-if="shouldShowUsers"`)。这种情形下，请将 `v-if` 移动至容器元素上 (比如 ul, ol)。

```html
<!-- bad -->
<ul>
  <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
    {{ user.name }}
  </li>
</ul>
<!-- good -->
<ul v-if="shouldShowUsers">
  <li v-for="user in users" :key="user.id">{{ user.name }}</li>
</ul>
```

#### 多个 attribute 的元素

多个 `attribute` 的元素应该分多行撰写，每个 `attribute` 一行。

```html
<!-- bad -->
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo" />
<MyComponent foo="a" bar="b" baz="c" />
```

```html
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo" />
<MyComponent foo="a" bar="b" baz="c" />
```

#### 模板中简单的表达式

组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。复杂表达式会让你的模板变得不那么声明式。我们应该尽量描述应该出现的是什么，而非如何计算那个值。而且计算属性和方法使得代码可以重用。

```javascript
// bad
{
  {
    fullName
      .split(" ")
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
}
```

更好的做法：

```javascript
// 在模板中
{{ normalizedFullName }}
// 复制代码
// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

#### 带引号的 attribute 值

非空 HTML 特性值应该始终带双引号。

```html
<!-- bad -->
<input type="text" />
<AppSidebar :style={width:sidebarWidth+'px'}>

<!-- good -->
<input type="text" />
<AppSidebar :style="{ width: sidebarWidth + 'px' }"></AppSidebar>
```

#### 指令缩写

- 用 `:` 表示 `v-bind`:
- 用 `@` 表示 `v-on`:
- 用 `#` 表示 `v-slot`:

```html
<input :value="newTodoText" :placeholder="newTodoInstructions" />
<input @input="onInput" @focus="onFocus" />
<template #header>
  <h1>Here might be a page title</h1>
</template>
<template #footer>
  <p>Here's some contact info</p>
</template>
```

## 3. 注释规范

> 注释的目的：
>
> • 提高代码的可读性，从而提高代码的可维护性 注释的原则：
>
> • 如无必要，勿增注释 ( As short as possible ) ；
>
> • 如有必要，尽量详尽 ( As long as necessary )。

### 3.1 HTML 文件注释

#### 单行注释

一般用于简单的描述，如某些状态描述、属性描述等。注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行。

推荐：

```html
<!-- Comment Text -->
<div>...</div>
```

不推荐:

```html
<div>...</div>
<!-- Comment Text -->
<div>
  <!-- Comment Text -->
  ...
</div>
```

#### 模块注释

一般用于描述模块的名称以及模块开始与结束的位置。注释内容前后各一个空格字符， 表示模块开始， 表示模块结束，模块与模块之间相隔一行。

推荐：

```html
<!-- S Comment Text A -->
<div class="mod_a">...</div>
<!-- E Comment Text A -->

<!-- S Comment Text B -->
<div class="mod_b">...</div>
<!-- E Comment Text B -->
```

不推荐:

```html
<!-- S Comment Text A -->
<div class="mod_a">...</div>
<!-- E Comment Text A -->
<!-- S Comment Text B -->
<div class="mod_b">...</div>
<!-- E Comment Text B -->
```

#### 嵌套模块注释

当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用。

```html
<!-- S Comment Text -->
<!-- E Comment Text -->
```

而改用:

```html
<!-- /Comment Text -->
```

注释写在模块结尾标签底部，单独一行。

```html
<!-- S Comment Text A -->
<div class="mod_a">
  <div class="mod_b">...</div>
  <!-- /mod_b -->

  <div class="mod_c">...</div>
  <!-- /mod_c -->
</div>
<!-- E Comment Text A -->
```

### 3.2 CSS 文件注释

#### 单行注释

注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行。

推荐：

```css
/* Comment Text */
.jdc {
}
/* Comment Text */
.jdc {
}
```

不推荐：

```css
/*Comment Text*/
.jdc {
  display: block;
}
.jdc {
  display: block; /*Comment Text*/
}
```

#### 模块注释

注释内容第一个字符和最后一个字符都是一个空格字符，/ 与 模块信息描述占一行，多个横线分隔符 - 与 / 占一行，行与行之间相隔两行。

推荐：

```javascript
/* Module A
---------------------------------------------------------------- */
.mod_a {}
/* Module B
---------------------------------------------------------------- */
.mod_b {}
```

不推荐：

```javascript
/* Module A ---------------------------------------------------- */
.mod_a {}
/* Module B ---------------------------------------------------- */
.mod_b {}
```

#### 文件注释

在样式文件编码声明 `@charset` 语句下面注明页面名称、作者、创建日期等信息。

```javascript
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2024-03-08
 */
```

### 3.3 JavaScript 文件注释

#### 单行注释

单行注释使用 //，注释应单独一行写在被注释对象的上方，不要追加在某条语句的后面.
推荐：

```javascript
// is current tab
const active = true;
```

不推荐：

```javascript
const active = true; // is current tab
```

注释行的上方需要有一个空行（除非注释行上方是一个块的顶部），以增加可读性。

推荐：

```javascript
function getType() {
  console.log("fetching type...");

  // set the default type to 'no type'
  const type = this.type || "no type";
  return type;
}
// 注释行上面是一个块的顶部时不需要空行
function getType() {
  // set the default type to 'no type'
  const type = this.type || "no type";
  return type;
}
```

不推荐:

```javascript
function getType() {
  console.log("fetching type...");
  // set the default type to 'no type'
  const type = this.type || "no type";
  return type;
}
```

#### 多行注释

多行注释使用 `/ … /`，而不是多行的 `//`。

推荐：

```javascript
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {
  // ...
  return element;
}
```

不推荐:

```javascript
// make() returns a new element
// based on the passed in tag name
function make(tag) {
  // ...
  return element;
}
```

#### 注释空格

注释内容和注释符之间需要有一个空格，以增加可读性。`eslint: spaced-comment`。

推荐：

```javascript
// is current tab
const active = true;
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {
  // ...
  return element;
}
```

不推荐：

```javascript
//is current tab
const active = true;
/**
 *make() returns a new element
 *based on the passed-in tag name
 */
function make(tag) {
  // ...
  return element;
}
```

#### 特殊标记

有时我们发现某个可能的 bug，但因为一些原因还没法修复；或者某个地方还有一些待完成的功能，这时我们需要使用相应的特殊标记注释来告知未来的自己或合作者。常用的特殊标记有两种：

- `// FIXME` : 说明问题是什么
- `/ TODO` : 说明还要做什么或者问题的解决方案

```javascript
class Calculator extends Abacus {
  constructor() {
    super();
    // FIXME: shouldn’t use a global here
    total = 0;
    // TODO: total should be configurable by an options param
    this.total = 0;
  }
}
```

#### 文档类注释

文档类注释，如函数、类、文件、事件等；都使用 jsdoc 规范。

```javascript
/**
 * Book类，代表一个书本.
 * @constructor
 * @param {string} title - 书本的标题.
 * @param {string} author - 书本的作者.
 */
function Book(title, author) {
  this.title = title;
  this.author = author;
}
Book.prototype = {
  /**
   * 获取书本的标题
   * @returns {string|*}
   */
  getTitle: function () {
    return this.title;
  },
  /**
   * 设置书本的页数
   * @param pageNum {number} 页数
   */
  setPageNum: function (pageNum) {
    this.pageNum = pageNum;
  },
};
```

#### 注释工具

`ESLint` 是当下最流行的 JS 代码检查工具，`ESLint` 中有一些注释相关的规则，用户可选择开启：

- `valid-jsdoc`
- `require-jsdoc`
- `no-warning-comments`
- `capitalized-comments`
- `line-comment-position`
- `lines-around-comment`
- `multiline-comment-style`
- `no-inline-comments`
- `spaced-comment`

## 参考文献

1. [前端代码风格规范 I](https://developer.aliyun.com/article/1192808?spm=a2c6h.14164896.0.0.2be247c5nDfrxw&scm=20140722.S_community@@%E6%96%87%E7%AB%A0@@1192808._.ID_1192808-RL_vue%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83-LOC_search~UND~community~UND~item-OR_ser-V_3-P0_2)

2. [前端代码风格规范 II](https://developer.aliyun.com/article/1192809?spm=a2c6h.14164896.0.0.2be247c5nDfrxw&scm=20140722.S_community@@%E6%96%87%E7%AB%A0@@1192809._.ID_1192809-RL_vue%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83-LOC_search~UND~community~UND~item-OR_ser-V_3-P0_3)

3. [前端代码风格规范 III](https://developer.aliyun.com/article/1192810?spm=a2c6h.14164896.0.0.2be247c5nDfrxw&scm=20140722.S_community@@%E6%96%87%E7%AB%A0@@1192810._.ID_1192810-RL_vue%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83-LOC_search~UND~community~UND~item-OR_ser-V_3-P0_4)

<a-back-top />
