// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import './style.css';

// 导入ant design vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// 导入组件
import HomeContent from "./components/HomeContent.vue";
import NotFound from "./components/NotFound.vue";
import ReadingProgressBar from "../views/publicComponent/ReadingProgressBar.vue";
import CustomFooter from "../theme/components/CustomFooter.vue";
import BackgroundLottie from "../views/lottie/BackgroundLottie.vue";

import 'animate.css';
import intersect from "../utils/directives/intersect";

// Giscus组件
import GiscusComment from "./tools/GiscusComment.vue";

// Documate
import Documate from '@documate/vue';
import '@documate/vue/dist/style.css';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => h(HomeContent),
      'not-found': () => h(NotFound),
      'layout-bottom': () => h(CustomFooter),
      'home-hero-image': () => h(BackgroundLottie),
      'nav-bar-content-before': () => h(Documate, {
        endpoint: 'https://test123.us.aircode.run/ask',
      }),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(Antd);
    // 注册组件
    app.component('ReadingProgressBar', ReadingProgressBar);
    app.component('GiscusComment', GiscusComment);
    // 注册全局指令
    app.directive('intersect', intersect);
  }
}
