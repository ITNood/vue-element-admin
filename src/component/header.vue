<template>
  <div class="Header">
    <el-container>
      <el-header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="(item,i) in list"
            :key="i"
            :to="{ path: item.path }"
          >{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-container>
        <el-aside width="220px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
      <el-submenu v-for="(item,i) in mune"  :key="i" :index="item.path">
            <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
            </template>
            <el-submenu default-openeds v-for="(list,i) in item.child" :key="i" :index="list.path">
            <template slot="title">{{list.name}}</template>
            <el-menu-item  v-for="(mune,i) in list.child" :key="i" :index="mune.id" >{{mune.name}}</el-menu-item>
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
      key:"/",
     list:[
         {name:"首页",path:"/home"}, {name:"首页",path:"/home"}, {name:"首页",path:"/home"}
     ],
     mune:[
         {
            name:"导航",icon:"el-icon-location",path:"/",id:"1",child:[{ name:"导航a",path:"/new",id:"1-1"},{ name:"导航b",path:"/one",id:"1-2"}]
         },
         {
            name:"导航",path:"/2",icon:"el-icon-location",id:"2",child:[{ name:"导航a",path:"/3",id:"2-1" ,child:[{ name:"导航a1",path:"/4",id:"2-1-1"},{ name:"导航b",path:"/5",id:"2-2-2"}]},{ name:"导航b",path:"/6",id:"2-2"}]
         }
     ]
    }
  },
    methods:{
      handleOpen(key, keyPath) {
        if(key!=this.key){
          this.$router.push(key)
          this.key=key
          }
        return
      },
      handleClose(key, keyPath) {
       if(key!=this.key){
          this.$router.push(key)
          this.key=key
          }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
