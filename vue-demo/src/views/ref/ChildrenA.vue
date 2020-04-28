<template>
  <div class="border">
    <h1>A point</h1>
    <button @click="() => getH3Ref()">Get H3 Reference</button>
  </div>
</template>


<script>
export default {
  name: 'Index',
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

