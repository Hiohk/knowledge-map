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
  - `+` 既可以进行求和，也可以进行字符串的拼接，底层拼接时会创建 StringBuilder 对象进行拼接。`+` 拼接 null 时不会出现空指针异常。
  - `concat` 方法参数只能时字符串类型，拼接时不会创建 StringBuilder 对象，拼接完成后返回一个新的 String 对象。拼接 null 会出现空指针异常。
  - `+` 使用较多。如果进行大量字符串拼接，这两个都不合适。
- `String substring(int beginIndex);`: 从指定下标 beginIndex 开始截取子字符串
- `String substring(int beginIndex, int endIndex);`
- `String trim();`: 去除字符串前后空白（只能去除 ASCII 码中的空格和制表符）
- `String strip();`: 去除字符串前后空白（支持所有的编码形式的空白，可以将全角空格去除，\u3000 是全角空格，Java11 新增）

- `String stripLeading();` 去除前空白
- `String stripTrailing();` 去除后空白
- `String toString();` new String(original) 默认重写了 toString() 方法。
- `String intern();` 获取字符串常量池中的字符串，如果常量池中没有，则将字符串加入常量池并返回。
```java
byte[] bytes = {97,98,99,100};
String s = new String(bytes);
String s2 = s.intern();
// 将字符串 "abcd" 放入字符串常量池并返回常量池中的字符串 "abcd"
```
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
### StringBuffer 和 StringBuilder：可变长度字符串
1. 这两个类是专门为频繁进行字符串拼接而准备。
2. StringBuffer 先出现的，Java5 的时候新增了 StringBuilder，StringBuffer 是线程安全的。在不需要考虑线程安全问题的情况下优先选择 StringBuilder，效率较高一些。
3. 底层是 byte[] 数组，并且这个 byte[] 数组没有被 final 修饰，这说明如果 byte[] 数组满了，可以创建一个更大的新数组来达到扩容，然后它可以重新指向这个新的数组对象。
4. 优化策略：创建 StringBuilder 对象时，预估计字符串的长度，给定一个合适的初始化容量，减少底层数组的扩容。
5. StringBuilder默认初始化容量：16
6. StringBuilder 一次扩容多少？可以通过 Debug 跟踪一下 append 方法。扩容策略是：从当前容量开始，每次扩容为原来的2倍再加上2。

### StringBuffer 和 StringBuilder 构造方法
- `StringBuilder()`: 构造一个字符串生成器，其中不包含任何字符，初始容量为16个字符。
- `StringBuilder(int capacity)`: 构造一个字符串生成器，其中不包含任何字符，并且具有由容量参数指定的初始容量。
- `StringBuilder(String str)`: 构造初始化为指定字符串内容的字符串生成器。

### StringBuffer 和 StringBuilder 常用方法
- `StringBuilder append(Type data);`
- `StringBuilder delete(int start, int end);`
- `StringBuilder deleteCharAt(int index);`
- `StringBuilder insert(int offset, String str);`
- `StringBuilder replace(int start, int end, String str);`
- `StringBuilder reverse();`
- `void setCharAt(int index, char ch);`
- `void setLength(int newLength);`
- `char charAt(int index);`
- `int indexOf(String str);`
- `int indexOf(String str, int fromIndex);`
- `int lastIndexOf(String str);`
- `int lastIndexOf(String str, int fromIndex);`
- `int length();`
- `String substring(int start);`
- `String substring(int start, int end);`
- `String toString();`

### String 的效率问题
以下这种写法尽量避免，效率太低：
```java
String s = “”;
for(int i = 0; i < 100000; i++){
    // 优化策略：底层会新建一个StringBuilder对象
    // 然后调用StringBuilder的append(i)方法进行追加
    // 然后再调用StringBuilder toString()方法转成String类型
    // 也就是说：这里会频繁的创建String对象，导致效率很低
    // 同时给GC带来巨大压力。
    s += i;
}
```

因此建议使用下面的方式，只创建一个StringBuilder对象。
```java
long begin = System.currentTimeMillis();
StringBuilder s = new StringBuilder();
for (int i = 0; i < 100000; i++) {
    s.append(i);
}
long end = System.currentTimeMillis();
System.out.println(end-begin);
```

String、StringBuilder、StringBuffer效率PK。

## 6.3 包装类
### 什么是包装类？有什么用？
为了方便开发，Java为8种基本数据类型分别又提供了对应的包装类。（包装类都是引用数据类型。）
| 8种基本数据类型 | 包装类                  |
| --------------- | ----------------------- |
| byte            | java.lang.Byte          |
| short           | java.lang.Short         |
| int             | java.lang.**Integer**   |
| long            | java.lang.Long          |
| float           | java.lang.Float         |
| double          | java.lang.Double        |
| boolean         | java.lang.Boolean       |
| char            | java.lang.**Character** |

