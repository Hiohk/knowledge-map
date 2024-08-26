import { defineConfig } from 'vitepress';
import vueSidebar from "./menusidebar/vueSidebar.mjs";
import conventionSidebar from "./menusidebar/conventionSidebar.mjs";
import javascriptSidebar from "./menusidebar/javascriptSidebar.mjs";
import javaSidebar from './menusidebar/javaSidebar.mjs';
import javaWebSidebar from "./menusidebar/javaWebSidebar.mjs";
import mysqlSidebar from "./menusidebar/mysqlSidebar.mjs";
import springSidebar from "./menusidebar/springSidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/knowledge-map/",
  lang: 'zh-CN',
  title: "Knowledge Map",
  description: "A knowledge summary for frontend and backend.",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/knowledge-map/logo.svg' }], [
    'script',
    { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-9QSPNM0JWD' }
  ],
  [
    'script',
    {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9QSPNM0JWD');`
  ],
  ['script', {}, `  
    var _hmt = _hmt || [];  
    (function() {  
      var hm = document.createElement("script");  
      hm.src = "https://hm.baidu.com/hm.js?3b176f31b4bbac2dfe254b62d02d79f4";  
      var s = document.getElementsByTagName("script")[0];   
      s.parentNode.insertBefore(hm, s);  
    })();  
  `],
  ['script', {}, `!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3JU8KwKTj3tYmm2O",ck:"3JU8KwKTj3tYmm2O",autoTrack:true,hashMode:true,screenRecord:true});
  `],
  ['script', {}, `(function() {
    document.write ('<script type="text/javascript"  src="https://js.users.51.la/21912101.js"></script>');
    })()`]
  ],
  markdown: {
    math: true,
    image: {
      // 图片懒加载
      lazyLoading: true
    }
  },
  themeConfig: {
    lastUpdatedText: "最后更新于",
    outlineTitle: "目录",
    outline: [1, 3],
    logo: '/logo.svg',
    i18nRouting: false,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: 'https://github.com/Hiohk/knowledge-map/tree/master/:path',
      text: '在 GitHub 上编辑此页面'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜一搜',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    srcDir: './.vitepress',
    nav: [
      { text: '首页', link: '/' },
      {
        text: "前端", items: [
          { text: '前端学习路线', link: '/frontend/frontEndRoute', activeMatch: "/frontend/frontEndRoute" },
          { text: 'HTML', link: '/frontend/html', activeMatch: "/frontend/html" },
          { text: 'CSS', link: '/frontend/css', activeMatch: "/frontend/css" },
          { text: 'JavaScript', link: '/frontend/javascript/', activeMatch: "/frontend/javascript/" },
          { text: 'Vue.js', link: '/frontend/vue/', activeMatch: "/frontend/vue/" },
          { text: '前端开发规范', link: '/frontend/convention/', activeMatch: "/frontend/convention/" },
          { text: 'Promise(暂未开放)', link: '/promise' },
          { text: 'Ajax/Axios(暂未开放)', link: '/axios' },
          { text: 'Node.js(暂未开放)', link: '/node' },
          { text: 'Express/KOA/Egg/Nest(暂未开放)', link: '/express' },
          { text: 'HTTP(暂未开放)', link: '/http' },
          { text: 'TypeScript(暂未开放)', link: '/typescript' },
          { text: 'Webpack/vite(暂未开放)', link: '/webpack' },
          { text: 'React(暂未开放)', link: '/react' },
          { text: 'Three.js/D3.js(暂未开放)', link: '/three' },
          { text: 'Next.js(React)(暂未开放)', link: '/next' },
          { text: 'Nuxt.js(Vue)(暂未开放)', link: '/nuxt' },
          { text: 'Less/Sass/SCSS/PostCSS(暂未开放)', link: '/less' },
          { text: 'npm/npx/yarn(暂未开放)', link: '/npm' },
        ]
      },
      {
        text: "后端", items: [
          { text: 'Java 学习路线', link: '/backend/javaRoute', activeMatch: "/backend/javaRoute" },
          { text: 'Java', link: '/backend/java/java01', activeMatch: "/backend/java/*" },
          { text: 'JavaWeb', link: '/backend/javaweb/javaweb01', activeMatch: "/backend/javaweb/*" },
          { text: 'Maven', link: '/backend/maven/', activeMatch: "/backend/maven/" },
          { text: 'MySQL', link: '/backend/mysql/basic01', activeMatch: "/backend/mysql/*" },
          { text: 'MyBatis', link: '/backend/mybatis/', activeMatch: "/backend/mybatis/" },
          { text: 'MyBatis Plus', link: '/backend/mybatisPlus/', activeMatch: "/backend/mybatisPlus/" },
          { text: 'Spring', link: '/backend/spring/spring01', activeMatch: "/backend/spring/" },
          { text: 'SpringMVC', link: '/backend/springMVC/' },
          { text: 'SpringBoot', link: '/backend/springBoot/' },
          { text: 'Redis', link: '/backend/redis/' },
          { text: 'Dubbo', link: '/backend/dubbo/' },
          { text: 'SpringCloud(暂未开放)', link: '/backend/springCloud' },
          { text: 'Git/SVN(暂未开放)', link: '/git' },
          { text: 'Linux(暂未开放)', link: '/linux' },
          { text: 'Docker(暂未开放)', link: '/backend/docker' },
          { text: 'Nginx(暂未开放)', link: '/backend/nginx' },
          { text: '设计模式(暂未开放)', link: '/backend/nginx' },
          {
            text: '基础理论', items: [
              { text: '操作系统(暂未开放)', link: '/backend/basic/jvm' },
              { text: '计算机网络(暂未开放)', link: '/backend/basic/juc' },
              { text: '计算机组成原理(暂未开放)', link: '/backend/basic/tcp' },
              { text: '数据结构与算法(暂未开放)', link: '/backend/advanced/algorithm' },
            ]
          },
          {
            text: '进阶知识', items: [
              { text: '分布式(暂未开放)', link: '/backend/advanced/jvm' },
              { text: '微服务(暂未开放)', link: '/backend/advanced/jvm' },
              { text: 'JVM(暂未开放)', link: '/backend/advanced/jvm' },
              { text: 'JUC(暂未开放)', link: '/backend/advanced/juc' },
              { text: 'TCP/IP(暂未开放)', link: '/backend/advanced/tcp' },
              { text: '运维知识(暂未开放)', link: '/backend/advanced/tcp' },
            ]
          },
        ]
      },
      { text: "刷题", link: '/coding/' },
      {
        text: "探索", items: [
          { text: "天气预报", link: '/exploration/weather/' },
          { text: "更新日志", link: '/exploration/releaseLog/' },
          { text: "方法论", link: '/exploration/methodology/' },
          { text: "资源导航", link: '/exploration/resource/' },
          { text: "Web Open APIs", link: '/exploration/openApi/' }
        ]
      },
      { text: '交流社区', link: '/community' }
    ],
    sidebar: {
      "/frontend/vue/": vueSidebar,
      "/frontend/convention/": conventionSidebar,
      "/frontend/javascript/": javascriptSidebar,
      "/backend/java/": javaSidebar,
      "/backend/javaweb/": javaWebSidebar,
      "/backend/mysql/": mysqlSidebar,
      "/backend/spring/": springSidebar,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hiohk' }
    ],
    // footer: {
    // message: "All rights reserved.",
    // copyright: "Copyright © 2024 HK Group."
    // }
  }
})
