<template>
  <div id="app">
    <span>Message: {{ msg }}</span>
    <br/>

    <!-- VNodes :vnodes="getJSXSpan()" / -->

    <AnchorHeading1 :level="1" >hello world!</AnchorHeading1>

    <!-- The following format works as well -->
    <anchor-heading1 :level="1">hello world!</anchor-heading1>
    <anchor-heading2 :level="2">hello world!</anchor-heading2>
    <anchor-heading3 :level="3">hello world!</anchor-heading3>

    <!-- VNodes :vnodes="getAnchorHeading(4)" / -->
  </div>
</template> 

<script>
import AnchorHeading1 from './AnchorHeading.vue';
import AnchorHeading2 from './AnchorHeading.js';
import AnchorHeading3 from './AnchorHeading.jsx';

export default {
  name: 'Index',
  components: {
    AnchorHeading1,
    AnchorHeading2,
    AnchorHeading3,
    // VNodes: {
    //   functional: true,
    //   render: (h, ctx) => ctx.props.vnodes
    // }
  },
  data: function() {
    return {
      msg: 'hello vue'
    };
  },
  // methods: {
  //   getJSXSpan: function() {
  //     return <span>Message: {this.msg}</span>;
  //   },
  //   getAnchorHeading: function(level) {
  //     const Tag = `h${level}`;
  //     return <Tag>hello world!</Tag>;
  //   }
  // }
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>