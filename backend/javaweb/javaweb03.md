---
prev:
  text: "Servlet"
  link: "/backend/javaweb/javaweb02"

next:
  text: "EL 表达式"
  link: "/backend/javaweb/javaweb04"
---

# 3. JSP

## 3.1 Session

### 什么是会话？

- 会话对应的英语单词：session。
- 用户打开浏览器，进行一系列操作，然后最终将浏览器关闭，这个整个过程叫做：一次会话。会话在服务器端也有一个对应的 java 对象，这个 java 对象叫做：session。
- 什么是一次请求：用户在浏览器上点击了一下，然后到页面停下来，可以粗略认为是一次请求。请求对应的服务器端的 java 对象是：request。
- 一个会话当中包含多次请求。（一次会话对应 N 次请求）

● 在 java 的 servlet 规范当中，session 对应的类名：HttpSession（`jarkata.servlet.http.HttpSession`）

● session 机制属于 B/S 结构的一部分。如果使用 php 语言开发 WEB 项目，同样也是有 session 这种机制的。session 机制实际上是一个规范。不同的语言对这种会话机制都有实现。

● session 对象最主要的作用是：保存会话状态。（用户登录成功了，这是一种登录成功的状态，你怎么把登录成功的状态一直保存下来呢？使用 session 对象可以保留会话状态。）

### 为什么需要 session 对象来保存会话状态呢？

- 因为 HTTP 协议是一种无状态协议。
- 什么是无状态：请求的时候，B 和 S 是连接的，但是请求结束之后，连接就断了。为什么要这么做？HTTP 协议为什么要设计成这样？因为这样的无状态协议，可以降低服务器的压力。请求的瞬间是连接的，请求结束之后，连接断开，这样服务器压力小。
- 只要 B 和 S 断开了，那么关闭浏览器这个动作，服务器知道吗？ 不知道。服务器是不知道浏览器关闭的。

● 张三打开一个浏览器 A，李四打开一个浏览器 B，访问服务器之后，在服务器端会生成：

      ○ 张三专属的 session 对象

      ○ 李四专属的 session 对象

● 为什么不使用 request 对象保存会话状态？为什么不使用 ServletContext 对象保存会话状态？

- request.setAttribute()存，request.getAttribute()取，ServletContext 也有这个方法。request 是请求域，ServletContext 是应用域。
- request 是一次请求一个对象。
- ServletContext 对象是服务器启动的时候创建，服务器关闭的时候销毁，这个 ServletContext 对象只有一个。
- ServletContext 对象的域太大。
- request 请求域（HttpServletRequest）、session 会话域（HttpSession）、application 域（ServletContext）。
- 域范围比较：request < session < application。

#### session 的实现原理

1. 获取 session：

- `HttpSession session = request.getSession()`：从服务器中获取对应的 session 对象，如果没有获取到任何 session 对象，那么就会创建一个 session 对象。
- `HttpSession session = request.getSession(false)`：从服务器中获取对应的 session 对象，如果没有获取到任何 session 对象，那么就返回 null。
- 这行代码很神奇。张三访问的时候获取的 session 对象就是张三的。李四访问的时候获取的 session 对象就是李四的。

2. 实现原理

- 客户端第一次访问服务器的时候，服务器会生成一个 session 对象，同时生成一个 id。

- JSESSIONID=xxxxxx 这个是以 Cookie 的形式保存在浏览器的内存中的。浏览器只要关闭。这个 cookie 就没有了。
- session 列表是一个 Map，map 的 key 是 sessionid，map 的 value 是 session 对象。
- 用户第一次请求，服务器生成 session 对象，同时生成 id，将 id 发送给浏览器。
- 用户第二次请求，自动将浏览器内存中的 id 发送给服务器，服务器根据 id 查找 session 对象。
- 关闭浏览器，内存消失，cookie 消失，sessionid 消失，会话等同于结束。

3. session 对象的销毁

- 超时销毁
- 手动销毁

### Cookie 禁用了，session 还能找到吗？

- cookie 禁用是什么意思？服务器正常发送 cookie 给浏览器，但是浏览器不要了，拒收了，并不是服务器不发了。
- 找不到了，每一次请求都会获取到新的 session 对象。
- cookie 禁用了，session 机制还能实现吗？

  ■ 可以。需要使用 URL 重写机制。

  ■ http://localhost:8080/servlet12/test/session;jsessionid=19D1C99560DCBF84839FA43D58F56E16

  ■ URL 重写机制会提高开发者的成本。开发人员在编写任何请求路径的时候，后面都要添加一个 sessionid，给开发带来了很大的难度，很大的成本。所以大部分的网站都是这样设计的：你要是禁用 cookie，你就别用了。

### 总结

