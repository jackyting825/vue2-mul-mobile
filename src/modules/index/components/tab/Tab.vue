<template>
<div class="tab">
  <router-link tag="div" class="tab-item" to="/main">
    <span class="tab-link">主页</span>
  </router-link>
  <router-link tag="div" class="tab-item" to="/resource">
    <span class="tab-link">资源</span>
  </router-link>
  <router-link tag="div" class="tab-item" to="/me">
    <span class="tab-link">我的</span>
  </router-link>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 1em;
  background-color: beige;
}
.router-link-active{
  color: aqua;
}
.tab-item {
  flex: 1;
  text-align: center;
}
</style>
