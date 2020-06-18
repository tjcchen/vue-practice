<template>
  <div class="product-list">
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        {{ product.title }} - {{ product.price }} - {{ product.inventory }}
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
    products: state => state.products.all
  }),
  created: function() {
    this.$store.dispatch('products/getAllProducts');
  }
}
</script>

<style scoped>

</style>

