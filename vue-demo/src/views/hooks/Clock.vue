<template>
  <div class="clock-container">
    {{ log('render') }}
    {{ now }}
    <button @click="start = !start">{{ start ? 'stop' : 'start' }}</button>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data: function() {
    console.log('data');
    this.moment = moment;
    this.log = window.console.log;

    return {
      now: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      start: false
    };
  },
  watch: {
    start: function() {
      this.startClock();
    }
  },
  beforeCreate: function() {
    console.log('beforeCreate');
  },
  created: function() {
    console.log('created');
  },
  beforeMount: function() {
    console.log('beforeMount');
  },
  mounted: function() {
    console.log('mounted');
    this.startClock();
  },
  beforeUpdated: function() {
    console.log('beforeUpdated');
  },
  updated: function() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
     clearInterval(this.clockInterval);
  },
  destroyed() {
    console.log('destroyed');
  },
  methods: {
    startClock: function() {
      clearInterval(this.clockInterval);
      if (this.start) {
        this.clockInterval = setInterval(() => {
          this.now = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        }, 1000);
      }
    }
  }
}
</script>

<style scoped>
.clock-container {
  color: #f00;
}
</style>
