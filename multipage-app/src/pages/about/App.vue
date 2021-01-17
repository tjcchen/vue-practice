<template>
  <div id="app">
    <img width="120px" height="120px" alt="Vue logo" src="../../assets/logo.png">
    <p>About Page</p>
    <LinkGroup></LinkGroup>
  </div>
</template>

<script>
import LinkGroup from '@/components/LinkGroup.vue';

export default {
  name: 'About',
  components: {
    LinkGroup
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
