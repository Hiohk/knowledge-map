---
title: 技术文章
layout: page
---

<blog class="blog" @getPaperDetail="getPaperDetail"></blog>

<a-modal
    v-model:open="showPaperDetail"
    title="文章详情"
    width="100%"
    height="100%"
    wrap-class-name="full-modal"
    @ok="handleOk"
    :bodyStyle="bodyStyle"
>
    <paper-detail class="detail" :current-paper-data="currentPaperData" @closePaperDetail="closePaperDetail"></paper-detail>
</a-modal>



<script setup>
import {ref} from "vue";
import Blog from '../.vitepress/views/Blog.vue';
import PaperDetail from '../.vitepress/views/PaperDetail.vue';

const showPaperDetail = ref(false);
const currentPaperData = ref({});
const bodyStyle = ref({
    'overflow-y': 'scroll'
});

const getPaperDetail = (data) => {
    // showPaperDetail.value = true;
    currentPaperData.value = data;
};

const closePaperDetail = (data) => {
    showPaperDetail.value = false;
};

const handleOk = e => {
  showPaperDetail.value = false;
};
</script>

<style>
    .detail,
    .blog {
        max-width: 1200px;
        margin: 0px auto;
    }
</style>

<style lang="less">
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>