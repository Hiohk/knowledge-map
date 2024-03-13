# JavaScript 知识

**符号说明**

- :white_check_mark: 需要学习者**掌握**的知识点；
- :heart: 高级开发者需要**重点掌握**的知识点；
- :rocket: 需要学习者**理解**的知识点；
- :star: 需要学习者**了解**的知识点；
- :x: 拓展知识点，可以不用学习；

# 1. 作用域

## 1.1 什么是作用域

首先，你需要知道执行上下文一词，每个执行上下文都有一个关联的**变量对象**（variable object），而这个执行上下文中定义的所有变量和函数都存在于这个对象上。**全局上下文**是最外层的上下文。根据 `ECMAScript` 实现的宿主环境，表示全局上下文的对象可能不一样，例如，在浏览器环境中，全局上下文就是我们常说的 `window` 对象，因此所有通过 `var` 定义的全局变量和函数都会成为 `window` 对象的属性和方法。

::: tip 补充知识
在 `ECMAScript`（也被称为 ES6 或更新的版本）中，全局对象在不同的宿主环境中确实会有所不同。在浏览器环境中，全局对象通常是 window 对象。除了浏览器环境，还有其他几种常见的宿主环境，它们都有自己的全局对象：

1. **Node.js 环境：在 Node.js 中，全局对象是 `global`。在 Node.js 中，你可以通过 `global` 访问大多数全局变量和函数，比如 `console.log` 或 `setTimeout`**。
2. **Web Worker 环境**：Web Workers 是运行在后台的 JavaScript 线程，它们不共享主线程的任何窗口或文档对象。在 Web Worker 中，全局对象是 `self`。
3. **浏览器扩展或插件**：某些浏览器扩展或插件可能使用它们自己的全局对象。这取决于扩展或插件的具体实现。
4. **服务器端渲染 (SSR) 环境**：在服务器端渲染环境中，如 Next.js 或 Nuxt.js，全局对象可能是一个特殊的服务器上下文对象，用于管理服务器端的请求和响应。
5. **其他 JavaScript 运行时**：除了 Node.js 和浏览器，还有许多其他的 JavaScript 运行时环境，如 Deno、QuickJS、Duktape 等。这些环境通常也有自己的全局对象。

需要注意的是，虽然全局对象在不同的宿主环境中可能不同，但 `ECMAScript` 规范定义了一些全局属性和方法，这些属性和方法应该在所有宿主环境中都是可用的，例如 Math、JSON、parseInt 等。然而，具体的实现和可用性可能因环境而异。
:::

**作用域**（Scope）是当前的执行上下文，值和表达式在其中“可见”或可被访问。如果一个变量或表达式不在当前的作用域中，那么它是不可用的。作用域也可以堆叠成层次结构，子作用域可以访问父作用域，反过来则不行。

JavaScript 的作用域分以下三种：

- **全局作用域**：脚本模式运行所有代码的默认作用域；
- **模块作用域**：模块模式中运行代码的作用域；
- **函数作用域**：由函数创建的作用域；

此外，用 `let` 或 `const` 声明的变量属于额外的作用域：

- **块级作用域**：用一对花括号（一个代码块）创建出来的作用域。

上下文中的代码在执行的时候，会创建变量对象的一个**作用域链**（scope chain）。这个作用域链决定了各级上下文中的代码在访问变量和函数时的顺序。

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

# 4. JavaScript 中的 this

**this** 关键字是 `JavaScript` 中最复杂的机制之一。它是一个很特别的关键字，被自动定义在所有函数的作用域中。
但是即使是非常有经验的`JavaScript` 开发者也很难说清它到底指向什么。

任何足够先进的技术都和魔法无异。 ——Arthur C. Clarke

## 4.1 关于 this

this 到底指向什么？

> 1.函数在调用时，JavaScript 会<span style="color: red">默认给 this 绑定一个值</span>；
>
> 2.this 的<span style="color: red">绑定和定义的位置（编写的位置）</span>没有关系；
>
> 3.this 的<span style="color: red">绑定和调用以及调用的位置有关系</span>；
>
> 4.this 是<span style="color: red">在运行时被绑定</span>的；

