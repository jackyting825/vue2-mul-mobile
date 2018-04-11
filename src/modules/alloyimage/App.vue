<template>
<div id="app">
  <p>
      DEMI INDEX
  </p>
  <img ref="demo" :src="testImgURL" />
</div>
</template>

<script>

import testImgURL from '~/images/test/test.png'
import '~/plugins/alloyimage/alloyimage.min.js'

export default {
  name: 'app',
  data() {
    return {
      testImgURL: testImgURL
    }
  },
  mounted() {
    let pic1 = this.$refs.demo
    pic1.loadOnce(function() {
      window
        .$AI(pic1)
        .ps('素描')
        .replace(pic1)
    })
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
