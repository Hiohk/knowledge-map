---
prev:
  text: "JavaWeb 概述"
  link: "/backend/javaweb/javaweb01"

next:
  text: "JSP"
  link: "/backend/javaweb/javaweb03"
---

# 2. Servlet <Badge type="warning">Generated by ChatGPT</Badge>

## 2.1 什么是 Servlet

### 定义

Servlet 是 Java 编写的服务器端程序，用于处理客户端请求并生成动态响应。它是一种基于 Java 的 Web 技术，通常用于构建动态 Web 应用程序。Servlet 由 Sun Microsystems 引入，是 Java EE 规范的一部分。

### 工作原理

Servlet 运行在支持 Java 的 Web 服务器或应用服务器中，如 Apache Tomcat、Jetty 或 JBoss。它通过 Servlet 容器（Servlet Container）与服务器进行交互，Servlet 容器负责 Servlet 的生命周期管理、请求分发、安全管理等工作。

当客户端（通常是浏览器）发送一个 HTTP 请求时，Servlet 容器会将该请求分派给相应的 Servlet 进行处理。Servlet 处理请求后生成响应，并将响应返回给客户端。

### 发展历史

Servlet 技术最早由 Sun Microsystems 在 1997 年引入，作为一种替代 CGI（Common Gateway Interface）的技术。相比于 CGI，Servlet 提供了更高的性能和更好的安全性。随着 Java EE 规范的发展，Servlet 技术也不断演进，最新的 Servlet 版本提供了更丰富的功能和更高效的处理能力。

## 2.2 Servlet 生命周期

### 生命周期方法

Servlet 的生命周期由以下几个关键方法定义：

- `init()`: 在 Servlet 实例化后调用，用于初始化资源。这个方法只会在 Servlet 的整个生命周期中调用一次。
- `service()`: 处理每个请求。根据请求类型（GET、POST 等），调用 doGet() 或 doPost() 等方法。这个方法会被多次调用，每次请求都会调用一次。
- `destroy()`: 在 Servlet 容器卸载 Servlet 前调用，用于释放资源。这个方法也只会在 Servlet 的整个生命周期中调用一次。

### 生命周期阶段

Servlet 的生命周期可以分为以下几个阶段：

1. 加载和实例化: 当 Servlet 容器启动或接收到第一次请求时，容器会加载 Servlet 类并创建其实例。
2. 初始化: 容器调用 init() 方法进行初始化。这一步通常用于分配资源，例如数据库连接、文件句柄等。
3. 请求处理: 容器调用 service() 方法处理每个请求，根据请求类型调用相应的 doGet()、doPost() 等方法。
4. 销毁: 当 Servlet 容器决定卸载 Servlet 时，会调用 destroy() 方法。这一步用于释放资源，例如关闭数据库连接、释放文件句柄等。

### 线程模型

Servlet 默认是多线程的，Servlet 容器会为每个请求分配一个线程来处理。因此，Servlet 必须是线程安全的，避免共享资源引起的线程安全问题。

## 2.3 Servlet API

### 核心接口和类

#### Servlet 接口

所有 Servlet 类必须实现 `javax.servlet.Servlet` 接口，该接口定义了 Servlet 的生命周期方法：

- `init(ServletConfig config)`: 初始化方法，Servlet 容器在加载 Servlet 时调用。
- `service(ServletRequest req, ServletResponse res)`: 处理请求和响应。根据请求类型（GET、POST 等），调用相应的处理方法。
- `destroy()`: 销毁方法，在 Servlet 容器卸载 Servlet 前调用。

#### GenericServlet 类

`javax.servlet.GenericServlet` 类是 `Servlet` 接口的一个通用实现，简化了 Servlet 的开发。它实现了 `Servlet` 接口，并添加了一些额外的实用方法。开发者可以直接继承 `GenericServlet` 类，而无需实现所有的生命周期方法。

#### HttpServlet 类

`javax.servlet.http.HttpServlet` 类是 `GenericServlet` 的子类，专用于处理 HTTP 协议的请求。它提供了更高层次的方法来处理不同类型的 HTTP 请求，如 `doGet()`, `doPost()`, `doPut()`, `doDelete()` 等。

### 主要方法

#### `init(ServletConfig config)`

`init()` 方法在 Servlet 初始化时调用，用于执行初始化操作。这个方法接收一个 `ServletConfig` 对象，提供了 Servlet 的配置信息。开发者可以在这个方法中进行一些一次性的初始化操作，如打开数据库连接、读取配置文件等。

```Java
@Override
public void init(ServletConfig config) throws ServletException {
    super.init(config);
    // 初始化操作
}
```

#### `service(ServletRequest req, ServletResponse res)`