## 4.2 this 绑定规则

### 默认绑定

独立函数调用的时候，this 会采用默认绑定的方法；独立函数调用可以裂解为函数没有绑定到某个对象上进行调用。例如：

`example 1`普通的函数被独立的调用:

```javascript
function foo() {
  console.log(this); // window
  console.log(this.a); // 2
}

var a = 2;
foo();
```

`example 2`函数定义在对象中，但是独立调用:

```javascript
var obj = {
  name: "Tom",
  bar: function () {
    console.log("bar:", this);
  },
};

obj.bar(); // obj对象
var baz = obj.bar;
baz(); // window
```

`example 3`高阶函数:

```javascript
var obj = {
  name: "Tom",
  bar: function () {
    console.log("bar:", this);
  },
};

function test(fn) {
  fn();
}
test(obj.bar); // window
```

严格模式（"use strict";）下，独立调用的函数中的 this 指向的是 undefined。

### 隐式绑定

```javascript
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
obj.foo(); // 2
```

首先需要注意的是 `foo()` 的声明方式，及其之后是如何被当作引用属性添加到 obj 中的。但是无论是直接在 obj 中定义还是先定义再添加为引用属性，这个函数严格来说都不属于 obj 对象。
然而，调用位置会使用 obj 上下文来引用函数，因此你可以说函数被调用时 obj 对象“拥有”或者“包含”它。

当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。因为调用 `foo()` 时 this 被绑定到 obj，因此 this.a 和 obj.a 是一样的。

::: info 请思考下面这段代码的输出结果是什么？

```javascript
function foo() {
  console.log(this.a);
}
var obj2 = {
  a: 42,
  foo: foo,
};
var obj1 = {
  a: 2,
  obj2: obj2,
};
obj1.obj2.foo(); // 42
```

对象属性引用链中只有最顶层或者说最后一层会影响调用位置。
:::

隐式绑定有一个前提条件：

> 必须在调用的对象内部有一个对函数的引用（比如一个属性）；
>
> 如果没有这样的引用，在进行调用时，会报找不到该函数的错误；
>
> 正是通过这个引用，间接的将 this 绑定到了这个对象上；

如果不希望在对象内部包含这个函数的引用，同时又希望在这个对象你上进行强制调用，那么可以使用`call`和`apply`方法来显示绑定。

**看起来像是隐式绑定的显式绑定（也称作隐式丢失）**：

被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把 this 绑定到全局对象(在严格模式下，this 会绑定到 `undefined `上)。

`example 1`:

```javascript
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
var bar = obj.foo; // 函数别名！
var a = "oops, global"; // a 是全局对象的属性
bar(); // "oops, global"
```

`example 2`:

```javascript
function foo() {
  console.log(this.a);
}
function doFoo(fn) {
  // fn 其实引用的是 foo
  fn(); // <-- 调用位置！
}
var obj = {
  a: 2,
  foo: foo,
};
var a = "oops, global"; // a 是全局对象的属性
doFoo(obj.foo); // "oops, global"
```

### 显式绑定

```javascript
var obj = {
  a: 2,
};

function foo() {
  console.log(this.a); // 2
}

foo.call(obj); // 或者foo.apply(obj);
obj.foo();
```

:::tip **bind()、call()、apply()的区别是什么？**

`bind()`、`call()`和`apply()`都是 JavaScript 中用于改变函数执行上下文（即 this 指向）的方法。它们的主要区别在于执行方式、传参方式以及对 this 的修改方式。

- **执行方式**：`call()`和`apply()`在改变后页面加载之后就立即执行，是同步代码。而`bind()`是异步代码，改变后不会立即执行，而是返回一个新的函数。这意味着你可以稍后再调用这个新函数，而 this 的值已经被绑定到了指定的对象。

- **传参方式**：`call()`和`bind()`传参是一个一个逐一传入，不能使用剩余参数的方式传参。而`apply()`可以使用数组的方式传入参数，只要是数组方式就可以使用剩余参数的方式传入。

