/*
 * @Author: your name
 * @Date: 2020-11-11 21:41:57
 * @LastEditTime: 2020-12-12 16:35:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \响应式布局d:\practise\projectVue\vue-web_ui\src\router\index.js
 */
// 引入vue
import Vue from "vue";
// 引用和导入路由vue-router
import VueRouter from "vue-router";
// 引用和导入全局变量
import Total from '../Total';
// 把路由导入到vue
Vue.use(VueRouter);
// 向vue对象添加属性
Vue.prototype.Total = Total
const router = new VueRouter({
  routes: [
    {
      path: "/login", // 访问的地址
      name: "Login",
      component: () => import("../views/Login"), // 页面的路径
    },
    {
      path: "/user", // 访问的地址
      name: "User",
      meta:{reAuth:true},//代表当前路由需要权限
      component: () => import("../views/User"), // 页面的路径
    },
    {
      path: "/", // 访问的地址
      name: "Home",
      component: () => import("../views/Home"), // 页面的路径
      alias:["/home","/main"]//别名
    },
    {
      path: "/about", // 访问的地址
      name: "About",
      component: () => import("@/views/About"), // 页面的路径
    },
    {
      path: '/403',// 访问的地址
      name: '403',
      component: () => import('@/views/exception/403')// 页面的路径
    },
    {
      path: '/404',// 访问的地址
      name: '404',
      component: () => import('@/views/exception/404')// 页面的路径
    },
    {
      path: '/500',// 访问的地址
      name: '500',
      component: () => import('@/views/exception/500')// 页面的路径
    }
  ],
});
// 导航守卫
router.beforeEach(function(to,form,next){
  // to 要去哪个页面
  // form 从哪个页面来
  // next 最终去哪个页面
  console.log('to', to)
  console.log('form', form)
  if(to.meta.reAuth){
    if(Total.islogin){
      next(); // 如果登陆了,进入用户页面
    }else{
      next("/login") // 如果未登陆,进入登陆页面
    }
  }else{
    next(); 
  }
  
  // next必须调用
})
// 导出router
export default router;