`service()` 方法是 Servlet 的核心，用于处理每个请求。它接收两个参数：`ServletRequest` 和 `ServletResponse`，分别代表客户端的请求信息和服务器的响应信息。根据请求的 HTTP 方法（GET、POST 等），`service()` 方法会调用相应的 `doGet()`, `doPost()` 等方法。

```Java
@Override
public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
    // 处理请求
}
```

#### `doGet(HttpServletRequest req, HttpServletResponse res)`

`doGet()` 方法用于处理 GET 请求。它接收两个参数：`HttpServletRequest` 和 `HttpServletResponse`，分别代表 HTTP 请求和响应。开发者可以在这个方法中编写处理 GET 请求的逻辑。

```Java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    res.setContentType("text/html");
    PrintWriter out = res.getWriter();
    out.println("<h1>Hello, GET Request</h1>");
}
```

#### `doPost(HttpServletRequest req, HttpServletResponse res)`

`doPost()` 方法用于处理 POST 请求。它的参数和 `doGet()` 方法相同。开发者可以在这个方法中编写处理 POST 请求的逻辑。

```Java
@Override
protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    res.setContentType("application/json");
    PrintWriter out = res.getWriter();
    out.println("{\"message\": \"Hello, POST Request\"}");
}
```

## 2.4 Servlet 配置

### web.xml 配置

在 `web.xml` 文件中配置 Servlet，定义 Servlet 名称、类路径和 URL 映射。`web.xml` 是部署描述符，用于配置 Web 应用的各种参数。

```xml
<servlet>
    <servlet-name>ExampleServlet</servlet-name>
    <servlet-class>com.example.ExampleServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>ExampleServlet</servlet-name>
    <url-pattern>/example</url-pattern>
</servlet-mapping>
```

#### servlet 元素

`<servlet>` 元素用于定义一个 Servlet，包括名称和实现类。

- `<servlet-name>`: 定义 Servlet 的名称。
- `<servlet-class>`: 定义 Servlet 的实现类。

#### servlet-mapping 元素

`<servlet-mapping>` 元素用于定义 Servlet 的 URL 映射。

- `servlet-name>`: 映射到 Servlet 的名称。
- `<url-pattern>`: 定义该 Servlet 的 URL 路径。

### 注解配置

Servlet 3.0 及以后版本支持使用注解进行配置，简化了配置过程。常用的注解有 `@WebServlet`、`@WebFilter` 和 `@WebListener`。

#### `@WebServlet` 注解

使用 `@WebServlet` 注解可以直接在 Servlet 类上配置 URL 映射，无需在 `web.xml` 中配置。

```Java
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/example")
public class ExampleServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.setContentType("text/html");
        res.getWriter().println("<h1>Hello, World!</h1>");
    }
}
```

#### `@WebInitParam` 注解

`@WebInitParam` 注解用于定义初始化参数，可以与 `@WebServlet` 一起使用。

```Java
@WebServlet(
    urlPatterns = {"/example"},
    initParams = {
        @WebInitParam(name = "param1", value = "value1"),
        @WebInitParam(name = "param2", value = "value2")
    }
)
public class ExampleServlet extends HttpServlet {
    @Override
    public void init() throws ServletException {
        String param1 = getServletConfig().getInitParameter("param1");
        String param2 = getServletConfig().getInitParameter("param2");
        // 初始化操作
    }
}
```

## 2.5 请求和响应

### HttpServletRequest

`HttpServletRequest` 对象包含了客户端请求的所有信息，如请求参数、头信息、HTTP 方法等。它是 `ServletRequest` 的子接口，提供了特定于 HTTP 协议的方法。

#### 获取请求参数

通过 `getParameter()` 方法获取请求参数。

```Java
String value = request.getParameter("paramName");
```

#### 获取头信息

通过 `getHeader()` 方法获取请求头信息。

```Java
String userAgent = request.getHeader("User-Agent");
```

#### 获取请求 URI

通过 `getRequestURI()` 方法获取请求的 URI。

```Java
String uri = request.getRequestURI();
```

### HttpServletResponse

`HttpServletResponse` 对象用于生成响应并发送给客户端。它是 `ServletResponse` 的子接口，提供了特定于 HTTP 协议的方法。

#### 设置内容类型

通过 `setContentType()` 方法设置响应的内容类型。

```Java
response.setContentType("text/html");
```

#### 写入响应

通过 `getWriter()` 方法获取 `PrintWriter` 对象，向客户端写入响应内容。

```Java
PrintWriter out = response.getWriter();
out.println("<h1>Hello, World!</h1>");
```

#### 设置响应状态码

通过 `setStatus()` 方法设置响应的 HTTP 状态码。

```Java
response.setStatus(HttpServletResponse.SC_OK);
```

#### 重定向请求

通过 `sendRedirect()` 方法将请求重定向到另一个 URL。

```Java
response.sendRedirect("/anotherPage");
```

