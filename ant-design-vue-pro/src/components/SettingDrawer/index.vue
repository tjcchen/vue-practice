<template>
  <div>
    <a-drawer placement="right" :closable="false" :visible="visible" @close="onClose" width="300px">
      <template v-slot:handle>
        <div class="theme-switch-icon" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClose() {
      this.visible = false;
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
