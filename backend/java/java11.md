---
prev:
  text: "反射机制"
  link: "/backend/java/java10"

next:
  text: "网络编程"
  link: "/backend/java/java12"
---

# 11. 注解

## 11.1 注解概述 :star:

1. 什么是注解？

- 注解是 JDK 1.5 才引入的
- 注解可以标注在类，属性，方法等上面
- 注解可以做到在不改变代码逻辑的前提下在代码中嵌入补充信息

2. 注解与注释

- 注释：给程序员看的，编译器编译时会忽略注释。
- 注解：给编译器看的，或给其它程序看的，程序根据有没有这个注解来决定不同的处理方式。

3. 注解的重要性

框架是如何实现的：框架 = 反射 + 注解 + 设计模式。

## 11.2 Java 预置注解

JDK 内置的注解

1. `@Deprecated`
   用来标记过时的元素，在编译阶段遇到这个注解时会发出提醒警告，告诉开发者正在调用一个过时的元素比如过时的类、过时的方法、过时的属性等。
2. `@Override`
   修饰实例方法，则该方法必须是个重写方法，否则就会编译失败。
3. `@SuppressWarnings`（抑制警告的注解）：在实际开发中，建议尽量不要忽略警告，而是真正的去解决警告。

- `@SuppressWarnings("rawtypes")`：抑制未使用泛型的警告
- `@SuppressWarnings("resource")`：抑制未关闭资源的警告
- `@SuppressWarnings("deprecation")`：抑制使用了已过时资源时的警告
- `@SuppressWarnings("all")`：抑制所有警告

4. `@FunctionalInterface`
   “函数式接口”的注解，这个是 JDK 1.8 版本引入的新特性。使用 @FunctionalInterface 标注的接口，则该接口就有且只能存在一个抽象方法，否则就会发生编译错误。（注意：接口中的默认方法或静态方法可以有多个。）

## 11.3 自定义注解

### 自定义注解

- 使用 @interface 来定义注解。
- 默认情况下注解可以出现在类上、方法上、属性上、构造方法上、方法参数上等......
- 所有自定义的注解，它的父类是：`java.lang.annotation.Annotation`

### 注解也可以定义属性

- 注解也可以定义属性，不过属性定义时，属性名后面必须加一个小括号。
- 属性的类型只能是：

  (1) byte，short，int，long，float，double，boolean，char

  (2) String、Class、枚举类型、注解类型

  (3) 以上所有类型的一维数组形式

```Java
public @interface DataBaseInfo {
    String driver() default "com.mysql.jdbc.Driver";
    String url();
    String user();
    String password();

    byte b() default 0;
    short s() default 0;
    int i() default 0;
    long l() default 0L;
    float f() default 0.0F;
    double d() default 0.0;
    boolean flag() default false;
    char c() default '0';
    Class clazz() default String.class;
    Season season() default Season.SPRING;
    MyAnnotation myAnnotation();
    String[] names();
}
```

### 注解的使用

- 注解在使用时必须给属性赋值，除非你使用了 default 关键字为属性指定了默认值。
- 如果属性只有一个，并且属性名是 value 时，使用注解时 value 可以省略不写。
- 如果属性是一个数组，使用注解时，数组值只有一个，数组的大括号可以省略。

## 11.4 元注解

### 元注解简介

1. 用来标注注解的注解叫做元注解。(也是 JDK 内置的注解。)
2. 常用的元注解：

- `@Retention`：设置注解的保持性
- `@Target`：设置注解可以出现的位置
- `@Documented`：设置注解是否可以生成到帮助文档中
- `@Inherited`：设置注解是否支持继承
- `@Repeatable`：设置注解在某一个元素上是否可以重复使用（Java8 的新特性。）

### @Retention

1. Retention 英文意思有保留、保持的意思，它表示注解存在阶段是保留在源代码（编译期），字节码（类加载）或者运行时（JVM 中运行）。
2. 在 @Retention 注解中使用枚举 RetentionPolicy 来表示注解保留时期。

- `@Retention(RetentionPolicy.SOURCE)`：注解仅存在于源代码中，在字节码文件中不包含。
- `@Retention(RetentionPolicy.CLASS)`：注解在字节码文件中存在，但运行时无法获得（默认）。
- `@Retention(RetentionPolicy.RUNTIME)`：注解在字节码文件中存在，且运行时可通过反射获取。

::: code-group

