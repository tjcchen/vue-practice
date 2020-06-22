<template>
  <div class="link-groups">
    <router-link to="/foo">Go To Foo</router-link>
    <router-link to="/other">Go To 404</router-link>
    <router-link to="/a">Go To /a Will Redirect To /bar</router-link>
    <a href="#/foo">Go To Foo</a>
    <br/>

    <router-link to="/user/9">Go To /user/9</router-link>
    <router-link to="/user/9/profile">Go To /user/9/profile</router-link>
    <router-link to="/user/12/posts">Go To /user/12/posts</router-link>
    <br/>

    <!-- Sub component will be displaying at this section -->
    <div class="children-view-section">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RouterDemo'
}
</script>

<style scoped>
.link-groups {
  text-align: center;
}
.link-groups a {
  display: inline;
  margin-right: 20px;
}
.children-view-section {
  margin-top: 20px;
}
</style>