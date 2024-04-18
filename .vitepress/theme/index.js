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
    app.use(VueMatomo,{
      host: 'https://hiohk.matomo.cloud/',
      siteId: 3,
      router: router,
      enableLinkTracking: true,
      requireConsent: true,
    });
  }
}