- request（对应的类名：HttpServletRequest）: 请求域（请求级别的）
- session（对应的类名：HttpSession）: 会话域（用户级别的）
- application（对应的类名：ServletContext）: 应用域（项目级别的，所有用户共享的）
- 这三个域对象的大小关系: request < session < application
- 他们三个域对象都有以下三个公共的方法：

  ■ setAttribute（向域当中绑定数据）

  ■ getAttribute（从域当中获取数据）

  ■ removeAttribute（删除域当中的数据）

- 使用原则：尽量使用小的域。

session 掌握之后，我们怎么解决 oa 项目中的登录问题，怎么能让登录起作用。登录成功之后，可以将用户的登录信息存储到 session 当中。也就是说 session 中如果有用户的信息就代表用户登录成功了。session 中没有用户信息，表示用户没有登录过。则跳转到登录页面。

销毁 session 对象：

```Java
session.invalidate();
```

## 3.2 Cookie

1. session 的实现原理中，每一个 session 对象都会关联一个 sessionid，例如：

- JSESSIONID=41C481F0224664BDB28E95081D23D5B8
- 以上的这个键值对数据其实就是 cookie 对象。
- 对于 session 关联的 cookie 来说，这个 cookie 是被保存在浏览器的“运行内存”当中。
- 只要浏览器不关闭，用户再次发送请求的时候，会自动将运行内存中的 cookie 发送给服务器。
- 例如，这个 Cookie: JSESSIONID=41C481F0224664BDB28E95081D23D5B8 就会再次发送给服务器。
- 服务器就是根据 41C481F0224664BDB28E95081D23D5B8 这个值来找到对应的 session 对象的。

2. cookie 怎么生成？cookie 保存在什么地方？cookie 有什么用？浏览器什么时候会发送 cookie，发送哪些 cookie 给服务器？

- cookie 最终是保存在浏览器客户端上的。

  - 可以保存在运行内存中。（浏览器只要关闭 cookie 就消失了。）
  - 也可以保存在硬盘文件中。（永久保存。）

- cookie 有啥用呢？

  - cookie 和 session 机制其实都是为了保存会话的状态。
  - cookie 是将会话的状态保存在浏览器客户端上。（cookie 数据存储在浏览器客户端上）
  - session 是将会话的状态保存在服务器端上。（session 对象是存储在服务器上）
  - 为什么要有 cookie 和 session 机制呢？因为 HTTP 协议是无状态 无连接协议。

3. cookie 的经典案例

   (1) 京东商城，在未登录的情况下，向购物车中放几件商品。然后关闭商城，再次打开浏览器，访问京东商城的时候，购物车中的商品还在，这是怎么做的？我没有登录，为什么购物车中还有商品呢？

   将购物车中的商品编号放到 cookie 当中，cookie 保存在硬盘文件当中。这样即使关闭浏览器。硬盘上的 cookie 还在。下一次再打开京东商城的时候，查看购物车的时候，会自动读取本地硬盘中存储的 cookie，拿到商品编号，动态展示购物车中的商品。

   京东存储购物车中商品的 cookie 可能是这样的：productIds=xxxxx,yyyy,zzz,kkkk。注意：cookie 如果清除掉，购物车中的商品就消失了。

   (2) 126 邮箱中有一个功能：十天内免登录

   这个功能也是需要 cookie 来实现的。怎么实现的呢？

   用户输入正确的用户名和密码，并且同时选择十天内免登录。登录成功后。浏览器客户端会保存一个 cookie，这个 cookie 中保存了用户名和密码等信息，这个 cookie 是保存在硬盘文件当中的，十天有效。在十天内用户再次访问 126 的时候，浏览器自动提交 126 的关联的 cookie 给服务器，服务器接收到 cookie 之后，获取用户名和密码，验证，通过之后，自动登录成功。

   (3) 怎么让 cookie 失效？

   ○ 十天过后自动失效;

   ○ 或者改密码;

   ○ 或者在客户端浏览器上清除 cookie。

4. cookie 机制和 session 机制其实都不属于 java 中的机制，实际上 cookie 机制和 session 机制都是 HTTP 协议的一部分。php 开发中也有 cookie 和 session 机制，只要是你是做 web 开发，不管是什么编程语言，cookie 和 session 机制都是需要的。
5. HTTP 协议中规定：任何一个 cookie 都是由 name 和 value 组成的。name 和 value 都是字符串类型的。
6. 在 java 的 servlet 中，对 cookie 提供了哪些支持呢？

   - 提供了一个 Cookie 类来专门表示 cookie 数据: `jakarta.servlet.http.Cookie`;

   - java 程序怎么把 cookie 数据发送给浏览器呢？`response.addCookie(Cookie  cookie);`

7. 在 HTTP 协议中是这样规定的：当浏览器发送请求的时候，会自动携带该 path 下的 cookie 数据给服务器。（URL）
8. 关于 cookie 的有效时间

