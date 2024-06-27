<script setup>
import "giscus";
import { ref, onMounted, nextTick } from "vue";

// 通过 ref 获取 DOM 元素
const commentsContainer = ref(null);

const props = defineProps({
  category: {
    type: String,
    default: "General"
    // Announcements General Ideas Polls Q&A Show and tell
  }
});

// 使用 onMounted 钩子确保组件加载后执行逻辑
onMounted(() => {
  // 等待 Vue 渲染完成后执行
  nextTick(() => {
    // 将 giscus-widget 插入到 commentsContainer 中
    commentsContainer.value.innerHTML = `
      <giscus-widget
      id="comments"
      repo="giscus-comments"
      repoid="R_kgDOMOwWHA"
      category=${props.category}
      categoryid="DIC_kwDOMOwWHM4Cga2z"
      mapping="pathname"
      term="Welcome to Knowledge Map!"
      reactionsenabled="1"
      emitmetadata="0"
      inputposition="top"
      theme="preferred_color_scheme"
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous"
    ></giscus-widget>
    `;
  });
});
</script>

<template>
  <div ref="commentsContainer"></div>
</template>

<style scoped></style>
