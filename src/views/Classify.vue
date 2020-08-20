<template>
  <div id="App">
    <van-nav-bar title="分类"></van-nav-bar>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item to="/classify" title="生活用品" />
      <van-sidebar-item to="/classify/" title="食物" />
      <van-sidebar-item to="/classify/" title="床上用品" />
    </van-sidebar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      currentPage: 1,
    };
  }
};
</script>

<style>
</style>