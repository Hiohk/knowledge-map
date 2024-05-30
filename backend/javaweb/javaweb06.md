---
prev:
  text: "JSTL 标签库"
  link: "/backend/javaweb/javaweb05"

next:
  text: "Listener 监听器"
  link: "/backend/javaweb/javaweb07"
---

# 6. Filter 过滤器

## 6.1 当前的 OA 项目存在什么缺陷？

DeptServlet、EmpServlet、OrderServlet。每一个 Servlet 都是处理自己相关的业务。在这些 Servlet 执行之前都是需要判断用户是否登录了。如果用户登录了，可以继续操作，如果没有登录，需要用户登录。这段判断用户是否登录的代码是固定的，并且在每一个 Servlet 类当中都需要编写，显然代码没有得到重复利用。包括每一个 Servlet 都要解决中文乱码问题，也有公共的代码。这些代码目前都是重复编写，并没有达到复用，怎么解决这个问题?

可以使用 Servlet 规范中的 Filter 过滤器来解决这个问题。

## 6.2 Filter 是什么，有什么用，执行原理是什么？

- Filter 是过滤器。
- Filter 可以在 Servlet 这个目标程序执行之前添加代码。也可以在目标 Servlet 执行之后添加代码。之前之后都可以添加过滤规则。
- 一般情况下，都是在过滤器当中编写公共代码。

## 6.3 一个过滤器怎么写呢？

- 第一步：编写一个 Java 类实现一个接口：jarkata.servlet.Filter。并且实现这个接口当中所有的方法。

  **init 方法**：在 Filter 对象第一次被创建之后调用，并且只调用一次。

  **doFilter 方法**：只要用户发送一次请求，则执行一次。发送 N 次请求，则执行 N 次。在这个方法中编写过滤规则。

  **destroy 方法**：在 Filter 对象被释放/销毁之前调用，并且只调用一次。

- 第二步：在 web.xml 文件中对 Filter 进行配置。这个配置和 Servlet 很像。

```xml
<filter>
    <filter-name>filter2</filter-name>
    <filter-class>com.bjpowernode.javaweb.servlet.Filter2</filter-class>
</filter>
<filter-mapping>
    <filter-name>filter2</filter-name>
    <url-pattern>*.do</url-pattern>
</filter-mapping>
```

或者使用注解：@WebFilter({"\*.do"})

::: tip 注意：

- Servlet 对象默认情况下，在服务器启动的时候是不会新建对象的。
- Filter 对象默认情况下，在服务器启动的时候会新建对象。
- Servlet 是单例的。Filter 也是单例的。（单实例。）
  :::

1. **目标 Servlet 是否执行，取决于两个条件：**

- 第一：在过滤器当中是否编写了：chain.doFilter(request, response); 代码。

- 第二：用户发送的请求路径是否和 Servlet 的请求路径一致。

`chain.doFilter(request, response);` 这行代码的作用：

- 执行下一个过滤器，如果下面没有过滤器了，执行最终的 Servlet。注意：Filter 的优先级，天生的就比 Servlet 优先级高。

- `/a.do` 对应一个 Filter，也对应一个 Servlet。那么一定是先执行 Filter，然后再执行 Servlet。

2. **关于 Filter 的配置路径：**

- `/a.do`、`/b.do`、`/dept/save`: 这些配置方式都是精确匹配。

- `/*` 匹配所有路径。

- `*.do` 后缀匹配。不要以 `/` 开始

- `/dept/*` 前缀匹配。

3. **在 web.xml 文件中进行配置的时候，Filter 的执行顺序是什么？**

- 依靠 filter-mapping 标签的配置位置，越靠上优先级越高。

4. **过滤器的调用顺序，遵循栈数据结构。**

5. **使用@WebFilter 的时候，Filter 的执行顺序是怎样的呢？**

- 执行顺序是：比较 Filter 这个类名。

- 比如：FilterA 和 FilterB，则先执行 FilterA。

- 比如：Filter1 和 Filter2，则先执行 Filter1.

6. **Filter 的生命周期？**

- 和 Servlet 对象生命周期一致。
- 唯一的区别：Filter 默认情况下，在服务器启动阶段就实例化。Servlet 不会。

7. **Filter 过滤器这里有一个设计模式**：

- 责任链设计模式。

- 过滤器最大的优点：

  在程序编译阶段不会确定调用顺序。因为 Filter 的调用顺序是配置到 web.xml 文件中的，只要修改 web.xml 配置文件中 filter-mapping 的顺序就可以调整 Filter 的执行顺序。显然 Filter 的执行顺序是在程序运行阶段动态组合的。那么这种设计模式被称为责任链设计模式。

- 责任链设计模式最大的核心思想：

  在程序运行阶段，动态的组合程序的调用顺序。 

<a-back-top />

<reading-progress-bar/>