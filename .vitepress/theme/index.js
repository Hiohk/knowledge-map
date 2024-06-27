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
import ReadingProgressBar from "../views/publicComponent/ReadingProgressBar.vue";

import 'animate.css';
import intersect from "../utils/directives/intersect";

// Gitalk组件
import Gitalk from "./tools/Gitalk.vue";
import GiscusComment from "./tools/GiscusComment.vue";


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
    // 注册组件
    app.component('ReadingProgressBar', ReadingProgressBar);
    app.component('Gitalk', Gitalk);
    app.component('GiscusComment', GiscusComment);
    // 注册全局指令
    app.directive('intersect', intersect);
  }
}
