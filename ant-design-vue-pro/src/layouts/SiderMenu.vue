<template>
  <div style="width: 256px">
    <!-- Todo: investigate this part of code when available -->
    <!-- :openKeys.sync="openKeys" two way binding -->
    <a-menu
      :selectedKeys="selectedKeys"
      :openKeys.sync="openKeys"
      :theme="theme"
      mode="inline"
    >
      <template v-for="item in menuData">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: $route.query })"
        >
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu.vue";
import { check } from "@/utils/auth";

export default {
  components: {
    "sub-menu": SubMenu
  },
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  },
  data() {
    this.selectedKeysMap = {};
    this.openKeysMap = {};
    const menuData = this.getMenuData(this.$router.options.routes);

    // this.$route.path refers to current url path, Eg: /dashboard/analysis

    return {
      collapsed: false,
      menuData,
      selectedKeys: this.selectedKeysMap[this.$route.path],
      openKeys: this.collapsed ? [] : this.openKeysMap[this.$route.path]
    };
  },
  watch: {
    "$route.path": function(val) {
      this.selectedKeys = this.selectedKeysMap[val];
      this.openKeys = this.collapsed ? [] : this.openKeysMap[val];
    }
  },
  methods: {
    getMenuData(routes = [], parentKeys = [], selectedKey) {
      const menuData = [];

      console.log("routes: ");
      console.log(routes);
      console.log("\r\n");

      for (let item of routes) {
        // console.log('openKeysMap: ');
        // console.log(this.openKeysMap);
        // console.log('selectedKeysMap: ');
        // console.log(this.selectedKeysMap);
        // console.log('\r\n');

        // Does not display relevant menu items when users do not have permission
        if (item.meta && item.meta.authority && !check(item.meta.authority)) {
          break;
        }

        if (item.name && !item.hideInMenu) {
          this.openKeysMap[item.path] = parentKeys; // Todo: comprehend this part
          this.selectedKeysMap[item.path] = [selectedKey || item.path];

          const newItem = { ...item };
          delete newItem.children;

          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(item.children, [
              ...parentKeys,
              item.path
            ]);
          } else {
            this.getMenuData(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            );
          }

          menuData.push(newItem);
        } else if (
          !item.hideInMenu &&
          !item.hideChildrenInMenu &&
          item.children
        ) {
          menuData.push(
            ...this.getMenuData(item.children, [...parentKeys, item.path])
          );
        }
      }

      return menuData;
    }
  }
};
</script>

<style scoped>
.sider-menu {
  color: #1890ff;
}
</style>