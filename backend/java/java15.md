---
prev:
  text: "Stream 流"
  link: "/backend/java/java14"
next: false
---

# 15. Java 新特性

## 15.1 Java9 ~ Java21 新特性概述 :star:

纵观 Java 这几年的版本变化，在 Java 被收入 Oracle 之后，Java 以小步快跑的迭代方式，在功能更新上迈出了更加轻快的步伐。基于时间发布的版本，可以让 Java 研发团队及时获得开发人员的反馈，因此可以看到最近的 Java 版本，有很多语法层面简化的特性。同时，Java 在支持容器化场景，提供低延迟的 GC 方面(ZGC 等)也取得了巨大的进步。

注意一个新特性的出现通常会经过以下阶段：

1. 孵化器（Incubator）阶段：这是新特性最早的开发和试验阶段，此时新特性只能作为一个单独的模块或库出现，而不会包含在 Java SE 中。在这个阶段，特性的设计可能会有些不稳定，而且会经常调整和变更。
2. 预览（Preview）阶段：在经过了孵化器阶段的验证和修改后，新特性进入了预览阶段，这是一种在 Java SE 内部实现的，开发人员可以使用并对其提供反馈的渠道。此时特性可能被包含在 Java SE 版本中，但是它默认是未开启的，需要通过特定的命令行参数或其他方式进行启用。
3. 正式版（GA）阶段：在经过了预览阶段的反复测试和修复后，新特性最终会在 Java SE 的稳定版本中发布。此时，特性被默认开启，成为 Java SE 的一部分，并可以在各个 Java 应用程序中使用。

需要注意的是，上述阶段并非一成不变，并不是所有 JEP（Java Enhancement Proposal：Java 增强方案）都需要经过孵化器阶段和预览阶段，这取决于特定的提案和规划。但是，Java SE 领导小组通常会遵循这些阶段的流程，以确保新特性可以经过充分的评估和测试，以便能够稳定和可靠地使用在 Java 应用程序中。

在以下的内容中，我们对 Java9 到 Java21 新特性做一个简单的概述。

### Java 9 新特性

Java 9 经过 4 次推迟，历经曲折的 Java 9 最终在 2017 年 9 月 21 日发布，提供了超过 150 项新功能特性。

* JEP 261: Module System
  + JDK 9 开始引入的一种全新的模块化编程方式。JPMS 的目的是为了更好地支持大型应用程序的开发和维护，同时也可以使 Java 程序在更为动态、可移植和安全的环境下运行。
* JEP 222: jshell: The Java Shell (Read-Eval-Print Loop)
  + 一种交互式的 Java Shell，可以在命令行上快速地进行 Java 代码的编写、验证和执行，从而提高开发者的生产力。
* JEP 213: Milling Project Coin（细化工程改进，该计划旨在引入小型语言特性来提高代码的简洁性和可读性）
  + 在 Java 9 中，@SafeVarargs 注解可以用于一个私有实例方法上。在 Java 7 和 Java 8 中，@SafeVarargs 注解只能用于静态方法、final 实例方法和构造函数。
  + 在 Java 9 中，可以将效果等同于 final 变量作为 try-with-resources 语句块中的资源来使用。在 Java 7/8 中，try-with-resources 语句块中的资源必须是显式的 final 或事实上的 final（即变量在初始化后未被修改），否则编译器会报错。这个限制限制了 Java 程序员使用 try-with-resources 语句块的能力，特别是在涉及 lambda 表达式、匿名类或其他读取外部变量的代码段时。
  + Java 9 允许在匿名类实例化时使用钻石操作符(<>)来简化代码，但参数类型必须是具体的、可推导的类型。
  + 从 Java 9 开始，不能使用一个单一的“\_”作为标识符了。
  + 从 Java 9 开始，接口中支持定义私有方法。
* JEP 224: HTML5 Javadoc
  + 从 Java 9 开始，javadoc 开始支持 HTML5 的语法。
* JEP 254: Compact Strings

### Java 10 新特性

2018 年 3 月 21 日，Oracle 官方宣布 JAVA 10 正式发布。JAVA 10 一共定义了 109 个新特性，其中包含 JEP，对开发人员来说，真正的新特性也就一个，还有一些新的 API 和 JVM 规范以及 JAVA 语言规范上的改动。

* JEP 286：局部变量类型推断
* JEP 296：将 JDK 森林合并到单个存储库中
* JEP 304：垃圾收集器接口
* JEP 307：G1 的并行完整 GC
* JEP 310：应用程序类数据共享
* JEP 312：线程局部握手
* JEP 313：删除本机头生成工具 (javah)
* JEP 314：附加 Unicode 语言标签扩展
* JEP 316：替代内存设备上的堆分配
* JEP 317：基于 Java 的实验性 JIT 编译器
* JEP 319：根证书
* JEP 322：基于时间的发布版本控制

### Java 11 新特性

