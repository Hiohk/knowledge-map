---
title: Java 学习路线
layout: page
aside: false
---

<div :class="$style.container">
    <div :class="$style.title">Java 学习路线</div>
    <learning-route :route-data="backEndData"></learning-route>
    <giscus-comment />
</div>

<script setup>
import LearningRoute from "../../.vitepress/views/learningRoute/LearningRoute.vue";
import { backEndData } from "../../.vitepress/routeData/backEndData.mjs";
</script>

<style module>
.container {
    margin: 20px 9%;
}

.title {
    color: #3c3c43;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
}
</style>
