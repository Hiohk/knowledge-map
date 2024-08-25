<script setup>
import { onMounted } from 'vue';
import lottie from 'lottie-web';
import animationData from "../../commonData/lottie/404.json";

onMounted(() => {
    lottie.loadAnimation({
        container: document.getElementById('lottie-404'), // 动画将要渲染的DOM元素  
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
    });
});

</script>

<template>
    <div>
        <div id="lottie-404"></div>
    </div>
</template>

<style scoped>
#lottie-404 {
    height: 350px;
}
</style>