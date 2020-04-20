<template>
  <div>
    {{ log('render') }}
    {{ now }}
    <button @click="start = !start">{{ start ? 'stop' : 'start' }}</button>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data: function() {

  }


};
</script>