<script setup>
import { onMounted, onUnmounted } from "vue";
import Typed from "typed.js";

const options = {
  strings: [
    "聪明的人不会因为知道自己不懂的事情而感到羞耻",
    "A wise person is not ashamed of acknowledging what they do not know.",
    "——亚里士多德"
  ],
  typeSpeed: 5, // 打字速度
  backSpeed: 10, // 删除速度
  backDelay: 1000, // 删除后停顿时间
  startDelay: 500, // 开始打字前的停顿时间
  loop: true, // 是否循环
  loopCount: 2, // 循环次数
  showCursor: false, // 是否显示光标
  smartBackspace: true, // 智能删除，只删除不同内容部分
};

onMounted(() => {
  const typed = new Typed("#typed-output", options);

  // 在组件卸载时销毁 Typed 实例，避免内存泄漏
  onUnmounted(() => {
    typed.destroy();
  });
});
</script>

<template>
  <div>
    <!-- 用于展示动态打字效果 -->
    <div
      id="typed-output"
      style="width: 100%; font-size: 24px; color: #3c3c43c7"
    ></div>
  </div>
</template>
