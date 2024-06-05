import { defineConfig } from 'vitepress';
import vueSidebar from "./menusidebar/vueSidebar.mjs";
import conventionSidebar from "./menusidebar/conventionSidebar.mjs";
import javascriptSidebar from "./menusidebar/javascriptSidebar.mjs";
import javaSidebar from './menusidebar/javaSidebar.mjs';
import javaWebSidebar from "./menusidebar/javaWebSidebar.mjs";
import mysqlSidebar from "./menusidebar/mysqlSidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/knowledge-map/",
  lang: 'zh-CN',
  title: "Knowledge Map",
  description: "A knowledge summary for frontend and backend.",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/knowledge-map/logo.svg' }]],
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
    nav: [
      { text: '首页', link: '/' },
      {
        text: "前端", items: [
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
          { text: 'Java', link: '/backend/java/java01', activeMatch: "/backend/java/*" },
          { text: 'JavaWeb', link: '/backend/javaweb/javaweb01', activeMatch: "/backend/javaweb/*" },
          { text: 'Maven', link: '/backend/maven/', activeMatch: "/backend/maven/" },
          { text: 'MySQL', link: '/backend/mysql/basic01', activeMatch: "/backend/mysql/*" },
          { text: 'MyBatis', link: '/backend/mybatis/', activeMatch: "/backend/mybatis/" },
          { text: 'MyBatis Plus', link: '/backend/mybatisPlus/' },
          { text: 'Spring(暂未开放)', link: '/backend/spring' },
          { text: 'SpringMVC(暂未开放)', link: '/backend/springmvc' },
          { text: 'SpringBoot(暂未开放)', link: '/backend/springBoot' },
          { text: 'SpringCloud(暂未开放)', link: '/backend/springCloud' },
          { text: 'Redis(暂未开放)', link: '/backend/redis' },
          { text: 'Git/SVN(暂未开放)', link: '/git' },
          { text: 'Linux(暂未开放)', link: '/linux' },
          { text: 'TCP/IP(暂未开放)', link: '/backend/tcp' },
        ]
      },
      { text: "刷题", link: '/coding/' },
      { text: "技术博客", link: '/blog/' },
      {
        text: "探索", items: [
          { text: "方法论", link: '/exploration/methodology/' },
          { text: "资源导航", link: '/exploration/resource/' },
          { text: "Web Open APIs", link: '/exploration/openApi/' },
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
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hiohk' }
    ],
    footer: {
      message: "All rights reserved.",
      copyright: "Copyright © 2024 HK Group."
    }
  }
})
