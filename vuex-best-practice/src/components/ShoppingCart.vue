<template>
  <div class="shopping-cart">
    <h2>Order List</h2>
    <p v-show="!products.length"><i>Please Add Product to Shopping Cart</i></p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        {{ product.title }} - {{ product.price }} * {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">Submit Order</button></p>
    <p v-show="checkoutStatus">Submit {{ checkoutStatus }}</p>
  </div>
</template>

<script>
export default {
  name: 'shoppingCart',
  data: function() {
    return {
      shoppingCart: 'This is shopping cart section'
    }
  },
  // Todo: apply mapState and mapGetters to retrieve info( ES6 format )
  computed: {
    products() {
      return this.$store.getters['cart/cartProducts'];
    },
    total() {
      return this.$store.getters['cart/cartTotalPrice'];
    },
    checkoutStatus() {
      return this.$store.state.cart.checkoutStatus;
    }
  },
  methods: {
    checkout(products) {
      console.log('[shopping cart checkout]: ');
      console.log(products);

      // Todo: Investigate function createNamespacedHelpers
      
      this.$store.dispatch('cart/checkout', products);
    }
  }
}
</script>

<style scoped>

</style>
