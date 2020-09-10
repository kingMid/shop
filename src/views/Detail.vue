<template>
  <div>
    <van-nav-bar title="商品详请" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
    <img :src="detail.img" alt class="detail-img" />
    <div class="detail">
      <p class="detail-name">{{detail.name}}</p>
      <p class="detail-price">￥{{detail.price}}</p>
      <p>商铺：{{detail.store}}</p>
      <p>地址：{{detail.address}}</p>
    </div>
    <div class="toolbar">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" @click="addCart"/>
        <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      detail:{},
    };
  },
  created() {
    axios({
      url: url.getDetail,
      method: "get",
      params: {
        id: this.$route.params.id,
      },
    })
      .then((res) => {
        this.detail = res.data;
        
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    addCart() {
      //检查是否登录 vuex保存登录状态
      if (JSON.stringify(this.userInfo) === "{}") {
        this.$toast.fail("未登录，请先登录");
        setTimeout(() => {
          this.$router.push("/mine");
        }, 1500);
      }else{
          //插入购物车

      }
    },
  },
};
</script>

<style lang='scss'>
.detail {
  &-img {
    width: 100%;
    height: 5rem;
  }
  &-name {
    color: #333;
    font-weight: bolder;
  }
  &-price {
    color: #ff7300;
    font-size: 0.5rem;
  }
}
</style>