2018 年 9 月 26 日，Oracle 官方发布 JAVA 11。这是 JAVA 大版本周期变化后的第一个长期支持版本，官方支持到 2026 年。

* JEP 181：基于 Nest 的访问控制
* JEP 309：动态类文件常量
* JEP 315：改进 Aarch64 内部函数
* JEP 318：Epsilon：无操作垃圾收集器
* JEP 320：删除 Java EE 和 CORBA 模块
* JEP 321：HTTP 客户端（标准）
* JEP 323：本地变量语法 LAMBDA 参数
* JEP 324：与 Curve25519 密钥协商和 Curve448
* JEP 327：Unicode 的 10
* JEP 328：飞行记录器
* JEP 329：ChaCha20 和 Poly1305 加密算法
* JEP 330：启动单文件源代码程序
* JEP 331：低开销堆纹
* JEP 332：传输层安全性 (TLS) 1.3
* JEP 333：ZGC：可扩展的低延迟垃圾收集器（实验性）
* JEP 335：弃用 Nashorn JavaScript 引擎
* JEP 336：弃用 Pack200 工具和 API

### Java 12 新特性

2019 年 3 月 19 日，java12 正式发布。

* JEP 189：Shenandoah：一个低暂停时间的垃圾收集器（实验性）
* JEP 230：微基准套件
* JEP 325：switch 表达式（预览）
* JEP 334：JVM 常量 API
* JEP 340：一个 AArch64 端口
* JEP 341：默认 CDS 档案
* JEP 344：G1 支持可中断的 Mixed GC
* JEP 346：及时从 G1 返回未使用的已提交内存

### Java 13 新特性

* JEP 350：动态 CDS 档案
* JEP 351：ZGC：取消提交未使用的内存
* JEP 353：重新实现旧的 Socket API
* JEP 354：开关表达式（预览）
* JEP 355：文本块（预览）

### Java 14 新特性

* JEP 305：instanceof 的模式匹配（预览）
* JEP 343：包装工具（孵化器）
* JEP 345：G1 的 NUMA 感知内存分配
* JEP 349：JFR 事件流
* JEP 352：非易失性映射字节缓冲区
* JEP 358：有用的空指针异常
* JEP 359：记录（预览）
* JEP 361： switch 表达式（标准）
* JEP 362：弃用 Solaris 和 SPARC 端口
* JEP 363：删除并发标记清除 (CMS) 垃圾收集器
* JEP 364：macOS 上的 ZGC
* JEP 365：Windows 上的 ZGC
* JEP 366：弃用 ParallelScavenge + SerialOld GC 组合
* JEP 367：删除 Pack200 工具和 API
* JEP 368：文本块（第二次预览）
* JEP 370：外部内存访问 API（孵化器）

### Java 15 新特性

* JEP 339：爱德华兹曲线数字签名算法 (EdDSA)
* JEP 360：密封类（预览）
* JEP 371：隐藏类
* JEP 372：删除 Nashorn JavaScript 引擎
* JEP 373：重新实现旧版 DatagramSocket API
* JEP 374：禁用和弃用偏向锁定
* JEP 375：instanceof 的模式匹配（第二次预览，无改动）
* JEP 377：ZGC：可扩展的低延迟垃圾收集器（确定正式版）
* JEP 378：文本块（确定正式版）
* JEP 379：Shenandoah：一个低暂停时间的垃圾收集器（确定正式版）
* JEP 381：删除 Solaris 和 SPARC 端口
* JEP 383：外内存访问 API（第二孵化器）
* JEP 384：记录（第二次预览）
* JEP 385：弃用 RMI 激活以进行删除

### Java 16 新特性

* JEP 338：Vector API（孵化器）
* JEP 347：启用 C++14 语言功能
* JEP 357：从 Mercurial 迁移到 Git
* JEP 369：迁移到 GitHub
* JEP 376：ZGC：并发线程栈处理
* JEP 380：Unix 域套接字通道
* JEP 386：Alpine Linux 端口
* JEP 387：弹性元空间
* JEP 388：Windows/AArch64 端口
* JEP 389：外链 API（孵化器）
* JEP 390：基于值的类的警告
* JEP 392：打包工具
* JEP 393：外内存访问 API（第三孵化器）
* JEP 394：instanceof 的模式匹配
* JEP 395：记录
* JEP 396：默认情况下强封装 JDK 内部
* JEP 397：密封类（第二次预览）

### Java 17 新特性

2021 年 9 月 14 日，java 17 正式发布（LTS）。长期支持版，支持到 2029 年。Oracle 宣布，从 JDK 17 开始，后面的 JDK 都全部免费提供。

