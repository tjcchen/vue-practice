<template>
  <div id="app">
    <!-- a-button>Button</a-button -->
    <div id="nav">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/abcd">404</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
