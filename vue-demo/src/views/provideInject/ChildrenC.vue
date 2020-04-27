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
  },

  // By enabling this provide event in ChildrenC, it override ChildrenA's theme.color attribute
  // Its mechanism looks like event propogation
  // provide: function() {
  //   return {
  //     theme: {
  //       color: 'green'
  //     }
  //   };
  // }
}
</script>