* JEP 306：恢复始终严格的浮点语义
* JEP 356：增强型伪随机数发生器
* JEP 382：新的 macOS 渲染管线
* JEP 391：macOS/AArch64 端口
* JEP 398：弃用 Applet API 以进行删除
* JEP 403：强封装 JDK 内部
* JEP 406：switch 模式匹配（预览）
* JEP 407：删除 RMI 激活
* JEP 409：密封类（正式确定）
* JEP 410：删除实验性 AOT 和 JIT 编译器
* JEP 411：弃用安全管理器以进行删除
* JEP 412：外部函数和内存 API（孵化器）
* JEP 414：Vector API（第二孵化器）
* JEP 415：上下文特定的反序列化过滤器

### Java 18 新特性

2022 年 3 月 22 日发布。非长期支持版本。

* JEP 400：从 JDK18 开始，UTF-8 是 Java SE API 的默认字符集。
* JEP 408：从 JDK18 开始，引入了 jwebserver 这样一个简单的 WEB 服务器，它是一个命令工具。
* JEP 416：使用方法句柄重新实现核心反射
* JEP 418：互联网地址解析 SPI
* JEP 413：Java API 文档中的代码段（javadoc 注释中使用）
* JEP 417：Vector API（第三孵化器）
* JEP 419：Foreign Function & Memory API（第二孵化器）
* JEP 420：switch 的模式匹配（第二次预览）
* JEP 421：Object 中的 finalize()方法被移除

### Java 19 新特性

2022 年 9 月 20 日发布。非长期支持的版本。直到 2023 年 3 月它将被 JDK 20 取代。

* JEP 425：虚拟线程（预览版）
  + 一种新的线程模型，即虚拟线程；"虚拟线程" 指的是一种轻量级线程，可以通过 JVM 进行管理和调度，而不需要操作系统进行支持
* JEP 428：结构化并发（孵化器）
  + 一组新的 API 和规范，用于优化并简化 Java 程序的并发编程
* JEP 405：Record 模式 (预览版)
* JEP 427：switch 语句中的模式匹配（第三次预览版）
  + "switch 语句中的模式匹配"表示该特性是针对 switch 语句的改进，可以使用模式匹配的方式处理 switch 语句中的分支
* JEP 424：外部函数和内存 API（预览版）
  + “外部函数”指的是在 Java 程序中调用非 Java 语言编写的函数，比如 C/C++函数
  + “内存 API”指的是在 Java 程序中直接操作内存的 API
* JEP 426：向量 API（第四版孵化器）
  + 一组专用于向量化处理的 API，允许在 Java 程序中轻松高效地执行向量化计算

### Java 20 新特性

2023 年 3 月 21 日发布。非长期支持版本。直到 2023 年 9 月它将被 JDK 21 取代。

* JEP 432： Record 模式(第二次预览版)
* JEP 433： switch 的模式匹配 (第四次预览版)
* JEP 434： 外部函数和内存 API（第二次预览版）
* JEP 438： 向量 API (第五版孵化器)
* JEP 429： Scoped Values (Incubator)
* JEP 436： 虚拟线程(第二次预览版)
* JEP 437： 结构化并发（第二版孵化器）

### Java 21 新特性

2023 年 9 月 19 日发布。长期支持版本。

* JEP 440：Record 模式（正式确定）
* JEP 441：switch 的模式匹配（正式确定）
* JEP 430：String Templates (Preview)
* JEP 443：Unnamed Patterns and Variables (Preview)
* JEP 445：Unnamed Classes and Instance Main Methods (Preview)
* JEP 444：Virtual Threads（正式确定）
* JEP 431：Sequenced Collections（正式确定）
* JEP 452：Key Encapsulation Mechanism API
* JEP 442：Foreign Function & Memory API (Third Preview)
* JEP 453：Structured Concurrency (Preview)
* JEP 446：Scoped Values (Preview)
* JEP 448：Vector API (Sixth Incubator)
* JEP 439：Generational ZGC
* JEP 451：Prepare to Disallow the Dynamic Loading of Agents

## 15.2 新语法方面的变化 :rocket:

### jShell 命令

jShell 命令是 Java9 引进的新特性，像 Python 和 Scala 之类的语言早就有交互式编程环境 REPL (read-evaluate-print-loop)，以交互式的方式对语句和表达式进行求值。开发者只需要输入一些代码，就可以在编译前获得对程序的反馈。而之前的 Java 版本要想执行代码，必须创建文件、声明类、提供测试方法方可实现。

### try-with-resources

众所周知，所有被打开的系统资源，比如流、文件、Socket 连接等，都需要被开发者手动关闭，否则随着程序的不断运行，资源泄露将会累积成重大的生产事故。在 Java7 以前，我们想要关闭资源就必须的 finally 代码块中完成。

`example` : Java7 之前资源的关闭的方式

