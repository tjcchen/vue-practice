<template>
<li :data-id="id">
  <span v-if="!del" class="red">{{ title }}</span>
  <span v-else class="line-through">{{ title }}</span>
  <button v-show="!del" @click="clickHandler">Delete</button>
</li>
</template>

<script>
export default {
  props: {
    id: Number,  // The component will trigger error when id is not Number type
    title: String,
    del: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      value: Math.random()
    };
  },
  methods: {
    clickHandler: function() {
      console.log('clickHandler');
      this.$emit('delete', this.id, this.title);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  color: #f00;
}
.line-through {
  text-decoration: line-through;
}
</style>
