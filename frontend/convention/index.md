# Airbnb JavaScript 代码规范

本文内容来自于爱彼迎出品的[JavaScript 开发规范](https://github.com/BingKui/javascript-zh)

## 1. 类型

#### 1.1 原始值

当你访问一个原始类型的时候，你可以直接使用它的值。

- string
- number
- boolean
- null
- undefined
- symbol

```javascript
const foo = 1;
let bar = foo;
bar = 9;
console.log(foo, bar); // => 1, 9
```

- 标识符不能完全被支持，因此在针对不支持的浏览器或者环境时不应该使用它们。

#### 1.2 复杂类型

当你访问一个复杂类型的时候，你需要一个值得引用。

- object
- array
- function

```javascript
const foo = [1, 2];
const bar = foo;
bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```

## 2. 引用

#### 2.1 使用 `const` 定义你的所有引用，避免使用 `var`

eslint: [prefer-const](https://eslint.org/docs/latest/rules/prefer-const.html), [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign.html)

> 为什么? 这样能够确保你不能重新赋值你的引用，否则可能导致错误或者产生难以理解的代码。

```javascript
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

#### 2.2 如果你必须重新赋值你的引用， 使用 `let` 代替 `var`

eslint: [no-var](https://eslint.org/docs/rules/no-var.html)

> 为什么? let 是块级作用域，而不像 var 是函数作用域.

```javascript
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}
```

#### 2.3 注意，`let` 和 `const` 都是块级范围的

```javascript
// const 和 let 只存在于他们定义的块中。
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

## 3. 对象

#### 3.1 使用字面语法来创建对象

eslint: [no-new-object](https://eslint.org/docs/latest/rules/no-new-object.html)

```javascript
// bad
const item = new Object();

// good
const item = {};
```

#### 3.2 在创建具有动态属性名称的对象时使用计算属性名

> 为什么? 它允许你在一个地方定义对象的所有属性。

```javascript
function getKey(k) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: "San Francisco",
};
obj[getKey("enabled")] = true;

// good
const obj = {
  id: 5,
  name: "San Francisco",
  [getKey("enabled")]: true,
};
```

#### 3.3 使用对象方法的缩写

eslint: [object-shorthand](https://eslint.org/docs/rules/object-shorthand.html)

```javascript
// bad
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```

#### 3.4 使用属性值的缩写

eslint: [object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand.html)

> 为什么? 它的写法和描述较短。

```javascript
const lukeSkywalker = "Luke Skywalker";

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};
```

#### 3.5 在对象声明的时候将简写的属性进行分组

> 为什么? 这样更容易的判断哪些属性使用的简写。

```javascript
const anakinSkywalker = "Anakin Skywalker";
const lukeSkywalker = "Luke Skywalker";

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```

#### 3.6 只使用引号标注无效标识符的属性

eslint: [quote-props](https://eslint.org/docs/latest/rules/quote-props.html)

> 为什么? 总的来说，我们认为这样更容易阅读。 它提升了语法高亮显示，并且更容易通过许多 JS 引擎优化。

```javascript
// bad
const bad = {
  foo: 3,
  bar: 4,
  "data-blah": 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  "data-blah": 5,
};
```

#### 3.7 不能直接调用 `Object.prototype` 的方法,如: `hasOwnProperty` 、 `propertyIsEnumerable` 和 `isPrototypeOf`。

> 为什么? 这些方法可能被以下问题对象的属性追踪 - 相应的有 { `hasOwnProperty: false` } - 或者，对象是一个空对象 (`Object.create(null)`)。

```javascript
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // 在模块范围内的缓存中查找一次
/* or */
import has from "has"; // https://www.npmjs.com/package/has
// ...
console.log(has.call(object, key));
```

#### 3.8 更喜欢对象扩展操作符，而不是用 `Object.assign` 浅拷贝一个对象。使用对象的 `rest` 操作符来获得一个具有某些属性的新对象。

```javascript
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // 变异的 `original` ಠ_ಠ
delete copy.a; // 这....

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

## 4. 数组

#### 4.1 使用字面语法创建数组

eslint: [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor.html)

```javascript
// bad
const items = new Array();

// good
const items = [];
```

#### 4.2 使用 `Array#push` 取代直接赋值来给数组添加项。

```javascript
const someStack = [];

// bad
someStack[someStack.length] = "abracadabra";

// good
someStack.push("abracadabra");
```

#### 4.3 使用数组展开方法 `...` 来拷贝数组。

```javascript
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

#### 4.4 将一个类数组对象转换成一个数组，使用展开方法 `...` 代替 `Array.from`

```javascript
const foo = document.querySelectorAll(".foo");

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

#### 4.5 对于对迭代器的映射，使用 `Array.from` 替代展开方法 `...` ，因为它避免了创建中间数组。

```javascript
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

#### 4.6 在数组回调方法中使用 `return` 语句。 如果函数体由一个返回无副作用的表达式的单个语句组成，那么可以省略返回值， 具体查看 8.2

eslint: [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return)

```javascript
// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => x + 1);

// bad - 没有返回值，意味着在第一次迭代后 `acc` 没有被定义
[
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  acc[index] = flatten;
});

// good
[
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  acc[index] = flatten;
  return flatten;
});

// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === "Mockingbird") {
    return author === "Harper Lee";
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === "Mockingbird") {
    return author === "Harper Lee";
  }

  return false;
});
```

#### 4.7 如果数组有多行，则在开始的时候换行，然后在结束的时候换行

```javascript
// bad
const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [1, 2];

