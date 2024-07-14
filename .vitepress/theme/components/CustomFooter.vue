<template>
    <footer class="custom-footer">
        <div class="footer-content">
            <div class="text">
                <p>{{ message }}</p>
                <p>{{ copyright }}</p>
            </div>
            <div class="user-info">
                <online-user></online-user>
            </div>
        </div>
    </footer>
</template>

<script setup>
import OnlineUser from "../../views/onlineUser/OnlineUser.vue";

const message = "All rights reserved.";
const copyright = "Copyright © 2024 HK Group.";

</script>

<style scoped>
.custom-footer {
    border-top: 1px solid #E2E2E3;
    padding: 20px;
    text-align: center;
    background-color: #f8f8f8;
}

.footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-content .text {
    font-size: 14px;
    color: #67676C;
}

.user-info {
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 14px;
}

.user-info span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>