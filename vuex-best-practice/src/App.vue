<template>
  <div id="app">
    <h1>Shopping Cart Demo</h1>
    <p>Account: {{ email }}</p>
    <hr/>
    <h2>Products</h2>
    <ProductList/>
    <hr/>
    <h2>This is shopping cart section</h2>
    <ShoppingCart/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'App',
  computed: mapState({
    email: state => state.userInfo.email
  }),
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
#app {
  font: 16px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
