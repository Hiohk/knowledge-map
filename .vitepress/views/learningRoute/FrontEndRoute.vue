<script setup type="module">
import { ref } from "vue";
import { frontEndData } from "../../routeData/frontEndData.mjs";
import { RedoOutlined, DownloadOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";

let MindElixir = null;
let mind = null;
import("mind-elixir")
  .then((module) => {
    MindElixir = module.default;
    initMindMap();
  })
  .catch((error) => {});

let exportData = ref(null);

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
            message.warning("暂时不可编辑");
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

  mind = new MindElixir(options);
  mind.init(frontEndData);
};

// 刷新数据
const refreshMindData = () => {
  initMindMap();
};

// 下载为png或svg
const downloadFile = async (type) => {
  try {
    let blob = null;
    if (type === "js") {
      // 将对象转换为JavaScript代码字符串
      const jsCode = `${JSON.stringify(exportData.value, null, 2)};\n`;
      blob = new Blob([jsCode], { type: "text/javascript" });
    }
    if (type === "png") {
      blob = await mind.exportPng(false);
    }
    if (type === "svg") {
      blob = await mind.exportSvg(false);
    }

    if (!blob) return;

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "front-end." + type;
    a.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    message.error(error);
  }
};

const exportMindMap = async (e) => {
  switch (e.key) {
    case "javascript":
      exportData.value = mind.getData();
      downloadFile("js");
      break;
    case "png":
      downloadFile("png");
      break;
    case "svg":
      downloadFile("svg");
      break;
  }
};
</script>

<template>
  <div>
    <div class="operation-btn">
      <a-flex gap="small" wrap="wrap">
        <a-button @click="refreshMindData">
          <template #icon>
            <RedoOutlined />
          </template>
          刷新数据
        </a-button>

        <a-dropdown>
          <template #overlay>
            <a-menu @click="exportMindMap">
              <a-menu-item key="javascript"> 导出为JS</a-menu-item>
              <a-menu-item key="png"> 导出为PNG </a-menu-item>
              <a-menu-item key="svg"> 导出为SVG </a-menu-item>
            </a-menu>
          </template>
          <a-button>
            <template #icon>
              <DownloadOutlined />
            </template>
            导出
          </a-button>
        </a-dropdown>
      </a-flex>
    </div>
    <div id="map"></div>
  </div>
</template>

<style scoped>
#map {
  height: 500px;
  width: 100%;
}

.operation-btn {
  margin-bottom: 15px;
}
</style>
