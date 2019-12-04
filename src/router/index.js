import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: ()=>import('@/view/home'),
      meta: { title: "首页", icon: "el-icon-s-tools", },
       children: []
    },
    {
      //name: "导航",
      path: "/redirect",
      component: ()=>import('@/view/four'),
      meta: { title: "导航", icon: "el-icon-menu" },
      children: [
        {
          //name属性与一级一致则不会新增
          name: "echarts",
          path: "/echarts",
          component: ()=>import('@/view/echarts'),
          meta: { title: "echarts", icon: "" },
        },

        {
          name: "one",
          path: "/one",
          component: ()=>import('@/view/one'),
          meta: { title: "我的"},
        },
        
        {
          name: "two",
          path: "/two",
          component: ()=>import('@/view/two'),
          meta: { title: "数据"},
          children: [
            {
              name: "tre",
              path: "/tre",
              component: ()=>import('@/view/tre'),
              meta: { title: "接口"},
            },
          ]
        }
      ]
    },

  ]
})
