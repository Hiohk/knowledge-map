<script setup></script>

<template>
  <div class="sponsor">
    <a-row :gutter="[16, 16]">
      <a-col :span="24">
        <div class="artistic-text">Have fun！前奏一响，夏天到来~</div>
        <iframe
          class="fun-video"
          src="//player.bilibili.com/player.html?aid=1552289000&bvid=BV1K1421D7gL&cid=1485997962&p=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        >
        </iframe>
      </a-col>
      <a-col :span="24">
        <div class="artistic-text">
          坐绿皮火车去中国最北，一个人在小城漠河的日与夜
        </div>
        <iframe
          class="fun-video"
          src="//player.bilibili.com/player.html?aid=918553148&bvid=BV1Yu4y1L7rL&cid=1336607197&p=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        >
        </iframe
      ></a-col>
    </a-row>
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
  text-align: center;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
}

.artistic-text:hover {
  color: #ffb75e;
}

.fun-video {
  margin: 10px auto;
  width: 80%;
  height: 500px;
}
</style>
