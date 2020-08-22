import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";

// Import ant-design-vue and its corresponding css, this works fine if you are using css
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.less";

// import Button from "ant-design-vue/lib/button";
// import "ant-design-vue/lib/button/style";

// After babel configuration
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Divider,
  Menu
} from "ant-design-vue";

Vue.config.productionTip = false;

// Vue.use(Antd);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Divider);
Vue.use(Menu);

// Register v-auth directive to global context
Vue.use(Auth);

// Register Authorized component to global scope so that you can utilize it on every other components
Vue.component('Authorized', Authorized);

// Register iconfont to global context
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2022059_j0j15j3uemp.js', // generate from iconfont.cn
});

Vue.component('IconFont', IconFont);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");