- 怎么用 java 设置 cookie 的有效时间

  `cookie.setMaxAge(60 * 60)`: 设置 cookie 在一小时之后失效。

- 没有设置有效时间：默认保存在浏览器的运行内存中，浏览器关闭则 cookie 消失。

- 只要设置 cookie 的有效时间 > 0，这个 cookie 一定会存储到硬盘文件当中。

- 设置 cookie 的有效时间 = 0 呢？

  cookie 被删除，同名 cookie 被删除。

- 设置 cookie 的有效时间 < 0 呢？

  保存在运行内存中。和不设置一样。

9. 关于 cookie 的 path，cookie 关联的路径：

- 假设现在发送的请求路径是 `http://localhost:8080/servlet13/cookie/generate` 生成的 cookie，如果 cookie 没有设置 path，默认的 path 是什么？

  默认的 path 是：`http://localhost:8080/servlet13/cookie` 以及它的子路径。

  也就是说，以后只要浏览器的请求路径是 `http://localhost:8080/servlet13/cookie` 这个路径以及这个路径下的子路径，cookie 都会被发送到服务器。

- 手动设置 cookie 的 path

  `cookie.setPath("/servlet13")`: 表示只要是这个 servlet13 项目的请求路径，都会提交这个 cookie 给服务器。

10. 浏览器发送 cookie 给服务器了，服务器中的 java 程序怎么接收？

```Java
Cookie[] cookies = request.getCookies(); // 这个方法可能返回null
if(cookies != null){
    for(Cookie cookie : cookies){
        // 获取cookie的name
        String name = cookie.getName();
        // 获取cookie的value
        String value = cookie.getValue();
    }
}
```

11. 使用 cookie 实现一下十天内免登录功能

- 先实现登录功能

  ■ 登录成功, 跳转到部门列表页面

  ■ 登录失败, 跳转到登录失败页面

- 修改前端页面

  ■ 在登录页面给一个复选框，复选框后面给一句话：十天内免登录。

  ■ 用户选择了复选框：表示要支持十天内免登录。

  ■ 用户没有选择复选框：表示用户不想使用十天内免登录功能。

- 修改 Servlet 中的 login 方法

  如果用户登录成功了，并且用户登录时选择了十天内免登录功能，这个时候应该在 Servlet 的 login 方法中创建 cookie，用来存储用户名和密码，并且设置路径，设置有效期，将 cookie 响应给浏览器。（浏览器将其自动保存在硬盘文件当中 10 天）

- 用户再次访问该网站的时候，访问这个网站的首页的时候，有两个走向:

  ■ 要么跳转到部门列表页面

  ■ 要么跳转到登录页面

  ■ 以上分别有两个走向，这显然是需要编写 java 程序进行控制的。

## 3.3 JSP

### JSP 的本质

- index.jsp 访问的时候，会自动翻译生成 index_jsp.java，会自动编译生成 index_jsp.class，那么 index_jsp 这就是一个类。
- index_jsp 类继承 HttpJspBase，而 HttpJspBase 类继承的是 HttpServlet。所以 index_jsp 类就是一个 Servlet 类。
- jsp 的生命周期和 Servlet 的生命周期完全相同。完全就是一个东西。没有任何区别。
- jsp 和 servlet 一样，都是单例的。（假单例。）

### 为什么 jsp 文件第一次访问的时候是比较慢？

- 为什么大部分的运维人员在给客户演示项目的时候，为什么提前先把所有的 jsp 文件先访问一遍。
- 第一次比较麻烦：
  - 要把 jsp 文件翻译生成 java 源文件
  - java 源文件要编译生成 class 字节码文件
  - 然后通过 class 去创建 servlet 对象
  - 然后调用 servlet 对象的 init 方法
  - 最后调用 servlet 对象的 service 方法。
- 第二次就比较快了，为什么？
  因为第二次直接调用单例 servlet 对象的 service 方法即可。

### JSP 是什么？

- JSP 是 java 程序。（JSP 本质还是一个 Servlet）
- JSP 是：JavaServer Pages 的缩写。（基于 Java 语言实现的服务器端的页面。）
- Servlet 是 JavaEE 的 13 个子规范之一，那么 JSP 也是 JavaEE 的 13 个子规范之一。
- JSP 是一套规范。所有的 web 容器/web 服务器都是遵循这套规范的，都是按照这套规范进行的“翻译”。
- 每一个 web 容器/web 服务器都会内置一个 JSP 翻译引擎。

- 对 JSP 进行错误调试的时候，还是要直接打开 JSP 文件对应的 java 文件，检查 java 代码。

### JSP 和 Servlet 的区别

职责不同：

