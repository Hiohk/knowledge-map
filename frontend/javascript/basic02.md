# 2. 数组、字符串和数字

## 2.1 数组

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

## 2.2 字符串
在 JavaScript 中，字符串和字符数组并不是一回事。

## 2.3 数字

## 2.4 总结
