import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KnowledgeGraph",
  description: "This is a knowledge summary for front-end.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {text: 'HTML', link: '/html'},
      {text: 'CSS', link: '/css'},
      {text: 'JavaScript', link: '/javascript'},
      {text: 'Vue.js', link: '/vue'},
      {text: 'Node.js', link: '/node'},
      { text: 'Examples', link: '/markdown-examples' }
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
      copyright: "Copyright© 2023 HK Group."
    }
  }
})
