<template>
  <div id="root">
    This is a root template, {{ msg }} : {{ count }}
    <button @click="$store.commit('increment')">count++</button>
  </div>
</template>

<script>
export default {
  name: 'root',
  data: function() {
    return {
      msg: 'vue'
    };
  },
  computed: {
    count: function() {
      return this.$store.state.count;
    }
  }
}
</script>