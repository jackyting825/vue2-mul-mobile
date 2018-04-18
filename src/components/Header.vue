<template>
<header id="header" class="mui-bar mui-bar-nav">
  <a v-if="!noBackBtn" id="back" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
  <h1 id="title" class="mui-title">{{title}}</h1>
</header>
</template>

<script>
export default {
  name: 'myHeader',
  data() {
    return {

    }
  },
  props: ['title', 'noBackBtn']
}
</script>

<style lang="scss">
$title_bgColor: #2d9edf;
$title_color: #fff;

#header {
    background: $title_bgColor;
    #title {
        color: $title_color;
    }
}
</style>
