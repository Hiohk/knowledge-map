---
title: 技术文章
layout: page
---

<blog class="blog" v-if="showPaperDetail" @getPaperDetail="getPaperDetail"></blog>
<paper-detail class="detail" v-else :current-paper-data="currentPaperData" @closePaperDetail="closePaperDetail"></paper-detail>

<script setup>
import {ref} from "vue";
import Blog from '../.vitepress/views/Blog.vue';
import PaperDetail from '../.vitepress/views/PaperDetail.vue';

const showPaperDetail = ref(true);
const currentPaperData = ref({});

const getPaperDetail = (data) => {
    showPaperDetail.value = false;
    currentPaperData.value = data;
};

const closePaperDetail = (data) => {
    showPaperDetail.value = true;
};
</script>

<style>
    .detail,
    .blog {
        max-width: 1200px;
        margin: 0px auto;
    }
</style>