```Java [AnnotationTest.class]
@MyAnnotation
public class AnnotationTest {
    public static void main(String[] args) {
        Class<AnnotationTest> testClass = AnnotationTest.class;
        MyAnnotation annotation = testClass.getAnnotation(MyAnnotation.class);
        System.out.println(annotation);
    }
}
```

```Java [MyAnnotation.class]
@Retention(RetentionPolicy.RUNTIME)
public @interface MyAnnotation {

}
```

:::

### @Target

用于描述注解可以使用的位置，该注解使用 ElementType 枚举类型用于描述注解可以出现的位置，
ElementType 有如下枚举值：

- `@Target(ElementType.TYPE)`：作用于接口、类、枚举、注解
- `@Target(ElementType.FIELD)`：作用于属性、枚举的常量
- `@Target(ElementType.METHOD)`：作用于方法
- `@Target(ElementType.PARAMETER)`：作用于方法参数
- `@Target(ElementType.CONSTRUCTOR)`：作用于构造方法
- `@Target(ElementType.LOCAL_VARIABLE)`：作用于局部变量
- `@Target(ElementType.ANNOTATION_TYPE)`：作用于注解
- `@Target(ElementType.PACKAGE)`：作用于包
- `@Target(ElementType.TYPE_PARAMETER)`：作用于泛型，即泛型方法、泛型类和泛型接口。
- `@Target(ElementType.TYPE_USE)`：作用于任意类型。

### @Documented

Documented 的英文意思是文档。使用 javadoc.exe 工具可以从程序源代码中抽取类、方法、属性等注释形成一个源代码配套的 API 帮助文档，而该工具抽取时默认不包括注释内容。如果使用的注解被@Documented 标注，那么该注解就能被 javadoc.exe 工具提取到 API 文档。

### @Inherited

Inherited 的英文意思是继承，但是这个继承和我们平时理解的继承大同小异，一个被@Inherited 注解了的注解修饰了一个父类，则它的子类也继承了父类的注解。

### @Repeatable

Repeatable 表示可重复的含义，该注解属于 JDK1.8 版本的新特性。

要使用 @Repeatable，你需要做以下几步：

定义一个容器注解，用于存储重复的注解。这个容器注解需要有一个名为 value 的元素，且该元素的类型是一个包含要重复的注解的数组。
在你想要重复的注解上使用 @Repeatable 元注解，并指定容器注解作为参数。

```Java
import java.lang.annotation.*;

// 容器注解
@Retention(RetentionPolicy.RUNTIME)
@interface Annotations {
    MyAnnotation[] value();
}

// 要重复的注解
@Retention(RetentionPolicy.RUNTIME)
@interface MyAnnotation {
    String value();
}

// 使用@Repeatable指定容器注解
@Retention(RetentionPolicy.RUNTIME)
@Repeatable(Annotations.class)
@interface MyRepeatableAnnotation {
    String value();
}

// 使用示例
@MyRepeatableAnnotation(value = "Hello")
@MyRepeatableAnnotation(value = "World")
public class MyClass {
    public static void main(String[] args) {
        MyRepeatableAnnotation[] annotations = MyClass.class.getAnnotationsByType(MyRepeatableAnnotation.class);
        System.out.println("Annotations found: " + annotations.length);

        Annotations container = MyClass.class.getAnnotation(Annotations.class);
        if (container != null) {
            System.out.println("Container annotations found: " + container.value().length);
        }
    }
}
```

## 11.5 反射注解

1. 获取类上的所有注解

```Java
Annotation[] annotations = clazz.getAnnotations();
```

2. 获取类上指定的某个注解

```Java
clazz.isAnnotationPresent(AnnotationTest01.class);
AnnotationTest01 an = clazz.getAnnotation(AnnotationTest01.class);
```

3. 获取属性上的所有注解

```Java
Annotation[] annotations = field.getAnnotations();
```

4. 获取属性上指定的某个注解

```Java
field.isAnnotationPresent(AnnotationTest02.class)
AnnotationTest02 an = field.getAnnotation(AnnotationTest02.class);
```

5. 获取方法上的所有注解

```Java
Annotation[] annotations = method.getAnnotations();
```

6. 获取方法上指定的某个注解

```Java
method.isAnnotationPresent(AnnotationTest02.class)
AnnotationTest02 an = method.getAnnotation(AnnotationTest02.class);
```

<a-back-top />

<reading-progress-bar/>