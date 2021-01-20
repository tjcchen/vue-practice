<template>
  <div id="app">
    <!-- Inline svg image, associated configs in vue.config.js -->
    <ProSvgImg class="pro-svg"></ProSvgImg>
    <p>Item List Page</p>
    <LinkGroup></LinkGroup>
  </div>
</template>

<script>
import LinkGroup from '@/components/LinkGroup.vue';
import ProSvgImg from '@/assets/pro.svg';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

export default {
  name: 'List',
  components: {
    LinkGroup,
    ProSvgImg
  },
  created() {
    nprogress.start();
  },
  mounted() {
    this.$nextTick(function() {
      nprogress.done();
    });
  }
}
</script>

<style lang="less">
@import (reference) "../../style/reset.less";
body {
  background: @bgColor;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .pro-svg {
    width: 120px;
    height: 120px;
  }

  p {
    margin: 10px 0;
  }
}
</style>