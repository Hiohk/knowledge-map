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

```javascript
// bad
function foo(bar, baz, quux) {
  // ...
}

// good
function foo(bar, baz, quux) {
  // ...
}

// bad
console.log(foo, bar, baz);

// good
console.log(foo, bar, baz);
```

## 8. 箭头函数
#### 8.1 当你必须使用匿名函数时 (当传递内联函数时)， 使用箭头函数
eslint: [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback.html), [arrow-spacing](https://eslint.org/docs/latest/rules/arrow-spacing.html)

> 为什么? 它创建了一个在 `this` 上下文中执行的函数版本，它通常是你想要的，并且是一个更简洁的语法。
> 
> 为什么不? 如果你有一个相当复杂的函数，你可以把这个逻辑转移到它自己的命名函数表达式中。

```javascript
// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

#### 8.2 如果函数体包含一个单独的语句，返回一个没有副作用的 [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)，省略括号并使用隐式返回。否则，保留括号并使用 `return` 语句 
eslint: [arrow-parens](https://eslint.org/docs/latest/rules/arrow-parens.html), [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style.html)

> 为什么? 语法糖。多个函数被链接在一起时，提高可读性。

```javascript
// bad
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map(number => `A string containing the ${number}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
  [index]: number,
}));

// 没有副作用的隐式返回
function foo(callback) {
  const val = callback();
  if (val === true) {
    // 如果回调返回 true 执行
  }
}

let bool = false;

// bad
foo(() => bool = true);

// good
foo(() => {
  bool = true;
});
```

#### 8.3 如果表达式跨越多个行，用括号将其括起来，以获得更好的可读性。

> 为什么? 它清楚地显示了函数的起点和终点。

```javascript
// bad
['get', 'post', 'put'].map(httpMethod => Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
);

// good
['get', 'post', 'put'].map(httpMethod => (
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
));
```

#### 8.4 如果你的函数接收一个参数，则可以不用括号，省略括号。 否则，为了保证清晰和一致性，需要在参数周围加上括号。 注意：总是使用括号是可以接受的，在这种情况下，我们使用 [“always” option](https://eslint.org/docs/latest/rules/arrow-parens#always) 来配置 eslint。
eslint: [arrow-parens](https://eslint.org/docs/latest/rules/arrow-parens.html)

> 为什么? 减少视觉上的混乱。

```javascript
// bad
[1, 2, 3].map((x) => x * x);

// good
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].map(number => (
  `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
));

// bad
[1, 2, 3].map(x => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

#### 8.5 避免箭头函数符号 (`=>`) 和比较运算符 (`<=`, `>=`) 的混淆
eslint: [no-confusing-arrow](https://eslint.org/docs/latest/rules/no-confusing-arrow)

```javascript
// bad
const itemHeight = item => item.height > 256 ? item.largeSize : item.smallSize;

// bad
const itemHeight = (item) => item.height > 256 ? item.largeSize : item.smallSize;

// good
const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);

// good
const itemHeight = (item) => {
  const { height, largeSize, smallSize } = item;
  return height > 256 ? largeSize : smallSize;
};
```

#### 8.6 注意带有隐式返回的箭头函数函数体的位置
eslint: [implicit-arrow-linebreak](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)

```javascript
// bad
(foo) =>
  bar;

(foo) =>
  (bar);

// good
(foo) => bar;
(foo) => (bar);
(foo) => (
   bar
)
```

## 9. 类和构造器
#### 9.1 尽量使用 `class`。避免直接操作 `prototype`

?为什么? `class` 语法更简洁，更容易推理。

```javascript
// bad
function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function () {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

// good
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}
```

#### 9.2 使用 `extends` 来扩展继承。

> 为什么? 它是一个内置的方法，可以在不破坏 `instanceof` 的情况下继承原型功能。

```javascript
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this.queue[0];
};

// good
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}
```

#### 9.3 方法返回了 `this` 来供其内部方法调用

```javascript
// bad
Jedi.prototype.jump = function () {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function (height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);
```

#### 9.4 只要在确保能正常工作并且不产生任何副作用的情况下，编写一个自定义的 `toString()` 方法也是可以的

```javascript
class Jedi {
  constructor(options = {}) {
    this.name = options.name || 'no name';
  }

  getName() {
    return this.name;
  }

  toString() {
    return `Jedi - ${this.getName()}`;
  }
}
```

#### 9.5 如果没有指定类，则类具有默认的构造器。 一个空的构造器或是一个代表父类的函数是没有必要的
eslint: [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)

```javascript
// bad
class Jedi {
  constructor() {}

  getName() {
    return this.name;
  }
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// good
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}
```

#### 9.6 避免定义重复的类成员
eslint: [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)

> 为什么? 重复的类成员声明将会默认倾向于最后一个 - 具有重复的类成员可以说是一个错误。

``` javascript
// bad
class Foo {
  bar() { return 1; }
  bar() { return 2; }
}

// good
class Foo {
  bar() { return 1; }
}

// good
class Foo {
  bar() { return 2; }
}
```

## 10. 模块
#### 10.1 你可能经常使用模块 (`import/export`) 在一些非标准模块的系统上。 你也可以在你喜欢的模块系统上相互转换

> 为什么? 模块是未来的趋势，让我们拥抱未来。

```javascript
// bad
const AirbnbStyleGuide = require('./AirbnbStyleGuide');
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;

// best
import { es6 } from './AirbnbStyleGuide';
export default es6;
```

#### 10.2 不要使用通配符导入

> 为什么? 这确定你有一个单独的默认导出。

```javascript
// bad
import * as AirbnbStyleGuide from './AirbnbStyleGuide';

// good
import AirbnbStyleGuide from './AirbnbStyleGuide';
```

#### 10.3 不要直接从导入导出

> 为什么? 虽然写在一行很简洁，但是有一个明确的导入和一个明确的导出能够保证一致性。

```javascript
// bad
// filename es6.js
export { es6 as default } from './AirbnbStyleGuide';

// good
// filename es6.js
import { es6 } from './AirbnbStyleGuide';
export default es6;
```

#### 10.4 只从一个路径导入所有需要的东西
eslint: [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)

> 为什么? 从同一个路径导入多个行，使代码更难以维护。

```javascript
// bad
import foo from 'foo';
// … 其他导入 … //
import { named1, named2 } from 'foo';

// good
import foo, { named1, named2 } from 'foo';

// good
import foo, {
  named1,
  named2,
} from 'foo';
```

#### 10.5 不要导出可变的引用
eslint: [import/no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md)

> 为什么? 在一般情况下，应该避免发生突变，但是在导出可变引用时及其容易发生突变。虽然在某些特殊情况下，可能需要这样，但是一般情况下只需要导出常量引用。

```javascript
// bad
let foo = 3;
export { foo };

// good
const foo = 3;
export { foo };
```

#### 10.6 在单个导出的模块中，选择默认模块而不是指定的导出
eslint: [import/prefer-default-export](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md)

> 为什么? 为了鼓励更多的文件只导出一件东西，这样可读性和可维护性更好。

```javascript
// bad
export function foo() {}

// good
export default function foo() {}
```

#### 10.7 将所有的 `imports` 语句放在所有非导入语句的上边
eslint: [import/first](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md)

> 为什么? 由于所有的 `imports` 都被提前，保持他们在顶部是为了防止意外发生。

```javascript
// bad
import foo from 'foo';
foo.init();

import bar from 'bar';

// good
import foo from 'foo';
import bar from 'bar';

foo.init();
```

#### 10.8 多行导入应该像多行数组和对象一样缩进

> 为什么? 花括号和其他规范一样，遵循相同的缩进规则，后边的都好一样。

```javascript
// bad
import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

// good
import {
  longNameA,
  longNameB,
  longNameC,
  longNameD,
  longNameE,
} from 'path';
```

#### 10.9 在模块导入语句中禁止使用 Webpack 加载器语法
eslint: [import/no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md)

> 为什么? 因为在导入语句中使用 `webpack` 语法，将代码和模块绑定在一起。应该在 `webpack.config.js` 中使用加载器语法。

```javascript
// bad
import fooSass from 'css!sass!foo.scss';
import barCss from 'style!css!bar.css';

// good
import fooSass from 'foo.scss';
import barCss from 'bar.css';
```

## 11. 迭代器和发生器
#### 11.1 不要使用迭代器。你应该使用 `JavaScript` 的高阶函数代替 `for-in` 或者 `for-of`
eslint: [no-iterator](https://eslint.org/docs/latest/rules/no-iterator.html) [no-restricted-syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax)

> 为什么? 这是我们强制的规则。拥有返回值得纯函数比这个更容易解释。
>
> 使用 `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / ... 遍历数组， 和使用 `Object.keys()` / `Object.values()` / `Object.entries()` 迭代你的对象生成数组。

```javascript
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;

// good
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

// bad
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// good
const increasedByOne = [];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});

// best (keeping it functional)
const increasedByOne = numbers.map(num => num + 1);
```

#### 11.2 不要使用发生器

> 为什么? 它们不能很好的适应 `ES5`。


#### 11.3 如果你必须使用发生器或者无视我们的建议，请确保他们的函数签名是正常的间隔
eslint: [generator-star-spacing](https://eslint.org/docs/latest/rules/generator-star-spacing)

> 为什么? `function` 和 `*` 是同一个概念关键字的一部分 - `*` 不是 `function` 的修饰符，`function*` 是一个不同于 `function` 的构造器。

```javascript
// bad
function * foo() {
  // ...
}

// bad
const bar = function * () {
  // ...
};

// bad
const baz = function *() {
  // ...
};

// bad
const quux = function*() {
  // ...
};

// bad
function*foo() {
  // ...
}

// bad
function *foo() {
  // ...
}

// very bad
function
*
foo() {
  // ...
}

// very bad
const wat = function
*
() {
  // ...
};

// good
function* foo() {
  // ...
}

// good
const foo = function* () {
  // ...
};
```

## 12. 属性
#### 12.1 访问属性时使用点符号
eslint: [dot-notation](https://eslint.org/docs/latest/rules/dot-notation.html)

```javascript
const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke['jedi'];

// good
const isJedi = luke.jedi;
```

#### 12.2 使用变量访问属性时，使用 `[]` 表示法。

```javascript
const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp('jedi');
```

#### 12.3 计算指数时，可以使用 `**` 运算符
eslint: [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)

```javascript
// bad
const binary = Math.pow(2, 10);

// good
const binary = 2 ** 10;
```

## 13. 变量
#### 13.1 使用 `const` 或者 `let` 来定义变量。 不这样做将创建一个全局变量。 我们希望避免污染全局命名空间。 Captain Planet 警告过我们
eslint: [no-undef](https://eslint.org/docs/latest/rules/no-undef) [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)

```javascript
// bad
superPower = new SuperPower();

// good
const superPower = new SuperPower();
```

#### 13.2 使用 `const` 或者 `let` 声明每一个变量
eslint: [one-var](https://eslint.org/docs/latest/rules/one-var.html)

> 为什么? 这样更容易添加新的变量声明，而且你不必担心是使用 `;` 还是使用 `,` 或引入标点符号的差别。 你可以通过 debugger 逐步查看每个声明，而不是立即跳过所有声明。

```javascript
// bad
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

#### 13.3 把 `const` 声明的放在一起，把 `let` 声明的放在一起。

> 为什么? 这在后边如果需要根据前边的赋值变量指定一个变量时很有用。

```javascript
// bad
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```

#### 13.4 在你需要的使用定义变量，但是要把它们放在一个合理的地方

> 为什么? `let` 和 `const` 是块级作用域而不是函数作用域。

```javascript
// bad - 不必要的函数调用
function checkName(hasName) {
  const name = getName();

  if (hasName === 'test') {
    return false;
  }

  if (name === 'test') {
    this.setName('');
    return false;
  }

  return name;
}

// good
function checkName(hasName) {
  if (hasName === 'test') {
    return false;
  }

  const name = getName();

  if (name === 'test') {
    this.setName('');
    return false;
  }

  return name;
}
```

#### 13.5 不要链式变量赋值
eslint: [no-multi-assign](https://eslint.org/docs/latest/rules/no-multi-assign)

> 为什么? 链式变量赋值会创建隐式全局变量。

```javascript
// bad
(function example() {
  // JavaScript 把它解释为
  // let a = ( b = ( c = 1 ) );
  // let 关键词只适用于变量 a ；变量 b 和变量 c 则变成了全局变量。
  let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function example() {
  let a = 1;
  let b = a;
  let c = a;
}());

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// 对于 `const` 也一样
```

#### 13.6 避免使用不必要的递增和递减 (`++`, `--`)
eslint: [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus)

> 为什么? 在eslint文档中，一元递增和递减语句以自动分号插入为主题，并且在应用程序中可能会导致默认值的递增或递减。它还可以用像 `num += 1` 这样的语句来改变您的值，而不是使用 `num++` 或 `num ++` 。不允许不必要的增量和减量语句也会使您无法预先递增/预递减值，这也会导致程序中的意外行为。

```javascript
// bad

const array = [1, 2, 3];
let num = 1;
num++;
--num;

let sum = 0;
let truthyCount = 0;
for (let i = 0; i < array.length; i++) {
  let value = array[i];
  sum += value;
  if (value) {
    truthyCount++;
  }
}

// good

const array = [1, 2, 3];
let num = 1;
num += 1;
num -= 1;

const sum = array.reduce((a, b) => a + b, 0);
const truthyCount = array.filter(Boolean).length;
```

#### 13.7 避免在赋值语句 `=` 前后换行。如果你的代码违反了 `max-len`， 使用括号包裹
eslint: [operator-linebreak](https://eslint.org/docs/latest/rules/operator-linebreak.html)

> 为什么? 在 `=` 前后换行，可能混淆赋的值。

```javascript
// bad
const foo =
  superLongLongLongLongLongLongLongLongFunctionName();

// bad
const foo
  = 'superLongLongLongLongLongLongLongLongString';

// good
const foo = (
  superLongLongLongLongLongLongLongLongFunctionName()
);

// good
const foo = 'superLongLongLongLongLongLongLongLongString';
```

## 14. 提升
#### 14.1 `var` 定义的变量会被提升到函数范围的最顶部，但是它的赋值不会。`const` 和 `let` 声明的变量受到一个称之为 [Temporal Dead Zones (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone_and_errors_with_let) 的新概念保护。 知道为什么 [typeof 不再安全](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15) 是很重要的

```javascript
// 我们知道这个行不通 (假设没有未定义的全局变量)
function example() {
  console.log(notDefined); // => throws a ReferenceError
}

// 在引用变量后创建变量声明将会因变量提升而起作用。
// 注意: 真正的值 `true` 不会被提升。
function example() {
  console.log(declaredButNotAssigned); // => undefined
  var declaredButNotAssigned = true;
}

// 解释器将变量提升到函数的顶部
// 这意味着我们可以将上边的例子重写为：
function example() {
  let declaredButNotAssigned;
  console.log(declaredButNotAssigned); // => undefined
  declaredButNotAssigned = true;
}

// 使用 const 和 let
function example() {
  console.log(declaredButNotAssigned); // => throws a ReferenceError
  console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
  const declaredButNotAssigned = true;
}
```

#### 14.2 匿名函数表达式提升变量名，而不是函数赋值

```javascript
function example() {
  console.log(anonymous); // => undefined

  anonymous(); // => TypeError anonymous is not a function

  var anonymous = function () {
    console.log('anonymous function expression');
  };
}
```

#### 14.3 命名函数表达式提升的是变量名，而不是函数名或者函数体

```javascript
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  superPower(); // => ReferenceError superPower is not defined

  var named = function superPower() {
    console.log('Flying');
  };
}

// 当函数名和变量名相同时也是如此。
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  var named = function named() {
    console.log('named');
  };
}
```

#### 14.4 函数声明提升其名称和函数体

```javascript
function example() {
  superPower(); // => Flying

  function superPower() {
    console.log('Flying');
  }
}
```
更多信息请参考 [Ben Cherry](https://www.adequatelygood.com/) 的 [JavaScript Scoping & Hoisting](https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)。

## 15. 比较运算符和等号
#### 15.1 使用 `===` 和 `!==` 而不是 `==` 和 `!=`
eslint: [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq.html)

#### 15.2 条件语句，例如 `if` 语句使用 `ToBoolean` 的抽象方法来计算表达式的结果，并始终遵循以下简单的规则：

- **Objects** 的取值为：**true**
- **Undefined** 的取值为：**false**
- **Null** 的取值为：**false**
- **Booleans** 的取值为：**布尔值的取值**
- **Numbers** 的取值为：如果为 *+0, -0, or NaN** 值为 **false** 否则为 **true**
- **Strings** 的取值为: 如果是一个空字符串 `''` 值为 **false** 否则为 **true**
  
```javascript
if ([0] && []) {
  // true
  // 一个数组（即使是空的）是一个对象，对象的取值为 true
}
```

#### 15.3 对于布尔值使用简写，但是对于字符串和数字进行显式比较

```javascript
// bad
if (isValid === true) {
  // ...
}

// good
if (isValid) {
  // ...
}

// bad
if (name) {
  // ...
}

// good
if (name !== '') {
  // ...
}

// bad
if (collection.length) {
  // ...
}

// good
if (collection.length > 0) {
  // ...
}
```

#### 5.4 获取更多信息请查看 Angus Croll 的 [Truth Equality and JavaScript](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108)

#### 15.5 在 `case` 和 `default` 的子句中，如果存在声明 (例如, `let`, `const`, `function`, 和 `class`)，使用大括号来创建块
eslint: [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations.html)

> 为什么? 语法声明在整个 `switch` 块中都是可见的，但是只有在赋值的时候才会被初始化，这种情况只有在 `case` 条件达到才会发生。 当多个 `case` 语句定义相同的东西是，这会导致问题问题。

```javascript
// bad
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {
      // ...
    }
    break;
  default:
    class C {}
}

// good
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {
      // ...
    }
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}
```

#### 15.6 三目表达式不应该嵌套，通常是单行表达式
eslint: [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary.html)

```javascript
// bad
const foo = maybe1 > maybe2
  ? "bar"
  : value1 > value2 ? "baz" : null;

// 分离为两个三目表达式
const maybeNull = value1 > value2 ? 'baz' : null;

// better
const foo = maybe1 > maybe2
  ? 'bar'
  : maybeNull;

// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

#### 15.7 避免不必要的三目表达式
eslint: [no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary.html)

```javascript
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

#### 15.8 使用该混合运算符时，使用括号括起来。 唯一例外的是标准算数运算符 (`+`, `-`, `*`, &`/`) 因为他们的优先级被广泛理解
eslint: [no-mixed-operators](https://eslint.org/docs/latest/rules/no-mixed-operators.html)

> 为什么? 这能提高可读性并且表明开发人员的意图。

```javascript
// bad
const foo = a && b < 0 || c > 0 || d + 1 === 0;

// bad
const bar = a ** b - 5 % d;

// bad
// 可能陷入一种 (a || b) && c 的思考
if (a || b && c) {
  return d;
}

// good
const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

// good
const bar = (a ** b) - (5 % d);

// good
if (a || (b && c)) {
  return d;
}

// good
const bar = a + b / c * d;
```

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
