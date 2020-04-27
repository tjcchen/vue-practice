<template>
  <div class="border2">
    <h3 :style="{ color: theme1.color }" >F point</h3>
  </div>
</template>

<script>
export default {
  name: 'ChildrenF',
  components: {
    
  },
  inject: {
    theme1: {
      from: 'theme',
      default: () => ({})
    }
  }
}
</script>