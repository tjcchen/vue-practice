import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import ant-design-vue and its corresponding css, this works fine if you are using css
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.less";

// import Button from "ant-design-vue/lib/button";
// import "ant-design-vue/lib/button/style";

// After babel configuration
import { Button } from "ant-design-vue";

Vue.config.productionTip = false;

// Vue.use(Antd);
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
