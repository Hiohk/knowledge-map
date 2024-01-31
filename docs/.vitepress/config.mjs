import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  lastUpdated: true,
  title: "Knowledge Graph",
  description: "A knowledge summary for front-end.",
  themeConfig: {
    logo: '../asset/img/logo.svg',
    i18nRouting: false,
    nav: [
      { text: '首页', link: '/' },
      {
        text: "前端", items: [
          { text: 'HTML', link: '/html' },
          { text: 'CSS', link: '/css' },
          { text: 'JavaScript', link: '/javascript' },
          { text: 'Vue.js', link: '/vue' },
          { text: 'Ajax(待开发)', link: '/ajax' },
          { text: 'Axios(待开发)', link: '/axios' },
          { text: 'Promise(待开发)', link: '/promise' },
          { text: 'Node.js(待开发)', link: '/node' },
          { text: 'TypeScript(待开发)', link: '/typescript' },
        ]
      },
      {
        text: "后端", items: [
          { text: 'Java', link: '/' },
          { text: 'MySql', link: '/' },
        ]
      },
      { text: "技术博客", link: '/blog' },
      { text: "分享", link: '/share' },
      {
        text: "探索", items: [
          { text: "南天门", link: '/' },
        ]
      },
      { text: '交流社区', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: "Copyright © 2023 HK Group."
    }
  }
})
