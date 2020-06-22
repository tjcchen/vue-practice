<template>
  <div class="router-children-posts">
     <h2>This is Router Children Posts Component</h2>
     <p>{{ routerInfo }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildrenPosts',
  computed: {
    routerInfo() {
      const { fullPath, path, name, params, query, meta } = this.$route;

      return {
        fullPath,
        path,
        name,
        params,
        query,
        meta
      };
    }
  }
}
</script>