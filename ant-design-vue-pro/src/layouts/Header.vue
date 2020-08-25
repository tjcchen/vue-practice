<template>
  <div class="header">
    <a-dropdown class="dropdown">
      <a-icon type="global" />
      <a-menu slot="overlay" @click="localeChange" :selectedKeys="[$route.query.locale || 'zhCN']">
        <a-menu-item key="zhCN">
          <a href="javascript:;">中文</a>
        </a-menu-item>
        <a-menu-item key="enUS">
          <a href="javascript:;">English</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    localeChange({ key }) {
      this.$router.push({ query: { ...this.$route.query, locale: key } });
    }
  }
};
</script>

<style scoped lang="less">
.header {
  display: inline;
  margin-left: 18px;

  .dropdown {
    float: right;
    margin: 23px 30px 23px 0;
    font-size: 18px;
  }
}
</style>