<template>
  <div class="tab-body-watcher">
    {{ $data }}
    <br/>
    <button @click="() => (a += 1)">a + 1</button>
  </div>
</template>

<script>
export default {
  name: 'watcher',
  data: function() {
    return {
      a: 1,
      b: {
        c: 2,
        d: 3
      },
      e: {
        f: {
          g: 4
        }
      },
      h: []
    };
  },
  watch: {
    a: function(val, oldVal) {
      this.b.c += 1;
      console.log('new: %s, old: %s', val, oldVal);
    },
    'b.c': function(val, oldVal) {  // Please note this kind of writing 'b.c', which equals to 'parentOj.childObj'
      this.b.d += 1;
      console.log('new: %s, old: %s', val, oldVal);
    },
    'b.d': function(val, oldVal) {
      this.e.f.g += 1;
      console.log('new: %s, old: %s', val, oldVal);
    },
    e: {
      handler: function(val, oldVal) {  // this handler equals to function callback
        this.h.push('Smile');
        console.log('new: %s, old: %s', val, oldVal);
      },
      deep: true  // Adding this attribute will watch deeply inside the object
    },
    h(val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal);
    }
  }
}
</script>

