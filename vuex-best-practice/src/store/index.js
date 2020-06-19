import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import cart from './modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      email: 'chenyangpoppin@gmail.com'
    },
    userAccount: {
      name: 'Andy Chen'
    },
    website: 'https://www.taobao.com'
  },
  modules: {
    products,
    cart
  }
});
