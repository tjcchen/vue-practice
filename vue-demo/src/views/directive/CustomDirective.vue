<template>
  <div class="tab-body-custom-directive">
    <button @click="show = !show">Destroy</button>
    <button v-if="show" v-append-text="`hello ${number}`" @click="number++">Click Me {{ number }}</button>
  </div>
</template>>

<script>
export default {
  name: 'CustomDirective',
  directives: {
    appendText: {
      // Please note the following custom directives' hook functions
      // Eg: bind, inserted, update, componentUpdated, unbind
      bind: function() {
        console.log('bind');
      },
      inserted: function(el, binding) {
        el.appendChild(document.createTextNode(binding.value));
        console.log('inserted', el, binding);
      },
      update: function() {  // triggered when number changed
        console.log('update');
      },
      componentUpdated: function(el, binding) {
        el.removeChild(el.childNodes[el.childNodes.length - 1]);
        el.appendChild(document.createTextNode(binding.value));

        console.log('componentUpdated');
        console.log(el.childNodes);  // text DOM nodes
      },
      unbind: function() {  // triggered when button disappeared
        console.log('unbind');
      }
    }
  },
  data: function() {
    return {
      show: true,
      number: 1
    };
  }
}
</script>>