- **修改 this 的性质**：`call()`和`apply()`只是临时修改一次 this 的指向，当再次调用原函数的时候，this 的指向还是原来的指向。而`bind()`是永久修改函数 this 指向，但是它修改的不是原来的函数，而是返回一个新的函数，此函数的 this 永远被改变，绑定后就修改不了。

此外，还有一个值得注意的区别是，当`bind()`返回的函数使用 new 作为构造函数时，绑定的 this 值会失效，this 指向实例对象，但传入的参数依然生效（new 调用的优先级高于 bind 调用）。

使用 bind 方法会创建一个新的绑定函数（bound function, BF），绑定函数是一个 exotic function object(怪异函数对象，ECMAScript2015 中的术语)。
:::

### new 绑定

```javascript
function foo() {
  console.log(this); // foo函数对象（包含name属性）
  this.name = "Tom";
}

new foo();
// new一个对象的过程：
// 1. 创建新的对象；
// 2. 将this指向这个空对象；
// 3. 执行函数体中的代码；
// 4. 没有显示返回非空对象时，默认返回这个对象；
```

### 内置函数中的 this

- 定时器：

```javascript
setTimeout(function () {
  console.log("定时器函数：", this); // window
}, 1000);
```

- 按钮的点击监听：

```javascript
<button>按钮</button>;

var btnEl = document.querySelector("button");
btnEl.onclick = function () {
  // this为btnEl指向的DOM对象（<button>按钮</button>）
  console.log("btn的点击：", this);
};
```

- forEach 函数：

```javascript
var names = ["Tom", "Jack", "Alice"];
names.forEach(function (item) {
  console.log("forEach函数:", this); // window
});

names.forEach(function (item) {
  console.log("forEach函数:", this); // Joyce
}, "Joyce");
```

## 4.3 this 绑定规则优先级

1. 默认规则的优先级最低；
2. 显式绑定优先级高于隐式绑定；
3. new 绑定优先级高于隐式绑定；
4. new 绑定优先级高于 bind：
   - new 绑定和 call、apply 是不允许同时使用的，所以不存在谁的优先级更高；
   - new 绑定可以和 bind 一起使用，new 绑定优先级更高；
5. bind 优先级高于 apply 和 call:

```javascript
function foo() {
  console.log("foo:", this); // aaa
}
var bindFn = foo.bind("aaa");
bindFn.call("bbb");
```

:::warning **this 绑定的特殊情况**

1. 如果在显示绑定中，传入 null 或者 undefined，那么这个显示绑定会被忽略，使用默认规则：

```javascript
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
   `(obj2.foo = obj1.foo)();`结果为 window。

```javascript
var obj1 = {
  name: "Tom",
  foo: function () {
    console.log("foo:", this);
  },
};

var obj2 = {
  name: "Alice",
};

obj2.foo = obj1.foo();
obj2.foo(); // obj2对象

obj1.foo(); // obj1对象
(obj2.foo = obj1.foo)(); // window
```

:::

## 4.4 箭头函数

箭头函数（arrow function）是 ES6 之后增加的一种编写函数 的方法。很大程度上，箭头函数实例化的函数对象与正式的函数表达式创建的函数对象行为是相同的。任何可以使用函数表达式的地方，都可以使用箭头函数。

### 箭头函数的写法：

```javascript
// 多个参数：
let arrowSum = (a, b) => {
  return a + b;
};

let arrowSum = (a, b) => a + b;

// 如果返回值为一个对象，需要加上（）
let fn = () => () => ({ name: "Tom" });

// 只有一个参数：
let double = (x) => {
  return 2 * x;
};

let triple = (x) => {
  return 3 * x;
};

