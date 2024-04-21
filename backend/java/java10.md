---
prev:
  text: "多线程"
  link: "/backend/java/java09"

next:
  text: "注解"
  link: "/backend/java/java11"
---

# 10. 反射机制

## 10.1 反射机制概述

## 10.2 获取 Class

获取Class的四种方式
1. 静态方法
 `Class clazz = Class.forName(“全限定类名”);`

2. 实例方法
 `Class clazz = 引用.getClass();`

3. class属性
 `Class clazz = 类型名.class;`

4. 通过类加载器获取
 `ClassLoader classLoader = ClassLoader.getSystemClassLoader();`

 `Class clazz = classLoader.loadClass(“全限定类名”);`

5. Class.forName 和 classLoader.loadClass() 的区别？
* `Class.forName()`：类加载时会进行初始化。
* `classLoader.loadClass()`：类加载时不会进行初始化，直到第一次使用该类。

## 10.3 反射作用的体现

## 10.4 反射 Field

## 10.5 反射 Method

## 10.6 反射 Constructor

## 10.7 模拟框架的部分实现

## 10.8 类加载及双亲委派机制

### 类加载器

1. 虚拟机内部提供了三种类加载器（Java9+）：
* 启动类加载器（BootstrapClassLoader）：加载Java最核心的类，例如String
* 平台类加载器（PlatformClassLoader）：加载Java平台扩展的类库，例如解析XML的
* 应用类加载器（AppClassLoader）：加载classpath中的
* 同时我们还可以自定义一个类加载器（UserClassLoader）
2. 获取类加载器可以通过 getParent()方法一级一级获取

### 双亲委派机制

1. 某个类加载器接收到加载类的任务时，通常委托给“父 类加载”完成加载。
2. 最“父 类加载器”无法加载时，一级一级向下委托加载任务。
3. 作用：
* 保护程序的安全。
* 防止类加载重复。

## 10.9 反射泛型

<a-back-top />
