const baseUrl = "https://img.z4a.net/images";

const frontendBooks = [
  {
    id: 1,
    title: "你不知道的 JavaScript 上卷",
    author: "Kyle Simpson",
    imageUrl: baseUrl + "/2024/07/13/JavaScript01.png",
    category: "前端",
    description: "简介...",
    publishDate: "2015年",
    rate: 5
  },
  {
    id: 2,
    title: "你不知道的 JavaScript 中卷",
    author: "Kyle Simpson",
    imageUrl: baseUrl + "/2024/07/13/JavaScript02.jpeg",
    category: "前端",
    description: "简介...",
    publishDate: "2015年",
    rate: 3
  },
  {
    id: 3,
    title: "你不知道的 JavaScript 下卷",
    author: "Kyle Simpson",
    imageUrl: baseUrl + "/2024/07/13/JavaScript03.jpeg",
    category: "前端",
    description: `What is this book about?Beginning Web Programming with HTML, XHTML, and CSS teaches you how to write Web pages using HTML, XHTML, and CSS.`,
    publishDate: "2015年",
    rate: 4.5
  },
  {
    id: 4,
    title: "深入浅出 Node.js",
    author: "朴灵",
    imageUrl: baseUrl + "/2024/07/13/Node.jpeg",
    category: "前端",
    description: "暂无简介",
    publishDate: "2013年",
    rate: 2
  },
  {
    id: 5,
    title: "JavaScript高级程序设计 第4版",
    author: "[美]马特·弗里斯比(MattFrisbie)",
    imageUrl: baseUrl + "/2024/07/13/javascript.jpeg",
    category: "前端",
    description: "本书是JavaScript经典图书的新版。第4版涵盖ECMAScript 2019，全面、深入地介绍了JavaScript开发者必须掌握的前端开发技术，涉及JavaScript的基础特性和高级特性。书中详尽讨论了JavaScript的各个方面，从JavaScript的起源开始，逐步讲解到新出现的技术，其中重点介绍ECMAScript和DOM标准。在此基础上，接下来的各章揭示了JavaScript的基本概念，包括类、期约、迭代器、代理，等等。另外，书中深入探讨了客户端检测、事件、动画、表单、错误处理及JSON。本书同时也介绍了近几年来涌现的重要新规范，包括Fetch API、模块、工作者线程、服务线程以及大量新API。",
    publishDate: "2020年08月",
    rate: 5
  },
  {
    id: 6,
    title: "CSS权威指南（第四版）",
    author: "Eric A. Meyer和Estelle Weyl",
    imageUrl: baseUrl + "/2024/07/13/css.jpeg",
    category: "前端",
    description: `本书涵盖以下内容：
                  •选择符、特指度和层叠。
                  •值、单位、字体和文本属性。
                  •内边距、边框、轮廓和外边距。
                  •颜色、背景和渐变。
                  •浮动和定位。
                  •弹性盒布局。
                  •全新的栅格布局系统。
                  •2D和3D变形、过渡和动画。
                  •滤镜、混合、裁剪和遮罩。
                  •媒体查询和特性查询。`,
    publishDate: "2019年04月",
    rate: 4
  },
  {
    id: 7,
    title: "HTTP权威指南",
    author: "[美]David Gourley",
    imageUrl: baseUrl + "/2024/07/13/http01.jpeg",
    category: "前端",
    description: `详细解释了HTTP协议，包括它是如何工作的，如何用它来开发基于Web的应用程序。但本书并不只介绍了HTTP，还探讨了HTTP有效工作所依赖的所有其他核心因特网技术。尽管HTTP是本书的中心内容，但本书的本质是理解Web的工作原理，以及如何将这些知识应用到Web编程和管理之中去，主要涵盖HTTP的技术运作方式、产生动机、性能和目标，以及一些相关技术问题。`,
    publishDate: "2012年08月",
    rate: 4
  },
  {
    id: 8,
    title: "Ajax基础教程",
    author: "[美]阿斯利森 [美]舒塔",
    imageUrl: baseUrl + "/2024/07/13/ajax01.jpeg",
    category: "前端",
    description: `本书重点介绍Ajax及相关的工具和技术，主要内容包括XMLHttpRequest对象及其属性和方法、发送请求和处理响应、构建完备的Ajax开发工具、使用JsUnit测试JaScript、分析JaScript调试工具和技术，以及Ajax开发模式和框架等。`,
    publishDate: "2006年02月",
    rate: 4
  },
  {
    id: 9,
    title: "Ajax实战",
    author: "[美]阿斯利森 [美]舒塔",
    imageUrl: baseUrl + "/2024/07/13/ajax02.jpeg",
    category: "前端",
    description: `本书重点介绍Ajax及相关的工具和技术，主要内容包括XMLHttpRequest对象及其属性和方法、发送请求和处理响应、构建完备的Ajax开发工具、使用JsUnit测试JaScript、分析JaScript调试工具和技术，以及Ajax开发模式和框架等。`,
    publishDate: "2006年02月",
    rate: 4
  },
];

