<template>
  <div id="app">
    <a-tabs>
      <a-tab-pane key="Computed" tab="Computed Properties">
        <Computed />
      </a-tab-pane>
      <a-tab-pane key="Watcher" tab="Watcher">
        <Watcher />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>>

<script>
import Computed from './Computed';
import Watcher from './Watcher';

export default {
  name: 'Index',
  components: {
    Computed,
    Watcher
  },
  data: function() {
    return {

    };
  }
}
</script>>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

