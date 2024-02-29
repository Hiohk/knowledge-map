<script setup>
import { ref } from "vue";
import {
    EllipsisOutlined,
    ShareAltOutlined,
    QqOutlined,
    WechatOutlined,
    WeiboCircleOutlined,
    LikeTwoTone
} from '@ant-design/icons-vue';

const props = defineProps({
    currentPaperData: {
        type: Object
    }
});
const emit = defineEmits(["closePaperDetail"]);
const activeKey = ref(["1"]);
const paperObj = ref({});
paperObj.value = props.currentPaperData;

const backToCard = () => {
    emit("closePaperDetail", true);
};
</script>

<template>
    <div class="container">
        <a-row :gutter="[16, 24]">
            <a-col :span="20">
                <div class="content">
                    <a-page-header :title="paperObj.title" @back="backToCard">
                        <template #tags>
                            <a-tag color="pink">前端</a-tag>
                            <a-tag color="red">JavaScript</a-tag>
                            <a-tag color="orange">Vue.js</a-tag>
                            <a-tag color="green">基础知识</a-tag>
                            <a-tag color="cyan">编程</a-tag>
                            <a-tag color="blue">面试</a-tag>
                            <a-tag color="purple">笔试</a-tag>
                        </template>
                        <template #extra>
                            <LikeTwoTone :style="{ fontSize: '20px', color: '#08c' }" />
                            <a-popover :overlay-inner-style="{ padding: 0 }">
                                <template #content>
                                    <a-qrcode value="http://www.antdv.com" :bordered="false" />
                                </template>
                                <ShareAltOutlined :style="{ fontSize: '20px', color: '#08c', marginLeft: '10px' }" />
                            </a-popover>

                            <a-dropdown key="more">
                                <a-button :style="{ border: 'none', padding: 0, marginLeft: '10px' }">
                                    <EllipsisOutlined :style="{ fontSize: '20px', verticalAlign: 'top' }" />
                                </a-button>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>
                                            <a target="_blank" rel="noopener noreferrer" href="">
                                                <WechatOutlined />
                                                <span class="more">分享到微信</span>
                                            </a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a target="_blank" rel="noopener noreferrer" href="">
                                                <QqOutlined />
                                                <span class="more">分享到QQ</span>
                                            </a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <a target="_blank" rel="noopener noreferrer" href="">
                                                <WeiboCircleOutlined />
                                                <span class="more">分享到微博</span>
                                            </a>
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                        </template>
                    </a-page-header>
                    <div class="main-content">
                        {{ paperObj.content }}
                    </div>
                </div>
            </a-col>

            <a-col :span="4">
                <a-row :gutter="[16, 24]">
                    <a-col :span="24">
                        <div class="catalogue">
                            <a-collapse ghost v-model:activeKey="activeKey" expandIconPosition="end">
                                <a-collapse-panel key="1" header="目录">
                                    <a-anchor :affix="false" :items="[
                                        {
                                            key: '1',
                                            href: '#components-anchor-demo-basic',
                                            title: 'Basic demo',
                                        },
                                        {
                                            key: '2',
                                            href: '#components-anchor-demo-static',
                                            title: 'Static demo',
                                        },
                                        {
                                            key: '3',
                                            href: '#api',
                                            title: 'API',
                                            children: [
                                                {
                                                    key: '4',
                                                    href: '#anchor-props',
                                                    title: 'Anchor Props',
                                                },
                                                {
                                                    key: '5',
                                                    href: '#link-props',
                                                    title: 'Link Props',
                                                },
                                            ],
                                        },
                                    ]"></a-anchor>
                                </a-collapse-panel>
                            </a-collapse>

                        </div>
                    </a-col>
                    <a-col class="gutter-row" :span="24">
                        <div class="recommendation">推荐文章</div>
                    </a-col>
                </a-row>
            </a-col>

            <a-col :span="20">
                <div class="comment">评论区</div>
            </a-col>
        </a-row>
    </div>
</template>

<style scoped>
.container {
    max-width: 1200px;
    margin: 20px auto;
}

.content {
    height: 800px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background: linear-gradient(to right, #E0EBFE, #FFFFFF);
}

.main-content {
    margin: 0 30px;
}

.catalogue {
    min-height: 50px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background: linear-gradient(to right, #E0EBFE, #FFFFFF);
}

.recommendation {
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background: linear-gradient(to right, #E0EBFE, #FFFFFF);
}

.comment {
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background: linear-gradient(to right, #E0EBFE, #FFFFFF);
}

.demo-page-header :deep(tr:last-child td) {
    padding-bottom: 0;
}

.more {
    margin-left: 5px;
}
</style>