<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <show-blogs></show-blogs>
    <hr/>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';

export default {
  name: 'App',
  components: {
    'show-blogs': showBlogs,
    'list-blogs': listBlogs
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
