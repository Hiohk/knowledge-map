// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 导入ant design vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// 导入组件
import HomeContent from "./components/HomeContent.vue";
import NotFound from "./components/NotFound.vue";

// 网站访问数据分析
import VueMatomo from 'vue-matomo';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(HomeContent),
      'not-found': () => h(NotFound)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(Antd);
    app.use(VueMatomo, {
      host: 'https://hiohk.matomo.cloud/',
      siteId: 1,
      router: router,
      enableLinkTracking: true,
      requireConsent: true,
    });
  
    // 如果需要在加载页面时自动触发页面浏览事件，可以在这里添加
    window._paq = window._paq || [];
    window._paq.push(['trackPageView']);
  }
}
