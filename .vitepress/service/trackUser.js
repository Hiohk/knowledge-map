// trackUser.js

import { sendUserData, getCurrentUserInfo } from '../http/userService';
import { getCurrentIp, getAddressByIp } from "../http/ipApi";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

const fpPromise = FingerprintJS.load({
  apiKey: "dPNUFf2HUjxZUXM86PKw",
  region: "ap",
});

// 获取用户地理位置
async function getLocationInfo() {
  try {
    const res = await getCurrentIp();
    const response = await getAddressByIp(res.dns.ip);
    const locationInfo = {
      ip: res.dns.ip,
      ...response
    };
    return locationInfo;
  } catch (error) {
    return null;
  }
}

// 导出跟踪用户方法
export async function trackUser() {
  try {
    const fp = await fpPromise;
    const result = await fp.get();
    const visitorId = result.visitorId;

    const browserInfo = navigator.userAgent;
    const browseTime = new Date().toISOString();
    const locationInfo = await getLocationInfo(); // 获取用户地理位置

    const userData = {
      fingerprint: visitorId,
      browserInfo,
      browseTime,
      locationInfo,
      currentURL: window.location.href // 当前页面 URL
      // 其他需要收集的信息
    };

    // 发送数据到后端
    const response = await sendUserData(userData);
    // if (response.code === 200) {
    //     getUser(visitorId);
    // }
  } catch (error) {
    console.error("trackUser->Error loading FingerprintJS:", error);
  }
}

// export async function getUser(fingerId) {
//     getCurrentUserInfo(fingerId).then(res => { }).catch(err => { });
// }
