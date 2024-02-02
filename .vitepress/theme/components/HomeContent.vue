<script setup>
import { ref } from 'vue';
const data = ref(["Vue.js", "JavaScript", "Node.js"]);
const value = ref(data[0]);
</script>

<template>
    <div>
        <a-flex class="boxStyle" justify="space-evenly" align="center">
            <a-card hoverable style="width: 240px">
                <template #cover>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>

            <a-card hoverable style="width: 240px">
                <template #cover>
                    <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>

            <a-card hoverable style="width: 240px">
                <template #cover>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>

            <a-card hoverable style="width: 240px">
                <template #cover>
                    <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
        </a-flex>


    </div>
</template>

<style scoped>
.boxStyle {
    width: 90%;
    border-radius: 6px;
    border: 1px solid #40a9ff;
    margin: 10px auto;
}
</style>