let multiply = (x) => 4 * x;
```

箭头函数与普通函数的区别：

> 1.箭头函数不能使用`arguments`、`super`、`new.target`；
>
> 2.箭头函数也不能用作构造函数(不能和 new 一起来使用，会抛出错误)；
>
> 3.箭头函数中没有 this；
>
> 4.箭头函数也没有`prototype`属性。

::: tip this 的使用规则：
如果你经常编写 this 风格的代码，但是绝大部分时候都会使用 `self = this` 或者箭头函数
来否定 this 机制，那你或许应当：

1. 只使用词法作用域并完全抛弃错误 this 风格的代码；
2. 完全采用 this 风格，在必要时使用 `bind(..)`，尽量避免使用 `self = this` 和箭头函数。
   :::

## 4.5 总结

this 总结......

# 5. 对象原型

## 5.1 对象
对象的两种创建形式：

``` javascript
// 文字形式
var person = {
  name: "Tom",
  age: 18
}
```

``` javascript
// 构造形式
var person = new Object();
person.name = "Tom";
person.age = 18;
```
## 5.2 对象的分类
在 JavaScript 中，主要有六种数据类型，分别是五种**简单基本类型**：`string`, `number`, `boolean`, `null`, `undefined`; 一种对象类型：`object`。而 JavaScript 中有许多特殊的对象子类型，称之为
**复杂基本类型**，如函数和数组。

## 5.3 对象的遍历


## 5.4 总结


# 6. 深入浏览器的渲染原理

## 6.1 浏览器内核
常见的浏览器内核有：
- **Trident**(三叉戟)：IE、360安全浏览器、搜狗高速浏览器、百度浏览器、UC浏览器；
- **Gecko**(壁虎)：Mozilla Firefox；
- **Presto**(急板乐曲)->**Blink**（眨眼）: Opera;
- **Webkit**: Safari、360极速浏览器、搜狗高速浏览器、移动端浏览器（Android、ios）;
- **Webkit->Blink**: Google Chrome、Edge。

## 6.2 网页的解析和浏览器渲染过程
浏览器的渲染原理和网页的解析过程可以大致分为以下几个步骤：

1. **DNS解析**：当用户输入一个网址并按下回车键的时候，浏览器首先会进行DNS解析，将域名转换成相应的IP地址，以便进行网络通信。
TCP连接：浏览器通过DNS获取到Web服务器真正的IP地址后，会向Web服务器发起TCP连接请求。通过TCP三次握手建立好连接后，浏览器便可以将HTTP请求数据发送给服务器了。

2. **发送HTTP请求**：浏览器向Web服务器发起一个HTTP请求，HTTP协议是建立在TCP协议之上的应用层协议，其本质是在建立起的TCP连接中，按照HTTP协议标准发送一个索要网页的请求。在这一过程中，会涉及到负载均衡等操作。
解析HTML：浏览器从服务器获取HTML代码后，会开始解析HTML标记并将其构建成DOM树。DOM树是由HTML标签和它们的层级关系组成的树状结构，表示了网页的结构和内容。在解析HTML的过程中，浏览器还会解析meta标记、超链接、图像和CSS样式等。为了提高解析效率，浏览器在开始解析前，会启动一个预解析的线程，率先下载HTML中的外部CSS文件和外部的JS文件。如果主线程解析到link位置，此时外部的CSS文件还没有下载解析好，主线程不会等待，继续解析后续的HTML。

3. **解析CSS**：浏览器完成了HTML的解析后，会解析CSS样式并将其应用于DOM树。CSS样式是一种控制网页布局和样式的标准，通过将样式表与HTML分离，使得网页制作更加简单和灵活。浏览器会根据选择器匹配元素，并应用相应的样式规则，计算出每个元素的最终样式。
生成渲染树：浏览器会根据DOM树和样式信息生成渲染树。渲染树是由DOM树中的可见元素和它们的样式信息组成的树状结构，表示了网页的布局和外观。渲染树中的每个节点都是一个可见元素，包括文本、图片、表格等。在生成渲染树的过程中，浏览器会根据元素的样式信息计算出每个元素的几何属性，如位置、大小等。这个过程称为布局。
4. **分层**：主线程会使用一套复杂的策略对整个布局树中进行分层。分层的好处在于，将来某一个层改变后，仅会对该层进行后续的处理，从而提升效率。
绘制：主线程会为每个层单独产生绘制指令集，用于描述这一层的内容该如何画出来。浏览器会根据渲染树的结构和几何属性进行绘制，将网页内容显示在用户界面上。在绘制过程中，浏览器会将渲染树中的每个节点转换为屏幕上的像素。


## 6.3 回流和重绘解析
在HTML中，每个元素都可以理解成一个盒子，在浏览器解析过程中，会涉及到回流与重绘：

- **回流**：布局引擎会根据各种样式计算每个盒子在页面上的大小与位置；
- **重绘**：当计算好盒模型的位置、大小及其他属性后，浏览器根据每个盒子特性进行绘制。

具体的浏览器解析渲染机制如下：

- 解析HTML，生成DOM树，解析CSS，生成CSSOM树；
- 将DOM树和CSSOM树结合，生成渲染树(Render Tree)；
- Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）；
- Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素；
- Display:将像素发送给GPU，展示在页面上；

### 回流触发时机
回流这一阶段主要是计算节点的位置和几何信息，那么当页面布局和几何信息发生变化的时候，就需要回流，如下面情况：

1. 添加或删除可见的DOM元素；
2. 元素的位置发生变化；
3. 元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）；
4. 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代；
5. 页面一开始渲染的时候（这避免不了）；
6. 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）；
7. 还有一些容易被忽略的操作：获取一些特定属性的值；

> offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、 clientLeft、clientWidth、clientHeight

这些属性有一个共性，就是需要通过即时计算得到。因此浏览器为了获取这些值，也会进行回流

除此还包括getComputedStyle方法，原理是一样的。

### 重绘触发时机
触发回流一定会触发重绘。可以把页面理解为一个黑板，黑板上有一朵画好的小花。现在我们要把这朵从左边移到了右边，那我们要先确定好右边的具体位置，画好形状（回流），再画上它原有的颜色（重绘）。

除此之外还有一些其他引起重绘行为：

- 颜色的修改
- 文本方向的修改
- 阴影的修改

总之，<span style="color: red">**回流一定会触发重绘，而重绘不一定会回流**</span>。

### 浏览器优化机制
现代的浏览器都是很聪明的，由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列。但是！当你获取布局信息的操作的时候，会强制队列刷新，比如当你访问以下属性或者使用以下方法：

> offsetTop、offsetLeft、offsetWidth、offsetHeight
> 
> scrollTop、scrollLeft、scrollWidth、scrollHeight
> 
> clientTop、clientLeft、clientWidth、clientHeight
> 
> getComputedStyle()
> 
> getBoundingClientRect

以上属性和方法都需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。因此，我们在修改样式的时候，最好避免使用上面列出的属性，他们都会刷新渲染队列。如果要使用它们，最好将值缓存起来。

### 如何避免回流

- 如果想设定元素的样式，通过改变元素的 class 类名 (尽可能在 DOM 树的最里层)；
- 避免设置多项内联样式；
- 应用元素的动画，使用 position 属性的 fixed 值或 absolute 值(如前文示例所提)；
- 避免使用 table 布局，table 中每个元素的大小以及内容的改动，都会导致整个 table 的重新计算；
- 对于那些复杂的动画，对其设置 position: fixed/absolute，尽可能地使元素脱离文档流，从而减少对其他元素的影响；
- 使用css3硬件加速，可以让transform、opacity、filters这些动画不会引起回流重绘；
- 避免使用 CSS 的 JavaScript 表达式；

当我们需要对 DOM 进行一系列修改的时候，可以通过批量修改 DOM 来减少回流重绘次数。
有三种方式可以让 DOM 脱离文档流：

- 隐藏元素，应用修改，重新显示；
- 使用文档片段(document fragment)在当前DOM之外构建一个子树，再把它拷贝回文档；
- 将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素。

关于重绘与回流的进一步介绍，请参考[重绘与回流](https://segmentfault.com/a/1190000017329980)。

## 6.4 合成和性能分析
元素绘制的过程，可以将布局后的元素绘制到多个合成图层中，这是浏览器的一种优化手段。
默认情况下，标准流中的内容都是被绘制在同一个图层中的；而一些特殊的属性，会创建一个新的合成层（Compositing Layer）,并且新的图层可以利用 GPU 来加速绘制，因为每个合成层都是单独渲染的。

可以行成新的合成层的常见属性：

- 3D transforms
- video、canvas、iframe
- opacity 动画转换时
- position：fixed
- will-change: 一个实验性的属性，提前告诉浏览器元素可能发生哪些变化
- animation或transition设置了opacity、transform
  
分层确实可以提高性能，但是它以内存管理为代价，因此不应作为 web 性能优化策略的一部分过度使用。

## 6.5 defer和async属性
在浏览器的解析过程中，遇到了 script 元素时不能继续构建 DOM 树的，它只会停止继续构建，首先下载 JavaScript
代码，并且执行 JavaScript 的脚本，只有等到 JavaScript脚本执行结束后，才会继续解析 HTML，构建 DOM 树。

> 因为 JavaScript 的作用之一就是操作 DOM，并且修改 DOM；
> 
> 如果等到 DOM 树构建完成并且渲染再执行 JavaScript，会造成严重的回流和重绘，影响页面性能；
>
> 所以在遇到 script 元素时，优先下载和执行 JavaScript代码，再继续构建 DOM树。

但是，**这会造成页面的解析阻塞，在脚本下载、执行完成之前，用户在界面上什么都看不到**。
为解决这个问题，script 元素提供了两个属性 `defer` 和 `async`。


::: info defer 属性
浏览器不等待脚本下载，而继续解析 HTML，构建 DOM Tree。
脚本会由浏览器来进行下载，但是不会阻塞DOMTree的构建过程；
如果脚本提前下载好了，它会等待 DOM Tree 构建完成，在 DOMContentLoaded 事件之前先执行defer中的代码；

- DOMContentLoad 总是会等待 defer 中的代码执行完成；
- 另外多个带 defer 的脚本可以保持正确的顺序执行；
- 从某个角度来说，defer 可以提高页面的性能，并且推荐放到 head 元素中；
- defer 仅适用于外部脚本，对于 script 默认内容会被忽略。
:::

::: info async 属性
- 浏览器不会因 async 脚本而阻塞；
- async 脚本不能保证顺序执行，它是独立下载、独立运行，不会等待其他脚本；
- async 不会保证在 DOMContentLoad 之前或者之后执行；
:::

defer 通常用于需要再文档解析后操作 DOM 的 JavaScript 代码，并且对多个 script 文件有顺序要求的；
async 通常用于独立的脚本，对其他脚本，甚至 DOM 没有依赖的。

## 6.6 JavaScript执行原理
以下的描述并不是我写作的本意，其来源于“文心一言”的回答。

JavaScript 是一种解释型语言，这意味着它的代码在执行时会被逐行读取并解释。尽管它是一种解释型语言，但现代浏览器通常使用一种称为即时编译（JIT, Just-In-Time Compilation）的技术来优化执行性能。

以下是 JavaScript 执行过程的大致原理：

1. **解析（Parsing）**：

- 当浏览器加载 JavaScript 代码时，它首先会进行解析。解析是将源代码转换为抽象语法树（AST, Abstract Syntax Tree）的过程。AST 是源代码的抽象语法结构的树状表现形式，它描述了代码的结构，但不包含任何具体的值。
- 解析过程中，如果代码中存在语法错误，浏览器会抛出错误并停止执行。

2. **预编译（Pre-compilation）**：

- 在某些情况下，JavaScript 代码会在执行前进行预编译。这通常涉及到对代码进行某些优化，以便在执行时更快地运行。
- 预编译阶段会识别出变量和函数声明，并为其分配内存空间。

3. **执行（Execution）**：

- 一旦代码被解析和预编译，它就可以被执行了。在执行过程中，JavaScript 引擎会逐行读取代码并执行相应的操作。
- 当遇到函数调用时，JavaScript 引擎会创建一个新的执行上下文（Execution Context），并在该上下文中执行函数代码。执行上下文包含了函数的作用域链、变量对象等信息。
- JavaScript 是单线程的，这意味着它一次只能执行一个任务。为了处理异步操作（如网络请求、定时器等），JavaScript 使用了事件循环（Event Loop）机制。

4. **事件循环（Event Loop）**：

- 当 JavaScript 代码执行完毕或遇到异步操作时，控制权会交还给事件循环。事件循环会检查事件队列（Event Queue）中是否有待处理的事件。
- 如果有待处理的事件（如网络请求的响应、定时器的回调等），事件循环会将其取出并放入执行栈（Execution Stack）中执行。执行栈是一个后进先出（LIFO）的数据结构，用于存储待执行的代码。
- 当执行栈为空时，事件循环会再次检查事件队列，并重复上述过程。这样就形成了一个循环，使得 JavaScript 能够处理异步操作和回调函数。

通过以上过程，JavaScript 能够在浏览器中执行并处理各种交互和动态内容。

## 6.7 V8引擎
v8引擎是前端面试过程中可能会问到的关于底层原理的知识。详情请参考[V8官网](https://v8.dev/)。

::: tip 什么是V8引擎？这是V8官网的一段介绍：
V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. V8 can run standalone, or can be embedded into any C++ application.

V8 是 Google 开源的 JavaScript 和 WebAssembly 引擎，用 C++ 编写。它用于 Chrome 和 Node.js 等。V8实现了 ECMAScript 和 WebAssembly，并在 Windows7 或更高版本、macOS10.12+ 以及使用 x64、IA-32 或 ARM 处理器的 Linux 系统上运行。其他系统（IBM i、AIX）和处理器（MIPS、ppcle64、s390x）由外部维护。V8 可以独立运行，也可以嵌入到任何 C++ 应用程序中。
:::

## 6.8 总结
总结......


# 7. 函数

## 7.1 函数属性和arguments :white_check_mark:
### 函数的属性
- name 属性：获取函数的名称；
- length 属性：获取函数参数的个数；
- 展开语法 (Spread syntax), 可以在函数调用/数组构造时，将数组表达式或者 string 在语法层面展开；还可以在构造字面量对象时，将对象表达式按 key-value 的方式展开。(字面量一般指 [1, 2, 3] 或者 {name: "mdn"} 这种简洁的构造方式)

```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6
```

- 剩余参数：剩余参数语法允许我们将一个不定数量的参数表示为一个数组。
  
```javascript
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10
```

::: tip 展开语法和剩余参数语法有什么不同？
剩余语法 (Rest syntax) 看起来和展开语法完全相同，不同点在于，剩余参数用于解构数组和对象。从某种意义上说，剩余语法与展开语法是相反的：展开语法将数组展开为其中的各个元素，而剩余语法则是将多个元素收集起来并“凝聚”为单个元素。
:::

### arguments 对象

arguments 是一个对应于传递给函数的参数的**类数组对象**。**类数组**意味着 arguments 有长度属性并且属性的索引是从零开始的，但是它没有 Array 的内置方法，例如 forEach() 和 map() 都是没有的。

将 arguments 转化为真正的数组：

```javascript
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
const args = [...arguments];
```

::: tip 剩余参数和 arguments 对象的区别
- 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参。
- arguments 对象不是一个真正的数组，而剩余参数是真正的 Array 实例，也就是说你能够在它上面直接使用所有的数组方法，比如 sort，map，forEach 或 pop。
- arguments 对象还有一些附加的属性（如 callee 属性）。
:::

## 7.2 纯函数的理解和应用 :rocket:
### 纯函数的定义
- 确定的输入，一定会产生确定的输出；
- 函数在执行过程中，不能产生副作用；

> 副作用：在执行一个函数时，除了返回函数值外，还对调用函数产生了附加的影响，比如修改了全局变量，修改参数或者改变外部的存储。

### 纯函数的应用
纯函数可以用于封装自己的函数或插件。

## 7.3 柯里化的理解和应用 :heart: 
### 柯里化（Currying）
把接收多个参数的函数，变成接收一个单一参数（最初函数的第一个参数）的函数，并且返回接收余下的参数，而且返回结果的新函数的技术。
也就是说，只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数，这个过程就称之为柯里化。

### 柯里化的应用

```javascript
function curry(fn) {
  return function curried(...args) {
    if(args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}
```

::: warning 思考：上述这段柯里化代码涉及的知识点有哪些？
1. 函数的属性：fn.length 获取函数参数的个数；
2. 闭包；
3. 函数递归；
4. apply()的用法；
5. this 指向问题。
:::

柯里化函数的应用场景：

- **参数复用**：柯里化函数可以将多参数函数转换为一系列单参数函数，从而允许参数的复用。例如，当需要多次调用同一个函数并传递相同的参数时，可以先柯里化这个函数，然后重复使用返回的单参数函数。
- **延迟计算**：柯里化可以实现延迟计算，即只有在需要结果时才进行计算。这在处理计算密集型任务或需要优化性能的场景中特别有用。
- **动态创建函数**：柯里化可以用于根据条件动态创建函数。例如，在处理不同浏览器的事件监听时，可以根据浏览器的兼容性动态生成不同的函数。
- **部分应用的实现**：柯里化允许将一个多参数函数转化为一个只接受部分参数的函数。这使得我们可以更灵活地调用函数，只需要传入必要的参数即可。
- **便于函数组合和管道操作**：柯里化的函数可以方便地与其他函数进行组合和管道操作，从而构建出更复杂的函数逻辑。


## 7.4 组合函数理解和应用 :rocket:
组合函数（compose function）通常用于将一个函数链式地应用于一系列的值。每个函数都会将它的输出传递给链中的下一个函数。组合函数在函数式编程中非常常见，因为它允许我们以简洁、声明式的方式创建复杂的函数逻辑。

```javascript
function double(num) {
  return num * 2;
}

function pow(num) {
  return num * 2;
}

function composeFn(...fns) {
  var length = fns.length;
  if(length <= 0) return;
  for(var i = 0; i < length; i++) {
    var fn = fns[i];
    if(type fn !== "function") {
      throw new Error(`index position ${i} must be function.`);
    }
  }

  return function(...args) {
    var result = fns[0].apply(this, args);
    for(var i = 1; i < length; i++) {
      var fn = fns[i];
      result = fn.apply(this, [result]);
    }
  }
}

var newFn = composeFn(double,pow);
newFn(100);
```

再看一个例子：

```javascript
function compose(...fns) {  
  if (fns.length === 0) {  
    return arg => arg;  
  }  
  
  if (fns.length === 1) {  
    return fns[0];  
  }  
  
  return fns.reduce((a, b) => (...args) => a(b(...args)));  
}
// 这个函数接受任意数量的函数作为参数，并返回一个新的函数。
// 这个新的函数将按照从右到左的顺序调用传入的函数。
// 这是因为JavaScript中的函数是从左到右求值的，所以我们需要在reduce函数中反转函数的顺序。
const double = x => x * 2;  
const addFive = x => x + 5;  
  
const composedFunction = compose(double, addFive);  
  
console.log(composedFunction(3)); // 输出：16 (因为 (3 + 5) * 2 = 16)
```
## 7.5 with、eval的使用 :x:
`with` 语句扩展一个语句的作用域链。
:::danger 已弃用: 不再推荐使用该特性。 
```javascript
function f(foo, values) {
  with (foo) {
    console.log(values);
  }
}
```
:::

`eval()` 函数会将传入的字符串当做 JavaScript 代码进行执行。
```javascript
console.log(eval('2 + 2'));
// Expected output: 4

console.log(eval(new String('2 + 2')));
// Expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// Expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// Expected output: false
```

`eval()` 是一个危险的函数，它使用与调用者相同的权限执行代码。如果你用 `eval()` 运行的字符串代码被恶意方（不怀好意的人）修改，你最终可能会在你的网页/扩展程序的权限下，在用户计算机上运行恶意代码。更重要的是，第三方代码可以看到某一个 `eval()` 被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的 `Function` 就不容易被攻击。(**永远不要使用 eval！**)
## 7.6 严格模式的使用

## 7.7 总结