其中 Integer 使用最多，以它为代表进行学习。

包装类中的 6 个数字类型都继承了 Number 类：

Byte、Short、Integer、Long、Float、Double 都继承了 Number 类，因此这些类中都有以下这些方法：
- `byteValue()`
- `shortValue()`
- `intValue()`
- `longValue()`
- `floatValue()`
- `doubleValue()`
  
这些方法的作用就是将包装类型的数据转换为基本数据类型。包装类转换成基本数据类型的过程我们称为：拆箱(unboxing)。

Boolean的拆箱方法：`booleanValue()`; Character的拆箱方法：`charValue()`;

### Integer 的常量
通过 Integer 提供的常量可以获取 int 的最大值和最小值：
- 最大值：`Integer.MAX_VALUE`
- 最小值：`Integer.MIN_VALUE`

当然，其它 5 个数字包装类也有对应的常量：
- byte最大值：`Byte.MAX_VALUE`
- byte最小值：`Byte.MIN_VALUE`
- short最大值：`Short.MAX_VALUE`
- short最小值：`Short.MIN_VALUE`

### Integer 的构造方法
1. `Integer(int value)`
  - Java9 之后标记已过时，不建议使用。
  - 该构造方法可以将基本数据类型转换成包装类。这个过程我们称为装箱 boxing
2. `Integer(String s)`
  - Java9之后标记已过时，不建议使用。
  - 该构造方法可以将字符串数字转换成包装类。但字符串必须是整数数字，如果不是会出现异常：NumberFormatException

其它包装类的构造方法也是如此，例如 Boolean 的构造方法:
  - `Boolean(boolean value)`
  - `Boolean(String s)`
以上两个构造方法也都在 Java9 的时候标记已过时。

### Integer 的常用方法
- `static int compare(int x, int y)` 比较大小
- `static int max(int a, int b)` 最大值
- `static int min(int a, int b)` 最小值
- `static int parseInt(String s)` 将字符串数字转换成数字类型。其它包装类也有这个方法：Double.parseDouble(String s)
- `static String toBinaryString(int i)` 获取数字二进制的字符串表示形式
- `static String toHexString(int i)` 获取数字十六进制的字符串表示形式
- `static String toOctalString(int i)` 获取数字八进制的字符串表示形式
- `int compareTo(Integer anotherInteger)` 比较大小，可见实现了 Comparable 接口
- `boolean equals(Object obj)` 包装类已经重写了 equals() 方法。
- `String toString();` 包装类已经重写了 toString()方法。
- `int intValue()` 将包装类拆箱为基本数据类型
- `static String toString(int i)` 将基本数据类型转换成字符串
- `static Integer valueOf(int i)` 将基本数据类型转换成 Integer
- `static Integer valueOf(String s)` 将字符串转换成 Integer（这个字符串必须是数字字符串才行，不然出现 NumberFormatException）

### 三种类型之间的互相转换
String、int、Integer三种类型之间的互相转换（String,double,Double转换原理相同）:
![alt text](image-11.png)

注：Integer ——> int: `Integer A = new Integer(5); int a = A.intValue();`

### Java5 新特性：自动装箱和自动拆箱
Java5 之后为了开发方便，引入了新特性：自动拆箱和自动装箱。

- 自动装箱：auto boxing: 
```java
Integer a = 10000;
// 底层实际上的操作：Integer a = new Integer(10000);
```
- 自动拆箱：auto unboxing: 
```java
Integer a = 10000;
int b = a; // 底层实际上的操作：int b = a.intValue();
System.out.println(a + 1); // 这里的 a 也会做自动拆箱。
```
  
注意空指针异常：
```java
Integer a = null;
System.out.println(a + 1);
```

以上代码出现空指针异常的原因是 a 在进行自动拆箱时，会调用 a.intValue()方法。
因为 a 是 null，访问实例方法会出现空指针异常，因此使用时应注意。

### 整数型常量池
1. [-128 ~ 127] Java 为这个区间的Integer 对象创建了**整数型常量池**。
2. 也就是说如果整数没有超出范围的话，直接从整数型常量池获取 Integer 对象。

以下是一个面试题：请说出它的输出结果：
```java
Integer x = 128;
Integer y = 128;
System.out.println(x == y); // false
Integer a = 127;
Integer b = 127;
System.out.println(a == b); // true
```

## 6.4 大数字

1. 如果整数超过 long 的最大值怎么办？

