<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <p>
    我是hello组件的内容
  </p>
</div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  font-size: 14px;
}

a {
  color: #42b983;
}
</style>
