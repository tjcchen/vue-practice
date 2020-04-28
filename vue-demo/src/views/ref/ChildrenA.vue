<template>
  <div class="border">
    <h1>A point</h1>
    <button @click="() => getH3Ref()">Get H3 Reference</button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
  </div>
</template>

<script>
import ChildrenB from './ChildrenB';
import ChildrenC from './ChildrenC';
import ChildrenD from './ChildrenD';

export default {
  name: 'Index',
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  provide: function() {
    return {

    }
  },
  methods: {
    getH3Ref: function() {
      console.log(this.childrenE);
    }
  }
}
</script>

