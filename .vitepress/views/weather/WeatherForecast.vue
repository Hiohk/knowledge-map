<template>
  <div class="card">
    <div class="search">
      <a-input-search
        v-model:value="city"
        placeholder="请输入城市名称"
        enter-button
        @search="checkWeather"
        @keyup.enter="checkWeather"
        size="large"
      />
    </div>
    <div class="error" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="weather" v-if="weatherData">
      <img :src="weatherIcon" class="weather-icon" alt="Weather Icon" />
      <h1 class="temp">{{ Math.round(weatherData.temp) }}°C</h1>
      <h2 class="city">{{ weatherData.city }}</h2>
      <div class="details">
        <div class="col">
          <img src="../../assets/img/weather/humidity.png" alt="Humidity" />
          <div>
            <p class="humidity">{{ weatherData.humidity }}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div class="col">
          <img src="../../assets/img/weather/wind.png" alt="Wind" />
          <div>
            <p class="wind">{{ weatherData.wind }} km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getCityLocation } from "../../http/weather.js";

const city = ref("");
const weatherData = ref(null);
const weatherIcon = ref("");
const error = ref("");

// Function to fetch weather data
const checkWeather = () => {
  if (!city.value) return;

  let obj = {
    location: city.value, //城市名称
    lang: "zh",
    number: 20, // 最多查询20条数据
  };
  getCityLocation(obj)
    .then((res) => {
      if (res.code === "200") {
        console.log("1111", res.location);
      }
      // weatherData.value = res.data;
    })
    .catch((err) => {
      error.value = "Error fetching weather data";
      weatherData.value = null;
    });
  // try {
  //   const response = await axios.get(
  //     `${apiUrl}location=${city.value}&key=${apiKey}&lang=zh&number=20`
  //   );

  // console.log("response:", response.data);
  // if (response.status === 404) {
  //   error.value = "Invalid city name";
  //   weatherData.value = null;
  //   return;
  // }

  // const data = response.data;
  // weatherData.value = {
  //   city: data.name,
  //   temp: data.main.temp,
  //   humidity: data.main.humidity,
  //   wind: data.wind.speed,
  // };

  // Set weather icon based on weather condition
  // switch (data.weather[0].main) {
  //   case "Clouds":
  //     weatherIcon.value = "../../assets/img/weather/clouds.png";
  //     break;
  //   case "Clear":
  //     weatherIcon.value = "../../assets/img/weather/clear.png";
  //     break;
  //   case "Rain":
  //     weatherIcon.value = "../../assets/img/weather/rain.png";
  //     break;
  //   case "Drizzle":
  //     weatherIcon.value = "../../assets/img/weather/drizzle.png";
  //     break;
  //   case "Mist":
  //     weatherIcon.value = "../../assets/img/weather/mist.png";
  //     break;
  //   default:
  //     weatherIcon.value = "../../assets/img/weather/clear.png";
  //     break;
  // }

  // error.value = null;
  // } catch (err) {
  //   error.value = "Error fetching weather data";
  //   weatherData.value = null;
  // }
};
</script>

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

.search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search input {
  border: none;
  outline: none;
  background-color: #ebfffc;
  color: #555;
  padding: 10px 25px;
  height: 60px;
  border-radius: 30px;
  flex: 1;
  margin-right: 16px;
  font-size: 18px;
}

.search button {
  border: none;
  outline: none;
  background-color: #ebfffc;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search button img {
  width: 16px;
}

.weather-icon {
  width: 170px;
  margin-top: 30px;
}

.weather h1 {
  font-size: 80px;
  font-weight: 500;
}

.weather h2 {
  font-size: 45px;
  font-weight: 400;
  margin-top: -10px;
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

.weather {
  display: none;
}

.error {
  text-align: left;
  margin-left: 10px;
  font-size: 14px;
  margin-top: 10px;
  display: none;
}
</style>
