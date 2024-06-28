<script setup>
import {
  CheckOutlined,
  ClockCircleOutlined,
  TagOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons-vue";
</script>

<template>
  <div>
    <a-timeline mode="alternate">
      <a-timeline-item>
        <template #dot>
          <CheckOutlined style="font-size: 16px" />
        </template>
        <span class="date-time">2024-01-31</span>
        创建 Knowledge Map
      </a-timeline-item>

      <a-timeline-item>
        <span class="date-time">2024-02-02</span>
        初步完成搭建
      </a-timeline-item>

      <a-timeline-item>
        <a-badge-ribbon text="部署" color="green">
          <a-card title="Knowledge Map" size="small">
            <span class="date-time">2024-02-03</span>
            项目成功部署
          </a-card>
        </a-badge-ribbon>
      </a-timeline-item>

      <a-timeline-item color="red">
        <span class="date-time">2024-02-04</span>
        前端知识
      </a-timeline-item>

      <a-timeline-item>
        <template #dot>
          <CheckCircleOutlined style="font-size: 16px; color: #52c41a" />
        </template>
        <a-badge-ribbon text="正式发布" color="green">
          <a-card title="Knowledge Map" size="small">
            <span class="date-time">2024-03-10</span>
            网站对外发布
          </a-card>
        </a-badge-ribbon>
      </a-timeline-item>

      <a-timeline-item>
        <template #dot>
          <TagOutlined style="font-size: 16px" />
        </template>
        <span class="date-time">2024-03-11</span>
        后端知识
      </a-timeline-item>

      <a-timeline-item>
        <template #dot>
          <TagOutlined style="font-size: 16px" />
        </template>
        <span class="date-time">2024-03-31</span>
        首页改版
      </a-timeline-item>

      <!-- <a-timeline-item>
        <template #dot>
          <TagOutlined style="font-size: 16px" />
        </template>
        <span class="date-time">2024-04-02</span>
        搭建<span style="font-weight: 600">Chatbot-Gemini</span>
        https://chatbot-gemini-seven.vercel.app/
      </a-timeline-item> -->

      <a-timeline-item>
        <template #dot>
          <TagOutlined style="font-size: 16px" />
        </template>
        <span class="date-time">2024-05-26</span>
        添加 Java、JavaWeb、Maven、MyBatis
      </a-timeline-item>

      <a-timeline-item>
        <template #dot>
          <TagOutlined style="font-size: 16px" />
        </template>
        <span class="date-time">2024-06-28</span>
        上线评论功能
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<style scoped>
.date-time {
  color: #008dff;
  font-weight: 600;
}
</style>
