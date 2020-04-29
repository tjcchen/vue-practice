export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render: function(createElement) {
    return createElement(
      'h' + this.level,  // Tag Name
      this.$slots.default  // Children Elements Array
    );
  }
};