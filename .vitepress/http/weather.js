import axios from 'axios';

const baseURL = 'https://geoapi.qweather.com/v2';

// 创建基于 baseURL 的 Axios 实例
const instance = axios.create({
  baseURL,
  timeout: 10000, // 设置超时时间
});

const apiKey = 'dd9f6a939e6442b9ac995746233c6f1d';

// 查询城市信息
export async function getCityLocation(data) {
  const endpoint = `/city/lookup`;
  try {
    const response = await instance.get(endpoint, {
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
