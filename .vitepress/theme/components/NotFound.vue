<script setup>
import NotFoundLottie from "../../views/lottie/NotFoundLottie.vue";

</script>

<template>
    <div>
        <a-result title="404" sub-title="对不起，您访问的页面不存在。">
            <template #icon>
                <not-found-lottie />
            </template>
            <template #extra>
                <a-button type="link" href="/knowledge-map/" target="_self">返回首页</a-button>
            </template>
        </a-result>
    </div>
</template>

<style scoped>
.not-found-img {
    width: 25%;
    margin: 0 auto;
}
</style>