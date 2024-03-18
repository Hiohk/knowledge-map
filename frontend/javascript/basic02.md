# 2. 数组、字符串和数字

## 2.1 数组 :white_check_mark:

### 数组的定义

1. 和其他强类型语言不同，在 JavaScript 中，数组可以容纳任何类型的值；

```javascript
var a = [1, "2", [3]];
a.length; // 3
a[0] === 1; // true
a[2][0] === 3; // true
```

2. 对数组声明后即可向其中加入值，不需要预先设定大小；

```javascript
var a = [];
a.length; // 0
a[0] = 1;
a[1] = "2";
a[2] = [3];
a.length; // 3
```

3. 使用 delete 运算符可以将单元从数组中删除，但是请注意，单元删除后，数组的 length 属性并不会发生变化；

4. 数组通过数字进行索引，但有趣的是它们也是对象，所以也可以包含字符串键值和属性（但这些并不计算在数组长度内）；

```javascript
var a = [];
a[0] = 1;
a["foobar"] = 2;
a.length; // 1
a["foobar"]; // 2
a.foobar; // 2
```

5. 如果字符串键值能够被强制类型转换为十进制数字的话，它就会被当作数字索引来处理；

```javascript
var a = [];
a["13"] = 42;
a.length; // 14
```

### 类数组

一些 DOM 查询操作会返回 DOM 元素列表，它们并非真正意义上的数组，但十分类似。另一个例子是通过 arguments 对象（类数组）将函数的参数当作列表来访问（从 ES6 开始已废止）。

将类数组转化为数组：

```javascript
// 方法一：
var arr = Array.prototype.slice.call(arguments);
// slice() 返回参数列表（上例中是一个类数组）的一个数组复本

// 方法二
var arr = Array.from(arguments);
```

## 2.2 字符串 :white_check_mark:

在 JavaScript 中，字符串和字符数组并不是一回事。字符串和数组都有 `length` 属性以及 `indexOf()` 方法和 `concat()` 方法。

```javascript
var a = "foo";
var b = ["f", "o", "o"];

a.length; // 3
b.length; // 3

a.indexOf("o"); // 1
b.indexOf("o"); // 1

var c = a.concat("bar"); // "foobar"
var d = b.concat("b", "a", "r"); // ["f","o","o","b","a","r"]
```

但是并不意味这 a 和 b 都是“字符数组”，JavaScript 中字符串是不可变的，而数组是可变的。

```javascript
var a = "foo";
var b = ["f", "o", "o"];

a[1] = "a";
b[1] = "a";

console.log(a); // "foo"
console.log(b); // ["f", "a", "o"]
```

:::warning 思考题：你知道字符串和数组都有哪些共有的方法？
请总结你知道的字符串和数组共有的方法。
:::

许多数组函数用来处理字符串很方便。虽然字符串没有这些函数，但可以通过“借用”数组的非变更方法来处理字符串：

```javascript
var a = "foo";
a.join; // undefined
a.map; // undefined
var c = Array.prototype.join.call(a, "-");
var d = Array.prototype.map
  .call(a, function (v) {
    return v.toUpperCase() + ".";
  })
  .join("");
c; // "f-o-o"
d; // "F.O.O."
```

这里引申一个 JavaScript 面试常见问题--**字符串反转**。数组有一个字符串没有的可变更成员函数 `reverse()`：

```javascript
var a = "foo";
var b = ["f", "o", "o"];
console.log(a.reverse); // undefined
b.reverse();
console.log(b); // ["o", "o", "f"]

// 可惜我们无法“借用”数组的可变更成员函数，因为字符串是不可变的：
Array.prototype.reverse.call(a);
// 返回值仍然是字符串"foo"的一个封装对象
```

再来说如何对一个简单的字符串取反, 对于包含复杂字符（Unicode，如星号、多字节字符等）的字符串并不适用）：

```javascript
var a = "foo";
var c = a
  // 将a的值转换为字符数组
  .split("")
  // 将数组中的字符进行倒转
  .reverse()
  // 将数组中的字符拼接回字符串
  .join("");
console.log(c); // "oof"
```

