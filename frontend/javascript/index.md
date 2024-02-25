# JavaScript 知识

JavaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多非浏览器环境中，例如 Node.js、Apache CouchDB、Adobe Acrobat 等。进一步说，JavaScript 是一种基于原型、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

# 1. 作用域

## 1.1 什么是作用域
什么是作用域...

## 1.2 词法作用域
词法作用域...

## 1.3 函数作用域
数作用域...

## 1.4 块作用域
块作用域...

# 2. 声明提升

## 2.1 变量声明提升
变量声明提升...

## 2.2 函数声明提升
函数声明提升...

# 3. 闭包

## 3.1 前言

先来看下这段代码的执行结果：

```javascript
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}
```

上述代码的执行结果为：每间隔 1s 打印输出 6（共输出 5 个 6）。这里请思考两个问题：

> 1.为什么输出的结果不是 **_1 2 3 4 5_**，而是 **_6 6 6 6 6_** ？
>
> 2.为什么是每间隔 1s 输出，而不是间隔 **_1s, 2s, 3s, 4s, 5s_** 输出 ？

让我们来解析这段代码：

> 1.**for** 循环从 i 的值为 1 开始，每次递增 1，直到 i 的值为 5。
>
> 2.在每次循环中，**setTimeout** 被调用，其中包含一个匿名函数 `function timer()`，这个函数会在 i \* 1000 毫秒之后执行。
>
> 3.由于 **JavaScript** 中的事件循环机制，**setTimeout** 并不会阻塞代码的执行。它将定时器事件推送到事件队列，而不是立即执行。
>
> 4.当 **setTimeout** 中的函数被执行时，它尝试访问变量 i。由于 **JavaScript** 中的作用域是函数级别的，这里的 i 实际上引用的是外部函数中的 i，而不是 **setTimeout** 内部的 i。
>
> 5.当定时器事件被触发时，for 循环已经完成，i 的值为 6。

因此，当 `console.log(i)` 执行时，它输出的是最终循环结束时的 i 值，即 6。

尽管看起来 **setTimeout** 中设置的延迟是不同的，但是实际上，由于 **JavaScript** 的事件循环机制，这些定时器并不是同时启动的，而是分别在各自的时间点被推送到事件队列中。

在你的代码中，由于 **for** 循环中的 **setTimeout** 会在每次迭代中设置一个定时器，这些定时器将按照它们被创建的顺序依次进入事件队列。然而，由于事件队列的工作方式，即使某个定时器的延迟时间到了，也必须等到当前执行栈为空时才能执行。

因此，尽管看起来每个定时器之间的延迟时间是不同的，但它们会依次在每个 1s 的间隔内执行，而不是在 6s 的间隔内。

为了修复这个问题，可以使用**闭包**来创建一个新的作用域，以保留每次循环中的 i 值。例如：

`example 1`：

```javascript
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

// 1 2 3 4 5
```

`example 2`：

```javascript
for (var i = 1; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })();
}

// 1 2 3 4 5
```

`example 3`：

```javascript
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

// 1 2 3 4 5
```

请思考为什么`example 2`是满足要求的执行结果，而下面的代码的输出是不满足条件的：

```javascript
for (var i = 1; i <= 5; i++) {
  (function () {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  })();
}

// 6 6 6 6 6
```

:::tip **立即执行函数表达式**
每个延迟函数会将 IIFE（立即执行函数表达式，**I**mmediately **I**nvoked **F**unction **E**xpression）在每次迭代中创建的作用域封闭起来。
如果作用域是空的，那么仅仅将它们进行封闭是不够的。这里的 IIFE 只是一个什么都没有的空作用域。
:::

到这里，你也许还不了解什么是闭包，也许对闭包理解的还不够深刻，那么接下来我们将进一步学习闭包。

## 3.2 什么是闭包

**闭包**（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。

### 函数中的闭包

```javascript
function foo() {
  var a = 2;
  function baz() {
    console.log(a); // 2
  }
  bar(baz);
}
function bar(fn) {
  fn(); // 这就是闭包！
}
```

```javascript
var fn;
function foo() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  fn = baz; // 将baz分配给全局变量
}
function bar() {
  fn(); // 这就是闭包！
}
foo();
bar(); // 2
```

### 循环中的闭包

```javascript
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

// 1 2 3 4 5
```

