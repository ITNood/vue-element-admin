<template>
  <div class="Header">
    <Sidebar
      :menuList="menuList"
      :active="active"
    ></Sidebar>
    <div class="top">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="(item,i) in list"
          :key="i"
          :to="{ path: item.path }"
        >{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-tag
        :key="i"
        v-for="(tag,i) in mune"
        closable
        :disable-transitions="false"
        @close="handleClose(i)"
      >
        <router-link :to="tag.path">{{tag.title}}</router-link>
      </el-tag>
    </div>
    <router-view />
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
      active: "/new",
      list: [],
      mune: [],
      menuList: [
        {
          title: "About",
          path: "/",
          icon: "el-icon-menu",
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
                  title: "list",
                  path: "/tre",
                  children: []
                }
              ]
            }
          ]
        },
        {
          title: "Link",
          path: "/four",
          icon: "el-icon-menu",
          children: []
        }
      ]
    };
  },
  mounted() {
    console.log(this.menuList[0].title)
    let data={}
    // data.title=this.menuList[0].title
    // data.path=this.menuList[0].path
    // this.mune=data
    // this.mune.title=this.menuList[0].title
    // this.mune.path=this.menuList[0].path
  },
  methods: {
    handleClose(i) {
      consoel.log(i)
      this.mune.splice(this.mune[i],1);
    }
  },
  watch: {
    $route(to, from) {
      let newlists = [];
      this.$route.matched.map(item => {
        let newlist = {};
        if (item.meta.path == undefined) {
          newlist.path = "/";
        } else {
          newlist.path = item.path;
        }
        newlist.title = item.meta.title;
        newlists.push(newlist);
      });
      console.log(newlists);
      this.list = newlists;

      function flat(arr) {
        return [].concat(
          ...arr.map(item => [].concat(item, ...flat(item.children)))
        );
      }
      let newlist = flat(this.menuList);
      let tolist = [];
      let fromlist = [];
      newlist.map(item => {
        if (item.path == to.path) {
          // console.log(item)
          tolist = item;
        } else if (item.path == from.path) {
          fromlist = item;
        }
      });
      let ispush = true;
      this.mune.map(list => {
        if (list.title == tolist.title) {
          ispush = false;
        }
      });
      if (ispush) {
        this.mune.push(tolist);
      }
      this.active = to.path;
      // 对路由变化作出响应...
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  position: absolute;
  left: 270px;
}
.el-breadcrumb {
  margin-bottom: 15px;
}
.el-breadcrumb__item {
  line-height: 30px;
}
.el-tag {
  margin-right: 10px;
}
.el-tag > a {
  display: inline-block;
  color: #409eff;
  text-decoration: none;
}
</style>
