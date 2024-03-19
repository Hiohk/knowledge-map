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

1. `Object.prototype.toString()`:
2. `Array.prototype.toString()`:
3. `Date.prototype.toString()`:
4. `String.prototype.toString()`:
5. `Number.prototype.toString()`:
6. `BigInt.prototype.toString()`:
   :::

工具函数 `JSON.stringify(..)` 在将 JSON 对象序列化为字符串时也用到了 ToString。所以这里简要介绍下 `JSON.stringify()` 和 `JSON.parse()` 。

> 语法：
>
>  

```javascript
> JSON.stringify(value[, replacer[, space]]) >
```

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
JSON.stringify(function() {}); // undefined
JSON.stringify([1, undefined, function() {}, 4]); // "[1,null,null,4]"
JSON.stringify({
    a: 2,
    b: function() {}
}); // "{"a":2}"
```

如果对象中定义了 toJSON() 方法，JSON 字符串化时会首先调用该方法，然后用它的返回值来进行序列化。如果要对含有非法 JSON 值的对象做字符串化，或者对象中的某些值无法被序列化时，就
需要定义 toJSON() 方法来返回一个安全的 JSON 值。

```javascript
var o = {};
var a = {
    b: 42,
    c: o,
    d: function() {},
};
// 在a中创建一个循环引用
o.e = a;
// 循环引用在这里会产生错误
// JSON.stringify( a );
// 自定义的JSON序列化
a.toJSON = function() {
    // 序列化仅包含b
    return {
        b: this.b
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
JSON.stringify(a, function(k, v) {
    if (k !== "c") return v;
});
// "{"b":42,"d":[1,2,3]}"
```

可选参数 space 的用法（用来指定输出的缩进格式）：

```javascript
var a = {
    b: 42,
    c: "42",
    d: [1, 2, 3]
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

### ToBoolean

## 4.3 显式强制类型转换

## 4.4 隐式强制类型转换

## 4.5 宽松相等和严格相等

## 4.6 抽象关系比较

## 4.7 总结
