---
prev:
  text: "异常"
  link: "/backend/java/java05"

next:
  text: "集合框架"
  link: "/backend/java/java07"
---

# 6. 常用类

## 6.1 String 类

### 初识 String

1. Java 中的 String 属于引用数据类型，代表字符串。
2. Java 专门在堆中为字符串准备了一个字符串常量池。因为字符串使用比较频繁，放在字符串常量池中省去了对象的创建过程，从而提高程序的执行效率。（常量池属于一种缓存技术，缓存技术是提高程序执行效率的重要手段。）

```java
String s1 = "hello";
String s2 = "hello";
System.out.println(s1 == s2); // true
// true 说明s1和s2指向了字符串常量池中的同一个字符串对象。

String s3 = "hello";
String s4 = new String("hello");
System.out.println(s3 == s4); // false

// s3指向字符串常量池，s4指向堆内存
```

注意：字符串字面量在编译的时候就已经确定了将其放到字符串常量池中。JVM 启动时会立即程序中带有双引号的字符串全部放入字符串常量池。

3. Java8 之后字符串常量池在堆中。Java8 之前字符串常量池在永久代。
4. 字符串一旦创建是不可变的。（底层 String 源码中有一个属性：`private final byte[] value;`）

- `String s = "hello";` 其中 "hello" 存储在字符串常量池中。
- "hello" 不可变。不能变成 "hello123"。如果进行字符串拼接，必然创建新的字符串对象。
- 是 "hello" 不可变，不是 s 不可变，s 可以指向其它的字符串对象：`s = "xyz";`。

### String 的拼接

1. 动态拼接之后的新字符串不会自动放到字符串常量池中：

```java
String s1 = "abc";
String s2 = "def";
String s3 = s1 + s2;
String s4 = "abcdef";
System.out.println(s3 == s4); // false
// false 说明拼接后的字符串并没有放到字符串常量池
```

s3 指向的对象没有在字符串常量池中，而是在堆中；在底层进行 `+` 操作时，加符号两边至少有一个是变量的时候，会创建一个 `StringBuilder` 对象，进行字符串的拼接。

```java
String s1 = "abc" + "def";
String s2 = "abcdef";
System.out.println(s1 == s2); // true
// 在编译阶段，s1 即拼接生成放在字符串常量池中
```

::: tip 扩展知识-`intern()`
将堆中的字符串变量放到字符串常量池中：
```java
String s1 = "abc";
String s2 = "def";
String s3 = s1 + s2;
String s4 = "abcdef";
System.out.println(s3 == s4); // false
String s5 = s3.intern(); // [!code highlight]
System.out.println(s5 == s4); // true // [!code highlight]
```
:::

以上程序中字符串常量中有三个： "abc", "def", "abcdef"，除了字符串常量池的字符串之外，在堆中还有一个字符串对象 "abcdef"。

1. 两个字符串字面量拼接会做编译阶段的优化，在编译阶段就会进行字符串的拼接。

```java
String s1 = "aaa" + "bbb";
```

以上程序会在编译阶段进行拼接，因此以上程序在字符串常量池中只有一个： "aaabbb"。

### String 类常用的构造方法

1. `String(char[] value)`：根据字符数组创建一个新的字符串对象。
2. `String(char[] value, int offset, int count)`：根据字符数组的指定部分创建一个新的字符串对象。
3. `String(byte[] bytes)`：根据字节数组创建一个新的字符串对象，默认使用平台默认的字符集进行解码。
4. `String(byte[] bytes, int offset, int length)`：根据字节数组的指定部分创建一个新的字符串对象，默认使用平台默认的字符集进行解码。
5. `String(byte[] bytes, Charset charset)`：根据字节数组和指定的字符集创建一个新的字符串对象, `new String(bytes, Charset.defaultCharset());`
6. `String(byte[] bytes, String charsetName)`：

- 根据字节数组和指定的字符集名称创建一个新的字符串对象。
- 这是一个解码的过程。你需要提前知道 "byte[] bytes" 是通过哪个编码方式进行编码得到的。
- 如果通过 GBK 的方式进行编码得到的 "byte[] bytes"，调用以上构造方法时采用 UTF-8 的方式进行解码，就会出现乱码。

7. `String(String original)`：

