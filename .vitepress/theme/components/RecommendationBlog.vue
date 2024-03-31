<script setup>
import robots from "../../../assets/img/robots.svg";
import { RightOutlined } from '@ant-design/icons-vue';

const expandText = () => {

};
</script>

<template>
    <div class="container">
        <a-row :gutter="[16, 8]">
            <a-col :span="24">
                <img class="cover-img" alt="robots" :src="robots" />
            </a-col>
            <a-col :span="24">
                <div class="tag">
                    <a-tag color="pink">Gemini</a-tag>
                    <a-tag color="#2db7f5">2024年下旬开放</a-tag>
                </div>
            </a-col>
            <a-col :span="24">
                <div class="title">
                    In late 2024, I will launch an intelligent question and answer module that integrates the Gemini
                    API.
                    <!-- Stay tuned! (Gemini——Experience Google's largest and most capable AI model.) -->
                </div>
            </a-col>
            <a-col :span="24">
                <div class="read-more" @click="expandText()">
                    Read More
                    <RightOutlined style="font-size: 12px" />
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<style scoped>
.container {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cover-img {
    width: 100%;
    height: 230px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #efefef;
    border-radius: 16px;
}

.tag {
    text-align: left;
}

.title {
    text-align: left;
    font-size: 18px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #000;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    /* 控制显示的行数 */
}

.read-more {
    text-align: left;
    font-size: 12px;
    color: #636465;
}

.read-more:hover {
    cursor: pointer;
    color: #008DFF;
}
</style>