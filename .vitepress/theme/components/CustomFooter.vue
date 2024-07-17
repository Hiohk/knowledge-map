<template>
  <footer class="custom-footer">
    <div class="footer-content">
      <div class="text">
        <div>{{ message }}</div>
        <div>{{ copyright }}</div>
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
const copyright = "Copyright © 2024-present HK Group.";
</script>

<style scoped>
.custom-footer {
  right: 0;
  bottom: 0;
  position: relative;
  border-top: 1px solid #e2e2e3;
  padding: 20px;
  text-align: center;
  background-color: #f8f8f8;
}

.footer-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.footer-content .text {
  font-size: 14px;
  color: #67676c;
}

.user-info {
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
  margin: 0 auto;
}

.user-info span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
