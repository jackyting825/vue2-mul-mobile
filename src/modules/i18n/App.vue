<template>
<div id="app">
  <div>
    {{$t("message.msg")}}
    <select ref="lang" @change="change()">
      <option value="1">
        中文
      </option>
      <option value="2">
        English
      </option>
    </select>
  </div>
  <p>

  </p>
</div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
    }
  },
  mounted() {
  },
  components: {
  },
  methods: {
    change() {
      let val = this.$refs.lang.value
      if (val === '1') { // 中文
        this.$i18n.locale = 'zh_CN'
      } else if (val === '2') { // English
        this.$i18n.locale = 'en_US'
      } else {
        this.$i18n.locale = 'zh_CN'
      }
    }
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
