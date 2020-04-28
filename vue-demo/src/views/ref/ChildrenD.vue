<template>
  <div class="childrenD border1">
    <h2>D point</h2>
    <ChildrenG />
    <ChildrenH />
    <ChildrenI />
  </div>
</template>

<script>
import ChildrenG from './ChildrenG';
import ChildrenH from './ChildrenH';
import ChildrenI from './ChildrenI';

export default {
  name: 'childrenD',
  components: {
    ChildrenG,
    ChildrenH,
    ChildrenI
  }
}
</script>