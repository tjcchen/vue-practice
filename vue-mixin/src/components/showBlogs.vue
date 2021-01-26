<template>
  <div id="show-blogs">
    <h2>All Blog Articles</h2>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <h2>{{ blog.title }}</h2>
      <article>{{ blog.body }}</article>
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
    print() {
      console.log('lifecycle created');
    }
  },
  created() {
    const vm = this;
    this.print();

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
#show-blogs {
  width: 1000px;
  margin: 0 auto;
}
#show-blogs .single-blog article {
  background: #f1f1f1;
  padding: 10px 5px;
  text-align: left;
}
</style>
