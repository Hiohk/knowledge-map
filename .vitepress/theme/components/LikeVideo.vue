<script setup>
import { ref } from "vue";

const activeKey = ref("1");
</script>

<template>
  <div class="sponsor">
    <a-tabs v-model:activeKey="activeKey" tab-position="left" animated>
      <a-tab-pane key="1" tab="车窗外的风景">
        <div class="artistic-text animate__animated animate__slideInDown">
          越过5291个人的车窗，看他们途中的故事
        </div>
        <iframe
          src="//player.bilibili.com/player.html?isOutside=true&aid=1656398310&bvid=BV1SE421w7B3&cid=1643652456&p=1"
          scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
      </a-tab-pane>


      <a-tab-pane key="1" tab="循环阿勒泰">
        <div class="artistic-text animate__animated animate__slideInDown">
          《我的阿勒泰》|“少女的雀跃，自由自在”
        </div>
        <iframe class="fun-video"
          src="//player.bilibili.com/player.html?isOutside=true&aid=1904325435&bvid=BV1US411F72E&cid=1547364335&p=1"
          scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped>
.artistic-text {
  margin-bottom: 10px;
  background: linear-gradient(to right, #ffb75e, #ffa6c9),
    linear-gradient(to top, #fadbd8, #f5bbff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  /* 添加阴影增强立体感 */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);

  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 28px;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-align: left;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
}

.artistic-text:hover {
  color: #ffb75e;
}

.fun-video {
  margin: 10px 0;
  width: 95%;
  height: 480px;
}
</style>