java 中提供了一种引用数据类型来解决这个问题：java.math.BigInteger。它的父类是 Number。

常用构造方法：`BigInteger(String val)`。

常用方法：
- `BigInteger add(BigInteger val)`:	求和
- `BigInteger subtract(BigInteger val)`:	相减
- `BigInteger multiply(BigInteger val)`:	乘积
- `BigInteger divide(BigInteger val)`:	商
- `int compareTo(BigInteger val)`:	比较
- `BigInteger abs()`: 绝对值
- `BigInteger max(BigInteger val)`:	最大值
- `BigInteger min(BigInteger val)`:	最小值
- `BigInteger pow(int exponent)`:	次幂
- `BigInteger sqrt()`: 平方根

1. 如果浮点型数据超过 double 的最大值怎么办？

java 中提供了一种引用数据类型来解决这个问题：java.math.BigDecimal（经常用在财务软件中）。它的父类是Number。

构造方法：`BigDecimal(String val)`。

常用方法：
- `BigDecimal add(BigDecimal augend)`: 求和
- `BigDecimal subtract(BigDecimal subtrahend)`:	相减
- `BigDecimal multiply(BigDecimal multiplicand)`:	乘积
- `BigDecimal divide(BigDecimal divisor)`: 商
- `BigDecimal max(BigDecimal val)`:	最大值
- `BigDecimal min(BigDecimal val)`:	最小值
- `BigDecimal movePointLeft(int n)`:	向左移动小数点
- `BigDecimal movePointRight(int n)`:	向右移动小数点

1. 数字格式化
有时我们需要将数字以某种格式展示，在 java 中如何格式化呢？
- `java.text.DecimalFormat` 类是专门用来对数字进行格式的。
- 常用数字格式：
  - `###,###.##`    // 三个数字为一组，组和组之间使用逗号隔开，保留两位小数
  - `###,###.0000`  // 三个数字为一组，组和组之间使用逗号隔开，保留4位小数，不够补0
- 构造方法：`DecimalFormat(String pattern)`
- 常用方法：`String format(数字)`


## 6.5 日期处理
### 日期相关 API
1. `long l = System.currentTimeMillis();` // 获取自1970年1月1日0时0分0秒到系统当前时间的总毫秒数。
2. java.util.Date 日期类
   - 构造方法：Date()
   - 构造方法：Date(long 毫秒)
3. java.util.SimpleDateFormat 日期格式化类
   - 日期转换成字符串（java.util.Date -> java.lang.String）
  ```java
  Date now = new Date();
  SimpleDateFormat simpleDateFormat = 
        new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS");
  String str = simpleDateFormat.format(now);
  System.out.println(str);
  //2024-04-05 11:14:46 383
  ```
   - 字符串转换成日期（java.lang.String -> java.util.Date）
  ```java
  String strDate = "2024-04-05 11:14:46 383";
  SimpleDateFormat simpleDateFormat = 
        new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS");
  Date date = simpleDateFormat.parse(strDate);
  System.out.println(date);
  // Fri Apr 05 11:14:46 CST 2024
  ```
1. java.util.Calendar 日历类
  - 获取当前时间的日历对象：Calendar c = Calendar.getInstance();
  - 获取日历中的某部分：int year = c.get(Calendar.YEAR);
      - `Calendar.YEAR` 获取年份			
      - `Calendar.MONTH` 获取月份，0表示1月，1表示2月，...，11表示12月
      - `Calendar.DAY_OF_MONTH` 获取本月的第几天	
      - `Calendar.DAY_OF_YEAR` 获取本年的第几天
      - `Calendar.HOUR_OF_DAY` 小时，24小时制		
      - `Calendar.HOUR` 小时，12小时制
      - `Calendar.MINUTE` 获取分钟		
      - `Calendar.SECOND` 获取秒
      - `Calendar.MILLISECOND` 获取毫秒		
      - `Calendar.DAY_OF_WEEK` 获取星期几，1表示星期日，...，7表示星期六

  - java.util.Calendar 日历类:
      - `calendar.set(Calendar.YEAR, 2023)` 日历的set方法：设置日历  
      - `calendar.set(2008, Calendar.SEPTEMBER,8)` 日历的set方法：设置日历 
      - `calendar.add(Calendar.YEAR, 1)` 日历的add方法（日历中各个部分的加减）
      - `calendar.setTime(new Date())` 日历对象的setTime()让日历关联具体的时间
      - `Date time = calendar.getTime()` 日历对象的getTime()方法获取日历的具体时间

## 6.6 Java8 的新日期 API
传统的日期API存在线程安全问题，Java8 又提供了一套全新的日期API:

