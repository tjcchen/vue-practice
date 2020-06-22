<template>
  <div id="app">
    <img alt="Vue logo" class="vue-logo-img" src="./assets/logo.png">
    <h2>Vue Router Demo</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: { }
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
.vue-logo-img {
  width: 100px;
  height: 100px;
}
</style>
