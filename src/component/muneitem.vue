<template>
  <div
    class="sidebar-container"
    @click="alldata($event)"
  >
    <el-menu
      :default-active="active"
      @open="handleOpen"
      @close="handleClose"
      unique-opened
      router
      mode="vertical"
      style="width:250px"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item
        v-for="menu in menuList"
        :key="menu.path"
        :item="menu"
      />
    </el-menu>
  </div>
</template>
<script>
import SidebarItem from "./mune";
export default {
  name: "Sidebar",
  components: { SidebarItem },
  props: {
    menuList: {
      type: Array,
      required: true
    },
    active: {
      type: String,
      required: true
    }
  },
  computed: {
    // 首次进入页面时展开当前页面所属的菜单
    defaultActive() {
      return this.$route.path;
    },
    fatherPath() {
      // console.log(this.$router.options)
      // 这里直接获取路由配置的 '/' 项
      return this.$router.options.routes[1].path;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    alldata(e) {
      // console.log(e)
    }
  },
  mounted() {
    console.log(this.menuList);
  }
};
</script>
<style>
</style>