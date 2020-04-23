<template>
  <div id="app">
    <a-tabs>
      <a-tab-pane key="Clock" tab="Clock">
        <button @click="destroyClock = !destroyClock">
          {{ destroyClock ? 'Init Clock' : 'Destroy Clock' }}
        </button>
       <Clock v-if="!destroyClock" />
      </a-tab-pane>
      <a-tab-pane key="Functional" tab="Functional Component">
        <Functional :name="name" />
        <TempVar
          :var1="`hello ${name}`"
          :var2="destroyClock ? 'hello vue' : 'hello world'"
        >
          <template v-slot="{ var1, var2 }">
            {{ var1 }}
            {{ var2 }}
          </template>
        </TempVar>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Clock from './Clock.vue';
import TempVar from './TempVar';
import Functional from './Functional';

export default {
  components: {
    Clock,
    Functional,
    TempVar
  }, 
  data: function() {
    return {
      destroyClock: false,
      name: 'Vue'
    }
  }
}
</script>

<style scoped lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>