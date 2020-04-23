<template>
  <div class="tab-body-computed-properties">
    <p>reverseMessage1: {{ reverseMessage1 }}</p>
    <p>reverseMessage2: {{ reverseMessage2() }}</p>
    <p>{{ now }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  name: 'computed',
  data: function() {
    return {
      message: 'hello vue!'
    };
  },
  computed: {
    reverseMessage1: function() {
      return this.message.split('')
                         .reverse()
                         .join('');
    },
    now: function() {
      return Date.now();
    }
  },
  methods: {
    reverseMessage2: function() {
      return this.message.split('')
                         .reverse()
                         .join('');
    }
  }
}
</script>
