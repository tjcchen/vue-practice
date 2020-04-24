<template>
  <div id="app">
    <a-tabs>
      <a-tab-pane key="Directive" tab="Directive">
        <Directive />
      </a-tab-pane>
      <a-tab-pane key="CustomDirective" tab="Custom Directive">
        <CustomDirective />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Directive from './Directive';
import CustomDirective from './CustomDirective';
export default {
  name: 'Index',
  components: {
    Directive,
    CustomDirective
  },
  data: function() {
    return {
      message: 'hello vue'
    };
  }
}
</script>

<style scoped>
#app {
  text-align: center;
}
</style>

