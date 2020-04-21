<template>
  <div id="app">
    This is an entry point template. {{ name }}
    <clock></clock>
  </div>
</template>

<script>
import Clock from './Clock.vue';
export default {
  components: {
    Clock
  }, 
  data: function() {
    return {
      name: 'Hello Vue!'
    }
  }
}
</script>