// good
const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [1, 2];
```

## 5. 解构

#### 5.1 在访问和使用对象的多个属性的时候使用对象的解构

eslint: [prefer-destructuring](https://eslint.org/docs/latest/rules/prefer-destructuring)

> 为什么? 解构可以避免为这些属性创建临时引用。

```javascript
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

#### 5.2 使用数组解构

eslint: [prefer-destructuring](https://eslint.org/docs/latest/rules/prefer-destructuring)

```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

#### 5.3 对于多个返回值使用对象解构，而不是数组解构

> 为什么? 你可以随时添加新的属性或者改变属性的顺序，而不用修改调用方。

```javascript
// bad
function processInput(input) {
  // 处理代码...
  return [left, right, top, bottom];
}

// 调用者需要考虑返回数据的顺序。
const [left, __, top] = processInput(input);

// good
function processInput(input) {
  // 处理代码...
  return { left, right, top, bottom };
}

// 调用者只选择他们需要的数据。
const { left, top } = processInput(input);
```

## 6. 字符

#### 6.1 使用单引号 '' 定义字符串

eslint: [quotes](https://eslint.org/docs/latest/rules/quotes.html)

```javascript
// bad
const name = "Capt. Janeway";

// bad - 模板文字应该包含插值或换行。
const name = `Capt. Janeway`;

// good
const name = "Capt. Janeway";
```

#### 6.2 使行超过 100 个字符的字符串不应使用字符串连接跨多行写入

> 为什么? 断开的字符串更加难以工作，并且使代码搜索更加困难。

```javascript
// bad
const errorMessage =
  "This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.";

// bad
const errorMessage =
  "This is a super long error that was thrown because " +
  "of Batman. When you stop to think about how Batman had anything to do " +
  "with this, you would get nowhere fast.";

// good
const errorMessage =
  "This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.";
```

#### 6.3 当以编程模式构建字符串时，使用字符串模板代替字符串拼接

eslint: [prefer-template](https://eslint.org/docs/latest/rules/prefer-template.html) [template-curly-spacing](https://eslint.org/docs/latest/rules/template-curly-spacing)

> 为什么? 字符串模板为您提供了一种可读的、简洁的语法，具有正确的换行和字符串插值特性。

```javascript
// bad
function sayHi(name) {
  return "How are you, " + name + "?";
}

// bad
function sayHi(name) {
  return ["How are you, ", name, "?"].join();
}

// bad
function sayHi(name) {
  return `How are you, ${name}?`;
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```

#### 6.4 不要在字符串上使用 eval() ，它打开了太多漏洞

eslint: [no-eval](https://eslint.org/docs/latest/rules/no-eval)

#### 6.5 不要转义字符串中不必要的字符

eslint: [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape)

> 为什么? 反斜杠损害了可读性，因此只有在必要的时候才会出现。

```javascript
// bad
const foo = "'this' is \"quoted\"";

// good
const foo = "'this' is \"quoted\"";
const foo = `my name is '${name}'`;
```

## 7. 方法

#### 7.1 使用命名的函数表达式代替函数声明

eslint: [func-style](https://eslint.org/docs/latest/rules/func-style)

> 为什么? 函数声明是挂起的，这意味着在它在文件中定义之前，很容易引用函数。这会损害可读性和可维护性。如果您发现函数的定义是大的或复杂的，以至于它干扰了对文件的其余部分的理解，那么也许是时候将它提取到它自己的模块中了!不要忘记显式地命名这个表达式，不管它的名称是否从包含变量(在现代浏览器中经常是这样，或者在使用诸如 Babel 之类的编译器时)。这消除了对错误的调用堆栈的任何假设。 [(Discussion)](https://eslint.org/docs/latest/rules/no-useless-escape)

```javascript
// bad
function foo() {
  // ...
}

// bad
const foo = function () {
  // ...
};

// good
// 从变量引用调用中区分的词汇名称
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};
```

#### 7.2 `Wrap` 立即调用函数表达式

eslint: [wrap-iife](https://eslint.org/docs/latest/rules/wrap-iife.html)

> 为什么? 立即调用的函数表达式是单个单元 - 包装， 并且拥有括号调用, 在括号内, 清晰的表达式。 请注意，在一个到处都是模块的世界中，您几乎不需要一个 `IIFE` 。

```javascript
// immediately-invoked function expression (IIFE) 立即调用的函数表达式
(function () {
  console.log("Welcome to the Internet. Please follow me.");
})();
```

#### 7.3 切记不要在非功能块中声明函数 (`if`, `while`, 等)

将函数赋值给变量。 浏览器允许你这样做，但是他们都有不同的解释，这是个坏消息。 eslint: [no-loop-func](https://eslint.org/docs/latest/rules/no-loop-func.html)

#### 7.4 注意: `ECMA-262` 将 `block` 定义为语句列表

函数声明不是语句

```javascript
// bad
if (currentUser) {
  function test() {
    console.log("Nope.");
  }
}

// good
let test;
if (currentUser) {
  test = () => {
    console.log("Yup.");
  };
}
```

#### 7.5 永远不要定义一个参数为 `arguments`。这将会优先于每个函数给定范围的 `arguments` 对象

```javascript
// bad
function foo(name, options, arguments) {
  // ...
}

// good
function foo(name, options, args) {
  // ...
}
```

#### 7.6 不要使用 `arguments`, 选择使用 `rest` 语法 `...` 代替

eslint: [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)

> 为什么? `...` 明确了你想要拉取什么参数。更甚, `rest` 参数是一个真正的数组，而不仅仅是类数组的 `arguments`。

```javascript
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join("");
}

