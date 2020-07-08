import Vue from 'vue';
// import Vuex from 'vuex';
// import App from './App.vue';
import Vuex from './min-vuexV2';
import Root from './Root.vue';

Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,
    message: 'vue'
  },
  mutations: {
    increment: function(state) {  // Note the first argument is state
      state.count++;
    },
    setMessage: function(state, message) {
      state.message = message;
    }
  },
  actions: {
    incrementHandler: function(context) {
      // Actions need to commit mutations's change, other vuex will not record the change
      setTimeout(() => { context.commit('increment'); }, 2000);
    },
    changeMessage: function(context, message) {
      context.commit('setMessage', message);
    }
  },
  // getters property equals to computed property in vue
  getters: {
    doubleCount: function(state) {
      return state.count * 2;
    }
  }
});

// Vue.prototype.$store = store;  // mount self-defined min-store to Vue prototype

new Vue({
  store,  // Make store become global variables
  // render: h => h(App),
  render: h => h(Root)
}).$mount('#app')
