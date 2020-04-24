<template>
  <div id="app">
    This is a entry point file.
    <ChildrenA />
  </div>
</template>

<script>
import ChildrenA from './ChildrenA';
export default {
  name: 'Index',
  components: {
    ChildrenA
  },
  data: function() {
    return {

    };
  }
}
</script>>