## 2.6 会话管理

### Cookie

Cookie 是服务器发送到客户端并存储在本地的小块数据，用于在多个请求之间保持状态。Servlet 通过 `javax.servlet.http.Cookie` 类处理 Cookie。

#### 创建和添加 Cookie

```Java
Cookie cookie = new Cookie("name", "value");
cookie.setMaxAge(60 * 60); // 1小时
response.addCookie(cookie);
```

#### 读取 Cookie

```Java
Cookie[] cookies = request.getCookies();
for (Cookie cookie : cookies) {
    if ("name".equals(cookie.getName())) {
        String value = cookie.getValue();
        // 使用 Cookie 值
    }
}
```

### HttpSession

`HttpSession` 用于在服务器端保存会话数据。它通过 `javax.servlet.http.HttpSession` 接口提供。

#### 获取会话

```Java
HttpSession session = request.getSession();
```

#### 设置会话属性

```Java
session.setAttribute("key", "value");
```

#### 获取会话属性

```Java
String value = (String) session.getAttribute("key");
```

#### 使会话无效

```Java
session.invalidate();
```

## 2.7 异常处理

### 捕获和处理异常

在 Servlet 中捕获和处理异常，以提供用户友好的错误信息。

```Java
try {
    // 代码逻辑
} catch (Exception e) {
    response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Server Error");
}
```

### 配置错误页面

在 `web.xml` 中配置错误页面以处理不同类型的错误。

```xml
<error-page>
    <error-code>404</error-code>
    <location>/error404.html</location>
</error-page>
<error-page>
    <exception-type>java.lang.Exception</exception-type>
    <location>/error.jsp</location>
</error-page>
```

## 2.8 示例代码

### 基本示例

一个简单的 Servlet 示例，处理 GET 请求并生成 HTML 响应。

```Java
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        response.getWriter().println("<h1>Hello, World!</h1>");
    }
}
```

### 高级示例

处理 POST 请求并返回 JSON 响应。

```Java
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

@WebServlet("/data")
public class DataServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        JSONObject json = new JSONObject();
        json.put("message", "Data received");
        response.getWriter().write(json.toString());
    }
}
```

## 2.9 Servlet 和 JSP 的关系

### 区别

Servlet 和 JSP 都是用于生成动态 Web 内容的技术，但它们有不同的侧重点：

- **Servlet**: 更适合处理请求和业务逻辑。Servlet 通过 Java 代码生成 HTML 内容，适合复杂的逻辑处理和数据操作。
- **JSP**: 更适合用于生成和显示 HTML 内容。JSP 通过嵌入在 HTML 中的 Java 代码生成动态内容，适合页面展示和简单的逻辑处理。

### 共同使用

通常，Servlet 处理请求和业务逻辑，然后将数据传递给 JSP 页面进行显示。可以通过请求转发将数据从 Servlet 传递给 JSP。

#### Servlet 传递数据给 JSP

```Java
request.setAttribute("message", "Hello, JSP!");
request.getRequestDispatcher("/display.jsp").forward(request, response);
```

#### JSP 页面展示数据

```HTML
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>JSP Example</title>
</head>
<body>
    <h1>${message}</h1>
</body>
</html>
```

## 2.10 Servlet 优缺点

### 优点

- **跨平台性**: 基于 Java 技术，具有良好的跨平台支持，能够在各种操作系统上运行。
- **性能高效**: 直接编译成字节码，运行速度快，相比于 CGI 技术有更好的性能。
- **安全性**: Java 提供了完善的安全机制，Servlet 也继承了这些安全特性。
- **易于扩展**: Servlet API 提供了丰富的接口和类，易于扩展和集成其他 Java 技术，如 JDBC、JNDI 等。
- **维护性强**: 基于 Java 的面向对象编程，代码结构清晰，易于维护和重用。

### 缺点

- **学习曲线陡峭**: 初学者较难掌握，需要一定的 Java 编程基础和 Web 开发知识。
- **开发复杂**: 相比于某些高级框架，如 Spring，开发过程较为复杂，需要编写较多的样板代码。
- **表现层不友好**: 直接使用 Servlet 生成 HTML 内容，不如 JSP 或模板引擎（如 Thymeleaf、FreeMarker）友好和直观。

## 2.11 总结

Servlet 是 Java Web 开发的重要技术，适合处理请求和响应、管理会话以及生成动态内容。通过结合 JSP，可以实现功能强大且灵活的 Web 应用程序。掌握 Servlet 技术是成为 Java Web 开发人员的基础之一。尽管现代开发更多依赖高级框架，但理解和掌握 Servlet 的工作原理和用法，能够帮助开发者更深入地理解 Web 应用的底层机制，从而在实际项目中做出更好的技术选择。

<a-back-top />

<reading-progress-bar/>
