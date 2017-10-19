<template>
<div class="tab">
  <router-link tag="div" class="tab-item" to="/">
    <span class="tab-link">登录方式一</span>
  </router-link>
  <router-link tag="div" class="tab-item" to="/loginTwo">
    <span class="tab-link">登录方式二</span>
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
}

.tab-item {
  flex: 1;
  text-align: center;
}
</style>
