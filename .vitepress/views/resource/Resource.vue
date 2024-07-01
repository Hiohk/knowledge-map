<script setup>
import { ref } from "vue";
import { PicCenterOutlined } from "@ant-design/icons-vue";
import { Icon } from "@iconify/vue";
import BooksRecommendation from "./BooksRecommendation.vue";
import {
  docsData,
  communityData,
  componentData,
  learningPlatformData,
} from "../../commonData/resource.mjs";
import { frontendBooks, backendBooks } from "../../commonData/books.mjs";

const activeKey = ref("frontend");
const jumpTipDialog = ref(false);
const loading = ref(false);
const targetData = ref("");

const headStyle = ref({
  color: "#D1802B",
  border: "1.5px solid #E6A23C",
  "border-bottom": "0",
  "font-size": "16px",
  "font-weight": "600",
  background: "linear-gradient(to bottom, #fcf8ed, #fefbf5, #fff)",
});

const bodyStyle = ref({
  border: "1.5px solid #E6A23C",
  "border-top": "0",
});

const bookBodyStyle = ref({
  border: "1.5px solid #E6A23C",
  "border-top": "0",
});

const jumpToTarget = (data) => {
  jumpTipDialog.value = true;
  targetData.value = data;
};

const confirmJump = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    jumpTipDialog.value = false;
    window.open(targetData.value.href, "_blank");
  }, 1000);
};

const handleCancel = () => {
  jumpTipDialog.value = false;
};

const anchorData = ref([
  {
    key: "1",
    href: "#anchor-docs",
    title: "技术文档",
  },
  {
    key: "2",
    href: "#anchor-community",
    title: "技术社区",
  },
  {
    key: "3",
    href: "#anchor-components",
    title: "UI 组件",
  },
  {
    key: "4",
    href: "#anchor-learning-platform",
    title: "学习平台",
  },
  {
    key: "5",
    href: "#anchor-books",
    title: "书籍推荐",
  },
]);
</script>

<template>
  <div>
    <a-row :gutter="16">
      <a-col :xs="19" :sm="19" :md="20" :lg="20" :xl="21">
        <a-card
          class="card-item"
          id="anchor-docs"
          title="技术文档"
          :headStyle="headStyle"
          :bodyStyle="bodyStyle"
        >
          <a-row :gutter="[16, 16]">
            <template v-for="(item, index) in docsData" :key="index">
              <a-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
                <a-card-grid class="card-grid-item" @click="jumpToTarget(item)">
                  <div class="card-grid-icon">
                    <Icon
                      :icon="item.icon"
                      style="width: 40px; height: 40px"
                      :style="item.color"
                    ></Icon>
                  </div>
                  <div class="card-grid-container">
                    <span class="card-grid-title">{{ item.title }}</span>
                    <span class="card-grid-desc">{{ item.desc }}</span>
                  </div>
                </a-card-grid>
              </a-col>
            </template>
          </a-row>
        </a-card>

        <a-card
          class="card-item"
          id="anchor-community"
          title="技术社区"
          :headStyle="headStyle"
          :bodyStyle="bodyStyle"
        >
          <a-row :gutter="[16, 16]">
            <template v-for="(item, index) in communityData" :key="index">
              <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <a-card-grid class="card-grid-item" @click="jumpToTarget(item)">
                  <div class="card-grid-icon">
                    <Icon
                      :icon="item.icon"
                      style="width: 40px; height: 40px"
                      :style="item.color"
                    ></Icon>
                  </div>
                  <div class="card-grid-container">
                    <span class="card-grid-title">{{ item.title }}</span>
                    <span class="card-grid-desc">{{ item.desc }}</span>
                  </div>
                </a-card-grid>
              </a-col>
            </template>
          </a-row>
        </a-card>

        <a-card
          class="card-item"
          id="anchor-components"
          title="UI 组件"
          :headStyle="headStyle"
          :bodyStyle="bodyStyle"
        >
          <a-row :gutter="[16, 16]">
            <template v-for="(item, index) in componentData" :key="index">
              <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                <a-card-grid class="card-grid-item" @click="jumpToTarget(item)">
                  <div class="card-grid-icon">
                    <Icon
                      :icon="item.icon"
                      style="width: 40px; height: 40px"
                      :style="item.color"
                    ></Icon>
                  </div>
                  <div class="card-grid-container">
                    <span class="card-grid-title">{{ item.title }}</span>
                    <span class="card-grid-desc">{{ item.desc }}</span>
                  </div>
                </a-card-grid>
              </a-col>
            </template>
          </a-row>
        </a-card>

        <a-card
          class="card-item"
          id="anchor-learning-platform"
          title="学习平台"
          :headStyle="headStyle"
          :bodyStyle="bodyStyle"
        >
          <a-row :gutter="[16, 16]">
            <template
              v-for="(item, index) in learningPlatformData"
              :key="index"
            >
              <a-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6">
                <a-card-grid class="card-grid-item" @click="jumpToTarget(item)">
                  <div class="card-grid-icon">
                    <Icon
                      :icon="item.icon"
                      style="width: 40px; height: 40px"
                      :style="item.color"
                    ></Icon>
                  </div>
                  <div class="card-grid-container">
                    <span class="card-grid-title">{{ item.title }}</span>
                    <span class="card-grid-desc">{{ item.desc }}</span>
                  </div>
                </a-card-grid>
              </a-col>
            </template>
          </a-row>
        </a-card>

        <a-card
          class="card-item"
          id="anchor-books"
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
              <books-recommendation :books="frontendBooks"></books-recommendation>
            </a-tab-pane>
            <a-tab-pane key="backend">
              <template #tab>
                <span>
                  <PicCenterOutlined />
                  后端书籍
                </span>
              </template>
              <books-recommendation :books="backendBooks"></books-recommendation>
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
          <a-alert
            message="您即将离开该平台，请注意您的帐号和财产安全"
            type="warning"
            show-icon
          />
          <div class="tip-content">
            <div>{{ targetData.desc }}</div>
            <a-button type="link" class="link-btn" @click="confirmJump">{{
              targetData.href
            }}</a-button>
          </div>
        </a-modal>
      </a-col>

      <a-col :xs="5" :sm="5" :md="4" :lg="4" :xl="3">
        <div class="anchor">
          <a-affix :offset-top="74">
            <a-anchor
              :offsetTop="64"
              :affix="false"
              :showInkInFixed="true"
              :items="anchorData"
            ></a-anchor>
          </a-affix>
        </div>
      </a-col>
    </a-row>

    <a-row :gutter="16">
      <a-col :xs="19" :sm="19" :md="20" :lg="20" :xl="21">
        <giscus-comment class="comment" />
      </a-col>
      <a-col :xs="5" :sm="5" :md="4" :lg="4" :xl="3"> </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.card-item {
  margin: 0 20px 20px;
}

.card-grid-item {
  border-radius: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 90px;
}

.card-grid-item:hover {
  cursor: pointer;
  background: linear-gradient(to bottom, #ead9c0, #fcf8ed, #fefbf5);
}

.card-grid-container {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card-grid-title {
  font-size: 16px;
  font-weight: 600;
}

.card-grid-title:hover {
  color: #e6a23c;
}

.card-grid-desc {
  color: #a2a2a2;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5em;
  max-height: 3em;
}

.tip-content {
  margin-top: 10px;
}

.link-btn {
  padding-left: 0px;
}

.comment {
  margin: 0 20px 20px;
}
</style>
