// userService.js

import axios from './axios'; // 引入封装的 Axios 实例

// 定义发送用户信息的方法
export async function sendUserData(userData) {
    try {
        const response = await axios.post('/api/track-user', userData);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

// 获取当前用户的信息
export async function getCurrentUserInfo(fingerprint) {
    try {
        const response = await axios.get('/users/get-user', {
            params: {
                fingerprint: fingerprint
            }
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

// 获取访问用户总数
export async function getTotalUserCount() {
    try {
        const response = await axios.get('/users/get-user-count');
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