### 块作用域中的闭包

```javascript
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

// 1 2 3 4 5
```

### 模块中的闭包

```javascript
function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];
  function doSomething() {
    console.log(something);
  }
  function doAnother() {
    console.log(another.join(" ! "));
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
}
var foo = CoolModule();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```

这个模式在 `JavaScript` 中被称为**模块(Module)**。正如在这段代码中所看到的，这里并没有明显的闭包，只有两个私有数据变量 `something`
和 `another`，以及 `doSomething()` 和 `doAnother()` 两个内部函数，它们的词法作用域（而这就是闭包）也就是 `foo()` 的内部作用域。

```javascript
var foo = (function CoolModule(id) {
  function change() {
    // 修改公共 API
    publicAPI.identify = identify2;
  }
  function identify1() {
    console.log(id);
  }
  function identify2() {
    console.log(id.toUpperCase());
  }
  var publicAPI = {
    change: change,
    identify: identify1,
  };
  return publicAPI;
})("foo module");
foo.identify(); // foo module
foo.change();
foo.identify(); // FOO MODULE
```

模块模式需要具备两个必要条件:

1. 必须有外部的封闭函数，该函数必须至少被调用一次（每次调用都会创建一个新的模块实例）。
2. 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态。

接下来请看一个模块中定义封装进 API 的例子：

```javascript
var MyModules = (function Manager() {
  var modules = {};
  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply(impl, deps);
  }
  function get(name) {
    return modules[name];
  }
  return {
    define: define,
    get: get,
  };
})();
MyModules.define("bar", [], function () {
  function hello(who) {
    return "Let me introduce: " + who;
  }
  return {
    hello: hello,
  };
});
MyModules.define("foo", ["bar"], function (bar) {
  var hungry = "hippo";
  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }
  return {
    awesome: awesome,
  };
});
var bar = MyModules.get("bar");
var foo = MyModules.get("foo");
console.log(bar.hello("hippo")); // Let me introduce: hippo
foo.awesome(); // LET ME INTRODUCE: HIPPO
```

> 1.请问这段代码实现了什么功能？
>
> 2.`modules[name] = impl.apply(impl, deps);`有什么作用？


## 3.3 闭包的作用

- **避免全局变量的污染**：通过将变量封装在函数内部，闭包可以防止这些变量被外部访问，从而避免了全局命名冲突。
- **数据封装和私有变量**：闭包可以创建私有变量，只能通过特定的公开方法进行访问和修改。这是模块模式的基础。
- **实现回调函数和高阶函数**：闭包常常被用来作为回调函数，因为它们可以记住自己的词法环境，包括 this 和外部变量。

```javascript
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("outerVariable:", outerVariable);
    console.log("innerVariable:", innerVariable);
  };
}

const newFunction = outerFunction("I am from outer function!");
newFunction("I am from inner function!");

// outerVariable:I am from outer function!
// innerVariable:I am from inner function!
```

在这个例子中，`outerFunction` 是一个外部函数，它接受一个参数 `outerVariable`。这个函数返回了另一个函数 `innerFunction`，这个函数可以接受一个参数 `innerVariable`。
当 `innerFunction` 被调用时，它可以访问 `outerFunction` 的作用域，因此可以打印出 `outerVariable` 的值。这就是**闭包的作用：它使得内部函数可以访问其外部函数的词法环境**。

注意，即使 `outerFunction` 的执行上下文在其返回后被销毁，`innerFunction` 仍然可以访问 `outerVariable`，因为 `innerFunction` 的词法环境引用了 `outerVariable`。这就是闭包如何记住并访问其外部环境的。

## 3.4 闭包的优缺点

闭包的优点主要包括：

- **数据封装和私有变量**：闭包可以创建私有变量和私有方法，只能通过特定的公开方法进行访问和修改。这是模块模式的基础，有助于实现封装和信息的隐藏，提高了代码的安全性和可靠性。
- **避免全局变量的污染**：通过将变量封装在函数内部，闭包可以防止这些变量被外部访问，从而避免了全局命名冲突，降低了代码的耦合度。
- **实现回调函数和高阶函数**：闭包常常被用来作为回调函数，因为它们可以记住自己的词法环境，包括 this 和外部变量。这使得闭包在异步编程、事件处理等方面有着广泛的应用。
- **缓存**：闭包可以保留函数执行过程中的一些状态，使得在多次调用时能够共享这些状态，从而提高性能。

