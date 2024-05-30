<script setup>
import { ref, onMounted } from "vue";

const scrollProgress = ref(0); // 用于存储滚动进度

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  scrollProgress.value = Number(
    ((scrollTop / (documentHeight - windowHeight)) * 100).toFixed(0)
  );
};
</script>

<template>
  <div class="progress-bar">
    <a-progress
      v-if="scrollProgress > 0"
      :size="40"
      type="circle"
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="scrollProgress"
      :showInfo="true"
    />
  </div>
</template>

<style scoped>
.progress-bar {
  position: fixed;
  bottom: 100px;
  right: 25px;
}
</style>
