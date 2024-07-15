import axios from 'axios';

// 获取当前的IP信息
export async function getCurrentIp() {
  try {
    const response = await fetch(`https://api.ipify.org?format=json`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

// 根据IP查询详细地址信息
export async function getAddressByIp(ip) {
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}
