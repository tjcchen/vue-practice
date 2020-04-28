<template>
  <div class="childrenC border1">
    <h2>C point</h2>
    <ChildrenE />
    <ChildrenF />
  </div>
</template>

<script>
import ChildrenE from './ChildrenE';
import ChildrenF from './ChildrenF';

export default {
  name: 'childrenC',
  components: {
    ChildrenE,
    ChildrenF
  }
}
</script>