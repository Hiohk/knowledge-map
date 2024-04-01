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
                        <a-badge-ribbon text="帮助文档" color="green">
                            <a-card title="Knowledge Graph" size="small">
                                <p>This is a knowledge summary website for front-end and back-end.</p>
                            </a-card>
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
}

.tooltip {
    color: #000;
    padding: 10px;
    width: auto;
}

.communication {
    width: 200px;
}
</style>