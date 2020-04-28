<template>
  <div class="childrenF border2">
    <h3>F point</h3>
    <button @click="getARef">Get A Reference</button>
    <button @click="getHRef">Get H Reference</button>
  </div>
</template>

<script>
export default {
  name: 'childrenF',
  inject: {
    getParentRef: {
      from: 'getRef',
      default: () => {}
    },
    getParentChildrenRef: {
      from: 'getChildrenRef',
      default: () => {}
    }
  },
  methods: {
    getARef: function() {
      console.log(this.getParentRef());
    },
    getHRef: function() {
      console.log(this.getParentChildrenRef('childrenH'));
    }
  }
}
</script>