const backendBooks = [
  {
    id: 1,
    title: "On Java 基础卷",
    author: "[美]布鲁斯·埃克尔",
    imageUrl: baseUrl + "/2024/07/13/onjava01.jpeg",
    category: "后端",
    description: "本书是布鲁斯·埃克尔时隔15年，继Thinking in Java之后又一力作，基于Java的3个长期支持版（Java 8、11、17），讲解Java核心语法，并对Java的核心变化进行详述。全书内容通俗易懂，配合示例讲解逐步深入，并结合实际开发需要，从语言底层设计出发，有效帮读者规避一些常见的开发陷阱。主体部分共22章，内容包含对象、操作符、控制流、初始化和清理、复用、多态、接口、内部类、集合、函数式编程、流、异常、代码校验、文件、字符串、泛型等。本书适合各个层次的Java开发者阅读，同时也可作为面向对象程序设计语言以及Java语言的参考教材。",
    publishDate: "2022年03月",
    rate: 4.5
  },
  {
    id: 2,
    title: "On Java 进阶卷",
    author: "[美]布鲁斯·埃克尔",
    imageUrl: baseUrl + "/2024/07/13/onjava02.jpeg",
    category: "后端",
    description: "本书是布鲁斯·埃克尔时隔15年，继Thinking in Java之后又一力作，基于Java的3个长期支持版（Java 8、11、17），讲解Java核心语法，并对Java的核心变化进行详述。全书内容通俗易懂，配合示例讲解逐步深入，并结合实际开发需要，从语言底层设计出发，有效帮读者规避一些常见的开发陷阱。主体部分共22章，内容包含对象、操作符、控制流、初始化和清理、复用、多态、接口、内部类、集合、函数式编程、流、异常、代码校验、文件、字符串、泛型等。本书适合各个层次的Java开发者阅读，同时也可作为面向对象程序设计语言以及Java语言的参考教材。",
    publishDate: "2022年03月",
    rate: 4.5
  },
  {
    id: 3,
    title: "Effective Java",
    author: "[美] 约书亚·布洛克（Joshua Bloch）",
    imageUrl: baseUrl + "/2024/08/05/effective_java.jpeg",
    category: "后端",
    description: "Java之父James Gosling鼎力推荐、Jolt获奖作品全新升级，针对Java 7、8、9全面更新，Java程序员参考书。包含大量完整的示例代码和透彻的技术分析，通过90条经验法则，探索新的设计模式和语言习惯用法，帮助读者更加有效地使用Java编程语言及其基本类库。",
    publishDate: "2019年04月",
    rate: 4.5
  },
  {
    id: 4,
    title: "Spring实战（第6版）",
    author: "克雷格·沃斯",
    imageUrl: baseUrl + "/2024/08/05/spring6.jpeg",
    category: "后端",
    description: "本书是一本经典而实用的Spring学习指南，介绍了Spring使用框架、Spring Boot，以及Spring系统中的其他组成部分。",
    publishDate: "2022年12月",
    rate: 4.5
  },
  {
    id: 5,
    title: "Spring MVC学习指南 第2版",
    author: "[美]Paul Deck",
    imageUrl: baseUrl + "/2024/08/05/springmvc.jpeg",
    category: "后端",
    description: "Spring MVC是Spring框架中用于Web应用快速开发的一个模块，其中的MVC是Model-View-Controller的缩写。",
    publishDate: "2017年05月",
    rate: 4.0
  },
  {
    id: 6,
    title: "Spring Boot实战",
    author: "[美]克雷格·沃斯（Craig Walls）",
    imageUrl: baseUrl + "/2024/08/05/springboot.jpeg",
    category: "后端",
    description: "本书以Spring应用程序开发为中心，全面讲解如何运用Spring Boot提高效率，使应用程序的开发和管理更加轻松有趣。",
    publishDate: "2021年07",
    rate: 4.8
  },
  {
    id: 7,
    title: "MySQL必知必会",
    author: "[英]Ben Forta",
    imageUrl: baseUrl + "/2024/08/05/mysql.jpeg",
    category: "后端",
    description: "书中从介绍简单的数据检索开始，逐步深入一些复杂的内容，包括联结的使用、子查询、正则表达式和基于全文本的搜索、存储过程、游标、触发器、表约束，等等。",
    publishDate: "2020年04月",
    rate: 4.6
  },
  {
    id: 8,
    title: "Redis设计与实现",
    author: "黄健宏",
    imageUrl: baseUrl + "/2024/08/05/redis.jpeg",
    category: "后端",
    description: "本书全面而完整地讲解了Redis的内部机制与实现方式，对Redis 的大多数单机功能以及所有多机功能的实现原理进行了介绍，展示了这些功能的核心数据结构以及关键的算法思想。",
    publishDate: "2022年03月",
    rate: 4.2
  }
];

export { frontendBooks, backendBooks };