- `java.time.LocalDate`、`java.time.LocalTime`、`java.time.LocalDateTime`: 日期、时间、日期时间
- `java.time.Instant`: 时间戳信息
- `java.time.Duration`: 计算两个时间对象之间的时间间隔，精度为纳秒
- `java.time.Period`: 计算两个日期之间的时间间隔，以年、月、日为单位
- `java.time.temporal.TemporalAdjusters`: 提供了一些方法用于方便的进行日期时间调整
- `java.time.format.DateTimeFormatter`: 用于进行日期时间格式化和解析

### LocalDate日期、LocalTime时间、LocalDateTime日期时间
1. 获取当前时间（精确到纳秒，1秒=1000毫秒，1毫秒=1000微秒，1微秒=1000纳秒）
  ```java
  LocalDateTime now = LocalDateTime.now(); 
  ```
2. 获取指定日期时间
```java
LocalDateTime ldt = LocalDateTime.of(2008,8,8,8,8,8,8);
// 获取指定的日期时间
```
3. 加日期和加时间
```java
LocalDateTime localDateTime = 
      ldt.plusYears(1).plusMonths(1).plusDays(1).plusHours(1)
         .plusMinutes(1).plusSeconds(1).plusNanos(1);
```
4. 减日期和减时间 
```java
LocalDateTime localDateTime = 
      ldt.minusYears(1).minusMonths(1).minusDays(1).minusHours(1)
         .minusMinutes(1).minusSeconds(1).minusNanos(1);
```
5. 获取年月日时分秒
```java
int year = now.getYear(); // 年			
int month = now.getMonth().getValue(); // 月
int dayOfMonth = now.getDayOfMonth(); // 一个月的第几天	
int dayOfWeek = now.getDayOfWeek().getValue(); // 一个周第几天
int dayOfYear = now.getDayOfYear(); // 一年的第几天	
int hour = now.getHour(); // 时
int minute = now.getMinute(); // 分			
int second = now.getSecond(); // 秒
int nano = now.getNano(); // 纳秒
```

### Instant 时间戳
Instant 时间戳——获取 1970 年 1 月 1 日 0 时 0 分 0 秒到某个时间的时间戳。
1. 获取系统当前时间（UTC：全球标准时间）
```java
Instant instant = Instant.now(); 
```
2. 获取时间戳
```java
long epochMilli = instant.toEpochMilli(); 
```

### Duration 计算时间间隔
计算两个时间相差时间间隔:
```java
LocalDateTime now1 = LocalDateTime.of(2008,8,8,8,8,8);
LocalDateTime now2 = LocalDateTime.of(2009,9,9,9,9,9);
Duration between = Duration.between(now1, now2);
// 两个时间差多少个小时
System.out.println(between.toHours());
// 两个时间差多少天
System.out.println(between.toDays());
```

### Period 计算日期间隔
计算两个日期间隔:
```java
LocalDate now1 = LocalDate.of(2007,7,7);
LocalDate now2 = LocalDate.of(2008,8,8);
Period between = Period.between(now1, now2);
// 相差年数
System.out.println(between.getYears());
// 相差月数
System.out.println(between.getMonths());
// 相差天数
System.out.println(between.getDays());
```

#### TemporalAdjusters 时间矫正器
```java
LocalDateTime now = LocalDateTime.now(); // 获取系统当前时间
now.with(TemporalAdjusters.firstDayOfMonth()); // 当前月的第一天
now.with(TemporalAdjusters.firstDayOfNextYear()); // 下一年的第一天
now.with(TemporalAdjusters.lastDayOfYear()); // 本年最后一天
now.with(TemporalAdjusters.lastDayOfMonth()); // 本月最后一天
now.with(TemporalAdjusters.next(DayOfWeek.MONDAY)); // 下周一
......
```

### DateTimeFormatter 日期格式化
1. 日期格式化 （LocalDateTime --> String）
```java
LocalDateTime now = LocalDateTime.now();
DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
String s = dtf.format(now);
```
1. 将字符串转换成日期（String --> LocalDateTime）
```java
DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
LocalDateTime localDateTime = LocalDateTime.parse("2008-08-08 08:08:08", dtf);
System.out.println(localDateTime);
```

## 6.7 Math
java.lang.Math 数学工具类，都是静态方法。

1. 常用属性：`static final double PI`（圆周率）

2. 常用方法：
- `static int abs(int a)`			绝对值
- `static double ceil(double a)`	向上取整
- `static double floor(double a)`	向下取整
- `static int max(int a, int b)`	最大值
- `static int min(int a, int b)`	最小值
- `static double random()`		随机数[0.0, 1.0)     
- `int num = (int)(Math.random() * 100)` 可以获取[0-100)的随机数
- `static long round(double a)`		四舍五入
- `static double sqrt(double a)`	平方根
- `static double pow(double a, double b)`  a的b次幂

