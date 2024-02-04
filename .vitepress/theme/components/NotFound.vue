<script setup>

</script>

<template>
    <div>
        <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
            <template #extra>
                <a-button type="link">返回首页</a-button>
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