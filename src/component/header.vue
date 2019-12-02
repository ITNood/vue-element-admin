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
        :closable="i>0"
        :disable-transitions="false"
        @close="handleClose(i)"
      >
        <router-link :to="tag.path">{{tag.title}}</router-link>
      </el-tag>
    </div>
  </div>
</template>
<script>
import listRoutes from '../router/routes'
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
      menuList: []
    };
  },
  created() {
    this.menuList=this.$router.options.routes

  },
  mounted() {
    // console.log(this.menuList);
    // console.log(this.$router.options.routes);
    let data = {};
    //页面最初赋值
    this.active = this.$route.fullPath;
    data.title = this.menuList[0].name;
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
      // function flat(arr) {
      //   return [].concat(
      //     ...arr.map(item => [].concat(item, ...flat(item.children)))
      //   );
      // }
      //tag菜单 添加新的
      let newlist = {}
      newlist.title=to.name
      newlist.path=to.path
      console.log(to)
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
      this.active = to.path;
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
