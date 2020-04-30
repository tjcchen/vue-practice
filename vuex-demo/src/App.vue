<template>
  <div id="app">
    {{ count }} : {{ $store.getters.doubleCount }} : {{ message }}

    <button @click="$store.commit('increment')">count++</button>
    <button @click="$store.dispatch('incrementHandler')">count++</button>
    <button @click="$store.dispatch('changeMessage', 'world')">change message</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    count: function() {
      // Retrieve data from vuex store
      return this.$store.state.count;
    },
    message: function() {
      return this.$store.state.message;
    }
  }
}
</script>