- 通过复制现有字符串创建一个新的字符串对象。
- 这个方法被 `@IntrinsicCandidate` 标注，这个注解的作用是告诉编译器,该方法或构造函数是一个内在的候选方法,可以被优化和替换为更高效的代码。因此它是不建议使用的。
- `new String("hello");` 这个代码会让常量池中有一个 "hello"，并且在堆中也有有一个 String 对象。

### String 的常用方法

- `char charAt(int index);`: 返回索引处的 char 值。
- `int length();`: 获取字符串长度。
- `boolean isEmpty();`: 判断字符串是否为空字符串，如果 length() 是 0 就是空字符串。
- `boolean equals(Object anObject);`: 判断两个字符串是否相等。
- `boolean equalsIgnoreCase(String anotherString);`: 判断两个字符串是否相等，忽略大小写。
- `boolean contains(CharSequence s);`: 判断当前字符串中是否包含某个子字符串。
- `boolean startsWith(String prefix);`: 判断当前字符串是否以某个字符串开头。
- `boolean endsWith(String suffix);`: 判断当前字符串是否以某个字符串结尾。
- `int compareTo(String anotherString);`: 两个字符串按照字典顺序比较大小。
- `int compareToIgnoreCase(String str);`: 两个字符串按照字典顺序比较大小，比较时忽略大小写。
- `int indexOf(String str);` 获取当前字符串中 str 字符串的第一次出现处的下标。
- `int indexOf(String str, int fromIndex);`: 从当前字符串的 fromIndex 下标开始往右搜索，获取当前字符串中 str 字符串的第一次出现处的下标。
- `int lastIndexOf(String str);` 获取当前字符串中 str 字符串的最后一次出现处的下标。
- `int lastIndexOf(String str, int fromIndex);`: 从当前字符串的 fromIndex 下标开始往左搜索，获取当前字符串中 str 字符串的最后一次出现处的下标。

- `byte[] getBytes();`: 将字符串转换成字节数组。其实就是对字符串进行编码。默认按照系统默认字符集。
- `byte[] getBytes(String charsetName);`: 将字符串按照指定字符集的方式进行编码。
- `byte[] getBytes(Charset charset);`
- `char[] toCharArray();`: 将字符串转换字符数组。
- `String toLowerCase();`: 转小写
- `String toUpperCase();`: 转大写
- `String concat(String str);`: 进行字符串的拼接操作。和 `+` 的区别？
  - `+` 既可以进行求和，也可以进行字符串的拼接，底层拼接时会创建 StringBuilder 对象进行拼接。+ 拼接 null 时不会出现空指针异常。
  - `concat` 方法参数只能时字符串类型，拼接时不会创建 StringBuilder 对象，拼接完成后返回一个新的 String 对象。拼接 null 会出现空指针异常。
  - `+` 使用较多。如果进行大量字符串拼接，这两个都不合适。
- `String substring(int beginIndex);`: 从指定下标 beginIndex 开始截取子字符串
- `String substring(int beginIndex, int endIndex);`
- `String trim();`: 去除字符串前后空白（只能去除 ASCII 码中的空格和制表符）
- `String strip();`: 去除字符串前后空白（支持所有的编码形式的空白，可以将全角空格去除，\u3000 是全角空格，Java11 新增）

- `String stripLeading();` 去除前空白
- `String stripTrailing();` 去除后空白
- `String toString();`
- `String intern();` 获取字符串常量池中的字符串，如果常量池中没有，则将字符串加入常量池并返回。
  - `byte[] bytes = {97,98,99,100};` String s = new String(bytes);
  - `String s2 = s.intern();` // 将字符串 “abcd”放入字符串常量池并返回常量池中的字符串 “abcd”
- `static String join(CharSequence d, CharSequence... elements);` 将多个字符串以某个分隔符连接（Java8 新增）
- `static String join(CharSequence delimiter, Iterable<? extends CharSequence> elements);`
- `static String valueOf(boolean b);` 以下所有的静态方法 valueOf 作用是将非字符串类型的数据转换为字符串形式。
- `static String valueOf(char c);`
- `static String valueOf(char[] data);`
- `static String valueOf(char[] data, int offset, int count);`
- `static String valueOf(double d);`
- `static String valueOf(float f);`
- `static String valueOf(int i);`
- `static String valueOf(long l);`
- `static String valueOf(Object obj);`