然而，闭包也有一些缺点：

- **内存占用**：闭包可能会占用较多的内存空间，因为它需要保存函数及其相关的引用环境。如果闭包过于复杂或引用了大量的变量，可能会导致内存占用过高。
- **性能影响**：由于闭包需要在函数调用时访问外部环境的变量，它的执行速度可能相对较慢。每次调用闭包都需要查找和访问相关的引用环境，这可能对性能产生一定的影响。
- **难以理解和维护**：闭包的使用可能会增加代码的复杂性，特别是在多层嵌套的情况下。当闭包与外部环境中的变量交互时，代码的行为可能变得难以预测和理解，从而增加了代码的维护难度。

因此，在使用闭包时需要权衡其优缺点，并根据具体的应用场景和需求来决定是否使用闭包。同时，也需要注意避免过度使用闭包，以免导致内存占用过高和性能下降等问题。

## 3.5 总结

闭包的总结......

# 4. JavaScript中的this
**this** 关键字是 `JavaScript` 中最复杂的机制之一。它是一个很特别的关键字，被自动定义在所有函数的作用域中。
但是即使是非常有经验的`JavaScript` 开发者也很难说清它到底指向什么。

任何足够先进的技术都和魔法无异。    ——Arthur C. Clarke
## 4.1 关于this
this到底指向什么？
> 1.函数在调用时，JavaScript会<span style="color: red">默认给this绑定一个值</span>；
> 
> 2.this的<span style="color: red">绑定和定义的位置（编写的位置）</span>没有关系；
> 
> 3.this的<span style="color: red">绑定和调用以及调用的位置有关系</span>；
> 
> 4.this是<span style="color: red">在运行时被绑定</span>的；

## 4.2 this绑定规则
### 默认绑定
独立函数调用的时候，this会采用默认绑定的方法；独立函数调用可以裂解为函数没有绑定到某个对象上进行调用。例如：

`example 1`普通的函数被独立的调用:
``` javascript
function foo() {
  console.log(this); // window
  console.log( this.a ); // 2
}

var a = 2;
foo();
```

`example 2`函数定义在对象中，但是独立调用:
``` javascript
var obj = {
  name: "Tom",
  bar: function () {
    console.log("bar:",this);
  }
};

obj.bar(); // obj对象
var baz = obj.bar;
baz(); // window
```

`example 3`高阶函数:
``` javascript
var obj = {
  name: "Tom",
  bar: function () {
    console.log("bar:",this);
  }
};

function test(fn) {
  fn();
}
test(obj.bar); // window
```

严格模式（"use strict";）下，独立调用的函数中的this指向的是undefined。
### 隐式绑定
``` javascript
function foo() {
  console.log( this.a );
}
var obj = {
  a: 2,
  foo: foo
};
obj.foo(); // 2
```
> 隐式绑定有一个前提条件：
> 
> 必须在调用的对象内部有一个对函数的引用（比如一个属性）；
> 
> 如果没有这样的引用，在进行调用时，会报找不到该函数的错误；
> 
> 正是通过这个引用，间接的将this绑定到了这个对象上；

如果不希望在对象内部包含这个函数的引用，同时又希望在这个对象你上进行强制调用，那么可以使用`call`和`apply`方法来显示绑定。
### 显式绑定
``` javascript
var obj = {
  a: 2
};

function foo() {
  console.log(this.a); // 2 
}

foo.call(obj); // 或者foo.apply(obj);
obj.foo();

```

:::tip **bind()、call()、apply()的区别是什么？**

`bind()`、`call()`和`apply()`都是JavaScript中用于改变函数执行上下文（即this指向）的方法。它们的主要区别在于执行方式、传参方式以及对this的修改方式。

- **执行方式**：`call()`和`apply()`在改变后页面加载之后就立即执行，是同步代码。而`bind()`是异步代码，改变后不会立即执行，而是返回一个新的函数。这意味着你可以稍后再调用这个新函数，而this的值已经被绑定到了指定的对象。

- **传参方式**：`call()`和`bind()`传参是一个一个逐一传入，不能使用剩余参数的方式传参。而`apply()`可以使用数组的方式传入参数，只要是数组方式就可以使用剩余参数的方式传入。

