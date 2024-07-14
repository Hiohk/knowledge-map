import axios from './axios';

// 获取当前的IP信息
export async function getCurrentIp() {
    try {
        const response = await axios.get('http://edns.ip-api.com/json');
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

// 根据IP查询详细地址信息
export async function getAddressByIp(ip) {
    try {
        const response = await axios.get(`http://ip-api.com/json/${ip}?lang=zh-CN`);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}