## 6.8 枚举（Java5新特性）
### 枚举的基本用法
1. 枚举类型在Java中是一种引用数据类型。
2. 合理使用枚举类型可以让代码更加清晰、可读性更高，可以有效地避免一些常见的错误。
3. 什么情况下考虑使用枚举类型？
  - 这个数据是有限的，并且可以一枚一枚列举出来的。
  - 枚举类型是类型安全的，它可以有效地防止使用错误的类型进行赋值。
4. 枚举如何定义？以下是最基本的格式：
```java
enum 枚举类型名 {
    枚举值1, 枚举值2, 枚举值3, 枚举值4
}
```
5. 通过反编译(javap)可以看到：
- 所有枚举类型默认继承 java.lang.Enum，因此枚举类型无法继承其他类
- 所有的枚举类型都被 final 修饰，所以枚举类型是无法继承的
- 所有的枚举值都是常量
- 所有的枚举类型中都有一个 values 数组（可以通过 values() 获取所有枚举值并遍历）


### 枚举的高级用法
1. 普通类中可以编写的元素，枚举类型中也可以编写。
- 静态代码块，构造代码块
- 实例方法，静态方法
- 实例变量，静态变量
2. 枚举类中的构造方法是私有化的（默认就是私有化的，只能在本类中调用）
- 构造方法调用时不能用 new。直接使用“枚举值(实参);”调用。
- 每一个枚举值相当于枚举类型的实例。
3. 枚举类型中如果编写了其他代码，必须要有枚举值，枚举值的定义要放到最上面，
最后一个枚举值的分号不能省略。
4. 枚举类因为默认继承了 java.lang.Enum，因此不能再继承其他类，但可以实现接口。
- 第一种实现方式：在枚举类中实现。
- 第二种实现方式：让每一个枚举值实现接口。

## 6.9 Random
`java.util.Random`: 随机数生成器（生成随机数的工具类）。

常用构造方法：`Random()`

常用方法：
 - `int nextInt()`: 获取一个 int 类型取值范围内的随机 int 数
 - `int nextInt(int bound)`: 获取 [0,bound) 区间的随机数
 - `double nextDouble()`: 获取 [0.0, 1.0) 的随机数。

## 6.10 System
java.lang.System类的常用方法：

1. 常用属性：
- `static final PrintStream err` 标准错误输出流（System.err.println(“错误信息”);输出红色字体）
- `static final InputStream in` 标准输入流
- `static final PrintStream out` 标准输出流

2. 常用方法：
- `static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)` 数组拷贝
- `static void exit(int status)` 退出虚拟机
- `static void gc()` 建议启动垃圾回收器
- `static long currentTimeMillis()` 获取自1970-01-01 00:00:00 000到系统当前时间的总毫秒数
- `static long nanoTime()` 获取自1970年1月1日0时0分0秒以来，当前时间的纳秒数
- `static Map<String,String> getenv()` 获取当前系统的环境变量，例如 Path，JAVA_HOME，CLASSPATH 等。
- `static Properties getProperties()` 获取当前系统的属性。
- `static String getProperty(String key)` 通过key获取指定的系统属性。

## 6.11 UUID
UUID（通用唯一标识符）是一种软件构建的标准，用来生成具有唯一性的 ID。

UUID 具有以下特点：
1. UUID 可以在分布式系统中生成唯一的标识符，避免因为主键冲突等问题带来的麻烦。
2. UUID 具有足够的唯一性，重复的概率相当低。UUID 使用的是 128 位数字，除了传统的 16 进制表示之外（32 位的 16 进制表示），还有基于 62 进制的表示，可以更加简洁紧凑。
3. UUID 生成时不需要依赖任何中央控制器或数据库服务器，可以在本地方便、快速地生成唯一标识符。
4. UUID 生成后可以被许多编程语言支持并方便地转化为字符串表示形式，适用于多种应用场景。

在 Java 开发中，UUID 的使用是非常普遍的。它可以用于生成数据表主键、场景标识、链路追踪、缓存 Key 等。使用 UUID 可以方便地避免主键、缓存Key等因冲突而产生的问题，同时能够实现多种功能，例如追踪、缓存、日志记录等。

Java 中的 java.util.UUID 类提供对 UUID 的支持:
- 生成 UUID：`static UUID randomUUID()`
- 将 UUID 转换为字符串：`String toString()`

<a-back-top />