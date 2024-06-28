<script setup>
import { ref } from "vue";
import SponsorList from "./SponsorList.vue";
import RightFloatButton from "./RightFloatButton.vue";
import TimeLineEvent from "./TimeLineEvent.vue";
import RecommendationBlog from "./RecommendationBlog.vue";
import LikeVideo from "./LikeVideo.vue";
import { Icon } from "@iconify/vue";

import ajax from "/ajax.svg";
import waiting from "/waiting.svg";
import mybatis from "/mybatis.svg";

const layout = ref([
  {
    w: 2,
    h: 5,
    i: "0",
    name: "HTML",
    imgName: "",
    icon: "devicon:html5-wordmark",
    address: "/knowledge-map/frontend/html",
    content:
      "HTML 是用于创建网页的标准标记语言。它用于定义网页的结构和内容，如段落、链接、图片等。HTML 文件通常与 CSS 和 JavaScript 一起使用，以提供样式和交互性。",
  },
  {
    w: 2,
    h: 5,
    i: "1",
    name: "CSS",
    imgName: "",
    icon: "logos:css-3",
    address: "/knowledge-map/frontend/css",
    content:
      "CSS 用于描述网页的外观和格式。它控制颜色、布局和字体等样式。CSS 可以使网页更具吸引力和易于阅读，同时提供更好的控制和灵活性。",
  },
  {
    w: 2,
    h: 5,
    i: "2",
    name: "JavaScript",
    imgName: "",
    icon: "skill-icons:javascript",
    address: "/knowledge-map/frontend/javascript/",
    content:
      "JavaScript 是一种编程语言，用于使网页具有交互性。它用于响应用户操作，如点击按钮或填写表单。JavaScript 可以动态地更改 HTML 和 CSS，从而创建动态和响应式的网页。",
  },
  {
    w: 2,
    h: 5,
    i: "3",
    name: "Vue.js",
    imgName: "",
    icon: "vscode-icons:file-type-vue",
    address: "/knowledge-map/frontend/vue/",
    content:
      "一款用于构建用户界面的 JavaScript 框架。它无论是简单还是复杂的界面，Vue 都可以胜任。",
  },
  {
    w: 2,
    h: 5,
    i: "4",
    name: "Node.js",
    imgName: "",
    icon: "devicon:nodejs-wordmark",
    address: "/knowledge-map/frontend/node",
    content:
      "Node.js 是一个开源的、跨平台的 JavaScript 运行环境。它使开发者能够使用 JavaScript 编写服务器端应用程序。Node.js 基于 Google Chrome 的 V8 JavaScript 引擎，并允许使用 JavaScript 来处理服务器端的任务，如文件系统操作、网络通信等。",
  },
  {
    w: 2,
    h: 5,
    i: "5",
    name: "AJAX",
    imgName: ajax,
    icon: "",
    address: "/knowledge-map/frontend/ajax",
    content:
      "AJAX 是一种用于创建异步网页应用的技术。通过 AJAX，你可以在不重新加载整个网页的情况下，与服务器交换数据并更新部分网页内容。这使得网页应用能够更快速地响应用户的操作，并提供更流畅的用户体验。",
  },
  {
    w: 2,
    h: 5,
    i: "6",
    name: "Java",
    imgName: "",
    icon: "devicon:java-wordmark",
    address: "/knowledge-map/backend/java/java01",
    content:
      "Java 是一种面向对象的编程语言，由 Sun Microsystems 于1995年发布。它的设计目标是“一次编写，到处运行”，这意味着你可以在任何支持 Java 的设备上运行 Java 程序。Java 的主要特性包括简单性、面向对象、分布式、解释型、健壮性、安全性、平台独立与可移植性、多线程性。",
  },
  {
    w: 2,
    h: 5,
    i: "7",
    name: "Spring",
    imgName: "",
    icon: "devicon:spring-wordmark",
    address: "/knowledge-map/backend/spring",
    content:
      "Spring 框架由 Rod Johnson 开发，2004 年发布了 Spring 框架的第一版。Spring 是一个从实际开发中抽取出来的框架，因此它完成了大量开发中的通用步骤，留给开发者的仅仅是与特定应用相关的部分，从而大大提高了企业应用的开发效率。",
  },
  {
    w: 2,
    h: 5,
    i: "8",
    name: "MyBatis",
    imgName: mybatis,
    icon: "",
    address: "/knowledge-map/backend/mybatis/",
    content:
      "MyBatis 是一个优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。MyBatis 可以使用简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通的 Java 对象）为数据库中的记录。",
  },
  {
    w: 2,
    h: 5,
    i: "9",
    name: "MySQL",
    imgName: "",
    icon: "logos:mysql",
    address: "/knowledge-map/backend/mysql/basic01",
    content:
      "MySQL是一个关系型数据库管理系统（RDBMS），由瑞典MySQL AB公司开发，并随后被Oracle公司收购。MySQL是最流行的关系型数据库管理系统之一，尤其在WEB应用方面，它被视为最佳的RDBMS应用软件之一。",
  },
  {
    w: 2,
    h: 5,
    i: "10",
    name: "Git",
    imgName: "",
    icon: "devicon:git",
    address: "/knowledge-map/backend/git",
    content:
      "Git是一个开源的分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有内容。它具有诸多特点与功能，如版本控制、分支管理、协同合作、提交与撤销等。",
  },
  {
    w: 2,
    h: 5,
    i: "11",
    name: "Future",
    imgName: waiting,
    icon: "",
    address: "/knowledge-map/",
    content: "敬请期待...",
  },
]);

