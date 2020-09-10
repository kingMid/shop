<template>
  <div id="App">
    <van-nav-bar title="我的"></van-nav-bar>
    <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名或电话" v-model="loginUsername"></van-field>
          <van-field
            label="密码"
            type="password"
            required
            clearable
            placeholder="请输入密码"
            v-model="loginPassword"
          ></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large" @click="loginHandler">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名或电话" v-model="regUsername"></van-field>
          <van-field
            label="密码"
            type="password"
            required
            clearable
            placeholder="请输入密码"
            v-model="regPassword"
          ></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large" @click="regHandler">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
      regUsername: "",
      regPassword: ""
    };
  },
  methods: {
    ...mapActions(['loginAction']),
    //注册处理函数
    regHandler() {
      axios({
        url: url.regUser,
        method: "post",
        data: {
          userName: this.regUsername,
          password: this.regPassword
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            this.$toast.success("注册成功");
            this.regUsername = this.regPassword = "";
          } else {
            this.$toast.fail("注册失败");
          }
        })
        .catch(err => {
          console.log(err);
          this.$toast.fail("注册失败");
        });
    },
    //登录处理函数
    loginHandler() {
      axios({
        url: url.loginUser,
        method: "post",
        data: {
          userName: this.loginUsername,
          password: this.loginPassword
        }
      })
        .then(res => {
          if(res.data.code==200){
              this.$toast.success('登录成功');
                //保存登录信息
              this.loginAction(res.data.userInfo);
              this.$router.go(-1);
              console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
          this.$toast.fail('登录失败');
        });
    }
  }
};
</script>

<style>
</style>