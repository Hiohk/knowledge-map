---
prev:
  text: "原生函数"
  link: "/frontend/javascript/basic03"

next:
  text: "语法"
  link: "/frontend/javascript/basic05"
---

# 4. 强制类型转换

## 4.1 值类型转换

将值从一种类型转换为另一种类型通常称为类型转换（type casting），这是显式的情况；隐式的情况称为强制类型转换（coercion）。强制类型转换分为“**隐式强制类型转换**”（implicit coercion）和“**显式强制类型转换**”（explicit coercion）。

```javascript
var a = 42;
var b = a + ""; // 隐式强制类型转换
var c = String(a); // 显式强制类型转换
```

## 4.2 抽象值操作

这一节介绍字符串、数字和布尔值之间类型转换的基本规则。

### ToString

基本类型值的字符串化规则为： `null` 转换为 "null"， `undefined` 转换为 "undefined"， `true` 转换为 "true"，极小和极大的数字使用指数形式：

```javascript
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(true)); // "true"

// 1.07 连续乘以七个 1000
var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;
// 七个1000一共21位数字
console.log(a.toString()); // "1.07e+21"
console.log(String(a)); // "1.07e+21"
```

::: tip toString()：

1. **`Object.prototype.toString()`**:

toString() 返回一个表示该对象的字符串。该方法旨在重写（自定义）派生类对象的类型转换的逻辑。

```javascript
Object.prototype.toString.call(new Date()); // [object Date]
Object.prototype.toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
Object.prototype.toString.call(Math); // [object Math]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(null); // [object Null]
```

所有继承自 Object.prototype 的对象（即，除了 null-prototype 对象之外的对象）都继承 toString() 方法。当你创建一个自定义对象时，你可以重写 toString() 以调用自定义方法，以便将自定义对象转换为一个字符串。或者，你可以增加一个 @@toPrimitive 方法，该方法允许对转换过程有更多的控制，并且对于任意的类型转换，且总是优先于 valueOf 或 toString。

2. **`Array.prototype.toString()`**:

toString() 方法返回一个字符串，表示指定的数组及其元素。

```javascript
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
```

Array 对象覆盖了 Object 的 toString 方法。数组的 toString 方法实际上在内部调用了 join() 方法来拼接数组并返回一个包含所有数组元素的字符串，元素之间用逗号分隔。如果 join 方法不可用或者不是函数，则会使用 Object.prototype.toString 来代替，并返回 `[object Array]`(经验证，实际返回的是`[object Object]`)。

```javascript
const arr = [];
arr.join = 1; // 将 `join` 重新赋值为非函数的值
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 }));
// 1
console.log(Array.prototype.toString.call({ join: () => undefined }));
// undefined
console.log(Array.prototype.toString.call({ join: "not function" }));
// "[object Object]"
```

3. **`String.prototype.toString()`**:

String 的 toString() 方法返回该字符串的值。

```javascript
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"
```

String 对象重写了 Object 的 toString 方法；它不会继承 Object.prototype.toString()。对于 String 值，toString 方法返回字符串本身（如果它是原始值）或 String 对象封装的字符串。它的实现与 String.prototype.valueOf() 完全相同。

toString() 方法要求其 this 值为 String 原始值或封装对象。对于其他 this 值，它会抛出 TypeError 而不尝试将其转换为字符串值。

由于 String 没有 `[@@toPrimitive]()` 方法，当一个 String 对象在期望字符串的上下文中使用时（比如在模板字面量中），JavaScript 会自动调用 toString() 方法。然而，String 原始值不会使用 toString() 方法来进行字符串强制转换——因为它们已经是字符串，所以不会进行转换。

```javascript
String.prototype.toString = () => "已经被重写了";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "已经被重写了"
```

4. **`Number.prototype.toString()`**:

Number 值的 toString() 方法返回表示该数字值的字符串。

语法：`toString()` 和 `toString(radix)`;

radix[可选]: 一个整数，范围在 2 到 36 之间，用于指定表示数字值的基数。默认为 10。

RangeError: 如果 radix 小于 2 或大于 36，则抛出该异常。

```javascript
const count = 10;
console.log(count.toString()); // "10"

console.log((17).toString()); // "17"
console.log((17.2).toString()); // "17.2"

const x = 6;
console.log(x.toString(2)); // "110"
console.log((254).toString(16)); // "fe"
console.log((-10).toString(2)); // "-1010"
console.log((-0xff).toString(2)); // "-11111111"
```

Number 对象的重写了 Object 的 toString 方法；它不会继承 Object.prototype.toString()。对于 Number 值，toString 方法返回数字值指定基数的字符串表示。

因为 Number 没有 `[@@toPrimitive]()` 方法，当一个 Number 对象在一个期望字符串的上下文中使用时（比如在模板字符串中），JavaScript 会自动调用 toString() 方法。然而，Number 原始值不会使用 toString() 方法来进行字符串强制转换——相反，它们会直接使用与 toString() 初始实现的相同算法进行转换。

```javascript
Number.prototype.toString = () => "重写了";
console.log(`${1}`); // "1"
console.log(`${new Number(1)}`); // "重写了"
```

5. **`Date.prototype.toString()`**:

toString() 方法返回一个字符串，以本地的时区表示该 Date 对象。

```javascript
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toString());
// Expected output: "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
```

Date 对象覆盖了 Object 对象的 toString() 方法。Date.prototype.toString() 返回一个字符串，并以本地时区表示该 Date 对象，包含日期和时间——将 toDateString() 和 toTimeString() 通过一个空格拼接起来。

例如：“Thu Jan 01 1970 12:42:04 GMT+0800 (中国标准时间)”。

