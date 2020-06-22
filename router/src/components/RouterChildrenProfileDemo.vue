<template>
  <div class="router-children-profile">
    <h2>This is Router Children Profile Component</h2>
    <p>{{ routerInfo }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildrenProfile',
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
};
</script>