```Java
public void copyFile1(File srcFile, File destFile) {
    FileInputStream fis = null;
    FileOutputStream fos = null;
    try {
        // 实例化IO流（输入流和输出流）
        fis = new FileInputStream(srcFile);
        fos = new FileOutputStream(destFile);
        // 拷贝文件（存储和读取）
        int len = 0;
        byte[] bytes = new byte[1024];
        while ((len = fis.read(bytes)) != -1) {
            fos.write(bytes, 0, len);
        }
    } catch (FileNotFoundException e) {
        e.printStackTrace();
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 关闭资源
        if (fis != null) {
            try {
                fis.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        if (fos != null) {
            try {
                fos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

Java 7 及以后关闭资源的正确姿势：try-with-resource，该语法格式为：

```Java
try(/*实例化需要关闭资源的对象或引用需要关闭资源的对象*/){
	// 书写可能出现异常的代码
} catch(Exception e) {
	// 处理异常
}
```

**使用 try-with-resource 来自动关闭资源，则需要关闭资源的对象对应的类就必须实现 `java.lang.AutoCloseable` 接口**，该接口中提供了一个 close()的抽象方法，而自动关闭资源默认调用的就是实现于 java.lang. AutoCloseable 接口中的 close()方法。因为 FileInputStream 类和 FileOutputStream 类都属于 java.lang. AutoCloseable 接口的实现类，因此此处文件拷贝的操作就可以使用 try-with-resource 来自动关闭资源。

`example` : Java7 之后资源的关闭的方式

```Java
public void copyFile(File srcFile, File destFile) {
    // 实例化IO流（输入流和输出流）
    try (FileInputStream fis = new FileInputStream(srcFile);
         FileOutputStream fos = new FileOutputStream(destFile)) {
        // 拷贝文件（存储和读取）
        int len = 0;
        byte[] bytes = new byte[1024];
        while ((len = fis.read(bytes)) != -1) {
            fos.write(bytes, 0, len);
        }
    } catch (FileNotFoundException e) {
        e.printStackTrace();
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

通过 try-with-resource 来关闭放资源，即使资源很多，代码也可以写的很简洁，如果用 Java7 之前的方式去关闭资源，那么资源越多，用 finally 关闭资源时嵌套也就越多。

在 Java9 之后，为了避免在 try 后面的小括号中去实例化很多需要关闭资源的对象（复杂），则就可以把需要关闭资源的多个对象在 try 之前实例化，然后在 try 后面的小括号中引用需要关闭资源的对象即可，从而提高了代码的可读性。

`example` : Java 9 之后的使用方式

```Java
public void copyFile(File srcFile, File destFile) throws FileNotFoundException {
    // 实例化IO流（输入流和输出流）
    FileInputStream fis = new FileInputStream(srcFile);
    FileOutputStream fos = new FileOutputStream(destFile);
    // 拷贝文件（存储和读取）
    try (fis; fos) {
        int len = 0;
        byte[] bytes = new byte[1024];
        while ((len = fis.read(bytes)) != -1) {
            fos.write(bytes, 0, len);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

在以上代码中，表达式中引用了 fis 和 fos，那么在 fis 和 fos 就自动变为常量啦，也就意味着在 try 代码块中不能修改 fis 和 fos 的指向，从而保证打开的资源肯定能够关闭。

### 局部变量类型判断

在 Java 10 中，新增了局部变量类型判断。在方法体或代码块中，对于可以在编译期确定的类型，可以使用 var 来定义。这个特性并不意味着 java 是弱类型的语言，仅是提供了更简洁的书写方式。对于编译期无法确定的类型，依然要写清楚类型。

`example` : 局部变量类型判断案例

```Java
// 使用var来作为变量的引用声明
var num = 123;
var str = "hello world";
var arr = new int[] {11, 22, 33};
var arrayList = new ArrayList<String>();
var calendar = Calendar.getInstance();
// 以下为不可以声明为var的情况
// 1.使用var必须要求变量必须初始化
// var userName;
// 2.不能给变量赋null值
// var userName = null;
// 3.lambda表达式不可以声明为var
// var function = (num) -> Math.round(3.51);
// 4.方法引用不可以声明为var
// var method = System.out :: println;
// 5.数组静态初始化不可以声明为var
// var arr = {"aa", "bb", "cc"};
// 6.类的成员变量不可以使用var类型推断
// 7.所有参数声明，返回值类型，构造方法参数都不可以
```

#### instanceof 的模式匹配

在 JDK 14 中新增 instanceof 模式匹配增强(预览)，在 JDK 16 中转正。通过 instanceof 模式匹配增强，我们就可以直接在模式匹配的括号内声明对应类型的局部变量。

`example` : 执行向下转型的操作，从而调用 show()方法

```Java
/**
 * 以前的代码实现方式
 */
@Test
public void testOld() {
    // 父类引用指向子类对象（多态）
    Animal animal = new Dog();
    // 判断animal是否为Dog类的实例
    if (animal instanceof Dog) {
        // 指向向下转型的操作
        Dog dog = (Dog) animal;
        // 调用Dog类特有的show()方法
        dog.show();
    }
}
/**
 * 使用instanceof模式匹配增强的实现方式
 */
public void testNew() {
    // 父类引用指向子类对象（多态）
    Animal animal = new Dog();
    // 如果animal是Dog类的实例，则向下转型后就命名为dog
    if (animal instanceof Dog dog) {
        // 调用Dog类特有的show()方法
        dog.show();
    }
}
```

`example` : 重写 equals()，判断成员变量是否相等

```Java
public class Tiger {
    String name;
    int age;

    /**
     * 以前的代码实现方式
     */
    /*@Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        // 如果obj属于Tiger类型，则就执行向下转型的操作
        if (obj instanceof Tiger) {
            // 执行向下转型的操作，恢复对象的实际类型
            Tiger tiger = (Tiger) obj;
            // 如果成员变量都相等，则返回true，否则返回false
            return age == tiger.age && Objects.equals(name, tiger.name);
        }
        // 如果obj不属于Tiger类型，则返回false即可
        return false;
    }*/

    /**
     * 使用instanceof模式匹配增强的实现方式
     */
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null) return false;
        // 如果obj属于Tiger类型并且成员变量值都相等，那么返回true
        if (obj instanceof Tiger tiger) {
            return age == tiger.age && Objects.equals(name, tiger.name);
        }
        // 如果obj不属于Tiger类型，则返回false即可
        return false;
    }
}
```

### switch 表达式

目前 switch 表达式的问题：

1. 匹配自上而下，若无 break，后面的 case 语句都会执行
2. 不同的 case 语句定义的变量名不能相同
3. 不能在一个 case 后面写多个值
4. 整个 switch 不能作为表达式的返回值

在 Java12 中对 switch 表达式做了增强（预览），能够使用更加简洁的代码来解决这些问题。

`example` : switch 表达式使用的案例

```Java
/**
 * 需求：根据月份输出对应季节的特点
 * 方案一：使用以前的技术来实现
 */
