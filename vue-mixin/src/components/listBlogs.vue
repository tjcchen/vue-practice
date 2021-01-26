<template>
  <div id="list-blogs">
    <h2>List Blog Titles</h2>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <h2>{{ blog.title }}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import searchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      blogs: [],
      search: ''
    };
  },
  methods: {

  },
  created() {
    const vm = this;
    axios.get('http://jsonplaceholder.typicode.com/posts').then(function(response) {
      vm.$data.blogs = response.data.slice(0, 5);
    });
  },
  computed: {

  },
  mixins: [searchMixin]
}
</script>

<style scoped>
#list-blogs {
  width: 1000px;
  margin: 0 auto;
}
</style>
