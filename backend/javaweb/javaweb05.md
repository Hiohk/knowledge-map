---
prev:
  text: "EL 表达式"
  link: "/backend/javaweb/javaweb04"

next:
  text: "Filter 过滤器"
  link: "/backend/javaweb/javaweb06"
---

# 5. JSTL 标签库

## 5.1 什么是 JSTL 标签库？

- Java Standard Tag Lib（Java 标准的标签库）
- JSTL 标签库通常结合 EL 表达式一起使用。目的是让 JSP 中的 java 代码消失。
- 标签是写在 JSP 当中的，但实际上最终还是要执行对应的 java 程序。（java 程序在 jar 包当中）

## 5.2 使用 JSTL 标签库的步骤

第一步：引入 JSTL 标签库对应的 jar 包。

- tomcat10 之后引入的 jar 包是：

`jakarta.servlet.jsp.jstl-2.0.0.jar`

`jakarta.servlet.jsp.jstl-api-2.0.0.jar`

- 在 IDEA 当中怎么引入？

  1. 在 WEB-INF 下新建 lib 目录，然后将 jar 包拷贝到 lib 当中。然后将其“Add Lib...”

  2. 一定是要和 mysql 的数据库驱动一样，都是放在 WEB-INF/lib 目录下的。

  3. 什么时候需要将 jar 包放到 WEB-INF/lib 目录下？如果这个 jar 是 tomcat 服务器没有的。

第二步：在 JSP 中引入要使用标签库。（使用 taglib 指令引入标签库。）

- JSTL 提供了很多种标签，你要引入哪个标签？？？？重点掌握核心标签库。

```Java
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
// 这个就是核心标签库。
// prefix="这里随便起一个名字就行了，核心标签库，大家默认的叫做c，你随意。"
```

- 第三步：在需要使用标签的位置使用即可。表面使用的是标签，底层实际上还是 java 程序。

  ● JSTL 标签的原理

```Java
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
// 以上uri后面的路径实际上指向了一个xxx.tld文件。
// tld文件实际上是一个xml配置文件。
// 在tld文件中描述了“标签”和“java类”之间的关系。
// 以上核心标签库对应的tld文件是：c.tld文件。它在哪里。
// 在jakarta.servlet.jsp.jstl-2.0.0.jar里面META-INF目录下，有一个c.tld文件。
```

    源码解析：配置文件tld解析

```xml
<tag>
    <description>对该标签的描述</description>
    <!-- 标签的名字 -->
    <name>catch</name>
    <!-- 标签对应的java类 -->
    <tag-class>org.apache.taglibs.standard.tag.common.core.CatchTag</tag-class>
    <!-- 标签体当中可以出现的内容，如果是JSP，就表示标签体中可以出现符合JSP所有语法的代码。例如EL表达式。 -->
    <body-content>JSP</body-content>
    <attribute>
        <description>
        	对这个属性的描述
        </description>
        <!-- 属性名 -->
        <name>var</name>
        <!-- false表示该属性不是必须的。true表示该属性是必须的。 -->
        <required>false</required>
        <!-- 这个描述说明了该属性是否支持EL表达式。false表示不支持。true表示支持EL表达式。 -->
        <rtexprvalue>false</rtexprvalue>
    </attribute>
</tag>

<c:catch var="">
	JSP....
</c:catch>
```

- JSTL 中的核心标签库 core 当中有哪些常用的标签呢？

  - `c:if`
  
    <c:if test="boolean 类型，支持 EL 表达式" var="i" scope="page"></c: if>

  - `c:forEach`

    <c:forEach items="集合，支持 EL 表达式" var="集合中的元素" varStatus="元素状态对象"> ${元素状态对象.count} </c: forEach>

    <c:forEach var="i" begin="1" end="10" step="2"> ${i} </c: forEach>

  - `c:choose` `c:when` `c:otherwise`

```xml
<c:choose>
    <c:when test="${param.age < 18}">
        青少年
    </c:when>
    <c:when test="${param.age < 35}">
        青年
    </c:when>
    <c:when test="${param.age < 55}">
        中年
    </c:when>
    <c:otherwise>
        老年
    </c:otherwise>
</c:choose>
```

<a-back-top />

<reading-progress-bar/>