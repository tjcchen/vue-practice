<template>
  <div class="childrenE border2">
    <h3 v-ant-ref="c => setChildrenRef('childrenE', c)">E point</h3>
  </div>
</template>

<script>
export default {
  name: 'childrenE',
  inject: {
    setChildrenRef: {
      default: () => {}
    }
  }
}
</script>