public static void normalSwitch(int month) {
    // 定义一个变量，用于保存季节的特点
    String season;
    // 判断month的取值，从而知晓对应的季节
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "白雪皑皑";
            break;
        case 3:
        case 4:
        case 5:
            season = "春意盎然";
            break;
        case 6:
        case 7:
        case 8:
            season = "夏日炎炎";
            break;
        case 9:
        case 10:
        case 11:
            season = "秋高气爽";
            break;
        default:
            throw new RuntimeException("没有该月份。。。");
    }
    // 输出month对应季节的特点
    System.out.println(season);
}

/**
 * 需求：根据月份输出对应季节的特点
 * 方案二：使用Java12的新特性来实现
 */
public static void newSwitch(int month) {
    // 判断month的取值，获得对应季节的特点
    String season = switch (month) {
        case 12, 1, 2 -> "白雪皑皑";
        case 3, 4, 5 -> "春意盎然";
        case 6, 7, 8 -> "夏日炎炎";
        case 9, 10, 11 -> "秋高气爽";
        default -> throw new RuntimeException("没有该月份。。。");
    };
    // 输出month对应季节的特点
    System.out.println(season);
}
```

在 Java 13 中，增加关键字 yield 关键字（预览）， 用于在 switch 表达式中返回结果。到 Java14 版本中，Java12 和 Java 13 中关于 switch 的新特性都确定为正式版本。

`example` : switch 表达式中的 yield 关键字

```Java
/**
 * 需求：根据月份输出对应季节的特点
 * 演示：Java13版本中新增的yield新特性
 */
public static void yieldSwitch1(int month) {
    // 判断month的取值，获得对应季节的特点
    String season = switch (month) {
        case 12, 1, 2:
            yield "白雪皑皑";
        case 3, 4, 5:
            yield "春意盎然";
        case 6, 7, 8:
            yield "夏日炎炎";
        case 9, 10, 11:
            yield "秋高气爽";
        default:
            throw new RuntimeException("没有该月份。。。");
    };
    // 输出month对应季节的特点
    System.out.println(season);
}
```

### 文本块

在 Java 语言中，通常需要使用 String 类型表达 HTML，XML，SQL 或 JSON 等格式的字符串，在进行字符串赋值时需要进行转义和连接操作，然后才能编译该代码，这种表达方式难以阅读并且难以维护。

在 Java 12 版本中，新增了文本块（预览）。文本块就是指多行字符串，例如一段格式化后的 xml、json 等。而有了文本块以后，用户不需要转义，Java 能自动搞定。因此，文本块将提高 Java 程序的可读性和可写性。

`example` : 演示文本块的使用

```Java
// 使用以前拼接的方式
String html1 = "<html>\n" +
        "      <body>\n" +
        "            <p>Hello， world</p>\n" +
        "      </body>\n" +
        "</html>";
System.out.println(html1);
// 使用文本块的方式
String html2 = """
        <html>
              <body>
                    <p>Hello， world</p>
              </body>
        </html>
        """;
System.out.println(html2);
```

在 Java14 版本中，针对文本块又新增两个特性（阅览）。

1. 在一行的结尾增加“\”可以取消改行的换行符；
2. 可以通过“\s”增加空格。

`example` : 演示文本块新增特性

```Java
// 取消换行（\）
String json1 = """
        {
            "username":"ande"，\
            "age":18
        }
        """;
