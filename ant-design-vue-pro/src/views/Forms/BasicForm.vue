<template>
  <div>
    Time: <a-date-picker @change="onChange"></a-date-picker>
  </div>
</template>

<script>
export default {
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  }
};
</script>

<style>
</style>