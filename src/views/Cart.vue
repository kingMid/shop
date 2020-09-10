<template>
  <div id="App">
    <van-nav-bar title="购物车"></van-nav-bar>
    <div class="card">
      <van-card
        v-for="(item,index) in productList "
        :key="index"
        num="1"
        :price="item.price"
        :desc="item.store"
        :title="item.name"
        :thumb="item.img"
      >
        <div slot="footer">
          <van-button size="mini" @click="delCart(item._id,index)">删除</van-button>
        </div>
      </van-card>
      <van-submit-bar class="submit-bar" :price="totalPrice" button-text="提交订单" @submit="onSubmit"></van-submit-bar>
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
      productList: [],
    };
  },
  created() {
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$toast.fail("请先登录");
      setTimeout(() => {
        this.$router.push("./mine");
      }, 1500);
    } else {
      axios({
        url: url.getCart,
        method: "get",
        params: {
          userId: this.userInfo._id,
        },
      })
        .then((res) => {
          console.log(res);
          for (let item of res.data) {
            this.productList.push(item.productId);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  methods: {
    onSubmit() {
      this.$toast.success("进入付款页面。。。。");
    },
    delCart(id, index) {
      this.productList.splice(index, 1);
    },
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice() {
      return (
        this.productList.reduce((sum, elem) => {
          sum += elem.price;
          return sum;
        }, 0) *
        10 *
        10
      );
    },
  },
};
</script>

<style lang="scss">
.card {
  margin-bottom: 2rem;
  position: fixed;
  top: 46px;
  bottom: 1rem;
  right: 0;
  overflow-y: scroll;
}
.submit-bar {
  margin-bottom: 1rem;
}
</style>