// good
function concatenateAll(...args) {
  return args.join("");
}
```

#### 7.7 使用默认的参数语法，而不是改变函数参数

```javascript
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```

#### 7.8 避免使用默认参数的副作用

> 为什么? 他们很容易混淆。

```javascript
var b = 1;
// bad
function count(a = b++) {
  console.log(a);
}
count(); // 1
count(); // 2
count(3); // 3
count(); // 3
```

#### 7.9 总是把默认参数放在最后

```javascript
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```

#### 7.10 永远不要使用函数构造器来创建一个新函数

eslint: [no-new-func](https://eslint.org/docs/latest/rules/no-new-func)

> 为什么? 以这种方式创建一个函数将对一个类似于 eval() 的字符串进行计算，这将打开漏洞。

```javascript
// bad
var add = new Function("a", "b", "return a + b");

// still bad
var subtract = Function("a", "b", "return a - b");
```

#### 7.11 函数签名中的间距

eslint: [space-before-function-paren](https://eslint.org/docs/latest/rules/space-before-function-paren) [space-before-blocks](https://eslint.org/docs/latest/rules/space-before-blocks)

> 为什么? 一致性很好，在删除或添加名称时不需要添加或删除空格。

```javascript
// bad
const f = function () {};
const g = function () {};
const h = function () {};

// good
const x = function () {};
const y = function a() {};
```

#### 7.12 没用变异参数

eslint: [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign.html)

> 为什么? 将传入的对象作为参数进行操作可能会在原始调用程序中造成不必要的变量副作用。

```javascript
// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, "key") ? obj.key : 1;
}
```

#### 7.13 不要再赋值参数

eslint: [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign.html)

> 为什么? 重新赋值参数会导致意外的行为，尤其是在访问 `arguments` 对象的时候。 它还可能导致性能优化问题，尤其是在 `V8` 中。

```javascript
// bad
function f1(a) {
  a = 1;
  // ...
}

function f2(a) {
  if (!a) {
    a = 1;
  }
  // ...
}

// good
function f3(a) {
  const b = a || 1;
  // ...
}

function f4(a = 1) {
  // ...
}
```

#### 7.14 优先使用扩展运算符 `...` 来调用可变参数函数

eslint: [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread)

> 为什么? 它更加干净，你不需要提供上下文，并且你不能轻易的使用 `apply` 来 `new` 。

```javascript
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]))();

// good
new Date(...[2016, 8, 5]);
```

#### 7.15 具有多行签名或者调用的函数应该像本指南中的其他多行列表一样缩进：在一行上只有一个条目，并且每个条目最后加上逗号
eslint: [function-paren-newline](https://eslint.org/docs/latest/rules/function-paren-newline)

``` javascript
// bad
function foo(bar,
baz,
quux) {
// ...
}

// good
function foo(
bar,
baz,
quux,
) {
// ...
}

// bad
console.log(foo,
bar,
baz);

// good
console.log(
foo,
bar,
baz,
);
```

## 8. 箭头函数

## 9. 类和构造器

## 10. 模块

## 11. 迭代器和发生器

## 12. 属性

## 13. 变量

## 14. 提升

## 15. 比较运算符和等号

## 16. 块

## 17. 控制语句

## 18. 注释

## 19. 空白

## 20. 逗号

## 21. 分号

## 22. 类型转换和强制类型转换

## 23. 命名规范

## 24. 存取器

## 25. 事件

## 26. jQuery

## 27. ECMAScript 5 兼容性

## 28. ECMAScript 6+ (ES 2015+) 风格

## 29. 标准库

## 30. 测试

## 31. 性能

## 32. 资源

## 33. JavaScript 风格指南的指南

## 34. 许可证

## 35. 修正案
