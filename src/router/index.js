import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      name: "仓库",
      path: "/",
      component: ()=>import('@/view/home'),
      meta: { title: "仓库", icon: "el-icon-s-tools", },
      children: []
    },
    {
     // name: "导航",
      path: "/redirect",
      //component: Four,
      meta: { title: "导航", icon: "el-icon-menu" },
      children: [
        {
          //name属性与一级一致则不会新增
          name: "新闻",
          path: "/new",
          component: ()=>import('@/view/new'),
          meta: { title: "新闻", icon: "" },
        },

        {
          name: "我的",
          path: "/one",
          component: ()=>import('@/view/one'),
          meta: { title: "我的", icon: "" },
        },
        
        {
          name: "数据",
          path: "/two",
          component: ()=>import('@/view/two'),
          meta: { title: "数据", icon: "" },
          children: [
            {
              name: "接口",
              path: "/tre",
              component: ()=>import('@/view/tre'),
              meta: { title: "接口", icon: "" },
            },
          ]
        }
      ]
    },

  ]
})
