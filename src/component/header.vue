<template>
  <div>
    <Sidebar
      :menuList="menuList"
      :active="active"
    ></Sidebar>
    <div class="top">
      <div class="breadcrumb-title">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="(item,i) in list"
            :key="i"
          >{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="user">
          <el-badge
            :value="value"
            class="new"
            type="primary"
          >
            <router-link to=""><i class="el-icon-bell"></i></router-link>
          </el-badge>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link"><img src="../../static/image/avatar.gif"><i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="">我的资料</router-link>
              </el-dropdown-item>
              <el-dropdown-item><a
                  target="_bank"
                  href="https://github.com/ITNood/vue-element-admin"
                >GitHub</a></el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="tag-view">
        <el-tag
          @click="changePath(i)"
          v-for="(tag,i) in mune"
          :class=" i==tagClass ? 'taglist':''"
          :key="i"
          :closable="i>0"
          :disable-transitions="false"
          @close="handleClose(i)"
        >
          {{tag.title}}
        </el-tag>
      </div>
      <router-view></router-view>
    </div>
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
      active: "",
      list: [],
      mune: [],
      menuList: [],
      value: 15,
      tagClass: 0
    };
  },
  created() {
    // this.menuList = this.$router.options.routes;
    this.menuList = [
      {
        name: "home",
        path: "/home",
        component: () => import("@/component/header.vue"),
        meta: { title: "首页", icon: "el-icon-s-tools" },
        children: [
          {
            path: "/redirect",
            component: () => import("@/component/header.vue"),
            meta: { title: "导航", icon: "el-icon-menu" },
            children: [
              {
                path: "/echart",
                component: () => import("@/view/echarts.vue"),
                meta: { title: "导航", icon: "el-icon-menu" },
                children: []
              }
            ]
          }
        ]
      }
    ];
  },
  mounted() {
    console.log(this.menuList);
    console.log(this.$router.options.routes);
    let data = {};
    //页面最初赋值
    this.active = this.$route.path;
    if (this.menuList[0].children.length) {
      data.title = this.menuList[0].children[0].meta.title;
    } else {
      data.title = this.menuList[0].meta.title;
    }

    data.path = this.menuList[0].path;
    this.mune = this.mune.concat(data);
    this.list = this.list.concat(data);
    console.log(this.$route);
  },
  methods: {
    //标签关闭
    handleClose(i) {
      this.mune.splice(i, 1);
      // console.log(this.mune.length)

      if (this.mune.length == i) {
        this.$router.push(this.mune[i - 1].path);
      } else if (this.tagClass < i) {
        return;
      } else {
        this.tagClass = this.tagClass - 1;
      }
    },
    changePath(i) {
      this.tagClass = i;
      this.$router.push(this.mune[i].path);
    },
    routes() {
      var routes = {
        children: this.$router.options.routes
      };

      var route = this.$route.matched;

      for (var i = 0; i < route.length - 1; i++) {
        routes = routes.children.find(e => e.name == route[i].name);
      }

      return routes.children;
    }
  },
  watch: {
    $route(to, from) {
      let newlists = [];
      // 监视路由显示路由的
      this.$route.matched.map(item => {
        let newlist = {};
        newlist.path = item.path;
        newlist.title = item.meta.title;
        newlists.push(newlist);
      });
      // console.log(newlists);
      this.list = newlists;

      //tag菜单 添加新的
      let newlist = {};
      //console.log(to)
      newlist.title = to.meta.title;
      newlist.path = to.path;
      let ispush = true;
      let newroute = this.routes();
      this.mune.map((list, i) => {
        if (list.title == newlist.title) {
          ispush = false;
          this.tagClass = i;
        }
      });

      if (ispush) {
        this.mune.push(newlist);
        this.tagClass = this.mune.length - 1;
      }

      // 对路由变化作出响应...
      // console.log(to.path);
      this.active = to.path;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
