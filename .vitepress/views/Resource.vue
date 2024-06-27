<script setup>
import { ref } from "vue";
import { PicCenterOutlined } from "@ant-design/icons-vue";
import { Icon } from "@iconify/vue";

const activeKey = ref("frontend");
const jumpTipDialog = ref(false);
const loading = ref(false);
const targetData = ref("");

const headStyle = ref({
  color: "#D1802B",
  border: "1.5px solid #E6A23C",
  "border-bottom": "0",
  "font-size": "16px",
  "font-weight": "600",
  background: "linear-gradient(to bottom, #fcf8ed, #fefbf5, #fff)",
});

const bodyStyle = ref({
  border: "1.5px solid #E6A23C",
  "border-top": "0",
});

const bookBodyStyle = ref({
  border: "1.5px solid #E6A23C",
  "border-top": "0",
});

const docsData = ref([
  {
    title: "Vue3.0",
    href: "https://v3.cn.vuejs.org/",
    desc: "易学易用，性能出色，适用场景丰富的 Web 前端框架",
    icon: "vscode-icons:file-type-vue",
  },
  {
    title: "MDN",
    href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
    desc: "MDN文档",
    icon: "logos:mdn",
  },
  {
    title: "Vuex",
    href: "https://next.router.vuejs.org/zh/",
    desc: "Vuex中文文档",
    icon: "skill-icons:vuejs-light",
  },
  {
    title: "Vue-Router",
    href: "https://router.vuejs.org/zh/",
    desc: "Vue-Router中文文档",
    icon: "vscode-icons:file-type-vueconfig",
  },
  {
    title: "Vue-Cli",
    href: "https://cli.vuejs.org/zh/",
    desc: "Vue-Cli中文文档",
    icon: "skill-icons:vuejs-dark",
  },
  {
    title: "Pinia",
    href: "https://pinia.vuejs.org/zh/",
    desc: "符合直觉的 Vue.js 状态管理库",
    icon: "logos:pinia",
  },
  {
    title: "Node.js",
    href: "https://nodejs.org/zh-cn/",
    desc: "Node.js中文文档",
    icon: "logos:nodejs",
  },
  {
    title: "Java",
    href: "https://www.java.com/zh-CN/",
    desc: "Java API DOC",
    icon: "devicon:java-wordmark",
  },
  {
    title: "axios",
    href: "https://axios-http.com/zh-cn/docs/intro",
    desc: "axios中文文档",
    icon: "logos:axios",
  },
  {
    title: "TypeScript",
    href: "https://typescript.bootcss.com/",
    desc: "TypeScript中文文档",
    icon: "fluent:code-ts-rectangle-16-regular",
    color: "color: #00B8F6",
  },
  {
    title: "React",
    href: "https://react.docschina.org/",
    desc: "React中文文档",
    icon: "logos:react",
  },
  {
    title: "mongoDB",
    href: "https://www.mongodb.com/docs/manual/",
    desc: "MongoDB中文文档",
    icon: "devicon:mongodb-wordmark",
  },
  {
    title: "MySQL",
    href: "https://dev.mysql.com/doc/",
    desc: "MySQL中文文档",
    icon: "logos:mysql",
  },
  {
    title: "Redis",
    href: "https://redis.io/docs/",
    desc: "Redis中文文档",
    icon: "devicon:redis-wordmark",
  },
  {
    title: "uni-app",
    href: "https://uniapp.dcloud.net.cn/",
    desc: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架",
    icon: "carbon:app",
    color: "color: #2B9939",
  },
  {
    title: "W3School",
    href: "https://www.w3school.com.cn/",
    desc: "W3School",
    icon: "simple-icons:w3schools",
    color: "color: #BD2D2F",
  },
]);

