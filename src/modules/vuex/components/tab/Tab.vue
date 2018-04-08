<template>
<div class="tab-wrapper">
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
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.tab-wrapper {
  /*position: fixed;*/
  /*bottom: 0;*/
  /*display: flex;*/
  flex-direction: row;
}

.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 1em;
  background-color: beige;
  flex: 0 0 auto;
}

.router-link-active {
  color: aqua;
}

.tab-item {
  flex: 1;
  text-align: center;
}
</style>