当 Date 被强制转换为字符串时，toString() 方法会被自动调用，例如：`const today = 'Today is ' + new Date()`。

6. **`BigInt.prototype.toString()`**:

BigInt 是一种内置对象，它提供了一种方法来表示大于 2^53 - 1 的整数。这原本是 Javascript 中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。可以用在一个整数字面量后面加 n 的方式定义一个 BigInt ，如：10n，或者调用函数 BigInt()（但不包含 new 运算符）并传递一个整数值或字符串值。

toString() 方法返回一个字符串，表示指定 BigInt 对象。后面的 "n" 不是字符串的一部分。

```javascript
17n.toString(); // '17'
66n.toString(2); // '1000010'
254n.toString(16); // 'fe'
-10n.toString(2); // -1010'
-0xffn.toString(2); // '-11111111'
```

:::

工具函数 `JSON.stringify(..)` 在将 JSON 对象序列化为字符串时也用到了 ToString。所以这里简要介绍下 `JSON.stringify()` 和 `JSON.parse()` 。

> 语法：
>
> ```javascript
>  JSON.stringify(value[, replacer[, space]]) >
> ```
>
> 参数:
>
> `value` : 将要序列化成 一个 JSON 字符串的值。
>
> `replacer` <Badge>可选</Badge>:
> 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。
>
> `space` <Badge>可选</Badge>:
> 指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为 10。该值若小于 1，则意味着没有空格；如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），该字符串将被作为空格；如果该参数没有提供（或者> 为 null），将没有空格。

对大多数简单值来说，JSON 字符串化和 toString() 的效果基本相同，只不过序列化的结果总是字符串：

```javascript
JSON.stringify(42); // "42"
JSON.stringify("42"); // ""42"" （含有双引号的字符串）
JSON.stringify(null); // "null"
JSON.stringify(true); // "true"
```

能够呈现为有效 JSON 格式的值可以使用 JSON.stringify(..) 字符串化， `undefined` 、 `function` 、 `symbol（ES6+` ）和包含循环引用（对象之间相互引用，形成一个无限循环）的对象都不符合 JSON 结构标准，支持 JSON 的语言无法处理它们。
JSON.stringify(..) 在对象中遇到 undefined、function 和 symbol 时会自动将其忽略，在数组中则会返回 null（以保证单元位置不变）。

```javascript
JSON.stringify(undefined); // undefined
JSON.stringify(function () {}); // undefined
JSON.stringify([1, undefined, function () {}, 4]); // "[1,null,null,4]"
JSON.stringify({
  a: 2,
  b: function () {},
}); // "{"a":2}"
```

如果对象中定义了 toJSON() 方法，JSON 字符串化时会首先调用该方法，然后用它的返回值来进行序列化。如果要对含有非法 JSON 值的对象做字符串化，或者对象中的某些值无法被序列化时，就
需要定义 toJSON() 方法来返回一个安全的 JSON 值。

```javascript
var o = {};
var a = {
  b: 42,
  c: o,
  d: function () {},
};
// 在a中创建一个循环引用
o.e = a;
// 循环引用在这里会产生错误
// JSON.stringify( a );
// 自定义的JSON序列化
a.toJSON = function () {
  // 序列化仅包含b
  return {
    b: this.b,
  };
};
JSON.stringify(a); // "{"b":42}"
```

可选参数 replacer 的用法：

```javascript
var a = {
  b: 42,
  c: "42",
  d: [1, 2, 3],
};
JSON.stringify(a, ["b", "c"]); // "{"b":42,"c":"42"}"
JSON.stringify(a, function (k, v) {
  if (k !== "c") return v;
});
// "{"b":42,"d":[1,2,3]}"
```

可选参数 space 的用法（用来指定输出的缩进格式）：

```javascript
var a = {
  b: 42,
  c: "42",
  d: [1, 2, 3],
};
JSON.stringify(a, null, 3);
// {
//     "b": 42,
//     "c": "42",
//     "d": [
//         1,
//         2,
//         3
//     ]
// }
```

### ToNumber

将非数字值当作数字，其中 true 转换为 1，false 转换为 0。undefined 转换为 NaN，null 转换为 0。对以 0 开头的十六进制数并不按十六进制处理（而是按十进制）。对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型
值，则再遵循以上规则将其强制转换为数字。

为了将值转换为相应的基本类型值，抽象操作 `ToPrimitive` 会首先（通过内部操作 DefaultValue）检查该值是否有 `valueOf()` 方法。如果有并且返回基本类型值，就使用该值进行强制类型转换。如果没有就使用 `toString()` 的返回值（如果存在）来进行强制类型转换。如果 `valueOf()` 和 `toString()` 均不返回基本类型值，会产生 `TypeError` 错误。

```javascript
var a = {
  valueOf: function () {
    return "42";
  },
};
var b = {
  toString: function () {
    return "42";
  },
};
var c = [4, 2];
c.toString = function () {
  return this.join(""); // "42"
};
Number(a); // 42
Number(b); // 42
Number(c); // 42
Number(""); // 0
Number([]); // 0
Number(["abc"]); // NaN
```

### ToBoolean

布尔强制类型转换结果为 false 的假值：

- **undefined**
- **null**
- **false**
- **+0、-0 和 NaN**
- **""**

所有的对象都是真值，即使是包装了假值的封装对象仍然为真值。

```javascript
var a = new Boolean(false);
var b = new Number(0);
var c = new String("");

var d = Boolean(a && b && c);
console.log(d); // true
console.log(a && b && c); // String { "" }
```

## 4.3 显式强制类型转换

## 4.4 隐式强制类型转换

## 4.5 宽松相等（==）和严格相等（===）

## 4.6 抽象关系比较

## 4.7 总结

<a-back-top />
