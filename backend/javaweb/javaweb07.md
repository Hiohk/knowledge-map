---
prev:
  text: "Filter 过滤器"
  link: "/backend/javaweb/javaweb06"
next: false
---

# 7. Listener 监听器

## 7.1 什么是监听器？

- 监听器是 Servlet 规范中的一员。就像 Filter 一样。Filter 也是 Servlet 规范中的一员。
- 在 Servlet 中，所有的监听器接口都是以“Listener”结尾。

## 7.2 监听器有什么用？

- 监听器实际上是 Servlet 规范留给我们 javaweb 程序员的特殊时机。
- 特殊的时刻如果想执行这段代码，你需要想到使用对应的监听器。

## 7.3 Servlet 规范中提供了哪些监听器？

### jakarta.servlet 包

- `ServletContextListener`
- `ServletContextAttributeListener`
- `ServletRequestListener`
- `ServletRequestAttributeListener`

### jakarta.servlet.http 包

- `HttpSessionListener`
- `HttpSessionAttributeListener`

  1. 该监听器需要使用 @WebListener 注解进行标注。

  2. 该监听器监听的是什么？是 session 域中数据的变化。只要数据变化，则执行相应的方法。主要监测点在 session 域对象上。

- `HttpSessionBindingListener`

  1. 该监听器不需要使用@WebListener 进行标注。

  2. 假设 User 类实现了该监听器，那么 User 对象在被放入 session 的时候触发 bind 事件，User 对象从 session 中删除的时候，触发 unbind 事件。

  3. 假设 Customer 类没有实现该监听器，那么 Customer 对象放入 session 或者从 session 删除的时候，不会触发 bind 和 unbind 事件。

- `HttpSessionIdListener`

  session 的 id 发生改变的时候，监听器中的唯一一个方法就会被调用。

- `HttpSessionActivationListener`

  1. 监听 session 对象的钝化和活化的。

  2. 钝化：session 对象从内存存储到硬盘文件。

  3. 活化：从硬盘文件把 session 恢复到内存。

## 7.4 实现一个监听器的步骤

以 ServletContextListener 为例，实现一个监听器的步骤如下：

第一步：编写一个类实现 ServletContextListener 接口。并且实现里面的方法。

```Java
void contextInitialized(ServletContextEvent event)
void contextDestroyed(ServletContextEvent event)
```

第二步：在 web.xml 文件中对 ServletContextListener 进行配置，如下：

```xml
<listener>
    <listener-class>com.bjpowernode.javaweb.listener.MyServletContextListener</listener-class>
</listener>
```

当然，第二步也可以不使用配置文件，也可以用注解，例如：@WebListener。

注意：所有监听器中的方法都是不需要 javaweb 程序员调用的，由服务器来负责调用？什么时候被调用呢？当某个特殊的事件发生（特殊的事件发生其实就是某个时机到了）之后，被 web 服务器自动调用。

<a-back-top />

<reading-progress-bar/>