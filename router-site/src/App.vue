<template>
  <div id="app">
    <img class="vue-logo" src="./assets/logo.png" />
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app .vue-logo {
  width: 60px;
  height: 60px;
}
#PAGE {
  width: 1000px;
  margin: 20px auto 0;
  text-align: left;
}
#PAGE .caption {
  font-weight: 700;
}
#PAGE .content {
  margin-top: 10px;
  padding: 10px 0;
  width: 100%;
  height: 500px;
  line-height: 1.4;
  text-align: justify;
}
</style>