const cardImgStyle = (width, height) => {
  return {
    height: height * 20 + "px",
    margin: "10px auto",
  };
};

// 加载更多
const onLoadMore = () => {};
</script>

<template>
  <div class="container">
    <div class="sponsor-by">
      <sponsor-list></sponsor-list>
    </div>
    <div>
      <a-row :gutter="[16, 20]">
        <template v-for="(item, index) in layout" :key="item.i">
          <a-col
            class="template-card"
            :xs="12"
            :sm="12"
            :md="6"
            :lg="4"
            :xl="4"
          >
            <a-card
              class="grid-item small-card"
              bordered
              hoverable
              size="small"
              style="width: 100%; height: 100%; overflow: hidden"
              v-intersect="{
                enter: 'animate__fadeInUp',
                duration: 'animate__duration-2s',
              }"
            >
              <template #cover>
                <img
                  v-if="item.imgName"
                  :style="cardImgStyle(item.w, item.h)"
                  alt="example"
                  :src="item.imgName"
                />
                <Icon
                  v-else
                  :icon="item.icon"
                  :style="cardImgStyle(item.w, item.h, item.color)"
                ></Icon>
              </template>
              <a-card-meta :title="item.name">
                <template #description>
                  <span class="description-content">{{ item.content }}</span>
                  <div class="learn-more">
                    <a-button
                      v-if="layout.length - 1 !== index"
                      class="learn-more-btn"
                      type="link"
                      :href="item.address"
                      target="_self"
                      >了解更多</a-button
                    >
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </template>
        <a-col :span="24">
          <div class="loading-more">
            <a-button @click="onLoadMore">loading more</a-button>
          </div>
        </a-col>
      </a-row>
    </div>

    <div class="time-line-event">
      <a-row :gutter="16">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div
            v-intersect="{
              enter: 'animate__fadeIn',
              duration: 'animate__duration-2s',
            }"
          >
            <time-line-event></time-line-event>
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div
            v-intersect="{
              enter: 'animate__fadeInUp',
              duration: 'animate__duration-2s',
            }"
          >
            <recommendation-blog></recommendation-blog>
          </div>
        </a-col>
      </a-row>
    </div>

    <div
      class="like-video"
      v-intersect="{
        enter: 'animate__fadeInUp',
        duration: 'animate__duration-2s',
      }"
    >
      <like-video></like-video>
    </div>

    <div>
      <right-float-button></right-float-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  max-width: 1280px;
  padding: 0 24px;
  border-radius: 6px;
  margin: 10px auto;
  animation: Gradient 4s ease infinite;
}

@media (min-width: 640px) {
  .container {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .container {
    width: 100%;
    padding: 0 64px;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.grid-item {
  border-radius: 15px;
  display: block !important;
}

.small-card {
  background: linear-gradient(to bottom, rgb(190, 228, 236), white);
}

.small-card:hover {
  background: linear-gradient(to bottom, rgb(190, 228, 236), white);
}

.learn-more {
  margin-top: 10px;
  text-align: center;
  color: #1677ff;
}

.learn-more-btn {
  font-weight: 600;
}

.description-content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.vgl-layout {
  --vgl-placeholder-bg: pink;
}

.time-line-event {
  margin-top: 50px;
}

.loading-more {
  text-align: center;
}

.template-card {
  height: 50%;
}
</style>
