<template>
  <div class="tab-body-watcherV2">
    <p>{{ fullName }}</p>
    <div>
      firstName: <input v-model="firstName" />
    </div>
    <div>
      lastName: <input v-model="lastName" />
    </div>
  </div>
</template>>

<script>
export default {
  name: 'watcherV2',
  data: function() {
    return {
      firstName: 'Andy',
      lastName: 'Chen',
      fullName: 'Andy Chen'
    }
  },
  // computed: {
  //   fullName: function() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // },
  watch: {
    firstName: function(val) {
      this.fullName = val + ' ' + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + ' ' + val;
    }
  }
}
</script>>

<style scoped>
.tab-body-watcherV2 {
  margin-top: 1em;
}
</style>
