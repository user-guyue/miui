/*
 * @Author: your name
 * @Date: 2020-11-11 21:41:56
 * @LastEditTime: 2020-12-11 18:19:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_ui\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引用和导入路由axios
import axios from "axios";
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// import Antdv from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
// 国际化文案
// import  ConfigProvider  from 'ant-design-vue'
// 把axios导入到vue
Vue.prototype.$http = axios
// Vue.use(Antdv);
// Vue.use(ConfigProvider);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
