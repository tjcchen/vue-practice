<template>
  <div class="link-group" v-cloak>
    <a href="/">{{ Home }}</a>
    <a href="/list">{{ List }}</a>
    <a href="/about">{{ About }}</a>
  </div>
</template>

<script>
export default {
  name: 'LinkGroup',
  data: function() {
    return {
      Home: 'home',
      List: 'list',
      About: 'about'
    };
  }
}
</script>

<style scoped lang="less">
.link-group {
  a {
    padding: 0 10px;
    &:hover {
      color: green;
    }
  }
}

[v-cloak] {
  display: none;
}
</style>