- Servlet 的职责是什么：收集数据。（Servlet 的强项是逻辑处理，业务处理，然后链接数据库，获取/收集数据。）
- JSP 的职责是什么：展示数据。（JSP 的强项是做数据的展示）
  <a-back-top />

### JSP 的基础语法

#### 在 jsp 文件中直接编写文字，都会自动被翻译到哪里？

- 翻译到 servlet 类的 service 方法的 out.write("翻译到这里")，直接翻译到双引号里，被 java 程序当做普通字符串打印输出到浏览器。
- 在 JSP 中编写的 HTML, CSS, JS 代码，这些代码对于 JSP 来说只是一个普通的字符串。但是 JSP 把这个普通的字符串一旦输出到浏览器，浏览器就会对 HTML, CSS, JS 进行解释执行, 渲染出界面。

#### JSP 的 page 指令（这个指令后面再详细说，这里先解决一下中文乱码问题），解决响应时的中文乱码问题：

通过 page 指令来设置响应的内容类型，在内容类型的最后面添加：charset=UTF-8

- `<%@page contentType="text/html;charset=UTF-8"%>`，表示响应的内容类型是 text/html，采用的字符集 UTF-8
- `<%@page import="java.util.List,java.util.ArrayList"%>`

#### 怎么在 JSP 中编写 Java 程序：

1.  **`<% java 语句; %>`**

    - 在这个符号当中编写的被视为 java 程序，被翻译到 Servlet 类的 service 方法内部。
    - 这里你要细心点，你要思考，在<% %>这个符号里面写 java 代码的时候，你要时时刻刻的记住你正在“方法体”当中写代码，方法体中可以写什么，不可以写什么，你心里是否明白呢？
    - 在 service 方法当中编写的代码是有顺序的，方法体当中的代码要遵循自上而下的顺序依次逐行执行。 - service 方法当中不能写静态代码块，不能写方法，不能定义成员变量。。。。。。
    - 在同一个 JSP 当中 <%%> 这个符号可以出现多个。

2.  **`<%! %>`**

    - 在这个符号当中编写的 java 程序会自动翻译到 service 方法之外。
    - 这个语法很少用，为什么？不建议使用，因为在 service 方法外面写静态变量和实例变量，都会存在线程安全问题，因为 JSP 就是 servlet，servlet 是单例的，多线程并发的环境下，这个静态变量和实例变量一旦有修改操作，必然会存在线程安全问题。

3.  **JSP 的输出语句**

    - 怎么向浏览器上输出一个 java 变量。
    - <% String name = “jack”; out.write("name = " + name); %>
    - 注意：以上代码中的 out 是 JSP 的九大内置对象之一。可以直接拿来用。当然，必须只能在 service 方法内部使用。
    - 如果向浏览器上输出的内容中没有“java 代码”，例如输出的字符串是一个固定的字符串，可以直接在 jsp 中编写，不需要写到<%%> 这里。
    - 如果输出的内容中含有“java 代码”，这个时候可以使用以下语法格式：

      ○ <%= %> 注意：在=的后面编写要输出的内容。

      ○ <%= %> 这个符号会被翻译到哪里？最终翻译成什么？

          1）翻译成了这个java代码： out.print();

          2）翻译到service方法当中了。

      ○ 什么时候使用<%=%> 输出呢？输出的内容中含有 java 的变量，输出的内容是一个动态的内容，不是一个死的字符串。如果输出的是一个固定的字符串，直接在 JSP 文件中编写即可。

4.  **在 JSP 中如何编写 JSP 的专业注释**

    - <%--JSP 的专业注释，不会被翻译到 java 源代码当中。--%>

5.  **JSP 基础语法总结**

    - JSP 中直接编写普通字符串

      翻译到 service 方法的 out.write("这里")

    - `<% %>`

      翻译到 service 方法体内部，里面是一条一条的 java 语句。

    - `<%! %>`

      翻译到 service 方法之外。

    - `<%= %>`

      翻译到 service 方法体内部，翻译为：out.print();

    - `<%@page   contentType="text/html;charset=UTF-8"%>`

      page 指令，通过 contentType 属性用来设置响应的内容类型。

6.  **JSP 的指令**

    - 指令的作用：指导 JSP 的翻译引擎如何工作（指导当前的 JSP 翻译引擎如何翻译 JSP 文件。）
    - 指令包括哪些呢？

      ■ include 指令：包含指令，在 JSP 中完成静态包含，很少用了。（这里不讲）

      ■ taglib 指令：引入标签库的指令。这\*\*个到 JJSTL 标签库的时候再学习。现在先不管。

      ■ page 指令：目前重点学习一个 page 指令。

    - 指令的使用语法是什么？
      ■ <%@指令名 属性名=属性值 属性名=属性值 属性名=属性值....%>
    - 关于 page 指令当中都有哪些常用的属性呢？
