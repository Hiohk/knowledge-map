import { defineConfig } from 'vitepress';
import vueSidebar from "./menusidebar/vueSidebar.mjs";
import conventionSidebar from "./menusidebar/conventionSidebar.mjs";
import javascriptSidebar from "./menusidebar/javascriptSidebar.mjs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/knowledge-graph/",
  lang: 'zh-CN',
  title: "Knowledge Graph",
  description: "A knowledge summary for front-end.",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/knowledge-graph/logo.svg' }]],
  themeConfig: {
    lastUpdatedText: "最后更新于",
    outlineTitle: "目录",
    outline: [1,3],
    logo: '/logo.svg',
    i18nRouting: false,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    search: {
      provider: 'local'
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
          { text: 'HTTP(暂未开放)', link: '/http' },
          { text: 'TypeScript(暂未开放)', link: '/typescript' },
        ]
      },
      {
        text: "后端", items: [
          { text: 'Java', link: '/java' },
          { text: 'Spring', link: '/spring' },
          { text: 'Spring Boot', link: '/springboot' },
          { text: 'SpringCloud', link: '/springcloud' },
          { text: 'MyBatis', link: '/mybatis' },
          { text: 'MySQL', link: '/mysql' },
          { text: 'Maven', link: '/maven' },
          { text: 'Git', link: '/git' },
        ]
      },
      { text: "技术博客", link: '/blog/' },
      {
        text: "探索", items: [
          { text: "南天门", link: '/' },
        ]
      },
      { text: '交流社区', link: '/community' }
    ],
    sidebar: {
      "/frontend/vue/": vueSidebar,
      "/frontend/convention/": conventionSidebar,
      "/frontend/javascript/": javascriptSidebar
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
