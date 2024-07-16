---
title: 更新日志
layout: page
---

<div :class="$style.container" >
  <time-line/>
  <giscus-comment class="comment" />
  <a-back-top />
</div>

<script setup>
import TimeLine from "../../.vitepress/views/timeline/TimeLine.vue";
</script>

<style module>
  .container {
    max-width: 1200px;
    margin: 20px 10%;
  }
</style>
