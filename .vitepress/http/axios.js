import axios from 'axios';

const instance = axios.create({
  baseURL: getBaseURL(), // 设置你的 baseURL
  timeout: 10000, // 设置超时时间
  headers: {
    'Content-Type': 'application/json',
    // 可以设置其他默认的请求头信息
  }
});

function getBaseURL() {
  let baseURL = '';

  if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000';
  }

  if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://knowledge-server-production.up.railway.app:3000';
  }
  return baseURL;
}

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
