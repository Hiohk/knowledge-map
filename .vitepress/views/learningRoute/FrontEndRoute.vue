<script setup type="module">
import { onMounted } from "vue";
import { frontEndData } from "../../routeData/frontEndData.mjs";
import MindElixir from "mind-elixir";

onMounted(() => {
  initMindMap();
});

const initMindMap = () => {
  let options = {
    el: "#map", // or HTMLDivElement
    direction: MindElixir.LEFT,
    draggable: true, // default true
    contextMenu: true, // default true
    toolBar: true, // default true
    nodeMenu: true, // default true
    keypress: true, // default true
    locale: "zh_CN", // [zh_CN,zh_TW,en,ja,pt,ru] waiting for PRs
    overflowHidden: false, // default false
    mainLinkStyle: 2, // [1,2] default 1
    mouseSelectionButton: 0, // 0 for left button, 2 for right button, default 0
    contextMenuOption: {
      focus: true,
      link: true,
      extend: [
        {
          name: "编辑节点",
          onclick: () => {
            alert("暂时不可编辑");
          },
        },
      ],
    },
    before: {
      insertSibling(el, obj) {
        return false;
      },
      async addChild(el, obj) {
        await sleep();
        return true;
      },
    },
  };

  let mind = new MindElixir(options);
  mind.init(frontEndData);
};
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  height: 500px;
  width: 100%;
}
</style>
