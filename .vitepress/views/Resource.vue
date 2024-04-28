<script setup>
import { ref } from "vue";
import { PicCenterOutlined } from "@ant-design/icons-vue";
import { Icon } from "@iconify/vue";

const activeKey = ref("frontend");
const jumpTipDialog = ref(false);
const loading = ref(false);
const targetLink = ref("");

const headStyle = ref({
  color: "#D1802B",
  border: "1.5px solid #E6A23C",
  "border-bottom": "0",
  "font-size": "16px",
  "font-weight": "600",
  "margin-left": "-1px",
  background: "linear-gradient(to bottom, #fcf8ed, #fefbf5, #fff)",
});

const bodyStyle = ref({
  border: "1.5px solid #E6A23C",
  "border-top": "0",
});

const bookBodyStyle = ref({
  "margin-left": "-1px",
  border: "1.5px solid #E6A23C",
  "border-top": "0",
});

const docsData = ref([
  {
    title: "Vue3.0",
    href: "https://v3.cn.vuejs.org/",
    desc: "Vue3.0中文文档",
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
    icon: "logos:tdesign",
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
    icon: "arcticons:angry-birds",
  },
  {
    title: "W3School",
    href: "https://www.w3school.com.cn/",
    desc: "W3School",
    icon: "simple-icons:w3schools",
  },
  {
    title: "Github",
    href: "https://github.com/",
    desc: "Github",
    icon: "logos:github-icon",
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
  },
]);

const jumpToTarget = (data) => {
  jumpTipDialog.value = true;
  targetLink.value = data.href;
};

const confirmJump = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    jumpTipDialog.value = false;
    window.open(targetLink.value, "_blank");
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
    href: "#anchor-components",
    title: "UI 组件",
  },
  {
    key: "3",
    href: "#anchor-learning-platform",
    title: "学习平台",
  },
  {
    key: "4",
    href: "#anchor-book",
    title: "书籍推荐",
  },
]);

const handleAnchorChange = (anchorName) => {
  // 获取目标元素
  const targetElement = document.getElementById(anchorName);
  if (targetElement) {
    // 获取目标元素距离页面顶部的距离，考虑滚动条宽度和窗口大小
    const offsetTop =
      targetElement.getBoundingClientRect().top + window.scrollY;
    // 考虑到20px的外边距，手动调整滚动位置
    const adjustedOffset = offsetTop + 40;

    // 执行滚动
    window.scrollTo({
      top: adjustedOffset,
      behavior: "smooth", // 保持平滑滚动效果
    });
  }
};
</script>

<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="20">
        <a-card
          class="card-item"
          id="anchor-docs"
          title="技术文档"
          :headStyle="headStyle"
          :bodyStyle="bodyStyle"
        >
          <a-card-grid
            class="card-grid-item"
            v-for="(item, index) in docsData"
            :key="index"
            @click="jumpToTarget(item)"
          >
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
        </a-card>

        <a-card
          class="card-item"
          id="anchor-components"
          title="UI 组件"
          :headStyle="headStyle"
          :bodyStyle="bodyStyle"
        >
          <a-card-grid
            class="card-grid-item"
            v-for="(item, index) in componentData"
            :key="index"
            @click="jumpToTarget(item)"
          >
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
        </a-card>

        <a-card
          class="card-item"
          id="anchor-learning-platform"
          title="学习平台"
          :headStyle="headStyle"
          :bodyStyle="bodyStyle"
        >
          <a-card-grid
            class="card-grid-item"
            v-for="(item, index) in learningPlatformData"
            :key="index"
            @click="jumpToTarget(item)"
          >
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
          <p>您即将离开该平台，请注意您的帐号和财产安全。</p>
          <p>{{ targetLink }}</p>
        </a-modal>
      </a-col>

      <a-col :span="4">
        <div class="anchor">
          <a-anchor
            :affix="true"
            :items="anchorData"
            @change="handleAnchorChange"
          ></a-anchor>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.card-item {
  margin: 20px auto;
}

.card-grid-item {
  border-radius: 16px;
  display: flex;
  align-items: center;
  margin: 10px 1%;
  width: 23%;
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
}
</style>
