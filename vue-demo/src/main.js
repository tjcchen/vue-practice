import Vue from 'vue';
import antd from "ant-design-vue";
// import App from './App.vue;
import Index from './views/hooks/Index.vue';
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false

Vue.use(antd);

Vue.message = 'hellooooo';

new Vue({
  // render: h => h(App),
  render: h => h(Index)
}).$mount('#app')
