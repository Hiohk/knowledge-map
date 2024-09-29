// trackUser.js
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { sendUserData } from '../http/userService';
import { getCurrentIp, getAddressByIp } from "../http/ipApi";
import UAParser from "ua-parser-js";

dayjs.extend(utc);
dayjs.extend(timezone);
const beijingTime = dayjs().tz('Asia/Shanghai');
const uap = new UAParser();


// 获取用户地理位置
export async function getLocationInfo() {
  try {
    const res = await getCurrentIp();
    const response = await getAddressByIp(res.ip);
    const locationInfo = {
      ip: res.ip,
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
    const FingerprintJS = await import("@fingerprintjs/fingerprintjs");
    const fpPromise = FingerprintJS.load();
    const fp = await fpPromise;
    const result = await fp.get();
    const visitorId = result.visitorId;

    const browserInfo = uap.getResult();
    const createTime = beijingTime.format('YYYY-MM-DD HH:mm:ss');
    const browseTime = beijingTime.format('YYYY-MM-DD HH:mm:ss');
    const locationInfo = await getLocationInfo(); // 获取用户地理位置

    const userData = {
      fingerprint: visitorId,
      browserInfo,
      browseTime,
      createTime,
      locationInfo,
      currentURL: window.location.href // 当前页面 URL
      // 其他需要收集的信息
    };

    // 发送数据到后端
    const response = await sendUserData(userData);
  } catch (error) {
    console.error("trackUser->Error loading FingerprintJS:", error);
  }
}
