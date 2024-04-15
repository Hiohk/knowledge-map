---
prev:
  text: "简介"
  link: "/frontend/javascript/index"

next:
  text: "数组、字符串和数字"
  link: "/frontend/javascript/basic02"
---

# 1. 数据类型

## 1.1 内置类型 :white_check_mark:

JavaScript 的七种内置类型：

- 空值（**null**）
- 未定义（**undefined**）
- 布尔值（**boolean**）
- 数字（**number**）
- 字符串（**string**）
- 对象（**object**）
- 符号（**symbol**，ES6 中新增）

其中，除对象外，其他统称为“基本数据类型”。对象（object）还有子类型：数组（**array**）和函数（**function**）, 我们又可以将 object、array、function 称为引用数据类型。

:::tip 基本数据类型和引用数据类型的区别是什么？

- 基本数据类型保存在栈里面, 可以直接访问它的值；
- 引用数据类型保存在堆里面, 栈里面保存的是地址, 通过栈里面的地址去访问堆里面的值。
  :::

下面介绍判断值的类型的方法：

在 JavaScript 中，比较常见的 4 个判断数据类型的运算符或方法是：`typeof`, `instanceof`, `Array.isArray()`, `Function.prototype.toString.call()`。

## 1.2 `typeof` 运算符 :white_check_mark:

用 `typeof` 运算符来查看值的类型，它返回的是类型的字符串值:

```javascript
typeof undefined === "undefined"; // true
typeof true === "boolean"; // true
typeof 42 === "number"; // true
typeof "42" === "string"; // true
typeof { name: "Tom" } === "object"; // true
// ES6中新加入的类型
typeof Symbol() === "symbol"; // true
```

特别地，`typeof null` 并不是 null:

```javascript
typeof null === "object"; // true
// 这个 bug 由来已久，在 JavaScript 中已经存在了将近二十年，
// 也许永远也不会修复，因为这牵涉到太多的 Web 系统，“修复”它会产生更多的
// bug，令许多系统无法正常工作。

typeof function a() {
  /* .. */
} === "function"; // true
typeof [1, 2, 3] === "object"; // true
```

那么我们在实际开发中该如何检测 null 值？（这是一个常见的基础面试题）：

```javascript
var a = null;
!a && typeof a === "object"; // true
```

## 1.3 `instanceof` 运算符 :white_check_mark:

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```javascript
// 定义构造函数
function C() {}
function D() {}

var o = new C();

o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype

o instanceof D; // false，因为 D.prototype 不在 o 的原型链上

o instanceof Object; // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
C.prototype instanceof Object; // true，同上

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false，C.prototype 指向了一个空对象，这个空对象不在 o 的原型链上。

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true 因为 C.prototype 现在在 o3 的原型链上
```

String 和 Date 对象同时也属于 Object 类型（他们是由 Object 类派生出来的）。

```javascript
var simpleStr = "This is a simple string";
var myString = new String();
var newStr = new String("String created with constructor");
var myDate = new Date();
var myObj = {};
var myNonObj = Object.create(null);

simpleStr instanceof String; // 返回 false，非对象实例，因此返回 false
myString instanceof String; // 返回 true
newStr instanceof String; // 返回 true
myString instanceof Object; // 返回 true

myObj instanceof Object; // 返回 true，尽管原型没有定义
({}) instanceof Object; // 返回 true，同上
myNonObj instanceof Object; // 返回 false，一种创建非 Object 实例的对象的方法

myString instanceof Date; //返回 false

myDate instanceof Date; // 返回 true
myDate instanceof Object; // 返回 true
myDate instanceof String; // 返回 false
```

::: tip `typeof` 与 `instanceof` 的区别

1. `typeof` 会返回一个变量的基本类型，`instanceof` 返回的是一个布尔值；

2. `instanceof` 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；

3. 而 `typeof` 也存在弊端，它虽然可以判断基础数据类型（null 除外），但是引用数据类型中，除了 `function` 类型以外，其他的也无法判断。
   :::

## 1.4 `Array.isArray()` 方法 :white_check_mark:

`Array.isArray(value)` 静态方法用于确定传递的值是否是一个数组。如果 value 是 Array，则为 true；否则为 false。如果 value 是 TypedArray (类数组) 实例，则总是返回 false。

```javascript
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray("[]"));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false

function foo() {
  console.log(Array.isArray(arguments));
}

foo([1, 2, 3]);
// Expected output: false
```

可以看到，上述两种方法都有弊端，并不能满足所有场景的需求。

## 1.5 `Function.prototype.toString.call()` :white_check_mark:

```javascript
Object.prototype.toString({}); // "[object Object]"
Object.prototype.toString.call({}); // 同上结果，加上call也ok
Object.prototype.toString.call(1); // "[object Number]"
Object.prototype.toString.call("1"); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(function () {}); // "[object Function]"
Object.prototype.toString.call(null); //"[object Null]"
Object.prototype.toString.call(undefined); //"[object Undefined]"
Object.prototype.toString.call(/123/g); //"[object RegExp]"
Object.prototype.toString.call(new Date()); //"[object Date]"
Object.prototype.toString.call([]); //"[object Array]"
Object.prototype.toString.call(document); //"[object HTMLDocument]"
Object.prototype.toString.call(window); //"[object Window]"
```

再通过 `Object.prototype.toString.call([]).slice(8,-1).toLowerCase()` 可以得到具体的类型。

## 1.6 值和类型

JavaScript 中的变量是没有类型的，只有值才有。变量可以随时持有任何类型的值。

```javascript
var a = 42;
typeof a; // "number"
a = true;
typeof a; // "boolean"

typeof typeof 42; // "string"
```

### undefined 和 undeclared

变量在未持有值的时候为 undefined。此时 typeof 返回 "undefined"：

```javascript
var a;
typeof a; // "undefined"
var b = 42;
var c;
// later
b = c;
typeof b; // "undefined"
typeof c; // "undefined"
```

注意，已在作用域中声明但还没有赋值的变量，是 **undefined** 的，还没有在作用域中声明过的变量，是 **undeclared（未声明）** 的。两者完全是不等同的。

```javascript
var a;
a; // undefined
b; // ReferenceError: b is not defined
```

更加值得注意的是：

```javascript
var a;
typeof a; // "undefined"
typeof b; // "undefined" 这里并没有报错，因为 typeof 有一个特殊的安全防范机制。
```

### typeof Undeclared

通过 `typeof` 的安全防范机制（阻止报错）来检查 undeclared（未声明） 变量。

```JavaScript
// 如 DEBUG 未声明，这样会抛出错误
if (DEBUG) {
 console.log( "Debugging is starting" );
}
// 这样是安全的
if (typeof DEBUG !== "undefined") {
 console.log( "Debugging is starting" );
}
```

<a-back-top />