const communityData = ref([
  {
    title: "stack overflow",
    href: "https://stackoverflow.com/",
    desc: "Stack Overflow是最受程序员欢迎的IT技术问答网站",
    icon: "devicon:stackoverflow",
  },
  {
    title: "稀土掘金",
    href: "https://juejin.cn/",
    desc: "开发者社区",
    icon: "simple-icons:juejin",
    color: "color: #1F80FF",
  },
  {
    title: "开源中国",
    href: "https://www.oschina.net/",
    desc: "中国版的Github，国内最大的开源技术社区",
    icon: "arcticons:china-construction-bank",
    color: "color: #3CA054",
  },
  {
    title: "CSDN",
    href: "https://www.csdn.net/",
    desc: "国内开发者社区",
    icon: "logos:zulip-icon",
  },
  {
    title: "SegmentFault",
    href: "https://segmentfault.com/",
    desc: "开放式协作的问答社区",
    icon: "logos:segment",
  },
  {
    title: "Github",
    href: "https://github.com/",
    desc: "Github",
    icon: "logos:github-icon",
  },
  {
    title: "阿里云开发者社区",
    href: "https://developer.aliyun.com/",
    desc: "阿里云开发者社区",
    icon: "ant-design:aliyun-outlined",
    color: "color: #ef6400",
  },
  {
    title: "腾讯云开发者社区",
    href: "https://cloud.tencent.com/developer",
    desc: "腾讯云开发者社区",
    icon: "emojione:cloud",
  },
  {
    title: "Gitee",
    href: "https://gitee.com/",
    desc: "国内代码托管平台",
    icon: "simple-icons:gitee",
    color: "color: #C71D23",
  },
  {
    title: "GitLab",
    href: "https://gitlab.cn/",
    desc: "一站式DevOps平台",
    icon: "logos:gitlab",
    color: "color: #C71D23",
  },
  {
    title: "51CTO",
    href: "https://www.51cto.com/",
    desc: "中国领先的IT技术网站",
    icon: "streamline:ai-technology-spark",
    color: "color: #C71D23",
  },
  {
    title: "InfoQ",
    href: "https://xie.infoq.cn/",
    desc: "写作社区-专业技术博客社区",
    icon: "simple-icons:infoq",
    color: "color: #0B74DB",
  },
]);

const componentData = ref([
  {
    title: "Element Plus",
    href: "https://element-plus.org/zh-CN/",
    desc: "一个Vue3 UI 框架",
    icon: "ep:element-plus",
    color: "color: #00B8F6",
  },
  {
    title: "Ant Design Vue",
    href: "https://www.antdv.com/docs/vue/introduce-cn",
    desc: "持续探索企业级应用的最佳 UI 实践",
    icon: "logos:ant-design",
  },
  {
    title: "TDesign",
    href: "https://tdesign.tencent.com/",
    desc: "TDesign 企业级设计体系",
    icon: "icon-park-outline:bydesign",
    color: "color: #00B8F6",
  },
  {
    title: "Arco Design",
    href: "https://arco.design/vue/docs/start",
    desc: "字节跳动的UI组件库",
    icon: "simple-icons:bytedance",
    color: "color: #00B8F6",
  },
  {
    title: "Vant",
    href: "https://vant-contrib.gitee.io/vant/#/zh-CN/",
    desc: "轻量、可定制的移动端 Vue 组件库",
    icon: "logos:uikit",
  },
  {
    title: "Vuetify",
    href: "https://vuetifyjs.com/zh-Hans/",
    desc: "Vuetify is a no design skills required Open Source UI Library with beautifully handcrafted Vue Components.",
    icon: "devicon:vuetify",
  },
  {
    title: "Bootstrap",
    href: "https://www.bootcss.com/",
    desc: "简洁、直观、强悍的前端开发框架，让web开发更迅速、简单",
    icon: "devicon:bootstrap",
  },
  {
    title: "Swiper",
    href: "https://www.swiper.com.cn/",
    desc: "Swiper是纯javascript打造的滑动特效插件",
    icon: "simple-icons:swiper",
    color: "color: #194DE0",
  },
  {
    title: "iconify",
    href: "https://iconify.design/",
    desc: "Freedom to choose icons. All popular icon sets, one framework. Over 200,000 open source vector icons.",
    icon: "simple-icons:iconify",
    color: "color: #1769AA",
  },
  {
    title: "iconfont",
    href: "https://www.iconfont.cn/",
    desc: "阿里巴巴矢量图标库",
    icon: "logos:godot-icon",
  },
]);

