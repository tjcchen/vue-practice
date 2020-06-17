<template>
  <div class="shopping-cart">
    {{ shoppingCart }}
  </div>
</template>

<script>
export default {
  name: 'shoppingCart',
  data: function() {
    return {
      shoppingCart: 'This is shopping cart section'
    }
  }
}
</script>

<style scoped>

</style>
