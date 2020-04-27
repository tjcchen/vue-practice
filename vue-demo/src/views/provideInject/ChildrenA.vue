<template>
  <div class="childrenA border">
    <h1>A point</h1>
    <button @click="() => changeColor()">Change Color</button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
  </div>
</template>

<script>
import ChildrenB from './ChildrenB';
import ChildrenC from './ChildrenC';
import ChildrenD from './ChildrenD';

export default {
  name: 'childrenA',

  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },

  // provide and inject API is used to communicate data between different components 
  // provide: function() {
  //   return {
  //     theme: {
  //       color: this.color
  //     }
  //   };
  // },

  provide: function() {
    return {
      theme: this  // need to pass this to provide
    }
  },

  data: function() {
    return {
      color: 'blue'
    }
  },

  methods: {
    changeColor: function(color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === 'blue' ? 'red' : 'blue';
      }
    }
  }
}
</script>

