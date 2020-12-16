<!--
 * @Author: your name
 * @Date: 2020-11-11 21:41:57
 * @LastEditTime: 2020-12-11 17:55:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_ui\src\views\About.vue
-->
<template>
  <div id="app">
    <h1>我是关于页面</h1>
    <button @click="message++">{{ message }}</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      message:1
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('* created,通常在这里做ajax操作,在这里可以操作data数据')
  },
  beforeMount() {
    console.log('beforeMount,还没有执行渲染')
  },
  mounted() {
    console.log('* mounted,初始化的数据已经在模版里渲染完毕,可以做dom操作')
  },
  beforeUpdate() {
    console.log('beforeUpdate,准备更新')
  },
  updated() {
    console.log('* updated,只要有数据更新就会被调用,新的数据已经在模版中渲染了')
  },
  beforeDestroy() {
    console.log('beforeDestroy,准备销毁组件')
  },
  destroyed() {
    console.log('destroyed,组件销毁了')
  },
  methods: {}
}
</script>
