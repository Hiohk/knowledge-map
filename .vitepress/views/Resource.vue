<script setup>
import { ref } from "vue";
import {
  PicCenterOutlined
} from "@ant-design/icons-vue";

const activeKey = ref("frontend");
const jumpTipDialog = ref(false);
const loading = ref(false);
const targetLink = ref("");

const headStyle = ref({
  color: "#D1802B",
  border: "1.5px solid #E6A23C",
  "border-bottom": "0",
  "font-size": "16px",
  "font-weight": "600",
  "margin-left": "-1px",
  background: "linear-gradient(to bottom, #fcf8ed, #fefbf5, #fff)",
});

const bodyStyle = ref({
  border: "1.5px solid #E6A23C",
  "border-top": "0",
});

const bookBodyStyle = ref({
  "margin-left": "-1px",
  border: "1.5px solid #E6A23C",
  "border-top": "0",
});

const docsData = ref([
  {
    title: "Vue3.0",
    href: "https://v3.cn.vuejs.org/",
    desc: "Vue3.0中文文档",
  },
  {
    title: "MDN",
    href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
    desc: "MDN文档",
  },
]);

const jumpToTarget = (data) => {
  jumpTipDialog.value = true;
  targetLink.value = data.href;
};

const confirmJump = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    jumpTipDialog.value = false;
    window.open(targetLink.value, "_blank");
  }, 1000);
};

const handleCancel = () => {
  jumpTipDialog.value = false;
};
</script>

<template>
  <div>
    <a-card
      class="card-item"
      title="技术文档"
      :headStyle="headStyle"
      :bodyStyle="bodyStyle"
    >
      <a-card-grid
        class="card-grid-item"
        v-for="(item, index) in docsData"
        :key="index"
        style="margin: 10px 1%; width: 23%; text-align: center"
        @click="jumpToTarget(item)"
        >{{ item.title }}
      </a-card-grid>
    </a-card>

    <a-card
      class="card-item"
      title="学习平台"
      :headStyle="headStyle"
      :bodyStyle="bodyStyle"
    >
      <a-card-grid style="margin: 10px 1%; width: 23%; text-align: center"
        >菜鸟教程</a-card-grid
      >
      <a-card-grid style="margin: 10px 1%; width: 23%; text-align: center"
        >W3school</a-card-grid
      >
      <a-card-grid style="margin: 10px 1%; width: 23%; text-align: center"
        >GitHub</a-card-grid
      >
      <a-card-grid style="margin: 10px 1%; width: 23%; text-align: center"
        >Content1</a-card-grid
      >
      <a-card-grid style="margin: 10px 1%; width: 23%; text-align: center"
        >Content2</a-card-grid
      >
      <a-card-grid style="margin: 10px 1%; width: 23%; text-align: center"
        >Content3</a-card-grid
      >
      <a-card-grid style="margin: 10px 1%; width: 23%; text-align: center"
        >Content4</a-card-grid
      >
      <a-card-grid style="margin: 10px 1%; width: 23%; text-align: center"
        >Content5</a-card-grid
      >
    </a-card>

    <a-card
      class="card-item"
      title="书籍推荐"
      hoverable
      :headStyle="headStyle"
      :bodyStyle="bookBodyStyle"
    >
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="frontend">
          <template #tab>
            <span>
              <PicCenterOutlined />
              前端书籍
            </span>
          </template>
          Tab 1....
        </a-tab-pane>
        <a-tab-pane key="backend">
          <template #tab>
            <span>
              <PicCenterOutlined />
              后端书籍
            </span>
          </template>
          Tab 2...
        </a-tab-pane>
      </a-tabs>
    </a-card>

    <a-modal
      v-model:open="jumpTipDialog"
      title="即将离开该平台"
      @ok="confirmJump"
      centered
      keyboard
      :maskClosable="false"
      :closable="false"
    >
      <template #footer>
        <a-button key="back" @click="handleCancel">取消</a-button>
        <a-button
          key="submit"
          type="primary"
          :loading="loading"
          @click="confirmJump"
          >继续访问</a-button
        >
      </template>
      <p>您即将离开该平台，请注意您的帐号和财产安全。</p>
      <p>{{ targetLink }}</p>
    </a-modal>
  </div>
</template>

<style scoped>
.card-item {
  margin: 20px auto;
}

.card-grid-item:hover {
  cursor: pointer;
}
</style>
