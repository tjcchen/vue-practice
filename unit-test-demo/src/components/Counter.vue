<template>
  <div>
    <div>Count: {{ count }}</div>
    <button @click="() => increseCount()">Count++</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increseCount: function() {
      this.count++;
    }
  }
}
</script>