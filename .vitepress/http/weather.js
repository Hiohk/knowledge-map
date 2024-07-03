import axios from 'axios';

// 创建 Axios 实例
const instance = axios.create({
  timeout: 10000, // 设置超时时间
});

const apiKey = 'dd9f6a939e6442b9ac995746233c6f1d';

// 查询城市信息
export async function getCityLocation(data) {
  const baseUrl = `https://geoapi.qweather.com/v2/city/lookup`;
  try {
    const response = await instance.get(baseUrl, {
      params: {
        location: data.location,
        lang: data.lang,
        number: data.number,
        key: apiKey
      }
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

// 查询天气信息
export async function getCityWeather(data) {
  const baseUrl = `https://devapi.qweather.com/v7/weather/now`;
  try {
    const response = await instance.get(baseUrl, {
      params: {
        location: data.location,
        lang: data.lang,
        key: apiKey
      }
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}