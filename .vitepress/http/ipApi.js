import axios from './axios';

function getBaseURL() {
  let urlStr = '';

  if (process.env.NODE_ENV === 'development') {
    urlStr = 'http';
  }

  if (process.env.NODE_ENV === 'production') {
    urlStr = 'https';
  }
  return urlStr;
}


// 获取当前的IP信息
export async function getCurrentIp() {
  try {
    const response = await axios.get(`${getBaseURL()}://edns.ip-api.com/json`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

// 根据IP查询详细地址信息
export async function getAddressByIp(ip) {
  try {
    const response = await axios.get(`${getBaseURL()}://ip-api.com/json/${ip}?lang=zh-CN`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}