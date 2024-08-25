<script setup>
import { onMounted } from 'vue';
import lottie from 'lottie-web';
import animationData from "../../commonData/lottie/chat.json";

onMounted(() => {
    lottie.loadAnimation({
        container: document.getElementById('lottie-chat'), // 动画将要渲染的DOM元素  
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
    });
});

</script>

<template>
    <div>
        <div id="lottie-chat"></div>
    </div>
</template>

<style scoped>
#lottie-chat {
    height: 350px;
}
</style>