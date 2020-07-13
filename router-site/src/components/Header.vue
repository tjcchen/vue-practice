<template>
  <div id="HEADER" class="header">
    <router-link class="item" to="/home" data-page="home">Home</router-link>
    <router-link class="item" to="/blog" data-page="blog">Blog</router-link>
    <router-link class="item" to="/profile" data-page="profile">Profile</router-link>
    <router-link class="item" to="/about" data-page="about">About</router-link>
    <router-link class="item" to="/miscellaneous" data-page="miscellaneous">Miscellaneous</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
#HEADER {
  width: 1000px;
  height: 48px;
  text-align: center;
  margin: 2px auto 0;
}
#HEADER .item {
  display: inline-block;
  width: 199px;
  height: 48px;
  line-height: 48px;
  background: #f1f1f1;
  color: #000;
  text-decoration: none;
  border-right: 1px solid #ccc;
  -webkit-transition: all linear 300ms;
  transition: all linear 300ms;
}
#HEADER .item:hover,
#HEADER .item.router-link-active {
  background: #46bd87;
}
</style>