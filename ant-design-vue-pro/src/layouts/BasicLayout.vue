<template>
  <div>
    <a-layout id="components-layout-demo" style="min-height:100vh;">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <SiderMenu></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background:#fff; padding:0;">
          <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="collapsed = !collapsed"></a-icon>
          <Header></Header>
        </a-layout-header>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align:center;">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SiderMenu from "./SiderMenu";

export default {
  name: "BasicLayout",
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    Header,
    Footer,
    SiderMenu
  }
};
</script>

<style scoped>
.trigger {
  height: 64px;
  line-height: 64px;
  vertical-align: bottom;
  padding: 0 18px;
  cursor: pointer;
  font-size: 18px;
}
</style>