const learningPlatformData = ref([
  {
    title: "Bilibili",
    href: "https://www.bilibili.com/",
    desc: "Bilibili",
    icon: "ri:bilibili-line",
    color: "color: #00B8F6",
  },
  {
    title: "菜鸟教程",
    href: "https://www.runoob.com/",
    desc: "菜鸟教程",
    icon: "noto:bird",
  },
  {
    title: "阿里云",
    href: "https://www.aliyun.com/",
    desc: "阿里云",
    icon: "ant-design:aliyun-outlined",
    color: "color: #ef6400",
  },
  {
    title: "腾讯云",
    href: "https://cloud.tencent.com/",
    desc: "腾讯云",
    icon: "material-symbols:cloud-outline",
    color: "color: #01A4FF",
  },
  {
    title: "华为云",
    href: "https://www.huaweicloud.com/",
    desc: "华为云",
    icon: "cbi:huawei",
    color: "color: #E60315",
  },
]);

const jumpToTarget = (data) => {
  jumpTipDialog.value = true;
  targetData.value = data;
};

const confirmJump = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    jumpTipDialog.value = false;
    window.open(targetData.value.href, "_blank");
  }, 1000);
};

const handleCancel = () => {
  jumpTipDialog.value = false;
};

const anchorData = ref([
  {
    key: "1",
    href: "#anchor-docs",
    title: "技术文档",
  },
  {
    key: "2",
    href: "#anchor-community",
    title: "技术社区",
  },
  {
    key: "3",
    href: "#anchor-components",
    title: "UI 组件",
  },
  {
    key: "4",
    href: "#anchor-learning-platform",
    title: "学习平台",
  },
  {
    key: "5",
    href: "#anchor-books",
    title: "书籍推荐",
  },
]);
</script>

