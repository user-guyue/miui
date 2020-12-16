<!--
 * @Author: your name
 * @Date: 2020-11-11 21:41:56
 * @LastEditTime: 2020-12-11 17:46:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_ui\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o"> 首页 </van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="search">
        个人中心
      </van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="friends-o">
        关于
      </van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="setting-o">
        购物车
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.marginRight10 {
  margin-right: 10px;
}
.error-color {
  color: #ff4d4f;
}
.success-color {
  color: #52c41a;
}
.error-background {
  background: #ff4d4f;
}
.success-background {
  background: #52c41a !important;
}
</style>
