<template>
  <div id="app">
    <a-tabs>
      <a-tab-pane key="Computed" tab="Computed Properties">
        <Computed />
      </a-tab-pane>
      <a-tab-pane key="Watcher" tab="Watcher">
        <Watcher />
      </a-tab-pane>
      <a-tab-pane key="VS" tab="VS">
        <ComputedV2 />
        <WatcherV2 />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>>

<script>
import Computed from './Computed';
import ComputedV2 from './ComputedV2';
import Watcher from './Watcher';
import WatcherV2 from './WatcherV2';

export default {
  name: 'Index',
  components: {
    Computed,
    ComputedV2,
    Watcher,
    WatcherV2
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

