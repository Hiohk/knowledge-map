---
prev:
  text: "JSP"
  link: "/backend/javaweb/javaweb03"

next:
  text: "JSTL 标签库"
  link: "/backend/javaweb/javaweb05"
---

# 4. EL 表达式

## 4.1 EL 表达式简介

- Expression Language（表达式语言）
- EL 表达式可以代替 JSP 中的 java 代码，让 JSP 文件中的程序看起来更加整洁，美观。
- JSP 中夹杂着各种 java 代码，例如<% java 代码 %>、<%=%>等，导致 JSP 文件很混乱，不好看，不好维护，所以才有了后期的 EL 表达式。
- EL 表达式可以算是 JSP 语法的一部分。EL 表达式归属于 JSP。

## 4.2 EL 表达式作用

EL 表达式出现在 JSP 中的作用主要是： 从某个作用域中取数据，然后将其转换成字符串，然后将其输出到浏览器。这就是 EL 表达式的作用：

- 从某个域中取数据。

  四个域：

  ○ pageContext

  ○ request

  ○ session

  ○ application

- 将取出的数据转成字符串。

  ● 如果是一个 java 对象，也会自动调用 java 对象的 toString 方法将其转换成字符串。

- 将字符串输出到浏览器。

  ● 和这个一样：<%= %>，将其输出到浏览器。

EL 表达式很好用，基本的语法格式： `${表达式}`

## 4.3 EL 表达式的使用

```Java
<%
	// 创建User对象
	User user = new User();
	user.setUsername("jackson");
	user.setPassword("1234");
	user.setAge(50);

	// 将User对象存储到某个域当中。一定要存，因为EL表达式只能从某个范围中取数据。
	// 数据是必须存储到四大范围之一的。
	request.setAttribute("userObj", user);
%>

<%--使用EL表达式取--%>
${这个位置写什么？？这里写的一定是存储到域对象当中时的name}

// 要这样写：
${userObj}
// 等同于java代码：
<%=request.getAttribute("userObj")%>

// 不要这样写：${"userObj"}

// 面试题：
// ${abc} 和 ${"abc"}的区别是什么？
// ${abc}表示从某个域中取出数据，并且被取的这个数据的name是"abc"，
// 之前一定有这样的代码: 域.setAttribute("abc", 对象);
// ${"abc"} 表示直接将"abc"当做普通字符串输出到浏览器。不会从某个域中取数据了。

// ${userObj} 底层是怎么做的？
// 从域中取数据，取出user对象，然后调用user对象的toString方法，转换成字符串，输出到浏览器。

// <%--如果想输出对象的属性值，怎么办？--%>
${userObj.username} 使用这个语法的前提是：User对象有getUsername()方法。
${userObj.password} 使用这个语法的前提是：User对象有getPassword()方法。
${userObj.age} 使用这个语法的前提是：User对象有getAge()方法。
${userObj.email} 使用这个语法的前提是：User对象有getEmail()方法。
// EL表达式中的. 这个语法，实际上调用了底层的getXxx()方法。
// 注意：如果没有对应的get方法，则出现异常。报500错误。

${userObj.addr222.zipcode}
// 以上EL表达式对应的java代码：
user.getAddr222().getZipcode()
```

1.  EL 表达式优先从小范围中读取数据:

    pageContext < request < session < application

2.  EL 表达式中有四个隐含的隐式的范围：

    - pageScope 对应的是 pageContext 范围
    - requestScope 对应的是 request 范围
    - sessionScope 对应的是 session 范围
    - applicationScope 对应的是 application 范围
    - EL 表达式对 null 进行了预处理。如果是 null，则向浏览器输出一个空字符串。
    - EL 表达式取数据的时候有两种形式：

      第一种：`.` （大部分使用这种方式）

      第二种：`[ ]`（如果存储到域的时候，这个 name 中含有特殊字符，可以使用 `[ ]`）

      1）`request.setAttribute("abc.def", "zhangsan")`;

      2）`${requestScope.abc.def}` 这样是无法取值的。

      3）应该这样：`${requestScope["abc.def"]}`

3.  掌握使用 EL 表达式，怎么从 Map 集合中取数据：

    - `${map.key}`

4.  掌握使用 EL 表达式，怎么从数组和 List 集合中取数据：

    - `${数组[0]}`
    - `${数组[1]}`
    - `${list[0]}`

5.  page 指令当中，有一个属性，可以忽略 EL 表达式

```Java
<%@page contentType="text/html;charset=UTF-8" isELIgnored="true" %>
// isELIgnored="true" 表示忽略EL表达式
// isELIgnored="false" 表示不忽略EL表达式。（这是默认值）
// isELIgnored="true" 这个是全局的控制。
// 可以使用反斜杠进行局部控制：\${username} 这样也可以忽略EL表达式。
```

6. 通过 EL 表达式获取应用的根：
   - `${pageContext.request.contextPath}`
7. EL 表达式中其他的隐式对象：
   - pageContext
   - param
   - paramValues
   - initParam
8. EL 表达式的运算符

   - 算术运算符

     `+`、`-`、`*`、`/`、`%`

   - 关系运算符

     `==`、`!=`、`>`、`>=`、`<`、`<=`、`eq`

   - 逻辑运算符

     `!`、`&&`、`||`

   - 条件运算符

     `? :`

   - 取值运算符

     `[ ]` 和 `.`

   - empty 运算符

     empty 运算符的结果是 boolean 类型

     `${empty param.username}`

     `${not empty param.username}`

     `${!empty param.password}`

<a-back-top />

<reading-progress-bar/>