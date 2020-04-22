<template>
  <div id="app">
    This is an entry point template. {{ name }}
    a-tab-pane
    <clock></clock>

    <a-tabs>
      <a-tab-pane key="clock" tab="时钟">
       Clock Timer
      </a-tab-pane>
      <a-tab-pane key="Functional" tab="函数式组件">
        Clock Functional
      </a-tab-pane>
    </a-tabs>

  </div>
</template>

<script>
import Clock from './Clock.vue';
export default {
  components: {
    Clock
  }, 
  data: function() {
    return {
      name: 'Hello Vue!'
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>