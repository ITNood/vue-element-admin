<template>
  <div class="Header">
    <Sidebar :menuList="menuList"  :active="active"></Sidebar>
      <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="(item,i) in list"
            :key="i"
            :to="{ path: item.path }"
          >{{item.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <nav>
    <ul class="nav nav-list">
         <router-link v-for="(item,i) in mune" tag="li" :key="i" :to="item.path"><a href="#">{{item.title}}</a></router-link>
    </ul>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import Sidebar from "./muneitem.vue";
export default {
  name: "Header",
  components: {
    Sidebar
  },

  data() {
    return {
    active:"/new",
      list: [
        { title: "About", path: "/" },
      ],
            mune: [
        { title: "About", path: "/" },
      ],
      menuList: [
        {
          title: "About",
          path: "/",
          children: [
                     {
              title: "ABC",
              path: "/abc",
              children: []
            },
            {
              title: "About US",
              path: "/one",
              children: []
            },
    
            {
              title: "About Comp",
              path: "/two",
              children: [
                {
                  title: "About Comp A",
                  path: "/new",
                  children: [
                    {
                      title: "About Comp A 1",
                      path: "/tre",
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "Link",
          path: "/four",
          children: []
        }
      ]
    }
  },
  methods: {
   
  },
  watch: {
    '$route' (to, from) {
      let newlists =[]
      this.$route.matched.map(item=>{
         let newlist ={}
         if(item.meta.path==undefined){
          newlist.path ="/"
         }else{
          newlist.path =item.path
         }
          newlist.title=item.meta.title
          newlists.push(newlist)
      })
      console.log(newlists)
      this.list = newlists

     function flat(arr){
      return [].concat(...arr.map(item => [].concat(item, ...flat(item.children))));
    }
      let newlist= flat(this.menuList)
      let tolist = []
      let fromlist = []
      newlist.map(item=>{
        if(item.path==to.path){
          // console.log(item)
          tolist=item
        }
        else if(item.path==from.path){
           fromlist=item
        }
      })
      let ispush = true
      this.mune.map(list=>{
        if(list.title==tolist.title){
           ispush = false
        }
      })
      if(ispush){
          this.mune.push(tolist)
      }
      this.active=to.path
      // 对路由变化作出响应...
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-breadcrumb{
  position: absolute;
    left: 15%;
}
.el-tabs__header{
  margin: 175px
}
</style>
