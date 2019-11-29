<template>
  <div class="sidebar-container" @click="alldata($event)" >
    <el-scrollbar wrap-class="scrollbar-wrapper">
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
        active-text-color="#409EFF">
      <sidebar-item v-for="menu in menuList" :key="menu.path" :item="menu" />
    </el-menu>
  </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from './mune'
export default {
  name:'Sidebar',
  components: { SidebarItem },
  props:{
    menuList: {
      type: Array,
      required: true
    },
    active:{
       type: String,
      required: true
    }
  },
  computed: {
     // 首次进入页面时展开当前页面所属的菜单
    defaultActive(){
      return this.$route.path
    },
    fatherPath(){
      console.log(this.$router.options)
      // 这里直接获取路由配置的 '/' 项
      return this.$router.options.routes[1].path
    }
  },
  methods:{
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }, 
      alldata(e){
        console.log(e)
      }
  },
  mounted(){
    console.log(this.menuList)
  }
}
</script>
<style>
  .sidebar-container {
    transition: width 0.28s;
    height: 100%;
    position: fixed;
    font-size: 0px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
   
  }
   .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    }
    .el-scrollbar {
      height: 100%;
    }
    .scrollbar-wrapper {
      overflow-x: hidden!important;
     
    }
     .el-scrollbar__view {
        height: 100%;
      }
    .el-scrollbar__bar.is-vertical{
      right: 0px;
    }
    .is-horizontal {
      display: none;
    }
    .el-menu {
      border: none;
      height: 100%;
    }
    .is-active > .el-submenu__title{
        color: #f4f4f5!important;
    }
</style>