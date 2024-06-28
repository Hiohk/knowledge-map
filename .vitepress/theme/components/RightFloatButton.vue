<script setup>
import {
  QuestionCircleOutlined,
  QqOutlined,
  WechatOutlined,
  BellOutlined,
} from "@ant-design/icons-vue";
</script>

<template>
  <div class="container">
    <a-float-button-group
      trigger="hover"
      :style="{ right: '15px' }"
    >
      <template #icon>
        <QuestionCircleOutlined />
      </template>

      <a-popover placement="left">
        <template #content>
          <div>
            <img class="communication" src="/qq.svg" alt="qq群" />
          </div>
        </template>
        <a-float-button>
          <template #icon>
            <WechatOutlined />
          </template>
        </a-float-button>
      </a-popover>

      <a-popover placement="left">
        <template #content>
          <div>
            <img class="communication" src="/qq.svg" alt="qq群" />
          </div>
        </template>
        <a-float-button>
          <template #icon>
            <QqOutlined />
          </template>
        </a-float-button>
      </a-popover>

      <a-popover placement="left">
        <template #content>
          <div>
            <p>
              1. 2024年中旬，上线评论功能 <a-tag color="orange">已发布</a-tag>
            </p>
            <p>2. 2024年下旬，发布集成Gemini API的智能问答系统模块</p>
            <p>3. 2024年底，发布交流社区模块</p>
          </div>
        </template>
        <template #title>
          <span>
            <a-badge-ribbon text="预告" color="green">
              <div class="tooltip-title">Future Plan</div>
            </a-badge-ribbon>
          </span>
        </template>
        <a-float-button>
          <template #icon>
            <BellOutlined />
          </template>
        </a-float-button>
      </a-popover>

      <a-back-top :visibility-height="0" />
    </a-float-button-group>

    
  </div>
</template>

<style scoped>
.communication {
  width: 200px;
}

.tooltip-title {
  font-size: 16px;
  color: #000;
  font-weight: 600;
  padding-top: 10px;
  margin-bottom: 10px;
}
</style>
