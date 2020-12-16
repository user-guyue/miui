<!--
 * @Author: your name
 * @Date: 2020-11-11 21:41:57
 * @LastEditTime: 2020-12-12 16:34:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_ui\src\views\Home.vue
-->
<template>
  <div id="app" style="padding: 20px">
    <h1>我是首页</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
    }
  },
  created() {
    this.getPage()
  },
  methods: {
    getPage(){
      // this.$http.get("https://biger.applinzi.com/page.php").then(res=>{
      //  console.log(res.data)
      // })
    }
  }
}
</script>
<style lang="less" scoped>
.ant-form-item {
  margin-bottom: 4px;
}
</style>
