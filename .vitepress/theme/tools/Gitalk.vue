<script setup>
import { onMounted, watch } from "vue";
import { useRoute } from "vitepress";
import Gitalk from "gitalk";
import "gitalk/dist/gitalk.css";

const route = useRoute();

onMounted(() => {
  console.log("Mounted: ", route.path);
  initGitalk(route.path);
});

watch(route, (newRoute) => {
  initGitalk(newRoute.path);
});

function initGitalk(path) {
  const gitalk = new Gitalk({
    clientID: "Ov23liBD7YuwHcCuXGKV",
    clientSecret: "dcf177a4f5aa56ceccbeb4a48c89b8d0a076f880",
    repo: "knowledge-map-comments",
    owner: "Hiohk",
    admin: ["Hiohk"],
    id: path, // 使用页面路径作为唯一标识符
    distractionFreeMode: false, // 关闭干扰模式
    language: "zh-CN",
  });

  const container = document.getElementById("gitalk-container");
  if (container) container.innerHTML = ""; // 清空之前的评论内容

  gitalk.render("gitalk-container");
}
</script>

<template>
  <div id="gitalk-container"></div>
</template>

<style>
#gitalk-container {
  margin-top: 2em;
}
</style>
