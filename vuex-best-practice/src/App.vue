<template>
  <div id="PAGE">
    <h1>Shopping Cart Demo</h1>
    <p>Account: {{ email }}</p>
    <hr/>
    <h2>Product</h2>
    <ProductList />
    <hr/>
    <h2>Shopping Cart</h2>
    <ShoppingCart />
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

export default {
  name: 'App',
  // computed: mapState({
  //   email: function() {
  //     // console.log(state);
  //     return '';
  //   }
  // }),
  computed: {
    email: function() {
      return 'chenyangpoppin@gmail.com';
    }
  },
  components: {
    ProductList,
    ShoppingCart
  },
  // data: function() {
  //   return {
  //     email: 'xxxx@gmail.com'
  //   }
  // }
}
</script>

<style>
#PAGE {
  font-family: tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
