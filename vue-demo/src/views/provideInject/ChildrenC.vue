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
  name: 'ChildrenC',
  components: {
    ChildrenE,
    ChildrenF
  }
}
</script>
