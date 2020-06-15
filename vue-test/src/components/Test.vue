<template>
  <div class="test">
    <h2>test... {{msg}}</h2>
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
  }
}
</script>

<style scoped>
.test {
  color: #f00;
}
</style>

