# Airbnb JavaScript 代码规范

本文内容来自于爱彼迎出品的[JavaScript开发规范](https://github.com/BingKui/javascript-zh)
## 1. 类型

#### 1.1 原始值
当你访问一个原始类型的时候，你可以直接使用它的值。
- string
- number
- boolean
- null
- undefined
- symbol

``` javascript
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

``` javascript
const foo = [1, 2];
const bar = foo;
bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```

## 2. 引用
#### 2.1 使用 `const` 定义你的所有引用，避免使用 `var`
eslint: [prefer-const](https://eslint.org/docs/latest/rules/prefer-const.html), [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign.html)

> 为什么? 这样能够确保你不能重新赋值你的引用，否则可能导致错误或者产生难以理解的代码。

``` javascript
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

``` javascript
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

``` javascript
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

``` javascript
// bad
const item = new Object();

// good
const item = {};
```

#### 3.2 在创建具有动态属性名称的对象时使用计算属性名

> 为什么? 它允许你在一个地方定义对象的所有属性。

``` javascript
function getKey(k) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```

#### 3.3 使用对象方法的缩写
eslint: [object-shorthand](https://eslint.org/docs/rules/object-shorthand.html)

``` javascript
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

``` javascript
const lukeSkywalker = 'Luke Skywalker';

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

``` javascript
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

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

``` javascript
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
```

#### 3.7 不能直接调用 `Object.prototype` 的方法,如: `hasOwnProperty` 、 `propertyIsEnumerable` 和 `isPrototypeOf`。

> 为什么? 这些方法可能被以下问题对象的属性追踪 - 相应的有 { `hasOwnProperty: false` } - 或者，对象是一个空对象 (`Object.create(null)`)。

``` javascript
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // 在模块范围内的缓存中查找一次
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
// ...
console.log(has.call(object, key));
```

#### 3.8 更喜欢对象扩展操作符，而不是用 `Object.assign` 浅拷贝一个对象。使用对象的 `rest` 操作符来获得一个具有某些属性的新对象。

``` javascript
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

``` javascript
// bad
const items = new Array();

// good
const items = [];
```

#### 4.2 使用 `Array#push` 取代直接赋值来给数组添加项。

``` javascript
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```

#### 4.3 使用数组展开方法 `...` 来拷贝数组。

``` javascript
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

``` javascript
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

#### 4.5 对于对迭代器的映射，使用 `Array.from` 替代展开方法 `...` ，因为它避免了创建中间数组。

``` javascript
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

#### 4.6 在数组回调方法中使用 `return` 语句。 如果函数体由一个返回无副作用的表达式的单个语句组成，那么可以省略返回值， 具体查看 8.2
eslint: [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return)

``` javascript
// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map(x => x + 1);

// bad - 没有返回值，意味着在第一次迭代后 `acc` 没有被定义
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  acc[index] = flatten;
});

// good
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  acc[index] = flatten;
  return flatten;
});

// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }

  return false;
});
```

#### 4.7 如果数组有多行，则在开始的时候换行，然后在结束的时候换行

``` javascript
// bad
const arr = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```

## 5. 解构

## 6. 字符

## 7. 方法

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

## 33. JavaScript风格指南的指南

## 34. 许可证

## 35. 修正案