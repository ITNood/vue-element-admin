<template>
  <div class="Header">
    <el-container>
  <el-header>   
           <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item,i) in list" :key="i" :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        </el-header>
  <el-container>
    <el-aside width="220px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
        </template>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    </el-aside>
  </el-container>
</el-container>
 <el-main>
        <router-view></router-view>
 </el-main>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
     list:[{
         name:"首页",path:"/"
     },
     {
         name:"首页",path:"/new"
     },{
         name:"首页",path:"/"
     }]
    }
  },
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
