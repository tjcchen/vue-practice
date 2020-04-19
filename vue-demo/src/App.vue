<template>
  <div id="app">
    <h3><img class="head-logo" src="./assets/logo.png">{{ headline }}</h3>
    <todo-list>
      <todo-item v-for="item in list" :key="item.id" :id="item.id" :title="item.title" :del="item.del" @delete="deleteHandler">
      </todo-item>
    </todo-list>

    <!-- Both of the following approaches can handle two-way binding -->
    <!-- v-model is just a shorthand of value and input change event -->
    <div class="two-way-binding">
      <p>Message: {{ message }}</p>
      <p>
        Approach 1: <input v-model="message">
      </p>
      <p>
        Approach 2: <input :value="message" @input="inputHandler">
      </p>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoItem
  },
  data: function() {
    return {
      headline: 'Learning Objects in The Year 2020',
      message: 'Hello Vue!',
      list: [
        { 
          id: 0,
          title: 'Learn Vue.js',
          del: false
        },
        { 
          id: 1, 
          title: 'Learn IOS',
          del: true
        },
        { 
          id: 2,
          title: 'Learn Java Spring MVC Framework',
          del: false
        },
        {
          id: 3,
          title: 'Learn C++',
          del: false
        }
      ]
    };
  },
  methods: {
    deleteHandler: function(delId, delTitle) {
      console.log('deleteHandler', delId, delTitle);
    },
    inputHandler: function(e) {
      // this.$emit('update:title', callback);

      this.message = e.target.value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-logo {
  width: 14px;
  height: 14px;
  margin-bottom: -1px;
  margin-right: 10px;
}
</style>