<template>
  <div>
    <a-row :gutter="16">
      <a-col :xs="19" :sm="19" :md="20" :lg="20" :xl="21">
        <a-card
          class="card-item"
          id="anchor-docs"
          title="技术文档"
          :headStyle="headStyle"
          :bodyStyle="bodyStyle"
        >
          <a-row :gutter="[16, 16]">
            <template v-for="(item, index) in docsData" :key="index">
              <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <a-card-grid class="card-grid-item" @click="jumpToTarget(item)">
                  <div class="card-grid-icon">
                    <Icon
                      :icon="item.icon"
                      style="width: 40px; height: 40px"
                      :style="item.color"
                    ></Icon>
                  </div>
                  <div class="card-grid-container">
                    <span class="card-grid-title">{{ item.title }}</span>
                    <span class="card-grid-desc">{{ item.desc }}</span>
                  </div>
                </a-card-grid>
              </a-col>
            </template>
          </a-row>
        </a-card>

        <a-card
          class="card-item"
          id="anchor-community"
          title="技术社区"
          :headStyle="headStyle"
          :bodyStyle="bodyStyle"
        >
          <a-row :gutter="[16, 16]">
            <template v-for="(item, index) in communityData" :key="index">
              <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <a-card-grid class="card-grid-item" @click="jumpToTarget(item)">
                  <div class="card-grid-icon">
                    <Icon
                      :icon="item.icon"
                      style="width: 40px; height: 40px"
                      :style="item.color"
                    ></Icon>
                  </div>
                  <div class="card-grid-container">
                    <span class="card-grid-title">{{ item.title }}</span>
                    <span class="card-grid-desc">{{ item.desc }}</span>
                  </div>
                </a-card-grid>
              </a-col>
            </template>
          </a-row>
        </a-card>

        <a-card
          class="card-item"
          id="anchor-components"
          title="UI 组件"
          :headStyle="headStyle"
          :bodyStyle="bodyStyle"
        >
          <a-row :gutter="[16, 16]">
            <template v-for="(item, index) in componentData" :key="index">
              <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <a-card-grid class="card-grid-item" @click="jumpToTarget(item)">
                  <div class="card-grid-icon">
                    <Icon
                      :icon="item.icon"
                      style="width: 40px; height: 40px"
                      :style="item.color"
                    ></Icon>
                  </div>
                  <div class="card-grid-container">
                    <span class="card-grid-title">{{ item.title }}</span>
                    <span class="card-grid-desc">{{ item.desc }}</span>
                  </div>
                </a-card-grid>
              </a-col>
            </template>
          </a-row>
        </a-card>

        <a-card
          class="card-item"
          id="anchor-learning-platform"
          title="学习平台"
          :headStyle="headStyle"
          :bodyStyle="bodyStyle"
        >
          <a-row :gutter="[16, 16]">
            <template
              v-for="(item, index) in learningPlatformData"
              :key="index"
            >
              <a-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
                <a-card-grid class="card-grid-item" @click="jumpToTarget(item)">
                  <div class="card-grid-icon">
                    <Icon
                      :icon="item.icon"
                      style="width: 40px; height: 40px"
                      :style="item.color"
                    ></Icon>
                  </div>
                  <div class="card-grid-container">
                    <span class="card-grid-title">{{ item.title }}</span>
                    <span class="card-grid-desc">{{ item.desc }}</span>
                  </div>
                </a-card-grid>
              </a-col>
            </template>
          </a-row>
        </a-card>

        <a-card
          class="card-item"
          id="anchor-books"
          title="书籍推荐"
          hoverable
          :headStyle="headStyle"
          :bodyStyle="bookBodyStyle"
        >
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="frontend">
              <template #tab>
                <span>
                  <PicCenterOutlined />
                  前端书籍
                </span>
              </template>
              Tab 1....
            </a-tab-pane>
            <a-tab-pane key="backend">
              <template #tab>
                <span>
                  <PicCenterOutlined />
                  后端书籍
                </span>
              </template>
              Tab 2...
            </a-tab-pane>
          </a-tabs>
        </a-card>

        <a-modal
          v-model:open="jumpTipDialog"
          title="即将离开该平台"
          @ok="confirmJump"
          centered
          keyboard
          :maskClosable="false"
          :closable="false"
        >
          <template #footer>
            <a-button key="back" @click="handleCancel">取消</a-button>
            <a-button
              key="submit"
              type="primary"
              :loading="loading"
              @click="confirmJump"
              >继续访问</a-button
            >
          </template>
          <a-alert
            message="您即将离开该平台，请注意您的帐号和财产安全"
            type="warning"
            show-icon
          />
          <div class="tip-content">
            <div>{{ targetData.desc }}</div>
            <a-button type="link" class="link-btn" @click="confirmJump">{{
              targetData.href
            }}</a-button>
          </div>
        </a-modal>
      </a-col>

      <a-col :xs="5" :sm="5" :md="4" :lg="4" :xl="3">
        <div class="anchor">
          <a-affix :offset-top="74">
            <a-anchor
              :offsetTop="64"
              :affix="false"
              :showInkInFixed="true"
              :items="anchorData"
            ></a-anchor>
          </a-affix>
        </div>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :xs="19" :sm="19" :md="20" :lg="20" :xl="21">
        <giscus-comment class="comment"/>
      </a-col>
      <a-col :xs="5" :sm="5" :md="4" :lg="4" :xl="3"> </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.card-item {
  margin: 0 20px 20px;
}

.card-grid-item {
  border-radius: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 90px;
}

.card-grid-item:hover {
  cursor: pointer;
  background: linear-gradient(to bottom, #ead9c0, #fcf8ed, #fefbf5);
}

.card-grid-container {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card-grid-title {
  font-size: 16px;
  font-weight: 600;
}

.card-grid-title:hover {
  color: #e6a23c;
}

.card-grid-desc {
  color: #a2a2a2;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5em;
  max-height: 3em;
}

.tip-content {
  margin-top: 10px;
}

.link-btn {
  padding-left: 0px;
}

.comment {
  margin: 0 20px 20px;
}
</style>
