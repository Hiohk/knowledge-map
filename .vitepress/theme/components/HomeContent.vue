<script setup>
import { ref } from 'vue';
import { GridLayout, GridItem } from 'grid-layout-plus';

import HTML5 from "../../../assets/img/HTML5.svg";
import CSS from "../../../assets/img/CSS.svg";
import JavaScript from "../../../assets/img/JavaScript.svg";
import node from "../../../assets/img/node.svg";
import vue from "../../../assets/img/Vue.svg";
import waiting from "../../../assets/img/waiting.svg";

const layout = ref([
    { "x": 0, "y": 0, "w": 2, "h": 6, "i": "0", "name": "HTML", "imgName": HTML5, "address": "/knowledge-graph/frontend/html", "content": "HTML 是用于创建网页的标准标记语言。它用于定义网页的结构和内容，如段落、链接、图片等。HTML 文件通常与 CSS 和 JavaScript 一起使用，以提供样式和交互性。" },
    { "x": 2, "y": 0, "w": 2, "h": 5, "i": "1", "name": "CSS", "imgName": CSS, "address": "/knowledge-graph/frontend/css", "content": "CSS 用于描述网页的外观和格式。它控制颜色、布局和字体等样式。CSS 可以使网页更具吸引力和易于阅读，同时提供更好的控制和灵活性。" },
    { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2", "name": "JavaScript", "imgName": JavaScript, "address": "/knowledge-graph/frontend/javascript/", "content": "JavaScript 是一种编程语言，用于使网页具有交互性。它用于响应用户操作，如点击按钮或填写表单。JavaScript 可以动态地更改 HTML 和 CSS，从而创建动态和响应式的网页。" },
    { "x": 6, "y": 0, "w": 2, "h": 5, "i": "3", "name": "Vue.js", "imgName": vue, "address": "/knowledge-graph/frontend/vue/", "content": "一款用于构建用户界面的 JavaScript 框架。它无论是简单还是复杂的界面，Vue 都可以胜任。" },
    { "x": 8, "y": 0, "w": 2, "h": 4, "i": "4", "name": "Node.js", "imgName": node, "address": "/knowledge-graph/frontend/node", "content": "Node.js 是一个开源的、跨平台的 JavaScript 运行环境。它使开发者能够使用 JavaScript 编写服务器端应用程序。Node.js 基于 Google Chrome 的 V8 JavaScript 引擎，并允许使用 JavaScript 来处理服务器端的任务，如文件系统操作、网络通信等。" },
    { "x": 10, "y": 0, "w": 2, "h": 4, "i": "5", "name": "Future", "imgName": waiting, "address": "/knowledge-graph/", "content": "敬请期待..." },
]);

const handleResize = (data) => {
    // console.log("-----", data);
};

const cardImgStyle = (width, height) => {
    return {
        "width": height * 20 + "px",
        "margin": "10px auto"
    }
};
</script>

<template>
    <div class="boxStyle">
        <div><span>wedwefe</span></div>
        <GridLayout v-model:layout="layout" :col-num="12" :row-height="51" is-draggable :is-resizable="false"
            vertical-compact use-css-transforms>
            <a-row>
                <template v-for="item in layout" :key="item.i">
                    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                        <GridItem class="grid-item" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i"
                            @resize="handleResize">
                            <a-card class="small-card" bordered hoverable size="small"
                                style="width: 100%;height: 100%;overflow: hidden;">
                                <template #cover>
                                    <img :style="cardImgStyle(item.w, item.h)" alt="example" :src="item.imgName" />
                                </template>
                                <a-card-meta :title="item.name">
                                    <template #description>
                                        <span class="description-content">{{ item.content }}</span>
                                        <div class="learn-more">
                                            <a-button class="learn-more-btn" type="link" :href="item.address"
                                                target="_self">了解更多</a-button>
                                        </div>
                                    </template>
                                </a-card-meta>
                            </a-card>
                        </GridItem>
                    </a-col>
                </template>
            </a-row>
        </GridLayout>
    </div>
</template>

<style scoped>
.boxStyle {
    max-width: 1181px;
    border-radius: 6px;
    /* border: 1px solid #40a9ff; */
    margin: 10px auto;
    /* background: linear-gradient(90deg, #e9b8a9, #e4a1bb, #87bed2, #91d1c2); */
    animation: Gradient 4s ease infinite;
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
    border-radius: 8px;
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
</style>