System.out.println(json1);
// 添加空格（\s）
String json2 = """
        {
            "username"\s:\s"ande"，
            "age"\s:\s18
        }
        """;
System.out.println(json2);
```

Record

早在 2019 年 2 月份，Java 语言架构师 Brian Goetz 就吐槽了 Java 语言，他和很多程序员一样抱怨“Java 太啰嗦”或有太多的“繁文缛节”，他提到：开发人员想要创建纯数据载体类，通常都必须编写大量低价值、重复的、容易出错的代码。例如：构造方法、getter/setter、equals()、hashCode()以及 toString()等。

以至于很多人选择使用 IDE 的功能来自动生成这些代码。还有一些开发会选择使用一些第三方类库，如 Lombok 等来生成这些方法，从而会导致了令人吃惊的表现和糟糕的可调试性。

那么，Brian Goetz 大神提到的纯数据载体到底指的是什么呢？我们举了一个简单的例子：

```Java
public final class Tiger {
    private final String name;
    private final int age;

    public Tiger(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String name() {
        return name;
    }

    public int age() {
        return age;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (Tiger) obj;
        return Objects.equals(this.name, that.name) &&
                this.age == that.age;
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    @Override
    public String toString() {
        return "Tiger[" +
                "name=" + name + ", " +
                "age=" + age + ']';
    }
}
```

这里面的 Tiger 其实就是一个纯数据载体，Tiger 类中提供了 name 和 age 两个私有常量，并且只提供了全参构造方法和常量名相同的 getter 方法，以及一些 equals、hashCode 和 toString 等方法。于是，BrianGoetz 大神提出一种想法，他提到，Java 完全可以对于这种纯数据载体通过另外一种方式表示。
在 Java14 版本中，新增了 Record 类型。Record 是 Java 的一种新的类型，Record 使数据类型变得非常简洁，一般可以帮助我们定义一些简单的用于纯数据载体的实体类。

Record 类的特点：

* 状态声明中的每个属性，都是默认采用了 private 和 final 修饰，则属性值就不可修改.
* 在 Record 类中，默认已经重写了 Object 类提供的 equals()，hashcode()，toString()方法.
* 在 Record 类中，默认提供全参的构造方法，并且提供的 getter 方法名和属性名保持一致。
* Record 类采用了 final 修饰，并且显示的继承于 java.lang. Record 类，因此就不能继承别的父类。

`example` : 将以上的 Tiger 类转化为 Record 类

```Java
public record Tiger(String name, int age)  {

}
```

在以上的 Record 类中，Tiger 类默认采用了 final 修饰，并且显示的继承于 java.lang. Record 抽象类，因此 Tiger 类就不能继承于别的父类。在 Tiger 类中，提供了 name 和 age 两个私有常量，并且还提供了一个 public 修饰的全参构造方法，提供的 getter 方法的名字和属性名保持一致，但是并没有提供 setter 方法。并且，在 Tiger 类中还重写了 Object 类提供的 equals()，hashcode()，toString()方法。

在 Record 类中，我们还可以新增静态属性、无参构造方法、成员方法和静态方法，但是创建对象时不能调用无参构造方法，而是通过全参构造方法创建对象的时候，默认就会调用 Record 类中的无参构造方法。

`example` : 在 Record 类中添加的内容

```Java
public record Tiger(String name, int age)  {
    // 新增静态属性
    static double score;
    // 新增无参构造方法
    // 注意：通过全参构造方法创建对象，默认就会调用此处的无参构造方法
    public Tiger {
        System.out.println("无参构造方法");
    }
    // 新增成员方法
    void show() {
        System.out.println("show. ..");
    }
    // 新增静态方法
    static void method() {
        System.out.println("method ...");
    }
}
```

### 密封类

Java 中的密封类是一种新的类修饰符，它可以修饰类和接口，可以控制哪些类可以扩展或实现该类或接口。下面是密封类的一些主要用途：

1. 维护类层次结构的封闭性

密封类的一个主要用途是确保类层次结构的封闭性。这意味着，如果您想保护一组类，而不希望其他类继承或实现它们，可以使用密封类来实现这一目标。这对于确保代码的安全性和稳定性非常有用。

2. 预防代码的意外扩展

密封类可以防止其他程序员意外地扩展一个类。在进行类设计时，您可能希望自己或其他程序员只能在特定的类中实现或继承指定的类。在这种情况下，您可以将类标记为“密封”，强制限制其他程序员可以实现或继承的类的范围。

3. 增强代码的可读性和可维护性

密封类可以增强代码的可读性和可维护性。由于密封类明确规定了哪些类可以扩展或实现它，因此其他开发人员可以更清晰地看到代码的结构并理解它们的关系。这使得代码更易于维护和修改。
总之，密封类是一种灵活而有用的类修饰符，可以帮助您维护类的封闭性、预防代码的意外扩展、增强代码的可读性和可维护性。

在 Java15 版本中，新增了密封类和密封接口（预览）。使用 sealed 关键字修饰的类，我们就称之为密封类。密封类必须是一个父类，我们可以使用 permits 关键字来指定哪些子类可以继承于密封类，并且密封类的子类必须使用 sealed、final 或 non-sealed 来修饰。

`example` : 密封类的演示

```Java
// 密封类必须被继承，并且使用permits来指定哪些子类可以被继承
sealed class Animal permits Dog, Bird, Tiger { }
// 注意：密封类的子类必须使用sealed、final或non-sealed来修饰
// final关键字修饰的子类，则该子类不能被继承
final class Tiger extends Animal { }
// non-sealed修饰的子类，则该子类就是一个普通类
non-sealed class Bird extends Animal { }
// sealed修饰的子类，则该类就必须被继承，否则就会编译错误
sealed class Dog extends Animal {}
non-sealed class SmallDog extends Dog {}
```

使用 sealed 关键字修饰的接口，我们就称之为密封接口。密封接口必须使用 permits 关键字来指定实现类或子接口。针对密封接口的实现类，则必须使用 sealed、final 或 non-sealed 来修饰；针对密封接口的子接口，则必须使用 sealed 或 non-sealed 来修饰。

`example` : 密封接口的演示

```Java
// 使用sealed修饰的接口，则必须使用permits来指定实现类或子接口。
public sealed interface InterA permits Student, InterB { }
// 密封接口的实现类，必须使用sealed、final或non-sealed来修饰
non-sealed /*final*/ /*sealed*/ class Student implements InterA { }
// 密封接口的子接口，必须使用sealed或non-sealed来修饰
non-sealed /*sealed*/ interface InterB extends InterA {}
```

sealed 与 record：

因为 Record 类默认采用了 final 关键字修饰，因此 Record 类就可以作为密封接口的实现类。

`example` : 密封接口和 Record 类

```Java
// 密封接口
sealed interface Flyable permits SuperMan { }
// 让Record类作为密封接口的实现类
record SuperMan(String name, int age) implements Flyable { }
```

## 15.3 API 层面的变化 :rocket:

### String 存储结构改变

在 Java 8 及其之前，String 底层采用 char 类型数组来存储字符；在 Java 9 及其以后，String 底层采用 byte 类型的数组来存储字符。将 char[]转化为 byte[]，其目的就是为了节约存储空间。

### String 新增的方法

在 Java 11 版本中，对 String 类新增了一些方法，新增的方法如下：

```Java
// 空格，制表符，换行等都认为是空的
boolean blank = "\t \n".isBlank();
System.out.println(blank); // 输出：true

String source = "\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000www.baidu.com\u3000\u3000\u3000\u3000\u3000";
// 去除“前后”的中文空格
System.out.println(source.strip());
// 去除“开头”的中文空格
System.out.println(source.stripLeading());
// 去除“末尾”的中文空格
System.out.println(source.stripTrailing());

// 把字符串内容重复n份
String repeat = "xixi".repeat(3);
System.out.println(repeat); // 输出：xixixixixixi

// 按照换行来分割字符串，返回的结果是Stream对象
Stream<String> lines = "a\nb\nc\n".lines();
System.out.println(lines.count()); // 输出：3
```

在 Java 12 版本中，对 String 类新增了一些方法，新增的方法如下：

```Java
// 在字符串前面添加n个空格
String result2 = "Java Golang".indent(4);
System.out.println(result2);
```

### 接口支持私有方法

在 Java 8 版本中，接口中支持“公开”的静态方法和公开的默认方法；在 Java 9 版本中，接口中还允许定义“私有”的静态方法和成员方法，但是不能定义私有的默认方法。

`example` : 演示接口中的私有静态方法和成员方法

```Java
/**
 * 接口（JDK1.9）
 */
public interface Flyable {
    // 私有的静态方法
    private static void staticMethod() {
        System.out.println("static method ...");
    }
    // 私有的成员方法
    private void method() {
        System.out.println("default method ...");
    }
}
```

### 标识符命名的变化

在 Java 8 及其之前，标识符可以独立使用“\_”来命名。

```Java
String _ = "hello";
System.out.println(_);
```

但是，在 Java 9 中规定“\_”不能独立命名标识符了，如果使用就会报错。

### 简化编译运行程序

在我们的认知里面，要运行一个 Java 源代码必须先编译（javac 命令），再运行（java 命令），两步执行动作。而在 Java 11 版本中，通过一个 java 命令就直接搞定了。需要执行的程序：

```Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("hello world");
    }
}
```

执行 java 命令进行运行: `java HelloWorld.java` ; 

### 创建不可变集合

在 Java 9 版本中，我们可以通过 List、Set 和 Map 接口提供的 of(E... elements)静态方法来创建不可变集合。通过此方式创建的不可变集合，我们不但不能添加或删除元素，并且还不能修改元素。

`example` : 创建不可变集合

```Java
// 创建不可变List集合
List<Integer> list = List.of(1, 2, 3, 4, 5);
System.out.println(list);
// 创建不可变Set集合
// 注意：如果Set集合中有相同的元素，则就会抛出IllegalArgumentException异常。
Set<Integer> set = Set.of(1, 2, 3, 4, 5, 4);
System.out.println(set);
// 创建不可变Map集合
Map<Integer, String> map = Map.of(123, "武汉", 456, "成都");
System.out.println(map);
```

Arrays.asList 与 List.of 的区别：

* List.of：不能向集合中添加或删除元素，也不能修改集合中的元素。
* Arrays.asList：不能向集合中添加或删除元素，但是可以修改集合中的元素。

`example` : Arrays.asList 与 List.of 的区别

```Java
// 通过Arrays.asList()方法创建不可变集合
List<Integer> list1 = Arrays.asList(1, 2, 3, 4, 5);
// list1.add(6); // 抛出UnsupportedOperationException异常
// list1.remove(2); // 抛出UnsupportedOperationException异常
list1.set(2, 33); // 没有问题
System.out.println(list1); // 输出：[1, 2, 33, 4, 5]

