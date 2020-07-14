<template>
  <div>
    <a-drawer placement="right" :closable="false" :visible="visible" @close="onClose" width="300px">
      <template v-slot:handle>
        <div class="theme-switch-icon" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <h3>Theme</h3>
        <a-radio-group
          :value="$route.query.navTheme || 'dark'"
          @change="e => settingHandler('navTheme', e.target.value)"
        >
          <a-radio value="dark">Dark</a-radio>
          <a-radio value="light">Light</a-radio>
        </a-radio-group>

        <a-divider type="horizontal" />

        <h3>Navigation</h3>
        <a-radio-group
          :value="$route.query.navLayout || 'left'"
          @change="e => settingHandler('navLayout', e.target.value)"
        >
          <a-radio value="left">Left</a-radio>
          <a-radio value="top">Top</a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      navTheme: "dark",
      navLayout: "left"
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    settingHandler(type, value) {
      console.log(this.$route.query); // {navTheme: "light", navLayout: "top"}

      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    }
  }
};
</script>

<style scoped>
.theme-switch-icon {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  line-height: 48px;
  font-size: 20px;
  text-align: center;
  border-radius: 3px 0 0 3px;
  background: #1890ff;
  color: #fff;
}
</style>
