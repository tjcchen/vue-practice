<template>
  <div id="header" class="header">
    <router-link class="item" to="/home">Home</router-link>
    <router-link class="item" to="/blog">Blog</router-link>
    <router-link class="item" to="/profile">Profile</router-link>
    <router-link class="item" to="/about">About</router-link>
    <router-link class="item" to="/miscellaneous">Miscellaneous</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#header {
  width: 1000px;
  height: 48px;
  text-align: center;
  margin: 6px auto 0;
}
#header .item {
  display: inline-block;
  width: 199px;
  height: 48px;
  line-height: 48px;
  background: #f1f1f1;
  color: #000;
  text-decoration: none;
  border-right: 1px solid #ccc;
}
</style>