<template>
  <div id="app">
    <p class="button-group">
      <button @click="nameChangeHandler">Change this.name</button>
      <button @click="infoChangeHandler">Change this.info</button>
      <button @click="listChangeHandler">Change this.list</button>
    </p>
    <PropsAndData :name="name" :info="info" :list="list" />
  </div>
</template>

<script>
import PropsAndData from "./PropsAndData";

let name='world';

export default {
  components: {
    PropsAndData
  },
  data: function() {

    this.name = name;

    return {
      info: {},

      list: []
    };
  },
  methods: {
    nameChangeHandler: function() {

    },
    infoChangeHandler: function() {

    },
    listChangeHandler: function() {

    }
  }
}
</script>

<style scoped lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .button-group {
    color: #f00;
  }
}
</style>
