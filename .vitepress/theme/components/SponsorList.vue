<script setup>
import { ref } from 'vue';
const text = ref('https://www.antdv.com/');

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
            <a-col :span="24" class="sponsor-title">
                Sponsor List
            </a-col>
            <a-col :span="24" class="sponsor-content">
                <a-row :gutter="[16, 16]">
                    <a-col :span="24" class="column">
                        <transition name="fade">
                            <div class="sponsor-tip" @mouseenter="expandCard" @mouseleave="shrinkCard">
                                <div v-if="!expanded" key="sponsor">成为赞助商</div>
                                <div v-else key="content" class="content">广告招商：hk_snnu2020@163.com</div>
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

.sponsor-title {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #1D1E1C;
}

.sponsor-content {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.column {
    width: 100%;
    color: #1D1E1C;
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
    border: 1px solid #008DFF;
    background: linear-gradient(to right, #bbddf9, #cff6ee);
}

.sponsor-tip .content {
    color: transparent;
    /* 设置内容文字透明 */
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    /* 防止文字换行 */
    transition: color 0.5s ease;
    /* 添加颜色渐变过渡效果 */
}

.sponsor-tip:hover .content {
    color: #333;
    /* 文字渐变显示 */
}

.fade-enter-active,
.fade-leave-active {
    transition: transform 0.3s ease;
    /* 添加过渡效果 */
}

.fade-enter,
.fade-leave-to {
    transform: scaleY(0);
    /* 初始和结束状态的高度为0 */
}

.fade-enter-active .content,
.fade-leave-active .sponsor-text {
    transform: scaleY(1);
    /* 过渡时文字展开效果 */
}
</style>