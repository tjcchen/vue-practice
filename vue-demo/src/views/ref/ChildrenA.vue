<template>
  <div class="border">
    <h1>A point</h1>
    <button @click="() => getEPointRef()">Get E point Reference</button>
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
      setChildrenRef: (name, ref) => {
        this[name] = ref;
      },
      getChildrenRef: (name) => {
        return this[name];
      },
      getRef: () => {
        return this;
      }
    }
  },
  methods: {
    getEPointRef: function() {
      console.log(this.childrenE);
    }
  }
}
</script>

