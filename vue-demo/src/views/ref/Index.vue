<template>
  <div id="app">
    <ChildrenA />
  </div>
</template>

<script>
import ChildrenA from './ChildrenA';
export default {
  name: 'Index',
  components: {
    ChildrenA
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.border, .border1, .border2 {
  border: 1px solid #000;
  padding: 16px 0;
  margin: 16px 16px 0;
}
.border1 {
  border: 1px solid #ccc;
}
.border2 {
  border: 1px solid #eee;
}
</style>
