<template>
  <div>
    <div class="main">
      <div class="bottom">
        <div class="loader">
          <div class="loading">
            <div class="load"></div>
            <div class="load"></div>
            <div class="load"></div>
            <div class="load"></div>
          </div>
          <div class="albumcover">
            <a-popover placement="topLeft">
              <template #content>
                <div v-for="item in onlineUsersInfo" class="detail-info">
                  <div class="detail-left">
                    <Icon
                      :icon="getBrowserInfo(item.browserInfo)"
                      width="35"
                      height="35"
                    />
                  </div>
                  <div class="detail-right">
                    <div class="detail-right-bottom">
                      <span class="detail-text">{{
                        getOperatingSystemInfo(item.browserInfo)
                      }}</span>
                      <span class="detail-ip"
                        >IP: {{ item.locationInfo.ip }}</span
                      >
                      于
                      <span class="detail-text">{{
                        item.locationInfo.region
                      }}</span>
                    </div>
                    <div class="detail-right-bottom">
                      正在访问<span class="detail-ip">{{
                        item.currentURL
                      }}</span>
                    </div>
                  </div>
                </div>
              </template>
              <template #title>
                <span>正在浏览用户</span>
              </template>
              <icon
                icon="fluent-emoji-flat:man-artist"
                width="40"
                height="40"
              />
            </a-popover>
          </div>
          <div class="song">
            <div class="name">实时在线用户数:</div>
            <div class="artist">{{ onlineUserCount }}</div>
          </div>
        </div>
        <div class="loader">
          <div class="loading">
            <div class="load"></div>
            <div class="load"></div>
            <div class="load"></div>
            <div class="load"></div>
          </div>
          <div class="albumcover">
            <icon
              icon="vaadin:clipboard-user"
              width="40"
              height="40"
              style="color: #5cc7bb"
            />
          </div>
          <div class="song">
            <div class="name">总访问用户数:</div>
            <div class="artist">{{ totalUserCount }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { getCurrentUserInfo, getTotalUserCount } from "../../http/userService";
import { Icon } from "@iconify/vue";
import { trackUser } from "../../service/trackUser";
import UAParser from "ua-parser-js";
import { browserData } from "../../commonData/browser";
import { io } from "socket.io-client";

const currentPath = ref("");
let startTime = null;
const onlineUserCount = ref(0);
const totalUserCount = ref(0);
const onlineUsersInfo = ref([]);
let socket = null;

onMounted(trackUser);

const getBaseUrl = () => {
  let baseURL = "http://localhost:8000";
  if (process.env.NODE_ENV === "production") {
    baseURL = `https://knowledge-server-production.up.railway.app`;
  }
  return baseURL;
};

// 监听页面路径变化
onMounted(() => {
  socket = io(getBaseUrl(), {
    transports: ["websocket", "polling"],
  });

  currentPath.value = window.location.pathname;
  startTime = Date.now();

  // 发送当前页面路径到后端
  sendUserData();

  // 监听页面卸载事件，计算总浏览时长并发送
  onBeforeUnmount(() => {
    const endTime = Date.now();
    const totalTime = endTime - startTime;

    // 发送总浏览时长到后端
    socket.emit("totalTime", { totalTime });
  });

  // 监听Socket.io消息
  socket.on("onlineUsers", (message) => {
    onlineUserCount.value = message.count;
    onlineUsersInfo.value = message.users;
  });
});

// 发送用户数据到后端
const sendUserData = async () => {
  const FingerprintJS = await import("@fingerprintjs/fingerprintjs");
  const fpPromise = FingerprintJS.load({});
  const fp = await fpPromise;
  const result = await fp.get();

  const fingerprintId = result.visitorId;

  const userInfo = await getCurrentUserInfo(fingerprintId);
  const userIP = userInfo.locationInfo.ip; // 替换成从后端获取的用户IP地址
  const userLocation = userInfo.locationInfo.regionName; // 替换成从后端获取的用户地理位置信息

  socket.emit("pageView", {
    ip: userIP,
    location: userLocation,
    path: window.location.pathname,
    fingerprint: fingerprintId,
    timestamp: new Date().toISOString(),
  });

  getTotalCount();
};

const getTotalCount = () => {
  getTotalUserCount()
    .then((res) => {
      totalUserCount.value = res.totalUsers;
    })
    .catch((err) => {});
};

const getBrowserInfo = computed(() => {
  return (browserInfo) => {
    const parser = new UAParser(browserInfo);
    const browserName = parser.getBrowser().name;
    const iconString = browserData.find(
      (item) => item.name === browserName
    ).iconString;
    return iconString !== undefined ? iconString : "iconoir:computer";
  };
});

const getOperatingSystemInfo = computed(() => {
  return (browserInfo) => {
    const parser = new UAParser(browserInfo);
    return parser.getOS().name;
  };
});
</script>

<style scoped>
.main {
  background-color: white;
  padding: 1em;
  padding-bottom: 1.1em;
  border-radius: 15px;
  margin: 1em;
  width: 600px;
}

.loader {
  display: flex;
  flex-direction: flex-start;
  height: 4em;
  padding-left: 1em;
  padding-right: 1em;
  justify-content: left;
  border-radius: 10px;
  transition: 0.4s ease-in-out;
  flex: 1;
}

.loader:hover {
  cursor: pointer;
  background-color: lightgray;
}

.bottom {
  display: flex;
}

.spotify {
  width: 50px;
  height: 50px;
  margin-right: 0.6em;
}

.heading {
  color: black;
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
  margin-left: 10px;
}

.loading {
  display: flex;
  margin-top: 1em;
  margin-left: 0.3em;
  align-items: flex-end;
  padding-bottom: 10px;
  padding-right: 10px;
}

.load {
  width: 2px;
  height: 33px;
  background-color: limegreen;
  animation: 1s move6 infinite;
  border-radius: 5px;
  margin: 0.1em;
}

.load:nth-child(1) {
  animation-delay: 0.2s;
}

.load:nth-child(2) {
  animation-delay: 0.4s;
}

.load:nth-child(3) {
  animation-delay: 0.6s;
}

.albumcover {
  position: relative;
  margin-right: 1em;
  height: 40px;
  width: 40px;
  align-self: center;
  border-radius: 5px;
}

.song {
  position: relative;
  margin-right: 1em;
  color: black;
  align-self: center;
}

@keyframes move6 {
  0% {
    height: 0.2em;
  }

  25% {
    height: 0.7em;
  }

  50% {
    height: 1.5em;
  }

  100% {
    height: 0.2em;
  }
}

.name {
  color: #67676c;
}

.detail-info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.detail-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.detail-text {
  font-size: 14px;
  color: #67676c;
}

.detail-left {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.detail-ip {
  font-size: 14px;
  color: #3e94fb;
  margin: 0 10px;
}
</style>
