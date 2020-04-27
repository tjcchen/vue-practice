<template functional>
  <div class="childrenI border2">
    <h3 :style="{ color: injections.theme.color }">I point</h3>
  </div>
</template>

<script>
export default {
  name: 'childrenI',
  inject: {
    theme: {
      default: () => ({})
    }
  }
}
</script>