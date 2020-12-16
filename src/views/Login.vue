<!--
 * @Author: your name
 * @Date: 2020-11-11 21:41:57
 * @LastEditTime: 2020-12-11 17:29:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_ui\src\views\Home.vue
-->
<template>
  <div id="app">
    <h1>我是登陆页面</h1>
    <van-button type="info" @click="login()">登录</van-button>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      
    }
  },
  methods: {
    login(){
      // 点击登录按钮,改变当前登录状态
      console.log(this.Total)
      this.Total.islogin = true;
      // 进入个人中心页面
      this.$router.push("user")
    }
  },
};
</script>
<style lang="less" scoped>
</style>
