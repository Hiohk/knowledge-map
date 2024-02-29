---
title: 技术文章
layout: page
---

<a-config-provider :locale="locale">
    <Blog class="blog" />
</a-config-provider>

<script setup>
import {ref} from "vue";
import Blog from '../.vitepress/views/Blog.vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

const locale = ref(zhCN);
</script>

<style>
    .blog {
        max-width: 1200px;
        margin: 0px auto;
    }
</style>
