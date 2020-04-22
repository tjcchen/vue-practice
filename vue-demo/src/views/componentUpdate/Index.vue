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

let name = 'world';

export default {
  components: {
    PropsAndData
  },
  data: function() {
    this.name = name;
    this.log = console.log;

    // Only data stored in the following object will be updating in child components
    return {
      // name: name,
      info: {},
      // info: {
      //   number: undefined
      // },
      list: []
    };
  },
  methods: {
    nameChangeHandler: function() {
      this.name = 'vue' + Date.now();
      this.log('this.name changed, but did not trigger child component updating', this.name);
    },
    infoChangeHandler: function() {
      this.info.number = 1;
      // Please notice this kind of writting,
      // it will change child component no matter the attribute is defined in data
      // this.$set(this.info, 'number', 2);   
      this.log('this info changed, but did not trigger child component updating', this.info);
    },
    listChangeHandler: function() {
      this.list.push(1, 2, 3);
      this.log('this.list changed, and child component was also updated', this.list);
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
