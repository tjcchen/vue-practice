<template>
  <div class="tab-body-computed-propertiesV2">
    <p>{{ fullName }}</p>
    <div>
      firstName: <input v-model="firstName" />
    </div>
    <div>
      lastName: <input v-model="lastName" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComputedV2',
  data: function() {
    return {
      firstName: 'Andy',
      lastName: 'Chen'
    };
  },
  computed: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  watch: {
    fullName: function(newVal, oldVal) {
      console.log('new: %s, old: %s', newVal, oldVal);
    }
  }
}
</script>>

