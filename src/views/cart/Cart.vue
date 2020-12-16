<template>
  <div id="app">
    <h1>我是购物车页面</h1>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      @click-left="$router.go(-1)"
      left-arrow
    >
    </van-nav-bar>
    <van-checkbox v-model="checkAll" @change="toggleAll" style="margin:15px">全选</van-checkbox>
    <van-row gutter="20" v-for="item in goods" :key="item.id" style="margin:10px 0;">
      <van-col span="2">
        <van-checkbox-group v-model="result">
          <van-checkbox :name="item.id"  @change="onChange"> </van-checkbox>
        </van-checkbox-group>
      </van-col>
      <van-col span="22">
        <van-card
          :num="item.num"
          :price="item.price"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          style="border: 1px solid red"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Cart",
  data() {
    return {
      checkAll: false,
      goods: [
        { id: 1, num: 2, price: 1 },
        { id: 2, num: 2, price: 2 },
        { id: 3, num: 2, price: 3 },
        { id: 4, num: 2, price: 4 },
        { id: 5, num: 2, price: 5 },
        { id: 6, num: 2, price: 6 },
        { id: 7, num: 2, price: 7 },
        { id: 8, num: 2, price: 8 },
      ],
      result: [],
    };
  },
  //   created() {
  //       this.toggleAll()
  //   },
  methods: {
    onClickLeft() {
      Toast("返回上一页");
    },
    onClickRight() {
      Toast("按钮");
    },
    onChange(){
        const count = this.goods.length
        console.log(this)
        // console.log(this.result.length)
        if (this.result.length === count) {
            this.checkAll = true
        } else {
            this.checkAll = false
        }
        // console.log(this.result)
    },
    toggleAll(e) {
      if (e) {
        this.goods.forEach((item) => {
          this.result.push(item.id);
        });
      } else {
        this.result = [];
      }
    },
  },
};
</script>
<style scoped>
.van-nav-bar .van-icon {
  color: #999;
}
.van-nav-bar__text {
  color: #999;
}
.goods-card {
  margin: 0;
  /* background-color: @white; */
}
.delete-button,
.collect-button {
  height: 100%;
}
</style>