- **修改this的性质**：`call()`和`apply()`只是临时修改一次this的指向，当再次调用原函数的时候，this的指向还是原来的指向。而`bind()`是永久修改函数this指向，但是它修改的不是原来的函数，而是返回一个新的函数，此函数的this永远被改变，绑定后就修改不了。

此外，还有一个值得注意的区别是，当`bind()`返回的函数使用new作为构造函数时，绑定的this值会失效，this指向实例对象，但传入的参数依然生效（new调用的优先级高于bind调用）。

使用bind方法会创建一个新的绑定函数（bound function, BF），绑定函数是一个exotic function object(怪异函数对象，ECMAScript2015中的术语)。
:::

### new绑定
``` javascript
function foo() {
  console.log( this); // foo函数对象（包含name属性）
  this.name = "Tom";
}

new foo();
// new一个对象的过程：
// 1. 创建新的对象；
// 2. 将this指向这个空对象；
// 3. 执行函数体中的代码；
// 4. 没有显示返回非空对象时，默认返回这个对象；
```
### 内置函数中的this

- 定时器：
``` javascript
setTimeout(function() {
  console.log("定时器函数：", this); // window
}, 1000);
```
- 按钮的点击监听：
``` javascript
<button>按钮</button>

var btnEl = document.querySelector("button");
btnEl.onclick = function() {
  // this为btnEl指向的DOM对象（<button>按钮</button>）
  console.log("btn的点击：", this); 
};
```

- forEach函数：
``` javascript
var names = ["Tom","Jack","Alice"];
names.forEach(function(item) {
  console.log("forEach函数:", this); // window
}); 

names.forEach(function(item) {
  console.log("forEach函数:", this); // Joyce
}, "Joyce"); 
```

## 4.3 this绑定规则优先级

1. 默认规则的优先级最低；
2. 显式绑定优先级高于隐式绑定；
3. new绑定优先级高于隐式绑定；
4. new绑定优先级高于bind：
   - new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高；
   - new绑定可以和bind一起使用，new绑定优先级更高；
5. bind优先级高于apply和call:
``` javascript
function foo() {
  console.log("foo:", this); // aaa
}
var bindFn = foo.bind("aaa");
bindFn.call("bbb");
```

:::warning **this绑定的特殊情况**
1. 如果在显示绑定中，传入null或者undefined，那么这个显示绑定会被忽略，使用默认规则：
``` javascript
function foo() {
  console.log(this);
}

foo.apply("aaa"); // aaa
foo.apply(null); // window
foo.apply(undefined); // window

// 严格模式下：
foo.apply("aaa"); // aaa
foo.apply(null); // null
foo.apply(undefined); // undefined
```

2. 间接函数引用：创建一个函数的间接引用，这种情况使用默认绑定规则。
`(obj2.foo = obj1.foo)();`结果为window。
``` javascript
var obj1 = {
  name: "Tom",
  foo: function() {
    console.log("foo:", this);
  }
};

var obj2 = {
  name: "Alice"
};

obj2.foo = obj1.foo();
obj2.foo(); // obj2对象

obj1.foo(); // obj1对象
(obj2.foo = obj1.foo)(); // window
```

:::

## 4.4 箭头函数
箭头函数（arrow function）是ES6之后增加的一种编写函数 的方法。很大程度上，箭头函数实例化的函数对象与正式的函数表达式创建的函数对象行为是相同的。任何可以使用函数表达式的地方，都可以使用箭头函数。

### 箭头函数的写法：
``` javascript
// 多个参数：
let arrowSum = (a,b) => {
  return a + b;
};

let arrowSum = (a,b) => a + b;

// 如果返回值为一个对象，需要加上（）
let fn = () => () => ({name: "Tom"});

// 只有一个参数：
let double = (x) => {
  return 2 * x;
}

let triple = x => {
  return 3 * x;
}

let multiply = x => 4 * x;
```

箭头函数与普通函数的区别：

> 1.箭头函数不能使用`arguments`、`super`、`new.target`；
>
> 2.箭头函数也不能用作构造函数(不能和new一起来使用，会抛出错误)；
>
> 3.箭头函数中没有this；
>
> 4.箭头函数也没有`prototype`属性。
## 4.5 总结
this总结。。。


# 5. 对象原型


## 5.1 对象


## 5.2 原型


## 5.3 行为委托


## 5.4 总结