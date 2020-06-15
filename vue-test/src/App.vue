<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Test msg="hello from other side" @tapOuter="tapOuter"></Test>
    <div @click="print">Please Click Me!</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test
  },
  methods: {
    print: function(e) {
      console.log('print: ' + e);
    },
    tapOuter: function(args) {
      console.log('outer component: ' + args);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
