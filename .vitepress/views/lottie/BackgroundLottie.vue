<script setup>
import { onMounted } from 'vue';
import lottie from 'lottie-web';
import animationData from "../../commonData/lottie/background.json";

onMounted(() => {
    lottie.loadAnimation({
        container: document.getElementById('lottieId'), // 动画将要渲染的DOM元素  
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // path: "https://lottie.host/fc8caf1a-7ddc-44b0-aae2-2deeec6322af/jUuvM6DdmV.json", // 动画JSON文件的路径
        animationData: animationData
    });
});

</script>

<template>
    <div>
        <div id="lottieId"></div>
    </div>
</template>

<style scoped>
#lottieId {
    height: 400px;
    box-sizing: border-box;
}
</style>