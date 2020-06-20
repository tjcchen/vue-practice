<template>
  <div class="product-list">
    <p>moduleName: {{ moduleName }}</p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        {{ product.title }} - {{ product.price }} - {{ product.inventory }}
        <button
          :disabled="!product.inventory"
          @click="addToCart(product)"
        >
          Add To Shopping Cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'productList',
  data: function() {
    return {
      productList: 'productList'
    };
  },
  computed: mapState({
    products: state => state.products.all,
    moduleName: state => state.products.moduleName
  }),
  methods: {
    addToCart: function(product) {
      console.log('[ProductList method addToCart]: ');
      console.log(product);
      
      this.$store.dispatch('cart/addProductToCart', product);
    }
  },
  created: function() {
    this.$store.dispatch('products/getAllProducts');
  }
}
</script>

<style scoped>

</style>