如果需要处理包含复杂字符的字符串，这时则需要功能更加完备、能够处理 Unicode 的工具库。可以参考 Mathias Bynen 的 [Esrever](https://github.com/mathiasbynents/esrever)。

## 2.3 数字 :white_check_mark:

JavaScript 只有一种数值类型：number（数字），包括“整数”和带小数的十进制数。

### 数字的语法

JavaScript 中的数字常量一般用十进制表示。例如：

```javascript
var a = 42;
var b = 42.3;

// 数字前面的 0 可以省略：
var a = 0.42;
var b = 0.42;

// 小数点后小数部分最后面的 0 也可以省略：
var a = 42.0;
var b = 42;

// 默认情况下大部分数字都以十进制显示，小数部分最后面的 0 被省略，如：
var a = 42.3;
var b = 42.0;
a; // 42.3
b; // 42
```

特别大和特别小的数字默认用指数格式显示，与 `toExponential()` 函数的输出结果相同:

```javascript
var a = 5e10;
a; // 50000000000
a.toExponential(); // "5e+10"
var b = a * a;
b; // 2.5e+21
var c = 1 / a;
c; // 2e-11
```

由于数字值可以使用 Number 对象进行封装，因此数字值可以调用 `Number.prototype` 中的方法。例如，`tofixed(..)` 方法可指定小数部分的显示位数：

```javascript
var a = 42.59;
a.toFixed(0); // "43"
a.toFixed(1); // "42.6"
a.toFixed(2); // "42.59"
a.toFixed(3); // "42.590"
a.toFixed(4); // "42.5900"
```

`toPrecision(..)` 方法用来指定有效数位的显示位数：

```javascript
var a = 42.59;
a.toPrecision(1); // "4e+1"
a.toPrecision(2); // "43"
a.toPrecision(3); // "42.6"
a.toPrecision(4); // "42.59"
a.toPrecision(5); // "42.590"
a.toPrecision(6); // "42.5900"
```

上面的方法不仅适用于数字变量，也适用于数字常量。不过对于 . 运算符需要给予特别注意，因为它是一个有效的数字字符，会被优先识别为数字常量的一部分，然后才是对象属性访问运算符。

```javascript
// 无效语法：
42.toFixed( 3 ); // SyntaxError
// 下面的语法都有效：
(42).toFixed( 3 ); // "42.000"
0.42.toFixed( 3 ); // "0.420"
42..toFixed( 3 ); // "42.000"

// 下面的语法也是有效的（请注意其中的空格）：
42 .toFixed(3); // "42.000"
```

还可以用指数形式来表示较大的数字，如：

```javascript
var onethousand = 1e3; // 即 1 * 10^3
var onemilliononehundredthousand = 1.1e6; // 即 1.1 * 10^6
```

数字常量还可以用其他格式来表示，如二进制、八进制和十六进制。

```javascript
0xf3; // 243的十六进制
0xf3; // 同上
0363; // 243的八进制

// ES6 支持以下新格式：
0o363; // 243的八进制
0o363; // 同上
0b11110011; // 243的二进制
0b11110011; // 同上
```

### 较小的数字

```javascript
0.1 + 0.2 === 0.3; // false
```

简单来说，二进制浮点数中的 0.1 和 0.2 并不是十分精确，它们相加的结果并非刚好等于 0.3，而是一个比较接近的数字 0.30000000000000004，所以条件判断结果为 false。

那么应该怎样来判断 0.1 + 0.2 和 0.3 是否相等呢？最常见的方法是设置一个误差范围值，通常称为“机器精度”（machine epsilon），对 JavaScript 的数字来说，这个值通常是 2^-52 (2.220446049250313e-16)。从 ES6 开始，该值定义在 Number.EPSILON 中。

```javascript
// ES6 之前的版本写 polyfill：
if (!Number.EPSILON) {
  Number.EPSILON = Math.pow(2, -52);
}

// ES6:
function numbersCloseEnoughToEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON;
}
var a = 0.1 + 0.2;
var b = 0.3;
numbersCloseEnoughToEqual(a, b); // true
numbersCloseEnoughToEqual(0.0000001, 0.0000002); // false
```

> [**Polyfill**](https://developer.mozilla.org/zh-CN/docs/Glossary/Polyfill) 是一块代码（通常是 Web 上的 JavaScript），用来为旧浏览器提供它没有原生支持的较新的功能。
>
> 比如说 polyfill 可以让 IE7 使用 Silverlight 插件来模拟 HTML Canvas 元素的功能，或模拟 CSS 实现 rem 单位的支持，或 text-shadow，或其他任何你想要的功能。

此外，能够呈现的最大浮点数大约是 1.798e+308（这是一个相当大的数字），它定义在 `Number.MAX_VALUE` 中。最小浮点数定义在 `Number.MIN_VALUE` 中，大约是 5e-324，它不是负数，但无限接近于 0 ！

### 整数的安全范围

数字的呈现方式决定了“整数”的安全值范围远远小于 Number.MAX_VALUE。
能够被“安全”呈现的最大整数是 2^53 - 1，即 9007199254740991，在 ES6 中被定义为
Number.MAX_SAFE_INTEGER。最小整数是 -9007199254740991，在 ES6 中被定义为 Number.MIN_SAFE_INTEGER。

有时 JavaScript 程序需要处理一些比较大的数字，如数据库中的 64 位 ID 等。由于 JavaScript 的数字类型无法精确呈现 64 位数值，所以必须将它们保存（转换）为字符串。

Number 的常见属性：

| 属性                     | 描述                                                        | 值                                           |
| ------------------------ | ----------------------------------------------------------- | -------------------------------------------- |
| Number.MAX_VALUE         | 静态数据属性表示在 JavaScript 中可表示的最大数值            | 1.7976931348623157E+308(2^1024 - 1)          |
| Number.MIN_VALUE         | 静态数据属性表示在 JavaScript 中可表示的最小正数值          | 5E-324(2-1074)                               |
| Number.MAX_SAFE_INTEGER  | 静态数据属性表示在 JavaScript 中最大的安全整数（2^53 – 1）  | 9007199254740991                             |
| Number.MIN_SAFE_INTEGER  | 静态数据属性代表在 JavaScript 中最小的安全整数（-2^53 – 1） | -9007199254740991                            |
| Number.NEGATIVE_INFINITY | 静态数据属性表示负无穷值                                    | 与全局属性 Infinity 的负值相同               |
| Number.POSITIVE_INFINITY | 静态数据属性表示正无穷大值                                  | 与全局属性 Infinity 的值相同                 |
| Number.NaN               | 静态数据属性表示非数字值，等同于 NaN。                      | 数字值 NaN                                   |
| Number.EPSILON           | 静态数据属性表示 1 与大于 1 的最小浮点数之间的差值          | 2.2204460492503130808472633361816E-16(2^-52) |

### 整数检测

要检测一个值是否是整数，可以使用 ES6 中的 `Number.isInteger(..)` 方法：

```javascript
Number.isInteger(42); // true
Number.isInteger(42.0); // true
Number.isInteger(42.3); // false
```

也可以为 ES6 之前的版本 polyfill `Number.isInteger(..)` 方法：

```javascript
if (!Number.isInteger) {
  Number.isInteger = function (num) {
    return typeof num == "number" && num % 1 == 0;
  };
}
```

要检测一个值是否是安全的整数，可以使用 ES6 中的 `Number.isSafeInteger(..)` 方法：

```javascript
Number.isSafeInteger(Number.MAX_SAFE_INTEGER); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
```

可以为 ES6 之前的版本 polyfill `Number.isSafeInteger(..)` 方法：

```javascript
if (!Number.isSafeInteger) {
  Number.isSafeInteger = function (num) {
    return Number.isInteger(num) && Math.abs(num) <= Number.MAX_SAFE_INTEGER;
  };
}
```

### 32 位有符号整数

虽然整数最大能够达到 53 位，但是有些数字操作（如数位操作）只适用于 32 位数字，所以这些操作中数字的安全范围就要小很多，变成从 Math.pow(-2,31)（-2147483648，约－21 亿）到 Math.pow(2,31) - 1（2147483647，约 21 亿）。

`a | 0` 可以将变量 a 中的数值转换为 32 位有符号整数，因为数位运算符 | 只适用于 32 位整数（它只关心 32 位以内的值，其他的数位将被忽略）。因此与 0 进行操作即可截取 a 中的 32 位数位。

## 2.4 特殊数值 :white_check_mark:

JavaScript 数据类型中有几个特殊的值需要开发人员特别注意和小心使用。

### 不是值的值

undefined 类型只有一个值，即 `undefined`。null 类型也只有一个值，即 `null`。它们的名称既是类型也是值。

undefined 和 null 常被用来表示“空的”值或“不是值”的值。二者之间有一些细微的差别。例如：

- `null` 指空值（empty value）
- `undefined` 指没有值（missing value）

或者：

- `undefined` 指从未赋值
- `null` 指曾赋过值，但是目前没有值

null 是一个特殊关键字，不是标识符，我们不能将其当作变量来使用和赋值。然而 undefined 却是一个标识符，可以被当作变量来使用和赋值。

### undefined

在非严格模式下，我们可以为全局标识符 undefined 赋值（这样的设计实在是欠考虑！），在非严格和严格两种模式下，我们可以声明一个名为 undefined 的局部变量。再次强调最好不要这样做！永远不要重新定义 undefined。

```javascript
function foo() {
  undefined = 2; // 非常糟糕的做法！
}
foo();
function foo() {
  "use strict";
  undefined = 2; // TypeError!
}
foo();

function foo() {
  "use strict";
  var undefined = 2;
  console.log(undefined); // 2
}
foo();
```

通过 **void** 运算符即可得到 undefined，void 并不改变表达式的结果，只是让表达式不返回值。

```javascript
function doSomething() {
  // 注： APP.ready 由程序自己定义
  if (!APP.ready) {
    // 稍后再试
    return void setTimeout(doSomething, 100);
  }
  var result;
  // 其他
  return result;
}
// 现在可以了吗？
if (doSomething()) {
  // 立即执行下一个任务
}
```

这里 setTimeout(..) 函数返回一个数值（计时器间隔的唯一标识符，用来取消计时），但是为了确保 if 语句不产生误报（false positive），我们要 void 掉它。

### 特殊的数字

全局属性 NaN 是一个表示非数字（not a number）的值。NaN 是全局对象的一个属性。换句话说，它是全局作用域中的一个变量。NaN 的初始值不是数字——与 Number.NaN 的值相同。在现代浏览器中，NaN 是一个不可配置、不可写的属性。即使不是这样，也要避免重写它。在程序中很少使用 NaN。

有五种不同类型的操作返回 NaN：

- 失败的数字转换（例如，显式转换，如 `parseInt("abc")`、`Number(undefined)`，或隐式转换，如 `Math.abs(undefined)）`;

- 计算结果不是实数的数学运算（例如，`Math.sqrt(-1)`）;

- 不定式（例如，`0 * Infinity`、`1 ** Infinity`、`Infinity / Infinity`、`Infinity - Infinity`）;

- 一个操作数被强制转换为 `NaN` 的方法或表达式（例如，`7 ** NaN`、`7 * "abc"`）——这意味着 `NaN` 具有传染性;

- 将无效值表示为数字的其他情况（例如，`new Date("blabla").getTime()`、`"".charCodeAt(1)）`。

```javascript
var a = 2 / "foo"; // NaN
typeof a === "number"; // true

var a = 2 / "foo";
a == NaN; // false
a === NaN; // false
```

NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN != NaN 为 true，很奇怪吧？那应该怎样来判断它呢？

```javascript
var a = 2 / "foo";
isNaN(a); // true
```

isNaN(..) 有一个严重的缺陷，它的检查方式过于死板，就是“检查参数是否不是 NaN，也不是数字”。但是这样做的结果并不太准确：

```javascript
var a = 2 / "foo";
var b = "foo";
a; // NaN
b;
("foo");
window.isNaN(a); // true
window.isNaN(b); // true
```

ES6 之前的浏览器的 polyfill:

```javascript
if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return typeof n === "number" && window.isNaN(n);
  };
}
var a = 2 / "foo";
var b = "foo";
Number.isNaN(a); // true
Number.isNaN(b); // false——好！
```

实际上还有一个更简单的方法，即利用 NaN 不等于自身这个特点。NaN 是 JavaScript 中唯一一个不等于自身的值。

### 特殊等式

## 2.5 值和引用 :white_check_mark:

## 2.6 总结

这一章是学习者必须掌握的 JavaScript 基础知识。
