<template>
  <div>
    {{ now }}
  </div>
</template>

<script>
// import moment from 'moment';
export default {
  data: function() {
    return {
      now: new Date()
    };
  }
};
</script>