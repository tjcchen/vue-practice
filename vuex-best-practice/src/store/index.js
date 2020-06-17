import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      email: 'chenyangpoppin@gmail.com'
    }
  },
  modules: {
    products
  }
});
