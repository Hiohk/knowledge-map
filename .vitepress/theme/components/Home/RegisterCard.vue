<template>
  <div class="container">
    <div class="login-form">
      <div class="header">
        <label class="title">Create an Account</label>
        <p class="description">
          Create your account in no time and this is an experimental feature.
        </p>
      </div>
      <div class="input_container">
        <Icon icon="mage:email" width="24" height="24" class="icon"></Icon>
        <input
          id="email_field"
          class="input_field"
          type="text"
          name="input-name"
          title="Inpit title"
          placeholder="name@mail.com"
        />
      </div>
      <div class="input_container">
        <Icon icon="solar:lock-password-linear" width="24" height="24" class="icon"></Icon>
        <input
          id="password_field"
          class="input_field"
          type="password"
          name="input-name"
          title="Inpit title"
          placeholder="Password"
        />
      </div>
      <a-button type="primary" size="large" @click="registerUser">Sign In</a-button>
    </div>
    <div class="testimonial">
      <p>
        注册功能暂时不可使用，这是一个未来计划
      </p>
      <div v-if="showTips" class="tooltips">{{tooltips}}</div>
      <div class="user-profile-picture">
        <Icon icon="flat-color-icons:portrait-mode" width="35" height="35" />
      </div>
      <div class="user">
        <span class="username">2024-07-17</span>
        <span class="occupation">Copyright © 2024-present HK Group.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { Icon } from "@iconify/vue";

const showTips = ref(false);
const tooltips = ref("该功能暂未开通，请稍等...");

const registerUser = () => {
  showTips.value = true;
  setTimeout(() => {
    showTips.value = false;
  }, 2000);
};
</script>

<style scoped>
.container {
  height: fit-content;
  display: flex;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
    0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
    0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.login-form {
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-radius: 9px 0 0 9px;
  background-color: #fff;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
}

.title {
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #2b2b2f;
  margin-bottom: 10px;
}

.description {
  max-width: 80%;
  margin: auto;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #5f5d6b;
}

.input_container {
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.icon {
  width: 20px;
  position: absolute;
  z-index: 99;
  left: 12px;
  bottom: 9px;
}

.input_field {
  width: auto;
  height: 40px;
  padding: 0 0 0 40px;
  border-radius: 7px;
  outline: none;
  border: 1px solid #e5e5e5;
  filter: drop-shadow(0px 1px 0px #efefef)
    drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
  transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
}

.input_field:focus {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 2px #115dfc;
  background-color: transparent;
}

.testimonial {
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(
      358.31deg,
      #fff -24.13%,
      hsla(0, 0%, 100%, 0) 338.58%
    ),
    linear-gradient(
      89.84deg,
      rgba(230, 36, 174, 0.15) 0.34%,
      rgba(94, 58, 255, 0.15) 16.96%,
      rgba(10, 136, 255, 0.15) 34.66%,
      rgba(75, 191, 80, 0.15) 50.12%,
      rgba(137, 206, 0, 0.15) 66.22%,
      rgba(239, 183, 0, 0.15) 82%,
      rgba(246, 73, 0, 0.15) 99.9%
    );
  border-radius: 0 9px 9px 0;
}

.testimonial p {
  color: #4d4c6d;
  font-size: 14px;
  text-align: center;
  font-weight: 600;
}

.user-profile-picture {
  width: 50px;
  height: 50px;
}

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
}

.username {
  color: #4d4c6d;
  font-size: 11px;
  text-align: center;
  font-weight: 600;
}

.occupation {
  color: rgb(141, 140, 161);
  font-size: 10px;
  text-align: center;
  font-weight: 600;
}

.tooltips {
  color: red;
}
</style>
