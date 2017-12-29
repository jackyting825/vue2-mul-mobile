<template>
<div class="content">
  <p>
    主页面
  </p>
  <img :src="imageUrl"/>
</div>
</template>

<script>
import Hello from '@components/Hello'
import logo1 from '../../../../../static/images/index/logo1.png'

export default {
  components: {
    Hello
  },
  data() {
    return {
      imageUrl: logo1
    }
  }
}
</script>

<style lang="scss" scoped>
.tips {
    line-height: 1.25;
    text-align: left;
    text-indent: 2em;
}
.bread {
    background: green;
}
</style>
