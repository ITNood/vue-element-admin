import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/home.vue"
import New from "../view/new.vue"
import One from "../view/one.vue"
import Tre from "../view/tre.vue"
import Four from "../view/four.vue"
import Two from "../view/two.vue"



Vue.use(Router)

export default new Router({
  routes: [
    {
      title: "仓库",
      path: "/",
      icon: "el-icon-s-tools",
      children: []
    },
    {
      title: "导航",
      path: "/four",
      icon: "el-icon-menu",
      children: [
        {
          title: "新闻",
          path: "/new",
          children: []
        },
        {
          title: "我的",
          path: "/abc",
          children: []
        },
        {
          title: "关于我们",
          path: "/one",
          children: []
        },

        {
          title: "数据",
          path: "/two",
          children: [
            {
              title: "接口",
              path: "/tre",
              children: []
            }
          ]
        }
      ]
    },
  ]
})