### 正则表达式初步

1. 正则表达式（regular expression），简称为 regex 或 regexp，是一种用于描述特定模式的表达式。它可以匹配、查找、替换文本中与该模式匹配的内容，被广泛应用于各种文本处理和匹配相关的应用中。
2. 正则表达式的应用:

- 验证输入内容的格式是否正确。例如，邮箱，手机号，密码等
- 在文本编辑器中进行搜索和替换。例如，在代码编辑器中查找指定字符串或替换错误的代码成为正确的代码块
- 数据挖掘和信息提取。正则表达式可以从 HTML、XML、JSON 等格式的数据中提取所需的信息
- 用于编写脚本语言，如 awk，grep 和 sed
- 服务器端编程。正则表达式在处理数据和字符串时具有高效的性能，可以在开发 Web 应用程序时被广泛应用

3. 正则表达式和 Java 语言的关系？
   Java 语言中可以使用正则表达式。C 语言以及其它大部分编程语言都是支持正则表达式的。

### 正则表达式常见符号：

1. 元字符

- `.` 匹配除换行符以外的任意字符
- `\w` 匹配字母或数字或下划线或汉字
- `\s` 匹配任意的空白符
- `\d` 匹配数字
- `\b` 匹配单词的开始或结束
- `^` 匹配字符串的开始
- `$` 匹配字符串的结束

2. 字符转义

- `\.` 表示一个普通的.字符
- `\*` 表示一个普通\*字符

3. 重复次数

- `*` 重复零次或更多次（0 - n）
- `+` 重复一次或更多次(1 - n)
- `?` 重复零次或一次 (0 或 1)
- `{n}` 重复 n 次 (n)
- `{n,}` 重复 n 次或更多次 ( >= n)
- `{n,m}` 重复 n 到 m 次 (n - m)

### 正则表达式常见符号

1. 字符类

- `[abcdef]` 匹配 abcdef 这几个字符中的任意一个字符
- `[0-9]` 匹配 0-9 中的任意一个数字
- `[a-zA-Z0-9]` 匹配 a-z，A-Z，0-9 的任意一个字符
- `[.?!]` 匹配标点符号（.或?或!）
- `[abc-]` 匹配 abc-四个字符中的任意一个字符（注意-只能出现在末尾。如果-在中间则表示区间）

2. 分支条件
   `0\d{2}-\d{8}|0\d{3}-\d{7}`这个表达式能匹配两种以连字号分隔的电话号码：
   一种是三位区号，8 位本地号(如 010-12345678)，一种是 4 位区号，7 位本地号(0376-2233445)
3. 分组
   `(\d{1,3}.){3}\d{1,3}` 是一个简单的 IP 地址匹配表达式。要理解这个表达式，请按下列顺序分析它：\d{1,3}匹配 1 到 3 位的数字，
   `(\d{1,3}.){3}`匹配三位数字加上一个英文句号(这个整体也就是这个分组)重复 3 次，最后再加上一个一到三位的数字(\d{1,3})
4. 反义

- `\W` 匹配任意不是字母，数字，下划线，汉字的字符
- `\S` 匹配任意不是空白符的字符
- `\D` 匹配任意非数字的字符
- `\B` 匹配不是单词开头或结束的位置
- `[^x]` 匹配除了 x 以外的任意字符
- `[^aeiou]` 匹配除了 aeiou 这几个字母以外的任意字符

### String 的正则表达式相关的方法

- `String replace(CharSequence target, CharSequence replacement);`
  将当前字符串中所有的 target 替换成 replacement，返回一个新的字符串。
- `String replaceAll(String regex, String replacement);`
  将当前字符串中所有符合正则表达式的 regex 替换成 replacement。
- `String[] split(String regex);`
  将当前字符串以某个正则表达式表示的子字符串进行分割，返回一个字符串数组。
- `boolean matches(String regex);`
  判断当前字符串是否符合正则表达式 regex。

## 6.2 StringBuffer 与 StringBuilder

## 6.3 包装类

## 6.4 大数字

## 6.5 日期处理

## 6.6 Java8 的新日期 API

## 6.7 Math

## 6.8 枚举

## 6.9 Random

## 6.10 System

## 6.11 UUID

<a-back-top />