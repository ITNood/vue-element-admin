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
  routes: [{
    name: "导航",
    path: "/",
    component: Home,
    redirect:"/new",
    meta: { title: "导航" ,icon:"el-icon-menu"},
    children: [
      {
        //name属性与一级一致则不会新增
        name: "导航",
        path: "/new",
        component: New,
        meta: { title: "新闻",icon:""},
      },
      
      {
        name: "我的",
        path: "abc",
        component: One,
        meta: { title: "我的",icon:"" },
      },
      {
        name: "关于我们",
        path: "one",
        component: One,
        meta: { title: " 关于我们",icon:"" },
      },
      {
        name: "数据",
        path: "two",
        component: Two,
        meta: { title: "数据",icon:"" },
        children: [
          {
            name: "接口",
            path: "/tre",
            component: Tre,
            meta: { title: "接口",icon:"" },
          },
        ]
      }
    ]
  },{
    name: "仓库",
    path: "/four",
    component:Four,
    meta: { title: "仓库",icon: "el-icon-s-tools",},
    children: []
}
  ]
})
