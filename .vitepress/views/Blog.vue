<script setup>
import { ref } from "vue";
import {
  EyeOutlined,
  MessageOutlined,
  MessageTwoTone,
  LikeOutlined,
  SmileTwoTone,
  UpOutlined,
  StarOutlined,
} from "@ant-design/icons-vue";
import Comment from "./Comment.vue";
import avatarImg from "/avatarImg.svg";

const blogData = ref([
  {
    href: "#",
    avatar: avatarImg,
    title: "Object.assign 这算是深拷贝吗",
    description: "1122",
    content:
      "在JavaScript中，Object.assign() 是一个用于合并对象属性的常见方法。然而，对于许多开发者来说，关于它是否执行深拷贝的认识可能存在一些混淆。先说答案Object.assign()",
    date: "2024-02-28 22:12:23",
    pageViews: 123,
    likes: 45,
    comments: 3,
    showComment: false,
  },
  {
    href: "#",
    avatar: avatarImg,
    title: "防抖是回城，节流是攻击",
    description: "1122",
    content:
      "防抖和节流是前端开发中常用的函数优化手段，它们可以限制函数的执行频率，提升性能和用户体验。在我们的日常开发中，经常会遇到一些需要对函数进行优化的场景，比如防止表单的重复提交。",
    date: "2024-02-29 12:30:01",
    pageViews: 12,
    likes: 4,
    comments: 2,
    showComment: false,
  },
  {
    href: "#",
    avatar: avatarImg,
    title: "$nextTick底层原理(详细) - vue篇",
    description: "1122",
    content:
      "nextTick 是 Vue 的一个核心实现，$nextTick方法将回调延迟到下次DOM更新循环之后执行。Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用。",
    date: "2024-02-29 12:30:01",
    pageViews: 12,
    likes: 4,
    comments: 2,
    showComment: false,
  },
  {
    href: "#",
    avatar: avatarImg,
    title: "js中，对象的29个方法你都知道吗",
    description: "1122",
    content:
      "在js中，对象类型是非常重要的类型之一，也是项目中数据处理常用的类型之一，虽然这种类型我们经常使用，但是它的方法却不怎么用的到或者很少用到，",
    date: "2024-02-29 12:30:01",
    pageViews: 12,
    likes: 4,
    comments: 2,
    showComment: false,
  },
]);
const emit = defineEmits(["getPaperDetail"]);
const keywords = ref("");
const currentPage = ref(1);
const pageSize = ref(5);
const pageSizeOptions = ref(["5", "10", "20", "30", "50", "100"]);
const showTips = ref(true);

const searchBlog = (data) => {};

const closeTips = () => {
  showTips.value = false;
};

const toggleComment = (item) => {
  item.showComment = !item.showComment;
};

const toDetailPage = (item) => {
  emit("getPaperDetail", item);
};

const foldComment = (item) => {
  item.showComment = !item.showComment;
};

const pagination = {
  onChange: (page) => {
    console.log(page);
  },
  pageSize: 3,
};
const actions = [
  {
    icon: StarOutlined,
    text: "156",
  },
  {
    icon: LikeOutlined,
    text: "156",
  },
  {
    icon: MessageOutlined,
    text: "2",
  },
];
</script>

