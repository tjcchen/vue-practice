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
import Vue from 'vue';
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
  provide: function() {
    this.theme = Vue.observable({
      color: 'blue'
    });
    return {
      theme: this.theme
    };
  },
  methods: {
    changeColor: function(color) {
      if (color) {
        this.theme.color = color;
      } else {
        this.theme.color = this.theme.color === 'blue' ? 'red' : 'blue';
      }
    }
  }
}
</script>

