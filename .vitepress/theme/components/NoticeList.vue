<script setup>
import { ref } from "vue";
import RegisterCard from "./Home/RegisterCard.vue";
import ChatLottie from "../../views/lottie/ChatLottie.vue";

const expanded = ref(false);

const expandCard = () => {
  expanded.value = true;
};

const shrinkCard = () => {
  expanded.value = false;
};
</script>

<template>
  <div class="sponsor">
    <a-row :gutter="[16, 16]">
      <a-col :span="24" class="recommendation-title"> Recommendation </a-col>

      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <register-card></register-card>
      </a-col>

      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <chat-lottie class="chat-icon"></chat-lottie>
      </a-col>

      <a-col :span="24" class="sponsor-content">
        <a-row :gutter="[16, 16]">
          <a-col :span="24" class="column">
            <transition name="fade">
              <div class="sponsor-tip" @mouseenter="expandCard" @mouseleave="shrinkCard">
                <div v-if="!expanded" key="sponsor">成为赞助商</div>
                <div v-else key="content" class="content">
                  广告招商：hk_snnu2020@163.com
                </div>
              </div>
            </transition>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.sponsor {
  margin: 50px auto;
}

.recommendation-title {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #1d1e1c;
  margin-bottom: 30px;
}

.sponsor-content {
  margin-top: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  width: 100%;
  color: #1d1e1c;
}

.sponsor-tip {
  width: 200px;
  height: 50px;
  background-color: #f0f0f0;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: width 0.3s ease;
  overflow: hidden;
}

.sponsor-tip:hover {
  width: 400px;
  border-radius: 16px;
  border: 1px solid #008dff;
  background: linear-gradient(to right, #bbddf9, #cff6ee);
}

.sponsor-tip .content {
  color: transparent;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  transition: color 0.5s ease;
}

.sponsor-tip:hover .content {
  color: #333;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  transform: scaleY(0);
}

.fade-enter-active .content,
.fade-leave-active .sponsor-text {
  transform: scaleY(1);
}

.chat-icon {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
}
</style>
