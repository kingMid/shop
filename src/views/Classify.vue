<template>
  <div id="App">
    <van-nav-bar title="分类"></van-nav-bar>
    <div class="category">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li
              @click="selectCate(item.type , index)"
              :class="{active:active==index}"
              v-for="(item,index) in types"
              :key="index"
            >{{item.typeName}}</li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list class="content" @load="onLoad" :finished="finished" v-model="isLoading">
              <div @click="goDetail(item._id)" class="content-item" v-for="(item,index) in productlist" :key="index">
                <img :src="item.img" alt />
                <p class="content-item-name">{{item.name}}</p>
                <p>￥{{item.price}}</p>
              </div>
            </van-list>
          </van-pull-refresh>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      types: [],
      active: 0,
      productlist: [],
      type: 1,
      start: 0,
      limit: 10,
      finished: false, //是否请求完数据
      isLoading:false//上拉加载
    };
  },
  created() {
    axios({
      url: url.getTypes,
    })
      .then((res) => {
        this.types = res.data;
        this.selectCate(this.type, this.active);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    selectCate(typeid, index) {
      this.active = index;
      this.type = typeid;
      this.productlist = [];
      this.getProductList();
      this.finished = false;
    },
    getProductList() {
      this.isLoading = true;
      axios({
        url: url.getProductsByType,
        method: "get",
        params: {
          type: this.type,
          start: this.productlist.length,
          limit: this.limit,
        },
      })
        .then((res) => {
          if (res.data.length != 0) {
            this.productlist = this.productlist.concat(res.data);
          } else {
            this.finished = true;
          }
          this.isLoading = false;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onLoad() {
      setTimeout(() => {
        this.getProductList();
      }, 3000);
    },
    onRefresh(){
       setTimeout(() => {
       this.productlist = [];
       this.getProductList();
      }, 2000);
    },
    goDetail(id){
      console.log(id);
      this.$router.push({
        path:'detail',
        query:{
          id:id
        }
      });
    }
  },
};
</script>

<style lang='scss'>
.nav {
  background-color: rgb(233, 225, 225);
  li {
    list-style-type: none;
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
  }
  .active {
    background-color: #fff;
  }
}
.container {
  position: fixed;
  top: 46px;
  bottom: 1rem;
  right: 0;
  overflow-y: scroll;
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  &-item {
    width: 40%;
    padding: 0 10px;
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
    }
    &-name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>