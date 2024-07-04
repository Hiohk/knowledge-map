<script setup>
import { ref } from "vue";
import { getCityLocation, getCityWeather } from "../../http/weather";
import dayjs from "dayjs";
import { Icon } from "@iconify/vue";

// 使用 Vite 的动态导入功能
const icons = import.meta.glob("../../assets/icons/*.svg");
const iconUrl = ref("");
// 加载图标
const loadIcon = async () => {
  const icon = icons[`../../assets/icons/${weatherData.value.icon}.svg`];
  if (icon) {
    const module = await icon();
    iconUrl.value = module.default;
  } else {
    console.warn(`Icon ${weatherData.value.icon} not found`);
  }
};

const city = ref("");
const dataSource = ref([]);
const weatherData = ref(null);
const error = ref("");
const locationId = ref("");
const showWeatherData = ref(false);

const onSelect = (value, option) => {
  // console.log("onSelect", value, option);
  locationId.value = option.id;
  getCurrentCityWeather();
};

const highlightMatchedText = (text) => {
  const regex = new RegExp(city.value, "gi");
  const highlightedName = text.replace(
    regex,
    (match) => `<span style="color: red;">${match}</span>`
  );
  return highlightedName;
};

const getCurrentCityWeather = () => {
  getCityWeather({
    location: locationId.value,
    lang: "zh",
  }).then((res) => {
    if (res.code === "200") {
      weatherData.value = res.now;
      showWeatherData.value = true;
      loadIcon();
    }
  });
};

// 查询城市列表
const getCityList = () => {
  if (!city.value) {
    dataSource.value = [];
    return;
  }

  let obj = {
    location: city.value, //城市名称
    lang: "zh",
    number: 20, // 最多查询20条数据
  };
  getCityLocation(obj)
    .then((res) => {
      if (res.code === "200") {
        dataSource.value = res.location;
        dataSource.value.map((item) => {
          item.value = item.name;
        });
      }
    })
    .catch((err) => {
      error.value = "Error fetching weather data";
      weatherData.value = null;
      showWeatherData.value = false;
    });
};
</script>

<template>
  <div class="card">
    <div class="search">
      <a-auto-complete
        v-model:value="city"
        :dropdown-match-select-width="252"
        style="width: 300px"
        :options="dataSource"
        @select="onSelect"
        @search="getCityList"
      >
        <template #option="item">
          <div style="display: flex; justify-content: space-between">
            <span>
              <span v-html="highlightMatchedText(item.adm1)"></span>
              <span>-</span>
              <span v-html="highlightMatchedText(item.adm2)"></span>
              <span>市-</span>
              <span v-html="highlightMatchedText(item.name)"></span>
            </span>
            <span>{{ item.country }}</span>
          </div>
        </template>
        <a-input-search
          size="large"
          placeholder="请输入城市名称"
          enter-button
        ></a-input-search>
      </a-auto-complete>
    </div>
    <div class="error" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="weather" v-if="showWeatherData">
      <a-row class="container-top">
        <a-col :span="8" class="left-item">
          <span class="city">{{ city }} </span>
          <span><Icon icon="hugeicons:location-08"></Icon></span>
        </a-col>
        <a-col :span="12" :offset="4" class="right-item">
          <span
            >{{
              dayjs(weatherData.obsTime).format("YYYY-MM-DD HH:mm:ss")
            }}
            更新</span
          >
        </a-col>
      </a-row>

      <a-row :gutter="[16, 16]" class="container-middle">
        <a-col :span="6" class="weather-temp">
          <div>{{ weatherData.temp }}°C</div>
        </a-col>
        <a-col :span="14">
          <a-row :gutter="[10, 10]">
            <a-col :span="24">{{ weatherData.text }}</a-col>
            <a-col :span="24">体感温度：{{ weatherData.feelsLike }}</a-col>
          </a-row>
        </a-col>
        <a-col :span="4">
          <img :src="iconUrl" class="weather-icon" alt="QWeather Icons" />
        </a-col>
      </a-row>

      <div class="details">
        <div class="col">
          <div>
            <p class="humidity">{{ weatherData.humidity }}%</p>
            <p>相对湿度</p>
          </div>
        </div>
        <div class="col">
          <div>
            <p class="wind">{{ weatherData.windSpeed }} km/h</p>
            <p>风速</p>
          </div>
        </div>
        <div class="col">
          <div>
            <p class="wind">{{ weatherData.windScale }} km/h</p>
            <p>风力等级</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/google-front.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #222;
  font-family: "Poppins", sans-serif;
}

.card {
  width: 90%;
  max-width: 470px;
  background: linear-gradient(135deg, #00feba, #5b548a);
  color: #fff;
  margin: 100px auto 0;
  border-radius: 20px;
  padding: 40px 35px;
  text-align: center;
}

.weather {
  margin-top: 30px;
}

.search button img {
  width: 16px;
}

.weather-icon {
  width: 60px;
}

.details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  padding: 0 20px;
}

.details .col {
  display: flex;
  align-items: center;
  text-align: left;
}

.details .col img {
  width: 40px;
  margin-right: 10px;
}

.humidity,
.wind {
  font-size: 28px;
}

.error {
  text-align: left;
  margin-left: 10px;
  font-size: 14px;
  margin-top: 10px;
  display: none;
}

.container-top {
  display: flex;
  justify-content: space-between;
}

.left-item {
  font-size: 16px;
  text-align: left;
  display: flex;
  line-height: 100%;
}

.right-item {
  text-align: right;
}

.weather-temp {
  text-align: left;
  font-size: 60px;
  line-height: 100%;
}

.container-middle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
}
</style>
