<template>
  <div class="clock-container">
    {{ now }}
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data: function() {
    return {
      now: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    };
  }
}
</script>
