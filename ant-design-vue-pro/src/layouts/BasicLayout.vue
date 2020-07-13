<template>
  <div>
    <Header></Header>
    <SiderMenu></SiderMenu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SiderMenu from "./SiderMenu";

export default {
  name: "BasicLayout",
  components: {
    Header,
    Footer,
    SiderMenu
  }
};
</script>

<style>
</style>