<template>
  <div class="container">
    <div class="search">
      <a-input-search
        v-model:value="keywords"
        size="large"
        placeholder="请输入关键词搜索"
        enter-button
        @search="searchBlog()"
      />
    </div>

    <div class="tips" v-if="showTips">
      <a-space direction="vertical" style="width: 100%">
        <a-alert
          message="致力于实现全面自动化的可实时部署的技术博客共享！"
          type="success"
          show-icon
          closable
          @close="closeTips"
        >
          <template #icon>
            <SmileTwoTone />
          </template>
        </a-alert>
      </a-space>
    </div>

    <a-list
      class="list-container"
      item-layout="vertical"
      size="large"
      :pagination="pagination"
      :data-source="blogData"
      bordered
    >
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <template #actions>
            <span v-for="{ icon, text } in actions" :key="icon">
              <component :is="icon" style="margin-right: 8px" />
              {{ text }}
            </span>
          </template>
          <template #extra>
            <img
              width="272"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </template>
          <a-list-item-meta>
            <template #description>
              <div>
                <span>发布于{{ item.date }}</span>
                <span class="tag">
                  <a-tag color="pink">前端</a-tag>
                  <a-tag color="red">JavaScript</a-tag>
                  <a-tag color="orange">Vue.js</a-tag>
                  <a-tag color="green">基础知识</a-tag>
                  <a-tag color="cyan">编程</a-tag>
                  <a-tag color="purple">笔试</a-tag>
                </span>
              </div>
            </template>
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
            <template #avatar><a-avatar :src="item.avatar" /></template>
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </template>
    </a-list>

    <div v-for="(item, index) in blogData" :key="index">
      <!-- <a-card
        class="blog-card"
        hoverable
        size="small"
        @click="toDetailPage(item)"
      >
        <a-card-meta :title="item.title">
          <template #description>
            <a-row>
              <a-col :span="20">
                <a-row>
                  <a-col :span="24" class="blog-content">{{
                    item.content
                  }}</a-col>
                  <a-col :span="24" class="blog-bottom">
                    <a-row>
                      <a-col :span="12">
                        <span>发布于{{ item.date }}</span>
                        <a-divider type="vertical" />
                        <span class="icon-item">
                          <EyeOutlined /> {{ item.pageViews }}
                        </span>
                        <span class="icon-item">
                          <LikeOutlined /> {{ item.likes }}
                        </span>
                        <span
                          class="icon-item"
                          @click.stop="toggleComment(item)"
                        >
                          <span v-if="!item.showComment">
                            <MessageOutlined />
                          </span>
                          <span v-else>
                            <MessageTwoTone />
                          </span>
                          {{ item.comments }}
                        </span>
                        <span></span>
                      </a-col>

                      <a-col :span="12">
                        <span class="tag">
                          <a-tag color="pink">前端</a-tag>
                          <a-tag color="red">JavaScript</a-tag>
                          <a-tag color="orange">Vue.js</a-tag>
                          <a-tag color="green">基础知识</a-tag>
                          <a-tag color="cyan">编程</a-tag>
                          <a-tag color="purple">笔试</a-tag>
                        </span>
                      </a-col>
                    </a-row>
                  </a-col>
                </a-row>
              </a-col>
              <a-col :span="4"></a-col>
            </a-row>
          </template>
        </a-card-meta>
      </a-card> -->

      <a-card class="blog-card" v-if="item.showComment" hoverable size="small">
        <div class="fold-text">
          <a-button type="link" @click="foldComment(item)"
            >收 起
            <UpOutlined />
          </a-button>
        </div>
        <comment></comment>
      </a-card>
    </div>
  </div>
</template>

<style>
.container {
  margin: 0 auto;
}
.list-container {
  max-width: 1200px;
  margin: 20px 100px;
  min-height: 120px;
  background: linear-gradient(to right, #e0ebfe, #ffffff);
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  transition-duration: 0.2s;
  padding: 14px;
  cursor: pointer;
  -webkit-box-pack: justify;
  justify-content: space-between;

  /* 初始样式 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* 平滑过渡效果 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 初始阴影 */
}

.list-container:hover {
  background: linear-gradient(to right, #e0ebfe, #ffffff);
  border: 1px solid #f0f0f0;
}

.tips,
.search {
  max-width: 1200px;
  height: 40px;
  margin: 20px 100px;
}

.blog-card {
  max-width: 1200px;
  min-height: 120px;
  margin: 20px 100px;
  background: linear-gradient(to right, #e0ebfe, #ffffff);
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  transition-duration: 0.2s;
  padding: 14px;
  cursor: pointer;
  -webkit-box-pack: justify;
  justify-content: space-between;

  /* 初始样式 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* 平滑过渡效果 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* 初始阴影 */
}

.blog-card:hover {
  background: linear-gradient(to right, #e0ebfe, #ffffff);
  border: 1px solid #f0f0f0;
}

.blog-content {
  color: rgba(9, 20, 41, 0.8);
  white-space: nowrap;
  /* 不换行 */
  overflow: hidden;
  /* 隐藏超出部分 */
  text-overflow: ellipsis;
  /* 超出部分显示为省略号 */
  width: 200px;
  /* 设置元素宽度 */
}

.blog-bottom {
  margin-top: 5px;
}

.icon-item {
  margin: 0 10px;
}

.tag {
  float: right;
}

.fold-text {
  text-align: center;
}
</style>
