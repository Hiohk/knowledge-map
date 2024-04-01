<script setup>
import { QuestionCircleOutlined, QqOutlined, WechatOutlined, BellOutlined } from '@ant-design/icons-vue';

</script>

<template>
    <div class="container">
        <a-float-button-group shape="circle" :style="{ right: '15px' }">
            <a-tooltip placement="left" color="#fff">
                <template #title>
                    <div>
                        <img class="communication" src="../../../assets/img/qq.jpg" alt="qq群">
                    </div>
                </template>
                <a-float-button>
                    <template #icon>
                        <WechatOutlined />
                    </template>
                </a-float-button>
            </a-tooltip>


            <a-tooltip placement="left" color="#fff">
                <template #title>
                    <div>
                        <img class="communication" src="../../../assets/img/qq.jpg" alt="qq群">
                    </div>
                </template>
                <a-float-button>
                    <template #icon>
                        <QqOutlined />
                    </template>
                </a-float-button>
            </a-tooltip>

            <a-tooltip placement="left" color="#fff">
                <template #title>
                    <div class="tooltip">
                        <a-badge-ribbon text="预告" color="green">
                            <div class="tooltip-title">Future Plan</div>
                            <p>1. 2024年中旬，上线注册和登录功能；发布技术博客模块，开放评论功能</p>
                            <p>2. 2024年下旬，发布集成Gemini API的智能问答系统模块</p>
                            <p>3. 2024年底，发布交流社区模块</p>
                        </a-badge-ribbon>
                    </div>
                </template>
                <a-float-button>
                    <template #icon>
                        <BellOutlined />
                    </template>
                </a-float-button>
            </a-tooltip>


            <a-back-top :visibility-height="0" />
        </a-float-button-group>
    </div>
</template>

<style scoped>
.tooltip {
    background-color: #fff;
    margin: 0;
    color: #000;
    padding: 10px;
    width: auto;
}

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