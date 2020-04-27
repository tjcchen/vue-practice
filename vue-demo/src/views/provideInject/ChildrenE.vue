<template>
  <div class="border2">
    <h3 :style="{ color: theme.color }">E point</h3>
    <button @click="clickHandler">Change Color to Green</button>
  </div>
</template>

<script>
export default {
  name: 'ChildrenE',
  components: {
    
  },
  // inject data from parent provide
  inject: {
    theme: {
      default: () => ({})
    }
  },
  methods: {
    clickHandler: function() {
      if (this.theme.changeColor) {
        this.theme.changeColor('green');
      }
    }
  }
}
</script>