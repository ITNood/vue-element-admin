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
            :to="{ path: item.path }"
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
              <el-dropdown-item>我的资料</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="tag-view">
        <router-link
          :to="tag.path"
          v-for="(tag,i) in mune"
          :key="i"
        >
          <el-tag
            :closable="i>0"
            :disable-transitions="false"
            @close="handleClose(i)"
          >
            {{tag.title}}
          </el-tag>
        </router-link>
      </div>
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
      value:15
    };
  },
  created() {
    this.menuList = this.$router.options.routes;
  },
  mounted() {
    console.log(this.menuList);
    // console.log(this.$router.options.routes);
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
    // console.log(this.$route)
  },
  methods: {
    //标签关闭
    handleClose(i) {
      this.mune.splice(i, 1);
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
      console.log(to);
      let ispush = true;
      this.mune.map(list => {
        if (list.title == newlist.title) {
          ispush = false;
        }
      });
      if (ispush) {
        this.mune.push(newlist);
      }

      // 对路由变化作出响应...
      console.log(to.path);
      this.active = to.path;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
