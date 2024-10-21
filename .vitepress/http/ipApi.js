import axios from 'axios';

// 获取当前的IP信息
export async function getCurrentIp() {
  try {
    const response = await fetch(`https://api64.ipify.org?format=json`);
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
    const response = await fetch(`https://ipinfo.io/${ip}/json?token=5fad38bad46b3b`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}
