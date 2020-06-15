<template>
  <div class="test">
    <h2 @click="tap">test... {{msg}}</h2>
    <p>{{ value }}</p>
  </div>  
</template>

<script>
export default {
  name: 'test',
  props: {
    msg: {
      type: String,
      default: 'message'
    }
  },
  data: function() {
    return {
      value: 'vuejs'
    }
  },
  methods: {
    tap: function() {
      console.log('h2 tap event, inside component');
      
      this.$emit('tapOuter', this.value);
    }
  }
}
</script>

<style scoped>
.test {
  color: #f00;
}
</style>

