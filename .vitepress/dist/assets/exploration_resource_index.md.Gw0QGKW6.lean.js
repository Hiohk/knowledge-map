import{I,P as L}from"./chunks/theme.B4DIv_iF.js";import{$ as F,r as d,ab as i,S as l,U as g,c as e,Z as o,a4 as t,G as f,X as c,j as K,F as T,ac as $,Y as A,_ as Q,a5 as X,a6 as Y,u as h,aj as M}from"./chunks/framework.BDLhZlrp.js";const Z={class:"book-detail"},ee=["src"],te={class:"description"},oe={__name:"BookDetail",props:{book:Object},emits:["close"],setup(r,{emit:_}){const u=_,p=d(!0),m=()=>{p.value=!1,u("close",!1)};return(S,k)=>{const w=i("a-descriptions-item"),x=i("a-tooltip"),D=i("a-rate"),v=i("a-descriptions"),b=i("a-modal");return l(),g("div",null,[e(b,{visible:p.value,"onUpdate:visible":k[0]||(k[0]=j=>p.value=j),title:"书籍详情",onCancel:m,footer:null,maskClosable:!1},{default:o(()=>[t("div",Z,[t("img",{src:r.book.imageUrl,alt:"book cover",class:"book-cover"},null,8,ee),e(v,{class:"book-info",title:r.book.title,column:1},{default:o(()=>[e(w,{label:"作者"},{default:o(()=>[f(c(r.book.author),1)]),_:1}),e(w,{label:"简介"},{default:o(()=>[t("span",te,[e(x,{placement:"right"},{title:o(()=>[t("span",null,c(r.book.description),1)]),default:o(()=>[f(" "+c(r.book.description),1)]),_:1})])]),_:1}),e(w,{label:"分类"},{default:o(()=>[f(c(r.book.category),1)]),_:1}),e(w,{label:"出版时间"},{default:o(()=>[f(c(r.book.publishDate),1)]),_:1}),e(w,{label:"推荐指数"},{default:o(()=>[e(D,{class:"rate-num",value:r.book.rate,disabled:"","allow-half":""},null,8,["value"])]),_:1})]),_:1},8,["title"])])]),_:1},8,["visible"])])}}},ae=F(oe,[["__scopeId","data-v-8c3dfc63"]]),V=r=>(X("data-v-5b9bcf3b"),r=r(),Y(),r),se={class:"book-recommendation"},ie={class:"header"},ce=V(()=>t("h2",null,"推荐书籍",-1)),le={class:"book-list"},ne=["onClick"],re={class:"book"},de={class:"book-content"},ue=V(()=>t("div",{class:"margin"},null,-1)),pe={class:"info-section"},he={class:"info-item"},_e={class:"info-title"},ge={class:"info-item"},fe=V(()=>t("span",{class:"info-title"},"作者:",-1)),me={class:"info-content"},ve={class:"info-item"},be=V(()=>t("span",{class:"info-title"},"分类:",-1)),ye={class:"info-content"},ke={class:"info-item"},we=V(()=>t("span",{class:"info-title"},"出版时间:",-1)),Se={class:"info-content"},xe={class:"info-item"},je=V(()=>t("span",{class:"info-title"},"推荐指数:",-1)),De={class:"cover"},Ce=["src"],Je={__name:"BooksRecommendation",props:{books:{type:Array,default:()=>[]}},setup(r){const _=d(""),u=d(""),p=d(null),m=d(!1),S=r,k=d(["前端","后端"]),w=K(()=>S.books.filter(v=>{const b=!u.value||v.category===u.value,j=!_.value||v.title.toLowerCase().includes(_.value.toLowerCase())||v.author.toLowerCase().includes(_.value.toLowerCase());return b&&j})),x=v=>{p.value=v,m.value=!0},D=()=>{m.value=!1};return(v,b)=>{const j=i("a-input"),C=i("a-select-option"),B=i("a-select"),y=i("a-rate");return l(),g("div",se,[t("div",ie,[ce,e(j,{value:_.value,"onUpdate:value":b[0]||(b[0]=s=>_.value=s),placeholder:"搜索书籍或作者",style:{width:"200px","margin-left":"10px"},"allow-clear":""},null,8,["value"]),e(B,{value:u.value,"onUpdate:value":b[1]||(b[1]=s=>u.value=s),placeholder:"选择分类",style:{width:"150px","margin-left":"10px"},"allow-clear":""},{default:o(()=>[e(C,{value:""},{default:o(()=>[f("所有分类")]),_:1}),(l(!0),g(T,null,$(k.value,s=>(l(),A(C,{key:s},{default:o(()=>[f(c(s),1)]),_:2},1024))),128))]),_:1},8,["value"])]),t("div",le,[(l(!0),g(T,null,$(w.value,s=>(l(),g("div",{key:s.id,onClick:U=>x(s),class:"book-card"},[t("div",re,[t("div",de,[ue,t("div",pe,[t("div",he,[t("div",_e,"《"+c(s.title)+"》",1)]),t("div",ge,[fe,t("span",me,c(s.author),1)]),t("div",ve,[be,t("span",ye,c(s.category),1)]),t("div",ke,[we,t("span",Se,c(s.publishDate),1)]),t("div",xe,[je,e(y,{value:s.rate,disabled:"","allow-half":""},null,8,["value"])])])]),t("div",De,[t("img",{src:s.imageUrl,alt:"book cover",class:"book-cover"},null,8,Ce)])])],8,ne))),128))]),m.value?(l(),A(ae,{key:0,book:p.value,onClose:D},null,8,["book"])):Q("",!0)])}}},O=F(Je,[["__scopeId","data-v-5b9bcf3b"]]),Be=[{title:"Vue3.0",href:"https://v3.cn.vuejs.org/",desc:"易学易用，性能出色，适用场景丰富的 Web 前端框架",icon:"vscode-icons:file-type-vue"},{title:"MDN",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",desc:"MDN文档",icon:"logos:mdn"},{title:"Vuex",href:"https://next.router.vuejs.org/zh/",desc:"Vuex中文文档",icon:"skill-icons:vuejs-light"},{title:"Vue-Router",href:"https://router.vuejs.org/zh/",desc:"Vue-Router中文文档",icon:"vscode-icons:file-type-vueconfig"},{title:"Vue-Cli",href:"https://cli.vuejs.org/zh/",desc:"Vue-Cli中文文档",icon:"skill-icons:vuejs-dark"},{title:"Pinia",href:"https://pinia.vuejs.org/zh/",desc:"符合直觉的 Vue.js 状态管理库",icon:"logos:pinia"},{title:"Node.js",href:"https://nodejs.org/zh-cn/",desc:"Node.js中文文档",icon:"logos:nodejs"},{title:"Java",href:"https://www.java.com/zh-CN/",desc:"Java API DOC",icon:"devicon:java-wordmark"},{title:"axios",href:"https://axios-http.com/zh-cn/docs/intro",desc:"axios中文文档",icon:"logos:axios"},{title:"TypeScript",href:"https://typescript.bootcss.com/",desc:"TypeScript中文文档",icon:"fluent:code-ts-rectangle-16-regular",color:"color: #00B8F6"},{title:"React",href:"https://react.docschina.org/",desc:"React中文文档",icon:"logos:react"},{title:"mongoDB",href:"https://www.mongodb.com/docs/manual/",desc:"MongoDB中文文档",icon:"devicon:mongodb-wordmark"},{title:"MySQL",href:"https://dev.mysql.com/doc/",desc:"MySQL中文文档",icon:"logos:mysql"},{title:"Redis",href:"https://redis.io/docs/",desc:"Redis中文文档",icon:"devicon:redis-wordmark"},{title:"uni-app",href:"https://uniapp.dcloud.net.cn/",desc:"uni-app 是一个使用 Vue.js 开发所有前端应用的框架",icon:"carbon:app",color:"color: #2B9939"},{title:"W3School",href:"https://www.w3school.com.cn/",desc:"W3School",icon:"simple-icons:w3schools",color:"color: #BD2D2F"}],Ue=[{title:"stack overflow",href:"https://stackoverflow.com/",desc:"Stack Overflow是最受程序员欢迎的IT技术问答网站",icon:"devicon:stackoverflow"},{title:"稀土掘金",href:"https://juejin.cn/",desc:"开发者社区",icon:"simple-icons:juejin",color:"color: #1F80FF"},{title:"开源中国",href:"https://www.oschina.net/",desc:"中国版的Github，国内最大的开源技术社区",icon:"arcticons:china-construction-bank",color:"color: #3CA054"},{title:"CSDN",href:"https://www.csdn.net/",desc:"国内开发者社区",icon:"logos:zulip-icon"},{title:"SegmentFault",href:"https://segmentfault.com/",desc:"开放式协作的问答社区",icon:"logos:segment"},{title:"Github",href:"https://github.com/",desc:"Github",icon:"logos:github-icon"},{title:"阿里云开发者社区",href:"https://developer.aliyun.com/",desc:"阿里云开发者社区",icon:"ant-design:aliyun-outlined",color:"color: #ef6400"},{title:"腾讯云开发者社区",href:"https://cloud.tencent.com/developer",desc:"腾讯云开发者社区",icon:"emojione:cloud"},{title:"Gitee",href:"https://gitee.com/",desc:"国内代码托管平台",icon:"simple-icons:gitee",color:"color: #C71D23"},{title:"GitLab",href:"https://gitlab.cn/",desc:"一站式DevOps平台",icon:"logos:gitlab",color:"color: #C71D23"},{title:"51CTO",href:"https://www.51cto.com/",desc:"中国领先的IT技术网站",icon:"streamline:ai-technology-spark",color:"color: #C71D23"},{title:"InfoQ",href:"https://xie.infoq.cn/",desc:"写作社区-专业技术博客社区",icon:"simple-icons:infoq",color:"color: #0B74DB"}],Te=[{title:"Element Plus",href:"https://element-plus.org/zh-CN/",desc:"一个Vue3 UI 框架",icon:"ep:element-plus",color:"color: #00B8F6"},{title:"Ant Design Vue",href:"https://www.antdv.com/docs/vue/introduce-cn",desc:"持续探索企业级应用的最佳 UI 实践",icon:"logos:ant-design"},{title:"TDesign",href:"https://tdesign.tencent.com/",desc:"TDesign 企业级设计体系",icon:"icon-park-outline:bydesign",color:"color: #00B8F6"},{title:"Arco Design",href:"https://arco.design/vue/docs/start",desc:"字节跳动的UI组件库",icon:"simple-icons:bytedance",color:"color: #00B8F6"},{title:"Vant",href:"https://vant-contrib.gitee.io/vant/#/zh-CN/",desc:"轻量、可定制的移动端 Vue 组件库",icon:"logos:uikit"},{title:"Vuetify",href:"https://vuetifyjs.com/zh-Hans/",desc:"Vuetify is a no design skills required Open Source UI Library with beautifully handcrafted Vue Components.",icon:"devicon:vuetify"},{title:"Bootstrap",href:"https://www.bootcss.com/",desc:"简洁、直观、强悍的前端开发框架，让web开发更迅速、简单",icon:"devicon:bootstrap"},{title:"Swiper",href:"https://www.swiper.com.cn/",desc:"Swiper是纯javascript打造的滑动特效插件",icon:"simple-icons:swiper",color:"color: #194DE0"},{title:"iconify",href:"https://iconify.design/",desc:"Freedom to choose icons. All popular icon sets, one framework. Over 200,000 open source vector icons.",icon:"simple-icons:iconify",color:"color: #1769AA"},{title:"iconfont",href:"https://www.iconfont.cn/",desc:"阿里巴巴矢量图标库",icon:"logos:godot-icon"}],$e=[{title:"Bilibili",href:"https://www.bilibili.com/",desc:"Bilibili",icon:"ri:bilibili-line",color:"color: #00B8F6"},{title:"菜鸟教程",href:"https://www.runoob.com/",desc:"菜鸟教程",icon:"noto:bird"},{title:"阿里云",href:"https://www.aliyun.com/",desc:"阿里云",icon:"ant-design:aliyun-outlined",color:"color: #ef6400"},{title:"腾讯云",href:"https://cloud.tencent.com/",desc:"腾讯云",icon:"material-symbols:cloud-outline",color:"color: #01A4FF"},{title:"华为云",href:"https://www.huaweicloud.com/",desc:"华为云",icon:"cbi:huawei",color:"color: #E60315"}],n="https://img.z4a.net/images",Ae=[{id:1,title:"你不知道的 JavaScript 上卷",author:"Kyle Simpson",imageUrl:n+"/2024/07/13/JavaScript01.png",category:"前端",description:"简介...",publishDate:"2015年",rate:5},{id:2,title:"你不知道的 JavaScript 中卷",author:"Kyle Simpson",imageUrl:n+"/2024/07/13/JavaScript02.jpeg",category:"前端",description:"简介...",publishDate:"2015年",rate:3},{id:3,title:"你不知道的 JavaScript 下卷",author:"Kyle Simpson",imageUrl:n+"/2024/07/13/JavaScript03.jpeg",category:"前端",description:"What is this book about?Beginning Web Programming with HTML, XHTML, and CSS teaches you how to write Web pages using HTML, XHTML, and CSS.",publishDate:"2015年",rate:4.5},{id:4,title:"深入浅出 Node.js",author:"朴灵",imageUrl:n+"/2024/07/13/Node.jpeg",category:"前端",description:"暂无简介",publishDate:"2013年",rate:2},{id:5,title:"JavaScript高级程序设计 第4版",author:"[美]马特·弗里斯比(MattFrisbie)",imageUrl:n+"/2024/07/13/javascript.jpeg",category:"前端",description:"本书是JavaScript经典图书的新版。第4版涵盖ECMAScript 2019，全面、深入地介绍了JavaScript开发者必须掌握的前端开发技术，涉及JavaScript的基础特性和高级特性。书中详尽讨论了JavaScript的各个方面，从JavaScript的起源开始，逐步讲解到新出现的技术，其中重点介绍ECMAScript和DOM标准。在此基础上，接下来的各章揭示了JavaScript的基本概念，包括类、期约、迭代器、代理，等等。另外，书中深入探讨了客户端检测、事件、动画、表单、错误处理及JSON。本书同时也介绍了近几年来涌现的重要新规范，包括Fetch API、模块、工作者线程、服务线程以及大量新API。",publishDate:"2020年08月",rate:5},{id:6,title:"CSS权威指南（第四版）",author:"Eric A. Meyer和Estelle Weyl",imageUrl:n+"/2024/07/13/css.jpeg",category:"前端",description:`本书涵盖以下内容：
                  •选择符、特指度和层叠。
                  •值、单位、字体和文本属性。
                  •内边距、边框、轮廓和外边距。
                  •颜色、背景和渐变。
                  •浮动和定位。
                  •弹性盒布局。
                  •全新的栅格布局系统。
                  •2D和3D变形、过渡和动画。
                  •滤镜、混合、裁剪和遮罩。
                  •媒体查询和特性查询。`,publishDate:"2019年04月",rate:4},{id:7,title:"HTTP权威指南",author:"[美]David Gourley",imageUrl:n+"/2024/07/13/http01.jpeg",category:"前端",description:"详细解释了HTTP协议，包括它是如何工作的，如何用它来开发基于Web的应用程序。但本书并不只介绍了HTTP，还探讨了HTTP有效工作所依赖的所有其他核心因特网技术。尽管HTTP是本书的中心内容，但本书的本质是理解Web的工作原理，以及如何将这些知识应用到Web编程和管理之中去，主要涵盖HTTP的技术运作方式、产生动机、性能和目标，以及一些相关技术问题。",publishDate:"2012年08月",rate:4},{id:8,title:"Ajax基础教程",author:"[美]阿斯利森 [美]舒塔",imageUrl:n+"/2024/07/13/ajax01.jpeg",category:"前端",description:"本书重点介绍Ajax及相关的工具和技术，主要内容包括XMLHttpRequest对象及其属性和方法、发送请求和处理响应、构建完备的Ajax开发工具、使用JsUnit测试JaScript、分析JaScript调试工具和技术，以及Ajax开发模式和框架等。",publishDate:"2006年02月",rate:4},{id:9,title:"Ajax实战",author:"[美]阿斯利森 [美]舒塔",imageUrl:n+"/2024/07/13/ajax02.jpeg",category:"前端",description:"本书重点介绍Ajax及相关的工具和技术，主要内容包括XMLHttpRequest对象及其属性和方法、发送请求和处理响应、构建完备的Ajax开发工具、使用JsUnit测试JaScript、分析JaScript调试工具和技术，以及Ajax开发模式和框架等。",publishDate:"2006年02月",rate:4}],Ve=[{id:1,title:"On Java 基础卷",author:"[美]布鲁斯·埃克尔",imageUrl:n+"/2024/07/13/onjava01.jpeg",category:"后端",description:"本书是布鲁斯·埃克尔时隔15年，继Thinking in Java之后又一力作，基于Java的3个长期支持版（Java 8、11、17），讲解Java核心语法，并对Java的核心变化进行详述。全书内容通俗易懂，配合示例讲解逐步深入，并结合实际开发需要，从语言底层设计出发，有效帮读者规避一些常见的开发陷阱。主体部分共22章，内容包含对象、操作符、控制流、初始化和清理、复用、多态、接口、内部类、集合、函数式编程、流、异常、代码校验、文件、字符串、泛型等。本书适合各个层次的Java开发者阅读，同时也可作为面向对象程序设计语言以及Java语言的参考教材。",publishDate:"2022年03月",rate:4.5},{id:2,title:"On Java 进阶卷",author:"[美]布鲁斯·埃克尔",imageUrl:n+"/2024/07/13/onjava02.jpeg",category:"后端",description:"本书是布鲁斯·埃克尔时隔15年，继Thinking in Java之后又一力作，基于Java的3个长期支持版（Java 8、11、17），讲解Java核心语法，并对Java的核心变化进行详述。全书内容通俗易懂，配合示例讲解逐步深入，并结合实际开发需要，从语言底层设计出发，有效帮读者规避一些常见的开发陷阱。主体部分共22章，内容包含对象、操作符、控制流、初始化和清理、复用、多态、接口、内部类、集合、函数式编程、流、异常、代码校验、文件、字符串、泛型等。本书适合各个层次的Java开发者阅读，同时也可作为面向对象程序设计语言以及Java语言的参考教材。",publishDate:"2022年03月",rate:4.5},{id:3,title:"Effective Java",author:"[美] 约书亚·布洛克（Joshua Bloch）",imageUrl:n+"/2024/08/05/effective_java.jpeg",category:"后端",description:"Java之父James Gosling鼎力推荐、Jolt获奖作品全新升级，针对Java 7、8、9全面更新，Java程序员参考书。包含大量完整的示例代码和透彻的技术分析，通过90条经验法则，探索新的设计模式和语言习惯用法，帮助读者更加有效地使用Java编程语言及其基本类库。",publishDate:"2019年04月",rate:4.5},{id:4,title:"Spring实战（第6版）",author:"克雷格·沃斯",imageUrl:n+"/2024/08/05/spring6.jpeg",category:"后端",description:"本书是一本经典而实用的Spring学习指南，介绍了Spring使用框架、Spring Boot，以及Spring系统中的其他组成部分。",publishDate:"2022年12月",rate:4.5},{id:5,title:"Spring MVC学习指南 第2版",author:"[美]Paul Deck",imageUrl:n+"/2024/08/05/springmvc.jpeg",category:"后端",description:"Spring MVC是Spring框架中用于Web应用快速开发的一个模块，其中的MVC是Model-View-Controller的缩写。",publishDate:"2017年05月",rate:4},{id:6,title:"Spring Boot实战",author:"[美]克雷格·沃斯（Craig Walls）",imageUrl:n+"/2024/08/05/springboot.jpeg",category:"后端",description:"本书以Spring应用程序开发为中心，全面讲解如何运用Spring Boot提高效率，使应用程序的开发和管理更加轻松有趣。",publishDate:"2021年07月",rate:4.8},{id:7,title:"MySQL必知必会",author:"[英]Ben Forta",imageUrl:n+"/2024/08/05/mysql.jpeg",category:"后端",description:"书中从介绍简单的数据检索开始，逐步深入一些复杂的内容，包括联结的使用、子查询、正则表达式和基于全文本的搜索、存储过程、游标、触发器、表约束，等等。",publishDate:"2020年04月",rate:4.6},{id:8,title:"Redis设计与实现",author:"黄健宏",imageUrl:n+"/2024/08/05/redis.jpeg",category:"后端",description:"本书全面而完整地讲解了Redis的内部机制与实现方式，对Redis 的大多数单机功能以及所有多机功能的实现原理进行了介绍，展示了这些功能的核心数据结构以及关键的算法思想。",publishDate:"2022年03月",rate:4.2}],Ie={class:"card-grid-icon"},Me={class:"card-grid-container"},Fe={class:"card-grid-title"},Pe={class:"card-grid-desc"},Ne={class:"card-grid-icon"},ze={class:"card-grid-container"},Le={class:"card-grid-title"},Oe={class:"card-grid-desc"},Re={class:"card-grid-icon"},He={class:"card-grid-container"},We={class:"card-grid-title"},Ee={class:"card-grid-desc"},qe={class:"card-grid-icon"},Ge={class:"card-grid-container"},Ke={class:"card-grid-title"},Qe={class:"card-grid-desc"},Xe={class:"tip-content"},Ye={class:"anchor"},Ze={__name:"Resource",setup(r){const _=d("frontend"),u=d(!1),p=d(!1),m=d(""),S=d({color:"#D1802B",border:"1.5px solid #E6A23C","border-bottom":"0","font-size":"16px","font-weight":"600",background:"linear-gradient(to bottom, #fcf8ed, #fefbf5, #fff)"}),k=d({border:"1.5px solid #E6A23C","border-top":"0"}),w=d({border:"1.5px solid #E6A23C","border-top":"0"}),x=j=>{u.value=!0,m.value=j},D=()=>{p.value=!0,setTimeout(()=>{p.value=!1,u.value=!1,window.open(m.value.href,"_blank")},1e3)},v=()=>{u.value=!1},b=d([{key:"1",href:"#anchor-docs",title:"技术文档"},{key:"2",href:"#anchor-community",title:"技术社区"},{key:"3",href:"#anchor-components",title:"UI 组件"},{key:"4",href:"#anchor-learning-platform",title:"学习平台"},{key:"5",href:"#anchor-books",title:"书籍推荐"}]);return(j,C)=>{const B=i("a-card-grid"),y=i("a-col"),s=i("a-row"),U=i("a-card"),z=i("a-tab-pane"),R=i("a-tabs"),P=i("a-button"),H=i("a-alert"),W=i("a-modal"),E=i("a-anchor"),q=i("a-affix"),G=i("giscus-comment");return l(),g("div",null,[e(s,{gutter:16},{default:o(()=>[e(y,{xs:19,sm:19,md:20,lg:20,xl:21},{default:o(()=>[e(U,{class:"card-item",id:"anchor-docs",title:"技术文档",headStyle:S.value,bodyStyle:k.value},{default:o(()=>[e(s,{gutter:[16,16]},{default:o(()=>[(l(!0),g(T,null,$(h(Be),(a,J)=>(l(),A(y,{key:J,xs:24,sm:12,md:6,lg:6,xl:6},{default:o(()=>[e(B,{class:"card-grid-item",onClick:N=>x(a)},{default:o(()=>[t("div",Ie,[e(h(I),{icon:a.icon,style:M([{width:"40px",height:"40px"},a.color])},null,8,["icon","style"])]),t("div",Me,[t("span",Fe,c(a.title),1),t("span",Pe,c(a.desc),1)])]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1},8,["headStyle","bodyStyle"]),e(U,{class:"card-item",id:"anchor-community",title:"技术社区",headStyle:S.value,bodyStyle:k.value},{default:o(()=>[e(s,{gutter:[16,16]},{default:o(()=>[(l(!0),g(T,null,$(h(Ue),(a,J)=>(l(),A(y,{key:J,xs:24,sm:12,md:12,lg:6,xl:6},{default:o(()=>[e(B,{class:"card-grid-item",onClick:N=>x(a)},{default:o(()=>[t("div",Ne,[e(h(I),{icon:a.icon,style:M([{width:"40px",height:"40px"},a.color])},null,8,["icon","style"])]),t("div",ze,[t("span",Le,c(a.title),1),t("span",Oe,c(a.desc),1)])]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1},8,["headStyle","bodyStyle"]),e(U,{class:"card-item",id:"anchor-components",title:"UI 组件",headStyle:S.value,bodyStyle:k.value},{default:o(()=>[e(s,{gutter:[16,16]},{default:o(()=>[(l(!0),g(T,null,$(h(Te),(a,J)=>(l(),A(y,{key:J,xs:24,sm:12,md:12,lg:6,xl:6},{default:o(()=>[e(B,{class:"card-grid-item",onClick:N=>x(a)},{default:o(()=>[t("div",Re,[e(h(I),{icon:a.icon,style:M([{width:"40px",height:"40px"},a.color])},null,8,["icon","style"])]),t("div",He,[t("span",We,c(a.title),1),t("span",Ee,c(a.desc),1)])]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1},8,["headStyle","bodyStyle"]),e(U,{class:"card-item",id:"anchor-learning-platform",title:"学习平台",headStyle:S.value,bodyStyle:k.value},{default:o(()=>[e(s,{gutter:[16,16]},{default:o(()=>[(l(!0),g(T,null,$(h($e),(a,J)=>(l(),A(y,{key:J,xs:12,sm:12,md:12,lg:6,xl:6},{default:o(()=>[e(B,{class:"card-grid-item",onClick:N=>x(a)},{default:o(()=>[t("div",qe,[e(h(I),{icon:a.icon,style:M([{width:"40px",height:"40px"},a.color])},null,8,["icon","style"])]),t("div",Ge,[t("span",Ke,c(a.title),1),t("span",Qe,c(a.desc),1)])]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1},8,["headStyle","bodyStyle"]),e(U,{class:"card-item",id:"anchor-books",title:"书籍推荐",hoverable:"",headStyle:S.value,bodyStyle:w.value},{default:o(()=>[e(R,{activeKey:_.value,"onUpdate:activeKey":C[0]||(C[0]=a=>_.value=a)},{default:o(()=>[e(z,{key:"frontend"},{tab:o(()=>[t("span",null,[e(h(L)),f(" 前端书籍 ")])]),default:o(()=>[e(O,{books:h(Ae)},null,8,["books"])]),_:1}),e(z,{key:"backend"},{tab:o(()=>[t("span",null,[e(h(L)),f(" 后端书籍 ")])]),default:o(()=>[e(O,{books:h(Ve)},null,8,["books"])]),_:1})]),_:1},8,["activeKey"])]),_:1},8,["headStyle","bodyStyle"]),e(W,{open:u.value,"onUpdate:open":C[1]||(C[1]=a=>u.value=a),title:"即将离开该平台",onOk:D,centered:"",keyboard:"",maskClosable:!1,closable:!1},{footer:o(()=>[e(P,{key:"back",onClick:v},{default:o(()=>[f("取消")]),_:1}),e(P,{key:"submit",type:"primary",loading:p.value,onClick:D},{default:o(()=>[f("继续访问")]),_:1},8,["loading"])]),default:o(()=>[e(H,{message:"您即将离开该平台，请注意您的帐号和财产安全",type:"warning","show-icon":""}),t("div",Xe,[t("div",null,c(m.value.desc),1),e(P,{type:"link",class:"link-btn",onClick:D},{default:o(()=>[f(c(m.value.href),1)]),_:1})])]),_:1},8,["open"])]),_:1}),e(y,{xs:5,sm:5,md:4,lg:4,xl:3},{default:o(()=>[t("div",Ye,[e(q,{"offset-top":74},{default:o(()=>[e(E,{offsetTop:64,affix:!1,showInkInFixed:!0,items:b.value},null,8,["items"])]),_:1})])]),_:1})]),_:1}),e(s,{gutter:16},{default:o(()=>[e(y,{xs:19,sm:19,md:20,lg:20,xl:21},{default:o(()=>[e(G,{class:"comment"})]),_:1}),e(y,{xs:5,sm:5,md:4,lg:4,xl:3})]),_:1})])}}},et=F(Ze,[["__scopeId","data-v-6bc1d0ea"]]),it=JSON.parse('{"title":"资源导航","description":"","frontmatter":{"title":"资源导航","layout":"page"},"headers":[],"relativePath":"exploration/resource/index.md","filePath":"exploration/resource/index.md","lastUpdated":1719841076000}'),tt={name:"exploration/resource/index.md"},ot=Object.assign(tt,{setup(r){return(_,u)=>{const p=i("a-back-top");return l(),g("div",null,[e(et,{class:"container"}),e(p)])}}}),ct=F(ot,[["__scopeId","data-v-e98c451f"]]);export{it as __pageData,ct as default};