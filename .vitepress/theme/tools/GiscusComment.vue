<script setup>
import "giscus";
import { ref, onMounted, nextTick } from "vue";

// 通过 ref 获取 DOM 元素
const commentsContainer = ref(null);

const props = defineProps({
  category: {
    type: String,
    default: "General",
    // Announcements -> DIC_kwDOMOwWHM4Cga2z
    // General -> DIC_kwDOMOwWHM4Cga20
    // Ideas -> DIC_kwDOMOwWHM4Cga22
    // Polls -> DIC_kwDOMOwWHM4Cga24
    // Q&A -> DIC_kwDOMOwWHM4Cga21
    // Show and tell -> DIC_kwDOMOwWHM4Cga23
  },
});


// 使用 onMounted 钩子确保组件加载后执行逻辑
onMounted(() => {
  // 等待 Vue 渲染完成后执行
  nextTick(() => {
    // 将 giscus-widget 插入到 commentsContainer 中
    commentsContainer.value.innerHTML = `
      <giscus-widget
      id="comments"
      repo="Hiohk/giscus-comments"
      repoid="R_kgDOMOwWHA"
      category=${props.category}
      categoryid="DIC_kwDOMOwWHM4Cga20"
      mapping="pathname"
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
