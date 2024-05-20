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

DeptServlet、EmpServlet、OrderServlet。每一个 Servlet 都是处理自己相关的业务。在这些 Servlet 执行之前都是需要判断用户是否登录了。如果用户登录了，可以继续操作，如果没有登录，需要用户登录。这段判断用户是否登录的代码是固定的，并且在每一个 Servlet 类当中都需要编写，显然代码没有得到重复利用。包括每一个 Servlet 都要解决中文乱码问题，也有公共的代码。这些代码目前都是重复编写，并没有达到复用。怎么解决这个问题?

可以使用 Servlet 规范中的 Filter 过滤器来解决这个问题。

## 6.2 Filter 是什么，有什么用，执行原理是什么？

- Filter 是过滤器。
- Filter 可以在 Servlet 这个目标程序执行之前添加代码。也可以在目标 Servlet 执行之后添加代码。之前之后都可以添加过滤规则。
- 一般情况下，都是在过滤器当中编写公共代码。

## 6.3 一个过滤器怎么写呢？

- 第一步：编写一个 Java 类实现一个接口：jarkata.servlet.Filter。并且实现这个接口当中所有的方法。

  ■ init 方法：在 Filter 对象第一次被创建之后调用，并且只调用一次。

  ■ doFilter 方法：只要用户发送一次请求，则执行一次。发送 N 次请求，则执行 N 次。在这个方法中编写过滤规则。

  ■ destroy 方法：在 Filter 对象被释放/销毁之前调用，并且只调用一次。

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
    ■ 或者使用注解：@WebFilter({"*.do"}) 

注意： 
  ○ Servlet对象默认情况下，在服务器启动的时候是不会新建对象的。

  ○ Filter对象默认情况下，在服务器启动的时候会新建对象。

  ○ Servlet是单例的。Filter也是单例的。（单实例。）

●  目标Servlet是否执行，取决于两个条件： 

  ○ 第一：在过滤器当中是否编写了：chain.doFilter(request, response); 代码。

  ○ 第二：用户发送的请求路径是否和Servlet的请求路径一致。

●  chain.doFilter(request, response); 这行代码的作用： 

  ○ 执行下一个过滤器，如果下面没有过滤器了，执行最终的Servlet。

●  注意：Filter的优先级，天生的就比Servlet优先级高。 

  ○ /a.do 对应一个Filter，也对应一个Servlet。那么一定是先执行Filter，然后再执行Servlet。

●  关于Filter的配置路径： 

  ○ /a.do、/b.do、/dept/save。这些配置方式都是精确匹配。

  ○ /* 匹配所有路径。

  ○ *.do 后缀匹配。不要以 / 开始

  ○ /dept/*  前缀匹配。

●  在web.xml文件中进行配置的时候，Filter的执行顺序是什么？ 

  ○ 依靠filter-mapping标签的配置位置，越靠上优先级越高。

●  过滤器的调用顺序，遵循栈数据结构。 

●  使用@WebFilter的时候，Filter的执行顺序是怎样的呢？ 

  ○ 执行顺序是：比较Filter这个类名。

  ○ 比如：FilterA和FilterB，则先执行FilterA。

  ○ 比如：Filter1和Filter2，则先执行Filter1.

●  Filter的生命周期？ 

  ○ 和Servlet对象生命周期一致。

  ○ 唯一的区别：Filter默认情况下，在服务器启动阶段就实例化。Servlet不会。

●  Filter过滤器这里有一个设计模式： 

  ○ 责任链设计模式。

  ○ 过滤器最大的优点： 

    ■ 在程序编译阶段不会确定调用顺序。因为Filter的调用顺序是配置到web.xml文件中的，只要修改web.xml配置文件中filter-mapping的顺序就可以调整Filter的执行顺序。显然Filter的执行顺序是在程序运行阶段动态组合的。那么这种设计模式被称为责任链设计模式。

  ○ 责任链设计模式最大的核心思想： 

    ■ 在程序运行阶段，动态的组合程序的调用顺序。

●  使用过滤器改造OA项目。 

<a-back-top />
