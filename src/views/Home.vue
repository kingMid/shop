<template>
  <div id="App">
    <van-nav-bar title="首页">
      <van-icon slot="right" @click="$router.push('/mine')">{{$store.state.userInfo.userName}}</van-icon>>
    </van-nav-bar>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {

  },
  computed:{

  }
};
</script>

<style lang="scss">

</style>