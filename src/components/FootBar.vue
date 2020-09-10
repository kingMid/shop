<template>
   <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="records" to="classify">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="mine">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
 data() {
    return {
      active: 0
    };
  }
}
</script>

<style>

</style>