// 通过List.of()方法创建不可变集合
List<Integer> list2 = List.of(1, 2, 3, 4, 5);
// list2.add(6); // 抛出UnsupportedOperationException异常
// list2.remove(2); // 抛出UnsupportedOperationException异常
// list2.set(2, 33); // 抛出UnsupportedOperationException异常
```

### Optional API

在 Java 8 以前，Java 程序员操作对象时，为了避免错误引用 null 造成的空指针异常，往往需要一系列繁杂冗余的判空操作，增加了许多重复代码，降低了代码可读性，于是 Java 8 引入 Optional 类，优雅简洁的对 null 值进行处理，从而避免出现空指针异常（NullPointerException）。

本质上，Optional 类是一个包含有可选值的包装类，这意味着 Optional 类中既可以含有对象也可以为 null。

#### 创建 Optional 对象

使用 Optional 类提供的 of()和 ofNullable() 静态方法来创建包含值的 Optioanal 实例。
如果将 null 当作参数传进去 of()会抛出空指针异常，如果将 null 当作参数传进去 ofNullable() 就不会抛出空指针异常。

因此当对象可能存在或者不存在，应该使用 ofNullable()方法来创建 Optional 实例。

`example` : 创建一个 Optional 实例

```Java
// 创建一个包含“null”的Optional示例
Optional<Object> optional1 = Optional.ofNullable(null);
// 创建一个包含“对象”的Optional示例
Optional<String> optional2 = Optional.ofNullable("hello");
```

#### Optional 类的方法

想要获得 Optional 实例中包含的值，那么就可以使用以下两个方法来实现。

| 方法名                   | 描述                                                                          |
| ------------------------ | ----------------------------------------------------------------------------- |
| public T get()           | 如果值不为 null，则直接取出该值；如果值为 null，则抛出空指针异常。            |
| public T orElse(T other) | 如果值不为 null，则直接取出该值；如果值为 null，则取出的就是参数 other 的值。 |

开发中，我们获取 Optional 中存储的值，一般都是采用 orElse(T other)方法来实现。

`example` : 演示 get()方法

```Java
// 创建一个包含“null”的Optional示例
Optional<Object> optional1 = Optional.ofNullable(null);
Object obj1 = optional1.get(); // 抛出空指针异常
// 创建一个包含“对象”的Optional示例
Optional<String> optional2 = Optional.ofNullable("hello");
String str = optional2.get();
System.out.println(str); // 输出：hello
```

`example` : 演示 orElse(T other)方法

```Java
// 创建一个包含“null”的Optional示例
Optional<Object> optional1 = Optional.ofNullable(null);
Object str1 = optional1.orElse("world");
System.out.println(str1); // 输出：world
// 创建一个包含“对象”的Optional示例
Optional<String> optional2 = Optional.ofNullable("hello");
String str2 = optional2.orElse("world");
System.out.println(str2); // 输出：hello
```

#### Optional 的使用案例

需求：有一场商业表演，原计划让“刘亦菲”来表演，如果“刘亦菲”不能参加，则就换“佟丽娅”来表演，该需求的实现代码如下：

```Java
// 定义一个变量，用于保存表演者的名字
// String name = "刘亦菲"; // 原计划
String name = null; // 刘亦菲不能参加的情况
// 使用Optional来封装表演者的名字
Optional<String> optional = Optional.ofNullable(name);
// 获得实际参与表演对应人的名字
// 如果name的值为null，则就换为“佟丽娅”参与表演
String finalName = optional.orElse("佟丽娅");
// 输出实际表演者的名字
System.out.println(finalName);
```

<a-back-top />
